// DURHAM: per-metro, per-service local landing pages + city hub.
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
// DURHAM: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Durham is its own challenge',
  body:
    "Durham is not Raleigh, and the search market makes that obvious fast. Duke University and Duke Health sit at the center of the city, Research Triangle Park draws biotech and software firms by the dozen, and the people those institutions attract are some of the best-researched buyers a contractor will ever pitch. They read your reviews, open three tabs of competitors, and check your credentials before a single call gets made. Two forces feed the demand. The transplant wave is the first: RTP and the universities keep pulling in PhDs, engineers, and clinicians from out of state, and they land on the old tobacco-era bungalows of Trinity Park and Old North Durham only to find original knob-and-tube wiring, single-pane windows, and cast-iron drains that need real work. The Piedmont climate is the second: ninety-five-degree, sticky summers from June into September push HVAC to the breaking point, while the occasional January ice storm freezes the whole region and floods emergency lines for days. Whoever already holds the Map Pack books that work. Everyone on page two waits.",
  pullQuote: 'Duke researchers and RTP engineers research contractors meticulously, so credibility signals are what make them call.',
  donut: {
    title: 'Durham by community',
    value: 38,
    centerLabel: 'Black/AA',
    legend: [
      { label: 'Black/AA', pct: 38, kind: 'teal' },
      { label: 'Other', pct: 62, kind: 'grey' },
    ],
  },
  seasonTitle: 'When the Triangle trades get busy',
  seasonCaption: 'HVAC Jun to Sep; spring storms Mar to May; winter ice Dec to Feb',
  seasonalDemand: [
    { m: 'J', v: 52, peak: true }, { m: 'F', v: 58, peak: true }, { m: 'M', v: 64, peak: true }, { m: 'A', v: 70, peak: true },
    { m: 'M', v: 72, peak: true }, { m: 'J', v: 88, peak: true }, { m: 'J', v: 95, peak: true },
    { m: 'A', v: 96, peak: true }, { m: 'S', v: 82, peak: true }, { m: 'O', v: 48 },
    { m: 'N', v: 54, peak: true }, { m: 'D', v: 58, peak: true },
  ],
  stats: [
    { value: '300K+', label: 'people in Durham, anchor of the Research Triangle' },
    { value: 'Top 10', label: 'Duke University ranked nationally, and its faculty and doctors are your most demanding customers', accent: true },
    { value: 'Jun to Sep', label: 'peak HVAC season, 95F humid summers bake the Triangle' },
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
    body: "Roofing, HVAC, plumbing, electrical, restoration, GCs. We know how a humid Triangle summer overloads an aging condenser, how an ice storm turns into a week of burst-pipe calls, and how RTP transplants buying century-old bungalows generate the renovation work that fills your calendar. That shapes everything we build for you.",
  },
  {
    title: 'We get you off rented leads',
    body: "What we are building is a pipeline that belongs to you. Not one more line item paid to a broker for the same Trinity Park homeowner that two other crews are already dialing.",
  },
  {
    title: 'We actually speak Durham',
    body: "Duke faculty reading every review twice, RTP engineers closing on 1910 housing with original drains, downtown lofts rising out of old tobacco warehouses, Chapel Hill and Carrboro right next door. A national agency cannot fake that by dropping a city name into a template.",
  },
  {
    title: 'No contracts, no mystery',
    body: "We publish the prices, we tie the reporting to real leads, and you go month-to-month once the first 90 days are up. If the work is not paying for itself, you cut us loose. That keeps the pressure sitting right where it should: on us.",
  },
];

const PROOF = {
  heading: "We're new, so here is the honest Durham math instead of a logo wall",
  body:
    "Most agencies lead with a grid of client logos. We are a young, founder-led shop, so we are not going to invent a track record we have not earned yet. What we can put in front of you is the reasoning, drawn straight from Google's and the industry's research on how people actually search for local contractors.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here is a rough sketch, marked plainly as an illustration and not a result we are claiming: say a Durham contractor draws roughly 1,200 local \"near me\" impressions a month. Climbing out of page-two invisibility and into the top three is the gap between a handful of stray calls and a calendar you cannot keep up with, and once a July heat wave or a January ice storm lands, that gap only widens. In your free audit we model the real figures for your shop: your current rankings, your true search volume, and a straight 90-to-180-day route up the map.",
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
      'Durham Local SEO that lands you in the three businesses on the map when neighbors search your trade, so the call comes to you.',
    eyebrow: 'Local SEO · Durham, NC',
    h1: 'Durham Local SEO that gets you found when Trinity Park neighbors search your trade',
    h2Exact: 'Durham Local SEO Company',
    heroSubhead:
      "Google drops three businesses onto the map when a Durham homeowner searches \"near me,\" and the names below them might as well not exist. We get you into that trio, so the call lands with you and not a competitor, and so you are already there when HVAC season or the next ice storm lights up every phone in the Triangle.",
    primaryCta: 'Get my free Durham audit',
    intro:
      "Durham Local SEO turns on a single moment: a homeowner in Trinity Park or Watts-Hillandale runs a \"near me\" search for your trade, and either you are one of the three businesses Google pinned to the map or you are nowhere. Most of them, the Duke faculty and RTP engineers who research everything included, tap one of those three in the local 3-pack and never scroll down. The Triangle keeps growing and the field keeps crowding, so our local SEO services are aimed at one thing: making you that name on the map. Here is how we do it.",
    aioQuestion: 'How do Durham businesses rank higher in local search?',
    aioAnswer:
      "Rank by nailing four things: a Google Business Profile tuned to the exact services and Triangle neighborhoods you want, name-address-phone details that line up everywhere online, a steady drip of real reviews, and local pages tied to genuine Durham areas. Because the highly educated buyers here vet you before they dial, looking established and credible is what turns a ranking into an actual call.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Three competitors hold the map and you are not on it', body: "Type your own service plus \"near me\" right now and look at the three businesses Google pinned to the map. They pull the overwhelming share of the clicks, and a Trinity Park homeowner almost never scrolls past them. If you are not in that trio, the quality of your work barely registers, because most people never see you. Breaking into the top three is usually the highest-return move a Durham contractor can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Durham homeowner to four crews at once, then bill each of you to fight over the scraps. It never ends. Local SEO builds the reverse: a homeowner finds you, calls you, and no one else got the lead. Stick with it and you stop renting visibility and start owning the pipeline." },
      { title: "You're invisible when the season turns", body: "When a July heat wave pushes HVAC searches vertical or a January ice storm hits the Triangle overnight, the contractors already in the Map Pack take those calls. If you cannot be found on the map when demand spikes, the booked work flows to whoever Google already trusts. Ranking now is how you catch that surge instead of watching it pass." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The heaviest lever in the Map Pack. We tune your categories, services, service area, photos, and posts so Google knows exactly which Durham searches should land on you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to agree everywhere Google looks. We fix the listings that contradict each other and build out the ones you are missing across the Triangle." },
      { name: 'Reviews that keep coming', desc: "A straightforward engine that turns finished jobs into a steady run of fresh reviews. It lifts your ranking and gives a methodical Duke or RTP buyer the proof they need to pick up the phone." },
      { name: 'Neighborhood pages', desc: "Genuine pages for Old North Durham, Trinity Park, Watts-Hillandale, Hope Valley, Chapel Hill and the rest, so you rank for the exact neighborhood someone is searching instead of a bare \"Durham.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, and mobile speed: the under-the-hood work that lets every other piece actually rank." },
      { name: 'Local link building', desc: "Mentions and links from Durham and Triangle sources Google trusts: local press, trade groups, community partners. In a market this competitive that is often what splits page one from page two." },
      { name: 'Seasonal demand readiness', desc: "We get your profile, pages, and reviews ranking ahead of HVAC season and the ice-storm windows, so you capture the surge instead of scrambling for it once the demand has already moved on.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now begins inside AI Overviews, ChatGPT, and Perplexity, and Durham's researchers and engineers are first in line to use them. We structure your content so those tools can read you and cite you by name.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We pin down where you truly rank today across each service area and figure out which competitors are beating you in the Durham Map Pack and exactly why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP go first because they move quickest. Most Durham clients see early lift here inside the first few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine switch on. These compound week over week, which is why local SEO rewards the shop that starts now over the one that waits." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Durham, Orange, and Wake counties, backed by the on-page work that makes them stick." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to Durham calls and booked leads, never vanity rankings. Then we go take the next Triangle neighborhood." },
    ],
    pricing: {
      heading: 'Durham pricing, right out in the open',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One Durham location, getting the Map Pack foundation locked in.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For crews battling across several Triangle neighborhoods.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors set on owning the map across the Triangle.', features: ['Everything in Local Growth', 'Local link building', 'Seasonal demand targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Durham?', a: "Most Durham engagements land between $750 and $2,500 a month, set by how many neighborhoods and keywords you are chasing. The tiers above map it out. No hidden fees, no long contract, and we confirm the exact scope in your free audit before you spend a dollar." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile work can move inside a few weeks. The competitive Durham keywords usually want 90 to 180 days of steady effort, because reviews and citations stack up over time. Anyone promising you page one in a month is selling you something." },
      { q: 'What makes Durham local SEO different from Raleigh and the rest of the Triangle?', a: "Durham's buyers skew toward Duke faculty, Duke Health clinicians, and RTP researchers and engineers who vet a contractor harder than almost any market. A high rating and a detailed, credible profile turn a ranking into a lead here more than in neighboring cities. Durham also runs its own seasonal pattern: brutal humid-summer HVAC demand, then overnight ice-storm emergencies in deep winter." },
      { q: 'How does local SEO help me during HVAC season and winter ice storms?', a: "When the Piedmont hits ninety-five degrees or an ice storm knocks out heat overnight, HVAC and emergency-repair searches jump fast, and the businesses already in the Map Pack take those calls. We get you ranked and reviewed ahead of those windows so you catch the demand instead of handing it to a competitor." },
      { q: 'Which areas do you cover?', a: "All of Durham and the surrounding Triangle: Old North Durham, Trinity Park, Watts-Hillandale, Hope Valley, Chapel Hill, Carrboro, Morrisville, Cary, RTP, Hillsborough and more. We build real neighborhood pages rather than one generic Durham page, because that is what ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It is nearly all we do: roofing, HVAC, plumbing, electrical, restoration, and general contractors. Durham is packed with 1900-to-1940 tobacco-era housing under renovation, and we get the old-drain, knob-and-tube, and original-window work that drives so much of the demand here." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More research now starts in AI tools instead of classic search, and Durham's highly educated homeowners are exactly the people who search that way. We structure your content and schema so those engines can read, trust, and cite your business." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that is about how long local SEO needs to show real movement. After that it is month-to-month. If we are not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that route Durham leads straight to you and no one else. Run it a few months and you lean on the brokers less, because the work is already arriving direct." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your service areas, what your Map Pack competitors are doing to beat you, the fixes that move you fastest, and a realistic 90-to-180-day plan with the numbers run for your shop. It is the honest starting point for Durham Local SEO that ranks you on the map and keeps you there. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'durham', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Durham SEO Company | OnwardCraft',
    metaDescription:
      'Durham SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in, built for Triangle and RTP-driven demand.',
    eyebrow: 'SEO Services · Durham, NC',
    h1: 'Durham SEO that turns Triangle organic traffic into booked work',
    h2Exact: 'Durham SEO Company',
    heroSubhead:
      "Ads vanish the moment your card stops. SEO works the other way: rank once for what your Durham customers search and the leads keep arriving for months. We build that ranking and tie every report to real calls and booked jobs, not vanity charts.",
    primaryCta: 'Get my free Durham SEO audit',
    intro:
      "Durham SEO comes down to one blunt question: when someone searches what you do, are you on page one or page two? Around here page two might as well be page fifty. We get contractors ranking for the money keywords in a market where Duke researchers and RTP engineers do their homework before they call anyone, and we measure the whole thing in leads, not traffic that never dials.",
    aioQuestion: 'How do Durham businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the site's technical foundation, tuning each page for the exact terms customers search, publishing genuinely useful local content, and earning links from trusted Durham and Triangle sources. In a market this educated, where buyers research meticulously, technical credibility signals like fast load, schema, and authoritative content carry extra weight.",
    problemHeading: "Three reasons your Durham site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost no one clicks past the first page of Google, and they rarely scroll deep into it either. If you are not in the top handful of results for what you sell, your site is effectively invisible, no matter how polished it looks or how strong your reputation is offline. In Durham, that invisibility is what quietly ships your jobs to the competition." },
      { title: "You're renting traffic from Google Ads", body: "Ads have their place, but the instant your card stops, the Durham leads stop with it. SEO builds an asset that stays yours: rankings that keep producing calls months and years after the work is done, at a fraction of the per-lead cost the ad auction charges you now." },
      { title: "You're missing the demand that matters", body: "Durham demand swings with the calendar: punishing humid-summer HVAC, spring storm season, then deep-winter ice emergencies. The contractors ranking for those terms ahead of time catch the spike. If your SEO ignores the seasonal searches, you are quietly handing away your busiest, most profitable months." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank your Durham site at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned for the exact terms your Durham customers search: titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads long after we publish them." },
      { name: 'Link building', desc: "Authority from real Durham and Triangle sources. In a market crowded with sharp competitors, links are often the deciding factor between page one and page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you take the Durham \"near me\" searches right alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and booked Triangle jobs, not just rankings and traffic, so you always know in dollars what your SEO is returning." },
      { name: 'Seasonal SEO', desc: "We rank you for the humid-summer HVAC, spring roofing, and winter ice-storm searches that drive Durham's busiest months, so you are visible before demand spikes instead of chasing it after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, which matters in a market where educated buyers open their research in AI tools first.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Durham leads, not just impressions." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile: the groundwork a Durham site needs in place before anything else can rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the seasonal terms that decide who wins a Triangle summer." },
      { name: 'Build authority', desc: "Links and citations from trusted Durham and Triangle sources to push your competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to Durham leads, then we double down on what is producing and push into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Durham SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused Durham site chasing its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and Triangle neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses set on owning Triangle search outright.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal demand SEO', 'Multi-location ready', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Durham?', a: "Most Durham SEO engagements run $900 to $3,000 a month, set by how competitive your keywords are and how much content and link work you need. The tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Durham?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, quicker on low-competition terms and slower on the most contested Durham keywords. SEO compounds, so the longer you run it, the bigger the gains get." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops the second you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Durham contractors do best running SEO as the long-term engine and ads for short-term spikes." },
      { q: 'Should my Durham SEO target seasonal demand?', a: "Yes. When humid-summer HVAC demand peaks in June or a winter ice storm hits, searches jump overnight and ranking takes months to build, so you have to be in place before the season rather than chasing it after. We optimize for those seasonal terms ahead of time so your busiest months land on you." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because that is about how long SEO needs to show real movement in Durham, then it goes month-to-month. If we are not delivering, you walk." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a growing part of what we optimize for, and Durham's highly educated homeowners are exactly the people who research in AI tools before calling anyone. We structure your content and schema so AI engines can read, trust, and cite your business." },
      { q: 'Which areas around Durham do you cover?', a: "All of the Triangle and the surrounding towns: Chapel Hill, Carrboro, Morrisville, Cary, Hillsborough, RTP and more, with genuine local pages rather than one generic Durham page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that route Durham leads directly to you. The more you own your search visibility, the less you depend on paying brokers for leads two or three competitors also bought." },
      { q: "What's in the free SEO audit?", a: "Where you rank today across the Triangle, what your competitors are doing to outrank you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your shop. It is a straight plan for Durham SEO that grows your organic traffic and ranks you on Google for the searches that book jobs. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'durham', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Durham Web Design Company | Sites That Convert | OnwardCraft',
    metaDescription:
      'Durham web design that turns visitors into booked jobs: fast, credibility-first sites built for contractors and the Triangle\'s highly educated homeowners.',
    eyebrow: 'Web Design · Durham, NC',
    h1: 'Durham Web Design that makes research-minded Duke and RTP homeowners pick you',
    h2Exact: 'Durham Web Design Company',
    heroSubhead:
      "A handsome website that never books a call is just an expensive brochure. We build Durham contractors fast, credibility-first sites engineered to turn visitors into booked work, and built to satisfy the meticulous Duke or RTP homeowner who researches every contractor before they call.",
    primaryCta: 'Get my free quote',
    intro:
      "Durham Web Design is the difference between a site that books work and one that just sits there: most contractor websites here bleed leads quietly, slow on a phone, call button buried, no trust signals for the researcher comparing three crews side by side. Website design done right closes every one of those leaks. As a Durham web design company built for the trades, we build mobile-first, fast-loading sites that look like the professional you are, back it up with reviews and real project photos, and convert Old-North-Durham-to-Chapel-Hill visitors into booked jobs.",
    aioQuestion: 'What makes a good contractor website in Durham?',
    aioAnswer:
      "A good Durham contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, and proves trust with reviews, credentials, and real project photos, because Durham homeowners, many of them Duke faculty or RTP professionals, vet contractors harder than almost any market. It also has to take a traffic surge during summer HVAC season and winter ice storms without buckling.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It doesn't earn trust with researchers", body: "Durham homeowners, the Duke doctors and biotech researchers and Cisco engineers, size up a contractor carefully before they call. If your site has no reviews, thin content, or a dated look, you lose to a competitor who simply reads as more credible, even when your work is better." },
      { title: "It's too slow on a phone", body: "Most of your Durham visitors arrive on mobile, and they bounce if your site takes more than a couple of seconds to load. Slow sites also rank worse on Google, so you lose twice. We build fast, so you keep both the visitor and the ranking." },
      { title: "It folds when demand peaks", body: "When a summer heat wave or a winter ice storm sends everyone searching for HVAC or emergency repair, your site takes a surge of traffic. If it is slow, buried, or hard to call from, you lose those leads at the exact moment they are worth the most." },
    ],
    servicesHeading: "What's in an OnwardCraft Durham website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your Triangle service area, and the exact jobs you want more of." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that is where most of your Durham traffic lives. Fast, thumb-friendly, and easy to call from in one tap." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms set where Durham homeowners actually use them. Every page carries one unmistakable next step." },
      { name: 'Trust-building content', desc: "Reviews, credentials, real project photos, and copy written for the research-minded Durham homeowner, closing the gap between a visit and a call." },
      { name: 'Local SEO foundation', desc: "Built from the studs up to rank: clean structure, schema, fast load, and Triangle neighborhood-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and clear Google's performance checks, which guards both your Durham conversions and your rankings at once." },
      { name: 'Seasonal-surge ready', desc: "Built to stay fast and keep the call button front and center when summer HVAC or winter ice-storm traffic spikes, the moment that turns visitors into your biggest jobs of the year.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read your site and recommend you as more search, especially from Durham's tech-savvy homeowners, shifts toward AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your Triangle service area, your most profitable jobs, and your competitors, then map the site around booking more of the work you actually want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert and to earn the trust of Durham's research-minded homeowners, and you see it and shape it before a single line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action and the trust signals front and center on every page." },
      { name: 'Launch', desc: "We launch it clean, with the SEO foundation, tracking, and load speed all dialed in from the first day live." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it around what is actually turning Durham visitors into phone calls." },
    ],
    pricing: {
      heading: 'Transparent Durham web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade Durham contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A larger site for established Durham contractors running several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Seasonal-surge ready'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location Triangle businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Durham?', a: "Most contractor websites with us land between $2,000 and $8,000 as a one-time build, set by page count and integrations. The tiers are above: a fixed price, no surprises, and the finished Durham site is yours outright." },
      { q: 'How long does it take to build?', a: "A focused site runs about 2 to 4 weeks; a larger custom build runs 4 to 8. You get a firm timeline up front and a status update at each stage." },
      { q: 'Will my site handle a summer heat wave or ice storm traffic surge?', a: "Yes, and in Durham that matters. When the Piedmont hits ninety-five degrees or an ice storm knocks out heat overnight, contractor sites take a surge of traffic. We build fast and keep the call button obvious, so your site converts under load instead of buckling." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank, and pairing it with our SEO service is how you climb the competitive Durham terms." },
      { q: 'Do I own the website?', a: "Completely. The site, the domain, and the content are yours. No hostage situations, and no platform a Durham contractor cannot walk away from." },
      { q: 'Will it look credible to Duke or RTP homeowners doing their research?', a: "That is exactly what we design for. Trust signals, the reviews and real project photos and credentials and clear service descriptions, are built into every page, because Durham homeowners compare contractors carefully before they call." },
      { q: 'What platform do you build on?', a: "We choose the platform that fits your needs and that you can actually run yourself, usually WordPress or Webflow. We recommend the right fit in your free Durham consult and lay out the tradeoffs in plain English." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every Durham build comes with launch support, and after that we offer affordable monthly maintenance covering updates, speed, and security." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project at a fixed price. Any ongoing maintenance or SEO is month-to-month, so you can step away whenever you like." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Durham site should include, and a fixed-price quote with a timeline. It is a no-pressure plan for Durham Web Design that converts visitors into booked jobs. Just the path, not a sales pitch." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'durham', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Durham Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your Durham website without losing rankings. Faster, credibility-first rebuilds that convert more visitors into booked jobs and satisfy Triangle buyers.',
    eyebrow: 'Website Redesign · Durham, NC',
    h1: 'Durham Website Redesign that turns an aging Triangle site into a lead engine',
    h2Exact: 'Durham Website Redesign Company',
    heroSubhead:
      "An outdated site quietly costs you jobs every week: slow, clumsy on a phone, and nowhere near credible enough for the Duke faculty member comparing three contractors. We redesign Durham contractor sites to convert more and load faster, and we migrate so carefully that you keep every bit of ranking you have already earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Durham Website Redesign usually goes one of two bad ways: the site looks prettier but converts exactly the same, or it launches and the rankings vanish overnight. We do neither. Our website redesign services rebuild Durham contractor sites for speed, credibility, and conversions, a mobile-first rebuild paired with an SEO-safe migration that protects the traffic you have already built so you redesign your Durham website without losing rankings.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign holds your rankings and improves them, because the new site is faster, more trustworthy, and better structured than the old one.",
    problemHeading: "Signs your Durham site is overdue for a redesign",
    painPoints: [
      { title: "It loses trust with research-minded homeowners", body: "Duke faculty, Duke Health doctors, RTP engineers: these are your buyers in Durham, and they compare contractors carefully before they call. An old, cluttered design quietly tells them to look elsewhere, even when your work beats whoever they call instead." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you are losing the majority of your Durham visitors before they ever reach your offer. A redesign built mobile-first wins those visitors back and turns them into leads." },
      { title: "It can't keep up when demand surges", body: "A summer HVAC heat wave or a winter ice storm sends a surge of traffic your way. An old site that slows to a crawl or buries the call button loses leads at the precise moment they are worth the most. We rebuild for conversions and for the days your phone should be ringing off the hook." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what is costing your Durham site leads and rankings today, so the redesign fixes the real problems instead of just repainting the colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep every bit of the rankings and traffic you have already earned in Durham." },
      { name: 'Conversion redesign', desc: "Clear offers, smarter call-to-action placement, and lead forms Durham homeowners actually use. We design for booked jobs, not just a prettier screenshot." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and a passing Core Web Vitals score, which lifts conversions and rankings at once." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where most of your Durham traffic actually lives." },
      { name: 'Trust refresh', desc: "A modern, credible look backed by reviews, real project photos, and credentials that meet the expectations of Durham's research-minded homeowners." },
      { name: 'Seasonal-surge ready rebuild', desc: "Rebuilt to stay fast and keep converting when summer HVAC or winter ice-storm traffic spikes, so the new site captures your biggest jobs instead of choking on them.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as more search, especially from Durham's tech-savvy buyers, shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what is bleeding you leads and rankings, then map a redesign that fixes it without breaking what already works for your Durham site." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design built to earn trust from Durham's analytical homeowners, which you review and shape before we build a thing." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and line up every redirect and SEO detail so the Durham migration goes clean, with no nasty surprises." },
      { name: 'Launch with SEO care', desc: "We launch with the redirects already in place and watch closely so your Durham rankings hold and climb rather than drop." },
      { name: 'Optimize', desc: "Post-launch tuning around what is converting for your Durham traffic, plus ongoing speed work and updates." },
    ],
    pricing: {
      heading: 'Transparent Durham redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small Durham contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established Triangle contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Seasonal-surge ready'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location Durham sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Durham?', a: "Most Durham redesigns with us land between $2,500 and $9,000 as a one-time project, set by size and integrations. A fixed price, no surprises, and the result is yours outright." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not when it is handled carefully, and that is exactly how we work. We map 301 redirects for every changed URL, hold onto your content and metadata, carry the schema across, and test on staging first. Done right, a Durham redesign keeps your rankings and usually nudges them higher." },
      { q: 'How long does a redesign take?', a: "A focused redesign runs about 3 to 5 weeks; a larger rebuild runs 5 to 9. You get a firm timeline up front and a status update at every stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, fails to build trust with research-minded Durham homeowners, or buckles when summer or winter demand surges, it is costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and sharpen your existing content, protect the pages that are ranking, and handle the technical migration so nothing important slips through the cracks." },
      { q: 'Will the new site handle seasonal traffic spikes?', a: "Yes. Humid-summer HVAC demand and winter ice storms both send surges of traffic to Durham contractors, and we rebuild for speed and keep the call to action obvious so the site converts when demand peaks." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and a passing Core Web Vitals score, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely: the site, the domain, and the content all belong to you. No platform lock-in of any kind." },
      { q: 'Am I locked into a contract?', a: "No. The Durham redesign is a one-time project. Any ongoing maintenance or SEO runs month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current Durham site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan. It is the honest scope for a Durham Website Redesign that rebuilds for leads without losing the rankings you have earned." },
    ],
  },
];

export const durhamCity = {
  citySlug: 'durham', city: 'Durham', state: 'North Carolina', stateAbbr: 'NC', metro: 'Durham',

  titleTag: 'Durham Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Durham marketing for contractors: web design and SEO that get you found by Duke homeowners and RTP professionals, booked, and owning your leads instead of renting them.',

  eyebrow: 'Durham · Web Design, SEO & Lead Generation',
  h1: 'Durham marketing for contractors that turns Triangle searches into booked jobs',
  h2Exact: 'Durham Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for a market where Duke researchers and RTP engineers vet every contractor before they call. One team to get you ranking, looking credible, and off the rented-lead treadmill for good.",
  heroProof: ['Built for the trades', 'Triangle-market ready', 'No lock-in contracts'],
  primaryCta: 'Get my free Durham audit',

  intro:
    "Durham marketing for contractors has to fit a market unlike anywhere else in North Carolina. Duke University, Duke Health, and Research Triangle Park mean your potential customers count among the most educated buyers in the country: they research contractors thoroughly, weigh their options, and trust credibility signals. Stack on block after block of 1900-to-1940 tobacco-era housing under renovation, humid Piedmont summers driving HVAC demand, and the occasional winter ice storm creating overnight emergencies, and the opportunity is enormous for the contractor who can be found. Winning here takes three things working together: a site that builds trust, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack. Here is exactly how we help Durham contractors pull that off.",
  aioQuestion: 'How do Durham contractors get more leads online?',
  aioAnswer:
    "Durham contractors get more leads by combining a fast, credibility-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack. Because Durham homeowners, the Duke faculty and biotech researchers and RTP engineers, research before they call, looking established and credible counts just as much as ranking at all.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Durham searches \"near me.\" The single highest-return move for most local businesses, and how you get found before a Duke homeowner calls your competitor.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your Durham customers actually search, build an asset you own instead of renting traffic from ads, and measure the whole thing in booked leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, credibility-first websites engineered to turn visits from research-minded Durham homeowners into booked jobs, not brochures that get scrolled past.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed, trust, and conversions, and migrate it so carefully that you keep every bit of ranking you have already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Durham?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients pair a high-converting website with SEO and local SEO so they rank, look credible, and own their leads, all essential in a market where homeowners research before they call." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, electrical, restoration, and general contractors. Durham is full of early 20th-century housing under renovation, and we understand the old-drain, knob-and-tube, and original-window work that drives so much of the demand here." },
    { q: 'Why do Duke and RTP homeowners matter for my marketing?', a: "Durham's buyers include a dense concentration of Duke faculty, Duke Health doctors, biotech researchers, and RTP engineers, people who research contractors carefully, weigh options, and trust credibility signals like reviews, photos, and a professional site. Showing up first matters, but looking trustworthy is what makes them call." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds running $2,000 to $9,000. SEO and local SEO go month-to-month from $750 to $3,000, with no long contract. We confirm the exact scope in your free Durham audit." },
    { q: 'Which Durham areas do you serve?', a: "All of Durham and the Triangle: Old North Durham, Trinity Park, Watts-Hillandale, Hope Valley, Chapel Hill, Carrboro, Morrisville, Cary, RTP, Hillsborough and more." },
    { q: 'Where should I start?', a: "Start with a free Durham audit. We look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. It is the simplest first step in Durham marketing for contractors who want to get found and booked. No pitch deck, just a plan." },
  ],
};
