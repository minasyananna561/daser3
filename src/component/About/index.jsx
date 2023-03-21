import React from 'react';
import {useState} from 'react';
import Lara from '../../Img/Lara.jpg'
import Poghos from '../../Img/Poghos.jpg'
import Petros from '../../Img/Petros.jpg'
import Lala from '../../Img/Lala.jpg'
import Ginos from '../../Img/Ginos.jpg'
import Simon from '../../Img/Simon.jpg'
import Sevo from '../../Img/Sevo.jpg'
import Background from '../../Img/background.jpg'
import DNT from '../../Img/dnt.jpg'
import style from './index.module.css'

export let About=()=>{
    let businesCards=[
        {id:1,firstName:"Poghos",lastName:"Poghosyan",url:Poghos,Profession:"Dentist",Phon:"+374 98252226",Email:"Poghos@mail.ru"},
        {id:2,firstName:"Petros",lastName:"Petrosyan",url:Petros,Profession:"Doctor-therapist",Phon:"+374 98555426",Email:"Petros@mail.ru"},
        {id:3,firstName:"Lala",lastName:"Lalayan",url:Lala,Profession:"Doctor-surgeon",Phon:"+374 98253426",Email:"Lala@mail.ru"},
        {id:4,firstName:"Lara",lastName:"Lalayan",url:Lara,Profession:"Traumatologist",Phon:"+374 98253426",Email:"Lara@mail.ru"},
        {id:5,firstName:"Ginos",lastName:"Ginosyan",url:Ginos,Profession:"Doctor-oncologist",Phon:"+374 96222426",Email:"Ginos@mail.ru"},
        {id:6,firstName:"Simon",lastName:"Simonyan",url:Simon,Profession:"Child doctor",Phon:"+374 77253426",Email:"Simon@mail.ru"},
        {id:7,firstName:"Sevo",lastName:"Simonyan",url:Sevo,Profession:"Cardiologist",Phon:"+374 33253426",Email:"Sevo@mail.ru"},
    ]
    let [state,setState]=useState(false)
    return <div>
        <button onClick={()=>setState(!state)}><h1>dark</h1></button>
        <div className={`${state?style.dark:style.dark_last}`}>
            <div className={style.cards}>
            {businesCards.map((item)=>
             <div className={style.card} key={item.id}  
             
             
             style={{ backgroundImage:`url(${Background})` }}>






                    <div className={style.card1} style={{backgroundImage:`url(${DNT})`}}>



            <h1 className={style.h1}>{item.firstName} {item.lastName}</h1>
            <div className={style.div_img}>

            <img src={item.url} alt="man-img" />
            
            </div>
            <h2 className={style.h1}>{item.Profession}</h2>
             <div className={style.div_dnt}>
            <p className={style.phon}>Tel: {item.Phon}</p>
            <p className={style.phon}> Email: {item.Email}</p>
            </div>
            </div>
        </div>
        )}
            </div>
         </div>

    </div>
}