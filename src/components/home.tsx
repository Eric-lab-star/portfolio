'use client';
import Image from "next/image";
import { motion } from "motion/react";
import NotFoundImage from '../../public/image_not_found.png'
import Link from "next/link";

export function Cover() {
	return (
		<Image fill={true} src={NotFoundImage} alt="cover image of project"/>
	)
}


export function Projects({projectName}: {projectName: string}) {
	return <div className="h-80 bg-blue-300">
		<motion.div
		  whileHover={{
				fontSize: "30px",
			}}
		  className="select-none text-2xl ml-4 mt-2"
		>
		  <Link href={`/${projectName.toLowerCase()}`}>{projectName}</Link>
		</motion.div>
		<div className="flex flex-col">
		  {"contents"}
		</div>
	</div>	
}
