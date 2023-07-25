import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FeedBack = () => {
    const [name,SetName]=useState('');
  const[email,SetEmail]=useState('');
  
  const[reason,SetReason]=useState('');
 
  const navigate=useNavigate();
  let token=localStorage.getItem("token");
  const handleSubmit=async(event)=>{
    try{
      const response=await axios.post("http://localhost:8082/api/v1/feed/addFeedback",
      {
       name:name,
       email:email,
       feedback:reason
      }
      
      )
      console.log(response.status);
      alert(response.data);
      navigate("/home")
    }
    catch(error){
      console.log(error);
    }
  }
  return (
    <div>
        <div className='leavereq'>
    <div className='signup1'>
        <form className='login_form' onSubmit={handleSubmit}>
            <h1>FeedBack</h1>
            <div className='loginbox' style={{width:400}}>
            <div className='form-floating mb-3'>
            <input type='name' className='form-control'
            placeholder='name' value={name}
             id='nm' onChange={(e)=>SetName(e.target.value)}
            />
            <label for='nm' style={{fontFamily:'serif',fontSize:20}}>name</label>
            </div>
            </div>
            
           
            <div className='loginbox' style={{width:400}}>
            <div className='form-floating mb-3'>
            <input type='email' className='form-control'
            placeholder='id' value={email}
             id='id' onChange={(e)=>SetEmail(e.target.value)}
           />
            <label for='id' style={{fontFamily:'serif',fontSize:20}}>email</label>
            
            </div>
            </div>

           
            

            <div className='loginbox'style={{width:400}} >
            <div className='form-floating mb-3'>
            <input type='password' className='form-control' value={reason}
            placeholder='password' id='pwd' style={{height:50}} onChange={(e)=>SetReason(e.target.value)}
            
            />
            <label for='pwd' style={{fontFamily:'serif',fontSize:20}}>feedback</label>
            </div>
            </div>
            <button  type='submit' className='btn btn-secondary' style={{background:'black',color:'white',width:400,height:70,margin:10,fontFamily:'serif',fontSize:20}}>SUBMIT</button>

        </form>

    </div>
    </div>
    </div>
  )
}

export default FeedBack
