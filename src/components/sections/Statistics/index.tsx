import React from "react";
import Section from "../../foundation/Section";
import Container from "../../foundation/Container";
import StatisticCard from "../../cards/StatisticCard";

export default function StatisticsSection() {
  return (
    <Section background="dark" spacing="small" id="statistics" className="border-t border-b border-zinc-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.02] pointer-events-none" />
      <Container size="wide">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <StatisticCard
            value="50+"
            label="All India Ranks (AIR)"
            icon={
              <svg className="h-6 w-6 text-brand-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-4-9 4 9 5zm0 0v6m-3-3h6" />
              </svg>
            }
          />
          <StatisticCard
            value="95%+"
            label="Passing Success Rate"
            icon={
              <svg className="h-6 w-6 text-brand-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z" />
              </svg>
            }
          />
          <StatisticCard
            value="10+"
            label="Years of Excellence"
            icon={
              <svg className="h-6 w-6 text-brand-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            }
          />
          <StatisticCard
            value="5000+"
            label="Students Mentored"
            icon={
              <svg className="h-6 w-6 text-brand-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            }
          />
        </div>
      </Container>
    </Section>
  );
}

