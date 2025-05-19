import React from 'react'
import { useState,useEffect } from "react";
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from 'axios';
import Logo from '../../Z/22405fa43d89aeb0ddf96d741a2776df38abbdfe.png'
import LogoOut from '../../Z/image.png'
import pPic from '../../Z/149935571.jpg'
import '../../Z/Sidenav.css'
import '../style.css'

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

      <div className="cards-container">
        <div className="course-card">
          <div className="card-header">
            <div>
              <h3>SE202</h3>
              <p>Software Design and Architecture</p>
              <p><i className="bi bi-person-fill"></i> Dr. Öğr. Üyesi KRİSTİN SURPUHİ BENLİ</p>
            </div>
            <div className="grade-box FF">FF</div>
          </div>
        <p className="resit-status">Resit Exam status: <strong className="FF">Mandatoy</strong><a href="#" className="exam-details">Show exam details</a></p>
          <div className="card-actions">
            <button className="btn dark">Confirm Attendance</button>
            <button className="icon-button"><i className="bi bi-trash-fill"></i></button>
          </div>
        </div>

        <div className="course-card">
          <div className="card-header">
            <div>
              <h3>SE202</h3>
              <p>Software Design and Architecture</p>
              <p><i className="bi bi-person-fill"></i> Dr. Öğr. Üyesi KRİSTİN SURPUHİ BENLİ</p>
            </div>
            <div className="grade-box FF">FF</div>
          </div>
        <p className="resit-status">Resit Exam status: <strong className="FF">Mandatoy</strong><a href="#" className="exam-details">Show exam details</a></p>
          <div className="card-actions">
            <button className="btn dark">Confirm Attendance</button>
            <button className="icon-button"><i className="bi bi-trash-fill"></i></button>
          </div>
        </div>

        <div className="course-card">
          <div className="card-header">
            <div>
              <h3>SE202</h3>
              <p>Software Design and Architecture</p>
              <p><i className="bi bi-person-fill"></i> Dr. Öğr. Üyesi KRİSTİN SURPUHİ BENLİ</p>
            </div>
            <div className="grade-box FF">FF</div>
          </div>
        <p className="resit-status">Resit Exam status: <strong className="FF">Mandatoy</strong><a href="#" className="exam-details">Show exam details</a></p>
          <div className="card-actions">
            <button className="btn dark">Confirm Attendance</button>
            <button className="icon-button"><i className="bi bi-trash-fill"></i></button>
          </div>
        </div>

        <div className="course-card">
          <div className="card-header">
            <div>
              <h3>SE202</h3>
              <p>Software Design and Architecture</p>
              <p><i className="bi bi-person-fill"></i> Dr. Öğr. Üyesi KRİSTİN SURPUHİ BENLİ</p>
            </div>
            <div className="grade-box FF">FF</div>
          </div>
        <p className="resit-status">Resit Exam status: <strong className="FF">Mandatoy</strong><a href="#" className="exam-details">Show exam details</a></p>
          <div className="card-actions">
            <button className="btn dark">Confirm Attendance</button>
            <button className="icon-button"><i className="bi bi-trash-fill"></i></button>
          </div>
        </div>

        <div className="course-card">
          <div className="card-header">
            <div>
              <h3>SE202</h3>
              <p>Software Design and Architecture</p>
              <p><i className="bi bi-person-fill"></i> Dr. Öğr. Üyesi KRİSTİN SURPUHİ BENLİ</p>
            </div>
            <div className="grade-box FF">FF</div>
          </div>
        <p className="resit-status">Resit Exam status: <strong className="FF">Mandatoy</strong><a href="#" className="exam-details">Show exam details</a></p>
          <div className="card-actions">
            <button className="btn dark">Confirm Attendance</button>
            <button className="icon-button"><i className="bi bi-trash-fill"></i></button>
          </div>
        </div>

        <div className="course-card">
          <div className="card-header">
            <div>
              <h3>SE202</h3>
              <p>Software Design and Architecture</p>
              <p><i className="bi bi-person-fill"></i> Dr. Öğr. Üyesi KRİSTİN SURPUHİ BENLİ</p>
            </div>
            <div className="grade-box FF">FF</div>
          </div>
        <p className="resit-status">Resit Exam status: <strong className="FF">Mandatoy</strong><a href="#" className="exam-details">Show exam details</a></p>
          <div className="card-actions">
            <button className="btn dark">Confirm Attendance</button>
            <button className="icon-button"><i className="bi bi-trash-fill"></i></button>
          </div>
        </div>

        <div className="course-card">
          <div className="card-header">
            <div>
              <h3>SE202</h3>
              <p>Software Design and Architecture</p>
              <p><i className="bi bi-person-fill"></i> Dr. Öğr. Üyesi KRİSTİN SURPUHİ BENLİ</p>
            </div>
            <div className="grade-box FF">FF</div>
          </div>
        <p className="resit-status">Resit Exam status: <strong className="FF">Mandatoy</strong><a href="#" className="exam-details">Show exam details</a></p>
          <div className="card-actions">
            <button className="btn dark">Confirm Attendance</button>
            <button className="icon-button"><i className="bi bi-trash-fill"></i></button>
          </div>
        </div>

        <div className="course-card">
          <div className="card-header">
            <div>
              <h3>SE202</h3>
              <p>Software Design and Architecture</p>
              <p><i className="bi bi-person-fill"></i> Dr. Öğr. Üyesi KRİSTİN SURPUHİ BENLİ</p>
            </div>
            <div className="grade-box FF">FF</div>
          </div>
        <p className="resit-status">Resit Exam status: <strong className="FF">Mandatoy</strong><a href="#" className="exam-details">Show exam details</a></p>
          <div className="card-actions">
            <button className="btn dark">Confirm Attendance</button>
            <button className="icon-button"><i className="bi bi-trash-fill"></i></button>
          </div>
        </div>

        
      </div>
    </div>
    </>
  )
}
