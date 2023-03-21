import React, { useState } from "react";
import style from "./index.module.css";
export let Page13 = () => {
  const [selected, setSelected] = useState([]);
const [show, setShow]=useState(false)

  const options = [
    { value: "", text: "Select color" },
    { value: "red", text: "red" },
    { value: "green", text: "green" },
    { value: "blue", text: "blue" },
    { value: "pink", text: "pink" },
    { value: "yellow", text: "yellow" },
  ];

  
  const handleChange = (e) => {
    console.log(e.target.value);
    setSelected([...selected, e.target.value]);
  };

  return (
    <div style={{ marginTop: "50px" }} className={style.page12}>
      <select value={selected} onChange={handleChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
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
              background: `${item}`,
              float: "left",
              marginLeft: "20px",
            }}
          >
             {
       show&&<p>{item}</p>
     }

          </h1>
        ))}
      </div>


      <button  onClick={()=>setShow(!show)}>show</button>
    </div>
  );
};