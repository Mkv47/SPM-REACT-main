import React from 'react';
import { Deleteonecourse } from './Functions'; // Import the function to delete a course
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
  renderCoursesList,
}) {
  
  return (
    <div className="rowoftable" id={`rowoftable-${CourseId}`}>
      <div className="cheakboxclassName">
        <input type="checkbox" value={CourseId}  onChange={handleCheckboxChange} checked={selectedIds.includes(CourseId)}/>
        <p>{CourseId}</p> {/* Display the course ID */}
      </div>
      <p className="courseName">{courseName}</p> {/* Display the course name */}
      <p className="courseInstructor">{courseInstructor}</p> {/* Display the course instructor */}
      <p className="classNameRooms">{courseRoom}</p> {/* Display the course room */}
      <time dateTime={courseDate}>{courseDate}</time> {/* Display the course date */}
      <time dateTime={courseTime}>{courseTime}</time> {/* Display the course time */}
      <time dateTime={dateModified}>{dateModified}</time> {/* Display the date modified */}
      <p>Announced</p> {/* Placeholder for announcement status */}
      <i  className="bi bi-pencil-square"></i> {/* Edit icon */}
      <i onClick={() => { Deleteonecourse(CourseId); }} className="bi bi-trash3-fill"></i> {/* Delete icon */}
    </div>
  );
}