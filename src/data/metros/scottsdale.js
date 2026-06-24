// SCOTTSDALE — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Scottsdale's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// SCOTTSDALE — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Scottsdale is a luxury-market arms race',
  body:
    "Scottsdale is one of the wealthiest mid-size cities in the United States, and it shows in how people hire. North Scottsdale neighborhoods like Troon, DC Ranch, and McDowell Mountain Ranch are packed with homes priced between $1M and $5M — and those homeowners research every contractor heavily before they pick up the phone. A Google Business Profile that looks like everyone else's is invisible here. On top of that, nearly every Scottsdale neighborhood sits inside an HOA with strict exterior standards: before a roofer replaces a shingle color or a painter touches a fascia board, someone needs to know the approval process cold. That's a genuine differentiator most out-of-town agencies miss entirely. Add in the fact that Scottsdale has one of the highest per-capita pool rates in the country, that 110°F summers make HVAC failure a genuine medical emergency, and that a large snowbird population arrives each October from the Midwest and Canada — and you have a market where the contractor who ranks and looks premium captures an outsized share of very high-value jobs.",
  pullQuote: 'In a market of luxury homes, strict HOAs, and 110°F summers, the contractor who ranks first and looks the part books the work at the best margins.',
  donut: {
    title: 'HOA governance in Scottsdale',
    value: 82,
    centerLabel: 'HOA communities',
    legend: [
      { label: 'HOA-governed', pct: 82, kind: 'teal' },
      { label: 'Non-HOA', pct: 18, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'HVAC peaks Jun–Sep; exterior/roof work Nov–Feb; snowbird activation Oct–Apr',
  seasonalDemand: [
    { m: 'J', v: 58, peak: true }, { m: 'F', v: 60, peak: true }, { m: 'M', v: 52 },
    { m: 'A', v: 55 }, { m: 'M', v: 80, peak: true }, { m: 'J', v: 98, peak: true },
    { m: 'J', v: 100, peak: true }, { m: 'A', v: 95, peak: true }, { m: 'S', v: 75 },
    { m: 'O', v: 62, peak: true }, { m: 'N', v: 65, peak: true }, { m: 'D', v: 55, peak: true },
  ],
  stats: [
    { value: '$1M–$5M+', label: 'home values in North Scottsdale communities like Troon and DC Ranch' },
    { value: '~82%', label: 'of Scottsdale neighborhoods are HOA-governed, requiring contractor knowledge of approval processes', accent: true },
    { value: '110°F+', label: 'summer highs — HVAC failure is a genuine medical emergency Jun–Sep' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks when wealthy homeowners search' },
  ],
  neighborhoods: [
    'Old Town', 'Fashion Square', 'DC Ranch', 'Troon', 'McDowell Mountain Ranch',
    'McCormick Ranch', 'Gainey Ranch', 'Paradise Valley', 'Fountain Hills',
    'Cave Creek', 'Carefree', 'Grayhawk', 'Pinnacle Peak', 'North Scottsdale',
    'South Scottsdale',
  ],
};

const AREAS = [
  'Old Town Scottsdale', 'North Scottsdale', 'South Scottsdale', 'DC Ranch',
  'Troon', 'McDowell Mountain Ranch', 'McCormick Ranch', 'Gainey Ranch',
  'Paradise Valley', 'Fountain Hills', 'Cave Creek', 'Carefree',
  'Grayhawk', 'Pinnacle Peak', 'Fashion Square',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs — and in Scottsdale that means pool equipment, HOA-compliant exterior work, and luxury-tier finishes. We understand 110°F HVAC emergencies, HOA approval processes, and snowbird maintenance cycles, so everything we build is shaped around how your customers actually search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners in DC Ranch or Gainey Ranch that three competitors also bought.",
  },
  {
    title: 'We actually speak Scottsdale',
    body: "Neighborhood-by-neighborhood targeting from Old Town to Troon, with the HOA-aware and luxury-market messaging that wins trust with North Scottsdale homeowners. The stuff a national shop can't do by swapping a city name into a template.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Scottsdale contractor gets around 1,500 local \"near me\" impressions a month across a handful of luxury neighborhoods. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a calendar booked with high-margin jobs — and in a market of $2M homes, one extra job a month easily covers a year of marketing. In your free audit, we model the real numbers for your business.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Scottsdale', state: 'Arizona', stateAbbr: 'AZ', metro: 'Scottsdale-Phoenix East Valley',
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const scottsdaleLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'scottsdale', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Scottsdale Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Scottsdale Local SEO that wins you the top three on the map, from Old Town to North Scottsdale. HOA communities, luxury neighborhoods, pool and HVAC.',
    eyebrow: 'Local SEO · Scottsdale, AZ',
    h1: 'Scottsdale Local SEO that wins you the top three on the map from Old Town to Troon',
    h2Exact: 'Scottsdale Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone in DC Ranch or Gainey Ranch searches \"near me.\" Everyone below them basically doesn't exist. In a market of luxury homes and strict HOAs, we get you into that top three for your neighborhoods, so the call lands with you.",
    primaryCta: 'Get my free Scottsdale audit',
    intro:
      "Scottsdale Local SEO comes down to one thing: when a homeowner in McCormick Ranch or Troon searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. This is a high-wealth, HOA-dominated market where homeowners research heavily before calling anyone, and getting into those top three spots in the neighborhoods you serve is how you win their high-margin jobs.",
    aioQuestion: 'How do Scottsdale businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for your exact services and Scottsdale neighborhoods; consistent name, address, and phone listings across the web; a steady stream of real reviews that signal trust to luxury-market buyers; and local content tied to real Scottsdale neighborhoods and HOA communities. In a market of $1M–$5M+ homes, reviews and premium positioning matter more than almost anywhere else — wealthy homeowners read everything before they call.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks. Scottsdale homeowners — especially in North Scottsdale — research before they buy, and if you're not in the top three for their neighborhood, most of them never find you. Getting into that top three for DC Ranch, Troon, or McCormick Ranch is usually the single highest-return move a Scottsdale contractor can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Scottsdale homeowner to four contractors, then bill each of you to fight over them. In a luxury market where one job can mean $15,000–$50,000 in revenue, you should own that relationship from the first click. Local SEO builds the opposite: a lead finds you, calls you, and nobody else got it." },
      { title: "You're invisible to HOA communities and snowbirds", body: "Roughly 82% of Scottsdale neighborhoods are HOA-governed. Homeowners in those communities want contractors who understand the approval process — and they search for that explicitly. Snowbirds arriving from October through April need reliable maintenance contractors fast. If your local presence doesn't speak to those realities, you're leaving the most valuable Scottsdale work on the table." },
    ],
    servicesHeading: 'What it actually takes to rank you in Scottsdale',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Scottsdale neighborhoods and HOA communities you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing across Arizona directories." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. In a luxury market, reviews are what convince $2M homeowners to call you instead of the next result." },
      { name: 'Neighborhood pages', desc: "Real pages for DC Ranch, Troon, McCormick Ranch, Gainey Ranch, and the rest — so you rank for the neighborhood someone's actually searching, not just \"Scottsdale.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Scottsdale and Arizona sources Google trusts — local press, HOA community sites, trade associations, and partners." },
      { name: 'HOA-aware local content', desc: "Content that speaks to HOA approval processes, exterior standards, and the specific concerns of luxury-community homeowners — the angle most competitors miss entirely.", featured: true },
      { name: 'AI search readiness', desc: "More Scottsdale homeowners start research in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you when someone searches for a premium contractor.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your Scottsdale neighborhoods and HOA communities, and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. In a luxury market, reviews compound even faster because wealthy buyers read them closely." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across North Scottsdale, Old Town, Fountain Hills, Cave Creek, and beyond, plus HOA-aware messaging." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses competing across Scottsdale neighborhoods and HOA communities.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across North Scottsdale and beyond.', features: ['Everything in Local Growth', 'Local link building', 'HOA-aware content', 'Multi-neighborhood service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Scottsdale?', a: "Most Scottsdale engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after. Our tiers are right above this — no hidden fees, no long contract, and we confirm exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The competitive Scottsdale keywords — especially North Scottsdale luxury neighborhoods — usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising page one in 30 days in a market this premium is selling you something." },
      { q: 'What makes Scottsdale local SEO different?', a: "Two things. It's a luxury market where homeowners research heavily before calling, so reviews and premium positioning matter more than almost anywhere else. And roughly 82% of neighborhoods are HOA-governed, so the contractor who understands exterior approval processes and signals that in their content wins trust that generic competitors never build." },
      { q: 'Can you help me reach snowbird and second-home owners?', a: "Yes. Snowbirds arriving from October through April need maintenance contractors fast and trust Google search heavily to find them. We optimize your profile and content for the searches that winter visitors run, so you capture that seasonal wave before competitors even know it's coming." },
      { q: 'Which areas do you cover in Scottsdale?', a: "All of Scottsdale and the surrounding communities — Old Town, North Scottsdale, DC Ranch, Troon, McDowell Mountain Ranch, McCormick Ranch, Gainey Ranch, Paradise Valley, Fountain Hills, Cave Creek, Carefree, and more. We build genuine neighborhood pages instead of one generic Scottsdale page." },
      { q: 'Do you work with pool and HVAC contractors specifically?', a: "Absolutely. Scottsdale has one of the highest per-capita pool rates in the US, and 110°F summers make HVAC a year-round emergency business. We understand those categories deeply and build local SEO that captures the peak-season searches when they matter most." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more Scottsdale homeowners — especially in luxury communities — start their contractor research in AI tools rather than classic search. We structure your content and schema so those engines can read, trust, and cite your business." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk — the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads that your competitors also bought. We build rankings, a Google profile, and a review base that send high-value Scottsdale homeowners directly to you. Over time you lean on lead brokers less because the work comes to you first." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your Scottsdale neighborhoods, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. It's a straight diagnosis of what your Scottsdale Local SEO needs to win the top three on the map, from Old Town to North Scottsdale, with no pitch deck attached." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'scottsdale', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Scottsdale SEO Company | Rankings You Own | OnwardCraft',
    metaDescription:
      'Scottsdale SEO that builds rankings you actually own, from Old Town to North Scottsdale. Luxury-market targeting, HOA-aware content, no lock-in. Free audit.',
    eyebrow: 'SEO Services · Scottsdale, AZ',
    h1: 'Scottsdale SEO that builds rankings you actually own, even against the luxury-market competition',
    h2Exact: 'Scottsdale SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Scottsdale customers search and the leads keep coming. We build that ranking with luxury-market and HOA-aware strategy — and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free Scottsdale SEO audit',
    intro:
      "Scottsdale SEO comes down to one question: when a homeowner in DC Ranch or Troon searches what you do, are you on page one or page two? Page two might as well be page fifty in a market where luxury buyers research before they call. We get contractors ranking for the money keywords — HVAC emergencies in summer, pool work year-round, exterior and roofing when the cool season arrives — and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Scottsdale businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers in luxury Scottsdale neighborhoods search, publishing genuinely useful content tied to HOA communities and specific neighborhoods, and earning links from trusted Arizona and local sources. In a market where homeowners spend $20,000–$100,000+ on a single project, trust signals in content and reviews are what move the final ranking needle.",
    problemHeading: "Three reasons your Scottsdale site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "North Scottsdale homeowners research before they buy. If you're not in the top handful of results for what you sell — pool equipment, HVAC, roofing — your site is invisible no matter how good your work is. Getting to page one for the right keywords is usually the single highest-ROI move you can make." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. In a luxury market where one job means real revenue, SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost of running ads in a premium zip code." },
      { title: "You're not ranking for seasonal and HOA demand", body: "Scottsdale demand swings hard: HVAC peaks Jun–Sep, exterior and roofing work happens Nov–Feb when it's cool enough, and snowbirds activate the market Oct–Apr. HOA communities need contractors who understand exterior approval processes. The contractors who rank for those specific contexts ahead of time book the best-margin work." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings in Scottsdale',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your Scottsdale customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what luxury buyers search, earn links, and bring in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real Scottsdale and Arizona sources. In a premium market, links from trusted local sources matter more than generic directories." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across your Scottsdale neighborhoods alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Seasonal & HOA-aware SEO', desc: "We rank you for summer HVAC emergencies, cool-season roofing and exterior work, snowbird activation, and the HOA-approval searches that most competitors never target.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you — where a growing share of Scottsdale's research-heavy buyers start their search.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Scottsdale leads — HVAC, pool, roofing, and beyond." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank in a competitive Arizona market." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including seasonal, HOA-aware, and snowbird terms that your competitors overlook." },
      { name: 'Build authority', desc: "Links and citations from trusted Scottsdale and Arizona sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set or neighborhood." },
    ],
    pricing: {
      heading: 'Transparent Scottsdale SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core Scottsdale keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and Scottsdale neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Scottsdale search year-round.', features: ['Everything in SEO Growth', 'Seasonal & HOA-aware content', 'Aggressive link building', 'Multi-neighborhood coverage', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Scottsdale?', a: "Most Scottsdale SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Scottsdale?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6. Luxury neighborhood terms in North Scottsdale can take longer because competition is stiff and buyers are discerning. SEO compounds, so the gains keep building." },
      { q: 'Is SEO better than Google Ads in Scottsdale?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying — and luxury zip codes in Scottsdale have expensive clicks. SEO is an asset you own that keeps producing leads at a lower cost per lead over time, especially important when one booked job can mean $20,000+ in revenue." },
      { q: 'Should my Scottsdale SEO target seasonal demand?', a: "Absolutely. HVAC demand spikes Jun–Sep when temperatures hit 110°F and failure is a genuine emergency. Roofing and exterior work peaks Nov–Feb when the weather is cool enough to work. Snowbird owners activate the market Oct–Apr. Ranking takes months to build, so you have to be in position before the season, not after." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal, HOA-aware, and AI-search optimization. We confirm exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. Scottsdale homeowners, especially in luxury communities, research thoroughly — and AI tools are increasingly where that research starts. We structure your content so those engines can read, trust, and cite your business." },
      { q: 'Which areas around Scottsdale do you cover?', a: "All of Scottsdale and the East Valley — Old Town, North Scottsdale, DC Ranch, Troon, McDowell Mountain Ranch, McCormick Ranch, Gainey Ranch, Paradise Valley, Fountain Hills, Cave Creek, and Carefree — with genuine local pages rather than one generic Scottsdale page." },
      { q: 'How do you help me compete in HOA communities?', a: "We build content and page structure that speaks directly to HOA exterior standards and approval processes — because Scottsdale homeowners in governed communities search for contractors who understand those constraints. It's a differentiator most competitors never address." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. It's how we show that Scottsdale SEO can build rankings you actually own across your luxury neighborhoods, with no pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'scottsdale', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Scottsdale Web Design Company | Built to Book Work | OnwardCraft',
    metaDescription:
      'Scottsdale web design that converts luxury homeowners into booked jobs — fast, mobile-first sites built for HOA communities, pool contractors, HVAC, and.',
    eyebrow: 'Web Design · Scottsdale, AZ',
    h1: 'Scottsdale web design engineered to bring in real work from Troon to Old Town',
    h2Exact: 'Scottsdale Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Scottsdale contractors fast, mobile-first sites that look premium enough to earn the trust of North Scottsdale buyers — and engineered to turn DC Ranch homeowners into booked jobs.",
    primaryCta: 'Get my free quote',
    intro:
      "Scottsdale web design has one job that most contractor sites fail: they lose leads quietly, with slow phone load, no premium look, a buried call button, and nothing that speaks to HOA communities or luxury buyers. Done right, it fixes all of that. We build sites that load fast, look like the polished professional you are, and turn McDowell Mountain Ranch and Gainey Ranch visitors into booked work — built for a market where homeowners research before they call anyone.",
    aioQuestion: 'What makes a good contractor website in Scottsdale?',
    aioAnswer:
      "A good Scottsdale contractor website loads in under three seconds on a phone, looks premium enough to earn trust from $2M-home buyers, puts the call button and a clear offer above the fold, proves credibility with reviews and real project photos, and names the specific HOA communities and neighborhoods you serve. Because Scottsdale homeowners research heavily before calling — especially in North Scottsdale — mobile speed, premium presentation, and trust signals are what separate a site that books luxury jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in Scottsdale work",
    painPoints: [
      { title: "It doesn't look premium enough to earn luxury trust", body: "A homeowner in Troon or DC Ranch is evaluating your website the way they evaluate the contractor who shows up at their door. If the site looks outdated or generic, they assume the work is too. In a market of $1M–$5M+ homes, first impressions are everything — and the first impression is your website." },
      { title: "It's too slow on a phone", body: "Most of your Scottsdale visitors are on mobile, and they bounce if your site takes more than a few seconds to load. Slow sites also rank worse on Google. We build fast, so you keep the visitor and the ranking." },
      { title: "It doesn't speak to HOA communities or seasonal demand", body: "A homeowner in McCormick Ranch wants to see that you understand HOA exterior standards. A snowbird arriving in November wants to know you handle maintenance work efficiently. A generic site that reads like everyone else's misses both." },
    ],
    servicesHeading: "What's in an OnwardCraft Scottsdale website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A premium site designed around your trade, your Scottsdale neighborhoods, and the high-margin jobs you actually want." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where most of your Scottsdale traffic is. Fast, thumb-friendly, easy to call from poolside or at a showing." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells to luxury buyers', desc: "Words that speak to discerning Scottsdale homeowners and book the job — not filler text that reads like everyone else's contractor site." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages for Scottsdale communities." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings in a competitive market." },
      { name: 'HOA-community and neighborhood pages', desc: "Pages built around the HOA communities and neighborhoods you serve — DC Ranch, Gainey Ranch, McCormick Ranch, Troon — so you stand out with the buyers who need HOA-savvy contractors.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more of Scottsdale's research-heavy buyers move to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your neighborhoods, your best jobs, and your competitors, then map the site around booking more of the premium Scottsdale work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built for luxury trust and conversions — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells to Scottsdale homeowners, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting — whether that's HVAC in summer or pool work in spring." },
    ],
    pricing: {
      heading: 'Transparent Scottsdale web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade Scottsdale contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services across Scottsdale.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'HOA-community and neighborhood pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses in the East Valley.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Scottsdale?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site look premium enough for North Scottsdale buyers?', a: "That's the whole point. We design around the expectation of Scottsdale's luxury market — credibility-first layouts, real project photos, and trust signals that convince $2M homeowners to call you instead of a competitor." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages for Scottsdale communities. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where most of your Scottsdale traffic comes from — including homeowners searching from the pool deck or during a North Scottsdale showing." },
      { q: 'Can the site speak to HOA communities?', a: "Yes, and that's a real differentiator in Scottsdale. We build pages and copy that name the HOA communities you serve, speak to exterior approval processes, and signal to those homeowners that you understand their constraints." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what high-converting Scottsdale web design should include for a luxury HOA market, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'scottsdale', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Scottsdale Website Redesign | Keep Your Rankings | OnwardCraft',
    metaDescription:
      'Scottsdale website redesign without losing rankings. Faster, mobile-first rebuilds that convert luxury homeowners into booked jobs. SEO-safe migration. Free audit.',
    eyebrow: 'Website Redesign · Scottsdale, AZ',
    h1: 'Scottsdale Website Redesign that modernizes for DC Ranch luxury buyers without tanking your traffic',
    h2Exact: 'Scottsdale Website Redesign Company',
    heroSubhead:
      "An outdated site costs you Scottsdale jobs every week — especially in a luxury market where homeowners judge you in seconds. We redesign contractor sites to look premium, convert better, and migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "A Scottsdale website redesign usually goes one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Scottsdale contractor sites for premium trust and conversions, build them to speak to HOA communities and luxury buyers, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, more credible for luxury buyers, and better structured than the old one.",
    problemHeading: "Signs your Scottsdale site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you luxury trust", body: "For a high-ticket job in North Scottsdale, homeowners judge you by your website in seconds. An old, cluttered design quietly sends them to a competitor who looks more polished — even when your work is better. In a market of $2M homes, perception is everything." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing Scottsdale visitors before they ever see your offer. That hurts doubly in a market where one booked job at a luxury home can mean $30,000 in revenue." },
      { title: "It doesn't speak to HOA communities or seasonal realities", body: "A generic old site in a market this premium gives no reason to pick you. Homeowners in HOA communities want proof you understand exterior approval processes. Snowbirds want proof of reliability. A redesign built for Scottsdale fixes both." },
    ],
    servicesHeading: "What's in an OnwardCraft Scottsdale redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today — slow speed, weak trust signals, generic positioning — so the redesign fixes real problems." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned in the Scottsdale market." },
      { name: 'Premium conversion redesign', desc: "Clear offers, better call-to-action placement, and a look that earns luxury trust. We design for booked high-margin jobs, not just aesthetics." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings in Arizona's competitive search landscape." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where most Scottsdale homeowners do their initial research — including while at the pool or at a showing." },
      { name: 'Brand refresh', desc: "A modern, premium look that matches the quality of your work and the expectations of North Scottsdale buyers." },
      { name: 'HOA-community and neighborhood rebuild', desc: "Rebuilt around the HOA communities and neighborhoods you serve, with content that speaks to exterior standards and approval processes — the angle that converts luxury Scottsdale buyers.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as Scottsdale's research-heavy buyers shift to AI for contractor vetting.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you Scottsdale leads and rankings, then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, premium-conversion design you review and shape before we build — built to earn the trust of luxury buyers." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration that protects your Scottsdale search visibility." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and improve, not drop." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting in each season — HVAC in summer, exterior work in winter, pool inquiries year-round." },
    ],
    pricing: {
      heading: 'Transparent Scottsdale redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small Scottsdale contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established Scottsdale contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'HOA-community and neighborhood rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location East Valley businesses.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Scottsdale?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site looks dated for a luxury market, loads slowly, isn't bringing in high-margin Scottsdale leads, or doesn't speak to HOA communities, it's costing you real jobs. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the redesign help me win HOA community work?', a: "Yes — that's one of the biggest opportunities in Scottsdale. We rebuild pages and copy that speak directly to HOA exterior standards and approval processes, positioning you as the contractor who understands what governed communities need." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings — critical when most Scottsdale homeowners search from their phones." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in, ever." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what your Scottsdale website redesign should fix, including HOA-community positioning and luxury trust signals, and a fixed-price quote with a timeline and a safe, SEO-safe migration plan." },
    ],
  },
];

export const scottsdaleCity = {
  citySlug: 'scottsdale', city: 'Scottsdale', state: 'Arizona', stateAbbr: 'AZ', metro: 'Scottsdale-Phoenix East Valley',

  titleTag: 'Scottsdale Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Scottsdale marketing for contractors: web design, SEO, and local SEO. Win luxury homeowners, HOA communities, pool and HVAC work, own your leads, no lock-in.',

  eyebrow: 'Scottsdale · Web Design, SEO & Lead Generation',
  h1: 'Scottsdale marketing for contractors built around the trades, from luxury HOA communities to 110°F HVAC season',
  h2Exact: 'Scottsdale Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Scottsdale's luxury-market, HOA-dominated, extreme-heat reality. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Scottsdale audit',

  intro:
    "Scottsdale marketing for contractors means fighting for attention in one of the wealthiest mid-size cities in the US — where homeowners in DC Ranch and Troon research every contractor before they call, 82% of neighborhoods are HOA-governed with strict exterior standards, and 110°F summers make HVAC failure a medical emergency. Winning here takes three things working together: a site that looks premium and converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack for the neighborhoods you serve. Here's how we help Scottsdale contractors do exactly that.",
  aioQuestion: 'How do Scottsdale contractors get more leads online?',
  aioAnswer:
    "Scottsdale contractors get more leads by combining a fast, premium-looking website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack neighborhood by neighborhood. Because the market skews luxury and nearly every community is HOA-governed, the contractors who look polished online, speak to HOA realities, and show up when Scottsdale homeowners search capture the highest-margin work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Scottsdale searches \"near me\" — neighborhood by neighborhood, HOA community by community, across North Scottsdale and beyond.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your Scottsdale customers search — HVAC emergencies in summer, pool work year-round, roofing in the cool season — and measure it in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert luxury buyers',
      blurb: "Fast, mobile-first, premium-looking websites engineered to earn the trust of North Scottsdale homeowners and turn DC Ranch visitors into booked high-margin jobs.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for luxury trust and conversions, and migrate it carefully so you keep every bit of ranking you've already earned in the Scottsdale market.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Scottsdale?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting, premium-looking website with SEO and local SEO so they rank, convert, and own their leads in one of the wealthiest markets in Arizona." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — HVAC, pool equipment and service, roofing, plumbing, solar, electrical, restoration, and general contractors — so we understand Scottsdale's extreme-heat HVAC emergencies, HOA exterior approval processes, and snowbird maintenance cycles." },
    { q: 'Why does the Scottsdale market need a different approach?', a: "Scottsdale is a luxury market where homeowners research heavily before calling anyone — especially in North Scottsdale communities like Troon, DC Ranch, and McDowell Mountain Ranch. Nearly 82% of neighborhoods are HOA-governed with strict exterior standards. Pool ownership is among the highest per capita in the US. And 110°F summers make HVAC failure an emergency. Generic marketing misses all of that." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Scottsdale areas do you serve?', a: "All of Scottsdale and the surrounding East Valley — Old Town, North Scottsdale, DC Ranch, Troon, McDowell Mountain Ranch, McCormick Ranch, Gainey Ranch, Paradise Valley, Fountain Hills, Cave Creek, and Carefree, with genuine local pages rather than one generic Scottsdale page." },
    { q: 'Where should I start?', a: "Start with a free Scottsdale audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most high-margin work fastest. That is the simplest entry point into Scottsdale marketing for contractors who want to get found and booked. No pitch deck, just a plan." },
  ],
};
