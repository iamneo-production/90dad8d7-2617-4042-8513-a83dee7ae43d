import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './profile.css'
import { useState } from 'react'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
import { selectUser } from '../redux/userSlice'
import Footer from './Footer';
import { current } from '@reduxjs/toolkit'
import axios from 'axios'

function Profile() {

    const user=useSelector(selectUser);
    const [name,SetName]=useState('');
    const[dat,SetDat]=useState('');
    const [id,SetId]=useState('');
    const[dept,SetDept]=useState('');
    const[age,SetAge]=useState('');
    let eid=localStorage.getItem("eid");
    const[pos,SetPos]=useState('');
    const[sal,SetSal]=useState('');
    let token=localStorage.getItem("token");
    const [isShown,setIsShown]=useState(false)
    const handleclick=(event)=>{
      setIsShown(current=>!current)
      console.log(token)
    }
    useEffect(()=>{
      const disp=async()=>{
        const Details=await axios.get(`http://localhost:8181/api/v1/emp/findemp/${eid}`,
        {
          headers:{
            "Authorization":`Bearer ${token}`,
            "cache-control":"no-cache"
          }
        })
        console.log(Details.data);
        SetDat(Details.data.sal);

      }
      disp();
      

    },[]);
    
    const handleSubmit=async(event)=>{
      event.preventDefault();
      try{
        const response=await axios.put("http://localhost:8181/api/v1/emp/updateemp",
        {
          id:id,
          name:name,
          age:age,
          sal:sal,
          pos:pos,
          dept:dept
        },
        {
          headers:{
            "Authorization":`Bearer ${token}`,
            "cache-control":"no-cache"
          }
        }
        )
       
        console.log(response.status);
        
      }
      catch(error){
        console.log(error);
      }
     
    }


    
  return (
    <div >
        <div className='prof'>
            <div className='welmsg'>

            <h2 >Hi {user.name} </h2>
            </div>
            <div className='profcont'>
             <button className='btn btn-secondary' style={{width:400,background:'white',color:'black'}}>Name:   {user.name}</button>
             <br></br>
             <br></br>
             <button className='btn btn-secondary' style={{width:400,background:'white',color:'black'}}>Id:   {user.id}</button>
             <br></br>
             <br></br>
             <button className='btn btn-secondary' style={{width:400,background:'white',color:'black'}}>Salary:   {dat}</button>
             <br></br>
             <br></br>
             
             <Link to='/sign-in'><button className='btn btn-secondary' style={{width:400,background:'black'}}>LOGOUT</button></Link>
            </div>
            
        </div>
        <div className='upd'><button className='btn btn-secondary' style={{width:200,background:'black',margin:10}} onClick={handleclick} >Update Details</button>
        {isShown&&(<div>






          <div className='signup1' style={{margin:10}}>
        <form className='login_form' onSubmit={handleSubmit}>
            <h1>Update</h1>
            <div className='loginbox'>
            <div className='form-floating mb-3'>
            <input type='text' className='form-control'
            placeholder='name' value={name} onChange={(e)=>SetName(e.target.value)}
             id='nm'
          />
            <label for='nm'>Name</label>
            </div>
            </div>
           
            <div className='loginbox'>
            <div className='form-floating mb-3'>
            <input type='id' className='form-control'
            placeholder='id'  value={id} onChange={(e)=>SetId(e.target.value)}
             id='id'
           />
            <label for='id'>Id</label>
            
            </div>
            </div>

            <div className='loginbox'>
            <div className='form-floating mb-3'>
            <input type='text' className='form-control'
            placeholder='age'  value={dept} onChange={(e)=>SetDept(e.target.value)}
            id='age'
           />
            <label for='id'>Department</label>
            
            </div>
            </div>

            <div className='loginbox'>
            <div className='form-floating mb-3'>
            <input type='text' className='form-control'
            placeholder='id' value={pos} onChange={(e)=>SetPos(e.target.value)}
             id='id'
           />
            <label for='id'>Position</label>
            
            </div>
            </div>

            <div className='loginbox'>
            <div className='form-floating mb-3'>
            <input type='age' className='form-control'
            placeholder='id' value={age} onChange={(e)=>SetAge(e.target.value)}
             id='id'
           />
            <label for='id'>Age</label>
            
            </div>
            </div>
            

            <div className='loginbox'>
            <div className='form-floating mb-3'>
            <input type='integer' className='form-control'
            placeholder='password' id='pwd' value={sal} onChange={(e)=>SetSal(e.target.value)}
           
            />
            <label for='pwd'>Salary</label>
            </div>
            </div>
            <button  type='submit' className='btn btn-secondary' style={{background:'black',color:'white',width:400,height:50,margin:40}}>Update</button>

        </form>
    </div>
        </div>)}
        </div>

        
        

    </div>
  )
}

export default Profile
