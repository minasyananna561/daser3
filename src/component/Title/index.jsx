import { useEffect, useState } from "react";
import { Example } from "../Example";
import style from "./index.module.css";
export let Title = () => {

  let [value, setValue] = useState({
    name: "",
    lastname: "",
  });

  // let [nam,setNam]=useState();

  let[drop,SetDrop]=useState(false)


  let [state, setState] = useState({
    name: "",
    lastname: "",
  });


  let [dark, setDark] = useState(false);


  // let [counte, setCounte] = useState(0);
  // useEffect(() => {
  //   console.log("hello");
  // }, [counte]);

  // const [title,setTitle]=useState("")
  // useEffect(()=>{
  //     document.title=title
  // },[title])

  return (
    <div className={style.titl}>
      <button onClick={() => setDark(!dark)}>
        <h1>dark</h1>
      </button>
      <div className={`${dark ? style.dark : style.dark_last}`}>

 <div className={style.title}>
          <input
            className={style.inp}
            type="text"
            placeholder="change name"
            onChange={(e) => setValue({ ...value, name: e.target.value })}
          />

          <input
            className={style.inp}
            type="text"
            placeholder="change lastname"
            onChange={(e) => setValue({ ...value, lastname: e.target.value })}
          />

          <button
            className={style.inp}
            onClick={() =>
              setState({ ...state, name: value.name, lastname: value.lastname })
            }
            disabled={!value.name || !value.lastname}
          >
            onClick
          </button>
          

          {/* <button onClick={()=>setState({...state,name:nam})}>onChang</button> */}
          <div className={style.name}>
            <div>name:</div> <div className={style.name1}>{state.name}</div>
          </div>
          <div className={style.name}>
            <div>lastname:</div>
            <div className={style.name1}>{state.lastname}</div>
          </div>









          {/* <input type="text"  className={style.title} value={title}
        onChange={(evt)=>setTitle(evt?.target?.value)}
        /> */}
          {/* <Example/> */}
        </div>
      </div>
      {/* <button onClick={()=>localStorage.setItem("lesson",JSON.stringify(value))}>save</button>
           <button onClick={()=>console.log(JSON.parse(localStorage.getItem("lesson")))}>save</button>
           
           <button onClick={()=>{setCounte(counte+1)}}>+</button>{counte}
           <button onClick={()=>counte>0 && setCounte(counte-1)}>-</button> */}

<div  onClick={()=>SetDrop(!drop)}>Sign in with Email
        {drop&&<div> 
        <p>helo</p>
        <p>hola</p>
        <p>hi</p>
        </div>}

        </div>
    </div>
  );
};
