import React from 'react';
import { useHistory } from "react-router-dom";
import routerContants from '../../routeConstants';
import { SidebarWrapper, SidebarNavItems } from "./SidebarStyle";
import { useLocation } from 'react-router-dom'


const Sidebar = () => {
    const history = useHistory();
    const location = useLocation();
    const isActiveRoute = (path) => location.pathname === path;
    
    return (

        <>
            <SidebarWrapper>
                <SidebarNavItems
                    isActive={isActiveRoute(routerContants.contant.route)}
                 onClick={() => history.push(routerContants.contant.route)}>Dashboard</SidebarNavItems>
                <SidebarNavItems
                    isActive={isActiveRoute(routerContants.home.route)}
                    onClick={() => history.push(routerContants.home.route)}>Home</SidebarNavItems>
                <SidebarNavItems 
                    isActive={isActiveRoute(routerContants.about.route)}
                    onClick={() => history.push(routerContants.about.route)}>About</SidebarNavItems>
                {/* <SidebarNavItems 
                    isActive={isActiveRoute(routerContants.services.route)}
                    onClick={() => history.push(routerContants.services.route)}>Services</SidebarNavItems>
                <SidebarNavItems 
                    isActive={isActiveRoute(routerContants.gallery.route)}
                    onClick={() => history.push(routerContants.gallery.route)}>Gallery</SidebarNavItems> */}
            </SidebarWrapper>
        </>
    )
}

export default Sidebar;