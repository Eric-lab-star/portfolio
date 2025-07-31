import { compileMdxToJsx } from "@/app/remark.mjs";
import { getblogPosts } from "@/utilz/blogUtilz";
import Image from "next/image";
import Link from "next/link";



export default async function SideBar() {
  await compileMdxToJsx();
  const posts = await getblogPosts();
	
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
