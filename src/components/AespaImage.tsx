import { readdir } from "fs/promises";
import Image from "next/image";

export default async function AespaGallary(){
	const files = await readdir("public/aespa/");
	return <div className="flex flex-wrap">{
		files.map((v) => (
			<Image src={`/aespa/${v}`} key={v} alt={v} width={100} height={100} className="w-auto h-96"/>
		))
	}</div>
}
