import React from "react"
import Image, {ImageProps} from 'next/image'

// Headings
function H1({ children }: {children: React.ReactNode}) {
  return <h1 className="text-4xl  ">{children}</h1>
}
function H2({ children }: {children: React.ReactNode}) {
  return <h1 className="text-2xl  ">{children}</h1>
}

function H3({ children }: {children: React.ReactNode}) {
  return <h1 className="text-xl  ">{children}</h1>
}


// Paragraph

function P({ children }: {children: React.ReactNode}) {
  return <p className="my-2">{children}</p>
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

function IMG (props: ImageProps) {
  return <Image sizes="100vw" width={300} height={100} style={{height: 'auto'}} {...(props)} />
}

 
export const blogStyle = () => {
	return {
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
}
 
