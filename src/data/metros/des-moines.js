// DES MOINES: per-metro, per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Des Moines's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// DES MOINES: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'What ranking in Des Moines really hinges on',
  body:
    "Des Moines is a mid-size metro of roughly 700,000 people, and the thing outsiders miss is how white-collar the money is. Principal Financial, Nationwide, EMC, Wells Fargo, and a long list of insurers run major operations here, which makes this one of the most insurance-dense labor markets in the country. That shapes how people buy a contractor. Homeowners here have filed claims, they know the process, and they expect you to talk it through like a pro before they hand you the job. The other force is growth. West Des Moines, Ankeny, and Waukee keep landing on national lists of the fastest-growing suburbs, pulling in young finance and tech professionals who came for affordable housing and search for every service on their phone. Then weather sets the tempo. Spring brings the hail and wind that fill every roofer's voicemail in a single afternoon, and Iowa winters bring the freeze-thaw cracking, frozen pipes, and furnace failures that push urgent calls through December and January. The Des Moines River has flooded this town more than once, so basement and water-damage work spikes too. Put it together and you have a value-driven buyer who researches hard, a market that rewards whoever is already ranking when demand hits, and very little patience for a contractor who shows up late.",
  pullQuote: 'A Des Moines homeowner has filed a claim before and will research you cold. Win the Map Pack before the spring hail, or you are negotiating from page two.',
  donut: {
    title: 'Des Moines homeownership rate',
    value: 58,
    centerLabel: 'homeowner rate',
    legend: [
      { label: 'Homeowners', pct: 58, kind: 'teal' },
      { label: 'Renters', pct: 42, kind: 'grey' },
    ],
  },
  seasonTitle: 'When the trade phones light up',
  seasonCaption: 'Spring hail and wind (Apr to Jun, Aug to Sep) plus Iowa winter heating and freeze-thaw (Dec to Feb)',
  seasonalDemand: [
    { m: 'J', v: 72, peak: true }, { m: 'F', v: 70, peak: true }, { m: 'M', v: 62 },
    { m: 'A', v: 88, peak: true }, { m: 'M', v: 92, peak: true }, { m: 'J', v: 86, peak: true },
    { m: 'J', v: 60 }, { m: 'A', v: 82, peak: true }, { m: 'S', v: 80, peak: true },
    { m: 'O', v: 54 }, { m: 'N', v: 58 }, { m: 'D', v: 68, peak: true },
  ],
  stats: [
    { value: '~700K', label: 'people across the greater Des Moines metro, anchored by a finance and insurance workforce' },
    { value: 'Top 5', label: 'US metro for insurance employment, so homeowners here know exactly how a claim works', accent: true },
    { value: 'Apr-Jun', label: 'peak hail and wind roofing window, when search demand jumps in a single storm' },
    { value: '58%', label: 'homeownership rate, a steady base of value-minded owners with real repair needs' },
  ],
  neighborhoods: [
    'East Village', 'Sherman Hill', 'Beaverdale', 'Ankeny', 'Waukee',
    'West Des Moines', 'Urbandale', 'Johnston', 'Altoona', 'Norwalk',
    'Clive', 'Grimes', 'Windsor Heights', 'Pleasant Hill', 'Bondurant',
  ],
};

const AREAS = [
  'Des Moines', 'West Des Moines', 'Ankeny', 'Waukee', 'Urbandale',
  'Johnston', 'Altoona', 'Norwalk', 'Clive', 'Grimes',
  'East Village', 'Sherman Hill', 'Beaverdale', 'Windsor Heights', 'Bondurant',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. In Des Moines, where half the roofing calls land in the two weeks after a hailstorm, being invisible when the storm hits means you simply do not get those jobs. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the West Des Moines and Ankeny neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We build for storm-season timing',
    body: "Roofing and restoration demand in Des Moines does not ramp up gently. It jumps the afternoon a hailstorm crosses the metro. We rank you for the terms homeowners type during those windows and make sure you are already on the map before April, so you are catching the wave instead of chasing it.",
  },
  {
    title: 'We get you off rented leads',
    body: "The aim is a pipeline that belongs to you. Not a recurring invoice to a broker who sold the same hail-damaged homeowner to four contractors and charged every one of you to fight over the call.",
  },
  {
    title: 'We actually know the Des Moines metro',
    body: "Ankeny and Waukee are booming with new builds and first-time buyers who research everything online. Beaverdale and Sherman Hill are older neighborhoods with character homes and real repair needs. West Des Moines and Johnston carry the professional incomes that fund bigger projects. We build your local SEO around those differences, not a city-name swap on a national template.",
  },
  {
    title: 'No contracts, no mystery',
    body: "Prices are posted, reporting maps to actual leads, and you go month-to-month after the first 90 days. If we are not earning it, you leave. That keeps the pressure exactly where it should sit: on us.",
  },
];

const PROOF = {
  heading: "We're a new shop, so here's the honest math instead of a logo wall",
  body:
    "A lot of agencies open with a grid of client logos. We are a young, founder-led shop, so we will not invent a track record we have not earned yet. What we can give you is the reasoning, pulled straight from Google's and the industry's own research on how people actually search for a local contractor.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here is a rough sketch, clearly marked as a projection and not a result we are claiming: a Des Moines roofer stuck on page two during a spring hail event is invisible through the single biggest demand week of the year. Climbing out of page-two obscurity into the top three Map Pack spots before April is the gap between a booked-solid spring and watching the work go to whoever ranked above you. In your free audit we model the real numbers for your shop: your current rankings, your search volume by season, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Des Moines', state: 'Iowa', stateAbbr: 'IA', metro: 'Des Moines',
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const desMoinesLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'des-moines', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Des Moines Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Des Moines Local SEO that lands you in the Google Map Pack before spring hail, so the "near me" call rings your phone, not a competitor down the street.',
    eyebrow: 'Local SEO · Des Moines, IA',
    h1: 'Des Moines Local SEO that makes you the first name on the map before the hail',
    h2Exact: 'Des Moines Local SEO Company',
    heroSubhead:
      "Google pins three businesses to the map for a \"near me\" search in Des Moines, and everyone below them is invisible. One spring hailstorm can send a thousand homeowners hunting for a roofer in the same afternoon, and every one taps one of those three. We get you there before the season opens, so the calls land with you.",
    primaryCta: 'Get my free Des Moines audit',
    intro:
      "Des Moines Local SEO is a story about timing and position. When hail rakes the metro or a polar vortex drops the thermometer below zero, homeowners in Ankeny, Beaverdale, and Waukee do not scroll. They tap one of the first three businesses Google pins to the local 3-pack and dial. That is the whole contest. If your Google Business Profile is not in that top three for your service areas before demand jumps, the work goes to whoever is. Here is how you claim a spot on the map.",
    aioQuestion: 'How do Des Moines businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile tuned to the exact services and suburbs you want; name, address, and phone details that match everywhere online; a steady stream of genuine reviews; and local content tied to real Des Moines neighborhoods. In a storm-driven, insurance-savvy market like this one, you also have to be ranked before hail season, because it takes months to build and you cannot start in April and expect to be there when the cloud rolls in.",
    problemHeading: "When the Des Moines phone goes quiet, it's usually one of these three",
    painPoints: [
      { title: 'Competitors own the three map spots when the storm hits', body: "Type your own service plus \"near me\" in Des Moines right now. See those three businesses? When spring hail sends a hundred Ankeny homeowners searching at once, every one of them taps a name in that box. If you are not already in the top three, the storm week goes to someone else, and it happens in hours, so there is no window to catch up." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same hail-damaged Des Moines homeowner to three or four contractors at once, then bill each of you for the right to compete. Local SEO inverts that: the homeowner searches, finds you at the top, and calls you alone. Run it long enough and you lean on the brokers less every month." },
      { title: "You're missing the suburbs where the growth lives", body: "Ankeny and Waukee rank among the fastest-growing communities in Iowa, packed with new buyers who research every home service online. West Des Moines and Johnston carry the incomes that fund quality work. If your local SEO does not name those suburbs specifically, you are skipping the fastest-growing slice of the metro." },
    ],
    servicesHeading: 'What it actually takes to rank you in Des Moines',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We set your categories, services, service area, photos, and posts so Google knows which Des Moines searches belong to you, and so you are visible before hail season arrives." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to line up everywhere Google checks. We fix the listings that contradict and build the ones you are missing across Iowa directories and the national platforms." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of fresh reviews. It lifts your Map Pack position and gives a homeowner comparing three options a reason to call you first." },
      { name: 'Neighborhood and suburb pages', desc: "Real pages for Ankeny, Waukee, Johnston, Beaverdale, and the rest, so you rank for the suburb someone is actually standing in, not one generic Des Moines page." },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The under-the-hood work that lets everything else rank when demand jumps." },
      { name: 'Local link building', desc: "Mentions and links from Des Moines sources Google trusts: local press, trade groups, community organizations, partners. In this market that is often what separates page one from page two." },
      { name: 'Seasonal and storm SEO', desc: "We optimize for the hail, wind-damage, and emergency-heating searches that drive Des Moines demand, so you are already ranking when the season opens instead of scrambling after it.", featured: true },
      { name: 'AI search readiness', desc: "A growing share of local research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and name you in an answer.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We map where you actually rank today across Des Moines and its suburbs, and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift within a few weeks of getting these clean." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting well ahead of the busy season." },
      { name: 'Add local content', desc: "Suburb and neighborhood pages for Ankeny, Waukee, Johnston, West Des Moines, and the surrounding communities, plus the on-page work that backs them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next suburb or service keyword." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month once the first 90 days are up. No lock-in, and you can cancel any time.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, locking in the Map Pack foundation before hail season.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For shops competing across Des Moines and its fast-growing suburbs.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Suburb landing pages (Ankeny, Waukee, Johnston)', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors set on owning the Map Pack across the whole metro.', features: ['Everything in Local Growth', 'Local link building', 'Seasonal and storm search targeting', 'Multi-suburb and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Des Moines?', a: "Most Des Moines engagements land between $750 and $2,500 a month, depending on how many suburbs and keywords you are chasing. The tiers above lay it out, with no hidden fees and no long contract, and we lock the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile work can move within a few weeks. Competitive Des Moines keywords usually take 90 to 180 days of steady effort, because reviews and citations build up over time. That is why starting before hail season, not during it, is how you actually catch the demand jump." },
      { q: 'What makes Des Moines local SEO different?', a: "Two forces. It is a storm-driven market where roofing, restoration, and heating demand can jump overnight, so ranking when a season opens is everything. And it is one of the most insurance-savvy markets in the country, full of buyers who research before they call. We build your map presence ahead of those windows and cover the booming suburbs like Ankeny and Waukee where a generic Des Moines page will not rank." },
      { q: 'Which areas do you cover?', a: "The full Des Moines metro: the city plus Ankeny, Waukee, West Des Moines, Urbandale, Johnston, Altoona, Norwalk, Clive, and the neighborhoods inside them, from East Village to Beaverdale to Sherman Hill. We build real suburb pages instead of one generic Des Moines page, because that is what ranks for 'roofer Ankeny' or 'HVAC Waukee.'" },
      { q: 'Do you work with contractors specifically?', a: "It is nearly all we do. Roofing, restoration, HVAC, plumbing, solar, electrical, and general contractors. We know storm-damage claims, insurance-driven jobs, and the freeze-thaw heating emergencies Iowa winters produce, and we build your local SEO around them." },
      { q: 'How does weather decide when I should start?', a: "April through June is peak hail and wind roofing season here, and December through February drives furnace and freeze-thaw repair work. Ranking takes months to build. If you want to be visible the moment those windows open, the time to start is now, not the week after the first storm." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more local research starts in AI now rather than classic search. We structure your content and schema so those engines can read, trust, and cite your business. In Des Moines it is fast becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. The first 90 days is the only commitment, because that is about how long local SEO takes to show real movement in Des Moines. After that you are month-to-month. If the leads are not showing up, you walk, and the pressure stays on us to keep earning the spot." },
      { q: 'How does this help with insurance-claim jobs?', a: "This is an insurance industry town, and Des Moines homeowners are comfortable with the claims process. We make sure your Google Business Profile and website clearly signal that you handle insurance work, which helps you surface when someone searches for hail or storm damage with a claim already in mind." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across Des Moines and its suburbs, what your Map Pack competitors are doing to beat you, the fixes that move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck, just a straight diagnosis from a Des Moines Local SEO company that wants to rank you on the map and keep you there." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'des-moines', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Des Moines SEO Company | OnwardCraft',
    metaDescription:
      'Des Moines SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in, built for a storm-driven, insurance-savvy market.',
    eyebrow: 'SEO Services · Des Moines, IA',
    h1: 'Des Moines SEO that puts your contracting business on page one and holds it',
    h2Exact: 'Des Moines SEO Company',
    heroSubhead:
      "Ads quit the second you stop paying. SEO does the reverse: rank once for what your Des Moines customers search and the leads keep coming, through hail season, through Iowa winters, and through every slow stretch in between. We build that ranking and tie every report to real calls and booked jobs.",
    primaryCta: 'Get my free Des Moines SEO audit',
    intro:
      "Des Moines SEO comes down to one question: when a homeowner in Ankeny or West Des Moines searches for what you do, are you on page one or page two? In a market where demand jumps overnight after a hailstorm or a cold snap, the contractors already ranking catch the wave and the ones on page two wait it out. We get you to page one for the keywords that drive real Des Moines leads, and we measure it in calls and jobs, not vanity traffic.",
    aioQuestion: 'How do Des Moines businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical base of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content tied to specific Des Moines suburbs, and earning links from trusted Iowa sources. In a storm-driven market, ranking for seasonal terms like hail damage, storm restoration, furnace repair, and frozen pipes before demand jumps is one of the highest-return plays a Des Moines contractor can run.",
    problemHeading: "Three reasons your Des Moines site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two when the season opens", body: "Almost nobody clicks past the first page of Google. In Des Moines that hurts more than most places because demand is seasonal: a spring hailstorm sends a wave of homeowners searching at once, and they all land on whoever already holds page one. Sitting on page two during a hail event is being invisible during your best opportunity of the year." },
      { title: "You're renting traffic instead of owning it", body: "Google Ads buys you instant visibility, but the moment you stop paying, the leads stop and you have built nothing. SEO compounds into rankings that keep producing calls long after the work is done, at a lower cost per lead over time. In a market where brokers sell the same storm-damaged homeowner to four contractors, owning your own pipeline matters." },
      { title: "You're missing the searches that matter most", body: "Des Moines demand is not flat across the year. Roofing and restoration spike in spring and again in late summer after severe weather. Heating work surges in December and January, and flood and water-damage work follows the river. The contractors who rank for those terms ahead of season catch the spike. If your SEO ignores how Des Moines searches by season, your busiest weeks walk away." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings in Des Moines',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank your Des Moines pages at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned for the exact terms Des Moines and suburban homeowners search: titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and pull in leads on their own, including suburb-specific content for Ankeny, Waukee, and Johnston." },
      { name: 'Link building', desc: "Authority from real Des Moines and Iowa sources. Links from local press, trade associations, and industry partners are frequently what separate page one from page two here." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the 'near me' searches across your service area right alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and booked leads, not just rankings and traffic, so you always know what your SEO investment is actually worth." },
      { name: 'Seasonal and storm SEO', desc: "We rank you for hail damage, storm restoration, frozen-pipe, and emergency-heating searches, the terms that drive Des Moines demand, so you are visible before the season instead of chasing it.", featured: true },
      { name: 'AI search and GEO', desc: "We shape your content so AI Overviews, ChatGPT, and Perplexity pull you into their answers, since a growing share of Des Moines search now starts inside those tools.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Des Moines leads, including the seasonal terms that decide your busiest months." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile: the foundation everything else needs before it can rank when Des Moines homeowners are searching." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content: suburb pages, seasonal guides, and the emergency terms that matter through an Iowa year." },
      { name: 'Build authority', desc: "Links and citations from trusted Des Moines and Iowa sources to push competitive keywords onto page one before the next hail season." },
      { name: 'Report and scale', desc: "Monthly reporting mapped to leads, then we press harder on what is working and push into the next keyword set or the next Des Moines suburb." },
    ],
    pricing: {
      heading: 'Transparent Des Moines SEO pricing',
      note: 'Month-to-month once the first 90 days are up. No lock-in, and you can cancel any time.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a tight site chasing its core Des Moines keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and Des Moines suburbs.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'Suburb pages (Ankeny, Waukee, Johnston)'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses set on owning Des Moines search across the metro.', features: ['Everything in SEO Growth', 'Seasonal and storm search content', 'Aggressive link building', 'Multi-suburb coverage', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Des Moines?', a: "Most Des Moines SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. The tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Des Moines?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter suburb-level terms and slower on the most competitive metro-wide keywords. Because demand here is seasonal, the ideal time to start is well before hail season or winter, not during it." },
      { q: 'Is SEO better than Google Ads for Des Moines contractors?', a: "They do different jobs. Ads buy instant visibility that ends when you stop paying. SEO builds an asset you own that keeps producing calls at a lower cost per lead over time. Most Des Moines contractors do best running SEO as the long-term engine and ads selectively during demand spikes or for a new service." },
      { q: 'Should my Des Moines SEO target seasonal demand?', a: "Without question. When hail hits in May, searches for storm damage and roof repair jump overnight, and ranking takes months to build. The contractors who prepared in January or February are the ones who book the spring. We optimize for those seasonal and emergency terms ahead of time." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal storm content and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. The first 90 days is the only commitment, because SEO needs about that long to show real movement, and then you move to month-to-month. If the results are not landing, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "Increasingly, yes, and it is a growing part of the work. We organize your content and schema so AI engines can read you, trust you, and name your business in an answer rather than leaving you out of the classic results entirely." },
      { q: 'Which Des Moines suburbs do you cover?', a: "The full metro: Des Moines proper plus Ankeny, Waukee, West Des Moines, Urbandale, Johnston, Altoona, Norwalk, Clive, and the surrounding communities. We build genuine suburb pages rather than one generic Des Moines page, because 'roofer Ankeny' and 'HVAC Waukee' are the searches that drive real local leads." },
      { q: 'How do you help me rank for insurance-claim work?', a: "Des Moines is an insurance industry hub, and many homeowners here already know the claim process. We make sure your site and profile clearly signal that you handle insurance-driven restoration and roofing, which helps you rank for the searches homeowners run right after filing." },
      { q: "What's in the free SEO audit?", a: "A snapshot of where you rank today, the moves your Des Moines competitors are using to stay ahead, the fixes that pay off fastest, and a realistic timeline with the numbers run for your business. It is the honest first step of Des Moines SEO that turns organic traffic into booked work and a page-one position you actually own. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'des-moines', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Des Moines Web Design Company | Sites That Convert | OnwardCraft',
    metaDescription:
      'Des Moines web design that turns visitors into booked jobs: fast, mobile-first sites built for contractors in a storm-driven, fast-growing market.',
    eyebrow: 'Web Design · Des Moines, IA',
    h1: 'Des Moines web design that books storm-season jobs instead of just looking nice',
    h2Exact: 'Des Moines Web Design Company',
    heroSubhead:
      "When hail crosses Des Moines, a hundred homeowners hunt for a roofer in the same afternoon. The contractor with a fast, clear, mobile-friendly site catches that wave. The one with a slow, confusing site loses it. We build sites engineered to convert, not brochures that sit quietly while the season passes.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Des Moines contractor websites leak leads without anyone noticing: slow on a phone, no clear call to action, nothing that signals you are the right person for the job. In a market where demand jumps after a storm and homeowners in Ankeny and Waukee decide fast on their phones, a site that does not convert immediately is quietly costing you work. We build fast, professional, mobile-first sites that turn visitors into booked jobs, and that are ready to rank when hail season comes.",
    aioQuestion: 'What makes a good contractor website in Des Moines?',
    aioAnswer:
      "A good Des Moines contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with real reviews and project photos, and names the specific suburbs you serve: Ankeny, Waukee, Johnston, West Des Moines. Because homeowners here often search on mobile during or right after a weather event, speed and an obvious next step are what separate a site that books the storm job from one that hands it to whoever answers faster.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "Plenty of contractor sites just list services with no clear offer and no reason to call over the next result. In Des Moines that gets amplified during demand jumps: a homeowner searching for help after a hailstorm is deciding fast. If your site has no clear, immediate call to action, they are on to the next name before they ever reach your services page." },
      { title: "It's slow on the phone when it matters most", body: "Storm searches happen on mobile, often while a homeowner stands in the driveway staring at the damage. If your site takes more than a few seconds to load, they are gone. Slow sites also rank worse in mobile search, which doubles the loss. We build fast, so you keep the visitor and the ranking." },
      { title: "It doesn't speak to the suburbs where you work", body: "A homeowner in Ankeny wants to see that you serve Ankeny. A Waukee homeowner wants the same. A generic 'Des Moines contractor' page reads like everyone else. We build sites that name the specific suburbs and communities you cover, so visitors trust that you are local and Google ranks you for neighborhood-level searches." },
    ],
    servicesHeading: "What's in an OnwardCraft Des Moines website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your service area, and the jobs you want more of across Des Moines and its suburbs." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that is where storm-season and emergency searches happen. Fast load, easy to call from, thumb-friendly forms." },
      { name: 'Conversion-focused UX', desc: "Clear offers, prominent call buttons, and lead forms placed where they actually get used. Every page carries one job: get the visitor to contact you." },
      { name: 'Copy that sells', desc: "Words that speak to an anxious Des Moines homeowner and book the job, not filler text that reads like every other about page in town." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank: clean structure, schema, fast load, and suburb-ready pages so Google knows exactly where you work." },
      { name: 'Speed and Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings during high-demand stretches." },
      { name: 'Suburb-targeted pages', desc: "Pages built around the communities you serve, from Ankeny to Waukee to Johnston to West Des Moines, so you stand out and rank for neighborhood searches instead of blending into a generic city page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read your site and recommend your business as more local search shifts toward AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your service area, your best jobs, and your competitors, then map the site around booking more of the work you want across the Des Moines metro." },
      { name: 'Design', desc: "We lay out a custom, mobile-first design built to convert the storm-season visitor. You see it and steer it before a single line of code gets written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with your call to action front and center on every page and suburb pages that actually rank." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one, so you are ready when demand jumps." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it on what is actually converting across your service area." },
    ],
    pricing: {
      heading: 'Transparent Des Moines web design pricing',
      note: 'A one-time build, billed 50% up front and 50% at launch. You own everything, with no lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A tight, high-converting site for a single-trade Des Moines contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A larger site for established shops running several services or suburbs.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + suburb pages', 'Speed and Core Web Vitals', 'Suburb-targeted pages (Ankeny, Waukee, Johnston)'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A fully custom build for multi-service or multi-location Des Moines businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations and booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Des Moines?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. The tiers are above: fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We hand you a firm timeline up front and keep you posted through each stage." },
      { q: 'Will my site help me capture storm-season demand?', a: "That is a big part of why we build the way we do. Mobile-first, fast-loading, with a clear call to action, because when a Des Moines homeowner is hunting for a roofer right after a hailstorm, they are on their phone and deciding fast. A site that is slow or unclear loses them instantly." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local SEO foundation: fast load, clean structure, schema, and suburb-ready pages. The build gets you ready to rank, and pairing it with our SEO service is how you climb the competitive Des Moines terms." },
      { q: 'Do I own the website?', a: "Yes, all of it: the site, the domain, and the content. There is no hostage situation and no locked platform you cannot move off later if you choose." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where storm searches and emergency calls happen. Fast load, easy-to-tap call buttons, and forms built for a thumb while standing in a driveway." },
      { q: 'What platform do you build on?', a: "We match the platform to your needs and to what you can run without us looking over your shoulder, usually WordPress or Webflow. We name the right fit in your free consult and walk through the tradeoffs in plain English." },
      { q: 'Do you offer ongoing support?', a: "Yes. Launch support comes with every build, and after that we offer affordable monthly maintenance covering updates, speed, and security so the site stays sharp through each Des Moines season." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time, fixed-price project. Any maintenance or SEO you add afterward stays month-to-month, so you are free to leave whenever it suits you." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Des Moines contractor site should include, and a fixed-price quote with a timeline. It is Des Moines web design that converts visitors into booked jobs, mobile-first and fast-loading from day one. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'des-moines', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Des Moines Website Redesign | OnwardCraft',
    metaDescription:
      'Des Moines Website Redesign without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs before spring hail season.',
    eyebrow: 'Website Redesign · Des Moines, IA',
    h1: 'Des Moines Website Redesign that rebuilds for leads, not just looks',
    h2Exact: 'Des Moines Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week, and in Des Moines it can cost you the whole hail season if you are not ready when the spring storms come. We redesign contractor sites to convert more and load faster, and we migrate so carefully that you keep every ranking you have already earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "A Des Moines Website Redesign usually goes one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish because nobody handled the migration. We do neither. We rebuild Des Moines contractor sites for mobile speed and conversions, build them to stand out in a market where demand jumps fast, and run an SEO-safe migration with the redirects and care that protect the traffic you already have.",
    aioQuestion: 'Can I redesign my Des Moines website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure or mapping 301 redirects for every changed page, preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign holds your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one, which is exactly what Google rewards.",
    problemHeading: "Signs your Des Moines site is overdue for a redesign",
    painPoints: [
      { title: 'It looks dated and costs you trust before the call', body: "Des Moines homeowners, and especially the young professionals in Ankeny and Waukee who research everything online, size up your business by your website in seconds. An old, cluttered design quietly sends them to a competitor who looks more established, even when your work is better and your price is fair." },
      { title: "It's slow when storm-season searches spike", body: "Spring hail and wind send a wave of homeowners searching on mobile, often right after a storm. If your site is slow or clunky, you lose those visitors before they ever see your offer, at the exact moment demand peaks. A mobile-first rebuild wins them back." },
      { title: "It doesn't convert visitors into calls", body: "Traffic that never turns into calls is wasted. An old site with a buried phone number, no clear offer, and dated photos gives a visitor no reason to pick you over the next result. We rebuild for conversions: clear offers, prominent call buttons, and suburb-specific pages that make the right homeowners feel like you are the obvious choice." },
    ],
    servicesHeading: "What's in an OnwardCraft Des Moines redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what is costing you leads and rankings today, so the redesign fixes real problems instead of just refreshing the look." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you have already earned through the transition." },
      { name: 'Conversion redesign', desc: "Clear offers, smarter call-to-action placement, and lead forms that actually get used. We design for booked jobs and storm-season calls, not just a prettier screenshot." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals: better for conversions and rankings alike, especially during mobile-heavy storm searches." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where storm-season searches and emergency calls happen in Des Moines." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and signals to Des Moines homeowners that you run a professional operation." },
      { name: 'Suburb-targeted rebuild', desc: "Rebuilt around the communities you serve, from Ankeny to Waukee to Johnston to West Des Moines, so the new site ranks for neighborhood searches and stands out instead of blending into a generic metro page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as local search keeps shifting toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what is losing you leads and rankings, then map a redesign that fixes it without breaking what already works, with a clear plan to protect your rankings through the migration." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build. Fast and clear for the homeowner on a phone after a storm." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration that holds your rankings." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and climb instead of dropping, and so you are positioned before the next demand window." },
      { name: 'Optimize', desc: "Post-launch tuning on what is converting across your Des Moines service area, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Des Moines redesign pricing',
      note: 'A one-time project, billed 50% up front and 50% at launch. You own everything, with no lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small Des Moines contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site with several services or suburbs.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + suburb pages', 'Suburb-targeted rebuild (Ankeny, Waukee, Johnston)'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A ground-up rebuild for multi-service or multi-location Des Moines businesses.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations and booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Des Moines?', a: "Most redesigns land between $2,500 and $9,000 as a one-time project, set by the page count and any integrations. The price is fixed, there are no surprises, and you own the finished result outright." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it is done carefully, and that is exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging before launch. Done right, a redesign holds your rankings and usually pushes them higher with the faster, better-structured site." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage, and we can work around your seasonal calendar so you are live before the next demand window." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is not bringing in leads, skips your Des Moines suburbs, or loses visitors during storm-season spikes, it is costing you real work. The free audit tells you plainly whether a redesign is worth it for your business." },
      { q: 'Do you migrate my existing content?', a: "Yes. We bring over and sharpen the content you already have, hold onto the pages that are ranking, and run the technical migration so nothing that matters gets dropped in the move." },
      { q: 'Will the redesign help me compete during hail season?', a: "That is a core focus in Des Moines. We rebuild mobile-first and fast so storm-season searchers on their phones can reach you in seconds, and we add suburb-specific pages so you rank for 'roofer Ankeny' and 'storm damage Waukee' alongside the generic metro terms." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings, especially when mobile search spikes during a weather event." },
      { q: 'Do I own the redesigned site?', a: "Completely: the site, the domain, and the content. No platform lock-in and no hostage situations." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO after that is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and an SEO-safe migration plan. It is a Des Moines Website Redesign that converts more without losing your rankings, rebuilt mobile-first for the searches that book jobs. No pressure, just a diagnosis." },
    ],
  },
];

export const desMoinesCity = {
  citySlug: 'des-moines', city: 'Des Moines', state: 'Iowa', stateAbbr: 'IA', metro: 'Des Moines',

  titleTag: 'Des Moines Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Des Moines marketing for contractors: web design, SEO, and local SEO. Get found before hail season, get booked, and own your leads, built for a storm-driven market.',

  eyebrow: 'Des Moines, IA · Web Design, SEO & Lead Generation',
  h1: 'Des Moines marketing for contractors who want to own their leads, not rent them',
  h2Exact: 'Des Moines Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Des Moines's storm-driven, fast-growing market. One team to get you ranking before hail season, converting all year, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Suburb-by-suburb targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Des Moines audit',

  intro:
    "Des Moines marketing for contractors has to account for two engines most agencies never do: a finance and insurance economy full of buyers who research before they call, and weather that decides who books the season. When hail crosses the metro, a hundred homeowners in Ankeny and Beaverdale and Waukee hunt for a roofer on their phone, and they call one of the first three names they see. The contractor already ranking wins the season. The one on page two waits for scraps. Winning here takes three things working together: a fast, mobile-first site that converts, SEO that ranks you for the searches that matter, and local SEO that puts you in the Map Pack for the suburbs you serve, all before the season hits rather than during it. Here is how we help Des Moines contractors do exactly that.",
  aioQuestion: 'How do Des Moines contractors get more leads online?',
  aioAnswer:
    "Des Moines contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent seasonal searches and local SEO that wins the Google Map Pack suburb by suburb. In a storm-driven market where roofing and restoration demand can jump overnight, the contractors already ranking when the storm hits catch the wave. The ones who wait until demand spikes are already too late.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack before the storm',
      blurb: "Get into the top three businesses Google pins to the map when Des Moines searches 'near me.' We put you there before hail season, suburb by suburb and service by service, so the storm calls land with you.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, own your leads',
      blurb: "Rank for the money keywords Des Moines homeowners search, including the seasonal storm and heating terms that decide the busiest months, and build an asset you own instead of renting traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert storm searches',
      blurb: "Fast, mobile-first websites that turn Des Moines visitors into booked jobs, built for the homeowner searching on a phone right after a hailstorm, not brochures that sit there while the season passes.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for mobile speed and conversions, and migrate it so carefully that you keep every ranking you have already earned heading into the next hail season.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Des Moines?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads, and so they are in position before hail season or Iowa winter rather than scrambling to catch up after." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, restoration, HVAC, plumbing, solar, electrical, and general contractors. We understand storm-damage claims, insurance-driven work, freeze-thaw heating emergencies, and the seasonal rhythm of the Des Moines market." },
    { q: 'Why does the Des Moines market need a different approach?', a: "It is a storm-driven, insurance-savvy market where demand can jump overnight. Spring hail and wind send a wave of homeowners searching at once, and the contractors already ranking catch it all. Winning here means being in position before the season, suburb by suburb and service by service, not reacting after the storm." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds running $2,000 to $9,000. SEO and local SEO run month-to-month from $750 to $3,000, with no long contract. The free audit nails down the exact scope for your Des Moines business." },
    { q: 'Which Des Moines areas do you serve?', a: "The full metro: Des Moines proper plus Ankeny, Waukee, West Des Moines, Urbandale, Johnston, Altoona, Norwalk, Clive, and the neighborhoods inside them, from East Village to Beaverdale to Sherman Hill. We build real suburb pages rather than one generic Des Moines page." },
    { q: 'Where should I start?', a: "Start with a free Des Moines audit. We look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that bring in the most work before the next demand window. It is Des Moines marketing for contractors built to get you found and booked, with leads that belong to you. No pitch deck, just a plan." },
  ],
};
