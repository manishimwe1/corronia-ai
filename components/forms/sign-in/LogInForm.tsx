"use client";

import React from "react";
import { useFormContext } from "react-hook-form";

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
		</>
	);
};

export default LogInForm;
