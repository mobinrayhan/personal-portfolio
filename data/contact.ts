import { ContactData } from "./types";

export const contactData: ContactData = {
  email: "contact@mobin.dev",
  location: "Narayanganj, Dhaka, Bangladesh",
  availability: "Available for new opportunities",
  socialLinks: [
    { name: "GitHub", href: "https://github.com/mobinrayhan", icon: "Github" },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/rayhanuddinmobin",
      icon: "Linkedin",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/mobin606272",
      icon: "Instagram",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/rayhanuddinmobin",
      icon: "Facebook",
    },
  ],
  formFields: {
    name: "Full Name",
    email: "Email Address",
    message: "Message",
  },
};
