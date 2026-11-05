import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Bug,
  Sparkles,
  ExternalLink,
  Terminal,
  Cloud,
  Cpu,
  Layers,
  CheckCircle2,
  Trophy,
  BookOpen,
  Zap,
  MapPin,
  GraduationCap,
  Menu,
  X,
  ArrowUpRight,
  RefreshCw,
  ShieldCheck,
  Award,
  Check,
  ChevronRight,
  Info,
  Lock,
  Compass,
  Code2,
  GitBranch,
  Play,
  Pause,
  RotateCcw,
  Volume2,
  Mail
} from 'lucide-react';

// ============================================================================
// BRAND & SOCIAL ICONS (Self-contained accessible SVGs)
// ============================================================================
const GithubIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

const CanopyLogo = ({ className = "w-10 h-10", animated = true }) => (
  <div className={`relative flex items-center justify-center ${className} group-hover:scale-105 transition-transform duration-300`}>
    <svg className="w-full h-full drop-shadow-[0_0_12px_rgba(16,185,129,0.45)]" viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="logoBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#021f14" />
          <stop offset="50%" stopColor="#03120b" />
          <stop offset="100%" stopColor="#010805" />
        </linearGradient>
        <linearGradient id="logoCanopyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="50%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
        <radialGradient id="logoAmberGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="50%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Hexagonal Shield */}
      <path
        d="M50 6 L86 24 L86 64 L50 94 L14 64 L14 24 Z"
        fill="url(#logoBgGrad)"
        stroke="url(#logoCanopyGrad)"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {/* Inner Tech Dash Frame */}
      <path
        d="M50 14 L80 29 L80 61 L50 86 L20 61 L20 29 Z"
        stroke="#047857"
        strokeWidth="1"
        strokeOpacity="0.4"
        strokeDasharray="3 3"
        fill="none"
      />

      {/* Leaf Wings / Stylized "M" */}
      <path
        d="M50 30 Q36 34 27 46 Q24 55 30 63 Q37 72 50 82"
        stroke="url(#logoCanopyGrad)"
        strokeWidth="2.75"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M50 30 Q64 34 73 46 Q76 55 70 63 Q63 72 50 82"
        stroke="url(#logoCanopyGrad)"
        strokeWidth="2.75"
        strokeLinecap="round"
        fill="none"
      />

      {/* Central Stem */}
      <line
        x1="50" y1="20"
        x2="50" y2="76"
        stroke="#34d399"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Branch Circuit Traces */}
      <path d="M50 42 Q40 44 33 40" stroke="#34d399" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M50 54 Q38 58 35 66" stroke="#34d399" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M50 42 Q60 44 67 40" stroke="#22d3ee" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M50 54 Q62 58 65 66" stroke="#22d3ee" strokeWidth="1.75" strokeLinecap="round" />

      {/* Code Chevron Accents < > */}
      <path d="M40 25 L45 20 L40 16" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
      <path d="M60 25 L55 20 L60 16" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />

      {/* Bio Spores */}
      <circle cx="33" cy="40" r="2.2" fill="#fbbf24" />
      <circle cx="35" cy="66" r="2.2" fill="#34d399" />
      <circle cx="67" cy="40" r="2.2" fill="#22d3ee" />
      <circle cx="65" cy="66" r="2.2" fill="#fbbf24" />
      <circle cx="50" cy="18" r="2.5" fill="#34d399" />

      {/* Core Glowing Firefly Nucleus */}
      <circle cx="50" cy="48" r="6" fill="url(#logoAmberGlow)" />
      <circle cx="50" cy="48" r="2.5" fill="#ffffff" />
    </svg>
    {animated && (
      <>
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping pointer-events-none" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 pointer-events-none" />
      </>
    )}
  </div>
);

const AwsAmplifyIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 18l5-10 4 6 7-14" />
    <path d="M15 18h5" />
    <circle cx="4" cy="18" r="1.5" fill="currentColor" />
    <circle cx="9" cy="8" r="1.5" fill="currentColor" />
    <circle cx="13" cy="14" r="1.5" fill="currentColor" />
    <circle cx="20" cy="4" r="1.5" fill="currentColor" />
    <circle cx="20" cy="18" r="1.5" fill="currentColor" />
  </svg>
);

// ============================================================================
// BUG SPECIMEN DATABASE (The 4 Interactive Engineering Bottlenecks)
// ============================================================================
const INSECT_SPECIMENS = [
  {
    id: 1,
    name: "Golden Firefly",
    scientificName: "Photinus-Stream",
    rarity: "LEGENDARY",
    color: "#fbbf24", // Amber
    colorName: "amber",
    location: "Hero Expedition ID Card",
    hint: "Perched on the corner of the Researcher ID Card in the About section",
    squashedTitle: "High Token Latency in GenAI Event Pipelines",
    story: "In PlanPulse, synchronous LLM responses left users staring at spinners for nearly a full second. Implementing chunked streaming responses and optimistic UI rendering slashed perceived latency by 72% (from 850ms down to ~180ms).",
    metricUnlocked: "+250 XP • 180ms First-Byte Stream",
    points: 250
  },
  {
    id: 2,
    name: "Neon Rhino Beetle",
    scientificName: "Dynastes-Heap",
    rarity: "EPIC",
    color: "#34d399", // Emerald
    colorName: "emerald",
    location: "Skills & Tech Superpowers Grid",
    hint: "Guarding the top-right canopy edge of the Skills Ecosystem",
    squashedTitle: "Auxiliary Heap Exhaustion on Dense Matrix Traversal",
    story: "While benchmarking Java matrix and binary-search algorithms, recursive object allocations triggered GC spikes on large inputs. Refactoring to in-place pointer manipulation achieved O(1) auxiliary memory across 45+ stress test cases.",
    metricUnlocked: "+250 XP • Zero-Allocation O(1) Space",
    points: 250
  },
  {
    id: 3,
    name: "Morpho Dragonfly",
    scientificName: "Anisoptera-Edge",
    rarity: "EPIC",
    color: "#22d3ee", // Cyan
    colorName: "cyan",
    location: "Featured Projects Section Header",
    hint: "Hovering along the cyan-tinted border of the Featured Projects section",
    squashedTitle: "SPA Deep-Link 404 Errors on Cloud Refresh",
    story: "Single-page React routing initially threw 404s on direct route reloads in cloud environments. Configuring AWS Amplify custom rewrite rules (/<*> -> /index.html with 200 status) and CloudFront cache headers delivered seamless edge routing.",
    metricUnlocked: "+250 XP • 100/100 Lighthouse Edge Delivery",
    points: 250
  },
  {
    id: 4,
    name: "Crimson-Gold Ladybug",
    scientificName: "Coccinella-Prompt",
    rarity: "RARE",
    color: "#fb7185", // Rose/Coral Gold
    colorName: "rose",
    location: "Achievements & AWS Pipeline Card",
    hint: "Inspecting the automated CI/CD deployment pipeline in the Architecture section",
    squashedTitle: "Unstructured LLM Hallucinations Under Hackathon Pressure",
    story: "During PromptWars and Hack2Skill sprints, raw prompts produced inconsistent JSON schemas. Designing deterministic system-prompt templates with strict few-shot guardrails stabilized multi-step AI outputs.",
    metricUnlocked: "+250 XP • Deterministic Schema Output",
    points: 250
  }
];

// ============================================================================
// DETAILED INLINE SVG INSECT COMPONENTS
// ============================================================================

// 1. Golden Firefly (Photinus-Stream)
const FireflySvg = ({ isSquashed }) => (
  <svg viewBox="0 0 64 64" className="w-10 h-10 drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]" aria-hidden="true">
    <defs>
      <radialGradient id="fireflyLanternGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#fffbeb" stopOpacity="1" />
        <stop offset="40%" stopColor="#fbbf24" stopOpacity="0.9" />
        <stop offset="85%" stopColor="#d97706" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#b45309" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="fireflyWingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fef08a" stopOpacity="0.75" />
        <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.25" />
      </linearGradient>
    </defs>
    <circle cx="32" cy="44" r="14" fill="url(#fireflyLanternGlow)" className="animate-pulse" />
    <ellipse cx="32" cy="42" rx="7" ry="11" fill="#f59e0b" stroke="#78350f" strokeWidth="1.5" />
    <path d="M26 38h12M25 42h14M27 46h10" stroke="#78350f" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
    <ellipse cx="32" cy="27" rx="6" ry="5" fill="#451a03" stroke="#92400e" strokeWidth="1.5" />
    <circle cx="32" cy="18" r="4" fill="#291203" />
    <circle cx="30" cy="17" r="1" fill="#fde047" />
    <circle cx="34" cy="17" r="1" fill="#fde047" />
    <path d="M30 15C27 10 22 9 18 10" fill="none" stroke="#fef08a" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="17.5" cy="10" r="1.5" fill="#fef08a" />
    <path d="M34 15C37 10 42 9 46 10" fill="none" stroke="#fef08a" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="46.5" cy="10" r="1.5" fill="#fef08a" />
    <g className={!isSquashed ? "firefly-wing-left" : ""}>
      <path d="M30 25C18 15 10 24 16 38C22 50 30 33 30 25Z" fill="url(#fireflyWingGrad)" stroke="#fef08a" strokeWidth="1" />
      <path d="M28 26C20 20 16 26 20 34" fill="none" stroke="#fef9c3" strokeWidth="0.8" opacity="0.7" />
    </g>
    <g className={!isSquashed ? "firefly-wing-right" : ""}>
      <path d="M34 25C46 15 54 24 48 38C42 50 34 33 34 25Z" fill="url(#fireflyWingGrad)" stroke="#fef08a" strokeWidth="1" />
      <path d="M36 26C44 20 48 26 44 34" fill="none" stroke="#fef9c3" strokeWidth="0.8" opacity="0.7" />
    </g>
    <path d="M27 27L20 29L16 35M37 27L44 29L48 35M28 29L19 36L15 44M36 29L45 36L49 44" fill="none" stroke="#92400e" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

// 2. Neon Rhino Beetle (Dynastes-Heap)
const BeetleSvg = ({ isSquashed }) => (
  <svg viewBox="0 0 64 64" className="w-10 h-10 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]" aria-hidden="true">
    <defs>
      <linearGradient id="beetleCarapace" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#064e3b" />
        <stop offset="50%" stopColor="#047857" />
        <stop offset="100%" stopColor="#10b981" />
      </linearGradient>
    </defs>
    <path d="M24 26L14 22L8 27M40 26L50 22L56 27M23 34L11 34L6 42M41 34L53 34L58 42M25 43L15 48L10 57M39 43L49 48L54 57" 
      fill="none" stroke="#047857" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M32 20C32 14 30 8 26 4C28 9 34 11 34 20Z" fill="#34d399" stroke="#065f46" strokeWidth="1" />
    <path d="M29 9C32 7 37 7 38 4" fill="none" stroke="#a7f3d0" strokeWidth="1.5" strokeLinecap="round" />
    <ellipse cx="32" cy="22" rx="7" ry="5" fill="#022c22" stroke="#34d399" strokeWidth="1.2" />
    <circle cx="28" cy="21" r="1.5" fill="#6ee7b7" />
    <circle cx="36" cy="21" r="1.5" fill="#6ee7b7" />
    <path d="M23 24C23 20 41 20 41 24C41 30 23 30 23 24Z" fill="#064e3b" stroke="#34d399" strokeWidth="1.5" />
    <g className={!isSquashed ? "beetle-shell-flutter" : ""}>
      <path d="M22 29C22 27 31 27 31.5 29V52C31.5 54 22 51 22 40Z" fill="url(#beetleCarapace)" stroke="#052e16" strokeWidth="1.2" />
      <path d="M42 29C42 27 32.5 27 32.5 29V52C32.5 54 42 51 42 40Z" fill="url(#beetleCarapace)" stroke="#052e16" strokeWidth="1.2" />
      <line x1="32" y1="29" x2="32" y2="52" stroke="#34d399" strokeWidth="1.5" />
      <path d="M25 33L29 37M25 41L29 45M39 33L35 37M39 41L35 45" stroke="#a7f3d0" strokeWidth="1.2" strokeLinecap="round" opacity="0.9" />
    </g>
  </svg>
);

// 3. Morpho Dragonfly (Anisoptera-Edge)
const DragonflySvg = ({ isSquashed }) => (
  <svg viewBox="0 0 64 64" className="w-10 h-10 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" aria-hidden="true">
    <defs>
      <linearGradient id="dragonflyWing" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#a5f3fc" stopOpacity="0.8" />
        <stop offset="60%" stopColor="#22d3ee" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#0891b2" stopOpacity="0.1" />
      </linearGradient>
    </defs>
    <ellipse cx="32" cy="27" rx="3.5" ry="5" fill="#083344" stroke="#22d3ee" strokeWidth="1" />
    <path d="M32 32V58" stroke="#06b6d4" strokeWidth="3.5" strokeLinecap="round" />
    <line x1="30" y1="36" x2="34" y2="36" stroke="#cffafe" strokeWidth="1" />
    <line x1="30" y1="41" x2="34" y2="41" stroke="#cffafe" strokeWidth="1" />
    <line x1="30.5" y1="46" x2="33.5" y2="46" stroke="#cffafe" strokeWidth="1" />
    <line x1="31" y1="51" x2="33" y2="51" stroke="#cffafe" strokeWidth="1" />
    <circle cx="32" cy="58" r="2" fill="#22d3ee" className="animate-pulse" />
    <ellipse cx="32" cy="20" rx="4" ry="3" fill="#164e63" />
    <circle cx="29" cy="19" r="2.5" fill="#22d3ee" />
    <circle cx="35" cy="19" r="2.5" fill="#22d3ee" />
    <circle cx="29" cy="19" r="1" fill="#ffffff" />
    <circle cx="35" cy="19" r="1" fill="#ffffff" />
    <g className={!isSquashed ? "dragonfly-wings-fore" : ""}>
      <path d="M32 24C24 16 7 13 4 19C1 24 18 27 32 26" fill="url(#dragonflyWing)" stroke="#67e8f9" strokeWidth="0.8" />
      <path d="M32 24C40 16 57 13 60 19C63 24 46 27 32 26" fill="url(#dragonflyWing)" stroke="#67e8f9" strokeWidth="0.8" />
    </g>
    <g className={!isSquashed ? "dragonfly-wings-hind" : ""}>
      <path d="M32 27C23 23 10 24 7 30C4 35 19 34 32 28" fill="url(#dragonflyWing)" stroke="#67e8f9" strokeWidth="0.8" />
      <path d="M32 27C41 23 54 24 57 30C60 35 45 34 32 28" fill="url(#dragonflyWing)" stroke="#67e8f9" strokeWidth="0.8" />
    </g>
    <path d="M30 25L24 30M34 25L40 30M30 28L25 34M34 28L39 34" stroke="#155e75" strokeWidth="1" strokeLinecap="round" />
  </svg>
);

// 4. Crimson-Gold Ladybug (Coccinella-Prompt)
const LadybugSvg = ({ isSquashed }) => (
  <svg viewBox="0 0 64 64" className="w-10 h-10 drop-shadow-[0_0_8px_rgba(251,113,133,0.8)]" aria-hidden="true">
    <defs>
      <radialGradient id="ladybugElytra" cx="45%" cy="40%" r="55%">
        <stop offset="0%" stopColor="#f43f5e" />
        <stop offset="60%" stopColor="#e11d48" />
        <stop offset="100%" stopColor="#9f1239" />
      </radialGradient>
    </defs>
    <path d="M23 26L13 22L7 27M41 26L51 22L57 27M22 34L11 35L6 42M42 34L53 35L58 42M24 43L14 47L10 55M40 43L50 47L54 55" 
      fill="none" stroke="#881337" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M26 19C26 15 38 15 38 19C38 23 26 23 26 19Z" fill="#1c1917" stroke="#4c0519" strokeWidth="1" />
    <circle cx="28" cy="17" r="1.5" fill="#fecdd3" />
    <circle cx="36" cy="17" r="1.5" fill="#fecdd3" />
    <path d="M28 15C26 11 22 10 19 11M36 15C38 11 42 10 45 11" fill="none" stroke="#fb7185" strokeWidth="1.2" strokeLinecap="round" />
    <circle cx="18.5" cy="11" r="1.2" fill="#fbbf24" />
    <circle cx="45.5" cy="11" r="1.2" fill="#fbbf24" />
    <path d="M23 23C23 19 41 19 41 23C41 27 23 27 23 23Z" fill="#0f172a" />
    <circle cx="26" cy="23" r="1.5" fill="#ffffff" />
    <circle cx="38" cy="23" r="1.5" fill="#ffffff" />
    <g className={!isSquashed ? "ladybug-shell" : ""}>
      <ellipse cx="32" cy="38" rx="14" ry="14" fill="url(#ladybugElytra)" stroke="#4c0519" strokeWidth="1.5" />
      <line x1="32" y1="24" x2="32" y2="52" stroke="#1c1917" strokeWidth="1.5" />
      <circle cx="26" cy="31" r="2.2" fill="#fef08a" stroke="#713f12" strokeWidth="0.8" />
      <circle cx="38" cy="31" r="2.2" fill="#fef08a" stroke="#713f12" strokeWidth="0.8" />
      <circle cx="24" cy="40" r="2.5" fill="#fef08a" stroke="#713f12" strokeWidth="0.8" />
      <circle cx="40" cy="40" r="2.5" fill="#fef08a" stroke="#713f12" strokeWidth="0.8" />
      <circle cx="28" cy="47" r="1.8" fill="#fef08a" stroke="#713f12" strokeWidth="0.8" />
      <circle cx="36" cy="47" r="1.8" fill="#fef08a" stroke="#713f12" strokeWidth="0.8" />
    </g>
  </svg>
);

// Helper to render the right insect
const InsectIcon = ({ id, isSquashed }) => {
  switch (id) {
    case 1:
      return <FireflySvg isSquashed={isSquashed} />;
    case 2:
      return <BeetleSvg isSquashed={isSquashed} />;
    case 3:
      return <DragonflySvg isSquashed={isSquashed} />;
    case 4:
      return <LadybugSvg isSquashed={isSquashed} />;
    default:
      return <Bug className="w-8 h-8 text-emerald-400" />;
  }
};

// ============================================================================
// AMBIENT BIOLUMINESCENT VINE SNAKE COMPONENT
// ============================================================================
const AmbientVineSnake = ({ onLaunchArcade }) => {
  return (
    <div className="fixed bottom-6 left-6 z-30 group">
      <button
        onClick={onLaunchArcade}
        className="relative flex items-center gap-3 px-3.5 py-2 rounded-2xl bg-[#02130b]/85 border border-emerald-600/70 hover:border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)] backdrop-blur-xl transition-all duration-300 hover:scale-105 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-emerald-400"
        aria-label="Launch Canopy Python Snake Arcade"
      >
        {/* Animated Bioluminescent Serpent Graphic */}
        <div className="relative w-9 h-9 flex items-center justify-center">
          <svg viewBox="0 0 48 48" className="w-8 h-8 drop-shadow-[0_0_8px_rgba(52,211,153,0.85)]" aria-hidden="true">
            <defs>
              <linearGradient id="snakeSkinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="40%" stopColor="#059669" />
                <stop offset="100%" stopColor="#022c22" />
              </linearGradient>
            </defs>
            {/* Curled Coiled Body */}
            <path
              d="M12 36C8 32 8 22 18 20C26 18 36 24 38 16C39 12 36 8 30 8C22 8 18 14 16 14"
              fill="none"
              stroke="url(#snakeSkinGrad)"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Diamond scales pattern */}
            <path
              d="M14 34L17 32M20 22L23 20M32 18L35 16"
              stroke="#6ee7b7"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            {/* Snake Head */}
            <ellipse cx="14" cy="14" rx="4.5" ry="3.5" fill="#34d399" />
            <circle cx="15.5" cy="13" r="1" fill="#fde047" />
            {/* Flicking Forked Tongue */}
            <path
              d="M10 14L5 12M10 14L5 16"
              stroke="#f43f5e"
              strokeWidth="1"
              strokeLinecap="round"
              className="snake-tongue-flick"
            />
          </svg>
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
        </div>

        {/* Text Callout */}
        <div className="text-left">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold">
              CANOPY PYTHON
            </span>
            <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-emerald-950 border border-emerald-700 text-amber-300">
              ARCADE
            </span>
          </div>
          <p className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors">
            Play Bug Eater Snake 🎮
          </p>
        </div>

        {/* Hover Hint */}
        <span className="absolute -top-8 left-0 whitespace-nowrap px-2.5 py-1 rounded-md bg-emerald-950/95 border border-emerald-500 text-[11px] font-mono text-emerald-200 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
          Slither &amp; eat memory bugs!
        </span>
      </button>
    </div>
  );
};

// ============================================================================
// TACTICAL BUG HUNTER CROSSHAIR CURSOR COMPONENT (60FPS HARDWARE ACCELERATED)
// ============================================================================
const TacticalCrosshairCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [lerpPos, setLerpPos] = useState({ x: -100, y: -100 });
  const [isClicking, setIsClicking] = useState(false);
  const [hoverState, setHoverState] = useState('default'); // 'default' | 'interactive' | 'bug'
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const targetRef = useRef({ x: -100, y: -100 });
  const lerpRef = useRef({ x: -100, y: -100 });
  const rafId = useRef(null);

  useEffect(() => {
    // Detect touch-only devices
    if (typeof window !== 'undefined' && (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window)) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const el = e.target;
      if (!el) return;

      const isBug = el.closest('[data-cursor-target="bug"]') || el.closest('[aria-label*="squash"]');
      if (isBug) {
        setHoverState('bug');
        return;
      }

      const isInteractive = el.closest('button, a, input, select, textarea, [role="button"], [tabindex]:not([tabindex="-1"])');
      if (isInteractive) {
        setHoverState('interactive');
        return;
      }

      setHoverState('default');
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    const smoothLoop = () => {
      lerpRef.current.x += (targetRef.current.x - lerpRef.current.x) * 0.24;
      lerpRef.current.y += (targetRef.current.y - lerpRef.current.y) * 0.24;
      setLerpPos({ x: lerpRef.current.x, y: lerpRef.current.y });
      rafId.current = requestAnimationFrame(smoothLoop);
    };
    rafId.current = requestAnimationFrame(smoothLoop);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  const isBug = hoverState === 'bug';
  const isInteractive = hoverState === 'interactive';

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {/* Soft Ambient Canopy Flashlight Glow (Follows pointer) */}
      <div
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none will-change-transform transition-all duration-300 ease-out"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
          width: isBug ? '280px' : isInteractive ? '220px' : '180px',
          height: isBug ? '280px' : isInteractive ? '220px' : '180px',
          background: isBug
            ? 'radial-gradient(circle, rgba(251, 191, 36, 0.15) 0%, rgba(251, 191, 36, 0.04) 45%, transparent 70%)'
            : isInteractive
            ? 'radial-gradient(circle, rgba(34, 211, 238, 0.12) 0%, rgba(16, 185, 129, 0.03) 45%, transparent 70%)'
            : 'radial-gradient(circle, rgba(16, 185, 129, 0.09) 0%, rgba(5, 150, 105, 0.02) 45%, transparent 70%)',
          filter: 'blur(8px)',
          zIndex: 48
        }}
      />

      {/* Instantaneous Zero-Lag Precision Center Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-colors duration-200 z-50"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
          backgroundColor: isBug ? '#fbbf24' : isInteractive ? '#22d3ee' : '#34d399',
          boxShadow: isBug
            ? '0 0 8px #fbbf24, 0 0 16px rgba(251, 191, 36, 0.8)'
            : isInteractive
            ? '0 0 8px #22d3ee, 0 0 14px rgba(34, 211, 238, 0.6)'
            : '0 0 6px #34d399, 0 0 10px rgba(52, 211, 153, 0.5)'
        }}
      />

      {/* Lerped Outer Tactical Reticle with Cybernetic Corner Brackets */}
      <div
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none will-change-transform z-50 transition-[width,height] duration-200 ease-out"
        style={{
          transform: `translate3d(${lerpPos.x}px, ${lerpPos.y}px, 0) ${
            isClicking ? 'scale(0.8)' : isBug ? 'rotate(45deg) scale(1.18)' : 'scale(1)'
          }`,
          width: isBug ? '48px' : isInteractive ? '42px' : '32px',
          height: isBug ? '48px' : isInteractive ? '42px' : '32px'
        }}
      >
        {/* Radar Ping on Bug Lock */}
        {isBug && (
          <div className="absolute inset-0 rounded-full border border-amber-400 animate-ping opacity-75" />
        )}

        {/* 4 Corner Brackets SVG */}
        <svg
          className="w-full h-full drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]"
          viewBox="0 0 40 40"
          fill="none"
          stroke={isBug ? '#fbbf24' : isInteractive ? '#22d3ee' : '#10b981'}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Top-Left Bracket */}
          <path d="M4 11 V4 H11" />
          {/* Top-Right Bracket */}
          <path d="M29 4 H36 V11" />
          {/* Bottom-Right Bracket */}
          <path d="M36 29 V36 H29" />
          {/* Bottom-Left Bracket */}
          <path d="M11 36 H4 V29" />

          {/* Micro Target Cross Lines */}
          <line x1="20" y1="7" x2="20" y2="11" strokeOpacity={isBug ? '1' : '0.5'} />
          <line x1="20" y1="29" x2="20" y2="33" strokeOpacity={isBug ? '1' : '0.5'} />
          <line x1="7" y1="20" x2="11" y2="20" strokeOpacity={isBug ? '1' : '0.5'} />
          <line x1="29" y1="20" x2="33" y2="20" strokeOpacity={isBug ? '1' : '0.5'} />
        </svg>

        {/* Tactical Lock-On HUD Badge when Target is a Perched Bug */}
        {isBug && (
          <div
            className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap px-1.5 py-0.5 rounded bg-amber-950/95 border border-amber-500 font-mono text-[9px] font-bold text-amber-300 tracking-wider shadow-lg flex items-center gap-1 pointer-events-none"
            style={{ transform: 'rotate(-45deg) translate(-10px, -14px)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
            <span>LOCK_ON // SQUASH</span>
          </div>
        )}
      </div>
    </div>
  );
};

// ============================================================================
// CANOPY SNAKE ARCADE MODAL
// ============================================================================
const GRID_SIZE = 18; // 18x18 matrix
const INITIAL_SNAKE = [
  { x: 9, y: 9 },
  { x: 9, y: 10 },
  { x: 9, y: 11 }
];
const INITIAL_DIR = { x: 0, y: -1 }; // Moving UP

const SnakeArcadeModal = ({ isOpen, onClose, onFeedXp }) => {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [dir, setDir] = useState(INITIAL_DIR);
  const [food, setFood] = useState({ x: 5, y: 5, bugId: 1 });
  const [gameState, setGameState] = useState('idle'); // 'idle' | 'running' | 'paused' | 'over'
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [bugsEaten, setBugsEaten] = useState(0);

  const nextDirRef = useRef(INITIAL_DIR);
  const gameLoopRef = useRef(null);

  // Load High Score from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('canopy_snake_hi');
      if (saved) setHighScore(parseInt(saved, 10) || 0);
    } catch {
      // Fallback if localStorage restricted
    }
  }, []);

  // Spawn food on a cell not occupied by the snake
  const spawnFood = useCallback((currentSnake) => {
    let newX, newY, collision;
    do {
      newX = Math.floor(Math.random() * GRID_SIZE);
      newY = Math.floor(Math.random() * GRID_SIZE);
      collision = currentSnake.some((seg) => seg.x === newX && seg.y === newY);
    } while (collision);

    const randomBugId = Math.floor(Math.random() * 4) + 1;
    return { x: newX, y: newY, bugId: randomBugId };
  }, []);

  // Reset Game
  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setDir(INITIAL_DIR);
    nextDirRef.current = INITIAL_DIR;
    setFood(spawnFood(INITIAL_SNAKE));
    setScore(0);
    setBugsEaten(0);
    setGameState('running');
  };

  // Direction handler (prevents reversing directly into self)
  const changeDirection = useCallback((newDir) => {
    if (gameState !== 'running') return;
    const current = nextDirRef.current;
    if (current.x + newDir.x === 0 && current.y + newDir.y === 0) return; // Prevent 180 deg reversal
    nextDirRef.current = newDir;
    setDir(newDir);
  }, [gameState]);

  // Main game tick
  const tick = useCallback(() => {
    setSnake((prevSnake) => {
      const head = prevSnake[0];
      const movement = nextDirRef.current;
      const newHead = { x: head.x + movement.x, y: head.y + movement.y };

      // Wall Collision (Toroidal wrap or wall defeat? Let's use bounded walls for retro excitement)
      if (
        newHead.x < 0 ||
        newHead.x >= GRID_SIZE ||
        newHead.y < 0 ||
        newHead.y >= GRID_SIZE
      ) {
        setGameState('over');
        return prevSnake;
      }

      // Self Collision
      if (prevSnake.some((seg) => seg.x === newHead.x && seg.y === newHead.y)) {
        setGameState('over');
        return prevSnake;
      }

      // Check if food eaten
      if (newHead.x === food.x && newHead.y === food.y) {
        setScore((prev) => {
          const nextScore = prev + 50;
          if (nextScore > highScore) {
            setHighScore(nextScore);
            try {
              localStorage.setItem('canopy_snake_hi', nextScore.toString());
            } catch {}
          }
          return nextScore;
        });
        setBugsEaten((prev) => prev + 1);
        onFeedXp(50); // Give 50 XP bonus towards general expedition!

        const grownSnake = [newHead, ...prevSnake];
        setFood(spawnFood(grownSnake));
        return grownSnake;
      }

      // Regular step: prepend new head, remove tail
      return [newHead, ...prevSnake.slice(0, -1)];
    });
  }, [food, highScore, spawnFood, onFeedXp]);

  // Game Loop interval
  useEffect(() => {
    if (gameState === 'running') {
      gameLoopRef.current = setInterval(tick, 115);
    } else {
      clearInterval(gameLoopRef.current);
    }
    return () => clearInterval(gameLoopRef.current);
  }, [gameState, tick]);

  // Keyboard navigation listener (active only when modal is open)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
          e.preventDefault();
          changeDirection({ x: 0, y: -1 });
          break;
        case 'ArrowDown':
        case 's':
        case 'S':
          e.preventDefault();
          changeDirection({ x: 0, y: 1 });
          break;
        case 'ArrowLeft':
        case 'a':
        case 'A':
          e.preventDefault();
          changeDirection({ x: -1, y: 0 });
          break;
        case 'ArrowRight':
        case 'd':
        case 'D':
          e.preventDefault();
          changeDirection({ x: 1, y: 0 });
          break;
        case ' ':
          e.preventDefault();
          setGameState((prev) => (prev === 'running' ? 'paused' : prev === 'paused' ? 'running' : 'running'));
          break;
        case 'Escape':
          onClose();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, changeDirection, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4" role="dialog" aria-modal="true" aria-label="Canopy Python Snake Arcade">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
      />

      {/* Arcade Cabinet Container */}
      <div className="relative w-full max-w-lg bg-gradient-to-b from-[#02140c] via-[#041d12] to-[#010905] border-2 border-emerald-500/80 rounded-3xl p-5 sm:p-6 shadow-[0_0_50px_rgba(16,185,129,0.35)] z-10 flex flex-col items-center">
        
        {/* Header Bar */}
        <div className="w-full flex items-center justify-between pb-3 border-b border-emerald-800/80 mb-3">
          <div className="flex items-center gap-2">
            <span className="text-xl">🐍</span>
            <div>
              <h3 className="text-lg font-bold font-mono text-white tracking-wide">
                CANOPY_PYTHON // HEAP_COLLECTOR
              </h3>
              <p className="text-[10px] font-mono text-emerald-400">
                Consume software bugs to reclaim heap memory!
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-emerald-950 border border-emerald-700 text-emerald-300 hover:text-white"
            aria-label="Close Arcade"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Score Readout Strip */}
        <div className="w-full grid grid-cols-3 gap-2 mb-3 text-center font-mono text-xs">
          <div className="p-2 rounded-xl bg-emerald-950/60 border border-emerald-800">
            <span className="block text-[9px] text-emerald-400/80 uppercase">Heap Freed</span>
            <span className="text-base font-bold text-amber-300">{score} MB</span>
          </div>
          <div className="p-2 rounded-xl bg-emerald-950/60 border border-emerald-800">
            <span className="block text-[9px] text-emerald-400/80 uppercase">High Score</span>
            <span className="text-base font-bold text-emerald-300">{highScore} MB</span>
          </div>
          <div className="p-2 rounded-xl bg-emerald-950/60 border border-emerald-800">
            <span className="block text-[9px] text-emerald-400/80 uppercase">Bugs Ingested</span>
            <span className="text-base font-bold text-cyan-300">{bugsEaten}</span>
          </div>
        </div>

        {/* 18x18 Retro Grid Arena */}
        <div className="relative w-full aspect-square max-w-[340px] sm:max-w-[380px] bg-[#010905] border-2 border-emerald-700/80 rounded-2xl overflow-hidden shadow-inner p-1">
          {/* Subtle Grid Pattern Overlay */}
          <div
            className="w-full h-full grid"
            style={{
              gridTemplateColumns: `repeat(${GRID_SIZE}, minmax(0, 1fr))`,
              gridTemplateRows: `repeat(${GRID_SIZE}, minmax(0, 1fr))`
            }}
          >
            {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, index) => {
              const x = index % GRID_SIZE;
              const y = Math.floor(index / GRID_SIZE);

              const isHead = snake[0].x === x && snake[0].y === y;
              const isBody = !isHead && snake.some((seg) => seg.x === x && seg.y === y);
              const isFood = food.x === x && food.y === y;

              return (
                <div
                  key={index}
                  className="relative flex items-center justify-center border border-emerald-950/30"
                >
                  {/* Snake Head */}
                  {isHead && (
                    <div className="w-full h-full rounded-sm bg-emerald-400 shadow-[0_0_8px_#34d399] flex items-center justify-center">
                      <span className="w-1 h-1 rounded-full bg-[#020b07]" />
                    </div>
                  )}

                  {/* Snake Body Segment */}
                  {isBody && (
                    <div className="w-[85%] h-[85%] rounded-sm bg-gradient-to-br from-emerald-500 to-teal-700 shadow-[0_0_4px_rgba(16,185,129,0.5)]" />
                  )}

                  {/* Target Bug Food */}
                  {isFood && (
                    <div className="relative w-full h-full flex items-center justify-center animate-pulse">
                      <span className="w-3 h-3 rounded-full bg-amber-400 shadow-[0_0_10px_#fbbf24]" />
                      <span className="absolute inset-0 rounded-full border border-amber-300 animate-ping opacity-60" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Overlay States: Start, Paused, Game Over */}
          {gameState === 'idle' && (
            <div className="absolute inset-0 bg-[#010905]/85 backdrop-blur-xs flex flex-col items-center justify-center p-4 text-center space-y-3">
              <span className="text-4xl">🐍</span>
              <h4 className="text-lg font-bold font-mono text-white">READY TO HUNT BUGS?</h4>
              <p className="text-xs text-emerald-200/80 font-mono max-w-xs">
                Use Arrow Keys or WASD (or the on-screen D-pad) to slither and clear software bottlenecks!
              </p>
              <button
                onClick={resetGame}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-mono font-bold text-sm shadow-[0_0_20px_rgba(52,211,153,0.5)] transition-transform hover:scale-105"
              >
                START GAME [SPACE]
              </button>
            </div>
          )}

          {gameState === 'paused' && (
            <div className="absolute inset-0 bg-[#010905]/85 backdrop-blur-xs flex flex-col items-center justify-center p-4 text-center space-y-3">
              <Pause className="w-10 h-10 text-amber-400 animate-pulse" />
              <h4 className="text-lg font-bold font-mono text-white">SIMULATION PAUSED</h4>
              <button
                onClick={() => setGameState('running')}
                className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-[#020b07] font-mono font-bold text-xs"
              >
                RESUME [SPACE]
              </button>
            </div>
          )}

          {gameState === 'over' && (
            <div className="absolute inset-0 bg-[#010905]/90 backdrop-blur-xs flex flex-col items-center justify-center p-4 text-center space-y-3 animate-pop-capture">
              <span className="text-3xl">💥</span>
              <h4 className="text-lg font-bold font-mono text-rose-400">HEAP CRASH // RUNTIME COLLISION</h4>
              <p className="text-xs text-emerald-200 font-mono">
                Memory Reclaimed: <strong className="text-amber-300">{score} MB</strong> ({bugsEaten} Bugs)
              </p>
              <div className="flex gap-3 pt-2">
                <button
                  onClick={resetGame}
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-bold text-xs shadow-md transition-transform hover:scale-105 flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>PLAY AGAIN</span>
                </button>
                <button
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-xl bg-emerald-950 border border-emerald-800 text-emerald-300 text-xs font-mono"
                >
                  EXIT
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Tactile D-PAD Controls */}
        <div className="w-full pt-3 flex flex-col items-center space-y-1">
          <div className="text-[10px] font-mono text-emerald-400/80 hidden sm:block">
            Controls: [W/A/S/D] or [Arrow Keys] • [Space] Pause
          </div>

          <div className="flex flex-col items-center gap-1 pt-1">
            <button
              onClick={() => changeDirection({ x: 0, y: -1 })}
              className="w-12 h-10 rounded-lg bg-emerald-950 border border-emerald-700 active:bg-emerald-800 text-emerald-300 flex items-center justify-center font-bold text-lg focus:outline-none"
              aria-label="Move Up"
            >
              ▲
            </button>
            <div className="flex items-center gap-2">
              <button
                onClick={() => changeDirection({ x: -1, y: 0 })}
                className="w-12 h-10 rounded-lg bg-emerald-950 border border-emerald-700 active:bg-emerald-800 text-emerald-300 flex items-center justify-center font-bold text-lg focus:outline-none"
                aria-label="Move Left"
              >
                ◀
              </button>
              <button
                onClick={() => setGameState((prev) => (prev === 'running' ? 'paused' : 'running'))}
                className="w-12 h-10 rounded-lg bg-amber-950/70 border border-amber-600 text-amber-300 flex items-center justify-center text-xs font-mono font-bold focus:outline-none"
                aria-label="Toggle Pause"
              >
                {gameState === 'running' ? '⏸' : '▶'}
              </button>
              <button
                onClick={() => changeDirection({ x: 1, y: 0 })}
                className="w-12 h-10 rounded-lg bg-emerald-950 border border-emerald-700 active:bg-emerald-800 text-emerald-300 flex items-center justify-center font-bold text-lg focus:outline-none"
                aria-label="Move Right"
              >
                ▶
              </button>
            </div>
            <button
              onClick={() => changeDirection({ x: 0, y: 1 })}
              className="w-12 h-10 rounded-lg bg-emerald-950 border border-emerald-700 active:bg-emerald-800 text-emerald-300 flex items-center justify-center font-bold text-lg focus:outline-none"
              aria-label="Move Down"
            >
              ▼
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

// ============================================================================
// MAIN COMPONENT: APP
// ============================================================================
export default function App() {
  // Bug Catcher State
  const [caughtBugs, setCaughtBugs] = useState([]);
  const [justSquashedId, setJustSquashedId] = useState(null);
  const [isJournalOpen, setIsJournalOpen] = useState(false);
  const [activeToast, setActiveToast] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Snake Arcade Modal State
  const [isSnakeModalOpen, setIsSnakeModalOpen] = useState(false);
  const [arcadeBonusXp, setArcadeBonusXp] = useState(0);

  // Profile picture fallback state
  const [imgError, setImgError] = useState(false);

  // AWS Amplify Live Deployment Pipeline Simulation State
  const [pipelineState, setPipelineState] = useState('idle'); // 'idle' | 'running' | 'success'
  const [pipelineStep, setPipelineStep] = useState(0); // 0 to 4
  const [buildLogs, setBuildLogs] = useState([
    'Connected to AWS Amplify console [ap-south-1]...',
    'Awaiting Git trigger on branch: refs/heads/main'
  ]);

  // Handle Squashing a Bug
  const squashBug = (bugId) => {
    const specimen = INSECT_SPECIMENS.find((b) => b.id === bugId);
    if (!specimen) return;

    if (!caughtBugs.includes(bugId)) {
      const updated = [...caughtBugs, bugId];
      setCaughtBugs(updated);
      setJustSquashedId(bugId);
      setTimeout(() => setJustSquashedId(null), 1200);

      // Trigger bottom-right discovery toast
      setActiveToast({
        id: specimen.id,
        name: specimen.name,
        rarity: specimen.rarity,
        color: specimen.color,
        squashedTitle: specimen.squashedTitle,
        story: specimen.story,
        metric: specimen.metricUnlocked
      });
    } else {
      // If already caught, open the field journal to that specimen
      setIsJournalOpen(true);
    }
  };

  // Speedrun Toggle for Busy AWS Judges
  const toggleSpeedrun = () => {
    if (caughtBugs.length === 4) {
      setCaughtBugs([]);
      setActiveToast(null);
    } else {
      setCaughtBugs([1, 2, 3, 4]);
      setActiveToast({
        id: 'all',
        name: 'Expedition Master Speedrun',
        rarity: 'PERFECT',
        color: '#fbbf24',
        squashedTitle: 'All 4 Critical Architecture Bugs Remediated!',
        story: 'Judge speedrun activated: Golden Firefly, Rhino Beetle, Morpho Dragonfly, and Ladybug fully documented in your Field Journal.',
        metric: '+1000 Total XP • Full Cloud Architecture Unlocked'
      });
    }
  };

  // Auto-dismiss toast after 7 seconds
  useEffect(() => {
    if (!activeToast) return;
    const timer = setTimeout(() => {
      setActiveToast(null);
    }, 7000);
    return () => clearTimeout(timer);
  }, [activeToast]);

  // Explorer Rank based on caught bugs count
  const getRank = () => {
    const count = caughtBugs.length;
    if (count === 4) return { title: 'Master Ecosystem Architect', color: 'text-amber-300 border-amber-500/50 bg-amber-950/40' };
    if (count >= 1) return { title: 'Canopy Debugger', color: 'text-cyan-300 border-cyan-500/50 bg-cyan-950/40' };
    return { title: 'Novice Scout', color: 'text-emerald-300 border-emerald-500/50 bg-emerald-950/40' };
  };

  // Simulate AWS Amplify Git Push Deployment
  const runAmplifySimulation = () => {
    if (pipelineState === 'running') return;
    setPipelineState('running');
    setPipelineStep(1);
    setBuildLogs([
      '⚡ [00:01] Webhook received: git push origin main by @Manaditi',
      '📦 [00:02] Provisioning isolated AWS Amplify Linux container...'
    ]);

    setTimeout(() => {
      setPipelineStep(2);
      setBuildLogs((prev) => [
        ...prev,
        '⚙️ [00:03] Running build: "npm ci && npm run build"',
        '✨ [00:04] Vite/React build optimized: 0 errors, asset hash generated'
      ]);
    }, 1200);

    setTimeout(() => {
      setPipelineStep(3);
      setBuildLogs((prev) => [
        ...prev,
        '🚀 [00:05] Applying SPA rewrite rules (/<*> -> /index.html [200])',
        '🌐 [00:06] Invalidating & hydrating Amazon CloudFront global edge cache'
      ]);
    }, 2400);

    setTimeout(() => {
      setPipelineStep(4);
      setPipelineState('success');
      setBuildLogs((prev) => [
        ...prev,
        '✅ [00:07] DEPLOYMENT VERIFIED: 100/100 Lighthouse Edge Performance',
        '🟢 [00:08] Live production endpoint active on AWS Amplify Hosting!'
      ]);
    }, 3600);
  };

  const totalXp = caughtBugs.length * 250 + arcadeBonusXp;
  const currentRank = getRank();

  return (
    <div className="relative min-h-screen bg-[#020b07] text-[#ecfdf5] selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden font-sans">
      {/* ====================================================================
          INLINE CSS STYLES & CUSTOM KEYFRAME ANIMATIONS
      ==================================================================== */}
      <style>{`
        @keyframes floatFirefly {
          0% { transform: translateY(0px) translateX(0px) scale(0.85); opacity: 0.15; }
          30% { transform: translateY(-35px) translateX(12px) scale(1.15); opacity: 0.85; }
          65% { transform: translateY(-80px) translateX(-12px) scale(0.95); opacity: 0.4; }
          100% { transform: translateY(-130px) translateX(0px) scale(0.7); opacity: 0; }
        }

        @keyframes wingFlutter {
          0%, 100% { transform: rotate(0deg) scaleY(1); }
          50% { transform: rotate(18deg) scaleY(0.75); }
        }

        @keyframes pulseGlow {
          0%, 100% { transform: scale(1); opacity: 0.45; filter: drop-shadow(0 0 4px currentColor); }
          50% { transform: scale(1.35); opacity: 0.9; filter: drop-shadow(0 0 14px currentColor); }
        }

        @keyframes scanlineSweep {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }

        @keyframes popCapture {
          0% { transform: scale(1); filter: brightness(1); }
          40% { transform: scale(1.35) rotate(-15deg); filter: brightness(2) drop-shadow(0 0 16px #34d399); }
          100% { transform: scale(1) rotate(0deg); filter: brightness(1); }
        }

        @keyframes tongueFlick {
          0%, 100% { transform: scaleX(0); opacity: 0; }
          50% { transform: scaleX(1); opacity: 1; }
        }

        .snake-tongue-flick {
          transform-origin: 10px 14px;
          animation: tongueFlick 0.9s ease-in-out infinite;
        }

        .firefly-wing-left {
          transform-origin: 30px 25px;
          animation: wingFlutter 0.12s ease-in-out infinite alternate;
        }
        .firefly-wing-right {
          transform-origin: 34px 25px;
          animation: wingFlutter 0.12s ease-in-out infinite alternate-reverse;
        }
        .beetle-shell-flutter {
          transform-origin: 32px 28px;
          animation: wingFlutter 0.35s ease-in-out infinite alternate;
        }
        .dragonfly-wings-fore {
          transform-origin: 32px 24px;
          animation: wingFlutter 0.09s ease-in-out infinite alternate;
        }
        .dragonfly-wings-hind {
          transform-origin: 32px 27px;
          animation: wingFlutter 0.11s ease-in-out infinite alternate-reverse;
        }
        .ladybug-shell {
          transform-origin: 32px 30px;
          animation: wingFlutter 0.28s ease-in-out infinite alternate;
        }
        .animate-pop-capture {
          animation: popCapture 0.8s ease-out forwards;
        }

        @media (hover: hover) and (pointer: fine) {
          body, a, button, [role="button"] {
            cursor: none !important;
          }
        }
      `}</style>

      {/* ====================================================================
          TACTICAL BUG HUNTER CROSSHAIR CURSOR (60FPS HARDWARE ACCELERATED)
      ==================================================================== */}
      <TacticalCrosshairCursor />

      {/* ====================================================================
          AMBIENT BIOLUMINESCENT BACKGROUND LAYER
      ==================================================================== */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 -left-32 w-96 sm:w-[600px] h-96 sm:h-[600px] rounded-full bg-gradient-to-br from-cyan-500/10 via-emerald-500/5 to-transparent blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-96 sm:w-[700px] h-96 sm:h-[700px] rounded-full bg-gradient-to-bl from-emerald-500/10 via-teal-500/5 to-transparent blur-3xl" />
        <div className="absolute -bottom-40 left-1/4 w-96 sm:w-[800px] h-96 sm:h-[800px] rounded-full bg-gradient-to-tr from-emerald-600/10 via-amber-500/5 to-transparent blur-3xl" />

        <svg className="absolute -top-12 -left-12 w-64 h-64 text-emerald-800/15" viewBox="0 0 200 200" fill="currentColor">
          <path d="M40 0C60 40 40 80 10 100C40 100 80 80 100 40C100 70 80 110 50 140C80 130 120 100 130 60C140 100 120 140 80 170C120 160 160 130 170 80C170 120 150 160 110 190C160 180 190 140 200 100V0H40Z" />
        </svg>
        <svg className="absolute -bottom-16 -right-16 w-80 h-80 text-emerald-900/15 rotate-180" viewBox="0 0 200 200" fill="currentColor">
          <path d="M40 0C60 40 40 80 10 100C40 100 80 80 100 40C100 70 80 110 50 140C80 130 120 100 130 60C140 100 120 140 80 170C120 160 160 130 170 80C170 120 150 160 110 190C160 180 190 140 200 100V0H40Z" />
        </svg>

        {/* 14 Floating Firefly Light Spores */}
        {[
          { left: '8%', top: '15%', delay: '0s', dur: '7s' },
          { left: '22%', top: '45%', delay: '1.5s', dur: '8.5s' },
          { left: '35%', top: '80%', delay: '0.8s', dur: '6.5s' },
          { left: '48%', top: '25%', delay: '2.8s', dur: '9s' },
          { left: '60%', top: '65%', delay: '1.1s', dur: '7.8s' },
          { left: '75%', top: '18%', delay: '3.2s', dur: '8.2s' },
          { left: '88%', top: '50%', delay: '0.4s', dur: '6.9s' },
          { left: '15%', top: '70%', delay: '2.1s', dur: '8.7s' },
          { left: '30%', top: '12%', delay: '4.0s', dur: '7.2s' },
          { left: '55%', top: '90%', delay: '1.9s', dur: '9.3s' },
          { left: '68%', top: '35%', delay: '2.5s', dur: '6.8s' },
          { left: '82%', top: '85%', delay: '3.7s', dur: '8.1s' },
          { left: '92%', top: '28%', delay: '1.3s', dur: '7.5s' },
          { left: '42%', top: '52%', delay: '3.0s', dur: '8.4s' }
        ].map((f, i) => (
          <span
            key={i}
            className="absolute block w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]"
            style={{
              left: f.left,
              top: f.top,
              animation: `floatFirefly ${f.dur} ease-in-out infinite`,
              animationDelay: f.delay
            }}
          />
        ))}
      </div>

      {/* ====================================================================
          STICKY TOP NAVBAR
      ==================================================================== */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#020b07]/85 border-b border-emerald-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
            {/* Left: Brand Identity */}
            <a
              href="#about"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded-lg p-1"
              aria-label="Manav Rana - Canopy OS Home"
            >
              <CanopyLogo className="w-10 h-10 sm:w-11 sm:h-11" />
              <div className="flex flex-col">
                <span className="text-sm sm:text-base font-bold tracking-wider text-emerald-100 font-mono flex items-center gap-1.5 group-hover:text-white transition-colors">
                  MANAV.RANA <span className="text-emerald-500">//</span> CANOPY_OS
                </span>
                <span className="text-[10px] tracking-widest text-emerald-400/90 font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  AWS AMPLIFY LIVE
                </span>
              </div>
            </a>

            {/* Center: Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-sm font-medium text-emerald-200/80">
              <a
                href="#about"
                className="px-3 py-2 rounded-lg hover:text-emerald-100 hover:bg-emerald-950/50 transition-colors"
              >
                About Me
              </a>
              <a
                href="#skills"
                className="px-3 py-2 rounded-lg hover:text-emerald-100 hover:bg-emerald-950/50 transition-colors"
              >
                Tech Superpowers
              </a>
              <a
                href="#projects"
                className="px-3 py-2 rounded-lg hover:text-emerald-100 hover:bg-emerald-950/50 transition-colors"
              >
                Projects
              </a>
              <a
                href="#architecture"
                className="px-3 py-2 rounded-lg hover:text-emerald-100 hover:bg-emerald-950/50 transition-colors"
              >
                AWS Architecture
              </a>
            </nav>

            {/* Right: Interactive HUD Controls */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Snake Arcade Quick Launch Button */}
              <button
                onClick={() => setIsSnakeModalOpen(true)}
                className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-emerald-950/70 border border-emerald-600/70 hover:border-emerald-400 text-xs sm:text-sm font-medium text-emerald-200 hover:text-emerald-50 transition-all shadow-sm hover:shadow-[0_0_12px_rgba(52,211,153,0.3)] focus:outline-none focus:ring-2 focus:ring-emerald-400"
                aria-label="Open Canopy Snake Arcade"
                title="Play retro Canopy Python Snake mini-game"
              >
                <span className="text-sm">🐍</span>
                <span className="hidden lg:inline">Snake Arcade</span>
              </button>

              {/* Field Journal Pill */}
              <button
                onClick={() => setIsJournalOpen(true)}
                className="flex items-center gap-2 px-3 py-1.5 sm:py-2 rounded-xl bg-emerald-950/70 border border-emerald-700/60 hover:border-emerald-400 text-xs sm:text-sm font-medium text-emerald-200 hover:text-emerald-50 transition-all shadow-sm hover:shadow-[0_0_12px_rgba(52,211,153,0.3)] focus:outline-none focus:ring-2 focus:ring-emerald-400"
                aria-label={`Open Field Journal. ${caughtBugs.length} of 4 bugs squashed.`}
              >
                <Bug className="w-4 h-4 text-emerald-400 animate-pulse" />
                <span className="hidden sm:inline">Field Journal:</span>
                <span className="font-mono font-bold text-emerald-300">[{caughtBugs.length}/4]</span>
                <div className="w-10 sm:w-14 bg-emerald-950 rounded-full h-1.5 overflow-hidden border border-emerald-800">
                  <div
                    className="bg-gradient-to-r from-emerald-500 to-cyan-400 h-full transition-all duration-500"
                    style={{ width: `${(caughtBugs.length / 4) * 100}%` }}
                  />
                </div>
              </button>

              {/* Judge Shortcut Speedrun Button */}
              <button
                onClick={toggleSpeedrun}
                className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-mono font-semibold transition-all shadow-sm focus:outline-none focus:ring-2 ${
                  caughtBugs.length === 4
                    ? 'bg-emerald-900/60 border border-emerald-500/60 text-emerald-200 hover:bg-emerald-800/80 focus:ring-emerald-400'
                    : 'bg-amber-950/70 border border-amber-600/70 text-amber-200 hover:bg-amber-900/80 hover:border-amber-400 focus:ring-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.25)]'
                }`}
                title={caughtBugs.length === 4 ? "Reset Bugs" : "Speedrun shortcut for AWS judges"}
                aria-label={caughtBugs.length === 4 ? "Reset Bugs" : "Speedrun shortcut to catch all bugs"}
              >
                {caughtBugs.length === 4 ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 text-emerald-300" />
                    <span className="hidden sm:inline">Reset Bugs</span>
                    <span className="sm:hidden">Reset</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-3.5 h-3.5 text-amber-400 animate-bounce" />
                    <span className="hidden sm:inline">⚡ Speedrun: Catch All</span>
                    <span className="sm:hidden">Speedrun</span>
                  </>
                )}
              </button>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-emerald-950/60 border border-emerald-800 text-emerald-300 hover:text-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-emerald-900/60 bg-[#020b07]/95 px-4 pt-3 pb-5 space-y-2 backdrop-blur-xl">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-emerald-200 hover:bg-emerald-950/80 font-medium"
            >
              About Me
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-emerald-200 hover:bg-emerald-950/80 font-medium"
            >
              Tech Superpowers
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-emerald-200 hover:bg-emerald-950/80 font-medium"
            >
              Projects
            </a>
            <a
              href="#architecture"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-emerald-200 hover:bg-emerald-950/80 font-medium"
            >
              AWS Architecture
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsSnakeModalOpen(true);
              }}
              className="w-full text-left px-3 py-2 rounded-lg text-amber-300 hover:bg-emerald-950/80 font-medium flex items-center gap-2"
            >
              <span>🐍 Launch Snake Arcade</span>
            </button>

            <div className="pt-2 border-t border-emerald-900/60 flex flex-wrap items-center gap-3 px-3">
              <a
                href="https://github.com/Manaditi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-emerald-300 hover:text-white"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/manav-rana-74298b427/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-emerald-300 hover:text-cyan-300"
              >
                <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:manavrana932@gmail.com"
                className="flex items-center gap-1.5 text-xs text-emerald-300 hover:text-rose-300"
              >
                <Mail className="w-4 h-4 text-rose-400" />
                <span>manavrana932@gmail.com</span>
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* ====================================================================
          HIGH-VISIBILITY JUDGE HINT BANNER
      ==================================================================== */}
      <aside aria-label="Expedition Hint for Judges" className="relative z-30 bg-gradient-to-r from-emerald-950/90 via-emerald-900/40 to-amber-950/90 border-b border-emerald-700/40 px-4 py-2.5 text-xs sm:text-sm text-emerald-200 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="flex-shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-mono text-[11px] font-bold">
              🧭
            </span>
            <p className="leading-snug">
              <strong className="text-amber-300 font-mono uppercase tracking-wider">EXPEDITION HINT FOR JUDGES:</strong>{' '}
              <span className="text-emerald-100">4 bioluminescent insects are perched across this portfolio!</span>{' '}
              Click any glowing bug to squash a real-world engineering bug, launch the <strong>Canopy Snake Arcade 🐍</strong>, or browse freely with zero navigation locks.
            </p>
          </div>
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={() => setIsSnakeModalOpen(true)}
              className="flex-shrink-0 inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-200 border border-emerald-500/40 font-mono text-xs transition-colors"
            >
              <span>🐍 Play Snake</span>
            </button>
            <button
              onClick={toggleSpeedrun}
              className="flex-shrink-0 inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 border border-amber-500/40 font-mono text-xs transition-colors"
            >
              {caughtBugs.length === 4 ? "↺ Reset" : "⚡ 1-Click Catch All"}
            </button>
          </div>
        </div>
      </aside>

      {/* ====================================================================
          MAIN CONTENT CONTAINER
      ==================================================================== */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-24 sm:space-y-32">

        {/* ------------------------------------------------------------------
            SECTION 1: HERO & ABOUT ME (#about)
        ------------------------------------------------------------------ */}
        <section id="about" className="scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column (7 cols): Bio, Headline, Action CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-700/60 text-emerald-300 text-xs sm:text-sm font-mono tracking-wide">
                <Compass className="w-4 h-4 text-emerald-400" />
                <span>FIELD RESEARCHER // PARUL UNIVERSITY — CSE (AI & ML)</span>
              </div>

              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-sans">
                  Manav Rana
                </h1>
                <p className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 bg-clip-text text-transparent leading-relaxed">
                  Engineering Resilient AI Systems, Fast Algorithms & Cloud Pipelines.
                </p>
              </div>

              <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed max-w-2xl">
                I am an undergraduate Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning at Parul University. I thrive at the intersection of interview-grade Java Data Structures &amp; Algorithms, generative AI application architecture, and zero-downtime cloud deployments on AWS Amplify. Whether squashing tricky memory bottlenecks or shipping hackathon products from scratch, I build software designed to perform under pressure.
              </p>

              {/* Quick Info Pills */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/50 border border-emerald-800/60 text-xs sm:text-sm font-mono text-emerald-200">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" /> Gujarat, India
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/50 border border-emerald-800/60 text-xs sm:text-sm font-mono text-emerald-200">
                  <Code2 className="w-3.5 h-3.5 text-amber-400" /> Primary: Java &amp; Python DSA
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/50 border border-emerald-800/60 text-xs sm:text-sm font-mono text-emerald-200">
                  <AwsAmplifyIcon className="w-3.5 h-3.5 text-cyan-400" /> Hosted on AWS Amplify
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/50 border border-emerald-800/60 text-xs sm:text-sm font-mono text-emerald-200">
                  <GraduationCap className="w-3.5 h-3.5 text-emerald-400" /> B.Tech CSE (AIML)
                </span>
                <a
                  href="mailto:manavrana932@gmail.com"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/50 border border-emerald-800/60 hover:border-rose-400 text-xs sm:text-sm font-mono text-emerald-200 hover:text-white transition-all shadow-sm"
                  title="Send email to Manav Rana"
                >
                  <Mail className="w-3.5 h-3.5 text-rose-400" /> manavrana932@gmail.com
                </a>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold shadow-[0_0_20px_rgba(16,185,129,0.35)] transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-400"
                >
                  <span>Explore Projects</span>
                  <ChevronRight className="w-4 h-4" />
                </a>

                <a
                  href="https://github.com/Manaditi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-950/70 border border-emerald-700/70 hover:border-emerald-400 text-emerald-200 hover:text-white font-medium transition-all hover:bg-emerald-900/60 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
                </a>

                <a
                  href="https://www.linkedin.com/in/manav-rana-74298b427/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-950/70 border border-emerald-700/70 hover:border-cyan-400 text-emerald-200 hover:text-white font-medium transition-all hover:bg-emerald-900/60 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
                </a>

                <a
                  href="mailto:manavrana932@gmail.com"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-950/70 border border-emerald-700/70 hover:border-rose-400 text-emerald-200 hover:text-white font-medium transition-all hover:bg-emerald-900/60 focus:outline-none focus:ring-2 focus:ring-rose-400"
                >
                  <Mail className="w-4 h-4 text-rose-400" />
                  <span>Email</span>
                </a>

                <button
                  onClick={() => setIsSnakeModalOpen(true)}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-900/40 border border-emerald-500/60 hover:border-emerald-400 text-emerald-200 font-medium text-sm transition-all hover:bg-emerald-800/50 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                >
                  <span>🐍 Play Snake</span>
                </button>
              </div>
            </div>

            {/* Right Column (5 cols): Tactile Expedition Researcher ID Card */}
            <div className="lg:col-span-5 relative">
              
              {/* INTERACTIVE BUG #1: Golden Firefly (Perched on card corner) */}
              <div className="absolute -top-6 -right-3 z-30">
                <button
                  onClick={() => squashBug(1)}
                  data-cursor-target="bug"
                  className={`group relative flex items-center justify-center p-2 rounded-full transition-transform focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                    caughtBugs.includes(1) ? 'opacity-80 scale-95' : 'hover:scale-110 active:scale-95'
                  } ${justSquashedId === 1 ? 'animate-pop-capture' : ''}`}
                  style={{ minWidth: '44px', minHeight: '44px' }}
                  aria-label={caughtBugs.includes(1) ? "Golden Firefly already squashed" : "Click to squash bug: Golden Firefly"}
                >
                  {!caughtBugs.includes(1) && (
                    <span className="absolute inset-0 rounded-full border-2 border-amber-400/80 animate-ping opacity-75" />
                  )}
                  <InsectIcon id={1} isSquashed={caughtBugs.includes(1)} />

                  {caughtBugs.includes(1) ? (
                    <span className="absolute -bottom-2 -left-2 px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-950 border border-amber-500 text-amber-300">
                      ✓ SQUASHED
                    </span>
                  ) : (
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-0.5 rounded bg-amber-950/90 border border-amber-500 text-[10px] font-mono text-amber-200 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
                      Click to squash bug!
                    </span>
                  )}
                </button>
              </div>

              {/* The ID Card Container */}
              <div className="relative rounded-2xl bg-gradient-to-b from-emerald-950/50 to-[#03120b]/90 border border-emerald-800/60 p-5 backdrop-blur-md shadow-[0_0_30px_rgba(6,78,59,0.35)] overflow-hidden">
                <span className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-emerald-400" />
                <span className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-emerald-400" />
                <span className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-emerald-400" />
                <span className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-emerald-400" />

                <div className="flex items-center justify-between pb-3 border-b border-emerald-800/60 font-mono text-xs text-emerald-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    ID_SPECIMEN // PLAYER_01
                  </span>
                  <span className="text-[11px] text-emerald-300/80">STATUS: ONLINE</span>
                </div>

                <div className="relative mt-4 rounded-xl overflow-hidden aspect-[4/5] bg-emerald-950/80 border border-emerald-700/50 shadow-inner group">
                  {!imgError ? (
                    <img
                      src={`${import.meta.env.BASE_URL}images/profile.webp`}
                      alt="Manav Rana - Student Builder"
                      onError={() => setImgError(true)}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-emerald-950 via-[#041a10] to-[#020b07] relative">
                      <div className="relative w-28 h-28 rounded-full border-2 border-emerald-400/80 flex items-center justify-center bg-emerald-900/40 shadow-[0_0_20px_rgba(52,211,153,0.3)] mb-4">
                        <span className="text-4xl font-extrabold font-mono text-emerald-200">MR</span>
                        <span className="absolute -bottom-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-950 border border-emerald-400 text-emerald-300">
                          AI &amp; ML
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-emerald-100 font-mono">MANAV RANA</h4>
                      <p className="text-xs text-emerald-400 font-mono mt-1">RESEARCHER_ID: 2026-AIML-PU</p>
                      <div className="flex gap-2 mt-4 text-[10px] font-mono text-emerald-300/80">
                        <span className="px-2 py-1 rounded bg-emerald-900/30 border border-emerald-800">PARUL UNIV</span>
                        <span className="px-2 py-1 rounded bg-emerald-900/30 border border-emerald-800">AWS BUILDER</span>
                      </div>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#020b07] via-transparent to-transparent opacity-85 pointer-events-none" />
                  <div className="absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-emerald-400/10 to-transparent pointer-events-none animate-[scanlineSweep_4s_linear_infinite]" />

                  <div className="absolute bottom-3 left-3 right-3 font-mono">
                    <p className="text-xs text-emerald-400 uppercase tracking-widest">EXPEDITION LEAD</p>
                    <p className="text-sm font-bold text-white">Manav Rana</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 mt-4 text-center font-mono text-[11px]">
                  <div className="p-2 rounded-lg bg-emerald-950/60 border border-emerald-800/60">
                    <span className="block text-emerald-400/70 text-[9px]">ALGO_ENGINE</span>
                    <span className="font-bold text-emerald-200">JAVA_DSA</span>
                  </div>
                  <div className="p-2 rounded-lg bg-emerald-950/60 border border-emerald-800/60">
                    <span className="block text-emerald-400/70 text-[9px]">CLOUD</span>
                    <span className="font-bold text-cyan-300">AWS_AMPLIFY</span>
                  </div>
                  <div className="p-2 rounded-lg bg-emerald-950/60 border border-emerald-800/60">
                    <span className="block text-emerald-400/70 text-[9px]">FOCUS</span>
                    <span className="font-bold text-amber-300">GEN_AI</span>
                  </div>
                </div>

                {/* Direct Researcher Connect Links */}
                <div className="mt-3 pt-3 border-t border-emerald-900/60 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono">
                  <a
                    href="https://www.linkedin.com/in/manav-rana-74298b427/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-emerald-300 hover:text-cyan-300 transition-colors"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5 text-cyan-400" />
                    <span>in/manav-rana</span>
                    <ArrowUpRight className="w-3 h-3 text-emerald-400" />
                  </a>
                  <a
                    href="mailto:manavrana932@gmail.com"
                    className="flex items-center gap-1.5 text-emerald-300 hover:text-rose-300 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-rose-400" />
                    <span>manavrana932@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ------------------------------------------------------------------
            SECTION 2: SKILLS & TECH SUPERPOWERS (#skills)
        ------------------------------------------------------------------ */}
        <section id="skills" className="scroll-mt-28 relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-emerald-900/60 relative">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>TECH SUPERPOWERS &amp; CAPABILITIES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Bioluminescent Ecosystem Stacks
              </h2>
              <p className="text-emerald-200/80 text-sm sm:text-base mt-1 max-w-2xl">
                Engineered for interview-grade algorithmic throughput, robust cloud automation, and low-latency generative AI applications.
              </p>
            </div>

            {/* INTERACTIVE BUG #2: Neon Rhino Beetle (Perched on top-right edge) */}
            <div className="relative mt-4 md:mt-0">
              <button
                onClick={() => squashBug(2)}
                data-cursor-target="bug"
                className={`group relative flex items-center justify-center p-2 rounded-full transition-transform focus:outline-none focus:ring-2 focus:ring-emerald-400 ${
                  caughtBugs.includes(2) ? 'opacity-80 scale-95' : 'hover:scale-110 active:scale-95'
                } ${justSquashedId === 2 ? 'animate-pop-capture' : ''}`}
                style={{ minWidth: '44px', minHeight: '44px' }}
                aria-label={caughtBugs.includes(2) ? "Neon Rhino Beetle already squashed" : "Click to squash bug: Neon Rhino Beetle"}
              >
                {!caughtBugs.includes(2) && (
                  <span className="absolute inset-0 rounded-full border-2 border-emerald-400/80 animate-ping opacity-75" />
                )}
                <InsectIcon id={2} isSquashed={caughtBugs.includes(2)} />

                {caughtBugs.includes(2) ? (
                  <span className="absolute -bottom-2 -left-2 px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-950 border border-emerald-500 text-emerald-300">
                    ✓ SQUASHED
                  </span>
                ) : (
                  <span className="absolute -top-7 right-0 whitespace-nowrap px-2 py-0.5 rounded bg-emerald-950/90 border border-emerald-500 text-[10px] font-mono text-emerald-200 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
                    Click to squash bug!
                  </span>
                )}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Algorithmic Core & Languages */}
            <div className="relative rounded-2xl bg-emerald-950/35 backdrop-blur-md border border-emerald-800/50 hover:border-emerald-500/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(16,185,129,0.2)] flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Algorithmic Core</h3>
                  <p className="text-xs font-mono text-emerald-400 mt-0.5">High-Throughput Systems</p>
                </div>
                
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-1 rounded-md text-xs font-mono bg-emerald-900/40 border border-emerald-700/60 text-amber-300 font-bold">Java (Primary)</span>
                  <span className="px-2 py-1 rounded-md text-xs font-mono bg-emerald-900/40 border border-emerald-700/60 text-emerald-200">Python</span>
                  <span className="px-2 py-1 rounded-md text-xs font-mono bg-emerald-900/40 border border-emerald-700/60 text-emerald-200">C++</span>
                  <span className="px-2 py-1 rounded-md text-xs font-mono bg-emerald-900/40 border border-emerald-700/60 text-emerald-200">JavaScript</span>
                  <span className="px-2 py-1 rounded-md text-xs font-mono bg-emerald-900/40 border border-emerald-700/60 text-emerald-200">SQL</span>
                </div>

                <div className="pt-2 text-xs text-emerald-200/90 leading-relaxed border-t border-emerald-900/50">
                  <p className="font-semibold text-emerald-100 mb-1">Key Focus:</p>
                  2D Matrix Transformations, Dynamic Programming, Binary Search Optimizations, Trees &amp; Graphs, Time/Space Complexity Tuning.
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-emerald-900/50 flex items-center justify-between text-[11px] font-mono text-amber-300/80">
                <span>ASYMPTOTIC: O(1) SPACE</span>
                <span>JAVA 17+</span>
              </div>
            </div>

            {/* Card 2: Cloud & DevOps Ecosystem */}
            <div className="relative rounded-2xl bg-emerald-950/35 backdrop-blur-md border border-emerald-800/50 hover:border-emerald-500/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(34,211,238,0.2)] flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Cloud className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Cloud &amp; DevOps</h3>
                  <p className="text-xs font-mono text-cyan-400 mt-0.5">Automated Edge Infrastructure</p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-1 rounded-md text-xs font-mono bg-emerald-900/40 border border-emerald-700/60 text-cyan-300 font-bold">AWS Amplify</span>
                  <span className="px-2 py-1 rounded-md text-xs font-mono bg-emerald-900/40 border border-emerald-700/60 text-emerald-200">CloudFront CDN</span>
                  <span className="px-2 py-1 rounded-md text-xs font-mono bg-emerald-900/40 border border-emerald-700/60 text-emerald-200">CI/CD Pipelines</span>
                  <span className="px-2 py-1 rounded-md text-xs font-mono bg-emerald-900/40 border border-emerald-700/60 text-emerald-200">Git &amp; GitHub</span>
                  <span className="px-2 py-1 rounded-md text-xs font-mono bg-emerald-900/40 border border-emerald-700/60 text-emerald-200">Linux CLI</span>
                </div>

                <div className="pt-2 text-xs text-emerald-200/90 leading-relaxed border-t border-emerald-900/50">
                  <p className="font-semibold text-emerald-100 mb-1">Key Focus:</p>
                  Automated Branch Deployments, Custom SPA Rewrite Rules, Build Cache Optimization, Zero-Downtime Releases.
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-emerald-900/50 flex items-center justify-between text-[11px] font-mono text-cyan-300/80">
                <span>DEPLOY: GIT TRIGGER</span>
                <span>SUB-50MS EDGE</span>
              </div>
            </div>

            {/* Card 3: Frontend & Interactive UI */}
            <div className="relative rounded-2xl bg-emerald-950/35 backdrop-blur-md border border-emerald-800/50 hover:border-emerald-500/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(52,211,153,0.2)] flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Frontend &amp; UI</h3>
                  <p className="text-xs font-mono text-emerald-400 mt-0.5">Accessible Fluid Experiences</p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-1 rounded-md text-xs font-mono bg-emerald-900/40 border border-emerald-700/60 text-emerald-300 font-bold">React.js</span>
                  <span className="px-2 py-1 rounded-md text-xs font-mono bg-emerald-900/40 border border-emerald-700/60 text-emerald-200">Vite</span>
                  <span className="px-2 py-1 rounded-md text-xs font-mono bg-emerald-900/40 border border-emerald-700/60 text-emerald-200">Tailwind CSS</span>
                  <span className="px-2 py-1 rounded-md text-xs font-mono bg-emerald-900/40 border border-emerald-700/60 text-emerald-200">HTML5/CSS3</span>
                  <span className="px-2 py-1 rounded-md text-xs font-mono bg-emerald-900/40 border border-emerald-700/60 text-emerald-200">Responsive UI</span>
                </div>

                <div className="pt-2 text-xs text-emerald-200/90 leading-relaxed border-t border-emerald-900/50">
                  <p className="font-semibold text-emerald-100 mb-1">Key Focus:</p>
                  Accessible Component Systems, Micro-Animations, High-Lighthouse-Score Web Apps, Single-File Modular Portfolios.
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-emerald-900/50 flex items-center justify-between text-[11px] font-mono text-emerald-300/80">
                <span>WCAG AA COMPLIANT</span>
                <span>60 FPS UI</span>
              </div>
            </div>

            {/* Card 4: Applied AI & Prompt Engineering */}
            <div className="relative rounded-2xl bg-emerald-950/35 backdrop-blur-md border border-emerald-800/50 hover:border-emerald-500/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(244,63,94,0.2)] flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Applied AI &amp; LLMs</h3>
                  <p className="text-xs font-mono text-rose-400 mt-0.5">Prompt Systems &amp; Workflows</p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-1 rounded-md text-xs font-mono bg-emerald-900/40 border border-emerald-700/60 text-rose-300 font-bold">Generative AI</span>
                  <span className="px-2 py-1 rounded-md text-xs font-mono bg-emerald-900/40 border border-emerald-700/60 text-emerald-200">LLM Workflows</span>
                  <span className="px-2 py-1 rounded-md text-xs font-mono bg-emerald-900/40 border border-emerald-700/60 text-emerald-200">Prompt Eng.</span>
                  <span className="px-2 py-1 rounded-md text-xs font-mono bg-emerald-900/40 border border-emerald-700/60 text-emerald-200">AI Studio</span>
                  <span className="px-2 py-1 rounded-md text-xs font-mono bg-emerald-900/40 border border-emerald-700/60 text-emerald-200">JSON Schemas</span>
                </div>

                <div className="pt-2 text-xs text-emerald-200/90 leading-relaxed border-t border-emerald-900/50">
                  <p className="font-semibold text-emerald-100 mb-1">Key Focus:</p>
                  Low-Latency Streaming UIs, Deterministic JSON System Prompts, Guardrails, Autonomous Event AI Assistants.
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-emerald-900/50 flex items-center justify-between text-[11px] font-mono text-rose-300/80">
                <span>STREAMED LLM</span>
                <span>FEW-SHOT GUARD</span>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------
            SECTION 3: FEATURED PROJECTS (#projects)
        ------------------------------------------------------------------ */}
        <section id="projects" className="scroll-mt-28 relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-emerald-900/60 relative">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
                <BookOpen className="w-3.5 h-3.5" />
                <span>PRODUCTION REPOSITORIES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Featured Engineering Projects
              </h2>
              <p className="text-emerald-200/80 text-sm sm:text-base mt-1 max-w-2xl">
                Real-world hackathon products, interview-grade algorithms, and cloud architectures with permanent public code links.
              </p>
            </div>

            {/* INTERACTIVE BUG #3: Morpho Dragonfly (Perched on Projects section header) */}
            <div className="relative mt-4 md:mt-0">
              <button
                onClick={() => squashBug(3)}
                data-cursor-target="bug"
                className={`group relative flex items-center justify-center p-2 rounded-full transition-transform focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                  caughtBugs.includes(3) ? 'opacity-80 scale-95' : 'hover:scale-110 active:scale-95'
                } ${justSquashedId === 3 ? 'animate-pop-capture' : ''}`}
                style={{ minWidth: '44px', minHeight: '44px' }}
                aria-label={caughtBugs.includes(3) ? "Morpho Dragonfly already squashed" : "Click to squash bug: Morpho Dragonfly"}
              >
                {!caughtBugs.includes(3) && (
                  <span className="absolute inset-0 rounded-full border-2 border-cyan-400/80 animate-ping opacity-75" />
                )}
                <InsectIcon id={3} isSquashed={caughtBugs.includes(3)} />

                {caughtBugs.includes(3) ? (
                  <span className="absolute -bottom-2 -left-2 px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-950 border border-cyan-500 text-cyan-300">
                    ✓ SQUASHED
                  </span>
                ) : (
                  <span className="absolute -top-7 right-0 whitespace-nowrap px-2 py-0.5 rounded bg-cyan-950/90 border border-cyan-500 text-[10px] font-mono text-cyan-200 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
                    Click to squash bug!
                  </span>
                )}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Project 1: PlanPulse */}
            <div className="rounded-2xl bg-emerald-950/35 backdrop-blur-md border border-emerald-800/50 hover:border-emerald-500/60 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(251,191,36,0.2)]">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono font-semibold bg-amber-500/15 border border-amber-500/40 text-amber-300">
                    Hack2Skill Hackathon Project
                  </span>
                  <span className="text-xs font-mono text-emerald-400/80">AI ASSISTANT</span>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-emerald-300">
                  PlanPulse — GenAI Event Planning Assistant
                </h3>

                <p className="text-sm text-emerald-100/80 leading-relaxed">
                  Autonomous AI event-planning workspace for weddings, birthdays, and community gatherings that generates dynamic budget allocations, chronological timelines, and vendor checklists.
                </p>

                <div className="p-3 rounded-xl bg-emerald-900/30 border border-emerald-800/60 text-xs font-mono text-emerald-200">
                  <span className="text-amber-400 font-bold block mb-1">⚡ Engineering Highlight:</span>
                  Engineered streamed AI generation and structured JSON output parsing for instant interactive planning with optimistic state rendering.
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {['React', 'GenAI APIs', 'Tailwind CSS', 'Prompt Engineering'].map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-950 border border-emerald-800 text-emerald-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-emerald-900/60 flex items-center justify-between gap-3">
                <a
                  href="https://github.com/Manaditi/Celeste-Luxury-Event-Planning-Suite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-950 hover:bg-emerald-900 border border-emerald-700/70 text-xs font-semibold text-emerald-200 hover:text-white transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repo</span>
                  <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                </a>
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    squashBug(1);
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-amber-950/60 hover:bg-amber-900/70 border border-amber-600/60 text-xs font-semibold text-amber-200 transition-colors"
                >
                  <Bug className="w-3.5 h-3.5 text-amber-400" />
                  <span>Inspect Bug Story</span>
                </a>
              </div>
            </div>

            {/* Project 2: AlgoMatrix */}
            <div className="rounded-2xl bg-emerald-950/35 backdrop-blur-md border border-emerald-800/50 hover:border-emerald-500/60 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(52,211,153,0.2)]">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/15 border border-emerald-500/40 text-emerald-300">
                    Core Systems &amp; DSA
                  </span>
                  <span className="text-xs font-mono text-emerald-400/80">JAVA 17 ENGINE</span>
                </div>

                <h3 className="text-2xl font-bold text-white">
                  AlgoMatrix — High-Throughput Java DSA Suite
                </h3>

                <p className="text-sm text-emerald-100/80 leading-relaxed">
                  Modular collection of optimized Java implementations covering 2D matrix manipulation, binary search variants, recursion, and dynamic programming benchmarks.
                </p>

                <div className="p-3 rounded-xl bg-emerald-900/30 border border-emerald-800/60 text-xs font-mono text-emerald-200">
                  <span className="text-emerald-400 font-bold block mb-1">⚡ Engineering Highlight:</span>
                  Achieved O(1) auxiliary space across 45+ test cases via in-place coordinate swapping and cache-locality memory layout tuning.
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {['Java', 'Data Structures', 'Algorithms', 'Memory Tuning'].map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-950 border border-emerald-800 text-emerald-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-emerald-900/60 flex items-center justify-between gap-3">
                <a
                  href="https://github.com/Manaditi/Manav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-950 hover:bg-emerald-900 border border-emerald-700/70 text-xs font-semibold text-emerald-200 hover:text-white transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repo</span>
                  <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                </a>
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    squashBug(2);
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-950/80 hover:bg-emerald-900/80 border border-emerald-500/60 text-xs font-semibold text-emerald-200 transition-colors"
                >
                  <Bug className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Inspect Bug Story</span>
                </a>
              </div>
            </div>

            {/* Project 3: CloudCanopy */}
            <div className="rounded-2xl bg-emerald-950/35 backdrop-blur-md border border-emerald-800/50 hover:border-emerald-500/60 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/15 border border-cyan-500/40 text-cyan-300">
                    AWS Student Builder Challenge
                  </span>
                  <span className="text-xs font-mono text-cyan-400/80">AMPLIFY ARCHITECTURE</span>
                </div>

                <h3 className="text-2xl font-bold text-white">
                  CloudCanopy — AWS Amplify Portfolio Architecture
                </h3>

                <p className="text-sm text-emerald-100/80 leading-relaxed">
                  Original bioluminescent developer portfolio engineered from scratch with automated Git-triggered AWS Amplify builds, edge caching, and a non-blocking SVG Bug-Hunter game.
                </p>

                <div className="p-3 rounded-xl bg-emerald-900/30 border border-emerald-800/60 text-xs font-mono text-emerald-200">
                  <span className="text-cyan-400 font-bold block mb-1">⚡ Engineering Highlight:</span>
                  Zero-downtime CI/CD pipeline with 100% mobile usability compliance, custom SPA rewrites, and instant judge inspection HUD.
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {['AWS Amplify', 'React', 'Tailwind CSS', 'CloudFront', 'GitHub CI/CD'].map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-950 border border-emerald-800 text-emerald-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-emerald-900/60 flex items-center justify-between gap-3">
                <a
                  href="https://github.com/Manaditi/canopy-os"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-950 hover:bg-emerald-900 border border-emerald-700/70 text-xs font-semibold text-emerald-200 hover:text-white transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repo</span>
                  <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                </a>
                <a
                  href="#architecture"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-cyan-950/70 hover:bg-cyan-900/80 border border-cyan-500/60 text-xs font-semibold text-cyan-200 transition-colors"
                >
                  <AwsAmplifyIcon className="w-3.5 h-3.5 text-cyan-400" />
                  <span>View Pipeline</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------
            SECTION 4: ACHIEVEMENTS & LIVE AWS AMPLIFY PIPELINE (#architecture)
        ------------------------------------------------------------------ */}
        <section id="architecture" className="scroll-mt-28 relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-emerald-900/60 relative">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>EXPEDITION MILESTONES &amp; CLOUD ARCHITECTURE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                AWS Amplify Architecture &amp; Honors
              </h2>
              <p className="text-emerald-200/80 text-sm sm:text-base mt-1 max-w-2xl">
                Verifiable hackathon achievements and our automated continuous deployment pipeline powered by AWS Amplify Hosting.
              </p>
            </div>

            {/* INTERACTIVE BUG #4: Crimson-Gold Ladybug (Perched on this section border) */}
            <div className="relative mt-4 md:mt-0">
              <button
                onClick={() => squashBug(4)}
                data-cursor-target="bug"
                className={`group relative flex items-center justify-center p-2 rounded-full transition-transform focus:outline-none focus:ring-2 focus:ring-rose-400 ${
                  caughtBugs.includes(4) ? 'opacity-80 scale-95' : 'hover:scale-110 active:scale-95'
                } ${justSquashedId === 4 ? 'animate-pop-capture' : ''}`}
                style={{ minWidth: '44px', minHeight: '44px' }}
                aria-label={caughtBugs.includes(4) ? "Crimson-Gold Ladybug already squashed" : "Click to squash bug: Crimson-Gold Ladybug"}
              >
                {!caughtBugs.includes(4) && (
                  <span className="absolute inset-0 rounded-full border-2 border-rose-400/80 animate-ping opacity-75" />
                )}
                <InsectIcon id={4} isSquashed={caughtBugs.includes(4)} />

                {caughtBugs.includes(4) ? (
                  <span className="absolute -bottom-2 -left-2 px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-rose-950 border border-rose-500 text-rose-300">
                    ✓ SQUASHED
                  </span>
                ) : (
                  <span className="absolute -top-7 right-0 whitespace-nowrap px-2 py-0.5 rounded bg-rose-950/90 border border-rose-500 text-[10px] font-mono text-rose-200 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
                    Click to squash bug!
                  </span>
                )}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Panel 1: Milestones & Community Expeditions (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-400" />
                <span>Honors &amp; Hackathons</span>
              </h3>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/60 hover:border-emerald-500/60 transition-colors">
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-bold text-emerald-100 text-sm">Hacktoberfest 2026 Finisher</span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-900/50 text-emerald-300 border border-emerald-700">VERIFIED</span>
                  </div>
                  <p className="text-xs text-emerald-200/80 mt-1 leading-relaxed">
                    Completed open-source pull requests and cloud deployment workflows across modern developer tooling ecosystems.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/60 hover:border-emerald-500/60 transition-colors">
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-bold text-emerald-100 text-sm">Hack2Skill Builder</span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-900/40 text-amber-300 border border-amber-700">HACKATHON</span>
                  </div>
                  <p className="text-xs text-emerald-200/80 mt-1 leading-relaxed">
                    Designed and shipped PlanPulse GenAI event planning assistant under tight 36-hour sprint constraints with streaming AI output.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/60 hover:border-emerald-500/60 transition-colors">
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-bold text-emerald-100 text-sm">PromptWars Volunteer</span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-900/40 text-cyan-300 border border-cyan-700">PARUL UNIV</span>
                  </div>
                  <p className="text-xs text-emerald-200/80 mt-1 leading-relaxed">
                    Supported Parul University AIML Department prompt engineering competition operations and conducted few-shot schema benchmarks.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/60 hover:border-emerald-500/60 transition-colors">
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-bold text-emerald-100 text-sm">Swift Student Challenge 2027 Applicant</span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-rose-900/40 text-rose-300 border border-rose-700">CLUB ENTRY</span>
                  </div>
                  <p className="text-xs text-emerald-200/80 mt-1 leading-relaxed">
                    Registered interactive app playground concept in collaboration with Parul University's Swift Coding Club.
                  </p>
                </div>
              </div>
            </div>

            {/* Panel 2: Interactive AWS Amplify Architecture Card (7 cols) */}
            <div className="lg:col-span-7 rounded-2xl bg-emerald-950/40 backdrop-blur-md border border-emerald-700/60 p-6 space-y-6 shadow-[0_0_30px_rgba(6,78,59,0.3)]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-emerald-800/60">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <AwsAmplifyIcon className="w-5 h-5 text-cyan-400" />
                    <span>AWS Amplify CI/CD Architecture</span>
                  </h3>
                  <p className="text-xs font-mono text-emerald-300 mt-0.5">Automated Branch Deployment Pipeline</p>
                </div>
                
                <button
                  onClick={runAmplifySimulation}
                  disabled={pipelineState === 'running'}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                    pipelineState === 'running'
                      ? 'bg-emerald-900/70 text-emerald-300 border border-emerald-600 animate-pulse'
                      : 'bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-500 text-cyan-200 shadow-[0_0_15px_rgba(34,211,238,0.3)]'
                  }`}
                >
                  <Zap className={`w-4 h-4 ${pipelineState === 'running' ? 'animate-spin' : 'text-amber-400'}`} />
                  <span>{pipelineState === 'running' ? 'Deploying...' : '⚡ Simulate git push Deployment'}</span>
                </button>
              </div>

              {/* 4-Step Pipeline Visual Diagram */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 relative">
                <div className={`p-3.5 rounded-xl border text-center transition-all duration-300 ${
                  pipelineStep >= 1 ? 'bg-emerald-900/50 border-emerald-400 text-white shadow-[0_0_12px_rgba(52,211,153,0.3)]' : 'bg-emerald-950/40 border-emerald-900/80 text-emerald-400/60'
                }`}>
                  <div className="flex items-center justify-center mb-2">
                    <GitBranch className="w-5 h-5 text-emerald-400" />
                  </div>
                  <p className="text-xs font-mono font-bold">1. Git Push</p>
                  <p className="text-[10px] text-emerald-200/70 mt-1">@Manaditi (main)</p>
                </div>

                <div className={`p-3.5 rounded-xl border text-center transition-all duration-300 ${
                  pipelineStep >= 2 ? 'bg-emerald-900/50 border-emerald-400 text-white shadow-[0_0_12px_rgba(52,211,153,0.3)]' : 'bg-emerald-950/40 border-emerald-900/80 text-emerald-400/60'
                }`}>
                  <div className="flex items-center justify-center mb-2">
                    <Terminal className="w-5 h-5 text-amber-400" />
                  </div>
                  <p className="text-xs font-mono font-bold">2. Amplify Build</p>
                  <p className="text-[10px] text-emerald-200/70 mt-1">Vite + React Bundler</p>
                </div>

                <div className={`p-3.5 rounded-xl border text-center transition-all duration-300 ${
                  pipelineStep >= 3 ? 'bg-emerald-900/50 border-emerald-400 text-white shadow-[0_0_12px_rgba(52,211,153,0.3)]' : 'bg-emerald-950/40 border-emerald-900/80 text-emerald-400/60'
                }`}>
                  <div className="flex items-center justify-center mb-2">
                    <RefreshCw className="w-5 h-5 text-cyan-400" />
                  </div>
                  <p className="text-xs font-mono font-bold">3. SPA Rewrites</p>
                  <p className="text-[10px] text-emerald-200/70 mt-1">/&lt;*&gt; -&gt; /index.html</p>
                </div>

                <div className={`p-3.5 rounded-xl border text-center transition-all duration-300 ${
                  pipelineStep >= 4 ? 'bg-emerald-900/50 border-emerald-400 text-white shadow-[0_0_12px_rgba(52,211,153,0.3)]' : 'bg-emerald-950/40 border-emerald-900/80 text-emerald-400/60'
                }`}>
                  <div className="flex items-center justify-center mb-2">
                    <Cloud className="w-5 h-5 text-emerald-400" />
                  </div>
                  <p className="text-xs font-mono font-bold">4. CloudFront CDN</p>
                  <p className="text-[10px] text-emerald-200/70 mt-1">Sub-50ms Global Edge</p>
                </div>
              </div>

              {/* Simulated Build Terminal Window */}
              <div className="rounded-xl bg-[#010905] border border-emerald-900/80 p-4 font-mono text-xs overflow-hidden shadow-inner">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-emerald-900/60 text-emerald-400/70">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-[10px]">aws-amplify-build-runner --region ap-south-1</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {pipelineState === 'running' ? 'EXECUTING PIPELINE' : 'READY'}
                  </span>
                </div>
                <div className="space-y-1 text-emerald-300/90 min-h-[90px]">
                  {buildLogs.map((log, index) => (
                    <div key={index} className="leading-relaxed">
                      {log}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-800/50 flex items-start gap-3 text-xs text-cyan-200">
                <Award className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong className="text-white font-mono">AWS RUBRIC COMPLIANCE:</strong> Automated Git webhook triggers Vite build artifacts, preserves clean single-page deep routing without 404s, and delivers edge-cached assets via Amazon CloudFront CDN.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* ====================================================================
          AMBIENT BIOLUMINESCENT CANOPY VINE SNAKE (HYBRID TRIGGER)
      ==================================================================== */}
      <AmbientVineSnake onLaunchArcade={() => setIsSnakeModalOpen(true)} />

      {/* ====================================================================
          CANOPY SNAKE ARCADE MODAL
      ==================================================================== */}
      <SnakeArcadeModal
        isOpen={isSnakeModalOpen}
        onClose={() => setIsSnakeModalOpen(false)}
        onFeedXp={(xp) => setArcadeBonusXp((prev) => prev + xp)}
      />

      {/* ====================================================================
          FIELD JOURNAL SLIDE-OVER DRAWER / MODAL
      ==================================================================== */}
      {isJournalOpen && (
        <div className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-modal="true" aria-label="Expedition Field Journal">
          <div
            onClick={() => setIsJournalOpen(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
          />

          <div className="relative w-full max-w-xl bg-gradient-to-b from-[#020e09] to-[#041a10] border-l border-emerald-700/60 p-6 sm:p-8 flex flex-col justify-between shadow-2xl z-10 overflow-y-auto">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-emerald-800/60">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400">
                    <Compass className="w-3.5 h-3.5" />
                    <span>SOFTWARE SPECIMEN LOG</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2 mt-1">
                    <span>Expedition Field Journal</span>
                  </h3>
                </div>
                <button
                  onClick={() => setIsJournalOpen(false)}
                  className="p-2 rounded-xl bg-emerald-950/80 border border-emerald-800 text-emerald-300 hover:text-white hover:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  aria-label="Close field journal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Explorer Scorecard & XP Bar */}
              <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-700/60 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-emerald-300">RANK: <strong className={`px-2 py-0.5 rounded border text-[11px] ${currentRank.color}`}>{currentRank.title}</strong></span>
                  <span className="text-amber-300 font-bold">{totalXp} XP {arcadeBonusXp > 0 && `(+${arcadeBonusXp} Snake)`}</span>
                </div>
                
                <div className="w-full bg-emerald-950 rounded-full h-2.5 overflow-hidden border border-emerald-800">
                  <div
                    className="bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-400 h-full transition-all duration-500"
                    style={{ width: `${Math.min(100, (caughtBugs.length / 4) * 100)}%` }}
                  />
                </div>
                <p className="text-[11px] text-emerald-200/70 font-mono text-right">
                  {caughtBugs.length} of 4 Critical Engineering Bugs Remediated
                </p>
              </div>

              {/* CELEBRATION BANNER */}
              {caughtBugs.length === 4 && (
                <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-950/80 via-emerald-950/80 to-cyan-950/80 border-2 border-amber-400/80 shadow-[0_0_30px_rgba(251,191,36,0.35)] space-y-2 animate-bounce-once">
                  <div className="flex items-center gap-2 text-amber-300 font-mono font-bold text-sm">
                    <Trophy className="w-5 h-5 text-amber-400" />
                    <span>🏆 ECOSYSTEM SECURED: AWS CLOUD READY</span>
                  </div>
                  <p className="text-xs text-emerald-100 leading-relaxed">
                    Congratulations! All four real-world engineering bottlenecks have been remediated. From stream latency to zero-allocation memory and edge routing, this architecture is fully optimized for AWS Amplify.
                  </p>
                </div>
              )}

              {/* List of 4 Specimen Cards */}
              <div className="space-y-4">
                <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider">Catalogued Specimens</h4>
                
                {INSECT_SPECIMENS.map((specimen) => {
                  const isCaught = caughtBugs.includes(specimen.id);

                  return (
                    <div
                      key={specimen.id}
                      className={`p-4 rounded-xl border transition-all ${
                        isCaught
                          ? 'bg-emerald-950/70 border-emerald-500/70 shadow-[0_0_15px_rgba(16,185,129,0.15)]'
                          : 'bg-[#010905]/70 border-emerald-900/60 opacity-60'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${
                            isCaught ? 'bg-emerald-900/50 border-emerald-500/50' : 'bg-emerald-950/30 border-emerald-900'
                          }`}>
                            <InsectIcon id={specimen.id} isSquashed={isCaught} />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h5 className="font-bold text-white text-sm">{specimen.name}</h5>
                              <span
                                className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold"
                                style={{
                                  backgroundColor: `${specimen.color}20`,
                                  color: specimen.color,
                                  borderColor: `${specimen.color}40`,
                                  borderWidth: 1
                                }}
                              >
                                {specimen.rarity}
                              </span>
                            </div>
                            <p className="text-xs font-mono text-emerald-400/80">{specimen.scientificName}</p>
                          </div>
                        </div>

                        {isCaught ? (
                          <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-300 font-bold bg-emerald-900/50 px-2 py-0.5 rounded border border-emerald-600">
                            <Check className="w-3.5 h-3.5" /> SQUASHED
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-500/80 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-900">
                            <Lock className="w-3.5 h-3.5" /> LOCKED
                          </span>
                        )}
                      </div>

                      {isCaught ? (
                        <div className="mt-3 pt-3 border-t border-emerald-800/50 space-y-2">
                          <p className="text-xs font-bold text-white">{specimen.squashedTitle}</p>
                          <p className="text-xs text-emerald-200/90 leading-relaxed">{specimen.story}</p>
                          <div className="inline-block mt-1 px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-emerald-900/50 text-amber-300 border border-emerald-700">
                            {specimen.metricUnlocked}
                          </div>
                        </div>
                      ) : (
                        <div className="mt-3 pt-3 border-t border-emerald-900/60 text-xs text-emerald-400/70 font-mono">
                          <span className="text-amber-400">🔍 Clue:</span> {specimen.hint}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-emerald-800/60 mt-6 flex items-center justify-between gap-4">
              <button
                onClick={toggleSpeedrun}
                className="px-4 py-2.5 rounded-xl bg-amber-950/70 border border-amber-600/70 text-amber-200 text-xs font-mono font-bold hover:bg-amber-900 transition-colors"
              >
                {caughtBugs.length === 4 ? '↺ Reset All Specimens' : '⚡ 1-Click Speedrun (Unlock All)'}
              </button>
              <button
                onClick={() => setIsJournalOpen(false)}
                className="px-5 py-2.5 rounded-xl bg-emerald-900/80 border border-emerald-600 text-white text-xs font-semibold hover:bg-emerald-800 transition-colors"
              >
                Close Journal
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          BOTTOM-RIGHT DISCOVERY TOAST
      ==================================================================== */}
      {activeToast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-5 right-5 z-50 max-w-sm sm:max-w-md p-4 rounded-2xl bg-gradient-to-br from-[#03150e] to-[#020b07] border-2 border-emerald-500/80 shadow-[0_0_30px_rgba(52,211,153,0.35)] backdrop-blur-xl animate-bounce-once space-y-3"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-900/60 border border-emerald-500/50 flex items-center justify-center text-emerald-400">
                <Bug className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-amber-300 font-bold block">
                  NEW BUG SQUASHED!
                </span>
                <h4 className="font-bold text-white text-sm">{activeToast.name}</h4>
              </div>
            </div>
            <button
              onClick={() => setActiveToast(null)}
              className="text-emerald-400 hover:text-white p-1 rounded-md"
              aria-label="Dismiss notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-emerald-100 font-semibold leading-snug">
            {activeToast.squashedTitle}
          </p>
          <p className="text-[11px] text-emerald-200/80 leading-relaxed line-clamp-2">
            {activeToast.story}
          </p>

          <div className="flex items-center justify-between pt-2 border-t border-emerald-900/60">
            <span className="text-[10px] font-mono text-amber-300 font-bold">
              {activeToast.metric}
            </span>
            <button
              onClick={() => {
                setActiveToast(null);
                setIsJournalOpen(true);
              }}
              className="text-xs font-semibold text-cyan-300 hover:text-white flex items-center gap-1 font-mono"
            >
              <span>Field Journal</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* ====================================================================
          CANOPY FOOTER
      ==================================================================== */}
      <footer className="relative z-10 border-t border-emerald-900/60 bg-[#010905]/90 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <CanopyLogo className="w-10 h-10" animated={false} />
              <div>
                <p className="text-sm font-bold font-mono text-white">MANAV RANA // CANOPY_OS</p>
                <p className="text-xs text-emerald-400/80">Parul University • B.Tech CSE (AIML)</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-emerald-300">
              <a
                href="https://github.com/Manaditi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <span className="text-emerald-800">•</span>
              <a
                href="https://www.linkedin.com/in/manav-rana-74298b427/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-cyan-300 hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <span className="text-emerald-800">•</span>
              <a
                href="mailto:manavrana932@gmail.com"
                className="flex items-center gap-1 text-rose-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
              <span className="text-emerald-800">•</span>
              <button
                onClick={() => setIsSnakeModalOpen(true)}
                className="flex items-center gap-1 text-emerald-400 hover:text-emerald-200 transition-colors"
              >
                <span>🐍 Snake</span>
              </button>
              <span className="text-emerald-800">•</span>
              <button
                onClick={() => setIsJournalOpen(true)}
                className="flex items-center gap-1 text-amber-300 hover:text-amber-200 transition-colors"
              >
                <Bug className="w-3.5 h-3.5" />
                <span>Journal [{caughtBugs.length}/4]</span>
              </button>
              <span className="text-emerald-800">•</span>
              <a
                href="#about"
                className="hover:text-white transition-colors"
              >
                Back to Top ↑
              </a>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-800 text-xs font-mono text-emerald-200">
              <AwsAmplifyIcon className="w-4 h-4 text-cyan-400" />
              <span>AWS Student Builder Challenge 2026</span>
            </div>
          </div>

          <div className="pt-6 border-t border-emerald-950 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-emerald-400/70 gap-3">
            <p>© 2026 Manav Rana. Engineered for high-contrast accessibility &amp; non-blocking exploration.</p>
            <p>Built with React, Tailwind CSS, and AWS Amplify CI/CD</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
