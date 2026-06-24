// AMARILLO — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Amarillo's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// AMARILLO — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why winning Amarillo search is a market all its own',
  body:
    "Amarillo sits high on the flat, open Texas Panhandle, where storm cells build for miles before they reach town and drop hail the size of baseballs. That is not a freak headline here; it is a spring ritual. Roofing crews and restoration teams run flat out from April into August, and the only contractors who clear the backlog are the ones Google already shows when the next cell lights up the radar. Storm season is only half the story. Amarillo lives on extremes: a single spring or fall day can swing 60 degrees, so cooling demand in summer and heating demand in winter both spike hard, and local HVAC shops carry a year-round load most cities never feel. Under all of it sits a grounded, hard-working economy built on cattle, beef processing, and the Pantex plant, with homeowners who quietly vet contractors online long before the phone ever rings. Three pins on the map decide who gets the call.",
  pullQuote: 'The minute the next cell drops hail on the Panhandle, the contractors already pinned to the map are the ones writing up the work.',
  donut: {
    title: 'Amarillo community',
    value: 35,
    centerLabel: 'Hispanic',
    legend: [
      { label: 'Hispanic', pct: 35, kind: 'teal' },
      { label: 'Other', pct: 65, kind: 'grey' },
    ],
  },
  seasonTitle: 'When the calls come flooding in',
  seasonCaption: 'Hail and tornado season (Apr-Aug), plus HVAC extremes all year',
  seasonalDemand: [
    { m: 'J', v: 38 }, { m: 'F', v: 36 }, { m: 'M', v: 52 }, { m: 'A', v: 78, peak: true },
    { m: 'M', v: 94, peak: true }, { m: 'J', v: 96, peak: true }, { m: 'J', v: 92, peak: true },
    { m: 'A', v: 88, peak: true }, { m: 'S', v: 62 }, { m: 'O', v: 48 },
    { m: 'N', v: 42 }, { m: 'D', v: 44 },
  ],
  stats: [
    { value: '300K+', label: 'residents across the Amarillo metro and the surrounding Panhandle towns you serve' },
    { value: 'Apr-Aug', label: 'hail and tornado window, when roofing and restoration phones never stop ringing', accent: true },
    { value: '60°F', label: 'swing a single Panhandle day can deliver, keeping HVAC demand intense all year' },
    { value: 'Top 3', label: 'map pins that scoop up nearly every click the moment a homeowner searches' },
  ],
  neighborhoods: [
    'Wolflin', 'Sleepy Hollow', 'River Road', 'Tascosa', 'Canyon', 'Bushland',
    'Sunset Center', 'Medical Center', 'North Heights', 'South Georgia', 'Puckett',
    'English Village', 'Westover Park', 'Airport Area', 'Coulter Drive corridor',
  ],
};

const AREAS = [
  'Amarillo', 'Canyon', 'Bushland', 'Tascosa', 'Wolflin', 'Sleepy Hollow',
  'River Road', 'Randall County', 'Potter County', 'Hereford', 'Pampa',
  'Borger', 'Clarendon', 'Dumas', 'Plainview',
];

const FOUNDER =
  "Let me be honest about why OnwardCraft exists. I got tired of watching genuinely good contractors wire Angi and HomeAdvisor a few grand a month for leads their three nearest rivals bought off the same list. In Amarillo it stings even more, because every spring the hail brings a flood of work, and the shops that catch it are not always the best ones; they are simply the ones Google already trusts. That is the entire job I take on here: get you ranking and converting for the jobs you want, in the Panhandle neighborhoods you actually drive to, and make those leads yours to keep. No 12-month handcuffs. If the work is not paying off, you cut us loose.";

const WHY = [
  {
    title: 'Trades are the only thing we build for',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, general contractors. We know how storm season, after-hours emergencies, and insurance claims actually play out, so every page we build mirrors how your buyers really search, right down to the hail-hit Panhandle homeowner who needs someone on the roof this week.",
  },
  {
    title: 'We get you off the rented-lead treadmill',
    body: "The aim is a pipeline that belongs to you, not one more monthly invoice to a broker selling the same homeowner to three competitors, including the out-of-state chasers who descend on Amarillo the week after a big hail event.",
  },
  {
    title: 'We genuinely know Amarillo',
    body: "Panhandle hail and tornado surges, the 60-degree temperature swings that keep HVAC running every season, and a practical, hard-working homeowner base from Wolflin out to Canyon. None of that comes from a national shop pasting a new city name into the same old template.",
  },
  {
    title: 'No contracts, nothing hidden',
    body: "Prices on the page, reporting tied to real leads, month-to-month once the first 90 days are up. If we are not earning the spot, you walk. That keeps the pressure squarely on us.",
  },
];

const PROOF = {
  heading: "We are new, so here is the honest math in place of a logo wall",
  body:
    "Plenty of agencies will flash a wall of client logos at you. We are a young, founder-led shop, so we will not fake a track record we have not built yet. What we can put in front of you is why this approach works, pulled straight from Google's own research and the industry's data on how people search close to home.",
  stats: [
    { value: '46%', label: 'of Google searches carry local intent', n: 46 },
    { value: '76%', label: 'of people who search local on a phone visit a business that same day', n: 76 },
    { value: '28%', label: 'of local searches turn into a purchase', n: 28 },
  ],
  projection:
    "Here is a rough sketch, clearly flagged as a projection and not a result we are claiming: suppose an Amarillo contractor pulls roughly 1,200 local \"near me\" impressions a month. Climbing out of page-two obscurity into the top three is the gap between a trickle of calls and a calendar that is fully booked, and in the two weeks after a major hail event that gap widens fast. In your free audit we run the real numbers for your shop: your rankings, your local search volume, and a straight 90-to-180-day path.",
  disclaimer:
    "The figures above are published benchmarks (Google and BrightLocal) plus one illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Amarillo', state: 'Texas', stateAbbr: 'TX', metro: 'Amarillo',
  heroProof: ['Built for the trades', 'Hail-season ready', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const amarilloLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'amarillo', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Amarillo Local SEO Company | Win the Map Pack',
    metaDescription:
      'Amarillo Local SEO that wins the Map Pack: when a homeowner searches, three businesses show on the map and we put you in those three before hail season hits.',
    eyebrow: 'Local SEO · Amarillo, TX',
    h1: 'Amarillo Local SEO that wins you the top three on the map before the next hailstorm',
    h2Exact: 'Amarillo Local SEO Company',
    heroSubhead:
      "Search \"near me\" and Google pins exactly three businesses to the map. Everyone below that line might as well not exist. We move you into that top three so the call rings your phone, and so you are already ranking the day the next Panhandle hailstorm sends every homeowner hunting for a roofer.",
    primaryCta: 'Get my free Amarillo audit',
    intro:
      "Amarillo local SEO hinges on one question: when a homeowner in Wolflin or Canyon types your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap a pin and never scroll past it. In a market where chasers swarm in after every hail event and fight over the same backlog, being visible before the storm is the whole edge. Here is how you build it, and keep it.",
    aioQuestion: 'How do Amarillo businesses rank higher in local search?',
    aioAnswer:
      "You climb by nailing four things: a Google Business Profile tuned to the exact services and neighborhoods you want; name, address, and phone details that match everywhere online; a steady flow of real reviews; and local content tied to actual Amarillo and Panhandle neighborhoods. Because the Panhandle is storm-prone and temperature-extreme, the winners look established, answer fast, and are already ranking the moment hail-season demand spikes.",
    problemHeading: "When the phone goes quiet, it is usually one of these three",
    painPoints: [
      { title: 'Competitors own all three pins on the map', body: "Search your own service plus \"near me\" right now. Those three businesses Google pins to the map, the Google Map Pack, pull the lion's share of the clicks. If you are not one of them, the quality of your work barely matters, because most homeowners never lay eyes on your name. In Amarillo, after a single big hail event, those three pins can be worth a year of backlog." },
      { title: "You are paying for leads that were never yours", body: "Angi, Thumbtack, and HomeAdvisor sell the same Amarillo homeowner to four contractors, then bill each of you to scrap over the deal. After a storm, out-of-state chasers snap up those same leads too. Local SEO flips that: a homeowner finds you, calls you, and no one else got the lead." },
      { title: "You are not ready when the cell drops", body: "Every spring the Panhandle takes a beating from hail and tornadoes. Demand for roofing, restoration, and HVAC does not climb, it detonates, and the contractors already ranking grab the calls. Sit invisible on the map when the next cell hits and the work goes to whoever Google already trusts." },
    ],
    servicesHeading: 'What it actually takes to rank you here',
    services: [
      { name: 'Google Business Profile', desc: "The single biggest lever on the map. We tune your categories, services, service area, photos, and posts so Google knows precisely which Amarillo searches should land on you and turn into calls." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to line up everywhere Google checks. We fix the listings that contradict each other and build the ones you are missing, so trust and rankings climb." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns every finished Panhandle job into a fresh review. It lifts your ranking and gets homeowners dialing you instead of the next name down the list." },
      { name: 'Neighborhood pages', desc: "Real pages for Wolflin, Sleepy Hollow, River Road, Canyon, Bushland and the rest, so you rank for the neighborhood a homeowner actually typed, not just the word \"Amarillo.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The wiring under the hood that lets every other piece earn its ranking." },
      { name: 'Local link building', desc: "Mentions and links from Amarillo sources Google respects: local press, trade groups, and real partners. In this market that is often what splits page one from page two." },
      { name: 'Hail-season readiness', desc: "We get your profile, pages, and reviews ranking before the first cell forms, so you catch the demand surge and book it instead of scrambling once the hail has already fallen.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now kicks off inside AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you, trust you, and recommend you by name.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We measure where you genuinely rank today across every service area and pin down which competitors are beating you on the map and exactly why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP come first, because they move fastest. Most Amarillo shops see early lift here inside a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now over waiting until March when the storms are already brewing." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Potter and Randall counties, with the on-page work underneath to make them rank." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and booked jobs, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can read before you call',
      note: 'Month-to-month once the first 90 days are up. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the map foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For shops battling across several Amarillo-area towns.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: "For contractors set on owning the map across the Panhandle.", features: ['Everything in Local Growth', 'Local link building', 'Hail-season demand targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Amarillo?', a: "Most Amarillo engagements land between $750 and $2,500 a month, set by how many neighborhoods and keywords you are chasing. The tiers above lay it out. No hidden fees, no long contract, and we lock the exact scope in your free audit before you commit a dollar." },
      { q: 'How long until I show up on the map?', a: "Profile improvements can move inside a few weeks. The competitive Amarillo keywords usually take 90 to 180 days of steady work, because reviews and citations build on each other over time. In a storm-driven market, anyone promising page one in 30 days is selling you something." },
      { q: 'What makes Amarillo local SEO its own beast?', a: "Two things. It is a storm-prone Panhandle market where hail and tornado season sends demand vertical every spring, so your ranking has to be set before the cells arrive. And the wild temperature swings keep HVAC demand intense in both summer and winter, so you are fighting through several seasonal peaks, not one." },
      { q: 'How does local SEO actually help during hail season?', a: "When a major hailstorm rolls over Amarillo, searches for roofing, restoration, and HVAC jump overnight and the backlog can run for months. Out-of-state chasers pour in for the same leads. The shops already pinned to the map grab those calls. We get you ranking and reviewed ahead of season so you catch that wave instead of fighting chasers for scraps." },
      { q: 'Which areas do you cover?', a: "All of Amarillo and the surrounding Panhandle towns: Wolflin, Sleepy Hollow, River Road, Tascosa, Canyon, Bushland, plus Randall and Potter counties and out beyond. We build genuine neighborhood pages rather than one catch-all Amarillo page, because that is what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "Almost exclusively. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We know storm-driven demand, after-hours emergencies, and insurance jobs cold, and we build your local SEO around all of it." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts inside AI now rather than classic search. We structure your content and schema so those engines can read, trust, and cite your business. It is fast becoming as important as the map itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that is roughly how long local SEO needs to show real movement. After that it is month-to-month. If we are not delivering, you walk, and the accountability stays squarely on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep, and after every Amarillo hailstorm out-of-state chasers are buying those same leads. We build rankings, a Google profile, and a review base that route leads straight to you. Over time you lean on the brokers less, because the work is already coming to you direct." },
      { q: "What is in the free audit?", a: "A clear read on where you rank today across your service areas, what your map competitors are doing to beat you, the fixes that will move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. It is the fastest way to see what Amarillo Local SEO can do for your map presence: no pitch deck, just a straight diagnosis of how to rank on the map." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'amarillo', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Amarillo SEO Company | OnwardCraft',
    metaDescription:
      'Amarillo SEO that ranks contractors on Google and delivers leads you own. Lead-tied reporting, no lock-in contracts, and built for Panhandle hail demand.',
    eyebrow: 'SEO Services · Amarillo, TX',
    h1: 'Amarillo SEO that builds Panhandle rankings you actually own',
    h2Exact: 'Amarillo SEO Company',
    heroSubhead:
      "Ads die the instant you stop feeding them. SEO does the opposite: rank once for what Amarillo searches and the leads keep arriving. We build that ranking, tie every report to real calls and booked jobs, and get you there before the first hail cell forms.",
    primaryCta: 'Get my free Amarillo SEO audit',
    intro:
      "Amarillo SEO narrows to one question: when someone searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in a hail-prone, temperature-extreme Panhandle market, and we measure the win in leads, not vanity traffic you cannot bank.",
    aioQuestion: 'How do Amarillo businesses rank higher on Google?',
    aioAnswer:
      "They rank by repairing the site's technical foundation, tuning each page to the exact terms buyers type, publishing genuinely useful local content, and earning links from trusted Amarillo sources. In a storm-prone Panhandle market, keeping the site fast on mobile and ranking for hail-season and HVAC-demand terms ahead of time are two of the quickest ways to leave competitors behind.",
    problemHeading: "Three reasons your Amarillo site is not bringing in work",
    painPoints: [
      { title: "You are stranded on page two", body: "Hardly anyone clicks past Google's first page, and they rarely scroll far down it. If you are not in the top handful of results for what you sell, your site is invisible, no matter how clean your work is or how many years you have run in Amarillo." },
      { title: "You are renting traffic from Google Ads", body: "Ads can work, but the second your card stops, the leads stop. Search engine optimization builds an asset you own: rankings that keep producing organic traffic and leads months and years after the work is paid for, at a fraction of the per-lead cost. In a market with predictable storm-driven cycles, owning that asset matters even more." },
      { title: "You are not ranking for the demand that pays", body: "Amarillo demand swings hard with hail season and extreme temperature events, and the contractors who rank for those terms ahead of time catch the surge. If your SEO ignores storm-driven and seasonal searches, you are handing away your busiest months." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned to the exact terms your Amarillo buyers type: titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and pull in leads while you are on the job." },
      { name: 'Link building', desc: "Authority from real Amarillo and industry sources. In a crowded post-storm market, links are often what split page one from page two." },
      { name: 'Local SEO and Google Business Profile', desc: "Map optimization so you win the \"near me\" searches right alongside your organic rankings." },
      { name: 'Lead-tied reporting', desc: "We report on calls, forms, and booked leads, not just rankings and traffic, so you always know what your SEO is genuinely worth." },
      { name: 'Storm and seasonal SEO', desc: "We rank you for the hail-driven and extreme-temperature searches that fuel Amarillo's busiest months, so you are visible before demand spikes instead of after.", featured: true },
      { name: 'AI search and GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing slice of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Amarillo leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile: the foundation everything else needs in order to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus fresh local content, including the storm-season and extreme-weather terms that matter in the Panhandle." },
      { name: 'Build authority', desc: "Links and citations from trusted Amarillo and Panhandle sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we pour more into what is working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Amarillo SEO pricing, out in the open',
      note: 'Month-to-month once the first 90 days are up. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site chasing its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and Panhandle towns.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For shops out to own Amarillo and Panhandle search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Storm & seasonal SEO', 'Multi-location support', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Amarillo?', a: "Most Amarillo SEO engagements run $900 to $3,000 a month, set by how competitive your keywords are and how much content and link work the climb needs. The tiers are above, with no hidden fees and no long contract to sign." },
      { q: 'How long does SEO take to work in Amarillo?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, quicker on low-competition terms and slower on the most contested Amarillo keywords. SEO compounds, so the gains keep stacking the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops the moment you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Amarillo contractors win by running SEO as the long-term engine and ads for short bursts during or right after major hail events." },
      { q: 'Should my Amarillo SEO target hail season?', a: "Yes, it has to. When major hailstorms hammer the Panhandle, searches for roofing, restoration, and HVAC jump overnight, and ranking takes months to build. You need to be in place before the season, not chasing it once the hail has fallen. We optimize those storm-driven terms ahead of time so your busiest months land on you, not the out-of-state chasers." },
      { q: "What is included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and map SEO, and lead-tied reporting. Higher tiers add storm-and-seasonal and AI-search optimization. We lock the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it goes month-to-month. If we are not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search results." },
      { q: 'Which areas around Amarillo do you cover?', a: "The whole Amarillo metro and surrounding Panhandle towns: Canyon, Bushland, Tascosa, Randall County, Potter County, Hereford, Pampa, Borger and more, each with a genuine local page rather than one generic Amarillo page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads straight to you. The more you own your search visibility, the less you depend on brokers for shared leads, and the less you elbow out-of-state chasers who buy those same leads after every hail event." },
      { q: "What is in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. It is the clearest way to see what Amarillo SEO can do for your pipeline before you commit a dollar. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'amarillo', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Amarillo Web Design Company | OnwardCraft',
    metaDescription:
      'Amarillo web design that turns visitors into booked jobs. Fast, mobile-first sites built for contractors and ready for Panhandle hail-season demand.',
    eyebrow: 'Web Design · Amarillo, TX',
    h1: 'Amarillo web design engineered to bring in real work from Wolflin to Canyon',
    h2Exact: 'Amarillo Web Design Company',
    heroSubhead:
      "A handsome website that never rings the phone is just a brochure. We build Amarillo contractors fast, mobile-first sites engineered to turn visitors into booked work, and to stay standing when hail season has your phone going nonstop.",
    primaryCta: 'Get my free quote',
    intro:
      "Amarillo Web Design is about one thing for a contractor: turning a click into a booked job. Most Amarillo contractor sites leak leads quietly: slow on a phone, a call button buried halfway down, no clear offer up top. Web design done right plugs every one of those holes. We build mobile-first sites that load fast, look like the pro you already are, and convert Wolflin-to-Canyon visitors into booked jobs, sites that hold up when a major hailstorm sends your traffic vertical.",
    aioQuestion: 'What makes a good contractor website in Amarillo?',
    aioAnswer:
      "A strong Amarillo contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, earns trust with reviews and real project photos, and is built to absorb traffic surges during hail and tornado season. Because most Amarillo searches happen on mobile and storm-driven demand can land overnight, mobile speed and an obvious next step are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site is not bringing in work",
    painPoints: [
      { title: "It is a brochure, not a lead engine", body: "Plenty of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next name. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It is too slow on a phone", body: "Most of your Amarillo visitors are on mobile, and they bounce if your site takes more than a few seconds to load. Slow sites rank worse too. We build fast, so you keep both the visitor and the ranking." },
      { title: "It cannot survive a storm-season surge", body: "After a big Panhandle hailstorm, contractor sites take a flood of traffic, and the slow ones stall or bury the call button at the exact moment it mattered most. We build sites that stay fast and convert under load, so you capture that demand instead of losing it to a chaser with a sharper website." },
    ],
    servicesHeading: "What goes into an OnwardCraft Amarillo website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site shaped around your trade, your service area, and the exact jobs you want across the Panhandle." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that is where nearly all of your Amarillo traffic lives. Fast, thumb-friendly, and easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, unmissable call buttons, and lead forms placed where people actually use them. Every page carries a next step." },
      { name: 'Copy that sells', desc: "Words written for anxious homeowners, including those staring at fresh hail damage, that book the job rather than filler that reads like everyone else." },
      { name: 'Local SEO foundation', desc: "Built to rank from the first line of code: clean structure, schema, fast load, and neighborhood-ready pages from Wolflin to Canyon." },
      { name: 'Speed and Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects your conversions and your rankings at once." },
      { name: 'Storm-surge ready', desc: "Built to stay fast and keep the call button front and center when hail-season traffic spikes, the moment that turns visitors into your biggest jobs of the year.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts toward AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your service area, your best jobs, and your competitors, then map the site around booking more of the work you want across Amarillo and the Panhandle." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert, and you see it and shape it before a single line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch clean, with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it around what is genuinely converting." },
    ],
    pricing: {
      heading: 'Transparent Amarillo web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Storm-surge ready'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Amarillo?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site handle a hail-season traffic spike?', a: "Yes, and in Amarillo that matters a lot. After a major Panhandle hailstorm, contractor sites take a flood of traffic, and the slow ones lose leads right when demand peaked. We build fast and keep the call button obvious, so your site converts under load instead of buckling while storm chasers with better sites steal your calls." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Amarillo terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your Amarillo traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Amarillo contractor website should include, and a fixed-price quote with a timeline. It is the simplest way to see what Amarillo Web Design can do for your booking rate. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'amarillo', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Amarillo Website Redesign | OnwardCraft',
    metaDescription:
      'Amarillo Website Redesign without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs and hold up in hail season.',
    eyebrow: 'Website Redesign · Amarillo, TX',
    h1: 'Amarillo Website Redesign that modernizes your site without tanking your Panhandle traffic',
    h2Exact: 'Amarillo Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, easy to ignore. We redesign Amarillo contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "An Amarillo Website Redesign usually goes one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We rebuild Amarillo contractor sites mobile-first for speed and conversions, build them to handle hail-season traffic, and run an SEO-safe migration with the redirects and care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Amarillo site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "For a high-ticket roofing or HVAC job, homeowners judge you by your site in seconds. An old, cluttered design quietly sends them to a competitor who looks more established — even when your work is better and you've been in Amarillo for years." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your Amarillo visitors before they ever see your offer. A redesign built mobile-first wins them back." },
      { title: "It can't keep up when demand surges", body: "Traffic that doesn't turn into calls is wasted — and an old site that gets slow under a hail-season surge loses leads at the exact moment they're worth the most. We rebuild for conversions and for the days after a storm when your phone should be ringing off the hook." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your Amarillo traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the price of your Panhandle jobs." },
      { name: 'Storm-surge ready rebuild', desc: "Rebuilt to stay fast and keep converting when hail-season traffic spikes, so the new site captures your biggest jobs instead of choking on them.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you leads and rankings, then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and improve, not drop." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Amarillo redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Storm-surge ready'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Amarillo?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is hard to update, isn't bringing in leads, or buckles when hail-season traffic surges, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the new site handle hail-season traffic?', a: "Yes, and in Amarillo that's a real consideration. After a major Panhandle hailstorm, contractor sites take a surge of traffic, and the slow ones lose leads to storm chasers with faster websites. We rebuild for speed and keep the call to action obvious so the site converts when demand peaks." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan. It is the easiest way to see whether an Amarillo Website Redesign is worth it for your shop before you spend a dollar." },
    ],
  },
];

export const amarilloCity = {
  citySlug: 'amarillo', city: 'Amarillo', state: 'Texas', stateAbbr: 'TX', metro: 'Amarillo',

  titleTag: 'Amarillo Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Amarillo marketing for contractors: web design, SEO, and local SEO that get you found and booked, so you own your leads instead of renting them, built for hail-season demand.',

  eyebrow: 'Amarillo · Web Design, SEO & Lead Generation',
  h1: 'Amarillo marketing for contractors built around the trades and Panhandle hail season',
  h2Exact: 'Amarillo Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for the Texas Panhandle's hail-driven, temperature-extreme market. One team to get you ranking, converting, and off the rented-lead treadmill — before storm season.",
  heroProof: ['Built for the trades', 'Hail-season ready', 'No lock-in contracts'],
  primaryCta: 'Get my free Amarillo audit',

  intro:
    "Amarillo marketing for contractors lives or dies in a market defined by extremes: baseball-sized hail every spring, temperature swings that keep HVAC companies busy year-round, and a steady wave of out-of-state storm chasers who flood in after every major event and compete for your leads. Winning here takes three things working together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack, all in place before the next storm cell drops on the Panhandle. As your Amarillo digital marketing agency, here's how we help contractors do exactly that.",
  aioQuestion: 'How do Amarillo contractors get more leads online?',
  aioAnswer:
    "Amarillo contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack. Because the Panhandle sees intense hail and tornado season from April through August and extreme HVAC demand year-round, the contractors who look established and are already ranking before the storm win the most work — and keep it away from out-of-state chasers.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Amarillo searches \"near me.\" The single highest-return move for most local contractors — and how you catch the demand surge after every Panhandle hailstorm.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search, build an asset you own instead of renting traffic from ads, and measure it in leads — not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs — and to stay fast when hail season floods your phone — not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it carefully so you keep every bit of ranking you've already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Amarillo?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads — and are ready when hail season hits." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors — so we understand storm-driven demand, emergency calls, and insurance work." },
    { q: 'Why does hail season matter for my marketing?', a: "Every spring, the Texas Panhandle gets some of the worst hailstorms in the country. When a major cell hits Amarillo, demand for roofing, restoration, and HVAC explodes overnight — and out-of-state chasers pour in to compete for the backlog. Ranking takes months to build, so the contractors already visible before the storm take that work. We get you in place ahead of season." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Amarillo areas do you serve?', a: "All of Amarillo and the surrounding Panhandle communities — Wolflin, Sleepy Hollow, River Road, Tascosa, Canyon, Bushland, and throughout Randall and Potter counties." },
    { q: 'Where should I start?', a: "Start with a free Amarillo audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest, especially with storm season in mind. It is the simplest first step into Amarillo marketing for contractors built to get you found and booked. No pitch deck, just a plan." },
  ],
};
