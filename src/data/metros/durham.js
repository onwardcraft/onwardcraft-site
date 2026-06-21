// DURHAM — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Durham's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// DURHAM — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Durham is its own challenge',
  body:
    "Durham is not Raleigh. It has its own identity — Duke University and Duke Health, the Research Triangle Park, a booming downtown revival, and block after block of early 20th-century tobacco-era housing that owners are renovating right now. The homeowners here are some of the most educated in the country: Duke faculty, biotech researchers, IBM and Cisco engineers. They research contractors meticulously before they call, and they trust credibility signals — reviews, clear expertise, a site that looks like you know what you're doing. Two things shape demand. First, RTP and Duke keep pulling in high-income buyers who then discover old knob-and-tube wiring, original windows, and cast-iron plumbing. Second, Durham summers are brutal — 95°F and humid from June through September — and occasional winter ice storms shut the city down and flood HVAC and emergency-repair lines overnight. The contractors already visible on Google are the ones who book that work.",
  pullQuote: 'Duke researchers and RTP engineers research contractors meticulously — credibility signals are what make them call.',
  donut: {
    title: 'Durham by community',
    value: 38,
    centerLabel: 'Black/AA',
    legend: [
      { label: 'Black/AA', pct: 38, kind: 'teal' },
      { label: 'Other', pct: 62, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'HVAC Jun–Sep; spring storms Mar–May; winter ice storms Dec–Feb',
  seasonalDemand: [
    { m: 'J', v: 52, peak: true }, { m: 'F', v: 58, peak: true }, { m: 'M', v: 64, peak: true }, { m: 'A', v: 70, peak: true },
    { m: 'M', v: 72, peak: true }, { m: 'J', v: 88, peak: true }, { m: 'J', v: 95, peak: true },
    { m: 'A', v: 96, peak: true }, { m: 'S', v: 82, peak: true }, { m: 'O', v: 48 },
    { m: 'N', v: 54, peak: true }, { m: 'D', v: 58, peak: true },
  ],
  stats: [
    { value: '300K+', label: 'people in Durham, anchor of the Research Triangle' },
    { value: 'Top 10', label: 'Duke University ranked nationally — its faculty and doctors are your most demanding customers', accent: true },
    { value: 'Jun–Sep', label: 'peak HVAC season, 95°F+ humid summers bake the Triangle' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks' },
  ],
  neighborhoods: [
    'Old North Durham', 'Trinity Park', 'Watts-Hillandale', 'Hope Valley', 'Northgate Park',
    'American Tobacco District', 'Burch Avenue', 'Forest Hills', 'Parkwood', 'Morrisville',
    'Chapel Hill', 'Carrboro', 'RTP', 'Cary', 'Hillsborough',
  ],
};

const AREAS = [
  'Durham', 'Chapel Hill', 'Carrboro', 'Morrisville', 'Cary', 'Hillsborough',
  'Research Triangle Park', 'Northgate Park', 'Old North Durham', 'Trinity Park',
  'Watts-Hillandale', 'Hope Valley', 'Pittsboro', 'Mebane', 'Burlington',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. Durham in particular is a market where homeowners do their homework — they're comparing you to two or three others before they call. So what we do here is get you ranking, looking credible, and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, electrical, restoration, GCs. We understand seasonal demand, emergency calls, and the historic-housing challenges Durham contractors face, so everything we build is shaped around how your customers really search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners three competitors also bought.",
  },
  {
    title: 'We actually speak Durham',
    body: "Duke faculty doing their homework, RTP engineers buying older homes, downtown revival renovations, 1910-era housing with original plumbing. The stuff a national agency can't do by swapping a city name into a template.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Durham contractor gets around 1,200 local \"near me\" impressions a month. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a booked-out calendar — and when summer HVAC demand or a winter ice storm hits, that gap gets even wider. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Durham', state: 'North Carolina', stateAbbr: 'NC', metro: 'Durham',
  heroProof: ['Built for the trades', 'Triangle-market ready', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const durhamLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'durham', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Durham Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Search your service in Durham and three businesses show up on the map. We get you into those three, so the call lands with you. Honest pricing, no lock-in, free audit.',
    eyebrow: 'Local SEO · Durham, NC',
    h1: 'When Durham searches for what you do, be the first name they find',
    h2Exact: 'Durham Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. We get you into that top three — so the call lands with you instead of a competitor, and so you're ready when HVAC season or the next ice storm fills everyone's phone.",
    primaryCta: 'Get my free Durham audit',
    intro:
      "Durham local SEO comes down to one thing: when a homeowner in Trinity Park or Watts-Hillandale searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people — including Duke faculty and RTP engineers who research everything — tap one of those three and never scroll. The Triangle market is growing and so is the competition, so becoming one of those three is the whole game. Here's how you do it.",
    aioQuestion: 'How do Durham businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Durham neighborhoods. Durham's highly educated homeowners research before they call, so looking credible and established — reviews, photos, clear expertise — is what turns a ranking into an actual call.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks. If you're not one of them, it almost doesn't matter how good your work is — most people never see your name. Getting into that top three is usually the single highest-return move a Durham business can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Durham homeowner to four contractors, then bill each of you to fight over them. It's a treadmill. Local SEO builds the opposite: a lead finds you, calls you, and nobody else got it. Over time you stop renting and start owning the pipeline." },
      { title: "You're not ready when the season peaks", body: "When summer HVAC demand goes vertical in June or a winter ice storm hits Durham overnight, the contractors already ranking take the calls. If you're invisible on the map when demand spikes, the work goes to whoever Google already trusts. Ranking now is how you catch that wave instead of watching it pass." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Durham searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes highly analytical Durham buyers pick up the phone." },
      { name: 'Neighborhood pages', desc: "Real pages for Old North Durham, Trinity Park, Watts-Hillandale, Hope Valley, Chapel Hill and the rest, so you rank for the neighborhood someone's actually searching, not just \"Durham.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Durham and Triangle sources Google trusts — local press, associations, partners. This is what separates page one from page two here." },
      { name: 'Seasonal demand readiness', desc: "We get your profile, pages, and reviews ranking before HVAC season and ice-storm windows so you catch the demand spike instead of scrambling for it after the fact.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. Duke researchers and RTP engineers use these tools. We structure your content so they can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your service areas and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now over starting later." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Durham, Orange, and Wake counties, plus the on-page work to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Triangle neighborhoods.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across the Triangle.', features: ['Everything in Local Growth', 'Local link building', 'Seasonal demand targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Durham?', a: "Most Durham engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The competitive Durham keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days is selling you something." },
      { q: 'What makes Durham local SEO different from other Triangle cities?', a: "Durham's homeowners — Duke faculty, Duke Health doctors, RTP researchers and engineers — research before they call. A high rating and a credible, detailed profile are what turn a ranking into an actual lead here more than almost anywhere. The city also has distinct seasonal windows: summer HVAC demand is intense, and winter ice storms create overnight emergency spikes." },
      { q: 'How does local SEO help me during HVAC season and winter ice storms?', a: "When summer hits 95°F or an ice storm knocks out heat overnight, searches for HVAC and emergency repair spike fast, and the businesses already in the Map Pack take those calls. We get you ranking and reviewed ahead of those windows so you catch the demand instead of watching competitors collect it." },
      { q: 'Which areas do you cover?', a: "All of Durham and the surrounding Triangle — Old North Durham, Trinity Park, Watts-Hillandale, Hope Valley, Chapel Hill, Carrboro, Morrisville, Cary, RTP, Hillsborough and more. We build genuine neighborhood pages instead of one generic Durham page, because that's what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, electrical, restoration, and general contractors. Durham has a lot of 1900-to-1940 tobacco-era housing being renovated, and we understand the old-plumbing, knob-and-tube, original-window work that drives so much of the demand here." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more research starts in AI now instead of classic search — and Durham's highly educated homeowners are exactly the kind of users who search that way. We structure your content and schema so those engines can read, trust, and cite your business." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because the work is coming to you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your service areas, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'durham', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Durham SEO Company | Rank Higher, Get More Leads | OnwardCraft',
    metaDescription:
      'Durham SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in contracts, built for Triangle-market demand. Free Durham SEO audit.',
    eyebrow: 'SEO Services · Durham, NC',
    h1: 'Get your Durham business to the top of Google and keep it there',
    h2Exact: 'Durham SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Durham customers search and the leads keep coming. We build that ranking and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free Durham SEO audit',
    intro:
      "Durham SEO comes down to one question: when someone searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in a market where Duke researchers and RTP engineers do their homework before calling anyone — and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Durham businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content, and earning links from trusted Durham and Triangle sources. In a market where homeowners are highly educated and research meticulously, technical credibility signals — fast load, schema markup, authoritative content — carry extra weight.",
    problemHeading: "Three reasons your Durham site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. If you're not in the top handful of results for what you sell, your site is basically invisible — no matter how good it looks or how strong your reputation is offline." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost." },
      { title: "You're not ranking for the demand that matters", body: "Durham demand swings with the calendar: brutal HVAC summer, spring storm season, winter ice emergencies. The contractors who rank for those terms ahead of time catch the spike. If your SEO ignores seasonal searches, you're leaving your busiest months on the table." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your Durham customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real Durham and Triangle sources. In a competitive market, links are often what separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Seasonal SEO', desc: "We rank you for the HVAC summer, spring roofing, and winter ice-storm searches that drive Durham's busiest months, so you're visible before demand spikes, not after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you — critical in a market where educated buyers start research in AI tools.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Durham leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the seasonal terms that matter most in the Triangle." },
      { name: 'Build authority', desc: "Links and citations from trusted Durham and Triangle sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Durham SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Triangle search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal demand SEO', 'Multi-location ready', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Durham?', a: "Most Durham SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Durham?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on low-competition terms and slower on the most competitive Durham keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most contractors do best running SEO as the long-term engine and ads for short-term spikes." },
      { q: 'Should my Durham SEO target seasonal demand?', a: "Yes. When summer HVAC demand peaks in June or a winter ice storm hits, searches spike overnight and ranking takes months to build — so you have to be in place before the season, not chasing it after. We optimize for those seasonal terms ahead of time so your busiest months land on you." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for — and Durham's highly educated homeowners are exactly the kind of users who research in AI tools before calling anyone. We structure your content and schema so AI engines can read, trust, and cite your business." },
      { q: 'Which areas around Durham do you cover?', a: "All of the Triangle and surrounding areas — Chapel Hill, Carrboro, Morrisville, Cary, Hillsborough, RTP and more — with genuine local pages rather than one generic Durham page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'durham', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Durham Web Design Company | Sites That Convert | OnwardCraft',
    metaDescription:
      'Durham web design that turns visitors into booked jobs — fast, credibility-first sites built for contractors and the Triangle\'s highly educated homeowners. Transparent pricing, you own it all. Free quote.',
    eyebrow: 'Web Design · Durham, NC',
    h1: 'Durham web design that turns visitors into booked jobs',
    h2Exact: 'Durham Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Durham contractors fast, credibility-first sites engineered to turn visitors into booked work — and to satisfy the meticulous Duke and RTP homeowner who researches every contractor before calling.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Durham contractor websites lose leads quietly: slow on a phone, buried call button, no trust signals for the researcher who's comparing three contractors side by side. Web design done right fixes all of that. We build sites that load fast, look like the professional you are, back it up with reviews and real project photos, and turn Old-North-Durham-to-Chapel-Hill visitors into booked jobs.",
    aioQuestion: 'What makes a good contractor website in Durham?',
    aioAnswer:
      "A good Durham contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, and builds trust with reviews, credentials, and real project photos — because Durham homeowners, many of them Duke faculty or RTP professionals, research contractors more carefully than almost any market in the country. The site also needs to handle traffic spikes during summer HVAC season and winter ice storms without buckling.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It doesn't build trust with researchers", body: "Durham homeowners — Duke doctors, biotech researchers, Cisco engineers — compare contractors carefully before calling. If your site has no reviews, thin content, or looks dated, you lose to a competitor who looks more credible, even if your work is better." },
      { title: "It's too slow on a phone", body: "Most of your Durham visitors are on mobile, and they bounce if your site takes more than a few seconds to load. Slow sites also rank worse on Google. We build fast, so you keep the visitor and the ranking." },
      { title: "It's not built for peak-demand moments", body: "When a summer heat wave or winter ice storm sends everyone searching for HVAC or emergency repair, your site gets a surge of traffic. If it's slow, buried, or hard to call from, you lose those leads at the exact moment they're worth the most." },
    ],
    servicesHeading: "What's in an OnwardCraft Durham website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your service area, and the jobs you actually want." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where the majority of your Durham traffic comes from. Fast, thumb-friendly, easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Trust-building content', desc: "Reviews, credentials, real project photos, and copy that speaks to the research-minded Durham homeowner and closes the gap between visit and call." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Seasonal-surge ready', desc: "Built to stay fast and keep the call button front and center when summer HVAC or winter ice-storm traffic spikes — the moment that turns visitors into your biggest jobs.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search — especially from Durham's tech-savvy homeowners — shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your service area, your best jobs, and your competitors, then map the site around booking more of the work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert and to earn the trust of Durham's research-minded homeowners — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action and trust signals front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting." },
    ],
    pricing: {
      heading: 'Transparent Durham web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Seasonal-surge ready'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Durham?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site handle a summer heat wave or ice storm traffic surge?', a: "Yes, and in Durham that matters. When summer hits 95°F or an ice storm knocks out heat overnight, contractor sites take a surge of traffic. We build fast and keep the call button obvious so your site converts under load instead of buckling." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Durham terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it look credible to Duke or RTP homeowners doing their research?', a: "That's exactly what we design for. Trust signals — reviews, real project photos, credentials, clear service descriptions — are built into every page, because Durham homeowners compare contractors carefully before they call." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Durham site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'durham', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Durham Website Redesign | More Leads, No Traffic Loss | OnwardCraft',
    metaDescription:
      'Redesign your Durham website without losing rankings. Faster, credibility-first rebuilds that convert more visitors into booked jobs and satisfy Triangle homeowners who research. Free audit.',
    eyebrow: 'Website Redesign · Durham, NC',
    h1: 'Redesign your Durham website without losing your rankings',
    h2Exact: 'Durham Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, and not credible enough for the Duke faculty member comparing three contractors. We redesign Durham contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Durham contractor sites for speed, credibility, and conversions, and we migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, more trustworthy, and better structured than the old one.",
    problemHeading: "Signs your Durham site is overdue for a redesign",
    painPoints: [
      { title: "It loses trust with research-minded homeowners", body: "Duke faculty, Duke Health doctors, RTP engineers — these are your buyers in Durham, and they compare contractors carefully before they call. An old, cluttered design quietly tells them to look elsewhere, even when your work is better than whoever they call instead." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your Durham visitors before they ever see your offer. A redesign built mobile-first wins them back." },
      { title: "It can't keep up when demand surges", body: "A summer HVAC heat wave or a winter ice storm sends a surge of traffic your way. An old site that gets slow or buries the call button loses leads at the exact moment they're worth the most. We rebuild for conversions and for peak-demand days." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where the majority of your Durham traffic lives." },
      { name: 'Trust refresh', desc: "A modern, credible look backed by reviews, real project photos, and credentials that match the expectations of Durham's research-minded homeowners." },
      { name: 'Seasonal-surge ready rebuild', desc: "Rebuilt to stay fast and keep converting when summer HVAC or winter ice-storm traffic spikes, so the new site captures your biggest jobs instead of choking on them.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as more search — especially from Durham's tech-savvy buyers — shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you leads and rankings, then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design built to earn trust from Durham's analytical homeowners — you review and shape it before we build." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and improve, not drop." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Durham redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Seasonal-surge ready'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Durham?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, doesn't build trust with research-minded Durham homeowners, or buckles when summer or winter demand surges, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the new site handle seasonal traffic spikes?', a: "Yes. Summer HVAC demand and winter ice storms both send surges of traffic to Durham contractors, and we rebuild for speed and keep the call to action obvious so the site converts when demand peaks." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const durhamCity = {
  citySlug: 'durham', city: 'Durham', state: 'North Carolina', stateAbbr: 'NC', metro: 'Durham',

  titleTag: 'Durham Marketing for Contractors | Web, SEO & Leads | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Durham contractors. Get found by Duke homeowners and RTP professionals, get booked, and own your leads instead of renting them. Free Durham audit.',

  eyebrow: 'Durham · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Durham contractors found and booked',
  h2Exact: 'Durham Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for a market where Duke researchers and RTP engineers research every contractor before they call. One team to get you ranking, looking credible, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Triangle-market ready', 'No lock-in contracts'],
  primaryCta: 'Get my free Durham audit',

  intro:
    "If you run a contracting business in Durham, you're working in a market unlike any other in North Carolina. Duke University, Duke Health, and the Research Triangle Park mean your potential customers are some of the most educated in the country — they research contractors thoroughly, compare options, and trust credibility signals. Add in block after block of 1900-to-1940 tobacco-era housing being renovated, brutal summer heat driving HVAC demand, and occasional winter ice storms creating overnight emergencies, and the opportunity is enormous for contractors who can be found. Winning here takes three things working together: a site that builds trust, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack. Here's how we help Durham contractors do exactly that.",
  aioQuestion: 'How do Durham contractors get more leads online?',
  aioAnswer:
    "Durham contractors get more leads by combining a fast, credibility-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack. Because Durham homeowners — Duke faculty, biotech researchers, RTP engineers — research before they call, looking established and credible is just as important as ranking at all.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Durham searches \"near me.\" The single highest-return move for most local businesses — and how you get found before a Duke homeowner calls your competitor.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search, build an asset you own instead of renting traffic from ads, and measure it in leads — not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, credibility-first websites engineered to turn visits from research-minded Durham homeowners into booked jobs — not brochures that get scrolled past.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed, trust, and conversions, and migrate it carefully so you keep every bit of ranking you've already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Durham?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, look credible, and own their leads — all essential in a market where homeowners research before they call." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, electrical, restoration, and general contractors. Durham has a lot of early 20th-century housing being renovated, and we understand the old-plumbing, knob-and-tube, and original-window work that drives so much of the demand here." },
    { q: 'Why do Duke and RTP homeowners matter for my marketing?', a: "Durham's homeowners include a high concentration of Duke faculty, Duke Health doctors, biotech researchers, and RTP engineers — people who research contractors carefully, compare options, and trust credibility signals like reviews, photos, and a professional site. Showing up first matters, but looking trustworthy is what makes them call." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Durham areas do you serve?', a: "All of Durham and the Triangle — Old North Durham, Trinity Park, Watts-Hillandale, Hope Valley, Chapel Hill, Carrboro, Morrisville, Cary, RTP, Hillsborough and more." },
    { q: 'Where should I start?', a: "Start with a free Durham audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};
