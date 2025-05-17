import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
export default function InfoCard(props) {
  return (
    <div className="InfoCard">
    <p>{props.title}</p>
    <h3>{props.number}</h3>
    <Link to={props.link}>View details</Link>
  </div>

  )
}
