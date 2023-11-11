"use client";

import { AccountProps, ChildProps, ContextProps } from "@/types";
import React, { createContext, useContext, useState } from "react";

export const Context = createContext<ContextProps | null>(null);

const GlobalContext = ({ children }: ChildProps) => {
  const [account, setAccount] = useState<AccountProps | null>(null);

  return (
    <Context.Provider value={{ account, setAccount }}>
      {children}
    </Context.Provider>
  );
};

export default GlobalContext;

export const useGlobalContext = () => {
  const context = useContext(Context)
  if (context === null) {
    throw new Error('useGlobalContext must be used within a GlobalContext')
  }
  return context
}

