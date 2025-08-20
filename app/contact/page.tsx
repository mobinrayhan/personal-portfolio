import MainContact from "@/components/contact/main-contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Mobin - Full Stack Developer & Mobile App Developer",
  description:
    "Get in touch with Mobin, a Full Stack Developer and Mobile App Developer. Reach out for project inquiries, collaborations, or any questions about web and mobile development.",
  keywords: [
    "Mobin",
    "Full Stack Developer",
    "Mobile App Developer",
    "Contact",
    "Get in touch",
    "Web Development",
    "Mobile App Development",
    "Projects",
    "Collaboration",
  ],
  openGraph: {
    title: "Contact | Mobin - Full Stack Developer & Mobile App Developer",
    description:
      "Reach out to Mobin for project inquiries, collaborations, or questions about web and mobile development.",
    url: "https://mobin.dev/contact",
    siteName: "Mobin Portfolio",
    type: "website",
  },
};

export default function ContactPage() {
  return <MainContact />;
}
