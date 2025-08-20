# Modern Portfolio Website

A beautiful, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features dark/light mode, smooth animations, and a comprehensive project showcase.

## 🌟 Features

- **Modern Design**: Clean, professional design with gradient backgrounds and smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Dark/Light Mode**: Toggle between dark and light themes with persistent storage
- **Type Safe**: Built with TypeScript for better development experience
- **Performance**: Optimized with Next.js 14 App Router for fast loading
- **SEO Friendly**: Proper metadata, OpenGraph, and Twitter card tags
- **Interactive**: Smooth animations with Framer Motion
- **Project Filtering**: Client-side filtering for projects by category
- **Contact Form**: Functional contact form with validation

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── experience/        # Experience page
│   ├── projects/          # Projects page and dynamic routes
│   ├── skills/            # Skills page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── not-found.tsx      # 404 page
├── components/            # Reusable components
│   ├── layout/            # Layout components (Navbar, Footer)
│   └── ui/                # UI components
├── data/                  # Data files (IMPORTANT: Edit these!)
│   ├── about.ts           # About page content
│   ├── contact.ts         # Contact information
│   ├── experience.ts      # Work experience
│   ├── hero.ts            # Hero section content
│   ├── projects.ts        # Project information
│   ├── site.ts            # Site-wide information
│   ├── skills.ts          # Skills and technologies
│   └── types.ts           # TypeScript interfaces
├── lib/                   # Utility functions
├── providers/             # React context providers
└── public/               # Static assets
    └── images/           # Images (ADD YOUR IMAGES HERE!)
```

## 🎨 Customization Guide

### 1. Personal Information

Edit the files in the `/data` directory to customize content:

**Site Information** (`/data/site.ts`):
- Update name, title, description
- Modify navigation links
- Change social media links

**Hero Section** (`/data/hero.ts`):
- Change name and title
- Update subtitle/bio
- Modify call-to-action text

**About Page** (`/data/about.ts`):
- Replace bio text
- Update career highlights
- Change personal stats

### 2. Projects

Edit `/data/projects.ts` to add your projects:

```typescript
{
  id: 'unique-project-id',
  title: 'Project Name',
  description: 'Short description',
  longDescription: 'Detailed description...',
  technologies: ['React', 'Node.js', 'MongoDB'],
  category: 'Web Development',
  featured: true,
  imagePath: '/images/projects/project-image.jpg',
  githubUrl: 'https://github.com/...',
  liveUrl: 'https://project-url.com',
  status: 'completed'
}
```

### 3. Experience

Update `/data/experience.ts` with your work history:

```typescript
{
  id: 'unique-id',
  company: 'Company Name',
  position: 'Job Title',
  startDate: '2023-01',
  endDate: null, // null for current position
  description: 'Job description...',
  achievements: ['Achievement 1', 'Achievement 2'],
  technologies: ['Tech1', 'Tech2'],
  location: 'City, State'
}
```

### 4. Skills

Modify `/data/skills.ts` to update your skills. Categories are:
- Languages
- Frontend
- Backend
- Databases
- Mobile
- Tools
- Project Management

### 5. Images

Add your images to the `/public/images/` directory:

```
/public/images/
├── headshot.jpg           # Your professional photo
├── og-image.jpg           # Social sharing image
└── projects/              # Project screenshots
    ├── project1.jpg
    ├── project2.jpg
    └── ...
```

**Image Requirements**:
- Headshot: 400x400px, square format
- Project images: 800x400px, 2:1 aspect ratio
- OG image: 1200x630px for social sharing

### 6. Colors and Styling

The color scheme can be customized in `tailwind.config.ts`:

```typescript
colors: {
  electric: {
    500: '#3b82f6', // Primary blue
    600: '#2563eb',
    // ... other shades
  }
}
```

### 7. Contact Information

Update `/data/contact.ts`:
- Change email address
- Update location
- Modify availability status
- Update social links

## 🛠 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Pages

1. Create a new folder in `/app`
2. Add a `page.tsx` file
3. Update navigation in `/data/site.ts`

### Adding New Components

1. Create component in `/components/ui` or `/components/layout`
2. Export from the component file
3. Import where needed

## 🔧 Configuration

### Environment Variables

No environment variables required for basic functionality.

### SEO Configuration

Update metadata in:
- `/app/layout.tsx` (global)
- Individual page files (page-specific)

### Theme Configuration

The theme system uses:
- `providers/theme-provider.tsx` - Theme context
- `components/ui/theme-toggle.tsx` - Toggle component
- Default theme: Dark mode

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify

1. Build command: `npm run build`
2. Publish directory: `out`
3. Deploy

### Other Platforms

The site exports static files and can be deployed to any static hosting service.

## 🎯 Performance Tips

- Images are automatically optimized with Next.js Image component
- Fonts are preloaded for better performance
- Components use proper lazy loading
- CSS is optimized with Tailwind purging

## 📱 Responsive Design

Breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔍 SEO Features

- Proper HTML structure
- Meta tags and OpenGraph
- JSON-LD structured data (can be added)
- Sitemap generation (can be added)
- Canonical URLs

## 🐛 Troubleshooting

**Images not loading?**
- Check file paths in data files
- Ensure images exist in `/public/images/`
- Verify image file names match data

**Build errors?**
- Run `npm run lint` to check for TypeScript errors
- Ensure all data files have proper exports
- Check for missing imports

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

**Need help customizing your portfolio?** Check the TODO comments in the code for specific areas that need your personal content.