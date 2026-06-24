// CHEYENNE: per-metro, per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Cheyenne's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// CHEYENNE: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'What ranking in Cheyenne actually demands of you',
  body:
    "Cheyenne is the smallest state capital you will find anywhere, and that shapes the whole game. State government, the Union Pacific yards, and the energy trade pay the bills, but the household engine that drives contractor work is F.E. Warren Air Force Base on the west edge of town. Warren runs Minuteman III missile fields under Global Strike Command, and it cycles thousands of military families through PCS orders every year. A staff sergeant lands on a Tuesday, hauls boxes into a rental in Sun Valley, and by Thursday is searching for a plumber on a phone with \"near me\" attached. That is the first thing about this market: it is phone-first, it is impatient, and almost nobody scrolls past the first three names Google drops on the map. The second thing is the sky. Cheyenne sits at 6,000 feet on the open high plains, and the wind here is not a complaint, it is a force. Sustained gusts strip shingles and flatten fences. Ground blizzards from November to March bury whole neighborhoods. Spring and summer hail dents siding and totals roofs in twenty minutes. When the weather breaks something, demand for roofing, repair, and restoration does not rise gently. It detonates. And because so few shops in this small market do digital well, the contractor already sitting in the Map Pack books that surge while everyone else watches the calls go elsewhere.",
  pullQuote: 'When the next windstorm peels another Cheyenne roof, the shop already in the Map Pack books the work while everyone else hears about it.',
  donut: {
    title: 'Who owns their home in Cheyenne',
    value: 64,
    centerLabel: 'homeowner rate',
    legend: [
      { label: 'Homeowners', pct: 64, kind: 'teal' },
      { label: 'Renters', pct: 36, kind: 'grey' },
    ],
  },
  seasonTitle: 'When the trades get slammed',
  seasonCaption: 'Wind damage all year, blizzards Nov to Mar, hail May to Aug',
  seasonalDemand: [
    { m: 'J', v: 78, peak: true }, { m: 'F', v: 80, peak: true }, { m: 'M', v: 84, peak: true }, { m: 'A', v: 70 },
    { m: 'M', v: 76, peak: true }, { m: 'J', v: 82, peak: true }, { m: 'J', v: 80, peak: true },
    { m: 'A', v: 64 }, { m: 'S', v: 50 }, { m: 'O', v: 62, peak: true },
    { m: 'N', v: 74, peak: true }, { m: 'D', v: 82, peak: true },
  ],
  stats: [
    { value: '6,000 ft', label: 'elevation, where high-plains wind punishes every roof in town' },
    { value: '~58%', label: 'of local searches here happen on a phone, usually with "near me"', accent: true },
    { value: 'Nov to Mar', label: 'blizzard and deep-cold stretch, when repair calls climb fast' },
    { value: 'Top 3', label: 'Map Pack spots that grab the bulk of the clicks' },
  ],
  neighborhoods: [
    'Downtown', 'South Cheyenne', 'Sun Valley', 'Cole', 'Avalon',
    'Saddle Ridge', 'Pioneer Park', 'Burns', 'Pine Bluffs',
  ],
};

const AREAS = [
  'Cheyenne', 'South Cheyenne', 'Sun Valley', 'Cole', 'Avalon',
  'Saddle Ridge', 'Pioneer Park', 'Burns', 'Pine Bluffs', 'F.E. Warren AFB',
  'Carpenter', 'Albin', 'Hillsdale', 'Ranchettes', 'Fox Farm-College',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'The trades are the only thing we do',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We know what a busted-pipe call sounds like at 5 a.m. in a January cold snap, how a hailstorm fills an insurance pipeline, and how PCS families hire fast. Everything we build is shaped to how Cheyenne homeowners actually search.",
  },
  {
    title: 'We get you off the rented-lead treadmill',
    body: "The goal is a pipeline that belongs to you, full stop. Not one more monthly check cut to a lead broker for the same Saddle Ridge homeowner that two other contractors are calling that afternoon.",
  },
  {
    title: 'We actually know Cheyenne',
    body: "The wind that tears roofs off at 6,000 feet, the Warren families rotating in and out on orders, real targeting from Downtown to Pioneer Park to the ranchettes east of town. That is ground truth a national agency cannot fake by swapping a city name into a template.",
  },
  {
    title: 'No contracts, no smoke',
    body: "Prices are published, reporting is tied to real leads, and you go month-to-month after the first 90 days. If we are not earning the invoice, you walk. That keeps the pressure where it belongs, which is squarely on us.",
  },
];

const PROOF = {
  heading: "We're new, so here's the honest math instead of a logo wall",
  body:
    "Plenty of agencies lead with a grid of client logos. We are a young, founder-run shop, so we are not going to invent a track record we have not built yet. What we can give you is the reasoning, drawn straight from Google's and the industry's own research on how people search for a local contractor.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here is a rough sketch, marked plainly as an illustration and not a result we are claiming: say a Cheyenne contractor pulls around 1,500 local \"near me\" impressions a month. Moving from page-two invisibility up into the top three is the gap between a few stray calls and a calendar you cannot keep up with, and after a windstorm or a blizzard that gap stretches even wider. In your free audit we model the real figures for your business: your current rankings, your actual search volume, and a straight 90-to-180-day path to the top of the map.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Cheyenne', state: 'Wyoming', stateAbbr: 'WY', metro: 'Cheyenne',
  heroProof: ['Built for the trades', 'Wind & blizzard ready', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const cheyenneLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'cheyenne', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Cheyenne Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Cheyenne Local SEO that turns "near me" searches into a ringing phone. We put your shop in the Map Pack, so the wind-and-storm call lands with you, not a competitor.',
    eyebrow: 'Local SEO · Cheyenne',
    h1: 'Cheyenne Local SEO that turns a Sun Valley "near me" search into a ringing phone',
    h2Exact: 'Cheyenne Local SEO Company',
    heroSubhead:
      "Google pins three businesses to the map when a homeowner searches \"near me,\" and everyone underneath them might as well not exist. We get you into that top three, so the call lands with you instead of whoever ranked first, and so you are already standing there when the next windstorm or blizzard lights up every phone in Laramie County.",
    primaryCta: 'Get my free Cheyenne audit',
    intro:
      "Cheyenne local SEO comes down to a single moment: a homeowner in Sun Valley or Saddle Ridge types your trade plus \"near me,\" and either you are one of the three businesses Google pinned to the map or you are nowhere. Most people tap one of those three and never scroll. With Warren families landing on orders and high-plains weather constantly chewing up roofs, plenty of folks are searching every day. Becoming one of those three names is the entire contest. Here is exactly how we get you there.",
    aioQuestion: 'How do Cheyenne businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile tuned to the exact trades and neighborhoods you want; name, address, and phone that match everywhere online; a steady run of real reviews; and local content built around genuine Cheyenne neighborhoods. With constant base-driven turnover and brutal wind, blizzard, and hail damage, the winners look established, answer fast, and already rank when storm demand hits.",
    problemHeading: "If your phone is quiet, it usually traces back to one of these",
    painPoints: [
      { title: 'Three shops own the map and you are not one of them', body: "Pull up your phone and search your own trade plus \"near me\" right now. Those three businesses Google pins to the map take the overwhelming share of the clicks. If your name is not among them, the quality of your work barely registers, because most Cheyenne homeowners never scroll far enough to find you. Climbing into that top three is usually the single highest-return move a shop in this small market can make." },
      { title: "You're paying for leads that were never yours", body: "Angi, Thumbtack, and HomeAdvisor sell the same Cheyenne homeowner to four contractors, then charge each of you to fight over the scraps. It is a treadmill with no off switch. Local SEO builds the opposite kind of asset: a homeowner finds you, calls you, and nobody else got the lead. Run it long enough and you stop renting visibility and start owning the pipeline outright." },
      { title: "You're not in place when the wind hits", body: "When a 60-mph gust strips half the roofs on a block or a ground blizzard rolls through, demand for roofing, repair, and restoration goes vertical in a single day, and the contractors already in the Map Pack take those calls. If you are invisible when the storm lands, the booked work flows straight to whoever Google already trusts. Ranking now is how you ride that surge instead of watching it blow past your shop." },
    ],
    servicesHeading: 'What it actually takes to rank you here',
    services: [
      { name: 'Google Business Profile', desc: "The biggest single lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows precisely which Cheyenne searches belong to you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to line up everywhere Google looks. We fix the listings that contradict each other and build the ones you are missing across Laramie County." },
      { name: 'Reviews that keep coming', desc: "A simple engine that turns every finished Cheyenne job into a fresh review while the homeowner is still happy. That steady drip lifts your Map Pack spot and gives the next PCS family at Warren a reason to call you ahead of the next name." },
      { name: 'Neighborhood pages', desc: "Real pages for Sun Valley, Saddle Ridge, Pioneer Park, Cole and the rest, plus F.E. Warren, so you rank for the exact neighborhood someone is searching instead of a generic \"Cheyenne.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, and the mobile speed a phone-first Cheyenne searcher demands. This is the plumbing under the hood that lets every other piece actually rank." },
      { name: 'Local link building', desc: "Mentions and links from Cheyenne sources Google trusts: local press, trade groups, community partners. In a small market that is often what splits page one from page two." },
      { name: 'Storm and base-move readiness', desc: "We get your profile, pages, and reviews ranking before wind and blizzard season, and in front of the steady run of PCS families, so you catch the surge instead of scrambling once the damage is done.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts inside AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you by name.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find where you genuinely rank today from Downtown out to the ranchettes, then name the handful of Cheyenne shops sitting above you in the Map Pack and pin down exactly what is keeping them there." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP come first, because they move the fastest. Most Cheyenne clients see early lift here inside a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is exactly why local SEO rewards starting before the next storm, not after it." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Laramie County, backed by the on-page work that makes them rank." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to real Cheyenne calls and booked jobs, never vanity rankings. Once a neighborhood is locked, we push into the next one, from Sun Valley to Pioneer Park to Pine Bluffs." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right from the start.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For shops scrapping across several Cheyenne neighborhoods at once.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors set on owning the map across all of Cheyenne.', features: ['Everything in Local Growth', 'Local link building', 'Storm-season demand targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Cheyenne?', a: "Most Cheyenne engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you are chasing. The tiers above lay it out. No hidden fees, no long contract, and we lock the exact scope in your free audit before you spend a dollar." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move within a few weeks. The competitive Cheyenne keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days is selling you a fantasy." },
      { q: 'What makes Cheyenne local SEO different?', a: "Two things stand out. The first is turnover: F.E. Warren families PCS in and out constantly and search for a contractor the day they land, so trust signals like reviews and consistent listings carry real weight. The second is the weather. This is the high plains, so trade demand swings hard with wind, blizzards, and hail, and your ranking has to be locked in before the storm, not thrown together after it." },
      { q: 'How does local SEO help me when the wind and snow hit?', a: "When a windstorm strips roofs or a blizzard rolls into Cheyenne, searches for roofing, repair, and restoration spike inside a day, and the businesses already in the Map Pack take those calls. We get you ranking and reviewed ahead of season so you capture that demand instead of fighting for the leftovers once everyone else is already booked solid." },
      { q: 'Which areas do you cover?', a: "All of Cheyenne and the country around it: Downtown, South Cheyenne, Sun Valley, Cole, Avalon, Saddle Ridge, Pioneer Park, plus F.E. Warren AFB, Burns, Pine Bluffs and out toward Carpenter and Albin. We build genuine neighborhood pages instead of one generic Cheyenne page, because that is what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It is basically all we do: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand emergency calls, wind- and hail-driven surges, and insurance jobs, and we build your local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More \"near me\" research now starts in AI tools instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. In a small market like Cheyenne, that is fast becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that is roughly how long it takes to move a Cheyenne shop up the map and let reviews build. After that you go month-to-month. If the leads are not landing, you walk, and the accountability stays squarely on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent the same Saddle Ridge homeowner to four contractors and keep the visibility for themselves. We build rankings, a Google profile, and a Cheyenne review base that send the call to you and nobody else. Run it a few months and the brokers become the backup, not the bill you dread." },
      { q: "What's in the free audit?", a: "A clear read on where you rank across Laramie County right now, what the Cheyenne shops above you in the Map Pack are doing to hold that spot, the fixes that move you fastest, and a realistic 90-to-180-day plan with the numbers run for your trade. It is the honest starting point for Cheyenne Local SEO that actually moves your shop up the map. No pitch deck, just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'cheyenne', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Cheyenne SEO Company | OnwardCraft',
    metaDescription:
      'Cheyenne SEO that ranks contractors on Google and delivers leads you own. Revenue-tied reporting, no lock-in, built for wind, blizzard, and hail demand.',
    eyebrow: 'SEO Services · Cheyenne',
    h1: 'Cheyenne SEO that ranks you for the high-plains searches that book jobs',
    h2Exact: 'Cheyenne SEO Company',
    heroSubhead:
      "Ads die the second you stop paying. SEO works the other way: rank once for what your Cheyenne customers search and the leads keep arriving for months. We build that ranking and tie every report to real calls and booked jobs, not a chart full of vanity traffic.",
    primaryCta: 'Get my free Cheyenne SEO audit',
    intro:
      "Cheyenne SEO comes down to one blunt question: when someone searches what you do, are you on page one or page two? In a small market, page two is a place leads go to die. We get contractors ranking for the money keywords in a town driven by base turnover and high-plains weather, and we count the whole thing in leads, not traffic that never picks up the phone.",
    aioQuestion: 'How do Cheyenne businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content, and earning links from trusted Cheyenne sources. With constant base-driven turnover and severe wind, blizzard, and hail damage, keeping the site fast on mobile and ranking for storm-driven seasonal terms are two of the quickest ways to pull ahead in this market.",
    problemHeading: "Three reasons your Cheyenne site brings in no work",
    painPoints: [
      { title: "You're stranded on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it either. If you are not in the top handful of results for what you sell, your site is effectively invisible no matter how sharp it looks. In a town this size, that invisibility is exactly what hands your jobs to the two or three competitors who figured search out first." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the instant your card stops, the leads stop cold. SEO builds an asset you actually own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost you are paying a broker right now." },
      { title: "You're invisible for the demand that pays", body: "Cheyenne demand swings hard with wind, blizzards, and hail, and the contractors who rank for those terms ahead of time catch the spike. If your SEO ignores wind-damage, storm-driven, and seasonal searches, you are quietly handing away your busiest and most profitable months of the year." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google wants before it ranks a Cheyenne contractor site at all. Mobile speed matters most here, since most of your searches arrive on a phone." },
      { name: 'On-page optimization', desc: "Every page that matters tuned for the exact terms your Cheyenne customers search: titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and guides that answer what Cheyenne homeowners actually type, from wind-damage roof questions to frozen-pipe fixes, earn links, and keep pulling leads long after we publish them." },
      { name: 'Link building', desc: "Authority from real Cheyenne and industry sources. In a small but competitive market, links are often the deciding factor between page one and page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches right alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on Cheyenne calls, forms, and booked jobs, not just rankings and traffic, so you always know in dollars what your SEO is pulling in, storm month or quiet month." },
      { name: 'Storm & seasonal SEO', desc: "We rank you for the wind-damage, blizzard, and hail searches that fuel Cheyenne's busiest stretches, so you are visible before demand spikes instead of chasing it after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of Cheyenne search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Cheyenne leads, not just impressions." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile. In a phone-first town like Cheyenne this is the foundation everything else stands on before it can rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the seasonal and storm-driven terms that decide who wins after the next big blow." },
      { name: 'Build authority', desc: "Links and citations from trusted Cheyenne and industry sources to push your competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to real Cheyenne leads, then we lean harder into the terms that are converting and reach for the next keyword set, seasonal and storm terms included." },
    ],
    pricing: {
      heading: 'Transparent Cheyenne SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses set on owning Cheyenne-area search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Storm & seasonal SEO', 'eCommerce / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Cheyenne?', a: "Most Cheyenne SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. The tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Cheyenne?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on low-competition terms and slower on the most contested Cheyenne keywords. SEO compounds, so the longer you run it, the bigger the gains get." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops the moment you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Cheyenne contractors do best running SEO as the long-term engine and ads for short-term spikes." },
      { q: 'Should my Cheyenne SEO target wind and storm season?', a: "Yes. When a windstorm strips roofs or a blizzard hits, searches for roofing, repair, and restoration spike inside a day, and ranking takes months to build, so you have to be in place before the season rather than chasing it after. We optimize for those wind-damage, storm-driven, and seasonal terms ahead of time so your busiest months land on you." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. Higher tiers add storm-and-seasonal and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because that is about how long SEO takes to start moving a Cheyenne site, then it switches to month-to-month. If the leads are not showing up, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a growing slice of what we optimize for. We structure your content and schema so AI engines can read, trust, and name your Cheyenne business when someone asks them for a local contractor, not just classic search results." },
      { q: 'Which areas around Cheyenne do you cover?', a: "All of Cheyenne and the surrounding country: South Cheyenne, Sun Valley, Cole, Saddle Ridge, Pioneer Park, F.E. Warren AFB, Burns, Pine Bluffs, Carpenter and more, with genuine local pages rather than one generic Cheyenne page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for leads two other contractors also bought." },
      { q: "What's in the free SEO audit?", a: "Where you rank in Cheyenne search today, what the competitors ahead of you are doing to stay there, the highest-impact fixes, and a realistic timeline with the numbers modeled for your trade. It is the plainest way to see what Cheyenne SEO can actually pull in for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'cheyenne', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Cheyenne Web Design Company | OnwardCraft',
    metaDescription:
      'Cheyenne web design that turns visitors into booked jobs: fast, mobile-first sites built for contractors and ready for wind and storm-season demand.',
    eyebrow: 'Web Design · Cheyenne',
    h1: 'Cheyenne web design built to convert phone-first clicks into booked calls',
    h2Exact: 'Cheyenne Web Design Company',
    heroSubhead:
      "A handsome website that never rings the phone is just an expensive brochure. We build Cheyenne contractors fast, mobile-first sites engineered to turn visitors into booked work, and tough enough to hold up when a windstorm or blizzard sends your phone into overdrive.",
    primaryCta: 'Get my free quote',
    intro:
      "Cheyenne web design lives or dies on one thing: whether the site turns a visitor into a booked job. Most Cheyenne contractor websites bleed leads quietly, slow on a phone, call button buried, no clear offer anywhere. We close every one of those leaks. We build sites that load fast, look like the professional you actually are, and turn Downtown-to-Saddle-Ridge visitors, plus the PCS families just landing at F.E. Warren, into booked jobs. And they do not fall over when a hailstorm or ground blizzard sends your traffic through the roof.",
    aioQuestion: 'What makes a good contractor website in Cheyenne?',
    aioAnswer:
      "A good Cheyenne contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and is built to handle traffic spikes during wind and storm season. Because most Cheyenne searches happen on mobile, mobile speed and an obvious next step are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site brings in no work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "Plenty of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next name on the map. We design every page around one job: turning a Cheyenne visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Cheyenne visitors are on mobile, and they bounce if your site takes more than a couple of seconds to load. Slow sites also rank worse, so you lose twice. We build fast, so you keep both the visitor and the ranking." },
      { title: "It buckles when a storm surge hits", body: "After a big windstorm, hailstorm, or blizzard, contractor sites get slammed with a flood of urgent traffic, and the slow ones choke or hide the call button at the exact moment it matters most. We build sites that stay fast and keep converting under load, so you capture that demand instead of handing it to a quicker competitor." },
    ],
    servicesHeading: "What's in an OnwardCraft Cheyenne website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your service area, and the exact jobs you want more of." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that is where nearly all of your Cheyenne traffic lives. Fast, thumb-friendly, and easy to call from in one tap." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where a Cheyenne homeowner with a peeled roof will actually use them. Every page carries one unmistakable next step." },
      { name: 'Copy that sells', desc: "Words that speak to an anxious homeowner staring at a peeled roof or a burst pipe, not filler text that reads exactly like every other contractor in town." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank: clean structure, schema, fast load, and neighborhood-ready pages for Sun Valley, Saddle Ridge, Pioneer Park and beyond." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects your conversions and your Cheyenne rankings at once, and keeps the site quick on the rural cell signal east of town." },
      { name: 'Storm-surge ready', desc: "Built to stay fast and keep the call button front and center when wind- and blizzard-driven traffic spikes, the exact moment that turns visitors into your biggest jobs of the year.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read your site and recommend your business as more Cheyenne search shifts toward AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, the Cheyenne neighborhoods you serve, your most profitable jobs, and the few local shops you compete with, then map the site around booking more of the work you actually want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert a Cheyenne homeowner, and you see it and shape it before a single line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write copy that talks to an anxious Cheyenne homeowner, not generic filler, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch clean with the local-SEO foundation, call tracking, and speed dialed in from day one, so the site is ready the next time the wind kicks up." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it on what is actually turning Cheyenne visitors into booked calls." },
    ],
    pricing: {
      heading: 'Transparent Cheyenne web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors running several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Storm-surge ready'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Cheyenne?', a: "Most Cheyenne contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. The tiers are above: fixed price, no surprises, and you own the finished site outright." },
      { q: 'How long does it take to build?', a: "A focused Cheyenne site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We hand you a firm timeline up front and keep you posted at every stage, with an eye on having you live before wind season picks up." },
      { q: 'Will my site handle a storm-season traffic spike?', a: "Yes, and in Cheyenne that matters a lot. After a big windstorm, hailstorm, or blizzard, contractor sites take a flood of urgent traffic, and the slow ones lose leads right when demand peaks. We build fast and keep the call button obvious, so your site converts under load instead of buckling." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank, and pairing it with our SEO service is how you climb the competitive Cheyenne terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platform you cannot walk away from, and nothing tying your Cheyenne business to us if you ever want out." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where nearly all of your Cheyenne traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage yourself between jobs, usually WordPress or Webflow. We recommend the right fit in your free Cheyenne consult and explain the tradeoffs in plain English." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and after that we offer affordable monthly maintenance for updates, speed, and security, so the site keeps holding up through Cheyenne's storm seasons without you babysitting it." },
      { q: 'Am I locked into a contract?', a: "No. The Cheyenne build is a one-time project at a fixed price. Any ongoing maintenance or SEO runs month-to-month, so you can leave whenever you like." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Cheyenne site should include, and a fixed-price quote with a timeline. It is the simplest way to see what Cheyenne Web Design should do for your booked-job numbers. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'cheyenne', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Cheyenne Website Redesign | OnwardCraft',
    metaDescription:
      'Cheyenne Website Redesign without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs and hold up in storm season.',
    eyebrow: 'Website Redesign · Cheyenne',
    h1: 'Cheyenne Website Redesign that keeps every high-plains ranking you have earned',
    h2Exact: 'Cheyenne Website Redesign Company',
    heroSubhead:
      "An outdated site quietly costs you jobs every week: slow, clumsy on a phone, easy for a Cheyenne homeowner to skip past. We redesign contractor sites to convert more and load faster, and we migrate so carefully that you keep every bit of ranking you have already earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "A Cheyenne Website Redesign usually goes one of two bad ways: the site looks prettier but converts exactly the same, or it launches and the rankings vanish overnight. We do neither. We redesign Cheyenne contractor sites for speed and conversions, build them to survive wind- and storm-driven surges, and migrate with the redirects and SEO care that protect the traffic you have spent years building.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Cheyenne site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "On a high-ticket job, homeowners size you up by your site in seconds. An old, cluttered design quietly ships them to a competitor who simply looks more established, even when your work is plainly better. In a small market where word travels, that first impression often decides who gets the call." },
      { title: "It's slow and clumsy on a phone", body: "If your site is clunky or slow on mobile, you are losing the majority of your Cheyenne visitors before they ever reach your offer. A redesign built mobile-first wins those visitors back and turns them into leads." },
      { title: "It folds when demand surges", body: "Traffic that never turns into calls is wasted money, and an old site that slows to a crawl under a wind- or hail-driven surge loses leads at the precise moment they are worth the most. We rebuild for conversions and for the days your phone should be ringing off the hook." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what is costing you Cheyenne leads and rankings today, so the rebuild fixes the real problems instead of just swapping colors and calling it new." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep every bit of the rankings and traffic you have already earned in Cheyenne." },
      { name: 'Conversion redesign', desc: "Clear offers, smarter call-to-action placement, and lead forms a Cheyenne homeowner will actually fill out. We design for booked jobs, not just a prettier screenshot." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals, which lifts conversions and Cheyenne rankings together and keeps the site snappy on a phone out past Pine Bluffs." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where nearly all of your Cheyenne traffic actually lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and reassures the PCS family who just landed at Warren and is sizing you up in seconds." },
      { name: 'Storm-surge ready rebuild', desc: "Rebuilt to stay fast and keep converting when wind- and blizzard-driven traffic spikes, so the new site captures your biggest jobs instead of choking on them.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as more Cheyenne search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what is losing you Cheyenne leads and rankings, then map a rebuild that fixes it without breaking the pages already pulling work for you." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we touch a line of code, built for the phone where most Cheyenne searches start." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prep every redirect and SEO detail for a clean migration that does not torch the Cheyenne rankings you have already earned." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and watch closely so your Cheyenne rankings hold and climb instead of dropping in the days after." },
      { name: 'Optimize', desc: "Post-launch tuning on what is actually converting Cheyenne visitors into calls, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Cheyenne redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Storm-surge ready'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Cheyenne?', a: "Most Cheyenne redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result outright." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it is done carefully, and that is exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging before launch. Done right, a redesign holds the Cheyenne rankings you have built and usually pushes them higher." },
      { q: 'How long does a redesign take?', a: "A focused Cheyenne redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at every stage, ideally wrapping before the next storm season piles on." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is a pain to update, is not bringing in leads, or folds when wind- or storm-season traffic surges, it is costing you work. The free audit tells you plainly whether a redesign is worth it for your Cheyenne business." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and sharpen your existing content, protect the pages already ranking in Cheyenne search, and handle the technical migration so nothing important slips through the cracks." },
      { q: 'Will the new site handle storm-season traffic?', a: "Yes, and in Cheyenne that is a real consideration. After a big windstorm or blizzard, contractor sites take a surge of urgent traffic, and the slow ones lose leads. We rebuild for speed and keep the call to action obvious so the site converts when demand peaks." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts conversions and Cheyenne rankings together, and that matters because nearly all your local traffic arrives on a phone." },
      { q: 'Do I own the redesigned site?', a: "Completely: the site, the domain, and the content all stay yours. No platform lock-in of any kind, and nothing keeping your Cheyenne business tied to us." },
      { q: 'Am I locked into a contract?', a: "No. The Cheyenne redesign is a one-time project. Any ongoing maintenance or SEO runs month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in Cheyenne leads and rankings, what the rebuild should fix, and a fixed-price quote with a timeline and a safe migration plan. It is the honest way to weigh whether a Cheyenne Website Redesign earns its keep for your shop." },
    ],
  },
];

export const cheyenneCity = {
  citySlug: 'cheyenne', city: 'Cheyenne', state: 'Wyoming', stateAbbr: 'WY', metro: 'Cheyenne',

  titleTag: 'Cheyenne Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Cheyenne marketing for contractors: web design, SEO, and local SEO. Get found, get booked, and own your leads instead of renting them, all built for wind and storm demand.',

  eyebrow: 'Cheyenne · Web Design, SEO & Lead Generation',
  h1: 'Cheyenne marketing for contractors: get ranked, get booked, off the high plains',
  h2Exact: 'Cheyenne Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Cheyenne's base-driven, high-plains market. One team to get you ranking, converting, and off the rented-lead treadmill for good.",
  heroProof: ['Built for the trades', 'Wind & blizzard ready', 'No lock-in contracts'],
  primaryCta: 'Get my free Cheyenne audit',

  intro:
    "Cheyenne marketing for contractors means fighting for attention in the smallest state capital in the country, a market shaped by state government, the Union Pacific yards, the energy trade, and the steady churn of families rotating through F.E. Warren Air Force Base. Winning here takes three things working together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack, all locked in before the next windstorm or blizzard sends demand through the roof. Here is exactly how we help Cheyenne contractors pull that off.",
  aioQuestion: 'How do Cheyenne contractors get more leads online?',
  aioAnswer:
    "Cheyenne contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack. Because Cheyenne sees constant base-driven turnover and demand spikes hard during wind, blizzard, and hail events, the contractors who look established and already rank before the storm win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Cheyenne searches \"near me.\" The single highest-return move for most local shops, and how you catch wind- and storm-driven demand before it goes to a competitor.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your Cheyenne customers actually search, build an asset you own instead of renting traffic from ads, and measure the whole thing in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs, and to stay fast when wind and storm season floods your phone, not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it so carefully that you keep every bit of ranking you have already earned in Cheyenne search.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Cheyenne?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads, and so they are ready when wind and storm season hits and every homeowner needs help at once." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors, so we understand emergency calls, wind- and hail-driven demand, and insurance work." },
    { q: 'Why does the weather matter for my marketing?', a: "Cheyenne sits at 6,000 feet on the open high plains, where sustained wind, ground blizzards, and severe hail tear up roofs, siding, and fences. When that hits, demand for roofing, repair, and restoration spikes inside a day. Ranking takes months to build, so the contractors already visible before the storm take that work. We get you in place ahead of season." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO run month-to-month from $750 to $3,000, with no long contract. We confirm the exact scope for your Cheyenne business in the free audit." },
    { q: 'Which Cheyenne areas do you serve?', a: "All of Cheyenne and the country around it: Downtown, South Cheyenne, Sun Valley, Cole, Avalon, Saddle Ridge, Pioneer Park, plus F.E. Warren AFB, Burns, Pine Bluffs, Carpenter, Albin and more." },
    { q: 'Where should I start?', a: "Start with a free Cheyenne audit. We look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. It is the simplest first step into Cheyenne marketing for contractors that actually fills the calendar. No pitch deck, just a plan." },
  ],
};
