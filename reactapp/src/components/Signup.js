import React from 'react'
import { useState } from 'react'
import './login.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import { redirect, useNavigate } from 'react-router-dom'




function Signup() {
    const [name,setName]=useState('')
    const navigate =useNavigate();
    const [id,setId]=useState('')  
    const [delid,Setdelid]=useState('');
    const [isShown,setIsShown]=useState(false)
    const [password,setPassword]=useState('')
    const [errors, setErrors] = useState({});
    let token=localStorage.getItem("token");
 const[isSubmit,setIsSubmit]=useState(false);
 const handledelete=async (event)=>{
  event.preventDefault();
    console.log(delid);
    try{
      const response=await axios.delete(`http://localhost:8181/api/v1/emp/del/${delid}`,
      {
        headers:{
          "Authorization":`Bearer ${token}`,
          "cache-control":"no-cache"
        }
      })
    }
    catch(error){
      console.log(error);
    }
}
 const handleclick=(event)=>{
  setIsShown(current=>!current)
  
}
 
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
const validateForm = (values) => {
  const errors = {};

  if (values.name.trim() === '') {
    errors.name = 'Name is required';
    setIsSubmit(false);
  }

  else if (values.id.trim() === '') {
    errors.id = 'id is required';
    setIsSubmit(false);
  } 
 


  else if (values.password.trim() === '') {
    errors.password = 'department is required';
    setIsSubmit(false);
  } 
  
  else{
      setIsSubmit(true)
  }
  return errors;

  // setErrors(errors);
};
const handleSubmit=async(event)=>{
  event.preventDefault();
  
  setErrors(validateForm({name,id,password}));
  setIsSubmit(true);
  
  try{
    const response=await axios.post('http://localhost:8181/api/v1/auth/register',{
      name:name,
      email:id,
      password:password

    });
    console.log(response.status);
    if(response.status===200){
      setName("");
      setId('');
      setPassword('');

      

    }
    
  }
  catch(error){
    alert(error);
    setIsSubmit(false);

  }
  if(isSubmit){
    navigate("/sign-in");
  }
};


  return (
    <>
    
    
    <div className='signup'>
     
    
        <form className='login_form' onSubmit={handleSubmit}>
            <h1>Add Employee</h1>
            <div className='loginbox'>
            <div className='form-floating mb-3'>
            <input type='name' className='form-control'
            placeholder='name'
            value={name} id='nm'
            onChange={handleName} />
            <label for='nm'>Name</label>
            {errors.name && <span>{errors.name}</span>}
            </div>
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
            <input type='text' className='form-control'
            placeholder='password' id='pwd'
            value={password}
            onChange={handlePassword}/>
            <label for='pwd'>Password</label>
            </div>
            {errors.password && <span >{errors.password}</span>}
            </div>
            <button  type='submit' className='btn btn-secondary' style={{background:'black',color:'white',width:400,height:50,margin:40}}>sign up</button>

        </form>
        
    </div>
    <div className='del'>
    <button  type='submit' className='btn btn-secondary' style={{background:'black',color:'white',width:400,height:50,margin:40}}  onClick={handleclick}>Delete</button>
    {isShown&&(<div>






<div className='signup2' style={{margin:10}}>
<form className='login_form' >
  <h2>OffBoarding</h2>
  <div className='loginbox'>
  <div className='form-floating mb-3'>
  <input type='text' className='form-control'
  placeholder='name' 
   id='nm' 
/>
  <label for='nm'>Name</label>
  </div>
  </div>
 
  <div className='loginbox'>
  <div className='form-floating mb-3'>
  <input type='id' className='form-control'
  placeholder='id' 
   id='id' value={delid} onChange={(e)=>(Setdelid(e.target.value))}
 />
  <label for='id'>Id</label>
  
  </div>
  </div>

  <div className='loginbox'>
  <div className='form-floating mb-3'>
  <input type='text' className='form-control'
  placeholder='age'  
  id='age' 
 />
  <label for='id'>Department</label>
  
  </div>
  </div>
  <div className='chk'>
  <input type="checkbox" />
  <br></br>
    I confirm
  </div>
  

 

  
  <button className='btn btn-secondary' onClick={handledelete} style={{background:'black',color:'white',width:400,height:50,margin:40}}>Delete</button>

</form>
</div>
</div>)}
    </div>
    
    <Footer/>
    </>
  )
}

export default Signup