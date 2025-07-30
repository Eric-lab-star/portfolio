import { blogStyle } from "@/components/blog/style";
import { getblogPosts } from "@/utilz/blogUtilz";

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


// compile mdx to jsx 
export async function generateStaticParams() {
	return await getblogPosts()
}
// dynamicParams to false allow only staticParams
export const dynamicParams = false



