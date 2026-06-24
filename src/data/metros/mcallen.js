// MCALLEN — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across McAllen's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// MCALLEN — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why search in the Rio Grande Valley plays by its own rules',
  body:
    "Hidalgo County and the wider McAllen-Edinburg-Mission metro carry roughly 1.3 million residents, and the area keeps adding rooftops faster than almost any large market in Texas. Produce trade rolling across the Pharr-Reynosa bridge, the Anzalduas crossing west of Mission, and the warehouse corridor along Expressway 83 keeps cash and construction moving year round. The detail that throws off most marketing playbooks is the population itself: close to 92 percent of the metro is Hispanic, and a large slice of homeowners type their searches in Spanish before they ever try English. Hardly anyone in the trades here optimizes for that, so a query like \"techado cerca de mí\" or \"plomero en Edinburg\" sits wide open. Add the Valley's punishing climate, where afternoons run 105 to 110 from May into September and a failed compressor turns a house into a hazard, and cooling demand stretches across five solid months. Whoever Google already trusts when that heat arrives books the calendar.",
  pullQuote: 'Almost no contractor here optimizes for Spanish search. Owning it is the cheapest edge available anywhere in the Valley.',
  donut: {
    title: 'McAllen metro by ethnicity',
    value: 92,
    centerLabel: 'Hispanic',
    legend: [
      { label: 'Hispanic', pct: 92, kind: 'teal' },
      { label: 'Other', pct: 8, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Extreme heat (May–Sep), hurricane season (Jun–Nov)',
  seasonalDemand: [
    { m: 'J', v: 30 }, { m: 'F', v: 32 }, { m: 'M', v: 40 }, { m: 'A', v: 56 },
    { m: 'M', v: 80, peak: true }, { m: 'J', v: 92, peak: true }, { m: 'J', v: 98, peak: true },
    { m: 'A', v: 100, peak: true }, { m: 'S', v: 95, peak: true }, { m: 'O', v: 82, peak: true },
    { m: 'N', v: 52 }, { m: 'D', v: 32 },
  ],
  stats: [
    { value: '1.3M+', label: 'residents spread across the McAllen-Edinburg-Mission metro' },
    { value: '~92%', label: 'of the population is Hispanic, so most of the market searches in Spanish first', accent: true },
    { value: '105-110°F', label: 'typical afternoon highs from May into September, when a dead AC becomes a hazard' },
    { value: 'Top 3', label: 'Map Pack listings that soak up the bulk of the taps' },
  ],
  neighborhoods: [
    'McAllen', 'Edinburg', 'Mission', 'Pharr', 'San Juan', 'Alamo', 'Weslaco',
    'Mercedes', 'Donna', 'Harlingen', 'Rio Grande City', 'Palmview', 'La Joya',
    'Sullivan City', 'Hidalgo',
  ],
};

const AREAS = [
  'McAllen', 'Edinburg', 'Mission', 'Pharr', 'San Juan', 'Alamo', 'Weslaco',
  'Mercedes', 'Donna', 'Harlingen', 'Rio Grande City', 'Palmview', 'La Joya',
  'Hidalgo', 'Penitas',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. That's especially true in the Rio Grande Valley, where almost nobody is doing Spanish-language SEO — which means if you rank for the searches your neighbors actually type, you're essentially alone at the top. So that's what we build: rankings you own, in the language your customers search, for the jobs you actually want. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We know how the Valley actually searches',
    body: "When 92 percent of a metro is Hispanic, Spanish queries are the main channel, not a side note. We write and tune your pages in English and Spanish together, so you catch the phrasing a homeowner in Pharr or San Juan reaches for first, while nearly every competitor stays English-only.",
  },
  {
    title: 'Trades are the only thing we touch',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, general contracting. We plan around triple-digit summer load, Gulf storm season, and the 11 p.m. emergency call, so what we build matches how Hidalgo County homeowners really hunt for help.",
  },
  {
    title: 'We take you off rented leads',
    body: "The point is a pipeline that belongs to you, not one more recurring charge to a broker reselling the same Edinburg homeowner to three of your rivals. In a market where bilingual search is still up for grabs, that pipeline is yours to claim.",
  },
  {
    title: 'Plain prices, no guessing',
    body: "Rates posted in the open, reporting that tracks calls and leads, month-to-month once the first 90 days are done. Walk anytime we stop earning it. That arrangement keeps every ounce of pressure on us.",
  },
];

const PROOF = {
  heading: "We're new, so you get the honest math instead of a wall of logos",
  body:
    "A lot of shops open with a grid of client badges. We are early and founder-run, so we are not going to fake a history we have not built. What we can hand you is the reasoning behind the work, pulled straight from Google's own data and the wider industry research on the way people search close to home.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Picture this, and read it as a projection rather than a result we are claiming: a McAllen contractor pulling roughly 1,200 local \"near me\" impressions a month. Climbing out of page-two obscurity into the top three, and doing it in Spanish too, is the gap between a handful of calls and a full schedule. Once the heat lands and the cooling calls pile up, that gap widens further. During your free audit we run the actual figures for your shop: your current rankings, your real search volume, and a candid 90 to 180 day route.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'McAllen', state: 'Texas', stateAbbr: 'TX', metro: 'McAllen-Edinburg-Mission (Rio Grande Valley)',
  heroProof: ['Built for the trades', 'Bilingual SEO', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const mcallenLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'mcallen', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'McAllen Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'McAllen Local SEO that turns "near me" and "cerca de mí" searches into a ringing phone. We put you in the top three, in English and Spanish, across Hidalgo County.',
    eyebrow: 'Local SEO · McAllen-Edinburg-Mission',
    h1: 'McAllen Local SEO that turns "near me" and "cerca de mí" searches into a ringing phone',
    h2Exact: 'McAllen Local SEO Company',
    heroSubhead:
      "A \"near me\" search shows just three businesses pinned to the map, and everyone underneath them is practically invisible. We move you into that top three in English and in Spanish, so the call comes to you when 108-degree afternoons or a Gulf storm push the whole Valley to grab their phones.",
    primaryCta: 'Get my free McAllen audit',
    intro:
      "McAllen Local SEO turns on a single question: when a homeowner in Edinburg or Mission searches your trade, does Google pin your business to the map? Most people tap one of those three results and never scroll down. With close to 92 percent of the metro being Hispanic and almost no rival optimizing in Spanish, ranking on the map in both languages is the strongest move a Valley contractor can make. Here is the path to get there.",
    aioQuestion: 'How do McAllen businesses rank higher in local search?',
    aioAnswer:
      "Five pieces drive it: a Google Business Profile tuned for the exact trades and Hidalgo County towns you want, in English and Spanish; matching name, address, and phone details everywhere Google checks; a steady flow of genuine reviews; pages built around real Valley towns like Pharr and Weslaco; and Spanish content that grabs the searches rivals skip. With heat surging by May and the Gulf storm threat from June on, the winners are ranked and reviewed before demand peaks, not racing to catch it afterward.",
    problemHeading: "A quiet phone usually traces back to one of these three",
    painPoints: [
      { title: 'Three businesses own the map and you are not one', body: "Run your trade plus \"near me\" on your own phone. The three names Google pins up top collect most of the taps. Stay off that short list and the quality of your crews barely registers, because almost nobody scrolls far enough to find you. For a McAllen shop, breaking into that trio is normally the highest-return thing you can do all year." },
      { title: 'The Spanish searches sit unclaimed, so claim them', body: "With most of the metro being Hispanic, a big share of homeowners type queries like \"techado cerca de mí,\" \"plomero en Edinburg,\" or \"aire acondicionado McAllen.\" Hardly any local contractor ranks for those phrases. Show up there and you are nearly by yourself at the top of demand your rivals never even register." },
      { title: 'You are unprepared when the heat or the storm arrives', body: "A 108-degree July afternoon does not nudge cooling calls upward, it sets off a flood. A tropical system tracking up the Gulf can spike roofing and restoration searches in a single night. The shops already sitting in the Map Pack scoop those calls. Ranking ahead of time is how you ride that wave instead of watching it roll past." },
    ],
    servicesHeading: 'What it really takes to rank you across the Valley',
    services: [
      { name: 'Google Business Profile', desc: "The heaviest lever in the Map Pack. We set your categories, services, service area, photos, and posts in English and Spanish so Google reads exactly which McAllen and Edinburg queries belong to you." },
      { name: 'Citations and NAP cleanup', desc: "Google wants your name, address, and phone identical everywhere it looks. We correct the listings that clash and create the ones missing across the Valley directories." },
      { name: 'Reviews that keep coming', desc: "A straightforward system that turns each finished job into a steady run of reviews in both languages. It nudges your ranking up and gets Hidalgo County homeowners to dial." },
      { name: 'Town and neighborhood pages', desc: "Honest pages for Edinburg, Mission, Pharr, Weslaco, San Juan, Alamo, and the rest, in English and Spanish, so you rank for the town a person actually typed instead of only \"McAllen.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The groundwork beneath everything that lets the rest of your local SEO take hold." },
      { name: 'Local link building', desc: "Mentions and links from sources Google respects across the RGV: Valley press, chambers, trade groups, partners. In a market this tight, that is the line between page one and page two." },
      { name: 'Spanish-language search optimization', desc: "Bilingual pages, Spanish GBP posts, and Spanish citations that lift you to the top of searches almost no competitor in Hidalgo County bothers to chase.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" digging now kicks off inside AI Overviews, ChatGPT, and Perplexity. We shape your content so those tools can read and quote your business.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We pin down where you really rank today, in English and Spanish, across every town you serve, then map which Map Pack rivals are ahead of you and exactly why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP come first, Spanish optimization included. These pieces move quickest, and you usually see a bit of lift inside a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the bilingual review engine switch on. They stack up week after week, which is the whole reason starting your local SEO sooner beats starting later." },
      { name: 'Add local content', desc: "Town and service-area pages across the Valley in both languages, with the on-page work to support each one." },
      { name: 'Report and expand', desc: "Reporting in plain English tied to calls and booked leads, not vanity positions. Then we go capture the next town." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several RGV communities.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'Spanish-language SEO basics'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across the Valley, in both languages.', features: ['Everything in Local Growth', 'Full bilingual SEO', 'Local link building', 'Heat-season and hurricane demand targeting', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in McAllen?', a: "Most McAllen engagements run between $750 and $2,500 a month, set by how many towns and keywords you chase and whether you want full bilingual coverage. The tiers sit right above with no hidden fees and no long contract, and we lock the exact scope during your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile work can shift in a few weeks. The competitive Hidalgo County keywords usually need 90 to 180 days of steady effort, since reviews and citations stack up over time. Anyone promising page one in 30 days is selling smoke." },
      { q: 'Why does Spanish-language SEO matter so much in McAllen?', a: "Close to 92 percent of the metro is Hispanic, and a big share of homeowners search for trades in Spanish, with phrases like \"techado cerca de mí\" and \"plomero en Edinburg.\" Almost no rival ranks for them, so showing up leaves you nearly alone at the top of high-intent queries the competition cannot even see." },
      { q: 'How does local SEO help me during the Rio Grande Valley summer?', a: "Once McAllen sits at 105 to 110 through July and August, cooling demand floods in. The contractors already in the Map Pack take those calls, and there is no runway to build rankings after the heat lands. We get you ranked and reviewed ahead of the season so that surge comes to you instead of to whoever Google already trusts." },
      { q: 'Which areas do you cover?', a: "The whole Rio Grande Valley: McAllen, Edinburg, Mission, Pharr, Weslaco, San Juan, Alamo, Donna, Mercedes, Harlingen, and beyond. We build real town pages rather than one catch-all McAllen page, because that is what genuinely ranks for \"[trade] [town]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It is nearly all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We get the after-hours emergency, the triple-digit cooling rush, and the storm-season surge, and we shape your local SEO around all three." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More \"near me\" research now begins inside AI rather than classic search. We frame your content and schema so those engines can read, trust, and quote your business. It is fast becoming as decisive as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an opening 90 days because that is about how long local SEO needs to show real motion. After that it runs month-to-month. If we are not delivering, you walk, and the accountability stays squarely on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a bilingual Google profile, and a review base that route leads straight to you. Over time the broker dependence fades because the work is already heading your way." },
      { q: "What's in the free audit?", a: "A straight read on where you rank today in English and Spanish across your towns, what your Map Pack rivals are doing to stay ahead, the fixes that move you fastest, and a realistic 90 to 180 day plan with the math run for your shop. McAllen Local SEO comes down to ranking on the map for the searches your neighbors actually type, in both languages, and the audit is the diagnosis, not a slideshow." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'mcallen', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'McAllen SEO Company | Rank for the Searches That Book Jobs | OnwardCraft',
    metaDescription:
      'McAllen SEO that ranks contractors for the Google searches that book jobs, in English and Spanish, with leads you own. Lead-tied reporting, no lock-in, Hidalgo County.',
    eyebrow: 'SEO Services · McAllen-Edinburg-Mission',
    h1: 'McAllen SEO that ranks you for the searches that book jobs, in English and Spanish',
    h2Exact: 'McAllen SEO Company',
    heroSubhead:
      "Ads die the moment your card stops paying. SEO works the other way: rank once for what your Valley customers search and the leads keep arriving. We build that ranking in both languages, because most of Hidalgo County reaches for Spanish first and your rivals are not bothering with it.",
    primaryCta: 'Get my free McAllen SEO audit',
    intro:
      "McAllen SEO boils down to one thing: when someone searches your trade, in English or Spanish, are you sitting on page one or stuck on page two? Page two might as well be page fifty. We get contractors ranking for the money keywords that book jobs in a fast-growing, bilingual, heat-driven market, building organic traffic you own, and we judge it in leads rather than vanity traffic.",
    aioQuestion: 'How do McAllen businesses rank higher on Google?',
    aioAnswer:
      "They win by repairing the site's technical base, tuning each page for the precise terms customers type in English and Spanish, publishing content that genuinely helps Valley towns like Pharr and Weslaco, and earning links from trusted local sources. Across the Rio Grande Valley, Spanish content is one of the least-contested SEO openings in any US metro, since almost no rival ranks for it, which leaves the field clear for the contractors who do.",
    problemHeading: "Three reasons your McAllen site is not bringing in work",
    painPoints: [
      { title: "Page two is where leads go to die", body: "Hardly anyone clicks past Google's first page, and they rarely scroll deep into it either. If you miss the top handful of results for what you sell, your site is effectively hidden no matter how sharp it looks." },
      { title: "Spanish search treats you like you are not there", body: "In a metro that is roughly 92 percent Hispanic, a huge share of homeowners search for trades in Spanish. Almost no local contractor ranks for those terms. That is not a setback, it is an opening, and the right bilingual SEO lands you at the top of high-intent searches your rivals never notice." },
      { title: "You miss the demand that actually pays", body: "Valley demand swings hard with the summer heat and the Gulf storm season, and the contractors ranked before it hits catch the rush. If your SEO ignores the cooling-season and storm-driven searches, you are leaving your busiest stretch of the year on the table." },
    ],
    servicesHeading: 'The SEO work that genuinely moves rankings in the Valley',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood repairs Google insists on before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned for the exact terms your Hidalgo County customers type, in English and Spanish, across titles, headings, body copy, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what Valley buyers search, pull in links, and bring leads on autopilot." },
      { name: 'Link building', desc: "Authority from real RGV and trade sources. In a market this competitive, links are frequently what decides page one versus page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Bilingual Map Pack work so you take the \"near me\" searches right alongside your organic positions." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, form fills, and booked leads rather than only rankings and traffic, so you always know what your SEO is truly worth." },
      { name: 'Bilingual & Spanish-language SEO', desc: "Full Spanish content, keywords, and citations so you rank for the searches most of this market types and that almost no rival targets.", featured: true },
      { name: 'AI search & GEO', desc: "We frame your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing slice of search now starts.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your positions in English and Spanish, your traffic, and your rivals, then build a roadmap around the keywords most likely to drive real Valley leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile, the foundation everything else has to stand on to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus fresh bilingual local content, including the cooling-season and storm-driven terms that count in Hidalgo County." },
      { name: 'Build authority', desc: "Links and citations from trusted RGV and trade sources to drive competitive keywords onto page one in both languages." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we lean harder into whatever is working and reach into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent McAllen SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services, neighborhoods, and languages.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'Spanish-language SEO basics'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own the RGV in English and Spanish.', features: ['Everything in SEO Growth', 'Full bilingual content + links', 'Heat-season & hurricane SEO', 'Multi-location coverage', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in McAllen?', a: "Most McAllen SEO engagements land between $900 and $3,000 a month, set by how competitive your keywords are, how much bilingual content you need, and how many locations you cover. The tiers sit above with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in McAllen?', a: "Look for early motion in 2 to 3 months and meaningful traction in 4 to 6, quicker on low-competition terms, including plenty of Spanish queries, and slower on the toughest English keywords. SEO compounds, so the gains keep stacking the longer you run it." },
      { q: 'Why does bilingual SEO matter so much in the Rio Grande Valley?', a: "The McAllen metro runs roughly 92 percent Hispanic, and a large share of homeowners search for trades in Spanish. Almost nobody ranks for those searches right now, so you can reach a huge chunk of the market with barely any competition. That is one of the rarest SEO openings in any US city." },
      { q: 'Should my McAllen SEO target summer heat and hurricane season?', a: "Yes. When McAllen hits 108 in July, cooling searches flood in, and rankings take months to build, so you have to be in position before the heat arrives. Same with storm season: a system moving up the Gulf can spike roofing and restoration searches overnight. We tune for those terms well ahead of time." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and lead-tied reporting. Higher tiers fold in full bilingual SEO and AI-search optimization. We confirm the exact scope during your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an opening 90 days because SEO needs that window to show real movement, then it shifts to month-to-month. If we are not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a growing part of what we tune for. We frame your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which areas around McAllen do you cover?', a: "The whole Rio Grande Valley: Edinburg, Mission, Pharr, Weslaco, San Juan, Alamo, Donna, Mercedes, Harlingen, and beyond, with real bilingual town pages instead of one generic McAllen page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building bilingual rankings and a Google presence that send leads straight to you. The more you own your search visibility in English and Spanish, the less you owe brokers for shared leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today in both languages, what your rivals are doing to stay ahead, the highest-impact fixes, and a realistic timeline with the math modeled for your shop. Good McAllen SEO is about owning page one for the money keywords that book jobs, in English and Spanish, and the audit is the diagnosis, not a slideshow." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'mcallen', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'McAllen Web Design Company | Convert Clicks Into Calls | OnwardCraft',
    metaDescription:
      'McAllen web design built to convert clicks into calls: fast, mobile-first, bilingual contractor sites made for Rio Grande Valley demand. Free quote.',
    eyebrow: 'Web Design · McAllen-Edinburg-Mission',
    h1: 'McAllen web design built to convert Valley clicks into booked calls, in English and Spanish',
    h2Exact: 'McAllen Web Design Company',
    heroSubhead:
      "A handsome website that never rings the phone is just a brochure. We build McAllen contractors fast, mobile-first, bilingual sites engineered to convert visitors into booked work, and to hold steady when a 108-degree afternoon sends the whole block reaching for their phones at once.",
    primaryCta: 'Get my free quote',
    intro:
      "McAllen web design has one job: turning a click into a booked call instead of bleeding leads quietly through a slow phone load, a buried call button, and no Spanish content for the large majority of the metro that searches in it. We build fast-loading, mobile-first contractor sites that look like the pro you are, convert Spanish and English visitors alike, and stay upright when the summer heat drives your traffic through the roof.",
    aioQuestion: 'What makes a good contractor website in McAllen?',
    aioAnswer:
      "A strong McAllen contractor site loads in under three seconds on a phone, puts the call button and a clear offer above the fold, runs in English and Spanish to reach the whole market, backs up trust with reviews and real job photos, and is built to absorb the traffic spikes of cooling season. Since this market is predominantly Hispanic, bilingual content is not a nice extra, it is how you reach the people actually searching across Hidalgo County.",
    problemHeading: "Why your current site is not bringing in work",
    painPoints: [
      { title: "It is a brochure, not a lead engine", body: "Plenty of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next outfit. We design every page around a single job: turning a visitor into a booked lead." },
      { title: "It only talks to half the Valley", body: "In a metro that is roughly 92 percent Hispanic, a site with zero Spanish content is invisible to a huge share of your would-be customers. We build bilingual sites that work for everyone in Hidalgo County hunting for your trade." },
      { title: "It buckles when demand surges", body: "When the Valley hits 108 and cooling calls flood in, contractor sites take a wave of traffic, and the slow ones hid the call button at the worst possible moment. We build sites that stay fast and keep converting under load, so you grab that demand instead of dropping it." },
    ],
    servicesHeading: "What goes into an OnwardCraft McAllen website",
    services: [
      { name: 'Custom design', desc: "No off-the-shelf template. A site shaped around your trade, your service area, and the jobs you actually want booked." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, since that is where nearly all your Valley traffic lives. Fast, thumb-friendly, easy to call from." },
      { name: 'Bilingual content', desc: "Full English and Spanish content so you reach the large Hispanic majority across Hidalgo County that searches for trades in their language." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where people genuinely use them. Every page carries a next step." },
      { name: 'Copy that sells', desc: "Words written for Valley homeowners in both languages that book the job, not filler that reads like every other contractor on Expressway 83." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank: clean structure, schema, fast load, and bilingual pages ready for the towns you serve." },
      { name: 'Heat-surge ready', desc: "Built to stay fast and keep the call button front and center when cooling season spikes demand, the stretch that turns visitors into your biggest jobs.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your service area, your best jobs, and your rivals, then map the site around booking more of the work you want in both languages." },
      { name: 'Design', desc: "We design a custom, mobile-first, bilingual layout built to convert, and you see and shape it before a line of code gets written." },
      { name: 'Build and copy', desc: "We build it fast and write English and Spanish copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the bilingual SEO foundation, tracking, and load speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it around whatever is actually converting." },
    ],
    pricing: {
      heading: 'Transparent McAllen web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger, bilingual site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Bilingual English/Spanish content', 'Service + neighborhood pages', 'Heat-surge ready'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom bilingual design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in McAllen?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, set by page count, bilingual scope, and integrations. The tiers sit above: fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes roughly 2 to 4 weeks, while a larger custom bilingual build runs 4 to 8. We hand you a firm timeline up front and keep you posted through every stage." },
      { q: 'Will my site be in Spanish as well as English?', a: "Yes, if you want it. In a metro that is roughly 92 percent Hispanic, bilingual content is how you reach the full market rather than an optional flourish. Our Growth and Custom tiers ship with full English and Spanish content, and we can fold it into the Starter tier too." },
      { q: 'Will my site handle a Rio Grande Valley summer traffic spike?', a: "Yes, and in McAllen that genuinely counts. When the Valley sits at 108 in July and cooling calls flood in, contractor sites take a wave of traffic, and the slow ones lose leads right as demand peaks. We build fast and keep the call button obvious so your site converts under load." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a bilingual local-SEO foundation: fast load, clean structure, schema, and pages ready for the towns you serve. The build gets you set to rank, and pairing it with our SEO service is how you climb the competitive terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platform you cannot leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where nearly all your Valley traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually run yourself, usually WordPress or Webflow. We recommend the right fit during your free consult and lay out the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and after that we offer affordable monthly maintenance for updates, speed, and security." },
      { q: 'What do I get in the free quote?', a: "A clear read on what your current site is costing you in lost leads, what a high-converting bilingual Valley site should include, and a fixed-price quote with a timeline. Good McAllen web design exists to convert clicks into booked calls, not just to look nice, and that is what the quote is built around. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'mcallen', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'McAllen Website Redesign | Keep Every Ranking You Have Earned | OnwardCraft',
    metaDescription:
      'McAllen Website Redesign that keeps every ranking you have earned: faster, bilingual, mobile-first rebuilds that convert more Valley visitors into booked jobs. Free audit.',
    eyebrow: 'Website Redesign · McAllen-Edinburg-Mission',
    h1: 'McAllen Website Redesign that keeps every Valley ranking you have earned, in both languages',
    h2Exact: 'McAllen Website Redesign Company',
    heroSubhead:
      "A dated site quietly costs you jobs every week: slow, English-only in a market where most homeowners search in Spanish, easy to scroll past. We redesign McAllen contractor sites to convert more, load faster, and serve the full bilingual Valley, then migrate with enough care that you keep every bit of ranking you have earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "A McAllen Website Redesign goes wrong one of two ways: the site looks nicer but converts the same, or it launches and the rankings evaporate overnight. We do neither. We rebuild McAllen contractor sites for speed, conversions, and bilingual reach, then run an SEO-safe migration with the redirects and care that protect the traffic you already hold.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You guard SEO during a redesign by keeping your URL structure or mapping 301 redirects for every changed page, preserving your existing content and metadata, carrying over your schema, and testing everything on staging before launch. For McAllen contractors, a redesign is also the moment to add Spanish content, since you can widen your reach across Hidalgo County dramatically without risking a single existing English ranking.",
    problemHeading: "Signs your McAllen site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and quietly drains trust", body: "On a high-ticket job, homeowners size you up by your site within seconds. An old, cluttered design nudges them toward a rival who looks more established, even when your crews do better work." },
      { title: "It is English-only in a bilingual market", body: "If your site carries no Spanish content, it is invisible to a huge share of the Valley. A redesign is the right moment to go bilingual and reach the large majority of Hidalgo County your current site is missing." },
      { title: "It cannot keep up when demand surges", body: "Traffic that never turns into calls is wasted, and an old site that crawls under a cooling-season surge loses leads at the exact moment they are worth the most. We rebuild for conversions and for the days your phone should not stop ringing." },
    ],
    servicesHeading: "What goes into an OnwardCraft McAllen redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what is costing you leads and rankings today, Spanish-language gaps included, so the redesign fixes real problems rather than just swapping colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you have already earned across the Valley." },
      { name: 'Conversion redesign', desc: "Clear offers, smarter call-to-action placement, and lead forms people actually use. We design for booked jobs, not just looks." },
      { name: 'Bilingual rebuild', desc: "Full English and Spanish content added during the redesign, so you go from missing most of the market to serving all of it across Hidalgo County." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals, which helps both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where nearly all your Valley traffic lives." },
      { name: 'Heat-surge ready rebuild', desc: "Rebuilt to stay fast and keep converting when cooling season spikes demand, so the new site catches your biggest jobs instead of choking on them.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful bilingual rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what is losing you leads and rankings, Spanish-search gaps included, then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, bilingual, conversion-focused design you review and shape before we build." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast with full bilingual content and prepare every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and watch closely so rankings hold and climb rather than slipping." },
      { name: 'Optimize', desc: "Post-launch tuning around what is converting in both languages, plus ongoing speed work and updates." },
    ],
    pricing: {
      heading: 'Transparent McAllen redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full bilingual redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Bilingual English/Spanish', 'Speed overhaul', 'Heat-surge ready'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete bilingual rebuild for multi-service or multi-location sites.', features: ['Full custom bilingual rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in McAllen?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, set by size, bilingual scope, and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not when it is done carefully, and that is exactly how we operate. We map 301 redirects for every changed URL, preserve content and metadata, carry over your schema, and test on staging first. Handled right, a redesign holds your rankings and usually nudges them upward." },
      { q: 'Can the redesign add Spanish-language content?', a: "Yes, and we push for it. In a metro that is roughly 92 percent Hispanic, adding Spanish content during a redesign is one of the highest-return moves on the table. We can take you fully bilingual without disturbing your existing English rankings." },
      { q: 'How long does a redesign take?', a: "A focused redesign runs about 3 to 5 weeks, while a larger bilingual rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site crawls on phones, looks dated, carries no Spanish content, is a chore to update, or simply is not bringing in leads, it is costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and sharpen your existing content, protect what is ranking, and handle the technical migration so nothing important slips through." },
      { q: 'Will the new site handle Rio Grande Valley summer traffic?', a: "Yes, and in McAllen that is a real factor. When the Valley sits at 108 in July and cooling calls flood in, contractor sites take a wave of traffic, and the slow ones lose leads. We rebuild for speed and keep the call to action obvious so the site converts when demand peaks." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely: the site, the domain, and the content. No platform lock-in." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, Spanish-search gaps included, what the redesign should fix, and a fixed-price quote with a timeline. A McAllen Website Redesign done right keeps every ranking you have earned through an SEO-safe migration while it lifts conversions, and that is the plan the audit lays out for you." },
    ],
  },
];

export const mcallenCity = {
  citySlug: 'mcallen', city: 'McAllen', state: 'Texas', stateAbbr: 'TX', metro: 'McAllen-Edinburg-Mission (Rio Grande Valley)',

  titleTag: 'McAllen Marketing for Contractors | OnwardCraft',
  metaDescription:
    'McAllen marketing for contractors in English and Spanish: web design, SEO, and local SEO. Get ranked, get booked, and own your leads across the Rio Grande Valley. Free audit.',

  eyebrow: 'McAllen · Web Design, SEO & Lead Generation',
  h1: 'McAllen marketing for contractors: get ranked across the Valley, get booked in both languages',
  h2Exact: 'McAllen Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for the Rio Grande Valley's bilingual, fast-growing, heat-driven market. One team to get you ranking in English and Spanish, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Bilingual SEO', 'No lock-in contracts'],
  primaryCta: 'Get my free McAllen audit',

  intro:
    "McAllen marketing for contractors means operating in one of the most unusual markets in the country. The metro grows fast, sits at roughly 92 percent Hispanic, and straddles one of the busiest produce-trade corridors in the US, with bridges at Pharr, Anzalduas, and Hidalgo moving freight daily. Nearly every rival ignores Spanish search, so owning the Map Pack bilingually is still up for grabs. Stack on the climate, where 105 to 110 from May into September keeps cooling demand huge and sustained, plus Gulf storm exposure and a steady wave of new rooftops, and winning here takes three things pulling together: a bilingual site that converts, SEO that ranks you for what the Valley actually searches, and local SEO that lands you in the Map Pack before the heat sets in.",
  aioQuestion: 'How do McAllen contractors get more leads online?',
  aioAnswer:
    "McAllen contractors win more leads by pairing a fast, bilingual, mobile-first website with SEO that ranks them for high-intent searches in English and Spanish, plus local SEO that takes the Google Map Pack across the Rio Grande Valley. Since the market is roughly 92 percent Hispanic and demand jumps hard during the extreme summer heat and Gulf storm season, the contractors who are visible bilingually and already ranked before the season opens take the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack, in English and Spanish',
      blurb: "Land in the top three businesses Google pins to the map when the Valley searches \"near me,\" in both languages. With most of Hidalgo County reaching for Spanish first, bilingual local SEO is the cheapest edge available in the RGV.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads, bilingually',
      blurb: "Rank for the money keywords your customers actually search in English and Spanish, build an asset you own instead of renting traffic from ads, and measure it in booked leads rather than vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Bilingual sites that convert',
      blurb: "Fast, mobile-first, English-and-Spanish websites engineered to turn Valley visitors into booked jobs, and to stay fast when triple-digit summer heat floods your phone with calls.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated, English-only site for speed, bilingual reach, and conversions, then migrate with enough care that you keep every ranking you have already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in McAllen?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO, all with bilingual English and Spanish capability. Most clients pair a high-converting bilingual website with SEO and local SEO so they rank in both languages, convert the full Valley, and own their leads." },
    { q: 'Why does Spanish-language SEO matter so much here?', a: "The McAllen metro runs roughly 92 percent Hispanic, and a large share of homeowners search for trades in Spanish. Almost no rival ranks for those searches, so going bilingual hands you a huge, high-intent slice of Hidalgo County with barely any competition." },
    { q: 'Do you work only with contractors?', a: "Nearly so. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors, so we understand the after-hours emergency, the triple-digit cooling rush, and the storm-season surge." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO run month-to-month from $750 to $3,000, with no long contract. We confirm exact scope during your free audit." },
    { q: 'Which McAllen areas do you serve?', a: "The whole Rio Grande Valley: McAllen, Edinburg, Mission, Pharr, Weslaco, San Juan, Alamo, Donna, Mercedes, Harlingen, and beyond. We build real bilingual town pages rather than one generic McAllen page." },
    { q: 'Where should I start?', a: "Start with a free McAllen audit. We look at your website, your rankings in English and Spanish, and your Map Pack presence, then tell you the one or two moves that bring in the most work fastest. McAllen marketing for contractors works best when web design, SEO, and local SEO pull together to get you found and booked, and the audit shows you where to begin. No slideshow, just a plan." },
  ],
};
