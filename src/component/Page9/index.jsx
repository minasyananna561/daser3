import React, { useState } from "react";
export let Page9=()=>{
    const [texts, addElement] = useState([]);
    
    const [text, setText] = useState("");


    const initialState = [
        {id: 1, name: 'Alice', country: 'Austria'},
        {id: 2, name: 'Bob', country: 'Belgium'},
      ];
    
      const [employees, setEmployees] = useState(initialState);
    
      const removeSecond = () => {
        setEmployees(current =>
          current.filter(employee => {
            return employee.id !== 2;
          }),
        );
      };

    
    return(
        <div style={{marginTop:"50px"}}>
         {text ? <div>You are going to add {text}</div> : <div />}
      <br />
      <input type="number" onChange={(e) => setText(e.target.value)} value={text} />
      <button
        onClick={() => {
          let arr = [...texts, text];
          addElement(arr);
          setText("");
        }}
      >
        Add text
      </button>
      <div>
        <ol type="I" style={{textAlign:"start"}}>
          {texts.map((txt, index) => (
            <li key={index}>{txt}</li>
          ))}
        </ol>
      </div>

      <button onClick={removeSecond}>Remove second</button>

{employees.map(({id, name, country}) => {
  return (
    <div key={id}>
      <h2>name: {name}</h2>
      <h2>country: {country}</h2>

      <hr />
    </div>
  );
})}
        
        </div>
    )
}