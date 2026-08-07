import React from "react";
import Container from "../../foundation/Container";
import Section from "../../foundation/Section";
import Typography from "../../foundation/Typography";
import Breadcrumb from "../Breadcrumb";

export interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <header className="relative w-full">
      <Section background="gradient" spacing="small" className="!pt-20 !pb-12 border-b border-zinc-800">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />
        
        <Container size="wide" className="relative z-10 text-left">
          <Typography variant="display" as="h1" className="text-white">
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="body" className="mt-3 text-zinc-300 max-w-2xl">
              {subtitle}
            </Typography>
          )}
          <div className="mt-6 pt-4 border-t border-white/10">
            <Breadcrumb />
          </div>
        </Container>
      </Section>
    </header>
  );
}

