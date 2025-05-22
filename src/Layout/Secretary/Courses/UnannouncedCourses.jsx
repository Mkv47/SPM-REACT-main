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
    const [selectedid, setSelectedid] = useState([]);

       const fetchData = async () => {
        const resits = await GetResitExamList();
        const courses = await GetCourses();
  
        setResitExamList(resits);
            // filter the courses list by chossing the empthy resit exam
        const filteredCourses =   courses.filter((course) => {
        const resitExam = resits.find((resit) => {console.log(resit.id+'|||'+course.resit_exam_id);  return resit.id === course.resit_exam_id});
         console.log(resitExam);
        if (!resitExam) return false; // or false depending on your logic
        return resitExam.examDate == null || resitExam.examDate === 'N/A';
      });
      // courses.forEach(element => {
      //   console.log(element.resitExamId)
      // });
      
        setCoursesListData(filteredCourses);
      };
    //get all courses at the beginning of the page,it get the resit exam list and the courses list
        useEffect(() => {

          fetchData();
        }, []);
  
     //functions to handle the deletion of selected courses
     const [selectedIds, setSelectedIds] = useState([]); // State to hold selected course IDs
     const handleCheckboxChange = (event) => {
      const id = event.target.value;

      if (event.target.checked) {
        // Add id
        setSelectedIds((prev) => [...prev, id]);
      } else {
        // Remove id
        setSelectedIds((prev) => prev.filter((item) => item !== id));
      }}
       

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
                   opener={setAddmanualyopener}
                   renderafterdelete={fetchData}
                    setSelectedid={setSelectedid}
                 />
               );
             })}    
    </div>

  </div>
  )
}

export default UnannouncedCourses