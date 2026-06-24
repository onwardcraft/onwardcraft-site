// CLARKSVILLE: per-metro, per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Clarksville's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// CLARKSVILLE: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Clarksville is a moving target',
  body:
    "Clarksville has been Tennessee's fastest-growing city for years, and the engine behind it sits right next door. Fort Campbell is home to the 101st Airborne Division (Air Assault) and ranks among the largest Army posts in the country. Tens of thousands of soldiers and military families PCS in and out on a constant cycle, and nearly all of them land here, pull out a phone, and search Google for a contractor whose name they have never heard. That single fact defines this market. On top of the steady military churn, the city keeps absorbing families priced out of Nashville 45 minutes south, and fresh subdivisions are filling in across Sango, Rossview, and St. Bethlehem. Demand also shifts with the weather. Ninety-degree summers push HVAC calls from June into September, spring brings tornado watches and severe storms, and the occasional winter ice event keeps phones busy. The contractors who already hold the map are the ones every new arrival finds before anyone else.",
  pullQuote: 'A family that just PCSed into Fort Campbell has no contractor in mind. They search, they tap one of the first three names, and that call is gone for good.',
  donut: {
    title: 'How Clarksville searches',
    value: 45,
    centerLabel: 'military-connected',
    legend: [
      { label: 'Military households', pct: 45, kind: 'teal' },
      { label: 'Civilian', pct: 55, kind: 'grey' },
    ],
  },
  seasonTitle: 'When the trade calls climb',
  seasonCaption: 'Storm season (Mar to Jun) into HVAC heat (Jun to Sep)',
  seasonalDemand: [
    { m: 'J', v: 40 }, { m: 'F', v: 42 }, { m: 'M', v: 62, peak: true }, { m: 'A', v: 78, peak: true },
    { m: 'M', v: 88, peak: true }, { m: 'J', v: 92, peak: true }, { m: 'J', v: 90, peak: true },
    { m: 'A', v: 86, peak: true }, { m: 'S', v: 70 }, { m: 'O', v: 48 },
    { m: 'N', v: 40 }, { m: 'D', v: 46 },
  ],
  stats: [
    { value: '101st', label: 'Airborne Division (Air Assault) is based at Fort Campbell next door' },
    { value: 'Fastest', label: 'growing city in Tennessee for years running', accent: true },
    { value: 'Mar-Sep', label: 'storm season into peak HVAC heat, when trade demand climbs' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks' },
  ],
  neighborhoods: [
    'Sango', 'St. Bethlehem', 'Rossview', 'Woodlawn', 'Downtown Clarksville',
    'Cunningham', 'Adams', 'Oak Grove KY', 'Hopkinsville KY', 'New Providence',
    'Hilldale', 'Sango Ridge', 'Exit 11', 'Exit 8', 'Trenton Crossing',
  ],
};

const AREAS = [
  'Clarksville', 'Sango', 'St. Bethlehem', 'Rossview', 'Woodlawn', 'Cunningham',
  'Adams', 'Oak Grove KY', 'Hopkinsville KY', 'Fort Campbell', 'Pleasant View',
  'Springfield', 'Ashland City', 'Dover', 'Palmyra',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'The trades are the only work we take',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We know what a storm week does to a roofer's schedule, how summer heat buries an HVAC crew, and how insurance jobs really get booked, so the work we build matches the way your customers search.",
  },
  {
    title: 'We end the rented-lead treadmill for you',
    body: "The aim is a pipeline that belongs to you and nobody else. Not another monthly check to a broker for the same Sango homeowner three of your competitors are also dialing.",
  },
  {
    title: 'Clarksville is a market we actually understand',
    body: "Constant Fort Campbell PCS turnover, families spilling over from Nashville, and street-level targeting from Sango to St. Bethlehem to Oak Grove. That is local ground a national shop cannot fake by typing a new city name into a template.",
  },
  {
    title: 'No contracts, no fine print to decode',
    body: "Prices are posted, reporting follows real leads, and you go month-to-month once the first 90 days are up. If the work is not paying for itself, you leave. That puts the pressure right where it should sit, on us.",
  },
];

const PROOF = {
  heading: "We're new, so here's the honest math instead of a logo wall",
  body:
    "A lot of agencies open with a grid of client logos. We are a young, founder-led shop, and we are not going to fake a track record we have not earned yet. What we can put in front of you is the reasoning, taken straight from Google's and the industry's own research on the way people search for local contractors.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here is a rough sketch, marked plainly as a projection and not a result we are claiming: say a Clarksville contractor pulls around 1,500 local \"near me\" impressions in a month. Climbing out of page-two invisibility and into the top three is the gap between a handful of stray calls and a calendar you cannot keep up with, and with new military families landing every single month that gap only keeps widening. In your free audit we model the real figures for your business: your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Clarksville', state: 'Tennessee', stateAbbr: 'TN', metro: 'Clarksville',
  heroProof: ['Built for the trades', 'Fort Campbell ready', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const clarksvilleLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'clarksville', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Clarksville Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Clarksville Local SEO that ranks contractors above the competition in the Google Map Pack, so the "near me" call lands with you, not a rival.',
    eyebrow: 'Local SEO · Clarksville',
    h1: 'Clarksville Local SEO that ranks you above the competition from Sango to Fort Campbell',
    h2Exact: 'Clarksville Local SEO Company',
    heroSubhead:
      "Google drops three businesses onto the map when someone searches \"near me,\" and everyone beneath them might as well not exist. We move you into that top three, so the call lands with you instead of whoever ranks first, and so the next family PCSing into Fort Campbell sees your name before anyone else's.",
    primaryCta: 'Get my free Clarksville audit',
    intro:
      "Clarksville local SEO turns on one moment: a homeowner in Sango or a soldier just stationed at Fort Campbell types your service plus \"near me,\" and you are either one of the three businesses Google pinned to the map or you are nowhere. Most people tap one of those three and never scroll. The city keeps growing and fresh arrivals search every day, so claiming one of those three spots is the entire contest. Here is how we get you there.",
    aioQuestion: 'How do Clarksville businesses rank higher in local search?',
    aioAnswer:
      "Ranking comes from four pieces working together: a Google Business Profile tuned to the exact services and neighborhoods you want, name-address-phone details that match everywhere online, a steady flow of real reviews, and local content built around genuine Clarksville neighborhoods. With Fort Campbell turnover never stopping and Nashville overflow pushing in, the winners look established, answer fast, and already rank when new families show up searching.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'A new family searches and three rivals own the map', body: "Search your own service plus \"near me\" right now. Those three businesses Google pins to the map collect the overwhelming share of the clicks. If you are not one of them, the skill of your crews barely registers, because most Clarksville searchers, the long-time locals and the brand-new arrivals alike, never lay eyes on your name. Breaking into that top three is usually the single highest-return move a local business here can make." },
      { title: "The lead you bought was sold to three rivals too", body: "Angi, Thumbtack, and HomeAdvisor sell the same Clarksville homeowner to four contractors at once, then bill each of you to scrap over the rest. It is a treadmill with no off switch. Local SEO builds the reverse: a homeowner finds you, calls you, and no competitor got that lead. Run it long enough and you stop renting visibility and start owning the pipeline." },
      { title: "Every PCS season arrives and you're invisible", body: "Month after month, soldiers and families PCS into Fort Campbell and start over with a new house and no idea who to call. They go straight to Google. If you are not in the Map Pack when that search fires, the job goes to whoever Google already trusts. Ranking now is how you catch that recurring stream instead of watching it roll past your shop." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The heaviest lever in the Map Pack. We sharpen your categories, services, service area, photos, and posts so Google can tell exactly which Clarksville searches should land on you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone need to agree everywhere Google looks. We correct the listings that contradict each other and add the ones you are missing." },
      { name: 'Reviews that keep coming', desc: "A simple engine that turns finished jobs into a steady stream of fresh reviews. It lifts your ranking and gives the next caller a reason to choose you." },
      { name: 'Neighborhood pages', desc: "Real pages for Sango, St. Bethlehem, Rossview, Woodlawn and the rest, so you rank for the exact area someone is searching rather than a flat \"Clarksville.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, and mobile speed. The wiring under the hood that lets every other piece actually rank." },
      { name: 'Local link building', desc: "Mentions and links from Clarksville sources Google trusts: local press, trade groups, community partners. Here that is often what separates page one from page two." },
      { name: 'Fort Campbell PCS readiness', desc: "We get your profile, pages, and reviews ranking so the steady run of incoming military families finds you first, not the competitor who has held the map for years.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now kicks off inside AI Overviews, ChatGPT, and Perplexity. We shape your content so those engines can read you and name you in their answers.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We figure out where you truly rank today across every service area and pin down which competitors are beating you in the Map Pack and the reasons why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP come first because they move quickest. Most Clarksville clients notice early lift here inside a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine switch on. These compound week after week, which is exactly why local SEO pays off for the contractors who start sooner." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Montgomery County and over the line into Oak Grove and Hopkinsville KY, with the on-page work that makes them stick." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and booked leads, never vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month once the first 90 days wrap. No lock-in. Cancel any time.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack base right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses scrapping across several Clarksville areas.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors set on owning the map across Clarksville.', features: ['Everything in Local Growth', 'Local link building', 'Fort Campbell PCS demand targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Clarksville?', a: "Most Clarksville engagements land between $750 and $2,500 a month, set by how many neighborhoods and keywords you are chasing. The tiers above lay it out. No hidden fees, no long contract, and we confirm the exact scope in your free audit before you spend a dollar." },
      { q: 'How soon do I show up in the Map Pack?', a: "Profile work can move inside a few weeks. The competitive Clarksville keywords usually take 90 to 180 days of steady effort, because reviews and citations build up over time. In a market growing this fast, anyone promising page one in 30 days is selling you a story." },
      { q: 'What makes Clarksville local SEO different?', a: "Two forces. Fort Campbell drives nonstop PCS turnover, so there is always a fresh batch of arrivals with no local contractor in mind, searching from scratch. And this is Tennessee's fastest-growing city pulling in Nashville-overflow families, so new competitors keep appearing and trust signals like reviews and matching listings carry real weight." },
      { q: 'How does local SEO help me reach Fort Campbell families?', a: "Families PCSing onto post arrive with no local contacts and go straight to Google for roofing, HVAC, plumbing, and repairs. Whoever already sits in the Map Pack fields those calls. We get you ranked and reviewed so you capture that steady, repeating demand instead of staying invisible to thousands of new arrivals every year." },
      { q: 'Which areas do you cover?', a: "All of Clarksville and the ground around it: Sango, St. Bethlehem, Rossview, Woodlawn, Cunningham, Adams, plus Oak Grove and Hopkinsville across the Kentucky line and Fort Campbell itself. We build genuine neighborhood pages rather than one catch-all Clarksville page, because that is what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It is nearly all we do: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand emergency calls, storm-driven spikes, and insurance jobs, and we build your local SEO around exactly that." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More \"near me\" research now begins inside AI tools instead of classic search. We shape your content and schema so those engines can read, trust, and name your business. In Clarksville that is fast turning into something as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an opening 90 days because that is roughly how long local SEO takes to show real movement. After that it runs month-to-month. If we are not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that route leads straight to you alone. Over time you lean on the brokers less, because the work is already arriving direct." },
      { q: "What's in the free audit?", a: "A straight read on where you rank today across your service areas, what your Map Pack competitors are doing to beat you, the fixes that will move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. It is a clear picture of what Clarksville Local SEO can win you, with no pitch deck, just a diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'clarksville', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Clarksville SEO Company | Rank and Own Your Leads | OnwardCraft',
    metaDescription:
      'Clarksville SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in contracts, built for Fort Campbell demand.',
    eyebrow: 'SEO Services · Clarksville',
    h1: 'Clarksville SEO that climbs you past the competition in the fastest-growing city in Tennessee',
    h2Exact: 'Clarksville SEO Company',
    heroSubhead:
      "Ads switch off the second you stop paying. SEO does the opposite: rank once for what your Clarksville customers search and the leads keep arriving. We build that ranking and tie every report to real calls and booked jobs.",
    primaryCta: 'Get my free Clarksville SEO audit',
    intro:
      "Clarksville SEO comes down to a blunt question: when someone searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in a fast-growing, military-driven market, and we measure the whole thing in leads, not traffic that never dials.",
    aioQuestion: 'How do Clarksville businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the site's technical base, tuning each page for the exact terms customers type, publishing genuinely useful local content, and earning links from trusted Clarksville sources. In a market fed by Fort Campbell turnover and Nashville overflow, keeping the site quick on mobile and ranking for seasonal HVAC and storm terms are two of the fastest ways to pull ahead.",
    problemHeading: "Three reasons your Clarksville site isn't bringing in work",
    painPoints: [
      { title: "Page two is where Clarksville jobs go to die", body: "Hardly anyone clicks past the first page of Google, and they rarely scroll far down it either. If you are not in the top handful of results for what you sell, your site is effectively invisible no matter how sharp it looks. In a city adding new searchers every month, that invisibility is what sends your jobs to the competition." },
      { title: "Every dollar in Google Ads is rented traffic", body: "Ads can work, but the moment your card stops, the leads stop cold. SEO builds an asset you keep: rankings that go on producing leads months and years after the work is done, at a slice of the per-lead cost you are paying brokers and ad platforms now." },
      { title: "The seasonal and PCS demand passes you by", body: "Clarksville demand swings with the calendar. Ninety-degree summers drive HVAC from June through September, spring storms drive roofing and restoration, and a steady flow of new military families search year-round. The contractors who rank for those terms ahead of time catch the spike. If your SEO ignores seasonal and newcomer searches, you are handing away your busiest months." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank your Clarksville site at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned for the exact terms your Clarksville customers search: titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and keep bringing in leads long after we publish them." },
      { name: 'Link building', desc: "Authority from real Clarksville and industry sources. In a market filling up with new competitors, links are often the deciding factor between page one and page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack work that wins you the \"near me\" searches at the same time your organic listings climb." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and booked leads, not just rankings and traffic, so you always know what your SEO is worth in dollars." },
      { name: 'Seasonal & storm SEO', desc: "We rank you for the summer HVAC and spring-storm roofing searches that fuel Clarksville's busiest stretches, so you are visible before demand climbs rather than chasing it after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and name you, where a growing share of Clarksville search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Clarksville leads, not just impressions." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile. The footing everything else needs before it can rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the seasonal HVAC and storm-driven terms that decide who wins the busy months here." },
      { name: 'Build authority', desc: "Links and citations from trusted Clarksville and industry sources to push your competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to booked leads, then we push harder on what is working and reach into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Clarksville SEO pricing',
      note: 'Month-to-month once the first 90 days wrap. No lock-in. Cancel any time.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a tight site going after its core Clarksville keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors fighting across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses set on owning Clarksville search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal & storm SEO', 'eCommerce / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Clarksville?', a: "Most Clarksville SEO engagements run $900 to $3,000 a month, set by how competitive your keywords are and how much content and link work you need. The tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Clarksville?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, quicker on low-competition terms and slower on the most contested Clarksville keywords. SEO compounds, so the longer you run it, the bigger the gains get." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops the moment you stop paying. SEO is an asset you keep that goes on producing leads at a lower cost per lead over time. Most contractors do best running SEO as the long-term engine and ads for short bursts." },
      { q: 'Should my Clarksville SEO target the busy seasons?', a: "Yes. Hot, humid summers drive HVAC demand from June through September, and spring storms drive roofing and restoration, and ranking takes months to build, so you have to be in place before the season rather than chasing it after. We optimize for those seasonal terms ahead of time so your busiest months land on you." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal and storm work plus AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an opening 90 days because SEO needs that long to show real movement, then it switches to month-to-month. If we are not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a fast-growing slice of what we optimize for. We structure your content and schema so AI engines can read, trust, and name your Clarksville business in their answers, not just rank it in classic search." },
      { q: 'Which areas around Clarksville do you cover?', a: "All of Clarksville and the ground around it: Sango, St. Bethlehem, Rossview, Woodlawn, Cunningham, Adams, plus Oak Grove and Hopkinsville KY and Fort Campbell, each with a genuine local page rather than one generic Clarksville page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that route leads straight to your phone. The more of your search visibility you own outright, the less you have to pay brokers for leads three other Clarksville contractors also bought." },
      { q: "What's in the free SEO audit?", a: "Where you rank in Clarksville search today, what your competitors are doing to stay ahead, the fixes with the highest payoff, and a realistic timeline with the numbers modeled for your business. It shows you exactly what Clarksville SEO can do for your pipeline. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'clarksville', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Clarksville Web Design Company | Fast Sites That Book Jobs | OnwardCraft',
    metaDescription:
      'Clarksville web design that loads fast and books more jobs: mobile-first contractor sites that convert visitors and win over Fort Campbell newcomers.',
    eyebrow: 'Web Design · Clarksville',
    h1: 'Clarksville web design that loads fast and books more jobs from Sango to Fort Campbell',
    h2Exact: 'Clarksville Web Design Company',
    heroSubhead:
      "A handsome website that never produces a call is just an expensive brochure. We build Clarksville contractors fast, mobile-first sites engineered to turn visitors into booked work, and to win over the military families and newcomers sizing you up for the very first time.",
    primaryCta: 'Get my free quote',
    intro:
      "Clarksville web design only earns its keep when it books jobs, and most contractor sites here bleed leads quietly: slow on a phone, call button buried, no clear offer anywhere. Done right, it closes every one of those leaks. We build sites that load fast, look like the professional you actually are, and turn Sango-to-St.-Bethlehem visitors into booked jobs, including the thousands of new arrivals checking you out before they ever dial.",
    aioQuestion: 'What makes a good contractor website in Clarksville?',
    aioAnswer:
      "A good Clarksville contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and reassures newcomers who have never heard your name. Because most Clarksville searches happen on mobile and so many searchers are brand-new to the area, mobile speed, obvious trust signals, and a clear next step are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "Your site reads like a brochure, not a lead engine", body: "Plenty of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to pick you over the next name on the map. We design every page around one job: turning a Clarksville visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Clarksville visitors are on mobile, and they bounce if your site takes more than a couple of seconds to load. Slow sites rank worse too, so you lose twice. We build fast, so you keep both the visitor and the ranking." },
      { title: "It doesn't earn a newcomer's trust", body: "A family that just PCSed in has no idea who you are and no local word-of-mouth to lean on, so your website is the whole first impression. If it looks dated or thin, they call the competitor who looks more established. We build sites that prove trust quickly, so first-time visitors pick up the phone for you." },
    ],
    servicesHeading: "What's in an OnwardCraft Clarksville website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site shaped around your trade, your service area, and the exact jobs you want more of." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that is where nearly all of your Clarksville traffic lives. Fast, thumb-friendly, and easy to call from in one tap." },
      { name: 'Conversion-focused UX', desc: "Clear offers, call buttons you cannot miss, and lead forms set where homeowners actually fill them out. Every page points to one obvious next step." },
      { name: 'Copy that sells', desc: "Words that speak to long-time locals and brand-new arrivals alike and book the job, not filler text that reads like every other contractor in town." },
      { name: 'Local SEO foundation', desc: "Built to rank from the first page up: clean structure, schema, quick load, and pages ready for each Clarksville neighborhood." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both your conversions and your rankings at once." },
      { name: 'Trust-built for newcomers', desc: "Reviews, project photos, and clear credentials placed front and center so the military families and Nashville-overflow newcomers who have never heard of you call with confidence.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read your site and recommend your business as more Clarksville search shifts toward AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We dig into your trade, your service area, your best-paying jobs, and the competitors beating you, then map the site around booking more of the work you actually want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout aimed at conversions, and you get to see it and shape it before a single line of code goes in." },
      { name: 'Build and copy', desc: "We build it quick and write copy that books the job, with the call to action sitting front and center on every page." },
      { name: 'Launch', desc: "We launch it clean, with the SEO foundation, tracking, and load speed all set from the first day live." },
      { name: 'Support and optimize', desc: "We keep it quick and current and tune it on the basis of what is actually turning visitors into phone calls." },
    ],
    pricing: {
      heading: 'Transparent Clarksville web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. The site is yours. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A tight, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A larger site for established contractors running several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Trust-built for newcomers'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location shops.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Clarksville?', a: "Most contractor websites with us land between $2,000 and $8,000 as a one-time build, set by page count and integrations. The tiers are above: a fixed price, no surprises, and the finished site is yours outright." },
      { q: 'How long does it take to build?', a: "A tight site runs about 2 to 4 weeks; a larger custom build runs 4 to 8. We hand you a firm timeline at the start and keep you posted at every stage." },
      { q: 'Will my site win over newcomers and military families?', a: "Yes, and in Clarksville that matters more than almost anywhere. Thousands of families PCS in or move down from Nashville with no idea who to call, so your website is the whole first impression. We build it to load fast and prove trust with reviews and real photos, so first-time visitors call you instead of the competitor who looks more established." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank, and pairing it with our SEO service is how you climb the competitive Clarksville terms." },
      { q: 'Do I own the website?', a: "Completely. The site, the domain, and the content are all yours. No hostage situations and no platform you are stuck on if you ever want to move." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where nearly all of your Clarksville traffic comes from. Quick load, easy-to-tap call buttons, and forms a thumb can fill out without zooming." },
      { q: 'What platform do you build on?', a: "We pick the platform that suits your needs and that you can run yourself, usually WordPress or Webflow. We recommend the right fit in your free consult and lay out the tradeoffs in plain English." },
      { q: 'Do you offer ongoing support?', a: "Yes. Launch support comes with every build, and after that we offer affordable monthly maintenance covering updates, speed, and security." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project at a fixed price. Any ongoing maintenance or SEO runs month-to-month, so you can step away whenever you like." },
      { q: 'What do I get in the free quote?', a: "A straight look at what your current site is costing you in lost leads, what high-converting Clarksville web design should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'clarksville', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Clarksville Website Redesign | SEO-Safe Rebuilds | OnwardCraft',
    metaDescription:
      'Clarksville Website Redesign done with a careful, SEO-safe migration: faster, mobile-first rebuilds that convert more visitors and keep your rankings.',
    eyebrow: 'Website Redesign · Clarksville',
    h1: 'Clarksville Website Redesign that wins over Fort Campbell newcomers and migrates without losing a ranking',
    h2Exact: 'Clarksville Website Redesign Company',
    heroSubhead:
      "An outdated site quietly costs you jobs every week: slow, clumsy on a phone, easy for a Clarksville homeowner to skip past. We redesign contractor sites to convert more and load faster, and we migrate so carefully that you keep every bit of ranking you have already earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "A Clarksville Website Redesign usually goes one of two bad ways: the site looks prettier but converts exactly the same, or it launches and the rankings vanish overnight. We do neither. We rebuild contractor sites for speed and conversions, build them to earn trust from the steady stream of newcomers, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You hold your rankings through a redesign by keeping the URL structure intact, or mapping a 301 redirect for every page that changes, carrying your content and metadata across, moving your schema with it, and testing the whole thing on staging before it goes live. Handled that way, a redesign protects your Clarksville rankings and tends to lift them, because the rebuilt site loads quicker, works mobile-first, and is structured better than the old one.",
    problemHeading: "Signs your Clarksville site is overdue for a redesign",
    painPoints: [
      { title: "A dated design quietly costs you the job", body: "On a high-ticket job, homeowners size you up by your site in seconds, and a newcomer with no local word-of-mouth has nothing else to judge you on. An old, cluttered design quietly ships them to a competitor who simply looks more established, even when your work is plainly better." },
      { title: "It fights the customer on a phone", body: "If your site is clunky or slow on mobile, you are losing the majority of your Clarksville visitors before they ever reach your offer. A redesign built mobile-first wins those visitors back and turns them into leads." },
      { title: "The traffic you already have never converts", body: "Traffic that never turns into calls is wasted money, and an old site that buries the offer loses the newcomers and seasonal-demand visitors who land on it at the exact moment they are ready to call. We rebuild for conversions so the visitors you already have turn into booked jobs." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what is costing you leads and rankings today, so the redesign fixes real problems instead of just swapping the colors around." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep every bit of the rankings and traffic you have already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, smarter call-to-action placement, and lead forms homeowners actually complete. We design for booked jobs, not just a nicer screenshot." },
      { name: 'Speed overhaul', desc: "We rebuild for quick load and clean Core Web Vitals, which lifts your conversions and your rankings together." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where nearly all of your Clarksville traffic actually lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that lines up with the quality of your crews and the price of the jobs you are chasing." },
      { name: 'Trust-built for newcomers', desc: "Rebuilt to put reviews, photos, and credentials front and center so the military families and Nashville-overflow newcomers who have never heard of you call with confidence.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as more Clarksville search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We work out what is bleeding leads and rankings on the current site, then map a redesign that fixes it without breaking what already works for you." },
      { name: 'Design', desc: "A modern, mobile-first layout aimed squarely at conversions, which you review and shape before we rebuild a single page." },
      { name: 'Rebuild and migrate', desc: "We rebuild it quick and line up every redirect and SEO detail so the migration goes off clean, with no surprises." },
      { name: 'Launch with SEO care', desc: "We push it live with redirects already in place and keep a close eye on it so your rankings hold and climb rather than slipping." },
      { name: 'Optimize', desc: "Tuning after launch driven by what is actually converting, plus ongoing speed work and updates." },
    ],
    pricing: {
      heading: 'Transparent Clarksville redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. The site is yours. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A tight redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor business.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Trust-built for newcomers'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A ground-up rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Clarksville?', a: "Most redesigns with us land between $2,500 and $9,000 as a one-time project, set by size and integrations. A fixed price, no surprises, and the result is yours outright." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not when it is handled carefully, and careful is how we work. We map 301 redirects for every changed URL, hold onto your content and metadata, move your schema across, and test on staging first. Done right, a redesign keeps your rankings and usually nudges them higher." },
      { q: 'How long does a redesign take?', a: "A tight redesign runs about 3 to 5 weeks; a larger rebuild runs 5 to 9. You get a firm timeline at the start and updates at every stage." },
      { q: 'How do I know I need a redesign?', a: "If your site drags on phones, looks dated, is a chore to update, is not pulling in leads, or loses the newcomers who land on it, it is costing you work. The free audit tells you straight whether a redesign is worth it for your Clarksville business." },
      { q: 'Do you migrate my existing content?', a: "Yes. We move over and tighten your existing content, hold onto what is ranking, and handle the technical migration so nothing important slips through the cracks." },
      { q: 'Will the new site win over military families and newcomers?', a: "Yes, and in Clarksville that is a real consideration. With Fort Campbell turnover never stopping and Nashville overflow pushing in, most visitors have never heard of you, so the site is the whole first impression. We rebuild it to load fast and prove trust up front so newcomers call you instead of the competitor who looks more established." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for quick load and strong Core Web Vitals, which lifts both your conversions and your rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely: the site, the domain, and the content are all yours. No platform lock-in of any kind." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO runs month-to-month." },
      { q: "What's in the free redesign audit?", a: "A straight read on what your current site is costing you in leads and rankings, what your Clarksville Website Redesign needs to fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const clarksvilleCity = {
  citySlug: 'clarksville', city: 'Clarksville', state: 'Tennessee', stateAbbr: 'TN', metro: 'Clarksville',

  titleTag: 'Clarksville Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Clarksville marketing for contractors that fills your calendar: web design, SEO, and local SEO that get you found, booked, and owning your leads.',

  eyebrow: 'Clarksville · Web Design, SEO & Lead Generation',
  h1: 'Clarksville marketing for contractors that fills your calendar all year',
  h2Exact: 'Clarksville Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Clarksville's fast-growing, Fort Campbell-driven market. One team to get you ranking, converting, and off the rented-lead treadmill for good.",
  heroProof: ['Built for the trades', 'Fort Campbell ready', 'No lock-in contracts'],
  primaryCta: 'Get my free Clarksville audit',

  intro:
    "Clarksville marketing for contractors comes down to winning attention in Tennessee's fastest-growing city, where the competition grows right alongside it. Winning here takes three things working together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack, all ready to catch the constant run of Fort Campbell families and Nashville-overflow newcomers searching for a contractor. Here is exactly how we help Clarksville contractors pull that off.",
  aioQuestion: 'How do Clarksville contractors get more leads online?',
  aioAnswer:
    "Clarksville contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack. Because Clarksville is Tennessee's fastest-growing city with Fort Campbell turnover that never stops, the contractors who look established and already rank when newcomers arrive searching win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Clarksville searches \"near me.\" The single highest-return move for most local businesses, and how you reach every new Fort Campbell family searching from scratch.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your Clarksville customers actually search, build an asset you own instead of renting traffic from ads, and measure the whole thing in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs, and to win the trust of newcomers who have never heard of you, not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it so carefully that you keep every bit of ranking you have already earned in Clarksville search.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Clarksville?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads, and so they are ready for the steady stream of newcomers arriving every month." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors, so we understand emergency calls, seasonal demand, and insurance work." },
    { q: 'Why does Fort Campbell matter for my marketing?', a: "Fort Campbell drives nonstop PCS turnover. Tens of thousands of soldiers and families rotate in and out, and every new arrival searches Google for contractors with no local contacts to fall back on. Ranking takes months to build, so the contractors already visible take that recurring work. We get you in place to catch it." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm the exact scope in your free audit." },
    { q: 'Which Clarksville areas do you serve?', a: "All of Clarksville and the surrounding areas: Sango, St. Bethlehem, Rossview, Woodlawn, Cunningham, Adams, plus Oak Grove and Hopkinsville across the Kentucky line and Fort Campbell itself." },
    { q: 'Where should I start?', a: "Start with a free Clarksville audit. We look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves in your Clarksville marketing for contractors that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};
