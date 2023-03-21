import axios from 'axios'
import { useEffect, useState } from 'react'
import style from './index.module.css'
export let Home=()=>{
    let [state,setState]=useState([])



    let[drop,SetDrop]=useState(false)
    
    let[drope,SetDrope]=useState(false)
    let[dropes,SetDropes]=useState(false)
    let[dropese,SetDropese]=useState(false)
    let[dropeses,SetDropeses]=useState(false)

   
    useEffect(()=>{
      axios.get(`https://jsonplaceholder.typicode.com/users`) 
      .then(response=>{

          setState(response.data)
      }) 
    },[])

 console.log(state)
    return <div className={style.home}>


        {state.map((item,index)=>
        <div className={style.home1} key={index}>
        <div ><h3 className={style.h3}> {item?.name} {item?.username}</h3></div>
        <div className={style.email} onClick={()=>SetDrop(!drop)}>Sign in with Email
        {drop&&<div className={style.email_drop}> 
        {item?.email}</div>}</div>
        
        <div className={style.address} onClick={()=>SetDrope(!drope)}>Sign in with Address 
        {drope&&<div className={style.address_drop}>
            <p>{item?.address?.street}</p>
            <p>{item?.address?.suite}</p>
            <p>{item?.address?.city} </p>
            <p>{item?.address?.zipcode}</p>
            </div>}</div>

        <div className={style.company} onClick={()=>SetDropes(!dropes)}>Sign in with Company
        {dropes&&<div className={style.company_drop}>
            <p>{item?.company?.name}</p>
            <p>{item?.company?.bs}</p> 
            </div>}
            </div>
        <div className={style.phon} onClick={()=>SetDropese(!dropese)}>Sign in with Phon
        {dropese&&<div className={style.phon_drop}>
            {item?.phone}
            </div>}
            </div>
        <div className={style.website} onClick={()=>SetDropeses(!dropeses)}>Sign in with Website
        {dropeses&&<div className={style.website_drop}>
            {item?.website}</div>}</div>
            </div>)}
        
    </div>
}
//jsoneplaseholder axios fetch