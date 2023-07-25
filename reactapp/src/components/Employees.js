import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './employee.css'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import Footer from './Footer';

export default function Employees() {
  const[dataList,SetData]=useState([]);
  let token=localStorage.getItem('token');
  console.log(token);
  const handleget=async(event)=>{
    try{
    const response=await axios.get("http://localhost:8181/api/v1/emp/findemp",
  
    {
      headers:{
        "Authorization":`Bearer ${token}`,
        "cache-control":'no-cache',
  
        
        
      }
    }
    )
  console.log(response.data);
  
  SetData(response.data);
  }
    catch(error){
      console.log(error);
    }
    }
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
                  <p className='fw-bold mb-1'>{info.name}</p>
                 
                  
                </div>
              </div>
            </td>
            <td>
              <p className='fw-normal mb-1'>{info.id}</p>
              {/* <p className='text-muted mb-0'>Cousera</p> */}
            </td>
            <td>
              <MDBBadge color='success' pill>
               {info.dept}
              </MDBBadge>
            </td>
           
            <td>
             {info.pos}
            </td>
            <td>
             <Link to='/chat'><button className='btn btn-secondary'>connect</button></Link>
            </td>
          </tr>
          )
      }
    )
  
  
  return (
    <>
    <div className='tab'>
      <button style={{background:'none',color:'black'}}onClick={handleget}><h2>EMPLOYEES</h2></button>
      <div className='emp'>
        <br></br>
        <br></br>
        <br></br>
        <h4>Total Emp 50</h4>

      </div>
      <br></br>
      <br></br>
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Id</th>
          <th scope='col'>Department</th>
          <th scope='col'>Position</th>
          <th scope='col'>Collaborate</th>
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
