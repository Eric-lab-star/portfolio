import { compileMdxToJsx } from "@/app/remark";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
	
	try {
	  await compileMdxToJsx()
		return Response.json({type: "ok"})
	} catch {
	  return Response.json({type: "bad", message: "error compiling mdx to jsx from server"})
		
	}
}
