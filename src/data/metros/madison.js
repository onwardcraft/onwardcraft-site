// MADISON — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Madison's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// MADISON — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'What it really takes to get found in Madison search results',
  body:
    "Madison sits on a narrow isthmus between Lake Mendota and Lake Monona, a city of roughly 270,000 wrapped around the State Capitol and UW-Madison, and that geography shapes everything about how home-service work flows here. The university's 50,000 students keep the rental stock churning, which means roofing, plumbing, and HVAC crews stay busy on rentals near campus and in the near-east neighborhoods. Those same renters grow into a professional class of state employees, researchers, and young families who buy homes in Nakoma, Shorewood Hills, and Sun Prairie, and they shop for a contractor the way they'd vet a job offer: carefully, with several browser tabs open and every review read twice. Two forces sharpen demand in this market. The first is the cold. A Dane County winter routinely drives wind chills well below zero, and when ice dams build along the older rooflines of Dudgeon-Monroe or pipes freeze in a 1920s Tenney-Lapham bungalow, the phone rings for whoever already holds a top map spot. The second is culture. Few Midwest cities ask about heat-pump swaps, energy retrofits, and green roofing as often as Madison does, and the crews who can answer those questions clearly tend to land the higher-value jobs that keep growing as a share of the local book of business.",
  pullQuote: 'In a town where state workers and UW researchers vet a contractor like a hiring decision, the strongest online presence books the job before the phone ever rings.',
  donut: {
    title: 'How Madison researches contractors',
    value: 68,
    centerLabel: 'college-educated',
    legend: [
      { label: 'College-educated', pct: 68, kind: 'teal' },
      { label: 'Other', pct: 32, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes in Madison',
  seasonCaption: 'Winter heating/ice (Dec–Mar) and spring thaw flooding (Mar–May)',
  seasonalDemand: [
    { m: 'J', v: 94, peak: true }, { m: 'F', v: 90, peak: true }, { m: 'M', v: 78, peak: true },
    { m: 'A', v: 64 }, { m: 'M', v: 52 }, { m: 'J', v: 46 }, { m: 'J', v: 44 },
    { m: 'A', v: 48 }, { m: 'S', v: 54 }, { m: 'O', v: 58 },
    { m: 'N', v: 70 }, { m: 'D', v: 88, peak: true },
  ],
  stats: [
    { value: '50,000', label: 'UW-Madison students feeding both the rental churn and the next wave of homebuyers' },
    { value: '68%', label: 'of Madison adults hold a degree and dig into the details before they hire', accent: true },
    { value: 'Dec–Mar', label: 'the deep-freeze stretch when ice dams and burst pipes flood the call log' },
    { value: 'Top 3', label: 'map results that soak up the clicks once a Madison homeowner starts searching' },
  ],
  neighborhoods: [
    'Willy Street', 'Atwood', 'Dudgeon-Monroe', 'Vilas', 'Fitchburg',
    'Middleton', 'Verona', 'Sun Prairie', 'Monona', 'Cottage Grove',
    'Shorewood Hills', 'Maple Bluff', 'Nakoma', 'Wingra', 'Tenney-Lapham',
  ],
};

const AREAS = [
  'Madison', 'Fitchburg', 'Middleton', 'Verona', 'Sun Prairie', 'Monona',
  'Cottage Grove', 'Waunakee', 'Stoughton', 'McFarland', 'De Forest',
  'Oregon', 'Willy Street', 'Atwood', 'Dudgeon-Monroe',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching solid contractors pour money into Angi and HomeAdvisor for leads that three competitors also bought. Madison homeowners are smart — they research online, they read reviews, and they make deliberate decisions. That means the contractor with the best digital presence wins, not necessarily the one who spent the most on lead brokers. Our whole mission is to build you an online presence that generates calls you own, not leads you're renting from a middleman. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We know how Madison homeowners actually decide',
    body: "Few markets in the region scrutinize a contractor as hard as this one. A Madison buyer pulls up reviews, lines your site up against two competitors, and asks pointed questions about efficiency before committing. We build your presence to survive that level of vetting, not just earn a quick tap on the phone.",
  },
  {
    title: 'We get you positioned before the deep freeze',
    body: "Ice dams along Lake Mendota rooflines, frozen pipes in older near-east homes, no-heat calls at midnight: a Dane County cold snap turns the phones on fast. We put you in the map results ahead of the season so those emergency calls reach you instead of whoever landed the top spot by luck.",
  },
  {
    title: 'We can carry the efficiency conversation',
    body: "Heat-pump conversions, green roofing, energy retrofits: a real slice of Madison buyers lead with these questions. We help you address them across your site, your content, and your Google profile so you win the premium work your competitors aren't even set up to bid.",
  },
  {
    title: 'No contracts, no fog',
    body: "Posted prices, reports tied to actual leads, month-to-month once the first 90 days are done. If we aren't earning the spend, you walk. That keeps the pressure on us to perform, which is exactly where it should sit.",
  },
];

const PROOF = {
  heading: 'Brand new agency, so here is the honest math instead of a wall of logos',
  body:
    "Lots of agencies open with a grid of client badges. We are a young, founder-run shop, so we are not going to fake a history we have not built yet. What we can hand you is the reasoning behind the work, pulled straight from Google's own data and the industry research on how people search for local help.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Run the math with us, flagged up front as a projection and not a result we are claiming: say a Madison contractor pulls roughly 1,200 local \"near me\" impressions a month across a handful of isthmus and suburban neighborhoods. Climbing from buried-on-page-two to a top-three map spot is the difference between a thin winter call log and a fully booked heating season, and in a city where 68% of homeowners read up before they hire, that climb decides who gets the work. In your free audit we run the actual figures for your business: your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Madison', state: 'Wisconsin', stateAbbr: 'WI', metro: 'Madison',
  heroProof: ['Built for the trades', 'Madison neighborhood targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const madisonLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'madison', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Madison WI Local SEO Company | OnwardCraft',
    metaDescription:
      'Search your service in Madison and three businesses show up on the map. We get you into those three, so the call lands with you.',
    eyebrow: 'Local SEO · Madison, WI',
    h1: 'When Madison searches for what you do, be the first name they find',
    h2Exact: 'Madison Local SEO Company',
    heroSubhead:
      "Google pins three businesses to the map on a \"near me\" search, and everyone underneath them is essentially invisible. In a city of state employees and UW researchers who vet before they call, we get you into that top three for the Madison neighborhoods you serve, so the job lands with you rather than whoever happened to rank first.",
    primaryCta: 'Get my free Madison audit',
    intro:
      "Madison local SEO really comes down to a single question: when a homeowner off Atwood Avenue or up in Maple Bluff types your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most Madison searchers tap one of that trio and never bother scrolling past it. With UW-Madison feeding a city full of detail-oriented homeowners, and Dane County winters firing off emergency calls for months at a stretch, holding that top-three spot for the right neighborhoods is the whole contest. Here is how you get there.",
    aioQuestion: 'How do Madison WI businesses rank higher in local search?',
    aioAnswer:
      "It takes four pieces working together: a Google Business Profile tuned to the exact services and neighborhoods you want, a name, address, and phone that match everywhere online, a steady drip of genuine reviews, and local content built around real Madison neighborhoods. Because so many homeowners here work at the university or in state government and dig into the details, sharp reviews and neighborhood-level pages carry extra weight, and the crews that talk fluently about efficiency and sustainability pick up a growing share of the premium jobs.",
    problemHeading: 'A quiet phone in Madison usually traces back to one of these',
    painPoints: [
      { title: 'Three competitors are sitting on the map spots', body: "Run your own service plus \"near me\" right now. Those three businesses pinned to the map collect most of the clicks, and in a town where people read reviews before they dial, that top trio matters even more. If you are not among them across Willy Street, Fitchburg, and Middleton, most homeowners never lay eyes on your name, however good your craftsmanship is." },
      { title: 'You keep paying for leads that were never yours', body: "Angi, Thumbtack, and HomeAdvisor resell the same Madison homeowner to three or four crews, then charge each of you for the chance to fight over them. Local SEO flips that: a homeowner searches, finds you, and calls you, with nobody else having paid for that contact. Stick with it and you stop renting the pipeline and start owning it." },
      { title: 'You disappear right when Madison demand peaks', body: "When a January arctic blast pushes wind chills past twenty below, no-heat calls explode overnight. When the spring thaw arrives, frozen-pipe and basement-flooding calls do the same. The crews ranking before the season opens book all of it. If your local SEO is not set before those windows, you are chasing scraps while competitors run full schedules." },
    ],
    servicesHeading: 'The work that actually puts you on the Madison map',
    services: [
      { name: 'Google Business Profile', desc: "Your strongest pull in the map results. We sharpen your categories, services, service area, photos, and posts so Google understands exactly which Madison searches, from ice-dam repairs to heat-pump installs, belong to you." },
      { name: 'Citations and NAP cleanup', desc: "Google wants your name, address, and phone identical everywhere it checks. We straighten out the listings that conflict and add the ones you are missing across Dane County and Madison-area directories." },
      { name: 'Reviews that keep coming', desc: "A low-friction routine that nudges each wrapped Madison job toward a fresh review. With so many local homeowners reading carefully before they hire, your review count and how recent they are rank among your loudest trust signals." },
      { name: 'Neighborhood pages', desc: "Real pages for Willy Street, Atwood, Dudgeon-Monroe, Fitchburg, Middleton, Verona, and the rest, so you surface for the neighborhood someone is actually searching, not just a flat \"Madison WI.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, and mobile speed: the structural work that lets every other ranking effort actually take hold." },
      { name: 'Local link building', desc: "Mentions and links from Madison sources Google respects: local press, Dane County trade groups, UW-area organizations, and partners. In this market that is often what divides page one from page two." },
      { name: 'Seasonal and emergency SEO', desc: "We get you ranking for no-heat calls, ice-dam repairs, frozen pipes, and spring flooding before each window opens, so you are booked out when demand surges instead of playing catch-up.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts inside AI Overviews, ChatGPT, and Perplexity, and Madison's detail-driven homeowners lean on these tools early. We shape your content so those engines read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We map exactly where you stand today across Madison's isthmus neighborhoods and outer suburbs, then name the competitors beating you in the map results and figure out why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP come first because they shift the fastest. Early lift usually shows here inside a few weeks, often before the next Dane County cold snap rolls in." },
      { name: 'Build trust signals', desc: "Citations and the review engine switch on. These stack up week over week, which is exactly why local SEO pays off more for the people who start sooner than later." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Madison, Fitchburg, Middleton, Verona, Sun Prairie, and out from there, plus the seasonal content that catches winter and spring demand." },
      { name: 'Report and expand', desc: "Plain-English reporting built on calls and leads rather than vanity rankings. Then we go claim the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month once the first 90 days wrap. Nothing to lock into. Walk whenever you like.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right across Madison.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses competing across Madison neighborhoods and suburbs.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: "For contractors who want to own Madison's Map Pack and surrounding suburbs.", features: ['Everything in Local Growth', 'Local link building', 'Seasonal and emergency SEO', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Madison WI?', a: "Most Madison engagements run between $750 and $2,500 a month, set by how many neighborhoods and keywords you are chasing. Our tiers sit just above this. No hidden fees, no long contract, and we lock the exact scope down in your free audit." },
      { q: 'How long until I show up in the Madison Map Pack?', a: "Profile fixes can move within a few weeks. The competitive Madison terms usually take 90 to 180 days of steady work, since reviews and citations build up over time. Anybody promising you page one in 30 days in a university town full of sharp homeowners is selling you a story." },
      { q: 'What makes local SEO in Madison different from other cities?', a: "Two things. First, UW-Madison and state government produce some of the most research-heavy homebuyers in the region: they read reviews, line up websites side by side, and do their homework before calling. Second, the winters bite hard, so when ice dams, frozen pipes, and no-heat calls spike around the holidays, the crews already in the top three book the work. Being set before those windows is everything." },
      { q: 'Can you help me rank for energy-efficiency searches in Madison?', a: "Absolutely, and here that is a real edge. A meaningful share of local homeowners go out of their way to find contractors who can speak to heat pumps, energy retrofits, and green roofing. We tune your content and Google profile to surface for those searches, which plenty of your competitors skip entirely." },
      { q: 'Which areas around Madison do you cover?', a: "Madison proper plus Fitchburg, Middleton, Verona, Sun Prairie, Monona, Cottage Grove, Waunakee, Stoughton, McFarland, and the surrounding Dane County communities. We build genuine neighborhood pages rather than one catch-all Madison page, because that is what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It is nearly all we do: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand Wisconsin no-heat emergencies, lakeshore property quirks around Mendota and Monona, and the efficiency questions Madison buyers ask." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More research now begins in AI rather than classic search, and Madison's educated homeowner base is out ahead on this. We shape your content and schema so those AI engines can read your business, trust it, and quote it back to a Madison searcher. It is fast becoming as important as the map results themselves." },
      { q: 'Am I locked into a contract?', a: "No. We request an opening 90-day run because that is about how long local SEO needs to produce real movement in a market this competitive. After that it is month-to-month. If we are not delivering, you leave, and the accountability stays with us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build the rankings, the Google profile, and the review base that send Madison leads directly to your phone. Over time you lean on the brokers less because the work is already coming your way." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across Madison's neighborhoods, what your map competitors are doing to stay ahead, the fixes that will move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck, just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'madison', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Madison WI SEO Company | OnwardCraft',
    metaDescription:
      'Madison SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in contracts, built for an educated, research-driven.',
    eyebrow: 'SEO Services · Madison, WI',
    h1: 'Get your Madison business to the top of Google and keep it there',
    h2Exact: 'Madison WI SEO Company',
    heroSubhead:
      "Ads switch off the moment you stop paying. SEO works the other way: rank once for what Madison homeowners search and the leads keep arriving. We build that ranking and tie every report back to real calls and booked jobs, not vanity traffic.",
    primaryCta: 'Get my free Madison SEO audit',
    intro:
      "Madison SEO turns on one question: when a UW-area homeowner or a family in Fitchburg searches your service, do you land on page one or page two? Page two might as well not exist. We get contractors ranking for the keywords that pay in a market full of careful, detail-driven buyers, and we measure it in leads rather than sessions.",
    aioQuestion: 'How do Madison WI businesses rank higher on Google?',
    aioAnswer:
      "They rank by repairing the technical base of the site, tuning each page to the exact terms Madison homeowners search, publishing genuinely useful local content tied to specific neighborhoods and suburbs, and earning links from trusted Dane County sources. In Madison, ranking for the brutal winter demand, no-heat calls, ice dams, and frozen-pipe repairs, before the season lands is among the highest-return moves available, and the crews who also speak the city's sustainability language capture a premium slice of the market.",
    problemHeading: 'Three reasons your Madison site is not bringing in work',
    painPoints: [
      { title: 'Page two is where leads go to die', body: "Hardly anyone clicks past the first page of Google. In a city where homeowners weigh a contractor as carefully as a grad-school offer, if you are not in the top handful of results for what you sell, most potential customers never find you, no matter how strong your reviews look." },
      { title: 'You are renting traffic you could be owning', body: "Google Ads can produce, but the instant your budget pauses, the leads stop cold. Madison homeowners also tend to distrust ads, putting their faith in organic rankings and peer reviews over sponsored slots. SEO builds an asset you keep: rankings that go on producing leads at a fraction of the per-lead cost of paid clicks." },
      { title: 'You are missing Madison’s seasonal demand entirely', body: "When Dane County temps crash around the holidays and ice dams form along Dudgeon-Monroe rooflines, searches for heating and roof repair surge fast. When the thaw hits, flooding and water-damage searches follow. Crews ranking for those terms ahead of time book the season. If your SEO ignores these windows, you are handing away your highest-revenue weeks." },
    ],
    servicesHeading: 'The SEO work that genuinely moves rankings in Madison',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, load speed, Core Web Vitals, schema, and the behind-the-scenes fixes Google needs in place before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned to the exact terms Madison homeowners type, with titles, headings, content, and internal links pointed at what actually drives calls." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles answering what Madison buyers search before they hire, from energy-efficiency upgrades to winter storm prep, earning links and pulling in leads on their own." },
      { name: 'Link building', desc: "Authority drawn from real Madison and Dane County sources. In a market this research-heavy, signals from recognizable local institutions move the needle on rankings." },
      { name: 'Local SEO & Google Business Profile', desc: "Map result optimization so you take the \"near me\" searches across Madison's neighborhoods right alongside your organic positions." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads rather than just rankings and traffic, so you always know what your Madison SEO is genuinely worth to the business." },
      { name: 'Seasonal & emergency SEO', desc: "We rank you for winter heating, ice-dam, frozen-pipe, and spring flooding searches ahead of the spike, so you are booked when Madison needs you most instead of scrambling after.", featured: true },
      { name: 'AI search & GEO', desc: "Madison homeowners pick up AI search tools early. We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you where this research keeps starting.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors across Madison's neighborhoods, then draw a roadmap around the keywords most likely to bring real leads, including the seasonal windows that set Wisconsin's trade calendar." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile: the groundwork everything else needs to rank. Madison homeowners on phones do not sit around for a slow site." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus fresh local content, including the seasonal, emergency, and efficiency-focused terms that set Madison apart from a generic Midwest market." },
      { name: 'Build authority', desc: "Links and citations from trusted Madison and Dane County sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we lean harder into what is working and push into the next keyword set or season." },
    ],
    pricing: {
      heading: 'Transparent Madison SEO pricing',
      note: 'Month-to-month once the first 90 days wrap. Nothing to lock into. Walk whenever you like.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused Madison site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across Madison neighborhoods and suburbs.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Madison-area search year-round.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal & emergency SEO', 'Multi-location or multi-trade', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Madison WI?', a: "Most Madison SEO engagements land between $900 and $3,000 a month, set by how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Madison?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter neighborhood terms and slower on the most competitive city-wide keywords. SEO compounds, so the gains keep stacking the longer you run it." },
      { q: 'Is SEO better than Google Ads for Madison contractors?', a: "They handle different jobs. Ads buy you instant traffic that switches off the day you stop paying for it. Madison homeowners also tend to distrust sponsored results more than average, putting their faith in organic rankings and reviews. SEO builds something you keep: rankings that go on generating Madison leads at a far lower cost per lead as the months pass. Most contractors do best running SEO as the long-term engine and ads for short bursts." },
      { q: 'Should I target Madison’s seasonal demand in my SEO?', a: "Yes, this is one of the biggest advantages on the table for Madison contractors. When Dane County temps plunge around the holidays, searches for no-heat emergencies and ice-dam repairs surge fast. When the spring thaw arrives, water-damage and flooding searches follow. Ranking takes months to build, so you have to be in place before the season turns. We optimize for those windows well ahead of time." },
      { q: "What's included in your Madison SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and map result SEO, and revenue-tied reporting. Higher tiers fold in seasonal, emergency, and AI-search work. We confirm exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We request an opening 90-day run because SEO needs about that long to produce real movement on Madison's terms, then it shifts to month-to-month. If we are not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a growing part of what we optimize for, and Madison's highly educated homeowner base uses these tools more than most cities. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which areas around Madison do you cover?', a: "Madison proper plus Fitchburg, Middleton, Verona, Sun Prairie, Monona, Cottage Grove, Waunakee, Stoughton, McFarland, De Forest, and the surrounding Dane County communities, with genuine local pages rather than one catch-all Madison page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that route leads straight to you. The more you own your search visibility, the less you need to pay brokers for shared leads you are splitting with three competitors." },
      { q: "What's in the free SEO audit?", a: "Where you rank today across Madison, what your competitors are doing to stay ahead, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'madison', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Madison WI Web Design Company | OnwardCraft',
    metaDescription:
      'Madison web design that turns visitors into booked jobs: fast, mobile-first sites built for contractors in a research-driven college market.',
    eyebrow: 'Web Design · Madison, WI',
    h1: 'Madison web design that turns visitors into booked jobs',
    h2Exact: 'Madison WI Web Design Company',
    heroSubhead:
      "A handsome website that never rings the phone is just a brochure. We build Madison contractors fast, mobile-first sites engineered to hold up under the scrutiny of educated, research-heavy homeowners, and to turn that scrutiny into booked work.",
    primaryCta: 'Get my free quote',
    intro:
      "Madison homeowners do not just tap the first result: they open three tabs, work through the reviews, study the site, and then decide. A slow, generic, or unconvincing site quietly sends them to your competitor. We build contractor websites made to come through that scrutiny intact: fast, clear, credible, and built to convert research into calls across Willy Street, Fitchburg, Middleton, and beyond.",
    aioQuestion: 'What makes a good contractor website in Madison WI?',
    aioAnswer:
      "A strong Madison contractor site loads in under three seconds on a phone, puts the call button and a clear offer up top, proves trust with real project photos and reviews, and names the specific neighborhoods you serve. Because Madison homeowners are highly educated and comparison-shop hard, credibility signals like project galleries, review counts, and licensing details count more here than in most markets. Working in energy efficiency and sustainability where it fits also wins the growing group of Madison buyers who specifically hunt for eco-minded contractors.",
    problemHeading: 'Why your current site is not winning Madison work',
    painPoints: [
      { title: 'It folds under a Madison buyer’s scrutiny', body: "Madison homeowners research everything. They will line your site up beside two competitors and decide within minutes. If yours looks dated, drags on load, or skips the questions they are asking about your licensing, your process, your past work, they close the tab and move on. We design sites that hold up under that inspection." },
      { title: 'It is too slow on a phone', body: "Most of your Madison visitors arrive on mobile, and a sluggish load kills both the first impression and the ranking. We build fast from the foundation up, so you hold onto the visitor and the Google position together." },
      { title: 'It says nothing Madison homeowners actually care about', body: "Generic contractor sites lean on \"quality work\" and \"competitive prices.\" Madison buyers want to see that you serve their neighborhood, that you understand a Dane County winter, and that you can talk efficiency if they ask. A site that speaks to those things directly converts better, plain and simple." },
    ],
    servicesHeading: "What goes into an OnwardCraft Madison website",
    services: [
      { name: 'Custom design', desc: "No off-the-shelf templates. A site shaped around your trade, your Madison neighborhoods, and the jobs you actually want to be known for." },
      { name: 'Mobile-first build', desc: "Built for the phone first, since that is where most of your Madison traffic shows up. Fast, thumb-friendly, easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms set where people actually use them. Every page carries a next step, because a confused visitor never calls." },
      { name: 'Copy that wins educated buyers', desc: "Words pitched at Madison's research-heavy homeowners: direct, credible, and specific enough to settle the questions they are already asking before they reach for the phone." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank, with clean structure, schema, fast load, and neighborhood-ready pages for Madison, Fitchburg, Middleton, Verona, and beyond." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned for quick load and passing Google's performance checks, protecting both conversions and rankings." },
      { name: 'Neighborhood-targeted pages', desc: "Pages built around the Madison neighborhoods and suburbs you serve, from Willy Street and Atwood to Dudgeon-Monroe and Sun Prairie, so you rank for the specific searches that book jobs, not just \"contractor Madison WI.\"", featured: true },
      { name: 'Sustainability-ready content', desc: "Madison buyers ask about heat pumps, green roofing, and energy efficiency. We build pages that answer those questions fluently so you win the premium, eco-minded jobs your competitors cannot compete for.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your Madison neighborhoods, your best jobs, and the questions your ideal buyers ask, then map the site around booking more of the work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert Madison's skeptical, research-minded buyers. You see it and shape it before a line of code gets written." },
      { name: 'Build and copy', desc: "We build it fast and write copy that answers buyer questions and books the job, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it around what is actually converting, so the site keeps earning its place in your business." },
    ],
    pricing: {
      heading: 'Transparent Madison web design pricing',
      note: 'A one-time build. Half to start, half at launch. You own all of it, with nothing to lock into.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade Madison contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors serving multiple Madison neighborhoods.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Sustainability-ready content'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-trade or multi-location Madison-area businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Madison WI?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, set by page count and integrations. Our tiers are above: fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes roughly 2 to 4 weeks; a larger custom build runs 4 to 8. We give you a firm timeline up front and keep you posted through every stage." },
      { q: 'Will my site hold up to Madison buyers who research everything?', a: "That is exactly what we design for. Madison homeowners open several tabs, work through the reviews, and compare sites before calling anyone. We build around that habit: fast load, clear credibility signals, specific neighborhood targeting, and copy that answers the questions they are already asking." },
      { q: 'Can you include sustainability or energy-efficiency content?', a: "Yes, and in Madison that is a genuine edge. A real share of local homeowners specifically seek out contractors who can speak to heat pumps, energy audits, green roofing, and the like. We work that content into your site so it reads as expert rather than generic." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Madison terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you cannot leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, since that is where most of your Madison traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage, usually WordPress or Webflow. We will recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build comes with launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost Madison leads, what a high-converting contractor site in this market should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'madison', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Madison WI Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your Madison website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs in a research-driven market.',
    eyebrow: 'Website Redesign · Madison, WI',
    h1: 'Redesign your Madison website without losing your rankings',
    h2Exact: 'Madison WI Website Redesign Company',
    heroSubhead:
      "An outdated site bleeds jobs every week, especially in a city where homeowners compare three websites before they call. We redesign Madison contractor sites to convert more and load faster, and we migrate with care so you keep every bit of ranking you have earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go wrong in one of two ways: the site looks sharper but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Madison contractor sites for the research-heavy buyers who live here, build them to win on the first impression, and migrate with the redirects and SEO care that protect the traffic you have already worked hard to earn.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign holds your rankings and lifts them, because the new site is faster, more credible, mobile-first, and better organized than the old one. In Madison, where homeowners research hard, a redesign that strengthens trust signals and adds neighborhood-specific content usually delivers a conversion bump alongside the ranking protection.",
    problemHeading: 'Signs your Madison site is overdue for a redesign',
    painPoints: [
      { title: 'It loses the side-by-side comparison', body: "Madison homeowners open several tabs. If your site looks dated or generic next to a competitor's, they decide in seconds, and not in your favor. An outdated design quietly hands high-value jobs to contractors who simply invested in a cleaner, better-organized site." },
      { title: 'It is slow and loses people before you make an impression', body: "If your site feels clunky or drags on mobile, you lose most of your Madison visitors before they ever reach your offer. A redesign built mobile-first wins them back and lifts your Google ranking at the same time." },
      { title: 'It does not reflect the level of work you actually do', body: "If you do premium work, like energy-efficient installs, lakeshore property repairs, and high-end remodels, but your website looks like a 2015 template, there is a credibility gap. A redesign that matches your real quality converts better, draws better jobs, and makes every dollar you spend on SEO and ads work harder." },
    ],
    servicesHeading: "What goes into an OnwardCraft Madison redesign",
    services: [
      { name: 'Redesign audit', desc: "We pin down exactly what is costing you leads and rankings today, from slow load and poor mobile UX to weak trust signals and missing neighborhood content, so the redesign fixes real problems." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you have already earned. We treat this as a first-class deliverable, never an afterthought." },
      { name: 'Conversion redesign', desc: "Clear offers, smarter call-to-action placement, credibility signals that satisfy Madison's research-heavy buyers, and lead forms that actually get used." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals, which matters in a city where homeowners on phones bounce quickly." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where most of your Madison traffic arrives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and gives buyers the confidence to pick up the phone." },
      { name: 'Neighborhood-targeted rebuild', desc: "Rebuilt around the Madison neighborhoods and suburbs you serve, from Willy Street and Atwood to Fitchburg, Middleton, and Verona, so the new site ranks and converts for the specific searches that book real jobs.", featured: true },
      { name: 'Sustainability-ready rebuild', desc: "If your work touches energy efficiency, heat pumps, or green roofing, we rebuild your content to speak that language fluently, capturing the premium Madison jobs your old site was quietly giving away.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We work out what is losing you leads and rankings, then map a redesign that fixes it without breaking what already works. The free audit hands you this picture clearly before any commitment." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design built for Madison's scrutinizing buyers. You review and shape it before we build." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration. Nothing ranking today gets dropped." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and watch closely so rankings hold and climb rather than drop. The first two weeks after launch are critical and we treat them that way." },
      { name: 'Optimize', desc: "Post-launch tuning based on what is converting, plus ongoing speed work and updates to keep the site performing long-term." },
    ],
    pricing: {
      heading: 'Transparent Madison redesign pricing',
      note: 'A one-time project. Half to start, half at launch. You own all of it, with nothing to lock into.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small Madison contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established Madison contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Neighborhood-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-trade or multi-location Madison-area sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Madison WI?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, set by size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it is handled carefully, and that is exactly how we work. We map a 301 redirect for every URL that changes, carry over your content and metadata, move your schema across, and test the whole thing on staging before anything goes live. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a Madison redesign take?', a: "A focused redesign runs about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at every stage." },
      { q: 'How do I know I need a redesign?', a: "If your site loads slowly, looks dated, says nothing to Madison's eco-minded or research-heavy buyers, or is not turning visitors into calls, it is costing you work. The free audit tells you plainly whether a redesign is worth it and what it would include." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and sharpen your existing content, preserve what is ranking, and handle the technical migration so nothing important slips through, including your neighborhood pages and any seasonal content already earning traffic." },
      { q: 'Will the redesign help me win more Madison work?', a: "Yes, and that is the whole point. We rebuild around the specific Madison neighborhoods and suburbs you serve, add sustainability-ready content where it fits your trade, keep the site fast, and make the offer and call button obvious, so the new site wins the side-by-side comparison Madison buyers are running." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely: the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO runs month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan. No pressure, just an honest assessment." },
    ],
  },
];

export const madisonCity = {
  citySlug: 'madison', city: 'Madison', state: 'Wisconsin', stateAbbr: 'WI', metro: 'Madison',

  titleTag: 'Madison WI Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Madison WI contractors. Get found, get booked, and own your leads instead of renting them, built for a research-driven market.',

  eyebrow: 'Madison, WI · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Madison contractors found and booked',
  h2Exact: 'Madison WI Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Madison's educated, eco-minded, research-heavy market. One team to get you ranking, converting, and off the rented-lead treadmill, ready for Dane County winters and UW-area homebuyers alike.",
  heroProof: ['Built for the trades', 'Madison neighborhood targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Madison audit',

  intro:
    "Running a contracting business in Madison means competing for the attention of some of the most research-heavy homebuyers in the region. UW-Madison brings 50,000 students who become renters, then homeowners, then the kind of buyers who read every review and open three contractor websites before calling one. The winters add urgency: ice dams, frozen pipes, and no-heat calls do not wait for you to finish ranking. And Madison's progressive culture means a growing share of homeowners specifically want contractors who can talk through energy efficiency, heat pumps, and green roofing. Winning here takes three things pulling together: a site that earns trust, SEO that ranks you for what people actually search, and local SEO that puts you in the map results across Madison's neighborhoods. Here is how we help Madison contractors do exactly that.",
  aioQuestion: 'How do Madison WI contractors get more leads online?',
  aioAnswer:
    "Madison contractors win more leads by pairing a fast, credible, mobile-first website with SEO that ranks them for high-intent searches and local SEO that takes the Google map results across their specific neighborhoods. Because Madison homeowners are highly educated and research-driven, strong reviews, detailed neighborhood pages, and content that speaks to energy efficiency and Wisconsin's seasonal trade demand carry extra weight here.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Madison Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Madison homeowners search \"near me.\" For most local contractors it is the single highest-return move, done right neighborhood by neighborhood, before the Dane County deep freeze sets in.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords Madison's research-heavy homeowners actually search, including seasonal heating, ice-dam, and energy-efficiency terms, and build an asset you own rather than renting traffic from ads.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites built to come through the side-by-side comparison Madison buyers run before calling anyone: credible, specific, and engineered to turn scrutiny into booked jobs.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site to win Madison's educated, eco-minded buyers, faster and more credible and neighborhood-targeted, and migrate it carefully so you keep every bit of ranking you have already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Madison WI?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients pair a high-converting website with SEO and local SEO so they rank, convert, and own their leads in a market full of educated, research-driven homeowners." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades, including roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors, so we understand Wisconsin no-heat emergencies, lakeshore property needs around Mendota and Monona, and the efficiency questions Madison buyers keep asking." },
    { q: 'Why does the Madison market need a different approach?', a: "Madison homeowners are unusually research-heavy: 68% hold a degree, and many work at the university or in state government. They compare websites, read reviews closely, and often ask about sustainability and efficiency before hiring. That makes credibility signals, neighborhood-specific content, and eco-minded language matter more here than in a generic market." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are billed month-to-month, from $750 to $3,000, with nothing long-term to sign. We confirm exact scope in your free audit." },
    { q: 'Which Madison-area communities do you serve?', a: "Madison proper plus Fitchburg, Middleton, Verona, Sun Prairie, Monona, Cottage Grove, Waunakee, Stoughton, McFarland, De Forest, Oregon, and the surrounding Dane County communities. We build genuine neighborhood pages, from Willy Street and Atwood to Dudgeon-Monroe and beyond, rather than one catch-all Madison page." },
    { q: 'Where should I start?', a: "Start with a free Madison audit. We will look at your website, your rankings, and your map result presence, including how you show up for Wisconsin's seasonal demand windows, and tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};
