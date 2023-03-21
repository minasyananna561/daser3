import React from "react";
import { useState } from "react";
// import './index.css'


let arr = [
  { id: 1, name: "Poghos" },
  { id: 2, name: "Petros" },
  { id: 3, name: "Simon" },
];


export let Page8 = () => {

 const [state, setState] = useState([]);

  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
 



  
  
   return (
    <div>
      {arr.map((item) => {
        return (
          <div key={item.id} style={{ cursor: "pointer" }}>
           
            <h1 onClick={() => {
            setState({ ...state, name: item.name }) 
            
          } 
         }
     
  
              >
             
           {item.name}
            </h1>
          </div>
        );
      })}
      <h1 style={{ float: "left", marginTop: "-130px" }}>{state.name}</h1>

      <h1>State variable count = {count}</h1>

      <button
        onClick={() => {
          setCount(count + 1);
          setTodos([...todos, { text: ` State variable count = ${count}` }]);
        }}
      >
        Add Todo
      </button>

      <div style={{ float: "left", marginTop: "-150px" }}>
        {todos.map((todo) => (
          <h2>{todo.text}</h2>
        ))}
      </div>
    </div>
  );
};
