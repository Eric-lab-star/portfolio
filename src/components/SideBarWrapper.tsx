'use client';
import { Ctx } from "@/app/StateManager";
import clsx from "clsx";
import React, { useContext } from "react";

export default function SideBarWrapper({children}: {children: React.ReactNode}) {
	const sharedState = useContext(Ctx)
	return (
		<div className={clsx("w-56 bg-blue-300 flex-none", !sharedState.isSideBar && "hidden")}>{ children }</div>
	);
}
