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
  const [selectedIds, setSelectedIds] = useState([]);
  const [coursesListData, setCoursesListData] = useState([]);
  const [Addmanualyopener, setAddmanualyopener] = useState(false);
  const [resitExamIdList, setResitExamIdList] = useState([]);
  const [CourseCode, setCourseCode] = useState('');
  const [CourseName, setCourseName] = useState('');
  const [Department, setDepartment] = useState('');
  const [Instructor, setInstructor] = useState('');
  const [onSearchResult, setOnSearchResult] = useState('');
  const handleCheckboxChange = (event) => {
    const id = event.target.value;
    console.log(id)

    if (event.target.checked) {
      // Add id
      setSelectedIds((prev) => [...prev, id]);
    } else {
      // Remove id
      setSelectedIds((prev) => prev.filter((item) => item !== id));
    }
  };
  const GetFunc=()=>{
    axios.get('http://localhost:3000/secretary/courses')
    .then(response => {
      // console.log(response.data)
      setCoursesListData(response.data);
      GetResitIdFunc();
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    }) ;
  }

   function splitDateTime(isoString) {
    const [date, timeWithZ] = isoString.split('T');
    const time = timeWithZ.replace('Z', '');
    return { date, time };
  }

  const DeleteFunc=()=>{
    selectedIds.forEach((id) => {
      console.log(id)
      if (id) { 
        axios.delete(`http://localhost:3000/course/${id}`, {
          data: {
            secretaryId: 'sec-001'
          }
        })
        .then(() => {
          GetFunc(); // Refresh the data after deletion
        })
        .catch(error => {
          console.error(`Error deleting data for id ${id}:`, error);
        });
      } else {
        console.error('Invalid id detected:', id);
      }
    });
    setSelectedIds([]);
  }

  const FuncPost=()=>{
    axios.post('http://localhost:3000/course', {
      courseId :CourseCode,
      name: CourseName,
      resitExamId: CourseCode,
      department: Department,
      instructor: Instructor,
      secretaryId: "sec-001",
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }
  const GetResitIdFunc=()=>{
    axios.get('http://localhost:3000/secretary/resit-exams')
    .then(response => {
      // console.log(response.data)
      setResitExamIdList(response.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    }) ;
  }
  useEffect(() => {   // Fetch data when the component mounts
    GetFunc();
  }, []);
   


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
