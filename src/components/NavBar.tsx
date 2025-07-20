"use client";
import Link from "next/link"
import { motion } from "motion/react"
import { Dispatch, SetStateAction, useState } from "react";
import clsx from "clsx";


// color pallet
const style = {
	hoveredBG: "#d1b124",
	selectedBG: "#d1b124", 
	default: "#eee",
	hoveredTxt: "#eee",
	selectedTxt: "#eee",
	defaultTxt: "#d1b124",
}

export default function NavBar() {
	const [selectedTab, setSelectedTab] = useState(tabs[0])

	return (
		<div
			className="flex h-20 text-amber-600"
			style={{
				backgroundColor: style.default
			}}
		>
		  {tabs.map((tab)=> (
				<Tab
				  selectedTab={selectedTab} 
					onSelected={setSelectedTab}
					key={tab.label} tab={tab}
				/>))}
		</div>
	)
}



type tab = {
	label: string,
	icon: string,
	href: string,
}

function Tab({
	tab,
	selectedTab,
	onSelected,
}: {
	tab: tab
	selectedTab: tab,
	onSelected: Dispatch<SetStateAction<tab>>,
}) {
	return (
		<Link href={tab.href}
		 className="text-center"
		>
			<motion.div
			  layout
				className={
					clsx("relative select-none h-full flex justify-center items-center w-20 ")
				} 
				whileHover={{
					backgroundColor: style.hoveredBG,
					color: style.hoveredTxt,
				}}
				style={{
					backgroundColor: tab === selectedTab ? style.selectedBG : style.default,
					color: tab === selectedTab ? style.selectedTxt: style.defaultTxt,
				}}
				onClick={()=>onSelected(tab)}
			>
					{tab.label.slice(0,9)}
					{tab === selectedTab && 
						<motion.div
							layoutId="underLine"
							id="underLine"
							className={clsx("absolute bottom-0 text-center border-b-2 border-amber-800 w-full")}
						>
							{tab.icon}
						</motion.div>
					}
			</motion.div>
	  </Link>
	)
}


const tabs: tab[] = [
	{
		label: "logo",
		icon: "💻",
		href: "/",
	},
	{
		label: "item1",
		icon: "🍌",
		href: "/",
	},
	{
		label: "item2",
		icon: "🍌",
		href: "/",
	},
	{
		label: "item3",
		icon: "🍌",
		href: "/",
	},
	{
		label: "item4",
		icon: "🍌",
		href: "/",
	},
	{
		label: "item5item5item5item5item5",
		icon: "🍌",
		href: "/",
	},
]
