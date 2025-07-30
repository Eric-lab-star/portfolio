'use client';

import React, { createContext } from "react";

export const Ctx = createContext({isSideBar: false})

export default function CtxManager({ children }:{ children: React.ReactNode }) { 
	return <Ctx.Provider value={{isSideBar: true}} >{children}</Ctx.Provider>
}
