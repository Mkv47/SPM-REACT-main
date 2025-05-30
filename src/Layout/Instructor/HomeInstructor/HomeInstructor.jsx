import React from 'react';
import { Link } from 'react-router-dom';
import InfoCard from './InfoCard';
import Lesson from './Lesson';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './HomeIstructor.css'
import Logo from '../../Z/22405fa43d89aeb0ddf96d741a2776df38abbdfe.png';
import LogoOut from '../../Z/image.png';
import pPic from '../../Z/149935571.jpg';
import '../../Z/Sidenav.css';
import SearchBar from '../../../Btns/SearchBar';
import ExamList from './Manager';


export default function Home() {
  return (
    <>
      <nav id="Sidenav" className="Sidenav sidebar">
        <div className="upperOfSideNav">
          <img src={Logo} className="iconOfScool" alt="School Icon" />
          <p>RexEdu</p>
        </div>
        <ul>
        <Link to="/Home=Instructor">
          <li>
            <i className="bi bi-grid-fill"></i>
            <p>Home</p>
          </li>
        </Link>
        <Link to="/lettergrades">
          <li>
            <i className="bi bi-grid-fill"></i>
            <p>Letter Grades</p>
          </li>
        </Link>
        <Link to="/approvals">
          <li>
            <i className="bi bi-grid-fill"></i>
            <p>Approvals</p>
          </li>
        </Link>
        <Link to="/inbox">
          <li>
            <i className="bi bi-grid-fill"></i>
            <p>Inbox</p>
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

      <div class="instructor-main-content">
        <div className="top-bar-Secretary">
          <input type="Search" placeholder="Search" className="search-input" />
          <img src={pPic} alt="Profile" className="profile-pic" />
        </div>

        <div className="InfoCardsContiner">
          <InfoCard link="/courses/AnnouncedCourses" title="unannounsed Courses" number="1"/>
          <InfoCard link="/courses" title="All courses" number="23"/>
          <InfoCard link="/courses/UnannouncedCourses" title="All Depertment" number="15"/>
        </div>
        <section className="theList">
          <div className="min-List-Container">
              <ExamList />
          </div>
        </section>
      </div>
    </>
  ) 
} 
