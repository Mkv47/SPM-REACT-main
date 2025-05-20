import axios from 'axios';  
async function GetCourses(id) {
    try {
        const response = await axios.get(`http://localhost:3000/secretary/courses`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

async function GetResitExamList(id) {
    try {
        const response = await axios.get(`http://localhost:3000/secretary/resit-exams`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}
async function Deletecourse(selectedIds, GetFunc, setSelectedIds) {
    for (const id of selectedIds) {
        if (id) {
            try {
                await axios.delete(`http://localhost:3000/course/${id}`, {
                    data: {
                        secretaryId: 'sec-001'
                    }
                });
                // Optionally, you can call GetFunc() here if you want to refresh after each delete
            } catch (error) {
                console.error(`Error deleting data for id ${id}:`, error);
            }
        } else {
            console.error('Invalid id detected:', id);
        }
    }
     
}
async function Deleteonecourse(id) {
    if (id) {
        try {
            await axios.delete(`http://localhost:3000/course/${id}`, {
                data: {
                    secretaryId: 'sec-001'
                }
            });
            // Optionally, you can call GetFunc() here if you want to refresh after each delete
        } catch (error) {
            console.error(`Error deleting data for id ${id}:`, error);
        }
    } else {
        console.error('Invalid id detected:', id);
    }
}

 
async function PostCourse(CourseCode, CourseName, Department, Instructor, secretaryId,Room,ExamDate,Deadline) {

    let resitId = `resit-${CourseCode}`;
    try {
             const courseResponse = await axios.post('http://localhost:3000/course', {
            courseId: CourseCode,
            name: CourseName,
            resitExamId: resitId,
            department: Department,
            instructor: Instructor,
            secretaryId: "sec-001",
        });
        console.log(courseResponse.data);
        const resitResponse = await axios.post(`http://localhost:3000/secretary/resit-exams`, {
            id: secretaryId,
            resitExamId: resitId,
            examDate: (ExamDate||'N/A'), // Adjust the format as needed
            courseId: CourseCode,
            deadline: (Deadline||'N/A'),
            location: (Room||'N/A'),
        });
        console.log(resitResponse.data);

   
    } catch (error) {
        console.error('Error fetching data:', error);
    }



    // axios.post('http://localhost:3000/course', {
    //     courseId: CourseCode,
    //     name: CourseName,
    //     resitExamId: resitId,
    //     department: Department,
    //     instructor: Instructor,
    //     secretaryId: "sec-001",
    // })
    // .then(response => {
    //     console.log(response.data);
    // }) 
    // .catch(error => {
    //     console.error('Error fetching data:', error);
    // }).then(
    //     axios.post(`http://localhost:3000/secretary/resit-exams`, {
    //         id: secretaryId,
    //         resitExamId: resitId,
    //         examDate: (ExamDate||'N/A'), // Adjust the format as needed
    //         courseId: CourseCode,
    //         deadline: (Deadline||'N/A'),
    //         location: (Room||  'N/A'),
    //     })
    //     .then(response => {
    //         console.log(response.data);
    //     })
    //     .catch(error => {
    //         console.error('Error fetching data:', error);
    //     })
    // );
}
     const splitDateTime = (isoString) => {
      const [date, timeWithZ] = isoString.split('T');
      const time = timeWithZ.replace('Z', '');
      return { date, time };
    };

export  { GetCourses, GetResitExamList, Deletecourse, PostCourse,splitDateTime,Deleteonecourse };