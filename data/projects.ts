import { ProjectsData } from './types';

export const projectsData: ProjectsData = {
  projects: [
    {
      id: 'ecommerce-platform',
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with admin dashboard, payment processing, and inventory management.',
      longDescription: `Built a comprehensive e-commerce platform serving over 10,000 users with features including product catalog, shopping cart, secure checkout, order management, and admin dashboard. Implemented real-time inventory tracking, automated email notifications, and integrated multiple payment gateways.

The platform features a responsive design built with Next.js and Tailwind CSS, a robust backend API using Node.js and Express, and a MongoDB database for scalable data storage. Deployed on AWS with CI/CD pipeline for automated testing and deployment.`,
      technologies: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      category: 'Web Development',
      featured: true,
      imagePath: '/images/projects/ecommerce.jpg', // TODO: Add project screenshot
      githubUrl: 'https://github.com/alexjohnson/ecommerce-platform',
      liveUrl: 'https://ecommerce-demo.alexjohnson.dev',
      status: 'completed',
    },
    {
      id: 'task-manager',
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      longDescription: `Developed a comprehensive task management application that helps teams organize, track, and complete projects efficiently. Features include real-time collaboration, task assignment, progress tracking, time logging, and detailed reporting.

The application uses React for the frontend with a modern, intuitive interface, Node.js backend with Socket.io for real-time updates, and PostgreSQL for reliable data storage. Implemented user authentication, role-based permissions, and email notifications for task updates.`,
      technologies: ['React', 'Node.js', 'Socket.io', 'PostgreSQL', 'Redux', 'Material-UI'],
      category: 'Web Application',
      featured: true,
      imagePath: '/images/projects/task-manager.jpg', // TODO: Add project screenshot
      githubUrl: 'https://github.com/alexjohnson/task-manager',
      liveUrl: 'https://tasks.alexjohnson.dev',
      status: 'completed',
    },
    {
      id: 'portfolio-website',
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with Next.js and featuring smooth animations.',
      longDescription: `Created a professional portfolio website showcasing projects, skills, and experience. The site features a modern design with smooth animations, dark/light mode toggle, project filtering, and contact form functionality.

Built with Next.js 14 for optimal performance, TypeScript for type safety, Tailwind CSS for styling, and Framer Motion for animations. The site is fully responsive, accessible, and optimized for search engines with proper meta tags and structured data.`,
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      category: 'Portfolio',
      featured: true,
      imagePath: '/images/projects/portfolio.jpg', // TODO: Add project screenshot
      githubUrl: 'https://github.com/alexjohnson/portfolio',
      liveUrl: 'https://alexjohnson.dev',
      status: 'completed',
    },
    {
      id: 'mobile-fitness-app',
      title: 'Mobile Fitness App',
      description: 'A React Native fitness tracking app with workout plans, progress tracking, and social features.',
      longDescription: `Developed a comprehensive fitness tracking mobile application using React Native, serving both iOS and Android platforms. The app includes personalized workout plans, exercise tracking, progress monitoring, social challenges, and nutrition logging.

Features include offline functionality, push notifications, integration with health APIs, social sharing, and detailed analytics. Used Redux for state management, Firebase for backend services, and implemented custom animations for an engaging user experience.`,
      technologies: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
      category: 'Mobile Development',
      featured: false,
      imagePath: '/images/projects/fitness-app.jpg', // TODO: Add project screenshot
      githubUrl: 'https://github.com/alexjohnson/fitness-app',
      status: 'completed',
    },
    {
      id: 'analytics-dashboard',
      title: 'Analytics Dashboard',
      description: 'A data visualization dashboard for business analytics with real-time charts and reporting.',
      longDescription: `Built a comprehensive analytics dashboard for business intelligence, featuring real-time data visualization, custom reports, and interactive charts. The dashboard processes large datasets and presents insights through intuitive visualizations.

Implemented using React with D3.js for custom visualizations, Node.js backend for data processing, and PostgreSQL for data storage. Features include user permissions, scheduled reports, data export functionality, and responsive design for mobile access.`,
      technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL', 'Chart.js'],
      category: 'Data Visualization',
      featured: false,
      imagePath: '/images/projects/analytics.jpg', // TODO: Add project screenshot
      githubUrl: 'https://github.com/alexjohnson/analytics-dashboard',
      liveUrl: 'https://analytics-demo.alexjohnson.dev',
      status: 'completed',
    },
    {
      id: 'ai-chat-bot',
      title: 'AI Chat Bot Platform',
      description: 'An AI-powered chatbot platform with natural language processing and integration capabilities.',
      longDescription: `Currently developing an advanced AI chatbot platform that leverages natural language processing to provide intelligent conversations and automated customer support. The platform includes chatbot builder, training interface, and integration APIs.

Using Next.js for the frontend, Python with FastAPI for AI processing, and PostgreSQL for data storage. Implementing OpenAI GPT integration, conversation flow builder, analytics dashboard, and multi-channel deployment options.`,
      technologies: ['Next.js', 'Python', 'FastAPI', 'OpenAI', 'PostgreSQL'],
      category: 'AI/ML',
      featured: false,
      imagePath: '/images/projects/chatbot.jpg', // TODO: Add project screenshot
      githubUrl: 'https://github.com/alexjohnson/ai-chatbot',
      status: 'in-progress',
    },
  ],
};