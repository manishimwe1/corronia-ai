import OTPInput from "@/components/otp";
import React, { Dispatch, SetStateAction } from "react";

type Props = {
	onOTP: string;
	setOTP: Dispatch<SetStateAction<string>>;
};

export default function OTPForm({ onOTP, setOTP }: Props) {
	return (
		<>
			<h2 className='text-gravel md:text-4xl font-bold'>
				Enter OTP
			</h2>
			<p className='text-iridium md:text-sm'>
				Enter the one time password that was sent to
				your email.
			</p>
			<div className='w-full justify-center flex py-5'>
				<OTPInput otp={onOTP} setOtp={setOTP} />
			</div>
		</>
	);
}
