// import React,{useState} from "react";
// import Base from "../core/Base";
// import{Link} from "react-router-dom";
// import {signup} from "../auth/helper"
// // using state variable to store the data before it goes to backend
// const Signup = ()=>{

//     const [values,setValues] = useState({
//         name: "",
//         email: "",
//         password: "",
//         error: "",
//         success: false});

//     // destructuring the things so we not need to use values.___
//     const{name,email,password,error,success}= values;

//     //for handling the constent changes
//     const handleChange = name => event=>{
//         //we can't make direct changes into the state variable so we use set method to do that 
//         setValues({ ...values, error: false, [name]: event.target.value });
//     };
     
//     // now we handle the submit button
//     const onSubmit = event=>{
//         event.preventDefault();// securing that our data will not vanish anywhere
//         setValues({...values,error:false});//we load all the values to state error is set to be false just did it not no why?
//         signup({name ,email,password})   //auth->index->to contact with backend it will give us a response and a error 
//         .then(data=>{
//             if(data.error){
//                 setValues({...values,error:data.error,success:false});
//             }else{
//                 setValues({
//                     ...values,
//                     //we had the data of user in field so we have to clear that 
//                     name:"",
//                     email:"",
//                     password:"",
//                     error:"",
//                     success:true
//                 });
//             }
//         })
//         .catch(console.log("ERROR IN SIGN UP"));
//     }
//     const signUpForm = ()=>{
//         return(
//             <div className="row">
//                 <div className= "col-md-6 offset-sm-3 text-left">
//                     <form>
//                         <div className="form-group">
//                          <label className="text-light">Name</label>
//                            <input 
//                               className="form-control" 
//                              onChange={handleChange(name)} 
//                              type="text">
                            
//                             </input>
//                         </div>
    
//                         <div className="form-group">
//                             <label className="text-light">E-mail</label>
//                             <input className="form-control" onChange={handleChange(email)}  type="email"></input>
//                         </div>
    
//                         <div className="form-group">
//                             <label className="text-light">Password</label>
//                             <input className="form-control" onChange={handleChange(password)}  type="password"></input>
//                         </div>
    
//                        <button className=" form-control btn btn-success btn-block mt-3">Submit</button>  
//                     </form>
                 
//                  </div>
//             </div>
//         )
//     }
//     return (
//        <Base title="Sign up page" description="A page for user to sign up">
//             {signUpForm()}
//             <p className="text-white text-center">{JSON.stringify(values)}</p>
//        </Base>
//     ); 
// };

// export default Signup;

import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { signup } from "../auth/helper";
import { findAllByDisplayValue } from "@testing-library/react";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false
  });

  const { name, email, password, error, success } = values;

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password })
      .then(data => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            error: "",
            success: true
          });
        }
      })
      .catch(console.log("Error in signup"));
  };

  const signUpForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group">
              <label className="text-light">Name</label>
              <input
                className="form-control"
                onChange={handleChange("name")}
                type="text"
                value={name}
              />
            </div>
            <div className="form-group">
              <label className="text-light">Email</label>
              <input
                className="form-control"
                onChange={handleChange("email")}
                type="email"
                value={email}
              />
            </div>

            <div className="form-group">
              <label className="text-light">Password</label>
              <input
                onChange={handleChange("password")}
                className="form-control"
                type="password"
                value={password}
              />
            </div>
            <button onClick={onSubmit} className="btn btn-success btn-block">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };

  const successMesaage = ()=>{
     return( <div className="alert alert-success"
        style={{display:success ? " " : "none"}}
      >
        New account is created Successfully. Please{" "}
        <Link to="/signin">Login here</Link>
      </div>)
  }

  const errorMesaage =()=>{
      return(
        <div className="alert alert-danger"
            style={{display:error ? " " : "none"}}
        >
             {error}
        </div>
    )};

  return (
    <Base title="Sign up page" description="A page for user to sign up!">
       {successMesaage()}
       {errorMesaage()}
      {signUpForm()}

      <p className="text-light text-center">{JSON.stringify(values)}</p>
    </Base>
  );
};

export default Signup;
