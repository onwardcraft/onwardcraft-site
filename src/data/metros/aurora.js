// AURORA: per-metro x per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Aurora's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// AURORA: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'What it really takes to get found in Aurora',
  body:
    "Picture roughly 400,000 neighbors spread from Southlands down to Original Aurora, and you have Colorado's third-largest city: the most diverse place in the state and a true gateway for immigrant and refugee families, with thriving Ethiopian, Mexican, Korean, and East African communities. That mix changes the rules. A big slice of homeowners search in Spanish or want a contractor who answers in their language, and almost every agency pretends those buyers do not exist. You can win them by default. Two patterns decide who books the work. People here search on their phones with \"near me\" attached, and they tap a top result without scrolling. And this is the Front Range, the most damaging hail corridor in the country: when a storm sweeps the eastern plains, calls for roofing, restoration, and HVAC do not tick up, they detonate, and the backlog can stretch a full year. Layer on hard winters, dry baking summers, and high-altitude UV that shreds shingles, and the contractors already ranking are the ones who walk away with the jobs. The rest scramble.",
  pullQuote: 'When the next hail storm hits Aurora, the contractors already ranking are the ones who book the work.',
  donut: {
    title: 'How Aurora searches',
    value: 30,
    centerLabel: 'Hispanic',
    legend: [
      { label: 'Hispanic', pct: 30, kind: 'teal' },
      { label: 'Other', pct: 70, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Hail/storm roofing (Apr to Aug), winter snow & cold (Nov to Mar)',
  seasonalDemand: [
    { m: 'J', v: 64, peak: true }, { m: 'F', v: 60, peak: true }, { m: 'M', v: 50 }, { m: 'A', v: 78, peak: true },
    { m: 'M', v: 92, peak: true }, { m: 'J', v: 96, peak: true }, { m: 'J', v: 94, peak: true },
    { m: 'A', v: 82, peak: true }, { m: 'S', v: 54 }, { m: 'O', v: 58, peak: true },
    { m: 'N', v: 66, peak: true }, { m: 'D', v: 62, peak: true },
  ],
  stats: [
    { value: '~400K', label: 'people, Colorado\'s third-largest city' },
    { value: '~30%', label: 'Hispanic, the most diverse city in Colorado', accent: true },
    { value: 'Apr-Aug', label: 'hail season, when roofing demand explodes' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks' },
  ],
  neighborhoods: [
    'Southlands', 'Saddle Rock', 'Murphy Creek', 'Tallyn\'s Reach', 'Original Aurora',
    'Del Mar', 'Heather Gardens', 'Centennial', 'Parker', 'Green Valley Ranch',
    'Southshore', 'Tower', 'Hampden', 'Mission Viejo', 'Sterling Hills',
  ],
};

const AREAS = [
  'Aurora', 'Centennial', 'Parker', 'Green Valley Ranch', 'Southlands', 'Saddle Rock',
  'Murphy Creek', 'Tallyn\'s Reach', 'Southshore', 'Original Aurora', 'Heather Gardens',
  'Del Mar', 'Buckley', 'Watkins', 'Bennett',
];

const FOUNDER =
  "Here is the truth that started OnwardCraft: I got tired of watching solid Aurora contractors wire a few grand a month to Angi and HomeAdvisor for leads that three rivals bought the same morning. Rented leads are not a business; they are a tax you pay forever. So our whole job is simple. We get you ranking and converting for the work you actually want, in the neighborhoods you actually drive to, with leads that belong to you and only you. No 12-month handcuffs, no smoke. If we are not earning our keep, you cut us loose.";

const WHY = [
  {
    title: 'Trades are all we touch',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We live in your world: hail claims, 2am emergency calls, insurance scopes. Everything we build is shaped around how an Aurora homeowner actually hunts for help, not a generic playbook.",
  },
  {
    title: 'We pull you off rented leads',
    body: "The entire point is a pipeline you own. No more handing a broker your card so it can resell the same Southlands homeowner to three competitors before lunch. The calls come to you, and they stay yours.",
  },
  {
    title: 'We genuinely know Aurora',
    body: "Hail Alley storm surges, Colorado's most diverse city with real Spanish-language and multilingual search, Buckley Space Force families PCSing in and out, and street-level targeting from Tallyn's Reach to Original Aurora. None of it survives a national agency swapping a city name into a template.",
  },
  {
    title: 'Prices up front, no riddles',
    body: "You see the pricing before you sign. Reporting points at leads, not vanity charts. Month-to-month after 90 days. If the work is not paying off, you walk, and that keeps every ounce of pressure on us where it belongs.",
  },
];

const PROOF = {
  heading: "No logo wall yet, so here is the honest math",
  body:
    "Older agencies paper a page with client logos. We are a young, founder-led shop and we are not going to fake a history we have not lived. What we can hand you is the why behind this, pulled straight from Google's and the industry's own research on how people search for local help.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here is a back-of-napkin picture, clearly flagged as illustrative and not a result we are claiming: say an Aurora contractor pulls around 1,500 local \"near me\" impressions a month. Climbing from page-two invisibility into the top three is the gap between a trickle of calls and a calendar that is already full, and the morning after a hail storm that gap turns into a canyon. In your free audit we model the real figures for your business: your rankings, your search volume, and a straight 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Aurora', state: 'Colorado', stateAbbr: 'CO', metro: 'Aurora',
  heroProof: ['Built for the trades', 'Hail-season ready', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const auroraLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'aurora', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Aurora Local SEO Company | Win the Map Pack',
    metaDescription:
      'Aurora Local SEO that puts you in the three businesses Google pins to the map, so the call rings your phone, not a competitor down the road.',
    eyebrow: 'Local SEO · Aurora, CO',
    h1: 'Aurora Local SEO that ranks you above the competition before the next hail storm',
    h2Exact: 'Aurora Local SEO Company',
    heroSubhead:
      "Google pins exactly three businesses to the map on a \"near me\" search, and everyone underneath them might as well be invisible. We muscle you into that top three so the call lands with you instead of whoever happened to rank first, and so your phone is ready the morning a hail storm fills everyone else's.",
    primaryCta: 'Get my free Aurora audit',
    intro:
      "Aurora local SEO boils down to a single question: when a homeowner in Saddle Rock or Original Aurora types your service plus \"near me,\" are you one of the three businesses Google drops onto the map? Most people tap one of those three and never scroll an inch further. In Colorado's most diverse, fastest-growing city, sitting square in the worst hail corridor in the country, claiming one of those spots is the whole ballgame. Want to know how it is won? Read on.",
    aioQuestion: 'How do Aurora businesses rank higher in local search?',
    aioAnswer:
      "You climb by nailing four things: a Google Business Profile tuned to the exact services and neighborhoods you want, name-address-phone listings that match everywhere across the web, a steady flow of real reviews, and local content tied to actual Aurora neighborhoods. Because the city is so diverse and so hail-prone, the winners look established, answer fast, often serve customers in more than one language, and are already ranking when storm-season demand erupts.",
    problemHeading: "If your phone is quiet, it is almost always one of these",
    painPoints: [
      { title: 'Competitors own the three map spots', body: "Search your own trade plus \"near me\" right now. Those three businesses Google pins to the map? They soak up the overwhelming share of the clicks. Stay outside that trio and it barely matters how clean your work is, because most people never lay eyes on your name. Cracking into the top three is usually the single highest-return move an Aurora contractor can make this year." },
      { title: "You rent leads you never get to keep", body: "Angi, Thumbtack, and HomeAdvisor sell the same Aurora homeowner to four contractors, then bill every one of you to brawl over them. It is a treadmill that never stops. Local SEO flips it: a homeowner finds you, calls you, and nobody else got the ring. Run it long enough and you stop renting and start owning the pipeline outright." },
      { title: "You are not ready when the hail lands", body: "When a major storm rakes the Front Range, demand for roofing, restoration, and HVAC goes vertical inside a day, and the contractors already on the map answer first. Sit invisible when the next one hits and the work funnels to whoever Google already trusts. Ranking today is how you ride that wave instead of watching it roll past your shop." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The single biggest lever in the Map Pack. We sharpen your categories, services, service area, photos, and posts so Google understands precisely which Aurora searches belong to you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone must line up everywhere Google checks. We repair the listings that clash and build the ones you are missing, so nothing drags your ranking down." },
      { name: 'Reviews that keep coming', desc: "A no-fuss system that turns every finished Aurora job into a fresh review. It lifts your ranking and gives the next homeowner the nudge to actually dial your number." },
      { name: 'Neighborhood pages', desc: "Real pages for Southlands, Saddle Rock, Murphy Creek, Original Aurora and the rest, so you rank for the exact neighborhood someone is searching, not just the word \"Aurora.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The quiet plumbing under the hood that lets everything else you do actually rank." },
      { name: 'Local link building', desc: "Mentions and links from Aurora sources Google trusts: local press, trade associations, community partners. On the Front Range, this is often what separates page one from page two." },
      { name: 'Hail-season readiness', desc: "We get your profile, pages, and reviews ranking before hail season opens, so you catch the demand spike head-on instead of scrambling for scraps once the storm has already passed.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now begins in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you, trust you, and name you to the buyer.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We map exactly where you rank today across every service area and pin down which Aurora competitors are beating you in the Map Pack and the precise reasons why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP go first, because they move the fastest. Most Aurora contractors see early lift here inside a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine switch on. These compound week over week, which is exactly why local SEO rewards starting now instead of next quarter." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Aurora and Arapahoe County, backed by the on-page work that makes them stick." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and booked jobs, not vanity rankings. Then we go take the next neighborhood off the board." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For contractors fighting across several Aurora areas.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across Aurora.', features: ['Everything in Local Growth', 'Local link building', 'Hail-season demand targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Aurora?', a: "Most Aurora engagements land between $750 and $2,500 a month, set by how many neighborhoods and keywords you are chasing. The tiers above lay it out plainly. No hidden fees, no long contract, and we lock the exact scope in your free audit before you ever commit a dollar." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move inside a few weeks. The competitive Aurora keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising page one in 30 days in a market this crowded is selling you a fairy tale." },
      { q: 'What makes Aurora local SEO different?', a: "Two things stand out. It is the most diverse city in Colorado, so Spanish-language and multilingual search is a real edge nearly every agency ignores. And it sits in the worst hail corridor in the country, so trade demand swings hard with the storms, which means your ranking has to be set before the hail, never after." },
      { q: 'How does local SEO help me during hail season?', a: "When a hail storm hammers the Front Range, searches for roofing, restoration, and HVAC spike overnight, and the businesses already in the Map Pack grab those calls. We get you ranking and reviewed ahead of season so you catch that surge instead of fighting for leftovers once every competitor is already booked solid." },
      { q: 'Which areas do you cover?', a: "All of Aurora and the surrounding turf: Southlands, Saddle Rock, Murphy Creek, Tallyn's Reach, Original Aurora, Heather Gardens, plus Centennial, Parker, Green Valley Ranch and more. We build genuine neighborhood pages rather than one generic Aurora page, because that is what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It is essentially all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand emergency calls, hail-driven demand, and insurance jobs, and we build your local SEO directly around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research now starts inside AI instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. In Aurora it is fast becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days, because that is roughly how long local SEO needs to show real movement. After that it is month-to-month. If we are not delivering, you walk, and the accountability stays squarely on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never get to keep. We build rankings, a Google profile, and a review base that route leads straight to you. Month by month you lean on the brokers less, because the work is already coming to you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your service areas, what your Map Pack competitors are doing to beat you, the fixes that will move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. It is the fastest way to see what Aurora Local SEO can actually do for your phone. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'aurora', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Aurora SEO Company | OnwardCraft',
    metaDescription:
      'Aurora SEO that ranks contractors on Google and delivers leads you own. Reporting tied to revenue, no lock-in contracts, built for hail-season demand.',
    eyebrow: 'SEO Services · Aurora, CO',
    h1: 'Aurora SEO that climbs you past the Front Range competition on Google',
    h2Exact: 'Aurora SEO Company',
    heroSubhead:
      "Ads die the second you stop feeding them. SEO does the opposite: rank once for what your Aurora customers search and the leads keep arriving long after. We build that ranking and pin every report to real calls and booked jobs.",
    primaryCta: 'Get my free Aurora SEO audit',
    intro:
      "Aurora SEO comes down to one question: when someone searches what you do, do you land on page one or page two? Page two might as well be page fifty, because almost nobody goes there. We get contractors ranking for the money keywords in Colorado's most diverse, hail-prone, fastest-growing city, and we measure the win in leads, not vanity traffic that never picks up the phone.",
    aioQuestion: 'How do Aurora businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, tuning each page for the exact terms customers type, publishing genuinely useful local content, and earning links from trusted Aurora sources. In a diverse, competitive Front Range market, keeping the site fast on mobile and ranking early for hail-driven, seasonal terms are two of the quickest ways to pull ahead of the pack.",
    problemHeading: "Three reasons your Aurora site brings in no work",
    painPoints: [
      { title: "You are stranded on page two", body: "Hardly anyone clicks past the first page of Google, and they rarely scroll far down it. Miss the top handful of results for what you sell and your site is functionally invisible, no matter how sharp it looks or how good your crews are." },
      { title: "You are renting traffic from Google Ads", body: "Ads can work, but the instant your card declines, the leads vanish. SEO builds an asset you own: rankings that keep producing calls months and years after the work is finished, at a fraction of the cost per lead you pay for clicks." },
      { title: "You are invisible for the demand that pays", body: "Aurora demand swings with the season and the hail, and the contractors who rank for those terms in advance catch the spike. If your SEO skips hail-driven and seasonal searches, you are handing your busiest, most profitable months to someone else." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs handled before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned for the exact terms your Aurora customers search: titles, headings, content, and internal links all pulling the same direction." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers actually search, earn links, and bring in leads while you are out on the job." },
      { name: 'Link building', desc: "Authority from real Aurora and industry sources. In a market this competitive, links are frequently the thing that separates page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches right alongside your organic rankings, doubling your shots at the same buyer." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and booked leads, not just rankings and traffic, so you always know exactly what your SEO is worth in dollars." },
      { name: 'Hail & seasonal SEO', desc: "We rank you for the hail-driven and seasonal searches that fuel Aurora's busiest months, so you are visible before demand spikes instead of chasing it once it has cooled.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a fast-growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Aurora leads, not just clicks." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile: the foundation everything else needs in place before it can rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus fresh local content, including the seasonal and hail-driven terms that pay off in this market." },
      { name: 'Build authority', desc: "Links and citations from trusted Aurora and industry sources to push competitive keywords up onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what is working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Aurora SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Aurora search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Hail & seasonal SEO', 'eCommerce / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Aurora?', a: "Most Aurora SEO engagements run $900 to $3,000 a month, set by how competitive your keywords are and how much content and link work you need. The tiers above lay it out, with no hidden fees and no long contract to trap you." },
      { q: 'How long does SEO take to work in Aurora?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on low-competition terms and slower on the most contested Aurora keywords. SEO compounds, so the gains keep stacking the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops the moment you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Aurora contractors win by running SEO as the long-term engine and ads for short-term spikes." },
      { q: 'Should my Aurora SEO target hail season?', a: "Absolutely. When a hail storm hits the Front Range, searches for roofing, restoration, and HVAC spike overnight, and ranking takes months to build, so you must be in place before the season rather than chasing it after. We optimize those seasonal and hail-driven terms ahead of time so your busiest months land on your calendar." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. Higher tiers add hail-and-seasonal and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it shifts to month-to-month. If we are not delivering, you leave, simple as that." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search results." },
      { q: 'Which areas around Aurora do you cover?', a: "All of Aurora and the surrounding areas: Southlands, Saddle Rock, Murphy Creek, Original Aurora, Centennial, Parker, Green Valley Ranch and more, with genuine local pages rather than one generic Aurora page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for leads three competitors also bought." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. It shows exactly where Aurora SEO can move you onto page one and grow the organic traffic that turns into booked work. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'aurora', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Aurora Web Design | Sites That Book Jobs',
    metaDescription:
      'Aurora web design that turns visitors into booked jobs: fast, mobile-first sites built for contractors and ready for hail-season demand spikes.',
    eyebrow: 'Web Design · Aurora, CO',
    h1: 'Aurora web design that loads fast and books more jobs when hail season hits',
    h2Exact: 'Aurora Web Design Company',
    heroSubhead:
      "A handsome website that never rings the phone is just a brochure. We build Aurora contractors fast, mobile-first sites engineered to convert visitors into booked work, and to stay standing when hail season floods your line.",
    primaryCta: 'Get my free quote',
    intro:
      "Aurora web design lives or dies on one thing: whether the site turns visitors into booked jobs. Most Aurora contractor websites bleed leads in silence instead: slow on a phone, the call button buried, no clear offer, and no path for the big share of homeowners who would rather read in Spanish. Done right, web design fixes every one of those leaks. We build sites that load fast, look like the pro you already are, and turn Southlands-to-Original-Aurora visitors into booked jobs, sites that do not fold the moment a hail storm sends your traffic vertical.",
    aioQuestion: 'What makes a good contractor website in Aurora?',
    aioAnswer:
      "A good Aurora contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and is built to absorb traffic spikes during hail season. Because most Aurora searches happen on mobile and the city is highly diverse, mobile speed, an obvious next step, and often a second-language option separate a site that books jobs from one that simply sits there.",
    problemHeading: "Why your current site brings in no work",
    painPoints: [
      { title: "It is a brochure, not a lead engine", body: "Plenty of contractor sites just list services and stop there. No clear offer, no obvious next step, no reason to call you over the next guy in Centennial. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It crawls on a phone", body: "Most of your Aurora visitors are on mobile, and they bounce if your site takes more than a few seconds to load. Slow sites also rank worse, so you lose twice. We build fast, so you keep the visitor and the ranking both." },
      { title: "It cannot survive a hail-season surge", body: "After a big hail storm, contractor sites get slammed with a flood of traffic, and the slow ones buckle or bury the call button at the exact moment it matters most. We build sites that stay fast and keep converting under load, so you capture that demand instead of watching it crash your homepage." },
    ],
    servicesHeading: "What's in an OnwardCraft Aurora website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your service area, and the exact jobs you actually want more of." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that is where nearly all of your Aurora traffic lives. Fast, thumb-friendly, and a tap away from calling you." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where people actually use them. Every page hands the visitor a next step." },
      { name: 'Copy that sells', desc: "Words written for anxious homeowners who need to book today, not filler that reads like every other site, with Spanish-language options when your Aurora market calls for it." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank: clean structure, schema, fast load, and neighborhood-ready pages from day one." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects your conversions and your rankings at the same time." },
      { name: 'Hail-surge ready', desc: "Built to stay fast and keep the call button front and center when hail-season traffic spikes, the exact moment that turns visitors into your biggest jobs of the year.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more of Aurora's search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your service area, your best jobs, and your competitors, then map the site around booking more of the work you actually want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert, and you see it and shape it before a single line of code gets written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from the very first day." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it around what is actually converting, not guesses." },
    ],
    pricing: {
      heading: 'Transparent Aurora web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Hail-surge ready'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Aurora?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, set by page count and integrations. The tiers above lay it out: fixed price, no surprises, and you own the finished site outright." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build runs 4 to 8. We hand you a firm timeline up front and keep you posted through every stage." },
      { q: 'Will my site handle a hail-season traffic spike?', a: "Yes, and in Aurora that is no small thing. After a big hail storm, contractor sites take a flood of traffic, and the slow ones lose leads right when demand peaks. We build fast and keep the call button obvious, so your site converts under load instead of choking." },
      { q: 'Can you build a Spanish-language or multilingual site?', a: "Yes. Aurora is the most diverse city in Colorado, and a large share of homeowners search and read in Spanish or another language. We can build a second-language version or a fully multilingual site so you reach buyers most of your competitors quietly ignore." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platform you cannot leave when you choose to." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where nearly all of your Aurora traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage yourself, usually WordPress or Webflow. We will recommend the right fit in your free consult and explain the tradeoffs in plain English." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month, and you can leave whenever you like." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Aurora site should include, and a fixed-price quote with a timeline. It is the simplest way to see what Aurora web design can do for your booked-job numbers. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'aurora', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Aurora Website Redesign | OnwardCraft',
    metaDescription:
      'Aurora Website Redesign without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs and hold up in hail season.',
    eyebrow: 'Website Redesign · Aurora, CO',
    h1: 'Aurora Website Redesign done with a careful, SEO-safe migration that survives hail season',
    h2Exact: 'Aurora Website Redesign Company',
    heroSubhead:
      "An outdated site quietly costs you jobs every week: slow, clumsy on a phone, easy to scroll past. We redesign Aurora contractor sites to convert more and load faster, and we migrate with such care that you keep every bit of ranking you have already earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "An Aurora Website Redesign goes one of two bad ways for most contractors: the site looks sharper but converts exactly the same, or it launches and the rankings evaporate overnight. We refuse both. We redesign Aurora contractor sites for speed and conversions, build them to absorb hail-season traffic, and handle the SEO-safe migration with the redirects and care that protect the traffic you already fought to earn, all without losing rankings.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign holds your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Aurora site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and quietly costs you trust", body: "For a high-ticket job, an Aurora homeowner sizes you up by your site in seconds. An old, cluttered design hands them to a competitor who simply looks more established, even when your crews do far better work." },
      { title: "It is slow and clumsy on a phone", body: "If your site is sluggish or awkward on mobile, you lose the majority of your Aurora visitors before they ever reach your offer. A redesign built mobile-first wins those people back." },
      { title: "It cannot keep up when demand surges", body: "Traffic that never turns into calls is wasted, and an old site that bogs down under a hail-season surge loses leads at the precise moment they are worth the most. We rebuild for conversions and for the days your phone should be ringing nonstop." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what is costing you leads and rankings today, so the redesign fixes real problems instead of just repainting the colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you have already earned through the move." },
      { name: 'Conversion redesign', desc: "Clear offers, smarter call-to-action placement, and lead forms people actually use. We design for booked jobs, not just a prettier homepage." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals, which lifts both conversions and rankings together." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where nearly all of your Aurora traffic actually lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that finally matches the quality of your work and the price of your jobs." },
      { name: 'Hail-surge ready rebuild', desc: "Rebuilt to stay fast and keep converting when hail-season traffic spikes, so the new site captures your biggest jobs instead of choking on them.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as Aurora's search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what is losing you leads and rankings, then map a redesign that fixes it without breaking what already works for you." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build a single page." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean, lossless migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and watch closely so rankings hold and climb instead of dropping." },
      { name: 'Optimize', desc: "Post-launch tuning based on what is converting, plus ongoing speed work and updates." },
    ],
    pricing: {
      heading: 'Transparent Aurora redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Hail-surge ready'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Aurora?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, set by size and integrations. Fixed price, no surprises, and you own the result outright." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it is done carefully, and that is exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild runs 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is a pain to update, brings in no leads, or buckles when hail-season traffic surges, it is costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and sharpen your existing content, preserve what is ranking, and handle the technical migration so nothing important slips through the cracks." },
      { q: 'Will the new site handle hail-season traffic?', a: "Yes, and in Aurora that is a real consideration. After a big hail storm, contractor sites take a surge of traffic, and the slow ones lose leads. We rebuild for speed and keep the call to action obvious so the site converts when demand peaks." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely: the site, the domain, and the content. No platform lock-in, no leverage held over you." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan. It shows plainly whether an Aurora Website Redesign is worth it for your business." },
    ],
  },
];

export const auroraCity = {
  citySlug: 'aurora', city: 'Aurora', state: 'Colorado', stateAbbr: 'CO', metro: 'Aurora',

  titleTag: 'Aurora Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Aurora marketing for contractors: web design, SEO, and local SEO that get you found and booked, and let you own your leads instead of renting them.',

  eyebrow: 'Aurora · Web Design, SEO & Lead Generation',
  h1: 'Aurora marketing for contractors that fills your calendar after every hail storm',
  h2Exact: 'Aurora Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Aurora's diverse, hail-driven market. One team to get you ranking, converting, and off the rented-lead treadmill for good.",
  heroProof: ['Built for the trades', 'Hail-season ready', 'No lock-in contracts'],
  primaryCta: 'Get my free Aurora audit',

  intro:
    "Aurora marketing for contractors comes down to getting found and booked while you are scrapping for attention in Colorado's third-largest and most diverse city, where the field gets more crowded every year. Winning here takes three things working in concert: a site that converts, SEO that ranks you for what people actually search, and local SEO that drops you into the Map Pack, all of it set before the next hail storm sends demand through the roof. Here is how our web design and SEO for Aurora contractors pull that off.",
  aioQuestion: 'How do Aurora contractors get more leads online?',
  aioAnswer:
    "Aurora contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack. Because Aurora is highly diverse and demand spikes hard during hail season, the contractors who look established, serve customers in more than one language, and are already ranking before the storm win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Aurora searches \"near me.\" The single highest-return move for most local contractors, and how you catch hail-season demand.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search, build an asset you own instead of renting clicks from ads, and measure the win in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs, and to stay fast when hail season floods your phone, not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it with care so you keep every bit of ranking you have already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Aurora?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients pair a high-converting website with SEO and local SEO so they rank, convert, and own their leads, and so they are ready when hail season hits." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors, so we understand emergency calls, hail-driven demand, and insurance work." },
    { q: 'Why does hail season matter for my marketing?', a: "Aurora and the Denver metro sit in the most damaging hail corridor in the country. When a big storm rolls through, demand for roofing, restoration, and HVAC spikes overnight and the backlog can run a full year. Ranking takes months to build, so the contractors already visible before the storm take that work. We get you in place ahead of season." },
    { q: 'Can you market my business in Spanish?', a: "Yes. Aurora is the most diverse city in Colorado, with large Hispanic, Ethiopian, Korean, and East African communities, and a big share of homeowners search in Spanish or another language. We can build Spanish-language and multilingual pages so you reach buyers most agencies overlook." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Aurora areas do you serve?', a: "All of Aurora and the surrounding areas: Southlands, Saddle Rock, Murphy Creek, Tallyn's Reach, Original Aurora, Heather Gardens, Centennial, Parker, Green Valley Ranch and more. Wherever you work, our Aurora marketing for contractors is built to get you found and booked there." },
  ],
};
