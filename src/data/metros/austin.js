// AUSTIN — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Austin's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// AUSTIN — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Austin is a moving target',
  body:
    "Austin has added hundreds of thousands of residents in the past decade — tech workers from California and the Pacific Northwest buying homes for the first time in Texas, often with no idea who to call for a roof repair, an AC tune-up, or a foundation inspection. That wave of new homeowners is one of the biggest untapped opportunities for local contractors in the country, and most of them start the search on their phones. Two things dominate demand here. First, the summers are punishing: Austin regularly hits 100–105°F from June through September, and HVAC calls spike hard the moment the heat arrives. Second, the Hill Country climate swings between drought and violent flash flooding, which creates a constant cycle of roofing, drainage, and foundation work — especially around the older bungalows and 1950s-to-70s stock near downtown. Combine that with a local culture that genuinely prefers independent, community-rooted businesses over national chains, and the contractor who shows up in local search with a real Austin presence has a massive edge over the out-of-state operators.",
  pullQuote: 'In a city adding thousands of new homeowners every year, the contractor who owns the local map owns the work.',
  donut: {
    title: 'How Austin searches',
    value: 35,
    centerLabel: 'Hispanic residents',
    legend: [
      { label: 'Hispanic / Latino', pct: 35, kind: 'teal' },
      { label: 'Other', pct: 65, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Summer HVAC (Jun–Sep) and spring/fall storm restoration (Mar–May, Oct)',
  seasonalDemand: [
    { m: 'J', v: 48 }, { m: 'F', v: 50 }, { m: 'M', v: 72, peak: true },
    { m: 'A', v: 78, peak: true }, { m: 'M', v: 88, peak: true }, { m: 'J', v: 98, peak: true },
    { m: 'J', v: 100, peak: true }, { m: 'A', v: 96, peak: true }, { m: 'S', v: 86, peak: true },
    { m: 'O', v: 74, peak: true }, { m: 'N', v: 55 }, { m: 'D', v: 44 },
  ],
  stats: [
    { value: '2.3M+', label: 'people across the Austin-Round Rock metro' },
    { value: '~35%', label: 'Hispanic residents — Spanish-language searches matter', accent: true },
    { value: 'Jun–Sep', label: 'peak HVAC season, when 100°F+ days stack up' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks' },
  ],
  neighborhoods: [
    'Hyde Park', 'South Congress', 'Barton Hills', 'East Austin', 'Travis Heights',
    'Bouldin Creek', 'Mueller', 'Domain / North Austin', 'Westlake', 'Cedar Park',
    'Round Rock', 'Pflugerville', 'Kyle', 'Georgetown',
  ],
};

const AREAS = [
  'Hyde Park', 'South Congress (SoCo)', 'Barton Hills', 'East Austin', 'Travis Heights',
  'Bouldin Creek', 'Mueller', 'Domain / North Austin', 'Westlake', 'Cedar Park',
  'Round Rock', 'Pflugerville', 'Kyle', 'Georgetown', 'Leander', 'Manor',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. Austin is growing faster than almost anywhere in the country, which means demand is real and the window to plant your flag in local search before it closes is right now. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We understand summer AC emergencies, flash-flood restoration work, and foundation jobs on older Austin stock, so everything we build is shaped around how your customers really search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners three competitors also bought.",
  },
  {
    title: 'We actually speak Austin',
    body: "Neighborhood-by-neighborhood targeting from Hyde Park to Round Rock, plus the local angle — new transplants who need a trusted contractor, not a national call center — that a generic agency can't replicate by swapping a city name into a template.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say an Austin contractor gets around 2,000 local \"near me\" impressions a month across a handful of neighborhoods. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a booked-out calendar — and in a market growing this fast, that gap widens every month. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Austin', state: 'Texas', stateAbbr: 'TX', metro: 'Austin-Round Rock',
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const austinLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'austin', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Austin Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Search your service in Austin and three businesses show up on the map. We get you into those three, so the call lands with you.',
    eyebrow: 'Local SEO · Austin, TX',
    h1: 'When Austin searches for what you do, be the first name they find',
    h2Exact: 'Austin Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. In a city growing this fast — with thousands of new homeowners who don't know a single local contractor — we get you into that top three for your neighborhoods so the call lands with you instead of whoever ranked first.",
    primaryCta: 'Get my free Austin audit',
    intro:
      "Austin local SEO comes down to one question: when a homeowner in Hyde Park, Mueller, or Round Rock searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. Austin's tech boom has packed the metro with new residents buying homes and urgently needing contractors — and most of them are searching on their phones right now. Getting into those three spots in the neighborhoods you serve is the whole game. Here's how you do it.",
    aioQuestion: 'How do Austin businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Austin neighborhoods like Hyde Park, East Austin, and Round Rock. Austin is growing fast and summers are brutal, so the winners target tight service areas, rank for summer HVAC and storm-restoration searches before demand spikes, and respond fast when the temperature hits triple digits.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks. Austin is adding people fast, but the top Map Pack spots are already locked down by whoever got there first. Getting into that top three for your neighborhoods is usually the single highest-return move an Austin contractor can make — and the window won't stay open forever." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Austin homeowner to four contractors, then bill each of you to fight over them. It's a treadmill. Local SEO builds the opposite: a homeowner finds you, calls you, and nobody else got it. Over time you stop renting and start owning the pipeline." },
      { title: "You're invisible to new residents who need you most", body: "A huge slice of Austin's new homeowners moved from California or the Pacific Northwest and have no existing relationships with local contractors. They search, see the top three, and call. If you're not one of them, that whole wave of demand lands somewhere else. Ranking now, while the market is still sorting itself out, is how you capture it." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Austin searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes people pick up the phone." },
      { name: 'Neighborhood pages', desc: "Real pages for Hyde Park, East Austin, Mueller, Round Rock, Cedar Park, and the rest, so you rank for the neighborhood someone's actually searching, not just \"Austin.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Austin sources Google trusts — local press, business associations, neighborhood organizations, trade partners. This is what separates page one from page two here." },
      { name: 'Seasonal & storm SEO', desc: "We rank you for summer HVAC searches before June hits and storm-restoration terms ahead of spring and fall — so you catch the demand instead of chasing it.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your Austin neighborhoods and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now over starting later." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Austin, Round Rock, Cedar Park, Pflugerville, Kyle, and Georgetown, plus the on-page work to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Austin neighborhoods and suburbs.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across the Austin metro.', features: ['Everything in Local Growth', 'Local link building', 'Seasonal & storm-restoration SEO', 'Multi-neighborhood and suburb pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Austin?', a: "Most Austin engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The competitive Austin keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days in a market this fast-moving is selling you something." },
      { q: 'What makes Austin local SEO different from other cities?', a: "Austin is growing faster than almost anywhere in the country. There's a massive wave of new homeowners who have no existing contractor relationships and search online for everything. The contractors who rank now — while the market is still settling — capture that demand and build a referral base that compounds for years. Plus, Austin summers are severe enough that HVAC calls spike almost overnight, and spring storms create a restoration rush every year. Ranking for those seasonal terms before the season arrives is how you capture the spike." },
      { q: 'Can you help me reach Spanish-speaking customers?', a: "Yes. About 35% of Austin residents are Hispanic, and many search in Spanish. We can optimize your profile and content so you show up for those searches, reaching demand your competitors aren't targeting." },
      { q: 'Which areas do you cover?', a: "All of greater Austin — Hyde Park, South Congress, Barton Hills, East Austin, Travis Heights, Bouldin Creek, Mueller, the Domain, Westlake, and the fast-growing suburbs: Cedar Park, Round Rock, Pflugerville, Kyle, Georgetown, and Leander. We build genuine neighborhood pages instead of one generic Austin page, because that's what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand summer AC emergencies, flash-flood restoration, foundation work on older Austin homes, and the new-construction boom in the suburbs." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because the work is coming to you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your Austin neighborhoods, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'austin', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Austin SEO Company | Rank Higher, Get Leads | OnwardCraft',
    metaDescription:
      'Austin SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in contracts, built for a fast-growing market.',
    eyebrow: 'SEO Services · Austin, TX',
    h1: 'Get your Austin business to the top of Google and keep it there',
    h2Exact: 'Austin SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Austin customers search and the leads keep coming. We build that ranking for contractors in one of the fastest-growing cities in the country — and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free Austin SEO audit',
    intro:
      "Austin SEO comes down to one question: when someone searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in a booming market where the competition is still catching up — and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Austin businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content tied to specific Austin neighborhoods and suburbs, and earning links from trusted local sources. In Austin, seasonal timing matters: the contractors who rank for summer HVAC and spring storm-restoration terms before demand spikes catch the work; the ones who wait do not.",
    problemHeading: "Three reasons your Austin site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. In a market adding residents this fast, if you're not in the top handful of results for what you sell, you're invisible to the wave of new homeowners who have no existing contractor and are searching right now." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost. In a fast-growing market, that asset compounds." },
      { title: "You're not ranking for the demand that matters", body: "Austin demand swings hard: HVAC calls pile up the moment May hits and don't stop until October. Spring flash floods and hail trigger a roofing and restoration rush. The contractors already in place when demand spikes take most of the calls. If your SEO isn't built around those seasonal surges, you're leaving your busiest weeks on the table." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your Austin customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real Austin and industry sources. In a competitive market, links are often what separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across your Austin neighborhoods and suburbs alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Seasonal & storm SEO', desc: "We rank you for summer HVAC searches before June arrives and storm-restoration terms ahead of spring and fall, so you're visible when demand spikes — not scrambling to catch up.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Austin leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the seasonal and storm-restoration terms that matter here." },
      { name: 'Build authority', desc: "Links and citations from trusted Austin and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Austin SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Austin search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal & storm-restoration SEO', 'Multi-location / suburb targeting', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Austin?', a: "Most Austin SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Austin?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter neighborhood terms and slower on the most competitive citywide keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Austin contractors do best running SEO as the long-term engine and ads for short-term spikes during peak HVAC or storm season." },
      { q: 'Should my Austin SEO target seasonal demand?', a: "Yes, absolutely. When summer hits in Austin, HVAC calls spike almost overnight — and contractors already ranking capture the surge while the rest scramble. Spring and fall storms do the same for roofing and restoration. Ranking takes months to build, so you have to be in place before the season, not chasing it after. We optimize for those terms ahead of time." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal/storm and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which areas around Austin do you cover?', a: "All of greater Austin and the surrounding suburbs — Hyde Park, South Congress, East Austin, Mueller, the Domain, Westlake, and Round Rock, Cedar Park, Pflugerville, Kyle, Georgetown, Leander, and Manor — with genuine local pages rather than one generic Austin page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'austin', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Austin Web Design Company | Sites That Convert | OnwardCraft',
    metaDescription:
      'Austin web design that turns visitors into booked jobs — fast, mobile-first sites built for contractors in a booming market. Transparent pricing, you own it.',
    eyebrow: 'Web Design · Austin, TX',
    h1: 'Austin web design that turns visitors into booked jobs',
    h2Exact: 'Austin Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Austin contractors fast, mobile-first sites engineered to turn visitors into booked work — and to stand out in a city where thousands of new homeowners are searching for a contractor they can trust.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Austin contractor websites lose leads quietly: slow on a phone, buried call button, no clear offer. Web design done right fixes all of that. We build sites that load fast, look like the professional you are, and turn Hyde-Park-to-Round-Rock visitors into booked jobs — built to win in a market where Austin's tech-transplant wave is searching for someone exactly like you.",
    aioQuestion: 'What makes a good contractor website in Austin?',
    aioAnswer:
      "A good Austin contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific neighborhoods and suburbs you serve. Because Austin homeowners — especially the tech-industry transplants who've moved from out of state — do almost everything on their phones and have no existing contractor relationships, a fast site with an obvious next step is what separates a business that books jobs from one that just looks nice.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next guy. In Austin right now, thousands of recent transplants are actively searching for a contractor they can trust — and they'll pick the one whose website makes it easy to say yes. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Your Austin visitors are on mobile, and they bounce if your site takes more than a few seconds to load. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking." },
      { title: "It doesn't speak to your neighborhood", body: "A homeowner in Mueller wants to see you serve Mueller — not a generic \"Austin\" page that could be anybody. Transplants from out of state are especially sensitive to local cues: they want to know you actually know the area. We build sites that name the neighborhoods and suburbs you work, so visitors trust you're local and Google ranks you for the right searches." },
    ],
    servicesHeading: "What's in an OnwardCraft Austin website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your Austin neighborhoods, and the jobs you actually want." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your Austin traffic is. Fast, thumb-friendly, easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that speak to anxious homeowners — including the new-to-Austin transplants with no existing contractor — and book the job." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Neighborhood-targeted pages', desc: "Pages built around Hyde Park, East Austin, Mueller, Cedar Park, Round Rock, and the rest — so you stand out instead of blending into one generic city page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your Austin neighborhoods, your best jobs, and your competitors, then map the site around booking more of the work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting." },
    ],
    pricing: {
      heading: 'Transparent Austin web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Neighborhood-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Austin?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site help me reach Austin transplants and new homeowners?', a: "That's one of the biggest opportunities in Austin right now. Hundreds of thousands of people have moved here from California and the Pacific Northwest — they have money, they own homes, and they have no existing contractor relationships. They search online for everything. A fast, trustworthy site that names the neighborhood they live in is how you become their go-to contractor." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Austin terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your Austin traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Austin site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'austin', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Austin Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your Austin website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs in a booming market. Free audit.',
    eyebrow: 'Website Redesign · Austin, TX',
    h1: 'Redesign your Austin website without losing your rankings',
    h2Exact: 'Austin Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, easy to ignore. We redesign Austin contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned in a market that keeps growing.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Austin contractor sites for speed and conversions, build them to stand out in a city where new homeowners are actively searching for someone to trust, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Austin site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "Austin has an influx of tech-industry transplants used to polished digital experiences. When they land on a dated, cluttered site, they quietly close the tab and call the next contractor — even when your work is better. A modern, trustworthy site is the entry ticket in this market." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your Austin visitors before they ever see your offer. A redesign built mobile-first wins them back — and helps your ranking at the same time." },
      { title: "It blends into a booming market", body: "Austin is adding competitors as fast as it adds residents. A generic old site gives a visitor no reason to pick you over the next dozen results. We rebuild for conversions and for the specific neighborhoods and suburbs you serve, so the right buyers choose you." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your Austin traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and appeals to Austin's design-conscious homeowners." },
      { name: 'Neighborhood-targeted rebuild', desc: "Rebuilt around the Austin neighborhoods and suburbs you serve — Hyde Park, Mueller, Round Rock, Cedar Park, and the rest — so the new site stands out instead of reading like everyone else's.", featured: true },
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
      heading: 'Transparent Austin redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Neighborhood-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Austin?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is hard to update, isn't bringing in leads, or blends into a crowded Austin market, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the redesign help me compete in Austin?', a: "Yes, and that's the point. Austin is attracting tech-savvy homeowners who compare sites quickly and pick the one that looks trustworthy and makes it easy to act. We rebuild around the specific neighborhoods and suburbs you serve and make the offer and call button obvious — so the new site wins those comparisons." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const austinCity = {
  citySlug: 'austin', city: 'Austin', state: 'Texas', stateAbbr: 'TX', metro: 'Austin-Round Rock',

  titleTag: 'Austin Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Austin contractors. Get found, get booked, and own your leads instead of renting them — built for a fast-growing Texas.',

  eyebrow: 'Austin · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Austin contractors found and booked',
  h2Exact: 'Austin Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Austin's booming, competitive market. One team to get you ranking, converting, and off the rented-lead treadmill — before the window closes.",
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Austin audit',

  intro:
    "If you run a contracting business in Austin, you're fighting for attention in one of the fastest-growing markets in the country — and the competition is catching up fast. Winning here takes three things working together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack for the neighborhoods you serve. Get all three right and you capture the wave of new homeowners who are searching right now. Get any one of them wrong and you hand that demand to whoever ranks above you.",
  aioQuestion: 'How do Austin contractors get more leads online?',
  aioAnswer:
    "Austin contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack neighborhood by neighborhood. Austin's wave of tech-industry transplants — new homeowners with no existing contractor relationships — searches online for everything, so the contractors who rank in local search and convert visitors on mobile are the ones who capture that demand.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Austin searches \"near me.\" The single highest-return move for most local contractors — done tight, neighborhood by neighborhood, before the market fully settles.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search, build an asset you own instead of renting traffic from ads, and measure it in leads — especially during Austin's brutal summer HVAC season and spring storm rush.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs — built to win the trust of Austin's tech-savvy transplants who are searching for a contractor they can rely on.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it carefully so you keep every bit of ranking you've already earned in one of the country's fastest-growing metros.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Austin?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads in a market that's growing as fast as Austin is." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors — so we understand summer AC emergencies, flash-flood restoration, foundation work on older Austin stock, and the new-construction boom in the suburbs." },
    { q: 'Why does the Austin market need a different approach?', a: "Austin has added hundreds of thousands of residents in the past decade, many of them tech-industry transplants buying homes for the first time in Texas. They have no existing contractor relationships and search online for everything. The contractors who rank now — while the market is still sorting itself out — capture a compounding wave of demand. Plus, Austin summers are severe enough that HVAC work spikes almost overnight, and spring storms create a recurring restoration rush that rewards whoever is already ranking." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Austin areas do you serve?', a: "All of greater Austin and the surrounding suburbs — Hyde Park, South Congress, Barton Hills, East Austin, Travis Heights, Bouldin Creek, Mueller, the Domain, Westlake, Cedar Park, Round Rock, Pflugerville, Kyle, Georgetown, and Leander." },
    { q: 'Where should I start?', a: "Start with a free Austin audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};
