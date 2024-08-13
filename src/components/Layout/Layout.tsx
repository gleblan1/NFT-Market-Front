import React, { FC, useEffect } from "react";
import { Header } from "../Header/Header";
import { Outlet, useNavigate } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Loading } from "../Loading/Loading";
import { useLoading } from "../../services/loadingService/loadingService";
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
        <Footer/>
    </>;
}