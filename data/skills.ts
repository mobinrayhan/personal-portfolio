import { SkillsData } from "./types";

export const skillsData: SkillsData = {
  categories: [
    {
      name: "Languages",
      skills: ["JavaScript", "TypeScript", "Go"],
    },
    {
      name: "Frontend",
      skills: [
        "HTML",
        "CSS",
        "Tailwind",
        "MUI",
        "React",
        "Next.js",
        "Astro",
        "Progressive Web Apps",
        "Service Workers",
        "Web App Manifest",
      ],
    },
    {
      name: "Backend",
      skills: ["Node.js", "Express.js", "Nest.js"],
    },
    {
      name: "Databases",
      skills: ["MongoDB", "MySQL", "PostgreSQL"],
    },
    {
      name: "Mobile",
      skills: ["React Native (Android, iOS)"],
    },
    {
      name: "Tools",
      skills: [
        "Git",
        "GitHub",
        "Bitbucket",
        "CI/CD (Jenkins, GitHub Actions)",
        "Docker",
        "Kubernetes",
        "pm2",
      ],
    },
    {
      name: "Project Management",
      skills: ["Jira", "Agile (Scrum, Kanban)"],
    },
  ],
};

export const technologyMastered = skillsData.categories.reduce(
  (acc, curr) => acc + curr.skills.length,
  0
);
