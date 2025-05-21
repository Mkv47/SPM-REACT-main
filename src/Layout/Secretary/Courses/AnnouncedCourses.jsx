import React, { use } from 'react'
import CoursesRow from './CoursesRow'
import SearchBar from '../../../Btns/SearchBar'
import { BsPencilSquare } from 'react-icons/bs';
import { useState,useEffect } from 'react';
import axios from 'axios';
import AddManulayForm from './AddManulayForm';
export default function AnnouncedCourses() {
    const [Addmanualyopener, setAddmanualyopener] = useState(false);
      const [selectedIds, setSelectedIds] = useState([]);
      const [coursesListData, setCoursesListData] = useState([]);
       const [onSearchResult, setOnSearchResult] = useState('');

          const GetFunc=()=>{
              axios.get('http://localhost:3000/secretary/courses')
              .then(response => {
                // console.log(response.data)
                setCoursesListData(response.data);
               
              })
              .catch(error => {
                console.error('Error fetching data:', error);
              }) ;
             }
             useEffect(() => {
                GetFunc();
              }, []);
  return (
    <div className="theList theListofcourses right">
      <nav className="ControlOfTheList">
        <div className="leftInput">
          <button className="btn btn-danger rounded-1">
            <i className="bi bi-trash-fill me-2"></i>
              Button
          </button>
          <button className="btn btn-secondary rounded-1">
            <i className="bi bi-filter"></i>
            filter
          </button>
          <SearchBar List={coursesListData} onSearchResult={setOnSearchResult}/>
        </div>

        <button
          onClick={() => setAddmanualyopener(true)}
          style={{ backgroundColor: '#0b0631' }}
          className="btn btn-secondary rounded-2"
        >
          <div className="p-4 bg-indigo-950 rounded shadow-md inline-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="white"
              className="bi bi-file-earmark-text"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
              <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
            </svg>
            <span className="text-white">Add New Course</span>
          </div>
        </button>
      </nav>

      <div className="Thetable Thetableofcourses" id="Thetable">
     {(Array.isArray(onSearchResult) && onSearchResult.length > 0 ? onSearchResult : coursesListData).map((item) => (
          <CoursesRow
            key={item.id}
            CourseId={item.id}
            courseName={item.name}
            courseInstructor={item.instructor}
            courseRoom={item.room || 'N/A'} // Assuming room is optional
            courseDate={item.date || 'N/A'} // Assuming date is optional
            courseTime={item.time || 'N/A'} // Assuming time is optional
            dateModified={item.dateModified || 'N/A'} // Assuming dateModified is optional
          />
        ))}
      </div>
      <AddManulayForm
        Addmanualyopener={Addmanualyopener}
        setAddmanualyopener={setAddmanualyopener}
      />
    </div>
  );
}
