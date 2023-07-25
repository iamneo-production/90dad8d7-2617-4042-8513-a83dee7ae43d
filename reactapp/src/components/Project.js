import React, { useEffect } from 'react';
import './employee.css'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import Footer from './Footer';
import { useState } from 'react';
import axios from 'axios';

export default function Project() {
  const[dataList,SetData]=useState([]);
  const[tot,SetTotal]=useState('');
  const[act,SetAct]=useState('');
  const[ass,Setass]=useState('');
  const[can,Setcan]=useState('');
  let token=localStorage.getItem('token');
  console.log(token);
  useEffect(()=>{
  const handleget=async()=>{
    try{
    const response=await axios.get("http://localhost:8181/api/v1/proj/findproj",
    
  
    {
      headers:{
        "Authorization":`Bearer ${token}`,
        "cache-control":'no-cache',
  
        
        
      }
    }
    )
    const total=await axios.get("http://localhost:8181/api/v1/proj/findallproj",
    
  
    {
      headers:{
        "Authorization":`Bearer ${token}`,
        "cache-control":'no-cache',
  
        
        
      }
    }
    )
    const active=await axios.get("http://localhost:8181/api/v1/proj/findactiveproj",
    
  
    {
      headers:{
        "Authorization":`Bearer ${token}`,
        "cache-control":'no-cache',
  
        
        
      }
    }
    )
    const cancel=await axios.get("http://localhost:8181/api/v1/proj/findcancelproj",
    
  
    {
      headers:{
        "Authorization":`Bearer ${token}`,
        "cache-control":'no-cache',
  
        
        
      }
    }
    )
    const assign=await axios.get("http://localhost:8181/api/v1/proj/findassignproj",
    
  
    {
      headers:{
        "Authorization":`Bearer ${token}`,
        "cache-control":'no-cache',
  
        
        
      }
    }
    )
    

    console.log("total")
    SetTotal(total.data);
    SetAct(active.data);
    Setass(assign.data);
    Setcan(cancel.data);
    console.log(total.data+" "+cancel.data+" "+active.data+" "+assign.data);
  console.log(response.data);
  
  SetData(response.data);
  }
    catch(error){
      console.log(error);
    }
    }
     handleget();
  },[]);
    const DisplayData=dataList.map(
      (info)=>{
          return(
            <tr>
            <td>
              <div className='d-flex align-items-center'>
                <img
                  src='https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI='
                  alt=''
                  style={{ width: '45px', height: '45px' }}
                  className='rounded-circle'
                />
                <div className='ms-3'>
                  <p className='fw-bold mb-1'>{info.lname}</p>
                  <p className='text-muted mb-0'>john.doe@gmail.com</p>
                </div>
              </div>
            </td>
            <td>
              <p className='fw-normal mb-1'>{info.title}</p>
              
            </td>
            <td>
            <MDBBadge color='success' pill>
              {info.status}
              </MDBBadge>
            </td>
            
            <td>
              {info.deadline}
            </td>
          </tr>
           
          )
      }
    )
    localStorage.setItem("totalpro",tot);
    localStorage.setItem("approv",ass);
    const a=(act/tot)*100;
    const b=(ass/tot)*100;
    const c=(can/tot)*100;
    console.log(a+" "+b+" "+c);

    

  
  return (
    
    <>
    <div className='projprog'>
    
    <div class="progress-bar1" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{margin:50,background:'radial-gradient(closest-side, white 89%, transparent 80% 100%),conic-gradient(rgb(137, 217, 219)'+`${a}`+'%, lightgrey 0)'}}> <h4>Active</h4></div>
    
    <div class="progress-bar2" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{margin:50,background:'radial-gradient(closest-side, white 89%, transparent 80% 100%),conic-gradient(rgb(173, 255, 105)'+`${b}`+'%, lightgrey 0)'}}> <h4>Approved</h4></div>
    <div class="progress-bar3" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"  style={{margin:50,background:'radial-gradient(closest-side, white 89%, transparent 80% 100%),conic-gradient(rgb(255, 105, 105) '+`${c}`+'%, lightgrey 0)'}}><h4>Cancelled</h4></div>
    </div>
    <div className='tab'>
  
      <button style={{background:'none',color:'black'}} ><h2>PROJECTS</h2></button>
      <br></br>
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Team Lead</th>
          <th scope='col'>Title</th>
          <th scope='col'>Status</th>
         
          <th scope='col'>Deadline</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {DisplayData}
       
        
      </MDBTableBody>
    </MDBTable>
    </div>
    <Footer/>
    </>
  );
}
