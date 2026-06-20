// STAMFORD — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Stamford's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// STAMFORD — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Stamford and Fairfield County is a high-stakes game',
  body:
    "Fairfield County is the wealthiest corner of New England — and arguably the wealthiest commuter belt in America. Greenwich, Darien, New Canaan, and Westport hold the highest concentration of hedge funds and investment firms outside Manhattan. These are homeowners with $3M to $30M properties, Manhattan incomes, and Connecticut lifestyles. They spend freely on quality contractors but demand absolute professionalism before they ever pick up the phone. Stamford sits 45 minutes from Grand Central on Metro-North, meaning thousands of Wall Street and media executives call this area home. That's an extraordinary renovation market — but it's also one of the most unforgiving. A contractor who looks unprofessional online will never get the call. One who looks polished wins very large jobs. Two more things shape demand here. First, Fairfield County gets hammered by nor'easters every winter — the October 2011 snowstorm knocked out power for over ten days in many neighborhoods, driving waves of roof, ice, and heating repair calls. Second, many of the area's historic Colonial, Georgian, and mid-century modern estates — built between 1700 and 1970 — require specialist maintenance and renovation that only a trusted, visible local contractor can deliver.",
  pullQuote: 'When a hedge fund executive in Greenwich searches for a contractor, the first name they find gets the call — and the job is never small.',
  donut: {
    title: 'Who owns in Fairfield County',
    value: 78,
    centerLabel: 'homeowner rate',
    legend: [
      { label: 'Homeowners', pct: 78, kind: 'teal' },
      { label: 'Renters', pct: 22, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Nor\'easters and winter storm damage (Nov–Mar); exterior renovation season (Apr–Oct)',
  seasonalDemand: [
    { m: 'J', v: 90, peak: true }, { m: 'F', v: 86, peak: true }, { m: 'M', v: 72, peak: true },
    { m: 'A', v: 78, peak: true }, { m: 'M', v: 82, peak: true }, { m: 'J', v: 84, peak: true },
    { m: 'J', v: 74 }, { m: 'A', v: 70 }, { m: 'S', v: 65 },
    { m: 'O', v: 72 }, { m: 'N', v: 88, peak: true }, { m: 'D', v: 92, peak: true },
  ],
  stats: [
    { value: '$3M–$30M+', label: 'typical home values in Greenwich, Darien, and New Canaan' },
    { value: '45 min', label: 'Metro-North commute from Stamford to Grand Central — Wall Street incomes, Connecticut renovation budgets', accent: true },
    { value: 'Nov–Mar', label: 'nor\'easter season, when roof, ice, and heating calls spike overnight' },
    { value: 'Top 3', label: 'Map Pack spots that capture most of the contractor calls in Fairfield County' },
  ],
  neighborhoods: [
    'Glenbrook', 'Springdale', 'North Stamford', 'Greenwich', 'Darien',
    'New Canaan', 'Westport', 'Fairfield', 'Trumbull', 'Shelton',
    'Derby', 'Cos Cob', 'Old Greenwich', 'Riverside', 'Norwalk',
  ],
};

const AREAS = [
  'Stamford', 'Greenwich', 'Darien', 'New Canaan', 'Westport',
  'Fairfield', 'Trumbull', 'Shelton', 'Derby', 'Norwalk',
  'Glenbrook', 'Springdale', 'North Stamford', 'Cos Cob', 'Old Greenwich',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the Stamford neighborhoods and Fairfield County towns you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We understand nor'easter emergency calls, historic estate renovations, and the high expectations of Fairfield County homeowners, so everything we build is shaped around how your customers really search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners three competitors also bought — especially when those homeowners are spending $50K–$200K on renovation projects.",
  },
  {
    title: 'We actually speak Fairfield County',
    body: "Town-by-town targeting from Greenwich to Shelton, plus the local knowledge to win the wealthy commuter corridor that most national agencies treat as one generic \"Connecticut\" page. The stuff a national shop can't do by swapping a city name into a template.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Stamford contractor gets around 1,200 local \"near me\" impressions a month across a handful of Fairfield County towns. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a booked-out calendar — and in a market where a single job can be worth $30K to $150K, that gap is enormous. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Stamford', state: 'Connecticut', stateAbbr: 'CT', metro: 'Stamford-Greenwich (Fairfield County)',
  heroProof: ['Built for the trades', 'Town-by-town Fairfield County targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const stamfordLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'stamford', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Stamford Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Search your service in Stamford or Greenwich and three businesses show up on the map. We get you into those three, so the call lands with you. Honest pricing, no lock-in, free audit.',
    eyebrow: 'Local SEO · Stamford & Fairfield County',
    h1: 'When Fairfield County searches for what you do, be the first name they find',
    h2Exact: 'Stamford Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. In a county where homeowners spend $50K to $200K on projects and have zero tolerance for contractors who look unprofessional, we get you into that top three — town by town — so the call lands with you.",
    primaryCta: 'Get my free Stamford audit',
    intro:
      "Stamford and Fairfield County local SEO comes down to one thing: when a homeowner in Greenwich, Darien, or New Canaan searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. This is hedge fund capital territory — homeowners with Manhattan incomes and historic estates who spend freely on quality but demand professionalism before they ever call. Becoming one of those three pins in the towns you serve is the whole game. Here's how you do it.",
    aioQuestion: 'How do Stamford businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and Fairfield County towns you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real neighborhoods like Greenwich, Darien, New Canaan, and Westport. Fairfield County is wealthy and high-expectation, so the winners target tight service areas by town, show up during nor'easter damage spikes, and respond fast during winter and summer demand surges.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? In Fairfield County they get the overwhelming majority of the clicks — and those clicks are worth a lot. Greenwich and Darien homeowners aren't comparison-shopping three pages deep; they tap the first trusted name they see. Getting into that top three for your priority towns is usually the single highest-return move a Stamford-area contractor can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Fairfield County homeowner to four contractors, then bill each of you to fight over them. It's a treadmill, and these are some of the highest-value leads in Connecticut. Local SEO builds the opposite: a homeowner in Westport finds you, calls you, and nobody else got it. Over time you stop renting and start owning the pipeline." },
      { title: "You're invisible during nor'easter spikes", body: "When a nor'easter rolls through and knocks out power for a week, roof calls, ice damage calls, and heating failure calls spike overnight. The contractors already ranking for those terms catch that wave. If you're not visible before the storm, you're invisible when the phones ring — and these are often emergency-budget jobs worth $10K to $50K." },
    ],
    servicesHeading: 'What it actually takes to rank you in Fairfield County',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Fairfield County searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes a Greenwich homeowner pick up the phone." },
      { name: 'Town-targeted pages', desc: "Real pages for Greenwich, Darien, New Canaan, Westport, Fairfield, and more — so you rank for the specific town someone's searching, not just \"Stamford.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Connecticut and Fairfield County sources Google trusts — local press, Chambers of Commerce, associations, partners. This is what separates page one from page two here." },
      { name: 'Seasonal storm and renovation SEO', desc: "We rank you for the nor'easter damage and spring renovation terms that drive Fairfield County's biggest demand spikes, so you're visible before the calls come, not scrambling after.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your Fairfield County towns and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now over starting later." },
      { name: 'Add local content', desc: "Town and neighborhood pages across Greenwich, Darien, New Canaan, Westport, Fairfield, and more — plus the on-page work to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next town." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses competing across several Fairfield County towns.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Town-targeted landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across the county.', features: ['Everything in Local Growth', 'Local link building', 'Seasonal storm and renovation SEO', 'Multi-town and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Stamford?', a: "Most Stamford and Fairfield County engagements land between $750 and $2,500 a month, depending on how many towns and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The competitive Fairfield County keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days in a market this competitive is selling you something." },
      { q: 'What makes Stamford local SEO different from other markets?', a: "Two things. Fairfield County homeowners have some of the highest household incomes in the country, so the jobs are large — but so are the expectations. You have to look polished and professional online or they'll never call. And the market is driven by seasonal nor'easter spikes and a 78% homeownership rate, so there's a very high concentration of people who own and maintain high-value properties." },
      { q: 'Can you help me rank for nor\'easter and storm damage searches?', a: "Yes, and in Fairfield County that's a major edge. When a nor'easter hits, roofing, ice damage, and heating failure calls spike dramatically. We make sure you're ranking for those terms before the storms roll in, so your phone rings when it counts." },
      { q: 'Which areas of Fairfield County do you cover?', a: "All of them — Stamford, Greenwich, Darien, New Canaan, Westport, Fairfield, Trumbull, Shelton, Derby, Norwalk, and the neighborhoods within them like Glenbrook, Springdale, North Stamford, Cos Cob, and Old Greenwich. We build genuine town pages instead of one generic Stamford page, because that's what ranks for \"[service] [town]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand nor'easter emergencies, historic estate renovations, and the very high expectations of Fairfield County homeowners." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that send leads straight to you. In a market where a single Fairfield County job can be worth $30K to $150K, owning that pipeline instead of renting it from lead brokers is a very different business." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your Fairfield County towns, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'stamford', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Stamford SEO Company | Rank Higher, Get Leads | OnwardCraft',
    metaDescription:
      'Stamford SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in contracts, built for Fairfield County. Free Stamford SEO audit.',
    eyebrow: 'SEO Services · Stamford & Fairfield County',
    h1: 'Get your Stamford business to the top of Google and keep it there',
    h2Exact: 'Stamford SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Fairfield County customers search and the leads keep coming. In a county where a single renovation project can be worth $50K to $200K, that pipeline belongs on your site — not on a lead broker's.",
    primaryCta: 'Get my free Stamford SEO audit',
    intro:
      "Stamford SEO comes down to one question: when a Greenwich or Darien homeowner searches what you do, are you on page one or page two? Page two might as well be page fifty — especially when these homeowners are accustomed to finding what they need immediately and moving on. We get contractors ranking for the money keywords across Fairfield County's most valuable towns, and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Stamford businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms Fairfield County customers search, publishing genuinely useful local content tied to specific towns and neighborhoods, and earning links from trusted Connecticut sources. In Fairfield County, tight town-by-town targeting and ranking for nor'easter damage and renovation season terms are two of the quickest ways to pull ahead of the competition.",
    problemHeading: "Three reasons your Stamford site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. In Fairfield County, where homeowners have high expectations and low patience, if you're not in the top handful of results for what you sell, your site is effectively invisible — no matter how good your work is." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. SEO builds an asset you own: rankings that keep producing Fairfield County leads months and years after the work is done, at a fraction of the per-lead cost. When those leads are homeowners with $5M properties, the math on owning your pipeline is very clear." },
      { title: "You're not ranking for the demand that matters", body: "Fairfield County demand swings hard with the seasons — nor'easter damage and heating failures in winter, exterior renovations and HVAC in summer — and the contractors who rank for those terms ahead of time catch the spike. If your SEO ignores seasonal and emergency searches, you're leaving your busiest and most lucrative weeks on the table." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings in Fairfield County',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms Fairfield County homeowners search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real Connecticut and Fairfield County sources. In a competitive market, links are often what separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across your priority towns alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Seasonal & nor\'easter SEO', desc: "We rank you for the winter storm damage and spring renovation searches that drive Fairfield County's biggest demand spikes, so you're visible before the surge, not after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Fairfield County leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the seasonal, storm damage, and renovation terms that matter here." },
      { name: 'Build authority', desc: "Links and citations from trusted Connecticut and Fairfield County sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set or town." },
    ],
    pricing: {
      heading: 'Transparent Stamford SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and Fairfield County towns.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Fairfield County search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal & nor\'easter SEO', 'Multi-town / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Stamford?', a: "Most Stamford and Fairfield County SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Fairfield County?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter town-level terms and slower on the most competitive countywide keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads for Fairfield County contractors?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. In a market where a single job can be worth $30K to $150K, most Fairfield County contractors do best running SEO as the long-term engine and ads for short-term spikes." },
      { q: 'Should my SEO target seasonal and nor\'easter demand?', a: "Yes, absolutely. When a nor'easter hits Fairfield County, roofing, ice damage, and heating failure calls spike overnight. Ranking takes months to build, so you have to be in place before the season. We optimize for those storm damage and emergency terms ahead of time so the biggest weeks of the year land on you." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal/nor'easter and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which Fairfield County towns do you cover?', a: "All of them — Stamford, Greenwich, Darien, New Canaan, Westport, Fairfield, Trumbull, Shelton, Derby, and Norwalk, with genuine town-level content rather than one generic Fairfield County page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility across Fairfield County, the less you depend on paying brokers for shared leads — especially when those leads represent some of the highest-value renovation projects in Connecticut." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'stamford', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Stamford Web Design Company | Sites That Convert | OnwardCraft',
    metaDescription:
      'Stamford web design that turns visitors into booked jobs — fast, mobile-first sites built for contractors in Fairfield County\'s high-expectation market. Transparent pricing, you own it. Free quote.',
    eyebrow: 'Web Design · Stamford & Fairfield County',
    h1: 'Stamford web design that turns visitors into booked jobs',
    h2Exact: 'Stamford Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. In Fairfield County — where homeowners have Manhattan incomes and zero tolerance for contractors who look unprofessional — your site is your first impression. We build fast, mobile-first sites that turn Greenwich and Darien visitors into booked work.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Stamford contractor websites lose leads quietly: slow on a phone, buried call button, no clear offer. Web design done right fixes all of that. We build sites that load fast, look like the professional you are, and turn Fairfield County visitors into booked jobs — engineered for a market where a single project can be worth $50K to $200K and homeowners judge your company in the first three seconds.",
    aioQuestion: 'What makes a good contractor website in Stamford and Fairfield County?',
    aioAnswer:
      "A good Fairfield County contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific towns you serve — Greenwich, Darien, New Canaan, Westport, and so on. Because these are high-income homeowners with high expectations, a polished, professional appearance isn't optional. A site that looks dated or generic will never generate a call from a North Stamford or Greenwich homeowner, no matter how good your work is.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next result — and in Fairfield County, that next result might be a polished competitor charging premium rates and winning every large job. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It doesn't look like you charge what you're worth", body: "Greenwich and Darien homeowners are spending freely on quality contractors. But they need to feel confident before they call. An outdated or generic site signals a smaller, less professional operation — and they move on. We build sites that match the quality of your work and the price of your jobs." },
      { title: "It doesn't speak to your towns", body: "A homeowner in Westport wants to see you serve Westport — not a generic \"Connecticut\" page that could be anybody. We build sites that name the Fairfield County towns you work, with content that shows you know the area, so visitors trust you're local and Google ranks you for the right searches." },
    ],
    servicesHeading: "What's in an OnwardCraft Stamford website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your Fairfield County towns, and the jobs you actually want." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your traffic arrives. Fast, thumb-friendly, and easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that speak to high-expectation Fairfield County homeowners and book the job, not filler text that reads like every other contractor." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and town-ready pages for your Fairfield County service area." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Town-targeted pages', desc: "Pages built around the specific Fairfield County towns you serve — Greenwich, Darien, New Canaan, Westport, Fairfield — so you stand out instead of blending into a generic county page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your Fairfield County towns, your best jobs, and your competitors, then map the site around booking more of the work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — polished enough to earn trust from a New Canaan homeowner, optimized enough to rank in Fairfield County search." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting." },
    ],
    pricing: {
      heading: 'Transparent Stamford web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + town pages', 'Speed & Core Web Vitals', 'Town-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost for a Stamford contractor?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site look professional enough for Fairfield County homeowners?', a: "That's the whole point. Greenwich and Darien homeowners are used to premium service and they judge you the second they land on your site. We build a polished, credible presence that matches the quality of your work — so when a homeowner with a $10M property is choosing between you and a competitor, your site is the reason they call you." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and town-ready pages for Fairfield County. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where most of your Fairfield County traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost Fairfield County leads, what a high-converting site for this market should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'stamford', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Stamford Website Redesign | More Leads, No Traffic Loss | OnwardCraft',
    metaDescription:
      'Redesign your Stamford website without losing rankings. Faster, mobile-first rebuilds that convert more Fairfield County visitors into booked jobs. Free redesign audit.',
    eyebrow: 'Website Redesign · Stamford & Fairfield County',
    h1: 'Redesign your Stamford website without losing your rankings',
    h2Exact: 'Stamford Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week in Fairfield County — slow, hard to use on a phone, and not credible enough for a homeowner spending $50K to $200K on a project. We redesign Stamford contractor sites to convert more and load faster, and we migrate carefully so you keep every ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Fairfield County contractor sites for speed, credibility, and conversions — built to impress the high-income homeowners who make quick decisions — and we migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, more mobile-friendly, and more credible than the old one — exactly what Fairfield County homeowners expect before they call.",
    problemHeading: "Signs your Stamford site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "For a high-ticket job in Greenwich or New Canaan, homeowners judge you by your site in seconds. An old, cluttered design quietly signals a smaller, less professional operation — and they move on to whoever looks more established, even if your work is better." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing visitors before they ever see your offer. A redesign built mobile-first wins them back — and in a market where a single call can turn into a $100K project, every lost visitor matters." },
      { title: "It blends into the competition", body: "A generic old site in a market as competitive as Fairfield County gives a homeowner no reason to pick you over the next search result. We rebuild for conversions and for the specific towns you serve, so the right buyers choose you instead of scrolling past." },
    ],
    servicesHeading: "What's in an OnwardCraft Stamford redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned in Fairfield County." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where most of your Fairfield County traffic lives." },
      { name: 'Brand refresh', desc: "A polished, trustworthy look that matches the quality of your work and the premium pricing a Fairfield County market supports." },
      { name: 'Town-targeted rebuild', desc: "Rebuilt around the specific Fairfield County towns you serve — so the new site stands out in a high-expectation market instead of reading like everyone else's.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you leads and rankings, then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build — credible enough for a $10M property owner to trust." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and improve, not drop." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Stamford redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established Fairfield County contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + town pages', 'Town-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Stamford?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, isn't credible enough for a high-income Fairfield County homeowner, or isn't generating leads, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the redesign help me compete in Fairfield County?', a: "Yes, and that's the point in a market this demanding. We rebuild around the specific Fairfield County towns you serve, keep the site fast, and make the offer and call button obvious — so the new site is the credible, professional presence a Greenwich or Darien homeowner expects before they call." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in Fairfield County leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const stamfordCity = {
  citySlug: 'stamford', city: 'Stamford', state: 'Connecticut', stateAbbr: 'CT', metro: 'Stamford-Greenwich (Fairfield County)',

  titleTag: 'Stamford Marketing for Contractors | Web, SEO & Leads | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Stamford and Fairfield County contractors. Get found, get booked, and own your leads in the wealthiest commuter corridor in New England. Free audit.',

  eyebrow: 'Stamford · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Stamford contractors found and booked',
  h2Exact: 'Stamford Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Fairfield County's high-expectation, high-value market. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Town-by-town Fairfield County targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Stamford audit',

  intro:
    "If you run a contracting business in Stamford or Fairfield County, you're operating in one of the wealthiest, most competitive home-services markets in New England. Greenwich, Darien, New Canaan, and Westport homeowners have Manhattan incomes and historic estates — they spend freely on quality contractors, but they decide in seconds whether to call you based on how you look online. Winning here takes three things working together: a site that signals professional credibility, SEO that ranks you for what Fairfield County homeowners search, and local SEO that puts you in the Map Pack for the towns you serve. Here's how we help Stamford-area contractors do exactly that.",
  aioQuestion: 'How do Stamford contractors get more leads online?',
  aioAnswer:
    "Stamford and Fairfield County contractors get more leads by combining a fast, polished website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack town by town. Because these are high-income homeowners with high expectations — many commuting to Manhattan on Metro-North — a professional online presence and tight town-by-town targeting are what separate contractors who win large jobs from those who stay invisible.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Fairfield County searches \"near me.\" Town by town — Greenwich, Darien, New Canaan, Westport, and more — so the call lands with you.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords Fairfield County homeowners actually search, build an asset you own instead of renting traffic from ads, and measure it in leads — not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, polished, mobile-first websites engineered to earn trust from high-expectation Fairfield County homeowners and turn that trust into booked jobs — not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site into a credible, high-converting presence for the Fairfield County market, and migrate it carefully so you keep every ranking you've already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Stamford?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads in Fairfield County's competitive, high-value market." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors — so we understand nor'easter emergencies, historic estate renovations, and the very high expectations of Fairfield County homeowners." },
    { q: 'Why does the Fairfield County market need a different approach?', a: "Because the homeowners here are among the wealthiest in the country. Greenwich and Darien residents have Manhattan incomes and historic estates. They spend freely — but they judge you in seconds. A contractor who looks polished online wins very large jobs. One who doesn't never gets the call." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Fairfield County areas do you serve?', a: "All of them — Stamford, Greenwich, Darien, New Canaan, Westport, Fairfield, Trumbull, Shelton, Derby, Norwalk, and the neighborhoods within them: Glenbrook, Springdale, North Stamford, Cos Cob, Old Greenwich, and more." },
    { q: 'Where should I start?', a: "Start with a free Stamford audit. We'll look at your website, your rankings, and your Map Pack presence across Fairfield County, then tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};
