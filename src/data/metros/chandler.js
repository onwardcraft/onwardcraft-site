// CHANDLER — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Chandler's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// CHANDLER — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Chandler is a moving target',
  body:
    "Chandler sits at the center of the East Valley's semiconductor corridor, and that shapes exactly who is hiring contractors here. Intel runs its largest U.S. campus at Ocotillo, the Fab 52 and Fab 62 buildout keeps pulling in engineers, and Microchip and NXP sit a few miles up the road. The result is a city packed with high-income, technically minded homeowners who read spec sheets for a living and apply the same scrutiny to a roofer or an HVAC tech. They compare quotes, they check reviews line by line, and they rarely call the first number they see without vetting it. Two forces drive the actual work. Summer here runs 110 to 115 degrees for months, so when a compressor quits in July it stops being an inconvenience and becomes a household emergency, and pool equipment, AC, and desert-landscape searches climb fast. Then the monsoon arrives from July into September with haboobs, microbursts, and flash flooding that hammer roofs and rooftop units in a single night. Layer in the strict HOA exterior rules baked into nearly every master-planned community from Fulton Ranch to Layton Lakes, and the homeowner here wants a contractor who looks settled, answers quickly, and clearly knows the difference between Chandler and the rest of Phoenix.",
  pullQuote: 'When a Chandler AC system dies at 114°F, the contractor already ranking is the one who gets the call.',
  donut: {
    title: 'How Chandler searches',
    value: 22,
    centerLabel: 'Hispanic',
    legend: [
      { label: 'Hispanic', pct: 22, kind: 'teal' },
      { label: 'Other', pct: 78, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Extreme heat (Jun–Sep) and monsoon storms (Jul–Sep)',
  seasonalDemand: [
    { m: 'J', v: 32 }, { m: 'F', v: 34 }, { m: 'M', v: 40 }, { m: 'A', v: 50 },
    { m: 'M', v: 72, peak: true }, { m: 'J', v: 90, peak: true }, { m: 'J', v: 98, peak: true },
    { m: 'A', v: 96, peak: true }, { m: 'S', v: 78 }, { m: 'O', v: 52 },
    { m: 'N', v: 38 }, { m: 'D', v: 32 },
  ],
  stats: [
    { value: '110–115°F', label: 'summer highs that make AC failure an emergency' },
    { value: 'Silicon Desert', label: 'Intel, Microchip, and NXP anchor a high-income tech market', accent: true },
    { value: 'Jul–Sep', label: 'monsoon season: dust storms, microbursts, flash flooding' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks' },
  ],
  neighborhoods: [
    'Ocotillo', 'Fulton Ranch', 'Sun Lakes', 'Downtown Chandler', 'Andersen Springs',
    'Pecos Ranch', 'Clemente Ranch', 'Cooper Commons', 'Layton Lakes', 'Riggs Ranch',
    'Markwood', 'Carino Estates', 'Ahwatukee', 'Gilbert', 'Tempe',
  ],
};

const AREAS = [
  'Chandler', 'Gilbert', 'Tempe', 'Ahwatukee', 'Sun Lakes', 'Queen Creek',
  'Mesa', 'Ocotillo', 'Fulton Ranch', 'Andersen Springs', 'Higley', 'San Tan Valley',
  'Guadalupe', 'Maricopa', 'Phoenix',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We know what a 115-degree afternoon does to a compressor and what a monsoon microburst does to a roof overnight, so every page we build matches how Chandler homeowners actually go looking for help.",
  },
  {
    title: 'We get you off rented leads',
    body: "The goal is a pipeline that belongs to you. Not one more monthly invoice paid to a broker for an Ocotillo homeowner that three other contractors are dialing at the same minute.",
  },
  {
    title: 'We actually speak Chandler',
    body: "Semiconductor-corridor buyers who vet you before they ever pick up the phone, heat that turns a dead AC into an emergency, monsoon storm damage, HOA exterior rules in nearly every community, and real targeting from Ocotillo to Fulton Ranch. That is local knowledge no national shop can fake by dropping a city name into a template.",
  },
  {
    title: 'No contracts, no mystery',
    body: "Prices are published, reporting points at real leads, and you go month-to-month once the first 90 days are up. If we are not earning the invoice, you leave. That keeps the pressure where it should sit: on us.",
  },
];

const PROOF = {
  heading: "We're new, so here's the honest math instead of a logo wall",
  body:
    "Most agencies lead with a wall of client logos. We are a young, founder-led shop, and we are not going to manufacture a track record we have not earned yet. What we can give you is the reasoning, drawn straight from Google's and the industry's published research on how people actually search for a local contractor.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here is a rough sketch, marked clearly as a projection and not a result we are claiming: picture a Chandler contractor pulling around 1,500 local \"near me\" impressions a month. Climbing out of page-two obscurity and into the top three turns a thin trickle of calls into a calendar that fills itself, and when the heat peaks or a haboob rolls through, that gap only widens. In your free audit we model the real figures for your business: your current rankings, your true search volume, and a straight 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Chandler', state: 'Arizona', stateAbbr: 'AZ', metro: 'Chandler-East Valley',
  heroProof: ['Built for the trades', 'Desert-heat ready', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const chandlerLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'chandler', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Chandler Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Chandler Local SEO that wins you the top three Map Pack spots. We get you into those three, so the call lands with you instead of a competitor.',
    eyebrow: 'Local SEO · Chandler-East Valley',
    h1: 'Chandler Local SEO that wins you the top three on the Ocotillo map',
    h2Exact: 'Chandler Local SEO Company',
    heroSubhead:
      "Google pins three businesses to the map when a homeowner searches \"near me,\" and everyone below them might as well not exist. We get you into that top three, so the call lands with you instead of whoever ranked first, and so you are already there when 114-degree heat or a monsoon storm lights up every phone in the East Valley.",
    primaryCta: 'Get my free Chandler audit',
    intro:
      "Chandler local SEO comes down to a single moment: a homeowner in Ocotillo or Fulton Ranch types your service plus \"near me,\" and either you are one of the three businesses Google pinned to the map or you are not. Most people tap one of those three and never scroll. This is an affluent, fast-growing tech market where buyers vet you before they call, so earning one of those three spots is the whole game. Here is how we get you there.",
    aioQuestion: 'How do Chandler businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile tuned to the exact services and neighborhoods you want; name, address, and phone details that match everywhere online; a steady flow of real reviews; and local content built around genuine Chandler neighborhoods. This is a semiconductor-corridor market with brutal summer heat and monsoon storms, so the winners look established, answer fast, and are already ranking before AC and storm-repair demand spikes.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Rivals hold all three pins on the Chandler map', body: "Search your own service plus \"near me\" right now. Those three businesses Google pins to the map collect the overwhelming share of the clicks. If you are not one of them, the quality of your work barely registers, because most Chandler homeowners never scroll far enough to find your name. Breaking into that top three is usually the single highest-return move a contractor here can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Chandler homeowner to four contractors at once, then charge each of you to fight over the scraps. It is a treadmill. Local SEO builds the opposite kind of asset: a homeowner finds you, calls you, and nobody else gets that lead. Run it long enough and you stop renting visibility and start owning the pipeline." },
      { title: "You're not ready when the heat or the monsoon hits", body: "When summer pushes past 110 degrees or a microburst tears through overnight, demand for AC repair, roofing, and restoration goes vertical, and the contractors already in the Map Pack take those calls. If you are invisible on the map when it lands, that work goes to whoever Google already trusts. Ranking now is how you catch the wave instead of watching it roll past." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest single lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows precisely which Chandler searches belong to you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to line up everywhere Google checks. We fix the listings that contradict each other and build the ones you are missing across the East Valley." },
      { name: 'Reviews that keep coming', desc: "A simple engine that turns finished jobs into a steady stream of fresh reviews. It lifts your ranking and gives a research-heavy Chandler buyer the proof they need to pick up the phone." },
      { name: 'Neighborhood pages', desc: "Real pages for Ocotillo, Fulton Ranch, Sun Lakes, Andersen Springs and the rest, so you rank for the exact neighborhood someone is searching instead of a generic \"Chandler.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, and mobile speed. The plumbing under the hood that lets everything else actually rank." },
      { name: 'Local link building', desc: "Mentions and links from East Valley sources Google trusts: local press, trade associations, community partners. In this market that is often what splits page one from page two." },
      { name: 'Heat & monsoon readiness', desc: "We get your profile, pages, and reviews ranking before peak summer and monsoon season so you capture the AC and storm-repair surge instead of scrambling for it once everyone is already booked.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts inside AI Overviews, ChatGPT, and Perplexity, and Chandler's tech-fluent homeowners are early to it. We structure your content so those engines can read you and cite you by name.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you genuinely rank today across every service area and pin down which competitors are beating you in the Map Pack and exactly why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP come first because they move the fastest. Most Chandler clients see early lift here inside a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is precisely why local SEO rewards starting before peak season rather than after." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across the East Valley, backed by the on-page work that makes them rank." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, never vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several East Valley areas.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across the East Valley.', features: ['Everything in Local Growth', 'Local link building', 'Heat & monsoon demand targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Chandler?', a: "Most Chandler engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you are chasing. The tiers above lay it out. No hidden fees, no long contract, and we lock the exact scope in your free audit before you spend a dollar." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move within a few weeks. The competitive Chandler keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. In an affluent, contested market like this, anyone promising you page one in 30 days is selling you a fantasy." },
      { q: 'What makes Chandler local SEO different?', a: "Two things. It sits in the semiconductor corridor, so the buyers are affluent, technical, and meticulous, and trust signals like reviews and consistent listings carry real weight with them. And it is the Sonoran Desert, so trade demand swings hard with 110-degree-plus heat and monsoon season. Your ranking has to be locked in before the AC fails and the storms hit, not scrambled together after." },
      { q: 'How does local SEO help me during peak heat and monsoon season?', a: "When summer climbs past 110 degrees or a microburst rolls through, searches for AC repair, roofing, and restoration spike overnight, and the businesses already in the Map Pack take those calls. We get you ranking and reviewed ahead of season so you capture that demand instead of competing for leftovers once everyone else is booked." },
      { q: 'Which areas do you cover?', a: "All of Chandler and the East Valley: Ocotillo, Fulton Ranch, Sun Lakes, Downtown Chandler, Andersen Springs, plus Gilbert, Tempe, Ahwatukee, Queen Creek and more. We build genuine neighborhood pages instead of one generic Chandler page, because that is what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It is basically all we do: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand emergency AC calls, heat-driven and monsoon-driven demand, and the HOA exterior rules built into nearly every Chandler community, and we build your local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research now starts in AI tools instead of classic search, and Chandler's engineer-heavy homeowners are quick to adopt them. We structure your content and schema so those engines can read, trust, and cite your business. Here it is fast becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that is roughly how long local SEO needs to show real movement. After that it is month-to-month. If we are not delivering, you walk, and the accountability stays squarely on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that send leads straight to you alone. Over time you lean on the brokers less because the work is already coming to you direct." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your service areas, what your Map Pack competitors are doing to beat you, the fixes that will move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. It is the fastest way to see what Chandler Local SEO can do for your phone, with no pitch deck, just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'chandler', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Chandler SEO Company | OnwardCraft',
    metaDescription:
      'Chandler SEO that ranks contractors on Google and delivers leads you own. Revenue-tied reporting, no lock-in, built for desert-heat and monsoon demand.',
    eyebrow: 'SEO Services · Chandler-East Valley',
    h1: 'Chandler SEO that builds rankings you actually own in the Silicon Desert',
    h2Exact: 'Chandler SEO Company',
    heroSubhead:
      "Ads die the second you stop paying. SEO does the reverse: rank once for what your Chandler customers search and the leads keep arriving for months. We build that ranking and tie every report to real calls and booked jobs, not vanity charts.",
    primaryCta: 'Get my free Chandler SEO audit',
    intro:
      "Chandler SEO comes down to one blunt question: when someone searches what you do, are you on page one or page two? Here, page two might as well be page fifty. We get contractors ranking for the money keywords in an affluent, fast-growing semiconductor-corridor market, and we measure the whole thing in leads, not traffic that never picks up the phone.",
    aioQuestion: 'How do Chandler businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content, and earning links from trusted Chandler and East Valley sources. In an affluent, competitive tech market, keeping the site fast on mobile and ranking for heat-driven and monsoon-driven seasonal terms are two of the quickest ways to pull ahead.",
    problemHeading: "Three reasons your Chandler site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and they seldom scroll far down it. If you are not in the top handful of results for what you sell, your site is effectively invisible no matter how polished it looks. Chandler buyers research hard, but only among the businesses they can actually find." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the instant your card stops, the leads stop cold. SEO builds an asset you actually own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost you are paying now." },
      { title: "You're not ranking for the demand that matters", body: "Chandler demand swings with the heat and the monsoon, and the contractors who rank for those terms ahead of time catch the spike. If your SEO ignores AC-emergency and storm-driven searches, you are quietly handing away your busiest, most profitable months." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank your Chandler site at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned for the exact terms your Chandler customers search: titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot long after we publish them." },
      { name: 'Link building', desc: "Authority from real Chandler and industry sources. In a competitive East Valley market, links are often the deciding factor between page one and page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches right alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and booked leads, not just rankings and traffic, so you always know what your SEO is actually worth in dollars." },
      { name: 'Heat & monsoon SEO', desc: "We rank you for the AC-emergency and monsoon-driven searches that fuel Chandler's busiest months, so you are visible before demand spikes instead of chasing it after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of Chandler's tech-savvy search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Chandler leads, not just impressions." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile. The foundation everything else needs before it can rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the seasonal, heat-driven, and monsoon terms that decide who wins July here." },
      { name: 'Build authority', desc: "Links and citations from trusted Chandler and industry sources to push your competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what is working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Chandler SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own East Valley search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Heat & monsoon SEO', 'eCommerce / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Chandler?', a: "Most Chandler SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. The tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Chandler?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on low-competition terms and slower on the most contested Chandler keywords. SEO compounds, so the longer you run it, the bigger the gains get." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops the moment you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Chandler contractors do best running SEO as the long-term engine and ads for short-term spikes." },
      { q: 'Should my Chandler SEO target heat and monsoon season?', a: "Yes. When summer pushes past 110 degrees or a monsoon storm hits, searches for AC repair, roofing, and restoration spike overnight, and ranking takes months to build, so you have to be in place before the season rather than chasing it after. We optimize for those seasonal, heat-driven, and storm-driven terms ahead of time so your busiest months land on you." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. Higher tiers add heat-and-monsoon and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it switches to month-to-month. If we are not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a growing part of what we optimize for, and it matters in an engineer-heavy market like Chandler. We structure your content and schema so AI engines can read, trust, and cite your business by name, not just classic search results." },
      { q: 'Which areas around Chandler do you cover?', a: "All of Chandler and the surrounding East Valley: Ocotillo, Fulton Ranch, Sun Lakes, Gilbert, Tempe, Ahwatukee, Queen Creek and more, with genuine local pages rather than one generic Chandler page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for leads three competitors also bought." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. It shows you exactly where Chandler SEO can win you organic traffic and page-one money keywords, with no pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'chandler', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Chandler Web Design Company | OnwardCraft',
    metaDescription:
      'Chandler web design that turns visitors into booked jobs: fast, mobile-first sites built for contractors and desert-heat demand.',
    eyebrow: 'Web Design · Chandler-East Valley',
    h1: 'Chandler web design engineered to bring Ocotillo homeowners real work',
    h2Exact: 'Chandler Web Design Company',
    heroSubhead:
      "A handsome website that never generates a call is just an expensive brochure. We build Chandler contractors fast, mobile-first sites engineered to turn visitors into booked work, and tough enough to hold up when 114-degree heat or a monsoon storm sends your phone into overdrive.",
    primaryCta: 'Get my free quote',
    intro:
      "Chandler web design is the difference between a site that books jobs and one that bleeds leads quietly: slow on a phone, call button buried, no clear offer anywhere. That is a real problem in a city full of engineers and tech professionals who size you up in seconds. A contractor website done right closes all of those leaks. We build sites that load fast, look like the professional you actually are, and turn Ocotillo-to-Fulton-Ranch visitors into booked jobs, and that do not fall over when an AC emergency or a haboob sends your traffic through the roof.",
    aioQuestion: 'What makes a good contractor website in Chandler?',
    aioAnswer:
      "A good Chandler contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and is built to handle traffic spikes during peak heat and monsoon season. Because Chandler homeowners vet you carefully and most local searches happen on mobile, mobile speed and an obvious next step are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "Plenty of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next name on the map. We design every page around one job: turning a Chandler visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Chandler visitors are on mobile, and they bounce if your site takes more than a couple of seconds to load. Slow sites also rank worse, so you lose twice. We build fast, so you keep both the visitor and the ranking." },
      { title: "It can't handle a heat or monsoon surge", body: "When summer peaks or a microburst rolls through, contractor sites get slammed with a flood of urgent traffic, and the slow ones buckle or bury the call button at the exact moment it matters most. We build sites that stay fast and keep converting under load, so you capture that demand instead of losing it to a faster competitor." },
    ],
    servicesHeading: "What's in an OnwardCraft Chandler website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your service area, and the exact jobs you want more of, built to earn the trust of discerning Chandler buyers." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that is where nearly all of your Chandler traffic lives. Fast, thumb-friendly, and easy to call from in one tap." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where homeowners actually use them. Every page carries an unmistakable next step." },
      { name: 'Copy that sells', desc: "Words that speak to a homeowner staring at a dead AC in July and book the job, not filler text that reads exactly like every other contractor in town." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank: clean structure, schema, fast load, and neighborhood-ready pages for Ocotillo, Fulton Ranch, Sun Lakes and beyond." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both your conversions and your rankings at the same time." },
      { name: 'Heat & monsoon ready', desc: "Built to stay fast and keep the call button front and center when peak-heat and monsoon traffic spikes, the exact moment that turns visitors into your biggest jobs of the year.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read your site and recommend your business as more of Chandler's search shifts toward AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your service area, your most profitable jobs, and your competitors, then map the site around booking more of the work you actually want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert, and you see it and shape it before a single line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed all dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what is actually converting visitors into calls." },
    ],
    pricing: {
      heading: 'Transparent Chandler web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Heat & monsoon ready'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Chandler?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. The tiers are above: fixed price, no surprises, and you own the finished site outright." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you posted through every stage." },
      { q: 'Will my site handle a heat or monsoon traffic spike?', a: "Yes, and in Chandler that matters. When summer peaks or a monsoon storm hits, contractor sites take a flood of urgent traffic, and the slow ones lose leads right when demand peaks. We build fast and keep the call button obvious, so your site converts under load instead of buckling." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank, and pairing it with our SEO service is how you climb the competitive Chandler terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations and no platform you cannot walk away from." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where nearly all of your Chandler traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage yourself, usually WordPress or Webflow. We recommend the right fit in your free consult and explain the tradeoffs in plain English." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month, so you can leave whenever you like." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Chandler site should include, and a fixed-price quote with a timeline. It is a plain-English plan for the Chandler web design that will turn your traffic into booked jobs. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'chandler', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Chandler Website Redesign | OnwardCraft',
    metaDescription:
      'Chandler Website Redesign without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs and hold up in desert heat.',
    eyebrow: 'Website Redesign · Chandler-East Valley',
    h1: 'Chandler Website Redesign that modernizes without tanking your desert traffic',
    h2Exact: 'Chandler Website Redesign Company',
    heroSubhead:
      "An outdated site quietly costs you jobs every week: slow, clumsy on a phone, easy for a research-heavy Chandler homeowner to skip past. We redesign contractor sites to convert more and load faster, and we migrate so carefully that you keep every bit of ranking you have already earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "A Chandler Website Redesign usually goes one of two bad ways: the site looks prettier but converts exactly the same, or it launches and the rankings vanish overnight. We do neither. We rebuild Chandler contractor sites for speed and conversions, build them to survive peak-heat and monsoon traffic surges, and run an SEO-safe migration with the redirects and care that protect the traffic you have spent years building.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Chandler site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "On a high-ticket job, Chandler homeowners size you up by your site in seconds, and many of them are engineers who notice every rough edge. An old, cluttered design quietly ships them to a competitor who simply looks more established, even when your work is plainly better." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you are losing the majority of your Chandler visitors before they ever reach your offer. A redesign built mobile-first wins those visitors back and turns them into leads." },
      { title: "It can't keep up when demand surges", body: "Traffic that never turns into calls is wasted money, and an old site that slows to a crawl under a peak-heat or monsoon surge loses leads at the precise moment they are worth the most. We rebuild for conversions and for the days your phone should be ringing off the hook." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what is costing you leads and rankings today, so the redesign fixes the real problems instead of just swapping the colors around." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep every bit of the rankings and traffic you have already earned in Chandler." },
      { name: 'Conversion redesign', desc: "Clear offers, smarter call-to-action placement, and lead forms homeowners actually use. We design for booked jobs, not just a prettier screenshot." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals, which lifts conversions and rankings at the same time." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where nearly all of your Chandler traffic actually lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the price of the jobs you want to book." },
      { name: 'Heat & monsoon ready rebuild', desc: "Rebuilt to stay fast and keep converting when peak-heat and monsoon traffic spikes, so the new site captures your biggest jobs instead of choking on them.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as more of Chandler's search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what is losing you leads and rankings, then map a redesign that fixes it without breaking what already works for you." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build a thing." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean, no-surprises migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so your rankings hold and climb instead of dropping." },
      { name: 'Optimize', desc: "Post-launch tuning based on what is converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Chandler redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Heat & monsoon ready'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Chandler?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result outright." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it is done carefully, and that is exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually pushes them higher." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at every stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is a pain to update, is not bringing in leads, or buckles when peak-heat or monsoon traffic surges, it is costing you work. The free audit tells you plainly whether a redesign is worth it for your Chandler business." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and sharpen your existing content, preserve what is ranking, and handle the technical migration so nothing important slips through the cracks." },
      { q: 'Will the new site handle peak-heat and monsoon traffic?', a: "Yes, and in Chandler that is a real consideration. When summer peaks or a monsoon storm hits, contractor sites take a surge of urgent traffic, and the slow ones lose leads. We rebuild for speed and keep the call to action obvious so the site converts when demand peaks." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely: the site, the domain, and the content. No platform lock-in of any kind." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and an SEO-safe migration plan. It is everything you need to decide whether a Chandler Website Redesign is worth it for your business." },
    ],
  },
];

export const chandlerCity = {
  citySlug: 'chandler', city: 'Chandler', state: 'Arizona', stateAbbr: 'AZ', metro: 'Chandler-East Valley',

  titleTag: 'Chandler Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Chandler marketing for contractors: web design, SEO, and local SEO that get you found, get you booked, and let you own your leads, all built for desert-heat demand.',

  eyebrow: 'Chandler · Web Design, SEO & Lead Generation',
  h1: 'Chandler marketing for contractors built around the trades and desert heat',
  h2Exact: 'Chandler Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Chandler's affluent, fast-growing semiconductor-corridor market. One team to get you ranking, converting, and off the rented-lead treadmill for good.",
  heroProof: ['Built for the trades', 'Desert-heat ready', 'No lock-in contracts'],
  primaryCta: 'Get my free Chandler audit',

  intro:
    "Chandler marketing for contractors means fighting for attention in one of the wealthiest, fastest-growing cities in the East Valley, where research-heavy tech homeowners and the competition both grow every month. Winning here takes three things working together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack, all locked in before the next 114-degree week or monsoon storm sends demand through the roof. Here is exactly how our Chandler digital marketing agency helps contractors pull that off.",
  aioQuestion: 'How do Chandler contractors get more leads online?',
  aioAnswer:
    "Chandler contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack. Because Chandler is an affluent semiconductor-corridor market with extreme summer heat and monsoon season, the contractors who look established and are already ranking before demand spikes win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Chandler searches \"near me.\" The single highest-return move for most local businesses, and how you catch peak-heat and monsoon demand before it goes to a competitor.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your Chandler customers actually search, build an asset you own instead of renting traffic from ads, and measure the whole thing in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs, and to stay fast when peak heat or a monsoon storm floods your phone, not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it so carefully that you keep every bit of ranking you have already earned in Chandler search.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Chandler?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads, and so they are ready when peak heat and monsoon season hit at once." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors, so we understand emergency AC calls, heat- and monsoon-driven demand, and the HOA exterior rules built into nearly every Chandler community." },
    { q: 'Why does desert heat and monsoon season matter for my marketing?', a: "When summer climbs past 110 degrees or a monsoon storm hits Chandler, demand for AC repair, roofing, and restoration spikes overnight. Ranking takes months to build, so the contractors who are already visible before the season take that work. We get you in place ahead of demand." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm the exact scope in your free audit." },
    { q: 'Which Chandler areas do you serve?', a: "All of Chandler and the East Valley: Ocotillo, Fulton Ranch, Sun Lakes, Downtown Chandler, Andersen Springs, plus Gilbert, Tempe, Ahwatukee, Queen Creek and more." },
    { q: 'Where should I start?', a: "Start with a free Chandler audit. We look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. It is the simplest first step into Chandler marketing for contractors that actually gets you found and booked. No pitch deck, just a plan." },
  ],
};
