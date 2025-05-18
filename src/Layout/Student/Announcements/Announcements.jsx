import React from 'react'
import { useState,useEffect } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
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
            <div class="sideSelector">
                <button class="Announcements-button current">Exam Details</button>
                <button class="Announcements-button">Announcements</button>
                <button class="Announcements-button">My Messages</button>
                <button class="Announcements-button">My Messages</button>
                <button class="Announcements-button">My Messages</button>
                <button class="Announcements-button">My Messages</button>
                <button class="Announcements-button">My Messages</button>
                <button class="Announcements-button">My Messages</button>
                <button class="Announcements-button">My Messages</button>
                <button class="Announcements-button">My Messages</button>
                <button class="Announcements-button">My Messages</button>
                <button class="Announcements-button">My Messages</button>
            </div>
            <div class="scroll-List">
              <div>
                <div key={2} onClick={() => toggleHidden(2)} class="dropdown">
                  <h3>SE408 | Analysis and Design of User Interfaces</h3>
                  <p><strong>👤</strong> Dr. Öğr. Üyesi BELAYNESH CHEKOL</p>
                  <div hidden={hiddenItems[2] !== false}>
                    <p>Resit Exam Attendance Status: <span class="highlight">Optional</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Exam Confirmation Status: <span class="confirmed">Confirmed</span></p>
                    <p>Date: 9.04.2025 &nbsp;&nbsp; Time: 11:00</p>
                    <p>Classrooms: A-Nermin Tarhan, A-Kuleli, D-Ayhan Songar</p>
                  </div>
                </div>

                <div key={3} onClick={() => toggleHidden(3)} class="dropdown">
                  <h3>SE302 | Software Project Management</h3>
                  <p><strong>👤</strong> Dr. Öğr. Üyesi KRİSTİN SURPUHİ BENLİ</p>
                  <div hidden={hiddenItems[3] !== false}>
                    <p>Resit Exam Attendance Status: <span class="highlight">Optional</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Exam Confirmation Status: <span class="confirmed">Confirmed</span></p>
                    <p>Date: 9.04.2025 &nbsp;&nbsp; Time: 11:00</p>
                    <p>Classrooms: A-Nermin Tarhan, A-Kuleli, D-Ayhan Songar</p>
                  </div>
                </div>

                <div key={4} onClick={() => toggleHidden(4)} class="dropdown">
                  <h3>SE302 | Software Project Management</h3>
                  <p><strong>👤</strong> Dr. Öğr. Üyesi KRİSTİN SURPUHİ BENLİ</p>
                  <div hidden={hiddenItems[4] !== false}>
                    <p>Resit Exam Attendance Status: <span class="highlight">Optional</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Exam Confirmation Status: <span class="confirmed">Confirmed</span></p>
                    <p>Date: 9.04.2025 &nbsp;&nbsp; Time: 11:00</p>
                    <p>Classrooms: A-Nermin Tarhan, A-Kuleli, D-Ayhan Songar</p>
                  </div>
                </div>

                <div key={5} onClick={() => toggleHidden(5)} class="dropdown">
                  <h3>SE302 | Software Project Management</h3>
                  <p><strong>👤</strong> Dr. Öğr. Üyesi KRİSTİN SURPUHİ BENLİ</p>
                  <div hidden={hiddenItems[5] !== false}>
                    <p>Resit Exam Attendance Status: <span class="highlight">Optional</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Exam Confirmation Status: <span class="confirmed">Confirmed</span></p>
                    <p>Date: 9.04.2025 &nbsp;&nbsp; Time: 11:00</p>
                    <p>Classrooms: A-Nermin Tarhan, A-Kuleli, D-Ayhan Songar</p>
                  </div>
                </div>

                <div key={6} onClick={() => toggleHidden(6)} class="dropdown">
                  <h3>SE302 | Software Project Management</h3>
                  <p><strong>👤</strong> Dr. Öğr. Üyesi KRİSTİN SURPUHİ BENLİ</p>
                  <div hidden={hiddenItems[6] !== false}>
                    <p>Resit Exam Attendance Status: <span class="highlight">Optional</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Exam Confirmation Status: <span class="confirmed">Confirmed</span></p>
                    <p>Date: 9.04.2025 &nbsp;&nbsp; Time: 11:00</p>
                    <p>Classrooms: A-Nermin Tarhan, A-Kuleli, D-Ayhan Songar</p>
                  </div>
                </div>

                <div key={7} onClick={() => toggleHidden(7)} class="dropdown">
                  <h3>SE302 | Software Project Management</h3>
                  <p><strong>👤</strong> Dr. Öğr. Üyesi KRİSTİN SURPUHİ BENLİ</p>
                  <div hidden={hiddenItems[7] !== false}>
                    <p>Resit Exam Attendance Status: <span class="highlight">Optional</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Exam Confirmation Status: <span class="confirmed">Confirmed</span></p>
                    <p>Date: 9.04.2025 &nbsp;&nbsp; Time: 11:00</p>
                    <p>Classrooms: A-Nermin Tarhan, A-Kuleli, D-Ayhan Songar</p>
                  </div>
                </div>

                <div key={8} onClick={() => toggleHidden(8)} class="dropdown">
                  <h3>SE302 | Software Project Management</h3>
                  <p><strong>👤</strong> Dr. Öğr. Üyesi KRİSTİN SURPUHİ BENLİ</p>
                  <div hidden={hiddenItems[8] !== false}>
                    <p>Resit Exam Attendance Status: <span class="highlight">Optional</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Exam Confirmation Status: <span class="confirmed">Confirmed</span></p>
                    <p>Date: 9.04.2025 &nbsp;&nbsp; Time: 11:00</p>
                    <p>Classrooms: A-Nermin Tarhan, A-Kuleli, D-Ayhan Songar</p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
    </div>
    </>
  )
}
