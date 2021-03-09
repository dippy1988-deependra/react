import React from 'react';
import { useHistory } from "react-router-dom";
import routerContants from '../routeConstants';
import { SidebarWrapper, SidebarNavItems } from "./SidebarStyle";


const Sidebar = () => {
    const history = useHistory();
    return (

        <>
            <SidebarWrapper>
                <SidebarNavItems onClick={() => history.push(routerContants.contant.route)}>Dashboard</SidebarNavItems>
                <SidebarNavItems onClick={() => history.push(routerContants.home.route)}>Home</SidebarNavItems>
                <SidebarNavItems onClick={() => history.push(routerContants.about.route)}>About</SidebarNavItems>
                <SidebarNavItems onClick={() => history.push(routerContants.services.route)}>Services</SidebarNavItems>
                <SidebarNavItems onClick={() => history.push(routerContants.gallery.route)}>Gallery</SidebarNavItems>
            </SidebarWrapper>
        </>
    )
}

export default Sidebar;