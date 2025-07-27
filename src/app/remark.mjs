import {compile} from '@mdx-js/mdx'
import { readdir, readFile, writeFile} from 'node:fs/promises'
import path  from 'node:path'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'



export async function compileMdxToJsx() {
	const dirname = 'src/contents/'
	const files = await readdir(dirname)

	files.forEach(async (f) => {
		const filePath = path.join(dirname, f)
		const jsxFileObj = await compile(await readFile(filePath), {
			jsx: true,
			remarkPlugins: [remarkFrontmatter, [remarkMdxFrontmatter, {name: 'matter'}]]
		})
		const outputDirname= 'mdxToJs'
		jsxFileObj.path = path.join(outputDirname, `${path.parse(f).name}.jsx`)
		await writeFile(jsxFileObj.path, jsxFileObj.value)
	})


}

