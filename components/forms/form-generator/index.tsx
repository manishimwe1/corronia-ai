import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { ErrorMessage } from "@hookform/error-message";
import {
	FieldError,
	FieldErrors,
	FieldValues,
	UseFormRegister,
} from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";

type Props = {
	type: "text" | "email" | "password";
	inputType: "select" | "input" | "textarea";
	options?: {
		value: string;
		label: string;
		id: string;
	}[];
	label?: string;
	placeholder: string;
	register: UseFormRegister<any>;
	name: string;
	errors: FieldErrors<FieldValues>;
	lines?: number;
	form?: string;
};

const FormGenerator = ({
	type,
	inputType,
	options,
	label,
	placeholder,
	register,
	name,
	errors,
	lines,
	form,
}: Props) => {
	switch (inputType) {
		case "input":
			return (
				<Label
					className='flex flex-col gap-2'
					htmlFor={`input-${label}`}>
					{label && label}
					<Input
						id={`input-${label}`}
						type={type}
						placeholder={placeholder}
						form={form}
						{...register(name)}
					/>
					<ErrorMessage
						errors={errors}
						name={name}
						render={({ message }) => (
							<p className='text-red-400 mt-2'>
								{message === "Required"
									? ""
									: message}
							</p>
						)}
					/>
				</Label>
			);

		case "select":
			return (
				<Label
					className='flex flex-col gap-2'
					htmlFor={`select-${label}`}>
					{label && label}
					<select
						id={`select-${label}`}
						form={form}
						{...register(name)}>
						{options?.length &&
							options.map((option) => (
								<option
									key={option.id}
									value={option.value}>
									{option.label}
								</option>
							))}
					</select>
					<ErrorMessage
						errors={errors}
						name={name}
						render={({ message }) => (
							<p className='text-red-400 mt-2'>
								{message === "Required"
									? ""
									: message}
							</p>
						)}
					/>
				</Label>
			);
		case "textarea":
			return (
				<Label
					className='flex flex-col gap-2'
					htmlFor={`select-${label}`}>
					{label && label}
					<Textarea
						id={`select-${label}`}
						form={form}
						placeholder={placeholder}
						rows={lines}
						{...register(name)}
					/>

					<ErrorMessage
						errors={errors}
						name={name}
						render={({ message }) => (
							<p className='text-red-400 mt-2'>
								{message === "Required"
									? ""
									: message}
							</p>
						)}
					/>
				</Label>
			);
		default:
			return <></>;
	}
};

export default FormGenerator;
