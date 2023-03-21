import { Menu } from '../Menu'
import Time from '../../Img/time.jpg'
import style from './index.module.css'
import { Navbar } from '../Navbar';
import { useState } from 'react';
import { Sidebar } from '../Sidebar';
export let Header=()=>{
     const [isOpen,setIsOpen]=useState(false);
   const toggle=()=>{
        setIsOpen(!isOpen)
    }
    return <div className={style.header}>
        <div className={style.header_top}>
            <img src={Time} alt="" style={{width:"100%",height:"100%"}}/>
        </div>
         <Sidebar isOpen={isOpen}  toggle={toggle}/> 
        <Navbar toggle={toggle} /> 
    </div>
}