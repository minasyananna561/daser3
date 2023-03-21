import axios from 'axios'
import { useEffect, useState } from 'react'
import Sear from '../../Img/search.gif'

import style from './index.module.css'
export let Search=()=>{
    let [state,setState]=useState([])
    let [query,setQuery]=useState("")
   console.log(state)
    console.log(state.filter(item=>item.name.includes("a")))
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users`) 
        .then(response=>{
            setState(response.data)
        }) 
      },[])
    return <div className={style.map}>
      <form>
       <input
        type="text"
         placeholder="Search ..." 
         className={style.searche}
         onChange={(e)=>
            setQuery(e.target.value)
         }
         /> 
       
       <img src={Sear} className={style.button}/>
       
         </form>
       {state.
       filter((item)=>
       item.includes(query)
       ).
       map((item,index)=>
        <div key={index}>
        <div ><h3> {item.name} </h3></div>
       </div>)}
       
    </div>
}