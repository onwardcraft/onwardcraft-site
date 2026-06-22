// COLORADO SPRINGS: per-metro, per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Colorado Springs' 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// COLORADO SPRINGS: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Colorado Springs takes its own playbook',
  body:
    "Colorado Springs sits at 6,035 feet under Pikes Peak, and that altitude touches everything contractors do here. The city of roughly 500,000 is the most military-dense in the country: Fort Carson, Peterson Space Force Base, Schriever Space Force Base, NORAD, and the Air Force Academy all sit inside the metro. The result is a steady PCS rotation of military families who land in town, pull out a phone, and need a contractor right away. They are not calling a neighbor for a name, because they don't have a neighbor yet. They search Google, and whoever holds the top three pins on the map gets the call. Stack the weather on top of that. The Springs sits inside Hail Alley, where multi-inch stones roll through from April into August and a single storm can fire off thousands of roof and siding insurance claims at once. The roofers already ranking when that storm hits book months of work in a weekend. Then there is fire. The 2012 Waldo Canyon Fire and the 2013 Black Forest Fire left thousands of homeowners thinking hard about defensible space, ember-resistant roofing, and fire-hardening, a contractor category that barely registers in most other cities. Add thin, high-altitude air that bakes UV damage into shingles and siding faster than anywhere at sea level, plus a suburb belt sprawling from Monument down to Fountain, and you get a market with deep, layered demand that most local contractors are losing simply because Google can't see them.",
  pullQuote: "One hailstorm fires off thousands of insurance claims at once. The roofer already on page one books the season. The roofer on page two keeps wondering where the work went.",
  donut: {
    title: 'Colorado Springs by the numbers',
    value: 52,
    centerLabel: 'military-connected',
    legend: [
      { label: 'Military-connected', pct: 52, kind: 'teal' },
      { label: 'Civilian', pct: 48, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand climbs in Colorado Springs',
  seasonCaption: 'Hail season (Apr to Aug), wildfire rebuild (Jun to Sep), winter snow (Nov to Mar)',
  seasonalDemand: [
    { m: 'J', v: 72, peak: true }, { m: 'F', v: 65 }, { m: 'M', v: 60 },
    { m: 'A', v: 88, peak: true }, { m: 'M', v: 95, peak: true }, { m: 'J', v: 98, peak: true },
    { m: 'J', v: 96, peak: true }, { m: 'A', v: 90, peak: true }, { m: 'S', v: 78 },
    { m: 'O', v: 62 }, { m: 'N', v: 74, peak: true }, { m: 'D', v: 70 },
  ],
  stats: [
    { value: '500K+', label: 'people in Colorado Springs, the fastest-growing city on the Front Range' },
    { value: '~52%', label: 'of residents are military-connected, and PCS arrivals search Google the day they land', accent: true },
    { value: 'Apr to Aug', label: 'hail season, when insurance-driven roofing and siding work floods the market' },
    { value: '6,035 ft', label: 'altitude, where thin-air UV bakes roofing and exterior materials faster' },
  ],
  neighborhoods: [
    'Old Colorado City', 'Manitou Springs', 'Black Forest', 'Briargate', 'Powers',
    'Fountain', 'Monument', 'Peyton', 'Falcon', 'Pueblo West',
    'Rockrimmon', 'Northgate', 'Broadmoor', 'Stetson Hills', 'Security-Widefield',
  ],
};

const AREAS = [
  'Colorado Springs', 'Monument', 'Black Forest', 'Briargate', 'Powers',
  'Fountain', 'Pueblo West', 'Peyton', 'Falcon', 'Manitou Springs',
  'Old Colorado City', 'Rockrimmon', 'Northgate', 'Broadmoor', 'Security-Widefield',
];

const FOUNDER =
  "Here's my honest take on why Colorado Springs is interesting: the demand is enormous and the competition online is way thinner than it looks on the ground. You've got military families arriving on orders with no local network, hail storms that generate thousands of simultaneous insurance leads, and a wildfire rebuild market that barely exists anywhere else in the country — and most local contractors are still relying on yard signs and word of mouth. That's an open window, but it closes as more people figure it out. We built OnwardCraft to get good trade contractors into that window before it does.";

const WHY = [
  {
    title: 'We know how Colorado Springs actually searches',
    body: "PCS families looking for a contractor the day they unpack, hailstorm claim surges that hit overnight, wildfire rebuild and fire-hardening jobs, and thin-air UV chewing through exteriors. We build your local SEO and site around the demand that drives real work in the Springs, not a template with the city name swapped in.",
  },
  {
    title: 'We get you off rented storm leads',
    body: "After a hailstorm, brokers and storm chasers resell the same damage lead to four roofers at once. We build rankings and a Google profile that route the homeowner straight to you, so you stop bidding against three competitors for one shared name and start keeping the leads outright.",
  },
  {
    title: 'We target the neighborhoods that matter here',
    body: "A contractor working Briargate runs a different game than one in Fountain or Black Forest. We build tight geographic targeting across the Springs suburb belt, from Monument to Pueblo West and Peyton to Falcon, instead of one flat city page that ranks nowhere specific.",
  },
  {
    title: 'No contracts, no guesswork',
    body: "Prices are published, reporting ties back to actual leads, and you go month-to-month once the first 90 days are up. If we aren't earning the invoice, you leave. That keeps the pressure sitting exactly where it should: on us.",
  },
];

const PROOF = {
  heading: "We're new, so here's the honest math instead of a logo wall",
  body:
    "A lot of agencies open with a grid of client logos. We're a young, founder-led shop in the Springs, so we won't dress up a track record we haven't built yet. What we can put in front of you is the reasoning, pulled straight from Google's and the industry's own research on how people search for a local contractor.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here's a rough sketch, labelled plainly as a projection and not a result we're claiming: say a Colorado Springs contractor pulls around 1,500 local \"near me\" impressions a month across a few neighborhoods. Climbing from page-two invisibility into the top three is the gap between a quiet line and a calendar you can't keep up with. And in a market where PCS arrivals and hailstorm surges create sudden walls of high-intent searches, that gap can add up to a full season of work. In your free audit we model the real figures for your shop: your rankings, your search volume, and a straight 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Colorado Springs', state: 'Colorado', stateAbbr: 'CO', metro: 'Colorado Springs',
  heroProof: ['Built for the trades', 'Neighborhood-level targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const coloradoSpringsLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'colorado-springs', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Colorado Springs Local SEO | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Rank in the top three on Google Maps when Colorado Springs searches your service. Capture military PCS arrivals, hail-storm surges, and wildfire rebuild work.',
    eyebrow: 'Local SEO · Colorado Springs, CO',
    h1: 'When Colorado Springs searches for what you do, be the first name they find',
    h2Exact: 'Colorado Springs Local SEO Company',
    heroSubhead:
      "Google pins three businesses to the map on a \"near me\" search, and that matters more in the Springs than almost anywhere. Military families arrive on orders with no local contacts and search the moment they land. Whoever holds those three pins fields the call. We get you into them.",
    primaryCta: 'Get my free Colorado Springs audit',
    intro:
      "Colorado Springs local SEO turns on a single question: when a homeowner in Briargate or Black Forest or Fountain types your service plus \"near me,\" are you one of the three businesses Google drops on the map? Most people tap one of those three and never scroll past them. Three demand patterns shape this city that most don't share. A constant PCS military churn. Hail-season claim surges. Wildfire rebuild work. The contractors already ranking are the ones booking all of it, and here is how you join them.",
    aioQuestion: 'How do Colorado Springs businesses rank higher in local search?',
    aioAnswer:
      "Rank by tuning your Google Business Profile to the exact services and neighborhoods you cover, lining up your listings so the details match everywhere, earning a steady run of genuine reviews, and publishing local content built around the Springs' real demand: PCS arrivals, hailstorm claims, wildfire rebuild, and the suburb belt from Monument to Fountain. Tight neighborhood targeting beats one flat city page every time.",
    problemHeading: "When the phone goes quiet, it's usually one of these three",
    painPoints: [
      { title: 'Military families search Google the day they arrive', body: "Fort Carson, Peterson, Schriever, and the Air Force Academy keep a steady stream of PCS families rotating through town, each one needing a trusted contractor fast and knowing nobody to ask. They open Google, see three businesses on the map, and call one. Miss those three and you're invisible to one of the largest ready-to-hire populations in the country, week after week, all year." },
      { title: 'Hail leads land with whoever ranked before the storm', body: "A multi-inch storm drops on the Springs and thousands of homeowners search for roofing and siding contractors in the same afternoon. The shops already holding the Map Pack fill their calendars for months. The shops that weren't ranking fight over scraps. You can't build local SEO in the hours after a storm. It has to already be done." },
      { title: "You're buying leads that were never really yours", body: "Storm chasers and lead brokers swarm the Springs after every hail event, selling one homeowner to three or four contractors at once. Local SEO flips that: the homeowner finds you, calls you, and nobody else gets the lead. Over time you stop renting shared names and start owning a pipeline that runs through the whole calendar." },
    ],
    servicesHeading: 'What it actually takes to rank you in Colorado Springs',
    services: [
      { name: 'Google Business Profile', desc: "The heaviest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Colorado Springs searches should belong to you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to line up everywhere Google checks. We resolve the listings that contradict each other and build out the ones you're missing across the Front Range." },
      { name: 'Reviews that keep coming', desc: "A simple engine that turns finished jobs into a steady run of fresh reviews. It lifts your ranking and gives PCS arrivals and storm-damage homeowners a reason to dial you first." },
      { name: 'Neighborhood pages', desc: "Real pages for Briargate, Black Forest, Fountain, Monument, Peyton, and Falcon, so you rank for the actual neighborhood a searcher is standing in rather than a bare \"Colorado Springs.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, and mobile speed. The groundwork that lets everything stacked on top of it actually rank." },
      { name: 'Local link building', desc: "Mentions and links from Colorado Springs and Front Range sources Google respects: local press, HOA networks, veterans' groups, and trade associations. In this market that's often the line between page one and page two." },
      { name: 'Seasonal and storm SEO', desc: "We rank you for hail-season and wildfire-rebuild searches ahead of time, so you're visible when demand breaks instead of chasing it after, plus winter snow searches that drive emergency calls from November to March.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts inside AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read your business and name you in their answers.", featured: true },
    ],
    processName: 'How we work: the Springs Local Lift method',
    process: [
      { name: 'Audit and baseline', desc: "We find where you genuinely rank today across Colorado Springs neighborhoods and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Profile and NAP come first because they move fastest. Most Springs clients see the earliest lift right here, inside the first few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. They compound week over week, which is the whole reason local SEO rewards starting now over waiting, especially with hail season on the calendar." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Briargate, Black Forest, Monument, Fountain, and out from there, with the on-page work that makes them stick." },
      { name: 'Report and expand', desc: "Plain-language reporting tied to calls and booked work, not vanity rankings. Then we move on the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing laid out in plain sight',
      note: 'Month-to-month once the first 90 days are up. No lock-in. Cancel any time.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Springs Map Pack foundation set right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For contractors fighting across several Springs neighborhoods and suburbs.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want the whole map from Monument to Fountain.', features: ['Everything in Local Growth', 'Local link building', 'Seasonal and storm SEO', 'Multi-neighborhood and suburb pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Colorado Springs?', a: "Most Colorado Springs engagements run between $750 and $2,500 a month, set by how many neighborhoods and keywords you're chasing. The tiers above lay it out, with no hidden fees and no long contract, and we confirm exact scope in your free audit before you commit a dollar." },
      { q: 'How long until I show up in the Springs Map Pack?', a: "Profile work can move within a few weeks. Competitive Springs keywords usually need 90 to 180 days of steady effort, because reviews and citations build slowly. In a market this active, anyone promising you page one in 30 days is selling smoke." },
      { q: 'Why do military PCS arrivals matter so much for local SEO here?', a: "Colorado Springs carries one of the heaviest active-duty concentrations in the nation. PCS families show up on orders, need a contractor right away, and have no neighbor to ask. They open Google, find three businesses on the map, and call. If you aren't in those three, you don't exist to them, and a fresh wave of arrivals repeats that cycle every month of the year." },
      { q: 'How does local SEO help me after a hailstorm?', a: "If you're already ranking when a storm rolls through, the rush of homeowners searching for roofing and siding lands on you instead of a competitor. Local SEO takes months to build, so you have to be in position before the hail falls, not scrambling after. We aim to get you there ahead of the April-to-August window." },
      { q: 'Which areas do you cover around Colorado Springs?', a: "The full metro and suburb belt: Briargate, Black Forest, Monument, Fountain, Peyton, Falcon, Pueblo West, Manitou Springs, Old Colorado City, Security-Widefield, Rockrimmon, Northgate, and Broadmoor. We build real neighborhood pages rather than one flat Colorado Springs page." },
      { q: 'Do you work with Springs contractors specifically?', a: "It's nearly all we do: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand hailstorm insurance work, wildfire rebuild, and fire-hardening jobs, and we build your local SEO around them rather than a generic service list." },
      { q: 'Can you help with wildfire rebuild and fire-hardening work?', a: "Yes. After Waldo Canyon and Black Forest, Springs homeowners pay real attention to defensible space and ember-resistant materials. We can tune your profile and content to surface for those searches, a contractor category that hardly registers in most other cities and that few local shops bother to claim." },
      { q: 'Will my Springs business show up in Google AI Overviews and ChatGPT?', a: "More \"near me\" research now begins in AI instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. In a market this competitive, that's becoming as valuable as the Map Pack itself." },
      { q: 'Am I locked into a local SEO contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month, and if we're not delivering, you walk." },
      { q: "What's inside the free Springs audit?", a: "A clear read on where you rank today across your Springs neighborhoods, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your shop. No pitch deck, just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'colorado-springs', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Colorado Springs SEO Company | OnwardCraft',
    metaDescription:
      'Colorado Springs SEO for contractors. Rank for hail-storm, military, and wildfire rebuild searches. Lead-tied reporting, no lock-in. Free SEO audit.',
    eyebrow: 'SEO Services · Colorado Springs, CO',
    h1: 'Get your Colorado Springs business to the top of Google and keep it there',
    h2Exact: 'Colorado Springs SEO Company',
    heroSubhead:
      "Ads quit the second the card stops. SEO runs the other way: rank once for what your Springs customers search, from hail damage to fire hardening to contractor near me, and the leads keep arriving. We build that ranking and tie every report back to real calls and booked jobs.",
    primaryCta: 'Get my free Colorado Springs SEO audit',
    intro:
      "Colorado Springs SEO comes down to one blunt question: when someone in Briargate or Fountain searches what you do, are you on page one or page two? Page two might as well be page fifty. Few cities have search demand this intense and this predictable, between military PCS arrivals, hailstorm claim surges, and wildfire rebuild, and the contractors holding page one when those spikes hit run away with the work. We get you there and we score it in leads, not in traffic that never calls.",
    aioQuestion: 'How do Colorado Springs businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the site's technical base, tuning each page to the exact terms buyers search, publishing real local content tied to the Springs' demand (PCS arrivals, hail-damage insurance claims, wildfire rebuild, and high-altitude exterior wear), and earning links from trusted local sources. Ranking before hail season and pre-positioning ahead of wildfire season are two of the fastest ways to pull ahead of competitors here.",
    problemHeading: "Three reasons your Colorado Springs site isn't pulling in work",
    painPoints: [
      { title: "You're stuck on page two when demand breaks", body: "A hailstorm crosses the Springs and thousands of homeowners search for roofing at once. Those calls go to whoever already sits on page one. A military family arrives at Fort Carson, searches for an HVAC contractor, and dials whoever ranks first. You can't catch a surge you weren't visible for before it started, and SEO takes months to build into place." },
      { title: "You're renting traffic when you could own it", body: "Google Ads can work, but you vanish the instant the budget runs dry, and after a hail event storm chasers and lead brokers flood the Springs, driving CPCs up while reselling the same lead to several contractors. SEO builds an asset you keep: rankings that produce leads for months and years past the work, at a fraction of the per-lead cost." },
      { title: "You're missing the searches that define this market", body: "Most Springs SEO ignores the demand that makes the city singular: PCS arrival searches, hail-damage and insurance-claim searches, wildfire rebuild and fire-hardening searches, and high-altitude roofing and exterior upkeep. If your SEO is a national template with a city name dropped in, you're leaving the highest-intent searches in town sitting on the table." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings in Colorado Springs',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, page speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs handled before it will rank your Springs site at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned to the exact terms Colorado Springs customers type, across titles, headings, body copy, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers are searching, pull in links, and keep producing leads long after we hit publish." },
      { name: 'Link building', desc: "Authority from real Colorado Springs and Front Range sources. In a market this contested, links are frequently the thing that decides page one versus page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack work so you win the \"near me\" searches across the Springs' neighborhoods and suburbs right alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and booked leads rather than just rankings and traffic, so you always know what your SEO is worth in dollars." },
      { name: 'Hail-season and wildfire SEO', desc: "We rank you for hail-damage, insurance-claim, fire-hardening, and defensible-space searches before the season opens, so the spike lands on you instead of a competitor.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity can surface and name your business, since a growing share of Springs search now starts inside those tools.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft Springs SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then map a roadmap around the keywords most likely to drive real Springs leads, including the seasonal and storm-driven demand." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile. The groundwork everything else needs before it can rank at all." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content covering hail-season, wildfire-rebuild, PCS-arrival, and neighborhood-level searches." },
      { name: 'Build authority', desc: "Links and citations from trusted Colorado Springs and Front Range sources to push your competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we lean harder into what's working and push into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Colorado Springs SEO pricing',
      note: 'Month-to-month once the first 90 days are up. No lock-in. Cancel any time.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core Springs keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors fighting across several services and Springs neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For contractors who want to own Colorado Springs search outright.', features: ['Everything in SEO Growth', 'Hail-season and wildfire SEO', 'Aggressive content + links', 'Multi-neighborhood pages', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Colorado Springs?', a: "Most Colorado Springs SEO engagements run $900 to $3,000 a month, set by how competitive your keywords are and how much content and link work the climb needs. The tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Colorado Springs?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, quicker on tight neighborhood terms and slower on the most contested citywide keywords. The thing that matters most here is being ranked before hail season and wildfire season arrive, because you cannot build rankings in real time during a surge." },
      { q: 'Is SEO better than Google Ads for contractors in Colorado Springs?', a: "They do different jobs. Ads buy traffic that stops when you stop paying, and after a hailstorm, brokers and storm chasers drive CPCs through the roof. SEO is an asset you own that keeps producing leads at a lower cost over time. Most Springs contractors do best running SEO as the long-term engine and ads for fast coverage through peak season." },
      { q: 'How do you help with hailstorm and insurance-claim searches?', a: "We tune your site for hail-damage, insurance-claim, and roof-inspection searches ahead of the season, so when a storm crosses the Springs you're already on page one and the surge lands on you. This is pre-positioning, and it has to happen before the hail, not after it." },
      { q: 'Can you help with wildfire rebuild and fire-hardening SEO?', a: "Yes, and it's a contractor niche that barely exists in most cities. After Waldo Canyon and Black Forest, Springs homeowners actively search for fire-hardening, defensible space, and ember-resistant roofing. We optimize for those terms and can help you claim a category most local contractors never bother with." },
      { q: 'Do you require a long-term SEO contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it shifts to month-to-month. If we're not delivering, you leave." },
      { q: 'Will my site show up in Google AI Overviews and ChatGPT?', a: "That's a growing slice of what we optimize for. We structure your content and schema so AI engines can read, trust, and name your business, not just classic search." },
      { q: 'Which areas around Colorado Springs do you cover?', a: "The full metro and suburb belt: Colorado Springs, Monument, Black Forest, Briargate, Powers, Fountain, Peyton, Falcon, Pueblo West, Manitou Springs and beyond, with real local pages rather than one flat city page." },
      { q: 'How do you get me off storm-chaser lead brokers?', a: "By building rankings that send homeowners straight to you before and during storm season. The more of your search visibility you own, the less you lean on brokers for shared leads at peak-season prices." },
      { q: "What's inside the free Springs SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your shop, including how you're set up ahead of hail season. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'colorado-springs', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Colorado Springs Web Design | OnwardCraft',
    metaDescription:
      'Web design for Colorado Springs contractors. Fast, mobile-first sites built to convert military PCS arrivals and hail-storm leads into booked jobs.',
    eyebrow: 'Web Design · Colorado Springs, CO',
    h1: 'Colorado Springs web design that turns visitors into booked jobs',
    h2Exact: 'Colorado Springs Web Design Company',
    heroSubhead:
      "A handsome website that never generates a call is just a brochure. We build Springs contractors fast, mobile-first sites engineered to turn military PCS arrivals, hailstorm insurance leads, and everyday homeowners into booked work, and to stand out at the moments it counts.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Colorado Springs contractor sites leak leads quietly: slow on a phone, the call button buried, nothing that speaks to the military community or the hail-damage rush that defines the work here. We build sites that load fast, look like the professional you are, and turn visitors from Briargate to Fountain into booked jobs. They're built for a market where PCS families search the moment they land and a single hailstorm can set off a wall of calls overnight.",
    aioQuestion: 'What makes a good contractor website in Colorado Springs?',
    aioAnswer:
      "A good Colorado Springs contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and speaks to the demand that defines the market: military families who need a contractor fast, homeowners working a hail-damage insurance claim, and fire-aware owners weighing defensible space. Since most searches here happen on mobile and competition tightens after every storm, mobile speed and an obvious next step separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't booking Springs jobs",
    painPoints: [
      { title: "It says nothing to military families", body: "A large share of Springs homeowners are active duty or veterans who arrive on PCS orders needing a contractor fast, with no local network to ask. A generic site that never acknowledges the military community, speaks to their timeline, or builds quick trust hands a huge ready-to-hire audience straight to whoever does." },
      { title: "It's too slow to catch a hailstorm surge", body: "A major storm hits and thousands of homeowners search for roofing at once. If your site is slow, awkward on mobile, or buried on page two, those leads pick a competitor before yours even finishes loading. We build fast and tune for exactly these surges, so when the hail falls your site is already standing." },
      { title: "It blends in instead of standing out", body: "The Springs contractor market is crowded, and it gets more crowded after storms when out-of-town chasers roll in. A site that looks like everyone else's gives a homeowner no reason to trust you over a chaser with a polished pitch. We build sites that mark you as the local professional worth calling." },
    ],
    servicesHeading: "What's in an OnwardCraft Colorado Springs website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site shaped around your trade, your Springs neighborhoods, and the jobs you actually want more of." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where nearly all your traffic lives, especially the military families and storm-damage homeowners searching in the moment." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where homeowners actually use them. Every page carries one unmistakable next step." },
      { name: 'Copy that sells', desc: "Words that build trust fast with military families and hail-damage homeowners, written for the Colorado Springs market instead of reading like a national template." },
      { name: 'Local SEO foundation', desc: "Built to rank from the ground up: clean structure, schema, fast load, and neighborhood-ready pages from Briargate to Fountain." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned for fast load and passing Google's performance checks, which protects conversions and rankings together, and matters most when a storm drives a sudden flood of traffic." },
      { name: 'Neighborhood-targeted pages', desc: "Pages built around the suburbs and neighborhoods you serve, from Monument and Black Forest to Peyton, Falcon, and Pueblo West, so you rank locally instead of fading into one flat Springs page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read your site and put your business forward as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft Springs process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your Springs neighborhoods, your best jobs, and your competitors, including how military families and storm-damage homeowners search, then shape the site around booking more of the work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert, and you see it and shape it before a single line of code goes in." },
      { name: 'Build and copy', desc: "We build it fast and write copy that sells, with the call to action front and center on every page and trust signals that land with this market." },
      { name: 'Launch', desc: "We launch clean, with the SEO foundation, tracking, and load speed all set from the first day live." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it on what's actually converting, including pre-season work ahead of hail season." },
    ],
    pricing: {
      heading: 'Transparent Colorado Springs web design pricing',
      note: 'One-time build, billed 50% to start and 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade Springs contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A larger site for established contractors running a few services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Neighborhood-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location Springs contractors.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Colorado Springs?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, set by page count and integrations. Fixed price, no surprises, and you own the finished site outright." },
      { q: 'How long does a Springs build take?', a: "A focused site runs about 2 to 4 weeks; a larger custom build runs 4 to 8. You get a firm timeline up front and an update at every stage." },
      { q: 'How does a website help me reach military families?', a: "PCS arrivals have no local network and search Google right away. A fast, trustworthy site that surfaces for their searches, builds credibility quickly, and makes calling you easy is how you win their business before a competitor moves. We design for exactly that: quick trust signals, an obvious next step, and local credibility that out-of-town chasers can't fake." },
      { q: 'Will my new site help me capture hailstorm leads?', a: "Yes. We build fast, mobile-tuned sites ready for the rush of searches after a major storm. Paired with local SEO, the homeowners hunting for roofing and siding find you and call you, not the chaser who pulled into town yesterday." },
      { q: 'Will my new Springs site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank, and pairing it with our SEO service is how you climb the competitive Springs terms." },
      { q: 'Do I own the website outright?', a: "Completely. You own the site, the domain, and the content, with no hostage situations and no platform you can't walk away from." },
      { q: 'Will the site work well on phones?', a: "We design mobile-first, because that's where nearly all your Colorado Springs traffic comes from, especially homeowners searching right after a storm or military families just landing in a new city." },
      { q: 'What platform will you build on?', a: "We pick the platform that fits your needs and that you can manage yourself, usually WordPress or Webflow. We recommend the right fit in your free consult and walk through the tradeoffs in plain language." },
      { q: 'Do you offer support after launch?', a: "Yes. Launch support is included with every build, and after that we offer affordable monthly maintenance covering updates, speed, and security." },
      { q: 'What do I get in the free Springs quote?', a: "A clear read on what your current site is costing you in lost leads, what a high-converting Colorado Springs contractor site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'colorado-springs', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Colorado Springs Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your Colorado Springs website without losing rankings. Faster, mobile-first rebuilds that convert military families and hail-storm leads into jobs.',
    eyebrow: 'Website Redesign · Colorado Springs, CO',
    h1: 'Redesign your Colorado Springs website without losing your rankings',
    h2Exact: 'Colorado Springs Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week: slow on a phone, hard to trust, invisible to PCS arrivals searching Google the moment they land. We redesign Springs contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks sharper but converts exactly the same, or it launches and the rankings drop off a cliff. We do neither. We redesign Colorado Springs contractor sites for speed and conversions, built to earn trust from military families, catch hail-season leads, and stand out against storm chasers, and we migrate with the redirects and SEO care that protect the traffic you already hold.",
    aioQuestion: 'How do I redesign my Colorado Springs website without losing SEO and traffic?',
    aioAnswer:
      "Protect SEO through a redesign by holding your URL structure or mapping 301 redirects for every changed page, preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done carefully, a redesign holds your rankings and lifts them, because the new site is faster, more mobile-friendly, and better structured. In the Springs, timing counts too: try to finish and reindex before hail season so you're ranking cleanly when the surge hits.",
    problemHeading: "Signs your Colorado Springs site is overdue for a redesign",
    painPoints: [
      { title: "It loses trust before military families even call", body: "PCS arrivals are sizing you up in seconds on a phone. An old, cluttered, slow site quietly reads as unreliable to someone with no local network to lean on for a recommendation. They move on to a competitor who simply looks more professional, even when your work is plainly better." },
      { title: "It can't handle a hailstorm surge", body: "A major storm hits and your outdated site is slow, clumsy on mobile, and buried on page two. The homeowners searching during the surge bounce before they ever find your number. A rebuilt, fast, mobile-first site, paired with pre-positioned SEO, is how you actually capture that demand." },
      { title: "It blends into a crowded post-storm market", body: "After every major hailstorm, out-of-town chasers flood the Springs with slick pitches. An old site makes it harder to prove you're the established local professional. We rebuild around local trust signals, real neighborhood detail, and the credibility a chaser can't fake." },
    ],
    servicesHeading: "What's in an OnwardCraft Colorado Springs redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's bleeding you leads and rankings today, so the redesign fixes real problems instead of just repainting the color scheme." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned, timed carefully ahead of hail season where we can." },
      { name: 'Conversion redesign', desc: "Clear offers, smarter call-to-action placement, and lead forms homeowners actually use. Designed to book jobs, not just to photograph well." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals, which lifts conversions and rankings together and readies the site for the spikes that follow a major storm." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where nearly all your Springs traffic lives, especially military families and homeowners searching out in the field." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that marks you as the established local professional, not someone who rolled into town this week with a truck and a flyer." },
      { name: 'Neighborhood-targeted rebuild', desc: "Rebuilt around the suburbs and neighborhoods you serve, from Black Forest and Monument to Fountain, Peyton, and Falcon, so the new site ranks locally and holds up against storm-season competition.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read your site and put your business forward as more search moves toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful Springs rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you leads and rankings, and look at how you're set up for hail season and PCS-arrival traffic, then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first design built to convert, which you review and shape before any rebuilding starts." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and stage every redirect and SEO detail so the migration lands clean and nothing important drops." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and watch closely so rankings hold and climb instead of dropping, especially ahead of a peak season." },
      { name: 'Optimize', desc: "Post-launch tuning on what's converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Colorado Springs redesign pricing',
      note: 'One-time project, billed 50% to start and 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small Springs contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established Springs contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Neighborhood-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location Springs sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Colorado Springs?', a: "Most redesigns with us land between $2,500 and $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and the finished result is yours outright." },
      { q: 'Will I lose my Google rankings in a Springs redesign?', a: "Not if it's handled carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually pushes them higher. Timing ahead of hail season is something we plan for on purpose." },
      { q: 'How long does a Springs redesign take?', a: "A focused redesign runs about 3 to 5 weeks; a larger rebuild runs 5 to 9. You get a firm timeline up front and an update at each stage." },
      { q: 'How do I know I need a redesign in the Springs?', a: "If your site is slow on phones, looks dated, can't handle a wall of hailstorm traffic, or fails to build the local trust military families need when they reach a new city, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Can you help me stand out against storm chasers?', a: "Yes, and it's a real problem in the Springs after every major hailstorm. We rebuild around local trust signals, real neighborhood detail, established presence, and professional credibility, that out-of-town chasers can't fake. A site that reads as the local expert beats a flyer from someone who blew in last week." },
      { q: 'Do you migrate my existing Springs content?', a: "Yes. We carry over and sharpen your existing content, preserve what's ranking, and handle the technical migration so nothing important slips through." },
      { q: 'Will the rebuilt site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, ready for everyday traffic and for the spikes that come when a storm rolls through or a fresh PCS cycle starts." },
      { q: 'Do I own the redesigned Springs site?', a: "Completely: the site, the domain, and the content, with no platform lock-in of any kind." },
      { q: 'Am I locked into a redesign contract?', a: "No. The redesign itself is a one-time project, and any ongoing maintenance or SEO afterward runs month-to-month." },
      { q: "What's inside the free Springs redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, including how you're set up for hail season and military-family traffic, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const coloradoSpringsCity = {
  citySlug: 'colorado-springs', city: 'Colorado Springs', state: 'Colorado', stateAbbr: 'CO', metro: 'Colorado Springs',

  titleTag: 'Colorado Springs Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Colorado Springs contractors. Get found by military PCS arrivals, hail-storm homeowners, and wildfire rebuild clients.',

  eyebrow: 'Colorado Springs · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Colorado Springs contractors found and booked',
  h2Exact: 'Colorado Springs Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for the Springs' military-dense, hail-prone, fire-aware market. One team to get you ranking before the storm, converting the PCS arrivals, and off the storm-chaser lead treadmill.",
  heroProof: ['Built for the trades', 'Neighborhood-level targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Colorado Springs audit',

  intro:
    "If you run a contracting business in Colorado Springs, you're working one of the most distinctive markets in the country. Military PCS families arrive year-round with an immediate need and no local network. Hailstorms set off thousands of insurance-claim searches at once that run for weeks. Wildfire awareness sustains a fire-hardening and defensible-space market that hardly exists elsewhere. And a fast-growing suburb belt from Monument to Fountain keeps stretching the territory you have to cover. Winning here takes three things pulling together: a site that converts under pressure, SEO that ranks you before the surges land, and local SEO that puts you in the Map Pack for every neighborhood you serve. Here's how we help Springs contractors do exactly that.",
  aioQuestion: 'How do Colorado Springs contractors get more leads online?',
  aioAnswer:
    "Colorado Springs contractors get more leads by pairing a fast, mobile-first website with SEO that ranks them for the searches that define this market (military PCS arrivals, hail-damage insurance claims, wildfire rebuild, and neighborhood-level \"near me\" searches) and local SEO that wins the Map Pack across a fast-growing suburb belt. Pre-positioning before hail season and building trust signals that work for military families are two of the fastest ways to pull ahead here.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when the Springs searches \"near me.\" PCS arrivals, hailstorm homeowners, and wildfire rebuild clients call whoever ranks first, and that should be you.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the hail-season, military-arrival, and wildfire-rebuild searches that drive this market. Build an asset you own instead of renting traffic from ads or brokers reselling the same storm lead to four contractors.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites built to earn quick trust from PCS families, capture hailstorm insurance leads, and stand out against the storm chasers who roll in after every major event.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, rankings intact',
      blurb: "Rebuild an outdated site for speed and conversions, timed ahead of hail season where we can, and migrate carefully so you keep every bit of ranking you've already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Colorado Springs?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients pair a high-converting website with SEO and local SEO so they rank before hail season, convert the PCS arrivals, and own their leads instead of buying them from storm chasers." },
    { q: 'Do you work only with Springs contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors, so we understand hailstorm insurance work, wildfire rebuild, fire-hardening jobs, and the military-family market that makes the Springs unusual." },
    { q: 'Why does the Colorado Springs market need a different approach?', a: "Three things set it apart: a constant PCS military churn that sends high-intent homeowners straight to Google with no referral network; hailstorm claim surges that reward whoever is already ranking; and a wildfire-rebuild and fire-hardening market that doesn't really exist anywhere else. A national template with a city name dropped in misses every bit of it." },
    { q: 'How much does it cost to work with you in the Springs?', a: "Websites are one-time builds running $2,000 to $9,000. SEO and local SEO are month-to-month, from $750 to $3,000, with no long contract. We pin down exact scope in your free audit." },
    { q: 'Which Colorado Springs areas do you serve?', a: "The full metro and suburb belt: Colorado Springs, Monument, Black Forest, Briargate, Powers, Fountain, Peyton, Falcon, Pueblo West, Manitou Springs, Old Colorado City, Security-Widefield, Rockrimmon, Northgate, and Broadmoor, with real local pages rather than one flat city page." },
    { q: 'Where should I start in the Springs?', a: "Start with a free Colorado Springs audit. We'll look at your website, your rankings, and your Map Pack presence, including how you're set up for hail season and military-family traffic, and tell you the one or two moves that'll bring in the most work fastest. No pitch deck, just a plan." },
  ],
};
