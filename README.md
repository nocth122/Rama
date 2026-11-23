<div align="center">

# ✦ Fakhul Rohman — Portfolio ✦

### A cinematic, motion-driven personal portfolio
**Web Dev · Editing · Quality Control**

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white&style=for-the-badge)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white&style=for-the-badge)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white&style=for-the-badge)](https://vite.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&logoColor=white&style=for-the-badge)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?logo=framer&logoColor=white&style=for-the-badge)](https://www.framer.com/motion/)
[![Three.js](https://img.shields.io/badge/Three.js-r184-000000?logo=threedotjs&logoColor=white&style=for-the-badge)](https://threejs.org)

🌐 **Live:** [porto-fkhul.biz.id](https://www.porto-fkhul.biz.id)

</div>

---

## <img src="https://api.iconify.design/lucide:book-open.svg" width="24" align="absmiddle"/> Overview

A single-page, immersive portfolio built with **React 19 + TypeScript + Vite**. It blends an editorial design language with **ultra-smooth motion** — WebGL backgrounds, magnetic cursor interactions, scroll-linked reveals, and a built-in AI assistant — while staying fast and accessible on low-end mobile devices.

<div align="center">
<img src="v1.gif" alt="Portfolio main preview" width="100%" style="border-radius: 8px;" />

<br/><br/>

<br/>

### <img src="https://api.iconify.design/lucide:zap.svg" width="20" align="absmiddle"/> Motion Showcase & Interaction Design

A cinematic experience, visualized through code.

<br/>

| Feature Interaction | Description | Key Technologies |
| :--- | :--- | :--- |
| <img src="https://api.iconify.design/lucide:rocket.svg" width="32"/> <br/> **Hero Entrance** | Smooth, state-driven animation sequencing for headers and CTAs. | **Framer Motion**, GSAP |
| <img src="https://api.iconify.design/lucide:layers-3.svg" width="32"/> <br/> **WebGL Backdrop** | Dynamic, interactive 3D background that reacts to mouse movement. | **Three.js**, React Three Fiber |
| <img src="https://api.iconify.design/lucide:mouse-pointer-2.svg" width="32"/> <br/> **Magnetic Cursor** | Advanced cursor effects with magnetic pull on interactive elements. | Custom Hooks, Framer Motion |
| <img src="https://api.iconify.design/lucide:fold-vertical.svg" width="32"/> <br/> **Scroll Reveals** | Content animates into view smoothly based on scroll position. | **Lenis Smooth Scroll**, Framer Motion |
| <img src="https://api.iconify.design/lucide:bot.svg" width="32"/> <br/> **AI Transition** | Fluid, conversational interface animations within the chat panel. | **Framer Motion**, Neoxr API |
| <img src="https://api.iconify.design/lucide:smartphone.svg" width="32"/> <br/> **Mobile Fluidity** | Perfectly synchronized, lightweight animations optimized for mobile. | CSS, Framer Motion |

</div>

---

## <img src="https://api.iconify.design/lucide:sparkles.svg" width="24" align="absmiddle"/> Features

| Area | Highlights |
| --- | --- |
| <img src="https://api.iconify.design/lucide:monitor-play.svg" width="16" align="absmiddle"/> **Hero** | WebGL / Three.js background, animated headline, magnetic CTAs |
| <img src="https://api.iconify.design/lucide:user.svg" width="16" align="absmiddle"/> **About** | Story / Experience / Skills tabs, 3-variant CV download menu, text-only Hard Skills with animated brand icons, mobile-friendly Soft Skills grid, brand photo lightbox |
| <img src="https://api.iconify.design/lucide:folder-git-2.svg" width="16" align="absmiddle"/> **Projects** | Tilt cards, category filtering, rich Project Detail view (2-layer hero, gallery lightbox, lightweight tech-stack reveal) |
| <img src="https://api.iconify.design/lucide:bot.svg" width="16" align="absmiddle"/> **AI Assistant** | Floating chat powered by the Neoxr API (GPT-4 primary, Llama fallback) |
| <img src="https://api.iconify.design/lucide:mail.svg" width="16" align="absmiddle"/> **Contact** | EmailJS-powered form with validation, loading states, and optional auto-reply |
| <img src="https://api.iconify.design/lucide:globe.svg" width="16" align="absmiddle"/> **i18n** | Full English / Indonesian / 中文 localization |
| <img src="https://api.iconify.design/lucide:sliders-horizontal.svg" width="16" align="absmiddle"/> **Preferences** | Settings panel: motion reduction, visual effects, audio feedback, background music |
| <img src="https://api.iconify.design/lucide:bug.svg" width="16" align="absmiddle"/> **Debug** | [eruda](https://github.com/liriliri/eruda) console, lazy-loaded and opt-in via `?eruda` |

---

## <img src="https://api.iconify.design/lucide:clapperboard.svg" width="24" align="absmiddle"/> Motion & Animation

A deeper look at the core animation philosophy and implementation:

*   **State-Driven Transitions:** Utilizing Framer Motion for intricate entrance reveals, shared-layout tab indicators, and micro-interactions that feel responsive and fluid.
*   **Performance-First WebGL:** Three.js and `@react-three/fiber` power the immersive hero backdrop. Animations are capability-gated and lazy-loaded to ensure fast initial load times.
*   **Synchronized Scrolling:** A seamless blend of Lenis smooth scrolling and GSAP for complex, scroll-triggered animation sequences.
*   **Accessibility & Optimization:** Every animation sequence respects user preferences (`prefers-reduced-motion`) and the in-app motion toggle, guaranteeing a smooth experience on all devices, including low-end mobile phones.

---

## <img src="https://api.iconify.design/lucide:blocks.svg" width="24" align="absmiddle"/> Tech Stack

*   **Framework:** React 19, TypeScript, Vite 8
*   **Styling:** Tailwind CSS 4
*   **Animation:** Framer Motion, GSAP, Lenis, Three.js (`@react-three/fiber`, `@react-three/drei`)
*   **Icons:** lucide-react + Simple Icons CDN (brand logos)
*   **Integrations:** EmailJS (contact), Neoxr API (AI chat)
*   **Tooling:** ESLint, TypeScript ESLint, eruda

---

<div align="center">

Built with care by **Fakhul Rohman** · Depok, West Java, Indonesia

</div>
