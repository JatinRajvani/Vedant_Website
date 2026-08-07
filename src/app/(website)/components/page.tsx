"use client";

import React, { useState } from "react";
import Typography from "@/components/foundation/Typography";
import Button from "@/components/foundation/Button";
import Card from "@/components/foundation/Card";
import Container from "@/components/foundation/Container";
import Section from "@/components/foundation/Section";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Logo from "@/components/layout/Logo";

export default function ComponentPreviewPage() {
  const [btnLoading, setBtnLoading] = useState(false);

  const toggleLoading = () => {
    setBtnLoading(true);
    setTimeout(() => setBtnLoading(false), 3000);
  };

  return (
    <main className="min-h-screen bg-zinc-50/50 dark:bg-zinc-950 pb-20">
      {/* Page Header Section */}
      <Section background="gradient" spacing="small">
        <Container>
          <Typography variant="label" color="text-brand-red-300">
            Developer Reference
          </Typography>
          <Typography variant="display" as="h1" className="mt-2 text-white">
            Component Library
          </Typography>
          <Typography variant="body" className="mt-4 text-zinc-300 max-w-2xl">
            This dashboard displays all visual variations and states of our foundation design system components. Use it to verify styling, responsiveness, and accessibility mappings.
          </Typography>
        </Container>
      </Section>

      <Container className="mt-12 space-y-16">
        {/* 1. Typography Component */}
        <section aria-labelledby="typography-heading">
          <div className="border-b border-zinc-200 dark:border-zinc-800 pb-4 mb-8">
            <Typography variant="h2" id="typography-heading">
              1. Typography System
            </Typography>
            <Typography variant="body" className="text-zinc-500 mt-1">
              Provides typographic hierarchy and semantic HTML tags out-of-the-box.
            </Typography>
          </div>

          <Card variant="default" className="space-y-8">
            <div>
              <Typography variant="label">display</Typography>
              <Typography variant="display">Vedant Academy</Typography>
            </div>

            <div>
              <Typography variant="label">h1 (Page Title)</Typography>
              <Typography variant="h1">Empowering CMA Careers</Typography>
            </div>

            <div>
              <Typography variant="label">h2 (Section Header)</Typography>
              <Typography variant="h2">Why Choose Vedant Academy?</Typography>
            </div>

            <div>
              <Typography variant="label">h3 (Card Header)</Typography>
              <Typography variant="h3">CMA Intermediate Coaching</Typography>
            </div>

            <div>
              <Typography variant="label">body (Standard Text)</Typography>
              <Typography variant="body">
                We provide a comprehensive learning path structured by CMA Sunil Sir & CMA Bharat Sir. Our student-focused methodology ensures high passing rates and robust industry readiness.
              </Typography>
            </div>

            <div>
              <Typography variant="label">caption (Details & Footnotes)</Typography>
              <br />
              <Typography variant="caption">
                * Note: Batch timings are subject to change depending on local scheduling policies.
              </Typography>
            </div>

            <div>
              <Typography variant="label">label (Metadata / Headers)</Typography>
              <br />
              <Typography variant="label">Admissions Open 2026</Typography>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4 border-t border-zinc-100 dark:border-zinc-800">
              <div>
                <Typography variant="statistic">1000+</Typography>
                <Typography variant="caption" className="block mt-1">CMA Qualifiers</Typography>
              </div>
              <div>
                <Typography variant="statistic">10+</Typography>
                <Typography variant="caption" className="block mt-1">Years Experience</Typography>
              </div>
              <div>
                <Typography variant="statistic">95%</Typography>
                <Typography variant="caption" className="block mt-1">Success Rate</Typography>
              </div>
              <div>
                <Typography variant="statistic">Rank 1</Typography>
                <Typography variant="caption" className="block mt-1">All India Achievements</Typography>
              </div>
            </div>
          </Card>
        </section>

        {/* 2. Button Component */}
        <section aria-labelledby="buttons-heading">
          <div className="border-b border-zinc-200 dark:border-zinc-800 pb-4 mb-8">
            <Typography variant="h2" id="buttons-heading">
              2. Button System
            </Typography>
            <Typography variant="body" className="text-zinc-500 mt-1">
              Variants and states for all CTA prompts. Seamlessly switches tags between `&lt;button&gt;` and Link depending on `href`.
            </Typography>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Variants */}
            <Card variant="default" className="space-y-6">
              <Typography variant="h3">Variants (Size: md)</Typography>
              
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex flex-col gap-1 items-start">
                  <span className="text-xs text-zinc-400 font-mono">primary</span>
                  <Button variant="primary">Primary CTA</Button>
                </div>
                <div className="flex flex-col gap-1 items-start">
                  <span className="text-xs text-zinc-400 font-mono">secondary</span>
                  <Button variant="secondary">Secondary Red</Button>
                </div>
                <div className="flex flex-col gap-1 items-start">
                  <span className="text-xs text-zinc-400 font-mono">outline</span>
                  <Button variant="outline">Outline Button</Button>
                </div>
                <div className="flex flex-col gap-1 items-start">
                  <span className="text-xs text-zinc-400 font-mono">ghost</span>
                  <Button variant="ghost">Ghost Button</Button>
                </div>
                <div className="flex flex-col gap-1 items-start">
                  <span className="text-xs text-zinc-400 font-mono">link</span>
                  <Button variant="link">Link Text Button</Button>
                </div>
                <div className="flex flex-col gap-1 items-start">
                  <span className="text-xs text-zinc-400 font-mono">icon</span>
                  <Button variant="icon" aria-label="Settings">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </Button>
                </div>
              </div>
            </Card>

            {/* Sizes */}
            <Card variant="default" className="space-y-6">
              <Typography variant="h3">Sizes (Variant: primary)</Typography>
              <div className="flex flex-wrap gap-4 items-end">
                <div className="flex flex-col gap-1 items-start">
                  <span className="text-xs text-zinc-400 font-mono">sm</span>
                  <Button variant="primary" size="sm">Small Action</Button>
                </div>
                <div className="flex flex-col gap-1 items-start">
                  <span className="text-xs text-zinc-400 font-mono">md</span>
                  <Button variant="primary" size="md">Medium Button</Button>
                </div>
                <div className="flex flex-col gap-1 items-start">
                  <span className="text-xs text-zinc-400 font-mono">lg</span>
                  <Button variant="primary" size="lg">Large CTA</Button>
                </div>
              </div>
            </Card>

            {/* States & Link Behavior */}
            <Card variant="default" className="space-y-6 md:col-span-2">
              <Typography variant="h3">States & Link Behaviors</Typography>
              <div className="flex flex-wrap gap-6 items-center">
                <div className="flex flex-col gap-1 items-start">
                  <span className="text-xs text-zinc-400 font-mono">disabled</span>
                  <Button variant="primary" disabled>Disabled State</Button>
                </div>
                
                <div className="flex flex-col gap-1 items-start">
                  <span className="text-xs text-zinc-400 font-mono">interactive loading</span>
                  <Button variant="primary" loading={btnLoading} onClick={toggleLoading}>
                    {btnLoading ? "Processing" : "Click to Load (3s)"}
                  </Button>
                </div>

                <div className="flex flex-col gap-1 items-start">
                  <span className="text-xs text-zinc-400 font-mono">permanent loading</span>
                  <Button variant="outline" loading>Always Loading</Button>
                </div>

                <div className="flex flex-col gap-1 items-start">
                  <span className="text-xs text-zinc-400 font-mono">link rendering (href)</span>
                  <Button variant="primary" href="/courses">Go to Courses (next/link)</Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* 3. Card Component */}
        <section aria-labelledby="cards-heading">
          <div className="border-b border-zinc-200 dark:border-zinc-800 pb-4 mb-8">
            <Typography variant="h2" id="cards-heading">
              3. Card System
            </Typography>
            <Typography variant="body" className="text-zinc-500 mt-1">
              Core layout boxes. Employs soft drop shadows, clean borders, and hover micro-animations.
            </Typography>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-xs text-zinc-400 font-mono">default (with hover lift)</span>
              <Card variant="default" hover={true} className="h-full">
                <Typography variant="h3">Default Card</Typography>
                <Typography variant="body" className="mt-3 text-sm">
                  Standard outline border with soft white background. Perfect for general layout structures and content boxes.
                </Typography>
              </Card>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs text-zinc-400 font-mono">outlined (with hover lift)</span>
              <Card variant="outlined" hover={true} className="h-full">
                <Typography variant="h3">Outlined Card</Typography>
                <Typography variant="body" className="mt-3 text-sm">
                  Double border design with clean transparent background. Excellent for less prominent items or filters.
                </Typography>
              </Card>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs text-zinc-400 font-mono">elevated (with hover lift)</span>
              <Card variant="elevated" hover={true} className="h-full">
                <Typography variant="h3">Elevated Card</Typography>
                <Typography variant="body" className="mt-3 text-sm">
                  Soft floating shadow without heavy borders. Creates depth, optimal for testimonials and faculty details.
                </Typography>
              </Card>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs text-zinc-400 font-mono">featured (no hover lift)</span>
              <Card variant="featured" hover={false} className="h-full">
                <Typography variant="h3" color="text-brand-blue font-bold">Featured Listing</Typography>
                <Typography variant="body" className="mt-3 text-sm">
                  Bold primary-colored borders with background highlight. Draws user focus immediately. Ideal for core plans or results.
                </Typography>
              </Card>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs text-zinc-400 font-mono">transparent</span>
              <Card variant="transparent" className="h-full">
                <Typography variant="h3">Transparent Wrapper</Typography>
                <Typography variant="body" className="mt-3 text-sm">
                  Only padding context without border styles. Useful for inline groupings or nested component layouts.
                </Typography>
              </Card>
            </div>
          </div>
        </section>

        {/* 4. Section & Spacing Layout */}
        <section aria-labelledby="sections-heading">
          <div className="border-b border-zinc-200 dark:border-zinc-800 pb-4 mb-8">
            <Typography variant="h2" id="sections-heading">
              4. Section & Spacing Mappings
            </Typography>
            <Typography variant="body" className="text-zinc-500 mt-1">
              Supports responsive vertical padding scale and primary design backgrounds.
            </Typography>
          </div>

          <div className="space-y-6 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden bg-white p-4">
            <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden">
              <div className="bg-zinc-100 dark:bg-zinc-800 px-4 py-2 border-b border-zinc-200 dark:border-zinc-800">
                <span className="text-xs text-zinc-600 dark:text-zinc-300 font-mono">Section (background="light" spacing="small")</span>
              </div>
              <Section background="light" spacing="small" className="!py-6">
                <Container>
                  <Typography variant="body" className="text-center font-medium">
                    This block has small padding and a light background.
                  </Typography>
                </Container>
              </Section>
            </div>

            <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden">
              <div className="bg-zinc-100 dark:bg-zinc-800 px-4 py-2 border-b border-zinc-200 dark:border-zinc-800">
                <span className="text-xs text-zinc-600 dark:text-zinc-300 font-mono">Section (background="dark" spacing="small")</span>
              </div>
              <Section background="dark" spacing="small" className="!py-6">
                <Container>
                  <Typography variant="body" className="text-center font-medium text-white">
                    This block has small padding and a dark navy background.
                  </Typography>
                </Container>
              </Section>
            </div>

            <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden">
              <div className="bg-zinc-100 dark:bg-zinc-800 px-4 py-2 border-b border-zinc-200 dark:border-zinc-800">
                <span className="text-xs text-zinc-600 dark:text-zinc-300 font-mono">Section (background="gradient" spacing="small")</span>
              </div>
              <Section background="gradient" spacing="small" className="!py-6">
                <Container>
                  <Typography variant="body" className="text-center font-medium text-white">
                    This block has small padding and a dynamic brand blue-navy gradient.
                  </Typography>
                </Container>
              </Section>
            </div>
          </div>
        </section>

        {/* 5. Layout & Navigation Mappings */}
        <section aria-labelledby="layouts-heading">
          <div className="border-b border-zinc-200 dark:border-zinc-800 pb-4 mb-8">
            <Typography variant="h2" id="layouts-heading">
              5. Layout & Navigation Mappings
            </Typography>
            <Typography variant="body" className="text-zinc-500 mt-1">
              Supports dynamic breadcrumb trail path resolution and logo variations.
            </Typography>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card variant="default" className="space-y-4">
              <Typography variant="h3">Breadcrumb Isolation</Typography>
              <Typography variant="body" className="text-sm">
                Renders a semantic trail. If no properties are specified, it dynamically reads the browser pathname.
              </Typography>
              <div className="bg-zinc-50 dark:bg-zinc-900/50 p-4 rounded-xl border border-zinc-100 dark:border-zinc-800">
                <Breadcrumb items={[
                  { label: "Home", href: "/" },
                  { label: "Courses Offered", href: "/courses" },
                  { label: "CMA Foundation Details" }
                ]} />
              </div>
            </Card>

            <Card variant="default" className="space-y-4">
              <Typography variant="h3">Logo Branding Configurations</Typography>
              <Typography variant="body" className="text-sm">
                Variations supporting header/footer placements and dark/light modes.
              </Typography>
              <div className="flex flex-col gap-4">
                <div className="p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-400">default</span>
                  <Logo variant="default" />
                </div>
                <div className="p-4 bg-zinc-900 rounded-xl flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-600">white</span>
                  <Logo variant="white" />
                </div>
              </div>
            </Card>
          </div>
        </section>
      </Container>
    </main>
  );
}
