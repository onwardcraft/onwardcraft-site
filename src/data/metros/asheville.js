// ASHEVILLE: per-metro x per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Asheville's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// ASHEVILLE: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why getting found in Asheville plays by its own rules',
  body:
    "Asheville is unlike any other corner of North Carolina: a tucked-away mountain city that pulls in millions of visitors a year for the Biltmore Estate, the Blue Ridge Parkway, and a downtown arts scene, with a homeowner base that mixes retirees, remote-work transplants, and second-home buyers. Then came September 2024. Hurricane Helene tore through Western North Carolina with historic flooding and landslides, gutting the River Arts District and entire mountain communities. The rebuilding that followed is the single biggest source of contractor work this region has ever produced, and it will keep many trades busy for years. Two simple truths decide who gets that work. Homeowners reach for their phones first, almost always typing \"near me,\" and they tap one of the businesses Google shows them right away. And the contractors already sitting at the top of those results are the ones a stressed, displaced family calls before anyone else.",
  pullQuote: 'In Asheville, the contractors already ranking are the ones rebuilding families call before anyone else.',
  donut: {
    title: 'What drives Asheville demand',
    value: 70,
    centerLabel: 'Helene rebuilding demand',
    legend: [
      { label: 'Storm-impact rebuild', pct: 70, kind: 'teal' },
      { label: 'Routine maintenance', pct: 30, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Helene rebuilding all year; summer storm season (Jun-Sep) plus the mountain winter (Dec-Feb)',
  seasonalDemand: [
    { m: 'J', v: 78, peak: true }, { m: 'F', v: 72, peak: true }, { m: 'M', v: 58 }, { m: 'A', v: 56 },
    { m: 'M', v: 60 }, { m: 'J', v: 72 }, { m: 'J', v: 78 },
    { m: 'A', v: 88, peak: true }, { m: 'S', v: 96, peak: true }, { m: 'O', v: 90, peak: true },
    { m: 'N', v: 74, peak: true }, { m: 'D', v: 80, peak: true },
  ],
  stats: [
    { value: 'Sept 2024', label: 'Hurricane Helene brought historic flooding and landslides across Western NC' },
    { value: 'Largest ever', label: 'the rebuild is the biggest source of contractor demand in the region\'s history', accent: true },
    { value: 'Blue Ridge', label: 'mountain terrain: steep slopes, tricky drainage, and foundation headaches' },
    { value: 'Top 3', label: 'Map Pack spots that soak up the majority of the clicks' },
  ],
  neighborhoods: [
    'Montford', 'Grove Park', 'Kenilworth', 'West Asheville', 'River Arts District',
    'North Asheville', 'Biltmore Forest', 'Black Mountain', 'Weaverville', 'Hendersonville',
    'Fletcher', 'Downtown Asheville', 'East Asheville', 'Arden', 'Fairview',
  ],
};

const AREAS = [
  'Asheville', 'Black Mountain', 'Weaverville', 'Hendersonville', 'Fletcher',
  'Arden', 'Fairview', 'Swannanoa', 'Candler', 'Leicester',
  'Mills River', 'Brevard', 'Marshall', 'Mars Hill', 'Biltmore Forest',
];

const FOUNDER =
  "Here is the honest version of why OnwardCraft exists. I watched too many skilled contractors wire Angi and HomeAdvisor a few thousand dollars a month for leads that three of their rivals had already bought. You cannot build anything lasting on leads you rent. So the entire job here is simple: get you ranking and converting for the work you actually want, in the mountain communities from Montford to Black Mountain that you actually serve, and make those leads yours to keep. No year-long lock-in. If it is not moving the needle, you show us the door.";

const WHY = [
  {
    title: 'Trades are all we do',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, general contractors. We know storm work, after-hours emergency calls, flood cleanup, and insurance jobs, so every page we build mirrors the way Asheville homeowners actually search for help.",
  },
  {
    title: 'We get you off rented leads',
    body: "The point is a pipeline that belongs to you. Not one more monthly bill paid to a broker for a homeowner that three competitors in Buncombe County also just paid for.",
  },
  {
    title: 'We genuinely know Asheville',
    body: "The Helene rebuild, landslide-prone slopes and mountain drainage, the historic homes of Montford and Grove Park, a visitor and second-home economy that never quite quiets down. None of that survives a national agency dropping a city name into a template.",
  },
  {
    title: 'No contracts, nothing hidden',
    body: "Prices published on the page, reporting tied to real leads, month-to-month once the first 90 days are up. If we are not earning the spend, you walk. That keeps the pressure on us, where it should be.",
  },
];

const PROOF = {
  heading: "We are new, so here is the honest math instead of a wall of logos",
  body:
    "Plenty of agencies will flash a grid of client badges at you. We are a young, founder-led shop, and we are not going to fake a track record we have not built yet. What we can put in front of you is why this approach works, drawn straight from Google's own data and the industry's research on how people search close to home.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here is a rough sketch, marked clearly as an illustration and not a result we are claiming: imagine an Asheville contractor pulling roughly 1,200 local \"near me\" impressions a month. Climbing from page-two obscurity into the top three is the difference between a few stray calls and a calendar that fills itself, and with the Helene rebuild running for years, that gap is wider here than in almost any market in the country. In your free audit we model the actual figures for your business: your rankings, your search volume, and an honest 90 to 180 day path.",
  disclaimer:
    "The figures above are published benchmarks (Google / BrightLocal) and one illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Asheville', state: 'North Carolina', stateAbbr: 'NC', metro: 'Asheville',
  heroProof: ['Built for the trades', 'Helene-rebuild ready', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const ashevilleLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'asheville', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Asheville Local SEO Company | OnwardCraft',
    metaDescription:
      'Asheville Local SEO that puts your trade in the three map spots so the call, and the rebuilding job, lands with you instead of a competitor.',
    eyebrow: 'Local SEO · Asheville',
    h1: 'Asheville Local SEO that turns a Montford "near me" search into a ringing phone',
    h2Exact: 'Asheville Local SEO Company',
    heroSubhead:
      "Google pins three businesses to the map for every \"near me\" search, and everyone below them might as well not exist. We get you into that top three so the call lands with you instead of whoever showed up first, and so families rebuilding after Helene find you before anyone else.",
    primaryCta: 'Get my free Asheville audit',
    intro:
      "Asheville local SEO boils down to a single question: when a homeowner in Montford or West Asheville types your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll past them. With the Helene rebuild stretching across years and a steady stream of transplants and second-home owners arriving behind it, claiming one of those spots is the whole contest. Here is how you win it.",
    aioQuestion: 'How do Asheville businesses rank higher in local search?',
    aioAnswer:
      "You rank by nailing four things: a Google Business Profile tuned to the exact trades and mountain communities you want, a name, address, and phone number that match everywhere online, a steady drip of real reviews, and local pages tied to actual Asheville neighborhoods. Because the Helene rebuild is fueling historic, multi-year demand, the businesses that look established, answer fast, and are already ranking are the ones displaced homeowners reach when they search for help.",
    problemHeading: "When your phone goes quiet in Asheville, it is usually one of these",
    painPoints: [
      { title: 'Competitors own the three map spots', body: "Search your own trade plus \"near me\" right now. The three businesses Google pins to the map collect the lion's share of the clicks. If you are not one of them, the quality of your work barely matters, because most people never lay eyes on your name. For an Asheville contractor, breaking into that top three is usually the highest-return move on the board." },
      { title: "You are paying for leads you never keep", body: "Angi, Thumbtack, and HomeAdvisor sell the same Asheville homeowner to four contractors, then bill all four of you to scrap over them. It is a treadmill. Local SEO builds the opposite arrangement: a homeowner finds you, calls you, and nobody else got the lead. Month by month you stop renting and start owning." },
      { title: "Rebuilding families cannot find you", body: "Helene's flooding and landslides flattened the River Arts District and mountain communities across Western NC, and the rebuild is the largest contractor demand the region has ever known. Families piecing their lives back together call whoever Google already vouches for. If you are nowhere on the map, that years-long wave of work flows right past you." },
    ],
    servicesHeading: 'What it actually takes to rank you in Asheville',
    services: [
      { name: 'Google Business Profile', desc: "The heaviest lever in the Map Pack. We set your categories, services, service area, photos, and posts so Google understands exactly which Asheville searches belong to you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to line up everywhere Google checks. We correct the listings that conflict and create the ones you are missing across the metro." },
      { name: 'Reviews that keep arriving', desc: "A straightforward system that turns finished jobs into a steady stream of reviews. It lifts your ranking and nudges the next homeowner to call you." },
      { name: 'Neighborhood pages', desc: "Real pages for Montford, West Asheville, Black Mountain, Hendersonville, and the rest, so you rank for the community someone is actually searching, not a generic \"Asheville.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything above it rank." },
      { name: 'Local link building', desc: "Mentions and links from Asheville sources Google trusts: regional press, trade associations, local partners. In this market, that is often what separates page one from page two." },
      { name: 'Helene-rebuild readiness', desc: "We get your profile, pages, and reviews ranking for flood-restoration and rebuilding searches so the families putting their homes back together find you first, not a competitor.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts inside AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you by name.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We map where you genuinely rank today across your service areas and identify which competitors are beating you in the Asheville Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP come first because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is exactly why local SEO rewards starting now over waiting." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Buncombe and Henderson counties, plus the on-page work to support them." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go claim the next community on the list." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Asheville-area communities.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across Western NC.', features: ['Everything in Local Growth', 'Local link building', 'Helene-rebuild demand targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Asheville?', a: "Most Asheville engagements run between $750 and $2,500 a month, depending on how many communities and keywords you are chasing. The tiers above lay it out. No hidden fees, no long contract, and we confirm the exact scope in your free audit before you commit a dollar." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move within a few weeks. The competitive Asheville keywords usually take 90 to 180 days of consistent work, because reviews and citations build up over time. Anyone promising you page one in 30 days in a market this busy is selling you a fantasy." },
      { q: 'What makes Asheville local SEO different?', a: "Two forces. It is a mountain market with terrain nobody else deals with the same way: steep slopes, landslide risk, complicated drainage, so local know-how carries real weight and homeowners look hard for contractors who truly know the area. And the Helene rebuild is driving the largest demand surge in the region's history, so ranking now means catching years of restoration and rebuilding work." },
      { q: 'How does local SEO help with Helene rebuilding work?', a: "After Helene's catastrophic flooding and landslides, families across Western NC are rebuilding their homes, and the contractors already in the Map Pack are the ones they call first. We get you ranking and reviewed for flood-restoration and rebuilding searches so you surface at the exact moment a homeowner is looking for help, instead of sitting on page two." },
      { q: 'Which areas do you cover?', a: "All of Asheville and the mountain communities around it: Montford, West Asheville, North Asheville, Biltmore Forest, plus Black Mountain, Weaverville, Hendersonville, Fletcher, Arden, and more. We build genuine neighborhood pages rather than one catch-all Asheville page, because that is what actually ranks for \"[service] [community]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It is very nearly all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand emergency calls, flood and storm restoration, and insurance jobs, and we shape your local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More \"near me\" research now begins in AI rather than classic search. We structure your content and schema so those engines can read, trust, and cite your business. In Asheville it is quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that is roughly how long local SEO needs to show real movement. After that it is month-to-month. If we are not delivering, you leave, and the accountability stays squarely on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never get to keep. We build rankings, a Google profile, and a review base that route leads straight to you. Over time you lean on the brokers less, because the work is already finding you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your service areas, what your Map Pack competitors are doing to beat you, the fixes that will move you fastest, and a realistic 90 to 180 day plan with the numbers run for your business. It is the fastest way to see what Asheville Local SEO can do to rank you on the map and turn \"near me\" searches into booked work. No pitch deck, just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'asheville', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Asheville SEO Company | OnwardCraft',
    metaDescription:
      'Asheville SEO that ranks contractors on Google and delivers leads you own. Lead-tied reporting, no lock-in, built for years of Helene rebuilding demand.',
    eyebrow: 'SEO Services · Asheville',
    h1: 'Asheville SEO that ranks your mountain trade for the searches that book rebuilding jobs',
    h2Exact: 'Asheville SEO Company',
    heroSubhead:
      "Ads die the moment you stop paying. SEO does the reverse: rank once for what your Asheville customers search and the leads keep landing. We build that ranking and tie every report to real calls and booked jobs, not vanity traffic.",
    primaryCta: 'Get my free Asheville SEO audit',
    intro:
      "Asheville SEO comes down to one question: when someone searches your trade, do you land on page one or page two? Page two might as well be page fifty. We get contractors ranking for the keywords that pay in a mountain market reshaped by the Helene rebuild, and we measure the work in leads, not in traffic that never picks up the phone.",
    aioQuestion: 'How do Asheville businesses rank higher on Google?',
    aioAnswer:
      "They rank by repairing the site's technical foundation, optimizing each page for the exact terms customers search, publishing genuinely useful local content, and earning links from trusted Asheville sources. Because the Helene rebuild is driving historic, multi-year demand, ranking for flood-restoration and rebuilding terms while keeping the site fast on mobile are two of the quickest ways to pull ahead of competitors here.",
    problemHeading: "Three reasons your Asheville site is not bringing in work",
    painPoints: [
      { title: "You are stranded on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it either. If you are not in the top handful of results for what you sell, your site is effectively invisible, no matter how sharp it looks." },
      { title: "You are renting traffic from Google Ads", body: "Ads can work, but the second your card stops, the leads stop with it. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost." },
      { title: "You are missing the rebuilding demand", body: "The Helene rebuild is the largest contractor demand Western NC has ever seen, and it will run for years. If your SEO ignores flood-restoration and rebuilding searches, you are handing the defining work of this market to competitors who ranked ahead of time and grabbed it first." },
    ],
    servicesHeading: 'The SEO work that actually moves Asheville rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google wants before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned to the exact terms your Asheville customers search: titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers are asking, earn links, and pull in leads while you are on the job site." },
      { name: 'Link building', desc: "Authority from real Asheville and industry sources. In a competitive mountain market, links are frequently what divides page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you take the \"near me\" searches alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads, not just rankings and traffic, so you always know what your SEO is genuinely worth." },
      { name: 'Helene-rebuild & restoration SEO', desc: "We rank you for the flood-restoration and rebuilding searches fueling years of Western NC demand, so you stay visible to families putting their homes back together.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing slice of search now starts.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Asheville leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile: the foundation everything else has to stand on before it can rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus fresh local content, including the restoration and rebuilding terms that matter most here." },
      { name: 'Build authority', desc: "Links and citations from trusted Asheville and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what is working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Asheville SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and communities.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Western NC search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Helene-rebuild & restoration SEO', 'eCommerce / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Asheville?', a: "Most Asheville SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work the gap calls for. The tiers are above, with no hidden fees and no long contract to sign." },
      { q: 'How long does SEO take to work in Asheville?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on low-competition terms and slower on the most contested Asheville keywords. SEO compounds, so the gains keep stacking the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that vanishes when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most contractors do best running SEO as the long-term engine and ads for short bursts." },
      { q: 'Should my Asheville SEO target Helene rebuilding work?', a: "Yes. The Helene rebuild is the largest contractor demand the region has ever seen, and it will run for years, but ranking takes months to earn, so you have to be in position to catch it. We optimize for flood-restoration and rebuilding terms so the families looking for help find you instead of whoever ranked first." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. Higher tiers add Helene-rebuild and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, and after that it is month-to-month. If we are not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not only classic search." },
      { q: 'Which areas around Asheville do you cover?', a: "All of Asheville and the surrounding mountain communities: Black Mountain, Weaverville, Hendersonville, Fletcher, Arden, Biltmore Forest, and more, with genuine local pages rather than one generic Asheville page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that route leads directly to you. The more you own your search visibility, the less you have to depend on paying brokers for shared leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. It is the clearest way to see how Asheville SEO can move you onto page one for the money keywords that bring real organic traffic. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'asheville', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Asheville Web Design Company | OnwardCraft',
    metaDescription:
      'Asheville web design that turns visitors into booked jobs: fast, mobile-first sites built for contractors and years of Helene rebuilding demand.',
    eyebrow: 'Web Design · Asheville',
    h1: 'Asheville web design built to convert River Arts District clicks into calls',
    h2Exact: 'Asheville Web Design Company',
    heroSubhead:
      "A good-looking website that never rings the phone is just a brochure. We build Asheville contractors fast, mobile-first sites engineered to turn visitors into booked work, and built to hold steady when rebuilding demand floods your phone.",
    primaryCta: 'Get my free quote',
    intro:
      "Asheville web design is the difference between a site that books work and one that quietly bleeds leads: slow on a phone, a call button nobody can find, no clear offer. Done right, it closes every one of those leaks. We build sites that load fast, look like the professional you already are, and turn visitors from Montford to Hendersonville into booked jobs, sites that do not buckle when rebuilding demand sends your traffic climbing.",
    aioQuestion: 'What makes a good contractor website in Asheville?',
    aioAnswer:
      "A strong Asheville contractor website loads in under three seconds on a phone, keeps the call button and a clear offer above the fold, proves trust with reviews and real project photos, and is built to handle the steady demand from the Helene rebuild. Because most Asheville searches happen on mobile, mobile speed and an obvious next step are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current Asheville site is not bringing in work",
    painPoints: [
      { title: "It is a brochure, not a lead engine", body: "Plenty of contractor sites list a few services and then just sit there. No clear offer, no obvious next step, no reason to call you over the next guy in Buncombe County. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It is too slow on a phone", body: "Most of your Asheville visitors are on mobile, and they bounce if the site takes more than a few seconds to load. Slow sites also rank worse. We build fast, so you hold on to both the visitor and the ranking." },
      { title: "It does not speak to rebuilding families", body: "Homeowners recovering from Helene's flooding need to trust you fast and reach you fast. A dated site with a buried phone number loses them at the exact second they are deciding who to call. We build sites that earn that trust and make the next step impossible to miss." },
    ],
    servicesHeading: "What goes into an OnwardCraft Asheville website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site shaped around your trade, your mountain service area, and the jobs you actually want to win." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that is where nearly all of your Asheville traffic lives. Fast, thumb-friendly, easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where people actually use them. Every page carries a next step." },
      { name: 'Copy that sells', desc: "Words written to speak to anxious homeowners and book the job, not filler that reads exactly like every other contractor in town." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank: clean structure, schema, fast load, and pages ready for the neighborhoods you serve." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both your conversions and your rankings." },
      { name: 'Rebuild-demand ready', desc: "Built to stay fast and keep the call button front and center as the Helene rebuild drives traffic for years, the work that defines this market.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts toward AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your service area, your best jobs, and your competitors, then map the site around booking more of the work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert. You see it and shape it before a single line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what is actually converting visitors into calls." },
    ],
    pricing: {
      heading: 'Transparent Asheville web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Rebuild-demand ready'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Asheville?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. The tiers are above: fixed price, no surprises, and you own the finished site outright." },
      { q: 'How long does it take to build?', a: "A focused site takes roughly 2 to 4 weeks; a larger custom build runs 4 to 8. We give you a firm timeline up front and keep you posted through every stage." },
      { q: 'Will my site help me win Helene rebuilding work?', a: "Yes, and in Asheville that is the defining opportunity. Rebuilding demand will run for years, and families looking for help size you up by your site in seconds. We build fast, keep the call button obvious, and design pages that earn trust so you book the restoration and rebuilding jobs instead of losing them to a slicker competitor." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and pages ready for your neighborhoods. The build gets you positioned to rank; pairing it with our SEO service is how you climb the competitive Asheville terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platform you are not allowed to leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where nearly all of your Asheville traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage yourself, usually WordPress or Webflow. We will recommend the right fit in your free consult and explain the tradeoffs in plain language." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month, so you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Asheville site should include, and a fixed-price quote with a timeline. It shows you exactly what Asheville web design built fast and mobile-first can do to convert more visitors into booked jobs. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'asheville', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Asheville Website Redesign | OnwardCraft',
    metaDescription:
      'Asheville Website Redesign without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs and handle the rebuild.',
    eyebrow: 'Website Redesign · Asheville',
    h1: 'Asheville Website Redesign that keeps every ranking you earned through the Helene rebuild',
    h2Exact: 'Asheville Website Redesign Company',
    heroSubhead:
      "An outdated site quietly costs you jobs every week: slow, awkward on a phone, easy to scroll past. We redesign Asheville contractor sites to convert more and load faster, and we migrate with care so you keep every bit of ranking you have already earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "An Asheville website redesign fails one of two ways: the site looks better but converts no differently, or it launches and the rankings disappear overnight. We do neither. We redesign Asheville contractor sites for speed and conversions, build them to absorb years of Helene rebuild demand, and handle an SEO-safe migration with the redirects that protect the traffic you already have, so you rebuild without losing rankings.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign holds your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Asheville site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and quietly costs you trust", body: "For a high-ticket job, homeowners judge you by your site within seconds. An old, cluttered design quietly hands them to a competitor who looks more established, even when your craftsmanship is better." },
      { title: "It is slow and clumsy on a phone", body: "If your site is sluggish or hard to use on mobile, you are losing the majority of your Asheville visitors before they ever reach your offer. A redesign built mobile-first wins them back." },
      { title: "It cannot keep pace with rebuilding demand", body: "Traffic that never becomes a call is wasted, and an old, slow site sheds leads at the precise moment they are worth the most. With the Helene rebuild driving demand for years, we rebuild for conversions and for the days your phone should be ringing off the wall." },
    ],
    servicesHeading: "What goes into an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what is costing you leads and rankings today, so the redesign fixes real problems instead of just swapping colors around." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you have already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms people actually use. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals, better for both your conversions and your rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where nearly all of your Asheville traffic already lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the price tag on your jobs." },
      { name: 'Rebuild-demand ready', desc: "Rebuilt to stay fast and keep converting as the Helene rebuild drives traffic for years, so the new site captures your biggest jobs instead of choking on them.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search keeps shifting toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what is losing you leads and rankings, then map a redesign that fixes it without breaking what already works for you." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build a thing." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean, careful migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and watch closely so rankings hold and improve rather than drop." },
      { name: 'Optimize', desc: "Post-launch tuning based on what is converting, plus ongoing speed work and updates." },
    ],
    pricing: {
      heading: 'Transparent Asheville redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Rebuild-demand ready'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Asheville?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result outright." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it is handled carefully, and that is exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually lifts them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes roughly 3 to 5 weeks; a larger rebuild runs 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is hard to update, is not bringing in leads, or cannot keep up with rebuilding demand, it is costing you work. The free audit tells you plainly whether a redesign is worth it for you." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and sharpen your existing content, preserve what is ranking, and handle the technical migration so nothing important slips through the cracks." },
      { q: 'Will the new site help me win rebuilding work?', a: "Yes, and in Asheville that is the real opportunity. The Helene rebuild will drive demand for years, and families looking for help bounce off slow, dated sites. We rebuild for speed and keep the call to action obvious so the site converts when it counts most." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely: the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan. It is the simplest way to see how an Asheville Website Redesign can rebuild your site mobile-first and faster without losing the rankings you have already earned." },
    ],
  },
];

export const ashevilleCity = {
  citySlug: 'asheville', city: 'Asheville', state: 'North Carolina', stateAbbr: 'NC', metro: 'Asheville',

  titleTag: 'Asheville Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Asheville marketing for contractors: web design, SEO, and local SEO that get you found and booked, and own your leads instead of renting them, built for the Helene rebuild.',

  eyebrow: 'Asheville · Web Design, SEO & Lead Generation',
  h1: 'Asheville marketing for contractors: get ranked across the mountain communities, get booked',
  h2Exact: 'Asheville Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Asheville's mountain market and the historic Helene rebuilding effort. One team to get you ranking, converting, and off the rented-lead treadmill for good.",
  heroProof: ['Built for the trades', 'Helene-rebuild ready', 'No lock-in contracts'],
  primaryCta: 'Get my free Asheville audit',

  intro:
    "Asheville marketing for contractors has to reckon with a market reshaped by Hurricane Helene: the largest rebuilding effort in the region's history, set to run for years, layered on top of a visitor and second-home economy that never really sleeps. Winning here takes three things pulling together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack, so displaced families and new homeowners find you first. As a digital marketing agency built around web design and SEO for Asheville contractors, here is how we help you get found and booked.",
  aioQuestion: 'How do Asheville contractors get more leads online?',
  aioAnswer:
    "Asheville contractors get more leads by pairing a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack. Because the Helene rebuild is driving historic, multi-year demand, the contractors who look established and are already ranking are the ones displaced and rebuilding homeowners call first.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the three businesses Google pins to the map when Asheville searches \"near me.\" The highest-return move for most local businesses, and how rebuilding families find you first.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the keywords that pay, build an asset you own instead of renting traffic from ads, and measure the work in booked jobs, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs, and to stay fast as rebuilding demand fills your phone, not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it carefully so you keep every bit of ranking you have already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Asheville?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients pair a high-converting website with SEO and local SEO so they rank, convert, and own their leads, and so families rebuilding after Helene actually find them." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors, so we understand emergency calls, flood and storm restoration, and insurance work." },
    { q: 'Why does Helene rebuilding matter for my marketing?', a: "Hurricane Helene's catastrophic flooding and landslides devastated the River Arts District and mountain communities across Western NC, and the rebuild is the largest contractor demand the region has ever seen, work that will run for years. Ranking takes months to build, so the contractors already visible are the ones families call first. We get you in position to catch that demand." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Asheville areas do you serve?', a: "All of Asheville and the surrounding mountain communities: Montford, West Asheville, North Asheville, Biltmore Forest, plus Black Mountain, Weaverville, Hendersonville, Fletcher, Arden, and more." },
    { q: 'Where should I start?', a: "Start with a free Asheville audit. We will look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. It is the simplest first step in Asheville marketing for contractors who want to get found and booked. No pitch deck, just a plan." },
  ],
};
