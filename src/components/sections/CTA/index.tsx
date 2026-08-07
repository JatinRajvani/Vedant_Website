import React from "react";
import Section from "../../foundation/Section";
import Container from "../../foundation/Container";
import Typography from "../../foundation/Typography";
import Button from "../../foundation/Button";

export default function CTASection() {
  return (
    <Section background="gradient" spacing="default" id="cta" className="relative overflow-hidden border-t border-zinc-800">
      {/* Decorative Radial dots */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

      <Container size="default" className="text-center relative z-10 space-y-6">
        <Typography variant="h2" as="h2" className="text-white font-bold leading-tight max-w-2xl mx-auto">
          Start Your Journey to a Successful CMA Career Today
        </Typography>
        <Typography variant="body" className="text-zinc-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          Have questions about registrations, classes, syllabus, or coaching schedules? Submit a quick inquiry and let Sunil Sir and Bharat Sir guide you.
        </Typography>
        <div className="pt-4">
          <Button variant="secondary" size="lg" href="/contact" className="px-10 justify-center">
            Inquire Now
          </Button>
        </div>
      </Container>
    </Section>
  );
}

