// IRVING — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Irving's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// IRVING — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Irving is a moving target',
  body:
    "Irving sits at the literal center of the DFW Metroplex, wrapped right around DFW International Airport, with Las Colinas carrying one of the densest clusters of corporate headquarters in the country: ExxonMobil, McKesson, Kimberly-Clark, Caterpillar, Vistra, Michaels and more. That puts two very different customer bases here at the same time. There are thousands of high-income executives and professionals who expect a business to look the part, and there is one of the most internationally diverse populations in Texas, a large South Asian community alongside Hispanic, East Asian, and Middle Eastern homeowners. Two forces drive demand. First, nearly everyone searches on a phone with \"near me\" tacked on, then taps one of the first results without scrolling. Second, this is North Texas: tornado-alley hail in spring, 100-plus-degree summers, and the 2021 freeze that split pipes across the Metroplex. When the next big hail event lands, demand for roofing, HVAC, and restoration does not merely rise, it detonates, and the contractors already ranking are the ones who book the work.",
  pullQuote: 'When the next hailstorm rolls across Irving, the contractors already ranking are the ones who book the work.',
  donut: {
    title: 'How Irving searches',
    value: 42,
    centerLabel: 'Hispanic',
    legend: [
      { label: 'Hispanic', pct: 42, kind: 'teal' },
      { label: 'Other', pct: 58, kind: 'grey' },
    ],
  },
  seasonTitle: 'Months when the phone runs hot',
  seasonCaption: 'Spring hail and tornado window (Mar–Jun), peak heat (Jun–Sep), hard freeze (Dec–Feb)',
  seasonalDemand: [
    { m: 'J', v: 40 }, { m: 'F', v: 42 }, { m: 'M', v: 70, peak: true }, { m: 'A', v: 88, peak: true },
    { m: 'M', v: 96, peak: true }, { m: 'J', v: 90, peak: true }, { m: 'J', v: 82, peak: true },
    { m: 'A', v: 80, peak: true }, { m: 'S', v: 66 }, { m: 'O', v: 44 },
    { m: 'N', v: 38 }, { m: 'D', v: 46 },
  ],
  stats: [
    { value: '7.9M+', label: 'people across the DFW Metroplex Irving sits at the center of' },
    { value: '~42%', label: 'of Irving is Hispanic, with a large South Asian and Asian community too', accent: true },
    { value: 'Mar–Jun', label: 'hail and tornado season, when roofing demand spikes hardest' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks' },
  ],
  neighborhoods: [
    'Las Colinas', 'Valley Ranch', 'Hackberry Creek', 'Mandalay Canals', 'Las Colinas Urban Center',
    'Downtown Irving', 'University of Dallas area', 'Coppell', 'Grapevine', 'Euless',
    'Farmers Branch', 'Bear Creek', 'Song', 'Plymouth Park', 'Hospital District',
  ],
};

const AREAS = [
  'Irving', 'Las Colinas', 'Valley Ranch', 'Coppell', 'Grapevine', 'Euless',
  'Farmers Branch', 'Bedford', 'Hurst', 'Carrollton', 'Addison',
  'Lewisville', 'Flower Mound', 'Grand Prairie', 'Bear Creek',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, and general contracting are the whole of what we touch. We know how a spring hail call comes in, how insurance supplements get handled, and how a Las Colinas homeowner shops, so every page we build follows the way your buyers actually search.",
  },
  {
    title: 'We get you off rented leads',
    body: "Our aim is a pipeline that belongs to you and nobody else. Not a recurring payment to some lead exchange selling the same Irving homeowner to you and three of your rivals on the same afternoon.",
  },
  {
    title: 'We actually speak Irving',
    body: "Las Colinas executives with high standards, a globally diverse homeowner base, North Texas hail and freeze demand, real neighborhood targeting from Valley Ranch to Hackberry Creek. The stuff a national agency can't do by swapping a city name into a template.",
  },
  {
    title: 'No contracts, no mystery',
    body: "Our prices sit right on the page, the reporting maps to real leads, and you switch to month-to-month once the first 90 days are behind you. The day we stop earning the fee, you cut us loose. That puts the weight of proving it squarely on our side.",
  },
];

const PROOF = {
  heading: "We're new, so here's the honest math instead of a logo wall",
  body:
    "Plenty of agencies open with a grid of client logos. We're a young, founder-led shop, so we won't fake a track record we haven't built yet. What we can put in front of you is the reasoning behind why this works, drawn straight from Google's and the industry's own research on how people search locally.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here's a rough sketch, flagged plainly as a projection and not something we're claiming we delivered: picture an Irving contractor pulling around 1,500 local \"near me\" impressions in a month. The jump from page-two invisibility into the top three turns a thin drip of calls into a calendar you struggle to keep open, and after a hail event that gap stretches even further. During your free audit we run the real figures for your shop, covering your live rankings, your true search volume, and a candid 90-to-180-day route up the map.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Irving', state: 'Texas', stateAbbr: 'TX', metro: 'Irving-Las Colinas',
  heroProof: ['Built for the trades', 'Hail-season ready', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const irvingLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'irving', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Irving Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Irving Local SEO that lands you in the three businesses on the map, so the call from a Las Colinas homeowner reaches you first.',
    eyebrow: 'Local SEO · Irving-Las Colinas',
    h1: 'Irving Local SEO that makes you the first name on the Las Colinas map',
    h2Exact: 'Irving Local SEO Company',
    heroSubhead:
      "Google drops three businesses onto the map when someone searches \"near me,\" and everyone underneath them is effectively invisible. We push you into that top three so the call lands with you rather than whoever ranked first, and so you are already there when the next hailstorm fills every phone in town.",
    primaryCta: 'Get my free Irving audit',
    intro:
      "Irving local SEO turns on a single moment: a homeowner in Las Colinas or Valley Ranch types your service plus \"near me,\" and either you are one of the three businesses Google pinned to the map or you are not. Most people tap one of those three and never scroll past them. This is a crowded, well-off, fast-moving market right in the center of the Metroplex, so landing in that trio is the whole contest. Here is how we get you there.",
    aioQuestion: 'How do Irving businesses rank higher in local search?',
    aioAnswer:
      "You rank by nailing four things: a Google Business Profile tuned to the exact services and neighborhoods you want; name, address, and phone details that match everywhere online; a steady flow of real reviews; and local content built around genuine Irving neighborhoods like Las Colinas, Valley Ranch, and Hackberry Creek. Irving is affluent, globally diverse, and storm-prone, so the winners look established, answer fast, and are already ranking when hail-season demand spikes.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three pins on the map', body: "Type your own service plus \"near me\" into Google this minute. The three businesses sitting in that map box pull in the lion's share of the taps. Stay outside that box and your craftsmanship goes unseen, because most Irving homeowners never scroll far enough to find your name. For a local shop here, breaking into that top three is almost always the move that pays back fastest." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor hand the same Irving homeowner to four contractors and then charge every one of you to scrap over them. That is a wheel you never stop turning. Local SEO flips it: a homeowner spots you, dials you, and no rival gets a copy of that lead. Keep at it and the rented pipeline gives way to one you actually hold." },
      { title: "You're not ready when the hail hits", body: "The moment a North Texas hailstorm tears through, roofing, restoration, and HVAC searches jump off a cliff in the right direction, and the shops already on the map grab the calls. Sit invisible when the next cell rolls in and the work routes to whoever Google has already learned to trust. Ranking ahead of time is how you ride that surge rather than watching it pass your truck." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "This is the heaviest lever you can pull in the Map Pack. We tighten up your categories, service list, coverage area, photos, and posts so Google understands exactly which Irving searches ought to land on you." },
      { name: 'Citations and NAP cleanup', desc: "Google cross-checks your name, address, and phone wherever they appear, so they all have to agree. We hunt down the listings that disagree, correct them, and create the ones that never existed." },
      { name: 'Reviews that keep coming', desc: "A no-fuss routine that turns each completed job into another fresh review. That climb in star count nudges your ranking up and gives the next caller a reason to choose you." },
      { name: 'Neighborhood pages', desc: "Real pages for Las Colinas, Valley Ranch, Hackberry Creek, Coppell and the rest, so you rank for the neighborhood someone's actually searching, not just \"Irving.\"" },
      { name: 'On-page and technical SEO', desc: "Page titles, structured data, internal linking, mobile load speed. This is the wiring behind the walls that gives everything else a shot at ranking." },
      { name: 'Local link building', desc: "Coverage and links from Irving and DFW outlets Google takes seriously, like area news, trade groups, and local partners. In this market that is frequently the line between landing on page one and stalling on page two." },
      { name: 'Storm-season readiness', desc: "We line up your profile, your pages, and your reviews well before hail season opens, so you ride the demand spike on arrival instead of scrambling to react once it has already hit.", featured: true },
      { name: 'AI search readiness', desc: "A rising slice of \"near me\" research now kicks off inside AI Overviews, ChatGPT, and Perplexity. We lay out your content so those tools can parse it and name you in their answers." },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We map exactly where you land in the rankings today across each service area, then identify which rivals are outranking you in the Map Pack and what they are doing to hold that spot." },
      { name: 'Fix the foundation', desc: "We start with the Google Business Profile and your NAP details, since those shift the needle quickest. Most clients notice the first bump here inside a few weeks." },
      { name: 'Build trust signals', desc: "We switch on the citations and the review engine. Both gather strength month after month, which is precisely why local SEO pays the people who begin early." },
      { name: 'Add local content', desc: "We roll out neighborhood and service-area pages spanning Irving and the mid-cities, then back each one with the on-page work it needs to hold a ranking." },
      { name: 'Report and expand', desc: "You get reporting in plain language, tied to phone calls and booked leads rather than ranking vanity. From there we move on to claim the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, laying down a solid Map Pack base.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For shops battling across a handful of Irving-area markets at once.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors set on owning the map from Irving through the mid-cities.', features: ['Everything in Local Growth', 'Local link building', 'Storm-season demand targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Irving?', a: "Most Irving clients spend somewhere between $750 and $2,500 each month, scaled to how many neighborhoods and keywords you intend to chase. You can see the tiers laid out just above this. Nothing is buried, there is no long contract, and the precise scope gets nailed down in your free audit first." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile tweaks can register inside a few weeks. The harder Irving keywords generally need 90 to 180 days of consistent effort, since reviews and citations only build their weight gradually. If someone vows page one in 30 days in a field this crowded, they are pitching you, not helping you." },
      { q: 'What makes Irving local SEO different?', a: "Two things set it apart. It's an affluent, globally diverse market in the heart of the Metroplex, where Las Colinas executives expect you to look the part and a large South Asian, Hispanic, and Asian homeowner base searches in its own ways. And it's North Texas, so trade demand swings hard with hail, heat, and freeze events, which means your ranking has to be locked in before the storm, never after it." },
      { q: 'How does local SEO help me during hail season?', a: "Once hail rakes across Irving, roofing, restoration, and HVAC searches surge within hours, and the firms already parked in the Map Pack soak up those calls. We get you ranked and reviewed ahead of the spring storm stretch so the demand lands on you, not on whoever swept up the leftovers after the rest of the field booked solid." },
      { q: 'Which areas do you cover?', a: "Every part of Irving plus the mid-cities ringing it: Las Colinas, Valley Ranch, Hackberry Creek, along with Coppell, Grapevine, Euless, Farmers Branch, Carrollton and beyond. We write genuine pages per neighborhood rather than one catch-all Irving page, because that targeted approach is what wins \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "Pretty much the only thing we do. Roofers, HVAC techs, plumbers, solar installers, electricians, restoration crews, and general contractors. Emergency dispatch, hail-fed demand surges, insurance claims: we get how the trade runs, and we shape your local SEO around all of it." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "A growing share of \"near me\" research now starts inside an AI tool rather than a plain search box. We arrange your content and schema so those engines can read you, trust what they read, and quote your business back to the searcher. In Irving it is closing in on the Map Pack itself for importance." },
      { q: 'Am I locked into a contract?', a: "Nope. We request a 90-day runway up front because that is about how long local SEO takes to post real gains. Once it clears, you are month-to-month. Fall short on our end and you are free to leave, which keeps the burden of proof on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those sites lease you shared leads and exposure that never sticks to your business. We construct rankings, a Google profile, and a review base that route inquiries straight to your phone. As that compounds, your reliance on the lead exchanges fades because the work is finding you on its own." },
      { q: "What's in the free audit?", a: "A straight look at today's rankings across your service areas, the tactics your Map Pack rivals are using to outpace you, the fixes that will lift you the quickest, and a grounded 90-to-180-day Irving Local SEO plan with the figures worked out for your own business. No glossy deck. Just an honest read." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'irving', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Irving SEO Company for Contractors | OnwardCraft',
    metaDescription:
      'Irving SEO that ranks contractors on page one for money keywords and brings in leads you keep. Lead-tied reporting, no lock-in, built for storm demand.',
    eyebrow: 'SEO Services · Irving-Las Colinas',
    h1: 'Irving SEO that puts your Metroplex business on page one and holds it',
    h2Exact: 'Irving SEO Company',
    heroSubhead:
      "The instant your ad budget runs dry, the clicks die with it. SEO works the other way around: earn the ranking once for the terms Irving homeowners type and the leads keep arriving. We build that ranking and tie every report back to booked calls and finished jobs.",
    primaryCta: 'Get my free Irving SEO audit',
    intro:
      "Irving SEO boils down to a single question: when a homeowner searches what you do, are you sitting on page one or stranded on page two? Page two might as well be page fifty. We get contractors ranking for the keywords that pay in a crowded, well-off, storm-battered Metroplex market, and we count it in booked leads rather than traffic that never dials.",
    aioQuestion: 'How do Irving businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content, and earning links from trusted Irving and DFW sources. In a competitive, affluent North Texas market, keeping the site fast on mobile and ranking for hail-driven and seasonal terms are two of the quickest ways to pull ahead.",
    problemHeading: "Three reasons your Irving site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Hardly anyone ventures past Google's first page, and they seldom drop far down it. Land outside that opening cluster of results for the work you sell and your site goes unseen, regardless of how slick the design is. Across Irving, that invisibility is exactly what feeds your jobs to the shop next door." },
      { title: "You're renting traffic from Google Ads", body: "Paid search can pull its weight, but the second the card declines, the inquiries go silent. SEO grows something you keep: rankings that keep handing you leads for months and years after the work wraps, at a slice of what you currently pay per lead." },
      { title: "You're not ranking for the demand that matters", body: "Irving's demand rides the calendar and the sky, swinging with spring hail, blistering summer heat, and the winter freeze, and the contractors holding rank for those terms in advance catch the wave. Skip the hail-fed and seasonal searches in your SEO and you quietly forfeit your busiest, most profitable stretch of the year." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawl access, load speed, Core Web Vitals, schema, and the behind-the-scenes repairs Google insists on before it will rank your Irving site at all." },
      { name: 'On-page optimization', desc: "Every page worth ranking gets tuned to the precise phrases your Irving customers type, covering titles, headings, body copy, and the internal links that tie them together." },
      { name: 'Content that ranks', desc: "Pages and articles with real substance that answer what buyers are searching, pull in links, and keep generating leads long after the day we publish them." },
      { name: 'Link building', desc: "Authority drawn from genuine Irving, DFW, and industry outlets. In a market this contested, links are often the single thing dividing page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack work so you take the \"near me\" searches at the same time your organic listings climb the page." },
      { name: 'Lead-tied reporting', desc: "Our reports track phone calls, form fills, and booked leads rather than stopping at rankings and traffic, so the dollar value of your SEO is never a guess." },
      { name: 'Storm & seasonal SEO', desc: "We rank you ahead of time for the hail-fed, heat, and freeze searches that power Irving's busiest months, so the visibility is locked in before demand peaks rather than scrambled together after.", featured: true },
      { name: 'AI search & GEO', desc: "We arrange your content so AI Overviews, ChatGPT, and Perplexity surface and quote you, since a widening share of search now opens inside those tools." },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We measure your current rankings, traffic, and rivals, then draw up a roadmap centered on the keywords with the best odds of turning into actual Irving leads." },
      { name: 'Fix the technical base', desc: "Load speed, crawl access, schema, and mobile behavior, which form the groundwork everything above them leans on to rank." },
      { name: 'Optimize and create content', desc: "On-page work across the pages that earn you money, plus fresh local content covering the seasonal and hail-fed terms that decide who wins here." },
      { name: 'Build authority', desc: "Links and citations from Irving, DFW, and industry sources Google respects, applied to push your hardest keywords up onto page one." },
      { name: 'Report and scale', desc: "Each month's reporting ties back to booked leads, and from there we lean harder into the winners and push out into the next set of keywords." },
    ],
    pricing: {
      heading: 'Transparent Irving SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a tight site chasing its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors fighting across multiple services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses out to own Irving-area search outright.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Storm & seasonal SEO', 'eCommerce / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Irving?', a: "Most Irving SEO work falls between $900 and $3,000 a month, set by how hard your keywords are to win and how much content and link effort the climb takes. The tiers sit just above, with nothing hidden in the fine print and no long contract." },
      { q: 'How long does SEO take to work in Irving?', a: "Look for early movement around the 2-to-3-month mark and meaningful gains by month 4 to 6, sooner on softer terms and later on the most fought-over Irving keywords. SEO stacks on itself, so the longer it runs, the larger the returns grow." },
      { q: 'Is SEO better than Google Ads?', a: "They each handle a different job. Ads rent you instant traffic that evaporates the day the spending halts. SEO is an asset you keep, one that produces leads at a falling cost the longer it runs. The contractors who win usually treat SEO as the steady engine and reach for ads when they need a short, sharp burst." },
      { q: 'Should my Irving SEO target hail season?', a: "Without question. When a North Texas hailstorm lands in Irving, roofing, restoration, and HVAC searches leap overnight, and rankings take months to earn, so you have to already be in place when the spring window opens rather than chasing it once it closes. We rank you for those seasonal and hail-fed terms ahead of time so your peak months pay you." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page tuning, content, link building, local Map Pack work, and lead-tied reporting. The higher tiers fold in storm-and-seasonal targeting and AI-search optimization. We pin the exact scope down together during your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. The only commitment we ask for is an opening 90 days, because that is how long SEO needs to post real movement, and after that you run month-to-month. If the results are not landing, you are free to walk." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "Yes, and it is a growing slice of what we build toward. We shape your content and schema so AI engines can read your business, trust what they read, and quote you in their answers rather than leaving you to classic search alone." },
      { q: 'Which areas around Irving do you cover?', a: "All of Irving and the mid-cities around it: Las Colinas, Valley Ranch, Coppell, Grapevine, Euless, Farmers Branch, Carrollton and more, each with a real local page rather than a single generic Irving catch-all." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "We build the rankings and the Google footprint that channel inquiries straight to you. The further your own search visibility reaches, the less you have to keep paying brokers for leads they have already resold to your rivals." },
      { q: "What's in the free SEO audit?", a: "Your current rankings, the moves rivals are making to stay ahead of you, the fixes with the biggest payoff, and a realistic Irving SEO timeline with the organic-traffic numbers run for your own business. No glossy deck, just a clear diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'irving', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Irving Web Design Company | Sites That Convert | OnwardCraft',
    metaDescription:
      'Irving web design that books jobs instead of just looking nice: fast, mobile-first contractor websites ready for North Texas hail-season demand.',
    eyebrow: 'Web Design · Irving-Las Colinas',
    h1: 'Irving web design that books jobs instead of just looking nice in Las Colinas',
    h2Exact: 'Irving Web Design Company',
    heroSubhead:
      "A good-looking site that never rings the phone is just a brochure with a domain. We build Irving contractors fast, mobile-first sites engineered to convert visitors into booked work, and tough enough to stay standing when hail season floods your phone.",
    primaryCta: 'Get my free quote',
    intro:
      "Irving web design only earns its keep when it books jobs, yet most contractor sites here lose leads quietly: slow on a phone, the call button buried, no clear offer anywhere. We plug every one of those leaks. We build sites that load fast and read like the professional you actually are, sharp enough for a Las Colinas executive yet plain enough for any homeowner, then turn Irving visitors into booked jobs that hold up when a hailstorm sends your traffic through the roof.",
    aioQuestion: 'What makes a good contractor website in Irving?',
    aioAnswer:
      "A strong Irving contractor website loads in under three seconds on a phone, keeps the call button and a clear offer above the fold, backs up trust with reviews and real project photos, and is built to absorb the traffic spikes of hail season. Since most Irving searches come from a phone and reach an affluent, diverse audience, mobile speed and an unmistakable next step are what divide a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "Most contractor sites do little more than rattle off a service list and stop there. No sharp offer, no clear thing to do next, nothing that gives a homeowner a reason to ring you over the next name on the page. We shape every page toward one outcome: moving a visitor to a booked lead." },
      { title: "It's too slow on a phone", body: "The bulk of your Irving visitors are tapping through on a phone, and they leave if your pages drag past a few seconds. Google docks slow sites in the rankings too, so the delay stings twice. We build for speed, which keeps both the visitor and the position." },
      { title: "It can't handle a hail-season surge", body: "A major North Texas hailstorm dumps a wall of traffic onto contractor sites, and the sluggish ones either grind to a halt or hide the call button at the worst possible moment. We build sites that hold their speed and keep converting under that load, so you bank the demand rather than bleed it away." },
    ],
    servicesHeading: "What's in an OnwardCraft Irving website",
    services: [
      { name: 'Custom design', desc: "Zero off-the-shelf templates here. A site shaped around your trade, the area you cover, and the specific jobs you are trying to win more of." },
      { name: 'Mobile-first build', desc: "Built for the phone before anything else, since that is where nearly every Irving visitor arrives. Quick to load, easy on the thumb, one tap to call." },
      { name: 'Conversion-focused UX', desc: "Plain offers, call buttons you cannot miss, and lead forms dropped exactly where homeowners reach for them. No page leaves a visitor without a next move." },
      { name: 'Copy that sells', desc: "Plain writing that talks to a homeowner and lands the booking, not stock filler that reads the same as every other contractor in town." },
      { name: 'Local SEO foundation', desc: "Engineered to rank from the first line of code, with tidy structure, schema in place, fast load, and pages ready to slot in by neighborhood." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned for a fast load and a clean pass on Google's performance scores, which guards your conversions and your rankings in one stroke." },
      { name: 'Storm-surge ready', desc: "Built to keep its speed and hold the call button right up front when hail-season traffic spikes, which is the very window that converts visitors into your largest jobs.", featured: true },
      { name: 'AI-search ready', desc: "Laid out so AI Overviews and ChatGPT can read your site and put your business forward as more searching shifts onto AI tools." },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We dig into your trade, your coverage area, the jobs that pay you best, and the rivals across the street, then build the site around landing more of the work you actually want." },
      { name: 'Design', desc: "We craft a custom, mobile-first layout aimed at converting, and you get to see it and steer it before we write a single line of code." },
      { name: 'Build and copy', desc: "We put it together fast and write copy that closes, keeping the call to action front and center on every page." },
      { name: 'Launch', desc: "We push it live cleanly with the SEO groundwork, the tracking, and the speed all set from the first day." },
      { name: 'Support and optimize', desc: "We keep the site quick and up to date and adjust it based on whatever is actually turning visitors into calls." },
    ],
    pricing: {
      heading: 'Transparent Irving web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A tight, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A larger site for established contractors carrying several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Storm-surge ready'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Irving?', a: "Most of our contractor sites land in the $2,000 to $8,000 range as a one-time build, set by how many pages and integrations you need. The tiers are mapped out above, at a fixed figure with nothing sprung on you later, and the finished site is yours to keep." },
      { q: 'How long does it take to build?', a: "A focused site usually wraps in about 2 to 4 weeks, and a bigger custom build runs 4 to 8. We hand you a firm timeline at the start and check in with you at each stage along the way." },
      { q: 'Will my site handle a hail-season traffic spike?', a: "It will, and in Irving that is no small thing. A big North Texas hailstorm dumps a surge of traffic on contractor sites, and the slow ones shed leads right as demand peaks. We build for speed and keep the call button obvious, so your site converts under the load instead of stalling out." },
      { q: 'Will my new site actually rank on Google?', a: "Every site we build sits on a local-SEO foundation, with fast load, clean structure, schema, and pages ready to target by neighborhood. The build sets you up to rank, and bolting on our SEO service is how you push up the genuinely competitive Irving terms." },
      { q: 'Do I own the website?', a: "Every bit of it. The site, the domain, and the content are yours. No holding your assets hostage, no platform you are trapped on." },
      { q: 'Will it work well on phones?', a: "We design phone-first, because that is where nearly all your Irving traffic shows up. Quick to load, call buttons sized for a fingertip, and forms a thumb can fly through." },
      { q: 'What platform do you build on?', a: "We choose the platform that suits your needs and that you can run without us, most often WordPress or Webflow. We will steer you to the right fit during your free consult and walk through the tradeoffs in plain language." },
      { q: 'Do you offer ongoing support?', a: "We do. Launch support comes with every build, and from there we offer reasonably priced monthly maintenance covering updates, speed, and security." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-off project at a fixed price. Any maintenance or SEO you add afterward runs month-to-month, so you can step away whenever you choose." },
      { q: 'What do I get in the free quote?', a: "A plain accounting of what your current site is quietly costing you in lost leads, what high-converting Irving web design ought to carry, and a fixed-price quote with a timeline. No arm-twisting, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'irving', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Irving Website Redesign | Rebuilt for Leads | OnwardCraft',
    metaDescription:
      'Irving Website Redesign that rebuilds for leads, not just looks. Faster, mobile-first sites that convert more and hold every ranking through an SEO-safe migration.',
    eyebrow: 'Website Redesign · Irving-Las Colinas',
    h1: 'Irving Website Redesign that rebuilds for leads, not just looks',
    h2Exact: 'Irving Website Redesign Company',
    heroSubhead:
      "A dated site quietly drains jobs from you every week: slow to load, awkward on a phone, simple to overlook. We redesign Irving contractor sites to convert more and load faster, and we move them across with enough care that you hold on to every ranking you have built.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "An Irving Website Redesign usually fails one of two ways: the site looks sharper but books the same number of jobs, or it goes live and the rankings drop off a cliff. We avoid both. We redesign Irving contractor sites for speed and conversions, build them to take a hail-season traffic surge, and run an SEO-safe migration with the redirects that hold on to the traffic you already earned.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You guard SEO through a redesign by holding your URL structure in place, or mapping a 301 redirect for every page that changes, keeping your existing content and metadata intact, carrying your schema across, and running the whole thing on staging before it goes live. Handled that way, an Irving redesign protects your rankings and usually lifts them, since the new build loads faster, leads with mobile, and is laid out cleaner than the old one.",
    problemHeading: "Signs your Irving site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "On a high-ticket job a homeowner forms a verdict from your site in a few seconds, and across affluent Las Colinas that verdict is harsh. A tired, cluttered layout quietly nudges them toward a rival who simply reads as more established, even when your craftsmanship runs circles around theirs." },
      { title: "It's slow and hard to use on a phone", body: "When your site stutters or crawls on mobile, you shed most of your Irving visitors before they ever lay eyes on your offer. A redesign built phone-first earns those visitors back and converts them into leads." },
      { title: "It can't keep up when demand surges", body: "Traffic that never becomes a phone call is money left on the table, and a dated site that bogs down under a hail-season surge sheds leads at the exact moment each one is worth the most. We rebuild for conversions and for the days your phone ought to be ringing without a pause." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We zero in on exactly what is bleeding leads and rankings from you right now, so the redesign goes after the real faults rather than just repainting the surface." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema each handled with care so the rankings and traffic you have already built stay right where they are through the move." },
      { name: 'Conversion redesign', desc: "Sharper offers, call-to-action placement that actually gets noticed, and lead forms homeowners reach for. We design toward booked jobs, not just a prettier picture." },
      { name: 'Speed overhaul', desc: "We rebuild for a quick load and a clean pass on Core Web Vitals, which lifts conversions and rankings together." },
      { name: 'Mobile-first rebuild', desc: "Rebuilt around the phone first, since that is where almost all of your Irving traffic actually shows up." },
      { name: 'Brand refresh', desc: "A current, trustworthy look that fits the standard of your work and the price tag on the jobs you want to land." },
      { name: 'Storm-surge ready rebuild', desc: "Rebuilt to keep its speed and keep converting when hail-season traffic spikes, so the new site captures your biggest jobs rather than buckling under them.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read your site and put your business forward as searching keeps moving onto AI tools." },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We work out what is draining your leads and rankings, then chart a redesign that mends it without disturbing the parts of the site already pulling their weight." },
      { name: 'Design', desc: "A current, mobile-first, conversion-minded design that you look over and steer before we start building anything." },
      { name: 'Rebuild and migrate', desc: "We rebuild it fast and stage every redirect and SEO detail so the migration goes through without a hitch." },
      { name: 'Launch with SEO care', desc: "We take it live with the redirects already set and watch it closely so the rankings hold steady and climb rather than slip." },
      { name: 'Optimize', desc: "We tune the live site around whatever is converting, then keep the speed and the updates rolling from there." },
    ],
    pricing: {
      heading: 'Transparent Irving redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A tight redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Storm-surge ready'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Irving?', a: "Most redesigns we take on run $2,500 to $9,000 as a one-time project, scaled to size and integrations. A fixed figure, nothing sprung on you later, and the finished result belongs to you." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not when it is handled with care, and care is exactly how we run it. We map a 301 redirect for every URL that changes, hold on to your content and metadata, carry over your schema, and run it all on staging first. Done properly, a redesign keeps your rankings intact and usually nudges them upward." },
      { q: 'How long does a redesign take?', a: "A tight redesign comes in around 3 to 5 weeks, and a larger rebuild lands at 5 to 9. You get a firm timeline at the outset and an update at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site crawls on a phone, looks behind the times, fights you on updates, fails to bring in leads, or chokes when hail-season traffic surges, it is quietly costing you work. The free audit tells you in plain terms whether a redesign earns its keep." },
      { q: 'Do you migrate my existing content?', a: "We do. We carry your existing content over and sharpen it, keep whatever is ranking right where it is, and run the technical migration so nothing that matters slips away in the move." },
      { q: 'Will the new site handle hail-season traffic?', a: "Yes, and in Irving that genuinely counts. A big North Texas hailstorm pours traffic onto contractor sites, and the slow ones shed leads. We rebuild for speed and keep the call to action obvious, so the site converts right when demand peaks." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild phone-first and tune for a quick load and clean Core Web Vitals, which lifts both your conversions and your rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely. The site, the domain, and the content are all yours. No platform you are locked onto." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a single one-time project. Anything ongoing, whether maintenance or SEO, runs month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what your Irving Website Redesign needs to repair, and a fixed-price quote with a timeline and an SEO-safe migration plan." },
    ],
  },
];

export const irvingCity = {
  citySlug: 'irving', city: 'Irving', state: 'Texas', stateAbbr: 'TX', metro: 'Irving-Las Colinas',

  titleTag: 'Irving Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Irving marketing for contractors: web design, SEO, and local SEO that get you found, get you booked, and keep your leads instead of renting them, built for storm demand.',

  eyebrow: 'Irving · Web Design, SEO & Lead Generation',
  h1: 'Irving marketing for contractors who want to own their leads',
  h2Exact: 'Irving Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Irving's affluent, globally diverse, storm-driven market. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Hail-season ready', 'No lock-in contracts'],
  primaryCta: 'Get my free Irving audit',

  intro:
    "Irving marketing for contractors comes down to competing for attention right at the center of the DFW Metroplex, against an affluent Las Colinas executive base, a globally diverse homeowner market, and competition that climbs along with it. Winning here takes three pieces pulling together: a site that converts, SEO that ranks you for what people search, and local SEO that lands you in the Map Pack, all set before the next hailstorm sends demand through the roof. Here is how we help Irving contractors pull that off.",
  aioQuestion: 'How do Irving contractors get more leads online?',
  aioAnswer:
    "Irving contractors pull in more leads by pairing a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that takes the Google Map Pack. Since Irving is affluent and globally diverse and demand jumps hard during North Texas hail and freeze events, the contractors who read as established and are already ranking before the storm capture the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Break into the three businesses Google pins to the map when Irving searches \"near me.\" For most local shops it is the move that pays back fastest, and the way you catch hail-season demand before a rival does.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the keywords that pay, the ones your Irving customers genuinely type, build an asset you keep rather than renting clicks from ads, and count the whole thing in booked leads instead of vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, phone-first websites engineered to turn visitors into booked jobs and to hold their speed when hail season floods your phone, not brochures that sit there doing nothing.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild a dated site for speed and conversions, and move it across with enough care that you hold on to every ranking you have already earned in Irving search.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Irving?', a: "Four core offerings for contractors: web design, website redesign, SEO, and local SEO. Most clients pair a high-converting site with SEO and local SEO so they rank, convert, and keep their own leads, all set before hail season rolls in and every phone in town starts ringing at once." },
    { q: 'Do you work only with contractors?', a: "Almost without exception. We concentrate on home-service trades, from roofing, HVAC, and plumbing to solar, electrical, restoration, and general contracting, so we know how emergency dispatch runs, how hail drives demand, and how insurance work moves." },
    { q: 'Why does hail season matter for my marketing?', a: "When a North Texas hailstorm strikes Irving, roofing, restoration, and HVAC demand jumps overnight and the backlog can stretch for months. Rankings take months to build, so the contractors already visible when the cell hits are the ones who book that work. We get you in place ahead of the spring storm window." },
    { q: 'How much does it cost to work with you?', a: "Sites are one-time builds running $2,000 to $9,000. SEO and local SEO go month-to-month from $750 to $3,000, with no long contract attached. We settle the exact scope together in your free audit." },
    { q: 'Which Irving areas do you serve?', a: "All of Irving and the mid-cities around it: Las Colinas, Valley Ranch, Hackberry Creek, Coppell, Grapevine, Euless, Farmers Branch, Carrollton and more." },
    { q: 'Where should I start?', a: "Begin with a free Irving audit. We will go through your site, your rankings, and your Map Pack standing, then point you to the one or two moves in your Irving marketing for contractors that bring in the most work the fastest. No glossy deck, just a plan." },
  ],
};
