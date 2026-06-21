// ORLANDO metro: per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across the 4 service pages and the hub. They describe the same
// city, so sharing is correct and DRY. Service-specific blocks are per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// ORLANDO: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why Orlando rewards the contractors who move first',
  body:
    "Central Florida holds roughly 2.1 million people and keeps adding them faster than anywhere else in the state, with something like 37,000 new residents landing in a single year. Picture that: thousands of households unpacking boxes, none of them with a roofer or a plumber saved in their phone yet, all reaching for Google at once. Two forces make this metro unlike any other. The first is language. Orlando is the heart of the largest Puerto Rican community on the U.S. mainland, with an estimated half a million Puerto Ricans spread across the region and counties like Osceola tipping past 50 percent Hispanic. A serious chunk of the highest-intent searches happen in Spanish, yet almost no agency lifts a finger to rank for them. The second is tourism. Close to 37 percent of regional jobs orbit the theme parks, hotels, and short-term rentals, which keeps property turnover and repair work flowing year round. Layer on hurricane season from June through November and demand for roofing, restoration, and HVAC can detonate in a single weekend.",
  pullQuote: 'Half a million Puerto Ricans live here, plenty of them searching in Spanish, and to your competitors they simply do not exist.',
  donut: {
    title: 'How Orlando searches',
    value: 36,
    centerLabel: 'Hispanic',
    legend: [
      { label: 'Hispanic', pct: 36, kind: 'teal' },
      { label: 'Non-Hispanic', pct: 64, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Hurricane season (Jun-Nov)',
  seasonalDemand: [
    { m: 'J', v: 34 }, { m: 'F', v: 36 }, { m: 'M', v: 42 }, { m: 'A', v: 50 },
    { m: 'M', v: 58 }, { m: 'J', v: 72, peak: true }, { m: 'J', v: 86, peak: true },
    { m: 'A', v: 94, peak: true }, { m: 'S', v: 95, peak: true }, { m: 'O', v: 82, peak: true },
    { m: 'N', v: 64, peak: true }, { m: 'D', v: 40 },
  ],
  stats: [
    { value: '2.1M+', label: 'people across the Orlando metro' },
    { value: '~36%', label: 'Hispanic, a Spanish-search market most agencies skip', accent: true },
    { value: 'Jun-Nov', label: 'hurricane season, when trade demand spikes' },
    { value: 'Top 3', label: 'Map Pack spots that grab most of the clicks' },
  ],
  neighborhoods: [
    'Downtown Orlando', 'Winter Park', 'Lake Nona', 'Dr. Phillips', 'Baldwin Park',
    'College Park', 'Kissimmee', 'St. Cloud', 'Apopka', 'Oviedo',
    'Winter Garden', 'Ocoee', 'Sanford', 'Altamonte Springs', 'Maitland',
  ],
};

const AREAS = [
  'Orlando', 'Kissimmee', 'Sanford', 'St. Cloud', 'Winter Park', 'Apopka',
  'Oviedo', 'Winter Garden', 'Ocoee', 'Altamonte Springs', 'Lake Mary',
  'Winter Springs', 'Casselberry', 'Clermont', 'Maitland',
];

const FOUNDER =
  "Let me be honest about why OnwardCraft exists. I kept seeing solid Central Florida contractors wire a few thousand dollars a month to Angi and HomeAdvisor for leads that three of their rivals had already bought. Nobody builds a real business on leads they are renting. So our entire job is simple: get you ranking and converting for the work you actually want, in the Orlando neighborhoods you actually serve, and make every one of those leads yours to keep. No year-long handcuffs. The day it stops working, you show us the door.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, general contracting. We understand storm season, 2 a.m. emergency calls, and insurance claims, so everything we build maps to how Central Florida homeowners actually go looking for help.",
  },
  {
    title: 'We get you off rented leads',
    body: "The point is a pipeline you own outright. Not one more monthly bill to a lead broker for an Orlando homeowner three of your competitors are also paying to chase.",
  },
  {
    title: 'We actually speak Orlando',
    body: "Spanish optimization for the largest Puerto Rican community on the mainland, planning for hurricane-season surges, and real targeting from Winter Park down to Kissimmee. None of that survives a national agency swapping a city name into a template.",
  },
  {
    title: 'No contracts, no mystery',
    body: "Prices published in the open, reporting tied to actual leads, month-to-month once the first 90 days are up. If we stop earning it, you walk. That puts the pressure exactly where it should be: on us.",
  },
];

const PROOF = {
  heading: "We are new, so here is the honest math instead of a logo wall",
  body:
    "Plenty of agencies will wave a grid of client logos at you. We are a young, founder-led shop, so we are not going to fake a track record we have not built yet. What we can put in front of you is why this approach works, pulled straight from Google's and the industry's own research on how people search close to home.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here is a rough sketch, labelled plainly as an illustration and not a result we are claiming: suppose an Orlando contractor pulls around 1,500 local \"near me\" impressions a month. Climbing out of page-two invisibility and into the top three is the gap between a few stray calls and a calendar that stays full, and in a metro absorbing tens of thousands of new homeowners every year, that flow should only widen. During your free audit we model the real figures for your business: your rankings, your search volume, and a straight 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Orlando', state: 'Florida', stateAbbr: 'FL', metro: 'Central Florida',
  heroProof: ['Built for the trades', 'English + Spanish', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const orlandoLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'orlando', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Orlando Local SEO Company | Win the Map Pack',
    metaDescription:
      'When Orlando searches your service, three businesses show on the map. We put you in those three, in English and Spanish, so the call lands with you.',
    eyebrow: 'Local SEO · Central Florida',
    h1: 'When Orlando searches for what you do, be the first name they find',
    h2Exact: 'Orlando Local SEO Company',
    heroSubhead:
      "Type \"near me\" into Google and three businesses claim the map. Everyone underneath them is, for practical purposes, invisible. We move you into that top three, in English and in Spanish, so the next homeowner who searches calls you instead of whoever happened to rank first.",
    primaryCta: 'Get my free Orlando audit',
    intro:
      "Local SEO in Orlando is a fight with its own rules. The metro keeps swelling, which means a fresh wave of homeowners with nobody saved in their contacts, and a large share of them search in Spanish, because this is the largest Puerto Rican community on the U.S. mainland. A homeowner in Kissimmee or Lake Nona taps one of the three businesses Google pins to the map and never scrolls another inch. Becoming one of those three is the entire ballgame. Here is exactly how you get there.",
    aioQuestion: 'How do Orlando businesses rank higher in local search?',
    aioAnswer:
      "You win by nailing four things: a Google Business Profile genuinely optimized for the services and Central Florida neighborhoods you want, name, address, and phone details that match everywhere on the web, a steady stream of real reviews, and local content that includes Spanish, since Orlando anchors the largest Puerto Rican community on the mainland. Because the metro is booming and hurricane-prone, the businesses that win look established, answer the phone fast, and show up in both languages.",
    problemHeading: "If your phone is quiet, it is usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. Those three businesses Google pins to the map collect the lion's share of the clicks. If your name is not among them, the quality of your work barely registers, because most people never lay eyes on it. For an Orlando contractor, breaking into that top three is usually the single highest-return move available." },
      { title: "You are paying for leads you never own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Orlando homeowner to four contractors, then charge each of you to scrap over them. It is a treadmill with no finish line. Local SEO builds the opposite machine: a lead finds you, calls you, and no rival got a copy. Month by month you stop renting and start owning." },
      { title: "You are invisible to a huge Spanish-speaking market", body: "Orlando is home to the largest Puerto Rican community on the U.S. mainland, and counties like Osceola run past 50 percent Hispanic. Yet your website and Google profile almost certainly speak only English. So every \"plomero cerca de mí\" and \"reparación de aires\" search defaults to someone else. That is not a rounding error, it is a whole market walking past your door." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The heaviest lever in the Map Pack. We tune your categories, services, service area, photos, and posts so Google knows precisely which Orlando searches belong to you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to line up everywhere Google checks. We repair the listings that contradict each other and build the ones you are missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns every finished Central Florida job into a fresh review. It pushes your ranking up and nudges the next caller to dial." },
      { name: 'Neighborhood pages', desc: "Genuine pages for Winter Park, Lake Nona, Kissimmee, Apopka, and the rest, so you rank for the neighborhood someone is truly searching rather than a generic \"Orlando.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The wiring beneath the floorboards that lets everything else climb." },
      { name: 'Local link building', desc: "Mentions and links from Central Florida sources Google already trusts: local press, trade associations, partners. Around here, this is what divides page one from page two." },
      { name: 'Spanish-language SEO', desc: "The edge almost nobody bothers with. Spanish keywords, Spanish profile content, Spanish pages, built to capture the enormous Hispanic market your competitors leave untouched.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now kicks off inside AI Overviews, ChatGPT, and Perplexity. We structure your content so those engines can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We map where you genuinely rank today across every service area, in both languages, and pinpoint which Central Florida competitors are beating you and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP come first, because they move quickest. Early lift here usually shows up inside a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is exactly why local SEO pays the people who start now rather than later." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages, in English and Spanish where the math works, plus the on-page work that holds them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and booked jobs, not vanity rankings. Then we go take the next Orlando neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses scrapping across several Orlando neighborhoods.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want Central Florida in both languages.', features: ['Everything in Local Growth', 'Local link building', 'Spanish-language SEO', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Orlando?', a: "Most Orlando engagements land between $750 and $2,500 a month, set by how many neighborhoods and keywords you are chasing and whether you want Spanish-language work. Our tiers sit right above this. No hidden fees, no long contract, and we lock the exact scope during your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move inside a few weeks. The competitive Orlando keywords usually take 90 to 180 days of steady work, because reviews and citations build up over time. In a market this crowded, anyone promising page one in 30 days is selling you a fairy tale." },
      { q: 'What makes Orlando local SEO different from regular SEO?', a: "Three things. It is deeply Hispanic: Orlando anchors the largest Puerto Rican community on the mainland, so loads of high-intent searches happen in Spanish that most agencies never touch. It is hurricane-prone, so trades ride sharp seasonal spikes your visibility has to be ready for. And it is growing fast, with new homeowners arriving every month who have nobody to call yet." },
      { q: 'Do you really do Spanish-language SEO?', a: "Yes, and it is one of the biggest edges we hand you. Orlando holds the largest Puerto Rican community on the U.S. mainland, and counties like Osceola run past 50 percent Hispanic, yet your competitors optimize in English alone. We chase Spanish keywords and build Spanish profile content and pages, so you catch searches nobody else is even bidding on." },
      { q: 'Which areas do you cover?', a: "Every corner of metro Orlando and the surrounding cities: Winter Park, Lake Nona, Kissimmee, St. Cloud, Apopka, Oviedo, Winter Garden, Sanford, Altamonte Springs, and more. We build real neighborhood pages instead of one catch-all Orlando page, because that is what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It is very nearly all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We get emergency calls, storm-driven demand, and insurance jobs, and we shape your local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "A rising share of \"near me\" research now starts inside AI rather than classic search. We structure your content and schema so those engines can read, trust, and cite your business. It is fast becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that is roughly how long local SEO needs to show real movement. After that it is month-to-month. If we are not delivering, you leave, and the accountability stays squarely on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that route leads straight to you. As that grows, you lean on the lead brokers less, because the work is already heading your way." },
      { q: "What is in the free audit?", a: "A clear read on where you rank today across your service areas in both languages, what your Map Pack competitors are doing to beat you, the fixes that will move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck, just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'orlando', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Orlando SEO Company | Rank Higher, Get Leads',
    metaDescription:
      'Orlando SEO that ranks contractors on Google and delivers leads you own, in English and Spanish. Revenue-tied reporting, no lock-in contracts.',
    eyebrow: 'SEO Services · Central Florida',
    h1: 'Get your Orlando business to the top of Google and keep it there',
    h2Exact: 'Orlando SEO Company',
    heroSubhead:
      "Ads die the instant you stop feeding them. SEO does the opposite: rank once for what your Orlando customers search, in both languages, and the leads keep arriving. We build that ranking and tie every report back to real calls and booked jobs.",
    primaryCta: 'Get my free Orlando SEO audit',
    intro:
      "SEO in Orlando boils down to one question: when someone searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords, in English and in the Spanish that a huge slice of Central Florida actually types, and we measure the result in leads, not vanity traffic. In a metro filling up this quickly, the ranking you build today keeps paying out as more homeowners move in.",
    aioQuestion: 'How do Orlando businesses rank higher on Google?',
    aioAnswer:
      "They rank by repairing the site's technical foundation, optimizing each page for the exact terms customers type, publishing genuinely useful local content, and earning links from trusted Central Florida sources. In a fast-growing, heavily Hispanic market like Orlando, ranking in Spanish and keeping the site quick on mobile are two of the fastest ways to leap ahead of competitors who only optimize in English.",
    problemHeading: "Three reasons your Orlando site is not bringing in work",
    painPoints: [
      { title: "You are stranded on page two", body: "Hardly anyone clicks past the first page of Google, and they rarely scroll far down it. If you are not in the top handful of results for what you sell, your site is effectively invisible, no matter how sharp it looks. In Orlando, where new homeowners are searching daily, every day on page two is leads handed to the contractor above you." },
      { title: "You are renting traffic from Google Ads", body: "Ads can pull their weight, but the second your card stops, the leads stop cold. SEO builds an asset you own: rankings that keep producing Orlando leads months and years after the work is done, at a fraction of the cost per lead." },
      { title: "You are ignoring a big share of Orlando's searches", body: "Orlando holds the largest Puerto Rican community on the U.S. mainland, and a lot of high-intent searches happen in Spanish. If your SEO is English-only, you are gift-wrapping those searches for a competitor. We rank you in both languages so they stay yours." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google demands before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned for the exact terms your Orlando customers type: titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, pull in links, and bring leads in on their own." },
      { name: 'Link building', desc: "Authority from real Central Florida and industry sources. In a market this competitive, links are often the line between page one and page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you take the \"near me\" searches right alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads, not just rankings and traffic, so you always know what your SEO is genuinely worth." },
      { name: 'Spanish-language SEO', desc: "We rank you in Spanish too, scooping up the large Hispanic market searching in a language your competitors flat-out ignore.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, right where a growing share of search now starts.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then draw a roadmap around the keywords most likely to drive real Orlando leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile: the foundation everything else needs before it can rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus fresh local content, in both languages wherever it pays." },
      { name: 'Build authority', desc: "Links and citations from trusted Central Florida and industry sources to shove competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we pour fuel on what is working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Orlando SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site chasing its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses set on owning Orlando search in both languages.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Spanish-language SEO', 'eCommerce / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Orlando?', a: "Most Orlando SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and whether you need Spanish-language and content work. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Orlando?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, quicker on low-competition terms and slower on the fiercest Orlando keywords. SEO compounds, so the gains keep stacking the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They handle different jobs. Ads buy instant traffic that vanishes when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Orlando contractors do best running SEO as the long-term engine and ads for short bursts, like a hurricane-season push." },
      { q: 'Do you do Spanish-language SEO?', a: "Yes. Orlando is home to the largest Puerto Rican community on the U.S. mainland, and most agencies optimize in English only. We rank you in both languages so you scoop up searches your competitors never even target." },
      { q: "What is included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. Higher tiers add Spanish-language and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it is month-to-month. If we are not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which areas around Orlando do you cover?', a: "All of metro Orlando and the surrounding cities: Winter Park, Lake Nona, Kissimmee, St. Cloud, Apopka, Oviedo, Winter Garden, Sanford, and more, with genuine local pages rather than one generic Orlando page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads straight to you. The more you own your search visibility, the less you depend on paying brokers for shared leads." },
      { q: "What is in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'orlando', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Orlando Web Design Company | Sites That Book',
    metaDescription:
      'Orlando web design that turns visitors into booked jobs: fast, mobile-first, bilingual sites built for contractors. Transparent pricing, you own it all.',
    eyebrow: 'Web Design · Central Florida',
    h1: 'Orlando web design that turns visitors into booked jobs',
    h2Exact: 'Orlando Web Design Company',
    heroSubhead:
      "A handsome website that never rings the phone is just a brochure. We build Orlando contractors fast, mobile-first sites, in English and Spanish, engineered to turn visitors into booked work rather than polite compliments.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Orlando contractor websites leak leads quietly: sluggish on a phone, a call button buried three scrolls down, English-only in a metro that anchors the largest Puerto Rican community on the mainland. Web design done right plugs every one of those holes. We build sites that load fast, look like the professional you already are, and turn visitors from Winter Park to Kissimmee into booked jobs.",
    aioQuestion: 'What makes a good contractor website in Orlando?',
    aioAnswer:
      "A good Orlando contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and works in both English and Spanish. Because most Orlando searches happen on mobile and a large share of the market is Hispanic, mobile speed and bilingual content are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site is not bringing in work",
    painPoints: [
      { title: "It is a brochure, not a lead engine", body: "Plenty of contractor sites just list services and go quiet. No clear offer, no obvious next step, no reason to pick you over the next name on the map. We design every page around a single job: turning an Orlando visitor into a booked lead." },
      { title: "It crawls on a phone", body: "Most of your Orlando visitors are on mobile, and they bounce the moment a site takes more than a few seconds to load. Slow sites rank worse too. We build fast, so you keep the visitor and the ranking both." },
      { title: "It only speaks English", body: "Orlando holds the largest Puerto Rican community on the U.S. mainland, and counties like Osceola run past 50 percent Hispanic. An English-only site quietly turns away a huge chunk of your potential customers. We build bilingual so you keep them." },
    ],
    servicesHeading: "What is in an OnwardCraft Orlando website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site shaped around your trade, your service area, and the Central Florida jobs you actually want more of." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that is where almost all of your Orlando traffic lives. Fast, thumb-friendly, one tap to call." },
      { name: 'Conversion-focused UX', desc: "Clear offers, unmissable call buttons, and lead forms placed where people actually use them. Every page hands the visitor a next step." },
      { name: 'Copy that sells', desc: "Words written to reassure an anxious homeowner and book the job, not filler that reads like every other contractor in town." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank: clean structure, schema, fast load, and pages ready for the neighborhoods you serve." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and clear Google's performance checks, which protects both your conversions and your rankings." },
      { name: 'Bilingual build', desc: "English and Spanish versions so you capture the large Hispanic market in Orlando, something almost no local competitor bothers to offer.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts toward AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your service area, your most profitable jobs, and your competitors, then map the site around booking more of the work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert. You see it and shape it before a single line of code gets written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, in English and Spanish wherever it pays off in Orlando." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it around what is actually converting visitors into calls." },
    ],
    pricing: {
      heading: 'Transparent Orlando web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors juggling several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Bilingual-ready'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Full bilingual build', 'Advanced SEO + schema', 'Integrations & booking', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Orlando?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, set by page count, whether you need a full bilingual version, and any integrations. Our tiers are above: fixed price, no surprises, and you own the finished site outright." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom or bilingual build runs 4 to 8. We hand you a firm timeline up front and keep you posted through each stage." },
      { q: 'Do you build Spanish-language websites?', a: "Yes, and in Orlando it is one of the smartest moves you can make. The metro anchors the largest Puerto Rican community on the mainland, so a bilingual site captures customers an English-only competitor turns away at the door." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and pages ready for your neighborhoods. The build gets you primed to rank; pairing it with our SEO service is how you climb the competitive Orlando terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you cannot leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where almost all of your Orlando traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can genuinely manage, usually WordPress or Webflow. We recommend the right fit in your free consult and explain the tradeoffs in plain language." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month, so you can leave whenever you like." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Orlando site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'orlando', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Orlando Website Redesign | More Leads, No Loss',
    metaDescription:
      'Redesign your Orlando website without losing rankings. Faster, mobile-first, bilingual rebuilds that convert more visitors into booked jobs.',
    eyebrow: 'Website Redesign · Central Florida',
    h1: 'Redesign your Orlando website without losing your rankings',
    h2Exact: 'Orlando Website Redesign Company',
    heroSubhead:
      "An outdated site bleeds jobs every week: slow, clumsy on a phone, English-only. We redesign Orlando contractor sites to convert more and load faster, then migrate with such care that you keep every bit of ranking you have already earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns fail in one of two ways: the site looks sharper but converts exactly the same, or it launches and the rankings evaporate overnight. We do neither. We redesign Orlando contractor sites for speed and conversions, build them bilingual for the metro's large Hispanic market, and migrate with the redirects and SEO care that guard the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign holds your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Orlando site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and quietly costs you trust", body: "On a high-ticket job, an Orlando homeowner sizes you up by your site in seconds. An old, cluttered design nudges them toward a competitor who simply looks more established, even when your work runs circles around theirs." },
      { title: "It is slow and awkward on a phone", body: "If your site stutters or crawls on mobile, you are losing most of your Orlando visitors before they ever reach your offer. A redesign built mobile-first wins them back." },
      { title: "It does not convert, or speak Spanish", body: "Traffic that never turns into calls is money down the drain, and an English-only site shrugs off the large Hispanic market in Orlando. We rebuild for conversions and for both languages at once." },
    ],
    servicesHeading: "What is in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pin down exactly what is costing you leads and rankings today, so the redesign fixes real problems instead of just swapping the colors around." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and Orlando traffic you have already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, smarter call-to-action placement, and lead forms people actually fill out. We design for booked jobs, not just a pretty screenshot." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals, which lifts both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all of your Orlando traffic actually lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the price tag on your jobs." },
      { name: 'Bilingual rebuild', desc: "English and Spanish versions so the new site captures the large Hispanic market across Orlando.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search keeps shifting toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what is losing you leads and rankings, then map a redesign that fixes it without breaking the parts already working." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we touch the build." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and bilingual, and prepare every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and watch closely so rankings hold and climb, never drop." },
      { name: 'Optimize', desc: "Post-launch tuning based on what is converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Orlando redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Bilingual-ready'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Full bilingual version', 'Advanced SEO migration', 'Integrations & booking', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Orlando?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, set by size, whether you need a full bilingual version, and any integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it is handled carefully, and that is exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually nudges them upward." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger or bilingual rebuild runs 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is a pain to update, is not bringing in leads, or speaks only English in a heavily Hispanic metro like Orlando, it is costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and sharpen your existing content, preserve what is ranking, and handle the technical migration so nothing important slips through the cracks." },
      { q: 'Can you make my redesigned site bilingual?', a: "Absolutely, and in Orlando we recommend it. A bilingual rebuild captures the large Hispanic market, including the largest Puerto Rican community on the U.S. mainland." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely: the site, the domain, and the content. No platform lock-in of any kind." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What is in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

// ===========================================================================
// ORLANDO: city hub (renders at /orlando/)
// ===========================================================================
export const orlandoCity = {
  citySlug: 'orlando', city: 'Orlando', state: 'Florida', stateAbbr: 'FL', metro: 'Central Florida',

  titleTag: 'Orlando Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Orlando contractors, in English and Spanish. Get found, get booked, and own your leads instead of renting them.',

  eyebrow: 'Orlando · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Orlando contractors found and booked',
  h2Exact: 'Orlando Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Orlando's fast-growing, heavily Hispanic, hurricane-driven market. One team to get you ranking, converting, and off the rented-lead treadmill, in English and Spanish.",
  heroProof: ['Built for the trades', 'English + Spanish', 'No lock-in contracts'],
  primaryCta: 'Get my free Orlando audit',

  intro:
    "If you run a contracting business in Orlando, you are fighting for attention in one of the fastest-growing and most Hispanic markets in the country. Winning here takes three things pulling together: a site that converts, SEO that ranks you for what people search, and local SEO that drops you into the Map Pack, all in English and Spanish. Here is how we help Orlando contractors do exactly that.",
  aioQuestion: 'How do Orlando contractors get more leads online?',
  aioAnswer:
    "Orlando contractors get more leads by combining a fast, mobile-first, bilingual website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack. Because Orlando is home to the largest Puerto Rican community on the mainland and demand spikes during hurricane season, the contractors who show up in both languages and look established win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Break into the top three businesses Google pins to the map when Orlando searches \"near me,\" in English and Spanish. For most local businesses it is the single highest-return move on the board.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your Orlando customers actually type, build an asset you own instead of renting traffic from ads, and measure it in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first, bilingual websites engineered to turn Orlando visitors into booked jobs, not brochures that just sit there looking nice.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, then migrate it carefully so you keep every bit of ranking you have already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Orlando?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients pair a high-converting website with SEO and local SEO so they rank, convert, and own their leads. Everything is available in English and Spanish." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades, roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors, so we understand emergency calls, storm-driven demand, and insurance work." },
    { q: 'Do you offer services in Spanish?', a: "Yes, and in Orlando it is a major advantage. The metro anchors the largest Puerto Rican community on the U.S. mainland, yet most agencies optimize in English only. We build and rank you in both languages." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Orlando areas do you serve?', a: "All of metro Orlando and the surrounding cities: Winter Park, Lake Nona, Kissimmee, St. Cloud, Apopka, Oviedo, Winter Garden, Sanford, Altamonte Springs, and more." },
    { q: 'Where should I start?', a: "Start with a free Orlando audit. We will look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};
