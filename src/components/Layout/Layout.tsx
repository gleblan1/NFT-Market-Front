import React, { FC } from "react";
import { Header } from "../Header/Header";
import { Outlet } from "react-router-dom";
import { Loading } from "@components/Loading";
import { useLoading } from "@services/loadingService";
import { useClasses } from "./Layout.style";
//TODO: index
export const Layout: FC = () => {
    const {isLoading, loadingText} = useLoading()
    const {classes} = useClasses()
    return <>
        {isLoading && <Loading text={loadingText}></Loading>}
        <Header/>
        <main className={classes.container}>
            <Outlet/>
        </main>
    </>;
}