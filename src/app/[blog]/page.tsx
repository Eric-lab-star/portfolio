import { getblogPosts } from "@/utilz/blogUtilz";
import { readdir } from "fs/promises";
import path from "path";

export default async function Page({
	params,
}: {
	params: Promise<{ blog: string }>
}) {
	const { blog } = await params

	const  {default: Post, matter} = await import(`../../../mdxToJs/${blog}.jsx`);

	return (
		<div className="">
		  <Post />
		</div>
	)
}


export async function generateStaticParams() {
	return await getblogPosts()
}




// dynamicParams to false allow only staticParams
export const dynamicParams = false



