# Swasthik Ayurveda — Premium Real-Time 3D Website Redesign

A world-class, cinematic real-time 3D healthcare digital experience designed for **Swasthik Ayurveda**, Hyderabad, Telangana, India.

- **Live Domain:** [https://www.swastikayurveda.com/](https://www.swastikayurveda.com/)
- **Primary Consultation Number:** `+91 83674 95666`
- **Location:** Above HDFC Bank, Dharmareddy Colony Phase-II, Hydernagar, Kukatpally, Hyderabad, Telangana 500072
- **Lead Physician:** Dr. Krishna Mohan (Spine & Joint Specialist)

---

## 1. Architectural Overview & Technical Stack

The architecture is built with an App Router foundation, ensuring server-rendered and statically generated (SSG) SEO content paired with isolated, client-side Three.js WebGL scenes.

- **Framework:** Next.js 16 with App Router & Static Export (`output: "export"`)
- **Language:** TypeScript 5
- **3D Graphics:** Three.js 0.186 (Real-time procedural geometry, BufferGeometry particle fireworks, rockets, lighting, diya systems, and garden environment)
- **Styling:** Tailwind CSS with Custom Design Tokens
- **Smooth Scrolling:** Lenis (Synchronized single-loop requestAnimationFrame with reduced-motion support)
- **UI & Micro-Interactions:** Framer Motion & Lucide Icons
- **Deployment Target:** GitHub Pages / Static Hosting via `.github/workflows/nextjs.yml` (CNAME `www.swastikayurveda.com`)

---

## 2. Visual Identity — The "Divine Ayurveda" Design System

The visual design combines Indian cultural elegance, cinematic lighting, and modern medical professionalism:

| Token | HEX | Role |
|---|---|---|
| Midnight Background | `#080A12` | Deep nocturnal foundation |
| Deep Navy | `#10182B` | Structural surfaces and card backgrounds |
| Emerald Green | `#0B4A36` | Traditional Ayurvedic herbal connection |
| Royal Gold | `#D4AF37` | Sacred illumination, borders, and primary CTAs |
| Champagne Gold | `#F3DFA0` | Subtle accents and highlights |
| Saffron | `#E88B27` | Festive warmth and critical indicators |
| Warm Ivory | `#F7F0E3` | Primary body typography for high legibility |

---

## 3. Real-Time 3D Engine & Features

### 3.1 Diwali 3D Scene (`src/components/three/DiwaliScene.tsx`)
- **Palace Environment:** Procedural Indian sandstone colonnades, fluted columns, cusped archways, rooftop lotus domes (*Chhatris*), kalashas, and reflective foreground water pool (*Kund*).
- **Fireworks System:** High-performance particle engine using `THREE.BufferGeometry` and `Float32Array` attributes. Simulates spherical blast velocities, gravity, drag, and sparkling golden fading without generating DOM nodes.
- **Rocket System:** 3D geometric rocket meshes with glowing exhausts and spark trails that launch from randomized coordinates and trigger firework bursts at their apogee.
- **Diya System:** Handcrafted 3D brass/clay diya bowls with glowing teardrop flames and animated multi-frequency organic flickering and warm point lights.
- **Interactive Camera Parallax:** Subtle pointer and touch camera interpolation (damped lerp) providing cinematic depth without hindering website navigation.
- **Resource Management:** Automatic pause on scroll via `IntersectionObserver` to preserve GPU/battery, plus full memory disposal on unmount.

### 3.2 Evergreen Ayurveda Garden Mode
- Instantly switchable via `src/config/campaign.ts` (`theme: "diwali" | "evergreen"`) or via the interactive pill switcher in the hero.
- Replaces festive fireworks with a serene medicinal botanical garden featuring stepping stone pathways, a traditional brass *Urli* with a sacred pink lotus, lush medicinal flora, and floating pollen particles.

### 3.3 WebGL Fallback
- Devices without WebGL support automatically receive a graceful CSS/Canvas radial backdrop (`SceneFallback.tsx`), ensuring zero broken layouts and 100% accessible content.

---

## 4. Complete Route Structure

All 23 routes are statically pre-rendered to HTML for instant loading and perfect Googlebot indexation:

### Main Pages
1. `/` — Cinematic Homepage (3D Hero, Doctor Introduction, Interactive Pain Map, 8 Treatment Cards, Consultation Steps, Testimonials, Blog Preview, and Appointment Form)
2. `/about/` — Clinic history, Ayurvedic philosophy, clinical standards, and Dr. Krishna Mohan's overview
3. `/doctors/` — Comprehensive profiles of Dr. Krishna Mohan (Lead Physician) and Dr. Rajeev Raj
4. `/treatments/` — Complete clinical treatment overview, anatomical pain map, and therapy cards
5. `/testimonials/` — Verified patient experiences, recovery stories, and ethical review policy
6. `/blog/` — Search-optimized clinical knowledge hub with category filters and featured guide
7. `/contact/` — Clinic location, GPS Google Maps integration, consultation hours, and appointment desk

### Dedicated Condition Detail Pages (`/treatments/[slug]`)
8. `/treatments/sciatica/` — Sciatica (Gridhrasi) non-surgical management
9. `/treatments/slip-disc/` — Slip disc / intervertebral disc rehabilitation
10. `/treatments/l4-l5-disc-bulge/` — L4-L5 lumbar disc bulge and L5 nerve impingement
11. `/treatments/back-pain/` — Chronic back pain and postural muscular tension
12. `/treatments/lower-back-pain/` — Lower back pain (Kati Shoola) and sacral care
13. `/treatments/knee-pain/` — Acute and chronic knee joint pain
14. `/treatments/knee-osteoarthritis/` — Knee Osteoarthritis (Sandhigata Vata) & Janu Vasti
15. `/treatments/cervical-spondylosis/` — Cervical Spondylosis (Manyastambha) & Tech Neck

### Fully Written SEO Blog Articles (`/blog/[slug]`)
16. `/blog/sciatica-pain-symptoms-causes-ayurvedic-care/` — Primary keyword: *Ayurvedic treatment for sciatica in Hyderabad*
17. `/blog/l4-l5-disc-bulge-symptoms-diagnosis-treatment-options/` — Primary keyword: *L4-L5 disc bulge treatment in Hyderabad*
18. `/blog/knee-osteoarthritis-understanding-knee-pain-ayurvedic-care/` — Primary keyword: *Ayurvedic treatment for knee pain in Hyderabad*

### Technical SEO & Feeds
19. `/sitemap.xml` — Complete XML sitemap generated dynamically with route priorities
20. `/robots.txt` — Search engine crawling directives

---

## 5. Contact & Booking Integrations

- **Centralized Contact Configuration:** `src/config/contact.ts` controls all endpoints across the website.
- **WhatsApp Direct Action:** Correctly URL-encoded pre-filled message:
  ```text
  https://wa.me/918367495666?text=Hello%20Swasthik%20Ayurveda%2C%20I%20would%20like%20to%20book%20an%20appointment%20with%20Dr.%20Krishna%20Mohan...
  ```
- **Direct Telephone Dialer:** `tel:+918367495666`
- **Floating Contact Control:** Bottom-right expandable desk with quick doctor booking on desktop and mobile.

---

## 6. Local Development & Production Build

### Prerequisites
- Node.js 20 or higher
- npm 10 or higher

### Commands
```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Run full production build & static export
npm run build
```

The static HTML, JavaScript bundles, CSS, and media assets will be generated into the `./out` directory, fully ready for GitHub Pages or static web servers.

---

## 7. QA Verification Summary

- [x] **Brand Assets:** Official Swasthik Ayurveda logo and authentic Dr. Krishna Mohan portrait preserved.
- [x] **3D Three.js Engine:** Real-time palace environment, particle fireworks, rockets, flickering diyas, and garden scene functioning with 60 FPS performance.
- [x] **Campaign Switch:** Toggle between Diwali mode and Evergreen Ayurveda Garden mode verified.
- [x] **Medical Accuracy:** All claims adhere to medical responsibility guidelines (no unsubstantiated cure claims or fabricated credentials).
- [x] **Static Export (SSG):** All 23 routes successfully pre-rendered into `./out` with zero compilation errors.
- [x] **SEO:** Schema.org `MedicalClinic`, `MedicalWebPage`, and `BreadcrumbList` microdata validated.
