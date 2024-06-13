"use client";

import { Loader } from "@/components/Loader";
import { AuthContextProvider } from "@/context/use-auth-context";
import { useSignInForm } from "@/hooks/sign-in/use-sign-in";
import { ReactNode } from "react";
import { FormProvider } from "react-hook-form";

type Props = {
	children: ReactNode;
};

export default function SignInFormProvider({
	children,
}: Props) {
	const { loading, methods, onHandleSubmit } =
		useSignInForm();

	return (
		<AuthContextProvider>
			<FormProvider {...methods}>
				<form onSubmit={onHandleSubmit}>
					<div className='flex flex-col justify-between gap-3 h-full'>
						<Loader loading={loading}>
							{children}
						</Loader>
					</div>
				</form>
			</FormProvider>
		</AuthContextProvider>
	);
}
