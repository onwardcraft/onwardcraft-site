// MIDLAND — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Midland's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// MIDLAND — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Midland-Odessa is a boom-cycle race',
  body:
    "The Midland-Odessa metro sits atop the Permian Basin — the most productive oil field in the world — and that single fact shapes everything about doing business here. When oil prices run hot and the shale rigs multiply, the metro floods with money. Oil executives and engineers gut-renovate their homes, HVAC companies book out weeks in advance, and a contractor who ranks on Google captures work that a company two years ago couldn't have imagined. Then prices dip and the cycle tightens. The contractors who built their online presence before the boom spike are the ones who capture it; the ones who start optimizing after the surge is already rolling usually miss most of it. Two things layer on top of the oil economy. First, Midland summers are brutal — temperatures hit 105 to 110°F regularly from May through September, and HVAC failure in that heat is a genuine emergency. Demand for air conditioning service and replacement is enormous and almost entirely driven by the calendar. Second, the February 2021 freeze hit Midland and Odessa especially hard: pipes burst in nearly every home, and water damage, plumbing, and restoration demand ran at crisis levels for two-plus years afterward. Contractors who were ranking when that disaster hit had their phones ringing before they got out of bed. Add a 57% Hispanic population where Spanish-language search is a real market, and a West Texas dust environment that abrades roofs and HVAC equipment unlike anywhere in the country, and this market has more angles than it first appears.",
  pullQuote: 'In Midland, the contractor who ranks before the next oil boom spike is the one who books it — the one who starts optimizing after usually misses it.',
  donut: {
    title: 'How Midland searches',
    value: 57,
    centerLabel: 'Hispanic',
    legend: [
      { label: 'Hispanic', pct: 57, kind: 'teal' },
      { label: 'Other', pct: 43, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Extreme heat (May–Sep) and freeze emergencies (Jan–Feb)',
  seasonalDemand: [
    { m: 'J', v: 85, peak: true }, { m: 'F', v: 80, peak: true }, { m: 'M', v: 55 },
    { m: 'A', v: 62 }, { m: 'M', v: 88, peak: true }, { m: 'J', v: 98, peak: true },
    { m: 'J', v: 100, peak: true }, { m: 'A', v: 97, peak: true }, { m: 'S', v: 84, peak: true },
    { m: 'O', v: 48 }, { m: 'N', v: 44 }, { m: 'D', v: 52 },
  ],
  stats: [
    { value: '~57%', label: 'Hispanic residents — Spanish-language search is a real market', accent: true },
    { value: '105–110°F', label: 'summer highs — HVAC failure is an emergency May through Sep' },
    { value: 'Permian Basin', label: 'world\'s most productive oil field, driving boom-cycle renovation budgets' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks when the boom hits' },
  ],
  neighborhoods: [
    'Midland', 'Odessa', 'Midland Country Club', 'Greenwood', 'Gardendale',
    'Goldsmith', 'Notrees', 'Garden City', 'Stanton', 'Big Spring',
    'Andrews', 'Monahans', 'Pecos', 'Fort Stockton',
  ],
};

const AREAS = [
  'Midland', 'Odessa', 'Midland Country Club', 'Greenwood', 'Gardendale',
  'Goldsmith', 'Notrees', 'Garden City', 'Stanton', 'Big Spring',
  'Andrews', 'Monahans', 'Pecos', 'Fort Stockton', 'Permian Basin',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. In Midland that problem is even sharper — when the oil economy swings up, everyone's phones ring, but the contractors who built their online presence before the boom are the ones who capture the wave. So that's the whole point of what we do: get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We understand Permian Basin heat emergencies, freeze disaster recovery, and boom-cycle renovation demand, so everything we build is shaped around how your customers really search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners three competitors also bought — especially not when the boom spikes and lead prices go with it.",
  },
  {
    title: 'We actually speak Midland-Odessa',
    body: "Neighborhood-by-neighborhood targeting across the Permian Basin, plus Spanish-language reach to win the 57% of the market most agencies never even see. The stuff a national shop can't do by swapping a city name into a template.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Midland contractor gets around 1,200 local \"near me\" impressions a month across a handful of Permian Basin neighborhoods. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a booked-out calendar — and when the next oil boom spike hits, that gap is brutal. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Midland', state: 'Texas', stateAbbr: 'TX', metro: 'Midland-Odessa (Permian Basin)',
  heroProof: ['Built for the trades', 'Permian Basin focused', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const midlandLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'midland', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Midland TX Local SEO Company | OnwardCraft',
    metaDescription:
      'Search your service in Midland and three businesses show up on the map. We get you into those three before the next oil boom hits.',
    eyebrow: 'Local SEO · Midland-Odessa, TX',
    h1: 'When Midland searches for what you do, be the first name they find',
    h2Exact: 'Midland Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. In Midland-Odessa, where an oil boom can flood the market with renovation budgets overnight, we get you into that top three for your neighborhoods so the call lands with you — before the wave hits.",
    primaryCta: 'Get my free Midland audit',
    intro:
      "Midland local SEO comes down to one thing: when a homeowner in Greenwood or Gardendale searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. This market has something most don't: an oil-driven economy that can spike renovation demand almost overnight, and a 57% Hispanic community searching in Spanish. Being in those top three spots before the boom — and in the languages your customers actually use — is the whole game. Here's how you do it.",
    aioQuestion: 'How do Midland TX businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Midland-Odessa neighborhoods. In the Permian Basin, the winners also target seasonal demand — peak HVAC searches May through September, emergency plumbing and restoration around freeze events — and reach the 57% of the market searching in Spanish that most competitors ignore.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks. In Midland-Odessa, when the oil economy heats up and renovation budgets get large, those three spots capture most of the surge. If you're not one of them, the boom largely passes you by — no matter how good your work is. Getting into that top three is usually the single highest-return move a Permian Basin contractor can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Midland homeowner to four contractors, then bill each of you to fight over them. When demand spikes during an oil boom cycle, lead prices from those platforms go with it. Local SEO builds the opposite: a lead finds you, calls you, and nobody else got it. Over time you stop renting and start owning the pipeline." },
      { title: "You're invisible to more than half the market", body: "About 57% of Midland-Odessa residents are Hispanic, and a significant share search in Spanish. Most contractors do nothing to show up for those searches, so the demand sits there unclaimed. Targeting the right neighborhoods and languages is how you reach buyers your competitors are ignoring entirely." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Midland-Odessa searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing across the Permian Basin." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes people pick up the phone — especially important when oil-boom budgets arrive." },
      { name: 'Neighborhood pages', desc: "Real pages for Greenwood, Gardendale, Midland Country Club, Odessa and the surrounding communities, so you rank for the neighborhood someone's actually searching, not just \"Midland.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from West Texas and Permian Basin sources Google trusts — local press, trade associations, partners. This is what separates page one from page two here." },
      { name: 'Spanish-language reach', desc: "57% of Midland-Odessa is Hispanic. We help you show up for Spanish-language searches so you capture the market most of your competitors never even see.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your Permian Basin neighborhoods and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now over starting later — especially before a boom cycle." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Midland, Odessa, and the surrounding communities, plus the on-page work to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right in Midland-Odessa.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across Midland, Odessa, and nearby communities.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the Permian Basin map.', features: ['Everything in Local Growth', 'Local link building', 'Spanish-language search targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Midland TX?', a: "Most Midland engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The competitive Permian Basin keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days is selling you something." },
      { q: 'What makes Midland local SEO different from other markets?', a: "Two things define this market. First, oil-boom cycles create sudden spikes in renovation demand — contractors who are already ranking capture that surge; those who start optimizing during the boom usually miss most of it. Second, 57% of residents are Hispanic and a large share search in Spanish, so there's real demand your English-only competitors never touch." },
      { q: 'Can you help me reach Spanish-speaking customers in Midland?', a: "Yes, and in a market that's 57% Hispanic, that's a genuine edge. We optimize your profile and content so you show up for Spanish-language searches across Midland-Odessa — demand most contractors are completely invisible for." },
      { q: 'Which areas do you cover?', a: "Midland, Odessa, Midland Country Club, Greenwood, Gardendale, Goldsmith, Notrees, and the broader Permian Basin area. We build genuine neighborhood pages instead of one generic Midland page, because that's what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand Permian Basin heat emergencies, West Texas dust damage, and freeze recovery work, and we build your local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep — and when Midland demand spikes during a boom cycle, their per-lead prices spike with it. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because the work is coming to you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across the Permian Basin, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'midland', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Midland TX SEO Company | OnwardCraft',
    metaDescription:
      'Midland TX SEO that ranks contractors on Google before the next oil boom hits. Revenue-tied reporting, no lock-in contracts, built for the Permian Basin.',
    eyebrow: 'SEO Services · Midland-Odessa, TX',
    h1: 'Get your Midland business to the top of Google and keep it there',
    h2Exact: 'Midland TX SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Midland customers search and the leads keep coming — through the slow season and into the next boom. We build that ranking and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free Midland SEO audit',
    intro:
      "Midland SEO comes down to one question: when someone searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in the Permian Basin — HVAC searches in a 110°F July, emergency plumbing after a freeze, renovation work during an oil-boom cycle — and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Midland TX businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content tied to Midland-Odessa neighborhoods, and earning links from trusted West Texas sources. In the Permian Basin, the fastest movers also target seasonal peaks — extreme HVAC demand from May through September and freeze-emergency searches in winter — and show up in Spanish for the 57% of the market searching that way.",
    problemHeading: "Three reasons your Midland site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. In a market where an oil-boom surge can multiply demand almost overnight, being invisible on page two means the wave breaks over your competitors and you barely feel it — no matter how good your work is." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost. During a Permian Basin boom cycle, owned rankings are worth far more than rented clicks." },
      { title: "You're not ranking for the demand that matters", body: "Midland demand swings hard — extreme HVAC searches from May through September, emergency plumbing and water damage work after a freeze, and renovation surges tied to oil prices. The contractors who rank for those terms ahead of time catch the spikes. If your SEO ignores seasonal and boom-driven searches, you're leaving your busiest periods on the table." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your Midland and Odessa customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real West Texas and Permian Basin sources. In a regional market, links from trusted local and industry outlets are often what push you to page one." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across Midland, Odessa, and surrounding communities alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Seasonal & boom-cycle SEO', desc: "We rank you for the summer HVAC searches, freeze-emergency terms, and oil-boom renovation keywords that drive Midland's demand spikes, so you're visible before they hit, not after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Permian Basin leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the seasonal, freeze-emergency, and boom-cycle terms that matter here." },
      { name: 'Build authority', desc: "Links and citations from trusted West Texas and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Midland SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused Midland site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and Permian Basin communities.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Midland-Odessa search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal & boom-cycle SEO', 'Multi-location coverage', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Midland TX?', a: "Most Midland SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Midland?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter neighborhood terms and slower on the most competitive Permian Basin keywords. SEO compounds, so the gains keep building the longer you run it — and so does your advantage heading into the next boom cycle." },
      { q: 'Is SEO better than Google Ads for a Midland contractor?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Permian Basin contractors do best running SEO as the long-term engine — especially because owned rankings are far more valuable than rented clicks when oil-boom demand spikes." },
      { q: 'Should my Midland SEO target seasonal demand?', a: "Absolutely. Summer HVAC demand peaks hard from May through September at 105 to 110°F. Freeze emergencies can send plumbing and restoration calls through the roof overnight — as the 2021 Texas freeze showed. And oil-boom cycles drive renovation surges that can appear quickly. Ranking takes months to build, so you have to be in place before the season, not chasing it." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal/boom-cycle and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which areas around Midland do you cover?', a: "Midland, Odessa, Midland Country Club, Greenwood, Gardendale, Goldsmith, Notrees, and the broader Permian Basin corridor. We build genuine local pages rather than one generic Midland page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. During an oil-boom surge, those platforms charge more for leads because demand spikes. Owned rankings cost the same regardless of the market — and the leads belong only to you." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'midland', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Midland TX Web Design | Sites That Convert | OnwardCraft',
    metaDescription:
      'Midland TX web design that turns visitors into booked jobs — fast, mobile-first sites built for Permian Basin contractors. Transparent pricing, you own it.',
    eyebrow: 'Web Design · Midland-Odessa, TX',
    h1: 'Midland web design that turns visitors into booked jobs',
    h2Exact: 'Midland TX Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Permian Basin contractors fast, mobile-first sites engineered to turn visitors into booked work — and to be ready when the next oil boom floods the market with renovation budgets.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Midland contractor websites lose leads quietly: slow on a phone, buried call button, no clear offer. Web design done right fixes all of that. We build sites that load fast, look like the professional you are, and turn visitors from Greenwood to Gardendale into booked jobs — built to capture the wave when Permian Basin oil wealth drives a renovation surge, and visible enough to handle the summer HVAC rush when temperatures hit 110°F.",
    aioQuestion: 'What makes a good contractor website in Midland TX?',
    aioAnswer:
      "A good Midland contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific neighborhoods you serve across the Permian Basin. Because oil-boom cycles can spike renovation demand quickly and summer heat makes HVAC an emergency category, a site that converts fast and ranks well before those spikes is worth far more than one built during the surge.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next guy. In Midland-Odessa, where an oil boom can bring high-budget renovation projects almost overnight, a site that doesn't convert wastes the surge you've been waiting for. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Midland visitors are on mobile, and they bounce if your site takes more than a few seconds to load. When it's 108°F outside and someone needs their AC fixed today, a slow site means they call your competitor. We build fast, so you keep the visitor and the ranking." },
      { title: "It doesn't speak to your community", body: "A homeowner in Gardendale wants to see you serve Gardendale — not a generic \"Midland\" page that could be anybody. And with 57% of the metro being Hispanic, a site that makes no Spanish-language connection misses more than half the market. We build sites that name the neighborhoods you work and connect with the community you serve." },
    ],
    servicesHeading: "What's in an OnwardCraft Midland website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your Permian Basin service area, and the jobs you actually want." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your Midland traffic is — especially when someone has an emergency in 110°F heat." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that speak to Permian Basin homeowners — including during oil-boom renovation cycles and summer heat emergencies — not filler text that reads like everyone else." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages across the Midland-Odessa metro." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Neighborhood-targeted pages', desc: "Pages built around Greenwood, Gardendale, Midland Country Club, Odessa, and surrounding communities — so you stand out instead of blending into one generic Permian Basin page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your service area, your best jobs — boom-cycle renovations, heat emergencies, freeze recovery — and your competitors, then map the site around booking more of the work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting." },
    ],
    pricing: {
      heading: 'Transparent Midland web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade Midland contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established Permian Basin contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Neighborhood-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location Permian Basin businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Midland TX?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site be ready when the next oil boom hits Midland?', a: "That's exactly why you build now, not later. SEO and credibility take months to establish. A site built before the boom cycle peaks is worth far more than one rushed together after demand is already spiking. We build for the long game so you capture the surge instead of chasing it." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Permian Basin terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your Midland traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb — critical when a customer in 108°F heat needs to reach you immediately." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Midland site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'midland', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Midland TX Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your Midland TX website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs for Permian Basin.',
    eyebrow: 'Website Redesign · Midland-Odessa, TX',
    h1: 'Redesign your Midland website without losing your rankings',
    h2Exact: 'Midland TX Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, easy to ignore. We redesign Midland contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned going into the next oil boom.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Permian Basin contractor sites for speed and conversions, build them to stand out in a market shaped by oil wealth and extreme heat, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my Midland website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them — because the new site is faster, mobile-first, and better structured than the old one, which matters especially before Midland's summer heat season and oil-boom surges.",
    problemHeading: "Signs your Midland site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "Oil executives and engineers making large renovation decisions in Midland judge you by your site in seconds. An old, cluttered design quietly sends them to a competitor who looks more established — even when your work is better. During a boom cycle, when the budgets are largest, first impressions cost or win the biggest jobs." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your Midland visitors before they ever see your offer. When someone needs AC service in 108°F heat, they call the first number they reach. A redesign built mobile-first and optimized for speed wins them back." },
      { title: "It blends into the market", body: "A generic old site gives a Permian Basin visitor no reason to pick you over the next result — and doesn't reach the 57% of the metro that's Hispanic. We rebuild for conversions, for the neighborhoods you actually serve, and for the community that makes up most of this market." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned — going into peak season or a boom cycle." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings, and essential when heat-emergency calls need to reach you immediately." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your Midland traffic lives — especially for urgent HVAC and plumbing calls in extreme heat." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the scale of the jobs you want to win from oil-boom renovation budgets." },
      { name: 'Neighborhood-targeted rebuild', desc: "Rebuilt around Greenwood, Gardendale, Midland Country Club, Odessa, and surrounding Permian Basin communities — so the new site stands out instead of reading like everyone else's.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you leads and rankings, then map a redesign that fixes it without breaking what already works — and positions you for the next Permian Basin demand cycle." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and improve, not drop — before peak season or a boom." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Midland redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small Midland contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established Permian Basin contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Neighborhood-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location Permian Basin sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Midland TX?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them — going into summer heat season or a boom cycle with stronger rankings is the whole goal." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is hard to update, isn't bringing in leads, or isn't positioned to capture the next Permian Basin oil-boom surge, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the redesign help me compete for oil-boom renovation work?', a: "Yes, and timing matters enormously. A redesigned site that's been ranking for six months before a boom cycle hits is worth far more than one rushed together after demand spikes. Oil executives and engineers with large renovation budgets judge contractors by their web presence — we make sure yours earns that trust." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings. In Midland's summer heat, a site that loads in two seconds vs. six seconds is the difference between getting the emergency HVAC call and losing it." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan. No pressure, just a plan." },
    ],
  },
];

export const midlandCity = {
  citySlug: 'midland', city: 'Midland', state: 'Texas', stateAbbr: 'TX', metro: 'Midland-Odessa (Permian Basin)',

  titleTag: 'Midland TX Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Midland-Odessa contractors. Rank before the next oil boom, capture summer HVAC demand, and own your leads — built for.',

  eyebrow: 'Midland-Odessa · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Midland contractors found and booked',
  h2Exact: 'Midland TX Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for the Permian Basin — where oil booms spike renovation demand, summers hit 110°F, and being visible before the wave is everything.",
  heroProof: ['Built for the trades', 'Permian Basin focused', 'No lock-in contracts'],
  primaryCta: 'Get my free Midland audit',

  intro:
    "If you run a contracting business in Midland-Odessa, you're operating in one of the most economically volatile and extreme-climate markets in the country. Oil booms can flood the metro with renovation budgets almost overnight — but only the contractors already ranking capture the surge. Summers hit 105 to 110°F, making HVAC failure a genuine emergency from May through September. The 2021 Texas freeze caused catastrophic pipe damage across nearly every home in the metro. And 57% of the population is Hispanic, which means Spanish-language search is a real market most of your competitors ignore. Winning here takes three things working together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack for the neighborhoods you serve. Here's how we help Midland contractors do exactly that.",
  aioQuestion: 'How do Midland TX contractors get more leads online?',
  aioAnswer:
    "Midland contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack across Permian Basin neighborhoods. The contractors who win this market rank before oil-boom cycles peak, show up for Spanish-language searches from the 57% Hispanic population, and are visible for summer HVAC emergencies before temperatures hit 110°F.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Midland-Odessa searches \"near me.\" The single highest-return move for most Permian Basin contractors — done neighborhood by neighborhood, before the next boom hits.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search — summer HVAC emergencies, freeze recovery, oil-boom renovation — and build an asset you own instead of renting traffic from ads.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs — ready to handle the surge when Permian Basin oil wealth drives a renovation wave or 110°F heat drives an HVAC emergency.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it carefully so you keep every ranking you've earned going into peak season or the next oil-boom cycle.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Midland TX?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads — and are positioned before the next Permian Basin boom cycle peaks." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors — so we understand Permian Basin heat emergencies, West Texas dust damage to roofs and HVAC equipment, freeze recovery work, and oil-boom renovation demand." },
    { q: 'Why does the Midland market need a different approach?', a: "Three things make Midland-Odessa unlike most markets: oil-boom cycles that can spike renovation demand almost overnight (meaning who ranks before the boom captures most of it), extreme West Texas summers that make HVAC an emergency category May through September, and a population that's 57% Hispanic — meaning Spanish-language search is a real market most contractors ignore entirely." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Midland-Odessa areas do you serve?', a: "Midland, Odessa, Midland Country Club, Greenwood, Gardendale, Goldsmith, Notrees, and the surrounding Permian Basin communities. We build genuine local pages rather than one generic Midland page." },
    { q: 'Where should I start?', a: "Start with a free Midland audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest — and position you for the next demand cycle. No pitch deck, just a plan." },
  ],
};
