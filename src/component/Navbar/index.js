import React from "react"
import {FaBars} from 'react-icons/fa'
import Logo from '../../Img/logo.png'
import {Nav, NavLogo,NavLinks,  NavMenu,NavBtn, NavBtnLink,
    NavbarContainer,MobileIcon,NavItem} from './NavbarElements'
export const Navbar=({toggle})=>{  
    
    
    const navLinkStyles=({isActive})=>{
        return{
            fontWeight: isActive? 'bold':'normal',
            textDecoration:isActive? 'none':'underline',
        }
    }

    return(
       <>
       <Nav>
        <NavbarContainer>
        <NavLogo to='/'>
        <img src={Logo} alt="" style={{width:"100px"}}/>
        </NavLogo>
        <MobileIcon onClick={toggle}>
       <FaBars/>
        </MobileIcon>
        <NavMenu>
            <NavItem>
        <NavLinks style={navLinkStyles} to='/Home' >
            Page1
            </NavLinks>
            </NavItem>
            <NavItem>
            <NavLinks style={navLinkStyles} to='/Covid' >
           Page2
            </NavLinks>
            </NavItem>
            <NavItem>
            <NavLinks style={navLinkStyles} to='/Title'>
          Page3
            </NavLinks>
            </NavItem>
            <NavItem>
            <NavLinks to='/About' >
           Page4
            </NavLinks>
            </NavItem>
            <NavItem>
            <NavLinks style={navLinkStyles} to='/Search' >
           Page5
            </NavLinks>
            </NavItem>
            <NavItem>
            <NavLinks style={navLinkStyles} to='/page6' >
           Page6
            </NavLinks>
            </NavItem>
            <NavItem>
            <NavLinks style={navLinkStyles} to='/page7' >
           Page7
            </NavLinks>
            </NavItem>
            <NavItem>
            <NavLinks style={navLinkStyles} to='/page8' >
           Page8
            </NavLinks>
            </NavItem>
            <NavItem>
            <NavLinks style={navLinkStyles} to='/page9' >
           Page9
            </NavLinks>
            </NavItem>
            <NavItem>
            <NavLinks style={navLinkStyles} to='/page10' >
           Page10
            </NavLinks>
            </NavItem>
            <NavItem>
            <NavLinks style={navLinkStyles} to='/page11' >
           Page11
            </NavLinks>
            </NavItem>
            <NavItem>
            <NavLinks style={navLinkStyles} to='/page12' >
           Page12
            </NavLinks>
            </NavItem>
            <NavItem>
            <NavLinks style={navLinkStyles} to='/page13' >
           Page13
            </NavLinks>
            </NavItem>
            <NavItem>
            <NavLinks style={navLinkStyles} to='/page14' >
           Page14
            </NavLinks>
            </NavItem>
        </NavMenu>
        
        {/* <NavBtn>
            <NavBtnLink to='/' > ՀԱՅ</NavBtnLink>
            
        </NavBtn> */}
       
        </NavbarContainer>
       </Nav>
       </>
    )
}