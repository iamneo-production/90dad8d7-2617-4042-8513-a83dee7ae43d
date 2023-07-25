import React, { Component } from 'react'
import Footer from './Footer'
import './Home.css'
import { useState } from 'react'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
import { selectUser } from '../redux/userSlice'
import { Link } from 'react-router-dom'
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import SideBar from './SideBar'
import axios from 'axios'
import { useEffect } from 'react'

const Home=()=> {
  let token=localStorage.getItem("token");
  
  let eid=localStorage.getItem("eid");
  const[dataList,SetData]=useState({});
  const[total,SetTotal]=useState('');
  
  const[finish,SetFinish]=useState('');
  useEffect(()=>{
  const handleget=async() => {
    try{
      const response= await axios.get(`http://localhost:8181/api/v1/prog/findprog/${eid}`,
    
      {
        headers:{
          "Authorization":`Bearer ${token}`,
          "cache-control":'no-cache',
    
          
          
        }
      }
      )
      const tot=await axios.get("http://localhost:8181/api/v1/proj/findallproj",
    
  
      {
        headers:{
          "Authorization":`Bearer ${token}`,
          "cache-control":'no-cache',
    
          
          
        }
      }
      )
      const appr=await axios.get("http://localhost:8181/api/v1/proj/findassignproj",
    
  
      {
        headers:{
          "Authorization":`Bearer ${token}`,
          "cache-control":'no-cache',
    
          
          
        }
      }
      )
      SetTotal(tot.data);
      SetFinish(appr.data);
    
    
    SetData(response.data);
    console.log("hi");
    console.log(response.data);
    
    }
    
      catch(error){
        console.log(error);
      }

      
  }
  if(eid){
    handleget();
  }
},[])
 
  
    const user=useSelector(selectUser);
    
    
    return (
        <>
       
       
        <div >

          
        
        <div className="hometotal2">
        <div className='det'>
       
        <Link to='/progress'><button className='btn btn-secondary' style={{background:'black',width:200}}>Progress </button></Link>
        <div className='br5'>
        <div class="progress-barh5" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{margin:50,background:'radial-gradient(closest-side, white 89%, transparent 80% 100%),conic-gradient(rgb(137, 217, 219)'+`${dataList.overall}`+'%, lightgrey 0)'}}> <h4>My Progress</h4></div>
        </div>
        </div>
       </div>
         
          
          </div>
       
          
      <div className="home">
       {/* <div className='sb' style={{margin:-50,position:'absolute'}}>
       <SideBar/>
       </div> */}
       
        <div className='col1'>
        <Link to='/employee'  style={{textDecoration:'none'}}><div className="hometotal"  style={{textDecoration:'none'}}><h4 style={{margin:150}}>Employees<br></br></h4></div></Link>
        <Link to='/project'  style={{textDecoration:'none'}}><div className="projectotal" style={{textDecoration:'none'}}><h4 style={{margin:150}}>Projects {total}</h4></div></Link>
        </div>
        <div className='col2'>
        <Link to='/project' style={{textDecoration:'none'}}><div className="emponline"><h4 style={{margin:150}}>Finished Projects {finish}</h4></div></Link>
        <Link to='/course'  style={{textDecoration:'none'}}><div className='projectct'><h4 style={{margin:165}}> Courses </h4></div></Link>
        </div>


      </div>
      <div className='profile' >
       
       
       <div className="hometotal1">
        <div className='bars'>
       <div class="progress-barh1" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{margin:50  ,background:'radial-gradient(closest-side, white 89%, transparent 80% 100%),conic-gradient(rgb(179, 231, 136)'+`${dataList.crsprog}`+'%, lightgrey 0)'
    
    }}> <h4>CourseStatus</h4></div>
       <div class="progress-barh2" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{margin:50,background:'radial-gradient(closest-side, white 89%, transparent 80% 100%),conic-gradient(rgb(105, 140, 255)'+`${dataList.teamprog}`+'%, lightgrey 0)'}}> <h4>TeamStatus</h4></div>
       </div>
       </div>
      
       

      </div>
      
      <Footer/>
      
      </>
     
    )
 
}

export default Home