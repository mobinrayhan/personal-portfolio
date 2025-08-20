import type { ExperienceData } from "./types"

export const experienceData: ExperienceData = {
  roles: [
    {
      company: "Tech Innovations Inc.", // TODO: Replace with your company
      title: "Senior Full-Stack Developer",
      start: "2022",
      end: "Present",
      location: "San Francisco, CA", // TODO: Replace with your location
      bullets: [
        "Led development of a customer-facing web application serving 100k+ users",
        "Architected and implemented microservices using Node.js and Docker",
        "Mentored junior developers and established coding standards",
        "Improved application performance by 40% through optimization techniques",
      ],
      links: {
        website: "https://techinnovations.com", // TODO: Replace with company website
      },
    },
    {
      company: "Digital Solutions LLC", // TODO: Replace with your company
      title: "Full-Stack Developer",
      start: "2020",
      end: "2022",
      location: "Remote",
      bullets: [
        "Developed and maintained multiple client projects using React and Next.js",
        "Implemented CI/CD pipelines using GitHub Actions and Jenkins",
        "Collaborated with design teams to create pixel-perfect user interfaces",
        "Built RESTful APIs and integrated third-party services",
      ],
      links: {
        website: "https://digitalsolutions.com", // TODO: Replace with company website
      },
    },
    {
      company: "StartupXYZ", // TODO: Replace with your company
      title: "Frontend Developer",
      start: "2019",
      end: "2020",
      location: "New York, NY", // TODO: Replace with your location
      bullets: [
        "Built responsive web applications using React and TypeScript",
        "Implemented state management solutions using Redux and Context API",
        "Worked closely with UX designers to improve user experience",
        "Participated in agile development processes and sprint planning",
      ],
    },
  ],
}
