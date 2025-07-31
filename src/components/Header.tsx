'use client';

import Link from "next/link";
import Bars_3 from "./Bars_3";
import { useContext } from "react";
import { SideBarDispatchCtx, SideBarStateCtx } from "@/app/SideBarCtx";

export default function Header() {
	const sideBarDispatch = useContext(SideBarDispatchCtx)
	const sideBarState = useContext(SideBarStateCtx)

	return (
		<div className="flex space-x-5 h-14 p-5 bg-blue-300">
			<button className="" onClick={()=> {
				if (sideBarState) {
					return sideBarDispatch!({type: "close"})
				} else {
					return sideBarDispatch!({type: "open"})
				}
			}}>
				<Bars_3/>
			</button>
			<Link href="/">
				<div className="text-lg">{`Read_Write_Save`}</div>
			</Link>
		</div>
	)
}
