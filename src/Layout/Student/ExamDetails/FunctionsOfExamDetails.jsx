import axios from 'axios';

// Changes made:
// 1. Added import statement for axios, since it's required for HTTP requests.
// 2. Grouped the exports at the bottom using named exports for clarity and maintainability.
// 3. Added comments to explain each function and export.

// Import axios for making HTTP requests

/**
 * Fetches the list of resit exams for a student by ID.
 * @param {string|number} id - The student ID.
 * @returns {Promise<Array>} The list of resit exams.
 */
async function GetResitExamList(id) {
    try {
        const response = await axios.get(`http://localhost:3000/student/resitexams/${id}`);

        return response.data.resitExams;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}
 
/**
 * Fetches course details for a student by ID.
 * @param {string|number} id - The student ID.
 * @returns {Promise<Array>} The course details.
 */

async function GetCourseDetails(id) {
    try {
        const response = await axios.get(`http://localhost:3000/student/c-details/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

   function splitDateTime(isoString) {
    if (isoString !== undefined) {
    const [date, timeWithZ] = isoString.split('T') ;
    const time = timeWithZ.replace('Z', '');
    return { date, time };
    }
    else {
        return { date: '', time: '' };
    }
  }

async function GetexamData(id){
     const coursesdetails = await GetCourseDetails(id);
        const resitExams = await GetResitExamList(id);
        console.log(resitExams)
        console.log(coursesdetails)
        const examData = resitExams.map((exam) => {
            const course = coursesdetails.find((course) => course.courseId === exam.courseId);
            const { date, time } = splitDateTime(exam.date);
           console.log(course)
            return {
                id: exam.id,
                course: course ? `${course.courseName} ` : '',
                professor: course ? course.instructors[0] : '',
                status: 'Optional',//undifend on the backend
                // status: exam.status, //undifend on the backend
                confirmed: 'Confirmed',//undifend on the backend
                // confirmed: exam.confirmed, //undifend on the backend
                date: date,
                time: time,
                rooms: exam.location
            };
        });
        return examData;
}
// Exporting both functions as named exports
export { GetResitExamList, GetCourseDetails,GetexamData }
