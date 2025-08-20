import ProjectMain from "@/components/projects/project-main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Full Stack Developer & Mobile App Developer",
  description:
    "Check out my portfolio of web and mobile projects built using React, Next.js, Node.js, MongoDB, PostgreSQL, and more. See examples of responsive, fast, and scalable applications I have developed.",
  keywords: [
    "Full Stack Developer",
    "Mobile App Developer",
    "Web Development",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "Portfolio",
    "Projects",
    "Frontend",
    "Backend",
  ],
  openGraph: {
    title: "Projects | Full Stack Developer & Mobile App Developer",
    description:
      "Explore my portfolio of web and mobile applications, showcasing modern technologies, clean architecture, and responsive design.",
    url: "https://mobin.dev/projects",
    siteName: "Mobin Portfolio",
    type: "website",
  },
};

export default function ProjectsPage() {
  return <ProjectMain />;
}
