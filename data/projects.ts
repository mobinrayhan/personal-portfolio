import type { ProjectsData } from "./types"

export const projectsData: ProjectsData = {
  projects: [
    {
      id: "project-1",
      slug: "ecommerce-platform",
      name: "E-Commerce Platform",
      tagline: "Modern online shopping experience",
      description:
        "A full-featured e-commerce platform built with Next.js, featuring user authentication, payment processing, inventory management, and an admin dashboard. Includes real-time order tracking and responsive design.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Stripe"],
      links: {
        github: "https://github.com/yourusername/ecommerce-platform", // TODO: Replace with your project
        live: "https://your-ecommerce-demo.vercel.app", // TODO: Replace with your demo
      },
      image: "/ecommerce-website-screenshot.png", // TODO: Replace with project screenshot
      featured: true,
    },
    {
      id: "project-2",
      slug: "task-management-app",
      name: "Task Management App",
      tagline: "Streamline your productivity",
      description:
        "A collaborative task management application with real-time updates, team collaboration features, and advanced filtering. Built with React and Node.js, featuring drag-and-drop functionality and deadline tracking.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io", "Express.js"],
      links: {
        github: "https://github.com/yourusername/task-manager", // TODO: Replace with your project
        live: "https://your-task-manager.vercel.app", // TODO: Replace with your demo
      },
      image: "/task-management-app.png", // TODO: Replace with project screenshot
      featured: true,
    },
    {
      id: "project-3",
      slug: "weather-dashboard",
      name: "Weather Dashboard",
      tagline: "Beautiful weather insights",
      description:
        "An elegant weather dashboard that provides detailed weather information, forecasts, and interactive maps. Features location-based weather data, historical trends, and customizable widgets.",
      tech: ["React", "TypeScript", "Weather API", "Chart.js", "Tailwind CSS"],
      links: {
        github: "https://github.com/yourusername/weather-dashboard", // TODO: Replace with your project
        live: "https://your-weather-dashboard.vercel.app", // TODO: Replace with your demo
      },
      image: "/weather-dashboard.png", // TODO: Replace with project screenshot
      featured: true,
    },
    {
      id: "project-4",
      slug: "blog-cms",
      name: "Blog CMS",
      tagline: "Content management made simple",
      description:
        "A headless CMS for blog management with markdown support, SEO optimization, and multi-author capabilities. Features a clean admin interface and fast static site generation.",
      tech: ["Next.js", "MDX", "PostgreSQL", "Prisma", "Tailwind CSS"],
      links: {
        github: "https://github.com/yourusername/blog-cms", // TODO: Replace with your project
      },
      image: "/blog-cms-interface.png", // TODO: Replace with project screenshot
      featured: false,
    },
  ],
}
