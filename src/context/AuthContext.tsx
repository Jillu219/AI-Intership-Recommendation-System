import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, UserRole, StudentProfile, CompanyProfile } from '../types';

interface AuthContextType {
  user: User | null;
  studentProfile: StudentProfile | null;
  companyProfile: CompanyProfile | null;
  login: (role: UserRole) => void;
  logout: () => void;
  updateStudentProfile: (profile: Partial<StudentProfile>) => void;
  updateCompanyProfile: (profile: Partial<CompanyProfile>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [studentProfile, setStudentProfile] = useState<StudentProfile | null>(null);
  const [companyProfile, setCompanyProfile] = useState<CompanyProfile | null>(null);

  const login = (role: UserRole) => {
    const mockUser: User = {
      id: role === 'student' ? 's1' : 'c1',
      name: role === 'student' ? 'Alex Johnson' : 'TechNova Admin',
      email: role === 'student' ? 'alex@example.com' : 'admin@technova.com',
      role,
    };
    setUser(mockUser);

    if (role === 'student') {
      setStudentProfile({
        ...mockUser,
        collegeName: 'Global Institute of Technology',
        degree: 'B.Tech Computer Science',
        yearOfStudy: '3rd Year',
        skills: ['React', 'JavaScript', 'Tailwind CSS'],
        interests: ['Web Development', 'AI'],
        preferredDomain: 'Frontend',
        preferredLocation: 'Remote',
      });
    } else {
      setCompanyProfile({
        ...mockUser,
        companyName: 'TechNova Solutions',
        industry: 'Software Development',
        description: 'Leading the way in innovative software solutions.',
      });
    }
  };

  const logout = () => {
    setUser(null);
    setStudentProfile(null);
    setCompanyProfile(null);
  };

  const updateStudentProfile = (profile: Partial<StudentProfile>) => {
    setStudentProfile(prev => prev ? { ...prev, ...profile } as StudentProfile : null);
  };

  const updateCompanyProfile = (profile: Partial<CompanyProfile>) => {
    setCompanyProfile(prev => prev ? { ...prev, ...profile } as CompanyProfile : null);
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      studentProfile, 
      companyProfile, 
      login, 
      logout, 
      updateStudentProfile, 
      updateCompanyProfile 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
