import React from 'react'
import { Link } from 'react-router-dom';
import HeadOfDepartments from './HeadOfDepartments'
import Faculty from './Faculty'
import Logo from '../../Z/22405fa43d89aeb0ddf96d741a2776df38abbdfe.png';
import LogoOut from '../../Z/image.png';
import pPic from '../../Z/149935571.jpg';

function Departments() {
  return (
    <>
      <nav id="Sidenav" className="Sidenav sidebar">
        <div className="upperOfSideNav">
          <img src={Logo} className="iconOfScool" alt="School Icon" />
          <p>RexEdu</p>
        </div>
        <ul>
        <Link to="/Home=Secretary">
          <li>
            <i className="bi bi-grid-fill"></i>
            <p>Home</p>
          </li>
        </Link>
        <Link to="/courses">
          <li>
            <i className="bi bi-grid-fill"></i>
            <p>Courses</p>
          </li>
        </Link>
        <Link to="/departments">
          <li>
            <i className="bi bi-grid-fill"></i>
            <p>Departments</p>
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

      <div class="main-container">
        <div className="top-bar-Secretary">
          <select type="" defaultValue="Faculty of Engineering and Natrual Sciences" placeholder="Search" className="search-input">
            <option>Faculty of Dentistry</option>
            <option>Faculty of Communication</option>
            <option>Faculty of Humanities and Social Sciences</option>
            <option >Faculty of Engineering and Natrual Sciences</option>
            <option>Faculty of Health and Sciences</option>
            <option>Faculty of Medicine</option>
          </select>
          <img src={pPic} alt="Profile" className="profile-pic" />
        </div>

        <section className='Departments'>
          <HeadOfDepartments/>
            <div className='BodyOfDepartments'>
                <Faculty/>
                <div className='TheListOfFaculty'>
                  <div className='FacultyRow' >
                      <div className="cheakboxclassName">
                        <input type="checkbox" value="thevalue" />
                        <p> course code</p>
                        </div>
                      <div className='icons'>
                      <i className="bi bi-clipboard-check"></i>
                      <i className="bi bi-clipboard-check"></i>
                      </div>
                  </div>
                </div>
            </div>
        </section>
      </div>
    </>
  )
}

export default Departments