import React from 'react'
import  { useState } from 'react';

function Lesson(props) { 
    
    const [isOpen, setIsOpen] = useState(false);
    const hasDetails = props.Lesson.date && props.Lesson.time && props.Lesson.classrooms.length > 0;
  return (
    <div className='LessonCard' >
    <div className='LessonHeader'>
      <h2>{props.Lesson.code} | {props.Lesson.name}</h2>
      {hasDetails && (
        <button
          aria-label="Toggle details"
          onClick={() => setIsOpen(!isOpen)}
          className='LessonToggleBtn'
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
         
        >
          ▼
        </button>
      )}
    </div>

    {isOpen && hasDetails && (
      <div className='LessonBody'>
        <p><strong>Date:</strong> {props.Lesson.date} &nbsp; <strong>Time:</strong> {props.Lesson.time}</p>
        <div style={{display:'flex',justifyContent:'space-around'}}>
        <p><strong>Classrooms:</strong> {props.Lesson.classrooms.join(', ')}</p>
        <button className='LessonAnnounceBtn' >📢 Announce Exam Details</button>
        </div>
      </div>
    )}
  </div>
  )
}

export default Lesson;






