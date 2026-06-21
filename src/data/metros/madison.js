// MADISON — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Madison's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// MADISON — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Madison requires a smarter strategy',
  body:
    "Madison is a city of roughly 270,000 people anchored by UW-Madison, the state capitol, and two sparkling lakes — but don't let its mid-size footprint fool you. The 50,000-student university creates a rental market that puts roofing, plumbing, and HVAC contractors in constant demand, and it produces a professional class of young homebuyers who research contractors the same way they research everything else: online, in depth, and with reviews open in one tab and your website in another. Two things make Madison demand uniquely intense. First, Wisconsin winters are genuinely brutal. When temperatures drop to -20°F wind chill and ice dams clog gutters along Willy Street or Dudgeon-Monroe, calls for heating emergencies and roof repairs spike overnight — and the contractors already in the Map Pack capture every one of them. Second, Madison has a deeply eco-conscious culture. Homeowners here are more likely to ask about heat-pump conversions, energy-efficiency upgrades, and green roofing than almost anywhere else in the Midwest, and contractors who speak that language fluently win the educated, higher-value jobs that make up a growing share of the local market.",
  pullQuote: 'In a college town that researches everything before buying, the contractor with the strongest online presence wins the work — every time.',
  donut: {
    title: 'How Madison researches contractors',
    value: 68,
    centerLabel: 'college-educated',
    legend: [
      { label: 'College-educated', pct: 68, kind: 'teal' },
      { label: 'Other', pct: 32, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes in Madison',
  seasonCaption: 'Winter heating/ice (Dec–Mar) and spring thaw flooding (Mar–May)',
  seasonalDemand: [
    { m: 'J', v: 94, peak: true }, { m: 'F', v: 90, peak: true }, { m: 'M', v: 78, peak: true },
    { m: 'A', v: 64 }, { m: 'M', v: 52 }, { m: 'J', v: 46 }, { m: 'J', v: 44 },
    { m: 'A', v: 48 }, { m: 'S', v: 54 }, { m: 'O', v: 58 },
    { m: 'N', v: 70 }, { m: 'D', v: 88, peak: true },
  ],
  stats: [
    { value: '50,000', label: 'UW-Madison students driving a massive rental and homebuyer market' },
    { value: '68%', label: 'of Madison adults are college-educated — they research before they hire', accent: true },
    { value: 'Dec–Mar', label: 'peak heating season, when ice dams and frozen pipes drive calls hard' },
    { value: 'Top 3', label: 'Map Pack spots that capture most of the clicks when Madison searches' },
  ],
  neighborhoods: [
    'Willy Street', 'Atwood', 'Dudgeon-Monroe', 'Vilas', 'Fitchburg',
    'Middleton', 'Verona', 'Sun Prairie', 'Monona', 'Cottage Grove',
    'Shorewood Hills', 'Maple Bluff', 'Nakoma', 'Wingra', 'Tenney-Lapham',
  ],
};

const AREAS = [
  'Madison', 'Fitchburg', 'Middleton', 'Verona', 'Sun Prairie', 'Monona',
  'Cottage Grove', 'Waunakee', 'Stoughton', 'McFarland', 'De Forest',
  'Oregon', 'Willy Street', 'Atwood', 'Dudgeon-Monroe',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching solid contractors pour money into Angi and HomeAdvisor for leads that three competitors also bought. Madison homeowners are smart — they research online, they read reviews, and they make deliberate decisions. That means the contractor with the best digital presence wins, not necessarily the one who spent the most on lead brokers. Our whole mission is to build you an online presence that generates calls you own, not leads you're renting from a middleman. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We understand the Madison homeowner',
    body: "This is one of the most educated, research-driven buyer markets in the Midwest. Madison homeowners look up reviews, compare websites, ask about energy efficiency, and take their time. We build your presence to win that kind of scrutiny — not just capture a quick click.",
  },
  {
    title: 'We get you ready for Wisconsin winters',
    body: "Ice dams, frozen pipes, heating emergencies — when a polar vortex hits Lake Mendota, demand spikes fast. We put you in the Map Pack before the season hits so those calls land with you, not whoever ranked first by accident.",
  },
  {
    title: 'We speak the eco-conscious angle',
    body: "Heat pumps, green roofing, energy-efficiency retrofits — Madison buyers ask about this stuff. We help you speak that language in your content, your website, and your GBP so you win the premium jobs competitors can't even compete for.",
  },
  {
    title: 'No contracts, no mystery',
    body: "Published prices, reporting tied to leads, month-to-month after 90 days. If we're not earning it, you leave. That keeps the accountability where it belongs: on us.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Madison contractor gets around 1,200 local \"near me\" impressions a month across a handful of neighborhoods. Moving from page-two invisibility into the top three is the difference between a trickle of winter calls and a fully booked heating season — and in a city where 68% of homeowners research online before hiring, that gap is decisive. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Madison', state: 'Wisconsin', stateAbbr: 'WI', metro: 'Madison',
  heroProof: ['Built for the trades', 'Madison neighborhood targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const madisonLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'madison', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Madison WI Local SEO Company | OnwardCraft',
    metaDescription:
      'Search your service in Madison and three businesses show up on the map. We get you into those three, so the call lands with you.',
    eyebrow: 'Local SEO · Madison, WI',
    h1: 'When Madison searches for what you do, be the first name they find',
    h2Exact: 'Madison Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. In a city full of educated, research-driven homeowners, we get you into that top three for your Madison neighborhoods — so the call lands with you instead of whoever happened to rank first.",
    primaryCta: 'Get my free Madison audit',
    intro:
      "Madison local SEO comes down to one thing: when a homeowner near Lake Mendota or in Dudgeon-Monroe searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. With UW-Madison pumping 50,000 students into a city of research-minded homeowners, and brutal Wisconsin winters driving emergency calls all winter long, being in that top three for the right neighborhoods is the whole game. Here's how you get there.",
    aioQuestion: 'How do Madison WI businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Madison neighborhoods. Madison homeowners are highly educated and research-oriented, so strong reviews and neighborhood-specific pages are especially powerful here — and contractors who highlight energy efficiency and sustainability win a growing share of the premium jobs.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks — and in a city where homeowners read reviews before calling, those top three spots carry even more weight. If you're not one of them across Willy Street, Fitchburg, and Middleton, most homeowners never see your name, no matter how good your work is." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Madison homeowner to three or four contractors, then bill each of you for the privilege of competing. Local SEO builds the opposite: a homeowner searches, finds you, and calls you — and nobody else paid for that lead. Over time you stop renting and start owning the pipeline." },
      { title: "You're invisible during Madison's peak demand windows", body: "When a December polar vortex drops temps to -20°F wind chill, heating emergency calls spike overnight. When the spring thaw hits, frozen pipe and flooding calls do the same. The contractors who rank before the season hits book everything. If your local SEO isn't in place ahead of those windows, you're scrambling while your competitors are fully booked." },
    ],
    servicesHeading: 'What it actually takes to rank you in Madison',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Madison searches — from ice dam repairs to heat pump installs — you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing across Madison-area directories." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. In a city of educated homeowners who read everything before hiring, your review count and recency are among your biggest trust signals." },
      { name: 'Neighborhood pages', desc: "Real pages for Willy Street, Atwood, Dudgeon-Monroe, Fitchburg, Middleton, Verona and the rest — so you rank for the neighborhood someone's actually searching, not just \"Madison WI.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Madison sources Google trusts — local press, Dane County associations, UW-area organizations, partners. This is what separates page one from page two here." },
      { name: 'Seasonal and emergency SEO', desc: "We rank you for heating emergencies, ice dam repairs, frozen pipes, and spring flooding before those windows open — so you're booked out when demand spikes, not scrambling to catch up.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. Madison's research-minded homeowners use these tools heavily. We structure your content so those engines read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across Madison's neighborhoods and suburbs, and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks — often before the next Wisconsin cold snap hits." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now over starting later." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Madison, Fitchburg, Middleton, Verona, Sun Prairie, and beyond — plus the seasonal content that captures winter and spring demand." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right across Madison.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses competing across Madison neighborhoods and suburbs.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: "For contractors who want to own Madison's Map Pack and surrounding suburbs.", features: ['Everything in Local Growth', 'Local link building', 'Seasonal and emergency SEO', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Madison WI?', a: "Most Madison engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Madison Map Pack?', a: "Profile improvements can move in a few weeks. The competitive Madison keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days in a college town full of savvy homeowners is selling you something." },
      { q: 'What makes Madison local SEO different?', a: "Two things. First, UW-Madison produces some of the most research-oriented homebuyers in the Midwest — they read reviews, compare websites, and do their homework before calling. Second, Wisconsin winters are genuinely brutal: when ice dams, frozen pipes, and heating emergencies spike in December, the contractors already in the top three book the work. Being in place before those windows is everything." },
      { q: 'Can you help me rank for eco and sustainability searches?', a: "Absolutely, and in Madison that's a real edge. A significant share of local homeowners actively seek out contractors who can speak to heat pumps, energy efficiency, and green roofing. We optimize your content and GBP so you show up for those searches — which your competitors often ignore entirely." },
      { q: 'Which areas around Madison do you cover?', a: "Madison proper plus Fitchburg, Middleton, Verona, Sun Prairie, Monona, Cottage Grove, Waunakee, Stoughton, McFarland, and surrounding Dane County communities. We build genuine neighborhood pages rather than one generic Madison page, because that's what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand Wisconsin heating emergencies, lakefront property needs, and the energy-efficiency angle Madison buyers expect." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more research starts in AI now instead of classic search — and Madison's educated homeowner base is ahead of the curve on this. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because the work is coming to you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across Madison's neighborhoods, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'madison', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Madison WI SEO Company | OnwardCraft',
    metaDescription:
      'Madison SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in contracts, built for an educated, research-driven.',
    eyebrow: 'SEO Services · Madison, WI',
    h1: 'Get your Madison business to the top of Google and keep it there',
    h2Exact: 'Madison WI SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what Madison homeowners search and the leads keep coming. We build that ranking and tie every report to actual calls and jobs — not vanity traffic.",
    primaryCta: 'Get my free Madison SEO audit',
    intro:
      "Madison SEO comes down to one question: when a UW-area homeowner or a Fitchburg family searches your service, are you on page one or page two? Page two might as well be invisible. We get contractors ranking for the money keywords in a market full of educated, research-intensive buyers — and we measure it in leads, not sessions.",
    aioQuestion: 'How do Madison WI businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms Madison homeowners search, publishing genuinely useful local content tied to specific neighborhoods and suburbs, and earning links from trusted Dane County sources. In Madison, ranking for Wisconsin's brutal winter demand — heating emergencies, ice dams, frozen pipe repairs — before the season hits is one of the highest-return SEO moves available, and contractors who also speak the city's sustainability language capture a premium slice of the market.",
    problemHeading: "Three reasons your Madison site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google. In a city where homeowners research contractors the same way they research grad school decisions, if you're not in the top handful of results for what you sell, most potential customers never see you — regardless of how good your reviews are." },
      { title: "You're renting traffic instead of owning it", body: "Google Ads can work, but the moment your budget pauses, the leads stop. And Madison homeowners are skeptical of ads — they trust organic rankings and peer reviews more than sponsored results. SEO builds an asset you own: rankings that keep producing leads at a fraction of the per-lead cost of paid traffic." },
      { title: "You're not ranking for Madison's seasonal demand windows", body: "When Wisconsin temps crash in December and ice dams form along Dudgeon-Monroe rooftops, search volume for heating and roof repairs spikes fast. When the spring thaw hits, flooding and water damage searches spike next. Contractors who rank for those terms ahead of time book the season. If your SEO ignores these windows, you're leaving your highest-revenue weeks on the table." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings in Madison',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms Madison homeowners search — titles, headings, content, and internal links aligned to what's actually driving calls." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what Madison buyers search before they hire — from energy-efficiency upgrades to winter storm prep — earning links and bringing in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real Madison and Dane County sources. In a market this research-driven, trust signals from recognizable local institutions move rankings." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across Madison's neighborhoods alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your Madison SEO is actually worth to your business." },
      { name: 'Seasonal & emergency SEO', desc: "We rank you for winter heating, ice dam, frozen pipe, and spring flooding searches before the demand spike — so you're booked when Madison needs you most, not scrambling after.", featured: true },
      { name: 'AI search & GEO', desc: "Madison homeowners are early adopters of AI search tools. We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you where research increasingly begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors across Madison's neighborhoods, then build a roadmap around the keywords most likely to drive real leads — including the seasonal windows that define Wisconsin's trade calendar." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank. Madison homeowners on phones don't wait for slow sites." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the seasonal, emergency, and eco-focused terms that set Madison apart from generic Midwest markets." },
      { name: 'Build authority', desc: "Links and citations from trusted Madison and Dane County sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set or season." },
    ],
    pricing: {
      heading: 'Transparent Madison SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused Madison site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across Madison neighborhoods and suburbs.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Madison-area search year-round.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal & emergency SEO', 'Multi-location or multi-trade', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Madison WI?', a: "Most Madison SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Madison?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6 — faster on tighter neighborhood terms and slower on the most competitive city-wide keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads for Madison contractors?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. Madison homeowners are also more skeptical of sponsored results than average — they trust organic rankings and reviews. SEO builds an asset you own that keeps producing leads at a lower cost per lead over time. Most contractors do best running SEO as the long-term engine and ads for short-term spikes." },
      { q: 'Should I target seasonal demand in my Madison SEO?', a: "Yes — this is one of the biggest advantages available to Madison contractors. When Wisconsin temps plunge in December, search volume for heating emergencies and ice dam repairs spikes fast. When the spring thaw hits, water damage and flooding searches follow. Ranking takes months to build, so you have to be in place before the season. We optimize for those windows ahead of time." },
      { q: "What's included in your Madison SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal/emergency and AI-search optimization. We confirm exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for — and Madison's highly educated homeowner base uses these tools more than most cities. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which areas around Madison do you cover?', a: "Madison proper plus Fitchburg, Middleton, Verona, Sun Prairie, Monona, Cottage Grove, Waunakee, Stoughton, McFarland, De Forest, and surrounding Dane County communities — with genuine local pages rather than one generic Madison page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you need to pay brokers for shared leads you're splitting with three competitors." },
      { q: "What's in the free SEO audit?", a: "Where you rank today across Madison, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'madison', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Madison WI Web Design Company | OnwardCraft',
    metaDescription:
      'Madison web design that turns visitors into booked jobs — fast, mobile-first sites built for contractors in a research-driven college market.',
    eyebrow: 'Web Design · Madison, WI',
    h1: 'Madison web design that turns visitors into booked jobs',
    h2Exact: 'Madison WI Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Madison contractors fast, mobile-first sites engineered to win the scrutiny of educated, research-intensive homeowners — and to turn that scrutiny into booked work.",
    primaryCta: 'Get my free quote',
    intro:
      "Madison homeowners don't just click the first result — they open three tabs, read the reviews, study the website, and make a decision. A slow, generic, or unconvincing site quietly sends them to your competitor. We build contractor websites designed to survive that scrutiny: fast, clear, credible, and built to convert research into calls across Willy Street, Fitchburg, Middleton, and beyond.",
    aioQuestion: 'What makes a good contractor website in Madison WI?',
    aioAnswer:
      "A good Madison contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with real project photos and reviews, and names the specific neighborhoods you serve. Because Madison homeowners are highly educated and comparison-shop aggressively, credibility signals — project galleries, review counts, licensing information — matter more here than in most markets. Mentioning energy efficiency and sustainability where relevant also wins the growing segment of Madison buyers who specifically seek out eco-minded contractors.",
    problemHeading: "Why your current site isn't bringing in Madison work",
    painPoints: [
      { title: "It doesn't survive the scrutiny of a Madison buyer", body: "Madison homeowners research everything. They'll pull up your site alongside two competitors and make a decision in minutes. If your site looks dated, loads slowly, or fails to answer the questions they're asking — about your licensing, your process, your past work — they close the tab and move on. We design sites that pass that scrutiny." },
      { title: "It's too slow on a phone", body: "Most of your Madison visitors are on mobile, and a slow load kills both the impression and the ranking. We build fast from the ground up, so you keep the visitor and the Google position." },
      { title: "It doesn't speak to what Madison homeowners actually care about", body: "Generic contractor sites talk about \"quality work\" and \"competitive prices.\" Madison buyers want to know you serve their neighborhood, you understand Wisconsin winters, and you can speak intelligently about energy efficiency if they ask. A site that addresses those things specifically converts better — full stop." },
    ],
    servicesHeading: "What's in an OnwardCraft Madison website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your Madison neighborhoods, and the jobs you actually want to be known for." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where most of your Madison traffic arrives. Fast, thumb-friendly, easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step, because a confused visitor doesn't call." },
      { name: 'Copy that wins educated buyers', desc: "Words that speak to Madison's research-driven homeowners — direct, credible, and specific enough to answer the questions they're already asking before they pick up the phone." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages for Madison, Fitchburg, Middleton, Verona, and beyond." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, protecting both conversions and rankings." },
      { name: 'Neighborhood-targeted pages', desc: "Pages built around the Madison neighborhoods and suburbs you serve — Willy Street, Atwood, Dudgeon-Monroe, Sun Prairie — so you rank for the specific searches that actually book jobs, not just \"contractor Madison WI.\"", featured: true },
      { name: 'Sustainability-ready content', desc: "Madison buyers ask about heat pumps, green roofing, and energy efficiency. We build pages that address those questions fluently so you win the premium, eco-conscious jobs your competitors can't compete for.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your Madison neighborhoods, your best jobs, and the questions your ideal buyers ask — then map the site around booking more of the work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert Madison's skeptical, research-minded buyers. You see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that answers buyer questions and books the job — with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current, and tune it based on what's actually converting — so the site keeps earning its place in your business." },
    ],
    pricing: {
      heading: 'Transparent Madison web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade Madison contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors serving multiple Madison neighborhoods.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Sustainability-ready content'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-trade or multi-location Madison-area businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Madison WI?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site hold up to Madison buyers who research everything?', a: "That's what we design for. Madison homeowners open multiple tabs, read reviews, and compare websites before calling anyone. We build around that behavior — fast load, clear credibility signals, specific neighborhood targeting, and copy that answers the questions they're already asking." },
      { q: 'Can you include sustainability or energy-efficiency content?', a: "Yes, and in Madison this is a genuine competitive advantage. A significant portion of local homeowners specifically seek out contractors who can speak to heat pumps, energy audits, green roofing, and similar topics. We build that content into your site in a way that sounds expert, not generic." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Madison terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where most of your Madison traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost Madison leads, what a high-converting contractor site in this market should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'madison', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Madison WI Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your Madison website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs in a research-driven market.',
    eyebrow: 'Website Redesign · Madison, WI',
    h1: 'Redesign your Madison website without losing your rankings',
    h2Exact: 'Madison WI Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — especially in a city where homeowners compare three websites before calling. We redesign Madison contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Madison contractor sites for the research-intensive buyers who live here, build them to pass that scrutiny on the first impression, and migrate with the redirects and SEO care that protect the traffic you've already worked hard to earn.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them — because the new site is faster, more credible, mobile-first, and better structured than the old one. In Madison, where homeowners research heavily, a redesign that improves trust signals and adds neighborhood-specific content usually delivers a lift in conversions alongside the ranking protection.",
    problemHeading: "Signs your Madison site is overdue for a redesign",
    painPoints: [
      { title: "It fails the side-by-side comparison", body: "Madison homeowners open multiple tabs. If your site looks dated or generic next to a competitor's, they make their decision in seconds — and it's not in your favor. An outdated design quietly costs you high-value jobs to contractors who simply invested in a better-looking, better-organized site." },
      { title: "It's slow and loses you before you even make an impression", body: "If your site is clunky or slow on mobile, you're losing the majority of your Madison visitors before they ever see your offer. A redesign built mobile-first wins them back — and improves your Google ranking at the same time." },
      { title: "It doesn't reflect the level of work you actually do", body: "If you do premium work — energy-efficient installs, lakefront property repairs, high-end remodels — but your website looks like a 2015 template, there's a credibility gap. A redesign that reflects your actual quality converts better, attracts better jobs, and makes every dollar you spend on SEO and ads work harder." },
    ],
    servicesHeading: "What's in an OnwardCraft Madison redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today — slow load, poor mobile UX, weak trust signals, missing neighborhood content — so the redesign fixes real problems." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned. We treat this as a first-class deliverable, not an afterthought." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, credibility signals that satisfy Madison's research-intensive buyers, and lead forms that actually get used." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — critical in a city where homeowners on phones bounce fast." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where most of your Madison traffic arrives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and gives buyers the confidence to pick up the phone." },
      { name: 'Neighborhood-targeted rebuild', desc: "Rebuilt around the Madison neighborhoods and suburbs you serve — Willy Street, Atwood, Fitchburg, Middleton, Verona — so the new site ranks and converts for the specific searches that book real jobs.", featured: true },
      { name: 'Sustainability-ready rebuild', desc: "If your work touches energy efficiency, heat pumps, or green roofing, we rebuild your content to speak that language fluently — capturing the premium Madison jobs your old site was silently giving away.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you leads and rankings, then map a redesign that fixes it without breaking what already works. The free audit gives you this picture clearly before any commitment." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design built for Madison's scrutinizing buyers. You review and shape it before we build." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration. Nothing ranking today gets dropped." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and improve, not drop. The first two weeks post-launch are critical and we treat them that way." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting — plus ongoing speed and updates to keep the site performing long-term." },
    ],
    pricing: {
      heading: 'Transparent Madison redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small Madison contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established Madison contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Neighborhood-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-trade or multi-location Madison-area sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Madison WI?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a Madison redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site loads slowly, looks dated, doesn't speak to Madison's eco-conscious or research-intensive buyers, or isn't converting visitors into calls, it's costing you work. The free audit tells you plainly whether a redesign is worth it and what it would include." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost — including your neighborhood pages and any seasonal content that's already earning traffic." },
      { q: 'Will the redesign help me win more Madison work?', a: "Yes, and that's the point. We rebuild around the specific Madison neighborhoods and suburbs you serve, add sustainability-ready content if relevant to your trade, keep the site fast, and make the offer and call button obvious — so the new site passes the side-by-side comparison Madison buyers are running." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan. No pressure, just an honest assessment." },
    ],
  },
];

export const madisonCity = {
  citySlug: 'madison', city: 'Madison', state: 'Wisconsin', stateAbbr: 'WI', metro: 'Madison',

  titleTag: 'Madison WI Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Madison WI contractors. Get found, get booked, and own your leads instead of renting them — built for a research-driven.',

  eyebrow: 'Madison, WI · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Madison contractors found and booked',
  h2Exact: 'Madison WI Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Madison's educated, eco-conscious, research-intensive market. One team to get you ranking, converting, and off the rented-lead treadmill — ready for Wisconsin winters and UW-area homebuyers alike.",
  heroProof: ['Built for the trades', 'Madison neighborhood targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Madison audit',

  intro:
    "Running a contracting business in Madison means competing for the attention of some of the most research-intensive homebuyers in the Midwest. UW-Madison brings 50,000 students who become renters, then homeowners, then the kind of buyers who read every review and open three contractor websites before calling one. Wisconsin winters add urgency — ice dams, frozen pipes, and heating emergencies don't wait for you to finish ranking. And Madison's progressive culture means a growing share of homeowners specifically want contractors who can speak to energy efficiency, heat pumps, and green roofing. Winning here takes three things working together: a site that earns trust, SEO that ranks you for what people actually search, and local SEO that puts you in the Map Pack across Madison's neighborhoods. Here's how we help Madison contractors do exactly that.",
  aioQuestion: 'How do Madison WI contractors get more leads online?',
  aioAnswer:
    "Madison contractors get more leads by combining a fast, credible, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack across their specific neighborhoods. Because Madison homeowners are highly educated and research-driven, strong reviews, detailed neighborhood pages, and content that addresses energy efficiency and Wisconsin's seasonal trade demands are especially powerful here.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Madison Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Madison homeowners search \"near me.\" The single highest-return move for most local contractors — done right, neighborhood by neighborhood, before Wisconsin's brutal winters hit.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords Madison's research-intensive homeowners actually search — including seasonal heating, ice dam, and energy-efficiency terms — and build an asset you own instead of renting traffic from ads.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites built to survive the side-by-side comparison Madison buyers run before calling anyone — credible, specific, and engineered to turn scrutiny into booked jobs.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site to win Madison's educated, eco-conscious buyers — faster, more credible, neighborhood-targeted — and migrate it carefully so you keep every bit of ranking you've already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Madison WI?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads in a market full of educated, research-driven homeowners." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors — so we understand Wisconsin heating emergencies, lakefront property needs, and the energy-efficiency angle that Madison buyers consistently ask about." },
    { q: 'Why does the Madison market need a different approach?', a: "Madison homeowners are unusually research-intensive — 68% are college-educated, and many work at the university or state government. They compare websites, read reviews carefully, and often ask about sustainability and energy efficiency before hiring. That means credibility signals, neighborhood-specific content, and eco-conscious language matter more here than in a generic market." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Madison-area communities do you serve?', a: "Madison proper plus Fitchburg, Middleton, Verona, Sun Prairie, Monona, Cottage Grove, Waunakee, Stoughton, McFarland, De Forest, Oregon, and surrounding Dane County communities. We build genuine neighborhood pages — Willy Street, Atwood, Dudgeon-Monroe, and beyond — rather than one generic Madison page." },
    { q: 'Where should I start?', a: "Start with a free Madison audit. We'll look at your website, your rankings, and your Map Pack presence — including how you show up for Wisconsin's seasonal demand windows — and tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};
