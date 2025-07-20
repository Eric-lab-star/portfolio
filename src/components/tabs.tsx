"use client";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

	const tabs = [
		{id: 'apple', icon: '🍎'},
		{id: 'banana', icon: '🍌' },
		{id: 'pen', icon: '🖊️' },
	];

export default function Tabs() {
	const [selectedTab, setSelectedTab] = useState(tabs[0])
	

	return (
		<div
			className="select-none"
		>
			<nav>
				<ul className="flex ">
					{tabs.map((item) => (
						<motion.li
							key={item.id}
							initial={false}
							animate={{
								backgroundColor: item === selectedTab ? "#967f57" : "#ccb387",
							}}
							className="w-32 h-9 bg-gray-800"
							onClick={() => setSelectedTab(item)}
							whileHover={{
								backgroundColor: "#967f57"
							}}
							>
							<div className="h-full p-2 text-center">{`${item.id.toUpperCase()} ${item.icon}`}</div>
							{item === selectedTab && <motion.div className="w-32 h-1 bg-orange-700" layoutId="underline" id="underline"/>}
							</motion.li>
					))}
					</ul>
			</nav>	
			<main
				className=" h-60 bg-gray-200 grid justify-items-center items-center"
			>
				<AnimatePresence mode="wait">
					<motion.div
						className="text-9xl grid gap-1 grid-cols-3"
						key={selectedTab ? selectedTab.id : "empty"}
						initial={{
							x: 10, opacity: 0
						}}
						animate={{
							x: 0, opacity: 1
						}}
						exit={{
							x: -10, opacity: 0
						}}
					>
						<div className="bg-gray-400">
						{selectedTab ? selectedTab.icon : " x "}
						</div>
						<div>
						{selectedTab ? selectedTab.icon : " x "}
						</div>
						<div>
						{selectedTab ? selectedTab.icon : " x "}
						</div>
					</motion.div>	
				</AnimatePresence>
			</main>
		</div>
  );
}


