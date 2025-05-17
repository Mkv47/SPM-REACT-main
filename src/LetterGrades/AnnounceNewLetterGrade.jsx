import React from 'react'
import RowOfTable from './RowOfTable'
import { useState } from 'react'
const Items = [
    { CourseId: '1',Name:'mohamed', CourseCode: 'Item 1',Grade:'54',Letter:'GG', },
    { CourseId: '2',Name:'ahmed', CourseCode: 'Item 2',Grade:'25',Letter:'GG', },
    { CourseId: '3', Name:'omer',CourseCode: 'Item 3',Grade:'78',Letter:'GG',},
  ]
function AnnounceNewLetterGrade() {
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

export default AnnounceNewLetterGrade