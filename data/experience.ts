import { ExperienceData } from "./types";

export const experienceData: ExperienceData = {
  experiences: [
    {
      id: "kreatech",
      company: "Kreatech (Hong Kong)",
      position: "Front-End Developer",
      companyLink: "https://www.kreatech.ca",
      startDate: "2025-2",
      endDate: null,
      description:
        "Contributed as a front-end developer for a web and mobile app development agency, delivering high-quality UIs.",
      achievements: [
        "Developed responsive UIs with React and MUI",
        "Collaborated in Agile (Scrum) teams",
        "Optimized performance with clean, reusable code",
      ],
      technologies: ["React", "MUI", "JavaScript", "Go", "Redux"],
      location: "Remote",
    },
    {
      id: "zoft-it",
      company: "Zoft IT",
      position: "Full-Stack Developer & Mobile App Developer",
      companyLink: "https://zoftit.com",
      startDate: "2024-01",
      endDate: "2025-01",
      description:
        "Worked as a full-stack developer and mobile app developer focusing on building scalable web and mobile applications.",
      achievements: [
        "Developed the company website using Next.js",
        "Contributed to building both Android and iOS mobile applications",
        "Managed end-to-end development to ensure smooth performance",
      ],
      technologies: [
        "Next.js",
        "React Native",
        "Node.js",
        "MongoDB",
        "Typescript",
      ],
      location: "Remote",
    },
    {
      id: "james-prince",
      company: "James Prince",
      position: "Full-Stack Web Developer",
      companyLink: "https://www.youtube.com/@JamesPrinceB",
      startDate: "2023-2",
      endDate: null,
      description:
        "Worked on client projects under James Prince, a YouTuber and digital creator, building modern web applications and admin panels.",
      achievements: [
        "Developed full-stack web apps using Next.js, React, and MongoDB",
        "Built admin panels and dynamic websites tailored to client needs",
        "Delivered responsive, SEO-friendly solutions with clean architecture",
      ],
      technologies: ["Next.js", "React", "MongoDB", "Node.js", "Typescript"],
      location: "Remote",
    },
  ],
};

export const companiesWorkWith = 10 + "+";
export const projectDelivered = 17 + "+";
