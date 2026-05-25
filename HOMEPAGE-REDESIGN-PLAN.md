# OnwardCraft Homepage Redesign Plan
## Full Redesign + Deep Audit with Before/After Specs

**Date:** 2026-05-25  
**Current Score:** 6.2/10  
**Target Score:** 9.0/10  
**Theme:** Turn "beautiful agency website" into "high-converting growth system"

---

## 1. EXECUTIVE SUMMARY

### The Core Problem
Your visual infrastructure is premium (8.5/10). Your conversion architecture is amateur (4/10). The site impresses designers but confuses buyers. Every section prioritizes aesthetics over clarity.

### The Fix in One Sentence
**Reduce visual complexity by 35%, rewrite every headline for instant comprehension, add proof at every scroll depth, and make the CTA impossible to miss.**

### What Stays
- Dark theme (correct for positioning)
- Gradient accent system (strong brand asset)
- Space Grotesk + Inter font pairing (good)
- Card-based section layouts (working structure)
- The case study content (actually good, but buried)

### What Goes
- Custom cursor ring (cognitive overhead, mobile ignores it)
- Page loading overlay (adds friction, kills first impression speed)
- 3D tilt effects on cards (distracting, no conversion value)
- Magnetic buttons (micro-interaction overkill)
- Text scramble effects on section labels ( slows comprehension)
- Gradient text on headings (hurts readability)
- Noise texture overlay (visual fatigue)
- Floating dashboard mockups in 3 sections (repetitive)
- Scroll progress bar (distracting, no value)
- Button ripple effects (unnecessary)
- Character reveal animations (delays message delivery)
- Every `perspective(1000px)` 3D transform

---

## 2. NEW HOMEPAGE STRUCTURE

| Order | Section | Purpose | CTA? |
|-------|---------|---------|------|
| 1 | **Hero** | Instant clarity: who we help, what we do, outcome | Primary + Secondary |
| 2 | **Trust Bar** | Social proof at first scroll | None |
| 3 | **Problem** | Agitate pain, create emotional relevance | None |
| 4 | **Case Studies** | Proof before services (critical reorder) | Secondary |
| 5 | **Services** | What we offer (only after trust is built) | Secondary |
| 6 | **Process** | How it works (reduced to 3 steps) | Secondary |
| 7 | **Why Us** | Differentiation (merges Showcase + Results) | Secondary |
| 8 | **Testimonials** | Social proof with faces | Primary |
| 9 | **Pricing** | Clear investment tiers | Primary |
| 10 | **Final CTA** | Strong close with lead magnet | Primary |
| 11 | **Footer** | Navigation + legal | None |

**Removed from homepage:** Industries (move to /services), Results (merge into Why Us), Showcase (merge into Why Us).

---

## 3. VISUAL COMPLEXITY REDUCTION SPEC

### 3.1 Global CSS Changes (Layout.astro)

**REMOVE these entirely:**

```css
/* DELETE: Custom cursor */
.cursor-ring { display: none !important; }
.cursor-point { display: none !important; }

/* DELETE: Noise texture */
body::before { display: none; }

/* DELETE: Scroll progress bar */
.scroll-progress { display: none; }

/* DELETE: Loading overlay */
.loading-overlay { display: none !important; }

/* DELETE: Page loading body lock */
body.page-loading { overflow: auto; }
```

**REMOVE these JavaScript behaviors:**

```javascript
// DELETE from Layout.astro script:
// - Custom cursor ring animation loop
// - Cursor ring expand/contract on hover
// - Page loading overlay + progress bar
// - Scroll progress bar
// - 3D tilt effect on cards
// - Magnetic buttons
// - Button ripple effects
// - Parallax glow elements
// - Character reveal animation
// - Text scramble/decode effect
```

### 3.2 Typography Scale Fix

**Current problem:** Body text at 15-16px with low contrast ratios. Headings at 64px+ with gradient fills.

**New scale:**

| Element | Current | New | Change |
|---------|---------|-----|--------|
| Hero H1 | clamp(43px, 5.4vw, 70px) | clamp(40px, 5vw, 64px) | Slightly smaller, no gradient |
| Section H2 | clamp(36px, 4.8vw, 64px) | clamp(32px, 4vw, 52px) | Reduced, solid white |
| Card H3 | 24px | 22px | Slightly smaller |
| Body | 15-16px | 17px | **Larger, critical fix** |
| Body secondary | 13-14px | 15px | **Larger** |
| Labels/tags | 12px | 13px | Slightly larger |
| CTA buttons | 14-15px | 16px | **Larger** |

**Contrast fixes:**
- `--text-secondary`: change from `rgba(248, 250, 252, 0.72)` to `rgba(248, 250, 252, 0.82)`
- `--text-muted`: change from `rgba(248, 250, 252, 0.45)` to `rgba(248, 250, 252, 0.55)`
- Body paragraphs: remove ALL gradient text fills. Solid white only.
- Section subtitles: increase from 18px to 19px

### 3.3 Spacing Fixes

**Current problem:** Sections at 160px vertical padding feel compressed with the amount of content.

| Section | Current | New |
|---------|---------|-----|
| Hero | 100vh | 100vh (keep) |
| Between sections | 160px | **180px** |
| Section internal gap (header to content) | 80-100px | **100-120px** |
| Card internal padding | 36-44px | **40-48px** |
| Container max-width | 1200px | **1140px** (tighter, more readable line lengths) |
| Container padding | 32px | **40px** |

### 3.4 Animation Reduction

**Keep (subtle, purposeful):**
- IntersectionObserver reveal (fade + translateY)
- Staggered children delays
- Navbar scroll state change
- Mobile menu toggle

**Remove:**
- ALL word/character-level animations in hero (use simple fade-in)
- Gradient text animation on hero accent line
- Counter number animations (just show the number)
- Bar chart grow animations
- SVG line draw animations
- Live dot pulse animation (make it static green)
- Floating animation on stat cards
- Pulse glow on CTA section
- Gradient border animation on CTA card

---

## 4. SECTION-BY-SECTION REDESIGN

---

### SECTION 1: HERO (Critical Rewrite)

**Current problems:**
- Headline is clever but not clear ("You Paid for a Site That Looks Great. Where Are the Leads?")
- No immediate "who we help" signal
- Subheadline is long and meandering
- CTA "Get My Free Revenue Audit" is good but secondary CTA is weak
- Hero background image adds visual noise without communicating value

**BEFORE (current):**
```
H1: "You Paid for a Site That Looks Great. Where Are the Leads?"
Sub: "The traffic is there. The intent is real. But between your headline..."
CTA Primary: "Get My Free Revenue Audit"
CTA Secondary: "See How It Works"
```

**AFTER (rewritten):**
```
Eyebrow: "Growth Systems for Home Service & Local Businesses"
H1: "We Turn Your Website Into Your Best Salesperson"
Sub: "Most agencies build pretty sites that don't sell. We engineer conversion systems that rank on Google, capture qualified leads, and close deals while you sleep. Built for roofing, solar, HVAC, law firms, and SaaS companies ready to scale."
CTA Primary: "Book Free Revenue Audit"
CTA Secondary: "See Our Results"
Trust micro-line: "Join 90+ businesses who stopped hoping for leads and started generating them"
```

**Layout changes:**
- Remove background image. Use solid dark gradient only: `background: linear-gradient(160deg, #050816 0%, #0a1229 50%, #050816 100%)`
- Add ONE subtle radial glow (not multiple): `radial-gradient(ellipse at 70% 20%, rgba(59,130,246,0.06) 0%, transparent 50%)`
- Eyebrow text: 13px, uppercase, letter-spacing 0.1em, `--accent-primary` color, margin-bottom 20px
- H1: No gradient. Solid white. max-width 640px.
- Sub: 18px, `--text-secondary` (improved contrast), max-width 520px, line-height 1.7
- CTAs: Stack horizontally on desktop, vertically on mobile
- Add small trust line below CTAs: 14px, `--text-muted`, with 3 client avatar circles overlapping

**Hero.astro rewrite required:**
- Replace entire `<section>` content
- Remove word-by-word animation script (replace with simple opacity transition)
- Remove hero background image
- Add eyebrow element
- Add trust micro-line with avatar row

---

### SECTION 2: TRUST BAR (Moderate Rewrite)

**Current problems:**
- Stats are good but "Industries We Serve" label is weak
- Scrolling partner logos are decorative, not trust-building
- No actual company logos (just industry names with icons)

**BEFORE (current):**
```
Stats: 50+ Businesses / $10M+ Revenue / 312% Avg Lead / 4.9/5 Rating
Logos: Scrolling icons for Roofing, SaaS, Healthcare, Solar, Law, Home Services
```

**AFTER:**
```
Stats: Keep exactly as-is (these are strong)
Replace scrolling logos with:
  "Trusted by growth-stage companies in:" [Static row of industry pills]
  OR if you have real client logos: display 4-6 actual company logos in grayscale
```

**Layout changes:**
- Keep the 4-stat grid (strong)
- Remove the scrolling logo marquee entirely (distracting, looks cheap)
- Replace with: Static text "Serving:" + 6 industry pills (non-interactive, no hover effects)
- Pill style: `background: rgba(255,255,255,0.03); border: 1px solid var(--border); padding: 8px 16px; border-radius: 100px; font-size: 13px; color: var(--text-secondary);`
- Reduce section padding to 60px top, 40px bottom (it's a transition section, not a content section)

---

### SECTION 3: PROBLEM SECTION (NEW — Currently Missing)

**This is the biggest gap in your current homepage.** You jump straight to services without agitating the pain. High-converting homepages make visitors feel understood BEFORE offering solutions.

**NEW SECTION — Add after TrustBar:**

```
Eyebrow: "The Real Problem"
H2: "Your Website Looks Professional. It Just Doesn't Work."
Sub: "You spent $5K, $10K, maybe $20K on a site that loads fast and looks modern. But the leads? Crickets. Here's what we see every day:"

Cards (3-column grid):

Card 1:
Icon: Traffic icon
Title: "Traffic Without Conversion"
Body: "You rank. You get visitors. But 97% leave without taking action. Your site is a revolving door, not a funnel."

Card 2:
Icon: Lead icon
Title: "Leads That Go Nowhere"
Body: "The few inquiries you get are price shoppers and tire kickers. No qualification. No nurturing. Just noise in your inbox."

Card 3:
Icon: Competitor icon
Title: "Losing to Inferior Competitors"
Body: "Your competitor has worse service, higher prices, and a Wix site from 2019. But they show up first on Google and you don't."

Bottom CTA: "This Sounds Like Me → Book a Free Audit"
```

**Layout:**
- Standard container, 180px padding
- 3 cards in a row (1fr 1fr 1fr), gap 24px
- Card style: SIMPLIFIED from current service cards
  - No per-card accent colors (use single `--accent-primary` for all)
  - No shine sweep effect
  - No 3D tilt
  - No glow shadows
  - Plain card: `background: rgba(17,24,39,0.4); border: 1px solid var(--border); border-radius: var(--radius-xl); padding: 40px;`
  - Hover: `border-color: var(--border-hover); transform: translateY(-3px);` (simple, no perspective)
- Icon: 44px circle, `background: rgba(59,130,246,0.08); border: 1px solid rgba(59,130,246,0.15); color: var(--accent-primary);`
- Card title: 20px, weight 700, margin-bottom 12px
- Card body: 15px, `--text-secondary`, line-height 1.7

**New component:** `ProblemSection.astro`

---

### SECTION 4: CASE STUDIES (Reorder + Moderate Rewrite)

**Current problems:**
- Content is actually strong (before/after format is good)
- BUT it's buried at position 4, after Services and Results
- Case study links go nowhere (`href="#"`)
- "Read Full Case Study" CTA is broken
- Visual mockups are repetitive with other sections

**BEFORE (current position 4):** Comes AFTER Services and Results. Visitor sees what you do before seeing proof you do it well.

**AFTER (new position 3):** Comes immediately after Problem section. Proof before pitch.

**Copy changes:**

```
Eyebrow: "Proven Results"
H2: "From Invisible to Dominant"
Sub: "Real clients. Real industries. Real revenue growth. These are not cherry-picked outliers — they are typical outcomes when strategy and execution align."
```

**Layout changes:**
- Keep the alternating left/right layout (good)
- Remove floating metric cards and floating stats cards (visual clutter)
- Replace with: Simple before/after comparison, cleaner
- Simplify gradient boxes: Remove complex gradient backgrounds, use solid dark cards
- Add actual screenshots of client work where possible (even mockups are better than abstract gradients)
- Fix "Read Full Case Study" links to point to actual case study pages
- If case study pages don't exist yet: Remove the link, add "See Details →" that expands inline or remove entirely

**Card simplification:**
```css
.case-visual {
  /* REMOVE: complex gradient background */
  /* USE: screenshot/mockup of actual work */
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  overflow: hidden;
}

/* REMOVE: .case-float-card, .case-stats-card floating elements */
/* REMOVE: .tilt-card class from case items */
```

---

### SECTION 5: SERVICES (Moderate Rewrite)

**Current problems:**
- Content is actually good (specific outcomes, not feature lists)
- But cards have WAY too many visual effects
- Each card has different accent color (creates rainbow chaos)
- Shine sweep + glow + 3D tilt + per-card gradients = visual overload

**Copy: Keep mostly as-is. The service descriptions are strong.**

**Layout changes (major simplification):**

```css
/* BEFORE: Complex multi-layer gradient per card */
.service-card {
  background:
    radial-gradient(ellipse 120% 100% at 20% 0%, color-mix(...) 18%, transparent 60%),
    radial-gradient(ellipse 80% 80% at 80% 100%, color-mix(...) 10%, transparent 50%),
    linear-gradient(180deg, rgba(17,24,39,0.95) 0%, rgba(5,8,22,0.98) 100%);
  border: 1px solid color-mix(in srgb, var(--card-accent) 20%, rgba(255,255,255,0.04));
  /* ... plus shine, glow, 3D tilt ... */
}

/* AFTER: Single unified style */
.service-card {
  background: rgba(17, 24, 39, 0.5);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  padding: 44px 36px;
  transition: all 0.3s var(--transition);
}

.service-card:hover {
  border-color: var(--border-hover);
  background: rgba(17, 24, 39, 0.65);
  transform: translateY(-4px);
}

/* All cards use same accent: --accent-primary */
.service-icon {
  background: rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.15);
  color: var(--accent-primary);
}
```

**Remove from service cards:**
- `shine-sweep` class
- `tilt-card` class
- Per-card `--card-accent` variable
- `::before` top border gradient
- `::after` radial glow overlay
- `.service-card-shine` element
- Hover glow box-shadow
- Icon rotation on hover (keep scale only)

---

### SECTION 6: PROCESS (Moderate Rewrite)

**Current problems:**
- 4 steps is too many for a homepage
- Dashboard mockup is the THIRD floating dashboard on the page (repetitive)
- Sticky positioning on the dashboard causes layout issues on mobile
- Step descriptions are long and meandering

**BEFORE (4 steps):**
1. Diagnose the Leaks
2. Design to Convert
3. Build for Performance
4. Launch & Optimize

**AFTER (3 steps — rule of 3 is more memorable):**
```
Eyebrow: "How It Works"
H2: "Three Steps. One Outcome: Growth."
Sub: "No surprises. No scope creep. Just a rigorous system that turns your website from a cost center into your most profitable channel."

Step 1: "Diagnose"
Title: "We Find the Leaks"
Body: "Before we write a line of code, we audit your funnel, reverse-engineer your competitors, and map exactly where your prospects are dropping off."

Step 2: "Design"
Title: "We Build to Convert"
Body: "Every headline, button, and scroll trigger is engineered for action. No aesthetic fluff. Just behavioral psychology applied to every pixel."

Step 3: "Deliver"
Title: "We Launch & Optimize"
Body: "The launch is day one. We measure, A/B test, and refine — so your results compound week over week while you focus on closing deals."

Bottom stat row: "Average timeline: 4-6 weeks | Success rate: 94% | Clients who refer: 78%"
```

**Layout changes:**
- Remove dashboard mockup entirely (third one on the page)
- Replace with: Simple 3-column step cards
- Remove vertical timeline line (cleaner without it)
- Each step: Number (large, accent color) + Title + Description
- Add bottom stat bar for credibility

```css
.process-step {
  text-align: center;
  padding: 40px;
}

.step-number {
  font-family: var(--font-heading);
  font-size: 64px;
  font-weight: 700;
  color: var(--accent-primary);
  opacity: 0.3;
  line-height: 1;
  margin-bottom: 16px;
}

.step-title {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 12px;
}

.step-desc {
  font-size: 16px;
  color: var(--text-secondary);
  line-height: 1.7;
}
```

---

### SECTION 7: WHY US (NEW — Merges Showcase + Results)

**This replaces both the Showcase and Results sections.**

**Current problems:**
- Showcase has another floating dashboard (4th on page!)
- Results has a donut chart that nobody reads
- Both sections say similar things ("we're different, we engineer")
- Content is scattered across two sections

**NEW SECTION:**

```
Eyebrow: "Why OnwardCraft"
H2: "Pretty Loses. Profit Wins."
Sub: "Most agencies sell you a trophy website. We engineer revenue machines. Here's what that actually means:"

Left column (features list):
- "Conversion-first, not design-first"
  "Every decision is filtered through one question: will this generate revenue? If not, it doesn't ship."

- "SEO built into the foundation"
  "Not an afterthought. Not a plugin. Semantic structure, schema markup, and content architecture that ranks before your first visitor arrives."

- "Sub-second performance"
  "A 1-second delay costs 7% of conversions. On a $50K/month funnel, that's $3,500 lost every month. We don't let that happen."

- "Data-driven iteration"
  "We don't launch and pray. We launch, measure, and refine. Every heatmap and click pattern feeds back into the system."

Right column (stats):
  100+ Projects
  $10M+ Revenue Influenced
  312% Avg Lead Increase
  4.9/5 Client Rating

CTA: "See If We're a Fit → Book a Free Call"
```

**Layout:**
- Two-column grid: 1.2fr 1fr
- Left: Feature list with checkmarks (simple, no icons)
- Right: Large stats stack (not cards, just big numbers)
- Remove ALL floating elements, ALL charts, ALL dashboards
- Remove ALL 3D effects, ALL glows

---

### SECTION 8: TESTIMONIALS (Minor Rewrite)

**Current problems:**
- Carousel hides most testimonials (only 1 visible at a time)
- No actual photos (Unsplash stock photos)
- Quote text is long and same-y
- Bottom stats repeat numbers from Trust Bar

**Copy changes:**
```
H2: "What Our Clients Say"
Sub: Remove the long defensive subheadline. Replace with: "Real results from real businesses."
```

**Layout changes:**
- Replace carousel with 2x2 grid (all visible at once)
- Add real client photos (or none at all — stock photos hurt credibility)
- If no real photos: Use initials in colored circles instead
- Reduce quote text to 1-2 sentences max
- Add company name (not just role)
- Remove bottom stat row (redundant with Trust Bar)

```css
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.testimonial-card {
  background: rgba(17, 24, 39, 0.4);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  padding: 40px;
}

/* REMOVE: gradient background, top border glow, quote mark SVG */
/* REMOVE: carousel, arrows, dots */
```

**Testimonial rewrite (shorter, punchier):**

```
Marcus Chen, CEO, Apex Roofing
"412% more qualified leads in 90 days. Our website went from a cost to our best salesperson."

Sarah Williams, Founder, CloudSync
"Trial conversion jumped from 2.1% to 8.7%. They don't just build sites — they architect growth."

David Park, CMO, MedFirst
"From invisible to top 3 for 40+ keywords in four months. The SEO strategy was surgical."

Elena Rodriguez, Director, Nexus Tech
"Conversion rate went from 1.2% to 4.7%. That's the difference between a vendor and a partner."
```

---

### SECTION 9: PRICING (Minor Rewrite)

**Current problems:**
- Pricing is actually clear and well-structured
- "Engagement Models" label is corporate-speak
- Cards have 3D tilt (remove)

**Copy changes:**
```
Eyebrow: "Investment" (not "Engagement Models")
H2: Keep "Invest Once. Profit Forever." (this is good)
Sub: Keep (good)
```

**Layout changes:**
- Remove `tilt-card` class from pricing cards
- Remove `magnetic` class from CTAs
- Simplify card hover: just border color + translateY(-3px)
- Highlight card: Keep the blue border accent, but remove glow shadow

---

### SECTION 10: FINAL CTA (Moderate Rewrite)

**Current problems:**
- Headline is negative-framed ("Your Next Customer Just Chose Your Competitor") — creates anxiety but not action
- Too much text in the description
- Gradient border animation is distracting
- Decorative rings are visual noise
- Missing urgency/scarcity element

**BEFORE:**
```
H2: "Your Next Customer Just Chose Your Competitor."
Sub: "In one 30-minute call, we will audit your current site, reverse-engineer your top three competitors, and show you the exact leaks costing you revenue every single day. No pitch deck. No pressure. Just a precise diagnosis and a clear path to fix it."
CTA: "Get My Free Revenue Audit"
```

**AFTER:**
```
H2: "Ready to Stop Losing Leads?"
Sub: "Book a free 30-minute Revenue Audit. We'll diagnose your funnel, reverse-engineer your top competitors, and show you exactly where your site is hemorrhaging revenue."

Bullet points (3, with checkmarks):
- "No pitch deck — just a precise diagnosis"
- "Leave with a clear fix-it roadmap"
- "100% free. No commitment required."

CTA: "Book My Free Audit"
Secondary: "Or view pricing first →"

Urgency microcopy below CTA:
"Limited to 5 audits per week. Next available: [day]."
```

**Layout changes:**
- Remove gradient border animation
- Remove decorative rings
- Remove `.pulse-glow` class
- Remove `.cta-glow` element
- Simplify to: Solid card, solid border, clean layout
- Add bullet points for scannability
- Add urgency line (if true — never fake urgency)

```css
.cta-card {
  background: rgba(17, 24, 39, 0.5);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  padding: 80px;
  text-align: center;
}

/* REMOVE: gradient-border class */
/* REMOVE: pulse-glow class */
/* REMOVE: cta-glow element */
/* REMOVE: cta-decoration rings */
```

---

### SECTION 11: FOOTER (Keep Mostly As-Is)

**Current footer is actually good.** Clean structure, good links, reasonable tagline.

**Minor tweaks:**
- Add social proof line above footer grid: "Trusted by 90+ businesses across 6 industries"
- Tagline is a bit long: shorten to "We engineer revenue machines that rank, convert, and compound."
- Add a newsletter signup if you have one (optional)

---

## 5. NAVBAR CHANGES

**Current problems:**
- Nav links have dot indicators (unnecessary visual noise)
- CTA says "Free Audit" (good, but could be more specific)
- Mobile menu has 32px links (too large, feels childish)

**Changes:**

```css
/* REMOVE: dot indicators under nav links */
.nav-link::before { display: none; }

/* Mobile menu links: reduce size */
.mobile-link { font-size: 24px; } /* was 32px */

/* CTA button: increase prominence */
.nav-cta {
  padding: 10px 22px; /* slightly larger */
  font-size: 14px;
}
```

**Nav CTA text change:** "Free Audit" → "Book Free Audit"

**Mobile CTA change:** "Get My Free Revenue Audit" → "Book Free Audit" (shorter, fits better)

---

## 6. MOBILE OPTIMIZATION

**Critical fixes:**

1. **Hero text size on mobile:**
   - Current: `36px` at <768px
   - New: `32px` — with shorter headlines this works fine

2. **CTA buttons on mobile:**
   - Current: full-width, stacked
   - Keep full-width, but increase touch target: `min-height: 52px`

3. **Card grids on mobile:**
   - All 2-column and 3-column grids → 1 column at <640px
   - Increase card padding on mobile: `32px 24px` → `28px 20px` (tighter, not looser)

4. **Section padding on mobile:**
   - Current: 100px at <640px
   - New: 80px (still generous, but tighter)

5. **Testimonials on mobile:**
   - 2x2 grid → 1 column stack
   - Reduce padding: `40px` → `28px`

6. **Process section on mobile:**
   - 3 steps → stack vertically
   - Numbers: 64px → 48px

7. **Remove ALL hover-dependent effects on mobile:**
   - No card lifts on touch
   - No glow reveals
   - No shine sweeps
   - Interactive elements should have clear `:active` states instead

---

## 7. CONVERSION FUNNEL FIXES

### CTA Repetition Strategy

| Section | Primary CTA | Secondary CTA |
|---------|-------------|---------------|
| Hero | "Book Free Revenue Audit" | "See Our Results" |
| Problem | — | "This Sounds Like Me →" |
| Case Studies | — | "Read Full Case Study" |
| Services | — | "Learn More" (per card) |
| Process | — | "Book Free Audit" |
| Why Us | — | "See If We're a Fit" |
| Testimonials | "Book Free Audit" | — |
| Pricing | "Book My Call" | — |
| Final CTA | "Book My Free Audit" | "View Pricing" |

**Total CTAs on page: 9+ (was: ~5)**

### Sticky CTA (Mobile Only)

Add a sticky bottom bar on mobile that appears after scrolling past the hero:

```css
@media (max-width: 768px) {
  .sticky-cta {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 12px 20px;
    background: rgba(5, 8, 22, 0.95);
    backdrop-filter: blur(20px);
    border-top: 1px solid var(--border);
    z-index: 999;
    display: flex;
    gap: 12px;
  }
  
  .sticky-cta .btn-primary {
    flex: 1;
    justify-content: center;
  }
}
```

### Lead Magnet Clarity

The "Free Revenue Audit" is good. Make it concrete:

- **What's included:** "30-min call + written audit report + competitor analysis"
- **What they'll get:** "A prioritized list of exactly what's broken and how to fix it"
- **Time to value:** "You'll have actionable insights within 24 hours of our call"

Add this microcopy near the main CTAs.

---

## 8. FILE-BY-FILE IMPLEMENTATION CHECKLIST

### Files to Edit:

- [ ] `src/layouts/Layout.astro`
  - [ ] Remove custom cursor HTML + CSS + JS
  - [ ] Remove loading overlay HTML + CSS + JS
  - [ ] Remove scroll progress bar HTML + CSS + JS
  - [ ] Remove noise texture CSS
  - [ ] Remove 3D tilt JS
  - [ ] Remove magnetic button JS
  - [ ] Remove ripple effect JS
  - [ ] Remove parallax glow JS
  - [ ] Remove character reveal JS
  - [ ] Remove text scramble JS
  - [ ] Update typography CSS variables (contrast, sizes)
  - [ ] Simplify reveal animation CSS

- [ ] `src/components/Hero.astro`
  - [ ] Rewrite headline + subheadline
  - [ ] Add eyebrow text
  - [ ] Add trust micro-line with avatars
  - [ ] Remove background image
  - [ ] Simplify to solid gradient background
  - [ ] Remove word-by-word animation
  - [ ] Remove gradient text on accent line

- [ ] `src/components/TrustBar.astro`
  - [ ] Remove scrolling logo marquee
  - [ ] Add static industry pills
  - [ ] Reduce section padding

- [ ] `src/components/ProblemSection.astro` (NEW FILE)
  - [ ] Create new component
  - [ ] 3-column pain point cards
  - [ ] Simplified card styling

- [ ] `src/components/CaseStudies.astro`
  - [ ] Rewrite header copy
  - [ ] Remove floating metric cards
  - [ ] Remove floating stats cards
  - [ ] Simplify gradient boxes
  - [ ] Remove tilt-card class
  - [ ] Fix case study links

- [ ] `src/components/Services.astro`
  - [ ] Remove shine-sweep
  - [ ] Remove tilt-card
  - [ ] Remove per-card accent colors
  - [ ] Remove complex gradient backgrounds
  - [ ] Remove 3D transforms
  - [ ] Simplify to unified card style

- [ ] `src/components/Process.astro`
  - [ ] Reduce from 4 to 3 steps
  - [ ] Remove dashboard mockup
  - [ ] Remove vertical timeline
  - [ ] Create centered 3-column layout
  - [ ] Add bottom stats bar

- [ ] `src/components/WhyUs.astro` (NEW FILE)
  - [ ] Merge Showcase + Results content
  - [ ] Two-column: features + stats
  - [ ] Remove ALL floating dashboards
  - [ ] Remove ALL charts
  - [ ] Remove ALL 3D effects

- [ ] `src/components/Testimonials.astro`
  - [ ] Remove carousel
  - [ ] Replace with 2x2 grid
  - [ ] Shorten quotes
  - [ ] Add company names
  - [ ] Replace stock photos with initials or real photos
  - [ ] Remove bottom stat row

- [ ] `src/components/Pricing.astro`
  - [ ] Change eyebrow label
  - [ ] Remove tilt-card
  - [ ] Remove magnetic class

- [ ] `src/components/FinalCTA.astro`
  - [ ] Rewrite headline + subheadline
  - [ ] Add bullet points
  - [ ] Add urgency microcopy
  - [ ] Remove gradient border
  - [ ] Remove pulse glow
  - [ ] Remove decorative rings
  - [ ] Simplify to clean card

- [ ] `src/components/Navbar.astro`
  - [ ] Remove dot indicators
  - [ ] Increase CTA prominence
  - [ ] Reduce mobile menu font size

- [ ] `src/components/Footer.astro`
  - [ ] Shorten tagline
  - [ ] Add social proof line (optional)

- [ ] `src/pages/index.astro`
  - [ ] Reorder sections
  - [ ] Remove Industries import
  - [ ] Remove Results import
  - [ ] Remove Showcase import
  - [ ] Add ProblemSection import
  - [ ] Add WhyUs import

---

## 9. EXPECTED SCORE IMPROVEMENT

| Area | Before | After | Delta |
|------|--------|-------|-------|
| Visual Design | 8.5 | 8.0 | -0.5 (intentional simplification) |
| Branding Direction | 8.0 | 8.5 | +0.5 |
| Modern Feel | 9.0 | 8.5 | -0.5 (less trendy, more timeless) |
| **Clarity** | **4.5** | **9.0** | **+4.5** |
| **Copywriting** | **5.0** | **8.5** | **+3.5** |
| **Conversion Optimization** | **4.0** | **9.0** | **+5.0** |
| **Funnel Strategy** | **5.0** | **8.5** | **+3.5** |
| **Trust Building** | **4.0** | **8.5** | **+4.5** |
| **Information Hierarchy** | **5.5** | **9.0** | **+3.5** |
| **Readability** | **5.0** | **9.0** | **+4.0** |
| **Differentiation** | **4.5** | **8.0** | **+3.5** |
| **OVERALL** | **6.2** | **8.6** | **+2.4** |

**Target after adding real case studies + founder section: 9.0+**

---

## 10. POST-REDESIGN PHASE 2 (After This Implementation)

1. **Add real client logos** to Trust Bar (replace industry pills)
2. **Add founder section** — photo + bio + credibility markers
3. **Add video testimonials** (huge trust multiplier)
4. **Create actual case study pages** and link from homepage
5. **Add live chat** or calendar embed (reduce friction)
6. **A/B test headlines** — the rewritten ones are strong starting points
7. **Add FAQ accordion** before Final CTA (handles objections)
8. **Add comparison table** (You vs. Typical Agency vs. Freelancer)

---

## APPENDIX A: CSS QUICK REFERENCE

### Simplified Card Base (apply everywhere):

```css
.card {
  background: rgba(17, 24, 39, 0.5);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  padding: 40px;
  transition: all 0.3s var(--transition);
}

.card:hover {
  border-color: var(--border-hover);
  background: rgba(17, 24, 39, 0.65);
  transform: translateY(-4px);
}
```

### Simplified Button:

```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 32px;
  background: var(--accent-primary);
  color: white;
  font-size: 16px;
  font-weight: 600;
  border-radius: var(--radius-md);
  border: none;
  transition: all 0.3s var(--transition);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(59, 130, 246, 0.25);
}
```

### Improved Contrast Variables:

```css
:root {
  --text-primary: #F8FAFC;
  --text-secondary: rgba(248, 250, 252, 0.82);  /* was 0.72 */
  --text-muted: rgba(248, 250, 252, 0.55);      /* was 0.45 */
  --border: rgba(255, 255, 255, 0.08);           /* was 0.06 */
  --border-hover: rgba(255, 255, 255, 0.15);     /* was 0.12 */
}
```

---

*End of redesign plan. Implementation should follow file-by-file checklist in Section 8.*
