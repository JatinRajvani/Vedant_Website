import React from "react";
import Section from "../../foundation/Section";
import Container from "../../foundation/Container";
import Typography from "../../foundation/Typography";
import Button from "../../foundation/Button";
import StatisticCard from "../../cards/StatisticCard";

export default function HeroSection() {
  return (
    <Section
      background="gradient"
      className="relative w-full overflow-hidden !pt-24 !pb-20 lg:!pt-32 lg:!pb-28 border-b border-zinc-800"
    >
      {/* Decorative Radial Grid Dots */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

      {/* Background Glow effects */}
      <div className="absolute top-1/4 left-1/10 h-72 w-72 rounded-full bg-brand-blue/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 h-72 w-72 rounded-full bg-brand-red/5 blur-3xl pointer-events-none" />

      <Container size="wide" className="relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Captions */}
          <div className="lg:col-span-7 text-left space-y-6 lg:pr-6">
            {/* Top Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-xs shrink-0 select-none">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red animate-pulse" />
              <Typography variant="caption" className="font-bold tracking-wider text-zinc-300 uppercase text-[10px] sm:text-xs">
                Exclusively For CMA Coaching
              </Typography>
            </div>

            {/* Main Page Title */}
            <Typography variant="display" as="h1" className="text-white leading-tight">
              Your Journey to a Successful <span className="text-brand-red">CMA Career</span> Starts Here.
            </Typography>

            {/* Sub-paragraph */}
            <Typography variant="body" className="text-zinc-300 max-w-xl text-base sm:text-lg leading-relaxed">
              Gujarat&apos;s premier academy dedicated solely to CMA coaching. Empowering future corporate leaders through expert faculty, concept clarity, and a proven history of rank holders.
            </Typography>

            {/* CTA Trigger Group */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Button variant="secondary" size="lg" href="/contact" className="w-full sm:w-auto px-8 justify-center">
                Inquire Now
              </Button>
              <Button variant="outline" size="lg" href="/courses" className="w-full sm:w-auto px-8 justify-center text-white border-white/20 hover:bg-white/5">
                Explore Courses
              </Button>
            </div>
          </div>

          {/* Right Column: Floating achievements grids */}
          <div className="lg:col-span-5 relative">
            <div className="grid sm:grid-cols-2 gap-4 lg:gap-6 relative">
              
              {/* Stat Card 1: Ranks */}
              <div className="transform sm:translate-y-4">
                <StatisticCard
                  value="50+"
                  label="All India Rank Holders"
                  floating={true}
                  layout="vertical"
                  icon={
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-4-9 4 9 5zm0 0v6m-3-3h6" />
                    </svg>
                  }
                />
              </div>

              {/* Stat Card 2: Success Rate */}
              <div>
                <StatisticCard
                  value="95%+"
                  label="Passing Success Rate"
                  floating={true}
                  layout="vertical"
                  icon={
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z" />
                    </svg>
                  }
                />
              </div>

              {/* Stat Card 3: Experience */}
              <div className="transform sm:translate-y-4">
                <StatisticCard
                  value="10+"
                  label="Years of Academic Excellence"
                  floating={true}
                  layout="vertical"
                  icon={
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  }
                />
              </div>

              {/* Stat Card 4: Qualified Count */}
              <div>
                <StatisticCard
                  value="5000+"
                  label="Students Mentored Globally"
                  floating={true}
                  layout="vertical"
                  icon={
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  }
                />
              </div>

            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}

