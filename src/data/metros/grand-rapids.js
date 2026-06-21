// GRAND RAPIDS — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Grand Rapids's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// GRAND RAPIDS — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Grand Rapids takes more than a decent website',
  body:
    "Grand Rapids is the second-largest city in Michigan and the beating heart of West Michigan, with a metro of about 1.1 million people. This is the Furniture Capital of the United States — a solid, manufacturing-rooted economy where homeowners are consistently in the market for quality work and are notoriously value-focused. Dutch Reformed heritage runs deep in Kent County: people ask for references, read reviews carefully, and expect straight talk about scope and price. That means trust signals matter here more than flash. Two things drive search demand above everything else. First, Grand Rapids averages 74 inches of lake-effect snow a year off Lake Michigan — making it one of the snowiest cities in the eastern US. From November through March, that brutal winter loads roofing, heating, insulation, ice-dam, and emergency pipe calls. Second, the ArtPrize festival and a decade of neighborhood revitalization have pushed buyers into older Heritage Hill, Eastown, and East Hills homes that need real contractor work. The fast-growing southern and eastern suburbs — Kentwood, Wyoming, Byron Center, Caledonia, Rockford — are filling with manufacturing and healthcare workers who own newer homes and hire steady. Get into the Map Pack before November and you own the winter. Rank in the spring-thaw window and you catch the flood and drainage calls that follow every melt.",
  pullQuote: 'In a city hammered by 74 inches of lake-effect snow a year, the contractor already ranked when the storm hits is the one whose phone rings.',
  donut: {
    title: 'Lake-effect snow burden',
    value: 58,
    centerLabel: 'winter-driven',
    legend: [
      { label: 'Winter emergency demand', pct: 58, kind: 'teal' },
      { label: 'Rest of year', pct: 42, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes in Grand Rapids',
  seasonCaption: 'Lake-effect winter (Nov–Mar) and spring-thaw flooding (Mar–May)',
  seasonalDemand: [
    { m: 'J', v: 90, peak: true }, { m: 'F', v: 88, peak: true }, { m: 'M', v: 82, peak: true },
    { m: 'A', v: 74, peak: true }, { m: 'M', v: 58 }, { m: 'J', v: 46 }, { m: 'J', v: 42 },
    { m: 'A', v: 44 }, { m: 'S', v: 52 }, { m: 'O', v: 60 },
    { m: 'N', v: 80, peak: true }, { m: 'D', v: 86, peak: true },
  ],
  stats: [
    { value: '1.1M', label: 'people across the Grand Rapids metro' },
    { value: '74 in', label: 'average annual lake-effect snowfall — one of the highest in the eastern US', accent: true },
    { value: 'Nov–Mar', label: 'peak winter season, when heating, roofing, and ice-dam calls spike' },
    { value: 'Top 3', label: 'Map Pack spots that capture most clicks when homeowners search' },
  ],
  neighborhoods: [
    'Eastown', 'Heritage Hill', 'East Hills', 'Ada', 'Cascade',
    'Kentwood', 'Wyoming', 'Byron Center', 'Caledonia', 'Rockford',
    'Lowell', 'Holland', 'Grandville', 'Walker', 'Comstock Park',
  ],
};

const AREAS = [
  'Grand Rapids', 'Kentwood', 'Wyoming', 'Byron Center', 'Caledonia',
  'Rockford', 'Lowell', 'Ada', 'Cascade', 'Grandville',
  'Walker', 'Comstock Park', 'Holland', 'Eastown', 'Heritage Hill',
];

const FOUNDER =
  "I'll be straight with you: I built OnwardCraft because I kept watching solid trade contractors — exactly the kind West Michigan runs on — hand Angi and HomeAdvisor a few hundred dollars a month for leads that two or three competitors bought at the same time. You cannot build a business on rented leads. So everything we do is built around getting you ranking for the work you actually want, in the neighborhoods you actually serve, so those leads belong to you. No 12-month handcuffs. No mystery reporting. If we're not delivering, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, insulation, electrical, restoration, GCs. We understand lake-effect ice-dam calls in January, spring-thaw flooding in April, and the steady demand from West Michigan's manufacturing and healthcare homeowners, so everything we build is shaped around how your customers actually search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for the same Kentwood homeowner three of your competitors also called.",
  },
  {
    title: 'We actually know West Michigan',
    body: "Neighborhood-by-neighborhood targeting from Heritage Hill to Byron Center, plus content built around the lake-effect winters and ArtPrize-era neighborhood revitalization that drive local demand. The stuff a national shop can't do by swapping a city name into a template.",
  },
  {
    title: 'No contracts, no mystery',
    body: "Published prices, reporting tied to leads, month-to-month after 90 days. Grand Rapids homeowners expect straight talk — so do we. If we're not earning it, you leave.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Grand Rapids contractor gets around 1,200 local \"near me\" impressions a month across a handful of West Michigan neighborhoods. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a booked-out winter calendar — and in a market where one lake-effect storm triggers a week of back-to-back jobs, missing that window is brutal. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Grand Rapids', state: 'Michigan', stateAbbr: 'MI', metro: 'Grand Rapids',
  heroProof: ['Built for the trades', 'West Michigan neighborhood targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const grandRapidsLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'grand-rapids', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Grand Rapids Local SEO Company | OnwardCraft',
    metaDescription:
      'Search your service in Grand Rapids and three businesses show up on the map. We get you into those three, so the call lands with you.',
    eyebrow: 'Local SEO · Grand Rapids, MI',
    h1: 'When Grand Rapids searches for what you do, be the first name they find',
    h2Exact: 'Grand Rapids Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. In West Michigan's manufacturing-rooted market, we get you into that top three for your neighborhoods — from Heritage Hill to Kentwood to Byron Center — so the call lands with you instead of whoever ranked first.",
    primaryCta: 'Get my free Grand Rapids audit',
    intro:
      "Grand Rapids local SEO comes down to one thing: when a homeowner in Eastown or Rockford or Caledonia searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. This is a market shaped by brutal lake-effect winters, a revitalized urban core, and fast-growing suburbs — and homeowners here do their research. Becoming one of those three in the neighborhoods you serve is the whole game. Here's how you do it.",
    aioQuestion: 'How do Grand Rapids businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Grand Rapids neighborhoods and suburbs. In West Michigan, the winners rank tight by suburb and neighborhood, show up with trust signals that satisfy quality-focused Dutch Reformed homeowners, and are in position before November when lake-effect snow drives the biggest heating and roofing demand spikes of the year.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks. Grand Rapids homeowners are methodical — they tap the top result, read the reviews, and call. If you're not in that top three for the suburbs you serve, it almost doesn't matter how good your work is. Getting into the Map Pack for Kentwood, Wyoming, Rockford, and your other core areas is usually the highest-return move a West Michigan contractor can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Grand Rapids homeowner to multiple contractors and bill each of you to compete over them. It's a treadmill. Local SEO builds the opposite: a lead finds you, calls you, and nobody else got it. Over time you stop renting and start owning the pipeline." },
      { title: "You're invisible when the storms hit", body: "Lake-effect snow off Lake Michigan dumps 74 inches a year on Grand Rapids. When a November storm rolls in, searches for roofing, heating, ice-dam removal, and insulation spike overnight. The contractors already ranked are the ones who book that work. If your Map Pack presence isn't solid before winter, you watch the busy season go to somebody else." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Grand Rapids searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. Grand Rapids homeowners read reviews before they call — this lifts your ranking and makes people pick up the phone." },
      { name: 'Neighborhood and suburb pages', desc: "Real pages for Kentwood, Wyoming, Rockford, Caledonia, Byron Center, and the rest, so you rank for the area someone's actually searching, not just \"Grand Rapids.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from West Michigan sources Google trusts — local press, chambers of commerce, associations, trade partners. This is what separates page one from page two here." },
      { name: 'Seasonal demand SEO', desc: "We get you ranking for lake-effect winter searches — ice-dam removal, heating, roofing — before November, so you're visible when demand spikes, not scrambling after.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your Grand Rapids neighborhoods and suburbs, and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. Grand Rapids homeowners rely on reviews more than most markets — these compound week over week." },
      { name: 'Add local content', desc: "Neighborhood and suburb pages for Kentwood, Wyoming, Rockford, Caledonia, Byron Center, and more, plus the on-page work to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next suburb." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Grand Rapids suburbs.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Suburb landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across West Michigan.', features: ['Everything in Local Growth', 'Local link building', 'Seasonal winter demand SEO', 'Multi-suburb and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Grand Rapids?', a: "Most Grand Rapids engagements land between $750 and $2,500 a month, depending on how many suburbs and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The competitive Grand Rapids keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days in this market is selling you something." },
      { q: 'What makes Grand Rapids local SEO different from a generic approach?', a: "Two things. First, seasonal timing is critical here — lake-effect snow drives massive winter demand for roofing, heating, and ice-dam work, and you need to be ranked before November, not after. Second, West Michigan homeowners are quality- and trust-focused. They read reviews and check credentials. A strategy built for Grand Rapids reflects both of those realities." },
      { q: 'Should I be targeting specific suburbs or just \"Grand Rapids\"?', a: "Both, but the suburbs often win faster. A homeowner in Caledonia or Byron Center searches for contractors near them, not just \"Grand Rapids.\" We build real suburb pages for Kentwood, Wyoming, Rockford, Caledonia, and the rest, because that's what ranks for the specific searches your best customers actually run." },
      { q: 'Which areas do you cover?', a: "Grand Rapids proper and the full suburban belt: Kentwood, Wyoming, Byron Center, Caledonia, Rockford, Lowell, Ada, Cascade, Grandville, Walker, Comstock Park, Holland, and more. We build genuine suburb and neighborhood pages rather than one generic Grand Rapids page, because that's what actually ranks." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, insulation, electrical, restoration, and general contractors. We understand lake-effect ice-dam calls, spring-thaw flooding, and the steady demand from West Michigan's manufacturing and healthcare homeowners." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads at prices that eat your margin. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because the work is coming to you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your Grand Rapids suburbs, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'grand-rapids', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Grand Rapids SEO Company | OnwardCraft',
    metaDescription:
      'Grand Rapids SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in contracts, built for West Michigan.',
    eyebrow: 'SEO Services · Grand Rapids, MI',
    h1: 'Get your Grand Rapids business to the top of Google and keep it there',
    h2Exact: 'Grand Rapids SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Grand Rapids customers search and the leads keep coming. We build that ranking for West Michigan contractors and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free Grand Rapids SEO audit',
    intro:
      "Grand Rapids SEO comes down to one question: when someone in Kentwood or Rockford or Heritage Hill searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in a market shaped by lake-effect winters, furniture-industry homeowners, and fast-growing western suburbs — and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Grand Rapids businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms West Michigan customers search, publishing genuinely useful local content tied to specific suburbs and neighborhoods, and earning links from trusted Grand Rapids sources. Seasonal timing is a major edge here: contractors who rank for lake-effect roofing, ice-dam, and heating terms before November catch the winter demand spike while competitors scramble to catch up.",
    problemHeading: "Three reasons your Grand Rapids site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. In a market where Grand Rapids homeowners research before they call, if you're not in the top handful of results for what you sell, your site is basically invisible — no matter how good your work is." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done. For a trade contractor in West Michigan, owning those rankings is the difference between a steady winter and a scramble." },
      { title: "You're missing the seasonal demand spikes", body: "Grand Rapids gets hammered by lake-effect snow — 74 inches a year. When a November storm hits, searches for heating, roofing, ice-dam removal, and insulation spike hard and fast. Ranking takes months to build, so you have to be in position before the season, not chasing it after the storm rolls in." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your Grand Rapids customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what West Michigan buyers search, earn links, and bring in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real Grand Rapids and West Michigan sources. In this market, links from local press, chambers, and trade associations are what separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across your suburbs alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Seasonal & lake-effect SEO', desc: "We rank you for the winter heating, roofing, ice-dam, and insulation searches that drive Grand Rapids's busiest weeks, so you're visible before demand spikes, not after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Grand Rapids leads — with seasonal timing built in." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the seasonal and winter terms that matter most in West Michigan." },
      { name: 'Build authority', desc: "Links and citations from trusted Grand Rapids and West Michigan sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Grand Rapids SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and suburbs.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Grand Rapids search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal lake-effect SEO', 'Multi-suburb pages', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Grand Rapids?', a: "Most Grand Rapids SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Grand Rapids?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter suburb terms and slower on the most competitive citywide keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. For most Grand Rapids contractors, SEO is the long-term engine and ads work for short-term campaign spikes." },
      { q: 'Should my Grand Rapids SEO target lake-effect winter demand?', a: "Absolutely. When a lake-effect storm drops a foot of snow in Grand Rapids, searches for roofing, heating, ice-dam removal, and insulation spike overnight. Ranking takes months to build, so you need to be in position before November, not scrambling after the first big storm. We build that seasonal presence ahead of time." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal/lake-effect demand and AI-search optimization. We confirm exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which areas around Grand Rapids do you cover?', a: "Grand Rapids proper and the full suburban belt — Kentwood, Wyoming, Byron Center, Caledonia, Rockford, Lowell, Ada, Cascade, Grandville, Walker, Comstock Park, and Holland — with genuine suburb pages rather than one generic Grand Rapids page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'grand-rapids', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Grand Rapids Web Design Company | OnwardCraft',
    metaDescription:
      'Grand Rapids web design that turns visitors into booked jobs — fast, mobile-first sites built for contractors in West Michigan.',
    eyebrow: 'Web Design · Grand Rapids, MI',
    h1: 'Grand Rapids web design that turns visitors into booked jobs',
    h2Exact: 'Grand Rapids Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Grand Rapids contractors fast, mobile-first sites engineered to turn visitors into booked work — sites that earn the trust of value-focused West Michigan homeowners and hold up when a lake-effect storm sends everyone searching at once.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Grand Rapids contractor websites lose leads quietly: slow on a phone, buried call button, no clear offer, nothing that speaks to local neighborhoods. Web design done right fixes all of that. We build sites that load fast, look like the professional you are, and turn Kentwood-to-Rockford visitors into booked jobs — built for homeowners who do their homework before they call.",
    aioQuestion: 'What makes a good contractor website in Grand Rapids?',
    aioAnswer:
      "A good Grand Rapids contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific suburbs and neighborhoods you serve. Because West Michigan homeowners are research-oriented and quality-focused, trust signals — licenses, reviews, real project photos — matter more here than anywhere. And because winters are brutal, having seasonal messaging ready for lake-effect snow, ice-dam, and heating searches gives you an edge the moment temperatures drop.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next guy. Grand Rapids homeowners are deliberate — they compare before they call. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Grand Rapids visitors are on mobile, and they bounce if your site takes more than a few seconds to load. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking." },
      { title: "It doesn't speak to your neighborhoods", body: "A homeowner in Caledonia or Byron Center wants to see you serve their area — not a generic \"Grand Rapids\" page that could be anybody. We build sites that name the suburbs and communities you work, so visitors trust you're local and Google ranks you for the right searches." },
    ],
    servicesHeading: "What's in an OnwardCraft Grand Rapids website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your service area across West Michigan, and the jobs you actually want." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where most of your Grand Rapids traffic lands. Fast, thumb-friendly, easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that speak to Grand Rapids homeowners who do their research — trust-forward, direct, and built to book the job." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and suburb-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Suburb-targeted pages', desc: "Pages built around Kentwood, Wyoming, Rockford, Byron Center, Caledonia, and your other core areas, so you stand out instead of blending into one generic Grand Rapids page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your service suburbs, your best jobs, and your competitors, then map the site around booking more of the work you want in West Michigan." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that earns trust with Grand Rapids homeowners, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting." },
    ],
    pricing: {
      heading: 'Transparent Grand Rapids web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + suburb pages', 'Speed & Core Web Vitals', 'Suburb-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Grand Rapids?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site help me stand out in West Michigan?', a: "That's the whole point. Grand Rapids homeowners research before they call — they check reviews, look at photos, and judge your professionalism. We build sites with clear trust signals, suburb-specific pages, and an obvious call to action, so when they land on yours, they call you." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and suburb-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Grand Rapids terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where most of your Grand Rapids traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Grand Rapids contractor site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'grand-rapids', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Grand Rapids Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your Grand Rapids website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs in West Michigan.',
    eyebrow: 'Website Redesign · Grand Rapids, MI',
    h1: 'Redesign your Grand Rapids website without losing your rankings',
    h2Exact: 'Grand Rapids Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, easy to overlook. We redesign Grand Rapids contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned before the next lake-effect season hits.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Grand Rapids contractor sites for speed and conversions, build them to earn the trust of West Michigan homeowners, and migrate with the redirects and SEO care that protect the traffic you already have going into your next busy season.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one — which matters especially in Grand Rapids, where you want to be fully indexed and ranking before lake-effect winter demand kicks in.",
    problemHeading: "Signs your Grand Rapids site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "Grand Rapids homeowners are careful buyers — they check reviews, look at photos, and judge your professionalism before they call. An old, cluttered design quietly sends them to a competitor who looks more established, even when your work is better. First impressions matter in a market that values quality." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing most of your visitors before they ever see your offer. A redesign built mobile-first wins them back and keeps the ranking that brings them to you in the first place." },
      { title: "It doesn't speak to your West Michigan suburbs", body: "Traffic that doesn't turn into calls is wasted. A generic old site gives a Caledonia or Rockford homeowner no reason to trust you're local. We rebuild around the specific suburbs and communities you serve, so the right buyers choose you." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just updating colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned — critical before peak winter season." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where most of your Grand Rapids traffic lands." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the expectations of value-focused West Michigan homeowners." },
      { name: 'Suburb-targeted rebuild', desc: "Rebuilt around the suburbs and neighborhoods you serve — Kentwood, Wyoming, Rockford, Byron Center, Caledonia — so the new site stands out instead of reading like a generic placeholder.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you leads and rankings, then map a redesign that fixes it without breaking what already works — with lake-effect season timing in mind." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and improve, not drop." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Grand Rapids redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + suburb pages', 'Suburb-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Grand Rapids?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them — critical in Grand Rapids where you need to be ranked before winter." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is hard to update, isn't bringing in leads, or doesn't speak to the specific suburbs you serve, it's costing you work every week. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the redesign help me compete for West Michigan homeowners?', a: "Yes, and that's the point. We rebuild around the specific suburbs and communities you serve, lead with trust signals that Grand Rapids homeowners expect, and make the offer and call button obvious — so the new site earns the call instead of letting it go to a competitor." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan built around your next busy season." },
    ],
  },
];

export const grandRapidsCity = {
  citySlug: 'grand-rapids', city: 'Grand Rapids', state: 'Michigan', stateAbbr: 'MI', metro: 'Grand Rapids',

  titleTag: 'Grand Rapids Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Grand Rapids contractors. Get found, get booked, and own your leads instead of renting them — built for West Michigan.',

  eyebrow: 'Grand Rapids · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Grand Rapids contractors found and booked',
  h2Exact: 'Grand Rapids Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for West Michigan's lake-effect winters, manufacturing-rooted economy, and fast-growing suburban belt. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'West Michigan neighborhood targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Grand Rapids audit',

  intro:
    "If you run a contracting business in Grand Rapids, you're serving a market shaped by 74 inches of lake-effect snow a year, a furniture-industry homeowner base that values quality and straight talk, and a suburban belt — Kentwood, Wyoming, Byron Center, Caledonia, Rockford — that's growing faster than most of the Midwest. Winning here takes three things working together: a site that converts quality-focused West Michigan homeowners, SEO that ranks you before the lake-effect season hits, and local SEO that puts you in the Map Pack for the suburbs you actually serve. Here's how we help Grand Rapids contractors do exactly that.",
  aioQuestion: 'How do Grand Rapids contractors get more leads online?',
  aioAnswer:
    "Grand Rapids contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack suburb by suburb. Seasonal timing matters more here than in most markets: contractors who rank for lake-effect roofing, heating, ice-dam, and insulation terms before November catch the biggest demand spike of the year while competitors scramble to catch up. West Michigan homeowners also research carefully before calling, so trust signals — reviews, real project photos, suburb-specific pages — are what convert the visit into a call.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Grand Rapids searches \"near me.\" The single highest-return move for most local contractors — done tight, suburb by suburb, before the lake-effect season hits.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your West Michigan customers actually search, build an asset you own instead of renting traffic from ads, and measure it in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites that earn the trust of quality-focused Grand Rapids homeowners and turn visitors into booked jobs — not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions before your next busy season, and migrate it carefully so you keep every bit of ranking you've already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Grand Rapids?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads — especially before the lake-effect winter season drives demand." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, insulation, electrical, restoration, and general contractors — so we understand lake-effect ice-dam calls, spring-thaw flooding, and the steady demand from West Michigan's manufacturing and healthcare homeowners." },
    { q: 'Why does the Grand Rapids market need a different approach?', a: "Two things set it apart. First, the lake-effect winters are brutal — 74 inches of snow a year creates massive seasonal demand spikes for roofing, heating, and insulation. You need to be ranked before November, not after. Second, Grand Rapids homeowners are quality-focused and research carefully before calling. That means trust signals — reviews, real photos, suburb-specific content — matter more here than generic city-level pages." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Grand Rapids areas do you serve?', a: "Grand Rapids proper and the full suburban belt: Kentwood, Wyoming, Byron Center, Caledonia, Rockford, Lowell, Ada, Cascade, Grandville, Walker, Comstock Park, Holland, and more — with genuine suburb pages rather than one generic Grand Rapids page." },
    { q: 'Where should I start?', a: "Start with a free Grand Rapids audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work — and make sure you're in position before the next lake-effect season. No pitch deck, just a plan." },
  ],
};
