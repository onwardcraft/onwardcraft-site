// INDIANAPOLIS: per-metro x per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Indianapolis's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// INDIANAPOLIS: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why winning Indianapolis search never takes a season off',
  body:
    "More than 2.1 million people live across the Indianapolis metro, scattered over a flat, wide grid that runs from the value-minded core out to some of the wealthiest suburbs in the Midwest. Two engines drive contractor demand here harder than anything else. The first is hail. Indianapolis sits right in severe weather country, and a single major storm cell can light up insurance claims and emergency roof calls across dozens of zip codes in one afternoon. The roofer who already ranks when that cell rolls through catches the wave; the rest send follow-up quotes nobody asked for. The second engine is the winter. Freeze-thaw swings crack foundations, stress aging pipes, and grind on furnaces, so when the thermometer drops into the single digits in January, heating calls jump overnight. On top of all that, the buyer mix runs wide: Carmel and Fishers rank among the highest-income communities in the country and fuel premium remodel and upgrade spending, while the neighborhoods nearer downtown want dependable, value-priced repair work. Contractors who hold the map across both ends of that range build the businesses that last.",
  pullQuote: 'In hail country, the contractor already ranking when the cell hits books the job. The rest get the voicemail.',
  donut: {
    title: 'How Indianapolis searches',
    value: 9,
    centerLabel: 'Spanish-speaking at home',
    legend: [
      { label: 'Spanish or other language at home', pct: 9, kind: 'teal' },
      { label: 'English only', pct: 91, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Hail and storm roofing (Mar-Jun, Aug-Oct), heating emergencies (Nov-Feb), AC (Jul-Aug)',
  seasonalDemand: [
    { m: 'J', v: 85, peak: true }, { m: 'F', v: 80, peak: true }, { m: 'M', v: 88, peak: true },
    { m: 'A', v: 92, peak: true }, { m: 'M', v: 90, peak: true }, { m: 'J', v: 60 },
    { m: 'J', v: 82, peak: true }, { m: 'A', v: 88, peak: true }, { m: 'S', v: 86, peak: true },
    { m: 'O', v: 84, peak: true }, { m: 'N', v: 78, peak: true }, { m: 'D', v: 82, peak: true },
  ],
  stats: [
    { value: '2.1M', label: 'people across the Indianapolis metro' },
    { value: 'Hail alley', label: 'Indianapolis is one of the most storm-battered markets in the country; roofing demand surges after every major cell', accent: true },
    { value: 'Nov-Feb', label: 'heating emergency season, when freeze-thaw swings and cold snaps trigger overnight call spikes' },
    { value: 'Top 3', label: 'Map Pack spots that pull most of the clicks the moment a homeowner searches' },
  ],
  neighborhoods: [
    'Broad Ripple', 'Fountain Square', 'Mass Ave', 'Butler-Tarkington', 'Meridian-Kessler',
    'Carmel', 'Fishers', 'Zionsville', 'Noblesville', 'Greenwood',
    'Avon', 'Plainfield', 'Westfield', 'Brownsburg',
  ],
};

const AREAS = [
  'Broad Ripple', 'Fountain Square', 'Mass Ave', 'Butler-Tarkington', 'Meridian-Kessler',
  'Carmel', 'Fishers', 'Zionsville', 'Noblesville', 'Greenwood',
  'Avon', 'Plainfield', 'Westfield', 'Brownsburg',
];

const FOUNDER =
  "Here is the honest reason I started OnwardCraft. I kept watching solid Indianapolis contractors wire a few grand a month to Angi and HomeAdvisor for the privilege of fighting three competitors over the same lead. That is not a business; that is a rental agreement. So this is the whole job for us: get you ranking and converting for the work you want, in the suburbs you actually serve, with leads that belong to you and nobody else. No year-long handcuffs. The day it stops working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We know what a hail cell does to a roofing schedule, what a January cold snap does to a furnace board, and why a Carmel remodel reads nothing like a Greenwood repair call. Everything we build is shaped around how your customers actually search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The point is a pipeline with your name on it. Not one more monthly invoice to a broker for a homeowner that two of your competitors also just bought.",
  },
  {
    title: 'We actually speak Indianapolis',
    body: "Suburb-by-suburb targeting from Fishers to Brownsburg, plus the hail-season and freeze-thaw content that turns a demand spike into booked work. Not a national shop dropping your city name into a template it already sold ten times.",
  },
  {
    title: 'No contracts, no mystery',
    body: "Prices you can read, reporting tied to leads, month-to-month once the first 90 days are up. If we are not earning the invoice, you walk. That keeps the pressure exactly where it should be: on us.",
  },
];

const PROOF = {
  heading: "We are new, so here is the honest math instead of a logo wall",
  body:
    "Plenty of agencies will wave a wall of client logos at you. We are a young, founder-led shop, so we will not fake a track record we have not earned yet. What we can hand you is the reason this works, pulled straight from Google's and the industry's own research on how people search locally.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Picture this, clearly labelled as an illustration and not a result we are claiming: say an Indianapolis contractor pulls roughly 1,800 local \"near me\" impressions a month across a few suburbs. Climbing from buried-on-page-two to the top three is the gap between a slow trickle of calls and a calendar that fills itself. In a hail market, being there before the cell hits is worth the whole year. During your free audit we run the real numbers for your business: your rankings, your search volume, and a straight 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Indianapolis', state: 'Indiana', stateAbbr: 'IN', metro: 'Indianapolis',
  heroProof: ['Built for the trades', 'Suburb-by-suburb targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const indianapolisLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'indianapolis', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Indianapolis Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Indianapolis Local SEO that lands you in the Google Map Pack before hail season and the next cold snap arrive, so "near me" searches ring your phone.',
    eyebrow: 'Local SEO · Indianapolis',
    h1: 'Indianapolis Local SEO that puts your business in the Map Pack from Carmel to Greenwood',
    h2Exact: 'Indianapolis Local SEO Company',
    heroSubhead:
      "Google pins exactly three businesses to the map on a \"near me\" search, and everyone underneath them is basically invisible. In hail country, we get you into that top three before the cell rolls through, so the call lands on you instead of whoever rushed to rank once the damage was already done.",
    primaryCta: 'Get my free Indianapolis audit',
    intro:
      "Indianapolis Local SEO really comes down to one question: when a homeowner in Carmel or Greenwood searches your service plus \"near me,\" are you one of the three names Google pins to the map? Most people tap one of those three and never scroll a pixel further. This market runs on hail and hard winters, and the local SEO services that own the Google Map Pack before demand spikes catch the surge. Everyone else fights over what is left. Here is how we get you into those three spots and keep you there.",
    aioQuestion: 'How do Indianapolis businesses rank higher in local search?',
    aioAnswer:
      "You rank by nailing four things: a Google Business Profile tuned to the exact services and suburbs you want to win, a name, address, and phone number that match everywhere on the web, a steady drip of real reviews, and local content tied to actual Indianapolis neighborhoods. In a hail market the extra edge is being fully optimized before storm season and winter arrive, so Google already trusts you when demand jumps and homeowners find you at the top exactly when they need help.",
    problemHeading: "If your phone goes quiet after a storm, it is usually one of these three",
    painPoints: [
      { title: 'Competitors own all three map spots', body: "Search your own service plus \"near me\" right now. See the three businesses Google pins to the map? They take the lion's share of clicks. If you are not one of them when a hail cell or a January cold snap hits, you are picking through leftovers while the ranked contractors book solid for weeks. Earning a top-three spot for your suburbs is the highest-return move an Indianapolis contractor can make, full stop." },
      { title: "You are paying for leads you never own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Indianapolis homeowner to several contractors, then bill each of you to brawl over them. That bill balloons fast when storm-season lead prices spike. Local SEO builds the opposite arrangement: a homeowner finds you, calls you, and no competitor got the same number. Month by month you stop renting and start owning the pipeline." },
      { title: "You are invisible where the big jobs live", body: "Carmel and Fishers sit among the wealthiest suburbs in the Midwest. Homeowners there spend real money on roofing, HVAC, remodels, and upgrades, and almost all of them search online before they dial. If you are nowhere for \"[service] Carmel\" or \"[service] Fishers,\" you are handing the most valuable jobs in the metro to the contractors who bothered to show up." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The heaviest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows precisely which Indianapolis searches belong to you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to line up everywhere Google checks. We correct the listings that contradict each other and build the ones you are missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns each finished job into another fresh review. It lifts your ranking and gives a hesitant homeowner the nudge to pick up the phone." },
      { name: 'Neighborhood and suburb pages', desc: "Real pages for Carmel, Fishers, Zionsville, Greenwood, Broad Ripple, and the rest, so you rank for the exact area someone is searching instead of a generic \"Indianapolis.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets every other piece actually rank." },
      { name: 'Local link building', desc: "Mentions and links from Indianapolis sources Google already trusts: local press, trade associations, partners. In this market that is often the line between page one and page two." },
      { name: 'Storm-season and winter content', desc: "We get you ranking for hail repair, storm damage, and heating emergency searches before they spike, so you capture demand the instant a cell crosses the metro.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts inside AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you by name.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We pin down where you actually rank today across your suburbs and figure out which competitors are beating you in the Map Pack and exactly why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP come first because they move the fastest. Most contractors see early lift here inside a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is precisely why local SEO rewards starting before hail season rather than chasing it." },
      { name: 'Add local content', desc: "Suburb, neighborhood, and service-area pages across the Indianapolis metro, backed by the storm-season and heating content that makes them rank." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and booked leads, not vanity rankings. Then we go take the next suburb." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Indianapolis suburbs.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Suburb and neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map from Carmel to Greenwood.', features: ['Everything in Local Growth', 'Local link building', 'Storm-season and winter SEO', 'Multi-suburb and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Indianapolis?', a: "Most Indianapolis engagements land between $750 and $2,500 a month, set by how many suburbs and keywords you are chasing. The tiers are right above this. No hidden fees, no long contract, and we lock the exact scope in your free audit before you commit a dollar." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move inside a few weeks. The competitive Indianapolis keywords usually need 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days is selling you a fairy tale." },
      { q: 'What makes Indianapolis local SEO different?', a: "Two things set this market apart. It sits in hail alley, so roofing and exterior contractors see violent demand spikes after a cell crosses the metro, and only the ones already ranking actually catch that surge. And the income range is enormous: premium suburbs like Carmel and Fishers next to value-focused neighborhoods closer to downtown, which means you have to rank across very different search intents and job sizes." },
      { q: 'How do I capture storm-season demand?', a: "You rank before the storm, not after it. We tune your profile and content for hail repair, storm damage, and emergency roofing searches so the moment a cell crosses the Indianapolis metro, you are already sitting in the Map Pack. Homeowners in Carmel and Fishers search fast and call the first ranked contractor they trust, so the timing is everything." },
      { q: 'Which areas do you cover?', a: "Everywhere across the Indianapolis metro: Broad Ripple, Fountain Square, Mass Ave, Butler-Tarkington, Meridian-Kessler, Carmel, Fishers, Zionsville, Noblesville, Greenwood, Avon, Plainfield, Westfield, Brownsburg, and beyond. We build genuine suburb pages instead of one catch-all Indianapolis page, because that is what ranks for \"[service] [suburb]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It is basically all we do: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We get hail-season surges, January heating emergencies, and the gap between a high-ticket Carmel remodel and a quick repair call in Greenwood." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business by name. It is fast becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that is roughly how long local SEO takes to show real movement. After that it runs month-to-month. If we are not delivering, you walk with no penalty." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads, and when every Indianapolis homeowner needs a roofer at once after a hail cell, prices spike and the same lead goes to three contractors. We build rankings, a Google profile, and a review base that route leads straight to you. Over time you lean on the brokers less because the work arrives directly." },
      { q: "What is in the free audit?", a: "A clear read on where you rank today across your suburbs, what your Map Pack competitors are doing to beat you, the fixes that will move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. It is a straight, no-pitch diagnosis of exactly what Indianapolis Local SEO can do for your business." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'indianapolis', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Indianapolis SEO Company | OnwardCraft',
    metaDescription:
      'Indianapolis SEO that ranks contractors at the top of Google before hail season and hard winters hit. Lead-tied reporting, no lock-in, built for a storm market.',
    eyebrow: 'SEO Services · Indianapolis',
    h1: 'Indianapolis SEO that gets you to the top of Google before hail season and keeps you there',
    h2Exact: 'Indianapolis SEO Company',
    heroSubhead:
      "Ads quit the second your card stops. SEO does the reverse: rank once for what your Indianapolis customers search and the leads keep arriving, including the moment a hail cell hits and every homeowner in the metro is searching at the same time.",
    primaryCta: 'Get my free Indianapolis SEO audit',
    intro:
      "Indianapolis SEO comes down to one question: when a homeowner in Fishers or Greenwood searches what you do, are you on page one or page two of Google? Page two might as well be page fifty. As your Indianapolis SEO company we get contractors ranking for the money keywords in a market shaped by violent hail seasons, hard winters, and a wide buyer range, and we measure search engine optimization in booked leads and organic traffic rather than vanity numbers. Here is how that comes together.",
    aioQuestion: 'How do Indianapolis businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content tied to specific suburbs and neighborhoods, and earning links from trusted Indianapolis sources. In a hail market, one of the fastest ways to pull ahead is ranking for hail damage, storm repair, and heating emergency searches before the season spikes, so you catch the surge when it lands instead of chasing it afterward.",
    problemHeading: "Three reasons your Indianapolis site is not bringing in work",
    painPoints: [
      { title: "You are stranded on page two", body: "Almost nobody clicks past page one of Google, and they rarely scroll far down it. In a market where demand jumps hard after a hail cell or a cold snap, if you are not in the top results when homeowners search, someone else takes the call. It does not matter how clean your work is if your name never surfaces." },
      { title: "You are renting traffic from Google Ads", body: "Ads can work, but the instant your card stops, the leads stop with it. At peak storm season, Indianapolis click costs climb as several roofing contractors bid on the same emergency terms. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost over time." },
      { title: "You are missing the demand that actually matters", body: "Indianapolis demand is fiercely seasonal: hail and storm roofing from March through June and again from August through October, heating emergencies all winter, and AC calls in July. The contractors who rank for those searches ahead of the season catch the spike. If your SEO ignores storm and emergency terms, you are leaving your busiest weeks of the year on the table." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned for the exact terms your Indianapolis customers search: titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and pull in leads while you are out on the job." },
      { name: 'Link building', desc: "Authority from real Indianapolis and industry sources. In a competitive market with this much seasonality, links are often what separate page one from page two." },
      { name: 'Local SEO and Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across your suburbs right alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and booked leads, not just rankings and traffic, so you always know what your SEO is genuinely worth." },
      { name: 'Storm-season and heating emergency SEO', desc: "We get you ranking for hail damage, storm repair, and January heating searches before the season hits, so you are already visible when demand spikes across the Indianapolis metro.", featured: true },
      { name: 'AI search and GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Indianapolis leads, storm-season and emergency terms included." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile: the foundation everything else needs before it can rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus fresh local content, including the storm-season, heating, and suburban pages that matter in this metro." },
      { name: 'Build authority', desc: "Links and citations from trusted Indianapolis and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what is working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Indianapolis SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and suburbs.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Indianapolis search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Storm-season & emergency SEO', 'Multi-suburb / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Indianapolis?', a: "Most Indianapolis SEO engagements run $900 to $3,000 a month, set by how competitive your keywords are and how much content and link work you need. The tiers are above, with no hidden fees and no long contract to sign." },
      { q: 'How long does SEO take to work in Indianapolis?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter suburb-level terms and slower on the most competitive metro-wide keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that vanishes when you stop paying, and during Indianapolis storm season click costs spike as contractors fight over emergency terms. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most contractors do best running SEO as the long-term engine and ads to fill short-term gaps." },
      { q: 'Should my Indianapolis SEO target storm-season demand?', a: "Yes, and it is the single biggest missed opportunity for Indianapolis contractors. When a major hail cell crosses the metro, thousands of homeowners search for roofers and restoration crews at the same time. Ranking takes months to build, so you have to be in place before the season, not scrambling after it. We optimize those storm and emergency terms ahead of time so your busiest weeks land on you." },
      { q: "What is included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. Higher tiers add storm-season and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it runs month-to-month. If we are not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which Indianapolis suburbs do you cover?', a: "Everywhere across the metro: Broad Ripple, Fountain Square, Mass Ave, Butler-Tarkington, Meridian-Kessler, Carmel, Fishers, Zionsville, Noblesville, Greenwood, Avon, Plainfield, Westfield, Brownsburg, and beyond. We build genuine suburb pages rather than one generic Indianapolis page, because that is what ranks for \"[service] [suburb]\" searches." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that route leads directly to you. The more you own your search visibility, the less you lean on brokers for shared leads, especially during storm season when everyone is competing over the same homeowners." },
      { q: "What is in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. It is a straight diagnosis of what Indianapolis SEO can do to get you on page one, not a pitch deck." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'indianapolis', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Indianapolis Web Design Company | OnwardCraft',
    metaDescription:
      'Indianapolis web design that turns visitors into booked jobs: fast, mobile-first sites built for contractors in a storm-season market. Get a free quote.',
    eyebrow: 'Web Design · Indianapolis',
    h1: 'Indianapolis web design that turns post-storm visitors into booked jobs',
    h2Exact: 'Indianapolis Web Design Company',
    heroSubhead:
      "A pretty website that never rings the phone is just a brochure. We build Indianapolis contractors fast, mobile-first sites engineered to turn visitors into booked work, and to convert hard the moment hail season hits and homeowners are searching with their thumbs already on the call button.",
    primaryCta: 'Get my free quote',
    intro:
      "Indianapolis web design done right closes the leaks that bleed contractor websites dry: slow on a phone, the call button buried, no clear offer anywhere. As your Indianapolis web design company we build sites that load fast, look like the pro you already are, and turn visitors from Carmel to Greenwood into booked jobs, mobile-first and ready to convert when a hail cell brings a surge and when a January cold snap fires off heating calls overnight. Here is what goes into one.",
    aioQuestion: 'What makes a good contractor website in Indianapolis?',
    aioAnswer:
      "A good Indianapolis contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific suburbs and neighborhoods you serve. Because Indianapolis homeowners search urgently during storms and heating emergencies, the site has to make calling effortless, and because the market runs from premium suburbs like Carmel to value-focused neighborhoods closer to downtown, the messaging has to land with both.",
    problemHeading: "Why your current site is not bringing in work",
    painPoints: [
      { title: "It is a brochure, not a lead engine", body: "Plenty of contractor sites just list services and sit there: no clear offer, no obvious next step, no reason to choose you over the next guy. In a storm-surge moment, the homeowner who hits a slow or confusing site simply taps the next result. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It is too slow on a phone", body: "Most of your Indianapolis visitors are on mobile, and they bounce fast when a site takes more than a few seconds to load. During storm season, when homeowners are searching from their driveway staring at a dented roof, a slow site is a lost lead. We build fast, so you keep the visitor and the ranking." },
      { title: "It says nothing about your suburbs", body: "A homeowner in Fishers wants to see that you serve Fishers, not a generic \"Indianapolis\" page that could belong to anyone. We build sites that name the suburbs and neighborhoods you actually work, so visitors trust you are local and Google ranks you for the right searches." },
    ],
    servicesHeading: "What is in an OnwardCraft Indianapolis website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your suburbs, and the jobs you actually want to book." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that is where almost all of your Indianapolis traffic lives, especially during urgent storm-season searches." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where people actually use them. Every page carries a next step." },
      { name: 'Copy that sells', desc: "Words written for a stressed homeowner staring at hail damage or a frozen pipe in January, built to book the job before they tap back to the results." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank: clean structure, schema, fast load, and suburb-ready pages baked in." },
      { name: 'Speed and Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects your conversions and your rankings at the same time." },
      { name: 'Suburb-targeted pages', desc: "Pages built around the Indianapolis suburbs you serve: Carmel, Fishers, Zionsville, Greenwood, Avon, Noblesville, so you stand out instead of blending into a generic metro page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts toward AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your suburbs, your best jobs, and your competitors, then map the site around booking more of the work you want, from emergency storm repairs to high-end Carmel remodels." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert, and you see it and shape it before a single line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what is actually converting visitors into calls." },
    ],
    pricing: {
      heading: 'Transparent Indianapolis web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + suburb pages', 'Speed & Core Web Vitals', 'Suburb-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Indianapolis?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, set by page count and integrations. The tiers are above: fixed price, no surprises, and you own the finished site outright." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build runs 4 to 8. We give you a firm timeline up front and keep you posted through every stage." },
      { q: 'Will my site be ready for storm season?', a: "That is built into how we design it: fast load for urgent mobile searches, a clear call button above the fold, and suburb-specific pages so a homeowner in Carmel or Fishers knows instantly that you serve them. We can also push storm-damage and emergency messaging to the front if that is a core part of your business." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and suburb-ready pages. The build gets you ready to rank, and pairing it with our SEO service is how you climb the competitive Indianapolis terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platform you cannot walk away from." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where almost all of your Indianapolis traffic comes from, especially during hail season when homeowners are searching from the driveway." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage yourself, usually WordPress or Webflow. We recommend the right fit in your free consult and explain the tradeoffs in plain English." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project at a fixed price. Any ongoing maintenance or SEO is month-to-month, so you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting contractor site should include, and a fixed-price quote with a timeline. It is a plain plan for the Indianapolis web design that turns visitors into booked jobs, with no pressure attached." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'indianapolis', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Indianapolis Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your Indianapolis website without losing rankings. Faster, mobile-first rebuilds that convert more visitors before hail season and hard winters.',
    eyebrow: 'Website Redesign · Indianapolis',
    h1: 'Indianapolis Website Redesign that converts more before hail season without losing your rankings',
    h2Exact: 'Indianapolis Website Redesign Company',
    heroSubhead:
      "An outdated site quietly costs you jobs every single week: slow, clumsy on a phone, easy to scroll past during a hail-season surge. We redesign Indianapolis contractor sites to convert more and load faster, and we migrate with enough care that you keep every bit of ranking you have already earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "An Indianapolis Website Redesign usually goes one of two bad ways: the site looks sharper but converts exactly the same, or it launches and the rankings vanish overnight. We do neither. Our website redesign services rebuild Indianapolis contractor sites for speed and conversions, build them mobile-first around the hail-season and winter demand that drives this market, and run an SEO-safe migration with the redirects that protect the traffic you already have. Here is how it works.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping a 301 redirect for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign holds your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one. That matters double in Indianapolis, where being visible before hail season or a winter cold snap is the difference between a booked calendar and picking through leftovers.",
    problemHeading: "Signs your Indianapolis site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and quietly costs you trust", body: "For a high-ticket roofing job or a big remodel in Carmel, Indianapolis homeowners size you up by your site in a matter of seconds. An old, cluttered design quietly nudges them toward a competitor who looks more established, even when your craftsmanship is the better bet. In a market where Carmel and Fishers homeowners are spending real money, looking the part is not optional." },
      { title: "It is slow and clumsy on a phone during a surge", body: "Storm season brings a wave of urgent mobile searches. If your site is sluggish or awkward on mobile, you are handing those searches to competitors who load in two seconds and have a call button above the fold. A redesign built mobile-first is how you win those moments instead of losing them." },
      { title: "It blends in instead of converting", body: "Traffic that never turns into calls is wasted money. A generic old site gives a homeowner no reason to pick you over the contractor ranked just below you, especially when they are rattled after a hail storm and just want someone to answer. We rebuild for conversions and for the suburbs you actually serve, so the right buyers choose you." },
    ],
    servicesHeading: "What is in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what is costing you leads and rankings today, so the redesign fixes real problems instead of just swapping colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly, so you keep the rankings and traffic you have already earned. Nothing gets dropped on launch day." },
      { name: 'Conversion redesign', desc: "Clear offers, smarter call-to-action placement, and lead forms people actually use. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals, which is critical for urgent storm-season mobile searches and better for rankings on top of that." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all of your Indianapolis traffic lives, especially during weather-driven surges." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the price of your jobs, from a quick repair to a full Carmel remodel." },
      { name: 'Suburb-targeted rebuild', desc: "Rebuilt around the Indianapolis suburbs you serve: Carmel, Fishers, Noblesville, Greenwood, Avon, so the new site ranks and converts for the right local searches.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We dig into what is losing you leads and rankings, then map a redesign that fixes it without breaking what already works, including your storm-season and seasonal content." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design that you review and shape before we build a thing." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean, no-surprises migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and watch closely so rankings hold and climb instead of dropping." },
      { name: 'Optimize', desc: "Post-launch tuning based on what is converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Indianapolis redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + suburb pages', 'Suburb-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Indianapolis?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, set by size and integrations. Fixed price, no surprises, and you own the result outright." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not when it is done carefully, and that is exactly how we work. We map a 301 redirect for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild runs 5 to 9. You get a firm timeline up front and updates at every stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, goes quiet during storm season or the heating rush, or simply blends into the Indianapolis market, it is costing you work. The free audit tells you plainly whether a redesign earns its keep." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and sharpen your existing content, preserve what is ranking (including any storm-season or service pages already indexed), and handle the technical migration so nothing important slips through the cracks." },
      { q: 'Will the redesign help me compete across Indianapolis suburbs?', a: "Yes, and that is the whole point in a market with this much income range. We rebuild around the specific suburbs you serve, from premium Carmel and Fishers to fast-growing communities like Avon and Brownsburg, and make the offer and call button impossible to miss, so the right homeowners pick you." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings. It matters most during storm season when homeowners are searching urgently on their phones." },
      { q: 'Do I own the redesigned site?', a: "Completely: the site, the domain, and the content. No platform lock-in, no exceptions." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What is in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan. It maps exactly how an Indianapolis Website Redesign lifts your conversions without losing the rankings you already earned." },
    ],
  },
];

export const indianapolisCity = {
  citySlug: 'indianapolis', city: 'Indianapolis', state: 'Indiana', stateAbbr: 'IN', metro: 'Indianapolis',

  titleTag: 'Indianapolis Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Indianapolis marketing for contractors: web design, SEO, and local SEO that get you found before hail season, own your leads, and quit shared Angi leads.',

  eyebrow: 'Indianapolis · Web Design, SEO & Lead Generation',
  h1: 'Indianapolis marketing for contractors that gets you found and booked from Carmel to Greenwood',
  h2Exact: 'Indianapolis Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for a storm-season market. One team to get you ranking before hail season hits, converting from Carmel to Greenwood, and off the rented-lead treadmill for good.",
  heroProof: ['Built for the trades', 'Suburb-by-suburb targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Indianapolis audit',

  intro:
    "Indianapolis marketing for contractors means competing for work in a market shaped by hail alley, hard Midwest winters, and a buyer range that runs from premium homeowners in Carmel and Fishers to value-focused neighborhoods closer to downtown. Winning here takes three things pulling together: a site that converts when homeowners search urgently after a storm, SEO that ranks you before the season spikes, and local SEO that plants you in the Map Pack for the suburbs you serve. As a digital marketing agency built around the trades, here is how we help Indianapolis contractors do exactly that.",
  aioQuestion: 'How do Indianapolis contractors get more leads online?',
  aioAnswer:
    "Indianapolis contractors get more leads by pairing a fast, mobile-first website with SEO that ranks them for high-intent searches, especially storm-damage, hail repair, and heating emergency terms, plus local SEO that wins the Google Map Pack suburb by suburb. The contractors who rank before hail season and winter arrive catch the surge; everyone else chases it after the fact.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Land in the top three businesses Google pins to the map when Indianapolis searches \"near me,\" before the next hail cell rolls through and every homeowner is dialing at once.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the storm-season, winter emergency, and suburban money keywords your customers actually search. Build an asset you own instead of renting traffic from ads that die the moment you stop paying.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn urgent post-storm visitors into booked jobs, from Carmel remodels to Greenwood repair calls, instead of brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, ready for hail season and hard winters, and migrate it carefully so you keep every bit of ranking you have already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Indianapolis?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads, especially during storm season and the winter heating rush." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors, so we understand hail-season surges, January heating emergencies, and the gap between a high-ticket Carmel remodel and a Greenwood repair call." },
    { q: 'Why does the Indianapolis market need a different approach?', a: "Indianapolis is hail alley. Major storm cells bring a huge surge in roofing and restoration demand, and the contractors already ranking catch that wave. The market also spans a wide income range: Carmel and Fishers rank among the wealthiest suburbs in the Midwest, while value-focused neighborhoods want dependable repair work. A generic national-agency playbook misses all of it." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO run month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Indianapolis suburbs and neighborhoods do you serve?', a: "Everywhere across the metro: Broad Ripple, Fountain Square, Mass Ave, Butler-Tarkington, Meridian-Kessler, Carmel, Fishers, Zionsville, Noblesville, Greenwood, Avon, Plainfield, Westfield, Brownsburg, and beyond." },
    { q: 'Where should I start?', a: "Start with a free Indianapolis audit. We look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest, including whether you are set up to catch the next storm surge. It is a plain plan for Indianapolis marketing for contractors, not a pitch deck." },
  ],
};
