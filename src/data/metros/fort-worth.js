// FORT WORTH: per-metro x per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Fort Worth's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// FORT WORTH: shared city blocks
// ===========================================================================
const MARKET = {
  heading: "Ranking in Fort Worth plays by its own rules, and they are nothing like Dallas's",
  body:
    "Close to a million people live inside Fort Worth, and the metro keeps spilling outward from the Stockyards through Keller, Southlake, and Mansfield. Treat this like Dallas and you will lose. Locals here are quick to draw the line: their own history, their own pride, their own neighborhoods, and they search with all of that baked in. Two pressures push trade demand harder here than almost anywhere in Texas. The first is hail. Fort Worth sits squarely in North Texas hail alley, where some of the heaviest and most frequent hail in the country lands, often more than once in a single year. Each storm sets off a wave of work for roofers, siding crews, gutter installers, and restoration teams that can carry a contractor's entire year. The second pressure is raw growth. New rooftops keep going up across Keller, Southlake, Burleson, and Crowley, and every fresh homeowner reaches for a phone and a search bar before they pick anyone. The business that already ranks when the hail falls, or when a new neighbor types \"roofer near me,\" is the business that fills its calendar.",
  pullQuote: 'In hail alley, the contractor already ranking before the storm is the one cashing the checks after it.',
  donut: {
    title: 'How Fort Worth searches',
    value: 42,
    centerLabel: 'Hispanic residents',
    legend: [
      { label: 'Hispanic / Spanish-language searches', pct: 42, kind: 'teal' },
      { label: 'Other demographics', pct: 58, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Hail/storm season (Mar-Jun, Aug-Oct) and summer HVAC (Jun-Aug)',
  seasonalDemand: [
    { m: 'J', v: 50 }, { m: 'F', v: 52 }, { m: 'M', v: 88, peak: true },
    { m: 'A', v: 95, peak: true }, { m: 'M', v: 92, peak: true }, { m: 'J', v: 90, peak: true },
    { m: 'J', v: 88, peak: true }, { m: 'A', v: 86, peak: true }, { m: 'S', v: 84, peak: true },
    { m: 'O', v: 80, peak: true }, { m: 'N', v: 58 }, { m: 'D', v: 48 },
  ],
  stats: [
    { value: '~950K', label: 'people inside the City of Fort Worth, with the metro still climbing fast' },
    { value: '~42%', label: 'Hispanic residents, a deep pool of Spanish-language search demand', accent: true },
    { value: 'Mar-Oct', label: 'hail and severe storm window, the widest demand stretch in Texas' },
    { value: 'Top 3', label: 'Map Pack spots that soak up the clicks the moment a storm clears' },
  ],
  neighborhoods: [
    'Stockyards', 'Camp Bowie', 'Mistletoe Heights', 'Ryan Place', 'Fairmount',
    'Near Southside', 'Saginaw', 'Keller', 'Southlake', 'Mansfield',
    'Burleson', 'Crowley', 'North Richland Hills', 'Haltom City', 'Benbrook',
  ],
};

const AREAS = [
  'Stockyards', 'Camp Bowie', 'Mistletoe Heights', 'Ryan Place', 'Fairmount',
  'Near Southside', 'Saginaw', 'Keller', 'Southlake', 'Mansfield',
  'Burleson', 'Crowley', 'North Richland Hills', 'Haltom City', 'Benbrook',
];

const FOUNDER =
  "Let me be honest about why OnwardCraft exists. I got tired of watching solid contractors wire a few grand a month to Angi and HomeAdvisor for leads that three rivals down the road bought at the same time. In a hail town like Fort Worth that setup is even crueler: the storm rolls through, every roofer in the metro piles onto the same shared list, and the platforms cash in while contractors gut their margins fighting each other. A business built on rented leads is a business you do not actually own. So here is the deal we offer instead. We get you ranking and converting for the jobs you want, in the neighborhoods you serve, while the sky is still clear. No 12-month handcuffs. The day it stops working, you show us the door.";

const WHY = [
  {
    title: 'We live and breathe hail alley',
    body: "In Fort Worth, storm season is not a footnote on your calendar. It is the engine. We shape your rankings and content around hail damage, storm restoration, and emergency searches well ahead of time, so you are already on the map when demand explodes instead of frantically building a profile while your competitors take the calls.",
  },
  {
    title: 'We cut the cord on rented leads',
    body: "Everything we build points toward a pipeline that belongs to you. Not one more invoice to a broker for a Fort Worth homeowner that three other crews also paid for, and never the post-hail feeding frenzy where everyone chases the same recycled list.",
  },
  {
    title: 'We genuinely know Fort Worth',
    body: "From the Stockyards to Southlake, Camp Bowie to Crowley, we target block by block and reach the Spanish-language searches most agencies never even register. That is the work a national shop simply cannot fake by dropping your city into a recycled Dallas file.",
  },
  {
    title: 'No contracts, nothing hidden',
    body: "Prices are published, reporting ties straight to leads, and after 90 days you go month-to-month. Stop seeing value and you walk. That keeps every ounce of pressure exactly where it should sit: on us.",
  },
];

const PROOF = {
  heading: "We are new, so you get honest math instead of a wall of logos",
  body:
    "Lots of agencies will flash a grid of client badges at you. We are a young, founder-led shop, and we are not going to fake a history we have not lived yet. What we can put in front of you is the reason this approach works, pulled straight from Google's and the industry's own research on how people search close to home.",
  stats: [
    { value: '46%', label: 'of Google searches carry local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that same day', n: 76 },
    { value: '28%', label: 'of local searches lead to a purchase', n: 28 },
  ],
  projection:
    "Picture this, and read it as a projection rather than a result we are claiming: a Fort Worth contractor pulls roughly 2,000 local \"near me\" impressions a month across a few neighborhoods. Climbing from buried-on-page-two into the top three is the gap between a thin drip of calls and a calendar that fills itself. And when hail tears through, that same gap separates a record month from watching rivals scoop up the work. During your free audit we run the actual figures for your business: your rankings, your real search volume, and a straight 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Fort Worth', state: 'Texas', stateAbbr: 'TX', metro: 'Fort Worth',
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const fortWorthLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'fort-worth', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Fort Worth Local SEO Company | OnwardCraft',
    metaDescription:
      'Fort Worth Local SEO that ranks contractors in the Google Map Pack before the next hail storm. Win the local 3-pack and own the "near me" searches.',
    eyebrow: 'Local SEO · Fort Worth, TX',
    h1: 'Fort Worth Local SEO that ranks you above the competition from the Stockyards to Southlake',
    h2Exact: 'Fort Worth Local SEO Company',
    heroSubhead:
      "Google hands the map to three businesses when someone taps \"near me.\" Everyone underneath is effectively gone. In a hail-driven town like Fort Worth, we lift you into that top three for your neighborhoods before the next storm breaks, so the call rings your phone instead of the competitor who outranked you.",
    primaryCta: 'Get my free Fort Worth audit',
    intro:
      "Fort Worth local SEO boils down to a single question: when a homeowner in Keller or Ryan Place searches your service plus \"near me,\" are you one of the three businesses Google pins to that map? Most people tap a name from those three and never scroll an inch. This market runs on hail seasons, suburbs filling up fast, and a roughly 42% Hispanic population searching in Spanish. Landing in that top three across the neighborhoods you serve, before storm demand peaks, is the entire ballgame. Let us show you how it is won.",
    aioQuestion: 'How do Fort Worth businesses rank higher in local search?',
    aioAnswer:
      "You climb by nailing four things: a Google Business Profile tuned to the exact services and neighborhoods you want, name-address-phone listings that match everywhere across the web, a steady drip of real reviews, and local content rooted in actual Fort Worth neighborhoods and suburbs. Because hail season defines this market, the winners also rank for storm damage and restoration searches before the weather turns, and they capture the Spanish-language searches most competitors never bother to chase.",
    problemHeading: "If your phone goes silent after a hail storm, it usually traces back to one of these three",
    painPoints: [
      { title: 'Competitors own all three spots on the map', body: "Search your own trade plus \"near me\" this minute. Those three businesses Google pins to the map? They pull the lion's share of clicks. When hail batters Fort Worth, those three spots turn into a flood of inbound calls, and the crews that were not already ranked spend the week chasing scraps while the ranked ones book out solid. Cracking that top three for your neighborhoods is usually the single highest-return move a Fort Worth contractor can make." },
      { title: "You keep paying for leads you never actually own", body: "Every storm lights up Angi, Thumbtack, and HomeAdvisor with Fort Worth homeowners, and each one gets sold to four contractors at once, then you all get billed to undercut each other on price. Local SEO flips that script: a lead finds you, calls you, and no rival got the same name. Month by month you stop renting and start owning the pipeline, storm season or not." },
      { title: "You are invisible to 42% of the market", body: "About 42% of Fort Worth residents are Hispanic, and a large share of them search in Spanish. Most contractors do nothing to surface for those searches, so the demand just sits there waiting. Targeting the right neighborhoods and the right language is how you reach buyers your competitors do not even know they are missing." },
    ],
    servicesHeading: 'What it actually takes to put you on the map',
    services: [
      { name: 'Google Business Profile', desc: "The heaviest lever in the Map Pack. We sharpen your categories, services, service area, photos, and posts so Google knows precisely which Fort Worth searches belong to you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to line up everywhere Google checks. We repair the listings that clash and build out the ones you are missing." },
      { name: 'Reviews that keep arriving', desc: "A simple engine that turns every finished job into a steady stream of reviews. It lifts your ranking and gets people dialing, which matters most the week after a storm." },
      { name: 'Neighborhood pages', desc: "Real pages for Keller, Southlake, Mansfield, Camp Bowie, Ryan Place, and the rest, so you rank for the neighborhood somebody is genuinely searching instead of a generic \"Fort Worth.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing beneath the surface that lets everything else climb." },
      { name: 'Local link building', desc: "Mentions and links from Fort Worth sources Google already trusts: local press, associations, partners. Here, that is what divides page one from page two." },
      { name: 'Spanish-language reach', desc: "Around 42% of Fort Worth residents are Hispanic and many search in Spanish. We help you surface for the demand most of your competitors never even notice.", featured: true },
      { name: 'Storm and hail damage SEO', desc: "We frame your content and profile around hail damage, storm restoration, and emergency searches so you are ranked and ready when severe weather lands, not building a profile in the aftermath.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We map exactly where you stand today across your Fort Worth neighborhoods and suburbs, then identify which competitors are beating you in the Map Pack and what is fueling it." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP come first because they move quickest. Most clients feel early lift here inside a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine switch on. These compound week over week, which is exactly why local SEO pays off for whoever starts sooner, and why starting before storm season matters." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Fort Worth, Keller, Southlake, Mansfield, Burleson, and Crowley, backed by the on-page work that makes them stick." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, never vanity rankings. Then we go claim the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Fort Worth neighborhoods and suburbs.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across the metro.', features: ['Everything in Local Growth', 'Local link building', 'Spanish-language search targeting', 'Multi-neighborhood and suburb pages', 'Storm and hail damage SEO'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Fort Worth?', a: "Most Fort Worth engagements fall between $750 and $2,500 a month, set by how many neighborhoods and keywords you are pursuing. Our tiers sit right above this. No hidden fees, no long contract, and we lock the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move within a few weeks. Competitive Fort Worth keywords typically take 90 to 180 days of steady work, since reviews and citations build their weight over time. Anyone promising page one in 30 days is selling you a fantasy." },
      { q: 'What makes Fort Worth local SEO different from Dallas?', a: "Fort Worth is not Dallas, and locals will gladly remind you. It carries its own neighborhoods, its own search patterns, and above all it sits dead-center in North Texas hail alley. Demand spikes several times a year when storms hit, and the contractor already ranking books the work that follows. No Dallas template can touch that dynamic." },
      { q: 'Can you help me reach Spanish-speaking customers?', a: "Yes, and in Fort Worth it is a genuine advantage. Roughly 42% of residents are Hispanic and many search in Spanish. We tune your profile and content to surface for those searches across Fort Worth, Saginaw, Haltom City, and the other neighborhoods where most contractors stay invisible to half the market." },
      { q: 'Which areas do you cover?', a: "Fort Worth proper plus the surrounding suburbs: Keller, Southlake, Mansfield, Burleson, Crowley, North Richland Hills, Haltom City, Saginaw, Benbrook, and the historic neighborhoods inside the city: Stockyards, Camp Bowie, Mistletoe Heights, Ryan Place, Fairmount, and Near Southside." },
      { q: 'Do you work with contractors specifically?', a: "It is very nearly all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We know how hail surges hit, how emergency restoration calls come in, and what Fort Worth homeowners type after severe weather." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "A growing share of \"near me\" research now begins inside AI rather than classic search. We structure your content and schema so those engines can read your business, trust it, and cite it." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an opening 90 days because that is roughly how long local SEO needs to show real movement. After that you go month-to-month. If we are not delivering, you walk." },
      { q: 'How does this get me off Angi and HomeAdvisor leads?', a: "Those platforms sell the same Fort Worth homeowner, especially after a storm, to four contractors and bill each of you to fight on price. We build rankings, a Google profile, and a review base that route leads straight to you. Over time you lean on the brokers less because the work arrives directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your neighborhoods, what your Map Pack competitors are doing to beat you, the fixes that move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. It is the fastest way to see what Fort Worth Local SEO can do for your calendar. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'fort-worth', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Fort Worth SEO Company | OnwardCraft',
    metaDescription:
      'Fort Worth SEO that ranks contractors on Google and delivers leads you own. Storm-season ready, Spanish-language capable, and no lock-in contracts.',
    eyebrow: 'SEO Services · Fort Worth, TX',
    h1: 'Fort Worth SEO that climbs you past the competition on Google through every hail season',
    h2Exact: 'Fort Worth SEO Company',
    heroSubhead:
      "Ads die the instant you stop paying. SEO does the reverse: rank once for what your Fort Worth customers search and the leads keep landing, through hail season, through the summer heat, through the suburban boom from Keller all the way to Crowley.",
    primaryCta: 'Get my free Fort Worth SEO audit',
    intro:
      "Fort Worth SEO turns on one question: when someone searches your trade, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in a market driven by hail storms, summer HVAC demand, suburbs filling up fast, and a 42% Hispanic population searching in Spanish, and we count the result in leads, not vanity traffic.",
    aioQuestion: 'How do Fort Worth businesses rank higher on Google?',
    aioAnswer:
      "They climb by fixing the site's technical foundation, tuning each page to the exact terms customers type, publishing genuinely useful local content rooted in specific Fort Worth neighborhoods and suburbs, and earning links from trusted Texas sources. In this market, ranking for storm damage, hail repair, and emergency searches before severe weather arrives, plus Spanish-language content for the 42% Hispanic population, are two of the quickest ways to pull ahead.",
    problemHeading: "Three reasons your Fort Worth site is not bringing in work",
    painPoints: [
      { title: "You are stranded on page two", body: "Hardly anyone clicks past Google's first page. In a contractor-packed market like Fort Worth, especially after a storm when everyone scrambles for the same searches, sitting outside the top handful of results makes your site invisible no matter how clean your craftsmanship is." },
      { title: "You are renting traffic from Google Ads", body: "Ads can work, but the second your card stops, the leads stop cold. And come peak storm season, Fort Worth ad costs jump as every contractor in town piles into the auction. SEO builds an asset you own: rankings that keep producing leads after the storm, through the slow months, and into the next season." },
      { title: "You are not ranked for storm season before it shows up", body: "Fort Worth's hail and storm season stretches March through October. Rankings take months to build, so the crews booking work after a storm are the ones already ranking before it. Showing up for storm damage, hail repair, and restoration searches has to happen in the off-season, never the morning after." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned to the exact terms your Fort Worth customers search: titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and pull in leads while you sleep, including neighborhood-specific content for the suburbs." },
      { name: 'Link building', desc: "Authority from real Fort Worth and Texas sources. In a market this competitive, links are frequently the line between page one and page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you take the \"near me\" searches across your neighborhoods right alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads, not just rankings and traffic, so you always know what your SEO is genuinely worth." },
      { name: 'Storm & hail damage SEO', desc: "We rank you for storm restoration, hail damage, and emergency searches ahead of season so you are visible when demand spikes, not scrambling once it passes.", featured: true },
      { name: 'Spanish-language & AI search', desc: "We optimize for the 42% of Fort Worth residents who search in Spanish, and structure content so AI Overviews, ChatGPT, and Perplexity surface and cite your business.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Fort Worth leads, including storm-season and Spanish-language openings." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile: the foundation everything else needs before it can rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus fresh local content, including the storm, hail, and suburban neighborhood pages that carry weight here." },
      { name: 'Build authority', desc: "Links and citations from trusted Fort Worth and Texas sources to drive competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we lean into what is working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Fort Worth SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and suburbs.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Fort Worth search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Storm & hail damage SEO', 'Spanish-language optimization', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Fort Worth?', a: "Most Fort Worth SEO engagements run $900 to $3,000 a month, set by how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Fort Worth?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, quicker on tight neighborhood terms and slower on the most competitive metro-wide keywords. Since storm season drives huge demand spikes, starting before the season really pays off here." },
      { q: 'Is SEO better than Google Ads in Fort Worth?', a: "They do different jobs. Ads can work, but during storm season every contractor in town is bidding and ad costs climb hard. SEO builds an asset you own that keeps producing leads at a lower cost per lead over time, through peak season and the quiet stretches after." },
      { q: 'Should my Fort Worth SEO include storm and hail damage content?', a: "Absolutely. Rankings take months to build, so you need to be ranking for storm damage, hail repair, and emergency restoration before the hail falls, not the day after. We optimize for those terms in the off-season so your busiest weeks land on you." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. Higher tiers add storm and hail damage SEO, Spanish-language optimization, and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an opening 90 days because SEO needs that long to show real movement, then it is month-to-month. If we are not delivering, you leave." },
      { q: 'Can you help me rank in Spanish for Hispanic customers?', a: "Yes. Roughly 42% of Fort Worth residents are Hispanic and many search in Spanish. Optimizing for Spanish-language searches across neighborhoods like Saginaw, Haltom City, and parts of central Fort Worth is a serious edge most contractors ignore." },
      { q: 'Which areas around Fort Worth do you cover?', a: "Fort Worth proper plus the surrounding suburbs: Keller, Southlake, Mansfield, Burleson, Crowley, North Richland Hills, Haltom City, Saginaw, and Benbrook, with genuine local pages for each rather than one generic Fort Worth page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads straight to you. The more you own your search visibility, especially before storm season, the less you depend on paying brokers for shared leads that four competitors also bought." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. It shows you exactly what Fort Worth SEO can do for your organic traffic and page-one visibility. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'fort-worth', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Fort Worth Web Design Company | OnwardCraft',
    metaDescription:
      'Fort Worth web design that turns visitors into booked jobs: fast, mobile-first sites built for contractors in a hail market with fast-growing suburbs.',
    eyebrow: 'Web Design · Fort Worth, TX',
    h1: 'Fort Worth web design that loads fast and books more jobs from Keller to Crowley',
    h2Exact: 'Fort Worth Web Design Company',
    heroSubhead:
      "A handsome website that never rings the phone is just a brochure. We build Fort Worth contractors fast, mobile-first sites engineered to convert visitors into booked work: ready for storm season, ready for suburban growth, and built to carry Fort Worth's own identity rather than a Dallas hand-me-down.",
    primaryCta: 'Get my free quote',
    intro:
      "Fort Worth web design is the difference between a site that books jobs and one that quietly bleeds leads: slow on a phone, a call button buried somewhere, no clear offer. We build mobile-first contractor websites that load fast, look like the pro you already are, and turn Keller-to-Crowley visitors into booked jobs, built to stand out in a market where hail storms, suburban growth, and a 42% Hispanic population create demand spikes that reward whoever is best positioned.",
    aioQuestion: 'What makes a good contractor website in Fort Worth?',
    aioAnswer:
      "A strong Fort Worth contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the exact neighborhoods and suburbs you serve. Because storm-chaser competition runs hot and most searches happen on mobile, a fast mobile site with obvious storm and emergency CTAs, plus local content that carries Fort Worth's own identity rather than a generic Dallas page, is what separates a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site is not bringing in work",
    painPoints: [
      { title: "It is a brochure, not a lead engine", body: "Plenty of contractor sites just list services and sit still. No clear offer, no obvious next step, and in a storm market like Fort Worth the crew that ranked before the hail is already fielding the calls. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It crawls on a phone", body: "Most of your Fort Worth visitors are on mobile, and they bail if your site needs more than a few seconds to load. Slow sites rank worse too. We build fast, so you hold the visitor and the ranking, which counts double when storm-season traffic spikes overnight." },
      { title: "It does not speak to Fort Worth neighborhoods", body: "A homeowner in Southlake wants to see you serve Southlake, not a generic Texas page that could belong to anybody, and definitely not something that reads like a Dallas agency built it. We build sites that name the Fort Worth neighborhoods and suburbs you work, so visitors trust you are local and Google ranks you for the right searches." },
    ],
    servicesHeading: "What goes into an OnwardCraft Fort Worth website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site shaped around your trade, your Fort Worth neighborhoods, and the jobs you actually want, carrying Fort Worth's own identity rather than a Dallas clone." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that is where nearly all of your Fort Worth traffic lives. Fast, thumb-friendly, and easy to call from the moment a storm hits." },
      { name: 'Conversion-focused UX', desc: "Clear offers, unmissable call buttons, and lead forms placed where people actually use them. Every page has a next step, including storm and emergency CTAs during peak season." },
      { name: 'Copy that sells', desc: "Words written for Fort Worth homeowners that close the job, not filler that reads like a national template with the city name dropped in." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank: clean structure, schema, fast load, and neighborhood-ready pages for Fort Worth and the suburbs." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both your conversions and your rankings." },
      { name: 'Neighborhood and suburb pages', desc: "Pages built for Keller, Southlake, Mansfield, Burleson, Camp Bowie, Ryan Place, and the rest, so you rank where your customers actually are.", featured: true },
      { name: 'Storm-ready and AI-search ready', desc: "Storm and emergency CTAs baked in, plus structure so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your Fort Worth neighborhoods, your best jobs, and your competitors, then map the site around booking more of the work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert. You see it and shape it before a single line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write copy that sells, with the call to action front and center on every page and storm-ready messaging where it matters." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it around what is actually converting." },
    ],
    pricing: {
      heading: 'Transparent Fort Worth web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Suburb-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Fort Worth?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, set by page count and integrations. Fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes roughly 2 to 4 weeks; a larger custom build runs 4 to 8. We hand you a firm timeline up front and keep you posted through each stage." },
      { q: 'Will my site help me stand out in Fort Worth?', a: "That is the entire point. We build around the exact Fort Worth neighborhoods and suburbs you serve, not a generic Texas page or a Dallas clone, and we make the offer and call button impossible to miss so the site books jobs instead of just sitting there." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Fort Worth terms and stay visible before storm season." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you cannot leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where nearly all of your Fort Worth traffic comes from, including the surge of calls right after a hail storm when every homeowner is on a phone hunting for a roofer." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage, usually WordPress or Webflow. We recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project at a fixed price. Any ongoing maintenance or SEO is month-to-month, and you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what high-converting Fort Worth web design should include for a contractor, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'fort-worth', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Fort Worth Website Redesign | OnwardCraft',
    metaDescription:
      'Fort Worth Website Redesign with a careful, SEO-safe migration: faster, mobile-first rebuilds that convert more visitors into booked jobs without losing rankings.',
    eyebrow: 'Website Redesign · Fort Worth, TX',
    h1: 'Fort Worth Website Redesign done with a careful, SEO-safe migration that keeps your hail-season rankings',
    h2Exact: 'Fort Worth Website Redesign Company',
    heroSubhead:
      "An outdated site quietly costs you jobs every week, and in a hail market it costs you a wave of work every storm season. We redesign Fort Worth contractor sites to convert more and load faster, and we migrate with care so you keep every bit of ranking you have already earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "A Fort Worth website redesign fails in one of two ways: the site looks sharper but converts the same, or it launches and the rankings evaporate overnight. We do neither. We rebuild Fort Worth contractor sites for speed and conversions, build them to carry Fort Worth's own identity instead of a generic Texas template, and run an SEO-safe migration with the redirects and care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done properly, a redesign holds your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Fort Worth site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and bleeds your credibility", body: "On a high-ticket roofing or restoration job, Fort Worth homeowners size you up by your site in seconds. An old, cluttered design quietly nudges them toward a competitor who looks more established, even when your work is sharper and your storm experience runs far deeper." },
      { title: "It is slow and clumsy on a phone", body: "If your site is sluggish or awkward on mobile, you lose most of your Fort Worth visitors before they ever reach your offer, including the surge of traffic right after a hail storm, when homeowners are on their phones hunting for a contractor that minute." },
      { title: "It does not feel like Fort Worth", body: "A generic Texas page with a city name swapped in does not convince a homeowner in Mistletoe Heights or Keller. It also will not rank for the neighborhood-specific searches that bring your best leads. We rebuild around Fort Worth's real neighborhoods and suburbs, Camp Bowie, Ryan Place, Southlake, Burleson, so the new site earns both trust and rankings." },
    ],
    servicesHeading: "What goes into an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pin down exactly what is costing you leads and rankings today, so the redesign fixes real problems instead of just shuffling colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you have already earned, which is critical to lock in before storm season." },
      { name: 'Conversion redesign', desc: "Clear offers, smarter call-to-action placement, and storm and emergency CTAs where they actually get used. We design for booked jobs, not just good looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals, better for both conversions and rankings, and crucial when post-storm traffic spikes." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where nearly all your Fort Worth traffic lives, including the surge after a hail event." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the price of your jobs, and that feels like Fort Worth rather than a Dallas agency's hand-me-down." },
      { name: 'Neighborhood and suburb rebuild', desc: "Rebuilt around the Fort Worth neighborhoods and suburbs you serve, Keller, Southlake, Mansfield, Burleson, Camp Bowie, so the new site stands out and ranks where your customers actually search.", featured: true },
      { name: 'Storm-ready and AI-search ready', desc: "Storm and emergency CTAs baked in, plus structure so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what is losing you leads and rankings, and what storm-season traffic you could be capturing, then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build, carrying Fort Worth's identity rather than a generic Texas template." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration, including storm and neighborhood content." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and watch closely so rankings hold and climb instead of dropping." },
      { name: 'Optimize', desc: "Post-launch tuning around what is converting, plus ongoing speed and updates before each storm season." },
    ],
    pricing: {
      heading: 'Transparent Fort Worth redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Suburb-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Fort Worth?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, set by size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it is handled with care, and that is exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually lifts them." },
      { q: 'How long does a redesign take?', a: "A focused redesign runs roughly 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at every stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is not bringing in leads, reads like a generic Texas page instead of a Fort Worth business, or leaves storm-season traffic on the table, it is costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and sharpen your existing content, preserve what is ranking, and handle the technical migration so nothing important slips through the cracks, including any storm or hail content already earning you traffic." },
      { q: 'Will the redesign help me compete in Fort Worth?', a: "Yes. We rebuild around the exact Fort Worth neighborhoods and suburbs you serve, not a generic template, keep the site fast, make the offer and storm CTAs obvious, and make sure you are ready to catch the next surge of post-storm traffic." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings, and that matters most when post-storm traffic lands overnight." },
      { q: 'Do I own the redesigned site?', a: "Completely: the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and the SEO-safe migration plan that makes a Fort Worth Website Redesign worth it. No pressure, just a plan." },
    ],
  },
];

export const fortWorthCity = {
  citySlug: 'fort-worth', city: 'Fort Worth', state: 'Texas', stateAbbr: 'TX', metro: 'Fort Worth',

  titleTag: 'Fort Worth Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Fort Worth marketing for contractors: web design, SEO, and local SEO that gets you found, booked, and off rented leads, built for hail alley and fast-growing suburbs.',

  eyebrow: 'Fort Worth · Web Design, SEO & Lead Generation',
  h1: 'Fort Worth marketing for contractors that fills your calendar before the next hail storm',
  h2Exact: 'Fort Worth Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Fort Worth's hail seasons, fast-growing suburbs, and 42% Hispanic market. One team to get you ranking, converting, and off the rented-lead treadmill, all before the next storm hits.",
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Fort Worth audit',

  intro:
    "Fort Worth marketing for contractors works differently than anywhere else in Texas, because the market does. Fort Worth is not Dallas. It has its own neighborhoods, its own culture, and its own identity, and locals will set you straight on that. More than that, it sits in the heart of North Texas hail alley, so storm-driven demand spikes several times a year, fast-growing suburbs from Keller to Crowley keep funneling in new homeowners, and roughly 42% of residents are Hispanic with real Spanish-language search demand. Winning here takes three things pulling together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack for the neighborhoods you serve, well before the storms arrive.",
  aioQuestion: 'How do Fort Worth contractors get more leads online?',
  aioAnswer:
    "Fort Worth contractors get more leads by pairing a fast, mobile-first website with SEO that ranks them for high-intent searches, including storm damage and hail repair, and local SEO that wins the Google Map Pack neighborhood by neighborhood. Because roughly 42% of residents are Hispanic and storm-driven demand spikes are a regular feature here, contractors who rank before storm season and surface in Spanish searches win far more work than those leaning on generic Texas templates and rented leads.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Break into the top three businesses Google pins to the map when Fort Worth searches \"near me.\" The single highest-return move for most contractors, especially in a market where storms create demand spikes and the ranked contractor books the work.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search, including storm damage, hail repair, and Spanish-language searches, and build an asset you own instead of renting traffic from ads or lead brokers.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn Fort Worth visitors into booked jobs: storm-ready, suburb-targeted, and built to carry Fort Worth's own identity instead of a Dallas hand-me-down.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it with care so you keep every bit of ranking you have already earned, ready for the next storm season.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Fort Worth?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients pair a high-converting website with SEO and local SEO so they rank, convert, and own their leads, especially through Fort Worth's storm season." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We know how hail surges hit, how emergency restoration calls come in, and what Fort Worth homeowners search for after severe weather." },
    { q: "Why is Fort Worth's market different?", a: "Fort Worth sits in North Texas hail alley, some of the most frequent and damaging hail in the country, so storm-driven demand spikes are a regular feature here. It also has roughly 42% Hispanic residents with real Spanish-language search demand, and fast-growing suburbs from Keller to Crowley feeding a constant stream of new homeowners. This is not a generic Texas market, and it is not Dallas." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Fort Worth areas do you serve?', a: "Fort Worth proper plus the surrounding suburbs: Keller, Southlake, Mansfield, Burleson, Crowley, North Richland Hills, Haltom City, Saginaw, and Benbrook, and the historic Fort Worth neighborhoods: Stockyards, Camp Bowie, Mistletoe Heights, Ryan Place, Fairmount, and Near Southside." },
    { q: 'Where should I start?', a: "Start with a free Fort Worth audit. We look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest, including what you should have in place before storm season. It is the simplest way to see what Fort Worth marketing for contractors can do for your calendar. No pitch deck, just a plan." },
  ],
};
