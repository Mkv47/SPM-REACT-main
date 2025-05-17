import React from 'react'
import CoursesRow from './CoursesRow'
import SearchBar from '../../../Btns/SearchBar'
import { useState } from 'react'
import axios from 'axios';
function UnannouncedCourses() {
     const [Addmanualyopener, setAddmanualyopener] = useState(false);
     const [CourseCode, setCourseCode] = useState('');
     const [CourseName, setCourseName] = useState('');
      const [Department, setDepartment] = useState('');
      const [Instructor, setInstructor] = useState(''); 
      const FuncPost=()=>{
        axios.post('http://localhost:3000/course', {
          courseId :CourseCode,
          name: CourseName,
          resitExamId: 'resit-661',
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
  return (
    <div class="theList theListofcourses right">
    <nav class="ControlOfTheList">     
    <button class="btn btn-danger rounded-2">
    <i class="bi bi-trash-fill me-2"></i>
    Button
    </button>
    <button class="btn btn-secondary rounded-2">
    <i class="bi bi-filter"></i>
    Button
    </button>
    <button style={{backgroundColor:'#090029'}} className="btn btn-secondary rounded-1">
        <i class="bi bi-upload"></i>
          Upload file
        </button>
        <button onClick={()=>setAddmanualyopener(true)} style={{backgroundColor:'#2b1e1b'}} className="btn btn-secondary rounded-1">
        <i class="bi bi-pencil-square"></i>
          Add Manulay
        </button>
    <SearchBar/>

    <button class="btn btn-secondary rounded-2">
    <i class="bi bi-pencil-square"></i>

    Button
    </button>
                
    </nav>
    <div class="Thetable Thetableofcourses" id="Thetable">
        <CoursesRow/>
        <CoursesRow/>
        <CoursesRow/>
        <CoursesRow/>
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
        <input type='text'  id='Date' name='Date' />
        <label htmlFor="Time">Time</label>
        <input type='text'  id='Time' name='Time' />
        <label htmlFor="ClassRoom">Class Room</label>
        <input type='text'  id='ClassRoom' name='ClassRoom' />
        <label htmlFor="Department">Department</label>
        <input type='text' value={Department} onChange={(e)=>setDepartment(e.target.value)} id='Department' name='Department' />
        <button type='button' onClick={()=>setAddmanualyopener(false)}>Cancel</button> 
        <button>Next </button>
         <button style={{gridColumn:' span 4',backgroundColor:'green',width:'100%'}} onClick={(e)=>{e.preventDefault() ;FuncPost();setAddmanualyopener(false)}} type='submit'>save </button>
      </form>
  </div>
  )
}

export default UnannouncedCourses