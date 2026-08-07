import React from "react";
import Section from "../../foundation/Section";
import Container from "../../foundation/Container";
import Typography from "../../foundation/Typography";
import TestimonialCard from "../../cards/TestimonialCard";
import { testimonials } from "../../../data/testimonials";

export default function TestimonialsSection() {
  return (
    <Section background="light" spacing="default" id="testimonials">
      <Container size="wide" className="text-center">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-block text-xs font-bold uppercase tracking-wider text-brand-red bg-brand-red/10 px-3 py-1 rounded-full">
            Success Stories
          </div>
          <Typography variant="h2" as="h2" className="text-brand-dark dark:text-white font-bold leading-tight">
            What Our Students Say
          </Typography>
          <Typography variant="body" className="text-zinc-500 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Read and watch reviews from student qualifiers who have cracked their CMA examinations under our structured mentorship.
          </Typography>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              course={testimonial.course}
              text={testimonial.text}
              youtubeId={testimonial.youtubeId}
              imageSrc={testimonial.imageSrc}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

