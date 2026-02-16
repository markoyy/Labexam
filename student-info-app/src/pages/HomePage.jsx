import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="hero-section text-center py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="hero-content">
                <div className="hero-icon mb-4">
                  <i className="bi bi-mortarboard-fill"></i>
                </div>
                <h1 className="display-4 fw-bold mb-3">Welcome to Student Info App</h1>
                <p className="lead text-muted mb-4">
                  A simple React application demonstrating component usage, props, state, 
                  client-side routing, and API data handling.
                </p>
                
                <div className="d-flex justify-content-center gap-3 flex-wrap">
                  <Link to="/students" className="btn btn-primary btn-lg px-4">
                    <i className="bi bi-people me-2"></i>
                    View Students
                  </Link>
                  <a href="#features" className="btn btn-outline-secondary btn-lg px-4">
                    <i className="bi bi-info-circle me-2"></i>
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     

      
    </div>
  );
};

export default HomePage;
