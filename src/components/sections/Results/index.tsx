import React from "react";
import Section from "../../foundation/Section";
import Container from "../../foundation/Container";
import Typography from "../../foundation/Typography";
import ResultCard from "../../cards/ResultCard";
import { results } from "../../../data/results";

export default function ResultsSection() {
  return (
    <Section background="light" spacing="default" id="results">
      <Container size="wide" className="text-center">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-block text-xs font-bold uppercase tracking-wider text-brand-red bg-brand-red/10 px-3 py-1 rounded-full">
            Our Hall of Fame
          </div>
          <Typography variant="h2" as="h2" className="text-brand-dark dark:text-white font-bold leading-tight">
            Our CMA Rank Holders & Toppers
          </Typography>
          <Typography variant="body" className="text-zinc-500 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Excellence is not an accident—it is a habit. We celebrate our students who have secured All India Ranks and high scores through their dedication.
          </Typography>
        </div>

        {/* Results grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {results.map((result) => (
            <ResultCard
              key={result.id}
              name={result.name}
              rank={result.rank}
              course={result.course}
              score={result.score}
              year={result.year}
              imageSrc={result.imageSrc}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

