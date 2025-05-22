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
//  function GetResitExamList(id){
//    return  axios.get(`http://localhost:3000/student/resitexams/${id}`)
//     .then(response => {
//         return response.data.resitExams;
//     })
//     .catch(error => {
//         console.error('Error fetching data:', error);
//         return [];
//     });
//  }

//  function GetCourseDetails(id){
//   return  axios.get(`http://localhost:3000/student/c-details/${id}`)
//     .then(response => {
//         return response.data;
//     })
//     .catch(error => {
//         console.error('Error fetching data:', error);
//         return [];
//     });
//  }
/**
 * Fetches course details for a student by ID.
 * @param {string|number} id - The student ID.
 * @returns {Promise<Array>} The course details.
 */





async function GetCourseDetails(id) {
    // Ensure id is a primitive value, not an object
    let std = typeof id === 'object' && id !== null ? id.id : id;
    console.log(std);
    try {
        const response = await axios.get(`http://localhost:3000/student/c-details/${std}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

// Exporting both functions as named exports
export { GetResitExamList, GetCourseDetails };
