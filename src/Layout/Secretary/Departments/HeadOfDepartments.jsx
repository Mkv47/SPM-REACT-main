import React from 'react'
import SearchBar from '../../../Btns/SearchBar'
import Btn from '../../../Btns/Btn'
import { useState } from 'react'
import '../Departments/Departments.css'

function HeadOfDepartments() {
    const [onSearchResult, setOnSearchResult] = useState('');
    const [coursesListData, setCoursesListData] = useState([]);
  return (
    <div className='HeadOfDepartments'>
        <p>Faculty</p>
        <div className='HeadOfDepartmentsBtns'>
           <SearchBar List={coursesListData} setOnSearchResult={setOnSearchResult}/>
          <button class="btn btn-secondary rounded-2">
               <i class="bi bi-pencil"></i>
              <p> Add new department</p>
        </button>
        </div>
    </div>
  )
}

export default HeadOfDepartments