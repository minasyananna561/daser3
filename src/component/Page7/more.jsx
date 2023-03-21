import React from "react";
import { useState } from "react";

export let More = ({ name, firma, url, text, price }) => {
  
  const [showMore, setShowMore] = useState(false);

  return (
    <div
      style={{
        margin: "20px",
        width: "30%",
        height: "780px",
        border: "solid",
        float: "left",
      }}
    >
      <div>
        <img src={url} alt="" style={{ width: "100%" }} />
        <h4>{name}</h4>
        <h5>{firma}</h5>
        <h5 style={{ color: "red" }}>
          <u>{price}</u>
        </h5>
        {showMore ? text : `${text.substring(0, 50)}`}
        <div>
         
          <button
            onClick={() => setShowMore(!showMore)}
            style={{
              background: "red",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {showMore ? "Close" : "Read More"}
          </button>
        </div>
      </div>
    </div>
  );
};

//react leaflet maps
