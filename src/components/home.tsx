'use client';
import Image from "next/image";
import NotFoundImage from '../../public/image_not_found.png'
import AnimateBox from "./animatable/box";

export function Cover() {
	return (
		<Image fill={true} src={NotFoundImage} alt="cover image of project"/>
	)
}


export function Projects({projectName}: {projectName: string}) {
	return <div className="h-80 bg-blue-300">
		<div className="text-2xl ml-4 mt-2">{projectName}</div>
		<div className="flex flex-col">
			<AnimateBox/>
		</div>
	</div>	
}
