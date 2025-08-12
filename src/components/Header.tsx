'use client';

import Link from "next/link";
import Bars_3 from "./Bars_3";
import { useContext } from "react";
import { SideBarDispatchCtx, SideBarStateCtx } from "@/app/SideBarCtx";
import { motion } from "motion/react";

export default function Header() {
	const sideBarDispatch = useContext(SideBarDispatchCtx)
	const sideBarState = useContext(SideBarStateCtx)
	const toggleSideBarState = ()=> {
		if (sideBarState) {
			return sideBarDispatch!({type: "close"})
		} else {
			return sideBarDispatch!({type: "open"})
		}
	}

	return (
		<div className="flex space-x-5 h-14 p-5 bg-blue-300">
			<button className="hover:text-blue-100" onClick={toggleSideBarState}> 
				<Bars_3/>
			</button>
			<Link href="/">
				<motion.div
					className="text-xl border-b-2 border-b-amber-600"
					whileHover={{borderColor:"#B03720" }}
				>
					{"Dare mighty things"}
				</motion.div>
			</Link>
		</div>
	)
}

