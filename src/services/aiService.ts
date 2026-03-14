import { GoogleGenAI, Type } from "@google/genai";
import { Internship, MatchResult, StudentProfile } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export const aiService = {
  async extractResumeData(text: string) {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Extract skills, technologies, projects, and education from the following resume text. Return as JSON.
      
      Resume Text:
      ${text}`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            skills: { type: Type.ARRAY, items: { type: Type.STRING } },
            technologies: { type: Type.ARRAY, items: { type: Type.STRING } },
            projects: { type: Type.ARRAY, items: { type: Type.STRING } },
            education: { type: Type.STRING },
          },
          required: ["skills", "technologies", "projects", "education"],
        },
      },
    });

    return JSON.parse(response.text);
  },

  async calculateMatchScore(student: StudentProfile, internship: Internship): Promise<MatchResult> {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Compare this student profile with the internship requirements and provide a match score (0-100) and a brief reasoning.
      
      Student Profile:
      Skills: ${student.skills.join(", ")}
      Interests: ${student.interests.join(", ")}
      Domain: ${student.preferredDomain}
      Resume Skills: ${student.extractedData?.skills.join(", ") || "None"}
      
      Internship:
      Title: ${internship.title}
      Required Skills: ${internship.requiredSkills.join(", ")}
      Description: ${internship.description}`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            score: { type: Type.NUMBER },
            reasoning: { type: Type.STRING },
          },
          required: ["score", "reasoning"],
        },
      },
    });

    return JSON.parse(response.text);
  }
};
