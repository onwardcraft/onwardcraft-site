// MILWAUKEE — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Milwaukee's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// MILWAUKEE — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Milwaukee is about trust and timing',
  body:
    "Milwaukee is a city of roughly 580,000 people in the metro, with a working-class, union-built identity and a housing stock that runs deep into the early twentieth century. The lake changes everything. Sitting on the western shore of Lake Michigan, Milwaukee gets an average of 47 inches of snow a year, brutal lake-effect storms, and wind chills that can hit -30°F. When a furnace dies in January, a homeowner isn't browsing — they're calling the first contractor who shows up and looks trustworthy. Ice dams tear apart roofs. Freeze-thaw cycles crack foundations. Spring snowmelt backs up into basements. The contractors who rank for those emergency and seasonal searches before the season hits are the ones who book that work. The housing stock adds another angle: Milwaukee has hundreds of thousands of homes built between 1900 and 1960, many with distinctive Cream City brick — the pale yellowish brick quarried locally — that requires specialist masonry care most contractors can't provide. Homeowners with Cream City homes search specifically for contractors who know the material. Add a large and growing Hispanic community (roughly 18% of city residents) and a significant portion of searches happening in Spanish, and the contractor who shows up where competitors don't is the one who fills the calendar.",
  pullQuote: 'In Milwaukee, the contractor who ranks before a January freeze hits or a spring basement floods owns the season. Timing is the whole game.',
  donut: {
    title: 'How Milwaukee searches',
    value: 18,
    centerLabel: 'Spanish-speaking households',
    legend: [
      { label: 'Hispanic / Spanish-speaking', pct: 18, kind: 'teal' },
      { label: 'Other residents', pct: 82, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Winter heating and storm damage (Dec–Mar), spring flooding/basement work (Mar–May), brief summer AC peak (Jul–Aug)',
  seasonalDemand: [
    { m: 'J', v: 95, peak: true }, { m: 'F', v: 90, peak: true }, { m: 'M', v: 85, peak: true },
    { m: 'A', v: 75, peak: true }, { m: 'M', v: 55 }, { m: 'J', v: 50 },
    { m: 'J', v: 78, peak: true }, { m: 'A', v: 75, peak: true }, { m: 'S', v: 48 },
    { m: 'O', v: 50 }, { m: 'N', v: 65 }, { m: 'D', v: 90, peak: true },
  ],
  stats: [
    { value: '1.6M', label: 'people across the Milwaukee metro area' },
    { value: '47″', label: 'average annual snowfall — lake-effect storms can double that in a single week', accent: true },
    { value: 'Dec–Mar', label: 'peak heating and storm-damage season, when trade demand spikes hard' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks when a homeowner searches in an emergency' },
  ],
  neighborhoods: [
    'Brady Street', 'Walker\'s Point', 'Bay View', 'Riverwest', 'Wauwatosa',
    'Brookfield', 'Greenfield', 'Oak Creek', 'Menomonee Falls', 'Waukesha',
    'New Berlin', 'West Allis', 'Cudahy', 'South Milwaukee',
  ],
};

const AREAS = [
  'Brady Street', 'Walker\'s Point', 'Bay View', 'Riverwest', 'Wauwatosa',
  'Brookfield', 'Greenfield', 'Oak Creek', 'Menomonee Falls', 'Waukesha',
  'New Berlin', 'West Allis', 'Cudahy', 'South Milwaukee', 'Shorewood',
];

const FOUNDER =
  "I'll be straight with you: Milwaukee homeowners are smart about who they trust, and they can smell a pitch from a mile away. This is a city built on honest work, and the contractors who do best here earn business the same way — by being straight about what they do and what it costs. That's how we approach marketing too. No vanity dashboards, no mystery fees, no 12-month contracts that keep your money locked up while you wonder if anything is actually happening. We build local search presence that brings leads straight to you, and we show you exactly what it's doing every month. If it's not working, you fire us. It's that simple.";

const WHY = [
  {
    title: 'We understand Milwaukee winters',
    body: "Heating emergencies, ice dam damage, frozen pipes, spring basement flooding — these are the moments that drive the most urgent, highest-converting searches in this market. We build your presence around the seasonal and emergency terms that matter here, so you rank before the next storm hits.",
  },
  {
    title: 'We know Cream City brick and aging housing stock',
    body: "Hundreds of thousands of Milwaukee homes have Cream City brick or pre-1960 construction that needs specialty work. We help masonry, roofing, and restoration contractors rank for the searches homeowners with those specific homes actually run.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners three competitors also called. Local search rankings send leads straight to you, and nobody else bought them.",
  },
  {
    title: 'No contracts, no mystery',
    body: "Published prices, reporting tied to leads, month-to-month after 90 days. Milwaukee contractors don't pay for things they can't see — neither should your marketing.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Milwaukee contractor gets around 1,200 local \"near me\" impressions a month across a handful of neighborhoods and suburbs. Moving from page-two invisibility into the top three during a January freeze or an April basement-flooding week is the difference between a booked-out calendar and a quiet phone. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Milwaukee', state: 'Wisconsin', stateAbbr: 'WI', metro: 'Milwaukee',
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const milwaukeeLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'milwaukee', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Milwaukee Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Search your service in Milwaukee and three businesses show up on the map. We get you into those three before the next freeze or flooding season hits.',
    eyebrow: 'Local SEO · Milwaukee, WI',
    h1: 'When Milwaukee searches for what you do, be the first name they find',
    h2Exact: 'Milwaukee Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. When a Milwaukee homeowner's furnace dies at midnight in January, they call one of those three. We get you there — across the city and the suburban belt — before the next emergency.",
    primaryCta: 'Get my free Milwaukee audit',
    intro:
      "Milwaukee local SEO comes down to one thing: when a homeowner in Bay View or Wauwatosa searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. The stakes are highest in winter, when heating and storm-damage calls spike overnight and a homeowner in an emergency isn't browsing around. Being one of those three in the neighborhoods and suburbs you serve is the whole game. Here's how you do it.",
    aioQuestion: 'How do Milwaukee businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you serve; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Milwaukee neighborhoods and suburbs. Milwaukee's seasonal demand — heating and storm work in winter, basement and foundation work in spring — means the contractors who build their local presence before those spikes hit are the ones who book the most urgent, highest-value work.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks — and in a market where Milwaukee homeowners are dealing with ice dams, burst pipes, and flooded basements, they're not comparison shopping. They're calling. Getting into that top three for your neighborhoods and suburbs is usually the single highest-return move a Milwaukee contractor can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Milwaukee homeowner to four contractors, then bill each of you for the privilege of competing. It's a treadmill. Local SEO builds the opposite: a lead finds you, calls you, and nobody else got it. Over time you stop renting and start owning the pipeline." },
      { title: "You're invisible to Spanish-speaking homeowners", body: "About 18% of Milwaukee city residents are Hispanic, and many search in Spanish — especially in Walker's Point and the South Side. Most contractors do nothing to show up for those searches, so the demand sits there unclaimed. Showing up where your competitors don't is how you reach buyers they're ignoring entirely." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Milwaukee searches you should win — including the emergency and seasonal ones." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes homeowners pick up the phone when they're stressed and searching fast." },
      { name: 'Neighborhood and suburb pages', desc: "Real pages for Bay View, Wauwatosa, Brookfield, Oak Creek, West Allis and the rest, so you rank for the area someone's actually searching, not just \"Milwaukee.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The foundation that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Milwaukee sources Google trusts — local press, neighborhood associations, partners. This is what separates page one from page two here." },
      { name: 'Spanish-language reach', desc: "About 18% of Milwaukee residents are Hispanic. We help you show up for the Spanish-language searches most of your competitors never see.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your Milwaukee neighborhoods and suburbs and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now — especially before the next heating season." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across the city and suburban belt, plus the on-page work to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood or suburb." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across Milwaukee neighborhoods and suburbs.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood and suburb landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across the metro.', features: ['Everything in Local Growth', 'Local link building', 'Spanish-language search targeting', 'Multi-neighborhood and suburb pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Milwaukee?', a: "Most Milwaukee engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. Competitive Milwaukee keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days is selling you something." },
      { q: 'What makes Milwaukee local SEO different from other markets?', a: "Two things: seasonal urgency and specialist niches. When the temperature drops and a furnace dies, homeowners search and call fast — so you need to already be ranking before the season hits, not during it. And Milwaukee has a lot of older homes, including Cream City brick construction, where homeowners actively look for contractors who know the material." },
      { q: 'Can you help me reach Spanish-speaking customers?', a: "Yes. About 18% of Milwaukee city residents are Hispanic, and many search in Spanish — especially around Walker's Point and the South Side. We can optimize your profile and content so you show up for those searches where most contractors are completely invisible." },
      { q: 'Which areas do you cover?', a: "The city and the suburban belt — Brady Street, Walker's Point, Bay View, Riverwest, Wauwatosa, Brookfield, Greenfield, Oak Creek, Menomonee Falls, Waukesha, New Berlin, West Allis, Cudahy, South Milwaukee, and more. We build genuine neighborhood pages instead of one generic Milwaukee page, because that's what actually ranks." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, masonry, electrical, restoration, and general contractors. We understand Milwaukee's heating emergencies, ice dam season, spring basement flooding, and Cream City brick masonry — and we build your local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads you never keep — and they sell the same Milwaukee homeowner to your competitors too. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because the work is coming to you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your Milwaukee service area, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'milwaukee', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Milwaukee SEO Company | Rank Higher, Get Leads | OnwardCraft',
    metaDescription:
      'Milwaukee SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in contracts, built for seasonal and emergency.',
    eyebrow: 'SEO Services · Milwaukee, WI',
    h1: 'Get your Milwaukee business to the top of Google and keep it there',
    h2Exact: 'Milwaukee SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Milwaukee customers search — heating emergencies in January, basement flooding in April, Cream City brick repair any time of year — and the leads keep coming. We build that ranking and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free Milwaukee SEO audit',
    intro:
      "Milwaukee SEO comes down to one question: when someone searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in a market shaped by brutal winters, aging housing stock, and homeowners who do their research before they call. We measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Milwaukee businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content tied to specific Milwaukee neighborhoods and suburbs, and earning links from trusted local sources. In Milwaukee, building your rankings around the heating and storm-damage searches before winter — and the foundation and basement searches before spring thaw — is one of the quickest ways to pull ahead of competitors who optimize year-round without thinking about timing.",
    problemHeading: "Three reasons your Milwaukee site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google. In a market with this many contractors — HVAC shops, roofers, plumbers, and restoration companies all fighting for the same Milwaukee homeowners — if you're not in the top handful of results for what you sell, your site is basically invisible no matter how good your work is." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost. For Milwaukee contractors with tight margins and seasonal cash flow, the difference matters." },
      { title: "You're not ranking for the demand that matters most", body: "Milwaukee demand swings hard with the lake: heating and boiler calls in winter, ice dam and roof damage in January and February, basement flooding in March and April. The contractors who rank for those terms before the season hits catch the spike. If your SEO ignores seasonal and emergency searches, you're leaving your busiest weeks on the table." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your Milwaukee customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real Milwaukee and industry sources. In a competitive market, links are often what separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across your Milwaukee neighborhoods and suburbs alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Seasonal & emergency SEO', desc: "We rank you for the winter heating, ice dam, and spring flooding searches that drive Milwaukee's busiest weeks, so you're visible before demand spikes, not after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Milwaukee leads — including the seasonal and emergency terms your competitors may be ignoring." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the seasonal and emergency terms that drive Milwaukee's biggest demand spikes." },
      { name: 'Build authority', desc: "Links and citations from trusted Milwaukee and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set or suburb." },
    ],
    pricing: {
      heading: 'Transparent Milwaukee SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and Milwaukee suburbs.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Milwaukee search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal & emergency SEO', 'Multi-location coverage', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Milwaukee?', a: "Most Milwaukee SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Milwaukee?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter neighborhood or suburb terms and slower on the most competitive metro-wide keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads for Milwaukee contractors?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Milwaukee contractors do best running SEO as the long-term engine and using ads for short-term spikes or a new service area." },
      { q: 'Should my Milwaukee SEO target seasonal demand?', a: "Absolutely. When temperatures plummet in January, searches for heating, furnace repair, and frozen pipes spike overnight — and spring snowmelt triggers basement flooding and foundation searches in March and April. Ranking takes months to build, so you have to be in place before the season, not chasing it after. We optimize for those terms ahead of time." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal/emergency SEO and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business — not just classic search." },
      { q: 'Which Milwaukee suburbs do you cover?', a: "The full metro belt — Wauwatosa, Brookfield, Greenfield, Oak Creek, Menomonee Falls, Waukesha, New Berlin, West Allis, Cudahy, South Milwaukee, and the city neighborhoods. We build genuine local pages rather than one generic Milwaukee page, because that's what actually ranks for suburb-specific searches." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'milwaukee', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Milwaukee Web Design Company | OnwardCraft',
    metaDescription:
      'Milwaukee web design that turns visitors into booked jobs — fast, mobile-first sites built for contractors in a market shaped by brutal winters and old.',
    eyebrow: 'Web Design · Milwaukee, WI',
    h1: 'Milwaukee web design that turns visitors into booked jobs',
    h2Exact: 'Milwaukee Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Milwaukee contractors fast, mobile-first sites engineered to turn visitors into booked work — and to earn the trust of homeowners who value straight talk and local expertise over slick marketing.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Milwaukee contractor websites lose leads quietly: slow on a phone, buried call button, no clear offer, nothing that says 'I know this neighborhood and I know old houses.' Web design done right fixes all of that. We build sites that load fast, look like the professional you are, and turn Bay View-to-Brookfield visitors into booked jobs — built to win the trust of a city that values honest work.",
    aioQuestion: 'What makes a good contractor website in Milwaukee?',
    aioAnswer:
      "A good Milwaukee contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific neighborhoods and suburbs you serve. Because Milwaukee homeowners are often dealing with urgent seasonal problems — a failing furnace in January, a flooded basement in April — a site that makes calling easy and looks locally credible is what converts. Milwaukee residents also appreciate plain-spoken copy over corporate language.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next guy. We design every page around one job: turning a visitor into a booked lead — especially the visitor who found you during an urgent search in January." },
      { title: "It's too slow on a phone", body: "Most of your Milwaukee visitors are on mobile, and they bounce if your site takes more than a few seconds to load. When someone's furnace is out in the middle of winter, they're not waiting. We build fast, so you keep the visitor." },
      { title: "It doesn't speak to your neighborhood", body: "A homeowner in Wauwatosa or Bay View wants to see you serve their area — not a generic Milwaukee page that could be anybody. We build sites that name the neighborhoods and suburbs you work, mention the specific problems you solve (ice dams, Cream City brick, old basements), so visitors trust you're local and Google ranks you for the right searches." },
    ],
    servicesHeading: "What's in an OnwardCraft Milwaukee website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your service area, and the jobs you actually want — built to look credible to Milwaukee homeowners." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your Milwaukee traffic is. Fast, thumb-friendly, easy to call from — especially from a homeowner in an emergency." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Plain-spoken words that speak to Milwaukee homeowners dealing with real problems — not filler text that reads like a national template." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Neighborhood and suburb-targeted pages', desc: "Pages built around the Milwaukee neighborhoods and suburbs you serve — Bay View, Wauwatosa, Brookfield, Oak Creek — so you stand out instead of blending into one generic city page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your service area, your best jobs, and your competitors, then map the site around booking more of the work you want — including the seasonal and emergency work that drives Milwaukee's biggest demand spikes." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert and earn trust — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the plain-spoken copy that works with Milwaukee homeowners, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting." },
    ],
    pricing: {
      heading: 'Transparent Milwaukee web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Suburb-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Milwaukee?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site help me stand out in Milwaukee?', a: "That's the whole point. We build around the specific neighborhoods and suburbs you serve, keep the site fast, and put a clear offer and call button front and center — so when a Milwaukee homeowner finds you in an emergency, yours is the site that earns the call." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Milwaukee terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your Milwaukee traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Milwaukee contractor site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'milwaukee', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Milwaukee Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your Milwaukee website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs — including the seasonal.',
    eyebrow: 'Website Redesign · Milwaukee, WI',
    h1: 'Redesign your Milwaukee website without losing your rankings',
    h2Exact: 'Milwaukee Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, nothing that signals local expertise. We redesign Milwaukee contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned before the next heating season.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Milwaukee contractor sites for speed and conversions, build them to earn trust with homeowners who value straight talk, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them — because the new site is faster, mobile-first, and better structured for the seasonal and emergency searches that drive Milwaukee's biggest demand spikes.",
    problemHeading: "Signs your Milwaukee site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "Milwaukee homeowners making a big-ticket decision judge you by your site in seconds. An old, cluttered design quietly sends them to a competitor who looks more established — even when your work is better. In a market that values local expertise, a dated site signals you might not be keeping up." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your Milwaukee visitors before they ever see your offer — including the ones dealing with a midnight heating emergency in January who need to call someone now. A mobile-first redesign wins them back." },
      { title: "It doesn't signal local expertise", body: "Generic contractor sites could be anywhere. A Milwaukee homeowner with Cream City brick, an old boiler, or a flooded basement wants to see that you know their situation — not a template that looks the same as every other contractor in the country. We rebuild to speak directly to the work Milwaukee homeowners actually need done." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your Milwaukee traffic arrives — especially during urgent searches." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and signals local expertise to Milwaukee homeowners." },
      { name: 'Neighborhood and suburb-targeted rebuild', desc: "Rebuilt around the Milwaukee neighborhoods and suburbs you serve — Bay View, Wauwatosa, Brookfield, Oak Creek — so the new site stands out and ranks for real local searches.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you leads and rankings, then map a redesign that fixes it — including the seasonal and emergency content gaps that matter most in Milwaukee — without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and improve, not drop." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Milwaukee redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Suburb-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Milwaukee?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them — which matters a lot before Milwaukee's busy heating season." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, doesn't reflect local Milwaukee expertise, isn't bringing in leads, or sounds like a national template with a city name swapped in, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the redesign help me compete in Milwaukee?', a: "Yes, and that's the point. We rebuild around the specific neighborhoods and suburbs you serve, keep the site fast, and speak directly to the seasonal and specialist problems Milwaukee homeowners actually face — ice dams, old furnaces, Cream City brick, flooded basements. A site that speaks to those things converts better than one that doesn't." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const milwaukeeCity = {
  citySlug: 'milwaukee', city: 'Milwaukee', state: 'Wisconsin', stateAbbr: 'WI', metro: 'Milwaukee',

  titleTag: 'Milwaukee Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Milwaukee contractors. Get found before the next freeze or flooding season hits, own your leads instead of renting them.',

  eyebrow: 'Milwaukee · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Milwaukee contractors found and booked',
  h2Exact: 'Milwaukee Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Milwaukee's seasonal market — brutal winters, aging housing stock, and homeowners who trust straight-talking local contractors over polished national agencies.",
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Milwaukee audit',

  intro:
    "If you run a contracting business in Milwaukee, your busiest seasons are shaped by the lake. When January wind chills hit -30°F and a furnace dies, homeowners call whoever shows up first in Google. When April snowmelt floods a basement, they need a contractor today. Winning here takes three things working together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack for the neighborhoods and suburbs you serve — including the seasonal and emergency searches that drive Milwaukee's biggest demand spikes. Here's how we help Milwaukee contractors do exactly that.",
  aioQuestion: 'How do Milwaukee contractors get more leads online?',
  aioAnswer:
    "Milwaukee contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack neighborhood by neighborhood. Because demand spikes hard in winter heating season and spring flooding season, the contractors who build their rankings before those waves hit — rather than during them — are the ones who book the most urgent, highest-value work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Milwaukee searches \"near me.\" The single highest-return move for most local contractors — done neighborhood by neighborhood and suburb by suburb, before heating season or spring flooding season hits.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search — heating emergencies, ice dam repair, basement waterproofing, Cream City brick — build an asset you own instead of renting traffic, and measure it in leads.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to earn the trust of Milwaukee homeowners and turn visitors into booked jobs — not templates with a city name swapped in.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed, conversions, and local credibility — and migrate it carefully so you keep every bit of ranking you've already earned before the next busy season.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Milwaukee?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads — especially heading into Milwaukee's busy heating season and spring." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, masonry, electrical, restoration, and general contractors. We understand Milwaukee's heating emergencies, ice dam season, Cream City brick repair, and spring basement flooding." },
    { q: 'Why does the Milwaukee market need a different approach?', a: "Because demand here is shaped by the lake and the housing stock. Milwaukee gets brutal winters with heavy lake-effect snow and temperatures that drive heating and storm-damage emergencies. The city has hundreds of thousands of pre-1960 homes — many with Cream City brick — that need specialist knowledge. And about 18% of city residents are Hispanic, with real Spanish-language search demand most contractors never target. Generic marketing misses all of that." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Milwaukee areas do you serve?', a: "The city and the full suburban belt — Brady Street, Walker's Point, Bay View, Riverwest, Wauwatosa, Brookfield, Greenfield, Oak Creek, Menomonee Falls, Waukesha, New Berlin, West Allis, Cudahy, South Milwaukee, and more." },
    { q: 'Where should I start?', a: "Start with a free Milwaukee audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest — including whether your seasonal and emergency search coverage is where it needs to be before the next heating season. No pitch deck, just a plan." },
  ],
};
