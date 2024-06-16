"use server";
import axios from "axios";
export const onGetBlogPosts = async () => {
	try {
		const postArray: {
			id: string;
			title: string;
			image: string;
			content: string;
			createAt: Date;
		}[] = [];
		if (
			!process.env.CLOUDWAYS_FEATURED_IMAGES_URL ||
			!process.env.CLOUDWAYS_POSTS_URL
		)
			return;
		const posts = await axios.get(
			"https://wordpress-1283421-4649102.cloudwaysapps.com/wp-json/wp/v2/testposts",
		);
		console.log(
			posts.data.featured_media,
			"Here is posts",
		);

		let i = 0;
		while (i < posts.data.length) {
			const image = await axios.get(
				`https://wordpress-1283421-4649102.cloudwaysapps.com/wp-json/wp/v2/media/${posts.data[i].featured_media}`,
			);
			if (image) {
				postArray.push({
					id: posts.data[i].id,
					title: posts.data[i].title.rendered,
					image: image.data.media_details.file,
					content: posts.data[i].content.rendered,
					createAt: new Date(posts.data[i].date),
				});
			}

			i++;
		}
		if (posts.data) {
			return postArray;
		}
	} catch (error: any) {
		console.error(error.message, "in getting posts");
	}
};
