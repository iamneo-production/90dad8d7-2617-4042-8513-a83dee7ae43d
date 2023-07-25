import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './sidebar.css'
import { Link } from 'react-router-dom';

function SideBar(){
  return (
    <Menu>
      <Link to='/home' className='menu-item'>
        Home
      </Link>
      <Link to='/employee' className='menu-item'>
        Employees
      </Link>
      <Link to='/course' className='menu-item'>
        Courses
      </Link>
      <Link to='/policy' className='menu-item'>
        Policies
      </Link>
      <Link to='/attendance' className='menu-item'>
        Attendance
      </Link>
      <Link to='/project' className='menu-item'>
       Projects
      </Link>
      <Link to='/progress' className='menu-item'>
       Progress
      </Link>
      <Link to='/chat' className='menu-item'>
       chat
      </Link>
      <Link to='/profile' className='menu-item'>
       Profile
      </Link>
      <Link to='/feed' className='menu-item'>
       Feedback
      </Link>

     
       
    </Menu>
  );
};
export default SideBar