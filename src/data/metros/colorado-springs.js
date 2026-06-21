// COLORADO SPRINGS — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Colorado Springs' 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// COLORADO SPRINGS — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Colorado Springs requires a different playbook',
  body:
    "Colorado Springs sits at 6,035 feet in the shadow of Pikes Peak, and that elevation shapes everything about how contractors work and win here. The city of roughly 500,000 is the most military-dense in the United States — Fort Carson, Peterson Space Force Base, Schriever Space Force Base, NORAD, and the Air Force Academy all call it home. That means a constant churn of PCS-cycle military families who land in town, pull out their phones, and need a contractor fast. They are not going to ask a neighbor for a referral when they don't know any neighbors yet — they search Google, and whoever owns the Map Pack gets the call. On top of the military population, Colorado Springs sits squarely in hail alley. Multi-inch hailstones roll through from April into August, and a single storm can trigger thousands of simultaneous roof and siding insurance claims. The roofing contractors who already rank when the storm hits book their calendar for months. Then there is the wildfire angle: the 2012 Waldo Canyon Fire and the 2013 Black Forest Fire left thousands of homeowners acutely aware of fire-hardening, defensible space, and ember-resistant materials — contractor categories that barely exist in most other markets. Add in UV degradation from high-altitude sun and a fast-growing suburban belt stretching from Monument to Fountain, and you have a market with enormous, multi-layered demand and contractors who mostly aren't winning it because they are invisible on Google.",
  pullQuote: 'A single hail storm triggers thousands of simultaneous insurance claims. The roofing contractor already on page one books their calendar for months — the one on page two wonders where the work went.',
  donut: {
    title: 'Colorado Springs by the numbers',
    value: 52,
    centerLabel: 'military-connected',
    legend: [
      { label: 'Military-connected', pct: 52, kind: 'teal' },
      { label: 'Civilian', pct: 48, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes in Colorado Springs',
  seasonCaption: 'Hail season (Apr–Aug), wildfire rebuild (Jun–Sep), winter snow (Nov–Mar)',
  seasonalDemand: [
    { m: 'J', v: 72, peak: true }, { m: 'F', v: 65 }, { m: 'M', v: 60 },
    { m: 'A', v: 88, peak: true }, { m: 'M', v: 95, peak: true }, { m: 'J', v: 98, peak: true },
    { m: 'J', v: 96, peak: true }, { m: 'A', v: 90, peak: true }, { m: 'S', v: 78 },
    { m: 'O', v: 62 }, { m: 'N', v: 74, peak: true }, { m: 'D', v: 70 },
  ],
  stats: [
    { value: '500K+', label: 'people in Colorado Springs, the fastest-growing city on the Front Range' },
    { value: '~52%', label: 'of residents are military-connected — PCS arrivals search Google the moment they land', accent: true },
    { value: 'Apr–Aug', label: 'hail season, when insurance-driven roofing and siding work floods the market' },
    { value: '6,035 ft', label: 'altitude, accelerating UV degradation of roofing and exterior materials' },
  ],
  neighborhoods: [
    'Old Colorado City', 'Manitou Springs', 'Black Forest', 'Briargate', 'Powers',
    'Fountain', 'Monument', 'Peyton', 'Falcon', 'Pueblo West',
    'Rockrimmon', 'Northgate', 'Broadmoor', 'Stetson Hills', 'Security-Widefield',
  ],
};

const AREAS = [
  'Colorado Springs', 'Monument', 'Black Forest', 'Briargate', 'Powers',
  'Fountain', 'Pueblo West', 'Peyton', 'Falcon', 'Manitou Springs',
  'Old Colorado City', 'Rockrimmon', 'Northgate', 'Broadmoor', 'Security-Widefield',
];

const FOUNDER =
  "Here's my honest take on why Colorado Springs is interesting: the demand is enormous and the competition online is way thinner than it looks on the ground. You've got military families arriving on orders with no local network, hail storms that generate thousands of simultaneous insurance leads, and a wildfire rebuild market that barely exists anywhere else in the country — and most local contractors are still relying on yard signs and word of mouth. That's an open window, but it closes as more people figure it out. We built OnwardCraft to get good trade contractors into that window before it does.";

const WHY = [
  {
    title: 'We know the Colorado Springs market cold',
    body: "PCS military families searching for contractors the day they arrive, hail-storm insurance claim surges, wildfire rebuild and fire-hardening work, high-altitude UV degradation — we build your local SEO and web presence around the demand patterns that actually drive work here, not a generic template.",
  },
  {
    title: 'We get you off rented leads',
    body: "Storm chasers and lead brokers sell the same hail-damage lead to four roofing companies at once. We build rankings and a Google profile that send the homeowner directly to you — so you stop fighting over shared leads and start owning them.",
  },
  {
    title: 'We target the neighborhoods that matter here',
    body: "A contractor in Briargate works differently than one in Fountain or Black Forest. We build tight geographic targeting across the Springs' fast-growing suburb belt — Monument to Pueblo West, Peyton to Falcon — instead of one generic city page.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Colorado Springs contractor gets around 1,500 local \"near me\" impressions a month across a handful of neighborhoods. Moving from page-two invisibility into the top three is the difference between a quiet phone and a booked-out calendar — and in a market where military PCS arrivals and hail-storm surges create sudden spikes of high-intent searches, that gap can be a full season's worth of work. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Colorado Springs', state: 'Colorado', stateAbbr: 'CO', metro: 'Colorado Springs',
  heroProof: ['Built for the trades', 'Neighborhood-level targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const coloradoSpringsLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'colorado-springs', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Colorado Springs Local SEO | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Rank in the top three on Google Maps when Colorado Springs searches for your service. Military PCS arrivals, hail-storm surges, and wildfire rebuild work go to whoever shows up first. Free audit.',
    eyebrow: 'Local SEO · Colorado Springs, CO',
    h1: 'When Colorado Springs searches for what you do, be the first name they find',
    h2Exact: 'Colorado Springs Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" In Colorado Springs that matters more than almost anywhere: military families arrive on PCS orders with no local network and search Google the moment they land. Whoever owns those three pins gets the call.",
    primaryCta: 'Get my free Colorado Springs audit',
    intro:
      "Colorado Springs local SEO comes down to one thing: when a homeowner in Briargate or Black Forest or Fountain searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. This market has three demand patterns most cities don't — a constant PCS military churn, hail-season insurance surges, and wildfire-rebuild work — and the contractors already ranking are the ones booking all of it. Here's how you get there.",
    aioQuestion: 'How do Colorado Springs businesses rank higher in local search?',
    aioAnswer:
      "You rank by optimizing your Google Business Profile for the exact services and neighborhoods you serve, building consistent listings across the web, earning a steady stream of real reviews, and publishing local content tied to Colorado Springs' specific demand patterns — military PCS arrivals, hail-storm insurance work, wildfire rebuild, and the fast-growing suburb belt from Monument to Fountain. Tight neighborhood targeting across the Springs beats one generic city page every time.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Military families search Google the moment they arrive', body: "Fort Carson, Peterson SFB, Schriever SFB, and the Air Force Academy generate a constant rotation of PCS arrivals — families with an immediate need for a trusted contractor and zero local connections to ask. They open Google, find three businesses on the map, and call the first one. If you're not in those three, you're invisible to one of the largest ready-to-hire populations in the market." },
      { title: 'Hail-storm leads go to whoever ranked before the storm', body: "A multi-inch hailstorm drops on Colorado Springs and thousands of homeowners simultaneously search for roofing and siding contractors. The ones who already own the Map Pack book their calendars for months. The ones who weren't ranking scramble for scraps. You cannot wait until the storm to start your local SEO." },
      { title: "You're paying for leads you don't own", body: "Storm chasers and lead brokers flood Colorado Springs after every hail event, selling the same homeowner to three or four contractors at once. Local SEO builds the opposite: a homeowner finds you, calls you, and nobody else got the lead. Over time you stop paying for shared leads and start owning a pipeline that runs year-round." },
    ],
    servicesHeading: 'What it actually takes to rank you in Colorado Springs',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We optimize your categories, services, service area, photos, and posts so Google knows exactly which Colorado Springs searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing across the Front Range." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes PCS arrivals and storm-damage homeowners pick up the phone." },
      { name: 'Neighborhood pages', desc: "Real pages for Briargate, Black Forest, Fountain, Monument, Peyton, and Falcon so you rank for the specific neighborhood someone's actually in — not just \"Colorado Springs.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The foundation that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Colorado Springs and Front Range sources Google trusts — local press, HOA networks, veterans' organizations, trade associations. This is what separates page one from page two here." },
      { name: 'Seasonal and storm SEO', desc: "We optimize for hail-season and wildfire-rebuild searches ahead of time so you're visible when demand spikes, not chasing it after — and for winter snow searches that drive emergency calls from November to March.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across Colorado Springs neighborhoods and identify which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now over starting later — especially before hail season." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Briargate, Black Forest, Monument, Fountain, and beyond, plus the on-page work to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Colorado Springs neighborhoods and suburbs.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map from Monument to Fountain.', features: ['Everything in Local Growth', 'Local link building', 'Seasonal and storm SEO', 'Multi-neighborhood and suburb pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Colorado Springs?', a: "Most Colorado Springs engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're targeting. Our tiers are right above with no hidden fees and no long contract. We confirm exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. Competitive Colorado Springs keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days in a market this active is selling you something." },
      { q: 'Why do military PCS arrivals matter for local SEO?', a: "Colorado Springs has one of the highest concentrations of active-duty military in the country. PCS families arrive on orders, need contractors immediately, and have no local network to ask. They open Google, find three businesses on the map, and call. If you're not in those three, you don't exist to them — and it's a constant cycle of new arrivals year-round." },
      { q: 'How does local SEO help me after a hail storm?', a: "If you're already ranking when a storm hits, the surge of homeowners searching for roofing and siding contractors lands on you instead of your competitors. Local SEO takes months to build — you have to be in place before the storm, not scrambling after. We get you there ahead of hail season." },
      { q: 'Which areas do you cover around Colorado Springs?', a: "The full metro and suburb belt: Briargate, Black Forest, Monument, Fountain, Peyton, Falcon, Pueblo West, Manitou Springs, Old Colorado City, Security-Widefield, Rockrimmon, Northgate, and Broadmoor. We build genuine neighborhood pages instead of one generic Colorado Springs page." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand hail-storm insurance work, wildfire rebuild, and fire-hardening projects, and we build your local SEO around them." },
      { q: 'Can you help with wildfire rebuild and fire-hardening work?', a: "Yes. After the Waldo Canyon and Black Forest fires, Colorado Springs homeowners are uniquely aware of fire-hardening and ember-resistant materials. We can optimize your profile and content to show up for those searches — a contractor category that barely exists in most other markets." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your Colorado Springs neighborhoods, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers modeled for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'colorado-springs', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Colorado Springs SEO Company | Rank Higher, Get Leads | OnwardCraft',
    metaDescription:
      'Colorado Springs SEO for contractors. Rank for hail-storm, military, and wildfire rebuild searches. Revenue-tied reporting, no lock-in. Free SEO audit.',
    eyebrow: 'SEO Services · Colorado Springs, CO',
    h1: 'Get your Colorado Springs business to the top of Google and keep it there',
    h2Exact: 'Colorado Springs SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Colorado Springs customers search — hail damage, fire hardening, contractor near me — and the leads keep coming. We build that ranking and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free Colorado Springs SEO audit',
    intro:
      "Colorado Springs SEO comes down to one question: when someone in Briargate or Fountain searches what you do, are you on page one or page two? Page two might as well be page fifty. This market has some of the most intense and predictable search demand in the country — military PCS arrivals, hail-storm insurance surges, wildfire rebuild — and the contractors who own page one when those spikes hit dominate. We get you there and measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Colorado Springs businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content tied to Colorado Springs' specific demand patterns — PCS military arrivals, hail-damage insurance claims, wildfire rebuild, and high-altitude exterior maintenance — and earning links from trusted local sources. Seasonal SEO for hail season and pre-positioning before wildfire season are two of the fastest ways to pull ahead of competitors here.",
    problemHeading: "Three reasons your Colorado Springs site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two when demand spikes", body: "When a hailstorm rolls through Colorado Springs and thousands of homeowners suddenly search for roofing contractors, the calls go to whoever is already on page one. When military families arrive at Fort Carson and search Google for an HVAC contractor, they call whoever ranks first. You cannot catch a surge if you're not visible before it starts — and SEO takes months to build." },
      { title: "You're renting traffic instead of owning it", body: "Google Ads can work, but you stop existing the moment your budget runs out — and storm chasers and lead brokers flood the Springs after every hail event, driving up costs and selling the same lead to multiple contractors. SEO builds an asset you own: rankings that keep producing leads for months and years after the work is done, at a fraction of the per-lead cost." },
      { title: "You're missing the searches that define this market", body: "Most Colorado Springs SEO ignores the demand that makes this city unique: PCS arrival searches, hail-damage and insurance-claim searches, wildfire-rebuild and fire-hardening searches, and high-altitude roofing and exterior maintenance. If your SEO is a generic template with a city name swapped in, you're leaving the highest-intent searches in this market on the table." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings in Colorado Springs',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms Colorado Springs customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real Colorado Springs and Front Range sources. In a competitive market, links are often what separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across Colorado Springs' neighborhoods and suburbs alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Hail-season and wildfire SEO', desc: "We rank you for hail-damage, insurance-claim, fire-hardening, and defensible-space searches before the season hits — so demand spikes land on you instead of your competitors.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Colorado Springs leads — including seasonal and storm-driven demand." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content covering hail-season, wildfire-rebuild, PCS-arrival, and neighborhood-level searches." },
      { name: 'Build authority', desc: "Links and citations from trusted Colorado Springs and Front Range sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Colorado Springs SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Colorado Springs search.', features: ['Everything in SEO Growth', 'Hail-season and wildfire SEO', 'Aggressive content + links', 'Multi-neighborhood pages', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Colorado Springs?', a: "Most Colorado Springs SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Colorado Springs?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter neighborhood terms and slower on the most competitive citywide keywords. The critical thing here is being ranked before hail season and wildfire season hit — you cannot build rankings in real time during a surge." },
      { q: 'Is SEO better than Google Ads for contractors in Colorado Springs?', a: "They do different jobs. Ads buy traffic that stops when you stop paying — and after a hail storm, lead brokers and storm chasers drive CPC prices through the roof. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most contractors do best running SEO as the long-term engine and ads for immediate coverage during peak season." },
      { q: 'How do you help with hail-storm and insurance-claim searches?', a: "We optimize your site for hail-damage, insurance-claim, and roof-inspection searches ahead of hail season, so when a storm rolls through Colorado Springs you're already on page one and the surge lands on you. This is pre-positioning — it has to happen before the storm, not after." },
      { q: 'Can you help with wildfire rebuild and fire-hardening SEO?', a: "Yes, and this is a contractor niche that barely exists in most other cities. After Waldo Canyon and Black Forest, Colorado Springs homeowners actively search for fire-hardening, defensible space, and ember-resistant roofing. We optimize for those terms and can help you own a category most contractors ignore." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which areas around Colorado Springs do you cover?', a: "The full metro and suburb belt — Colorado Springs, Monument, Black Forest, Briargate, Powers, Fountain, Peyton, Falcon, Pueblo West, Manitou Springs, and more — with genuine local pages rather than one generic city page." },
      { q: 'How do you get me off storm-chaser lead brokers?', a: "By building rankings that send homeowners directly to you before and during storm season. The more you own your search visibility, the less you depend on paying brokers for shared leads at peak-season prices." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business — including how you're positioned ahead of hail season. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'colorado-springs', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Colorado Springs Web Design | Sites That Convert | OnwardCraft',
    metaDescription:
      'Web design for Colorado Springs contractors. Fast, mobile-first sites built to convert military PCS arrivals and hail-storm leads into booked jobs. Transparent pricing, you own it. Free quote.',
    eyebrow: 'Web Design · Colorado Springs, CO',
    h1: 'Colorado Springs web design that turns visitors into booked jobs',
    h2Exact: 'Colorado Springs Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Colorado Springs contractors fast, mobile-first sites engineered to convert military PCS arrivals, hail-storm insurance leads, and everyday homeowners into booked work — and to stand out when it matters most.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Colorado Springs contractor websites lose leads quietly: slow on a phone, buried call button, nothing that speaks to the military community or the hail-damage rush that defines work here. We build sites that load fast, look like the professional you are, and turn visitors from Briargate to Fountain into booked jobs — designed specifically for a market where PCS families search Google the moment they land in town and hail storms can trigger a wave of simultaneous calls overnight.",
    aioQuestion: 'What makes a good contractor website in Colorado Springs?',
    aioAnswer:
      "A good Colorado Springs contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and speaks directly to the demand patterns that define this market: military families who need a contractor fast, homeowners with hail damage navigating an insurance claim, and wildfire-aware homeowners thinking about fire-hardening. Because most searches here happen on mobile and competition intensifies after every storm, mobile speed and an obvious next step are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It doesn't speak to military families", body: "A significant share of Colorado Springs homeowners are active duty or veterans who move here on PCS orders and need contractors fast, with no local network to ask. A generic site that doesn't acknowledge the military community, speak to their timeline, or build quick trust is leaving a massive ready-to-hire audience on the table." },
      { title: "It's too slow to catch a hail-storm surge", body: "A major hailstorm hits and thousands of homeowners simultaneously search for roofing contractors. If your site is slow, clunky on mobile, or buried on page two, those leads go to competitors before yours even loads. We build fast and optimize for exactly these surges, so when the storm hits, your site is ready." },
      { title: "It blends in instead of standing out", body: "Colorado Springs has a competitive contractor market that gets even more crowded after storms, when out-of-town storm chasers flood in. A site that looks like everyone else's gives homeowners no reason to trust you over a storm chaser with a slick pitch. We build sites that establish you as the local professional they should trust." },
    ],
    servicesHeading: "What's in an OnwardCraft Colorado Springs website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your Colorado Springs neighborhoods, and the jobs you actually want." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your traffic is — especially from military families and homeowners searching right after a storm." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that build trust fast with military families and hail-damage homeowners, and that speak to the Colorado Springs market instead of sounding like a national template." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages from Briargate to Fountain." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings — especially critical when a storm drives a sudden surge of traffic." },
      { name: 'Neighborhood-targeted pages', desc: "Pages built around the suburbs and neighborhoods you serve — Monument, Black Forest, Peyton, Falcon, Pueblo West — so you rank locally instead of blending into one generic Colorado Springs page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your Colorado Springs neighborhoods, your best jobs, and your competitors — including how military families and storm-damage homeowners search — then map the site around booking more of the work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page and trust signals that matter to this market." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting — including pre-season optimization ahead of hail season." },
    ],
    pricing: {
      heading: 'Transparent Colorado Springs web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Neighborhood-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Colorado Springs?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'How does a website help me reach military families?', a: "Military PCS arrivals have no local network and search Google immediately. A fast, trustworthy site that shows up for their searches, builds credibility fast, and makes it easy to call you is how you earn their business before any competitor does. We design for exactly that — quick trust signals, obvious next steps, and local credibility that storm chasers and out-of-towners can't fake." },
      { q: 'Will my new site help me capture hail-storm leads?', a: "Yes. We build fast, mobile-optimized sites that are ready for the surge of searches after a major storm. Combined with local SEO, the homeowners searching for roofing and siding contractors find you and call you — not the storm chaser who blew into town yesterday." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Colorado Springs terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your Colorado Springs traffic comes from — especially from homeowners searching right after a storm or military families arriving in a new city." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Colorado Springs contractor site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'colorado-springs', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Colorado Springs Website Redesign | More Leads, No Loss | OnwardCraft',
    metaDescription:
      'Redesign your Colorado Springs website without losing rankings. Faster, mobile-first rebuilds that convert military families and hail-storm leads into booked jobs. Free audit.',
    eyebrow: 'Website Redesign · Colorado Springs, CO',
    h1: 'Redesign your Colorado Springs website without losing your rankings',
    h2Exact: 'Colorado Springs Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow on a phone, hard to trust, invisible to military PCS arrivals searching Google the moment they land. We redesign Colorado Springs contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Colorado Springs contractor sites for speed and conversions — built to earn trust from military families, capture hail-season leads, and stand out against storm chasers — and we migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure or mapping 301 redirects for every changed page, preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign holds your rankings and improves them, because the new site is faster, more mobile-friendly, and better structured than the old one. In Colorado Springs, timing matters too — try to complete a redesign and reindex before hail season, so you're ranking cleanly when the surge hits.",
    problemHeading: "Signs your Colorado Springs site is overdue for a redesign",
    painPoints: [
      { title: "It loses trust before military families even call", body: "PCS arrivals are judging you in seconds on a phone. An old, cluttered, slow site quietly signals \"unreliable\" to someone who has no local network to fall back on for a recommendation. They move on to a competitor with a more professional look — even when your work is far better." },
      { title: "It can't handle a hail-storm surge", body: "A major storm hits and your outdated site is slow, hard to navigate on mobile, and buried on page two. The homeowners who search during the surge bounce before they find your number. A rebuilt, fast, mobile-first site — paired with pre-positioned SEO — is how you actually capture that demand." },
      { title: "It blends into a crowded post-storm market", body: "After every major hailstorm, out-of-town storm chasers flood Colorado Springs with polished pitches. An old site makes it harder to prove you're the established local professional. We rebuild around local trust signals, real neighborhood specificity, and the credibility that storm chasers can't fake." },
    ],
    servicesHeading: "What's in an OnwardCraft Colorado Springs redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing the color scheme." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned — timed carefully before hail season if possible." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. Designed to book jobs, not just look good." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for conversions, better for rankings, and ready for the traffic spikes that come after a major storm." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your Colorado Springs traffic lives — especially from military families and homeowners searching in the field." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that establishes you as the established local professional — not someone who just pulled into town with a truck and a flyer." },
      { name: 'Neighborhood-targeted rebuild', desc: "Rebuilt around the suburbs and neighborhoods you serve — Black Forest, Monument, Fountain, Peyton, Falcon — so the new site ranks locally and stands out against storm-season competition.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you leads and rankings — and look at how you're positioned for hail season and PCS-arrival traffic — then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and improve, not drop — especially before a peak season." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Colorado Springs redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Neighborhood-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Colorado Springs?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them. Timing before hail season is also something we plan for explicitly." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, can't handle a surge of hail-storm traffic, or doesn't establish the local trust that military families need when they arrive in a new city, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Can you help me stand out against storm chasers?', a: "Yes, and that's a real issue in Colorado Springs after every major hailstorm. We rebuild around local trust signals — real neighborhood specificity, established presence, professional credibility — that out-of-town storm chasers can't fake. A site that looks like the local expert wins over a flyer from someone who blew in last week." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals — ready for everyday traffic and for the spikes that come when a storm rolls through or a new PCS cycle starts." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix — including how you're positioned for hail season and military-family traffic — and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const coloradoSpringsCity = {
  citySlug: 'colorado-springs', city: 'Colorado Springs', state: 'Colorado', stateAbbr: 'CO', metro: 'Colorado Springs',

  titleTag: 'Colorado Springs Marketing for Contractors | Web, SEO & Leads | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Colorado Springs contractors. Get found by military PCS arrivals, hail-storm homeowners, and wildfire rebuild clients. Own your leads, no lock-in. Free audit.',

  eyebrow: 'Colorado Springs · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Colorado Springs contractors found and booked',
  h2Exact: 'Colorado Springs Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Colorado Springs' military-dense, hail-prone, wildfire-aware market. One team to get you ranking before the storm, converting military PCS arrivals, and off the storm-chaser lead treadmill.",
  heroProof: ['Built for the trades', 'Neighborhood-level targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Colorado Springs audit',

  intro:
    "If you run a contracting business in Colorado Springs, you're operating in one of the most uniquely demanding markets in the country. Military PCS families arrive year-round with an immediate need and no local network. Hailstorms drive thousands of simultaneous insurance-claim searches that last weeks. Wildfire awareness creates a fire-hardening and defensible-space market that barely exists anywhere else. And a fast-growing suburb belt from Monument to Fountain keeps expanding the territory you need to cover. Winning here takes three things working together: a site that converts under pressure, SEO that ranks you before the surges hit, and local SEO that puts you in the Map Pack for every neighborhood you serve. Here's how we help Colorado Springs contractors do exactly that.",
  aioQuestion: 'How do Colorado Springs contractors get more leads online?',
  aioAnswer:
    "Colorado Springs contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for the searches that define this market — military PCS arrivals, hail-damage insurance claims, wildfire rebuild, and neighborhood-level \"near me\" searches — and local SEO that wins the Google Map Pack across a fast-growing suburb belt. Pre-positioning before hail season and building trust signals that work for military families are two of the fastest ways to pull ahead of competitors here.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Colorado Springs searches \"near me.\" Military PCS arrivals, hail-storm homeowners, and wildfire rebuild clients call whoever ranks first — and that should be you.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the hail-season, military-arrival, and wildfire-rebuild searches that drive this market. Build an asset you own instead of renting traffic from ads or lead brokers who sell the same storm lead to four contractors.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites built to earn quick trust from PCS families, capture hail-storm insurance leads, and stand out against storm chasers who blow in after every major event.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions — timed before hail season if possible — and migrate carefully so you keep every bit of ranking you've already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Colorado Springs?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank before hail season, convert military PCS arrivals, and own their leads instead of buying them from storm chasers." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors — so we understand hail-storm insurance work, wildfire rebuild, fire-hardening projects, and the military-family market that makes Colorado Springs unique." },
    { q: 'Why does the Colorado Springs market need a different approach?', a: "Three things make it unique: a constant PCS military churn that sends high-intent homeowners straight to Google with no local referral network; hail-storm insurance surges that reward whoever is already ranking; and a wildfire-rebuild and fire-hardening market that doesn't really exist anywhere else. A generic template with a city name swapped in misses all of it." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Colorado Springs areas do you serve?', a: "The full metro and suburb belt — Colorado Springs, Monument, Black Forest, Briargate, Powers, Fountain, Peyton, Falcon, Pueblo West, Manitou Springs, Old Colorado City, Security-Widefield, Rockrimmon, Northgate, and Broadmoor — with genuine local pages rather than one generic city page." },
    { q: 'Where should I start?', a: "Start with a free Colorado Springs audit. We'll look at your website, your rankings, and your Map Pack presence — including how you're positioned for hail season and military-family traffic — and tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};
