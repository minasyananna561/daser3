import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./index.module.css";

export let Covid = () => {
  
  const [showMore, setShowMore] = useState(false);
  
  const text =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";


  
  return (
    <div className={style.covid}>
      
      {showMore ? text : `${text.substring(0,50)}`}


      <button className={style.btn} onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show less" : "Show more"}
      </button>



<div>


</div>



    </div>
  );
};
//jsoneplaseholder axios fetch
