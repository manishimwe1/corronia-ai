"use client";

import { useAuthContextHook } from "@/context/use-auth-context";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import TypeSelectionForm from "./TypeSelectionForm";
import dynamic from "next/dynamic";
import { Spinner } from "@/components/Spinner";

const DetailForm = dynamic(
	() => import("./account-details-form"),
	{
		ssr: false,
		//@ts-ignore
		loading: Spinner,
	},
);
const OTPForm = dynamic(() => import("./OTPForm"), {
	ssr: false,
	//@ts-ignore
	loading: Spinner,
});

const RegistrationFormStep = () => {
	const {
		register,
		formState: { errors },
		setValue,
	} = useFormContext();

	const { currentStep } = useAuthContextHook();
	const [onOTP, setOnOTP] = useState("");
	const [onUserType, setOnUserType] = useState<
		"owner" | "student"
	>("owner");

	setValue("otp", onOTP);

	switch (currentStep) {
		case 1:
			return (
				<TypeSelectionForm
					register={register}
					userType={onUserType}
					setUserType={setOnUserType}
				/>
			);

		case 2:
			return (
				<DetailForm
					errors={errors}
					register={register}
				/>
			);
		case 3:
			return (
				<OTPForm onOTP={onOTP} setOTP={setOnOTP} />
			);
	}
};

export default RegistrationFormStep;
