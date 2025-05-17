import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Departments.css'
function Box(props) {


  return (
    <NavLink activeClassName="ActiveClass" to={props.link} className='DepartmentsBox'>
        <p>{props.text}</p>
    </NavLink>
  )
}

export default Box