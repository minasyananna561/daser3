import React, {  useState } from "react";
import style from './index.module.css'
export let Page6=()=>{
   
    const [formValues, setFormValues] = useState({ username: "", email: "", password: "" });


    const [formErrors, setFormErrors] = useState({});
    
    const [isSubmit, setIsSubmit] = useState(false);

    const handlechang=(e)=>{
      const {name,value}=e.target
      setFormValues({...formValues,[name]:value})
      console.log(formValues)
    }

     const handleSubmit=(e)=>{
       e.preventDefault();
       setFormErrors(validate(formValues))
       setIsSubmit(true)
       setIsSubmit("")

      
    }
  
    const validate=(values)=>{
      const errors={}
      const regex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!values.username){
          errors.username="Usernameis required!"
      }
      if (!values.email){
          errors.email="Email required!"
      }else if(!regex.test(values.email)){
          errors.email='This is not a valid email format!'
      }
      if (!values.password){
          errors.password="Password required!"
      }else if(values.password.length<6){
          errors.password="Password must be more than 6 characters"
      }else if(values.password.length>10){
          errors.password="Password cannot exceed more than 10 characters"
      }
      return errors
  }
  
    return (
      <div className={style.css}>
     
         
        <form  onSubmit={handleSubmit}>
          <h1>Login form</h1>
         
          <div className={style.form}>
            <div className="field">
              <label>username:</label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formValues.username}
                onChange={handlechang}
              />
            
            <p>{formErrors.username}</p>
            </div>
            <div className="field">
              <label>email:</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handlechang}
              />
            
            <p>{formErrors.email}</p>
            </div>
            <div className="field">
              <label>password:</label>

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handlechang}
              />
            </div>

            <p>{formErrors.password}</p>
            <button className={style.btn}>Submit</button>
          </div>
        </form>
      </div>
    )
}