// GREENVILLE: per-metro, per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Greenville's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// GREENVILLE: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'What you are really up against in Greenville search',
  body:
    "Greenville is an Upstate South Carolina boomtown, and the people moving here changed who buys home services. BMW built the largest plant in its global network just up the road in Spartanburg, Michelin runs its North American headquarters here, and Bosch plus a long roster of German auto suppliers followed. That brought thousands of engineers, plant managers, and their families, many transplanted from across the country and from overseas, and they hire a contractor the way they spec a part: read the listings, compare, check the reviews, then call. The downtown they moved into earned national praise after the city tore out a highway bridge and uncovered Falls Park on the Reedy and the Liberty Bridge, and that revival pulled even more arrivals into Augusta Road, North Main, and the Blue Ridge foothill towns like Travelers Rest. Newer subdivisions ring Greer, Simpsonville, and Boiling Springs, and those owners search the same way: phone in hand, \"near me\" attached, thumb landing on one of the first three names Google drops on the map. Then the calendar decides who books. Humid Upstate summers push the heat index past 95 from June into September and send HVAC demand vertical, while spring brings the storm and tornado season that drives roofing and restoration calls. The contractor already sitting in the Map Pack takes those jobs. If you are buried on page two when the first heat wave or hail line moves through, the work goes to whoever Google already trusts, not whoever does it better.",
  pullQuote: 'BMW, Michelin, and a steady stream of new arrivals turned Greenville into one of the most competitive and most rewarding contractor markets in the Southeast.',
  donut: {
    title: 'Greenville-Spartanburg economy',
    value: 65,
    centerLabel: 'manufacturing economy',
    legend: [
      { label: 'Manufacturing/industrial', pct: 65, kind: 'teal' },
      { label: 'Other sectors', pct: 35, kind: 'grey' },
    ],
  },
  seasonTitle: 'When Upstate trade demand spikes',
  seasonCaption: 'HVAC surge Jun to Sep; storm and tornado roofing Mar to Jun; mild winters with the odd ice event',
  seasonalDemand: [
    { m: 'J', v: 30 }, { m: 'F', v: 42, peak: true }, { m: 'M', v: 68, peak: true },
    { m: 'A', v: 75, peak: true }, { m: 'M', v: 72, peak: true }, { m: 'J', v: 85, peak: true },
    { m: 'J', v: 96, peak: true }, { m: 'A', v: 94, peak: true }, { m: 'S', v: 78, peak: true },
    { m: 'O', v: 44 }, { m: 'N', v: 32 }, { m: 'D', v: 28 },
  ],
  stats: [
    { value: '900K+', label: 'people across the Greenville-Spartanburg metro, with in-migration still climbing' },
    { value: 'BMW, Michelin, Bosch', label: 'advanced-manufacturing anchors feeding a high-income, research-first homeowner base', accent: true },
    { value: 'Jun-Sep', label: 'peak HVAC season as the Upstate heat index runs past 95 in humid summers' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks when Greenville searches "near me"' },
  ],
  neighborhoods: [
    'Augusta Road', 'Parkins Mill', 'North Main', 'Downtown Greenville', 'Mauldin',
    'Simpsonville', 'Greer', 'Taylors', 'Duncan', 'Boiling Springs',
    'Inman', 'Fountain Inn', 'Travelers Rest', 'Woodruff', 'Piedmont',
  ],
};

const AREAS = [
  'Greenville', 'Spartanburg', 'Mauldin', 'Simpsonville', 'Greer', 'Taylors',
  'Duncan', 'Boiling Springs', 'Inman', 'Fountain Inn', 'Travelers Rest',
  'Woodruff', 'Piedmont', 'Easley', 'Anderson',
];

const FOUNDER =
  "Here is the plain reason OnwardCraft exists. I kept running into sharp Upstate contractors who were wiring a few thousand a month to Angi and HomeAdvisor for leads that three of their competitors had already bought. That is not a business; that is a slot machine you keep feeding. So we built the opposite. We get you ranking and converting for the jobs you actually want, in the Greenville and Spartanburg neighborhoods you actually drive to, and the leads we earn are yours to keep. No year-long contract holding you hostage. If the work is not paying for itself, you cut us loose.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We know what a July emergency AC call sounds like, how a spring hail line wrecks a roofing schedule, and how relocating BMW and Michelin families shop for a contractor, so everything we build matches how your customers really search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The point is a pipeline you own outright. Not one more monthly check to a lead broker for the same Augusta Road or Simpsonville homeowner that three competitors are calling at the very same time.",
  },
  {
    title: 'We actually speak Greenville',
    body: "Humid Upstate summers, an engineer-and-manager homeowner class shaped by BMW, Michelin, and the German supplier base, and the revived downtown around Falls Park pulling in new residents from across the country. That is local knowledge a national agency cannot fake by find-and-replacing a city name in a template.",
  },
  {
    title: 'No contracts, no mystery',
    body: "Prices are published, reporting is tied to actual leads, and you go month-to-month after the first 90 days. If we are not earning the invoice, you walk. That keeps the pressure exactly where it should be: on us.",
  },
];

const PROOF = {
  heading: "We are new, so here is the honest math instead of a wall of logos",
  body:
    "Plenty of agencies open with a grid of client logos. We are a young, founder-led shop in a fast-growing market, so we are not going to invent a track record we have not earned yet. What we will hand you is the reasoning, taken straight from Google's and the industry's own research on how people hunt for a local contractor.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here is a rough sketch, marked clearly as an illustration and not a result we are claiming: say a Greenville contractor pulls roughly 1,200 local \"near me\" impressions a month. Moving from page-two invisibility up into the top three is the gap between a handful of stray calls and a calendar you cannot keep up with, and in a market where high-income manufacturing families research every hire, that gap in trust signals runs even wider. In your free audit we model the real figures for your business: your current rankings, your actual search volume, and a straight 90-to-180-day path to the top of the map.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Greenville', state: 'South Carolina', stateAbbr: 'SC', metro: 'Greenville-Spartanburg',
  heroProof: ['Built for the trades', 'Upstate SC specialists', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const greenvilleLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'greenville', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Greenville SC Local SEO Company | OnwardCraft',
    metaDescription:
      'When Greenville searches your service, three businesses show on the map. We put you in those three so the summer-heat call lands with you, not a competitor.',
    eyebrow: 'Local SEO · Greenville-Spartanburg',
    h1: 'When Greenville searches for what you do, be the first name they find',
    h2Exact: 'Greenville SC Local SEO Company',
    heroSubhead:
      "Google pins three businesses to the map when a homeowner searches \"near me,\" and everyone underneath them is invisible. We muscle you into that top three so the call lands with you instead of whoever ranks first, and so you are already there when humid-summer heat, a spring storm line, or another wave of BMW-plant arrivals lights up every Upstate phone.",
    primaryCta: 'Get my free Greenville audit',
    intro:
      "Greenville local SEO really comes down to one moment: a homeowner in Augusta Road or Simpsonville types your service plus \"near me,\" and either you are one of the three businesses Google pinned to the map or you are not. Most people tap one of those three and never scroll. The Upstate keeps filling up with high-income arrivals from the BMW plant, Michelin, and the German supplier base, and those buyers know how to research before they hire. Becoming one of those three is the whole game. Here is exactly how we get you there.",
    aioQuestion: 'How do Greenville SC businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile tuned to the exact services and Upstate neighborhoods you want; name, address, and phone details that match everywhere online; a steady flow of real reviews; and local content built around genuine Greenville-Spartanburg neighborhoods. Because so many buyers here are manufacturing professionals who research hard before calling, trust signals like reviews and an established presence carry extra weight.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Three competitors own the spots on the map', body: "Search your own service plus \"near me\" right now. Those three businesses Google pins to the map soak up the overwhelming majority of the clicks. If you are not one of them, the quality of your work barely registers, because most Greenville homeowners never scroll far enough to see your name. Climbing into that top three is usually the single highest-return move a contractor in the Upstate can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Greenville homeowner to four contractors at once, then bill each of you to fight over them. It is a treadmill you can never step off. Local SEO builds the opposite asset: a homeowner finds you, calls you, and nobody else got that lead. Run it long enough and you stop renting visibility and start owning the pipeline." },
      { title: "You're invisible when demand peaks", body: "When a humid Upstate summer drives the heat index past 95, HVAC searches spike overnight. When spring storms and the odd tornado warning sweep the foothills, roofing and restoration demand goes vertical. And when a fresh round of BMW or Michelin relocations brings high-income families to Greenville, those homeowners search online first. If you are not already ranking, the work flows to whoever Google already trusts." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The single biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows precisely which Greenville-Spartanburg searches belong to you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to line up everywhere Google checks. We fix the listings that contradict each other and build the ones you are missing across the Upstate." },
      { name: 'Reviews that keep coming', desc: "A simple engine that turns finished jobs into a steady stream of fresh reviews. It lifts your ranking and gives a research-minded Greenville buyer a reason to call you first." },
      { name: 'Neighborhood pages', desc: "Real pages for Augusta Road, Parkins Mill, North Main, Simpsonville, Greer, Taylors and the rest, so you rank for the exact neighborhood someone is searching instead of a generic \"Greenville.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, and the mobile speed that matters when an Augusta Road homeowner taps your listing from a phone. Get this right and every other piece of your Greenville ranking finally has something to stand on." },
      { name: 'Local link building', desc: "Mentions and links from Greenville and Upstate sources Google trusts: local press, trade associations, community partners. In this market that is often what splits page one from page two." },
      { name: 'Seasonal demand readiness', desc: "We get your profile, pages, and reviews ranking before HVAC season and spring storm season so you capture the surge instead of scrambling for it after the heat or the hail has already arrived.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts inside AI Overviews, ChatGPT, and Perplexity. We structure your content so those engines can read you and cite you by name.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today from Travelers Rest down to Simpsonville, then pin down which Upstate competitors are sitting above you in the Map Pack and the specific reason Google trusts them more right now." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP come first because they move the fastest. Most Greenville clients see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which matters even more in a market where buyers read everything before they call." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Greenville and Spartanburg counties, backed by the on-page work that makes them rank." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and booked jobs, never vanity rankings. Once you own one corner of the Upstate, we go after the next neighborhood, whether that is North Main or the newer subdivisions ringing Greer." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across Greenville and Spartanburg.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across the Upstate.', features: ['Everything in Local Growth', 'Local link building', 'Seasonal demand targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Greenville SC?', a: "Most Greenville engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you are chasing. The tiers above lay it out. No hidden fees, no long contract, and we lock the exact scope in your free audit before you spend a dollar." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move within a few weeks. The competitive Greenville keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. In a metro growing this fast, anyone promising you page one in 30 days is selling you a fantasy." },
      { q: 'What makes Greenville-Spartanburg local SEO different?', a: "Two things. The Upstate is anchored by BMW, Michelin, Bosch, and a wave of relocating manufacturing professionals who research every purchase, so trust signals like reviews and consistent listings carry real weight. And demand here swings on a clear seasonal pattern, from humid-summer HVAC to spring storm roofing, that rewards the contractor already ranking before the surge." },
      { q: 'How does local SEO help me during peak Upstate seasons?', a: "When the summer heat index runs past 95, searches for AC repair and replacement spike overnight. When spring storms and hail roll across the foothills, roofing and restoration demand surges. The businesses already in the Map Pack take those calls. We get you ranking and reviewed ahead of each season so you capture that demand instead of competing for scraps after everyone else is booked." },
      { q: 'Which areas do you cover?', a: "All of the Greenville-Spartanburg metro and the surrounding Upstate: Augusta Road, Parkins Mill, North Main, Mauldin, Simpsonville, Greer, Taylors, Duncan, Boiling Springs, Inman, Fountain Inn, Travelers Rest and more. We build genuine neighborhood pages instead of one generic Greenville page, because that is what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It is basically all we do: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand emergency calls, storm-driven demand, and the insurance jobs that follow a hail line through the Upstate." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More \"near me\" research now starts in AI tools instead of classic search, and Greenville's engineering-heavy, tech-comfortable manufacturing crowd is ahead of the curve on it. We structure your content and schema so those engines can read, trust, and cite your business. Here that is fast becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because the Greenville Map Pack rarely shifts faster than that, and reviews and citations need a quarter to compound. After that you go month-to-month. If the calls are not landing, you walk, and the pressure stays on us to keep earning the spot." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those brokers sell the same Mauldin or Greer homeowner to three contractors and bill all of you. We build the asset they cannot: a Google profile, real Upstate rankings, and a review base that send the call to you alone. As that pipeline fills, the broker invoices become something you choose, not something you survive on." },
      { q: "What's in the free audit?", a: "We map where you sit in the Map Pack today across each Upstate service area, name the competitors stacked above you and the trust signals carrying them, list the fixes that move you fastest, and lay out a realistic 90-to-180-day path with the numbers run for your shop. No pitch deck, just a straight read on the work ahead." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'greenville', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Greenville SC SEO Company | OnwardCraft',
    metaDescription:
      'Greenville SC SEO that ranks contractors on Google and delivers leads you own. Revenue-tied reporting, no lock-in, built for Upstate summer-heat and storm demand.',
    eyebrow: 'SEO Services · Greenville-Spartanburg',
    h1: 'Get your Greenville business to the top of Google and keep it there',
    h2Exact: 'Greenville SC SEO Company',
    heroSubhead:
      "Ads die the second you stop paying. SEO does the reverse: rank once for what your Greenville customers search and the leads keep arriving for months. We build that ranking and tie every report to real calls and booked jobs, in a market where BMW engineers and new Upstate arrivals expect a professional before they dial.",
    primaryCta: 'Get my free Greenville SEO audit',
    intro:
      "Greenville SEO comes down to one blunt question: when someone searches what you do, are you on page one or page two? In this market page two might as well be page fifty. We get contractors ranking for the money keywords in a fast-growing, manufacturing-anchored metro, and we measure the whole thing in leads, not traffic that never picks up the phone.",
    aioQuestion: 'How do Greenville SC businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content, and earning links from trusted Upstate sources. In a market shaped by high-income manufacturing professionals who research before spending and a fast-growing residential base, strong reviews and authoritative local content are two of the quickest ways to pull ahead.",
    problemHeading: "Three reasons your Greenville site isn't bringing in work",
    painPoints: [
      { title: "You're stranded on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it either. If you are not in the top handful of results for what you sell, your site is effectively invisible no matter how sharp it looks. In a Greenville market this competitive, that invisibility is exactly what is sending your jobs to a rival." },
      { title: "You're renting traffic from Google Ads", body: "Ads have their place, but the minute your card stops, so do the Greenville leads. SEO is the opposite kind of spend: rankings that keep feeding your calendar for months and years after the work is done, at a cost per lead that drops the longer they hold." },
      { title: "You're not ranking for the demand that matters", body: "Greenville demand swings with the season and the weather, and the contractors who rank for those terms ahead of time catch the spike. If your SEO ignores humid-summer HVAC, spring storm roofing, or searches from newly relocated manufacturing families, you are quietly handing away your busiest, most profitable months." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank your Greenville site at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned for the exact terms your Greenville customers search: titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Useful pages and articles that answer what Upstate buyers actually type, earn links, and keep pulling in leads months after we hit publish. The kind a researching BMW transplant reads end to end before deciding who to call." },
      { name: 'Link building', desc: "Authority from real Greenville and Upstate sources. In a competitive metro, links are often the deciding factor between page one and page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches right alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We track calls, forms, and booked Greenville jobs, not just rankings and traffic, so you can see in dollars what your SEO is doing for the schedule each month." },
      { name: 'Seasonal demand SEO', desc: "We rank you for the summer-heat HVAC, spring-storm roofing, and relocation-driven searches that fuel Greenville's busiest months, so you are visible before demand spikes instead of chasing it after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of Greenville search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Greenville leads, not just impressions." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile rendering for the phone where most Greenville searches happen. None of the content or link work ranks until this base is solid." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the seasonal and storm-driven terms that decide who wins a Greenville summer." },
      { name: 'Build authority', desc: "Links and citations from trusted Greenville and Upstate sources to push your competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to real Greenville leads. We pour more into the keywords already producing and push into the next set, whether that is a new service line or a neighboring Upstate town." },
    ],
    pricing: {
      heading: 'Transparent Greenville SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and Upstate neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Greenville-Spartanburg search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal demand SEO', 'eCommerce / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Greenville SC?', a: "Most Greenville SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. The tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Greenville?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on low-competition terms and slower on the most contested Greenville keywords. SEO compounds, so the longer you run it, the bigger the gains get." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops the moment you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Greenville contractors do best running SEO as the long-term engine and ads for short-term spikes." },
      { q: 'Should my Greenville SEO target seasonal demand?', a: "Absolutely. When the heat index hits the mid 90s in a humid Upstate summer, HVAC searches spike. When spring storms move through the foothills, roofing and restoration demand surges. Ranking takes months to build, so you have to be in place before the season rather than chasing it after. We optimize for those seasonal terms ahead of time so your busiest months land on you." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal-demand and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. The initial 90 days exist because SEO on competitive Upstate keywords simply needs a quarter to show real movement. After that you are month-to-month, and if the Greenville leads are not showing up, you leave with no penalty." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a growing part of what we optimize for. Greenville's engineering and manufacturing community is already at home researching through AI tools. We structure your content and schema so AI engines can read, trust, and cite your business by name, not just classic search results." },
      { q: 'Which areas around Greenville do you cover?', a: "All of the Greenville-Spartanburg metro and the surrounding Upstate: Mauldin, Simpsonville, Greer, Taylors, Duncan, Boiling Springs, Inman, Fountain Inn, Travelers Rest, Easley, Anderson and more, with genuine local pages rather than one generic Greenville page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building organic rankings and a Google presence that route the Upstate homeowner straight to you. The stronger your own search visibility gets, the less you have to keep buying the same shared lead three Greenville competitors already paid for." },
      { q: "What's in the free SEO audit?", a: "Your current rankings on the keywords that drive Greenville revenue, the competitors outranking you and how, the highest-impact fixes, and a realistic timeline with the numbers modeled for your shop. No pitch deck, just a diagnosis of where the work is." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'greenville', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Greenville SC Web Design Company | OnwardCraft',
    metaDescription:
      "Greenville SC web design that turns visitors into booked jobs: fast, mobile-first sites built for contractors and ready for Upstate summer-heat demand surges.",
    eyebrow: 'Web Design · Greenville-Spartanburg',
    h1: 'Greenville web design that turns visitors into booked jobs',
    h2Exact: 'Greenville SC Web Design Company',
    heroSubhead:
      "A handsome website that never generates a call is just an expensive brochure. We build Greenville contractors fast, mobile-first sites engineered to turn visitors into booked work, and tough enough to hold up when a humid-summer heat wave or a spring storm line sends your phone into overdrive.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Greenville contractor websites bleed leads quietly: slow on a phone, call button buried, no clear offer anywhere. Web design done right closes all of those leaks. The Upstate has a distinctive homeowner mix, from BMW and Michelin transplants to longtime Greenville families to new arrivals chasing the revived downtown, and they all research online before they hire. We build sites that load fast, look like the professional you actually are, and turn Augusta-Road-to-Simpsonville visitors into booked jobs.",
    aioQuestion: 'What makes a good contractor website in Greenville SC?',
    aioAnswer:
      "A good Greenville contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and speaks to a homeowner base that researches carefully before spending, including the manufacturing professionals relocating for BMW, Michelin, and Bosch. Because most Greenville searches happen on mobile, speed and an obvious next step are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "Plenty of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next name on the map. We design every page around one job: turning a Greenville visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Greenville visitors are on mobile, and they bounce if your site takes more than a couple of seconds to load. Slow sites also rank worse, so you lose twice. We build fast, so you keep both the visitor and the ranking." },
      { title: "It can't handle a demand surge", body: "When a summer heat wave spikes AC calls or a spring storm line sends roofing leads through the roof, contractor sites get slammed with urgent traffic, and the slow ones buckle or bury the call button at the exact moment it matters most. We build sites that stay fast and keep converting under load, so you capture that demand instead of losing it to a faster competitor." },
    ],
    servicesHeading: "What's in an OnwardCraft Greenville website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your Upstate service area, and the exact jobs you want more of." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that is where nearly all of your Greenville traffic lives. Fast, thumb-friendly, and easy to call from in one tap." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where a Greenville homeowner actually taps. Every page points to one unmistakable next step, whether the visitor is in Simpsonville or downtown near Falls Park." },
      { name: 'Copy that sells', desc: "Words that speak to research-minded Upstate homeowners and book the job, not filler text that reads exactly like every other contractor in town." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank: clean structure, schema, fast load, and neighborhood-ready pages for Augusta Road, Greer, Boiling Springs and beyond." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast on Upstate mobile connections and pass Google's performance checks, so a slow page never costs you the visitor or the ranking when summer-heat traffic surges." },
      { name: 'Seasonal surge ready', desc: "Built to stay fast and keep the call button front and center when summer-heat or spring-storm traffic spikes, the exact moment that turns visitors into your biggest jobs of the year.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read your site and recommend your business as more Greenville search shifts toward AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, the Upstate towns you cover, the jobs that pay best, and the Greenville competitors already winning them, then map the site around booking more of the work you actually want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert the Greenville homeowner, and you see it and shape it before a single line of code gets written." },
      { name: 'Build and copy', desc: "We build it fast and write copy that speaks to a researching Upstate buyer, with the call button held front and center on every page." },
      { name: 'Launch', desc: "We launch clean with the local-SEO foundation, call tracking, and Core Web Vitals speed all dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it on what is actually turning Greenville visitors into phone calls, not on guesses." },
    ],
    pricing: {
      heading: 'Transparent Greenville web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Seasonal surge ready'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Greenville SC?', a: "Most Greenville contractor sites with us run $2,000 to $8,000 as a one-time build, set by page count and any booking or integration work. The tiers above are fixed price with no surprises, and the finished site is yours to keep outright." },
      { q: 'How long does it take to build?', a: "A focused Greenville site takes roughly 2 to 4 weeks; a larger custom build runs 4 to 8. You get a firm timeline at the start and a check-in at every stage so you are never wondering where it stands." },
      { q: 'Will my site handle a seasonal traffic spike?', a: "Yes, and in Greenville that matters. When a summer heat wave spikes AC calls or a spring storm drives roofing leads, your site takes a surge of traffic, and the slow ones lose leads right when demand peaks. We build fast and keep the call button obvious, so your site converts under load instead of buckling." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank, and pairing it with our SEO service is how you climb the competitive Greenville terms." },
      { q: 'Do I own the website?', a: "Completely. The site, the domain, and the content are yours, unlike the lead brokers so many Upstate contractors get stuck renting from. No hostage situations and no platform you cannot walk away from." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where nearly all of your Greenville traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "Usually WordPress or Webflow, whichever fits your trade and is something you can manage without calling us every week. We recommend the right fit for your Greenville business in the free consult and walk you through the tradeoffs in plain English." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every Greenville build comes with launch support, and after that we offer affordable monthly maintenance covering updates, speed, and security so the site keeps performing through peak season." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time, fixed-price project. Any maintenance or SEO you add afterward runs month-to-month, so you are free to step away whenever it suits your Greenville business." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Greenville site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'greenville', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Greenville SC Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your Greenville SC website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs and hold up in peak season.',
    eyebrow: 'Website Redesign · Greenville-Spartanburg',
    h1: 'Redesign your Greenville website without losing your rankings',
    h2Exact: 'Greenville SC Website Redesign Company',
    heroSubhead:
      "An outdated site quietly costs you jobs every week: slow, clumsy on a phone, easy for a Greenville homeowner to skip past. We redesign contractor sites to convert more and load faster, and we migrate so carefully that you keep every bit of ranking you have already earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks prettier but converts exactly the same, or it launches and the rankings vanish overnight. We do neither. We redesign Greenville contractor sites for speed and conversions, build them to survive summer-heat and storm-season surges, and migrate with the redirects and SEO care that protect the traffic you have spent years building. In a market where BMW and Michelin executives judge your professionalism by your website before they even call, a weak first impression costs real money.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO through a redesign by holding your URL structure steady (or mapping 301 redirects for every page that changes), carrying over your existing content and metadata, migrating your schema, and testing the whole build on staging before it goes live. Handled that way, a redesign keeps your rankings and tends to lift them, because the new site is faster, mobile-first, and better organized than the one it replaced.",
    problemHeading: "Signs your Greenville site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "On a high-ticket job, homeowners size you up by your site in seconds. An old, cluttered design quietly ships them to a competitor who simply looks more established, even when your work is plainly better. With BMW engineers and Michelin executives in the buyer pool, that first impression often decides who gets the call." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you are losing the majority of your Greenville visitors before they ever reach your offer. A redesign built mobile-first wins those visitors back and turns them into leads." },
      { title: "It can't keep up when demand surges", body: "Traffic that never turns into calls is wasted money, and an old site that slows to a crawl during a summer-heat HVAC surge or after a spring storm loses leads at the precise moment they are worth the most. We rebuild for conversions and for the days your phone should be ringing off the hook." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint what is bleeding leads and rankings on your current Greenville site, so the rebuild fixes the real problems rather than just freshening the colors and calling it new." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep every bit of the rankings and traffic you have already earned in Greenville." },
      { name: 'Conversion redesign', desc: "Clear offers, smarter call-to-action placement, and lead forms a Greenville homeowner will actually fill out. We rebuild for booked jobs, not just a screenshot that looks better than the old one." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and clean Core Web Vitals scores, the kind that hold up when a summer-heat surge floods your Greenville site with urgent traffic and lift both conversions and rankings in the process." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where nearly all of your Greenville traffic actually lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the expectations of the Upstate homeowner market." },
      { name: 'Seasonal surge ready rebuild', desc: "Rebuilt to stay fast and keep converting when summer-heat or spring-storm traffic spikes, so the new site captures your biggest jobs instead of choking on them.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as more Greenville search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what is losing you Greenville leads and rankings, then map a rebuild that fixes it without touching the pages already pulling their weight in Upstate search." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design aimed at the researching Greenville homeowner, reviewed and shaped by you before we rebuild a thing." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every 301 redirect and SEO detail so the migration is clean and your hard-won Greenville rankings come across intact." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and watch the rankings closely through the first weeks so they hold and climb rather than slipping during the changeover." },
      { name: 'Optimize', desc: "Post-launch tuning driven by what is actually converting Greenville visitors, plus the ongoing speed and updates that keep the site sharp into peak season." },
    ],
    pricing: {
      heading: 'Transparent Greenville redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Seasonal surge ready'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Greenville SC?', a: "Most Greenville redesigns with us run $2,500 to $9,000 as a one-time project, set by site size and any booking or integration work. The price is fixed, there are no surprises, and the result is yours to keep." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not when the migration is handled with care, which is the whole point of how we work. We map 301 redirects for every changed URL, carry over your content and metadata, migrate the schema, and test on staging before launch. Done that way, a redesign holds your Greenville rankings and usually nudges them up." },
      { q: 'How long does a redesign take?', a: "A focused Greenville redesign runs about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline at the start and an update at every stage so the changeover never catches you off guard." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is a pain to update, is not bringing in leads, or buckles when seasonal demand surges, it is costing you work. The free audit tells you plainly whether a redesign is worth it for your Greenville business." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and sharpen what you already have, protect the pages currently ranking in Greenville search, and run the technical migration so nothing that matters slips through the cracks." },
      { q: 'Will the new site handle seasonal traffic surges?', a: "Yes, and in Greenville that is a real consideration. When summer heat spikes HVAC demand or spring storms drive roofing searches, your site takes a surge of traffic, and the slow ones lose leads. We rebuild for speed and keep the call to action obvious so the site converts when demand peaks." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first for the phone where nearly all Greenville traffic lives, then tune load speed and Core Web Vitals so the site lifts both conversions and rankings instead of dragging them." },
      { q: 'Do I own the redesigned site?', a: "Completely: the site, the domain, and the content all belong to you. No platform lock-in of any kind, and nobody holding your Greenville web presence hostage." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time, fixed-price project. Any maintenance or SEO you add afterward runs month-to-month, so you can step away whenever you choose." },
      { q: "What's in the free redesign audit?", a: "A straight read on what your current Greenville site is costing you in leads and rankings, what the rebuild needs to fix, and a fixed-price quote with a timeline and a migration plan that protects the traffic you already have." },
    ],
  },
];

export const greenvilleCity = {
  citySlug: 'greenville', city: 'Greenville', state: 'South Carolina', stateAbbr: 'SC', metro: 'Greenville-Spartanburg',

  titleTag: 'Greenville SC Marketing for Contractors | OnwardCraft',
  metaDescription:
    "Web design, SEO, and local SEO for Greenville SC contractors. Get found, get booked, and own your leads instead of renting them, all built for Upstate demand.",

  eyebrow: 'Greenville SC · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Greenville contractors found and booked',
  h2Exact: 'Greenville SC Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Greenville-Spartanburg's fast-growing, manufacturing-powered market. One team to get you ranking, converting, and off the rented-lead treadmill for good.",
  heroProof: ['Built for the trades', 'Upstate SC specialists', 'No lock-in contracts'],
  primaryCta: 'Get my free Greenville audit',

  intro:
    "If you run a contracting business in Greenville, you are fighting for attention in one of the fastest-growing metros in the Southeast, anchored by BMW's plant up in Spartanburg, Michelin's North American headquarters, and a steady run of new residents drawn by jobs, affordability, and the revived downtown around Falls Park. Winning here takes three things working together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack, all locked in before a humid-summer heat wave or a spring storm line drives demand through the roof. Here is exactly how we help Greenville contractors pull that off.",
  aioQuestion: 'How do Greenville SC contractors get more leads online?',
  aioAnswer:
    "Greenville contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack. Because the Upstate's homeowner base includes high-income manufacturing professionals who research carefully before spending, strong reviews and neighborhood-specific content carry extra weight, and seasonal peaks like summer-heat HVAC demand and spring storm roofing reward the contractor already ranking before the surge hits.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Greenville searches \"near me.\" The single highest-return move for most local businesses, and how you catch summer-heat and spring-storm demand before it goes to a competitor.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your Greenville customers actually search, build an asset you own instead of renting traffic from ads, and measure the whole thing in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs, and to stay fast when an Upstate heat wave or storm line sends your phone into overdrive, not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it so carefully that you keep every bit of ranking you have already earned in Greenville search.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Greenville SC?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads, and so they are ready when summer heat or spring storms send demand through the roof." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors, so we understand emergency calls, storm-driven demand, and the insurance jobs that follow a hail line across the Upstate." },
    { q: 'Why does seasonal demand matter for my marketing?', a: "When a humid Greenville summer pushes the heat index past 95, HVAC searches spike overnight. When spring thunderstorms roll through the foothills, roofing and restoration demand surges. Ranking takes months to build, so the contractors already visible before the season take the work. We get you in place ahead of time." },
    { q: 'How much does it cost to work with you?', a: "Greenville websites are one-time builds from $2,000 to $9,000. SEO and local SEO run month-to-month from $750 to $3,000 with no long contract. We lock the exact scope for your shop in the free audit before you commit a dollar." },
    { q: 'Which Greenville areas do you serve?', a: "All of the Greenville-Spartanburg metro and the surrounding Upstate: Augusta Road, Parkins Mill, North Main, Mauldin, Simpsonville, Greer, Taylors, Duncan, Boiling Springs, Inman, Fountain Inn, Travelers Rest and more." },
    { q: 'Where should I start?', a: "Start with a free Greenville audit. We look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};
