import React from "react"


function H1({ children }: {children: React.ReactNode}) {
  return <h1 className="text-5xl  ">{children}</h1>
}

function Ol({ children }: {children: React.ReactNode}) {
  return <ol className="list-inside list-decimal">{children}</ol>
}
function Ul({ children }: {children: React.ReactNode}) {
  return <ul className="list-inside list-disc  ">{children}</ul>
}
 
export const blogStyle = () => {

	return {
    h1: H1,
		ul: Ul,
		ol: Ol,

	}
}
 
