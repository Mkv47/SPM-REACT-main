import React from 'react'
import { Outlet , Link } from 'react-router-dom';
import Box from './Box';
import '../Courses/Courses.css';
import Logo from '../../Z/22405fa43d89aeb0ddf96d741a2776df38abbdfe.png';
import LogoOut from '../../Z/image.png';
import pPic from '../../Z/149935571.jpg';

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
            <a>Home</a>
          </li>
        </Link>
        <Link to="/courses">
          <li>
            <i className="bi bi-grid-fill"></i>
            <a>Courses</a>
          </li>
        </Link>
        <Link to="/departments">
          <li>
            <i className="bi bi-grid-fill"></i>
            <a>Departments</a>
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

      <div class="main-container">
        <div className="top-bar-Secretary">
          <select type="" placeholder="Search" className="search-input">
            <option>Faculty of Dentistry</option>
            <option>Faculty of Communication</option>
            <option>Faculty of Humanities and Social Sciences</option>
            <option selected>Faculty of Engineering and Natrual Sciences</option>
            <option>Faculty of Health and Sciences</option>
            <option>Faculty of Medicine</option>
          </select>
          <img src={pPic} alt="Profile" className="profile-pic" />
        </div>

        <div class="coursesTable">
          <section className='courses'>
              <div className='BoxContinar'>
                 <Box link="/courses" text='All' />
                 <Box link="/courses/AnnouncedCourses" text='Announced Courses' />
                 <Box link="/courses/UnannouncedCourses" text='Unannounced Courses' />
              </div>
                <Outlet/>
          </section>
        </div>
      </div>
    </>
  )
}
