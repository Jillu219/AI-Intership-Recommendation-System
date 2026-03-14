import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Card, Button } from '../components/UI';
import { 
  Plus, 
  Users, 
  Briefcase, 
  Eye, 
  MoreVertical,
  Search,
  CheckCircle2,
  Clock,
  MapPin
} from 'lucide-react';
import { MOCK_INTERNSHIPS } from '../mockData';

const CompanyDashboard = () => {
  const { companyProfile } = useAuth();
  const [showPostModal, setShowPostModal] = useState(false);

  return (
    <div className="max-w-6xl mx-auto">
      <header className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Company Dashboard</h1>
          <p className="text-slate-500 mt-1">Manage your internship listings and track applicants.</p>
        </div>
        <Button onClick={() => setShowPostModal(true)} size="lg">
          <Plus className="w-5 h-5 mr-2" />
          Post Internship
        </Button>
      </header>

      <div className="grid lg:grid-cols-4 gap-6 mb-12">
        {[
          { label: 'Active Listings', value: '4', icon: Briefcase, color: 'indigo' },
          { label: 'Total Applicants', value: '156', icon: Users, color: 'emerald' },
          { label: 'Interviews', value: '12', icon: Clock, color: 'amber' },
          { label: 'Hired', value: '3', icon: CheckCircle2, color: 'blue' },
        ].map((stat, i) => (
          <Card key={i} className="p-6">
            <div className={`w-10 h-10 bg-${stat.color}-100 text-${stat.color}-600 rounded-lg flex items-center justify-center mb-4`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">{stat.label}</p>
            <p className="text-3xl font-bold text-slate-900 mt-1">{stat.value}</p>
          </Card>
        ))}
      </div>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-900">Recent Listings</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search listings..." 
              className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>
        </div>

        <Card>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/50">
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Internship Title</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Applicants</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Posted Date</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {MOCK_INTERNSHIPS.map((internship) => (
                  <tr key={internship.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <p className="font-bold text-slate-900">{internship.title}</p>
                      <div className="flex items-center gap-3 mt-1 text-xs text-slate-400">
                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {internship.location}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {internship.duration}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-md text-[10px] font-bold uppercase tracking-wider">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900">{Math.floor(Math.random() * 50) + 10}</span>
                        <span className="text-xs text-slate-400">candidates</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">
                      {internship.postedAt}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default CompanyDashboard;
