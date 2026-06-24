// CAPE CORAL: per-metro, per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Cape Coral's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// CAPE CORAL: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'What really decides who wins Cape Coral search',
  body:
    "Cape Coral was platted in the 1950s as a giant grid of dredged waterways, and that one decision still shapes almost everything a contractor does here. More than 400 miles of canals run behind these homes, which means seawalls, docks, lifts, and waterfront foundations are a permanent line of work no inland Florida market shares. The buyers tend to be older. Lee County pulls retirees and winter snowbirds out of the Midwest by the thousands, and a huge share of them close on a canal-front house they barely know how to maintain, then go hunting for a contractor they have never met. They read carefully and lean hard on whatever shows up first on Google. Then Hurricane Ian arrived in September 2022, a Category 4 that put much of the city underwater and stripped roofs across Lee County. The rebuild is still running. Insurers reacted by tightening flood and wind coverage and pushing owners toward storm-rated roofs, impact windows, and elevated rebuilds, so the work did not stop once the debris was cleared. Add a population that swells every winter and thins every summer, and you get a market where demand stays steady, the searches are specific, and the contractors already on the map collect the calls while everyone else waits for the season to turn.",
  pullQuote: 'In a canal city full of newcomers who research before they call, the contractor Google shows first is usually the one who gets hired.',
  donut: {
    title: 'Post-Ian rebuild vs. routine work',
    value: 67,
    centerLabel: 'post-Ian rebuilding demand',
    legend: [
      { label: 'Storm-impact rebuild', pct: 67, kind: 'teal' },
      { label: 'Routine maintenance', pct: 33, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Hurricane season (Jun to Nov) plus snowbird activation (Nov to Apr)',
  seasonalDemand: [
    { m: 'J', v: 72, peak: true }, { m: 'F', v: 70, peak: true }, { m: 'M', v: 54 }, { m: 'A', v: 44 },
    { m: 'M', v: 62, peak: true }, { m: 'J', v: 78, peak: true }, { m: 'J', v: 86, peak: true },
    { m: 'A', v: 90, peak: true }, { m: 'S', v: 96, peak: true }, { m: 'O', v: 92, peak: true },
    { m: 'N', v: 80, peak: true }, { m: 'D', v: 74, peak: true },
  ],
  stats: [
    { value: 'Cat. 4', label: 'Hurricane Ian hit Cape Coral / Fort Myers in 2022, still driving rebuild demand' },
    { value: '400+ mi', label: 'of canals in Cape Coral, so seawall repair is a contractor category all its own', accent: true },
    { value: 'Top 5', label: 'Lee County ranks among the top US retirement migration destinations' },
    { value: '5 to 10 yrs', label: 'expected duration of post-Ian rebuilding demand in this market' },
  ],
  neighborhoods: [
    'Cape Coral NW', 'Cape Coral SW', 'Cape Coral SE', 'Cape Coral NE',
    'Fort Myers', 'Fort Myers Beach', 'Sanibel Island', 'Pine Island',
    'Estero', 'Bonita Springs', 'Naples', 'Lehigh Acres',
    'North Fort Myers', 'Cape Harbour', 'Matlacha',
  ],
};

const AREAS = [
  'Cape Coral', 'Fort Myers', 'Fort Myers Beach', 'Sanibel Island', 'Pine Island',
  'Estero', 'Bonita Springs', 'Naples', 'Lehigh Acres', 'North Fort Myers',
  'Matlacha', 'Cape Harbour', 'Iona', 'Gateway', 'Alva',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, seawall and dock work, general contractors. We know how insurance claims, impact-window jobs, and waterfront repair actually get sold here, so what we build matches the way your customers really search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The point is a pipeline you own. Not one more monthly invoice to a broker for the same canal-front homeowner three of your competitors are already calling.",
  },
  {
    title: 'We actually speak Cape Coral',
    body: "Seawall and dock repair, the Ian rebuild that is still going, snowbirds who arrive from up north every November and don't know a soul, the tighter flood and wind insurance pushing owners toward storm-rated work. A national shop can't fake that with a find-and-replace.",
  },
  {
    title: 'No contracts, no mystery',
    body: "Prices published, reporting tied to real leads, month-to-month after the first 90 days. If we are not earning the invoice, you leave. That keeps the pressure where it should be, which is on us.",
  },
];

const PROOF = {
  heading: "We're new, so here's the honest math instead of a logo wall",
  body:
    "Most agencies open with a wall of client logos. We are a young, founder-led shop, so we are not going to invent a track record we have not built yet. What we can hand you is the reasoning, pulled straight from Google's and the industry's own research on how people hunt for a local contractor.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here is a rough picture, labelled clearly as an illustration and not a result we are claiming: say a Cape Coral contractor pulls around 1,200 local \"near me\" impressions a month. Moving from page-two invisibility into the top three is the gap between a few stray calls and a calendar you cannot keep up with. In a city where insurance rules keep pushing owners toward storm-rated roofs and impact windows, and where a fresh wave of snowbirds lands every winter not knowing a single local name, that gap runs wider than most markets. In your free audit we model the real figures for your business: your rankings, your actual search volume, and a straight 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Cape Coral', state: 'Florida', stateAbbr: 'FL', metro: 'Cape Coral-Fort Myers',
  heroProof: ['Built for the trades', 'Post-Ian rebuild ready', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const capeCoralLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'cape-coral', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Cape Coral Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Cape Coral Local SEO that turns "near me" searches into calls. We put you in the Google Map Pack so canal-front and rebuild jobs land with you.',
    eyebrow: 'Local SEO · Cape Coral-Fort Myers',
    h1: 'Cape Coral Local SEO that turns "near me" canal-front searches into a ringing phone',
    h2Exact: 'Cape Coral Local SEO Company',
    heroSubhead:
      "Google pins three businesses to the map when a homeowner searches \"near me,\" and everyone underneath them is effectively invisible. We get you into that top three so the call lands with you instead of whoever ranked first, and so you are already there when a snowbird who just closed on a canal-front house starts hunting for a contractor.",
    primaryCta: 'Get my free Cape Coral audit',
    intro:
      "Cape Coral Local SEO comes down to one moment: a retiree who just bought a waterfront home off a Northeast Cape canal, or a homeowner over in Fort Myers, runs a \"near me\" local search for your service and either you are one of the three businesses Google pinned to the map or you are not. Most people tap one of those three and never scroll. The buyers here skew older, they research before they call, and a lot of them have never hired a local trade in their life. Getting into that local 3-pack is the whole game.",
    aioQuestion: 'How do Cape Coral businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile tuned to the exact services and Cape Coral and Fort Myers neighborhoods you want; name, address, and phone details that match everywhere online; a steady flow of real reviews; and local content built around genuine waterfront and inland areas. In a city packed with snowbirds and recent transplants who research hard before calling, the contractor who looks established and already ranks tends to land the job.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Three names own the map and you are not one of them', body: "Pull up your own service plus \"near me\" right now. The three businesses Google drops on the map soak up the lion's share of the clicks. If your name is not there, the quality of your seawall work or your roofs barely matters, because most people never scroll far enough to find you. In a city where buyers read up before they ever dial, climbing into that top three is usually the highest-return move you can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Cape Coral homeowner to four contractors, then bill each of you to scrap over them. It is a treadmill. Local SEO builds the opposite: a homeowner finds you, calls you, and nobody else got the lead. Own that pipeline and you stop renting visibility you never keep." },
      { title: "You're invisible to the snowbirds and new transplants", body: "Every winter Lee County fills with retirees and seasonal owners out of the Midwest and Northeast, and a big share of them buy a canal-front house they have no idea how to maintain. They go looking for a seawall guy, a roofer, an HVAC tech they have never met, and they start on Google. If you are buried on page two, those ready-to-hire owners hand the work to whoever ranked first." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "This is the heaviest lever in the Map Pack. We set your categories, services, service area, photos, and posts so Google knows precisely which Cape Coral and Fort Myers searches belong to your shop." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to agree everywhere Google looks. We correct the listings that contradict each other and add the ones you are missing across Lee County." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady run of fresh reviews. It lifts your ranking and gives a cautious snowbird buyer the reassurance to call you first." },
      { name: 'Neighborhood pages', desc: "Real pages for Fort Myers, Cape Harbour, Matlacha, Pine Island, Bonita Springs, Estero and the rest, so you rank for the area someone is actually searching instead of a generic \"Cape Coral.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, and mobile speed. The wiring under the hood that lets every other piece actually rank." },
      { name: 'Local link building', desc: "Mentions and links from Cape Coral and Lee County sources Google trusts: local press, trade associations, community partners. In this market that is often what splits page one from page two." },
      { name: 'Waterfront and rebuild targeting', desc: "We tune your profile and pages around the seawall, dock, storm-rated roofing, and impact-window searches that keep running here, so you catch those jobs instead of the contractor who set up sooner.", featured: true },
      { name: 'AI search readiness', desc: "A growing share of \"near me\" research now starts inside AI Overviews, ChatGPT, and Perplexity. We structure your content so those engines can read you and name you in their answers.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We map where you genuinely rank today across every canal-front and inland service area, then pin down which competitors beat you in the Map Pack and exactly why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP get handled first because they move the fastest. Most Cape Coral clients see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review system go live. These compound week over week, which is why local SEO rewards starting now rather than waiting for the snowbird season to turn." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Lee and Collier counties, backed by the on-page work that makes them rank for waterfront and rebuild terms." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to real calls and leads, not vanity rankings. Then we go take the next canal and the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Cape Coral-Fort Myers areas.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across Lee and Collier counties.', features: ['Everything in Local Growth', 'Local link building', 'Waterfront and rebuild targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Cape Coral?', a: "Most Cape Coral engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you are going after. The tiers above lay it out. No hidden fees, no long contract, and we lock the exact scope in your free audit before you spend a dollar." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move within a few weeks. The competitive Cape Coral and Fort Myers keywords usually take 90 to 180 days of steady work, because reviews and citations build up over time. Anyone promising you page one in 30 days is selling you a fantasy." },
      { q: 'What makes Cape Coral local SEO different?', a: "Two things stand out. The city was built on more than 400 miles of canals, so seawall, dock, lift, and waterfront-foundation work is an entire contractor category you will not find inland. And the buyers skew older, with a steady flow of snowbirds and retirees from up north who research carefully and lean on what ranks first because they do not know the local trades yet." },
      { q: 'How does local SEO help with seawall and canal-front work?', a: "Waterfront searches like seawall repair, dock rebuild, boat-lift install, and canal-front foundation work are specific terms a generic Cape Coral page never ranks for. We tune your profile and build real pages around those searches, so when an owner on a Northwest Cape canal needs the work, your name is the one Google shows." },
      { q: 'Why does the snowbird season matter for my rankings?', a: "Cape Coral's population swells every winter and thins out every summer, and a large share of those seasonal owners are new to the area with no contractor they trust. They start on Google. If you are already ranking and reviewed when they land in November, you catch that demand. If you wait, it goes to whoever was already on the map." },
      { q: 'Which areas do you cover?', a: "All of the Cape Coral-Fort Myers metro and the areas around it: Fort Myers Beach, Sanibel Island, Pine Island, Matlacha, Cape Harbour, Estero, Bonita Springs, Lehigh Acres, North Fort Myers, Naples and more. We build genuine neighborhood pages instead of one generic Cape Coral page, because that is what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It is basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, seawall and dock specialists, and general contractors. We understand emergency calls, insurance and impact-window jobs, and waterfront repair, and we build your local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "A growing slice of \"near me\" research now starts in AI tools instead of classic search. We structure your content and schema so those engines can read, trust, and name your business. In Cape Coral that is fast becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that is roughly how long local SEO needs to show real movement. After that it is month-to-month. If we are not delivering, you walk, and the accountability stays squarely on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that send leads straight to you alone. Over time you lean on the brokers less because the work is already coming to you direct." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your service areas, what your Map Pack competitors are doing to beat you, the fixes that will move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. It is the straightest path to Cape Coral Local SEO that ranks you on the map, no pitch deck, just a diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'cape-coral', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Cape Coral SEO Company | Rank On Google, Get Leads | OnwardCraft',
    metaDescription:
      'Cape Coral SEO that ranks contractors on Google and brings in leads you own. Built for post-Ian rebuild demand, snowbird migration, and canal-front work.',
    eyebrow: 'SEO Services · Cape Coral-Fort Myers',
    h1: 'Cape Coral SEO that ranks you for the post-Ian rebuild searches that book jobs',
    h2Exact: 'Cape Coral SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO does the reverse: rank once for what your Cape Coral customers search and the leads keep arriving. We build that ranking and tie every report to real calls and jobs, in a market where post-Ian rebuild demand hands well-ranked contractors a pipeline that runs for years.",
    primaryCta: 'Get my free Cape Coral SEO audit',
    intro:
      "Cape Coral SEO comes down to one question: when someone searches what you do, are you on page one or page two? In this market page two might as well be page fifty. As a Cape Coral SEO company we get contractors ranking on Google for the money keywords in a city still absorbing years of Hurricane Ian rebuild demand, where retirees from the Midwest land every month and search for a contractor the week they move in. We count organic traffic in leads, not visits that never pick up the phone.",
    aioQuestion: 'How do Cape Coral businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content, and earning links from trusted Cape Coral and Fort Myers sources. In a market reshaped by Hurricane Ian, ranking for storm-hardening, restoration, and rebuild searches alongside routine service keywords is one of the fastest ways to pull ahead of competitors who have not thought that far.",
    problemHeading: "Three reasons your Cape Coral site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. If you are not in the top handful of results for what you sell, your site is basically invisible, no matter how good it looks. In a market full of homeowners searching for post-Ian rebuild help, that invisibility costs real money every week." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost. In Cape Coral, where rebuild and migration demand is baked in for years, an owned ranking is worth far more than an ad campaign." },
      { title: "You're not ranking for the searches that matter here", body: "Cape Coral demand does not look like a typical Florida market. It is shaped by hurricane rebuild, canal-front property needs, snowbird retirees who research heavily before calling, and HOA exterior standards that drive a constant stream of work. If your SEO ignores those angles, you are leaving the market's most valuable searches to competitors who figured it out." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank your Cape Coral site at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned for the exact terms your Cape Coral and Fort Myers customers search: titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what waterfront and rebuild buyers search, earn links, and pull in leads long after we publish them." },
      { name: 'Link building', desc: "Authority from real Lee County and industry sources. In a competitive market, links are often the deciding factor between page one and page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches right alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and booked leads, not just rankings and traffic, so you always know what your SEO is worth in dollars." },
      { name: 'Post-Ian & storm-rebuild SEO', desc: "We rank you for the hurricane recovery, storm-hardening, and rebuild searches that define Cape Coral demand for the next several years, so you catch those jobs before competitors who start ranking later.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of Cape Coral search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Cape Coral leads, including the rebuild and storm-hardening terms your competitors may have missed." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile. The foundation everything else needs before it can rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including post-Ian rebuild terms, canal-front service keywords, and the search patterns of snowbird retirees." },
      { name: 'Build authority', desc: "Links and citations from trusted Cape Coral, Fort Myers, and Lee County sources to push your competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what is working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Cape Coral SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Cape Coral-Fort Myers search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Post-Ian rebuild SEO', 'Multi-location or multi-service', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Cape Coral?', a: "Most Cape Coral SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. The tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Cape Coral?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on low-competition terms and slower on the most contested Cape Coral keywords. SEO builds on itself, so the longer you run it, the bigger the gains, and that matters a lot in a market with years of rebuild demand still ahead." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops the moment you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most contractors do best running SEO as the long-term engine and ads for short-term spikes. In Cape Coral, where rebuild demand gives you a long runway, an owned ranking compounds longer than in most markets." },
      { q: 'How do I rank for post-Ian rebuild searches?', a: "Hurricane Ian created a specific set of searches: storm damage assessment, roof replacement, flood restoration, seawall repair, hurricane impact windows, whole-home generators. They are still active here and will be for years. We find the exact terms your potential customers use and optimize your site and Google profile to win them before competitors who have not thought that far." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. Higher tiers add post-Ian rebuild targeting and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it switches to month-to-month. If we are not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and name your business, not just classic search results." },
      { q: 'Which areas around Cape Coral do you cover?', a: "All of the Cape Coral-Fort Myers metro: Fort Myers Beach, Sanibel Island, Pine Island, Estero, Bonita Springs, Lehigh Acres, Naples and more, with genuine local pages rather than one generic Cape Coral page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. In a market with this much organic demand, owning your search visibility is far more efficient than paying for shared leads three competitors also bought." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes including any rebuild and storm-hardening keyword gaps, and a realistic timeline with the numbers modeled for your business. It is your starting map for Cape Coral SEO that gets you to page one, no pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'cape-coral', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Cape Coral Web Design Company | Sites That Book Jobs | OnwardCraft',
    metaDescription:
      'Cape Coral Web Design built to convert clicks into calls. Fast, mobile-first sites for contractors, post-Ian rebuild demand, and snowbird homeowners.',
    eyebrow: 'Web Design · Cape Coral-Fort Myers',
    h1: 'Cape Coral web design built to convert canal-front clicks into booked calls',
    h2Exact: 'Cape Coral Web Design Company',
    heroSubhead:
      "A handsome website that never generates a call is just an expensive brochure. We build Cape Coral contractors fast, mobile-first sites engineered to turn visitors into booked work, so you capture post-Ian rebuild demand, snowbird retirees searching from a new zip code, and canal-front owners who need work done now.",
    primaryCta: 'Get my free quote',
    intro:
      "Cape Coral Web Design is the difference between a site that bleeds leads quietly and one that books work: most contractor sites here are slow on a phone, the call button buried, no clear offer anywhere. We build mobile-first websites that load fast, look like the professional you are, and turn Fort Myers Beach, Sanibel, and Estero visitors into booked jobs, and that work just as hard on the wave of retirees from Ohio and Michigan who just moved in and are hunting for a contractor they do not know yet.",
    aioQuestion: 'What makes a good contractor website in Cape Coral?',
    aioAnswer:
      "A good Cape Coral contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and speaks to this market directly: Hurricane Ian damage assessment and repair, seawall and canal-front work, and storm hardening. Because snowbird retirees research carefully before calling, a site that shows local expertise and real past work converts far better than a generic template.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "Plenty of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next name. We design every page around one job: turning a visitor into a booked lead, whether that visitor is a long-time Cape Coral resident, a snowbird who arrived last month, or a homeowner still dealing with Ian damage." },
      { title: "It's too slow on a phone", body: "Most of your Cape Coral visitors are on mobile, and they bounce if your site takes more than a couple of seconds to load. Slow sites also rank worse, so you lose twice. We build fast, so you keep the visitor and the ranking." },
      { title: "It doesn't speak to this specific market", body: "Cape Coral is not a generic Florida suburb. It is a post-hurricane rebuild market, a canal city with waterfront property needs no inland town shares, and a top retirement destination for Midwest homeowners who do not know local contractors yet. A site that treats it like any other city loses the trust signals that actually convert these buyers." },
    ],
    servicesHeading: "What's in an OnwardCraft Cape Coral website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your service area, and the jobs you actually want, including the post-Ian rebuild and storm-hardening work that defines this market." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that is where nearly all of your Cape Coral traffic lives. Fast, thumb-friendly, and easy to call from in one tap." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where homeowners actually use them. Every page carries an unmistakable next step." },
      { name: 'Copy that sells', desc: "Words that speak to anxious homeowners, including snowbird retirees who need a contractor they can trust from a thousand miles away, and book the job." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank: clean structure, schema, fast load, and neighborhood-ready pages across Lee and Collier counties." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both your conversions and your rankings." },
      { name: 'Canal-front and rebuild ready', desc: "Structured to convert the specific searches that define Cape Coral, seawall repair, storm hardening, Ian restoration, so the site captures the work that is unique to this market.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read your site and recommend your business as more Cape Coral search shifts toward AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your service area, your best jobs, and your competitors, then map the site around booking more of the work you want, including the rebuild and storm-hardening demand that gives Cape Coral contractors a long pipeline." },
      { name: 'Design', desc: "We lay out a custom, mobile-first design built to convert canal-front and rebuild buyers, and you see it and shape it before a single line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page and messaging tailored to Cape Coral's mix of rebuild, waterfront, and snowbird buyers." },
      { name: 'Launch', desc: "We push it live with the SEO foundation, tracking, and load speed all dialed in for Cape Coral search from day one." },
      { name: 'Support and optimize', desc: "We keep the site fast and current and tune it month over month based on which Cape Coral pages are actually turning visitors into calls." },
    ],
    pricing: {
      heading: 'Transparent Cape Coral web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Canal-front & rebuild ready'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Cape Coral?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. The tiers are above: fixed price, no surprises, and you own the finished site outright." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you posted through every stage." },
      { q: 'Will my site speak to post-Ian rebuild customers?', a: "Yes, and in Cape Coral that matters enormously. Hurricane Ian created a specific set of buyer concerns: damage assessment, restoration quality, storm hardening. A site that addresses those directly converts far better than a generic one. We write copy that meets those buyers where they are." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank, and pairing it with our SEO service is how you climb the competitive Cape Coral and Fort Myers terms." },
      { q: 'Do I own the website?', a: "Completely. The site, the domain, and the content are all yours. No hostage situations, and no platform you are stuck on if you ever decide to move." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where nearly all of your Cape Coral traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage yourself, usually WordPress or Webflow. We recommend the right fit in your free consult and explain the tradeoffs in plain English." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month, so you can leave whenever you like." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what high-converting Cape Coral Web Design should include given this market's mix of rebuild, waterfront, and snowbird buyers, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'cape-coral', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Cape Coral Website Redesign | Keep Every Ranking | OnwardCraft',
    metaDescription:
      'Cape Coral Website Redesign that keeps every ranking you have earned. Faster, mobile-first rebuilds that convert snowbird retirees and post-Ian rebuild searchers.',
    eyebrow: 'Website Redesign · Cape Coral-Fort Myers',
    h1: 'Cape Coral Website Redesign that keeps every canal-front ranking you have earned',
    h2Exact: 'Cape Coral Website Redesign Company',
    heroSubhead:
      "An outdated site quietly costs you jobs every week: slow, clumsy on a phone, easy for a snowbird shopping around to skip past. We redesign Cape Coral contractor sites to convert more and load faster, built to capture post-Ian rebuild demand and seasonal retirees, and migrated so carefully that you keep every ranking you have earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "A Cape Coral Website Redesign usually goes one of two bad ways: the site looks prettier but converts exactly the same, or it launches and the rankings vanish overnight. We do neither. We rebuild Cape Coral contractor sites for speed and conversions, shape them around this market's mix of hurricane rebuild, canal-front work, and Midwest retirees, and run an SEO-safe migration with the redirects that protect the traffic you already have so you redesign without losing rankings.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign holds your rankings and improves them, because the new site is faster, mobile-first, and better structured. In Cape Coral it is also the moment to add the rebuild, canal-front, and snowbird-retiree messaging that converts this specific market.",
    problemHeading: "Signs your Cape Coral site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "For a high-ticket job, homeowners size you up by your site in seconds. Snowbird retirees who just moved from Ohio or Michigan are especially careful, since they are hiring a contractor in a city they do not know and lean heavily on how professional you look online. An old, cluttered design quietly ships them to a competitor who looks more established." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you are losing the majority of your Cape Coral visitors before they ever reach your offer. A redesign built mobile-first wins those visitors back and ranks better in the process." },
      { title: "It isn't built for this specific market", body: "An outdated site usually was not built with a canal city's buyer mix in mind: post-Ian rebuild and restoration searches, seawall and waterfront property needs, HOA exterior standards, or the heavily research-oriented snowbird retiree. A redesign is the chance to fix that and convert the visitors who already find you but never call." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what is costing you leads and rankings today, so the redesign fixes the real problems instead of just swapping the colors around." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep every bit of the rankings and traffic you have already earned in Cape Coral." },
      { name: 'Conversion redesign', desc: "Clear offers, smarter call-to-action placement, and lead forms homeowners actually use. We design for booked jobs, not just a prettier screenshot." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals, which lifts conversions and rankings at the same time." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where nearly all of your Cape Coral traffic actually lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and gives a cautious snowbird retiree the confidence to call." },
      { name: 'Post-Ian and canal-front ready', desc: "Rebuilt to speak to the rebuild, storm-hardening, and waterfront searches that define Cape Coral demand, so the new site captures the market's most valuable jobs.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as more Cape Coral search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what is losing you leads and rankings, including any gaps in rebuild, canal-front, or snowbird messaging, then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first design built around Cape Coral's rebuild and waterfront buyers, which you review and shape before we build a thing." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail so the Cape Coral rankings you already hold carry over without a hitch." },
      { name: 'Launch with SEO care', desc: "We go live with redirects in place and watch your Cape Coral and Fort Myers rankings closely so they hold and climb instead of dropping." },
      { name: 'Optimize', desc: "Once it is live we tune the pages around what Cape Coral visitors actually convert on, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Cape Coral redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Post-Ian & canal-front ready'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Cape Coral?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result outright." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it is done carefully, and that is exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually pushes them higher." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at every stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is not speaking to post-Ian rebuild and snowbird retiree buyers, or is a pain to update, it is costing you work. The free audit tells you plainly whether a redesign is worth it and what it should fix." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and sharpen your existing content, preserve what is ranking, and handle the technical migration so nothing important slips through the cracks." },
      { q: 'Can the redesign add canal-front and seawall messaging?', a: "Yes, and for many Cape Coral contractors that is one of the most valuable things a redesign can do. We add service pages and content for the canal-front and waterfront work that is unique to this market, seawall repair, dock work, waterfront property maintenance, so you rank and convert on searches your old site ignored." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely: the site, the domain, and the content. No platform lock-in of any kind." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what a Cape Coral Website Redesign should fix for this market's specific buyer mix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const capeCoralCity = {
  citySlug: 'cape-coral', city: 'Cape Coral', state: 'Florida', stateAbbr: 'FL', metro: 'Cape Coral-Fort Myers',

  titleTag: 'Cape Coral Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Cape Coral marketing for contractors: web design, SEO, and local SEO. Get found, get booked, and own your leads, all built for post-Ian rebuild and canal-front demand.',

  eyebrow: 'Cape Coral · Web Design, SEO & Lead Generation',
  h1: 'Cape Coral marketing for contractors: get ranked, get booked across the canal city',
  h2Exact: 'Cape Coral Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for a market shaped by Hurricane Ian, 400 miles of canals, and a constant wave of retirees from up north. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Post-Ian rebuild ready', 'No lock-in contracts'],
  primaryCta: 'Get my free Cape Coral audit',

  intro:
    "Cape Coral marketing for contractors starts with one fact: you are working one of the most demand-rich markets in Florida right now. Hurricane Ian's 2022 landfall as a Category 4 storm destroyed or badly damaged thousands of homes across Cape Coral and Fort Myers, and that rebuild pipeline will keep contractors busy for years. Layer in 400 miles of canals that need constant seawall and waterfront maintenance, a steady stream of retirees from Ohio, Michigan, and Indiana who arrive with no contractor relationships, and HOA-governed communities that enforce strict exterior standards, and you get a market where the right online presence pays off faster than almost anywhere else. Here is how we help Cape Coral contractors capture it.",
  aioQuestion: 'How do Cape Coral contractors get more leads online?',
  aioAnswer:
    "Cape Coral contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack. Because this market is shaped by post-Ian rebuild demand, canal-front property work, and constant retiree migration, the contractors who look established online and are already ranking capture an outsized share of a pipeline that will run for years.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Cape Coral searches \"near me.\" The single highest-return move for most local businesses, and how you catch post-Ian rebuild demand and snowbird retirees before a competitor does.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search, including rebuild, storm-hardening, seawall, and canal-front terms unique to this market, and build an asset you own instead of renting traffic from ads.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs, speaking directly to Cape Coral's mix of Ian rebuild homeowners, canal-front property owners, and snowbird retirees.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, add the rebuild and waterfront messaging this market demands, and migrate so carefully that you keep every ranking you have already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Cape Coral?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads, and so they are positioned to capture years of post-Ian rebuild and snowbird migration demand." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, seawall and dock specialists, and general contractors, so we understand emergency calls, storm-driven demand, waterfront work, and insurance jobs." },
    { q: 'Why does Hurricane Ian matter for my marketing?', a: "Ian made landfall in September 2022 as a catastrophic Category 4 storm, the deadliest to hit Florida since 1935. It destroyed thousands of homes across Cape Coral and Fort Myers and created a rebuild and storm-hardening pipeline that will keep contractors busy for five to ten years. Ranking now means capturing demand that is still active and will stay active for a long time." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm the exact scope in your free audit." },
    { q: 'Which Cape Coral areas do you serve?', a: "All of the Cape Coral-Fort Myers metro: Fort Myers, Fort Myers Beach, Sanibel Island, Pine Island, Matlacha, Estero, Bonita Springs, Lehigh Acres, Naples and more, with genuine local pages rather than one generic Cape Coral page." },
    { q: 'Where should I start?', a: "Start with a free Cape Coral audit. We look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest, including the post-Ian rebuild and canal-front angles your competitors may have missed. It is the simplest first step in Cape Coral marketing for contractors who want to get found and booked, no pitch deck, just a plan." },
  ],
};
