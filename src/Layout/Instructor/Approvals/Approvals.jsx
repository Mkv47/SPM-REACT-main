import React from 'react'
import { useState,useEffect } from "react";
import './Approvals.css'
import RowOfApprovalsTable from './RowOfApprovalsTable'
import Box from '../../Secretary/Departments/Box.jsx'
import { Link } from 'react-router-dom';
import Logo from '../../Z/22405fa43d89aeb0ddf96d741a2776df38abbdfe.png';
import LogoOut from '../../Z/image.png';
import pPic from '../../Z/149935571.jpg';
import '../../Z/Sidenav.css';
import SearchBar from '../../../Btns/SearchBar';
function Approvals() {
  const [Items, setItems] = useState([
    { StudentId: '1', Name: 'Item 1', Grade:'A',Letter:'A+' },
    { StudentId: '2', Name: 'Item 2', Grade:'B',Letter:'B+' },
    { StudentId: '3', Name: 'Item 3', Grade:'C',Letter:'C+' },
  ]);
  
  return (
    <>
  
      <nav id="Sidenav" className="Sidenav sidebar">
        <div className="upperOfSideNav">
          <img src={Logo} className="iconOfScool" alt="School Icon" />
          <p>RexEdu</p>
        </div>
        <ul>
        <Link to="/Home=Instructor">
          <li>
            <i className="bi bi-grid-fill"></i>
            <p>Home</p>
          </li>
        </Link>
        <Link to="/lettergrades">
          <li>
            <i className="bi bi-grid-fill"></i>
            <p>Letter Grades</p>
          </li>
        </Link>
        <Link to="/approvals">
          <li>
            <i className="bi bi-grid-fill"></i>
            <p>Approvals</p>
          </li>
        </Link>
        <Link to="/inbox">
          <li>
            <i className="bi bi-grid-fill"></i>
            <p>Inbox</p>
          </li>
        </Link>
        </ul>
        <div className="logoutdiv">
          <Link to="/">
            <img src={LogoOut} alt="Logout Icon" />
            <p style={{ margin: 0 }}>log out</p>
          </Link>
        </div>
      </nav>

      <div class="instructor-main-content">
        <div className="top-bar-Secretary">
          <input type="Search" placeholder="Search" className="search-input" />
          <img src={pPic} alt="Profile" className="profile-pic" />
        </div>
        <section className='Approvals'>
          <div className=' ApprovalsHeader'>
              <Box link='' text='announce letter grade'/>
              <Box link='' text='announce new letter grade'/>
          </div>
            <section className='InnerApprovals'>
              <table className="Thetable" id="Thetable">
                 <tr>
                      <th>Student Id</th>
                      <th>Name</th>
                      <th>Grades</th>
                      <th>Letter</th>
                  </tr>
                  {Items.map((item) => (
                    <RowOfApprovalsTable
                    key={`${item.StudentId}-${item.Name}`}
                    StudentId={item.StudentId}
                    Name={item.Name}
                    Grade={item.Grade}
                    Letter={item.Letter}
                    />
                  ))}
              </table>
            </section>
          </section>
      </div>
    </>
  )
}

export default Approvals