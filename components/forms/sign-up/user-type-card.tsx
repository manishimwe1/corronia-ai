"use client";

import { Dispatch, SetStateAction } from "react";
import {
	FieldValues,
	UseFormRegister,
} from "react-hook-form";
import { Label } from "@/components/ui/label";
import {
	Card,
	CardContent,
	CardDescription,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { User } from "lucide-react";
import { Input } from "@/components/ui/input";

type Props = {
	value: string;
	title: string;
	text: string;
	register: UseFormRegister<FieldValues>;
	setUserType: Dispatch<
		SetStateAction<"owner" | "student">
	>;
	userType: "owner" | "student";
};

const UserTypeCard = ({
	title,
	text,
	register,
	setUserType,
	userType,
	value,
}: Props) => {
	return (
		<Label htmlFor={value}>
			<Card
				className={cn(
					"flex justify-center p-3 cursor-pointer",
					userType == value && "border-orange",
				)}>
				<CardContent className='flex items-start justify-between w-full p-2'>
					<div className='flex items-center gap-3'>
						<Card
							className={cn(
								"flex justify-center p-3",
								userType == value &&
									"border-orange",
							)}>
							<User
								size={30}
								className={cn(
									userType == value
										? "text-orange "
										: "text-gray-400",
								)}
							/>
						</Card>
						<div className=''>
							<CardDescription className='font-bold text-iridium '>
								{title}
							</CardDescription>
							<CardDescription className='font-light'>
								{text}
							</CardDescription>
						</div>
					</div>
					<div>
						<div
							className={cn(
								"w-4 h-4 rounded-full",
								userType == value
									? "bg-orange"
									: "bg-transparent ",
							)}>
							<Input
								{...register("type", {
									onChange: (
										event: any,
									) =>
										setUserType(
											event.target
												.value,
										),
								})}
								value={value}
								id={value}
								className='hidden'
								type='radio'
							/>
						</div>
					</div>
				</CardContent>
			</Card>
		</Label>
	);
};

export default UserTypeCard;
