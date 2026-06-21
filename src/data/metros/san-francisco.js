// SAN FRANCISCO — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across San Francisco's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// SAN FRANCISCO — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in San Francisco is a different game entirely',
  body:
    "San Francisco is the most expensive real estate market in the United States, with average home values north of $1.3 million. That changes the math for every trade contractor in the city. A leaky roof here isn't a $5,000 repair — the water damage, the permit, the specialist labor all add up closer to $30,000. Homeowners who live in that kind of asset spend freely on quality, but they research obsessively. They read every review, check every credential, and will not hire anyone who doesn't look perfectly professional online. The bar for trust is higher here than almost anywhere else in the country. On top of the spending power, San Francisco's housing stock is genuinely unusual. The city is full of Victorian Painted Ladies, Edwardian flats, and Craftsman bungalows built between 1880 and 1925. These buildings need contractors who understand old SF construction — a general contractor who doesn't know balloon framing, foundation quirks, or the permit culture around historic homes loses the job before the first site visit. Then there's the earthquake factor: San Francisco has the highest seismic risk of any major US city, and seismic retrofitting of soft-story buildings is a serious and steady specialty. Add the fog — the famous San Francisco marine layer that rolls in from the Pacific and creates constant moisture and mold issues on the west side, in the Sunset, the Richmond, and West Portal — and you have a market where specialist knowledge is the price of entry, and ranking for it is how you win.",
  pullQuote: 'In a city where homes average $1.3M, homeowners hire the contractor who looks as professional as the job demands — and they find that contractor on Google.',
  donut: {
    title: 'How San Francisco searches',
    value: 34,
    centerLabel: 'Asian residents',
    legend: [
      { label: 'Asian', pct: 34, kind: 'teal' },
      { label: 'Other', pct: 66, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Fog/moisture year-round; wildfire smoke Aug–Oct; earthquake prep ongoing',
  seasonalDemand: [
    { m: 'J', v: 58 }, { m: 'F', v: 55 }, { m: 'M', v: 60 },
    { m: 'A', v: 62 }, { m: 'M', v: 65 }, { m: 'J', v: 68 }, { m: 'J', v: 72 },
    { m: 'A', v: 90, peak: true }, { m: 'S', v: 92, peak: true }, { m: 'O', v: 88, peak: true },
    { m: 'N', v: 64 }, { m: 'D', v: 60 },
  ],
  stats: [
    { value: '$1.3M+', label: 'average San Francisco home value — the highest in the US', accent: true },
    { value: '1880–1925', label: 'when most SF housing stock was built — Victorian, Edwardian, Craftsman' },
    { value: '~34%', label: 'of San Francisco residents are Asian — Chinese-language search matters here' },
    { value: 'Top 3', label: 'Map Pack spots that get the calls in every SF neighborhood' },
  ],
  neighborhoods: [
    'Noe Valley', 'Cole Valley', 'Castro', 'Mission District', 'Sunset',
    'Richmond', 'Pacific Heights', 'Marina', 'North Beach', 'Glen Park',
    'Excelsior', 'Daly City', 'San Mateo', 'West Portal', 'Bernal Heights',
  ],
};

const AREAS = [
  'Noe Valley', 'Cole Valley', 'Castro', 'Mission District', 'Sunset District',
  'Richmond District', 'Pacific Heights', 'Marina', 'North Beach', 'Glen Park',
  'Excelsior', 'West Portal', 'Bernal Heights', 'Daly City', 'San Mateo',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors — including specialists doing serious earthquake retrofit and Victorian restoration work — hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors also bought. In a market like San Francisco, where homeowners spend real money and demand real professionalism, that rented-lead model is a terrible fit. So that's what we fix. We get you ranking for the exact searches your SF buyers run — whether that's seismic retrofit in the Mission, fog-damage mold remediation in the Sunset, or Victorian millwork in Pacific Heights — and those leads belong to you. No 12-month contracts. If it's not working, you fire us.";

const WHY = [
  {
    title: "We understand San Francisco's building stock",
    body: "Victorian Painted Ladies, Edwardian flats, Craftsman bungalows, soft-story buildings, earthquake retrofit, fog-driven moisture issues — we know how SF homeowners search for specialist help, and we build your visibility around it.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners whose high-value SF jobs three competitors also quoted.",
  },
  {
    title: "We get San Francisco's research-intensive buyers",
    body: "SF homeowners Google obsessively, read every review, and will not hire anyone who looks generic online. We build the kind of precise, professional presence that wins their trust before you ever answer the phone — neighborhood by neighborhood, from Pacific Heights to the Excelsior.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say an SF contractor gets around 2,000 local \"near me\" impressions a month across a handful of neighborhoods. Moving from page-two invisibility into the top three is the difference between a quiet phone and a booked-out calendar — and in a market where a single job can be worth $30,000+, that gap is enormous. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'San Francisco', state: 'California', stateAbbr: 'CA', metro: 'San Francisco Bay Area',
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const sanFranciscoLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'san-francisco', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'San Francisco Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Search your service in San Francisco and three businesses show up on the map. We get you into those three, so the call lands with you. Honest pricing, no lock-in, free audit.',
    eyebrow: 'Local SEO · San Francisco, CA',
    h1: 'When San Francisco searches for what you do, be the first name they find',
    h2Exact: 'San Francisco Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. In a city where homes average $1.3M and homeowners research every hire obsessively, we get you into that top three for your neighborhoods — so the call from Noe Valley or the Sunset lands with you instead of whoever ranked first.",
    primaryCta: 'Get my free San Francisco audit',
    intro:
      "San Francisco local SEO comes down to one thing: when a homeowner in Pacific Heights or the Sunset searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. This is a market where a single job can be worth $30,000 or more, homeowners read every review before calling, and about a third of residents are Asian — with Chinese-language search that most competitors ignore entirely. Becoming one of those three pins in the neighborhoods you serve is the whole game.",
    aioQuestion: 'How do San Francisco businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real SF neighborhoods and the specialist work those neighborhoods demand — Victorian restoration, seismic retrofit, fog-moisture remediation. San Francisco buyers research obsessively, so reviews and professional online presence matter more here than in most cities.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? In San Francisco, where even a basic renovation job can run into the tens of thousands, those three get the overwhelming majority of calls. If you're not one of them, it almost doesn't matter how good your work is — most homeowners never see your name. Getting into that top three for your neighborhoods is usually the single highest-return move an SF contractor can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same SF homeowner to four contractors, then bill each of you to fight over them. In this market those per-lead prices are steep, and the homeowner is comparing you against three other bids. Local SEO builds the opposite: a homeowner finds you, calls you, and nobody else got the same lead. Over time you stop renting and start owning the pipeline." },
      { title: "You're invisible to SF's most research-intensive buyers", body: "San Francisco homeowners are some of the most research-intensive buyers in the country. They check your website, read your reviews, look up your license, and will not call someone who doesn't look completely professional. If your Google Business Profile is thin, your reviews are sparse, or your website looks outdated, you're losing high-value jobs before the first conversation. We fix all of it." },
    ],
    servicesHeading: 'What it actually takes to rank you in San Francisco',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which SF searches you should win — from Noe Valley roofing to Sunset mold remediation." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. SF buyers read every one, so a strong review base is often the deciding factor." },
      { name: 'Neighborhood pages', desc: "Real pages for Pacific Heights, the Sunset, the Richmond, Cole Valley, Glen Park and the rest — so you rank for the neighborhood someone's actually searching, not just \"San Francisco.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from SF sources Google trusts — local press, neighborhood associations, historic preservation groups, trade partners. This is what separates page one from page two." },
      { name: 'Chinese-language and multilingual reach', desc: "About 34% of SF residents are Asian, and Chinese-language search for home services is meaningful here. We help you show up for the demand most of your competitors never even see.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your SF neighborhoods and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. SF homeowners read every review before they call, so this is especially high-leverage here." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across your target SF markets, plus the on-page work to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several SF neighborhoods.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across San Francisco.', features: ['Everything in Local Growth', 'Local link building', 'Chinese-language and multilingual targeting', 'Multi-neighborhood service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in San Francisco?', a: "Most SF engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The competitive SF keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days in a market this research-intensive is selling you something." },
      { q: 'What makes San Francisco local SEO different?', a: "Two things stand out. First, SF homeowners are among the most research-intensive buyers in the country — they check everything before calling, so reviews and professional online presence matter more here than almost anywhere else. Second, about 34% of residents are Asian, and Chinese-language home-services search is real demand that most contractors ignore entirely." },
      { q: 'Can you help me reach Chinese-speaking customers?', a: "Yes, and in San Francisco that's a meaningful edge. With about 34% Asian residents and the largest Chinatown outside of Asia, Chinese-language search for home services represents real volume most contractors never target. We can optimize your profile and content to show up for those searches." },
      { q: 'Which areas do you cover?', a: "All major SF neighborhoods and nearby cities — Noe Valley, Pacific Heights, the Sunset, the Richmond, Cole Valley, the Castro, Mission District, Glen Park, North Beach, Marina, Excelsior, Daly City, San Mateo, and more. We build genuine neighborhood pages instead of one generic San Francisco page." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, seismic retrofit, and general contractors. We understand Victorian and Edwardian building quirks, fog-driven moisture problems, and earthquake prep work — and we build your local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep, and in SF the per-lead prices are steep. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because the work comes to you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your SF neighborhoods, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck — just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'san-francisco', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'San Francisco SEO Company | Rank Higher, Get Leads | OnwardCraft',
    metaDescription:
      'San Francisco SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in contracts, built for a high-value market. Free SF SEO audit.',
    eyebrow: 'SEO Services · San Francisco, CA',
    h1: 'Get your San Francisco business to the top of Google and keep it there',
    h2Exact: 'San Francisco SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your SF customers search and the leads keep coming. In a city where a single job can be worth $30,000+, we build that ranking and tie every report to actual calls and jobs — not vanity traffic.",
    primaryCta: 'Get my free San Francisco SEO audit',
    intro:
      "San Francisco SEO comes down to one question: when someone searches what you do, are you on page one or page two? Page two might as well be page fifty. SF homeowners are obsessive researchers — they check credentials, read every review, and compare several options before calling. Getting onto page one for the right searches means your business is in consideration. Getting into the top three means the call lands with you. We build that for SF contractors and measure it in leads, not vanity traffic.",
    aioQuestion: 'How do San Francisco businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content tied to specific SF neighborhoods and the specialist work those neighborhoods demand — Victorian restoration, seismic retrofit, fog-moisture issues — and earning links from trusted Bay Area sources. In a market this research-intensive, the contractors who look most professional and authoritative online win the most calls.",
    problemHeading: "Three reasons your San Francisco site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and SF homeowners are especially unlikely to go further — they research deeply but they find what they need quickly. If you're not in the top handful of results for what you sell, your site is basically invisible, no matter how good your work is." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop, and San Francisco clicks are some of the most expensive in the country. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost of either ads or lead brokers." },
      { title: "You're not ranking for the searches that matter in SF", body: "San Francisco has specific, high-value demand that generic SEO misses: seismic retrofit, Victorian and Edwardian restoration, fog-damage mold remediation, earthquake prep. Contractors who rank for those terms own the jobs. If your SEO ignores what makes SF different, you're competing on generic terms where the competition is fiercest and the differentiation is lowest." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings in San Francisco',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your SF customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what SF buyers search — including the specialist topics that set the best contractors apart here." },
      { name: 'Link building', desc: "Authority from real Bay Area and industry sources. In a competitive city like SF, links are often what separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across your SF neighborhoods alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Specialist and Victorian/seismic SEO', desc: "We rank you for the high-value SF searches others ignore: earthquake retrofit, Victorian restoration, fog-moisture remediation, historic permit work. These are the jobs worth most in this market.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of SF's research-intensive buyers now begin their search.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real SF leads — including the specialist terms your competitors overlook." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank, especially on a site SF homeowners will scrutinize." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including neighborhood-specific and specialist pages that match what SF buyers actually search." },
      { name: 'Build authority', desc: "Links and citations from trusted Bay Area and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent San Francisco SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and SF neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own SF search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Specialist and Victorian/seismic SEO', 'Multi-neighborhood and multi-service', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in San Francisco?', a: "Most SF SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in San Francisco?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter neighborhood terms and slower on the most competitive citywide keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads in SF?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying — and San Francisco clicks are among the most expensive in the country. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most SF contractors do best running SEO as the long-term engine and ads for short-term spikes." },
      { q: 'Should my San Francisco SEO target specialist services like seismic retrofit?', a: "Absolutely. Seismic retrofitting, Victorian and Edwardian restoration, fog-damage mold remediation — these are high-ticket, low-competition search terms specific to SF. Contractors who rank for them own some of the most valuable jobs in the city. We optimize for these terms because they're often faster to rank for than generic terms and worth far more per lead." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add specialist/Victorian/seismic content and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. SF homeowners are heavy researchers, and a meaningful share now start in AI instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business." },
      { q: 'Which SF areas do you cover?', a: "All major SF neighborhoods and nearby Bay Area cities — Noe Valley, Pacific Heights, the Sunset, the Richmond, Cole Valley, Glen Park, North Beach, Marina, Excelsior, Daly City, San Mateo and more — with genuine local pages rather than one generic San Francisco page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads at SF prices." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'san-francisco', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'San Francisco Web Design Company | Sites That Convert | OnwardCraft',
    metaDescription:
      'San Francisco web design that turns visitors into booked jobs — fast, mobile-first sites built for contractors in a high-value, research-intensive market. Transparent pricing, you own it. Free quote.',
    eyebrow: 'Web Design · San Francisco, CA',
    h1: 'San Francisco web design that turns visitors into booked jobs',
    h2Exact: 'San Francisco Web Design Company',
    heroSubhead:
      "SF homeowners spend freely on quality — but they research obsessively before calling. We build San Francisco contractors fast, mobile-first sites that look as professional as the jobs they win, and convert the most research-intensive buyers in the country into booked work.",
    primaryCta: 'Get my free quote',
    intro:
      "Most San Francisco contractor websites lose high-value leads quietly: slow on a phone, no clear offer, nothing that signals specialist expertise. In a city where homes average $1.3M and homeowners read every review and check every credential before calling, a mediocre website costs you real money. We build sites that load fast, signal genuine expertise in the work SF buyers need most — Victorian restoration, seismic retrofit, fog-damage remediation — and turn visitors into booked jobs.",
    aioQuestion: 'What makes a good contractor website in San Francisco?',
    aioAnswer:
      "A good SF contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names both the specific neighborhoods you serve and the specialist services SF buyers search for — Victorian restoration, earthquake retrofit, fog-moisture issues. Because SF homeowners research obsessively before calling, social proof and visible expertise matter more here than in most cities.",
    problemHeading: "Why your current site isn't bringing in SF work",
    painPoints: [
      { title: "It doesn't signal specialist expertise", body: "San Francisco homeowners aren't looking for a generic contractor — they're looking for someone who knows Victorian plumbing, or soft-story retrofit, or fog-related moisture problems. A site that reads like any contractor in any city loses that buyer to someone whose site proves they understand the specific challenge." },
      { title: "It's too slow or hard to use on a phone", body: "Most of your SF visitors are on mobile, and they bounce if your site takes more than a few seconds to load. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking — especially critical in a city where buyers will scrutinize you before calling." },
      { title: "It doesn't build the trust SF buyers demand", body: "A homeowner who's about to spend $20,000 on a seismic retrofit or $30,000 on a roof replacement is not going to call someone whose website looks outdated or amateurish. We design for the level of trust those jobs require — clean, professional, credentialed, and neighborhood-specific." },
    ],
    servicesHeading: "What's in an OnwardCraft San Francisco website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your SF neighborhoods, and the specialist jobs you actually want." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where most of your SF traffic is. Fast, thumb-friendly, easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that speak to the research-intensive SF homeowner and book the high-value job, not filler text that reads like everyone else." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages built for SF's search patterns." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Specialist service pages', desc: "Dedicated pages for Victorian restoration, seismic retrofit, fog-damage remediation, and the other high-value SF specialties — so the right buyer recognizes you as the right contractor.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business, because SF's research-intensive buyers are early adopters of AI-first search.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your SF neighborhoods, your best jobs, and your competitors, then map the site around booking more of the high-value work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert SF buyers — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells to a research-intensive audience, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting." },
    ],
    pricing: {
      heading: 'Transparent San Francisco web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with specialist services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Specialist service pages', 'Speed & Core Web Vitals', 'Neighborhood-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in San Francisco?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site actually win trust from SF homeowners?', a: "That's the whole point in San Francisco. SF buyers are obsessive researchers who check everything before calling. We design for that scrutiny — clean, professional, credentialed, with real project photos and visible expertise in the specialist services they're searching for. Your site needs to look as good as the jobs you do." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages built for SF search patterns. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive SF terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where most of your SF traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting SF contractor site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'san-francisco', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'San Francisco Website Redesign | More Leads, No Traffic Loss | OnwardCraft',
    metaDescription:
      'Redesign your San Francisco website without losing rankings. Faster, mobile-first rebuilds that convert SF homeowners into booked high-value jobs. Free audit.',
    eyebrow: 'Website Redesign · San Francisco, CA',
    h1: 'Redesign your San Francisco website without losing your rankings',
    h2Exact: 'San Francisco Website Redesign Company',
    heroSubhead:
      "An outdated site costs you high-value SF jobs every week — slow, unprofessional-looking, nothing that signals specialist expertise. We redesign San Francisco contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. In San Francisco — where a single job can be worth $30,000 and homeowners research every hire obsessively — we redesign contractor sites to build the trust and specialist credibility SF buyers demand, and we migrate with the care that protects the traffic you've already earned.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured — and in SF, it also looks professional enough to win the trust of the most research-intensive homeowners in the country.",
    problemHeading: "Signs your San Francisco site is overdue for a redesign",
    painPoints: [
      { title: "It doesn't look as professional as your jobs", body: "For a $20,000 seismic retrofit or a $30,000 roof replacement, SF homeowners judge your professionalism on your site before they ever call. An outdated, generic design quietly sends them to a competitor who looks more credible — even when your work is better." },
      { title: "It's slow and doesn't show specialist expertise", body: "If your site is clunky on mobile or doesn't clearly signal that you know Victorian buildings, earthquake prep, or fog-moisture issues, you're losing the high-value SF jobs to someone whose site does. A redesign fixes both." },
      { title: "It's not converting the traffic you have", body: "Traffic that doesn't turn into calls is wasted — and in San Francisco, where even a modest job can be a significant expense, a missed conversion costs real money. We rebuild for conversions first, with the specific trust signals and specialist credibility that SF buyers need to pick up the phone." },
    ],
    servicesHeading: "What's in an OnwardCraft San Francisco redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems — especially the trust and expertise gaps that matter most to SF buyers." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where most of your SF traffic is coming from." },
      { name: 'Trust and credibility refresh', desc: "A modern, professional look that signals the level of expertise SF homeowners expect for high-ticket work — Victorian, seismic, and specialist trades." },
      { name: 'Specialist service page rebuild', desc: "Rebuilt around the high-value SF specialties — Victorian restoration, seismic retrofit, fog-damage remediation — so the buyers searching for those services find and choose you.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you, because SF's research-intensive buyers are early adopters of AI-first search.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you leads and rankings — and where your site fails the trust test for SF's research-intensive buyers — then map a redesign that fixes it." },
      { name: 'Design', desc: "A modern, mobile-first, trust-building design you review and shape before we build." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and improve, not drop." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent San Francisco redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Specialist service pages', 'Neighborhood-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in San Francisco?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site looks outdated, doesn't communicate specialist expertise in Victorian buildings or seismic work, is slow on phones, or isn't converting SF homeowners who are clearly researching you — it's costing you high-value jobs. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the redesign help me win more high-value SF jobs?', a: "Yes, and that's the point in a market like this. A $30,000 roofing job or a $25,000 seismic retrofit starts with a homeowner scrutinizing your website. We rebuild so it passes that test and makes the call feel obvious." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings — including the trust and expertise gaps that matter most to SF buyers — and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const sanFranciscoCity = {
  citySlug: 'san-francisco', city: 'San Francisco', state: 'California', stateAbbr: 'CA', metro: 'San Francisco Bay Area',

  titleTag: 'San Francisco Marketing for Contractors | Web, SEO & Leads | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for San Francisco contractors. Get found by research-intensive SF buyers, win high-value jobs, and own your leads. Free SF audit.',

  eyebrow: 'San Francisco · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets San Francisco contractors found and booked',
  h2Exact: 'San Francisco Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for San Francisco's high-value, research-intensive market — where homes average $1.3M, old buildings need specialist contractors, and homeowners check everything before they call.",
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free San Francisco audit',

  intro:
    "If you run a contracting business in San Francisco, you're working in the most expensive real estate market in the country — where homes average over $1.3 million, a single job can be worth $30,000 or more, and homeowners research obsessively before they call anyone. The Victorian housing stock, the earthquake risk, the fog-driven moisture problems, and the large Asian community that conducts a meaningful share of searches in Chinese all make this a market unlike any other. Winning here takes three things working together: a site that signals the professional expertise SF buyers demand, SEO that ranks you for the specialist searches they run, and local SEO that puts you in the Map Pack for the specific neighborhoods you serve. Here's how we help SF contractors do exactly that.",
  aioQuestion: 'How do San Francisco contractors get more leads online?',
  aioAnswer:
    "San Francisco contractors get more leads by combining a fast, mobile-first website that signals genuine specialist expertise with SEO that ranks them for high-intent searches — including Victorian restoration, seismic retrofit, and fog-damage remediation — and local SEO that wins the Google Map Pack neighborhood by neighborhood. Because SF homeowners research obsessively and about 34% are Asian with meaningful Chinese-language search behavior, the contractors who look most professional online and show up where their customers actually search win the most high-value work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when SF searches \"near me.\" The highest-return move for most local contractors — done tight, neighborhood by neighborhood, in a market where every job is worth it.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your SF customers actually search — including the specialist terms your competitors ignore — and build an asset you own instead of renting traffic from ads.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites that signal the professional expertise SF homeowners demand before they'll call — not generic brochures that lose high-value jobs to whoever looks more credible.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed, specialist credibility, and conversions — and migrate it carefully so you keep every bit of ranking you've already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in San Francisco?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most SF clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads in one of the most valuable and competitive markets in the country." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, seismic retrofit, and general contractors. We understand Victorian and Edwardian building quirks, fog-moisture issues, and earthquake prep work specific to San Francisco." },
    { q: 'Why does the San Francisco market need a different approach?', a: "SF is the most expensive real estate market in the US, and homeowners here research obsessively before calling anyone. The Victorian housing stock and seismic risk create specialist demand that generic SEO misses. And about 34% of residents are Asian, with meaningful Chinese-language search behavior most contractors ignore. Winning means looking professional enough for high-value jobs, ranking for specialist terms, and showing up where SF buyers actually search." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which San Francisco areas do you serve?', a: "All major SF neighborhoods and nearby Bay Area cities — Noe Valley, Pacific Heights, the Sunset, the Richmond, Cole Valley, Castro, Mission District, Glen Park, North Beach, Marina, Excelsior, West Portal, Bernal Heights, Daly City, San Mateo and more." },
    { q: 'Where should I start?', a: "Start with a free San Francisco audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most high-value SF work fastest. No pitch deck, just a plan." },
  ],
};
