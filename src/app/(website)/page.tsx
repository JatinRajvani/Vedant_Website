import React from "react";
import HeroSection from "@/components/sections/Hero";
import WhyChooseUsSection from "@/components/sections/WhyChooseUs";
import CoursesSection from "@/components/sections/Courses";
import StatisticsSection from "@/components/sections/Statistics";
import ResultsSection from "@/components/sections/Results";
import FacultySection from "@/components/sections/Faculty";
import TestimonialsSection from "@/components/sections/Testimonials";
import FAQSection from "@/components/sections/FAQ";
import ContactSection from "@/components/sections/Contact";
import CTASection from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="w-full flex flex-col bg-zinc-50/30 dark:bg-zinc-950">
      <HeroSection />
      <WhyChooseUsSection />
      <CoursesSection />
      <StatisticsSection />
      <ResultsSection />
      <FacultySection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <CTASection />
    </div>
  );
}

