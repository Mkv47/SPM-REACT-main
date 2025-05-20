import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Layout & main pages
import Home from './Layout/Secretary/HomeSecretary/Home';
import Home_St from './Layout/Student/HomeStudent/HomeStudent';
import ExamDetails from './Layout/Student/ExamDetails/ExamDetails';
import Announcements from './Layout/Student/Announcements/Announcements';
import Messages from './Layout/Student/Messages/Messages';
import Courses from './Layout/Secretary/Courses/Courses';
import All from './Layout/Secretary/Courses/All';
import AnnouncedCourses from './Layout/Secretary/Courses/AnnouncedCourses';
import UnannouncedCourses from './Layout/Secretary/Courses/UnannouncedCourses';
import Departments from './Layout/Secretary/Departments/Departments';
import HomeInstructor from './Layout/Instructor/HomeInstructor/HomeInstructor';

// Login pages (outside layout)
import FacultySecretary from './Login/FacultySecretary'; // login selection screen
import StudentLogin from './Layout/Student/Login/StudentLogin';
import ResitExamEntranceInstructor from './Login/ResitExamEntranceInstructor';
import ResitExam from './Login/ResitExam';
import LetterGrades from './LetterGrades/LetterGrades'
import AnnounceLetterGrade from './LetterGrades/AnnounceLetterGrade';
import AnnounceNewLetterGrade from './LetterGrades/AnnounceNewLetterGrade';
import Approvals from './Approvals/Approvals';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes - No Layout */}
        <Route path="/" element={<ResitExam />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/instructor-login" element={<ResitExamEntranceInstructor />} />
        <Route path="/facultysecretary-login" element={<FacultySecretary />} />

        {/* Protected Routes - With Layout */}
          <Route path="/Home=Secretary" element={<Home />} />
          <Route path="/courses" element={<Courses />}>
            <Route index element={<All />} />
            <Route path="AnnouncedCourses" element={<AnnouncedCourses />} />
            <Route path="UnannouncedCourses" element={<UnannouncedCourses />} />
          </Route>
          <Route path="/departments" element={<Departments />} />

          <Route path="/Home=Student" element={<Home_St />} />
          <Route path="/Details" element={<ExamDetails />} />
          <Route path="/Announcements" element={<Announcements />} />
          <Route path="/Messages" element={<Messages />}>
            <Route index element={<All />} />
            {/* <Route path='/All' element={<All />} /> */}
            <Route path="AnnouncedCourses" element={<AnnouncedCourses />} />
            <Route path="UnannouncedCourses" element={<UnannouncedCourses />} />
          </Route>
          <Route path="/departments" element={<Departments />} />


          <Route path="/instructor" element={<HomeInstructor />} />
          <Route path='/lettergrades' element={<LetterGrades/>} >
          <Route index element={<AnnounceLetterGrade/>} />
          <Route path='announcenewlettergrade' element={<AnnounceNewLetterGrade/>} />
          </Route>
          <Route path='/approvals' element={<Approvals/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
