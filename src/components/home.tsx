import Image from "next/image";
import NotFoundImage from '../../public/image_not_found.png'
import { useSpring, animated } from "@react-spring/web";

export function Cover() {
	return (
		<Image fill={true} src={NotFoundImage} alt="cover image of project"/>
	)
}

function SpringBox() {
	const [springs, api]= useSpring(() => ({
		from: { x: 0 }	
	}))

	const handleClick = () => {
		api.start({
			from: {
				x: 0,
			},
			to: {
				x: 100,
			}
		})
	}

	return (
		<animated.div
			onClick={handleClick}
			className={"w-40 h-40 bg-amber-200 rounded-2xl"}
			style={{
				...springs
			}}
		/>
	)
}

export function Projects({projectName}: {projectName: string}) {
	return <div className="h-80 bg-blue-300">
		<div className="text-2xl ml-4 mt-2">{projectName}</div>
		<div>
			<SpringBox/>
		</div>
	</div>	
}
