"use client";

import { USER_LOGIN_FORM } from "@/context/forms";
import React from "react";
import { useFormContext } from "react-hook-form";
import FormGenerator from "../form-generator";

const LogInForm = () => {
	const {
		register,
		formState: { errors },
	} = useFormContext();
	return (
		<>
			<h2 className='text-gravel md:text-4xl font-bold'>
				Login
			</h2>
			<p className='text-iridium md:text-sm'>
				You will receve a one time password
			</p>
			{USER_LOGIN_FORM.map((field) => (
				<FormGenerator
					key={field.id}
					{...field}
					register={register}
					name={field.name}
					errors={errors}
					label={field.label}
				/>
			))}
		</>
	);
};

export default LogInForm;
