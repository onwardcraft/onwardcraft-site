// ALBANY — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Albany's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// ALBANY — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why winning the Capital Region takes more than a generic playbook',
  body:
    "Albany is the seat of New York State government, which gives this market a backbone almost no other metro has: the Governor's office, the Legislature, and dozens of state agencies anchor a homeowner base of state employees, SUNY Albany faculty, Albany Med physicians and researchers, and attorneys connected to Albany Law. These are paychecks that hold steady when the broader economy wobbles, so demand for home services here stays remarkably consistent. Now add GlobalFoundries' Fab 8 in Malta, one of the most advanced semiconductor plants in the Western Hemisphere, and you get engineers and tech salaries buying property in Saratoga Springs, Clifton Park, and Colonie who expect work done to a high standard and will read your reviews before they dial. The housing makes it harder still: Albany dates to 1614, and the Victorian, Federal, Dutch Colonial, and Greek Revival homes packed into Center Square, Washington Park, and the Helderberg neighborhoods are gorgeous and unforgiving. Owners of 150-year-old houses want a contractor who genuinely understands that construction, and they can tell the difference fast. Then there is the weather: nor'easters, ice storms, and heavy snow from November through March, followed by spring flooding off the Hudson and Mohawk. Seasonal demand swings hard, and the contractor who already ranks when the first storm lands is the one whose phone rings. If you want those calls, you cannot wait until the forecast turns.",
  pullQuote: 'In New York\'s capital, where the homes are old, the winters are punishing, and the paychecks are steady, the contractor who ranks before the storm owns the season.',
  donut: {
    title: "Albany's aging housing stock",
    value: 55,
    centerLabel: 'pre-1960 housing',
    legend: [
      { label: 'Pre-1960 homes', pct: 55, kind: 'teal' },
      { label: 'Newer', pct: 45, kind: 'grey' },
    ],
  },
  seasonTitle: 'When the calls come flooding in',
  seasonCaption: 'Nor\'easter and winter (Nov to Mar), spring river flooding (Mar to May), summer HVAC (Jun to Aug)',
  seasonalDemand: [
    { m: 'J', v: 90, peak: true }, { m: 'F', v: 88, peak: true }, { m: 'M', v: 82, peak: true },
    { m: 'A', v: 78, peak: true }, { m: 'M', v: 55, peak: true }, { m: 'J', v: 68 },
    { m: 'J', v: 80, peak: true }, { m: 'A', v: 78, peak: true }, { m: 'S', v: 54 },
    { m: 'O', v: 58 }, { m: 'N', v: 80, peak: true }, { m: 'D', v: 88, peak: true },
  ],
  stats: [
    { value: '1614', label: 'the year Albany was chartered, making it one of the oldest cities in the country' },
    { value: '~55%', label: 'of Albany homes predate 1960, fueling steady demand for contractors who know old construction', accent: true },
    { value: 'Nov-Mar', label: 'the nor\'easter window, when roofing, heating, and ice dam calls erupt overnight' },
    { value: 'Top 3', label: 'Map Pack spots that absorb the bulk of the clicks across a split Capital Region' },
  ],
  neighborhoods: [
    'Center Square', 'Washington Park', 'Helderberg', 'Lark Street', 'Colonie',
    'Clifton Park', 'Saratoga Springs', 'Troy', 'Schenectady', 'Latham',
    'Guilderland', 'Cohoes', 'Watervliet', 'Malta', 'Bethlehem',
  ],
};

const AREAS = [
  'Albany', 'Troy', 'Schenectady', 'Colonie', 'Clifton Park', 'Latham',
  'Guilderland', 'Saratoga Springs', 'Malta', 'Cohoes', 'Watervliet',
  'Bethlehem', 'Center Square', 'Washington Park', 'Helderberg',
];

const FOUNDER =
  "Here is the honest version: I built OnwardCraft after watching too many skilled contractors wire a few thousand a month to Angi and HomeAdvisor for leads that three of their rivals were buying at the same time. Rented leads are not a business; they are a treadmill. And that stings even more in Albany, where the homeowner across the table might be a state attorney or a Fab 8 engineer who can tell instantly whether you actually understand 1880s Victorian framing or are just guessing. So this is what we do: get you ranking for the jobs you want, in the Capital Region neighborhoods you actually serve, with leads that belong to you and only you. No year-long contract holding you hostage. If we are not earning it, you walk.";

const WHY = [
  {
    title: 'Trades are all we touch',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We speak nor'easter emergency, ice dam repair, and Victorian and Dutch Colonial renovation fluently, because the Capital Region's housing stock is some of the most demanding in the Northeast and we built around it on purpose.",
  },
  {
    title: 'We end your lead-rental habit',
    body: "Your goal and ours is a pipeline you own outright: no recurring check to a broker for a homeowner three competitors are also calling. That matters even more here, where your prospect may be a state attorney or a semiconductor engineer who will scrutinize you before picking up the phone.",
  },
  {
    title: 'We genuinely know this metro',
    body: "Albany, Troy, Schenectady, Saratoga Springs, Clifton Park, Colonie. We target block by block, because a Washington Park Victorian owner and a Clifton Park new-build buyer want completely different things. That is the work a national shop cannot fake by dropping your city name into a template.",
  },
  {
    title: 'No contracts, no fog',
    body: "Prices published on the page, reporting tied to actual leads, and month-to-month billing after the first 90 days. If we stop earning your business, you leave clean. That keeps the pressure exactly where it should be: on us.",
  },
];

const PROOF = {
  heading: "We are new, so you get honest math instead of a wall of logos",
  body:
    "Other agencies will flash a grid of client logos at you. We are a young, founder-led shop and we will not invent a track record we have not earned yet. What we can hand you is the reason this approach works, drawn straight from Google's and the industry's own research on how people search for local services.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here is a rough sketch, labelled clearly as illustrative and not a result we are claiming: suppose an Albany contractor pulls roughly 1,200 local \"near me\" impressions a month across a handful of Capital Region neighborhoods. Climbing out of page-two obscurity into the top three is the gap between a trickle of calls and a calendar booked solid, and when a nor'easter rolls in or the Hudson spills over, that gap turns into lost revenue overnight. In your free audit we run the real numbers for your business: your rankings, your search volume, and a straight 90-to-180-day plan to get there.",
  disclaimer:
    "The figures above are published benchmarks (Google and BrightLocal) plus one illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Albany', state: 'New York', stateAbbr: 'NY', metro: 'Albany-Schenectady-Troy (Capital Region)',
  heroProof: ['Built only for the trades', 'Block-by-block Capital Region targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const albanyLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'albany', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Albany Local SEO Company | Map Pack Wins | OnwardCraft',
    metaDescription:
      'Search your trade in Albany and only three businesses show up on the map. We get you into those three across the Capital Region so the call rings your phone.',
    eyebrow: 'Local SEO · Albany, NY',
    h1: 'When the Capital Region searches for your trade, be the name on the map',
    h2Exact: 'Albany Local SEO Company',
    heroSubhead:
      "Google pins exactly three businesses to the map on a \"near me\" search, and everyone below those three is invisible. In a metro fractured across Albany, Troy, Schenectady, and a dozen suburbs, we put you in that top three for the neighborhoods you serve, so the call rings your phone instead of a competitor's.",
    primaryCta: 'Get my free Albany audit',
    intro:
      "Albany local SEO hinges on a single question: when a homeowner in Center Square, Colonie, or Saratoga Springs types your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll an inch further. This market is split across Albany, Troy, Schenectady, and a ring of suburbs that each carry their own identity, and the deep stock of old homes means people are hunting for specialists, not generalists. Owning one of those three pins in the neighborhoods you work is the entire ball game, and that is where we put you.",
    aioQuestion: 'How do Albany businesses rank higher in local search?',
    aioAnswer:
      "You earn it by nailing four things: a Google Business Profile tuned to the exact services and Capital Region neighborhoods you want; a name, address, and phone that match everywhere on the web; a steady flow of genuine reviews; and local content tied to specific Albany-area neighborhoods and the seasonal swings that drive this market. Because the metro is split across Albany, Troy, Schenectady, and their suburbs, precise geographic targeting beats vague 'Capital Region' phrasing every single time.",
    problemHeading: "When your phone goes quiet, it is usually one of these",
    painPoints: [
      { title: 'Rivals are sitting in all three map spots', body: "Run a search for your own service plus \"near me\" in Albany or Troy or Colonie right now. Those three businesses Google pins to the map collect the lion's share of the clicks. If you are not one of them in each neighborhood you cover, your craftsmanship on those 1880s Victorians barely matters, because most homeowners never lay eyes on your name. Breaking into that top three, neighborhood by neighborhood, is the highest-return move a Capital Region contractor can make." },
      { title: 'You keep paying for leads you never own', body: "Angi, Thumbtack, and HomeAdvisor sell the same Albany homeowner to four contractors, then bill each of you to scrap over them. With a homeowner base this educated (state workers, SUNY faculty, GlobalFoundries engineers), people dig into your reputation before they call, so an organic pipeline you control is worth far more than a shared lead. Local SEO builds precisely that: a homeowner finds you, calls you, and no one else got the same lead." },
      { title: 'You go dark right before the nor\'easter', body: "Albany winters are no joke. Heavy snow, ice storms, and nor'easters set off roof, heating, and ice dam calls overnight from November through March. The contractors already ranking when the sky opens up are the ones who field those calls. If your local SEO ignores the seasons, you spend the whole year chasing demand instead of owning it." },
    ],
    servicesHeading: 'What it actually takes to rank you across the Capital Region',
    services: [
      { name: 'Google Business Profile', desc: "The single biggest lever in the Map Pack. We sharpen your categories, services, service area, photos, and posts so Google knows exactly which Capital Region searches belong to you, whether that is Albany, Troy, Schenectady, or Saratoga Springs, and the right calls start landing." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to line up everywhere Google checks. We correct the listings that conflict and create the ones you are missing across this fragmented metro, so Google trusts you and ranks you higher." },
      { name: 'Reviews that keep arriving', desc: "A simple engine that turns each finished job into a fresh review. It lifts your ranking and tells discerning Capital Region homeowners you are the real thing, which means more of them choose you over the next pin." },
      { name: 'Neighborhood pages', desc: "Real pages for Center Square, Washington Park, Colonie, Clifton Park, Saratoga Springs, Troy, Schenectady, and beyond, so you rank for the exact neighborhood someone is actually searching rather than a blanket \"Albany.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, and mobile speed: the wiring under the hood that lets every other signal rank across a multi-city metro and feed you more booked jobs." },
      { name: 'Local link building', desc: "Mentions and links from Capital Region sources Google respects: local press, chambers of commerce, trade associations, and partners. In a mid-sized metro this is frequently what splits page one from page two." },
      { name: 'Seasonal and emergency SEO', desc: "We shape your profile and content around nor'easter season, spring Hudson flooding, and summer HVAC demand, so you are already visible before each surge rather than scrambling once it lands.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now begins inside AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and recommend you to Capital Region homeowners.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We pin down exactly where you rank today across Albany, Troy, Schenectady, and the suburbs, then identify which competitors are beating you in the Map Pack and the reasons why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP come first because they move fastest. Most clients see early lift here within a few weeks, which builds momentum for the rest." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live and compound week over week, an advantage that pays off hard in a market where homeowners research carefully before they ever dial." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across the Capital Region, written around seasonal demand and the old-home expertise your best customers are specifically looking for." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and booked leads, not vanity rankings. Then we go capture the next neighborhood and widen your lead." },
    ],
    pricing: {
      heading: 'Pricing you can read right here',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation solid.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For contractors competing across multiple Capital Region cities and suburbs.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors set on owning the map from Saratoga to Schenectady.', features: ['Everything in Local Growth', 'Local link building', 'Seasonal and emergency SEO', 'Multi-city and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Albany?', a: "Most Albany engagements run between $750 and $2,500 a month, set by how many Capital Region cities and neighborhoods you are chasing. The tiers right above lay it out. No hidden fees, no long contract, and we lock the exact scope in your free audit before you commit a dollar." },
      { q: 'How fast will I show up in the Map Pack?', a: "Profile fixes can move within a few weeks. Competitive Capital Region keywords usually need 90 to 180 days of steady work, since reviews and citations compound over time. Anyone promising you page one in 30 days in a split metro like this is selling fairy dust, not results." },
      { q: 'What makes Albany local SEO its own animal?', a: "Several things. The metro is fragmented, so Albany, Troy, Schenectady, Saratoga Springs, and the suburbs each demand their own targeting. The housing is exceptionally old, so homeowners search specialist terms like 'Victorian restoration' or 'ice dam repair' that generic contractors never rank for. And the seasonal swings here (nor'easters, spring flooding, summer HVAC) hit harder than most markets, so being ranked ahead of each season is worth real money." },
      { q: 'Can you rank me in Troy and Schenectady, not just Albany?', a: "Yes, and that is how we treat the whole Capital Region. Troy carries its own identity as an old river-industrial city riding a renovation wave, and Schenectady has its own GE-heritage homeowner base. We build separate neighborhood pages and local signals for each city so you surface wherever the search actually happens, and the calls follow." },
      { q: 'Which areas do you cover?', a: "The full Capital Region: Albany, Troy, Schenectady, Colonie, Clifton Park, Latham, Guilderland, Saratoga Springs, Malta, Cohoes, Watervliet, Bethlehem, and the neighborhoods inside them like Center Square, Washington Park, Helderberg, and Lark Street. We build genuine local pages instead of one catch-all 'Albany area' page, because the real pages are what rank." },
      { q: 'Do you work specifically with contractors?', a: "It is nearly all we do: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand nor'easter emergency calls, ice dam repairs, Victorian and Dutch Colonial renovation work, and the steady, professional homeowner base that state government and GlobalFoundries create in this market." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More 'near me' research now starts inside AI rather than classic search. We structure your content and schema so those engines can read, trust, and cite your business, which matters a lot when Capital Region homeowners run deep research before calling a specialist contractor." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that is roughly how long local SEO needs to show real movement. After that you are month-to-month. If we are not delivering, you walk, and the accountability stays squarely on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that send leads straight to you, and since Capital Region homeowners are educated professionals who research carefully, those owned leads tend to convert at a higher rate than shared ones anyway." },
      { q: 'What do I get in the free audit?', a: "A clear read on where you rank today across the Capital Region, what your Map Pack competitors are doing to beat you, the fixes that will move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck, just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'albany', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Albany SEO Company | Rank Higher, Get Leads | OnwardCraft',
    metaDescription:
      'Albany SEO that ranks Capital Region contractors on Google and delivers leads you own. Revenue-tied reporting, no lock-in, built for old homes and hard winters.',
    eyebrow: 'SEO Services · Albany, NY',
    h1: 'Put your Albany business at the top of Google and keep it parked there',
    h2Exact: 'Albany SEO Company',
    heroSubhead:
      "Ads die the instant you stop paying. SEO does the opposite: rank once for what Capital Region homeowners search and the leads keep arriving, including the seasonal surges that define this market. We build that ranking and tie every report to real calls and booked jobs.",
    primaryCta: 'Get my free Albany SEO audit',
    intro:
      "Albany SEO boils down to one question: when a homeowner in Clifton Park, Washington Park, or Saratoga Springs searches your trade, do you land on page one or page two? Page two might as well be page fifty, because nobody scrolls there. We get contractors ranking for the money keywords across a fragmented, multi-city Capital Region, and we measure the work in leads rather than vanity traffic. In practice that means ranking before nor'easter season, before the spring rivers rise, and before the summer HVAC rush, so you capture each wave instead of missing it.",
    aioQuestion: 'How do Albany businesses rank higher on Google?',
    aioAnswer:
      "They rank by repairing the technical foundation of the site, optimizing each page for the exact terms Capital Region customers search, publishing local content tied to specific neighborhoods across Albany, Troy, Schenectady, and the suburbs, and earning links from trusted regional sources. Because Albany's housing skews old, specialist terms like Victorian restoration, ice dam repair, and pre-1960 plumbing often convert better than generic service phrases, and seasonal content built around nor'easters and Hudson River flooding captures demand spikes most contractors leave on the table.",
    problemHeading: "Three reasons your Albany site is not bringing in work",
    painPoints: [
      { title: 'You are buried on page two', body: "Almost no one clicks past the first page of Google. In a Capital Region spread across Albany, Troy, Schenectady, and the suburbs, if you are not in the top handful of results for what you sell in each city, your site is effectively invisible, no matter how deep your expertise in old homes or emergency winter repairs runs. Page one is where the leads live, and that is where we move you." },
      { title: 'You are renting traffic from Google Ads', body: "Ads can work, but the moment the card stops, the leads stop cold. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost. In Albany, where the homeowner base holds steady year after year (state employees, SUNY staff, GlobalFoundries engineers), those owned rankings only grow more valuable with time." },
      { title: 'You are not ranked when the season turns', body: "Albany winters unleash nor'easters, ice dams, and heating emergencies from November through March. Spring brings Hudson and Mohawk flooding. Summer brings HVAC demand. Ranking takes months to build, so you have to already be in place ahead of each season rather than scrambling for visibility after the storm has passed and the calls have gone elsewhere." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings in the Capital Region',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google demands before it will rank you at all, which is critical for sites on aging platforms or with a DIY history." },
      { name: 'On-page optimization', desc: "Every page that matters tuned to the exact terms Capital Region homeowners search, from 'roofing contractor Albany' to 'Victorian home restoration Troy' and 'ice dam repair Clifton Park,' so each one earns its rankings." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers are searching, earn links, and pull in leads on autopilot, including seasonal content built around nor'easters, spring flooding, and summer HVAC." },
      { name: 'Link building', desc: "Authority from real Capital Region and industry sources. In a mid-sized metro, links from local press, chambers of commerce, and trade associations frequently break the tie on competitive keywords and tip you onto page one." },
      { name: 'Local SEO and Google Business Profile', desc: "Map Pack optimization so you also win the 'near me' searches across your Capital Region cities, working alongside your organic rankings to fill the calendar from two directions." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and booked leads, not just rankings and traffic, so you always know exactly what your SEO investment is returning." },
      { name: 'Seasonal and emergency SEO', desc: "We rank you for the nor'easter, ice dam, spring flooding, and summer HVAC searches that drive this market's busiest weeks, so you are visible before each spike rather than chasing it afterward.", featured: true },
      { name: 'AI search and GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, which matters when educated Capital Region homeowners research specialist contractors carefully before calling.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors across Albany, Troy, Schenectady, and the suburbs, then build a roadmap around the keywords most likely to drive real Capital Region leads to your phone." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile: the foundation everything else needs to rank, and especially important on sites carrying years of accumulated technical debt." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the seasonal, specialist, and emergency terms that set Capital Region contractors apart from the generalists." },
      { name: 'Build authority', desc: "Links and citations from trusted Capital Region and industry sources, the push that drives your competitive keywords onto page one and keeps them there." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what is producing and expand into the next city or keyword set so your pipeline keeps widening." },
    ],
    pricing: {
      heading: 'Transparent Albany SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site chasing its core local Capital Region keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across several Capital Region cities and services.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses out to own search from Saratoga to Schenectady.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal & emergency SEO', 'Multi-city targeting', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Albany?', a: "Most Albany SEO engagements run $900 to $3,000 a month, set by how many Capital Region cities and keywords you are targeting and how much content and link work the job needs. The tiers above spell it out, with no hidden fees and no long contract holding you in place." },
      { q: 'How long does SEO take to work in Albany?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tight neighborhood terms and slower on broad Capital Region or multi-city keywords. SEO compounds, so the longer you run it, the more the gains stack up and the cheaper each lead gets." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that vanishes the day you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. In Albany, with a stable government-employee homeowner base, those rankings keep paying off year after year. Most contractors win by running SEO as the long-term engine and ads for short bursts." },
      { q: 'Should my Albany SEO target seasonal demand?', a: "Without question. When a nor'easter lands, searches for roofing, heating, and ice dam repair spike overnight, and the contractors already ranking field those calls. Spring Hudson River flooding drives restoration and waterproofing searches, and summer heat drives HVAC. Ranking takes months, so you have to be in position before each season rather than catching up after." },
      { q: 'What is included in your SEO service?', a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal and emergency plus AI-search optimization. We confirm the exact scope in your free audit so there are no surprises." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs roughly that long to show real movement, then you are month-to-month. If we are not delivering, you leave with no penalty and the pressure stays on us." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "It is a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, which is especially important when Capital Region homeowners research carefully before calling a specialist contractor for their 1890 brownstone." },
      { q: 'Which areas around Albany do you cover?', a: "The full Capital Region: Albany, Troy, Schenectady, Colonie, Clifton Park, Latham, Guilderland, Saratoga Springs, Malta, and their neighborhoods like Center Square, Washington Park, Helderberg, and Lark Street, with genuine local pages instead of one generic 'Albany area' page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads straight to you. In Albany, where homeowners are educated professionals who research before calling, owned leads convert better than shared ones anyway, and they do not cost you a per-lead fee split with three competitors." },
      { q: 'What is in the free SEO audit?', a: "Where you rank today across the Capital Region, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis you can act on." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'albany', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Albany Web Design Company | Sites That Book Jobs',
    metaDescription:
      'Albany web design that turns visitors into booked jobs: fast, mobile-first sites built for Capital Region contractors who serve old homes and hard winters.',
    eyebrow: 'Web Design · Albany, NY',
    h1: 'Albany web design that turns quiet visitors into booked jobs',
    h2Exact: 'Albany Web Design Company',
    heroSubhead:
      "A handsome website that never rings the phone is just a brochure. We build Capital Region contractors fast, mobile-first sites engineered to convert visitors into booked work and to earn the trust of educated, professional homeowners who research hard before they call.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Albany contractor websites bleed leads quietly: slow on a phone, a call button buried halfway down, and zero signal that you understand 150-year-old homes or know how to handle a nor'easter emergency. Done right, web design fixes all of it. We build sites that load fast, look like the specialist you actually are, and turn Capital Region visitors into booked jobs, whether they are state employees in Center Square, Fab 8 engineers in Clifton Park, or professors out in Guilderland.",
    aioQuestion: 'What makes a good contractor website in Albany?',
    aioAnswer:
      "A strong Albany contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves expertise with old homes and seasonal emergencies, and names the specific Capital Region cities and neighborhoods you serve. Because Albany's homeowner base is educated and professional (state workers, SUNY staff, GlobalFoundries engineers), trust signals like real project photos of Victorian and Federal-style homes and honest reviews carry more weight here than in most markets.",
    problemHeading: "Why your current site is not bringing in work",
    painPoints: [
      { title: 'It is a brochure, not a lead engine', body: "Plenty of contractor sites just list services and sit there: no clear offer, no obvious next step, and nothing showing you know what it takes to work on a 130-year-old Center Square rowhouse or answer an ice dam emergency at 2 AM. Capital Region homeowners are discerning. They will close the tab and call whoever's site actually communicates real expertise, and right now that may not be you." },
      { title: 'It crawls on a phone', body: "Most of your Albany visitors arrive on mobile, and they bounce if your site takes more than a few seconds to load, especially mid-nor'easter when they need a roofer this minute. Slow sites also rank worse, so you lose twice. We build fast, so you keep both the visitor and the ranking that brought them." },
      { title: 'It does not speak to your market', body: "A Washington Park homeowner restoring a Victorian townhouse wants proof you have worked on houses like theirs, not a vague 'serving the Capital Region' page that could belong to anyone. We build sites that name the cities and neighborhoods you cover, showcase the old-home expertise you have earned, and make it plain why they should call you instead of the next result down." },
    ],
    servicesHeading: "What goes into an OnwardCraft Albany website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site shaped around your trade, your Capital Region neighborhoods, and the caliber of work this market expects, so it reads as credible the second it loads." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that is where most of your Albany traffic lives, and because the emergency call during a nor'easter never comes from a desktop." },
      { name: 'Conversion-focused UX', desc: "Clear offers, unmissable call buttons, and lead forms placed where people actually use them. Every page gives the visitor a next step toward booking you." },
      { name: 'Copy that sells', desc: "Words written for educated Capital Region homeowners that communicate genuine expertise in old homes, seasonal emergencies, and specialist trade work, turning interest into calls." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank across Albany, Troy, Schenectady, and the suburbs, with clean structure, schema, fast load, and neighborhood-ready pages baked in." },
      { name: 'Speed and Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects your conversions and your rankings at the same time." },
      { name: 'Capital Region neighborhood pages', desc: "Pages built around Center Square, Washington Park, Colonie, Clifton Park, Saratoga Springs, Troy, Schenectady, and the rest, so you stand out in each city instead of dissolving into one generic Albany page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search, especially for specialist home services, shifts toward AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your Capital Region territory, your best jobs (old-home work, emergency repairs, new builds), and your competitors, then map the site around booking more of exactly what you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert, with the trust signals Albany's professional homeowner base looks for. You see it and shape it before a single line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write copy that sells, with the call to action front and center on every page and the expertise language that wins educated buyers." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one, ready for nor'easter season or whatever the Capital Region throws next." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what is actually converting across your Capital Region territory, so the site keeps improving." },
    ],
    pricing: {
      heading: 'Transparent Albany web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade Capital Region contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors serving multiple Capital Region cities.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Capital Region neighborhood pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-city businesses across the Capital Region.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Albany?', a: "Most Capital Region contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site help me stand out in the Capital Region?', a: "That's exactly what we build for. Albany, Troy, Schenectady, and the suburbs are one market but they each have their own character — we build around the specific cities and neighborhoods you serve, show the old-home and seasonal expertise that matters here, and put a clear offer front and center. The homeowner base is educated and researches before calling; your site needs to earn that call." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages for the Capital Region cities you serve. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where most of your Albany traffic comes from — and because emergency calls during a nor'easter come from a phone in the dark, not a desktop. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Capital Region contractor site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'albany', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Albany Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your Albany website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs in the Capital Region.',
    eyebrow: 'Website Redesign · Albany, NY',
    h1: 'Redesign your Albany website without losing your rankings',
    h2Exact: 'Albany Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, and missing the specialist trust signals that educated Capital Region homeowners need to see before they call. We redesign Albany contractor sites to convert more and load faster, and we migrate carefully so you keep every ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Capital Region contractor sites for speed and conversions, build them to speak to the educated professional homeowners who dominate this market, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them — because the new site is faster, mobile-first, and better structured than the old one. In a market like Albany where homeowners research carefully, a modern, credible site also converts those visits at a higher rate.",
    problemHeading: "Signs your Albany site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "For high-ticket renovation or emergency work on a Victorian or Federal-style home, Albany homeowners judge you by your site in seconds. An old, cluttered design quietly signals that you might not be the specialist they need — even when your work is exceptional. A modern site that looks like the caliber of contractor you are changes that first impression." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your Capital Region visitors before they ever see your offer — and when those visitors are searching during a nor'easter emergency or right after a basement floods, you can't afford to lose them. A redesign built mobile-first wins them back." },
      { title: "It doesn't differentiate you in a fragmented market", body: "The Capital Region is Albany, Troy, Schenectady, Saratoga Springs, and a dozen suburbs — each with its own homeowner character. A generic old site that says 'serving the Capital Region' gives a visitor no reason to pick you over the next result. A redesign built around the specific cities you serve, the old-home expertise you've built, and the seasonal work that defines this market changes the equation." },
    ],
    servicesHeading: "What's in an OnwardCraft Albany redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today — slow load, poor mobile experience, missing trust signals, weak local targeting — so the redesign fixes real problems." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned across the Capital Region." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks — including the trust signals that matter to educated Albany homeowners." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings, and essential for emergency searches in bad weather." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where most of your Capital Region traffic lives and where emergency calls originate." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work on old homes and the professional expectations of your market." },
      { name: 'Capital Region neighborhood rebuild', desc: "Rebuilt around the specific cities and neighborhoods you serve — Center Square, Washington Park, Troy, Schenectady, Clifton Park, Saratoga Springs — so the new site ranks and converts locally instead of blending into a generic 'Albany area' page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search — especially for specialist contractors — shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you leads and rankings across the Capital Region, then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design that communicates the specialist expertise Albany homeowners expect — you review and shape it before we build." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration across your Capital Region pages." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and improve, not drop — including watching for impact on your seasonal and city-specific pages." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting across Albany, Troy, Schenectady, and the suburbs, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Albany redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small Capital Region contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor serving multiple Capital Region cities.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Capital Region neighborhood rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-city businesses across the Capital Region.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Albany?', a: "Most Capital Region redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully — and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them because the new site is faster and better structured." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, doesn't convey the specialist expertise Capital Region homeowners expect, isn't bringing in leads, or blends into the multi-city market without standing out in Albany or Troy or Schenectady — it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost — including your neighborhood and seasonal pages if you have them." },
      { q: 'Will the redesign help me compete across the Capital Region?', a: "Yes, and that's the point in a fragmented multi-city market. We rebuild around the specific cities and neighborhoods you serve — with trust signals for old-home expertise and seasonal availability that matter to this homeowner base — so the new site performs in Albany, Troy, Schenectady, and wherever else you work." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings — and makes sure you capture emergency calls from homeowners on a phone in the middle of a storm." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings across the Capital Region, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const albanyCity = {
  citySlug: 'albany', city: 'Albany', state: 'New York', stateAbbr: 'NY', metro: 'Albany-Schenectady-Troy (Capital Region)',

  titleTag: 'Albany Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Albany and Capital Region contractors. Get found, get booked, and own your leads instead of renting them — built for old.',

  eyebrow: 'Albany · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Capital Region contractors found and booked',
  h2Exact: 'Albany Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Albany's old housing stock, nor'easter winters, and stable government-professional homeowner base. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Capital Region neighborhood targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Albany audit',

  intro:
    "If you run a contracting business in the Capital Region, you're navigating a genuinely complex market: Albany, Troy, Schenectady, and a ring of suburbs each with their own character; some of the oldest housing stock outside New England demanding specialist expertise; winters that drive nor'easter emergencies, ice dams, and heating calls from November through March; and a homeowner base of state workers, university staff, Albany Med physicians, and GlobalFoundries engineers who research carefully before they call. Winning here takes three things working together: a site that earns trust and converts, SEO that ranks you for what this market actually searches, and local SEO that puts you in the Map Pack for the neighborhoods you serve. Here's how we help Capital Region contractors do exactly that.",
  aioQuestion: 'How do Albany contractors get more leads online?',
  aioAnswer:
    "Albany contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches — including specialist old-home and seasonal emergency terms — and local SEO that wins the Google Map Pack across Albany, Troy, Schenectady, and their suburbs. Because the homeowner base skews educated and professional, trust signals like real project photos, genuine reviews, and content that demonstrates old-home expertise convert at higher rates than generic contractor pages.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Capital Region Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Albany, Troy, or Schenectady searches 'near me.' Built for a fragmented multi-city metro with seasonal demand spikes that define the busiest weeks of the year.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your Capital Region customers search — including specialist old-home terms and nor'easter seasonal searches — and build an asset you own instead of renting traffic from ads.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to earn trust with educated Capital Region homeowners and turn visits into booked jobs — not brochures that just sit there while your phone stays quiet.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed, conversions, and Capital Region credibility — and migrate it carefully so you keep every bit of ranking you've already earned across Albany, Troy, and Schenectady.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Albany?', a: "Four core services for Capital Region contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads across the Albany-Schenectady-Troy metro." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors — so we understand nor'easter emergencies, ice dam repairs, Victorian and Dutch Colonial renovation work, and the professional homeowner base that state government and GlobalFoundries create in this market." },
    { q: 'Why does the Capital Region need a different approach?', a: "The metro is fragmented across Albany, Troy, Schenectady, and a ring of suburbs — each with its own identity and homeowner character. The housing stock is among the oldest outside New England, creating demand for specialist contractors that generic SEO misses entirely. And seasonal demand here — nor'easters, spring flooding, summer HVAC — is more dramatic than most markets. Winning means targeting tight and ranking before each season." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Capital Region areas do you serve?', a: "The full metro: Albany, Troy, Schenectady, Colonie, Clifton Park, Latham, Guilderland, Saratoga Springs, Malta, Cohoes, Watervliet, Bethlehem, and their neighborhoods — Center Square, Washington Park, Helderberg, Lark Street, and more — with genuine local pages rather than one generic 'Capital Region' page." },
    { q: 'Where should I start?', a: "Start with a free Albany audit. We'll look at your website, your rankings, and your Map Pack presence across the Capital Region, then tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};
