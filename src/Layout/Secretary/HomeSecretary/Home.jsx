import React from 'react'
import RowOfTable from './RowOfTable'
import { Link } from 'react-router-dom';
import InfoCard from './InfoCard' 
import { useState,useEffect } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Logo from '../../Z/22405fa43d89aeb0ddf96d741a2776df38abbdfe.png'
import LogoOut from '../../Z/image.png'
import './Home.css'
import '../../Z/Sidenav.css'
import axios from 'axios';
import SearchBar from '../../../Btns/SearchBar';
// import { exportToExcel, exportToPDF } from './exportUtils';


export default function Home() {
  const [selectedIds, setSelectedIds] = useState([]);
  const [coursesListData, setCoursesListData] = useState([]);
  const [Addmanualyopener, setAddmanualyopener] = useState(false);
  const [resitExamIdList, setResitExamIdList] = useState([]);
  const [CourseCode, setCourseCode] = useState('');
  const [CourseName, setCourseName] = useState('');
  const [Department, setDepartment] = useState('');
  const [Instructor, setInstructor] = useState('');
      const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [ClassRoom, setClassRoom] = useState('');
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
        <Link to="/Home=Secretary">
          <li>
            <i className="bi bi-grid-fill"></i>
            <p>Home</p>
          </li>
        </Link>
        <Link to="/Home=Secretary">
          <li>
            <i className="bi bi-grid-fill"></i>
            <p>Courses</p>
          </li>
        </Link>
        <Link to="/Home=Secretary">
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

      <div className="main-container">
      <div className="InfoCardsContiner">
        <InfoCard link="/courses" title="All courses" number="23"/>
        <InfoCard link="/courses/AnnouncedCourses" title="unannounsed Courses" number="1"/>
        <InfoCard link="/courses/UnannouncedCourses" title="All Depertment" number="15"/>
      </div>

    
    <section className="theList listOfHomesecertetary">
      <nav className="ControlOfTheList">
        <button className="btn btn-secondary rounded-1">
          <i className="bi bi-filetype-pdf"></i>
          Export as Pdf
        </button>
        <button className="btn btn-secondary rounded-1">
          <i className="bi bi-filetype-xlsx"></i>
          Export as Exel
        </button>
        <button onClick={()=>DeleteFunc()} className="btn btn-danger rounded-1">
          <i className="bi bi-trash-fill me-2"></i>
          Delete
        </button>
        <button style={{marginLeft:"10%"}} className="btn btn-secondary rounded-1">
          <i className="bi bi-filter"></i>
          Filter
        </button>

        <SearchBar List={coursesListData} setOnSearchResult={setOnSearchResult}/>

        <button style={{backgroundColor:'#090029'}} className="btn btn-secondary rounded-1">
        <i className="bi bi-upload"></i>
          Upload file
        </button>
        <button style={{backgroundColor:'#2b1e1b'}} type='button'  onClick={()=>setAddmanualyopener(true)} className="btn btn-secondary rounded-1">
        <i className="bi bi-pencil-square"></i>
          Add Manulay
        </button>
        </nav>

          <div className="Thetable" id="Thetable">
              {(Array.isArray(onSearchResult) && onSearchResult.length > 0 ? onSearchResult : coursesListData).map((item) => (
        <RowOfTable
          key={`${item.id}-${item.resitExamId}`}
          CourseId={item.id}
          courseName={item.name}
            courseInstructor={item.instructor}
            ExamDate={(() => {
            const examDate = resitExamIdList.find(resit => resit.id === item.resitExamId)?.examDate || 'N/A';
            if (examDate !== 'N/A') {
              const { date, time } = splitDateTime(examDate);
              return { date, time };
            }
            return { date: 'N/A', time: 'N/A' };
            })()}
            sendSplitDateTime={(dateTime) => console.log('Received split date and time:', dateTime)} // Example of sending back the result
           // Assuming resitExamIdList has a time property
          courseRoom={"N/A"} // Assuming no room is given; replace as needed
          selectedIds={selectedIds}
          handleCheckboxChange={handleCheckboxChange}
        />
      ))}

     
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


       {/* <p>
              <div>
                <input type="checkbox" />
                <strong>Course Code</strong>
                <strong>Course Name</strong>
              </div>
              <div>
                <strong>Course Instructor</strong>
              </div>
              <div>
                <strong>Date</strong>
                <strong>Time</strong>
                <strong>Classroom</strong>
              </div>
            </p>
            <div className="inner-List">
              <p className="element">
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
              </p>
              <p className="element">
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
              </p>
              <p className="element">
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
              </p>
            </div> */}