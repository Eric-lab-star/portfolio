import localFont from "next/font/local";
import "./globals.css";
import clsx from "clsx";
import Header from "@/components/Header";
import SideBar from "@/components/Sidebar";
import SideBarWrapper from "@/components/SideBarWrapper";
import SideBarCtx from "./SideBarCtx";

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




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="ko">
      <body className={clsx(d2coding.className, "h-screen flex-col flex")} >
			<SideBarCtx>
				<Header />
				<div className="flex-grow flex">
					<SideBarWrapper>
						<SideBar />
					</SideBarWrapper>
					<div className="p-5 flex-grow bg-zinc-900 text-gray-300">{children}</div>
				</div>
			</SideBarCtx>
      </body>
    </html>
  );
}


