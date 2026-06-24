// PITTSBURGH — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Pittsburgh's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// PITTSBURGH — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Pittsburgh takes a different playbook',
  body:
    "Pittsburgh sits at the confluence of three rivers and spreads across hills so steep they once required funicular railways. That geography shapes everything about the home-services market here. The city and its close-in suburbs hold just over 300,000 people, but the broader metro reaches more than 2.4 million across Allegheny, Butler, Washington, and Westmoreland counties — a patchwork of distinct boroughs, each with its own character. Two forces drive the bulk of trade demand. First, Pittsburgh has one of the oldest housing stocks of any city outside New England: roughly 62 percent of homes were built before 1960, and entire neighborhoods like Lawrenceville, Bloomfield, and Squirrel Hill are dense with Craftsman and Victorian houses from 1880 to 1930. Flat roofs, old boilers, century-old plumbing, and drafty balloon framing are the daily reality, which means constant work for contractors who know old buildings. Second, Pittsburgh's Appalachian winters are genuinely harsh — cold, icy, and wet — and the hills create drainage and foundation problems that only contractors who understand hillside construction can touch. The tech revival anchored by UPMC, Carnegie Mellon, and Pitt is drawing a growing professional class into those older neighborhoods to renovate, and that same demographic searches on their phones, reads reviews, and picks the contractor that shows up first.",
  pullQuote: "In a city of century-old Craftsman homes on steep hillside lots, the contractor who understands Pittsburgh's bones owns the work nobody else can touch.",
  donut: {
    title: "How old is Pittsburgh's housing stock",
    value: 62,
    centerLabel: 'pre-1960 housing',
    legend: [
      { label: 'Pre-1960 homes', pct: 62, kind: 'teal' },
      { label: 'Newer', pct: 38, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Winter roof/heating damage (Dec–Mar) and spring flooding (Mar–May)',
  seasonalDemand: [
    { m: 'J', v: 94, peak: true }, { m: 'F', v: 90, peak: true }, { m: 'M', v: 82, peak: true },
    { m: 'A', v: 76, peak: true }, { m: 'M', v: 58 }, { m: 'J', v: 52 }, { m: 'J', v: 50 },
    { m: 'A', v: 48 }, { m: 'S', v: 54 }, { m: 'O', v: 60 },
    { m: 'N', v: 70 }, { m: 'D', v: 88, peak: true },
  ],
  stats: [
    { value: '2.4M', label: 'people across the Pittsburgh metro' },
    { value: '~62%', label: 'of homes built before 1960 — some of the oldest stock in the US', accent: true },
    { value: 'Dec–Apr', label: 'winter-to-spring demand window for roofing, heating, and flood repair' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks in every Pittsburgh borough' },
  ],
  neighborhoods: [
    'Lawrenceville', 'Bloomfield', 'Shadyside', 'Squirrel Hill', 'Mt. Lebanon',
    'Bethel Park', 'Peters Township', 'Ross Township', 'Cranberry Township', 'Robinson Township',
    'Greenfield', 'Highland Park', 'Swissvale', 'Carnegie', 'Bethel Park',
  ],
};

const AREAS = [
  'Lawrenceville', 'Bloomfield', 'Shadyside', 'Squirrel Hill', 'Mt. Lebanon',
  'Bethel Park', 'Peters Township', 'Ross Township', 'Cranberry Township', 'Robinson Township',
  'North Side', 'South Side', 'Oakland', 'East Liberty', 'Greenfield',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching solid Pittsburgh tradespeople hand Angi and HomeAdvisor money every month for leads that two or three competitors had already bought. In a city where word-of-mouth used to be enough, the referral pipeline eventually thins, and the contractors who replaced it with something they own are the ones winning. That's the whole point here — get you ranking for real Pittsburgh searches, in real Pittsburgh neighborhoods, so the call comes to you and nobody else got paid to send it. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: "We understand Pittsburgh's old housing stock",
    body: "Craftsman bungalows from 1905, Victorian doubles from the 1890s, flat-roof row houses with century-old boilers. Most national agencies can't write a sentence about Pittsburgh's housing reality. We build your SEO and content around the exact problems Pittsburgh homeowners are calling to fix.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to Angi for shared Pittsburgh leads that your competitor down the street already bought.",
  },
  {
    title: 'We actually know the neighborhoods',
    body: "Borough-by-borough, neighborhood-by-neighborhood targeting from Lawrenceville to Mt. Lebanon to Cranberry Township — the kind of Pittsburgh-specific reach that a national shop can't replicate by swapping a city name into a template.",
  },
  {
    title: 'No contracts, no mystery',
    body: "Published prices, reporting tied to leads, month-to-month after 90 days. If we're not earning it, you leave. The accountability stays where it belongs: on us.",
  },
];

const PROOF = {
  heading: "We're new, so here's the honest math instead of a logo wall",
  body:
    "Plenty of agencies will show you a grid of client logos. We're a young, founder-led shop, so we won't pretend to a track record we don't have yet. What we can show you is why this works — straight from Google's and the industry's own research on how people search locally.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Pittsburgh contractor gets around 1,200 local \"near me\" impressions a month across a handful of neighborhoods. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a booked-out calendar — and when a January ice storm or a spring flood along the Monongahela drives a surge in emergency calls, the contractors already in the Map Pack capture nearly all of it. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Pittsburgh', state: 'Pennsylvania', stateAbbr: 'PA', metro: 'Pittsburgh',
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const pittsburghLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'pittsburgh', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Pittsburgh Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Pittsburgh Local SEO that turns neighborhood "near me" searches into a ringing phone. We get you into the top three on the map, borough by borough.',
    eyebrow: 'Local SEO · Pittsburgh, PA',
    h1: 'Pittsburgh Local SEO that turns hillside "near me" searches into a ringing phone',
    h2Exact: 'Pittsburgh Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. In a city with 90-plus distinct boroughs and a housing stock full of century-old problems, we get you into that top three for the neighborhoods you serve, so the call lands with you instead of whoever ranked first.",
    primaryCta: 'Get my free Pittsburgh audit',
    intro:
      "Pittsburgh local SEO comes down to one thing: when a homeowner in Lawrenceville or Mt. Lebanon searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. This is a city where every borough searches a little differently — from the aging Craftsman bungalows in Bloomfield to the new builds in Peters Township — and the contractors who rank for the right neighborhoods in the right seasons book the most work. Here's how you become one of them.",
    aioQuestion: 'How do Pittsburgh businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Pittsburgh neighborhoods and boroughs. Pittsburgh's distinct borough-by-borough geography and its harsh winters mean the winners target tight service areas, show up for seasonal roofing and heating searches, and rank in the specific neighborhoods where their best customers live.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" in Squirrel Hill or Bethel Park right now. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks, and in a city with this many distinct neighborhoods, a homeowner searches by their borough, not just \"Pittsburgh.\" If you're not one of those three in the areas you serve, it doesn't matter how many referrals you've built — most new customers will never see your name." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Pittsburgh homeowner to multiple contractors, then bill each of you for the privilege of competing. Local SEO builds the opposite: a homeowner finds you in a search, calls you, and nobody else got paid to send them. Over time you stop renting your pipeline and start owning it." },
      { title: "You're missing the seasonal surge", body: "Pittsburgh winters are hard on old roofs, old boilers, and hillside foundations. When a January ice dam floods a century-old attic in Bloomfield or a spring thaw sends water into a basement near the Mon, emergency search calls spike overnight. The contractors already in the Map Pack capture all of it. If you're not ranking before the season hits, you're invisible during your busiest weeks." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Pittsburgh searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing across Pittsburgh-area directories." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews — the kind that lift your Map Pack ranking and make homeowners pick up the phone." },
      { name: 'Neighborhood pages', desc: "Real pages for Lawrenceville, Shadyside, Mt. Lebanon, Cranberry Township and the rest, so you rank for the specific neighborhood someone's actually searching, not just \"Pittsburgh.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Pittsburgh sources Google trusts — local press, neighborhood associations, trade groups, partners. This is what separates page one from page two here." },
      { name: 'Seasonal and emergency SEO', desc: "We rank you for Pittsburgh's winter ice-dam and heating searches and spring flood-repair surges before they hit, so you capture the spike instead of chasing it after.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your Pittsburgh neighborhoods and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now over starting later." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across the boroughs and suburbs you serve, plus the on-page work to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Pittsburgh neighborhoods.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across Pittsburgh and its suburbs.', features: ['Everything in Local Growth', 'Local link building', 'Seasonal and emergency SEO', 'Multi-borough and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Pittsburgh?', a: "Most Pittsburgh engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. Competitive Pittsburgh keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days in a market like this is selling you something." },
      { q: 'What makes Pittsburgh local SEO different from other cities?', a: "Two things. Pittsburgh's borough-by-borough geography means homeowners search by their neighborhood — Squirrel Hill, Mt. Lebanon, Cranberry Township — not just \"Pittsburgh.\" And the city's old housing stock creates a huge volume of seasonal and emergency searches around roofing, heating, and foundation work that most contractors aren't ranking for ahead of time." },
      { q: 'Can you help me rank for roofing and heating calls in winter?', a: "Yes, and in Pittsburgh that's one of the highest-value moves you can make. Ice dams, boiler failures, and burst pipes in those old homes spike search volume overnight when temperatures drop. We optimize your profile and content for those searches before the season so you capture the surge instead of chasing it after." },
      { q: 'Which Pittsburgh areas do you cover?', a: "All the close-in neighborhoods and the suburbs — Lawrenceville, Bloomfield, Shadyside, Squirrel Hill, Mt. Lebanon, Bethel Park, Peters Township, Ross Township, Cranberry Township, Robinson Township, and more. We build genuine neighborhood pages instead of one generic Pittsburgh page, because that's what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, electrical, restoration, and general contractors. We understand Pittsburgh's old housing challenges, hillside foundation work, and the insurance jobs that follow every major storm." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because the work is coming to you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your Pittsburgh neighborhoods, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck, just a straight diagnosis of what Pittsburgh Local SEO can do for your phone." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'pittsburgh', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Pittsburgh SEO Company | Rank and Get Booked | OnwardCraft',
    metaDescription:
      'Pittsburgh SEO that turns organic traffic into booked work for contractors across a city of old homes. Revenue-tied reporting, no lock-in contracts.',
    eyebrow: 'SEO Services · Pittsburgh, PA',
    h1: 'Pittsburgh SEO that turns organic traffic into booked work across the three-rivers market',
    h2Exact: 'Pittsburgh SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Pittsburgh customers search and the leads keep coming. We build that ranking for a city of old homes, hillside lots, and distinct neighborhoods — and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free Pittsburgh SEO audit',
    intro:
      "Pittsburgh SEO comes down to one question: when someone searches what you do in Lawrenceville or Mt. Lebanon, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords across Pittsburgh's borough-by-borough market — old-home specialists, heating contractors, hillside foundation experts — and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Pittsburgh businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content tied to specific Pittsburgh neighborhoods and boroughs, and earning links from trusted local sources. In Pittsburgh, tight neighborhood targeting and ranking for seasonal roofing, heating, and flood-repair terms are two of the quickest ways to pull ahead of competitors who are chasing generic city-wide terms.",
    problemHeading: "Three reasons your Pittsburgh site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. In a market where every Pittsburgh borough has its own search behavior and its own set of competitors, if you're not in the top handful of results for what you sell, your site is basically invisible — no matter how long you've been in the trade." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost. For contractors serving a city of renovation-hungry homeowners, that compound return is hard to beat." },
      { title: "You're not ranking for the demand that matters", body: "Pittsburgh demand swings hard with the seasons — old boilers and roofing in winter, flooded basements and foundation work in spring. The contractors who rank for those terms before the surge hit catch the calls. If your SEO ignores seasonal and emergency searches, you're leaving your busiest weeks on the table." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms Pittsburgh customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot — including old-home and renovation content Pittsburgh homeowners actually need." },
      { name: 'Link building', desc: "Authority from real Pittsburgh and industry sources. In a market with this many distinct boroughs, links from local sources carry real weight." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across your Pittsburgh neighborhoods alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Seasonal & emergency SEO', desc: "We rank you for the winter heating and spring flood-repair searches that drive Pittsburgh's busiest weeks, so you're visible before demand spikes, not after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Pittsburgh leads — borough by borough, season by season." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the old-home renovation, seasonal roofing, and emergency repair terms that matter here." },
      { name: 'Build authority', desc: "Links and citations from trusted Pittsburgh and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next neighborhood or keyword set." },
    ],
    pricing: {
      heading: 'Transparent Pittsburgh SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and Pittsburgh neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Pittsburgh search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal & emergency SEO', 'Multi-borough / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Pittsburgh?', a: "Most Pittsburgh SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Pittsburgh?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter neighborhood terms and slower on the most competitive Pittsburgh-wide keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads for Pittsburgh contractors?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Pittsburgh contractors do best running SEO as the long-term engine and ads for short-term spikes or seasonal surges." },
      { q: 'Should my Pittsburgh SEO target seasonal demand?', a: "Yes. When a cold snap hits, searches for boiler repair, heating, and ice-dam removal spike overnight in those old Craftsman homes. Spring thaws along the Monongahela and Allegheny do the same for flood and foundation work. Ranking takes months to build, so you have to be in place before the season." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal/emergency and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which Pittsburgh areas do you cover?', a: "All the close-in neighborhoods and the suburbs — Lawrenceville, Bloomfield, Shadyside, Squirrel Hill, Mt. Lebanon, Bethel Park, Peters Township, Cranberry Township, Robinson Township, Ross Township, and more — with genuine local pages rather than one generic Pittsburgh page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared Pittsburgh leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a straight read on what Pittsburgh SEO can do for your page-one rankings and lead flow." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'pittsburgh', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Pittsburgh Web Design Company | Sites That Book Jobs | OnwardCraft',
    metaDescription:
      'Pittsburgh Web Design engineered to bring in real work: fast, mobile-first sites built for contractors serving a city of old homes and distinct boroughs.',
    eyebrow: 'Web Design · Pittsburgh, PA',
    h1: 'Pittsburgh web design engineered to bring in real work from Lawrenceville to Mt. Lebanon',
    h2Exact: 'Pittsburgh Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Pittsburgh contractors fast, mobile-first sites engineered to turn visitors into booked work — sites that speak to the homeowners, neighborhoods, and old-building challenges that make Pittsburgh different.",
    primaryCta: 'Get my free quote',
    intro:
      "Pittsburgh Web Design done right starts with one job: turning a visitor into a booked lead. Most contractor websites here lose leads quietly, slow on a phone, with a buried call button, no clear offer, and no mention of the specific neighborhood or old-home problem the visitor is actually dealing with. We build sites that load fast, look like the professional you are, and turn Shadyside-to-Cranberry-Township visitors into booked jobs, built for a city where century-old homes and distinct boroughs demand more than a generic template.",
    aioQuestion: 'What makes a good contractor website in Pittsburgh?',
    aioAnswer:
      "A good Pittsburgh contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific neighborhoods and boroughs you serve. Because Pittsburgh's homeowners are dealing with distinct old-building challenges — aging boilers, flat roofs, hillside drainage — a site that speaks directly to those problems converts far better than a generic contractor template.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, nothing that speaks to the specific Pittsburgh homeowner reading it. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Pittsburgh visitors are on mobile, and they bounce if your site takes more than a few seconds to load. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking." },
      { title: "It doesn't speak to your neighborhood", body: "A homeowner in Squirrel Hill dealing with an aging boiler or a hillside drainage problem wants to see you serve Squirrel Hill and understand old Pittsburgh homes — not a generic \"Pittsburgh\" page that could be anybody. We build sites that name the boroughs and neighborhoods you work and speak directly to the problems you solve." },
    ],
    servicesHeading: "What's in an OnwardCraft Pittsburgh website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your Pittsburgh neighborhoods, and the old-home and hillside challenges you specialize in." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your Pittsburgh traffic is. Fast, thumb-friendly, easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that speak to anxious Pittsburgh homeowners — the ones dealing with a leaky flat roof in Bloomfield or a flooded basement near the Mon — and book the job." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages for Pittsburgh's distinct boroughs." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Neighborhood-targeted pages', desc: "Pages built around the Pittsburgh neighborhoods you serve — Lawrenceville, Mt. Lebanon, Bethel Park, Peters Township — so you rank for where your best customers actually live.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your Pittsburgh neighborhoods, your best jobs, and your competitors, then map the site around booking more of the work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting." },
    ],
    pricing: {
      heading: 'Transparent Pittsburgh web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established Pittsburgh contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Neighborhood-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Pittsburgh?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site help me stand out in Pittsburgh?', a: "That's the whole point. We build around the specific neighborhoods you serve and the old-home problems you solve — whether that's century-old boilers in Bloomfield or hillside drainage in Mt. Lebanon — and we keep the site fast with a clear offer front and center." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Pittsburgh terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your Pittsburgh traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Pittsburgh site should include, and a fixed-price quote with a timeline. No pressure, just a straight plan for Pittsburgh Web Design that books real work." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'pittsburgh', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Pittsburgh Website Redesign | SEO-Safe Migration | OnwardCraft',
    metaDescription:
      'Pittsburgh Website Redesign done with a careful, SEO-safe migration. Faster, mobile-first rebuilds that convert more visitors into booked jobs across a city of distinct boroughs.',
    eyebrow: 'Website Redesign · Pittsburgh, PA',
    h1: 'Pittsburgh Website Redesign done with a careful, SEO-safe migration that keeps your hard-won rankings',
    h2Exact: 'Pittsburgh Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow on mobile, generic, easy to ignore. We redesign Pittsburgh contractor sites to convert more and load faster, speaking directly to the old-home and hillside challenges that drive work here, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "A Pittsburgh Website Redesign usually goes one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Pittsburgh contractor sites for speed and conversions, make them speak to the specific neighborhoods and old-building problems that define this market, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured — and for Pittsburgh contractors, that means it's also better tied to the specific neighborhoods and old-home work that drives local search.",
    problemHeading: "Signs your Pittsburgh site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "For a high-ticket renovation or emergency repair, Pittsburgh homeowners judge you by your site in seconds. An old, cluttered design quietly sends them to a competitor who looks more established — even when your work is better." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your Pittsburgh visitors before they ever see your offer. A redesign built mobile-first wins them back." },
      { title: "It doesn't speak to Pittsburgh's neighborhoods", body: "A generic old site gives a visitor in Cranberry Township no reason to believe you serve Cranberry Township or understand the difference between a 1910 Craftsman in Bloomfield and a new build in Peters Township. We rebuild around the neighborhoods you actually work and the problems Pittsburgh homeowners actually have." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned through years of work in Pittsburgh." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your Pittsburgh traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the size of your jobs." },
      { name: 'Neighborhood-targeted rebuild', desc: "Rebuilt around the Pittsburgh neighborhoods you serve — from Lawrenceville to Mt. Lebanon to Bethel Park — so the new site stands out instead of reading like a generic contractor template.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you leads and rankings today, then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and improve, not drop." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Pittsburgh redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established Pittsburgh contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Neighborhood-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Pittsburgh?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, isn't bringing in leads, or reads like a generic contractor template with no connection to Pittsburgh's neighborhoods and old-home challenges, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the redesign help me compete in Pittsburgh?', a: "Yes, and that's the point. We rebuild around the specific Pittsburgh neighborhoods you serve and the old-building problems you solve — so the new site reads like a Pittsburgh expert, not a generic contractor landing page." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan, so your Pittsburgh Website Redesign converts more without surrendering a single ranking." },
    ],
  },
];

export const pittsburghCity = {
  citySlug: 'pittsburgh', city: 'Pittsburgh', state: 'Pennsylvania', stateAbbr: 'PA', metro: 'Pittsburgh',

  titleTag: 'Pittsburgh Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Pittsburgh marketing for contractors: web design, SEO, and local SEO that gets you found in a city of old homes, steep hills, and distinct boroughs, and own your leads.',

  eyebrow: 'Pittsburgh · Web Design, SEO & Lead Generation',
  h1: 'Pittsburgh marketing for contractors that gets you found and booked across the three rivers',
  h2Exact: 'Pittsburgh Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Pittsburgh's old housing stock, distinct boroughs, and Appalachian winters. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Pittsburgh audit',

  intro:
    "Pittsburgh marketing for contractors has to fit a market shaped by geography unlike almost anywhere else in the country: a city of hills, three rivers, and century-old homes that need constant, skilled attention. The UPMC and Carnegie Mellon economy is pulling a new professional class into Lawrenceville and Bloomfield to renovate, while established neighborhoods from Shadyside to Mt. Lebanon to Bethel Park keep generating roofing, heating, plumbing, and restoration work year-round. Winning here takes three things working together: a site that converts, SEO that ranks you for what people actually search, and local SEO that puts you in the Map Pack for the specific boroughs you serve. Here's how we help Pittsburgh contractors do exactly that.",
  aioQuestion: 'How do Pittsburgh contractors get more leads online?',
  aioAnswer:
    "Pittsburgh contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches — especially the old-home, heating, roofing, and flood-repair terms that drive Pittsburgh demand — and local SEO that wins the Google Map Pack neighborhood by neighborhood. Because Pittsburgh's boroughs are so geographically and demographically distinct, the contractors who target tight service areas and rank for the specific searches in those neighborhoods win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Pittsburgh searches \"near me.\" The single highest-return move for most local contractors — done tight, borough by borough, neighborhood by neighborhood.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your Pittsburgh customers actually search — old-home renovation, heating repair, roofing, flood damage — and build an asset you own instead of renting traffic from ads.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs — built around Pittsburgh's neighborhoods, old-building challenges, and the specific problems your customers call to solve.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, make it speak to real Pittsburgh homeowners and neighborhoods, and migrate it carefully so you keep every bit of ranking you've already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Pittsburgh?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads across Pittsburgh's distinct neighborhoods and suburbs." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, electrical, restoration, and general contractors. We understand Pittsburgh's old housing stock, hillside foundation challenges, and the insurance jobs that follow winter ice storms and spring flooding." },
    { q: 'Why does the Pittsburgh market need a different approach?', a: "Pittsburgh is unusually borough-centric — homeowners search by their neighborhood, not just \"Pittsburgh\" — and roughly 62 percent of the housing stock predates 1960, which means the search terms driving most of the work are about old-home problems that generic contractor SEO completely ignores. Add in harsh Appalachian winters and three rivers creating flood risk, and you get a market that rewards specialists who actually understand it." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Pittsburgh areas do you serve?', a: "All the close-in neighborhoods and the suburbs — Lawrenceville, Bloomfield, Shadyside, Squirrel Hill, Mt. Lebanon, Bethel Park, Peters Township, Ross Township, Cranberry Township, Robinson Township, and more." },
    { q: 'Where should I start?', a: "Start with a free Pittsburgh audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a straight plan for Pittsburgh marketing for contractors that fills your calendar." },
  ],
};
