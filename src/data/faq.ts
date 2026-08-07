export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqList: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is the professional scope of a CMA qualification?",
    answer: "A Cost and Management Accountant (CMA) has high professional demand in India and globally. CMAs specialize in corporate financial planning, product costing, treasury operations, cost audits, and strategic business analysis. They hold key management positions such as Finance Managers, Cost Analysts, and Chief Financial Officers (CFOs)."
  },
  {
    id: "faq-2",
    question: "What coaching modes do you offer at Vedant Academy?",
    answer: "We offer both offline classroom sessions at our Ahmedabad branch and online interactive live classes. All lectures are recorded and made available to students for revision and backup support."
  },
  {
    id: "faq-3",
    question: "What is the eligibility criteria for entering the CMA Foundation level?",
    answer: "Students who have passed their Class 10+2 (Higher Secondary Exam) or equivalent from a recognized board can register for the CMA Foundation course. Students waiting for results can also register provisionally."
  },
  {
    id: "faq-4",
    question: "How do your test series and concept doubt-solving systems operate?",
    answer: "We run a structured evaluation schedule: topic-wise exams at the end of each chapter, followed by comprehensive full-syllabus mock exams. Doubt-solving is handled daily in interactive doubt hours with Sunil Sir and Bharat Sir directly."
  }
];
