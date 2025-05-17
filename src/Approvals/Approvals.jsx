import React from 'react'
import './Approvals.css'
import RowOfApprovalsTable from './RowOfApprovalsTable'
import Box from '../Layout/Secretary/Departments/Box.jsx'
import { useState,useEffect } from "react";
function Approvals() {
  const [Items, setItems] = useState([
    { StudentId: '1', Name: 'Item 1', Grade:'A',Letter:'A+' },
    { StudentId: '2', Name: 'Item 2', Grade:'B',Letter:'B+' },
    { StudentId: '3', Name: 'Item 3', Grade:'C',Letter:'C+' },
  ]);
  
  return (
    <section className='Approvals'>
    <div className=' ApprovalsHeader'>
        <Box link='' text='announce letter grade'/>
        <Box link='' text='announce new letter grade'/>
    </div>
      <section className='InnerApprovals'>
        <table className="Thetable" id="Thetable">
           <tr>
                <th>Student Id</th>
                <th>Name</th>
                <th>Grades</th>
                <th>Letter</th>
            </tr>
    {Items.map((item) => (
      <RowOfApprovalsTable
        key={`${item.StudentId}-${item.Name}`}
        StudentId={item.StudentId}
        Name={item.Name}
        Grade={item.Grade}
        Letter={item.Letter}
      />
    ))}

    </table>
      </section>
</section>
  )
}

export default Approvals