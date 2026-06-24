// GREEN BAY - per-metro x per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Green Bay's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// GREEN BAY - shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Green Bay is a moving target',
  body:
    "Green Bay is Titletown, the smallest city in the NFL and the only one whose team the fans actually own a piece of. That fierce, hand-on-your-shoulder local loyalty runs through everything here, including who a homeowner trusts with a roof or a furnace. This is a paper-mill and manufacturing town at heart, full of people who grew up around shift work and know the difference between a tradesman who shows up and one who talks a big game. They tend to hire the same way: ask a neighbor, then check the phone. Two forces really decide demand. The first is mobile search with \"near me\" tacked on, where folks tap one of the top names and never scroll. The second is the winter. Lake-effect snow blows in off the bay, the Fox River freezes hard, and the deep cold can park itself over the city for weeks. When a furnace quits at twenty below or an ice dam splits a roof open, the calls for HVAC, roofing, and plumbing don't tick up. They detonate, and the contractors already sitting in the Map Pack are the ones whose phones light up.",
  pullQuote: 'When the bay locks up and the cold settles over Green Bay, the contractor already in the Map Pack books the work while everyone else watches it walk by.',
  donut: {
    title: 'How Green Bay searches',
    value: 58,
    centerLabel: 'on mobile',
    legend: [
      { label: 'Mobile', pct: 58, kind: 'teal' },
      { label: 'Desktop', pct: 42, kind: 'grey' },
    ],
  },
  seasonTitle: 'When the trade calls pour in',
  seasonCaption: 'Snow & ice winter (Nov–Mar), plus spring ice-jam flooding',
  seasonalDemand: [
    { m: 'J', v: 92, peak: true }, { m: 'F', v: 90, peak: true }, { m: 'M', v: 70 }, { m: 'A', v: 52 },
    { m: 'M', v: 40 }, { m: 'J', v: 44 }, { m: 'J', v: 46 },
    { m: 'A', v: 44 }, { m: 'S', v: 42 }, { m: 'O', v: 58 }, { m: 'N', v: 80, peak: true },
    { m: 'D', v: 94, peak: true },
  ],
  stats: [
    { value: 'Titletown', label: 'a fiercely loyal, buy-local homeowner culture' },
    { value: '~58%', label: 'of local searches here happen on a phone, usually "near me"', accent: true },
    { value: 'Nov–Mar', label: 'snow, ice, and deep cold, when trade demand spikes' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks' },
  ],
  neighborhoods: [
    'Astor', 'Olde Main Street', 'Allouez', 'De Pere', 'Ashwaubenon',
    'Howard', 'Suamico', 'Bellevue', 'Hobart', 'Kaukauna',
  ],
};

const AREAS = [
  'Green Bay', 'De Pere', 'Allouez', 'Ashwaubenon', 'Howard', 'Bellevue',
  'Suamico', 'Hobart', 'Kaukauna', 'Wrightstown', 'Pulaski', 'Denmark',
  'Oneida', 'Little Suamico', 'New Franken',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'Trades are the only thing we touch',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We know how a furnace failure at twenty below or a burst-pipe morning blows up your day, and how the short Wisconsin building season crams everything into a handful of warm months, so what we build matches how your customers actually search.",
  },
  {
    title: 'We get your name off the rented-lead treadmill',
    body: "The aim is a pipeline with your name on it. Not one more monthly check to a lead broker for a Green Bay homeowner that three other crews are already calling about the very same job.",
  },
  {
    title: "We know this town, not a template",
    body: "Savage bay-and-lake-effect winters, a buy-local Titletown loyalty you can't fake, real targeting from Astor to De Pere out into the Fox Valley. That's ground a national agency can't cover by dropping a new city name into the same old page.",
  },
  {
    title: 'Posted prices, lead-tied reporting',
    body: "What you pay is posted up front, the reports track booked leads instead of fluff, and you go month-to-month once the first 90 days are done. If we aren't earning it, you leave. That keeps the heat on us, right where it belongs.",
  },
];

const PROOF = {
  heading: "We're new, so here's the honest math instead of a logo wall",
  body:
    "A lot of agencies open with a grid of client logos. We're a young, founder-led shop in a town that respects straight talk, so we won't fake a track record we haven't earned yet. What we will hand you is the reasoning behind why this works, pulled from Google's own data and the industry's research on how people search for a local contractor.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Green Bay contractor gets around 1,200 local \"near me\" impressions a month. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a booked-out calendar, and when the deep cold or a frozen-pipe wave hits, that gap gets even wider. In your free audit, we model the real numbers for your business: your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Green Bay', state: 'Wisconsin', stateAbbr: 'WI', metro: 'Green Bay',
  heroProof: ['Built for the trades', 'Winter-season ready', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const greenBayLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'green-bay', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Green Bay Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Green Bay Local SEO that puts you in the three businesses Google pins to the map, so the deep-freeze call lands with you, not a competitor.',
    eyebrow: 'Local SEO · Green Bay',
    h1: 'Green Bay Local SEO that gets you found when Fox Valley neighbors search your trade',
    h2Exact: 'Green Bay Local SEO Company',
    heroSubhead:
      "Google pins three businesses to the map when a homeowner searches \"near me,\" and everyone under them might as well not exist. We get you into that top three, so the call lands with you instead of whoever ranked first, and so you're already there when the next deep freeze fills every phone in town.",
    primaryCta: 'Get my free Green Bay audit',
    intro:
      "Green Bay local SEO comes down to one moment: a homeowner in Astor or De Pere types your service plus \"near me,\" and you are either one of the three businesses Google pins to the map or you are not. Most people tap one of those three and never scroll past them. This is a tight-knit, buy-local town that hands work to people it trusts, so landing in that top three and looking like the local pro is the whole ballgame. Here's how we get you there.",
    aioQuestion: 'How do Green Bay businesses rank higher in local search?',
    aioAnswer:
      "You rank by nailing four things: a Google Business Profile tuned to the exact services and neighborhoods you want; name, address, and phone details that match everywhere online; a steady run of real reviews; and local content built around genuine Green Bay neighborhoods. This is a loyal, buy-local town with savage winters, so the winners look established and local, answer fast, and are already ranking before the cold-weather rush starts.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'A few rivals own the spots on the map', body: "Search your own service plus \"near me\" right now. Those three businesses Google pins to the map soak up most of the clicks in Green Bay. If your name isn't one of them, the quality of your work barely registers, because most homeowners never scroll down far enough to find you. Breaking into that top three is usually the single highest-return move a local business in this town can make." },
      { title: "Brokers keep selling your leads twice over", body: "Angi, Thumbtack, and HomeAdvisor sell the same Green Bay homeowner to four contractors, then charge each of you to scrap over them. It never ends. Local SEO builds the other kind of asset: a homeowner finds you, calls you, and nobody else got handed the lead. Stick with it and you stop renting visibility and start owning the pipeline." },
      { title: "The cold hits and you're nowhere to be found", body: "When the lake-effect snow and the deep freeze move in, demand for roofing, HVAC, and burst-pipe plumbing climbs straight up overnight, and the crews already in the Map Pack grab the calls. If you're invisible when the next cold snap lands, that booked work flows to whoever Google already trusts. Ranking now is how you ride that wave instead of watching it roll past your shop." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "This is the heaviest lever in the Map Pack. We sharpen your categories, services, service area, photos, and posts so Google knows exactly which Green Bay searches ought to land on you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone number have to read the same everywhere Google looks. We straighten out the listings that disagree with each other and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple setup that turns each finished job into a fresh review. It lifts your ranking and gives the next homeowner a reason to call, and in a town this loyal, word of mouth on Google carries real weight." },
      { name: 'Neighborhood pages', desc: "Genuine pages for Astor, De Pere, Allouez, Ashwaubenon and the rest, so you rank for the neighborhood someone actually typed instead of a flat \"Green Bay.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, and mobile speed. The quiet mechanical work under the hood that lets everything else climb." },
      { name: 'Local link building', desc: "Mentions and links from Green Bay sources Google respects: local press, trade groups, community partners. Around here that is often what decides page one versus page two." },
      { name: 'Winter-season readiness', desc: "We get your profile, pages, and reviews ranking ahead of the deep freeze so you catch the snow, ice, and frozen-pipe surge as it lands instead of clawing for scraps once it's already gone.", featured: true },
      { name: 'AI search readiness', desc: "A growing share of \"near me\" research now starts inside AI Overviews, ChatGPT, and Perplexity. We structure your content so those engines can read you and name you in their answers.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We map where you genuinely rank today across every service area, then pin down which competitors are beating you in the Map Pack and the reasons behind it." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP come first because they move quickest. Most Green Bay clients notice the early lift here inside a few weeks." },
      { name: 'Build trust signals', desc: "The citations and the review engine go live. These stack week after week, which is exactly why local SEO pays off more the sooner you start it." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Brown County and the Fox Valley, plus the on-page work that gives them something to stand on." },
      { name: 'Report and expand', desc: "Plain-spoken reporting tied to calls and booked leads, never vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting your Map Pack foundation set right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For crews fighting across several Green Bay communities.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors set on owning the Green Bay map.', features: ['Everything in Local Growth', 'Local link building', 'Winter-season demand targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Green Bay?', a: "Most Green Bay engagements run between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're chasing. The tiers above lay it out plainly. No hidden fees, no long contract, and we settle the exact scope in your free audit before you spend a dollar." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile work can move inside a few weeks. The competitive Green Bay keywords usually take 90 to 180 days of steady effort, because reviews and citations build up over time. Anybody promising you page one in 30 days is selling you a tall tale." },
      { q: 'What makes Green Bay local SEO different?', a: "A couple of things. This is a tight-knit, buy-local Titletown, so reviews, matched-up listings, and a genuinely local feel pull more weight here than slick national branding. And it's northeast Wisconsin, where trade demand swings hard with the winter. Your ranking has to be set before the deep cold rolls in, not patched together once it's already here." },
      { q: 'How does local SEO help me during the winter?', a: "When lake-effect snow, ice dams, and subzero cold settle over the bay, searches for roofing, HVAC, and burst-pipe plumbing spike overnight, and the crews already in the Map Pack take those calls. We get you ranking and reviewed ahead of the freeze so you catch that demand instead of fighting for leftovers after everyone else is booked solid." },
      { q: 'Which areas do you cover?', a: "All of Green Bay and the communities around it: Astor, Olde Main Street, Allouez, De Pere, Ashwaubenon, Howard, Suamico, Bellevue, Hobart, plus Kaukauna and out into the Fox Valley. We build real neighborhood pages instead of one catch-all Green Bay page, because that's what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "Just about all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand emergency calls, winter-driven demand, the short building season, and insurance jobs, and we build your local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research kicks off inside AI tools now rather than classic search. We structure your content and schema so those engines can read, trust, and name your business. In a market this loyal, that's fast becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an opening 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we aren't delivering, you walk, and the accountability stays squarely on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never get to keep. We build rankings, a Google profile, and a review base that send leads straight to you alone. Over time you lean on the brokers less because the work is already coming to you direct." },
      { q: "What's in the free audit?", a: "A straight read on where you rank today across your service areas, what your Map Pack competitors are doing to stay ahead, the fixes that'll move you fastest, and a realistic 90-to-180-day Green Bay Local SEO plan with the numbers run for your business. No pitch deck. Just a diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'green-bay', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Green Bay SEO Company | OnwardCraft',
    metaDescription:
      'Green Bay SEO that ranks contractors on Google and brings in leads you own. Lead-tied reporting, no lock-in, built for winter-season and frozen-pipe demand.',
    eyebrow: 'SEO Services · Green Bay',
    h1: 'Green Bay SEO that turns organic traffic into booked winter work',
    h2Exact: 'Green Bay SEO Company',
    heroSubhead:
      "Ads quit the moment you stop paying. SEO runs the other direction: rank once for what your Green Bay customers search and the leads keep arriving for months. We build that ranking and tie every report to real calls and booked jobs, not vanity charts.",
    primaryCta: 'Get my free Green Bay SEO audit',
    intro:
      "Green Bay SEO comes down to one blunt question: when someone searches what you do, are you on page one or page two? Around here page two might as well be page fifty. We get contractors ranking for the money keywords in a loyal, buy-local, winter-driven town, and we count the whole thing in leads, not traffic that never picks up the phone.",
    aioQuestion: 'How do Green Bay businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the site's technical foundation, tuning each page to the exact terms customers search, publishing genuinely useful local content, and earning links from trusted Green Bay sources. In a loyal, buy-local town with savage winters, keeping the site fast on mobile and ranking for cold-weather, seasonal terms are two of the fastest ways to pull ahead.",
    problemHeading: "Three reasons your Green Bay site isn't bringing in work",
    painPoints: [
      { title: "Page two is hiding you in plain sight", body: "Hardly anyone clicks past the first page of Google, and they rarely scroll far down it either. If you're not in the top handful for what you sell, your site is basically invisible no matter how sharp it looks. In Green Bay, that invisibility is exactly what hands your jobs to the crew that ranked above you." },
      { title: "Google Ads rents you traffic you never keep", body: "Ads can work, but the instant your card stops, the leads stop cold. SEO builds something you actually own: rankings that keep pulling in leads months and years after the work is done, at a fraction of the per-lead cost you're paying now." },
      { title: "The demand that pays, and you're invisible for it", body: "Green Bay demand swings hard with the winter, and the contractors who rank for those terms ahead of time catch the spike. If your SEO ignores cold-weather searches like ice dams and frozen pipes, you're quietly leaving your busiest, most profitable months on the table." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the behind-the-scenes fixes Google needs before it will rank your Green Bay site at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned to the exact terms your Green Bay customers search: titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers are searching, pull in links, and keep bringing leads long after we publish them." },
      { name: 'Link building', desc: "Authority from real Green Bay and industry sources. In a competitive market, links are often the thing that splits page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches right alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and booked leads instead of just rankings and traffic, so you always know what your SEO is worth in real dollars." },
      { name: 'Winter & seasonal SEO', desc: "We rank you for the cold-weather searches that drive Green Bay's busiest stretch, ice dams, frozen pipes, no-heat calls, so you're already visible before demand spikes rather than chasing it after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and name you in their answers, where a growing share of search now starts.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive actual Green Bay leads, not just impressions." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile. The groundwork every other piece needs before it can rank at all." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus fresh local content, including the seasonal and cold-weather terms that decide who wins January here." },
      { name: 'Build authority', desc: "Links and citations from trusted Green Bay and industry sources to push your competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to booked leads, then we double down on what's working and push into the next batch of keywords." },
    ],
    pricing: {
      heading: 'Transparent Green Bay SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords here.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors fighting across services and Green Bay neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses out to own Green Bay search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Winter & seasonal SEO', 'eCommerce / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Green Bay?', a: "Most Green Bay SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. The tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Green Bay?', a: "Look for early movement in 2 to 3 months and meaningful results in 4 to 6, quicker on low-competition terms and slower on the most contested Green Bay keywords. SEO compounds, so the longer you run it the bigger the gains get." },
      { q: 'Is SEO better than Google Ads?', a: "They handle different jobs. Ads buy instant traffic that dies the moment you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Green Bay contractors do best running SEO as the long-term engine and ads for short bursts." },
      { q: 'Should my Green Bay SEO target the winter season?', a: "Yes. When lake-effect snow, ice dams, and subzero cold hit, searches for roofing, HVAC, and burst-pipe plumbing spike overnight, and ranking takes months to build, so you have to be in place before the freeze rather than chasing it after. We optimize for those seasonal and cold-weather terms ahead of time so your busiest months land on you." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and lead-tied reporting. Higher tiers add winter-and-seasonal and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an opening 90 days because SEO needs that long to show real movement, then it switches to month-to-month. If we aren't delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and name your business, not just classic search results." },
      { q: 'Which areas around Green Bay do you cover?', a: "All of Green Bay and the surrounding communities: De Pere, Allouez, Ashwaubenon, Howard, Suamico, Bellevue, Hobart, Kaukauna and more, with genuine local pages rather than one catch-all Green Bay page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads straight to you. The more you own your search visibility, the less you depend on paying brokers for leads three competitors also bought." },
      { q: "What's in the free SEO audit?", a: "Where you rank right now, what your competitors are doing to stay ahead of you, the highest-impact fixes, and a realistic Green Bay SEO timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'green-bay', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Green Bay Web Design Company | OnwardCraft',
    metaDescription:
      'Green Bay web design that turns visitors into booked jobs: fast, mobile-first sites built for contractors and ready for winter no-heat and frozen-pipe demand.',
    eyebrow: 'Web Design · Green Bay',
    h1: 'Green Bay web design that makes a buy-local homeowner pick you',
    h2Exact: 'Green Bay Web Design Company',
    heroSubhead:
      "A good-looking site that never rings the phone is just an expensive brochure. We build Green Bay contractors fast, mobile-first sites engineered to turn visitors into booked work, and tough enough to hold up when a deep freeze floods your phone with no-heat and frozen-pipe calls.",
    primaryCta: 'Get my free quote',
    intro:
      "Green Bay web design done right plugs the leaks that quietly cost most contractor sites their leads: slow on a phone, call button buried, no clear offer anywhere. We build sites that load fast, look like the local pro you actually are, and turn Astor-to-De-Pere visitors into booked jobs, and that don't fall over when a cold snap sends your traffic through the roof.",
    aioQuestion: 'What makes a good contractor website in Green Bay?',
    aioAnswer:
      "A good Green Bay contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and is built to absorb traffic spikes during winter. Because most Green Bay searches happen on mobile and the town is fiercely buy-local, mobile speed, an obvious next step, and a genuinely local feel are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure when it should be a lead engine", body: "Plenty of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next name on the map. We design every page around one job: turning a Green Bay visitor into a booked lead." },
      { title: "It crawls on a phone and they bounce", body: "Most of your Green Bay visitors are on mobile, and they leave if your site takes more than a couple of seconds to load. Slow sites rank worse too, so you lose twice. We build fast, so you keep the visitor and the ranking both." },
      { title: "A winter rush would knock it flat", body: "When the deep cold hits and pipes burst and furnaces quit, contractor sites get slammed with urgent traffic, and the slow ones buckle or bury the call button at the exact moment it matters most. We build sites that stay fast and keep converting under load, so you capture that demand instead of losing it to a quicker competitor." },
    ],
    servicesHeading: "What's in an OnwardCraft Green Bay website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site shaped around your trade, the Green Bay area you cover, and the exact jobs you want more of." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where nearly all of your Green Bay traffic lives. Fast, thumb-friendly, and easy to call from in one tap." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms set where homeowners actually use them. Every page carries one unmistakable next step." },
      { name: 'Copy that sells', desc: "Words that speak to a homeowner staring at a frozen pipe or a leaking roof and book the job, not filler that reads like every other contractor in town." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank in Green Bay: clean structure, schema, fast load, and neighborhood-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and clear Google's performance checks, which protects your conversions and your rankings together." },
      { name: 'Winter-surge ready', desc: "Built to stay fast and keep the call button front and center when winter traffic spikes, that no-heat and frozen-pipe moment that turns visitors into your biggest jobs of the year.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read your site and put your business forward as more search shifts toward AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We get to know your trade, the stretch of Brown County you cover, and which jobs pay your bills, then shape the site around landing more of that work before the next building season tightens up." },
      { name: 'Design', desc: "We mock up a custom, mobile-first layout aimed at the Green Bay homeowner with a phone in hand, and you sign off on it before any code gets written." },
      { name: 'Build and copy', desc: "We build it to load fast over a North Woods cell connection and write copy that talks like a Packers-town tradesman, with the call button front and center on every page." },
      { name: 'Launch', desc: "We push it live with the local SEO foundation, call tracking, and speed all squared away from the first day it goes up." },
      { name: 'Support and optimize', desc: "We keep the site fast through the freeze-and-thaw seasons and tune it around what's turning Green Bay visitors into actual phone calls." },
    ],
    pricing: {
      heading: 'Transparent Green Bay web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established crews running several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Winter-surge ready'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Green Bay?', a: "Most contractor builds for Green Bay crews run $2,000 to $8,000 as a one-time job, depending on how many pages and integrations you need. The tiers up above spell it out. Fixed price, nothing hidden, and the finished site is yours to keep, the way a Titletown handshake ought to work." },
      { q: 'How long does it take to build?', a: "A focused site takes roughly 2 to 4 weeks; a bigger custom build runs 4 to 8. We give you a firm timeline up front and keep you posted through every stage." },
      { q: 'Will my site handle a winter-season traffic spike?', a: "Yes, and in Green Bay that matters. When the deep cold hits and furnaces quit and pipes burst, contractor sites take a flood of urgent traffic, and the slow ones lose leads right when demand peaks. We build fast and keep the call button obvious, so your site converts under load instead of buckling." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank, and pairing it with our SEO service is how you climb the competitive Green Bay terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, and no platform you can't walk away from." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where nearly all of your Green Bay traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We match the platform to your trade and to what you can run yourself between jobs, usually WordPress or Webflow. We name the right fit in your free Green Bay consult and lay out the tradeoffs in plain, no-nonsense terms." },
      { q: 'Do you offer ongoing support?', a: "We do. Every Green Bay build ships with launch support, and after that we keep an affordable monthly plan running for updates, speed, and security so your site holds up shift after shift." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time, fixed-price project. Any maintenance or SEO after it goes live runs month-to-month, so you can walk anytime, no 12-month handcuffs like the lead brokers pull." },
      { q: 'What do I get in the free quote?', a: "A straight read on what your current site is leaking in lost Green Bay leads, what Green Bay web design that actually books jobs in this town should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'green-bay', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Green Bay Website Redesign | OnwardCraft',
    metaDescription:
      'Green Bay Website Redesign without losing your rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs and hold up through winter.',
    eyebrow: 'Website Redesign · Green Bay',
    h1: 'Green Bay Website Redesign that turns a tired site into a booked calendar from Astor to De Pere',
    h2Exact: 'Green Bay Website Redesign Company',
    heroSubhead:
      "An outdated site quietly costs you jobs every week: slow, clumsy on a phone, easy for a Green Bay homeowner to skip past. We redesign contractor sites to convert more and load faster, and we migrate so carefully that you keep every bit of ranking you've already earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "A Green Bay Website Redesign usually goes one of two bad ways: the site looks prettier but converts exactly the same, or it launches and the rankings vanish overnight. We do neither. We rebuild contractor sites for speed and conversions, build them to survive winter-season traffic, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO through a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign holds your rankings and lifts them, because the new site is faster, mobile-first, and better built than the old one.",
    problemHeading: "Signs your Green Bay site is overdue for a redesign",
    painPoints: [
      { title: "A dated look quietly costs you trust", body: "On a high-ticket job, homeowners size you up by your site in seconds, and in a buy-local town they want to see a real local pro. An old, cluttered design quietly nudges them toward a competitor who looks more established, even when your work is plainly better." },
      { title: "It drags on a phone and loses the visitor", body: "If your site is clunky or slow on mobile, you're losing most of your Green Bay visitors before they ever reach your offer. A redesign built mobile-first wins those visitors back and turns them into leads." },
      { title: "A demand surge would bury your best leads", body: "Traffic that never turns into calls is wasted, and an old site that grinds to a crawl under a winter surge loses leads at the exact moment they're worth the most. We rebuild for conversions and for the days your phone should be ringing off the hook." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pin down exactly what's costing you leads and rankings today, so the redesign fixes the real problems instead of just swapping the colors around." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled right so you keep every bit of the rankings and traffic you've already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, a call button a cold, frustrated Green Bay homeowner can't miss, and lead forms people actually fill out. We rebuild for booked jobs, not a prettier screenshot." },
      { name: 'Speed overhaul', desc: "We rebuild the site to load quick even on a spotty phone signal out past Suamico and to clear Core Web Vitals, which lifts your conversions and your rankings in the same pass." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where nearly all of your Green Bay traffic actually lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy, genuinely local look that matches the quality of your work and the price of the jobs you want to book." },
      { name: 'Winter-surge ready rebuild', desc: "Rebuilt to stay fast and keep converting when winter traffic spikes, so the new site captures your biggest no-heat and frozen-pipe jobs instead of choking on them.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read your Green Bay site and put your name forward as more of this town's research starts inside AI tools.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We dig into what's losing you leads and rankings, then map a redesign that fixes it without breaking what already works for you." },
      { name: 'Design', desc: "A modern, mobile-first design built to convert the Green Bay homeowner, and you review and shape it before we rebuild a single page." },
      { name: 'Rebuild and migrate', desc: "We rebuild for speed and line up every redirect and SEO detail so the move over is clean and your Green Bay rankings come along for the ride." },
      { name: 'Launch with SEO care', desc: "We flip it live with the redirects in place and watch the rankings close for the first weeks so they hold and climb instead of slipping." },
      { name: 'Optimize', desc: "Once it's live we tune around what's actually booking jobs, then keep the site fast through Green Bay's hard winters with steady updates." },
    ],
    pricing: {
      heading: 'Transparent Green Bay redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Winter-surge ready'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Green Bay?', a: "Most Green Bay redesigns run $2,500 to $9,000 as a one-time project, depending on the size of the site and the integrations involved. Fixed price, nothing sprung on you later, and the rebuilt site is yours to keep." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's handled carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually pushes them higher." },
      { q: 'How long does a redesign take?', a: "A focused redesign runs about 3 to 5 weeks; a bigger rebuild takes 5 to 9. We hand you a firm timeline before we start and keep you posted at every stage, so it's done before your busy stretch hits." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is a pain to update, isn't bringing in leads, or buckles when winter traffic surges, it's costing you work. The free audit tells you plainly whether a redesign is worth it for your Green Bay business." },
      { q: 'Do you migrate my existing content?', a: "We do. We carry your existing content over and sharpen it, protect the pages already ranking for Green Bay searches, and handle the technical migration so nothing that matters slips through the cracks." },
      { q: 'Will the new site handle winter traffic?', a: "Yes, and in Green Bay that's a real consideration. When the deep cold hits, contractor sites take a surge of no-heat and frozen-pipe traffic, and the slow ones lose leads. We rebuild for speed and keep the call to action obvious so the site converts when demand peaks." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "It will. We rebuild mobile-first, since that's where nearly every Green Bay homeowner finds you, and tune for fast load and Core Web Vitals, which pulls up both your conversions and your rankings." },
      { q: 'Do I own the redesigned site?', a: "Every bit of it: the site, the domain, and the content all belong to you. No platform you're stuck on, no holding your own work hostage." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project, and any maintenance or SEO afterward runs month-to-month. Around here you keep us because the work is good, not because the paper traps you." },
      { q: "What's in the free redesign audit?", a: "A plain read on what your current site is costing you in lost Green Bay leads and slipping rankings, what a Green Bay Website Redesign needs to fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const greenBayCity = {
  citySlug: 'green-bay', city: 'Green Bay', state: 'Wisconsin', stateAbbr: 'WI', metro: 'Green Bay',

  titleTag: 'Green Bay Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Green Bay marketing for contractors: web design, SEO, and local SEO that gets you found, gets you booked, and owns your leads, all built for winter-season demand.',

  eyebrow: 'Green Bay · Web Design, SEO & Lead Generation',
  h1: 'Green Bay marketing for contractors that turns Titletown searches into jobs',
  h2Exact: 'Green Bay Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Green Bay's loyal, buy-local, winter-driven market. One team to get you ranking, converting, and off the rented-lead treadmill for good.",
  heroProof: ['Built for the trades', 'Winter-season ready', 'No lock-in contracts'],
  primaryCta: 'Get my free Green Bay audit',

  intro:
    "Green Bay marketing for contractors means competing for attention in a tight-knit, buy-local Titletown where homeowners want a real local pro and hire on word of mouth. Winning here takes three things pulling together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack, all set before the deep freeze sends demand through the roof. Here's how we help Green Bay contractors pull that off.",
  aioQuestion: 'How do Green Bay contractors get more leads online?',
  aioAnswer:
    "Green Bay contractors get more leads by pairing a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack. Because Green Bay is a loyal, buy-local town and demand spikes hard through the brutal winter, the contractors who look established and local and are already ranking before the cold hits win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Green Bay searches \"near me.\" The single highest-return move for most local businesses, and how you catch winter-season demand before it goes to a competitor.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your Green Bay customers actually search, build an asset you own instead of renting traffic from ads, and count the whole thing in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs, and to stay fast when winter floods your phone, not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it so carefully that you keep every bit of ranking you've already earned in Green Bay search.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Green Bay?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients pair a high-converting website with SEO and local SEO so they rank, convert, and own their leads, and so they're ready when winter hits and every homeowner needs help at once." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors, so we understand emergency calls, winter-driven demand, the short building season, and insurance work." },
    { q: 'Why does winter matter for my marketing?', a: "When lake-effect snow, ice dams, and subzero cold settle over Green Bay, demand for roofing, HVAC, and burst-pipe plumbing spikes overnight and the backlog stacks up fast. Ranking takes months to build, so the contractors already visible before the cold take that work. We get you in place ahead of season." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds running $2,000 to $9,000. SEO and local SEO go month-to-month from $750 to $3,000, with no long contract roping you in. We nail down the exact scope for your Green Bay shop in the free audit." },
    { q: 'Which Green Bay areas do you serve?', a: "All of Green Bay and the surrounding communities: Astor, Olde Main Street, Allouez, De Pere, Ashwaubenon, Howard, Suamico, Bellevue, Hobart, Kaukauna and more." },
    { q: 'Where should I start?', a: "Start with a free Green Bay audit. We look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};
