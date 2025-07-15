'use client';
import { Cover, Projects } from "@/components/home";
import clsx from "clsx";

// Home 
export default function Page() {
	const projectNames = [
		'Javascript',
		'Java',
		'Rust',
		'Leetcode',
		'WhoAmI',
	];

	return <div className={"flex flex-col"}>
		<div className={"relative h-[80vh] bg-red-100"}>
			<Cover/>
			<div className="absolute bottom-3 text-yellow-400 text-3xl">
				<p>Be ready to shine</p>
				<p>A Collection of my work</p>
			</div>
		</div>
		<div className={clsx("h-max bg-red-300 grid gap-4", `grid-row-${projectNames.length}`)}>
			{projectNames.map(name => <Projects key={name} projectName={name}/>)}
		</div>
		<div className="h-40 bg-red-500">footer</div>
	</div>
}

