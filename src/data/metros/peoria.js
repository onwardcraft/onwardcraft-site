// PEORIA — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Peoria's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// PEORIA — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Peoria is about trust, not volume',
  body:
    "Peoria has long been cited as the quintessential American middle-market city — when marketers ask \"will it play in Peoria?\" they mean: will it resonate with practical, value-focused, community-oriented people who see through hype? That's the homeowner you're selling to here. The metro is anchored by Caterpillar, Inc., the world's largest construction and mining equipment manufacturer, which means a significant share of the professional homeowner class are CAT engineers and corporate staff — people who know quality, read specs, and can smell a low-bid contractor from across the room. Sitting on the Illinois River, Peoria also faces real environmental risk: heavy spring rains routinely drive flooding in low-lying neighborhoods, and central Illinois sits squarely in tornado corridor, with storm and hail damage surging every spring from March through June. Harsh winters bring roof ice dams, heating emergencies, and frozen pipe calls from November through February. OSF HealthCare and Methodist Medical anchor another stable professional homeowner class. In a market like this, the contractor who ranks for the right seasonal terms and looks credible to an engineer is the one who wins the call.",
  pullQuote: 'In the city that defines middle-market America, the contractor who looks professional and ranks locally owns the work.',
  donut: {
    title: 'Peoria community profile',
    value: 26,
    centerLabel: 'Black/AA',
    legend: [
      { label: 'Black/AA', pct: 26, kind: 'teal' },
      { label: 'Other', pct: 74, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Storm/flood season (Mar–Jun) and winter heating (Nov–Feb)',
  seasonalDemand: [
    { m: 'J', v: 88, peak: true }, { m: 'F', v: 84, peak: true }, { m: 'M', v: 90, peak: true },
    { m: 'A', v: 92, peak: true }, { m: 'M', v: 88, peak: true }, { m: 'J', v: 82, peak: true },
    { m: 'J', v: 70 }, { m: 'A', v: 72 }, { m: 'S', v: 54 },
    { m: 'O', v: 52 }, { m: 'N', v: 80, peak: true }, { m: 'D', v: 86, peak: true },
  ],
  stats: [
    { value: '~400K', label: 'people across the greater Peoria metro' },
    { value: 'CAT HQ', label: 'Caterpillar\'s massive Peoria operations shape the professional homeowner class', accent: true },
    { value: 'Mar–Jun', label: 'storm and flood season, when roofing and restoration demand surges' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks in a tight local market' },
  ],
  neighborhoods: [
    'Moss-Bradley', 'Richwoods', 'Northwoods', 'Dunlap', 'Morton',
    'Washington', 'East Peoria', 'Pekin', 'Canton', 'Galesburg',
    'West Peoria', 'Peoria Heights', 'Bartonville', 'Chillicothe', 'Metamora',
  ],
};

const AREAS = [
  'Peoria', 'East Peoria', 'Pekin', 'Dunlap', 'Morton',
  'Washington', 'Canton', 'Galesburg', 'Chillicothe', 'Peoria Heights',
  'Moss-Bradley', 'Richwoods', 'Northwoods', 'Bartonville', 'Metamora',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. Peoria homeowners are sharp — these are CAT engineers, healthcare professionals, people who know what quality looks like. They go straight to Google, they read reviews, and they pick the contractor who shows up credibly and locally. So that's the whole point of what we do: get you ranking for the work you want, in the neighborhoods you serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We understand spring storm emergencies, Illinois River flooding, tornado damage calls, and winter heating crises — so everything we build is shaped around how Peoria customers really search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners three competitors also bought — especially in a market where smart buyers do their own homework.",
  },
  {
    title: 'We actually speak Peoria',
    body: "Neighborhood-by-neighborhood targeting from Moss-Bradley to Dunlap, from East Peoria to Galesburg, plus the seasonal expertise to win searches before a tornado season or flood event brings the surge. The stuff a national shop can't do by swapping a city name into a template.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Peoria contractor gets around 800 local \"near me\" impressions a month across a handful of neighborhoods. Moving from page-two invisibility into the top three is the difference between a quiet phone and a booked-out calendar — and when storm season hits and every homeowner is searching at once, the contractor already ranking captures the surge. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Peoria', state: 'Illinois', stateAbbr: 'IL', metro: 'Peoria',
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const peoriaLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'peoria', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Peoria Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Search your service in Peoria and three businesses show up on the map. We get you into those three, so the call lands with you. Honest pricing, no lock-in, free audit.',
    eyebrow: 'Local SEO · Peoria, IL',
    h1: 'When Peoria searches for what you do, be the first name they find',
    h2Exact: 'Peoria Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. In Peoria — the city that defines middle-market America — we get you into that top three for your neighborhoods so the call lands with you, not whoever ranked first.",
    primaryCta: 'Get my free Peoria audit',
    intro:
      "Peoria local SEO comes down to one thing: when a homeowner in Moss-Bradley or Dunlap searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. Peoria is a market of practical, value-oriented buyers — many of them CAT engineers and healthcare professionals who know how to evaluate a contractor. Being credible and visible locally is everything. Here's how you do it.",
    aioQuestion: 'How do Peoria businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Peoria neighborhoods. Peoria buyers are practical and research-minded, so the winners target tight service areas, respond fast during storm and flood season, and build genuine trust signals that hold up when a CAT engineer or OSF nurse checks them out.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks. Peoria buyers are decisive — they pick from that top three and call. If you're not one of them, it almost doesn't matter how good your work is. Getting into that top three for your service area is usually the single highest-return move you can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Peoria homeowner to multiple contractors, then bill each of you to compete. Local SEO builds the opposite: a lead finds you, calls you, and nobody else got it. In a market where word-of-mouth and trust matter deeply, owning your online presence compounds faster than you'd expect." },
      { title: "You're missing the storm and flood surge", body: "Spring tornado season and Illinois River flooding drive huge spikes in roofing and restoration calls from March through June. Winter brings heating emergencies from November through February. The contractors who rank before these surges begin are the ones who book the season. If you're not ranking, those calls go to whoever is." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Peoria searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. Peoria buyers check reviews carefully, so this lifts both your ranking and your close rate." },
      { name: 'Neighborhood pages', desc: "Real pages for Moss-Bradley, Dunlap, Washington, Morton, East Peoria and the rest, so you rank for the community someone's actually searching, not just \"Peoria.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Peoria sources Google trusts — local press, associations, partners. This is what separates page one from page two in a competitive market." },
      { name: 'Seasonal storm & flood SEO', desc: "We rank you for tornado damage, storm roofing, and flood restoration terms before March hits, so you capture the spring surge instead of missing it.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your Peoria neighborhoods and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now — especially before spring storm season." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Peoria and the surrounding communities, plus the seasonal content to capture storm and flood demand." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses competing across several Peoria neighborhoods.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across the Peoria metro.', features: ['Everything in Local Growth', 'Local link building', 'Seasonal storm & flood SEO', 'Multi-community service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Peoria?', a: "Most Peoria engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're targeting. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The more competitive Peoria keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days is selling you something." },
      { q: 'What makes Peoria local SEO different?', a: "A couple of things. Peoria is famously practical and research-oriented — these are CAT engineers and healthcare professionals who vet contractors carefully, so trust signals like reviews and neighborhood-specific content matter more here. And the seasonal demand swings are real: tornado and flooding season drives huge spikes in roofing and restoration every spring. Ranking before those surges is the game." },
      { q: 'Can you help me capture storm and flood work?', a: "Yes, and that's one of the highest-return moves in this market. We optimize your profile and content for tornado damage, storm roofing, hail repair, and flood restoration terms so you're ranking before March hits — not trying to catch up after the phones start ringing." },
      { q: 'Which areas do you cover?', a: "Peoria and the surrounding metro — East Peoria, Pekin, Dunlap, Morton, Washington, Canton, Galesburg, Chillicothe, Peoria Heights, Moss-Bradley, Richwoods, Northwoods, Bartonville, and Metamora. We build genuine community pages instead of one generic Peoria page, because that's what ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand storm season, Illinois River flooding, winter heating emergencies, and the OSF and Methodist Medical area, and we build your local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads that multiple competitors also bought. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because the work is coming to you directly — and in Peoria, where community reputation matters, owned visibility compounds." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your neighborhoods, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'peoria', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Peoria SEO Company | Rank Higher, Get Leads | OnwardCraft',
    metaDescription:
      'Peoria SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in contracts, built for storm season and middle-market buyers. Free Peoria SEO audit.',
    eyebrow: 'SEO Services · Peoria, IL',
    h1: 'Get your Peoria business to the top of Google and keep it there',
    h2Exact: 'Peoria SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Peoria customers search and the leads keep coming — including the surge when storm season hits. We build that ranking and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free Peoria SEO audit',
    intro:
      "Peoria SEO comes down to one question: when a homeowner in Washington or Dunlap searches your service, are you on page one or page two? Page two might as well not exist. We get contractors ranking for the money keywords in Peoria's practical, research-minded market — and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Peoria businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content tied to specific neighborhoods and communities, and earning links from trusted Peoria sources. In a market full of CAT engineers and healthcare professionals who do their homework, tight community targeting and ranking for seasonal storm, flood, and heating terms are two of the quickest ways to pull ahead.",
    problemHeading: "Three reasons your Peoria site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google. In a market where Peoria buyers research carefully before calling, if you're not in the top results for what you sell, your site is invisible — no matter how good your work is or how long you've been in business." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your budget stops, the leads stop. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost. For a Peoria contractor, that's the difference between a treadmill and a real pipeline." },
      { title: "You're not ranking for the demand that matters", body: "Peoria demand swings hard with the seasons — tornado and storm damage in spring, flooding along the Illinois River in March through May, heating emergencies in winter. The contractors who rank for those terms ahead of time catch the surge. If your SEO ignores seasonal and emergency searches, you're leaving your busiest weeks on the table." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your Peoria customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real Peoria and industry sources. Links are often what separate page one from page two in a competitive local market." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across your communities alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Seasonal storm & flood SEO', desc: "We rank you for tornado damage, storm roofing, hail repair, and flood restoration terms before spring hits, so you're capturing the surge instead of missing it.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Peoria leads — including seasonal storm and flooding terms." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the seasonal and emergency terms that matter most in central Illinois." },
      { name: 'Build authority', desc: "Links and citations from trusted Peoria and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Peoria SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and communities.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Peoria search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal storm & flood SEO', 'Multi-community pages', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Peoria?', a: "Most Peoria SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Peoria?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter community terms and slower on the most competitive citywide keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Peoria contractors do best running SEO as the long-term engine and ads for short-term spikes, like the start of storm season." },
      { q: 'Should my Peoria SEO target seasonal demand?', a: "Yes — this is one of the highest-return moves in this market. Tornado and storm damage calls surge from March through June, Illinois River flooding drives restoration work in spring, and heating emergencies come December through February. Ranking takes months to build, so you have to be in place before the season, not chasing it after." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal storm and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which areas around Peoria do you cover?', a: "Peoria and the surrounding metro — East Peoria, Pekin, Dunlap, Morton, Washington, Canton, Galesburg, Chillicothe, Peoria Heights, Moss-Bradley, Richwoods, Northwoods, and more — with genuine local pages rather than one generic Peoria page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads. And in Peoria, where community reputation matters, owning your visibility compounds faster." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'peoria', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Peoria Web Design Company | Sites That Convert | OnwardCraft',
    metaDescription:
      'Peoria web design that turns visitors into booked jobs — fast, mobile-first sites built for contractors serving a practical, research-minded market. Transparent pricing, you own it. Free quote.',
    eyebrow: 'Web Design · Peoria, IL',
    h1: 'Peoria web design that turns visitors into booked jobs',
    h2Exact: 'Peoria Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Peoria contractors fast, mobile-first sites engineered to turn visitors into booked work — and to hold up under scrutiny from CAT engineers and healthcare professionals who know quality.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Peoria contractor websites lose leads quietly: slow on a phone, buried call button, no clear offer. Peoria buyers are practical and do their homework — many are Caterpillar engineers or OSF and Methodist Medical staff who evaluate contractors the same way they'd evaluate a supplier. A website that looks credible, loads fast, and makes it obvious how to book the job is not optional here. We build exactly that.",
    aioQuestion: 'What makes a good contractor website in Peoria?',
    aioAnswer:
      "A good Peoria contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific communities you serve. Because Peoria buyers are research-minded and professional — a lot of them work at Caterpillar, OSF HealthCare, or Methodist Medical — a site that looks credible and is easy to verify converts far better than one that feels generic.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next result. Peoria buyers do their homework — a CAT engineer will check your reviews, look at your photos, and decide in a minute whether you look like a professional operation. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Peoria visitors are on mobile, and they bounce if your site takes more than a few seconds to load. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking." },
      { title: "It doesn't speak to your community", body: "A homeowner in Morton or East Peoria wants to see you serve Morton or East Peoria — not a generic Illinois page that could be anybody. We build sites that name the communities you work, so visitors trust you're genuinely local and Google ranks you for the right searches." },
    ],
    servicesHeading: "What's in an OnwardCraft Peoria website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your communities, and the jobs you actually want." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your Peoria traffic is. Fast, thumb-friendly, easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that speak to practical Peoria homeowners — including the professionals who evaluate you like a vendor — and book the job, not filler text." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and community-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Community-targeted pages', desc: "Pages built around Peoria, East Peoria, Pekin, Dunlap, Morton, Washington, and the rest of the metro so you stand out instead of blending into a generic city page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your communities, your best jobs, and your competitors, then map the site around booking more of the work you want — including storm season and winter jobs." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert with a Peoria buyer in mind — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting." },
    ],
    pricing: {
      heading: 'Transparent Peoria web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + community pages', 'Speed & Core Web Vitals', 'Community-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Peoria?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site hold up with professional buyers like CAT engineers?', a: "That's the whole point in Peoria. Caterpillar engineers and OSF healthcare staff evaluate contractors the same way they'd evaluate a vendor — they check reviews, look at photos, and decide if you look credible. We design around that standard: fast, professional, locally specific, and easy to verify." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and community-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Peoria terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your Peoria traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Peoria site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'peoria', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Peoria Website Redesign | More Leads, No Traffic Loss | OnwardCraft',
    metaDescription:
      'Redesign your Peoria website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs in a practical, research-driven market. Free audit.',
    eyebrow: 'Website Redesign · Peoria, IL',
    h1: 'Redesign your Peoria website without losing your rankings',
    h2Exact: 'Peoria Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, and easy to dismiss by a Peoria buyer who knows quality. We redesign contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Peoria contractor sites for speed and conversions, build them to withstand scrutiny from a professional homeowner base, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Peoria site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "Peoria is full of CAT engineers, OSF nurses, and healthcare professionals who scrutinize contractors the way they'd evaluate any professional vendor. An old, cluttered design quietly loses their trust before you even get a chance to quote the job — even when your work is better than the competition." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your Peoria visitors before they ever see your offer. A redesign built mobile-first wins them back and keeps them long enough to call." },
      { title: "It blends into a generic result", body: "A generic old site gives a practical Peoria buyer no reason to pick you over the next result. We rebuild around the communities you serve and the seasonal work you want — storm roofing, flood restoration, winter heating — so the site stands out for the right buyers at the right time." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your Peoria traffic arrives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and holds up with professional buyers." },
      { name: 'Community-targeted rebuild', desc: "Rebuilt around the neighborhoods and communities you serve — Dunlap, Morton, East Peoria, Washington, and the rest — so the new site ranks locally and reads as genuinely Peoria.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you leads and rankings, then map a redesign that fixes it without breaking what already works — including your seasonal traffic." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and improve, not drop." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Peoria redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + community pages', 'Community-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Peoria?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, isn't bringing in leads, or doesn't hold up under scrutiny from a professional buyer, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the redesign help me compete in Peoria?', a: "Yes, and that's the point in a market full of careful, professional buyers. We rebuild around the specific communities you serve, keep the site fast, and make the offer and call button obvious — so a CAT engineer or OSF nurse evaluating you picks you over the generic result." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const peoriaCity = {
  citySlug: 'peoria', city: 'Peoria', state: 'Illinois', stateAbbr: 'IL', metro: 'Peoria',

  titleTag: 'Peoria Marketing for Contractors | Web, SEO & Leads | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Peoria contractors. Get found, get booked, and own your leads instead of renting them — built for middle-market buyers and storm season. Free Peoria audit.',

  eyebrow: 'Peoria, IL · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Peoria contractors found and booked',
  h2Exact: 'Peoria Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Peoria's practical, research-minded market — where CAT engineers and healthcare professionals set the bar and storm season drives the spikes. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Peoria audit',

  intro:
    "If you run a contracting business in Peoria, you're selling to a market that famously represents middle-market America — practical, value-focused, and skeptical of hype. A significant share of the professional homeowner class here are Caterpillar engineers and OSF or Methodist Medical staff who evaluate contractors the way they'd evaluate any vendor: systematically and honestly. To win their business online you need three things working together: a site that converts the scrutiny into a call, SEO that ranks you for what people search year-round, and local SEO that puts you in the Map Pack for the communities you serve — including before spring tornado season and Illinois River flooding drive the surge. Here's how we help Peoria contractors do exactly that.",
  aioQuestion: 'How do Peoria contractors get more leads online?',
  aioAnswer:
    "Peoria contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack community by community. Because Peoria buyers are practical and research-minded — many are Caterpillar or healthcare professionals who do real homework — the contractors who look credible, target specific neighborhoods, and rank before storm and flood season capture the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Peoria searches \"near me.\" The single highest-return move for most local contractors — done tight, neighborhood by neighborhood, and ready before storm season.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search, build an asset you own instead of renting traffic from ads, and measure it in leads — including the seasonal spikes that define a Peoria contractor's year.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs — and to hold up under scrutiny from CAT engineers and healthcare professionals who know what quality looks like.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, migrate it carefully so you keep every bit of ranking you've earned, and make it credible to the professional buyers who define this market.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Peoria?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads — particularly important in a market full of professional buyers who research carefully before calling." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors — so we understand spring tornado damage, Illinois River flooding, winter heating emergencies, and the OSF and Methodist Medical area." },
    { q: 'Why does the Peoria market need a different approach?', a: "Peoria is famous as a proxy for middle-market America — practical, value-focused buyers who are skeptical of hype and do their homework. A large share of the professional homeowner class works at Caterpillar or in healthcare, and they evaluate contractors carefully. Generic national templates don't cut it here; you need genuine local credibility and the right seasonal positioning." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Peoria areas do you serve?', a: "Peoria and the surrounding metro — East Peoria, Pekin, Dunlap, Morton, Washington, Canton, Galesburg, Chillicothe, Peoria Heights, Moss-Bradley, Richwoods, Northwoods, Bartonville, Metamora, and the communities in between." },
    { q: 'Where should I start?', a: "Start with a free Peoria audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest — including how to position for storm season and winter demand. No pitch deck, just a plan." },
  ],
};
