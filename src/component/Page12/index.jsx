import React, { useState } from "react";
import style from "./index.module.css";
export let Page12 = () => {
  const [selected, setSelected] = useState([]);

  const options = [
    { value: "", text: "Select color" },
    { value: "red", text: "red" },
    { value: "green", text: "green" },
    { value: "blue", text: "blue" },
    { value: "pink", text: "pink" },
    { value: "yellow", text: "yellow" },
    { value: "grey", text: "grey" },
  ];

   const handleChange = (e) => {
    console.log(e.target.value);
    setSelected([...selected, e.target.value]);
  };

  return (
    <div style={{ marginTop: "50px" }} className={style.page12}>





      <select value={selected} onChange={handleChange}>
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.text}
          </option>
        ))}
      </select>


<div style={{ width: "auto", height: "100px" }}>
    
        {selected.map((item) => (
          <h1
            style={{
              width: "100px",
              height: "50px",
              border: "solid",
              //background: `${item}`,
              float: "left",
              marginLeft: "20px",
            }}
          >
           {item}
     
          </h1>
        ))}
      </div>
      <button style={{background:`${selected}`}} onClick={()=>alert(selected)}>{selected}</button>
    </div>
  );
};
