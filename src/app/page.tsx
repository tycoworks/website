"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Button } from '@/components/Button';

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
        <div className={`px-6 md:px-12 py-4 max-w-6xl mx-auto`}>
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
                Who it's for
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-[#4a4a5a] hover:text-[#7c3aed] transition-colors"
              >
                About
              </button>
              <a
                href="https://blog.tycoworks.com"
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
                  Who it's for
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-left text-[#4a4a5a] hover:text-[#7c3aed] transition-colors py-2"
                >
                  About
                </button>
                <a
                  href="https://blog.tycoworks.com"
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
      <section id="home" className="lg:min-h-[90vh] px-6 md:px-12 py-20 pt-32">
        <div className={`flex flex-col lg:flex-row lg:items-center gap-12 lg:min-h-[70vh] max-w-6xl mx-auto`}>
          <motion.div
            className="max-w-2xl flex-shrink-0"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <motion.p
              className="text-[#7c3aed] font-medium tracking-wide text-sm md:text-base mb-8"
              variants={fadeUp}
            >
              tycoworks
            </motion.p>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-[#1a1a2e] leading-[1.1] tracking-tight mb-8"
              variants={fadeUp}
            >
              Sales Enablement for <span className="font-medium">Technical Products</span>
            </motion.h1>

            <motion.p className="text-lg md:text-xl text-[#4a4a5a] leading-relaxed mb-4" variants={fadeUp}>
              tycoworks helps early-stage tech startups enable their sales teams on their product. We help you ramp your reps by:
            </motion.p>
            <motion.ul className="text-lg md:text-xl text-[#4a4a5a] leading-relaxed mb-12 space-y-2 list-disc pl-6" variants={fadeUp}>
              <li>Building a product curriculum</li>
              <li>Running live training and mock calls</li>
              <li>Certifying each rep on the pitch before their first call</li>
            </motion.ul>

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

          {/* Hero illustration - hidden on mobile */}
          <div className="hidden lg:flex flex-1 justify-center items-center">
            <img
              src="/hero.png"
              alt="A sales rep explaining a systems diagram at a whiteboard to two engineers"
              className="w-full max-w-xl h-auto"
            />
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section id="services" className="px-6 md:px-12 py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[#7c3aed] font-medium tracking-wide text-sm md:text-base mb-8">
            Who it's for
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#1a1a2e] mb-6">
            Are we a good match?
          </h2>
          <p className="text-lg md:text-xl text-[#6a6a7a] max-w-3xl leading-relaxed mb-8">
            We work best with teams who are:
          </p>
          <ul className="text-lg md:text-xl text-[#4a4a5a] max-w-3xl leading-relaxed space-y-4">
            {[
              "Selling a technical product: infrastructure, databases, streaming, developer tools",
              "Selling to engineers, or to buyers who bring engineers to the call",
              "Hiring their first reps, onboarding new hires, or otherwise scaling the sales team",
              "Launching a product the team hasn't sold before",
              "Trying to get the founder, or the few people who can pitch, off every sales call",
            ].map((item) => (
              <li key={item} className="flex gap-4">
                <span className="mt-3 h-px w-8 bg-[#7c3aed] flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 md:px-12 py-24 md:py-32 bg-[#1a1a2e]">
        <div className={`flex flex-col md:flex-row md:items-center gap-12 md:gap-16 max-w-6xl mx-auto`}>
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

            <p className="text-lg md:text-xl text-[#a0a0b0] leading-relaxed">
              I've spent 18 years building and selling infrastructure software and developer tools at companies like Materialize, Genesis Global and Itiviti. At tycoworks, I help infrastructure and developer tool companies get their sales reps ramped and pitch certified. I also write about real-time infrastructure, AI-native development, and product marketing in my{' '}
              <a
                href="https://blog.tycoworks.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7c3aed] hover:underline underline-offset-4"
              >
                blog
              </a>.
            </p>

            <div className="mt-10">
              <Button
                asChild
                className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white !px-8 !py-6 text-base rounded-full group transition-all duration-300"
              >
                <a href="https://calendar.app.google/CJkcsNjYF7PM6sBS7" target="_blank" rel="noopener noreferrer">
                  Book a call
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 flex justify-center"
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
      <footer className="px-6 md:px-12 py-12 bg-[#fafafa] border-t border-[#e5e5e5]">
        <div className={`flex flex-col md:flex-row justify-between items-center gap-4 max-w-6xl mx-auto`}>
          <p className="text-[#1a1a2e] font-medium">tycoworks</p>
          <p className="text-[#8a8a9a] text-sm">
            © {new Date().getFullYear()} tycoworks. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
