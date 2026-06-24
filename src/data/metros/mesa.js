// MESA: per-metro x per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Mesa's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// MESA: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'What it takes to win contractor leads in Mesa',
  body:
    "Mesa anchors the East Valley as Arizona's third-biggest city, with a population that tops Atlanta and Miami, yet it still reads like a sprawl of master-planned subdivisions rather than a downtown core. The customer base splits three ways: young families filling Eastmark and Augusta Ranch, multi-generational households across central Mesa, and a large retiree base in age-restricted communities like Leisure World and Sunland Village. Aerospace and tech payrolls at Boeing, the Falcon Field corridor, and nearby chip and data-center builds keep household incomes steady and project budgets real. Demand is driven by two desert realities. The Sonoran summer routinely pushes 110 to 115F from June into September, so a dead air conditioner is not an inconvenience, it is a same-day crisis, and that keeps HVAC and pool service booked deep into the calendar. Then the pattern flips: October through April, winter visitors from the Upper Midwest and Canada move into the 55-plus parks with repair lists in hand. Whoever already holds the map position collects both the July emergency calls and the January snowbird projects.",
  pullQuote: 'In Mesa the work goes twice a year to whoever already ranks: once when the AC quits in 115-degree heat, again when the snowbirds roll in with their punch lists.',
  donut: {
    title: 'Who is doing the searching in Mesa',
    value: 27,
    centerLabel: 'Hispanic',
    legend: [
      { label: 'Hispanic', pct: 27, kind: 'teal' },
      { label: 'Other', pct: 73, kind: 'grey' },
    ],
  },
  seasonTitle: 'The two seasons that fill your calendar',
  seasonCaption: 'Triple-digit heat (Jun–Sep), monsoon storm damage (Jul–Sep), winter-visitor projects (Oct–Apr)',
  seasonalDemand: [
    { m: 'J', v: 70, peak: true }, { m: 'F', v: 66, peak: true }, { m: 'M', v: 52 }, { m: 'A', v: 46 },
    { m: 'M', v: 72, peak: true }, { m: 'J', v: 90, peak: true }, { m: 'J', v: 96, peak: true },
    { m: 'A', v: 94, peak: true }, { m: 'S', v: 80, peak: true }, { m: 'O', v: 64, peak: true },
    { m: 'N', v: 68, peak: true }, { m: 'D', v: 66, peak: true },
  ],
  stats: [
    { value: '3rd', label: 'biggest city in Arizona, ahead of Atlanta and Miami by population' },
    { value: '~27%', label: 'of residents are Hispanic, a Spanish-language search lane most rivals ignore', accent: true },
    { value: '110–115F', label: 'typical June-to-September highs that turn a dead AC into a same-day call' },
    { value: 'Oct–Apr', label: 'the window when winter visitors fill Leisure World and Sunland Village' },
  ],
  neighborhoods: [
    'Downtown Mesa', 'Las Sendas', 'Red Mountain', 'Eastmark', 'Dobson Ranch',
    'Superstition Springs', 'Sunland Village', 'Leisure World', 'Alta Mesa', 'Augusta Ranch',
    'Gilbert', 'Chandler', 'Tempe', 'Apache Junction', 'Queen Creek',
  ],
};

const AREAS = [
  'Mesa', 'Gilbert', 'Chandler', 'Tempe', 'Apache Junction', 'Queen Creek',
  'Gold Canyon', 'Higley', 'San Tan Valley', 'Sun Lakes', 'Fountain Hills',
  'Ahwatukee', 'Power Ranch', 'Val Vista Lakes', 'Eastmark',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'Home-service trades are all we touch',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, pool service, and general contracting. We know what a 115-degree afternoon does to an AC service queue, how a July monsoon fills a roofer's voicemail, and what a Sunland Village retiree wants to read before booking. That knowledge shapes every page we write.",
  },
  {
    title: 'The point is leads with your name on them',
    body: "We are building you a pipeline you keep, not handing you another bill from a broker who already sold that same Mesa homeowner to two of your competitors.",
  },
  {
    title: 'We know the East Valley, not a template',
    body: "Triple-digit summers, monsoon storm damage, a winter-visitor wave that nearly doubles cold-season demand, and budget-aware buyers stretching from Las Sendas down to Queen Creek. A national shop cannot fake that by find-and-replacing a city name.",
  },
  {
    title: 'Clear prices, no handcuffs',
    body: "Rates published on the page, reports tied to actual calls, month-to-month once the first 90 days are up. If the work is not paying off, you walk. That keeps every ounce of pressure on us to perform.",
  },
];

const PROOF = {
  heading: "No logo wall yet, so here is the math instead",
  body:
    "A lot of agencies open with a wall of client logos. We are a young, founder-run shop in the East Valley, and we are not going to fake a history we have not built. What we will put in front of you is the research behind why local search works: the numbers Google and the industry publish on how people actually look for contractors near them.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here is a rough sketch, labelled plainly as a projection and not something we are claiming we already did. Picture an East Valley contractor showing up in roughly 1,500 local \"near me\" impressions each month. Climbing out of page-two obscurity into the top three pins on the map is the gap between a few stray calls and a calendar you have to turn work away on. During a triple-digit week or the height of snowbird season, that gap widens fast. In your free audit we run the real figures for your shop: where you rank now, what your service area searches for, and a straight 90-to-180-day route to the top.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Mesa', state: 'Arizona', stateAbbr: 'AZ', metro: 'Mesa-East Valley',
  heroProof: ['Built for the trades', 'Desert-heat ready', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const mesaLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'mesa', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Mesa Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Mesa Local SEO that wins you the top three on the map. We put your shop in those pins so the East Valley call rings your phone first.',
    eyebrow: 'Local SEO · Mesa-East Valley',
    h1: 'Mesa Local SEO that wins you the top three on the map, from Las Sendas to Queen Creek',
    h2Exact: 'Mesa Local SEO Company',
    heroSubhead:
      "When a Mesa homeowner taps \"near me,\" Google hands the map to just three businesses. Everyone underneath might as well not exist. We move you into that trio so the call comes to you, not the shop that beat you to it, and so your profile is locked in before the summer heat or the snowbird wave lights up every contractor's phone at once.",
    primaryCta: 'Get my free Mesa audit',
    intro:
      "Mesa Local SEO hangs on a single question: when someone in Las Sendas or Dobson Ranch searches your trade with \"near me\" tacked on, are you one of the three pins Google drops on the map? Most local searchers tap one of those pins and never look past them, which is why winning the Google Map Pack is the whole game. This is the third-largest city in Arizona, Eastmark and Queen Creek keep adding rooftops, and every new rooftop adds a competitor, so claiming one of those three slots is the entire contest. Here is how it gets done.",
    aioQuestion: 'How do Mesa contractors climb higher in local search?',
    aioAnswer:
      "It comes down to four pieces done right: a Google Business Profile tuned to the precise services and East Valley neighborhoods you want, a name-address-phone that reads identically everywhere online, a steady flow of genuine reviews, and pages built around real places like Las Sendas, Eastmark, and Sunland Village. Mesa runs on two demand peaks, the triple-digit summer and the October-to-April winter-visitor surge, so the shops that win look settled, answer fast, and are already ranking before each peak arrives.",
    problemHeading: "A quiet phone in Mesa usually traces back to one of these",
    painPoints: [
      { title: 'Three rivals own every pin on the map', body: "Pull up your own trade plus \"near me\" right now and look at the three businesses Google pins to the map. They soak up most of the taps. If your name is not among them, the quality of your work barely registers, because most searchers never see you. For a Mesa contractor, breaking into that top three is almost always the move that returns the most." },
      { title: "You keep paying for leads that were never yours", body: "Angi, Thumbtack, and HomeAdvisor sell one Mesa homeowner to four shops at once, then charge each of you to scrap over the same person. It never ends. Local SEO flips that arrangement: the homeowner finds you, dials you, and no one else got handed the lead. Month by month, you rent less and own more." },
      { title: "You are absent the moment the heat breaks loose", body: "The afternoon Mesa hits 115 in July, AC calls erupt and the shops already on the map scoop them up. The same thing happens in October when winter visitors land with repair lists. If you are invisible on the map when one of those peaks fires, Google routes the work to whoever it already trusts. Ranking ahead of time is how you ride those waves instead of watching them break on someone else." },
    ],
    servicesHeading: 'The work that actually moves you onto the map',
    services: [
      { name: 'Google Business Profile', desc: "The heaviest lever in the Map Pack. We sharpen your categories, service list, service-area radius, photos, and posts so Google sees exactly which East Valley searches belong to you." },
      { name: 'Citations and NAP cleanup', desc: "Your business name, address, and phone have to read the same on every directory Google checks. We correct the listings that disagree and add the ones you never claimed." },
      { name: 'Reviews on a steady drip', desc: "A no-fuss system that turns each finished Mesa job into another review. It nudges your ranking up and gives the next caller a reason to trust you." },
      { name: 'Neighborhood pages', desc: "Genuine pages for Las Sendas, Dobson Ranch, Eastmark, Red Mountain, and the rest, plus Gilbert, Chandler, and Queen Creek, so you surface for the exact area someone typed, not a blanket \"Mesa.\"" },
      { name: 'On-page and technical SEO', desc: "Page titles, schema, internal links, and the load speed that matters most on the phones East Valley homeowners search from. The quiet machinery underneath that lets every other piece rank at all." },
      { name: 'Local link building', desc: "Mentions and links from East Valley sources Google respects: local press, the chamber, trade associations, and partner businesses. Here, that is often the line between page one and page two." },
      { name: 'Seasonal demand readiness', desc: "We get your profile, pages, and reviews ranking before the triple-digit summer and before the winter-visitor wave, so you are positioned for each peak instead of scrambling once it has already started.", featured: true },
      { name: 'AI search readiness', desc: "A growing share of East Valley homeowners now begin a \"near me\" hunt inside AI Overviews, ChatGPT, or Perplexity rather than a search box. We shape your content so those engines can parse your business and put your name in their answers.", featured: true },
    ],
    processName: 'How we work: the Map Pack climb',
    process: [
      { name: 'Audit and baseline', desc: "We map where you actually stand today across every area you serve and figure out which Map Pack rivals are ahead of you and exactly why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and the NAP listings come first, because they shift the fastest. Most shops notice early movement here inside a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine switch on. These stack week after week, which is the whole reason local SEO pays off more the sooner you begin." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages spanning the East Valley, from Mesa to Gilbert to Chandler to Queen Creek, backed by the on-page work that makes them stick." },
      { name: 'Report and expand', desc: "Reporting written in plain English and tied to calls and booked leads, never vanity counts. Then we go claim the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location getting its Map Pack foundation laid right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For shops scrapping across several East Valley towns at once.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors out to own the map from Mesa to Queen Creek.', features: ['Everything in Local Growth', 'Local link building', 'Seasonal demand targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'What does local SEO cost in Mesa?', a: "Most East Valley engagements settle between $750 and $2,500 a month, set by how many neighborhoods and keywords you want to chase. The tiers right above lay it out. No buried fees, no long lock-in, and we nail down the exact scope in your free audit." },
      { q: 'How soon will I land in the Map Pack?', a: "Profile work can stir in a few weeks. The contested Mesa keywords usually need 90 to 180 days of steady effort, since reviews and citations build up over time. In a city this size, anyone vowing page one in 30 days is selling you a story." },
      { q: 'What makes ranking in Mesa different from anywhere else?', a: "Two things stand out. It is Arizona's third-largest city wrapped in an East Valley that keeps adding rooftops, so fresh competitors appear constantly and signals like reviews and matching listings carry real weight. And the demand is sharply seasonal: triple-digit summers drive AC and pool work, while the winter-visitor population pouring into Leisure World and Sunland Village drives repairs and projects. Your ranking has to be set before each season, not after it starts." },
      { q: 'How does ranking help me through the summer heat and monsoon season?', a: "Once Mesa sits at 110 to 115F, a failed AC becomes an emergency and searches for HVAC, pool, and repair work jump within hours, and the July-to-September monsoon piles roof and equipment damage on top. The shops already in the Map Pack grab those calls. We get you ranked and reviewed before the season turns, so you catch the surge instead of fighting for leftovers once everyone else is booked solid." },
      { q: 'Which areas do you cover?', a: "All of Mesa plus the wider East Valley: Downtown Mesa, Las Sendas, Red Mountain, Eastmark, Dobson Ranch, Superstition Springs, and out to Gilbert, Chandler, Tempe, Apache Junction, and Queen Creek. We build real neighborhood pages rather than one catch-all Mesa page, because that is what ranks for a \"[trade] [neighborhood]\" search." },
      { q: 'Can you reach Spanish-speaking customers in Mesa?', a: "Yes. Around 27% of Mesa residents are Hispanic, and a meaningful share of local searches run in Spanish. We can build bilingual content and tune your profile so Spanish-language \"near me\" searches surface you too, a slice of the market plenty of contractors simply skip." },
      { q: 'Will Mesa searchers find me in AI Overviews and ChatGPT?', a: "More \"near me\" research now kicks off inside an AI tool rather than a classic search box. We arrange your content and schema so those engines can read you, trust you, and cite you. Across the East Valley that is fast turning into a deciding factor right alongside the Map Pack." },
      { q: 'Am I tied into a contract?', a: "No. We ask for an opening 90 days because that is roughly the window local SEO needs before honest movement shows up in a market the size of Mesa. After that you go month-to-month. If the results are not landing, you walk, and the accountability sits with us." },
      { q: 'How does this get me off Angi and HomeAdvisor in Mesa?', a: "Those platforms rent you shared leads and a sliver of visibility that is never yours to keep. We build the rankings, the Google profile, and the review base that funnel East Valley calls straight to you. As that compounds, you lean on the brokers less because the work is already arriving direct." },
      { q: "What do I get in the free audit?", a: "A straight read on where you rank today across your service areas, what your Map Pack rivals are doing to stay ahead, the fixes that will move you fastest, and a grounded 90-to-180-day Mesa Local SEO plan with the numbers run for your shop. No slide deck, just a clear diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'mesa', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Mesa SEO Company | Rank Higher, Get More Leads | OnwardCraft',
    metaDescription:
      'Mesa SEO that ranks contractors on Google and brings in leads you keep. Reports tied to calls, no lock-in, tuned for desert heat and winter visitors.',
    eyebrow: 'SEO Services · Mesa-East Valley',
    h1: 'Mesa SEO that builds East Valley rankings you actually own',
    h2Exact: 'Mesa SEO Company',
    heroSubhead:
      "The leads from ads die the instant your card stops. SEO runs the other way: rank once for what East Valley customers search and the calls keep arriving. We build that ranking and tie every report straight back to the calls and jobs it booked for you.",
    primaryCta: 'Get my free Mesa SEO audit',
    intro:
      "Mesa SEO boils down to one thing: when someone searches your trade, do you sit on page one or page two? Page two might as well be page fifty. As a search engine optimization shop, we get contractors ranking on Google for the money keywords that pay in an East Valley that keeps growing and a market that swings hard between summer emergencies and winter-visitor work, and we score it in booked leads and organic traffic rather than empty visits.",
    aioQuestion: 'How do Mesa contractors rank higher on Google?',
    aioAnswer:
      "They rank by repairing the technical base of the site, tuning each page to the exact terms buyers type, publishing local content people actually find useful, and earning links from East Valley sources Google trusts. In a fast-growing desert market, keeping the site quick on a phone and ranking for the seasonal terms, AC in the heat, monsoon roof damage, winter-visitor maintenance, are two of the fastest ways to break ahead.",
    problemHeading: "Three reasons your Mesa site is not bringing in work",
    painPoints: [
      { title: "You are stranded on page two", body: "Almost no Mesa searcher clicks past Google's first page, and few of them scroll far down it. If you are not among the top handful of results for the work you sell, your site is effectively invisible, however sharp it looks." },
      { title: "You are renting every visitor from Google Ads", body: "Ads have their place, but the leads stop the second the billing does. SEO builds something you keep: rankings that go on producing calls months and years after the work, at a sliver of the cost per lead." },
      { title: "You are not ranking for the demand that pays", body: "Mesa demand rides the seasons, the triple-digit summer, the monsoon storms, the winter-visitor surge, and the contractors who rank for those terms early catch the spike. If your SEO ignores heat-driven and seasonal searches, you are handing away your busiest months." },
    ],
    servicesHeading: 'The SEO work that genuinely shifts rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, load speed, Core Web Vitals, schema, and the behind-the-scenes fixes Google wants before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned to the precise terms your East Valley customers type: titles, headings, body copy, and internal links." },
      { name: 'Content that ranks', desc: "Pages and articles that genuinely answer what Mesa buyers search, pull in links, and bring leads in while you are on the job." },
      { name: 'Link building', desc: "Authority drawn from real East Valley and trade sources. In a crowded desert market, links are frequently the difference between page one and page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack tuning so you take the \"near me\" searches right alongside your organic positions." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, form fills, and booked leads, not just rankings and traffic, so you always know what the SEO is actually returning." },
      { name: 'Seasonal & heat-driven SEO', desc: "We rank you for the summer-heat, monsoon, and winter-visitor searches that fuel Mesa's busiest stretches, so you are showing before the spike, not chasing it after.", featured: true },
      { name: 'AI search & GEO', desc: "We arrange your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now starts.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and rivals, then draw a roadmap around the keywords most likely to bring real East Valley leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile: the groundwork everything else has to stand on to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus fresh local content, including the seasonal and heat-driven terms that carry weight here." },
      { name: 'Build authority', desc: "Links and citations from trusted East Valley and industry sources to push your competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to booked leads, then we lean into whatever is working and push out toward the next batch of East Valley keywords." },
    ],
    pricing: {
      heading: 'Transparent Mesa SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a tight site chasing its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across several trades and towns.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For shops set on owning East Valley search outright.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal & heat-driven SEO', 'eCommerce / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'What does SEO cost in Mesa?', a: "Most Mesa SEO work runs $900 to $3,000 a month, set by how contested your keywords are and how much content and link building you need. The tiers above spell it out, with no buried fees and no long lock-in." },
      { q: 'How long does SEO take to work in Mesa?', a: "Look for early movement in 2 to 3 months and results that matter in 4 to 6, quicker on low-competition terms and slower on the most fought-over Mesa keywords. SEO compounds, so the longer you run it the further the gains stack." },
      { q: 'Is SEO better than Google Ads?', a: "They cover different jobs. Ads buy you instant traffic that disappears the second the billing stops. SEO is an asset you hold onto that keeps generating leads at a falling cost per lead the longer it runs. Most Mesa contractors do best treating SEO as the long-haul engine and ads as the short-burst boost, say during a heat-wave week." },
      { q: 'Should my Mesa SEO target the summer heat and winter-visitor season?', a: "Absolutely. When the heat breaks loose, searches for HVAC, pool, and repair work jump within hours, and monsoon storms add roof and equipment damage on top. Then October through April the winter visitors filling the 55-plus parks drive a second wave of maintenance work. Ranking takes months to build, so you have to be set before each season rather than chasing it. We tune for those seasonal terms early so your busiest stretches land on you." },
      { q: "What is included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. The higher tiers fold in seasonal, heat-driven, and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an opening 90 days because that is roughly how long SEO takes to show real traction in a Mesa-sized market, then you go month-to-month. If we are not delivering, you walk." },
      { q: 'Will my Mesa business show up in AI Overviews and ChatGPT?', a: "That is a growing slice of what we tune for. We arrange your content and schema so AI engines can read, trust, and cite your business, not just the classic search box." },
      { q: 'Which areas around Mesa do you cover?', a: "All of Mesa and the surrounding East Valley: Gilbert, Chandler, Tempe, Apache Junction, Queen Creek, Gold Canyon, San Tan Valley, and more, with genuine local pages instead of one blanket Mesa page." },
      { q: 'How do you get my Mesa shop off Angi and HomeAdvisor?', a: "By building rankings and a Google presence that route calls straight to you. The more of your search visibility you own, the less you have to lean on brokers for leads they sold three times over." },
      { q: "What is in the free SEO audit?", a: "Where you rank today, what your rivals are doing to stay ahead, the highest-impact fixes, and a grounded Mesa SEO timeline with the numbers modeled for your business so you can see the path to page one. No slide deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'mesa', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Mesa Web Design Company | Sites That Convert | OnwardCraft',
    metaDescription:
      'Mesa Web Design engineered to bring in real work: fast, mobile-first sites built for contractors, triple-digit AC demand, and winter-visitor season.',
    eyebrow: 'Web Design · Mesa-East Valley',
    h1: 'Mesa web design engineered to bring in real East Valley work, not just a pretty brochure',
    h2Exact: 'Mesa Web Design Company',
    heroSubhead:
      "A good-looking site that never makes the phone ring is just a brochure with better fonts. We build East Valley contractors fast, mobile-first sites engineered to turn visitors into booked work, and tough enough to hold up when a 115-degree afternoon or the winter-visitor wave floods your phone at once.",
    primaryCta: 'Get my free quote',
    intro:
      "Good Mesa Web Design starts where most contractor sites fail: they bleed leads without a sound, sluggish on a phone, a call button hidden three scrolls down, no offer that lands. A mobile-first build done properly plugs every one of those leaks. We build sites that load quick, carry the polish your work deserves, and turn visitors from Las Sendas to Queen Creek into booked jobs, sites that stay standing when a heat wave or monsoon storm sends your traffic vertical.",
    aioQuestion: 'What makes a strong contractor website in Mesa?',
    aioAnswer:
      "A strong Mesa contractor site loads in under three seconds on a phone, keeps the call button and a clear offer above the fold, earns trust with reviews and real job photos, and stays fast through the traffic spikes of a heat wave, a monsoon storm, or winter-visitor season. Because most East Valley searches happen on mobile, phone speed and an unmistakable next step are what separate a site that books work from one that just sits idle.",
    problemHeading: "Why your current site is not bringing in work",
    painPoints: [
      { title: "It is a brochure, not a lead engine", body: "Plenty of East Valley contractor sites just rattle off a service list and stop there. No clear offer, no obvious next step, no reason to dial you instead of the shop down the road. We build every page around a single job: turning a visitor into a booked Mesa lead." },
      { title: "It crawls on a phone", body: "Most of your Mesa visitors are on a phone, and they bail if the site takes more than a couple of seconds to load. Slow pages also rank lower. We build fast, so you keep both the visitor and the position." },
      { title: "It folds the moment demand surges", body: "When a 115-degree day knocks out AC units across the East Valley, or a monsoon storm tears up roofs overnight, contractor sites take a flood of traffic, and the slow ones buckle or bury the call button at the exact wrong moment. We build sites that stay fast and keep converting under load, so you bank that demand instead of dropping it." },
    ],
    servicesHeading: "What goes into an OnwardCraft Mesa website",
    services: [
      { name: 'Custom design', desc: "No off-the-shelf templates. A site shaped around your trade, the East Valley areas you cover, and the jobs you actually want to book." },
      { name: 'Mobile-first build', desc: "Built for the phone first, because that is where nearly all your Mesa traffic lives. Fast, thumb-friendly, one tap to call." },
      { name: 'Conversion-focused UX', desc: "Clear offers, call buttons impossible to overlook, and lead forms set where Mesa homeowners actually fill them out. Every page points to a next step." },
      { name: 'Copy that sells', desc: "Words written for a homeowner sweating out a dead AC or staring at a leaking roof, the kind that books the job, not filler that reads like every other site." },
      { name: 'Local SEO foundation', desc: "Built to rank from the first line of code: clean structure, schema, quick load, and pages ready for the neighborhood." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects your conversions and your East Valley rankings at the same time." },
      { name: 'Demand-surge ready', desc: "Built to stay fast and keep the call button front and center when heat-wave, monsoon, or winter-visitor traffic spikes, the moment that turns visitors into your biggest jobs.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read your business and recommend it as more of search keeps tipping over to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We get to know your trade, the East Valley areas you cover, the jobs you most want, and the rivals beating you to them, then map the site around booking more of that work." },
      { name: 'Design', desc: "We design a custom, mobile-first layout aimed at conversion, and you see it and shape it before we write a line of code." },
      { name: 'Build and copy', desc: "We build it fast and write copy that sells, with the call to action sitting front and center on every page." },
      { name: 'Launch', desc: "We ship it clean, with the SEO foundation, tracking, and load speed locked in from the first day live." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it around whatever is actually converting Mesa visitors into calls." },
    ],
    pricing: {
      heading: 'Transparent Mesa web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A tight, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A larger site for established shops running several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Demand-surge ready'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location outfits.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'What does a website cost in Mesa?', a: "Most contractor sites with us run $2,000 to $8,000 as a one-time build, set by page count and integrations. The tiers above lay it out: fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A tight site runs about 2 to 4 weeks, and a larger custom build runs 4 to 8. You get a firm date up front and a check-in at every stage so nothing surprises you." },
      { q: 'Will my site hold up under a heat-wave or monsoon traffic spike?', a: "Yes, and in Mesa that is no small thing. When a 115-degree day kills AC units across the valley or a monsoon storm chews up roofs overnight, contractor sites take a flood of traffic, and the slow ones shed leads right at the peak. We build fast and keep the call button plain, so your site converts under load instead of caving." },
      { q: 'Will my new site actually rank in Mesa search?', a: "Every site we build sits on a local-SEO foundation: fast load, clean structure, schema, and pages ready for the neighborhood. The build gets you ready to rank, and pairing it with our SEO service is how you climb the contested Mesa terms." },
      { q: 'Do I own the website?', a: "Fully. The build, the domain, and every word of content belong to you. Nothing held hostage, no proprietary platform you are stuck renting." },
      { q: 'Will it run well on phones?', a: "We design mobile-first, because that is where nearly all of your Mesa traffic comes from. Quick load, tap targets sized for a thumb, and short forms a homeowner can finish standing in their driveway." },
      { q: 'Can you build a bilingual site for Spanish-speaking customers?', a: "Yes. About 27% of Mesa residents are Hispanic, and a bilingual site lets you capture Spanish-language searches and customers many of your rivals never bother with. We build and structure it so both audiences find you and convert." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build ships with launch support, and from there we offer low-cost monthly upkeep covering updates, load speed, and security patches." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project at a fixed price. Any maintenance or SEO afterward is month-to-month, and you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear read on what your current site is costing you in lost leads, what high-converting Mesa Web Design should carry to turn visitors into booked jobs, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'mesa', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Mesa Website Redesign | OnwardCraft',
    metaDescription:
      'Mesa Website Redesign that modernizes without tanking your traffic. Faster, mobile-first rebuilds that convert more and hold up in desert heat and winter-visitor season.',
    eyebrow: 'Website Redesign · Mesa-East Valley',
    h1: 'Mesa Website Redesign that modernizes your site without tanking your East Valley traffic',
    h2Exact: 'Mesa Website Redesign Company',
    heroSubhead:
      "A dated site bleeds you a few jobs every week: slow, clumsy on a phone, easy to swipe past. We redesign East Valley contractor sites to convert more and load faster, and we migrate with care so you keep every scrap of ranking you have already earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "A Mesa Website Redesign fails one of two ways: the site looks sharper but books the same, or it goes live and the rankings drop off a cliff overnight. We let neither happen. We rebuild East Valley contractor sites for speed and conversions, brace them for heat-wave and winter-visitor traffic, and run an SEO-safe migration with the redirects and discipline that protect the traffic you have already built, so you redesign your Mesa website without losing rankings.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO through a redesign by holding your URL structure or mapping a 301 redirect for every page that moves, keeping your existing content and metadata, carrying over your schema, and testing the whole thing on staging before launch. Handled right, a redesign keeps your rankings and lifts them, because the new build is faster, mobile-first, and better organized than the old one.",
    problemHeading: "Signs your Mesa site is overdue for a rebuild",
    painPoints: [
      { title: "It looks dated and quietly drains trust", body: "On a high-ticket job, a Mesa homeowner judges you by your site within seconds of landing on it. An old, cluttered design quietly pushes them toward a competitor who looks more established, even when your work is the better of the two." },
      { title: "It is slow and clumsy on a phone", body: "If your site stutters or drags on mobile, you are losing most of your Mesa visitors before they ever reach your offer. A mobile-first rebuild wins them back." },
      { title: "It cannot keep pace when demand surges", body: "Traffic that never becomes a call is wasted, and an old site that bogs down under a heat-wave or monsoon surge loses leads at the precise moment they are worth the most. We rebuild for conversions and for the 115-degree afternoons when an East Valley phone should be ringing nonstop." },
    ],
    servicesHeading: "What goes into an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pin down exactly what is costing you leads and rankings today, so the rebuild solves real problems instead of just swapping colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled by the book so you hold onto the rankings and traffic you have already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, smarter call-to-action placement, and lead forms people actually finish. We design for booked jobs, not just good looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and a clean pass on Core Web Vitals, which helps both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Reworked around the phone, where nearly all of your Mesa traffic actually is." },
      { name: 'Brand refresh', desc: "A modern, credible look that matches the caliber of your work and the price tag on your jobs." },
      { name: 'Demand-surge ready rebuild', desc: "Rebuilt to stay fast and keep converting when heat-wave, monsoon, or winter-visitor traffic spikes, so the new site banks your biggest jobs instead of choking on them.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search keeps tilting toward AI.", featured: true },
    ],
    processName: 'How we redesign: a measured rebuild',
    process: [
      { name: 'Audit and plan', desc: "We dig into what is losing you leads and rankings, then map a rebuild that fixes it without breaking what already pulls its weight." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-minded design you review and shape before we build it." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prep every redirect and SEO detail for a clean handover." },
      { name: 'Launch with SEO care', desc: "We go live with redirects in place and watch closely so rankings hold and climb rather than slide." },
      { name: 'Optimize', desc: "Post-launch tuning driven by what is actually converting East Valley visitors, plus steady speed work and updates." },
    ],
    pricing: {
      heading: 'Transparent Mesa redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A tight redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Demand-surge ready'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A ground-up rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'What does a website redesign cost in Mesa?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, set by size and integrations. The price is fixed, there are no surprises, and the finished site is yours to keep." },
      { q: 'Will I lose my Mesa rankings if I redesign?', a: "Not when it is handled with care, and that is exactly how we work. We map a 301 redirect for every URL that changes, keep content and metadata, carry over your schema, and test on staging first. Handled this way, a redesign keeps your Mesa rankings intact and usually lifts them a notch." },
      { q: 'How long does a redesign take?', a: "A tight redesign runs about 3 to 5 weeks, and a larger rebuild runs 5 to 9. We set a firm date at the start and check in with you at each phase." },
      { q: 'How do I know I need a redesign?', a: "If your site drags on phones, looks dated, is a pain to update, is not bringing in leads, or seizes up when heat-wave or monsoon traffic surges, it is costing you work. The free audit tells you straight whether a rebuild is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and sharpen your current content, protect what is already ranking, and handle the technical migration so nothing that matters slips through." },
      { q: 'Will the new site survive a heat-wave or winter-visitor surge?', a: "Yes, and in Mesa that is a genuine consideration. When a heat wave knocks out AC units across the valley or winter-visitor season nearly doubles your cold-weather demand, contractor sites take a surge of traffic, and the slow ones drop leads. We rebuild for raw speed and keep the call to action impossible to miss, so the site keeps booking work right when demand peaks." },
      { q: 'Will the rebuilt site be fast on Mesa phones?', a: "Yes. We rebuild it mobile-first and tune the load speed to pass Core Web Vitals, which raises both your conversion rate and your search position." },
      { q: 'Do I own the redesigned site?', a: "Fully: the site, the domain, and the content. No platform you cannot leave." },
      { q: 'Am I locked into a contract?', a: "No. The redesign itself is a one-time project, and anything ongoing like maintenance or SEO runs month-to-month with no lock-in." },
      { q: "What is in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the rebuild should fix, and a fixed-price Mesa Website Redesign quote with a timeline and an SEO-safe migration plan that keeps your rankings intact. No pressure, just a plan." },
    ],
  },
];

export const mesaCity = {
  citySlug: 'mesa', city: 'Mesa', state: 'Arizona', stateAbbr: 'AZ', metro: 'Mesa-East Valley',

  titleTag: 'Mesa Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Mesa marketing for contractors: web design, SEO, and local SEO that get you found and booked. Own your leads instead of renting them, built for desert heat and winter visitors.',

  eyebrow: 'Mesa · Web Design, SEO & Lead Generation',
  h1: 'Mesa marketing for contractors, built around the trades and the East Valley seasons',
  h2Exact: 'Mesa Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for the East Valley's growing, season-swung market. One team that gets you ranking across Mesa, converting visitors into jobs, and finally off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Desert-heat ready', 'No lock-in contracts'],
  primaryCta: 'Get my free Mesa audit',

  intro:
    "Mesa marketing for contractors comes down to competing for eyeballs in Arizona's third-largest city, inside an East Valley that keeps sprouting rooftops and a market that lurches between summer emergencies and winter-visitor work. As a digital marketing agency built for the trades, we pull three pieces together: a site that converts, SEO that ranks you for what people actually search, and local SEO that lands you in the Map Pack, all set before the next heat wave or winter-visitor wave sends demand through the roof. Here is how we help you get found and booked.",
  aioQuestion: 'How do Mesa contractors get more leads online?',
  aioAnswer:
    "Mesa contractors pull in more leads by pairing a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that takes the Google Map Pack. Because the East Valley keeps growing and demand jumps hard during the triple-digit summer, the monsoon, and the winter-visitor surge, the shops that look settled and already rank before each season collect the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Break into the three businesses Google pins to the map when the East Valley searches \"near me.\" For most local shops it is the highest-return move there is, and the way you catch both summer-heat and winter-visitor demand.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the keywords that pay, the ones your customers actually type, build an asset you keep instead of renting traffic from ads, and score it in booked leads rather than empty traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs, and to stay quick when a heat wave or winter-visitor season floods your phone, not brochures that sit there doing nothing.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild a dated site for speed and conversions, and migrate it with care so you hang onto every bit of ranking you have already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Mesa?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients pair a high-converting website with SEO and local SEO so they rank, convert, and keep their own leads, ready for the moment the summer heat and the winter-visitor season hit." },
    { q: 'Do you work only with contractors?', a: "Nearly always. We focus on home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, pool service, and general contractors, so we understand desert-heat emergencies, monsoon damage, and the repair lists winter visitors bring." },
    { q: 'Why does the season matter so much for my marketing?', a: "Mesa demand swings harder than almost anywhere. The triple-digit summer turns a dead AC into an emergency, monsoon storms batter roofs and equipment, and from October through April the winter-visitor population fills the 55-plus parks like Leisure World with repair work. Ranking takes months to build, so the contractors already visible before each season grab that work. We get you in position ahead of it." },
    { q: 'What does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO run month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Mesa areas do you serve?', a: "All of Mesa and the East Valley: Downtown Mesa, Las Sendas, Red Mountain, Eastmark, Dobson Ranch, Superstition Springs, and out to Gilbert, Chandler, Tempe, Apache Junction, and Queen Creek." },
    { q: 'Where should I start?', a: "Start with a free Mesa audit. We will look over your website, your rankings, and your Map Pack standing, then point out the one or two moves in your Mesa marketing for contractors that will bring in the most work soonest. No slide deck, just a plan." },
  ],
};
