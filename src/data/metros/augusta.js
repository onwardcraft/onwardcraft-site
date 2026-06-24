// AUGUSTA: per-metro x per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Augusta's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// AUGUSTA: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why winning Augusta search takes a local playbook',
  body:
    "Augusta runs on three engines that no template can fake. Fort Eisenhower, the Army's Cyber Center of Excellence, cycles thousands of military families through PCS moves every year, so there is always a fresh wave of homeowners hunting for a contractor they can trust on day one. Augusta National turns one April week into the busiest spotlight in golf and keeps high-end buyers planted in the homes around the course all year long. Augusta University Health adds tens of thousands of staff, residents, and students who rent, buy, and renovate across the city. That is a lot of people who need real work done. Now the hard part: summers here punish you. June through September sits near 98 degrees with thick Georgia humidity, and the Savannah River keeps flood risk on the table for months. When those calls land, they go to the contractors Google already trusts in the Map Pack, not the ones still stuck on page two.",
  pullQuote: 'When the heat and the river hit Augusta, the contractors already ranking are the ones the phone rings for.',
  donut: {
    title: 'Augusta city demographics',
    value: 55,
    centerLabel: 'Black/AA (city)',
    legend: [
      { label: 'Black/AA', pct: 55, kind: 'teal' },
      { label: 'Other', pct: 45, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'HVAC season Jun-Sep; tropical storm and flood risk May-Oct',
  seasonalDemand: [
    { m: 'J', v: 30 }, { m: 'F', v: 28 }, { m: 'M', v: 36 }, { m: 'A', v: 50 },
    { m: 'M', v: 62, peak: true }, { m: 'J', v: 88, peak: true }, { m: 'J', v: 96, peak: true },
    { m: 'A', v: 98, peak: true }, { m: 'S', v: 90, peak: true }, { m: 'O', v: 72, peak: true },
    { m: 'N', v: 44 }, { m: 'D', v: 32 },
  ],
  stats: [
    { value: 'Fort Eisenhower', label: 'Army Cyber Center of Excellence: thousands of PCS moves a year feeding a steady stream of new homeowners' },
    { value: 'Apr', label: 'The Masters at Augusta National keeps one of the wealthiest buyer pools in the country invested here year-round', accent: true },
    { value: '98°F+', label: 'summer highs with Georgia humidity, Jun-Sep, when HVAC calls peak' },
    { value: 'Top 3', label: 'Map Pack spots that soak up most of the clicks the moment a homeowner searches for help' },
  ],
  neighborhoods: [
    'Summerville', 'Forest Hills', 'Martinez', 'Evans', 'Grovetown', 'Hephzibah',
    'North Augusta', 'Aiken', 'Augusta National area', 'Rae\'s Creek', 'Harrisburg',
    'Olde Town', 'Sand Hills', 'Belair', 'Windsor Spring',
  ],
};

const AREAS = [
  'Augusta', 'Martinez', 'Evans', 'Grovetown', 'Hephzibah', 'Summerville',
  'Forest Hills', 'North Augusta', 'Aiken', 'Beech Island', 'Belvedere',
  'Clearwater', 'Bath', 'Langley', 'Graniteville',
];

const FOUNDER =
  "Straight talk: I started OnwardCraft after watching too many sharp Augusta contractors wire a few grand a month to Angi and HomeAdvisor for leads that three rivals across town bought at the same time. You cannot build anything that lasts on leads you rent. So the entire job here is simple: get you ranking and converting for the work you want, in the neighborhoods you actually serve, and make those leads yours to keep. No 12-month handcuffs. If the work is not paying off, you fire us.";

const FOUNDER_NAME = 'The OnwardCraft team';

const WHY = [
  {
    title: 'We only build for the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, and GCs. We know PCS timelines, heat-season breakdowns, and Savannah River flood damage, so every page we build mirrors how your Augusta customers actually search.",
  },
  {
    title: 'We pull you off rented leads',
    body: "The point is a pipeline you own outright, not one more monthly check to a broker reselling the same homeowner to you and three competitors at once.",
  },
  {
    title: 'We genuinely know this market',
    body: "Fort Eisenhower PCS turnover, Masters Week buyers, savage Georgia summers, Savannah River flood risk, and a footprint that crosses the GA-SC line. None of that survives a national agency dropping a city name into a template.",
  },
  {
    title: 'No contracts, nothing hidden',
    body: "Prices on the page, reporting tied to real leads, month-to-month after 90 days. If we are not earning the spot, you leave. That keeps the pressure exactly where it should be: on us.",
  },
];

const PROOF = {
  heading: "We are new, so here is the honest math instead of a wall of logos",
  body:
    "Plenty of agencies will flash a grid of client logos at you. We are a young, founder-led shop, and we will not pretend to a track record we have not built yet. What we can hand you is the reason this works, pulled straight from Google's and the industry's own research on how people search for local help.",
  stats: [
    { value: '46%', label: 'of Google searches carry local intent', n: 46 },
    { value: '76%', label: 'of people who search local on a phone visit a business that same day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here is a rough sketch, labelled plainly as a projection and not a result we are claiming: say an Augusta contractor pulls roughly 1,200 local \"near me\" impressions a month. Climbing out of page-two invisibility into the top three is the gap between a slow trickle of calls and a calendar that stays booked, and during peak HVAC season or right after a flooding event that gap widens fast. In your free audit, we model the real numbers for your business: your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "The figures above are published benchmarks (Google and BrightLocal) plus one illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Augusta', state: 'Georgia', stateAbbr: 'GA', metro: 'Augusta',
  heroProof: ['Built for the trades', 'PCS and heat-season ready', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: FOUNDER_NAME,
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const augustaLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'augusta', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Augusta Local SEO Company | Win the Map Pack',
    metaDescription:
      'Augusta Local SEO that puts you in the three businesses on the map when homeowners search your service, so the call lands with you, not a competitor.',
    eyebrow: 'Local SEO · Augusta, GA',
    h1: 'Augusta Local SEO that wins you the top three on the map before heat season hits',
    h2Exact: 'Augusta Local SEO Company',
    heroSubhead:
      "Google pins three businesses to the map on a \"near me\" search, and everyone underneath them might as well not exist. We get you into that top three so the call rings your phone instead of whoever happened to rank first, and so you are ready the moment HVAC season and Savannah River flooding send demand vertical.",
    primaryCta: 'Get my free Augusta audit',
    intro:
      "Augusta local SEO boils down to a single question: when a homeowner in Evans or Summerville types your service plus \"near me,\" are you one of the three businesses Google drops onto the map? Most people tap one of those three and never scroll. Demand here is driven by Fort Eisenhower PCS moves, Masters Week buyers, Augusta University Health staff, and merciless summer heat, all of it steady and predictable. Becoming one of those three is the entire game. Here is how you get there.",
    aioQuestion: 'How do Augusta businesses rank higher in local search?',
    aioAnswer:
      "You rank by nailing four things: a Google Business Profile tuned to the exact services and neighborhoods you want; matching name, address, and phone listings everywhere on the web; a steady flow of real reviews; and local content tied to actual Augusta neighborhoods. This market runs on Fort Eisenhower PCS cycles, Masters Week affluence, summer heat demand, and Savannah River flooding, so the winners look established, answer fast, and are already ranking before the spike arrives.",
    problemHeading: "If your phone has gone quiet, it is usually one of these three",
    painPoints: [
      { title: 'Competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. Those three businesses pinned to the map pull the lion's share of clicks. If your name is not among them, the quality of your work barely matters, because most people never scroll far enough to see it. Getting into that top three is usually the single highest-return move an Augusta contractor can make." },
      { title: "You are paying for leads you never own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Augusta homeowner to four contractors, then bill each of you to scrap over them. It is a treadmill. Local SEO does the opposite: a lead finds you, calls you, and no one else got the contact. Over time you stop renting and start owning the pipeline." },
      { title: "You are not ready when heat and floods hit", body: "When June rolls in at 98 degrees with humidity, HVAC calls spike overnight. When the Savannah River floods, restoration demand chases right behind it. The contractors already ranking take those calls. If you are invisible on the map when the season turns, the work goes to whoever Google already trusts. Ranking now is how you catch that wave instead of watching it roll past." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The single biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google understands precisely which Augusta searches belong to you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google checks. We fix the listings that conflict and build the ones you are missing, including across the GA-SC line into the Aiken market." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns every finished job into a steady stream of reviews. It lifts your ranking and gives the next caller a reason to dial." },
      { name: 'Neighborhood pages', desc: "Real pages for Evans, Martinez, Grovetown, Summerville, North Augusta, and the rest, so you rank for the neighborhood someone is searching, not just \"Augusta.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else climb." },
      { name: 'Local link building', desc: "Mentions and links from Augusta sources Google trusts: local press, military community outlets, trade associations, partners. This is what separates page one from page two in this market." },
      { name: 'Heat-season and flood readiness', desc: "We get your profile, pages, and reviews ranking before summer HVAC season and storm season so you catch the demand spike instead of scrambling for scraps after it lands.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now begins in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find where you actually rank today across every service area and pin down exactly which competitors are beating you in the Map Pack, and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here inside a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is precisely why local SEO rewards starting now over starting later." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Augusta and the CSRA (Evans, Martinez, Grovetown, North Augusta, Aiken) plus the on-page work that backs them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, never vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across the CSRA and into South Carolina.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: "For contractors who want to own the map across Augusta and the CSRA.", features: ['Everything in Local Growth', 'Local link building', 'Heat-season and flood demand targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Augusta?', a: "Most Augusta engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you are chasing. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit before you commit a dollar." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile work can move inside a few weeks. The competitive Augusta keywords usually take 90 to 180 days of steady effort, because reviews and citations compound over time. Anyone promising page one in 30 days in this market is selling you a story." },
      { q: 'What makes Augusta local SEO different?', a: "Three forces. Fort Eisenhower drives constant PCS turnover, so there is always a fresh stream of new homeowners hunting for a contractor they can trust. Augusta National and Masters Week keep a wealthy buyer segment invested here all year. And the summers are brutal: 98-degree heat with humidity means HVAC calls spike hard, and your ranking has to be locked in before June, not after." },
      { q: 'How does local SEO help me during HVAC season?', a: "When summer slams Augusta, searches for HVAC installation and repair go vertical almost overnight. The businesses already sitting in the Map Pack take those calls. We get you ranked and reviewed ahead of the season so you catch that demand instead of fighting for leftovers once everyone else is already booked solid." },
      { q: 'Do you cover the Aiken County and North Augusta market too?', a: "Yes. The CSRA (Central Savannah River Area) crosses the GA-SC state line, and we build real neighborhood pages and citations for North Augusta, Aiken, Beech Island, and the rest. The Augusta and Aiken markets feed each other, so ranking across both puts you ahead of every contractor who stops at the state line." },
      { q: 'Do you work with contractors specifically?', a: "It is basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand PCS moves, heat emergencies, flood damage, and insurance jobs, and we shape your local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research now starts inside AI instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It is fast becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that is roughly how long local SEO needs to show real movement. After that it is month-to-month. If we are not delivering, you walk, and the accountability stays squarely on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that route leads straight to you. Over time you lean on the brokers less, because the work is already coming to you directly." },
      { q: "What is in the free audit?", a: "A clear read on where you rank today across your service areas, what your Map Pack competitors are doing to beat you, the fixes that move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. It is the fastest way to see what Augusta Local SEO can do for you: where your Google Business Profile stands, which local 3-pack spots are within reach, and how soon. No pitch deck, just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'augusta', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Augusta SEO Company | OnwardCraft',
    metaDescription:
      'Augusta SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in, built for heat season and flood demand.',
    eyebrow: 'SEO Services · Augusta, GA',
    h1: 'Augusta SEO that builds CSRA rankings you actually own',
    h2Exact: 'Augusta SEO Company',
    heroSubhead:
      "Ads stop the second your card does. SEO works the other way: rank once for what your Augusta customers search and the leads keep arriving. We build that ranking and tie every report back to real calls and booked jobs.",
    primaryCta: 'Get my free Augusta SEO audit',
    intro:
      "Augusta SEO comes down to one question: when someone searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in a market shaped by Fort Eisenhower PCS demand, Masters Week buyers, Augusta University Health staff, and scorching Georgia summers, and we measure the result in leads, not vanity traffic.",
    aioQuestion: 'How do Augusta businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content, and earning links from trusted Augusta sources. In a market driven by military PCS cycles, heat-season HVAC demand, and Savannah River flooding, ranking for those specific seasonal and situational terms is what separates the contractors who stay booked from the ones forever chasing leads.",
    problemHeading: "Three reasons your Augusta site is not bringing in work",
    painPoints: [
      { title: "You are stranded on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. If you are not in the top handful of results for what you sell, your site is effectively invisible, no matter how sharp it looks." },
      { title: "You are renting traffic from Google Ads", body: "Ads can work, but the instant your card stops, the leads stop with it. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the cost per lead." },
      { title: "You are not ranking for the demand that matters", body: "Augusta demand swings with Fort Eisenhower PCS seasons, summer heat, and Savannah River flooding. The contractors who rank for those terms ahead of time catch the spikes. If your SEO ignores that reality, you are handing your busiest months to someone else." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned for the exact terms your Augusta customers search: titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and pull in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real Augusta and CSRA sources. In a competitive market, links are often the deciding factor between page one and page two." },
      { name: 'Local SEO and Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches right alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads, not just rankings and traffic, so you always know what your SEO is actually worth." },
      { name: 'Heat-season and flood SEO', desc: "We rank you for the HVAC and restoration searches that drive Augusta's busiest months, so you are visible before demand spikes instead of scrambling once it has already hit.", featured: true },
      { name: 'AI search and GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, exactly where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Augusta leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile: the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the seasonal and demand-driven terms that matter here." },
      { name: 'Build authority', desc: "Links and citations from trusted Augusta, CSRA, and industry sources to push your competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what is working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Augusta SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across the CSRA and into South Carolina.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Augusta and CSRA search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Heat-season & flood SEO', 'Multi-location support', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Augusta?', a: "Most Augusta SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract to sign." },
      { q: 'How long does SEO take to work in Augusta?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on low-competition terms and slower on the most contested Augusta keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops the moment you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most contractors do best running SEO as the long-term engine and ads for short-term spikes." },
      { q: 'Should my Augusta SEO target HVAC season and flood demand?', a: "Yes. When summer hits, HVAC searches spike overnight, and when the Savannah River floods, restoration demand follows. Ranking takes months to build, so you have to be in place before the season, not chasing it afterward. We optimize for those seasonal terms ahead of time so your busiest months land on you." },
      { q: "What is included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. Higher tiers add heat-season, flood, and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it shifts to month-to-month. If we are not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Do you cover Aiken County and North Augusta SC?', a: "Yes. We build genuine local pages for North Augusta, Aiken, Evans, Martinez, Grovetown, and every CSRA market on both sides of the river, not one generic Augusta page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that route leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads." },
      { q: "What is in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. It shows exactly where Augusta SEO can grow your organic traffic and which money keywords can move you onto page one. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'augusta', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Augusta Web Design Company | OnwardCraft',
    metaDescription:
      'Augusta web design that turns visitors into booked jobs: fast, mobile-first sites built for contractors and heat-season demand. Get a free quote.',
    eyebrow: 'Web Design · Augusta, GA',
    h1: 'Augusta web design engineered to bring in real work through heat season',
    h2Exact: 'Augusta Web Design Company',
    heroSubhead:
      "A pretty website that never rings the phone is just a brochure. We build Augusta contractors fast, mobile-first sites engineered to turn visitors into booked work, and to hold steady when HVAC season and flooding drive your call volume through the roof.",
    primaryCta: 'Get my free quote',
    intro:
      "Augusta web design done right is the difference between a site that books jobs and one that quietly bleeds leads: slow on a phone, the call button buried, no clear offer in sight. We build mobile-first, fast-loading sites that look like the professional you already are and turn Evans-to-North-Augusta visitors into booked jobs, and that hold up when summer heat sends your traffic surging.",
    aioQuestion: 'What makes a good contractor website in Augusta?',
    aioAnswer:
      "A good Augusta contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and is built to handle traffic spikes during HVAC season and flooding events. Because most searches happen on mobile, mobile speed and an obvious next step are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site is not bringing in work",
    painPoints: [
      { title: "It is a brochure, not a lead engine", body: "Plenty of contractor sites simply list services and sit there. No clear offer, no obvious next step, no reason to call you over the next guy. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It is too slow on a phone", body: "Most of your Augusta visitors are on mobile, and they bounce if your site needs more than a few seconds to load. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking together." },
      { title: "It cannot handle a heat-season surge", body: "When June arrives and HVAC calls pile up, or when the Savannah River floods and homeowners need a restoration contractor fast, your site gets hammered with traffic, and the slow ones buckle or hide the call button at the exact moment it matters most. We build sites that stay fast and keep converting under load." },
    ],
    servicesHeading: "What goes into an OnwardCraft Augusta website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site shaped around your trade, your service area, and the jobs you actually want to book." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that is where nearly all of your Augusta traffic lives. Fast, thumb-friendly, and easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where people actually use them. Every page carries a next step." },
      { name: 'Copy that sells', desc: "Words written for anxious homeowners: military families on a PCS clock, owners staring at a flooded basement, families sweating through a dead AC unit. Words that book the job." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank: clean structure, schema, fast load, and neighborhood-ready pages for Evans, Martinez, Grovetown, and more." },
      { name: 'Speed and Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both your conversions and your rankings." },
      { name: 'Heat-season and flood ready', desc: "Built to stay fast and keep the call button front and center when HVAC season and flooding spike your traffic, the moments that turn visitors into your biggest jobs of the year.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts toward AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your service area, your best jobs, and your competitors, then map the site around booking more of the work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert. You see it and shape it before a single line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it around what is actually converting." },
    ],
    pricing: {
      heading: 'Transparent Augusta web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Heat-season ready'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Augusta?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above: fixed price, no surprises, and you own the finished site outright." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through every stage." },
      { q: 'Will my site handle an HVAC-season traffic spike?', a: "Yes, and in Augusta that matters. When June hits with 98-degree heat, HVAC searches spike overnight, and the slow sites lose leads right when demand is highest. We build fast and keep the call button obvious, so your site converts under load instead of buckling." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and neighborhood-ready pages for Evans, Martinez, Grovetown, North Augusta, and more. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Augusta terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations and no platforms you cannot leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where nearly all of your Augusta traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage, usually WordPress or Webflow. We will recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month, so you can leave whenever you like." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Augusta site should include, and a fixed-price quote with a timeline. It is the simplest way to see what Augusta Web Design that converts visitors into booked jobs would look like for your contractor website. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'augusta', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Augusta Website Redesign | OnwardCraft',
    metaDescription:
      'Augusta Website Redesign without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs and hold up in heat season.',
    eyebrow: 'Website Redesign · Augusta, GA',
    h1: 'Augusta Website Redesign that modernizes for Masters Week buyers without tanking your traffic',
    h2Exact: 'Augusta Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every single week: slow, clumsy on a phone, easy to scroll past. We redesign Augusta contractor sites to convert more and load faster, and we migrate with care so you keep every bit of ranking you have already earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "An Augusta Website Redesign usually goes one of two bad ways: the site looks better but converts exactly the same, or it launches and the rankings vanish overnight. We do neither. We redesign Augusta contractor sites for speed and conversions with a mobile-first rebuild, build them to take heat-season and flood traffic, and handle an SEO-safe migration with the redirects and care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Augusta site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and quietly costs you trust", body: "For a high-ticket job, homeowners size you up by your website in seconds. An old, cluttered design quietly hands them to a competitor who looks more established, even when your work is plainly better. That sting is sharpest when you are competing for Masters Week buyers or DoD contractors who expect polish." },
      { title: "It is slow and awkward on a phone", body: "If your site is clunky or slow on mobile, you are losing the majority of your Augusta visitors before they ever reach your offer. A redesign built mobile-first wins them back." },
      { title: "It cannot keep up when demand surges", body: "Traffic that never turns into calls is wasted, and an old site that bogs down during a heat-season HVAC rush or a Savannah River flooding event loses leads at the precise moment they are worth the most. We rebuild for conversions and for the days your phone should be ringing nonstop." },
    ],
    servicesHeading: "What goes into an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what is costing you leads and rankings today, so the redesign fixes real problems instead of just swapping colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you have already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, smarter call-to-action placement, and lead forms people actually use. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals, which helps both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where nearly all of your Augusta traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the price of your jobs." },
      { name: 'Heat-season and flood ready rebuild', desc: "Rebuilt to stay fast and keep converting when HVAC season and flooding spike your traffic, so the new site captures your biggest jobs instead of choking on them.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what is losing you leads and rankings, then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build a thing." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and watch closely so rankings hold and climb, never drop." },
      { name: 'Optimize', desc: "Post-launch tuning around what is converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Augusta redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Heat-season ready'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Augusta?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result outright." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it is done carefully, and that is exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is a chore to update, is not bringing in leads, or bogs down when HVAC-season traffic surges, it is costing you work. The free audit tells you plainly whether a redesign is worth it for you." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what is ranking, and handle the technical migration so nothing important slips through the cracks." },
      { q: 'Will the new site handle HVAC-season traffic?', a: "Yes, and in Augusta that is a real consideration. When June arrives at 98 degrees with humidity, contractor sites take a surge of traffic, and the slow ones lose leads. We rebuild for speed and keep the call to action obvious so the site converts when demand peaks." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely: the site, the domain, and the content. No platform lock-in of any kind." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What is in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan. It is the clearest way to see what an Augusta Website Redesign would change for you, and how the SEO-safe migration keeps every ranking you have without losing rankings in the move." },
    ],
  },
];

export const augustaCity = {
  citySlug: 'augusta', city: 'Augusta', state: 'Georgia', stateAbbr: 'GA', metro: 'Augusta',

  titleTag: 'Augusta Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Augusta marketing for contractors: web design, SEO, and local SEO that get you found and booked and own your leads instead of renting them. Built for the CSRA.',

  eyebrow: 'Augusta · Web Design, SEO & Lead Generation',
  h1: 'Augusta marketing for contractors built around the trades across the CSRA',
  h2Exact: 'Augusta Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Augusta's one-of-a-kind market: Fort Eisenhower PCS demand, Masters Week buyers, brutal Georgia summers, and Savannah River flood risk. One team to get you ranking, converting, and off the rented-lead treadmill for good.",
  heroProof: ['Built for the trades', 'PCS and heat-season ready', 'No lock-in contracts'],
  primaryCta: 'Get my free Augusta audit',

  intro:
    "Augusta marketing for contractors has to fit a market like nowhere else, because if you run a contracting business here you are competing in one. Fort Eisenhower sends a constant wave of military families PCS-ing in and out, steady demand on a predictable cycle. Augusta National keeps a wealthy buyer segment invested in the area all year. Augusta University Health puts thousands of healthcare workers into the housing market. And every summer, 98-degree heat and Georgia humidity drive HVAC demand straight up. Winning here takes three things working together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack, all locked in before the next heat wave or flooding event sends demand through the roof. Here is how we help Augusta contractors do exactly that.",
  aioQuestion: 'How do Augusta contractors get more leads online?',
  aioAnswer:
    "Augusta contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack. Because Augusta's demand is shaped by Fort Eisenhower PCS cycles, Masters Week buyers, summer HVAC emergencies, and Savannah River flooding, the contractors who look established and are already ranking when those spikes hit win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: FOUNDER_NAME,
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Augusta searches \"near me.\" The single highest-return move for most local businesses, and how you catch HVAC season and flooding demand before your competitors do.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search, build an asset you own instead of renting traffic from ads, and measure it all in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs, and to stay fast when heat season floods your phone, not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it carefully so you keep every bit of ranking you have already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Augusta?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients pair a high-converting website with SEO and local SEO so they rank, convert, and own their leads, and are ready the moment HVAC season or a flooding event hits." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors, so we understand PCS moves, heat emergencies, flood damage, and insurance work." },
    { q: 'Why does Fort Eisenhower matter for my marketing?', a: "Fort Eisenhower is the Army's Cyber Center of Excellence and one of the largest employers in the CSRA. Thousands of military families PCS in and out every year, and each one is a potential customer who needs a trusted contractor fast. Ranking well means yours is the name they find when they land in Augusta." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm the exact scope in your free audit." },
    { q: 'Which Augusta areas do you serve?', a: "All of Augusta and the CSRA: Evans, Martinez, Grovetown, Summerville, Forest Hills, Hephzibah, and across the Savannah River into North Augusta, Aiken, and Beech Island, SC." },
    { q: 'Where should I start?', a: "Start with a free Augusta audit. We will look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. As an Augusta digital marketing agency built around web design and SEO for Augusta contractors, our whole focus is Augusta marketing for contractors that gets you found and booked. No pitch deck, just a plan." },
  ],
};
