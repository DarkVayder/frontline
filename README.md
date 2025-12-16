Frontline
A multi-feature frontend screening application built to demonstrate UI precision, responsiveness, state management, and real-world API integration.
This project consolidates all required screening exercises into one cohesive Next.js application, following best practices for performance, accessibility, and clean code.

Live Demo: https://frontline-seven.vercel.app/

Tech Stack
Next.js (App Router)
React + TypeScript
Tailwind CSS
React Icons / Lucide Icons
React Toastify
LocalStorage API
Fake Store API

Features Overview
The app is divided into three core sections, covering all screening exercises.

Exercise 1: UI Replication (LinkedIn-style Feed)
Goal: Pixel-accurate UI, layout mastery, and responsiveness.
What’s implemented:
LinkedIn-inspired feed UI
Fully responsive layout (Desktop / Tablet / Mobile)
Sidebar navigation (desktop)
Mobile bottom navigation
Stories carousel
Post cards with actions (like, comment, share, repost)
Suggested connections & trending topics
Clean component structure and reusable UI patterns

Focus areas covered:
Layout accuracy
Responsive design
Tailwind utility mastery
Visual hierarchy and spacing

Exercise 2: Interactive Todo List
Goal: JavaScript interactivity, state management, and persistence.
Features:
Add new tasks
Mark tasks as complete / incomplete
Delete tasks

Filter by:
All
Active
Completed

Task persistence using LocalStorage
Priority levels (low / medium / high)
Drag-and-drop task reordering
Toast notifications for actions

Focus areas covered:
React state management
Event handling
LocalStorage persistence
UX feedback & interactions

Exercise 3: Product Listing with API Integration
Goal: Async data handling, API integration, and UI composition.
Features: Fetch products from https://**********/products
Product grid display
Search by product name
Filter by category
Filter by max price

Sorting:
Price (Low → High)
Price (High → Low)

Name
Loading skeletons
Error handling

Empty state handling
Product detail page with:
Optimized images
Real product descriptions
Related products

Focus areas covered:
API fetching
Async state handling
Error & loading states

Performance optimization with next/image
Performance & Optimization
Image optimization using Next.js <Image />
Lazy loading for non-critical images
Responsive image sizing

Reusable components to reduce re-renders
Environment-based API configuration
Accessibility & UX
Mobile-first responsive design
Semantic HTML structure
Accessible buttons and inputs
Clear visual feedback for interactions
Keyboard-friendly interactions

Project Structure (Simplified)
app/
 ├─ products/
 ├─ todos/
 ├─ social/
 ├─ layout.tsx
 ├─ page.tsx
components/
 ├─ ui/
 ├─ Header.tsx
 ├─ Footer.tsx
lib/
 ├─ fetcher.ts
hooks/
 ├─ useLocalStorage.ts

Getting Started
1. Clone the repo
git clone https://github.com/your-username/frontline.git
cd frontline

2. Install dependencies
npm install
# or
yarn install

3. Set environment variables
NEXT_PUBLIC_PRODUCTS_API=https:***********/products

4. Run the app
npm run dev

Decisions & Trade-offs
Single application approach to meet screening requirements
Client-side data fetching for clarity and simplicity
Chose Tailwind CSS for speed, consistency, and responsive control
Avoided over-engineering (no unnecessary state libraries)
Focused on clarity, UX, and real-world patterns
Requirements Checklist
Single GitHub repository
No more than 5 pages
Fully responsive
Clean, linted code
API integration
LocalStorage persistence
Error & loading states
Clear README

