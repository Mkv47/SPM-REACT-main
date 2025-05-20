import React from 'react'
import CoursesRow from './CoursesRow'
import SearchBar from '../../../Btns/SearchBar'
import { useState ,useEffect} from 'react'
import axios from 'axios';
import { GetCourses, GetResitExamList, Deletecourse, PostCourse,splitDateTime   } from './Functions';
function UnannouncedCourses() {
    const [Addmanualyopener, setAddmanualyopener] = useState(false);
      //the list is result of the search bar meaning that this list is the filtered list
     const [onSearchResult, setOnSearchResult] = useState('');
     // State to hold the list of resit exams
    const [resitExamList, setResitExamList] = useState([]);
    // State to hold the list of courses
    const [coursesListData, setCoursesListData] = useState([]); 


    //get all courses at the beginning of the page,it get the resit exam list and the courses list
        useEffect(() => {
       const fetchData = async () => {
        const resits = await GetResitExamList();
        const courses = await GetCourses();
  
        setResitExamList(resits);
            // filter the courses list by chossing the empthy resit exam
        const filteredCourses =   courses.filter((course) => {
        const resitExam = resits.find((resit) => resit.id === course.resitExamId);
        return resitExam && (resitExam.examDate === null || resitExam.examDate === 'N/A');
      });
        setCoursesListData(filteredCourses);
      };
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
      console.log(onSearchResult)
      console.log(coursesListData)

  return (
    <div class="theList theListofcourses right">
    <nav class="ControlOfTheList">     
    <button class="btn btn-danger rounded-2">
    <i class="bi bi-trash-fill me-2"></i>
    Button
    </button>
    <button class="btn btn-secondary rounded-2">
    <i class="bi bi-filter"></i>
    Button
    </button>
    <button style={{backgroundColor:'#090029'}} className="btn btn-secondary rounded-1">
        <i class="bi bi-upload"></i>
          Upload file
        </button>
        <button onClick={()=>setAddmanualyopener(true)} style={{backgroundColor:'#2b1e1b'}} className="btn btn-secondary rounded-1">
        <i class="bi bi-pencil-square"></i>
          Add Manulay
        </button>
        <SearchBar List={coursesListData} setOnSearchResult={setOnSearchResult} />

    <button class="btn btn-secondary rounded-2">
    <i class="bi bi-pencil-square"></i>

    Button
    </button>
                
    </nav>

    <div class="Thetable Thetableofcourses" id="Thetable">
            {(Array.isArray(onSearchResult) && onSearchResult.length > 0 ? onSearchResult : coursesListData).map((item) => {
               // Find the corresponding resit exam object 
                   const resitExamobj = resitExamList.find(resit => resit.id === item.resitExamId);
                   const examDate = resitExamobj?.examDate || 'N/A';
                    const { date, time } = examDate !== 'N/A' ? splitDateTime(examDate) : { date: 'N/A', time: 'N/A' };
                    const  room= resitExamobj?.location || 'N/A';
                    const  DateModified= resitExamobj?.updatedAt || 'N/A';
               return (
                 <CoursesRow
                   key={item.id}
                   CourseId={item.id}
                   courseName={item.name}
                   courseInstructor={item.instructor}
                   courseRoom={room || 'N/A'} // Assuming room is optional
                   courseDate={date || 'N/A'} // Assuming date is optional
                   courseTime={time || 'N/A'} // Assuming time is optional
                   dateModified={DateModified|| 'N/A'} // Assuming dateModified is optional
                   handleCheckboxChange={handleCheckboxChange}
                   selectedIds={selectedIds}
                 />
               );
             })}    
    </div>
    {/* <form className={`AddManulay ${Addmanualyopener ? 'isgrid' : 'isnone'}`} id="AddManulay" method="post" action="">
        <h6> Add an new item</h6>
        <label htmlFor="CourseCode">Course Code</label>
        <input type='text' value={CourseCode} onChange={(e)=>setCourseCode(e.target.value)} id='CourseCode' name='CourseCode' />
        <label htmlFor="CourseName">Course Name</label>
        <input type='text' value={CourseName} onChange={(e)=>setCourseName(e.target.value)} id='CourseName' name='CourseName' />
        <label htmlFor="Lecture">Lecture</label>
        <input type='text' value={Instructor} onChange={(e)=>setInstructor(e.target.value)} id='Lecture' name='Lecture' />
        <label htmlFor="Date">Date</label>
        <input type='text'  id='Date' name='Date' />
        <label htmlFor="Time">Time</label>
        <input type='text'  id='Time' name='Time' />
        <label htmlFor="ClassRoom">Class Room</label>
        <input type='text'  id='ClassRoom' name='ClassRoom' />
        <label htmlFor="Department">Department</label>
        <input type='text' value={Department} onChange={(e)=>setDepartment(e.target.value)} id='Department' name='Department' />
        <button type='button' onClick={()=>setAddmanualyopener(false)}>Cancel</button> 
        <button>Next </button>
         <button style={{gridColumn:' span 4',backgroundColor:'green',width:'100%'}} onClick={(e)=>{e.preventDefault() ;FuncPost();setAddmanualyopener(false)}} type='submit'>save </button>
      </form> */}
  </div>
  )
}

export default UnannouncedCourses