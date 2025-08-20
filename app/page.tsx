import HomePage from "@/components/home/home-main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobin | Full Stack Developer & Mobile App Developer",
  description:
    "Hi, I’m Mobin, a Full Stack Developer and Mobile App Developer. I build modern, fast, and scalable web and mobile applications. Explore my portfolio, projects, and professional experience.",
  keywords: [
    "Mobin",
    "Full Stack Developer",
    "Mobile App Developer",
    "Web Development",
    "Mobile App Development",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "Portfolio",
    "Projects",
    "Software Developer",
  ],
  openGraph: {
    title: "Mobin | Full Stack Developer & Mobile App Developer",
    description:
      "Discover Mobin’s portfolio and projects. I build web and mobile applications using modern technologies with clean, scalable code.",
    url: "https://mobin.dev",
    siteName: "Mobin Portfolio",
    type: "website",
  },
};

export default function Home() {
  return <HomePage />;
}
