// OKLAHOMA CITY — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Oklahoma City's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// OKLAHOMA CITY — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Oklahoma City means showing up before the storm',
  body:
    "Oklahoma City sits at the dead center of Tornado Alley, and that single geographic fact shapes the entire contractor economy. The metro is home to roughly 1.4 million people spread across fast-growing suburbs like Moore, Edmond, Yukon, Mustang, and Midwest City — communities that have expanded dramatically over the past two decades and are full of homeowners who need contractors on a regular basis. What makes OKC different from almost every other market is the seasonality of demand. From April through June, tornado and hail events don't just spike roofing work — they define the contractor calendar. After the 2013 Moore EF5 tornado alone, roofing crews and restoration contractors were booked out for months. Multiple hail events every year drive insurance-claim roofing at a scale most metros never see. The contractors who rank on Google when disaster hits are the ones who book the work. There's a second story underneath the storms: oil and gas wealth concentrated in Edmond, Nichols Hills, and Chisholm Creek means a pocket of homeowners willing to pay for quality craftsmanship. This is not a premium-price market overall — value matters here — but job volume after storm events is extraordinary, and the contractors who own their search visibility own that volume.",
  pullQuote: 'After every major hail event, OKC homeowners open Google. The three contractors on the map take the calls. Everyone else waits.',
  donut: {
    title: 'How Oklahoma City searches',
    value: 18,
    centerLabel: 'Spanish-speaking households',
    legend: [
      { label: 'Hispanic households', pct: 18, kind: 'teal' },
      { label: 'Other residents', pct: 82, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Tornado/hail roofing (Apr–Jun, Aug–Sep), HVAC (Jun–Sep), heating emergencies (Dec–Feb)',
  seasonalDemand: [
    { m: 'J', v: 55, peak: false }, { m: 'F', v: 52, peak: false }, { m: 'M', v: 68 },
    { m: 'A', v: 95, peak: true }, { m: 'M', v: 98, peak: true }, { m: 'J', v: 92, peak: true },
    { m: 'J', v: 85, peak: true }, { m: 'A', v: 88, peak: true }, { m: 'S', v: 80, peak: true },
    { m: 'O', v: 58 }, { m: 'N', v: 54 }, { m: 'D', v: 72, peak: true },
  ],
  stats: [
    { value: '1.4M', label: 'people across the Oklahoma City metro' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the calls after a storm event' },
    { value: 'Apr–Jun', label: 'peak tornado and hail season, when roofing demand goes vertical' },
    { value: 'Multiple', label: 'major hail events per year driving insurance-claim roofing work', accent: true },
  ],
  neighborhoods: [
    'Midtown', 'Automobile Alley', 'Paseo Arts District', 'Nichols Hills', 'Edmond',
    'Moore', 'Yukon', 'Mustang', 'Midwest City', 'Del City',
    'Norman', 'Chisholm Creek', 'Bethany', 'Bricktown',
  ],
};

const AREAS = [
  'Midtown', 'Automobile Alley', 'Paseo Arts District', 'Nichols Hills', 'Edmond',
  'Moore', 'Yukon', 'Mustang', 'Midwest City', 'Del City',
  'Norman', 'Chisholm Creek', 'Bethany', 'Bricktown', 'The Village',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. That's especially true in Oklahoma City, where after a major hail event or tornado, every roofing contractor in the metro is fighting for the same homeowner calls. The contractors who rank on Google before the storm get the calls when it hits — they own that pipeline. That's the whole point of what we do here. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We understand storm-season roofing spikes, insurance-claim workflows, and the post-tornado restoration economy, so everything we build is shaped around how Oklahoma City customers actually search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners three competitors also bought — especially after a storm event, when those per-lead prices shoot up.",
  },
  {
    title: 'We actually know the OKC market',
    body: "Neighborhood-by-neighborhood targeting from Edmond to Moore, plus storm-season content that ranks you before tornado season starts, not after. The stuff a national shop can't do by swapping a city name into a template.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say an Oklahoma City roofing contractor gets around 1,200 local searches a month across the metro. After a major hail event those numbers spike sharply. Moving from page-two invisibility into the top three before storm season starts is the difference between a flood of calls and watching the competition book the work. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Oklahoma City', state: 'Oklahoma', stateAbbr: 'OK', metro: 'Oklahoma City',
  heroProof: ['Built for the trades', 'Storm-season targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const oklahomaCityLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'oklahoma-city', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Oklahoma City Local SEO Company | OnwardCraft',
    metaDescription:
      'Search your service in Oklahoma City and three businesses show up on the map. We get you into those three before storm season starts, so the call lands.',
    eyebrow: 'Local SEO · Oklahoma City',
    h1: 'When Oklahoma City searches for what you do, be the first name they find',
    h2Exact: 'Oklahoma City Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" After a tornado or hail event in OKC, those three get flooded with calls while everyone below them waits. We get you into that top three before storm season starts, so the calls land with you.",
    primaryCta: 'Get my free Oklahoma City audit',
    intro:
      "Oklahoma City local SEO comes down to one thing: when a homeowner in Moore or Edmond opens Google after a hail storm and searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? The contractors who rank before tornado season are the ones who book the post-storm work. This market rewards preparation. Here's how you do it.",
    aioQuestion: 'How do Oklahoma City businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real OKC neighborhoods and suburbs. In Oklahoma City, timing matters too — contractors who rank before tornado season starts in April catch the spike instead of chasing it. Multi-suburb targeting across Moore, Edmond, Yukon, and Midwest City is how you cover the full metro.",
    problemHeading: "If your phone is quiet after a storm, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? When a hail storm rolls through Moore or Edmond, those three get a flood of calls while everyone else gets nothing. In a metro growing as fast as OKC, with suburbs full of new homeowners, getting into that top three for the neighborhoods you serve is the single highest-return move most contractors can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Oklahoma City homeowner to four contractors, then bill each of you to fight over them. After a major storm event, those per-lead prices spike hard. Local SEO builds the opposite: a lead finds you, calls you, and nobody else got it. Over time you stop renting and start owning the pipeline." },
      { title: "You're not ranking before storm season starts", body: "Roofing demand in OKC doesn't spike gradually — it hits overnight when a hail storm or tornado touches down. Local SEO takes months to build, which means the contractors who rank in April are the ones who started working on it the previous fall. If you wait until it's storming to think about rankings, you've already missed the peak." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Oklahoma City searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes people pick up the phone when they're stressed after a storm." },
      { name: 'Suburb and neighborhood pages', desc: "Real pages for Moore, Edmond, Yukon, Mustang, Midwest City and the rest, so you rank for the area someone's actually searching, not just \"Oklahoma City.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Oklahoma City sources Google trusts — local press, trade associations, community organizations. This is what separates page one from page two here." },
      { name: 'Storm-season content strategy', desc: "Content built around hail damage, tornado restoration, and insurance claims — the searches OKC homeowners actually run in an emergency, published before the season starts.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across OKC and its suburbs and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting before storm season." },
      { name: 'Add local content', desc: "Suburb and service-area pages across Moore, Edmond, Yukon, Mustang, Midwest City and beyond, plus the storm-season content that ranks you for emergency searches." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next suburb." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several OKC suburbs.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Suburb landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across the metro.', features: ['Everything in Local Growth', 'Local link building', 'Storm-season content strategy', 'Multi-suburb service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Oklahoma City?', a: "Most Oklahoma City engagements land between $750 and $2,500 a month, depending on how many suburbs and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The competitive OKC keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days is selling you something. The key is to start before storm season, not after." },
      { q: 'What makes Oklahoma City local SEO different?', a: "Two things. The storm economy is real and massive — after every major hail event or tornado, homeowners open Google immediately, and the three contractors in the Map Pack take almost all the calls. And the metro has grown dramatically, with suburbs like Moore, Edmond, Yukon, and Mustang full of new homeowners you can reach with suburb-specific targeting most contractors skip." },
      { q: 'Can I rank in time for tornado and hail season?', a: "It depends on when you start. Local SEO takes 90 to 180 days to build meaningful ranking. If tornado season runs April through June, starting in the fall gives you the best shot at being in the Map Pack when demand spikes. Starting in March means you're already late. The free audit tells you exactly where you stand and what's realistic." },
      { q: 'Which areas do you cover?', a: "The full OKC metro — Midtown, Nichols Hills, Edmond, Moore, Yukon, Mustang, Midwest City, Del City, Norman, Bethany, Chisholm Creek and more. We build genuine suburb and neighborhood pages instead of one generic Oklahoma City page, because that's what actually ranks for \"[service] [suburb]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand storm-season roofing spikes, insurance-claim workflows, and the OKC post-tornado restoration economy, and we build your local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep — and after a storm event in OKC, they charge a premium for leads your competitors bought too. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because the work is coming to you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across OKC and its suburbs, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'oklahoma-city', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Oklahoma City SEO Company | OnwardCraft',
    metaDescription:
      'Oklahoma City SEO that ranks contractors on Google and brings in leads you own. Storm-season content, suburb targeting, no lock-in contracts.',
    eyebrow: 'SEO Services · Oklahoma City',
    h1: 'Get your Oklahoma City business to the top of Google and keep it there',
    h2Exact: 'Oklahoma City SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Oklahoma City customers search and the leads keep coming — including the storm-season spike that defines the OKC contractor calendar.",
    primaryCta: 'Get my free Oklahoma City SEO audit',
    intro:
      "Oklahoma City SEO comes down to one question: when a homeowner searches what you do — with or without a storm bearing down — are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords across OKC's fast-growing suburbs, and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Oklahoma City businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content tied to specific OKC suburbs and neighborhoods, and earning links from trusted local sources. In Oklahoma City, the contractors who rank for storm-damage, hail-repair, and insurance-claim terms before tornado season starts in April are the ones who catch the spike. Multi-suburb targeting across Moore, Edmond, Yukon, and Midwest City is how you cover the full metro.",
    problemHeading: "Three reasons your Oklahoma City site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. After a hail storm rolls through Moore or Midwest City, homeowners open Google and call one of the first few results. If you're not there, your site is invisible no matter how good your work is." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. And in OKC after a storm event, ad costs spike as every contractor in the metro competes for the same clicks. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost." },
      { title: "You're not ranking for storm-season searches", body: "Roofing and restoration demand in OKC doesn't build gradually — it explodes overnight when a tornado touches down or a hail storm moves through. Ranking takes months, so you have to be on page one before the season, not chasing it after. If your SEO ignores storm-damage and insurance-claim searches, you're missing the most valuable weeks of the contractor year." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your Oklahoma City customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real Oklahoma City and industry sources. In this market, links are often what separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across OKC's suburbs alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Storm-season & insurance-claim SEO', desc: "We rank you for tornado damage, hail repair, and insurance restoration searches before April — so when the storms hit, the calls go to you.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Oklahoma City leads — including the storm-season terms that matter most." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the storm-damage and insurance-claim terms that drive OKC's busiest weeks." },
      { name: 'Build authority', desc: "Links and citations from trusted Oklahoma City and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next suburb or keyword set." },
    ],
    pricing: {
      heading: 'Transparent Oklahoma City SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and OKC suburbs.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Oklahoma City search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Storm-season & insurance-claim SEO', 'Multi-suburb targeting', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Oklahoma City?', a: "Most Oklahoma City SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Oklahoma City?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter suburb terms and slower on the most competitive metro-wide keywords. The key for OKC contractors is to start months before tornado season, not after — ranking takes time, and you need to be in place before the demand spike." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying — and in OKC after a major storm, ad costs spike as every contractor competes for the same clicks. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most contractors do best running SEO as the long-term engine and ads for short-term boosts." },
      { q: 'Should my SEO target storm-season searches?', a: "Absolutely. After a hail event or tornado touches down, OKC homeowners open Google immediately. If you're not ranking for storm damage, hail repair, and insurance restoration terms before the season starts, you're invisible when demand peaks. We build that content and ranking months ahead of April so you're ready." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add storm-season and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which areas around Oklahoma City do you cover?', a: "The full OKC metro — Midtown, Nichols Hills, Edmond, Moore, Yukon, Mustang, Midwest City, Del City, Norman, Bethany, Chisholm Creek and more — with genuine suburb pages rather than one generic Oklahoma City page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. After a storm event, those platforms charge a premium for leads your competitors also bought. We build the visibility you own so calls come to you first." },
      { q: "What's in the free SEO audit?", a: "Where you rank today across OKC and its suburbs, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'oklahoma-city', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Oklahoma City Web Design Company | OnwardCraft',
    metaDescription:
      'Oklahoma City web design that turns visitors into booked jobs — fast, mobile-first sites built for contractors in a storm-driven market.',
    eyebrow: 'Web Design · Oklahoma City',
    h1: 'Oklahoma City web design that turns visitors into booked jobs',
    h2Exact: 'Oklahoma City Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Oklahoma City contractors fast, mobile-first sites engineered to turn storm-season visitors into booked work — and to convert the year-round lead flow that keeps your crew busy.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Oklahoma City contractor websites lose leads quietly: slow on a phone, buried call button, no clear offer. After a hail storm or tornado, homeowners are stressed and searching fast — they'll tap the first result that looks trustworthy and has an obvious number to call. We build sites that load fast, look like the professional you are, and turn Moore-to-Edmond visitors into booked jobs.",
    aioQuestion: 'What makes a good contractor website in Oklahoma City?',
    aioAnswer:
      "A good Oklahoma City contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific suburbs you serve. Because OKC homeowners often search in an emergency — after a storm, in summer heat, or in a winter freeze — speed and an obvious next step are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next result. After a hail event, OKC homeowners are moving fast — if your site doesn't make it easy to call right now, they're already dialing your competitor. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Oklahoma City visitors are on mobile, and they bounce if your site takes more than a few seconds to load — especially in an emergency. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking." },
      { title: "It doesn't speak to the suburbs you actually serve", body: "A homeowner in Moore wants to see you serve Moore — not a generic \"Oklahoma City\" page that could be anybody. We build sites that name the suburbs and neighborhoods you work, so visitors trust you're local and Google ranks you for the right searches." },
    ],
    servicesHeading: "What's in an OnwardCraft Oklahoma City website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your suburbs, and the jobs you actually want — including the storm-season work that defines the OKC calendar." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your Oklahoma City traffic is — especially when homeowners are searching in a post-storm emergency." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that speak to stressed homeowners and book the job, not filler text that reads like everyone else's site." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and suburb-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Suburb-targeted pages', desc: "Pages built around Moore, Edmond, Yukon, Mustang, Midwest City and the suburbs you serve, so you rank for the right area instead of blending into one generic city page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your suburbs, your best jobs, and your competitors, then map the site around booking more of the work you want — year-round and during storm season." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting." },
    ],
    pricing: {
      heading: 'Transparent Oklahoma City web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + suburb pages', 'Speed & Core Web Vitals', 'Suburb-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Oklahoma City?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site convert storm-season visitors?', a: "That's a big part of what we design for. After a hail event or tornado, OKC homeowners are searching fast on their phones. We put the call button front and center, make the offer obvious, and ensure the site loads quickly — so when someone lands on it in an emergency, the next step is immediately clear." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and suburb-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive OKC terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your Oklahoma City traffic comes from — especially homeowners searching in an emergency after a storm." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Oklahoma City site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'oklahoma-city', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Oklahoma City Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your Oklahoma City website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs — built for.',
    eyebrow: 'Website Redesign · Oklahoma City',
    h1: 'Redesign your Oklahoma City website without losing your rankings',
    h2Exact: 'Oklahoma City Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, easy to ignore in an emergency. We redesign Oklahoma City contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Oklahoma City contractor sites for speed and conversions, build them to stand out in a market shaped by storm seasons, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Oklahoma City site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "For a roofing job or major restoration after a storm, OKC homeowners judge you by your site in seconds. An old, cluttered design quietly sends them to a competitor who looks more established — even when your work is better and your price is fair." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your Oklahoma City visitors before they ever see your offer — including the homeowner who just watched a tornado pass through their neighborhood and needs a contractor now. A redesign built mobile-first wins them back." },
      { title: "It doesn't stand out in the post-storm rush", body: "After a major hail event, homeowners are calling fast and comparing multiple sites. A generic old site gives them no reason to pick you over the next result. We rebuild for conversions and for the suburbs you actually serve, so the right buyers choose you." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings, especially when storm-season traffic spikes." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your Oklahoma City traffic lives — and where homeowners search in emergencies." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the seriousness of storm-damage restoration." },
      { name: 'Suburb-targeted rebuild', desc: "Rebuilt around Moore, Edmond, Yukon, Mustang, Midwest City and the suburbs you serve, so the new site ranks and converts for the right areas.", featured: true },
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
      heading: 'Transparent Oklahoma City redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + suburb pages', 'Suburb-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Oklahoma City?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is hard to update, isn't bringing in leads, or fails to convert the storm-season traffic that defines the OKC market, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the redesign help me compete after storm events?', a: "Yes, and that's a core goal for OKC contractors. After a hail storm or tornado, homeowners compare several sites quickly. We rebuild around fast load, obvious call buttons, and the suburbs you serve — so your site stands out instead of blending in." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const oklahomaCityCity = {
  citySlug: 'oklahoma-city', city: 'Oklahoma City', state: 'Oklahoma', stateAbbr: 'OK', metro: 'Oklahoma City',

  titleTag: 'Oklahoma City Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Oklahoma City contractors. Get found before tornado season, own your leads instead of renting them, and convert.',

  eyebrow: 'Oklahoma City · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Oklahoma City contractors found and booked',
  h2Exact: 'Oklahoma City Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for OKC's storm-driven market. One team to get you ranking before tornado season, converting visitors into booked jobs, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Storm-season targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Oklahoma City audit',

  intro:
    "If you run a contracting business in Oklahoma City, your calendar is shaped by weather. Tornado season, hail events, summer HVAC demand, winter heating emergencies — these define when the phones ring. The contractors who rank on Google before those spikes hit are the ones who book the work. Winning here takes three things working together: a site that converts stressed homeowners fast, SEO that ranks you for what people search during and after storms, and local SEO that puts you in the Map Pack for the suburbs you serve. Here's how we help Oklahoma City contractors do exactly that.",
  aioQuestion: 'How do Oklahoma City contractors get more leads online?',
  aioAnswer:
    "Oklahoma City contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches — including storm-damage, hail-repair, and insurance-claim terms — and local SEO that wins the Google Map Pack suburb by suburb. Because OKC's metro has expanded significantly across Moore, Edmond, Yukon, Mustang, and Midwest City, contractors who target those suburbs specifically and rank before tornado season starts in April book the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when OKC searches \"near me.\" The single highest-return move for most local contractors — done suburb by suburb, before storm season starts.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search — including storm-damage and insurance-claim terms — and build an asset you own instead of renting traffic from ads.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn stressed homeowners into booked jobs — including the post-storm rush that defines the OKC contractor calendar.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it carefully so you keep every bit of ranking you've already earned — then be ready when the next storm season hits.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Oklahoma City?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads — especially during the storm seasons that drive OKC's contractor economy." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors — so we understand storm-season roofing spikes, insurance-claim workflows, and the post-tornado restoration economy." },
    { q: 'Why does the Oklahoma City market need a different approach?', a: "The storm economy is real here. Tornado season and hail events don't gradually build demand — they create an overnight flood of homeowners searching for contractors. The businesses in the Map Pack when that happens book the work. Winning means ranking before the season starts, suburb by suburb across a fast-growing metro." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Oklahoma City areas do you serve?', a: "The full metro — Midtown, Nichols Hills, Edmond, Moore, Yukon, Mustang, Midwest City, Del City, Norman, Bethany, Chisholm Creek, Automobile Alley, Paseo Arts District and more." },
    { q: 'Where should I start?', a: "Start with a free Oklahoma City audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest — including whether you're ready for tornado season. No pitch deck, just a plan." },
  ],
};
