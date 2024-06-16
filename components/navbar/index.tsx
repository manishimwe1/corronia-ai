import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button, buttonVariants } from "../ui/button";
import { MenuIcon, MenuSquare } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {};

export default function NavbarComponent({}: Props) {
	return (
		<header className='flex  items-center  font-normal border-b border-solid border-zinc-100  max-md:flex-wrap max-md:px-5  justify-between w-full px-10 py-2'>
			<Image
				src={"/images/logo.png"}
				alt='logo'
				sizes='100vw'
				style={{
					width: "100px",
					height: "auto",
				}}
				width={0}
				height={0}
			/>
			<nav className=' gap-5 items-center hidden md:flex'>
				<Link href={"#"}>Home</Link>
				<Link href={"#"}>Pricing</Link>
				<Link href={"#"}>Feature</Link>
				<Link href={"#"}>Contact us</Link>
			</nav>
			<div className='flex items-center justify-between w-fit gap-4'>
				<Link
					href={"/dashbaord"}
					className={cn(
						buttonVariants(),
						"bg-orange px-4 font-bold text-white",
					)}>
					Free Trial
				</Link>
				<MenuIcon className='cursor-pointer' />
			</div>
		</header>
	);
}
