import React from "react";
import Section from "../../foundation/Section";
import Container from "../../foundation/Container";
import Typography from "../../foundation/Typography";
import Card from "../../cards/ContactCard"; // We can compose using Card, or just write Card inside. Wait! It is cleaner to use base Card + custom layouts directly.
import BaseCard from "../../foundation/Card";

interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function WhyChooseUsSection() {
  const features: FeatureItem[] = [
    {
      title: "Expert Faculty Team",
      description: "Classes are led directly by veteran CMA instructors who bring years of real-world corporate finance experience and deep academic coaching mastery.",
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-4-9 4 9 5zm0 0v6m-3-3h6" />
        </svg>
      )
    },
    {
      title: "Uncompromising Concept Clarity",
      description: "We prioritize conceptual foundations over rote memorization. Understanding the 'why' behind corporate laws and accounts helps crack complex case studies easily.",
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Result-Oriented Method",
      description: "A solid history of producing All India Rankers (AIR). Backed by an intensive study planner, topic-wise chapter tests, and regular exam evaluations.",
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z" />
        </svg>
      )
    },
    {
      title: "Personalized Student Mentoring",
      description: "Batches are structured to enable direct interaction. Includes customized doubt-solving sessions, regular performance tracking, and direct counseling support.",
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  return (
    <Section background="light" spacing="default" id="why-choose-us">
      <Container size="wide" className="text-center">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-block text-xs font-bold uppercase tracking-wider text-brand-red bg-brand-red/10 px-3 py-1 rounded-full">
            Our Core Strengths
          </div>
          <Typography variant="h2" as="h2" className="text-brand-dark dark:text-white font-bold leading-tight">
            Why Choose Vedant Academy?
          </Typography>
          <Typography variant="body" className="text-zinc-500 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            We provide a dedicated academic ecosystem optimized specifically for CMA aspirants, taking you from fundamentals to professional certification.
          </Typography>
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <BaseCard
              key={index}
              variant="default"
              hover={true}
              className="flex flex-col p-6 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 text-left h-full"
            >
              {/* Icon Container */}
              <div className="flex items-center justify-center h-12 w-12 rounded-2xl bg-brand-blue-50 dark:bg-brand-blue-900/20 text-brand-blue dark:text-brand-blue-400 shrink-0 mb-5">
                {feature.icon}
              </div>

              {/* Title & Description */}
              <div className="space-y-3 flex-grow">
                <Typography variant="h3" as="h3" className="font-bold text-lg text-brand-dark dark:text-white leading-tight">
                  {feature.title}
                </Typography>
                <Typography variant="body" className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                  {feature.description}
                </Typography>
              </div>
            </BaseCard>
          ))}
        </div>
      </Container>
    </Section>
  );
}

