// HOUSTON: per-metro x per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Houston's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// HOUSTON: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why winning Houston search is a different beast',
  body:
    "Greater Houston holds roughly 7.8 million people, ranks fifth-largest in the country, and stretches across nine counties and more than 9,000 square miles. That sheer size rewrites the rules. A roofer working Katy and a roofer working Pearland are barely in the same fight, yet both label themselves \"Houston,\" which is exactly why blanket city-wide targeting drains your budget. Two further realities drive demand here. One, the metro skews heavily Hispanic, near 44% of residents, with close to 30% speaking Spanish at home, so a real slice of your buyers research and read in Spanish. Two, this is Gulf-coast country: punishing heat and humidity keep HVAC running almost every month, while hurricanes and flooding (Harvey alone dropped around 60 inches of rain and flooded an estimated 154,000 homes) shove roofing, restoration, and AC demand straight up overnight. The contractors already ranking are the ones who capture that work.",
  pullQuote: 'In a metro this enormous, blanket "Houston" targeting burns cash. You win it one neighborhood at a time.',
  donut: {
    title: 'Who Houston is',
    value: 44,
    centerLabel: 'Hispanic',
    legend: [
      { label: 'Hispanic residents', pct: 44, kind: 'teal' },
      { label: 'Everyone else', pct: 56, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Hurricane season (Jun-Nov) stacked on top of relentless summer heat',
  seasonalDemand: [
    { m: 'J', v: 36 }, { m: 'F', v: 34 }, { m: 'M', v: 40 }, { m: 'A', v: 48 },
    { m: 'M', v: 62 }, { m: 'J', v: 78, peak: true }, { m: 'J', v: 90, peak: true },
    { m: 'A', v: 96, peak: true }, { m: 'S', v: 94, peak: true }, { m: 'O', v: 82, peak: true },
    { m: 'N', v: 60, peak: true }, { m: 'D', v: 42 },
  ],
  stats: [
    { value: '7.8M+', label: 'people across Greater Houston, the 5th-largest US metro' },
    { value: '~44%', label: 'of Houston is Hispanic, and ~30% speak Spanish at home', accent: true },
    { value: 'Jun-Nov', label: 'hurricane season, stacked on top of year-round heat' },
    { value: 'Top 3', label: 'Map Pack spots that grab most of the clicks' },
  ],
  neighborhoods: [
    'The Heights', 'Montrose', 'River Oaks', 'Midtown', 'Spring Branch',
    'Sharpstown', 'Alief', 'Bellaire', 'West University', 'Memorial',
    'Katy', 'Sugar Land', 'The Woodlands', 'Pearland', 'Cypress',
  ],
};

const AREAS = [
  'Houston', 'Katy', 'Sugar Land', 'The Woodlands', 'Pearland', 'Cypress',
  'Spring', 'Pasadena', 'Humble', 'Missouri City', 'League City', 'Conroe',
  'Tomball', 'Friendswood', 'Richmond',
];

const FOUNDER =
  "Let me level with you. I started OnwardCraft after watching one too many sharp contractors wire Angi and HomeAdvisor a few thousand a month for the privilege of fighting three competitors over the same lead. You cannot build anything that lasts on leads you rent. So this is the entire reason we exist: to get you ranking and converting for the jobs you actually want, in the parts of Houston you actually cover, with leads that belong to you and nobody else. No 12-month handcuffs either. If the work is not paying off, you cut us loose.";

const WHY = [
  {
    title: 'Trades are all we touch',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We live and breathe storm season, after-hours emergency calls, and insurance claims, so everything we build is shaped around the way Houston homeowners actually go looking for you.",
  },
  {
    title: 'We pull you off rented leads',
    body: "The point is a pipeline that is yours. Not one more monthly check cut to a lead broker for a homeowner three of your competitors already bought from the same screen.",
  },
  {
    title: 'We genuinely know Houston',
    body: "A nine-county sprawl far too big for a single generic page, a Hispanic-majority market where Spanish search is real revenue, and Gulf-coast heat and storm swings. We name Katy, Cypress, Sugar Land, and Pearland on purpose, the kind of targeting a national shop cannot fake by dropping a city name into a template.",
  },
  {
    title: 'No contracts, nothing hidden',
    body: "Prices on the page, reporting tied to leads, month-to-month once the first 90 days are up. If we are not earning the check, you walk. That keeps the heat exactly where it should sit: on us.",
  },
];

const PROOF = {
  heading: "We are new, so here is the honest math instead of a wall of logos",
  body:
    "Plenty of agencies will flash a grid of client logos at you. We are a young, founder-led shop, so we are not going to fake a track record we have not built yet. What we can hand you is the reasoning behind why this works, pulled straight from Google's and the industry's own research on how people search locally.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here is a rough picture, plainly labelled as a projection and not a result we are claiming. Say a Houston contractor pulls around 1,800 local \"near me\" impressions a month in their slice of this giant metro. Climbing from page-two invisibility into the top three is the gap between a trickle of calls and a calendar that is fully booked, and after a hurricane that gap widens even further. In your free audit we model the real figures for your business: your rankings, your search volume, and a straight 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) plus an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Houston', state: 'Texas', stateAbbr: 'TX', metro: 'Greater Houston',
  heroProof: ['Built for the trades', 'Storm-season ready', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const houstonLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'houston', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Houston Local SEO Company | Win the Map Pack',
    metaDescription:
      'When Houston searches your service, three businesses show up on the map. We get you into those three so the call lands with you, not a competitor.',
    eyebrow: 'Local SEO · Greater Houston',
    h1: 'When Houston searches for what you do, be the first name they find',
    h2Exact: 'Houston Local SEO Company',
    heroSubhead:
      "Google pins three businesses to the map when a homeowner searches \"near me.\" Everyone underneath them basically does not exist. We get you into that top three for the neighborhoods you really serve, so the call rings your phone instead of whoever grabbed the first spot, and so you are already there when the next storm lights up every phone in the city.",
    primaryCta: 'Get my free Houston audit',
    intro:
      "Houston local SEO boils down to a single question: when a homeowner in Katy or Pearland types your service plus \"near me,\" are you one of the three businesses Google sticks on the map? Most people tap one of those three and never scroll a pixel further. This metro is massive, nine counties and 7.8 million people, so ranking happens neighborhood by neighborhood, never city-wide. Becoming one of those three in the areas you actually work is the entire game. Here is how you get there.",
    aioQuestion: 'How do Houston businesses rank higher in local search?',
    aioAnswer:
      "You rank by nailing four things: a Google Business Profile tuned to the exact services and neighborhoods you want, name-address-phone listings that match across the web, a steady drip of real reviews, and local content tied to genuine Houston areas. Because the metro is enormous and Gulf-coast storm-prone, the winners target specific suburbs, answer fast, and are already ranking when hurricane-season and summer-heat demand erupts.",
    problemHeading: "If your phone has gone quiet, it is usually one of these three",
    painPoints: [
      { title: 'Competitors own the three map spots', body: "Search your own service plus \"near me\" right now. Those three businesses Google pins to the map pull the lion's share of the clicks. If your name is not among them, the quality of your work barely registers, because most people never lay eyes on you. Cracking into that top three is almost always the single highest-return move a Houston contractor can make." },
      { title: "You are paying for leads you never keep", body: "Angi, Thumbtack, and HomeAdvisor sell the same Houston homeowner to four contractors, then charge every one of you to scrap over them. It is a hamster wheel. Local SEO builds the reverse: a lead finds you, dials you, and no rival got the same name. Month by month you stop renting and start owning your pipeline." },
      { title: "You are chasing all of Houston instead of your turf", body: "Houston sprawls over more than 9,000 square miles. A site that mumbles \"Houston\" competes with everybody and ranks for nobody. The contractors who win stake out their true service area, Katy, Cypress, Sugar Land, Pearland, and dominate there. Skip the neighborhoods where you actually work and you stay invisible in every one of them." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The single biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows precisely which Houston searches belong to you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to line up everywhere Google checks. We correct the listings that contradict each other and build the ones you are missing." },
      { name: 'Reviews that keep arriving', desc: "A simple system that converts finished jobs into a reliable flow of reviews. It lifts your ranking and gives homeowners the nudge to call." },
      { name: 'Neighborhood pages', desc: "Real pages for Katy, Cypress, Sugar Land, Pearland, The Heights, and the rest, so you rank for the exact suburb someone is searching rather than a vague \"Houston.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing beneath the surface that lets everything above it rank." },
      { name: 'Local link building', desc: "Mentions and links from Houston sources Google respects: local press, trade associations, partners. In a market this fierce, this is often what splits page one from page two." },
      { name: 'Bilingual & Spanish search', desc: "Around 44% of Houston is Hispanic and roughly 30% speak Spanish at home. We help you surface for the Spanish-language \"near me\" searches your competitors quietly skip.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now kicks off inside AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find where you truly rank today across each of your service areas and nail down which competitors are beating you in the Map Pack and exactly why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP go first, because they move quickest. You usually see early lift here inside a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine switch on. These compound week over week, which is precisely why local SEO pays off more the sooner you begin." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages spanning Harris, Fort Bend, and Montgomery counties, plus the on-page work that backs them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go claim the next suburb." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For contractors fighting across several Houston areas at once.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors out to own the map across Greater Houston.', features: ['Everything in Local Growth', 'Local link building', 'Bilingual / Spanish search targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Houston?', a: "Most Houston engagements run between $750 and $2,500 a month, set by how many neighborhoods and keywords you are chasing. Our tiers sit right above this. No hidden fees, no long contract, and we lock in the exact scope during your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move within a few weeks. The competitive Houston keywords usually need 90 to 180 days of steady work, because reviews and citations build up over time. Anyone promising you page one in 30 days across a metro this big and crowded is selling you a story." },
      { q: 'What makes Houston local SEO different?', a: "Scale and storms. This is a nine-county, 9,000-square-mile metro, so ranking happens suburb by suburb and a generic \"Houston\" push goes nowhere. And it is the Gulf coast, so trade demand swings hard with hurricane season and year-round heat. Your ranking has to be dialed into your real service area and locked in before the storm arrives, not after." },
      { q: 'Should I do local SEO in Spanish for Houston?', a: "Frequently, yes. Around 44% of Houston is Hispanic and roughly 30% of residents speak Spanish at home, so a real chunk of buyers search and read in Spanish. If your trade serves those neighborhoods, think Alief, Sharpstown, Pasadena, Spring Branch, then Spanish-language profile content and pages can win you searches your English-only competitors never appear in." },
      { q: 'Which areas do you cover?', a: "All of Greater Houston and the suburbs ringing it: The Heights, Montrose, Spring Branch, Bellaire, plus Katy, Sugar Land, The Woodlands, Pearland, Cypress, Spring, and more. We build genuine neighborhood pages rather than one catch-all Houston page, because that is what actually ranks for \"[service] [suburb]\" searches across a metro this large." },
      { q: 'Do you work with contractors specifically?', a: "It is basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand after-hours emergency calls, storm-driven surges, and insurance jobs, and we build your local SEO squarely around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More \"near me\" research now starts inside AI instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It is fast becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that is roughly how long local SEO needs to show real movement. After that it is month-to-month. If we are not delivering, you walk, and the accountability stays squarely on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build the rankings, the Google profile, and the review base that send leads straight to you. Over time you lean on the brokers less and less, because the work is coming to you directly." },
      { q: "What is in the free audit?", a: "A clear read on where you rank today across your service areas, what your Map Pack competitors are doing to outrank you, the fixes that will move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'houston', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Houston SEO Company | Rank Higher, Get Leads',
    metaDescription:
      'Houston SEO that ranks contractors on Google and brings leads you own. Revenue-tied reporting, no lock-in, built for storm-season and heat demand.',
    eyebrow: 'SEO Services · Greater Houston',
    h1: 'Get your Houston business to the top of Google and keep it there',
    h2Exact: 'Houston SEO Company',
    heroSubhead:
      "Ads die the second you stop paying. SEO does the opposite: rank once for what your Houston customers search and the leads keep coming. We build that ranking and tie every report back to real calls and booked jobs.",
    primaryCta: 'Get my free Houston SEO audit',
    intro:
      "Houston SEO comes down to one question: when someone searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords across a metro of 7.8 million people, a market that runs hot and storm-prone every month of the year, and we measure the work in leads, not vanity traffic.",
    aioQuestion: 'How do Houston businesses rank higher on Google?',
    aioAnswer:
      "They rank by repairing the technical foundation of the site, tuning each page for the precise terms customers search, publishing genuinely useful local content for specific suburbs, and earning links from trusted Houston sources. In a metro this large and competitive, targeting individual service areas and ranking for storm-driven and year-round HVAC terms are two of the quickest ways to pull ahead.",
    problemHeading: "Three reasons your Houston site is not bringing in work",
    painPoints: [
      { title: "You are stranded on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down even that one. If you are not among the top handful of results for what you sell, your site is effectively invisible, however polished it looks." },
      { title: "You are renting traffic from Google Ads", body: "Ads can work, but the instant your card stops, the leads stop cold. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost." },
      { title: "You are missing the demand that matters", body: "Houston demand runs all year. Brutal summer heat keeps HVAC slammed, and hurricane season throws roofing and restoration vertical overnight. The contractors ranking for those terms ahead of time catch the spike. If your SEO ignores heat-driven and storm-driven searches, you are handing away your busiest months." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google demands before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned for the exact terms your Houston customers search: titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers ask, earn links, and pull in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real Houston and industry sources. In a competitive market this size, links are frequently what separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across your suburbs right alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads, not just rankings and traffic, so you always know what your SEO is genuinely worth." },
      { name: 'Storm & seasonal SEO', desc: "We rank you for the hurricane-driven and year-round heat searches that power Houston's busiest stretches, so you are visible before demand erupts, not scrambling after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, right where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Houston leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile, the foundation everything else needs in order to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus fresh local content, including the seasonal and storm-driven terms that matter so much here." },
      { name: 'Build authority', desc: "Links and citations from trusted Houston and industry sources to push your competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what is working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Houston SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and suburbs.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For contractors who want to own Houston search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Storm & seasonal SEO', 'eCommerce / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Houston?', a: "Most Houston SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Houston?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, quicker on low-competition terms and slower on the toughest Houston keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most contractors do best running SEO as the long-term engine and ads for short-term spikes." },
      { q: 'Should my Houston SEO target hurricane season and summer heat?', a: "Yes. Houston demand runs all year: summer heat keeps HVAC searches high, and when a storm lands, roofing and restoration searches jump overnight. Ranking takes months to build, so you have to be in place before the season rather than chasing it afterward. We optimize for those heat-driven and storm-driven terms ahead of time so your busiest months land on you." },
      { q: 'Can you do SEO for the Spanish-speaking Houston market?', a: "Yes, and in Houston it is well worth weighing. Around 44% of the metro is Hispanic and roughly 30% speak Spanish at home, so Spanish-language pages and content can rank for searches your English-only competitors never appear in. We will tell you in the audit whether it fits your trade and service area." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it is month-to-month. If we are not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which areas around Houston do you cover?', a: "All of Greater Houston and the surrounding suburbs: Katy, Sugar Land, The Woodlands, Pearland, Cypress, Spring, Pasadena, Humble, and more, with genuine local pages rather than one generic Houston page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building the rankings and Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads." },
      { q: "What is in the free SEO audit?", a: "Where you rank today, what your competitors are doing to outrank you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'houston', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Houston Web Design Company | OnwardCraft',
    metaDescription:
      'Houston web design that turns visitors into booked jobs: fast, mobile-first sites built for contractors and for heat and storm-season demand.',
    eyebrow: 'Web Design · Greater Houston',
    h1: 'Houston web design that turns visitors into booked jobs',
    h2Exact: 'Houston Web Design Company',
    heroSubhead:
      "A pretty website that never rings the phone is just a brochure. We build Houston contractors fast, mobile-first sites engineered to turn visitors into booked work, and built to hold up when a heat wave or hurricane floods your phone with calls.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Houston contractor websites bleed leads quietly: slow on a phone, call button buried, no clear offer in sight. Web design done right fixes every bit of that. We build sites that load fast, look like the professional you are, and turn Katy-to-Pearland visitors into booked jobs, sites that do not fold the moment a storm or a 100-degree week sends your traffic surging.",
    aioQuestion: 'What makes a good contractor website in Houston?',
    aioAnswer:
      "A strong Houston contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and is built to absorb traffic spikes during heat waves and storm season. Because most Houston searches happen on mobile, mobile speed and an obvious next step are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site is not bringing in work",
    painPoints: [
      { title: "It is a brochure, not a lead engine", body: "Plenty of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next guy. We design every page around a single job: turning a visitor into a booked lead." },
      { title: "It is too slow on a phone", body: "Most of your Houston visitors are on mobile, and they bounce if your site takes more than a couple of seconds to load. Slow sites rank worse, too. We build fast, so you keep both the visitor and the ranking." },
      { title: "It ignores half your market", body: "Around 44% of Houston is Hispanic and a large share of homeowners search and read in Spanish. Most contractor sites are English-only, so they never speak to those buyers at all. We can build the right pages and offers to reach them, an edge in this metro that is hard to pass up." },
    ],
    servicesHeading: "What goes into an OnwardCraft Houston website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your service area, and the jobs you actually want to book." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that is where nearly all your Houston traffic lives. Fast, thumb-friendly, easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page carries a next step." },
      { name: 'Copy that sells', desc: "Words that speak to anxious homeowners and book the job, not filler that reads exactly like everyone else's." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank: clean structure, schema, fast load, and neighborhood-ready pages for your suburbs." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both your conversions and your rankings." },
      { name: 'Bilingual-ready build', desc: "Optional Spanish pages and offers to reach the ~44% of Houston that is Hispanic, an audience most competitor sites never speak to.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your service area, your best jobs, and your competitors, then map the site around booking more of the work you actually want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert. You see it and shape it before a single line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what is actually converting." },
    ],
    pricing: {
      heading: 'Transparent Houston web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors juggling several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Bilingual-ready build'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Houston?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, set by page count and integrations. Our tiers are above: fixed price, no surprises, and you own the finished site outright." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build runs 4 to 8. We hand you a firm timeline up front and keep you posted through each stage." },
      { q: 'Will my site handle a storm-season or heat-wave traffic spike?', a: "Yes, and in Houston that matters more than most places. When a hurricane lands or a brutal heat wave knocks out AC across the city, contractor sites take a flood of traffic, and the slow ones drop leads right when demand peaks. We build fast and keep the call button obvious, so your site converts under load instead of buckling." },
      { q: 'Can you build my site in Spanish too?', a: "Yes. Around 44% of Houston is Hispanic and many homeowners search and read in Spanish, so a bilingual site can reach buyers your English-only competitors never speak to. We will recommend whether it is worth it for your trade and where your jobs come from." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platform you cannot walk away from." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where nearly all your Houston traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage, usually WordPress or Webflow. We will recommend the right fit in your free consult and walk you through the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month, so you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Houston site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'houston', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Houston Website Redesign | More Leads, No Loss',
    metaDescription:
      'Redesign your Houston website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs and hold up in storm season.',
    eyebrow: 'Website Redesign · Greater Houston',
    h1: 'Redesign your Houston website without losing your rankings',
    h2Exact: 'Houston Website Redesign Company',
    heroSubhead:
      "An outdated site quietly costs you jobs every week: slow, clumsy on a phone, easy to scroll past. We redesign Houston contractor sites to convert more and load faster, and we migrate with care so you keep every bit of ranking you have already earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad directions: the site looks sharper but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Houston contractor sites for speed and conversions, build them to absorb heat-wave and storm-season traffic, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign holds your rankings and even improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Houston site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "On a high-ticket job, homeowners size you up by your site in seconds. An old, cluttered design quietly nudges them toward a competitor who looks more established, even when your work runs circles around theirs." },
      { title: "It is slow and clumsy on a phone", body: "If your site is clunky or slow on mobile, you are losing the majority of your Houston visitors before they ever reach your offer. A redesign built mobile-first wins them back." },
      { title: "It cannot keep up when demand surges", body: "Traffic that never turns into calls is wasted, and an old site that crawls under a heat wave or storm-season surge drops leads at the exact moment they are worth the most. We rebuild for conversions and for the days your phone should not stop ringing." },
    ],
    servicesHeading: "What goes into an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what is costing you leads and rankings today, so the redesign fixes real problems instead of just swapping colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you have already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, smarter call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals, better for your conversions and your rankings alike." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where nearly all your Houston traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the price of your jobs." },
      { name: 'Bilingual-ready rebuild', desc: "Optional Spanish pages so the redesigned site reaches the ~44% of Houston that is Hispanic, an audience most competitor sites still overlook.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search keeps shifting toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what is losing you leads and rankings, then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and watch closely so rankings hold and climb, not drop." },
      { name: 'Optimize', desc: "Post-launch tuning based on what is converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Houston redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Bilingual-ready rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Houston?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, set by size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it is done carefully, and that is exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually lifts them." },
      { q: 'How long does a redesign take?', a: "A focused redesign runs about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is a pain to update, is not bringing in leads, or buckles when storm-season traffic surges, it is costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and sharpen your existing content, preserve what is ranking, and handle the technical migration so nothing important slips through the cracks." },
      { q: 'Will the new site handle storm-season and heat-wave traffic?', a: "Yes, and in Houston that is a real consideration. When a hurricane lands or a heat wave knocks out AC across the city, contractor sites take a surge of traffic, and the slow ones drop leads. We rebuild for speed and keep the call to action obvious so the site converts when demand peaks." },
      { q: 'Can you add Spanish pages in the redesign?', a: "Yes. With around 44% of Houston Hispanic and many homeowners searching in Spanish, adding bilingual pages during the rebuild can reach buyers your English-only site misses. We will advise whether it fits your trade and service area." },
      { q: 'Do I own the redesigned site?', a: "Completely: the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What is in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const houstonCity = {
  citySlug: 'houston', city: 'Houston', state: 'Texas', stateAbbr: 'TX', metro: 'Greater Houston',

  titleTag: 'Houston Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Houston contractors. Get found, get booked, and own your leads instead of renting them, all built for storm-season demand.',

  eyebrow: 'Houston · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Houston contractors found and booked',
  h2Exact: 'Houston Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Greater Houston's enormous, storm-driven market. One team to get you ranking, converting, and off the rented-lead treadmill for good.",
  heroProof: ['Built for the trades', 'Storm-season ready', 'No lock-in contracts'],
  primaryCta: 'Get my free Houston audit',

  intro:
    "If you run a contracting business in Houston, you are fighting for attention across a nine-county, 7.8-million-person metro: too big for one generic page and packed wall to wall with competition. Winning here takes three things working in concert: a site that converts, SEO that ranks you for what people search, and local SEO that drops you into the Map Pack in the suburbs you actually serve, all locked in before the next storm sends demand through the roof. Here is how we help Houston contractors do exactly that.",
  aioQuestion: 'How do Houston contractors get more leads online?',
  aioAnswer:
    "Houston contractors get more leads by pairing a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack in their specific suburbs. Because Houston is huge and demand spikes hard during hurricane season and summer heat, the contractors who look established and are already ranking before the spike win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when your Houston suburb searches \"near me.\" The single highest-return move for most local businesses, and how you catch storm-season demand.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search, build an asset you own instead of renting traffic from ads, and measure it in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs, and to stay fast when heat and storm season flood your phone, never brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it carefully so you keep every bit of ranking you have already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Houston?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients pair a high-converting website with SEO and local SEO so they rank, convert, and own their leads, and so they are ready when storm season hits." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors, so we understand emergency calls, storm-driven demand, and insurance work." },
    { q: 'Why does storm season matter for my marketing?', a: "When a hurricane like Harvey hits Houston, demand for roofing, restoration, and HVAC spikes overnight and the backlog can stretch for a year. Ranking takes months to build, so the contractors already visible before the storm take that work. We get you in place ahead of season." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Houston areas do you serve?', a: "All of Greater Houston and the surrounding suburbs: The Heights, Montrose, Spring Branch, Bellaire, plus Katy, Sugar Land, The Woodlands, Pearland, Cypress, Spring, and more." },
    { q: 'Where should I start?', a: "Start with a free Houston audit. We will look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};
