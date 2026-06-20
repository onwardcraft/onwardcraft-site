// FARGO — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Fargo's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// FARGO — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Fargo is a survival-level advantage',
  body:
    "Fargo-Moorhead is the coldest major metro in the Lower 48. January wind chills routinely hit -20°F to -40°F, and when a heating system fails at those temperatures, it's not an inconvenience — it's a survival emergency. That single fact shapes this entire market: heating contractors, plumbers chasing frozen pipes, and roofers dealing with catastrophic snow loads can be completely booked out for weeks every winter. But only if they're ranking before the cold arrives. Add the Red River flooding cycle — the river runs north, backing up against ice, and spring events like 2009, 2011, and 2019 have threatened to inundate the entire metro — and you have a two-season market where restoration and waterproofing work is enormous. Beyond weather, Fargo is the fastest-growing metro in the Northern Plains: NDSU, a Microsoft campus, Amazon, and a legitimate tech sector keep pushing homeownership and new construction higher every year. And because Fargo sits directly on the North Dakota–Minnesota border, any contractor serving the real metro must rank in both states — Fargo, ND on one side and Moorhead, MN on the other. Contractors who are invisible before October are invisible for five months. The ones who rank own the winter.",
  pullQuote: 'When your furnace quits at -30°F, the contractor on the map gets the call. The one who isn\'t ranking doesn\'t exist.',
  donut: {
    title: 'The Fargo weather reality',
    value: 52,
    centerLabel: 'annual snowfall inches',
    legend: [
      { label: 'Snow (in)', pct: 52, kind: 'teal' },
      { label: 'Rain events', pct: 48, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Winter heating emergencies (Oct–Mar) and spring Red River flooding (Mar–May)',
  seasonalDemand: [
    { m: 'J', v: 95, peak: true }, { m: 'F', v: 92, peak: true }, { m: 'M', v: 88, peak: true },
    { m: 'A', v: 82, peak: true }, { m: 'M', v: 58 }, { m: 'J', v: 62 }, { m: 'J', v: 60 },
    { m: 'A', v: 58 }, { m: 'S', v: 50 }, { m: 'O', v: 78, peak: true },
    { m: 'N', v: 88, peak: true }, { m: 'D', v: 94, peak: true },
  ],
  stats: [
    { value: '250K+', label: 'people across the Fargo-Moorhead two-state metro' },
    { value: '-20°F', label: 'to -40°F average January wind chills — heating failure is a survival emergency', accent: true },
    { value: 'Oct–Mar', label: 'heating emergency season when trade demand peaks hard' },
    { value: '2 states', label: 'Fargo (ND) and Moorhead (MN) — contractors must rank in both' },
  ],
  neighborhoods: [
    'South Fargo', 'West Fargo', 'Moorhead', 'Dilworth', 'Horace',
    'Harwood', 'Mapleton', 'North Fargo', 'Island Park', 'Osgood',
    'Downtown Fargo', 'Hawthorne', 'Woodrow Wilson', 'Clara Barton', 'Horace',
  ],
};

const AREAS = [
  'Fargo', 'West Fargo', 'Moorhead', 'Dilworth', 'Horace',
  'Harwood', 'Mapleton', 'South Fargo', 'North Fargo', 'Island Park',
  'Osgood', 'Downtown Fargo', 'Hawthorne', 'Casselton', 'Oxbow',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. That's especially true in Fargo, where you have a five-month winter where every heating call, frozen pipe call, and ice dam call goes to whoever's ranking — and if that's not you, it's just gone. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, on both sides of the Red River, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We understand the Fargo winter',
    body: "Heating emergencies at -30°F, frozen pipes, ice dams, roof collapses under snow loads. We build your SEO around the survival-level demand that hits every October and doesn't let up until March — so you're already ranking when the cold arrives.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners three competitors also bought — especially not during your peak winter and spring flooding seasons.",
  },
  {
    title: 'We understand the two-state reality',
    body: "Fargo, ND and Moorhead, MN are one metro across the Red River. Most agencies treat it like a single-state city. We target both sides so you're visible to every potential customer in the real market.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Fargo contractor gets around 800 local \"near me\" impressions a month across a handful of neighborhoods. Moving from page-two invisibility into the top three is the difference between a quiet phone and a booked-out calendar — and in a market where the busiest five months are winter emergencies, that gap is life or death for a seasonal business. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Fargo', state: 'North Dakota', stateAbbr: 'ND', metro: 'Fargo-Moorhead',
  heroProof: ['Built for the trades', 'Fargo + Moorhead coverage', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const fargoLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'fargo', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Fargo Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Search your service in Fargo and three businesses show up on the map. We get you into those three before winter hits — honest pricing, no lock-in, free audit. Covering Fargo ND and Moorhead MN.',
    eyebrow: 'Local SEO · Fargo-Moorhead',
    h1: 'When Fargo searches for what you do, be the first name they find',
    h2Exact: 'Fargo Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. In a market where the busiest five months are winter emergencies, we get you into that top three for Fargo and Moorhead before the cold arrives — so the heating call lands with you.",
    primaryCta: 'Get my free Fargo audit',
    intro:
      "Fargo local SEO comes down to one fact: the coldest major metro in the Lower 48 has a market where heating failure is a survival emergency. When a homeowner's furnace quits at -30°F or a pipe bursts, they search, they tap the first name on the map, and they call. If that's not you, that job is gone. The contractors who rank before October are booked out all winter. The ones who aren't ranking are invisible for five months. And because the real Fargo market straddles the Red River — Fargo, ND on one side, Moorhead, MN on the other — ranking in both states is the game. Here's how you do it.",
    aioQuestion: 'How do Fargo businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want in both North Dakota and Minnesota; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Fargo-Moorhead neighborhoods. In a market dominated by winter emergencies, the winners get in place before October, target heating and emergency terms specifically, and show up on both sides of the Red River.",
    problemHeading: "If your phone is quiet in winter, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now from a Fargo address. See those three businesses Google pins to the map? When a furnace dies at -30°F, they get the call. Everyone below them basically doesn't exist, and there's no time for a homeowner to scroll. Getting into that top three before winter is the single highest-return move a Fargo contractor can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Fargo homeowner to four contractors, then bill each of you to fight over them. It's a treadmill. Local SEO builds the opposite: a homeowner in West Fargo searches, finds you, and calls you — and nobody else got that lead. Over time you stop renting and start owning the pipeline." },
      { title: "You're only ranking in one state", body: "Fargo and Moorhead are one metro. A contractor visible in Fargo, ND but invisible in Moorhead, MN is leaving half the market on the table. We target both sides of the Red River so every homeowner in the real metro can find you." },
    ],
    servicesHeading: 'What it actually takes to rank you in Fargo',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Fargo-Moorhead searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks across both states. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes people pick up the phone when the heat goes out." },
      { name: 'Neighborhood pages', desc: "Real pages for South Fargo, West Fargo, Moorhead, Dilworth, Horace and the rest, so you rank for the neighborhood someone's actually searching, not just \"Fargo.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Fargo and Moorhead sources Google trusts — local press, chamber, associations, partners. This is what separates page one from page two here." },
      { name: 'Two-state targeting', desc: "Fargo, ND and Moorhead, MN are one metro but two states. We optimize your presence for both so you capture every homeowner in the real market — not just one side of the river.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across Fargo and Moorhead and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first for both states, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week — which is why starting before October matters so much in a winter-heavy market." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across both Fargo and Moorhead, plus the on-page work to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood on either side of the river." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across Fargo, West Fargo, and Moorhead.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across both states.', features: ['Everything in Local Growth', 'Local link building', 'Two-state ND + MN targeting', 'Multi-neighborhood service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Fargo?', a: "Most Fargo engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after and whether you need coverage in both North Dakota and Minnesota. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. Competitive Fargo-Moorhead keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. The critical point: you need to start before October — building those rankings in November when the heating calls are already flying is too late." },
      { q: 'What makes Fargo local SEO different?', a: "Two things set Fargo apart. First, the winters are genuinely extreme — we're talking the coldest major metro in the Lower 48, with January wind chills down to -40°F. Heating failure is a survival emergency, and homeowners call whoever's on the map within minutes. Second, the metro straddles two states: Fargo, ND and Moorhead, MN are one market, and you have to rank in both to capture the whole area." },
      { q: 'Do you target both Fargo, ND and Moorhead, MN?', a: "Yes, and this is a key difference from generic agencies. The Fargo-Moorhead metro crosses the Red River into Minnesota, so we optimize for both states. A contractor only visible in North Dakota is invisible to every Moorhead and Dilworth homeowner who searches." },
      { q: 'Which areas do you cover?', a: "The full Fargo-Moorhead metro: Fargo, West Fargo, Moorhead, Dilworth, Horace, Harwood, Mapleton, South Fargo, North Fargo, Island Park, and the surrounding communities on both sides of the Red River. We build genuine neighborhood pages instead of one generic Fargo page." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, electrical, restoration, and general contractors. In Fargo that means we understand heating emergencies, frozen pipes, ice dam damage, snow load roof repairs, and Red River flood restoration — and we build your local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. In a market where someone needs a contractor fast during a heating emergency, being in AI results is quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads — the same Fargo homeowner sold to four contractors. We build rankings, a Google profile, and a review base that send leads straight to you. During a Fargo winter, the homeowner with a broken furnace at midnight isn't browsing Angi — they're tapping whoever's on the map." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across Fargo and Moorhead, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'fargo', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Fargo SEO Company | Rank Higher, Get Leads | OnwardCraft',
    metaDescription:
      'Fargo SEO that ranks contractors on Google and brings in leads you own. Built for a two-state winter market. Revenue-tied reporting, no lock-in contracts. Free Fargo SEO audit.',
    eyebrow: 'SEO Services · Fargo-Moorhead',
    h1: 'Get your Fargo business to the top of Google and keep it there',
    h2Exact: 'Fargo SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what Fargo and Moorhead customers search and the leads keep coming — including the winter heating emergencies and spring flood restoration calls that make or break a year here.",
    primaryCta: 'Get my free Fargo SEO audit',
    intro:
      "Fargo SEO comes down to one question: when someone in Fargo or Moorhead searches what you do, are you on page one or page two? Page two might as well be page fifty. That's true everywhere, but in a market where the busiest five months are survival-level winter emergencies and spring Red River flooding, being invisible before October means a competitor's phone rings instead of yours for the best-paying, most urgent work of the year. We get contractors ranking for the money keywords in the Fargo-Moorhead two-state metro — and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Fargo businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content tied to specific Fargo and Moorhead neighborhoods, and earning links from trusted local sources. In the Fargo market, ranking for heating emergency and winter weather damage terms before October — and for Red River flood restoration terms before spring — are two of the highest-value moves a contractor can make.",
    problemHeading: "Three reasons your Fargo site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two during the busiest months", body: "Almost nobody clicks past the first page of Google. In a market where January wind chills hit -40°F and heating failure is a survival emergency, the homeowner searches, taps the first couple of results, and calls within minutes. If you're not on page one for heating, plumbing, or restoration terms before the season, those high-urgency, high-ticket jobs go to whoever is." },
      { title: "You're renting traffic instead of owning it", body: "Ads can work, but the moment your card stops, the leads stop — and in Fargo you'd need to run ads all winter long or lose your peak season entirely. SEO builds an asset you own: rankings that keep producing leads through every heating emergency and spring flood season, at a fraction of the per-lead cost of paid traffic." },
      { title: "You're missing the seasonal demand that defines this market", body: "Fargo has one of the most extreme seasonal demand patterns in the country: Oct–Mar for heating emergencies and winter weather damage, Mar–May for Red River flooding and spring restoration. The contractors who rank for those terms ahead of the season capture the work. The ones who don't are invisible during the months that matter most." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings in Fargo',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms Fargo and Moorhead customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real Fargo-Moorhead and industry sources. Links are often what separate page one from page two in a competitive market." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across both Fargo and Moorhead alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Seasonal & emergency SEO', desc: "We rank you for the heating emergency, frozen pipe, ice dam, snow damage, and Red River flood restoration searches that drive the busiest months in Fargo, so you're visible before the season hits.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Fargo-Moorhead leads — with a hard eye on winter and spring seasonal terms." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the heating emergency and flood restoration terms that matter here." },
      { name: 'Build authority', desc: "Links and citations from trusted Fargo-Moorhead and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Fargo SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and both states.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Fargo-Moorhead search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal & emergency SEO', 'Two-state ND + MN coverage', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Fargo?', a: "Most Fargo SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are, how much content and link work you need, and whether you require coverage in both North Dakota and Minnesota. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Fargo?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6. The critical thing in Fargo is timing: if your busy season starts in October, you want to be building rankings in June, July, August — not scrambling in September. SEO compounds, so the earlier you start, the better your winter looks." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. In Fargo's seasonal market, contractors who rely solely on ads have to run them all winter — SEO keeps producing even when you're not actively spending, including through your peak heating season." },
      { q: 'Should my Fargo SEO target seasonal demand?', a: "Absolutely. The Fargo-Moorhead market has one of the most extreme seasonal demand curves in the country. Heating emergencies, frozen pipes, ice dams, and snow damage run hard from October through March. Red River flooding and spring restoration peak March through May. Ranking for those terms takes months to build — you have to be in place before the season, not chasing it after." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal/emergency SEO and AI search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. When someone searches for a Fargo heating contractor in an AI tool at 11pm in January, we want your business to be what gets surfaced. We structure your content and schema so AI engines can read, trust, and cite you." },
      { q: 'Which areas around Fargo do you cover?', a: "The full Fargo-Moorhead metro on both sides of the Red River: Fargo, West Fargo, Moorhead, Dilworth, Horace, Harwood, Mapleton, and surrounding communities in both North Dakota and Minnesota. We build genuine local pages rather than one generic Fargo page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. During a Fargo winter heating emergency, homeowners don't browse lead marketplaces — they search, find whoever's ranking, and call. The more you own your search visibility, the less you depend on paying brokers for shared leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today in Fargo and Moorhead, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business — including a look at where you stand heading into the heating season. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'fargo', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Fargo Web Design Company | Sites That Convert | OnwardCraft',
    metaDescription:
      'Fargo web design that turns visitors into booked jobs — fast, mobile-first sites built for contractors in a brutal winter market. Covering Fargo ND and Moorhead MN. Transparent pricing, you own it.',
    eyebrow: 'Web Design · Fargo-Moorhead',
    h1: 'Fargo web design that turns visitors into booked jobs',
    h2Exact: 'Fargo Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Fargo and Moorhead contractors fast, mobile-first sites engineered to turn visitors into booked work — because when a furnace fails at -30°F, the homeowner taps whatever is fast, clear, and local.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Fargo contractor websites lose leads quietly: slow on a phone, buried call button, no clear offer. In a market where a January heating emergency sends homeowners searching at midnight, a clunky site means a missed call that went to whoever loaded faster. We build sites that load fast, look like the professional you are, serve both sides of the Red River, and turn Fargo and Moorhead visitors into booked jobs — built to win in a market where winters don't forgive slow or unclear.",
    aioQuestion: 'What makes a good contractor website in Fargo?',
    aioAnswer:
      "A good Fargo contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific Fargo and Moorhead neighborhoods you serve. Because Fargo's busiest months are winter emergencies when homeowners need a contractor fast and patience is zero, mobile speed and an obvious next step are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next guy — and in a Fargo winter heating emergency, the homeowner has no patience to search around. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Fargo and Moorhead visitors are on mobile, and they bounce if your site takes more than a few seconds to load. In a heating emergency at midnight in January, slow means they called someone else. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking." },
      { title: "It doesn't speak to your community", body: "Fargo homeowners are practical, straight-talking, and value local over corporate. A generic website template that could be any city loses that trust instantly. We build sites that name the Fargo and Moorhead neighborhoods you work, speak plainly about what you do, and signal that you're a real local business — not a national chain." },
    ],
    servicesHeading: "What's in an OnwardCraft Fargo website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your Fargo-Moorhead service area, and the jobs you actually want." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your Fargo and Moorhead traffic is — especially the emergency calls that happen at odd hours in brutal weather." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step — especially important when a homeowner needs help fast." },
      { name: 'Copy that sells', desc: "Words that speak to Fargo's practical, straight-talking homeowners and book the job, not corporate filler text that reads like everyone else." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages for both North Dakota and Minnesota." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Two-state neighborhood pages', desc: "Pages built around the neighborhoods you serve in both Fargo, ND and Moorhead, MN — so you stand out as local on both sides of the Red River instead of reading like a generic city template.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your Fargo-Moorhead service area, your best jobs, and your competitors, then map the site around booking more of the work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one — for both Fargo and Moorhead coverage." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting, including seasonal adjustments heading into winter." },
    ],
    pricing: {
      heading: 'Transparent Fargo web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Two-state ND + MN coverage'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Fargo?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage — and we can prioritize if you need to be live before winter." },
      { q: 'Will my site help me win heating and emergency calls?', a: "That's exactly what we design for in Fargo. When a furnace fails at -30°F, the homeowner searches on their phone, sees whoever loads fast with a clear call button, and taps. We put your call button above the fold, keep load times under three seconds, and make the offer obvious — so you get that call instead of your competitor." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages for both Fargo and Moorhead. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Fargo-Moorhead terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your Fargo and Moorhead traffic comes from — especially the emergency calls that happen at odd hours in brutal winter weather." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Fargo-Moorhead site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'fargo', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Fargo Website Redesign | More Leads, No Traffic Loss | OnwardCraft',
    metaDescription:
      'Redesign your Fargo website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs — covering Fargo ND and Moorhead MN. Free audit.',
    eyebrow: 'Website Redesign · Fargo-Moorhead',
    h1: 'Redesign your Fargo website without losing your rankings',
    h2Exact: 'Fargo Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — and in Fargo, every week from October through March is a potential heating emergency call you're not getting. We redesign Fargo and Moorhead contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Fargo and Moorhead contractor sites for speed and conversions, build them to serve both sides of the Red River, and migrate with the redirects and SEO care that protect the traffic you already have — because losing rankings heading into a Fargo winter is not an option.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one — which matters especially in Fargo where losing organic visibility before winter means missing your peak season.",
    problemHeading: "Signs your Fargo site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "Fargo homeowners are practical and value straight-talking local businesses. An old, cluttered design quietly tells them you're not the professional they want for a high-ticket heating repair or flood restoration job — even when your work is better than whoever looks more polished." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing Fargo and Moorhead visitors before they ever see your offer — including the emergency calls that come in at 11pm in January when a furnace goes out. A redesign built mobile-first wins them back." },
      { title: "It doesn't convert the emergency traffic that defines your season", body: "Winter emergency demand in Fargo is high-urgency and high-ticket. A visitor with a burst pipe or failed furnace has no patience for a confusing site. We rebuild for conversions and for the neighborhoods you actually serve — so when those calls happen, they land on you." },
    ],
    servicesHeading: "What's in an OnwardCraft Fargo redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems — especially for the seasonal emergency traffic that defines this market." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned going into your next busy season." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings, especially critical for emergency searches on mobile." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all of your Fargo and Moorhead traffic lives — and where every heating emergency call starts." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and signals to Fargo homeowners that you're the real local professional." },
      { name: 'Two-state neighborhood rebuild', desc: "Rebuilt around the neighborhoods you serve in both Fargo, ND and Moorhead, MN — so the new site is genuinely local on both sides of the Red River instead of reading like a generic template.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you leads and rankings, then map a redesign that fixes it without breaking what already works — with a close eye on seasonal ranking health." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration across both Fargo and Moorhead coverage." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and improve, not drop — especially critical before a Fargo winter." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting, plus ongoing speed and updates heading into each season." },
    ],
    pricing: {
      heading: 'Transparent Fargo redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Two-state ND + MN rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Fargo?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Losing rankings heading into a Fargo winter is not something we take lightly — it's something we build the whole migration process to prevent." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage — and we can prioritize timing if you have a seasonal deadline." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is hard to update, isn't bringing in leads, or loses you emergency calls during the heating season, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost — including the local pages that help you rank in both Fargo and Moorhead." },
      { q: 'Will the redesign help me win emergency calls?', a: "Yes, and that's one of our primary goals for Fargo contractors. We rebuild around fast load times, prominent call buttons, and clear emergency service messaging — so when a homeowner's furnace fails at midnight in January, your redesigned site converts that visit into a call." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan — including a look at where you stand heading into the busy season." },
    ],
  },
];

export const fargoCity = {
  citySlug: 'fargo', city: 'Fargo', state: 'North Dakota', stateAbbr: 'ND', metro: 'Fargo-Moorhead',

  titleTag: 'Fargo Marketing for Contractors | Web, SEO & Leads | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Fargo and Moorhead contractors. Get found before winter, rank in both states, and own your leads. Free Fargo audit.',

  eyebrow: 'Fargo-Moorhead · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Fargo contractors found and booked before winter',
  h2Exact: 'Fargo Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for the coldest major metro in the Lower 48. Rank in both Fargo, ND and Moorhead, MN before October — and own the heating season instead of watching competitors take it.",
  heroProof: ['Built for the trades', 'Fargo + Moorhead coverage', 'No lock-in contracts'],
  primaryCta: 'Get my free Fargo audit',

  intro:
    "If you run a contracting business in Fargo-Moorhead, you're operating in one of the most extreme and seasonal home-services markets in the country. January wind chills drop to -40°F, heating failure is a survival emergency, frozen pipes and ice dam damage are enormous contractor categories, and Red River spring flooding can send restoration work surging for months. The contractors who are already ranking when October arrives book the winter. The ones who aren't, aren't visible for five months. And because the real metro straddles the North Dakota–Minnesota border, ranking in both states is the whole game. Winning here takes three things working together: a site that converts emergency calls, SEO that ranks you for what people search before the seasons hit, and local SEO that puts you in the Map Pack across both Fargo and Moorhead. Here's how we help Fargo contractors do exactly that.",
  aioQuestion: 'How do Fargo contractors get more leads online?',
  aioAnswer:
    "Fargo contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack across both Fargo, ND and Moorhead, MN. Because the market is defined by five months of extreme winter demand and a spring Red River flooding cycle, the contractors who rank for heating emergency and restoration terms before the season — and who show up on both sides of the river — win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack before winter',
      blurb: "Get into the top three businesses Google pins to the map when Fargo and Moorhead search \"near me.\" In a market where heating failure is a survival emergency, being in the Map Pack before October is the highest-return move a local contractor can make.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers search in both North Dakota and Minnesota — heating emergencies, flood restoration, and more — and build an asset you own instead of renting traffic from ads.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert emergency calls',
      blurb: "Fast, mobile-first websites that turn visitors into booked jobs — because when a furnace quits at -30°F, the homeowner taps whoever loads fast, looks local, and makes the next step obvious.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, migrate it carefully so you keep every ranking you've earned, and be ready to convert the traffic that matters most before your next busy season.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Fargo?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads across both Fargo, ND and Moorhead, MN before the busiest seasons hit." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, electrical, restoration, and general contractors. In Fargo that means we understand heating emergencies at -40°F wind chills, frozen pipe calls, ice dam damage, snow load roof repairs, and Red River flood restoration." },
    { q: 'Why does the Fargo market need a different approach?', a: "Fargo is the coldest major metro in the Lower 48, with an extreme seasonal demand curve dominated by winter emergencies. The metro also straddles two states — contractors must rank in both North Dakota and Minnesota to cover the real market. And the homeowner base here values practical, straight-talking local businesses over anything that seems corporate or generic." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Fargo and Moorhead areas do you serve?', a: "The full Fargo-Moorhead metro on both sides of the Red River: Fargo, West Fargo, Moorhead, Dilworth, Horace, Harwood, Mapleton, South Fargo, North Fargo, Island Park, and surrounding communities in both North Dakota and Minnesota." },
    { q: 'Where should I start?', a: "Start with a free Fargo audit. We'll look at your website, your rankings, and your Map Pack presence in both states, then tell you the one or two moves that will bring in the most work before your next busy season. No pitch deck, just a plan." },
  ],
};
