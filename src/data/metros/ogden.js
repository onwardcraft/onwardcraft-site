// OGDEN — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Ogden's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// OGDEN — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Ogden is a moving target',
  body:
    "Ogden was built as the great railroad junction of the West — where the Union Pacific and Central Pacific lines met near Promontory and freight moved east and west through the city for a century. Today the engine is Hill Air Force Base, one of the largest USAF installations in the country and home to the Ogden Air Logistics Complex. It's the region's biggest employer, and it churns: thousands of military and civilian defense families PCS in and out every year, and the first thing a newly-arrived family does is search for a contractor they've never heard of. On top of that, the Ogden-Clearfield metro is booming — remote workers and outdoor-lifestyle transplants are pouring in for world-class skiing at Snowbasin and Powder Mountain and prices that undercut Salt Lake and Park City. More newcomers means more work, but it also means more contractors fighting for the same three spots on the map. And nearly everyone searches on a phone with \"near me\" attached, then taps one of the first results without scrolling.",
  pullQuote: 'A Hill Air Force Base family that just PCS\'d into Layton has no contractor yet — they search, and whoever ranks gets the call.',
  donut: {
    title: 'How Ogden searches',
    value: 30,
    centerLabel: 'Hispanic',
    legend: [
      { label: 'Hispanic', pct: 30, kind: 'teal' },
      { label: 'Other', pct: 70, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Wasatch winter (Nov–Mar): snow, ice dams, deep cold',
  seasonalDemand: [
    { m: 'J', v: 92, peak: true }, { m: 'F', v: 88, peak: true }, { m: 'M', v: 72 }, { m: 'A', v: 58 },
    { m: 'M', v: 50 }, { m: 'J', v: 60 }, { m: 'J', v: 72 },
    { m: 'A', v: 70 }, { m: 'S', v: 54 }, { m: 'O', v: 64, peak: true },
    { m: 'N', v: 80, peak: true }, { m: 'D', v: 90, peak: true },
  ],
  stats: [
    { value: '~700K', label: 'people across the Ogden-Clearfield metro' },
    { value: '~30%', label: 'of Ogden city is Hispanic — a real Spanish-language market', accent: true },
    { value: 'Nov–Mar', label: 'Wasatch winter, when snow and ice demand spikes' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks' },
  ],
  neighborhoods: [
    'Historic 25th Street', 'East Bench', 'Ogden Valley', 'Eden', 'Huntsville',
    'Layton', 'Clearfield', 'Roy', 'Riverdale', 'North Ogden',
    'Pleasant View', 'South Ogden', 'Washington Terrace', 'Farr West', 'Plain City',
  ],
};

const AREAS = [
  'Ogden', 'Layton', 'Clearfield', 'Roy', 'Riverdale', 'North Ogden',
  'South Ogden', 'Pleasant View', 'Washington Terrace', 'Huntsville', 'Eden',
  'Farmington', 'Kaysville', 'Syracuse', 'Plain City',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We understand Wasatch winters, ice dams, emergency calls, and the seismic-retrofit work this region needs, so everything we build is shaped around how your customers really search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners three competitors also bought.",
  },
  {
    title: 'We actually speak Ogden',
    body: "Hill Air Force Base families PCSing in every month, a metro growing on cheap-vs-Park-City appeal, real neighborhood targeting from Historic 25th Street to Ogden Valley, and a Spanish-speaking market a third the size of the city. The stuff a national agency can't do by swapping a city name into a template.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say an Ogden contractor gets around 1,500 local \"near me\" impressions a month. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a booked-out calendar — and when the first big snow hits or a PCS wave lands at Hill, that gap gets even wider. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Ogden', state: 'Utah', stateAbbr: 'UT', metro: 'Ogden-Clearfield',
  heroProof: ['Built for the trades', 'Wasatch-winter ready', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const ogdenLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'ogden', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Ogden Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Search your service in Ogden and three businesses show up on the map. We get you into those three, so the call lands with you.',
    eyebrow: 'Local SEO · Ogden-Clearfield',
    h1: 'When Ogden searches for what you do, be the first name they find',
    h2Exact: 'Ogden Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. We get you into that top three, so the call lands with you instead of whoever ranked first — and so you're the name a newly-arrived Hill Air Force Base family finds first.",
    primaryCta: 'Get my free Ogden audit',
    intro:
      "Ogden local SEO comes down to one thing: when a homeowner on the East Bench or a family that just PCS'd into Layton searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. The metro is growing fast and the competition is growing with it, so becoming one of those three is the whole game. Here's how you do it.",
    aioQuestion: 'How do Ogden businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Ogden-Clearfield neighborhoods. Ogden is fast-growing, has a constant churn of Hill Air Force Base newcomers, and runs hard on seasonal Wasatch-winter demand, so the winners look established, respond fast, and are already ranking before the snow flies.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks. If you're not one of them, it almost doesn't matter how good your work is — most people never see your name. Getting into that top three is usually the single highest-return move an Ogden business can make." },
      { title: "You're invisible to the families moving here", body: "Hill Air Force Base churns thousands of military and civilian families in and out every year, and the metro keeps pulling in transplants chasing Snowbasin and Powder Mountain at a fraction of Park City prices. None of them have a contractor yet — they search. If you're not ranking, you never even enter the running for that steady stream of brand-new homeowners." },
      { title: "You're not ranking when winter hits", body: "When the first heavy Wasatch snow lands, demand for roofing, ice-dam removal, and HVAC spikes hard, and the contractors already ranking take the calls. If you're invisible on the map when the cold sets in, the work goes to whoever Google already trusts. Ranking now is how you catch that wave instead of watching it pass." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Ogden searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes people pick up the phone." },
      { name: 'Neighborhood pages', desc: "Real pages for the East Bench, Layton, Clearfield, Roy, Ogden Valley and the rest, so you rank for the neighborhood someone's actually searching, not just \"Ogden.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Ogden sources Google trusts — local press, associations, partners. This is what separates page one from page two here." },
      { name: 'Winter-season readiness', desc: "We get your profile, pages, and reviews ranking before the first heavy snow so you catch the ice-dam, roofing, and HVAC spike instead of scrambling for it after the cold sets in.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your service areas and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now over starting later." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Weber and Davis counties, plus the on-page work to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Ogden-Clearfield areas.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across the metro.', features: ['Everything in Local Growth', 'Local link building', 'Winter-season demand targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Ogden?', a: "Most Ogden engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The competitive Ogden keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days in a market growing this fast is selling you something." },
      { q: 'What makes Ogden local SEO different?', a: "Two things. It's a fast-growing market with constant turnover from Hill Air Force Base, so a steady stream of brand-new homeowners is searching for a contractor every month and trust signals like reviews and consistent listings carry real weight. And it runs on Wasatch winters — trade demand swings hard with snow, ice dams, and deep cold, so your ranking has to be in place before the season, not after." },
      { q: 'How does local SEO help me with Hill Air Force Base families?', a: "Hill churns thousands of military and civilian families in and out every year, and a family that just PCS'd into Layton or Clearfield has no contractor yet — they search Google. If you're in the Map Pack, you're who they find and call. We get you ranking and reviewed so you catch that constant flow of new homeowners instead of missing it." },
      { q: 'Which areas do you cover?', a: "All of the Ogden-Clearfield metro and the areas around it — Historic 25th Street, the East Bench, Layton, Clearfield, Roy, Riverdale, North Ogden, Pleasant View, plus Ogden Valley, Eden and Huntsville. We build genuine neighborhood pages instead of one generic Ogden page, because that's what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand emergency calls, ice-dam and winter-driven demand, seismic-retrofit work, and insurance jobs, and we build your local SEO around them." },
      { q: 'Do you offer Spanish-language local SEO?', a: "Yes, and in Ogden it matters — nearly a third of the city is Hispanic, higher than Provo or Salt Lake. We can optimize your profile and pages so Spanish-speaking homeowners searching for your service actually find you, which is a market most of your competitors ignore." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because the work is coming to you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your service areas, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'ogden', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Ogden SEO Company | OnwardCraft',
    metaDescription:
      'Ogden SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in contracts, built for Wasatch-winter demand.',
    eyebrow: 'SEO Services · Ogden-Clearfield',
    h1: 'Get your Ogden business to the top of Google and keep it there',
    h2Exact: 'Ogden SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Ogden customers search and the leads keep coming. We build that ranking and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free Ogden SEO audit',
    intro:
      "Ogden SEO comes down to one question: when someone searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in a fast-growing, winter-driven market — and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Ogden businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content, and earning links from trusted Ogden sources. In a fast-growing, competitive market along the Wasatch Front, keeping the site fast on mobile and ranking for winter-driven, seasonal terms are two of the quickest ways to pull ahead.",
    problemHeading: "Three reasons your Ogden site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. If you're not in the top handful of results for what you sell, your site is basically invisible — no matter how good it looks." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost." },
      { title: "You're not ranking for the demand that matters", body: "Ogden demand swings hard with the season — heavy snow, ice dams, deep-freeze HVAC calls in winter, snowmelt flooding in spring — and the contractors who rank for those terms ahead of time catch the spike. If your SEO ignores winter-driven and seasonal searches, you're leaving your busiest months on the table." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your Ogden customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real Ogden and industry sources. In a competitive market, links are often what separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Winter & seasonal SEO', desc: "We rank you for the snow, ice-dam, and HVAC searches that drive Ogden's busiest months, so you're visible before demand spikes, not after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Ogden leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the seasonal and winter-driven terms that matter here." },
      { name: 'Build authority', desc: "Links and citations from trusted Ogden and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Ogden SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Ogden-Clearfield search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Winter & seasonal SEO', 'eCommerce / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Ogden?', a: "Most Ogden SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Ogden?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on low-competition terms and slower on the most competitive Ogden keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most contractors do best running SEO as the long-term engine and ads for short-term spikes." },
      { q: 'Should my Ogden SEO target winter season?', a: "Yes. When heavy Wasatch snow lands, searches for roofing, ice-dam removal, and HVAC spike overnight, and ranking takes months to build — so you have to be in place before the season, not chasing it after. We optimize for those seasonal and winter-driven terms ahead of time so your busiest months land on you." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add winter-and-seasonal and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which areas around Ogden do you cover?', a: "All of the Ogden-Clearfield metro and the surrounding areas — Layton, Clearfield, Roy, Riverdale, North Ogden, Pleasant View, Ogden Valley, Eden, Huntsville and more — with genuine local pages rather than one generic Ogden page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'ogden', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Ogden Web Design Company | Sites That Convert | OnwardCraft',
    metaDescription:
      'Ogden web design that turns visitors into booked jobs — fast, mobile-first sites built for contractors and Wasatch-winter demand.',
    eyebrow: 'Web Design · Ogden-Clearfield',
    h1: 'Ogden web design that turns visitors into booked jobs',
    h2Exact: 'Ogden Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Ogden contractors fast, mobile-first sites engineered to turn visitors into booked work — and to hold up when the first snow floods your phone.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Ogden contractor websites lose leads quietly: slow on a phone, buried call button, no clear offer. Web design done right fixes all of that. We build sites that load fast, look like the professional you are, and turn East-Bench-to-Layton visitors into booked jobs — and that don't fall over when a winter storm sends your traffic through the roof.",
    aioQuestion: 'What makes a good contractor website in Ogden?',
    aioAnswer:
      "A good Ogden contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and is built to handle traffic spikes during winter storms. Because most Ogden searches happen on mobile, mobile speed and an obvious next step are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next guy. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Ogden visitors are on mobile, and they bounce if your site takes more than a few seconds to load. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking." },
      { title: "It can't handle a winter-season surge", body: "When heavy snow and ice dams hit, contractor sites get slammed with a flood of traffic, and the slow ones buckle or bury the call button right when it matters most. We build sites that stay fast and convert under load, so you capture that demand instead of losing it." },
    ],
    servicesHeading: "What's in an OnwardCraft Ogden website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your service area, and the jobs you actually want." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your Ogden traffic is. Fast, thumb-friendly, easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that speak to anxious homeowners and book the job, not filler text that reads like everyone else." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Winter-surge ready', desc: "Built to stay fast and keep the call button front and center when snow-and-ice traffic spikes — the moment that turns visitors into your biggest jobs.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your service area, your best jobs, and your competitors, then map the site around booking more of the work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting." },
    ],
    pricing: {
      heading: 'Transparent Ogden web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Winter-surge ready'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Ogden?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site handle a winter-season traffic spike?', a: "Yes, and in Ogden that matters. When heavy snow and ice dams hit, contractor sites take a flood of traffic, and the slow ones lose leads right when demand peaks. We build fast and keep the call button obvious, so your site converts under load instead of buckling." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Ogden terms." },
      { q: 'Do you build sites in Spanish?', a: "Yes. Nearly a third of Ogden city is Hispanic, so a Spanish-language or bilingual site can reach a big market your competitors usually ignore. We'll talk through whether it fits your customers in the free consult." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your Ogden traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Ogden site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'ogden', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Ogden Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your Ogden website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs and hold up in winter season.',
    eyebrow: 'Website Redesign · Ogden-Clearfield',
    h1: 'Redesign your Ogden website without losing your rankings',
    h2Exact: 'Ogden Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, easy to ignore. We redesign Ogden contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Ogden contractor sites for speed and conversions, build them to handle winter-storm traffic, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Ogden site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "For a high-ticket job, homeowners judge you by your site in seconds. An old, cluttered design quietly sends them to a competitor who looks more established — even when your work is better." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your Ogden visitors before they ever see your offer. A redesign built mobile-first wins them back." },
      { title: "It can't keep up when demand surges", body: "Traffic that doesn't turn into calls is wasted — and an old site that gets slow under a winter-storm surge loses leads at the exact moment they're worth the most. We rebuild for conversions and for the days your phone should be ringing off the hook." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your Ogden traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the price of your jobs." },
      { name: 'Winter-surge ready rebuild', desc: "Rebuilt to stay fast and keep converting when snow-and-ice traffic spikes, so the new site captures your biggest jobs instead of choking on them.", featured: true },
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
      heading: 'Transparent Ogden redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Winter-surge ready'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Ogden?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is hard to update, isn't bringing in leads, or buckles when winter-storm traffic surges, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the new site handle winter-season traffic?', a: "Yes, and in Ogden that's a real consideration. When heavy snow and ice dams hit, contractor sites take a surge of traffic, and the slow ones lose leads. We rebuild for speed and keep the call to action obvious so the site converts when demand peaks." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const ogdenCity = {
  citySlug: 'ogden', city: 'Ogden', state: 'Utah', stateAbbr: 'UT', metro: 'Ogden-Clearfield',

  titleTag: 'Ogden Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Ogden contractors. Get found, get booked, and own your leads instead of renting them — built for Wasatch-winter demand.',

  eyebrow: 'Ogden · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Ogden contractors found and booked',
  h2Exact: 'Ogden Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Ogden-Clearfield's fast-growing, winter-driven market. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Wasatch-winter ready', 'No lock-in contracts'],
  primaryCta: 'Get my free Ogden audit',

  intro:
    "If you run a contracting business in Ogden, you're fighting for attention in one of the fastest-growing markets in the Mountain West, and the competition grows right along with it. Winning here takes three things working together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack — all ready before the first snow sends demand through the roof and before the next wave of Hill Air Force Base families goes searching for a contractor. Here's how we help Ogden contractors do exactly that.",
  aioQuestion: 'How do Ogden contractors get more leads online?',
  aioAnswer:
    "Ogden contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack. Because the Ogden-Clearfield metro is growing fast, sees constant turnover from Hill Air Force Base, and spikes hard during Wasatch winters, the contractors who look established and are already ranking before the snow win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Ogden searches \"near me.\" The single highest-return move for most local businesses — and how you reach the families moving here and catch winter demand.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search, build an asset you own instead of renting traffic from ads, and measure it in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs — and to stay fast when winter storms flood your phone — not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it carefully so you keep every bit of ranking you've already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Ogden?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads — and are ready when winter hits and when new families arrive." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors — so we understand emergency calls, ice-dam and winter-driven demand, seismic-retrofit work, and insurance jobs." },
    { q: 'Why does winter season matter for my marketing?', a: "When heavy Wasatch snow and ice dams hit, demand for roofing, ice-dam removal, and HVAC spikes overnight. Ranking takes months to build, so the contractors who are already visible before the cold sets in take that work. We get you in place ahead of the season." },
    { q: 'How does Hill Air Force Base affect my marketing?', a: "Hill is the region's biggest employer and churns thousands of military and civilian families in and out every year. Each newly-arrived family searches Google for contractors they've never heard of — so the businesses ranking in the Map Pack capture a steady stream of brand-new homeowners. We help you be the name they find." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Ogden areas do you serve?', a: "All of the Ogden-Clearfield metro and the surrounding areas — Historic 25th Street, the East Bench, Layton, Clearfield, Roy, Riverdale, North Ogden, Pleasant View, plus Ogden Valley, Eden and Huntsville." },
  ],
};
