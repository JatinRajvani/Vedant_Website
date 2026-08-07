import React from "react";
import Section from "../../foundation/Section";
import Container from "../../foundation/Container";
import Typography from "../../foundation/Typography";
import CourseCard from "../../cards/CourseCard";
import { courses } from "../../../data/courses";

export default function CoursesSection() {
  return (
    <Section background="default" spacing="default" id="courses">
      <Container size="wide" className="text-center">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-block text-xs font-bold uppercase tracking-wider text-brand-blue bg-brand-blue-50 dark:bg-brand-blue-900/20 px-3 py-1 rounded-full">
            Our Curriculum
          </div>
          <Typography variant="h2" as="h2" className="text-brand-dark dark:text-white font-bold leading-tight">
            Comprehensive CMA Coaching Programs
          </Typography>
          <Typography variant="body" className="text-zinc-500 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Choose your current level in the Cost and Management Accounting (CMA) stream. We support students from foundation fundamentals to final-level strategic audits.
          </Typography>
        </div>

        {/* Courses Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              description={course.description}
              duration={course.duration}
              mode={course.mode}
              badge={course.badge}
              featured={course.featured}
              href={course.href}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

