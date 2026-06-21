// KANSAS CITY: per-metro x per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Kansas City's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// KANSAS CITY: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why Kansas City search plays by its own rules',
  body:
    "Kansas City sits dead center in the worst hail belt in the country. Spring and early summer storms drop golf-ball and baseball-sized hail across the Missouri and Kansas sides alike, and roofing and restoration phones light up for weeks straight. No other weather pattern in America generates emergency home-services demand quite like it, and the contractors already sitting on the map results when a storm rolls through are the only ones who book that surge. Hail is just the start. The metro's brutal seasonal swings push HVAC crews into peak AC demand from June through August and peak heating demand from December through February. Layer in tornado-season restoration work plus the booming high-income suburbs of Overland Park, Olathe, Lee's Summit and Liberty, and you get relentless, high-stakes demand for the trades on both sides of a state line. That state line is the catch: a homeowner searching from Overland Park in Kansas and one searching from Blue Springs in Missouri are two separate local targets, and capturing both means going after each side on purpose.",
  pullQuote: 'After a hail storm, the contractors already on the map answer every call. The rest of the field gets to listen to their own voicemail.',
  donut: {
    title: 'How Kansas City splits across state lines',
    value: 45,
    centerLabel: 'of metro on KS side',
    legend: [
      { label: 'Kansas side (Overland Park, Olathe, Lenexa, Shawnee)', pct: 45, kind: 'teal' },
      { label: 'Missouri side (KCMO, Lee\'s Summit, Independence, Liberty)', pct: 55, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Hail/storm roofing (Apr-Jun, Aug-Sep), HVAC (Jun-Aug, Dec-Feb), ice storm emergencies (Jan-Feb)',
  seasonalDemand: [
    { m: 'J', v: 72, peak: true }, { m: 'F', v: 68, peak: true }, { m: 'M', v: 60 },
    { m: 'A', v: 88, peak: true }, { m: 'M', v: 95, peak: true }, { m: 'J', v: 90, peak: true },
    { m: 'J', v: 85, peak: true }, { m: 'A', v: 82, peak: true }, { m: 'S', v: 78, peak: true },
    { m: 'O', v: 50 },
    { m: 'N', v: 58 }, { m: 'D', v: 75, peak: true },
  ],
  stats: [
    { value: '2.2M', label: 'people across the Kansas City metro' },
    { value: 'Hail Capital', label: 'of the US: the worst hail belt runs right through KC', accent: true },
    { value: 'Two states', label: 'Missouri and Kansas: one metro, two local search markets' },
    { value: 'Top 3', label: 'Map Pack spots that grab most clicks once a storm hits' },
  ],
  neighborhoods: [
    'Westport', 'Crossroads', 'River Market', 'Plaza', 'Brookside',
    'Waldo', 'Lee\'s Summit', 'Blue Springs', 'Independence', 'Overland Park',
    'Olathe', 'Lenexa', 'Shawnee', 'Liberty', 'Raytown',
  ],
};

const AREAS = [
  'Kansas City MO', 'Overland Park KS', 'Olathe KS', 'Lee\'s Summit', 'Independence',
  'Blue Springs', 'Liberty', 'Lenexa KS', 'Shawnee KS', 'Westport',
  'Crossroads', 'River Market', 'Brookside', 'Waldo', 'Raytown',
];

const FOUNDER =
  "Let me level with you. I started OnwardCraft after watching too many skilled contractors hand their busiest weeks (hail events, heat waves, ice storms) to whoever happened to top Google that morning. You cannot build a real business on rented Angi and Thumbtack leads while some shop you have never heard of undercuts you on the same job. So here is our entire mission: get you owning your own search visibility in the exact Kansas City zips and suburbs you serve, on both sides of the state line, before the next storm front arrives. No 12-month handcuffs. If it stops working, you show us the door.";

const WHY = [
  {
    title: 'The trades are all we touch',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We live and breathe hail-season roofing surges, tornado restoration calls, July AC emergencies and January frozen-pipe panic, so every page we build mirrors how Kansas City homeowners actually search when something breaks.",
  },
  {
    title: 'We pull you off the rented-lead treadmill',
    body: "The point is a pipeline that belongs to you. Not one more monthly check to a broker selling the same Overland Park homeowner to three of your competitors, especially when one good storm season can keep you booked for weeks on organic calls alone.",
  },
  {
    title: 'We genuinely understand both sides of the line',
    body: "Kansas City sprawls across Missouri and Kansas, and Google scores each state on its own. We chase Overland Park and Olathe rankings separately from Lee's Summit and Independence, so you surface where your buyers actually live instead of in a vague \"Kansas City\" that serves neither side well.",
  },
  {
    title: 'No contracts, nothing hidden',
    body: "Prices published on the page, reporting tied to real leads, month-to-month once the first 90 days are up. If we stop earning the work, you walk. That keeps the heat exactly where it should be: on us.",
  },
];

const PROOF = {
  heading: "We're new, so here's the honest math instead of a logo wall",
  body:
    "Plenty of agencies will wave a wall of client logos at you. We are a young, founder-led shop, so we are not going to fake a track record we have not built yet. What we can hand you is the reasoning behind why this works, straight from Google's own data and the industry's research on how people search locally.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here is a rough sketch, plainly flagged as a projection and not a result we are claiming. Say a Kansas City contractor pulls roughly 1,800 local \"near me\" impressions a month across a handful of suburbs and neighborhoods. Climbing from page-two invisibility into the top three is the gap between a slow drip of calls and a calendar that is fully booked, and right after a major hail event that gap can run into tens of thousands of dollars in jobs you never got a shot at. In your free audit we model the actual figures for your business: your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) plus one illustrative projection. None of them are past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Kansas City', state: 'Missouri', stateAbbr: 'MO', metro: 'Kansas City',
  heroProof: ['Built for the trades', 'Both sides of the state line', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const kansasCityLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'kansas-city', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Kansas City Local SEO Company | OnwardCraft',
    metaDescription:
      'Search a trade in Kansas City and three businesses fill the map. We put you in those three, on both sides of the state line, so the call lands with you.',
    eyebrow: 'Local SEO · Kansas City',
    h1: 'When Kansas City searches for what you do, be the first name on the map',
    h2Exact: 'Kansas City Local SEO Company',
    heroSubhead:
      "Google pins exactly three businesses to the map on a \"near me\" search. Everyone underneath them is basically invisible. In a metro where a single hail storm sends a thousand homeowners hunting for a roofer overnight, we get you into that top three on the Missouri side and the Kansas side, so the call rings your phone.",
    primaryCta: 'Get my free Kansas City audit',
    intro:
      "Kansas City local SEO boils down to one moment: when a homeowner in Overland Park or Lee's Summit searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll an inch further. This is a two-state market with ferocious hail-season demand, fast-growing suburbs, and homeowners who lean toward local crews over national chains, and becoming one of those three across the neighborhoods you serve is the whole ballgame. Here is exactly how it gets done.",
    aioQuestion: 'How do Kansas City businesses rank higher in local search?',
    aioAnswer:
      "You climb by nailing four things: a Google Business Profile tuned to the precise services and neighborhoods you want, consistent name, address and phone listings across the web, a steady drumbeat of real reviews, and local content tied to actual Kansas City suburbs on both sides of the state line. The two-state geography forces you to target Missouri and Kansas separately, because Overland Park and Olathe rank on a different board than Lee's Summit and Blue Springs. And since hail and storm demand can erupt overnight, the contractors already ranking when the sky turns green are the ones who catch every job.",
    problemHeading: "If your phone has gone quiet, it usually traces back to one of these",
    painPoints: [
      { title: 'Competitors own the three map spots exactly when it pays most', body: "When a hail front sweeps Kansas City, homeowners pour into Google looking for a roofer. Those three businesses pinned to the map? They scoop up the overwhelming share of calls. If you are not one of them across both sides of the state line, the quality of your work barely enters the equation. Cracking that top three for your key suburbs and zips is the highest-return play a Kansas City contractor can make, and it has to be locked in before the storm, not scrambled together after." },
      { title: "You're paying for leads that were never yours to keep", body: "Angi, Thumbtack and HomeAdvisor sell the same Kansas City homeowner to three or four contractors, then charge each of you to brawl over the scraps. Local SEO flips that: a homeowner in Overland Park finds you, dials you, and nobody else even saw the lead. Across a full storm season that edge stacks up fast." },
      { title: "You're chasing one state while your buyers sit in two", body: "Kansas City straddles Missouri and Kansas, and Google local search treats them as separate markets. A contractor crushing it in Kansas City MO can be flat invisible in Overland Park KS, even though they are 20 minutes apart. Owning both sides of the metro means going after each state's suburbs on purpose, not praying one generic listing somehow covers everything." },
    ],
    servicesHeading: 'What it actually takes to put you on the map',
    services: [
      { name: 'Google Business Profile', desc: "The single biggest lever in the Map Pack. We tighten your categories, services, service area, photos and posts so Google understands precisely which Kansas City searches belong to you, on both sides of the state line." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address and phone have to line up everywhere Google checks. We repair the listings that contradict each other and build out the ones you are missing." },
      { name: 'Reviews that keep arriving', desc: "A simple engine that converts finished jobs into a steady flow of fresh reviews. It lifts your ranking and gives homeowners a reason to call you after the next storm." },
      { name: 'Suburb and neighborhood pages', desc: "Real pages for Overland Park, Olathe, Lee's Summit, Blue Springs, Liberty and beyond, so you surface for the exact area someone is searching from instead of a flat \"Kansas City.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The wiring under the floorboards that lets everything else earn a ranking." },
      { name: 'Local link building', desc: "Mentions and links from Kansas City sources Google already trusts: local press, trade associations, chambers, partners. In this market that is often what divides page one from page two." },
      { name: 'Two-state targeting', desc: "Kansas City spans Missouri and Kansas. We optimize each side on its own so you rank in Overland Park and Olathe every bit as strongly as in Lee's Summit and Independence.", featured: true },
      { name: 'AI search readiness', desc: "A growing slice of \"near me\" research now kicks off inside AI Overviews, ChatGPT and Perplexity. We structure your content so those engines can read you and quote you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We pin down where you actually rank today across your Kansas City suburbs and zips, on both sides of the state line, and figure out which competitors are beating you in the Map Pack and exactly why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP come first because they move fastest. You usually feel early lift here inside a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is precisely why local SEO rewards starting now over starting later, especially ahead of hail season." },
      { name: 'Add local content', desc: "Suburb and service-area pages across the Missouri and Kansas sides, plus the on-page work that backs them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go capture the next suburb or zip." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses chasing suburbs on both sides of the state line.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Suburb and neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across the full KC metro.', features: ['Everything in Local Growth', 'Local link building', 'Two-state MO/KS targeting', 'Multi-suburb and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Kansas City?', a: "Most Kansas City engagements settle between $750 and $2,500 a month, set by how many suburbs, zips and keywords you are going after. Our tiers sit right above this. No hidden fees, no long contract, and we lock the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move inside a few weeks. The competitive Kansas City keywords usually need 90 to 180 days of steady work, because reviews and citations build on each other over time. Anyone promising page one in 30 days in a market this crowded is selling you a fairy tale." },
      { q: 'What makes Kansas City local SEO different from other markets?', a: "Two things, mostly. The two-state geography makes Missouri and Kansas separate local search markets, so you have to target each side on purpose or you vanish from one of them. And the savage hail and storm season creates demand spikes where whoever is already ranking books every job. Standing up your Map Pack presence before the weather turns is the entire game." },
      { q: 'Can you help me rank in both Missouri and Kansas?', a: "Yes, and in Kansas City that is non-negotiable. We tune your Google Business Profile and local pages for each side of the metro separately: Overland Park, Olathe, Lenexa and Shawnee on the Kansas side; Lee's Summit, Blue Springs, Independence and Liberty on the Missouri side. One generic listing will never cover both." },
      { q: 'Which areas do you cover?', a: "The full Kansas City metro on both sides of the state line: Kansas City MO, Overland Park KS, Olathe KS, Lee's Summit, Independence, Blue Springs, Liberty, Lenexa KS, Shawnee KS, Westport, Brookside, Crossroads, River Market and more. We build genuine suburb and neighborhood pages rather than one flat Kansas City page, because that is what actually ranks for specific area searches." },
      { q: 'Do you work with contractors specifically?', a: "It is pretty much all we do: roofing, HVAC, plumbing, solar, electrical, restoration and general contractors. We understand hail-season roofing surges, tornado restoration events, July AC rushes and ice-storm emergencies, and we build your local SEO around every one of them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More \"near me\" research now begins inside AI instead of classic search. We structure your content and schema so those engines can read, trust and cite your business. It is fast becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that is roughly how long local SEO needs to show real movement. After that it runs month-to-month. If we are not delivering, you walk, and the accountability stays squarely on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never get to keep. We build rankings, a Google profile and a review base that route leads straight to you. Over time, and especially after hail events and storm season, you lean on the brokers less because the work is already heading your way." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across both sides of the state line, what your Map Pack competitors are doing to beat you, the fixes that will move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'kansas-city', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Kansas City SEO Company | OnwardCraft',
    metaDescription:
      'Kansas City SEO that ranks contractors on Google and delivers leads you own, on both sides of the state line. Revenue-tied reporting, no lock-in.',
    eyebrow: 'SEO Services · Kansas City',
    h1: 'Get your Kansas City business to the top of Google and keep it there',
    h2Exact: 'Kansas City SEO Company',
    heroSubhead:
      "Ads die the moment you stop paying. SEO does the opposite: rank once for what your Kansas City customers search and the leads keep landing, especially when hail season hits and your phone should be ringing for weeks. We build that ranking and tie every report to real calls and booked jobs.",
    primaryCta: 'Get my free Kansas City SEO audit',
    intro:
      "Kansas City SEO comes down to one question: when somebody in Overland Park or Lee's Summit searches what you do, are you on page one or page two? In this market page two might as well be page fifty. We get contractors ranking for the money keywords across this two-state metro, and we measure the result in leads, not vanity traffic.",
    aioQuestion: 'How do Kansas City businesses rank higher on Google?',
    aioAnswer:
      "They climb by fixing the site's technical foundation, tuning each page to the exact terms customers type, publishing genuinely useful local content tied to specific Kansas City suburbs on both sides of the state line, and earning links from trusted local sources. In this market, getting ranked ahead of hail and storm season, so you are already on page one when homeowners start searching after a weather event, is one of the highest-leverage moves any contractor can make.",
    problemHeading: "Three reasons your Kansas City site isn't pulling in work",
    painPoints: [
      { title: "You're stranded on page two right when demand erupts", body: "Almost nobody clicks past Google's first page, and they rarely scroll far down it. After a major hail event, homeowners flood search and dial whoever is already visible. If you are not in the top handful of results at that moment, the quality of your work is beside the point; the leads pour into the contractors who already ranked." },
      { title: "You're renting your traffic from Google Ads", body: "Ads can work, but the second your card stops, the leads stop with it. SEO builds an asset you actually own: rankings that keep producing leads for months and years after the work is done, at a fraction of the per-lead cost. In a market with reliable seasonal demand spikes, owning those rankings beats renting them by a wide margin." },
      { title: "You're not ranking across both halves of the metro", body: "Kansas City spans two states and Google treats them as separate markets. A contractor ranking well in Kansas City MO can be essentially invisible to homeowners searching in Overland Park KS or Olathe KS. Winning the full metro means building SEO for both sides deliberately." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema and the under-the-hood fixes Google demands before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned to the exact terms your Kansas City customers search: titles, headings, content and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links and bring in leads while you are on a roof." },
      { name: 'Link building', desc: "Authority from real Kansas City and industry sources. In a competitive market with a high-spend suburban base, links are frequently what divide page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across your suburbs, on both the Missouri and Kansas sides." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms and leads, not just rankings and traffic, so you always know what your SEO is actually worth." },
      { name: 'Storm-season and emergency SEO', desc: "We rank you for the hail, tornado and HVAC emergency searches that drive Kansas City's busiest weeks, so you are visible before demand spikes instead of scrambling after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic and competitors across both sides of the state line, then build a roadmap around the keywords most likely to drive real Kansas City leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema and mobile: the foundation everything else needs in order to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus fresh local content, including the storm-season and emergency terms that matter most here." },
      { name: 'Build authority', desc: "Links and citations from trusted Kansas City and industry sources to push competitive keywords onto page one on both sides of the metro." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what is working and expand into the next keyword set or suburb." },
    ],
    pricing: {
      heading: 'Transparent Kansas City SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across suburbs and both states.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Kansas City search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Storm-season & emergency SEO', 'Multi-suburb / two-state targeting', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Kansas City?', a: "Most Kansas City SEO engagements run $900 to $3,000 a month, set by how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Kansas City?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, quicker on tighter suburb-level terms and slower on the most competitive citywide keywords. SEO compounds, so the gains keep building the longer you run it, which is exactly why starting before hail season matters so much." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that dies when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. In Kansas City, where storm demand spikes every spring and summer like clockwork, owning those rankings before the event is worth far more than buying ads after." },
      { q: 'Should my Kansas City SEO target storm and hail season?', a: "Without question. After a major hail event, homeowners flood search and call whoever ranks first. Ranking takes months to build, so you have to be in place before the season instead of chasing it afterward. We optimize for those hail, tornado restoration and emergency HVAC terms ahead of time so your busiest weeks land on you." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. Higher tiers add storm-season targeting and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it is month-to-month. If we are not delivering, you leave." },
      { q: 'Can you help me rank on both the Missouri and Kansas sides?', a: "Yes. The two-state geography is one of the defining features of this market and we build for both sides on purpose, targeting Overland Park, Olathe and Lenexa on the Kansas side alongside Lee's Summit, Blue Springs and Independence on the Missouri side." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust and cite your business, not just classic search." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that route leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads, especially during storm season when the demand is already there for the taking." },
      { q: "What's in the free SEO audit?", a: "Where you rank today across both sides of the state line, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'kansas-city', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Kansas City Web Design Company | OnwardCraft',
    metaDescription:
      'Kansas City web design that turns visitors into booked jobs: fast, mobile-first sites built for contractors on both sides of the state line.',
    eyebrow: 'Web Design · Kansas City',
    h1: 'Kansas City web design that turns visitors into booked jobs',
    h2Exact: 'Kansas City Web Design Company',
    heroSubhead:
      "A handsome website that never generates a call is just a brochure. We build Kansas City contractors fast, mobile-first sites engineered to turn visitors into booked work, including the Overland Park and Olathe homeowners who start searching the second a hail storm clears.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Kansas City contractor websites bleed leads quietly: slow on a phone, call button buried, no clear offer for the suburb the visitor is searching from. Web design done right fixes every bit of that. We build sites that load fast, look like the professional you already are, and turn visitors from Westport to Overland Park into booked jobs, all engineered for a two-state market where local identity carries weight and homeowners trust crews they recognize.",
    aioQuestion: 'What makes a good contractor website in Kansas City?',
    aioAnswer:
      "A strong Kansas City contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific suburbs and neighborhoods you serve on both sides of the state line. Because Kansas City homeowners tend to favor local businesses over national chains, a site that signals genuine local presence, rather than a generic template with the city name dropped in, is what actually converts visitors into calls.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "Plenty of contractor sites simply list services and sit there. No clear offer, no obvious next step, no reason to call you over the next guy, and after a hail storm that next guy is one tap away. We design every page around a single job: turning a visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Kansas City visitors are on mobile, and they bounce the instant your site takes more than a few seconds to load. Slow sites also rank worse. We build fast, so you keep both the visitor and the ranking." },
      { title: "It doesn't speak to the suburb they're standing in", body: "A homeowner in Overland Park wants to see you serve Overland Park, not a flat \"Kansas City\" page that could belong to anybody in either state. We build sites that name the suburbs and neighborhoods you actually work, so visitors trust you are local and Google ranks you for the right searches." },
    ],
    servicesHeading: "What's in an OnwardCraft Kansas City website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your suburbs and the jobs you actually want, on both sides of the state line." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that is where nearly all of your Kansas City traffic lives. Fast, thumb-friendly, one tap to call." },
      { name: 'Conversion-focused UX', desc: "Clear offers, unmissable call buttons and lead forms placed where people actually use them. Every page carries a next step." },
      { name: 'Copy that sells', desc: "Words written for anxious homeowners right after a hail storm or a heat wave, built to book the job, not filler that reads like everyone else's site." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank: clean structure, schema, fast load and suburb-ready pages for both Missouri and Kansas." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and clear Google's performance checks, which protects both conversions and rankings." },
      { name: 'Two-state suburb pages', desc: "Pages built around the specific Kansas City suburbs you serve, on both sides of the state line, so you stand out instead of dissolving into one generic city page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your suburbs, your best jobs and your competitors on both sides of the state line, then map the site around booking more of the work you actually want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert, and you see it and shape it before a single line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it around what is actually converting." },
    ],
    pricing: {
      heading: 'Transparent Kansas City web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + suburb pages', 'Speed & Core Web Vitals', 'Two-state suburb targeting'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Kansas City?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, set by page count and integrations. Our tiers are above: fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes roughly 2 to 4 weeks; a larger custom build runs 4 to 8. We hand you a firm timeline up front and keep you posted through each stage." },
      { q: 'Will my site help me convert visitors after a hail storm?', a: "That is exactly what we design for. We put a clear offer and call button front and center, write copy that speaks to homeowners with an urgent problem, and build the site fast so it never loses someone who is in a hurry to find help." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema and suburb-ready pages for both Missouri and Kansas. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Kansas City terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain and the content. No hostage situations, no platforms you cannot walk away from." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where nearly all your Kansas City traffic comes from. Fast load, easy-to-tap call buttons and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We choose the platform that fits your needs and that you can actually manage, usually WordPress or Webflow. We will recommend the right fit in your free consult and walk through the tradeoffs in plain English." },
      { q: 'Can you build suburb pages for both the Missouri and Kansas sides?', a: "Yes. We build genuine pages for the specific suburbs you serve: Overland Park and Olathe on the Kansas side, Lee's Summit and Blue Springs on the Missouri side, and everything in between. Those suburb pages are what actually rank for specific area searches." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO runs month-to-month, so you can leave whenever you want." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Kansas City site should include for your trade and your suburbs, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'kansas-city', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Kansas City Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your Kansas City website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs across both sides.',
    eyebrow: 'Website Redesign · Kansas City',
    h1: 'Redesign your Kansas City website without losing your rankings',
    h2Exact: 'Kansas City Website Redesign Company',
    heroSubhead:
      "An outdated site quietly costs you jobs every single week: slow, clumsy on a phone, invisible to suburbs across the state line. We redesign Kansas City contractor sites to convert more and load faster, and we migrate with care so you keep every bit of ranking you have already earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns fail in one of two ways: the site looks sharper but converts the same, or it launches and the rankings evaporate overnight. We do neither. We redesign Kansas City contractor sites for speed and conversions, build them to serve both sides of the state line, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign holds your rankings and improves them, because the new site is faster, mobile-first and better structured than the old one, including for both sides of Kansas City's two-state market.",
    problemHeading: "Signs your Kansas City site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and quietly costs you trust", body: "For a high-ticket roofing or HVAC job, Kansas City homeowners size you up by your site in seconds. An old, cluttered design steers them toward a competitor who looks more established, even when your work runs circles around theirs." },
      { title: "It's slow and painful to use on a phone", body: "If your site is clunky or slow on mobile, you are losing the majority of your Kansas City visitors before they ever reach your offer. A redesign built mobile-first wins them back, especially the urgent searchers right after a storm." },
      { title: "It only covers one half of the metro", body: "If your site targets only Kansas City MO and ignores the Kansas suburbs, or the reverse, you are handing half the metro to competitors. We rebuild around both sides so you are genuinely visible in Overland Park and Lee's Summit, not just one of them." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what is costing you leads and rankings today, including whether you are missing an entire side of the state line, so the redesign fixes real problems." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata and schema handled properly so you keep the rankings and traffic you have already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, smarter call-to-action placement and lead forms that people actually use. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals, which helps both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where nearly all your Kansas City traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the pride Kansas City homeowners take in their neighborhoods." },
      { name: 'Two-state suburb rebuild', desc: "Rebuilt to target both sides of the state line, Missouri and Kansas suburbs alike, so the new site covers the full metro instead of half of it.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what is losing you leads and rankings, including any gaps between the Missouri and Kansas sides of your coverage, then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and watch closely so rankings hold and climb, rather than drop." },
      { name: 'Optimize', desc: "Post-launch tuning around what is converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Kansas City redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + suburb pages', 'Two-state suburb rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Kansas City?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, set by size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it is done carefully, and that is exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes roughly 3 to 5 weeks; a larger rebuild runs 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, ignores one side of the state line, is not bringing in leads, or loses visitors to competitors who look more established, it is costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what is ranking, and handle the technical migration so nothing important slips through the cracks." },
      { q: 'Will the redesign help me cover both Missouri and Kansas?', a: "Yes. We rebuild with genuine suburb pages for both sides of the state line, so you are visible in Overland Park and Olathe just as clearly as in Lee's Summit and Blue Springs. It is one of the most common coverage gaps we fix in Kansas City redesigns." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely: the site, the domain and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO runs month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, which suburbs you are missing on either side of the state line, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const kansasCityCity = {
  citySlug: 'kansas-city', city: 'Kansas City', state: 'Missouri', stateAbbr: 'MO', metro: 'Kansas City',

  titleTag: 'Kansas City Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO and local SEO for Kansas City contractors. Get found on both sides of the state line, rank before hail season, and own your leads.',

  eyebrow: 'Kansas City · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Kansas City contractors found and booked',
  h2Exact: 'Kansas City Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO and local SEO built for Kansas City's two-state market and hail-season demand, from Overland Park to Lee's Summit. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Both sides of the state line', 'No lock-in contracts'],
  primaryCta: 'Get my free Kansas City audit',

  intro:
    "If you run a contracting business in Kansas City, you are working one of the most hail-prone metros in the country, across two states with distinct local search markets. Winning here takes three things firing together: a site that converts, SEO that ranks you for what people search on both the Missouri and Kansas sides, and local SEO that puts you in the Map Pack for the specific suburbs you serve, so when the next storm hits, your phone rings. Here is how we help Kansas City contractors pull off exactly that.",
  aioQuestion: 'How do Kansas City contractors get more leads online?',
  aioAnswer:
    "Kansas City contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack across both sides of the state line. Because Kansas City straddles Missouri and Kansas, contractors who target each side on purpose, Overland Park and Olathe separately from Lee's Summit and Independence, reach buyers their competitors miss entirely. And because hail and storm demand spikes predictably every spring and summer, contractors already ranking when the weather hits book all the work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Land in the top three businesses Google pins to the map when Kansas City searches \"near me,\" on both the Missouri and Kansas sides. The single highest-return move for most local contractors, especially before hail season.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers search across the full two-state metro, build an asset you own instead of renting traffic from ads, and measure it in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs, from Westport to Overland Park to Lee's Summit, not brochures that look good and sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, cover both sides of the state line properly, and migrate it carefully so you keep every bit of ranking you have already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Kansas City?', a: "Four core services for contractors: web design, website redesign, SEO and local SEO. Most clients pair a high-converting website with SEO and local SEO so they rank on both sides of the state line, own their leads, and stay visible before the next hail event hits." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration and general contractors, so we understand hail-season demand surges, tornado restoration events, July AC rushes and ice-storm emergencies." },
    { q: 'Why does the Kansas City market need a different approach?', a: "Two big reasons. First, the metro spans two states and Google treats Missouri and Kansas as separate local markets, so you have to target each side on purpose. Second, hail and severe storm season drives more concentrated home-services demand here than almost anywhere in the country. Contractors ranking before the storm hits book the work; everyone else watches it go by." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Kansas City areas do you serve?', a: "The full metro on both sides of the state line: Kansas City MO, Overland Park KS, Olathe KS, Lee's Summit, Independence, Blue Springs, Liberty, Lenexa KS, Shawnee KS, Westport, Crossroads, Brookside, River Market, Waldo and more." },
    { q: 'Where should I start?', a: "Start with a free Kansas City audit. We will look at your website, your rankings on both sides of the state line, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};
