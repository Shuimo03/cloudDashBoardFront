import React from "react";
import { Outlet } from "react-router-dom";

const index = () => {
    return (
        <>
          demo
            <Outlet />
        </>
    );
};

export default index;
