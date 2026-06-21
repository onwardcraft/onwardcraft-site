// ALBUQUERQUE — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Albuquerque's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// ALBUQUERQUE — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Albuquerque is more layered than it looks',
  body:
    "Albuquerque sits at 5,300 feet in the high desert of New Mexico — a combination that gives the city scorching 95°F-plus summers, genuine cold winters with snow, and a summer monsoon season (July through September) that brings flash flooding and hail capable of wrecking roofs and stucco overnight. For any contractor who knows that terrain, there is a version of demand here that most competitors are not chasing. Nearly half of Albuquerque's population is Hispanic, and a large share of those residents search in Spanish. Yet most agencies build their SEO entirely in English, leaving a substantial portion of the market effectively uncontested for anyone willing to show up in the language those homeowners actually use. Add traditional New Mexico construction — adobe, stucco, flat roofs, vigas — that generic out-of-state contractors get wrong, and the picture becomes clear: Albuquerque rewards specialists who understand the city on its own terms, and punishes the ones who treat it as just another Southwest market.",
  pullQuote:
    'Nearly half of Albuquerque searches in Spanish. Most agencies optimize in English only — leaving half the market wide open for the contractor who shows up in both.',
  donut: {
    title: 'How Albuquerque searches',
    value: 49,
    centerLabel: 'Hispanic',
    legend: [
      { label: 'Hispanic', pct: 49, kind: 'teal' },
      { label: 'Other', pct: 51, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'HVAC + monsoon damage (Jun–Sep) and winter heating (Dec–Feb)',
  seasonalDemand: [
    { m: 'J', v: 60, peak: false }, { m: 'F', v: 58, peak: false }, { m: 'M', v: 52, peak: false },
    { m: 'A', v: 50, peak: false }, { m: 'M', v: 62, peak: false }, { m: 'J', v: 88, peak: true },
    { m: 'J', v: 95, peak: true }, { m: 'A', v: 92, peak: true }, { m: 'S', v: 85, peak: true },
    { m: 'O', v: 54, peak: false }, { m: 'N', v: 62, peak: false }, { m: 'D', v: 78, peak: false },
  ],
  stats: [
    { value: '920K+', label: 'people across the Albuquerque metro' },
    { value: '~49%', label: 'of residents identify as Hispanic — Spanish-language search is wide open', accent: true },
    { value: '5,300 ft', label: 'elevation — extreme heat and real snow in the same city' },
    { value: 'Jul–Sep', label: 'monsoon season, when roof, stucco, and flood-damage calls spike' },
  ],
  neighborhoods: [
    'Nob Hill', 'Old Town', 'Downtown', 'Heights', 'Rio Rancho', 'Corrales',
    'Los Ranchos', 'Paradise Hills', 'Four Hills', 'Tijeras',
    'North Valley', 'South Valley', 'Westside', 'Journal Center', 'Kirtland',
  ],
};

const AREAS = [
  'Nob Hill', 'Old Town', 'Downtown', 'Heights', 'Rio Rancho', 'Corrales',
  'Los Ranchos', 'Paradise Hills', 'Four Hills', 'Tijeras', 'North Valley',
  'South Valley', 'Westside', 'Journal Center', 'Bernalillo',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. In Albuquerque specifically, I saw another problem — agencies treating the city like a generic Southwest market, optimizing only in English, ignoring adobe and stucco work, and missing the monsoon-season demand that hits hard every summer. So that's what we're here to fix. Get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, in the language your customers actually search. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We understand monsoon-season hail calls, desert HVAC that has to handle both extreme heat and cold, and the adobe and stucco work that defines New Mexico construction — so everything we build is shaped around how your customers really search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners three competitors also bought — especially when Albuquerque lead brokers are charging the same rates as bigger cities for a smaller market.",
  },
  {
    title: 'We actually speak Albuquerque',
    body: "Neighborhood-by-neighborhood targeting from Nob Hill to Corrales, plus genuine Spanish-language reach to win the searches nearly half the city runs that your competitors never optimize for. That's not something a national shop can do by swapping a city name into a template.",
  },
  {
    title: 'No contracts, no mystery',
    body: "Published prices, reporting tied to leads, month-to-month after 90 days. If we're not earning it, you leave. That keeps the pressure where it belongs: on us.",
  },
];

const PROOF = {
  heading: "We're new, so here's the honest math instead of a logo wall",
  body:
    "Plenty of agencies will show you a grid of client logos. We're a young, founder-led shop, so we won't pretend to a track record we don't have yet. What we can show you is why this works — straight from Google's and the industry's own research on how people search locally.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say an Albuquerque contractor gets around 1,200 local \"near me\" impressions a month across a handful of neighborhoods and Spanish-language searches. Moving from page-two invisibility into the top three is the difference between a quiet phone and a booked-out calendar — and during monsoon season, when storm-damage calls spike, that gap is brutal. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Albuquerque', state: 'New Mexico', stateAbbr: 'NM', metro: 'Albuquerque',
  heroProof: ['Built for the trades', 'Spanish-language reach', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const albuquerqueLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'albuquerque', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Albuquerque Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Search your service in Albuquerque and three businesses show up on the map. We get you into those three — in English and Spanish — so the call lands with you. Free audit.',
    eyebrow: 'Local SEO · Albuquerque, NM',
    h1: 'When Albuquerque searches for what you do, be the first name they find',
    h2Exact: 'Albuquerque Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. In a city that's nearly half Hispanic and sits at 5,300 feet with both desert heat and real winters, we get you into that top three for your neighborhoods — in both English and Spanish — so the call lands with you instead of whoever ranked first.",
    primaryCta: 'Get my free Albuquerque audit',
    intro:
      "Albuquerque local SEO comes down to one question: when a homeowner in Nob Hill or the Heights searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. Albuquerque is nearly half Hispanic, sits at an altitude that means HVAC has to handle both extreme heat and real snow, and gets hammered by monsoon storms every summer — creating a distinct pattern of demand most agencies have never thought about. Becoming one of those three map pins, in the right neighborhoods and in both languages, is the whole game.",
    aioQuestion: 'How do Albuquerque businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Albuquerque neighborhoods like Nob Hill, Old Town, and Rio Rancho. Albuquerque is nearly half Hispanic, so the winners also show up in Spanish-language searches most competitors ignore entirely — and they're positioned for monsoon-season storm-damage demand before July, not after.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks. If you're not one of them, it almost doesn't matter how good your work is — most homeowners never see your name. Getting into that top three for Nob Hill, the Heights, Rio Rancho and the rest of your service area is usually the single highest-return move an Albuquerque contractor can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Albuquerque homeowner to four contractors, then bill each of you to fight over them. It's a treadmill. Local SEO builds the opposite: a homeowner finds you, calls you, and nobody else got it. Over time you stop renting and start owning the pipeline." },
      { title: "You're invisible to nearly half the market", body: "Nearly half of Albuquerque's residents are Hispanic, and many search in Spanish. Most contractors optimize only in English, so that demand sits wide open. Add the monsoon-season surge in roofing and stucco calls from July through September — if you're not ranking for that demand when the storms hit, a competitor who is will take every one of those jobs." },
    ],
    servicesHeading: 'What it actually takes to rank you in Albuquerque',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Albuquerque searches you should win — in both English and Spanish." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing across the Albuquerque metro." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes homeowners pick up the phone when your competitor is one tap away." },
      { name: 'Neighborhood pages', desc: "Real pages for Nob Hill, Old Town, the Heights, Rio Rancho, Corrales and the rest, so you rank for the neighborhood someone's actually searching, not just \"Albuquerque.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Albuquerque and New Mexico sources Google trusts — local press, trade associations, community organizations. This is what separates page one from page two." },
      { name: 'Spanish-language search targeting', desc: "Nearly half of Albuquerque searches in Spanish. We help you show up for the demand most of your competitors have never optimized for — and that almost nobody else is contesting.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you when homeowners ask for contractors in Albuquerque.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your Albuquerque neighborhoods and pin down which competitors are beating you in the Map Pack and why — including whether they're showing up for Spanish-language searches you're missing." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks, and it sets the stage for everything else." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now — well before monsoon season — over starting later." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Albuquerque, plus Spanish-language content where your customers are actually searching, backed by on-page work." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood or the next language segment." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Albuquerque neighborhoods.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across Albuquerque and the metro.', features: ['Everything in Local Growth', 'Local link building', 'Spanish-language search targeting', 'Multi-neighborhood service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Albuquerque?', a: "Most Albuquerque engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The competitive Albuquerque keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days is selling you something." },
      { q: 'What makes Albuquerque local SEO different?', a: "Two things stand out. Albuquerque is nearly half Hispanic, so Spanish-language search optimization is a major uncontested opportunity most contractors completely ignore. And the city's desert-plus-altitude climate creates distinct seasonal demand — scorching summers for HVAC, monsoon storms for roofing and stucco, and real winters for heating — that you need to be positioned for before the season hits, not after." },
      { q: 'Can you help me reach Spanish-speaking customers?', a: "Yes, and in Albuquerque that is a genuine competitive edge. Nearly half of residents identify as Hispanic and many search in Spanish. We optimize your profile and content so you show up for those searches across neighborhoods like the South Valley, the Heights, and Rio Rancho — where most contractors are simply invisible." },
      { q: 'Which areas do you cover?', a: "All of Albuquerque and the surrounding metro — Nob Hill, Old Town, the Heights, Rio Rancho, Corrales, Los Ranchos, Paradise Hills, Four Hills, Tijeras, the North and South Valley, and more. We build genuine neighborhood pages instead of one generic Albuquerque page, because that's what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand monsoon-season storm-damage calls, adobe and stucco repair, desert HVAC that has to handle both 95°F heat and snow, and the steady demand from the Kirtland Air Force Base and Sandia National Laboratories homeowner population." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads that three of your competitors also bought. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because the work is coming to you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your Albuquerque neighborhoods, what your Map Pack competitors are doing to beat you, whether you're showing up for Spanish-language searches, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'albuquerque', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Albuquerque SEO Company | Rank Higher, Get Leads | OnwardCraft',
    metaDescription:
      'Albuquerque SEO that ranks contractors on Google in English and Spanish, bringing in leads you own. Revenue-tied reporting, no lock-in, built for a desert market. Free audit.',
    eyebrow: 'SEO Services · Albuquerque, NM',
    h1: 'Get your Albuquerque business to the top of Google and keep it there',
    h2Exact: 'Albuquerque SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Albuquerque customers search — in English and Spanish — and the leads keep coming. We build that ranking and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free Albuquerque SEO audit',
    intro:
      "Albuquerque SEO comes down to one question: when someone searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in a market shaped by desert heat, monsoon seasons, historic adobe construction, and a population that's nearly half Hispanic — and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Albuquerque businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search in both English and Spanish, publishing genuinely useful local content tied to Albuquerque neighborhoods and seasonal demand, and earning links from trusted local sources. In a market where nearly half the city searches in Spanish and monsoon season creates an annual surge in roofing and storm-damage calls, contractors who prepare for seasonal demand and optimize for Spanish-language search pull well ahead of the competition.",
    problemHeading: "Three reasons your Albuquerque site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. In a market like Albuquerque — where homeowners dealing with monsoon damage or a HVAC failure need a contractor fast — if you're not in the top results for what you do, your site is invisible no matter how good your work is." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost of Albuquerque's lead brokers." },
      { title: "You're missing the demand that actually matters here", body: "Albuquerque demand swings hard with the seasons — HVAC in the summer heat, storm-damage roofing and stucco during monsoon, heating in winter — and nearly half the market searches in Spanish. If your SEO ignores both, you're leaving your busiest weeks and a huge chunk of your potential customers on the table." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings in Albuquerque',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your Albuquerque customers search — in English and Spanish — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers in Albuquerque search, earn links, and bring in leads on autopilot across the seasons." },
      { name: 'Link building', desc: "Authority from real Albuquerque and New Mexico sources. Links from local press, trade associations, and community organizations are often what separates page one from page two here." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across your Albuquerque neighborhoods alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Seasonal & emergency SEO', desc: "We rank you for monsoon-season storm-damage searches, summer HVAC emergencies, and winter heating calls before demand spikes — so the work comes to you, not your competitor.", featured: true },
      { name: 'Spanish-language SEO & GEO', desc: "Nearly half of Albuquerque searches in Spanish. We optimize your content and structure for Spanish-language search — and for AI Overviews, ChatGPT, and Perplexity where more research begins every month.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Albuquerque leads — in both English and Spanish, across seasonal demand cycles." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank, especially for homeowners searching on a phone during a monsoon emergency." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the seasonal, Spanish-language, and emergency terms that matter in this market." },
      { name: 'Build authority', desc: "Links and citations from trusted Albuquerque and New Mexico sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set or neighborhood." },
    ],
    pricing: {
      heading: 'Transparent Albuquerque SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local Albuquerque keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Albuquerque search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal & emergency SEO', 'Spanish-language SEO', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Albuquerque?', a: "Most Albuquerque SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Albuquerque?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter neighborhood terms and slower on the most competitive citywide keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads for Albuquerque contractors?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Albuquerque contractors do best running SEO as the long-term engine and ads for short bursts around monsoon season or winter heating demand." },
      { q: 'Should my Albuquerque SEO target seasonal demand?', a: "Absolutely. Monsoon season hits hard from July through September — roofing, stucco, and flood-damage calls spike almost overnight. Summer brings HVAC emergencies. Winter brings heating calls. Ranking takes months to build, so you have to be in place before the season, not chasing it after. We optimize for those terms ahead of the curve." },
      { q: 'Can you do Spanish-language SEO?', a: "Yes, and in Albuquerque that is one of the biggest untapped advantages available. Nearly half of the city identifies as Hispanic, and many of those residents search in Spanish. Most of your competitors have done nothing for that demand, which means it's wide open for a contractor willing to show up in both languages." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business when Albuquerque homeowners ask for contractors." },
      { q: 'Which areas around Albuquerque do you cover?', a: "All of Albuquerque and the surrounding metro — Nob Hill, Old Town, the Heights, Rio Rancho, Corrales, Los Ranchos, Paradise Hills, Four Hills, Tijeras, the North and South Valley — with genuine local pages rather than one generic city page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, whether you're missing Spanish-language demand, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'albuquerque', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Albuquerque Web Design Company | Sites That Convert | OnwardCraft',
    metaDescription:
      'Albuquerque web design that turns visitors into booked jobs — fast, mobile-first sites built for contractors in a desert market with Spanish-speaking homeowners. Free quote.',
    eyebrow: 'Web Design · Albuquerque, NM',
    h1: 'Albuquerque web design that turns visitors into booked jobs',
    h2Exact: 'Albuquerque Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Albuquerque contractors fast, mobile-first sites engineered to turn visitors into booked work — built for a market where nearly half the city searches in Spanish and monsoon storms create urgent demand overnight.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Albuquerque contractor websites lose leads quietly: slow on a phone, buried call button, no clear offer, and nothing that speaks to the specific neighborhoods, language, or seasonal character of this city. Web design done right fixes all of that. We build sites that load fast, look like the professional you are, and turn visitors from Nob Hill to Rio Rancho into booked jobs — designed for a market shaped by the desert, the altitude, the monsoon, and a community that's nearly half Hispanic.",
    aioQuestion: 'What makes a good contractor website in Albuquerque?',
    aioAnswer:
      "A good Albuquerque contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific neighborhoods you serve. Because Albuquerque is nearly half Hispanic, a strong site also reaches Spanish-speaking homeowners. And because monsoon season triggers urgent storm-damage calls from July through September, a high-converting site is positioned for that seasonal surge — not just the year-round baseline.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next contractor — and when a homeowner's roof is leaking after a monsoon storm, they need someone fast. We design every page around one job: turning a visitor into a booked lead before they tap the back button." },
      { title: "It's too slow on a phone", body: "Most of your Albuquerque visitors are on mobile, and they bounce if your site takes more than a few seconds to load. Slow sites also rank worse. During a July heat wave or a monsoon storm, people want a contractor now — a slow site means they find someone else." },
      { title: "It doesn't reflect how Albuquerque actually works", body: "A homeowner in Old Town wants to know you understand adobe and stucco. A homeowner in the South Valley may search in Spanish. A homeowner in the Heights wants to know you've handled storm damage after the monsoon. Generic contractor sites miss all of this. We build sites that speak to how your customers actually think and search." },
    ],
    servicesHeading: "What's in an OnwardCraft Albuquerque website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your Albuquerque neighborhoods, the climate you work in, and the jobs you actually want." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your Albuquerque traffic is — especially when someone's calling during a monsoon emergency or a summer HVAC failure." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a single, obvious next step." },
      { name: 'Copy that sells', desc: "Words that speak to Albuquerque homeowners — the adobe specialist, the monsoon-season roofer, the desert HVAC contractor who handles both 95°F heat and snow — not filler text that reads like every other contractor's site." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages across the Albuquerque metro." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Neighborhood-targeted pages with Spanish reach', desc: "Pages built around the neighborhoods you serve — from Corrales to Four Hills — plus content that reaches the Spanish-speaking homeowners nearly half the city includes, so you stand out where competitors are silent.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI — including Spanish-language AI queries.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your Albuquerque neighborhoods, your best jobs — adobe, HVAC, roofing after monsoon — and your competitors, then map the site around booking more of the work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert in this specific market. You see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center and content that reflects the real Albuquerque market." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one — ready to capture the next monsoon-season surge." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting, including seasonal demand patterns." },
    ],
    pricing: {
      heading: 'Transparent Albuquerque web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Spanish-language reach'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Albuquerque?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site reach Spanish-speaking customers?', a: "Yes, and in Albuquerque that matters more than almost anywhere else. Nearly half the city is Hispanic and many search in Spanish. We can build content and pages that reach those homeowners in their language, which most of your competitors have never done." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Albuquerque terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your Albuquerque traffic comes from — especially urgent calls during monsoon storms or summer HVAC emergencies." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Albuquerque site should include (including whether Spanish-language reach makes sense for your trade), and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'albuquerque', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Albuquerque Website Redesign | More Leads, No Loss | OnwardCraft',
    metaDescription:
      'Redesign your Albuquerque website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs — in English and Spanish. Free audit.',
    eyebrow: 'Website Redesign · Albuquerque, NM',
    h1: 'Redesign your Albuquerque website without losing your rankings',
    h2Exact: 'Albuquerque Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, and invisible to Spanish-speaking homeowners. We redesign Albuquerque contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Albuquerque contractor sites for speed and conversions, add the Spanish-language and neighborhood-specific content this market demands, and migrate with the redirects and SEO care that protect the traffic you already have — so the new site captures the next monsoon-season surge instead of starting over.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, better structured, and — in Albuquerque — reaches the Spanish-speaking homeowners the old site was ignoring.",
    problemHeading: "Signs your Albuquerque site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "For a high-ticket job — HVAC, roofing, a full adobe restoration — Albuquerque homeowners judge you by your site in seconds. An old, cluttered design sends them to a competitor who looks more established, even when your work is better." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your Albuquerque visitors before they ever see your offer. During a monsoon storm or a summer heat emergency, those visitors don't come back. A redesign built mobile-first wins them." },
      { title: "It's speaking to half the market and missing the rest", body: "An English-only generic contractor site in Albuquerque leaves nearly half the city unaddressed. Add that it probably doesn't speak to adobe work, monsoon-season damage, or the Kirtland and Sandia homeowner base — and there are multiple audiences you're not reaching at all. We rebuild for the actual Albuquerque market." },
    ],
    servicesHeading: "What's in an OnwardCraft Albuquerque redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today — slow load, weak conversion path, missing Spanish-language content, generic copy — so the redesign fixes real problems." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned when the new site goes live." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used — especially for urgent monsoon and HVAC calls when homeowners need to reach someone fast." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings, and critical when someone is calling you from a phone in the middle of a storm." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your Albuquerque traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the price of your jobs — and that reflects the character of Albuquerque rather than looking like any other contractor in any other city." },
      { name: 'Spanish-language and neighborhood-targeted rebuild', desc: "Rebuilt to reach the nearly half of Albuquerque that searches in Spanish, plus genuine neighborhood pages for Old Town, the Heights, Rio Rancho and the rest — so the new site stands out where the old one blended in.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you — in English and Spanish — as search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you leads and rankings — and what you're missing for Spanish-language and seasonal demand — then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build — styled for Albuquerque, not a generic contractor template." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast, write content that speaks to your actual market, and prepare every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and improve — positioned to capture the next monsoon season or summer HVAC surge." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting, seasonal demand patterns, and which neighborhoods are driving the most calls." },
    ],
    pricing: {
      heading: 'Transparent Albuquerque redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established Albuquerque contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Spanish-language reach'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Albuquerque?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, isn't bringing in leads, doesn't reach Spanish-speaking homeowners, or blends into the generic contractor market in Albuquerque — it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the redesign help me compete in Albuquerque?', a: "That's the whole point. We rebuild around the specific neighborhoods you serve, add Spanish-language reach if it fits your trade, and position you for the seasonal demand spikes — monsoon, summer HVAC, winter heating — that define this market. The new site stands out rather than blending in." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals — critical when someone calls you from their phone during a monsoon storm or an AC failure in the summer heat." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings — including whether you're missing Spanish-language demand or monsoon-season searches — what the redesign should fix, and a fixed-price quote with a timeline and safe migration plan." },
    ],
  },
];

export const albuquerqueCity = {
  citySlug: 'albuquerque', city: 'Albuquerque', state: 'New Mexico', stateAbbr: 'NM', metro: 'Albuquerque',

  titleTag: 'Albuquerque Marketing for Contractors | Web, SEO & Leads | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Albuquerque contractors. Rank in English and Spanish, capture monsoon-season demand, and own your leads. Free Albuquerque audit.',

  eyebrow: 'Albuquerque · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Albuquerque contractors found and booked',
  h2Exact: 'Albuquerque Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for a high-desert market that's nearly half Hispanic, hammered by monsoon storms every summer, and shaped by adobe construction nobody outside New Mexico truly understands. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Spanish-language reach', 'No lock-in contracts'],
  primaryCta: 'Get my free Albuquerque audit',

  intro:
    "If you run a contracting business in Albuquerque, you're working a market with a distinct character that most national agencies have never thought about. Nearly half the city is Hispanic and searches in Spanish — a massive uncontested opportunity. The climate at 5,300 feet means HVAC has to handle both desert heat above 95°F and real snowy winters, creating specialist demand. Adobe and stucco construction is everywhere, and generic contractors get it wrong. And every July through September, monsoon storms hit — and roofers, stucco contractors, and restoration crews who are already ranking are the ones who get every call. Winning here takes a website that converts, SEO that reaches both English and Spanish searches, and local SEO that puts you in the Map Pack neighborhood by neighborhood. Here's how we help Albuquerque contractors do exactly that.",
  aioQuestion: 'How do Albuquerque contractors get more leads online?',
  aioAnswer:
    "Albuquerque contractors get more leads by combining a fast, mobile-first website with SEO that ranks them in both English and Spanish and local SEO that wins the Google Map Pack neighborhood by neighborhood. Because nearly half the city is Hispanic and the market sees distinct seasonal demand peaks — monsoon-season storm damage in summer and heating in winter — contractors who show up in Spanish and are positioned for seasonal surges before they hit win far more work than those who treat Albuquerque like a generic Southwest city.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Albuquerque searches \"near me\" — in English and Spanish — neighborhood by neighborhood from Nob Hill to Rio Rancho.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your Albuquerque customers actually search, capture monsoon-season and summer-HVAC demand before it spikes, and build an asset you own instead of renting traffic from ads.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites built for the Albuquerque market — with Spanish-language reach, neighborhood-specific content, and conversion paths designed for homeowners who need a contractor fast.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed, conversions, and the full Albuquerque market — in both English and Spanish — and migrate it carefully so you keep every ranking you've already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Albuquerque?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank in both English and Spanish, capture seasonal demand, and own their leads — rather than renting them from lead brokers." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand monsoon-season storm-damage calls, adobe and stucco work, desert HVAC that handles both extreme heat and cold, and the steady homeowner demand from the Kirtland Air Force Base and Sandia National Laboratories population." },
    { q: 'Why does the Albuquerque market need a different approach?', a: "Because it's genuinely different. Albuquerque is nearly half Hispanic, sits at 5,300 feet with both desert heat and real winters, has a traditional adobe construction stock that generic contractors get wrong, and gets hammered by monsoon storms every July through September. Winning here means showing up in Spanish, being positioned for seasonal demand before it hits, and targeting neighborhoods specifically — not swapping a city name into a template designed for a flat, English-speaking suburb." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Albuquerque areas do you serve?', a: "All of Albuquerque and the surrounding metro — Nob Hill, Old Town, the Heights, Rio Rancho, Corrales, Los Ranchos, Paradise Hills, Four Hills, Tijeras, the North and South Valley, and Bernalillo — with genuine neighborhood pages rather than one generic city page." },
    { q: 'Where should I start?', a: "Start with a free Albuquerque audit. We'll look at your website, your rankings in English and Spanish, and your Map Pack presence across your service area, then tell you the one or two moves that will bring in the most work fastest — whether that's monsoon-season positioning, Spanish-language reach, or something else entirely. No pitch deck, just a plan." },
  ],
};
