// ALBUQUERQUE: per-metro, per-service local landing pages + city hub.
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
// ALBUQUERQUE: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'What it really takes to win the Albuquerque market',
  body:
    "Picture the homeowner you want. They live a mile up at 5,300 feet, where July afternoons push past 95°F and December nights drop below freezing in the same calendar year. They watched the monsoon roll in over the Sandias last summer (July through September) and saw hail strip the south side of a stucco wall in twenty minutes. When their roof leaks or their AC quits, they grab a phone and search. Here is the part most of your competitors miss: nearly half of Albuquerque is Hispanic, and a huge share of those neighbors run that search in Spanish. The big agencies build everything in English and call it done, which leaves an enormous slice of paying demand sitting there untouched. Layer on the adobe, the stucco, the flat roofs, and the vigas that out-of-state crews fumble, and the verdict writes itself: this city pays the contractor who proves they actually live here, and quietly skips the one running a template. You can be the one it pays.",
  pullQuote:
    'Half of Albuquerque searches in Spanish while your competitors stay English-only. That gap is not a problem for you. It is the easiest market share in the city to take.',
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
  seasonCaption: 'HVAC + monsoon damage (Jun-Sep) and winter heating (Dec-Feb)',
  seasonalDemand: [
    { m: 'J', v: 60, peak: false }, { m: 'F', v: 58, peak: false }, { m: 'M', v: 52, peak: false },
    { m: 'A', v: 50, peak: false }, { m: 'M', v: 62, peak: false }, { m: 'J', v: 88, peak: true },
    { m: 'J', v: 95, peak: true }, { m: 'A', v: 92, peak: true }, { m: 'S', v: 85, peak: true },
    { m: 'O', v: 54, peak: false }, { m: 'N', v: 62, peak: false }, { m: 'D', v: 78, peak: false },
  ],
  stats: [
    { value: '920K+', label: 'people across the Albuquerque metro searching for trades' },
    { value: '~49%', label: 'of residents are Hispanic, and Spanish search is still wide open', accent: true },
    { value: '5,300 ft', label: 'elevation, so triple-digit heat and real snow hit the same homes' },
    { value: 'Jul-Sep', label: 'monsoon window, when roof, stucco, and flood calls flood in' },
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
  "Here is the honest version. I started OnwardCraft after watching solid contractors wire a few grand a month to Angi and HomeAdvisor for leads that three rivals bought the same afternoon. You cannot grow on leads you rent. In Albuquerque the waste stung even more: agencies treating a high-desert city like any flat suburb, building only in English, skipping adobe and stucco entirely, and sleeping through the monsoon demand that lands like clockwork every summer. That is the exact gap we close. We get you ranking and converting for the jobs you want, in the neighborhoods you drive to, in the language your customers type. No year-long handcuffs. The day it stops working, you walk, and the pressure stays on me to keep it working.";

const WHY = [
  {
    title: 'Trades are the only thing we do',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, general contracting. We know the monsoon hail call, the desert system that has to beat 95°F afternoons and freezing nights, and the adobe and stucco work that defines New Mexico building. So every page we ship is built around how your buyers actually search, not how a generic agency guesses they do.",
  },
  {
    title: 'We get you off rented leads for good',
    body: "The point is a pipeline with your name on it. Not one more invoice to a broker reselling the same Albuquerque homeowner to three of your competitors, and charging you big-city rates for it while the metro stays mid-sized. Own the lead and you own the margin.",
  },
  {
    title: 'We actually know this city',
    body: "Targeting that runs neighborhood by neighborhood, from Nob Hill to Corrales, plus real Spanish-language reach to claim the searches nearly half the city runs and almost no contractor optimizes for. A national shop cannot fake that by dropping a city name into a template, and it shows.",
  },
  {
    title: 'No contracts, nothing hidden',
    body: "Prices published on the page, reporting tied to leads instead of vanity charts, month-to-month after the first 90 days. If we are not earning the invoice, you leave with everything. That keeps the accountability sitting squarely on us.",
  },
];

const PROOF = {
  heading: "We are new, so you get the honest math instead of a wall of logos",
  body:
    "Other agencies will flash a grid of client logos at you. We are a young, founder-led shop, and we are not going to fake a track record we have not built yet. What we can hand you is the reasoning, drawn straight from Google's and the industry's own research on how people actually search for local trades.",
  stats: [
    { value: '46%', label: 'of Google searches carry local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that same day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here is a rough sketch, labelled plainly as an illustrative projection and not a result we claim: say an Albuquerque contractor pulls roughly 1,200 local \"near me\" impressions a month across a few neighborhoods plus Spanish-language searches. Climbing from buried-on-page-two into the top three is the difference between a silent phone and a calendar you have to fight to keep open. When the monsoon hits and storm-damage calls spike, that gap turns into real money walking to whoever ranks. In your free audit we model the actual figures for your business: your rankings, your search volume, and a straight 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) plus one illustrative projection. None of it is a past result claimed by OnwardCraft.",
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
    titleTag: 'Albuquerque Local SEO Company | OnwardCraft',
    metaDescription:
      'When Albuquerque searches your service, three businesses show on the map. We put you in those three, in English and Spanish, so the call lands with you.',
    eyebrow: 'Local SEO · Albuquerque, NM',
    h1: 'When Albuquerque searches for what you do, be the first name on the map',
    h2Exact: 'Albuquerque Local SEO Company',
    heroSubhead:
      "Google pins exactly three businesses to the map when someone types \"near me.\" Everyone underneath is invisible. In a city that is nearly half Hispanic, sits a mile high, and swings from 95°F afternoons to snow, we put you in that top three for your neighborhoods, in English and Spanish, so the call rings your phone instead of the contractor who simply ranked above you.",
    primaryCta: 'Get my free Albuquerque audit',
    intro:
      "Albuquerque local SEO really hangs on one question: when a homeowner in Nob Hill or the Heights searches your service plus \"near me,\" are you one of the three names Google pins to the map? Most people tap one of those three and never scroll an inch further. This city is nearly half Hispanic, sits at an altitude that forces HVAC to survive both punishing heat and real snow, and takes a monsoon beating every summer, which builds a demand pattern most agencies have never bothered to study. Landing one of those three pins, in the neighborhoods that matter and in both languages, is the entire contest. We get you there and keep you there.",
    aioQuestion: 'How do Albuquerque businesses rank higher in local search?',
    aioAnswer:
      "You win by nailing four things: a Google Business Profile tuned to the exact services and neighborhoods you want, name-address-phone listings that match everywhere Google checks, a steady stream of genuine reviews, and local content tied to real Albuquerque areas like Nob Hill, Old Town, and Rio Rancho. Because the city is nearly half Hispanic, the contractors who pull ahead also show up for the Spanish-language searches their rivals ignore, and they get positioned for monsoon storm-damage demand before July arrives rather than scrambling after it.",
    problemHeading: "When the phone goes quiet, it is usually one of these three",
    painPoints: [
      { title: 'Your competitors own all three map spots', body: "Search your own service plus \"near me\" right now. Those three businesses Google pinned to the map collect the overwhelming majority of the taps. If your name is not among them, the quality of your work barely matters because most homeowners never lay eyes on it. Breaking into that top three for Nob Hill, the Heights, Rio Rancho, and the rest of your service area is usually the single highest-return move an Albuquerque contractor can make, and it is the first thing we go after." },
      { title: "You are paying for leads someone else also bought", body: "Angi, Thumbtack, and HomeAdvisor sell one Albuquerque homeowner to four contractors, then bill each of you to brawl over the scraps. It is a treadmill that never stops. Local SEO builds the reverse: a homeowner finds you, calls you, and no rival ever saw the lead. Stack that month after month and you stop renting demand and start owning it outright." },
      { title: "You are invisible to nearly half the city", body: "Close to half of Albuquerque residents are Hispanic, and plenty search in Spanish. Most contractors optimize in English only, so that demand sits untouched and waiting. Add the July-to-September surge in roofing and stucco calls, and the math is brutal: if you are not ranking when the storms roll over the Sandias, the competitor who is will book every one of those jobs while you watch." },
    ],
    servicesHeading: 'What it actually takes to rank you across Albuquerque',
    services: [
      { name: 'Google Business Profile', desc: "The single biggest lever in the Map Pack. We sharpen your categories, services, service area, photos, and posts so Google knows precisely which Albuquerque searches belong to you, in English and Spanish alike." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to read identically everywhere Google looks. We repair the listings that contradict each other and build the ones you are missing across the Albuquerque metro." },
      { name: 'Reviews that keep coming', desc: "A simple, repeatable system that turns every finished job into a fresh review. That lifts your ranking and gives the homeowner a reason to call you when a competitor sits one tap away." },
      { name: 'Neighborhood pages', desc: "Genuine pages for Nob Hill, Old Town, the Heights, Rio Rancho, Corrales, and the rest, so you rank for the exact neighborhood someone is searching instead of a vague \"Albuquerque.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The quiet plumbing that lets every other piece actually climb the rankings." },
      { name: 'Local link building', desc: "Mentions and links from Albuquerque and New Mexico sources Google already trusts: local press, trade groups, community organizations. This is frequently the line between page one and page two here." },
      { name: 'Spanish-language search targeting', desc: "Nearly half of Albuquerque searches in Spanish. We get you visible for the demand your competitors never optimized for, in a lane almost nobody else is even contesting.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now kicks off inside AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and recommend you when someone asks for a contractor in Albuquerque.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We map exactly where you rank today across your Albuquerque neighborhoods and pin down which competitors are beating you in the Map Pack and why, including whether they are quietly winning Spanish-language searches you are not even in." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP go first, because they move fastest. You usually feel early lift here within a few weeks, and it sets up everything that follows." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is the whole reason local SEO rewards starting now, well ahead of monsoon season, over waiting until you are already underwater." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Albuquerque, plus Spanish-language content aimed where your customers actually search, all backed by solid on-page work." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and booked leads, not vanity rankings. Then we go take the next neighborhood, or the next language segment, whichever pays you faster." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For contractors battling across several Albuquerque neighborhoods.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors out to own the map across Albuquerque and the metro.', features: ['Everything in Local Growth', 'Local link building', 'Spanish-language search targeting', 'Multi-neighborhood service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Albuquerque?', a: "Most Albuquerque engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you are chasing. The tiers are right above this. No hidden fees, no long contract, and we lock the exact scope in your free audit before you spend a dollar." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile work can move inside a few weeks. The competitive Albuquerque keywords usually take 90 to 180 days of steady effort, because reviews and citations compound over time rather than flipping a switch. Anyone promising you page one in 30 days is selling smoke, not results." },
      { q: 'What makes Albuquerque local SEO different?', a: "Two things really stand out. The city is nearly half Hispanic, so Spanish-language search is a large, mostly uncontested opening your competitors leave wide open. And the desert-plus-altitude climate creates sharp seasonal swings: triple-digit summers for HVAC, monsoon storms for roofing and stucco, and genuinely cold winters for heating. You need to be ranked before each season lands, not scrambling once it already has." },
      { q: 'Can you help me reach Spanish-speaking customers?', a: "Yes, and in Albuquerque that is a real edge rather than a nice-to-have. Nearly half of residents are Hispanic and many search in Spanish. We tune your profile and content so you surface for those searches across the South Valley, the Heights, Rio Rancho, and beyond, where most contractors are simply not there at all." },
      { q: 'Which areas do you cover?', a: "All of Albuquerque and the surrounding metro: Nob Hill, Old Town, the Heights, Rio Rancho, Corrales, Los Ranchos, Paradise Hills, Four Hills, Tijeras, the North and South Valley, and more. We build genuine neighborhood pages instead of one generic Albuquerque page, because that is what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It is essentially all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand monsoon storm-damage calls, adobe and stucco repair, desert HVAC that has to handle both 95°F heat and snow, and the steady demand from the Kirtland Air Force Base and Sandia National Laboratories homeowner base." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More \"near me\" research now starts inside AI instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It is fast becoming as important as the Map Pack itself, and we build for it now rather than later." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that is roughly how long local SEO needs to show real movement. After that it is month-to-month. If we are not delivering, you walk, and the accountability stays squarely on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads that three competitors also paid for. We build rankings, a Google profile, and a review base that route leads straight to you and only you. As that visibility grows, your reliance on the brokers shrinks, because the work starts arriving directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your Albuquerque neighborhoods, what your Map Pack competitors are doing to beat you, whether you are surfacing for Spanish-language searches, the fixes that will move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck, just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'albuquerque', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Albuquerque SEO Company | OnwardCraft',
    metaDescription:
      'Albuquerque SEO that ranks contractors on Google in English and Spanish for leads you own. Revenue-tied reporting, no lock-in, built for a desert market.',
    eyebrow: 'SEO Services · Albuquerque, NM',
    h1: 'Get your Albuquerque business to the top of Google and keep it there',
    h2Exact: 'Albuquerque SEO Company',
    heroSubhead:
      "Ads die the instant you stop paying. SEO does the opposite: rank once for what your Albuquerque customers search, in English and Spanish, and the leads keep arriving. We build that ranking and tie every report to real calls and booked jobs, never vanity traffic.",
    primaryCta: 'Get my free Albuquerque SEO audit',
    intro:
      "Albuquerque SEO comes down to a single question: when someone searches what you do, are you on page one or page two? Page two might as well be page fifty, because almost nobody goes there. We get contractors ranking for the money keywords in a market shaped by desert heat, a hard monsoon season, historic adobe construction, and a population that is nearly half Hispanic. Then we measure the whole thing in leads you can count, not traffic you cannot bank.",
    aioQuestion: 'How do Albuquerque businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the site's technical foundation, optimizing each page for the exact terms customers use in both English and Spanish, publishing genuinely useful local content tied to Albuquerque neighborhoods and seasonal demand, and earning links from trusted local sources. In a market where nearly half the city searches in Spanish and monsoon season triggers an annual surge in roofing and storm-damage calls, the contractors who prepare for that seasonal demand and optimize for Spanish-language search pull clearly ahead of the pack.",
    problemHeading: "Three reasons your Albuquerque site is not bringing in work",
    painPoints: [
      { title: "You are stranded on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it either. In a market like Albuquerque, where a homeowner staring at monsoon damage or a dead AC needs help fast, being absent from the top results means your site is invisible no matter how good your crews are. Talent you cannot be found for does not pay the bills." },
      { title: "You are renting every visitor from Google Ads", body: "Ads can work, but the second your card stops, so do the leads. SEO builds an asset you actually own: rankings that keep producing months and years after the work is done, at a fraction of the per-lead cost Albuquerque's brokers charge. One is a faucet you pay to keep running; the other is a well you dig once." },
      { title: "You are skipping the demand that matters most here", body: "Albuquerque demand swings hard with the calendar: HVAC in the summer heat, storm-damage roofing and stucco through the monsoon, heating in winter. And nearly half the market searches in Spanish. Ignore both and you are leaving your busiest weeks and a huge share of your potential customers sitting on the table for someone else to clear." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings in Albuquerque',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google demands before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned for the exact terms your Albuquerque customers search, in English and Spanish: titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers in Albuquerque actually ask, earn links, and pull in leads on autopilot across every season." },
      { name: 'Link building', desc: "Authority from real Albuquerque and New Mexico sources. Links from local press, trade associations, and community groups are often what separates page one from page two here." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across your Albuquerque neighborhoods right alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and booked leads, not just rankings and traffic, so you always know exactly what your SEO is worth in dollars." },
      { name: 'Seasonal & emergency SEO', desc: "We rank you for monsoon storm-damage searches, summer HVAC emergencies, and winter heating calls before demand spikes, so the work routes to you instead of the competitor who waited.", featured: true },
      { name: 'Spanish-language SEO & GEO', desc: "Nearly half of Albuquerque searches in Spanish. We optimize your content and structure for Spanish-language search, and for AI Overviews, ChatGPT, and Perplexity, where more research begins every single month.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Albuquerque leads, in both English and Spanish, across the seasonal demand cycles that define this city." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile: the foundation everything else needs, and doubly so for a homeowner searching on a phone in the middle of a monsoon emergency." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus fresh local content, including the seasonal, Spanish-language, and emergency terms that decide who books the work in this market." },
      { name: 'Build authority', desc: "Links and citations from trusted Albuquerque and New Mexico sources to push your competitive keywords onto page one and hold them there." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what is working and expand into the next keyword set or neighborhood that will pay." },
    ],
    pricing: {
      heading: 'Transparent Albuquerque SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site chasing its core local Albuquerque keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across multiple services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that intend to own Albuquerque search outright.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal & emergency SEO', 'Spanish-language SEO', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Albuquerque?', a: "Most Albuquerque SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. The tiers sit above this, with no hidden fees and no long contract to trap you." },
      { q: 'How long does SEO take to work in Albuquerque?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter neighborhood terms and slower on the most competitive citywide keywords. SEO compounds, so the gains keep stacking the longer you run it rather than flattening out." },
      { q: 'Is SEO better than Google Ads for Albuquerque contractors?', a: "They do different jobs. Ads buy instant traffic that vanishes the moment you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Albuquerque contractors win by running SEO as the long-term engine and ads for short bursts around monsoon season or winter heating demand." },
      { q: 'Should my Albuquerque SEO target seasonal demand?', a: "Absolutely. Monsoon season hits hard from July through September, and roofing, stucco, and flood-damage calls spike almost overnight. Summer brings HVAC emergencies, winter brings heating calls. Ranking takes months to build, so you have to be in place before the season, not chasing it after the storms pass. We optimize for those terms well ahead of the curve." },
      { q: 'Can you do Spanish-language SEO?', a: "Yes, and in Albuquerque it is one of the biggest untapped advantages on the board. Nearly half the city is Hispanic, and many of those residents search in Spanish. Most of your competitors have done absolutely nothing for that demand, which leaves it wide open for any contractor willing to show up in both languages." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO genuinely needs that long to show real movement, then it shifts to month-to-month. If we are not delivering, you leave, and you keep everything we built." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business when Albuquerque homeowners ask them for a contractor recommendation." },
      { q: 'Which areas around Albuquerque do you cover?', a: "All of Albuquerque and the surrounding metro: Nob Hill, Old Town, the Heights, Rio Rancho, Corrales, Los Ranchos, Paradise Hills, Four Hills, Tijeras, the North and South Valley, with genuine local pages rather than one generic city page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that route leads straight to you. The more you own your search visibility, the less you lean on brokers reselling the same shared lead to your competitors." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, whether you are missing Spanish-language demand, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'albuquerque', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Albuquerque Web Design Company | OnwardCraft',
    metaDescription:
      'Albuquerque web design that turns visitors into booked jobs: fast, mobile-first sites built for contractors in a desert market with Spanish-speaking buyers.',
    eyebrow: 'Web Design · Albuquerque, NM',
    h1: 'Albuquerque web design that turns visitors into booked jobs',
    h2Exact: 'Albuquerque Web Design Company',
    heroSubhead:
      "A handsome website that never rings the phone is just a brochure. We build Albuquerque contractors fast, mobile-first sites engineered to turn visitors into booked work, made for a market where nearly half the city searches in Spanish and a monsoon storm can create urgent demand overnight.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Albuquerque contractor websites bleed leads quietly: sluggish on a phone, a call button buried three scrolls down, no clear offer, and nothing that speaks to the neighborhoods, the language, or the seasonal rhythm of this city. Web design done right fixes every bit of that. We build sites that load fast, look like the professional you already are, and turn visitors from Nob Hill to Rio Rancho into booked jobs, all designed for a market shaped by the desert, the altitude, the monsoon, and a community that is nearly half Hispanic.",
    aioQuestion: 'What makes a good contractor website in Albuquerque?',
    aioAnswer:
      "A good Albuquerque contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific neighborhoods you serve. Because Albuquerque is nearly half Hispanic, a strong site also reaches Spanish-speaking homeowners. And because monsoon season drives urgent storm-damage calls from July through September, a high-converting site is positioned for that seasonal surge, not just the year-round baseline.",
    problemHeading: "Why your current site is not bringing in work",
    painPoints: [
      { title: "It is a brochure, not a lead engine", body: "Plenty of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next guy, and when a homeowner's roof is pouring water after a monsoon storm, they need someone now. We design every page around one job: turning a visitor into a booked lead before their thumb finds the back button." },
      { title: "It is too slow on a phone", body: "Most of your Albuquerque visitors are on mobile, and they bounce the second your site stalls past a few seconds. Slow sites also rank worse, so it compounds. During a July heat wave or a monsoon downpour people want a contractor immediately, and a slow site hands them to whoever loaded faster." },
      { title: "It ignores how Albuquerque actually works", body: "A homeowner in Old Town wants proof you understand adobe and stucco. A homeowner in the South Valley may be searching in Spanish. A homeowner in the Heights wants to know you have handled storm damage after the monsoon. Generic contractor sites whiff on all of it. We build sites that speak to how your customers genuinely think and search." },
    ],
    servicesHeading: "What goes into an OnwardCraft Albuquerque website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your Albuquerque neighborhoods, the climate you actually work in, and the jobs you genuinely want to book." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that is where nearly all your Albuquerque traffic lives, especially when someone is calling mid-monsoon or during a summer HVAC failure." },
      { name: 'Conversion-focused UX', desc: "Clear offers, unmissable call buttons, and lead forms placed exactly where people actually use them. Every page carries one obvious next step." },
      { name: 'Copy that sells', desc: "Words written for Albuquerque homeowners: the adobe specialist, the monsoon-season roofer, the desert HVAC pro who handles both 95°F heat and snow, not filler that reads like every other contractor's page." },
      { name: 'Local SEO foundation', desc: "Built from the studs up to rank: clean structure, schema, fast load, and neighborhood-ready pages across the Albuquerque metro." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both your conversions and your rankings at the same time." },
      { name: 'Neighborhood-targeted pages with Spanish reach', desc: "Pages built around the neighborhoods you serve, from Corrales to Four Hills, plus content that reaches the Spanish-speaking homeowners who make up nearly half the city, so you stand out exactly where competitors stay silent.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI, including Spanish-language AI queries your rivals are not even aware of.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your Albuquerque neighborhoods, your best jobs (adobe, HVAC, roofing after the monsoon), and your competitors, then map the site around booking more of the work you actually want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert in this specific market. You see it and shape it before a single line of code gets written." },
      { name: 'Build and copy', desc: "We build it fast and write copy that sells, with the call to action front and center and content that reflects the real Albuquerque market, not a generic stock script." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one, ready to capture the next monsoon-season surge the moment it arrives." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what is actually converting, including the seasonal demand patterns that swing this market." },
    ],
    pricing: {
      heading: 'Transparent Albuquerque web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors running several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Spanish-language reach'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Albuquerque?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. The tiers are above this: fixed price, no surprises, and you own the finished site outright." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build runs 4 to 8. We hand you a firm timeline up front and keep you posted through each stage so you are never guessing." },
      { q: 'Will my site reach Spanish-speaking customers?', a: "Yes, and in Albuquerque it matters more than almost anywhere else. Nearly half the city is Hispanic and many search in Spanish. We can build content and pages that reach those homeowners in their language, which most of your competitors have never bothered to do." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the genuinely competitive Albuquerque terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations and no platform you cannot leave when you choose to." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where nearly all your Albuquerque traffic comes from, especially the urgent calls during monsoon storms or summer HVAC emergencies." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage day to day, usually WordPress or Webflow. We will recommend the right fit in your free consult and walk you through the tradeoffs in plain English." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that, only if you want it." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month, so you can leave whenever you like." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Albuquerque site should include (including whether Spanish-language reach fits your trade), and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'albuquerque', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Albuquerque Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your Albuquerque website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs, in English and Spanish.',
    eyebrow: 'Website Redesign · Albuquerque, NM',
    h1: 'Redesign your Albuquerque website without losing your rankings',
    h2Exact: 'Albuquerque Website Redesign Company',
    heroSubhead:
      "An outdated site quietly costs you jobs every week: slow, awkward on a phone, and invisible to Spanish-speaking homeowners. We redesign Albuquerque contractor sites to convert more and load faster, and we migrate with such care that you keep every bit of ranking you have already earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns fail in one of two ways: the site looks sharper but converts exactly the same, or it launches and the rankings evaporate overnight. We refuse both. We redesign Albuquerque contractor sites for speed and conversions, add the Spanish-language and neighborhood-specific content this market demands, and migrate with the redirects and SEO care that protect the traffic you already have, so the new site captures the next monsoon-season surge instead of starting from zero.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign holds your rankings and improves them, because the new site is faster, mobile-first, better structured, and, in Albuquerque, finally reaching the Spanish-speaking homeowners the old site quietly ignored.",
    problemHeading: "Signs your Albuquerque site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and quietly drains your trust", body: "For a high-ticket job (HVAC, roofing, a full adobe restoration) Albuquerque homeowners size you up by your site in seconds. An old, cluttered design pushes them toward a competitor who simply looks more established, even when your craftsmanship runs circles around theirs." },
      { title: "It is slow and clumsy on a phone", body: "If your site is clunky or slow on mobile, you are losing the majority of your Albuquerque visitors before they ever reach your offer. During a monsoon storm or a summer heat emergency those visitors do not circle back. A mobile-first redesign wins them and keeps them." },
      { title: "It talks to half the market and ignores the rest", body: "An English-only generic contractor site in Albuquerque leaves nearly half the city unaddressed. Add that it probably says nothing about adobe work, monsoon damage, or the Kirtland and Sandia homeowner base, and you have multiple audiences you are not reaching at all. We rebuild for the actual Albuquerque market, not a stock version of it." },
    ],
    servicesHeading: "What goes into an OnwardCraft Albuquerque redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what is costing you leads and rankings today: slow load, a weak conversion path, missing Spanish-language content, generic copy, so the redesign fixes real problems instead of cosmetic ones." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you hold onto the rankings and traffic you have already earned when the new site goes live." },
      { name: 'Conversion redesign', desc: "Clear offers, smarter call-to-action placement, and lead forms that actually get used, especially for the urgent monsoon and HVAC calls when a homeowner needs to reach someone immediately." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals, better for both conversions and rankings, and critical when someone is calling from a phone in the middle of a storm." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where nearly all your Albuquerque traffic already lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the price of your jobs, and that reflects the character of Albuquerque instead of looking like any other contractor in any other city." },
      { name: 'Spanish-language and neighborhood-targeted rebuild', desc: "Rebuilt to reach the nearly half of Albuquerque that searches in Spanish, plus genuine neighborhood pages for Old Town, the Heights, Rio Rancho, and the rest, so the new site stands out where the old one blended in.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you, in English and Spanish, as search keeps shifting toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what is losing you leads and rankings, and what you are missing for Spanish-language and seasonal demand, then map a redesign that fixes it without breaking what already works for you." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build, styled for Albuquerque rather than pulled from a generic contractor template." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast, write content that speaks to your actual market, and prepare every redirect and SEO detail for a clean, careful migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and climb, positioned to capture the next monsoon season or summer HVAC surge." },
      { name: 'Optimize', desc: "Post-launch tuning based on what is converting, the seasonal demand patterns of this market, and which neighborhoods are driving the most calls." },
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
      { q: 'How much does a website redesign cost in Albuquerque?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result the day it ships." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it is done carefully, and careful is exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild runs 5 to 9. You get a firm timeline up front and updates at every stage, so there are no surprises." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is not bringing in leads, does not reach Spanish-speaking homeowners, or blends into the generic contractor crowd in Albuquerque, it is quietly costing you work. The free audit tells you plainly whether a redesign is worth it for you." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and sharpen your existing content, preserve whatever is ranking, and handle the technical migration so nothing important slips through the cracks." },
      { q: 'Will the redesign help me compete in Albuquerque?', a: "That is the entire point. We rebuild around the specific neighborhoods you serve, add Spanish-language reach where it fits your trade, and position you for the seasonal demand spikes (monsoon, summer HVAC, winter heating) that define this market. The new site stands out instead of blending in." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which is critical when someone is calling you from a phone during a monsoon storm or an AC failure in the summer heat." },
      { q: 'Do I own the redesigned site?', a: "Completely: the site, the domain, and the content. No platform lock-in and no strings." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month, so you stay only as long as it is working." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings (including whether you are missing Spanish-language demand or monsoon-season searches), what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const albuquerqueCity = {
  citySlug: 'albuquerque', city: 'Albuquerque', state: 'New Mexico', stateAbbr: 'NM', metro: 'Albuquerque',

  titleTag: 'Albuquerque Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Albuquerque contractors. Rank in English and Spanish, capture monsoon-season demand, and finally own your own leads.',

  eyebrow: 'Albuquerque · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Albuquerque contractors found and booked',
  h2Exact: 'Albuquerque Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for a high-desert market that is nearly half Hispanic, hammered by monsoon storms every summer, and shaped by adobe construction nobody outside New Mexico truly gets. One team to get you ranking, converting, and off the rented-lead treadmill for good.",
  heroProof: ['Built for the trades', 'Spanish-language reach', 'No lock-in contracts'],
  primaryCta: 'Get my free Albuquerque audit',

  intro:
    "If you run a contracting business in Albuquerque, you are working a market with a character most national agencies have never stopped to understand. Nearly half the city is Hispanic and searches in Spanish, which is a huge uncontested opening. The climate at 5,300 feet forces HVAC to beat both desert heat above 95°F and genuinely snowy winters, which creates specialist demand. Adobe and stucco construction is everywhere, and generic contractors get it wrong. And every July through September the monsoon rolls in, and the roofers, stucco crews, and restoration teams already ranking are the ones who field every call. Winning here takes a website that converts, SEO that reaches both English and Spanish searches, and local SEO that lands you in the Map Pack neighborhood by neighborhood. Here is how we help Albuquerque contractors do exactly that.",
  aioQuestion: 'How do Albuquerque contractors get more leads online?',
  aioAnswer:
    "Albuquerque contractors get more leads by pairing a fast, mobile-first website with SEO that ranks them in both English and Spanish and local SEO that wins the Google Map Pack neighborhood by neighborhood. Because nearly half the city is Hispanic and the market sees distinct seasonal peaks (monsoon storm damage in summer, heating in winter), contractors who show up in Spanish and are positioned for those surges before they hit book far more work than the ones treating Albuquerque like a generic Southwest city.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Land in the top three businesses Google pins to the map when Albuquerque searches \"near me,\" in English and Spanish, neighborhood by neighborhood from Nob Hill to Rio Rancho.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your Albuquerque customers actually type, capture monsoon-season and summer-HVAC demand before it spikes, and build an asset you own instead of renting traffic from ads.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites built for the Albuquerque market, with Spanish-language reach, neighborhood-specific content, and conversion paths shaped for homeowners who need a contractor right now.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed, conversions, and the full Albuquerque market, in both English and Spanish, and migrate it carefully so you keep every ranking you have already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Albuquerque?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients pair a high-converting website with SEO and local SEO so they rank in both English and Spanish, capture seasonal demand, and own their leads instead of renting them from brokers." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand monsoon storm-damage calls, adobe and stucco work, desert HVAC that handles both extreme heat and cold, and the steady homeowner demand from the Kirtland Air Force Base and Sandia National Laboratories population." },
    { q: 'Why does the Albuquerque market need a different approach?', a: "Because it genuinely is different. Albuquerque is nearly half Hispanic, sits at 5,300 feet with both desert heat and real winters, has a traditional adobe construction stock that generic contractors mishandle, and takes a monsoon beating every July through September. Winning here means showing up in Spanish, being positioned for seasonal demand before it lands, and targeting neighborhoods on purpose, not dropping a city name into a template built for a flat, English-speaking suburb." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm the exact scope in your free audit before you commit to anything." },
    { q: 'Which Albuquerque areas do you serve?', a: "All of Albuquerque and the surrounding metro: Nob Hill, Old Town, the Heights, Rio Rancho, Corrales, Los Ranchos, Paradise Hills, Four Hills, Tijeras, the North and South Valley, and Bernalillo, with genuine neighborhood pages rather than one generic city page." },
    { q: 'Where should I start?', a: "Start with a free Albuquerque audit. We will look at your website, your rankings in English and Spanish, and your Map Pack presence across your service area, then tell you the one or two moves that will bring in the most work fastest, whether that is monsoon-season positioning, Spanish-language reach, or something else entirely. No pitch deck, just a plan." },
  ],
};
