import { projectDelivered } from "./experience";
import { technologyMastered } from "./skills";
import { AboutData } from "./types";

export const yearsOfExperience = `${new Date().getFullYear() - 2022}+`;
export const totalProjects = 10 + "+";
export const happyClients = 10;

export const aboutData: AboutData = {
  bio: `I'm a passionate full-stack developer with over ${yearsOfExperience} years of experience building web applications and mobile solutions. My journey started with a curiosity for how things work on the web, and it has evolved into a deep expertise in modern JavaScript ecosystems, cloud technologies, and user experience design.

I specialize in creating scalable applications using React, Next.js, and Node.js, while also having strong experience in mobile development with React Native. I believe in writing clean, maintainable code and following best practices for performance and accessibility.

When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical blog posts and mentoring junior developers.`,
  highlights: [
    `Led development of ${totalProjects} production applications`,
    "Expert in modern React ecosystem and TypeScript",
    "Strong advocate for accessibility and performance",
    "Active contributor to open-source projects",
    "Experienced in Agile development methodologies",
    "Passionate about mentoring and knowledge sharing",
  ],
  headshotPath: "/images/headshot.jpg", // TODO: Add professional headshot
  stats: [
    { label: "Years Experience", value: yearsOfExperience },
    { label: "Projects Completed", value: projectDelivered },
    { label: "Technologies Mastered", value: technologyMastered + "+" },
    { label: "Happy Clients", value: happyClients + "+" },
  ],
};
