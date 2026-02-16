import { Routes, Route } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import HomePage from './pages/HomePage';
import StudentsPage from './pages/StudentsPage';
import './App.css';

function App() {
  return (
    <div className="app">
      <HeaderComponent />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/students" element={<StudentsPage />} />
        </Routes>
      </main>
      <footer className="app-footer bg-light py-3 mt-auto">
        <div className="container text-center">
          <p className="text-muted mb-0">
            <small>© 2024 Student Info App. Built with React & Bootstrap.</small>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
