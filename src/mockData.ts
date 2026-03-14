import { Internship } from "./types";

export const MOCK_INTERNSHIPS: Internship[] = [
  {
    id: "1",
    companyId: "c1",
    companyName: "TechNova Solutions",
    title: "Frontend Developer Intern",
    description: "Join our dynamic team to build cutting-edge web applications using React and Tailwind CSS.",
    responsibilities: [
      "Develop responsive UI components",
      "Collaborate with UX designers",
      "Optimize application performance",
      "Write clean, maintainable code"
    ],
    requiredSkills: ["React", "TypeScript", "Tailwind CSS", "JavaScript"],
    benefits: ["Remote work", "Mentorship", "Certificate", "PPO Opportunity"],
    location: "Remote",
    duration: "3 Months",
    stipend: "$500/month",
    postedAt: "2024-03-10"
  },
  {
    id: "2",
    companyId: "c2",
    companyName: "DataFlow AI",
    title: "Machine Learning Intern",
    description: "Work on real-world AI models and data pipelines for enterprise clients.",
    responsibilities: [
      "Data preprocessing and cleaning",
      "Model training and evaluation",
      "Researching new AI architectures",
      "Deploying models to production"
    ],
    requiredSkills: ["Python", "PyTorch", "SQL", "Data Analysis"],
    benefits: ["Flexible hours", "Learning budget", "Networking"],
    location: "San Francisco, CA",
    duration: "6 Months",
    stipend: "$800/month",
    postedAt: "2024-03-11"
  },
  {
    id: "3",
    companyId: "c3",
    companyName: "CreativePulse",
    title: "UI/UX Design Intern",
    description: "Help us create beautiful and intuitive user experiences for our mobile apps.",
    responsibilities: [
      "Create wireframes and prototypes",
      "Conduct user research",
      "Design high-fidelity mockups",
      "Maintain design systems"
    ],
    requiredSkills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
    benefits: ["Creative freedom", "Portfolio review", "Team outings"],
    location: "New York, NY",
    duration: "4 Months",
    stipend: "$600/month",
    postedAt: "2024-03-12"
  }
];
