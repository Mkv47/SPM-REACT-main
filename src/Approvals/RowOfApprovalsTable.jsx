import React from 'react'

function RowOfApprovalsTable(props) {
  return (
            <tr className='RowOfApprovalsTable'>
                <td>{ props.StudentId}</td>
                <td>{  props.Name}</td>
                <td>{ props.Grade}</td>
                <td>{ props.Letter}</td>
                <td>
                    <button type='button' className='Button'>accept</button>
                </td>
                <td>
                    <button  type='button' className='Button'>cancel</button>  
                </td>
            </tr>
  )
}

export default RowOfApprovalsTable