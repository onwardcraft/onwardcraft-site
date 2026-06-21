// SAN ANTONIO: per-metro, per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across San Antonio's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// SAN ANTONIO: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'What makes ranking in San Antonio a different fight',
  body:
    "Close to 2.5 million people live across the San Antonio metro, and the count climbs every month as Sun Belt families and military households keep arriving. Two facts shape this market like nowhere else. The first is language: roughly 64% of residents are Hispanic, the majority of Mexican origin, and a large slice of homeowners research, compare, and hire entirely in Spanish. The contractor who answers in Spanish picks up jobs the English-only sites never even hear about. The second is the heat. Triple-digit days stretch from June through September, heat-index numbers push past 110, and that pressure drives AC, electrical, and roofing calls through the roof. Layer in Joint Base San Antonio (Lackland, Randolph, and Fort Sam Houston) and you get constant PCS turnover feeding the demand. The businesses sitting at the top of the map are the ones cashing in on all of it.",
  pullQuote: 'In a city that is nearly two-thirds Hispanic, the contractor who answers in Spanish books the jobs the English-only sites never hear about.',
  donut: {
    title: 'How San Antonio searches',
    value: 64,
    centerLabel: 'Hispanic',
    legend: [
      { label: 'Hispanic residents', pct: 64, kind: 'teal' },
      { label: 'Everyone else', pct: 36, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Summer heat (Jun-Sep), peaking Jul-Aug',
  seasonalDemand: [
    { m: 'J', v: 38 }, { m: 'F', v: 36 }, { m: 'M', v: 44 }, { m: 'A', v: 54 },
    { m: 'M', v: 66 }, { m: 'J', v: 82, peak: true }, { m: 'J', v: 94, peak: true },
    { m: 'A', v: 96, peak: true }, { m: 'S', v: 80, peak: true }, { m: 'O', v: 56 },
    { m: 'N', v: 44 }, { m: 'D', v: 40 },
  ],
  stats: [
    { value: '2.5M+', label: 'people across the San Antonio metro' },
    { value: '~64%', label: 'of residents are Hispanic, and many search and hire in Spanish', accent: true },
    { value: 'Jun-Sep', label: 'triple-digit heat, when AC and roofing demand spikes' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks' },
  ],
  neighborhoods: [
    'Alamo Heights', 'Stone Oak', 'Southtown', 'King William', 'Monte Vista',
    'Terrell Hills', 'Olmos Park', 'Tobin Hill', 'Government Hill', 'Dignowity Hill',
    'Shavano Park', 'Castle Hills', 'Helotes', 'Alamo Ranch', 'Westover Hills',
  ],
};

const AREAS = [
  'San Antonio', 'Schertz', 'Cibolo', 'New Braunfels', 'Boerne', 'Helotes',
  'Converse', 'Universal City', 'Live Oak', 'Leon Valley', 'Alamo Heights',
  'Terrell Hills', 'Castle Hills', 'Selma', 'Fair Oaks Ranch',
];

const FOUNDER =
  "Let me be honest with you about why OnwardCraft exists. I got tired of watching skilled San Antonio contractors wire a few grand a month to Angi and HomeAdvisor for leads that three of their competitors had already bought. Rented leads are not a business; they are a tax. So here is our entire reason for being: get you ranking and converting for the work you want, in the neighborhoods you serve from King William to Stone Oak, with every one of those leads belonging to you. No year-long handcuffs. If we stop earning it, you stop paying.";

const WHY = [
  {
    title: 'The trades are all we touch',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We know what an emergency AC call sounds like in a 100-degree July and how San Antonio homeowners actually search for it, so every page we build is shaped around that reality.",
  },
  {
    title: 'We pull you off rented leads',
    body: "Our aim is a pipeline that is yours, not one more monthly bill to a lead broker reselling the same homeowner to the three competitors down the road from you.",
  },
  {
    title: 'We genuinely speak San Antonio',
    body: "A metro that is nearly two-thirds Hispanic with plenty of homeowners hiring in Spanish, demand that explodes when the summer heat lands, and targeting tuned block by block. A national shop cannot fake that by dropping a city name into a template.",
  },
  {
    title: 'No contracts, nothing hidden',
    body: "Prices published on the page, reporting tied to real leads, and month-to-month billing after the first 90 days. If we are not delivering, you walk. That keeps the pressure squarely on us, where it should be.",
  },
];

const PROOF = {
  heading: "We are new, so here is the honest math instead of a wall of logos",
  body:
    "A lot of agencies will flash a grid of client logos at you. We are a young, founder-led shop, and we will not pretend to a track record we have not built yet. What we can hand you is the reasoning behind why this works, pulled straight from Google's and the industry's own research on how people search locally.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here is a rough sketch, labelled plainly as a projection and not a result we are claiming: picture a San Antonio contractor pulling around 1,500 local \"near me\" impressions a month. Climbing from buried-on-page-two into the top three is the gap between a slow drip of calls and a calendar that is fully booked. When the July heat takes out every AC in town, that gap only gets wider. In your free audit we model the real figures for your business: your current rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'San Antonio', state: 'Texas', stateAbbr: 'TX', metro: 'San Antonio',
  heroProof: ['Built for the trades', 'Bilingual-ready', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const sanAntonioLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'san-antonio', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'San Antonio Local SEO Company | OnwardCraft',
    metaDescription:
      'When San Antonio searches your service, three businesses fill the map. We put you in those three so the call rings your phone, not a competitor.',
    eyebrow: 'Local SEO · San Antonio',
    h1: 'When San Antonio searches for what you do, be the first name on the map',
    h2Exact: 'San Antonio Local SEO Company',
    heroSubhead:
      "Google pins exactly three businesses to the map for a \"near me\" search, and almost everyone taps one of them. Below that top three, you basically vanish. We get you into those three spots so the call lands with you, and so you are already there when the summer heat lights up every phone in the city.",
    primaryCta: 'Get my free San Antonio audit',
    intro:
      "San Antonio local SEO really comes down to a single question: when a homeowner in Stone Oak or Southtown types your service plus \"near me,\" are you one of the three businesses Google drops onto the map? Most people tap one of those three and never scroll an inch further. In a market this large, this Hispanic, and this brutal in summer, earning one of those spots is the entire contest. Here is how you take one.",
    aioQuestion: 'How do San Antonio businesses rank higher in local search?',
    aioAnswer:
      "You climb by nailing four things: a Google Business Profile tuned to the precise services and neighborhoods you want, consistent name, address, and phone details across the web, a steady flow of genuine reviews, and local content tied to actual San Antonio neighborhoods. Because the metro runs roughly two-thirds Hispanic and demand surges in the summer heat, the winners also serve Spanish searchers and lock in their ranking before the AC calls start pouring in.",
    problemHeading: "When the phone goes quiet, it is usually one of these three",
    painPoints: [
      { title: 'Competitors are sitting in all three map spots', body: "Pull up your own service plus \"near me\" right now. Those three businesses Google pins to the map? They scoop up the lion's share of the clicks. If your name is not among them, the quality of your work barely matters, because most searchers never lay eyes on you. Cracking that top three is usually the single highest-return move a San Antonio contractor can make." },
      { title: "You are paying for leads that are never yours", body: "Angi, Thumbtack, and HomeAdvisor sell the same San Antonio homeowner to four contractors at once, then bill every one of you to scrap over them. It is a treadmill with no finish line. Local SEO builds the reverse: a homeowner finds you, calls you, and no one else got the lead. Bit by bit you stop renting and start owning the pipeline." },
      { title: "Half the city cannot find you", body: "Roughly two-thirds of San Antonio is Hispanic, and a real share of homeowners search and hire in Spanish. If your profile and site speak only English, you are handing those calls to whoever shows up bilingual. Almost no contractor here bothers to fix it, which is exactly why it is such a cheap edge to grab." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The heaviest lever in the Map Pack by far. We tune your categories, services, service area, photos, and posts so Google understands precisely which San Antonio searches belong to you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to line up everywhere Google looks. We straighten out the listings that contradict each other and build the ones you are missing." },
      { name: 'Reviews that keep arriving', desc: "A simple engine that turns every finished job into a fresh review. It lifts your ranking and gives the next homeowner a reason to actually dial your number." },
      { name: 'Neighborhood pages', desc: "Real pages for Stone Oak, Southtown, Alamo Heights, Helotes, and the rest, so you rank for the exact neighborhood someone is searching instead of a generic \"San Antonio.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, and mobile speed. The plumbing under the hood that lets everything else climb." },
      { name: 'Local link building', desc: "Mentions and links from San Antonio sources Google already trusts: local press, trade associations, and partners. Here, that is often the difference between page one and page two." },
      { name: 'Bilingual local SEO', desc: "We build your profile, pages, and reviews to reach the enormous Spanish-speaking share of San Antonio, so you capture calls the English-only competitors never even register.", featured: true },
      { name: 'AI search readiness', desc: "More and more \"near me\" research now kicks off inside AI Overviews, ChatGPT, and Perplexity. We structure your content so those engines can read you and name you in their answers.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We map where you genuinely rank today across every service area and pin down which competitors are out-ranking you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move quickest. You usually see early lift here inside the first few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week after week, which is exactly why starting now beats starting in July." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Bexar County and the surrounding cities, backed by the on-page work that makes them stick." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and booked work, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several San Antonio areas.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across San Antonio.', features: ['Everything in Local Growth', 'Local link building', 'Bilingual / Spanish-language SEO', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in San Antonio?', a: "Most San Antonio engagements land between $750 and $2,500 a month, set by how many neighborhoods and keywords you are chasing. Our tiers sit right above this. No hidden fees, no long contract, and we lock the exact scope during your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile fixes can move inside a few weeks. The competitive San Antonio keywords usually need 90 to 180 days of steady work, because reviews and citations build up over time. Anyone promising you page one in 30 days in a metro this size is selling you a fairy tale." },
      { q: 'What makes San Antonio local SEO different?', a: "Two forces stand out. The metro is roughly two-thirds Hispanic, so reaching Spanish-speaking searchers is a real edge most contractors flat-out ignore. And the summers are punishing, so AC, electrical, and roofing demand spikes hard from June into September. Your ranking has to be locked in before the heat arrives, not scrambled together after." },
      { q: 'Should my San Antonio business market in Spanish?', a: "For most home-service trades here, absolutely. Around 64% of the metro is Hispanic, much of it Mexican-origin, and a real share of homeowners search and hire in Spanish. We can tune your Google profile, pages, and reviews to reach them, which is a stack of calls your English-only competitors simply never see." },
      { q: 'Which areas do you cover?', a: "All of San Antonio and the towns around it: Stone Oak, Southtown, Alamo Heights, King William, Helotes, plus Schertz, Cibolo, New Braunfels, Boerne, and more. We build genuine neighborhood pages rather than one catch-all San Antonio page, because that is what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It is nearly all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand emergency AC calls, summer-driven demand, and the jobs that follow, and we build your local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "A growing slice of \"near me\" research now starts inside AI instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It is fast becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an opening 90 days because that is roughly how long local SEO needs to show real movement. After that it is month-to-month. If we are not delivering, you leave, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that route leads straight to you. Over time you lean on the brokers less, because the work is coming to you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your service areas, what your Map Pack competitors are doing to beat you, the fixes that will move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'san-antonio', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'San Antonio SEO Company | OnwardCraft',
    metaDescription:
      'San Antonio SEO that ranks contractors on Google and delivers leads you own. Revenue-tied reporting, no lock-in contracts, built for summer-heat demand.',
    eyebrow: 'SEO Services · San Antonio',
    h1: 'Get your San Antonio business to the top of Google and keep it there',
    h2Exact: 'San Antonio SEO Company',
    heroSubhead:
      "The minute you stop paying for ads, the leads stop too. SEO flips that: rank once for what your San Antonio customers search and the work keeps coming. We build that ranking and tie every report straight to real calls and booked jobs.",
    primaryCta: 'Get my free San Antonio SEO audit',
    intro:
      "San Antonio SEO boils down to one question: when someone searches what you do, are you on page one or page two? Page two might as well be page fifty, because nobody is going there. We get contractors ranking for the money keywords in a big, fast-growing, heavily Hispanic market, and we measure the work in leads, not vanity traffic.",
    aioQuestion: 'How do San Antonio businesses rank higher on Google?',
    aioAnswer:
      "They rank by repairing the technical base of the site, tuning each page to the exact terms customers type, publishing genuinely useful local content, and earning links from trusted San Antonio sources. In a market that is roughly two-thirds Hispanic with sharp summer-heat demand, ranking for Spanish-language and seasonal terms is one of the fastest ways to pull ahead of competitors who skip both.",
    problemHeading: "Three reasons your San Antonio site is not pulling in work",
    painPoints: [
      { title: "You are parked on page two", body: "Hardly anyone clicks past the first page of Google, and they rarely scroll deep into it either. If you are not in the top handful of results for what you sell, your site is effectively invisible, no matter how sharp it looks." },
      { title: "You are renting every visitor from Google Ads", body: "Ads have their place, but the second your card gets declined, the leads dry up. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the cost per lead." },
      { title: "You are missing the demand that pays", body: "San Antonio demand swings hard with the summer heat, and a big chunk of the market searches in Spanish. If your SEO skips the seasonal AC terms and the Spanish-language searches, you are leaving your busiest months and a huge slice of the city on the table." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned to the precise terms your San Antonio customers search: titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers are asking, earn links, and pull in leads while you sleep." },
      { name: 'Link building', desc: "Authority from real San Antonio and industry sources. In a competitive market, links are frequently what divide page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches right alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads, not just rankings and traffic, so you always know what your SEO is genuinely worth." },
      { name: 'Bilingual & seasonal SEO', desc: "We rank you for Spanish-language searches and the summer-heat terms that drive San Antonio's busiest months, so you are visible to the whole market before demand peaks, not after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real San Antonio leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile: the foundation everything else needs in order to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus fresh local content, including the Spanish-language and summer-driven terms that matter here." },
      { name: 'Build authority', desc: "Links and citations from trusted San Antonio and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what is working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent San Antonio SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own San Antonio search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Bilingual & seasonal SEO', 'eCommerce / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in San Antonio?', a: "Most San Antonio SEO engagements run $900 to $3,000 a month, set by how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in San Antonio?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, quicker on low-competition terms and slower on the toughest San Antonio keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that disappears when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most contractors do best running SEO as the long-term engine and ads for short-term spikes." },
      { q: 'Should my San Antonio SEO target Spanish-language searches?', a: "For most trades here, yes. The metro is around 64% Hispanic, much of it Mexican-origin, and a real share of homeowners search and hire in Spanish. Optimizing for Spanish-language terms and a bilingual experience opens up demand the English-only competitors never reach. We build that into the strategy." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. Higher tiers add bilingual and seasonal optimization plus AI-search work. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an opening 90 days because SEO needs that window to show real movement, then it shifts to month-to-month. If we are not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which areas around San Antonio do you cover?', a: "All of San Antonio and the surrounding areas: Stone Oak, Southtown, Alamo Heights, Helotes, Schertz, Cibolo, New Braunfels, Boerne, and more, with genuine local pages rather than one catch-all San Antonio page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that route leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'san-antonio', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'San Antonio Web Design Company | OnwardCraft',
    metaDescription:
      'San Antonio web design that turns visitors into booked jobs: fast, mobile-first, bilingual-ready sites built for contractors and summer-heat demand.',
    eyebrow: 'Web Design · San Antonio',
    h1: 'San Antonio web design that turns visitors into booked jobs',
    h2Exact: 'San Antonio Web Design Company',
    heroSubhead:
      "A good-looking website that never generates a call is just a brochure. We build San Antonio contractors fast, mobile-first sites engineered to turn visitors into booked work, and built to reach the city's huge Spanish-speaking market instead of only half of it.",
    primaryCta: 'Get my free quote',
    intro:
      "Most San Antonio contractor websites bleed leads quietly: sluggish on a phone, a call button no one can find, no clear offer, and English-only in a city that is nearly two-thirds Hispanic. Web design done properly fixes every one of those leaks. We build sites that load fast, look like the professional you already are, turn Stone-Oak-to-Southtown visitors into booked jobs, and speak to every homeowner who lands on them.",
    aioQuestion: 'What makes a good contractor website in San Antonio?',
    aioAnswer:
      "A strong San Antonio contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and reaches the city's large Spanish-speaking market. Because most local searches happen on mobile and roughly two-thirds of the metro is Hispanic, mobile speed and a bilingual-ready experience are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site is not bringing in work",
    painPoints: [
      { title: "It is a brochure, not a lead engine", body: "Plenty of contractor sites just list a few services and sit there. No clear offer, no obvious next step, no reason to call you over the next guy. We design every page around a single job: turning a visitor into a booked lead." },
      { title: "It crawls on a phone", body: "Most of your San Antonio visitors are on mobile, and they bounce the moment your site takes more than a few seconds to load. Slow sites also rank worse. We build fast, so you hold onto both the visitor and the ranking." },
      { title: "It speaks to only half the city", body: "Roughly two-thirds of San Antonio is Hispanic, and plenty of homeowners are more comfortable hiring in Spanish. An English-only site quietly waves those visitors off. We can build a bilingual-ready site so you grab the calls the rest of your competitors leave behind." },
    ],
    servicesHeading: "What's in an OnwardCraft San Antonio website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your service area, and the jobs you genuinely want to book." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that is where nearly all of your San Antonio traffic is. Fast, thumb-friendly, and easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where people actually use them. Every page carries a next step." },
      { name: 'Copy that sells', desc: "Words written to reassure an anxious homeowner and book the job, not filler that reads like every other contractor in town." },
      { name: 'Local SEO foundation', desc: "Built to rank from the ground up: clean structure, schema, fast load, and neighborhood-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both your conversions and your rankings." },
      { name: 'Bilingual-ready build', desc: "Built to reach San Antonio's huge Spanish-speaking market with a bilingual experience, so the site converts the homeowners your English-only competitors lose.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts toward AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your service area, your best jobs, and your competitors, then map the site around booking more of the work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert, and you see it and shape it before a single line of code gets written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what is actually converting." },
    ],
    pricing: {
      heading: 'Transparent San Antonio web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Bilingual-ready build'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in San Antonio?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, set by page count and integrations. Our tiers are above: fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you posted through each stage." },
      { q: 'Can you build my site in Spanish or bilingual?', a: "Yes, and in San Antonio it pays off. The metro is around 64% Hispanic and plenty of homeowners prefer to hire in Spanish. We can build a bilingual-ready site that reaches both audiences, which is a stack of leads your English-only competitors never capture." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive San Antonio terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you cannot walk away from." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where nearly all of your San Antonio traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage yourself, usually WordPress or Webflow. We will recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month, and you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting San Antonio site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'san-antonio', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'San Antonio Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your San Antonio website without losing rankings. Faster, mobile-first, bilingual-ready rebuilds that convert more visitors into booked jobs.',
    eyebrow: 'Website Redesign · San Antonio',
    h1: 'Redesign your San Antonio website without losing your rankings',
    h2Exact: 'San Antonio Website Redesign Company',
    heroSubhead:
      "An outdated site quietly costs you jobs every week: slow, awkward on a phone, easy to skip past, and speaking to only half of a Hispanic-majority city. We redesign San Antonio contractor sites to convert more and load faster, and we migrate with enough care that you keep every bit of ranking you have already earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns fail in one of two ways: the site looks sharper but converts exactly the same, or it launches and the rankings evaporate overnight. We refuse to do either. We redesign San Antonio contractor sites for speed and conversions, build them to reach the city's huge Spanish-speaking market, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign holds your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your San Antonio site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and quietly costs you trust", body: "On a high-ticket job, homeowners size you up by your site in seconds. An old, cluttered design quietly nudges them toward a competitor who looks more established, even when your work is plainly better." },
      { title: "It is slow and clumsy on a phone", body: "If your site is clunky or slow on mobile, you are losing the majority of your San Antonio visitors before they ever reach your offer. A redesign built mobile-first wins them back." },
      { title: "It cannot reach the whole market", body: "Roughly two-thirds of San Antonio is Hispanic, and an English-only site quietly turns away homeowners who would rather hire in Spanish. A redesign that is bilingual-ready, fast, and built to convert captures the leads your old site kept leaving behind." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what is costing you leads and rankings today, so the redesign fixes real problems instead of just swapping the colors around." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you have already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, smarter call-to-action placement, and lead forms that people actually use. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals, which helps both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where nearly all of your San Antonio traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the price tag on your jobs." },
      { name: 'Bilingual-ready rebuild', desc: "Rebuilt to reach San Antonio's huge Spanish-speaking market with a bilingual experience, so the new site converts the homeowners your old one turned away.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what is losing you leads and rankings, then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build a thing." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and watch closely so rankings hold and climb, not drop." },
      { name: 'Optimize', desc: "Post-launch tuning based on what is converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent San Antonio redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Bilingual-ready rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in San Antonio?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, set by size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it is handled carefully, and that is exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at every stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is a pain to update, is not bringing in leads, or cannot reach San Antonio's Spanish-speaking market, it is costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and sharpen your existing content, preserve what is ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Can you make the new site bilingual?', a: "Yes, and in San Antonio it deserves serious thought. The metro is around 64% Hispanic and a real share of homeowners prefer to hire in Spanish. We can rebuild your site bilingual-ready so it converts both audiences, capturing leads your old English-only site missed." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely: the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const sanAntonioCity = {
  citySlug: 'san-antonio', city: 'San Antonio', state: 'Texas', stateAbbr: 'TX', metro: 'San Antonio',

  titleTag: 'San Antonio Marketing for Contractors | Web, SEO & Leads',
  metaDescription:
    'Web design, SEO, and local SEO for San Antonio contractors. Get found, get booked, and own your leads instead of renting them. Bilingual-ready and built.',

  eyebrow: 'San Antonio · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets San Antonio contractors found and booked',
  h2Exact: 'San Antonio Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for San Antonio's big, fast-growing, heavily Hispanic market. One team to get you ranking, converting, and off the rented-lead treadmill for good.",
  heroProof: ['Built for the trades', 'Bilingual-ready', 'No lock-in contracts'],
  primaryCta: 'Get my free San Antonio audit',

  intro:
    "If you run a contracting business in San Antonio, you are fighting for attention in one of the biggest, fastest-growing markets in Texas, and your competition keeps growing right alongside it. Winning here takes three pieces working together: a site that converts, SEO that ranks you for what people search, and local SEO that lands you in the Map Pack, all built to reach a city that is nearly two-thirds Hispanic and runs hottest when the summer demand hits. Here is how we help San Antonio contractors pull that off.",
  aioQuestion: 'How do San Antonio contractors get more leads online?',
  aioAnswer:
    "San Antonio contractors get more leads by pairing a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack. Because the metro is roughly two-thirds Hispanic and demand spikes during the triple-digit summers, the contractors who reach Spanish searchers and are already ranking before the heat arrives win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when San Antonio searches \"near me.\" The single highest-return move for most local businesses, and how you reach the whole city, Spanish searchers included.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers genuinely search, build an asset you own instead of renting traffic from ads, and measure the work in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs, built bilingual-ready to reach San Antonio's huge Spanish-speaking market, not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it carefully so you keep every bit of ranking you have already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in San Antonio?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients pair a high-converting website with SEO and local SEO so they rank, convert, and own their leads, and reach the city's large Spanish-speaking market while they are at it." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors, so we understand emergency calls, summer-heat demand, and the work that follows." },
    { q: 'Why does the Spanish-speaking market matter for my marketing?', a: "San Antonio is around 64% Hispanic, much of it Mexican-origin, and a real share of homeowners search and hire in Spanish. Most contractors only market in English, so reaching Spanish searchers with your profile, site, and reviews is an easy edge that opens up demand your competitors never see." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which San Antonio areas do you serve?', a: "All of San Antonio and the surrounding areas: Stone Oak, Southtown, Alamo Heights, King William, Helotes, plus Schertz, Cibolo, New Braunfels, Boerne, and more." },
    { q: 'Where should I start?', a: "Start with a free San Antonio audit. We will look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};
