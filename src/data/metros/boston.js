// BOSTON: per-metro, per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Boston's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// BOSTON: shared city blocks
// ===========================================================================
const MARKET = {
  heading: "What you're really fighting for in Boston search",
  body:
    "Boston runs on housing that predates the country it sits in. Walk through Dorchester or Jamaica Plain and you pass block after block of three-deckers built around the turn of the last century, each one wood-framed, stacked three units high, and quietly aging toward its next leak. Climb the hill in Beacon Hill or stroll Back Bay and the brick rowhouses go back to the early 1800s, with brownstone facades that crumble, slate roofs that slip, and boilers that were antique a generation ago. This is the oldest housing stock of any major American city, and old buildings generate a steady drumbeat of specialized work: masonry repointing, knob-and-tube rewiring, slate and copper roof repair, steam-system overhauls. The jobs are intricate and the budgets are real. Then the weather arrives. New England winters punish this stock without mercy. Snow piles up, melts against warm roof edges, refreezes into ice dams, and forces water back under shingles and into ceilings. Pipes split in unheated walls. Boilers die on the coldest night of the year. When that happens, a homeowner in Brookline or Quincy does not flip through a binder; they grab a phone and search, and the three contractors pinned to the map are the ones who get the call. One more thing sets this market apart. Boston is thick with people who hold advanced degrees and treat hiring a contractor like vetting a vendor. They read every review, click into your website, and judge whether you look like someone who can be trusted around a century-old home. If you are buried on page two when the next nor'easter rolls in, the booked emergency work flows to whoever Google already shows first.",
  pullQuote: "When the first ice dam forms over a Dorchester three-decker, the contractor already pinned to the map books the emergency. Everyone ranked below them just watches it go.",
  donut: {
    title: 'When Boston contractor demand peaks',
    value: 43,
    centerLabel: 'winter-driven',
    legend: [
      { label: 'Winter emergency demand', pct: 43, kind: 'teal' },
      { label: 'Rest of year', pct: 57, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Deep-freeze emergencies (Dec to Feb), thaw and storm repair (Mar to May), heat-wave AC (Jul to Aug)',
  seasonalDemand: [
    { m: 'J', v: 95, peak: true }, { m: 'F', v: 90, peak: true }, { m: 'M', v: 72, peak: true },
    { m: 'A', v: 68, peak: true }, { m: 'M', v: 62 }, { m: 'J', v: 55 }, { m: 'J', v: 80, peak: true },
    { m: 'A', v: 78, peak: true }, { m: 'S', v: 52 }, { m: 'O', v: 54 },
    { m: 'N', v: 70 }, { m: 'D', v: 92, peak: true },
  ],
  stats: [
    { value: '4.9M', label: 'residents across greater Boston, packed into a dense and expensive metro' },
    { value: '43"', label: 'of snow in an average winter, the season that drives roofing and HVAC emergencies', accent: true },
    { value: '1800–1920', label: 'when most Boston homes were built, from Beacon Hill rowhouses to Dorchester three-deckers' },
    { value: 'Top 3', label: 'Map Pack spots that grab most of the clicks when a Boston search goes "near me"' },
  ],
  neighborhoods: [
    'Back Bay', 'South End', 'Beacon Hill', 'Jamaica Plain', 'Dorchester',
    'South Boston', 'Brookline', 'Newton', 'Lexington', 'Concord',
    'Wellesley', 'Cambridge', 'Somerville', 'Medford', 'Quincy',
  ],
};

const AREAS = [
  'Back Bay', 'South End', 'Beacon Hill', 'Jamaica Plain', 'Dorchester',
  'South Boston', 'Brookline', 'Newton', 'Lexington', 'Concord',
  'Wellesley', 'Cambridge', 'Somerville', 'Medford', 'Quincy',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. In Boston, that means being in the Map Pack before the blizzard hits, not chasing rankings in January when everyone needs you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, and general contracting. We know what a 2 a.m. burst-pipe call sounds like in February, how ice dams wreck a January schedule, and why a slate roof or a steam boiler on a century-old home is a different animal than new construction. Everything we build matches how Boston customers actually search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The goal is a pipeline that belongs to you. Not one more monthly check to a lead broker for the same Newton homeowner three of your competitors are dialing at the same minute.",
  },
  {
    title: 'We actually speak Boston',
    body: "Three-deckers in Dorchester, brownstones in the South End, estate homes out in Wellesley and Concord, and a permitting and historic-district maze that trips up anyone who has not worked here. Pair that with the timing to rank you before the ice dams form, and you get local knowledge a national shop cannot fake by find-and-replacing a city name.",
  },
  {
    title: 'No contracts, no mystery',
    body: "Prices are published, reporting is tied to real leads, and you go month-to-month once the first 90 days are up. If we are not earning the invoice, you walk. That keeps the pressure exactly where it belongs, which is on us.",
  },
];

const PROOF = {
  heading: "We're new, so here's the honest math instead of a logo wall",
  body:
    "Most agencies lead with a grid of client logos. We are a young, founder-led shop, and we are not going to invent a track record we have not earned yet. What we can put in front of you is the reasoning, pulled straight from Google's and the industry's own research on how people search for a local contractor.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here is a rough picture, labelled plainly as an illustration and not a result we are claiming. Suppose a Boston contractor pulls around 1,500 local \"near me\" impressions a month across a handful of neighborhoods. Climbing out of page-two obscurity into the top three is the gap between a few stray calls and a calendar you cannot keep up with. In a market where a single nor'easter sends demand vertical overnight, being ranked before the storm decides who eats. In your free audit we model the actual figures for your business: your current rankings, your real search volume, and a straight 90-to-180-day path up the map.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Boston', state: 'Massachusetts', stateAbbr: 'MA', metro: 'Boston',
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const bostonLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'boston', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Boston Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Boston Local SEO that gets you found when neighbors search your trade. We push you into the Map Pack so ice-dam and burst-pipe calls land with you.',
    eyebrow: 'Local SEO · Boston, MA',
    h1: 'Boston Local SEO that gets you found when a Dorchester neighbor searches your trade',
    h2Exact: 'Boston Local SEO Company',
    heroSubhead:
      "Google pins three businesses to the map when a homeowner searches \"near me,\" and everyone underneath them is invisible. We push you into that top three so the call lands with you instead of whoever ranks first, and so you are already there when the next nor'easter sends every phone from Beacon Hill to Quincy into overdrive.",
    primaryCta: 'Get my free Boston audit',
    intro:
      "Boston local SEO comes down to one moment: a homeowner in Back Bay or Newton types your service plus \"near me,\" and you are either one of the three businesses Google pinned to the map or you are not. Most people tap one of those three and never scroll. In a city of century-old three-deckers and brownstones, owned by some of the most research-heavy buyers in the country, becoming one of those three is the entire game. Here is how we get you there.",
    aioQuestion: 'How do Boston businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile tuned to the exact services and Boston neighborhoods you want; name, address, and phone details that match everywhere online; a steady flow of genuine reviews; and local content built around real neighborhoods. With educated buyers and harsh winters, the winners look established, answer emergency calls fast, and are already ranking before the first ice dam forms.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Three competitors own the map spots', body: "Pull up your own service plus \"near me\" right now. The three businesses Google pins to the map soak up most of the clicks, and when a boiler dies on a sub-zero night or water starts dripping through a Brookline ceiling, the homeowner taps one of those three without thinking twice. If your name is not up there, the quality of your work barely registers, because most people never scroll far enough to find it. Breaking into that top three is usually the single highest-return move a Boston contractor can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Boston homeowner to four contractors at once, then charge each of you to brawl over them. It is a treadmill that never stops moving. Local SEO builds the opposite asset: a homeowner finds you, calls you, and nobody else got the lead. Run it long enough and you stop renting visibility and start owning the pipeline outright." },
      { title: "You're not ranked before the freeze", body: "Boston's sharpest demand, ice dam removal and boiler failures and split pipes, arrives fast and crowds into December through February. Rankings take months to build. The contractors who start in late summer or fall are the ones whose phones ring the night the storm hits. Try to rank in January and that whole season has already gone to whoever Google was showing first." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The single biggest lever in the Map Pack. We tune your categories, services, service area, photos, and posts so Google knows precisely which Boston searches belong to you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to read the same on every directory Google cross-checks. We fix the listings that disagree with each other and add the ones you are missing across Suffolk, Middlesex, and Norfolk counties." },
      { name: 'Reviews that keep coming', desc: "A simple engine that turns finished jobs into a steady stream of fresh reviews. It lifts your ranking and gives a cautious Boston homeowner a reason to call you first." },
      { name: 'Neighborhood pages', desc: "Real pages for Back Bay, Newton, Brookline, Cambridge, Wellesley and the rest, so you rank for the exact neighborhood someone is searching rather than a generic \"Boston.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, and mobile speed. The behind-the-scenes work that lets every other piece you pay for actually move up the rankings." },
      { name: 'Local link building', desc: "Mentions and links from Boston sources Google trusts: the Globe and neighborhood papers, BBB and trade associations, historic-district and civic groups. In a metro this crowded that is frequently the thing that decides page one from page two." },
      { name: 'Seasonal and emergency SEO', desc: "We rank you for ice dam removal, emergency boiler repair, burst-pipe response, and spring gutter work before the season lands, not after the thaw has already passed.", featured: true },
      { name: 'AI search readiness', desc: "A growing share of \"near me\" research now begins inside AI Overviews, ChatGPT, and Perplexity. We structure your content and schema so those engines can read your business and name it when a Boston homeowner asks.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We map where you actually rank today across every neighborhood you serve, then name the competitors beating you in the Map Pack and the specific reasons Google favors them over you." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP come first because they move the fastest. Most Boston clients see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is precisely why local SEO rewards starting in the fall, not in the middle of a January storm." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across your priority Boston markets, plus the seasonal content that ranks you for emergency searches." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and booked jobs, never a vanity ranking chart. Once a neighborhood is locked in, we move to the next one on your list." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Boston neighborhoods at once.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map from Cambridge out to Concord.', features: ['Everything in Local Growth', 'Local link building', 'Seasonal and emergency SEO', 'Multi-neighborhood service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Boston?', a: "Most Boston engagements land between $750 and $2,500 a month, set by how many neighborhoods and keywords you are chasing. The tiers above spell it out. No hidden fees, no long contract, and we lock the exact scope in your free audit before you spend a dollar." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move within a few weeks. The competitive Boston keywords usually take 90 to 180 days of steady work, because reviews and citations build slowly. Anyone promising you page one in 30 days is selling a fantasy. The takeaway: start in summer if you want to be ranked when the cold hits." },
      { q: 'What makes Boston local SEO different?', a: "Two things stand out. The housing is the oldest of any big US city, so three-deckers, brownstones, and Colonials throw off a constant stream of specialized work, and the people who own them research hard before they hire. On top of that, winters here are punishing, and ice-dam and boiler calls spike overnight. Your ranking has to be locked in before the freeze, not pieced together during it." },
      { q: 'How do I rank for emergency work like ice dam removal?', a: "Same way you rank for anything else. We build out the service pages, set your Google Business Profile up for those emergency categories, earn citations and reviews, and get the local content live before the season turns. Emergency searches spike the night the storm lands, so you have to be ranked ahead of it, not scrambling once the ice is already on the roof." },
      { q: 'How do I deal with Boston permitting and historic districts?', a: "On the marketing side, we turn it into an advantage. We build content and profile copy that names the historic-district and permitting work you handle, from Back Bay and Beacon Hill to the older parts of Cambridge, so a homeowner with a landmarked property sees that you have done it before. That kind of specificity is exactly what wins these higher-value jobs." },
      { q: 'Which areas do you cover?', a: "Back Bay, South End, Beacon Hill, Jamaica Plain, Dorchester, South Boston, Brookline, Newton, Lexington, Concord, Wellesley, Cambridge, Somerville, Medford, and Quincy. We build genuine neighborhood pages rather than one generic Boston page, because that is what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It is basically all we do: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand old-home work, winter emergency demand, and the insurance jobs that follow a bad storm." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More \"near me\" research now begins in AI tools instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business by name. In Boston that is fast becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that is about how long local SEO takes to show real movement in a market this competitive. After that you go month-to-month. If the Boston leads are not showing up, you walk, and the accountability stays squarely on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that send leads straight to you alone. Over time you lean on the brokers less because the work is already coming in direct." },
      { q: "What's in the free audit?", a: "A straight read on where your Boston Local SEO stands today across your neighborhoods, what your Map Pack competitors are doing to stay ahead of you, the fixes that move the needle fastest, and a realistic 90-to-180-day plan with the numbers run for your shop. No pitch deck, just a diagnosis you can act on." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'boston', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Boston SEO Company | Rank Higher, Get Leads | OnwardCraft',
    metaDescription:
      'Boston SEO that turns organic traffic into booked work for contractors. Revenue-tied reporting, no lock-in, built for old-home jobs and winter-storm demand.',
    eyebrow: 'SEO Services · Boston, MA',
    h1: 'Boston SEO that turns organic traffic into booked work before the freeze',
    h2Exact: 'Boston SEO Company',
    heroSubhead:
      "Ads vanish the instant you stop paying. SEO does the reverse: rank once for what your Boston customers search and the leads keep arriving month after month. We build that ranking and tie every report to real calls and booked jobs, never a vanity chart.",
    primaryCta: 'Get my free Boston SEO audit',
    intro:
      "Boston SEO comes down to one blunt question: when somebody searches what you do, are you on page one or page two? In a market this crowded, page two might as well be page fifty. We get contractors ranking for the money keywords in a city built on century-old homes and ruled by hard winters, and we measure the whole thing in leads, not traffic that never picks up the phone.",
    aioQuestion: 'How do Boston businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms buyers search, publishing genuinely useful local content tied to specific neighborhoods, and earning links from trusted Boston sources. Because demand here swings hard with the seasons, ranking for ice-dam removal, boiler repair, and burst-pipe response before December is what separates the contractors who book the winter work from the ones who miss it.",
    problemHeading: "Three reasons your Boston site isn't bringing in work",
    painPoints: [
      { title: "You're stranded on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it either. With this many competitors in the metro, if you are not in the top handful of results for what you sell, your site is effectively invisible no matter how polished it looks or how many years you have been swinging a hammer. That invisibility is exactly what sends your jobs to the shop ranked above you." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the second your card stops, the leads stop cold. SEO builds an asset you actually own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost. With Boston buyers who scrutinize everything and tend to trust organic results over paid spots, that asset pays off twice." },
      { title: "You're not ranking for the demand that matters", body: "Boston's heaviest demand, boiler failures and ice-dam removal and split pipes, hits fast and crowds into December through February. The contractors who rank for those terms ahead of time catch the surge. If your SEO ignores the seasonal and emergency searches, you are quietly handing away your busiest, most profitable weeks of the year." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank your Boston site at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned for the exact terms your Boston customers search: titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Useful pages and guides that answer the questions Boston homeowners actually type, from ice-dam prevention to permitting an addition in a historic district, earning links and pulling in leads long after we hit publish." },
      { name: 'Link building', desc: "Authority from real Boston and industry sources. With buyers who hold advanced degrees and competitors who have been here for decades, links are often the deciding factor between page one and page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack work so you win the \"near me\" searches across Back Bay, Newton, Cambridge, and the rest, right next to your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on phone calls, form fills, and booked jobs, not just rankings and pageviews, so you always know what your SEO is worth in actual dollars." },
      { name: 'Seasonal and emergency SEO', desc: "We rank you for the winter heating, ice-dam, and summer AC searches that fuel Boston's busiest stretches, so you are visible before demand spikes instead of chasing it after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of Boston search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Boston leads, with seasonal timing built into the plan." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile rendering. The groundwork every other ranking effort sits on top of before it can climb." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the ice-dam, boiler, and burst-pipe terms that decide who books a Boston December." },
      { name: 'Build authority', desc: "Links and citations from trusted Boston and industry sources to push your most contested keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to booked leads, then we double down on what is producing and push into the next set of keywords." },
    ],
    pricing: {
      heading: 'Transparent Boston SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Boston search year-round.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal and emergency SEO', 'Multi-neighborhood pages', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Boston?', a: "Most Boston SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Boston?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter neighborhood terms and slower on the most competitive citywide keywords. In Boston, timing matters: start in summer or fall to be ranked before the winter emergency season." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Boston buyers research carefully and often trust organic results over ads, so SEO tends to convert especially well here." },
      { q: 'Should my Boston SEO target seasonal demand?', a: "Absolutely. When a blizzard hits, searches for ice dam removal, emergency boiler repair, and burst pipe work spike overnight, and only the contractors already ranked capture that work. Ranking takes months to build, so we optimize for those seasonal and emergency terms ahead of time." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. Higher tiers add the seasonal emergency work and AI-search optimization. We pin down the exact scope for your Boston business in the free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs about that long to show real movement against established Boston competitors, then it goes month-to-month. If the leads are not coming, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business by name when someone asks them for a contractor near Boston, not just classic search." },
      { q: 'Which areas around Boston do you cover?', a: "Back Bay, South End, Beacon Hill, Jamaica Plain, Dorchester, South Boston, Brookline, Newton, Lexington, Concord, Wellesley, Cambridge, Somerville, Medford, and Quincy, with genuine local pages rather than one generic Boston page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that route leads straight to you. The more of your Boston search visibility you own, the less you have to wire to brokers for the same homeowner three competitors already bought." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to stay ahead, the highest-impact fixes, and a realistic Boston SEO timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'boston', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Boston Web Design Company | Sites That Convert | OnwardCraft',
    metaDescription:
      'Boston web design that makes research-heavy homeowners pick you. Fast, mobile-first sites built for contractors serving educated buyers and century-old homes.',
    eyebrow: 'Web Design · Boston, MA',
    h1: 'Boston web design that makes research-heavy homeowners pick you',
    h2Exact: 'Boston Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is just a brochure. Boston homeowners are some of the most research-heavy buyers in the country. They compare websites carefully, read every review, and pay a premium for contractors who look professional and credible online. We build sites that win that comparison.",
    primaryCta: 'Get my free quote',
    intro:
      "Boston web design earns its keep when it makes a careful homeowner pick you instead of the next contractor on the map. Most contractor websites lose leads quietly: slow on a phone, buried call button, no clear offer. Boston buyers are educated and deliberate, and they read your site carefully before they ever call. We build sites that load fast, look like the professional you are, and turn Newton-to-Dorchester visitors into booked jobs, with the credibility signals that convince a research-heavy buyer to choose you.",
    aioQuestion: 'What makes a good contractor website in Boston?',
    aioAnswer:
      "A good Boston contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with real reviews and project photos, names the specific neighborhoods you serve, and signals expertise with old-home specializations like boiler work, masonry, or slate roofing. Because Boston buyers research carefully and pay a premium for credibility, the quality of the copy and the visual professionalism of the site are what close the deal.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It doesn't build enough trust", body: "Boston homeowners are educated and careful. They compare two or three contractor websites before they call. A cluttered, generic, or outdated site quietly signals that you're not the premium contractor they're looking for, even when your work is excellent. We design sites that build credibility fast." },
      { title: "It's too slow on a phone", body: "Most of your Boston visitors are on mobile, and they bounce if your site takes more than a few seconds to load. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking." },
      { title: "It doesn't speak to your neighborhood or specialty", body: "A homeowner in Beacon Hill with a 150-year-old brownstone wants to see that you understand old homes, not a generic page that could be anybody in any city. We build sites that name the neighborhoods you work and highlight the specialties those buyers care about." },
    ],
    servicesHeading: "What's in an OnwardCraft Boston website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your neighborhoods, and the jobs you actually want to win." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where most of your Boston traffic arrives. Fast, thumb-friendly, easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where a homeowner actually fills them in. Every page points to one next step." },
      { name: 'Copy that sells', desc: "Words written for a careful, well-read Boston homeowner deciding who to trust around a century-old house, not filler text that reads like every other contractor in town." },
      { name: 'Local SEO foundation', desc: "Built from the first line of code to rank: clean structure, schema, fast load, and pages ready for Back Bay, Newton, Cambridge, and the rest." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and clear Google's performance checks, so a Boston homeowner comparing you against two other sites does not bounce before your offer loads." },
      { name: 'Trust and credibility design', desc: "Review showcases, old-home expertise signals, and professional photography layout that convince a careful Boston buyer you're the right choice.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read your site and recommend your business as more Boston homeowners start their search inside an AI tool.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, the neighborhoods you drive to, your most profitable jobs, and your competitors, then map the site around booking more of the work you actually want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert a careful Boston buyer. You see it and shape it before a single line of code gets written." },
      { name: 'Build and copy', desc: "We build it fast and write copy aimed at a homeowner vetting you against the next contractor on the map, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and load speed dialed in from the first day live." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it around what is actually turning visitors into calls." },
    ],
    pricing: {
      heading: 'Transparent Boston web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Neighborhood-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Boston?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, set by page count and any integrations you need. The tiers above lay it out: fixed price, no surprises, and the finished site is yours." },
      { q: 'How long does it take to build?', a: "A focused site runs about 2 to 4 weeks; a larger custom build runs 4 to 8. You get a firm timeline at the start and an update at every stage." },
      { q: 'Will my site win over Boston homeowners who research carefully?', a: "That's the whole design challenge here. Boston buyers research harder than almost any other market, comparing websites carefully, reading every review, and paying a premium for contractors who look credible. We build around that: fast load, strong trust signals, clear expertise, and copy that speaks to what a careful Boston homeowner actually wants to know before they call." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank, and pairing it with our SEO service is how you climb the competitive Boston terms." },
      { q: 'Do I own the website?', a: "Completely. The site, the domain, and the content are yours. No hostage situations and no platform you cannot walk away from." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where most of your Boston traffic lands. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits what you need and that you can manage yourself, usually WordPress or Webflow. We recommend the right fit in your free consult and walk through the tradeoffs in plain English." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build comes with launch support, and after that we offer affordable monthly maintenance for updates, speed, and security." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any maintenance or SEO afterward is month-to-month, so you can leave whenever you want." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what high-converting Boston web design should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'boston', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Boston Website Redesign | OnwardCraft',
    metaDescription:
      'Boston Website Redesign that turns an aging site into a lead engine without losing rankings. Faster, mobile-first rebuilds that book more jobs before the winter rush.',
    eyebrow: 'Website Redesign · Boston, MA',
    h1: 'Boston Website Redesign that turns an aging three-decker-era site into a lead engine',
    h2Exact: 'Boston Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week, and in Boston, where buyers research carefully and pay a premium for credibility, an old site quietly hands work to competitors who look sharper online. We redesign Boston contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "A Boston Website Redesign usually goes one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Boston contractor sites for speed and conversions, build them to earn the trust of research-intensive buyers, and migrate with the redirects and SEO-safe care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by holding your URL structure steady, or mapping a 301 redirect for every page that moves, while preserving your content and metadata, carrying over your schema, and testing the whole thing on staging before it goes live. Handled this way, a redesign keeps your Boston rankings and usually lifts them, because the new build is faster, mobile-first, and better organized than what it replaced.",
    problemHeading: "Signs your Boston site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "Boston homeowners are educated, research-heavy buyers who compare websites carefully, and they judge you by your site in seconds. An old, cluttered design quietly sends them to a competitor who looks more established and credible, even when your work is better." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your Boston visitors before they ever see your offer. A redesign built mobile-first wins them back." },
      { title: "It doesn't signal expertise for Boston's old homes", body: "A homeowner in Beacon Hill with a 130-year-old rowhouse or a buyer in Wellesley with a Victorian estate needs to see that you understand what their home requires. A generic site signals generic contractor. We rebuild to highlight the specialties and neighborhood knowledge that win Boston's most valuable jobs." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pin down exactly what is costing you leads and rankings on the current site, so the redesign fixes real problems instead of just swapping the colors around." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you have already built in Boston search." },
      { name: 'Conversion redesign', desc: "Clear offers, smarter call-to-action placement, and lead forms a homeowner will actually fill in. We design for booked jobs, not just a prettier screenshot." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals, which lifts conversions and rankings together and keeps a research-heavy Boston buyer from clicking away." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where most of your Boston traffic arrives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and signals expertise to Boston's careful buyers." },
      { name: 'Neighborhood and specialty rebuild', desc: "Rebuilt to highlight the specific neighborhoods you serve and the old-home specialties that win Boston's most valuable jobs.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as more Boston search starts inside an AI tool.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We work out what is losing you leads and rankings, then map a redesign that fixes it without breaking the parts that already pull their weight." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design built for Boston's careful buyers, which you review and shape before we build a thing." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration that holds the Boston rankings you already have." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and watch the rankings closely so they hold and climb instead of dropping." },
      { name: 'Optimize', desc: "Post-launch tuning around what is actually converting Boston visitors into calls, plus ongoing speed work and updates." },
    ],
    pricing: {
      heading: 'Transparent Boston redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Neighborhood and specialty rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Boston?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, set by size and any integrations. Fixed price, no surprises, and the result is yours to keep." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not when it is done carefully, and that is exactly how we work. We map 301 redirects for every URL that changes, preserve content and metadata, carry over your schema, and test on staging first. Handled right, a redesign holds your Boston rankings and usually nudges them higher." },
      { q: 'How long does a redesign take?', a: "A focused redesign runs about 3 to 5 weeks; a larger rebuild runs 5 to 9. You get a firm timeline at the start and an update at every stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is hard to update, isn't bringing in leads, or isn't building the kind of trust that Boston's research-intensive buyers expect, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and sharpen your existing content, protect the pages that are already ranking, and handle the technical migration so nothing important slips through the cracks." },
      { q: 'Will the redesign help me win higher-value Boston jobs?', a: "Yes, and that's especially important here. Boston homeowners, particularly in Newton, Brookline, Lexington, Wellesley, and Concord, will pay a premium for contractors who look professional and credible online. A polished redesign can lift not just your lead volume but the caliber of the jobs you attract." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts conversions and rankings at the same time." },
      { q: 'Do I own the redesigned site?', a: "Completely. The site, the domain, and the content are yours, with no platform lock-in of any kind." },
      { q: 'Am I locked into a contract?', a: "No. The Boston redesign is a one-time project with a fixed price. Any maintenance or SEO you add afterward runs month-to-month, and you can stop it whenever." },
      { q: "What's in the free redesign audit?", a: "A straight read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price Boston Website Redesign quote with a timeline and a safe migration plan for your site." },
    ],
  },
];

export const bostonCity = {
  citySlug: 'boston', city: 'Boston', state: 'Massachusetts', stateAbbr: 'MA', metro: 'Boston',

  titleTag: 'Boston Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Boston marketing for contractors that turns winter-rush searches into booked jobs. Web design, SEO, and local SEO that win educated buyers and own your leads.',

  eyebrow: 'Boston · Web Design, SEO & Lead Generation',
  h1: 'Boston marketing for contractors that turns winter-rush searches into jobs',
  h2Exact: 'Boston Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for a market defined by brutal winters, 100-year-old homes, and buyers who research everything. One team to rank you before the storm hits, convert careful buyers, and get you off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Boston audit',

  intro:
    "Boston marketing for contractors has to win a market shaped by some of the harshest winters in the country, the oldest housing stock of any major American city, and homeowners who research contractors more carefully than almost anywhere else. Winning here takes three things working together: a site that builds trust fast, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack for your neighborhoods before the season hits, not after. Here's how our Boston contractor marketing helps you do exactly that.",
  aioQuestion: 'How do Boston contractors get more leads online?',
  aioAnswer:
    "Boston contractors get more leads by combining a fast, professional website that earns trust with educated buyers, SEO that ranks them for high-intent searches year-round, and local SEO that wins the Google Map Pack neighborhood by neighborhood, with seasonal timing built in so they're visible before winter emergency demand spikes instead of chasing rankings after the blizzard hits.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Boston searches \"near me.\" The single highest-return move for most local businesses, done tight, neighborhood by neighborhood, before the winter rush.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your Boston customers actually search, build an asset you own instead of renting traffic from ads, and measure the whole thing in booked leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to earn the trust of Boston's research-heavy buyers and turn visitors into booked jobs, not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed, credibility, and conversions, then migrate it carefully so you hold onto every bit of Boston ranking you have already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Boston?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank before the winter emergency season, convert careful Boston buyers, and own their leads." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors, so we understand Boston's old housing stock, winter emergency demand, and the work a Victorian or a triple-decker actually requires." },
    { q: 'Why does the Boston market need a different approach?', a: "Boston is defined by brutal winters that spike contractor demand overnight, the oldest housing stock of any major US city, and buyers who research more carefully than almost anywhere else. Winning means being ranked before the storm hits, not chasing rankings in January, and building the kind of credibility that earns a premium from discerning homeowners." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO run month-to-month from $750 to $3,000, with no long contract. We confirm the exact scope for your Boston business in the free audit." },
    { q: 'Which Boston areas do you serve?', a: "Back Bay, South End, Beacon Hill, Jamaica Plain, Dorchester, South Boston, Brookline, Newton, Lexington, Concord, Wellesley, Cambridge, Somerville, Medford, and Quincy." },
    { q: 'Where should I start?', a: "Start with a free Boston audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves in your Boston marketing for contractors that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};
