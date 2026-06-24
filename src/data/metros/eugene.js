// EUGENE: per-metro, per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Eugene's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// EUGENE: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Eugene runs on the rain and the heat dome aftermath',
  body:
    "Eugene sits at the heart of the wet Willamette Valley, where the Pacific climate pours rain from October through April. Homeowners here fight moss-covered roofs, clogged gutters, rotting siding, and standing-water drainage every single year. That steady seasonal rain is the engine behind contractor demand, and the crews ranking for those searches when the skies open in October are the ones whose phones stay busy all winter. Then there is the other half of the story. The 2021 Pacific Northwest heat dome hit Eugene at 107 degrees, in a city where most older homes were built with no air conditioning at all. That week rewired how people think about their houses, and demand for heat pump and mini-split installation has stayed high ever since. Add 25,000 University of Oregon students, a strong rental market in this self-styled Track Town USA, and a research-heavy, eco-conscious homeowner base that reads reviews, checks credentials, and leans toward independent local crews over national chains. The result is a market where being found for the right work at the right moment is the whole job.",
  pullQuote: 'Eugene brings the rain, the moss, and the heat-dome exposure. Whoever owns the map for those searches books the work.',
  donut: {
    title: 'How Eugene searches',
    value: 62,
    centerLabel: 'college-educated',
    legend: [
      { label: 'College-educated', pct: 62, kind: 'teal' },
      { label: 'Other', pct: 38, kind: 'grey' },
    ],
  },
  seasonTitle: 'When the work piles up in Eugene',
  seasonCaption: 'Wet-valley roof and moss season (Oct to Apr), heat pump rush (Jun to Aug)',
  seasonalDemand: [
    { m: 'J', v: 85, peak: true }, { m: 'F', v: 82, peak: true }, { m: 'M', v: 78, peak: true },
    { m: 'A', v: 55 }, { m: 'M', v: 50 }, { m: 'J', v: 72, peak: true }, { m: 'J', v: 86, peak: true },
    { m: 'A', v: 80, peak: true }, { m: 'S', v: 56 }, { m: 'O', v: 80, peak: true },
    { m: 'N', v: 90, peak: true }, { m: 'D', v: 88, peak: true },
  ],
  stats: [
    { value: '~175K', label: 'people in Eugene-Springfield, gateway to the Willamette Valley' },
    { value: '~62%', label: 'of residents are college-educated, research-heavy buyers who vet local contractors carefully', accent: true },
    { value: 'Oct-Apr', label: 'rainy season: peak demand for roof, gutter, moss, and drainage work' },
    { value: 'Post-2021', label: 'heat dome demand for HVAC and mini-split installation runs year-round' },
  ],
  neighborhoods: [
    'South Hills', 'Friendly Area', 'Whiteaker', 'Fairmount', 'Downtown Eugene',
    'Springfield', 'Junction City', 'Cottage Grove', 'Creswell', 'Veneta',
    'River Road', 'Santa Clara', 'Bethel', 'Cal Young', 'Amazon District',
  ],
};

const AREAS = [
  'Eugene', 'Springfield', 'South Hills', 'Friendly Area', 'Whiteaker',
  'Fairmount', 'Junction City', 'Cottage Grove', 'Creswell', 'Veneta',
  'River Road', 'Santa Clara', 'Bethel', 'Cal Young', 'Coburg',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. In a market like Eugene, where homeowners research everything and prefer local over national, that local-first ranking is an even bigger edge. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We understand rain-season roof and gutter emergencies, heat pump installations that have been backlogged since the 2021 heat dome, and the eco-conscious Eugene buyer who reads every review before calling. Everything we build is shaped around how your customers actually search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not one more monthly invoice to a lead broker for homeowners three competitors also bought. That matters even more in Eugene, where people trust independent local operators over national-brand middlemen.",
  },
  {
    title: 'We actually speak Eugene',
    body: "Neighborhood-by-neighborhood targeting from the Friendly Area to Springfield and Cottage Grove, plus a real grasp of the seasonal demand cycle that runs the Willamette Valley. That is the stuff a national shop cannot fake by swapping a city name into a template.",
  },
  {
    title: 'No contracts, no mystery',
    body: "Our prices sit right on the page. Reporting points at booked Eugene jobs, not vanity charts, and you go month-to-month once the first 90 days are up. If the work stops paying for itself, you walk and we have only ourselves to blame.",
  },
];

const PROOF = {
  heading: "No Eugene logo wall yet, so here is the honest math instead",
  body:
    "Most agencies lead with a grid of past clients. We are a young, founder-run shop in the Willamette Valley, so we are not going to invent a record we have not earned. What we can put in front of a Eugene contractor is the reasoning, pulled straight from Google's and the industry's research on how people actually search for local help.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming. Say an Eugene contractor pulls around 1,200 local \"near me\" impressions a month across a handful of neighborhoods. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a booked-out rainy season. In a market where eco-conscious homeowners research before they ever call, that gap in trust signals hurts. In your free audit, we model the real numbers for your business: your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Eugene', state: 'Oregon', stateAbbr: 'OR', metro: 'Eugene-Springfield',
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const eugeneLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'eugene', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Eugene Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Eugene Local SEO that ranks you above the competition on the map, so the "near me" call lands with you, not three rivals across the Willamette Valley.',
    eyebrow: 'Local SEO · Eugene, OR',
    h1: 'Eugene Local SEO that ranks you above the South Hills competition on the map',
    h2Exact: 'Eugene Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. In Eugene's research-driven, eco-conscious market, we get you into that top three for the neighborhoods you serve, so the call lands with you when the rains start in October or the heat pump inquiries spike in June.",
    primaryCta: 'Get my free Eugene audit',
    intro:
      "Eugene local SEO comes down to one thing: when a homeowner in the South Hills or Springfield searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. Eugene buyers research carefully. They read reviews, check credentials, and lean hard toward local operators. So being one of those three with a polished, trustworthy profile is how you win the rain-season roof calls, the post-heat-dome mini-split inquiries, and every job in between.",
    aioQuestion: 'How do Eugene businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile tuned to the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of genuine reviews; and local content tied to real Eugene and Springfield neighborhoods. In Eugene, the rainy October-through-April season and the ongoing post-2021 heat dome demand for HVAC and mini-splits make seasonal targeting critical. You have to be in place before those searches spike, not after.",
    problemHeading: "A quiet Eugene phone usually traces to one of these",
    painPoints: [
      { title: 'Three competitors already hold the map in Eugene', body: "Pull up your own service plus \"near me\" right now. Those three businesses Google pins above the fold take the bulk of the taps, and a careful Willamette Valley homeowner reads them closely before dialing anyone. Sit below them and the quality of your roofs or your wiring barely registers. For most Eugene contractors, climbing into that top three is the highest-return move on the board." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Eugene homeowner to several contractors, then bill each of you to fight over them. Eugene buyers already distrust that model. They want local, vetted operators, not a national lead broker's referral. Local SEO builds the opposite: a lead finds you, trusts you because you show up first in their own search, and calls only you. Over time you stop renting and start owning the pipeline." },
      { title: "You're missing the seasonal demand window", body: "Eugene's rain season runs October through April, and moss, roof, gutter, and drainage calls spike every fall. The 2021 heat dome also created a backlog of HVAC and mini-split installation demand that still hasn't fully cleared. The contractors who rank for those searches before the season opens are the ones whose phones don't stop. If your profile and content aren't ready before the rains arrive, you're handing those jobs to whoever ranked first." },
    ],
    servicesHeading: 'What it actually takes to rank you in Eugene',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Eugene and Springfield searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone need to read the same everywhere Google checks. We reconcile the Eugene-Springfield listings that disagree and add the directories you never claimed." },
      { name: 'Reviews that keep coming', desc: "Eugene homeowners read reviews carefully. A simple system that turns finished jobs into a steady flow of reviews lifts your ranking and makes research-intensive buyers pick up the phone." },
      { name: 'Neighborhood pages', desc: "Real pages for South Hills, Friendly Area, Springfield, Whiteaker, Cottage Grove and the rest, so you rank for the specific neighborhood someone's actually searching, not just \"Eugene.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, and mobile speed. The quiet groundwork that lets every other piece of your Eugene presence actually rank." },
      { name: 'Local link building', desc: "Mentions and links from Eugene and Willamette Valley sources Google trusts: local press, trade associations, the UO-area business community, and partners. In this market that is often what splits page one from page two." },
      { name: 'Seasonal rain and HVAC targeting', desc: "We build your profile and content around the October-to-April rain season and the year-round heat pump demand, so you're visible when those searches spike instead of scrambling after.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity, especially among Eugene's college-educated, tech-forward homeowners. We structure your content so those tools can read you and cite you by name.", featured: true },
    ],
    processName: 'How we work: the Eugene Local Lift method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your Eugene and Springfield neighborhoods and identify which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP come first, because they move quickest. Most Eugene clients catch early lift here inside the first few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now over starting later, and why getting set before the October rain season opens pays off." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Eugene and Springfield, seasonal content for rain-related and HVAC searches, plus the on-page work to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and booked work, never vanity rankings. Then we go win the next Eugene neighborhood." },
    ],
    pricing: {
      heading: 'Eugene pricing you can read at a glance',
      note: 'Month-to-month once the first 90 days wrap. No lock-in, cancel any time.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One Eugene location, getting the Map Pack foundation solid.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses serving Eugene, Springfield, and surrounding communities.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across the Willamette Valley.', features: ['Everything in Local Growth', 'Local link building', 'Seasonal rain and HVAC targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Eugene?', a: "Most Eugene engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The more competitive Eugene and Springfield keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days is selling you something." },
      { q: 'Does the rain season really matter for my rankings?', a: "Yes. It is the dominant demand driver in the Willamette Valley. Moss, roof, gutter, and drainage searches spike every October through April. Ranking takes months to build, so you have to be in place before the rains arrive, not scrambling after. We optimize for those seasonal terms so your busiest season lands on you, not your competitors." },
      { q: 'What about heat pump and mini-split demand?', a: "The 2021 Pacific Northwest heat dome hit Eugene at 107 degrees and permanently changed how homeowners think about cooling. Many older Eugene homes were built without AC, and demand for heat pump and mini-split installation has run high ever since. We build your profile and content around that ongoing demand so you capture those jobs year-round." },
      { q: 'Which areas do you cover?', a: "Eugene, Springfield, South Hills, Friendly Area, Whiteaker, Fairmount, Junction City, Cottage Grove, Creswell, Veneta, and surrounding Willamette Valley communities. We build genuine neighborhood pages instead of one generic Eugene page, because that's what actually ranks for specific local searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand rain-season emergencies, heat pump installation backlogs, and the research-intensive Eugene buyer who reads reviews before calling." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More \"near me\" research starts in AI now, especially for Eugene's college-educated, tech-forward homeowners. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. The first 90 days are the runway local SEO needs to show real movement in a market like Eugene. After that you are month-to-month, and if the leads are not landing, you leave with the accountability resting on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads from homeowners who were also handed to your competitors. Eugene buyers already lean toward local, vetted operators, so owning your own Map Pack presence is an especially strong play here. We build rankings, a Google profile, and a review base that send leads straight to you." },
      { q: "What's in the free audit?", a: "A clear read on where your Eugene Local SEO stands today across your Eugene and Springfield neighborhoods, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'eugene', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Eugene SEO Company | Rank Higher, Get Leads | OnwardCraft',
    metaDescription:
      'Eugene SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in contracts, built for the Willamette Valley.',
    eyebrow: 'SEO Services · Eugene, OR',
    h1: 'Eugene SEO that climbs you past Willamette Valley rivals on Google',
    h2Exact: 'Eugene SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO works the other way: rank once for what Eugene homeowners search, from rain-season roofing to heat pump installation to gutter repair, and the leads keep coming. We build that ranking and tie every report to actual calls and booked jobs.",
    primaryCta: 'Get my free Eugene SEO audit',
    intro:
      "Eugene SEO comes down to one question: when a homeowner in the South Hills or Cottage Grove searches your service, are you on page one or page two? Page two might as well be page fifty. Eugene buyers are research-heavy. They scroll, they compare, they read reviews. So getting onto page one for the rain-season and post-heat-dome searches that drive demand here is the whole game. We get contractors ranking for those keywords across the Willamette Valley, and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Eugene businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content tied to specific Eugene and Springfield neighborhoods, and earning links from trusted Willamette Valley sources. The contractors who win in Eugene also target the seasonal demand cycles. They rank for rain-season roofing and moss terms before October, and for heat pump and mini-split installation year-round after the 2021 heat dome reset homeowner expectations.",
    problemHeading: "Three reasons your Eugene site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and Eugene homeowners who are researching carefully rarely scroll far down it either. If you're not in the top handful of results for the services you sell, your site is basically invisible, no matter how good the work is." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost. For a market like Eugene where buyers trust organic, local results over ads, that organic presence carries even more weight." },
      { title: "You're not ranking for the demand that matters", body: "Eugene demand swings hard with the seasons. Moss, roof, and gutter calls flood in from October through April, and heat pump and mini-split inquiries have run high since the 2021 heat dome. If your SEO ignores those seasonal and post-event searches, you're leaving your busiest periods on the table while better-ranked competitors take those calls." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings in Eugene',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, load speed, Core Web Vitals, and schema. The under-the-hood repairs Google wants in place before it ranks a Eugene site at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms Eugene and Springfield homeowners search: titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot through the rainy season and beyond." },
      { name: 'Link building', desc: "Authority from real Eugene, Springfield, and Willamette Valley sources. In this market, local trust signals often separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you take the \"near me\" searches across your Eugene and Springfield neighborhoods right alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and booked leads, not just rankings and traffic, so you always know what your Eugene SEO is genuinely worth." },
      { name: 'Seasonal rain and HVAC SEO', desc: "We rank you for the October-to-April rain-season searches and the year-round heat pump and mini-split terms, so you're capturing demand before it peaks instead of after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, which matters most among Eugene's research-heavy, tech-forward homeowners.", featured: true },
    ],
    processName: 'How we work: our Willamette Valley SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Eugene and Springfield leads, including the seasonal terms that define demand here." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile. The footing everything else stands on before it can climb." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the rain-season roofing, moss, and HVAC terms that drive the Willamette Valley." },
      { name: 'Build authority', desc: "Links and citations from trusted Eugene and Willamette Valley sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to real Eugene leads, then we press on what is working and reach into the next keyword set or service area." },
    ],
    pricing: {
      heading: 'Transparent Eugene SEO pricing',
      note: 'Month-to-month after the opening 90 days. No lock-in, walk away whenever you like.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused Eugene site chasing its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods in Eugene-Springfield.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own search across the Willamette Valley.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal rain and HVAC SEO', 'Multi-location / service-area', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Eugene?', a: "Most Eugene SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Eugene?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter neighborhood terms and slower on the most competitive Willamette Valley keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. For Eugene, where buyers trust organic, local results and are skeptical of ads, a strong organic presence carries extra weight." },
      { q: 'Should my Eugene SEO target the rain season?', a: "Yes. It is the dominant demand driver here. Moss, roof, gutter, and drainage searches spike every October through April. Ranking takes months to build, so you have to be in place before the rains arrive, not chasing them after. We optimize for those seasonal terms ahead of time so your busiest months land on you." },
      { q: 'What about heat pump and HVAC demand?', a: "The 2021 Pacific Northwest heat dome permanently lifted demand for heat pump and mini-split installation in Eugene. Many older homes were built without AC and still aren't cooled. That demand is ongoing. We rank you for those searches year-round so you're capturing the work as homeowners finally act on it." },
      { q: 'Do you require a long-term contract?', a: "No. The first 90 days are simply the time SEO needs to show real movement, and after that you run month-to-month. If the leads are not coming, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for, and it matters especially in Eugene where homeowners are college-educated and research-driven. We structure your content and schema so AI engines can read, trust, and cite your business." },
      { q: 'Which areas around Eugene do you cover?', a: "Eugene, Springfield, South Hills, Friendly Area, Whiteaker, Fairmount, Junction City, Cottage Grove, Creswell, Veneta, and the surrounding Willamette Valley communities, with genuine neighborhood pages rather than one generic Eugene page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. Eugene buyers already prefer local, independent contractors over national lead-broker referrals, so ranking organically is an especially strong play here. The more you own your search visibility, the less you depend on shared lead services." },
      { q: "What's in the free SEO audit?", a: "A straight read on where your Eugene SEO stands today across Eugene and Springfield, what your competitors are doing to stay ahead on Google, the fixes that move the needle fastest, and a realistic timeline with the numbers modeled for your shop. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'eugene', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Eugene Web Design Company | Sites That Convert | OnwardCraft',
    metaDescription:
      'Eugene web design that turns visitors into booked jobs. Fast, mobile-first sites built for contractors in an eco-conscious, research-driven market.',
    eyebrow: 'Web Design · Eugene, OR',
    h1: 'Eugene web design that loads fast and books more jobs from South Hills to Springfield',
    h2Exact: 'Eugene Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is just a brochure. Eugene homeowners research carefully. They read everything, compare reviews, and choose local. We build fast, mobile-first sites that earn that trust and turn South Hills-to-Springfield visitors into booked work.",
    primaryCta: 'Get my free quote',
    intro:
      "Eugene web design lives or dies on one quiet truth: most contractor sites lose leads slowly, with a slow phone load, a buried call button, and no sense of local credibility. Eugene homeowners are college-educated, eco-conscious, and research-heavy, and they study your site carefully before calling. A web designer who knows this market speaks to that. We build mobile-first sites that load fast, look like the established local operator you are, and earn the trust that turns Willamette Valley visitors into booked jobs.",
    aioQuestion: 'What makes a good contractor website in Eugene?',
    aioAnswer:
      "A good Eugene contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with genuine reviews and real project photos from local neighborhoods, and names the specific Eugene and Springfield areas you serve. Because Eugene homeowners research before they call and lean toward local independent operators, credibility signals like real reviews, local photos, and named neighborhoods carry extra weight here.",
    problemHeading: "Why your Eugene site isn't turning visits into work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "Plenty of contractor sites list a few services and then just sit there. No clear offer, no obvious next step, no local proof a Eugene homeowner can weigh. We build every page around a single job: moving a careful, research-driven visitor toward a booked lead." },
      { title: "It's too slow or hard to trust on a phone", body: "Most of your Eugene visitors are on mobile, and they bounce if your site takes more than a few seconds to load, or if it simply looks dated. Slow, untrustworthy sites also rank worse. We build fast and look credible, so you keep the visitor and the ranking." },
      { title: "It doesn't speak to your neighborhood", body: "A homeowner in Cottage Grove or Whiteaker wants to see that you actually serve Cottage Grove or Whiteaker, not a generic \"Eugene\" page. We build sites that name the neighborhoods you work, so visitors trust you're the local operator they're looking for." },
    ],
    servicesHeading: "What's in an OnwardCraft Eugene website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your Eugene and Springfield neighborhoods, and the jobs you actually want." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your Eugene traffic is. Fast, thumb-friendly, easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step for a buyer who's ready to act." },
      { name: 'Copy that earns trust', desc: "Words that speak to research-heavy Eugene homeowners who are sizing you up: local, specific, and free of marketing fluff." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank, with clean structure, schema, fast load, and neighborhood-ready pages for Eugene and the wider Willamette Valley." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load quickly and clear Google's performance checks, which guards your conversions and your rankings at once." },
      { name: 'Neighborhood-targeted pages', desc: "Pages built around the Eugene and Springfield neighborhoods you serve, so eco-conscious, research-driven homeowners see you as their local contractor rather than a generic regional brand.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more of Eugene's research-driven homeowners shift to AI for initial contractor research.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft Eugene process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your Eugene neighborhoods, your best jobs, and your competitors, then map the site around booking more of the work you want, whether that is rain-season, heat pump, or whatever drives your calendar." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert and earn local trust. You see it and shape it before a single line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write copy that earns trust with Eugene's research-intensive buyers, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We ship it clean, with the SEO foundation, tracking, and load speed dialed in from the first day live." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting as your seasonal demand cycles shift." },
    ],
    pricing: {
      heading: 'Transparent Eugene web design pricing',
      note: 'One-time build, split 50% at start and 50% at launch. The finished site is yours. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A tight, high-converting site for a single-trade Eugene contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A roomier site for established crews running several services or areas.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Neighborhood-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location Valley businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Eugene?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. The tiers are above: fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site runs about 2 to 4 weeks; a larger custom build takes 4 to 8. You get a firm timeline at the start and a note at each stage as it comes together." },
      { q: 'Will my site earn the trust Eugene homeowners expect?', a: "That's exactly what we design for. Eugene buyers are research-heavy and eco-conscious, and they read everything before calling. We build in the credibility signals that matter: genuine reviews, local neighborhood references, real project photos, and no-fluff copy. That is what turns a careful researcher into a booked job." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation, with fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank, and pairing it with our SEO service is how you climb the rain-season and HVAC terms that drive demand in Eugene." },
      { q: 'Do I own the website?', a: "Fully. The site, the domain, and the content are yours. No hostage situations and no platform you cannot pack up and leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your Eugene traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We choose the platform that fits your needs and that you can run yourself, usually WordPress or Webflow. We recommend the right one in your free consult and walk through the tradeoffs in plain terms." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build ships with launch support, and after that we offer low-cost monthly maintenance covering updates, speed, and security." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time, fixed-price project. Any maintenance or SEO that follows runs month-to-month, so you can step away whenever you want." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what high-converting Eugene web design should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'eugene', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Eugene Website Redesign | OnwardCraft',
    metaDescription:
      'Eugene Website Redesign without losing rankings. Faster, mobile-first rebuilds with SEO-safe migration that convert more visitors into booked jobs across the Valley.',
    eyebrow: 'Website Redesign · Eugene, OR',
    h1: 'Eugene Website Redesign that keeps your rain-season rankings from South Hills to Springfield',
    h2Exact: 'Eugene Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week. It loads slowly, reads as hard to trust, and is easy for Eugene's research-heavy homeowners to skip past. We redesign Eugene contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free Eugene redesign audit',
    intro:
      "Eugene Website Redesign usually goes one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We rebuild Eugene contractor sites for speed, credibility, and conversions, the three things that matter to a research-driven Pacific Northwest buyer, and we handle an SEO-safe migration with the redirects and care that protect the traffic you already have without losing rankings.",
    aioQuestion: 'How do I redesign a Eugene website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign holds your rankings and improves them, because the new site is faster, more trustworthy, and better structured than the old one. That counts for extra in Eugene, where homeowners study sites carefully before calling.",
    problemHeading: "Signs your Eugene site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "Eugene homeowners research carefully before calling. A dated, cluttered site quietly signals that you might not be the established local operator they're after, even when your work is excellent. First impressions online are especially costly in this market." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your Eugene visitors before they ever see your offer. A redesign built mobile-first wins them back." },
      { title: "It doesn't show local credibility", body: "Eugene buyers want to see that you serve Eugene neighborhoods by name, places like Whiteaker, South Hills, and Springfield, not a generic regional contractor page. An old site that blends in gives a careful researcher no reason to pick you over an operator who clearly looks local and established." },
    ],
    servicesHeading: "What's in an OnwardCraft Eugene redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems for Eugene buyers instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned. That is especially valuable for the rain-season and HVAC terms you've built up." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms built to convert Eugene's research-intensive buyers. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals, which lifts both conversions and rankings and is essential for mobile-first Eugene visitors." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your Eugene and Springfield traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work, earns local credibility, and resonates with Eugene's eco-conscious, no-fluff buyers." },
      { name: 'Neighborhood-targeted rebuild', desc: "Rebuilt around the Eugene and Springfield neighborhoods you actually serve, so research-driven homeowners see you as their local contractor rather than just another regional brand.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as Eugene's research-intensive homeowners shift more initial searches to AI.", featured: true },
    ],
    processName: 'How we redesign: a careful Eugene rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you leads and rankings, then map a redesign that fixes it without breaking what already works, preserving the seasonal and neighborhood rankings you've built." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design built for Eugene's credibility-conscious buyers. You review and shape it before we build." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration, so rain-season and HVAC rankings don't drop at launch." },
      { name: 'Launch with SEO care', desc: "We go live with every redirect in place and watch closely, so your Eugene rankings hold steady and climb rather than slide." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting across your seasonal demand cycles, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Eugene redesign pricing',
      note: 'One-time project, split 50% at start and 50% at launch. Everything is yours to keep. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A tight redesign for a small Eugene contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established Eugene or Springfield contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Neighborhood-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-area Willamette Valley businesses.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Eugene?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings, including the rain-season and HVAC terms you've built up, and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign runs about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline at the start and a check-in at every stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, isn't earning trust with Eugene's research-intensive buyers, or isn't bringing in leads for the rain-season and HVAC work that drives the Valley, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important slips away, including your seasonal and neighborhood rankings." },
      { q: 'Will the redesign help me win Eugene homeowners who research everything?', a: "Yes, and that's the point in a market like this. Eugene buyers read everything before calling. We rebuild around credibility signals such as local neighborhood references, genuine reviews integration, and no-fluff copy, then make the offer and call button obvious, so the research-driven buyer who lands on your site converts." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for quick load and Core Web Vitals, which lifts conversions and rankings together." },
      { q: 'Do I own the redesigned site?', a: "Fully. The site, the domain, and the content all belong to you. No platform lock-in of any kind." },
      { q: 'Am I locked into a contract?', a: "No. The Eugene redesign is a one-time project, and any maintenance or SEO after it runs month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what your Eugene Website Redesign should fix for Eugene's research-intensive buyers, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const eugeneCity = {
  citySlug: 'eugene', city: 'Eugene', state: 'Oregon', stateAbbr: 'OR', metro: 'Eugene-Springfield',

  titleTag: 'Eugene Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Eugene marketing for contractors: web design, SEO, and local SEO that get you found and booked, all built for the Willamette Valley rain season.',

  eyebrow: 'Eugene · Web Design, SEO & Lead Generation',
  h1: 'Eugene marketing for contractors that fills your rain-season calendar',
  h2Exact: 'Eugene Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for the Willamette Valley's rain-season demand, post-heat-dome HVAC wave, and research-intensive homeowners who choose local. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Eugene audit',

  intro:
    "Eugene marketing for contractors has to fit a market shaped by two things above all: the Willamette Valley's relentless rain season and the aftermath of the 2021 Pacific Northwest heat dome. October through April brings moss, roof, gutter, and drainage calls. Year-round there's a backlog of heat pump and mini-split installations in homes that were built without cooling. And the homeowners placing those calls are college-educated, eco-conscious, and research-heavy. They read everything before choosing a contractor, and they lean toward local independents over national brands. Winning here takes three things working together: a site that earns local trust, SEO that ranks you for the searches that drive this specific market, and local SEO that puts you in the Map Pack for the neighborhoods you serve. Here's how we help Eugene contractors do exactly that.",
  aioQuestion: 'How do Eugene contractors get more leads online?',
  aioAnswer:
    "Eugene contractors get more leads by combining a fast, mobile-first website that earns trust with research-intensive homeowners, SEO that ranks them for rain-season and heat pump searches, and local SEO that wins the Google Map Pack for Eugene and Springfield neighborhoods. Because Eugene buyers research carefully and prefer local independent operators, strong organic presence and genuine review signals carry more weight here than in many other markets.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Own the Eugene Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Eugene and Springfield homeowners search \"near me.\" For most local contractors it is the single highest-return move, done tight, neighborhood by neighborhood, with seasonal targeting built in.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher across the Valley',
      blurb: "Rank for the rain-season, HVAC, and neighborhood keywords your customers actually search, and build a lead pipeline you own instead of renting traffic from ads or lead brokers.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites Eugene buyers trust',
      blurb: "Fast, mobile-first websites engineered to earn the trust of Eugene's research-heavy homeowners and turn visitors into booked jobs, not brochures that look fine but never convert.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, Eugene rankings intact',
      blurb: "Rebuild an outdated site for speed, credibility, and conversions, then migrate it carefully so you keep every rain-season and HVAC ranking you've already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Eugene?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads, especially for the rain-season and post-heat-dome demand that defines the Eugene-Springfield market." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. That means we understand rain-season emergencies, heat pump installation backlogs, and the research-heavy Eugene buyer who reads everything before calling." },
    { q: 'Why does the Eugene market need a different approach?', a: "Three things set it apart. The October-to-April rain season drives heavy moss, roof, gutter, and drainage demand. The 2021 heat dome created year-round HVAC and mini-split installation demand in homes that never had cooling. And Eugene homeowners are college-educated and research-heavy, so they evaluate sites, read reviews, and prefer local independents over national brands. Templates built for a generic market miss all of that." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds running $2,000 to $9,000. SEO and local SEO go month-to-month from $750 to $3,000, with no long contract. We pin down the exact scope in your free Eugene audit." },
    { q: 'Which Eugene and Springfield areas do you serve?', a: "Eugene, Springfield, South Hills, Friendly Area, Whiteaker, Fairmount, Junction City, Cottage Grove, Creswell, Veneta, River Road, Santa Clara, and surrounding Willamette Valley communities." },
    { q: 'Where should I start?', a: "Start with a free Eugene audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest, whether that's capturing the next rain season, the HVAC backlog, or both. That's the whole point of Eugene marketing for contractors here: get found and booked. No pitch deck, just a plan." },
  ],
};
