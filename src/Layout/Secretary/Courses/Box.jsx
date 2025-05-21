import React from 'react'
import { NavLink } from 'react-router-dom'
import './Courses.css'

function Box(props) {
  return (
    <NavLink
      to={props.link}
      className={({ isActive }) =>
        `Box ${isActive ? 'active' : ''}`
      }
      end={props.link === '/courses'} // important for exact match
    >
      <p>{props.text}</p>
    </NavLink>
  )
}

export default Box