export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  mode: string;
  badge?: string;
  href?: string;
  featured?: boolean;
}

export const courses: Course[] = [
  {
    id: "cma-foundation",
    title: "CMA Foundation",
    description: "Build a rock-solid foundation in basic accounting principles, business laws, ethics, economics, and elementary management mathematics.",
    duration: "3 - 4 Months",
    mode: "Offline / Online",
    badge: "Admissions Open",
    href: "/courses/cma-foundation"
  },
  {
    id: "cma-intermediate",
    title: "CMA Intermediate",
    description: "Master direct & indirect taxation, corporate audit, laws, operations management, and advanced financial accounting structures.",
    duration: "6 - 8 Months",
    mode: "Offline / Online",
    badge: "Most Popular",
    featured: true,
    href: "/courses/cma-intermediate"
  },
  {
    id: "cma-final",
    title: "CMA Final",
    description: "Achieve high-level strategic expertise in corporate financial reporting, cost management, direct tax laws, and valuation audits.",
    duration: "8 - 10 Months",
    mode: "Offline / Online",
    badge: "Advanced Level",
    href: "/courses/cma-final"
  }
];
