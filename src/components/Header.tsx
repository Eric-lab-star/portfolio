'use client';

import Link from "next/link";
import Bars_3 from "./Bars_3";
import { useContext, useState } from "react";
import { Ctx } from "@/app/StateManager";

export default function Header() {
	const sharedState = useContext(Ctx)

	return (
		<div className="flex space-x-5 h-14 p-5 bg-blue-300">
			<button className="" onClick={()=> {
				console.log(!sharedState.isSideBar)
				return {isSideBar: !sharedState.isSideBar}
			}}>
				<Bars_3/>
			</button>
			<Link href="/">
				<div className="text-lg">{`Read_Write_Save`}</div>
			</Link>
		</div>
	)
}
