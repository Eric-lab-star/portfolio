'use client';

import React, { ActionDispatch, createContext, useReducer } from "react";

export type State = boolean;
export type Action = {type: "close"} | {type: "open"}


export const SideBarDispatchCtx = createContext<null| ActionDispatch<[action: Action]>>(null)
export const SideBarStateCtx= createContext(false)

export default function SideBarCtx(
	{ children }:{ children: React.ReactNode }
) { 
	const [isSidebar, dispatch] = useReducer(sideBarReducer, false)
	return (
		<SideBarStateCtx.Provider value={isSidebar}>
			<SideBarDispatchCtx.Provider value={dispatch}>
				{children}
			</SideBarDispatchCtx.Provider>
		</SideBarStateCtx.Provider>
	);
}

// false -> close/hide sidebar 
// true -> open/show sidebar
function sideBarReducer(state: State, action: Action): State {
	switch (action.type) {
		case "close": {
			return false
		}
		case "open": {
			return true
		}
		default: {
			return state
		}
	}	
}
