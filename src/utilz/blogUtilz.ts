import { readdir } from "node:fs/promises"
import path from "node:path"
import document_symbol from "../../public/document.svg"


type PostMeta = {blog: string;} & {[key: string]: string;}


export async function getblogPosts() {
	const dir = path.join('mdxToJs')
	const files = await readdir(dir)
	const metaInfo: PostMeta[] = await Promise.all(
		files.map(async (f) => {
		 const { matter } = await import(`../../mdxToJs/${f}`)
		const name = path.parse(f).name
		return {blog:`${name}`, defaultImg: document_symbol, ...matter}
	}))
	return  metaInfo
}


