import React, { Dispatch, SetStateAction } from "react";
import {
	FieldValues,
	UseFormRegister,
} from "react-hook-form";

type Props = {
	register: UseFormRegister<FieldValues>;
	userType: "owner" | "student";
	setUserType: Dispatch<
		SetStateAction<"owner" | "student">
	>;
};

const TypeSelectionForm = ({
	register,
	userType,
	setUserType,
}: Props) => {
	return <div>TypeSelectionForm</div>;
};

export default TypeSelectionForm;
