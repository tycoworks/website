"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function AnimatedTerminal() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);

  const codeLines = [
    '// positioning.json',
    '{',
    '  "product": "DevTool X",',
    '  "category": "Real-time Infrastructure",',
    '  "target": "Technical Founders",',
    '  "value_prop": "Ship faster with...",',
    '  "differentiator": "Built for scale",',
    '  "proof_points": [',
    '    "10x faster deployments",',
    '    "99.99% uptime",',
    '    "Zero config"',
    '  ]',
    '}'
  ];

  useEffect(() => {
    if (displayedLines.length > 0) return; // Only run once

    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < codeLines.length) {
        setDisplayedLines(prev => [...prev, codeLines[currentLine]]);
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
          <span className="text-xs text-[#8a8a9a] ml-2">positioning.json</span>
        </div>

        {/* Terminal Content */}
        <div className="p-6 font-mono text-sm min-h-[320px]">
          {displayedLines.map((line, index) => {
            if (!line) return null;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1 }}
                className="leading-6"
              >
                {line.includes('//') ? (
                  <span className="text-[#6a6a7a]">{line}</span>
                ) : line.includes('"') && line.includes(':') ? (
                  <>
                    <span className="text-[#7c3aed]">{line.split(':')[0]}:</span>
                    <span className="text-[#4ade80]">{line.split(':')[1]}</span>
                  </>
                ) : (
                  <span className="text-[#a0a0b0]">{line}</span>
                )}
                {index === displayedLines.length - 1 && displayedLines.length < codeLines.length && (
                  <motion.span
                    className="inline-block w-2 h-4 bg-[#7c3aed] ml-1"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
