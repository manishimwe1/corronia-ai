import { AuthContextProvider } from "@/context/use-auth-context";
import React, { ReactNode } from "react";
import { FormProvider } from "react-hook-form";

const SignUpFormProvider = ({
	children,
}: {
	children: ReactNode;
}) => {
	return (
		<AuthContextProvider>
			<FormProvider></FormProvider>
		</AuthContextProvider>
	);
};

export default SignUpFormProvider;
