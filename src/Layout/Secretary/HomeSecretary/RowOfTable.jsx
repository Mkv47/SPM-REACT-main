import React from 'react'
import './Home.css'
function RowOfTable(props) {
  return (
    

    <div className="rowoftable" key={props.CourseId} id="rowoftable">
    <div className="cheakboxclass">

      <input type="checkbox" value={props.CourseId} onChange={props.handleCheckboxChange} checked={props.selectedIds.includes(props.CourseId)} />
      <p>{props.courseCode}</p>
    </div>
    <p className="courseName">{props.courseName}</p>
    <p className="courseInstructor">{props.courseInstructor}</p>
    <time dateTime={props.ExamDate.date}>{props.ExamDate.date}</time>
    <time dateTime={props.ExamDate.time}>{props.ExamDate.time}</time>
    <p className="ClassRooms">{props.courseRoom}</p>
  </div>
  )
}

export default RowOfTable