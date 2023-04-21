import React from "react";
import { Outlet } from "react-router-dom";
import Fooder  from "./Footer";
import Header  from "./Header";
const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;
