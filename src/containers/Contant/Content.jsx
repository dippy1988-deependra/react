import React from 'react';
import { ContantWrapper } from "./ContantStyle";
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar'

const Content = () => {
    return (

        <div>
            <Header/>
            <Sidebar/>
            <ContantWrapper>
                <h1>contant area</h1>
            </ContantWrapper>
            </div>
    )
}

export default Content;