import { PostMeta } from "@/utilz/blogUtilz";
import Image from "next/image";
import Link from "next/link";



export default async function SideBar() {
	const response = await fetch("http://localhost:3000/api/posts");
	const posts: PostMeta[] = await response.json();

	return (
	 <>
		 {posts.map((p) => (
			 <Link
				 href={p.blog}
				 key={p.blog}
				 className="h-10 pl-5 flex items-center space-x-5 hover:bg-amber-400"
			 >
				 <Image
					 alt="icons for posts"
					 width={10}
					 height={10}
					 className="w-5 h-auto"
					 src={p.img || p.defaultImg}
				 />
				 <div>{p.title || p.blog}</div>
			 </Link>
		 ))}
	 </>
	);
}
