import ProjectMain from "@/components/projects/project-main";
import { PRODUCTION_SITE_URL } from "@/lib/utils";
import { Metadata } from "next";

const ogPreviewImage = PRODUCTION_SITE_URL + "/og-images" + "/projects.webp";

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
    url: `${PRODUCTION_SITE_URL}/projects`,
    siteName: "Mobin Portfolio",
    type: "website",
    images: [
      {
        url: ogPreviewImage,
        width: 1200,
        height: 630,
        alt: "Projects - Full Stack Developer & Mobile App Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Full Stack Developer & Mobile App Developer",
    description:
      "Explore my portfolio of web and mobile applications, showcasing modern technologies, clean architecture, and responsive design.",
    images: [ogPreviewImage],
    creator: "@MobinRayhan",
  },
  other: {
    "og:image": ogPreviewImage,
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image:alt": "Projects - Full Stack Developer & Mobile App Developer",
  },
};

export default function ProjectsPage() {
  return <ProjectMain />;
}
