// CLEVELAND: per-metro, per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Cleveland's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// CLEVELAND: shared city blocks
// ===========================================================================
const MARKET = {
  heading: "Why winning Cleveland search is half timing, half trust",
  body:
    "Cleveland sits on the south shore of Lake Erie, and the lake writes the contractor calendar. Lake-effect bands dump snow off the water from November through March, and the city stacks up roughly 57 inches in an average year, which puts it near the top of the snowiest big cities in the country. Ice loads the gutters. Pipes split at 2 a.m. Roofs that swallowed decades of freeze-and-thaw finally let go under a January load. That weather creates a sharp, repeatable spike in urgent home-service demand every winter, and the businesses already sitting in the Map Pack when homeowners grab a phone are the ones that catch the emergency calls. Then the thaw arrives with a second rush: melting snow and soaked ground push basement flooding and foundation drainage work hard from March into May. Two windows, two separate scrambles, and you either show on the map or you don't. The neighborhoods tell a Rust Belt comeback story that rewards specialists. Ohio City, Tremont, Slavic Village, and Detroit Shoreway are full of brick homes raised between 1900 and 1940 that need plaster patching, knob-and-tube swaps, tuckpointing, and envelope work a national crew is not set up to handle. Old factory floors in Midtown and along the Detroit Shoreway corridor keep getting carved into lofts, and that renovation work goes to crews with a real Cleveland track record. The high-ticket suburban money pools quietly in Westlake, Bay Village, Solon, and Beachwood, much of it from Cleveland Clinic and University Hospitals staff who spend on doing things right the first time. Own the map in those suburbs and the historic east-side and west-side streets, and the big jobs come to you.",
  pullQuote: "In Cleveland the contractor who ranks before the first lake-effect band books the work everyone else watches drive past.",
  donut: {
    title: 'Cleveland weather demand',
    value: 57,
    centerLabel: 'winter-driven',
    legend: [
      { label: 'Winter emergency demand', pct: 57, kind: 'teal' },
      { label: 'Rest of year', pct: 43, kind: 'grey' },
    ],
  },
  seasonTitle: "When the trade phones light up",
  seasonCaption: "Lake-effect winter (Nov to Mar) and thaw-driven flooding (Mar to May)",
  seasonalDemand: [
    { m: 'J', v: 95, peak: true }, { m: 'F', v: 90, peak: true }, { m: 'M', v: 85, peak: true },
    { m: 'A', v: 60 }, { m: 'M', v: 50 }, { m: 'J', v: 44 }, { m: 'J', v: 40 },
    { m: 'A', v: 42 }, { m: 'S', v: 48 }, { m: 'O', v: 55 },
    { m: 'N', v: 80, peak: true }, { m: 'D', v: 90, peak: true },
  ],
  stats: [
    { value: '57"', label: 'average yearly snowfall, among the heaviest of any big US city' },
    { value: 'Nov-Mar', label: 'lake-effect snow season, when emergency contractor calls jump', accent: true },
    { value: '1900-1940', label: 'when most east-side and west-side Cleveland homes were built, the ones that need specialist hands' },
    { value: 'Top 3', label: 'Map Pack spots that grab most of the clicks the night the pipes freeze' },
  ],
  neighborhoods: [
    'Ohio City', 'Tremont', 'Detroit Shoreway', 'Slavic Village', 'University Heights',
    'Shaker Heights', 'Westlake', 'Bay Village', 'Solon', 'Beachwood',
    'Strongsville', 'Parma', 'Midtown', 'Collinwood', 'West Park',
  ],
};

const AREAS = [
  'Ohio City', 'Tremont', 'Detroit Shoreway', 'Slavic Village', 'University Heights',
  'Shaker Heights', 'Westlake', 'Bay Village', 'Solon', 'Beachwood',
  'Strongsville', 'Parma', 'Lakewood', 'Euclid', 'Brecksville',
];

const FOUNDER =
  "I'll be straight with you: I built OnwardCraft because I watched too many solid Cleveland contractors hand Angi and HomeAdvisor hundreds of dollars a month for leads their three competitors also bought. That's not a business — that's a treadmill. Cleveland homeowners want local. They want someone who knows what a 1920s Ohio City brick row house looks like from the inside, who understands what lake-effect ice does to a low-slope roof, and who isn't going to disappear when the job gets complicated. Those contractors deserve to own their leads. That's what we build here — rankings and websites that send work straight to you, not to a broker.";

const WHY = [
  {
    title: 'We actually know Cleveland winters',
    body: "Lake-effect bands, ice dams, split pipes, the thaw flood that follows. We know precisely what fires off emergency demand in this market, and we build your search presence around that calendar so you rank before the weather turns and your phone rings the moment it does.",
  },
  {
    title: "We know the east-side and west-side housing stock",
    body: "Ohio City, Tremont, Slavic Village, and Shaker Heights are nothing like a generic subdivision. These are 1920s brick homes with plaster walls, tired drainage, and chimneys that want a specialist. We write content aimed at exactly those jobs, and at the homeowners who need them done by someone who has seen one before.",
  },
  {
    title: 'We pull you off the rented-lead treadmill',
    body: "Cleveland homeowners would rather hire a neighbor than a national chain, but they still have to find you first. We build rankings and a Google presence that route leads straight to you, so you stop cutting checks to brokers for the same homeowner they already sold to your competitor.",
  },
  {
    title: 'No contracts, nothing buried in fine print',
    body: "Prices are posted, the reporting ties to real leads instead of charts, and you go month-to-month once the first 90 days are done. If it isn't paying off, you walk. That puts the pressure squarely on us, which is where it belongs.",
  },
];

const PROOF = {
  heading: "We're new, so here's the honest math instead of a logo wall",
  body:
    "Plenty of shops greet you with a grid of client logos. We are young and founder-run, so we will not fake a track record we have not earned. What we can put in front of you is the reasoning, pulled straight from what Google and the trade's own research show about how Cleveland homeowners hunt for a contractor.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here is a rough sketch, labelled plainly as a projection and not a result we are claiming: say a Cleveland contractor pulls around 1,200 local \"near me\" impressions a month across a few neighborhoods. Moving from page-two invisibility into the top three is the gap between a dead-quiet January and a calendar booked solid through the whole snow season. In your free audit we model the real numbers for your shop: your current rankings, your real search volume, and a straight 90-to-180-day path up the map.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Cleveland', state: 'Ohio', stateAbbr: 'OH', metro: 'Cleveland',
  heroProof: ['Built for the trades', 'Cleveland neighborhood targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const clevelandLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'cleveland', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Cleveland Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Cleveland Local SEO that lands you in the Map Pack three before the lake-effect snow season hits, so the emergency calls reach you first.',
    eyebrow: 'Local SEO · Cleveland, OH',
    h1: 'Cleveland Local SEO that puts your Ohio City and Westlake crews in the Map Pack',
    h2Exact: 'Cleveland Local SEO Company',
    heroSubhead:
      "Google pins three businesses to the map when a homeowner searches \"near me,\" and everyone underneath them barely registers. In a market where a single lake-effect band can send homeowners hunting for a contractor overnight, we push you into that top three for the neighborhoods you cover, so the call lands with you instead of whoever happened to rank first.",
    primaryCta: 'Get my free Cleveland audit',
    intro:
      "Cleveland local SEO lives or dies on one moment: a homeowner in Ohio City or Westlake types your service plus \"near me\" at 11 p.m. after a pipe lets go, and either you are one of the three businesses on the map or you are nowhere. The city averages 57 inches of snow, and emergency demand jumps hard from November into March. The contractors already holding those three spots take the calls. The rest stay invisible, no matter how clean their work is. Here is how you get up there.",
    aioQuestion: 'How do Cleveland businesses rank higher in local search?',
    aioAnswer:
      "Rank by nailing four things: a Google Business Profile tuned to the exact services and Cleveland neighborhoods you cover, name-address-phone listings that match across the web, a steady drip of real reviews, and local content tied to genuine neighborhoods and the seasons that drive demand. Timing is the Cleveland twist. Build your profile and reviews in the slow months so you rank when lake-effect snow and the spring thaw push homeowners onto Google at peak panic.",
    problemHeading: "If your phone goes quiet during the winter rush, it's usually one of these three",
    painPoints: [
      { title: 'Three competitors own the map spots while you watch', body: "Search your own service plus \"near me\" right now. Those three businesses Google drops onto the map? During a January ice storm or a March thaw that floods basements across Parma and Strongsville, those three take the calls. If you are not one of them, the quality of your work barely enters the picture, because most homeowners never scroll past the pins. Climbing into that top three for your neighborhoods is usually the single highest-return move a Cleveland contractor can make." },
      { title: "You keep buying leads that were never yours", body: "Angi, Thumbtack, and HomeAdvisor sell the same Cleveland homeowner to three or four contractors, then charge all of you to fight over the scraps. Locals here already lean toward hiring a neighbor, but when they can't find you on Google they land on those platforms by default. Local SEO builds the reverse: a homeowner finds you, calls you, and no one else gets that lead. Run it long enough and you stop renting visibility and start owning a pipeline." },
      { title: "You're not in place when the weather makes the calls", body: "Lake-effect snow, ice dams, and thaw flooding will not wait for your rankings to catch up. Rankings take months to build. If you are not already in the Map Pack by November, you sit out the busiest contractor stretch of the year. We get your presence built during the quiet season so you show up before the first hard band rolls in." },
    ],
    servicesHeading: 'What it actually takes to rank you in Cleveland',
    services: [
      { name: 'Google Business Profile', desc: "The heaviest lever in the Map Pack. We tune your categories, services, and service areas (Ohio City, Westlake, Solon, Beachwood and the rest) plus photos and posts, so Google knows exactly which Cleveland searches belong to you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to line up everywhere Google checks. We correct the listings that fight each other and build the ones you never had." },
      { name: 'Reviews that keep coming', desc: "A simple engine that turns finished jobs into a steady stream of fresh reviews. It carries extra weight here, where locals trust other locals and lean on reviews to decide who they let into the house." },
      { name: 'Neighborhood pages', desc: "Real pages for Ohio City, Tremont, Shaker Heights, Parma, Westlake and beyond, so you rank for the exact neighborhood somebody is searching rather than a flat \"Cleveland.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, and mobile speed. The work under the hood that lets every other piece actually rank." },
      { name: 'Local link building', desc: "Mentions and links from Cleveland sources Google trusts: neighborhood press, block clubs, business groups, trade partners. In this market that is often what splits page one from page two." },
      { name: 'Seasonal SEO for winter demand', desc: "We build your rankings and content around lake-effect season (heating failures, ice dams, split pipes, roof loads) so you are visible before November rather than scrambling once the snow is already down.", featured: true },
      { name: 'AI search readiness', desc: "A growing share of \"near me\" research now begins inside AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and name you next to the classic results.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We pin down where you genuinely rank today across your Cleveland neighborhoods and figure out which competitors are sitting in the Map Pack spots you want, and exactly why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP go first because they move fastest. Early lift often shows inside a few weeks, which matters when the snow season is bearing down." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These stack week over week, which is why kicking off in summer, ahead of the winter rush, makes such a difference." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages for the Cleveland markets you cover, backed by the on-page work and the seasonal content that ranks when demand spikes." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and booked leads, never vanity rankings. Then we go win the next Cleveland neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, with the Map Pack foundation built right from the start.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For shops fighting across several Cleveland neighborhoods at once.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors out to hold the map from the east side to the west side.', features: ['Everything in Local Growth', 'Local link building', 'Seasonal & emergency SEO', 'Multi-neighborhood and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Cleveland?', a: "Most Cleveland engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you are chasing. The tiers above lay it out: no hidden fees, no long contract, and we lock the exact scope in your free audit before you spend a dollar." },
      { q: 'How long until I show up in the Map Pack here?', a: "Profile fixes can move inside a few weeks. The competitive Cleveland keywords usually take 90 to 180 days of steady work, because reviews and citations build up over time. If lake-effect season is close, start now. You cannot fast-track rankings in the middle of a snow emergency." },
      { q: 'What makes Cleveland local SEO different from other cities?', a: "Two things. First, the seasonality is brutal. Lake-effect snow and the spring thaw create sharp, predictable demand from November into May, and you have to be ranking before each window opens. Second, the older east-side and west-side neighborhoods have a distinct housing stock that owners are particular about. Content that speaks to 1920s brick, original plaster, and knob-and-tube earns a trust that a swapped-in template never will." },
      { q: 'Which areas do you cover across Cleveland?', a: "We target Ohio City, Tremont, Detroit Shoreway, Slavic Village, University Heights, Shaker Heights, Westlake, Bay Village, Solon, Beachwood, Strongsville, Parma, Lakewood and more. We build genuine neighborhood pages rather than one flat Cleveland page, because that is what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you focus on contractors specifically?', a: "It is just about all we do: roofing, HVAC, plumbing, restoration, electrical, solar, and general contractors. We know what lake-effect ice does to a low-slope roof, what the thaw does to old Cleveland basement drainage, and what a 1925 brick home needs that a 1990s suburban build never will." },
      { q: 'Can you get me cited in Google AI Overviews and ChatGPT?', a: "A rising share of \"near me\" research now starts in AI rather than classic search. We structure your content and schema so those engines can read, trust, and cite your business. In Cleveland that is quickly getting as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that is roughly how long local SEO needs to show real movement. After that it is month-to-month. If we are not delivering, you leave, and the accountability stays on us." },
      { q: 'How does this pull me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads at a price that pencils out for the broker, not for you. We build rankings, a Google profile, and a review base that route leads straight to you alone. Over time you lean on the brokers less because the work is already arriving direct, which matters most during the winter months when you need it." },
      { q: "What if I work both the city and the suburbs?", a: "That is common in Cleveland, where crews often run the historic inner-ring streets and the suburban belt in the same week. We build neighborhood and service-area pages for both, so you rank where your customers actually search instead of inside one generic city zone." },
      { q: "What's in the free audit?", a: "A straight read on where you rank today across your Cleveland neighborhoods, what your Map Pack competitors are doing to stay ahead, the fixes that move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. It is the fastest way to see what Cleveland Local SEO can do for your shop before you spend a dollar. No pitch deck, just a diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'cleveland', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Cleveland SEO Company | Rank Higher, Get Leads | OnwardCraft',
    metaDescription:
      'Cleveland SEO that ranks contractors on Google and brings in leads you own. Built for the lake-effect market, revenue-tied reporting, no lock-in.',
    eyebrow: 'SEO Services · Cleveland, OH',
    h1: 'Cleveland SEO that gets you to the top of Google and holds you there through lake-effect season',
    h2Exact: 'Cleveland SEO Company',
    heroSubhead:
      "Ads quit the second you stop paying. SEO runs the other way: rank once for what your Cleveland customers search and the leads keep arriving for months, including through the winter emergency stretch when every contractor's phone ought to be ringing.",
    primaryCta: 'Get my free Cleveland SEO audit',
    intro:
      "Cleveland SEO comes down to one blunt question: when a homeowner in Shaker Heights or Strongsville searches your service, are you on page one or page two? Page two might as well be unlisted. We rank Cleveland contractors for the keywords that bring real work, including the seasonal heating, ice, and flooding terms that surge every winter, and we score the whole thing in leads, not traffic that never picks up the phone.",
    aioQuestion: 'How do Cleveland businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical base of the site, tuning each page to the exact terms customers search, publishing genuinely useful local content tied to specific neighborhoods and seasons, and earning links from trusted local sources. In Cleveland, ranking for lake-effect emergency searches and thaw-flooding terms before those seasons land is one of the highest-value moves a contractor can make, since those rankings will not appear overnight.",
    problemHeading: "Three reasons your Cleveland site isn't pulling in jobs",
    painPoints: [
      { title: "Page two is swallowing you whole", body: "Hardly anyone clicks past the first page of Google, and in Cleveland that sting hits hardest during the winter rush. If a homeowner's pipes freeze at midnight and you are not on page one, they are dialing whoever is. The sharpest work in town counts for nothing when they never see your name." },
      { title: "You're renting every click straight from Google Ads", body: "Ads can earn their keep, but the instant your budget pauses the leads stop cold, and Cleveland contractor keywords get expensive in the peak winter months when every trade is bidding for the same homeowners. SEO builds an asset you own: rankings that keep producing leads long after the work is done, at a fraction of the per-lead cost." },
      { title: "You skip the seasonal demand that actually pays", body: "Cleveland's busiest contractor stretch is November through March, driven by lake-effect snow, ice dams, split pipes, and dead furnaces. The thaw brings a second wave through May. If your SEO never targets those seasonal and emergency searches on purpose, you go dark exactly when your customers are searching with the most urgency." },
    ],
    servicesHeading: 'The SEO work that actually moves Cleveland rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, load speed, Core Web Vitals, schema, and the under-the-hood repairs Google wants before it will rank your Cleveland site at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned to the exact terms your Cleveland customers search: titles, headings, body copy, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on their own, including neighborhood-specific content for Ohio City, Westlake, Solon, and more." },
      { name: 'Link building', desc: "Authority from real Cleveland and industry sources. Links from neighborhood press, contractor associations, and trusted local partners are what shove a competitive keyword from page two onto page one." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack work so you win the \"near me\" searches across your Cleveland neighborhoods right alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and booked leads instead of just rankings and traffic, so you always know what your SEO is worth in dollars." },
      { name: 'Seasonal & emergency SEO', desc: "We rank you for the winter heating, ice dam, frozen pipe, and thaw-flooding searches that fuel Cleveland's busiest months, built before the season rather than after it.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins, including the urgent after-hours searches winter produces.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then map a plan around the keywords most likely to drive real Cleveland leads, including the seasonal emergency terms your competitors may be sleeping on." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile. The groundwork everything else stands on before it can rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus fresh local content: neighborhood pages, seasonal guides, and the emergency-search terms that decide who wins when Cleveland weather turns." },
      { name: 'Build authority', desc: "Links and citations from trusted Cleveland and industry sources to drive your competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we lean into what is working and push into the next keyword set or neighborhood." },
    ],
    pricing: {
      heading: 'Transparent Cleveland SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core Cleveland keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors battling across several Cleveland neighborhoods and services.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses out to own Cleveland search outright.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal & emergency SEO', 'Multi-neighborhood pages', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Cleveland?', a: "Most Cleveland SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work the climb takes. The tiers sit right above this, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Cleveland?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, quicker on low-competition terms and slower on the most contested ones. Seasonal lake-effect and thaw-flooding terms take time to build, which is exactly why starting in the slow months, summer or early fall, means you are ranking when the weather flips." },
      { q: 'Is SEO better than Google Ads for a Cleveland contractor?', a: "They do different jobs. Ads buy instant traffic that dies the moment you stop paying, and Cleveland contractor keywords run expensive during the winter rush when everyone is bidding at once. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most contractors here do best running SEO as the long-term engine and ads for short bursts." },
      { q: 'Should my Cleveland SEO target seasonal demand?', a: "Without question. Lake-effect snow, ice dams, split pipes, and furnace failures surge from November into March. Thaw flooding adds another wave from March through May. Rankings take months to build, so you have to be in place ahead of the season. We optimize for those seasonal and emergency terms early so the busiest months land on you." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page work, content, link building, local and Map Pack SEO, and revenue-tied reporting. Higher tiers fold in seasonal and emergency SEO plus AI-search optimization. We lock the exact scope in your free Cleveland audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs about that long to show real movement, then it flips to month-to-month. If we are not delivering, you go." },
      { q: 'Will AI Overviews and ChatGPT surface my business?', a: "That is a growing slice of what we optimize for. When a homeowner searches for help after a pipe bursts at midnight, more of those searches now start in AI. We structure your content and schema so AI engines can read, trust, and recommend your business by name." },
      { q: 'Which Cleveland areas do you cover?', a: "The full metro: Ohio City, Tremont, Detroit Shoreway, Slavic Village, Shaker Heights, University Heights, Westlake, Bay Village, Solon, Beachwood, Parma, Strongsville, Lakewood and more, with genuine local pages rather than a single flat Cleveland page." },
      { q: 'How do you wean me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads straight to you. Cleveland homeowners already prefer local crews, so we make sure they can find you when they go looking, which steadily shrinks your dependence on brokers selling you shared leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today across Cleveland, what your competitors are doing to stay ahead, the fixes with the highest payoff, and a realistic timeline with the numbers run for your shop. It maps out exactly what Cleveland SEO would look like for your business and the organic traffic it can earn. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'cleveland', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Cleveland Web Design Company | OnwardCraft',
    metaDescription:
      'Cleveland web design that turns visitors into booked jobs: fast, mobile-first sites built for contractors in the lake-effect market.',
    eyebrow: 'Web Design · Cleveland, OH',
    h1: 'Cleveland web design that turns Ohio City and Westlake visitors into booked jobs',
    h2Exact: 'Cleveland Web Design Company',
    heroSubhead:
      "A handsome website that never rings the phone is just a brochure. We build Cleveland contractors fast, mobile-first sites engineered to turn visitors into booked work, and built to earn the trust of homeowners who can spot a local from a national chain off the homepage alone.",
    primaryCta: 'Get my free quote',
    intro:
      "Cleveland web design has one job a brochure never does: turning a slow, leaky contractor website into a site that books work. Most contractor sites quietly bleed leads, slow on a phone, call button buried, generic copy that could belong to a shop in any city. We build sites that load fast, look like the professional you actually are, and turn Ohio-City-to-Westlake visitors into booked jobs, tuned to win in a market where homeowners go out of their way for a local who knows what lake-effect winters and 1920s brick homes really demand.",
    aioQuestion: 'What makes a good contractor website in Cleveland?',
    aioAnswer:
      "A good Cleveland contractor site loads in under three seconds on a phone, keeps the call button and a clear offer above the fold, proves local trust with real project photos and neighborhood references, and names the specific Cleveland areas you serve. Because most emergency searches happen on mobile during weather events, and because Cleveland homeowners lean hard toward local over national, mobile speed, an obvious next step, and genuine local credibility are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't pulling its weight",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "Plenty of contractor sites list services and then just sit there. No clear offer, no obvious next step, no reason for a homeowner in Parma staring at a frozen pipe to call you over the next result. We design every page around a single job: turning a visitor into a booked lead, even at 2 a.m. in February." },
      { title: "It crawls on a phone", body: "Most of your Cleveland visitors are on mobile, and the share climbs during the winter emergencies that drive your biggest calls. A slow site loses them in seconds and ranks worse on Google on top of it. We build fast, so you keep both the visitor and the ranking." },
      { title: "It doesn't read as local", body: "Cleveland homeowners are loyal to local businesses, full stop. A template site that could just as easily belong to a contractor in Phoenix or Atlanta builds none of that trust. We build sites that name your neighborhoods, show your real work, and feel like they come from someone who has actually been inside a Tremont rowhouse and a Beachwood colonial." },
    ],
    servicesHeading: "What's in an OnwardCraft Cleveland website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site shaped around your trade, your Cleveland neighborhoods, and the exact jobs you want more of." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that is where your Cleveland visitors live, especially during the weather emergencies that drive the most urgent calls." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where homeowners actually use them. Every page carries a next step, and nothing wedges itself between the visitor and a call." },
      { name: 'Copy that sells', desc: "Words written for an anxious Cleveland homeowner, whether they are staring at a frozen pipe at midnight or planning a spring renovation in Shaker Heights, not filler that reads like every other contractor in town." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank: clean structure, schema, fast load, and neighborhood-ready pages for the Cleveland markets you serve." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and clear Google's performance checks, which protects your conversions and your rankings in every season." },
      { name: 'Neighborhood-targeted pages', desc: "Pages built around the specific Cleveland neighborhoods you serve (Ohio City, Westlake, Solon, Beachwood, Parma and more) so you earn local trust and rank for the searches that count.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business, including during the after-hours emergency searches that Cleveland winters produce.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your Cleveland neighborhoods, your most profitable jobs, and your competitors, then map the site around booking more of the work you want, including the seasonal jobs that drive your busiest months." },
      { name: 'Design', desc: "We lay out a custom, mobile-first design built to convert, and you review and shape it before any code gets written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with local credibility, neighborhood references, and the call to action front and center on every page." },
      { name: 'Launch', desc: "We ship it clean, with the SEO foundation, tracking, and speed all dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it on what is actually turning visitors into calls." },
    ],
    pricing: {
      heading: 'Transparent Cleveland web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade Cleveland contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for an established contractor running several Cleveland services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Neighborhood-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location Cleveland businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Cleveland?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. The tiers sit above: fixed price, no surprises, and you own the finished site outright." },
      { q: 'How long does a build take?', a: "A focused site runs about 2 to 4 weeks; a larger custom build runs 4 to 8. We hand you a firm timeline up front and keep you posted through each stage." },
      { q: "Will my site build trust with Cleveland homeowners?", a: "That is a real challenge here, where homeowners are genuinely loyal to local contractors. We build sites that name your neighborhoods, show your real work in real Cleveland homes, and read as unmistakably local, not a template that could belong to a national chain." },
      { q: 'Will my new Cleveland site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank, and pairing it with our SEO service is how you climb the competitive Cleveland terms, especially ahead of lake-effect season." },
      { q: 'Do I own the website?', a: "Every bit of it. The site, the domain, and the content all belong to you. No hostage situations and no platform you are stuck inside." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where your Cleveland traffic comes from, especially the urgent winter emergency calls that make up some of your highest-value jobs." },
      { q: 'What platform do you build on?', a: "We choose the platform that fits your needs and that you can run yourself, usually WordPress or Webflow. We recommend the right fit in your free Cleveland consult and walk you through the tradeoffs in plain English." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build ships with launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time, fixed-price project. Any ongoing maintenance or SEO runs month-to-month, so you can walk whenever you like." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Cleveland contractor site should include, and a fixed-price quote with a timeline. It is the simplest way to see what Cleveland web design built to convert visitors into booked jobs would do for your shop. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'cleveland', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Cleveland Website Redesign | OnwardCraft',
    metaDescription:
      'Cleveland Website Redesign that converts more without losing your rankings. Faster, mobile-first rebuilds with an SEO-safe migration. Free audit.',
    eyebrow: 'Website Redesign · Cleveland, OH',
    h1: 'Cleveland Website Redesign that converts more without losing the rankings you earned',
    h2Exact: 'Cleveland Website Redesign Company',
    heroSubhead:
      "An outdated site quietly bleeds jobs every week, and in Cleveland that means missing emergency calls during the busiest contractor stretch of the year. We redesign contractor sites to convert more and load faster, and we migrate carefully enough that you keep every ranking you have already earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "A Cleveland Website Redesign usually goes one of two bad ways: the site looks sharper but converts exactly the same, or it launches and the rankings evaporate overnight. We do neither. We redesign Cleveland contractor sites for speed and local credibility, build them to stand out in a market that clearly prefers local, and migrate with the redirects and SEO care that protect the traffic you spent years earning, traffic that turns especially valuable the week lake-effect season arrives.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign holds your rankings and usually lifts them, because the new site is faster, more mobile-friendly, and better structured than the old one, all things Google rewards.",
    problemHeading: "Signs your Cleveland site is overdue for a redesign",
    painPoints: [
      { title: "A dated look quietly hands trust to the competition", body: "A Cleveland homeowner weighing a job on their 1930s Ohio City home or their Westlake colonial is spending real money, and an old, cluttered website tells them you are not the operator for that job, even when your work runs circles around the competition. First impressions land in seconds, and on the historic streets that decides who gets the call." },
      { title: "It's slow and clumsy on a phone", body: "When a homeowner in Parma finds water in the basement at 7 a.m. during a thaw, they are on their phone. If your site takes five seconds to load or hides the call button, they are already dialing the next result. We rebuild for mobile speed so you catch those moments instead of losing them." },
      { title: "It blends into the pack and reads as anywhere", body: "Generic contractor sites that could have come from any city earn no local loyalty in Cleveland. We rebuild around the specific neighborhoods you serve and the specific headaches Cleveland homes hand you, so a visitor pegs you as the local expert on sight rather than just another blue link." },
    ],
    servicesHeading: "What's in an OnwardCraft Cleveland redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what is costing you leads and rankings today, so the redesign fixes the real problems instead of just swapping the color scheme around." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you have already earned, which matters double if you are heading into winter." },
      { name: 'Conversion redesign', desc: "Clear offers, smarter call-to-action placement, and lead forms homeowners actually use. We design for booked jobs, not a prettier screenshot." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals, better for both conversions and rankings, and decisive for catching emergency mobile searches." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where most of your Cleveland traffic starts, especially the high-urgency calls that come in during lake-effect season." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the seriousness of the jobs you take on in Cleveland's older, more demanding housing stock." },
      { name: 'Neighborhood-targeted rebuild', desc: "Rebuilt around the specific Cleveland neighborhoods and seasonal work that drive your business, so the new site earns the local trust a generic template never could.", featured: true },
      { name: 'AI-search ready', desc: "Restructured so AI Overviews and ChatGPT can read and recommend your business, including for the after-hours emergency searches that come with Cleveland winter weather.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what is losing you leads and rankings, then map a redesign that fixes it without breaking what already works, and we lock the migration plan before a single page changes." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build a thing, built around your trade and your Cleveland neighborhoods." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prep every redirect and SEO detail for a clean migration that guards your existing rankings." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and watch closely so your rankings hold and climb after launch instead of dropping." },
      { name: 'Optimize', desc: "Post-launch tuning on what is converting, plus ongoing speed and security updates." },
    ],
    pricing: {
      heading: 'Transparent Cleveland redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small Cleveland contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established Cleveland contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Neighborhood-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location Cleveland sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Cleveland?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, set by the site's size and the integrations involved. Fixed price, no surprises, and the finished result is yours to keep." },
      { q: 'Will a redesign cost me my hard-won Google rankings?', a: "Not when it is done carefully, and that is exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually pushes them higher, and in Cleveland, guarding those rankings ahead of winter matters even more." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes roughly 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline at the start and a status update at every stage." },
      { q: 'How do I know I need a redesign?', a: "If your site crawls on phones, looks dated, is a chore to update, is not bringing in leads, or fails to build the local trust Cleveland homeowners expect, it is costing you work. The free audit tells you plainly whether a redesign is worth it and roughly what the current site is costing you." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and sharpen your existing content, preserve what is ranking, and run the technical migration so nothing important slips through the cracks." },
      { q: "Will the redesign help me compete for Cleveland's seasonal work?", a: "Yes. We rebuild around the specific neighborhoods, seasonal services, and emergency triggers that fuel your busiest months. The new site earns local trust and ranks for the searches that count when lake-effect weather and thaw flooding land." },
      { q: 'Will the rebuilt site be fast and mobile-friendly?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings, and is decisive for catching the emergency searches Cleveland winters produce." },
      { q: 'Do I own the redesigned site?', a: "Every bit of it: the site, the domain, and the content are yours. No platform you are chained to and cannot leave." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project, and any ongoing maintenance or SEO stays month-to-month." },
      { q: "What's in the free redesign audit?", a: "A straight read on what your current Cleveland site is leaking in leads and rankings, the specific fixes the redesign should make, and a fixed-price quote with a timeline and a migration plan that guards your existing traffic. It shows exactly what a Cleveland Website Redesign would change before you commit a dollar." },
    ],
  },
];

export const clevelandCity = {
  citySlug: 'cleveland', city: 'Cleveland', state: 'Ohio', stateAbbr: 'OH', metro: 'Cleveland',

  titleTag: 'Cleveland Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Cleveland marketing for contractors: web design, SEO, and local SEO that get you found before lake-effect season and let you own your leads.',

  eyebrow: 'Cleveland · Web Design, SEO & Lead Generation',
  h1: 'Cleveland marketing for contractors that gets you found and booked before the snow flies',
  h2Exact: 'Cleveland Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Cleveland's lake-effect winters, Rust Belt neighborhoods, and homeowners who almost always pick local. One team to get you ranking, converting, and off the rented-lead treadmill for good.",
  heroProof: ['Built for the trades', 'Cleveland neighborhood targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Cleveland audit',

  intro:
    "Cleveland marketing for contractors has to start with one fact: your market runs on weather. Lake-effect snow fires off emergency demand from November into March. The thaw sends basement-flooding calls through the roof from March into May. In between, Ohio City, Tremont, Shaker Heights, and Slavic Village are stacked with 1920s brick homes that need specialist work a national chain is not built to handle. Winning here takes three things pulling together: a site that earns local trust and converts, SEO that ranks you for what people search (including the seasonal emergency terms), and local SEO that lands you in the Map Pack for the neighborhoods you actually drive to. Here is how we help Cleveland contractors pull that off.",
  aioQuestion: 'How do Cleveland contractors get more leads online?',
  aioAnswer:
    "Cleveland contractors get more leads by pairing a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack neighborhood by neighborhood. Because Cleveland homeowners lean hard toward local crews and because demand spikes sharply around lake-effect snow and the spring thaw, the contractors who build their rankings in the slow season and target the specific neighborhoods and emergency terms that matter here take the most work when it counts.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Cleveland searches \"near me,\" ahead of lake-effect season so your phone rings the moment it hits. The single highest-return move for most local contractors.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search, including the winter emergency and thaw-flooding terms that fuel Cleveland's busiest months, and measure the whole thing in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites that earn local trust, turn Cleveland visitors into booked jobs, and look nothing like the national-chain template sites your competitors keep buying.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed, local credibility, and conversions, then migrate it carefully enough that you keep every ranking you have already earned before the next winter rush.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Cleveland?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients pair a high-converting website with SEO and local SEO so they rank, convert, and own their leads, which matters double in Cleveland where seasonal demand makes timing everything." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, restoration, electrical, solar, and general contractors. We understand what lake-effect ice does to a low-slope roof, what the thaw does to old Cleveland basement drainage, and what specialist renovation work in Tremont or Shaker Heights actually takes." },
    { q: "Why does Cleveland's market need its own approach?", a: "Because demand here is seasonal and urgent. Lake-effect snow and thaw flooding create sharp, predictable spikes in contractor calls, and you have to be ranking before each window opens. And because Cleveland homeowners genuinely favor local crews, your web presence has to look and feel local, not like a template a national shop swapped a city name into." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds running $2,000 to $9,000. SEO and local SEO go month-to-month from $750 to $3,000, with no long contract. We nail down the exact scope for your Cleveland shop in the free audit." },
    { q: 'Which Cleveland areas do you serve?', a: "The full metro: Ohio City, Tremont, Detroit Shoreway, Slavic Village, University Heights, Shaker Heights, Westlake, Bay Village, Solon, Beachwood, Strongsville, Parma, Lakewood, Euclid and more, with genuine neighborhood pages rather than one flat Cleveland page." },
    { q: 'Where should I start?', a: "Start with a free Cleveland audit. We look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work before the next weather season. It is the simplest first step into Cleveland marketing for contractors that gets you found and booked. No pitch deck, just a plan." },
  ],
};
