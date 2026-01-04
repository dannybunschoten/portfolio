# Danny Bunschoten - Portfolio Website

A modern, responsive portfolio website showcasing my skills and projects as a Full-Stack Developer and Computer Science Master's student at TU Delft.

## 🚀 Live Demo

Visit the live site: [https://dannybunschoten.com](https://dannybunschoten.com)

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI (shadcn/ui)
- **Animations**: Framer Motion
- **Icons**: Lucide React + Simple Icons
- **Deployment**: VPS with Nginx

## ✨ Features

- **Responsive Design**: Optimized for all device sizes
- **Modern Animations**: Smooth transitions and micro-interactions
- **Performance Optimized**: Fast loading with Next.js optimizations
- **Type Safe**: Full TypeScript implementation
- **Accessible**: WCAG compliant design patterns
- **SEO Friendly**: Optimized meta tags and structure

## 🏗️ Project Structure

```
src/
├── app/
│   ├── components/          # Page components
│   │   ├── About.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── ...
│   ├── images/             # Static images
│   ├── svgIcons/          # SVG icon components
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   └── types.d.ts        # Type definitions
├── components/
│   └── ui/               # Reusable UI components
└── lib/                  # Utilities
```

## 🎯 Key Sections

- **Hero**: Interactive landing section with animated background
- **About**: Professional background and statistics
- **Skills**: Categorized technical skills with experience levels
- **Projects**: Featured project showcase
- **Contact**: Professional links and contact information

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/dannybunschoten/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run convertIcons` - Convert SVG icons to React components

## 🎨 Design System

The project uses a consistent design system with:

- **Colors**: Zinc-based neutral palette with blue/purple accents
- **Typography**: Geist Sans & Geist Mono fonts
- **Spacing**: Tailwind's consistent spacing scale
- **Components**: Radix UI primitives with custom styling

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **Wide**: > 1280px

## 🔍 SEO & Performance

- Optimized meta tags for search engines
- Open Graph tags for social media sharing
- Semantic HTML structure
- Lazy loading for images
- Optimized bundle size

## 📧 Contact

- **Website**: [dannybunschoten.com](https://dannybunschoten.com)
- **LinkedIn**: [linkedin.com/in/danny-bunschoten](https://linkedin.com/in/danny-bunschoten)
- **GitHub**: [github.com/dannybunschoten](https://github.com/dannybunschoten)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
