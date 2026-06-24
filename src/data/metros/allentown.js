// ALLENTOWN: per-metro x per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Allentown's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// ALLENTOWN: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'What it really takes to get found in the Lehigh Valley',
  body:
    "Picture the homeowner you want. They just bought a Cape Cod off Tilghman Street with a New York paycheck still hitting their account every two weeks, and the furnace just quit on the coldest night of January. They grab their phone, they type, and they call one of the first names they see. The whole game is being that name. The Allentown-Bethlehem-Easton metro is filling up fast with people leaving New York City and Philadelphia for more house and a shorter commute, and they brought big-city budgets with them. That is the opportunity. The catch is that every contractor in the Valley is chasing the exact same homeowner, and Google only hands out three Map Pack spots before the scrolling starts. Two forces decide who wins here. The first is the weather: hard Pennsylvania winters, nor'easters, ice, and burst pipes turn a quiet phone into a ringing one from late fall through early spring. The second is language. Allentown is roughly half Hispanic, with deep Dominican, Puerto Rican, and Central American roots, and almost nobody is bidding for the homeowner who searches \"fontanero cerca de mi.\" Show up in English and Spanish and you are competing in a room that is nearly empty.",
  pullQuote: 'Big-city budgets, Valley prices, and a winter that turns a quiet phone into a ringing one. The contractor who shows up first wins.',
  donut: {
    title: 'Allentown population by background',
    value: 50,
    centerLabel: 'Hispanic',
    legend: [
      { label: 'Hispanic', pct: 50, kind: 'teal' },
      { label: 'Other', pct: 50, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Nor\'easter winter (Nov-Apr), peaking Dec-Feb; Lehigh River flooding (Mar-May)',
  seasonalDemand: [
    { m: 'J', v: 92, peak: true }, { m: 'F', v: 95, peak: true }, { m: 'M', v: 74, peak: true },
    { m: 'A', v: 68, peak: true }, { m: 'M', v: 52 }, { m: 'J', v: 62 },
    { m: 'J', v: 70 }, { m: 'A', v: 68 }, { m: 'S', v: 48 },
    { m: 'O', v: 58 }, { m: 'N', v: 80, peak: true }, { m: 'D', v: 90, peak: true },
  ],
  stats: [
    { value: '870K+', label: 'people across the Allentown-Bethlehem-Easton metro you could be reaching' },
    { value: '~50%', label: 'of Allentown is Hispanic, and barely anyone is competing for Spanish-language search', accent: true },
    { value: 'Nov-Apr', label: 'the nor\'easter stretch when heating and roofing calls flood in' },
    { value: 'Top 3', label: 'Map Pack spots that swallow nearly every click' },
  ],
  neighborhoods: [
    'Center City Allentown', 'West End Allentown', 'South Bethlehem', 'Fountain Hill', 'Easton',
    'Nazareth', 'Emmaus', 'Macungie', 'Quakertown', 'Stroudsburg',
    'Bethlehem Township', 'Palmer Township', 'Whitehall', 'Salisbury Township', 'Hellertown',
  ],
};

const AREAS = [
  'Allentown', 'Bethlehem', 'Easton', 'Emmaus', 'Nazareth', 'Whitehall',
  'Macungie', 'Salisbury Township', 'Fountain Hill', 'South Bethlehem',
  'Quakertown', 'Stroudsburg', 'Palmer Township', 'Hellertown', 'Bangor',
];

const FOUNDER =
  "Here is the honest reason OnwardCraft exists. I kept meeting Lehigh Valley contractors who were great at the work and broke from the marketing, handing Angi and HomeAdvisor a few grand every month for the privilege of fighting three competitors over the same lead. That is not a business; that is a slow leak. So we built something different: get you ranking and converting for the jobs you want, in the Valley neighborhoods you serve, with leads that are yours and nobody else's. We are young and founder-led, which means you deal with the person doing the work, not a sales rep. No year-long handcuffs. If we stop earning it, you walk.";

const WHY = [
  {
    title: 'Trades are all we do',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, and GCs. We know what a burst-pipe call sounds like at 6am, why a nor'easter buries your inbox for weeks, and how a homeowner in a panic actually searches. Everything we build is shaped around that, not a generic small-business playbook.",
  },
  {
    title: 'We end your dependence on rented leads',
    body: "The goal is simple: a pipeline you own outright. No more wiring money to a broker every month for a homeowner that three of your competitors paid for too. You earn the lead, you keep the lead.",
  },
  {
    title: 'We actually know the Valley',
    body: "The NYC and Philly transplant wave, a half-Hispanic city where Spanish search is wide open, the Moravian historic homes around Bethlehem, the warehouse-and-logistics corridors built around Amazon and FedEx. The texture a national agency cannot fake by find-and-replacing a city name in a template.",
  },
  {
    title: 'No contracts, nothing hidden',
    body: "Prices are published. Reporting is tied to leads, not vanity charts. Month-to-month after the first 90 days. If we are not pulling our weight, you leave, and that keeps the pressure exactly where it should be: on us.",
  },
];

const PROOF = {
  heading: "We are new, so here is the honest math instead of a wall of logos",
  body:
    "Most agencies will flash a grid of client logos at you. We will not, because we are a young founder-led shop and we are not going to fake a track record we have not built yet. What we can give you is the case for why this works, pulled straight from Google's and the industry's own research on how people search for local services.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here is a rough sketch, labelled clearly as a projection and not a result we are claiming: say a Lehigh Valley contractor pulls around 1,200 local \"near me\" impressions a month. Moving from buried on page two into the top three is the gap between a few stray calls and a calendar you have to turn work away from. Right after a nor'easter, that gap gets dramatic. In your free audit we plug in your real numbers (your rankings, your search volume, your service area) and lay out a straight 90 to 180 day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Allentown', state: 'Pennsylvania', stateAbbr: 'PA', metro: 'Allentown-Bethlehem-Easton (Lehigh Valley)',
  heroProof: ['Built for the trades', 'Nor\'easter-season ready', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const allentownLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'allentown', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Allentown Local SEO Company | OnwardCraft',
    metaDescription:
      'Allentown Local SEO that puts you in the three businesses on the map when homeowners search your trade, so the call lands with you, not a competitor.',
    eyebrow: 'Local SEO · Lehigh Valley',
    h1: 'Allentown Local SEO that gets you found when Lehigh Valley neighbors search your trade in English or Spanish',
    h2Exact: 'Allentown Local SEO Company',
    heroSubhead:
      "Google pins three businesses to the map when a Valley homeowner searches \"near me,\" and almost nobody scrolls past them. We put you in that top three so the call lands with you instead of whoever beat you to it, and so your name is already there when the next nor'easter sets every phone in Allentown ringing at once.",
    primaryCta: 'Get my free Allentown audit',
    intro:
      "Allentown local SEO comes down to a single moment: a homeowner in Center City or Emmaus types your trade plus \"near me,\" and Google shows them three businesses on a map. Most people tap one of those three and never look further. The Valley is filling up with NYC and Philly transplants, so the line for those spots is only getting longer, and there is a whole Spanish-language search lane that almost no contractor has touched. Below is how you win both, and stop hoping the phone rings.",
    aioQuestion: 'How do Allentown businesses rank higher in local search?',
    aioAnswer:
      "Four things move the needle: a Google Business Profile tuned to the exact services and neighborhoods you want, name-address-phone listings that match everywhere Google checks, a steady flow of genuine reviews, and local content built around real Lehigh Valley neighborhoods. Because Allentown is growing fast, hit hard by winter, and roughly half Hispanic, the contractors who win look established, answer the phone quickly, are already ranking before nor'easter season lands, and show up in Spanish as well as English.",
    problemHeading: "If your phone is too quiet, it is almost always one of these three",
    painPoints: [
      { title: 'Your competitors own the three map spots', body: "Pull out your phone and search your trade plus \"near me\" right now. Those three businesses Google pins to the map collect nearly every click in the Valley. If your name is not among them, the quality of your work barely matters, because most homeowners never see it. For most Allentown contractors, breaking into that top three is the single highest-return move on the table." },
      { title: "You are paying for leads that were never yours", body: "Angi, Thumbtack, and HomeAdvisor sell the same Allentown homeowner to four contractors, then charge every one of you to scramble over them. It is a treadmill that never stops. Local SEO builds the opposite kind of lead: the homeowner finds you, calls you, and no one else got the lead. Month by month you rent less and own more." },
      { title: "Half of Allentown cannot find you", body: "The city is roughly half Hispanic, and searches like \"techador cerca de mi\" or \"plomero en Allentown\" are barely contested. Showing up in both English and Spanish effectively doubles the homeowners who can reach you, and drops you into a lane your competitors have left wide open." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The single biggest lever in the Map Pack. We sharpen your categories, services, service area, photos, and posts so Google understands exactly which Valley searches should send the call to you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to line up everywhere Google looks. We clean up the listings that contradict each other and build the ones you are missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns each finished job into a fresh review. It lifts your ranking and gives the next homeowner a reason to call you instead of the next name down." },
      { name: 'Neighborhood pages', desc: "Real pages for Center City, Emmaus, Bethlehem, Easton, Nazareth, and the rest, so you rank for the exact neighborhood a homeowner typed, not just \"Allentown.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The unglamorous foundation that lets everything above it actually rank." },
      { name: 'Local link building', desc: "Mentions and links from Valley sources Google trusts: local press, trade associations, community partners. This is often what separates page one from page two around here." },
      { name: 'Spanish-language SEO', desc: "Your Google Business Profile, content, and keywords in Spanish so you rank for the searches half of Allentown is already typing. Almost no competitor has claimed this lane.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts inside AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and recommend you by name.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find exactly where you rank today across your service areas, then pin down which competitors are beating you in the Map Pack and why, including the Spanish-language results your rivals are leaving on the table." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP come first because they move the fastest. You usually see the earliest lift here inside a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is exactly why local SEO rewards starting now instead of next quarter." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across the Valley, Spanish-language content for Allentown's Hispanic homeowners, and the on-page work that makes all of it rank." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and booked jobs, never vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Lehigh Valley areas.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across the Lehigh Valley.', features: ['Everything in Local Growth', 'Local link building', 'Spanish-language SEO targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Allentown?', a: "Most Allentown engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you want to win. The tiers right above this break it down. No hidden fees, no long contract, and we lock the exact scope in your free audit before you commit a dollar." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move inside a few weeks. The competitive Valley keywords usually take 90 to 180 days of steady work, because reviews and citations build on each other over time. In a market growing this fast, anyone promising you page one in 30 days is selling you a story, not results." },
      { q: 'What makes Allentown local SEO different?', a: "Three things. The market is growing fast on NYC and Philadelphia overflow, so fresh competitors keep showing up. Winters are real, so nor'easter emergencies spike searches hard from November through April. And the city is roughly half Hispanic, which makes Spanish-language search one of the most powerful and least-used tools a Valley contractor has." },
      { q: 'How do I reach Allentown\'s Hispanic community through search?', a: "By running your Google Business Profile in Spanish, publishing local content in both English and Spanish, and targeting terms like \"techador cerca de mi,\" \"HVAC en Allentown,\" and \"plomero de emergencia Bethlehem.\" Almost no competitor has bothered, which is exactly why it is one of the fastest ways to open new call volume in the Valley right now." },
      { q: 'Which areas do you cover?', a: "All of the Lehigh Valley and the towns around it: Center City Allentown, West End, Bethlehem, South Bethlehem, Easton, Emmaus, Nazareth, Macungie, Whitehall, Quakertown, and more. We build real neighborhood pages instead of one generic Allentown page, because that is what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It is nearly all we do: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand emergency calls, nor'easter-driven demand, and the down-to-earth homeowner culture the Valley is known for, and we shape your local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More \"near me\" research now starts in AI instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business by name. In the Valley it is quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that is roughly how long local SEO needs to show real movement. After that it is month-to-month. If we are not delivering, you walk, and the accountability stays squarely on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that send leads straight to your phone. Over time you lean on the brokers less because the work is already coming to you directly." },
      { q: "What's in the free audit?", a: "A straight read on where you rank today across your service areas, what your Map Pack competitors are doing to beat you, the fixes that will move you fastest, and a realistic 90 to 180 day plan with the numbers run for your business. It is the clearest picture you can get of what Allentown Local SEO would actually do for your Google Business Profile and your spot on the map. No pitch deck. Just a diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'allentown', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Allentown SEO Company | OnwardCraft',
    metaDescription:
      'Allentown SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in, built for Lehigh Valley winters and Spanish search.',
    eyebrow: 'SEO Services · Lehigh Valley',
    h1: 'Allentown SEO that turns Lehigh Valley organic traffic into booked work, in both languages',
    h2Exact: 'Allentown SEO Company',
    heroSubhead:
      "The minute you stop paying for ads, the leads stop cold. SEO works the other way: rank once for what your Allentown customers search and the calls keep arriving. We build that ranking in English and Spanish, and we tie every report to real calls and booked jobs, not traffic you cannot cash.",
    primaryCta: 'Get my free Allentown SEO audit',
    intro:
      "Allentown SEO comes down to one blunt question: when a homeowner searches what you do, are you on page one or page two? In this market page two is the same as page fifty. We get Valley contractors ranking for the keywords that actually pay, in a fast-growing, winter-heavy, half-Hispanic city, and we measure the work in leads rather than vanity traffic you can brag about but never bill.",
    aioQuestion: 'How do Allentown businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the site's technical foundation, tuning each page for the exact terms customers type, publishing genuinely useful local content, and earning links from trusted Lehigh Valley sources. In a market shaped by NYC and Philadelphia overflow, hard Pennsylvania winters, and a large Spanish-speaking population, targeting seasonal emergency terms and bilingual search is how Allentown contractors pull ahead of competitors still running a one-size-fits-all approach.",
    problemHeading: "Three reasons your Allentown site is not bringing in work",
    painPoints: [
      { title: "You are stranded on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it either. If you are not in the top handful of results for what you sell, your site might as well not exist, no matter how sharp it looks. That invisibility is quietly costing you jobs every single week." },
      { title: "You are renting traffic from Google Ads", body: "Ads can work, but the second your card stops, so do the leads. SEO builds an asset you own: rankings that keep producing calls months and years after the work is done, at a fraction of the per-lead cost you are paying brokers and ad platforms now." },
      { title: "You are skipping half the market", body: "Allentown is roughly half Hispanic, and most contractor sites are English-only. Spanish-language searches for roofing, HVAC, plumbing, and remodeling are high-volume and barely contested. Ranking for them is one of the fastest ways to unlock call volume your competitors have not even noticed yet." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs in place before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned to the exact terms your Allentown customers search: titles, headings, body copy, and internal links that all point the same direction." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what Valley buyers are searching, earn links, and bring in leads while you are out on the job." },
      { name: 'Link building', desc: "Authority from real Lehigh Valley and industry sources. In a competitive market, links are often the deciding factor between landing on page one and stalling on page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches right alongside your organic rankings, and catch both kinds of buyer." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads, not just rankings and traffic, so you always know in dollars what your SEO is actually worth." },
      { name: 'Spanish-language & bilingual SEO', desc: "We rank you for the Spanish-language searches half of Allentown is already typing, a high-volume, nearly empty lane most competitors have completely ignored.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Valley leads, including the Spanish-language openings your competitors have left wide open." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile, the foundation everything else needs before it can rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including bilingual pages for the Valley's Hispanic homeowners and the seasonal emergency terms that spike here every winter." },
      { name: 'Build authority', desc: "Links and citations from trusted Allentown and industry sources to push your competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what is working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Allentown SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Lehigh Valley search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Spanish-language / bilingual SEO', 'Multi-location support', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Allentown?', a: "Most Allentown SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work the climb requires. The tiers are above, with no hidden fees and no long contract to sign." },
      { q: 'How long does SEO take to work in Allentown?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on low-competition terms and slower on the most contested Valley keywords. SEO compounds, so the gains keep stacking the longer you run it. That is the upside of starting now instead of next year." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops the moment you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Valley contractors do best running SEO as the long-term engine and ads for short-term spikes." },
      { q: 'Should my Allentown SEO target Spanish-language searches?', a: "Absolutely. Allentown is roughly half Hispanic, and Spanish-language searches for roofing, HVAC, plumbing, and remodeling are high-volume and nearly uncontested, because most contractor sites are English-only. Ranking for those terms is one of the fastest ways to open call volume right now, in a lane your competitors have not entered." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. Higher tiers add bilingual Spanish-language content and AI-search optimization. We confirm the exact scope in your free audit so there are no surprises later." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it is month-to-month. If we are not delivering, you leave, simple as that." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business by name, not just classic search results." },
      { q: 'Which areas around Allentown do you cover?', a: "All of the Lehigh Valley and the towns around it: Bethlehem, Easton, Emmaus, Nazareth, Whitehall, Macungie, Quakertown, Stroudsburg and more, with genuine local pages rather than one generic Allentown page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads straight to you. The more of your search visibility you own, the less you depend on paying brokers for leads three competitors bought too." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. It shows you in plain terms what Allentown SEO would do for your organic traffic and your money keywords, and how fast you could reach page one. No pitch deck, just a diagnosis you can act on." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'allentown', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Allentown Web Design Company | OnwardCraft',
    metaDescription:
      'Allentown web design that turns visitors into booked jobs: fast, mobile-first sites built for contractors, Lehigh Valley winters, and the growing Hispanic market.',
    eyebrow: 'Web Design · Lehigh Valley',
    h1: 'Allentown web design that makes Lehigh Valley homeowners pick you, in English and Spanish',
    h2Exact: 'Allentown Web Design Company',
    heroSubhead:
      "A handsome website that does not generate calls is just a brochure. We build Allentown contractors fast, mobile-first sites engineered to turn visitors into booked work, in English and Spanish, and tough enough to stay standing when a nor'easter floods your phone with emergency requests.",
    primaryCta: 'Get my free quote',
    intro:
      "Allentown web design is the difference between a site that books jobs and one that bleeds leads quietly: slow on a phone, call button buried, no clear offer, and English-only in a city that is half Hispanic. Web design done right plugs every one of those leaks. We build sites that load fast, look like the professional you already are, and turn visitors from Center City to Emmaus into booked jobs, in both languages, without buckling when a February ice storm sends your traffic spiking overnight.",
    aioQuestion: 'What makes a good contractor website in Allentown?',
    aioAnswer:
      "A good Allentown contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, offers at least basic Spanish-language content for the city's large Hispanic population, and holds up under the traffic spikes that come with nor'easter emergencies. Because most Lehigh Valley searches happen on mobile, phone speed and an obvious next step are what separate a site that books jobs from one that just sits there looking nice.",
    problemHeading: "Why your current site is not bringing in work",
    painPoints: [
      { title: "It is a brochure, not a lead engine", body: "Plenty of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next guy down the list. We design every page around one job: turning a visitor into a booked lead before they bounce back to Google." },
      { title: "It is too slow on a phone, and English-only", body: "Most of your Allentown visitors are on mobile, and they leave if your site takes more than a few seconds to load. On top of that, Allentown is half Hispanic, and an English-only site quietly turns away a huge share of the city's homeowners before they ever read your offer." },
      { title: "It collapses when winter demand surges", body: "After a big nor'easter, contractor sites get slammed with emergency roofing, heating, and pipe-freeze searches. A slow site that hides the call button at the exact moment it matters most hands those jobs to whoever ranked and converted faster. We build sites that stay quick and get the call when it counts." },
    ],
    servicesHeading: "What's in an OnwardCraft Allentown website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site built around your trade, your service area, and the specific jobs you actually want more of." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that is where nearly all your Allentown traffic comes from. Fast, thumb-friendly, and easy to call from in two taps." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where homeowners actually use them. Every page carries an obvious next step." },
      { name: 'Copy that sells', desc: "Words written for the anxious homeowner trying to book a fix, not filler that reads exactly like every competitor in the Valley." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank: clean structure, schema, fast load, and neighborhood-ready pages across the Lehigh Valley." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects your conversions and your rankings at the same time." },
      { name: 'Spanish-language pages', desc: "Bilingual content and navigation so you show up for Spanish-language searches and convert the Hispanic homeowners your competitors keep leaving on the table.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your service area, your most profitable jobs, and your competitors, then map the site around booking more of the work you want, including how to reach the Valley's Spanish-speaking homeowners." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert, and you see it and shape it before a single line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, in English and Spanish where it counts, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one, not bolted on later." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what is actually converting into calls." },
    ],
    pricing: {
      heading: 'Transparent Allentown web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Spanish-language content'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Bilingual English/Spanish site', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Allentown?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. The tiers are above: fixed price, no surprises, and you own the finished site outright." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build runs 4 to 8. We give you a firm timeline up front and keep you posted through each stage so you are never wondering where things stand." },
      { q: 'Can you build a bilingual English and Spanish website?', a: "Yes, and in Allentown it is one of the highest-return things we can do for a contractor. The city is roughly half Hispanic, and Spanish-language searches for home services are high-volume and nearly uncontested. A bilingual site opens that market before your competitors even realize they should care." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Allentown terms, in both English and Spanish." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platform you cannot walk away from." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where nearly all your Allentown traffic comes from. Fast load, easy-to-tap call buttons, and forms built to be filled out with a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage, usually WordPress or Webflow. We recommend the right fit in your free consult and explain the tradeoffs plainly, no jargon." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month, so you can leave whenever you want." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Allentown site should include, and a fixed-price quote with a timeline. It is a straight answer on what Allentown web design should do for you: a fast, mobile-first site that converts visitors into booked jobs. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'allentown', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Allentown Website Redesign | OnwardCraft',
    metaDescription:
      'Allentown Website Redesign without losing rankings: faster, mobile-first rebuilds that convert more visitors into booked jobs and reach the Hispanic market.',
    eyebrow: 'Website Redesign · Lehigh Valley',
    h1: 'Allentown Website Redesign that turns an aging, English-only site into a bilingual lead engine',
    h2Exact: 'Allentown Website Redesign Company',
    heroSubhead:
      "An outdated site quietly costs you jobs every week: slow, clumsy on a phone, easy to scroll past, and English-only in a half-Hispanic city. We redesign Allentown contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you have already earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Allentown Website Redesign goes wrong one of two ways: the site looks sharper but converts exactly the same, or it launches and the rankings disappear overnight. We do neither. We redesign Allentown contractor sites for speed and conversions, add bilingual reach for the city's large Hispanic population, build them to absorb nor'easter emergency surges, and migrate with the redirects and SEO care that protect the traffic you already worked years to earn.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign holds your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one. Adding Spanish-language content during a redesign is also one of the lowest-cost, highest-return moves in an Allentown market where that lane is nearly empty.",
    problemHeading: "Signs your Allentown site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and quietly costs you trust", body: "For a high-ticket job, a homeowner sizes you up by your site in seconds. An old, cluttered design sends them to a competitor who simply looks more established, even when your work is far better. In a Valley where NYC and Philly transplants keep raising the bar, that first impression decides who gets the call." },
      { title: "It is slow, clumsy on a phone, and English-only", body: "If your site is sluggish or awkward on mobile, you lose most of your Allentown visitors before they ever see your offer. And if it is English-only in a city that is half Hispanic, you are invisible to a huge slice of the homeowner market before anyone even searches." },
      { title: "It cannot keep up when nor'easter demand surges", body: "Traffic that never turns into calls is wasted, and an old site that slows to a crawl during a winter emergency surge loses leads at the exact moment they are worth the most. We rebuild for conversions and for the days your phone should be ringing nonstop." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what is costing you leads and rankings today, so the redesign fixes real problems instead of just swapping colors and fonts." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep every bit of the rankings and traffic you have already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, smarter call-to-action placement, and lead forms homeowners actually fill out. We design for booked jobs, not just a prettier screenshot." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals, which lifts both conversions and rankings at once." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where nearly all your Allentown traffic actually lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the price of your jobs, and that earns the confidence of the NYC and Philly transplants raising standards across the Valley." },
      { name: 'Spanish-language content added', desc: "We add bilingual pages during the redesign so you start ranking for the Spanish-language searches half of Allentown is already typing, a lane almost no competitor has claimed.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what is losing you leads and rankings, then map a redesign that fixes it without breaking what already works, and we surface the Spanish-language and bilingual openings your current site is missing." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build a thing." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean, no-drama migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and watch closely so rankings hold and climb, instead of dropping the week after go-live." },
      { name: 'Optimize', desc: "Post-launch tuning based on what is actually converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Allentown redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Spanish-language content'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Bilingual English/Spanish site', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Allentown?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result outright when we hand it over." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it is done carefully, and that is exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild runs 5 to 9. You get a firm timeline up front and updates at each stage, so there are no silent gaps." },
      { q: 'Can you add Spanish-language pages to my redesigned site?', a: "Yes, and in Allentown that is one of the highest-return additions we make. The city is roughly half Hispanic, and Spanish-language searches for home services are nearly uncontested. Adding bilingual content during a redesign is a low-cost way to open a lane your competitors have not entered." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is a pain to update, is not bringing in leads, or is English-only in a half-Hispanic city, it is costing you work. The free audit tells you plainly whether a redesign is worth your money." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and sharpen your existing content, preserve what is already ranking, and handle the technical migration so nothing important slips through the cracks." },
      { q: 'Will the new site handle winter emergency traffic?', a: "Yes, and in the Lehigh Valley that is a real consideration. Nor'easters, ice storms, and burst pipes drive sudden surges in roofing, heating, and plumbing searches, and the old site that slows to a crawl loses those leads. We rebuild for speed and keep the call to action obvious so the site converts right when demand peaks." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely: the site, the domain, and the content. No platform lock-in, no strings." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month, so you stay only as long as we keep earning it. An Allentown Website Redesign with us is a fixed-price, mobile-first rebuild handled with an SEO-safe migration, so you keep every bit of ranking you have already earned." },
    ],
  },
];

export const allentownCity = {
  citySlug: 'allentown', city: 'Allentown', state: 'Pennsylvania', stateAbbr: 'PA', metro: 'Allentown-Bethlehem-Easton (Lehigh Valley)',

  titleTag: 'Allentown Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Allentown marketing for contractors: web design, SEO, and local SEO. Get found in English and Spanish, get booked, and own your leads. Built for Lehigh Valley winters.',

  eyebrow: 'Allentown · Web Design, SEO & Lead Generation',
  h1: 'Allentown marketing for contractors that turns Lehigh Valley searches into jobs',
  h2Exact: 'Allentown Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for the Lehigh Valley: NYC and Philly overflow demand, hard Pennsylvania winters, and a half-Hispanic market where Spanish-language search is the most wide-open lane in the city.",
  heroProof: ['Built for the trades', 'Nor\'easter-season ready', 'No lock-in contracts'],
  primaryCta: 'Get my free Allentown audit',

  intro:
    "Allentown marketing for contractors has to fit one of the most interesting markets in the Northeast. NYC and Philadelphia families keep pouring in, carrying big-city budgets to Valley prices. Hard Pennsylvania winters drive roofing, heating, and pipe-freeze emergencies from November through April. And Allentown is roughly half Hispanic, which makes Spanish-language search one of the highest-volume, lowest-competition lanes any local contractor can claim right now. Winning here takes three things firing together: a site that converts in both languages, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack before the next nor'easter hits. Here is how we help Valley contractors do exactly that.",
  aioQuestion: 'How do Allentown contractors get more leads online?',
  aioAnswer:
    "Allentown contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches, in English and Spanish, and local SEO that wins the Google Map Pack. Because the Lehigh Valley is growing fast on NYC and Philadelphia overflow, gets hard Pennsylvania winters that spike emergency demand, and is roughly half Hispanic with nearly untouched Spanish-language search competition, the contractors who cover all three of those angles are competing in lanes their rivals have not even entered.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the three businesses Google pins to the map when Allentown searches \"near me,\" in English and Spanish. The single highest-return move for most local contractors, and how you catch nor'easter emergency demand the moment it hits.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the keywords your customers actually search, build an asset you own instead of renting traffic from ads, and measure it in booked jobs, not vanity traffic. Bilingual reach available.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs, in English and Spanish, and tough enough to stay fast when a nor'easter floods your phone with emergency requests.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed, conversions, and bilingual reach, then migrate it carefully so you keep every bit of ranking you have already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Allentown?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients pair a high-converting website with SEO and local SEO so they rank, convert, and own their leads, and so they are ready the moment nor'easter season drives emergency searches." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors, so we understand emergency calls, winter-driven demand, and the down-to-earth homeowner culture the Lehigh Valley is known for." },
    { q: 'Can you help me reach Allentown\'s Hispanic community?', a: "Yes, and it is one of the most powerful things a Valley contractor can do right now. Allentown is roughly half Hispanic, and Spanish-language searches for roofing, HVAC, plumbing, and remodeling are high-volume and nearly uncontested. We run your Google Business Profile in Spanish, build bilingual content, and target the terms Allentown's Hispanic homeowners are already typing." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm the exact scope in your free audit before you commit." },
    { q: 'Which Allentown areas do you serve?', a: "All of the Lehigh Valley and the towns around it: Center City Allentown, West End, Bethlehem, South Bethlehem, Easton, Emmaus, Nazareth, Macungie, Whitehall, Quakertown, Stroudsburg and more." },
    { q: 'Where should I start?', a: "Start with a free Allentown audit. We look at your website, your rankings, your Map Pack presence, and whether you are missing the Spanish-language opportunity, then tell you the one or two moves that will bring in the most work fastest. It is the simplest way to see what Allentown marketing for contractors, web design and SEO working together, would do to get you found and booked. No pitch deck, just a plan." },
  ],
};
