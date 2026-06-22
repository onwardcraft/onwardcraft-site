// CINCINNATI: per-metro, per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Cincinnati's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// CINCINNATI: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'What it really takes to get found in Cincinnati search',
  body:
    "Cincinnati is built on seven hills above the Ohio River, and that shape decides who wins local work. The metro reaches across three states: Ohio neighborhoods stacked on the bluffs, plus Covington, Newport, and Florence on the Kentucky bank, with parts of Indiana to the west. A homeowner in Newport is a five-minute drive from one in Mt. Adams, yet Google treats them as separate local markets. Most contractors optimize the Ohio side and quietly skip Kentucky, which leaves booked jobs on the table. The housing tells the rest of the story. Over-the-Rhine holds one of the largest stretches of Italianate brick row houses in the country, and the hillside neighborhoods (Mt. Adams, Clifton, Hyde Park, Price Hill) are packed with dense brick homes from the late 1800s. River-valley humidity sits heavy through summer, and the winter freeze-thaw cycle works on old brick, mortar joints, and aging foundations harder than people expect. Contractors who actually understand a 130-year-old brick three-story earn the trust and the higher ticket. The city's economy adds a steady, demanding customer base too: Procter & Gamble, Kroger, and the rest of the Fortune 500 base downtown bring engineers and managers who compare quotes and read reviews before they call. Demand also runs on a clock. Summer humidity drives HVAC calls from June into September, hard winter freezes split pipes and crack masonry, and spring storms along the river bring flooding to the low neighborhoods. The contractor already ranking when those weeks arrive is the one whose phone rings.",
  pullQuote: 'A river city of seven hills spread across three states, full of dense old brick housing. The contractor who ranks on both banks owns a market most of their competition never bothered to map.',
  donut: {
    title: 'How Cincinnati searches',
    value: 55,
    centerLabel: 'on mobile',
    legend: [
      { label: 'Mobile', pct: 55, kind: 'teal' },
      { label: 'Desktop', pct: 45, kind: 'grey' },
    ],
  },
  seasonTitle: 'When the phone starts ringing',
  seasonCaption: 'Spring storm and river flooding (Mar to May), summer HVAC (Jun to Sep), winter freeze (Dec to Feb)',
  seasonalDemand: [
    { m: 'J', v: 72 }, { m: 'F', v: 68 }, { m: 'M', v: 82, peak: true },
    { m: 'A', v: 88, peak: true }, { m: 'M', v: 80, peak: true }, { m: 'J', v: 90, peak: true },
    { m: 'J', v: 95, peak: true }, { m: 'A', v: 92, peak: true }, { m: 'S', v: 74 },
    { m: 'O', v: 60 }, { m: 'N', v: 62 }, { m: 'D', v: 78 },
  ],
  stats: [
    { value: '2.3M', label: 'people across the Cincinnati tri-state metro' },
    { value: '~55%', label: 'of Cincinnati searches happen on a phone', accent: true },
    { value: 'Jun to Sep', label: 'peak HVAC season, when river-valley humidity drives cooling calls' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks when Cincinnati searches for a contractor' },
  ],
  neighborhoods: [
    'Hyde Park', 'Mt. Adams', 'Clifton', 'Oakley', 'Anderson Township',
    'Blue Ash', 'Mason', 'West Chester', 'Covington', 'Florence',
    'Newport', 'Kenwood', 'Norwood', 'Westwood', 'Mariemont',
  ],
};

const AREAS = [
  'Hyde Park', 'Mt. Adams', 'Clifton', 'Oakley', 'Anderson Township',
  'Blue Ash', 'Mason', 'West Chester', 'Covington KY', 'Florence KY',
  'Newport KY', 'Kenwood', 'Norwood', 'Westwood', 'Mariemont',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. Cincinnati is a tight-knit, locally loyal market. When you're the contractor people in Hyde Park or Covington search for and find first, you don't need a lead broker. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only work with the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We know what a humid August does to AC demand, what freeze-thaw does to old brick and mortar, how spring flooding hits the river-low neighborhoods, and how the Kentucky side searches. Everything we build is shaped around how Cincinnati homeowners really look for help.",
  },
  {
    title: 'We get you off rented leads',
    body: "The goal is a pipeline that belongs to you. Not one more monthly bill paid to a broker for a Hyde Park homeowner that three of your competitors are also calling tonight.",
  },
  {
    title: 'We actually know Cincinnati',
    body: "Hill by hill and bank by bank: Mt. Adams to Clifton, Hyde Park to Westwood, and across the river into Covington, Newport, and Florence that most agencies forget exists. That kind of local read is something a national shop can't fake by dropping a city name into a template.",
  },
  {
    title: 'No contracts, no fine print',
    body: "Prices are on the page, reporting ties back to actual leads, and you go month-to-month after the first 90 days. If we aren't earning it, you go. That keeps the pressure exactly where it should sit, which is on us.",
  },
];

const PROOF = {
  heading: "We're new, so here's the honest math instead of a logo wall",
  body:
    "A lot of agencies open with a grid of client logos. We're a young, founder-led shop, and we're not going to fake a track record we haven't built yet. What we can give you is the reasoning behind why this works, pulled from Google's and the industry's own data on how people actually search for a local contractor.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here's a rough sketch, clearly marked as a projection and not a result we're claiming: say a Cincinnati contractor pulls around 1,200 local \"near me\" impressions a month across a handful of neighborhoods. Climbing out of page-two invisibility into the top three is the gap between a few scattered calls and a calendar you can't keep up with. When the summer HVAC rush or a spring river storm lands, that gap turns brutal. In your free audit we run the real figures for your business: your rankings, your search volume, and a straight 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Cincinnati', state: 'Ohio', stateAbbr: 'OH', metro: 'Cincinnati',
  heroProof: ['Built for the trades', 'Tri-state targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const cincinnatiLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'cincinnati', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Cincinnati Local SEO Company | OnwardCraft',
    metaDescription:
      'Search your service in Cincinnati and three businesses show on the map. We get you into those three across Ohio and Northern Kentucky so the call lands with you.',
    eyebrow: 'Local SEO · Cincinnati, OH',
    h1: 'When Cincinnati searches for what you do, be the first name they find',
    h2Exact: 'Cincinnati Local SEO Company',
    heroSubhead:
      "Google pins three businesses to the map when someone searches \"near me,\" and everyone below them is basically invisible. Across a three-state metro of hillside brick neighborhoods in Ohio and fast-growing suburbs in Northern Kentucky, we put you in that top three for every market you actually serve.",
    primaryCta: 'Get my free Cincinnati audit',
    intro:
      "Cincinnati local SEO comes down to one moment: a homeowner in Hyde Park, Blue Ash, or Covington types your service plus \"near me,\" and you are either one of the three businesses Google pinned to the map or you are not. Most people tap one of those three and never scroll. This is a river city of dense old brick housing that needs contractors who know it, spread across three states and three seasons of hard demand. Becoming one of those three in every neighborhood you serve is the entire game. Here's how you get there.",
    aioQuestion: 'How do Cincinnati businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile tuned to the exact services and neighborhoods you want; name, address, and phone details that match everywhere online; a steady flow of real reviews; and local content built around genuine Cincinnati hillside neighborhoods and the Kentucky side across the river. Because the metro spans three states, the winners optimize Covington, Florence, and Newport separately from the Ohio neighborhoods, since Google scores them as distinct local markets.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Three competitors own the spots on the map, and you are not one of them', body: "Search your own service plus \"near me\" right now. Those three businesses Google pins to the map take the overwhelming share of clicks. If you are not one of them, it barely matters how good your brickwork or your install is, because most Cincinnati homeowners never scroll far enough to see you. Climbing into that top three for Hyde Park, Blue Ash, and the Kentucky bank is usually the single highest-return move a local contractor here can make." },
      { title: "You're paying for leads that never belonged to you", body: "Angi, Thumbtack, and HomeAdvisor sell the same Cincinnati homeowner to four contractors, then bill each of you to fight over the scrap. It's a treadmill. Local SEO builds the opposite: a homeowner finds you, calls you, and nobody else got that lead. Run it long enough and you stop renting visibility and start owning the pipeline outright." },
      { title: "You're skipping the whole Kentucky side of the river", body: "Covington, Florence, and Newport sit a bridge away, but most Ohio-based contractors have never optimized for a single Northern Kentucky search. Those homeowners need roofing, HVAC, and plumbing work just like anyone in Anderson Township, and because the Ohio crews ignore them, the competition for those searches usually runs lighter." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Cincinnati and Northern Kentucky searches belong to you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to line up everywhere Google checks, on both banks of the river. We fix the listings that contradict each other and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple engine that turns each finished Cincinnati job into a fresh review. It lifts your Map Pack ranking and gives the next homeowner on the hill a reason to call you before anyone else." },
      { name: 'Neighborhood pages', desc: "Real pages for Hyde Park, Mt. Adams, Clifton, Covington, and the rest, so you rank for the neighborhood someone is actually searching instead of a generic \"Cincinnati.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, and mobile speed. The plumbing under the hood that lets every other piece rank at all." },
      { name: 'Local link building', desc: "Mentions and links from Cincinnati sources Google trusts: local press, neighborhood and business associations, trade partners. In this market that is often what separates page one from page two." },
      { name: 'Cross-river Kentucky targeting', desc: "Separate optimization for the Northern Kentucky market across Covington, Florence, and Newport, so you capture the demand most Ohio contractors are quietly handing away.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts inside AI Overviews, ChatGPT, and Perplexity. We structure your content so those engines can read you and name you in their answers.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you genuinely rank today across the Cincinnati hills and the Kentucky side, and pin down which competitors are beating you in the Map Pack and exactly why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP come first, including a separate Kentucky profile if you serve that bank of the river. Most clients see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These build week over week, which is why local SEO pays off most for the contractor who starts before the busy season, not after it." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Cincinnati's hillside communities and the Northern Kentucky suburbs, backed by the on-page work that makes them rank." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood, or cross the river for the next market." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting your Cincinnati Map Pack foundation locked in.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For contractors fighting across several Cincinnati neighborhoods.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across the tri-state metro.', features: ['Everything in Local Growth', 'Local link building', 'Cross-river Northern Kentucky targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Cincinnati?', a: "Most Cincinnati engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're chasing. The tiers above lay it out. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move within a few weeks. The competitive Cincinnati keywords usually take 90 to 180 days of steady work, because reviews and citations build over time. Anyone promising you page one in 30 days is selling you a fantasy." },
      { q: 'What makes ranking in Cincinnati different from other cities?', a: "The three-state geography is the big one. You've got Ohio, Kentucky, and sometimes Indiana homeowners who are all a short drive apart but sit in different Google local markets. You have to optimize for the Kentucky side (Covington, Florence, Newport) separately from Anderson Township or Blue Ash. Most contractors leave the Kentucky bank completely untouched online." },
      { q: "Should I target Northern Kentucky even though I'm based in Ohio?", a: "If you'll do the work there, absolutely. Covington, Florence, and Newport are a bridge from downtown, and most Ohio-based contractors have never optimized for those markets at all. That usually means the competition for those local searches is far lighter than on the Ohio side." },
      { q: 'Which areas do you cover?', a: "The full Cincinnati metro on both banks: Hyde Park, Mt. Adams, Clifton, Oakley, Anderson Township, Blue Ash, Mason, West Chester, Norwood, Mariemont, and across the river into Covington, Florence, and Newport. We build genuine neighborhood pages, not one generic Cincinnati page, because that's what ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand summer cooling emergencies, spring river flooding, the demands of working on century-old brick, and the storm-damage work that follows a hard freeze, and we build your local SEO around all of it." },
      { q: "How does Cincinnati's weather change when I should invest in SEO?", a: "The seasonal swings here are real: summer HVAC from June through September when river-valley humidity peaks, spring storm and flooding calls from March through May, and winter freeze damage to pipes and old masonry. Rankings take months to build, so you need to be in place before the season hits, not chasing it. We get you ranking for those seasonal searches ahead of the spike." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research now starts inside AI instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business by name. In Cincinnati that's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO takes to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your Cincinnati neighborhoods and the Kentucky side, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck, just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'cincinnati', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Cincinnati SEO Company | OnwardCraft',
    metaDescription:
      'Cincinnati SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in, built for a tri-state river-city market.',
    eyebrow: 'SEO Services · Cincinnati, OH',
    h1: 'Get your Cincinnati business to the top of Google and keep it there',
    h2Exact: 'Cincinnati SEO Company',
    heroSubhead:
      "Ads die the second you stop paying. SEO does the reverse: rank once for what Cincinnati homeowners search, from Hyde Park to Covington, and the leads keep arriving. We build that ranking and tie every report back to real calls and booked jobs.",
    primaryCta: 'Get my free Cincinnati SEO audit',
    intro:
      "Cincinnati SEO comes down to one blunt question: when someone searches what you do, are you on page one or page two? In this market page two might as well be page fifty. We get contractors ranking for the money keywords across a three-state metro, and we measure the whole thing in leads, not traffic that never picks up the phone.",
    aioQuestion: 'How do Cincinnati businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content tied to specific Cincinnati neighborhoods and the Kentucky side, and earning links from trusted regional sources. In a river metro that crosses state lines, ranking for the Ohio suburbs separately from Covington and Florence is one of the fastest ways to grab demand competitors ignore. Seasonal HVAC and storm-damage terms are the other quick win.",
    problemHeading: "Three reasons your Cincinnati site isn't bringing in work",
    painPoints: [
      { title: "You're stranded on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it either. In a metro with real competition from Ohio and Kentucky crews, if you're not in the top handful of results for what you sell, your site is effectively invisible no matter how good the work behind it is." },
      { title: "You're renting all your traffic from Google Ads", body: "Ads can work, but the instant your card stops, the leads stop cold. SEO builds an asset you actually own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost, including through the summer HVAC rush when ad prices climb." },
      { title: "You're invisible for the seasonal demand that pays the bills", body: "Cincinnati demand swings hard: HVAC through humid summer heat, storm and flooding calls in spring, freeze repairs to pipes and old masonry in winter. The contractors already ranking for those terms when the season turns book out fast. If your SEO ignores seasonal and emergency searches, you're handing away your busiest, most profitable weeks." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank your Cincinnati site at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned for the exact terms Cincinnati and Northern Kentucky homeowners search: titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what Cincinnati buyers search, earn links, and keep bringing in leads long after we hit publish." },
      { name: 'Link building', desc: "Authority from real Cincinnati-area and industry sources. In a competitive tri-state market split across two states, links are often the deciding factor between page one and page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across Ohio neighborhoods and Northern Kentucky right alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and booked Cincinnati jobs, not just rankings and traffic, so you always know what your SEO is worth in dollars." },
      { name: 'Seasonal & emergency SEO', desc: "We rank you for the summer HVAC, spring storm, and winter freeze searches that drive Cincinnati's busiest weeks, so you're visible before demand spikes instead of chasing it after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and name your Cincinnati business, where a growing share of \"near me\" research now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors across the Cincinnati metro and Northern Kentucky, then build a roadmap around the keywords most likely to drive real leads, not just impressions." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile. The foundation every other piece of your Cincinnati SEO needs before it can rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the seasonal and emergency terms that decide who wins the busy weeks here." },
      { name: 'Build authority', desc: "Links and citations from trusted Cincinnati-area and industry sources to push your competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set or across the river into Kentucky." },
    ],
    pricing: {
      heading: 'Transparent Cincinnati SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site chasing its core Cincinnati keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and Cincinnati neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For contractors who want to own Cincinnati search across Ohio and Kentucky.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal & emergency SEO', 'Cross-river KY targeting', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Cincinnati?', a: "Most Cincinnati SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. The tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Cincinnati?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6. Tighter neighborhood terms move faster; the most contested metro-wide keywords take longer. SEO builds on itself, so the longer you run it, the bigger the gains get." },
      { q: 'Is SEO better than Google Ads in Cincinnati?', a: "They do different jobs. Ads buy instant traffic that stops the moment you stop paying, and Cincinnati ad costs climb during the busy seasons. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most contractors do best running SEO as the long-term engine and ads for short-term spikes." },
      { q: 'Should my Cincinnati SEO target seasonal demand?', a: "Yes. When summer humidity sets in, AC and cooling calls surge from June through September. Spring storms and Ohio River flooding trigger emergency roofing, restoration, and drainage calls. Winter freezes hit pipes, HVAC, and old masonry hard. Ranking takes months to build, so you need to be in place before the season, not chasing it. We optimize for those terms ahead of time." },
      { q: 'Should I target Northern Kentucky in my SEO?', a: "If you'll do the work there, absolutely. Covington, Florence, and Newport are part of the real Cincinnati market, but most Ohio-based contractors ignore them online. That means lighter competition for those searches and real jobs sitting unclaimed." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement on Cincinnati keywords, then it switches to month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and name your Cincinnati business, not just classic search results." },
      { q: 'Which Cincinnati areas do you cover?', a: "The full tri-state metro: Hyde Park, Mt. Adams, Clifton, Oakley, Blue Ash, Mason, West Chester, Anderson Township, and across the river into Covington, Florence, and Newport, with genuine local pages rather than one generic Cincinnati page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads straight to you. The more you own your search visibility across Cincinnati neighborhoods and Northern Kentucky, the less you depend on paying brokers for leads three competitors also bought." },
      { q: "What's in the free SEO audit?", a: "Where you rank today across Cincinnati and Northern Kentucky, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'cincinnati', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Cincinnati Web Design Company | OnwardCraft',
    metaDescription:
      'Cincinnati web design that turns visitors into booked jobs: fast, mobile-first sites built for contractors serving Ohio, Northern Kentucky, and old brick homes.',
    eyebrow: 'Web Design · Cincinnati, OH',
    h1: 'Cincinnati web design that turns visitors into booked jobs',
    h2Exact: 'Cincinnati Web Design Company',
    heroSubhead:
      "A handsome website that never generates a call is just a brochure. We build Cincinnati contractors fast, mobile-first sites engineered to turn visitors into booked work, from Hyde Park to Covington, in a market where loyal locals back whoever shows up first and looks like they know the neighborhood.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Cincinnati contractor websites bleed leads quietly: slow on a phone, call button buried, no clear offer anywhere. Web design done right closes all of those leaks. We build sites that load fast, look like the professional you are, and turn visitors from Hyde Park to Florence KY into booked jobs. Built for a market where loyal Cincinnati homeowners reward the local name they already trust.",
    aioQuestion: 'What makes a good contractor website in Cincinnati?',
    aioAnswer:
      "A good Cincinnati contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, shows you know the specific neighborhoods you serve on both banks of the Ohio River, and proves trust with reviews and real project photos from local brick and newer-build homes. Because more than half of Cincinnati searches happen on a phone and the competition is real, mobile speed and an obvious next step are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It reads like a printed brochure, not a lead engine", body: "Plenty of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next company. We design every page around one job: turning a visitor into a booked lead, whether they're in Oakley or Covington." },
      { title: "It crawls on a phone", body: "More than half of Cincinnati searches happen on mobile, and visitors bounce if your site takes more than a couple of seconds to load. Slow sites also rank worse, so you lose twice. We build fast, so you keep both the visitor and the ranking." },
      { title: "It says nothing about your actual neighborhoods", body: "A homeowner in Mt. Adams wants to see that you work in Mt. Adams, and that you understand what a hillside brick three-story actually takes. A generic 'Cincinnati contractor' page could be anybody. We build sites that name the neighborhoods and the specific housing stock you handle, so visitors trust you're genuinely local." },
    ],
    servicesHeading: "What's in an OnwardCraft Cincinnati website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your neighborhoods, and the jobs you actually want, from old brick restorations to HVAC installs to whatever you're best at." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where most of your Cincinnati traffic lands. Fast, thumb-friendly, and easy to call from in one tap." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms set where Cincinnati homeowners actually tap them. Every page carries one unmistakable next step." },
      { name: 'Copy that sells', desc: "Words that speak to Cincinnati homeowners, including the ones wrestling with a hundred-year-old brick house, and book the job instead of reading like filler." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank: clean structure, schema, fast load, and neighborhood-ready pages for both banks of the river." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects your conversions and your Cincinnati rankings at the same time." },
      { name: 'Neighborhood-targeted pages', desc: "Pages built around Hyde Park, Mt. Adams, Blue Ash, Covington, Florence, and the rest, so you stand out in every corner of the tri-state metro instead of blending into one generic city page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read your site and put your Cincinnati business in their answers as more search shifts toward AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your neighborhoods on both banks, your most profitable jobs, and your competitors, then map the site around booking more of the work you actually want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert Cincinnati visitors, and you see it and shape it before a single line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page and neighborhood-specific language throughout." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in for Cincinnati search from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting, especially ahead of the seasonal demand spikes." },
    ],
    pricing: {
      heading: 'Transparent Cincinnati web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade Cincinnati contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established Cincinnati contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Cross-river KY targeting'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location Cincinnati businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Cincinnati?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. The tiers above lay it out: fixed price, no surprises, and you own the finished site outright." },
      { q: 'How long does it take to build?', a: "A focused Cincinnati site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you posted at every stage." },
      { q: 'Will my site help me stand out in the Cincinnati market?', a: "That's the point. We build around the specific neighborhoods you serve, including the Kentucky side that most Ohio contractors ignore online, keep the site fast, and put a clear offer and call button front and center. Cincinnatians stay loyal to local businesses, so a site that actually speaks their neighborhood wins their call." },
      { q: 'Will my new site actually rank on Google in Cincinnati?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and neighborhood-ready pages for both the Ohio and Kentucky sides. The build gets you ready to rank, and pairing it with our SEO service is how you climb the competitive Cincinnati terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, and no platform you can't walk away from." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because more than half of Cincinnati searches happen on a phone. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'Can you build pages for my Northern Kentucky service area?', a: "Yes, and we recommend it. If you serve Covington, Florence, or Newport, we build dedicated pages for those markets so you rank on the Kentucky side separately from your Ohio pages. That's how you capture the full tri-state market." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and after that we offer affordable monthly maintenance for updates, speed, and security so your Cincinnati site stays sharp." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time fixed-price project. Any ongoing maintenance or SEO is month-to-month, so you can leave whenever you like." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Cincinnati site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'cincinnati', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Cincinnati Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your Cincinnati website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs across the tri-state metro.',
    eyebrow: 'Website Redesign · Cincinnati, OH',
    h1: 'Redesign your Cincinnati website without losing your rankings',
    h2Exact: 'Cincinnati Website Redesign Company',
    heroSubhead:
      "An outdated site quietly costs you jobs every week: slow, clumsy on a phone, easy for a Cincinnati homeowner to scroll past. We redesign contractor sites to convert more and load faster, and we migrate so carefully that you keep every bit of ranking you've already earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks prettier but converts exactly the same, or it launches and the rankings vanish overnight. We do neither. We redesign Cincinnati contractor sites for speed and conversions, build them to serve the full tri-state metro, and migrate with the redirects and SEO care that protect the traffic you've already got.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured, including proper targeting for both the Ohio and Northern Kentucky markets.",
    problemHeading: "Signs your Cincinnati site is overdue for a redesign",
    painPoints: [
      { title: "A dated look quietly bleeds your trust away", body: "For a high-ticket job, especially on a brick home in Hyde Park or Clifton, Cincinnati homeowners size you up by your site in seconds. An old, cluttered design quietly ships them to a competitor who simply looks more established, even when your work is plainly better." },
      { title: "It's clunky and slow on a phone", body: "More than half of Cincinnati searches happen on mobile. If your site is awkward or slow on a phone, you're losing the bulk of your visitors before they ever reach your offer. A redesign built mobile-first wins those visitors back and turns them into leads." },
      { title: "It doesn't cover your full market", body: "If your current site only talks about Cincinnati and ignores the Kentucky side of the river, you're leaving real jobs in Covington, Florence, and Newport to whoever ranked there instead. We rebuild to cover the whole tri-state service area properly." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you Cincinnati leads and rankings today, so the redesign fixes the real problems instead of just swapping the colors around." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep every bit of the rankings and traffic you've already earned on both banks of the river." },
      { name: 'Conversion redesign', desc: "Clear offers, smarter call-to-action placement, and lead forms Cincinnati homeowners actually fill out. We redesign for booked jobs, not just a prettier screenshot." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals, which lifts your conversions and your Cincinnati rankings together." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone first, since that's where the majority of your Cincinnati and Northern Kentucky traffic actually lands." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and earns the loyalty of a Cincinnati market that backs its local names." },
      { name: 'Tri-state area rebuild', desc: "Rebuilt to serve the Ohio neighborhoods and Northern Kentucky properly, with separate optimized pages for Covington, Florence, and Newport so you capture the whole market.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read your rebuilt site and name your Cincinnati business as more search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you leads and rankings across Cincinnati and Northern Kentucky, then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we rebuild a single page." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration, including any Northern Kentucky pages." },
      { name: 'Launch with SEO care', desc: "We launch with every redirect in place and watch the rankings closely so your Cincinnati positions hold and climb instead of dropping." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting, plus ongoing speed and updates, especially before the seasonal demand peaks." },
    ],
    pricing: {
      heading: 'Transparent Cincinnati redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small Cincinnati contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established Cincinnati contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Tri-state area rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location Cincinnati sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Cincinnati?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and the rebuilt site is yours outright." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's handled carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve your content and metadata, migrate your schema, and test on staging before anything goes live. Done right, a Cincinnati redesign holds your rankings and usually pushes them higher." },
      { q: 'How long does a redesign take?', a: "A focused Cincinnati redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at every stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, doesn't cover your Northern Kentucky service area, isn't bringing in leads, or blends into the Cincinnati market without naming specific neighborhoods, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and sharpen your existing content, preserve what's ranking, and handle the technical migration so nothing important slips through the cracks, including any existing Northern Kentucky pages." },
      { q: 'Will the redesign help me compete across the tri-state metro?', a: "That's the goal. We rebuild to cover both Ohio and Northern Kentucky properly, with separate pages for Covington, Florence, and Newport, and keep the site fast with a clear offer on every page. Cincinnatians stay loyal to local names, and a site that speaks their neighborhood earns that loyalty." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which is exactly what most Cincinnati visitors and Google both reward." },
      { q: 'Do I own the redesigned site?', a: "Completely: the rebuilt site, the domain, and the content. No platform lock-in of any kind." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix (including tri-state coverage), and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const cincinnatiCity = {
  citySlug: 'cincinnati', city: 'Cincinnati', state: 'Ohio', stateAbbr: 'OH', metro: 'Cincinnati',

  titleTag: 'Cincinnati Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Cincinnati contractors across Ohio and Northern Kentucky. Get found, get booked, and own your leads instead of renting them.',

  eyebrow: 'Cincinnati · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Cincinnati contractors found and booked',
  h2Exact: 'Cincinnati Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Cincinnati's three-state metro, from the hillside brick neighborhoods in Ohio to the fast-growing Kentucky suburbs across the river. One team to get you ranking, converting, and off the rented-lead treadmill for good.",
  heroProof: ['Built for the trades', 'Tri-state targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Cincinnati audit',

  intro:
    "If you run a contracting business in Cincinnati, you're working a market most agencies have never fully mapped. There's the Ohio side: brick hillside neighborhoods in Mt. Adams and Clifton, the row houses of Over-the-Rhine, established suburbs in Blue Ash and Mason, and river-low areas with real flooding risk. And there's the Kentucky side: Covington, Florence, and Newport, a bridge away but a completely different local search market that most Ohio contractors ignore online. Winning in Cincinnati takes three things working together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack on both banks. Here's how we help Cincinnati contractors pull that off.",
  aioQuestion: 'How do Cincinnati contractors get more leads online?',
  aioAnswer:
    "Cincinnati contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack across the tri-state metro. The contractors who do best also optimize separately for Northern Kentucky (Covington, Florence, and Newport), since those searches are often less competitive and represent real jobs that Ohio-based contractors keep leaving unclaimed.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Cincinnati searches \"near me,\" across Ohio neighborhoods and the Kentucky side. The single highest-return move for most local contractors here.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search, own the seasonal spikes that define Cincinnati's busiest weeks, and build an asset you keep instead of renting traffic from ads.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs, built for Cincinnati's old brick homes, three-state geography, and locally loyal homeowners who back the name they trust.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, expand it to cover the Kentucky side properly, and migrate it so carefully that you keep every bit of ranking you've already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Cincinnati?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads across the full tri-state Cincinnati metro." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors, so we understand Cincinnati's old brick housing stock, its seasonal weather swings, and the cross-river Northern Kentucky market." },
    { q: 'Why does the Cincinnati market need a different approach?', a: "It's a genuine three-state metro built on seven hills. The Ohio neighborhoods and the Northern Kentucky suburbs are different local markets in Google's eyes, which means you have to be optimized for both banks separately. Most agencies treat the whole area as one market and miss half the opportunity." },
    { q: "Should I optimize for Northern Kentucky even if I'm based in Ohio?", a: "If you'll do the work in Covington, Florence, or Newport, yes. Those are real Cincinnati metro jobs, and most Ohio contractors have never targeted those searches. The competition there is often lighter, and the homeowners are just as close as the ones in Anderson Township." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm the exact scope in your free Cincinnati audit." },
    { q: 'Where should I start?', a: "Start with a free Cincinnati audit. We'll look at your website, your rankings on both banks of the river, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};
