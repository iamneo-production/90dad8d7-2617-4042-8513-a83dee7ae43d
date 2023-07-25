import React, { useEffect, useState } from 'react'
import './progress.css'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
import { selectUser } from '../redux/userSlice'
import Footer from './Footer';
import axios from 'axios';


function Progress() {
    const user=useSelector(selectUser);
    const[proj,setProj]=useState('');
    const[crs,setcrs]=useState('');
    const[team,setteam]=useState('');
    const[dataList,SetData]=useState('');
    const a=80;
    let token=localStorage.getItem("token");
    const handleget=async(event) => {
      try{
        const response= await axios.get("http://localhost:8181/api/v1/prog/findprog/203",
      
        {
          headers:{
            "Authorization":`Bearer ${token}`,
            "cache-control":'no-cache',
      
            
            
          }
        }
        )
      console.log(response.data.eid);
      
      SetData(response.data);
      }
        catch(error){
          console.log(error);
        }
        
    };
    const calc=80*800*0.01;
    console.log(dataList.projprog);
    const calc1=800*0.01*dataList.projprog;
    const calc2=800*0.01*dataList.teamprog;
    const calc3=800*0.01*dataList.crsprog;
    const calc4=800*0.01*dataList.overall;
    
  return (
    <>
  
    <div className='prog' onTouchMove={handleget}>
        <br></br>
        <br></br>
        <br></br>
        
  <br></br>
  
  <div className='progprog'><div class="progress-barprog" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{margin:50,background:'radial-gradient(closest-side, white 89%, transparent 80% 100%),conic-gradient(rgb(137, 217, 219)'+`${dataList.overall}`+'%, lightgrey 0)'}}> <h4>MyStatus</h4></div></div>
    </div>
    <div className='prog2'>
    <div class="progress" style={{width:800 ,height:50}}>
  <div class="progress-bar progress-bar-success progress-bar-striped bg-warning" role="progressbar"
  aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width:calc1}} >
    Project Progress {dataList.projprog} %
  </div>
</div>
<br></br>
<br></br>
<div class="progress" style={{width:800 ,height:50}}>
  <div class="progress-bar progress-bar-success progress-bar-striped bg-success" role="progressbar"
  aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width:calc3}} >
    Course Progress {dataList.crsprog} %
  </div>
</div>
<br></br>
<br></br>
<div class="progress" style={{width:800 ,height:50}}>
  <div class="progress-bar progress-bar-success progress-bar-striped bg-info" role="progressbar"
  aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width:calc2}} >
    Team Progress  {dataList.teamprog} %
  </div>
</div>
<br></br>
<br></br>
<div class="progress" style={{width:800 ,height:50}}>
  <div class="progress-bar progress-bar-success progress-bar-striped bg-danger" role="progressbar"
  aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width:calc4}} >
    Overall progress  {dataList.overall} %
  </div>
</div>
<br></br>
<br></br>
<h2>{user.name}</h2>
<button  style={{background:'none',color:'black'}}onClick={handleget}><h2>Individual Status</h2></button>

    </div>
    <Footer/>
    
    </>
  )
}

export default Progress