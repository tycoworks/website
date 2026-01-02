"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function renderLine(line: string) {
  if (!line) return <span>&nbsp;</span>;

  if (line.startsWith('## ')) {
    return <span className="text-[#a78bfa]">{line}</span>;
  }

  if (line.includes('**')) {
    const parts = line.split('**');
    return (
      <span className="text-[#a0a0b0]">
        {parts.map((part, i) =>
          i % 2 === 1 ? (
            <span key={i} className="text-white font-semibold">{part}</span>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </span>
    );
  }

  return <span className="text-[#a0a0b0]">{line}</span>;
}

export default function AnimatedTerminal() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);

  const codeLines = [
    '## Functional Description',
    'tycoworks is a **product marketing consultancy**',
    'that helps **infrastructure software startups**',
    'to **communicate their product and roadmap**',
    'in slides and docs.',
    '',
    '## Problem Framing',
    'Infrastructure products are **hard to explain**',
    'to non-technical audiences.',
    '',
    '## Value Framing',
    "We help you **explain what you're building**",
    "**and where you're going** in a way that",
    '**lands with everyone**, not just engineers.',
  ];

  useEffect(() => {
    if (displayedLines.length > 0) return;

    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < codeLines.length) {
        const lineToAdd = codeLines[currentLine];
        setDisplayedLines(prev => [...prev, lineToAdd]);
        currentLine++;
      } else {
        clearInterval(interval);
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="relative w-full max-w-md"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <div className="bg-[#1a1a2e] rounded-lg overflow-hidden shadow-2xl border border-[#2a2a3e]">
        {/* Terminal Header */}
        <div className="bg-[#2a2a3e] px-4 py-3 flex items-center gap-2 border-b border-[#3a3a4e]">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <span className="text-xs text-[#8a8a9a] ml-2">positioning.md</span>
        </div>

        {/* Terminal Content */}
        <div className="p-6 font-mono text-sm min-h-[320px]">
          {displayedLines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="leading-6"
            >
              {renderLine(line)}
              {index === displayedLines.length - 1 && displayedLines.length < codeLines.length && (
                <motion.span
                  className="inline-block w-2 h-4 bg-[#7c3aed] ml-1"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
