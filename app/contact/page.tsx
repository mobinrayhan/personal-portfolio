import MainContact from "@/components/contact/main-contact";
import { PRODUCTION_SITE_URL } from "@/lib/utils";
import { Metadata } from "next";

const ogPreviewImage = PRODUCTION_SITE_URL + "/og-images" + "/contact.webp";

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
    url: `${PRODUCTION_SITE_URL}/contact`,
    siteName: "Mobin Portfolio",
    type: "website",
    images: [
      {
        url: ogPreviewImage,
        width: 1200,
        height: 630,
        alt: "Mobin Uddin | Full Stack & Mobile App Developer - Contact Page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Mobin - Full Stack Developer & Mobile App Developer",
    description:
      "Get in touch with Mobin for collaborations, projects, or questions about web and mobile development.",
    images: [ogPreviewImage],
    creator: "@MobinRayhan",
  },
  other: {
    "og:image": ogPreviewImage,
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image:alt":
      "Contact | Mobin - Full Stack Developer & Mobile App Developer",
  },
};

export default function ContactPage() {
  return <MainContact />;
}
