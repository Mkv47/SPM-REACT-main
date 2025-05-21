import React from 'react'
import RowOfTable from './RowOfTable'
import { useState } from 'react'
const Items = [

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