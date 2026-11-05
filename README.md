# 🌿 Canopy_OS — Bioluminescent Midnight Rainforest & Interactive Software Bug Catcher

> **AWS Student Builder Challenge: Build Your Tech Superpower**  
> Developed by **Manav Rana** | Undergraduate B.Tech CSE (AI & ML) at Parul University  
> 🔗 **GitHub:** [@Manaditi](https://github.com/Manaditi) | 💼 **LinkedIn:** [in/manav-rana-74298b427](https://www.linkedin.com/in/manav-rana-74298b427/) | ✉️ **Email:** [manavrana932@gmail.com](mailto:manavrana932@gmail.com)

---

## 🧭 Project Overview
**Canopy_OS** is a single-page interactive developer portfolio engineered for the **AWS Student Builder Challenge**. Set in a nocturnal bioluminescent canopy ecosystem, the project plays on the engineering double meaning of catching software "bugs" while delivering high-contrast, WCAG AA compliant navigation with zero locking gates.

---

## ⚡ Tech Superpower & Interactive Mechanics

### 1. 🪲 The Non-Blocking Bug Catcher & Field Journal
Four custom-crafted inline SVG insects are perched naturally across key section borders. Visitors can freely read, scroll, and click external project links at any time without interacting with the game.
- **Bug #1 — Golden Firefly (`Photinus-Stream`):** Squashes *High Token Latency in GenAI Event Pipelines* (+250 XP).
- **Bug #2 — Neon Rhino Beetle (`Dynastes-Heap`):** Squashes *Auxiliary Heap Exhaustion on Dense Matrix Traversal* (+250 XP).
- **Bug #3 — Morpho Dragonfly (`Anisoptera-Edge`):** Squashes *SPA Deep-Link 404 Errors on Cloud Refresh* (+250 XP).
- **Bug #4 — Crimson-Gold Ladybug (`Coccinella-Prompt`):** Squashes *Unstructured LLM Hallucinations Under Hackathon Pressure* (+250 XP).
- **Field Journal Slide-Over:** Displays total XP, dynamic Explorer Ranks (*Novice Scout* → *Canopy Debugger* → *Master Ecosystem Architect*), detailed engineering post-mortems, and an AWS Cloud celebration banner.
- **Judge Speedrun Shortcut:** A 1-click `[⚡ Speedrun: Catch All]` button in the header allows busy evaluators to unlock and inspect the entire end-state instantly.

### 2. 🐍 Canopy Python Retro Snake Arcade
A playable 18x18 cyber-matrix mini-game embedded directly into the ecosystem:
- Ambient coiled vine serpent trigger in the lower canopy.
- Keyboard arrow keys + mobile on-screen D-pad controls.
- Persistent High Score saved in `localStorage`.
- Awards bonus XP to your Field Journal score upon catching memory bugs!

### 3. 🎯 Bug Hunter Tactical Crosshair Cursor
- High-performance, 60fps hardware-accelerated pointer with zero perceived latency.
- Ambient radial flashlight glow that illuminates cards and borders (matching Manav's real-world photo).
- Cybernetic corner brackets that rotate 45° with an active radar lock-on when hovering perched bugs.
- Automatically disabled on touch devices to ensure native mobile accessibility.

### 4. ☁️ AWS Amplify CI/CD Architecture Simulation
- Interactive terminal simulating the 4-step deployment cycle (`Provisioning Container` → `npm ci & npm run build` → `CloudFront Edge Invalidation & SPA Rewrites` → `Lighthouse 100/100 Production Endpoint`).

---

## 🛠️ Technology Stack
- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4 (with custom bioluminescent `@keyframes` and WCAG AA contrast)
- **Icons:** `lucide-react` & Custom Inline SVGs
- **Cloud Deployment:** AWS Amplify Hosting + Amazon CloudFront Global CDN
- **Architecture:** Zero external image assets; self-contained vector SVGs & optimized WebP profile assets

---

## 🚀 Local Development Setup

```bash
# 1. Clone the repository
git clone https://github.com/Manaditi/canopy-os.git
cd canopy-os

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Build for production (AWS Amplify deployment target)
npm run build
```

---

## ☁️ AWS Amplify Deployment (`amplify.yml`)
The repository includes an optimized `amplify.yml` pipeline configuration:
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: dist
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

---

## 📜 License
Distributed under the MIT License. Built with passion for the AWS Student Builder Challenge 2026.

