import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../Layout/Secretary/Courses/Courses.css'
import '../LetterGrades/LetterGrades.jsx'
function Box(props) {


  return (
    <NavLink  to={props.link} className='Box'>
        <p>{props.text}</p>
    </NavLink>
  )
}

export default Box