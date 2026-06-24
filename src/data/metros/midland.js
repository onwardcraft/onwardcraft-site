// MIDLAND : per-metro x per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Midland's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// MIDLAND : shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Midland-Odessa is a boom-cycle race',
  body:
    "The Midland-Odessa metro sits atop the Permian Basin, the most productive oil field in the world, and that single fact shapes everything about doing business here. When oil prices run hot and the shale rigs multiply, the metro floods with money. Oil executives and engineers gut-renovate their homes, HVAC companies book out weeks in advance, and a contractor who ranks on Google captures work that a company two years ago couldn't have imagined. Then prices dip and the cycle tightens. The contractors who built their online presence before the boom spike are the ones who capture it; the ones who start optimizing after the surge is already rolling usually miss most of it. Two things layer on top of the oil economy. First, Midland summers are brutal: temperatures hit 105 to 110°F regularly from May through September, and HVAC failure in that heat is a genuine emergency. Demand for air conditioning service and replacement is enormous and almost entirely driven by the calendar. Second, the February 2021 freeze hit Midland and Odessa especially hard: pipes burst in nearly every home, and water damage, plumbing, and restoration demand ran at crisis levels for two-plus years afterward. Contractors who were ranking when that disaster hit had their phones ringing before they got out of bed. Add a 57% Hispanic population where Spanish-language search is a real market, and a West Texas dust environment that abrades roofs and HVAC equipment unlike anywhere in the country, and this market has more angles than it first appears.",
  pullQuote: 'In Midland, the contractor who ranks before the next oil boom spike is the one who books it. The one who starts optimizing after usually misses it.',
  donut: {
    title: 'How Midland searches',
    value: 57,
    centerLabel: 'Hispanic',
    legend: [
      { label: 'Hispanic', pct: 57, kind: 'teal' },
      { label: 'Other', pct: 43, kind: 'grey' },
    ],
  },
  seasonTitle: 'When Permian Basin trade calls peak',
  seasonCaption: 'Triple-digit summers (May–Sep) and hard-freeze emergencies (Jan–Feb)',
  seasonalDemand: [
    { m: 'J', v: 85, peak: true }, { m: 'F', v: 80, peak: true }, { m: 'M', v: 55 },
    { m: 'A', v: 62 }, { m: 'M', v: 88, peak: true }, { m: 'J', v: 98, peak: true },
    { m: 'J', v: 100, peak: true }, { m: 'A', v: 97, peak: true }, { m: 'S', v: 84, peak: true },
    { m: 'O', v: 48 }, { m: 'N', v: 44 }, { m: 'D', v: 52 },
  ],
  stats: [
    { value: '~57%', label: 'Hispanic residents: Spanish-language search is a real market', accent: true },
    { value: '105–110°F', label: 'summer highs: HVAC failure is an emergency May through Sep' },
    { value: 'Permian Basin', label: 'world\'s most productive oil field, driving boom-cycle renovation budgets' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks when the boom hits' },
  ],
  neighborhoods: [
    'Midland', 'Odessa', 'Midland Country Club', 'Greenwood', 'Gardendale',
    'Goldsmith', 'Notrees', 'Garden City', 'Stanton', 'Big Spring',
    'Andrews', 'Monahans', 'Pecos', 'Fort Stockton',
  ],
};

const AREAS = [
  'Midland', 'Odessa', 'Midland Country Club', 'Greenwood', 'Gardendale',
  'Goldsmith', 'Notrees', 'Garden City', 'Stanton', 'Big Spring',
  'Andrews', 'Monahans', 'Pecos', 'Fort Stockton', 'Permian Basin',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. In Midland that problem is even sharper — when the oil economy swings up, everyone's phones ring, but the contractors who built their online presence before the boom are the ones who capture the wave. So that's the whole point of what we do: get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We understand Permian Basin heat emergencies, freeze disaster recovery, and boom-cycle renovation demand, so everything we build is shaped around how your customers really search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners three competitors also bought, and especially not when the boom spikes and lead prices climb right along with it.",
  },
  {
    title: 'We actually speak Midland-Odessa',
    body: "Neighborhood-by-neighborhood targeting across the Permian Basin, plus Spanish-language reach to win the 57% of the market most agencies never even see. The stuff a national shop can't do by swapping a city name into a template.",
  },
  {
    title: 'No contracts, no mystery',
    body: "Prices you can read on the page, reports that count Tall City calls and not vanity charts, and month-to-month billing once the first 90 days are behind us. Stop seeing booked jobs and you walk. That arrangement keeps every ounce of pressure sitting on our side of the table.",
  },
];

const PROOF = {
  heading: "We're brand new, so you get honest Permian Basin math, not a wall of logos",
  body:
    "Most agencies open with a grid of client badges. OnwardCraft is a young, founder-run shop in its first chapter, so we are not going to fake a history we have not lived yet. What we can put in front of a Midland contractor is the reason this approach works, pulled directly from Google's own research and the local-search studies the industry publishes every year.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Picture this, labelled plainly as a projection and not anything we are claiming to have delivered: a contractor working Midland and Odessa pulls roughly 1,200 local \"near me\" impressions a month across a cluster of Permian Basin neighborhoods. Climbing out of page-two obscurity into the top three is the gap between a few scattered calls and a calendar booked into next month, and when oil prices run hot again that gap turns punishing. Your free audit replaces this guess with your own figures: your real rankings, your real Tall City search volume, and a straight 90-to-180-day route to the top.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Midland', state: 'Texas', stateAbbr: 'TX', metro: 'Midland-Odessa (Permian Basin)',
  heroProof: ['Built for the trades', 'Permian Basin focused', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const midlandLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'midland', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Midland Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Midland Local SEO that ranks your business above the competition on the map, before the next Permian Basin oil boom hits. We get you into the local 3-pack.',
    eyebrow: 'Local SEO · Midland-Odessa, TX',
    h1: 'Midland Local SEO that ranks you above the competition in the Permian Basin',
    h2Exact: 'Midland Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. In Midland-Odessa, where an oil boom can flood the market with renovation budgets overnight, we get you into that top three for your neighborhoods so the call lands with you, well before the wave hits.",
    primaryCta: 'Get my free Midland audit',
    intro:
      "Midland Local SEO comes down to one thing: when a homeowner in Greenwood or Gardendale fires off a \"near me\" search for your trade, are you one of the three businesses Google pins to the Map Pack? Most people tap one of those three and never scroll. This market has something most don't: an oil-driven economy that can spike renovation demand almost overnight, and a 57% Hispanic community searching in Spanish. Sitting in those top three spots before the boom, and in the languages your customers actually use, is the whole game. Here's how you do it.",
    aioQuestion: 'How do Midland TX businesses rank higher in local search?',
    aioAnswer:
      "Four pieces have to line up: a Google Business Profile built around the exact trades and neighborhoods you chase, name-address-phone details that match on every listing the web holds about you, a dependable flow of genuine reviews, and pages written around actual Midland and Odessa neighborhoods. Out here in the Permian Basin the contractors who pull ahead also chase the calendar, ranking for the May-through-September HVAC rush and the plumbing and restoration spike a hard freeze sets off, and they show up in Spanish for the 57% Hispanic share of the metro that most rivals never bother to court.",
    problemHeading: "A quiet phone in the basin usually traces to one of these three",
    painPoints: [
      { title: 'Rivals are sitting in all three Map Pack slots', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks. In Midland-Odessa, when the oil economy heats up and renovation budgets get large, those three spots capture most of the surge. If you're not one of them, the boom largely passes you by, no matter how good your work is. Getting into that top three is usually the single highest-return move a Permian Basin contractor can make." },
      { title: "You're buying leads that were never yours", body: "Angi, Thumbtack, and HomeAdvisor sell the same Midland homeowner to four contractors, then bill each of you to fight over them. When demand spikes during an oil boom cycle, lead prices from those platforms go with it. Local SEO builds the opposite: a lead finds you, calls you, and nobody else got it. Over time you stop renting and start owning the pipeline." },
      { title: "You're invisible to more than half the market", body: "About 57% of Midland-Odessa residents are Hispanic, and a significant share search in Spanish. Most contractors do nothing to show up for those searches, so the demand sits there unclaimed. Targeting the right neighborhoods and languages is how you reach buyers your competitors are ignoring entirely." },
    ],
    servicesHeading: 'The real work behind a basin ranking',
    services: [
      { name: 'Google Business Profile', desc: "This is the heaviest lever in the Tall City Map Pack. We tune your categories, service list, coverage area, jobsite photos, and weekly posts until Google reads you as the obvious answer for the Midland and Odessa searches you care about." },
      { name: 'Citations and NAP cleanup', desc: "Google cross-checks your name, address, and phone everywhere they appear, and a single mismatch costs you trust. We scrub the listings that disagree and plant the ones you are missing across Ector and Midland counties." },
      { name: 'Reviews that keep coming', desc: "A no-fuss system that turns a finished roof or AC swap into a fresh review without you chasing anyone. Star count lifts your ranking and gets fingers dialing, which counts double when oil-boom money is funding the projects." },
      { name: 'Neighborhood pages', desc: "Honest pages for Greenwood, Gardendale, Midland Country Club, Odessa, and the towns ringing the basin, so you surface for the exact community a homeowner typed, not a blanket \"Midland\" stab." },
      { name: 'On-page and technical SEO', desc: "Title tags, schema, internal links, and quick mobile load handled right. This is the wiring behind the wall that lets every other piece earn its ranking." },
      { name: 'Local link building', desc: "References and links from West Texas outlets Google already trusts: the Reporter-Telegram, Permian Basin trade groups, chamber pages, and supplier partners. In a regional market this is the wedge between page one and page two." },
      { name: 'Spanish-language reach', desc: "The metro runs 57% Hispanic, and a real slice of those buyers search in Spanish. We get you surfacing for those queries so you book demand your English-only competitors cannot even see.", featured: true },
      { name: 'AI search readiness', desc: "A growing chunk of \"near me\" homework now begins inside AI Overviews, ChatGPT, and Perplexity. We shape your content and markup so those engines can read your business and name it back to the searcher.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We map where you genuinely stand today across your Permian Basin neighborhoods and name the rivals outranking you in the Tall City Map Pack, plus the reason each one is ahead." },
      { name: 'Fix the foundation', desc: "Profile and NAP come first because they shift the needle quickest. Most Midland contractors notice early movement inside the first few weeks." },
      { name: 'Build trust signals', desc: "Citations switch on and the review engine starts running. Both stack up week after week, which is exactly why a basin contractor who starts now beats the one who waits for the boom to arrive." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages spanning Midland, Odessa, and the towns around them, backed by the on-page work that makes each one rank." },
      { name: 'Report and expand', desc: "Reporting in plain words tied to ringing phones and filled forms, never empty ranking charts. Then we go claim the next Permian Basin neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right in Midland-Odessa.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across Midland, Odessa, and nearby communities.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the Permian Basin map.', features: ['Everything in Local Growth', 'Local link building', 'Spanish-language search targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Midland TX?', a: "Most Tall City contractors land between $750 and $2,500 a month, set by how many basin neighborhoods and keywords you want to own. The three tiers sit right above this answer. No buried fees, no year-long handcuffs, and we lock the exact scope during your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile work can shift things in a few weeks. The hard-fought Permian Basin terms generally need 90 to 180 days of steady effort, since reviews and citations stack slowly over time. Any pitch that swears page one in 30 days is a sales trick, plain and simple." },
      { q: 'What makes Midland local SEO different from other markets?', a: "Two forces set this market apart. First, the oil cycle throws renovation demand up fast when crude runs hot: whoever already ranks scoops the surge, and whoever starts during the boom catches the leftovers. Second, with 57% of residents Hispanic and a heavy share searching in Spanish, there is steady demand your English-only rivals never lay a finger on." },
      { q: 'Can you help me reach Spanish-speaking customers in Midland?', a: "Yes, and across a metro that runs 57% Hispanic that is a real advantage. We tune your profile and pages so you surface for Spanish-language queries throughout Midland and Odessa, the exact demand most contractors stay invisible to." },
      { q: 'Which areas do you cover?', a: "Midland, Odessa, Midland Country Club, Greenwood, Gardendale, Goldsmith, Notrees, and the wider Permian Basin out to Stanton and Big Spring. We write true neighborhood pages rather than one catch-all Midland page, because that is what wins \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It is nearly the whole of what we do. Roofers, HVAC crews, plumbers, solar installers, electricians, restoration outfits, and general contractors. We know basin heat emergencies, the grit West Texas dust grinds into roofs and condensers, and freeze-recovery work, and your local SEO is built around all of it." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "A rising share of \"near me\" research now opens inside an AI answer rather than the old blue links. We frame your content and schema so those engines can read, trust, and quote your business back to the searcher. It is fast becoming as decisive as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an opening 90 days because that is about how long local SEO needs to post real movement in a competitive basin market. After that you bill month to month, and if the work is not landing you walk, with the accountability resting on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those services rent you shared leads and exposure you never keep, and the moment basin demand jumps in a boom their per-lead prices jump right alongside it. We build rankings, a sharp Google profile, and a review base that route calls straight to you. As that grows you lean on the brokers less, because the work arrives on its own." },
      { q: "What's in the free audit?", a: "A clear read on where you sit today across the Permian Basin, what your Map Pack rivals are doing to stay ahead, the fixes that will move you fastest, and an honest 90-to-180-day Midland Local SEO plan with the math run on your own business. No slide deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'midland', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Midland SEO Company | Rank on Google | OnwardCraft',
    metaDescription:
      'Midland SEO that climbs contractors past the competition on Google before the next oil boom hits. Revenue-tied reporting, no lock-in, built for the Permian Basin.',
    eyebrow: 'SEO Services · Midland-Odessa, TX',
    h1: 'Midland SEO that climbs you past the competition on Google in the Permian Basin',
    h2Exact: 'Midland TX SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Midland customers search and the leads keep coming, through the slow season and into the next boom. We build that ranking and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free Midland SEO audit',
    intro:
      "Midland SEO comes down to one question: when someone searches what you do, are you on page one or page two? Page two might as well be page fifty. As a Midland SEO company we get contractors ranking for the money keywords across the Permian Basin, the HVAC searches in a 110°F July, the emergency plumbing after a freeze, the renovation work during an oil-boom cycle, and we measure it in organic traffic that turns into leads, not vanity numbers.",
    aioQuestion: 'How do Midland TX businesses rank higher on Google?',
    aioAnswer:
      "They climb by repairing the technical base of the site, shaping every page around the precise phrases buyers type, posting truly useful local content anchored to Midland and Odessa neighborhoods, and earning links from West Texas sources Google already respects. In the Permian Basin the quickest movers also ride the calendar, owning the May-through-September HVAC crush and the winter freeze-emergency searches, and they appear in Spanish for the 57% of the metro searching that way.",
    problemHeading: "Three reasons your Midland site isn't bringing in work",
    painPoints: [
      { title: "Page two is burying your basin business", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. In a market where an oil-boom surge can multiply demand almost overnight, being invisible on page two means the wave breaks over your competitors and you barely feel it, no matter how good your work is." },
      { title: "You're leasing every click from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost. During a Permian Basin boom cycle, owned rankings are worth far more than rented clicks." },
      { title: "You're missing the searches that actually pay", body: "Midland demand swings hard: extreme HVAC searches from May through September, emergency plumbing and water damage work after a freeze, and renovation surges tied to oil prices. The contractors who rank for those terms ahead of time catch the spikes. If your SEO ignores seasonal and boom-driven searches, you're leaving your busiest periods on the table." },
    ],
    servicesHeading: 'The SEO work that actually shifts basin rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawl health, load speed, Core Web Vitals, schema, and the behind-the-wall repairs Google insists on before it will rank a Tall City site at all." },
      { name: 'On-page optimization', desc: "Each money page tuned to the precise phrases your Midland and Odessa customers type, covering titles, headings, body copy, and the internal links that tie them together." },
      { name: 'Content that ranks', desc: "Pages and articles that genuinely answer what basin buyers are asking, pull in links, and keep delivering leads while you are out on a jobsite." },
      { name: 'Link building', desc: "Authority drawn from real West Texas and Permian Basin sources. In a regional market, a mention from a trusted local outlet or trade body is often the shove that lands you on page one." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack work so you take the \"near me\" searches across Midland, Odessa, and the towns around them, running alongside your organic climb." },
      { name: 'Revenue-tied reporting', desc: "We count calls, forms, and booked leads, not just ranking lines and traffic graphs, so you always know what your SEO is genuinely returning." },
      { name: 'Seasonal & boom-cycle SEO', desc: "We get you ranking for the summer HVAC searches, the freeze-emergency terms, and the oil-boom renovation phrases that drive every Midland demand spike, so you are in place before each wave instead of scrambling behind it.", featured: true },
      { name: 'AI search & GEO', desc: "We frame your content so AI Overviews, ChatGPT, and Perplexity pull you up and cite you, since a steadily larger slice of basin search now starts inside those answers.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We measure your rankings, traffic, and rivals, then draw a roadmap aimed at the keywords most likely to put real Permian Basin leads on your calendar." },
      { name: 'Fix the technical base', desc: "Speed, crawl health, schema, and mobile sorted out, since that is the floor everything else has to stand on to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus fresh local content, the seasonal, freeze-emergency, and oil-boom terms that decide who wins out here." },
      { name: 'Build authority', desc: "Links and citations from West Texas and trade sources Google trusts, the push that drives competitive basin keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to actual leads, then we pour more into what is landing and reach for the next set of keywords." },
    ],
    pricing: {
      heading: 'Transparent Midland SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused Midland site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and Permian Basin communities.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Midland-Odessa search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal & boom-cycle SEO', 'Multi-location coverage', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Midland TX?', a: "Most Midland SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Midland?', a: "Look for early movement in 2 to 3 months and results worth talking about in 4 to 6, quicker on tight neighborhood terms and slower on the most contested basin keywords. SEO compounds, so the longer you run it the more it pays, and the wider your lead grows heading into the next oil-up cycle." },
      { q: 'Is SEO better than Google Ads for a Midland contractor?', a: "Each has its own job. Ads buy traffic the instant you pay and lose it the instant you stop. SEO is an asset you keep that produces leads at a falling cost per lead as it matures. Most Permian Basin contractors do best running SEO as the long-haul engine, because owned rankings outvalue rented clicks by a mile the moment oil-boom demand jumps." },
      { q: 'Should my Midland SEO target seasonal demand?', a: "No question. HVAC demand pegs out from May through September when highs sit at 105 to 110°F. A hard freeze can flood plumbing and restoration lines overnight, as the February 2021 Texas freeze proved across nearly every Midland home. And oil-up cycles set off renovation surges that arrive in a hurry. Rankings take months to build, so you have to be standing in place ahead of each season, not chasing it after." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page work, content, link building, local and Map Pack SEO, and reporting tied to revenue. The upper tiers fold in seasonal, boom-cycle, and AI-search work. We pin the exact scope down in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an opening 90 days because that is the runway SEO needs to post real movement, and after that you are month to month. If the work is not landing, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a piece we keep building on. We shape your content and schema so AI engines can read, trust, and quote your business back, not just the old list of links." },
      { q: 'Which areas around Midland do you cover?', a: "Midland, Odessa, Midland Country Club, Greenwood, Gardendale, Goldsmith, Notrees, and the wider Permian Basin corridor stretching toward Andrews and Big Spring. We write real local pages instead of one stock Midland page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that funnel leads straight to your line. When an oil-boom surge hits, those platforms charge more per lead because demand jumps. Owned rankings cost you the same whatever crude is doing, and the leads answer to nobody but you." },
      { q: "What's in the free SEO audit?", a: "Where you stand today, what your rivals are doing to keep the lead, the fixes with the biggest payoff, and an honest Midland SEO timeline with the math run on your own business. No slide deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'midland', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Midland Web Design Company | Sites That Convert | OnwardCraft',
    metaDescription:
      'Midland Web Design that loads fast and books more jobs: mobile-first sites built for Permian Basin contractors. Transparent pricing, and you own the site.',
    eyebrow: 'Web Design · Midland-Odessa, TX',
    h1: 'Midland Web Design that loads fast and books more Permian Basin jobs',
    h2Exact: 'Midland TX Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Permian Basin contractors fast, mobile-first sites engineered to turn visitors into booked work, and to be ready when the next oil boom floods the market with renovation budgets.",
    primaryCta: 'Get my free quote',
    intro:
      "Midland Web Design done right fixes what quietly bleeds leads on most contractor sites: slow on a phone, buried call button, no clear offer. As a Midland web design company we build mobile-first sites that load fast, look like the professional you are, and turn visitors from Greenwood to Gardendale into booked jobs, built to capture the wave when Permian Basin oil wealth drives a renovation surge, and visible enough to handle the summer HVAC rush when temperatures hit 110°F.",
    aioQuestion: 'What makes a good contractor website in Midland TX?',
    aioAnswer:
      "A good Midland contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific neighborhoods you serve across the Permian Basin. Because oil-boom cycles can spike renovation demand quickly and summer heat makes HVAC an emergency category, a site that converts fast and ranks well before those spikes is worth far more than one built during the surge.",
    problemHeading: "Why your current site isn't booking basin work",
    painPoints: [
      { title: "It reads like a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next guy. In Midland-Odessa, where an oil boom can bring high-budget renovation projects almost overnight, a site that doesn't convert wastes the surge you've been waiting for. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It crawls on a phone", body: "Most of your Midland visitors are on mobile, and they bounce if your site takes more than a few seconds to load. When it's 108°F outside and someone needs their AC fixed today, a slow site means they call your competitor. We build fast, so you keep the visitor and the ranking." },
      { title: "It says nothing to the basin community", body: "A homeowner in Gardendale wants to see you serve Gardendale, not a generic \"Midland\" page that could be anybody. And with 57% of the metro being Hispanic, a site that makes no Spanish-language connection misses more than half the market. We build sites that name the neighborhoods you work and connect with the community you serve." },
    ],
    servicesHeading: "What's in an OnwardCraft Midland website",
    services: [
      { name: 'Custom design', desc: "No stamped-out template. A site shaped around your trade, the Permian Basin towns you cover, and the exact jobs you are trying to book." },
      { name: 'Mobile-first build', desc: "Drawn for the phone before anything else, because that is where nearly all your Midland traffic sits, especially when a homeowner is sweating out a breakdown in 110-degree heat." },
      { name: 'Conversion-focused UX', desc: "Plain offers, call buttons you cannot miss, and lead forms parked where thumbs actually reach them. Every page points to one clear next move." },
      { name: 'Copy that sells', desc: "Words written for basin homeowners, the oil-up renovation crowd and the family whose AC just quit in August alike, not filler that reads like every other site in town." },
      { name: 'Local SEO foundation', desc: "Built to rank from the studs up: clean structure, schema, fast load, and neighborhood-ready pages spanning the Midland and Odessa metro." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load quickly and clear Google's performance bar, which guards your conversions and your rankings at the same time." },
      { name: 'Neighborhood-targeted pages', desc: "Pages framed around Greenwood, Gardendale, Midland Country Club, Odessa, and the towns nearby, so you stand out rather than dissolve into one blanket Permian Basin page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read your business and hand your name to the searcher as more of that traffic moves to AI answers.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, the basin towns you cover, the jobs you want most (oil-up renovations, August heat calls, freeze recovery), and the rivals in your way, then plan the site around booking more of that work." },
      { name: 'Design', desc: "We draw a custom, mobile-first layout built to convert, and you see and shape it before we write a single line of code." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that closes, with the call to action parked front and center on every page." },
      { name: 'Launch', desc: "We push it live cleanly, with the SEO foundation, tracking, and load speed locked in from the first day." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it around whatever is actually turning Midland visitors into booked calls." },
    ],
    pricing: {
      heading: 'Transparent Midland web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade Midland contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established Permian Basin contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Neighborhood-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location Permian Basin businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Midland TX?', a: "Most basin contractor sites with us land between $2,000 and $8,000 as a one-time build, set by page count and any integrations. The tiers sit above this answer: fixed price, no surprises, and the finished site is yours." },
      { q: 'How long does it take to build?', a: "A tight site runs roughly 2 to 4 weeks, while a larger custom build runs 4 to 8. You get a firm timeline at the start and a check-in at each stage along the way." },
      { q: 'Will my site be ready when the next oil boom hits Midland?', a: "That's exactly why you build now, not later. SEO and credibility take months to establish. A site built before the boom cycle peaks is worth far more than one rushed together after demand is already spiking. We build for the long game so you capture the surge instead of chasing it." },
      { q: 'Will my new site actually rank on Google?', a: "Every build sits on a local-SEO foundation: fast load, clean structure, schema, and neighborhood-ready pages. The build leaves you ready to rank, and pairing it with our SEO service is how you climb the contested Permian Basin terms." },
      { q: 'Do I own the website?', a: "All of it stays in your hands: the site, the domain, and every page of content. No hostage situations, and no platform you cannot pack up and leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your Midland traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb, which is critical when a customer in 108°F heat needs to reach you immediately." },
      { q: 'What platform do you build on?', a: "We match the platform to your needs and to what you can comfortably manage yourself, most often WordPress or Webflow. We name the right fit during your free basin consult and lay out the tradeoffs in plain terms." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build ships with launch support, and from there you can pick up fair-priced monthly upkeep covering updates, speed, and security." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time, fixed-price project. Any upkeep or SEO afterward runs month to month, and you can step away whenever you like." },
      { q: 'What do I get in the free quote?', a: "A straight read on what your current site is costing you in missed leads, what high-converting Midland Web Design ought to include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'midland', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Midland Website Redesign | SEO-Safe Rebuilds | OnwardCraft',
    metaDescription:
      'Midland Website Redesign done with a careful, SEO-safe migration. Faster, mobile-first rebuilds that convert more visitors into booked Permian Basin jobs.',
    eyebrow: 'Website Redesign · Midland-Odessa, TX',
    h1: 'Midland Website Redesign done with a careful, SEO-safe Permian Basin migration',
    h2Exact: 'Midland TX Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week: slow, hard to use on a phone, easy to ignore. We redesign Midland contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned going into the next oil boom.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Midland Website Redesign fails one of two ways when done wrong: the new site is prettier but books the same handful of jobs, or it goes live and the rankings drop off a cliff that night. We refuse both outcomes. We rebuild Permian Basin contractor sites for speed and conversions, give them a look that holds up in a market run by oil money and triple-digit heat, and run an SEO-safe migration that moves every page over with the redirects and care that keep the basin traffic you already earned.",
    aioQuestion: 'How do I redesign my Midland website without losing SEO and traffic?',
    aioAnswer:
      "You hold onto SEO through a redesign by keeping your URL structure (or mapping a 301 redirect for every page that changes), carrying over your existing content and metadata, moving your schema across, and proving it all on staging before launch. Handled that way, a redesign keeps your rankings and lifts them, because the new build is faster, mobile-first, and cleaner than the old one, which counts for plenty right before Midland's summer heat season and the next oil-boom surge.",
    problemHeading: "Signs your Midland site is overdue for a redesign",
    painPoints: [
      { title: "A dated look quietly drains your credibility", body: "Oil executives and engineers making large renovation decisions in Midland judge you by your site in seconds. An old, cluttered design quietly sends them to a competitor who looks more established, even when your work is better. During a boom cycle, when the budgets are largest, first impressions cost or win the biggest jobs." },
      { title: "It's clunky and slow on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your Midland visitors before they ever see your offer. When someone needs AC service in 108°F heat, they call the first number they reach. A redesign built mobile-first and optimized for speed wins them back." },
      { title: "It vanishes into the basin crowd", body: "A generic old site gives a Permian Basin visitor no reason to pick you over the next result, and it never reaches the 57% of the metro that's Hispanic. We rebuild for conversions, for the neighborhoods you actually serve, and for the community that makes up most of this market." },
    ],
    servicesHeading: "What an OnwardCraft basin redesign includes",
    services: [
      { name: 'Redesign audit', desc: "We put a finger on exactly what is bleeding leads and rankings today, so the rebuild solves real problems instead of just swapping the color scheme." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled the right way so you keep the rankings and traffic you already built, right as peak season or an oil-up cycle rolls in." },
      { name: 'Conversion redesign', desc: "Plain offers, smarter call-to-action placement, and lead forms people genuinely use. We design for booked basin jobs, not just a prettier page." },
      { name: 'Speed overhaul', desc: "We rebuild for quick load and a clean Core Web Vitals pass, which helps conversions and rankings both, and matters most when an August heat-emergency call has to reach you in seconds." },
      { name: 'Mobile-first rebuild', desc: "Rebuilt around the phone, where nearly all your Midland traffic lives, and the device a homeowner grabs for an urgent HVAC or plumbing call in the heat." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the craft you put in and the size of the oil-up renovation budgets you are trying to win." },
      { name: 'Neighborhood-targeted rebuild', desc: "Rebuilt around Greenwood, Gardendale, Midland Country Club, Odessa, and the basin towns nearby, so the new site stands apart instead of echoing every competitor's page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read you and pass your name along as more basin search moves toward AI answers.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We dig into what is shedding leads and rankings, then chart a redesign that fixes it without breaking what already works and sets you up for the next Permian Basin demand cycle." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-minded design that you review and shape before we start the rebuild." },
      { name: 'Rebuild and migrate', desc: "We rebuild quickly and line up every redirect and SEO detail for a clean handoff to the new site." },
      { name: 'Launch with SEO care', desc: "We go live with redirects in place and watch closely so rankings hold and climb rather than slip, ahead of peak season or an oil-up surge." },
      { name: 'Optimize', desc: "Post-launch tuning driven by what is actually converting basin visitors, plus steady speed work and updates." },
    ],
    pricing: {
      heading: 'Transparent Midland redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small Midland contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established Permian Basin contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Neighborhood-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location Permian Basin sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Midland TX?', a: "Most basin redesigns with us land between $2,500 and $9,000 as a one-time project, set by size and integrations. Fixed price, no surprises, and the result belongs to you." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them, and walking into summer heat season or an oil-up cycle with stronger rankings is the whole goal." },
      { q: 'How long does a redesign take?', a: "A tight redesign runs about 3 to 5 weeks, while a larger rebuild runs 5 to 9. You get a firm timeline at the start and an update at every stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is hard to update, isn't bringing in leads, or isn't positioned to capture the next Permian Basin oil-boom surge, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We move your existing content over and sharpen it, protect the pages already ranking, and run the technical migration so nothing that matters slips through the cracks." },
      { q: 'Will the redesign help me compete for oil-boom renovation work?', a: "Yes, and timing matters enormously. A redesigned site that's been ranking for six months before a boom cycle hits is worth far more than one rushed together after demand spikes. Oil executives and engineers with large renovation budgets judge contractors by their web presence, and we make sure yours earns that trust." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings. In Midland's summer heat, a site that loads in two seconds vs. six seconds is the difference between getting the emergency HVAC call and losing it." },
      { q: 'Do I own the redesigned site?', a: "Yours outright once it launches: the site, the domain, and the content. No platform that holds you captive." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any upkeep or SEO afterward runs month to month." },
      { q: "What's in the free redesign audit?", a: "A straight read on what your current site is costing you in leads and rankings, what the rebuild needs to fix, and a fixed-price Midland Website Redesign quote with a timeline plus an SEO-safe migration plan. No pressure, just a plan." },
    ],
  },
];

export const midlandCity = {
  citySlug: 'midland', city: 'Midland', state: 'Texas', stateAbbr: 'TX', metro: 'Midland-Odessa (Permian Basin)',

  titleTag: 'Midland Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Midland marketing for contractors that fills your calendar: web design, SEO, and local SEO for the Permian Basin. Rank before the next oil boom and own your leads.',

  eyebrow: 'Midland-Odessa · Web Design, SEO & Lead Generation',
  h1: 'Midland marketing for contractors that fills your Permian Basin calendar',
  h2Exact: 'Midland TX Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for the Permian Basin, where oil booms spike renovation demand, summers hit 110°F, and being visible before the wave is everything.",
  heroProof: ['Built for the trades', 'Permian Basin focused', 'No lock-in contracts'],
  primaryCta: 'Get my free Midland audit',

  intro:
    "Midland marketing for contractors has to fit one of the most economically volatile and extreme-climate markets in the country. Oil booms can flood the metro with renovation budgets almost overnight, but only the contractors already ranking capture the surge. Summers hit 105 to 110°F, making HVAC failure a genuine emergency from May through September. The 2021 Texas freeze caused catastrophic pipe damage across nearly every home in the metro. And 57% of the population is Hispanic, which means Spanish-language search is a real market most of your competitors ignore. Winning here takes three things working together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack for the neighborhoods you serve. Here's how we help Midland contractors do exactly that.",
  aioQuestion: 'How do Midland TX contractors get more leads online?',
  aioAnswer:
    "Midland contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack across Permian Basin neighborhoods. The contractors who win this market rank before oil-boom cycles peak, show up for Spanish-language searches from the 57% Hispanic population, and are visible for summer HVAC emergencies before temperatures hit 110°F.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Midland-Odessa searches \"near me.\" The single highest-return move for most Permian Basin contractors, done neighborhood by neighborhood, before the next boom hits.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Climb for the money keywords your customers really type, the August HVAC emergencies, the freeze recovery, the oil-up renovation work, and build an asset you keep instead of renting clicks from ads month after month.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first sites engineered to turn basin visitors into booked jobs, ready for the rush when Permian Basin oil money funds a renovation wave or a 110-degree afternoon turns into an HVAC emergency.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild a dated site for speed and conversions, then move it over with enough care that you hold onto every ranking you earned heading into peak season or the next oil-up cycle.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Midland TX?', a: "Four pillars for basin contractors: web design, website redesign, SEO, and local SEO. Most clients pair a high-converting website with SEO and local SEO so they rank, convert, and own their leads, all set in place before the next Permian Basin boom cycle peaks." },
    { q: 'Do you work only with contractors?', a: "Nearly always. We stick to home-service trades: roofers, HVAC crews, plumbers, solar installers, electricians, restoration outfits, and general contractors. That focus is why we already know basin heat emergencies, the dust West Texas grinds into roofs and condensers, freeze-recovery work, and oil-up renovation demand." },
    { q: 'Why does the Midland market need a different approach?', a: "Three forces set Midland and Odessa apart from most markets: oil-up cycles that can throw renovation demand sky-high almost overnight (so whoever already ranks scoops most of it), brutal West Texas summers that turn HVAC into an emergency category from May through September, and a metro that runs 57% Hispanic, which makes Spanish-language search a real market most contractors skip entirely." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO bill month to month from $750 to $3,000, with no long contract. We pin the exact scope down in your free audit." },
    { q: 'Which Midland-Odessa areas do you serve?', a: "Midland, Odessa, Midland Country Club, Greenwood, Gardendale, Goldsmith, Notrees, and the basin communities around them. We write real local pages rather than one stock Midland page." },
    { q: 'Where should I start?', a: "Start with a free Midland audit. We look over your website, your rankings, and your Map Pack presence, then name the one or two moves in your Midland marketing for contractors that will pull in the most work fastest and ready you for the next demand cycle. No slide deck, just a plan." },
  ],
};
