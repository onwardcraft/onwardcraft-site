// PHILADELPHIA: per-metro, per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Philadelphia's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// PHILADELPHIA: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'What makes ranking in Philadelphia a fight all its own',
  body:
    "Roughly 6.2 million people call Greater Philadelphia home, and a huge share of them live behind brick that was laid generations ago. Close to 72% of city homes went up before 1960, and entire blocks of rowhomes predate the war. That single fact reshapes the trade work here. Old brick and old systems mean roof repairs, repointing, leaking basements, and pipes that were never sized for a modern house, and those calls come in hot and impatient. The climate piles on. Freeze-thaw swings from December into early spring crack shingles and split tired plumbing, so demand lurches upward right when the cold lands. Stack that on top of a tight East Coast market with a contractor working nearly every block, all elbowing for the same three pins on the map, and the picture is clear: the owner who already ranks is the one whose phone rings when the freeze hits.",
  pullQuote: 'In a city built this long ago, the contractor who already ranks is the one who books the repair when the pipes give out.',
  donut: {
    title: 'Philadelphia housing age',
    value: 72,
    centerLabel: 'built pre-1960',
    legend: [
      { label: 'Built before 1960', pct: 72, kind: 'teal' },
      { label: 'Built 1960 or later', pct: 28, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Winter freeze (Dec to Feb) and the spring repair rush (Mar to May)',
  seasonalDemand: [
    { m: 'J', v: 84, peak: true }, { m: 'F', v: 86, peak: true }, { m: 'M', v: 78, peak: true },
    { m: 'A', v: 72, peak: true }, { m: 'M', v: 66, peak: true }, { m: 'J', v: 52 },
    { m: 'J', v: 48 }, { m: 'A', v: 50 }, { m: 'S', v: 56 }, { m: 'O', v: 60 },
    { m: 'N', v: 70 }, { m: 'D', v: 80, peak: true },
  ],
  stats: [
    { value: '6.2M+', label: 'people across Greater Philadelphia' },
    { value: '~72%', label: 'of city homes were built before 1960, one of the oldest housing stocks in the US', accent: true },
    { value: 'Dec-May', label: 'winter freeze and spring repair, when trade demand spikes' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks' },
  ],
  neighborhoods: [
    'Fishtown', 'Northern Liberties', 'Society Hill', 'Queen Village', 'South Philly',
    'Manayunk', 'Roxborough', 'Chestnut Hill', 'Mount Airy', 'Germantown',
    'Fairmount', 'Port Richmond', 'East Falls', 'Old City', 'Brewerytown',
  ],
};

const AREAS = [
  'Philadelphia', 'Camden', 'Cherry Hill', 'King of Prussia', 'Norristown',
  'Bensalem', 'Upper Darby', 'Conshohocken', 'Drexel Hill', 'Levittown',
  'Media', 'Ardmore', 'Lansdale', 'Doylestown', 'West Chester',
];

const FOUNDER =
  "Here is the honest reason OnwardCraft exists. I got tired of watching skilled Philadelphia contractors wire a few thousand dollars a month to Angi and HomeAdvisor for leads that three rivals down the block bought at the same time. A business built on rented leads is built on sand. So our entire job is simple: get you ranking and converting for the work you want, in the neighborhoods you actually drive to, and make sure those leads are yours to keep. No year-long handcuffs. If the numbers are not moving, you cut us loose.";

const WHY = [
  {
    title: 'Trades are the only thing we do',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, general contractors. We know how emergency calls, repair tickets, and insurance jobs really come in, so every piece we build maps to how Philadelphia homeowners actually search for them.",
  },
  {
    title: 'We pull you off rented leads',
    body: "The goal is a pipeline with your name on it. Not one more monthly check to a broker reselling the same Fishtown homeowner to three other crews the same afternoon.",
  },
  {
    title: 'We genuinely know this city',
    body: "Pre-war rowhomes that need roofs and repointing, winters that split pipes, and street-level targeting from Fishtown to Chestnut Hill. That is the kind of local read a national shop cannot fake by dropping a city name into a template.",
  },
  {
    title: 'No contracts, nothing hidden',
    body: "Prices published on the page, reporting tied to actual leads, month-to-month once the first 90 days are up. If we stop earning it, you walk. That keeps the pressure squarely on us, where it should be.",
  },
];

const PROOF = {
  heading: "We are new, so here is the honest math instead of a wall of logos",
  body:
    "Most agencies open with a grid of client logos. We are a young, founder-led shop, and we will not invent a track record we have not earned yet. What we can put in front of you is the reasoning behind the work, drawn straight from Google's and the industry's own research on how people search close to home.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Picture this, and read it as a projection rather than a result we are claiming: a Philadelphia contractor pulls in roughly 1,500 local \"near me\" impressions in a month. Climbing out of page-two obscurity into the top three is the gap between a slow drip of calls and a calendar that fills itself, and the moment a cold snap floods Google with frozen-pipe and roof-leak searches, that gap stretches wider still. In your free audit we run the real figures for your shop: your current rankings, your search volume, and an honest 90 to 180 day route.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Philadelphia', state: 'Pennsylvania', stateAbbr: 'PA', metro: 'Greater Philadelphia',
  heroProof: ['Built for the trades', 'Old-home repair ready', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const philadelphiaLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'philadelphia', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Philadelphia Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Philadelphia Local SEO that puts your business in the Google Map Pack, so the "near me" call from Fishtown or Chestnut Hill lands with you, not the crew next door.',
    eyebrow: 'Local SEO · Greater Philadelphia',
    h1: 'Philadelphia Local SEO that puts your rowhome trade in the Fishtown Map Pack',
    h2Exact: 'Philadelphia Local SEO Company',
    heroSubhead:
      "When someone types \"near me,\" Google hands the map to three businesses and quietly hides the rest. We get you into that three, so the call reaches you instead of whoever happened to rank first, and so you are already standing there when winter sends roof-leak and frozen-pipe searches climbing.",
    primaryCta: 'Get my free Philadelphia audit',
    intro:
      "Philadelphia Local SEO hinges on a single question: when a homeowner in Fishtown or Chestnut Hill searches your trade plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll past them. This is a packed market with a contractor on nearly every block and some of the oldest housing in the nation, so earning a spot in the local 3-pack is the entire contest. Below is exactly how you win it.",
    aioQuestion: 'How do Philadelphia businesses rank higher in local search?',
    aioAnswer:
      "You climb by nailing four things: a Google Business Profile tuned to the precise services and neighborhoods you want, name, address, and phone details that match everywhere on the web, a real and steady flow of reviews, and local content tied to actual Philadelphia neighborhoods. Because the housing here is old and the winters bite, the businesses that win look established, answer fast, and are already ranked when freeze-driven repair demand surges.",
    problemHeading: "When the phone goes quiet, it usually traces back to one of these",
    painPoints: [
      { title: 'Rivals own all three pins on the map', body: "Search your own trade plus \"near me\" right now. Those three businesses Google pins to the map pull the lion's share of the clicks. If your name is not among them, the quality of your work barely registers, because most people never lay eyes on you. In a market packed this tight, breaking into that three is usually the highest-return move a Philadelphia shop can make." },
      { title: "You keep paying for leads that never belong to you", body: "Angi, Thumbtack, and HomeAdvisor sell the same Philadelphia homeowner to four contractors, then charge each of you to wrestle over them. It is a treadmill with no finish line. Local SEO flips the model: a homeowner finds you, calls you, and no one else got the same lead. Month by month you stop renting and start owning the pipeline." },
      { title: "You vanish the moment the freeze arrives", body: "When a hard freeze rolls in, searches for burst pipes, roof leaks, and dead furnaces spike overnight, and the contractors already on the map scoop them up. In a city stacked with century-old rowhomes, tired pipes, and brick begging for repointing, that demand returns every single winter. If you are buried when it lands, the work goes to whoever Google already trusts." },
    ],
    servicesHeading: 'What it really takes to put you on the map',
    services: [
      { name: 'Google Business Profile', desc: "The heaviest lever in the Map Pack. We tighten your categories, services, service area, photos, and posts so Google understands exactly which Philadelphia searches belong to you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to line up everywhere Google checks. We repair the listings that contradict each other and build the ones you are missing." },
      { name: 'Reviews that keep arriving', desc: "A simple engine that turns every finished job into a steady drip of reviews. It lifts your ranking and nudges the next homeowner to call." },
      { name: 'Neighborhood pages', desc: "Real pages for Fishtown, South Philly, Manayunk, Chestnut Hill and the rest, so you surface for the neighborhood someone is actually typing, not just \"Philadelphia.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The wiring beneath the surface that lets everything above it rank." },
      { name: 'Local link building', desc: "Mentions and links from Philadelphia sources Google respects, from local press to associations and partners. In a market this crowded, that is often what divides page one from page two." },
      { name: 'Old-home and winter repair targeting', desc: "We get your profile, pages, and reviews ranking for the repair work this city lives on, roofing, repointing, basement and pipe calls, before the freeze packs everyone's schedule.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now kicks off inside AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and name you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We pin down where you truly rank today across every service area and figure out which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP come first because they move fastest. Early lift here usually shows up inside a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is exactly why local SEO rewards starting now over waiting." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across the city and the suburbs, backed by the on-page work that makes them stick." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go claim the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For shops fighting across several Philadelphia areas at once.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors out to own the map across Greater Philadelphia.', features: ['Everything in Local Growth', 'Local link building', 'Old-home and winter demand targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Philadelphia?', a: "Most Philadelphia engagements land between $750 and $2,500 a month, set by how many neighborhoods and keywords you are chasing. Our tiers are right above this. No hidden fees, no long contract, and we lock the exact scope down in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile work can move inside a few weeks. The competitive Philadelphia keywords usually take 90 to 180 days of steady effort, because reviews and citations build up over time. Anyone promising you page one in 30 days in a market this dense is selling smoke." },
      { q: 'What makes Philadelphia local SEO different?', a: "Two forces. It is an old, packed East Coast city where roughly 72% of homes predate 1960, so repair work like roofing, repointing, and plumbing fuels a massive share of searches, and there is a contractor on nearly every block scrapping for the same pins. And the winters are harsh, so demand swings with the freeze. Your ranking has to be set before the cold snap, not scrambled together after." },
      { q: 'How does local SEO help me with winter repair demand?', a: "When a hard freeze hits Philadelphia, searches for burst pipes, roof leaks, ice dams, and no-heat calls jump overnight, and the businesses already in the Map Pack take those calls. We get you ranked and reviewed ahead of the cold so you catch that wave instead of fighting for leftovers once everyone else is booked solid." },
      { q: 'Which areas do you cover?', a: "All of Greater Philadelphia and the surrounding towns: Fishtown, South Philly, Manayunk, Chestnut Hill, Germantown, plus King of Prussia, Cherry Hill, Conshohocken, Media and more. We build genuine neighborhood pages rather than one catch-all Philadelphia page, because that is what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It is nearly all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand emergency calls, old-home repair work, and insurance jobs, and we shape your local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More \"near me\" research now starts inside AI instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It is fast becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an opening 90 days because that is roughly how long local SEO needs to show real movement. After that it is month-to-month. If we are not delivering, you leave, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that route leads straight to you. Over time you lean on the brokers less because the work is already finding you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your service areas, what your Map Pack rivals are doing to outpace you, the fixes that will move you fastest, and a realistic 90 to 180 day plan with the numbers run for your shop. It is a straight diagnosis of what your Philadelphia Local SEO needs to rank you on the map, not a pitch deck." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'philadelphia', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Philadelphia SEO Company | Rank and Stay There | OnwardCraft',
    metaDescription:
      'Philadelphia SEO that ranks contractors on Google and brings in leads you own. Lead-tied reporting, no lock-in, built for old-home repair demand.',
    eyebrow: 'SEO Services · Greater Philadelphia',
    h1: 'Philadelphia SEO that gets your South Philly trade to the top of Google and keeps it there',
    h2Exact: 'Philadelphia SEO Company',
    heroSubhead:
      "Ads switch off the second your card stops. SEO does the reverse: rank once for what your Philadelphia customers search and the leads keep landing. We build that ranking and tie every report back to real calls and booked jobs.",
    primaryCta: 'Get my free Philadelphia SEO audit',
    intro:
      "Philadelphia SEO boils down to one question: when someone searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in a dense, old-housing market where repair work never lets up, and we measure the whole thing in leads, not vanity traffic.",
    aioQuestion: 'How do Philadelphia businesses rank higher on Google?',
    aioAnswer:
      "They rank by repairing the technical foundation of the site, tuning each page to the exact terms customers type, publishing genuinely useful local content, and earning links from trusted Philadelphia sources. In a packed market full of century-old homes, keeping the site fast on mobile and ranking for repair-driven and winter terms are two of the quickest ways to break ahead.",
    problemHeading: "Three reasons your Philadelphia site is not bringing in work",
    painPoints: [
      { title: "You are stranded on page two", body: "Almost no one clicks past the first page of Google, and they rarely travel far down it either. If you are not among the top handful of results for what you sell, your site is effectively invisible, no matter how sharp it looks." },
      { title: "You are renting traffic from Google Ads", body: "Ads can pull their weight, but the instant your card stops, the leads stop with it. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the cost per lead." },
      { title: "You are missing the repair work this city runs on", body: "Philadelphia's housing is old and its winters are brutal, so demand for roofing, repointing, basement, and pipe work surges with the freeze. The contractors ranking for those terms in advance catch the spike. If your SEO ignores old-home and winter searches, you are handing away your busiest months." },
    ],
    servicesHeading: 'The SEO work that genuinely moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the behind-the-scenes fixes Google demands before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned to the exact terms your Philadelphia customers type: titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers ask, pull in links, and bring leads while you sleep." },
      { name: 'Link building', desc: "Authority from real Philadelphia and industry sources. In a market this competitive, links are frequently what split page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches right alongside your organic rankings." },
      { name: 'Lead-tied reporting', desc: "We report on calls, forms, and leads, not just rankings and traffic, so you always know what your SEO is genuinely worth." },
      { name: 'Old-home and seasonal SEO', desc: "We rank you for the old-home repair and winter searches that drive Philadelphia's busiest months, roofing, repointing, pipes, no-heat calls, so you are visible before demand spikes rather than after.", featured: true },
      { name: 'AI search and GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing slice of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then draw a roadmap around the keywords most likely to drive real Philadelphia leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile: the foundation everything above it needs in order to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus fresh local content, including the old-home and winter terms that decide the season here." },
      { name: 'Build authority', desc: "Links and citations from trusted Philadelphia and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we lean harder into what is working and push into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Philadelphia SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site chasing its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses set on owning Philadelphia search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Old-home & seasonal SEO', 'eCommerce / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Philadelphia?', a: "Most Philadelphia SEO engagements run $900 to $3,000 a month, set by how competitive your keywords are and how much content and link work you need. Our tiers sit above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Philadelphia?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, quicker on low-competition terms and slower on the toughest Philadelphia keywords. SEO compounds, so the gains keep stacking the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They play different roles. Ads buy instant traffic that dies the moment you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most contractors do best running SEO as the long-term engine and ads for short bursts." },
      { q: 'Should my Philadelphia SEO target winter and old-home repair?', a: "Yes. Around 72% of city homes predate 1960, so repair work drives a heavy share of searches year-round, and when a hard freeze lands, burst-pipe, roof-leak, and no-heat searches jump overnight. Ranking takes months to build, so you have to be in place before the cold, not chasing it afterward. We optimize for those repair and seasonal terms ahead of time so your busiest months land on you." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and lead-tied reporting. Higher tiers fold in old-home-and-seasonal and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an opening 90 days because SEO needs that long to show real movement, then it shifts to month-to-month. If we are not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which areas around Philadelphia do you cover?', a: "All of Greater Philadelphia and the towns around it: Fishtown, South Philly, Manayunk, Chestnut Hill, King of Prussia, Cherry Hill, Conshohocken, Media and more, with genuine local pages rather than one generic Philadelphia page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that route leads straight to you. The more you own your search visibility, the less you depend on paying brokers for shared leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to outpace you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your shop. It is a straight diagnosis of how Philadelphia SEO can move you onto page one and grow your organic traffic, not a pitch deck." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'philadelphia', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Philadelphia Web Design Company | Sites That Book Jobs | OnwardCraft',
    metaDescription:
      'Philadelphia Web Design that turns visitors into booked jobs: fast, mobile-first contractor sites built for rowhome repair demand from Manayunk to South Philly.',
    eyebrow: 'Web Design · Greater Philadelphia',
    h1: 'Philadelphia web design that turns Manayunk and South Philly visitors into booked jobs',
    h2Exact: 'Philadelphia Web Design Company',
    heroSubhead:
      "A handsome website that never generates a call is just a brochure. We build Philadelphia contractors fast, mobile-first sites engineered to turn visitors into booked work, and to hold their footing when a winter freeze floods your phone with repair calls.",
    primaryCta: 'Get my free quote',
    intro:
      "Philadelphia Web Design done properly fixes the silent leaks in most contractor websites: slow on a phone, a call button no one can find, no clear offer anywhere. We build mobile-first contractor sites that load fast, look like the professional you are, and turn Fishtown-to-Chestnut-Hill visitors into booked jobs, and that stay standing when a cold snap sends frozen-pipe and roof-leak traffic surging.",
    aioQuestion: 'What makes a good contractor website in Philadelphia?',
    aioAnswer:
      "A strong Philadelphia contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, builds trust with reviews and real project photos, and is engineered to absorb traffic spikes when a winter freeze drives repair calls. Because most local searches happen on mobile, phone speed and an obvious next step are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site is not bringing in work",
    painPoints: [
      { title: "It is a brochure, not a lead engine", body: "Plenty of contractor sites simply list services and stop there. No clear offer, no obvious next step, no reason to call you over the next guy. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It is too slow on a phone", body: "Most of your Philadelphia visitors are on mobile, and they bail if your site needs more than a few seconds to load. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking both." },
      { title: "It cannot survive a winter repair surge", body: "When a hard freeze hits, contractor sites get hammered with burst-pipe, roof-leak, and no-heat traffic, and the slow ones stall or hide the call button at the exact moment it matters most. We build sites that stay fast and convert under load, so you capture that demand instead of dropping it." },
    ],
    servicesHeading: "What goes into an OnwardCraft Philadelphia website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site shaped around your trade, your service area, and the jobs you actually want to book." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that is where nearly all of your Philadelphia traffic lives. Fast, thumb-friendly, easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, unmistakable call buttons, and lead forms placed where they actually get tapped. Every page carries a next step." },
      { name: 'Copy that sells', desc: "Words written for anxious homeowners that book the job, not filler that reads like every other site on the block." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank: clean structure, schema, fast load, and neighborhood-ready pages." },
      { name: 'Speed and Core Web Vitals', desc: "Tuned to load fast and clear Google's performance checks, which protects both your conversions and your rankings." },
      { name: 'Winter-surge ready', desc: "Built to stay fast and keep the call button front and center when a freeze sends repair traffic spiking, the moment that turns visitors into your biggest jobs.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts toward AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your service area, your best jobs, and your competitors, then map the site around booking more of the work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert, and you see it and shape it before a single line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it around what is actually converting." },
    ],
    pricing: {
      heading: 'Transparent Philadelphia web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors juggling several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Winter-surge ready'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Philadelphia?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, set by page count and integrations. Our tiers are above: fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes roughly 2 to 4 weeks; a larger custom build runs 4 to 8. We hand you a firm timeline up front and keep you posted through every stage." },
      { q: 'Will my site handle a winter repair traffic spike?', a: "Yes, and in Philadelphia that genuinely matters. When a hard freeze hits, contractor sites take a flood of burst-pipe and roof-leak traffic, and the slow ones lose leads right as demand peaks. We build fast and keep the call button obvious, so your site converts under load instead of buckling." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Philadelphia terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you cannot walk away from." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where nearly all of your Philadelphia traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage, usually WordPress or Webflow. We will recommend the right fit in your free consult and explain the tradeoffs in plain language." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month, and you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Philadelphia Web Design should include to turn visitors into booked jobs, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'philadelphia', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Philadelphia Website Redesign | Keep Your Rankings | OnwardCraft',
    metaDescription:
      'Philadelphia Website Redesign without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs and hold up in winter.',
    eyebrow: 'Website Redesign · Greater Philadelphia',
    h1: 'Philadelphia Website Redesign that converts your Northern Liberties rowhome site without losing your rankings',
    h2Exact: 'Philadelphia Website Redesign Company',
    heroSubhead:
      "An outdated site bleeds jobs every week: slow, awkward on a phone, easy to scroll past. We redesign Philadelphia contractor sites to convert more and load faster, and we migrate with care so you keep every bit of ranking you have already earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "A Philadelphia Website Redesign fails in one of two ways: the site looks sharper but converts the same, or it goes live and the rankings evaporate overnight. We refuse both. We rebuild contractor sites for speed and conversions, build them to shrug off winter repair-season traffic, and run an SEO-safe migration with the redirects and discipline that protect the traffic you already have, so you redesign without losing rankings.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign holds your rankings and lifts them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Philadelphia site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and quietly costs you trust", body: "On a high-ticket job, homeowners size you up by your site in seconds. An old, cluttered design nudges them toward a competitor who looks more established, even when your work is clearly better." },
      { title: "It is slow and clumsy on a phone", body: "If your site is clunky or slow on mobile, you are losing most of your Philadelphia visitors before they ever reach your offer. A redesign built mobile-first wins them back." },
      { title: "It cannot keep pace when demand surges", body: "Traffic that never turns into calls is wasted, and an old site that crawls under a winter repair surge sheds leads at the precise moment they are worth the most. We rebuild for conversions and for the days your phone should not stop ringing." },
    ],
    servicesHeading: "What goes into an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what is costing you leads and rankings today, so the redesign fixes real problems instead of just swapping colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you have already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, smarter call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals, which lifts conversions and rankings alike." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where nearly all of your Philadelphia traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the price of your jobs." },
      { name: 'Winter-surge ready rebuild', desc: "Rebuilt to stay fast and keep converting when a freeze sends repair traffic spiking, so the new site captures your biggest jobs instead of choking on them.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what is losing you leads and rankings, then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build a thing." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and watch closely so rankings hold and climb, not drop." },
      { name: 'Optimize', desc: "Post-launch tuning around what is converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Philadelphia redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Winter-surge ready'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Philadelphia?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, set by size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not when it is done carefully, and careful is exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign runs about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at every stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is a pain to update, is not bringing in leads, or stalls when winter repair traffic surges, it is costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and sharpen your existing content, preserve what is ranking, and handle the technical migration so nothing important slips through the cracks." },
      { q: 'Will the new site handle winter repair traffic?', a: "Yes, and in Philadelphia that is a real consideration. When a hard freeze hits, contractor sites take a surge of burst-pipe and roof-leak traffic, and the slow ones lose leads. We rebuild for speed and keep the call to action obvious so the site converts when demand peaks." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely: the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what your Philadelphia Website Redesign should fix, and a fixed-price quote with a timeline and an SEO-safe migration plan that rebuilds for leads without losing the rankings you have earned." },
    ],
  },
];

export const philadelphiaCity = {
  citySlug: 'philadelphia', city: 'Philadelphia', state: 'Pennsylvania', stateAbbr: 'PA', metro: 'Greater Philadelphia',

  titleTag: 'Philadelphia Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Philadelphia marketing for contractors: web design, SEO, and local SEO that gets you found and booked, and owns your leads instead of renting them, built for old-home repair.',

  eyebrow: 'Philadelphia · Web Design, SEO & Lead Generation',
  h1: 'Philadelphia marketing for contractors that gets your rowhome trade found and booked from Fishtown to Chestnut Hill',
  h2Exact: 'Philadelphia Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Philadelphia's dense, old-housing market. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Old-home repair ready', 'No lock-in contracts'],
  primaryCta: 'Get my free Philadelphia audit',

  intro:
    "Philadelphia marketing for contractors has to win in a tight East Coast market full of century-old homes, with a competitor on nearly every block. Winning here takes three pieces pulling together: a site that converts, SEO that ranks you for what people search, and local SEO that drops you into the Map Pack, all of it set before the next freeze sends repair demand climbing. As your Philadelphia digital marketing agency for the trades, here is how we help contractors pull off exactly that.",
  aioQuestion: 'How do Philadelphia contractors get more leads online?',
  aioAnswer:
    "Philadelphia contractors win more leads by pairing a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that takes the Google Map Pack. Because the city's housing ranks among the oldest in the country and winters drive repair demand, the contractors who look established and are already ranked before the freeze win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Break into the three businesses Google pins to the map when Philadelphia searches \"near me.\" The single highest-return move for most local shops, and how you catch winter repair demand.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually type, build an asset you own instead of renting traffic from ads, and measure it in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs, and to stay fast when a winter freeze floods your phone, not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it carefully so you keep every bit of ranking you have already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Philadelphia?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients pair a high-converting website with SEO and local SEO so they rank, convert, and own their leads, and stand ready when winter repair demand hits." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors, so we understand emergency calls, old-home repair work, and insurance jobs." },
    { q: 'Why does Philadelphia housing age matter for my marketing?', a: "Around 72% of city homes were built before 1960, one of the oldest housing stocks in the country. That means roofing, repointing, basement, and plumbing repair drive a huge share of searches, and a hard winter freeze sends burst-pipe and roof-leak demand spiking. Ranking takes months to build, so the contractors already visible before the cold take that work. We get you in place ahead of it." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Philadelphia areas do you serve?', a: "All of Greater Philadelphia and the towns around it: Fishtown, South Philly, Manayunk, Chestnut Hill, Germantown, plus King of Prussia, Cherry Hill, Conshohocken, Media and more." },
    { q: 'Where should I start?', a: "Start with a free Philadelphia audit. We will look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves in your Philadelphia marketing for contractors that will get you found and booked fastest. No pitch deck, just a plan." },
  ],
};
