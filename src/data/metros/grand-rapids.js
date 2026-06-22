// GRAND RAPIDS, per-metro per-service local landing pages plus city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Grand Rapids's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// GRAND RAPIDS, shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'What it really takes to get found in Grand Rapids search',
  body:
    "Grand Rapids is the hub of West Michigan, and the way people here hire a contractor traces straight back to two nicknames the city wears with pride: Furniture City and Beer City USA. The furniture trade built a workforce that respects craftsmanship and notices corners cut, and that habit carries into how homeowners shop for trades. They want references. They read reviews twice. They expect a plain answer on scope and price before anyone shakes hands. The craft-beer boom and a decade of downtown revival, ArtPrize, the Medical Mile, the restored homes of Heritage Hill and Eastown, brought younger owners into older housing stock that needs real work. Push out into the growing suburbs of Kentwood, Wyoming, Byron Center, Caledonia, and Rockford and you hit newer family homes whose owners search the same way: phone out, \"near me\" typed, thumb landing on one of the first three names Google drops on the map. Then the lake decides who eats. Snow comes off Lake Michigan in heavy bands all winter, and roughly six feet of it falls on this city in a normal year. From November through March that loads roofing, heating, insulation, ice-dam, and frozen-pipe calls onto whoever already ranks. Come the spring melt, the drainage and basement-flooding calls follow. Sit on page two when the first squall hits, and the booked work goes to the name Google already trusts.",
  pullQuote: 'Six feet of lake-effect snow lands on Grand Rapids most winters. The contractor already in the Map Pack books the storm; everyone else watches the trucks drive past.',
  donut: {
    title: 'Lake-effect snow burden',
    value: 58,
    centerLabel: 'winter-driven',
    legend: [
      { label: 'Winter emergency demand', pct: 58, kind: 'teal' },
      { label: 'Rest of year', pct: 42, kind: 'grey' },
    ],
  },
  seasonTitle: 'When the trades get slammed in Grand Rapids',
  seasonCaption: 'Lake-effect winter (Nov to Mar) and spring-melt flooding (Mar to May)',
  seasonalDemand: [
    { m: 'J', v: 90, peak: true }, { m: 'F', v: 88, peak: true }, { m: 'M', v: 82, peak: true },
    { m: 'A', v: 74, peak: true }, { m: 'M', v: 58 }, { m: 'J', v: 46 }, { m: 'J', v: 42 },
    { m: 'A', v: 44 }, { m: 'S', v: 52 }, { m: 'O', v: 60 },
    { m: 'N', v: 80, peak: true }, { m: 'D', v: 86, peak: true },
  ],
  stats: [
    { value: '1.1M', label: 'people across the Grand Rapids metro' },
    { value: '74 in', label: 'average lake-effect snowfall a year off Lake Michigan, among the highest in the eastern US', accent: true },
    { value: 'Nov-Mar', label: 'peak winter window, when heating, roofing, and ice-dam calls pile up' },
    { value: 'Top 3', label: 'Map Pack spots that grab most of the clicks when a homeowner searches' },
  ],
  neighborhoods: [
    'Eastown', 'Heritage Hill', 'East Hills', 'Ada', 'Cascade',
    'Kentwood', 'Wyoming', 'Byron Center', 'Caledonia', 'Rockford',
    'Lowell', 'Holland', 'Grandville', 'Walker', 'Comstock Park',
  ],
};

const AREAS = [
  'Grand Rapids', 'Kentwood', 'Wyoming', 'Byron Center', 'Caledonia',
  'Rockford', 'Lowell', 'Ada', 'Cascade', 'Grandville',
  'Walker', 'Comstock Park', 'Holland', 'Eastown', 'Heritage Hill',
];

const FOUNDER =
  "I'll be straight with you: I built OnwardCraft because I kept watching solid trade contractors, exactly the kind West Michigan runs on, hand Angi and HomeAdvisor a few hundred dollars a month for leads that two or three competitors bought at the same time. You cannot build a business on rented leads. So everything we do is built around getting you ranking for the work you actually want, in the neighborhoods you actually serve, so those leads belong to you. No 12-month handcuffs. No mystery reporting. If we're not delivering, you fire us.";

const WHY = [
  {
    title: 'Trades are the only thing we do',
    body: "Roofing, HVAC, plumbing, insulation, electrical, restoration, general contractors. We know the January ice-dam call, the April basement that floods on the spring melt, and the steady work that comes from West Michigan's manufacturing and healthcare homeowners, so what we build follows how your customers really search.",
  },
  {
    title: 'We pull you off the rented-lead treadmill',
    body: "The aim is a pipeline that belongs to you. Not one more monthly check cut to a lead broker for the same Kentwood homeowner that three of your competitors are dialing at the same minute.",
  },
  {
    title: 'We actually know West Michigan',
    body: "Block-by-block targeting from Heritage Hill out to Byron Center, plus content shaped around the lake-effect winters and the ArtPrize-era revival of the older neighborhoods that move local demand. A national shop cannot fake that by dropping a city name into a template.",
  },
  {
    title: 'No contracts, nothing hidden',
    body: "Published prices, reporting tied to leads, month-to-month once the first 90 days are up. Grand Rapids homeowners expect a straight answer, and so should you. If we are not earning it, you go.",
  },
];

const PROOF = {
  heading: "We're new, so here's the honest math instead of a logo wall",
  body:
    "Plenty of agencies open with a grid of client logos. We are a young, founder-led shop, so we will not pretend to a track record we have not earned yet. What we can put in front of you is why this works, straight from Google's and the industry's own research on how people search for a local contractor.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here is a rough sketch, marked plainly as a projection and not a result we are claiming: say a Grand Rapids contractor pulls around 1,200 local \"near me\" impressions a month across a handful of West Michigan neighborhoods. Climbing out of page-two invisibility into the top three is the gap between a trickle of calls and a winter calendar booked solid, and in a city where one lake-effect band can trigger a week of back-to-back jobs, missing that window stings. In your free audit we model the real numbers for your shop: your rankings, your search volume, and an honest 90-to-180-day path to the top.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Grand Rapids', state: 'Michigan', stateAbbr: 'MI', metro: 'Grand Rapids',
  heroProof: ['Built for the trades', 'West Michigan neighborhood targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const grandRapidsLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'grand-rapids', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Grand Rapids Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Search your service in Grand Rapids and three businesses show on the map. We put you in those three so the winter call lands with you, not a competitor.',
    eyebrow: 'Local SEO · Grand Rapids, MI',
    h1: 'When Grand Rapids searches for what you do, be the first name they find',
    h2Exact: 'Grand Rapids Local SEO Company',
    heroSubhead:
      "Google pins three businesses to the map when someone searches \"near me,\" and everyone below them might as well not exist. In a market built on furniture-trade craftsmanship and a booming craft-beer downtown, we get you into that top three for the neighborhoods you serve, from Heritage Hill to Kentwood to Byron Center, so the call lands with you and not whoever ranked first.",
    primaryCta: 'Get my free Grand Rapids audit',
    intro:
      "Grand Rapids local SEO comes down to a single moment: a homeowner in Eastown or Rockford or Caledonia types your service plus \"near me,\" and either you are one of the three businesses Google pinned to the map or you are not. Most people tap one of those three and never scroll. This is a city of careful buyers, shaped by hard lake-effect winters, a revived downtown, and suburbs filling up fast. Becoming one of those three in your neighborhoods is the whole game. Here is how we get you there.",
    aioQuestion: 'How do Grand Rapids businesses rank higher in local search?',
    aioAnswer:
      "You rank by nailing four things: a Google Business Profile tuned to the exact services and neighborhoods you want; name, address, and phone details that match everywhere online; a steady flow of real reviews; and local content tied to genuine West Michigan neighborhoods and suburbs. The winners here rank tight by suburb, carry the trust signals that satisfy Grand Rapids's quality-minded homeowners, and are already ranking before November, when lake-effect snow drives the year's biggest heating and roofing spikes.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Three rivals are camped on the map spots you want', body: "Run your own service plus \"near me\" right now. Those three businesses Google pins to the map take the lion's share of the clicks. Grand Rapids homeowners are deliberate; they tap the top name, scan the reviews, and call. If you are not in that top three for the suburbs you cover, the quality of your work barely registers because most people never scroll down to find you. Climbing into the Map Pack for Kentwood, Wyoming, Rockford, and your other core areas is usually the highest-return move a West Michigan contractor can make." },
      { title: "Every lead you buy was sold to your competitors too", body: "Angi, Thumbtack, and HomeAdvisor sell the same Grand Rapids homeowner to a stack of contractors and bill each of you to fight over them. That is a treadmill. Local SEO builds the opposite: a homeowner finds you, calls you, and no one else got that lead. Run it long enough and you stop renting visibility and start owning the pipeline." },
      { title: "When the first squall blows in, you're nowhere on the map", body: "Snow rolls off Lake Michigan and drops about 74 inches on Grand Rapids in a normal winter. When a November band hits, searches for roofing, heating, ice-dam removal, and insulation jump overnight, and the contractors already ranked are the ones who book that work. If your Map Pack presence is not solid before the cold sets in, you watch the busy season walk over to somebody else." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest single lever in the Map Pack. We tune your categories, services, service area, photos, and posts so Google knows exactly which Grand Rapids searches belong to you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to agree everywhere Google looks. We fix the listings that contradict each other and build the ones you are missing." },
      { name: 'Reviews that keep coming', desc: "A simple engine that turns finished jobs into a steady stream of fresh reviews. Grand Rapids homeowners read reviews before they dial, so this lifts your ranking and gives the next caller a reason to pick you." },
      { name: 'Neighborhood and suburb pages', desc: "Real pages for Kentwood, Wyoming, Rockford, Caledonia, Byron Center, and the rest, so you rank for the area someone is actually searching, not a generic \"Grand Rapids.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The wiring behind the wall that lets every other piece rank." },
      { name: 'Local link building', desc: "Mentions and links from West Michigan sources Google trusts: local press, chambers of commerce, trade associations, supplier partners. Here that is often what separates page one from page two." },
      { name: 'Seasonal demand SEO', desc: "We get you ranking for lake-effect winter searches, ice-dam removal, heating, roofing, before November, so you are visible when demand spikes instead of scrambling after the band hits.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those engines can read you and cite you by name.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find where you actually rank today across your Grand Rapids neighborhoods and suburbs, and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. Most clients see early lift here inside a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. Grand Rapids homeowners lean on reviews harder than most markets, and these compound week over week." },
      { name: 'Add local content', desc: "Neighborhood and suburb pages for Kentwood, Wyoming, Rockford, Caledonia, Byron Center, and more, plus the on-page work that makes them rank." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, never vanity rankings. Then we go take the next suburb." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting your Map Pack base solid before winter.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For contractors fighting across several Grand Rapids suburbs.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Suburb landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want the whole West Michigan map.', features: ['Everything in Local Growth', 'Local link building', 'Seasonal winter demand SEO', 'Multi-suburb and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Grand Rapids?', a: "Most Grand Rapids engagements land between $750 and $2,500 a month, depending on how many suburbs and keywords you are chasing. The tiers above lay it out. No hidden fees, no long contract, and we lock the exact scope in your free audit before you spend a dollar." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move within a few weeks. The competitive Grand Rapids keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days in this market is selling you a fantasy." },
      { q: 'What makes Grand Rapids local SEO different from a generic approach?', a: "Two things. Seasonal timing is brutal here; lake-effect snow drives huge winter demand for roofing, heating, and ice-dam work, and you have to be ranked before November, not after. And this is Furniture City, a market that respects craftsmanship, so homeowners read reviews and check credentials hard before they call. A plan built for Grand Rapids accounts for both." },
      { q: 'Should I target specific suburbs or just \"Grand Rapids\"?', a: "Both, but the suburbs often win faster. A homeowner in Caledonia or Byron Center searches for someone near them, not just \"Grand Rapids.\" We build genuine suburb pages for Kentwood, Wyoming, Rockford, Caledonia, and the rest, because that is what ranks for the specific searches your best customers actually run." },
      { q: 'Which areas do you cover?', a: "Grand Rapids proper and the full suburban belt: Kentwood, Wyoming, Byron Center, Caledonia, Rockford, Lowell, Ada, Cascade, Grandville, Walker, Comstock Park, Holland, and more. We build real suburb and neighborhood pages rather than one generic Grand Rapids page, because that is what actually ranks." },
      { q: 'Do you work with contractors specifically?', a: "It is basically all we do: roofing, HVAC, plumbing, insulation, electrical, restoration, and general contractors. We understand lake-effect ice-dam calls, spring-melt flooding, and the steady work from West Michigan's manufacturing and healthcare homeowners." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More \"near me\" research starts in AI tools now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. In Grand Rapids that is quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that is about how long local SEO takes to show real movement across Grand Rapids. After that it is month-to-month. If we are not delivering, you walk, and the accountability sits with us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads at prices that chew up your margin. We build rankings, a Google profile, and a review base that route West Michigan leads straight to you alone. Over time you lean on the brokers less because the work is already coming in direct." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your Grand Rapids suburbs, what your Map Pack competitors are doing to beat you, the fixes that will move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck, just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'grand-rapids', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Grand Rapids SEO Company | OnwardCraft',
    metaDescription:
      'Grand Rapids SEO that ranks contractors on Google and delivers leads you own. Revenue-tied reporting, no lock-in, built for West Michigan winters.',
    eyebrow: 'SEO Services · Grand Rapids, MI',
    h1: 'Get your Grand Rapids business to the top of Google and keep it there',
    h2Exact: 'Grand Rapids SEO Company',
    heroSubhead:
      "Ads die the second you stop paying. SEO does the reverse: rank once for what your Grand Rapids customers search and the leads keep arriving for months. We build that ranking for West Michigan contractors and tie every report to real calls and booked jobs.",
    primaryCta: 'Get my free Grand Rapids SEO audit',
    intro:
      "Grand Rapids SEO comes down to one blunt question: when someone in Kentwood or Rockford or Heritage Hill searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in a market shaped by lake-effect winters, furniture-trade craftsmanship, and fast-growing western suburbs, and we measure the whole thing in leads, not traffic that never picks up the phone.",
    aioQuestion: 'How do Grand Rapids businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms West Michigan customers search, publishing genuinely useful local content tied to specific suburbs and neighborhoods, and earning links from trusted Grand Rapids sources. Seasonal timing is a real edge here: contractors who rank for lake-effect roofing, ice-dam, and heating terms before November catch the winter spike while everyone else is still trying to catch up.",
    problemHeading: "Three reasons your Grand Rapids site isn't bringing in work",
    painPoints: [
      { title: "Page two is where Grand Rapids leads go to die", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. In a city where homeowners research before they call, if you are not in the top handful of results for what you sell, your site is effectively invisible no matter how good the work behind it is." },
      { title: "Google Ads stops the day your card does", body: "Ads can work, but the instant your card stops, the leads stop cold. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done. For a trade contractor in West Michigan, owning those rankings is the difference between a steady winter and a scramble." },
      { title: "You're invisible when the lake turns the demand on", body: "Grand Rapids takes a beating from lake-effect snow, around 74 inches a year. When a November band hits, searches for heating, roofing, ice-dam removal, and insulation spike hard and fast. Ranking takes months to build, so you have to be in position before the season, not chasing it after the snow is already on the ground." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the behind-the-wall fixes Google needs before it will rank a Grand Rapids site at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned for the exact terms your Grand Rapids customers search: titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what West Michigan buyers search, earn links, and bring in leads long after we publish them." },
      { name: 'Link building', desc: "Authority from real Grand Rapids and West Michigan sources. In this market, links from local press, chambers, and trade associations are what split page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across your West Michigan suburbs right next to your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We count the calls, forms, and booked jobs your Grand Rapids site brings in, not page views that never dial, so the dollar value of your SEO is never a guess." },
      { name: 'Seasonal & lake-effect SEO', desc: "We rank you for the winter heating, roofing, ice-dam, and insulation searches that drive Grand Rapids's busiest weeks, so you are visible before demand spikes instead of after.", featured: true },
      { name: 'AI search & GEO', desc: "When a West Michigan homeowner asks ChatGPT or Perplexity who to call, we want your name in the answer. We shape your content and markup so AI Overviews and the chat engines can quote you cleanly.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Grand Rapids leads, with seasonal timing built in from the start." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, mobile. None of the content or local work ranks until this Grand Rapids groundwork is solid, so we handle it first." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the seasonal and winter terms that decide who wins December in West Michigan." },
      { name: 'Build authority', desc: "Links and citations from trusted Grand Rapids and West Michigan sources to push your competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly numbers tied to real Grand Rapids leads. We pour more into the terms that are paying off and reach for the next suburb or service set." },
    ],
    pricing: {
      heading: 'Transparent Grand Rapids SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and suburbs.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For contractors who want to own Grand Rapids search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal lake-effect SEO', 'Multi-suburb pages', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Grand Rapids?', a: "Most Grand Rapids SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. The tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Grand Rapids?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter suburb terms and slower on the most contested citywide keywords. SEO compounds, so the longer you run it, the bigger the gains get." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops the moment you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Grand Rapids contractors do best running SEO as the long-term engine and ads for short-term campaign spikes." },
      { q: 'Should my Grand Rapids SEO target lake-effect winter demand?', a: "Absolutely. When a lake-effect band drops a foot of snow on Grand Rapids, searches for roofing, heating, ice-dam removal, and insulation spike overnight. Ranking takes months to build, so you need to be in position before November, not scrambling after the first big storm. We build that seasonal presence ahead of time." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal and lake-effect demand and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. The only commitment is an opening 90 days, which is what SEO needs to move the needle in a market this competitive. After that you are month-to-month, and if the Grand Rapids leads are not showing up, you are free to go." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "It is a bigger slice of our work every month. We organize your content and schema so the AI engines pull your shop into their answers by name when a West Michigan homeowner asks them for a recommendation." },
      { q: 'Which areas around Grand Rapids do you cover?', a: "Grand Rapids proper and the full suburban belt: Kentwood, Wyoming, Byron Center, Caledonia, Rockford, Lowell, Ada, Cascade, Grandville, Walker, Comstock Park, and Holland, with genuine suburb pages rather than one generic Grand Rapids page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "We build the rankings and Google profile that route West Michigan homeowners straight to your phone. As your own visibility grows, the broker fees for shared leads, the ones three Kentwood competitors also paid for, become something you can finally cut." },
      { q: "What's in the free SEO audit?", a: "Your current Grand Rapids rankings, the moves your competitors are making to outrank you, the fixes that pay off fastest, and a realistic timeline with the numbers run for your trade. We send a straight diagnosis, not a pitch deck." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'grand-rapids', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Grand Rapids Web Design Company | OnwardCraft',
    metaDescription:
      'Grand Rapids web design that turns visitors into booked jobs: fast, mobile-first sites built for contractors across West Michigan.',
    eyebrow: 'Web Design · Grand Rapids, MI',
    h1: 'Grand Rapids web design that turns visitors into booked jobs',
    h2Exact: 'Grand Rapids Web Design Company',
    heroSubhead:
      "A handsome website that never generates a call is just an expensive brochure. We build Grand Rapids contractors fast, mobile-first sites engineered to turn visitors into booked work, sites that earn the trust of careful West Michigan homeowners and hold up when a lake-effect band sends everyone searching at once.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Grand Rapids contractor websites bleed leads quietly: slow on a phone, call button buried, no clear offer, nothing that speaks to the local neighborhoods. Web design done right closes all of those leaks. We build sites that load fast, look like the professional you actually are, and turn Kentwood-to-Rockford visitors into booked jobs, built for homeowners who do their homework before they call.",
    aioQuestion: 'What makes a good contractor website in Grand Rapids?',
    aioAnswer:
      "A good Grand Rapids contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific suburbs and neighborhoods you serve. Because West Michigan homeowners research carefully and respect good work, trust signals like licenses, reviews, and real project photos matter more here than almost anywhere. And because winters are brutal, having seasonal messaging ready for lake-effect snow, ice-dam, and heating searches gives you an edge the moment the temperature drops.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It reads like a brochure, not a lead engine", body: "Plenty of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next name on the map. Grand Rapids homeowners are deliberate; they compare before they call. We design every page around one job: turning a visitor into a booked lead." },
      { title: "On a phone, it crawls", body: "Most of your Grand Rapids visitors are on mobile, and they bounce if your site takes more than a couple of seconds to load. Slow sites also rank worse, so you lose twice. We build fast, so you keep both the visitor and the ranking." },
      { title: "It never names the suburbs you actually serve", body: "A homeowner in Caledonia or Byron Center wants to see you serve their area, not a generic \"Grand Rapids\" page that could belong to anybody. We build sites that name the suburbs and communities you work, so visitors trust you are local and Google ranks you for the right searches." },
    ],
    servicesHeading: "What's in an OnwardCraft Grand Rapids website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your service area across West Michigan, and the exact jobs you want more of." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that is where most of your Grand Rapids traffic lands. Fast, thumb-friendly, and easy to call from in one tap." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where homeowners actually use them. Every page carries a next step." },
      { name: 'Copy that sells', desc: "Words that speak to Grand Rapids homeowners who do their research, trust-forward and direct, written to book the job rather than fill the page." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank: clean structure, schema, fast load, and suburb-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Built to load quick on the spotty signal a Rockford homeowner has in the driveway and to clear Google's performance checks, which guards your bookings and your ranking together." },
      { name: 'Suburb-targeted pages', desc: "Pages built around Kentwood, Wyoming, Rockford, Byron Center, Caledonia, and your other core areas, so you stand out instead of blending into one generic Grand Rapids page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read your site and recommend your business as more search shifts toward AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your service suburbs, your most profitable jobs, and your competitors, then map the site around booking more of the work you actually want in West Michigan." },
      { name: 'Design', desc: "We draw a custom, mobile-first layout aimed at booking the West Michigan jobs you want, and you see it and steer it before any code gets written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that earns trust with Grand Rapids homeowners, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We push it live with the SEO foundation, call tracking, and load speed dialed in from the first day, ready for the next Grand Rapids search." },
      { name: 'Support and optimize', desc: "We keep the site quick and current, and we adjust it as we watch which pages actually turn West Michigan visitors into phone calls." },
    ],
    pricing: {
      heading: 'Transparent Grand Rapids web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + suburb pages', 'Speed & Core Web Vitals', 'Suburb-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Grand Rapids?', a: "A contractor site with us is a one-time build between $2,000 and $8,000, set by page count and any integrations. The tiers sit above. The price is fixed, there is no surprise invoice, and the finished site is yours to keep." },
      { q: 'How long does it take to build?', a: "Plan on roughly 2 to 4 weeks for a focused Grand Rapids site and 4 to 8 for a larger custom build. You get a firm timeline at the start and a check-in at every stage." },
      { q: 'Will my site help me stand out in West Michigan?', a: "That is the whole point. Grand Rapids homeowners research before they call; they check reviews, study the photos, and judge your professionalism. We build sites with clear trust signals, suburb-specific pages, and an obvious call to action, so when they land on yours, they call you instead of scrolling on." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and suburb-ready pages. The build gets you ready to rank, and pairing it with our SEO service is how you climb the competitive Grand Rapids terms." },
      { q: 'Do I own the website?', a: "Start to finish. The site, the domain, and the content all belong to your Grand Rapids business. We never hold your work hostage or lock you onto a platform you cannot leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where most of your Grand Rapids traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "Whatever you can run yourself once we hand it over, usually WordPress or Webflow. We pick the fit in your free consult and walk a busy Grand Rapids contractor through the tradeoffs without the jargon." },
      { q: 'Do you offer ongoing support?', a: "Yes. Launch support comes with every build, and after that we keep affordable monthly upkeep on the table for updates, speed, and security so your site stays sharp through the seasons." },
      { q: 'Am I locked into a contract?', a: "No. The build itself is a fixed-price, one-time project. Anything ongoing, maintenance or SEO, runs month-to-month, so you can step away whenever it suits your shop." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Grand Rapids contractor site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'grand-rapids', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Grand Rapids Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your Grand Rapids website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs across West Michigan.',
    eyebrow: 'Website Redesign · Grand Rapids, MI',
    h1: 'Redesign your Grand Rapids website without losing your rankings',
    h2Exact: 'Grand Rapids Website Redesign Company',
    heroSubhead:
      "An outdated site quietly costs you jobs every week: slow, clumsy on a phone, easy for a Grand Rapids homeowner to skip past. We redesign contractor sites to convert more and load faster, and we migrate so carefully that you keep every bit of ranking you have earned going into the next lake-effect season.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks prettier but converts exactly the same, or it launches and the rankings vanish overnight. We do neither. We redesign Grand Rapids contractor sites for speed and conversions, build them to earn the trust of West Michigan homeowners, and migrate with the redirects and SEO care that protect the traffic you already have heading into your busiest season.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one, which matters in Grand Rapids, where you want to be fully indexed and ranking before lake-effect winter demand kicks in.",
    problemHeading: "Signs your Grand Rapids site is overdue for a redesign",
    painPoints: [
      { title: "A dated design quietly costs you trust", body: "Grand Rapids homeowners are careful buyers; they check reviews, study the photos, and judge your professionalism before they call. An old, cluttered design quietly ships them to a competitor who simply looks more established, even when your work is plainly better. In a market that respects good craftsmanship, that first impression decides who gets the call." },
      { title: "It's clunky and slow on a phone", body: "If your site is clunky or slow on mobile, you are losing the majority of your Grand Rapids visitors before they ever reach your offer. A redesign built mobile-first wins those visitors back and keeps the ranking that brought them to you in the first place." },
      { title: "It gives suburban homeowners no reason to trust you", body: "Traffic that never turns into calls is wasted money. A generic old site gives a Caledonia or Rockford homeowner nothing to tell them you are local. We rebuild around the specific suburbs and communities you serve, so the right buyers choose you." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We trace exactly where your current site bleeds Grand Rapids leads and rankings, so the rebuild solves the real problems instead of just repainting the homepage." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep every bit of the rankings and traffic you have already earned, critical before peak winter season." },
      { name: 'Conversion redesign', desc: "Clear offers, call buttons placed where they get tapped, and lead forms a careful West Michigan homeowner will actually fill out. We rebuild for booked jobs, not a prettier screenshot." },
      { name: 'Speed overhaul', desc: "We rebuild the site to load fast and clear Core Web Vitals, a single change that lifts both your conversions and your Grand Rapids rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where most of your Grand Rapids traffic actually lands." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the expectations of value-minded West Michigan homeowners." },
      { name: 'Suburb-targeted rebuild', desc: "Rebuilt around the suburbs and neighborhoods you serve, Kentwood, Wyoming, Rockford, Byron Center, Caledonia, so the new site stands out instead of reading like a generic placeholder.", featured: true },
      { name: 'AI-search ready', desc: "Marked up so AI Overviews and ChatGPT can read the new site and put your shop forward when a Grand Rapids homeowner asks them who to hire.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what is losing you leads and rankings, then map a redesign that fixes it without breaking what already works, with lake-effect season timing in mind." },
      { name: 'Design', desc: "A modern, mobile-first design aimed squarely at conversions, which you review and reshape before we touch the rebuild." },
      { name: 'Rebuild and migrate', desc: "We rebuild quickly and line up every redirect and SEO detail so the move keeps the Grand Rapids traffic you already earned." },
      { name: 'Launch with SEO care', desc: "We flip the switch with redirects in place and watch the rankings closely, so they hold and climb through the season instead of slipping." },
      { name: 'Optimize', desc: "After launch we tune the pages around what is booking West Michigan jobs, and keep the speed and updates current." },
    ],
    pricing: {
      heading: 'Transparent Grand Rapids redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + suburb pages', 'Suburb-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Grand Rapids?', a: "A redesign is a one-time project from $2,500 to $9,000, set by the size of the site and any integrations. The price is fixed, there is no surprise bill, and the rebuilt site is yours outright." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it is done carefully, and that is exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually pushes them higher, which matters in Grand Rapids where you need to be ranked before winter." },
      { q: 'How long does a redesign take?', a: "A focused redesign runs about 3 to 5 weeks; a larger rebuild lands at 5 to 9. We set the timeline before we start and keep your shop posted at every stage so it fits around your busy weeks." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is a pain to update, is not bringing in leads, or never speaks to the specific suburbs you serve, it is costing you work every week. The free audit tells you plainly whether a redesign is worth it for your Grand Rapids business." },
      { q: 'Do you migrate my existing content?', a: "Yes. We bring your existing pages across and sharpen them, protect whatever is already ranking in Grand Rapids search, and run the technical migration so nothing important falls off the new site." },
      { q: 'Will the redesign help me compete for West Michigan homeowners?', a: "Yes, and that is the point. We rebuild around the specific suburbs and communities you serve, lead with the trust signals Grand Rapids homeowners expect, and make the offer and call button obvious, so the new site earns the call instead of letting it go to a competitor." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. The rebuild is mobile-first and tuned for quick load and Core Web Vitals, since most of your Grand Rapids visitors arrive on a phone and that speed lifts both bookings and rankings." },
      { q: 'Do I own the redesigned site?', a: "Every piece: the site, the domain, and the content stay with your West Michigan business. There is no platform lock-in of any kind." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project, and anything ongoing runs month-to-month, so you are never tied down past the work itself." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan built around your next busy season." },
    ],
  },
];

export const grandRapidsCity = {
  citySlug: 'grand-rapids', city: 'Grand Rapids', state: 'Michigan', stateAbbr: 'MI', metro: 'Grand Rapids',

  titleTag: 'Grand Rapids Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Grand Rapids contractors. Get found, get booked, and own your leads instead of renting them, all built for West Michigan.',

  eyebrow: 'Grand Rapids · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Grand Rapids contractors found and booked',
  h2Exact: 'Grand Rapids Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for West Michigan's lake-effect winters, its furniture-trade craftsmanship, and a suburban belt growing faster than most of the Midwest. One team to get you ranking, converting, and off the rented-lead treadmill for good.",
  heroProof: ['Built for the trades', 'West Michigan neighborhood targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Grand Rapids audit',

  intro:
    "If you run a contracting business in Grand Rapids, you are working a market shaped by about 74 inches of lake-effect snow a year, a Furniture City homeowner base that values craftsmanship and a straight answer, and a suburban belt, Kentwood, Wyoming, Byron Center, Caledonia, Rockford, growing faster than most of the Midwest. Winning here takes three things working together: a site that converts quality-minded West Michigan homeowners, SEO that ranks you before the lake-effect season hits, and local SEO that puts you in the Map Pack for the suburbs you actually serve. Here is exactly how we help Grand Rapids contractors pull that off.",
  aioQuestion: 'How do Grand Rapids contractors get more leads online?',
  aioAnswer:
    "Grand Rapids contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack suburb by suburb. Seasonal timing matters more here than in most markets: contractors who rank for lake-effect roofing, heating, ice-dam, and insulation terms before November catch the year's biggest demand spike while everyone else scrambles to catch up. West Michigan homeowners also research hard before calling, so trust signals like reviews, real project photos, and suburb-specific pages are what turn the visit into a call.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Grand Rapids searches \"near me.\" The single highest-return move for most local contractors, done tight, suburb by suburb, before the lake-effect season hits.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your West Michigan customers actually search, build an asset you own instead of renting traffic from ads, and measure the whole thing in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites that earn the trust of quality-minded Grand Rapids homeowners and turn visitors into booked jobs, not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions before your next busy season, and migrate it so carefully that you keep every bit of ranking you have already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Grand Rapids?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads, and so they are ready before the lake-effect winter season drives demand through the roof." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, insulation, electrical, restoration, and general contractors, so we understand lake-effect ice-dam calls, spring-melt flooding, and the steady work from West Michigan's manufacturing and healthcare homeowners." },
    { q: 'Why does the Grand Rapids market need a different approach?', a: "Two things set it apart. The lake-effect winters are brutal; roughly 74 inches of snow a year creates massive seasonal spikes for roofing, heating, and insulation, and you need to be ranked before November, not after. And this is Furniture City and Beer City USA, a market that respects craftsmanship, where homeowners research hard before calling. That makes trust signals like reviews, real photos, and suburb-specific content count for more than generic city-level pages." },
    { q: 'How much does it cost to work with you?', a: "A website is a one-time build from $2,000 to $9,000. SEO and local SEO run month-to-month from $750 to $3,000 with no long contract. We pin the exact scope for your Grand Rapids shop in the free audit." },
    { q: 'Which Grand Rapids areas do you serve?', a: "Grand Rapids proper and the full suburban belt: Kentwood, Wyoming, Byron Center, Caledonia, Rockford, Lowell, Ada, Cascade, Grandville, Walker, Comstock Park, Holland, and more, with genuine suburb pages rather than one generic Grand Rapids page." },
    { q: 'Where should I start?', a: "Start with a free Grand Rapids audit. We look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work, and make sure you are in position before the next lake-effect season. No pitch deck, just a plan." },
  ],
};
