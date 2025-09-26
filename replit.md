# Overview

Shark Tank Lingo is a modern, responsive educational website that demystifies complex business terminology from Shark Tank India. The application serves as an interactive glossary where business terms are explained in simple, layman's language, supported by real-world examples, Shark Tank references, and quotes from Indian judges. The platform targets casual Shark Tank viewers, aspiring entrepreneurs, students, and anyone looking to understand startup terminology without jargon.

The application features a searchable glossary, gamified quizzes, curated learning paths, and a blog section. It's designed as a static website with no authentication requirements, prioritizing accessibility and educational engagement through a playful, Duolingo-meets-startup-school approach.

# Recent Changes

## Category Reorganization (August 30, 2025)
- Consolidated business term categories from 17 to 11 categories for better organization
- Removed 4 empty categories: testing-feedback, startup-culture, product-development, customer-growth  
- Merged funding-investment → valuation-funding for better term distribution
- Merged operations-supply and product-tech → product-operations for operational coherence
- Split financial-accounting → financial-metrics (performance indicators) and business-accounting (accounting processes)
- Updated TypeScript types to reflect new category structure
- All 141+ business terms successfully redistributed across optimized categories

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The application is built as a single-page application (SPA) using React with TypeScript. The architecture follows a component-based design pattern with:

- **React Router**: Uses Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management and local React state for UI interactions
- **Component Library**: shadcn/ui components built on Radix UI primitives for consistent, accessible UI elements
- **Styling**: Tailwind CSS with a custom Shark Tank-inspired color palette and Playfair Display serif fonts
- **Build System**: Vite for fast development and optimized production builds

## Backend Architecture
The backend uses Express.js with TypeScript, following a simple REST API pattern:

- **Server Framework**: Express.js with middleware for JSON parsing and request logging
- **Database Layer**: Drizzle ORM configured for PostgreSQL with schema definitions in shared directory
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Development**: Vite integration for seamless full-stack development

## Data Architecture
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema Management**: Centralized schema definitions in `/shared/schema.ts` for type sharing between frontend and backend
- **Data Storage**: Business terms, quiz questions, and blog posts are currently stored as TypeScript data files for static content

## Design System
- **Color Palette**: Shark Tank-inspired gradient colors (#010326, #0F468C, #0578A6, #049DBF, #F2C744)
- **Typography**: Playfair Display for headings (serif) and Inter for body text
- **Component System**: Consistent design tokens through CSS variables and Tailwind configuration
- **Responsive Design**: Mobile-first approach with Material Design influence

## Key Features Architecture
- **Search Functionality**: Client-side filtering with custom hooks for term searching and categorization
- **Quiz System**: Interactive quiz engine with progress tracking and explanations
- **Content Organization**: Themed collections and categorized learning paths
- **Educational Content**: Structured business term definitions with multiple explanation layers

# External Dependencies

## Core Framework Dependencies
- **React**: Frontend UI framework with TypeScript support
- **Express.js**: Backend server framework
- **Vite**: Build tool and development server
- **Wouter**: Lightweight routing library for React

## Database and ORM
- **PostgreSQL**: Primary database (configured via DATABASE_URL environment variable)
- **Drizzle ORM**: Type-safe database toolkit with migration support
- **@neondatabase/serverless**: Serverless PostgreSQL client

## UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Unstyled, accessible UI primitives
- **shadcn/ui**: Pre-built component library
- **Lucide React**: Icon library
- **Google Fonts**: Typography (Playfair Display, Inter)

## State Management and Data Fetching
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form state management with validation
- **Zod**: Schema validation library

## Development and Build Tools
- **TypeScript**: Type safety across the application
- **ESBuild**: Fast JavaScript bundler for production
- **PostCSS**: CSS processing with Autoprefixer
- **Drizzle Kit**: Database migration and schema management tools

## Session and Storage
- **connect-pg-simple**: PostgreSQL session store for Express
- **date-fns**: Date manipulation library

The application is designed to be deployed on platforms like Vercel or Netlify, with the database hosted on services like Neon or Supabase for PostgreSQL support.