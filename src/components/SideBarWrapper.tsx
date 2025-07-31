'use client';
import { SideBarStateCtx } from "@/app/SideBarCtx";
import clsx from "clsx";
import React, { useContext } from "react";

export default function SideBarWrapper({children}: {children: React.ReactNode}) {
	const sideBarState = useContext(SideBarStateCtx)
	return ( 
		<div 
		className={
			clsx("w-56 bg-blue-300 flex-none", sideBarState && "hidden")
		}>
			{ children }
		</div>
	);
}
