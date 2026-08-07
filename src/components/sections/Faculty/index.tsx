import React from "react";
import Section from "../../foundation/Section";
import Container from "../../foundation/Container";
import Typography from "../../foundation/Typography";
import FacultyCard from "../../cards/FacultyCard";
import { facultyList } from "../../../data/faculty";

export default function FacultySection() {
  return (
    <Section background="default" spacing="default" id="faculty">
      <Container size="wide" className="text-center">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-block text-xs font-bold uppercase tracking-wider text-brand-blue bg-brand-blue-50 dark:bg-brand-blue-900/20 px-3 py-1 rounded-full">
            Expert Mentors
          </div>
          <Typography variant="h2" as="h2" className="text-brand-dark dark:text-white font-bold leading-tight">
            Meet Our Founders & Faculty
          </Typography>
          <Typography variant="body" className="text-zinc-500 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Our academy is built on the vision and pedagogical expertise of our founders. Learn directly from certified professionals who guide you at every stage.
          </Typography>
        </div>

        {/* Faculty Grid (Founders Horizontal style) */}
        <div className="grid lg:grid-cols-2 gap-8">
          {facultyList.map((member) => (
            <FacultyCard
              key={member.id}
              name={member.name}
              designation={member.designation}
              experience={member.experience}
              details={member.details}
              layout="horizontal"
              imageSrc={member.imageSrc}
              href={member.href}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

