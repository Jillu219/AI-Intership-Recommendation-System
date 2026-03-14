import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Card, Button } from '../components/UI';
import { 
  Upload, 
  FileText, 
  CheckCircle2, 
  TrendingUp, 
  Briefcase, 
  MapPin, 
  Clock,
  Sparkles,
  Search
} from 'lucide-react';
import { motion } from 'motion/react';
import { MOCK_INTERNSHIPS } from '../mockData';
import { Link } from 'react-router-dom';

const StudentDashboard = () => {
  const { studentProfile, updateStudentProfile } = useAuth();
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleResumeUpload = () => {
    setIsUploading(true);
    // Simulate AI extraction
    setTimeout(() => {
      setIsUploading(false);
      setUploadSuccess(true);
      updateStudentProfile({
        extractedData: {
          skills: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
          technologies: ['Vite', 'Express', 'Tailwind'],
          projects: ['E-commerce Platform', 'AI Chatbot'],
          education: 'B.Tech in CS'
        }
      });
    }, 2000);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-slate-900">Welcome back, {studentProfile?.name}! 👋</h1>
        <p className="text-slate-500 mt-1">Here's what's happening with your internship search.</p>
      </header>

      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        <Card className="p-6 bg-indigo-600 text-white border-none">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-white/20 rounded-lg">
              <TrendingUp className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider opacity-80">Profile Strength</span>
          </div>
          <p className="text-3xl font-bold mb-1">85%</p>
          <div className="w-full bg-white/20 h-2 rounded-full mt-4">
            <div className="bg-white h-full rounded-full" style={{ width: '85%' }} />
          </div>
          <p className="text-sm mt-4 text-indigo-100">Add your projects to reach 100%</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
              <Briefcase className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Applications</span>
          </div>
          <p className="text-3xl font-bold text-slate-900 mb-1">12</p>
          <p className="text-sm text-slate-500 mt-4">3 active, 9 completed</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-amber-100 text-amber-600 rounded-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">AI Recommendations</span>
          </div>
          <p className="text-3xl font-bold text-slate-900 mb-1">8</p>
          <p className="text-sm text-slate-500 mt-4">New matches found today</p>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Resume Section */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <FileText className="w-5 h-5 text-indigo-600" />
            Resume Analysis
          </h2>
          <Card className="p-8 border-dashed border-2 border-slate-200 bg-slate-50/50">
            <div className="text-center">
              {uploadSuccess ? (
                <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }}>
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Resume Analyzed Successfully!</h3>
                  <p className="text-slate-500 mt-2 mb-6">Our AI has extracted your skills and experience.</p>
                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    {studentProfile?.extractedData?.skills.map(skill => (
                      <span key={skill} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-semibold text-slate-600">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" onClick={() => setUploadSuccess(false)}>Upload New Version</Button>
                </motion.div>
              ) : (
                <>
                  <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Upload className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Upload your Resume</h3>
                  <p className="text-slate-500 mt-2 mb-8">PDF or DOCX supported. Our AI will extract your skills automatically.</p>
                  <Button isLoading={isUploading} onClick={handleResumeUpload} size="lg">
                    {isUploading ? 'Analyzing Resume...' : 'Select File'}
                  </Button>
                </>
              )}
            </div>
          </Card>
        </section>

        {/* Top Matches */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              Top AI Matches
            </h2>
            <Link to="/dashboard/internships" className="text-sm font-semibold text-indigo-600 hover:underline">View All</Link>
          </div>
          <div className="space-y-4">
            {MOCK_INTERNSHIPS.slice(0, 3).map((internship, i) => (
              <Card key={internship.id} className="p-4 hover:border-indigo-200 transition-colors group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 font-bold text-xl">
                    {internship.companyName.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-bold text-slate-900 truncate group-hover:text-indigo-600 transition-colors">
                        {internship.title}
                      </h3>
                      <div className="flex items-center gap-1 px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded text-[10px] font-bold uppercase tracking-wider">
                        <Sparkles className="w-3 h-3" />
                        {95 - i * 4}% Match
                      </div>
                    </div>
                    <p className="text-sm text-slate-500 mb-3">{internship.companyName}</p>
                    <div className="flex items-center gap-4 text-xs text-slate-400">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {internship.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {internship.duration}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default StudentDashboard;
