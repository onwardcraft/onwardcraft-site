// CHARLOTTE: per-metro x per-service local landing pages + city hub.
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
// CHARLOTTE: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Charlotte takes more than showing up',
  body:
    "Charlotte is one of the Sun Belt's fastest-growing cities, now past 900,000 residents inside a metro nearing 2.7 million, and the new arrivals never stop. Every month brings fresh homeowners and a fresh batch of contractors chasing the same jobs. Two things drive demand here. This is a banking town: Bank of America, Wells Fargo, and Truist all run their towers uptown, and the well-paid homeowners in Ballantyne, SouthPark, and Myers Park will gladly pay for craftsmanship, but they hire the contractor who reads as legitimate on their phone, not the one buried on page two. The weather does the rest. Humid subtropical summers drive HVAC calls straight up from May through September, and the ice storms that roll in during January and February (the ones that close schools and snap power lines) set off overnight runs on roofing, burst-pipe, and structural repair. The suburbs are filling fast too: Huntersville, Cornelius, Davidson, Mooresville, and Fort Mill just over the South Carolina line are packed with transplants who have no contractor saved in their phone and are searching for one tonight. Whoever already sits in the Map Pack when that search happens books the job.",
  pullQuote: 'In a banking town with picky homeowners, the contractor who looks established online is the one who gets the call.',
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
  seasonCaption: 'HVAC season (May to Sep) plus ice and storm damage (Jan to Feb, Mar to May)',
  seasonalDemand: [
    { m: 'J', v: 76, peak: true }, { m: 'F', v: 72, peak: true }, { m: 'M', v: 68, peak: true },
    { m: 'A', v: 62, peak: true }, { m: 'M', v: 82, peak: true }, { m: 'J', v: 94, peak: true },
    { m: 'J', v: 98, peak: true }, { m: 'A', v: 96, peak: true }, { m: 'S', v: 88, peak: true },
    { m: 'O', v: 52 }, { m: 'N', v: 46 }, { m: 'D', v: 54 },
  ],
  stats: [
    { value: '2.7M+', label: 'people across the Charlotte metro' },
    { value: '~64%', label: 'of local searches here happen on a phone, usually "near me"', accent: true },
    { value: 'May-Sep', label: 'HVAC peak season in a humid subtropical climate' },
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
  "Let me be honest about why OnwardCraft exists. I got tired of watching skilled contractors wire a few thousand dollars a month to Angi and HomeAdvisor for leads that three of their competitors bought in the same breath. A business built on rented leads is a business you do not really own. So our entire job is simple: get you ranking and converting for the work you want, in the Charlotte neighborhoods you actually serve, with leads that belong to you and nobody else. No 12-month handcuffs either. The day it stops working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We know what a Charlotte summer does to a compressor, what an ice storm does to your phone, and how carefully a SouthPark or Ballantyne homeowner vets a contractor. Everything we build is shaped around how your buyers actually search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The point is a pipeline you control. Not one more monthly invoice to a broker reselling the same Charlotte homeowner to three of your competitors.",
  },
  {
    title: 'We actually speak Charlotte',
    body: "Targeting that goes block by block from Myers Park to Fort Mill, HVAC demand that detonates in May, and roofing calls that flood in the morning after an ice storm. The kind of thing a national agency cannot fake by dropping a city name into a template.",
  },
  {
    title: 'No contracts, no mystery',
    body: "Prices you can read on the page, reporting tied to actual leads, month-to-month once the first 90 days are up. If we are not earning it, you walk. That keeps every bit of the pressure on us, where it belongs.",
  },
];

const PROOF = {
  heading: "We are new, so here is the honest math instead of a logo wall",
  body:
    "Plenty of agencies will flash a grid of client logos at you. We are a young, founder-led shop, and we are not going to fake a track record we have not built yet. What we can hand you is the reasoning behind why this works, pulled straight from Google's and the industry's own research on how people search for local services.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here is a rough picture, and we are labelling it plainly as a projection rather than a result we are claiming: say a Charlotte contractor pulls roughly 1,800 local \"near me\" impressions a month across a handful of neighborhoods. Climbing from page-two invisibility into the top three is the gap between a few stray calls and a calendar that stays full, and in a Sun Belt market adding people this fast, that gap stretches wider every month another competitor sets up shop. In your free audit we model the real figures for your business: your current rankings, your search volume, and a straight 90-to-180-day path.",
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
    titleTag: 'Charlotte Local SEO Company | OnwardCraft',
    metaDescription:
      'Charlotte Local SEO that pins your business to the Map Pack. We get you into the top three so the call lands with you, not your competitor. Free audit.',
    eyebrow: 'Local SEO · Charlotte, NC',
    h1: 'Charlotte Local SEO that puts your business in the Map Pack for Ballantyne and SouthPark',
    h2Exact: 'Charlotte Local SEO Company',
    heroSubhead:
      "Type any service plus \"near me\" and Google pins exactly three businesses to the map. Everyone below those three is effectively invisible. We get you into that top three for your Charlotte neighborhoods, so the call comes to you instead of whoever happened to rank first, and so you are already there when the next HVAC season or ice storm sends demand straight up.",
    primaryCta: 'Get my free Charlotte audit',
    intro:
      "Charlotte local SEO really comes down to a single question: when a homeowner in Myers Park or Huntersville taps in your service plus \"near me,\" are you one of the three businesses Google fixes to the map? Most people pick one of those three and never scroll an inch further. The metro keeps swelling, new residents land here every month from up north and overseas, and every one of them is hunting for a local contractor they can trust. Earning one of those three spots is the entire contest. Here is how you win it.",
    aioQuestion: 'How do Charlotte businesses rank higher in local search?',
    aioAnswer:
      "You rank by nailing four things: a Google Business Profile tuned to the exact services and neighborhoods you want, name, address, and phone details that match everywhere Google checks, a steady stream of genuine reviews, and local content built around real Charlotte neighborhoods. Because Charlotte is a fast-growing banking hub with seasonal HVAC demand and recurring ice-storm surges, the businesses that win look established, answer emergencies fast, and are already ranking before summer heat and winter ice send the spikes.",
    problemHeading: "If your phone is quiet, it is usually one of these three",
    painPoints: [
      { title: 'Competitors own all three spots on the map', body: "Pull up your own service plus \"near me\" right now. Those three businesses Google pins to the map collect the lion's share of the clicks. If you are not one of them, the quality of your work barely registers, because most people never lay eyes on your name. Cracking that top three for Myers Park, Ballantyne, Huntersville, or wherever you swing a hammer is usually the highest-return move a Charlotte contractor can make all year." },
      { title: "You are paying for leads you will never own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Charlotte homeowner to four contractors at once, then charge each of you to brawl over them. It is a treadmill with no off switch. Local SEO builds the opposite arrangement: the lead finds you, calls you, and nobody else got a copy. Month by month you stop renting and start owning the pipeline." },
      { title: "You are not ready when demand spikes", body: "Charlotte's humidity pushes HVAC demand vertical in May and keeps it there through September. Then in January and February one ice storm can lock the whole city down and trigger overnight runs on roofing, burst-pipe, and structural calls. If you are missing from the map when those searches hit, the work goes to whoever Google already trusts. Ranking now is how you ride that wave instead of watching it." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The single biggest lever in the Map Pack. We tune your categories, services, service area, photos, and posts so Google knows precisely which Charlotte searches belong to you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to line up everywhere Google looks. We repair the listings that contradict each other and build the ones you are missing." },
      { name: 'Reviews that keep coming', desc: "A no-fuss system that turns finished jobs into a steady drip of reviews. It lifts your ranking and gets people dialing, which matters double for the SouthPark and Ballantyne homeowners who actually read every word before hiring." },
      { name: 'Neighborhood pages', desc: "Real pages for Myers Park, Dilworth, Ballantyne, Huntersville, Fort Mill, and the rest, so you rank for the exact neighborhood someone is searching instead of a generic \"Charlotte.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The quiet plumbing under the hood that lets everything else climb." },
      { name: 'Local link building', desc: "Mentions and links from Charlotte sources Google respects: local press, business groups, partners. In this market that is often what divides page one from page two." },
      { name: 'Seasonal demand targeting', desc: "We get your profile, pages, and reviews ranking before HVAC season and before the winter ice arrives, so you catch the demand spike instead of scrambling once it has already passed you.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now kicks off inside AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you by name.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you genuinely rank today across your Charlotte neighborhoods and suburbs, then pin down which competitors are beating you in the Map Pack and exactly why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move fastest. You will usually notice the early lift here inside a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is precisely why local SEO rewards the contractor who starts now over the one who waits." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages from uptown Charlotte out to Fort Mill and Lake Norman, plus the on-page work that backs them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go claim the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For contractors fighting across several Charlotte neighborhoods.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across the Charlotte metro.', features: ['Everything in Local Growth', 'Local link building', 'Seasonal demand targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Charlotte?', a: "Most Charlotte engagements land between $750 and $2,500 a month, set by how many neighborhoods and keywords you are chasing. The tiers sit right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit before you commit a dollar." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move inside a few weeks. The competitive Charlotte keywords usually need 90 to 180 days of steady work, because reviews and citations only compound with time. In a market growing this fast, anyone promising you page one in 30 days is selling you something." },
      { q: 'What makes Charlotte local SEO different?', a: "Two things. It is a fast-growing Sun Belt market where new residents and new competitors land constantly, so trust signals like reviews and matching listings carry real weight. And demand swings hard with the calendar: HVAC calls spike May through September, and winter ice storms create overnight surges. Your ranking has to already be in place before the season, never after." },
      { q: 'How does local SEO help me during Charlotte\'s HVAC season?', a: "Charlotte's humid subtropical summers run HVAC demand straight up from May to September, and the businesses already sitting in the Map Pack take those calls. We get you ranking and reviewed ahead of summer so you ride that demand instead of fighting for leftovers after everyone else is booked solid." },
      { q: 'What about ice storms, do those create a local SEO opportunity?', a: "Absolutely. Charlotte's January and February ice storms are infamous for shutting the city down and setting off overnight runs on roofing, burst-pipe, and structural calls. Homeowners search in a panic for a contractor they can trust. If you are already ranking and reviewed, those calls come to you. If you are not, they go to whoever is." },
      { q: 'Which areas do you cover?', a: "All of Charlotte and the metro around it: Myers Park, SouthPark, Dilworth, NoDa, Plaza Midwood, Ballantyne, Huntersville, Cornelius, Davidson, Mooresville, Fort Mill, Gastonia, Concord, Belmont, and the Lake Norman communities. We build genuine neighborhood pages rather than one catch-all Charlotte page." },
      { q: 'Do you work with contractors specifically?', a: "It is very nearly all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand seasonal demand, emergency calls, and the high bar in Charlotte's affluent neighborhoods, and we build your local SEO around every bit of it." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More \"near me\" research now starts inside AI instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It is fast becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that is roughly how long local SEO needs to show real movement. After that it is month-to-month. If we are not delivering, you walk, and the accountability stays squarely on us." },
      { q: "What is in the free audit?", a: "A clear read on where you rank today across your Charlotte neighborhoods, what your Map Pack competitors are doing to beat you, the fixes that will move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. It is the fastest way to see what Charlotte Local SEO can actually do for your phone. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'charlotte', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Charlotte SEO Company | OnwardCraft',
    metaDescription:
      'Charlotte SEO that ranks contractors on Google and delivers leads you own. Revenue-tied reporting, no lock-in, built for a fast-growing Sun Belt market.',
    eyebrow: 'SEO Services · Charlotte, NC',
    h1: 'Charlotte SEO that gets you to the top of Google and keeps you there through every HVAC season',
    h2Exact: 'Charlotte SEO Company',
    heroSubhead:
      "Ads die the instant you stop paying. SEO does the reverse: rank once for what your Charlotte customers search and the leads keep arriving. We build that ranking and tie every report to real calls and booked jobs, not traffic numbers nobody can spend.",
    primaryCta: 'Get my free Charlotte SEO audit',
    intro:
      "Charlotte SEO boils down to one question: when someone searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in a fast-growing Sun Belt market full of well-paid homeowners who search on their phones and hire whoever reads as most credible, and we measure the whole thing in leads rather than vanity traffic.",
    aioQuestion: 'How do Charlotte businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the site's technical foundation, tuning each page to the exact terms customers search, publishing genuinely useful local content tied to specific Charlotte neighborhoods, and earning links from trusted local sources. In a fast-growing banking hub with seasonal HVAC demand and recurring ice-storm surges, ranking for those high-intent seasonal terms ahead of the season is one of the quickest ways to pull clear of the competition.",
    problemHeading: "Three reasons your Charlotte site is not bringing in work",
    painPoints: [
      { title: "You are stranded on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. If you are not in the top handful of results for what you sell, your site is effectively invisible no matter how sharp it looks. In a city where the homeowners in SouthPark and Ballantyne run real research before they hire, that invisibility quietly drains money every single week." },
      { title: "You are renting traffic from Google Ads", body: "Ads can do a job, but the moment your card stops, the leads stop with it. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost. In Charlotte's expanding market, that compounding edge matters a little more every month it runs." },
      { title: "You are not ranking for the demand that pays", body: "Charlotte demand swings hard with the seasons. HVAC search volume spikes May to September, and one January ice storm sets off overnight runs on roofing, burst-pipe, and structural calls across the metro. The contractors who rank for those terms ahead of time catch the spike. If your SEO ignores seasonal and emergency searches, you are handing away your busiest weeks of the year." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned to the exact terms your Charlotte customers search: titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers ask, earn links, and pull in leads while you are out on a job." },
      { name: 'Link building', desc: "Authority from real Charlotte and industry sources. In a competitive, growing market, links are often the deciding factor between page one and page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across your neighborhoods right alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads, not just rankings and traffic, so you always know exactly what your SEO is worth in dollars." },
      { name: 'Seasonal & emergency SEO', desc: "We rank you for the HVAC terms that drive Charlotte's May-to-Sep season and the storm-damage terms that surge after a winter ice event, so you are visible before demand peaks, not chasing it after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, since a growing share of search now begins right there.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Charlotte leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile, the foundation everything else needs in order to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus fresh local content, including the seasonal and emergency terms that matter so much here." },
      { name: 'Build authority', desc: "Links and citations from trusted Charlotte and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what is working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Charlotte SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and Charlotte neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For contractors that want to own Charlotte search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal & emergency SEO', 'eCommerce / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Charlotte?', a: "Most Charlotte SEO engagements run $900 to $3,000 a month, set by how competitive your keywords are and how much content and link work you need. The tiers are right above, with no hidden fees and no long contract to sign." },
      { q: 'How long does SEO take to work in Charlotte?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on lower-competition suburban terms and slower on the most competitive Charlotte keywords. SEO compounds, so the gains keep stacking the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops the second you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Charlotte contractors do best with SEO as the long-term engine and ads for short bursts during HVAC season or right after a storm." },
      { q: 'Should my Charlotte SEO target seasonal demand?', a: "Yes. Charlotte's humidity drives HVAC searches to peak from May through September, and a January ice storm can create an overnight surge in roofing and pipe calls across the metro. Ranking takes months to build, so you have to be in place before the season rather than chasing it after. We optimize for those seasonal and emergency terms ahead of time." },
      { q: "What is included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal and emergency plus AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it shifts to month-to-month. If we are not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search results." },
      { q: 'Which areas around Charlotte do you cover?', a: "The whole Charlotte metro: Myers Park, SouthPark, Dilworth, Ballantyne, NoDa, Plaza Midwood, Huntersville, Cornelius, Davidson, Mooresville, Fort Mill, Gastonia, Concord, and the Lake Norman communities, with genuine local pages instead of one catch-all Charlotte page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads straight to you. The more you own your search visibility, the less you have to depend on paying brokers for leads three competitors also bought." },
      { q: "What is in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. It is the clearest way to see what Charlotte SEO can earn you in real leads. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'charlotte', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Charlotte Web Design Company | OnwardCraft',
    metaDescription:
      'Charlotte web design that turns visitors into booked jobs. Fast, mobile-first sites built for contractors serving a high-income, fast-growing market.',
    eyebrow: 'Web Design · Charlotte, NC',
    h1: 'Charlotte web design that turns Myers Park and SouthPark visitors into booked jobs',
    h2Exact: 'Charlotte Web Design Company',
    heroSubhead:
      "A pretty website that never rings the phone is just a brochure. We build Charlotte contractors fast, mobile-first sites engineered to turn visitors into booked work, and to look credible enough to earn the trust of the high-income homeowners in SouthPark and Ballantyne who scrutinize everyone they hire.",
    primaryCta: 'Get my free quote',
    intro:
      "Charlotte web design is the difference between a website that books work and one that bleeds leads quietly: slow on a phone, the call button buried, no clear offer anywhere in sight. Done right, it closes all of those leaks. We build sites that load fast, look like the professional you already are, and turn Myers-Park-to-Mooresville visitors into booked jobs, built for a market where a homeowner's very next step is comparing you to two other contractors on the same phone.",
    aioQuestion: 'What makes a good contractor website in Charlotte?',
    aioAnswer:
      "A good Charlotte contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific Charlotte neighborhoods you serve. Because Charlotte's high-income homeowners in SouthPark and Ballantyne research carefully before hiring, social proof and a professional look carry more weight here than in many markets, and because most searches happen on mobile, speed and an obvious next step are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site is not bringing in work",
    painPoints: [
      { title: "It is a brochure, not a lead engine", body: "Plenty of contractor sites just list services and go quiet. No clear offer, no obvious next step, no reason to call you over the next guy. In Charlotte, a homeowner in Ballantyne comparing contractors on their phone picks the one whose site looks most credible and makes calling effortless. We design every page around a single job: turning a visitor into a booked lead." },
      { title: "It is too slow on a phone", body: "Most of your Charlotte visitors are on mobile, and they bounce if your site needs more than a few seconds to load. Slow sites rank worse too. We build fast, so you keep both the visitor and the ranking." },
      { title: "It does not look the part for Charlotte's market", body: "Charlotte has a well-educated, high-income homeowner base, especially across Myers Park, SouthPark, and Dilworth, and they form snap judgments about a contractor's credibility from the website alone. A dated or generic site quietly sends them to a competitor who looks more established. We build sites that match the quality of your actual work." },
    ],
    servicesHeading: "What is in an OnwardCraft Charlotte website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your Charlotte neighborhoods, and the jobs you genuinely want more of." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that is where nearly all of your Charlotte traffic lives. Fast, thumb-friendly, easy to call from in one tap." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where people actually use them. Every page carries a next step." },
      { name: 'Copy that sells', desc: "Words that speak to an anxious homeowner and book the job, not filler that reads like every other contractor in town." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank: clean structure, schema, fast load, and neighborhood-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both your conversions and your rankings." },
      { name: 'Neighborhood-targeted pages', desc: "Pages built around the Charlotte neighborhoods you serve, from Dilworth and NoDa out to Huntersville and Fort Mill, so you stand out in a crowded market instead of blending into one generic city page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more of search shifts over to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your Charlotte neighborhoods, your best jobs, and your competitors, then map the site around booking more of the work you actually want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert. You see it and shape it before a single line of code gets written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what is actually converting." },
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
      { q: 'How much does a website cost in Charlotte?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, set by page count and integrations. The tiers are right above: fixed price, no surprises, and you own the finished site outright." },
      { q: 'How long does it take to build?', a: "A focused site takes roughly 2 to 4 weeks; a larger custom build runs 4 to 8. We hand you a firm timeline up front and keep you posted through every stage." },
      { q: 'Will my site help me stand out in Charlotte\'s market?', a: "That is the entire point. Charlotte's homeowners, especially across SouthPark, Myers Park, and Ballantyne, research contractors carefully and judge fast on the website. We build around the specific neighborhoods you serve, keep the site quick, and make the offer and call button impossible to miss, so yours is the one that earns the inquiry." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank, and pairing it with our SEO service is how you climb the competitive Charlotte terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platform you cannot leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where nearly all of your Charlotte traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage yourself, usually WordPress or Webflow. We will recommend the right fit in your free consult and lay out the tradeoffs in plain terms." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month, so you can leave whenever you like." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Charlotte site should include, and a fixed-price quote with a timeline. It is a no-pressure way to see exactly what Charlotte Web Design can do for your booked-job count. Just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'charlotte', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Charlotte Website Redesign | OnwardCraft',
    metaDescription:
      'Charlotte Website Redesign that converts more without losing rankings. Faster, mobile-first rebuilds that turn visitors into booked jobs in a fast-growing market.',
    eyebrow: 'Website Redesign · Charlotte, NC',
    h1: 'Charlotte Website Redesign that converts more without losing your hard-won rankings',
    h2Exact: 'Charlotte Website Redesign Company',
    heroSubhead:
      "An outdated site quietly costs you jobs every week: slow, clumsy on a phone, easy to scroll past. We redesign Charlotte contractor sites to convert more and load faster, and we migrate with such care that you keep every bit of ranking you have already earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "A Charlotte Website Redesign usually goes one of two bad ways: the site looks sharper but converts exactly the same, or it launches and the rankings vanish overnight. We refuse both outcomes. We redesign Charlotte contractor sites for speed and conversions, build them to look credible to the high-income homeowners who do their homework, and migrate with the redirects and SEO-safe care that protect the traffic you have already built.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign holds your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Charlotte site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and quietly costs you trust", body: "Charlotte's homeowners, especially across Myers Park, SouthPark, and Dilworth, size you up by your site in seconds. An old, cluttered design sends them off to a competitor who looks more established before they ever read a word. In a market with this much competition and this many high-income households, that trust gap gets expensive fast." },
      { title: "It is slow and awkward on a phone", body: "If your site is clunky or slow on mobile, you are losing the majority of your Charlotte visitors before they ever reach your offer. A redesign built mobile-first wins them back." },
      { title: "It disappears into the competition", body: "Charlotte's contractor market grows fast, with new businesses arriving on every wave of Sun Belt migration. A generic old site gives a visitor no reason to choose you over the next result down the page. We rebuild for conversions and for the specific neighborhoods you serve, so the right buyers land on you." },
    ],
    servicesHeading: "What is in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what is costing you leads and rankings today, so the redesign fixes real problems instead of just swapping colors around." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep every ranking and every visitor you have already earned." },
      { name: 'Conversion redesign', desc: "Clearer offers, smarter call-to-action placement, and lead forms people actually use. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals, which helps both conversions and rankings at once." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where nearly all of your Charlotte traffic already lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the expectations of Charlotte's professional homeowner base." },
      { name: 'Neighborhood-targeted rebuild', desc: "Rebuilt around the Charlotte neighborhoods and suburbs you serve, from Plaza Midwood out to Mooresville, so the new site stands out in a growing, competitive market instead of reading like everyone else's.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search keeps shifting toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what is losing you leads and rankings, then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build a thing." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and watch closely so rankings hold and climb, not drop." },
      { name: 'Optimize', desc: "Post-launch tuning based on what is converting, plus ongoing speed and updates." },
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
      { q: 'How much does a website redesign cost in Charlotte?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, set by size and integrations. Fixed price, no surprises, and you own the result outright." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it is done carefully, and that is exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign runs roughly 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and an update at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated next to competitors, is a pain to update, or simply is not turning visitors into calls in a market this competitive, it is costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and sharpen your existing content, preserve what is ranking, and handle the technical migration so nothing important slips through the cracks." },
      { q: 'Will the redesign help me compete in Charlotte\'s market?', a: "Yes, and that is the whole point in a market that keeps growing. We rebuild around the specific Charlotte neighborhoods you serve, keep the site fast, and make the offer and call button obvious, so the new site stands out to the high-income, research-minded homeowners who compare contractors on their phones." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely: the site, the domain, and the content. No platform lock-in of any kind." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What is in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan. It shows you plainly whether a Charlotte Website Redesign will pay for itself in booked jobs." },
    ],
  },
];

export const charlotteCity = {
  citySlug: 'charlotte', city: 'Charlotte', state: 'North Carolina', stateAbbr: 'NC', metro: 'Charlotte',

  titleTag: 'Charlotte Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Charlotte marketing for contractors: web design, SEO, and local SEO. Get found, get booked, and own your leads instead of renting them in a fast-growing Sun Belt market.',

  eyebrow: 'Charlotte · Web Design, SEO & Lead Generation',
  h1: 'Charlotte marketing for contractors that gets you found and booked across the metro',
  h2Exact: 'Charlotte Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Charlotte's fast-growing Sun Belt market and its high-income homeowners. One team to get you ranking, converting, and off the rented-lead treadmill for good.",
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Charlotte audit',

  intro:
    "Charlotte marketing for contractors has to fit one of the fastest-growing cities in the Southeast: a banking hub where the homeowners in SouthPark and Ballantyne carry real budgets but hire whoever looks most credible online, where HVAC demand bakes in from May to September, and where a single January ice storm can send roofing and pipe calls vertical by morning. Winning here takes three things pulling together: a site that converts, SEO that ranks you for what people search, and local SEO that plants you in the Map Pack for the neighborhoods you serve. Here is how we help Charlotte contractors do exactly that.",
  aioQuestion: 'How do Charlotte contractors get more leads online?',
  aioAnswer:
    "Charlotte contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack neighborhood by neighborhood. Because the market is growing fast and homeowners in Charlotte's affluent areas research contractors carefully online before they call, looking credible and being easy to find on a phone are what separate the contractors who stay booked from the ones who keep paying for shared leads.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Break into the three businesses Google pins to the map when Charlotte searches \"near me.\" The highest-return move for most local contractors, and how you catch HVAC season and winter storm demand.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers genuinely search, build an asset you own instead of renting traffic from ads, and measure it in leads rather than vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs and to look credible enough to earn the trust of Charlotte's high-income homeowners, not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it carefully so you keep every bit of ranking you have already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Charlotte?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients pair a high-converting website with SEO and local SEO so they rank, convert, and own their leads in a market that keeps getting tougher." },
    { q: 'Do you work only with contractors?', a: "Very nearly. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors, so we understand HVAC season, ice-storm surge calls, and the high bar that comes with serving Charlotte's professional homeowner base." },
    { q: 'Why does Charlotte\'s market need a different approach?', a: "It is a fast-growing Sun Belt city with a well-educated, high-income homeowner base that researches contractors carefully online. The suburbs are filling with transplants who have no local contractor relationship yet. And demand swings hard with the seasons: HVAC from May to September, storm damage in winter and spring. Winning here means looking credible, ranking in the right neighborhoods, and being in place before demand peaks." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm the exact scope in your free audit." },
    { q: 'Which Charlotte areas do you serve?', a: "The whole Charlotte metro: Myers Park, SouthPark, Dilworth, NoDa, Plaza Midwood, Ballantyne, Huntersville, Cornelius, Davidson, Mooresville, Fort Mill, Gastonia, Concord, Belmont, and the Lake Norman communities." },
    { q: 'Where should I start?', a: "Start with a free Charlotte audit. We will look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. It is the simplest first step into Charlotte marketing for contractors that actually fills your calendar. No pitch deck, just a plan." },
  ],
};
