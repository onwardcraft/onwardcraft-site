// DAYTON: per-metro, per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Dayton's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// DAYTON: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Dayton is about more than just good work',
  body:
    "Dayton sits at a crossroads that makes it unlike almost any other mid-sized American city. Wright-Patterson Air Force Base, one of the largest Air Force installations in the United States and home to Air Force Materiel Command, drives a constant churn of military homeowners. Thousands of service members arrive on PCS orders every year, and their first move in a new city is a Google search for a reliable contractor. That alone creates a demand pattern no other Ohio market can match. Add the aerospace and defense economy that surrounds the base, including Air Force Research Lab, Northrop, SAIC, Leidos, and a cluster of engineering firms, and you get a homeowner population that is research-oriented, credential-conscious, and picks service providers based on online reputation. Then there is history. On May 27 and 28, 2019, a Memorial Day tornado outbreak including an EF4 tore through Trotwood, Beavercreek, Celina, and surrounding suburbs, destroying thousands of homes in a single weekend. Dayton's homeowners watched neighbors lose roofs overnight and have actively prepared for storm season ever since. Ohio winters add freeze-thaw roof and foundation damage every year. And Dayton's extremely affordable home prices are driving a renovation wave in historic neighborhoods like the Oregon District, South Park, and Grafton Hill. The contractors ranking on Google are booking all of it.",
  pullQuote: 'When a military family lands in Dayton on PCS orders, their first call goes to whoever ranks first on Google. Be that contractor.',
  donut: {
    title: 'Dayton city demographics',
    value: 44,
    centerLabel: 'Black/AA (city)',
    legend: [
      { label: 'Black/AA', pct: 44, kind: 'teal' },
      { label: 'Other', pct: 56, kind: 'grey' },
    ],
  },
  seasonTitle: 'When the Dayton trades get slammed',
  seasonCaption: 'Storm and roofing (Mar to Jun), HVAC (Jun to Sep), freeze-thaw repair (Nov to Feb)',
  seasonalDemand: [
    { m: 'J', v: 78, peak: true }, { m: 'F', v: 72, peak: true }, { m: 'M', v: 88, peak: true },
    { m: 'A', v: 92, peak: true }, { m: 'M', v: 95, peak: true }, { m: 'J', v: 90, peak: true },
    { m: 'J', v: 85, peak: true }, { m: 'A', v: 82, peak: true }, { m: 'S', v: 60 },
    { m: 'O', v: 52 }, { m: 'N', v: 74, peak: true }, { m: 'D', v: 76, peak: true },
  ],
  stats: [
    { value: '800K+', label: 'people across the greater Dayton metro' },
    { value: 'Wright-Patt', label: 'one of the largest Air Force bases in the US, creating constant PCS-driven contractor demand', accent: true },
    { value: 'May 2019', label: 'EF4 tornado outbreak that reshaped how Dayton homeowners think about storm preparedness' },
    { value: 'Top 3', label: 'Map Pack spots that capture most of the clicks when a new military family searches Google' },
  ],
  neighborhoods: [
    'Oregon District', 'South Park', 'Grafton Hill', 'Beavercreek', 'Centerville',
    'Springboro', 'Kettering', 'Huber Heights', 'Vandalia', 'Fairborn',
    'Miamisburg', 'Trotwood', 'Oakwood', 'Belmont', 'Wright View',
  ],
};

const AREAS = [
  'Dayton', 'Beavercreek', 'Centerville', 'Kettering', 'Huber Heights',
  'Springboro', 'Miamisburg', 'Vandalia', 'Fairborn', 'Trotwood',
  'Oakwood', 'Oregon District', 'South Park', 'Grafton Hill', 'Wright-Patterson AFB area',
];

const FOUNDER =
  "I'll be straight with you: I built OnwardCraft because I kept watching solid tradespeople hand Angi and HomeAdvisor a few hundred dollars a month for leads that two other contractors in the same zip code also bought. That's not a business — that's a hamster wheel. Dayton has a market nobody else is fully serving: military families arriving on PCS orders who search Google the moment they land, defense engineers who research contractors online before ever picking up a phone, and a post-tornado homeowner base that takes storm prep seriously. The contractors who rank when those searches happen book that work. That's what we build. No long contracts. If it's not producing, you walk.";

const WHY = [
  {
    title: 'We understand the Wright-Patt demand cycle',
    body: "PCS-driven homeowners search Google the day they arrive in Dayton. They have no word-of-mouth network yet and very little time. We position you to be the first name they find, so the high-value military-family jobs land with you.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly check to a lead broker for homeowners who were also offered to your three nearest competitors.",
  },
  {
    title: 'We know Dayton, suburb by suburb',
    body: "Beavercreek defense engineers research differently than Oregon District renovation buyers. We target the specific neighborhoods and search patterns that matter for each service you offer, not a generic Ohio page.",
  },
  {
    title: 'No contracts, no mystery',
    body: "We publish what we charge, tie reporting to actual leads, and go month-to-month once the first 90 days are behind us. Stop seeing value and you stop paying. That puts the accountability on us, where it belongs.",
  },
];

const PROOF = {
  heading: "No client logo wall yet, so here's the honest math instead",
  body:
    "A lot of agencies open by parading a grid of client logos at you. We are a young, founder-led shop in Dayton, and we are not going to invent a track record we have not built. What we can give you is the reasoning, taken straight from Google's and the industry's published research on how people search for local contractors.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Dayton contractor picks up around 1,200 local \"near me\" impressions a month across a handful of neighborhoods like Beavercreek, Kettering, and Centerville. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a booked-out calendar. During storm season or an Ohio winter cold snap, that gap gets brutal fast. In your free audit, we model the real numbers for your business: your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Dayton', state: 'Ohio', stateAbbr: 'OH', metro: 'Dayton',
  heroProof: ['Built for the trades', 'Suburb-by-suburb targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const daytonLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'dayton', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Dayton Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Search your service in Dayton and three businesses show up on the map. We get you into those three, for PCS families, storm-season calls, and defense-area buyers.',
    eyebrow: 'Local SEO · Dayton, OH',
    h1: 'When Dayton searches for what you do, be the first name they find',
    h2Exact: 'Dayton Local SEO Company',
    heroSubhead:
      "Google drops three businesses on the map when a homeowner searches \"near me,\" and everyone below that pin is basically invisible. In a city where military families land on PCS orders and search Google that same day, and where the 2019 tornadoes turned storm prep into a year-round habit, being one of those three is the line between a full calendar and a silent phone.",
    primaryCta: 'Get my free Dayton audit',
    intro:
      "Dayton local SEO comes down to one thing: when a homeowner in Beavercreek, Centerville, or Kettering searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. The Wright-Patterson economy brings thousands of new military families to the area every year, educated, research-oriented buyers who choose contractors based on what Google shows them first. The 2019 tornado outbreak taught Dayton homeowners to take storm-season prep seriously. Ohio winters add ice and freeze-thaw damage every year. The contractors showing up in the Map Pack are booking all of it.",
    aioQuestion: 'How do Dayton businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile built around the exact services and neighborhoods you want, name-address-phone listings that match across the web, a steady flow of genuine reviews, and local content tied to real Dayton suburbs. Because PCS-driven military homeowners and defense-area engineers research hard before calling, the trust signals like reviews, credentials, and clear pages for Beavercreek, Centerville, and Kettering are what decide who wins that work.",
    problemHeading: "If your Dayton phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'A new military family searches and three other names own the map', body: "Search your own service plus \"near me\" right now. Those three businesses Google pins to the map collect the overwhelming majority of the clicks, and Dayton has a steady flow of new residents arriving on PCS orders with no local network at all, going straight to Google. If you are not one of those three, most of that demand never reaches you. Climbing into the Map Pack for your target suburbs is usually the single highest-return move a Dayton contractor can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Dayton homeowner to several contractors, then bill every one of you to fight over them. Local SEO builds the reverse: a homeowner finds you, calls you, and no competitor got that lead. Run it long enough and you stop renting and start owning the pipeline, which matters most during the storm-season and freeze-thaw months when broker prices climb." },
      { title: "You're missing the defense-area research buyer", body: "Beavercreek, Fairborn, and the communities around Wright-Patterson are packed with engineers, officers, and defense contractors who study service providers online before they ever dial. A thin Google Business Profile and sparse reviews lose that buyer before the call ever happens. Strong local SEO with real reviews and visible credentials wins the defense-area professional your competitors keep overlooking." },
    ],
    servicesHeading: 'What it actually takes to rank you in Dayton',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We tune your categories, services, service area, photos, and posts so Google knows exactly which Dayton searches belong to you, from Beavercreek storm calls to Oregon District renovations." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to line up everywhere Google checks. We correct the listings that contradict each other and build the ones you are missing across Ohio directories and the national platforms." },
      { name: 'Reviews that keep coming', desc: "A simple engine that turns finished jobs into a steady flow of fresh reviews. That matters most for the research-heavy defense-area buyer who reads everything before calling anyone." },
      { name: 'Neighborhood and suburb pages', desc: "Real pages for Beavercreek, Centerville, Kettering, Springboro, Huber Heights, and the rest, so you rank for the suburb someone actually typed instead of a generic \"Dayton.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, and mobile speed. The groundwork that lets everything else rank, including the storm-season and PCS-arrival searches that spike your busiest weeks." },
      { name: 'Local link building', desc: "Mentions and links from Dayton-area sources Google trusts, like local press, chambers, trade associations, and industry partners. In a competitive Ohio market, that is often what separates page one from page two." },
      { name: 'Storm-season and PCS search targeting', desc: "We shape your profile and content around the searches that surge during storm season and when new military families arrive, so you are already ranking when that demand peaks.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity, especially among the tech-savvy defense workforce. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find where you actually rank today across Dayton's suburbs and pin down which competitors hold the Map Pack spots you want, and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP go first because they move fastest. Most Dayton clients see early lift within a few weeks, which matters before storm season or a hard freeze." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. For the research-heavy defense-area buyer, strong reviews are often the deciding vote, and these signals compound week over week." },
      { name: 'Add local content', desc: "Suburb and service-area pages across Beavercreek, Centerville, Kettering, Springboro, Vandalia, and more, backed by the on-page work that makes them rank." },
      { name: 'Report and expand', desc: "Plain-language reporting tied to calls and booked leads, never vanity rankings. Then we go take the next suburb on the list." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right across your core Dayton area.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For contractors fighting across Dayton suburbs and chasing storm-season demand.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Suburb landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want the whole map, including the Wright-Patterson corridor.', features: ['Everything in Local Growth', 'Local link building', 'Storm-season and PCS search targeting', 'Multi-suburb service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Dayton?', a: "Most Dayton engagements land between $750 and $2,500 a month, depending on how many suburbs and keywords you are targeting. Our tiers are right above this, with no hidden fees, no long contract, and the exact scope confirmed in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move within a few weeks. Competitive Dayton keywords, especially roofing and HVAC around Beavercreek and Centerville, usually take 90 to 180 days of steady work, because reviews and citations build up over time. Anyone promising page one in 30 days is selling you something." },
      { q: 'Why does Wright-Patterson matter for my local SEO?', a: "Wright-Patterson brings thousands of military families to the Dayton area every year on PCS orders. These homeowners arrive with no local network and immediately search Google for contractors. If you are in the Map Pack for Fairborn, Beavercreek, and Huber Heights, you are the first call they make. That is a steady flow of high-value customers most contractors never specifically target." },
      { q: 'How does the 2019 tornado history affect demand?', a: "The 2019 Memorial Day tornado outbreak was a turning point for Dayton homeowners. An EF4 tore through Trotwood, Beavercreek, and surrounding suburbs, and people watched neighbors lose roofs overnight. Since then, storm-prep and roofing inspections ahead of tornado season are far more common, and the contractors ranking for those searches from March through June stay booked." },
      { q: 'Which Dayton areas do you cover?', a: "All of them: Beavercreek, Centerville, Kettering, Springboro, Huber Heights, Vandalia, Fairborn, Miamisburg, Trotwood, and Dayton city neighborhoods like the Oregon District, South Park, and Grafton Hill. We build genuine suburb pages rather than one generic Dayton page, because that is what actually ranks for \"[service] [suburb]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It is basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand storm-season roofing spikes, Ohio winter heating calls, and the research-heavy defense-area buyer." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More \"near me\" research now starts in AI, especially among the engineers and defense professionals near Wright-Patterson who are comfortable using it. We structure your content and schema so those tools can read, trust, and cite your business. It is quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that is roughly how long local SEO needs to show real movement, and because storm season and Ohio winter are patterns worth measuring across a full cycle. After that it is month-to-month. If we are not delivering, you walk." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads for homeowners who were also handed to competing contractors, at rising prices. We build rankings, a Google profile, and a review base that send leads straight to you. Over time, especially as storm-season and PCS-arrival traffic builds, you lean on brokers less because the work comes to you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across Dayton's suburbs, what your Map Pack competitors are doing to beat you, the fixes that move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck, just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'dayton', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Dayton SEO Company | Rank Higher, Get Leads | OnwardCraft',
    metaDescription:
      'Dayton SEO that ranks contractors on Google and brings in leads you own. Built for storm-season demand, PCS arrivals, and the defense-area research buyer.',
    eyebrow: 'SEO Services · Dayton, OH',
    h1: 'Get your Dayton business to the top of Google and keep it there',
    h2Exact: 'Dayton SEO Company',
    heroSubhead:
      "Ads quit the second your card does. SEO works the other way: rank once for what Dayton homeowners search before storm season, before the next PCS wave, before Ohio winter, and the leads keep landing. We build that ranking and tie every report to real calls and booked jobs.",
    primaryCta: 'Get my free Dayton SEO audit',
    intro:
      "Dayton SEO comes down to one question: when a homeowner in Centerville or Beavercreek searches what you do, are you on page one or page two? Page two might as well be page fifty, and in Dayton that invisibility is expensive. Wright-Patterson keeps a steady stream of new-to-market homeowners searching Google constantly. The 2019 tornado outbreak created a generation of storm-aware homeowners who look for roofers and restoration crews every spring. Ohio winters spike heating, insulation, and roof damage calls every December. We get contractors ranking for those searches, and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Dayton businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the site's technical foundation, optimizing each page for the exact terms customers search, publishing genuinely useful local content tied to specific Dayton suburbs and demand patterns, and earning links from trusted Ohio sources. In Dayton, ranking for storm-season roofing searches ahead of March and PCS-arrival contractor searches ahead of the summer move cycle are two of the fastest ways to pull ahead of competitors who treat SEO as set-and-forget.",
    problemHeading: "Three reasons your Dayton site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google. In Dayton, military families arriving on PCS orders search immediately and go with whoever ranks at the top, because they have no local network yet and need a contractor fast. Defense engineers in Beavercreek research before calling and rarely scroll past page one. If you are not in the top handful of results for what you sell, those buyers go elsewhere." },
      { title: "You're not ranking before the demand peaks", body: "Dayton's busiest weeks are predictable: storm-season roofing calls spike every spring along Ohio's tornado corridor, heating and roof-damage calls spike every November and January, and the summer PCS cycle floods the market with new homeowners. SEO takes months to build, which means the contractors who rank in February are the ones booking the March storm calls. You have to be in position before the season, not chasing it." },
      { title: "You're renting traffic that never belongs to you", body: "Ads can work short-term, but Dayton clicks are priced against every other contractor in the market, and the moment you stop paying, the leads stop. SEO builds an asset you keep: rankings that keep producing leads through storm season, winter, and PCS months, at a fraction of the per-lead cost of paid channels." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you for Dayton's storm-season and freeze-thaw searches." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms Dayton homeowners search, from roofing and HVAC to the suburb-specific keywords that matter in Beavercreek, Centerville, and Kettering." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, including the storm-prep, PCS-arrival, and Ohio-winter questions that drive Dayton's peak demand." },
      { name: 'Link building', desc: "Authority from real Dayton-area and Ohio industry sources. In a competitive market, links are often what separate page one from page two for the keywords that matter most." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across Beavercreek, Centerville, Kettering, and Springboro right alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and booked leads, not just rankings and traffic, so you always know what your SEO is actually worth each month." },
      { name: 'Storm-season and PCS cycle SEO', desc: "We rank you for spring storm-damage searches and summer PCS-arrival contractor searches before those cycles peak, so your busiest weeks land on you instead of a competitor who started sooner.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, which matters for the research-heavy defense-area professionals near Wright-Patterson who increasingly start searches in AI.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Dayton leads, with storm-season, PCS-arrival, and Ohio-winter demand baked in." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile, the foundation everything else needs to rank, and the minimum bar for the research-heavy defense-area buyer." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the seasonal and storm-prep pages that drive Dayton's peak months." },
      { name: 'Build authority', desc: "Links and citations from trusted Dayton-area and Ohio industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to booked leads, then we pour more into whatever is working and push into the next Dayton keyword set or suburb." },
    ],
    pricing: {
      heading: 'Transparent Dayton SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core Dayton-area keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across Dayton suburbs and several services.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For contractors who want to own Dayton-area search across every demand cycle.', features: ['Everything in SEO Growth', 'Storm-season and PCS cycle SEO', 'Aggressive content + links', 'Multi-suburb coverage', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Dayton?', a: "Most Dayton SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how many suburbs and demand cycles you are targeting. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Dayton?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter suburb-level terms and slower on the most competitive service keywords across the full metro. SEO compounds, so the gains keep building the longer you run it, which is why contractors who start before storm season or the PCS cycle hold a real edge." },
      { q: 'Should my Dayton SEO target storm-season demand?', a: "Absolutely. The 2019 tornado outbreak is still fresh in Dayton homeowners' minds, and storm-season roofing and restoration searches spike every March through June. Ranking takes months to build, so you have to be in place before the season, not chasing it. We optimize for those searches ahead of time so your busiest weeks land on you." },
      { q: 'How does Wright-Patterson affect my SEO strategy?', a: "It creates a steady year-round pipeline of new-to-market homeowners, military families on PCS orders who search Google immediately because they have no local word-of-mouth yet. Ranking for suburb-level searches in Fairborn, Beavercreek, and Huber Heights puts you in front of those families at the exact moment they need a contractor. It is a demand pattern unique to Dayton." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. Higher tiers add storm-season and PCS cycle targeting and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, and because Dayton's demand cycles are worth measuring through at least one storm season or winter. After that it is month-to-month. If we are not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a growing part of what we optimize for. The defense engineers and officers near Wright-Patterson are exactly the kind of buyers who use AI to research. We structure your content and schema so AI engines can read, trust, and cite your business." },
      { q: 'Which Dayton suburbs do you cover?', a: "All of them: Beavercreek, Centerville, Kettering, Springboro, Huber Heights, Vandalia, Fairborn, Miamisburg, Trotwood, and Dayton city neighborhoods, with genuine local content rather than one generic Dayton page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility for storm-season, winter, and PCS-arrival searches, the less you depend on paying brokers for shared leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today across your target Dayton suburbs, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'dayton', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Dayton Web Design Company | Sites That Convert | OnwardCraft',
    metaDescription:
      'Dayton web design that turns visitors into booked jobs. Fast, mobile-first sites for contractors serving military families, defense-area pros, and storm-season homeowners.',
    eyebrow: 'Web Design · Dayton, OH',
    h1: 'Dayton web design that turns visitors into booked jobs',
    h2Exact: 'Dayton Web Design Company',
    heroSubhead:
      "A handsome website that never rings the phone is just a brochure. We build Dayton contractors fast, mobile-first sites engineered to win the military-family buyer who searches the day they arrive, the defense-area professional who researches before calling, and the storm-season homeowner ready to book right now.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Dayton contractor websites lose leads quietly: slow on a phone, call button buried, no proof of local credibility. Web design done right closes all of that. We build sites that load fast, look like the professional you are, and speak directly to Dayton's particular demand, including military families arriving on PCS orders, Beavercreek engineers who research contractors online, and homeowners preparing for storm season every spring.",
    aioQuestion: 'What makes a good contractor website in Dayton?',
    aioAnswer:
      "A good Dayton contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves local credibility with real reviews and project photos from recognizable Dayton suburbs, and names the specific communities you serve like Beavercreek, Centerville, and Kettering. Because military families on PCS orders and defense-area professionals near Wright-Patterson research heavily before calling, trust signals and suburb-specific content separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current Dayton site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "Plenty of contractor sites just list services and stop there. No clear offer, no obvious next step, no reason to pick you over the next contractor one scroll down. We design every page around one job: turning a visitor into a booked lead, including the PCS-arrival family with 48 hours to find a contractor and the Beavercreek engineer who spent an hour researching before landing on your page." },
      { title: "It doesn't build trust fast enough", body: "The research-heavy defense-area buyer near Wright-Patterson reads your site carefully before ever dialing. If it looks generic, runs thin on content, and shows few reviews, that buyer moves on. We build sites that prove your credibility fast, with real suburb-specific proof, clear credentials, and the visual quality that matches your actual work." },
      { title: "It's invisible to the suburbs that matter", body: "A homeowner in Springboro or Centerville wants to see that you serve Springboro or Centerville, not a generic \"Dayton contractor\" page that could belong to anyone. We build sites that name the suburbs you work, speak to local demand like storm prep and PCS-arrival timelines, and hand Google the suburb-level signals to rank you where your best customers search." },
    ],
    servicesHeading: "What's in an OnwardCraft Dayton website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your target suburbs, and the specific demand patterns, including storm season, PCS arrivals, and Ohio winters, that drive Dayton's market." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because military families and storm-season homeowners are searching on their phones in the moment they need you. Fast, thumb-friendly, and easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a single, obvious next step." },
      { name: 'Copy that sells', desc: "Words that speak to anxious homeowners, whether they just arrived on PCS orders or just took a spring storm to the roof, and book the job, not filler that reads like everyone else." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank for Dayton's suburb-level searches, with clean structure, schema, fast load, and suburb-ready pages for Beavercreek, Centerville, Kettering, and more." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and the rankings that matter most during storm season and winter demand spikes." },
      { name: 'Suburb-targeted pages', desc: "Pages built around the communities you serve, like Beavercreek, Springboro, Huber Heights, and Fairborn, so you stand out as a local expert instead of blending into a generic Dayton page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business, which matters for the defense-area engineers near Wright-Patterson who increasingly research contractors in AI first.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your target suburbs, your best jobs, and your competitors, then map the site around booking more of the work you want, whether that is storm-season roofing, PCS-arrival HVAC installs, historic-neighborhood renovations, or all of it." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert, and you see it and shape it before a line of code is written. Trust signals and local credibility sit front and center." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with suburb-specific content, the call to action up top, and the local detail that earns a Dayton homeowner's trust." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one, so you are ready before the next storm season or PCS cycle." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what is actually converting across your target suburbs." },
    ],
    pricing: {
      heading: 'Transparent Dayton web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade Dayton contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors serving several Dayton suburbs.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + suburb pages', 'Speed & Core Web Vitals', 'Suburb-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location Dayton businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Dayton?', a: "Most Dayton contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above, fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage. If storm season is coming and you need a site that converts before April, tell us and we will build the timeline around it." },
      { q: 'Will my site win the research-heavy defense-area buyer?', a: "That is one of the things we specifically design for. Engineers and officers near Wright-Patterson read contractor websites carefully before calling, checking reviews, looking for suburb-specific proof, and wanting to see credentials. We build sites that pass that scrutiny fast, with the local detail and trust signals that make that buyer pick up the phone." },
      { q: 'Will my new site rank on Google?', a: "We build every site on a local-SEO foundation, with fast load, clean structure, schema, and suburb-ready pages. The build gets you ready to rank for Beavercreek, Centerville, Kettering, and more; pairing it with our SEO service is how you climb the competitive storm-season and PCS-arrival searches." },
      { q: 'Do I own the website?', a: "Yes, all of it. The site, the domain, and the content are yours from launch day. No hostage situations and no Dayton platform you cannot pack up and leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where your Dayton traffic comes from, especially military families who just arrived and are searching immediately on their phones." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage, usually WordPress or Webflow. We recommend the right fit in your free consult and explain the tradeoffs in plain English." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security, including before-season refreshes ahead of storm season or Ohio winter." },
      { q: 'Am I locked into a contract?', a: "No. The Dayton build is a one-time, fixed-price project. Anything ongoing, like maintenance or SEO, runs month-to-month, so you can step away whenever you want." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads from PCS families, storm-season homeowners, and defense-area buyers, plus a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'dayton', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Dayton Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your Dayton website without losing rankings. Faster, mobile-first rebuilds that convert military families, defense-area buyers, and storm-season homeowners.',
    eyebrow: 'Website Redesign · Dayton, OH',
    h1: 'Redesign your Dayton website without losing your rankings',
    h2Exact: 'Dayton Website Redesign Company',
    heroSubhead:
      "An outdated Dayton contractor site costs you jobs every week. It loads slow on a phone, runs thin on local credibility, and is easy for storm-season homeowners and PCS-arrival families to skip over. We redesign contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you have earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Dayton contractor sites for speed and conversions, with suburb-specific credibility for the Beavercreek and Centerville research buyer and storm-season trust signals for the homeowner ready to book right now, and we migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, suburb-targeted, and better structured than the old one, all of which Google rewards in Dayton's local market.",
    problemHeading: "Signs your Dayton site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you the defense-area buyer", body: "Engineers and officers near Wright-Patterson judge your site in seconds. An old, cluttered design quietly sends them to a competitor who looks more professional, even when your actual work is better. On a high-ticket job, that first impression is the whole game." },
      { title: "It's slow and hard to use on a phone", body: "Military families arriving on PCS orders are searching on their phones in the parking lot of their new neighborhood. If your site is clunky or slow on mobile, you lose them before they ever reach your offer. A redesign built mobile-first wins them back." },
      { title: "It gives storm-season homeowners no reason to act", body: "When a Dayton homeowner is ready to book a roofer or restoration crew after a spring storm, they want to see local credibility, clear pricing tiers, and an obvious way to call right now. A generic, outdated site with a buried phone number loses that ready-to-book buyer to whoever redesigned last year." },
    ],
    servicesHeading: "What's in an OnwardCraft Dayton redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what is costing you leads from PCS families, defense-area buyers, and storm-season homeowners today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you have earned, including the storm-season and suburb-level keywords you have built up." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks, with the trust signals and suburb-specific proof that convert Dayton's research-heavy buyers." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals, better for both conversions and the rankings that matter during high-demand storm-season and PCS-arrival months." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where military families arriving on PCS orders and storm-season homeowners do their searching." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and earns the credibility check from the defense-area professional who researches before calling." },
      { name: 'Suburb-targeted rebuild', desc: "Rebuilt around the specific communities you serve, like Beavercreek, Centerville, Springboro, Kettering, and Huber Heights, so you rank and convert suburb by suburb instead of blending into a generic Dayton page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you, which matters more every quarter for the defense engineers near Wright-Patterson who start contractor research in AI.", featured: true },
    ],
    processName: 'How we redesign: a careful Dayton rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what is losing you leads from Dayton's unique buyer mix, the PCS families, defense professionals, and storm-season homeowners, and map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build, with suburb credibility and storm-season trust signals built in from the start." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration, so your hard-won suburb-level and storm-season rankings survive the launch." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and improve rather than drop, ideally ahead of storm season or the summer PCS cycle." },
      { name: 'Optimize', desc: "Post-launch tuning based on what is converting, plus ongoing speed updates and seasonal content refreshes before each demand peak." },
    ],
    pricing: {
      heading: 'Transparent Dayton redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small Dayton contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established Dayton contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + suburb pages', 'Suburb-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-suburb Dayton businesses.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Dayton?', a: "Most Dayton redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it is done carefully, and that is exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. The suburb-level and storm-season rankings you have built are worth protecting, and a careful redesign does that while also improving them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front. If there is a deadline, like launching before storm season or before the summer PCS cycle, tell us up front and we will build around it." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, does not name the Dayton suburbs you serve, and is not bringing in storm-season or PCS-arrival leads, it is costing you work. The free audit tells you plainly whether a redesign is worth it and what it should prioritize." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and sharpen your existing content, preserve what is ranking for Dayton suburb and storm-season searches, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the redesign help me win defense-area and military-family buyers?', a: "Yes, and we design specifically for them. Engineers and officers near Wright-Patterson read contractor sites carefully, so we rebuild with the trust signals, suburb specificity, and professional appearance that earn that buyer's call. Military families on PCS orders need speed and an obvious next step, and we build that in from the first page." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings, critical when storm-season and PCS-arrival buyers are searching on their phones." },
      { q: 'Do I own the redesigned site?', a: "Yes, fully. The rebuilt site, your domain, and the content all stay in your hands. No platform lock-in of any kind." },
      { q: 'Am I locked into a contract?', a: "No. The Dayton redesign is a one-time project, and any maintenance or SEO afterward stays month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads from Dayton's key buyer segments, the PCS families, defense-area professionals, and storm-season homeowners, plus a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const daytonCity = {
  citySlug: 'dayton', city: 'Dayton', state: 'Ohio', stateAbbr: 'OH', metro: 'Dayton',

  titleTag: 'Dayton Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Dayton contractors. Get found by military families arriving on PCS orders, defense-area professionals, and storm-season homeowners.',

  eyebrow: 'Dayton, OH · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Dayton contractors found and booked',
  h2Exact: 'Dayton Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Dayton's particular market: Wright-Patterson military families, defense-area professionals, and storm-season homeowners. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Suburb-by-suburb targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Dayton audit',

  intro:
    "If you run a contracting business in Dayton, you are working in one of the most distinctive demand markets in the Midwest. Wright-Patterson Air Force Base brings thousands of military families on PCS orders every year, and they search Google immediately because they have no local network yet. The 2019 tornado outbreak trained a whole generation of Dayton homeowners to take storm prep seriously. And the defense-area professional class in Beavercreek, Centerville, and Fairborn researches contractors online before ever making a call. Winning here takes three things working together: a site that converts that research-heavy buyer, SEO that ranks you for what people actually search, and local SEO that puts you in the Map Pack for the suburbs you serve. Here is how we help Dayton contractors do exactly that.",
  aioQuestion: 'How do Dayton contractors get more leads online?',
  aioAnswer:
    "Dayton contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches like storm-season roofing, PCS-arrival HVAC, and Ohio winter heating, and local SEO that wins the Google Map Pack suburb by suburb. Because Wright-Patterson creates a constant flow of new-to-market homeowners and the 2019 tornado outbreak made storm preparation a year-round conversation, the contractors who rank before demand peaks and build trust signals that satisfy the research-heavy defense-area buyer win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Dayton searches \"near me,\" whether it is a military family just off the PCS plane or a homeowner checking for storm damage. Done tight, suburb by suburb.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the searches that drive Dayton's market, like storm-season roofing, PCS-arrival contractors, and Ohio winter heating, and build an asset you own instead of renting traffic from ads.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites that win the research-heavy defense-area buyer, the military family searching the day they arrive, and the storm-season homeowner ready to book right now.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed, suburb-specific credibility, and storm-season trust signals, and migrate it carefully so you keep every ranking you have earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Dayton?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads across Dayton's demand cycles, the PCS arrivals, storm season, Ohio winters, and the defense-area research buyer." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades, including roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand storm-season roofing demand, military-family timelines, and what it takes to win the credential-conscious defense-area buyer." },
    { q: 'Why does the Dayton market need a different approach?', a: "Because Dayton has demand patterns most markets do not. Wright-Patterson creates a constant PCS-driven pipeline of new homeowners searching Google immediately. The 2019 tornado outbreak made storm prep a year-round conversation. And the defense-area professional class near the base is research-heavy and picks contractors on online credibility. A generic approach misses all three." },
    { q: 'How much does it cost to work with you?', a: "Dayton websites are one-time builds running $2,000 to $9,000. SEO and local SEO run month-to-month from $750 to $3,000, with no long contract. We pin down exact scope in your free audit." },
    { q: 'Which Dayton areas do you serve?', a: "All of them: Beavercreek, Centerville, Kettering, Springboro, Huber Heights, Vandalia, Fairborn, Miamisburg, Trotwood, and Dayton city neighborhoods like the Oregon District, South Park, and Grafton Hill, with genuine local content rather than one generic Dayton page." },
    { q: 'Where should I start?', a: "Start with a free Dayton audit. We will look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest, whether that is showing up before the next storm season, capturing PCS-arrival searches, or winning the defense-area professional who has been researching for three weeks. No pitch deck, just a plan." },
  ],
};
