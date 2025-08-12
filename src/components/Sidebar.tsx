import js_symbol from "../../public/js_symbol.svg"
import doc_symbol from "../../public/document.svg"

import Image from "next/image";
import Link from "next/link";


const posts = ["js", "java", "rust", "arduino"];

export default async function SideBar() {

	return (
	 <>
		 {posts.map((p) => (
			 <Link
				 href={"./" + p}
				 key={p}
				 className="h-10 pl-5 flex items-center space-x-5 hover:bg-amber-400"
			 >
				 <Image
					 alt="icons for posts"
					 width={10}
					 height={10}
					 className="w-5 h-auto"
					 src={doc_symbol}
				 />
				 <div>{p.toUpperCase()}</div>
			 </Link>
		 ))}
	 </>
	);
}
