// EL PASO — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across El Paso's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// EL PASO — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in El Paso is a different kind of opportunity',
  body:
    "El Paso is one of the most distinctly Hispanic major cities in the United States — roughly 82% of residents identify as Hispanic or Latino, and Spanish-language search is the dominant mode for a huge share of the market. That single fact shapes everything. A contractor who shows up when an El Paso homeowner searches in Spanish — and most won't even think to try in English first — is reaching a massive pool of demand that virtually no competitor is targeting. Add Fort Bliss, one of the largest Army installations in the country, which turns over thousands of military families every year through PCS moves, and you have a market full of newcomers who don't know anyone locally and rely entirely on online search to find a contractor. Desert climate creates its own demand rhythms: HVAC is not a seasonal luxury here — when summer temperatures routinely hit 105°F or above, an air conditioner failure is a health emergency and the phones don't stop ringing from May through September. Flat roofs, parapet walls, stucco exteriors, swamp coolers, and desert landscaping round out a trade environment unlike anything on the coasts. The contractors who own El Paso's search visibility — in both languages — own a market most agencies have no idea how to reach.",
  pullQuote: 'In El Paso, the contractor who shows up in Spanish is talking to a market their competitors can\'t even see.',
  donut: {
    title: 'How El Paso searches',
    value: 82,
    centerLabel: 'Hispanic residents',
    legend: [
      { label: 'Hispanic / Spanish-language searches dominant', pct: 82, kind: 'teal' },
      { label: 'Other', pct: 18, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'HVAC dominates May–Sep; monsoon roof damage Jul–Sep; rare heating emergencies Dec–Feb',
  seasonalDemand: [
    { m: 'J', v: 42, peak: false }, { m: 'F', v: 40, peak: false }, { m: 'M', v: 55 },
    { m: 'A', v: 68 }, { m: 'M', v: 88, peak: true }, { m: 'J', v: 98, peak: true },
    { m: 'J', v: 100, peak: true }, { m: 'A', v: 98, peak: true }, { m: 'S', v: 80, peak: true },
    { m: 'O', v: 52 }, { m: 'N', v: 44 }, { m: 'D', v: 45 },
  ],
  stats: [
    { value: '~82%', label: 'of El Paso residents identify as Hispanic — Spanish-language search is the dominant edge', accent: true },
    { value: '105°F+', label: 'summer highs that make HVAC the single highest-demand trade in the city' },
    { value: 'Fort Bliss', label: 'constant PCS cycle of new military homeowners who search online immediately' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks in every El Paso neighborhood' },
  ],
  neighborhoods: [
    'Kern Place', 'Mission Hills', 'Mesa Hills', 'Northeast El Paso', 'Far East El Paso',
    'Horizon City', 'Socorro', 'Anthony', 'Sunland Park', 'Fort Bliss area',
    'Westside', 'Central El Paso',
  ],
};

const AREAS = [
  'Kern Place', 'Mission Hills', 'Mesa Hills', 'Northeast El Paso', 'Far East El Paso',
  'Horizon City', 'Socorro', 'Anthony', 'Sunland Park', 'Fort Bliss area',
  'Westside', 'Central El Paso', 'East El Paso', 'Upper Valley', 'Lower Valley',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. In El Paso that problem is even sharper — the city's biggest competitive advantage, Spanish-language search, is one that almost no marketing agency is set up to use. So that's what we do: get you ranking in the searches your customers actually run, in the language they actually use, in the neighborhoods you actually serve. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We understand 105-degree HVAC emergencies, flat-roof monsoon damage, stucco and swamp-cooler work, and the Fort Bliss PCS rush, so everything we build is shaped around how El Paso customers really search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners three competitors also called.",
  },
  {
    title: 'We actually speak El Paso — in both languages',
    body: "Neighborhood-by-neighborhood targeting from Kern Place to Socorro, plus genuine Spanish-language search reach to win the demand most agencies can't even see. The stuff a national shop can't do by swapping a city name into a template.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say an El Paso contractor gets around 1,500 local \"near me\" impressions a month across a handful of neighborhoods. Moving from page-two invisibility into the top three is the difference between a quiet phone and a booked-out summer — and during the 105-degree peak weeks, that gap is the whole business. In your free audit, we model the real numbers for your trade — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'El Paso', state: 'Texas', stateAbbr: 'TX', metro: 'El Paso',
  heroProof: ['Built for the trades', 'Spanish-language search reach', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const elPasoLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'el-paso', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'El Paso Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Search your service in El Paso and three businesses show up on the map. We get you into those three — in English and Spanish — so the call lands with you. Free audit.',
    eyebrow: 'Local SEO · El Paso, TX',
    h1: 'When El Paso searches for what you do, be the first name they find',
    h2Exact: 'El Paso Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. In a city where 82% of residents are Hispanic and Spanish-language search is the norm, we get you into that top three for your neighborhoods — in both languages — so the call lands with you instead of whoever ranked first.",
    primaryCta: 'Get my free El Paso audit',
    intro:
      "El Paso local SEO comes down to one thing: when a homeowner in Kern Place or Socorro searches your service plus \"cerca de mí\" or \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. This is one of the most Hispanic major cities in the country, and Spanish-language search is the dominant mode for a huge share of the market — becoming one of those three pins in the neighborhoods you serve, in both languages, is the whole game. Here's how you do it.",
    aioQuestion: 'How do El Paso businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real El Paso neighborhoods. El Paso is overwhelmingly Hispanic, so the biggest edge is showing up in Spanish-language searches — the demand that almost no competitor is targeting. Seasonal HVAC optimization for the May-through-September heat is the other major lever for most trades.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks. If you're not one of them, it almost doesn't matter how good your work is — most people never see your name. Getting into that top three for your El Paso neighborhoods is usually the single highest-return move a local contractor can make." },
      { title: "You're invisible in Spanish — and that's most of the market", body: "Roughly 82% of El Paso residents are Hispanic, and a huge share search in Spanish or in a mix of both languages. Almost no contractor does anything to show up for those searches, which means that demand sits unclaimed, day after day. Showing up for what your customers actually type is the competitive edge El Paso offers that most cities don't." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same El Paso homeowner to four contractors and bill each of you to fight over them. Local SEO builds the opposite: a homeowner finds you directly, calls you, and nobody else got that lead. Over time you stop renting and start owning your pipeline." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which El Paso searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews — in English and Spanish. It lifts your ranking and makes people pick up the phone." },
      { name: 'Neighborhood pages', desc: "Real pages for Kern Place, Mission Hills, Socorro, Horizon City, and the rest, so you rank for the neighborhood someone's actually searching, not just \"El Paso.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from El Paso sources Google trusts — local press, chambers, trade associations, partners. This is what separates page one from page two here." },
      { name: 'Spanish-language search reach', desc: "82% of El Paso is Hispanic and a huge share searches in Spanish. We help you show up for that demand — the single biggest competitive edge in the market that almost no agency provides.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your El Paso neighborhoods and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live in both English and Spanish. These compound week over week, which is why local SEO rewards starting now over starting later." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across El Paso's communities, plus the on-page work to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several El Paso neighborhoods.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across El Paso.', features: ['Everything in Local Growth', 'Local link building', 'Spanish-language search targeting', 'Multi-neighborhood and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in El Paso?', a: "Most El Paso engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The competitive El Paso keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days is selling you something." },
      { q: 'What makes El Paso local SEO different?', a: "Two things set El Paso apart. First, roughly 82% of residents are Hispanic, and a huge share search in Spanish — the contractor who shows up for those searches is reaching a market virtually no competitor is targeting. Second, summer HVAC demand is unlike almost any other city: 105-degree heat makes AC failure a health emergency, and the phones ring hard from May through September." },
      { q: 'Can you help me reach Spanish-speaking customers?', a: "Yes, and in El Paso that's the single biggest edge. We optimize your Google Business Profile and content so you show up for Spanish-language searches across every neighborhood — the demand most El Paso contractors are completely invisible to." },
      { q: 'Does Fort Bliss affect how I should do local SEO?', a: "It does, and it's a real opportunity. Fort Bliss turns over thousands of military families every year through PCS moves. Those homeowners are new to the city, don't know anyone locally, and rely entirely on online search to find contractors. Being visible in the Fort Bliss area neighborhoods means catching that constant stream of new customers." },
      { q: 'Which areas do you cover?', a: "All of El Paso's neighborhoods — Kern Place, Mission Hills, Mesa Hills, Northeast, Far East, Horizon City, Socorro, Anthony, Sunland Park, the Fort Bliss area, Westside, and Central El Paso. We build genuine neighborhood pages instead of one generic city page, because that's what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand El Paso's desert-specific trades — flat roofs, stucco, swamp coolers, HVAC emergencies — and we build your local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your El Paso neighborhoods, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'el-paso', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'El Paso SEO Company | Rank Higher, Get Leads | OnwardCraft',
    metaDescription:
      'El Paso SEO that ranks contractors on Google in English and Spanish — and brings in leads you own. Revenue-tied reporting, no lock-in contracts. Free El Paso SEO audit.',
    eyebrow: 'SEO Services · El Paso, TX',
    h1: 'Get your El Paso business to the top of Google and keep it there',
    h2Exact: 'El Paso SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your El Paso customers search — in English and Spanish — and the leads keep coming. We build that ranking and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free El Paso SEO audit',
    intro:
      "El Paso SEO comes down to one question: when someone searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in a bilingual, desert-climate market — and we measure it in leads, not vanity traffic. The Spanish-language angle alone opens a pool of demand most agencies have never even mapped.",
    aioQuestion: 'How do El Paso businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search — including Spanish-language terms — publishing genuinely useful local content tied to specific El Paso neighborhoods, and earning links from trusted local sources. In El Paso, Spanish-language keyword targeting and seasonal HVAC content for the May-through-September heat peak are two of the quickest ways to pull ahead of competitors who are ignoring both.",
    problemHeading: "Three reasons your El Paso site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. If you're not in the top handful of results for what you sell, your site is effectively invisible — no matter how good your work is or how many jobs you've done." },
      { title: "You're invisible in the Spanish-language search market", body: "Roughly 82% of El Paso residents are Hispanic, and a large share search in Spanish or a mix of both languages. Most contractors have no Spanish-language presence at all, which means that demand goes entirely to whoever bothered to show up. It's the closest thing to free money in local SEO." },
      { title: "You're not ranking for the HVAC and seasonal terms that matter most", body: "El Paso's demand swings are extreme: HVAC dominates from May through September when temperatures hit 105°F or above, and flat-roof monsoon damage peaks July through September. The contractors who rank for those terms ahead of the season catch the spike. If your SEO ignores that cycle, you're leaving your busiest weeks on the table." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your El Paso customers search — titles, headings, content, and internal links — in English and Spanish." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real El Paso and industry sources. In a market where most competitors have thin link profiles, this is often what moves you to page one." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across your neighborhoods alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Spanish-language & bilingual SEO', desc: "We research and target the Spanish-language terms El Paso homeowners actually search, unlocking a pool of demand virtually no competitor is going after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors — in both English and Spanish — then build a roadmap around the keywords most likely to drive real El Paso leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the HVAC and seasonal terms that matter most in a desert climate." },
      { name: 'Build authority', desc: "Links and citations from trusted El Paso and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent El Paso SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own El Paso search in both languages.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Spanish-language SEO', 'Seasonal & emergency HVAC SEO', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in El Paso?', a: "Most El Paso SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in El Paso?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter neighborhood terms and slower on the most competitive citywide keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most contractors do best running SEO as the long-term engine and ads for short-term spikes like the summer HVAC season." },
      { q: 'Should my El Paso SEO target Spanish-language searches?', a: "Yes, and it's the biggest competitive gap in the market. Roughly 82% of El Paso residents are Hispanic, many search in Spanish, and almost no local contractor has any Spanish-language presence. We research the exact terms your customers use and target them — it's often the fastest way to add incremental leads." },
      { q: 'Should I target seasonal HVAC demand?', a: "Absolutely. When temperatures hit 105°F in July, HVAC searches spike and the phones don't stop. Ranking takes months to build, so you have to be in place before summer, not chasing it. We optimize for those peak-demand terms so your busiest season lands on you, not your competitors." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add Spanish-language SEO, seasonal/emergency HVAC, and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which areas around El Paso do you cover?', a: "All of El Paso's neighborhoods — Kern Place, Mission Hills, Mesa Hills, Northeast, Far East, Horizon City, Socorro, Anthony, Sunland Park, the Fort Bliss area, Westside, and Central El Paso — with genuine local pages rather than one generic city page." },
      { q: "What's in the free SEO audit?", a: "Where you rank today in both English and Spanish, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'el-paso', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'El Paso Web Design Company | Sites That Convert | OnwardCraft',
    metaDescription:
      'El Paso web design that turns visitors into booked jobs — fast, mobile-first sites built for a bilingual, desert-climate market. Transparent pricing, you own it. Free quote.',
    eyebrow: 'Web Design · El Paso, TX',
    h1: 'El Paso web design that turns visitors into booked jobs',
    h2Exact: 'El Paso Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build El Paso contractors fast, mobile-first sites engineered to turn visitors into booked work — in English and Spanish — and to stand out in a market where the right language is the biggest competitive edge.",
    primaryCta: 'Get my free quote',
    intro:
      "Most El Paso contractor websites lose leads quietly: slow on a phone, buried call button, no clear offer, and zero presence in Spanish. Web design done right fixes all of that. We build sites that load fast, look like the professional you are, and turn visitors from Kern Place to Socorro into booked jobs — ready to reach the bilingual market most competitors are ignoring entirely.",
    aioQuestion: 'What makes a good contractor website in El Paso?',
    aioAnswer:
      "A good El Paso contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific neighborhoods you serve. Because El Paso is overwhelmingly Hispanic and a large share of homeowners search in Spanish, a site that speaks to that audience — in language and in local feel — is what separates a contractor who books jobs from one who blends into the background.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next guy. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your El Paso visitors are on mobile. They bounce if your site takes more than a few seconds to load, and slow sites rank worse too. We build fast so you keep the visitor and the ranking." },
      { title: "It doesn't speak to El Paso's community", body: "An El Paso homeowner — especially one who searches in Spanish — wants to feel that you're local, you understand the community, and you know the desert. A generic site that could be anyone, anywhere, gives them no reason to trust you. We build sites that feel like El Paso and speak to the people who live here." },
    ],
    servicesHeading: "What's in an OnwardCraft El Paso website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your neighborhoods, and the jobs you actually want." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your El Paso traffic is. Fast, thumb-friendly, easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that speak to El Paso homeowners and book the job — including value-conscious framing that resonates in this market." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Spanish-language ready', desc: "Built so you can speak to El Paso's dominant audience — bilingual content, Spanish-language keywords in the structure, and a tone that resonates with the community.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your neighborhoods, your best jobs, and your competitors, then map the site around booking more of the work you want — in both languages." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting." },
    ],
    pricing: {
      heading: 'Transparent El Paso web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Neighborhood-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or bilingual businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Spanish-language content', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in El Paso?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Can you build a site that works in Spanish and English?', a: "Yes, and in El Paso that's one of the most valuable things you can do. We can build bilingual content and structure so you show up — and convert — across both languages. In a market that's 82% Hispanic, this is a real competitive edge that almost no contractor is using." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive El Paso terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your El Paso traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting El Paso site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'el-paso', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'El Paso Website Redesign | More Leads, No Traffic Loss | OnwardCraft',
    metaDescription:
      'Redesign your El Paso website without losing rankings. Faster, mobile-first rebuilds that convert more visitors — in English and Spanish — into booked jobs. Free audit.',
    eyebrow: 'Website Redesign · El Paso, TX',
    h1: 'Redesign your El Paso website without losing your rankings',
    h2Exact: 'El Paso Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, invisible in Spanish. We redesign El Paso contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign El Paso contractor sites for speed and conversions, build them to reach a bilingual community, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your El Paso site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "For a high-ticket job, El Paso homeowners judge you by your site in seconds. An old, cluttered design quietly sends them to a competitor who looks more established — even when your work is better. In a value-conscious market, looking professional builds the trust that closes jobs." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your El Paso visitors before they ever see your offer. A redesign built mobile-first wins them back." },
      { title: "It speaks to nobody in particular", body: "Traffic that doesn't turn into calls is wasted. A generic old site gives an El Paso visitor no reason to pick you — especially if there's no Spanish-language presence and no reference to the neighborhoods you serve. We rebuild for conversions and for the community, so the right buyers choose you." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your El Paso traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the price of your jobs." },
      { name: 'Spanish-language rebuild', desc: "Rebuilt to reach El Paso's dominant audience — bilingual structure, Spanish-language keywords, and a tone that resonates with the community your competitors are missing.", featured: true },
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
      heading: 'Transparent El Paso redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Neighborhood-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or bilingual sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Spanish-language content', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in El Paso?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, has no Spanish-language presence, isn't bringing in leads, or doesn't feel like it speaks to El Paso's community, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Can the redesign include Spanish-language content?', a: "Yes, and in El Paso that's often the highest-value addition. We can rebuild your site to include bilingual content and structure so you reach the 82% of residents who are Hispanic — a pool of demand most of your competitors aren't even addressing." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the redesign help me compete in El Paso?', a: "Yes, and that's the point. We rebuild around the specific neighborhoods you serve, the bilingual community you're in, and the seasonal demand — like the summer HVAC rush — that drives your business. The new site should stand out, not blend in." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const elPasoCity = {
  citySlug: 'el-paso', city: 'El Paso', state: 'Texas', stateAbbr: 'TX', metro: 'El Paso',

  titleTag: 'El Paso Marketing for Contractors | Web, SEO & Leads | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for El Paso contractors — in English and Spanish. Get found, get booked, and own your leads instead of renting them. Free El Paso audit.',

  eyebrow: 'El Paso · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets El Paso contractors found and booked',
  h2Exact: 'El Paso Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for El Paso's bilingual, desert-climate market. One team to get you ranking in English and Spanish, converting visitors into booked jobs, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Spanish-language search reach', 'No lock-in contracts'],
  primaryCta: 'Get my free El Paso audit',

  intro:
    "If you run a contracting business in El Paso, you're in one of the most distinctly Hispanic major cities in the country — roughly 82% of residents are Hispanic, Spanish-language search is the dominant mode for a huge share of the market, and Fort Bliss keeps a constant stream of new military homeowners cycling through who rely entirely on online search to find a contractor. Add 105-degree summers that make HVAC the highest-demand trade in the city, and you have a market full of opportunity that most agencies have no idea how to reach. Winning here takes three things: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack for your neighborhoods — in both languages. Here's how we help El Paso contractors do exactly that.",
  aioQuestion: 'How do El Paso contractors get more leads online?',
  aioAnswer:
    "El Paso contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches in English and Spanish, and local SEO that wins the Google Map Pack neighborhood by neighborhood. Because roughly 82% of residents are Hispanic and a large share search in Spanish, the contractors who target that audience — and rank for summer HVAC demand before the peak season — win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when El Paso searches \"near me\" — in English and Spanish. The single highest-return move for most local contractors, done neighborhood by neighborhood.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search — including Spanish-language terms — build an asset you own instead of renting traffic from ads, and measure it in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs — in the language your customers actually use — not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed, conversions, and bilingual reach, and migrate it carefully so you keep every bit of ranking you've already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in El Paso?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads — in English and Spanish — in a market full of opportunity most agencies miss." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors — so we understand El Paso's desert trades: flat roofs, stucco, swamp coolers, and the summer HVAC rush." },
    { q: 'Why does the El Paso market need a different approach?', a: "Because it's unlike anywhere else. Roughly 82% of residents are Hispanic, Spanish-language search is the dominant mode for a huge share of the market, and almost no agency is set up to target that. Add Fort Bliss — thousands of PCS moves a year — and extreme summer HVAC demand, and you need someone who understands the market, not a national template shop." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which El Paso areas do you serve?', a: "All of El Paso's neighborhoods — Kern Place, Mission Hills, Mesa Hills, Northeast, Far East, Horizon City, Socorro, Anthony, Sunland Park, the Fort Bliss area, Westside, and Central El Paso — with genuine local pages rather than one generic city page." },
    { q: 'Where should I start?', a: "Start with a free El Paso audit. We'll look at your website, your rankings in English and Spanish, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};
