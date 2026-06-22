// NEW YORK: per-metro x per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across New York's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// NEW YORK: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Ranking in New York is hand-to-hand combat',
  body:
    "Nearly 20 million people live in the New York metro, with roughly 8.5 million packed into the five boroughs themselves. No home-services market in America is denser or more cutthroat. Pick any trade and you will find dozens of contractors elbowing for the same three map pins on every block, where a homeowner hunting for help in Astoria types something completely different than one in Park Slope or Riverdale. Two forces drive the work here. The first is language: this is one of the most multilingual places on the planet, with close to half of all residents speaking something other than English at home, so the contractor who actually appears in those searches inherits a slice of demand the competition never touches. The second is the housing stock and the weather. The buildings are old, the winters bite hard, and when temperatures crash into the teens the boiler, heating, and frozen-pipe calls flood in overnight, while a sweltering July does the exact same thing for AC. Whoever already ranks is the one writing up that work.",
  pullQuote: 'With 8.5 million people stacked across a thousand neighborhoods, the contractor who owns the map for their block owns the calls.',
  donut: {
    title: 'How New York searches',
    value: 48,
    centerLabel: 'non-English at home',
    legend: [
      { label: 'Other language at home', pct: 48, kind: 'teal' },
      { label: 'English only', pct: 52, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Winter heating (Dec to Feb) and summer AC (Jul to Aug)',
  seasonalDemand: [
    { m: 'J', v: 92, peak: true }, { m: 'F', v: 88, peak: true }, { m: 'M', v: 60 },
    { m: 'A', v: 50 }, { m: 'M', v: 54 }, { m: 'J', v: 70 }, { m: 'J', v: 88, peak: true },
    { m: 'A', v: 86, peak: true }, { m: 'S', v: 58 }, { m: 'O', v: 56 },
    { m: 'N', v: 68 }, { m: 'D', v: 90, peak: true },
  ],
  stats: [
    { value: '19.9M', label: 'people living across the New York metro' },
    { value: '~48%', label: 'of residents speak a language other than English at home', accent: true },
    { value: 'Dec-Feb', label: 'the winter heating crunch that sends trade demand soaring' },
    { value: 'Top 3', label: 'Map Pack pins that swallow nearly all the clicks' },
  ],
  neighborhoods: [
    'Park Slope', 'Williamsburg', 'Astoria', 'Forest Hills', 'Riverdale',
    'Upper East Side', 'Harlem', 'Bay Ridge', 'Flushing', 'Jackson Heights',
    'Long Island City', 'Bushwick', 'Greenpoint', 'Throgs Neck', 'St. George',
  ],
};

const AREAS = [
  'Manhattan', 'Brooklyn', 'Queens', 'The Bronx', 'Staten Island', 'Astoria',
  'Long Island City', 'Park Slope', 'Williamsburg', 'Flushing', 'Forest Hills',
  'Riverdale', 'Bay Ridge', 'Harlem', 'Jackson Heights',
];

const FOUNDER =
  "Let me level with you. I started OnwardCraft after watching too many sharp New York contractors wire Angi and HomeAdvisor a few grand every month for leads that three competitors down the block bought the same day. A business built on rented leads is a business you do not control. So our entire job is simple: get you ranking and converting for the exact work you want, in the exact boroughs you cover, and make sure those leads belong to you alone. No 12-month handcuffs, no surprises. If we are not earning our keep, you cut us loose.";

const WHY = [
  {
    title: 'Trades are the only thing we do',
    body: "Roofers, HVAC techs, plumbers, solar installers, electricians, restoration crews, general contractors. We know what a January boiler emergency feels like, what a July AC backlog does to your week, and how co-op boards and brownstone jobs really work, so we shape everything around how your buyers actually search.",
  },
  {
    title: 'We end your dependence on rented leads',
    body: "Our north star is a pipeline you own outright. Not one more monthly bill to a lead broker for the same New York homeowners three of your competitors already paid for.",
  },
  {
    title: 'We genuinely speak New York',
    body: "Targeting that goes block by block from Bay Ridge to Riverdale, paired with the multilingual reach to capture searches most agencies cannot even see. No national shop pulls this off by dropping a city name into a template.",
  },
  {
    title: 'No contracts, nothing hidden',
    body: "Prices published right on the page, reporting tied to real leads, and month-to-month freedom after the first 90 days. If we stop delivering, you walk. That keeps every ounce of pressure exactly where it belongs: on us.",
  },
];

const PROOF = {
  heading: "We are new, so here is the honest math instead of a wall of logos",
  body:
    "Most agencies hit you with a grid of client logos. We are a young, founder-led shop and we refuse to fake a track record we have not built yet. What we can hand you is the reason this works, pulled straight from Google's and the industry's own research on how people search locally.",
  stats: [
    { value: '46%', label: 'of all Google searches carry local intent', n: 46 },
    { value: '76%', label: 'of phone users searching locally visit a business that same day', n: 76 },
    { value: '28%', label: 'of local searches lead directly to a purchase', n: 28 },
  ],
  projection:
    "Here is a rough sketch, plainly labelled as a projection and not a result we claim. Picture a New York contractor pulling roughly 2,500 local \"near me\" impressions a month across a handful of neighborhoods. Climbing out of page-two oblivion into the top three is the gap between a trickle of calls and a calendar booked solid, and in a market this packed that gap is punishing. During your free audit we model the actual figures for your business: your current rankings, your real search volume, and a candid 90 to 180 day path.",
  disclaimer:
    "The figures above are published benchmarks (Google and BrightLocal) plus an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'New York', state: 'New York', stateAbbr: 'NY', metro: 'New York City',
  heroProof: ['Built for the trades', 'Borough-by-borough targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const newYorkLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'new-york', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'New York Local SEO | Own the Map Pack | OnwardCraft',
    metaDescription:
      'When New Yorkers search your trade plus near me, three businesses claim the map. We get your shop into those three so the call rings your phone.',
    eyebrow: 'Local SEO · New York City',
    h1: 'When New York searches for your trade, be the name at the top',
    h2Exact: 'New York Local SEO Company',
    heroSubhead:
      "Type any service plus \"near me\" and Google hands the map to just three businesses. Everyone underneath is wallpaper. In a city this packed we muscle your shop into that top three for your boroughs and neighborhoods, so the call rings your phone instead of whoever happened to rank first.",
    primaryCta: 'Get my free New York audit',
    intro:
      "New York local SEO boils down to a single question: when a homeowner in Park Slope or Astoria taps in your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap a pin and never scroll past it. This is the densest, fiercest market in the country, and nearly half of New Yorkers run their searches in another language, so claiming one of those three pins across the neighborhoods you cover is the entire game. Here is exactly how you win it.",
    aioQuestion: 'How do New York businesses rank higher in local search?',
    aioAnswer:
      "You climb by nailing four things: a Google Business Profile tuned to the precise services and neighborhoods you want, name-address-phone listings that match everywhere on the web, a steady drip of genuine reviews, and local content rooted in actual New York boroughs and neighborhoods. Because the city is so dense and so multilingual, the winners lock onto tight service areas, surface in the languages their buyers type, and answer fast when winter heating and summer cooling demand explodes.",
    problemHeading: "When your phone goes quiet, it is usually one of these three",
    painPoints: [
      { title: 'Rivals own all three pins on the map', body: "Run your own service plus \"near me\" right now. Those three businesses Google pins to the map? In a city this jammed they soak up the lion's share of the clicks. If your shop is not one of them, the quality of your work barely matters because most searchers never lay eyes on your name. Breaking into that top three for your boroughs is usually the highest-return move a New York contractor can make all year." },
      { title: "You are paying for leads you never keep", body: "Angi, Thumbtack, and HomeAdvisor sell one New York homeowner to four contractors, then bill every one of you to brawl over the scraps. It is a treadmill, and the per-lead prices here rank among the steepest in the country. Local SEO flips that script: a homeowner finds you, calls you, and nobody else got the lead. Month by month you stop renting and start owning the pipeline outright." },
      { title: "Half the market cannot find you", body: "Close to half of New Yorkers speak a language other than English at home, and plenty of them search that way too. Most contractors do absolutely nothing to surface for those queries, so the demand just sits there unclaimed in Flushing, Sunset Park, and beyond. Targeting the right neighborhoods and languages is how you reach buyers your competitors never even glance at." },
    ],
    servicesHeading: 'What it really takes to get you ranking',
    services: [
      { name: 'Google Business Profile', desc: "The single biggest lever in the Map Pack. We tune your categories, services, service area, photos, and posts so Google knows precisely which New York searches should land on you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone must line up everywhere Google checks. We scrub the listings that contradict each other and build out the ones you are missing." },
      { name: 'Reviews on a steady drip', desc: "A no-fuss system that turns every finished job into a fresh review. It lifts your ranking and gives the next homeowner the nudge to call." },
      { name: 'Neighborhood pages', desc: "Real pages for Park Slope, Astoria, Riverdale, Bay Ridge and the rest, so you rank for the exact neighborhood a homeowner typed, not a vague \"New York.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The wiring under the floorboards that lets everything above it actually rank." },
      { name: 'Local link building', desc: "Mentions and links from New York sources Google respects: borough press, business improvement districts, trade associations, local partners. Here, that is what separates page one from page two." },
      { name: 'Multilingual reach', desc: "Nearly half of New Yorkers search in another language. We get you surfacing for that demand your competitors never even register exists.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now kicks off inside AI Overviews, ChatGPT, and Perplexity. We structure your content so those engines can read you and quote you by name.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We map where you genuinely stand today across your boroughs and neighborhoods, then pinpoint which competitors are beating you in the Map Pack and exactly why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP come first because they move fastest. You usually feel the early lift here inside a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week after week, which is the whole reason local SEO rewards starting today over starting in spring." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages spanning all five boroughs, backed by the on-page work that makes them stick." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and booked leads, never vanity rankings. Then we go capture the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing right out in the open',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation locked in.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For shops scrapping across several New York neighborhoods.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors out to own the map across every borough.', features: ['Everything in Local Growth', 'Local link building', 'Multilingual search targeting', 'Multi-borough and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in New York?', a: "Most New York engagements run between $750 and $2,500 a month, set by how many neighborhoods and keywords you are chasing. The tiers are right above. No hidden fees, no long contract, and we lock the exact scope during your free audit." },
      { q: 'How long until I land in the Map Pack?', a: "Profile work can move inside a few weeks. The competitive New York keywords usually need 90 to 180 days of steady effort because reviews and citations build on each other over time. Anyone promising page one in 30 days in a market this crowded is selling you a fantasy." },
      { q: 'What makes local SEO in New York different?', a: "Two things set it apart. It is the densest market in the country, so you have to rank tight, borough by borough and neighborhood by neighborhood, rather than chasing one generic \"New York\" phrase. And it is profoundly multilingual, with close to half of residents speaking another language at home, which means real demand your rivals never appear for." },
      { q: 'Can you help me reach non-English-speaking customers?', a: "Absolutely, and in New York it is a genuine edge. Roughly half of residents speak a language other than English at home, and many search that way. We tune your profile and content to surface for those queries in places like Flushing, Jackson Heights, and Sunset Park, where most contractors are flat-out invisible." },
      { q: 'Which areas do you cover?', a: "All five boroughs and the neighborhoods within them: Park Slope, Williamsburg, Astoria, Forest Hills, Riverdale, Bay Ridge, Harlem, Flushing, Jackson Heights and beyond. We build real neighborhood pages instead of one catch-all New York page, because that is what truly ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work specifically with contractors?', a: "It is nearly all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contracting. We get winter boiler emergencies, co-op and brownstone jobs, and insurance work, and we build your local SEO around every bit of it." },
      { q: 'Will I appear in Google AI Overviews and ChatGPT?', a: "A growing share of \"near me\" research now starts in AI rather than classic search. We structure your content and schema so those engines can read, trust, and cite your business. It is fast becoming as decisive as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that is roughly how long local SEO needs to show genuine movement. After that it is month-to-month. If we are not delivering, you walk, and the accountability stays squarely on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and borrowed visibility at some of the highest per-lead prices in the country. We build rankings, a Google profile, and a review base that funnel leads straight to you. Over time you lean on the brokers less because the work arrives directly." },
      { q: "What is in the free audit?", a: "A clear read on where you rank today across your boroughs, what your Map Pack rivals are doing to beat you, the fixes that will move you fastest, and a realistic 90 to 180 day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'new-york', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'New York SEO | Rank Higher, Win Leads | OnwardCraft',
    metaDescription:
      'New York SEO that ranks contractors on Google and feeds you leads you actually own. Reporting tied to revenue, no lock-in, built for a brutal market.',
    eyebrow: 'SEO Services · New York City',
    h1: 'Drive your New York business to the top of Google and keep it parked there',
    h2Exact: 'New York SEO Company',
    heroSubhead:
      "Ads die the instant you stop paying. SEO does the opposite: rank once for what your New York customers search and the leads keep arriving. We build that ranking and tie every report to real calls and booked jobs.",
    primaryCta: 'Get my free New York SEO audit',
    intro:
      "New York SEO comes down to one question: when someone searches what you do, are you sitting on page one or buried on page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in the densest, most cutthroat market in the country, and we count it in leads, never in vanity traffic.",
    aioQuestion: 'How do New York businesses rank higher on Google?',
    aioAnswer:
      "They rank by repairing the site's technical foundation, tuning every page to the exact terms buyers search, publishing genuinely useful local content tied to specific boroughs and neighborhoods, and earning links from trusted New York sources. In a market this brutal, tight neighborhood targeting and ranking early for seasonal heating and cooling terms are two of the fastest ways to pull ahead.",
    problemHeading: "Three reasons your New York site is not feeding you work",
    painPoints: [
      { title: "You are stranded on page two", body: "Hardly anyone clicks past the first page of Google, and they rarely scroll far down it either. In a market this crowded with rivals, if you are not in the top handful of results for what you sell, your site is effectively invisible no matter how slick it looks." },
      { title: "You are renting traffic from Google Ads", body: "Ads can work, but the second your card maxes out the leads stop cold, and New York clicks are among the priciest anywhere. SEO builds an asset you own: rankings that keep generating leads months and years after the work is finished, at a sliver of the per-lead cost." },
      { title: "You are not ranking for the demand that pays", body: "New York demand swings violently with the calendar: boilers and heating all winter, AC in the July furnace. The contractors ranking for those terms in advance catch the surge. If your SEO ignores seasonal and emergency searches, you are handing away your busiest weeks of the year." },
    ],
    servicesHeading: 'The SEO work that genuinely moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood repairs Google demands before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned to the precise terms your New York customers search: titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers ask, pull in links, and deliver leads on autopilot." },
      { name: 'Link building', desc: "Authority from real New York and industry sources. In a market this fierce, links are frequently the line between page one and page two." },
      { name: 'Local SEO and Google Business Profile', desc: "Map Pack optimization so you take the \"near me\" searches across your boroughs right alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads, not just rankings and traffic, so you always know what your SEO is genuinely worth." },
      { name: 'Seasonal and emergency SEO', desc: "We rank you for the winter heating and summer AC searches that drive New York's busiest weeks, so you are visible before demand erupts, not scrambling after.", featured: true },
      { name: 'AI search and GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, right where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then chart a roadmap around the keywords most likely to deliver real New York leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile: the foundation every other move needs in place before it can rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus fresh local content, including the seasonal and emergency terms that pay off here." },
      { name: 'Build authority', desc: "Links and citations from trusted New York and industry sources to muscle competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we pour fuel on what is working and push into the next keyword set." },
    ],
    pricing: {
      heading: 'New York SEO pricing, nothing hidden',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site chasing its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors fighting across services and boroughs.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses determined to own New York search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal & emergency SEO', 'eCommerce / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in New York?', a: "Most New York SEO engagements run $900 to $3,000 a month, set by how competitive your keywords are and how much content and link work the climb demands. The tiers sit above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in New York?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, quicker on tight neighborhood terms and slower on the most cutthroat citywide keywords. SEO compounds, so the gains keep stacking the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that vanishes the moment you stop paying, and New York clicks are expensive. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most contractors win by running SEO as the long-term engine and ads for short-term surges." },
      { q: 'Should my New York SEO target seasonal demand?', a: "Yes. When a cold snap rolls in, searches for heating, boiler, and frozen-pipe repair spike overnight, and a July heat wave does the same for AC. Ranking takes months to build, so you must already be in position before the season hits, not chasing it afterward. We optimize for those seasonal and emergency terms early so your busiest weeks land on you." },
      { q: "What is included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. Higher tiers fold in seasonal and emergency plus AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it shifts to month-to-month. If we are not delivering, you leave." },
      { q: 'Will I appear in Google AI Overviews and ChatGPT?', a: "That is a fast-growing slice of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which areas around New York do you cover?', a: "All five boroughs and the neighborhoods within them: Manhattan, Brooklyn, Queens, the Bronx, and Staten Island, from Park Slope and Astoria to Riverdale and Bay Ridge, with genuine local pages instead of one catch-all New York page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that route leads directly to you. The more you own your search visibility, the less you bleed paying brokers for shared leads at New York prices." },
      { q: "What is in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'new-york', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'New York Web Design for Contractors | OnwardCraft',
    metaDescription:
      'New York web design that converts visitors into booked jobs: fast, mobile-first sites built for contractors fighting in the densest market in the country.',
    eyebrow: 'Web Design · New York City',
    h1: 'New York web design that turns visitors into booked jobs',
    h2Exact: 'New York Web Design Company',
    heroSubhead:
      "A handsome website that generates zero calls is just a brochure. We build New York contractors fast, mobile-first sites engineered to convert visitors into booked work and to cut through the most crowded market in the country.",
    primaryCta: 'Get my free quote',
    intro:
      "Most New York contractor websites leak leads quietly: sluggish on a phone, a call button hidden somewhere south of the fold, no clear offer. Web design done right plugs every one of those holes. We build sites that load fast, carry the polish your work deserves, and turn visitors from Park Slope to Riverdale into booked jobs, all engineered to win in a market where a dozen competitors are one tap away.",
    aioQuestion: 'What makes a good contractor website in New York?',
    aioAnswer:
      "A strong New York contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, builds trust with reviews and real project photos, and names the exact boroughs and neighborhoods you serve. Because most New York searches happen on mobile and the rivalry is ferocious, mobile speed and an unmistakable next step are what separate a site that books jobs from one that just collects dust.",
    problemHeading: "Why your current site is not bringing in work",
    painPoints: [
      { title: "It is a brochure, not a lead engine", body: "Plenty of contractor sites simply list services and sit still. No clear offer, no obvious next step, no reason to call you over the next outfit, and in New York the next outfit is one tap away. We design every page around a single mission: converting a visitor into a booked lead." },
      { title: "It crawls on a phone", body: "The bulk of your New York visitors arrive on mobile, and they bounce if your site takes more than a few seconds to load. Sluggish sites also rank worse. We build fast so you keep the visitor and hold the ranking." },
      { title: "It says nothing about your neighborhood", body: "A homeowner in Astoria wants proof you actually serve Astoria, not a vague \"New York\" page that could belong to anyone. We build sites that name the boroughs and neighborhoods you cover, so visitors trust you are local and Google ranks you for the searches that count." },
    ],
    servicesHeading: "What goes into an OnwardCraft New York website",
    services: [
      { name: 'Custom design', desc: "Zero cookie-cutter templates. A site built around your trade, your boroughs, and the exact jobs you want more of." },
      { name: 'Mobile-first build', desc: "Built for the phone first, because that is where nearly all of your New York traffic lands. Fast, thumb-friendly, one tap to call." },
      { name: 'Conversion-focused UX', desc: "Clear offers, unmissable call buttons, and lead forms parked where people actually use them. Every page carries a next step." },
      { name: 'Copy that sells', desc: "Words that reassure anxious homeowners and close the job, not filler that reads like every other contractor in the borough." },
      { name: 'Local SEO foundation', desc: "Engineered from the studs up to rank: clean structure, schema, fast load, and neighborhood-ready pages." },
      { name: 'Speed and Core Web Vitals', desc: "Tuned to load fast and clear Google's performance checks, which protects both your conversions and your rankings." },
      { name: 'Neighborhood-targeted pages', desc: "Pages built around the boroughs and neighborhoods you serve, so you stand out in a packed market instead of dissolving into one generic city page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search migrates to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your boroughs, your most profitable jobs, and your competitors, then map the site around booking more of the work you actually want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert. You see it and shape it before a single line of code gets written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from the very first day." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it around what is genuinely converting." },
    ],
    pricing: {
      heading: 'New York web design pricing, all on the table',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A roomier site for established contractors juggling several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Neighborhood-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location operations.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in New York?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, set by page count and integrations. The tiers are above: fixed price, no surprises, and you own the finished site outright." },
      { q: 'How long does it take to build?', a: "A focused site takes roughly 2 to 4 weeks; a larger custom build runs 4 to 8. We hand you a firm timeline up front and keep you posted through every stage." },
      { q: 'Will my site help me stand out in such a crowded market?', a: "That is the entire point in New York. We build around the exact boroughs and neighborhoods you serve, keep the site quick, and plant a clear offer and call button front and center, so when a dozen competitors are one tap away, yours is the one that books the job." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and neighborhood-ready pages. The build gets you primed to rank; pairing it with our SEO service is how you climb the cutthroat New York terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you cannot walk away from." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where nearly all of your New York traffic comes from. Fast load, easy-to-tap call buttons, and forms shaped for a thumb." },
      { q: 'What platform do you build on?', a: "We choose the platform that fits your needs and that you can genuinely manage, usually WordPress or Webflow. We recommend the right fit in your free consult and lay out the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and afterward we offer affordable monthly maintenance covering updates, speed, and security." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project at a fixed price. Any ongoing maintenance or SEO stays month-to-month, so you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting New York site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'new-york', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'New York Website Redesign | Keep Your Rankings | OnwardCraft',
    metaDescription:
      'Redesign your New York website without torching your rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs in a brutal market.',
    eyebrow: 'Website Redesign · New York City',
    h1: 'Redesign your New York website without torching your rankings',
    h2Exact: 'New York Website Redesign Company',
    heroSubhead:
      "An outdated site bleeds jobs every week: slow, awkward on a phone, easy to scroll right past. We redesign New York contractor sites to convert more and load faster, then migrate with care so you keep every scrap of ranking you have earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns crash one of two ways: the site looks sharper but converts no better, or it launches and the rankings evaporate overnight. We refuse both outcomes. We redesign New York contractor sites for speed and conversions, build them to stand out in a brutal market, and migrate with the redirects and SEO care that guard the traffic you already own.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing the whole thing on staging before launch. Handled right, a redesign holds your rankings and lifts them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your New York site is overdue for a rebuild",
    painPoints: [
      { title: "It looks dated and quietly costs you trust", body: "On a high-ticket job, New York homeowners size you up by your site in seconds. An old, cluttered design nudges them toward a competitor who simply looks more established, even when your craftsmanship is the better bet." },
      { title: "It is slow and clumsy on a phone", body: "If your site is clunky or sluggish on mobile, you lose the majority of your New York visitors before they ever reach your offer. A redesign built mobile-first wins them back." },
      { title: "It disappears into a crowded market", body: "Traffic that never turns into calls is wasted spend, and a generic old site in a city this competitive hands a visitor no reason to choose you over the next dozen results. We rebuild for conversions and for the neighborhoods you actually serve, so the right buyers land on you." },
    ],
    servicesHeading: "What goes into an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what is costing you leads and rankings right now, so the redesign repairs real problems instead of just swapping colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled by the book so you keep the rankings and traffic you have already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, smarter call-to-action placement, and lead forms people actually fill out. We design for booked jobs, not just good looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals, which lifts both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where nearly all of your New York traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the size of your invoices." },
      { name: 'Neighborhood-targeted rebuild', desc: "Rebuilt around the boroughs and neighborhoods you serve, so the new site stands out in a crowded market instead of echoing everyone else's.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search tilts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We dig into what is losing you leads and rankings, then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we touch the build." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prep every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and watch closely so rankings hold and climb rather than slip." },
      { name: 'Optimize', desc: "Post-launch tuning around what is converting, plus ongoing speed work and updates." },
    ],
    pricing: {
      heading: 'New York redesign pricing, fully transparent',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Neighborhood-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A ground-up rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in New York?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, set by size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not when it is handled carefully, and that is precisely how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign runs roughly 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site crawls on phones, looks dated, is a chore to update, is not pulling in leads, or vanishes into the crowded New York market, it is costing you work. The free audit tells you plainly whether a redesign earns its keep." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and sharpen your existing content, protect what is ranking, and handle the technical migration so nothing important slips through the cracks." },
      { q: 'Will the redesign help me compete in New York?', a: "Yes, and in a market this dense that is the whole point. We rebuild around the exact boroughs and neighborhoods you serve, keep the site fast, and make the offer and call button obvious, so the new site stands out instead of reading like every other contractor's." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely: the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO stays month-to-month." },
      { q: "What is in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const newYorkCity = {
  citySlug: 'new-york', city: 'New York', state: 'New York', stateAbbr: 'NY', metro: 'New York City',

  titleTag: 'New York Contractor Marketing | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for New York contractors. Get found, get booked, and own your leads instead of renting them, all built for a brutal market.',

  eyebrow: 'New York · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets New York contractors found and booked',
  h2Exact: 'New York Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for New York's dense, cutthroat, multilingual market. One team to get you ranking, converting, and off the rented-lead treadmill for good.",
  heroProof: ['Built for the trades', 'Borough-by-borough targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free New York audit',

  intro:
    "Run a contracting business in New York and you are scrapping for attention in the densest, most cutthroat market in the country, with a dozen rivals one tap away in every neighborhood. Winning here takes three pieces firing together: a site that converts, SEO that ranks you for what people actually search, and local SEO that plants you in the Map Pack across the boroughs you serve, plus the multilingual reach to capture demand most agencies never spot. Here is how we help New York contractors pull off exactly that.",
  aioQuestion: 'How do New York contractors get more leads online?',
  aioAnswer:
    "New York contractors win more leads by pairing a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that takes the Google Map Pack borough by borough. Because the market is so dense and nearly half of residents speak another language at home, the contractors who zero in on tight neighborhoods and surface where their customers genuinely search book the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Break into the three businesses Google pins to the map when New York searches \"near me.\" For most local shops it is the highest-return move there is, done tight, borough by borough.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers genuinely search, build an asset you own instead of renting traffic from ads, and measure it all in leads rather than vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to convert visitors into booked jobs and to cut through when a dozen competitors are one tap away, not brochures that sit idle.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, then migrate it carefully so you keep every scrap of ranking you have already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in New York?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients pair a high-converting website with SEO and local SEO so they rank, convert, and own their leads in one of the toughest markets in the country." },
    { q: 'Do you work only with contractors?', a: "Almost exclusively. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contracting, so we get winter boiler emergencies, co-op and brownstone work, and insurance jobs." },
    { q: 'Why does the New York market need a different approach?', a: "It is the densest, most cutthroat home-services market in the country, and nearly half of residents speak a language other than English at home. Winning means ranking tight, borough by borough and neighborhood by neighborhood, and surfacing for searches most contractors never even target." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO run month-to-month from $750 to $3,000, with no long contract. We confirm the exact scope in your free audit." },
    { q: 'Which New York areas do you serve?', a: "All five boroughs and the neighborhoods within them: Manhattan, Brooklyn, Queens, the Bronx, and Staten Island, from Park Slope and Astoria to Riverdale, Bay Ridge, Flushing and beyond." },
    { q: 'Where should I start?', a: "Start with a free New York audit. We will look over your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};
