// CHARLOTTE — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Charlotte's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// CHARLOTTE — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Charlotte is harder than it looks',
  body:
    "Charlotte is one of the fastest-growing cities in the Sun Belt, pushing past 900,000 residents with a metro approaching 2.7 million — and it keeps adding people at a pace that brings new homeowners and new competitors in the same wave. Two forces shape demand here. First, Charlotte is a major financial center: Bank of America, Wells Fargo, and Truist all call it home, and the high-income homeowners in Ballantyne, SouthPark, and Myers Park have money to spend on quality work — but they hire the contractor who looks credible online, not the one who doesn't come up on their phone. Second, the climate punishes deferred maintenance. Charlotte's humid subtropical summers send HVAC demand vertical from May through September, and the area's occasional ice storms in January and February — the ones that shut the whole city down — create overnight surges in roofing, pipe, and structural calls. The suburbs are booming too: Huntersville, Cornelius, Davidson, Mooresville, and Fort Mill across the state line are all filling up with new-to-area homeowners who've never had a local contractor and are searching for one right now. The contractors who are already in the Map Pack when those searches happen take the work.",
  pullQuote: 'In a banking town where homeowners have high standards, the contractor who looks established online is the one who gets the call.',
  donut: {
    title: 'How Charlotte searches',
    value: 64,
    centerLabel: 'on mobile',
    legend: [
      { label: 'Mobile', pct: 64, kind: 'teal' },
      { label: 'Desktop', pct: 36, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'HVAC season (May–Sep) and ice/storm damage (Jan–Feb, Mar–May)',
  seasonalDemand: [
    { m: 'J', v: 76, peak: true }, { m: 'F', v: 72, peak: true }, { m: 'M', v: 68, peak: true },
    { m: 'A', v: 62, peak: true }, { m: 'M', v: 82, peak: true }, { m: 'J', v: 94, peak: true },
    { m: 'J', v: 98, peak: true }, { m: 'A', v: 96, peak: true }, { m: 'S', v: 88, peak: true },
    { m: 'O', v: 52 }, { m: 'N', v: 46 }, { m: 'D', v: 54 },
  ],
  stats: [
    { value: '2.7M+', label: 'people across the Charlotte metro' },
    { value: '~64%', label: 'of local searches here happen on a phone, usually "near me"', accent: true },
    { value: 'May–Sep', label: 'HVAC peak season in a humid subtropical climate' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks' },
  ],
  neighborhoods: [
    'Myers Park', 'SouthPark', 'Dilworth', 'NoDa', 'Plaza Midwood',
    'Ballantyne', 'Huntersville', 'Cornelius', 'Davidson', 'Mooresville',
    'Fort Mill', 'Belmont', 'Gastonia', 'Concord', 'Lake Norman',
  ],
};

const AREAS = [
  'Charlotte', 'Myers Park', 'SouthPark', 'Ballantyne', 'Dilworth',
  'NoDa', 'Plaza Midwood', 'Huntersville', 'Cornelius', 'Davidson',
  'Mooresville', 'Fort Mill', 'Gastonia', 'Concord', 'Belmont',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We understand Charlotte's humid summers, ice-storm surges, and the high expectations that come with working in SouthPark and Ballantyne, so everything we build is shaped around how your customers really search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners three competitors also bought.",
  },
  {
    title: 'We actually speak Charlotte',
    body: "Neighborhood-by-neighborhood targeting from Myers Park to Fort Mill, HVAC demand that spikes in May and roofing calls that come in after every ice storm. The stuff a national agency can't do by swapping a city name into a template.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Charlotte contractor gets around 1,800 local \"near me\" impressions a month across several neighborhoods. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a booked-out calendar — and in a Sun Belt market growing this fast, that gap widens every month new competitors arrive. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Charlotte', state: 'North Carolina', stateAbbr: 'NC', metro: 'Charlotte',
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const charlotteLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'charlotte', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Charlotte Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Search your service in Charlotte and three businesses show up on the map. We get you into those three, so the call lands with you.',
    eyebrow: 'Local SEO · Charlotte, NC',
    h1: 'When Charlotte searches for what you do, be the first name they find',
    h2Exact: 'Charlotte Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. We get you into that top three for your Charlotte neighborhoods, so the call lands with you instead of whoever ranked first — and so you're ready when the next HVAC season or ice storm sends demand through the roof.",
    primaryCta: 'Get my free Charlotte audit',
    intro:
      "Charlotte local SEO comes down to one thing: when a homeowner in Myers Park or Huntersville searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. The market is growing fast — new residents arrive every month from up north and overseas — and they're all searching for a local contractor they can trust. Becoming one of those three is the whole game. Here's how you do it.",
    aioQuestion: 'How do Charlotte businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Charlotte neighborhoods. Charlotte is a fast-growing financial hub with seasonal HVAC demand and periodic storm surges, so the winners look established, respond fast to emergencies, and are already ranking before summer heat and winter ice storms create spikes.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks. If you're not one of them, it almost doesn't matter how good your work is — most people never see your name. Getting into that top three for Myers Park, Ballantyne, Huntersville, or wherever you work is usually the single highest-return move a Charlotte contractor can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Charlotte homeowner to four contractors, then bill each of you to fight over them. It's a treadmill. Local SEO builds the opposite: a lead finds you, calls you, and nobody else got it. Over time you stop renting and start owning the pipeline." },
      { title: "You're not ready for seasonal demand spikes", body: "Charlotte's humid climate means HVAC demand goes vertical in May and doesn't let up until September. In January and February, a single ice storm can shut the whole city down and trigger overnight surges in roofing, pipe, and structural calls. If you're invisible on the map when those searches spike, the work goes to whoever Google already trusts. Ranking now is how you catch that wave." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Charlotte searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes people pick up the phone — especially important for the high-income homeowners in SouthPark and Ballantyne who read reviews carefully." },
      { name: 'Neighborhood pages', desc: "Real pages for Myers Park, Dilworth, Ballantyne, Huntersville, Fort Mill and the rest, so you rank for the neighborhood someone's actually searching, not just \"Charlotte.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Charlotte sources Google trusts — local press, business associations, partners. This is what separates page one from page two here." },
      { name: 'Seasonal demand targeting', desc: "We get your profile, pages, and reviews ranking before HVAC season and before winter ice storms so you catch the demand spike instead of scrambling for it after the fact.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your Charlotte neighborhoods and suburbs, and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now over starting later." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages from uptown Charlotte to Fort Mill and Lake Norman, plus the on-page work to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Charlotte neighborhoods.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across the Charlotte metro.', features: ['Everything in Local Growth', 'Local link building', 'Seasonal demand targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Charlotte?', a: "Most Charlotte engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The competitive Charlotte keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days in a market growing this fast is selling you something." },
      { q: 'What makes Charlotte local SEO different?', a: "Two things. It's a fast-growing Sun Belt market — new residents and new competitors arrive constantly, so trust signals like reviews and consistent listings carry real weight. And seasonal demand swings hard: HVAC calls spike from May through September, and winter ice storms create overnight surges. Your ranking has to be in place before the season, not after." },
      { q: 'How does local SEO help me during Charlotte\'s HVAC season?', a: "Charlotte's humid subtropical summers push HVAC demand through the roof from May to September, and the businesses already in the Map Pack take those calls. We get you ranking and reviewed ahead of summer so you catch that demand instead of competing for scraps after everyone else is already booked." },
      { q: 'What about ice storms — do those create a local SEO opportunity?', a: "Yes. Charlotte's occasional January and February ice storms are notorious for shutting the city down and triggering surges in roofing, pipe, and structural calls overnight. Homeowners search frantically for contractors they can trust. If you're already ranking and reviewed, you get those calls. If you're not, they go to whoever is." },
      { q: 'Which areas do you cover?', a: "All of Charlotte and the surrounding metro — Myers Park, SouthPark, Dilworth, NoDa, Plaza Midwood, Ballantyne, Huntersville, Cornelius, Davidson, Mooresville, Fort Mill, Gastonia, Concord, Belmont, and the Lake Norman communities. We build genuine neighborhood pages instead of one generic Charlotte page." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand seasonal demand, emergency calls, and the high expectations in Charlotte's affluent neighborhoods, and we build your local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your Charlotte neighborhoods, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'charlotte', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Charlotte SEO Company | OnwardCraft',
    metaDescription:
      'Charlotte SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in contracts, built for a fast-growing market.',
    eyebrow: 'SEO Services · Charlotte, NC',
    h1: 'Get your Charlotte business to the top of Google and keep it there',
    h2Exact: 'Charlotte SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Charlotte customers search and the leads keep coming. We build that ranking and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free Charlotte SEO audit',
    intro:
      "Charlotte SEO comes down to one question: when someone searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in a fast-growing Sun Belt market full of high-income homeowners who search on their phones and hire whoever looks most credible — and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Charlotte businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content tied to specific Charlotte neighborhoods, and earning links from trusted local sources. In a fast-growing financial hub with seasonal HVAC demand and periodic ice-storm surges, ranking for those high-intent seasonal terms ahead of the season is one of the quickest ways to pull ahead of the competition.",
    problemHeading: "Three reasons your Charlotte site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. If you're not in the top handful of results for what you sell, your site is basically invisible — no matter how good it looks. In a city where the homeowners in SouthPark and Ballantyne are doing careful research before they hire, that invisibility costs real money." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost. In Charlotte's growing market, that compounding advantage matters more every month." },
      { title: "You're not ranking for the demand that matters", body: "Charlotte demand swings hard with the seasons. HVAC search volume spikes from May to September, and a single January ice storm triggers overnight surges in roofing, pipe, and structural calls across the metro. The contractors who rank for those terms ahead of time catch the spike. If your SEO ignores seasonal and emergency searches, you're leaving your busiest weeks on the table." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your Charlotte customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real Charlotte and industry sources. In a competitive and growing market, links are often what separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across your neighborhoods alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Seasonal & emergency SEO', desc: "We rank you for the HVAC terms that drive Charlotte's May–Sep season and the storm-damage terms that spike after winter ice events, so you're visible before demand peaks, not after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Charlotte leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the seasonal and emergency terms that matter here." },
      { name: 'Build authority', desc: "Links and citations from trusted Charlotte and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Charlotte SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and Charlotte neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Charlotte search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal & emergency SEO', 'eCommerce / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Charlotte?', a: "Most Charlotte SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Charlotte?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on lower-competition suburban terms and slower on the most competitive Charlotte keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Charlotte contractors do best running SEO as the long-term engine and ads for short-term spikes during HVAC season or after a storm." },
      { q: 'Should my Charlotte SEO target seasonal demand?', a: "Yes. Charlotte's humidity means HVAC searches peak from May through September, and a January ice storm can create an overnight surge in roofing and pipe calls across the metro. Ranking takes months to build, so you have to be in place before the season, not chasing it after. We optimize for those seasonal and emergency terms ahead of time." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal/emergency and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which areas around Charlotte do you cover?', a: "All of the Charlotte metro — Myers Park, SouthPark, Dilworth, Ballantyne, NoDa, Plaza Midwood, Huntersville, Cornelius, Davidson, Mooresville, Fort Mill, Gastonia, Concord, and the Lake Norman communities — with genuine local pages rather than one generic Charlotte page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'charlotte', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Charlotte Web Design Company | OnwardCraft',
    metaDescription:
      'Charlotte web design that turns visitors into booked jobs — fast, mobile-first sites built for contractors serving a high-income, fast-growing market.',
    eyebrow: 'Web Design · Charlotte, NC',
    h1: 'Charlotte web design that turns visitors into booked jobs',
    h2Exact: 'Charlotte Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Charlotte contractors fast, mobile-first sites engineered to turn visitors into booked work — and to look credible enough to win the trust of high-income homeowners in SouthPark and Ballantyne.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Charlotte contractor websites lose leads quietly: slow on a phone, buried call button, no clear offer. Web design done right fixes all of that. We build sites that load fast, look like the professional you are, and turn Myers-Park-to-Mooresville visitors into booked jobs — built for a market where the homeowner's next step is comparing you to two other contractors on their phone.",
    aioQuestion: 'What makes a good contractor website in Charlotte?',
    aioAnswer:
      "A good Charlotte contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific Charlotte neighborhoods you serve. Because Charlotte's high-income homeowners in SouthPark and Ballantyne research carefully before hiring, social proof and a professional look matter more here than in many other markets — and because most searches happen on mobile, speed and an obvious next step are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next guy. In Charlotte, a homeowner in Ballantyne comparing contractors on their phone will pick the one whose site looks most credible and makes it easiest to call. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Charlotte visitors are on mobile, and they bounce if your site takes more than a few seconds to load. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking." },
      { title: "It doesn't look professional enough for Charlotte's market", body: "Charlotte has a well-educated, high-income homeowner base — especially in Myers Park, SouthPark, and Dilworth — who make quick judgments about a contractor's credibility based on their website. A dated or generic site sends them quietly to a competitor who looks more established. We build sites that match the quality of your work." },
    ],
    servicesHeading: "What's in an OnwardCraft Charlotte website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your Charlotte neighborhoods, and the jobs you actually want." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your Charlotte traffic is. Fast, thumb-friendly, easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that speak to anxious homeowners and book the job, not filler text that reads like everyone else." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Neighborhood-targeted pages', desc: "Pages built around the Charlotte neighborhoods you serve — from Dilworth and NoDa to Huntersville and Fort Mill — so you stand out in a competitive market instead of blending into one generic city page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your Charlotte neighborhoods, your best jobs, and your competitors, then map the site around booking more of the work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting." },
    ],
    pricing: {
      heading: 'Transparent Charlotte web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Neighborhood-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Charlotte?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site help me stand out in Charlotte\'s market?', a: "That's the whole point. Charlotte's homeowners — especially in SouthPark, Myers Park, and Ballantyne — research contractors carefully and make snap judgments based on the website. We build around the specific neighborhoods you serve, keep the site fast, and make the offer and call button obvious so yours is the one that gets the inquiry." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Charlotte terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your Charlotte traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Charlotte site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'charlotte', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Charlotte Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your Charlotte website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs in a fast-growing market.',
    eyebrow: 'Website Redesign · Charlotte, NC',
    h1: 'Redesign your Charlotte website without losing your rankings',
    h2Exact: 'Charlotte Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, easy to ignore. We redesign Charlotte contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Charlotte contractor sites for speed and conversions, build them to look credible to the high-income homeowners who do their research, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Charlotte site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "Charlotte's homeowners — especially in Myers Park, SouthPark, and Dilworth — judge you by your site in seconds. An old, cluttered design quietly sends them to a competitor who looks more established. In a market with this much competition and this many high-income households, that trust gap is expensive." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your Charlotte visitors before they ever see your offer. A redesign built mobile-first wins them back." },
      { title: "It blends into the competition", body: "Charlotte's contractor market is growing fast — new businesses arrive with every wave of Sun Belt migration. A generic old site gives a visitor no reason to pick you over the next result. We rebuild for conversions and for the specific neighborhoods you serve, so the right buyers choose you." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your Charlotte traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the expectations of Charlotte's professional homeowner base." },
      { name: 'Neighborhood-targeted rebuild', desc: "Rebuilt around the Charlotte neighborhoods and suburbs you serve — from Plaza Midwood to Mooresville — so the new site stands out in a growing, competitive market instead of reading like everyone else's.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you leads and rankings, then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and improve, not drop." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Charlotte redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Neighborhood-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Charlotte?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated compared to competitors, is hard to update, or isn't converting visitors into calls in a market this competitive, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the redesign help me compete in Charlotte\'s market?', a: "Yes, and that's the point in a market that keeps growing. We rebuild around the specific Charlotte neighborhoods you serve, keep the site fast, and make the offer and call button obvious — so the new site stands out to the high-income, research-oriented homeowners who compare contractors on their phones." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const charlotteCity = {
  citySlug: 'charlotte', city: 'Charlotte', state: 'North Carolina', stateAbbr: 'NC', metro: 'Charlotte',

  titleTag: 'Charlotte Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Charlotte contractors. Get found, get booked, and own your leads instead of renting them — built for a fast-growing.',

  eyebrow: 'Charlotte · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Charlotte contractors found and booked',
  h2Exact: 'Charlotte Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Charlotte's fast-growing Sun Belt market and its high-income homeowners. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Charlotte audit',

  intro:
    "If you run a contracting business in Charlotte, you're competing in one of the fastest-growing cities in the Southeast — a financial hub where the homeowners in SouthPark and Ballantyne have real budgets but hire whoever looks most credible online, and where HVAC demand bakes in from May to September and a single January ice storm can send roofing and pipe calls vertical overnight. Winning here takes three things working together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack for the neighborhoods you serve. Here's how we help Charlotte contractors do exactly that.",
  aioQuestion: 'How do Charlotte contractors get more leads online?',
  aioAnswer:
    "Charlotte contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack neighborhood by neighborhood. Because the market is growing fast and homeowners in Charlotte's affluent areas research contractors carefully online before calling, looking credible and being easy to find on a phone are what separate the contractors who stay busy from those who keep paying for shared leads.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Charlotte searches \"near me.\" The single highest-return move for most local contractors — and how you catch HVAC season and winter storm demand.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search, build an asset you own instead of renting traffic from ads, and measure it in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs — and to look credible enough to win the trust of Charlotte's high-income homeowners — not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it carefully so you keep every bit of ranking you've already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Charlotte?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads in a market that keeps getting more competitive." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors — so we understand HVAC season, ice-storm surge calls, and the high expectations that come with serving Charlotte's professional homeowner base." },
    { q: 'Why does Charlotte\'s market need a different approach?', a: "It's a fast-growing Sun Belt city with a well-educated, high-income homeowner base that researches contractors carefully online. The suburbs are booming with new-to-area homeowners who have no local contractor relationships yet. And seasonal demand swings hard — HVAC from May to September, storm damage in winter and spring. Winning here means looking credible, ranking in the right neighborhoods, and being in place before demand peaks." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Charlotte areas do you serve?', a: "All of the Charlotte metro — Myers Park, SouthPark, Dilworth, NoDa, Plaza Midwood, Ballantyne, Huntersville, Cornelius, Davidson, Mooresville, Fort Mill, Gastonia, Concord, Belmont, and the Lake Norman communities." },
    { q: 'Where should I start?', a: "Start with a free Charlotte audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};
