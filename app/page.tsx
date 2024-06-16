import { onGetBlogPosts } from "@/actions/landing";
import NavbarComponent from "@/components/navbar";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { pricingCards } from "@/constants/landingPage";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
	const posts:
		| {
				id: string;
				title: string;
				image: string;
				content: string;
				createAt: Date;
		  }[]
		| undefined = await onGetBlogPosts();

	return (
		<main className='flex min-h-screen flex-col items-center '>
			<NavbarComponent />

			<section className='flex items-center px-4 justify-center flex-col  gap-4'>
				<span className='text-orange bg-orange/20 px-4 rounded-full text-sm mt-[80px] py-1'>
					An AI powered sales assistant chabot
				</span>
				<Image
					src={"/images/corinna-ai-logo.png"}
					width={500}
					height={100}
					alt='logo'
					className='lg:max-w-lg object-contain'
				/>
				<p className='text-center max-w-[500px]'>
					Your AI powered sales assistant! Embed
					Corinna AI into any website with just a
					snippet of code
				</p>
				<Button className='bg-orange font-bold text-white px-4'>
					Start For Free
				</Button>
				<Image
					src={"/images/iphonecorinna.png"}
					width={400}
					height={100}
					alt='logo'
					className='max-w-lg object-contain'
				/>
			</section>
			<section className='flex justify-center items-center flex-col gap-4 mt-10'>
				<h2 className='text-4xl text-center'>
					Choose what fits you right
				</h2>
				<p className='text-muted-foreground text-center max-w-lg'>
					Our straightforward pricing plans are
					tailored to meet your needs. if{" "}
					{"You're "} not ready to commit you can
					get started for free
				</p>
			</section>

			<div className='flex justify-center gap-4 flex-wrap mt-6'>
				{pricingCards.map((card) => (
					<Card
						key={card.priceId}
						className={cn(
							"w-[300px] flex flex-col justify-between ",
							card.title === "Unlimited" &&
								"border-2 border-primary",
						)}>
						<CardHeader>
							<CardTitle className='text-orange'>
								{card.title}
							</CardTitle>
							<CardDescription>
								{card.description}
							</CardDescription>
						</CardHeader>
						<CardContent>
							<span className='text-4xl font-bold'>
								{card.price}
							</span>
							<span className='text-muted-foreground'>
								/ month
							</span>
						</CardContent>
						<CardFooter className='flex flex-col items-start gap-4'>
							<div>
								{card.features.map(
									(feature) => (
										<div
											key={feature}
											className='flex gap-2'>
											<Check />
											<p>{feature}</p>
										</div>
									),
								)}
							</div>
						</CardFooter>
					</Card>
				))}
			</div>
			<section className='lg:grid-cols-3 grid grid-cols-1 gap-5 container border py-4'>
				{posts?.map((post) => (
					<Link href={`/blogs/${post.id}`}>
						<Card className='flex flex-col gap-2 rounded-xl overflow-hidden h-full hover:bg-gray-100 py-4 border'>
							<div className='relative w-full aspect-video'>
								<Image
									alt={post.title}
									fill
									src={`${process.env.CLOUDWAYS_UPLOADS_URL}/${post.image}`}
								/>
							</div>
						</Card>
					</Link>
				))}
			</section>
		</main>
	);
}
