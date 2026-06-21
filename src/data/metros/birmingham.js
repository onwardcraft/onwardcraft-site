// BIRMINGHAM — per-metro × per-service local landing pages + city hub.
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
// BIRMINGHAM — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Birmingham is more complicated than most cities',
  body:
    "Birmingham is a city of sharp contrasts. Inside the city proper you have historic neighborhoods — Forest Park, Crestwood, Avondale — full of older industrial-era housing stock that's now being renovated by a younger, design-conscious generation. Drive fifteen minutes south into Hoover, Vestavia Hills, or Mountain Brook and you're in some of the most affluent suburbs in Alabama, built around the sprawling UAB medical complex. Two things shape contractor demand here in ways no national agency ever models. First, Birmingham sits squarely in Alabama's tornado corridor. The April 2011 outbreak hit the metro directly and tore through roofs and attics across the region — and the memory of that storm means roofing and storm-restoration marketing hits differently here than in almost any other Southern city. Second, Birmingham has an ice problem. Not a snow problem — an ice problem. Southern cities simply do not have the infrastructure to handle the glazed roads and downed trees that come with an ice storm, and Birmingham has been caught flat-footed repeatedly, most famously in January 2014 when thousands of commuters were stranded on interstates overnight. When ice hits, roofing, tree damage, and burst-pipe calls spike within hours, and the contractors already ranking are the ones who answer the phone.",
  pullQuote: 'When ice shuts down Birmingham overnight or a tornado tears through a spring neighborhood, the contractor already on the map is the one who picks up the work.',
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
  seasonCaption: 'Ice storm damage (Jan–Feb), tornado season (Mar–May), summer HVAC (Jun–Sep)',
  seasonalDemand: [
    { m: 'J', v: 94, peak: true }, { m: 'F', v: 90, peak: true }, { m: 'M', v: 88, peak: true },
    { m: 'A', v: 92, peak: true }, { m: 'M', v: 80, peak: true }, { m: 'J', v: 72 },
    { m: 'J', v: 86, peak: true }, { m: 'A', v: 88, peak: true }, { m: 'S', v: 82, peak: true },
    { m: 'O', v: 54 }, { m: 'N', v: 48 }, { m: 'D', v: 58 },
  ],
  stats: [
    { value: '1.1M+', label: 'people across the greater Birmingham metro area' },
    { value: '~69%', label: 'of Birmingham city residents identify as Black or African American', accent: true },
    { value: 'Jan–Feb', label: 'ice storm season, when roofing and pipe-burst calls spike overnight' },
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
  "I started OnwardCraft because I kept watching good contractors — solid roofers, honest HVAC guys, skilled renovation crews — pay Angi and HomeAdvisor month after month for leads they shared with three competitors. In Birmingham especially, where a single ice storm or a tornado season can make or break a contractor's year, the businesses who rank and own their leads are the ones who come out ahead every time. That's what we build here: a pipeline you own, in the neighborhoods you actually serve, built around the demand patterns that are specific to this city.";

const WHY = [
  {
    title: 'We understand Birmingham demand cycles',
    body: "Ice storms in January, tornado season in April, brutal HVAC summers that run straight through September. We build your visibility around when Birmingham homeowners are actually searching — so you're in position before the spike hits, not scrambling after it.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners who also called three other contractors. Local SEO and a high-converting site are how you get there.",
  },
  {
    title: 'We serve both Birmingham markets',
    body: "The city and the suburbs are two different worlds — Forest Park renovators have different search habits than Vestavia Hills homeowners protecting a $600K house. We build for both, with content and targeting that works across the full metro.",
  },
  {
    title: 'No contracts, no mystery',
    body: "Published prices, reporting tied to leads, month-to-month after 90 days. If we're not earning it, you leave. That keeps the accountability exactly where it should be — on us.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Birmingham contractor gets around 1,200 local \"near me\" impressions a month across a handful of neighborhoods. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a booked-out calendar — and in a market where demand spikes suddenly after an ice storm or a tornado outbreak, that gap is brutal. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
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
    titleTag: 'Birmingham Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Search your service in Birmingham and three businesses show up on the map. We get you into those three — so the call lands with you after the next ice storm or tornado. Free audit.',
    eyebrow: 'Local SEO · Birmingham, AL',
    h1: 'When Birmingham searches for what you do, be the first name they find',
    h2Exact: 'Birmingham Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them barely exists. In a city where ice storms trigger overnight surges in contractor calls, we get you into that top three for your neighborhoods so the work lands with you instead of whoever ranked first.",
    primaryCta: 'Get my free Birmingham audit',
    intro:
      "Birmingham local SEO comes down to one thing: when a homeowner in Vestavia Hills or Crestwood searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. The city spans two very different markets — historic in-city neighborhoods with older housing stock and affluent medical-economy suburbs to the south — and the contractors who rank for both are the ones who stay booked. Here's how you do it.",
    aioQuestion: 'How do Birmingham businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to actual Birmingham neighborhoods and suburbs. Birmingham's seasonal demand spikes — ice storms in winter, tornado season in spring, HVAC surges all summer — mean contractors who rank before the spike hits capture the most calls. Tight neighborhood targeting across both the historic in-city districts and the suburban corridor is what separates the Map Pack winners from everyone else.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of clicks. If you're not one of them, it almost doesn't matter how good your work is — most people never see your name. Getting into that top three for Forest Park, Hoover, or Vestavia Hills is usually the single highest-return move a Birmingham contractor can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Birmingham homeowner to four contractors, then bill each of you to compete for the job. It's a treadmill. Local SEO builds the opposite: a homeowner finds you, calls you, and nobody else got it. Over time you stop renting and start owning the pipeline." },
      { title: "You're missing the surge after storms", body: "Birmingham's ice storms and tornado seasons create sudden, short demand spikes. When the storm hits, homeowners search immediately — and whoever is already ranking picks up the calls. If you're not in the Map Pack before the storm, you miss the surge entirely, because there's no time to build rankings after the fact." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Birmingham searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes people pick up the phone after they see your name in the Map Pack." },
      { name: 'Neighborhood pages', desc: "Real pages for Vestavia Hills, Mountain Brook, Hoover, Crestwood, and the rest, so you rank for the neighborhood someone's actually searching, not just \"Birmingham.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Birmingham sources Google trusts — local press, business associations, neighborhood organizations, industry partners. This is what separates page one from page two." },
      { name: 'Storm and seasonal SEO', desc: "Ice storm damage, tornado restoration, spring roofing, and summer HVAC searches are Birmingham's biggest demand spikes. We optimize for them before the season hits so you're in position when calls pour in.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your Birmingham neighborhoods and suburbs and identify which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now over starting later — especially before storm season." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across the city and suburbs, plus the on-page work to back them up, with seasonal storm and demand content woven in." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
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
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The more competitive Birmingham keywords usually take 90 to 180 days of steady work. Anyone promising you page one in 30 days is selling you something — but starting before ice storm or tornado season means you're in position before the surge." },
      { q: 'What makes Birmingham local SEO different from other cities?', a: "Two things that most agencies miss. First, Birmingham has extreme seasonal demand spikes — ice storms in January and February, tornado season in spring — that create sudden short windows of high call volume. You have to be ranked before those events happen, not scrambling after. Second, the metro has two distinct markets: historic in-city neighborhoods like Forest Park and Crestwood with older renovation-era housing, and affluent UAB-economy suburbs like Mountain Brook and Vestavia Hills. Ranking well means targeting both." },
      { q: 'Can you help me rank before ice storm and tornado season?', a: "Yes, and that's one of the main things we plan around. Ice storms hit Birmingham hardest in January and February, and tornado season peaks in April. We build your Map Pack presence and storm-related content well ahead of those windows so you capture the surge when it hits." },
      { q: 'Which Birmingham areas do you cover?', a: "The full metro: Forest Park, Crestwood, Avondale, Mountain Brook, Vestavia Hills, Hoover, Homewood, Pelham, Trussville, Moody, Gardendale, Southside, and more. We build genuine neighborhood pages instead of one generic Birmingham page, because \"[service] Vestavia Hills\" and \"[service] Avondale\" are different searches with different customers." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand storm restoration cycles, older-home renovation complexity, and the insurance-job pipeline that drives so much Birmingham work." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads at prices that add up fast. We build rankings, a strong Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because the work is coming to you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your Birmingham neighborhoods, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers modeled for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'birmingham', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Birmingham SEO Company | Rank Higher, Get Leads | OnwardCraft',
    metaDescription:
      'Birmingham SEO for contractors — rank on Google before ice storm and tornado season, own your leads, and stop paying for shared Angi referrals. Free Birmingham SEO audit.',
    eyebrow: 'SEO Services · Birmingham, AL',
    h1: 'Get your Birmingham business to the top of Google and keep it there',
    h2Exact: 'Birmingham SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Birmingham customers search and the leads keep coming. We build that ranking and tie every report to actual calls and jobs — not vanity traffic.",
    primaryCta: 'Get my free Birmingham SEO audit',
    intro:
      "Birmingham SEO comes down to one question: when a homeowner in Hoover or Forest Park searches your service, are you on page one or page two? Page two might as well be invisible. We get contractors ranking for the money keywords in this market — including the storm-restoration and seasonal HVAC terms that drive the biggest demand surges of the year — and we measure it in leads, not traffic.",
    aioQuestion: 'How do Birmingham businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of their site, optimizing each page for the exact terms customers search, publishing genuinely useful local content tied to specific Birmingham neighborhoods and suburbs, and earning links from trusted Alabama sources. In Birmingham, the highest-leverage SEO moves often involve storm and seasonal terms — ranking for ice storm damage, tornado roofing, and summer HVAC before those demand spikes hit is what separates busy contractors from idle ones.",
    problemHeading: "Three reasons your Birmingham site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. If you're not in the top results for what you sell in Birmingham, your site is basically invisible — no matter how good it looks or how solid your reputation is." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your budget runs out, the leads stop. SEO builds an asset you own: rankings that keep producing leads long after the work is done, at a fraction of the per-lead cost of paid search or lead brokers." },
      { title: "You're not ranked when storms hit", body: "Birmingham's biggest demand events — ice storms in January and February, tornado season in spring, brutal HVAC summers — create sudden spikes in search volume. Ranking takes months to build, so you have to be in place before the season, not after the storm has passed and the phones are already quiet again." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your Birmingham customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real Birmingham and Alabama industry sources. In a competitive market, links are often what separates page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across your Birmingham neighborhoods alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Storm & seasonal SEO', desc: "We rank you for ice storm damage, tornado restoration, and summer HVAC terms before those demand windows open — so your phone rings when Birmingham searches spike hardest.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors across Birmingham, then build a roadmap around the keywords most likely to drive real leads — including storm and seasonal terms." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the storm-restoration and seasonal terms that matter most in this market." },
      { name: 'Build authority', desc: "Links and citations from trusted Birmingham and Alabama industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
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
      { q: 'Is SEO better than Google Ads for Birmingham contractors?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. For contractors who need to be visible before ice storms and tornado season, building organic rankings well ahead of those windows is especially valuable." },
      { q: 'Why does storm and seasonal SEO matter so much in Birmingham?', a: "Because Birmingham's demand spikes are sudden and short. An ice storm drops in January and the search volume for roofing damage, tree removal, and pipe repair jumps immediately. If you're not already ranking when that happens, you miss the surge entirely. We build your storm and seasonal content well in advance so you're in position when the calls start." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add storm and seasonal SEO and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which Birmingham areas do you cover?', a: "The full metro — Forest Park, Crestwood, Avondale, Mountain Brook, Vestavia Hills, Hoover, Homewood, Pelham, Trussville, Gardendale, and more — with genuine local pages rather than one generic Birmingham page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'birmingham', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Birmingham Web Design Company | Sites That Convert | OnwardCraft',
    metaDescription:
      'Birmingham web design for contractors — fast, mobile-first sites that convert storm-restoration and renovation leads into booked jobs. Transparent pricing, you own it. Free quote.',
    eyebrow: 'Web Design · Birmingham, AL',
    h1: 'Birmingham web design that turns visitors into booked jobs',
    h2Exact: 'Birmingham Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Birmingham contractors fast, mobile-first sites that turn storm-restoration inquiries and renovation leads into booked work — built to win across both the historic neighborhoods and the suburban corridor.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Birmingham contractor websites lose leads quietly: slow on a phone, buried call button, no clear offer, nothing that speaks to Forest Park renovators or Vestavia Hills homeowners protecting a valuable property. Web design done right fixes all of that. We build sites that load fast, look like the professional you are, and convert visitors into booked jobs — whether they're calling after an ice storm or searching for a spring renovation crew.",
    aioQuestion: 'What makes a good contractor website in Birmingham?',
    aioAnswer:
      "A good Birmingham contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with real project photos and reviews, and speaks to the specific neighborhoods and suburbs you serve. Because Birmingham has two distinct markets — the historic in-city renovation belt and the UAB-economy suburbs to the south — the best sites acknowledge both and give homeowners in each a reason to call. Storm-readiness messaging matters too: a site that clearly communicates your availability and capacity during ice storms and tornado season captures the homeowners who are searching under pressure.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next result. We design every page around one job: turning a visitor into a booked lead, whether they're a Crestwood homeowner restoring a bungalow or a Mountain Brook family dealing with storm damage." },
      { title: "It's too slow on a phone", body: "Most of your Birmingham visitors are on mobile, and they bounce fast if your site is slow. After a storm, they're searching urgently and have no patience for a clunky site. We build fast, so you keep the visitor — and the call." },
      { title: "It doesn't speak to your neighborhoods", body: "A homeowner in Homewood wants to see that you serve Homewood — not a generic \"Birmingham area\" page that could be anybody. We build sites that name the neighborhoods and suburbs you work, so visitors trust you're local and Google ranks you for the right searches." },
    ],
    servicesHeading: "What's in an OnwardCraft Birmingham website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your Birmingham neighborhoods, and the jobs you actually want to book." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your Birmingham traffic comes from — including the urgent post-storm searches." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that speak to Birmingham homeowners — from Avondale renovation projects to Pelham storm damage — and book the job, not filler text." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Neighborhood-targeted pages', desc: "Pages built around the Birmingham neighborhoods and suburbs you serve — Forest Park, Vestavia Hills, Hoover, Trussville and more — so you stand out instead of blending into a generic city page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your Birmingham neighborhoods, your best jobs, and your competitors, then map the site around booking more of the work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting — including seasonal storm pages before demand windows open." },
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
      { q: 'How much does a website cost in Birmingham?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site help me capture leads after ice storms and tornado damage?', a: "That's one of the specific things we build for. Storm-readiness pages, clear emergency service messaging, and a fast mobile experience mean homeowners who are searching urgently after an ice storm or tornado get a clear, easy path to call you — not a slow, confusing site that sends them to the next result." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Birmingham terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your Birmingham traffic comes from, especially the urgent post-storm searches." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Birmingham site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'birmingham', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Birmingham Website Redesign | More Leads, No Traffic Loss | OnwardCraft',
    metaDescription:
      'Redesign your Birmingham contractor website without losing rankings. Faster, mobile-first rebuilds that convert storm-restoration and renovation leads into booked jobs. Free audit.',
    eyebrow: 'Website Redesign · Birmingham, AL',
    h1: 'Redesign your Birmingham website without losing your rankings',
    h2Exact: 'Birmingham Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, nothing that speaks to Vestavia Hills homeowners or Forest Park renovation buyers. We redesign Birmingham contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish. We do neither. We redesign Birmingham contractor sites for speed and conversions, build them to capture storm and renovation demand, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign holds your rankings and usually improves them — because the new site is faster, mobile-first, and better structured than the old one. For Birmingham contractors, the redesign is also a chance to add storm-readiness and seasonal content that drives demand during ice and tornado season.",
    problemHeading: "Signs your Birmingham site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "For a high-ticket renovation or storm-restoration job, Birmingham homeowners judge you by your site in seconds. An old, cluttered design quietly sends them to a competitor who looks more established — even when your work is better and your reviews are stronger." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your Birmingham visitors before they ever see your offer. After an ice storm or tornado when homeowners are searching urgently, a slow site is essentially handing the job to whoever loads faster." },
      { title: "It doesn't stand out across the metro", body: "A generic old site in a market that spans historic city neighborhoods and affluent southern suburbs gives a visitor no reason to pick you over the next contractor. We rebuild for conversions and for the specific Birmingham areas you serve, so the right buyers choose you." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your Birmingham traffic lives — including the urgent storm-damage searches." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the price of your jobs." },
      { name: 'Neighborhood-targeted rebuild', desc: "Rebuilt around the Birmingham neighborhoods you serve — from Avondale and Crestwood to Mountain Brook and Pelham — so the new site stands out instead of reading like everyone else's.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you leads and rankings, then map a redesign that fixes it without breaking what already works — including storm and seasonal content that's already performing." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and improve, not drop." },
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
      { q: 'How much does a website redesign cost in Birmingham?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, isn't bringing in leads, doesn't speak to the specific Birmingham neighborhoods you serve, or isn't capturing storm and renovation demand, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking — including any storm or seasonal pages that are already performing — and handle the technical migration so nothing important gets lost." },
      { q: 'Will the redesign help me compete in Birmingham?', a: "Yes. We rebuild around the specific neighborhoods and suburbs you serve, make the site fast for mobile users searching urgently after storms, and put the offer and call button front and center — so the new site stands out instead of reading like every other contractor's." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings — and is especially important for the post-storm searches that happen under urgency." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const birminghamCity = {
  citySlug: 'birmingham', city: 'Birmingham', state: 'Alabama', stateAbbr: 'AL', metro: 'Birmingham',

  titleTag: 'Birmingham Marketing for Contractors | Web, SEO & Leads | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Birmingham contractors. Rank before ice storm and tornado season, own your leads, and stop paying for shared referrals. Free Birmingham audit.',

  eyebrow: 'Birmingham · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Birmingham contractors found and booked',
  h2Exact: 'Birmingham Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Birmingham's two-market metro — historic neighborhoods, UAB-economy suburbs, ice storms, and tornado season. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Birmingham audit',

  intro:
    "Running a contracting business in Birmingham means navigating a market that doesn't behave like anywhere else. You've got older industrial-era neighborhoods — Forest Park, Crestwood, Avondale — where renovation work is booming alongside a newer wave of buyers. You've got affluent medical-economy suburbs in Mountain Brook, Vestavia Hills, and Hoover where homeowners have high expectations and high budgets. And you've got the Alabama weather reality: ice storms in January that shut the city down overnight, tornado seasons in spring that hit the metro hard, and brutal HVAC summers that run straight through September. Winning in this market takes three things working together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack for the specific neighborhoods you serve — built around the demand cycles that are specific to Birmingham.",
  aioQuestion: 'How do Birmingham contractors get more leads online?',
  aioAnswer:
    "Birmingham contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack neighborhood by neighborhood. The biggest differentiator in Birmingham is timing: the contractors who are already ranked when ice storms hit in January or tornado season arrives in April capture the sudden demand surges that drive the most urgent calls. Building that visibility well in advance — across both the historic city neighborhoods and the suburban corridor — is what separates booked contractors from idle ones.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Birmingham searches \"near me.\" Be in position before the next ice storm or tornado season so you capture the surge when it hits.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search — storm restoration, HVAC, renovation — and build an asset you own instead of paying for shared leads month after month.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites that turn storm-damage inquiries and renovation leads into booked jobs — built for a market that spans historic neighborhoods and affluent suburbs.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, add the storm and seasonal content that Birmingham demand requires, and migrate carefully so you keep every ranking you've earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Birmingham?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads across both the city and suburbs." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors — so we understand storm restoration cycles, older-home renovation complexity, and the insurance-job pipeline that drives a lot of Birmingham work." },
    { q: 'Why does Birmingham need a different SEO approach?', a: "Because the demand patterns here are unlike most markets. Ice storms in January and February create sudden overnight surges in roofing, pipe-burst, and tree-damage calls. Tornado season in spring — Alabama is in a real tornado corridor, and the April 2011 outbreak hit the Birmingham area directly — drives the same kind of spike. And the metro is two distinct markets: the historic renovation neighborhoods close in and the affluent UAB-economy suburbs to the south. Winning means being visible across both and being ranked before the seasonal demand windows open." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Birmingham areas do you serve?', a: "The full metro — Forest Park, Crestwood, Avondale, Mountain Brook, Vestavia Hills, Hoover, Homewood, Pelham, Trussville, Moody, Gardendale, and more — with genuine neighborhood targeting rather than one generic Birmingham page." },
    { q: 'Where should I start?', a: "Start with a free Birmingham audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest — and whether you're positioned for the next storm or seasonal demand spike. No pitch deck, just a plan." },
  ],
};
