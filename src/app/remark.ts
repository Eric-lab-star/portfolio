import {compile} from '@mdx-js/mdx'
import { readdir, readFile, writeFile} from 'node:fs/promises'
import path  from 'node:path'
import rehypeStarryNight from 'rehype-starry-night'
import remarkFrontmatter from 'remark-frontmatter'
import remarkGfm from 'remark-gfm'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'



export async function compileMdxToJsx() {
	const dirname = 'src/contents/'
	const files = await readdir(dirname)

	files.map(async (f) => {
			const filePath = path.join(dirname, f)
			const vFile = await compile(await readFile(filePath), {
				jsx: true,
				remarkPlugins: [remarkGfm, remarkFrontmatter, [remarkMdxFrontmatter, {name: 'matter'}]],
				rehypePlugins: [rehypeStarryNight]
			})

			const outputDirname = 'mdxToJs'
			vFile.path = path.join(outputDirname, `${path.parse(f).name}.jsx`)
			await writeFile(vFile.path, vFile.value)
		})

}

