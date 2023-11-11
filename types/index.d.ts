import { Dispatch, ReactNode, SetStateAction } from "react";

export interface ContextProps{
    account: AccountProps | null;
    setAccount: Dispatch<SetStateAction<AccountProps | null>>
}

export interface AccountProps{
    _id:string;
    uid: string;
    pin:string;
    name:string
}

export interface ChildProps{
    children: ReactNode
}