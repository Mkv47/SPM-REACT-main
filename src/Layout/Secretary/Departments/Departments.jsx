import React from 'react'
import HeadOfDepartments from './HeadOfDepartments'
import Faculty from './Faculty'

function Departments() {
  return (
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
  )
}

export default Departments