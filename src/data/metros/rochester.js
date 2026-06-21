// ROCHESTER — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Rochester's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// ROCHESTER — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Rochester is more urgent than most contractors realize',
  body:
    "Rochester is a city of engineers, inventors, and educated homeowners — people who researched Kodak film tolerances and Xerox imaging before they ever picked a contractor. They read reviews, compare quotes, and search carefully before calling anyone. That means the contractor who shows up first and looks the most credible online wins the job, not necessarily the cheapest one. Layered on top of that is Lake Ontario's brutal gift: 99 inches of snow a year on average, with lake-effect storms that can dump two feet overnight. Ice dam emergencies, heating failures, and roof stress calls don't wait for business hours and they don't come from someone browsing calmly — they come from a panicked homeowner who calls the first name they can find. And Rochester's extraordinary stock of Victorian, Queen Anne, and Craftsman homes from 1880 to 1930 means specialists in historic restoration, masonry, and period carpentry are in continuous demand. The contractors already ranking catch all three streams.",
  pullQuote: 'When a lake-effect storm hits Rochester, the contractors already in the Map Pack take every emergency call.',
  donut: {
    title: "Rochester's lake-effect snowfall",
    value: 99,
    centerLabel: 'annual snowfall (in)',
    legend: [
      { label: 'Snow', pct: 99, kind: 'teal' },
      { label: 'Other precip', pct: 0, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Lake-effect snow season (Nov–Apr), with a spring thaw surge (Mar–May)',
  seasonalDemand: [
    { m: 'J', v: 88, peak: true }, { m: 'F', v: 90, peak: true }, { m: 'M', v: 82, peak: true },
    { m: 'A', v: 70, peak: true }, { m: 'M', v: 58 }, { m: 'J', v: 50 },
    { m: 'J', v: 54 }, { m: 'A', v: 52 }, { m: 'S', v: 46 },
    { m: 'O', v: 62, peak: true }, { m: 'N', v: 86, peak: true }, { m: 'D', v: 92, peak: true },
  ],
  stats: [
    { value: '99"', label: 'average annual snowfall — one of the snowiest cities in the US' },
    { value: '~1M', label: 'people across the Rochester metro area', accent: true },
    { value: 'Nov–Apr', label: 'lake-effect snow season, when HVAC, roofing, and restoration demand spikes' },
    { value: 'Top 3', label: 'Map Pack spots that capture most of the emergency calls' },
  ],
  neighborhoods: [
    'Park Avenue', 'Corn Hill', 'South Wedge', 'Brighton', 'Pittsford',
    'Penfield', 'Fairport', 'Victor', 'Webster', 'Greece',
    'Irondequoit', 'Gates', 'Henrietta', 'Chili', 'East Rochester',
  ],
};

const AREAS = [
  'Rochester', 'Brighton', 'Pittsford', 'Penfield', 'Fairport',
  'Victor', 'Webster', 'Greece', 'Irondequoit', 'Gates',
  'Henrietta', 'Chili', 'East Rochester', 'Spencerport', 'Brockport',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. Rochester homeowners research carefully before they call; we make sure your name is the one they find and trust. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We understand ice-dam emergencies, lake-effect season, and historic renovation work, so everything we build is shaped around how your Rochester customers actually search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners three competitors also bought.",
  },
  {
    title: 'We actually speak Rochester',
    body: "Lake-effect snow emergencies, educated engineering-professional homeowners who research before they call, century-old Victorians in Corn Hill and Park Avenue that need specialists. The stuff a national agency can't do by swapping a city name into a template.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Rochester contractor gets around 1,200 local \"near me\" impressions a month. Moving from page-two invisibility into the top three is the difference between a quiet phone and a booked-out calendar — and when a lake-effect storm rolls in from Lake Ontario, that gap gets even wider. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Rochester', state: 'New York', stateAbbr: 'NY', metro: 'Rochester',
  heroProof: ['Built for the trades', 'Lake-effect ready', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const rochesterLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'rochester', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Rochester Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Search your service in Rochester and three businesses show up on the map. We get you into those three, so the call lands with you. Honest pricing, no lock-in, free audit.',
    eyebrow: 'Local SEO · Rochester NY',
    h1: 'When Rochester searches for what you do, be the first name they find',
    h2Exact: 'Rochester Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. We get you into that top three, so the call lands with you — and so you're ready when the next lake-effect storm has every phone in Rochester ringing at once.",
    primaryCta: 'Get my free Rochester audit',
    intro:
      "Rochester local SEO comes down to one thing: when a homeowner in Pittsford or Park Avenue searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Rochester homeowners are educated and research-driven — many work in optics, engineering, or tech — and they tap one of the top three results, check the reviews, and call. Getting into that top three and looking credible when they arrive is the whole game.",
    aioQuestion: 'How do Rochester businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Rochester neighborhoods. Rochester's educated homeowners read reviews carefully and trust businesses that look established, so reviews and a polished profile carry extra weight here. And with 99 inches of annual snowfall, ranking before November is how you catch the lake-effect emergency surge.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks — especially the emergency ones at 2 a.m. during a lake-effect storm. If you're not one of them, it almost doesn't matter how good your work is. Getting into that top three is usually the single highest-return move a Rochester business can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Rochester homeowner to four contractors, then bill each of you to fight over them. It's a treadmill. Local SEO builds the opposite: a lead finds you, calls you, and nobody else got it. Over time you stop renting and start owning the pipeline." },
      { title: "You're not ready when the lake-effect hits", body: "When Lake Ontario sends a storm that dumps two feet of snow overnight, Rochester homeowners search for roofers, HVAC techs, and restoration contractors immediately. The businesses already ranking take those calls — the ones scrambling to build a profile after the fact miss the whole rush. Ranking now is how you catch that wave." },
    ],
    servicesHeading: 'What it actually takes to rank you in Rochester',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Rochester searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. Rochester homeowners read them carefully — a strong review base both lifts your ranking and converts visitors into callers." },
      { name: 'Neighborhood pages', desc: "Real pages for Pittsford, Brighton, Penfield, Fairport, Webster, and the rest, so you rank for the neighborhood someone's actually searching — not just \"Rochester.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Rochester sources Google trusts — local press, associations, partners. This is what separates page one from page two here." },
      { name: 'Lake-effect season readiness', desc: "We get your profile, pages, and reviews ranking before November so you catch the emergency demand when the first big storm hits — not scrambling after the fact.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. Rochester's engineering-savvy homeowners lead adoption — we structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your Rochester service areas and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now over starting later — especially before snow season." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Monroe County and the suburbs, plus the on-page work to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Rochester suburbs.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across Greater Rochester.', features: ['Everything in Local Growth', 'Local link building', 'Lake-effect season demand targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Rochester?', a: "Most Rochester engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The competitive Rochester keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days is selling you something — and you want to be ranking before the November lake-effect season starts, not after." },
      { q: 'What makes Rochester local SEO different?', a: "Two things. Rochester homeowners are unusually research-driven — many work in engineering, optics, and tech — so reviews and a polished, credible profile carry more weight here than in most markets. And the lake-effect snow from Lake Ontario means emergency calls for HVAC, roofing, and restoration spike hard from November through April. Your ranking has to be in place before the season, not after." },
      { q: 'How does local SEO help me during lake-effect snow season?', a: "When a storm dumps two feet of snow on Rochester overnight, homeowners search for contractors immediately. The businesses already in the Map Pack take those emergency calls. We get you ranking and reviewed before November so you catch that demand instead of competing for scraps after everyone else is already booked." },
      { q: 'Which areas do you cover?', a: "All of Greater Rochester — Park Avenue, Corn Hill, South Wedge, Brighton, Pittsford, Penfield, Fairport, Victor, Webster, Greece, Irondequoit, and more. We build genuine neighborhood pages instead of one generic Rochester page, because that's what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand emergency calls, lake-effect demand, and the specialist work that Rochester's old housing stock demands." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search — and Rochester's tech-savvy homeowners are early adopters. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because the work is coming to you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your Rochester service areas, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'rochester', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Rochester SEO Company | Rank Higher, Get More Leads | OnwardCraft',
    metaDescription:
      'Rochester SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in contracts, built for lake-effect season demand. Free Rochester SEO audit.',
    eyebrow: 'SEO Services · Rochester NY',
    h1: 'Get your Rochester business to the top of Google and keep it there',
    h2Exact: 'Rochester SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Rochester customers search and the leads keep coming. We build that ranking and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free Rochester SEO audit',
    intro:
      "Rochester SEO comes down to one question: when someone searches what you do, are you on page one or page two? Page two might as well be page fifty — especially in a city where homeowners from Pittsford to Corn Hill research contractors carefully before picking up the phone. We get contractors ranking for the money keywords in a market driven by educated buyers and unpredictable lake-effect winters — and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Rochester businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content, and earning links from trusted Rochester sources. In a market where homeowners research carefully — many work in engineering, optics, or tech — looking credible and established matters as much as ranking. And ranking for lake-effect emergency terms before November is one of the quickest ways to pull ahead of competitors who aren't thinking seasonally.",
    problemHeading: "Three reasons your Rochester site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google. If you're not in the top handful of results for what you sell, your site is basically invisible — no matter how good it looks or how many years you've been in business." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost." },
      { title: "You're not ranking for the demand that matters", body: "Rochester's contractor demand swings hard with the seasons. HVAC and roofing searches spike every November when lake-effect snow season starts. The contractors who rank for those terms before the season catch the surge. If your SEO ignores seasonal and weather-driven searches, you're leaving your busiest months on the table." },
    ],
    servicesHeading: 'The SEO work that actually moves Rochester rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your Rochester customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real Rochester and industry sources. In a credibility-conscious market, links are often what separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Lake-effect & seasonal SEO', desc: "We rank you for the snow-driven and seasonal searches that drive Rochester's busiest months, so you're visible before demand spikes, not after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you — especially important in a city where tech-savvy homeowners are early AI-search adopters.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Rochester leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the seasonal and lake-effect-driven terms that matter here." },
      { name: 'Build authority', desc: "Links and citations from trusted Rochester and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Rochester SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and Rochester suburbs.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Rochester-area search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Lake-effect & seasonal SEO', 'Multi-location support', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Rochester?', a: "Most Rochester SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Rochester?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6 — faster on low-competition terms, slower on the most competitive Rochester keywords. SEO compounds, so the gains keep building the longer you run it. Starting before October means you're in place before lake-effect season." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most contractors do best running SEO as the long-term engine and ads for short-term gaps." },
      { q: 'Should my Rochester SEO target lake-effect snow season?', a: "Yes. When lake-effect storms hit from Lake Ontario, searches for HVAC, roofing, and restoration spike overnight, and ranking takes months to build — so you have to be in place before the season, not chasing it after. We optimize for those seasonal and weather-driven terms ahead of time so your busiest months land on you." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add lake-effect-and-seasonal and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. Rochester's engineering-and-tech-savvy homeowners are early AI-search adopters. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which areas around Rochester do you cover?', a: "All of Greater Rochester and the surrounding suburbs — Pittsford, Brighton, Penfield, Fairport, Victor, Webster, Greece, Irondequoit, Henrietta, and more — with genuine local pages rather than one generic Rochester page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'rochester', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Rochester Web Design Company | Sites That Convert | OnwardCraft',
    metaDescription:
      'Rochester web design that turns visitors into booked jobs — fast, mobile-first sites built for contractors and lake-effect season demand. Transparent pricing, you own it all. Free quote.',
    eyebrow: 'Web Design · Rochester NY',
    h1: 'Rochester web design that turns visitors into booked jobs',
    h2Exact: 'Rochester Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Rochester contractors fast, mobile-first sites engineered to turn careful, research-minded homeowners into booked work — and to hold up when lake-effect season floods your phone.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Rochester contractor websites lose leads quietly: slow on a phone, buried call button, thin on the trust signals that educated homeowners look for. Rochester is home to engineers from Kodak, Xerox, Paychex, and the University of Rochester — people who compare contractors carefully. Web design done right fixes all of that. We build sites that load fast, look like the professional you are, and turn Park-Avenue-to-Pittsford visitors into booked jobs.",
    aioQuestion: 'What makes a good contractor website in Rochester?',
    aioAnswer:
      "A good Rochester contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and speaks directly to the concerns of educated homeowners who research carefully. Because Rochester's winters are severe — 99 inches of average annual snowfall — a site also needs to handle traffic surges during lake-effect emergencies without slowing down or burying the call to action.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. Rochester homeowners research before they call — if your site doesn't quickly answer their questions and make it easy to reach you, they move to the next result. We design every page around one job: turning a careful visitor into a booked lead." },
      { title: "It doesn't build enough trust", body: "Rochester's homeowner base skews educated and analytical — engineers, researchers, professionals from RIT and the University of Rochester. They look for reviews, past work, credentials, and a polished presentation before calling. A site that looks amateurish or thin quietly costs you jobs to competitors who look more established." },
      { title: "It can't handle a lake-effect surge", body: "When a major lake-effect storm hits, Rochester homeowners search for contractors immediately and call the first business they find. Slow sites lose those calls at exactly the moment they're most valuable. We build sites that stay fast and keep the call button front and center under load." },
    ],
    servicesHeading: "What's in an OnwardCraft Rochester website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your service area, and the jobs you actually want — built to impress the research-minded Rochester buyer." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where your Rochester traffic arrives — especially during emergencies." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that speak to the concerns of careful, educated homeowners and book the job — not filler text that reads like everyone else." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages for Rochester suburbs." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Lake-effect ready', desc: "Built to stay fast and keep the call button front and center when winter storm traffic spikes — the moment that turns a visitor into your most valuable job.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI — especially important for Rochester's tech-forward homeowners.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your service area, your best jobs, and your competitors, then map the site around booking more of the work you want in Rochester." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting." },
    ],
    pricing: {
      heading: 'Transparent Rochester web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Lake-effect ready'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Rochester?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site handle a lake-effect storm surge?', a: "Yes, and in Rochester that matters more than most places. When a big lake-effect storm hits, contractor sites get flooded with emergency searches, and the slow ones lose calls right when demand peaks. We build fast and keep the call button obvious, so your site converts under load instead of buckling." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Rochester terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where your Rochester visitors arrive — especially during emergencies when someone needs a contractor fast." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Rochester site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'rochester', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Rochester Website Redesign | More Leads, No Traffic Loss | OnwardCraft',
    metaDescription:
      'Redesign your Rochester website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs and hold up in lake-effect season. Free audit.',
    eyebrow: 'Website Redesign · Rochester NY',
    h1: 'Redesign your Rochester website without losing your rankings',
    h2Exact: 'Rochester Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, thin on the trust signals educated Rochester homeowners expect. We redesign contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Rochester contractor sites for speed and conversions, build them to handle lake-effect season traffic, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Rochester site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "Rochester homeowners — many of them engineers, researchers, and professionals — judge you by your site in seconds. An old, cluttered design quietly sends them to a competitor who looks more established and credible, even when your work is better." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your Rochester visitors before they ever see your offer. A redesign built mobile-first wins them back and keeps them on the page long enough to call." },
      { title: "It can't keep up when demand surges", body: "Traffic that doesn't turn into calls is wasted — and an old site that gets slow during a lake-effect storm surge loses leads at the exact moment they're worth the most. We rebuild for conversions and for the days your phone should be ringing constantly." },
    ],
    servicesHeading: "What's in an OnwardCraft Rochester redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used — designed to convert careful, research-minded Rochester homeowners." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where most of your Rochester traffic arrives — especially during weather emergencies." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and earns the confidence of discerning Rochester buyers." },
      { name: 'Lake-effect ready rebuild', desc: "Rebuilt to stay fast and keep converting when winter storm traffic spikes, so the new site captures your most urgent calls instead of choking on them.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI — important in a tech-forward Rochester market.", featured: true },
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
      heading: 'Transparent Rochester redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Lake-effect ready'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Rochester?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is hard to update, isn't bringing in leads, or bogs down when lake-effect storm traffic surges, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the new site handle lake-effect storm traffic?', a: "Yes, and in Rochester that's a real consideration. When a storm hits, contractor sites take a surge of emergency searches, and the slow ones lose leads at the worst possible moment. We rebuild for speed and keep the call to action obvious so the site converts when demand peaks." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const rochesterCity = {
  citySlug: 'rochester', city: 'Rochester', state: 'New York', stateAbbr: 'NY', metro: 'Rochester',

  titleTag: 'Rochester Marketing for Contractors | Web, SEO & Leads | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Rochester contractors. Get found, get booked, and own your leads instead of renting them — built for lake-effect season demand. Free Rochester audit.',

  eyebrow: 'Rochester · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Rochester contractors found and booked',
  h2Exact: 'Rochester Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Rochester's research-driven homeowners and brutal lake-effect winters. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Lake-effect ready', 'No lock-in contracts'],
  primaryCta: 'Get my free Rochester audit',

  intro:
    "If you run a contracting business in Rochester, you're dealing with two things most markets don't stack together: homeowners who research contractors carefully — engineers, researchers, and professionals from Kodak, Xerox, RIT, and the University of Rochester — and lake-effect winters that send 99 inches of snow a year and create genuine emergencies from November through April. Winning here takes three things working together: a site that builds trust and converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack before the first big storm. Here's how we help Rochester contractors do exactly that.",
  aioQuestion: 'How do Rochester contractors get more leads online?',
  aioAnswer:
    "Rochester contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack. Because Rochester homeowners are unusually research-driven and lake-effect winters create real contractor emergencies from November through April, the contractors who look credible and are already ranking before the season catch the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Rochester searches \"near me.\" The single highest-return move for most local contractors — and how you catch lake-effect emergency demand before your competitors do.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your Rochester customers actually search, build an asset you own instead of renting traffic from ads, and measure it in leads — not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn careful, research-minded Rochester homeowners into booked jobs — and to stay fast when lake-effect season floods your phone.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it carefully so you keep every bit of ranking you've already earned going into snow season.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Rochester?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads — and are ready before lake-effect season hits." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors — so we understand emergency calls, lake-effect snow demand, and the specialist renovation work Rochester's old housing stock requires." },
    { q: 'Why does lake-effect snow season matter for my marketing?', a: "When lake-effect storms hit Rochester from Lake Ontario, demand for HVAC, roofing, and restoration spikes hard and fast, and the backlog can run for months. Ranking takes time to build, so the contractors who are already visible before November take that work. We get you in place ahead of season." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Rochester areas do you serve?', a: "All of Greater Rochester and the surrounding suburbs — Park Avenue, Corn Hill, South Wedge, Brighton, Pittsford, Penfield, Fairport, Victor, Webster, Greece, Irondequoit, and more." },
    { q: 'Where should I start?', a: "Start with a free Rochester audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest — before lake-effect season if timing allows. No pitch deck, just a plan." },
  ],
};
