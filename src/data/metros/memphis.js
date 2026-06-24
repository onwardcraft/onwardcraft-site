// MEMPHIS: per-metro x per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Memphis's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// MEMPHIS: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why the Memphis search market is wide open right now',
  body:
    "Memphis hugs the bend of the Mississippi River in western Tennessee, and that location quietly decides who wins home-services work here. The city itself holds roughly 630,000 people, while the wider metro of about 1.3 million stretches across Shelby County and dips south into Desoto County, Mississippi. Two things keep contractor phones ringing all year. The first is severe weather: the Mississippi River valley funnels storms straight through the region every spring, so when a tornado or a straight-line wind event rips across Midtown or Bartlett, roofing and restoration crews are slammed by the next morning. The second is the heat. Summers here feel a lot like New Orleans, where punishing humidity stacked on top of 95-degree days chews through building materials, pushes HVAC units past their limit, and quietly turns mold remediation into steady year-round work. Add the old housing stock, with thousands of pre-1970 homes in historic pockets like Cooper-Young and Midtown that need genuine renovation rather than a quick face-lift, and the demand is real. Memphis runs cost-conscious overall, yet East Memphis, Germantown, Collierville, and Bartlett hold serious household income. Best of all, the local SEO field is thinner here than in bigger metros, so a contractor who plants a flag now can own a neighborhood long before the competition wakes up.",
  pullQuote: 'In a city where spring storms and summer humidity set the work calendar, whoever ranks before the season arrives is the one who books it.',
  donut: {
    title: 'Memphis population by race',
    value: 63,
    centerLabel: 'Black / African American',
    legend: [
      { label: 'Black / African American', pct: 63, kind: 'teal' },
      { label: 'All other residents', pct: 37, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes in Memphis',
  seasonCaption: 'Storm roofing (Mar-May), HVAC (Jun-Sep), winter heating (Nov-Feb)',
  seasonalDemand: [
    { m: 'J', v: 62, peak: true }, { m: 'F', v: 60, peak: true }, { m: 'M', v: 90, peak: true },
    { m: 'A', v: 95, peak: true }, { m: 'M', v: 88, peak: true }, { m: 'J', v: 82, peak: true },
    { m: 'J', v: 92, peak: true }, { m: 'A', v: 90, peak: true }, { m: 'S', v: 78, peak: true },
    { m: 'O', v: 50 }, { m: 'N', v: 65, peak: true }, { m: 'D', v: 68, peak: true },
  ],
  stats: [
    { value: '1.3M', label: 'people across the Memphis metro' },
    { value: '~63%', label: 'of Memphis residents are Black or African American', accent: true },
    { value: 'Mar-May', label: 'tornado season, when roofing and restoration demand surges' },
    { value: 'Top 3', label: 'Map Pack spots that grab most of the clicks in a thinner field' },
  ],
  neighborhoods: [
    'Midtown', 'Cooper-Young', 'Overton Square', 'East Memphis', 'Germantown',
    'Collierville', 'Bartlett', 'Cordova', 'Lakeland', 'Arlington',
    'Southaven', 'Olive Branch', 'Whitehaven', 'Frayser', 'Hickory Hill',
  ],
};

const AREAS = [
  'Midtown', 'Cooper-Young', 'Overton Square', 'East Memphis', 'Germantown',
  'Collierville', 'Bartlett', 'Cordova', 'Lakeland', 'Arlington',
  'Southaven', 'Olive Branch', 'Downtown Memphis', 'Whitehaven', 'Hickory Hill',
];

const FOUNDER =
  "Let me be honest about why OnwardCraft exists. I got tired of watching solid Memphis contractors wire a few thousand dollars a month to Angi and HomeAdvisor for the same leads three of their competitors had already bought. Rented leads are not a business, they are a treadmill. So our entire job is simple: get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and make those leads yours to keep. No year-long handcuffs. If the phone is not ringing, you cut us loose.";

const WHY = [
  {
    title: 'We only work with the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, and GCs. We get the spring storm roofing rush, the way Mississippi River humidity feeds mold and HVAC work, and the older Cooper-Young and Midtown homes that need real renovation. Everything we build follows how Memphis homeowners actually search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The point is a pipeline you own outright. Not one more monthly bill to a lead broker for homeowners three competitors also bought, which in a price-sensitive market like Memphis just drags everyone into a bidding war.",
  },
  {
    title: 'We actually know Memphis',
    body: "Targeting that goes block by block from Germantown to Midtown to Southaven, backed by a real read on these communities. That is the part a national shop can never copy by swapping a city name into a template.",
  },
  {
    title: 'No contracts, nothing hidden',
    body: "Prices you can read, reporting tied to actual leads, month-to-month once the first 90 days are done. If we stop earning it, you walk. That keeps the pressure where it should sit, on us.",
  },
];

const PROOF = {
  heading: "We are new, so here is the honest math instead of a logo wall",
  body:
    "Plenty of agencies will wave a grid of client logos at you. We are a young, founder-led shop, so we are not going to fake a track record we have not built yet. What we will show you is why this approach works, drawn straight from Google's and the industry's own research on how people search locally.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Picture this, and we are clearly calling it a projection rather than a result we claim: say a Memphis contractor pulls roughly 1,200 local \"near me\" impressions a month across a few neighborhoods. Climbing from page-two invisibility into the top three is the gap between a slow trickle of calls and a calendar that fills itself. And because the field here is thinner than in the big metros, that climb is usually quicker and cheaper than it would be elsewhere. In your free audit we model the actual numbers for your business: your rankings, your search volume, and a straight 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Memphis', state: 'Tennessee', stateAbbr: 'TN', metro: 'Memphis',
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const memphisLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'memphis', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Memphis Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Memphis Local SEO that puts your business in the three spots Google pins to the map, so the call lands with you well before storm season hits.',
    eyebrow: 'Local SEO · Memphis, TN',
    h1: 'Memphis Local SEO that gets you found when neighbors search your trade',
    h2Exact: 'Memphis Local SEO Company',
    heroSubhead:
      "Google pins just three businesses to the map when someone searches \"near me,\" and everyone below them might as well be invisible. In Memphis we get you into that top three for your neighborhoods before storm season or the summer heat wave lands, so the call rings your phone instead of whoever happened to rank first.",
    primaryCta: 'Get my free Memphis audit',
    intro:
      "Memphis local SEO really comes down to a single question: when a homeowner in Germantown or Midtown types your service plus \"near me,\" are you one of the three businesses Google drops onto the map? Most people tap one of those three and never scroll an inch further. The competition for those spots is lighter here than in the big metros, so a contractor who moves now can lock down a neighborhood before anyone else notices the opening. Here is how it gets done.",
    aioQuestion: 'How do Memphis businesses rank higher in local search?',
    aioAnswer:
      "You climb by nailing four things: a Google Business Profile tuned to the exact services and neighborhoods you want, name-address-phone listings that stay consistent across the web, a steady drip of real reviews, and local content tied to actual Memphis neighborhoods. Because demand here arrives in waves (storm roofing in spring, HVAC in summer, heating in winter), getting ranked before each wave is what makes the difference. And since the field is thinner here, early movers tend to hold their positions far longer than they would in a crowded metro.",
    problemHeading: "If your phone has gone quiet, it is usually one of these three",
    painPoints: [
      { title: 'Competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now and look at the three businesses Google pins up top. They soak up most of the clicks. If your name is not there, the quality of your work barely matters because most people never lay eyes on it. The upside in Memphis is that those spots are less crowded than in bigger cities, so claiming one is realistic with steady, focused effort." },
      { title: "You are paying for leads that are never yours", body: "Angi, Thumbtack, and HomeAdvisor sell the same Memphis homeowner to four contractors, then charge each of you to undercut the others on price. In a cost-conscious market, that race to the bottom bleeds everyone. Local SEO flips it: a lead finds you, calls you, and no one else touched it. Over time you stop renting and start owning the pipeline." },
      { title: "You are missing the seasonal surges", body: "Memphis runs on three demand seasons: storm damage in spring, HVAC failures in the summer heat, and heating emergencies in winter. The contractors already ranked when each surge lands grab the busiest weeks of the year. The ones who start climbing after the storms roll through miss most of the work." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The single biggest lever in the Map Pack. We tighten up your categories, services, service area, photos, and posts so Google knows exactly which Memphis searches belong to you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone need to match everywhere Google looks. We correct the listings that contradict each other and build the ones that are missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished Memphis jobs into a steady stream of reviews. It lifts your ranking and gives homeowners the nudge to call." },
      { name: 'Neighborhood pages', desc: "Real pages for Germantown, Collierville, Bartlett, Cooper-Young, Southaven, and the rest, so you rank for the neighborhood someone is actually searching, not a generic \"Memphis.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing beneath the surface that lets everything else rank in the first place." },
      { name: 'Local link building', desc: "Mentions and links from Memphis sources Google trusts: local press, chambers, trade associations, partners. This is what tends to separate page one from page two here." },
      { name: 'Seasonal demand targeting', desc: "We rank you for storm roofing in spring, HVAC breakdowns in summer, and heating in winter, so you are already visible when the surge hits rather than scrambling after it.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now kicks off inside AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We map where you actually rank today across your Memphis neighborhoods and figure out exactly which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP come first because they move fastest. You will usually notice early lift here inside a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These stack week over week, which is precisely why starting before storm season beats starting after it." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Shelby County and the northern Mississippi suburbs, plus the on-page work that holds them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, never vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Memphis neighborhoods.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across Shelby County and beyond.', features: ['Everything in Local Growth', 'Local link building', 'Seasonal demand targeting', 'Multi-neighborhood and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Memphis?', a: "Most Memphis engagements run between $750 and $2,500 a month, set by how many neighborhoods and keywords you are chasing. The tiers are right above this. No hidden fees, no long contract, and we lock the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can shift in a few weeks. The competitive Memphis keywords usually need 90 to 180 days of steady work, since reviews and citations build on each other over time. Because the field here is thinner, you can often climb quicker than contractors in larger cities." },
      { q: 'What makes Memphis local SEO different from other cities?', a: "Two things stand out. Demand here is heavily seasonal: storm roofing and restoration peak in spring, HVAC peaks in summer, heating climbs in winter, so ranking ahead of each season is the whole game. And the local field is thinner than in the big metros, which means an early mover can claim and hold a neighborhood for years." },
      { q: 'Does it matter that most Memphis residents are Black or African American?', a: "It matters for how genuinely you connect with the community. The contractors who win here are real parts of the neighborhoods they serve. We help you build a presence that reflects honest community connection rather than a pasted-in template, and that comes through in the content and messaging we craft." },
      { q: 'Which areas do you cover?', a: "All of Memphis and the suburbs around it: Midtown, Cooper-Young, East Memphis, Germantown, Collierville, Bartlett, Cordova, Lakeland, Arlington, plus the northern Mississippi communities of Southaven and Olive Branch. We build genuine neighborhood pages instead of one catch-all Memphis page." },
      { q: 'Do you work with contractors specifically?', a: "It is basically all we do: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand the spring storm restoration rush, the humidity-driven mold jobs, and the older Memphis homes that need real renovation." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "A growing share of \"near me\" research now starts in AI rather than classic search. We structure your content and schema so those engines can read, trust, and cite your business. It is fast becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that is roughly how long local SEO needs to show real movement. After that it is month-to-month. If we are not delivering, you walk, and the accountability stays squarely on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads in a price-sensitive market where four contractors fight over one job. We build the rankings, the Google profile, and the review base that route leads straight to you. Over time you lean on the brokers less because the work is already coming in directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your Memphis neighborhoods, what your Map Pack competitors are doing to beat you, the fixes that will move you fastest, and a realistic 90-to-180-day Memphis Local SEO plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'memphis', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Memphis SEO Company | Rank Higher, Get Leads',
    metaDescription:
      'Memphis SEO that ranks contractors on Google and brings leads you own. Lead-tied reporting, no lock-in contracts, built for storm season and summer heat.',
    eyebrow: 'SEO Services · Memphis, TN',
    h1: 'Memphis SEO that turns organic traffic into booked work',
    h2Exact: 'Memphis SEO Company',
    heroSubhead:
      "Ads die the second your card stops. SEO does the opposite: rank once for what Memphis customers search and the leads keep arriving through storm season, summer heat waves, and winter cold snaps. We build that ranking and tie every report to real calls and real jobs.",
    primaryCta: 'Get my free Memphis SEO audit',
    intro:
      "Memphis SEO comes down to one thing: when someone searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in a market where the field is thinner than most cities, and we count it in leads, not vanity traffic. The seasonal swings here, storm roofing in spring, HVAC in summer, heating in winter, mean ranking before each spike is not a nice-to-have, it is the entire strategy.",
    aioQuestion: 'How do Memphis businesses rank higher on Google?',
    aioAnswer:
      "They rank by repairing the technical foundation of the site, tuning each page for the exact terms customers type, publishing genuinely useful local content tied to specific Memphis neighborhoods and suburbs, and earning links from trusted local sources. Memphis runs on sharp seasonal swings (storm roofing in spring, HVAC in summer, heating in winter), so ranking for those seasonal terms ahead of the season is one of the highest-return moves a Memphis contractor can make. And since local competition is thinner here than in the major metros, the work pays back faster.",
    problemHeading: "Three reasons your Memphis site isn't bringing in work",
    painPoints: [
      { title: "You are stuck on page two", body: "Almost nobody clicks past page one of Google, and they rarely scroll far down it either. In Memphis, where demand rolls in seasonal waves, sitting on page two means missing the busy roofing weeks after a storm, the packed HVAC weeks of summer, and the emergency heating calls of winter. If you are not in the top handful of results, your site is invisible exactly when it counts." },
      { title: "You are renting traffic from Google Ads", body: "Ads can work, but the instant your card stops, so do the leads. SEO builds an asset you own: rankings that keep producing leads months and years after the work is finished, at a fraction of the per-lead cost. In a cost-conscious market like Memphis, owning your pipeline instead of paying per shared lead protects real margin." },
      { title: "You are not ranking for the demand that matters", body: "Memphis demand lurches with the seasons: roofing and restoration after spring storms, HVAC during the brutal summer humidity, heating through winter. The contractors ranked for those terms in advance catch the surge. Seasonal and emergency searches are some of the highest-intent searches in Memphis, and most contractors do nothing to get ready for them." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned to the exact terms Memphis customers type: titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and pull in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real Memphis and industry sources. In a market this open, links are often the line between the early leader and everyone chasing." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across your Memphis neighborhoods right alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads, not just rankings and traffic, so you always know what your SEO is genuinely worth." },
      { name: 'Seasonal & emergency SEO', desc: "We rank you for storm roofing in spring, HVAC breakdowns in summer, and heating calls in winter, so you are visible before demand spikes, not after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, exactly where a growing slice of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Memphis leads, including the seasonal terms behind the biggest weeks of the year." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile: the foundation everything else needs before it can rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus fresh local content, including the spring storm, summer HVAC, and winter heating terms that matter here." },
      { name: 'Build authority', desc: "Links and citations from trusted Memphis and industry sources to push your competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we lean into what is working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Memphis SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and Memphis neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Memphis search and capture every seasonal spike.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal & emergency SEO', 'Multi-location or multi-county', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Memphis?', a: "Most Memphis SEO engagements run $900 to $3,000 a month, set by how competitive your keywords are and how much content and link work you need. The tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Memphis?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6. Because the local field here is thinner than in the major metros, Memphis contractors often see quicker movement than the national average. SEO compounds, so the gains keep stacking the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Memphis contractors do best running SEO as the long-term engine and using ads to plug the gaps during slow stretches." },
      { q: 'Should my Memphis SEO target storm and seasonal demand?', a: "Yes, and it is one of the highest-return moves you can make here. After a tornado or severe weather event, roofing and restoration search volume jumps overnight. Ranking takes months to build, so you have to be in place before storm season rather than chasing it after. We optimize for storm-season and all seasonal demand terms ahead of the spikes." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal and emergency SEO plus AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that window to show real movement, then it goes month-to-month. If we are not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which areas around Memphis do you cover?', a: "All of Shelby County and the suburbs around it: Midtown, Cooper-Young, East Memphis, Germantown, Collierville, Bartlett, Cordova, Lakeland, Arlington, plus the northern Mississippi communities of Southaven and Olive Branch, with genuine local pages rather than one generic Memphis page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that route leads straight to you. In Memphis's cost-conscious market, owning your pipeline means you stop fighting on price against contractors who bought the very same shared lead." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic Memphis SEO timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'memphis', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Memphis Web Design Company | OnwardCraft',
    metaDescription:
      'Memphis web design that turns visitors into booked jobs: fast, mobile-first sites built for contractors serving Midtown, Germantown, and Collierville.',
    eyebrow: 'Web Design · Memphis, TN',
    h1: 'Memphis web design that makes homeowners pick you',
    h2Exact: 'Memphis Web Design Company',
    heroSubhead:
      "A good-looking website that never rings the phone is just a brochure. We build Memphis contractors fast, mobile-first sites engineered to turn visitors into booked work and to earn trust across the communities you serve, from Germantown to Midtown to Southaven.",
    primaryCta: 'Get my free quote',
    intro:
      "Memphis web design done right closes the gaps where contractor sites leak leads: slow on a phone, call button buried, no clear offer anywhere. As a Memphis web design company built for the trades, we ship fast, mobile-first sites that look like the professional you already are and turn visitors from Bartlett to Cooper-Young into booked jobs, with the community-first feel that earns trust in Memphis neighborhoods.",
    aioQuestion: 'What makes a good contractor website in Memphis?',
    aioAnswer:
      "A strong Memphis contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos from local neighborhoods, and names the specific Memphis communities you serve. Since most searches happen on mobile and trust runs through neighborhoods in this market, authentic local connection and mobile speed are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It is a brochure, not a lead engine", body: "Plenty of contractor sites just list services and stop. No clear offer, no obvious next step, no reason to call you over the next guy. We design every page around one job: turning a visitor into a booked lead, with copy aimed at Memphis homeowners instead of generic placeholder text." },
      { title: "It is too slow on a phone", body: "Most of your Memphis visitors are on mobile, and they bounce the moment a site drags past a few seconds. Slow sites also rank worse on Google. We build fast, so you keep both the visitor and the ranking." },
      { title: "It does not speak to your neighborhood", body: "A homeowner in Germantown wants to see that you serve Germantown. A Cooper-Young resident reacts differently than someone in Collierville. We build sites that name the specific Memphis communities you work, so visitors believe you are genuinely local and Google ranks you for the right searches." },
    ],
    servicesHeading: "What's in an OnwardCraft Memphis website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site shaped around your trade, your Memphis communities, and the jobs you actually want to book." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that is where nearly all of your Memphis traffic lives. Fast, thumb-friendly, and easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where people actually use them. Every page points to a next step." },
      { name: 'Copy that sells', desc: "Words written for Memphis homeowners that book the job, not filler that reads like every other contractor site in town." },
      { name: 'Local SEO foundation', desc: "Built to rank from the ground up: clean structure, schema, fast load, and pages ready for your neighborhoods." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both your conversions and your rankings." },
      { name: 'Neighborhood-targeted pages', desc: "Pages built around the Memphis communities you serve (Germantown, Collierville, Bartlett, Midtown, Southaven) so you read as a genuine local rather than one more generic result.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts toward AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your Memphis communities, your best jobs, and your competitors, then map the site around booking more of the work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert. You see it and shape it before a single line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed all dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what is actually converting." },
    ],
    pricing: {
      heading: 'Transparent Memphis web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Neighborhood-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Memphis?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, set by page count and integrations. The tiers are above: fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes roughly 2 to 4 weeks; a larger custom build runs 4 to 8. You get a firm timeline up front and an update at every stage." },
      { q: 'Will my site help me earn trust in Memphis neighborhoods?', a: "That is central to how we build. Memphis is a deeply neighborhood-driven city, and trust is earned by showing genuine local connection: real project photos, specific community names, and copy that matches how people here actually think about their homes. We design for that, not a generic template." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and pages ready for your neighborhoods. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Memphis terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you cannot walk away from." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where nearly all of your Memphis traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage yourself, usually WordPress or Webflow. We recommend the right fit in your free consult and explain the tradeoffs in plain language." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project at a fixed price. Any ongoing maintenance or SEO is month-to-month, so you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Memphis web design should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'memphis', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Memphis Website Redesign | OnwardCraft',
    metaDescription:
      'Memphis Website Redesign that converts more without losing rankings. Faster, mobile-first rebuilds that turn visitors into booked jobs in Germantown and Midtown.',
    eyebrow: 'Website Redesign · Memphis, TN',
    h1: 'Memphis Website Redesign that turns an aging site into a lead engine',
    h2Exact: 'Memphis Website Redesign Company',
    heroSubhead:
      "An outdated site quietly costs you jobs every week, and it stings most heading into storm season or the summer HVAC rush. We redesign Memphis contractor sites to convert more and load faster, then migrate them carefully so you keep every bit of ranking you have already earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most Memphis Website Redesign projects go one of two bad ways: the site looks sharper but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Memphis contractor sites for speed and conversions, build them to earn community trust, and run an SEO-safe migration with the redirects and care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign holds your rankings and lifts them, because the new site loads faster, runs mobile-first, and is structured better than the old one.",
    problemHeading: "Signs your Memphis site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "Memphis homeowners weighing a high-ticket job size you up by your site in seconds. An old, cluttered design quietly nudges them toward a competitor who looks more established, even when your work is the better choice. In a community-minded market, looking like a real professional carries weight." },
      { title: "It is slow and clumsy on a phone", body: "If your site is sluggish or awkward on mobile, you lose most of your Memphis visitors before they ever reach your offer. A redesign built mobile-first wins them back, with fast load times that also pass Google's performance checks." },
      { title: "It does not convert during seasonal spikes", body: "After a tornado or severe weather event, homeowners are searching with urgency. If your site cannot earn trust quickly and turn that visitor into a call, the job goes to whoever can. A redesign built for conversion pays off especially well in Memphis's spike-driven demand cycles." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what is costing you leads and rankings today, so the redesign fixes real problems instead of just swapping colors around." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you hold onto the rankings and traffic you have already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, smarter call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals, which helps both your conversions and your rankings." },
      { name: 'Mobile-first rebuild', desc: "Rebuilt around the phone, where nearly all of your Memphis traffic actually lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and reassures Memphis homeowners making high-stakes decisions." },
      { name: 'Neighborhood-targeted rebuild', desc: "Rebuilt around the specific Memphis communities you serve (Germantown, Collierville, Midtown, Southaven) so the new site reads as genuinely local, not one more swapped-in template.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search keeps shifting toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what is losing you leads and rankings, then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build a thing." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and watch closely so rankings hold and climb rather than drop." },
      { name: 'Optimize', desc: "Post-launch tuning based on what is converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Memphis redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Neighborhood-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Memphis?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, set by size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it is done carefully, and that is exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign runs about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at every stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is a pain to update, is not bringing in leads, or falls flat during Memphis's seasonal demand spikes, it is costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what is ranking, and handle the technical migration so nothing important slips through the cracks." },
      { q: 'Will the redesign help me during storm season?', a: "Yes, and it is one of the best moves a Memphis contractor can make before spring. A fast, trust-building site that converts urgent visitors into calls is worth far more during a demand spike than a slow, dated one. We rebuild around exactly that kind of conversion." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both your conversions and your rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely: the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the Memphis Website Redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const memphisCity = {
  citySlug: 'memphis', city: 'Memphis', state: 'Tennessee', stateAbbr: 'TN', metro: 'Memphis',

  titleTag: 'Memphis Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Memphis marketing for contractors: web design, SEO, and local SEO that get you found before storm season and the summer HVAC rush, and own your leads instead of renting them.',

  eyebrow: 'Memphis · Web Design, SEO & Lead Generation',
  h1: 'Memphis marketing for contractors that turns searches into jobs',
  h2Exact: 'Memphis Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Memphis's seasonal demand spikes, older housing stock, and neighborhood-driven market. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Memphis audit',

  intro:
    "Memphis marketing for contractors has to answer two forces that shape your whole year: the spring storm season that drives roofing and restoration demand overnight, and the brutal summer humidity that keeps HVAC and mold calls coming through June, July, August, and September. Winning here means being ranked before those seasons arrive, not chasing them after. It also means earning trust in tight-knit communities from Germantown to Midtown to Southaven, where reputation travels fast. Here is how our web design and SEO for Memphis contractors do exactly that.",
  aioQuestion: 'How do Memphis contractors get more leads online?',
  aioAnswer:
    "Memphis contractors get more leads by pairing a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack neighborhood by neighborhood. The seasonal spikes here (storm roofing in spring, HVAC in summer, heating in winter) mean ranking ahead of each season is essential, not optional. And because local competition is thinner in Memphis than in the major metros, an early mover can own their market for years.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Memphis searches \"near me.\" For most local contractors it is the single highest-return move, done neighborhood by neighborhood before the seasonal spikes land.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually type, build an asset you own instead of renting traffic from ads, and measure it in leads rather than vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs and earn community trust, not brochures that sit idle while competitors take the calls.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, then migrate it carefully so you hold every bit of ranking you have already earned, ready before the next storm season.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Memphis?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients pair a high-converting website with SEO and local SEO so they rank, convert, and own their leads heading into storm season and the summer HVAC rush." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades (roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors) so we understand the spring storm restoration rush, the humidity-driven mold jobs, and the older Memphis homes that need real renovation." },
    { q: 'Why does the Memphis market need a different approach?', a: "Because demand here is heavily seasonal and the housing stock runs old. Storm roofing and restoration peak in spring, HVAC demand peaks in the brutal summer humidity, and heating climbs in winter, so you have to rank before each season arrives. And since the field is thinner here than in the major metros, investing now pays off faster and holds longer." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm the exact scope in your free audit." },
    { q: 'Which Memphis areas do you serve?', a: "All of Memphis and the suburbs around it: Midtown, Cooper-Young, Overton Square, East Memphis, Germantown, Collierville, Bartlett, Cordova, Lakeland, Arlington, plus the northern Mississippi communities of Southaven and Olive Branch, with genuine neighborhood pages rather than one generic Memphis page." },
    { q: 'Where should I start?', a: "Start with a free Memphis audit. We will look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves in your Memphis marketing for contractors that will bring in the most work fastest, especially before storm season or the summer heat wave. No pitch deck, just a plan." },
  ],
};
