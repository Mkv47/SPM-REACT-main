import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Layout & main pages

//Student V
import HomeStudent from './Layout/Student/HomeStudent/HomeStudent';
import ExamDetails from './Layout/Student/ExamDetails/ExamDetails';
import Messages from './Layout/Student/Messages/Messages';
import Announcements from './Layout/Student/Announcements/Announcements';

//Instructor V
import HomeInstructor from './Layout/Instructor/HomeInstructor/HomeInstructor';
import Inbox from './Layout/Instructor/Inbox/Messages';
import Approvals from './Layout/Instructor/Approvals/Approvals';
import LetterGrades from './Layout/Instructor/LetterGrades/LetterGrades'
import AnnounceLetterGrade from './Layout/Instructor/LetterGrades/AnnounceLetterGrade';
import AnnounceNewLetterGrade from './Layout/Instructor/LetterGrades/AnnounceNewLetterGrade';

//Secretary V
import HomeSecretary from './Layout/Secretary/HomeSecretary/Home';
import Courses from './Layout/Secretary/Courses/Courses';
import All from './Layout/Secretary/Courses/All';
import AnnouncedCourses from './Layout/Secretary/Courses/AnnouncedCourses';
import UnannouncedCourses from './Layout/Secretary/Courses/UnannouncedCourses';
import Departments from './Layout/Secretary/Departments/Departments';

// Login pages (outside layout)
import ResitExam from './Login/ResitExam';
import StudentLogin from './Layout/Student/Login/StudentLogin';
import ResitExamEntranceInstructor from './Layout/Instructor/Login/ResitExamEntranceInstructor';
import FacultySecretary from './Layout/Secretary/Login/FacultySecretary';


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
          <Route path="/Home=Secretary" element={<HomeSecretary />} />
          <Route path="/courses" element={<Courses />}>
            <Route index element={<All />} />
            {/* <Route path='/All' element={<All />} /> */}
            <Route path="AnnouncedCourses" element={<AnnouncedCourses />} />
            <Route path="UnannouncedCourses" element={<UnannouncedCourses />} />
          </Route>
          <Route path="/departments" element={<Departments />} />

          <Route path="/Home=Student" element={<HomeStudent />} />
          <Route path="/Details" element={<ExamDetails />} />
          <Route path="/Announcements" element={<Announcements />} />
          <Route path="/Messages" element={<Messages />}>
            <Route index element={<All />} />
            {/* <Route path='/All' element={<All />} /> */}
            <Route path="AnnouncedCourses" element={<AnnouncedCourses />} />
            <Route path="UnannouncedCourses" element={<UnannouncedCourses />} />
          </Route>
          <Route path="/departments" element={<Departments />} />


          <Route path="/Home=Instructor" element={<HomeInstructor />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/approvals" element={<Approvals />} />
          <Route path="/lettergrades" element={<LetterGrades />}>
            <Route index element={<AnnounceLetterGrade />} />
            <Route path="announcenewlettergrade" element={<AnnounceNewLetterGrade />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
