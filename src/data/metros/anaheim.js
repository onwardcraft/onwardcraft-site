// ANAHEIM: per-metro x per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Anaheim's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// ANAHEIM: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'What it really takes to get found in Anaheim',
  body:
    "Anaheim is the biggest city in Orange County and the doorway to one of the wealthiest stretches of homeowners in America. The headlines belong to Disneyland, the Convention Center, Angel Stadium, and the Honda Center, but the work belongs to a packed, exacting residential market where people guard property values that run high. Two forces decide who gets the call. First, your customer is standing in their driveway typing your trade plus \"near me\" into a phone, and an OC homeowner expects the contractor on screen to look every bit as sharp as the bill they are about to pay. Second, Anaheim runs roughly 54% Hispanic, with Little Saigon's large Vietnamese community right next door, yet nearly every agency chasing the top three Map Pack spots writes off Spanish-language search completely. That gap is yours to take. Layer on canyon and foothill wildfire exposure across Anaheim Hills and Yorba Linda, Santa Ana wind events, and a stock of aging mid-century homes, and the pattern is simple: the contractors who show up first are the ones who stay booked.",
  pullQuote: 'When the market is this affluent and this bilingual, the contractor who ranks in both languages owns a lane nobody else has even pulled into.',
  donut: {
    title: 'Who Anaheim is',
    value: 54,
    centerLabel: 'Hispanic',
    legend: [
      { label: 'Hispanic', pct: 54, kind: 'teal' },
      { label: 'Other', pct: 46, kind: 'grey' },
    ],
  },
  seasonTitle: 'When the phone should be ringing hardest',
  seasonCaption: 'Wildfire/Santa Ana winds (Oct-Dec) and HVAC heat (Jun-Sep)',
  seasonalDemand: [
    { m: 'J', v: 36 }, { m: 'F', v: 34 }, { m: 'M', v: 40 }, { m: 'A', v: 48 },
    { m: 'M', v: 60, peak: true }, { m: 'J', v: 76, peak: true }, { m: 'J', v: 84, peak: true },
    { m: 'A', v: 82, peak: true }, { m: 'S', v: 88, peak: true }, { m: 'O', v: 96, peak: true },
    { m: 'N', v: 92, peak: true }, { m: 'D', v: 70, peak: true },
  ],
  stats: [
    { value: '#1', label: 'largest city in Orange County, anchoring a high-value home market' },
    { value: '~54%', label: 'of Anaheim is Hispanic, so Spanish-language search sits wide open' },
    { value: 'Oct-Dec', label: 'Santa Ana winds and wildfire season, when demand surges', accent: true },
    { value: 'Top 3', label: 'Map Pack spots that swallow most of the clicks' },
  ],
  neighborhoods: [
    'Anaheim Hills', 'Anaheim Colony Historic District', 'Platinum Triangle', 'West Anaheim',
    'Yorba Linda', 'Orange', 'Fullerton', 'Garden Grove', 'Placentia', 'Brea',
    'Villa Park', 'Buena Park', 'Stanton', 'Cypress', 'La Palma',
  ],
};

const AREAS = [
  'Anaheim', 'Anaheim Hills', 'Yorba Linda', 'Orange', 'Fullerton', 'Garden Grove',
  'Placentia', 'Brea', 'Villa Park', 'Buena Park', 'Stanton', 'Cypress',
  'La Palma', 'Westminster', 'Santa Ana',
];

const FOUNDER =
  "Here is the honest reason OnwardCraft exists: I got tired of watching solid contractors wire Angi and HomeAdvisor a few grand a month for the privilege of fighting three rivals over the same homeowner. Rented leads are not a business, they are a tax. So our entire job is to get you ranking and converting for the work you want, in the Anaheim neighborhoods you actually drive to, with leads that belong to you and nobody else. No 12-month handcuffs. The day it stops working, you stop paying us.";

const WHY = [
  {
    title: 'We work the trades and nothing else',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We know what a fire-season surge and a 2 a.m. emergency call do to your week, so every page we build mirrors how your Anaheim customers really search and decide.",
  },
  {
    title: 'We cut the cord on rented leads',
    body: "The point is a pipeline with your name on it, not one more monthly invoice to a broker reselling the same Orange County homeowner to three of your competitors at once.",
  },
  {
    title: 'We actually know this market',
    body: "Affluent, high-standards OC homeowners. A city that runs over half Hispanic. Real targeting from the canyons of Anaheim Hills to the streets of West Anaheim. None of which a national agency can fake by find-and-replacing a city name in a template.",
  },
  {
    title: 'No contracts, no fog',
    body: "Prices you can read, reporting tied to leads, month-to-month once the first 90 days are done. If we are not earning the spend, you walk. That keeps the heat exactly where it should be: on us.",
  },
];

const PROOF = {
  heading: "We are new, so here is the honest math instead of a wall of logos",
  body:
    "Plenty of agencies will flash a grid of client logos at you. We are a young, founder-led shop and we are not going to fake a track record we have not earned yet. What we will hand you instead is the why behind all of this, pulled straight from Google's and the industry's own research on how people search locally.",
  stats: [
    { value: '46%', label: 'of Google searches carry local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that same day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Picture this, clearly flagged as a projection and not a result we are claiming: an Anaheim contractor pulls roughly 1,500 local \"near me\" impressions a month. Climbing out of page-two invisibility into the top three is the gap between a few stray calls and a calendar that fills itself, and in a market this affluent each of those jobs is worth more per call than almost anywhere in the country. In your free audit we model the actual figures for your business: your rankings, your search volume, and a straight 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) plus one illustrative projection. None of them are past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Anaheim', state: 'California', stateAbbr: 'CA', metro: 'Anaheim-Orange County',
  heroProof: ['Built for the trades', 'Bilingual-ready', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const anaheimLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'anaheim', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Anaheim Local SEO Company | Win the Map Pack',
    metaDescription:
      'When Anaheim searches your trade, three businesses pin to the map. We put you in those three so the call lands with you, in English and Spanish.',
    eyebrow: 'Local SEO · Anaheim-Orange County',
    h1: 'When Anaheim searches for your trade, be the first name on the map',
    h2Exact: 'Anaheim Local SEO Company',
    heroSubhead:
      "Google drops three businesses on the map for a \"near me\" search, and everyone underneath them might as well not exist. We get you into that top three so the call rings your phone instead of whoever happened to rank first, in English and in Spanish, where most of your competitors have not even shown up.",
    primaryCta: 'Get my free Anaheim audit',
    intro:
      "Anaheim local SEO boils down to a single question: when a homeowner in Anaheim Hills or West Anaheim types your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll an inch further. This is the largest city in Orange County, stacked with affluent homeowners in a market that runs over half Hispanic, so landing in those three spots, in both languages, is the entire game. Here is exactly how you get there.",
    aioQuestion: 'How do Anaheim businesses rank higher in local search?',
    aioAnswer:
      "You win local search by nailing four things: a Google Business Profile tuned to the exact services and neighborhoods you want, name, address, and phone details that match everywhere on the web, a steady drip of real reviews, and local content tied to genuine Orange County neighborhoods. Because Anaheim is affluent and roughly 54% Hispanic, the businesses that pull ahead look polished, reply fast, and scoop up the Spanish-language searches their competitors leave on the table.",
    problemHeading: "If your phone is too quiet, it is usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three map spots', body: "Type your own service plus \"near me\" right now. The three businesses Google pins to the map collect the lion's share of the clicks, full stop. If your name is not up there, the quality of your work barely registers because most people never lay eyes on you. For an Anaheim contractor, breaking into that top three is usually the single move with the biggest payoff." },
      { title: "You are paying for leads that were never yours", body: "Angi, Thumbtack, and HomeAdvisor sell the same Orange County homeowner to four contractors, then charge each of you to brawl over the scraps. That is a treadmill, not a pipeline. Local SEO builds the opposite: the homeowner finds you, calls you, and no rival got a copy. Slowly you stop renting and start owning." },
      { title: "Half your market cannot find you", body: "Anaheim runs about 54% Hispanic, with a large Vietnamese community right next door in Little Saigon, and almost none of your competitors rank in Spanish. That is open road. We help you surface for the searches your rivals do not even realize they are forfeiting, putting you in front of homeowners nobody else is reaching." },
    ],
    servicesHeading: 'What it actually takes to get you ranking',
    services: [
      { name: 'Google Business Profile', desc: "The heaviest lever in the Map Pack. We sharpen your categories, services, service area, photos, and posts so Google knows precisely which Anaheim searches you deserve to win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to agree everywhere Google checks. We repair the listings that contradict each other and build the ones you are missing." },
      { name: 'Reviews that keep arriving', desc: "A simple engine that converts finished jobs into a steady flow of fresh reviews. It lifts your ranking and gives homeowners the nudge to actually call." },
      { name: 'Neighborhood pages', desc: "Real pages for Anaheim Hills, Yorba Linda, West Anaheim, Orange, Fullerton, and the rest, so you rank for the neighborhood someone is truly searching instead of a flat \"Anaheim.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The wiring under the floorboards that lets everything above it rank." },
      { name: 'Local link building', desc: "Mentions and links from Orange County sources Google already trusts: local press, associations, partners. Around here that is often what divides page one from page two." },
      { name: 'Bilingual local SEO', desc: "We get you ranking for Spanish-language searches across Anaheim's majority-Hispanic market, a lane almost none of your competitors have even merged into.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" homework now kicks off in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you by name.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We map where you genuinely rank today across every service area and identify which competitors are beating you in the Map Pack and the specific reasons why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP come first because they move quickest. You usually feel the first lift here inside a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine switch on. These stack week over week, which is the whole reason local SEO rewards starting today over starting next quarter." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Orange County, in both languages where it pays off, backed by the on-page work that holds them up." },
      { name: 'Report and expand', desc: "Plain-English reporting pegged to calls and leads, never vanity rankings. Then we go claim the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually read',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation locked in.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Orange County areas.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors set on owning the map across Orange County.', features: ['Everything in Local Growth', 'Local link building', 'Bilingual search targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Anaheim?', a: "Most Anaheim engagements land between $750 and $2,500 a month, set by how many neighborhoods and keywords you are chasing. The tiers are right above this. No hidden fees, no long contract, and we lock the exact scope in your free audit before you spend a dollar." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move within a few weeks. The competitive Anaheim keywords usually want 90 to 180 days of steady work, because reviews and citations compound rather than flip overnight. Anyone promising page one in 30 days in an Orange County market this crowded is selling you a fantasy." },
      { q: 'What makes Anaheim local SEO different?', a: "Two things. It is the largest city in Orange County and one of the most affluent home markets in the country, so homeowners hold high standards and trust signals like reviews and a polished profile carry real weight. And it runs roughly 54% Hispanic, which leaves Spanish-language search wide open because most of your competitors ignore it outright." },
      { q: 'Do you handle Spanish-language local SEO?', a: "Yes, and it is one of the sharpest edges in this market. Anaheim is about 54% Hispanic, with a large Vietnamese community nearby in Little Saigon, and almost nobody is ranking in Spanish. We get you showing up for those searches, which lands you in front of homeowners your competitors are not even attempting to reach." },
      { q: 'Which areas do you cover?', a: "All of Anaheim and the surrounding Orange County areas: Anaheim Hills, Yorba Linda, West Anaheim, Orange, Fullerton, Placentia, Brea, Garden Grove, and more. We build real neighborhood pages rather than one generic Anaheim page, because that is what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It is very nearly all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand emergency calls, wildfire-driven demand, and insurance jobs, and we shape your local SEO around exactly those." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research now starts inside AI rather than classic search. We structure your content and schema so those engines can read, trust, and cite your business. It is fast becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an opening 90 days because that is roughly how long local SEO needs to show real movement. After that it is month-to-month. If we are not delivering, you leave, and the accountability stays squarely on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never get to keep. We build rankings, a Google profile, and a review base that route leads straight to you. Over time you lean on the brokers less because the work is already coming to you directly." },
      { q: "What is in the free audit?", a: "A clear read on where you rank today across your service areas, what your Map Pack competitors are doing to outrank you, the fixes that will move you fastest, and a realistic 90-to-180-day plan with the numbers run for your specific business. No pitch deck, just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'anaheim', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Anaheim SEO Company | OnwardCraft',
    metaDescription:
      'Anaheim SEO that ranks contractors on Google and delivers leads you own. Revenue-tied reporting, no lock-in, built around Orange County seasonal demand.',
    eyebrow: 'SEO Services · Anaheim-Orange County',
    h1: 'Get your Anaheim business to the top of Google and keep it parked there',
    h2Exact: 'Anaheim SEO Company',
    heroSubhead:
      "Ads die the moment your card stops. SEO does the reverse: rank once for what your Anaheim customers search and the leads keep showing up. We build that ranking and tie every report to real calls and booked jobs, not vanity traffic.",
    primaryCta: 'Get my free Anaheim SEO audit',
    intro:
      "Anaheim SEO comes down to one fork in the road: when someone searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords inside an affluent, competitive Orange County market, and we measure the work in leads rather than traffic that never calls.",
    aioQuestion: 'How do Anaheim businesses rank higher on Google?',
    aioAnswer:
      "They rank by repairing the technical foundation of the site, tuning each page to the exact terms customers type, publishing genuinely useful local content, and earning links from trusted Orange County sources. In an affluent, competitive market that runs over half Hispanic, ranking in both English and Spanish and for wildfire- and heat-driven seasonal terms are two of the fastest ways to pull ahead of the pack.",
    problemHeading: "Three reasons your Anaheim site is not bringing in work",
    painPoints: [
      { title: "You are stranded on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll deep into it. If you are not among the top handful of results for what you sell, your site is effectively invisible, no matter how slick it looks." },
      { title: "You are renting traffic from Google Ads", body: "Ads can work, but the second your card stops the leads stop with it. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the cost per lead." },
      { title: "You are missing the demand that actually matters", body: "Orange County demand swings hard with the calendar: Santa Ana winds and wildfire risk in the fall, HVAC heat through the summer, and the contractors who rank for those terms ahead of time catch the wave. If your SEO skips fire-driven, seasonal, and Spanish-language searches, you are handing away your busiest months." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned to the exact terms your Anaheim customers type: titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and pull in leads while you sleep." },
      { name: 'Link building', desc: "Authority from real Orange County and industry sources. In a market this competitive, links are frequently what separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you take the \"near me\" searches right alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads, not just rankings and traffic, so you always know what your SEO is genuinely worth." },
      { name: 'Bilingual & seasonal SEO', desc: "We rank you in Spanish across Anaheim's majority-Hispanic market and for the wildfire- and heat-driven searches behind Orange County's busiest months, ahead of the spike rather than after it.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, since a growing share of search now begins there.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then draw a roadmap around the keywords most likely to drive real Anaheim leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile: the foundation everything else needs before it can rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus fresh local content, including the seasonal, fire-driven, and Spanish-language terms that matter here." },
      { name: 'Build authority', desc: "Links and citations from trusted Orange County and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we lean into what is working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Anaheim SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that intend to own Orange County search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Bilingual & seasonal SEO', 'eCommerce / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Anaheim?', a: "Most Anaheim SEO engagements run $900 to $3,000 a month, set by how competitive your keywords are and how much content and link work you need. The tiers are above, with no hidden fees and no long contract to sign." },
      { q: 'How long does SEO take to work in Anaheim?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on low-competition terms and slower on the most competitive Orange County keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that vanishes the moment you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most contractors do best running SEO as the long-term engine with ads layered on for short-term spikes." },
      { q: 'Should my Anaheim SEO target Spanish-language search?', a: "Yes. Anaheim is roughly 54% Hispanic and almost none of your competitors rank in Spanish, so it is one of the cheapest ways to land in front of homeowners nobody else is reaching. We build bilingual content and structure so you capture searches your rivals never even see." },
      { q: 'What is included in your SEO service?', a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. Higher tiers add bilingual, seasonal, and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an opening 90 days because SEO needs that runway to show real movement, then it shifts to month-to-month. If we are not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a growing slice of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search results." },
      { q: 'Which areas around Anaheim do you cover?', a: "All of Anaheim and the surrounding Orange County areas: Anaheim Hills, Yorba Linda, Orange, Fullerton, Placentia, Brea, Garden Grove, Westminster, and more, with genuine local pages rather than one generic Anaheim page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads straight to you. The more you own your search visibility, the less you depend on paying brokers for leads they already sold to three competitors." },
      { q: 'What is in the free SEO audit?', a: "Where you rank today, what your competitors are doing to outrank you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'anaheim', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Anaheim Web Design Company | OnwardCraft',
    metaDescription:
      'Anaheim web design that turns visitors into booked jobs: fast, mobile-first, bilingual-ready sites built for Orange County contractors and OC standards.',
    eyebrow: 'Web Design · Anaheim-Orange County',
    h1: 'Anaheim web design that turns visitors into booked jobs',
    h2Exact: 'Anaheim Web Design Company',
    heroSubhead:
      "A pretty website that never rings the phone is just a brochure. We build Anaheim contractors fast, mobile-first sites engineered to turn visitors into booked work, polished enough for Orange County's standards and ready to convert in English and Spanish.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Anaheim contractor websites bleed leads quietly: sluggish on a phone, a call button buried three scrolls down, no clear offer, English-only in a market that runs over half Hispanic. Web design done right shuts every one of those leaks. We build sites that load fast, look as polished as affluent Orange County homeowners expect, and turn Anaheim-Hills-to-West-Anaheim visitors into booked jobs.",
    aioQuestion: 'What makes a good contractor website in Anaheim?',
    aioAnswer:
      "A good Anaheim contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and looks polished enough for Orange County's affluent, high-standards homeowners. Because Anaheim runs over half Hispanic and most searches happen on mobile, a bilingual-ready, fast, mobile-first build is what separates a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site is not bringing in work",
    painPoints: [
      { title: "It is a brochure, not a lead engine", body: "Plenty of contractor sites simply list services and stop there. No clear offer, no obvious next step, no reason to call you over the next guy. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It is too slow on a phone", body: "Most of your Anaheim visitors are on mobile, and they bounce if the site takes more than a few seconds to appear. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking both." },
      { title: "It does not look the part, or speak the language", body: "In an affluent market like Orange County, homeowners protecting a big investment size you up by your site within seconds, and a dated look quietly waves them toward someone else. Worse, an English-only site shrugs off the 54% of Anaheim that is Hispanic. We build polished, bilingual-ready sites that earn trust across the entire market." },
    ],
    servicesHeading: "What goes into an OnwardCraft Anaheim website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site shaped around your trade, your service area, and the jobs you actually want to win." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that is where nearly all of your Anaheim traffic lives. Fast, thumb-friendly, easy to call from in one tap." },
      { name: 'Conversion-focused UX', desc: "Clear offers, unmissable call buttons, and lead forms placed where people actually use them. Every page hands the visitor a next step." },
      { name: 'Copy that sells', desc: "Words written for homeowners protecting a big investment and built to book the job, not filler that reads exactly like everyone else's." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank: clean structure, schema, fast load, and neighborhood-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both your conversions and your rankings." },
      { name: 'Bilingual-ready build', desc: "Built to serve Anaheim's majority-Hispanic market in English and Spanish, so you convert homeowners most of your competitors' sites cannot even greet.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts over to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your service area, your best jobs, and your competitors, then map the site around booking more of the work you actually want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert, and you see it and shape it before a single line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it around what is actually converting." },
    ],
    pricing: {
      heading: 'Transparent Anaheim web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Bilingual-ready build'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Anaheim?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, set by page count and integrations. The tiers are above: fixed price, no surprises, and you own the finished site outright." },
      { q: 'How long does it take to build?', a: "A focused site takes roughly 2 to 4 weeks; a larger custom build takes 4 to 8. We hand you a firm timeline up front and keep you posted through each stage." },
      { q: 'Can you build my site in English and Spanish?', a: "Yes, and in Anaheim it is a genuine edge. The city runs roughly 54% Hispanic, with a large Vietnamese community nearby, and most contractor sites are English-only. A bilingual-ready build lets you convert homeowners your competitors cannot even greet." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Orange County terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you cannot walk away from." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where nearly all of your Anaheim traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually run yourself, usually WordPress or Webflow. We will recommend the right fit in your free consult and walk you through the tradeoffs in plain English." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month, so you can leave whenever you like." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Anaheim site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'anaheim', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Anaheim Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your Anaheim website without losing rankings. Faster, mobile-first, bilingual-ready rebuilds that convert more Orange County visitors into jobs.',
    eyebrow: 'Website Redesign · Anaheim-Orange County',
    h1: 'Redesign your Anaheim website without surrendering your rankings',
    h2Exact: 'Anaheim Website Redesign Company',
    heroSubhead:
      "An outdated site quietly costs you jobs every week: slow, awkward on a phone, easy to scroll past, and invisible to half of Anaheim. We redesign Orange County contractor sites to convert more and load faster, then migrate with care so you keep every bit of ranking you have already earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go wrong one of two ways: the site looks better but converts the same, or it launches and the rankings evaporate overnight. We do neither. We redesign Anaheim contractor sites for speed and conversions, make them polished and bilingual-ready for Orange County's market, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign holds your rankings and lifts them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Anaheim site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and quietly costs you trust", body: "For a high-ticket job, Orange County homeowners protecting a big investment size you up by your site within seconds. An old, cluttered design nudges them toward a competitor who looks more established, even when your work is plainly better." },
      { title: "It is slow and clumsy on a phone", body: "If your site is clunky or slow on mobile, you are losing most of your Anaheim visitors before they ever reach your offer. A redesign built mobile-first wins them back." },
      { title: "It only speaks to half your market", body: "Anaheim runs roughly 54% Hispanic, and an English-only site silently overlooks those homeowners. A redesign that is bilingual-ready and built for conversions wins back the leads your old site never even touched." },
    ],
    servicesHeading: "What goes into an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what is costing you leads and rankings today, so the redesign fixes real problems instead of just swapping colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you hold onto the rankings and traffic you have already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, smarter call-to-action placement, and lead forms people actually use. We design for booked jobs, not just a fresh coat of paint." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals, which helps both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where nearly all of your Anaheim traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the affluent Orange County homeowners you are chasing." },
      { name: 'Bilingual-ready rebuild', desc: "Rebuilt to serve Anaheim's majority-Hispanic market in English and Spanish, so the new site converts homeowners your old one never reached.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search keeps shifting toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what is losing you leads and rankings, then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build a thing." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and watch closely so rankings hold and climb, not drop." },
      { name: 'Optimize', desc: "Post-launch tuning around what is converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Anaheim redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Bilingual-ready rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Anaheim?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, set by size and integrations. Fixed price, no surprises, and you own the result outright." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it is done carefully, and that is exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually nudges them up." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes roughly 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is a pain to update, is not pulling in leads, or only speaks English in a market that runs over half Hispanic, it is costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and sharpen your existing content, preserve what is ranking, and handle the technical migration so nothing important slips through." },
      { q: 'Can the redesign serve Spanish-speaking customers?', a: "Yes, and in Anaheim that is a real consideration. The city runs roughly 54% Hispanic and most contractor sites are English-only. We can rebuild bilingual-ready so the new site converts homeowners your old one never reached." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely: the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: 'What is in the free redesign audit?', a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const anaheimCity = {
  citySlug: 'anaheim', city: 'Anaheim', state: 'California', stateAbbr: 'CA', metro: 'Anaheim-Orange County',

  titleTag: 'Anaheim Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Anaheim contractors. Get found, get booked, and own your leads instead of renting them, bilingual-ready for Orange County.',

  eyebrow: 'Anaheim · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Anaheim contractors found and booked',
  h2Exact: 'Anaheim Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Orange County's affluent, bilingual market. One team to get you ranking, converting, and off the rented-lead treadmill for good.",
  heroProof: ['Built for the trades', 'Bilingual-ready', 'No lock-in contracts'],
  primaryCta: 'Get my free Anaheim audit',

  intro:
    "If you run a contracting business in Anaheim, you are fighting for attention in the largest city in Orange County, one of the most affluent home markets in the country and a market that runs over half Hispanic. Winning here takes three things pulling together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack, all polished enough for OC standards and built to reach homeowners in both languages. Here is how we help Anaheim contractors do precisely that.",
  aioQuestion: 'How do Anaheim contractors get more leads online?',
  aioAnswer:
    "Anaheim contractors get more leads by pairing a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack. Because Anaheim is affluent and roughly 54% Hispanic, the contractors who look polished, rank in both English and Spanish, and are already visible before seasonal demand spikes win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Land in the top three businesses Google pins to the map when Anaheim searches \"near me,\" in English and Spanish, where most of your competitors have not even shown up. The single highest-return move for most local businesses.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually type, build an asset you own instead of renting traffic from ads, and measure the work in leads rather than vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first, bilingual-ready websites engineered to turn visitors into booked jobs, polished enough for Orange County's high standards, not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, then migrate it carefully so you keep every bit of ranking you have already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Anaheim?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads, polished for Orange County and ready to reach homeowners in both languages." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors, so we understand emergency calls, wildfire-driven demand, and insurance work." },
    { q: 'Why does bilingual marketing matter in Anaheim?', a: "Anaheim runs roughly 54% Hispanic, with a large Vietnamese community nearby in Little Saigon, and almost none of your competitors market in Spanish. That makes Spanish-language search and bilingual websites one of the cheapest, biggest edges available: you reach homeowners nobody else is even talking to." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Anaheim areas do you serve?', a: "All of Anaheim and the surrounding Orange County areas: Anaheim Hills, Yorba Linda, West Anaheim, Orange, Fullerton, Placentia, Brea, Garden Grove, Westminster, Santa Ana, and more." },
    { q: 'Where should I start?', a: "Start with a free Anaheim audit. We will look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};
