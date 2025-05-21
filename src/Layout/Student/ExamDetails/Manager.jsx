import React, { useState } from 'react';
import down from '../../Z/down.svg'
import up from '../../Z/down.svg'
import '../style.css';
import { useEffect } from 'react';
import { GetResitExamList, GetCourseDetails,GetexamData } from './FunctionsOfExamDetails';

const examData = [
  {
    id: 1,
    course: 'MATH302 | Numerical Analysis',
    professor: 'Prof. Dr. BURHAN PEKTAŞ',
    status: 'Optional',
    confirmed: 'Confirmed',
    date: '9.04.2025',
    time: '11:00',
    rooms: ['A-Nermin Tarhan', 'A-Kuleli', 'D-Ayhan Songar']
  },
  {
    id: 2,
    course: 'MATH302 | Numerical Analysis',
    professor: 'Prof. Dr. BURHAN PEKTAŞ',
    status: 'Optional',
    confirmed: 'Confirmed',
    date: '9.04.2025',
    time: '11:00',
    rooms: ['A-Nermin Tarhan', 'A-Kuleli', 'D-Ayhan Songar']
  },
  {
    id: 3,
    course: 'MATH302 | Numerical Analysis',
    professor: 'Prof. Dr. BURHAN PEKTAŞ',
    status: 'Optional',
    confirmed: 'Confirmed',
    date: '9.04.2025',
    time: '11:00',
    rooms: ['A-Nermin Tarhan', 'A-Kuleli', 'D-Ayhan Songar']
  },
  {
    id: 4,
    course: 'MATH302 | Numerical Analysis',
    professor: 'Prof. Dr. BURHAN PEKTAŞ',
    status: 'Optional',
    confirmed: 'Confirmed',
    date: '9.04.2025',
    time: '11:00',
    rooms: ['A-Nermin Tarhan', 'A-Kuleli', 'D-Ayhan Songar']
  },
  {
    id: 5,
    course: 'MATH302 | Numerical Analysis',
    professor: 'Prof. Dr. BURHAN PEKTAŞ',
    status: 'Optional',
    confirmed: 'Confirmed',
    date: '9.04.2025',
    time: '11:00',
    rooms: ['A-Nermin Tarhan', 'A-Kuleli', 'D-Ayhan Songar']
  }
];
 


const ExamList = () => {
  const [examDatag, setExamDatag] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await GetexamData('20209958');
      setExamDatag(data);
    }
    fetchData();
  }, []);
  
  console.log(examDatag)
  const [hiddenItems, setHiddenItems] = useState(() => {
    const initial = {};
    examData.forEach(exam => {
      initial[exam.id] = true; // all hidden by default
    });
    return initial;
  });

  const toggleHidden = (id) => {
    setHiddenItems(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div>
      {examData.map((exam) => (
        <div key={exam.id} className="dropdown">
          <div className="dropdown-header">
            <div>
              <h3>{exam.course}</h3>
              <p><strong>👤</strong> {exam.professor}</p>
            </div>
            <div>
              <img
                onClick={() => toggleHidden(exam.id)}
                className={`toggle-button ${hiddenItems[exam.id] === false ? 'flipped' : ''}`}
                src={down}
                alt="toggle icon"
              />
            </div>
          </div>
          <div hidden={hiddenItems[exam.id]}>
            <div className="middle-elements">
              <span>
                Resit Exam Attendance Status: <span className="highlight">{exam.status}</span>
              </span>
              <span>
                Exam Confirmation Status: <span className="confirmed">{exam.confirmed}</span>
              </span>
              <button className="cancel-attendence">Cancel Attendence</button>
            </div>
            <p>Date: {exam.date} &nbsp;&nbsp; Time: {exam.time}</p>
            <p>Classrooms: {exam.rooms.join(', ')}</p>
               {/* <p>Classrooms: {exam.rooms}</p> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExamList;