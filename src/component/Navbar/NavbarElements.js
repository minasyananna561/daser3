import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';



export const Nav=styled.nav`
background: rgb(36, 35, 35);
height: 100px;
display: flex;
justify-content: center;
align-items: center;
font-size:1rem;
position:sticky;
top:0;
border-top: 1px solid #eee;
z-index: 10;

@media screen and (max-width: 960px){
    transition: 0.8s all  ease;  
}
`;
export const NavbarContainer=styled.div`
background: rgb(36, 35, 35);
height: 80px;
width:100%;
display: flex;
justify-content: space-between;
padding:0 18px;
z-index: 1;
max-width:1100px;
`

export const NavLogo=styled(LinkR)`
color: #01bf71;
display: flex;
align-items: center;
text-decoration: none;
margin-left:24px;
font-weight:bold;
font-size:2rem;
cursor: pointer;
justify-self: flex-start;
font-size:1,5rem
`;

export const MobileIcon=styled.div`
display: none;

@media screen and (max-width: 760px) {
    display: block;
    position: absolute;
    top: -15px;
    right: 0;
    transform: translate(-100%, 65%);
    font-size: 1.8rem;
    cursor: pointer; 
}
`;

export const NavMenu=styled.ul`
display: flex;
align-items: center;
text-align:center;
list-style:none;
margin-right:-22px;

@media screen and (max-width: 760px){
    display: none; 
}
`;

export const NavItem=styled.li`
height:80px;
`;

export const NavLinks=styled(LinkR)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding:0 1rem;
height:100%;
cursor: pointer; 

&:hover{
    border-bottom:3px solid #01bf71;
    transition: all 0.2s ease-in-out;
    color:#01bf71;
}
`

export const NavBtn=styled.nav`
display: flex;
align-items: center;

@media screen and (max-width: 760px){
    display: none; 
}
`;

export const NavBtnLink=styled(LinkR)`
border-radius: 10px;
border:1px solid #fff;
background: #000;
white-space:nowrap;
padding: 5px 15px;
color: #fff;
justify-content: space-around;
margin-left:5px;
outline: none;
cursor: pointer;
font-size:15px;
text-decoration: none;


// &:hover{
//     transition: all 0.2s ease-in-out;
//    color:#010606;
//     background: #01bf71;
//     transition: all 0.2s ease-in-out;
// }
`