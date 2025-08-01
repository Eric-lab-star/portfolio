import { readdir } from "fs/promises";
import Image from "next/image";
import { Suspense } from "react";

export default async function AespaGallary(){
	const files = await readdir("public/aespa/");

	return <div className="flex flex-wrap">{
		files.map((v) => (
			<Suspense key={v} fallback={<Loading />}>
				<SlowImage v={v}/>
			</Suspense>
		))
	}</div>
}

function Loading() {
	return <div className="w-80 h-96 bg-zinc-200 text-white rounded-2xl">
	</div>
}

async function SlowImage({v}:{v: string}) {
	await new Promise((resolve) => setTimeout(resolve, 2000))
	return <Image src={`/aespa/${v}`} key={v} alt={v} width={100} height={100} className="w-auto h-96"/>
}
