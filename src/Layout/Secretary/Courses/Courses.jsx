import React from 'react'
import {Outlet} from 'react-router-dom';
import Box from './Box';
import '../Courses/Courses.css'
import Logo from '../../Z/22405fa43d89aeb0ddf96d741a2776df38abbdfe.png'
import LogoOut from '../../Z/image.png'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
export default function Courses() {
  return (
    <>
          <nav id="Sidenav" className="Sidenav sidebar">
        <div className="upperOfSideNav">
          <img src={Logo} className="iconOfScool" alt="School Icon" />
          <p>RexEdu</p>
        </div>
        <ul>
        <Link to="/Home=Secretary">
          <li>
            <i className="bi bi-grid-fill"></i>
            <p>Home</p>
          </li>
        </Link>
        <Link to="/courses">
          <li>
            <i className="bi bi-grid-fill"></i>
            <p>Courses</p>
          </li>
        </Link>
        <Link to="/departments">
          <li>
            <i className="bi bi-grid-fill"></i>
            <p>Departments</p>
          </li>
        </Link>
      </ul>
      <div className="logoutdiv">
        <Link to="/">
          <img src={LogoOut} alt="Logout Icon" />
          <p style={{ margin: 0 }}>log out</p>
        </Link>
    </div>
  </nav>

    <section className='courses'>
        <div className='BoxContinar'>
           <Box link="/courses" text='All' />
           <Box link="/courses/AnnouncedCourses" text='Announced Courses' />
           <Box link="/courses/UnannouncedCourses" text='Unannounced Courses' />
        </div>
      
       <Outlet/>
    </section></>
  )
}
