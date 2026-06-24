// LONG BEACH: per-metro, per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Long Beach's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// LONG BEACH: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'What you are actually fighting for in Long Beach search',
  body:
    "Long Beach is its own animal, and pretending it searches like the rest of LA County is how contractors waste a budget. Roughly 460,000 people live between the busiest container port in the Western Hemisphere and the open Pacific, and the mix is unlike anywhere else: about 43% Hispanic, the largest Cambodian community in the country, and sizable Black and Filipino populations. That changes the math on a contractor search. A big slice of those searches run in Spanish, and nearly all of them happen on a phone with \"near me\" tacked on. The housing tells the same story. Spanish Revival, Craftsman, and Art Deco homes from the 1920s line Bluff Heights, Belmont Heights, Rose Park, and California Heights, and the people restoring them want a specialist, not a generalist who works the whole basin. Then the coast bites. Salt air corrodes fixtures and shortens every maintenance window, king tides push water into Naples and the Peninsula, and a city that rewrote earthquake code after 1933 still buys retrofit work. The contractors who already rank, and who answer in the language the caller is actually using, are the ones who book the job.",
  pullQuote: 'Salt air does not wait for a slow season in Long Beach. The contractor already on the map is the one a homeowner calls when the corrosion shows up.',
  donut: {
    title: 'Who Long Beach is',
    value: 43,
    centerLabel: 'Hispanic',
    legend: [
      { label: 'Hispanic', pct: 43, kind: 'teal' },
      { label: 'Other', pct: 57, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'HVAC heat waves (Jun–Sep); king-tide flooding (Nov–Jan)',
  seasonalDemand: [
    { m: 'J', v: 42 }, { m: 'F', v: 40 }, { m: 'M', v: 44 }, { m: 'A', v: 50 },
    { m: 'M', v: 64, peak: true }, { m: 'J', v: 80, peak: true }, { m: 'J', v: 92, peak: true },
    { m: 'A', v: 96, peak: true }, { m: 'S', v: 84, peak: true }, { m: 'O', v: 58 },
    { m: 'N', v: 54 }, { m: 'D', v: 48 },
  ],
  stats: [
    { value: '460K+', label: 'people in the city of Long Beach' },
    { value: '~43%', label: 'Hispanic, with the largest Cambodian community in the US', accent: true },
    { value: 'Jun–Sep', label: 'heat waves drive HVAC and mini-split demand' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks' },
  ],
  neighborhoods: [
    'Belmont Shore', 'Naples', 'Bluff Heights', 'Belmont Heights', 'Rose Park',
    'California Heights', 'Bixby Knolls', 'Downtown', 'East Village', 'Lakewood',
    'Signal Hill', 'Seal Beach', 'Cambodia Town', 'The Peninsula', 'Alamitos Beach',
  ],
};

const AREAS = [
  'Long Beach', 'Signal Hill', 'Lakewood', 'Seal Beach', 'Los Alamitos',
  'Cypress', 'Cerritos', 'Bellflower', 'Paramount', 'Carson',
  'Wilmington', 'San Pedro', 'Huntington Beach', 'Westminster', 'Garden Grove',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We know how salt air eats fixtures, how a seismic retrofit gets quoted, and how an insurance claim plays out, so the work we build is shaped around how your buyers actually search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The goal is a pipeline that belongs to you. Not another monthly check written to a lead broker for a Belmont Shore homeowner three competitors are dialing at the same minute.",
  },
  {
    title: 'We actually speak Long Beach',
    body: "Coastal corrosion cycles, a bilingual port city where Spanish search is half the market, century-old homes from Bluff Heights to California Heights. That is ground knowledge a national shop cannot fake by dropping a city name into a template.",
  },
  {
    title: 'No contracts, no mystery',
    body: "Published prices, reporting tied to real leads, month-to-month once the first 90 days are up. If the invoice isn't paying for itself, you walk. That leaves the pressure right where it should sit: on us.",
  },
];

const PROOF = {
  heading: "We're new, so here's the honest math instead of a logo wall",
  body:
    "Plenty of agencies lead with a grid of client logos. We are a young, founder-led shop, so we will not dress up a track record we have not earned yet. What we can put in front of you is the reasoning, taken straight from Google's and the industry's own research on how people search for a local contractor.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here is a rough sketch, marked plainly as an illustration and not a result we claim: say a Long Beach contractor pulls around 1,500 local \"near me\" impressions a month. Climbing from page-two invisibility into the top three is the gap between a handful of stray calls and a calendar that stays full, and on a coast where salt-air upkeep never stops and summer heat waves stack on top, that gap holds open every month of the year. In your free audit we model the real numbers for your business: your current rankings, your actual search volume, and a straight 90-to-180-day path onto the map.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Long Beach', state: 'California', stateAbbr: 'CA', metro: 'Long Beach',
  heroProof: ['Built for the trades', 'Coastal & seismic ready', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const longBeachLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'long-beach', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Long Beach Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Long Beach Local SEO that turns "near me" searches into a ringing phone. We put you in the top three on the map, in English and in Spanish.',
    eyebrow: 'Local SEO · Long Beach',
    h1: 'Long Beach Local SEO that turns Belmont Shore "near me" searches into a ringing phone',
    h2Exact: 'Long Beach Local SEO Company',
    heroSubhead:
      "Google pins three businesses to the map when someone searches \"near me,\" and everyone below that line might as well not exist. We move you into that top three so the call lands with you instead of whoever ranked first, and so a bilingual, phone-first coastal market can actually find you.",
    primaryCta: 'Get my free Long Beach audit',
    intro:
      "Long Beach Local SEO turns on a single moment: a homeowner in Belmont Shore or Bixby Knolls types your service plus \"near me,\" and either you are one of the three businesses Google pinned to the map or you are not. Most people tap one of the three and never scroll. This is a dense, deeply diverse, coastal city where a big share of local search runs in Spanish and nearly all of it happens on a phone, so landing in that top three of the Google Map Pack is the whole contest. Here is how we get you there.",
    aioQuestion: 'How do Long Beach businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile tuned to the exact services and neighborhoods you want; name, address, and phone details that match everywhere online; a steady flow of real reviews; and local content built on genuine Long Beach neighborhoods. Because this is a coastal, bilingual city, the winners look established, answer fast, show up in Spanish search, and rank for year-round salt-air upkeep and summer HVAC demand.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors hold the three map spots', body: "Pull up your own service plus \"near me\" right now. The three businesses Google pins to the map take the lion's share of the clicks. If you are not one of them, the quality of your work barely registers, because most Long Beach homeowners never scroll far enough to see your name. Breaking into that top three is usually the single highest-return move a local business here can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Long Beach homeowner to four contractors at once, then bill each of you to scrap over them. It is a treadmill with no off switch. Local SEO builds the opposite asset: a homeowner finds you, calls you, and nobody else got the lead. Run it long enough and you stop renting visibility and start owning the pipeline." },
      { title: "You're invisible to half the market", body: "Around 43% of Long Beach is Hispanic, there is a large Cambodian community on top of that, and a heavy share of searches happen in Spanish. If your profile and pages only answer English search, you are skipping a huge block of paying homeowners. Ranking for the way this city genuinely searches is how you reach the work everyone else keeps ignoring." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The single biggest lever in the Map Pack. We tune your categories, services, service area, photos, and posts so Google knows precisely which Long Beach searches belong to you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to agree everywhere Google looks. We fix the listings that contradict each other and build the ones you are missing across the coast." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady run of new reviews, in English and Spanish. It raises your ranking and hands the next homeowner a reason to dial you first." },
      { name: 'Neighborhood pages', desc: "Real pages for Belmont Shore, Bixby Knolls, California Heights, Naples and the rest, so you rank for the exact neighborhood someone is searching instead of a flat \"Long Beach.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, and mobile load. The wiring under the hood that lets every other piece on this list actually show up in search." },
      { name: 'Local link building', desc: "Mentions and links from Long Beach sources Google trusts: local press, trade groups, community partners. In this market that is often what splits page one from page two." },
      { name: 'Bilingual local SEO', desc: "We structure your profile and pages so you surface in Spanish-language \"near me\" search too, reaching the large share of Long Beach homeowners most contractors leave on the table.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts inside AI Overviews, ChatGPT, and Perplexity. We structure your content so those engines can read you and cite you by name.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We map where you actually sit in the rankings today across each Long Beach service area, then work out which competitors are holding the Map Pack and what is keeping you under them." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP get handled first, since they shift the fastest. Most Long Beach clients notice early movement here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine switch on. They build slowly and steadily, which is the whole reason local SEO pays off for the contractor who starts this month instead of next year." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Long Beach and the cities around it, with the on-page work underneath them that earns the ranking." },
      { name: 'Report and expand', desc: "Reporting in plain English, tied to phone calls and booked leads rather than vanity positions. Once a neighborhood is locked, we move on to the next one." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation set right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Long Beach areas at once.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors set on owning the map across Long Beach.', features: ['Everything in Local Growth', 'Local link building', 'Bilingual search targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Long Beach?', a: "Most Long Beach engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you are chasing. The tiers above lay it out. No hidden fees, no long contract, and we lock the exact scope in your free audit before you spend a dollar." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move within a few weeks. The competitive Long Beach keywords usually take 90 to 180 days of steady work, because reviews and citations build up over time. Anyone promising you page one in 30 days in a market this crowded is selling you a fantasy." },
      { q: 'What makes Long Beach local SEO different?', a: "Two things set it apart. It is a deeply diverse, bilingual port city, roughly 43% Hispanic with the largest Cambodian community in the US, so showing up in Spanish search is a real edge most contractors miss entirely. And it is coastal, so salt-air upkeep and summer heat-wave demand keep work coming all year, which means your ranking pays off every month rather than one short season." },
      { q: 'Does Spanish-language search really matter here?', a: "It matters a lot. With about 43% of the city Hispanic and a heavy share of searches running in Spanish, contractors who only target English search are invisible to a big block of paying homeowners. We set up your profile and pages to surface in both languages, which is one of the fastest ways to pull ahead of competitors in Long Beach." },
      { q: 'Which areas do you cover?', a: "All of Long Beach and the surrounding cities: Belmont Shore, Naples, Bluff Heights, Belmont Heights, Bixby Knolls, California Heights, plus Signal Hill, Lakewood, Seal Beach, Los Alamitos and more. We build genuine neighborhood pages instead of one catch-all Long Beach page, because that is what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It is basically all we do: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand coastal corrosion, seismic retrofits, emergency calls, and insurance jobs, and we build your local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More \"near me\" research now starts in AI tools instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. In a market this competitive, that is fast becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. The first 90 days are the only commitment, because that is about how long local SEO takes to show real movement. After that you are month-to-month. If the results are not there, you leave, and the burden of proving it works stays on our side." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and a visibility you never get to keep. We build the rankings, the Google profile, and the review base that route leads to you and nobody else. Month by month your reliance on the brokers shrinks, because the calls are already arriving on their own." },
      { q: "What's in the free audit?", a: "A straight read on where you rank today across your service areas, how your Map Pack competitors are staying ahead of you, the moves that will lift you fastest, and a realistic 90-to-180-day plan with the numbers worked out for your business. No slide deck, just the diagnosis and a clear path for your Long Beach Local SEO." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'long-beach', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Long Beach SEO Company | Rank for the Jobs You Want | OnwardCraft',
    metaDescription:
      'Long Beach SEO that ranks you for the searches that book jobs and brings leads you own. Revenue-tied reporting, no lock-in, built for a coastal, bilingual port market.',
    eyebrow: 'SEO Services · Long Beach',
    h1: 'Long Beach SEO that ranks you for the coastal searches that book jobs',
    h2Exact: 'Long Beach SEO Company',
    heroSubhead:
      "Ads quit the second your card stops. SEO does the reverse: rank once for what your Long Beach customers search and the leads keep arriving for months. We build that ranking and tie every report to real calls and booked jobs, not pretty charts.",
    primaryCta: 'Get my free Long Beach SEO audit',
    intro:
      "Long Beach SEO comes down to one blunt question: when someone searches what you do, do you rank on page one or page two? In this market page two might as well be page fifty. As a Long Beach SEO company we get contractors ranking for the money keywords in a dense, diverse, coastal city, including the salt-air upkeep, seismic-retrofit, and summer HVAC searches that drive real work, and we measure the whole thing in booked leads, not organic traffic that never picks up the phone.",
    aioQuestion: 'How do Long Beach businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content, and earning links from trusted Long Beach sources. In a competitive coastal market, keeping the site fast on mobile, ranking in Spanish as well as English, and targeting seasonal terms like summer HVAC and salt-air upkeep are some of the quickest ways to pull ahead.",
    problemHeading: "Three reasons your Long Beach site isn't bringing in work",
    painPoints: [
      { title: "You're stranded on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it either. If you are not in the top handful of results for what you sell, your site is effectively invisible no matter how sharp it looks. In Long Beach, that invisibility is exactly what hands your jobs to the competition." },
      { title: "You're renting traffic from Google Ads", body: "Ads can pull their weight, but the moment your card stops the leads go quiet. SEO builds something you keep: rankings that hand you leads for months and years past the work itself, at a slice of the per-lead price you are wiring to brokers today." },
      { title: "You're not ranking for the demand that matters", body: "Long Beach demand has its own rhythm: summer heat waves for HVAC, salt-air corrosion that shortens every maintenance window, seismic retrofits, king-tide flooding near the water. The contractors who rank for those terms ahead of time catch the work. If your SEO skips them, you are quietly leaving your busiest searches on the table." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank your Long Beach site at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned for the exact terms your Long Beach customers search: titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Useful pages and articles that answer what Long Beach buyers actually type, pull in links, and keep generating leads long after the publish date." },
      { name: 'Link building', desc: "Authority from genuine Long Beach and trade sources. In a coastal market this crowded, links are frequently what tips a keyword from page two onto page one." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack work so you take the \"near me\" searches at the same time your organic listings climb." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, form fills, and booked leads instead of bare rankings and traffic, so the dollar value of your SEO is never a guess." },
      { name: 'Coastal & seasonal SEO', desc: "We rank you for the salt-air upkeep, summer HVAC, and seismic-retrofit searches that fuel Long Beach's real demand, so you are visible before homeowners need you.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of Long Beach search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Long Beach leads, not just impressions." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, mobile load. The groundwork that has to be solid before any page you own stands a chance of ranking." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus fresh local content, including the coastal, seismic, and summer-HVAC terms that decide who books the work in Long Beach." },
      { name: 'Build authority', desc: "Links and citations from trusted Long Beach and trade sources, aimed at moving your most competitive keywords up to page one." },
      { name: 'Report and scale', desc: "Reporting tied to leads each month, then we put more weight behind whatever is working and open up the next set of keywords." },
    ],
    pricing: {
      heading: 'Transparent Long Beach SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Long Beach search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Coastal & seasonal SEO', 'eCommerce / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Long Beach?', a: "Most Long Beach SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. The tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Long Beach?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on low-competition terms and slower on the most contested Long Beach keywords. SEO builds on itself, so the longer you run it, the bigger the gains get." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops the moment you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Long Beach contractors do best running SEO as the long-term engine and ads for short-term spikes." },
      { q: 'Should my Long Beach SEO target seasonal demand?', a: "Yes. Summer heat waves spike HVAC and mini-split searches, salt air keeps maintenance work coming all year, and seismic retrofits stay a steady category in this city. Ranking takes months to build, so you have to be in place before demand lands rather than chasing it after. We optimize for those seasonal and coastal terms ahead of time so the work falls to you." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. Higher tiers add coastal-and-seasonal and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. The only ask is an initial 90 days, since SEO needs about that long before real movement shows, and after that you run month-to-month. If the results are not landing, you are free to go." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "It is a growing slice of what we tune for. We set up your content and schema so those AI engines can read your business, trust it, and cite it by name in both English and Spanish queries, not just feed you classic blue links." },
      { q: 'Which areas around Long Beach do you cover?', a: "All of Long Beach and the cities around it: Signal Hill, Lakewood, Seal Beach, Los Alamitos, Cerritos, Carson, San Pedro and more, each on a real local page rather than one stretched-thin Long Beach page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "We build rankings and a Google presence that funnel leads straight to you. The more of your search visibility you own outright, the less you pay brokers to fight three competitors for the same shared lead." },
      { q: "What's in the free SEO audit?", a: "Your current ranking position, how competitors are staying ahead of you, the fixes with the most impact, and a realistic timeline with the math worked out for your business. No slide deck, just the diagnosis and a clear plan for your Long Beach SEO." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'long-beach', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Long Beach Web Design Company | Clicks Into Calls | OnwardCraft',
    metaDescription:
      'Long Beach web design built to convert clicks into calls: fast, mobile-first sites for contractors and a diverse, bilingual coastal market.',
    eyebrow: 'Web Design · Long Beach',
    h1: 'Long Beach web design built to convert Belmont Shore clicks into calls',
    h2Exact: 'Long Beach Web Design Company',
    heroSubhead:
      "A handsome website that never rings the phone is just an expensive brochure. We build Long Beach contractors fast, mobile-first sites engineered to turn visitors into booked work, and built to speak to a diverse, bilingual city that searches on its phone.",
    primaryCta: 'Get my free quote',
    intro:
      "Long Beach web design is the difference between a site that books work and a contractor website that bleeds leads quietly: slow on a phone, call button buried, no clear offer, and nothing that speaks to the city's bilingual market. Web design done right closes all of those leaks. We build mobile-first sites that load fast, look like the professional you actually are, and turn Belmont-Shore-to-Bixby-Knolls visitors into booked jobs.",
    aioQuestion: 'What makes a good contractor website in Long Beach?',
    aioAnswer:
      "A good Long Beach contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and speaks to the city's diverse, bilingual market. Because most Long Beach searches happen on mobile and a large share run in Spanish, mobile speed, an obvious next step, and bilingual-ready content are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "Plenty of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next name on the map. We design every page around one job: turning a Long Beach visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Long Beach visitors are on mobile, and they bounce if your site takes more than a couple of seconds to load. Slow sites also rank worse, so you lose twice. We build fast, so you keep both the visitor and the ranking." },
      { title: "It only speaks to half the market", body: "Long Beach is roughly 43% Hispanic with a large Cambodian community, and a heavy share of homeowners search in Spanish. A site built only for English search quietly waves away a big block of paying customers. We can build bilingual-ready so you capture the whole market." },
    ],
    servicesHeading: "What's in an OnwardCraft Long Beach website",
    services: [
      { name: 'Custom design', desc: "No off-the-shelf templates. A site shaped around your trade, your Long Beach service area, and the specific jobs you want more of." },
      { name: 'Mobile-first build', desc: "Built for the phone first, because that is where nearly all of your Long Beach traffic lives. Fast, thumb-friendly, and one tap from a call." },
      { name: 'Conversion-focused UX', desc: "Plain offers, call buttons that stand out, and lead forms set where homeowners genuinely tap them. No page leaves the visitor wondering what to do next." },
      { name: 'Copy that sells', desc: "Words that speak to a homeowner staring at a corroded line or a failing AC unit, not filler text that reads exactly like every other contractor in town." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank: clean structure, schema, fast load, and neighborhood-ready pages for Belmont Shore, Bixby Knolls, Naples and beyond." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned for fast load and a clean pass on Google's performance scores, which guards your conversions and your rankings in one move." },
      { name: 'Bilingual-ready build', desc: "We can build your site to serve English and Spanish search, so you reach the large bilingual share of Long Beach homeowners most contractor sites quietly ignore.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read your site and recommend your business as more Long Beach search shifts toward AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We get to know your trade, your service area, the jobs that pay best, and the competitors you keep losing to, then build the site to book more of the work you want." },
      { name: 'Design', desc: "We lay out a custom, mobile-first design built to convert, and you review and adjust it before a single line of code gets written." },
      { name: 'Build and copy', desc: "We build it quickly and write copy that closes, with the call to action sitting front and center on every page." },
      { name: 'Launch', desc: "We ship it cleanly, with the SEO foundation, tracking, and speed all set from the first day live." },
      { name: 'Support and optimize', desc: "We keep it quick and current, and adjust it around whatever is actually turning Long Beach visitors into phone calls." },
    ],
    pricing: {
      heading: 'Transparent Long Beach web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Bilingual-ready build'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Long Beach?', a: "Most contractor sites with us land between $2,000 and $8,000 as a one-time build, set by page count and integrations. The tiers above spell it out: one fixed price, no surprises, and the finished site is yours." },
      { q: 'How long does it take to build?', a: "A focused site runs roughly 2 to 4 weeks; a larger custom build runs 4 to 8. You get a firm timeline before we start and an update at each stage." },
      { q: 'Can you build my site in Spanish too?', a: "Yes, and in Long Beach that pays off. With roughly 43% of the city Hispanic and a large share of homeowners searching in Spanish, a bilingual-ready site reaches customers your English-only competitors keep missing. We build it to serve both markets cleanly." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank, and pairing it with our SEO service is how you climb the competitive Long Beach terms." },
      { q: 'Do I own the website?', a: "Fully. The site, the domain, and the content all belong to you. No hostage setups, no platform you are stuck inside with no way out." },
      { q: 'Will it work well on phones?', a: "Yes. We design mobile-first, since that is where nearly all of your Long Beach traffic starts. Quick load, call buttons sized for a thumb, and forms that are easy to fill on a small screen." },
      { q: 'What platform do you build on?', a: "We choose the platform that matches your needs and that you can run yourself, usually WordPress or Webflow. In the free consult we tell you which fits and walk through the tradeoffs in plain language." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build ships with launch support, and from there you can add affordable monthly maintenance that keeps the updates, the load speed, and the security handled for your Long Beach site." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time, fixed-price project. Any maintenance or SEO you add afterward runs month-to-month, so you can step away whenever you want." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting site should include, and a fixed-price quote with a timeline. No pressure, just a plan for your Long Beach web design." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'long-beach', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Long Beach Website Redesign | Keep Every Ranking | OnwardCraft',
    metaDescription:
      'Long Beach Website Redesign that keeps every ranking you have earned. Faster, mobile-first, bilingual-ready rebuilds that turn more visitors into booked jobs.',
    eyebrow: 'Website Redesign · Long Beach',
    h1: 'Long Beach Website Redesign that keeps every ranking you have earned across the historic homes of Bluff Heights and Belmont Heights',
    h2Exact: 'Long Beach Website Redesign Company',
    heroSubhead:
      "An outdated site quietly costs you jobs every week: slow, clumsy on a phone, easy for a Long Beach homeowner to skip past. We redesign contractor sites to convert more and load faster, and we migrate so carefully that you keep every bit of ranking you have already earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "A Long Beach Website Redesign usually goes one of two bad ways: the site looks prettier but converts exactly the same, or it launches and the rankings vanish overnight. We do neither. We redesign contractor sites for speed and conversions, build them to serve a diverse, bilingual market, and run an SEO-safe migration with the redirects that protect the traffic you have spent years building.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Long Beach site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "On a high-ticket job, homeowners size you up by your site in seconds. An old, cluttered design quietly ships them to a competitor who simply looks more established, even when your work is plainly better. In Long Beach's historic neighborhoods, that first impression often decides who gets the call." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you are losing the majority of your Long Beach visitors before they ever reach your offer. A redesign built mobile-first wins those visitors back and turns them into leads." },
      { title: "It ignores half your market", body: "Traffic that never turns into calls is wasted money, and an English-only site in a city that is roughly 43% Hispanic with a large bilingual base quietly waves away paying homeowners. We rebuild for conversions and can build bilingual-ready so the new site captures the whole market." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We track down exactly what is bleeding leads and rankings right now, so the rebuild solves real problems instead of just repainting the homepage." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled the careful way, so the rankings and traffic you have already built in Long Beach come across intact." },
      { name: 'Conversion redesign', desc: "Plain offers, sharper call-to-action placement, and lead forms homeowners genuinely fill out. We design toward booked jobs, not a prettier screenshot." },
      { name: 'Speed overhaul', desc: "We rebuild for quick load and a clean Core Web Vitals pass, which raises conversions and rankings together." },
      { name: 'Mobile-first rebuild', desc: "Rebuilt around the phone, where nearly all of your Long Beach traffic actually starts its search." },
      { name: 'Brand refresh', desc: "A current, trustworthy look that fits the quality of your work and the ticket size of the jobs you are chasing." },
      { name: 'Bilingual-ready rebuild', desc: "Rebuilt to serve English and Spanish search, so the new site reaches the large bilingual share of Long Beach homeowners the old one was missing.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as more Long Beach search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We work out what is costing you leads and rankings, then plot a redesign that repairs it without knocking over the parts already pulling their weight." },
      { name: 'Design', desc: "A current, mobile-first, conversion-minded design that you review and reshape before we build anything." },
      { name: 'Rebuild and migrate', desc: "We rebuild quickly and line up every redirect and SEO detail so the migration goes through without nasty surprises." },
      { name: 'Launch with SEO care', desc: "We go live with redirects already in place and watch closely, so your rankings hold steady and rise rather than slipping." },
      { name: 'Optimize', desc: "Tuning after launch around whatever is converting, plus steady speed work and updates." },
    ],
    pricing: {
      heading: 'Transparent Long Beach redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Bilingual-ready rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Long Beach?', a: "Most redesigns with us land between $2,500 and $9,000 as a one-time project, set by size and integrations. One fixed price, no surprises, and the finished result is yours." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not when it is done with care, and care is the whole method here. We set 301 redirects for every changed URL, hold onto content and metadata, carry the schema across, and test on staging before anything goes live. Handled this way, a redesign keeps your rankings and usually lifts them." },
      { q: 'How long does a redesign take?', a: "A focused redesign runs roughly 3 to 5 weeks; a bigger rebuild runs 5 to 9. You get a firm timeline before we start and an update at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is a pain to update, is not bringing in leads, or only speaks to English search in a heavily bilingual city, it is costing you work. The free audit tells you plainly whether a redesign is worth it for your Long Beach business." },
      { q: 'Do you migrate my existing content?', a: "Yes. We bring across and tighten your current content, keep whatever is ranking, and run the technical migration so nothing that matters falls through the cracks." },
      { q: 'Can you make the new site bilingual?', a: "Yes, and in Long Beach it is worth a serious look. With about 43% of the city Hispanic and a large share of homeowners searching in Spanish, a bilingual-ready rebuild reaches buyers an English-only site keeps overlooking. We can set it up to serve both markets." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for quick load and Core Web Vitals, which raises conversions and rankings at once." },
      { q: 'Do I own the redesigned site?', a: "Fully: the site, the domain, and the content. No platform lock-in, period." },
      { q: 'Am I locked into a contract?', a: "No. The redesign itself is a one-time project. If you keep us on for maintenance or SEO afterward, that part runs month-to-month with nothing locking you in." },
      { q: "What's in the free redesign audit?", a: "A straight read on what your current site is costing you in leads and rankings, the things the redesign needs to fix, and a fixed-price quote with a timeline and an SEO-safe migration plan for your Long Beach Website Redesign." },
    ],
  },
];

export const longBeachCity = {
  citySlug: 'long-beach', city: 'Long Beach', state: 'California', stateAbbr: 'CA', metro: 'Long Beach',

  titleTag: 'Long Beach Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Long Beach marketing for contractors: web design, SEO, and local SEO. Get found, get ranked, get booked, and own your leads instead of renting them.',

  eyebrow: 'Long Beach · Web Design, SEO & Lead Generation',
  h1: 'Long Beach marketing for contractors: get ranked, get booked in English and Spanish',
  h2Exact: 'Long Beach Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Long Beach's diverse, coastal market. One team to get you ranking, converting, and off the rented-lead treadmill for good.",
  heroProof: ['Built for the trades', 'Coastal & seismic ready', 'No lock-in contracts'],
  primaryCta: 'Get my free Long Beach audit',

  intro:
    "Long Beach marketing for contractors means fighting for attention in a dense, diverse, coastal city where a heavy share of homeowners search in Spanish and nearly all of them search on a phone. Winning here takes three things working together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack, all built to reach the whole bilingual market and the year-round coastal demand. As a Long Beach digital marketing agency built around the trades, here is exactly how we help contractors get found and booked.",
  aioQuestion: 'How do Long Beach contractors get more leads online?',
  aioAnswer:
    "Long Beach contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack. Because Long Beach is deeply bilingual and coastal, with year-round salt-air upkeep and summer HVAC demand, the contractors who look established, show up in both English and Spanish search, and are already ranking win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Long Beach searches \"near me,\" in English and Spanish. The single highest-return move for most local businesses here.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your Long Beach customers actually search, build an asset you own instead of renting traffic from ads, and measure the whole thing in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first, bilingual-ready websites engineered to turn visitors into booked jobs, not brochures that just sit there waiting for a call.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it so carefully that you keep every bit of ranking you have already earned in Long Beach search.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Long Beach?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads, reaching the whole bilingual market instead of half of it." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors, so we understand coastal corrosion, seismic retrofits, emergency calls, and insurance work." },
    { q: 'Why does the bilingual market matter for my marketing?', a: "Long Beach is roughly 43% Hispanic, with the largest Cambodian community in the US and a heavy share of homeowners searching in Spanish. Contractors who only target English search are invisible to a big block of paying customers. We build your marketing to reach both, which is one of the fastest ways to pull ahead here." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds running $2,000 to $9,000. SEO and local SEO are month-to-month, $750 to $3,000, with no long contract holding you. Your free Long Beach audit nails down the exact scope before anything starts." },
    { q: 'Which Long Beach areas do you serve?', a: "All of Long Beach and the surrounding cities: Belmont Shore, Naples, Bluff Heights, Bixby Knolls, California Heights, plus Signal Hill, Lakewood, Seal Beach, Los Alamitos, Cerritos and more." },
    { q: 'Where should I start?', a: "Start with a free Long Beach audit. We look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a plan to put Long Beach marketing for contractors to work for you." },
  ],
};
