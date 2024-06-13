import RegistrationFormStep from "@/components/forms/sign-up/RegistrationFormStep";
import SignUpFormProvider from "@/components/forms/sign-up/SignUpFormProvider";
import ButtonHandler from "@/components/forms/sign-up/button-handlers";
import HighLightBar from "@/components/forms/sign-up/highlight-bar";

import { FormProvider } from "react-hook-form";

export default function SignUp() {
	return (
		<div className=' flex-1 py-10 md:px-16 w-full'>
			<div className='h-full flex flex-col gap-2'>
				<SignUpFormProvider>
					<div className='flex flex-col gap-3 '>
						<RegistrationFormStep />
						<ButtonHandler />
					</div>
					<HighLightBar />
				</SignUpFormProvider>
			</div>
		</div>
	);
}
