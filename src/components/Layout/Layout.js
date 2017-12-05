import React from 'react'
import AuxWrapper from "../../hoc/AuxWrap";
import Header from "./Header/Header";

const Layout = (props) =>
{
    return (
        <AuxWrapper>
            <Header/>
            <main>
                {props.children}
            </main>
        </AuxWrapper>
    )
}
export default Layout