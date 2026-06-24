// BOULDER: per-metro, per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Boulder's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// BOULDER: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why winning Boulder search is its own kind of hard',
  body:
    "Boulder is a small city with an outsized standard. The University of Colorado, NCAR, NIST, NOAA, and a stack of federal labs draw in physicists, climate scientists, and software engineers, and that crowd hires a contractor the way they read a paper: they check the citations, compare the data, and reject anything that looks thin. Home prices sit among the steepest in Colorado, so the jobs themselves run high-ticket: full kitchen and addition remodels in Newlands and Mapleton Hill, deep-energy retrofits, heat-pump and solar conversions in Table Mesa and South Boulder. The city also writes some of the toughest green-building and permitting rules in the state, so buyers expect a contractor who already knows the code, not one who learns it on their job. Then the foothills set the terms. Boulder sits in the wildland-urban interface, and the December 2021 Marshall Fire crossed from Boulder County grassland into Louisville and Superior and burned more than a thousand homes in an afternoon. Hail Alley storms batter roofs every summer, and the 2013 flood is still fresh. When the next event lands, demand for roofing, fire-hardening, restoration, and rebuilds does not rise gently. It spikes, and the contractor already pinned to the map is the one whose phone rings.",
  pullQuote: 'After the Marshall Fire, the contractors already ranking are the ones who booked the rebuilds.',
  donut: {
    title: 'How Boulder searches',
    value: 64,
    centerLabel: 'college-educated',
    legend: [
      { label: 'College-educated', pct: 64, kind: 'teal' },
      { label: 'Other', pct: 36, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Hail/storm roofing (Apr–Aug); fire-wind season (Sep–Dec)',
  seasonalDemand: [
    { m: 'J', v: 38 }, { m: 'F', v: 36 }, { m: 'M', v: 50, peak: true }, { m: 'A', v: 72, peak: true },
    { m: 'M', v: 86, peak: true }, { m: 'J', v: 92, peak: true }, { m: 'J', v: 88, peak: true },
    { m: 'A', v: 58 }, { m: 'S', v: 64, peak: true }, { m: 'O', v: 78, peak: true },
    { m: 'N', v: 70, peak: true }, { m: 'D', v: 60, peak: true },
  ],
  stats: [
    { value: '1,000+', label: 'homes destroyed by the Marshall Fire in hours' },
    { value: '~64%', label: 'of Boulder adults hold a college degree, so they research everything', accent: true },
    { value: 'Apr–Aug', label: 'Hail Alley storm season, when roofing demand spikes' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks' },
  ],
  neighborhoods: [
    'North Boulder', 'Newlands', 'Mapleton Hill', 'Table Mesa', 'Gunbarrel',
    'Louisville', 'Superior', 'Lafayette', 'Erie', 'Niwot',
    'Longmont', 'South Boulder', 'Chautauqua', 'Whittier', 'Martin Acres',
  ],
};

const AREAS = [
  'Boulder', 'Louisville', 'Superior', 'Lafayette', 'Erie', 'Niwot',
  'Longmont', 'Gunbarrel', 'Broomfield', 'Nederland', 'Lyons',
  'Westminster', 'Frederick', 'Firestone', 'Dacono',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We know how Boulder's green-building code, fire-hardening work, hail claims, and heat-pump and solar conversions actually buy, so everything we build matches how your customers really search.",
  },
  {
    title: 'We get you off rented leads',
    body: "What we are after is a pipeline that belongs to you and nobody else. Not one more recurring charge to a lead broker for the same South Boulder homeowner that three of your competitors are already calling.",
  },
  {
    title: 'We actually speak Boulder',
    body: "Marshall Fire rebuilds, Hail Alley roofing, a CU-and-NCAR homeowner class that vets every bid, and a permitting regime that rewards contractors who know the code. From Mapleton Hill to Superior, that's local knowledge a national agency can't fake by swapping a city name into a template.",
  },
  {
    title: 'No contracts, no mystery',
    body: "Our prices sit right on the page, the reporting points back to real leads, and you go month-to-month once the first 90 days are up. If we stop earning the invoice, you walk. That keeps the weight of it on our shoulders, which is the only place it should sit.",
  },
];

const PROOF = {
  heading: "We're new in Boulder, so here's the honest math instead of a logo wall",
  body:
    "Plenty of agencies open with a grid of client logos. We're a young, founder-led shop, so we won't pretend to a track record we haven't built yet. What we can hand you is the reasoning, pulled straight from Google's and the industry's own research on how people search for local contractors.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here's a rough picture, labelled clearly as a projection and not a result we're claiming: say a Boulder contractor pulls roughly 1,500 local \"near me\" impressions a month. Moving from page-two invisibility up into the top three is the difference between a handful of stray calls and a calendar you can't keep up with, and after a fire or a hailstorm that gap blows wide open. In your free audit we model the real figures for your business: your current rankings, your actual search volume, and a straight 90-to-180-day path to the top of the map.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Boulder', state: 'Colorado', stateAbbr: 'CO', metro: 'Boulder',
  heroProof: ['Built for the trades', 'Fire & hail ready', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const boulderLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'boulder', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Boulder Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Boulder Local SEO that wins you the top three on the map, so the call lands with you when a Newlands or Superior homeowner searches near me.',
    eyebrow: 'Local SEO · Boulder',
    h1: 'Boulder Local SEO that wins you the top three on the map, from Newlands to Superior',
    h2Exact: 'Boulder Local SEO Company',
    heroSubhead:
      "Google pins three businesses to the map when a homeowner searches \"near me,\" and everyone underneath them basically does not exist. We get you into that top three, so the call lands with you instead of whoever ranked first, and so you are already there when the next fire or hailstorm sends every Boulder County phone into overdrive.",
    primaryCta: 'Get my free Boulder audit',
    intro:
      "Boulder local SEO comes down to one moment: a homeowner in Newlands or Superior types your service plus \"near me,\" and either you are one of the three businesses Google pinned to the map or you are not. Most people tap one of those three and never scroll. This is a market where CU researchers and lab scientists vet every bid, and a foothills market where disaster demand spikes hard, so becoming one of those three is the whole game. Here is exactly how we get you there.",
    aioQuestion: 'How do Boulder businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile tuned to your exact services and neighborhoods; name, address, and phone that match everywhere; a steady flow of real reviews; and content built around genuine Boulder County neighborhoods. Boulder homeowners research hard and the foothills bring fire and hail risk, so the winners look expert and are already ranking before demand spikes.",
    problemHeading: "If your Boulder phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Three rivals hold the Boulder map and your name is missing', body: "Search your own service plus \"near me\" right now. Those three businesses Google pins to the map soak up most of the clicks, and in a town this small the same names keep showing up. If you are not one of them, the quality of your work barely registers, because most Boulder homeowners never scroll far enough to see you. Climbing into that top three is usually the single highest-return move a local business here can make." },
      { title: "You're paying brokers for leads you never keep", body: "Angi, Thumbtack, and HomeAdvisor sell the same Boulder homeowner to four contractors at once, then bill each of you to fight over them. It is a treadmill you cannot step off. Local SEO builds the opposite asset: a homeowner finds you, calls you, and nobody else got the lead. Run it long enough and you stop renting visibility and start owning the pipeline." },
      { title: "You're invisible when the foothills go up", body: "When the Marshall Fire crossed into Louisville and Superior, demand for roofing, restoration, fire-hardening, and rebuilds went vertical in an afternoon, and the contractors already in the Map Pack took those calls for years afterward. Hail Alley does the same thing to roofing every summer. If you are buried on page two when the next event lands, that booked work flows to whoever Google already trusts. Ranking now is how you catch that surge instead of watching it pass." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The single biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows precisely which Boulder searches belong to you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to line up everywhere Google checks. We fix the listings that contradict each other and build the ones you are missing." },
      { name: 'Reviews that keep coming', desc: "A simple engine that turns finished jobs into a steady stream of fresh reviews. In a market where buyers read every word before they call, reviews lift your ranking and tip the decision your way." },
      { name: 'Neighborhood pages', desc: "Real pages for Newlands, Table Mesa, Gunbarrel, Louisville, Superior and the rest, so you rank for the exact neighborhood someone is searching instead of a generic \"Boulder.\"" },
      { name: 'On-page and technical SEO', desc: "Page titles, structured data, internal linking, and mobile load times. This is the wiring behind the wall that lets everything else you built actually surface in Boulder search." },
      { name: 'Local link building', desc: "Mentions and links from Boulder sources Google trusts: local press, CU and lab partners, trade associations. In this market that is often what splits page one from page two." },
      { name: 'Fire & hail readiness', desc: "We get your profile, pages, and reviews ranking before fire-wind and hail season so you capture the rebuild and roofing surge instead of chasing it after the smoke clears.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts inside AI Overviews, ChatGPT, and Perplexity, and Boulder's lab-and-startup crowd adopts those tools early. We structure your content so those engines can read you and cite you by name.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We map where you actually stand today across every Boulder County service area, then work out which competitors are outranking you in the Map Pack and the specific reasons they are." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP come first because they move the fastest. Most Boulder clients see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is exactly why local SEO rewards starting now over starting later." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Boulder County, backed by the on-page work that makes them rank." },
      { name: 'Report and expand', desc: "Reporting in plain language, tied to calls and booked leads rather than ranking screenshots nobody can spend. Once a neighborhood is locked, we move on to the next one." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Boulder County areas.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across Boulder County.', features: ['Everything in Local Growth', 'Local link building', 'Fire & hail demand targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Boulder?', a: "Most Boulder engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you are chasing. The tiers above lay it out. No hidden fees, no long contract, and we lock the exact scope in your free audit before you spend a dollar." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move within a few weeks. The competitive Boulder keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days in a market this discerning is selling you a fantasy." },
      { q: 'What makes Boulder local SEO different?', a: "Two things. It is one of the most educated and affluent markets in the country, where CU, NCAR, and the federal labs fill neighborhoods with people who vet every contractor, so reviews, expertise, and consistent listings carry real weight. And it sits in the foothills, so trade demand swings hard with fire-wind and hail season. Your ranking has to be locked in before disaster, not scrambled together after it." },
      { q: 'How does local SEO help me after a fire or hailstorm?', a: "When the Marshall Fire hit Louisville and Superior, searches for roofing, restoration, fire-hardening, and rebuilds spiked overnight, and the businesses already in the Map Pack booked that work for years. Hail Alley does the same to roofing every summer. We get you ranking and reviewed ahead of season so you capture that demand instead of competing for scraps once everyone else is already booked." },
      { q: 'Which areas do you cover?', a: "All of Boulder County and the surrounding areas: North Boulder, Newlands, Mapleton Hill, Table Mesa, Gunbarrel, plus Louisville, Superior, Lafayette, Erie, Niwot, Longmont and more. We build genuine neighborhood pages instead of one generic Boulder page, because that is what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It is basically all we do: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand fire-hardening, hail claims, Boulder's green-building permitting, and the high-end remodel and electrification work that drives this market." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More \"near me\" research now starts in AI tools instead of classic search, and Boulder's lab-and-startup homeowners are early to it. We structure your content and schema so those engines can read, trust, and cite your business. Here it is fast becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. The one ask is an initial 90-day run, because that is about how long local SEO needs before the numbers start to move in a market this competitive. From there you are month-to-month. If the results are not there, you leave, and the burden of proof stays on us, where it should." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms lease you shared leads and a sliver of visibility you never get to keep. We build the opposite: rankings, a tuned Google profile, and a growing review base that route Boulder homeowners straight to you and only you. Month by month you depend on the brokers less, because the calls are already arriving direct." },
      { q: "What's in the free audit?", a: "A straight read on where you currently rank across your service areas, what the Map Pack leaders are doing to stay ahead of you, the handful of fixes that will lift you fastest, and a grounded 90-to-180-day plan with the figures worked out for your business. No slide deck, just a Boulder Local SEO diagnosis you can act on, built to put you in the local 3-pack and keep you there." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'boulder', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Boulder SEO Company | OnwardCraft',
    metaDescription:
      'Boulder SEO that builds rankings you actually own, so contractors rank on Google for the money keywords. Revenue-tied reporting, no lock-in, built for fire and hail demand.',
    eyebrow: 'SEO Services · Boulder',
    h1: 'Boulder SEO that builds rankings you actually own, in an affluent foothills market',
    h2Exact: 'Boulder SEO Company',
    heroSubhead:
      "Ads die the second you stop paying. SEO does the reverse: rank once for what your Boulder customers search and the leads keep arriving for months. We build that ranking and tie every report to real calls and booked jobs, not vanity charts.",
    primaryCta: 'Get my free Boulder SEO audit',
    intro:
      "Boulder SEO comes down to one blunt question: when someone searches what you do, are you on page one or page two? In this market page two might as well be page fifty. We get contractors ranking for the money keywords in an affluent, research-driven, foothills market, and we measure the whole thing in leads, not traffic that never picks up the phone.",
    aioQuestion: 'How do Boulder businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content, and earning links from trusted Boulder sources. In an educated, code-strict, fire-and-hail market, keeping the site fast on mobile and ranking for fire-rebuild, hail-roofing, and green-building terms are two of the quickest ways to pull ahead.",
    problemHeading: "Three reasons your Boulder site isn't bringing in work",
    painPoints: [
      { title: "Page two is where Boulder jobs go to die", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it either. If you are not in the top handful of results for what you sell, your site is effectively invisible no matter how sharp it looks. In a market that compares three or four bids on everything, that invisibility is exactly what sends your jobs to the competition." },
      { title: "You're leasing your Boulder traffic from Google Ads", body: "Ads have their place, but the leads dry up the second your card stops getting charged. SEO builds something you keep: rankings that go on pulling in Boulder homeowners months and years past the work itself, at a slice of the per-lead price the ad auction keeps charging you." },
      { title: "You miss the fire, hail, and green-building demand", body: "Boulder demand swings with the season and the disasters: hail in summer, fire-hardening through the fall wind season, rebuilds after the Marshall Fire, and a steady run of energy-retrofit and electrification work driven by the city's green-building rules. If your SEO ignores fire, hail, and green-building searches, you are quietly handing away your busiest, most profitable months." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank your Boulder site at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned for the exact terms your Boulder customers search: titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot, with the depth this research-driven market actually reads." },
      { name: 'Link building', desc: "Authority from real Boulder and industry sources. In a competitive, educated market, links are often the deciding factor between page one and page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack work that wins the \"near me\" searches across Boulder County at the same time your organic listings climb." },
      { name: 'Revenue-tied reporting', desc: "Our reports track phone calls, form fills, and booked jobs rather than traffic counts and ranking positions, so the dollar value of your SEO is never a guess." },
      { name: 'Fire, hail & green-building SEO', desc: "We rank you for the fire-hardening, hail-roofing, and energy-efficient retrofit terms that fuel Boulder's busiest months, so you are visible before demand spikes instead of chasing it after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of Boulder's tech-heavy search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Boulder leads, not just impressions." },
      { name: 'Fix the technical base', desc: "Load speed, crawlability, structured data, and mobile rendering. None of the rest can rank until this groundwork is solid." },
      { name: 'Optimize and create content', desc: "On-page work across the pages that earn you money, plus fresh local content covering the fire-rebuild, hail-roofing, and green-building terms that settle who wins in Boulder." },
      { name: 'Build authority', desc: "Links and citations from trusted Boulder and industry sources to push your competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Every month the reporting points back to leads, and from there we press harder on whatever is paying off and reach into the next set of keywords." },
    ],
    pricing: {
      heading: 'Transparent Boulder SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Boulder County search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Fire, hail & green-building SEO', 'eCommerce / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Boulder?', a: "Most Boulder SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. The tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Boulder?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on low-competition terms and slower on the most contested Boulder keywords. SEO compounds, so the longer you run it, the bigger the gains get." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops the moment you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Boulder contractors do best running SEO as the long-term engine and ads for short-term spikes." },
      { q: 'Should my Boulder SEO target fire and hail season?', a: "Absolutely. When the Marshall Fire hit or a Hail Alley storm rolls through, searches for roofing, restoration, fire-hardening, and rebuilds spike overnight, and ranking takes months to build, so you have to be in place before the season rather than chasing it after. We optimize for those seasonal and disaster-driven terms ahead of time so your busiest months land on you." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. Higher tiers add fire, hail, green-building, and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. The only commitment is an opening 90 days, which is what SEO needs before real movement shows up, and after that it runs month-to-month. If the results are not landing, you are free to go." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a growing part of what we optimize for, and Boulder's lab-and-startup homeowners are early to it. We structure your content and schema so AI engines can read, trust, and cite your business by name, not just classic search results." },
      { q: 'Which areas around Boulder do you cover?', a: "All of Boulder County and the surrounding areas: Louisville, Superior, Lafayette, Erie, Niwot, Longmont, Gunbarrel, Broomfield and more, with genuine local pages rather than one generic Boulder page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that route Boulder homeowners straight to your phone. The more of your search visibility you own outright, the less you have to pay brokers for leads three competitors bought the same hour." },
      { q: "What's in the free SEO audit?", a: "Your current rankings, the moves your competitors are making to stay ahead of you, the fixes with the most upside, and a realistic timeline with the figures worked out for your business. No slide deck, just a Boulder SEO diagnosis built to push your money keywords onto page one and grow the organic traffic you keep." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'boulder', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Boulder Web Design Company | OnwardCraft',
    metaDescription:
      'Boulder web design engineered to bring in real work, not just look nice. Fast, mobile-first contractor sites that convert and hold up through fire and hail demand.',
    eyebrow: 'Web Design · Boulder',
    h1: 'Boulder web design engineered to bring in real work, from Newlands to Superior',
    h2Exact: 'Boulder Web Design Company',
    heroSubhead:
      "A handsome website that never generates a call is just an expensive brochure. We build Boulder contractors fast, mobile-first sites engineered to turn visitors into booked work, and tough enough to hold up when fire or hail season sends your phone into overdrive.",
    primaryCta: 'Get my free quote',
    intro:
      "Boulder Web Design is the difference between a website that books high-ticket jobs and one that quietly bleeds leads: slow on a phone, call button buried, no clear offer, and no proof of the expertise this market checks for first. Website design done right closes all of those leaks. We build a contractor website that loads fast, looks like the professional you actually are, and turns Newlands-to-Superior visitors into booked jobs, and that does not fall over when a fire or hailstorm sends your traffic through the roof.",
    aioQuestion: 'What makes a good contractor website in Boulder?',
    aioAnswer:
      "A good Boulder contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews, credentials, and real project photos, and holds up under fire and hail season spikes. Because Boulder homeowners compare every contractor and most searches happen on mobile, speed and demonstrated expertise separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't booking Boulder work",
    painPoints: [
      { title: "It reads like a brochure, not a lead engine", body: "Plenty of contractor sites just list services and sit there. No clear offer, no obvious next step, no proof of expertise for a market that checks everything. We design every page around one job: turning a Boulder visitor into a booked lead." },
      { title: "It crawls on a phone and loses the visitor", body: "Most of your Boulder visitors are on mobile, and they bounce if your site takes more than a couple of seconds to load. Slow sites also rank worse, so you lose twice. We build fast, so you keep both the visitor and the ranking." },
      { title: "It can't handle a disaster-season surge", body: "After the Marshall Fire and during hail season, contractor sites got slammed with a flood of urgent traffic, and the slow ones buckled or buried the call button at the exact moment it mattered most. We build sites that stay fast and keep converting under load, so you capture that demand instead of losing it to a faster competitor." },
    ],
    servicesHeading: "What's in an OnwardCraft Boulder website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your service area, and the exact high-ticket jobs you want more of." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that is where nearly all of your Boulder traffic lives. Fast, thumb-friendly, and easy to call from in one tap." },
      { name: 'Conversion-focused UX', desc: "A plain offer, call buttons you cannot miss, and lead forms set where Boulder homeowners actually reach for them. No page leaves the next step in doubt." },
      { name: 'Copy that sells', desc: "Words that speak to a discerning Boulder homeowner and prove the expertise and sustainability they expect, not filler text that reads exactly like every other contractor in town." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank: clean structure, schema, fast load, and neighborhood-ready pages for Newlands, Table Mesa, Superior and beyond." },
      { name: 'Speed & Core Web Vitals', desc: "Built to load quickly and clear Google's performance thresholds, which guards your conversions and your rankings in one move." },
      { name: 'Disaster-surge ready', desc: "Built to stay fast and keep the call button front and center when fire-rebuild or hail traffic spikes, the exact moment that turns visitors into your biggest jobs of the year.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read your site and recommend your business as more of Boulder's search shifts toward AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We get to know your trade, the parts of Boulder County you cover, the jobs that pay you best, and who you are up against, then build the site around booking more of the work you actually want." },
      { name: 'Design', desc: "We lay out a custom, mobile-first design aimed at conversion, and you get to see it and push back on it before anyone writes a line of code." },
      { name: 'Build and copy', desc: "We put it together quickly and write copy that earns the call, with that call to action sitting front and center on every page." },
      { name: 'Launch', desc: "We ship it cleanly, with the SEO groundwork, tracking, and load speed all sorted from the first day live." },
      { name: 'Support and optimize', desc: "We keep the site quick and up to date and adjust it around whatever is genuinely turning Boulder visitors into phone calls." },
    ],
    pricing: {
      heading: 'Transparent Boulder web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Disaster-surge ready'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Boulder?', a: "Most of our contractor builds land between $2,000 and $8,000 as a one-time project, set by the page count and any integrations. The tiers above spell it out: a fixed price, nothing hidden, and the finished site is yours to keep." },
      { q: 'How long does it take to build?', a: "A tight, focused site runs roughly 2 to 4 weeks; a larger custom build runs 4 to 8. You get a firm timeline at the start and a check-in at every stage along the way." },
      { q: 'Will my site handle a fire or hail traffic spike?', a: "Yes, and in Boulder that matters. After the Marshall Fire and during hail season, contractor sites took a flood of urgent traffic, and the slow ones lost leads right when demand peaked. We build fast and keep the call button obvious, so your site converts under load instead of buckling." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank, and pairing it with our SEO service is how you climb the competitive Boulder terms." },
      { q: 'Do I own the website?', a: "Fully. The site, the domain, and the content all belong to you. Nothing held hostage, and no platform you are stuck on if you ever decide to leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where nearly all of your Boulder traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We choose the platform that suits what you need and that you can run on your own, most often WordPress or Webflow. We name the right fit in your free consult and walk through the tradeoffs in plain language." },
      { q: 'Do you offer ongoing support?', a: "Yes. Launch support comes with every build, and after that we offer reasonably priced monthly maintenance covering updates, speed, and security." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time, fixed-price project. Any maintenance or SEO you add on afterward runs month-to-month, so you can step away whenever it suits you." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Boulder site should include, and a fixed-price quote with a timeline. No pressure, just a Boulder Web Design plan built to convert visitors into booked jobs from the first day live." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'boulder', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Boulder Website Redesign | OnwardCraft',
    metaDescription:
      'Boulder Website Redesign that modernizes without tanking your traffic. Faster, mobile-first rebuilds that convert more visitors into booked jobs and hold up in fire and hail.',
    eyebrow: 'Website Redesign · Boulder',
    h1: 'Boulder Website Redesign that modernizes without tanking your foothills traffic',
    h2Exact: 'Boulder Website Redesign Company',
    heroSubhead:
      "An outdated site quietly costs you jobs every week: slow, clumsy on a phone, easy for a Boulder homeowner to judge and skip in seconds. We redesign contractor sites to convert more and load faster, and we migrate so carefully that you keep every bit of ranking you have already earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "A Boulder Website Redesign usually goes one of two bad ways: the site looks prettier but converts exactly the same, or it launches and the rankings vanish overnight. We do neither. We rebuild Boulder contractor sites for speed and conversions, build them to survive fire and hail traffic surges, and run an SEO-safe migration with the redirects and care that protect the rankings you have spent years building.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "Protect your SEO by holding the URL structure steady, or mapping a 301 redirect for every page whose address changes, and by carrying content, metadata, and schema across and proving it on a staging copy before launch. Handled that way, a Boulder redesign keeps your rankings and tends to lift them, since the new build loads faster, leads on mobile, and is structured more cleanly than the old one.",
    problemHeading: "Signs your Boulder site is overdue for a redesign",
    painPoints: [
      { title: "A dated look loses the high-end Boulder remodel", body: "On a high-ticket remodel or rebuild, Boulder homeowners size you up by your site in seconds. An old, cluttered design quietly ships them to a competitor who simply looks more established and expert, even when your work is plainly better. In a market that judges credibility instantly, that first impression decides who gets the call." },
      { title: "It fights the phone every Boulder buyer uses", body: "If your site is clunky or slow on mobile, you are losing the majority of your Boulder visitors before they ever reach your offer. A redesign built mobile-first wins those visitors back and turns them into leads." },
      { title: "It buckles when fire or hail demand surges", body: "Traffic that never turns into calls is wasted money, and an old site that slows to a crawl under a fire-rebuild or hail surge loses leads at the precise moment they are worth the most. We rebuild for conversions and for the days your phone should be ringing off the hook." },
    ],
    servicesHeading: "What's in an OnwardCraft Boulder redesign",
    services: [
      { name: 'Redesign audit', desc: "We find out precisely what is bleeding you leads and rankings right now, so the redesign goes after the real problems rather than just rearranging the colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema all moved across with care, so the rankings and Boulder traffic you have already earned come through the migration intact." },
      { name: 'Conversion redesign', desc: "A sharper offer, call-to-action buttons placed where they get tapped, and lead forms homeowners genuinely fill out. We design toward booked jobs, not a nicer screenshot." },
      { name: 'Speed overhaul', desc: "We rebuild for quick load times and a clean pass on Core Web Vitals, which raises conversions and rankings together." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where nearly all of your Boulder traffic actually lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work, the expectations of an educated market, and the price of the jobs you want to book." },
      { name: 'Disaster-surge ready rebuild', desc: "Rebuilt to stay fast and keep converting when fire-rebuild or hail traffic spikes, so the new site captures your biggest jobs instead of choking on them.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as more of Boulder's search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We work out what is costing you leads and rankings, then chart a redesign that fixes it without tearing down the parts already working in your favor." },
      { name: 'Design', desc: "A current, mobile-first, conversion-minded design that you review and steer before we build anything at all." },
      { name: 'Rebuild and migrate', desc: "We rebuild at pace and line up every redirect and SEO detail for a migration that holds no surprises." },
      { name: 'Launch with SEO care', desc: "We go live with the redirects already in place and watch the numbers closely, so your rankings steady and climb rather than slip." },
      { name: 'Optimize', desc: "Tuning after launch based on what is actually converting, alongside ongoing speed work and updates." },
    ],
    pricing: {
      heading: 'Transparent Boulder redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Disaster-surge ready'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Boulder?', a: "Most of our redesigns come in between $2,500 and $9,000 as a one-time project, set by scale and integrations. A fixed price, nothing hidden, and the result is yours to keep." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not when it is handled with care, and care is how we work. We map a 301 redirect for every URL that changes, carry over content and metadata, move your schema across, and prove it on staging first. Done that way, a redesign holds your rankings and usually nudges them up." },
      { q: 'How long does a redesign take?', a: "A focused redesign runs about 3 to 5 weeks; a fuller rebuild runs 5 to 9. You get a firm timeline at the outset and an update at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is a pain to update, is not bringing in leads, or buckles when fire-rebuild or hail traffic surges, it is costing you work. The free audit tells you plainly whether a redesign is worth it for your Boulder business." },
      { q: 'Do you migrate my existing content?', a: "Yes. We bring your existing content across and tighten it, protect whatever is already ranking, and run the technical migration so nothing that matters falls through the cracks." },
      { q: 'Will the new site handle fire and hail season traffic?', a: "Yes, and in Boulder that is a real consideration. After the Marshall Fire and during hail season, contractor sites took a surge of urgent traffic, and the slow ones lost leads. We rebuild for speed and keep the call to action obvious so the site converts when demand peaks." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for quick load times and Core Web Vitals, which lifts conversions and rankings alike." },
      { q: 'Do I own the redesigned site?', a: "Fully: the site, the domain, and the content. No platform lock-in of any sort." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Anything ongoing, maintenance or SEO, runs month-to-month." },
      { q: "What's in the free redesign audit?", a: "A straight read on what your current site is costing you in leads and rankings, what the redesign needs to fix, and a fixed-price quote with a timeline. You also get a Boulder Website Redesign plan with an SEO-safe migration mapped out, so you rebuild for more leads without losing the rankings you already hold." },
    ],
  },
];

export const boulderCity = {
  citySlug: 'boulder', city: 'Boulder', state: 'Colorado', stateAbbr: 'CO', metro: 'Boulder',

  titleTag: 'Boulder Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Boulder marketing for contractors built around the trades: web design, SEO, and local SEO that get you found and booked and let you own your leads, all ready for fire and hail demand.',

  eyebrow: 'Boulder · Web Design, SEO & Lead Generation',
  h1: 'Boulder marketing for contractors, built around the trades from Mapleton Hill to Superior',
  h2Exact: 'Boulder Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Boulder's affluent, research-driven, foothills market. One team to get you ranking, converting, and off the rented-lead treadmill for good.",
  heroProof: ['Built for the trades', 'Fire & hail ready', 'No lock-in contracts'],
  primaryCta: 'Get my free Boulder audit',

  intro:
    "Boulder marketing for contractors means winning attention in one of the most educated and affluent markets in the country, where CU researchers, lab scientists, and startup founders vet every contractor before they call. Winning here takes three things working together: web design and SEO that converts and proves your expertise, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack, all locked in before the next fire or hailstorm sends demand through the roof. Here is exactly how this Boulder marketing agency helps contractors get found and booked.",
  aioQuestion: 'How do Boulder contractors get more leads online?',
  aioAnswer:
    "Boulder contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack. Because Boulder homeowners research everything and demand spikes hard after fires like the Marshall Fire and during hail season, the contractors who look established and expert and are already ranking before disaster win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Boulder searches \"near me.\" The single highest-return move for most local businesses, and how you catch fire-rebuild and hail demand before it goes to a competitor.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your Boulder customers actually search, build an asset you own instead of renting traffic from ads, and measure the whole thing in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs, and to stay fast when fire or hail season floods your phone, not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it so carefully that you keep every bit of ranking you have already earned in Boulder search.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Boulder?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads, and so they are ready when fire or hail season hits and every homeowner needs help at once." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors, so we understand fire-hardening, hail claims, Boulder's green-building permitting, and the high-end remodel work that drives this market." },
    { q: 'Why does disaster season matter for my marketing?', a: "When the Marshall Fire crossed into Louisville and Superior, demand for roofing, restoration, and rebuilds spiked overnight and the backlog ran for years. Hail Alley does the same to roofing every summer. Ranking takes months to build, so the contractors who are already visible before disaster take that work. We get you in place ahead of season." },
    { q: 'How much does it cost to work with you?', a: "A website is a one-time build running $2,000 to $9,000. SEO and local SEO bill month-to-month, $750 to $3,000, and there is no long contract on either. We settle the exact scope in your free audit." },
    { q: 'Which Boulder areas do you serve?', a: "All of Boulder County and the surrounding areas: North Boulder, Newlands, Mapleton Hill, Table Mesa, Gunbarrel, Louisville, Superior, Lafayette, Erie, Niwot, Longmont and more." },
    { q: 'Where should I start?', a: "Start with a free Boulder audit. We look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a Boulder marketing for contractors plan built to get you found and booked." },
  ],
};
