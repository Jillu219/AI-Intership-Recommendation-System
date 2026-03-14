import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import StudentDashboard from './pages/StudentDashboard';
import CompanyDashboard from './pages/CompanyDashboard';
import InternshipList from './pages/InternshipList';
import InternshipDetails from './pages/InternshipDetails';
import ProfilePage from './pages/ProfilePage';
import Sidebar from './components/Sidebar';

function AppRoutes() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      
      {/* Protected Routes */}
      <Route 
        path="/dashboard/*" 
        element={
          user ? (
            <div className="flex min-h-screen bg-slate-50">
              <Sidebar />
              <main className="flex-1 p-8 overflow-y-auto">
                <Routes>
                  <Route 
                    index 
                    element={user.role === 'student' ? <StudentDashboard /> : <CompanyDashboard />} 
                  />
                  <Route path="internships" element={<InternshipList />} />
                  <Route path="internships/:id" element={<InternshipDetails />} />
                  <Route path="profile" element={<ProfilePage />} />
                </Routes>
              </main>
            </div>
          ) : (
            <Navigate to="/login" />
          )
        } 
      />
    </Routes>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}
