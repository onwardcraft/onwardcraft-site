// BIRMINGHAM: per-metro, per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Birmingham's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// BIRMINGHAM: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Birmingham takes more than a city name swap',
  body:
    "Birmingham is two cities stacked on top of each other, and the homeowners in each search nothing alike. Inside the city you have Forest Park, Crestwood, and Avondale, blocks of pre-war bungalows and cottages that a younger, design-minded crowd is gutting and restoring one house at a time. The wiring is old, the foundations settle on red clay, and the renovation work runs deep. Drop south over Red Mountain into Mountain Brook, Vestavia Hills, and Hoover and the houses get larger, the budgets get heavier, and the whole local economy bends around UAB and the medical district that employs much of the metro. The weather sets the calendar. Birmingham sits inside Dixie Alley, the Deep South tornado corridor, and the April 2011 super outbreak tore straight through the region; spring still means roofers and storm-restoration crews fielding calls the morning after every line of severe thunderstorms rolls through. Add the summer humidity that punishes HVAC systems from June into September, and you get a demand calendar most national agencies never bother to model. The contractor who already sits in the Map Pack when the sirens go off is the one who picks up the next week of work.",
  pullQuote: 'When a spring tornado tears through a Birmingham neighborhood or summer humidity buries an HVAC crew in calls, the contractor already on the map is the one homeowners reach first.',
  donut: {
    title: 'City of Birmingham demographics',
    value: 69,
    centerLabel: 'Black/AA (city)',
    legend: [
      { label: 'Black/AA', pct: 69, kind: 'teal' },
      { label: 'Other', pct: 31, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes in Birmingham',
  seasonCaption: 'Severe storm and tornado season (Mar to May), summer HVAC strain (Jun to Sep)',
  seasonalDemand: [
    { m: 'J', v: 94, peak: true }, { m: 'F', v: 90, peak: true }, { m: 'M', v: 88, peak: true },
    { m: 'A', v: 92, peak: true }, { m: 'M', v: 80, peak: true }, { m: 'J', v: 72 },
    { m: 'J', v: 86, peak: true }, { m: 'A', v: 88, peak: true }, { m: 'S', v: 82, peak: true },
    { m: 'O', v: 54 }, { m: 'N', v: 48 }, { m: 'D', v: 58 },
  ],
  stats: [
    { value: '1.1M+', label: 'people across the greater Birmingham metro area' },
    { value: '~69%', label: 'of Birmingham city residents identify as Black or African American', accent: true },
    { value: 'Mar to May', label: 'Dixie Alley storm season, when roofing and restoration calls spike overnight' },
    { value: 'Top 3', label: 'Map Pack spots that capture most clicks in any local search' },
  ],
  neighborhoods: [
    'Forest Park', 'Crestwood', 'Avondale', 'Mountain Brook', 'Vestavia Hills',
    'Hoover', 'Homewood', 'Pelham', 'Trussville', 'Moody', 'Gardendale',
    'Five Points South', 'Southside', 'Lakeview', 'Roebuck',
  ],
};

const AREAS = [
  'Forest Park', 'Crestwood', 'Avondale', 'Mountain Brook', 'Vestavia Hills',
  'Hoover', 'Homewood', 'Pelham', 'Trussville', 'Moody', 'Gardendale',
  'Southside', 'Roebuck', 'Center Point', 'Irondale',
];

const FOUNDER =
  "I'll be straight with you: I kept watching good contractors, solid roofers, honest HVAC guys, skilled renovation crews, pay Angi and HomeAdvisor month after month for leads they shared with three competitors. In Birmingham especially, where a single tornado outbreak or a brutal humid summer can make or break a contractor's year, the businesses who rank and own their leads are the ones who come out ahead every time. That's what we build here: a pipeline you own, in the neighborhoods you actually serve, built around the demand patterns that are specific to this city.";

const WHY = [
  {
    title: 'We understand Birmingham demand cycles',
    body: "Tornado and severe-storm season in spring, then humid HVAC summers that grind from June into September. We build your visibility around when Birmingham homeowners actually search, so you're already in position before the spike hits instead of scrambling after the sirens stop.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for a homeowner who also called three other contractors that morning. Local SEO and a site that converts are how you get there.",
  },
  {
    title: 'We serve both sides of Red Mountain',
    body: "The in-town neighborhoods and the over-the-mountain suburbs are two different worlds. A Forest Park renovator searches nothing like a Vestavia Hills homeowner protecting a high-value house. We build for both, with content and targeting that works across the full metro.",
  },
  {
    title: 'No contracts, no mystery',
    body: "Published prices, reporting tied to leads, month-to-month after 90 days. If we're not earning it, you leave. That keeps the accountability exactly where it belongs, on us.",
  },
];

const PROOF = {
  heading: "We're new, so here's the honest math instead of a logo wall",
  body:
    "Most agencies open with a wall of client logos. We are a young, founder-led shop in Birmingham, so we are not going to fake a track record we have not earned yet. What we will hand you instead is the plain reasoning, pulled straight from Google's and the industry's own research on how people actually search for a local contractor.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Birmingham contractor gets around 1,200 local \"near me\" impressions a month across a handful of neighborhoods. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a booked-out calendar, and in a market where demand jumps overnight after a tornado outbreak, that gap is brutal. In your free audit, we model the real numbers for your business: your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Birmingham', state: 'Alabama', stateAbbr: 'AL', metro: 'Birmingham',
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const birminghamLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'birmingham', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Birmingham Local SEO Company | OnwardCraft',
    metaDescription:
      'Search your service in Birmingham and three businesses show up on the map. We get you into those three so the call lands with you after the next storm rolls through.',
    eyebrow: 'Local SEO · Birmingham, AL',
    h1: 'When Birmingham searches for what you do, be the first name they find',
    h2Exact: 'Birmingham Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them barely exists. In a Dixie Alley metro where a spring storm can flip every roofing phone on at once, we get you into that top three for your neighborhoods so the work lands with you instead of whoever ranked first.",
    primaryCta: 'Get my free Birmingham audit',
    intro:
      "Birmingham local SEO comes down to one thing: when a homeowner in Vestavia Hills or Crestwood searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. This metro splits into two markets, the older in-town neighborhoods full of pre-war housing and the over-the-mountain suburbs built around the UAB medical economy, and the contractors who rank for both are the ones who stay booked. Here's how you do it.",
    aioQuestion: 'How do Birmingham businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile tuned to the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to actual Birmingham neighborhoods. Because spring tornado season and humid HVAC summers create sudden demand windows, the contractors who rank before the spike capture the most calls. Targeting both the in-town districts and the suburbs over Red Mountain is what separates the Map Pack winners from everyone else.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Three competitors hold the map spots you want', body: "Pull up your own service plus \"near me\" on your phone right now. The three businesses Google drops onto the map take the bulk of the clicks, and most people never scroll past them. When you're not one of the three, your craftsmanship barely registers, because hardly anyone sees your name to begin with. Breaking into that trio for Forest Park, Hoover, or Vestavia Hills is usually the single biggest return a Birmingham contractor can buy." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Birmingham homeowner to four contractors, then bill each of you to fight over the job. It's a treadmill. Local SEO builds the opposite: a homeowner finds you, calls you, and nobody else got it. Over time you stop renting and start owning the pipeline." },
      { title: "You're missing the surge after storms", body: "Birmingham's severe-storm and tornado seasons create sudden, short demand spikes. When a line of storms rolls through overnight, homeowners search at sunrise, and whoever already ranks fields the calls. If you're not in the Map Pack before the storm, you miss the surge entirely, because there's no time to build rankings after the fact." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Birmingham searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to read the same in every directory Google checks. We clean up the Birmingham listings that disagree with each other and build out the ones you never claimed." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes people pick up the phone after they see your name in the Map Pack." },
      { name: 'Neighborhood pages', desc: "Real pages for Vestavia Hills, Mountain Brook, Hoover, Crestwood, and the rest, so you rank for the neighborhood someone's actually searching, not just \"Birmingham.\"" },
      { name: 'On-page and technical SEO', desc: "Title tags, schema, internal links, and mobile speed. This is the wiring behind the wall that lets the Map Pack and neighborhood pages actually rank in Birmingham search." },
      { name: 'Local link building', desc: "Mentions and links from Birmingham sources Google trusts: local press, business associations, neighborhood groups, industry partners. This is what separates page one from page two." },
      { name: 'Storm and seasonal SEO', desc: "Tornado and storm restoration, spring roofing, and summer HVAC searches are Birmingham's biggest demand spikes. We optimize for them before the season hits so you're in position when calls pour in.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your Birmingham neighborhoods and suburbs and identify which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP come first, because they move the needle the fastest. Most Birmingham contractors see early lift here inside the first few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now over starting later, especially before storm season." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across the city and the over-the-mountain suburbs, plus the on-page work to back them up, with seasonal storm and demand content woven in." },
      { name: 'Report and expand', desc: "Plain-English reporting built around real calls and booked jobs, never vanity rank screenshots. Once one neighborhood is locked, we push into the next one over the mountain." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Birmingham neighborhoods and suburbs.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map from Avondale to Hoover.', features: ['Everything in Local Growth', 'Local link building', 'Storm and seasonal SEO', 'Multi-neighborhood service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Birmingham?', a: "Most Birmingham engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The more competitive Birmingham keywords usually take 90 to 180 days of steady work. Anyone promising you page one in 30 days is selling you something, but starting before spring storm season means you're in position before the surge." },
      { q: 'What makes Birmingham local SEO different from other cities?', a: "Two things most agencies miss. First, Birmingham sits in Dixie Alley, so severe-storm and tornado season in spring creates sudden short windows of heavy call volume, and you have to be ranked before the storm, not scrambling after. Second, the metro has two distinct markets: older in-town neighborhoods like Forest Park and Crestwood with pre-war renovation housing, and the affluent UAB-economy suburbs over Red Mountain like Mountain Brook and Vestavia Hills. Ranking well means covering both." },
      { q: 'Can you help me rank before tornado and storm season?', a: "Yes, and it's one of the main things we plan around. Severe weather peaks in Birmingham from March through May, and a single outbreak can flood roofers and restoration crews with work overnight. We build your Map Pack presence and storm-related content well ahead of that window so you capture the surge when it hits." },
      { q: 'Which Birmingham areas do you cover?', a: "The full metro: Forest Park, Crestwood, Avondale, Mountain Brook, Vestavia Hills, Hoover, Homewood, Pelham, Trussville, Moody, Gardendale, Southside, and more. We build genuine neighborhood pages instead of one generic Birmingham page, because \"[service] Vestavia Hills\" and \"[service] Avondale\" are different searches with different customers." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand storm restoration cycles, the headaches of working on Birmingham's older housing stock, and the insurance-job pipeline that drives so much work here." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "A real share of \"near me\" research in Birmingham now starts inside AI tools rather than a plain Google search. We structure your content and schema so those engines can read your business, trust it, and name it when a homeowner asks. For storm-restoration questions especially, that AI answer is becoming as decisive as the Map Pack." },
      { q: 'Am I locked into a contract?', a: "No. We ask for 90 days up front because that is honestly about how long local SEO needs to show real movement in a market this competitive. After that you go month-to-month. If the work is not paying for itself, you cut us loose, and the pressure stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads at prices that add up fast. We build rankings, a strong Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because the work is coming to you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your Birmingham neighborhoods, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers modeled for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'birmingham', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Birmingham SEO Company | OnwardCraft',
    metaDescription:
      'Birmingham SEO for contractors: rank on Google before spring storm season, own your leads, and stop paying for shared Angi referrals every month.',
    eyebrow: 'SEO Services · Birmingham, AL',
    h1: 'Get your Birmingham business to the top of Google and keep it there',
    h2Exact: 'Birmingham SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Birmingham customers search and the leads keep coming. We build that ranking and tie every report to actual calls and jobs, not vanity traffic.",
    primaryCta: 'Get my free Birmingham SEO audit',
    intro:
      "Birmingham SEO comes down to one question: when a homeowner in Hoover or Forest Park searches your service, are you on page one or page two? Page two might as well be invisible. We get contractors ranking for the money keywords in this market, including the storm-restoration and seasonal HVAC terms that drive the biggest surges of the year, and we measure it in leads, not traffic.",
    aioQuestion: 'How do Birmingham businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of their site, optimizing each page for the exact terms customers search, publishing genuinely useful local content tied to specific Birmingham neighborhoods and suburbs, and earning links from trusted Alabama sources. In Birmingham the highest-return SEO moves often involve storm and seasonal terms: ranking for tornado roofing, storm restoration, and summer HVAC before those demand spikes hit is what separates busy contractors from idle ones.",
    problemHeading: "Three reasons your Birmingham site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. If you're not in the top results for what you sell in Birmingham, your site is basically invisible, no matter how good it looks or how solid your reputation is." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your budget runs out, the leads stop. SEO builds an asset you own: rankings that keep producing leads long after the work is done, at a fraction of the per-lead cost of paid search or lead brokers." },
      { title: "You're not ranked when storms hit", body: "Birmingham's biggest demand events, tornado outbreaks in spring and brutal humid HVAC summers, create sudden spikes in search volume. Ranking takes months to build, so you have to be in place before the season, not after the storm has passed and the phones have already gone quiet." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, and schema. These are the fixes Google quietly demands before it will rank a Birmingham contractor site for anything that matters." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your Birmingham customers search: titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer the questions Birmingham homeowners type after a storm or before a renovation, earn links, and keep pulling leads long after we publish them." },
      { name: 'Link building', desc: "Authority from real Birmingham and Alabama industry sources. In a competitive market, links are often what separates page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across your Birmingham neighborhoods alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on phone calls, form fills, and booked jobs, not just rank positions and traffic graphs, so you can see in dollars what your Birmingham SEO is returning each month." },
      { name: 'Storm & seasonal SEO', desc: "We rank you for tornado restoration, storm-damage roofing, and summer HVAC terms before those demand windows open, so your phone rings when Birmingham searches spike hardest.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content and schema so AI Overviews, ChatGPT, and Perplexity can surface and cite your business by name, since a growing slice of Birmingham search now opens inside those tools.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors across Birmingham, then build a roadmap around the keywords most likely to drive real leads, including storm and seasonal terms." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile rendering. This is the groundwork every page needs in place before it can climb in Birmingham search." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the storm-restoration and seasonal terms that matter most in this market." },
      { name: 'Build authority', desc: "Links and citations from trusted Birmingham and Alabama industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to actual leads, then we pour more into the keywords that are paying and chase the next set, storm and seasonal terms included." },
    ],
    pricing: {
      heading: 'Transparent Birmingham SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and Birmingham neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Birmingham search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Storm & seasonal SEO', 'Multi-neighborhood targeting', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Birmingham?', a: "Most Birmingham SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Birmingham?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter neighborhood terms and slower on the most competitive citywide keywords. The earlier you start before storm season, the more you benefit when demand spikes hit." },
      { q: 'Is SEO better than Google Ads for Birmingham contractors?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. For contractors who need to be visible before tornado season and the summer HVAC rush, building organic rankings well ahead of those windows is especially valuable." },
      { q: 'Why does storm and seasonal SEO matter so much in Birmingham?', a: "Because Birmingham's demand spikes are sudden and short. A line of spring storms rolls through overnight and the search volume for roofing damage, tree removal, and water cleanup jumps by morning. If you're not already ranking when that happens, you miss the surge entirely. We build your storm and seasonal content well in advance so you're in position when the calls start." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add storm and seasonal SEO and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for 90 days at the start because that is about how long SEO takes to show real movement on Birmingham keywords, and then you are month-to-month. If we are not earning the invoice, you walk." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a growing slice of what we tune for. We structure your content and schema so AI engines can read, trust, and name your business when a Birmingham homeowner asks them who to call, not just rank you in classic results." },
      { q: 'Which Birmingham areas do you cover?', a: "The full metro: Forest Park, Crestwood, Avondale, Mountain Brook, Vestavia Hills, Hoover, Homewood, Pelham, Trussville, Gardendale, and more, with genuine local pages rather than one generic Birmingham page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that route the lead straight to you alone. The more of your Birmingham search visibility you own outright, the less you hand to a broker selling the same homeowner to three competitors." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'birmingham', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Birmingham Web Design Company | OnwardCraft',
    metaDescription:
      'Birmingham web design for contractors: fast, mobile-first sites that convert storm-restoration and renovation leads into booked jobs across the metro.',
    eyebrow: 'Web Design · Birmingham, AL',
    h1: 'Birmingham web design that turns visitors into booked jobs',
    h2Exact: 'Birmingham Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Birmingham contractors fast, mobile-first sites that turn storm-restoration inquiries and renovation leads into booked work, built to win on both sides of Red Mountain.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Birmingham contractor websites lose leads quietly: slow on a phone, buried call button, no clear offer, nothing that speaks to Forest Park renovators or Vestavia Hills homeowners protecting a high-value house. Web design done right fixes all of that. We build sites that load fast, look like the professional you are, and convert visitors into booked jobs, whether they're calling the morning after a storm or hunting for a spring renovation crew.",
    aioQuestion: 'What makes a good contractor website in Birmingham?',
    aioAnswer:
      "A good Birmingham contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with real project photos and reviews, and speaks to the specific neighborhoods and suburbs you serve. Because Birmingham splits into the older in-town renovation belt and the UAB-economy suburbs over Red Mountain, the best sites address both and give homeowners in each a reason to call. Storm-readiness messaging matters too: a site that clearly states your availability during severe-weather season captures the homeowners searching under pressure.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next result. We design every page around one job: turning a visitor into a booked lead, whether they're a Crestwood homeowner restoring a bungalow or a Mountain Brook family dealing with storm damage." },
      { title: "It's too slow on a phone", body: "Most of your Birmingham visitors are on mobile, and they bounce fast if your site is slow. After a storm rolls through, they're searching urgently and have no patience for a clunky site. We build fast, so you keep the visitor and the call." },
      { title: "It doesn't speak to your neighborhoods", body: "A homeowner in Homewood wants to see that you serve Homewood, not a generic \"Birmingham area\" page that could be anybody. We build sites that name the neighborhoods and suburbs you work, so visitors trust you're local and Google ranks you for the right searches." },
    ],
    servicesHeading: "What's in an OnwardCraft Birmingham website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your Birmingham neighborhoods, and the jobs you actually want to book." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your Birmingham traffic comes from, including the urgent post-storm searches." },
      { name: 'Conversion-focused UX', desc: "Clear offers, a call button a homeowner can hit one-handed, and lead forms set where people actually fill them out. Every page points to one obvious next step." },
      { name: 'Copy that sells', desc: "Words that speak to Birmingham homeowners, from Avondale renovation projects to Pelham storm damage, and book the job, not filler text." },
      { name: 'Local SEO foundation', desc: "Built to rank from day one: clean structure, schema, fast load, and pages ready to map onto your Birmingham neighborhoods and the suburbs over the mountain." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and clear Google's performance checks, which matters most when a homeowner is searching under pressure the morning after a storm." },
      { name: 'Neighborhood-targeted pages', desc: "Pages built around the Birmingham neighborhoods and suburbs you serve, Forest Park, Vestavia Hills, Hoover, Trussville and more, so you stand out instead of blending into a generic city page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read your site and recommend you when a Birmingham homeowner asks them for a contractor, as more of that search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your Birmingham neighborhoods, your best jobs, and your competitors, then map the site around booking more of the work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert, and you see it and shape it before we write a single line of code." },
      { name: 'Build and copy', desc: "We build it fast and write copy that speaks to a Birmingham homeowner with storm damage or a renovation in mind, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and load speed all dialed in from the first day live." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting, including seasonal storm pages before demand windows open." },
    ],
    pricing: {
      heading: 'Transparent Birmingham web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Neighborhood-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Birmingham?', a: "Most Birmingham contractor sites with us land between $2,000 and $8,000 as a one-time build, depending on page count and any integrations. The price is fixed, there are no surprises, and you own the finished site outright." },
      { q: 'How long does it take to build?', a: "A focused site runs about 2 to 4 weeks; a larger custom build takes 4 to 8. We hand you a firm timeline at the start and keep you posted at every stage so nothing goes quiet." },
      { q: 'Will my site help me capture leads after storms and tornado damage?', a: "That's one of the specific things we build for. Storm-readiness pages, clear emergency-service messaging, and a fast mobile experience mean homeowners searching urgently after a tornado or severe storm get an easy path to call you, not a slow, confusing site that sends them to the next result." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Birmingham terms." },
      { q: 'Do I own the website?', a: "Completely. The site, the domain, and the content are all yours. No hostage situations, no proprietary platform you can never walk away from." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your Birmingham traffic comes from, especially the urgent post-storm searches." },
      { q: 'What platform do you build on?', a: "We choose the platform that fits your business and that you can actually run yourself, usually WordPress or Webflow. We recommend the right one in your free consult and lay out the tradeoffs in plain English." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month, you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Birmingham site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'birmingham', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Birmingham Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your Birmingham contractor website without losing rankings. Faster, mobile-first rebuilds that turn storm-restoration and renovation leads into jobs.',
    eyebrow: 'Website Redesign · Birmingham, AL',
    h1: 'Redesign your Birmingham website without losing your rankings',
    h2Exact: 'Birmingham Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week: slow, hard to use on a phone, nothing that speaks to Vestavia Hills homeowners or Forest Park renovation buyers. We redesign Birmingham contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish. We do neither. We redesign Birmingham contractor sites for speed and conversions, build them to capture storm and renovation demand, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign holds your rankings and usually improves them, because the new site is faster, mobile-first, and better structured than the old one. For Birmingham contractors, the redesign is also a chance to add storm-readiness and seasonal content that drives demand through spring weather and the summer HVAC rush.",
    problemHeading: "Signs your Birmingham site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "For a high-ticket renovation or storm-restoration job, Birmingham homeowners judge you by your site in seconds. An old, cluttered design quietly sends them to a competitor who looks more established, even when your work is better and your reviews are stronger." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your Birmingham visitors before they ever see your offer. After a tornado or severe storm when homeowners are searching urgently, a slow site is essentially handing the job to whoever loads faster." },
      { title: "It doesn't stand out across the metro", body: "A generic old site in a market that spans older in-town neighborhoods and affluent over-the-mountain suburbs gives a visitor no reason to pick you over the next contractor. We rebuild for conversions and for the specific Birmingham areas you serve, so the right buyers choose you." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pin down exactly what is bleeding you leads and rankings today, so the rebuild fixes the real problems instead of just freshening the paint." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema all handled with care so you keep every bit of the Birmingham rankings and traffic you have already earned." },
      { name: 'Conversion redesign', desc: "Sharper offers, smarter call-to-action placement, and lead forms a homeowner will actually use. We rebuild for booked jobs, not just a prettier screenshot." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and a clean pass on Core Web Vitals, which lifts conversions and rankings at the same time." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your Birmingham traffic lives, including the urgent storm-damage searches." },
      { name: 'Brand refresh', desc: "A modern, credible look that matches the quality of your work and the ticket size of the jobs you want, whether that is a Forest Park bungalow or a Mountain Brook restoration." },
      { name: 'Neighborhood-targeted rebuild', desc: "Rebuilt around the Birmingham neighborhoods you serve, from Avondale and Crestwood to Mountain Brook and Pelham, so the new site stands out instead of reading like everyone else's.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read your rebuilt site and recommend you when a Birmingham homeowner asks them who to hire, as more search moves to AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you leads and rankings, then map a redesign that fixes it without breaking what already works, including storm and seasonal content that's already performing." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design that you review and shape before we touch the build." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and line up every redirect and SEO detail ahead of time for a clean, no-surprises migration." },
      { name: 'Launch with SEO care', desc: "We go live with the redirects in place and watch the Birmingham rankings closely, so they hold and climb instead of slipping." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting, plus storm-season content added well before peak demand windows." },
    ],
    pricing: {
      heading: 'Transparent Birmingham redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Neighborhood-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Birmingham?', a: "Most Birmingham redesigns with us run $2,500 to $9,000 as a one-time project, depending on the size of the site and any integrations. The price is fixed, there are no surprises, and the result is yours to keep." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not when it is done with care, and that is the only way we work. We map a 301 redirect for every URL that changes, carry over your content and metadata, migrate your schema, and test the whole thing on staging before launch. Handled right, a Birmingham redesign holds your rankings and usually nudges them up." },
      { q: 'How long does a redesign take?', a: "A focused redesign runs about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline at the start and a status update at every stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, isn't bringing in leads, doesn't speak to the specific Birmingham neighborhoods you serve, or isn't capturing storm and renovation demand, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, including any storm or seasonal pages that are already performing, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the redesign help me compete in Birmingham?', a: "Yes. We rebuild around the specific neighborhoods and suburbs you serve, make the site fast for mobile users searching urgently after storms, and put the offer and call button front and center, so the new site stands out instead of reading like every other contractor's." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings, and is especially important for the post-storm searches that happen under urgency." },
      { q: 'Do I own the redesigned site?', a: "Completely, the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const birminghamCity = {
  citySlug: 'birmingham', city: 'Birmingham', state: 'Alabama', stateAbbr: 'AL', metro: 'Birmingham',

  titleTag: 'Birmingham Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Birmingham contractors. Rank before spring storm season, own your leads, and stop paying for shared referrals.',

  eyebrow: 'Birmingham · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Birmingham contractors found and booked',
  h2Exact: 'Birmingham Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Birmingham's two-market metro: older in-town neighborhoods, UAB-economy suburbs over Red Mountain, Dixie Alley storms, and humid HVAC summers. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Birmingham audit',

  intro:
    "Running a contracting business in Birmingham means working a market that doesn't behave like anywhere else. You've got older neighborhoods, Forest Park, Crestwood, Avondale, where pre-war renovation work is booming alongside a newer wave of buyers. You've got affluent suburbs over Red Mountain in Mountain Brook, Vestavia Hills, and Hoover, where homeowners have high expectations and high budgets, and where much of the economy runs through UAB and the medical district. And you've got the Alabama weather: Dixie Alley tornado outbreaks and severe thunderstorms in spring that hit the metro hard, plus humid summers that punish HVAC systems from June into September. Winning here takes three things working together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack for the specific neighborhoods you serve, built around the demand cycles that are specific to Birmingham.",
  aioQuestion: 'How do Birmingham contractors get more leads online?',
  aioAnswer:
    "Birmingham contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack neighborhood by neighborhood. The biggest differentiator in Birmingham is timing: the contractors already ranked when spring storms tear through Dixie Alley, or when summer humidity overloads HVAC systems, capture the sudden demand surges that drive the most urgent calls. Building that visibility well in advance, across both the older in-town neighborhoods and the over-the-mountain suburbs, is what separates booked contractors from idle ones.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Birmingham searches \"near me.\" Be in position before the next spring storm or summer HVAC rush so you capture the surge when it hits.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search, storm restoration, HVAC, renovation, and build an asset you own instead of paying for shared leads month after month.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites that turn storm-damage inquiries and renovation leads into booked jobs, built for a market that spans older in-town neighborhoods and affluent suburbs.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, add the storm and seasonal content that Birmingham demand requires, and migrate carefully so you keep every ranking you've earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Birmingham?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads across both the city and the suburbs over Red Mountain." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors, so we understand storm restoration cycles, the quirks of Birmingham's older housing stock, and the insurance-job pipeline that drives a lot of work here." },
    { q: 'Why does Birmingham need a different SEO approach?', a: "Because the demand patterns here are unlike most markets. Birmingham sits in Dixie Alley, so severe thunderstorms and tornado outbreaks in spring create sudden surges in roofing, restoration, and tree-damage calls; the April 2011 super outbreak hit the area directly and still shapes how homeowners think about storm risk. Humid summers then push HVAC demand from June into September. On top of that, the metro is two distinct markets: the older renovation neighborhoods in town and the affluent UAB-economy suburbs over Red Mountain. Winning means being visible across both and being ranked before the seasonal windows open." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO run month-to-month from $750 to $3,000, with no long contract holding you in. We pin down the exact scope and price for your Birmingham business in the free audit." },
    { q: 'Which Birmingham areas do you serve?', a: "The full metro: Forest Park, Crestwood, Avondale, Mountain Brook, Vestavia Hills, Hoover, Homewood, Pelham, Trussville, Moody, Gardendale, and more, with genuine neighborhood targeting rather than one generic Birmingham page." },
    { q: 'Where should I start?', a: "Start with a free Birmingham audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest, and whether you're positioned for the next storm or seasonal demand spike. No pitch deck, just a plan." },
  ],
};
