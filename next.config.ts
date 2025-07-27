import type { NextConfig } from "next";
import createMDX from '@next/mdx';
import remarkGfm from "remark-gfm";
import rehypeStarryNight from "rehype-starry-night";


const nextConfig: NextConfig = {
	pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx']
};

const withMDX = createMDX({
	options: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [rehypeStarryNight],
	}

})

export default withMDX(nextConfig);
