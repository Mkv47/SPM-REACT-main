import React, { useState } from 'react';
import '../style.css';
import { useEffect } from 'react';
import { GetCourseDetails, GetResitExamList } from './Functions';
const examData = [
  {
    id: 1,
    code: 'MATH302',
    course: 'Numerical Analysis',
    professor: 'Prof. Dr. BURHAN PEKTAŞ',
    status: 'Optional',
    date: '9.04.2025',
    time: '11:00',
    rooms: ['A-Nermin Tarhan', 'A-Kuleli', 'D-Ayhan Songar'],
    grade: 'FF',
  },
  {
    id: 2,
    code: 'MATH302',
    course: 'Numerical Analysis',
    professor: 'Prof. Dr. BURHAN PEKTAŞ',
    status: 'Optional',
    date: '9.04.2025',
    time: '11:00',
    rooms: ['A-Nermin Tarhan', 'A-Kuleli', 'D-Ayhan Songar'],
    grade: 'FF',
  },
  {
    id: 3,
    code: 'MATH302',
    course: 'Numerical Analysis',
    professor: 'Prof. Dr. BURHAN PEKTAŞ',
    status: 'Optional',
    date: '9.04.2025',
    time: '11:00',
    rooms: ['A-Nermin Tarhan', 'A-Kuleli', 'D-Ayhan Songar'],
    grade: 'FF',
  },
  {
    id: 4,
    code: 'MATH302',
    course: 'Numerical Analysis',
    professor: 'Prof. Dr. BURHAN PEKTAŞ',
    status: 'Optional',
    date: '9.04.2025',
    time: '11:00',
    rooms: ['A-Nermin Tarhan', 'A-Kuleli', 'D-Ayhan Songar'],
    grade: 'FF',
  },
  {
    id: 5,
    code: 'MATH302',
    course: 'Numerical Analysis',
    professor: 'Prof. Dr. BURHAN PEKTAŞ',
    status: 'Optional',
    date: '9.04.2025',
    time: '11:00',
    rooms: ['A-Nermin Tarhan', 'A-Kuleli', 'D-Ayhan Songar'],
    grade: 'FF',
  },
  {
    id: 6,
    code: 'MATH302',
    course: 'Numerical Analysis',
    professor: 'Prof. Dr. BURHAN PEKTAŞ',
    status: 'Optional',
    date: '9.04.2025',
    time: '11:00',
    rooms: ['A-Nermin Tarhan', 'A-Kuleli', 'D-Ayhan Songar'],
    grade: 'FF',
  },
  {
    id: 7,
    code: 'MATH302',
    course: 'Numerical Analysis',
    professor: 'Prof. Dr. BURHAN PEKTAŞ',
    status: 'Optional',
    date: '9.04.2025',
    time: '11:00',
    rooms: ['A-Nermin Tarhan', 'A-Kuleli', 'D-Ayhan Songar'],
    grade: 'FF',
  },
  {
    id: 8,
    code: 'MATH302',
    course: 'Numerical Analysis',
    professor: 'Prof. Dr. BURHAN PEKTAŞ',
    status: 'Optional',
    date: '9.04.2025',
    time: '11:00',
    rooms: ['A-Nermin Tarhan', 'A-Kuleli', 'D-Ayhan Songar'],
    grade: 'FF',
  },
  {
    id: 9,
    code: 'MATH302',
    course: 'Numerical Analysis',
    professor: 'Prof. Dr. BURHAN PEKTAŞ',
    status: 'Optional',
    date: '9.04.2025',
    time: '11:00',
    rooms: ['A-Nermin Tarhan', 'A-Kuleli', 'D-Ayhan Songar'],
    grade: 'FF',
  },
  {
    id: 10,
    code: 'MATH302',
    course: 'Numerical Analysis',
    professor: 'Prof. Dr. BURHAN PEKTAŞ',
    status: 'Optional',
    date: '9.04.2025',
    time: '11:00',
    rooms: ['A-Nermin Tarhan', 'A-Kuleli', 'D-Ayhan Songar'],
    grade: 'FF',
  },
  {
    id: 11,
    code: 'MATH302',
    course: 'Numerical Analysis',
    professor: 'Prof. Dr. BURHAN PEKTAŞ',
    status: 'Optional',
    date: '9.04.2025',
    time: '11:00',
    rooms: ['A-Nermin Tarhan', 'A-Kuleli', 'D-Ayhan Songar'],
    grade: 'FF',
  },
  {
    id: 12,
    code: 'MATH302',
    course: 'Numerical Analysis',
    professor: 'Prof. Dr. BURHAN PEKTAŞ',
    status: 'Optional',
    date: '9.04.2025',
    time: '11:00',
    rooms: ['A-Nermin Tarhan', 'A-Kuleli', 'D-Ayhan Songar'],
    grade: 'FF',
  },
  {
    id: 13,
    code: 'MATH302',
    course: 'Numerical Analysis',
    professor: 'Prof. Dr. BURHAN PEKTAŞ',
    status: 'Optional',
    date: '9.04.2025',
    time: '11:00',
    rooms: ['A-Nermin Tarhan', 'A-Kuleli', 'D-Ayhan Songar'],
    grade: 'FF',
  },
  {
    id: 14,
    code: 'MATH302',
    course: 'Numerical Analysis',
    professor: 'Prof. Dr. BURHAN PEKTAŞ',
    status: 'Optional',
    date: '9.04.2025',
    time: '11:00',
    rooms: ['A-Nermin Tarhan', 'A-Kuleli', 'D-Ayhan Songar'],
    grade: 'FF',
  },
  {
    id: 15,
    code: 'MATH302',
    course: 'Numerical Analysis',
    professor: 'Prof. Dr. BURHAN PEKTAŞ',
    status: 'Optional',
    date: '9.04.2025',
    time: '11:00',
    rooms: ['A-Nermin Tarhan', 'A-Kuleli', 'D-Ayhan Songar'],
    grade: 'FF',
  },
  {
    id: 16,
    code: 'MATH302',
    course: 'Numerical Analysis',
    professor: 'Prof. Dr. BURHAN PEKTAŞ',
    status: 'Optional',
    date: '9.04.2025',
    time: '11:00',
    rooms: ['A-Nermin Tarhan', 'A-Kuleli', 'D-Ayhan Songar'],
    grade: 'FF',
  },
  {
    id: 17,
    code: 'MATH302',
    course: 'Numerical Analysis',
    professor: 'Prof. Dr. BURHAN PEKTAŞ',
    status: 'Optional',
    date: '9.04.2025',
    time: '11:00',
    rooms: ['A-Nermin Tarhan', 'A-Kuleli', 'D-Ayhan Songar'],
    grade: 'FF',
  },
  {
    id: 18,
    code: 'MATH302',
    course: 'Numerical Analysis',
    professor: 'Prof. Dr. BURHAN PEKTAŞ',
    status: 'Optional',
    date: '9.04.2025',
    time: '11:00',
    rooms: ['A-Nermin Tarhan', 'A-Kuleli', 'D-Ayhan Songar'],
    grade: 'FF',
  },
];

const HomeList = () => {
  const [expandedCards, setExpandedCards] = useState({});
    const [selectedIds, setSelectedIds] = useState([]);
  const [CoursesListData, setCoursesListData] = useState([]);
  const [Addmanualyopener, setAddmanualyopener] = useState(false);
  const [resitExamIdList, setResitExamIdList] = useState([]);

  const [onSearchResult, setOnSearchResult] = useState('');
  const handleCheckboxChange = (event) => {
    const id = event.target.value;
    console.log(id)

    if (event.target.checked) {
      // Add id
      setSelectedIds((prev) => [...prev, id]);
    } else {
      // Remove id
      setSelectedIds((prev) => prev.filter((item) => item !== id));
    }
  };
    // id: 1,
    // code: 'MATH302',
    // course: 'Numerical Analysis',
    // professor: 'Prof. Dr. BURHAN PEKTAŞ',
    // status: 'Optional',
    // date: '9.04.2025',
    // time: '11:00',
    // rooms: ['A-Nermin Tarhan', 'A-Kuleli', 'D-Ayhan Songar'],
    // grade: 'FF',
    const examlist=()=>{
      
    }



      useEffect(() => {
     const fetchData = async () => {
      let id= '1';
      const resits = await GetResitExamList(id);
      const courses = await GetCourseDetails(id);

      setResitExamIdList(resits);
      setCoursesListData(courses);
    };
        fetchData();
      }, []);



   function splitDateTime(isoString) {
    const [date, timeWithZ] = isoString.split('T');
    const time = timeWithZ.replace('Z', '');
    return { date, time };
  }

  const toggleDetails = (id) => {
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      <div className="cards-container">
        {examData.map((exam) => (
          <div key={exam.id} className="course-card">
            <div className="card-header">
              <div>
                <h3>{exam.code}</h3>
                <p>{exam.course}</p>
                <p>
                  <i className="bi bi-person-fill"></i> {exam.professor}
                </p>
              </div>
              <div className={`grade-box ${exam.grade}`}>{exam.grade}</div>
            </div>

            <p className="resit-status">
              <div>
                Resit Exam status: <strong className={exam.grade}>{exam.status}</strong>
              </div>
              <button
                onClick={() => toggleDetails(exam.id)}
                className="exam-details"
              >
                {expandedCards[exam.id] ? 'Hide exam details' : 'Show exam details'}
              </button>
            </p>

            {expandedCards[exam.id] && (
              <div className="exam-details-expanded">
                <p>
                  Date: {exam.date} &nbsp;&nbsp; Time: {exam.time}
                </p>
                <p>
                  Classrooms: <span>{exam.rooms.join(', ')}</span>
                </p>
              </div>
            )}

            <div className="card-actions">
              <button className="btn dark">Confirm Attendance</button>
              <button className="icon-button">
                <i className="bi bi-trash-fill"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeList;
