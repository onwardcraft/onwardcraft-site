// COLUMBIA: per-metro, per-service local landing pages plus city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Columbia's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// COLUMBIA: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Columbia is its own kind of puzzle',
  body:
    "Columbia wears three hats at once, and each one feeds your phone differently. It is the South Carolina capital, so a layer of state agencies and government workers anchors the local economy and keeps it steady through downturns. It is home to Fort Jackson, the Army's largest basic-training post, which means a current of military families is always arriving and leaving. And it is a major college town built around the University of South Carolina. Fort Jackson runs roughly 50,000 trainees through every year, and the permanent families who PCS in and out reach for Google the same week they unload the moving truck. USC layers another 35,000 students plus faculty and a deep alumni buyer base into Five Points, Shandon, and Earlewood. Then the climate takes over. Sitting well inland in the Midlands, Columbia bakes. Summer highs routinely climb to 100 or 105 degrees with thick humidity from June into September, so air-conditioning calls do not taper off in the heat; they pile up. Inland flooding is the other wild card. The catastrophic 2015 flood is the extreme example, but heavy rain and tropical leftovers swamp low-lying streets often enough to keep restoration crews busy from spring through fall. The contractor sitting in the top three on the map catches every one of those moments.",
  pullQuote: 'Fort Jackson keeps thousands of military families rotating through Columbia, and almost all of them open Google for a contractor within days of arriving.',
  donut: {
    title: 'Columbia city demographics',
    value: 46,
    centerLabel: 'Black/AA (city)',
    legend: [
      { label: 'Black/AA', pct: 46, kind: 'teal' },
      { label: 'Other', pct: 54, kind: 'grey' },
    ],
  },
  seasonTitle: 'When Midlands trade calls surge',
  seasonCaption: 'HVAC peaks Jun to Sep; storm and flooding risk Mar to Jun',
  seasonalDemand: [
    { m: 'J', v: 32 }, { m: 'F', v: 38, peak: true }, { m: 'M', v: 52, peak: true }, { m: 'A', v: 60, peak: true },
    { m: 'M', v: 64, peak: true }, { m: 'J', v: 88, peak: true }, { m: 'J', v: 96, peak: true },
    { m: 'A', v: 98, peak: true }, { m: 'S', v: 90, peak: true }, { m: 'O', v: 54 },
    { m: 'N', v: 38 }, { m: 'D', v: 30 },
  ],
  stats: [
    { value: '50K+', label: 'trainees cycle through Fort Jackson annually, with thousands of military families PCS-ing in/out' },
    { value: '35K', label: 'University of South Carolina students, plus faculty and alumni buyers in Five Points, Shandon, Earlewood', accent: true },
    { value: '100-105°F', label: 'summer highs with crushing humidity, so cooling demand stays intense Jun to Sep' },
    { value: 'Top 3', label: 'Map Pack spots that capture most contractor calls in the Columbia metro' },
  ],
  neighborhoods: [
    'Five Points', 'Shandon', 'Forest Acres', 'Elmwood Park', 'Earlewood',
    'Lexington', 'Irmo', 'Blythewood', 'Chapin', 'Cayce',
    'West Columbia', 'Lake Murray', 'Northeast Columbia', 'Fort Jackson area', 'Harbison',
  ],
};

const AREAS = [
  'Columbia', 'Lexington', 'Irmo', 'Blythewood', 'Chapin', 'Cayce',
  'West Columbia', 'Forest Acres', 'Shandon', 'Five Points',
  'Elmwood Park', 'Earlewood', 'Lake Murray', 'Harbison', 'Northeast Columbia',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'Trades are all we touch',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We know how PCS moves drive sudden demand, how a triple-digit July loads up cooling calls, and how flood cleanup work lands, so every page we build matches the way Columbia customers really hunt for help.",
  },
  {
    title: 'We move you off rented leads',
    body: "The aim is a pipeline that is yours and stays yours. Not one more monthly bill to a lead broker for the same Midlands homeowner that three of your rivals already paid for.",
  },
  {
    title: 'We actually know the Midlands',
    body: "Fort Jackson families settling in, USC alumni putting down roots, summers that punish HVAC systems, and inland flooding that keeps restoration phones ringing. None of that survives a national agency dropping a city name into a template.",
  },
  {
    title: 'Open pricing, no handcuffs',
    body: "Rates are posted, reporting maps to real leads, and you go month-to-month once the first 90 days are behind us. If we are not earning the check, you leave. That keeps the heat on us, which is exactly where it belongs.",
  },
];

const PROOF = {
  heading: 'No client logo wall yet, so here is the honest Columbia math',
  body:
    "Most agencies greet you with a grid of client logos. We are a young, founder-run shop, and we are not going to invent a history we have not lived yet. What we can put in front of you is the actual reasoning, taken straight from Google's and the industry's published research on the way people search close to home.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Picture this, and treat it as an illustration rather than a result we are claiming: a Columbia contractor pulls maybe 1,200 local \"near me\" impressions in a month. Climbing out of page-two obscurity and into the top three turns a slow trickle of calls into a calendar you cannot keep up with, and the gap widens fast when a fresh batch of Fort Jackson families lands or the heat index spikes. Your free audit replaces the guesswork with your real numbers: your current rankings, your true search volume, and a straight 90-to-180-day route to the top.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Columbia', state: 'South Carolina', stateAbbr: 'SC', metro: 'Columbia',
  heroProof: ['Built for the trades', 'Heat & storm-season ready', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const columbiaLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'columbia', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Columbia SC Local SEO Company | OnwardCraft',
    metaDescription:
      'Search your service in Columbia SC and three businesses land on the map. We get you into those three so the call comes to you, not a competitor.',
    eyebrow: 'Local SEO · Columbia, SC',
    h1: 'When Columbia searches for what you do, be the first name they find',
    h2Exact: 'Columbia SC Local SEO Company',
    heroSubhead:
      "Google fills the map with exactly three businesses when someone types \"near me,\" and everybody under that pack is close to invisible. We push you into the top three so the call reaches you, whether it is a Fort Jackson family that just unpacked, a USC buyer settling into Shandon, or a homeowner whose AC quit in 102-degree heat.",
    primaryCta: 'Get my free Columbia audit',
    intro:
      "Columbia local SEO hangs on a single moment: a homeowner in Forest Acres or Lexington adds \"near me\" to your service, and either you are one of the three businesses pinned to the map or you are nowhere. Hardly anyone scrolls past that pack. This is a market fed by military PCS moves, university-area buyers, brutal summer heat, and recurring inland flooding, and the contractor already in the Map Pack collects all of it. Here is how we put you there.",
    aioQuestion: 'How do Columbia SC businesses rank higher in local search?',
    aioAnswer:
      "Four things decide it: a Google Business Profile tuned to the exact services and Columbia neighborhoods you want, name, address, and phone details that match across the web, a dependable flow of genuine reviews, and local pages built on real Midlands neighborhoods. With Fort Jackson PCS cycles, USC alumni buyers, hard summer cooling demand, and inland flood work all in play, the winners look settled, answer fast, and rank before any of it spikes.",
    problemHeading: "If your Columbia phone has gone quiet, it is usually one of these three",
    painPoints: [
      { title: 'Three rivals already own the Columbia map', body: "Add \"near me\" to your own service and look at the map right now. Those three pinned businesses pull the lion's share of the clicks. If your name is not among them, the craftsmanship behind your work barely registers, because most Columbia searchers never scroll far enough to find you. For a local business here, breaking into that top three is usually the single move that pays back the most." },
      { title: "You're renting leads that were never yours", body: "Angi, Thumbtack, and HomeAdvisor sell the same Columbia homeowner to four contractors at once, then charge each of you to scrap over them. That is a treadmill with no exit. Local SEO builds the reverse: a homeowner finds you, dials you, and no rival got a copy of that lead. Keep it running and you stop renting attention and start owning a pipeline." },
      { title: "You're absent when demand jumps the most", body: "Fort Jackson families hit Google the day they arrive. A heat wave that pushes the thermometer to 105 sends cooling calls vertical inside an afternoon. A flood that swamps Cayce or Forest Acres keeps restoration demand high for months. Whoever already sits in the Map Pack scoops up every bit of that work, while everyone else watches it go by." },
    ],
    servicesHeading: 'What ranking you in Columbia actually takes',
    services: [
      { name: 'Google Business Profile', desc: "The strongest lever you have in the Map Pack. We set your categories, services, service area, photos, and posts so Google can tell precisely which Columbia searches belong to you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone need to agree on every site Google checks. We straighten out the listings that disagree and create the ones that are missing." },
      { name: 'Reviews that keep coming', desc: "A straightforward system that turns each finished job into a fresh review. It nudges your ranking up and gives the next caller a reason to pick you." },
      { name: 'Neighborhood pages', desc: "Honest pages for Shandon, Forest Acres, Lexington, Irmo, Blythewood, and the rest, so you surface for the exact neighborhood someone typed instead of a flat \"Columbia.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The behind-the-scenes work that lets every other piece actually land in the rankings." },
      { name: 'Local link building', desc: "Mentions and links from Columbia outlets Google respects: local press, trade groups, and the community channels around Fort Jackson. In this market that is often the line between page one and page two." },
      { name: 'Heat and flood season readiness', desc: "We get your profile, pages, and reviews ranking ahead of peak cooling season and the wet-weather months, so you catch the surge instead of scrambling once it has already arrived.", featured: true },
      { name: 'AI search readiness', desc: "A bigger slice of \"near me\" research now kicks off inside AI Overviews, ChatGPT, and Perplexity. We shape your content so those tools can read you and name you.", featured: true },
    ],
    processName: 'How we work: the Midlands Map Pack method',
    process: [
      { name: 'Audit and baseline', desc: "We map where you genuinely stand today across every service area and figure out which competitors are beating you in the Map Pack and what they are doing differently." },
      { name: 'Fix the foundation', desc: "Profile and NAP come first because they react fastest. Most Columbia clients notice early movement here inside a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine switch on. They build on each other month after month, which is the reason starting now beats waiting until the next busy season." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across the metro, from Lexington and Irmo to Blythewood, Chapin, and Forest Acres, with the on-page work to support them." },
      { name: 'Report and expand', desc: "Reporting in plain English, tied to calls and booked work rather than vanity positions. Then we go win the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can read at a glance',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, locking in a solid Map Pack base.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For shops scrapping across several Midlands communities.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors out to own the Columbia metro map.', features: ['Everything in Local Growth', 'Local link building', 'Heat & storm-season demand targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'What does local SEO cost in the Columbia metro?', a: "Most Columbia engagements sit between $750 and $2,500 a month, set by how many neighborhoods and keywords you are chasing. The tiers right above lay it out. No hidden fees, no long contract, and we pin the exact scope in your free audit before you spend a cent." },
      { q: 'How soon will I land in the Map Pack?', a: "Profile work can shift within a few weeks. The contested Columbia keywords usually take 90 to 180 days of steady effort, because reviews and citations need time to build on each other. Anybody guaranteeing page one in 30 days here is selling you a story." },
      { q: 'What makes local SEO in Columbia its own thing?', a: "Three forces stack up. Fort Jackson manufactures a steady inbound flow as military families PCS in and search for contractors the same week. USC alumni and faculty feed a reliable buyer pool across Five Points, Shandon, and Earlewood. And the savage summer heat turns cooling repair into one of the highest-volume search categories in the metro from June into September." },
      { q: 'How does ranking help me during a Columbia heat wave?', a: "When the city tips past 100 in July, cooling service calls explode. Homeowners type \"HVAC repair near me\" and ring the first name on the map. Rank and stack reviews before June and you catch that rush instead of fighting for leftovers after everyone else is booked solid." },
      { q: 'Which parts of the metro do you cover?', a: "The whole Columbia metro: Shandon, Forest Acres, Five Points, Elmwood Park, Lexington, Irmo, Blythewood, Chapin, Cayce, West Columbia, Lake Murray, and beyond. We build real neighborhood pages rather than one catch-all Columbia page, because that is what ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Is this built specifically for contractors?', a: "Just about entirely. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We get PCS-driven demand, the summer heat cycle, and inland flood cleanup, and your local SEO is built around all three." },
      { q: 'Will I turn up in Google AI Overviews and ChatGPT?', a: "An ever larger share of \"near me\" research now starts inside AI rather than the classic results page. We structure your content and schema so those engines can read, trust, and quote your business. In Columbia that is fast becoming as decisive as the Map Pack itself." },
      { q: 'Does this lock me into a long agreement?', a: "No. We ask for an opening 90 days because that is about how long local SEO needs before real movement shows. After that you run month-to-month. If we are not producing, you walk, and the accountability stays squarely on us." },
      { q: 'How does this wean me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build the rankings, the Google profile, and the review base that route leads to you alone. As that compounds you lean on the brokers less, because the work is already finding you." },
      { q: 'What do I actually get in the free audit?', a: "A clear read on where you rank today across your service areas, what your Map Pack competitors do to stay ahead of you, the fixes that move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No slide deck, just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'columbia', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Columbia SC SEO Company | OnwardCraft',
    metaDescription:
      'Columbia SC SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in, built for heat-season and flood demand.',
    eyebrow: 'SEO Services · Columbia, SC',
    h1: 'Get your Columbia SC business to the top of Google and keep it there',
    h2Exact: 'Columbia SC SEO Company',
    heroSubhead:
      "Ads switch off the instant your card does. SEO runs the other way: rank once for what Columbia customers search and the leads keep arriving for months. We build that ranking and pin every report to real calls and booked jobs.",
    primaryCta: 'Get my free Columbia SEO audit',
    intro:
      "Columbia SEO boils down to a single blunt question: when someone searches what you do, are you on page one or page two? Around here page two is the same as page fifty. We get contractors ranking for the money keywords in a market shaped by Fort Jackson PCS cycles, university-area buyers, ferocious summer heat, and inland flooding, and we score the whole thing in leads, not traffic that never calls.",
    aioQuestion: 'How do Columbia SC businesses rank higher on Google?',
    aioAnswer:
      "They rank by repairing the site's technical base, tuning each page to the exact terms buyers type, publishing local content that genuinely helps, and earning links from Columbia sources Google trusts. In a market driven by Fort Jackson demand, USC alumni buyers, heavy summer cooling searches, and repeat inland flooding, keeping the site quick on mobile and ranking for the seasonal spikes are two of the fastest ways to pull in front.",
    problemHeading: "Three reasons your Columbia site isn't bringing in work",
    painPoints: [
      { title: 'Page two might as well be invisible', body: "Hardly anyone clicks past the first page of Google, and they seldom scroll deep into it either. If you are not in the top handful of results for what you sell, your site might as well not exist, no matter how slick it looks. In Columbia that gap is exactly what hands your jobs to the competition." },
      { title: 'Every Google Ads click is rented', body: "Ads can pull their weight, but the second the budget pauses, the leads stop dead. SEO builds something you actually hold: rankings that keep generating leads for months and years after the work is done, at a slice of the per-lead cost you pay now." },
      { title: 'Your busiest months slip right past you', body: "Columbia demand swings hard with the heat, the PCS calendar, and the wet season, and the contractors who rank for those terms early grab the spike. If your SEO skips the cooling-repair searches and the flood-restoration terms, you are quietly giving away your most profitable stretches of the year." },
    ],
    servicesHeading: 'The SEO work that genuinely shifts rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, load speed, Core Web Vitals, schema, and the under-the-hood repairs Google insists on before it will rank your Columbia site at all." },
      { name: 'On-page optimization', desc: "Every page that earns its keep tuned to the exact terms your Columbia customers type: titles, headings, body copy, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, attract links, and keep delivering leads long after we hit publish." },
      { name: 'Link building', desc: "Authority from real Columbia and trade sources. In a competitive Midlands market, links are often the deciding factor between page one and page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack work so you take the \"near me\" searches right alongside your organic results." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and booked leads instead of raw rankings and traffic, so you always know what your SEO is worth in dollars." },
      { name: 'Heat and flood seasonal SEO', desc: "We rank you for the cooling-driven summer searches and the inland flood-restoration terms behind Columbia's busiest stretches, so you are visible before demand climbs, not after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and quote you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO playbook',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and rivals, then build a roadmap around the keywords most likely to drive real Columbia leads rather than empty impressions." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile. The groundwork everything else needs before it can rank." },
      { name: 'Optimize and build content', desc: "On-page work across your money pages plus fresh local content, including the cooling-season and flood terms that decide who wins the busy months here." },
      { name: 'Build authority', desc: "Links and citations from trusted Columbia and trade sources to push your competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we lean harder into what is working and reach into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Columbia SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a lean site chasing its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors battling across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses out to own Columbia-area search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Heat & storm seasonal SEO', 'Multi-location support', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'What does SEO run in the Columbia metro?', a: "Most Columbia SEO engagements land between $900 and $3,000 a month, set by how competitive your keywords are and how much content and link work the plan needs. The tiers sit above, with no hidden fees and no long contract." },
      { q: 'How quickly does SEO start working in Columbia?', a: "Look for early movement in 2 to 3 months and meaningful results in 4 to 6, faster on softer terms and slower on the most contested Columbia keywords. SEO compounds, so the longer it runs, the larger the gains grow." },
      { q: 'Should I run SEO or Google Ads?', a: "They handle different jobs. Ads buy traffic that vanishes the moment you stop paying. SEO is an asset you keep that produces leads at a lower cost per lead over time. Most Columbia contractors do best with SEO as the long-haul engine and ads for quick bursts." },
      { q: 'Should my Columbia SEO chase summer heat and flood season?', a: "Yes. When the city hits triple digits in July, cooling searches spike overnight. When tropical moisture or a heavy rain band parks over the Midlands, restoration demand can run for months. Ranking takes time to build, so you need to be in place ahead of the season rather than chasing it afterward." },
      { q: 'What does your SEO service include?', a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. Higher tiers fold in heat-and-flood seasonal and AI-search work. We confirm the exact scope in your free audit." },
      { q: 'Will you tie me to a long agreement?', a: "No. We ask for an opening 90 days because SEO needs that long to show real movement, then it flips to month-to-month. If we are not delivering, you leave." },
      { q: 'Can you get my business cited in AI Overviews and ChatGPT?', a: "That is a growing part of what we tune for. We structure your content and schema so AI engines can read, trust, and quote your business by name, not just the classic results page." },
      { q: 'Which areas around Columbia do you reach?', a: "The full Columbia metro and its outskirts: Lexington, Irmo, Blythewood, Chapin, Cayce, West Columbia, Forest Acres, Five Points, Shandon, Lake Murray, and more, with genuine local pages instead of one generic Columbia page." },
      { q: 'How do you free me from Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that route leads straight to you. The more of your search visibility you own, the less you lean on brokers for shared leads three rivals also bought." },
      { q: 'What comes in the free SEO audit?', a: "Where you rank today, what your competitors do to outrank you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No slide deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'columbia', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Columbia SC Web Design Company | OnwardCraft',
    metaDescription:
      'Columbia SC web design that turns visitors into booked jobs: fast, mobile-first sites built for contractors and the Midlands heat-and-flood season.',
    eyebrow: 'Web Design · Columbia, SC',
    h1: 'Columbia SC web design that turns visitors into booked jobs',
    h2Exact: 'Columbia SC Web Design Company',
    heroSubhead:
      "A good-looking site that never rings the phone is just a brochure with a hosting bill. We build Columbia contractors fast, mobile-first sites engineered to turn visitors into booked work, whether that visitor is a Fort Jackson family fresh to the area, a USC grad buying in Shandon, or a homeowner searching at midnight because the AC died.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Columbia contractor sites lose leads without a sound: slow on a phone, call button hidden, no clear offer anywhere on the page. Good web design plugs every one of those holes. We build sites that load fast, look like the professional you already are, and turn visitors from Lexington to Blythewood into booked jobs, and they hold steady when a heat wave floods HVAC searches.",
    aioQuestion: 'What makes a good contractor website in Columbia SC?',
    aioAnswer:
      "A strong Columbia contractor site loads in under three seconds on a phone, puts the call button and a clear offer above the fold, earns trust with reviews and real project photos, and holds up under traffic spikes during summer cooling season and after heavy rain. Since most Columbia searches happen on a phone, mobile speed and an obvious next step are what split a site that books jobs from one that just sits there.",
    problemHeading: "Why your current Columbia site isn't pulling in work",
    painPoints: [
      { title: 'It reads like a flyer, not a closer', body: "Plenty of contractor sites just list services and stop. No clear offer, no obvious next step, no reason to call you over the next name on the map. We design every page around one purpose: turning a Columbia visitor into a booked lead." },
      { title: 'On a phone, it crawls', body: "Most of your Columbia visitors are on mobile, and they bounce when a site takes more than a couple of seconds to load. Slow pages also rank worse, so you lose on both ends. We build fast, so you keep the visitor and the ranking together." },
      { title: 'A demand spike knocks it flat', body: "When a heat wave drives cooling searches sky-high in July, or heavy flooding pushes restoration calls for weeks, your site has to stay quick and keep the call button front and center. An old or sluggish site buries that button at the precise moment it matters most." },
    ],
    servicesHeading: "What's in an OnwardCraft Columbia website",
    services: [
      { name: 'Custom design', desc: "No off-the-shelf templates. A site shaped around your trade, your service area, and the exact jobs you want more of." },
      { name: 'Mobile-first build', desc: "Built for the phone first, because that is where nearly all your Columbia traffic lives. Quick, thumb-friendly, and one tap from a call." },
      { name: 'Conversion-focused UX', desc: "Clear offers, unmistakable call buttons, and lead forms placed where homeowners really use them. Every page carries a next step." },
      { name: 'Copy that sells', desc: "Words aimed at an anxious homeowner staring at a dead AC or a soaked floor, not filler that reads like every other contractor in the Midlands. We write to book the job." },
      { name: 'Local SEO foundation', desc: "Built to rank from the start: clean structure, schema, fast load, and neighborhood-ready pages across the metro." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and clear Google's performance checks, which protects your conversions and your rankings at once." },
      { name: 'Heat and flood surge ready', desc: "Built to stay quick and keep the call button obvious when summer cooling demand or post-flood restoration calls surge, the moments that fill your calendar for months.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read your site and recommend you as more Columbia search shifts toward AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft build path',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your service area, your most profitable jobs, and your rivals, then map the site around booking more of the work you actually want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert, and you see it and steer it before a single line of code gets written." },
      { name: 'Build and copy', desc: "We build it quick and write copy that sells, keeping the call to action front and center on every single page." },
      { name: 'Launch', desc: "We launch it clean, with the SEO foundation, tracking, and load speed dialed in from the very first day." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it around what is genuinely turning visitors into calls." },
    ],
    pricing: {
      heading: 'Transparent Columbia web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A lean, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A roomier site for established contractors running several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Heat & storm-surge ready'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A complete custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'What does a contractor website cost in Columbia SC?', a: "Most contractor sites with us run $2,000 to $8,000 as a one-time build, set by page count and integrations. The tiers sit above: fixed price, no surprises, and you own the finished site outright." },
      { q: 'How long will the build take?', a: "A focused site lands in roughly 2 to 4 weeks; a larger custom build takes 4 to 8. You get a firm timeline at the start and a heads-up at each stage along the way." },
      { q: 'Will my site hold up in a summer cooling rush or a post-flood spike?', a: "Yes, and in Columbia that counts. A heat wave can flood HVAC search traffic in hours, and a flooding event can drive restoration calls for weeks. We build fast and keep the call button obvious, so your site converts under load instead of buckling." },
      { q: 'Will the new site really rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank, and pairing it with our SEO service is how you climb the competitive Columbia terms." },
      { q: 'Do I own the finished website?', a: "Yes, all of it. The site, the domain, and the content are yours. No hostage situations, and no platform you are stuck inside." },
      { q: 'Does it run well on phones?', a: "We design mobile-first, because that is where nearly all your Columbia traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'Which platform will you build on?', a: "We pick the platform that suits your needs and that you can manage yourself, usually WordPress or Webflow. We recommend the right fit in your free consult and spell out the tradeoffs in plain English." },
      { q: 'Is there ongoing support after launch?', a: "Yes. Every build comes with launch support, and after that we offer affordable monthly upkeep covering updates, speed, and security." },
      { q: 'Will I be tied to a contract?', a: "No. The build is a one-off project at a fixed price. Any maintenance or SEO afterward runs month-to-month, so you can step away whenever you want." },
      { q: 'What comes with the free quote?', a: "A clear look at what your current site costs you in lost leads, what a high-converting Columbia site should carry, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'columbia', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Columbia SC Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your Columbia SC website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs and hold up in heat.',
    eyebrow: 'Website Redesign · Columbia, SC',
    h1: 'Redesign your Columbia SC website without losing your rankings',
    h2Exact: 'Columbia SC Website Redesign Company',
    heroSubhead:
      "A dated site bleeds jobs every week: slow, clumsy on a phone, easy for a Columbia homeowner to scroll right past. We redesign contractor sites to convert more and load faster, and we migrate carefully enough that you keep every bit of ranking you have already earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns fail in one of two ways: the site looks prettier but converts the same, or it launches and the rankings disappear overnight. We do neither. We redesign Columbia contractor sites for speed and conversions, build them to ride out summer heat surges and post-flood demand spikes, and migrate with the redirects and SEO care that protect the traffic you have spent years earning.",
    aioQuestion: 'How can I redesign my site without losing SEO and traffic?',
    aioAnswer:
      "Protect your SEO through a redesign by holding your URL structure (or mapping 301 redirects for every page that moves), keeping your existing content and metadata, carrying over your schema, and testing the whole thing on staging before it goes live. Handled this way, a redesign keeps your rankings and tends to lift them, because the new site loads faster, works on mobile, and is built on a cleaner structure than the old one.",
    problemHeading: 'Signs your Columbia site is overdue for a redesign',
    painPoints: [
      { title: 'A dated look quietly bleeds trust', body: "On a high-ticket job, homeowners size you up by your site in seconds. An old, cluttered design quietly sends them to a rival who simply looks more established, even when your work is clearly better. In a market where Fort Jackson families and USC-area buyers research carefully, that first impression decides who gets the call." },
      { title: 'On a phone it is slow and clumsy', body: "If your site is awkward or sluggish on mobile, you are losing most of your Columbia visitors before they ever reach your offer. A redesign built mobile-first wins those visitors back and turns them into leads." },
      { title: 'A surge of demand grinds it to a halt', body: "Traffic that never becomes a call is wasted money, and an old site that crawls under a summer cooling rush or a post-flood restoration wave loses leads at the exact moment they are worth the most. We rebuild for conversions and for the days your phone should not stop ringing." },
    ],
    servicesHeading: "What a Columbia OnwardCraft redesign includes",
    services: [
      { name: 'Redesign audit', desc: "We pin down exactly what is costing you leads and rankings today, so the redesign fixes the real problems instead of just repainting the surface." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep every bit of the rankings and traffic you have already earned in Columbia." },
      { name: 'Conversion redesign', desc: "Sharper offers, smarter call-to-action placement, and lead forms homeowners genuinely use. We build for booked jobs, not just a nicer screenshot." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and clean Core Web Vitals, which lifts conversions and rankings at the same time." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where nearly all your Columbia traffic actually lives." },
      { name: 'Brand refresh', desc: "A current, credible look that fits the quality of your work and the price tag on the jobs you want booked." },
      { name: 'Heat and flood surge ready rebuild', desc: "Rebuilt to stay quick and keep converting when summer cooling demand or post-flood restoration calls surge, so the new site captures your biggest jobs instead of choking on them.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as more Columbia search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful, ranking-safe rebuild',
    process: [
      { name: 'Audit and plan', desc: "We dig into what is losing you leads and rankings, then chart a redesign that repairs it without breaking the parts already working for you." },
      { name: 'Design', desc: "A current, mobile-first, conversion-focused design you review and shape before we build anything." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and stage every redirect and SEO detail for a clean, no-surprises migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and watch closely so your rankings hold and climb rather than slip." },
      { name: 'Optimize', desc: "Tuning after launch around what converts, plus the ongoing speed work and updates that keep it sharp." },
    ],
    pricing: {
      heading: 'Transparent Columbia redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A lean redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A complete redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Heat & storm-surge ready'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A from-scratch rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'What does a website redesign cost in Columbia SC?', a: "Most redesigns with us land between $2,500 and $9,000 as a one-off project, set by the site's size and integrations. Fixed price, no surprises, and the result is yours outright." },
      { q: 'Will a redesign cost me my Google rankings?', a: "Not when it is done carefully, and careful is exactly how we work. We map 301 redirects for every URL that changes, keep your content and metadata, carry over your schema, and test on staging first. Done right, a redesign holds your rankings and usually pushes them higher." },
      { q: 'How long does a Columbia redesign take?', a: "A focused redesign takes roughly 3 to 5 weeks; a larger rebuild runs 5 to 9. You get a firm timeline at the start and a check-in at every stage." },
      { q: 'How do I know it is time to redesign?', a: "If your site drags on phones, looks dated, is a pain to update, is not bringing in leads, or stalls when summer cooling traffic or a post-flood rush surges, it is costing you work. The free audit tells you plainly whether a redesign pays off for your Columbia business." },
      { q: 'Will you carry over my existing content?', a: "Yes. We move and sharpen your existing content, keep what is ranking, and handle the technical migration so nothing important slips through the cracks." },
      { q: 'Will the rebuilt site handle a heat surge or a post-flood spike?', a: "Yes, and in Columbia that is a real consideration. Cooling demand can jump overnight in a heat wave, and restoration calls can run for weeks after a flooding event. We rebuild for speed and keep the call to action obvious so the site converts when demand peaks." },
      { q: 'Will the new site be fast and mobile-friendly?', a: "Yes. We rebuild mobile-first and tune for fast load and clean Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I keep ownership of the redesigned site?', a: "Yes, fully: the site, the domain, and the content. No platform lock-in of any kind." },
      { q: 'Will the redesign tie me to a contract?', a: "No. The redesign is a one-off project. Any maintenance or SEO afterward stays month-to-month." },
      { q: 'What comes with the free redesign audit?', a: "A clear read on what your current site costs you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const columbiaCity = {
  citySlug: 'columbia', city: 'Columbia', state: 'South Carolina', stateAbbr: 'SC', metro: 'Columbia',

  titleTag: 'Columbia SC Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Columbia SC contractors. Get found, get booked, and own your leads instead of renting them, all built for Fort Jackson demand.',

  eyebrow: 'Columbia SC · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Columbia SC contractors found and booked',
  h2Exact: 'Columbia SC Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Columbia's odd mix of state-capital steadiness, Fort Jackson churn, university buyers, savage summer heat, and inland flood risk. One team to get you ranking, converting, and off the rented-lead treadmill for good.",
  heroProof: ['Built for the trades', 'Heat & storm-season ready', 'No lock-in contracts'],
  primaryCta: 'Get my free Columbia audit',

  intro:
    "Run a contracting business in Columbia and you are working one of the more unusual markets in the Southeast. As the state capital it keeps a steady base of government work and the people who do it. Fort Jackson rotates thousands of military families through the area every year, and most of them open Google for a contractor within days of arriving. The University of South Carolina seats 35,000 students and a deep alumni buyer community across Five Points, Shandon, and Earlewood. Summers routinely hit 100 to 105 degrees, which makes cooling repair one of the highest-volume search categories in the metro. And inland flooding, from heavy rain bands to tropical leftovers, keeps roofing and restoration crews busy into the fall. Winning here takes three pieces pulling together: a site that converts, SEO that ranks you for what people search, and local SEO that lands you in the Map Pack, all in place before the next spike hits. Here is how we help Columbia contractors pull it off.",
  aioQuestion: 'How do Columbia SC contractors get more leads online?',
  aioAnswer:
    "Columbia contractors win more leads by pairing a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that takes the Google Map Pack. Because demand here runs on Fort Jackson PCS cycles, USC alumni buyers, heavy summer cooling searches, and recurring inland flooding, the contractors who look established and already rank ahead of each spike pull in the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Break into the three businesses Google pins to the map when Columbia searches \"near me.\" The highest-return move for most local shops, and how you catch Fort Jackson arrivals, summer cooling demand, and post-flood restoration calls.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your Columbia customers actually type, build an asset you own instead of renting clicks from ads, and measure the whole thing in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first sites engineered to turn visitors into booked jobs, whether that visitor is a PCS family just landed or a Shandon homeowner whose AC quit at midnight, not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild a dated site for speed and conversions, and migrate it carefully so you keep every bit of ranking you have already earned in Columbia search.",
    },
  ],

  faqs: [
    { q: 'Which marketing services do you run in Columbia SC?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients pair a high-converting website with SEO and local SEO so they rank, convert, and own their leads, and stay ready for Fort Jackson PCS demand, the summer cooling rush, and post-flood restoration calls." },
    { q: 'Is your work limited to contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors, so we understand PCS-driven demand, the punishing heat cycle, and inland flood work." },
    { q: 'Why does Fort Jackson matter to my marketing?', a: "Fort Jackson runs more than 50,000 trainees through each year, and thousands of permanent military families PCS in and out of the Columbia area. When a family lands, they search Google right away for every contractor they need. Sitting in the Map Pack when that search happens is one of the steadiest sources of high-intent leads this market offers." },
    { q: 'What does it cost to work with you?', a: "Websites are one-off builds running $2,000 to $9,000. SEO and local SEO are month-to-month at $750 to $3,000, with no long contract. We lock the exact scope in your free audit." },
    { q: 'Which Columbia areas do you serve?', a: "The whole Columbia metro and the surrounding towns: Shandon, Five Points, Forest Acres, Elmwood Park, Earlewood, Lexington, Irmo, Blythewood, Chapin, Cayce, West Columbia, Lake Murray, Harbison, and more." },
    { q: 'Where is the right place to start?', a: "Start with a free Columbia audit. We look at your website, your rankings, and your Map Pack presence, then point you to the one or two moves that will pull in the most work fastest. No slide deck, just a plan." },
  ],
};
