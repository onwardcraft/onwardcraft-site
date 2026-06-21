// BILLINGS: per-metro, per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Billings's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// BILLINGS: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'What you are really up against in Billings search',
  body:
    "Billings is the biggest city in Montana, and it works like a regional capital for a piece of country most states would call empty. Energy, agriculture, and two large hospitals anchor the economy, and the trade area runs for hundreds of miles in every direction. People in Hardin, Roundup, and Red Lodge drive an hour or more into town for a roofer, a furnace, or a clinic, which means a Billings contractor competes for a far wider customer base than the city limits suggest. Two facts shape who wins. First, almost every one of those searches happens on a phone with \"near me\" attached, and the homeowner taps one of the first names Google drops on the map without scrolling. Second, this is the high plains. Hard winters with deep cold snaps, chinook winds that swing the temperature thirty degrees in an afternoon, and severe late-spring hail push roofing, HVAC, and restoration demand in sharp waves. When the next hail line tears across the Yellowstone Valley, the contractor already sitting in the Map Pack books the calls. Everyone buried on page two watches that work drive past.",
  pullQuote: 'When the next hail storm hits Billings, the contractors already ranking are the ones who book the work.',
  donut: {
    title: 'Billings homeowners',
    value: 66,
    centerLabel: 'homeowner rate',
    legend: [
      { label: 'Homeowners', pct: 66, kind: 'teal' },
      { label: 'Renters', pct: 34, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Heating winter (Nov–Mar); hail/storm roofing (May–Aug)',
  seasonalDemand: [
    { m: 'J', v: 88, peak: true }, { m: 'F', v: 84, peak: true }, { m: 'M', v: 70, peak: true }, { m: 'A', v: 52 },
    { m: 'M', v: 74, peak: true }, { m: 'J', v: 82, peak: true }, { m: 'J', v: 86, peak: true },
    { m: 'A', v: 78, peak: true }, { m: 'S', v: 50 }, { m: 'O', v: 60 },
    { m: 'N', v: 80, peak: true }, { m: 'D', v: 90, peak: true },
  ],
  stats: [
    { value: '#1', label: "Montana's largest city and regional hub" },
    { value: '~58%', label: 'of local searches here happen on a phone, usually "near me"', accent: true },
    { value: 'Nov–Mar', label: 'winter heating season, the dominant demand driver' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks' },
  ],
  neighborhoods: [
    'Downtown', 'West End', 'Heights', 'Lockwood', 'Laurel', 'Shepherd',
    'Worden', 'Columbus', 'Red Lodge', 'Rimrocks', 'Billings Clinic area', 'St. Vincent area',
  ],
};

const AREAS = [
  'Billings', 'Heights', 'Lockwood', 'Laurel', 'Shepherd', 'Worden',
  'Columbus', 'Red Lodge', 'Park City', 'Huntley', 'Ballantine', 'Joliet',
  'Roundup', 'Hardin', 'Broadus',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We understand winter heating calls, frozen-pipe emergencies, hail damage, and insurance work, so everything we build is shaped around how your customers actually search when something breaks.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for a homeowner three competitors in town also bought at the same time.",
  },
  {
    title: 'We actually speak Billings',
    body: "High-plains winters, chinook temperature swings, hail-season roofing demand, and a trade area that reaches from the Heights out to Hardin, Roundup, and Red Lodge. Real targeting that fits a regional hub, not a city name swapped into a national template.",
  },
  {
    title: 'No contracts, no mystery',
    body: "Published prices, reporting tied to leads, month-to-month after 90 days. If we're not earning it, you leave. That keeps the pressure where it belongs: on us.",
  },
];

const PROOF = {
  heading: "We're new, so here's the honest math instead of a logo wall",
  body:
    "Plenty of agencies open with a grid of client logos. We're a young, founder-led shop, so we won't pretend to a track record we haven't built yet. What we can give you is the reasoning, pulled straight from Google's and the industry's own research on how people search for a local contractor.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here's a rough picture, labelled plainly as an illustration and not a result we're claiming: say a Billings contractor pulls roughly 1,500 local \"near me\" impressions a month. Moving from page-two invisibility up into the top three is the difference between a few stray calls and a calendar you can't keep up with, and after a hail line or a deep cold snap that gap gets even wider. In your free audit we model the real figures for your business: your current rankings, your actual search volume, and a straight 90-to-180-day path to the top of the map.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Billings', state: 'Montana', stateAbbr: 'MT', metro: 'Billings',
  heroProof: ['Built for the trades', 'Winter & hail-season ready', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const billingsLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'billings', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Billings Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'When Billings searches your service, three businesses show on the map. We put you in those three so the storm-season call lands with you, not a competitor.',
    eyebrow: 'Local SEO · Billings',
    h1: 'When Billings searches for what you do, be the first name they find',
    h2Exact: 'Billings Local SEO Company',
    heroSubhead:
      "Google pins three businesses to the map when someone searches \"near me,\" and everyone underneath them might as well not exist. We get you into that top three, so the call lands with you instead of whoever ranked first, and so you're already there when the next hail line or cold snap fills every phone in the valley.",
    primaryCta: 'Get my free Billings audit',
    intro:
      "Billings local SEO comes down to one moment: a homeowner in the Heights or out in Lockwood types your service plus \"near me,\" and either you're one of the three businesses Google pinned to the map or you're not. Most people tap one of those three and never scroll. Billings serves a trade area that stretches hundreds of miles, so winning one of those three spots is the whole game. Here's exactly how we get you there.",
    aioQuestion: 'How do Billings businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile tuned to the exact services and areas you want; name, address, and phone details that match everywhere online; a steady flow of real reviews; and local content built around genuine Billings neighborhoods. Because the city is a regional hub and weather drives demand in waves, the winners look established, answer fast, and are already ranking before the season turns.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Three competitors own the map spots', body: "Search your own service plus \"near me\" right now. Those three businesses Google pins to the map soak up the overwhelming majority of the clicks. If you're not one of them, how good your work is barely matters, because most people around Billings never see your name. Climbing into that top three is usually the single highest-return move a local business here can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Billings homeowner to four contractors at once, then bill each of you to fight over them. It's a treadmill you never get off. Local SEO builds the opposite: a homeowner finds you, calls you, and nobody else got the lead. Run it long enough and you stop renting visibility and start owning the pipeline." },
      { title: "You're not ready when the storm hits", body: "When a hail line tears across the Yellowstone Valley or a deep cold snap freezes pipes across town, demand for roofing, restoration, and HVAC goes vertical overnight, and the contractors already in the Map Pack scoop up those calls. If you're invisible on the map when the weather turns, that booked work flows to whoever Google already trusts. Ranking now is how you ride that wave instead of watching it pass." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The single biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows precisely which Billings searches belong to you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to line up everywhere Google checks. We fix the listings that contradict each other and build the ones you're missing across the region." },
      { name: 'Reviews that keep coming', desc: "A simple engine that turns finished jobs into a steady stream of fresh reviews. It lifts your ranking and gives the next homeowner a reason to call you first." },
      { name: 'Neighborhood pages', desc: "Real pages for the Heights, West End, Lockwood, Laurel and the towns out the highway, so you rank for the exact area someone's searching instead of a generic \"Billings.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, and mobile speed. The plumbing under the hood that lets every other piece actually rank." },
      { name: 'Local link building', desc: "Mentions and links from Billings sources Google trusts: local press, trade associations, community partners. In this market that's often what splits page one from page two." },
      { name: 'Seasonal demand readiness', desc: "We get your profile, pages, and reviews ranking before winter and hail season so you capture the roofing, restoration, and HVAC surge instead of scrambling for it after the storm has passed.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts inside AI Overviews, ChatGPT, and Perplexity. We structure your content so those engines can read you and cite you by name.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you genuinely rank today across every service area and pin down which competitors are beating you in the Map Pack and exactly why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP come first because they move the fastest. Most clients see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is exactly why local SEO rewards starting before the season, not after it." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Yellowstone County and the towns that drive in, backed by the on-page work that makes them rank." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, never vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Billings areas.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across the Billings region.', features: ['Everything in Local Growth', 'Local link building', 'Seasonal demand targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Billings?', a: "Most Billings engagements land between $750 and $2,500 a month, depending on how many areas and keywords you're chasing. The tiers above lay it out. No hidden fees, no long contract, and we lock the exact scope in your free audit before you spend a dollar." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move within a few weeks. The competitive Billings keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days is selling you a fantasy." },
      { q: 'What makes Billings local SEO different?', a: "Two things. Billings is the regional hub for eastern Montana, northern Wyoming, and the western Dakotas, so your trade area is huge and people drive in from far out, which makes trust signals like reviews and matching listings carry real weight. And the weather drives demand in waves, from hard winters to severe hail, so your ranking has to be in place before the season rather than after it." },
      { q: 'How does local SEO help me during hail and winter season?', a: "When a hail line crosses the valley or a deep cold snap freezes pipes, searches for roofing, restoration, and HVAC spike overnight, and the businesses already in the Map Pack take those calls. We get you ranking and reviewed ahead of season so you capture that demand instead of fighting over scraps once everyone else is already booked." },
      { q: 'Which areas do you cover?', a: "All of Billings and the region it serves: the Heights, West End, Lockwood, Laurel, Shepherd, Worden, Columbus, Red Lodge and the towns out the highway, plus the wider catchment reaching into northern Wyoming and the western Dakotas. We build genuine neighborhood pages instead of one generic Billings page, because that's what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand emergency calls, winter heating demand, hail damage, and insurance jobs, and we build your local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More \"near me\" research now starts in AI tools instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's fast becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays squarely on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that send leads straight to you alone. Over time you lean on the brokers less because the work is already coming to you direct." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your service areas, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck, just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'billings', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Billings SEO Company | OnwardCraft',
    metaDescription:
      'Billings SEO that ranks contractors on Google and delivers leads you own. Revenue-tied reporting, no lock-in, built for winter heating and hail-season demand.',
    eyebrow: 'SEO Services · Billings',
    h1: 'Get your Billings business to the top of Google and keep it there',
    h2Exact: 'Billings SEO Company',
    heroSubhead:
      "Ads die the second you stop paying. SEO does the reverse: rank once for what your Billings customers search and the leads keep arriving for months. We build that ranking and tie every report to real calls and booked jobs, not vanity charts.",
    primaryCta: 'Get my free Billings SEO audit',
    intro:
      "Billings SEO comes down to one blunt question: when someone searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords across a regional market that pulls customers in from hundreds of miles out, where demand swings with hard winters and hail season, and we measure the whole thing in leads, not traffic that never picks up the phone.",
    aioQuestion: 'How do Billings businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content, and earning links from trusted Billings sources. In a regional-hub market with hard high-plains winters and severe hail season, keeping the site fast on mobile and ranking for weather-driven seasonal terms are two of the quickest ways to pull ahead.",
    problemHeading: "Three reasons your Billings site isn't bringing in work",
    painPoints: [
      { title: "You're stranded on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it either. If you're not in the top handful of results for what you sell, your site is effectively invisible no matter how sharp it looks. In a regional hub like Billings, that invisibility is exactly what's sending your jobs to the competition." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the instant your card stops, the leads stop cold. SEO builds an asset you actually own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost you're paying now." },
      { title: "You're not ranking for the demand that matters", body: "Billings demand swings hard with the seasons: winter heating, hail-season roofing, summer HVAC. The contractors who rank for those terms ahead of time catch the spike. If your SEO ignores weather-driven and seasonal searches, you're quietly handing away your busiest, most profitable months." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank your Billings site at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned for the exact terms your Billings customers search: titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot long after we publish them." },
      { name: 'Link building', desc: "Authority from real Billings and industry sources. In a competitive regional market, links are often the deciding factor between page one and page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches right alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and booked leads, not just rankings and traffic, so you always know what your SEO is actually worth in dollars." },
      { name: 'Seasonal & weather SEO', desc: "We rank you for the winter-heating, hail-driven, and summer-HVAC searches that fuel Billings's busiest months, so you're visible before demand spikes instead of chasing it after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of Billings search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Billings leads, not just impressions." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile. The foundation everything else needs before it can rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the seasonal and weather-driven terms that decide who wins your busiest weeks." },
      { name: 'Build authority', desc: "Links and citations from trusted Billings and industry sources to push your competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Billings SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Billings-region search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal & weather SEO', 'eCommerce / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Billings?', a: "Most Billings SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. The tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Billings?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on low-competition terms and slower on the most contested Billings keywords. SEO compounds, so the longer you run it, the bigger the gains get." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops the moment you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Billings contractors do best running SEO as the long-term engine and ads for short-term spikes." },
      { q: 'Should my Billings SEO target winter and hail season?', a: "Absolutely. When deep cold snaps freeze pipes or hail lines tear across the valley, searches for HVAC, roofing, and restoration spike overnight, and ranking takes months to build, so you have to be in place before the season rather than chasing it after. We optimize for those seasonal and weather-driven terms ahead of time so your busiest months land on you." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal-and-weather and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it switches to month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business by name, not just classic search results." },
      { q: 'Which areas around Billings do you cover?', a: "All of Billings and the surrounding region: the Heights, Lockwood, Laurel, Shepherd, Worden, Columbus, Red Lodge and the towns that drive in, plus the wider catchment into northern Wyoming and the western Dakotas, with genuine local pages rather than one generic Billings page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for leads three competitors also bought." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'billings', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Billings Web Design Company | Sites That Convert | OnwardCraft',
    metaDescription:
      'Billings web design that turns visitors into booked jobs: fast, mobile-first sites built for contractors and ready for winter and hail-season demand.',
    eyebrow: 'Web Design · Billings',
    h1: 'Billings web design that turns visitors into booked jobs',
    h2Exact: 'Billings Web Design Company',
    heroSubhead:
      "A handsome website that never generates a call is just an expensive brochure. We build Billings contractors fast, mobile-first sites engineered to turn visitors into booked work, and tough enough to hold up when a hail storm or a hard freeze sends your phone into overdrive.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Billings contractor websites bleed leads quietly: slow on a phone, call button buried, no clear offer anywhere. Web design done right closes all of those leaks. We build sites that load fast, look like the professional you actually are, and turn Heights-to-West-End visitors into booked jobs, and that don't fall over when a hail line or cold snap sends your traffic through the roof.",
    aioQuestion: 'What makes a good contractor website in Billings?',
    aioAnswer:
      "A good Billings contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and is built to handle traffic spikes during winter cold snaps and hail season. Because most Billings searches happen on mobile, mobile speed and an obvious next step are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "Plenty of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next name on the map. We design every page around one job: turning a Billings visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Billings visitors are on mobile, and they bounce if your site takes more than a couple of seconds to load. Slow sites also rank worse, so you lose twice. We build fast, so you keep both the visitor and the ranking." },
      { title: "It can't handle a seasonal surge", body: "After a big hail storm or a hard freeze, contractor sites get slammed with a flood of urgent traffic, and the slow ones buckle or bury the call button at the exact moment it matters most. We build sites that stay fast and keep converting under load, so you capture that demand instead of losing it to a faster competitor." },
    ],
    servicesHeading: "What's in an OnwardCraft Billings website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your service area, and the exact jobs you want more of." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where nearly all of your Billings traffic lives. Fast, thumb-friendly, and easy to call from in one tap." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where homeowners actually use them. Every page carries an unmistakable next step." },
      { name: 'Copy that sells', desc: "Words that speak to an anxious homeowner staring at a hail-battered roof or a frozen pipe, not filler text that reads exactly like every other contractor in town." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank: clean structure, schema, fast load, and neighborhood-ready pages for the Heights, West End, Laurel and beyond." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both your conversions and your rankings at the same time." },
      { name: 'Seasonal-surge ready', desc: "Built to stay fast and keep the call button front and center when winter and hail-season traffic spikes, the exact moment that turns visitors into your biggest jobs of the year.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read your site and recommend your business as more Billings search shifts toward AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your service area, your most profitable jobs, and your competitors, then map the site around booking more of the work you actually want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert, and you see it and shape it before a single line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed all dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting visitors into calls." },
    ],
    pricing: {
      heading: 'Transparent Billings web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Seasonal-surge ready'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Billings?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. The tiers are above: fixed price, no surprises, and you own the finished site outright." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you posted through every stage." },
      { q: 'Will my site handle a seasonal traffic spike?', a: "Yes, and in Billings that matters. After a hail storm or a hard freeze, contractor sites take a flood of urgent traffic, and the slow ones lose leads right when demand peaks. We build fast and keep the call button obvious, so your site converts under load instead of buckling." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank, and pairing it with our SEO service is how you climb the competitive Billings terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations and no platform you can't walk away from." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where nearly all of your Billings traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage yourself, usually WordPress or Webflow. We recommend the right fit in your free consult and explain the tradeoffs in plain English." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month, so you can leave whenever you like." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Billings site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'billings', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Billings Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your Billings website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs and hold up through hard winters.',
    eyebrow: 'Website Redesign · Billings',
    h1: 'Redesign your Billings website without losing your rankings',
    h2Exact: 'Billings Website Redesign Company',
    heroSubhead:
      "An outdated site quietly costs you jobs every week: slow, clumsy on a phone, easy for a Billings homeowner to skip past. We redesign contractor sites to convert more and load faster, and we migrate so carefully that you keep every bit of ranking you've already earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks prettier but converts exactly the same, or it launches and the rankings vanish overnight. We do neither. We redesign Billings contractor sites for speed and conversions, build them to survive winter and hail-season demand surges, and migrate with the redirects and SEO care that protect the traffic you've spent years building.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Billings site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "On a high-ticket job, homeowners size you up by your site in seconds. An old, cluttered design quietly ships them to a competitor who simply looks more established, even when your work is plainly better. When someone's driving an hour into Billings to hire you, that first impression decides who gets the call." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your Billings visitors before they ever reach your offer. A redesign built mobile-first wins those visitors back and turns them into leads." },
      { title: "It can't keep up when demand surges", body: "Traffic that never turns into calls is wasted money, and an old site that slows to a crawl under a hail-season or cold-snap surge loses leads at the precise moment they're worth the most. We rebuild for conversions and for the days your phone should be ringing off the hook." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes the real problems instead of just swapping the colors around." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep every bit of the rankings and traffic you've already earned in Billings." },
      { name: 'Conversion redesign', desc: "Clear offers, smarter call-to-action placement, and lead forms homeowners actually use. We design for booked jobs, not just a prettier screenshot." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals, which lifts conversions and rankings at the same time." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where nearly all of your Billings traffic actually lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the price of the jobs you want to book." },
      { name: 'Seasonal-surge ready rebuild', desc: "Rebuilt to stay fast and keep converting when winter and hail-season traffic spikes, so the new site captures your biggest jobs of the year instead of choking on them.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as more Billings search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you leads and rankings, then map a redesign that fixes it without breaking what already works for you." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build a thing." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean, no-surprises migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so your rankings hold and climb instead of dropping." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Billings redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Seasonal-surge ready'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Billings?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result outright." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually pushes them higher." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at every stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is a pain to update, isn't bringing in leads, or buckles when seasonal traffic surges, it's costing you work. The free audit tells you plainly whether a redesign is worth it for your Billings business." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and sharpen your existing content, preserve what's ranking, and handle the technical migration so nothing important slips through the cracks." },
      { q: 'Will the new site handle seasonal traffic?', a: "Yes, and in Billings that's a real consideration. After a hail storm or a hard freeze, contractor sites take a surge of urgent traffic, and the slow ones lose leads. We rebuild for speed and keep the call to action obvious so the site converts when demand peaks." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely: the site, the domain, and the content. No platform lock-in of any kind." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const billingsCity = {
  citySlug: 'billings', city: 'Billings', state: 'Montana', stateAbbr: 'MT', metro: 'Billings',

  titleTag: 'Billings Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Billings contractors. Get found, get booked, and own your leads instead of renting them, all built for winter and hail-season demand.',

  eyebrow: 'Billings · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Billings contractors found and booked',
  h2Exact: 'Billings Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Billings's regional-hub market and its hard winters and hail seasons. One team to get you ranking, converting, and off the rented-lead treadmill for good.",
  heroProof: ['Built for the trades', 'Winter & hail-season ready', 'No lock-in contracts'],
  primaryCta: 'Get my free Billings audit',

  intro:
    "If you run a contracting business in Billings, you're serving the largest market in Montana and the hub for an enormous region that pulls customers in from Hardin, Roundup, Red Lodge, and across the Wyoming and Dakota lines. Winning here takes three things working together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack, all locked in before the next cold snap or hail line sends demand through the roof. Here's exactly how we help Billings contractors pull that off.",
  aioQuestion: 'How do Billings contractors get more leads online?',
  aioAnswer:
    "Billings contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack. Because Billings is the regional hub for a vast catchment and demand spikes hard during winter and hail season, the contractors who look established and are already ranking before the weather hits win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Billings searches \"near me.\" The single highest-return move for most local businesses, and how you catch winter and hail-season demand before it goes to a competitor.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your Billings customers actually search, build an asset you own instead of renting traffic from ads, and measure the whole thing in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs, and to stay fast when winter and hail season floods your phone, not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it so carefully that you keep every bit of ranking you've already earned in Billings search.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Billings?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads, and so they're ready when winter and hail season hit and every homeowner needs help at once." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors, so we understand emergency calls, winter heating demand, hail damage, and insurance work." },
    { q: 'Why does seasonal weather matter for my marketing?', a: "When a hail line crosses the Yellowstone Valley or a deep cold snap freezes pipes, demand for roofing, restoration, and HVAC spikes overnight and the backlog can run for weeks. Ranking takes months to build, so the contractors who are already visible before the weather take that work. We get you in place ahead of season." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm the exact scope in your free audit." },
    { q: 'Which Billings areas do you serve?', a: "All of Billings and the surrounding region: the Heights, West End, Lockwood, Laurel, Shepherd, Worden, Columbus, Red Lodge and the towns that drive in, plus the wider catchment into northern Wyoming and the western Dakotas." },
    { q: 'Where should I start?', a: "Start with a free Billings audit. We look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};
