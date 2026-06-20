// Dallas–Fort Worth metro × service local landing pages + city hub.
// Renders via /[city]/[service]/ (service entries) and /[city]/ (hub).
// BUILD with the `onward-local-page` skill. SPEC mirrors the Miami gold standard
// in ../locations.js and ../cities.js exactly.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF) are defined once
// and reused across that city's service pages — they describe the same city, so
// sharing is correct and DRY. Service-specific blocks are authored per entry.
// PRICING is fixed to the founder-confirmed Dallas range.
//
// Dallas's local angle: DFW is hail & storm alley. North Texas leads the nation
// in hail claims; the spring outbreak season (Apr–Jun, May worst) drives massive
// roofing, restoration, and insurance-claim demand. Secondary lever: a large
// bilingual (Spanish) market the competition mostly ignores.

const MARKET = {
  heading: 'Why Dallas–Fort Worth is one of the toughest maps to win',
  body:
    "Dallas–Fort Worth is home to about 6.7 million people and still growing fast, which makes it one of the biggest, most crowded contractor markets in the country. Two things make it genuinely different. First, it sits in hail alley. North Texas leads the nation in hail claims year after year, and a single 2023 outbreak left the metro with billions in insured losses. When a storm rolls through Plano or Arlington, demand for roofing, restoration, and exteriors spikes overnight, and the contractors already ranking in the top three catch that wave first. Second, a large share of the market searches in Spanish. Plenty of high-intent searches happen in two languages, and almost no agency bothers to rank for both. Win storm season and win in Spanish, and you pull ahead of competitors twice your size.",
  pullQuote: 'When the next hailstorm hits DFW, the contractors in the top three book out before you finish your coffee.',
  donut: {
    title: 'How Dallas searches',
    value: 41,
    centerLabel: 'Hispanic',
    legend: [
      { label: 'Hispanic / Spanish', pct: 41, kind: 'teal' },
      { label: 'Other', pct: 59, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Hail & storm season (Apr–Jun, secondary Sep–Nov)',
  seasonalDemand: [
    { m: 'J', v: 34 }, { m: 'F', v: 38 }, { m: 'M', v: 58 },
    { m: 'A', v: 82, peak: true }, { m: 'M', v: 96, peak: true }, { m: 'J', v: 90, peak: true },
    { m: 'J', v: 64 }, { m: 'A', v: 58 }, { m: 'S', v: 68, peak: true },
    { m: 'O', v: 66, peak: true }, { m: 'N', v: 54, peak: true }, { m: 'D', v: 40 },
  ],
  stats: [
    { value: '6.7M+', label: 'people across the Dallas–Fort Worth metro' },
    { value: '~41%', label: 'Hispanic — a large search market most agencies skip', accent: true },
    { value: 'Apr–Jun', label: 'hail & storm season, when roofing demand spikes' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks' },
  ],
  neighborhoods: [
    'Uptown', 'Downtown Dallas', 'Oak Cliff', 'Lakewood', 'Plano',
    'Frisco', 'McKinney', 'Arlington', 'Irving', 'Garland',
    'Richardson', 'Grand Prairie', 'Las Colinas', 'Allen', 'Mesquite',
  ],
};

const AREAS = [
  'Dallas', 'Fort Worth', 'Arlington', 'Plano', 'Irving', 'Garland',
  'Frisco', 'McKinney', 'Grand Prairie', 'Mesquite', 'Richardson',
  'Carrollton', 'Allen', 'Denton', 'Grapevine',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We get hail season, emergency calls, and insurance work, so everything we build is shaped around how your customers really search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners three competitors also bought.",
  },
  {
    title: 'We actually speak Dallas',
    body: "Hail-season demand, real suburb targeting from Plano to Arlington, and bilingual optimization. The stuff a national agency can't do by swapping a city name into a template.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a DFW roofing contractor gets around 2,000 local \"near me\" impressions a month, and that jumps when a hailstorm hits. Moving from page-two invisibility into the top three is the difference between catching that storm wave and watching competitors book it. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Dallas', state: 'Texas', stateAbbr: 'TX', metro: 'Dallas–Fort Worth',
  heroProof: ['Built for the trades', 'Ready for hail season', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const dallasLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'dallas', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Dallas Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Search your service in Dallas and three businesses show up on the map. We get you into those three so you catch hail season first. Honest pricing, no lock-in, free audit.',
    eyebrow: 'Local SEO · Dallas–Fort Worth',
    h1: 'When Dallas searches for what you do, be the first name they find',
    h2Exact: 'Dallas Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. We get you into that top three, so when the next storm hits Plano or Arlington, the call lands with you instead of whoever ranked first.",
    primaryCta: 'Get my free Dallas audit',
    intro:
      "Dallas local SEO is a brawl. DFW is huge, it's growing, and it sits in hail alley, so demand for roofing and restoration can double the week a storm rolls through. A homeowner in Frisco or Oak Cliff taps one of the three businesses Google pins to the map and never scrolls. Becoming one of those three is the whole game, and that's exactly what we build.",
    aioQuestion: 'How do Dallas businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the services and suburbs you want; consistent name, address, and phone listings across the web; a steady flow of real reviews; and local content for the neighborhoods you serve. Dallas is competitive and storm-prone, so the winners look established, answer fast, and are ready to rank the day a hailstorm sends demand through the roof.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks. If you're not one of them, it almost doesn't matter how good your work is — most people in DFW never see your name. Getting into that top three is usually the single highest-return move a Dallas business can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Dallas homeowner to four contractors, then bill each of you to fight over them. It's a treadmill. Local SEO builds the opposite: a lead finds you, calls you, and nobody else got it. Over time you stop renting and start owning." },
      { title: "You're not ready when the hail hits", body: "When a storm rolls through DFW, \"roof repair near me\" searches spike overnight. If you're sitting on page two, that surge goes to the contractors already in the Map Pack. Being ranked before the storm is what separates a booked-out spring from a quiet one." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Dallas searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes people pick up the phone." },
      { name: 'Neighborhood pages', desc: "Real pages for Plano, Frisco, Arlington, Irving and the rest, so you rank for the suburb someone's actually searching, not just \"Dallas.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from DFW sources Google trusts — local press, associations, partners. This is what separates page one from page two here." },
      { name: 'Storm-season readiness', desc: "We get you ranked and your profile primed before hail season, so when \"roof repair near me\" spikes, the surge of calls lands on you.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your DFW service areas and pin down which competitors are beating you and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why ranking before storm season beats scrambling after it." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages from Plano to Oak Cliff, plus the on-page work to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next suburb." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several DFW suburbs.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want the whole metro, ready for storm season.', features: ['Everything in Local Growth', 'Local link building', 'Bilingual / Spanish optimization', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Dallas?', a: "Most Dallas engagements land between $750 and $2,500 a month, depending on how many suburbs and keywords you're going after and whether you want bilingual work. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The competitive Dallas keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days in a market this crowded is selling you something." },
      { q: 'What makes Dallas local SEO different from regular SEO?', a: "Three things. It's storm-driven, so roofing and restoration see sharp hail-season spikes your presence has to be ready for. It's huge and competitive, so trust signals like reviews and consistent listings carry more weight. And a big share of searches happen in Spanish, which most agencies never touch." },
      { q: 'Can local SEO help me catch DFW hail season?', a: "That's one of the biggest reasons to start early. North Texas leads the nation in hail claims, and \"roof repair near me\" spikes the moment a storm hits, usually April through June. If you're already in the top three when that surge comes, the calls land on you. If you wait until the storm to start, you're months behind the contractors who didn't." },
      { q: 'Which areas do you cover?', a: "All of Dallas–Fort Worth and the suburbs around it — Plano, Frisco, McKinney, Arlington, Irving, Garland, Richardson, Allen, Grand Prairie and more. We build genuine neighborhood pages instead of one generic Dallas page, because that's what actually ranks for \"[service] [suburb]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand emergency calls, storm-driven demand, and insurance jobs, and we build your local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because the work is coming to you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your DFW service areas, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'dallas', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Dallas SEO Company | Rank Higher, Get More Leads | OnwardCraft',
    metaDescription:
      'Dallas SEO that ranks contractors on Google and brings in leads you own — and gets you found when hail season hits. Revenue-tied reporting, no lock-in. Free SEO audit.',
    eyebrow: 'SEO Services · Dallas–Fort Worth',
    h1: 'Get your Dallas business to the top of Google and keep it there',
    h2Exact: 'Dallas SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Dallas customers search, and the leads keep coming — including the surge every time a storm rolls through DFW. We build that ranking and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free Dallas SEO audit',
    intro:
      "SEO services in Dallas come down to one question: when someone searches what you do, are you on page one or page two? Page two might as well be page fifty. We get DFW contractors ranking for the money keywords — and ready for the hail-season spike in \"roof repair\" and \"storm damage\" searches — and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Dallas businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content, and earning links from trusted DFW sources. In a big, storm-driven market like Dallas, being ranked before hail season and keeping the site fast on mobile are two of the fastest ways to pull ahead of competitors who optimize for nothing in particular.",
    problemHeading: "Three reasons your Dallas site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. If you're not in the top handful of results for what you sell, your site is basically invisible in a metro this size — no matter how good it looks." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost." },
      { title: "You're invisible when the storm hits", body: "DFW hail season sends \"storm damage repair\" and \"roof replacement\" searches through the roof, usually April to June. If your site isn't ranking for those terms, that entire surge goes to a competitor. We rank you for the storm keywords before the storm." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your Dallas customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real DFW and industry sources. In a competitive market, links are often what separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Storm-keyword SEO', desc: "We rank you for \"storm damage,\" \"hail repair,\" and \"roof replacement\" before DFW hail season, so you catch the surge instead of missing it.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real DFW leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local and storm-season content, timed so you're ranked before demand spikes." },
      { name: 'Build authority', desc: "Links and citations from trusted DFW and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Dallas SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and suburbs.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own DFW search through storm season.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Storm-keyword + bilingual SEO', 'eCommerce / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Dallas?', a: "Most Dallas SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and whether you need extra content and storm-season work. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Dallas?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on low-competition terms and slower on the most competitive DFW keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most contractors do best running SEO as the long-term engine and ads for short-term spikes like a hailstorm." },
      { q: 'Can SEO get me ranked before DFW hail season?', a: "Yes, and that's the smartest time to start. North Texas leads the country in hail claims, and \"roof repair\" and \"storm damage\" searches spike April through June. Because SEO takes a few months to build, you want to start in winter to be ranked when the storms arrive. Wait until the hail hits and you're already behind." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add storm-keyword, bilingual, and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which areas around Dallas do you cover?', a: "All of Dallas–Fort Worth and the surrounding suburbs — Plano, Frisco, McKinney, Arlington, Irving, Garland, Richardson and more — with genuine local pages rather than one generic Dallas page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'dallas', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Dallas Web Design Company | Sites That Convert | OnwardCraft',
    metaDescription:
      'Dallas web design that turns visitors into booked jobs — fast, mobile-first sites built for contractors and ready for storm-season demand. Transparent pricing. Free quote.',
    eyebrow: 'Web Design · Dallas–Fort Worth',
    h1: 'Dallas web design that turns visitors into booked jobs',
    h2Exact: 'Dallas Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Dallas contractors fast, mobile-first sites engineered to turn visitors into booked work — and to hold up when a hailstorm sends a flood of traffic your way.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Dallas contractor websites lose leads quietly: slow on a phone, buried call button, no clear offer. Then a storm hits, traffic spikes, and the site can't convert it. Web design done right fixes all of that. We build sites that load fast, look like the professional you are, and turn Plano-to-Oak-Cliff visitors into booked jobs.",
    aioQuestion: 'What makes a good contractor website in Dallas?',
    aioAnswer:
      "A good Dallas contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and is built to handle traffic spikes during storm season. Because most Dallas searches happen on mobile and demand can surge overnight after hail, mobile speed and a conversion-first layout are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next guy. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Dallas visitors are on mobile, and they bounce if your site takes more than a few seconds to load. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking." },
      { title: "It can't handle a storm surge", body: "When hail hits DFW, your traffic can spike overnight. A slow or confusing site wastes that surge — visitors land, can't find the call button, and leave. We build for speed and conversion so you book the storm rush instead of losing it." },
    ],
    servicesHeading: "What's in an OnwardCraft Dallas website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your service area, and the jobs you actually want." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your Dallas traffic is. Fast, thumb-friendly, easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that speak to anxious homeowners and book the job, not filler text that reads like everyone else." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages for the DFW suburbs." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings even under a traffic surge." },
      { name: 'Storm-ready landing pages', desc: "Dedicated pages for storm damage, hail, and insurance work, built to convert the spike of searches every DFW hail season brings.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your service area, your best jobs, and your competitors, then map the site around booking more of the work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with storm-damage and insurance pages where the demand is." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting." },
    ],
    pricing: {
      heading: 'Transparent Dallas web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Storm-ready landing pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Bilingual build option', 'Advanced SEO + schema', 'Integrations & booking', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Dallas?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count, integrations, and whether you want storm-damage and bilingual pages. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Can my site handle a hail-season traffic spike?', a: "Yes, and in DFW that matters. When a storm hits, \"roof repair\" and \"storm damage\" searches surge and your site can get a flood of visitors at once. We build fast, mobile-first, and conversion-focused, with dedicated storm-damage pages, so that surge turns into booked jobs instead of bounced visitors." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Dallas terms before storm season." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your Dallas traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Dallas site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'dallas', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Dallas Website Redesign | More Leads, No Traffic Loss | OnwardCraft',
    metaDescription:
      'Redesign your Dallas website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs and hold up in storm season. Free audit.',
    eyebrow: 'Website Redesign · Dallas–Fort Worth',
    h1: 'Redesign your Dallas website without losing your rankings',
    h2Exact: 'Dallas Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, and unready for a storm surge. We redesign Dallas contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Dallas contractor sites for speed and conversions, build in storm-damage pages where DFW demand is, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Dallas site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "For a high-ticket job like a roof or HVAC system, homeowners judge you by your site in seconds. An old, cluttered design quietly sends them to a competitor who looks more established — even when your work is better." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your Dallas visitors before they ever see your offer. A redesign built mobile-first wins them back." },
      { title: "It can't convert a storm surge", body: "When hail hits DFW, traffic spikes — and a slow, confusing site wastes it. We rebuild for conversions and speed, with storm-damage and insurance pages ready, so the next hailstorm fills your calendar." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings, even under a traffic surge." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your Dallas traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the price of your jobs." },
      { name: 'Storm-ready rebuild', desc: "We add or rebuild storm-damage, hail, and insurance pages so the new site converts the surge every DFW hail season brings.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you leads and rankings, then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast, add the storm-damage pages, and prepare every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and improve, not drop." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Dallas redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + storm-damage pages', 'Mobile-first rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Bilingual version option', 'Advanced SEO migration', 'Integrations & booking', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Dallas?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size, integrations, and whether you need storm-damage and bilingual pages. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'Can a redesign get me ready for DFW storm season?', a: "Yes, and it's worth timing it right. North Texas leads the nation in hail claims, and demand for roofing and restoration spikes April through June. We rebuild with dedicated storm-damage and insurance pages and finish the migration before the storms hit, so the new site is ready to convert the surge." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is hard to update, isn't bringing in leads, or can't handle a storm-season traffic spike, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Can you add storm-damage and insurance pages?', a: "Absolutely, and in DFW we recommend it. Dedicated pages for hail, storm damage, and insurance claims capture the surge of searches every hail season brings and convert them into booked jobs." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const dallasCity = {
  citySlug: 'dallas', city: 'Dallas', state: 'Texas', stateAbbr: 'TX', metro: 'Dallas–Fort Worth',

  titleTag: 'Dallas Marketing for Contractors | Web, SEO & Leads | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Dallas–Fort Worth contractors. Get found, get booked, catch hail season, and own your leads instead of renting them. Free Dallas audit.',

  eyebrow: 'Dallas · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Dallas contractors found and booked',
  h2Exact: 'Dallas Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for DFW's huge, storm-driven market. One team to get you ranking, converting, and off the rented-lead treadmill — and ready the day hail season hits.",
  heroProof: ['Built for the trades', 'Ready for hail season', 'No lock-in contracts'],
  primaryCta: 'Get my free Dallas audit',

  intro:
    "If you run a contracting business in Dallas–Fort Worth, you're fighting for attention in one of the biggest and most competitive markets in the country — and one that sits in hail alley. Winning here takes three things working together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack before the next storm hits. Here's how we help DFW contractors do exactly that.",
  aioQuestion: 'How do Dallas contractors get more leads online?',
  aioAnswer:
    "Dallas contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack. Because DFW leads the nation in hail claims and demand surges every storm season, the contractors who are already ranked and look established catch that wave and win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when DFW searches \"near me\" — and be ranked before the next hailstorm sends demand surging. The highest-return move for most local businesses.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search, including the storm-damage terms that spike every hail season, and measure it in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs and hold up when a storm sends a flood of traffic your way — not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, add the storm-damage pages DFW demand needs, and migrate carefully so you keep every bit of ranking you've earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Dallas?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads — and so they're ready when hail season hits DFW." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors — so we understand emergency calls, storm-driven demand, and insurance work." },
    { q: 'Can you help me catch DFW hail season?', a: "Yes, and it's one of the biggest reasons our clients work with us. North Texas leads the nation in hail claims, and roofing and restoration demand spikes April through June. We get you ranked and your site ready before the storms so you catch that surge instead of missing it." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Dallas areas do you serve?', a: "All of Dallas–Fort Worth and the surrounding suburbs — Plano, Frisco, McKinney, Arlington, Irving, Garland, Richardson, Allen, Grand Prairie and more." },
    { q: 'Where should I start?', a: "Start with a free Dallas audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};
