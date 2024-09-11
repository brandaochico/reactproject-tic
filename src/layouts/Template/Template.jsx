import { useContext } from 'react';
import { Outlet } from 'react-router-dom';


import { useAppContext } from '../../hooks';
import { Content, Footer, Header } from '../../components';

const Template = () =>{
    const { creator } = useAppContext();

    return (
        <>
            <Header />
            <Content>
                <Outlet />
            </Content>
            <Footer creator={creator}/>
        </>
    );
};

export { Template };