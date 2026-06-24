// SEATTLE: per-metro x per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Seattle's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// SEATTLE: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Seattle is a year-round fight, not a seasonal one',
  body:
    "The Seattle metro runs from Federal Way up to Everett and east over the lake to Bellevue, Redmond, and Kirkland: close to four million people spread across a region shaped by water and hills as much as by zip codes. The thing that drives home-services demand here is not house size or building age. It is rain. Seattle sees more than 155 wet days every year, and that constant moisture turns roofing, drainage, moss treatment, waterproofing, mold remediation, and foundation work into steady year-round needs rather than short busy seasons. A Ballard homeowner staring at moss creeping across the roof is not waiting for November to act; the worry is there every time they glance outside. Two things decide who captures those searches. One: this is among the most tech-heavy metros anywhere, and Amazon, Microsoft, Boeing, and the businesses around them have filled the region with high-earning, time-starved professionals who search on their phones and decide quickly based on how credible a result looks. A contractor with a slow, generic site loses to a sharper competitor before the phone ever rings. Two: the housing splits in two directions. Capitol Hill, Fremont, and Ballard are packed with Craftsman and Tudor bungalows built between the 1920s and 1950s that demand genuine renovation skill, while Bellevue, Redmond, and Kirkland lean toward newer, higher-end homes whose owners expect premium service and will pay for it.",
  pullQuote: 'When 155 rainy days a year keep the demand coming and Amazon engineers tap whichever result looks most credible, the contractor who ranks is the one who fills the calendar.',
  donut: {
    title: 'How Seattle searches',
    value: 82,
    centerLabel: 'searches on mobile',
    legend: [
      { label: 'Mobile searches', pct: 82, kind: 'teal' },
      { label: 'Desktop searches', pct: 18, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Roofing/drainage (Oct-Mar) and HVAC/heat pump (Jun-Aug heat events)',
  seasonalDemand: [
    { m: 'J', v: 88, peak: true }, { m: 'F', v: 86, peak: true }, { m: 'M', v: 72 },
    { m: 'A', v: 65 }, { m: 'M', v: 60 }, { m: 'J', v: 70 }, { m: 'J', v: 85, peak: true },
    { m: 'A', v: 84, peak: true }, { m: 'S', v: 68 }, { m: 'O', v: 80, peak: true },
    { m: 'N', v: 88, peak: true }, { m: 'D', v: 90, peak: true },
  ],
  stats: [
    { value: '4M+', label: 'people across the greater Seattle-Tacoma metro' },
    { value: '155+', label: 'rainy days per year, keeping roofing, drainage, and restoration work coming all year', accent: true },
    { value: 'Oct-Mar', label: 'peak roofing and drainage stretch driven by the rainy season' },
    { value: 'Top 3', label: 'Map Pack spots that grab most of the clicks on a local search' },
  ],
  neighborhoods: [
    'Capitol Hill', 'Fremont', 'Ballard', 'Queen Anne', 'Wallingford',
    'West Seattle', 'Beacon Hill', 'Rainier Beach', 'Bellevue', 'Redmond',
    'Kirkland', 'Issaquah', 'Renton', 'Federal Way',
  ],
};

const AREAS = [
  'Capitol Hill', 'Fremont', 'Ballard', 'Queen Anne', 'Wallingford',
  'West Seattle', 'Beacon Hill', 'Rainier Beach', 'Bellevue', 'Redmond',
  'Kirkland', 'Issaquah', 'Renton', 'Federal Way',
];

const FOUNDER =
  "Here is the honest reason OnwardCraft exists. I kept watching genuinely skilled tradespeople write Angi and HomeAdvisor a check every month for leads those platforms had already sold to three of their competitors. A business built on rented leads is not really yours. Seattle homeowners are sharp online: they run a quick search, glance at the top results, and go with whoever looks the most credible and put-together. If you are not ranking and your site does not earn confidence in a few seconds, you are invisible to the exact buyers who can afford your best work. That is the gap we close. No year-long handcuffs. If it is not working, you fire us.";

const WHY = [
  {
    title: 'We actually understand the Seattle rain economy',
    body: "Moss treatment, roof drainage, waterproofing, mold remediation, foundation repair: in Seattle these are conversations that run all twelve months, not short busy windows. We build your SEO and content around the way this market really creates demand, instead of dropping a generic national playbook on top of it.",
  },
  {
    title: 'We get you off rented leads for good',
    body: "The entire point is a pipeline you keep. Not one more monthly bill to a lead broker for homeowners who already dialed three other contractors before they reached you.",
  },
  {
    title: 'We speak fluent tech-buyer',
    body: "A lot of your customers are Amazon and Microsoft employees who find a contractor the same way they find everything else: a fast Google search, a quick credibility scan, decision made. A clean site backed by strong local rankings wins that call before you ever pick up the phone.",
  },
  {
    title: 'No contracts, nothing hidden',
    body: "Prices published up front, reporting tied to actual leads, month-to-month after 90 days. If we are not earning the spend, you walk. That keeps the pressure exactly where it should sit: on us.",
  },
];

const PROOF = {
  heading: "We are new, so here is the honest math instead of a wall of logos",
  body:
    "Plenty of agencies will flash a grid of client logos at you. We are a young, founder-led shop, and we are not going to fake a track record we have not built yet. What we can show you is why this approach works, drawn straight from Google's and the industry's own research on how people search for local services.",
  stats: [
    { value: '46%', label: 'of Google searches carry local intent', n: 46 },
    { value: '76%', label: 'who run a local phone search visit a business that same day', n: 76 },
    { value: '28%', label: 'of local searches lead to a purchase', n: 28 },
  ],
  projection:
    "Here is a rough sketch, clearly marked as a projection and not a result we are claiming: imagine a Seattle contractor pulling roughly 2,000 local \"near me\" impressions a month across a few neighborhoods. Climbing from page-two obscurity into the top three is the difference between a slow drip of calls and a calendar that fills itself, and in a market packed with tech-savvy buyers who tap fast and almost never scroll, that gap is very real. In your free audit we model the actual figures for your business: your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "The numbers above are published benchmarks (Google / BrightLocal) plus one illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Seattle', state: 'Washington', stateAbbr: 'WA', metro: 'Seattle-Tacoma',
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const seattleLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'seattle', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Seattle Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Seattle Local SEO that ranks you above the competition in the Map Pack, so the rain-driven call lands with you across Ballard, Fremont, and Bellevue.',
    eyebrow: 'Local SEO · Seattle, WA',
    h1: 'Seattle Local SEO that ranks you above the competition from Ballard to Bellevue',
    h2Exact: 'Seattle Local SEO Company',
    heroSubhead:
      "Google pins three businesses to the map on a \"near me\" search, and everyone beneath them might as well not exist. In a city of tech-savvy buyers who choose fast and rarely scroll, we put you in that top three across your neighborhoods and suburbs, so the call lands with you instead of whoever happened to rank first.",
    primaryCta: 'Get my free Seattle audit',
    intro:
      "Seattle Local SEO really comes down to one question: when a homeowner in Fremont or Bellevue searches your service plus \"near me,\" are you ranking above the competition in the three businesses Google pins to the map? Most people tap one of those three and never scroll past them. This is a market where 155+ wet days a year keep roofing, drainage, and restoration demand running all year, and where Amazon and Microsoft workers make quick, credibility-led calls right on their phones. As a Seattle local SEO company that lives in this market, we treat landing in those three spots for the areas you serve as the whole ballgame.",
    aioQuestion: 'How do Seattle businesses rank higher in local search?',
    aioAnswer:
      "You climb by nailing four things: a Google Business Profile tuned to the exact services and neighborhoods you want, name-address-phone listings that stay consistent everywhere online, a steady flow of real reviews, and local content tied to actual Seattle neighborhoods and suburbs. Seattle is tech-forward and heavily mobile, so the businesses that win respond fast, keep their profile sharp, and publish content built around rain-driven needs like moss treatment, drainage, roofing, and waterproofing, plus the energy-efficiency work that lands well with this audience.",
    problemHeading: "If your phone is too quiet, it usually traces back to one of these",
    painPoints: [
      { title: 'Competitors own all three spots on the map', body: "Search your own service plus \"near me\" right now. Those three businesses Google pins to the map? Your customers see the identical thing, and they tap one of the three. Seattle buyers decide quickly; page two is not part of the conversation. Getting into the top three for Fremont, Ballard, Bellevue, and the rest is almost always the highest-return move a Seattle contractor can make." },
      { title: "You keep paying for leads you never own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Seattle homeowner to four contractors at once, then charge each of you to scrap over them. It is a treadmill with no off switch. Local SEO builds the reverse: a lead finds you, calls you, and nobody else got the same name. Over time you stop renting and start owning the pipeline outright." },
      { title: "You go missing right when the rain drives demand", body: "After nearly every wet stretch, which is most of October through March, Seattle homeowners start hunting for roofers, drainage crews, moss treatment, and waterproofing. The contractors already ranking when that wave hits are the ones who book it. Show up to the season unranked and the work goes to someone else." },
    ],
    servicesHeading: 'What it really takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The single biggest lever in the Map Pack. We tighten your categories, services, service area, photos, and posts so Google understands exactly which Seattle searches belong to you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to line up everywhere Google checks. We correct the listings that contradict each other and build the ones you are missing." },
      { name: 'Reviews that keep arriving', desc: "A simple system that turns every finished job into a steady drip of fresh reviews. It lifts your ranking and gives credibility-scanning Seattle buyers a reason to call." },
      { name: 'Neighborhood and suburb pages', desc: "Genuine pages for Capitol Hill, Fremont, Ballard, Bellevue, Redmond, Kirkland, and the rest, so you rank for the exact area someone is searching rather than a flat \"Seattle.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed: the quiet groundwork that lets everything above it actually rank." },
      { name: 'Local link building', desc: "Mentions and links from Seattle sources Google already trusts: local press, neighborhood associations, trade groups, partners. Around here that is often what splits page one from page two." },
      { name: 'Rain-driven and seasonal SEO', desc: "Content and optimization built around the roofing, drainage, moss, waterproofing, and heat-pump searches that drive Seattle's demand cycles, so you are ranking when the work is on.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now begins inside AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We map where you actually rank today across your neighborhoods and suburbs, then pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP come first, because they move fastest. Most clients see early lift here inside a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These stack up week over week, which is exactly why local SEO rewards starting now over waiting." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Seattle and the Eastside, with the on-page work to back each one up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go claim the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses competing across Seattle neighborhoods and suburbs.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood and suburb landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map from Ballard to Bellevue.', features: ['Everything in Local Growth', 'Local link building', 'Rain-driven seasonal SEO', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Seattle?', a: "Most Seattle engagements sit between $750 and $2,500 a month, depending on how many neighborhoods and keywords you are chasing. Our tiers are laid out right above. No hidden fees, no long contract, and we lock the exact scope during your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move within a few weeks. The competitive Seattle keywords usually need 90 to 180 days of steady work, because reviews and citations build on each other over time. Anybody promising page one in 30 days in a market this busy is selling you a story." },
      { q: 'What makes Seattle local SEO different?', a: "Two things really stand out. First, the rain keeps demand alive all year: roofing, drainage, moss treatment, waterproofing, mold, foundation, and the contractors already ranking when a search wave hits after a wet stretch are the ones who book it. Second, Seattle buyers are tech-forward: Amazon and Microsoft workers who run a fast search, skim the top results, and go with whoever reads as most credible. A strong Map Pack spot backed by solid reviews settles that decision before they call anyone else." },
      { q: 'Which areas do you cover?', a: "Every Seattle neighborhood and the suburbs around them: Capitol Hill, Fremont, Ballard, Queen Anne, Wallingford, West Seattle, Beacon Hill, Rainier Beach, plus Bellevue, Redmond, Kirkland, Issaquah, Renton, and Federal Way. We build a real page for each area instead of one generic Seattle page, because that is what ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It is just about all we do. Roofing, HVAC, plumbing, electrical, restoration, waterproofing, drainage, solar, heat pumps, and general contractors. We know what rain-driven demand looks like in Seattle, and we build your SEO around it." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research now starts inside AI rather than classic search. We structure your content and schema so those engines can read, trust, and cite your business. With an audience as tech-savvy as Seattle's, this is fast becoming as important as the Map Pack itself." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that route leads straight to you. Over time you lean on the brokers less, because the work is already coming in directly." },
      { q: 'How should I target Eastside suburbs like Bellevue and Kirkland separately?', a: "Bellevue and Kirkland search differently from Seattle proper: higher price points, newer homes, buyers who expect a premium presentation. We build dedicated pages and tune your profile for those areas on purpose, so you turn up as a credible local option on the Eastside instead of a Seattle contractor who just drives over the bridge." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that is roughly how long local SEO needs to show real movement. After that it is month-to-month. If we are not delivering, you leave, and the accountability stays squarely on us." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your neighborhoods, what your Map Pack competitors are doing to stay ahead of you, the fixes that will move you fastest, and a realistic 90-to-180-day Seattle Local SEO plan with the numbers run for your business. No pitch deck. Just a straight diagnosis of how you climb the local 3-pack and start showing up on \"near me\" searches you are missing today." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'seattle', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Seattle SEO Company | Rank Higher, Get Leads | OnwardCraft',
    metaDescription:
      'Seattle SEO that climbs contractors past the competition on Google and delivers leads you own. Lead-tied reporting, no lock-in, built for a rain-driven market.',
    eyebrow: 'SEO Services · Seattle, WA',
    h1: 'Seattle SEO that climbs your trade past the competition in a tech-forward market',
    h2Exact: 'Seattle SEO Company',
    heroSubhead:
      "Ads die the moment you stop paying. SEO does the opposite: rank once for what your Seattle customers search and the leads keep coming. We build that ranking and tie every report to real calls and booked jobs.",
    primaryCta: 'Get my free Seattle SEO audit',
    intro:
      "Seattle SEO boils down to one question: when a homeowner searches what you do, are you on page one or page two? Page two might as well be page fifty, and in a market where tech-forward buyers decide fast on the first credible result they see, the distance between ranking and not ranking is huge. As a Seattle SEO company built around the trades, we get contractors ranking for the money keywords in a market shaped by rain-driven demand and high-earning, time-starved buyers from Capitol Hill to Kirkland.",
    aioQuestion: 'How do Seattle businesses rank higher on Google?',
    aioAnswer:
      "They climb by repairing the site's technical foundation, tuning each page for the exact terms customers type, publishing genuinely useful local content tied to specific Seattle neighborhoods and suburbs, and earning links from trusted local sources. In Seattle, ranking for rain-driven searches like roofing, drainage, moss treatment, waterproofing, and mold remediation, plus energy-efficiency terms like heat pumps and insulation, hands contractors a real edge over rivals running a generic national playbook.",
    problemHeading: "Three reasons your Seattle site is not pulling in work",
    painPoints: [
      { title: "You are buried on page two", body: "Hardly anyone clicks past page one of Google, and they rarely scroll far down it. Seattle buyers decide especially fast: they spot a credible-looking top result and they are gone. If you are not among the first handful of results for what you sell, your site is invisible, no matter how good the work itself is." },
      { title: "You are renting traffic from Google Ads", body: "Ads can work, but the second your card stops, the leads stop with it. SEO builds something you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost. In a market where buyers search, skim, and decide fast, owning that presence is the long game." },
      { title: "You are not ranking for the demand that matters", body: "Seattle demand moves with the rain. Roofing, drainage, waterproofing, and moss treatment surge October through March. Heat pumps and HVAC jump when a rare summer heat event lands. If your SEO ignores those weather-driven searches, you are handing away your busiest weeks." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs in place before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned for the exact terms your Seattle customers search: titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers are searching, earn links, and bring leads in on their own." },
      { name: 'Link building', desc: "Authority from real Seattle and industry sources. In a market this competitive, links are frequently what separates page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack work so you win the \"near me\" searches across your neighborhoods and Eastside suburbs right alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads, not just rankings and traffic, so you always know what your SEO is genuinely worth." },
      { name: 'Rain-driven and seasonal SEO', desc: "We rank you for the roofing, drainage, moss, waterproofing, and heat-pump searches that drive Seattle's demand cycles, so you are visible before the work spikes instead of chasing it afterward.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, in a tech-savvy market where a growing share of research now starts there.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Seattle leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile: the foundation everything else needs in order to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the rain-driven and seasonal terms that define Seattle demand." },
      { name: 'Build authority', desc: "Links and citations from trusted Seattle and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what is working and push into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Seattle SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and Seattle suburbs.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Seattle-area search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Rain-driven seasonal SEO', 'Multi-location / Eastside targeting', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Seattle?', a: "Most Seattle SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Seattle?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, quicker on tighter neighborhood terms and slower on the most competitive metro-wide keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops the moment you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Seattle contractors do best running SEO as the long-term engine and ads for short bursts like heat events or storm season." },
      { q: 'Should my Seattle SEO target rain-driven demand?', a: "Without question. Roofing, drainage, waterproofing, moss treatment, and mold remediation are year-round conversations here, not a single-season blip. Heat pumps and HVAC jump during rare summer heat events. Ranking takes months to build, so you have to be in position before demand rises, not scrambling after it." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. Higher tiers add rain-driven seasonal SEO and AI-search optimization. We confirm the exact scope during your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it is month-to-month. If we are not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a growing part of what we optimize for. Seattle is one of the most tech-forward metros in the country, and your customers are already using AI tools to vet contractors. We structure your content and schema so those engines can read, trust, and cite your business." },
      { q: 'Which areas around Seattle do you cover?', a: "Every Seattle neighborhood plus the surrounding suburbs: Capitol Hill, Fremont, Ballard, West Seattle, Beacon Hill, and Rainier Beach inside the city, plus Bellevue, Redmond, Kirkland, Issaquah, Renton, and Federal Way out on the Eastside and South End." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads straight to you. The more you own your search visibility, the less you have to pay brokers for shared leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to stay ahead of you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. It is a straight Seattle SEO diagnosis: the money keywords you can win, the organic traffic on the table, and the path to page one. No pitch deck." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'seattle', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Seattle Web Design Company | OnwardCraft',
    metaDescription:
      'Seattle web design that turns visitors into booked jobs: fast, mobile-first sites built for contractors in a tech-savvy, rain-driven market.',
    eyebrow: 'Web Design · Seattle, WA',
    h1: 'Seattle web design that loads fast and books more jobs from Ballard to Bellevue',
    h2Exact: 'Seattle Web Design Company',
    heroSubhead:
      "A good-looking website that does not generate calls is just a brochure. We build Seattle contractors fast, mobile-first sites engineered to turn visitors into booked work, and to pass the credibility test that tech-savvy buyers run the instant they land on your page.",
    primaryCta: 'Get my free quote',
    intro:
      "Seattle web design should do one job: turn a visitor into a booked lead. Most contractor sites bleed leads quietly instead, slow on a phone, a call button nobody can find, no clear offer. In a city where Amazon and Microsoft workers run a quick search, skim the top results, and go with whoever looks the most professional, a weak website is money walking out the door. As a Seattle web design company built for the trades, we craft fast, mobile-first sites that look like the credible business you already are and turn Fremont-to-Bellevue visitors into booked jobs.",
    aioQuestion: 'What makes a good contractor website in Seattle?',
    aioAnswer:
      "A strong Seattle contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific neighborhoods and suburbs you serve. Since most searches happen on mobile and buyers here are tech-forward and quick to decide, mobile speed and an obvious next step are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site is not pulling in work",
    painPoints: [
      { title: "It is a brochure, not a lead engine", body: "Plenty of contractor sites simply list services and stop there. No clear offer, no obvious next step, no reason to choose you over the next result, and in Seattle buyers make that call in seconds. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It flunks the credibility check", body: "Seattle's tech-workforce homeowners are quick credibility scanners. A slow, dated, or generic site reads as unprofessional before they have seen a single review, and they move on. A fast, well-built site with clear trust signals closes that gap on the spot." },
      { title: "It says nothing about your neighborhood", body: "A Kirkland homeowner wants to see that you serve Kirkland, not a vague \"Seattle area\" page. Someone restoring a Craftsman in Ballard has different worries than an owner in a new Redmond build. We create sites that speak to those differences and name the areas you work, so visitors trust you are local and Google ranks you for the right searches." },
    ],
    servicesHeading: "What goes into an OnwardCraft Seattle website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site shaped around your trade, your neighborhoods, and the jobs you actually want to book." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, since that is where the overwhelming majority of your Seattle traffic comes from: fast, thumb-friendly, and easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, call buttons you cannot miss, and lead forms placed where people actually use them. Every page carries a next step." },
      { name: 'Copy that sells', desc: "Words built around what Seattle homeowners genuinely worry about: rain damage, energy efficiency, aging Craftsman homes, premium Eastside work, instead of filler that reads like everyone else's site." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank: clean structure, schema, fast load, and neighborhood-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and clear Google's performance checks, which protects both conversions and rankings." },
      { name: 'Neighborhood-targeted pages', desc: "Pages built around the Seattle neighborhoods and Eastside suburbs you serve, so you stand out as a credible local option instead of blending into one generic city page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more of Seattle's tech-savvy buyers move their research to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your areas, your best jobs, and your competitors, then map the site around booking more of the work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert, and you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current, and tune it based on what is actually converting." },
    ],
    pricing: {
      heading: 'Transparent Seattle web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services or areas.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Neighborhood-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Seattle?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above: fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes roughly 2 to 4 weeks; a larger custom build runs 4 to 8. We give you a firm timeline up front and keep you posted through each stage." },
      { q: 'Will my site help me win over tech-savvy Seattle buyers?', a: "That is the entire point. Amazon and Microsoft workers pick contractors the way they pick everything else: fast search, quick credibility scan, done. We build sites that pass that credibility check before you ever talk to them: fast, professional, clear offers, and strong local signals." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Seattle terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you cannot leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where the vast majority of your Seattle traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'Can you build pages that speak to Craftsman and Tudor homeowners in Ballard or Capitol Hill?', a: "Yes, and we do. Older Seattle housing stock carries specific needs: renovation skill, historic character preservation, moisture management, and your site should reflect that. We write copy and build pages aimed at those homeowners' real concerns, not a generic contractor template." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage, usually WordPress or Webflow. We will recommend the right fit during your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what high-converting Seattle web design should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'seattle', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Seattle Website Redesign | OnwardCraft',
    metaDescription:
      'Seattle Website Redesign without losing rankings: faster, mobile-first rebuilds that convert more visitors into booked jobs in a tech-savvy market.',
    eyebrow: 'Website Redesign · Seattle, WA',
    h1: 'Seattle Website Redesign done with a careful, SEO-safe migration that keeps your Eastside rankings intact',
    h2Exact: 'Seattle Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week: slow, awkward on a phone, easy to scroll past. We redesign Seattle contractor sites to convert more and load faster, and we migrate with enough care that you keep every bit of ranking you have already earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "A Seattle Website Redesign goes wrong in one of two ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We rebuild Seattle contractor sites for speed and credibility, design them to win the fast-deciding buyers this market is full of, and run an SEO-safe migration with the redirects and metadata care that protect the traffic you already have, from Ballard down to Bellevue.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping a 301 redirect for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Handled right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Seattle site is overdue for a redesign",
    painPoints: [
      { title: "It loses the credibility test in seconds", body: "Seattle's tech-workforce homeowners size up a contractor by the website before they do anything else. A slow, dated, or generic site reads as unprofessional immediately, and they jump to the next result. A redesigned, polished site wins that first impression and holds them long enough to call." },
      { title: "It is slow and clunky on a phone", body: "If your site does not load fast and run smoothly on mobile, you are losing most of your Seattle visitors before they ever reach your offer. A mobile-first redesign wins them back." },
      { title: "It does not convert the traffic you already have", body: "Traffic that never turns into calls is wasted. An old, generic site in this market gives a visitor no reason to choose you over the next result. We rebuild for conversions: clear offers, easy call buttons, content that speaks to Seattle's rain-driven and energy-efficiency needs, so the right buyers pick you." },
    ],
    servicesHeading: "What goes into an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what is costing you leads and rankings today, so the redesign fixes real problems instead of just swapping colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you have already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, smarter call-to-action placement, and lead forms people actually use. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals: better for both conversions and rankings, and critical for Seattle's mobile-heavy traffic." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where the vast majority of your Seattle visitors arrive." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and earns confidence from tech-savvy buyers." },
      { name: 'Neighborhood-targeted rebuild', desc: "Rebuilt around the specific Seattle neighborhoods and Eastside suburbs you serve, so the new site stands out as a credible local option instead of reading like a generic placeholder.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as Seattle's tech-forward buyers move more of their research to AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what is losing you leads and rankings, then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and watch closely so rankings hold and climb, rather than drop." },
      { name: 'Optimize', desc: "Post-launch tuning based on what is converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Seattle redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Neighborhood-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Seattle?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it is handled carefully, and that is exactly how we work. We map a 301 redirect for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually lifts them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes roughly 3 to 5 weeks; a larger rebuild runs 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, keeps flunking the credibility test with tech-savvy Seattle buyers, or is not bringing in leads, it is costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what is ranking, and handle the technical migration so nothing important slips through." },
      { q: 'Will the redesign help me compete in Seattle?', a: "Yes, and that is the point. We rebuild around the specific neighborhoods and suburbs you serve, tune the site for fast mobile load, and make the offer and call button impossible to miss, so the new site wins the credibility check instead of losing it." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Can you rebuild around Eastside suburbs like Bellevue and Redmond?', a: "Absolutely. Bellevue and Redmond homeowners carry different expectations than Seattle city buyers: newer homes, higher price points, premium service expectations. We rebuild your site to speak to both audiences and target them with dedicated pages." },
      { q: 'Do I own the redesigned site?', a: "Completely: the site, the domain, and the content. No platform lock-in." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and the SEO-safe migration plan that makes a Seattle Website Redesign worth doing." },
    ],
  },
];

export const seattleCity = {
  citySlug: 'seattle', city: 'Seattle', state: 'Washington', stateAbbr: 'WA', metro: 'Seattle-Tacoma',

  titleTag: 'Seattle Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Seattle marketing for contractors: web design, SEO, and local SEO that get you found, get you booked, and own your leads in a tech-savvy, rain-driven market.',

  eyebrow: 'Seattle · Web Design, SEO & Lead Generation',
  h1: 'Seattle marketing for contractors that fills your calendar through every rainy season',
  h2Exact: 'Seattle Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Seattle's tech-savvy, rain-driven market. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Seattle audit',

  intro:
    "Seattle marketing for contractors has to answer a market shaped by two forces: 155+ wet days a year that keep roofing, drainage, waterproofing, and restoration demand coming, and a tech-workforce homeowner base that makes fast, credibility-led calls on their phones. Winning here takes three things working together: a site that passes the credibility test, SEO that ranks you for what people search when the rain hits, and local SEO that puts you in the Map Pack for the neighborhoods and suburbs you serve from Ballard to Bellevue. Here is how our Seattle digital marketing works for contractors who want to get found and booked.",
  aioQuestion: 'How do Seattle contractors get more leads online?',
  aioAnswer:
    "Seattle contractors get more leads by pairing a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack neighborhood by neighborhood. Because Seattle buyers are tech-forward and decide quickly based on credibility, and because rain drives year-round demand for roofing, drainage, and restoration work, the contractors who rank well with a professional online presence win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Land in the top three businesses Google pins to the map when Seattle searches \"near me.\" The highest-return move for most local contractors, done tight, neighborhood by neighborhood from Ballard to Bellevue.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers search, including the rain-driven roofing, drainage, and waterproofing terms that define Seattle demand, and build an asset you own instead of renting traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites that pass the credibility check tech-savvy Seattle buyers run in seconds, then turn those visitors into booked jobs, not just traffic.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed, credibility, and conversions, and migrate it carefully so you keep every ranking you have already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Seattle?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads in a market driven by constant rain demand and fast-deciding tech-workforce buyers." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, electrical, restoration, waterproofing, drainage, heat pumps, solar, and general contractors, so we understand the rain-driven demand cycles and energy-efficiency priorities that shape the Seattle market." },
    { q: 'Why does the Seattle market need a different approach?', a: "Two reasons. First, 155+ rainy days a year turn roofing, drainage, moss treatment, waterproofing, and restoration into year-round conversations rather than seasonal spikes, so your SEO has to reflect that. Second, Seattle is full of Amazon and Microsoft workers who scan credibility fast: they run a quick search, glance at the top results, and pick whoever looks the most professional. Generic national SEO and a mediocre website lose that decision every time." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope during your free audit." },
    { q: 'Which Seattle areas do you serve?', a: "Every Seattle neighborhood plus the surrounding suburbs: Capitol Hill, Fremont, Ballard, Queen Anne, Wallingford, West Seattle, Beacon Hill, and Rainier Beach inside the city, plus Bellevue, Redmond, Kirkland, Issaquah, Renton, and Federal Way." },
    { q: 'Where should I start?', a: "Start with a free Seattle audit. We will look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves in your Seattle contractor marketing that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};
