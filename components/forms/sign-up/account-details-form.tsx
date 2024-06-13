import { USER_REGISTRATION_FORM } from "@/context/forms";
import React from "react";
import {
	FieldErrors,
	FieldValues,
	UseFormRegister,
} from "react-hook-form";
import FormGenerator from "../form-generator";

const AccountDetailsForm = ({
	register,
	errors,
}: {
	register: UseFormRegister<FieldValues>;
	errors: FieldErrors<FieldValues>;
}) => {
	return (
		<>
			{" "}
			<h2 className='text-gravel md:text-4xl font-bold'>
				Account Details
			</h2>
			<p className='text-iridium md:text-sm'>
				Enter your email and password
			</p>
			{USER_REGISTRATION_FORM.map((field) => (
				<FormGenerator
					key={field.id}
					{...field}
					errors={errors}
					register={register}
					name={field.name}
					label={field.name}
				/>
			))}
		</>
	);
};

export default AccountDetailsForm;
