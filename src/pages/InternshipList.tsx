import React, { useState, useMemo } from 'react';
import { Card, Button } from '../components/UI';
import { 
  Search, 
  Filter, 
  MapPin, 
  Clock, 
  DollarSign, 
  Sparkles,
  ChevronRight,
  Briefcase
} from 'lucide-react';
import { MOCK_INTERNSHIPS } from '../mockData';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const InternshipList = () => {
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkill, setSelectedSkill] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');

  const allSkills = useMemo(() => {
    const skills = new Set<string>();
    MOCK_INTERNSHIPS.forEach(i => i.requiredSkills.forEach(s => skills.add(s)));
    return ['All', ...Array.from(skills)];
  }, []);

  const allLocations = useMemo(() => {
    const locations = new Set<string>();
    MOCK_INTERNSHIPS.forEach(i => locations.add(i.location));
    return ['All', ...Array.from(locations)];
  }, []);

  const filteredInternships = MOCK_INTERNSHIPS.filter(internship => {
    const matchesSearch = internship.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         internship.companyName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSkill = selectedSkill === 'All' || internship.requiredSkills.includes(selectedSkill);
    const matchesLocation = selectedLocation === 'All' || internship.location === selectedLocation;
    return matchesSearch && matchesSkill && matchesLocation;
  });

  return (
    <div className="max-w-6xl mx-auto">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-slate-900">Discover Internships</h1>
        <p className="text-slate-500 mt-1">Find the best opportunities matching your career goals.</p>
      </header>

      {/* Filters */}
      <Card className="p-6 mb-8">
        <div className="grid md:grid-cols-4 gap-4">
          <div className="md:col-span-2 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by title, company, or keywords..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <select 
              value={selectedSkill}
              onChange={(e) => setSelectedSkill(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none appearance-none text-slate-600"
            >
              {allSkills.map(skill => <option key={skill} value={skill}>{skill}</option>)}
            </select>
          </div>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <select 
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none appearance-none text-slate-600"
            >
              {allLocations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
            </select>
          </div>
        </div>
      </Card>

      {/* Results */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredInternships.map((internship, i) => (
          <Card key={internship.id} className="group hover:border-indigo-200 transition-all duration-300 flex flex-col">
            <div className="p-6 flex-1">
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-600 font-bold text-2xl group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                  {internship.companyName.charAt(0)}
                </div>
                {user?.role === 'student' && (
                  <div className="flex items-center gap-1 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    {98 - i * 5}% Match
                  </div>
                )}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors">
                {internship.title}
              </h3>
              <p className="text-slate-500 font-medium mb-4">{internship.companyName}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {internship.requiredSkills.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-semibold">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  {internship.location}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-slate-400" />
                  {internship.duration}
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-slate-400" />
                  {internship.stipend}
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-slate-400" />
                  Full-time
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-medium">Posted {internship.postedAt}</span>
              <Link to={`/dashboard/internships/${internship.id}`}>
                <Button variant="ghost" size="sm" className="font-bold text-indigo-600">
                  View Details <ChevronRight className="ml-1 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>

      {filteredInternships.length === 0 && (
        <div className="text-center py-20">
          <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Search className="w-10 h-10 text-slate-300" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">No internships found</h3>
          <p className="text-slate-500 mt-2">Try adjusting your filters or search query.</p>
          <Button variant="outline" className="mt-6" onClick={() => {
            setSearchQuery('');
            setSelectedSkill('All');
            setSelectedLocation('All');
          }}>Clear All Filters</Button>
        </div>
      )}
    </div>
  );
};

export default InternshipList;
