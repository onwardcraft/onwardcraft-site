// BATON ROUGE — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Baton Rouge's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// BATON ROUGE — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'What it really takes to get found in Baton Rouge',
  body:
    "Baton Rouge does not search like the rest of the country, and if your marketing pretends otherwise you lose. This is the capital of Louisiana, anchored to the Mississippi River and the petrochemical corridor that runs from Port Allen up through Zachary, with roughly 870,000 people scattered across fast-growing suburbs (Prairieville, Gonzales, Denham Springs, Central) and the older neighborhoods inside the parish line, from the Garden District to Mid City to Perkins Road. The weather writes the calendar. Hurricane Gustav came ashore here in 2008, and in August 2016 a stalled rain event (no hurricane at all) dumped enough water to flood tens of thousands of homes in a matter of days. Ever since, roofers, restoration crews, and general contractors have lived inside a demand cycle that no inland city understands: when the water rises, the homeowner standing in their living room grabs a phone and taps the first name on the map. If that name is not yours, the job is gone. Storm work is only half of it. Gulf humidity never lets up, so HVAC systems work hard twelve months a year, mold is a constant concern, and exterior materials wear out faster than they should. The Chemical Corridor families in Prairieville and Zachary have steady incomes and homes worth protecting. And because Baton Rouge is roughly 55 percent Black, copy that actually speaks to the people who live here will always beat a template with the city name dropped in.",
  pullQuote: 'When the rain will not stop and every homeowner in the parish is reaching for a phone, the contractor who owns the map gets the call. You either built that visibility in advance or you watch the season pass.',
  donut: {
    title: 'Who lives in Baton Rouge',
    value: 55,
    centerLabel: 'Black/AA',
    legend: [
      { label: 'Black/AA', pct: 55, kind: 'teal' },
      { label: 'Other', pct: 45, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Hurricane season (Jun-Nov) drives peak demand; HVAC runs year-round',
  seasonalDemand: [
    { m: 'J', v: 45 }, { m: 'F', v: 42 }, { m: 'M', v: 55 },
    { m: 'A', v: 60 }, { m: 'M', v: 70 }, { m: 'J', v: 88, peak: true },
    { m: 'J', v: 95, peak: true }, { m: 'A', v: 98, peak: true }, { m: 'S', v: 92, peak: true },
    { m: 'O', v: 85, peak: true }, { m: 'N', v: 78, peak: true }, { m: 'D', v: 50 },
  ],
  stats: [
    { value: '870K', label: 'people across the Baton Rouge metro' },
    { value: '~55%', label: 'of residents are Black or African American, so authentic community framing is essential', accent: true },
    { value: 'Jun-Nov', label: 'hurricane season, when roofing and restoration calls explode' },
    { value: 'Year-round', label: 'Gulf humidity keeps HVAC and mold work constant in every season' },
  ],
  neighborhoods: [
    'Garden District', 'Mid City', 'Perkins Road', 'Prairieville', 'Gonzales',
    'Zachary', 'Baker', 'Central', 'Denham Springs', 'Walker',
    'Shenandoah', 'Sherwood Forest', 'Old Jefferson', 'Port Allen', 'Addis',
  ],
};

const AREAS = [
  'Baton Rouge', 'Prairieville', 'Zachary', 'Denham Springs', 'Central',
  'Baker', 'Gonzales', 'Walker', 'Port Allen', 'Addis',
  'Garden District', 'Mid City', 'Perkins Road', 'Sherwood Forest', 'Shenandoah',
];

const FOUNDER =
  "Here is the honest version: I started OnwardCraft because I was tired of watching good Baton Rouge tradespeople pour their marketing money into lead brokers who turned around and sold the same flooded-kitchen job to four of their competitors. In a city where one storm can light up every phone at once and a Prairieville family deserves a real pro instead of a bidding war, you should own the leads you pay for. No shared pool. No year-long handcuffs. If we are not bringing you work, you walk.";

const WHY = [
  {
    title: 'We plan around the storm calendar',
    body: "Gustav, the 2016 flood, and every named system since have trained Baton Rouge homeowners to search a certain way at a certain time. We build your visibility around the surge that hits each June through November, so you are already sitting in the Map Pack when the weather turns, not starting from zero while the rain falls.",
  },
  {
    title: 'We get you off rented leads',
    body: "The point is a pipeline that belongs to you. Not another monthly bill to a broker who just sold your next Denham Springs roof job to three other crews at the same moment you bought it.",
  },
  {
    title: 'We actually know this community',
    body: "Baton Rouge is a majority-Black city with a strong, proud sense of place. The contractors who last here earn trust with their neighbors instead of slapping a stock template over a city name. We write and build with the real Baton Rouge in mind.",
  },
  {
    title: 'No contracts, no fog',
    body: "Prices you can read, reporting tied to actual leads, month-to-month after the first 90 days. If we stop earning it, you leave. That keeps every bit of the pressure on us, where it belongs.",
  },
];

const PROOF = {
  heading: "We are new, so here is the honest math instead of a wall of logos",
  body:
    "Plenty of agencies open with a grid of client badges. We are a young, founder-led shop and we are not going to fake a track record we have not built yet. What we can give you is the reason this approach works, pulled straight from Google's own data and the industry's research on how people actually search close to home.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here is a rough sketch, labelled clearly as an illustrative projection and not a result we are claiming: imagine a Baton Rouge contractor pulling around 1,500 local \"near me\" impressions a month across their service area. Climbing from buried-on-page-two to the top three is the gap between a few stray calls and a calendar that fills itself. And when a system rolls through and every homeowner in Denham Springs needs a roofer at once, page two means you miss the whole season. In your free audit we run the real figures for your business: your current rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Baton Rouge', state: 'Louisiana', stateAbbr: 'LA', metro: 'Baton Rouge',
  heroProof: ['Built for the trades', 'Storm-season ready targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const batonRougeLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'baton-rouge', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Baton Rouge Local SEO Company | OnwardCraft',
    metaDescription:
      'Search your trade in Baton Rouge and three businesses pin to the map. We put you in those three before hurricane season floods the phones.',
    eyebrow: 'Local SEO · Baton Rouge, LA',
    h1: 'When Baton Rouge searches for your trade, be the first name on the map',
    h2Exact: 'Baton Rouge Local SEO Company',
    heroSubhead:
      "Google pins exactly three businesses to the map on a \"near me\" search. Everyone underneath is basically invisible. In a market ruled by storm cycles and Gulf-coast humidity, we get you into that top three before the next system forms, so the call lands on you instead of whoever happened to rank first.",
    primaryCta: 'Get my free Baton Rouge audit',
    intro:
      "Baton Rouge local SEO really comes down to a single moment: a homeowner in Zachary or Denham Springs watches a tropical storm peel back their roof, grabs their phone, and searches your trade plus \"near me.\" Are you one of the three businesses Google pins to the map? Most people tap one of the three and never scroll. This is a market driven by storm cycles, year-round humidity, and a community that knows and trusts local names, so being one of those three across the suburbs and neighborhoods you serve is the entire game. Here is how you get there.",
    aioQuestion: 'How do Baton Rouge businesses rank higher in local search?',
    aioAnswer:
      "You win by nailing four things: a Google Business Profile dialed in for the exact services and communities you want; consistent name, address, and phone details everywhere online; a steady stream of genuine reviews; and local content built around real Baton Rouge neighborhoods and suburbs. Because this market is storm-driven and community-rooted, the businesses that win stay visible year-round, prepare for the hurricane-season search surge in advance, and earn real trust with a majority-Black community that backs authentic local companies.",
    problemHeading: "If your phone has gone quiet, it is almost always one of these three",
    painPoints: [
      { title: 'Your competitors own the three map spots', body: "Search your own trade plus \"near me\" right now. See the three businesses Google pins to the map? When a system rolls through and every homeowner in Central or Prairieville needs emergency restoration, those three crews collect the lion's share of the calls. If you are not one of them, it barely matters how fast you can mobilize, because most people never scroll far enough to find you. Landing in that top three before the season opens is the single highest-return move a Baton Rouge contractor can make." },
      { title: "You are paying for leads that are not yours", body: "Angi, Thumbtack, and HomeAdvisor sell the same Baton Rouge homeowner to four contractors, then charge each of you to fight over them. After a weather event the per-lead price jumps and the scrum gets ugly. Local SEO builds the opposite kind of asset: a homeowner finds you, calls you, and nobody else got that lead. Over time you stop renting and start owning the pipeline." },
      { title: "You are invisible at the exact moment it counts", body: "Storm demand in Baton Rouge does not ramp gently. It detonates overnight when a system makes landfall or the rain simply refuses to quit. Contractors who are not already in the Map Pack before the event miss the whole surge. We build your visibility ahead of the season so you are the name on screen when homeowners are standing in water looking for help." },
    ],
    servicesHeading: 'What it actually takes to rank you here',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack by far. We tune your categories, services, service area, photos, and posts so Google understands exactly which Baton Rouge searches belong to you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to line up everywhere Google checks. We correct the listings that contradict each other and build the ones you are missing across the metro." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns each finished job into a steady flow of fresh reviews. It pushes your ranking up and gives the community a reason to call." },
      { name: 'Neighborhood and suburb pages', desc: "Real pages for Prairieville, Zachary, Denham Springs, Central, and the city neighborhoods, so you rank for the exact community a homeowner is searching instead of a vague \"Baton Rouge.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, and mobile speed. The plumbing under the floorboards that lets everything else climb." },
      { name: 'Local link building', desc: "Mentions and links from Baton Rouge sources Google already trusts: local press, community groups, trade associations, and partners. This is what splits page one from page two in this town." },
      { name: 'Storm-season and emergency SEO', desc: "We optimize for the search patterns that spike during hurricane season and major flood events, so you are visible the moment demand explodes rather than only when work is slow.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now begins in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you when a stressed homeowner turns there first.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We map where you actually rank today across your Baton Rouge service area and pinpoint which competitors are beating you in the Map Pack and exactly why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP come first because they move fastest. You usually see early lift here inside a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now (especially ahead of storm season) over starting later." },
      { name: 'Add local content', desc: "Neighborhood and suburb pages across your service area, plus the on-page work that holds them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and booked leads, not vanity rankings. Then we go take the next suburb or the next service." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses competing across Baton Rouge and the surrounding suburbs.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood and suburb landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across the entire metro.', features: ['Everything in Local Growth', 'Local link building', 'Storm-season and emergency SEO', 'Multi-suburb and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Baton Rouge?', a: "Most Baton Rouge engagements land between $750 and $2,500 a month, depending on how many suburbs and keywords you are chasing. Our tiers are laid out right above this. No hidden fees, no long contract, and we lock the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move inside a few weeks. The competitive Baton Rouge keywords usually take 90 to 180 days of steady work, because reviews and citations build their weight over time. Anyone promising page one in 30 days is selling you a story, and more to the point, you want to be in position before storm season, not climbing during it." },
      { q: 'What makes Baton Rouge local SEO different?', a: "Two things. The market is heavily seasonal: hurricane season (June through November) can triple search volume for roofing and restoration overnight, and contractors who are not already in the Map Pack miss the surge entirely. And Baton Rouge is a majority-Black community that values an authentic local presence, so framing that genuinely speaks to residents beats a copied template every time." },
      { q: 'Do you optimize for storm and emergency searches?', a: "Yes, and in Baton Rouge it is one of the highest-return moves on the board. After Gustav and especially the 2016 flood, homeowners search fast and trust the first name they see. We optimize for the emergency and storm-damage terms that spike during events so that demand lands on you." },
      { q: 'Which areas do you cover?', a: "The full Baton Rouge metro: Prairieville, Zachary, Denham Springs, Central, Baker, Gonzales, Walker, Port Allen, and the city neighborhoods including Garden District, Mid City, and Perkins Road. We build genuine community pages instead of a single generic Baton Rouge page, because that is what actually ranks for \"[service] [community]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It is nearly all we do. Roofing, HVAC, restoration, plumbing, electrical, and general contractors. We understand storm-damage work, the humidity-driven mold and HVAC calls, and the insurance jobs that pile up after a major Louisiana weather event." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More \"near me\" research now starts in AI tools instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. In a storm market where homeowners are searching fast and rattled, showing up in every channel matters." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that is roughly how long local SEO needs to show real movement. After that it is month-to-month. If we are not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. In a storm market, per-lead prices spike after every event and you are still competing with three other crews for the same job. We build the rankings, the Google profile, and the review base that send leads straight to you. Over time you lean on brokers less because the work is already coming to your door." },
      { q: "What is in the free audit?", a: "A clear read on where you rank today across your service area, what your Map Pack competitors are doing to beat you, the fixes that will move you fastest before storm season, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'baton-rouge', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Baton Rouge SEO Company | OnwardCraft',
    metaDescription:
      'Baton Rouge SEO that ranks contractors on Google and delivers leads you own. Storm-season ready, lead-tied reporting, and no lock-in contracts.',
    eyebrow: 'SEO Services · Baton Rouge, LA',
    h1: 'Get your Baton Rouge business to the top of Google and keep it there',
    h2Exact: 'Baton Rouge SEO Company',
    heroSubhead:
      "Ads die the second you stop paying. SEO does the opposite: rank once for what Baton Rouge searches (storm damage, HVAC repair, restoration) and the leads keep arriving. We build that ranking and tie every report back to real calls and booked jobs.",
    primaryCta: 'Get my free Baton Rouge SEO audit',
    intro:
      "Baton Rouge SEO comes down to one blunt question: when a homeowner in Prairieville searches your trade, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the keywords that pay in a market shaped by storm cycles, Chemical Corridor incomes, and relentless Gulf humidity, and we measure the work in leads, not vanity traffic.",
    aioQuestion: 'How do Baton Rouge businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the site's technical foundation, optimizing every page for the exact terms customers type, publishing genuinely useful local content tied to specific communities and suburbs, and earning links from trusted Baton Rouge and Louisiana sources. In this market, getting ranked ahead of storm season and for the HVAC and humidity-driven searches that run all year are two of the fastest ways to pull ahead of competitors who treat every month the same.",
    problemHeading: "Three reasons your Baton Rouge site is not bringing in work",
    painPoints: [
      { title: "You are stuck on page two", body: "Almost nobody clicks past page one of Google, and they rarely scroll deep into it. When the season hits and a homeowner in Denham Springs needs emergency roofing or restoration, they tap the first few results. If you are not there, it does not matter how fast you can mobilize, because you are invisible to the surge." },
      { title: "You are renting traffic from Google Ads", body: "Ads can work, but the instant your card stops, the leads stop. And in a storm-driven market, competitors crowd into paid auctions right after a weather event, driving click costs up at the exact moment you are slammed. SEO builds an asset you own: rankings that keep producing leads year-round and do not spike in cost after every named storm." },
      { title: "You are not ranking for the demand that pays", body: "Baton Rouge demand spikes hard during hurricane season and whenever Gulf humidity drives mold and HVAC calls. The contractors who rank for those terms in advance catch the surge. If your SEO ignores storm-damage and emergency searches, you are handing away your busiest weeks, and those are the most lucrative jobs in the market." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned for the exact terms Baton Rouge customers search: titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers ask, earn links, and bring in leads on their own across every season." },
      { name: 'Link building', desc: "Authority from real Baton Rouge and Louisiana industry sources. In a market shaped by big weather events and a tight-knit community, local credibility carries weight." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across your suburbs and neighborhoods alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads, not just rankings and traffic, so you always know what your SEO is actually worth." },
      { name: 'Storm-season & emergency SEO', desc: "We rank you for the hurricane, flood, roof-damage, and water-intrusion searches that drive Baton Rouge's busiest and most profitable weeks, built before the season rather than chased after it.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of stressed, time-pressed homeowners now begin the search.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Baton Rouge leads, storm-season and HVAC searches included." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile: the foundation everything else needs in order to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the storm-season and emergency terms that matter most in this market." },
      { name: 'Build authority', desc: "Links and citations from trusted Baton Rouge, Louisiana, and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what is working and expand into the next keyword set or service area." },
    ],
    pricing: {
      heading: 'Transparent Baton Rouge SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and suburbs.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Baton Rouge search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Storm-season & emergency SEO', 'Multi-suburb / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Baton Rouge?', a: "Most Baton Rouge SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Baton Rouge?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter suburb terms and slower on the most competitive citywide keywords. Because storm-season demand spikes fast, it is especially important to start building now instead of waiting until June." },
      { q: 'Is SEO better than Google Ads for storm-season work?', a: "They do different jobs. Ads buy instant traffic that stops the moment you stop paying, and in Baton Rouge, competitors flood the auctions right after a storm, driving costs up exactly when you need leads most. SEO is an asset you own that keeps producing leads year-round at a lower cost per lead. Most contractors do best running SEO as the long-term engine and ads for targeted bursts." },
      { q: 'Should my Baton Rouge SEO target storm-season demand?', a: "Absolutely. When a tropical system threatens Louisiana, searches for roofing, water damage, flood restoration, and generators jump overnight. Ranking takes months to build, so you have to be in place before the season rather than chasing it after. We optimize for those emergency terms in advance so your busiest and most profitable weeks land on you." },
      { q: "What is included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add storm-season/emergency and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it is month-to-month. If we are not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a growing part of what we optimize for. When a homeowner is stressed after a flood and searching on a phone, they may well be using an AI tool. We structure your content and schema so those engines can read, trust, and cite your business." },
      { q: 'Which areas around Baton Rouge do you cover?', a: "The full metro: Prairieville, Zachary, Denham Springs, Central, Baker, Gonzales, Walker, Port Allen, and the city neighborhoods including Garden District and Mid City. We build genuine local pages, not one generic Baton Rouge page, because that is what actually ranks for \"[service] [community]\" searches." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads straight to you. After storm events, when shared-lead prices spike, contractors who own their search visibility do not have to pay a broker for demand that is already hunting for them." },
      { q: "What is in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business, including where storm-season keywords could move fastest. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'baton-rouge', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Baton Rouge Web Design Company | OnwardCraft',
    metaDescription:
      'Baton Rouge web design that turns visitors into booked jobs: fast, mobile-first sites built for contractors in a storm-driven, community-rooted market.',
    eyebrow: 'Web Design · Baton Rouge, LA',
    h1: 'Baton Rouge web design that turns visitors into booked jobs',
    h2Exact: 'Baton Rouge Web Design Company',
    heroSubhead:
      "A good-looking site that never rings the phone is just a digital brochure. We build Baton Rouge contractors fast, mobile-first sites engineered to turn visitors into booked work, and to earn trust in a community where authenticity and local identity genuinely count.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Baton Rouge contractor websites leak leads quietly: sluggish on a phone, no clear offer, nothing that signals to a homeowner in Zachary or the Garden District that you are the real thing. Web design done right closes every one of those gaps. We build sites that load fast, look like the professional you already are, and convert storm-season visitors into booked jobs, designed for a community that backs genuine local businesses over generic corporate templates.",
    aioQuestion: 'What makes a good contractor website in Baton Rouge?',
    aioAnswer:
      "A strong Baton Rouge contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the exact suburbs and neighborhoods you serve. Because storm events drive homeowners to their phones in a hurry and the community values an authentic local presence, mobile speed, an obvious next step, and copy that speaks to real Baton Rouge life are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site is not bringing in work",
    painPoints: [
      { title: "It is a brochure, not a lead engine", body: "A lot of contractor sites just list services and stop there. No clear offer, no obvious next step, nothing that tells a homeowner in Prairieville why they should call you over the next guy. After a storm or a flood, homeowners decide fast. We design every page around one job: turning a visitor into a booked lead before they tap back and dial someone else." },
      { title: "It is too slow on a phone", body: "Most of your Baton Rouge visitors are on mobile, especially mid-event when they are scrambling for emergency help. A site that takes more than a few seconds to load loses them. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking together." },
      { title: "It does not speak to your community", body: "A homeowner in Denham Springs or the Garden District wants to see you actually serve their part of town, not a generic \"Louisiana contractor\" page that could belong to anybody. We build sites that name the suburbs and neighborhoods you work, speak to real Baton Rouge life, and earn trust with a community that can spot an out-of-town template from across the room." },
    ],
    servicesHeading: "What is in an OnwardCraft Baton Rouge website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your communities, and the jobs you actually want in the Baton Rouge market." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that is where nearly all of your Baton Rouge traffic lives, and where homeowners search during emergencies." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step, especially for storm-damage and emergency calls." },
      { name: 'Copy that sells', desc: "Words written for Baton Rouge homeowners and their real worries about storm damage, humidity, mold, and HVAC, not filler that reads like everybody else's." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank: clean structure, schema, fast load, and suburb-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both your conversions and your rankings." },
      { name: 'Community-targeted pages', desc: "Pages built around Prairieville, Zachary, Denham Springs, Central, and the city neighborhoods you serve, so you earn trust and rank locally instead of blending into a generic statewide page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more stressed, time-pressed homeowners turn to AI first after a storm.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your communities, your best jobs, and your competitors, then map the site around booking more of the work you want in the Baton Rouge market." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert, and you see it and shape it before a single line of code gets written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, including the storm-season and emergency language that lands with Baton Rouge homeowners." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what is actually converting across your service area." },
    ],
    pricing: {
      heading: 'Transparent Baton Rouge web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + suburb pages', 'Speed & Core Web Vitals', 'Community-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Baton Rouge?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above: fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you posted through each stage." },
      { q: 'Will my site earn trust with the Baton Rouge community?', a: "That is a real priority here. Baton Rouge is a majority-Black community that knows and values authentic local businesses. We write copy and build pages that speak to real Baton Rouge life (the neighborhoods, the storm worries, the local identity) instead of a generic template with the city name dropped in." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and suburb-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Baton Rouge terms before storm season." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platform you cannot leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where nearly all of your Baton Rouge traffic comes from, and where homeowners search during storms and emergencies. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage, usually WordPress or Webflow. We recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month, so you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Baton Rouge site should include for your specific trade and communities, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'baton-rouge', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Baton Rouge Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your Baton Rouge website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs before storm season.',
    eyebrow: 'Website Redesign · Baton Rouge, LA',
    h1: 'Redesign your Baton Rouge website without losing your rankings',
    h2Exact: 'Baton Rouge Website Redesign Company',
    heroSubhead:
      "An outdated site quietly costs you jobs every week: slow, awkward on a phone, easy to skip when a homeowner is stressed after a storm. We redesign Baton Rouge contractor sites to convert more and load faster, and we migrate with care so you keep every bit of ranking you have earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns fail one of two ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Baton Rouge contractor sites for speed and conversions, build them to earn community trust and stand out across the metro, and migrate with the redirects and SEO care that protect the traffic you already have, which matters most right before storm season when your rankings are pure money.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign holds your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one. In a storm-driven market like Baton Rouge, losing rankings right before June can cost you the most profitable season of the year.",
    problemHeading: "Signs your Baton Rouge site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and quietly costs you trust", body: "For a storm-damage repair or a major HVAC replacement, Baton Rouge homeowners size you up by your site in seconds. The family standing in water after the 2016 flood was looking for someone who looked capable of handling it. An old, cluttered design steers them straight to a competitor who simply looks more professional, even when your work is better." },
      { title: "It is slow and clumsy on a phone", body: "Most of your Baton Rouge visitors are on a phone, often under real stress. If your site is sluggish or hard to use, you lose them before they ever see your offer. A redesign built mobile-first wins them back, and lifts your rankings at the same time." },
      { title: "It does not reflect who you are to this community", body: "Baton Rouge has a strong sense of local identity. An outdated, generic contractor site does not speak to the Garden District homeowner or the refinery worker in Prairieville the way a site built around real Baton Rouge life does. We rebuild for conversions and for the exact communities you serve, so the right buyers choose you." },
    ],
    servicesHeading: "What is in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what is costing you leads and rankings today, so the redesign fixes real problems instead of just swapping the color scheme." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you have already earned, which is especially critical before storm season." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, including the emergency calls that follow Baton Rouge weather events." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals, which helps both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where nearly all your Baton Rouge traffic lives and where homeowners search during emergencies." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work, the price of your jobs, and the character of the communities you serve." },
      { name: 'Community-targeted rebuild', desc: "Rebuilt around the suburbs and neighborhoods you serve (Prairieville, Zachary, Denham Springs, Central, and the city), so the new site earns trust locally instead of reading like a statewide template.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI, especially among homeowners searching fast after a storm.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what is losing you leads and rankings, then map a redesign that fixes it without breaking what already works, with storm-season timing in mind." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build, one that speaks authentically to Baton Rouge." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and watch closely so rankings hold and improve rather than drop, which is especially important before or during peak storm season." },
      { name: 'Optimize', desc: "Post-launch tuning based on what is converting across your service area, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Baton Rouge redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + suburb pages', 'Community-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Baton Rouge?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it is done carefully, and that is exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. In a storm market, losing your rankings right before June can cost you your best season, so we take migration seriously." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, does not speak to the Baton Rouge community, is not bringing in storm-season leads, or looks generic next to local competitors, it is costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what is ranking, and handle the technical migration so nothing important slips through the cracks." },
      { q: 'Will the redesign help me earn trust with this community?', a: "Yes, and it is a real priority. Baton Rouge has strong local identity and a majority-Black community that values authentic businesses over generic out-of-town templates. We rebuild with that in mind: naming real communities, writing copy that speaks to real local concerns like storm damage and Gulf humidity, and presenting you as the genuine local professional you are." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings, and matters especially when homeowners are searching from their phones in the middle of a weather event." },
      { q: 'Do I own the redesigned site?', a: "Completely: the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What is in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix for the Baton Rouge market specifically, and a fixed-price quote with a timeline and a safe migration plan. No pressure, just a diagnosis." },
    ],
  },
];

export const batonRougeCity = {
  citySlug: 'baton-rouge', city: 'Baton Rouge', state: 'Louisiana', stateAbbr: 'LA', metro: 'Baton Rouge',

  titleTag: 'Baton Rouge Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Baton Rouge contractors. Get found before storm season, get booked, and own your leads in a community-rooted market.',

  eyebrow: 'Baton Rouge · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Baton Rouge contractors found and booked',
  h2Exact: 'Baton Rouge Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Baton Rouge's storm-driven, community-rooted market. One team to get you ranking before hurricane season, converting year-round, and off the rented-lead treadmill for good.",
  heroProof: ['Built for the trades', 'Storm-season ready targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Baton Rouge audit',

  intro:
    "If you run a contracting business in Baton Rouge, your market does not behave like anyone else's. Hurricane Gustav, the catastrophic 2016 flood, and every season since have shaped what homeowners here search for and the exact moment they search for it. Gulf humidity runs all year, Chemical Corridor families in Prairieville and Zachary have real budgets, and this is a majority-Black community with a strong sense of place, which means a generic template from an out-of-town agency simply does not land the same way. Winning here takes three things pulling together: a site that converts, SEO that ranks you before the season opens, and local SEO that puts you in the Map Pack across the suburbs and neighborhoods you serve. Here is how we help Baton Rouge contractors do exactly that.",
  aioQuestion: 'How do Baton Rouge contractors get more leads online?',
  aioAnswer:
    "Baton Rouge contractors get more leads by pairing a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack across the metro's suburbs and neighborhoods. The ones who win here get into the Map Pack before storm season, optimize for the emergency and humidity-driven searches that spike year-round, and earn trust with a community that backs authentic local businesses over out-of-town templates.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the three businesses Google pins to the map when Baton Rouge searches \"near me.\" The single highest-return move for most local contractors, done right across your suburbs and neighborhoods before the season floods the phones.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the keywords that pay (storm damage, restoration, HVAC, roofing), build an asset you own instead of renting traffic from ads, and measure the work in leads rather than vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs and to earn trust in a community where authenticity counts, not brochures that look identical to every other contractor in the market.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions before storm season, and migrate it carefully so you keep every bit of ranking you have already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Baton Rouge?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients pair a high-converting website with SEO and local SEO so they rank before storm season, convert year-round, and own their leads instead of renting them from brokers." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades (roofing, HVAC, restoration, plumbing, electrical, and general contractors) so we understand storm-damage work, the humidity-driven mold and HVAC calls, and the insurance jobs that follow major Louisiana weather events." },
    { q: 'Why does the Baton Rouge market need a different approach?', a: "A few reasons. The market is storm-driven: Hurricane Gustav in 2008 and the catastrophic 2016 flood put roofing and restoration contractors in constant demand, and every June through November the cycle repeats. Gulf humidity keeps HVAC and mold work going year-round. And Baton Rouge is a majority-Black community with a strong local identity, so authentic framing matters here in a way a generic out-of-town template cannot match." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm the exact scope in your free audit." },
    { q: 'Which Baton Rouge areas do you serve?', a: "The full metro: Prairieville, Zachary, Denham Springs, Central, Baker, Gonzales, Walker, Port Allen, and the city neighborhoods including Garden District, Mid City, and Perkins Road. We build genuine community pages instead of one generic Baton Rouge page." },
    { q: 'Where should I start?', a: "Start with a free Baton Rouge audit. We look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work before the next storm season. No pitch deck, just a plan." },
  ],
};
