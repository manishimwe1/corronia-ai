"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";
import {
	UserRegistrationProps,
	UserRegistrationSchema,
} from "@/schemas/auth-schema";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React, {
	Dispatch,
	SetStateAction,
	useState,
} from "react";
import { useForm } from "react-hook-form";
import { onCompleteRegisteration } from "@/actions/auth";

export const useSignUpForm = () => {
	const { toast } = useToast();
	const [loading, setLoading] = useState(false);

	const { signUp, setActive, isLoaded } = useSignUp();

	const router = useRouter();
	const methods = useForm<UserRegistrationProps>({
		resolver: zodResolver(UserRegistrationSchema),
		defaultValues: {
			type: "owner",
		},
		mode: "onChange",
	});

	const onGenerateOTP = async (
		email: string,
		password: string,
		onNext: Dispatch<SetStateAction<number>>,
	) => {
		if (!isLoaded) return;
		try {
			await signUp.create({
				emailAddress: email,
				password: password,
			});
			await signUp.prepareEmailAddressVerification({
				strategy: "email_code",
			});

			onNext((prev) => prev + 1);
		} catch (error: any) {
			toast({
				title: "Error",
				description: error.errors[0]?.longMessage,
			});
		}
	};

	const onHandleSubmit = methods.handleSubmit(
		async (values: UserRegistrationProps) => {
			if (!isLoaded) return;

			try {
				const completeSignup =
					await signUp.attemptEmailAddressVerification(
						{
							code: values.otp,
						},
					);
				if (completeSignup.status !== "complete") {
					return {
						message: "Something went Wrong!",
					};
				}

				if (completeSignup.status == "complete") {
					if (!signUp.createdUserId) return;

					const registered =
						await onCompleteRegisteration(
							values.fullname,
							signUp.createdUserId,
							values.type,
						);

					if (
						registered?.status == 200 &&
						registered.user
					) {
						await setActive({
							session:
								completeSignup.createdSessionId,
						});
						setLoading(false);
						toast({
							title: "Successfull",
							description:
								"Successfull created",
						});
						router.push("/dashboard");
					}

					if (registered?.status == 400) {
						toast({
							title: "Error",
							description:
								"Something went wrong!",
						});
					}
				}
			} catch (error: any) {
				toast({
					title: "Error",
					description:
						error.errors[0].longMessage,
				});
			}
		},
	);

	return {
		methods,
		onHandleSubmit,
		onGenerateOTP,
		loading,
	};
};
