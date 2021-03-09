import React from 'react';
import { ContantWrapper } from "./ContantStyle";
import Header from './Header';
import Sidebar from './Sidebar'





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