import styled from "styled-components";
import {FaTimes} from 'react-icons/fa'
import {Link as LinkR} from 'react-router-dom';
//import {Link as LinkS} from 'react-scroll';

export const SidebarContainer=styled.aside`
height: 100%;
width:100%;
background: #000;
display:grid;
align-items: center;
top:0;
left:0;
z-index: 999;
position:fixed;
transition: 0.3s ease-in-out;
 opacity:${({isOpen})=>(isOpen ? "100%" : "0")};
 top:${({isOpen})=>(isOpen ? "0" : "-100%")}
`;
 
export const CloseIcon=styled(FaTimes)`
color:#fff;
`;

export const Icon=styled.div`
position: absolute;
top: 2.5rem;
right: 1.5rem;
background:transparent;
font-size:2rem;
outline:none;

`;


export const SidebarWrapper=styled.div`
color: #fff;
`;

export const SidebarMenu=styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6 80px);
text-align: center;


@media screen and (max-width: 480px){
    grid-template-rows: repeat(6 60px);

}
`
export const SidebarLink=styled(LinkR)`
display: flex;
align-items: center;
justify-content:center;
font-size:1.5rem;
text-decoration: none;
list-style:none;
transition:0.2s ease-in-out;
color: #fff;
cursor: pointer;
padding-top:50px;

&:hover{
    transition:  0.2s ease-in-out;
    color:#01bf71;
}
`

export const SideBtnWrap=styled.div`
display: flex;
justify-content:center;
padding-top:30px
`;

export const SidebarRoute=styled(LinkR)`
border-radius:10px;
background:#01bf71;
white-space:wrap;
padding:6px 10px;
margin-left:5px;
color:#010606;
font-size:18px;
outline:none;
border:none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;


&:hover{
    transition: all 0.2s ease-in-out;
    background:#fff;
    color:#010606;
}
`;
