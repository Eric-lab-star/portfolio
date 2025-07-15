"use client";
import { motion } from "motion/react";
import { useState } from "react";

export default function AnimateBox() {
	const [isLeftHover, setLeftHover] = useState({really: true})

	const leftBox = {
		"leftBox": (v: {really: Boolean}) => ({
			"opacity": v.really ? 1 : 0
		})
	}

	return (
		<motion.div >

			<motion.button
				custom={{really:false}}
				onHoverStart={() => {
							setLeftHover((prev)=> ({really: !prev.really}))
				}}
				variants={leftBox}
				animate="leftBox"
				className="w-32 h-32 bg-orange-700"
			/> 

			<motion.button
				custom={{really:false}}
				onHoverStart={() => {
							setLeftHover((prev)=> ({really: !prev.really}))
				}}
				variants={leftBox}
				animate="leftbox"
				className="w-32 h-32 bg-blue-700"
			/> 

			<motion.button
				custom={{really:true}}
				onHoverStart={() => {
							setLeftHover((prev)=> ({really: !prev.really}))
				}}
				variants={leftBox}
				animate="leftBox"
				className="w-32 h-32 bg-orange-700"
			/> 
		</motion.div>
  );
}
