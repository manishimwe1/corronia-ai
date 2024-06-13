"use client";

import { useAuthContextHook } from "@/context/use-auth-context";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import TypeSelectionForm from "./TypeSelectionForm";

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
		case 3:
	}
	return <div>RegistrationFormStep</div>;
};

export default RegistrationFormStep;
