// COLUMBUS — per-metro × per-service local landing pages + city hub.
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
// COLUMBUS — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Columbus is harder than it looks',
  body:
    "Columbus is one of the fastest-growing metros in the Midwest — pushing 900,000 people in the city proper and nearly 2.1 million across the metro — and the homeowner market is genuinely different depending on where you look. Intel's chip fab in New Albany, the Nationwide and Chase campuses downtown, and a wave of Amazon logistics operations have pushed well-paid homeowners into the suburbs: Dublin, Westerville, Powell, New Albany, Gahanna, Hilliard, Grove City. Those suburbs have dense, newer housing stock and homeowners who search online first and expect a professional web presence before they'll call. Meanwhile, the older neighborhoods inside the city — German Village, Short North, Clintonville, Victorian Village — are full of 1900s-to-1950s homes that need continuous maintenance, and owners there are deeply loyal to contractors who demonstrate local expertise. The seasonal pattern here is real: Ohio winters bring ice storms, heavy freeze-thaw cycles, and roof damage; spring drops tornadoes and severe storms that flood basements and tear off shingles; July and August push AC calls as hard as anywhere in the Midwest. The contractor who is already in the Map Pack when a storm rolls through gets the calls. The one still building their profile gets nothing.",
  pullQuote: 'In a metro growing this fast, the contractor already ranking when the next storm hits owns the work.',
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
  seasonCaption: 'Winter storm/HVAC (Nov–Mar), spring flooding (Mar–May), summer AC (Jul–Aug)',
  seasonalDemand: [
    { m: 'J', v: 88, peak: true }, { m: 'F', v: 85, peak: true }, { m: 'M', v: 80, peak: true },
    { m: 'A', v: 78, peak: true }, { m: 'M', v: 62 }, { m: 'J', v: 58 },
    { m: 'J', v: 84, peak: true }, { m: 'A', v: 82, peak: true }, { m: 'S', v: 55 },
    { m: 'O', v: 52 }, { m: 'N', v: 72, peak: true }, { m: 'D', v: 86, peak: true },
  ],
  stats: [
    { value: '2.1M', label: 'people across the Columbus metro and growing' },
    { value: 'Nov–Mar', label: 'winter storm and heating season, when roofing and HVAC calls spike', accent: true },
    { value: 'Intel + Chase', label: 'major employers driving suburb homeowner demand in New Albany, Dublin, and Westerville' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks' },
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
  "I started OnwardCraft because I kept watching solid contractors hand Angi and HomeAdvisor a chunk of their budget every month for leads three of their competitors also bought. That's not a pipeline — that's a treadmill. Columbus is growing fast, the suburbs are full of homeowners who search online before they call anyone, and the seasonal demand swings are real. The contractors already ranking when a storm rolls through or summer heat spikes get the work. The ones still building their profile get nothing. That's what we fix — get you owning your search presence, your leads, and your calendar. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We understand winter storm emergencies in Dublin, freeze-thaw foundation work in German Village, and spring flooding calls in Clintonville — so everything we build is shaped around how Columbus homeowners actually search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for the same homeowner your three competitors also paid for.",
  },
  {
    title: 'We actually know Columbus',
    body: "Suburb by suburb, neighborhood by neighborhood — from the Intel corridor in New Albany to the older housing stock in German Village. The difference between a contractor who ranks in Powell and one who ranks in Clintonville is real targeting, not just swapping a city name into a template.",
  },
  {
    title: 'No contracts, no mystery',
    body: "Published prices, reporting tied to leads, month-to-month after 90 days. If we're not earning it, you leave. That keeps the pressure where it belongs: on us.",
  },
];

const PROOF = {
  heading: "We're new, so here's the honest math instead of a logo wall",
  body:
    "Plenty of agencies will show you a grid of client logos. We're a young, founder-led shop, so we won't pretend to a track record we don't have yet. What we can show you is why this works — straight from Google's and the industry's own research on how people search locally.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Columbus contractor gets around 1,500 local \"near me\" impressions a month across a handful of suburbs and neighborhoods. Moving from page-two invisibility into the top three is the difference between a quiet phone and a booked-out calendar — especially during the storm and heating seasons when every missed call is a missed job. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
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
    titleTag: 'Columbus Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Search your service in Columbus and three businesses show up on the map. We get you into those three — in Dublin, Westerville, German Village, and beyond.',
    eyebrow: 'Local SEO · Columbus, OH',
    h1: 'When Columbus searches for what you do, be the first name they find',
    h2Exact: 'Columbus Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. In a metro growing as fast as Columbus — from Dublin to German Village — we get you into that top three for the suburbs and neighborhoods you serve, so the call lands with you instead of whoever ranked first.",
    primaryCta: 'Get my free Columbus audit',
    intro:
      "Columbus local SEO comes down to one thing: when a homeowner in Dublin or Clintonville searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. The metro is growing fast, the suburbs are full of well-paid homeowners who search online before calling, and the seasonal demand swings — winter storms, spring flooding, summer heat — create spikes that reward contractors already ranking. Here's how you get there.",
    aioQuestion: 'How do Columbus businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and areas you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to the Columbus suburbs and neighborhoods you actually serve. Because demand spikes hard around winter storms (Nov–Mar) and spring flooding (Mar–May), contractors who build their Map Pack presence before storm season arrives capture those calls; those who haven't are invisible when it counts most.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks. If you're not one of them — whether someone's searching in Powell or German Village — it almost doesn't matter how good your work is. Most people never scroll further. Getting into that top three for the suburbs and neighborhoods you serve is usually the single highest-return move a Columbus contractor can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Columbus homeowner to multiple contractors, then bill each of you to compete for the job. It's a treadmill. Local SEO builds the opposite: a homeowner finds you, calls you, and nobody else got that lead. Over time you stop renting and start owning your pipeline." },
      { title: "You're not ready when storm season hits", body: "Columbus winters bring ice storms and freeze-thaw cycles. Spring drops tornadoes and flooding. When a storm rolls through, searches for roofing, HVAC, and water damage spike overnight. The contractors already ranking get those calls. Building Map Pack presence takes months — you have to be in place before the season, not scrambling after the storm has passed." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Columbus searches you should win — whether that's Dublin roofing or Clintonville plumbing." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes homeowners pick up the phone." },
      { name: 'Neighborhood and suburb pages', desc: "Real pages for Dublin, Westerville, German Village, Clintonville, New Albany, and the rest — so you rank for the area someone's actually searching, not just \"Columbus.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Columbus-area sources Google trusts — local press, trade associations, community organizations. This is what separates page one from page two here." },
      { name: 'Seasonal storm and HVAC SEO', desc: "We optimize your profile and pages for the winter roofing, heating, and freeze damage searches that spike Nov–Mar and the spring flooding and storm repair searches that spike Mar–May — so you're visible when demand is highest.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your Columbus suburbs and neighborhoods and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now over starting later — especially before storm season." },
      { name: 'Add local content', desc: "Suburb and neighborhood pages across the Columbus metro, plus the on-page work to back them up." },
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
      { q: 'How much does local SEO cost in Columbus?', a: "Most Columbus engagements land between $750 and $2,500 a month, depending on how many suburbs and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The competitive Columbus suburb keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days is selling you something." },
      { q: 'What makes Columbus local SEO different from bigger markets?', a: "Two things. The market splits sharply between the suburbs — Dublin, Westerville, New Albany, Powell — where Intel and major employers have driven homeowner demand, and the older city neighborhoods like German Village and Clintonville where older homes need ongoing maintenance. You need to rank specifically for where you work, not just 'Columbus.' And storm seasonality here is real: contractors who are already in the Map Pack when a winter storm or spring flooding hits get the work. Those who aren't miss the spikes entirely." },
      { q: 'Should I optimize for the suburbs or the city neighborhoods?', a: "Wherever you do your best work. The suburbs (Dublin, Westerville, Powell, New Albany) have dense homeowner demand from the tech and finance economy. The older city neighborhoods (German Village, Clintonville, Short North) have lots of pre-1950s homes with ongoing maintenance needs. We build suburb and neighborhood pages for the areas you actually serve, not one generic Columbus page." },
      { q: 'Which areas do you cover?', a: "All the major Columbus suburbs and city neighborhoods — Dublin, Westerville, Powell, New Albany, Gahanna, Hilliard, Grove City, Upper Arlington, Bexley, Short North, German Village, Clintonville, Victorian Village, Italian Village, Worthington, and more. We build genuine local pages rather than one generic Columbus page." },
      { q: 'How does storm season affect my local SEO?', a: "Columbus winters bring ice storms, heavy snow, and freeze-thaw cycles that damage roofs, HVAC systems, and foundations. Spring brings tornadoes and flooding. When a storm hits, emergency searches spike and the top three Map Pack results get flooded with calls. If you're not already ranking, you're invisible. We build your Map Pack presence before the season so you capture those calls when they matter most." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand freeze-thaw foundation damage, storm roofing emergencies, and basement flooding work, and we build your local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your Columbus suburbs and neighborhoods, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'columbus', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Columbus SEO Company | Rank Higher, Get Leads | OnwardCraft',
    metaDescription:
      'Columbus SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in contracts, built for a fast-growing metro.',
    eyebrow: 'SEO Services · Columbus, OH',
    h1: 'Get your Columbus business to the top of Google and keep it there',
    h2Exact: 'Columbus SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Columbus customers search and the leads keep coming. We build that ranking and tie every report to actual calls and jobs — in a metro that's growing fast and rewarding contractors who show up first.",
    primaryCta: 'Get my free Columbus SEO audit',
    intro:
      "Columbus SEO comes down to one question: when a homeowner in Westerville or German Village searches your service, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords across one of the Midwest's fastest-growing metros — and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Columbus businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content tied to specific Columbus suburbs and neighborhoods, and earning links from trusted local sources. In Columbus, two of the quickest ways to pull ahead are tight suburb-level targeting — Dublin versus Clintonville versus New Albany are genuinely different markets — and ranking for the seasonal storm repair and HVAC terms that spike hard in winter and spring before demand actually arrives.",
    problemHeading: "Three reasons your Columbus site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google. In a metro growing as fast as Columbus, with more contractors entering the market every year, if you're not in the top handful of results for what you sell, your site is basically invisible — no matter how good your work is." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost of pay-per-click." },
      { title: "You're not ranking for the seasonal demand that matters", body: "Columbus winters bring roofing, HVAC, and pipe-burst calls that spike hard Nov–Mar. Spring flooding and storm damage drive another wave Mar–May. The contractors who rank for those searches before the season hits capture the spike. If your SEO ignores seasonal and emergency terms, you're leaving your busiest weeks on the table." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms Columbus homeowners search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real Columbus-area and industry sources. Links are often what separate page one from page two in a growing market." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across Columbus suburbs and neighborhoods alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Seasonal & storm SEO', desc: "We rank you for the winter storm, roofing, HVAC, and spring flooding terms before the season hits, so you capture those calls instead of scrambling after the weather has already passed.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Columbus leads — including the seasonal terms that spike before you're ready if you wait too long." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the seasonal and emergency terms that matter most in Columbus." },
      { name: 'Build authority', desc: "Links and citations from trusted Columbus and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
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
      { q: 'How long does SEO take to work in Columbus?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter suburb-level terms and slower on the most competitive Columbus-wide keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads for Columbus contractors?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most contractors do best running SEO as the long-term engine and ads for short-term demand spikes." },
      { q: 'Should my Columbus SEO target seasonal demand?', a: "Absolutely. Columbus winters bring ice storms and freeze-thaw cycles that spike roofing, HVAC, and pipe-burst searches hard from Nov–Mar. Spring flooding and storm damage drive another surge Mar–May. Ranking takes months to build, so you need to be in place before the season arrives, not chasing it after. We optimize for those seasonal and emergency terms ahead of time." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal storm SEO and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which Columbus suburbs and neighborhoods do you cover?', a: "All the major ones — Dublin, Westerville, Powell, New Albany, Gahanna, Hilliard, Grove City, Upper Arlington, Bexley, Short North, German Village, Clintonville, Victorian Village, and more — with genuine local pages rather than one generic Columbus page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying lead brokers for shared leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your Columbus competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'columbus', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Columbus Web Design Company | OnwardCraft',
    metaDescription:
      'Columbus web design that turns visitors into booked jobs — fast, mobile-first sites built for contractors across Dublin, German Village, Westerville, and.',
    eyebrow: 'Web Design · Columbus, OH',
    h1: 'Columbus web design that turns visitors into booked jobs',
    h2Exact: 'Columbus Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Columbus contractors fast, mobile-first sites engineered to turn visitors into booked work — and to stand out in a metro that's growing fast and where homeowners expect a professional presence before they'll pick up the phone.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Columbus contractor websites lose leads quietly: slow on a phone, buried call button, no clear offer for the suburb someone's actually searching from. Web design done right fixes all of that. We build sites that load fast, look like the professional you are, and turn Dublin-to-German-Village visitors into booked jobs — built to win in a metro where the competition is growing as fast as the population.",
    aioQuestion: 'What makes a good contractor website in Columbus?',
    aioAnswer:
      "A good Columbus contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific suburbs and neighborhoods you serve. Because the Columbus homeowner market splits sharply between the growing tech-economy suburbs (Dublin, New Albany, Westerville) and the older city neighborhoods (German Village, Clintonville), a site that speaks to where you work and what problems you solve — including storm and winter damage — converts far better than a generic contractor template.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next contractor in Dublin or Westerville. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Columbus visitors are on mobile, and they bounce if your site takes more than a few seconds to load. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking." },
      { title: "It doesn't speak to your neighborhoods", body: "A homeowner in Powell wants to see you serve Powell — not a generic Columbus page that could be anybody. We build sites that name the suburbs and neighborhoods you work, so visitors trust you're local and Google ranks you for the right searches." },
    ],
    servicesHeading: "What's in an OnwardCraft Columbus website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your Columbus suburbs, and the jobs you actually want." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where the majority of your Columbus traffic is. Fast, thumb-friendly, easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that speak to Columbus homeowners — whether they're dealing with a storm-damaged roof in Westerville or a leaky foundation in German Village — not filler text that reads like everyone else." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and suburb-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Suburb-targeted pages', desc: "Pages built around the Columbus suburbs and neighborhoods you serve — Dublin, Westerville, New Albany, German Village, Clintonville, and more — so you stand out instead of blending into one generic city page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your Columbus suburbs, your best jobs, and your competitors, then map the site around booking more of the work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting." },
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
      { q: 'How much does a website cost in Columbus?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site help me stand out in Columbus?', a: "That's the whole point. Columbus homeowners — especially in the suburbs where the tech and finance economy has landed — research contractors online before they call. We build around the specific suburbs and neighborhoods you serve, keep the site fast, and put a clear offer and call button front and center, so yours is the one that books the job." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and suburb-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Columbus terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where the majority of your Columbus traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Columbus contractor site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'columbus', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Columbus Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your Columbus website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs across Dublin, Westerville.',
    eyebrow: 'Website Redesign · Columbus, OH',
    h1: 'Redesign your Columbus website without losing your rankings',
    h2Exact: 'Columbus Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, easy to ignore. We redesign Columbus contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned across your suburbs and neighborhoods.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Columbus contractor sites for speed and conversions, build them to stand out in a fast-growing metro, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one — and in Columbus that means better suburb targeting too.",
    problemHeading: "Signs your Columbus site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "Columbus homeowners — especially in the growing tech-economy suburbs like Dublin, New Albany, and Westerville — judge you by your site in seconds. An old, cluttered design quietly sends them to a competitor who looks more established, even when your work is better. The stakes are only rising as more well-paid homeowners arrive in those suburbs." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your Columbus visitors before they ever see your offer. A redesign built mobile-first wins them back and recovers those lost leads." },
      { title: "It doesn't speak to your neighborhoods", body: "Traffic that doesn't turn into calls is wasted. A generic old site gives a visitor no reason to pick you over the next contractor in Dublin or Clintonville. We rebuild for conversions and for the suburbs you actually serve, so the right buyers choose you." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned across your Columbus suburbs." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where the majority of your Columbus traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the expectations of homeowners in a growing metro." },
      { name: 'Suburb-targeted rebuild', desc: "Rebuilt around the Columbus suburbs and neighborhoods you serve — so the new site stands out in a growing market instead of reading like a generic contractor page.", featured: true },
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
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is hard to update, isn't bringing in leads, or fails to speak to the Columbus suburbs and neighborhoods you serve, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the redesign help me compete in Columbus?', a: "Yes, and that's the point in a metro growing this fast. The new wave of homeowners coming into Dublin, New Albany, and Westerville with the Intel and finance economy are used to researching contractors online. We rebuild around the specific suburbs and neighborhoods you serve, keep the site fast, and make the offer and call button obvious — so the new site stands out instead of reading like every other contractor's." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const columbusCity = {
  citySlug: 'columbus', city: 'Columbus', state: 'Ohio', stateAbbr: 'OH', metro: 'Columbus',

  titleTag: 'Columbus Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Columbus contractors. Get found, get booked, and own your leads — built for a fast-growing metro from Dublin to German.',

  eyebrow: 'Columbus · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Columbus contractors found and booked',
  h2Exact: 'Columbus Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Columbus — from the Intel-economy suburbs in Dublin and New Albany to the older neighborhoods of German Village and Clintonville. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Suburb-by-suburb targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Columbus audit',

  intro:
    "If you run a contracting business in Columbus, you're fighting for attention in one of the fastest-growing metros in the Midwest — and the homeowner market here is genuinely different depending on where you look. The suburbs like Dublin, Westerville, Powell, and New Albany have a wave of well-paid homeowners from the Intel, Chase, and Nationwide economy who research contractors online before they call anyone. The older neighborhoods inside the city — German Village, Short North, Clintonville — have 1900s-to-1950s homes that need continuous maintenance and owners who are loyal to contractors with real local expertise. And storm seasonality is real: Columbus winters bring ice storms and freeze-thaw damage; spring drops flooding and severe weather. Winning here takes three things working together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack for the suburbs and neighborhoods you actually serve.",
  aioQuestion: 'How do Columbus contractors get more leads online?',
  aioAnswer:
    "Columbus contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack suburb by suburb and neighborhood by neighborhood. Because the Columbus market splits sharply between the growing tech-economy suburbs and the older city neighborhoods — and because storm seasonality drives hard demand swings Nov–May — the contractors who rank specifically for where they work and for the seasonal searches that matter most book the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Columbus searches \"near me.\" The single highest-return move for most local contractors — done tight, suburb by suburb, neighborhood by neighborhood.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search, build an asset you own instead of renting traffic from ads, and measure it in leads — not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs — built for a metro where well-paid homeowners research contractors online before they call.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it carefully so you keep every bit of ranking you've already earned across your Columbus suburbs.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Columbus?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads in a fast-growing market." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors — so we understand winter storm emergencies, freeze-thaw foundation work, spring flooding calls, and the difference between serving an older German Village home and a new Dublin build." },
    { q: 'Why does the Columbus market need a local approach?', a: "Because it splits sharply between the growing tech-economy suburbs (Dublin, Westerville, New Albany, Powell) where homeowners research everything online, and the older city neighborhoods (German Village, Clintonville, Short North) where pre-1950s homes need ongoing specialty work. Generic templates don't win either market. And storm seasonality drives real demand spikes — contractors who are already ranking when a winter storm or spring flood hits get the calls." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Columbus areas do you serve?', a: "All the major suburbs and city neighborhoods — Dublin, Westerville, Powell, New Albany, Gahanna, Hilliard, Grove City, Upper Arlington, Bexley, Short North, German Village, Clintonville, Victorian Village, Italian Village, Worthington, and more." },
    { q: 'Where should I start?', a: "Start with a free Columbus audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};
