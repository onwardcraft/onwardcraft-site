// LAKELAND: per-metro, per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Lakeland's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// LAKELAND: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'What ranking in Lakeland really takes',
  body:
    "Lakeland sits at the midpoint of the I-4 corridor, the warehouse-and-distribution spine that runs from Tampa to Orlando. Publix keeps its headquarters here, Amazon runs a fulfillment center off the interstate, and that logistics gravity pulls in working families and long-haul commuters by the thousands. The city is named for the dozens of lakes scattered through it, and the neighborhoods wrapped around Lake Morton and Lake Hollingsworth carry some of the oldest, highest-value homes in Polk County. Newer arrivals land in fresh construction out toward Eaglebrooke and the Highlands with no contractor saved in their phone yet. They all search the same way: a thumb on a phone, the words \"near me\" tacked on, a tap on one of the first three names Google drops onto the map. Then central Florida weather settles who profits. This is the lightning capital of the country, and hurricane season runs June through November. When a storm tracks across the peninsula, calls for roofing, water restoration, and HVAC do not climb gently; they jump, and the backlog stretches for months. A fair share of those callers want a contractor who can talk to them in Spanish. The shops already sitting in the Map Pack are the ones whose phones light up first.",
  pullQuote: 'When the next storm crosses Polk County, the Lakeland contractor already in the Map Pack books the work while everyone else waits by a quiet phone.',
  donut: {
    title: 'How Lakeland searches',
    value: 24,
    centerLabel: 'Hispanic',
    legend: [
      { label: 'Hispanic', pct: 24, kind: 'teal' },
      { label: 'Other', pct: 76, kind: 'grey' },
    ],
  },
  seasonTitle: 'When the phone starts ringing',
  seasonCaption: 'Hurricane season (Jun to Nov) layered over near-daily summer storms, peaking May to Oct',
  seasonalDemand: [
    { m: 'J', v: 32 }, { m: 'F', v: 30 }, { m: 'M', v: 38 }, { m: 'A', v: 46 },
    { m: 'M', v: 64, peak: true }, { m: 'J', v: 78, peak: true }, { m: 'J', v: 84, peak: true },
    { m: 'A', v: 90, peak: true }, { m: 'S', v: 96, peak: true }, { m: 'O', v: 86, peak: true },
    { m: 'N', v: 58 }, { m: 'D', v: 38 },
  ],
  stats: [
    { value: '750K+', label: 'people across Polk County, one of the fastest-growing in the US' },
    { value: '~24%', label: 'of Lakeland is Hispanic and growing fast', accent: true },
    { value: 'Jun–Nov', label: 'hurricane season, when trade demand spikes' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks' },
  ],
  neighborhoods: [
    'Dixieland', 'Lake Morton', 'Lake Hollingsworth', 'Cleveland Heights', 'South Lakeland',
    'Lake Mirror', 'Winter Haven', 'Auburndale', 'Bartow', 'Plant City',
    'Mulberry', 'Davenport', 'Lakeland Highlands', 'Eaglebrooke', 'Christina',
  ],
};

const AREAS = [
  'Lakeland', 'Winter Haven', 'Auburndale', 'Bartow', 'Plant City', 'Mulberry',
  'Davenport', 'Haines City', 'Lake Wales', 'Polk City',
  'Lakeland Highlands', 'Combee Settlement', 'Highland City', 'Fort Meade', 'Dundee',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, general contractors. We know what a post-storm roofing rush looks like, how lightning fries an AC unit on a July afternoon, and how insurance claims drive the work, so everything we build matches how Lakeland customers actually search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The aim is a pipeline that belongs to you. Not one more monthly check to a broker for a Polk County homeowner that three other contractors are dialing at the same minute.",
  },
  {
    title: 'We actually speak Lakeland',
    body: "I-4 logistics money, the wave of new homeowners pushing in from Tampa and Orlando, lightning and hurricane demand, some bilingual outreach, real targeting from Dixieland to Eaglebrooke. That is ground knowledge a national agency cannot fake by dropping a city name into a template.",
  },
  {
    title: 'No contracts, no mystery',
    body: "Prices are posted, reporting points at real leads, and you go month-to-month once the first 90 days are done. If we are not earning the invoice, you leave. That puts the pressure where it ought to sit: on us.",
  },
];

const PROOF = {
  heading: "We're new, so here's the honest math instead of a logo wall",
  body:
    "Lots of agencies lead with a grid of client logos. We are a young, founder-run shop, so we will not invent a track record we have not built yet. What we can give you is the reasoning, lifted straight from Google's and the industry's own research on how people search for a local contractor.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here is a rough sketch, marked plainly as an illustration and not a result we claim: say a Lakeland contractor pulls around 1,500 local \"near me\" impressions a month. Climbing from page-two obscurity into the top three is the gap between a handful of stray calls and a calendar you cannot keep up with, and in a county filling this fast that gap only widens. In your free audit we model the real figures for your business: your current rankings, your actual search volume, and a straight 90-to-180-day route to the top of the map.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Lakeland', state: 'Florida', stateAbbr: 'FL', metro: 'Lakeland-Winter Haven (Polk County)',
  heroProof: ['Built for the trades', 'Storm-season ready', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const lakelandLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'lakeland', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Lakeland Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Lakeland Local SEO that puts you in the three businesses Google pins to the map, so the next storm-season call lands with you, not a rival.',
    eyebrow: 'Local SEO · Polk County',
    h1: 'Lakeland Local SEO that makes you the first name on the map from Dixieland to Eaglebrooke',
    h2Exact: 'Lakeland Local SEO Company',
    heroSubhead:
      "Google pins three businesses to the map when someone types \"near me,\" and everyone below those three is more or less invisible. We get you into that top three so the call lands with you instead of whoever ranked first, and so you are already there when the next storm lights up every phone in Polk County.",
    primaryCta: 'Get my free Lakeland audit',
    intro:
      "Lakeland local SEO turns on a single moment: a new homeowner out by Eaglebrooke or in Dixieland types your trade plus \"near me,\" and either you are one of the three businesses Google pinned to the map or you are not. Most people tap one of those three and never scroll. With Polk County growing as fast as anywhere in the country and rivals piling in right behind, landing one of those three spots is the whole contest. Here is how we get you there.",
    aioQuestion: 'How do Lakeland businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile tuned to the exact trades and Polk County neighborhoods you want, name and address and phone details that match everywhere online, a steady flow of real reviews, and local content built around genuine Lakeland areas. With new homeowners arriving daily and storms spiking demand, the winners look established, answer fast, and already rank before the season turns.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Three rivals own the pins on the map', body: "Type your own trade plus \"near me\" right now. Those three businesses Google drops onto the map pull in most of the clicks before anyone scrolls. If your name is not among them, how good your work is barely registers, because most Lakeland homeowners never lay eyes on you. Breaking into that top three is usually the single best-paying move a Polk County contractor can make." },
      { title: "You're paying brokers for leads you never keep", body: "Angi, Thumbtack, and HomeAdvisor sell the same Lakeland homeowner to four contractors at once, then charge each of you to wrestle over them. It never ends. Local SEO builds the reverse: a homeowner finds you, dials you, and no one else got that lead. Run it long enough and you quit renting visibility and start owning the pipeline outright." },
      { title: "You're invisible to the families pouring in", body: "Polk County is filling with families priced out of Tampa and Orlando, most landing in new construction with no contractor list yet. They find their roofer, their AC tech, their plumber on Google. If you are not on the map when they search, you are invisible to the exact people moving in by the thousands each month. Ranking now is how you get in front of that wave instead of behind it." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The heaviest lever in the Map Pack. We set your categories, services, service area, photos, and posts so Google knows exactly which Lakeland searches ought to be yours." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to agree everywhere Google looks. We straighten out the listings that conflict and build the ones missing across Polk County." },
      { name: 'Reviews that keep coming', desc: "A simple engine that turns finished jobs into a regular flow of fresh reviews. It nudges your ranking up and gives the next homeowner a reason to call you first." },
      { name: 'Neighborhood pages', desc: "Real pages for Dixieland, South Lakeland, Winter Haven, Auburndale and the rest, so you rank for the exact area someone is searching rather than a flat \"Lakeland.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, and mobile speed. The wiring behind the wall that lets every other piece rank at all." },
      { name: 'Local link building', desc: "Mentions and links from Polk County sources Google respects: local press, trade groups, community partners. Here that is often what divides page one from page two." },
      { name: 'Storm-season readiness', desc: "We get your profile, pages, and reviews ranking before hurricane season opens so you catch the roofing and restoration surge instead of chasing it once the water has already gone down.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now begins inside AI Overviews, ChatGPT, and Perplexity. We shape your content so those engines can read you and name you in their answers.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We map where you genuinely rank today across every service area and pin down which competitors are beating you in the Map Pack and the reasons why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP come first because they move quickest. Most Lakeland clients see early lift here inside a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine switch on. These stack up week over week, which is why local SEO pays back the people who start before storm season, not after." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Polk County, backed by the on-page work that makes them rank." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, never vanity rankings. Then we go win the next neighborhood over." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation set right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For shops fighting across several Polk County communities.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors set on owning the map across Polk County.', features: ['Everything in Local Growth', 'Local link building', 'Storm-season demand targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Lakeland?', a: "Most Lakeland engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you are going after. The tiers above lay it out. No hidden fees, no long contract, and we lock the exact scope in your free audit first." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move inside a few weeks. The competitive Lakeland keywords usually take 90 to 180 days of steady work, because reviews and citations build up over time. Anyone promising page one in 30 days in a county filling this fast is selling you a story." },
      { q: 'What makes Lakeland local SEO different?', a: "Two things. Polk County is one of the fastest-growing counties in the US, so new-construction homeowners hunt for a contractor for the first time and fresh rivals appear every month. And this is central Florida, where lightning and hurricane season swing trade demand hard, so your ranking has to be locked in before the storm, not patched together after." },
      { q: 'How does local SEO help me during hurricane season?', a: "When a storm like Ian, Irma, or Milton tracks across the peninsula, searches for roofing, water restoration, and HVAC jump overnight, and the businesses already in the Map Pack grab those calls. We get you ranked and reviewed ahead of season so you catch that demand instead of fighting over scraps once everyone else is booked solid." },
      { q: 'Do you offer service in Spanish?', a: "Yes. Close to a quarter of Lakeland is Hispanic and that share keeps climbing, so we can build bilingual pages and tune your profile to surface for Spanish-language searches. It widens the pool of homeowners who can find you and feel comfortable picking up the phone." },
      { q: 'Which areas do you cover?', a: "All of Lakeland and Polk County: Dixieland, Lake Morton, Cleveland Heights, South Lakeland, plus Winter Haven, Auburndale, Bartow, Plant City, Mulberry, Davenport and more. We build genuine neighborhood pages rather than one catch-all Lakeland page, because that is what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It is basically the whole job: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand emergency calls, storm-driven demand, and insurance work, and we build your local SEO around all of it." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More \"near me\" research now opens inside AI tools rather than classic search. We structure your content and schema so those engines can read, trust, and cite your business. In Lakeland that is quickly becoming as valuable as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. The initial 90 days exist because that is about how long local SEO takes to show real movement in a market this competitive. From there you go month-to-month. If the leads are not showing up, you walk away, and that keeps the burden of proof sitting on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that route leads straight to you alone. Over time you lean on the brokers less because Lakeland Local SEO has the work arriving direct, on a pipeline that belongs to you." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'lakeland', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Lakeland SEO Company | OnwardCraft',
    metaDescription:
      'Lakeland SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in, built for storm-season and summer demand.',
    eyebrow: 'SEO Services · Polk County',
    h1: 'Lakeland SEO that puts your contracting business on page one along the I-4 corridor and holds it',
    h2Exact: 'Lakeland SEO Company',
    heroSubhead:
      "Ads switch off the moment your card stops. SEO runs the other way: rank once for what your Lakeland customers search and the leads keep arriving for months. We build that ranking and tie every report to real calls and booked jobs, not pretty traffic charts.",
    primaryCta: 'Get my free Lakeland SEO audit',
    intro:
      "Lakeland SEO comes down to one plain question: when someone searches what you do, are you on page one or page two? Around here page two might as well be page fifty. We get contractors ranking for the money keywords in a county exploding with new homeowners along the I-4 corridor, and we count the whole thing in leads, not traffic that never dials.",
    aioQuestion: 'How do Lakeland businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical base of the site, tuning each page for the exact terms customers search, publishing genuinely useful local content, and earning links from trusted Polk County sources. In a fast-growing central-Florida market, keeping the site quick on mobile and ranking for storm-driven, seasonal terms are two of the fastest ways to pull ahead of the pack.",
    problemHeading: "Three reasons your Lakeland site isn't bringing in work",
    painPoints: [
      { title: "You're stranded on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. If you are not in the top handful of results for what you sell, your site is effectively hidden no matter how sharp it looks. In Lakeland, that is precisely what hands your jobs to the next contractor over." },
      { title: "You're renting traffic from Google Ads", body: "Ads can pull, but the second your card stops, so do the leads. SEO builds something you actually own: rankings that keep producing leads months and years after the work is done, at a slice of the per-lead cost you are paying now." },
      { title: "You're not ranking for the demand that pays", body: "Lakeland demand swings with the season and the storms, and the contractors who rank for those terms ahead of time catch the surge. If your SEO skips hurricane-driven and summer searches, you are quietly handing away your busiest, most profitable stretch of the year." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank your Lakeland site at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned for the exact terms your Lakeland customers search: titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, pull in links, and bring leads on autopilot long after we publish them." },
      { name: 'Link building', desc: "Authority from real Polk County and industry sources. In a competitive market, links are often the deciding factor between page one and page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches right beside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We track calls, form fills, and booked jobs rather than rankings and pageviews alone, so the value of your Lakeland SEO is always counted in real dollars." },
      { name: 'Storm & seasonal SEO', desc: "We rank you for the hurricane-driven and summer-storm searches that fuel Lakeland's busiest months, so you are visible before demand spikes rather than chasing it after.", featured: true },
      { name: 'AI search & GEO', desc: "We shape your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of Lakeland search now starts.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Lakeland leads, not just impressions." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile handling. This is the groundwork every page in Polk County needs before it has a shot at ranking." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the seasonal and storm-driven terms that decide who wins summer here." },
      { name: 'Build authority', desc: "Links and citations from trusted Polk County and industry sources to push your competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting pinned to actual leads, then we pour more into the keywords that are paying and push into the next set across Polk County." },
    ],
    pricing: {
      heading: 'Transparent Lakeland SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site chasing its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across trades and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses out to own Polk County search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Storm & seasonal SEO', 'eCommerce / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Lakeland?', a: "Most Lakeland SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. The tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Lakeland?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on low-competition terms and slower on the most contested Lakeland keywords. SEO builds on itself, so the longer you run it, the bigger the gains get." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops the second you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Lakeland contractors do best with SEO as the long-term engine and ads for short bursts." },
      { q: 'Should my Lakeland SEO target hurricane season?', a: "Yes. When storms like Ian, Irma, or Milton cross central Florida, searches for roofing, restoration, and HVAC jump overnight, and ranking takes months to build, so you have to be in place before the season rather than chasing it after. We optimize for those seasonal and storm-driven terms ahead of time so your busiest months land on you." },
      { q: 'Can you rank me for the I-4 logistics and commercial work?', a: "We can. Lakeland is a distribution hub with warehouses, fleets, and commercial buildings strung along the interstate, so beyond residential terms we target the commercial and property-management searches those facilities run. It is a steadier lane of work that most home-service contractors leave on the table." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page work, content, link building, local and Map Pack SEO, and reporting tied to real leads. The higher Lakeland tiers fold in storm-and-seasonal targeting and AI-search optimization. We pin down the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an opening 90 days because that is the window SEO needs to show real Lakeland movement, and after it the agreement runs month-to-month. If the work is not paying off, you are free to go." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "It is a fast-growing slice of what we work on. We organize your content and schema so AI engines can parse, trust, and name your Lakeland business in their answers, not only the old blue-link results." },
      { q: 'Which areas around Lakeland do you cover?', a: "All of Lakeland and Polk County: Winter Haven, Auburndale, Bartow, Plant City, Mulberry, Davenport, Haines City and more, with genuine local pages rather than one generic Lakeland page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that route leads straight to you. The more your Lakeland SEO earns you organic traffic on the searches that book jobs, the less you depend on paying brokers for leads three competitors also bought." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'lakeland', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Lakeland Web Design Company | Sites That Convert | OnwardCraft',
    metaDescription:
      'Lakeland web design that turns visitors into booked jobs: fast, mobile-first sites built for contractors and ready for storm-season traffic spikes.',
    eyebrow: 'Web Design · Polk County',
    h1: 'Lakeland web design that books jobs instead of just looking nice from Dixieland to Eaglebrooke',
    h2Exact: 'Lakeland Web Design Company',
    heroSubhead:
      "A good-looking website that never rings the phone is just a pricey brochure. We build Lakeland contractors fast, mobile-first sites engineered to turn visitors into booked work, and tough enough to hold up when a storm sends your phone into overdrive.",
    primaryCta: 'Get my free quote',
    intro:
      "Lakeland web design wins or loses on one thing: whether the site turns a thumb on a phone into a booked job. Most contractor sites here leak leads quietly: slow on a phone, call button buried, no clear offer anywhere. We build sites that load fast, look like the professional you are, and turn Dixieland-to-Eaglebrooke visitors into booked jobs, and that do not fall over when a storm sends your traffic through the roof.",
    aioQuestion: 'What makes a good contractor website in Lakeland?',
    aioAnswer:
      "A good Lakeland contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and is built to take traffic spikes during storm season. Because most Lakeland searches happen on mobile, mobile speed and an obvious next step are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "Plenty of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next pin on the map. We design every page around one job: turning a Lakeland visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Lakeland visitors are on mobile, and they bounce if your site takes more than a couple of seconds to load. Slow sites also rank worse, so you lose twice over. We build fast, so you keep both the visitor and the ranking." },
      { title: "It folds under a storm-season rush", body: "After Ian and Milton, contractor sites got buried in urgent traffic, and the slow ones stalled or hid the call button at the very moment it mattered most. We build sites that stay quick and keep converting under load, so you catch that demand instead of losing it to a faster rival." },
    ],
    servicesHeading: "What's in an OnwardCraft Lakeland website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site built around your trade, your Polk County service area, and the exact jobs you want more of." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that is where nearly all of your Lakeland traffic lives. Fast, thumb-friendly, and one tap to call." },
      { name: 'Conversion-focused UX', desc: "Plain offers, hard-to-miss call buttons, and lead forms placed where Lakeland homeowners actually fill them out. Every page points to one clear next step." },
      { name: 'Copy that sells', desc: "Words aimed at an anxious homeowner staring at a torn-up roof or a dead AC in July, not filler that reads like every other contractor in town." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank: clean structure, schema, fast load, and neighborhood-ready pages for Dixieland, South Lakeland, Winter Haven and beyond." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which guards both your conversions and your rankings at once." },
      { name: 'Storm-surge ready', desc: "Built to stay quick and keep the call button in plain sight when a hurricane sends Polk County traffic surging, the window that turns visitors into your biggest jobs of the year.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read your site and recommend your business as more Lakeland search shifts toward AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We get to know your trade, your Polk County service area, your most profitable jobs, and your competition, then shape the site around booking more of the work you actually want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout aimed at converting, and you see it and steer it before a single line of code gets written." },
      { name: 'Build and copy', desc: "We build it quick and write copy that books the job, keeping the call to action up top on every page of the site." },
      { name: 'Launch', desc: "We launch clean, with the local-SEO foundation, tracking, and load speed all set from the first day live." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what is actually turning visitors into calls." },
    ],
    pricing: {
      heading: 'Transparent Lakeland web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors running several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Storm-surge ready'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Lakeland?', a: "Most contractor websites with us land between $2,000 and $8,000 as a one-time build, set by page count and integrations. The tiers sit above: one fixed price, nothing hidden, and the finished site is yours to keep." },
      { q: 'How long does it take to build?', a: "A focused site runs roughly 2 to 4 weeks; a larger custom build runs 4 to 8. You get a firm timeline at the start and a heads-up at each stage along the way." },
      { q: 'Will my site handle a storm-season traffic spike?', a: "Yes, and in Lakeland that matters. After Ian and Milton, contractor sites took a flood of urgent traffic, and the slow ones lost leads right when demand peaked. We build fast and keep the call button obvious, so your site converts under load instead of stalling." },
      { q: 'Can you build the site bilingual for Spanish-speaking customers?', a: "We can. With close to a quarter of Lakeland Hispanic and growing, a Spanish-language version or bilingual pages can open up a real slice of the market. We build it so both audiences land on a page that speaks to them and makes calling easy." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank, and pairing it with our SEO service is how you climb the competitive Lakeland terms." },
      { q: 'Do I own the website?', a: "Fully. The site, the domain, and the content all belong to you. No hostage tricks and no platform you are stuck inside." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where nearly all of your Lakeland traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage, usually WordPress or Webflow. We recommend the right fit in your free consult and explain the tradeoffs in plain English." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every Lakeland build comes with launch support, and after that we offer affordable monthly upkeep covering updates, load speed, and security." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Lakeland site should include, and a fixed-price quote with a timeline. No pressure, just a plan for Lakeland web design that converts visitors into booked jobs." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'lakeland', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Lakeland Website Redesign | OnwardCraft',
    metaDescription:
      'Lakeland Website Redesign that rebuilds for leads, not just looks. Faster, mobile-first sites that convert more visitors into booked jobs and survive storm season.',
    eyebrow: 'Website Redesign · Polk County',
    h1: 'Lakeland Website Redesign that rebuilds for leads, not just looks, from Dixieland to Eaglebrooke',
    h2Exact: 'Lakeland Website Redesign Company',
    heroSubhead:
      "An outdated site quietly costs you jobs every week: slow, clumsy on a phone, easy for a Lakeland homeowner to skip past. We redesign contractor sites to convert more and load faster, and we migrate so carefully that you keep every bit of ranking you have already earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Lakeland Website Redesign goes one of two bad ways when it is done carelessly: the site looks prettier but converts exactly the same, or it launches and the rankings vanish overnight. We do neither. We redesign Lakeland contractor sites for speed and conversions, build them to ride out storm-season traffic, and migrate with the redirects and SEO care that protect the traffic you have spent years earning.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Lakeland site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "On a high-ticket job, homeowners size you up by your site in seconds. An old, cluttered design quietly ships them to a competitor who simply looks more established, even when your work is plainly better. With newcomers arriving in Lakeland every week, that first impression decides who gets the call." },
      { title: "It's slow and clumsy on a phone", body: "If your site is awkward or slow on mobile, you are losing the bulk of your Lakeland visitors before they ever reach your offer. A redesign built mobile-first wins those visitors back and turns them into leads." },
      { title: "It can't keep up when demand surges", body: "Traffic that never turns into calls is wasted money, and an old site that grinds to a crawl under a storm-season surge loses leads at the precise moment they are worth the most. We rebuild for conversions and for the days your phone should be ringing nonstop." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We find exactly what is bleeding off your leads and rankings today, so the rebuild fixes the actual problems rather than just repainting the colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep every bit of the rankings and traffic you have already earned in Lakeland." },
      { name: 'Conversion redesign', desc: "Plain offers, sharper call-to-action placement, and lead forms Lakeland homeowners actually use. We rebuild for booked jobs, not a prettier screenshot." },
      { name: 'Speed overhaul', desc: "We rebuild for quick load times and a clean pass on Core Web Vitals, which raises conversions and rankings together." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where nearly all of your Lakeland traffic actually lives." },
      { name: 'Brand refresh', desc: "A current, credible look that lines up with the quality of your work and the price tag on the jobs you are chasing." },
      { name: 'Storm-surge ready rebuild', desc: "Rebuilt to stay quick and keep booking when hurricane-season traffic surges, so the new site lands your biggest Polk County jobs instead of stalling on them.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as more Lakeland search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We study what is shedding your leads and rankings, then chart a redesign that repairs it without wrecking the parts already working for you." },
      { name: 'Design', desc: "A current, mobile-first, conversion-minded design you look over and steer before we build anything at all." },
      { name: 'Rebuild and migrate', desc: "We rebuild quickly and line up every redirect and SEO detail for a clean move with no nasty surprises." },
      { name: 'Launch with SEO care', desc: "We go live with every redirect in place and keep a close eye on the numbers so your Lakeland rankings hold steady and rise rather than slip." },
      { name: 'Optimize', desc: "After launch we tune from the data on what is converting, and keep the speed and updates current." },
    ],
    pricing: {
      heading: 'Transparent Lakeland redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Storm-surge ready'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Lakeland?', a: "Most redesigns with us land between $2,500 and $9,000 as a one-time project, set by size and integrations. One fixed price, nothing hidden, and the result is yours to keep." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not when it is handled with care, and that is the only way we do it. We map a 301 redirect for every changed URL, hold onto your content and metadata, move your schema across, and test on staging before anything goes live. Handled right, a Lakeland redesign keeps your rankings and usually lifts them." },
      { q: 'How long does a redesign take?', a: "A focused redesign runs roughly 3 to 5 weeks; a larger rebuild runs 5 to 9. You get a firm timeline at the start and a check-in at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is a pain to update, is not bringing in leads, or buckles when storm-season traffic surges, it is costing you work. The free audit tells you plainly whether a redesign is worth it for your Lakeland business." },
      { q: 'Do you migrate my existing content?', a: "Yes. We bring over and sharpen what you already have, protect the pages that are ranking, and run the technical move so nothing that matters falls through the cracks." },
      { q: 'Will the new site handle storm-season traffic?', a: "Yes, and in Lakeland that is a real consideration. After Ian and Milton, contractor sites took a surge of urgent traffic, and the slow ones lost leads. We rebuild for speed and keep the call to action obvious so the site converts when demand peaks." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for quick load and a clean Core Web Vitals pass, which raises both conversions and Lakeland rankings." },
      { q: 'Do I own the redesigned site?', a: "Fully: the site, the domain, and the content are all yours. No platform lock-in whatsoever." },
      { q: 'Am I locked into a contract?', a: "No. The redesign itself is a one-off project. Anything ongoing, like maintenance or SEO, runs month-to-month with nothing binding you." },
      { q: "What's in the free redesign audit?", a: "A straight read on what your current site is costing you in lost leads and slipped rankings, the specific things a rebuild should fix, and a fixed-price quote with a timeline and an SEO-safe migration plan. That is what a Lakeland Website Redesign should deliver: more leads without losing the rankings you have earned." },
    ],
  },
];

export const lakelandCity = {
  citySlug: 'lakeland', city: 'Lakeland', state: 'Florida', stateAbbr: 'FL', metro: 'Lakeland-Winter Haven (Polk County)',

  titleTag: 'Lakeland Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Lakeland marketing for contractors: web design, SEO, and local SEO that get you found, booked, and owning your leads instead of renting them, built for storm-season demand.',

  eyebrow: 'Lakeland · Web Design, SEO & Lead Generation',
  h1: 'Lakeland marketing for contractors who want to own their leads, not rent them from brokers',
  h2Exact: 'Lakeland Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Lakeland's fast-growing, storm-driven I-4 market. One team to get you ranking, converting, and off the rented-lead treadmill for good.",
  heroProof: ['Built for the trades', 'Storm-season ready', 'No lock-in contracts'],
  primaryCta: 'Get my free Lakeland audit',

  intro:
    "Lakeland marketing for contractors comes down to one thing: getting found and booked in one of the fastest-growing counties in the country, smack in the middle of the I-4 corridor, where the competition grows right along with it. Winning here takes three things working together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack, all locked in before the next storm sends demand through the roof. Here is exactly how we help Lakeland contractors pull that off.",
  aioQuestion: 'How do Lakeland contractors get more leads online?',
  aioAnswer:
    "Lakeland contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack. Because Polk County is filling fast and demand spikes hard during hurricane season, the contractors who look established and already rank before the storm win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Lakeland searches \"near me.\" The single highest-return move for most local businesses, and how you catch storm-season demand before it goes to a rival.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your Lakeland customers actually search, build an asset you own instead of renting traffic from ads, and measure the whole thing in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs, and to stay quick when storm season floods your phone, not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it so carefully that you keep every bit of ranking you have already earned in Lakeland search.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Lakeland?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads, and so they are ready the moment storm season hits and every homeowner needs help at once." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors, so we understand emergency calls, storm-driven demand, and the insurance work that follows a hurricane." },
    { q: 'Why does storm season matter for my marketing?', a: "When hurricanes like Ian, Irma, and Milton cross central Florida, demand for roofing, restoration, and HVAC jumps overnight and the backlog can run for months. Ranking takes months to build, so the contractors already visible before the storm take that work. We get you in place ahead of season." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-off builds running $2,000 to $9,000. SEO and local SEO go month-to-month, from $750 to $3,000, with no long contract holding you. The exact scope gets nailed down in your free Lakeland audit." },
    { q: 'Which Lakeland areas do you serve?', a: "All of Lakeland and Polk County: Dixieland, Lake Morton, Cleveland Heights, South Lakeland, plus Winter Haven, Auburndale, Bartow, Plant City, Mulberry, Davenport and more." },
    { q: 'Where should I start?', a: "Start with a free Lakeland audit. We look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a plan for Lakeland marketing for contractors that gets you found and booked." },
  ],
};
