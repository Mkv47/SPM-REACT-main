import React from 'react'
import axios from 'axios';
import { useState } from 'react'
function AnnouncmentForm(props) {
      console.log(props.course);
        const [CourseCode, setCourseCode] = useState('');
        const [CourseName, setCourseName] = useState('');
        const [Department, setDepartment] = useState('');
        const [Instructor, setInstructor] = useState('');
        const [date, setDate] = useState('');
        const [time, setTime] = useState('');
        const [ClassRoom, setClassRoom] = useState('');
        
    // const Funcput=()=>{
    //  const  resitId = `resit-${CourseCode}`;
    //   axios.put('http://localhost:3000/course', {
    //     courseId :CourseCode,
    //     name: CourseName,
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
    //     let secretaryId = "sec-001";
    //   // axios.post(`http://localhost:3000/secretary/resit-exams`, {
    //   //   id: secretaryId,
    //   //   resitExamId: resitId,
    //   //   examDate: 'N/A', // TODO: Set exam date here
    //   //   courseId: CourseCode,
    //   //   deadline: 'N/A',
    //   //   location: 'N/A',
    //   // })
    //   // .then(response => {
    //   //   console.log(response.data);
    //   // })
    //   // .catch(error => {
    //   //   console.error('Error fetching data:', error);
    //   // });
    // }
  return (
    // <form className={`AnnouncmentForm ${props.AnnouncmentForm ? 'isgrid' : 'isnone'}`} id="AnnouncmentForm" method="post" action="">
    //       <h6> Add an new item</h6>
    //       <label htmlFor="CourseCode">Course Code</label>
    //       <input type='text' value={CourseCode} onChange={(e)=>setCourseCode(e.target.value)} id='CourseCode' name='CourseCode' />
    //       <label htmlFor="CourseName">Course Name</label>
    //       <input type='text' value={CourseName} onChange={(e)=>setCourseName(e.target.value)} id='CourseName' name='CourseName' />
    //       <label htmlFor="Lecture">Lecture</label>
    //       <input type='text' value={Instructor} onChange={(e)=>setInstructor(e.target.value)} id='Lecture' name='Lecture' />
    //         <label htmlFor="Date">Date</label>
    //     <input type='date'  value={date} onChange={(e)=>setDate(e.target.value)}  id='Date' name='Date' />
    //     <label htmlFor="Time">Time</label>
    //     <input type='time' value={time} onChange={(e)=>setTime(e.target.value)}  id='Time' name='Time' />
    //     <label htmlFor="ClassRoom">Class Room</label>
    //     <input type='text'  value={ClassRoom} onChange={(e)=>setClassRoom(e.target.value)}   id='ClassRoom' name='ClassRoom' />
    //     <label htmlFor="Department">Department</label>
    //       <label htmlFor="Department">Department</label>
    //       <input type='text' value={Department} onChange={(e)=>setDepartment(e.target.value)} id='Department' name='Department' />
    //       <button type='button' onClick={()=>props.setAnnouncmentForm(false)}>Cancel</button> 
    //       <button>Next </button>
    //       <button style={{gridColumn:' span 4',backgroundColor:'green',width:'100%'}} onClick={(e)=>{e.preventDefault();;props.setAnnouncmentForm(false)}} type='submit'>save </button>
    //     </form>
    <><div></div></>
  )
}

export default AnnouncmentForm