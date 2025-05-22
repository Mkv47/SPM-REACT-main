import { useState, useEffect } from 'react';
import axios from 'axios';
async function getApprovals(id) {
    const response = await axios.get(`http://localhost:3000/instructor/r-exams/${id}`);
     response.data.resitExams
    return response.data;

}