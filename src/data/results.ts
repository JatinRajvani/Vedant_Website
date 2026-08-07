export interface TopperResult {
  id: string;
  name: string;
  rank: string;
  course: string;
  score?: string;
  year?: string;
  imageSrc?: string;
}

export const results: TopperResult[] = [
  {
    id: "rohan-patel",
    name: "Rohan Patel",
    rank: "AIR 12",
    course: "CMA Intermediate",
    score: "356 / 400",
    year: "Dec 2025"
  },
  {
    id: "sneha-sharma",
    name: "Sneha Sharma",
    rank: "AIR 24",
    course: "CMA Foundation",
    score: "378 / 400",
    year: "June 2025"
  },
  {
    id: "amit-verma",
    name: "Amit Verma",
    rank: "AIR 36",
    course: "CMA Final",
    score: "580 / 800",
    year: "Dec 2025"
  },
  {
    id: "priya-shah",
    name: "Priya Shah",
    rank: "AIR 48",
    course: "CMA Intermediate",
    score: "335 / 400",
    year: "June 2025"
  }
];
