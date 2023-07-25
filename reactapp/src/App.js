
import React from 'react'
import Login from './components/Login'
import Attendance from './components/Attendance'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SideBar from './components/SideBar';
import Signup from './components/Signup';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import Home from './components/Home';
import Policy from './components/Policy';
import Employees from './components/Employees';
import Progress from './components/Progress';
import Project from './components/Project';
import Profile from './components/Profile';
import Course from './components/Course';
import Salary from './components/Salary';
import ChatRoom from './components/ChatRoom';
import AdminLogin from'./components/AdminLogin';
import FeedBack from './components/FeedBack';

function App() {
  return (
    
    <div>
     
     <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top"  style={{background:'black'}}>
          <div className="container">
          <div className="App" id="outer-container">
      <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div id="page-wrap">
        
      </div>
    </div>
            <Link className="navbar-brand" to={'#'} style={{color:'white'}}>
              HR PORTAL
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item" >
                  <Link className="nav-link" to={'/sign-in'} style={{color:'white'}}>
                    UserLogin
                  </Link>
                </li>
                <li className="nav-item">
                  
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" to={'/home'}  style={{color:'white'}}>
                    Home
                  </Link>
                </li> */}
                <li className="nav-item" >
                <Link className="nav-link" to={'/adminlogin'}  style={{color:'white'}}>
                   AdminLogin
                  </Link>
                  
                </li>
                <li className="nav-item" >
                
                  
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route exact path="/adminlogin" element={<AdminLogin />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<Signup/>} />
              <Route path="/home" element={<Home/>} />
              <Route path='/policy' element={<Policy/>}/>
              <Route path='/employee' element={<Employees/>}/>
              <Route path='/progress' element={<Progress/>}/>
              <Route path='/attendance' element={<Attendance/>}/>
              <Route path='/project' element={<Project/>}/>
              <Route path='/profile' element={<Profile/>}/>
              <Route path='/course' element={<Course/>}/>
              <Route path='/salary' element={<Salary/>}/>
              <Route path='/chat' element={<ChatRoom/>}/>
              <Route path='/feed' element={<FeedBack/>}/>
              
              
            </Routes>
          </div>
        </div>
      </div>
    </Router>
   
   </div>
  )
}

export default App