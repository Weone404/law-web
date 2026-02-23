# ⚖️ LEX INDIA — Premium Legal Technology Platform

A startup-grade, production-ready **Next.js 14** legal platform built for:
- 📚 **Law Students** — Notes, Case Laws, Bare Acts, Blogs, Career Guidance
- ⚖️ **Practicing Lawyers** — Profiles, Consultation Booking, Client Management
- 🏛️ **Law Firm** — Firm credibility, Mission/Vision, Leadership, Why-Choose-Us
- 🇮🇳 **Indian Laws** — Live updates on new laws, amendments, and court orders

---

## ✨ Key Features

| Feature | Description |
|---------|-------------|
| **6 Full Pages** | Home, Students, Services, Firm, Laws, Contact |
| **Custom Cursor** | Gold law-themed cursor with ⚖️ 🔨 📖 morphing effects |
| **Loading Screen** | Animated SVG Justice Scale (shows on first visit) |
| **Dark/Light Theme** | Persisted in localStorage, system preference fallback |
| **Global Search** | Cross-resource search on `/search` page |
| **API Routes** | `/api/contact`, `/api/laws`, `/api/lawyers` — backend-ready |
| **Framer Motion** | Page transitions, scroll animations, stagger effects |
| **Mobile-First** | Responsive across all screen sizes, hamburger nav |
| **SEO** | Full Next.js Metadata API, OpenGraph, Twitter cards |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17+
- npm / yarn / pnpm

### Installation

```bash
# 1. Clone or extract the project
cd lex-india

# 2. Install dependencies
npm install

# 3. Copy environment variables
cp .env.example .env.local
# Edit .env.local with your API keys

# 4. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
lex-india/
├── app/                    # Next.js App Router pages
│   ├── layout.jsx          # Root layout (Cursor, Nav, Footer)
│   ├── page.jsx            # Home (/)
│   ├── globals.css         # Global styles & CSS variables
│   ├── not-found.jsx       # Custom 404
│   ├── students/page.jsx   # /students
│   ├── services/page.jsx   # /services
│   ├── firm/page.jsx       # /firm
│   ├── laws/page.jsx       # /laws
│   ├── search/page.jsx     # /search
│   ├── contact/page.jsx    # /contact
│   └── api/
│       ├── contact/route.js
│       ├── laws/route.js
│       └── lawyers/route.js
├── components/
│   ├── cursor/CustomCursor.jsx
│   ├── loading/LoadingWrapper.jsx
│   ├── layout/{Navigation,Footer}.jsx
│   ├── home/{Hero,PracticeAreas,Stats,Testimonials,CTA}.jsx
│   ├── ui/{SearchBar,SectionHeader,PageHeader,
│   │       ResourceCard,LawyerCard,LawUpdateCard,
│   │       PracticeFilter}.jsx
│   └── forms/ConsultationForm.jsx
├── hooks/useTheme.js
└── lib/constants/
    ├── studentResources.js
    ├── lawUpdates.js
    └── lawyers.js
```

---

## 🎨 Design System

### Color Palette
```css
--gold-primary: #C9A84C   /* Primary accent */
--gold-dark:    #8B6914   /* Hover/gradient end */
--gold-light:   #F0D060   /* Highlight */
--dark-bg:      #050D1A   /* Page background (dark) */
--dark-surface: #080F1E   /* Card background */
--dark-elevated:#0A1628   /* Elevated surface */
```

### Typography
- **Headings:** Playfair Display (Google Fonts) — serif, authoritative
- **Body:** Crimson Text (Google Fonts) — readable, classic legal style

---

## 🎬 Animation System

| Animation | Component | Description |
|-----------|-----------|-------------|
| Loading Screen | `LoadingWrapper` | SVG Justice Scale, pillar reveal, shimmer bar |
| Custom Cursor | `CustomCursor` | Gold ring + dot, RAF lerp, context-aware morphing |
| Hero Entrance | `HeroSection` | Staggered CSS opacity/translateY |
| Card Reveals | All grids | Framer Motion `whileInView` stagger |
| Page Transitions | `AnimatePresence` | Fade on route change |
| Hero BG | CSS | `heroPulse` radial glow animation |

---

## 🔌 Backend Integration (Phase 2)

The API routes are ready. To go live:

1. **Database:** Add Prisma + PostgreSQL
   ```bash
   npm install prisma @prisma/client
   ```

2. **CMS:** Connect Strapi or Sanity for law articles

3. **Email:** Enable Resend in `/api/contact/route.js`
   ```bash
   npm install resend
   ```

4. **Auth:** Add NextAuth.js for lawyer/student login
   ```bash
   npm install next-auth
   ```

5. **Payments:** Razorpay for consultation fees
   ```bash
   npm install razorpay
   ```

---

## 📱 Custom Cursor Behavior

```
data-cursor="scale" → ⚖️ Justice Scale + gold pulse
data-cursor="gavel" → 🔨 Gavel + gold pulse  
data-cursor="book"  → 📖 Law Book + gold pulse
<button> / <a>      → Enlarged gold ring
default             → Standard gold dot + ring
Mobile              → Cursor disabled automatically
```

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install && npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 📄 License
Built for Lex India Law Chambers. All rights reserved.
