import { useState, useEffect } from 'react';
import axios from 'axios';
import StudentComponent from '../components/StudentComponent';
import './StudentsPage.css';

const StudentsPage = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      
      // Transform user data to student data with course and enrolled status
      const courses = ['Computer Science', 'Business Administration', 'Engineering', 'Medicine', 'Arts', 'Law', 'Psychology', 'Economics'];
      const transformedStudents = response.data.map((user, index) => ({
        ...user,
        course: courses[index % courses.length],
        enrolled: index % 3 !== 0, // Every 3rd student is not enrolled (for variety)
        year: Math.floor(Math.random() * 4) + 1, // Year 1-4
        studentId: `STU${String(user.id).padStart(4, '0')}`
      }));
      
      setStudents(transformedStudents);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch student data. Please try again later.');
      setLoading(false);
    }
  };

  const refreshData = () => {
    fetchStudents();
  };

  if (loading) {
    return (
      <div className="students-page">
        <div className="container py-5">
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3 text-muted">Loading student data...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="students-page">
        <div className="container py-5">
          <div className="alert alert-danger" role="alert">
            <i className="bi bi-exclamation-triangle-fill me-2"></i>
            {error}
          </div>
          <button className="btn btn-primary" onClick={refreshData}>
            <i className="bi bi-arrow-clockwise me-2"></i>
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="students-page">
      <div className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h1 className="fw-bold mb-1">
              <i className="bi bi-people-fill me-2 text-primary"></i>
              Students
            </h1>
            <p className="text-muted mb-0">View all registered students</p>
          </div>
          <button className="btn btn-outline-primary" onClick={refreshData}>
            <i className="bi bi-arrow-clockwise me-2"></i>
            Refresh
          </button>
        </div>

        <div className="row g-4">
          {students.map((student) => (
            <div key={student.id} className="col-md-6 col-lg-4">
              <StudentComponent student={student} />
            </div>
          ))}
        </div>

        {students.length === 0 && (
          <div className="text-center py-5">
            <i className="bi bi-inbox display-1 text-muted"></i>
            <p className="text-muted mt-3">No students found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentsPage;
