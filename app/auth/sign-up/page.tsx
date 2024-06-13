import RegistrationFormStep from "@/components/forms/sign-up/RegistrationFormStep";
import SignUpFormProvider from "@/components/forms/sign-up/SignUpFormProvider";

import { FormProvider } from "react-hook-form";

export default function SignUp() {
	return (
		<div className='border py-36 md:px-16 w-full'>
			<div className='flex flex-col h-full gap-3'>
				<SignUpFormProvider>
					<div className='flex flex-col gap-3 '>
						<RegistrationFormStep />
					</div>
				</SignUpFormProvider>
			</div>
		</div>
	);
}
