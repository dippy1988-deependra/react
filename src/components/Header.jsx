import React from 'react';
import { HeaderWrapper, LogoutButton } from "./HeaderStyle";
import logo from '../images/react.png';





const Header = () => {
    return (

        <>
            <HeaderWrapper>
                <div>

                    <img src={logo} alt="My logo" style={{ width: '100%' }} />
                </div>
                <div>

                    <LogoutButton>LogOut</LogoutButton>
                </div>


            </HeaderWrapper>
        </>
    )
}

export default Header;