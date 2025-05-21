import React from 'react'
import { useState,useEffect } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Logo from '../../Z/22405fa43d89aeb0ddf96d741a2776df38abbdfe.png';
import LogoOut from '../../Z/image.png';
import pPic from '../../Z/149935571.jpg';
import TaskManager from './Manager';
import '../../Z/Sidenav.css';
import '../style.css';

export default function Home() {

  return (
    <>
    <nav id="Sidenav" className="Sidenav sidebar">
      <div className="upperOfSideNav">
        <img src={Logo} className="iconOfScool" alt="School Icon" />
        <p>RexEdu</p>
      </div>
      <ul>
        <Link to = "/Home=Student">
          <li>
            <i className="bi bi-grid-fill"></i>
            <a>Home</a>
          </li>
        </Link>
        <Link to = "/Details">
          <li>
            <i className="bi bi-grid-fill"></i>
            <a>Exam Details</a>
          </li>
        </Link>
        <Link to = "/Announcements">
          <li>
            <i className="bi bi-grid-fill"></i>
            <a>Announcements</a>
          </li>
        </Link>
        <Link to = "/Messages">
          <li>
            <i className="bi bi-grid-fill"></i>
            <a>Messages</a>
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
    <div className="main-content">

      <div className="top-bar">
        <input type="text" placeholder="Search" className="search-input" />
        <img src={pPic} alt="Profile" className="profile-pic" />
      </div>
        <div className="table-container">
          <div class="tabs">
            <Link to="/Details">
              <button>Exam Details</button>
            </Link>
            <button class="current">Announcements</button>
            <Link to="/Messages">
              <button>My Messages</button>
            </Link>
          </div>

          <div class="list">

            <TaskManager />

          </div>
        </div>
    </div>
    </>
  )
}
