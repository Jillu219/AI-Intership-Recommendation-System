import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MOCK_INTERNSHIPS } from '../mockData';
import { Card, Button } from '../components/UI';
import { 
  ArrowLeft, 
  MapPin, 
  Clock, 
  DollarSign, 
  Building2, 
  CheckCircle2, 
  Sparkles,
  Share2,
  Bookmark
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useAuth } from '../context/AuthContext';

const InternshipDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isApplying, setIsApplying] = useState(false);
  const [isApplied, setIsApplied] = useState(false);

  const internship = MOCK_INTERNSHIPS.find(i => i.id === id);

  if (!internship) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-slate-900">Internship not found</h2>
        <Link to="/dashboard/internships">
          <Button className="mt-4">Back to Listings</Button>
        </Link>
      </div>
    );
  }

  const handleApply = () => {
    setIsApplying(true);
    setTimeout(() => {
      setIsApplying(false);
      setIsApplied(true);
    }, 1500);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <Link to="/dashboard/internships" className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-colors font-medium mb-8">
        <ArrowLeft className="w-4 h-4" />
        Back to Listings
      </Link>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card className="p-8">
            <div className="flex items-start justify-between mb-8">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-600 font-bold text-4xl">
                  {internship.companyName.charAt(0)}
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-slate-900">{internship.title}</h1>
                  <p className="text-xl text-slate-500 font-medium mt-1">{internship.companyName}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="h-10 w-10 p-0">
                  <Bookmark className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="sm" className="h-10 w-10 p-0">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-slate-100 mb-8">
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Location</p>
                <div className="flex items-center gap-2 text-slate-700 font-semibold">
                  <MapPin className="w-4 h-4 text-indigo-500" />
                  {internship.location}
                </div>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Duration</p>
                <div className="flex items-center gap-2 text-slate-700 font-semibold">
                  <Clock className="w-4 h-4 text-indigo-500" />
                  {internship.duration}
                </div>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Stipend</p>
                <div className="flex items-center gap-2 text-slate-700 font-semibold">
                  <DollarSign className="w-4 h-4 text-indigo-500" />
                  {internship.stipend}
                </div>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Posted</p>
                <div className="flex items-center gap-2 text-slate-700 font-semibold">
                  <Clock className="w-4 h-4 text-indigo-500" />
                  {internship.postedAt}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">Description</h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {internship.description}
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">Responsibilities</h2>
                <ul className="space-y-3">
                  {internship.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">Benefits</h2>
                <div className="flex flex-wrap gap-3">
                  {internship.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-xl text-sm font-semibold border border-emerald-100">
                      <CheckCircle2 className="w-4 h-4" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-6">About {internship.companyName}</h2>
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 font-bold text-2xl">
                {internship.companyName.charAt(0)}
              </div>
              <div>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {internship.companyName} is a leading technology company focused on building innovative solutions for the modern world. We pride ourselves on our inclusive culture and commitment to excellence.
                </p>
                <Button variant="outline" size="sm">Visit Company Website</Button>
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="p-6 sticky top-8">
            {user?.role === 'student' && (
              <div className="mb-6 p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-indigo-600 flex items-center gap-1">
                    <Sparkles className="w-4 h-4" />
                    AI Match Score
                  </span>
                  <span className="text-2xl font-black text-indigo-600">96%</span>
                </div>
                <div className="w-full bg-indigo-200 h-2 rounded-full">
                  <div className="bg-indigo-600 h-full rounded-full" style={{ width: '96%' }} />
                </div>
                <p className="text-xs text-indigo-400 mt-3 font-medium">
                  Your skills in React and TypeScript are a perfect match for this role.
                </p>
              </div>
            )}

            <div className="space-y-4">
              <h3 className="font-bold text-slate-900">Required Skills</h3>
              <div className="flex flex-wrap gap-2">
                {internship.requiredSkills.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-100">
              <AnimatePresence mode="wait">
                {isApplied ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <p className="font-bold text-slate-900 mb-1">Application Submitted!</p>
                    <p className="text-sm text-slate-500 mb-6">Your application has been submitted successfully.</p>
                    <Button variant="outline" className="w-full" onClick={() => navigate('/dashboard')}>Go to Dashboard</Button>
                  </motion.div>
                ) : (
                  <Button 
                    className="w-full" 
                    size="lg" 
                    isLoading={isApplying}
                    onClick={handleApply}
                    disabled={user?.role === 'company'}
                  >
                    {user?.role === 'company' ? 'Recruiter View' : 'Apply Now'}
                  </Button>
                )}
              </AnimatePresence>
              <p className="text-center text-xs text-slate-400 mt-4">
                By applying, you agree to our Terms of Service.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-slate-400" />
              Similar Roles
            </h3>
            <div className="space-y-4">
              {MOCK_INTERNSHIPS.filter(i => i.id !== id).slice(0, 2).map(i => (
                <Link key={i.id} to={`/dashboard/internships/${i.id}`} className="block group">
                  <p className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 truncate transition-colors">{i.title}</p>
                  <p className="text-xs text-slate-500 mt-1">{i.companyName} • {i.location}</p>
                </Link>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default InternshipDetails;
