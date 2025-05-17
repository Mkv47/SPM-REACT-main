import React from 'react'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Box from './Box'
import './LetterGrades.css'
import '../LetterGrades/LetterGrades.css'
const Items = [
    { CourseId: '1',Name:'mohamed', CourseCode: 'Item 1',Grade:'54',Letter:'GG', },
    { CourseId: '2',Name:'ahmed', CourseCode: 'Item 2',Grade:'25',Letter:'GG', },
    { CourseId: '3', Name:'omer',CourseCode: 'Item 3',Grade:'78',Letter:'GG',},
  ]
export default function LetterGrades() {

  return (
    <section className='LetterGrades'>
      <div className='BtnContainer'>
        <Box link='./' text='announce letter grade'/>
        <Box link='./announcenewlettergrade' text='announce new letter grade'/>
      </div>
        <section className='InnerLetterGrades'>
        <div className='BtnContainer'>
          <button></button>
          <button></button>
        </div>
        <Outlet/>
        </section>
    </section>
    )
}
