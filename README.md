# Developer Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features a sophisticated gradient black aesthetic with dark/light mode support.

## 🚀 Features

- **Modern Design**: Gradient black aesthetic with elegant transitions
- **Dark/Light Mode**: Seamless theme switching with persistent preferences
- **Responsive**: Mobile-first design that works on all devices
- **Performance**: Optimized with Next.js 14 App Router and static generation
- **SEO Optimized**: Comprehensive metadata and OpenGraph tags
- **Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation

## 📁 Project Structure

\`\`\`
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── experience/        # Experience timeline
│   ├── projects/          # Projects listing and detail pages
│   ├── skills/            # Skills showcase
│   ├── layout.tsx         # Root layout with navigation
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── navbar.tsx        # Navigation component
│   ├── footer.tsx        # Footer component
│   ├── theme-toggle.tsx  # Dark/light mode toggle
│   └── ...               # Other custom components
├── data/                 # Content data files
│   ├── types.ts          # TypeScript interfaces
│   ├── site.ts           # Site configuration
│   ├── hero.ts           # Homepage content
│   ├── about.ts          # About page content
│   ├── skills.ts         # Skills data
│   ├── projects.ts       # Projects data
│   ├── experience.ts     # Work experience
│   └── contact.ts        # Contact information
├── lib/                  # Utility functions
└── public/               # Static assets
\`\`\`

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Manrope
- **Theme**: next-themes
- **Animations**: Framer Motion (ready to implement)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
\`\`\`bash
git clone <your-repo-url>
cd portfolio-website
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

3. Start the development server:
\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## ✏️ Customization

### 1. Update Personal Information

Edit the data files in the `/data` directory:

- `data/site.ts` - Site name, navigation, social links
- `data/hero.ts` - Homepage hero content
- `data/about.ts` - About page content and stats
- `data/skills.ts` - Technical skills by category
- `data/projects.ts` - Project portfolio
- `data/experience.ts` - Work experience timeline
- `data/contact.ts` - Contact information

### 2. Replace Images

Replace placeholder images in the `/public` directory:

- `professional-headshot.png` - Your professional photo
- `ecommerce-website-screenshot.png` - Project screenshots
- `task-management-app.png`
- `weather-dashboard.png`
- `blog-cms-interface.png`

### 3. Update Metadata

Update SEO metadata in:
- `app/layout.tsx` - Global metadata
- Individual page files - Page-specific metadata

### 4. Customize Styling

The design system uses CSS custom properties defined in `app/globals.css`. Key customization areas:

- **Colors**: Update the color tokens in the `:root` and `.dark` selectors
- **Fonts**: Modify font imports in `app/layout.tsx`
- **Gradients**: Adjust gradient utilities in `globals.css`

## 📱 Pages Overview

- **Homepage** (`/`) - Hero section, featured projects, skills preview
- **About** (`/about`) - Detailed bio, highlights, stats, professional photo
- **Skills** (`/skills`) - Categorized technical skills
- **Projects** (`/projects`) - Filterable project grid with detail pages
- **Experience** (`/experience`) - Professional timeline with achievements
- **Contact** (`/contact`) - Contact form and social links

## 🎨 Design System

### Colors
- **Primary**: Vibrant pink accent (#ff4081)
- **Background**: Deep blacks and elegant grays
- **Text**: High contrast for accessibility

### Typography
- **Headings**: Geist Sans
- **Body**: Manrope
- **Scale**: Responsive typography with proper hierarchy

### Components
- Consistent spacing and border radius
- Subtle shadows and hover effects
- Smooth transitions and animations

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with each push

### Other Platforms

Build the static site:
\`\`\`bash
npm run build
\`\`\`

The built files will be in the `.next` directory.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](issues).

---

**Note**: Remember to update all TODO comments in the data files with your actual information before deploying to production.
