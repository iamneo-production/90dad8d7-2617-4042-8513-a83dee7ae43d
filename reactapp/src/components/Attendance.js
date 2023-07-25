import React from 'react'
import './attendance.css'
import { useState } from 'react';
import Footer from './Footer'
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

function Attendance() {
  const [name,SetName]=useState('');
  const[from,SetFrom]=useState('');
  const[to,SetTo]=useState('');
  const[reason,SetReason]=useState('');
  const[id,SetId]=useState('');
  const navigate=useNavigate();
  let token=localStorage.getItem("token");
  const handleSubmit=async(event)=>{
    try{
      const response=await axios.post("http://localhost:8181/api/v1/leave/addleave",
      {
        eid:id,
        name:name,
        _from:from,
        _to:to,
        reason:reason
      },
      {
        headers:{
          "Authorization":`Bearer ${token}`,
          "cache-control":"no-cache"
        }
      }
      )
      console.log(response.status);
      navigate("/home")
    }
    catch(error){
      console.log(error);
    }
  }


  return (
    <>
    <div className='leave'>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
     <h2 style={{margin:40}}>LeaveBalance</h2>
     <h3 className='btn btn-secondary' style={{width:200,background:'black'}}>11 days</h3>
     <h2 style={{margin:40}}>Attendance</h2>
     <h3 className='btn btn-secondary' style={{width:200,background:'black'}}>180 days</h3>
     <br></br>
     
     


    </div>
    <div className='leavereq'>
    <div className='signup1'>
        <form className='login_form' onSubmit={handleSubmit}>
            <h1>Apply Leave</h1>
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
            <input type='name' className='form-control'
            placeholder='name' value={id}
             id='nm' onChange={(e)=>SetId(e.target.value)}
            />
            <label for='nm' style={{fontFamily:'serif',fontSize:20}}>Id</label>
            </div>
            </div>
           
            <div className='loginbox' style={{width:400}}>
            <div className='form-floating mb-3'>
            <input type='id' className='form-control'
            placeholder='id' value={from}
             id='id' onChange={(e)=>SetFrom(e.target.value)}
           />
            <label for='id' style={{fontFamily:'serif',fontSize:20}}>From</label>
            
            </div>
            </div>

            <div className='loginbox' style={{width:400}}>
            <div className='form-floating mb-3'>
            <input type='id' className='form-control'
            placeholder='age' value={to}
           id='age' onChange={(e)=>SetTo(e.target.value)}
            />
            <label for='id' style={{fontFamily:'serif',fontSize:20}}>To</label>
            
            </div>
            </div>
            

            <div className='loginbox'style={{width:400}} >
            <div className='form-floating mb-3'>
            <input type='password' className='form-control' value={reason}
            placeholder='password' id='pwd' style={{height:50}} onChange={(e)=>SetReason(e.target.value)}
            
            />
            <label for='pwd' style={{fontFamily:'serif',fontSize:20}}>Reason</label>
            </div>
            </div>
            <button  type='submit' className='btn btn-secondary' style={{background:'black',color:'white',width:400,height:70,margin:10,fontFamily:'serif',fontSize:20}}>APPLY</button>

        </form>

    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Attendance