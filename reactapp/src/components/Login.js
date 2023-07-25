import React from 'react'
import { useState,useEffect } from 'react'
import { redirect, useNavigate } from 'react-router-dom'
import './login.css'
import { useDispatch } from "react-redux";
import axios from 'axios';

import { Link } from 'react-router-dom'

import { login } from '../redux/userSlice';
import Footer from './Footer';

const Login = () => {
 const [name,setName]=useState('')
 const [id,setId]=useState('')  
 const [password,setPassword]=useState('')
 const [errors, setErrors] = useState({});
 const[isSubmit,setIsSubmit]=useState(false);
 const navigate =useNavigate();
 const dispatch=useDispatch();

 const handleName=(event)=>{
    event.preventDefault();
    setName(event.target.value)
  }
 
  const handleId=(event)=>{
    event.preventDefault();
    setId(event.target.value)
  }
  const handlePassword=(event)=>{
    event.preventDefault();
    setPassword(event.target.value)
  }
  const handleSubmit=async (event)=>{
    event.preventDefault();
    setErrors(validateForm({name,id,password}));
    try{
      const response=await axios.post('http://localhost:8181/api/v1/auth/authenticate',{
        
        email:id,
        password:password
  
      });
      navigate('/home');
      let token=response.data.token;
      let eid=response.data.id;
      localStorage.setItem('token',token);
      localStorage.setItem('eid',eid);
      console.log(response.status);
      if(response.status===200){
        setName("");
        setId('');
        setPassword('');
  
        
  
      }
      
    }
    catch(error){
      console.log(error);
      setIsSubmit(false);
  
    }
    // setIsSubmit(true);
    
    
    dispatch(
      login({
        name:name,
        id:id,
        password:password,
      })
    );
   
};
  

  const validateForm = (values) => {
    const errors = {};

    if (values.name.trim() === '') {
      errors.name = 'Name is required';
      setIsSubmit(false);
    }

    else if (values.id.trim() === '') {
      errors.id = 'email is required';
      setIsSubmit(false);
    } 

    else if (values.password.trim() === '') {
      errors.password = 'Password is required';
      setIsSubmit(false);
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
      setIsSubmit(false);
    }
    else{
        setIsSubmit(true)
    }
    return errors;

    // setErrors(errors);
  };

  

  return (
    <>
  
    <div className='login'>
        <form className='login_form' onSubmit={handleSubmit}>
            <h1>User Login</h1>
            <div className='loginbox'>
            <div className='form-floating mb-3'>
            <input type='name' className='form-control'
            placeholder='name'
            value={name} id='nm'
            onChange={handleName} />
            <label for='nm'>Name</label>
            </div>
            {errors.name}
            </div>
           
            <div className='loginbox'>
            <div className='form-floating mb-3'>
            <input type='email' className='form-control'
            placeholder='id'
            value={id} id='id'
            onChange={handleId}/>
            <label for='id'>email</label>
            </div>
            {errors.id && <span >{errors.id}</span>}
            </div>

            <div className='loginbox'>
            <div className='form-floating mb-3'>
            <input type='password' className='form-control'
            placeholder='password' id='pwd'
            value={password}
            onChange={handlePassword}/>
            <label for='pwd'>Password</label>
            </div>
            {errors.password && <span>{errors.password}</span>}
            </div>
            <button  type='submit' className='btn btn-secondary' style={{background:'black',color:'white',width:400,height:50,margin:40}}>sign in</button>

        </form>
        
    </div>
    <Footer/>
    </>
  )
}

export default Login