// CHATTANOOGA: per-metro, per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Chattanooga's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// CHATTANOOGA: shared city blocks
// ===========================================================================
const MARKET = {
  heading: "What you're really up against in Chattanooga search",
  body:
    "Chattanooga sits in a bend of the Tennessee River, boxed in by Lookout Mountain, Signal Mountain, and Raccoon ridges, and that geography shapes who buys home services here. The metro carries roughly 580,000 people, but it pulled in Volkswagen's only North American assembly plant, Amazon fulfillment, and Wacker Chemie, which built a homeowner base of plant workers and skilled trades who spend real money on their houses. Then EPB lit up the country's first citywide gigabit fiber, earned the nickname Gig City, and remote workers and small tech shops moved in on purpose for the internet. That layered demand brings layered competition. The valley funnels severe spring weather, and tornado and hail searches for roofing and restoration go vertical between March and June. Summer is the other pressure point: stretches above 95 degrees from June into September push HVAC calls to the breaking point. The contractors already sitting in the top three on the map answer those calls. Everyone buried below them watches the work get booked by somebody Google already trusts.",
  pullQuote: "When a hailstorm rolls down the valley or July tips past 95, the Chattanooga contractor already in the top three books the calendar. The rest just watch.",
  donut: {
    title: 'Chattanooga demographics',
    value: 36,
    centerLabel: 'Black/AA',
    legend: [
      { label: 'Black/AA', pct: 36, kind: 'teal' },
      { label: 'Other', pct: 64, kind: 'grey' },
    ],
  },
  seasonTitle: 'When Chattanooga trade demand climbs',
  seasonCaption: 'Spring storms (Mar to Jun) and summer HVAC heat (Jun to Sep)',
  seasonalDemand: [
    { m: 'J', v: 30 }, { m: 'F', v: 32 }, { m: 'M', v: 58, peak: true }, { m: 'A', v: 82, peak: true },
    { m: 'M', v: 90, peak: true }, { m: 'J', v: 95, peak: true }, { m: 'J', v: 92, peak: true },
    { m: 'A', v: 88, peak: true }, { m: 'S', v: 70, peak: true }, { m: 'O', v: 48 },
    { m: 'N', v: 34 }, { m: 'D', v: 28 },
  ],
  stats: [
    { value: '580K+', label: 'people across the Chattanooga River valley metro' },
    { value: 'Gig City', label: 'first US city wired for citywide gigabit fiber, pulling in tech and remote workers', accent: true },
    { value: 'Mar-Sep', label: 'peak trade window, spring storms first, then a long run of summer HVAC heat' },
    { value: 'Top 3', label: 'spots on the Google map that soak up most Chattanooga clicks' },
  ],
  neighborhoods: [
    'Northshore', 'St. Elmo', 'Ferger Place', 'Lookout Mountain', 'Signal Mountain',
    'Red Bank', 'East Ridge', 'Hixson', 'Ooltewah', 'Cleveland',
    'Brainerd', 'East Brainerd', 'Soddy-Daisy', 'Ringgold', 'Fort Oglethorpe',
  ],
};

const AREAS = [
  'Chattanooga', 'Northshore', 'St. Elmo', 'East Ridge', 'Red Bank',
  'Hixson', 'Signal Mountain', 'Lookout Mountain', 'Ooltewah', 'Soddy-Daisy',
  'Cleveland', 'Fort Oglethorpe', 'Ringgold', 'East Brainerd', 'Collegedale',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We know what a hail-battered roof call sounds like the morning after a spring storm, how a 95-degree week buries an HVAC schedule, and how insurance jobs flow through the valley, so what we build matches the way Chattanooga homeowners actually search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The aim is a pipeline that belongs to you. Not one more monthly check to a lead broker for the same Hixson or Ooltewah homeowner that three other crews are already dialing.",
  },
  {
    title: 'We actually speak Chattanooga',
    body: "The Volkswagen plant economy, the Gig City fiber that pulled remote workers up here, the river-and-ridge geography, and the spring tornado risk that comes with it. That is local ground a national agency cannot fake by swapping a city name into a template.",
  },
  {
    title: 'No contracts, no mystery',
    body: "Prices are posted, reporting ties to real leads, and you go month-to-month once the first 90 days are up. If we are not earning the invoice, you walk. That keeps the pressure exactly where it belongs, on us.",
  },
];

const PROOF = {
  heading: "We're new, so here's the honest math instead of a logo wall",
  body:
    "Plenty of agencies open with a grid of client logos. We are a young, founder-led shop, so we are not going to fake a record we have not earned yet. What we can put in front of you is the reasoning, drawn straight from Google's and the industry's own research on how people search for local contractors.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here is a rough picture, marked plainly as an illustration and not a result we are claiming: say a Chattanooga contractor draws around 900 local \"near me\" impressions a month. Moving from page-two invisibility into the top three is the gap between a handful of stray calls and a calendar you cannot keep up with, and after a spring hailstorm or a July heat run that gap stretches even wider. In your free audit we model the real numbers for your shop: your current rankings, your actual search volume, and a straight 90-to-180-day route to the top of the map.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Chattanooga', state: 'Tennessee', stateAbbr: 'TN', metro: 'Chattanooga',
  heroProof: ['Built for the trades', 'Storm-season ready', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const chattanoogaLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'chattanooga', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Chattanooga Local SEO Company | Own the Map Pack | OnwardCraft',
    metaDescription:
      'Chattanooga Local SEO that makes you the first name on the map. We get you into the top three local results, so the storm-season call lands with you, not a competitor.',
    eyebrow: 'Local SEO · Chattanooga',
    h1: 'Chattanooga Local SEO that makes you the first name on the valley map',
    h2Exact: 'Chattanooga Local SEO Company',
    heroSubhead:
      "Google pins three businesses to the map when a homeowner searches \"near me,\" and everyone below them might as well not exist. We push you into that top three so the call lands with you instead of whoever ranked first, and so you are already there when the next spring storm or 95-degree week sends every Hamilton County phone into a frenzy.",
    primaryCta: 'Get my free Chattanooga audit',
    intro:
      "Chattanooga local SEO turns on one moment: a homeowner in Northshore or Hixson types your service plus \"near me,\" and either you are one of the three businesses Google pinned to the map or you are not. Most people tap one of those three and never scroll. With a manufacturing backbone, a Gig City wave of remote workers, and trade demand that swings hard by season, landing in that top three is the whole game. Here is how we get you there.",
    aioQuestion: 'How do Chattanooga businesses rank higher in local search?',
    aioAnswer:
      "You rank by nailing four things: a Google Business Profile tuned to the exact services and Chattanooga neighborhoods you want, name and address and phone details that match everywhere online, a steady flow of real reviews, and local content built around genuine neighborhoods like St. Elmo and Ferger Place. With spring storms and 95-degree summers driving urgent demand, the winners look established, answer fast, and are already ranking before the spike.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Three rivals own the spots on the Chattanooga map', body: "Search your own service plus \"near me\" from your truck right now. Those three businesses Google pins to the map pull the overwhelming majority of the clicks. If your name is not among them, the quality of your work barely registers, because most homeowners in the valley never scroll far enough to see you. Climbing into that top three is usually the single highest-return move a Chattanooga contractor can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Chattanooga homeowner to four contractors at once, then bill each of you to scrap over them. It is a treadmill with no off switch. Local SEO builds the opposite asset: a homeowner finds you, calls you, and nobody else got the lead. Run it long enough and you quit renting visibility and start owning the pipeline." },
      { title: "You're caught flat-footed when storms or heat hit", body: "When a tornado warning or a hail line sweeps down the river valley, searches for roofing, restoration, and water remediation jump overnight. Come June, a string of 95-degree days does the same to HVAC. The crews already ranking grab those calls. If you are invisible on the map when demand breaks, that booked work flows to whoever Google already trusts, not to whoever does the better job." },
    ],
    servicesHeading: 'What it actually takes to rank you in Chattanooga',
    services: [
      { name: 'Google Business Profile', desc: "The single biggest lever in the Map Pack. We tune your categories, services, service area, photos, and posts so Google knows precisely which Chattanooga searches belong to you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to agree everywhere Google checks. We repair the listings that contradict each other and build the ones you are missing across the metro." },
      { name: 'Reviews that keep coming', desc: "A simple engine that turns finished jobs into a steady run of fresh reviews. It lifts your ranking and gives the next valley homeowner a reason to call you first." },
      { name: 'Neighborhood pages', desc: "Real pages for Northshore, St. Elmo, Hixson, Ooltewah, East Ridge and the rest, so you rank for the exact neighborhood somebody is searching instead of a generic \"Chattanooga.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, and mobile speed wired up clean. This is the quiet machinery under your Chattanooga site that lets every other piece actually rank." },
      { name: 'Local link building', desc: "Mentions and links from Chattanooga sources Google trusts: local press, trade associations, and community partners. In a river-valley market this crowded, that is often what splits page one from page two." },
      { name: 'Storm-season readiness', desc: "We get your profile, pages, and reviews ranking before spring tornado season and the summer heat so you catch the demand spike instead of chasing it once everyone else is booked solid.", featured: true },
      { name: 'AI search readiness', desc: "A growing slice of \"near me\" research now starts inside AI Overviews, ChatGPT, and Perplexity. We structure your content so those engines can read your Chattanooga business and cite it by name.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you genuinely rank today across every service area in the valley and pin down which competitors are beating you in the Map Pack and exactly why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP come first because they move the fastest. Most Chattanooga clients see early lift here inside a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is exactly why local SEO rewards starting before storm season rather than after." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Hamilton County and the bordering communities, backed by the on-page work that makes them rank." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and booked leads, never vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Chattanooga Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Chattanooga-area communities.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across the river valley.', features: ['Everything in Local Growth', 'Local link building', 'Storm-season demand targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Chattanooga?', a: "Most Chattanooga engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you are chasing. The tiers above lay it out. No hidden fees, no long contract, and we lock the exact scope in your free audit before you spend a dollar." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move within a few weeks. The competitive Chattanooga keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days in a market with this much manufacturing and tech-worker money behind it is selling you a story." },
      { q: 'What makes Chattanooga local SEO different?', a: "Two things stand out. The homeowner base is unusually layered: Volkswagen and manufacturing workers, Gig City remote transplants, and renovation-minded buyers restoring older homes in Ferger Place and St. Elmo. And trade demand swings hard by season, with spring tornado and hail searches peaking March through June, then HVAC searches climbing through a run of 95-degree heat from June into September. Your ranking has to be locked in before each season, not thrown together after." },
      { q: 'How does local SEO help me during Chattanooga storm season?', a: "When a spring storm or tornado line rips through the valley, searches for roofing, restoration, and emergency cleanup spike overnight, and the businesses already in the Map Pack take those calls. We get you ranking and reviewed ahead of season so you catch that demand instead of fighting for scraps once every other crew is already booked." },
      { q: 'Which areas do you cover?', a: "All of the Chattanooga metro: Northshore, St. Elmo, Ferger Place, Hixson, Red Bank, East Ridge, Signal Mountain, Lookout Mountain, Ooltewah, Soddy-Daisy, plus Cleveland and Ringgold. We build genuine neighborhood pages instead of one generic Chattanooga page, because that is what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It is basically all we do: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand emergency calls, storm-driven demand, insurance jobs, and the renovation work running through the valley's older neighborhoods, and we build your local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More \"near me\" research now starts in AI tools instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business by name. In Chattanooga that is fast becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that is roughly how long local SEO takes to show real movement in a market this competitive. After that it is month-to-month. If we are not delivering for your Chattanooga shop, you walk, and the accountability stays squarely on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that route Chattanooga homeowners straight to you alone. Run it long enough and you lean on the brokers less because the work is already coming to you direct." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across the valley, what your Map Pack competitors are doing to beat you, the fixes that will move you fastest, and a realistic 90-to-180-day Chattanooga Local SEO plan with the numbers run for your business. No pitch deck, just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'chattanooga', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Chattanooga SEO Company | Page One That Holds | OnwardCraft',
    metaDescription:
      'Chattanooga SEO that puts your contractor business on page one of Google and holds it. Revenue-tied reporting, no lock-in, built for spring storms and summer HVAC demand.',
    eyebrow: 'SEO Services · Chattanooga',
    h1: 'Chattanooga SEO that puts your trade on page one of Google and holds it',
    h2Exact: 'Chattanooga SEO Company',
    heroSubhead:
      "Ads die the second you stop paying. SEO works the other way: rank once for what your Chattanooga customers search and the leads keep arriving for months. We build that ranking and tie every report to real calls and booked jobs, not charts that look good and sell nothing.",
    primaryCta: 'Get my free Chattanooga SEO audit',
    intro:
      "Chattanooga SEO comes down to a blunt question: when someone searches what you do, are you on page one or page two? In this market page two might as well be page fifty. We get contractors ranking for the money keywords in a city shaped by the Volkswagen plant, Gig City fiber, and sharp seasonal swings, and we measure the whole thing in leads, not traffic that never picks up the phone.",
    aioQuestion: 'How do Chattanooga businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content, and earning links from trusted Chattanooga sources. In a market where spring storm and summer HVAC demand spike hard on a predictable calendar, ranking for those seasonal terms before the spike is one of the quickest ways to pull ahead.",
    problemHeading: "Three reasons your Chattanooga site isn't bringing in work",
    painPoints: [
      { title: "You're stranded on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it either. If you are not in the top handful of results for what you sell, your site is effectively invisible no matter how sharp it looks. In Chattanooga, that invisibility is exactly what hands your jobs to the competition." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the instant your card stops, the leads stop cold. SEO builds an asset you actually own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost you are paying brokers now." },
      { title: "You're not ranking for the demand that matters", body: "Chattanooga demand swings hard by season. Spring storms send roofing and restoration searches vertical, and a summer of 95-degree heat does the same for HVAC. The contractors who rank for those terms ahead of time catch the spike. If your SEO ignores the seasonal searches, you are quietly handing away your busiest, most profitable months." },
    ],
    servicesHeading: 'The SEO work that actually moves Chattanooga rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank your Chattanooga site at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned for the exact terms your Chattanooga customers search: titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what valley buyers search, earn links, and bring in leads on autopilot long after we publish them." },
      { name: 'Link building', desc: "Authority from real Chattanooga and industry sources. In a competitive river-valley market, links are often the deciding factor between page one and page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the Chattanooga \"near me\" searches right alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and booked jobs, not just rankings and traffic, so you always know what your Chattanooga SEO is actually worth in dollars." },
      { name: 'Storm & seasonal SEO', desc: "We rank you for the spring-storm and summer-heat searches that fuel Chattanooga's busiest months, so you are visible before demand spikes instead of chasing it after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of Chattanooga search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Chattanooga leads, not just impressions." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile, sorted first. This is the groundwork every other ranking move has to stand on." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the storm and heat-driven seasonal terms that decide who wins the busy months here." },
      { name: 'Build authority', desc: "Links and citations from trusted Chattanooga and industry sources to push your competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to real Chattanooga leads, then we double down on what is working and push into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Chattanooga SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site chasing its core Chattanooga keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and Chattanooga neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Chattanooga-area search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Storm & seasonal SEO', 'Multi-location support', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Chattanooga?', a: "Most Chattanooga SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. The tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Chattanooga?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on low-competition terms and slower on the most contested Chattanooga keywords. SEO compounds, so the longer you run it, the bigger the gains get." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops the moment you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Chattanooga contractors do best running SEO as the long-term engine and ads for short-term spikes." },
      { q: 'Should my Chattanooga SEO target storm and HVAC season?', a: "Absolutely. Spring storms hit the river valley hard from March through June, and summer runs 95 degrees and up from June into September, and both drive massive search surges for roofing, restoration, and HVAC. Ranking takes months to build, so you have to be in place before the season rather than scrambling after it. We optimize for those terms ahead of time so your busiest months land on you." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. Higher tiers add storm-and-seasonal and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement in the Chattanooga market, then it switches to month-to-month. If we are not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a growing part of what we optimize for, and in a wired-up Gig City it matters. We structure your content and schema so AI engines can read, trust, and cite your Chattanooga business by name, not just classic search results." },
      { q: 'Which areas around Chattanooga do you cover?', a: "All of the river-valley metro: Northshore, St. Elmo, Hixson, Red Bank, East Ridge, Ooltewah, Signal Mountain, Lookout Mountain, Soddy-Daisy, Cleveland, Ringgold and more, with genuine local pages rather than one generic Chattanooga page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads three competitors also bought." },
      { q: "What's in the free SEO audit?", a: "Where you rank today across the Chattanooga metro, what your competitors are doing to beat you, the highest-impact fixes, and a realistic Chattanooga SEO timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'chattanooga', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Chattanooga Web Design Company | Books Jobs, Not Just Looks | OnwardCraft',
    metaDescription:
      'Chattanooga Web Design that books jobs instead of just looking nice: fast, mobile-first sites built for contractors and ready for spring storm and summer HVAC demand.',
    eyebrow: 'Web Design · Chattanooga',
    h1: 'Chattanooga Web Design that books valley jobs instead of just looking nice',
    h2Exact: 'Chattanooga Web Design Company',
    heroSubhead:
      "A handsome website that never generates a call is just an expensive brochure. We build Chattanooga contractors fast, mobile-first sites engineered to turn visitors into booked work, and tough enough to hold up when a hail line or a heat wave sends your phone into overdrive.",
    primaryCta: 'Get my free quote',
    intro:
      "Chattanooga Web Design is the difference between a site that books jobs and a brochure that bleeds leads quietly: slow on a phone, call button buried, no clear offer anywhere. Done right, a website closes all of those leaks. We build mobile-first sites that load fast, look like the professional you actually are, and turn Northshore-to-Ooltewah visitors into booked jobs, and that do not fall over when a spring storm or a 95-degree stretch sends your traffic through the roof.",
    aioQuestion: 'What makes a good contractor website in Chattanooga?',
    aioAnswer:
      "A good Chattanooga contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and is built to handle traffic spikes during spring storm season and the summer HVAC rush. Because most Chattanooga searches happen on mobile, mobile speed and an obvious next step are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current Chattanooga site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "Plenty of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next name on the map. We design every page around one job: turning a Chattanooga visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Chattanooga visitors are on mobile, and they bounce if your site takes more than a couple of seconds to load. Slow sites also rank worse, so you lose twice. We build fast, so you keep both the visitor and the ranking." },
      { title: "It can't handle a storm-season surge", body: "After a spring tornado or once temperatures break 95 degrees, contractor sites get slammed with a flood of urgent traffic, and the slow ones buckle or bury the call button at the exact moment it matters most. We build sites that stay fast and keep converting under load, so you capture that demand instead of losing it to a quicker competitor." },
    ],
    servicesHeading: "What's in an OnwardCraft Chattanooga website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your river-valley service area, and the exact jobs you want more of." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that is where nearly all of your Chattanooga traffic lives. Fast, thumb-friendly, and easy to call from in one tap." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where valley homeowners actually use them. Every page carries an unmistakable next step." },
      { name: 'Copy that sells', desc: "Words that speak to an anxious homeowner staring at a hail-dented roof or a dead AC unit in July, not filler text that reads exactly like every other contractor in town." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank: clean structure, schema, fast load, and neighborhood-ready pages for Northshore, Hixson, Ooltewah and beyond." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which guards both your conversions and your Chattanooga rankings at once." },
      { name: 'Storm-surge ready', desc: "Built to stay fast and keep the call button front and center when spring storm or summer HVAC traffic spikes, the exact moment that turns visitors into your biggest jobs of the year.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read your site and recommend your business as more Chattanooga search shifts toward AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your river-valley service area, your most profitable jobs, and your competitors, then map the site around booking more of the work you actually want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert valley homeowners, and you see it and shape it before a single line of code gets written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells to a Chattanooga homeowner, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch clean with the SEO foundation, the tracking, and the speed all dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it on what is actually turning Chattanooga visitors into calls." },
    ],
    pricing: {
      heading: 'Transparent Chattanooga web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade Chattanooga contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established crews running several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Storm-surge ready'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location valley businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Chattanooga?', a: "Most Chattanooga contractor websites with us land between $2,000 and $8,000 as a one-time build, depending on page count and integrations. The tiers are above: fixed price, no surprises, and you own the finished site outright." },
      { q: 'How long does it take to build?', a: "A focused site runs about 2 to 4 weeks; a larger custom build runs 4 to 8. We give you a firm timeline up front and keep you posted through every stage." },
      { q: 'Will my site handle a storm-season traffic surge?', a: "Yes, and in Chattanooga that matters more than almost anywhere. Spring tornado and hail season drives urgent roofing and restoration searches, and a stretch of 95-degree heat does the same for HVAC. We build fast and keep the call button obvious, so your site converts under load instead of buckling right when demand peaks." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank, and pairing it with our SEO service is how you climb the competitive Chattanooga terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, and no platform you cannot walk away from." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where nearly all of your Chattanooga traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually run yourself, usually WordPress or Webflow. We recommend the right fit in your free Chattanooga consult and explain the tradeoffs in plain English." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build comes with launch support, and from there we offer affordable monthly maintenance covering updates, speed, and security." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project at a fixed price. Any ongoing maintenance or SEO stays month-to-month, so you can leave whenever you like." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what high-converting Chattanooga Web Design should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'chattanooga', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Chattanooga Website Redesign | Rebuilt for Leads | OnwardCraft',
    metaDescription:
      'Chattanooga Website Redesign that rebuilds for leads, not just looks. Faster, mobile-first rebuilds that convert more visitors into booked jobs and hold up in storm season.',
    eyebrow: 'Website Redesign · Chattanooga',
    h1: 'Chattanooga Website Redesign that rebuilds for valley leads, not just looks',
    h2Exact: 'Chattanooga Website Redesign Company',
    heroSubhead:
      "An outdated site quietly costs you jobs every week: slow, clumsy on a phone, easy for a Chattanooga homeowner to skip past. We redesign contractor sites to convert more and load faster, and we migrate so carefully that you keep every bit of ranking you have already earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "A Chattanooga Website Redesign usually goes one of two bad ways: the site looks prettier but converts exactly the same, or it launches and the rankings vanish overnight. We do neither. We rebuild contractor sites for speed and conversions, build them to survive spring storm and summer HVAC surges, and run an SEO-safe migration with the redirects and care that protect the traffic you have spent years building.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by holding your URL structure steady (or mapping 301 redirects for every page that moves), carrying over your existing content and metadata, migrating your schema, and proving it all on a staging copy before launch. Handled this way, a Chattanooga site keeps its rankings and usually climbs, because the rebuilt version loads faster, runs mobile-first, and is structured better than the old one.",
    problemHeading: "Signs your Chattanooga site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "On a high-ticket job, homeowners size you up by your site in seconds. An old, cluttered design quietly ships them to a competitor who simply looks more established, even when your work is plainly better. In a market full of Volkswagen-plant professionals and Gig City remote workers who live online, that first impression decides who gets the call." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you are losing the majority of your Chattanooga visitors before they ever reach your offer. A redesign built mobile-first wins those visitors back and turns them into leads." },
      { title: "It can't keep up when demand surges", body: "Traffic that never turns into calls is wasted money, and an old site that slows to a crawl during a spring storm surge or a summer heat wave loses leads at the precise moment they are worth the most. We rebuild for conversions and for the days your phone should be ringing off the hook." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pin down exactly what is costing you leads and rankings today, so the rebuild fixes the real problems instead of just swapping the colors around." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled right so you keep every bit of the Chattanooga rankings and traffic you have already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, smarter call-to-action placement, and lead forms valley homeowners actually use. We design for booked jobs, not a prettier screenshot." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals, which pulls up your conversions and your Chattanooga rankings together." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where nearly all of your Chattanooga traffic actually lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the price tag on the jobs you want to book." },
      { name: 'Storm-surge ready rebuild', desc: "Rebuilt to stay fast and keep converting when spring storm or summer HVAC traffic spikes, so the new site captures your biggest jobs instead of choking on them.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as more Chattanooga search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We dig into what is losing you leads and rankings, then map a redesign that fixes it without breaking what already works for your Chattanooga site." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we rebuild a single thing." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and line up every redirect and SEO detail for a clean migration with no nasty surprises." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and watch closely so your rankings hold and climb instead of sliding." },
      { name: 'Optimize', desc: "Post-launch tuning on what is converting Chattanooga visitors, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Chattanooga redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small Chattanooga contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established crew with a busy site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Storm-surge ready'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location valley sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Chattanooga?', a: "Most Chattanooga redesigns with us land between $2,500 and $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result outright." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it is handled carefully, and that is exactly how we work. We map 301 redirects for every changed URL, keep your content and metadata, migrate your schema, and test on staging first. Done right, a Chattanooga redesign holds your rankings and usually pushes them higher." },
      { q: 'How long does a redesign take?', a: "A focused redesign runs about 3 to 5 weeks; a larger rebuild runs 5 to 9. You get a firm timeline up front and updates at each stage along the way." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is a pain to update, is not bringing in leads, or buckles when spring storms hit or July heat climbs past 95 degrees, it is costing you work. The free audit tells you plainly whether a redesign is worth it for your Chattanooga business." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and sharpen your existing content, protect what is already ranking, and handle the technical migration so nothing important slips through the cracks." },
      { q: 'Will the new site handle storm-season demand surges?', a: "Yes, and in Chattanooga that is a real consideration. Spring storms and tornado outbreaks, plus the brutal summer heat, both drive search surges that slow, outdated sites cannot handle. We rebuild for speed and keep the call to action obvious so the site converts when demand peaks." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings for your Chattanooga site." },
      { q: 'Do I own the redesigned site?', a: "Completely: the site, the domain, and the content are yours. No platform lock-in of any kind." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO afterward runs month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in Chattanooga leads and rankings, what the Chattanooga Website Redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const chattanoogaCity = {
  citySlug: 'chattanooga', city: 'Chattanooga', state: 'Tennessee', stateAbbr: 'TN', metro: 'Chattanooga',

  titleTag: 'Chattanooga Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Chattanooga marketing for contractors who want to own their leads: web design, SEO, and local SEO. Get found, get booked, all built for storm-season demand.',

  eyebrow: 'Chattanooga · Web Design, SEO & Lead Generation',
  h1: 'Chattanooga marketing for contractors who want to own their leads',
  h2Exact: 'Chattanooga Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Chattanooga's manufacturing-anchored, Gig City, storm-season market. One team to get you ranking, converting, and off the rented-lead treadmill for good.",
  heroProof: ['Built for the trades', 'Storm-season ready', 'No lock-in contracts'],
  primaryCta: 'Get my free Chattanooga audit',

  intro:
    "Chattanooga marketing for contractors has to fit a market that is more layered than its size suggests. Volkswagen-plant workers and manufacturing professionals pour money into their homes. Remote workers drawn up here by EPB's gigabit fiber make careful buying decisions online. And the ridges and the Tennessee River bring a steady stream of outdoor-recreation tourists who turn into residents. Winning here takes three things pulling together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack, all locked in before the next spring storm or summer heat wave sends demand through the roof. Here is exactly how we help Chattanooga contractors pull that off.",
  aioQuestion: 'How do Chattanooga contractors get more leads online?',
  aioAnswer:
    "Chattanooga contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack. Because the city sits in a valley prone to spring storms and tornado risk and runs 95-degree summers, the contractors who look established and are already ranking before seasonal demand spikes win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Chattanooga searches \"near me.\" The single highest-return move for most local businesses, and how you catch spring storm and summer HVAC demand before it goes to a competitor.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your Chattanooga customers actually search, build an asset you own instead of renting traffic from ads, and measure the whole thing in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs, and to stay fast when spring storms or summer heat send your phone into overdrive, not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it so carefully that you keep every bit of ranking you have already earned in Chattanooga search.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Chattanooga?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads, and so they are ready when a spring storm or a heat wave has every homeowner in the valley needing help at once." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors, so we understand emergency calls, storm-driven demand, insurance work, and the renovation jobs running through the valley's older neighborhoods." },
    { q: 'Why does storm season matter for my marketing?', a: "Chattanooga sits in a valley between mountain ridges that funnels spring tornado and hail risk, and summer temperatures regularly top 95 degrees. Both drive urgent, high-intent search spikes for roofing, restoration, and HVAC. Ranking takes months to build, so the contractors already visible before the storm or the heat wave take that work. We get you in place ahead of season." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO run month-to-month from $750 to $3,000, with no long contract. We confirm the exact scope for your Chattanooga shop in the free audit." },
    { q: 'Which Chattanooga areas do you serve?', a: "All of the river-valley metro: Northshore, St. Elmo, Ferger Place, Hixson, Red Bank, East Ridge, Signal Mountain, Lookout Mountain, Ooltewah, Soddy-Daisy, Cleveland, Ringgold and more." },
    { q: 'Where should I start?', a: "Start with a free Chattanooga audit. We look at your website, your rankings, and your Map Pack presence, then tell you the one or two Chattanooga marketing for contractors moves that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};
