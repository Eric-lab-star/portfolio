import React from "react"
import Image, {ImageProps} from 'next/image'

// Headings
function H1({ children }: {children: React.ReactNode}) {
  return <h1 className="text-4xl  ">{children}</h1>
}
function H2({ children }: {children: React.ReactNode}) {
  return <h2 className="text-xl  ">{children}</h2>
}

function H3({ children }: {children: React.ReactNode}) {
  return <h3 className="text-lg  ">{children}</h3>
}


// Paragraph

function P({ children }: {children: React.ReactNode}) {
  return <div className="my-2">{children}</div>
}

// lists
function Ol({ children }: {children: React.ReactNode}) {
  return <ol className="list-inside list-decimal flex flex-col">{children}</ol>
}

function Li({ children }: {children: React.ReactNode}) {
  return <li className="ml-3">{children}</li>
}

function Ul({ children }: {children: React.ReactNode}) {
  return <ul className="list-inside list-disc  ">{children}</ul>
}


// code block
function Pre({ children }: {children: React.ReactNode}) {
  return <pre className="bg-gray-100 p-4 m-2 rounded-2xl">{children}</pre>
}
function Blockquote({ children }: {children: React.ReactNode}) {
  return <blockquote className="bg-amber-100 p-4 m-2 rounded-2xl">{children}</blockquote>
}


async function IMG (props: ImageProps) {
  return (
		<Image  
			className="float-start m-5 rounded-3xl w-96 h-auto select-none " 
			sizes="(max-with: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
			width={100} 
			height={100} 
			{...props}
			alt=""
		/>
		)
}

 
export const blogStyle  = {
    h1: H1,
		h2: H2,
		h3: H3,
		ul: Ul,
		ol: Ol,
		pre: Pre,
		p: P,
		li: Li,
		blockquote: Blockquote,
		img: IMG
}
 
