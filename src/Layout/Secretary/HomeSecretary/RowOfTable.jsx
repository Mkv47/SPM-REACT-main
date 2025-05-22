import React from 'react'
import './Home.css'
function RowOfTable(props) {
  return (
                    <div className="element">
                  <div>
                    <input type="checkbox" value={props.CourseId} onChange={props.handleCheckboxChange} checked={props.selectedIds.includes(props.CourseId)}/>
                    <strong>{props.CourseId}</strong>
                    <strong>{props.courseName}</strong>
                  </div>
                  <div>
                    <strong>{props.courseInstructor}</strong>
                  </div>
                  <div>
                    <strong>{props.Date}</strong>
                    <strong>{props.Time}</strong>
                    <strong>{props.courseRoom}</strong>
                  </div>

                </div>

  //   <div className="rowoftable" key={props.CourseId} id="rowoftable">
  //   <div className="cheakboxclass">

  //     <input type="checkbox" value={props.CourseId} onChange={props.handleCheckboxChange} checked={props.selectedIds.includes(props.CourseId)} />
  //     <p>{props.courseCode}</p>
  //   </div>
  //   <p className="courseName">{props.courseName}</p>
  //   <p className="courseInstructor">{props.courseInstructor}</p>
  //   <time dateTime={props.ExamDate.date}>{props.ExamDate.date}</time>
  //   <time dateTime={props.ExamDate.time}>{props.ExamDate.time}</time>
  //   <p className="ClassRooms">{props.courseRoom}</p>
  // </div>
  )
}

export default RowOfTable