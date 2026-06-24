// BOISE: per-metro, per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Boise's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// BOISE: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Boise is harder than it looks',
  body:
    "Boise has spent most of the last decade near the top of every fastest-growing-metro list in the country, and that single fact reshapes how home services get bought here. Newcomers from the Bay Area, Sacramento, Portland, and Seattle keep landing in the Treasure Valley, and they arrive with no plumber, no roofer, and no HVAC tech in their phone. The first thing they do is open Google. Whoever sits in the top results when that search happens gets a customer who has every relationship still to build. The valley sits in a high-desert bowl ringed by dry foothills, so two seasons drive the calendar. Late summer brings wildfire smoke off Idaho and Oregon burns; air quality drops, and HVAC, filtration, and duct-cleaning calls jump almost the day the haze settles over the Boise Front. Then real winter arrives, with hard freezes from December into February that push heating and frozen-line work. New construction is everywhere, from Harris Ranch to the edges of Kuna and Star, which means a steady supply of homeowners settling into houses that still need finishing, fixing, and upgrading. Buyers who moved from California are used to paying professional rates and judging contractors by how the search results look first, which makes a clean digital presence the gate you pass through before anyone calls.",
  pullQuote: 'In a valley filling up this fast, the contractor who answers the first Google search a new homeowner runs is the one who keeps that customer for years.',
  donut: {
    title: 'Boise metro growth since 2015',
    value: 72,
    centerLabel: 'growth since 2015',
    legend: [
      { label: 'Population growth', pct: 72, kind: 'teal' },
      { label: 'Existing base', pct: 28, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Wildfire smoke (Aug–Sep), winter heating (Dec–Feb), spring irrigation/drainage',
  seasonalDemand: [
    { m: 'J', v: 85, peak: true }, { m: 'F', v: 82, peak: true }, { m: 'M', v: 55 },
    { m: 'A', v: 60 }, { m: 'M', v: 65 }, { m: 'J', v: 58 }, { m: 'J', v: 62 },
    { m: 'A', v: 90, peak: true }, { m: 'S', v: 88, peak: true }, { m: 'O', v: 54 },
    { m: 'N', v: 70 }, { m: 'D', v: 88, peak: true },
  ],
  stats: [
    { value: 'Top 10', label: 'fastest-growing US metros for most of the past decade' },
    { value: '72%', label: 'metro population growth since 2015, new homeowners with no contractor relationships', accent: true },
    { value: 'Aug–Sep', label: 'wildfire smoke season, when HVAC filtration calls spike overnight' },
    { value: 'Top 3', label: 'Map Pack spots that capture most of the clicks when someone searches your trade' },
  ],
  neighborhoods: [
    'North End', 'East End', 'Hyde Park', 'Garden City', 'Downtown Boise',
    'Eagle', 'Meridian', 'Nampa', 'Caldwell', 'Star',
    'Kuna', 'Middleton', 'Micron Area', 'Harris Ranch', 'Southeast Boise',
  ],
};

const AREAS = [
  'Boise', 'Meridian', 'Nampa', 'Eagle', 'Caldwell', 'Star', 'Kuna',
  'Garden City', 'North End', 'East End', 'Hyde Park', 'Harris Ranch',
  'Southeast Boise', 'Middleton', 'Treasure Valley',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching solid contractors hand Angi and HomeAdvisor a few grand a month for leads three of their competitors also bought. You can't build a business on rented leads. Boise is one of the fastest-growing markets in the country, and that growth means real opportunity, but only for contractors who show up where new homeowners are actually searching. That's the whole point of what we do here: get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We know what a smoke-season filtration call sounds like, how a hard February freeze blows up a plumbing schedule, and what a family that just moved up from the Bay Area wants to see before they hire. Everything we build is shaped around how Treasure Valley homeowners actually search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The goal is a pipeline that belongs to you. Not one more monthly invoice to a broker reselling the same Meridian homeowner to three shops down the road while you all bid against each other.",
  },
  {
    title: 'We actually understand Boise',
    body: "Targeting that goes block by block from the North End to Eagle to Nampa, plus the timing to rank you for smoke season and winter heating before the calls land. That is local knowledge a national agency cannot fake by dropping a city name into a template.",
  },
  {
    title: 'No contracts, no mystery',
    body: "Published prices, reporting tied to real leads, month-to-month after the first 90 days. If we are not earning the invoice, you go. That keeps the pressure exactly where it belongs, which is on us.",
  },
];

const PROOF = {
  heading: "We're new, so here's the honest math instead of a logo wall",
  body:
    "Plenty of agencies open with a wall of client logos. We are a young, founder-led shop in a city that adds new residents every month, so we would rather show you the reasoning than dress up a track record we have not built yet. Everything below comes straight from Google's and the industry's own research on how people hunt for a local contractor.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here is a rough picture, labelled plainly as an illustration and not a result we are claiming: say a Boise contractor pulls around 1,800 local \"near me\" impressions a month across a handful of Treasure Valley communities. Moving from page-two invisibility into the top three is the gap between a few stray calls and a calendar you cannot keep up with, and in a valley adding new homeowners every single month that gap only widens. In your free audit we model the real figures for your business: your current rankings, your actual search volume, and a straight 90-to-180-day path to the top of the map.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Boise', state: 'Idaho', stateAbbr: 'ID', metro: 'Boise',
  heroProof: ['Built for the trades', 'Treasure Valley targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const boiseLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'boise', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Boise Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Boise Local SEO that turns the "near me" searches new Treasure Valley homeowners run into a ringing phone. We get you into the Google Map Pack three.',
    eyebrow: 'Local SEO · Boise, Idaho',
    h1: 'Boise Local SEO that turns "near me" searches in the North End into a ringing phone',
    h2Exact: 'Boise Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me,\" and the names below them might as well not exist. In a valley filling up this fast, with new homeowners arriving every month who have nobody in their phone yet, those top three spots are how you build a customer base that belongs to you.",
    primaryCta: 'Get my free Boise audit',
    intro:
      "Boise local SEO comes down to one moment: a homeowner in Meridian or Eagle or the North End types your service plus \"near me,\" and either you are one of the three businesses Google pins to the map or you are not. Most people tap one of those three and never scroll. This is one of the fastest-growing metros in the country, and the families moving in from California arrive with high expectations, money to spend, and a phone already in their hand. Showing up is the whole game. Here is exactly how we get you there.",
    aioQuestion: 'How do Boise businesses rank higher in local search?',
    aioAnswer:
      "Get four things right: a Google Business Profile tuned to the exact services and Treasure Valley communities you want, name and address and phone details that match everywhere online, a steady flow of real reviews, and local pages built around genuine Boise neighborhoods. Because new homeowners keep arriving with no contractor relationships, the winner is whoever already ranks first in the Map Pack when that search runs.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Three other shops own the top of the map', body: "Run your own service plus \"near me\" right now. Those three businesses Google pins to the map take the overwhelming majority of the clicks. If you are not one of them, the quality of your work barely registers, because most people, including the family that just bought in Eagle with a project budget to match, never see your name. Climbing into that top three across the Treasure Valley is usually the single highest-return move a Boise contractor can make." },
      { title: 'Every lead you buy was sold to three rivals too', body: "Angi, Thumbtack, and HomeAdvisor sell the same Boise homeowner to four contractors at once, then charge each of you to fight over the scraps. It is a treadmill you never get off. Local SEO builds the opposite asset: a homeowner finds you, calls you, and nobody else got the lead. Run it long enough in a market growing this fast and you stop renting visibility and start owning a pipeline that compounds." },
      { title: 'The smoke and freeze rushes pass you by', body: "Boise has two hard surges a year. Wildfire smoke rolls into the valley in August and September, and HVAC, filtration, and air-quality calls jump almost overnight. Then winter heating demand runs hard from December into February. The contractors already ranking for those terms catch the rush. If your local SEO ignores seasonal demand, your busiest weeks go to whoever was in place first." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest single lever in the Map Pack. We tighten your categories, services, service area, photos, and posts until Google knows exactly which Boise and Treasure Valley searches should surface your business." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to read the same everywhere Google looks. We correct the listings that disagree with each other and add the ones you are missing across the valley." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns each finished job into a fresh review. It nudges your ranking up and hands the newcomer scrolling on their phone a reason to call you before anyone else." },
      { name: 'Neighborhood pages', desc: "Dedicated pages for Meridian, Eagle, Nampa, the North End, and the rest, so you surface for the precise community someone typed instead of a catch-all \"Boise\" page." },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The groundwork that has to be solid before any other piece can climb." },
      { name: 'Local link building', desc: "Mentions and links from Boise and Idaho sources Google already trusts: local press, trade groups, chambers, and community partners. In a market adding contractors every year, that is frequently the difference between page one and page two." },
      { name: 'Seasonal smoke and winter SEO', desc: "We get you ranking for the wildfire-smoke filtration and winter-heating searches that surge hardest in the valley, so you are catching demand as it builds rather than chasing it once it peaks.", featured: true },
      { name: 'AI search readiness', desc: "A growing share of \"near me\" research now starts inside AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read your business and name it in their answers.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We measure where you actually rank today across Boise and the Treasure Valley, then pinpoint which competitors are outranking you in the Map Pack and the specific reasons they win." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP go first because they move the fastest. In a valley where searches climb every month, that early lift usually shows up within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review system switch on. Both compound week over week, which is why a contractor who starts now beats one who waits, especially while Boise keeps adding residents." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Meridian, Eagle, Nampa, Caldwell, Star, and Kuna, plus the smoke-season and winter-heating content the calendar runs on." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and booked work, never vanity rankings. Then we move on and go claim the next Treasure Valley community." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting your Boise Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Treasure Valley communities.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across the Treasure Valley.', features: ['Everything in Local Growth', 'Local link building', 'Seasonal smoke and winter SEO', 'Multi-community service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Boise?', a: "Most Boise engagements land between $750 and $2,500 a month, depending on how many communities and keywords you are going after. The tiers above lay it out. No hidden fees, no long contract, and we lock the exact scope in your free audit before you spend a dollar." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move within a few weeks. The competitive Boise keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days in a growing market with real competition is selling you a fantasy." },
      { q: 'What makes Boise local SEO different from other markets?', a: "Two things. The growth never lets up: new homeowners keep arriving with nobody in their phone, and the first thing they do is search. And the valley has dramatic seasonal swings: wildfire smoke in August and September sends HVAC and filtration calls through the roof, and winter heating demand runs hard from December into February. You have to be ranking before those spikes, not after." },
      { q: 'Can you help me reach the California transplants moving to Boise?', a: "Yes, and in Boise that is a genuine edge. People moving up from the Bay Area and Southern California are used to paying professional rates and are actively hunting for a contractor they can trust, and a clean search presence is the first filter they use. We make sure you show up and look the part when they search in Eagle, Meridian, and the East End." },
      { q: 'Which areas do you cover?', a: "All of the Treasure Valley: Boise proper, Meridian, Nampa, Eagle, Caldwell, Star, Kuna, and Garden City. We build genuine neighborhood pages for the North End, East End, Hyde Park, Harris Ranch, and the communities around them, because that is what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It is basically all we do: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand smoke-season filtration jobs, winter freeze events, and what a new Boise homeowner is actually typing into Google." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research now starts in AI instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. In a fast-growing market that is quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an opening 90 days because that is about how long local SEO takes to move the needle in a Treasure Valley market this competitive. After that you are month-to-month. If the leads are not showing up, you walk, and the accountability sits with us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that send leads straight to you. In a market growing as fast as Boise those owned leads compound quickly, so over time you lean on the brokers less because the work is already coming to you direct." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across the Treasure Valley, what your Map Pack competitors are doing to beat you, the fixes that will move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck, just a straight diagnosis of what Boise Local SEO can do for your shop." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'boise', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Boise SEO Company | Rank Higher, Get Leads | OnwardCraft',
    metaDescription:
      'Boise SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in contracts, built for a fast-growing market.',
    eyebrow: 'SEO Services · Boise, Idaho',
    h1: 'Boise SEO that ranks you for the Treasure Valley searches that book jobs',
    h2Exact: 'Boise SEO Company',
    heroSubhead:
      "Ads die the second you stop paying. SEO does the reverse: rank once for what your Boise customers search and the leads keep arriving for months. We build that ranking for contractors across the Treasure Valley and tie every report to real calls and booked jobs, not vanity charts.",
    primaryCta: 'Get my free Boise SEO audit',
    intro:
      "Boise SEO comes down to one blunt question: when a homeowner in Meridian or Eagle searches what you do, are you on page one or page two? In this market page two might as well be page fifty. We get contractors ranking for the money keywords in one of the fastest-growing metros in the country, and we measure the whole thing in leads, not traffic that never picks up the phone. In a valley where new homeowners keep arriving with nobody on speed dial, a page-one ranking is how you keep the calendar full.",
    aioQuestion: 'How do Boise businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, tuning each page for the exact terms customers search, publishing genuinely useful local content tied to specific Treasure Valley communities, and earning links from trusted Idaho sources. In a fast-growing market, tight neighborhood targeting and ranking for the seasonal wildfire-smoke and winter-heating terms are two of the quickest ways to pull ahead of rivals still chasing generic city-wide keywords.",
    problemHeading: "Three reasons your Boise site isn't bringing in work",
    painPoints: [
      { title: 'Page two is where Boise leads go to die', body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it either. In a market this competitive and growing this fast, with new contractors arriving alongside new homeowners, if you are not in the top handful of results for what you sell, your site is effectively invisible no matter how good your work is." },
      { title: 'Stop the ad spend and the leads stop cold', body: "Ads can work, but the instant your card stops, the leads stop with it. SEO builds an asset you actually own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost. In a growing market like Boise, that asset gets more valuable every year as the population base expands underneath it." },
      { title: "The valley's busiest weeks are passing you by", body: "Boise demand swings hard with the seasons: heating and freeze work in winter, and a sharp jump in HVAC and filtration calls when wildfire smoke settles over the valley every August and September. The contractors who rank for those terms ahead of time catch the surge. If your SEO ignores seasonal and emergency searches, you are quietly handing away your busiest, most profitable weeks." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawl health, load speed, Core Web Vitals, schema, and the behind-the-scenes fixes Google needs handled before it will rank your Boise site at all." },
      { name: 'On-page optimization', desc: "Every page that earns its keep tuned for the exact terms your Boise and Treasure Valley customers search: titles, headings, body copy, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers are searching, attract links, and keep bringing in leads long after we hit publish." },
      { name: 'Link building', desc: "Authority from real Boise, Idaho, and industry sources. In a growing market where more contractors arrive every year, links are often the line between page one and page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack work so you win the \"near me\" searches across Meridian, Eagle, Nampa, and the rest of the Treasure Valley right alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and booked leads, not just rankings and traffic, so you always know what your SEO is worth in actual dollars." },
      { name: 'Seasonal & emergency SEO', desc: "We rank you for the wildfire-smoke HVAC calls and the winter-heating searches that drive the valley's busiest weeks, so you are visible before demand spikes rather than scrambling after it.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of Boise search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Boise and Treasure Valley leads, not just impressions." },
      { name: 'Fix the technical base', desc: "Speed, crawl health, schema, and mobile. The foundation every other effort depends on before it can rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus fresh local content, including the smoke-season and winter-heating terms that decide who wins those weeks in this valley." },
      { name: 'Build authority', desc: "Links and citations from trusted Boise and Idaho sources to push your competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what is working and push into the next keyword set or community." },
    ],
    pricing: {
      heading: 'Transparent Boise SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused Boise site chasing its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and Treasure Valley communities.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Boise and Treasure Valley search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal & emergency SEO', 'Multi-community pages', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Boise?', a: "Most Boise SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. The tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Boise?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter community-level terms and slower on the most contested Treasure Valley keywords. SEO compounds, so the longer you run it the bigger the gains get, and in a market growing as fast as Boise the foundation you build now pays off for years." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops the moment you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Boise contractors do best running SEO as the long-term engine and ads for short-term spikes or a new service area." },
      { q: 'Should my Boise SEO target seasonal demand?', a: "Absolutely. When wildfire smoke settles over the valley every August and September, HVAC and filtration calls spike overnight. Winter freeze events and heating demand run hard from December into February. Ranking takes months to build, so you have to be in place before the season rather than chasing it after. We optimize for those seasonal and emergency terms ahead of time so your busiest weeks land on you." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal/emergency and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. The opening 90 days is there because SEO simply takes that long to move competitive Boise keywords, and after that the engagement runs month-to-month. If the work is not paying for itself, you go." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a growing slice of what we work on, and it matters in a metro where so many new arrivals research before they call. We structure your content and schema so AI engines can read, trust, and name your Boise business, not just rank it in classic results." },
      { q: 'Which areas around Boise do you cover?', a: "All of the Treasure Valley: Boise, Meridian, Nampa, Eagle, Caldwell, Star, Kuna, and Garden City, with genuine local pages for each community rather than one generic Boise page, because that is what actually ranks for \"[service] [city]\" searches." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. In a market growing as fast as Boise, those owned leads are worth more every year, so over time you lean on paying brokers for shared leads less because the work is already coming to you direct." },
      { q: "What's in the free SEO audit?", a: "Where you rank today across the Treasure Valley, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a straight diagnosis of what Boise SEO can do for your bottom line." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'boise', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Boise Web Design Company | Sites That Convert | OnwardCraft',
    metaDescription:
      'Boise web design that turns visitors into booked jobs. Fast, mobile-first sites built for contractors in one of the fastest-growing markets in the country.',
    eyebrow: 'Web Design · Boise, Idaho',
    h1: 'Boise Web Design built to convert Treasure Valley clicks into calls',
    h2Exact: 'Boise Web Design Company',
    heroSubhead:
      "A handsome website that never generates a call is just an expensive brochure. We build Boise contractors fast, mobile-first sites engineered to turn visitors into booked work, and polished enough to win over the families who moved up from California expecting professional quality.",
    primaryCta: 'Get my free quote',
    intro:
      "Boise Web Design that works is the difference between a site that books jobs and one that just sits there. Most contractor sites here bleed leads quietly: slow on a phone, call button buried, nothing that tells a visitor you serve their neighborhood. We build fast-loading, mobile-first websites that look like the professional you actually are and turn Treasure Valley visitors into booked jobs, built for a market where new homeowners are searching every month and judging you on first impressions.",
    aioQuestion: 'What makes a good contractor website in Boise?',
    aioAnswer:
      "A good Boise contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific communities you serve across the Treasure Valley. Because newcomers from California expect a clean online experience and most searches happen on mobile, phone speed and an obvious next step are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: 'It lists services and then just sits there', body: "Plenty of contractor sites read like a printed pamphlet: a list of services, no clear offer, no obvious next step, no reason to call you over the next name on the map. In Boise, where new residents are searching for contractors they have never heard of, your website is often their first and only impression. We design every page around one job: turning a visitor into a booked lead." },
      { title: 'New arrivals bounce before it even loads', body: "Most of your Boise visitors are on a phone, and they leave if your site takes more than a couple of seconds to appear. Slow sites also rank worse, so you lose twice. We build fast, so you keep both the visitor and the ranking, and so the family that found you at 8pm the night they moved in actually calls." },
      { title: 'A generic Boise page wins nobody in Eagle', body: "A homeowner in Eagle wants to see that you serve Eagle, not a one-size-fits-all \"Boise\" page that could belong to anybody. We build sites that name the Treasure Valley communities you work, so visitors trust that you are local and Google ranks you for the right searches." },
    ],
    servicesHeading: "What's in an OnwardCraft Boise website",
    services: [
      { name: 'Custom design', desc: "No off-the-shelf templates. A site shaped around your trade, your communities, and the exact jobs you want more of, built to land with both longtime locals and the families who just moved into the valley." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that is where nearly all of your Boise traffic lives. Fast, thumb-friendly, and a single tap away from a call." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where homeowners actually reach for them. Every page carries one unmistakable next step." },
      { name: 'Copy that sells', desc: "Words written for a homeowner new to the valley looking for someone they can trust, not filler that reads like every other contractor in town." },
      { name: 'Local SEO foundation', desc: "Built to rank from the first line of code: clean structure, schema, fast load, and Treasure Valley community pages ready to go." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and clear Google's performance checks, which protects your conversions and your rankings in the same pass." },
      { name: 'Community-targeted pages', desc: "Pages built around Meridian, Eagle, Nampa, Caldwell, and the communities you serve, so you stand out in a growing market instead of blending into one generic Boise page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read your site and recommend your business as more Boise search shifts toward AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your communities, your most profitable jobs, and your competitors, then map the site around booking more of the work you actually want across the Treasure Valley." },
      { name: 'Design', desc: "We design a custom, mobile-first layout aimed at booking Treasure Valley jobs, and you see it and shape it before a single line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells to Boise homeowners, with the call to action sitting front and center on every page." },
      { name: 'Launch', desc: "We push it live cleanly, with the SEO foundation, tracking, and speed all dialed in from the first day." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what is actually turning visitors into calls." },
    ],
    pricing: {
      heading: 'Transparent Boise web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade Boise contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors working several Treasure Valley services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + community pages', 'Speed & Core Web Vitals', 'Community-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location Treasure Valley businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Boise?', a: "Most Boise contractor websites with us land between $2,000 and $8,000 as a one-time build, set by page count and integrations. The tiers are above: fixed price, no surprises, and the finished site is yours to keep." },
      { q: 'How long does it take to build?', a: "A focused Boise site takes roughly 2 to 4 weeks; a larger custom build runs 4 to 8. You get a firm timeline up front and a status update at every stage." },
      { q: 'Will my site help me stand out in a growing market like Boise?', a: "That is the whole point. New homeowners keep landing in the Treasure Valley with no contractor relationships, and they choose who to call based on first impressions online. We build around the specific communities you serve, keep the site fast, and put a clear offer front and center, so yours is the site that books the job." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and Treasure Valley community pages. The build gets you ready to rank, and pairing it with our SEO service is how you climb the competitive Boise terms." },
      { q: 'Do I own the website?', a: "Completely. The site, the domain, and the content are all yours. No hostage situations and no platform you cannot walk away from." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where nearly all of your Boise traffic comes from, including the newcomers scrolling on their phones looking for a reliable contractor the night they move in." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can manage yourself, usually WordPress or Webflow. We recommend the right fit in your free consult and explain the tradeoffs in plain English." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every Boise build comes with launch support, and after that we offer affordable monthly maintenance covering updates, speed, and security." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project at a fixed price. Any maintenance or SEO afterward runs month-to-month, so you can step away whenever you choose." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Boise contractor site should include, and a fixed-price quote with a timeline. No pressure, just a plan for the Boise Web Design that finally books work." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'boise', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Boise Website Redesign | OnwardCraft',
    metaDescription:
      'Boise Website Redesign that keeps every ranking you have earned. Faster, mobile-first rebuilds that convert more visitors into booked jobs in a fast-growing market.',
    eyebrow: 'Website Redesign · Boise, Idaho',
    h1: 'Boise Website Redesign that keeps every Treasure Valley ranking you have earned',
    h2Exact: 'Boise Website Redesign Company',
    heroSubhead:
      "An outdated site quietly costs you jobs every week: slow, clumsy on a phone, easy for a Boise homeowner to skip past. We redesign contractor sites to convert more and load faster, and we migrate so carefully that you keep every bit of ranking you have already earned in a market that only gets more competitive.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Boise Website Redesign goes one of two bad ways for most contractors: the site looks prettier but converts exactly the same, or it launches and the rankings vanish overnight. We do neither. We rebuild Boise contractor sites for speed and conversions, build them to win over newcomers and longtime locals alike, and handle the SEO-safe migration with the redirects and care that protect the traffic you have already built.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign holds your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one, and in a market growing as fast as Boise a stronger site pays compounding dividends.",
    problemHeading: "Signs your Boise site is overdue for a redesign",
    painPoints: [
      { title: 'Transplants size you up by the site, and walk', body: "Boise is full of newcomers from California who size you up by your site in seconds before they hire anyone. An old, cluttered design quietly ships them to a competitor who simply looks more established, even when your work is plainly better. In a market growing this fast, that first impression is often your only chance." },
      { title: 'Half the valley leaves before it loads on mobile', body: "If your site is clunky or slow on a phone, you are losing the majority of your Boise visitors before they ever reach your offer. A redesign built mobile-first wins those visitors back, and it lifts your Google ranking at the same time." },
      { title: 'A dated site reads like every other contractor', body: "Traffic that never turns into calls is wasted money, and a generic old site in a valley adding contractors as fast as it adds homeowners gives a visitor no reason to pick you. We rebuild for conversions and for the Treasure Valley communities you actually serve, so the right buyers choose you." },
    ],
    servicesHeading: "What's in an OnwardCraft Boise redesign",
    services: [
      { name: 'Redesign audit', desc: "We pin down exactly what is costing you leads and rankings today, so the redesign fixes the real problems instead of just swapping the colors around." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep every bit of the rankings and traffic you have already earned in Boise." },
      { name: 'Conversion redesign', desc: "Clear offers, smarter call-to-action placement, and lead forms Boise homeowners actually fill out. We rebuild for booked jobs, not just a prettier screenshot." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals, so conversions and Boise rankings climb together." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where nearly all of your Boise traffic actually lives, including the newcomer who found you from a hotel room the week they moved in." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the expectations of the buyers arriving in the Treasure Valley." },
      { name: 'Community-targeted rebuild', desc: "Rebuilt around Meridian, Eagle, Nampa, and the communities you serve, so the new site stands out in a growing market instead of reading like everyone else's.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as more Boise search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We trace what is costing you Boise leads and rankings, then map a redesign that fixes it without breaking what already works for you." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build a single thing." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and line up every redirect and SEO detail so the migration lands clean, with no surprises." },
      { name: 'Launch with SEO care', desc: "We go live with redirects in place and watch closely so your rankings hold and climb instead of dropping." },
      { name: 'Optimize', desc: "Post-launch tuning driven by what is actually converting Boise visitors into calls, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Boise redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small Boise contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established Treasure Valley contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + community pages', 'Community-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location Treasure Valley sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Boise?', a: "Most Boise redesigns with us land between $2,500 and $9,000 as a one-time project, set by size and integrations. Fixed price, no surprises, and the result is yours to keep." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it is done carefully, and that is exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually pushes them higher, because the new site is faster and better structured than the old one." },
      { q: 'How long does a redesign take?', a: "A focused redesign runs roughly 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and a status update at every stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is a pain to update, is not bringing in leads, or blends into a Boise market that is getting more competitive by the month, it is costing you work. The free audit tells you plainly whether a redesign is worth it for your business." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and tighten your existing content, hold onto the pages already ranking in Boise, and handle the technical migration so nothing important slips through the cracks." },
      { q: 'Will the redesign help me compete as Boise keeps growing?', a: "Yes, and that is the point in a market adding contractors and homeowners at this pace. We rebuild around the specific communities you serve, keep the site fast, and make the offer and call button obvious, so the new site stands out instead of reading like every other contractor in the valley." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, since that is where nearly every Boise visitor lands and it lifts conversions and rankings together." },
      { q: 'Do I own the redesigned site?', a: "Completely: the site, the domain, and the content are all yours. No platform lock-in of any kind." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any maintenance or SEO afterward runs month-to-month." },
      { q: "What's in the free redesign audit?", a: "A straight read on what your current site is costing you in Boise leads and rankings, what the redesign needs to fix, and a fixed-price quote with a timeline and a safe migration plan, so your Boise Website Redesign launches without losing a thing." },
    ],
  },
];

export const boiseCity = {
  citySlug: 'boise', city: 'Boise', state: 'Idaho', stateAbbr: 'ID', metro: 'Boise',

  titleTag: 'Boise Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Boise marketing for contractors: web design, SEO, and local SEO that get you ranked and booked across the Treasure Valley. Own your leads instead of renting them.',

  eyebrow: 'Boise · Web Design, SEO & Lead Generation',
  h1: 'Boise marketing for contractors in the Treasure Valley: get ranked, get booked',
  h2Exact: 'Boise Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for one of the fastest-growing markets in the country. One team to get you ranking across the Treasure Valley, winning over newcomers and locals alike, and off the rented-lead treadmill for good.",
  heroProof: ['Built for the trades', 'Treasure Valley targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Boise audit',

  intro:
    "Boise marketing for contractors has to account for one fact: you are operating in one of the fastest-growing metros in the United States. New homeowners, many of them arriving from California with no contractor relationships and money to spend, keep landing in the valley, and the first thing they do is search on their phone. Winning here takes three things working together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack for the communities you serve across the Treasure Valley. Add the wildfire-smoke spikes every August and September and the hard winters that drive heating demand from December into February, and you have a market with real seasonal opportunity for the contractor already ranking when demand hits. Here is exactly how we help Boise contractors pull that off.",
  aioQuestion: 'How do Boise contractors get more leads online?',
  aioAnswer:
    "Boise contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack community by community across the Treasure Valley. In a metro growing this fast, where new homeowners keep arriving with no contractor relationships, the contractor who shows up first in search wins a disproportionate share of new customers. Ranking for seasonal demand spikes like wildfire-smoke HVAC calls and winter heating searches gives extra ground over competitors who are not prepared.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when someone in Meridian, Eagle, or Nampa searches your service. In a valley full of new homeowners with nobody on speed dial, that Map Pack spot is worth more every year.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your Boise customers actually search, including the smoke-season and winter-heating terms that flood in demand, and build an asset you own instead of renting traffic from ads.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites that win the trust of newcomers and local homeowners alike, engineered to turn visitors into booked work, not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it so carefully that you keep every bit of ranking you have already earned in a market that only gets more competitive.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Boise?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads across the Treasure Valley, rather than renting them from lead brokers." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors, so we understand smoke-season filtration calls, winter freeze events, and what a new Boise homeowner is actually searching for." },
    { q: 'Why does the Boise market need a different approach?', a: "Boise has been one of the fastest-growing metros in the country for a decade. New homeowners keep arriving, many from California, with no existing contractor relationships, and they search on their phones. The contractor who shows up in those searches wins a customer for years, because those newcomers are building every relationship from scratch. Seasonal spikes from wildfire smoke and hard winters add opportunity for contractors who plan ahead." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO run month-to-month from $750 to $3,000, with no long contract. We confirm the exact scope for your Boise business in the free audit." },
    { q: 'Which Boise and Treasure Valley areas do you serve?', a: "All of the Treasure Valley: Boise, Meridian, Nampa, Eagle, Caldwell, Star, Kuna, and Garden City, with genuine local pages for the North End, East End, Hyde Park, Harris Ranch, and the neighborhoods around them." },
    { q: 'Where should I start?', a: "Start with a free Boise audit. We look at your website, your rankings, and your Map Pack presence across the Treasure Valley, then tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a plan for Boise marketing for contractors that actually fills the calendar." },
  ],
};
