import { getblogPosts } from "@/utilz/blogUtilz"

export async function GET(req: Request){
	const mdxmeta = await getblogPosts() 
	return Response.json(mdxmeta)
}
