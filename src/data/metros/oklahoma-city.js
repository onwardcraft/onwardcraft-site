// OKLAHOMA CITY: per-metro x per-service local landing pages + city hub.
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
// OKLAHOMA CITY: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'In Oklahoma City, the contractors who rank before the storm are the ones who book it',
  body:
    "Few markets in America run on weather the way Oklahoma City does. Sitting squarely in Tornado Alley, the metro and its roughly 1.4 million residents live through a season every spring where one afternoon of hail can rewrite a contractor's entire year. Demand here does not creep upward. It arrives in a single overnight surge after a storm front rolls through Moore, Edmond, Yukon, Mustang, or Midwest City, suburbs that have grown fast over the past two decades and are packed with homeowners who suddenly all need the same trades at once. The 2013 Moore EF5 tornado kept roofing and restoration crews booked solid for months, and multiple hail events each year keep insurance-claim roofing humming at a volume most cities never experience. When that surge hits, homeowners do not flip through a phone book. They open Google, tap one of the first few results, and call. There is a quieter layer underneath the storms too: pockets of oil and gas money in Edmond, Nichols Hills, and Chisholm Creek where homeowners will pay for craftsmanship they trust. OKC is not a premium market across the board, since value still wins most kitchen-table decisions here, but the post-storm job volume is enormous, and whoever owns the search results owns that volume.",
  pullQuote: 'A hail line crosses the metro and within hours every OKC homeowner is on Google. The three contractors on the map answer the phone. The rest hope theirs rings.',
  donut: {
    title: 'How Oklahoma City searches',
    value: 18,
    centerLabel: 'Spanish-speaking households',
    legend: [
      { label: 'Hispanic households', pct: 18, kind: 'teal' },
      { label: 'Other residents', pct: 82, kind: 'grey' },
    ],
  },
  seasonTitle: 'When the OKC phones light up',
  seasonCaption: 'Tornado and hail roofing (Apr to Jun, Aug to Sep), HVAC (Jun to Sep), heating emergencies (Dec to Feb)',
  seasonalDemand: [
    { m: 'J', v: 55, peak: false }, { m: 'F', v: 52, peak: false }, { m: 'M', v: 68 },
    { m: 'A', v: 95, peak: true }, { m: 'M', v: 98, peak: true }, { m: 'J', v: 92, peak: true },
    { m: 'J', v: 85, peak: true }, { m: 'A', v: 88, peak: true }, { m: 'S', v: 80, peak: true },
    { m: 'O', v: 58 }, { m: 'N', v: 54 }, { m: 'D', v: 72, peak: true },
  ],
  stats: [
    { value: '1.4M', label: 'residents to reach across the Oklahoma City metro' },
    { value: 'Top 3', label: 'map spots that catch nearly every post-storm call homeowners make' },
    { value: 'Apr to Jun', label: 'the tornado and hail window when roofing demand explodes overnight' },
    { value: 'Multiple', label: 'hail events a year that send insurance-claim roofing through the roof', accent: true },
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
  "Here is the honest reason OnwardCraft exists. I got tired of watching skilled contractors wire a few thousand dollars a month to Angi and HomeAdvisor for leads that three of their competitors had already bought. You cannot build anything that lasts on leads you rent. In Oklahoma City that trap bites even harder, because the moment a hail line or tornado clears the metro, every roofing crew in town is scrapping over the exact same homeowner calls and the per-lead price jumps. The contractors who already rank on Google when that storm hits get the calls, and they own that pipeline for good. That is the entire job I set out to do for the trades here. No twelve-month handcuffs. If we are not earning it, you cut us loose.";

const WHY = [
  {
    title: 'Trades are the only thing we do',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We live and breathe storm-season roofing surges, insurance-claim paperwork, and the post-tornado restoration economy, so every page we build mirrors how an Oklahoma City homeowner actually searches when something breaks.",
  },
  {
    title: 'We end the rented-lead cycle',
    body: "Our entire aim is a pipeline that belongs to you. Not one more monthly check to a broker for a homeowner that three other crews already paid for, and certainly not at the inflated rates those brokers charge the week after a hail storm crosses the metro.",
  },
  {
    title: 'We genuinely know this metro',
    body: "Targeting that goes suburb by suburb from Edmond down to Moore, paired with storm-season content that earns rankings ahead of tornado season instead of scrambling once it arrives. A national shop dropping a city name into a template cannot touch that.",
  },
  {
    title: 'Prices posted, no fine print',
    body: "Pricing you can read before you call, reporting tied to actual leads, and month-to-month billing after the first 90 days. If we stop earning the spot, you walk. That keeps every ounce of pressure on us, where it should be.",
  },
];

const PROOF = {
  heading: "No logo wall yet, so here is the honest math instead",
  body:
    "A lot of agencies will wave a grid of client logos at you. We are a young, founder-led shop in our early days, so we are not going to fake a track record we have not built. What we can hand you is the reasoning behind why this works, pulled straight from Google's and the industry's own research on how people search close to home.",
  stats: [
    { value: '46%', label: 'of every Google search carries local intent', n: 46 },
    { value: '76%', label: 'of phone-based local searches turn into a same-day visit', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here is a rough sketch, labelled clearly as an illustrative projection and not a result we are claiming. Imagine an Oklahoma City roofing contractor pulling in roughly 1,200 local searches a month across the metro, then watch that number jump sharply the day a hail event hits. Climbing from buried-on-page-two into the top three before storm season opens is the gap between a phone that will not stop and a phone that stays silent while the competition books the jobs. In your free audit we run the actual figures for your business: your real rankings, your real search volume, and a straight 90 to 180 day path.",
  disclaimer:
    "The percentages above are published benchmarks (Google and BrightLocal) and the scenario is an illustrative projection. None of it represents past results claimed by OnwardCraft.",
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
    titleTag: 'Oklahoma City Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Oklahoma City Local SEO that puts your business in the top three on the map. We get you ranked before storm season so the post-hail calls land with you.',
    eyebrow: 'Local SEO · Oklahoma City',
    h1: 'Oklahoma City Local SEO that makes you the first name on the map when Moore searches after a storm',
    h2Exact: 'Oklahoma City Local SEO Company',
    heroSubhead:
      "Google pins exactly three businesses to the map on a \"near me\" search. The hour a tornado or hail line clears OKC, those three field a wall of calls while everyone underneath them sits idle. We move you into that top three before storm season opens, so the surge rings your phone instead of theirs.",
    primaryCta: 'Get my free Oklahoma City audit',
    intro:
      "Oklahoma City Local SEO really hangs on a single question. When a homeowner in Moore or Edmond pulls out their phone after a hail storm and types your trade plus \"near me,\" does Google pin your business to the Map Pack or someone else's? The crews that already rank in the local 3-pack when tornado season turns are the ones who write up the post-storm work. This is a market that pays off preparation, and below is exactly how we build it for you.",
    aioQuestion: 'How do Oklahoma City businesses rank higher in local search?',
    aioAnswer:
      "Four pieces have to line up: a Google Business Profile tuned to the precise services and suburbs you want, name-address-phone details that match everywhere on the web, a steady drip of genuine reviews, and local content rooted in real OKC suburbs and neighborhoods. Timing is its own lever here. Contractors who rank before tornado season opens in April ride the spike instead of chasing it once it passes. Targeting Moore, Edmond, Yukon, and Midwest City one suburb at a time is how you cover the entire metro.",
    problemHeading: "When the storm passes and your phone stays quiet, it usually traces back to one of these",
    painPoints: [
      { title: 'Three competitors own the map and you are not one of them', body: "Pull out your phone and search your own trade plus \"near me\" right now. Those three businesses Google stacks at the top of the map are the ones a Moore or Edmond homeowner taps the instant a hail storm clears. Everyone below them might as well be invisible. In a metro adding new rooftops as fast as OKC, claiming one of those three spots for the suburbs you cover is the highest-return move most contractors will ever make." },
      { title: "You keep paying for leads that were never yours", body: "Angi, Thumbtack, and HomeAdvisor sell the same Oklahoma City homeowner to four crews at once, then bill all four to brawl over them, and they jack the price the week after a storm event. Local SEO flips that math entirely: a homeowner finds you, calls you, and nobody else got the lead. Month by month you stop renting access and start owning the pipeline outright." },
      { title: "You are not ranking before the season turns", body: "Roofing demand in OKC does not warm up slowly. It detonates the night a tornado touches down or a hail core grinds across the metro. Local SEO takes months to compound, which means the crews ranking in April quietly started the previous fall. Wait until the sky is already green to think about rankings and the peak is gone before you load the truck." },
    ],
    servicesHeading: 'What we actually do to get you ranking',
    services: [
      { name: 'Google Business Profile', desc: "The heaviest lever in the map results. We sharpen your categories, services, service area, photos, and posts until Google understands precisely which Oklahoma City searches belong to you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to read the same everywhere Google checks. We correct the listings that contradict each other and create the trusted ones you are missing." },
      { name: 'Reviews that keep coming', desc: "A no-fuss system that converts finished jobs into a steady run of reviews. It lifts your ranking and reassures a rattled homeowner enough to dial your number first after a storm." },
      { name: 'Suburb and neighborhood pages', desc: "Honest pages for Moore, Edmond, Yukon, Mustang, Midwest City, and the rest, so you surface for the exact place someone is searching rather than a vague \"Oklahoma City.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, and mobile speed. The wiring behind the walls that lets everything else climb the rankings." },
      { name: 'Local link building', desc: "Mentions and links from Oklahoma City sources Google already trusts: local press, trade associations, and community groups. In this market that is often the line between page one and page two." },
      { name: 'Storm-season content strategy', desc: "Pages built around hail damage, tornado restoration, and insurance claims, the exact searches a stressed OKC homeowner runs mid-emergency, all published well before the season opens.", featured: true },
      { name: 'AI search readiness', desc: "A growing share of \"near me\" research now begins inside AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and name you in their answers.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We map where you actually rank today across OKC and its suburbs and identify exactly which competitors are beating you in the map results and what they are doing to win." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP come first because they move fastest. Most clients notice early lift here inside the first few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine switch on. These stack week over week, which is the whole reason local SEO rewards anyone who starts ahead of storm season." },
      { name: 'Add local content', desc: "Suburb and service-area pages spanning Moore, Edmond, Yukon, Mustang, Midwest City, and beyond, plus the storm-season content that ranks you for emergency searches." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads instead of vanity rankings. Then we go take the next suburb on the list." },
    ],
    pricing: {
      heading: 'Pricing you can read before you call',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location getting its map foundation built right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For crews battling across several OKC suburbs at once.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Suburb landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors set on owning the map across the whole metro.', features: ['Everything in Local Growth', 'Local link building', 'Storm-season content strategy', 'Multi-suburb service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Oklahoma City?', a: "Most OKC engagements land somewhere between $750 and $2,500 a month, scaled to how many suburbs and keywords you are chasing. The exact tiers sit right above. There are no buried fees and no long contract, and we lock the precise scope in your free audit." },
      { q: 'How long until I show up on the map?', a: "Profile improvements can move within a few weeks. The competitive OKC keywords usually need 90 to 180 days of steady work, since reviews and citations compound slowly. Anyone promising page one in 30 days is selling you a fairy tale. The real trick is starting before storm season rather than during it." },
      { q: 'What makes Oklahoma City local SEO its own animal?', a: "Two forces. First, the storm economy is enormous and real: the moment a hail event or tornado clears, homeowners open Google and the three crews on the map scoop up nearly every call. Second, the metro has sprawled, and suburbs like Moore, Edmond, Yukon, and Mustang are full of newer homeowners you reach with the suburb-level targeting most contractors never bother to set up." },
      { q: 'Can I rank in time for tornado and hail season?', a: "That hinges on when you begin. Meaningful local ranking takes 90 to 180 days to build. With the worst of the season running April through June, starting in the fall gives you the strongest shot at sitting on the map when demand erupts. Begin in March and you are already behind. The free audit tells you precisely where you stand and what is realistic from here." },
      { q: 'Which areas do you cover?', a: "The entire OKC metro: Midtown, Nichols Hills, Edmond, Moore, Yukon, Mustang, Midwest City, Del City, Norman, Bethany, Chisholm Creek, and more. We build real suburb and neighborhood pages rather than one catch-all Oklahoma City page, because the real pages are what rank for \"[service] [suburb]\" searches." },
      { q: 'Do you work specifically with contractors?', a: "It is nearly all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand storm-season roofing surges, insurance-claim workflows, and the OKC post-tornado restoration economy, and we shape your local SEO around every bit of it." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "An ever larger slice of \"near me\" research now starts inside AI rather than classic search. We structure your content and schema so those engines can read, trust, and cite your business. It is fast becoming as important as the map results themselves." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an opening 90 days because that is roughly how long local SEO needs to show real movement. After that it runs month-to-month. If we are not delivering, you walk, and the accountability stays squarely on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never get to keep, and after an OKC storm they charge a premium for homeowners your competitors already bought too. We build rankings, a Google profile, and a review base that route leads straight to you. Over time you lean on the brokers less because the work is already coming to you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across OKC and its suburbs, what your map competitors are doing to outrank you, the fixes that will move you fastest, and a realistic 90 to 180 day plan with the numbers run for your specific business. No pitch deck, just a straight diagnosis of what your Oklahoma City Local SEO needs to win the top three on the map before the next hail line crosses the metro." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'oklahoma-city', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Oklahoma City SEO Company | Rank Before Tornado Season | OnwardCraft',
    metaDescription:
      'Oklahoma City SEO that puts contractors on page one and holds it. Storm-season content, suburb targeting, organic traffic you keep, and zero lock-in here.',
    eyebrow: 'SEO Services · Oklahoma City',
    h1: 'Oklahoma City SEO that puts you on page one and holds it through every hail line in Tornado Alley',
    h2Exact: 'Oklahoma City SEO Company',
    heroSubhead:
      "Ads switch off the second your card stops. SEO does the reverse: earn the ranking once for what Oklahoma City homeowners search and the leads keep arriving, storm-season surge and all, the spike that sets the rhythm of the entire OKC contractor year.",
    primaryCta: 'Get my free Oklahoma City SEO audit',
    intro:
      "Oklahoma City SEO narrows to one blunt question. When a homeowner searches your trade, storm bearing down or blue sky overhead, are you sitting on page one or buried on page two? Around here page two might as well be page fifty. As your Oklahoma City SEO company we get contractors ranking on Google for the money keywords that pay across OKC's fast-growing suburbs, and we keep score in leads booked, not vanity organic traffic charts.",
    aioQuestion: 'How do Oklahoma City businesses rank higher on Google?',
    aioAnswer:
      "They climb by repairing the technical base of the site, tuning each page to the precise terms buyers type, publishing genuinely useful local content tied to specific OKC suburbs and neighborhoods, and earning links from sources Google already trusts. In Oklahoma City the crews who rank for storm-damage, hail-repair, and insurance-claim terms before tornado season opens in April are the ones who catch the surge. Working Moore, Edmond, Yukon, and Midwest City one suburb at a time is how you blanket the full metro.",
    problemHeading: "Three reasons your Oklahoma City site is not booking work",
    painPoints: [
      { title: "Page two is swallowing you", body: "Hardly anyone clicks past the first page of Google, and they rarely scroll deep into it. When a hail storm tears through Moore or Midwest City, homeowners open their phones and call one of the first results staring back at them. If you are not up there, your craftsmanship is irrelevant because nobody ever sees your name." },
      { title: "You are renting every click from Google Ads", body: "Ads can pull their weight, but the instant the card stops, the leads stop cold. And in OKC the week after a storm, ad costs balloon as every crew in the metro bids on the same clicks. SEO builds something you actually own: rankings that keep producing leads months and years past the work, at a sliver of the per-lead cost." },
      { title: "Your SEO ignores the storm-season searches", body: "Roofing and restoration demand in OKC does not ramp gradually. It erupts the night a tornado touches down or a hail core sweeps through. Ranking takes months, so you have to be on page one before the season rather than scrambling after it. Skip storm-damage and insurance-claim terms and you forfeit the single most valuable stretch of the contractor calendar." },
    ],
    servicesHeading: 'The SEO work that genuinely moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the behind-the-scenes fixes Google insists on before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned to the exact phrases your Oklahoma City customers type: titles, headings, body copy, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers ask, attract links, and pull in leads while you are out on the job." },
      { name: 'Link building', desc: "Authority earned from real Oklahoma City and industry sources. In this market a handful of trusted links is frequently the gap between page one and page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map optimization so you also capture the \"near me\" searches across OKC's suburbs right alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and booked leads rather than rankings and traffic alone, so you always know what your SEO is genuinely worth." },
      { name: 'Storm-season & insurance-claim SEO', desc: "We rank you for tornado damage, hail repair, and insurance restoration well before April, so when the sky turns the calls route to you.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite your business, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then draw a roadmap around the keywords most likely to drive real Oklahoma City leads, the storm-season terms included up front." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile: the footing everything else needs before it can rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus fresh local content, including the storm-damage and insurance-claim terms that drive OKC's busiest weeks." },
      { name: 'Build authority', desc: "Links and citations from trusted Oklahoma City and industry sources to muscle competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we pour more into whatever is working and expand into the next suburb or keyword set." },
    ],
    pricing: {
      heading: 'Oklahoma City SEO pricing, out in the open',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a tight site chasing its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors fighting across services and OKC suburbs.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses set on owning Oklahoma City search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Storm-season & insurance-claim SEO', 'Multi-suburb targeting', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Oklahoma City?', a: "Most OKC SEO engagements run $900 to $3,000 a month, set by how competitive your keywords are and how much content and link work the climb demands. The tiers sit just above, with no buried fees and no long contract holding you in." },
      { q: 'How long does SEO take to work in Oklahoma City?', a: "Look for early movement in 2 to 3 months and meaningful results in 4 to 6, quicker on tighter suburb terms and slower on the most competitive metro-wide ones. For OKC contractors the rule is simple: begin months ahead of tornado season, because ranking takes time and you have to already be in place when demand erupts." },
      { q: 'Is SEO better than Google Ads?', a: "They handle different jobs. Ads buy instant traffic that vanishes the moment you stop paying, and after a major OKC storm those ad costs surge as every crew bids on identical clicks. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most contractors win by running SEO as the long-term engine and ads for short bursts." },
      { q: 'Should my SEO target storm-season searches?', a: "Without question. The minute a hail event or tornado touches down, OKC homeowners open Google. If you are not already ranking for storm damage, hail repair, and insurance restoration terms before the season opens, you are invisible exactly when demand peaks. We build that content and ranking months ahead of April so you are ready." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and map SEO, and revenue-tied reporting. Higher tiers fold in storm-season and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an opening 90 days because SEO needs that window to show real movement, after which it runs month-to-month. If we are not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a fast-growing slice of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business rather than just classic search." },
      { q: 'Which areas around Oklahoma City do you cover?', a: "The full OKC metro: Midtown, Nichols Hills, Edmond, Moore, Yukon, Mustang, Midwest City, Del City, Norman, Bethany, Chisholm Creek, and more, built on genuine suburb pages rather than one catch-all Oklahoma City page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that funnel leads directly to you. After a storm event those platforms charge a premium for homeowners your competitors also bought. We build the visibility you own so the calls reach you first." },
      { q: "What's in the free SEO audit?", a: "Where you rank today across OKC and its suburbs, what your competitors are doing to outrank you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a straight diagnosis of what your Oklahoma City SEO needs to reach page one before tornado season opens in April." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'oklahoma-city', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Oklahoma City Web Design Company | Sites That Book Jobs | OnwardCraft',
    metaDescription:
      'Oklahoma City Web Design that books jobs instead of just looking nice: fast, mobile-first contractor sites built to convert a storm-driven market all year.',
    eyebrow: 'Web Design · Oklahoma City',
    h1: 'Oklahoma City Web Design that books jobs instead of just looking nice when Edmond homeowners search after the hail',
    h2Exact: 'Oklahoma City Web Design Company',
    heroSubhead:
      "A handsome website that never rings the phone is just a brochure. We build OKC contractors fast, mobile-first sites engineered to convert storm-season visitors into booked work and to capture the year-round lead flow that keeps your crew on the clock.",
    primaryCta: 'Get my free quote',
    intro:
      "Oklahoma City Web Design lives or dies on one thing: whether a stressed homeowner taps your number or scrolls past you. Most contractor sites here bleed leads without anyone noticing, sluggish on a phone, a call button hidden three taps down, no clear reason to choose them. After a hail storm or tornado a homeowner is rattled and searching fast, and they will tap the first result that looks trustworthy and shows an obvious number. As an Oklahoma City web design company we build fast, mobile-first contractor websites that carry the polish of the pro you already are and turn visitors from Moore to Edmond into booked jobs.",
    aioQuestion: 'What makes a good contractor website in Oklahoma City?',
    aioAnswer:
      "A strong Oklahoma City contractor website loads in under three seconds on a phone, places the call button and a plain offer above the fold, earns trust with reviews and real project photos, and names the exact suburbs you cover. Because OKC homeowners so often search mid-crisis, after a storm, during a July heat wave, or in a January freeze, speed and an obvious next step are what separate a site that books jobs from one that just decorates the internet.",
    problemHeading: "Why your current site is not bringing in work",
    painPoints: [
      { title: "It is a brochure, not a lead engine", body: "Plenty of contractor sites simply list services and stop there. No clear offer, no obvious next move, no reason to call you over the result below you. After a hail event OKC homeowners are moving in a hurry, and if your site does not make calling effortless right now, they are already dialing your competitor. We design every page around a single job: turning a visitor into a booked lead." },
      { title: "It crawls on a phone", body: "Nearly all of your Oklahoma City visitors are on mobile, and they bounce the second your site stalls for more than a beat or two, especially mid-emergency. Slow sites also rank worse. We build fast so you keep both the visitor and the ranking." },
      { title: "It says nothing about the suburbs you serve", body: "A homeowner in Moore wants to see that you actually work Moore, not a generic \"Oklahoma City\" page that could belong to anybody. We build sites that name the specific suburbs and neighborhoods you cover, so visitors believe you are local and Google ranks you for the searches that count." },
    ],
    servicesHeading: "What goes into an OnwardCraft Oklahoma City website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site shaped around your trade, your suburbs, and the jobs you genuinely want, the storm-season work that defines the OKC calendar included." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, since that is where nearly all your Oklahoma City traffic lives, above all when homeowners are searching in a post-storm scramble." },
      { name: 'Conversion-focused UX', desc: "Plain offers, unmissable call buttons, and lead forms placed exactly where people actually use them. Every page carries a next step." },
      { name: 'Copy that sells', desc: "Words that speak to a stressed homeowner and book the job, not filler that reads like every other site in the metro." },
      { name: 'Local SEO foundation', desc: "Built to rank from the studs out: clean structure, schema, fast load, and suburb-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and clear Google's performance checks, which protects conversions and rankings together." },
      { name: 'Suburb-targeted pages', desc: "Pages built around Moore, Edmond, Yukon, Mustang, Midwest City, and the suburbs you serve, so you rank for the right area instead of dissolving into one generic city page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search drifts toward AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your suburbs, your best jobs, and your competitors, then map the site around booking more of the work you actually want, year-round and through storm season." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert, and you see and shape it before a single line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from the first day." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what is genuinely converting." },
    ],
    pricing: {
      heading: 'Oklahoma City web design pricing, no guessing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A tight, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A larger site for established contractors running several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + suburb pages', 'Speed & Core Web Vitals', 'Suburb-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location operations.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Oklahoma City?', a: "Most contractor sites with us run $2,000 to $8,000 as a one-time build, scaled to page count and integrations. The tiers sit just above: fixed price, no surprises, and the finished site is yours to keep." },
      { q: 'How long does it take to build?', a: "A focused site lands in roughly 2 to 4 weeks and a larger custom build in 4 to 8. We hand you a firm timeline up front and keep you posted through every stage." },
      { q: 'Will my site convert storm-season visitors?', a: "That is a large part of what we design for. After a hail event or tornado, OKC homeowners are searching fast on their phones. We put the call button front and center, make the offer plain, and keep the site loading quick, so when someone lands mid-emergency the next step is obvious." },
      { q: 'Will my new site actually rank on Google?', a: "Every site we build sits on a local-SEO foundation: fast load, clean structure, schema, and suburb-ready pages. The build gets you ready to rank, and pairing it with our SEO service is how you climb the competitive OKC terms." },
      { q: 'Do I own the website?', a: "Entirely. You own the site, the domain, and the content. No hostage situations and no platform you cannot walk away from." },
      { q: 'Will it work well on phones?', a: "We design mobile-first because that is where nearly all your Oklahoma City traffic comes from, above all the homeowner searching in an emergency right after a storm." },
      { q: 'What platform do you build on?', a: "We choose the platform that fits your needs and that you can actually run yourself, usually WordPress or Webflow. We recommend the right fit in your free consult and explain the tradeoffs in plain language." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build comes with launch support, and after that we offer affordable monthly maintenance covering updates, speed, and security." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project at a fixed price. Any ongoing maintenance or SEO is month-to-month, so you can leave whenever you like." },
      { q: 'What do I get in the free quote?', a: "A clear read on what your current site is costing you in lost leads, what a high-converting Oklahoma City site should include, and a fixed-price quote with a timeline. No pressure, just a plan for the Oklahoma City Web Design that converts visitors into booked jobs through every storm season." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'oklahoma-city', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Oklahoma City Website Redesign | Rebuilt for Leads | OnwardCraft',
    metaDescription:
      'Oklahoma City Website Redesign that rebuilds for leads, not just looks. Faster, mobile-first rebuilds with an SEO-safe migration that holds your rankings.',
    eyebrow: 'Website Redesign · Oklahoma City',
    h1: 'Oklahoma City Website Redesign that rebuilds for leads, not just looks, before the next Tornado Alley hail line hits',
    h2Exact: 'Oklahoma City Website Redesign Company',
    heroSubhead:
      "An outdated site quietly costs you jobs every single week: slow, awkward on a phone, easy to skip past in an emergency. We redesign OKC contractor sites to convert more and load faster, then migrate them with enough care that you hold onto every scrap of ranking you have already earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "An Oklahoma City Website Redesign fails in one of two ways. Either the site looks sharper but converts no better, or it launches and the rankings evaporate overnight. We do neither. We rebuild Oklahoma City contractor sites for speed and conversions, build them to stand apart in a market run by storm seasons, and run an SEO-safe migration with the redirects and care that guard the traffic you already have without losing rankings.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO through a redesign by keeping your URL structure (or mapping 301 redirects for every page that changes), preserving your existing content and metadata, carrying over your schema, and testing the whole thing on staging before launch. Handled right, a redesign holds your rankings and lifts them, because the new site is faster, mobile-first, and better structured than the one it replaces.",
    problemHeading: "Signs your Oklahoma City site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and quietly costs you trust", body: "When a homeowner is weighing a roofing job or major restoration after a storm, OKC buyers size you up by your site in a matter of seconds. An old, cluttered design nudges them toward a competitor who simply looks more established, even when your workmanship is better and your price is fairer." },
      { title: "It is slow and clumsy on a phone", body: "If your site is clunky or sluggish on mobile, you are losing most of your Oklahoma City visitors before they ever reach your offer, the homeowner who just watched a tornado clear their street and needs a contractor right now included. A mobile-first redesign wins them back." },
      { title: "It vanishes in the post-storm rush", body: "After a major hail event, homeowners are dialing fast and comparing several sites at once. A generic old design gives them no reason to pick you over the next result. We rebuild for conversions and for the suburbs you actually serve, so the right buyers land on you and stop looking." },
    ],
    servicesHeading: "What an OnwardCraft redesign includes",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what is costing you leads and rankings today, so the redesign solves real problems instead of just swapping colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you have already earned." },
      { name: 'Conversion redesign', desc: "Plain offers, smarter call-to-action placement, and lead forms people actually fill out. We design for booked jobs, not just good looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals, better for conversions and rankings alike, and crucial when storm-season traffic surges." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where nearly all your Oklahoma City traffic lives and where homeowners search mid-emergency." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the seriousness of storm-damage restoration." },
      { name: 'Suburb-targeted rebuild', desc: "Rebuilt around Moore, Edmond, Yukon, Mustang, Midwest City, and the suburbs you serve, so the new site ranks and converts for the right areas.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search keeps shifting toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We dig into what is losing you leads and rankings, then map a redesign that fixes it without breaking the parts already working." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build a thing." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and line up every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and watch closely so rankings hold and climb rather than slip." },
      { name: 'Optimize', desc: "Post-launch tuning driven by what is converting, plus ongoing speed work and updates." },
    ],
    pricing: {
      heading: 'Oklahoma City redesign pricing, laid out plainly',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A tight redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + suburb pages', 'Suburb-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Oklahoma City?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, set by size and integrations. Fixed price, no surprises, and the result is yours to keep." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not when it is done carefully, and careful is exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, carry over your schema, and test on staging first. Handled right, a redesign holds your rankings and usually nudges them up." },
      { q: 'How long does a redesign take?', a: "A focused redesign runs roughly 3 to 5 weeks and a larger rebuild 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is a chore to update, is not pulling in leads, or flat-out fails to convert the storm-season traffic that defines the OKC market, it is quietly costing you work. The free audit tells you plainly whether a redesign earns its keep." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and sharpen your existing content, protect whatever is already ranking, and run the technical migration so nothing important slips through the cracks." },
      { q: 'Will the redesign help me compete after storm events?', a: "Yes, and it is a core goal for OKC contractors. After a hail storm or tornado, homeowners compare several sites in minutes. We rebuild around fast load, obvious call buttons, and the suburbs you serve, so your site stands out instead of blending in." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts conversions and rankings together." },
      { q: 'Do I own the redesigned site?', a: "Entirely: the site, the domain, and the content. No platform lock-in of any kind." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan, so your Oklahoma City Website Redesign rebuilds for leads and holds every ranking through the next storm season." },
    ],
  },
];

export const oklahomaCityCity = {
  citySlug: 'oklahoma-city', city: 'Oklahoma City', state: 'Oklahoma', stateAbbr: 'OK', metro: 'Oklahoma City',

  titleTag: 'Oklahoma City Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Oklahoma City marketing for contractors: web design, SEO, and local SEO. Get found before tornado season, own your leads instead of renting them, convert more.',

  eyebrow: 'Oklahoma City · Web Design, SEO & Lead Generation',
  h1: 'Oklahoma City marketing for contractors who want to own their leads when the next hail line crosses Tornado Alley',
  h2Exact: 'Oklahoma City Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for OKC's storm-driven market. One team to get you ranking before tornado season turns, converting stressed homeowners into booked jobs, and finally off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Storm-season targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Oklahoma City audit',

  intro:
    "Oklahoma City marketing for contractors starts with one fact: run a contracting business here and the weather writes your calendar for you. Tornado season, hail events, the summer HVAC rush, winter heating emergencies, those are the moments the phones actually ring. The crews already ranking on Google when each spike lands are the ones who book the work. Winning here takes three pieces pulling together: a site that converts a rattled homeowner fast, SEO that ranks you for what people type during and after a storm, and local SEO that plants you on the Google map for the suburbs you cover. We are the Oklahoma City digital marketing agency that brings web design and SEO together for the trades, and here is exactly how we help OKC contractors pull that off.",
  aioQuestion: 'How do Oklahoma City contractors get more leads online?',
  aioAnswer:
    "Oklahoma City contractors win more leads by pairing a fast, mobile-first website with SEO that ranks them for high-intent searches (storm-damage, hail-repair, and insurance-claim terms included) and local SEO that captures the Google map suburb by suburb. Because the OKC metro has spread out across Moore, Edmond, Yukon, Mustang, and Midwest City, the contractors who target those suburbs by name and rank before tornado season opens in April are the ones who book the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Claim one of the three spots Google pins to the map when OKC searches \"near me.\" The highest-return move most local contractors can make, done suburb by suburb and locked in before storm season opens.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the keywords that actually pay (storm-damage and insurance-claim terms included) and build an asset you own instead of renting clicks from ads.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn a stressed homeowner into a booked job, the post-storm rush that defines the OKC contractor calendar very much included.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions and migrate it carefully so you hold every bit of ranking you have earned, ready to capitalize the next time storm season turns.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Oklahoma City?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients pair a high-converting website with SEO and local SEO so they rank, convert, and own their leads, above all during the storm seasons that power OKC's contractor economy." },
    { q: 'Do you work only with contractors?', a: "Almost exclusively. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. That focus is why we understand storm-season roofing surges, insurance-claim workflows, and the post-tornado restoration economy." },
    { q: 'Why does the Oklahoma City market need a different approach?', a: "Because the storm economy is real here. Tornado season and hail events do not slowly build demand. They create an overnight flood of homeowners hunting for a contractor, and the businesses sitting on the map when that hits write up the work. Winning means ranking before the season opens, suburb by suburb, across a metro that keeps growing." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO run month-to-month from $750 to $3,000 with no long contract. We confirm the exact scope in your free audit." },
    { q: 'Which Oklahoma City areas do you serve?', a: "The full metro: Midtown, Nichols Hills, Edmond, Moore, Yukon, Mustang, Midwest City, Del City, Norman, Bethany, Chisholm Creek, Automobile Alley, Paseo Arts District, and more." },
    { q: 'Where should I start?', a: "Start with a free Oklahoma City audit. We will go through your website, your rankings, and your map presence, then point you to the one or two moves that will bring in work fastest, including a straight answer on whether you are ready for tornado season. That is how Oklahoma City marketing for contractors gets you found and booked instead of renting leads. No pitch deck, just a plan." },
  ],
};
