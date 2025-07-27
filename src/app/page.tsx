import { getblogPosts } from "@/utilz/blogUtilz"
import { compileMdxToJsx } from "./remark.mjs"
import Link from "next/link"

// Home 
export default async function Page() {
	await compileMdxToJsx()
	const posts = await getblogPosts()

	return (
	  <div className={"prose prose-slate"}>
		  <ul className="flex flex-col text-lg">
				{
					posts.map((p) => (
					<Link className="" key={p.blog} href={p.blog}><li className="p-3">{p.blog}</li></Link>
					))
				}
			</ul>

		</div>
	)
}



