// Phoenix metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (market, areas, founder, why, proof) are defined once
// and reused across that city's service pages and hub — they describe the same
// city, so sharing is correct and DRY. Service-specific blocks are per entry.
// PRICING is placeholder, aligned to market range; confirm with the founder.

// ===========================================================================
// PHOENIX — shared city blocks (also used by the /phoenix/ hub object below)
// ===========================================================================
const MARKET = {
  heading: 'Why the Phoenix Valley is a fast, hot, two-language market',
  body:
    "The Phoenix metro is home to roughly 4.8 million people, and it keeps adding more every year — it's been one of the fastest-growing big metros in the country for a decade. That growth packs the Valley with contractors fighting for the same calls, which makes the Map Pack a real brawl. Two things set Phoenix apart. First, the heat. Highs sit above 100 degrees from June into September, and the Valley runs 100-plus days over 100 every year, so air conditioning isn't a luxury here, it's survival. That makes HVAC, electrical, and emergency demand close to year-round. Second, the monsoon. From mid-June through September, haboobs and dust storms roll in, clogging condensers, killing filters, and spiking voltage that fries compressors. About 42% of the metro is Hispanic, so a big slice of those urgent searches happen in Spanish — and almost nobody ranks for them.",
  pullQuote: 'In Phoenix the AC never really rests, and neither should your phone.',
  donut: {
    title: 'How Phoenix searches',
    value: 42,
    centerLabel: 'Hispanic',
    legend: [
      { label: 'Hispanic', pct: 42, kind: 'teal' },
      { label: 'Everyone else', pct: 58, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Summer heat + monsoon (May–Sep)',
  seasonalDemand: [
    { m: 'J', v: 40 }, { m: 'F', v: 42 }, { m: 'M', v: 48 }, { m: 'A', v: 58 },
    { m: 'M', v: 74, peak: true }, { m: 'J', v: 90, peak: true }, { m: 'J', v: 98, peak: true },
    { m: 'A', v: 95, peak: true }, { m: 'S', v: 82, peak: true }, { m: 'O', v: 60 },
    { m: 'N', v: 46 }, { m: 'D', v: 44 },
  ],
  stats: [
    { value: '4.8M+', label: 'people across the Phoenix metro' },
    { value: '~42%', label: 'of the metro is Hispanic — a search market most agencies skip', accent: true },
    { value: '100+', label: 'days a year over 100°F, when HVAC demand peaks' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks' },
  ],
  neighborhoods: [
    'Arcadia', 'Downtown', 'Roosevelt Row', 'Ahwatukee', 'Biltmore',
    'Camelback East', 'Maryvale', 'Paradise Valley Village', 'Desert Ridge', 'Sunnyslope',
    'Encanto', 'Laveen', 'North Mountain', 'Deer Valley', 'Estrella',
  ],
};

const AREAS = [
  'Phoenix', 'Scottsdale', 'Mesa', 'Tempe', 'Chandler', 'Gilbert',
  'Glendale', 'Peoria', 'Surprise', 'Goodyear', 'Avondale', 'Buckeye',
  'Queen Creek', 'Paradise Valley',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We get heat-wave AC calls, monsoon damage, and emergency work, so everything we build is shaped around how your customers really search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners three competitors also bought.",
  },
  {
    title: 'We actually speak Phoenix',
    body: "Year-round heat demand, monsoon-season spikes, Spanish-language search, real neighborhood targeting from Arcadia to Maryvale. The stuff a national agency can't do by swapping a city name into a template.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Phoenix HVAC or roofing contractor gets around 1,800 local \"near me\" impressions a month, and far more during a July heat wave or a monsoon weekend. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a booked-out crew. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Phoenix', state: 'Arizona', stateAbbr: 'AZ', metro: 'Phoenix Metro',
  heroProof: ['Built for the trades', 'English + Spanish', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const phoenixLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'phoenix', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Phoenix Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Search your service in Phoenix and three businesses show up on the map. We get you into those three, in English and Spanish. Honest pricing, no lock-in, free audit.',
    eyebrow: 'Local SEO · Phoenix Metro',
    h1: 'When Phoenix searches for what you do, be the first name they find',
    h2Exact: 'Phoenix Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"AC repair near me\" at 5pm in July. Everyone below them basically doesn't exist. We get you into that top three, in English and in Spanish, so the call lands with you instead of whoever ranked first.",
    primaryCta: 'Get my free Phoenix audit',
    intro:
      "Phoenix local SEO is a different animal because of the heat. When the AC quits during a 115-degree afternoon, a homeowner in Arcadia or Maryvale grabs their phone, taps one of the three businesses Google pins to the map, and never scrolls. They might type \"reparación de aire\" instead of \"AC repair,\" since about 42% of the metro is Hispanic. Becoming one of those three businesses — in both languages — is the whole game. Here's how you do it.",
    aioQuestion: 'How do Phoenix businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile that's optimized for the services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady drip of real reviews; and local content that includes Spanish, since about 42% of the Phoenix metro is Hispanic. Because heat and monsoon demand spike fast, the winners look established, answer first, and show up in both languages.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks. If you're not one of them, it almost doesn't matter how good your work is — most people never see your name. Getting into that top three is usually the single highest-return move a Phoenix business can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Phoenix homeowner to four contractors, then bill each of you to fight over them. It's a treadmill. Local SEO builds the opposite: a lead finds you, calls you, and nobody else got it. Over time you stop renting and start owning." },
      { title: "You go quiet right when demand peaks", body: "When a July heat wave hits or a monsoon storm rolls through, \"near me\" searches for AC, roofing, and electrical jump overnight. If you're sitting on page two, those urgent, high-intent calls go straight to whoever's already in the top three. The contractors who own the Map Pack catch that wave. Everyone else watches it pass." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Phoenix searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes people pick up the phone." },
      { name: 'Neighborhood pages', desc: "Real pages for Arcadia, Ahwatukee, Desert Ridge, Maryvale and the rest, so you rank for the neighborhood someone's actually searching, not just \"Phoenix.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Phoenix sources Google trusts — local press, associations, partners. This is what separates page one from page two here." },
      { name: 'Spanish-language SEO', desc: "This is the one almost nobody does. Spanish keywords, Spanish profile content, Spanish pages — built to win the 42% of the metro your competitors ignore.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your service areas, in both languages, and pin down which competitors are beating you and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now over starting later." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages, in English and Spanish where it pays off, plus the on-page work to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Valley neighborhoods.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want the whole Valley in both languages.', features: ['Everything in Local Growth', 'Local link building', 'Spanish-language SEO', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Phoenix?', a: "Most Phoenix engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after and whether you want Spanish-language work. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The competitive Phoenix keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days in a market this crowded is selling you something." },
      { q: 'What makes Phoenix local SEO different from regular SEO?', a: "Three things. It's heat-driven, so HVAC, electrical, and roofing demand peaks hard in summer and your presence has to be ready when the calls hit. It's monsoon-prone, so storms create overnight spikes in emergency searches. And about 42% of the metro is Hispanic, so a big share of high-intent searches happen in Spanish that most agencies never touch." },
      { q: 'Does the summer heat really change how I should rank?', a: "Yes. From May through September, Phoenix runs 100-plus days over 100 degrees, and AC, electrical, and roofing searches surge when systems fail in the heat. If you're not already in the top three when a homeowner's AC dies at 4pm, that call goes to whoever is. We build your Map Pack presence so you're ready before the peak, not scrambling during it." },
      { q: 'Do you really do Spanish-language SEO?', a: "Yes, and it's one of the biggest edges we give you. About 42% of the Phoenix metro is Hispanic, but your competitors optimize in English only. We target Spanish keywords and build Spanish profile content and pages, so you catch searches nobody else is even bidding on." },
      { q: 'Which areas do you cover?', a: "All of the Phoenix Valley and the cities around it — Scottsdale, Mesa, Tempe, Chandler, Gilbert, Glendale, Peoria, Surprise, Goodyear, and more, plus Phoenix neighborhoods like Arcadia, Ahwatukee, and Desert Ridge. We build genuine neighborhood pages instead of one generic Phoenix page, because that's what actually ranks." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand emergency calls, heat-driven demand, monsoon damage, and insurance jobs, and we build your local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because the work is coming to you directly." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'phoenix', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Phoenix SEO Company | Rank Higher, Get Leads | OnwardCraft',
    metaDescription:
      'Phoenix SEO that ranks contractors on Google and brings in leads you own — in English and Spanish. Revenue-tied reporting, no lock-in contracts. Free Phoenix SEO audit.',
    eyebrow: 'SEO Services · Phoenix Metro',
    h1: 'Get your Phoenix business to the top of Google and keep it there',
    h2Exact: 'Phoenix SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Phoenix customers search, in both languages, and the leads keep coming through every heat wave and monsoon. We build that ranking and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free Phoenix SEO audit',
    intro:
      "Phoenix SEO services come down to one question: when someone searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords — in English and the Spanish that 42% of this Hispanic metro searches in — and we measure it in leads, not vanity traffic. In a market where demand spikes with the heat, owning those rankings means you're booked when everyone's calling.",
    aioQuestion: 'How do Phoenix businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content, and earning links from trusted Phoenix sources. In a fast-growing, heat-driven market where about 42% of the metro is Hispanic, ranking in Spanish and keeping the site fast on mobile are two of the fastest ways to pull ahead of competitors who only optimize in English.",
    problemHeading: "Three reasons your Phoenix site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. If you're not in the top handful of results for what you sell, your site is basically invisible — no matter how good it looks or how busy you are in peak season." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost." },
      { title: "You're ignoring a huge slice of Phoenix's searches", body: "About 42% of the metro is Hispanic, and plenty of those urgent searches happen in Spanish. If your SEO is English-only, you're handing those searches straight to a competitor. We rank you for both." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your Phoenix customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real Phoenix and industry sources. In a competitive, fast-growing market, links are often what separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Spanish-language SEO', desc: "We rank you in Spanish too, capturing the 42% of the metro searching in a language your competitors ignore.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Phoenix leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, in both languages where it pays." },
      { name: 'Build authority', desc: "Links and citations from trusted Phoenix and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Phoenix SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and Valley cities.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Phoenix search in both languages.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Spanish-language SEO', 'eCommerce / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Phoenix?', a: "Most Phoenix SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and whether you need Spanish-language and content work. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Phoenix?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on low-competition terms and slower on the most competitive Phoenix keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most contractors do best running SEO as the long-term engine and ads for short-term spikes like a heat wave." },
      { q: 'Should my SEO plan account for the summer heat?', a: "It should. Phoenix runs 100-plus days a year over 100 degrees, and searches for AC, electrical, and roofing surge from May through September when systems fail. Good SEO gets you ranking well before that peak so you're catching the urgent calls instead of watching competitors take them. We plan content and rankings around your real demand curve." },
      { q: 'Do you do Spanish-language SEO?', a: "Yes. About 42% of the Phoenix metro is Hispanic, and most agencies optimize in English only. We rank you in both languages so you capture searches your competitors don't even target." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add Spanish-language and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which areas around Phoenix do you cover?', a: "All of the Valley and the surrounding cities — Scottsdale, Mesa, Tempe, Chandler, Gilbert, Glendale, Peoria, Surprise, Goodyear and more — with genuine local pages rather than one generic Phoenix page." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'phoenix', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Phoenix Web Design Company | Sites That Convert | OnwardCraft',
    metaDescription:
      'Phoenix web design that turns visitors into booked jobs — fast, mobile-first, bilingual sites built for contractors. Transparent pricing, you own it all. Free quote.',
    eyebrow: 'Web Design · Phoenix Metro',
    h1: 'Phoenix web design that turns visitors into booked jobs',
    h2Exact: 'Phoenix Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Phoenix contractors fast, mobile-first sites — in English and Spanish — engineered to turn the AC-emergency visitor into a booked job, not just a compliment.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Phoenix contractor websites lose leads quietly: slow on a phone, buried call button, English-only in a metro that's 42% Hispanic. When a homeowner's AC dies in July, they're not reading your About page — they're tapping the first site that loads fast and shows a number. Web design done right fixes all of that. We build Phoenix sites that load fast, look like the professional you are, and turn Arcadia-to-Avondale visitors into booked work.",
    aioQuestion: 'What makes a good contractor website in Phoenix?',
    aioAnswer:
      "A good Phoenix contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and works in both English and Spanish. Because most Phoenix searches happen on mobile, often during an urgent heat-driven emergency, mobile speed and an obvious way to call are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next guy. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Phoenix visitors are on mobile, often in the middle of a heat emergency, and they bounce if your site takes more than a few seconds to load. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking." },
      { title: "It only speaks English", body: "About 42% of the Phoenix metro is Hispanic. An English-only site quietly turns away a big slice of your potential customers. We build bilingual so you keep them." },
    ],
    servicesHeading: "What's in an OnwardCraft Phoenix website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your service area, and the jobs you actually want." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your Phoenix traffic is. Fast, thumb-friendly, easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that speak to an anxious homeowner whose AC just quit and book the job, not filler that reads like everyone else." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Bilingual build', desc: "English and Spanish versions so you capture the 42% of the metro that's Hispanic — a thing almost no competitor offers.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your service area, your best jobs, and your competitors, then map the site around booking more of the work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, in English and Spanish where it pays off." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting." },
    ],
    pricing: {
      heading: 'Transparent Phoenix web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Bilingual-ready'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Full bilingual build', 'Advanced SEO + schema', 'Integrations & booking', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Phoenix?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count, whether you need a full bilingual version, and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom or bilingual build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Do you build Spanish-language websites?', a: "Yes, and in Phoenix it's one of the smartest things you can do. About 42% of the metro is Hispanic, so a bilingual site captures customers an English-only competitor turns away." },
      { q: 'Will my site help me catch the summer rush?', a: "That's exactly what we build for. When Phoenix hits 100-plus days over 100 degrees and AC, roofing, and electrical calls surge, your site needs to load fast and make calling obvious in one tap. We design mobile-first with a call button and clear offer above the fold so you convert the urgent traffic instead of losing it to a faster site." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Phoenix terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your Phoenix traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'phoenix', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Phoenix Website Redesign | More Leads, No Loss | OnwardCraft',
    metaDescription:
      'Redesign your Phoenix website without losing rankings. Faster, mobile-first, bilingual rebuilds that convert more visitors into booked jobs. Transparent pricing, free audit.',
    eyebrow: 'Website Redesign · Phoenix Metro',
    h1: 'Redesign your Phoenix website without losing your rankings',
    h2Exact: 'Phoenix Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, English-only. We redesign Phoenix contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight — right before summer, when Phoenix demand peaks. We do neither. We redesign Phoenix contractor sites for speed and conversions, build them bilingual for the 42% of the metro that's Hispanic, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Phoenix site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "For a high-ticket job like an AC replacement or a re-roof, homeowners judge you by your site in seconds. An old, cluttered design quietly sends them to a competitor who looks more established — even when your work is better." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your Phoenix visitors before they ever see your offer — and most of them are searching mid-emergency in the heat. A redesign built mobile-first wins them back." },
      { title: "It doesn't convert — or speak Spanish", body: "Traffic that doesn't turn into calls is wasted, and an English-only site ignores the 42% of the metro that's Hispanic. We rebuild for conversions and for both languages." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your Phoenix traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the price of your jobs." },
      { name: 'Bilingual rebuild', desc: "English and Spanish versions so the new site captures the 42% of the metro that's Hispanic.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you leads and rankings, then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and bilingual, and prepare every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and improve, not drop." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Phoenix redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Bilingual-ready'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Full bilingual version', 'Advanced SEO migration', 'Integrations & booking', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Phoenix?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size, whether you need a full bilingual version, and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger or bilingual rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'Should I redesign before or after the summer peak?', a: "Ideally we finish before May, so your faster, higher-converting site is live and stable when Phoenix hits its 100-plus days over 100 and AC, roofing, and electrical demand surges. If you're already in peak season, we can still migrate carefully without risking the rankings you rely on for those urgent calls. The free audit lays out the safest timing for your situation." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is hard to update, isn't bringing in leads, or only speaks English in a metro that's 42% Hispanic, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Can you make my redesigned site bilingual?', a: "Absolutely, and in Phoenix we recommend it. A bilingual rebuild captures the 42% of the metro that's Hispanic, many of whom search in Spanish." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings — and matters most when homeowners are searching mid-emergency in the heat." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
    ],
  },
];

// ===========================================================================
// PHOENIX — city hub object, rendered at /phoenix/
// ===========================================================================
export const phoenixCity = {
  citySlug: 'phoenix', city: 'Phoenix', state: 'Arizona', stateAbbr: 'AZ', metro: 'Phoenix Metro',

  titleTag: 'Phoenix Marketing for Contractors | Web, SEO, Leads | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Phoenix contractors — in English and Spanish. Get found, get booked, and own your leads instead of renting them. Free Phoenix audit.',

  eyebrow: 'Phoenix · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Phoenix contractors found and booked',
  h2Exact: 'Phoenix Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Phoenix's fast-growing, heat-driven market. One team to get you ranking, converting, and off the rented-lead treadmill — in English and Spanish.",
  heroProof: ['Built for the trades', 'English + Spanish', 'No lock-in contracts'],
  primaryCta: 'Get my free Phoenix audit',

  intro:
    "If you run a contracting business in Phoenix, you're fighting for attention in one of the fastest-growing metros in the country, where the heat keeps HVAC, electrical, and roofing demand close to year-round. Winning here takes three things working together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack — all in English and Spanish. Here's how we help Phoenix contractors do exactly that.",
  aioQuestion: 'How do Phoenix contractors get more leads online?',
  aioAnswer:
    "Phoenix contractors get more leads by combining a fast, mobile-first, bilingual website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack. Because about 42% of the metro is Hispanic and demand spikes with summer heat and monsoon storms, the contractors who show up in both languages and look established win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  // The 4 services this city offers — cards link to /[citySlug]/[serviceSlug]/
  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Phoenix searches \"near me\" — in English and Spanish. The single highest-return move for most local businesses.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search, build an asset you own instead of renting traffic from ads, and measure it in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first, bilingual websites engineered to turn visitors into booked jobs — not brochures that just sit there and look nice.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it carefully so you keep every bit of ranking you've already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Phoenix?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads. Everything is available in English and Spanish." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors — so we understand emergency calls, heat-driven demand, and monsoon damage." },
    { q: 'Do you offer services in Spanish?', a: "Yes, and in Phoenix it's a major advantage. About 42% of the metro is Hispanic, but most agencies optimize in English only. We build and rank you in both languages." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Phoenix areas do you serve?', a: "All of the Valley and the surrounding cities — Scottsdale, Mesa, Tempe, Chandler, Gilbert, Glendale, Peoria, Surprise, Goodyear and more, plus Phoenix neighborhoods like Arcadia, Ahwatukee, and Desert Ridge." },
    { q: 'Where should I start?', a: "Start with a free Phoenix audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};
