import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Card, Button } from '../components/UI';
import { User, Mail, Building2, GraduationCap, MapPin, Award } from 'lucide-react';

const ProfilePage = () => {
  const { user, studentProfile, companyProfile } = useAuth();

  return (
    <div className="max-w-4xl mx-auto">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-slate-900">My Profile</h1>
        <p className="text-slate-500 mt-1">Manage your personal information and preferences.</p>
      </header>

      <div className="grid md:grid-cols-3 gap-8">
        <Card className="p-6 text-center">
          <div className="w-24 h-24 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
            {user?.name.charAt(0)}
          </div>
          <h2 className="text-xl font-bold text-slate-900">{user?.name}</h2>
          <p className="text-slate-500 text-sm mb-6">{user?.email}</p>
          <Button variant="outline" className="w-full">Edit Photo</Button>
        </Card>

        <div className="md:col-span-2 space-y-6">
          <Card className="p-8">
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <User className="w-5 h-5 text-indigo-600" />
              Personal Details
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Full Name</label>
                <p className="text-slate-700 font-medium">{user?.name}</p>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Email Address</label>
                <p className="text-slate-700 font-medium">{user?.email}</p>
              </div>
              {user?.role === 'student' ? (
                <>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">College</label>
                    <p className="text-slate-700 font-medium">{studentProfile?.collegeName}</p>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Degree</label>
                    <p className="text-slate-700 font-medium">{studentProfile?.degree}</p>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Company</label>
                    <p className="text-slate-700 font-medium">{companyProfile?.companyName}</p>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Industry</label>
                    <p className="text-slate-700 font-medium">{companyProfile?.industry}</p>
                  </div>
                </>
              )}
            </div>
          </Card>

          {user?.role === 'student' && (
            <Card className="p-8">
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-indigo-600" />
                Skills & Interests
              </h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Professional Skills</label>
                  <div className="flex flex-wrap gap-2">
                    {studentProfile?.skills.map(skill => (
                      <span key={skill} className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg text-sm font-semibold">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Interests</label>
                  <div className="flex flex-wrap gap-2">
                    {studentProfile?.interests.map(interest => (
                      <span key={interest} className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-lg text-sm font-semibold">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
