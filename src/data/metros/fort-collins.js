// FORT COLLINS: per-metro, per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Fort Collins' 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// FORT COLLINS: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'What ranking in Fort Collins actually demands',
  body:
    "Fort Collins sits at the foot of the Front Range, a Colorado State University town of roughly 170,000 that draws transplants faster than almost anywhere in the state. The buyers here skew outdoorsy, active, and fairly affluent, and they shop for a contractor the way they research a trail or a bike: read the reviews, compare three names, then call. Old Town anchors a historic core where owners restore century-old homes with real budgets, while the newer subdivisions in Timnath, Windsor, and Wellington fill up with families who found the address online before they ever drove past it. Then the sky does the sorting. This is Hail Alley, and a single supercell in May or June can drop golf-ball ice across half the city and write a summer's worth of roofing and restoration claims in twenty minutes. Wildfire season piles on through late summer and fall, pushing demand for inspection, mitigation, and rebuild work. The contractors already pinned to the map when the storm clears are the ones whose calendars fill. Anyone stuck on page two watches the surge roll past.",
  pullQuote: 'When hail tears across the Front Range, the contractor already in the Map Pack books the summer. Everyone else fights over the leftovers.',
  donut: {
    title: 'Education in Fort Collins',
    value: 62,
    centerLabel: 'college-educated',
    legend: [
      { label: 'College-educated', pct: 62, kind: 'teal' },
      { label: 'Other', pct: 38, kind: 'grey' },
    ],
  },
  seasonTitle: 'When the phone rings off the hook',
  seasonCaption: 'Hail and storm season (May to Aug); Front Range winter (Oct to Mar)',
  seasonalDemand: [
    { m: 'J', v: 52, peak: true }, { m: 'F', v: 48, peak: true }, { m: 'M', v: 44 },
    { m: 'A', v: 62, peak: true }, { m: 'M', v: 78, peak: true }, { m: 'J', v: 90, peak: true },
    { m: 'J', v: 96, peak: true }, { m: 'A', v: 72 }, { m: 'S', v: 60, peak: true },
    { m: 'O', v: 70, peak: true }, { m: 'N', v: 68, peak: true }, { m: 'D', v: 58, peak: true },
  ],
  stats: [
    { value: '34,000', label: 'CSU students feeding Fort Collins\' young-homeowner pipeline' },
    { value: 'May-Aug', label: 'Hail Alley storm season, when roofing demand goes vertical', accent: true },
    { value: '5,000 ft', label: 'foothills elevation: real winters, freeze-thaw, and snow loads' },
    { value: 'Top 3', label: 'Map Pack spots that grab the clicks the moment a storm hits' },
  ],
  neighborhoods: [
    'Old Town', 'Midtown Fort Collins', 'Loveland', 'Greeley', 'Windsor',
    'Timnath', 'Wellington', 'Severance', 'Evans', 'Johnstown',
    'Berthoud', 'Milliken', 'Ault', 'Laporte', 'Bellvue',
  ],
};

const AREAS = [
  'Fort Collins', 'Loveland', 'Greeley', 'Windsor', 'Timnath',
  'Wellington', 'Severance', 'Evans', 'Johnstown', 'Berthoud',
  'Milliken', 'Ault', 'Laporte', 'Bellvue', 'Eaton',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'Trades work is the only work we do',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We know how a hail claim moves, what a wildfire-season inspection rush feels like, and how freeze-thaw cracks foundations at 5,000 feet, so every piece we build maps to how Northern Colorado homeowners actually search.",
  },
  {
    title: 'We pull you off rented leads',
    body: "We are after one thing: a pipeline that belongs to you. Not another monthly check to a broker for the same Windsor homeowner three other crews are dialing at the same moment.",
  },
  {
    title: 'We actually speak Fort Collins',
    body: "Hail Alley storm cycles, CSU-fueled first-time-buyer demand, the I-25 corridor filling up with transplants, and real targeting from Old Town to Timnath. That is ground knowledge a national shop cannot fake by swapping a city name into a template.",
  },
  {
    title: 'No contracts, no mystery',
    body: "Our prices are posted, our reports tie to actual leads, and you switch to month-to-month after the first 90 days. If we are not earning the invoice, you walk. That keeps the heat exactly where it should sit: on us.",
  },
];

const PROOF = {
  heading: "We're new, so here's the honest math instead of a logo wall",
  body:
    "Most agencies lead with a wall of client logos. We are a young, founder-run shop, so we will not invent a track record we have not built yet. What we will give you is the reasoning, taken straight from Google's and the industry's own data on how people hunt for a local contractor.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here is a rough sketch, labelled plainly as an illustration and not a result we are claiming: say a Fort Collins contractor pulls around 1,200 local \"near me\" impressions a month. Climbing out of page-two invisibility into the top three is the gap between a handful of stray calls and a calendar you cannot keep up with, and after a hail storm that gap stretches even wider. In your free audit we model the real numbers for your shop: your current rankings, your actual search volume, and a straight 90-to-180-day route up the map.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Fort Collins', state: 'Colorado', stateAbbr: 'CO', metro: 'Fort Collins-Loveland',
  heroProof: ['Built for the trades', 'Hail-season ready', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const fortCollinsLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'fort-collins', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Fort Collins Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Fort Collins Local SEO that turns "near me" searches into booked calls. We get you into the top three on the Google Map Pack, so the call lands with you.',
    eyebrow: 'Local SEO · Fort Collins-Loveland',
    h1: 'Fort Collins Local SEO that turns "near me" searches from Old Town to Timnath into a ringing phone',
    h2Exact: 'Fort Collins Local SEO Company',
    heroSubhead:
      "Google drops three businesses on the map when a homeowner searches \"near me,\" and everyone beneath them might as well not exist. We push you into that top three so the call reaches you instead of whoever ranked first, and so you are already there when the next hail storm lights up every phone on the Front Range.",
    primaryCta: 'Get my free Fort Collins audit',
    intro:
      "Fort Collins Local SEO turns on a single moment: a homeowner in Old Town or Windsor types your service plus \"near me,\" and you are either one of the three businesses Google pinned to the map or you are not. Most people tap one of those three and never scroll. Our local SEO services tune your Google Business Profile and listings so you rank on the map for the searches that matter. The I-25 corridor is filling with transplants and the competition is filling right along with it, so landing in that top three is the whole contest. Here is exactly how we get you there.",
    aioQuestion: 'How do Fort Collins businesses rank higher in local search?',
    aioAnswer:
      "You rank by nailing four things: a Google Business Profile tuned to the exact services and neighborhoods you want, name-address-phone details that match everywhere online, a steady run of real reviews, and local content tied to genuine Northern Colorado neighborhoods. Fort Collins is a college-educated, research-heavy market sitting in Hail Alley, so the winners look established, answer fast, and are already ranking before May storms arrive.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors hold all three map spots', body: "Type your own service plus \"near me\" right now. Those three businesses Google pins to the map pull in most of the clicks, full stop. If you are not one of them, the quality of your work barely registers, because most Fort Collins homeowners never lay eyes on your name. Breaking into that top three is usually the single highest-return move a local shop can make here." },
      { title: "You're paying brokers for leads you never keep", body: "Angi, Thumbtack, and HomeAdvisor sell the same Northern Colorado homeowner to four contractors at once, then charge each of you to scrap over them. It is a treadmill with no off switch. Local SEO builds the reverse: a homeowner finds you, calls you, and nobody else got the lead. Run it long enough and you stop renting and start owning the pipeline outright." },
      { title: "You're invisible when the hail lands", body: "When a Front Range supercell drops golf-ball ice, demand for roofing, gutters, and restoration does not climb, it detonates, and the backlog can run clear through summer. If you are buried on the map that afternoon, the work flows to whoever Google already trusts. Ranking now is how you ride that surge instead of watching it pass your shop." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The heaviest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows precisely which Fort Collins searches belong to you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to agree everywhere Google looks. We repair the listings that contradict each other and build the ones you are missing across Larimer and Weld counties." },
      { name: 'Reviews that keep coming', desc: "A quiet system that nudges every finished Old Town or Windsor job into a fresh Google review. Fort Collins buyers read those reviews before they dial, so a steady flow both lifts your Map Pack spot and hands the next caller a reason to pick you." },
      { name: 'Neighborhood pages', desc: "Real pages for Old Town, Loveland, Windsor, Timnath, Wellington and the rest, so you rank for the exact neighborhood someone is searching instead of a flat \"Fort Collins.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, and mobile speed. The wiring beneath the hood that lets every other piece actually rank." },
      { name: 'Local link building', desc: "Mentions and links from Northern Colorado sources Google trusts: local press, trade groups, community partners. In this market that is often what separates page one from page two." },
      { name: 'Hail-season readiness', desc: "We get your profile, pages, and reviews ranking before May so you catch the storm-driven roofing and restoration rush instead of scrambling for it after the ice has already fallen.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now begins inside AI Overviews, ChatGPT, and Perplexity. We structure your content so those engines can read you and name you in their answers.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We pin down where you genuinely rank today across every service area and figure out which competitors are beating you in the Map Pack and the precise reasons why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP come first because they move quickest. Most Fort Collins clients see early lift here inside a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine switch on. They compound week after week, which is exactly why local SEO rewards starting before storm season rather than after it." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Larimer and Weld counties, backed by the on-page work that makes them stick." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to the calls and leads that actually land, never a vanity rankings screenshot. Once one neighborhood is locked, we push into the next stop along the I-25 corridor, from Timnath out to Wellington." },
    ],
    pricing: {
      heading: 'Pricing you can read at a glance',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation locked in.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For shops competing across several Northern Colorado communities.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors set on owning the map across the I-25 corridor.', features: ['Everything in Local Growth', 'Local link building', 'Hail-season demand targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Fort Collins?', a: "Most Fort Collins engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you are chasing. The tiers above lay it out. No hidden fees, no long contract, and we settle the exact scope in your free audit before you spend a dollar." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move within a few weeks. The contested Northern Colorado keywords usually take 90 to 180 days of steady work, because reviews and citations build up over time. In a market this fast-growing, anyone promising you page one in 30 days is selling smoke." },
      { q: 'What makes Fort Collins local SEO different?', a: "Two forces. It is a college-educated, transplant-heavy market growing fast along I-25, so fresh competitors appear constantly and trust signals like reviews carry real weight with research-minded buyers. And it sits in Hail Alley, so trade demand swings hard with storm season. Your ranking has to be set before May, not thrown together after the hail falls." },
      { q: 'How does local SEO help me during hail season?', a: "When a supercell tears across Northern Colorado in May, June, or July, searches for roofing, gutters, and restoration spike inside an afternoon, and the businesses already in the Map Pack take those calls. We get you ranking and reviewed ahead of season so you absorb that demand instead of fighting for scraps once everyone else is booked solid." },
      { q: 'Which areas do you cover?', a: "All of Northern Colorado: Old Town, Midtown Fort Collins, Loveland, Windsor, Timnath, Wellington, Severance, Greeley, Berthoud, Johnstown and more. We build genuine neighborhood pages rather than one flat Fort Collins page, because that is what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It is basically all we do: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand emergency calls, hail-driven roofing surges, wildfire-season inspection demand, and the insurance claims that follow a Front Range storm, and we build your local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More \"near me\" research now starts in AI tools instead of classic search. We structure your content and schema so those engines can read, trust, and name your business. In a tech-literate town like Fort Collins, that is fast becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that is about how long local SEO needs to show real movement. After that it runs month-to-month. If we are not delivering, you walk, and the accountability stays squarely on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never own. We build rankings, a Google profile, and a review base that route leads straight to you alone. Over time you lean on the brokers less, because the work is already coming to you direct." },
      { q: "What's in the free audit?", a: "A clear read on where you rank across Larimer and Weld counties today, which Map Pack competitors are beating you in Fort Collins and why, the handful of fixes that move you fastest, and a realistic 90-to-180-day climb with the numbers run for your shop. It is the fastest way to see what Fort Collins Local SEO can do for your calendar. No pitch deck, just a straight diagnosis before hail season." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'fort-collins', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Fort Collins SEO Company | Rank on Google, Own Your Leads | OnwardCraft',
    metaDescription:
      'Fort Collins SEO that ranks contractors on Google for the searches that book jobs and brings in organic traffic you own. Revenue-tied reporting, no lock-in contracts.',
    eyebrow: 'SEO Services · Fort Collins-Loveland',
    h1: 'Fort Collins SEO that ranks you for the searches that book jobs',
    h2Exact: 'Fort Collins SEO Company',
    heroSubhead:
      "Ads die the second you stop paying. SEO runs the other way: rank once for what your Northern Colorado customers search and the leads keep arriving for months. We build that ranking and tie every report to real calls and booked jobs, not pretty charts.",
    primaryCta: 'Get my free Fort Collins SEO audit',
    intro:
      "Fort Collins SEO comes down to one blunt question: when someone searches what you do, are you on page one or page two? Around here page two might as well be page fifty. As a Fort Collins SEO company, we get contractors ranking on Google for the money keywords in a fast-growing, hail-prone foothills market, then turn that organic traffic into booked work. We measure the whole thing in leads, not traffic that never picks up the phone.",
    aioQuestion: 'How do Fort Collins businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical base of the site, tuning each page for the exact terms customers search, publishing genuinely useful local content, and earning links from trusted Northern Colorado sources. In a CSU-influenced, transplant-driven market, keeping the site fast on mobile and ranking for hail-driven and seasonal terms are two of the quickest ways to pull ahead of competitors who have not adapted.",
    problemHeading: "Three reasons your Fort Collins site isn't bringing in work",
    painPoints: [
      { title: "You're parked on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it either. If you are not in the top handful of results for what you sell, your site is effectively invisible, no matter how sharp it looks or how many CSU alumni live on your street. That invisibility is what is sending your jobs to the competition." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the instant your card stops, the leads stop cold. SEO builds an asset you genuinely own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost you are paying brokers now." },
      { title: "You're not ranking for the demand that pays", body: "Fort Collins demand swings with hail season and hard foothills winters, and the contractors who rank for those terms ahead of time catch the spike. If your SEO ignores hail-driven and cold-weather searches, you are quietly handing away your busiest, most profitable months." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank your Fort Collins site at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned for the exact terms your Fort Collins customers search: titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and keep bringing in leads long after we publish them." },
      { name: 'Link building', desc: "Authority from real Northern Colorado and industry sources. In a market this competitive, links are often the deciding factor between page one and page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches right alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We count the calls, forms, and booked jobs your Fort Collins SEO brings in, not just rankings and traffic that never pick up the phone, so you can see the dollar value even through a hail-season spike." },
      { name: 'Hail & seasonal SEO', desc: "We rank you for the storm-driven and cold-weather searches that fuel Fort Collins' busiest months, so you are visible before hail season instead of chasing it once the adjuster calls.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of Fort Collins search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Northern Colorado leads, not just impressions." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile. The foundation everything else needs before it can climb." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the seasonal and hail-driven terms that decide who wins summer here." },
      { name: 'Build authority', desc: "Links and citations from trusted Northern Colorado and industry sources to push your competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to real Northern Colorado leads. We pour more into the terms already paying off, then widen into the next keyword set, often the seasonal ones that decide who owns summer here." },
    ],
    pricing: {
      heading: 'Transparent Fort Collins SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site chasing its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses set on owning Northern Colorado search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Hail & seasonal SEO', 'Multi-location or multi-service', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Fort Collins?', a: "Most Fort Collins SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. The tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Fort Collins?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on low-competition terms and slower on the most contested Northern Colorado keywords. SEO builds on itself, so the longer you run it, the bigger the gains get." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that vanishes the moment you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Fort Collins contractors do best running SEO as the long-term engine and ads for short-term spikes during hail season." },
      { q: 'Should my Fort Collins SEO target hail season?', a: "Yes. When a Front Range supercell hits, searches for roofing, gutters, and restoration spike inside an afternoon, and ranking takes months to build, so you have to be in place before May rather than chasing it after the storm. We tune those seasonal and hail-driven terms ahead of time so your busiest months land on you." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. Higher tiers add hail-and-seasonal and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because contested Northern Colorado keywords need about that long to budge, then you roll to month-to-month. If the leads are not showing up, you walk and the accountability sits on us." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and name your business, not just classic search results." },
      { q: 'Which areas around Fort Collins do you cover?', a: "All of Northern Colorado: Loveland, Windsor, Timnath, Wellington, Greeley, Severance, Johnstown, Berthoud and more, with genuine local pages rather than one flat Fort Collins page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that route leads directly to you. The more you own your search visibility, the less you depend on paying brokers for leads three competitors also bought." },
      { q: "What's in the free SEO audit?", a: "Where you rank across the Fort Collins-to-Greeley corridor right now, which competitors are outranking you and how, the highest-impact fixes, and a realistic timeline with the numbers modeled for your shop. It is the clearest picture you will get of what Fort Collins SEO can do for your pipeline. No pitch deck, just a straight diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'fort-collins', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Fort Collins Web Design Company | Sites That Book Jobs | OnwardCraft',
    metaDescription:
      'Fort Collins Web Design built to convert clicks into calls: fast, mobile-first contractor websites that turn visitors into booked jobs and hold up in Front Range hail.',
    eyebrow: 'Web Design · Fort Collins-Loveland',
    h1: 'Fort Collins web design built to convert Old Town clicks into booked calls',
    h2Exact: 'Fort Collins Web Design Company',
    heroSubhead:
      "A handsome website that never generates a call is just an expensive brochure. We build Fort Collins contractors fast, mobile-first sites engineered to turn visitors into booked work, and tough enough to hold up when hail season floods your phone.",
    primaryCta: 'Get my free quote',
    intro:
      "Fort Collins Web Design has one job, and most contractor sites fail it: they bleed leads quietly, slow on a phone, call button buried, no clear offer anywhere. Done right, website design closes all of those leaks. We build fast-loading, mobile-first sites that look like the professional you actually are, and turn Old-Town-to-Windsor visitors into booked jobs, and that do not fall over when a hail storm sends your traffic through the roof.",
    aioQuestion: 'What makes a good contractor website in Fort Collins?',
    aioAnswer:
      "A good Fort Collins contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and is built to absorb traffic spikes during hail season. Because Fort Collins homeowners are college-educated and research-driven, the site also has to answer their questions and show real expertise, not just list services and hope someone calls.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "Plenty of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next name on the map. Fort Collins homeowners, plenty of them CSU alumni and outdoorsy professionals, do their homework. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Fort Collins visitors are on mobile, and they bounce if your site takes more than a couple of seconds to load. Slow sites also rank worse, so you lose twice. We build fast, so you keep both the visitor and the ranking." },
      { title: "It buckles under a hail-season surge", body: "After a big Front Range storm, contractor sites get slammed with a flood of urgent traffic, and the slow ones choke or bury the call button at the exact moment it matters most. We build sites that stay fast and keep converting under load, so you capture that demand instead of losing it to whoever answered first." },
    ],
    servicesHeading: "What's in an OnwardCraft Fort Collins website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site shaped around your trade, your slice of Northern Colorado from Old Town to Timnath, and the exact jobs you want more of." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that is where nearly all of your Fort Collins traffic lives. Fast, thumb-friendly, and easy to call from in one tap." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms set where a research-minded Fort Collins homeowner actually taps them. Every page points to one unmistakable next step." },
      { name: 'Copy that sells', desc: "Words that speak to the research-minded Fort Collins homeowner and book the job, not filler that reads exactly like every other contractor in town." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank: clean structure, schema, fast load, and neighborhood-ready pages for Old Town, Windsor, Timnath and beyond." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast on a phone and clear Google's performance checks, which guards your conversions and your rankings together, even on the afternoon a Front Range storm floods the site." },
      { name: 'Hail-surge ready', desc: "Built to stay fast and keep the call button front and center when hail-season traffic spikes, the exact moment that turns a flood of visitors into your biggest jobs of the year.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read your site and recommend your business as more Fort Collins search shifts toward AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, the Northern Colorado towns you cover, your most profitable jobs, and the crews you compete with, then map the site around booking more of the work you actually want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert the way Fort Collins buyers shop, and you see it and shape it before a single line of code gets written." },
      { name: 'Build and copy', desc: "We build it fast and write copy that speaks to a Fort Collins homeowner, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch clean with the local-SEO foundation, tracking, and speed dialed in from day one, ready for the next storm-driven traffic spike." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it on what is actually turning Northern Colorado visitors into calls." },
    ],
    pricing: {
      heading: 'Transparent Fort Collins web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A larger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Hail-surge ready'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Fort Collins?', a: "Most contractor builds with us land between $2,000 and $8,000 as a one-time project, depending on page count and integrations. The tiers sit above: a fixed Fort Collins price, no surprises, and you own the finished site outright." },
      { q: 'How long does it take to build?', a: "A focused site runs about 2 to 4 weeks; a larger custom build runs 4 to 8. We hand you a firm timeline up front and keep you posted at every stage, and we can fast-track it ahead of hail season if you need to be live first." },
      { q: 'Will my site handle a hail-season traffic spike?', a: "Yes, and in Fort Collins that matters more than almost anywhere. After a big Front Range storm, contractor sites take a flood of urgent traffic, and the slow ones lose leads right when demand peaks. We build fast and keep the call button obvious, so your site converts under load instead of choking." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank, and pairing it with our SEO service is how you climb the competitive Northern Colorado terms." },
      { q: 'Do I own the website?', a: "Completely. The site, the domain, and the content are yours. No hostage situations, and no platform you cannot pack up and move out of Fort Collins with." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where nearly all of your Fort Collins traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform you can actually run yourself once we hand it over, usually WordPress or Webflow. We name the right fit for your Fort Collins shop in the free consult and lay out the tradeoffs in plain English." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build ships with launch support, and after that we offer affordable monthly maintenance for updates, speed, and security, which matters when a hail surge tests the site." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time fixed-price project. Any maintenance or SEO afterward runs month-to-month, so you can leave whenever you like." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Fort Collins site should include, and a fixed-price quote with a timeline. It is the easiest way to see what Fort Collins Web Design can do for your booked-job count. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'fort-collins', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Fort Collins Website Redesign | Keep Every Ranking | OnwardCraft',
    metaDescription:
      'Fort Collins Website Redesign that keeps every ranking you have earned. Faster, mobile-first rebuilds with SEO-safe migration that convert more and hold up in hail.',
    eyebrow: 'Website Redesign · Fort Collins-Loveland',
    h1: 'Fort Collins Website Redesign that keeps every ranking you have earned',
    h2Exact: 'Fort Collins Website Redesign Company',
    heroSubhead:
      "An outdated site quietly costs you jobs every week: slow, clumsy on a phone, easy for a Fort Collins homeowner to skip past. We redesign contractor sites to convert more and load faster, and we migrate so carefully that you keep every bit of ranking you have already earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "A Fort Collins Website Redesign usually goes one of two bad ways: the site looks prettier but converts exactly the same, or it launches and the rankings vanish overnight. We do neither. We rebuild Fort Collins contractor sites mobile-first for speed and conversions, build them to survive a hail-season traffic surge, and run an SEO-safe migration with the redirects and care that protect the traffic you have spent years building, without losing rankings.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Fort Collins site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "Fort Collins homeowners, plenty of them CSU-educated and comparison-shopping three crews at once, size you up by your site in seconds. An old, cluttered design quietly ships them to a competitor who simply looks more established, even when your work is plainly better." },
      { title: "It's slow and clumsy on a phone", body: "If your site is sluggish or awkward on mobile, you are losing the majority of your Northern Colorado visitors before they ever reach your offer. A redesign built mobile-first wins those visitors back and turns them into leads." },
      { title: "It can't keep up when demand surges", body: "Traffic that never turns into calls is wasted money, and an old site that slows to a crawl under a hail-season surge loses leads at the precise moment they are worth the most. We rebuild for conversions and for the days your phone should be ringing off the hook." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pin down what is bleeding leads and rankings on your current Fort Collins site, so the rebuild fixes the real problems instead of just swapping the colors around." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep every bit of the rankings and traffic you have already earned in Fort Collins." },
      { name: 'Conversion redesign', desc: "Clear offers, smarter call-to-action placement, and lead forms a comparison-shopping Fort Collins homeowner will actually fill out. We design for booked jobs, not a prettier screenshot." },
      { name: 'Speed overhaul', desc: "We rebuild for fast mobile load and passing Core Web Vitals, which lifts conversions and rankings together and keeps the site standing through a hail-season rush." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where nearly all of your Fort Collins traffic actually lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the active, design-aware expectations of a Fort Collins audience." },
      { name: 'Hail-surge ready rebuild', desc: "Rebuilt to stay fast and keep converting when hail-season traffic spikes, so the new site captures your biggest summer jobs instead of choking on them.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as more Fort Collins search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We dig into what is losing you Fort Collins leads and rankings, then map a redesign that fixes it without breaking the pages already pulling work in for you." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we rebuild a single page." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and stage every 301 redirect and SEO detail so the move keeps the Northern Colorado rankings you spent years earning." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and watch the rankings daily so they hold and climb instead of sliding after the switch." },
      { name: 'Optimize', desc: "Post-launch tuning on what is converting Fort Collins visitors, plus ongoing speed work and updates." },
    ],
    pricing: {
      heading: 'Transparent Fort Collins redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Hail-surge ready'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Fort Collins?', a: "Most redesigns with us land between $2,500 and $9,000 as a one-time project, depending on size and integrations. Fixed Fort Collins price, no surprises, and you own the finished result outright." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not when it is handled carefully, and that is the whole point of how we migrate. We map a 301 for every changed URL, keep your content and metadata, carry the schema across, and test on staging before the switch. Done right, the rankings hold and usually climb, which matters in a market where page two is invisible." },
      { q: 'How long does a redesign take?', a: "A focused redesign runs about 3 to 5 weeks; a larger rebuild runs 5 to 9. You get a firm timeline up front, updates at every stage, and we can prioritize it to land before hail season." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is a pain to update, is not bringing in leads, or buckles when hail-season traffic surges, it is costing you work. The free audit tells you plainly whether a redesign is worth it for your Fort Collins business." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and sharpen the content you have, protect the Fort Collins pages already ranking, and run the technical migration so nothing important slips through the cracks." },
      { q: 'Will the new site handle hail-season traffic?', a: "Yes, and in Fort Collins that is a real consideration. After a big Front Range storm, contractor sites take a surge of urgent traffic, and the slow ones lose leads. We rebuild for speed and keep the call to action obvious so the site converts when demand peaks." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, since nearly all your Fort Collins traffic is on a phone and that speed lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely: the site, the domain, and the content are yours, with no platform lock-in of any kind to trap you." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project, and any maintenance or SEO afterward runs month-to-month. You can leave whenever you like." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current Fort Collins site is costing you in leads and rankings, what the rebuild should fix, and a fixed-price quote with a timeline and a safe 301 migration plan. It is the clearest way to see whether a Fort Collins Website Redesign pays for itself." },
    ],
  },
];

export const fortCollinsCity = {
  citySlug: 'fort-collins', city: 'Fort Collins', state: 'Colorado', stateAbbr: 'CO', metro: 'Fort Collins-Loveland',

  titleTag: 'Fort Collins Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Fort Collins marketing for contractors: web design, SEO, and local SEO that get you found and booked. Own your leads instead of renting them. Built for Front Range hail.',

  eyebrow: 'Fort Collins · Web Design, SEO & Lead Generation',
  h1: 'Fort Collins marketing for contractors: get ranked, get booked',
  h2Exact: 'Fort Collins Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Northern Colorado's fast-growing, hail-driven foothills market. One team to get you ranking, converting, and off the rented-lead treadmill for good.",
  heroProof: ['Built for the trades', 'Hail-season ready', 'No lock-in contracts'],
  primaryCta: 'Get my free Fort Collins audit',

  intro:
    "Fort Collins marketing for contractors comes down to getting found and getting booked in a college-educated, craft-beer foothills town that sits squarely in Hail Alley. The I-25 corridor from Fort Collins down to Greeley is one of the fastest-growing stretches in Colorado, and every new block in Timnath or Windsor brings transplant homeowners who search before they call. Winning here takes three things working together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack, all locked in before the next hail storm sends demand through the roof. Web design and SEO for Fort Collins contractors is the whole of what we do, and here is exactly how we help you pull it off.",
  aioQuestion: 'How do Fort Collins contractors get more leads online?',
  aioAnswer:
    "Fort Collins contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack. Because Northern Colorado is growing fast along the I-25 corridor and demand spikes hard during Hail Alley storm season, the contractors who look established and are already ranking before the first supercell win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Northern Colorado searches \"near me.\" The single highest-return move for most local shops, and how you catch hail-season demand before it goes to a competitor.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your Fort Collins customers actually search, build an asset you own instead of renting traffic from ads, and measure the whole thing in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs, and to stay fast when hail season floods your phone, not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it so carefully that you keep every bit of ranking you have already earned in Fort Collins search.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Fort Collins?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads, and so they are ready when hail season hits and every homeowner needs a roof inspected at once." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors, so we understand emergency calls, hail-driven demand, wildfire-season inspection rushes, and insurance claims work." },
    { q: 'Why does hail season matter for my marketing?', a: "When a supercell rolls across Northern Colorado in May, June, or July, demand for roofing, gutters, and restoration spikes inside an afternoon and the backlog can run all summer. Ranking takes months to build, so the contractors already visible before the storm take that work. We get you in place ahead of season." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time Fort Collins builds from $2,000 to $9,000. SEO and local SEO run month-to-month from $750 to $3,000, with no long contract. We settle the exact scope for your shop in the free audit." },
    { q: 'Which Fort Collins areas do you serve?', a: "All of Northern Colorado: Old Town, Midtown Fort Collins, Loveland, Windsor, Timnath, Wellington, Severance, Greeley, Johnstown, Berthoud and more." },
    { q: 'Where should I start?', a: "Start with a free Fort Collins audit. We look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. It is the simplest first step into Fort Collins marketing for contractors that actually books jobs. No pitch deck, just a plan." },
  ],
};
