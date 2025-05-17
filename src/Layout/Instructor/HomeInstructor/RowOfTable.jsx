import React from 'react'
import '../Home/Home.css'
function RowOfTable(props) {
  return (
    <div className="rowoftable" id="rowoftable">
    <div className="cheakboxclass">
      <input type="checkbox" value="thevalue" />
      <p>course code</p>
    </div>
    <p className="courseName">course name</p>
    <p className="courseInstructor">course instructor</p>
    <time dateTime="2025-04-20">April 20, 2025</time>
    <time dateTime="10:00">10:00 AM</time>
    <p className="ClassRooms">class room</p>
  </div>
  )
}

export default RowOfTable