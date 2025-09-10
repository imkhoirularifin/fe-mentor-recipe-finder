# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Package Manager**: This project uses pnpm (not npm). Use pnpm commands for dependency management.

- `pnpm dev` - Start development server with TurboPack
- `pnpm build` - Build the application  
- `pnpm lint` - Run ESLint for code quality checks
- `pnpm start` - Start production server
- `pnpm add <package>` - Add dependencies
- `pnpm add -D <package>` - Add dev dependencies

## Project Architecture

This is a Next.js 15 Recipe Finder application using the App Router architecture with the following structure:

### Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4 with custom design system
- **UI Components**: Shadcn/ui (New York style) with Radix UI primitives
- **Icons**: Lucide React
- **Fonts**: Nunito and Nunito Sans (Google Fonts)
- **Development**: TypeScript, ESLint, Prettier

### Directory Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── _components/        # Page-specific components (home)
│   ├── about/             # About page with _components/
│   ├── recipes/           # Recipes page with _components/
│   │   └── [id]/          # Dynamic recipe detail pages
│   ├── layout.tsx         # Root layout with fonts
│   ├── page.tsx          # Home page
│   ├── globals.css       # Global styles
│   └── data.json         # Recipe data (static JSON)
├── components/
│   ├── shared/           # Reusable components (navbar, footer, cta-section)
│   └── ui/               # Shadcn/ui components (button, x-button)
└── lib/
    └── utils.ts          # Utility functions (cn helper)
```

### Data Management

- Recipe data stored in `src/app/data.json` as static JSON
- Each recipe has: id, title, slug, image (large/small), overview, servings, prep/cook times, ingredients, instructions
- Images stored in `/public/assets/images/` directory

### Design System

- Uses custom Tailwind config with text-preset utility classes (text-preset-1 through text-preset-7)
- Custom neutral color palette (x-neutral-300, x-neutral-400, x-neutral-900)
- Component aliases configured: `@/components`, `@/lib`, `@/ui`

### Component Patterns

- Page layouts follow: Navbar > Main > Footer structure
- Page-specific components stored in `_components/` directories
- Custom button component (XButton) extends Shadcn Button
- Mobile-responsive design with hamburger menu navigation

### Key Features

- Recipe browsing and filtering functionality
- Recipe detail pages with dynamic routing
- Responsive design for mobile/tablet/desktop
- Component-based architecture with reusable UI elements
