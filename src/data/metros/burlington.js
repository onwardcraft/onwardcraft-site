// BURLINGTON: per-metro, per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Burlington's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// BURLINGTON: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Burlington is a moving target',
  body:
    "Burlington is Vermont's largest city and the economic engine of the state, anchored by the University of Vermont and its 14,000 students, the UVM Medical Center as the state's biggest employer, and Champlain College up on the hill. The homeowners here skew educated, progressive, and research-heavy. They read before they buy, and they lean hard toward independent local contractors over national chains. This is a Ben and Jerry's, farmers-market-on-the-Church-Street-Marketplace, buy-local kind of town, and an efficiency-minded one too, with Efficiency Vermont rebates pulling owners toward weatherization and heat pumps. Two forces shape demand. First, almost everyone searches on a phone with \"near me\" attached and taps one of the first names Google drops on the map. Second, this is one of the coldest, snowiest small metros in the country, and the housing stock is old, so deep cold and heavy snow off Lake Champlain from November through April send roofing, heating, and ice-dam work climbing. The contractors already ranking when the freeze arrives are the ones who book it.",
  pullQuote: 'When the snow piles up on Lake Champlain, the Burlington contractors already ranking are the ones who book the work.',
  donut: {
    title: 'How Burlington compares',
    value: 62,
    centerLabel: 'college-educated',
    legend: [
      { label: 'College-educated', pct: 62, kind: 'teal' },
      { label: 'Other', pct: 38, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Winter snow & ice (Nov to Apr), peaking Dec to Mar',
  seasonalDemand: [
    { m: 'J', v: 88, peak: true }, { m: 'F', v: 90, peak: true }, { m: 'M', v: 82, peak: true }, { m: 'A', v: 60 },
    { m: 'M', v: 48 }, { m: 'J', v: 44 }, { m: 'J', v: 42 },
    { m: 'A', v: 44 }, { m: 'S', v: 52 }, { m: 'O', v: 64 },
    { m: 'N', v: 78, peak: true }, { m: 'D', v: 86, peak: true },
  ],
  stats: [
    { value: 'Largest', label: 'city in Vermont and the state economic hub' },
    { value: '~62%', label: 'of Burlington adults hold a college degree', accent: true },
    { value: 'Nov-Apr', label: 'long, brutal winter when trade demand spikes' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks' },
  ],
  neighborhoods: [
    'Hill Section', 'Old North End', 'South End', 'New North End', 'Downtown',
    'South Burlington', 'Winooski', 'Essex', 'Williston', 'Shelburne',
    'Colchester', 'Burlington Waterfront', 'Five Sisters', 'Lakeside', 'Riverside',
  ],
};

const AREAS = [
  'Burlington', 'South Burlington', 'Winooski', 'Essex', 'Essex Junction',
  'Williston', 'Shelburne', 'Colchester', 'Milton', 'Jericho',
  'Richmond', 'Hinesburg', 'Charlotte', 'Underhill', 'Westford',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here. We get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We know what a heat pump install in a drafty Old North End triple-decker takes, how an ice dam ruins a January week, and how weatherization work moves when Efficiency Vermont rebates land, so everything we build matches how your customers really search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own outright. Not one more monthly invoice to a lead broker for the same South End homeowner that three of your competitors are calling at the same minute.",
  },
  {
    title: 'We actually speak Burlington',
    body: "Lake Champlain winters, a buy-local town that picks the independent shop over the national chain almost every time, and real targeting from the Hill Section down to the Old North End. That is local knowledge a national agency cannot fake by dropping a new city name into a template.",
  },
  {
    title: 'No contracts, no mystery',
    body: "Prices are posted, reporting is tied to actual leads, and you go month-to-month once the first 90 days are done. If we are not earning the invoice, you walk. That puts the pressure exactly where it should sit: on us.",
  },
];

const PROOF = {
  heading: "We're new, so here's the honest math instead of a logo wall",
  body:
    "A lot of agencies open with a grid of client logos. We are a young, founder-led shop on Lake Champlain, so we are not going to dress up a track record we have not built yet. What we will give you is the reasoning behind why this works, pulled from Google's own research and the wider industry data on how people search for a local contractor.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here is a rough sketch, labelled plainly as an illustration and not a result we are claiming: say a Burlington contractor pulls roughly 1,200 local \"near me\" impressions in a month. Climbing from page-two invisibility into the top three is the gap between a handful of stray calls and a calendar you cannot keep up with. When a long cold snap settles over the lake or a heavy snow buries the Old North End, that gap widens fast. In your free audit we model the real figures for your shop: your current rankings, your actual search volume, and a straight 90-to-180-day path up the map.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Burlington', state: 'Vermont', stateAbbr: 'VT', metro: 'Burlington-South Burlington',
  heroProof: ['Built for the trades', 'Winter-season ready', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const burlingtonLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'burlington', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Burlington Local SEO Company | OnwardCraft',
    metaDescription:
      'Burlington Local SEO that puts your shop in the Map Pack. Search your service near you and three businesses show on the map. We get you into those three.',
    eyebrow: 'Local SEO · Burlington VT',
    h1: 'Burlington Local SEO that makes you the first name on the Lake Champlain map',
    h2Exact: 'Burlington Local SEO Company',
    heroSubhead:
      "Google pins three businesses to the map when someone searches \"near me,\" and everyone below them basically does not exist. We get you into that top three, so the call lands with you instead of whoever ranked first, and so you are already there when the next long freeze fills every phone in Chittenden County.",
    primaryCta: 'Get my free Burlington audit',
    intro:
      "Burlington local SEO comes down to one thing: when a homeowner in the Hill Section or South Burlington searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. This is an educated, research-heavy town that prefers local contractors over chains, so becoming one of those three is the whole game. Here's how you do it.",
    aioQuestion: 'How do Burlington businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Burlington-area neighborhoods. Burlington homeowners research carefully and favor independent local contractors, so the winners look established, respond fast, and are already ranking before the long winter drives heating, roofing, and ice-dam demand.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Three competitors are sitting on the map spots you want', body: "Pull up your own service plus \"near me\" right now. The three businesses Google pins above the fold take the lion's share of the taps, and almost nobody scrolls past them. If your name is not up there, a Burlington homeowner never weighs your craftsmanship against theirs, because they never get to your listing. In a town this small and this word-of-mouth, breaking into that top three is usually the single biggest jump in calls a shop can make." },
      { title: "You're paying for leads three other trucks already bought", body: "Angi, Thumbtack, and HomeAdvisor will sell the same Winooski homeowner to four contractors and then charge all four of you to elbow each other over the job. The meter never stops. Local SEO builds the opposite kind of asset: a homeowner finds your listing, dials your number, and the lead is yours alone. Keep it running and the rented-lead invoices stop being the thing that feeds your week." },
      { title: "You're invisible the week the lake locks up", body: "When a hard freeze sits over Lake Champlain for days or a foot of snow drops overnight, searches for heating repair, frozen pipes, and ice-dam removal jump within hours, and the shops already ranking grab those calls first. If you are stuck on page two when the cold bites, that emergency work routes to whoever Google already trusts. Ranking before the season is how you catch the surge instead of hearing about it from a customer who already called someone else." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The single strongest lever in the Map Pack. We set your categories, services, service area, photos, and posts so Google understands precisely which Burlington-area searches should land on you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone number have to read the same on every directory Google cross-checks. We correct the listings that disagree with each other and create the ones you never had." },
      { name: 'Reviews that keep coming', desc: "A no-fuss process that turns each finished job into a fresh review. It nudges your ranking up and gives the next homeowner on the Hill Section a reason to call you first." },
      { name: 'Neighborhood pages', desc: "Genuine pages for the Hill Section, Old North End, South Burlington, Winooski and the rest, so you rank for the exact neighborhood someone typed, not a flat \"Burlington.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, and mobile speed. The quiet groundwork that lets every other piece of this actually climb." },
      { name: 'Local link building', desc: "Mentions and links from Burlington sources Google respects: Seven Days, neighborhood associations, trade groups, and community sponsorships. In a market this tight, that is frequently what decides page one from page two." },
      { name: 'Winter-season readiness', desc: "We get your profile, pages, and reviews ranking before the first hard freeze so you catch the heating, roofing, and ice-dam rush instead of scrambling after the snow has already fallen.", featured: true },
      { name: 'AI search readiness', desc: "A growing share of \"near me\" research now begins inside AI Overviews, ChatGPT, and Perplexity. We shape your content and schema so those tools can read you and name you in their answers.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We map where you genuinely rank today across each service area and figure out exactly which competitors are beating you in the Map Pack and what is propping them up." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP come first because they move fastest. Most Burlington shops see the earliest lift here inside the first few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine switch on. These build week after week, which is the plain reason local SEO pays off more the sooner you start it." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Chittenden County, backed by the on-page work that makes them rank instead of just exist." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to real calls and booked leads, never vanity rankings. Then we go take the next town over." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Burlington-area towns.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across Chittenden County.', features: ['Everything in Local Growth', 'Local link building', 'Winter-season demand targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Burlington?', a: "Most Burlington engagements run between $750 and $2,500 a month, depending on how many neighborhoods and keywords you are chasing. The tiers right above lay it out. No hidden fees, no long contract, and we settle the exact scope in your free audit before you spend a dollar." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile fixes can move inside a few weeks. The competitive Burlington terms usually take 90 to 180 days of steady work, because reviews and citations only build with time. Anybody promising you the top of the map in 30 days is selling you a story." },
      { q: 'What makes Burlington local SEO different?', a: "Two things set it apart. It is an educated, research-heavy market built around UVM and the medical center, and this town reflexively picks the independent local shop over a national chain, so reviews and consistent listings carry real weight. And it is one of the coldest, snowiest small metros in the country, so trade demand swings hard across a long winter. Your ranking has to be locked in before the freeze, not patched together once everyone is already buried in calls." },
      { q: 'How does local SEO help me during a Vermont winter?', a: "When deep cold and lake-effect snow settle over Burlington, searches for heating repair, frozen pipes, and ice-dam work climb within hours, and the shops already in the Map Pack take those calls first. We get you ranked and reviewed ahead of the season so you catch that demand instead of fighting for leftovers after the whole town is booked." },
      { q: 'Which areas do you cover?', a: "All of the Burlington metro and the towns around it: the Hill Section, Old North End, South End, New North End, plus South Burlington, Winooski, Essex, Williston, Shelburne, Colchester and out to Jericho and Hinesburg. We build real neighborhood pages rather than one flat Burlington page, because that is what ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It is nearly everything we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand heating emergencies, ice-dam season, weatherization jobs tied to Efficiency Vermont rebates, and insurance work, and we build your local SEO around all of it." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More \"near me\" research now starts in AI tools rather than classic search, and that fits a town that researches everything. We structure your content and schema so those engines can read, trust, and cite your business by name. It is fast becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that is roughly how long local SEO takes to show real movement in a market this competitive. After that it is month-to-month. If we are not delivering Burlington leads, you walk, and the accountability stays squarely on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never get to keep. We build rankings, a Google profile, and a review base that route leads straight to you and nobody else. Run it long enough and the broker invoices stop being something you need, because the work is already coming in direct." },
      { q: "What's in the free audit?", a: "A straight read on where you rank today across your service areas, what your Map Pack competitors are doing to stay ahead of you, the fixes that will move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. It is the fastest way to see what Burlington Local SEO can actually do for your shop. No pitch deck. Just a diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'burlington', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Burlington SEO Company | OnwardCraft',
    metaDescription:
      'Burlington SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in contracts, built for winter-season demand.',
    eyebrow: 'SEO Services · Burlington VT',
    h1: 'Burlington SEO that puts your contracting business on page one and holds it through the winter',
    h2Exact: 'Burlington SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Burlington customers search and the leads keep coming. We build that ranking and tie every report to actual calls and booked jobs, not charts nobody can spend.",
    primaryCta: 'Get my free Burlington SEO audit',
    intro:
      "Burlington SEO comes down to one blunt question: when someone searches what you do, are you on page one or page two? In this market page two might as well be page fifty. We get contractors ranking for the money keywords in an educated, efficiency-minded, winter-driven town, and we measure the whole thing in leads, not traffic that never picks up the phone.",
    aioQuestion: 'How do Burlington businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content, and earning links from trusted Burlington sources. In a research-heavy, efficiency-conscious market, keeping the site fast on mobile and ranking for winter-driven, seasonal terms like heating and ice dams are two of the quickest ways to pull ahead.",
    problemHeading: "Three reasons your Burlington site isn't bringing in work",
    painPoints: [
      { title: "Page two might as well be page fifty", body: "Hardly anyone taps past the first screen of Google, and most do not scroll deep into it either. If your shop is not in the top handful of results for what you sell, a Burlington homeowner never sees you, no matter how clean the site looks. In a town that researches before it calls, that quiet invisibility is precisely what routes your jobs to a competitor." },
      { title: "Your leads vanish the day you pause the ads", body: "Google Ads can work, but the instant your card stops, the calls go silent. SEO builds something you keep: rankings that pull in leads months and years after the work is finished, at a fraction of what each rented lead costs you today. One is rent, the other is a deed." },
      { title: "You skip the seasons that actually pay", body: "Burlington demand swings hard with the calendar. Heating, roofing, ice dams, and weatherization carry the long winter, then a short, frantic summer window opens for exterior work before the cold rolls back in. The shops that rank for those terms ahead of time catch the spike. If your SEO ignores the winter-driven and seasonal searches, you are quietly handing away your two busiest stretches of the year." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, load speed, Core Web Vitals, schema, and the under-the-hood repairs Google wants handled before it will rank a Burlington site at all." },
      { name: 'On-page optimization', desc: "Every page that earns money tuned for the exact terms your Burlington customers type: titles, headings, body copy, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and guides that answer what local buyers search, pull in links, and keep producing leads long after we hit publish." },
      { name: 'Link building', desc: "Authority from real Burlington and trade sources. In a market this competitive, links are frequently the deciding factor between sitting on page one and stalling on page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack work so you win the \"near me\" searches right next to your organic rankings, instead of choosing one or the other." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, form fills, and booked leads, not just rankings and traffic, so you always know what your SEO is worth in actual dollars." },
      { name: 'Winter & seasonal SEO', desc: "We rank you for the heating, roofing, ice-dam, and weatherization searches that drive Burlington's busiest months, so you show up before the spike rather than chasing it once everyone is booked.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a research-heavy town's search increasingly begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to bring in real Burlington leads instead of empty impressions." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile. The groundwork everything else has to stand on before it can rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the seasonal and winter-driven terms that decide who wins January here." },
      { name: 'Build authority', desc: "Links and citations from trusted Burlington and trade sources to push your competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we lean harder into what is working and expand into the next set of keywords." },
    ],
    pricing: {
      heading: 'Transparent Burlington SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Burlington-area search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Winter & seasonal SEO', 'eCommerce / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Burlington?', a: "Most Burlington SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work the plan needs. The tiers sit just above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Burlington?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, quicker on low-competition terms and slower on the most contested Burlington keywords. SEO compounds, so the gains keep stacking the longer you stay with it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy you instant traffic that ends the moment you stop paying. SEO is an asset you keep that produces leads at a lower cost per lead as it matures. Most Burlington contractors do best with SEO as the long-term engine and ads for a short burst when they need volume now." },
      { q: 'Should my Burlington SEO target winter season?', a: "Yes, and it is not optional here. When deep cold and heavy snow arrive, searches for heating repair, frozen pipes, and ice-dam work spike, and ranking takes months to build, so you have to be in place before the season rather than chasing it after. We optimize for those seasonal and winter-driven terms ahead of time so your busiest weeks land on you." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. Higher tiers add winter-and-seasonal and AI-search work. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement on competitive Burlington terms, then it shifts to month-to-month. If we are not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search results. Burlington homeowners research heavily, and a lot of that research now opens in an AI tool." },
      { q: 'Which areas around Burlington do you cover?', a: "All of the Burlington metro and the surrounding Chittenden County towns: South Burlington, Winooski, Essex, Williston, Shelburne, Colchester, Milton, Jericho and more, with genuine local pages rather than one generic Burlington page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads straight to you. The more of your search visibility you own outright, the less you depend on paying brokers for the same lead three competitors also bought." },
      { q: "What's in the free SEO audit?", a: "Where you rank today across the Burlington market, what your competitors are doing to stay ahead of you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. It is the clearest picture you can get of what Burlington SEO is worth to your shop. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'burlington', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Burlington Web Design Company | OnwardCraft',
    metaDescription:
      'Burlington web design that turns visitors into booked jobs: fast, mobile-first sites built for contractors and ready for winter-season demand.',
    eyebrow: 'Web Design · Burlington VT',
    h1: 'Burlington web design that books jobs instead of just looking nice on a phone in a cold garage',
    h2Exact: 'Burlington Web Design Company',
    heroSubhead:
      "A handsome website that never generates a call is just an expensive brochure. We build Burlington contractors fast, mobile-first sites engineered to turn visitors into booked work, and tough enough to hold up when a long cold snap floods your phone.",
    primaryCta: 'Get my free quote',
    intro:
      "Burlington web design is where most contractor sites quietly bleed leads: slow on a phone, call button buried, no clear offer anywhere. Done right, it closes all of those leaks. We build sites that load fast, look like the professional you actually are, and turn Hill-Section-to-Williston visitors into booked jobs, and that do not fall over when a deep freeze sends your traffic through the roof. In a town that researches everything before it buys, a credible, fast site is what earns the call.",
    aioQuestion: 'What makes a good contractor website in Burlington?',
    aioAnswer:
      "A good Burlington contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and is built to handle traffic spikes during winter cold snaps. Because most Burlington searches happen on mobile and homeowners here research carefully, mobile speed, credibility, and an obvious next step are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It reads like a flyer, not a salesperson", body: "Plenty of contractor sites just list services and stop there. No offer that stands out, no obvious next step, no reason for a Burlington homeowner to pick you over the next name on the map. We design every page around a single job: turning a careful, comparison-shopping visitor into a booked lead." },
      { title: "It crawls on a phone, so visitors leave", body: "Almost all of your Burlington traffic shows up on a phone, often standing in a cold garage looking at a problem, and they bounce if the page takes more than a few seconds to load. Slow sites also rank lower, so a sluggish build costs you twice. We build fast and keep both the visitor and the ranking." },
      { title: "It folds the week the snow flies", body: "When a deep freeze or a big storm rolls off the lake, contractor sites take a sudden flood of urgent traffic, and the slow ones stall or shove the call button below three screens of content at the exact moment it matters most. We build sites that stay quick and keep converting under that load, so you capture the rush instead of handing it to a faster competitor." },
    ],
    servicesHeading: "What's in an OnwardCraft Burlington website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site built around your trade, your Chittenden County service area, and the specific jobs you want more of." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that is where nearly all of your Burlington traffic lives. Fast, thumb-friendly, and one tap from calling you." },
      { name: 'Conversion-focused UX', desc: "Clear offers, call buttons you cannot miss, and lead forms placed where homeowners actually fill them out. Every page carries one unmistakable next step." },
      { name: 'Copy that sells', desc: "Words written for a Burlington homeowner doing their homework on a frozen pipe or a leaking roof, not filler that reads exactly like every other contractor in the valley." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank: clean structure, schema, fast load, and neighborhood-ready pages for the Hill Section, Winooski, Shelburne and beyond." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast on the phone in a cold Burlington garage and pass Google's performance checks, which protects your conversions and your rankings at once." },
      { name: 'Winter-surge ready', desc: "Built to stay fast and keep the call button front and center when cold-snap traffic spikes, the exact moment that turns visitors into your biggest jobs of the year.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read your site and recommend your business as more Burlington search shifts toward AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your Chittenden County service area, your most profitable jobs, and the competitors above you, then map the site around booking more of the work you actually want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert a careful Burlington buyer, and you see it and shape it before we write a line of code." },
      { name: 'Build and copy', desc: "We build it fast and write copy aimed at a comparison-shopping Burlington homeowner, with the call to action sitting front and center on every page." },
      { name: 'Launch', desc: "We launch clean, with the SEO foundation, tracking, and load speed all dialed in from the first day live." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what is actually turning Burlington visitors into calls." },
    ],
    pricing: {
      heading: 'Transparent Burlington web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Winter-surge ready'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Burlington?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. The tiers sit above: a fixed price, no surprises, and you own the finished site outright." },
      { q: 'How long does it take to build?', a: "A focused site takes roughly 2 to 4 weeks; a larger custom build runs 4 to 8. You get a firm timeline up front and a clear update at every stage." },
      { q: 'Will my site handle a winter traffic spike?', a: "Yes, and in Burlington that matters more than almost anywhere. When a deep freeze or a big storm hits, contractor sites take a flood of urgent traffic, and the slow ones drop leads right when demand peaks. We build fast and keep the call button obvious, so your site converts under load instead of stalling out." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank, and pairing it with our SEO service is how you climb the competitive Burlington terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations and no platform you cannot walk away from. That sits right with this town, where Burlington owners tend to want control kept local and in their own hands." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where nearly all of your Burlington traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb in a cold garage." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually run yourself, usually WordPress or Webflow. We recommend the right fit in your free consult and explain the tradeoffs in plain English." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every Burlington build includes launch support, and after that we offer affordable monthly maintenance for updates, speed, and security." },
      { q: 'Am I locked into a contract?', a: "No. The Burlington build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month, so you can leave whenever you like." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what high-converting Burlington web design should include for your trade, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'burlington', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Burlington Website Redesign | OnwardCraft',
    metaDescription:
      'Burlington Website Redesign that rebuilds for leads, not just looks, without losing rankings. Faster, mobile-first rebuilds that convert more and hold up in winter.',
    eyebrow: 'Website Redesign · Burlington VT',
    h1: 'Burlington Website Redesign that rebuilds for leads, not just a prettier look',
    h2Exact: 'Burlington Website Redesign Company',
    heroSubhead:
      "An outdated site quietly costs you jobs every week: slow, clumsy on a phone, easy for a Burlington homeowner to skip past. We redesign contractor sites to convert more and load faster, and we migrate so carefully that you keep every bit of ranking you have already earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "A Burlington Website Redesign tends to go one of two bad ways: the site looks prettier but converts exactly the same, or it launches and the rankings vanish overnight. We do neither. We redesign Burlington contractor sites for speed and conversions, build them to take a winter cold-snap surge, and migrate with the redirects and SEO care that protect the traffic you have spent years building. In a research-heavy town, the credibility of the new site is part of the job, not an afterthought.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Burlington site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated, and that costs you the trust", body: "On a high-ticket heating or roofing job, a Burlington homeowner sizes you up by your site in a few seconds, and this is a town that reads reviews and compares before it ever calls. An old, cluttered design quietly sends them to a competitor who simply looks more established, even when your work is plainly the better choice. That first impression decides who gets the call." },
      { title: "It is clumsy and slow on a phone", body: "If your site is awkward or slow on mobile, you are losing most of your Burlington visitors before they ever reach your offer. A redesign built mobile-first wins those visitors back and turns them into booked leads instead of bounces." },
      { title: "It chokes the day the work shows up", body: "Traffic that never becomes a call is wasted money, and an old site that grinds to a crawl under a winter cold-snap surge drops leads at the precise moment they are worth the most. We rebuild for conversions and for the exact days your phone should be ringing nonstop, not crawling." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what is costing you leads and rankings in the Burlington market today, so the redesign fixes the real problems instead of just swapping the colors around." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep every bit of the rankings and Burlington traffic you have already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, smarter call-to-action placement, and lead forms Burlington homeowners actually fill out. We design for booked jobs, not just a nicer screenshot." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and a passing set of Core Web Vitals, which lifts conversions and rankings together." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where nearly all of your Burlington traffic actually lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that reads as credible to a research-heavy Burlington homeowner and matches the price of the jobs you want to book." },
      { name: 'Winter-surge ready rebuild', desc: "Rebuilt to stay fast and keep converting when cold-snap traffic spikes, so the new site captures your biggest winter jobs instead of choking on them.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as more Burlington search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We dig into what is losing you leads and rankings, then map a redesign that fixes it without breaking the parts already working for you." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we rebuild a single Burlington page." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and line up every redirect and SEO detail so the Burlington traffic you have built moves over clean, with no surprises." },
      { name: 'Launch with SEO care', desc: "We launch with the redirects in place and watch closely so your rankings hold and climb instead of slipping." },
      { name: 'Optimize', desc: "Post-launch tuning based on what is converting Burlington visitors into calls, plus ongoing speed work and updates." },
    ],
    pricing: {
      heading: 'Transparent Burlington redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Winter-surge ready'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Burlington?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. A fixed price, no surprises, and you own the result outright." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it is done carefully, and that is exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging before launch. Done right, a redesign holds the Burlington rankings you have built and usually pushes them higher." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes roughly 3 to 5 weeks; a larger rebuild runs 5 to 9. You get a firm timeline up front and a clear update at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is a pain to update, is not bringing in leads, or buckles when winter cold-snap traffic surges, it is costing you work. The free audit tells you plainly whether a redesign is worth it for your Burlington business." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and sharpen your existing content, hold onto the Burlington pages already ranking, and handle the technical migration so nothing important slips through the cracks." },
      { q: 'Will the new site handle winter-season traffic?', a: "Yes, and in Burlington that is a real consideration. When a deep freeze or a big storm hits, contractor sites take a surge of urgent traffic, and the slow ones drop leads. We rebuild for speed and keep the call to action obvious so the site converts when demand peaks." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first, because that is how most of Burlington reaches you, and tune for fast load and a passing set of Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely: the site, the domain, and the content all stay with you. No platform lock-in of any kind, which suits a town that likes keeping control local." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time Burlington project with a fixed price. Anything ongoing, like maintenance or SEO, runs month-to-month so you can step away whenever you want." },
      { q: "What's in the free redesign audit?", a: "A straight read on what your current site is costing you in leads and rankings across the Burlington market, the fixes a Burlington Website Redesign should make, and a fixed-price quote with a timeline and a safe migration plan that protects the rankings you already hold." },
    ],
  },
];

export const burlingtonCity = {
  citySlug: 'burlington', city: 'Burlington', state: 'Vermont', stateAbbr: 'VT', metro: 'Burlington-South Burlington',

  titleTag: 'Burlington Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Burlington marketing for contractors: web design, SEO, and local SEO that get you found and booked and let you own your leads, all built for winter-season demand.',

  eyebrow: 'Burlington · Web Design, SEO & Lead Generation',
  h1: 'Burlington marketing for contractors who want to own their leads, not rent them',
  h2Exact: 'Burlington Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Burlington's educated, efficiency-minded, winter-driven market. One team to get you ranking, converting, and off the rented-lead treadmill for good.",
  heroProof: ['Built for the trades', 'Winter-season ready', 'No lock-in contracts'],
  primaryCta: 'Get my free Burlington audit',

  intro:
    "Burlington marketing for contractors means fighting for attention in Vermont's largest market, an educated, research-heavy town that reflexively picks the local shop over a national chain. Winning here takes three things working together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack, all locked in before the long winter sends heating, roofing, and ice-dam demand through the roof. Here is exactly how we help Burlington contractors pull that off.",
  aioQuestion: 'How do Burlington contractors get more leads online?',
  aioAnswer:
    "Burlington contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack. Because Burlington homeowners research carefully and demand spikes hard during the long winter, the contractors who look established and are already ranking before the freeze win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Burlington searches \"near me.\" The single highest-return move for most local shops, and how you catch the winter-season rush before it goes to a competitor.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your Burlington customers actually search, build an asset you own instead of renting traffic from ads, and measure the whole thing in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs, and to stay quick when a cold snap floods your phone, not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it so carefully that you keep every bit of ranking you have already earned in Burlington search.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Burlington?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients pair a high-converting website with SEO and local SEO so they rank, convert, and own their leads, and so they are ready when the long Vermont winter sends every homeowner looking for heating and ice-dam help at once." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors, so we understand heating emergencies, winter-driven demand, the weatherization work tied to Efficiency Vermont rebates, and insurance jobs." },
    { q: 'Why does winter matter for my marketing?', a: "Burlington is one of the coldest, snowiest small metros in the country, with a long winter from November through April. When deep cold and heavy snow hit, demand for heating, roofing, and ice-dam work climbs fast, and the backlog can run for weeks. Ranking takes months to build, so the contractors already visible before the freeze take that work. We get you in place ahead of the season." },
    { q: 'How much does it cost to work with you?', a: "Burlington websites are one-time builds from $2,000 to $9,000. SEO and local SEO run month-to-month from $750 to $3,000, with no long contract. We confirm the exact scope in your free audit before you commit a dollar." },
    { q: 'Which Burlington areas do you serve?', a: "All of the Burlington metro and the surrounding towns: the Hill Section, Old North End, South End, New North End, plus South Burlington, Winooski, Essex, Williston, Shelburne, Colchester and out toward Jericho and Hinesburg." },
    { q: 'Where should I start?', a: "Start with a free Burlington audit. We look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves in your Burlington marketing for contractors that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};
