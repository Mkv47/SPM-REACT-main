import React from 'react'
import RowOfTable from './RowOfTable'
import { Link } from 'react-router-dom';
import InfoCard from './InfoCard' 
import { useState,useEffect } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Logo from '../../Z/22405fa43d89aeb0ddf96d741a2776df38abbdfe.png'
import LogoOut from '../../Z/image.png'
import pPic from '../../Z/149935571.jpg';
import '../../Z/Sidenav.css'
import SearchBar from '../../../Btns/SearchBar';
import './Home.css'
import axios from 'axios';
import { exportToExcel, exportToPDF } from './exportUtils';


export default function Home() {
  const [selectedIds, setSelectedIds] = useState([]);
  const [coursesListData, setCoursesListData] = useState([]);
  const [Addmanualyopener, setAddmanualyopener] = useState(false);
  const [resitExamIdList, setResitExamIdList] = useState([]);
  const [CourseCode, setCourseCode] = useState('');
  const [CourseName, setCourseName] = useState('');
  const [Department, setDepartment] = useState('');
  const [Instructor, setInstructor] = useState('');
  const [ClassRoom, setClassRoom] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
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
    if (!isoString) {
      return { date: 'N/A', time: 'N/A' }; }     
    const [date, timeWithZ] = isoString.split('T');
    const time = timeWithZ.replace('Z', '');
    return { date, time };
  }

  const DeleteFunc=()=>{
    console.log('Selected IDs:', selectedIds);

    selectedIds.forEach((id) => {
      console.log(id)
      if (id) { 
        axios.delete(`http://localhost:3000/course/${id}`, {
          data: {
            secretaryId: 'sec-001'
          }
        })
        .then(() => {
          GetFunc();
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
    let resitId=`resit-${CourseCode}`
    axios.post('http://localhost:3000/course', {
      courseId :CourseCode,
      name: CourseName,
      resitExamId: resitId,
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
      // let secretaryId = "sec-001";
      // axios.post(`http://localhost:3000/secretary/resit-exams`, {
      //   id: secretaryId,
      //   resitExamId: resitId,
      //   examDate: `${date}T${time}:00Z`, // Adjust the format as needed
      //   courseId: CourseCode,
      //   deadline: 'N/A',
      //   location: ClassRoom,
      // })
      // .then(response => {
      //   console.log(response.data);
      // })
      // .catch(error => {
      //   console.error('Error fetching data:', error);
      // });
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

        <div className="InfoCardsContiner">
          <InfoCard link="/courses/AnnouncedCourses" title="unannounsed Courses" number="1"/>
          <InfoCard link="/courses" title="All courses" number="23"/>
          <InfoCard link="/courses/UnannouncedCourses" title="All Depertment" number="15"/>
        </div>
        <section className="theList">
          <nav className="ControlOfTheList">
            <div>
              <button className="btn btn-secondary rounded-1" onClick={exportToPDF}>
                <i className="bi bi-filetype-pdf"></i>
                Export as Pdf
              </button>
              <button className="btn btn-secondary rounded-1" onClick={exportToExcel}>
                <i className="bi bi-filetype-xlsx"></i>
                Export as Exel
              </button>
            </div>
            
            <div>
              <button onClick={()=>DeleteFunc()} className="btn btn-danger rounded-1">
                <i className="bi bi-trash-fill me-2"></i>
                Delete
              </button>
              <button  className="btn btn-secondary rounded-1">
                <i className="bi bi-filter"></i>
                Filter
              </button>
              <SearchBar List={coursesListData} setOnSearchResult={setOnSearchResult}/>

              <button className="btn btn-secondary rounded-1">
              <i className="bi bi-upload"></i>
                Upload file
              </button>
              <button type='button'  onClick={()=>setAddmanualyopener(true)} className="btn btn-secondary rounded-1">
              <i className="bi bi-pencil-square"></i>
                Add Manulay
              </button>
            </div>
          </nav>

          <div className="tableofsecartary Thetable " id="Thetable">
                <div className="element">
                  <div>
                    <input type="checkbox" />
                    <strong>SE408</strong>
                    <strong>Software Project Management</strong>
                  </div>
                  <div>
                    <strong>Kristein</strong>
                  </div>
                  <div>
                    <strong>2025-05-22</strong>
                    <strong>11:40</strong>
                    <strong>A308</strong>
                  </div>
                </div>
            <div className="inner-List">
          {(Array.isArray(onSearchResult) && onSearchResult.length > 0 ? onSearchResult : coursesListData).map((item) => {
                  const resitExamobj = resitExamIdList.find(resit => resit.id === item.resitExamId);
                  const {Date,Time}= item.examDate !== 'N/A' ? splitDateTime(item.examDate) : { date: 'N/A', time: 'N/A' };
                  const room = resitExamobj?.location || 'N/A';
                  const DateModified = resitExamobj?.updatedAt || 'N/A';
                  console.log(item)
                  return (
                    <RowOfTable
                      key={`${item.id}`}
                      CourseId={item.id}
                      courseName={item.name}
                      courseInstructor={item.instructor}
                      courseRoom={room || 'N/A'} // Assuming room is optional
                      courseDate={Date || 'N/A'} // Assuming date is optional
                      courseTime={Time || 'N/A'} // Assuming time is optional
                      dateModified={DateModified || 'N/A'} // Assuming dateModified is optional
                      selectedIds={selectedIds}
                      handleCheckboxChange={handleCheckboxChange}
                    />
                );
              // 
              })}
            </div>
          </div>

      <form className={`AddManulay ${Addmanualyopener ? 'isgrid' : 'isnone'}`} id="AddManulay" method="post" action="">
        <h6> Add an new item</h6>
        <label htmlFor="CourseCode">Course Code</label>
        <input type='text' value={CourseCode} onChange={(e)=>setCourseCode(e.target.value)} id='CourseCode' name='CourseCode' />
        <label htmlFor="CourseName">Course Name</label>
        <input type='text' value={CourseName} onChange={(e)=>setCourseName(e.target.value)} id='CourseName' name='CourseName' />
        <label htmlFor="Lecture">Lecture</label>
        <input type='text' value={Instructor} onChange={(e)=>setInstructor(e.target.value)} id='Lecture' name='Lecture' />
        <label htmlFor="Date">Date</label>
        <input type='date'  value={date} onChange={(e)=>setDate(e.target.value)}  id='Date' name='Date' />
        <label htmlFor="Time">Time</label>
        <input type='time' value={time} onChange={(e)=>setTime(e.target.value)}  id='Time' name='Time' />
        <label htmlFor="ClassRoom">Class Room</label>
        <input type='text'  value={ClassRoom} onChange={(e)=>setClassRoom(e.target.value)}   id='ClassRoom' name='ClassRoom' />
        <label htmlFor="Department">Department</label>
        <input type='text' value={Department} onChange={(e)=>setDepartment(e.target.value)} id='Department' name='Department' />
        <button type='button' onClick={()=>setAddmanualyopener(false)}>Cancel</button> 
        <button>Next </button>
         <button style={{gridColumn:' span 4',backgroundColor:'green',width:'100%'}} onClick={(e)=>{e.preventDefault() ;FuncPost();setAddmanualyopener(false)}} type='submit'>save </button>
      </form>
        </section>
      </div>
    </>
  ) 
} 
