import React from 'react'
import { useState,useEffect } from "react";
import './Approvals.css'
import RowOfApprovalsTable from './RowOfApprovalsTable'
import Box from '../../Secretary/Departments/Box.jsx'
import { Link } from 'react-router-dom';
import Logo from '../../Z/22405fa43d89aeb0ddf96d741a2776df38abbdfe.png';
import LogoOut from '../../Z/image.png';
import pPic from '../../Z/149935571.jpg';
import '../../Z/Sidenav.css';
import SearchBar from '../../../Btns/SearchBar';
// function Approvals() {
//   const [Items, setItems] = useState([
//     { StudentId: '1', Name: 'Item 1', Grade:'A',Letter:'A+' },
//     { StudentId: '2', Name: 'Item 2', Grade:'B',Letter:'B+' },
//     { StudentId: '3', Name: 'Item 3', Grade:'C',Letter:'C+' },

//   ]);
//   const courses = ["Software Project Management", "Analysis and Design of User Interfaces", "Critical AI Literacy"];
//   const [selectedCourse, setSelectedCourse] = useState(courses[0]);

// const students = [
//   { id: "210209402", name: "Waleed Mohammad Rahim", grade: 35, letter: "FD" },
//   { id: "220209925", name: "Danial Shahzad", grade: 61, letter: "DC" },
//   { id: "220209992", name: "Javokhir Maksudov", grade: 42, letter: "DD" },
//   { id: "220209810", name: "Onur Çepni", grade: 59, letter: "DC" }
// ];
  
//   return (
//     <>
  
//       <nav id="Sidenav" className="Sidenav sidebar">
//         <div className="upperOfSideNav">
//           <img src={Logo} className="iconOfScool" alt="School Icon" />
//           <p>RexEdu</p>
//         </div>
//         <ul>
//         <Link to="/Home=Instructor">
//           <li>
//             <i className="bi bi-grid-fill"></i>
//             <p>Home</p>
//           </li>
//         </Link>
//         <Link to="/lettergrades">
//           <li>
//             <i className="bi bi-grid-fill"></i>
//             <p>Letter Grades</p>
//           </li>
//         </Link>
//         <Link to="/approvals">
//           <li>
//             <i className="bi bi-grid-fill"></i>
//             <p>Approvals</p>
//           </li>
//         </Link>
//         <Link to="/inbox">
//           <li>
//             <i className="bi bi-grid-fill"></i>
//             <p>Inbox</p>
//           </li>
//         </Link>
//         </ul>
//         <div className="logoutdiv">
//           <Link to="/">
//             <img src={LogoOut} alt="Logout Icon" />
//             <p style={{ margin: 0 }}>log out</p>
//           </Link>
//         </div>
//       </nav>

//       {/* <div class="instructor-main-content">
//         <div className="top-bar-Secretary">
//           <input type="Search" placeholder="Search" className="search-input" />
//           <img src={pPic} alt="Profile" className="profile-pic" />
//         </div>
//         <section className='Approvals'>
//           <div className=' ApprovalsHeader'>
//               <Box link='' text='announce letter grade'/>
//               <Box link='' text='announce new letter grade'/>
//           </div>
//             <section className='InnerApprovals'>
//               <table className="Thetable" id="Thetable">
//                  <tr>
//                       <th>Student Id</th>
//                       <th>Name</th>
//                       <th>Grades</th>
//                       <th>Letter</th>
//                   </tr>
//                   {Items.map((item) => (
//                     <RowOfApprovalsTable
//                     key={`${item.StudentId}-${item.Name}`}
//                     StudentId={item.StudentId}
//                     Name={item.Name}
//                     Grade={item.Grade}
//                     Letter={item.Letter}
//                     />
//                   ))}
//               </table>
//             </section>
//           </section>
//       </div> */}
//           <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-2xl font-bold mb-4">Confirmed Attendance List:</h1>

//       <div className="flex gap-4 mb-6">
//         {courses.map(course => (
//           <button
//             key={course}
//             onClick={() => setSelectedCourse(course)}
//             className={`px-4 py-2 rounded-full font-semibold border ${
//               selectedCourse === course ? "bg-gradient-to-r from-purple-800 to-pink-700 text-white" : "bg-white"
//             }`}
//           >
//             {course}
//           </button>
//         ))}
//       </div>

//       <button className="mb-4 px-4 py-2 bg-green-600 text-white rounded flex items-center gap-2">
//         <span role="img" aria-label="megaphone">📢</span> Download List
//       </button>

//       <div className="bg-white rounded shadow overflow-hidden">
//         {students.map((student) => (
//           <div key={student.id} className="flex justify-between items-center bg-green-700 text-white p-4 mb-2 rounded">
//             <div className="w-1/4 font-bold">{student.id}</div>
//             <div className="w-1/4 font-bold">{student.name}</div>
//             <div className="w-1/4 font-bold">{student.grade}/100</div>
//             <div className="w-1/4 flex justify-between font-bold">
//               <span>{student.letter}</span>
//               <span className="text-white">Accepted</span>
//               <button className="text-red-300 hover:text-red-500">Cancel</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//     </>
//   )
// }

// export default Approvals



// const courses = [
//   "Software Project Management",
//   "Analysis and Design of User Interfaces",
//   "Critical AI Literacy",
// ];

// const initialStudents = [
//   { id: "210209402", name: "Waleed Mohammad Rahim", grade: 35, letter: "FD", status: "Pending" },
//   { id: "220209925", name: "Danial Shahzad", grade: 61, letter: "DC", status: "Accepted" },
//   { id: "220209992", name: "Javokhir Maksudov", grade: 42, letter: "DD", status: "Denied" },
//   { id: "220209810", name: "Onur Çepni", grade: 59, letter: "DC", status: "Accepted" },
// ];

// export default function Approvals() {
//   const [selectedCourse, setSelectedCourse] = useState(courses[0]);
//   const [students, setStudents] = useState(initialStudents);

//   const handleStatusChange = (id, status) => {
//     const updated = students.map((s) =>
//       s.id === id ? { ...s, status } : s
//     );
//     setStudents(updated);
//   };

//   const getStatusStyle = (status) => {
//     switch (status) {
//       case "Accepted":
//         return "bg-green-700 text-white";
//       case "Denied":
//         return "bg-red-700 text-white";
//       default:
//         return "bg-gray-100 text-black";
//     }
//   };

//   return (
//       <>
//           <nav id="Sidenav" className="Sidenav sidebar">
//         <div className="upperOfSideNav">
//           <img src={Logo} className="iconOfScool" alt="School Icon" />
//           <p>RexEdu</p>
//         </div>
//         <ul>
//         <Link to="/Home=Instructor">
//           <li>
//             <i className="bi bi-grid-fill"></i>
//             <p>Home</p>
//           </li>
//         </Link>
//         <Link to="/lettergrades">
//           <li>
//             <i className="bi bi-grid-fill"></i>
//             <p>Letter Grades</p>
//           </li>
//         </Link>
//         <Link to="/approvals">
//           <li>
//             <i className="bi bi-grid-fill"></i>
//             <p>Approvals</p>
//           </li>
//         </Link>
//         <Link to="/inbox">
//           <li>
//             <i className="bi bi-grid-fill"></i>
//             <p>Inbox</p>
//           </li>
//         </Link>
//         </ul>
//         <div className="logoutdiv">
//           <Link to="/">
//             <img src={LogoOut} alt="Logout Icon" />
//             <p style={{ margin: 0 }}>log out</p>
//           </Link>
//         </div>
//       </nav>
//     <div className="min-h-screen w-full max-w-[1600px] mx-auto bg-gray-100 p-8">
//       <h1 className="text-2xl font-bold mb-6">Confirmed Attendance List:</h1>

//       {/* Course Tabs */}
//       <div className="flex gap-4 mb-6">
//         {courses.map((course) => (
//           <button
//             key={course}
//             onClick={() => setSelectedCourse(course)}
//             className={`px-4 py-2 rounded-full border font-semibold ${
//               selectedCourse === course
//                 ? "bg-purple-900 text-white"
//                 : "bg-white"
//             }`}
//           >
//             {course}
//           </button>
//         ))}
//       </div>

//       {/* Download Button */}
//       <button className="mb-6 px-4 py-2 bg-green-600 text-white rounded flex items-center gap-2">
//         📢 Download List
//       </button>

//       {/* Table Header */}
//       <div className="grid grid-cols-5 font-bold bg-gray-200 p-4 rounded-t">
//         <div>Student ID</div>
//         <div>Name</div>
//         <div>Grades</div>
//         <div>Letter</div>
//         <div>Actions</div>
//       </div>

//       {/* Students */}
//       {students.map((student) => (
//         <div
//           key={student.id}
//           className={`grid grid-cols-5 items-center p-4 border-b ${getStatusStyle(
//             student.status
//           )}`}
//         >
//           <div className="font-bold">{student.id}</div>
//           <div className="font-bold">{student.name}</div>
//           <div className="font-bold">{student.grade}/100</div>
//           <div className="font-bold">{student.letter}</div>
//           <div className="flex gap-4">
//             {student.status === "Pending" && (
//               <>
//                 <button
//                   onClick={() => handleStatusChange(student.id, "Accepted")}
//                   className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded shadow"
//                 >
//                   Accept
//                 </button>
//                 <button
//                   onClick={() => handleStatusChange(student.id, "Denied")}
//                   className="bg-red-700 hover:bg-red-800 text-white px-4 py-1 rounded shadow"
//                 >
//                   Deny
//                 </button>
//               </>
//             )}

//             {student.status === "Accepted" && (
//               <>
//                 <span className="text-white font-bold">Accepted</span>
//                 <button
//                   onClick={() => handleStatusChange(student.id, "Pending")}
//                   className="text-red-300 hover:text-red-100 font-bold"
//                 >
//                   Cancel
//                 </button>
//               </>
//             )}

//             {student.status === "Denied" && (
//               <>
//                 <span className="text-white font-bold">Denied</span>
//                 <button
//                   onClick={() => handleStatusChange(student.id, "Pending")}
//                   className="text-green-300 hover:text-green-100 font-bold"
//                 >
//                   Accept
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       ))}
//     </div></>
//   );
// }




const courses = [
  "Software Project Management",
  "Analysis and Design of User Interfaces",
  "Critical AI Literacy",
];

const initialStudents = [
  { id: "210209402", name: "Waleed Mohammad Rahim", grade: 35, letter: "FD", status: "Pending" },
  { id: "220209925", name: "Danial Shahzad", grade: 61, letter: "DC", status: "Accepted" },
  { id: "220209992", name: "Javokhir Maksudov", grade: 42, letter: "DD", status: "Denied" },
  { id: "220209810", name: "Onur Çepni", grade: 59, letter: "DC", status: "Accepted" },
  { id: "220209813", name: "Zehra Kaya", grade: 88, letter: "BB", status: "Accepted" },
  { id: "220209814", name: "Arman Yıldız", grade: 72, letter: "CB", status: "Accepted" },
  { id: "220209815", name: "Elif Demir", grade: 48, letter: "DD", status: "Denied" },
  { id: "220209816", name: "Mustafa Aydın", grade: 29, letter: "FF", status: "Pending" },
  { id: "220209817", name: "Sinem Polat", grade: 65, letter: "CC", status: "Accepted" },
  { id: "220209818", name: "Ahmet Yılmaz", grade: 51, letter: "DD", status: "Pending" },
  { id: "220209819", name: "Fatma Gül", grade: 90, letter: "BA", status: "Accepted" },
  { id: "220209820", name: "Kerem Tunç", grade: 77, letter: "CB", status: "Accepted" },
  { id: "220209821", name: "Ayşe Öz", grade: 36, letter: "FD", status: "Denied" },
];

export default function Approvals() {
  const [selectedCourse, setSelectedCourse] = useState(courses[0]);
  const [students, setStudents] = useState(initialStudents);

  const handleStatusChange = (id, status) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status } : s))
    );
  };

  const getRowStyle = (status) => {
    if (status === "Accepted") return "bg-green-700 text-white";
    if (status === "Denied") return "bg-red-700 text-white";
    return "bg-white text-black";
  };

  return (
    <>
        <nav id="Sidenav" className="Sidenav sidebar">
         <div className="upperOfSideNav">
           <img src={Logo} className="iconOfScool" alt="School Icon" />
           <p>RexEdu</p>
         </div>
         <ul>
         <Link to="/Home=Instructor">
           <li>
             <i className="bi bi-grid-fill"></i>
             <p>Home</p>
           </li>
         </Link>
         <Link to="/lettergrades">
           <li>
             <i className="bi bi-grid-fill"></i>
             <p>Letter Grades</p>
           </li>
         </Link>
         <Link to="/approvals">
           <li>
             <i className="bi bi-grid-fill"></i>
             <p>Approvals</p>
           </li>
         </Link>
         <Link to="/inbox">
           <li>
             <i className="bi bi-grid-fill"></i>
             <p>Inbox</p>
           </li>
         </Link>
         </ul>
         <div className="logoutdiv">
           <Link to="/">
             <img src={LogoOut} alt="Logout Icon" />
             <p style={{ margin: 0 }}>log out</p>
           </Link>
         </div>
       </nav>
    
    <div className="min-h-screen w-full bg-[#F0F0F5] flex justify-center items-start py-8">
      <div className="w-[1200px] bg-white rounded-xl shadow-lg p-8 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Confirmed Attendance List:</h1>
          <button className="bg-green-600 text-white px-4 py-2 rounded flex items-center gap-2 shadow hover:bg-green-700">
            📢 Download List
          </button>
        </div>

        {/* Course Tabs */}
        <div className="flex gap-4">
          {courses.map((course) => (
            <button
              key={course}
              onClick={() => setSelectedCourse(course)}
              className={`px-4 py-2 rounded-full border font-semibold transition ${
                selectedCourse === course
                  ? "bg-purple-900 text-white"
                  : "bg-white"
              }`}
            >
              {course}
            </button>
          ))}
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-5 font-bold bg-gray-100 p-4 rounded-t-md">
          <div>Student ID</div>
          <div>Name</div>
          <div>Grades</div>
          <div>Letter</div>
          <div>Actions</div>
        </div>

        {/* Students */}
        {/* {students.map((student) => (
          <div
            key={student.id}
            className={`grid grid-cols-5 items-center p-4 border-b rounded-md ${getRowStyle(
              student.status
            )}`}
          >
            <div className="font-bold">{student.id}</div>
            <div className="font-bold">{student.name}</div>
            <div className="font-bold">{student.grade}/100</div>
            <div className="font-bold">{student.letter}</div>
            <div className="flex gap-4">
              {student.status === "Pending" && (
                <>
                  <button
                    onClick={() => handleStatusChange(student.id, "Accepted")}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded shadow"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleStatusChange(student.id, "Denied")}
                    className="bg-red-700 hover:bg-red-800 text-white px-4 py-1 rounded shadow"
                  >
                    Deny
                  </button>
                </>
              )}

              {student.status === "Accepted" && (
                <>
                  <span className="text-white font-bold">Accepted</span>
                  <button
                    onClick={() => handleStatusChange(student.id, "Pending")}
                    className="text-red-300 hover:text-red-100 font-bold"
                  >
                    Cancel
                  </button>
                </>
              )}

              {student.status === "Denied" && (
                <>
                  <span className="text-white font-bold">Denied</span>
                  <button
                    onClick={() => handleStatusChange(student.id, "Pending")}
                    className="text-green-300 hover:text-green-100 font-bold"
                  >
                    Accept
                  </button>
                </>
              )}
            </div>
          </div>
        ))} */}
        {/* Students List Scrollable Container */}
<div className="overflow-y-auto max-h-[400px] rounded-b-md">
  {students.map((student) => (
    <div
      key={student.id}
      className={`grid grid-cols-5 items-center p-4 border-b rounded-md ${getRowStyle(
        student.status
      )}`}
    >
      <div className="font-bold">{student.id}</div>
      <div className="font-bold">{student.name}</div>
      <div className="font-bold">{student.grade}/100</div>
      <div className="font-bold">{student.letter}</div>
      <div className="flex gap-4">
        {student.status === "Pending" && (
          <>
            <button
              onClick={() => handleStatusChange(student.id, "Accepted")}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded shadow"
            >
              Accept
            </button>
            <button
              onClick={() => handleStatusChange(student.id, "Denied")}
              className="bg-red-700 hover:bg-red-800 text-white px-4 py-1 rounded shadow"
            >
              Deny
            </button>
          </>
        )}
        {student.status === "Accepted" && (
          <>
            <span className="text-white font-bold">Accepted</span>
            <button
              onClick={() => handleStatusChange(student.id, "Pending")}
              className="text-red-300 hover:text-red-100 font-bold"
            >
              Cancel
            </button>
          </>
        )}
        {student.status === "Denied" && (
          <>
            <span className="text-white font-bold">Denied</span>
            <button
              onClick={() => handleStatusChange(student.id, "Pending")}
              className="text-green-300 hover:text-green-100 font-bold"
            >
              Accept
            </button>
          </>
        )}
      </div>
    </div>
  ))}
</div>

      </div>
    </div></>
  );
}
