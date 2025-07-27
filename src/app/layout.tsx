import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const d2coding = localFont({
	src: [
		{
			path: '../../public/D2Coding_1.3.2.ttf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../public/D2CodingBold_1.3.2.ttf',
			weight: '400',
			style: 'bold',

		}
	]
})


export const metadata: Metadata = {
  title: "Dev Life",
  description: "developer life is written here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={d2coding.className} >
		  	<Link href="/">
				  <h1 className="text-3xl m-3">Developer Blog</h1>
				</Link>	
        {children}
      </body>
    </html>
  );
}

