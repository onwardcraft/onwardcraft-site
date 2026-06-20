// NASHVILLE — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Nashville's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// NASHVILLE — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Nashville is harder than it looks',
  body:
    "Nashville has been one of the fastest-growing cities in the United States for over a decade. The metro now tops 2 million people, and the population keeps climbing as transplants arrive from the Northeast, Midwest, and coasts — drawn by jobs in healthcare, finance, and the music industry. Those new arrivals are buying homes in Brentwood, Franklin, Nolensville, and Spring Hill and immediately turning to Google to find contractors they've never heard of. That surge in new homeowners is one of the biggest opportunities in the Southeast for any trade business that shows up in search. But the growth has also pulled in dozens of new competitors. There are now two forces shaping Nashville demand. First, Middle Tennessee sits in tornado country: spring storm seasons — especially March through May — can send roofing and restoration demand through the roof overnight, and the contractors already ranking when a storm hits capture most of the work. Second, Nashville summers are long and brutally humid, driving HVAC replacement and repair demand from June through September, while the occasional winter ice storm in January or February causes emergency roof and tree-damage calls. The contractors who get into the Map Pack before those peaks hit are the ones with full calendars.",
  pullQuote: 'Nashville is adding transplants faster than most cities in America — and every one of them needs a contractor they can trust.',
  donut: {
    title: 'Nashville\'s growing market',
    value: 45,
    centerLabel: 'arrived in last decade',
    legend: [
      { label: 'Long-term residents', pct: 55, kind: 'grey' },
      { label: 'Transplants & new arrivals', pct: 45, kind: 'teal' },
    ],
  },
  seasonTitle: 'When trade demand spikes in Nashville',
  seasonCaption: 'Tornado/storm roofing (Mar–May), summer HVAC (Jun–Sep), ice storm emergencies (Jan–Feb)',
  seasonalDemand: [
    { m: 'J', v: 72, peak: true }, { m: 'F', v: 70, peak: true }, { m: 'M', v: 90, peak: true },
    { m: 'A', v: 88, peak: true }, { m: 'M', v: 82, peak: true }, { m: 'J', v: 86, peak: true },
    { m: 'J', v: 92, peak: true }, { m: 'A', v: 90, peak: true }, { m: 'S', v: 78, peak: true },
    { m: 'O', v: 52 }, { m: 'N', v: 48 }, { m: 'D', v: 46 },
  ],
  stats: [
    { value: '2M+', label: 'people across the Nashville metro and growing fast' },
    { value: 'Top 5', label: 'fastest-growing major metros in the US for over a decade', accent: true },
    { value: 'Mar–May', label: 'tornado season, when storm roofing demand can spike overnight' },
    { value: 'Jun–Sep', label: 'peak HVAC demand driven by Nashville\'s long, humid summers' },
  ],
  neighborhoods: [
    'East Nashville', 'Germantown', 'The Gulch', 'Sylvan Park', 'Green Hills',
    'Belle Meade', 'Donelson', 'Brentwood', 'Franklin', 'Nolensville',
    'Spring Hill', 'Hendersonville', 'Mt. Juliet', '12 South', 'Nations',
  ],
};

const AREAS = [
  'East Nashville', 'Germantown', 'The Gulch', 'Sylvan Park', 'Green Hills',
  'Belle Meade', 'Donelson', 'Antioch', 'Brentwood', 'Franklin',
  'Nolensville', 'Spring Hill', 'Hendersonville', 'Mt. Juliet', 'Goodlettsville',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We understand storm-season roofing spikes, Nashville's long humid summers, and the difference between a Germantown bungalow renovation and a new Franklin subdivision build, so everything we build is shaped around how your customers actually search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners three competitors also called.",
  },
  {
    title: 'We actually know Nashville',
    body: "Neighborhood-by-neighborhood targeting from East Nashville to Franklin and Spring Hill, plus the seasonal and storm-driven demand patterns that make this market unique. The stuff a national shop can't do by swapping a city name into a template.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Nashville contractor gets around 1,800 local \"near me\" impressions a month across a handful of neighborhoods. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a booked-out calendar — especially right before a spring storm season or a July heat wave. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Nashville', state: 'Tennessee', stateAbbr: 'TN', metro: 'Nashville',
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const nashvilleLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'nashville', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Nashville Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Search your service in Nashville and three businesses show up on the map. We get you into those three, so the call lands with you. Honest pricing, no lock-in, free audit.',
    eyebrow: 'Local SEO · Nashville, TN',
    h1: 'When Nashville searches for what you do, be the first name they find',
    h2Exact: 'Nashville Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. In a market growing as fast as Nashville — with a wave of transplants buying homes every month — we get you into that top three for your neighborhoods, so the call lands with you instead of whoever ranked first.",
    primaryCta: 'Get my free Nashville audit',
    intro:
      "Nashville local SEO comes down to one thing: when a homeowner in Franklin or East Nashville searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. Nashville is one of the fastest-growing metros in America, and every new transplant arriving from Chicago or New York is Googling contractors they've never heard of. Getting into those three spots in the neighborhoods you serve is the whole game. Here's how you do it.",
    aioQuestion: 'How do Nashville businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Nashville neighborhoods and suburbs. Nashville's explosive growth means new homeowners are constantly searching for contractors they don't know yet — the businesses that show up consistently in East Nashville, Franklin, Brentwood, and Nolensville win that demand. And because storm seasons can spike roofing searches overnight, you need to be ranked before tornado season hits, not after.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks. If you're not one of them, it almost doesn't matter how good your work is — most people never see your name. Getting into that top three for Nashville's neighborhoods is usually the single highest-return move a local contractor can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Nashville homeowner to four contractors, then bill each of you to fight over them. It's a treadmill. Local SEO builds the opposite: a lead finds you, calls you, and nobody else got it. Over time you stop renting and start owning the pipeline." },
      { title: "You're invisible when the storm hits", body: "Nashville is in tornado country. When a major storm rolls through Middle Tennessee, roofing and restoration searches spike overnight. If you're not already ranking when that happens, the contractors who are take all the calls. The Map Pack rewards businesses that were already there — you can't build ranking in a weekend." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Nashville searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes people pick up the phone." },
      { name: 'Neighborhood pages', desc: "Real pages for East Nashville, Franklin, Brentwood, Nolensville, Spring Hill and the rest, so you rank for the neighborhood someone's actually searching, not just \"Nashville.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Nashville sources Google trusts — local press, associations, partners, community organizations. This is what separates page one from page two here." },
      { name: 'Storm season readiness', desc: "We rank you for storm-damage and emergency keywords before tornado season starts, so when Middle Tennessee gets hit, the calls land with you — not the competitor who was already there.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your Nashville neighborhoods and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now over starting later." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Nashville, Brentwood, Franklin, and the surrounding suburbs, plus the on-page work to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses competing across several Nashville neighborhoods and suburbs.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across Nashville and its suburbs.', features: ['Everything in Local Growth', 'Local link building', 'Storm season keyword targeting', 'Multi-area and suburb pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Nashville?', a: "Most Nashville engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. Competitive Nashville keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days in a market this competitive is selling you something." },
      { q: 'What makes Nashville local SEO different?', a: "Two things. Nashville is one of the fastest-growing metros in the country, so there's a constant wave of new homeowners searching for contractors they don't know — that's real opportunity if you're ranking. And it's tornado country, so spring storm seasons can spike roofing and restoration demand overnight. You have to be ranked before that happens, not chasing it after." },
      { q: 'Can you rank me for storm and tornado repair searches?', a: "Yes, and in Nashville that's a major edge. Spring tornado seasons — especially March through May — can send roofing and restoration searches through the roof overnight. We optimize your profile and content for those emergency and storm-damage keywords before the season hits, so the calls land with you when it does." },
      { q: 'Which Nashville areas do you cover?', a: "All the major neighborhoods and suburbs — East Nashville, Germantown, The Gulch, Sylvan Park, Green Hills, Belle Meade, Donelson, Brentwood, Franklin, Nolensville, Spring Hill, Hendersonville, Mt. Juliet, and more. We build genuine neighborhood pages instead of one generic Nashville page, because that's what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand storm-season spikes, summer HVAC demand, and the difference between an East Nashville renovation and a new Franklin build, and we build your local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because the work is coming to you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your Nashville neighborhoods, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'nashville', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Nashville SEO Company | Rank Higher, Get Leads | OnwardCraft',
    metaDescription:
      'Nashville SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in contracts, built for a fast-growing market. Free Nashville SEO audit.',
    eyebrow: 'SEO Services · Nashville, TN',
    h1: 'Get your Nashville business to the top of Google and keep it there',
    h2Exact: 'Nashville SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Nashville customers search and the leads keep coming. Nashville is growing faster than almost any city in America — new homeowners are searching for contractors every day — and we build the ranking that captures them.",
    primaryCta: 'Get my free Nashville SEO audit',
    intro:
      "Nashville SEO comes down to one question: when someone searches what you do, are you on page one or page two? Page two might as well be page fifty. Nashville is adding people and homes at a pace most cities would envy, which means new potential customers are turning to Google constantly. We get contractors ranking for the money keywords in this fast-growing, competitive market — and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Nashville businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content tied to specific Nashville neighborhoods and suburbs, and earning links from trusted local sources. In a market growing as fast as Nashville, two of the quickest ways to pull ahead are tight neighborhood targeting — ranking for Franklin and Brentwood and Nolensville, not just a generic Nashville page — and ranking for the seasonal storm-damage and HVAC terms that spike demand before those seasons hit.",
    problemHeading: "Three reasons your Nashville site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. In a market with this many new competitors arriving every year, if you're not in the top handful of results for what you sell, your site is basically invisible — no matter how good your work is." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost." },
      { title: "You're not ranked when storm season arrives", body: "Nashville sits in Middle Tennessee's tornado corridor. Spring storm seasons can send roofing and restoration searches through the roof overnight, and only the contractors already ranking capture that spike. If your SEO ignores storm-damage and emergency searches, you're leaving your busiest weeks to someone else." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your Nashville customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real Nashville and industry sources. In a competitive market with new businesses entering every year, links are often what separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across your Nashville neighborhoods and suburbs alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Storm & seasonal SEO', desc: "We rank you for storm-damage, tornado repair, and summer HVAC searches before those seasons hit, so you capture the spike instead of watching it go to whoever was already there.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Nashville leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the storm-season and HVAC terms that matter most in Nashville." },
      { name: 'Build authority', desc: "Links and citations from trusted Nashville and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Nashville SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and Nashville suburbs.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Nashville search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Storm & seasonal SEO', 'Multi-location or multi-suburb', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Nashville?', a: "Most Nashville SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Nashville?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter suburb-level terms and slower on the most competitive citywide keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Nashville contractors do best running SEO as the long-term engine and ads for short-term spikes like storm season." },
      { q: 'Should my Nashville SEO target storm and seasonal demand?', a: "Absolutely. Spring tornado seasons in Middle Tennessee can send roofing and restoration searches through the roof overnight. Summer heat waves do the same for HVAC. Ranking takes months to build, so you have to be in place before the season — not chasing it after. We optimize for those terms ahead of time so your busiest weeks land on you." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add storm/seasonal and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which Nashville areas do you cover?', a: "All the major neighborhoods and suburbs — East Nashville, Germantown, The Gulch, Green Hills, Belle Meade, Donelson, Brentwood, Franklin, Nolensville, Spring Hill, Hendersonville, Mt. Juliet, and more — with genuine local pages rather than one generic Nashville page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'nashville', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Nashville Web Design Company | Sites That Convert | OnwardCraft',
    metaDescription:
      'Nashville web design that turns visitors into booked jobs — fast, mobile-first sites built for contractors in a fast-growing, competitive market. Transparent pricing, you own it. Free quote.',
    eyebrow: 'Web Design · Nashville, TN',
    h1: 'Nashville web design that turns visitors into booked jobs',
    h2Exact: 'Nashville Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Nashville contractors fast, mobile-first sites engineered to turn visitors into booked work — and to stand out in a market that's added thousands of new competitors alongside thousands of new homeowners.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Nashville contractor websites lose leads quietly: slow on a phone, buried call button, no clear offer. Web design done right fixes all of that. Nashville is one of the fastest-growing cities in America, and new homeowners from the Northeast and Midwest are Googling local contractors every day. We build sites that load fast, look like the professional you are, and turn Franklin-to-East-Nashville visitors into booked jobs — built to stand out in a market that keeps getting more crowded.",
    aioQuestion: 'What makes a good contractor website in Nashville?',
    aioAnswer:
      "A good Nashville contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific neighborhoods and suburbs you serve. Nashville transplants especially respond to specificity — they don't know local contractors yet and are looking for clear signals that you serve their area and do quality work. Mobile speed and an obvious next step are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next person. Nashville is packed with good contractors, and a new homeowner from Chicago has no idea who to trust — your site has to earn that call quickly." },
      { title: "It's too slow on a phone", body: "Most of your Nashville visitors are on mobile, and they bounce if your site takes more than a few seconds to load. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking." },
      { title: "It doesn't speak to your neighborhood", body: "A homeowner in Franklin wants to see you serve Franklin — not a generic \"Nashville\" page that could be anybody. We build sites that name the neighborhoods and suburbs you work, so visitors trust you're local and Google ranks you for the right searches." },
    ],
    servicesHeading: "What's in an OnwardCraft Nashville website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your neighborhoods, and the jobs you actually want." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your Nashville traffic is. Fast, thumb-friendly, easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that speak to Nashville homeowners — including the transplants who need reassurance they can trust a contractor they've never heard of — and book the job." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Suburb-targeted pages', desc: "Pages built around the Nashville neighborhoods and suburbs you serve — Franklin, Brentwood, Nolensville, East Nashville and more — so you stand out instead of blending into a generic city page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your service area, your best jobs, and your competitors, then map the site around booking more of the work you want across Nashville and its suburbs." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting." },
    ],
    pricing: {
      heading: 'Transparent Nashville web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services and suburbs.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + suburb pages', 'Speed & Core Web Vitals', 'Suburb-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Nashville?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site help me stand out in a growing market?', a: "That's the whole point in Nashville. New homeowners from out of state are searching for contractors they've never heard of — your site has to earn their trust fast. We build around the specific suburbs and neighborhoods you serve, keep the site fast, and put a clear offer and call button front and center, so yours is the site that books the job." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Nashville terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your Nashville traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Nashville site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'nashville', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Nashville Website Redesign | More Leads, No Traffic Loss | OnwardCraft',
    metaDescription:
      'Redesign your Nashville website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs in a fast-growing market. Free audit.',
    eyebrow: 'Website Redesign · Nashville, TN',
    h1: 'Redesign your Nashville website without losing your rankings',
    h2Exact: 'Nashville Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, easy to ignore when a competitor looks sharper. We redesign Nashville contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Nashville contractor sites for speed and conversions, build them to stand out in a market that's grown dramatically more crowded, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Nashville site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "Nashville homeowners — especially transplants making their first call to a local contractor — judge you by your site in seconds. An old, cluttered design quietly sends them to a competitor who looks more established, even when your work is better and you've been in the market longer." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your Nashville visitors before they ever see your offer. A redesign built mobile-first wins them back." },
      { title: "It blends into a crowded market", body: "Nashville has attracted a wave of new contractors alongside its wave of new residents. A generic old site gives a visitor no reason to pick you over the next result. We rebuild for conversions and for the specific neighborhoods you serve, so the right buyers choose you." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your Nashville traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the price of your jobs." },
      { name: 'Suburb-targeted rebuild', desc: "Rebuilt around the Nashville neighborhoods and suburbs you serve — Franklin, Brentwood, Nolensville, East Nashville and more — so the new site stands out in a competitive market instead of reading like everyone else's.", featured: true },
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
      heading: 'Transparent Nashville redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established Nashville contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + suburb pages', 'Suburb-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Nashville?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is hard to update, isn't bringing in leads, or blends into the increasingly crowded Nashville market, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the redesign help me compete in Nashville?', a: "Yes, and that's the point in a market this competitive. Nashville has grown fast — and so has the number of contractors fighting for the same homeowners. We rebuild around the specific suburbs and neighborhoods you serve, keep the site fast, and make the offer and call button obvious, so the new site stands out instead of reading like every other contractor's." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const nashvilleCity = {
  citySlug: 'nashville', city: 'Nashville', state: 'Tennessee', stateAbbr: 'TN', metro: 'Nashville',

  titleTag: 'Nashville Marketing for Contractors | Web, SEO & Leads | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Nashville contractors. Get found, get booked, and own your leads instead of renting them — built for a fast-growing market. Free Nashville audit.',

  eyebrow: 'Nashville · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Nashville contractors found and booked',
  h2Exact: 'Nashville Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Nashville's fast-growing, competitive market. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Nashville audit',

  intro:
    "If you run a contracting business in Nashville, you're operating in one of the fastest-growing markets in America. Thousands of transplants arrive every month, buy homes in Franklin, Brentwood, Nolensville, and East Nashville, and immediately Google contractors they've never heard of. That's an enormous opportunity — but Nashville has also attracted a wave of competitors alongside those new residents. Winning here takes three things working together: a site that converts those new homeowners, SEO that ranks you for what they search, and local SEO that puts you in the Map Pack across the suburbs and neighborhoods you serve. Here's how we help Nashville contractors do exactly that.",
  aioQuestion: 'How do Nashville contractors get more leads online?',
  aioAnswer:
    "Nashville contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack neighborhood by neighborhood. Nashville's Sun Belt growth means a steady stream of new homeowners searching for contractors they don't know — the businesses already ranking in Franklin, Brentwood, East Nashville, and Nolensville capture that demand. And because storm seasons can spike roofing searches overnight, contractors who are already in the Map Pack when a tornado hits win the most storm work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Nashville searches \"near me.\" The single highest-return move for most local contractors — done neighborhood by neighborhood, suburb by suburb.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search, build an asset you own instead of renting traffic from ads, and measure it in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs — and to earn the trust of Nashville transplants who don't know local contractors yet — not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it carefully so you keep every bit of ranking you've already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Nashville?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads in a market that's getting more competitive every year." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors — so we understand storm-season spikes, Nashville's long humid summers, and the difference between a Germantown renovation and a new Nolensville build." },
    { q: 'Why does the Nashville market need a different approach?', a: "Nashville is one of the fastest-growing metros in the country, which means a constant wave of new homeowners searching for contractors they don't know yet. It also sits in tornado country, where spring storm seasons can spike roofing demand overnight. You need to be ranked before those moments, not after." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Nashville areas do you serve?', a: "All the major neighborhoods and suburbs — East Nashville, Germantown, The Gulch, Sylvan Park, Green Hills, Belle Meade, Donelson, Brentwood, Franklin, Nolensville, Spring Hill, Hendersonville, Mt. Juliet, and more." },
    { q: 'Where should I start?', a: "Start with a free Nashville audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};
