import { blogStyle } from "@/components/blog/style";
import { PostMeta } from "@/utilz/blogUtilz";

export default async function Page({
	params,
}: {
	params: Promise<{ blog: string }>
}) {
	const res  = await fetch("http://localhost:3000/api/posts/compile")
	await res.json()

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
//  on dev environment this function is called on every route visit
export async function generateStaticParams() {
	const response = await fetch("http://localhost:3000/api/posts")
	const json: PostMeta[] = await response.json()
	return json.map((j) => ({blog: j.blog}))
}


export const revalidate = 60

export const dynamicParams = true;



