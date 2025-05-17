import React from 'react';
import '../Login/resitexam.css';
import { Link } from 'react-router-dom';

const ResitExam = () => {
  return (
    <section className='ResitExam'>
      <div className="container">
        <div className="top-container">
          <img
            src="images/283d341b4e9d62729749d98fcc1e4640.png"
            alt="Logo"
          />
          <h1>Resit Exam Entrance</h1>
        </div>
        <div className="bottom-container">
          <Link to='/student-login' className="student">
            <p>Student</p>
          </Link>
          <Link to='/instructor-login' className="instructor">
            <p>Instructor</p>
          </Link>
          <Link to='/facultysecretary-login' className="FS">
            <p>Faculty Secretary</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResitExam;
