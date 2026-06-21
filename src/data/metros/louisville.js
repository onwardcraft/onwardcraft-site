// LOUISVILLE: per-metro x per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Louisville's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// LOUISVILLE: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Louisville is a neighborhood game, not a city one',
  body:
    "Louisville hugs the Ohio River along the Kentucky and Indiana line, and the metro counts roughly 1.4 million people once you add both banks. It lives as a Midwest and South hybrid, and that split is exactly what fills a contractor's calendar. Genuine winters bring ice storms and hard freezes that blow up HVAC and burst-pipe calls overnight, while sticky, humid summers keep AC crews running flat out from June into September. What truly separates this market, though, is its weather exposure. The Ohio has jumped its banks more times than locals care to count, and low-lying areas such as Portland and stretches of the West End carry real flood risk; when the water rises, restoration crews who already rank in those zip codes field calls at 2 a.m. Add that Louisville sits at the southern lip of Tornado Alley, so spring systems from March into May (twisters, fist-sized hail, straight-line winds) push roofing and siding work that can book a crew solid for months. And people here back local with their wallets. This is the bourbon capital of the planet, and community identity runs deep, so a contractor who reads as genuinely Louisville-grown earns trust no national chain can purchase.",
  pullQuote: 'In bourbon country, folks know the real pour from the imitation, and they pick local every single time.',
  donut: {
    title: 'How Louisville identifies',
    value: 23,
    centerLabel: 'Black community',
    legend: [
      { label: 'Black or African American', pct: 23, kind: 'teal' },
      { label: 'All other residents', pct: 77, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Spring storm roofing (Mar-May), summer HVAC (Jun-Sep), winter freeze (Dec-Feb)',
  seasonalDemand: [
    { m: 'J', v: 82, peak: true }, { m: 'F', v: 78, peak: true }, { m: 'M', v: 88, peak: true },
    { m: 'A', v: 92, peak: true }, { m: 'M', v: 85, peak: true }, { m: 'J', v: 80, peak: true },
    { m: 'J', v: 90, peak: true }, { m: 'A', v: 88, peak: true }, { m: 'S', v: 72 },
    { m: 'O', v: 52 }, { m: 'N', v: 68 }, { m: 'D', v: 80, peak: true },
  ],
  stats: [
    { value: '1.4M', label: 'people across the Louisville-Jefferson County metro' },
    { value: 'Mar-May', label: 'spring storm season: tornadoes and hail spike roofing demand', accent: true },
    { value: 'Ohio River', label: 'flood risk in low-lying neighborhoods drives restoration work' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks' },
  ],
  neighborhoods: [
    'Highlands', 'Cherokee Triangle', 'Crescent Hill', 'Clifton', 'NuLu',
    'Portland', 'St. Matthews', 'Middletown', 'Prospect', 'Germantown',
    'New Albany', 'Clarksville', 'Oldham County', 'Shelbyville', 'West End',
  ],
};

const AREAS = [
  'Highlands', 'Cherokee Triangle', 'Crescent Hill', 'Clifton', 'NuLu',
  'Portland', 'St. Matthews', 'Middletown', 'Prospect', 'Germantown',
  'New Albany', 'Clarksville', 'Oldham County', 'Shelbyville', 'Jeffersontown',
];

const FOUNDER =
  "Let me be honest with you about why OnwardCraft exists. I got tired of watching skilled contractors wire Angi and HomeAdvisor a few grand every month for leads that three of their rivals had already bought. Rented leads are quicksand; you cannot build anything lasting on them. Louisville rewards people who do honest work and actually plant roots in the community, and that is precisely the kind of business we want in our corner. So our entire job here is simple: get you ranking and converting for the work you want, in the neighborhoods you cover, with leads that belong to you and only you. No 12-month handcuffs. If the work is not landing, you show us the door.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, water damage restoration, solar, electrical, and general contracting. We know the spring storm surge, the Ohio River flood call, the deep-freeze emergency, and the high-end horse-farm jobs out in Oldham County, so every page we build mirrors how your customers genuinely search.",
  },
  {
    title: 'We get you off rented leads',
    body: "Our aim is a pipeline that is yours. Not one more monthly check to a lead broker for the same Louisville homeowner three competitors already paid to chase.",
  },
  {
    title: "We actually speak Louisville",
    body: "Targeting that goes block by block, from the Highlands to Prospect, Crescent Hill to Clarksville, plus the seasonal timing to be visible before storm season lands and ahead of the HVAC rush instead of behind it. That is the part a national shop cannot fake by dropping a city name into a template.",
  },
  {
    title: 'No contracts, no mystery',
    body: "Prices you can read, reporting tied to actual leads, month-to-month once the first 90 days are done. If we are not earning the spot, you walk. That keeps the pressure exactly where it belongs, which is on us.",
  },
];

const PROOF = {
  heading: "We're new, so here's the honest math instead of a logo wall",
  body:
    "Plenty of agencies will wave a wall of client logos at you. We are a young, founder-led shop, so we will not fake a track record we have not built yet. What we can hand you is the reason this approach works, pulled straight from Google's and the industry's own research on how people search close to home.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Picture this, and we are flagging it plainly as a projection rather than a result we claim: say a Louisville contractor pulls roughly 1,200 local \"near me\" impressions a month spread across a few neighborhoods. Climbing out of page-two invisibility into the top three is the gap between a slow drip of calls and a calendar that stays full; and in a market where storm season and a river crest can decide a contractor's whole year, ranking before those events is the entire ballgame. During your free audit we model the actual figures for your business: your rankings, your search volume, and a straight 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Louisville', state: 'Kentucky', stateAbbr: 'KY', metro: 'Louisville',
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const louisvilleLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'louisville', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Louisville Local SEO Company | OnwardCraft',
    metaDescription:
      'Search your service in Louisville and three businesses claim the map. We put you in that three so the call rings your phone, not a competitor down the road.',
    eyebrow: 'Local SEO · Louisville, KY',
    h1: 'When Louisville searches for what you do, be the first name they find',
    h2Exact: 'Louisville Local SEO Company',
    heroSubhead:
      "When someone types \"near me,\" Google hands the map to three businesses. Everyone underneath might as well not exist. We push you into that top three for your Louisville neighborhoods, from the Highlands to Prospect, St. Matthews to Clarksville, so the call rings your phone instead of whoever happened to rank first.",
    primaryCta: 'Get my free Louisville audit',
    intro:
      "Louisville local SEO boils down to a single question: when a homeowner in Crescent Hill or Middletown searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never bother scrolling. This is a city where locals choose local, and they spot a corporate template a mile off. Ranking in the right neighborhoods before spring storm season rolls in and ahead of the summer HVAC rush is the whole game. Here is exactly how you get there.",
    aioQuestion: 'How do Louisville businesses rank higher in local search?',
    aioAnswer:
      "You climb by nailing four things: a Google Business Profile tuned to the precise services and neighborhoods you want, name, address, and phone listings that match everywhere on the web, a steady drip of genuine reviews, and local content anchored to real Louisville neighborhoods. The seasonal rhythm here matters too. Spring tornadoes and hail drive roofing, Ohio River floods drive restoration, hot summers and icy winters drive HVAC, so the winners fix their profiles and content before each season rather than after. Tight targeting across the Highlands, St. Matthews, Prospect, Oldham County, and the Indiana side in New Albany and Clarksville is what divides the contractors who own the Map Pack from the ones who watch it.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three map spots', body: "Search your own service plus \"near me\" right this second. See the three businesses Google pinned to the map? They scoop up the lion's share of the clicks. If your name is not among them, the quality of your work barely registers, because most people never lay eyes on you. Cracking that top three for your Louisville neighborhoods is usually the single highest-return move a local contractor can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Louisville homeowner to four contractors, then charge each of you to scrap over them. It is a hamster wheel. Local SEO builds the reverse: a homeowner finds you, calls you, and no rival got the same lead. Over time you stop renting and start owning the pipeline outright." },
      { title: "You're invisible at the exact wrong moment", body: "A tornado rips through the South End in April. The Ohio crests and swamps Portland in March. A deep freeze locks in over a January weekend. The contractors already ranking in those neighborhoods at that precise minute book solid for months. If you have not built your Map Pack presence before the event, you are chasing calls a competitor already answered." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The single biggest lever in the Map Pack. We sharpen your categories, services, service area, photos, and posts so Google knows exactly which Louisville searches belong to you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to line up everywhere Google checks. We correct the listings that contradict each other and build the ones you never had." },
      { name: 'Reviews that keep coming', desc: "A simple system that converts finished jobs into a steady stream of reviews. It lifts your ranking and pushes more callers to actually dial." },
      { name: 'Neighborhood pages', desc: "Real pages for the Highlands, Crescent Hill, St. Matthews, Oldham County, New Albany, and the rest, so you rank for the neighborhood someone genuinely typed, not a flat \"Louisville.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The wiring under the floorboards that lets everything above it rank." },
      { name: 'Local link building', desc: "Mentions and links from Louisville sources Google already trusts: local press, neighborhood associations, bourbon-country business directories, trade partners. This is the work that separates page one from page two." },
      { name: 'Seasonal storm and flood SEO', desc: "We get you positioned for spring tornado and hail searches before March and for flood-restoration searches the moment the Ohio runs high, so you surface when demand spikes rather than after it fades.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now kicks off inside AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you back.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We pin down where you genuinely rank today across your Louisville neighborhoods and figure out which competitors are beating you in the Map Pack and what they are doing to do it." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP come first because they move the fastest. You usually catch early lift here inside a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine switch on. These compound week over week, which is the whole reason local SEO rewards starting now over starting later." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Louisville and the surrounding counties, plus the on-page work that holds them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go capture the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses scrapping across several Louisville neighborhoods.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors set on owning the map across the metro.', features: ['Everything in Local Growth', 'Local link building', 'Seasonal storm and flood SEO', 'Multi-neighborhood and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Louisville?', a: "Most Louisville engagements settle between $750 and $2,500 a month, depending on how many neighborhoods and keywords you are chasing. Our tiers sit right above this. No buried fees, no long contract, and we lock the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move inside a few weeks. The competitive Louisville keywords usually want 90 to 180 days of steady work, because reviews and citations build on each other over time. Anyone promising page one in 30 days in a market this crowded is selling you smoke." },
      { q: 'What makes Louisville local SEO different?', a: "Louisville runs on demand spikes that most contractors sleep through. Spring tornado and hail season from March into May packs roofing calendars. Ohio River flood events fire off restoration calls with no warning. Hot, sticky summers and hard winters drive HVAC at both ends of the calendar. You have to already be ranking when those events hit, not scrambling to catch up afterward." },
      { q: 'Can you target both Louisville and the Indiana side?', a: "Yes. New Albany and Clarksville are part of the metro, and plenty of Louisville contractors work both banks of the river. We build your profile and neighborhood pages to cover the full territory you actually service." },
      { q: 'Which areas do you cover?', a: "The full Louisville metro: Highlands, Cherokee Triangle, Crescent Hill, Clifton, NuLu, Portland, St. Matthews, Middletown, Prospect, Germantown, Oldham County, Shelbyville, New Albany, and Clarksville. We build genuine neighborhood pages rather than one catch-all Louisville page, because that is what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It is essentially the only thing we do. Roofing, HVAC, plumbing, water damage restoration, solar, electrical, and general contracting. We understand spring storm surges, flood restoration work, deep-freeze emergencies, and the premium clientele out in horse-farm country across Oldham and Shelby counties." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research now starts in AI rather than classic search. We structure your content and schema so those engines can read, trust, and cite your business. It is fast becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an opening 90 days because that is roughly how long local SEO needs to show genuine movement. After that it is month-to-month. If we are not delivering, you walk, and the accountability stays squarely on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never get to keep. We build rankings, a Google profile, and a review base that route leads straight to you. Over time you lean on the brokers less because the work is already heading your way." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your Louisville neighborhoods, what your Map Pack competitors are doing to outrank you, the fixes that will move you fastest, and an honest 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'louisville', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Louisville SEO Company | OnwardCraft',
    metaDescription:
      'Louisville SEO that ranks contractors on Google and delivers leads you own. Revenue-tied reporting, no lock-in, built for storm and flood season demand.',
    eyebrow: 'SEO Services · Louisville, KY',
    h1: 'Get your Louisville business to the top of Google and keep it there',
    h2Exact: 'Louisville SEO Company',
    heroSubhead:
      "Ads die the second the card stops. SEO does the opposite: rank once for what your Louisville customers search and the leads keep arriving. We build that ranking, including the seasonal storm and flood terms that fuel your busiest weeks, and we tie every report to actual calls and booked jobs.",
    primaryCta: 'Get my free Louisville SEO audit',
    intro:
      "Louisville SEO comes down to one question: when someone searches what you do in the Highlands or Middletown or Oldham County, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords across Louisville, including the spring roofing surge, summer HVAC demand, and flood-restoration searches, and we measure the result in leads, not vanity traffic.",
    aioQuestion: 'How do Louisville businesses rank higher on Google?',
    aioAnswer:
      "They rank by repairing the technical foundation of the site, tuning each page for the exact terms customers type, publishing genuinely useful local content tied to Louisville neighborhoods and seasonal events, and earning links from trusted local sources. The seasonal pattern here decides a lot: spring tornado and hail roofing, Ohio River flood restoration, summer-heat HVAC, winter freeze emergencies. The contractors who get their content and pages right before each season are the ones who own those searches when demand explodes.",
    problemHeading: "Three reasons your Louisville site isn't bringing in work",
    painPoints: [
      { title: "You're stranded on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it either. In a market stacked with local rivals who carry years of reviews and links, if you are not in the top handful of results for what you sell, your site is effectively invisible, no matter how sharp your craftsmanship is." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the instant your card stops, the leads stop with it. SEO builds an asset you keep: rankings that produce leads for months and years after the work is finished, at a fraction of the cost per lead. In Louisville, where storm season and flood events can generate a huge slice of annual revenue inside a short window, owning those rankings before the season beats scrambling to buy ads once a storm has already passed." },
      { title: "You're missing the demand that pays the most", body: "Louisville demand swings hard with the sky: spring hail and tornado damage, Ohio River flood events, summer AC calls, winter ice and freeze repairs. Contractors who rank for those terms in advance catch the surge. If your SEO ignores seasonal and emergency searches, you are handing away your most profitable weeks of the year." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood repairs Google wants before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned for the exact terms your Louisville customers search: titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers ask, earn links, and pull in leads while you are out on a job." },
      { name: 'Link building', desc: "Authority from real Louisville and Kentucky industry sources. In a crowded market, links are often the deciding factor between page one and page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you take the \"near me\" searches across your Louisville neighborhoods right alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads, not just rankings and traffic, so you always know what your SEO is genuinely worth." },
      { name: 'Seasonal & emergency SEO', desc: "We rank you for spring storm, flood restoration, summer AC, and winter freeze searches ahead of each season, so you are visible when the surge breaks rather than after it.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, right where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then draw a roadmap around the keywords most likely to drive real Louisville leads, seasonal terms included." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile: the foundation everything else needs underneath it to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus fresh local content, including the seasonal storm, flood, and emergency terms that pay here." },
      { name: 'Build authority', desc: "Links and citations from trusted Louisville and Kentucky sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we lean harder into what is working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Louisville SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that mean to own Louisville search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal storm and flood SEO', 'Multi-location or metro coverage', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Louisville?', a: "Most Louisville SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no buried fees and no long contract." },
      { q: 'How long does SEO take to work in Louisville?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, quicker on tighter neighborhood terms and slower on broad metro keywords. SEO compounds, so the gains keep stacking the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They handle different jobs. Ads buy instant traffic that vanishes when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. For Louisville contractors, owning the rankings for spring storm roofing and flood restoration before those events beats buying ads after a tornado has already hit and every competitor is bidding on the same keywords." },
      { q: 'Should my Louisville SEO target seasonal demand?', a: "Without question. March into May tornado and hail season can pack a roofer's calendar for months if they are already ranking. Ohio River flood events fire off restoration calls with almost no warning. Summer heat keeps HVAC humming June into September. Hard winters spike heating, pipe, and emergency calls. You have to be in position before each season, not chasing it once it has arrived." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal and emergency plus AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an opening 90 days because SEO needs that window to show genuine movement, then it is month-to-month. If we are not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a fast-growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which areas around Louisville do you cover?', a: "The full Louisville metro and the communities around it: Highlands, Crescent Hill, St. Matthews, Middletown, Prospect, Oldham County, Shelbyville, New Albany, Clarksville, and more, with genuine local pages instead of one generic Louisville page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that route leads directly to you. The more you own your search visibility, the less you depend on paying brokers for leads three rivals also bought." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to outrank you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'louisville', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Louisville Web Design Company | OnwardCraft',
    metaDescription:
      'Louisville web design that turns visitors into booked jobs: fast, mobile-first sites built for contractors who want to win trust in bourbon country.',
    eyebrow: 'Web Design · Louisville, KY',
    h1: 'Louisville web design that turns visitors into booked jobs',
    h2Exact: 'Louisville Web Design Company',
    heroSubhead:
      "A handsome website that never rings the phone is just a brochure. We build Louisville contractors fast, mobile-first sites engineered to turn visitors into booked work, and to read as genuinely local in a city where people can spot the difference between a community business and a corporate template.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Louisville contractor websites leak leads quietly: sluggish on a phone, a buried call button, no clear offer, no sense of being truly local. Web design done right plugs every one of those holes. We build sites that load fast, look like the professional you already are, talk to Louisville homeowners from the Highlands to Oldham County, and turn visitors into booked jobs instead of sitting there like every other contractor's page.",
    aioQuestion: 'What makes a good contractor website in Louisville?',
    aioAnswer:
      "A good Louisville contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific neighborhoods and communities you serve, from the historic Highlands to horse-farm country in Oldham County. Louisville is a city where locals buy local, so a site that reads authentically Louisville earns trust a national-chain template never will. Mobile speed and an obvious next step are what separate a site that books jobs from one that simply sits there." ,
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "Plenty of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next guy. A Louisville homeowner searching fast after a hail storm needs to see a phone number, a clear service, and a reason to trust you in seconds. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Louisville visitors are on mobile, and they bail if your site drags past a few seconds. Slow sites rank worse too. We build fast, so you keep both the visitor and the ranking." },
      { title: "It doesn't feel genuinely local", body: "Louisville people buy from Louisville businesses. A homeowner in Crescent Hill or Cherokee Triangle wants proof you know their neighborhood, not a generic page with a city name dropped in. We build sites that name the communities you work, nod to local landmarks and context, and make plain that you are rooted here, because that is what converts in this market." },
    ],
    servicesHeading: "What's in an OnwardCraft Louisville website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site shaped around your trade, your Louisville neighborhoods, and the jobs you actually want booking." },
      { name: 'Mobile-first build', desc: "Built for the phone first, because that is where nearly all your Louisville traffic lives. Fast, thumb-friendly, easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where people genuinely use them. Every page hands the visitor a next step." },
      { name: 'Copy that sells', desc: "Words that speak to Louisville homeowners and book the job, not filler that reads like every other contractor in town." },
      { name: 'Local SEO foundation', desc: "Built from the studs up to rank: clean structure, schema, fast load, and neighborhood-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both your conversions and your rankings." },
      { name: 'Neighborhood-targeted pages', desc: "Pages built around the Louisville communities you serve: Highlands, St. Matthews, Prospect, Oldham County, New Albany, so you stand apart instead of dissolving into one generic city page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts toward AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your neighborhoods, your best jobs, and your competitors, then map the site around booking more of the work you actually want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert. You see it and shape it before a single line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it around what is genuinely converting." },
    ],
    pricing: {
      heading: 'Transparent Louisville web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors running several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Neighborhood-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Louisville?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above: fixed price, no surprises, and you own the finished site outright." },
      { q: 'How long does it take to build?', a: "A focused site takes roughly 2 to 4 weeks; a larger custom build runs 4 to 8. We give you a firm timeline up front and keep you posted through each stage." },
      { q: "Will my site actually look like it belongs in Louisville, not some national template?", a: "That is the entire point. Louisville homeowners buy local, and a generic template with your city name dropped in does not win their trust. We build around the specific neighborhoods you serve, reference the communities your customers genuinely live in, and hand you a site that reads authentically Louisville instead of a franchise placeholder." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Louisville terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platform you cannot walk away from." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where nearly all your Louisville traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can genuinely manage, usually WordPress or Webflow. We will recommend the right fit in your free consult and walk you through the tradeoffs in plain English." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month, and you can leave whenever you like." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Louisville site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'louisville', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Louisville Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your Louisville website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs across bourbon country.',
    eyebrow: 'Website Redesign · Louisville, KY',
    h1: 'Redesign your Louisville website without losing your rankings',
    h2Exact: 'Louisville Website Redesign Company',
    heroSubhead:
      "An outdated site bleeds jobs every week: slow, clumsy on a phone, easy to scroll past. We redesign Louisville contractor sites to convert more and load faster, and we migrate with care so you keep every bit of ranking you have already earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks sharper but converts the same, or it launches and the rankings evaporate overnight. We do neither. We redesign Louisville contractor sites for speed and conversions, build them to feel genuinely local in a city that rewards community roots, and migrate with the redirects and SEO care that guard the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign holds your rankings and lifts them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Louisville site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and quietly costs you trust", body: "Louisville homeowners, especially the premium clients out in Prospect and Oldham County, size you up by your site in seconds. An old, cluttered design quietly steers them toward a competitor who looks more established, even when your work is the better choice. If you are chasing high-end landscaping, fencing, or remodeling clients in horse-farm country, your site has to look the part." },
      { title: "It's slow and clumsy on a phone", body: "If your site is sluggish or awkward on mobile, you are losing the majority of your Louisville visitors before they ever reach your offer. A redesign built mobile-first wins them back." },
      { title: "It blends in when it should stand out", body: "A generic old site that reads like a national chain gives a Louisville homeowner no reason to pick you. Louisville buys local. A redesign that names the neighborhoods you serve, from the Highlands historic homes to the new construction in Middletown, and signals real community roots is what converts in this market." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what is costing you leads and rankings today, so the redesign fixes real problems rather than just repainting the colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you have already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, smarter call-to-action placement, and lead forms people genuinely use. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals, which helps both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where nearly all your Louisville traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the price of your jobs, and signals genuine Louisville roots." },
      { name: 'Neighborhood-targeted rebuild', desc: "Rebuilt around the Louisville communities you serve, so the new site stands out as authentically local instead of reading like a national template with the city name dropped in.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We dig into what is losing you leads and rankings, then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build a thing." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and watch closely so rankings hold and climb rather than drop." },
      { name: 'Optimize', desc: "Post-launch tuning around what is converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Louisville redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Neighborhood-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Louisville?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result outright." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it is handled carefully, and that is exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually lifts them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes roughly 3 to 5 weeks; a larger rebuild runs 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is a chore to update, is not pulling in leads, or reads like a national template instead of a Louisville business, it is costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and sharpen your existing content, preserve what is ranking, and handle the technical migration so nothing important slips through." },
      { q: 'Will the redesign help me compete in Louisville?', a: "Yes, and that is the point in a market where buying local carries real weight. We rebuild around the specific neighborhoods and communities you serve, keep the site fast, and make the offer and call button impossible to miss, so the new site reads as genuinely Louisville rather than a generic contractor page." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely: the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const louisvilleCity = {
  citySlug: 'louisville', city: 'Louisville', state: 'Kentucky', stateAbbr: 'KY', metro: 'Louisville',

  titleTag: 'Louisville Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Louisville contractors. Get found, get booked, and own your leads instead of renting them, built for bourbon country.',

  eyebrow: 'Louisville · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Louisville contractors found and booked',
  h2Exact: 'Louisville Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Louisville's seasonal storms, the Ohio River flood market, and a community that buys local. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Louisville audit',

  intro:
    "If you run a contracting business in Louisville, you are competing in a market shaped by genuine seasonal forces: a spring tornado and hail season that spikes roofing demand, Ohio River flood events that drive restoration calls, a hot, humid summer that packs HVAC calendars, and hard winters that keep heating and pipe contractors slammed. And Louisville buys local; people here know the gap between a community business and a national chain wearing a Kentucky phone number. Winning here takes three things pulling together: a site that converts, SEO that ranks you for what people search, and local SEO that plants you in the Map Pack for the neighborhoods you serve, all in place before each season lands. Here is how we help Louisville contractors do exactly that.",
  aioQuestion: 'How do Louisville contractors get more leads online?',
  aioAnswer:
    "Louisville contractors win more leads by pairing a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that takes the Google Map Pack neighborhood by neighborhood. The seasonal pattern here decides a lot: spring storm roofing, flood restoration, summer HVAC, winter emergencies, so the contractors who rank before each season catch the surge. And because Louisville strongly favors local businesses, a site and online presence that reads authentically Louisville earns trust a national template never will.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Break into the top three businesses Google pins to the map when Louisville searches \"near me.\" The single highest-return move for most local contractors, done tight, neighborhood by neighborhood, before storm season lands.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers genuinely search, including the seasonal storm and flood terms that drive your busiest weeks, and build an asset you own instead of renting traffic from ads.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs, and to read as genuinely Louisville in a market where locals can spot the gap between a community business and a corporate template.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, migrate it carefully so you keep every bit of ranking you have already earned, and give it the authentic local feel Louisville homeowners respond to.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Louisville?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients pair a high-converting website with SEO and local SEO so they rank, convert, and own their leads, and they build it ahead of spring storm season and the summer HVAC rush." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, water damage restoration, solar, electrical, and general contracting, so we understand storm surges, flood restoration calls, deep-freeze emergencies, and the premium clients out in Oldham and Shelby counties." },
    { q: 'Why does the Louisville market need a different approach?', a: "Louisville runs on distinct demand spikes most agencies overlook: spring tornado and hail season packs roofing calendars, Ohio River flood events fire off restoration calls with little warning, hot humid summers and hard winters drive HVAC at both ends of the year. And Louisville buys local; a generic national template does not win here the way an authentically Louisville presence does." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Louisville areas do you serve?', a: "The full metro: Highlands, Cherokee Triangle, Crescent Hill, Clifton, NuLu, Portland, St. Matthews, Middletown, Prospect, Germantown, Oldham County, Shelbyville, New Albany, and Clarksville, with genuine neighborhood pages rather than one generic Louisville page." },
    { q: 'Where should I start?', a: "Start with a free Louisville audit. We will look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};
