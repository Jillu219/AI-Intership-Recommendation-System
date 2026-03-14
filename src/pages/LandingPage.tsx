import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Briefcase, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Target,
  Zap,
  ShieldCheck,
  User,
  FileText
} from 'lucide-react';
import { Button } from '../components/UI';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
            <Briefcase className="text-white w-6 h-6" />
          </div>
          <span className="font-bold text-2xl tracking-tight text-slate-900">InternAI</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#how-it-works" className="hover:text-indigo-600 transition-colors">How it Works</a>
          <a href="#benefits" className="hover:text-indigo-600 transition-colors">Benefits</a>
          <Link to="/login" className="hover:text-indigo-600 transition-colors">Login</Link>
          <Link to="/register">
            <Button size="sm">Get Started</Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-32 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            AI-Powered Career Matching
          </div>
          <h1 className="text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-8">
            Find the Perfect <span className="text-indigo-600">Internship</span> with AI
          </h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
            AI analyzes your skills, interests, resume, and education to recommend the best internships tailored just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/register">
              <Button size="lg" className="w-full sm:w-auto">Get Started Now</Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">View Demo</Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-indigo-600/10 blur-3xl rounded-full" />
          <img 
            src="https://picsum.photos/seed/intern/800/600" 
            alt="Students working" 
            className="relative rounded-3xl shadow-2xl border border-slate-200"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">98% Match Score</p>
                <p className="text-xs text-slate-500">Frontend Developer at Google</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-slate-50 py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
            <p className="text-lg text-slate-600">Our advanced AI matching algorithm ensures you find opportunities that align with your career goals.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: User,
                title: "Create Profile",
                desc: "Tell us about your education, skills, and interests to help our AI understand you."
              },
              {
                icon: FileText,
                title: "Upload Resume",
                desc: "Our AI extracts key technologies and projects from your resume automatically."
              },
              {
                icon: Zap,
                title: "Get Matched",
                desc: "Receive personalized recommendations with a match score for every internship."
              }
            ].map((step, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                <div className="w-14 h-14 bg-indigo-600 text-white rounded-xl flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-8">Why Choose InternAI?</h2>
              <div className="space-y-6">
                {[
                  "Personalized AI-driven recommendations",
                  "Automated resume skill extraction",
                  "Direct connection with top tech companies",
                  "Real-time application tracking",
                  "Detailed match score analysis"
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-lg text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <Link to="/register">
                <Button className="mt-12" size="lg">Join Now <ArrowRight className="ml-2 w-5 h-5" /></Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6 pt-12">
                <div className="bg-indigo-600 p-8 rounded-3xl text-white">
                  <p className="text-4xl font-bold mb-2">10k+</p>
                  <p className="text-indigo-100">Active Students</p>
                </div>
                <div className="bg-slate-900 p-8 rounded-3xl text-white">
                  <p className="text-4xl font-bold mb-2">500+</p>
                  <p className="text-slate-400">Top Companies</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-emerald-500 p-8 rounded-3xl text-white">
                  <p className="text-4xl font-bold mb-2">95%</p>
                  <p className="text-emerald-100">Placement Rate</p>
                </div>
                <div className="bg-indigo-100 p-8 rounded-3xl text-indigo-900">
                  <p className="text-4xl font-bold mb-2">24/7</p>
                  <p className="text-indigo-600">AI Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="bg-indigo-600 rounded-[3rem] p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400/20 blur-3xl rounded-full -ml-32 -mb-32" />
          
          <h2 className="text-5xl font-bold mb-6 relative">Ready to Launch Your Career?</h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto relative">
            Join thousands of students who have found their dream internships through our AI platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative">
            <Link to="/register">
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50 w-full sm:w-auto">Create Student Account</Button>
            </Link>
            <Link to="/register">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">Post an Internship</Button>
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <Briefcase className="text-white w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">InternAI</span>
          </div>
          <p className="text-slate-500 text-sm">© 2024 InternAI Recommendation System. All rights reserved.</p>
          <div className="flex gap-6 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-indigo-600">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-600">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
