// COLUMBUS: per-metro x per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Columbus's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// COLUMBUS: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why winning Columbus search takes more than a city name',
  body:
    "Columbus keeps adding people faster than almost any Midwest metro: roughly 900,000 in the city itself and close to 2.1 million across the region. That growth does not land evenly, and that is exactly why a one-size template fails here. Intel's chip fab out in New Albany, the Nationwide and Chase towers downtown, and an ongoing build-out of Amazon logistics sites have pulled high-earning homeowners into the ring of suburbs: Dublin, Westerville, Powell, New Albany, Gahanna, Hilliard, Grove City. Those areas are packed with newer homes and owners who Google a contractor first and want to see a polished, credible site before they ever dial. Step inside the older city, though, and the picture flips. German Village, Short North, Clintonville, and Victorian Village are full of homes built between the early 1900s and the 1950s that need steady upkeep, and those owners stay loyal to crews that prove they know the territory. The calendar matters just as much as the map. Ohio winters hammer roofs with ice storms and repeated freeze-thaw swings; spring brings tornadoes and severe storms that flood basements and strip shingles; July and August drive AC failures as hard as any Midwest market. Whoever already sits in the Map Pack when the next system rolls through fields those calls. Whoever is still building a profile hears silence.",
  pullQuote: 'In a metro adding people this fast, the contractor already ranking before the next storm owns the work.',
  donut: {
    title: 'How Columbus searches',
    value: 92,
    centerLabel: 'English at home',
    legend: [
      { label: 'English at home', pct: 92, kind: 'teal' },
      { label: 'Other language at home', pct: 8, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Winter storm and HVAC (Nov-Mar), spring flooding (Mar-May), summer AC (Jul-Aug)',
  seasonalDemand: [
    { m: 'J', v: 88, peak: true }, { m: 'F', v: 85, peak: true }, { m: 'M', v: 80, peak: true },
    { m: 'A', v: 78, peak: true }, { m: 'M', v: 62 }, { m: 'J', v: 58 },
    { m: 'J', v: 84, peak: true }, { m: 'A', v: 82, peak: true }, { m: 'S', v: 55 },
    { m: 'O', v: 52 }, { m: 'N', v: 72, peak: true }, { m: 'D', v: 86, peak: true },
  ],
  stats: [
    { value: '2.1M', label: 'people across the Columbus metro and still climbing' },
    { value: 'Nov-Mar', label: 'winter storm and heating season, when roofing and HVAC calls surge', accent: true },
    { value: 'Intel + Chase', label: 'major employers fueling suburb homeowner demand in New Albany, Dublin, and Westerville' },
    { value: 'Top 3', label: 'Map Pack spots that grab most of the clicks' },
  ],
  neighborhoods: [
    'Short North', 'German Village', 'Clintonville', 'Victorian Village', 'Italian Village',
    'Bexley', 'Upper Arlington', 'Dublin', 'Westerville', 'Powell',
    'New Albany', 'Gahanna', 'Hilliard', 'Grove City', 'Worthington',
  ],
};

const AREAS = [
  'Dublin', 'Westerville', 'Powell', 'New Albany', 'Gahanna', 'Hilliard', 'Grove City',
  'Upper Arlington', 'Bexley', 'Short North', 'German Village', 'Clintonville',
  'Victorian Village', 'Italian Village', 'Worthington',
];

const FOUNDER =
  "I built OnwardCraft after watching too many sharp contractors wire money to Angi and HomeAdvisor every month for leads that three competitors bought the same day. That is not a pipeline. That is a treadmill you pay to stay on. Columbus is booming, the suburbs are full of homeowners who research online before they ever call, and the seasonal swings here are no joke. When a winter storm hits or the August heat breaks an AC, the crews already ranking get the jobs and the rest get crickets. Our entire job is to flip that for you: you own your search presence, your leads, and your booked calendar. No 12-month handcuffs. If we are not earning it, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, and GCs. We know what a January ice storm does to a Dublin roof, what freeze-thaw cycles do to a German Village foundation, and how fast Clintonville basements fill in a spring downpour. Every page we build is shaped around how Columbus homeowners actually search for that work.",
  },
  {
    title: 'We get you off rented leads',
    body: "The point is a pipeline that belongs to you. Not one more monthly invoice to a lead broker for the same homeowner your three closest competitors already paid to chase.",
  },
  {
    title: 'We actually know Columbus',
    body: "Suburb by suburb and street by street, from the Intel corridor in New Albany to the century-old housing stock in German Village. Ranking a contractor in Powell and ranking one in Clintonville are two different jobs, and we treat them that way instead of swapping a city name into a template.",
  },
  {
    title: 'No contracts, no mystery',
    body: "Prices you can read on the page, reporting tied to real leads, and month-to-month billing after the first 90 days. If we stop earning it, you walk. That keeps the pressure exactly where it should be: on us.",
  },
];

const PROOF = {
  heading: "We're new, so here's the honest math instead of a logo wall",
  body:
    "Plenty of agencies will flash a wall of client logos at you. We are a young, founder-led shop, so we are not going to fake a track record we have not built yet. What we can hand you is the reasoning behind why this works, drawn straight from Google's own data and the wider industry research on how people search locally.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here is a rough sketch, labelled clearly as a projection and not a result we are claiming: picture a Columbus contractor pulling around 1,500 local \"near me\" impressions a month across a few suburbs and neighborhoods. Climbing out of page-two invisibility into the top three is the gap between a phone that stays quiet and a calendar booked solid, especially during storm and heating season when every missed call is a missed job. In your free audit we model the real numbers for your business: your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Columbus', state: 'Ohio', stateAbbr: 'OH', metro: 'Columbus',
  heroProof: ['Built for the trades', 'Suburb-by-suburb targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const columbusLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'columbus', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Columbus Local SEO Company | OnwardCraft',
    metaDescription:
      'Search your service in Columbus and three businesses show on the map. We get you into those three, from Dublin and Westerville to German Village and beyond.',
    eyebrow: 'Local SEO · Columbus, OH',
    h1: 'When Columbus searches for what you do, be the first name they find',
    h2Exact: 'Columbus Local SEO Company',
    heroSubhead:
      "Google pins three businesses to the map on a \"near me\" search, and everyone below them might as well not exist. In a metro adding people as fast as Columbus, from Dublin to German Village, we get you into that top three for the suburbs and neighborhoods you serve, so the call lands with you instead of whoever ranked first.",
    primaryCta: 'Get my free Columbus audit',
    intro:
      "Columbus local SEO really comes down to a single test: when a homeowner in Dublin or Clintonville searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. The metro keeps growing, the suburbs are stacked with well-paid homeowners who search before they call, and the seasonal swings of winter storms, spring flooding, and summer heat hand the work to whoever is already ranking. Here is how you get there.",
    aioQuestion: 'How do Columbus businesses rank higher in local search?',
    aioAnswer:
      "You rank by nailing four things: a Google Business Profile tuned for the exact services and areas you want, consistent name, address, and phone listings across the web, a steady flow of real reviews, and local content tied to the Columbus suburbs and neighborhoods you genuinely serve. Because demand spikes hard around winter storms (Nov-Mar) and spring flooding (Mar-May), the contractors who build their Map Pack presence before the season arrives catch those calls, while everyone else is invisible exactly when it counts.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. Those three businesses Google pins to the map pull the overwhelming share of clicks. If you are not one of them, whether the search comes from Powell or German Village, it barely matters how good your work is, because most people never scroll past them. Landing in that top three for the suburbs and neighborhoods you serve is usually the single highest-return move a Columbus contractor can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Columbus homeowner to a stack of contractors, then bill each of you to fight over the job. That is a treadmill with a monthly fee. Local SEO builds the opposite: a homeowner finds you, calls you, and nobody else got that lead. Run it long enough and you stop renting your pipeline and start owning it." },
      { title: "You're not ready when storm season hits", body: "Columbus winters bring ice storms and relentless freeze-thaw cycles. Spring drops tornadoes and flooding. The moment a system rolls through, searches for roofing, HVAC, and water damage jump overnight, and the contractors already ranking field those calls. Map Pack presence takes months to build, so you have to be in place before the season, not scrambling after the storm has already cleared." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The single biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows precisely which Columbus searches you should win, whether that is Dublin roofing or Clintonville plumbing." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to line up everywhere Google checks. We correct the listings that contradict each other and build the ones you are missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady stream of reviews. It lifts your ranking and gives homeowners the nudge to call." },
      { name: 'Neighborhood and suburb pages', desc: "Real pages for Dublin, Westerville, German Village, Clintonville, New Albany, and the rest, so you rank for the exact area someone is searching rather than a blanket \"Columbus.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The groundwork beneath the surface that lets everything above it rank." },
      { name: 'Local link building', desc: "Mentions and links from Columbus-area sources Google trusts: local press, trade associations, and community groups. Around here, this is often what separates page one from page two." },
      { name: 'Seasonal storm and HVAC SEO', desc: "We tune your profile and pages for the winter roofing, heating, and freeze damage searches that spike Nov-Mar and the spring flooding and storm repair searches that surge Mar-May, so you are visible right when demand peaks.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now kicks off inside AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We map where you actually rank today across your Columbus suburbs and neighborhoods and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP come first, because they move fastest. You usually see early lift here inside a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now over starting later, and why you want them in place before storm season." },
      { name: 'Add local content', desc: "Suburb and neighborhood pages across the Columbus metro, backed by the on-page work that makes them stick." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Columbus suburbs and neighborhoods.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Suburb and neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across the Columbus metro.', features: ['Everything in Local Growth', 'Local link building', 'Seasonal storm and HVAC SEO', 'Multi-suburb and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Columbus?', a: "Most Columbus engagements run between $750 and $2,500 a month, depending on how many suburbs and keywords you are chasing. Our tiers sit right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move within a few weeks. The competitive Columbus suburb keywords usually take 90 to 180 days of steady work, because reviews and citations build on each other over time. Anyone promising page one in 30 days is selling you something." },
      { q: 'What makes Columbus local SEO different from bigger markets?', a: "Two things. First, the market splits hard between the suburbs (Dublin, Westerville, New Albany, Powell) where Intel and the big employers have driven homeowner demand, and the older city neighborhoods like German Village and Clintonville where century-old homes need constant upkeep. You have to rank for where you actually work, not just \"Columbus.\" Second, the storm calendar is real: the crews already in the Map Pack when a winter storm or spring flood hits get the work, and the ones who are not miss the spike entirely." },
      { q: 'Should I optimize for the suburbs or the city neighborhoods?', a: "Wherever you do your best work. The suburbs (Dublin, Westerville, Powell, New Albany) carry dense homeowner demand from the tech and finance economy. The older city neighborhoods (German Village, Clintonville, Short North) are full of pre-1950s homes with ongoing maintenance needs. We build suburb and neighborhood pages for the areas you serve rather than one catch-all Columbus page." },
      { q: 'Which areas do you cover?', a: "Every major Columbus suburb and city neighborhood: Dublin, Westerville, Powell, New Albany, Gahanna, Hilliard, Grove City, Upper Arlington, Bexley, Short North, German Village, Clintonville, Victorian Village, Italian Village, Worthington, and more. We build genuine local pages, not one generic Columbus page." },
      { q: 'How does storm season affect my local SEO?', a: "Columbus winters bring ice storms, heavy snow, and freeze-thaw cycles that batter roofs, HVAC systems, and foundations. Spring brings tornadoes and flooding. When a storm hits, emergency searches spike and the top three Map Pack results get buried in calls. If you are not already ranking, you are invisible. We build your Map Pack presence ahead of the season so you capture those calls when they matter most." },
      { q: 'Do you work with contractors specifically?', a: "It is basically all we do: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand freeze-thaw foundation damage, storm roofing emergencies, and basement flooding work, and we build your local SEO around exactly those jobs." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More \"near me\" research now starts inside AI instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It is fast becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that is roughly how long local SEO needs to show real movement. After that it is month-to-month. If we are not delivering, you walk, and the accountability stays on us." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your Columbus suburbs and neighborhoods, what your Map Pack competitors are doing to beat you, the fixes that will move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck, just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'columbus', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Columbus SEO Company | OnwardCraft',
    metaDescription:
      'Columbus SEO that ranks contractors on Google and delivers leads you own. Revenue-tied reporting, no lock-in contracts, built for a fast-growing metro.',
    eyebrow: 'SEO Services · Columbus, OH',
    h1: 'Get your Columbus business to the top of Google and keep it there',
    h2Exact: 'Columbus SEO Company',
    heroSubhead:
      "Ads die the second you stop paying. SEO does the reverse: rank once for what Columbus customers search and the leads keep arriving. We build that ranking and tie every report to real calls and jobs, in a metro that keeps growing and rewards the contractors who show up first.",
    primaryCta: 'Get my free Columbus SEO audit',
    intro:
      "Columbus SEO boils down to one question: when a homeowner in Westerville or German Village searches your service, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords across one of the Midwest's fastest-growing metros, and we measure the result in leads, not vanity traffic.",
    aioQuestion: 'How do Columbus businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, tuning each page for the exact terms customers search, publishing genuinely useful local content tied to specific Columbus suburbs and neighborhoods, and earning links from trusted local sources. In Columbus, two of the fastest ways to pull ahead are tight suburb-level targeting (Dublin, Clintonville, and New Albany are genuinely different markets) and ranking for the seasonal storm repair and HVAC terms that spike in winter and spring before the demand actually shows up.",
    problemHeading: "Three reasons your Columbus site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google. In a metro filling up as fast as Columbus, with new contractors entering the market every year, if you are not in the top handful of results for what you sell, your site is effectively invisible no matter how good your work is." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the instant your card stops, the leads stop. SEO builds an asset you own: rankings that keep generating leads months and years after the work is done, at a fraction of the per-lead cost of pay-per-click." },
      { title: "You're not ranking for the seasonal demand that matters", body: "Columbus winters drive roofing, HVAC, and pipe-burst calls that spike hard Nov-Mar. Spring flooding and storm damage push another wave Mar-May. The contractors ranking for those searches before the season hits catch the spike. If your SEO ignores seasonal and emergency terms, you are handing away your busiest weeks." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned for the exact terms Columbus homeowners search: titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and pull in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real Columbus-area and industry sources. In a growing market, links are often what tip you from page two to page one." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across Columbus suburbs and neighborhoods right alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads, not just rankings and traffic, so you always know what your SEO is genuinely worth." },
      { name: 'Seasonal & storm SEO', desc: "We rank you for the winter storm, roofing, HVAC, and spring flooding terms ahead of the season, so you catch those calls instead of scrambling once the weather has already passed.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Columbus leads, including the seasonal terms that get away from you if you wait too long to target them." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile: the foundation everything else needs in order to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the seasonal and emergency terms that matter most in Columbus." },
      { name: 'Build authority', desc: "Links and citations from trusted Columbus and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what is working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Columbus SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across Columbus suburbs and services.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Columbus search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal & storm SEO', 'Multi-suburb / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Columbus?', a: "Most Columbus SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Columbus?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, quicker on tighter suburb-level terms and slower on the most competitive Columbus-wide keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads for Columbus contractors?', a: "They do different jobs. Ads buy instant traffic that stops the moment you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most contractors do best running SEO as the long-term engine and using ads for short-term demand spikes." },
      { q: 'Should my Columbus SEO target seasonal demand?', a: "Absolutely. Columbus winters bring ice storms and freeze-thaw cycles that spike roofing, HVAC, and pipe-burst searches hard from Nov-Mar. Spring flooding and storm damage drive another surge Mar-May. Ranking takes months to build, so you need to be in place before the season arrives, not chasing it afterward. We optimize for those seasonal and emergency terms ahead of time." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal storm SEO and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it is month-to-month. If we are not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which Columbus suburbs and neighborhoods do you cover?', a: "All the major ones: Dublin, Westerville, Powell, New Albany, Gahanna, Hilliard, Grove City, Upper Arlington, Bexley, Short North, German Village, Clintonville, Victorian Village, and more, with genuine local pages rather than one generic Columbus page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that route leads straight to you. The more you own your search visibility, the less you lean on paying lead brokers for shared leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your Columbus competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'columbus', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Columbus Web Design Company | OnwardCraft',
    metaDescription:
      'Columbus web design that turns visitors into booked jobs: fast, mobile-first sites built for contractors across Dublin, German Village, Westerville, and more.',
    eyebrow: 'Web Design · Columbus, OH',
    h1: 'Columbus web design that turns visitors into booked jobs',
    h2Exact: 'Columbus Web Design Company',
    heroSubhead:
      "A good-looking website that never generates a call is just a brochure. We build Columbus contractors fast, mobile-first sites engineered to turn visitors into booked work, and to stand out in a metro that keeps growing and where homeowners expect a professional presence before they will pick up the phone.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Columbus contractor sites bleed leads quietly: slow on a phone, a call button buried somewhere, no clear offer for the suburb someone is actually searching from. Web design done right closes all of those gaps. We build sites that load fast, look like the professional you are, and turn visitors from Dublin to German Village into booked jobs, built to win in a metro where the competition grows as fast as the population.",
    aioQuestion: 'What makes a good contractor website in Columbus?',
    aioAnswer:
      "A strong Columbus contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific suburbs and neighborhoods you serve. Because the Columbus market splits sharply between the growing tech-economy suburbs (Dublin, New Albany, Westerville) and the older city neighborhoods (German Village, Clintonville), a site that speaks to where you work and the problems you solve, storm and winter damage included, converts far better than a generic contractor template.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "Plenty of contractor sites just list services and sit there: no clear offer, no obvious next step, no reason to pick you over the next contractor in Dublin or Westerville. We design every page around one job, turning a visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Columbus visitors are on mobile, and they bounce when a site takes more than a few seconds to load. Slow sites also rank worse. We build fast, so you hold onto both the visitor and the ranking." },
      { title: "It doesn't speak to your neighborhoods", body: "A homeowner in Powell wants to see that you serve Powell, not a generic Columbus page that could belong to anyone. We build sites that name the suburbs and neighborhoods you work, so visitors trust you are local and Google ranks you for the right searches." },
    ],
    servicesHeading: "What's in an OnwardCraft Columbus website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your Columbus suburbs, and the jobs you actually want to book." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that is where most of your Columbus traffic lives. Fast, thumb-friendly, and easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where people actually use them. Every page carries a next step." },
      { name: 'Copy that sells', desc: "Words written for Columbus homeowners, whether they are facing a storm-battered roof in Westerville or a leaking foundation in German Village, not filler that reads like everyone else's." },
      { name: 'Local SEO foundation', desc: "Built to rank from the ground up: clean structure, schema, fast load, and suburb-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Suburb-targeted pages', desc: "Pages built around the Columbus suburbs and neighborhoods you serve (Dublin, Westerville, New Albany, German Village, Clintonville, and more) so you stand out instead of blending into one generic city page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your Columbus suburbs, your best jobs, and your competitors, then map the site around booking more of the work you actually want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert, and you see it and shape it before a single line of code is written." },
      { name: 'Build and copy', desc: "We build fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it around what is actually converting." },
    ],
    pricing: {
      heading: 'Transparent Columbus web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established Columbus contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + suburb pages', 'Speed & Core Web Vitals', 'Suburb-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-suburb businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Columbus?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above: fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes roughly 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you posted through each stage." },
      { q: 'Will my site help me stand out in Columbus?', a: "That is the entire point. Columbus homeowners, especially in the suburbs where the tech and finance economy has landed, research contractors online before they call. We build around the specific suburbs and neighborhoods you serve, keep the site fast, and put a clear offer and call button front and center, so yours is the one that books the job." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and suburb-ready pages. The build gets you ready to rank, and pairing it with our SEO service is how you climb the competitive Columbus terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you cannot leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where most of your Columbus traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage, usually WordPress or Webflow. We will recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month, so you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Columbus contractor site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'columbus', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Columbus Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your Columbus website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs across Dublin and Westerville.',
    eyebrow: 'Website Redesign · Columbus, OH',
    h1: 'Redesign your Columbus website without losing your rankings',
    h2Exact: 'Columbus Website Redesign Company',
    heroSubhead:
      "An outdated site quietly costs you jobs every week: slow, awkward on a phone, easy to skip past. We redesign Columbus contractor sites to convert more and load faster, and we migrate with care so you keep every bit of ranking you have earned across your suburbs and neighborhoods.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns fail one of two ways: the site looks sharper but converts the same, or it launches and the rankings disappear overnight. We do neither. We redesign Columbus contractor sites for speed and conversions, build them to stand out in a fast-growing metro, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done properly, a redesign holds your rankings and lifts them, because the new site is faster, mobile-first, and better structured than the old one, and in Columbus that means sharper suburb targeting too.",
    problemHeading: "Signs your Columbus site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "Columbus homeowners, especially in the growing tech-economy suburbs like Dublin, New Albany, and Westerville, size you up by your site in seconds. An old, cluttered design quietly sends them to a competitor who looks more established, even when your work is better. The stakes only climb as more well-paid homeowners pour into those suburbs." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you lose most of your Columbus visitors before they ever reach your offer. A redesign built mobile-first wins them back and recovers those lost leads." },
      { title: "It doesn't speak to your neighborhoods", body: "Traffic that never turns into calls is wasted. A generic old site gives a visitor no reason to pick you over the next contractor in Dublin or Clintonville. We rebuild for conversions and for the suburbs you actually serve, so the right buyers choose you." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what is costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you have already earned across your Columbus suburbs." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals, which helps both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where most of your Columbus traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the expectations of homeowners in a growing metro." },
      { name: 'Suburb-targeted rebuild', desc: "Rebuilt around the Columbus suburbs and neighborhoods you serve, so the new site stands out in a growing market instead of reading like a generic contractor page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We dig into what is losing you leads and rankings, then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and improve rather than drop." },
      { name: 'Optimize', desc: "Post-launch tuning based on what is converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Columbus redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established Columbus contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + suburb pages', 'Suburb-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-suburb sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Columbus?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it is done carefully, and that is exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes roughly 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is hard to update, is not bringing in leads, or fails to speak to the Columbus suburbs and neighborhoods you serve, it is costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what is ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the redesign help me compete in Columbus?', a: "Yes, and in a metro growing this fast it is the whole point. The new wave of homeowners arriving in Dublin, New Albany, and Westerville with the Intel and finance economy are used to researching contractors online. We rebuild around the specific suburbs and neighborhoods you serve, keep the site fast, and make the offer and call button obvious, so the new site stands out instead of reading like every other contractor's." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely: the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const columbusCity = {
  citySlug: 'columbus', city: 'Columbus', state: 'Ohio', stateAbbr: 'OH', metro: 'Columbus',

  titleTag: 'Columbus Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Columbus contractors. Get found, get booked, and own your leads, built for a fast-growing metro from Dublin to German Village.',

  eyebrow: 'Columbus · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Columbus contractors found and booked',
  h2Exact: 'Columbus Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Columbus, from the Intel-economy suburbs of Dublin and New Albany to the older neighborhoods of German Village and Clintonville. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Suburb-by-suburb targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Columbus audit',

  intro:
    "Running a contracting business in Columbus means fighting for attention in one of the fastest-growing metros in the Midwest, and the homeowner market here genuinely shifts depending on where you look. The suburbs like Dublin, Westerville, Powell, and New Albany carry a wave of well-paid homeowners from the Intel, Chase, and Nationwide economy who research contractors online before they call anyone. The older city neighborhoods like German Village, Short North, and Clintonville hold homes built between the early 1900s and the 1950s that need constant upkeep, with owners loyal to contractors who show real local expertise. And the storm calendar is no afterthought: Columbus winters bring ice storms and freeze-thaw damage, while spring drops flooding and severe weather. Winning here takes three things working together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack for the suburbs and neighborhoods you actually serve.",
  aioQuestion: 'How do Columbus contractors get more leads online?',
  aioAnswer:
    "Columbus contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack suburb by suburb and neighborhood by neighborhood. Because the Columbus market splits sharply between the growing tech-economy suburbs and the older city neighborhoods, and because storm seasonality drives hard demand swings Nov-May, the contractors who rank specifically for where they work and for the seasonal searches that matter most book the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Land in the top three businesses Google pins to the map when Columbus searches \"near me.\" For most local contractors it is the single highest-return move, done tight, suburb by suburb and neighborhood by neighborhood.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers genuinely search, build an asset you own instead of renting traffic from ads, and measure it in leads rather than vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs, built for a metro where well-paid homeowners research contractors online before they call.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it carefully so you keep every bit of ranking you have already earned across your Columbus suburbs.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Columbus?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients pair a high-converting website with SEO and local SEO so they rank, convert, and own their leads in a fast-growing market." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades (roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors) so we understand winter storm emergencies, freeze-thaw foundation work, spring flooding calls, and the difference between serving an older German Village home and a new Dublin build." },
    { q: 'Why does the Columbus market need a local approach?', a: "Because it splits sharply between the growing tech-economy suburbs (Dublin, Westerville, New Albany, Powell) where homeowners research everything online, and the older city neighborhoods (German Village, Clintonville, Short North) where pre-1950s homes need ongoing specialty work. Generic templates win neither market. And storm seasonality drives real demand spikes: the contractors already ranking when a winter storm or spring flood hits get the calls." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Columbus areas do you serve?', a: "All the major suburbs and city neighborhoods: Dublin, Westerville, Powell, New Albany, Gahanna, Hilliard, Grove City, Upper Arlington, Bexley, Short North, German Village, Clintonville, Victorian Village, Italian Village, Worthington, and more." },
    { q: 'Where should I start?', a: "Start with a free Columbus audit. We will look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};
