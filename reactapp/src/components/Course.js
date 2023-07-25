import React from 'react'
import './course.css'
import { useState } from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import Footer from './Footer';
import axios from 'axios';

function Course() {
  const[dataList,SetData]=useState([]);
  let token=localStorage.getItem('token');
  console.log(token);
  const handleget=async(event)=>{
  try{
  const response=await axios.get("http://localhost:8181/api/v1/demo/findcrs",

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
            <p className='fw-normal mb-1'>{info.title}</p>
            <p className='text-muted mb-0'>Cousera</p>
          </td>
          <td>
            <MDBBadge color='success' pill>
             {info.cid}
            </MDBBadge>
          </td>
         
          <td>
           {info.duration}
          </td>
        </tr>
        )
    }
  )
  

  
  return (
    <>
   
    <div>
        
        
        <div className='crs1'>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          
        <h4>BIG DATA</h4>
        
        Professionals that want to hone their skills in handling, processing, analyzing, and visualizing massive information are the target audience for the Big Data certification. This program is perfect for those who work with data, such as data analysts, data scientists, database administrators, and IT specialists.
        Frequent responsibilities include building and executing Big Data solutions, monitoring and analyzing big data volumes, establishing predictive models and algorithms, and presenting findings to stakeholders.
        <br></br>
        <br></br>
        <button className='btn btn-secondary' style={{background:'black'}}>Duration : 6 months</button>
        <br></br>
        <br></br>
        <span class="fa fa-star checked" ></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
        
        
        </div>
        <div className='crs2'>
        <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          
        <h4>ARTIFICIAL INTELLIGENCE</h4>
        
        Certification in Artificial Intelligence and Machine Learning is intended for those who want to focus their careers on the creation of AI and ML-based solutions. Anyone already working in the fields of data science, software engineering, AI development, or information technology who are looking to further their knowledge of the topic would benefit most from this programme.
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
        <button className='btn btn-secondary' style={{background:'black'}}>Duration : 6 months</button>
       <br></br>
        <br></br>
        <span class="fa fa-star checked" ></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>

        </div>
        <div className='crs3'>
        <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          
        <h4>CLOUD COMPUTING</h4>
        
        Cloud computing specialists often begin their careers in entry-level positions like cloud support engineer or cloud administrator. You may work your way up to higher-level positions like "Cloud Solutions Architect," "Cloud Security Engineer," or "Cloud Operations Manager" as you develop experience and knowledge in the field.
        These top IT certifications can help you launch or advance a career in cloud computing: 

AWS Certified Solution Architect 
AWS Developer Associate Certification
Microsoft Azure Certification
<br></br>
        
        <br></br>
        
        <button className='btn btn-secondary'  style={{background:'black'}}>Duration : 6 months</button>
       <br></br>
        <br></br>
        <span class="fa fa-star checked" ></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>


       


        </div>
       
       
        <div className='crs4'>
        <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          
        <h4>NETWORKING</h4>
        
        The demand for networking professionals is high, and it's expected to continue growing in the coming years. As our reliance on technology grows, we need skilled networking professionals who can run and protect complex networks.
        The top IT certifications that can help you move ahead as a hardware and network professional include:

CCNA Routing & Switching Certification Training , 
CCNP-Routing & Switching Certification Training  
<br></br>
        <br></br>
        <br></br>
        <br></br>
        
        <button className='btn btn-secondary' style={{background:'black'}}>Duration : 6 months</button>
       <br></br>
        <br></br>
        <span class="fa fa-star checked" ></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>

        </div>
        <div className='crs3'>
        <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
       


        </div>
        
    </div>
   
    
    
    <div className='tab1'>
    <button onClick={handleget} style={{background:'none',color:'black'}}><h2>Other Courses</h2></button>
    <br></br>
    <br></br>
      
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          
          <th scope='col'>CourseTitle</th>
          <th scope='col'>CourseId</th>
          
          <th scope='col'>Duration</th>
        </tr>
      </MDBTableHead>

      <MDBTableBody>
        
        
        
     
        {DisplayData}
        
      </MDBTableBody>
    </MDBTable>
    </div>
    <Footer/>
    </>
  )
}

export default Course