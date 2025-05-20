import React from 'react'
import axios from 'axios';
import { useState } from 'react'
import {PostCourse}from './Functions';
function AddManulayForm(props) {
        const [CourseCode, setCourseCode] = useState('');
        const [CourseName, setCourseName] = useState('');
        const [Department, setDepartment] = useState('');
        const [Instructor, setInstructor] = useState('');
        
    // const FuncPost=()=>{
    //   let resitId = `resit-${CourseCode}`;
    //   let secretaryId = 'sec-001';
    //   axios.post(`http://localhost:3000/secretary/resit-exams`, {
    //     id: secretaryId,
    //     resitExamId: resitId,
    //     examDate: '', // Adjust the format as needed
    //     courseId: CourseCode,
    //     deadline: '',
    //     location: '',
    //   })
    //   .then(response => {
    //     console.log(response.data);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching data:', error);
    //   }
    //   );
    //   //'resit-431'
    //   axios.post('http://localhost:3000/course', {
    //     courseId :CourseCode,
    //     name: CourseName,
    //     resitExamId: resitId,
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
  return (
    <form className={`AddManulay ${props.Addmanualyopener ? 'isgrid' : 'isnone'}`} id="AddManulay" method="post" action="">
          <h6> Add an new item</h6>
          <label htmlFor="CourseCode">Course Code</label>
          <input type='text' value={CourseCode} onChange={(e)=>setCourseCode(e.target.value)} id='CourseCode' name='CourseCode' />
          <label htmlFor="CourseName">Course Name</label>
          <input type='text' value={CourseName} onChange={(e)=>setCourseName(e.target.value)} id='CourseName' name='CourseName' />
          <label htmlFor="Lecture">Lecture</label>
          <input type='text' value={Instructor} onChange={(e)=>setInstructor(e.target.value)} id='Lecture' name='Lecture' />
          <label htmlFor="Department">Department</label>
          <input type='text' value={Department} onChange={(e)=>setDepartment(e.target.value)} id='Department' name='Department' />
          <button type='button' onClick={()=>props.setAddmanualyopener(false)}>Cancel</button> 
          <button>Next </button>
          <button style={{gridColumn:' span 4',backgroundColor:'green',width:'100%'}} onClick={(e)=>{e.preventDefault();PostCourse(CourseCode,CourseName,Department,Instructor);props.setAddmanualyopener(false)}} type='submit'>save </button>
        </form>
  )
}

export default AddManulayForm