import { blogStyle } from "@/components/blog/style";
import { getblogPosts } from "../../utilz/blogUtilz";

export default async function Page({
	params,
}: {
	params: Promise<{ blog: string }>
}) {
	const { blog } = await params
	const  {default: Post, matter} = await import(`../../../mdxToJs/${blog}.jsx`);
	return (
		<div className="mx-auto w-3xl">
			<h1 className="text-3xl capitalize underline pb-5">{matter?.title || blog }</h1>
		  <Post components={blogStyle()}/>
		</div>
	)
}

// this function is called only at the build time.
// 
export async function generateStaticParams() {
	const posts = await getblogPosts()
	return posts.map((v)=> ({blog: v.blog}))
}


export const revalidate = 60

export const dynamicParams = true;



