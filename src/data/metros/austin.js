// AUSTIN: per-metro x per-service local landing pages + city hub.
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
// AUSTIN: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Austin is a moving target',
  body:
    "Few cities have changed as fast as Austin. Hundreds of thousands of new residents have landed here in the last decade, a lot of them tech workers leaving California and the Pacific Northwest to buy their first house in Texas. They close on a place near downtown or out in the suburbs and have no clue who to phone when the roof leaks, the AC quits, or the foundation starts shifting. That steady arrival of fresh homeowners is one of the richest, least-tapped pools of contractor work anywhere in the country, and nearly all of them begin the hunt on a phone. Two forces drive the calls. The first is heat: Austin sits at 100 to 105 degrees from June into September, and HVAC requests detonate the day the temperature breaks triple digits. The second is the Hill Country's habit of bouncing between drought and sudden flash flooding, which keeps roofing, drainage, and foundation work in a permanent loop, especially around the older bungalows and the 1950s-to-70s homes ringing the urban core. Layer on a city that genuinely roots for independent, locally grown businesses over national chains, and the contractor with a real Austin footprint in local search runs circles around the out-of-state operators chasing the same homeowners.",
  pullQuote: 'In a city that gains thousands of new homeowners a year, whoever owns the local map owns the work.',
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
  seasonCaption: 'Summer HVAC (Jun-Sep) and spring/fall storm restoration (Mar-May, Oct)',
  seasonalDemand: [
    { m: 'J', v: 48 }, { m: 'F', v: 50 }, { m: 'M', v: 72, peak: true },
    { m: 'A', v: 78, peak: true }, { m: 'M', v: 88, peak: true }, { m: 'J', v: 98, peak: true },
    { m: 'J', v: 100, peak: true }, { m: 'A', v: 96, peak: true }, { m: 'S', v: 86, peak: true },
    { m: 'O', v: 74, peak: true }, { m: 'N', v: 55 }, { m: 'D', v: 44 },
  ],
  stats: [
    { value: '2.3M+', label: 'people across the Austin-Round Rock metro' },
    { value: '~35%', label: 'Hispanic residents, so Spanish-language searches matter', accent: true },
    { value: 'Jun-Sep', label: 'peak HVAC season, when 100F-plus days stack up' },
    { value: 'Top 3', label: 'Map Pack spots that grab most of the clicks' },
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
  "Here is the honest reason OnwardCraft exists. I got tired of watching skilled Austin contractors wire a few thousand dollars a month to Angi and HomeAdvisor for leads that three of their rivals had already bought. You cannot grow a real business on leads you rent. So our entire job is simple: get you ranking and converting for the work you actually want, in the neighborhoods you actually drive to, and make those leads yours to keep. Austin is filling up faster than almost any metro in the country, so the demand is genuine and the chance to claim your spot in local search is wide open today and shrinking by the month. There are no year-long contracts here. If the work is not paying off, you let us go.";

const WHY = [
  {
    title: 'The trades are all we do',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We live in the world of July AC meltdowns, post-flood restoration calls, and foundation repairs on Austin's older housing stock, so every page we build mirrors the way your customers actually type their problem into Google.",
  },
  {
    title: 'We get you off rented leads',
    body: "The point is a pipeline with your name on it. Not one more monthly bill to a lead broker for a homeowner three of your competitors are also calling tonight.",
  },
  {
    title: 'We genuinely know Austin',
    body: "Targeting that goes street by street from Hyde Park to Round Rock, plus the angle that matters here: transplants who want a contractor they can trust, not a faceless national call center. A generic agency cannot fake that by dropping a city name into a template.",
  },
  {
    title: 'No contracts, nothing hidden',
    body: "Prices on the page, reporting tied to real leads, and month-to-month once the first 90 days are up. If we are not earning the check, you walk. That keeps every ounce of pressure on us.",
  },
];

const PROOF = {
  heading: "We are new, so here is the honest math instead of a logo wall",
  body:
    "Plenty of agencies wallpaper their pitch with client logos. We are a young, founder-led shop, so we are not going to fake a track record we have not built yet. What we can hand you is the why behind all of this, pulled straight from Google's own data and the wider industry research on how people search close to home.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Picture this, clearly flagged as an illustration and not a result we are claiming. Say an Austin contractor pulls roughly 2,000 local \"near me\" impressions a month across a handful of neighborhoods. Climbing from page-two obscurity into the top three is the gap between a few stray calls and a calendar that fills itself, and in a metro adding residents this quickly, that gap stretches wider every month you wait. In your free audit we model the real figures for your business: your current rankings, your search volume, and a candid 90-to-180-day path.",
  disclaimer:
    "The figures above are published benchmarks (Google / BrightLocal) plus one illustrative projection. None of them are past results claimed by OnwardCraft.",
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
    titleTag: 'Austin Local SEO Company | Win the Map Pack',
    metaDescription:
      'Austin Local SEO that gets you into the three businesses on the map, so the call rings your phone, not a competitor down the road.',
    eyebrow: 'Local SEO · Austin, TX',
    h1: 'Austin Local SEO that puts your business in the Map Pack from Hyde Park to Round Rock',
    h2Exact: 'Austin Local SEO Company',
    heroSubhead:
      "Google pins exactly three businesses to the map when someone types \"near me.\" Everyone beneath them is basically invisible. In a metro filling up this fast, with thousands of new homeowners who cannot name a single local contractor yet, we land you in that top three for your neighborhoods so the call rings your phone instead of whoever happened to rank first.",
    primaryCta: 'Get my free Austin audit',
    intro:
      "Austin local SEO boils down to one question: when a homeowner in Hyde Park, Mueller, or Round Rock searches your service plus \"near me,\" are you one of the three businesses Google sticks on the map? Most people tap one of those three and never scroll past them. Austin's tech boom has stuffed the metro with new arrivals who just bought a house and urgently need a contractor, and right now most of them are searching on a phone. Owning those three spots in the neighborhoods you actually serve is the entire game. Here is how you take them.",
    aioQuestion: 'How do Austin businesses rank higher in local search?',
    aioAnswer:
      "You climb by nailing four things: a Google Business Profile tuned to the exact services and neighborhoods you want, name, address, and phone listings that match everywhere online, a steady drip of real reviews, and local content tied to actual Austin places like Hyde Park, East Austin, and Round Rock. Because Austin keeps growing and the summers are merciless, the winners lock down tight service areas, rank for summer HVAC and storm-restoration searches before the demand lands, and answer fast the moment the thermometer hits triple digits.",
    problemHeading: "If your phone is quiet, it usually traces back to one of these three",
    painPoints: [
      { title: 'Your competitors own the three map spots', body: "Search your own service plus \"near me\" right now. Those three businesses pinned to the map? They scoop up the lion's share of the clicks. Austin keeps adding people, but the prime Map Pack spots are already claimed by whoever planted their flag first. For most Austin contractors, breaking into that top three for your neighborhoods is the single highest-return move on the board, and the window will not stay open forever." },
      { title: "You are paying for leads you never own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Austin homeowner to four contractors, then charge each of you to brawl over the scraps. It is a treadmill with no finish line. Local SEO flips it: a homeowner finds you, calls you, and nobody else got a shot. Month by month you stop renting leads and start owning the pipeline." },
      { title: "You are invisible to the residents who need you most", body: "A huge share of Austin's new homeowners packed up from California or the Pacific Northwest and have zero history with any local contractor. They search, eyeball the top three, and call. If your name is not up there, that entire wave of demand flows somewhere else. Ranking now, while the market is still shaking out, is how you catch it." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The heaviest lever in the Map Pack. We sharpen your categories, services, service area, photos, and posts so Google knows precisely which Austin searches belong to you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to line up everywhere Google checks. We repair the listings that contradict each other and build the ones you are missing." },
      { name: 'Reviews that keep arriving', desc: "A simple engine that turns every finished job into a fresh review. It lifts your ranking and gives the next Austin homeowner a reason to dial." },
      { name: 'Neighborhood pages', desc: "Real pages for Hyde Park, East Austin, Mueller, Round Rock, Cedar Park, and the rest, so you rank for the exact neighborhood someone is searching, not just the word \"Austin.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, and mobile speed. The wiring behind the walls that lets everything else climb." },
      { name: 'Local link building', desc: "Mentions and links from Austin sources Google respects: local press, business associations, neighborhood groups, and trade partners. Around here that is often what splits page one from page two." },
      { name: 'Seasonal & storm SEO', desc: "We rank you for summer HVAC searches before June lands and storm-restoration terms ahead of spring and fall, so you meet the demand instead of chasing its taillights.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now kicks off inside AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and name you in their answer.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We map exactly where you rank today across your Austin neighborhoods and figure out which competitors are beating you in the Map Pack and what they are doing to stay there." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP come first because they move the quickest. Early lift usually shows up here inside a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine switch on. These stack week over week, which is exactly why local SEO rewards starting today over starting next quarter." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Austin, Round Rock, Cedar Park, Pflugerville, Kyle, and Georgetown, with the on-page work to make them stick." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and booked jobs, not vanity rankings. Then we go claim the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses scrapping across several Austin neighborhoods and suburbs.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors out to own the map across the whole Austin metro.', features: ['Everything in Local Growth', 'Local link building', 'Seasonal & storm-restoration SEO', 'Multi-neighborhood and suburb pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Austin?', a: "Most Austin engagements run between $750 and $2,500 a month, set by how many neighborhoods and keywords you are chasing. Our tiers sit right above this. No hidden fees, no long contract, and we lock the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move within a few weeks. The competitive Austin keywords usually need 90 to 180 days of steady work, because reviews and citations build on each other over time. In a market shifting this quickly, anyone promising you page one in 30 days is selling smoke." },
      { q: 'What makes Austin local SEO different from other cities?', a: "Austin is filling up faster than almost anywhere in the country. A massive wave of new homeowners has no contractor on speed dial and searches online for everything. The contractors who rank now, while the market is still settling, scoop that demand and build a referral base that pays dividends for years. On top of that, Austin summers turn brutal fast enough that HVAC calls explode almost overnight, and spring storms kick off a restoration rush every single year. Ranking for those seasonal terms before the season arrives is how you bank the spike." },
      { q: 'Can you help me reach Spanish-speaking customers?', a: "Yes. Roughly 35% of Austin residents are Hispanic, and plenty of them search in Spanish. We can tune your profile and content to surface for those searches, opening up demand most of your competitors never bother to target." },
      { q: 'Which areas do you cover?', a: "All of greater Austin: Hyde Park, South Congress, Barton Hills, East Austin, Travis Heights, Bouldin Creek, Mueller, the Domain, Westlake, and the fast-growing suburbs of Cedar Park, Round Rock, Pflugerville, Kyle, Georgetown, and Leander. We build genuine neighborhood pages rather than one generic Austin page, because that is what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It is pretty much all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand July AC emergencies, flash-flood restoration, foundation repair on older Austin homes, and the new-construction boom rolling through the suburbs." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research now starts inside AI instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It is fast becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that is roughly how long local SEO needs to post real movement. After that you are month-to-month. If we are not delivering, you walk, and the accountability stays squarely on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never get to keep. We build rankings, a Google profile, and a review base that route leads straight to you. Over time you lean on the brokers less because the work is already showing up on its own." },
      { q: "What's in the free audit?", a: "A clear read on where you rank on the map today across your Austin neighborhoods, what your Map Pack competitors are doing to stay ahead of you, the fixes that will move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. Austin Local SEO is the highest-return move most local contractors can make, so the audit ends with a straight diagnosis, not a pitch deck." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'austin', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Austin SEO Company | Rank Higher, Get Leads',
    metaDescription:
      'Austin SEO that ranks contractors on Google and delivers leads you own. Reporting tied to revenue, no lock-in contracts, and built for a fast-growing market.',
    eyebrow: 'SEO Services · Austin, TX',
    h1: 'Austin SEO that gets you to the top of Google for the city\'s tech-transplant wave and keeps you there',
    h2Exact: 'Austin SEO Company',
    heroSubhead:
      "Ads die the second you stop feeding them. SEO does the opposite: rank once for what your Austin customers search and the leads keep showing up. We build that ranking for contractors in one of the fastest-growing cities in the country, and we tie every report to real calls and booked jobs.",
    primaryCta: 'Get my free Austin SEO audit',
    intro:
      "Austin SEO comes down to one question: when someone searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in a booming market where plenty of competitors are still catching up, and we count the results in leads, not vanity traffic.",
    aioQuestion: 'How do Austin businesses rank higher on Google?',
    aioAnswer:
      "They rank by repairing the site's technical foundation, tuning each page to the exact terms customers type, publishing genuinely useful local content tied to specific Austin neighborhoods and suburbs, and earning links from trusted local sources. In Austin, timing is its own lever: the contractors who rank for summer HVAC and spring storm-restoration terms before demand peaks catch the work, and the ones who wait simply do not.",
    problemHeading: "Three reasons your Austin site is not bringing in work",
    painPoints: [
      { title: "You are stuck on page two", body: "Hardly anyone clicks past the first page of Google, and they rarely scroll far down it. In a metro adding residents this fast, if you are not in the top handful of results for what you sell, you are invisible to the wave of new homeowners who have no contractor yet and are searching this minute." },
      { title: "You are renting traffic from Google Ads", body: "Ads can work, but the moment your card declines, the leads vanish. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the cost per lead. In a market growing this fast, that asset only compounds." },
      { title: "You are not ranking for the demand that matters", body: "Austin demand swings hard. HVAC calls pile up the instant May arrives and barely let up until October. Spring flash floods and hail set off a roofing and restoration rush. The contractors already in place when demand peaks take most of the calls. If your SEO is not built around those seasonal surges, you are handing away your busiest weeks of the year." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google wants in place before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned to the exact terms your Austin customers search: titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers ask, earn links, and pull in leads while you are out on a job." },
      { name: 'Link building', desc: "Authority from real Austin and industry sources. In a competitive market, links are frequently the difference between page one and page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack work so you win the \"near me\" searches across your Austin neighborhoods and suburbs alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads, not just rankings and traffic, so you always know exactly what your SEO is worth in dollars." },
      { name: 'Seasonal & storm SEO', desc: "We rank you for summer HVAC searches before June lands and storm-restoration terms ahead of spring and fall, so you are visible the moment demand peaks instead of scrambling to catch up.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing slice of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then draw a roadmap around the keywords most likely to drive real Austin leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile: the foundation everything else needs before it can rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the seasonal and storm-restoration terms that carry weight here." },
      { name: 'Build authority', desc: "Links and citations from trusted Austin and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we pour more into what is working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Austin SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Austin search outright.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal & storm-restoration SEO', 'Multi-location / suburb targeting', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Austin?', a: "Most Austin SEO engagements run $900 to $3,000 a month, set by how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Austin?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter neighborhood terms and slower on the most competitive citywide keywords. SEO compounds, so the gains keep stacking the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops the day you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Austin contractors do best running SEO as the long-term engine and ads for short bursts during peak HVAC or storm season." },
      { q: 'Should my Austin SEO target seasonal demand?', a: "Absolutely. When summer breaks in Austin, HVAC calls spike almost overnight, and the contractors already ranking grab the surge while the rest scramble. Spring and fall storms do the same for roofing and restoration. Ranking takes months to build, so you have to be in position before the season, not chasing it afterward. We optimize for those terms well ahead of time." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal storm and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then you are month-to-month. If we are not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not only classic search." },
      { q: 'Which areas around Austin do you cover?', a: "All of greater Austin and the surrounding suburbs: Hyde Park, South Congress, East Austin, Mueller, the Domain, Westlake, plus Round Rock, Cedar Park, Pflugerville, Kyle, Georgetown, Leander, and Manor, all with genuine local pages rather than one generic Austin page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads straight to you. The more you own your search visibility, the less you depend on paying brokers for leads three other contractors already bought." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. The goal of our Austin SEO work is plain: more organic traffic on page one for the money keywords that book jobs. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'austin', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Austin Web Design | Sites That Book Jobs',
    metaDescription:
      'Austin web design that turns visitors into booked jobs: fast, mobile-first sites built for contractors in a booming market. Transparent pricing, and you own it.',
    eyebrow: 'Web Design · Austin, TX',
    h1: 'Austin web design that turns East Austin and Mueller visitors into booked jobs',
    h2Exact: 'Austin Web Design Company',
    heroSubhead:
      "A handsome website that never rings the phone is just a brochure. We build Austin contractors fast, mobile-first sites engineered to convert visitors into booked work, and to stand out in a city where thousands of new homeowners are hunting for a contractor they can trust.",
    primaryCta: 'Get my free quote',
    intro:
      "Austin web design is the difference between a contractor website that bleeds leads quietly, slow on a phone, a call button nobody can find, no clear offer, and one that books work. Website design done right plugs every one of those holes. We build fast-loading, mobile-first sites that look like the pro you already are and turn Hyde-Park-to-Round-Rock visitors into booked jobs, all engineered to win in a market where Austin's tech-transplant wave is searching for someone exactly like you.",
    aioQuestion: 'What makes a good contractor website in Austin?',
    aioAnswer:
      "A strong Austin contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific neighborhoods and suburbs you serve. Because Austin homeowners, especially the tech transplants who moved in from out of state, run almost everything from their phones and have no contractor on call, a fast site with one obvious next step is what separates a business that books jobs from one that merely looks nice.",
    problemHeading: "Why your current site is not bringing in work",
    painPoints: [
      { title: "It is a brochure, not a lead engine", body: "Plenty of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next guy. Right now thousands of recent Austin transplants are actively hunting for a contractor they can trust, and they will pick the one whose website makes it easy to say yes. We design every page around a single job: turning a visitor into a booked lead." },
      { title: "It is too slow on a phone", body: "Your Austin visitors are on mobile, and they bounce when your site takes more than a few seconds to load. Slow sites also rank worse. We build fast, so you keep both the visitor and the ranking." },
      { title: "It does not speak to your neighborhood", body: "A homeowner in Mueller wants to see that you serve Mueller, not a generic \"Austin\" page that could belong to anybody. Out-of-state transplants are especially tuned to local cues: they want proof you actually know the area. We build sites that name the neighborhoods and suburbs you work, so visitors trust that you are local and Google ranks you for the right searches." },
    ],
    servicesHeading: "What's in an OnwardCraft Austin website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site shaped around your trade, your Austin neighborhoods, and the jobs you actually want to book." },
      { name: 'Mobile-first build', desc: "Built for the phone first, because that is where nearly all of your Austin traffic lives. Fast, thumb-friendly, and easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, call buttons you cannot miss, and lead forms placed where people actually use them. Every page hands the visitor a next step." },
      { name: 'Copy that sells', desc: "Words written for anxious homeowners, including the new-to-Austin transplants with no contractor yet, that move them to book the job." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank: clean structure, schema, fast load, and neighborhood-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects your conversions and your rankings at the same time." },
      { name: 'Neighborhood-targeted pages', desc: "Pages built around Hyde Park, East Austin, Mueller, Cedar Park, Round Rock, and the rest, so you stand out instead of melting into one generic city page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read your site and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your Austin neighborhoods, your best jobs, and your competitors, then plan the site around booking more of the work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert. You see it and shape it before a single line of code gets written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it around whatever is actually converting." },
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
      { q: 'How much does a website cost in Austin?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, set by page count and integrations. Our tiers are above: a fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks, and a larger custom build runs 4 to 8. We give you a firm timeline up front and keep you posted through every stage." },
      { q: 'Will my site help me reach Austin transplants and new homeowners?', a: "That is one of the biggest opportunities in Austin right now. Hundreds of thousands of people have relocated here from California and the Pacific Northwest. They have money, they own homes, and they have no contractor on call. They search online for everything. A fast, trustworthy site that names the neighborhood they live in is how you become their go-to contractor." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank, and pairing it with our SEO service is how you climb the competitive Austin terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations and no platform you cannot walk away from." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where nearly all of your Austin traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually run yourself, usually WordPress or Webflow. We will recommend the right fit in your free consult and explain the tradeoffs in plain terms." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and after that we offer affordable monthly maintenance for updates, speed, and security." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month, so you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Austin site should include, and a fixed-price quote with a timeline. Good Austin web design converts visitors into booked jobs, so the quote spells out exactly how we get you there. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'austin', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Austin Website Redesign | OnwardCraft',
    metaDescription:
      'Austin Website Redesign without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs in a booming market. Free audit.',
    eyebrow: 'Website Redesign · Austin, TX',
    h1: 'Austin Website Redesign that converts more without losing the rankings you earned in a booming market',
    h2Exact: 'Austin Website Redesign Company',
    heroSubhead:
      "An outdated site quietly costs you jobs every week: slow, clumsy on a phone, easy to skip. We redesign Austin contractor sites to convert more and load faster, and we migrate with enough care that you keep every bit of ranking you have earned in a market that keeps growing.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most Austin Website Redesign projects fail one of two ways: the site looks sharper but converts the same, or it launches and the rankings evaporate overnight. We do neither. We rebuild Austin contractor sites for speed and conversions, build them to stand out in a city where new homeowners are actively searching for someone to trust, and handle an SEO-safe migration with the redirects and care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign holds your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Austin site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and quietly costs you trust", body: "Austin is packed with tech transplants used to polished digital experiences. When they land on a dated, cluttered site, they close the tab without a word and call the next contractor, even when your work is the better work. In this market, a modern, trustworthy site is the price of admission." },
      { title: "It is slow and clumsy on a phone", body: "If your site is sluggish or awkward on mobile, you are losing the majority of your Austin visitors before they ever reach your offer. A redesign built mobile-first wins them back and lifts your ranking at the same time." },
      { title: "It blends into a booming market", body: "Austin is adding competitors nearly as fast as it adds residents. A generic old site gives a visitor no reason to pick you over the next dozen results. We rebuild for conversions and for the specific neighborhoods and suburbs you serve, so the right buyers land on you and stay." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what is costing you leads and rankings today, so the redesign repairs real problems instead of just swapping colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you hold onto the rankings and traffic you have already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, smarter call-to-action placement, and lead forms people actually use. We design for booked jobs, not just for looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals, which helps both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where nearly all of your Austin traffic already is." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and lands with Austin's design-conscious homeowners." },
      { name: 'Neighborhood-targeted rebuild', desc: "Rebuilt around the Austin neighborhoods and suburbs you serve, from Hyde Park and Mueller to Round Rock and Cedar Park, so the new site stands out instead of reading like everyone else's.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We dig into what is losing you leads and rankings, then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build it." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prep every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and watch closely so rankings hold and improve rather than drop." },
      { name: 'Optimize', desc: "Post-launch tuning around what is converting, plus ongoing speed and updates." },
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
      { q: 'How much does a website redesign cost in Austin?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, set by size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it is done carefully, and that is exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks, and a larger rebuild runs 5 to 9. You get a firm timeline up front and updates at every stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is a pain to update, is not bringing in leads, or melts into a crowded Austin market, it is costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and sharpen your existing content, preserve what is ranking, and handle the technical migration so nothing important slips through the cracks." },
      { q: 'Will the redesign help me compete in Austin?', a: "Yes, and that is the whole point. Austin keeps drawing tech-savvy homeowners who compare sites in seconds and pick the one that looks trustworthy and makes it easy to act. We rebuild around the specific neighborhoods and suburbs you serve and make the offer and call button impossible to miss, so the new site wins those comparisons." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely. The site, the domain, and the content are yours. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline. Every Austin Website Redesign we run pairs a mobile-first rebuild with an SEO-safe migration plan, so you gain conversions without losing rankings." },
    ],
  },
];

export const austinCity = {
  citySlug: 'austin', city: 'Austin', state: 'Texas', stateAbbr: 'TX', metro: 'Austin-Round Rock',

  titleTag: 'Austin Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Austin marketing for contractors: web design, SEO, and local SEO that get you found and booked and own your leads instead of renting them, built for a fast-growing Texas.',

  eyebrow: 'Austin · Web Design, SEO & Lead Generation',
  h1: 'Austin marketing for contractors that gets you found and booked before the new-homeowner wave passes',
  h2Exact: 'Austin Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Austin's booming, crowded market. One team to get you ranking, converting, and off the rented-lead treadmill, before the window closes.",
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Austin audit',

  intro:
    "Austin marketing for contractors means fighting for attention in one of the fastest-growing markets in the country, with more competitors arriving by the month. Winning here takes three things pulling together: a site that converts, SEO that ranks you for what people search, and local SEO that lands you in the Map Pack for the neighborhoods you serve. Get all three right and you catch the wave of new homeowners searching this minute. Get any one of them wrong and you hand that demand to whoever ranks above you.",
  aioQuestion: 'How do Austin contractors get more leads online?',
  aioAnswer:
    "Austin contractors get more leads by pairing a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack neighborhood by neighborhood. Austin's wave of tech transplants, new homeowners with no contractor on call, searches online for everything, so the contractors who rank in local search and convert visitors on mobile are the ones who capture that demand.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Land in the top three businesses Google pins to the map when Austin searches \"near me.\" For most local contractors it is the single highest-return move there is, done tight, neighborhood by neighborhood, before the market fully settles.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search, build an asset you own instead of renting traffic from ads, and measure it in leads, especially through Austin's brutal summer HVAC season and spring storm rush.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs, built to win the trust of Austin's tech-savvy transplants who are searching for a contractor they can lean on.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it with care so you keep every bit of ranking you have already earned in one of the country's fastest-growing metros.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Austin?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients pair a high-converting website with SEO and local SEO so they rank, convert, and own their leads in a market growing as fast as Austin is." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors, so we understand July AC emergencies, flash-flood restoration, foundation work on older Austin stock, and the new-construction boom in the suburbs." },
    { q: 'Why does the Austin market need a different approach?', a: "Austin has gained hundreds of thousands of residents in the past decade, many of them tech transplants buying their first house in Texas. They have no contractor on call and search online for everything. The contractors who rank now, while the market is still sorting itself out, capture a compounding wave of demand. On top of that, Austin summers turn severe enough that HVAC work spikes almost overnight, and spring storms set off a recurring restoration rush that rewards whoever is already ranking." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Austin areas do you serve?', a: "All of greater Austin and the surrounding suburbs: Hyde Park, South Congress, Barton Hills, East Austin, Travis Heights, Bouldin Creek, Mueller, the Domain, Westlake, Cedar Park, Round Rock, Pflugerville, Kyle, Georgetown, and Leander." },
    { q: 'Where should I start?', a: "Start with a free Austin audit. We will look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. Austin marketing for contractors works best when web design and SEO pull together, and that is exactly what the audit maps out. No pitch deck, just a plan." },
  ],
};
