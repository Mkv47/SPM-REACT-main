import React from 'react'
import RowOfTable from './RowOfTable'
import { useState } from 'react'
const Items = [
    { CourseId: '1',Name:'mohamed', CourseCode: 'Item 1',Grade:'23',Letter:'GG', },
    { CourseId: '2',Name:'amr', CourseCode: 'Item 2',Grade:'75',Letter:'ER', },
    { CourseId: '3', Name:'salim',CourseCode: 'Item 3',Grade:'35',Letter:'FF',},
  ]
function AnnounceLetterGrade() {
         const [selectedIds, setSelectedIds] = useState([]);
    
        const handleCheckboxChange = (event) => {
          const id = event.target.value;
          if (event.target.checked) {
            // Add id
            setSelectedIds((prev) => [...prev, id]);
          } else {
            // Remove id
            setSelectedIds((prev) => prev.filter((item) => item !== id));
          }
    
        };
  return (
    <div className="Thetable" id="Thetable">

            <div className="rowoftable"  id="rowoftable">
                <div className="cheakboxclass">
                    <input type="checkbox"  />
                    <p>courseCode</p>
                </div>
                <p className="courseName">Name</p>
                <p className="courseInstructor">Grade</p>
                <p className="ClassRooms">Letter</p>
            </div>
            
        {Items.map((item) => (
          <RowOfTable
            key={`${item.CourseId}-${item.Name}`}
            CourseId={item.CourseId}
            Name={item.Name}
            CourseCode={item.CourseCode} // Adjust if 'courseCode' is meant to be something else
            Grade={item.Grade}
            Letter={item.Letter}
            courseRoom={"N/A"} // Assuming no room is given; replace as needed
             selectedIds={selectedIds}
             handleCheckboxChange={handleCheckboxChange}
          />
        ))}
  
        </div>
  )
}

export default AnnounceLetterGrade