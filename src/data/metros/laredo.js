// LAREDO — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Laredo's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// LAREDO — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Laredo is a different game',
  body:
    "Laredo is unlike any other market in the US. The city sits at the busiest land border crossing in the country — over $300 billion in US-Mexico trade flows through Laredo-Nuevo Laredo every year — and roughly 96% of the population is Hispanic. Almost the entire market searches in Spanish. That's not a niche; it's the whole market. Contractors who optimize for Spanish-language search face near-zero competition from agencies that just swap a city name into an English template. On top of that, Laredo is consistently the hottest large city in the United States, regularly hitting 110–115°F in summer. HVAC failure here isn't an inconvenience — it's a medical emergency. And in winter, the rare hard freeze turns a city built for extreme heat into one completely unprepared for pipes bursting at 10°F. The contractors who are already visible when those moments hit book the work.",
  pullQuote: 'Almost the entire Laredo market searches in Spanish — contractors who show up in Spanish face near-zero competition.',
  donut: {
    title: 'Laredo by the numbers',
    value: 96,
    centerLabel: 'Hispanic',
    legend: [
      { label: 'Hispanic', pct: 96, kind: 'teal' },
      { label: 'Other', pct: 4, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Extreme heat (May–Sep), freeze emergency (Dec–Jan), hurricane moisture (Jun–Oct)',
  seasonalDemand: [
    { m: 'J', v: 52, peak: true }, { m: 'F', v: 48, peak: true }, { m: 'M', v: 44 }, { m: 'A', v: 54 },
    { m: 'M', v: 78, peak: true }, { m: 'J', v: 92, peak: true }, { m: 'J', v: 98, peak: true },
    { m: 'A', v: 98, peak: true }, { m: 'S', v: 90, peak: true }, { m: 'O', v: 62 },
    { m: 'N', v: 40 }, { m: 'D', v: 50, peak: true },
  ],
  stats: [
    { value: '~96%', label: 'of Laredo is Hispanic — nearly the entire market searches in Spanish', accent: true },
    { value: '$300B+', label: 'in US-Mexico trade flows through Laredo annually — international commerce is the whole economy' },
    { value: '110–115°F', label: 'summer highs — Laredo is the hottest large city in the US, making HVAC failure a medical emergency' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks — in Spanish and English' },
  ],
  neighborhoods: [
    'Laredo', 'Del Mar Heights', 'Heights (El Azteca)', 'North Laredo', 'Mines Road corridor',
    'Padre Ranchitos', 'El Cenizo',
  ],
};

const AREAS = [
  'Laredo', 'Del Mar Heights', 'Heights (El Azteca)', 'North Laredo', 'Mines Road corridor',
  'Padre Ranchitos', 'El Cenizo', 'Nuevo Laredo (cross-border referrals)', 'Webb County',
  'Rio Bravo', 'Botines', 'Mirando City', 'Bruni',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We understand the Spanish-language market',
    body: "96% of Laredo searches in Spanish. We build your SEO and content around the real search terms your customers use — not a translated English template — so you show up where competitors don't.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners three competitors also bought.",
  },
  {
    title: 'We actually speak Laredo',
    body: "Extreme summer heat, rare freeze emergencies, Rio Grande flooding, border trade economy, and real neighborhood targeting from Del Mar Heights to Padre Ranchitos. The stuff a national agency can't do by swapping a city name into a template.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Laredo contractor gets around 1,200 local \"near me\" impressions a month — in both Spanish and English. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a booked-out calendar — and when 110°F hits in July, that gap becomes enormous. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Laredo', state: 'Texas', stateAbbr: 'TX', metro: 'Laredo',
  heroProof: ['Built for the trades', 'Spanish-language SEO', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const laredoLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'laredo', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Laredo Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Search your service in Laredo and three businesses show up on the map. We get you into those three — in Spanish and English — so the call lands with you.',
    eyebrow: 'Local SEO · Laredo, TX',
    h1: 'When Laredo searches for what you do, be the first name they find',
    h2Exact: 'Laredo Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. We get you into that top three — in Spanish and English — so the call lands with you instead of whoever ranked first, and so you're ready when summer heat or a rare freeze sends demand through the roof.",
    primaryCta: 'Get my free Laredo audit',
    intro:
      "Laredo local SEO comes down to one thing: when a homeowner in Del Mar Heights or North Laredo searches your service in Spanish — or English — are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. With 96% of the market being Hispanic, the contractor who shows up in Spanish faces near-zero agency competition. Here's how you own that.",
    aioQuestion: 'How do Laredo businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for Spanish-language services and Laredo neighborhoods; consistent name, address, and phone listings across the web; a steady stream of real reviews in Spanish and English; and local content tied to real Laredo areas like Del Mar Heights, Padre Ranchitos, and the Mines Road corridor. Laredo's extreme summer heat and rare freeze emergencies create enormous demand spikes — you need to be ranking before those moments hit.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"cerca de mí\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks. If you're not one of them, it almost doesn't matter how good your work is — most Laredo residents never see your name. Getting into that top three is usually the single highest-return move a Laredo business can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Laredo homeowner to four contractors, then bill each of you to fight over them. It's a treadmill. Local SEO builds the opposite: a lead finds you, calls you, and nobody else got it. Over time you stop renting and start owning the pipeline." },
      { title: "You're not ready when the heat emergency hits", body: "When July hits 112°F in Laredo, HVAC calls spike overnight — and AC failure here is a genuine medical emergency. The contractors already ranking take those calls. And when the rare hard freeze comes in January, demand for plumbing restoration and repair is catastrophic in a city built for extreme heat. Ranking now is how you catch that wave instead of watching it pass." },
    ],
    servicesHeading: 'What it actually takes to rank you in Laredo',
    services: [
      { name: 'Google Business Profile (Spanish + English)', desc: "The biggest lever in the Map Pack. We optimize your categories, services, service area, photos, and posts in both Spanish and English — so Google knows exactly which Laredo searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple bilingual system that turns finished jobs into a steady flow of Spanish and English reviews. It lifts your ranking and makes people pick up the phone." },
      { name: 'Neighborhood pages', desc: "Real pages for Del Mar Heights, North Laredo, Padre Ranchitos, Mines Road, and El Cenizo — so you rank for the neighborhood someone's actually searching, not just \"Laredo.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Laredo sources Google trusts — local press, trade associations, border-commerce partners. This is what separates page one from page two here." },
      { name: 'Heat-season and freeze readiness', desc: "We get your profile, pages, and reviews ranking before peak summer heat and before the rare winter freeze so you catch the demand spike instead of scrambling after it.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you — in Spanish and English.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your service areas — in both Spanish and English — and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the bilingual review engine go live. These compound week over week, which is why local SEO rewards starting now over starting later." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Laredo's distinct areas, plus the on-page work to back them up — in Spanish and English." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Laredo areas in Spanish and English.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Bilingual review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the Laredo map in both languages.', features: ['Everything in Local Growth', 'Local link building', 'Heat-season and freeze demand targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Laredo?', a: "Most Laredo engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're targeting in Spanish and English. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The competitive Laredo keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days in a bilingual market this specific is selling you something." },
      { q: 'What makes Laredo local SEO different?', a: "Two things, really. First, 96% of the population is Hispanic and almost everyone searches in Spanish — so optimizing in Spanish gives you near-zero agency competition. Second, Laredo has extreme seasonal demand swings: summer HVAC emergencies at 110°F+ and catastrophic pipe bursts during the rare deep freeze. Your ranking has to be in place before those moments hit." },
      { q: 'Do I need SEO in Spanish?', a: "For Laredo, yes — it's arguably more important than English SEO. With 96% of the market being Hispanic, the search volume in Spanish dwarfs English, and almost no agencies optimize properly for it. We do both, so you capture the full market." },
      { q: 'Which areas do you cover?', a: "All of Laredo and the surrounding Webb County — Del Mar Heights, North Laredo, Heights (El Azteca), Mines Road corridor, Padre Ranchitos, El Cenizo, Rio Bravo, and more. We build genuine neighborhood pages instead of one generic Laredo page, because that's what actually ranks for \"[servicio] [colonia]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. HVAC, plumbing, roofing, restoration, electrical, solar, and general contractors. We understand emergency calls, extreme-heat demand, freeze disasters, and the international-trade professional homeowner base in Laredo." },
      { q: 'How does local SEO help me during the summer heat season?', a: "When July hits 112°F, HVAC calls spike overnight — and in Laredo, AC failure is a medical emergency. Families need someone on the map right now. We get you ranking and reviewed ahead of season so you're the contractor they find when it matters most." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema in Spanish and English so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today in Spanish and English across your service areas, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'laredo', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Laredo SEO Company | OnwardCraft',
    metaDescription:
      'Laredo SEO that ranks contractors on Google in Spanish and English — leads you own, revenue-tied reporting, no lock-in. Built for extreme heat season.',
    eyebrow: 'SEO Services · Laredo, TX',
    h1: 'Get your Laredo business to the top of Google and keep it there',
    h2Exact: 'Laredo SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Laredo customers search — in Spanish and English — and the leads keep coming. We build that ranking and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free Laredo SEO audit',
    intro:
      "Laredo SEO comes down to one question: when a homeowner searches what you do — in Spanish or English — are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in the hottest large city in the US, where 96% of searches are in Spanish and a nearly untapped bilingual market is waiting.",
    aioQuestion: 'How do Laredo businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact Spanish and English terms customers search, publishing genuinely useful local content tied to Laredo neighborhoods, and earning links from trusted local and trade sources. In a market where 96% of the population is Hispanic, Spanish-language content and on-page optimization are often the fastest and least-competed path to page one.",
    problemHeading: "Three reasons your Laredo site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two — in both languages", body: "Almost nobody clicks past the first page of Google. If you're not in the top handful of results for the Spanish and English terms your customers search, your site is basically invisible — no matter how good your work is." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost." },
      { title: "You're invisible when demand spikes", body: "Laredo HVAC demand explodes in summer — at 110°F+, AC failure is a genuine emergency, not a convenience. The rare winter freeze creates an equally catastrophic burst-pipe and restoration demand in a city built for extreme heat. Contractors who rank for those searches before the season catch the wave; everyone else scrambles." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings in Laredo',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all — with bilingual hreflang handled correctly." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact Spanish and English terms your Laredo customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles in Spanish and English that answer what buyers search, earn links, and bring in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real Laredo, South Texas, and trade sources. In a bilingual market, links are often what separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization in Spanish and English so you win the \"cerca de mí\" and \"near me\" searches alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Heat-season and freeze SEO', desc: "We rank you for the extreme-heat HVAC searches and the rare but catastrophic freeze-emergency terms that drive Laredo's biggest demand spikes, so you're visible before it happens.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you in both languages, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings and traffic in Spanish and English, analyze competitors, then build a roadmap around the keywords most likely to drive real Laredo leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, mobile, and bilingual hreflang — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content in Spanish and English, including the extreme-heat and freeze-season terms that matter here." },
      { name: 'Build authority', desc: "Links and citations from trusted Laredo, South Texas, and trade sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Laredo SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core Laredo keywords in Spanish or English.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services, neighborhoods, and both languages.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Bilingual monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Laredo search in Spanish and English.', features: ['Everything in SEO Growth', 'Aggressive bilingual content + links', 'Heat-season and freeze SEO', 'Multi-location support', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Laredo?', a: "Most Laredo SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much bilingual content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Laredo?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on low-competition terms — especially Spanish-language terms where agency competition is thin — and slower on the most contested keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Do I really need SEO in Spanish for Laredo?', a: "Yes. With 96% of the population being Hispanic and most searching in Spanish, ignoring Spanish-language SEO means ignoring the vast majority of your potential customers. English-only SEO in Laredo leaves most of the market untouched — and Spanish SEO here faces near-zero competition from other agencies." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most contractors do best running SEO as the long-term engine and ads for short-term spikes." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, bilingual content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add heat-season targeting and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'How does SEO help me during Laredo\'s extreme summer?', a: "May through September in Laredo is an HVAC emergency waiting to happen at 110°F+. We rank you for the Spanish and English heat-emergency searches before the season so you're the first contractor families find when the AC fails — and in Laredo, that's urgent." },
      { q: 'Which areas around Laredo do you cover?', a: "All of Laredo and Webb County — Del Mar Heights, North Laredo, Mines Road corridor, Padre Ranchitos, El Cenizo, Rio Bravo, and more — with genuine local pages in Spanish and English rather than one generic Laredo page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building bilingual rankings and a Google presence that send leads directly to you. The more you own your search visibility in Spanish and English, the less you depend on paying brokers for shared leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today in Spanish and English, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'laredo', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Laredo Web Design Company | Sites That Convert | OnwardCraft',
    metaDescription:
      'Laredo web design that turns visitors into booked jobs — fast, mobile-first, bilingual sites built for contractors and extreme heat season.',
    eyebrow: 'Web Design · Laredo, TX',
    h1: 'Laredo web design that turns visitors into booked jobs',
    h2Exact: 'Laredo Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Laredo contractors fast, mobile-first sites in Spanish and English — engineered to turn visitors into booked work and to hold up when summer heat floods your phone with HVAC emergencies.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Laredo contractor websites lose leads quietly: slow on a phone, buried call button, English-only in a 96% Hispanic market, no clear offer. Web design done right fixes all of that. We build bilingual sites that load fast, look like the professional you are, and turn Del-Mar-Heights-to-Padre-Ranchitos visitors into booked jobs — in Spanish and English.",
    aioQuestion: 'What makes a good contractor website in Laredo?',
    aioAnswer:
      "A good Laredo contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, and serves content in both Spanish and English — because 96% of the market is Hispanic. It proves trust with reviews and real project photos and is built to handle traffic spikes during the extreme summer heat season, when HVAC calls become emergencies. Mobile speed, bilingual content, and an obvious next step are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine — and it's probably English-only", body: "A lot of contractor sites just list services in English and sit there. In a market where 96% of residents are Hispanic, an English-only site with no clear offer and no obvious next step is turning away the vast majority of potential customers. We design every page to convert — in Spanish and English." },
      { title: "It's too slow on a phone", body: "Most of your Laredo visitors are on mobile, and they bounce if your site takes more than a few seconds to load. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking." },
      { title: "It can't handle an emergency demand surge", body: "When July hits 112°F in Laredo, HVAC calls go from zero to a flood in hours — and AC failure here is a medical emergency. Homeowners need a contractor right now, and the site that loads fast and makes calling easy gets the job. We build sites that convert under load, so you capture that demand instead of losing it to a faster competitor." },
    ],
    servicesHeading: "What's in an OnwardCraft Laredo website",
    services: [
      { name: 'Bilingual custom design', desc: "No cookie-cutter templates. A site designed in Spanish and English, around your trade, your service area, and the jobs you actually want in Laredo." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your Laredo traffic is. Fast, thumb-friendly, easy to call from — in Spanish and English." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step — in the customer's language." },
      { name: 'Bilingual copy that sells', desc: "Words in Spanish and English that speak to anxious Laredo homeowners and book the job, not filler text that reads like everyone else." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank in Spanish and English — clean structure, schema, fast load, and neighborhood-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Heat-surge and freeze ready', desc: "Built to stay fast and keep the call button front and center when extreme heat or a rare freeze sends your traffic through the roof — the moment that turns visitors into your biggest jobs.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business in Spanish and English as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your service area, your best jobs, and your competitors — in the Laredo context — then map the bilingual site around booking more of the work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert in Spanish and English — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the bilingual copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the bilingual SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting — in both languages." },
    ],
    pricing: {
      heading: 'Transparent Laredo web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger bilingual site for established contractors with several services.', features: ['Up to 12 pages', 'Bilingual design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Heat-surge and freeze ready'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom bilingual build for multi-service or multi-location businesses.', features: ['Fully custom bilingual design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Laredo?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Does my site need to be in Spanish?', a: "In Laredo, absolutely. With 96% of the population being Hispanic, an English-only site is turning away the vast majority of your potential customers. We build bilingual sites that serve everyone in your market and rank for Spanish-language searches where agency competition is near zero." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a bilingual local-SEO foundation — fast load, clean structure, Spanish and English schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Laredo terms." },
      { q: 'Will my site handle an extreme-heat demand surge?', a: "Yes, and in Laredo that's critical. When July hits 112°F, HVAC emergency calls flood in — and the site that loads fast and makes calling easy gets the job. We build fast and keep the call button obvious, so your site converts under load." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your Laredo traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb — in Spanish and English." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting bilingual Laredo site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'laredo', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Laredo Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your Laredo website without losing rankings. Faster, bilingual, mobile-first rebuilds that convert more visitors into booked jobs. No lock-in.',
    eyebrow: 'Website Redesign · Laredo, TX',
    h1: 'Redesign your Laredo website without losing your rankings',
    h2Exact: 'Laredo Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, English-only in a Spanish-speaking market, hard to use on a phone, easy to ignore. We redesign Laredo contractor sites to convert more, serve both languages, and load faster — and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Laredo contractor sites for speed and bilingual conversions, build them to handle extreme-heat emergency surges, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema — including bilingual hreflang if relevant — and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, bilingual, and better structured than the old one.",
    problemHeading: "Signs your Laredo site is overdue for a redesign",
    painPoints: [
      { title: "It's English-only in a 96% Hispanic market", body: "For a high-ticket job, Laredo homeowners judge you by your site in seconds — and if it's only in English, most of them bounce immediately. Competitors who serve both languages win those jobs by default, even when your work is better." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your Laredo visitors before they ever see your offer. A redesign built mobile-first wins them back." },
      { title: "It can't keep up when heat emergencies surge", body: "An AC failure at 112°F in July is a medical emergency — homeowners are calling desperately, and the first site that loads and makes calling easy books the job. An old, slow site loses those leads at the exact moment they're worth the most. We rebuild for conversions and for the days your phone should be ringing non-stop." },
    ],
    servicesHeading: "What's in an OnwardCraft Laredo redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today — including the Spanish-language gap — so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly — including bilingual hreflang — so you keep the rankings and traffic you've already earned." },
      { name: 'Bilingual conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms in Spanish and English that actually get used. We design for booked jobs in both languages, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your Laredo traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the price of your jobs — in Spanish and English." },
      { name: 'Heat-surge and freeze ready rebuild', desc: "Rebuilt to stay fast and keep converting when HVAC emergency calls flood in during peak summer heat or the rare deep freeze, so the new site captures your biggest jobs instead of losing them.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you in Spanish and English as search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful bilingual rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you leads and rankings — including the Spanish-language gap — then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, bilingual, conversion-focused design you review and shape before we build." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast in Spanish and English and prepare every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and improve, not drop." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting in both languages, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Laredo redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full bilingual redesign for an established contractor site.', features: ['Up to 12 pages', 'Bilingual design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Heat-surge and freeze ready'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete bilingual rebuild for multi-service or multi-location sites.', features: ['Full custom bilingual rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Laredo?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size, bilingual requirements, and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema with bilingual hreflang where needed, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'Should the redesigned site be in Spanish?', a: "In Laredo, yes — it should be bilingual at minimum. With 96% of the population being Hispanic, a Spanish-language redesign unlocks the vast majority of your market and gives you near-zero competition from other agencies who only do English SEO." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger bilingual rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, English-only in a Spanish-speaking market, looks dated, isn't bringing in leads, or can't handle summer heat emergency surges, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content in Spanish and English, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the new site handle a heat-emergency demand surge?', a: "Yes, and in Laredo that's critical. When AC failure at 112°F sends homeowners to Google in a panic, the fast, easy-to-call site wins the job. We rebuild for speed and keep the call to action obvious so the site converts when demand peaks." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings — including any Spanish-language gap — what the redesign should fix, and a fixed-price quote with a timeline and a safe bilingual migration plan." },
    ],
  },
];

export const laredoCity = {
  citySlug: 'laredo', city: 'Laredo', state: 'Texas', stateAbbr: 'TX', metro: 'Laredo',

  titleTag: 'Laredo Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Laredo contractors — in Spanish and English. Get found, get booked, own your leads. Built for extreme heat.',

  eyebrow: 'Laredo · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Laredo contractors found and booked',
  h2Exact: 'Laredo Marketing Agency for Contractors',
  heroSubhead:
    "Bilingual websites, SEO, and local SEO built for Laredo's Spanish-speaking market and extreme-heat demand cycles. One team to get you ranking in Spanish and English, converting visitors into jobs, and off the rented-lead treadmill.",
  heroProof: ['Bilingual Spanish + English', 'Extreme heat season ready', 'No lock-in contracts'],
  primaryCta: 'Get my free Laredo audit',

  intro:
    "If you run a contracting business in Laredo, you're operating in one of the most unique markets in the United States. Nearly 96% of the city is Hispanic — almost the entire market searches in Spanish, yet almost no agencies optimize for it, which means near-zero competition for contractors who do. You're also in the hottest large city in the US, where HVAC failure at 112°F is a medical emergency, and the rare deep freeze turns a city built for extreme heat into a disaster zone. Winning here takes three things working together: a bilingual site that converts, SEO that ranks you in Spanish and English, and local SEO that puts you in the Map Pack before the next heat wave or freeze hits.",
  aioQuestion: 'How do Laredo contractors get more leads online?',
  aioAnswer:
    "Laredo contractors get more leads by combining a fast, bilingual mobile-first website with SEO that ranks them for high-intent searches in Spanish and English, and local SEO that wins the Google Map Pack. Because almost the entire market searches in Spanish and demand spikes dramatically during extreme summer heat and the rare deep freeze, the contractors who show up bilingually and are already ranking before those moments hit win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack in Spanish + English',
      blurb: "Get into the top three businesses Google pins to the map when Laredo searches \"cerca de mí\" or \"near me.\" The single highest-return move for most local businesses — and how you catch demand when heat emergencies hit.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher in both languages',
      blurb: "Rank for the Spanish and English money keywords your customers actually search, build an asset you own instead of renting traffic from ads, and measure it in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Bilingual sites that convert',
      blurb: "Fast, mobile-first bilingual websites engineered to turn visitors into booked jobs — and to stay fast when extreme heat floods your phone with HVAC emergencies — not English-only brochures that lose the market.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated or English-only site for bilingual speed and conversions, and migrate it carefully so you keep every bit of ranking you've already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Laredo?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO — all built for Laredo's bilingual Spanish-English market and extreme-heat demand cycles. Most clients combine a high-converting bilingual website with SEO and local SEO so they rank in both languages, convert, and own their leads." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — HVAC, plumbing, roofing, restoration, electrical, solar, and general contractors — so we understand emergency calls, extreme-heat and freeze-driven demand surges, and the international-trade professional homeowner base in Laredo." },
    { q: 'Why does Spanish-language SEO matter so much in Laredo?', a: "96% of Laredo is Hispanic, and almost the entire market searches in Spanish. Most marketing agencies optimize only in English, which means a contractor who shows up for Spanish searches faces near-zero competition. It's the single biggest untapped opportunity in the Laredo market." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Laredo areas do you serve?', a: "All of Laredo and Webb County — Del Mar Heights, North Laredo, Heights (El Azteca), Mines Road corridor, Padre Ranchitos, El Cenizo, Rio Bravo, and more — with genuine bilingual neighborhood pages rather than one generic Laredo page." },
    { q: 'Where should I start?', a: "Start with a free Laredo audit. We'll look at your website in Spanish and English, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};
