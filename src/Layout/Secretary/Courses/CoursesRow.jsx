import React from 'react';
import { Deleteonecourse } from './Functions';
export default function CoursesRow({
  CourseId,
  courseName,
  courseInstructor,
  courseRoom,
  courseDate,
  courseTime,
  dateModified,
  handleCheckboxChange,
  selectedIds,
 renderafterdelete,
 opener,
 setSelectedid

}) {
  
  return (<>
    <div className="rowoftable courserow" id={`rowoftable-${CourseId}`}>
      <div className="cheakboxclassName">
        <input type="checkbox" value={CourseId}  onChange={handleCheckboxChange} checked={selectedIds.includes(CourseId)} />
        <p>{CourseId}</p> {/* Display the course ID */}
      </div>
      <p className="courseName">{courseName}</p> {/* Display the course name */}
      <p className="courseInstructor">{courseInstructor}</p> {/* Display the course instructor */}
      <p className="classNameRooms">{courseRoom}</p> {/* Display the course room */}
      <time dateTime={courseDate}>{courseDate}</time> {/* Display the course date */}
      <time dateTime={courseTime}>{courseTime}</time> {/* Display the course time */}
      <time dateTime={dateModified}>{dateModified}</time> {/* Display the date modified */}
      <p>Announced</p> {/* Placeholder for announcement status */}
      <i onClick={()=>{opener(true);setSelectedid(CourseId)}} className="bi bi-pencil-square"></i> {/* Edit icon */}
      <i style={{cursor:'pointer'}} onClick={() => { Deleteonecourse(CourseId);renderafterdelete() }} className="bi bi-trash3-fill"></i> {/* Delete icon */}
    </div>
    
    
 
    
    </>
  );
}