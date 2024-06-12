import SignUpFormProvider from "@/components/forms/sign-up/SignUpFormProvider";
import { AuthContextProvider } from "@/context/use-auth-context";

import { FormProvider } from "react-hook-form";

export default function SignUp() {
	return (
		<div className='flex-1 py-36 md:px-16 w-full'>
			<div className='flex flex-col h-full gap-3'>
				<SignUpFormProvider></SignUpFormProvider>
			</div>
		</div>
	);
}
