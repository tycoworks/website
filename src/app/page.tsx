"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="px-6 md:px-12 lg:px-24 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button onClick={() => scrollToSection('home')} className="focus:outline-none flex items-center gap-2">
              <img
                src="/logo.png"
                alt="tycoworks"
                className="h-6 md:h-7 w-auto"
              />
              <span className="text-[#1a1a2e] font-bold">tycoworks</span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-[#4a4a5a] hover:text-[#7c3aed] transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-[#4a4a5a] hover:text-[#7c3aed] transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-[#4a4a5a] hover:text-[#7c3aed] transition-colors"
              >
                About
              </button>
              <a
                href="https://tycoworks.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4a4a5a] hover:text-[#7c3aed] transition-colors"
              >
                Blog
              </a>
              <Button
                onClick={() => window.open('https://calendar.app.google/CJkcsNjYF7PM6sBS7', '_blank')}
                className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white px-6 py-2 rounded-full"
              >
                Book a call
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-[#1a1a2e]" />
              ) : (
                <Menu className="h-6 w-6 text-[#1a1a2e]" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden pt-4 pb-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-left text-[#4a4a5a] hover:text-[#7c3aed] transition-colors py-2"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-left text-[#4a4a5a] hover:text-[#7c3aed] transition-colors py-2"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-left text-[#4a4a5a] hover:text-[#7c3aed] transition-colors py-2"
                >
                  About
                </button>
                <a
                  href="https://tycoworks.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-left text-[#4a4a5a] hover:text-[#7c3aed] transition-colors py-2"
                >
                  Blog
                </a>
                <Button
                  onClick={() => window.open('https://calendar.app.google/CJkcsNjYF7PM6sBS7', '_blank')}
                  className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white px-6 py-2 rounded-full w-full"
                >
                  Book a call
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20 pt-32">
        <motion.div
          className="max-w-4xl"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-[#1a1a2e] leading-[1.1] tracking-tight mb-8"
            variants={fadeUp}
          >
            Product Marketing for <span className="font-medium">Infrastructure Startups</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-[#4a4a5a] max-w-2xl leading-relaxed mb-12"
            variants={fadeUp}
          >
            tycoworks helps infrastructure software startups to explain their product and roadmap to their teams, customers, and investors.
          </motion.p>

          <motion.div variants={fadeUp}>
            <Button
              asChild
              className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white !px-8 !py-6 text-base rounded-full group transition-all duration-300"
            >
              <a href="https://calendar.app.google/CJkcsNjYF7PM6sBS7" target="_blank" rel="noopener noreferrer">
                Book a call
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 md:px-12 lg:px-24 py-24 md:py-32 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[#7c3aed] font-medium tracking-wide text-sm md:text-base mb-8">
            Services
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#1a1a2e] mb-6">
            How we help
          </h2>
          <p className="text-lg md:text-xl text-[#6a6a7a] max-w-3xl leading-relaxed">
            Infrastructure products like databases and streaming platforms are hard to explain to non-technical audiences. We help you communicate what you're building and where you're going in a way that lands with everyone, not just engineers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8 lg:gap-16 mt-16">
          {[
            {
              title: "Product Strategy",
              description: "We help you define a clear product vision and build a roadmap to get there. Vision documents, roadmap decks, and quarterly updates that keep your team and your market aligned."
            },
            {
              title: "Positioning & Messaging",
              description: "We work with you to define what your product is, who it's for, and why it matters. Positioning frameworks, messaging guides, and the foundational docs for sales calls, pitch decks, and onboarding."
            },
            {
              title: "Sales Materials",
              description: "We build the materials your sales team needs to have better conversations. First-call decks, demo scripts, objection handling, and the assets that help prospects understand why your product matters."
            }
          ].map((service, index) => (
            <motion.div
              key={service.title}
              className="group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="h-px w-12 bg-[#7c3aed] mb-8 group-hover:w-20 transition-all duration-500" />
              <h3 className="text-xl md:text-2xl font-medium text-[#1a1a2e] mb-4">
                {service.title}
              </h3>
              <p className="text-[#6a6a7a] leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 md:px-12 lg:px-24 py-24 md:py-32 bg-[#1a1a2e]">
        <div className="flex flex-col md:flex-row md:items-center gap-12 md:gap-16">
          <motion.div
            className="max-w-3xl md:flex-1"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[#7c3aed] font-medium tracking-wide text-sm md:text-base mb-8">
              About
            </p>

            <p className="text-2xl md:text-3xl lg:text-4xl font-light text-white leading-snug mb-6">
              I'm{' '}
              <a
                href="https://linkedin.com/in/chrismichaelanderson"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-[#7c3aed] underline-offset-4 hover:text-[#7c3aed] transition-colors"
              >
                Chris
              </a>
              , a product leader, founder, and engineer.
            </p>

            <p className="text-lg md:text-xl text-[#a0a0b0] leading-relaxed mb-6">
              I have 15+ years experience building and selling enterprise software and developer tools in financial markets. Along the way, I've led product and product marketing at companies like Genesis Global and Itiviti, built trading systems for investment banks, and founded a startup backed by Entrepreneur First.
            </p>

            <p className="text-lg md:text-xl text-[#a0a0b0] leading-relaxed">
              At tycoworks, I help infrastructure startups to clearly explain their product and roadmap. I also write about real-time infrastructure, AI-native development, and product marketing in my{' '}
              <a
                href="https://tycoworks.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7c3aed] hover:underline underline-offset-4"
              >
                blog
              </a>.
            </p>
          </motion.div>

          <motion.div
            className="flex-shrink-0 md:w-80 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <img
              src="/headshot.png"
              alt="Chris Anderson"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 lg:px-24 py-12 bg-[#fafafa] border-t border-[#e5e5e5]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#1a1a2e] font-medium">tycoworks</p>
          <p className="text-[#8a8a9a] text-sm">
            © {new Date().getFullYear()} tycoworks. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
