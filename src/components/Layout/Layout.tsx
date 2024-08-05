import React, { useEffect } from "react";
import { Header } from "../Header/Header";
import { Outlet, useNavigate } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Loading } from "../Loading /Loading";
import { useLoading } from "../../services/loadingService/loadingService";
import { useClasses } from "./Layout.style";

export function Layout() {
    const {isLoading, loadingText} = useLoading()
    const {classes} = useClasses()
    return <>
        <Header/>
        <main className={classes.container}>
            <Outlet/>
            {isLoading && <Loading text={loadingText}></Loading>}
        </main>
        <Footer/>
    </>;
}