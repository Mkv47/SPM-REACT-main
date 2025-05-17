import React from 'react'
import '../Layout/Secretary/HomeSecretary/Home.css'
import './RowOfTable.css'
function RowOfTable(props) {
  return (
    

    <div className="rowoftable" key={props.CourseId} id="rowoftable">
      <div className="cheakboxclass">

        <input type="checkbox" value={props.CourseId} onChange={props.handleCheckboxChange} checked={props.selectedIds.includes(props.CourseId)} />
        <p>{props.courseCode}</p>
      </div>
      <p className="courseName">{props.Name}</p>
      <p className="courseInstructor">Course</p>
      <p className="courseInstructor">{props.Grade}</p>
      <p className="ClassRooms">{props.Letter}</p>
      <i  class="bi bi-trash3-fill"></i>
      <i  className="bi bi-pencil-square"></i>
  </div>
  )
}

export default RowOfTable