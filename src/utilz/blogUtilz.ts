import { readdir } from "node:fs/promises"
import path from "node:path"

export async function getblogPosts() {
	const dir = path.join('mdxToJs')
	const files = await readdir(dir)
	return files.map((f) => {
		const name = path.parse(f).name
		return {blog: `${name}`}
	})
}



