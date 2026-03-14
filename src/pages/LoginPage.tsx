import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button, Card } from '../components/UI';
import { Briefcase, Mail, Lock, ArrowLeft } from 'lucide-react';
import { UserRole } from '../types';

const LoginPage = () => {
  const [role, setRole] = useState<UserRole>('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(role);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">
      <Link to="/" className="absolute top-8 left-8 flex items-center gap-2 text-slate-600 hover:text-indigo-600 transition-colors font-medium">
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>

      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-indigo-200">
            <Briefcase className="text-white w-7 h-7" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900">Welcome Back</h1>
          <p className="text-slate-500 mt-2">Login to manage your internship journey</p>
        </div>

        <Card className="p-8">
          <div className="flex p-1 bg-slate-100 rounded-xl mb-8">
            <button
              onClick={() => setRole('student')}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${
                role === 'student' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Student
            </button>
            <button
              onClick={() => setRole('company')}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${
                role === 'company' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Company
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                />
              </div>
            </div>

            <Button type="submit" className="w-full" size="lg">
              Login as {role === 'student' ? 'Student' : 'Company'}
            </Button>
          </form>

          <p className="text-center text-sm text-slate-500 mt-8">
            Don't have an account?{' '}
            <Link to="/register" className="text-indigo-600 font-semibold hover:underline">
              Register now
            </Link>
          </p>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
