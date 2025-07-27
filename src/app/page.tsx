import { getblogPosts } from "@/utilz/blogUtilz"
import { compileMdxToJsx } from "./remark.mjs"
import Link from "next/link"

// Home 
export default async function Page() {
	await compileMdxToJsx()
	const posts = await getblogPosts()

	return (
	  <div className={""}>
		  <ul>
				{posts.map((p) => (
					<Link key={p.blog} href={p.blog}>{p.blog}</Link>
				)) }
			</ul>

		</div>
	)
}



