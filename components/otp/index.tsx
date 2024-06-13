import React, { Dispatch, SetStateAction } from "react";
import { InputOTP, InputOTPSlot } from "../ui/input-otp";

type Props = {
	otp: string;
	setOtp: Dispatch<SetStateAction<string>>;
};

export default function OTPInput({ otp, setOtp }: Props) {
	return (
		<InputOTP
			maxLength={6}
			value={otp}
			onChange={(e) => setOtp(e)}>
			<div className='flex gap-3'>
				<div>
					<InputOTPSlot index={0} />
				</div>
				<div>
					<InputOTPSlot index={1} />
				</div>
				<div>
					<InputOTPSlot index={2} />
				</div>
				<div>
					<InputOTPSlot index={3} />
				</div>
				<div>
					<InputOTPSlot index={4} />
				</div>
				<div>
					<InputOTPSlot index={5} />
				</div>
			</div>
		</InputOTP>
	);
}
