

async function GetInstructorCourses(id) {
    try {
        const response = await axios.get(`/instructor/courses/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}