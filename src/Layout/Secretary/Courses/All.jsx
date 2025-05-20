import React, { useState, useEffect } from 'react';
import CoursesRow from './CoursesRow';
import SearchBar from '../../../Btns/SearchBar';
import AddManulayForm from './AddManulayForm';
import axios from 'axios';

import { GetCourses ,GetResitExamList,Deletecourse,splitDateTime} from './Functions';

export default function All() {
  const [Addmanualyopener, setAddmanualyopener] = useState(false);
    //the list is result of the search bar meaning that this list is the filtered list
   const [onSearchResult, setOnSearchResult] = useState('');
   // State to hold the list of resit exams
  const [resitExamList, setResitExamList] = useState([]);
  // State to hold the list of courses
  const [coursesListData, setCoursesListData] = useState([]); 
  //get all courses at the beginning of the page,it get the resit exam list and the courses list
  const fetchData = async () => {
   const resits = await GetResitExamList();
   const courses = await GetCourses();

   setResitExamList(resits);
   setCoursesListData(courses);
 };
      useEffect(() => {
        fetchData();
      }, []);
     

   //functions to handle the deletion of selected courses
   const [selectedIds, setSelectedIds] = useState([]); // State to hold selected course IDs
   const handleCheckboxChange = (event) => {
    const id = event.target.value;
    console.log(id);
    if (event.target.checked) {
      // Add id
      setSelectedIds((prev) => [...prev, id]);
    } else {
      // Remove id
      setSelectedIds((prev) => prev.filter((item) => item !== id));
    }}



  return (
    <div className="theList theListofcourses right">
      <nav className="ControlOfTheList">
        <button onClick={() => { Deletecourse(selectedIds); fetchData(); }} className="btn btn-danger rounded-1">
          <i className="bi bi-trash-fill me-2"></i>
          delete
        </button>
        <button style={{ width: '10%' }} className="btn btn-secondary rounded-1">
          <i className="bi bi-filter"></i>
          filter
        </button>
        <SearchBar List={coursesListData} setOnSearchResult={setOnSearchResult} />

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
          </div>
          <span className="text-white">Add new course</span>
        </button>
      </nav>
      <div className="Thetable Thetableofcourses" id="Thetable">

        {(Array.isArray(onSearchResult) && onSearchResult.length > 0 ? onSearchResult : coursesListData).map((item) => {
          // Find the corresponding resit exam object 
          const resitExamobj = resitExamList.find(resit => resit.id === item.resitExamId);
          const examDate = resitExamobj?.examDate || 'N/A';
          const { date, time } = examDate !== 'N/A' ? splitDateTime(examDate) : { date: 'N/A', time: 'N/A' };
          const room = resitExamobj?.location || 'N/A';
          const DateModified = resitExamobj?.updatedAt || 'N/A';
          return (
            <CoursesRow
              key={item.id}
              CourseId={item.id}
              courseName={item.name}
              courseInstructor={item.instructor}
              courseRoom={room || 'N/A'}
              courseDate={date || 'N/A'}
              courseTime={time || 'N/A'}
              dateModified={DateModified || 'N/A'}
              handleCheckboxChange={handleCheckboxChange}
              selectedIds={selectedIds}
              renderCoursesList={fetchData}
            />
          );
        })}
      </div>
      <AddManulayForm
        Addmanualyopener={Addmanualyopener}
        setAddmanualyopener={setAddmanualyopener}
      />
    </div>
  );
}