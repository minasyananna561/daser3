import React from "react";
import { CloseIcon, Icon, SidebarContainer, SidebarLink,
     SidebarRoute, SidebarWrapper, SideBtnWrap,
     SidebarMenu } from "./SidebarElements";
export const Sidebar=({isOpen,toggle})=>{
    return(
        <>
       <SidebarContainer isOpen={isOpen} onClick={toggle}>
       <Icon onClick={toggle}>
        <CloseIcon/>
       </Icon>
       <SidebarWrapper>
        <SidebarMenu>
            <SidebarLink to="/" onClick={toggle}>
              Page 1
            </SidebarLink>
            <SidebarLink to="/Covid" onClick={toggle}>
                Page 2
            </SidebarLink>
            <SidebarLink to="/Title" onClick={toggle}>
               Page 3
            </SidebarLink> 
            <SidebarLink to="/About" onClick={toggle}>
               Page 4
            </SidebarLink> 
            <SidebarLink to="/Search" onClick={toggle}>
               Page 5
            </SidebarLink> 
            <SidebarLink to="/page6" onClick={toggle}>
               Page 6
            </SidebarLink> 
            <SidebarLink to="/page7" onClick={toggle}>
               Page 7
            </SidebarLink> 
              
        </SidebarMenu>
        <SideBtnWrap>
            
           
            {/* <SidebarRoute to='/'>
               US
            </SidebarRoute> */}
        </SideBtnWrap>
       </SidebarWrapper>
       </SidebarContainer>
        </>
    )
}