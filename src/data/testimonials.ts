export interface StudentTestimonial {
  id: string;
  name: string;
  course: string;
  text?: string;
  youtubeId?: string;
  imageSrc?: string;
}

export const testimonials: StudentTestimonial[] = [
  {
    id: "t1",
    name: "Rohan Patel",
    course: "CMA Intermediate Topper (AIR 12)",
    text: "Vedant Academy provides the ultimate environment for CMA coaching. Sunil Sir's conceptual teaching and Bharat Sir's tax guidance helped me crack CMA Intermediate with AIR 12 on my first attempt!",
    youtubeId: "dQw4w9WgXcQ"
  },
  {
    id: "t2",
    name: "Sneha Sharma",
    course: "CMA Foundation Topper (AIR 24)",
    text: "Interactive doubt-solving sessions and custom costing mock planners. The study materials provided are extremely comprehensive and exam-focused.",
    youtubeId: "dQw4w9WgXcQ"
  },
  {
    id: "t3",
    name: "Amit Verma",
    course: "CMA Final Qualifier",
    text: "The best part about Vedant Academy is the personalized mentoring. Whenever I had conceptual doubts in Audit or Direct Tax, Bharat Sir resolved them immediately, helping me clear my Finals!"
  }
];
