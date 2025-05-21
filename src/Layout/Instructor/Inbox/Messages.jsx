import React from 'react'
import { useState,useEffect } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Logo from '../../Z/22405fa43d89aeb0ddf96d741a2776df38abbdfe.png'
import LogoOut from '../../Z/image.png'
import pPic from '../../Z/149935571.jpg'
import TaskManager from './Manager';
import '../../Z/Sidenav.css'
import '../style.css'

export default function Home() {
  const [hiddenItems, setHiddenItems] = useState({});

  const toggleHidden = (index) => {
  setHiddenItems(prev => ({
  ...prev,
  [index]: !(prev[index] ?? true)
    }));
  };

  return (
    <>
    <nav id="Sidenav" className="Sidenav sidebar">
      <div className="upperOfSideNav">
        <img src={Logo} className="iconOfScool" alt="School Icon" />
        <p>RexEdu</p>
      </div>
      <ul>
        <Link to = "/Home=Instructor">
          <li>
            <i className="bi bi-grid-fill"></i>
            <a>Home</a>
          </li>
        </Link>
        <Link to = "/lettergrades">
          <li>
            <i className="bi bi-grid-fill"></i>
            <a>Letter Grades</a>
          </li>
        </Link>
        <Link to = "/approvals">
          <li>
            <i className="bi bi-grid-fill"></i>
            <a>Approvals</a>
          </li>
        </Link>
        <Link to = "/inbox">
          <li>
            <i className="bi bi-grid-fill"></i>
            <a>Inbox</a>
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
    <div className="instructor-main-content">
        <div className="top-bar-Secretary">
          <input type="Search" placeholder="Search" className="search-input" />
          <img src={pPic} alt="Profile" className="profile-pic" />
        </div>
        <div className="paddingCont">
          <div className="inbox-table-container">
            <div class="inbox-list">
              <TaskManager />
            </div>
          </div>
        </div>
    </div>
    </>
  )
}
