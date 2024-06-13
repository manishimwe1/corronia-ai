import { currentUser } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

const layout = async ({
	children,
}: {
	children: ReactNode;
}) => {
	const user = await currentUser();

	if (user) {
		redirect("/");
	}
	return (
		<div className='h-screen overflow-y-auto flex w-full justify-center overflow-hidden'>
			<div className='lg:w-[600px] w-full h-full flex flex-col items-start p-6'>
				<Image
					src={"/images/logo.png"}
					alt='logo'
					sizes='100vw'
					style={{
						width: "20%",
						height: "auto",
					}}
					width={0}
					height={0}
				/>

				{children}
			</div>
			<div className='w-full hidden flex-1 h-full lg:flex max-h-full relative'>
				<div className='  w-full  overflow-hidden  bg-cream flex-col pt-10 pl-24 gap-3'>
					<h2 className='text-gravel md:text-4xl font-bold'>
						Hi, I'm your Ai powered sales
						assistant, corinna!
					</h2>
					<p className='text-iridium md:text-sm mb-10'>
						Corinna is capable of capturing lead
						information without a form...
						<br /> something never done before
						😀
					</p>
					<Image
						src='/images/app-ui.png'
						alt='app image'
						loading='lazy'
						sizes='30'
						className='absolute shrink-0 !w-[1600px] top-48'
						width={0}
						height={0}
					/>
				</div>
			</div>
		</div>
	);
};

export default layout;
