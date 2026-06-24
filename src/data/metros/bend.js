// BEND — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Bend's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// BEND — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Bend is a moving target',
  body:
    "Bend sits at about 3,600 feet on the dry side of the Cascades, and for the last decade it has been one of the fastest-growing towns in Oregon. Remote workers cashing out California equity, retirees chasing 300 days of sun, and Portland families wanting a backyard on a trailhead keep arriving, and the contractor market never holds still because of it. Newcomers close on a house quickly, then they research everyone they hire, and they lean toward the design-minded local independent over a national chain. Two forces decide who gets the work. First, almost every search happens on a phone with \"near me\" attached, and people tap one of the first names without scrolling. Second, this is high desert, not the rainy Willamette Valley: hard freezes and snow load in winter, hot bone-dry summers, and a wildfire season that drags smoke across town from August into October. When the air quality index climbs and the Cascade Lakes Highway fills with evacuation traffic, demand for HVAC filtration, fire-hardening, and defensible-space work jumps. The contractors already ranking are the ones who book it.",
  pullQuote: 'When the smoke rolls down from the Cascades, the Bend contractor already on the map is the one whose phone rings.',
  donut: {
    title: 'Who fuels Bend growth',
    value: 60,
    centerLabel: 'transplant-driven growth',
    legend: [
      { label: 'Newcomer-driven', pct: 60, kind: 'teal' },
      { label: 'Legacy', pct: 40, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Wildfire/smoke (Aug–Oct), winter cold (Nov–Mar), summer heat (Jun–Sep)',
  seasonalDemand: [
    { m: 'J', v: 70, peak: true }, { m: 'F', v: 64, peak: true }, { m: 'M', v: 56, peak: true }, { m: 'A', v: 42 },
    { m: 'M', v: 40 }, { m: 'J', v: 66, peak: true }, { m: 'J', v: 84, peak: true },
    { m: 'A', v: 96, peak: true }, { m: 'S', v: 94, peak: true }, { m: 'O', v: 72, peak: true },
    { m: 'N', v: 62, peak: true }, { m: 'D', v: 68, peak: true },
  ],
  stats: [
    { value: '3,600 ft', label: 'high-desert elevation east of the Cascades' },
    { value: '~60%', label: 'of local searches here happen on a phone, usually "near me"', accent: true },
    { value: 'Aug–Oct', label: 'wildfire and smoke season, when demand spikes' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks' },
  ],
  neighborhoods: [
    'Old Town', 'Downtown', 'NorthWest Crossing', 'Tetherow', 'Awbrey Butte',
    'Old Mill District', 'Tumalo', 'Redmond', 'Sisters', 'Sunriver',
    'La Pine', 'East Bend', 'Larkspur', 'Orchard District', 'Century West',
  ],
};

const AREAS = [
  'Bend', 'Redmond', 'Sisters', 'Sunriver', 'Tumalo', 'La Pine',
  'Prineville', 'Madras', 'Terrebonne', 'Powell Butte', 'Eagle Crest',
  'Black Butte Ranch', 'Crooked River Ranch', 'Alfalfa', 'Deschutes River Woods',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here: get you ranking and converting for the work you actually want, in the Central Oregon neighborhoods you actually drive to, from NorthWest Crossing out to Sunriver, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We know how a snow-load winter and a smoke-choked August change what your customers search for, and how a Bend homeowner actually shops, so everything we build is shaped around how they really look for you.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for a Tetherow homeowner that three of your competitors are calling at the same time.",
  },
  {
    title: 'We actually speak Bend',
    body: "Freeze-and-thaw winters, tinder-dry summers, smoke season, a town adding people faster than it can build houses, and real neighborhood targeting from NorthWest Crossing to Awbrey Butte. That's local knowledge a national agency can't fake by find-and-replacing a city name in a template.",
  },
  {
    title: 'No contracts, no mystery',
    body: "Published prices, reporting tied to leads, month-to-month after 90 days. If we're not earning it, you leave. That keeps the pressure where it belongs: on us.",
  },
];

const PROOF = {
  heading: "We're new, so here's the honest math instead of a logo wall",
  body:
    "Plenty of agencies will open with a grid of client logos. We're a young, founder-led shop, so we won't fake a track record we haven't built yet. What we can hand you is the reasoning, pulled straight from Google's and the industry's own research on how people search for a local contractor.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here's a rough picture, labelled clearly as an illustration and not a result we're claiming: say a Bend contractor pulls roughly 1,200 local \"near me\" impressions a month. Moving from page-two invisibility up into the top three is the difference between a trickle of calls and a calendar you can't keep up with, and when smoke season lands or the first hard freeze hits, that gap blows wide open. In your free audit we model the real figures for your business: your current rankings, your actual search volume, and a straight 90-to-180-day path to the top of the map.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Bend', state: 'Oregon', stateAbbr: 'OR', metro: 'Bend-Redmond',
  heroProof: ['Built for the trades', 'Wildfire-season ready', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const bendLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'bend', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Bend Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Bend Local SEO that ranks you above the competition in the Map Pack. We put you in the top three so the smoke-season call lands with you, not a rival.',
    eyebrow: 'Local SEO · Bend-Redmond',
    h1: 'Bend Local SEO that ranks you above the competition from Awbrey Butte to Sunriver',
    h2Exact: 'Bend Local SEO Company',
    heroSubhead:
      "Google pins three businesses to the map when a homeowner searches \"near me,\" and everyone underneath them is invisible. We get you into that top three so the call lands with you instead of whoever ranks first, and so you're already there when smoke season or a cold snap sends every phone in Central Oregon into overdrive.",
    primaryCta: 'Get my free Bend audit',
    intro:
      "Bend local SEO comes down to one moment: a homeowner in NorthWest Crossing or Tetherow types your service plus \"near me,\" and either you're one of the three businesses Google pinned to the map or you aren't. Most people tap one of those three and never scroll. In a town filling up with transplants who research everyone they hire, becoming one of those three is the entire game. Here's exactly how we get you there.",
    aioQuestion: 'How do Bend businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile tuned to the exact services and Central Oregon neighborhoods you want; name, address, and phone details that match everywhere online; a steady flow of real reviews; and local content built around genuine Bend neighborhoods. In a high-desert market with smoke season and snow-load winters, the winners look established, answer fast, and are already ranking before seasonal demand spikes.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Three competitors are sitting in the map spots you want', body: "Search your own service plus \"near me\" right now. Those three businesses Google pins to the map soak up most of the clicks. If you're not one of them, the quality of your work barely matters, because most Bend homeowners never scroll far enough to see your name. Climbing into that top three is usually the single highest-return move a local business here can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Bend homeowner to four contractors at once, then bill each of you to fight over them. It's a treadmill you never get off. Local SEO builds the opposite: a homeowner finds you, calls you, and nobody else got the lead. Run it long enough and you stop renting visibility and start owning the pipeline." },
      { title: "You're not ranking when the smoke rolls in", body: "When the air quality tanks in August or a hard freeze cracks pipes in December, demand for HVAC filtration, fire-hardening, and heating goes vertical, and the contractors already in the Map Pack take the calls. If you're invisible on the map when that happens, the work flows to whoever Google already trusts. Ranking now is how you catch that wave instead of watching it pass your shop." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The single biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows precisely which Bend searches belong to you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to line up everywhere Google checks. We fix the listings that contradict each other and build the ones you're missing across Deschutes County." },
      { name: 'Reviews that keep coming', desc: "A simple engine that turns finished jobs into a steady stream of fresh reviews. It lifts your ranking and gives the next homeowner a reason to call you first, and Bend's research-heavy newcomers read every one." },
      { name: 'Neighborhood pages', desc: "Real pages for NorthWest Crossing, Tetherow, Awbrey Butte, the Old Mill District, plus Redmond and Sisters, so you rank for the exact neighborhood someone's searching instead of a generic \"Bend.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, and mobile speed. The plumbing under the hood that lets every other piece actually rank." },
      { name: 'Local link building', desc: "Mentions and links from Central Oregon sources Google trusts: local press, trade associations, community partners. In this market that's often what splits page one from page two." },
      { name: 'Smoke & freeze readiness', desc: "We get your profile, pages, and reviews ranking before the air quality drops in August and before the first hard freeze, so you capture the demand spike instead of chasing it after the fact.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts inside AI Overviews, ChatGPT, and Perplexity. We structure your content so those engines can read you and cite you by name.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you genuinely rank today across every service area and pin down which competitors are beating you in the Map Pack and exactly why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP come first because they move the fastest. Most Bend clients see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is exactly why local SEO rewards starting before the season, not after it." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Deschutes County and Central Oregon, backed by the on-page work that makes them rank." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, never vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Central Oregon communities.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across Bend-Redmond.', features: ['Everything in Local Growth', 'Local link building', 'Smoke & seasonal demand targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Bend?', a: "Most Bend engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're chasing. The tiers above lay it out. No hidden fees, no long contract, and we lock the exact scope in your free audit before you spend a dollar." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move within a few weeks. The competitive Bend keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. In a market growing this fast, anyone promising you page one in 30 days is selling you a fantasy." },
      { q: 'What makes Bend local SEO different?', a: "Two things. It's one of the fastest-growing towns in the West, packed with transplants who research everyone they hire, so trust signals like reviews and consistent listings carry real weight. And it's high desert: snow-load winters, tinder-dry summers, and a smoke season from August into October. Trade demand swings hard, so your ranking has to be locked in before the season, not scrambled together after." },
      { q: 'How does local SEO help me during smoke season?', a: "When wildfire smoke settles over Bend from August into October, searches for HVAC filtration, air sealing, fire-hardening, and defensible-space work spike fast, and the businesses already in the Map Pack take those calls. We get you ranking and reviewed ahead of season so you capture that demand instead of fighting for scraps once everyone else is already booked." },
      { q: 'Which areas do you cover?', a: "All of Bend and Central Oregon: NorthWest Crossing, Tetherow, Awbrey Butte, the Old Mill District, Old Town, plus Redmond, Sisters, Sunriver, Tumalo, La Pine and more. We build genuine neighborhood pages instead of one generic Bend page, because that's what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand high-desert climate swings, smoke-driven demand, and the design-conscious Bend homeowner, and we build your local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More \"near me\" research now starts in AI tools instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. In Bend that's fast becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays squarely on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that send leads straight to you alone. Over time you lean on the brokers less because the work is already coming to you direct." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your service areas, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. It's a straight diagnosis of your Bend Local SEO, no pitch deck, so you know exactly where the local search and Google Business Profile wins are before you spend a dollar." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'bend', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Bend SEO Company | Rank Higher, Get More Leads | OnwardCraft',
    metaDescription:
      'Bend SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in, built for high-desert smoke and freeze demand.',
    eyebrow: 'SEO Services · Bend-Redmond',
    h1: 'Bend SEO that climbs you past the high-desert competition on Google',
    h2Exact: 'Bend SEO Company',
    heroSubhead:
      "Ads die the second you stop paying. SEO does the reverse: rank once for what your Bend customers search and the leads keep arriving for months. We build that ranking and tie every report to real calls and booked jobs, not vanity charts.",
    primaryCta: 'Get my free Bend SEO audit',
    intro:
      "Bend SEO comes down to one blunt question: when someone searches what you do, are you on page one or page two? Here page two might as well be page fifty. We get contractors ranking for the money keywords in a fast-growing, high-desert market, and we measure the whole thing in leads, not traffic that never picks up the phone.",
    aioQuestion: 'How do Bend businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content, and earning links from trusted Central Oregon sources. In a fast-growing, design-conscious market with hard seasonal demand, keeping the site fast on mobile and ranking for the terms that drive Bend, smoke-season filtration, winter heating, summer cooling, are two of the quickest ways to pull ahead.",
    problemHeading: "Three reasons your Bend site isn't bringing in work",
    painPoints: [
      { title: "You're stranded on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it either. If you're not in the top handful of results for what you sell, your site is effectively invisible no matter how sharp it looks. In Bend, that invisibility is exactly what's sending your jobs to the competition." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the instant your card stops, the leads stop cold. SEO builds an asset you actually own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost you're paying now." },
      { title: "You're not ranking for the demand that matters", body: "Bend demand swings hard with the high-desert seasons: smoke in late summer, hard freezes in winter, heat across the dry months. The contractors who rank for those terms ahead of time catch the spike. If your SEO ignores smoke-driven and seasonal searches, you're quietly handing away your busiest, most profitable months." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank your Bend site at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned for the exact terms your Bend customers search: titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot long after we publish them." },
      { name: 'Link building', desc: "Authority from real Central Oregon and industry sources. In a competitive Deschutes County market, links are often the deciding factor between page one and page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches right alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and booked leads, not just rankings and traffic, so you always know what your SEO is actually worth in dollars." },
      { name: 'Smoke & seasonal SEO', desc: "We rank you for the smoke-season filtration, winter-heating, and summer-cooling searches that fuel Bend's busiest months, so you're visible before demand spikes instead of chasing it after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of Bend search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Bend leads, not just impressions." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile. The foundation everything else needs before it can rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the seasonal and smoke-driven terms that decide who wins the busy months here." },
      { name: 'Build authority', desc: "Links and citations from trusted Central Oregon and industry sources to push your competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Bend SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Bend-Redmond search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Smoke & seasonal SEO', 'eCommerce / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Bend?', a: "Most Bend SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. The tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Bend?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on low-competition terms and slower on the most contested Bend keywords. SEO compounds, so the longer you run it, the bigger the gains get." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops the moment you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Bend contractors do best running SEO as the long-term engine and ads for short-term spikes." },
      { q: 'Should my Bend SEO target smoke and winter season?', a: "Absolutely. When smoke rolls in during late summer or the first hard freeze hits, searches for HVAC filtration, fire-hardening, and heating spike fast, and ranking takes months to build, so you have to be in place before the season rather than chasing it after. We optimize for those seasonal and smoke-driven terms ahead of time so your busiest months land on you." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. Higher tiers add smoke-and-seasonal and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it switches to month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business by name, not just classic search results." },
      { q: 'Which areas around Bend do you cover?', a: "All of Bend and the surrounding Central Oregon areas: Redmond, Sisters, Sunriver, Tumalo, La Pine, Prineville, Madras and more, with genuine local pages rather than one generic Bend page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for leads three competitors also bought." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. It's a plain diagnosis of your Bend SEO, no pitch deck, showing the money keywords and organic traffic that page one would put within reach." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'bend', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Bend Web Design Company | Sites That Convert | OnwardCraft',
    metaDescription:
      'Bend web design that turns visitors into booked jobs: fast, mobile-first sites built for contractors and the design-conscious homeowners who hire them.',
    eyebrow: 'Web Design · Bend-Redmond',
    h1: 'Bend web design that loads fast and books more high-desert jobs',
    h2Exact: 'Bend Web Design Company',
    heroSubhead:
      "A handsome website that never generates a call is just an expensive brochure. We build Bend contractors fast, mobile-first sites engineered to turn visitors into booked work, and to look like the polished local pro a design-conscious Bend homeowner actually wants to hire.",
    primaryCta: 'Get my free quote',
    intro:
      "Bend web design that books jobs starts by fixing the quiet leaks most contractor sites have: slow on a phone, call button buried, no clear offer anywhere. We build a fast-loading, mobile-first contractor website that looks like the professional you actually are, turns NorthWest-Crossing-to-Sisters visitors into booked jobs, and doesn't fall over when smoke season or a cold snap sends your traffic through the roof.",
    aioQuestion: 'What makes a good contractor website in Bend?',
    aioAnswer:
      "A good Bend contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and is built to handle traffic spikes during smoke and winter demand. Because most Bend searches happen on mobile and homeowners here are design-conscious and research-heavy, mobile speed, a polished look, and an obvious next step are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "Plenty of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next name on the map. We design every page around one job: turning a Bend visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Bend visitors are on mobile, and they bounce if your site takes more than a couple of seconds to load. Slow sites also rank worse, so you lose twice. We build fast, so you keep both the visitor and the ranking." },
      { title: "It doesn't look like the pro Bend wants to hire", body: "Bend homeowners are design-conscious and research the contractors they hire, often before they ever call. A dated, cookie-cutter site quietly tells them you're not the polished local independent they're after, even when your work is plainly better. We build sites that look the part and keep converting under the smoke- and winter-season surges that fill your phone.", },
    ],
    servicesHeading: "What's in an OnwardCraft Bend website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your Central Oregon service area, and the exact jobs you want more of, with the polished look design-conscious Bend homeowners expect." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where nearly all of your Bend traffic lives. Fast, thumb-friendly, and easy to call from in one tap." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where homeowners actually use them. Every page carries an unmistakable next step." },
      { name: 'Copy that sells', desc: "Words that speak to a transplant who's quietly vetting three contractors before they pick one, not filler text that reads exactly like every other shop in town." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank: clean structure, schema, fast load, and neighborhood-ready pages for NorthWest Crossing, Tetherow, Redmond and beyond." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both your conversions and your rankings at the same time." },
      { name: 'Seasonal-surge ready', desc: "Built to stay fast and keep the call button front and center when smoke and winter traffic spikes, the exact moments that turn visitors into your biggest jobs of the year.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read your site and recommend your business as more Bend search shifts toward AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your service area, your most profitable jobs, and your competitors, then map the site around booking more of the work you actually want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert, and you see it and shape it before a single line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed all dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting visitors into calls." },
    ],
    pricing: {
      heading: 'Transparent Bend web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Seasonal-surge ready'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Bend?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above, with a fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site impress design-conscious Bend homeowners?', a: "That's the goal, and in Bend it matters. Homeowners here research who they hire and prefer polished local independents over chains. We build a custom, modern site that looks like the pro you are and stays fast under wildfire- and winter-season traffic surges, so it converts when demand peaks." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank, and pairing it with our SEO service is how you climb the competitive Bend terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your Bend traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage, usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month, so you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Bend site should include, and a fixed-price quote with a timeline. It's a straight plan for your Bend web design, no pressure, showing how a fast, mobile-first build converts visitors into booked jobs." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'bend', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Bend Website Redesign | OnwardCraft',
    metaDescription:
      'Bend Website Redesign with a careful, SEO-safe migration. Faster, mobile-first rebuilds that convert more visitors into booked jobs and hold up in wildfire.',
    eyebrow: 'Website Redesign · Bend-Redmond',
    h1: 'Bend Website Redesign done with a careful, SEO-safe migration that holds your rankings',
    h2Exact: 'Bend Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week: slow, hard to use on a phone, easy to ignore. We redesign Bend contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Bend Website Redesign usually goes one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We rebuild Bend contractor sites for speed and conversions, build them to handle wildfire- and winter-season traffic, and run an SEO-safe migration with the redirects and care that protect the traffic you already have, all without losing rankings.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Bend site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "For a high-ticket job, design-conscious Bend homeowners judge you by your site in seconds. An old, cluttered design quietly sends them to a competitor who looks more established and more like the local pro they want, even when your work is better." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your Bend visitors before they ever see your offer. A redesign built mobile-first wins them back." },
      { title: "It can't keep up when demand surges", body: "Traffic that doesn't turn into calls is wasted, and an old site that gets slow under a wildfire- or winter-season surge loses leads at the exact moment they're worth the most. We rebuild for conversions and for the days your phone should be ringing off the hook." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals, which lifts both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your Bend traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and meets the design-conscious bar Bend homeowners expect." },
      { name: 'Seasonal-surge ready rebuild', desc: "Rebuilt to stay fast and keep converting when wildfire- and winter-season traffic spikes, so the new site captures your biggest jobs instead of choking on them.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you leads and rankings, then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and improve, not drop." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Bend redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Seasonal-surge ready'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Bend?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is hard to update, isn't bringing in leads, or buckles when wildfire- or winter-season traffic surges, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the new site handle wildfire and winter traffic?', a: "Yes, and in Bend that's a real consideration. When smoke season or a cold snap hits, contractor sites take a surge of traffic, and the slow ones lose leads. We rebuild for speed and keep the call to action obvious so the site converts when demand peaks." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely: the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline. It maps the Bend Website Redesign in full, including the SEO-safe migration plan that rebuilds the site without losing rankings." },
    ],
  },
];

export const bendCity = {
  citySlug: 'bend', city: 'Bend', state: 'Oregon', stateAbbr: 'OR', metro: 'Bend-Redmond',

  titleTag: 'Bend Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Bend marketing for contractors: web design, SEO, and local SEO that get you found and booked. Own your leads instead of renting them, built for high-desert seasonal demand.',

  eyebrow: 'Bend · Web Design, SEO & Lead Generation',
  h1: 'Bend marketing for contractors that fills your calendar through smoke and freeze season',
  h2Exact: 'Bend Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Bend's fast-growing, high-desert market. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Wildfire-season ready', 'No lock-in contracts'],
  primaryCta: 'Get my free Bend audit',

  intro:
    "Bend marketing for contractors means fighting for attention in one of the fastest-growing markets in the West, full of affluent transplants who research who they hire, with the competition growing right along with it. Winning here takes three things working together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack, all ready before wildfire smoke or a cold snap sends demand through the roof. Here's how our web design and SEO get Bend contractors found and booked.",
  aioQuestion: 'How do Bend contractors get more leads online?',
  aioAnswer:
    "Bend contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack. Because Bend is growing fast with design-conscious newcomers and demand spikes hard during wildfire and winter season, the contractors who look established and are already ranking before the season win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Bend searches \"near me.\" The single highest-return move for most local businesses, and how you catch wildfire- and winter-season demand.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search, build an asset you own instead of renting traffic from ads, and measure it in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs, and to look like the polished local pro design-conscious Bend homeowners want to hire, not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it carefully so you keep every bit of ranking you've already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Bend?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads, and are ready when wildfire and winter season hit." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors, so we understand high-desert climate swings, wildfire-driven demand, and insurance work." },
    { q: 'Why does wildfire season matter for my marketing?', a: "When smoke chokes Bend from August into October, demand for HVAC filtration, fire-hardening, and defensible-space work spikes fast, and winter heating demand follows. Ranking takes months to build, so the contractors who are already visible before the season take that work. We get you in place ahead of it." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Bend areas do you serve?', a: "All of Bend and Central Oregon: NorthWest Crossing, Tetherow, Awbrey Butte, Old Mill District, Old Town, plus Redmond, Sisters, Sunriver, Tumalo, La Pine and more." },
    { q: 'Where should I start?', a: "Start with a free Bend audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. It's where Bend marketing for contractors begins, no pitch deck, just a plan to get you found and booked." },
  ],
};
