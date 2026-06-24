// ARLINGTON: per-metro x per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Arlington's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// ARLINGTON: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why getting found in Arlington keeps getting harder',
  body:
    "Arlington is the busy middle of the Dallas-Fort Worth Metroplex, the entertainment capital wedged between two giant cities and home to AT&T Stadium, Globe Life Field, Six Flags, and a university with more than 40,000 students. That mix creates a dense, diverse, fast-spending residential market where homeowners are forever hunting for a trustworthy trade. Two forces decide who they hire. First, almost every one of them searches on a phone, types your service with \"near me\" attached, and taps one of the first names without scrolling. Second, this is North Texas, deep in tornado alley with some of the heaviest hail in the country. When a spring storm rips across the Mid-Cities between Mar and Jun, roofing and restoration demand does not climb, it detonates. Add triple-digit summers that hammer HVAC and the February freezes that burst pipes, and the contractors already showing up on the map are the ones writing the contracts.",
  pullQuote: 'When the next hailstorm hits Arlington, the contractors already on the map are the ones who book the work.',
  donut: {
    title: 'How Arlington searches',
    value: 30,
    centerLabel: 'Hispanic',
    legend: [
      { label: 'Hispanic', pct: 30, kind: 'teal' },
      { label: 'Other', pct: 70, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Hail and storm season (Mar to Jun), HVAC peak (Jun to Sep)',
  seasonalDemand: [
    { m: 'J', v: 40 }, { m: 'F', v: 42 }, { m: 'M', v: 70, peak: true }, { m: 'A', v: 86, peak: true },
    { m: 'M', v: 96, peak: true }, { m: 'J', v: 90, peak: true }, { m: 'J', v: 82, peak: true },
    { m: 'A', v: 80, peak: true }, { m: 'S', v: 64 }, { m: 'O', v: 48 },
    { m: 'N', v: 40 }, { m: 'D', v: 46 },
  ],
  stats: [
    { value: '400K+', label: 'people in Arlington, the anchor of the Mid-Cities' },
    { value: '~30%', label: 'of local searches here run on a phone, usually with "near me"', accent: true },
    { value: 'Mar-Jun', label: 'hail and tornado window, when roofing demand explodes' },
    { value: 'Top 3', label: 'Map Pack slots that grab the bulk of the clicks' },
  ],
  neighborhoods: [
    'Downtown Arlington', 'Dalworthington Gardens', 'Pantego', 'Mansfield', 'Grand Prairie',
    'Euless', 'Bedford', 'Hurst', 'Kennedale', 'North Arlington',
    'South Arlington', 'Viridian', 'Lake Arlington', 'UTA District', 'Entertainment District',
  ],
};

const AREAS = [
  'Arlington', 'Grand Prairie', 'Mansfield', 'Euless', 'Bedford', 'Hurst',
  'Pantego', 'Dalworthington Gardens', 'Kennedale', 'Colleyville', 'Southlake',
  'Irving', 'Cedar Hill', 'Duncanville', 'Fort Worth',
];

const FOUNDER =
  "Let me be straight with you. I started OnwardCraft after watching solid Arlington contractors wire a few grand a month to Angi and HomeAdvisor for leads that three of their competitors bought the same afternoon. You cannot build a real business on leads you rent. That is the entire reason this shop exists: to get you ranking and converting for the jobs you actually want, across the Mid-Cities neighborhoods you actually serve, with leads that belong to you and nobody else. No 12-month handcuffs. If we are not earning it, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, general contractors. We live in hail-season chaos, after-hours emergency calls, and insurance jobs, so everything we build is shaped around how your Arlington customers actually search and decide.",
  },
  {
    title: 'We get you off rented leads',
    body: "The point is a pipeline you own outright, not one more monthly invoice to a broker for the same homeowner three competitors in Mansfield and Grand Prairie also paid for.",
  },
  {
    title: 'We actually speak Arlington',
    body: "North Texas hail and tornado spikes, a diverse Mid-Cities market sitting between Dallas and Fort Worth, real neighborhood targeting from Downtown Arlington to Viridian to Kennedale. The local depth a national agency cannot fake by dropping a city name into a template.",
  },
  {
    title: 'No contracts, no mystery',
    body: "Prices published right on the page, reporting tied to real leads, month-to-month after the first 90 days. If we stop earning it, you walk. That keeps the pressure exactly where it should be, on us.",
  },
];

const PROOF = {
  heading: "We're new, so here's the honest math instead of a logo wall",
  body:
    "Plenty of agencies open with a wall of client logos. We are a young, founder-led shop in the Mid-Cities, so we will not fake a track record we have not built yet. What we can hand you is the reason this approach works, pulled straight from Google's and the industry's own research on how people search for local trades.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here is a rough sketch, clearly labelled as an illustrative projection and not a result we are claiming: say an Arlington contractor pulls roughly 1,500 local \"near me\" impressions a month. Climbing out of page-two invisibility into the top three is the gap between a trickle of calls and a calendar booked solid, and the day after a Mid-Cities hailstorm that gap widens even further. In your free audit we model the real numbers for your business: your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Arlington', state: 'Texas', stateAbbr: 'TX', metro: 'Arlington-Mid-Cities',
  heroProof: ['Built for the trades', 'Hail-season ready', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const arlingtonLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'arlington', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Arlington Local SEO Company | Win the Map Pack',
    metaDescription:
      'Arlington Local SEO that pins your trade to the Google Map Pack. We get you into the top three so the call lands with you, not a Mid-Cities competitor.',
    eyebrow: 'Local SEO · Arlington-Mid-Cities',
    h1: 'Arlington Local SEO that makes you the first name on the map from Downtown Arlington to Mansfield',
    h2Exact: 'Arlington Local SEO Company',
    heroSubhead:
      "Google pins three businesses to the map the moment someone searches \"near me.\" Everyone underneath them basically does not exist. We get you into that top three so the Arlington homeowner calls you instead of whoever ranked first, and so your phone is already winning when the next hailstorm lights up every screen in the Mid-Cities.",
    primaryCta: 'Get my free Arlington audit',
    intro:
      "Arlington local SEO comes down to one moment: when a homeowner in Downtown Arlington or Mansfield types your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. This is a dense, diverse Mid-Cities market squeezed between Dallas and Fort Worth, the competition is brutal, and earning one of those three spots is the entire game. Here is exactly how you take one.",
    aioQuestion: 'How do Arlington businesses rank higher in local search?',
    aioAnswer:
      "You win by nailing four things: a Google Business Profile dialed in for the exact services and Mid-Cities neighborhoods you want, name-address-phone listings that match everywhere across the web, a steady flow of real reviews, and local content tied to genuine Arlington neighborhoods. Arlington is dense, diverse, and storm-prone, so the businesses that win look established, answer fast, and are already ranking before spring hail demand erupts.",
    problemHeading: "If your Arlington phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" in Arlington right now. See those three businesses Google pins to the map? They scoop up the overwhelming majority of the clicks. If you are not one of them, it barely matters how clean your work is, because most homeowners never lay eyes on your name. Breaking into that top three is usually the single highest-return move an Arlington contractor can make all year." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Mansfield or Grand Prairie homeowner to four contractors, then bill every one of you to scrap over them. It is a treadmill that never stops charging you. Local SEO builds the opposite: a homeowner finds you, calls you, and nobody else got handed that lead. Month by month you stop renting and start owning the pipeline." },
      { title: "You're invisible when the hail hits", body: "When a spring hailstorm tears across North Texas, roofing and restoration demand goes vertical inside a day, and the contractors already ranking grab the calls while everyone else watches. If you are nowhere on the Arlington map when the next storm lands, the work flows to whoever Google already trusts. Ranking now is how you ride that surge instead of missing it." },
    ],
    servicesHeading: 'What it actually takes to rank you in Arlington',
    services: [
      { name: 'Google Business Profile', desc: "The single biggest lever in the Map Pack. We tune your categories, services, service area, photos, and posts so Google knows precisely which Arlington and Mid-Cities searches belong to you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to line up everywhere Google checks. We fix the listings that contradict each other and build the Arlington directories you are missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns every finished Mid-Cities job into a fresh review. It lifts your ranking and gives anxious homeowners the proof they need to call you first." },
      { name: 'Neighborhood pages', desc: "Real pages for Downtown Arlington, Mansfield, Grand Prairie, Euless and the rest, so you rank for the exact neighborhood a homeowner is searching, not just the word \"Arlington.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The wiring under the hood that lets every other piece actually rank in a crowded market." },
      { name: 'Local link building', desc: "Mentions and links from Arlington sources Google respects: local press, associations, neighborhood partners. In the Mid-Cities this is often what separates page one from page two." },
      { name: 'Storm-season readiness', desc: "We get your profile, pages, and reviews ranking before spring hail season so you capture the demand spike instead of scrambling for table scraps after every roof in town is already spoken for.", featured: true },
      { name: 'AI search readiness', desc: "More Arlington \"near me\" research now begins in AI Overviews, ChatGPT, and Perplexity. We structure your content so those engines can read you, trust you, and cite you by name.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We pin down where you actually rank today across your Arlington service areas and figure out which Mid-Cities competitors are beating you in the Map Pack and exactly why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move fastest. In Arlington you usually feel early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is the whole reason local SEO rewards starting before storm season, not after." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Arlington and the Mid-Cities, plus the on-page work that makes them stick." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and booked jobs, not vanity rankings. Then we go take the next Mid-Cities neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Arlington Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For contractors fighting across several Mid-Cities neighborhoods.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across the Mid-Cities.', features: ['Everything in Local Growth', 'Local link building', 'Storm-season demand targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Arlington?', a: "Most Arlington engagements land between $750 and $2,500 a month, depending on how many Mid-Cities neighborhoods and keywords you are chasing. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit before you spend a dollar." },
      { q: 'How long until I show up in the Arlington Map Pack?', a: "Profile improvements can move inside a few weeks. The competitive Arlington keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days in a market this dense is selling you smoke." },
      { q: 'What makes Arlington local SEO different?', a: "Two things. It is a dense, diverse Mid-Cities market jammed between Dallas and Fort Worth, so you are competing with contractors from across the whole Metroplex and trust signals like reviews and matching listings carry real weight. And it is North Texas, so trade demand swings hard with hail and tornado season; your ranking has to be set before the storm, not scrambled together after." },
      { q: 'How does local SEO help me during hail season?', a: "When a spring hailstorm rips across North Texas, searches for roofing and restoration spike overnight, and the businesses already in the Map Pack take those calls. We get you ranking and reviewed ahead of the Mar to Jun window so you catch that demand instead of fighting for leftovers once every competitor is already booked out." },
      { q: 'Which areas around Arlington do you cover?', a: "All of Arlington and the Mid-Cities: Downtown Arlington, Mansfield, Grand Prairie, Euless, Bedford, Hurst, Pantego, Kennedale, plus Colleyville, Southlake and more. We build genuine neighborhood pages instead of one generic Arlington page, because that is what actually ranks for \"[service] [neighborhood]\" searches here." },
      { q: 'Do you work with contractors specifically?', a: "It is basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand emergency calls, hail-driven demand, and insurance jobs across the Mid-Cities, and we build your local SEO around exactly that." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more Arlington \"near me\" research now starts inside AI instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It is fast becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that is roughly how long local SEO needs to show real movement in a market this competitive. After that it is month-to-month. If we are not delivering, you walk, and the accountability stays squarely on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build the rankings, Google profile, and review base that send Arlington homeowners straight to you. Over time you lean on the brokers less because the work is coming to you directly." },
      { q: "What's in the free Arlington audit?", a: "A clear read on where you rank today across your service areas, what your local 3-pack competitors are doing to beat you, the fixes that will move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. It is the honest starting point for Arlington Local SEO that actually puts you on the map. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'arlington', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Arlington SEO Company | OnwardCraft',
    metaDescription:
      'Arlington SEO that ranks contractors on Google and delivers leads you own. Revenue-tied reporting, no lock-in, built for Mid-Cities hail-season demand.',
    eyebrow: 'SEO Services · Arlington-Mid-Cities',
    h1: 'Arlington SEO that puts your business on page one across the Mid-Cities and holds it',
    h2Exact: 'Arlington SEO Company',
    heroSubhead:
      "Ads die the second you stop paying for them. SEO is the opposite: rank once for what your Arlington customers search and the leads keep landing for months. We build that ranking across the Mid-Cities and tie every report to real calls and booked jobs, not vanity traffic.",
    primaryCta: 'Get my free Arlington SEO audit',
    intro:
      "Arlington SEO comes down to one question: when a homeowner searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in a dense, diverse, storm-prone Metroplex market, and we measure the whole thing in leads you can count, not traffic you cannot bank.",
    aioQuestion: 'How do Arlington businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms Arlington customers search, publishing genuinely useful local content, and earning links from trusted Mid-Cities sources. In a dense, competitive North Texas market, keeping the site fast on mobile and ranking early for hail-driven seasonal terms are two of the quickest ways to pull ahead of the pack.",
    problemHeading: "Three reasons your Arlington site isn't bringing in work",
    painPoints: [
      { title: "You're stranded on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it either. If you are not in the top handful of results for what you sell in Arlington, your site is invisible to the homeowner who needed you today, no matter how sharp it looks." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the instant your card stops, the leads stop with it. SEO builds an asset you own: rankings that keep producing Arlington leads months and years after the work is done, at a fraction of the per-lead cost the brokers charge." },
      { title: "You're invisible for the demand that matters", body: "Arlington demand swings with the season and the storms, and the contractors who rank for those terms ahead of time catch the spike. If your SEO ignores hail-driven and seasonal searches, you are handing away your busiest, most profitable months of the year." },
    ],
    servicesHeading: 'The SEO work that actually moves Arlington rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google demands before it will rank an Arlington site at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned for the exact terms your Arlington customers search: titles, headings, content, and internal links that point Google in the right direction." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what Mid-Cities buyers search, earn links, and bring in leads while you are out on the job." },
      { name: 'Link building', desc: "Authority from real Arlington and industry sources. In a market this competitive, links are often the difference between page one and page two." },
      { name: 'Local SEO and Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches alongside your organic rankings across the Mid-Cities." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads, not just rankings and traffic, so you always know exactly what your Arlington SEO is worth in dollars." },
      { name: 'Storm and seasonal SEO', desc: "We rank you for the hail-driven and seasonal searches that drive Arlington's busiest months, so you are already visible before demand spikes instead of chasing it after.", featured: true },
      { name: 'AI search and GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, because a growing share of Arlington search now begins there.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and Mid-Cities competitors, then build a roadmap around the keywords most likely to drive real Arlington leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile. The foundation everything else needs before it can rank in a crowded market." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the seasonal and hail-driven terms that decide your busiest months in Arlington." },
      { name: 'Build authority', desc: "Links and citations from trusted Arlington and industry sources to push competitive Mid-Cities keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what is winning and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Arlington SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core Arlington keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and Mid-Cities neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Arlington and Mid-Cities search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Storm & seasonal SEO', 'eCommerce / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Arlington?', a: "Most Arlington SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract to trap you." },
      { q: 'How long does SEO take to work in Arlington?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on low-competition terms and slower on the most contested Arlington keywords. SEO compounds, so the gains keep stacking the longer you run it." },
      { q: 'Is SEO better than Google Ads for my Arlington business?', a: "They do different jobs. Ads buy instant traffic that vanishes the moment you stop paying. SEO is an asset you own that keeps producing Arlington leads at a lower cost per lead over time. Most contractors do best running SEO as the long-term engine and ads for short-term spikes." },
      { q: 'Should my Arlington SEO target hail season?', a: "Yes. When a spring hailstorm hits North Texas, searches for roofing and restoration spike overnight, and ranking takes months to build, so you have to be in place before the season rather than chasing it after. We optimize for those seasonal and hail-driven terms ahead of time so your busiest months land on you." },
      { q: "What's included in your Arlington SEO service?", a: "Technical SEO, on-page optimization, content, link building, local Map Pack SEO, and revenue-tied reporting. Higher tiers add storm-and-seasonal and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement in a market this competitive, then it is month-to-month. If we are not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your Arlington business, not just classic search." },
      { q: 'Which areas around Arlington do you cover?', a: "All of Arlington and the surrounding Mid-Cities: Mansfield, Grand Prairie, Euless, Bedford, Hurst, Pantego, Colleyville, Southlake and more, with genuine local pages rather than one generic Arlington page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send Arlington leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads." },
      { q: "What's in the free Arlington SEO audit?", a: "Where you rank today, what your Mid-Cities competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. It is a straight look at what Arlington SEO can do for your organic traffic and your pipeline. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'arlington', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Arlington Web Design Company | OnwardCraft',
    metaDescription:
      'Arlington web design that turns visitors into booked jobs: fast, mobile-first sites built for contractors and Mid-Cities hail-season demand.',
    eyebrow: 'Web Design · Arlington-Mid-Cities',
    h1: 'Arlington web design that books hail-season jobs instead of just looking nice',
    h2Exact: 'Arlington Web Design Company',
    heroSubhead:
      "A pretty website that never rings the phone is just a brochure. We build Arlington contractors fast, mobile-first sites engineered to turn visitors into booked work, and built to stay standing the day hail season floods every screen in the Mid-Cities.",
    primaryCta: 'Get my free quote',
    intro:
      "Arlington Web Design done right plugs the leaks that quietly bleed contractor sites dry: slow on a phone, call button buried, no clear offer anywhere. We build sites that load fast, look like the professional you already are, and turn Downtown-Arlington-to-Mansfield visitors into booked jobs, sites that do not fall over when a hailstorm sends your traffic through the roof.",
    aioQuestion: 'What makes a good contractor website in Arlington?',
    aioAnswer:
      "A good Arlington contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and is built to handle traffic spikes during hail season. Because most Arlington searches happen on mobile, mobile speed and an obvious next step are what separate a site that books jobs from one that just sits there collecting dust.",
    problemHeading: "Why your current Arlington site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of Arlington contractor sites just list services and sit there. No clear offer, no obvious next step, no reason for a homeowner to call you over the next guy on the map. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Arlington visitors are on mobile, and they bounce if your site stalls for more than a few seconds. Slow sites also rank worse in a competitive market. We build fast, so you keep the visitor and the ranking both." },
      { title: "It can't handle a storm-season surge", body: "After a big Mid-Cities hailstorm, contractor sites get slammed with a flood of traffic, and the slow ones buckle or hide the call button at the exact moment it matters most. We build sites that stay fast and keep converting under load, so you capture that demand instead of watching it crash your page." },
    ],
    servicesHeading: "What's in an OnwardCraft Arlington website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your Mid-Cities service area, and the jobs you actually want to book." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that is where nearly all of your Arlington traffic is. Fast, thumb-friendly, and easy to call from in two taps." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where Arlington homeowners actually use them. Every page has one clear next step." },
      { name: 'Copy that sells', desc: "Words written for the anxious homeowner with a leaking roof, built to book the job, not filler that reads like every other contractor in the Metroplex." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank: clean structure, schema, fast load, and neighborhood-ready pages for the Mid-Cities." },
      { name: 'Speed and Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both your conversions and your Arlington rankings." },
      { name: 'Storm-surge ready', desc: "Built to stay fast and keep the call button front and center when Mid-Cities hail-season traffic spikes, the exact moment that turns ordinary visitors into your biggest jobs of the year.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your Arlington business as more search shifts toward AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your Mid-Cities service area, your best jobs, and your competitors, then map the site around booking more of the work you actually want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert, and you see it and shape it before a single line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what is actually converting Arlington visitors into calls." },
    ],
    pricing: {
      heading: 'Transparent Arlington web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade Arlington contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Storm-surge ready'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Arlington?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above: fixed price, no surprises, and you own the finished Arlington site outright." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through every stage." },
      { q: 'Will my site handle an Arlington hail-season traffic spike?', a: "Yes, and in the Mid-Cities that matters more than almost anywhere. After a big hailstorm, contractor sites take a flood of traffic, and the slow ones lose leads right when demand peaks. We build fast and keep the call button obvious, so your site converts under load instead of buckling." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank, and pairing it with our SEO service is how you climb the competitive Arlington terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platform you cannot leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where nearly all of your Arlington traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage yourself, usually WordPress or Webflow. We will recommend the right fit in your free consult and explain the tradeoffs in plain English." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month, and you can leave whenever you want." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost Arlington leads, what a high-converting site should include, and a fixed-price quote with a timeline. It is the simplest way to see what Arlington Web Design built around your trade is worth. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'arlington', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Arlington Website Redesign | OnwardCraft',
    metaDescription:
      'Arlington Website Redesign without losing rankings. Faster, mobile-first rebuilds that convert more visitors and hold up in Mid-Cities hail season.',
    eyebrow: 'Website Redesign · Arlington-Mid-Cities',
    h1: 'Arlington Website Redesign that rebuilds for Mid-Cities leads, not just looks',
    h2Exact: 'Arlington Website Redesign Company',
    heroSubhead:
      "An outdated site quietly costs you jobs every week: slow, clumsy on a phone, easy to scroll right past. We redesign Arlington contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of Mid-Cities ranking you have already earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Arlington Website Redesign goes one of two bad ways for most contractors: the site looks sharper but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Arlington contractor sites for speed and conversions, build them to take a hail-season traffic surge, and handle the SEO-safe migration with the redirects that protect the Mid-Cities traffic you already own.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign holds your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one. In a competitive Arlington market, that care is what keeps a redesign from setting you back months.",
    problemHeading: "Signs your Arlington site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and quietly costs you trust", body: "For a high-ticket roof or HVAC job, Arlington homeowners size you up by your site in seconds. An old, cluttered design sends them straight to a competitor who looks more established, even when your work is flat-out better." },
      { title: "It's slow and clumsy on a phone", body: "If your site is sluggish or awkward on mobile, you are losing the majority of your Arlington visitors before they ever reach your offer. A redesign built mobile-first wins those homeowners back." },
      { title: "It can't keep up when demand surges", body: "Traffic that never turns into calls is wasted, and an old site that crawls under a Mid-Cities hail-season surge loses leads at the exact moment they are worth the most. We rebuild for conversions and for the days your phone should be ringing nonstop." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what is costing you Arlington leads and rankings today, so the redesign fixes real problems instead of just swapping colors around." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and Mid-Cities traffic you have already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, smarter call-to-action placement, and lead forms Arlington homeowners actually use. We design for booked jobs, not just a prettier look." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals, which lifts both conversions and rankings in a competitive market." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where nearly all of your Arlington traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the price tag of your Mid-Cities jobs." },
      { name: 'Storm-surge ready rebuild', desc: "Rebuilt to stay fast and keep converting when Mid-Cities hail-season traffic spikes, so the new site captures your biggest jobs instead of choking on them.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your Arlington business as search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We dig into what is losing you Arlington leads and rankings, then map a redesign that fixes it without breaking anything that already works." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build a thing." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration that protects your Mid-Cities traffic." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and watch closely so your Arlington rankings hold and climb, instead of dropping." },
      { name: 'Optimize', desc: "Post-launch tuning based on what is converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Arlington redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small Arlington contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Storm-surge ready'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Arlington?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the finished Arlington site." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it is done carefully, and that is exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your Arlington rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is a pain to update, is not bringing in Arlington leads, or buckles when hail-season traffic surges, it is costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and sharpen your existing content, preserve what is ranking, and handle the technical migration so nothing important slips through the cracks." },
      { q: 'Will the new site handle Arlington hail-season traffic?', a: "Yes, and in the Mid-Cities that is a real consideration. After a big hailstorm, contractor sites take a surge of traffic, and the slow ones lose leads. We rebuild for speed and keep the call to action obvious so the site converts when demand peaks." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings across the Arlington market." },
      { q: 'Do I own the redesigned site?', a: "Completely: the site, the domain, and the content. No platform lock-in, ever." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in Arlington leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan. It tells you plainly whether an Arlington Website Redesign is worth it for your business." },
    ],
  },
];

export const arlingtonCity = {
  citySlug: 'arlington', city: 'Arlington', state: 'Texas', stateAbbr: 'TX', metro: 'Arlington-Mid-Cities',

  titleTag: 'Arlington Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Arlington marketing for contractors: web design, SEO, and local SEO that gets you found and booked, so you own your leads instead of renting them.',

  eyebrow: 'Arlington · Web Design, SEO & Lead Generation',
  h1: 'Arlington marketing for contractors who want to own their Mid-Cities leads',
  h2Exact: 'Arlington Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Arlington's dense, diverse, storm-driven Mid-Cities market. One team to get you ranking, converting, and off the rented-lead treadmill for good.",
  heroProof: ['Built for the trades', 'Hail-season ready', 'No lock-in contracts'],
  primaryCta: 'Get my free Arlington audit',

  intro:
    "Arlington marketing for contractors comes down to fighting for attention in the busy heart of the Dallas-Fort Worth Metroplex, where the competition is everywhere you look. Winning here takes three things working together: a site that converts, SEO that ranks you for what homeowners search, and local SEO that puts you in the Map Pack, all set before the next hailstorm sends Mid-Cities demand through the roof. Here is how our web design and SEO for Arlington contractors do exactly that.",
  aioQuestion: 'How do Arlington contractors get more leads online?',
  aioAnswer:
    "Arlington contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack. Because Arlington is a dense, diverse Mid-Cities market and demand spikes hard during spring hail and tornado season, the contractors who look established and are already ranking before the storm win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Arlington searches \"near me.\" The single highest-return move for most local trades, and how you catch Mid-Cities hail-season demand.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your Arlington customers actually search, build an asset you own instead of renting traffic from ads, and measure it in booked leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn Arlington visitors into booked jobs, and to stay fast when hail season floods your phone, not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it carefully so you keep every bit of Arlington ranking you have already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Arlington?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads, and are ready when hail season hits the Mid-Cities." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors, so we understand emergency calls, hail-driven demand, and insurance work across Arlington." },
    { q: 'Why does hail season matter for my marketing?', a: "When a spring hailstorm or tornado hits North Texas, demand for roofing and restoration spikes overnight and the backlog can run for months. Ranking takes months to build, so the contractors who are already visible before the storm take that work. We get you in place ahead of the Mar to Jun window." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free Arlington audit." },
    { q: 'Which Arlington areas do you serve?', a: "All of Arlington and the surrounding Mid-Cities: Downtown Arlington, Mansfield, Grand Prairie, Euless, Bedford, Hurst, Pantego, Kennedale, plus Colleyville, Southlake and more." },
    { q: 'Where should I start?', a: "Start with a free Arlington audit. We will look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves in your Arlington marketing for contractors that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};
