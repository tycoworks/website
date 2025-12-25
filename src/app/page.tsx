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
            <button onClick={() => scrollToSection('home')} className="focus:outline-none">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694d32cabe556acb5bd2a384/bbf97f5b6_tycoworkslogo.png"
                alt="tycoworks"
                className="h-8 md:h-10 w-auto"
              />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-[#4a4a5a] hover:text-[#8b5cf6] transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-[#4a4a5a] hover:text-[#8b5cf6] transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-[#4a4a5a] hover:text-[#8b5cf6] transition-colors"
              >
                About
              </button>
              <Button
                onClick={() => window.open('https://calendar.app.google/CJkcsNjYF7PM6sBS7', '_blank')}
                className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white px-6 py-2 rounded-full"
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
                  className="text-left text-[#4a4a5a] hover:text-[#8b5cf6] transition-colors py-2"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-left text-[#4a4a5a] hover:text-[#8b5cf6] transition-colors py-2"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-left text-[#4a4a5a] hover:text-[#8b5cf6] transition-colors py-2"
                >
                  About
                </button>
                <Button
                  onClick={() => window.open('https://calendar.app.google/CJkcsNjYF7PM6sBS7', '_blank')}
                  className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white px-6 py-2 rounded-full w-full"
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
          <motion.p
            className="text-[#8b5cf6] font-medium tracking-wide text-sm md:text-base mb-6"
            variants={fadeUp}
          >
            tycoworks
          </motion.p>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-[#1a1a2e] leading-[1.1] tracking-tight mb-8"
            variants={fadeUp}
          >
            Product Marketing for<br />
            <span className="font-medium">Dev Tools and Infrastructure</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-[#4a4a5a] max-w-2xl leading-relaxed mb-12"
            variants={fadeUp}
          >
            We help early-stage technical founders clarify their positioning, enable their sales team, and launch their products.
          </motion.p>

          <motion.div variants={fadeUp}>
            <Button
              asChild
              className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white px-8 py-6 text-base rounded-full group transition-all duration-300"
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#1a1a2e] mb-20">
            Services
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
          {[
            {
              title: "Positioning & Messaging",
              description: "We work with you to define what your product is, who it's for, and why it matters. We provide a single, LLM-ready document your whole team can use — for sales calls, pitch decks, and onboarding new hires."
            },
            {
              title: "Sales Enablement",
              description: "We create the materials your sales team needs to have better conversations. First-call decks, objection handling guides, competitive battlecards, and proof points they can actually use."
            },
            {
              title: "Product Launches",
              description: "We shape your releases into a clear, compelling story. What changed, why it matters, and how it connects to your product vision — ready for the blog post, the webinar, and the sales deck."
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
              <div className="h-px w-12 bg-[#8b5cf6] mb-8 group-hover:w-20 transition-all duration-500" />
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
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[#8b5cf6] font-medium tracking-wide text-sm mb-8">
            About
          </p>

          <p className="text-2xl md:text-3xl lg:text-4xl font-light text-white leading-relaxed mb-8">
            I'm{' '}
            <a
              href="https://linkedin.com/in/chrismichaelanderson"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-[#8b5cf6] underline-offset-4 hover:text-[#8b5cf6] transition-colors"
            >
              Chris
            </a>
            , a product leader, founder, and engineer with 15+ years building and selling dev tools and infrastructure products.
          </p>

          <p className="text-lg md:text-xl text-[#a0a0b0] leading-relaxed">
            At tycoworks, I help technical startups communicate their product and why it matters. I also write about real-time infrastructure, AI-native development, and product marketing in my{' '}
            <a
              href="https://tycoworks.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8b5cf6] hover:underline underline-offset-4"
            >
              blog
            </a>
          </p>
        </motion.div>
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
