export type Skill = {
  name: string;
  icon: React.ReactNode;
  description: string;
  yearsOfExperience: string;
  level: "Expert" | "Advanced" | "Intermediate";
  projects?: string;
};

export type SkillCategory = {
  title: string;
  icon: React.ReactNode;
  color: string;
  skills: Skill[];
};
