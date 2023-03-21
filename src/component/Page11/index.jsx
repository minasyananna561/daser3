import React from "react";
import { useState } from "react";
import "./index.css";
export let Page11 = () => {
  const [radio, setRadio] = useState({ gender: "" });

  const handleChange = (e) => {
    
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setRadio({ ...radio, [name]: value });
   };



  return (
    <div style={{ marginTop: "100px" }}>
    <div   >
      <label>Male: </label>
      <input
        type="radio"
        value="male"
        name="gender"
        
        onChange={handleChange}
        checked={radio.gender === "male"}
        
      />
</div>
      <label>Famel: </label>
      <input
      type="radio"
      value="famel"
      name="gender"
      onChange={handleChange}
      checked={radio.gender === "famel"}
      />

      <h1>Gender:{radio.gender}</h1>
    </div>
  );
};
