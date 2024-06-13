import LogInForm from "@/components/forms/sign-in/LogInForm";
import SignInFormProvider from "@/components/forms/sign-in/form-provider";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
	return (
		<div className='flex-1 py-36 md:px-16 w-full'>
			<div className='flex flex-col h-full gap-3'>
				<SignInFormProvider>
					<div className='flex flex-col gap-3'>
						<LogInForm />
						<div className='w-full flex flex-col gap-3 items-center'>
							<Button
								type='submit'
								className='w-full'>
								Submit
							</Button>

							<p>
								Already have an account?
								<Link
									href='/auth/sign-in'
									className='font-bold'>
									Sign In
								</Link>
							</p>
						</div>
					</div>
				</SignInFormProvider>
			</div>
		</div>
	);
}
