import editorAcademy from "@/assets/editors-academy.webp";
import jamesPrincePortfolio from "@/assets/james-prince-portfolio.webp";
import kreatech from "@/assets/kreatech.webp";
import mobinPortfolio from "@/assets/mobin-portfolio.webp";
import nirogKidsApp from "@/assets/nirog-kids-app.webp";
import nirogKids from "@/assets/nirog-kids.webp";
import renixCareApp from "@/assets/renix-care-app.webp";
import renixCare from "@/assets/renix-care.webp";
import roaylBlue from "@/assets/royal-blue.webp";
import soundei from "@/assets/soundei.webp";
import zoftIt from "@/assets/zoft-it.webp";

import { ProjectsData } from "./types";

export const projectsData: ProjectsData = {
  projects: [
    {
      id: "editors-academy",
      title: "Editors Academy",
      description:
        "Professional video streaming & course platform with DRM considerations, subscription management, and secure content delivery.",
      longDescription: `Built a streaming platform geared toward education and premium video content. The application includes user authentication, subscription management, protected content delivery, and an operational dashboard.

Frontend uses Next.js + TypeScript for fast navigation and Lighthouse‑friendly performance. Backend services run on Node.js with MySQL for reliable relational data. CI/CD pipelines and Dockerized deploys ensure consistent releases across staging and production. The result is a resilient, scalable foundation for DRM‑aware video streaming and monetization.`,
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "MySQL",
        "Docker",
        "VPS Deployment",
        "CI/CD",
        "DRM Awareness",
        "Payment Gateway Integration",
        "SSL Commerz",
        "Umami",
      ],
      category: ["Web Application", "Streaming", "Education"],
      featured: true,
      imagePath: editorAcademy.src,
      githubUrl: "https://github.com/mobinrayhan",
      liveUrl: "https://editors.academy",
      status: "completed",
    },

    {
      id: "renix-care",
      title: "Renix Care",
      description:
        "Healthcare commerce platform with Next.js web app, React Native mobile UI, payments, and VPS deployment.",
      longDescription: `Renix Care needed a secure, user‑friendly way to sell Unani & natural wellness products online while supporting content and customer care. I contributed to the web app using Next.js (App Router) for SEO‑friendly routing and fast rendering, and collaborated with the backend team on Node.js/MySQL services. The system integrates SSL Commerz for payment processing and includes order tracking and notifications.

I also supported the mobile experience (React Native) to ensure consistent UI patterns, performance, and accessibility. CI/CD and VPS deployment practices keep updates reliable and cost‑efficient. The result is a cohesive healthcare commerce experience across devices.`,
      technologies: [
        "Next.js",
        "App Router",
        "React Native",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Payment Gateway Integration",
        "SSL Commerz",
        "MySQL",
        "Jenkins",
        "VPS Deployment",
        "Umami",
      ],
      category: ["Web Application", "Healthcare", "E‑commerce"],
      featured: true,
      imagePath: renixCare.src,
      githubUrl: "https://github.com/mobinrayhan",
      liveUrl: "https://renixcare.com/",
      status: "completed",
    },

    {
      id: "nirog-kids",
      title: "Nirog Kids",
      description:
        "Children’s healthcare platform with profiles, vaccination schedules, appointments, and secure, scalable REST APIs.",
      longDescription: `Nirog Kids provides caregivers with tools to manage child wellness—profiles, medical records, vaccinations, and appointment booking. I built the platform using React for the front‑end, Node.js for REST APIs, and MongoDB for flexible data models. The app supports authenticated accounts, responsive UI, and payment gateway integration for premium services.

The goal was a trustworthy, accessible healthcare technology product for families, with emphasis on performance, privacy, and ease of use.`,
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Payment Gateway Integration",
        "SSL Commerz",
        "Tailwind CSS",
        "REST API",
        "Umami",
      ],
      category: [
        "Healthcare",
        "Web Application",
        "Custom Software Development",
      ],
      featured: false,
      imagePath: nirogKids.src,
      githubUrl: "https://github.com/mobinrayhan",
      liveUrl: "https://nirogkids.com",
      status: "completed",
    },

    {
      id: "royal-blue",
      title: "Royal Blue E‑commerce Platform",
      description:
        "Full‑stack e‑commerce with Next.js, Node.js, MongoDB, secure payments (SSL Commerz), and GitHub Actions CI/CD.",
      longDescription: `Royal Blue required an enterprise‑grade, conversion‑oriented storefront for fitness equipment. I architected and built the platform end‑to‑end: catalog, search, cart, checkout, order management, and notifications. The front‑end uses Next.js for fast, SEO‑friendly pages; the backend provides scalable REST APIs in Node.js with MongoDB for product, user, and order data.

Payments are handled via SSL Commerz with secure flows. GitHub Actions automates testing, builds, and deployments for minimal downtime. An admin dashboard enables full CRUD on products and users, role‑based access, and analytics for operational insight.`,
      technologies: [
        "Next.js",
        "Node.js",
        "MongoDB",
        "Tailwind CSS",
        "GitHub Actions",
        "Payment Gateway Integration",
        "SSL Commerz",
        "REST API",
      ],
      category: ["Web Application", "E‑commerce"],
      featured: false,
      imagePath: roaylBlue.src,
      githubUrl: "https://github.com/mobinrayhan",
      liveUrl: "https://royalblue.com.bd",
      status: "completed",
    },

    {
      id: "zoft-it-website",
      title: "Zoft IT Website",
      description:
        "Corporate site for a digital solutions agency—fast Next.js front‑end, responsive UI, motion, and CI/CD‑ready delivery.",
      longDescription: `Zoft IT required a modern website to showcase services spanning SaaS, MVPs, mobile apps, and marketing. I delivered a performance‑focused Next.js + TypeScript front‑end with Framer Motion for subtle animations. The site architecture emphasizes maintainability, accessibility, and search visibility.

Working with a Node.js/MongoDB backend and containerized pipelines, I optimized for developer velocity and repeatable deployments. The end result is a polished agency website that communicates capability and captures leads effectively.`,
      technologies: [
        "Next.js",
        "TypeScript",
        "React",
        "Framer Motion",
        "Node.js",
        "MongoDB",
        "Tailwind CSS",
        "Docker",
        "CI/CD",
      ],
      category: ["Web Application", "Portfolio", "Agency"],
      featured: true,
      imagePath: zoftIt.src,
      githubUrl: "https://github.com/mobinrayhan",
      liveUrl: "https://zoftit.com",
      status: "completed",
    },

    {
      id: "kreatech",
      title: "Kreatech Website Development",
      description:
        "Implemented pages and reusable components using Next.js Server Components, Tailwind CSS, and TypeScript.",
      longDescription: `As a contributing developer, I implemented several pages and UI building blocks for Kreatech's marketing site. The work focused on clean, reusable server components, responsive layouts, and type‑safe code for maintainability. The deliverables aligned with brand guidelines and emphasized fast, accessible experiences.

This engagement highlights collaboration inside an existing codebase and the ability to ship reliably within a modern Next.js + TypeScript stack.`,
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "Server Components",
      ],
      category: ["Web Application", "Frontend Development"],
      featured: false,
      imagePath: kreatech.src,
      githubUrl: "https://github.com/mobinrayhan",
      liveUrl: "https://www.kreatech.ca",
      status: "completed",
    },

    {
      id: "james-prince-website",
      title: "The James Prince Website",
      description:
        "Custom portfolio platform for a filmmaker/YouTuber with SEO-first Next.js, dynamic CMS-like panels, and localized content.",
      longDescription: `James Prince needed a high‑performance personal brand website that could scale with content and audience growth. I designed and built a custom web application using Next.js and React, with server‑rendered, SEO‑optimized pages and an internal admin panel for content operations. The site personalizes copy by location to increase relevance and conversions across regions.

Deployed on a VPS for performance and cost control. The stack includes a lightweight Node.js backend with MongoDB for data and media, and Tailwind CSS for a consistent design system. This project showcases custom web application development, clean architecture, and a content workflow tailored for creators.`,
      technologies: [
        "Next.js",
        "React",
        "Node.js",
        "MongoDB",
        "Tailwind CSS",
        "VPS Deployment",
        "SEO",
      ],
      category: ["Web Application", "Portfolio", "Custom Software Development"],
      featured: true,
      imagePath: jamesPrincePortfolio.src,
      githubUrl: "https://github.com/mobinrayhan",
      liveUrl: "https://thejamesprince.com",
      status: "completed",
    },

    {
      id: "soundei",
      title: "Soundei Music Platform",
      description:
        "Full‑stack web app with core JS ecosystem, REST APIs, Tailwind + Shadcn UI, and production‑ready deployment.",
      longDescription: `Delivered a full‑stack platform with a JavaScript‑first approach. Built REST APIs with Node.js/Express for content, authentication, and user features. Implemented a responsive UI using Tailwind CSS and Shadcn components for rapid, consistent design.

Focused on code quality, performance, and developer ergonomics, including GitHub Actions for CI/CD and VPS deployment for predictable runtime control.`,
      technologies: [
        "JavaScript (ES6+)",
        "Node.js",
        "Express.js",
        "REST API",
        "Tailwind CSS",
        "Shadcn UI",
        "MongoDB",
        "VPS Deployment",
        "GitHub Actions",
      ],
      category: ["Web Application", "Full‑Stack Development"],
      featured: false,
      imagePath: soundei.src,
      githubUrl: "https://github.com/mobinrayhan",
      liveUrl: "https://soundei.com",
      status: "completed",
    },

    {
      id: "renix-care-mobile-app",
      title: "Renix Care Mobile App (Android)",
      description:
        "Cross‑platform healthcare app with React Native + Expo, REST APIs, and CI/CD—patient accounts, records, and appointments.",
      longDescription: `Renix Care required a mobile experience to complement its commerce platform. I built the Android app using React Native with Expo for rapid, cross‑platform development. Navigation flows were implemented with React Navigation and UI with Tailwind‑inspired styling.

Core features include secure auth, health records, appointment scheduling, and provider messaging. A Node.js/Express API with MongoDB backs the app, and CI/CD via GitHub Actions keeps releases predictable. The app was fully implemented and tested but not published due to client release decisions.`,
      technologies: [
        "React Native",
        "Expo",
        "React Navigation",
        "JavaScript (ES6+)",
        "REST API",
        "Node.js",
        "Express.js",
        "MongoDB",
        "VPS Deployment",
        "GitHub Actions",
      ],
      category: ["Mobile Application", "Healthcare Technology"],
      featured: false,
      imagePath: renixCareApp.src,
      githubUrl: "https://github.com/mobinrayhan",
      liveUrl:
        "https://play.google.com/store/apps/details?id=com.renixcare.renixapp&hl=en&pli=1",
      status: "completed",
    },

    {
      id: "nirog-kids-mobile-app",
      title: "Nirog Kids Mobile App (Android)",
      description:
        "React Native + Expo mobile app for child wellness: profiles, vaccination schedules, records, and clinic appointments.",
      longDescription: `Designed and developed a mobile application focused on children's healthcare management. Using React Native (Expo) and React Navigation, I built intuitive flows for profile creation, vaccination reminders, record keeping, and appointment booking. Backend services (Node.js + MongoDB) provide real‑time sync via REST APIs.

CI/CD automations with GitHub Actions and VPS deployment ensure a reliable delivery pipeline. The app reached production‑ready status but was not published in the store due to client release strategy.`,
      technologies: [
        "React Native",
        "Expo",
        "React Navigation",
        "JavaScript (ES6+)",
        "REST API",
        "Node.js",
        "Express.js",
        "MongoDB",
        "VPS Deployment",
        "GitHub Actions",
      ],
      category: [
        "Mobile Application",
        "Healthcare",
        "Custom Software Development",
      ],
      featured: false,
      imagePath: nirogKidsApp.src,
      githubUrl: "https://github.com/mobinrayhan",
      liveUrl:
        "https://play.google.com/store/apps/details?id=nirogkids.com&hl=en",
      status: "completed",
    },
    {
      id: "mobin-portfolio",
      title: "Mobin Rayhan Portfolio",
      description:
        "Personal portfolio website built with Next.js, Tailwind CSS, showcasing projects, skills, and SEO-optimized case studies.",
      longDescription: `Designed and developed my personal portfolio website to showcase web and mobile development expertise. 
The site highlights case studies of real-world projects, skills, and services with a strong focus on SEO optimization, 
performance, and user experience. 

Built using Next.js with the App Router for modern architecture, Tailwind CSS for responsive UI, and Framer Motion for 
smooth animations. Implemented SEO best practices, Open Graph tags, and fast-loading pages for improved discoverability. 
The site is deployed with CI/CD pipelines, ensuring continuous updates with zero downtime. 

This project represents not only technical capability but also branding, design thinking, and the ability to deliver 
a production-grade platform that converts visitors into clients.`,
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Netlify",
        "SEO Optimization",
        "Umami",
      ],
      category: ["Web Application", "Portfolio", "Branding"],
      featured: true,
      imagePath: mobinPortfolio.src,
      githubUrl: "https://github.com/mobinrayhan",
      liveUrl: "https://mobin.dev", // replace with your actual domain
      status: "completed",
    },
  ],
};
