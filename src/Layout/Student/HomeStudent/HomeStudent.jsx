import React from 'react'
import { useState,useEffect } from "react";
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './HomeStudent.css'
import axios from 'axios';
import Logo from '../../Z/22405fa43d89aeb0ddf96d741a2776df38abbdfe.png'
import LogoOut from '../../Z/image.png'
import '../../Z/Sidenav.css'
import { GetResitExamList, GetCourseDetails } from './Functions'
export default function Home() {
  const [resitExamList, setResitExamList] = useState([]);
  const [CourseDetails, setCourseDetails] = useState([]);





      useEffect(() => {
          const fetchData = async () => {
      const resits = await GetResitExamList("001");
      const courses = await GetCourseDetails("001");

      setResitExamList(resits);
      setCourseDetails(courses);
    };
        fetchData();
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
            <p>Home</p>
          </li>
        </Link>
        <Link to = "/Details">
          <li>
            <i className="bi bi-grid-fill"></i>
            <p>Exam Details</p>
          </li>
        </Link>
        <Link to = "/Home=Student">
          <li>
            <i className="bi bi-grid-fill"></i>
            <p>Announcements</p>
          </li>
        </Link>
        <Link to = "/Home=Student">
          <li>
            <i className="bi bi-grid-fill"></i>
            <p>Messages</p>
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
        <img src="profile.jpg" alt="Profile" className="profile-pic" />
      </div>

      <div className="cards-container">
        {(CourseDetails||[]).map((course) => {
            const resit =  resitExamList.find((resitItem) => course.resitExam.resitExamId === resitItem.id)|| resitExamList[0]   
          return (
            <div className="course-card" key={course.courseId}>
              <div className="card-header">
                <div>
                  <h3>{course.courseId}</h3>
                  <p>{course.courseName}</p>
                  <p>
                    <i className="bi bi-person-fill"></i> {resit.instructors || `Unknown Instructor`}
                  </p>
                </div>
                <div className={`grade-box ${course.gradeLetter}`}>{course.gradeLetter}</div>
              </div>
              <p className="resit-status">
                Resit Exam status:{" "}
                <strong className={course.gradeLetter}>
                  {resit ? resit.status || "Mandatory" : "No Resit"}
                </strong>
                <a href="#" className="exam-details">Show exam details</a>
              </p>
              <div className="card-actions">
                <button className="btn dark">Confirm Attendance</button>
                <button className="icon-button">
                  <i className="bi bi-trash-fill"></i>
                </button>
              </div>
            </div>

          );
        })}
      </div>
    </div>
    </>
  )
}
  // const DeleteFunc=()=>{
  //   selectedIds.forEach((id) => {
  //     console.log(id)
  //     if (id) { 
  //       axios.delete(`http://localhost:3000/course/${id}`, {
  //         data: {
  //           secretaryId: 'sec-001'
  //         }
  //       })
  //       .then(() => {
  //         GetFunc(); // Refresh the data after deletion
  //       })
  //       .catch(error => {
  //         console.error(`Error deleting data for id ${id}:`, error);
  //       });
  //     } else {
  //       console.error('Invalid id detected:', id);
  //     }
  //   });
  //   setSelectedIds([]);
  // }

  // const FuncPost=()=>{
  //   axios.post('http://localhost:3000/course', {
  //     courseId :CourseCode,
  //     name: CourseName,
  //     resitExamId: CourseCode,
  //     department: Department,
  //     instructor: Instructor,
  //     secretaryId: "sec-001",
  //   })
  //   .then(response => {
  //     console.log(response.data);
  //   })
  //   .catch(error => {
  //     console.error('Error fetching data:', error);
  //   });
  // }
  // const GetResitIdFunc=()=>{
  //   axios.get('http://localhost:3000/secretary/resit-exams')
  //   .then(response => {
  //     // console.log(response.data)
  //     setResitExamIdList(response.data);
  //   })
  //   .catch(error => {
  //     console.error('Error fetching data:', error);
  //   }) ;
  // }

        {/* <div className="course-card">
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
        </div> */}
           {/* "id": "resit-001",
      "courseId": "course-101",
      "name": "Resit Exam 1",
      "department": "Software Engineering",
      "instructors": [
        "inst-001"
      ],
      "lettersAllowed": [
        "CD",
        "DD",
        "FF",
        "FD"
      ],
      "examDate": "2025-05-24T13:48:49.176Z",
      "deadline": "2025-05-22T13:48:49.176Z",
      "location": "Altenizde Main Kampus A Blcok A Nirmen Tahran",
      "createdAt": "2025-05-17T13:48:49.176Z",
      "createdBy": "sec-001",
      "updatedAt": null */}

            // useEffect(() => {
      //   axios.put('http://localhost:3000/course/course-101',{
      //     name:'Introduction to Software Engineering',
      //     instructor:'inst-001',
      //     department:'software engineering',
      //     resitExamId: 'resit-001',
      //     secretaryId: 'sec-001',
      //   }).then(response => {
      //     console.log(response.data)
      //   })
      //   .catch(error => {
      //     console.error('Error fetching data:', error);
      //   }) ;

      //         axios.get('http://localhost:3000/secretary/courses')
      // .then(response => {
      //   console.log(response.data)


      // })
      // .catch(error => {
      //   console.error('Error fetching data:', error);
      // }) ;
      // }, []);
