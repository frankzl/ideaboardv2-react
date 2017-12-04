import React from 'react'
import AuxWrapper from "../../hoc/AuxWrap";
import Header from "./Header/Header";

const Layout = (props) =>
{
    return (
        <AuxWrapper>
            <Header/>
            <main>Main</main>
        </AuxWrapper>
    )
}
export default Layout