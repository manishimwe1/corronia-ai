import React, { Dispatch, SetStateAction } from "react";
import {
	FieldValues,
	UseFormRegister,
} from "react-hook-form";
import UserTypeCard from "./user-type-card";

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
	return (
		<>
			<h2 className='text-gravel md:text-4xl font-bold'>
				Create an account
			</h2>
			<p className='text-iridium md:text-sm'>
				Tell us about your self! What do you do?
				Let's tailor your <br /> experience so it
				best suits you.
			</p>
			<UserTypeCard
				title='I own a business'
				text='Setting up my account for a company'
				register={register}
				setUserType={setUserType}
				value='owner'
				userType={userType}
			/>
			<UserTypeCard
				title='I am student'
				text='Looking to lean about the tool'
				register={register}
				setUserType={setUserType}
				value='student'
				userType={userType}
			/>
		</>
	);
};

export default TypeSelectionForm;
