"use client";

import React, { useState } from "react";
import Section from "../../foundation/Section";
import Container from "../../foundation/Container";
import Typography from "../../foundation/Typography";
import Button from "../../foundation/Button";
import ContactCard from "../../cards/ContactCard";
import BaseCard from "../../foundation/Card";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "cma-foundation",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", course: "cma-foundation", message: "" });
    }, 1500);
  };

  return (
    <Section background="light" spacing="default" id="contact">
      <Container size="wide">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="space-y-3">
              <div className="inline-block text-xs font-bold uppercase tracking-wider text-brand-red bg-brand-red/10 px-3 py-1 rounded-full">
                Get In Touch
              </div>
              <Typography variant="h2" as="h2" className="text-brand-dark dark:text-white font-bold leading-tight">
                Connect With Us
              </Typography>
              <Typography variant="body" className="text-zinc-500 text-sm sm:text-base leading-relaxed">
                Have questions about batches, fee structures, or curriculum? Contact us directly or visit our center in Ahmedabad.
              </Typography>
            </div>

            <div className="space-y-4">
              <ContactCard
                title="Admission Helpline"
                value="+91 98256 04515"
                icon={
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                }
                href="tel:+919825604515"
                actionText="Call Helpline"
              />

              <ContactCard
                title="Ahmedabad Campus Address"
                value={"Vedant Academy, 2nd Floor, ABC Complex,\nopposite XYZ Mall, Ahmedabad, Gujarat 380009"}
                icon={
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                }
                href="https://maps.google.com"
                actionText="Get Directions"
              />

              <ContactCard
                title="Email Inquiry"
                value="info@vedantacademy.com"
                icon={
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                }
                href="mailto:info@vedantacademy.com"
                actionText="Send Email"
              />
            </div>
          </div>

          {/* Right Column: Inquiry Form Card */}
          <div className="lg:col-span-7">
            <BaseCard variant="default" hover={false} className="p-6 sm:p-8 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 text-left">
              <Typography variant="h3" as="h3" className="font-bold text-lg text-brand-dark dark:text-white mb-6">
                Send an Admission Inquiry
              </Typography>

              {submitted ? (
                <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/50 p-6 rounded-xl text-center space-y-3">
                  <svg className="h-10 w-10 text-emerald-500 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <Typography variant="h3" as="h4" className="font-bold text-emerald-800 dark:text-emerald-400 text-base">
                    Inquiry Submitted Successfully!
                  </Typography>
                  <Typography variant="body" className="text-emerald-700 dark:text-emerald-500 text-sm">
                    Thank you for your interest. Sunil Sir or one of our team advisors will call you back within 24 hours to guide you on your CMA path.
                  </Typography>
                  <button onClick={() => setSubmitted(false)} className="text-xs font-bold text-brand-blue hover:underline pt-2 block mx-auto outline-none">
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-800 dark:text-zinc-200 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-800 dark:text-zinc-200 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Email Address */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-800 dark:text-zinc-200 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Selected Course Dropdown */}
                    <div className="space-y-1.5">
                      <label htmlFor="course" className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                        Interested CMA Level *
                      </label>
                      <select
                        id="course"
                        required
                        value={formData.course}
                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                        className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-800 dark:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent transition-all cursor-pointer"
                      >
                        <option value="cma-foundation">CMA Foundation</option>
                        <option value="cma-intermediate">CMA Intermediate</option>
                        <option value="cma-final">CMA Final</option>
                      </select>
                    </div>
                  </div>

                  {/* Message box */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                      Your Message / Inquiry Query *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your question here..."
                      className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-800 dark:text-zinc-200 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent transition-all resize-y"
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="secondary"
                      size="lg"
                      loading={loading}
                      className="w-full sm:w-auto px-8 justify-center"
                    >
                      Submit Inquiry
                    </Button>
                  </div>
                </form>
              )}
            </BaseCard>
          </div>
        </div>
      </Container>
    </Section>
  );
}

