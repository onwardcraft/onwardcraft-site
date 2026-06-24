// MACON — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Macon's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// MACON — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'What it really takes to get found in Macon',
  body:
    "Macon planted itself where I-75 and I-16 intersect, and that crossroads defines the local economy. The city functions as the trade, healthcare, and education center for the middle of the state, with Atrium Health Navicent and Mercer University (including its medicine and law programs) supplying a deep bench of long-tenured homeowners who put money into the older houses that fill neighborhoods like Vineville and Shirley Hills. A short drive down to Houston County, Robins Air Force Base and the Warner Robins Air Logistics Complex keep thousands of uniformed and civilian defense workers rotating through, and a transferring family typically opens Google for a contractor before the moving boxes are even unpacked. Demand here turns on two patterns. One: nearly every homeowner pulls out a phone and types a service plus \"near me,\" then calls one of the names sitting at the top. Two: spring brings genuine severe weather to the middle of the state, and when a tornado or hail line rolls across Bibb and Houston counties, roofing and restoration requests don't tick upward, they spike. Whoever is already visible captures that surge.",
  pullQuote: 'After a hail line crosses Bibb and Houston counties, the calls go to whoever is already sitting at the top of the results.',
  donut: {
    title: 'Who lives in Bibb County',
    value: 54,
    centerLabel: 'Black/AA (county)',
    legend: [
      { label: 'Black/AA', pct: 54, kind: 'teal' },
      { label: 'Other', pct: 46, kind: 'grey' },
    ],
  },
  seasonTitle: 'How the calendar drives the calls',
  seasonCaption: 'Severe weather (Mar to Jun), cooling load (Jun to Sep)',
  seasonalDemand: [
    { m: 'J', v: 34 }, { m: 'F', v: 38 }, { m: 'M', v: 64, peak: true }, { m: 'A', v: 82, peak: true },
    { m: 'M', v: 92, peak: true }, { m: 'J', v: 96, peak: true }, { m: 'J', v: 88, peak: true },
    { m: 'A', v: 84, peak: true }, { m: 'S', v: 70 }, { m: 'O', v: 54 },
    { m: 'N', v: 38 }, { m: 'D', v: 34 },
  ],
  stats: [
    { value: 'I-75 x I-16', label: 'the interstate crossroads that anchors middle Georgia' },
    { value: '~58%', label: 'of searches here start on a phone with "near me" attached', accent: true },
    { value: 'Mar to Jun', label: 'the stretch when tornadoes and hail hit hardest' },
    { value: 'Top 3', label: 'map results that collect the bulk of the taps' },
  ],
  neighborhoods: [
    'Intown', 'Vineville', 'Shirley Hills', 'Ingleside', 'North Macon',
    'Warner Robins', 'Centerville', 'Bonaire', 'Byron', 'Forsyth',
    'Gray', 'Macon-Bibb', 'Lizella', 'Bolingbroke', 'Perry',
  ],
};

const AREAS = [
  'Macon', 'Warner Robins', 'Centerville', 'Bonaire', 'Byron', 'Forsyth',
  'Gray', 'Perry', 'Lizella', 'Bolingbroke', 'Jeffersonville',
  'Fort Valley', 'Cochran', 'Hawkinsville', 'Roberta',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'Trades work is the only work we take',
    body: "Roofers, HVAC techs, plumbers, solar crews, electricians, restoration outfits, and general contractors. Because we know how severe weather, after-hours emergencies, and insurance claims drive your phone, every page we build maps to how middle-Georgia homeowners actually look for help.",
  },
  {
    title: 'We pull you off the rented-lead treadmill',
    body: "The aim is a flow of work that belongs to you. Not one more recurring charge to a broker who already sold that same Bibb County homeowner to three other crews.",
  },
  {
    title: 'We genuinely know this market',
    body: "Severe-weather surges, transferring Robins families searching on arrival, century-old houses in Intown and Vineville that call for a careful specialist, and real targeting from Shirley Hills out to Warner Robins. That is local detail a template-swapping national shop simply cannot fake.",
  },
  {
    title: 'Clear prices, no fine print',
    body: "Posted rates, reports tied to actual leads, and a month-to-month arrangement once the first 90 days are up. If we stop earning your business, you walk. That keeps the burden of proof on our side.",
  },
];

const PROOF = {
  heading: "No logo wall yet, so here's the math we can actually stand behind",
  body:
    "Other agencies open with a wall of client logos. We are a new, founder-run shop, and we are not going to fake a history we have not built. What we can put in front of you is the reasoning behind the work, drawn directly from Google's published data and the wider industry's research on how people search close to home.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here is a rough sketch, labelled plainly as a projection rather than a result we claim: imagine a Macon contractor pulling roughly 1,200 local \"near me\" impressions each month. Climbing out of page-two obscurity into the top three turns a slow trickle of calls into a calendar that fills up, and that distance only widens once a tornado or hail line moves through. During your free audit we run the actual figures for your shop: your current positions, your real search volume, and a candid 90-to-180-day route.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Macon', state: 'Georgia', stateAbbr: 'GA', metro: 'Macon-Bibb County',
  heroProof: ['Built for the trades', 'Storm-season ready', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const maconLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'macon', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Macon Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Macon Local SEO that ranks you above the competition. We work your business into the Map Pack so the "near me" call comes to you, not a rival.',
    eyebrow: 'Local SEO · Macon-Bibb County',
    h1: 'Macon Local SEO that ranks you above the competition from Vineville to Warner Robins',
    h2Exact: 'Macon Local SEO Company',
    heroSubhead:
      "A \"near me\" search puts three businesses on Google's map, and everyone underneath them might as well not exist. We work you into that trio so the homeowner reaches you rather than whoever happened to rank first, and so your profile is set before the next storm lights up every phone in Bibb County.",
    primaryCta: 'Get my free Macon audit',
    intro:
      "Macon Local SEO hinges on a single question: when someone in Vineville or Warner Robins types your trade and \"near me,\" do you appear in the Google Map Pack among the three businesses fixed to the map? Most searchers tap one of those three and never scroll past them. Add the thousands of Robins families arriving each year and a spring severe-weather window, and earning a spot in the local 3-pack becomes the entire contest. This is how it gets done.",
    aioQuestion: 'How do Macon businesses rank higher in local search?',
    aioAnswer:
      "Ranking comes from four pieces done well: a Google Business Profile tuned to the precise services and neighborhoods you want, name-address-phone details that line up everywhere online, a regular flow of genuine reviews, and local pages tied to actual middle-Georgia communities. Because Macon constantly absorbs transferring Robins Air Force Base families and takes a beating from spring tornadoes and hail, the businesses that win look settled, answer quickly, and already hold their rankings when storm-driven demand jumps.",
    problemHeading: "A quiet phone usually traces back to one of these",
    painPoints: [
      { title: 'Rivals are holding all three map slots', body: "Run a search for your own trade plus \"near me\" this minute. Those three businesses Google clips to the map collect almost every click. When you are not among them, the quality of your work barely registers, because most homeowners never lay eyes on your name. For a Macon contractor, breaking into that trio is usually the highest-return move on the board." },
      { title: "You're buying leads that were never yours", body: "Angi, Thumbtack, and HomeAdvisor hand the same Bibb County homeowner to four crews, then charge each of you to scrap over them. That is a treadmill. Local SEO flips it: a homeowner finds you, dials you, and no one else got the same lead. Bit by bit you trade renting for owning." },
      { title: "Newly arrived families can't see you", body: "Thousands of service members and civilian staff transfer into the Warner Robins area annually, and their first move is a contractor search with no neighbor's referral to lean on. Stay out of the map results and that fresh customer never lands on you. Ranking today is how you become the crew they phone on arrival." },
    ],
    servicesHeading: 'The pieces that actually move you up',
    services: [
      { name: 'Google Business Profile', desc: "Your strongest pull in the map results. We sharpen your categories, service list, coverage area, photos, and posts so Google understands precisely which Macon-Bibb searches belong to you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone must agree across every directory Google checks. We correct the listings that contradict each other and create the ones you are missing." },
      { name: 'Reviews that keep coming', desc: "A straightforward system that converts wrapped-up jobs into a steady run of reviews. It nudges your ranking up and gives Houston County homeowners a reason to call." },
      { name: 'Neighborhood pages', desc: "Dedicated pages for Vineville, Shirley Hills, Warner Robins, Byron, and the rest, so you surface for the exact community someone searches instead of a single broad \"Macon\" page." },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, and mobile load time. The behind-the-scenes wiring that lets every other piece climb." },
      { name: 'Local link building', desc: "Mentions and links from middle-Georgia sources Google respects: regional press, trade associations, and local partners. Here, that is often what divides page one from page two." },
      { name: 'Severe-weather readiness', desc: "We get your profile, pages, and reviews ranking ahead of the spring tornado and hail window so you collect the demand surge rather than chasing it once the damage is done.", featured: true },
      { name: 'AI search readiness', desc: "A growing share of \"near me\" research now begins inside AI Overviews, ChatGPT, and Perplexity. We shape your content so those tools can read and quote you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We map exactly where you stand right now across every area you serve and identify which competitors are outranking you in the map results and what is fueling it." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP come first because they respond the quickest. Early movement here often shows inside a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine switch on. Both stack up week after week, which is why local SEO pays off more for the contractor who starts sooner." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages spanning Bibb, Houston, and the bordering counties, backed by the on-page work that makes them rank." },
      { name: 'Report and expand', desc: "Reporting in plain language tied to calls and booked leads, not hollow ranking charts. Then we move on to claim the next community." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'A single location getting its map foundation squared away.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For crews competing across several middle-Georgia communities.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors set on dominating the map from Macon through Warner Robins.', features: ['Everything in Local Growth', 'Local link building', 'Storm-season demand targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Macon?', a: "Most local engagements here fall between $750 and $2,500 a month, set by how many communities and keywords you are pursuing. The tiers sit just above. No buried fees, no drawn-out contract, and we lock the exact scope during your free audit." },
      { q: 'How long until I show up in the map results?', a: "Profile work can shift within a few weeks. The contested Macon and Warner Robins terms generally need 90 to 180 days of consistent effort, since reviews and citations build up gradually. Anyone guaranteeing page one in 30 days is selling smoke." },
      { q: 'What makes local SEO in middle Georgia different?', a: "Two forces. A steady stream of military and civilian households keeps relocating around Robins Air Force Base with no neighbor's referral to rely on, so trust signals like reviews and matching listings carry serious weight. And spring brings a real tornado, hail, and high-wind season, so trade demand swings sharply: your ranking has to be set before the weather turns, not afterward." },
      { q: 'How does local SEO help me when severe weather hits?', a: "Once a tornado, hail line, or high-wind event sweeps across Bibb and Houston counties, roofing and restoration searches jump overnight, and the businesses already on the map field those calls. We get you ranked and reviewed ahead of the spring season so you absorb that demand instead of fighting for leftovers after every competitor is booked." },
      { q: 'Which areas do you cover?', a: "All of Macon-Bibb plus the surrounding territory: Intown, Vineville, Shirley Hills, Ingleside, North Macon, along with Warner Robins, Centerville, Bonaire, Byron, Forsyth, Gray, and beyond. We build real neighborhood pages rather than one catch-all Macon page, because that is what wins \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It is nearly all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contracting. We understand after-hours calls, weather-driven demand, and insurance jobs, and we shape your local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "An increasing slice of \"near me\" research now starts inside AI rather than classic search. We structure your content and schema so those engines can read, trust, and quote your business. That channel is fast becoming as decisive as the map results themselves." },
      { q: 'Am I locked into a contract?', a: "No. We request an opening 90 days because that is roughly how long local SEO takes to produce real movement. After that the arrangement is month-to-month. If we are not delivering, you leave, and the accountability stays squarely with us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and exposure you never keep. We build rankings, a Google profile, and a review base that route inquiries straight to you. Over time your reliance on brokers fades because the work arrives directly." },
      { q: "What's in the free audit?", a: "A plain read on where your Macon Local SEO stands today across your service areas, how your map competitors are beating you, the fixes that move you fastest, and a grounded 90-to-180-day plan with the numbers worked out for your shop. No slide deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'macon', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Macon SEO Company | OnwardCraft',
    metaDescription:
      'Macon SEO that climbs you past the competition on Google and delivers leads you own. Lead-tied reporting, no lock-in, built around middle-Georgia demand.',
    eyebrow: 'SEO Services · Macon-Bibb County',
    h1: 'Macon SEO that climbs you past the competition on Google and holds the lead',
    h2Exact: 'Macon SEO Company',
    heroSubhead:
      "Paid ads switch off the instant your card stops. SEO behaves the opposite way: earn the ranking once for what middle-Georgia homeowners search, and the leads keep arriving. We build that ranking and connect every report to real calls and booked jobs.",
    primaryCta: 'Get my free Macon SEO audit',
    intro:
      "Macon SEO reduces to one question: when a homeowner searches your trade, are you on page one or buried on page two? Page two might as well be page fifty. As your Macon SEO company we get contractors ranking for the money keywords across this middle-Georgia hub, a market fed by Mercer and Navicent professionals plus arriving Robins families, and we track organic traffic in leads rather than vanity numbers.",
    aioQuestion: 'How do Macon businesses rank higher on Google?',
    aioAnswer:
      "They climb by repairing the site's technical base, tuning each page to the precise phrases customers search, publishing local content people genuinely find useful, and earning links from trusted middle-Georgia sources. In a hub that draws transferring Robins Air Force Base families and absorbs spring tornado and hail damage, two of the fastest ways to pull ahead are keeping the site quick on mobile and ranking for the weather-driven, seasonal terms before they spike.",
    problemHeading: "Three reasons your Macon site brings in no work",
    painPoints: [
      { title: "You're parked on page two", body: "Hardly anyone clicks beyond Google's first page, and they seldom scroll far down it either. If you are missing from the top handful of results for what you sell, your site is effectively invisible no matter how sharp it looks." },
      { title: "You're renting traffic from Google Ads", body: "Paid ads can work, but the moment your card stops, so do the leads. SEO builds something you keep: rankings that go on producing leads for months and years after the work, at a slice of the per-lead cost." },
      { title: "You're missing the demand that counts", body: "Macon demand swings with the season and the weather, and the contractors ranking for those terms in advance catch the surge. If your SEO skips tornado-driven, hail, and summer cooling searches, you are handing away your busiest months." },
    ],
    servicesHeading: 'The SEO work that genuinely shifts rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, page speed, Core Web Vitals, schema, and the behind-the-scenes fixes Google requires before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned to the precise phrases your middle-Georgia customers search: titles, headings, body copy, and internal links." },
      { name: 'Content that ranks', desc: "Pages and articles homeowners actually find useful, answering what buyers search, earning links, and drawing leads on their own." },
      { name: 'Link building', desc: "Authority pulled from real middle-Georgia and industry sources. In a hub like this, links are frequently what split page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map-result optimization so you take the \"near me\" searches right alongside your organic positions." },
      { name: 'Lead-tied reporting', desc: "We report on calls, form fills, and booked leads rather than only rankings and traffic, so you always know what your SEO is truly worth." },
      { name: 'Severe-weather & seasonal SEO', desc: "We rank you for the tornado-driven, hail, and summer cooling searches that power Macon's busiest months, putting you in view before demand jumps rather than after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a rising portion of search now starts.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We measure your rankings, traffic, and competitors, then draw up a roadmap centered on the keywords most likely to drive real Macon leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile: the groundwork everything else needs in order to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your revenue pages plus fresh local content, including the seasonal and weather-driven terms that matter in middle Georgia." },
      { name: 'Build authority', desc: "Links and citations from trusted middle-Georgia and industry sources to push contested keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we press harder on what is working and reach into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Macon SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a tight site chasing its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across multiple services and communities.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses out to command search across middle Georgia.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Storm & seasonal SEO', 'eCommerce / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Macon?', a: "Most SEO engagements here run $900 to $3,000 a month, set by how contested your keywords are and how much content and link work the plan calls for. The tiers sit above, with no buried fees and no long contract." },
      { q: 'How long does SEO take to work in Macon?', a: "Look for early movement around 2 to 3 months and meaningful results by 4 to 6, quicker on low-competition phrases and slower on the toughest Macon and Warner Robins keywords. SEO compounds, so the gains keep stacking the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They serve different roles. Ads buy instant traffic that halts the moment you stop paying. SEO is something you own that keeps yielding leads at a falling cost per lead over time. Most contractors win by running SEO as the long-haul engine and ads for short bursts." },
      { q: 'Should my Macon SEO target severe-weather season?', a: "Yes. When tornadoes, hail, and high wind strike middle Georgia in spring, roofing and restoration searches jump overnight, and ranking takes months to earn, so you have to be in position before the season rather than scrambling after. We optimize for those seasonal and weather-driven terms in advance so your busiest months come to you." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local map SEO, and lead-tied reporting. Upper tiers fold in severe-weather, seasonal, and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an opening 90 days because SEO needs that span to show real movement, then it shifts to month-to-month. If we are not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a growing piece of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which areas around Macon do you cover?', a: "All of Macon-Bibb and the territory around it: Warner Robins, Centerville, Bonaire, Byron, Forsyth, Gray, Perry, and more, built on real local pages instead of one generic Macon page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send inquiries straight to you. The more of your search visibility you own, the less you depend on paying brokers for shared leads." },
      { q: "What's in the free SEO audit?", a: "Where your Macon SEO ranks now, how your competitors are beating you, the highest-impact fixes, and a grounded timeline with the numbers modeled for your shop. No slide deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'macon', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Macon Web Design Company | Sites That Convert | OnwardCraft',
    metaDescription:
      'Macon Web Design that loads fast and books more jobs: mobile-first contractor websites built to convert visitors and ride out middle-Georgia storm season.',
    eyebrow: 'Web Design · Macon-Bibb County',
    h1: 'Macon web design that loads fast and books more jobs from Vineville to Warner Robins',
    h2Exact: 'Macon Web Design Company',
    heroSubhead:
      "A good-looking website that never produces a call is just a brochure. We build Macon contractors fast, mobile-first sites engineered to convert visitors into booked work and to hold steady when severe weather floods your phone.",
    primaryCta: 'Get my free quote',
    intro:
      "Macon Web Design done right starts where most contractor sites fail: sluggish on a phone, a call button nobody can find, no clear offer. We build a fast-loading, mobile-first contractor website that presents you as the professional you are and converts visitors from Vineville to Warner Robins into booked jobs, a site that stays upright when a tornado warning sends your traffic climbing.",
    aioQuestion: 'What makes a good contractor website in Macon?',
    aioAnswer:
      "A strong Macon contractor website loads in under three seconds on a phone, keeps the call button and a clear offer above the fold, builds trust with reviews and real project photos, and is engineered to absorb traffic spikes during tornado and hail season. Since most local searches happen on mobile, including the steady run of relocating Robins families with no local references, mobile speed and an unmistakable next step are what separate a site that books jobs from one that merely sits there.",
    problemHeading: "Why your current site brings in no work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "Plenty of contractor sites just list services and sit idle. No clear offer, no obvious next step, no reason to choose you over the crew down the road. We design every page around one task: converting a visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Macon visitors arrive on mobile, and they bounce if the site needs more than a few seconds to load. Slow sites also rank lower. We build fast so you hold onto both the visitor and the ranking." },
      { title: "It can't absorb a severe-weather surge", body: "When tornadoes and hail push across Bibb and Houston counties, contractor sites take a flood of traffic, and the slow ones stall or hide the call button at the worst possible moment. We build sites that stay fast and keep converting under load, so you capture that demand rather than lose it." },
    ],
    servicesHeading: "What's inside an OnwardCraft Macon website",
    services: [
      { name: 'Custom design', desc: "No off-the-shelf templates. A site shaped around your trade, your coverage area, and the jobs you genuinely want to win." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, since that is where nearly all your Macon traffic lives. Fast, thumb-friendly, and easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, unmistakable call buttons, and lead forms placed where homeowners actually use them. Every page carries a next step." },
      { name: 'Copy that sells', desc: "Language that meets worried homeowners where they are and books the job, not filler that reads like every other contractor." },
      { name: 'Local SEO foundation', desc: "Built to rank from the first line of code: clean structure, schema, fast load, and pages ready for each community." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load quickly and clear Google's performance checks, which protects both your conversions and your rankings." },
      { name: 'Surge-ready under load', desc: "Built to stay fast and keep the call button front and center when severe-weather traffic spikes, the very moment that turns visitors into your biggest jobs.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts toward AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your coverage area, your best jobs, and your competitors, then plan the site around booking more of the work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert, and you review and shape it before a single line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write copy that sells, keeping the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed all dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it according to what is actually converting." },
    ],
    pricing: {
      heading: 'Transparent Macon web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A tight, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A larger site for established contractors running several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Storm-surge ready'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location operations.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Macon?', a: "Most contractor sites with us run $2,000 to $8,000 as a one-time build, set by page count and integrations. The tiers sit above: fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A tight site lands around 2 to 4 weeks; a larger custom build runs 4 to 8. We hand you a firm timeline up front and keep you posted through each stage." },
      { q: 'Will my site handle a severe-weather traffic spike?', a: "Yes, and in middle Georgia that is no small thing. When tornadoes and hail strike, contractor sites take a surge of traffic, and the slow ones drop leads exactly when demand peaks. We build fast and keep the call button obvious, so your site converts under load rather than stalling." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and pages ready for each community. The build gets you positioned to rank; pairing it with our SEO service is how you climb the contested Macon terms." },
      { q: 'Do I own the website?', a: "Entirely. You own the site, the domain, and the content. No hostage situations, no platforms you cannot exit." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, since that is where nearly all your Macon traffic originates. Quick load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We choose the platform that suits your needs and that you can manage yourself, usually WordPress or Webflow. We recommend the right fit in your free consult and lay out the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security afterward." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project at a fixed price. Any ongoing maintenance or SEO stays month-to-month, and you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear view of what your current site is costing you in lost leads, what high-converting Macon Web Design should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'macon', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Macon Website Redesign | OnwardCraft',
    metaDescription:
      'Macon Website Redesign done with a careful, SEO-safe migration: faster mobile-first rebuilds that convert more visitors without losing your rankings.',
    eyebrow: 'Website Redesign · Macon-Bibb County',
    h1: 'Macon Website Redesign done with a careful, SEO-safe migration that keeps your rankings',
    h2Exact: 'Macon Website Redesign Company',
    heroSubhead:
      "A dated site quietly costs you jobs every week: slow, awkward on a phone, easy to scroll past. We redesign Macon contractor sites to convert more and load faster, then migrate with care so you keep every bit of ranking you have already earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Macon Website Redesign tends to fail in one of two ways: the site looks sharper but converts no better, or it launches and the rankings disappear overnight. We avoid both. We rebuild contractor sites mobile-first for speed and conversions, build them to handle severe-weather traffic, and run an SEO-safe migration with the redirects and care that protect the traffic you already hold.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You safeguard SEO through a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, carrying over your schema, and testing everything on staging before launch. Handled correctly, a redesign holds your rankings and lifts them, because the new site loads faster, works mobile-first, and is better structured than the old one.",
    problemHeading: "Signs your Macon site is past due for a rebuild",
    painPoints: [
      { title: "It looks dated and drains your credibility", body: "On a high-ticket job, homeowners size you up by your site within seconds, especially the Mercer and Navicent professionals and the transferring families who have never heard your name. An old, cluttered layout quietly steers them to a competitor who looks more established, even when your work is the better work." },
      { title: "It's slow and clumsy on a phone", body: "If your site is awkward or slow on mobile, you lose most of your Macon visitors before they ever reach your offer. A rebuild designed mobile-first brings them back." },
      { title: "It can't keep pace when demand surges", body: "Traffic that never converts into calls is wasted, and an aging site that crawls under a severe-weather surge sheds leads at the exact moment they are worth the most. We rebuild for conversions and for the days your phone ought to be ringing nonstop." },
    ],
    servicesHeading: "What's inside an OnwardCraft rebuild",
    services: [
      { name: 'Redesign audit', desc: "We locate precisely what is draining your leads and rankings now, so the rebuild solves real problems instead of swapping colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled correctly so you retain the rankings and traffic you have already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, smarter call-to-action placement, and lead forms homeowners actually use. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals, which helps both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Reworked around the phone, where nearly all your Macon traffic lives." },
      { name: 'Brand refresh', desc: "A modern, credible look that matches the caliber of your work and the price of your jobs." },
      { name: 'Surge-ready rebuild', desc: "Rebuilt to stay fast and keep converting when severe-weather traffic spikes, so the new site captures your biggest jobs instead of choking on them.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search moves toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We dig into what is costing you leads and rankings, then chart a rebuild that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and stage every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and watch closely so rankings hold and rise rather than slip." },
      { name: 'Optimize', desc: "Post-launch tuning driven by what is converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Macon redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A tight redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A complete redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Storm-surge ready'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A ground-up rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Macon?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, set by size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not when it is done carefully, and that is precisely how we work. We map 301 redirects for every changed URL, hold onto content and metadata, carry over your schema, and test on staging first. Handled right, a redesign keeps your rankings and usually raises them." },
      { q: 'How long does a redesign take?', a: "A tight redesign takes roughly 3 to 5 weeks; a larger rebuild runs 5 to 9. You get a firm timeline up front and updates at every stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is a chore to update, brings in no leads, or stalls when severe-weather traffic surges, it is costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and sharpen your existing content, keep what is ranking, and handle the technical migration so nothing important slips away." },
      { q: 'Will the new site handle severe-weather traffic?', a: "Yes, and across middle Georgia that is a real factor. When tornadoes and hail strike, contractor sites take a surge of traffic, and the slow ones drop leads. We rebuild for speed and keep the call to action obvious so the site converts when demand peaks." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which raises both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Entirely: the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO stays month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what your Macon Website Redesign needs to fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const maconCity = {
  citySlug: 'macon', city: 'Macon', state: 'Georgia', stateAbbr: 'GA', metro: 'Macon-Bibb County',

  titleTag: 'Macon Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Macon marketing for contractors that fills your calendar: web design, SEO, and local SEO that get you found and booked, with leads you own, not rent.',

  eyebrow: 'Macon · Web Design, SEO & Lead Generation',
  h1: 'Macon marketing for contractors that fills your calendar',
  h2Exact: 'Macon Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for this middle-Georgia hub: arriving Robins families, century-old houses, and weather-driven demand. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Storm-season ready', 'No lock-in contracts'],
  primaryCta: 'Get my free Macon audit',

  intro:
    "Macon marketing for contractors comes down to competing for attention in middle Georgia's commercial center, where Mercer and Navicent professionals own older homes and thousands of Robins Air Force Base families arrive every year. As a Macon digital marketing agency built around the trades, we pair three pieces: a site that converts, SEO that ranks you for what homeowners search, and local SEO that lands you in the map results, all set before the next tornado or hail line sends demand climbing. Here is how we get Macon contractors found and booked.",
  aioQuestion: 'How do Macon contractors get more leads online?',
  aioAnswer:
    "Macon contractors gather more leads by pairing a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that takes the Google map results. Because Macon is a middle-Georgia hub that draws transferring Robins Air Force Base families and takes hard hits from spring tornadoes and hail, the contractors who look established and already rank before the weather turns capture the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Break into the three businesses Google clips to the map when middle Georgia searches \"near me.\" Usually the highest-return move a local shop can make, and how you collect both severe-weather and relocation demand.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the revenue keywords your customers really search, build something you own instead of renting traffic from ads, and track it in leads rather than vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to convert visitors into booked jobs and to stay quick when severe weather floods your phone, not brochures that sit idle.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild a dated site for speed and conversions, then migrate it carefully so you hold onto every bit of ranking you have already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Macon?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients pair a high-converting website with SEO and local SEO so they rank, convert, and own their leads, and stand ready when severe weather rolls in." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We focus on home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contracting, so we understand after-hours calls, weather-driven demand, and insurance work." },
    { q: 'Why does severe-weather season matter for my marketing?', a: "When tornadoes, hail, and high wind cross middle Georgia in spring, demand for roofing and restoration jumps overnight and the backlog can stretch for months. Ranking takes months to build, so the contractors already visible before the storm claim that work. We get you positioned ahead of the season." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO run month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Macon areas do you serve?', a: "All of Macon-Bibb and the surrounding territory: Intown, Vineville, Shirley Hills, Ingleside, North Macon, along with Warner Robins, Centerville, Bonaire, Byron, Forsyth, Gray, Perry, and more." },
    { q: 'Where should I start?', a: "Start with a free Macon audit. We review your website, your rankings, and your map presence, then point to the one or two moves in your Macon marketing for contractors that will bring in the most work fastest. No slide deck, just a plan." },
  ],
};
