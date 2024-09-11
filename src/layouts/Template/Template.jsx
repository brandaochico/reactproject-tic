import { Outlet } from "react-router-dom";

import { Content, Footer, Header } from "../../components";

const Template = () =>{
    return (
        <>
            <Header />
            <Content>
                <Outlet />
            </Content>
            <Footer creatorName="Chico"/>
        </>
    );
};

export { Template };