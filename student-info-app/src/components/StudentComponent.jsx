import { useState } from 'react';
import './StudentComponent.css';

const StudentComponent = ({ student }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDetails = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="card student-card shadow-sm h-100">
      <div className="card-body">
        <div className="d-flex align-items-center mb-3">
          <div className="student-avatar me-3">
            {student.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <h5 className="card-title mb-0">{student.name}</h5>
            <small className="text-muted">@{student.username}</small>
          </div>
        </div>
        
        <div className="student-info">
          <p className="card-text">
            <i className="bi bi-envelope me-2"></i>
            <a href={`mailto:${student.email}`} className="text-decoration-none">
              {student.email}
            </a>
          </p>
          <p className="card-text">
            <i className="bi bi-geo-alt me-2"></i>
            {student.address.city}, {student.address.street}
          </p>
          <p className="card-text">
            <i className="bi bi-phone me-2"></i>
            {student.phone}
          </p>
          <p className="card-text">
            <i className="bi bi-globe me-2"></i>
            <a href={`http://${student.website}`} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
              {student.website}
            </a>
          </p>
        </div>

        {isExpanded && (
          <div className="extended-info mt-3 pt-3 border-top">
            <h6 className="fw-bold">Academic Info</h6>
            <div className="mb-2">
              <span className="badge bg-info me-1">
                <i className="bi bi-book me-1"></i>
                {student.course}
              </span>
              <span className="badge bg-secondary me-1">
                <i className="bi bi-calendar3 me-1"></i>
                Year {student.year}
              </span>
            </div>
            <p className="mb-1">
              <i className="bi bi-person-badge me-2"></i>
              <strong>Student ID:</strong> {student.studentId}
            </p>
            <div className="mt-2">
              {student.enrolled ? (
                <span className="badge bg-success">
                  <i className="bi bi-check-circle me-1"></i>
                  Enrolled
                </span>
              ) : (
                <span className="badge bg-warning text-dark">
                  <i className="bi bi-clock me-1"></i>
                  Not Enrolled
                </span>
              )}
            </div>
          </div>
        )}

        <button 
          className="btn btn-outline-primary btn-sm mt-3"
          onClick={toggleDetails}
        >
          <i className={`bi ${isExpanded ? 'bi-chevron-up' : 'bi-chevron-down'} me-1`}></i>
          {isExpanded ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </div>
  );
};

export default StudentComponent;
