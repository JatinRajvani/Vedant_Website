export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  experience: string;
  details: string[];
  imageSrc?: string;
  href?: string;
}

export const facultyList: FacultyMember[] = [
  {
    id: "sunil-sir",
    name: "CMA Sunil Sir",
    designation: "Co-Founder & Lead Faculty",
    experience: "10+ Years of teaching experience",
    details: [
      "Known for excellent conceptual clarity and interactive teaching sessions.",
      "Mentored 1000+ successful CMA qualifiers in Ahmedabad.",
      "Specialist in Management Accounting, Costing, and Strategic Finance."
    ],
    href: "/about"
  },
  {
    id: "bharat-sir",
    name: "CMA Bharat Sir",
    designation: "Co-Founder & Lead Faculty",
    experience: "8+ Years of teaching experience",
    details: [
      "Expert in Direct and Indirect Taxation, Business Laws, and Audits.",
      "Passionate student mentor with customized doubt-clearing strategies.",
      "Provides structured practice case studies modeled directly on exam papers."
    ],
    href: "/about"
  }
];
