import React from 'react'
import { useState } from 'react'
import { Outlet , Link } from 'react-router-dom'
import Box from './Box'
import Logo from '../../Z/22405fa43d89aeb0ddf96d741a2776df38abbdfe.png';
import LogoOut from '../../Z/image.png';
import pPic from '../../Z/149935571.jpg';
import '../../Z/Sidenav.css';
import './LetterGrades.css'

const Items = [
    { CourseId: '1',Name:'mohamed', CourseCode: 'Item 1',Grade:'54',Letter:'GG', },
    { CourseId: '2',Name:'ahmed', CourseCode: 'Item 2',Grade:'25',Letter:'GG', },
    { CourseId: '3', Name:'omer',CourseCode: 'Item 3',Grade:'78',Letter:'GG',},
  ]
export default function LetterGrades() {

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

        <section className='LetterGrades'>
          <div className='BtnContainer'>
            <Box link='./' text='announce letter grade'/>
            <Box link='./announcenewlettergrade' text='announce new letter grade'/>
          </div>
            <section className='InnerLetterGrades'>
            <div className='InnerBtnContainer'>
              <button>Upload File</button>
              <button>Announce Manually</button>
            </div>
            <Outlet/>
            </section>
        </section>
    </div>
    </>
    )
}
