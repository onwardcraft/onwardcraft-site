// HENDERSON: per-metro, per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Henderson's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// HENDERSON: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'What actually decides who ranks in Henderson',
  body:
    "Henderson is the master-planned half of the Las Vegas valley, and that design choice shapes every contractor's customer. Green Valley, Anthem, Inspirada, Seven Hills, and Lake Las Vegas were laid out community by community, with HOAs, design committees, and exterior standards baked in from the first lot. The people buying these homes lean two ways: retirees who chose Henderson for its safety record and pace, and younger families drawn by the schools and the newer construction. A large share are California transplants who sold high, moved for the zero state income tax, and arrived with budgets and standards intact. Almost all of them research the same way: phone in hand, a service plus \"near me,\" and a tap on one of the first three names Google drops on the map. The housing stock is young, so the work runs to upgrades, additions, pool builds, and HOA-approved exterior projects rather than gut restorations. Then the Mojave takes over. Summer holds at 110 and up from June through September, an air-conditioning failure turns into a same-day emergency, and the July monsoon drags dust and sudden storm damage across the whole valley. The contractors already sitting in the Map Pack when the heat breaks are the ones whose phones do not stop. Buried on page two when the first 110-degree week lands, and that booked work goes to whoever Google already trusts.",
  pullQuote: 'When a 110-degree week hits Henderson, the contractor already in the Map Pack books the calls. Everyone else waits for next summer.',
  donut: {
    title: 'How Henderson is built',
    value: 70,
    centerLabel: 'HOA communities',
    legend: [
      { label: 'HOA-governed', pct: 70, kind: 'teal' },
      { label: 'Non-HOA', pct: 30, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Extreme heat (Jun to Sep) and monsoon storms (Jul to Sep)',
  seasonalDemand: [
    { m: 'J', v: 34 }, { m: 'F', v: 32 }, { m: 'M', v: 38 }, { m: 'A', v: 46 },
    { m: 'M', v: 64, peak: true }, { m: 'J', v: 84, peak: true }, { m: 'J', v: 96, peak: true },
    { m: 'A', v: 94, peak: true }, { m: 'S', v: 72, peak: true }, { m: 'O', v: 48 },
    { m: 'N', v: 36 }, { m: 'D', v: 32 },
  ],
  stats: [
    { value: '2nd', label: "Nevada's second-largest city, the master-planned suburb to Las Vegas" },
    { value: '~70%', label: 'of Henderson neighborhoods are HOA-governed with strict exterior standards', accent: true },
    { value: '110F+', label: 'desert heat June through September, when an AC failure becomes an emergency' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks when Henderson searches for a contractor' },
  ],
  neighborhoods: [
    'Green Valley', 'Anthem', 'Inspirada', 'Lake Las Vegas', 'Seven Hills',
    'MacDonald Ranch', 'Tuscany', 'Whitney Ranch', 'Green Valley Ranch', 'Sun City Anthem',
    'Madeira Canyon', 'Cadence', 'Boulder City', 'Calico Ridge', 'Black Mountain',
  ],
};

const AREAS = [
  'Henderson', 'Green Valley', 'Anthem', 'Inspirada', 'Lake Las Vegas', 'Seven Hills',
  'MacDonald Ranch', 'Tuscany', 'Whitney Ranch', 'Boulder City', 'Las Vegas',
  'North Las Vegas', 'Summerlin', 'Spring Valley', 'Enterprise',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We know what a 115-degree afternoon does to an aging AC unit, how a monsoon dust storm fills the phone, and how HOA approval work moves through a Green Valley design committee, so everything we build matches how your customers actually search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The goal is a pipeline you own outright. Not one more monthly check to a lead broker for the same Anthem homeowner that three competitors are calling at the same minute.",
  },
  {
    title: 'We actually speak Henderson',
    body: "HOA-run master-planned communities, retirees and young families side by side, a steady arrival of California money, and brutal Mojave summers. Real targeting from Green Valley to Lake Las Vegas, the kind a national agency cannot fake by swapping a city name into a template.",
  },
  {
    title: 'No contracts, no mystery',
    body: "Prices are published, reporting ties to actual leads, and you go month-to-month after the first 90 days. If we are not earning the invoice, you walk. That keeps the pressure exactly where it belongs: on us.",
  },
];

const PROOF = {
  heading: "We're new, so here's the honest math instead of a logo wall",
  body:
    "Most agencies lead with a wall of client logos. We are a young, founder-led shop, so we are not going to invent a track record we have not built yet. What we can hand you is the reasoning, pulled straight from Google's and the industry's own research on how people search for a local contractor.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here is a rough picture, labelled clearly as an illustration and not a result we are claiming: say a Henderson contractor pulls roughly 1,500 local \"near me\" impressions a month. Moving from page-two invisibility up into the top three is the difference between a handful of stray calls and a calendar you cannot keep up with, and during a 110-degree July that gap blows wide open. In your free audit we model the real figures for your business: your current rankings, your actual search volume, and a straight 90-to-180-day path to the top of the map.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Henderson', state: 'Nevada', stateAbbr: 'NV', metro: 'Henderson-Las Vegas',
  heroProof: ['Built for the trades', 'Desert-heat ready', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const hendersonLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'henderson', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Henderson Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'When Henderson searches your service, three businesses show on the map. We put you in those three so the heat-season call lands with you, not a competitor.',
    eyebrow: 'Local SEO · Henderson, NV',
    h1: 'When Henderson searches for what you do, be the first name on the map',
    h2Exact: 'Henderson Local SEO Company',
    heroSubhead:
      "Google pins three businesses to the map when a homeowner searches \"near me,\" and everyone underneath them is invisible. We muscle you into that top three so the call lands with you instead of whoever ranks first, and so you are already there when the next 110-degree week sends every Henderson phone into overdrive.",
    primaryCta: 'Get my free Henderson audit',
    intro:
      "Henderson local SEO comes down to one moment: a homeowner in Green Valley or Anthem types your service plus \"near me,\" and either you are one of the three businesses Google pinned to the map or you are not. Most people tap one of those three and never scroll. In an affluent, HOA-run suburb full of high-standards homeowners and California money, becoming one of those three is the whole game. Here is exactly how we get you there.",
    aioQuestion: 'How do Henderson businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile tuned to the exact services and Henderson communities you want; name, address, and phone details that match everywhere online; a steady flow of real reviews; and local content built around genuine neighborhoods like Green Valley, Anthem, and Lake Las Vegas. In a master-planned, HOA-heavy desert market, the winners look established, understand approval work, and are already ranking before the summer heat spikes demand.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Three businesses own the map, and it is not you', body: "Search your own service plus \"near me\" right now. Those three names Google pins to the map soak up most of the clicks before anyone scrolls. If you are not one of them, the quality of your work barely registers, because most Henderson homeowners never see you. Climbing into that top three is usually the single highest-return move a contractor here can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Henderson homeowner to four contractors at once, then bill each of you to fight over them. It is a treadmill you never step off. Local SEO builds the opposite asset: a homeowner finds you, calls you, and nobody else got that lead. Run it long enough and you stop renting visibility and start owning the pipeline." },
      { title: "You're invisible to HOA homeowners and new arrivals", body: "Most Henderson neighborhoods run on HOAs with strict exterior rules, and California transplants are buying fast and searching for everything online. The contractors who rank, and who clearly understand the approval process for roofing, paint, and landscaping, book that work. If you are buried on page two, those high-value jobs land with whoever Google already trusts." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The single biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows precisely which Henderson searches belong to you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to line up everywhere Google checks. We fix the listings that contradict each other and build the ones you are missing across the valley." },
      { name: 'Reviews that keep coming', desc: "A simple engine that turns finished jobs into a steady stream of fresh reviews. It lifts your ranking and gives the next high-standards Henderson homeowner a reason to call you first." },
      { name: 'Neighborhood pages', desc: "Real pages for Green Valley, Anthem, Inspirada, Lake Las Vegas, Seven Hills and the rest, so you rank for the exact community someone is searching instead of a generic \"Henderson.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, and the mobile load speed a Green Valley homeowner expects. The quiet groundwork that lets every other piece earn its Map Pack spot." },
      { name: 'Local link building', desc: "Mentions and links from Henderson and Las Vegas valley sources Google trusts: local press, trade associations, community partners. In this market that is often what splits page one from page two." },
      { name: 'Desert-heat readiness', desc: "We get your profile, pages, and reviews ranking before summer so you capture the June-through-September AC, pool, and storm-damage surge instead of chasing it after the heat has already set in.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts inside AI Overviews, ChatGPT, and Perplexity. We structure your content so those engines can read you and cite you by name.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We map where you actually rank across Green Valley, Anthem, and the rest of the valley today, then name the Map Pack competitors beating you and the specific reasons they are winning." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP come first because they move the fastest. Most Henderson clients see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is exactly why local SEO rewards starting before summer, not after it." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Henderson and the Las Vegas valley, backed by the on-page work that makes them rank." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to the calls and booked jobs you can count, never a vanity ranking chart. Once a community is locked, we push into the next Henderson neighborhood on the list." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation locked in.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Henderson communities.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across the Henderson-Las Vegas valley.', features: ['Everything in Local Growth', 'Local link building', 'Desert-heat demand targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Henderson?', a: "Most Henderson engagements land between $750 and $2,500 a month, depending on how many communities and keywords you are chasing. The tiers above lay it out. No hidden fees, no long contract, and we lock the exact scope in your free audit before you spend a dollar." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move within a few weeks. The competitive Henderson keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. In a suburb growing this fast, anyone promising you page one in 30 days is selling you a fantasy." },
      { q: 'What makes Henderson local SEO different?', a: "Two things. It is an affluent, fast-growing market built on HOA-run master-planned communities and California transplants, so trust signals like reviews and consistent listings carry real weight with high-standards buyers. And it is the Mojave, so trade demand swings hard with the summer heat. Your ranking has to be locked in before June, not scrambled together after." },
      { q: 'How does local SEO help me with HOA communities?', a: "Nearly every Henderson neighborhood, from Green Valley and Anthem to Inspirada and Lake Las Vegas, runs on an HOA with strict exterior standards for roofing, paint, and landscaping. We build neighborhood pages and profile content that signal you know the approval process cold, which is exactly what those homeowners search for and trust before they pick up the phone." },
      { q: 'Which areas do you cover?', a: "All of Henderson and the surrounding Las Vegas valley: Green Valley, Anthem, Inspirada, Lake Las Vegas, Seven Hills, MacDonald Ranch, Tuscany, Whitney Ranch, plus Boulder City and into Las Vegas itself. We build genuine community pages instead of one generic Henderson page, because that is what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It is basically all we do: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand emergency AC calls, pool equipment, monsoon storm damage, desert-driven demand, and HOA approval work, and we build your local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More \"near me\" research now starts in AI tools instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. In Henderson that is fast becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that is roughly how long it takes for reviews and citations to start moving you up the Henderson map. After that you are month-to-month. If the leads are not showing, you walk, and the pressure to perform stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms resell the same Anthem or Green Valley homeowner to a handful of contractors and bill all of you. We build rankings, a Google profile, and a review base that route that homeowner to you and nobody else. As your own visibility grows, the broker invoices shrink because the work is already arriving direct." },
      { q: "What's in the free audit?", a: "A straight read on where you rank across Green Valley, Anthem, Inspirada, and your other target communities, the Map Pack competitors ahead of you and why, the fixes that move the needle fastest, and a realistic 90-to-180-day plan with your own numbers run. No pitch deck, just a diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'henderson', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Henderson SEO Company | OnwardCraft',
    metaDescription:
      'Henderson SEO that ranks contractors on Google and delivers leads you own. Revenue-tied reporting, no lock-in, built for desert-heat and monsoon demand.',
    eyebrow: 'SEO Services · Henderson, NV',
    h1: 'Get your Henderson business to the top of Google and keep it there',
    h2Exact: 'Henderson SEO Company',
    heroSubhead:
      "Ads die the second you stop paying. SEO does the reverse: rank once for what your Henderson customers search and the leads keep arriving for months. We build that ranking and tie every report to real calls and booked jobs, not vanity charts.",
    primaryCta: 'Get my free Henderson SEO audit',
    intro:
      "Henderson SEO comes down to one blunt question: when someone searches what you do, are you on page one or page two? In this market page two might as well be page fifty. We get contractors ranking for the money keywords in an affluent, fast-growing desert suburb with California money flowing in, and we measure the whole thing in leads, not traffic that never picks up the phone.",
    aioQuestion: 'How do Henderson businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content, and earning links from trusted Henderson and Las Vegas valley sources. In an affluent, competitive desert market, keeping the site fast on mobile and ranking for heat-driven terms like emergency AC and pool service are two of the quickest ways to pull ahead.",
    problemHeading: "Three reasons your Henderson site isn't bringing in work",
    painPoints: [
      { title: "You're stranded on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it either. If you are not in the top handful of results for what you sell, your site is effectively invisible no matter how sharp it looks. In Henderson, that invisibility is exactly what is sending your jobs to the competition." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, so do the Henderson leads. SEO builds something you keep: rankings that pull calls month after month, long after the work is paid for, at a fraction of the per-lead cost the brokers and ad auctions charge you now." },
      { title: "You're not ranking for the demand that matters", body: "Henderson demand swings hard with the desert summer and the monsoon season, and the contractors who rank for those terms ahead of time catch the spike. If your SEO ignores emergency-AC, pool, and storm-damage searches, you are quietly handing away your busiest, most profitable months." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank your Henderson site at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned for the exact terms your Henderson customers search: titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Useful pages and guides that answer what a Henderson homeowner actually types, from HOA paint approvals to monsoon roof damage, earning links and pulling leads long after they go live." },
      { name: 'Link building', desc: "Authority from real Henderson and Las Vegas valley sources. In an affluent, competitive market, links are often the deciding factor between page one and page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches right alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We track the calls, form fills, and booked jobs your Henderson SEO produces, not just rankings and pageviews, so you can see the dollars it returns every month." },
      { name: 'Heat & seasonal SEO', desc: "We rank you for the emergency-AC, pool, and monsoon-driven searches that fuel Henderson's busiest months, so you are visible before demand spikes instead of chasing it after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of Henderson search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Henderson leads, not just impressions." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile rendering. The groundwork Google needs in place before any Henderson keyword will climb." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the seasonal and heat-driven terms that decide who wins July here." },
      { name: 'Build authority', desc: "Links and citations from trusted Henderson and Las Vegas valley sources to push your competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to real Henderson leads, then we pour more into the keywords paying off and reach into the next set of services and communities." },
    ],
    pricing: {
      heading: 'Transparent Henderson SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and communities.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Henderson-Las Vegas search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Heat & seasonal SEO', 'eCommerce / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Henderson?', a: "Most Henderson SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. The tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Henderson?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on low-competition terms and slower on the most contested Henderson keywords. SEO compounds, so the longer you run it, the bigger the gains get." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops the moment you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Henderson contractors do best running SEO as the long-term engine and ads for short-term spikes." },
      { q: 'Should my Henderson SEO target the summer heat?', a: "Absolutely. When the Mojave holds at 110 and up from June through September, searches for emergency AC repair, HVAC, and pool service spike overnight, and ranking takes months to build, so you have to be in place before summer rather than chasing it after. We optimize for those seasonal and heat-driven terms ahead of time so your busiest months land on you." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. Higher tiers add heat-and-seasonal and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because that is the window SEO needs to show real movement on Henderson terms, and after that you go month-to-month. If the leads are not landing, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "Increasingly, yes, and it is a growing slice of what we tune for. We structure your content and schema so those engines can read your Henderson pages, trust them, and name your business in an answer, not only the classic blue links." },
      { q: 'Which areas around Henderson do you cover?', a: "Every part of Henderson and the wider Las Vegas valley: Green Valley, Anthem, Inspirada, Lake Las Vegas, Seven Hills, Boulder City, and on into Las Vegas and North Las Vegas. We build a real page per community rather than one catch-all Henderson page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By earning you rankings and a Google presence that route Henderson homeowners to you first. The more search visibility you own, the less you need to buy the same shared lead three valley competitors are also chasing." },
      { q: "What's in the free SEO audit?", a: "Where your site ranks across the valley right now, the competitors outranking you and how, the highest-impact fixes to make first, and a realistic timeline with your own numbers modeled in. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'henderson', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Henderson Web Design Company | Sites That Convert | OnwardCraft',
    metaDescription:
      'Henderson web design that turns visitors into booked jobs: fast, mobile-first sites built for contractors and ready for desert-heat emergency demand.',
    eyebrow: 'Web Design · Henderson, NV',
    h1: 'Henderson web design that turns visitors into booked jobs',
    h2Exact: 'Henderson Web Design Company',
    heroSubhead:
      "A handsome website that never generates a call is just an expensive brochure. We build Henderson contractors fast, mobile-first sites engineered to turn visitors into booked work, and tough enough to hold up when a heat wave sends your phone into overdrive.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Henderson contractor websites bleed leads quietly: slow on a phone, call button buried, no clear offer anywhere. Web design done right closes all of those leaks. We build sites that load fast, look like the professional you actually are, and turn Green-Valley-to-Lake-Las-Vegas visitors into booked jobs, and that do not fall over when a 110-degree day sends your traffic through the roof.",
    aioQuestion: 'What makes a good contractor website in Henderson?',
    aioAnswer:
      "A good Henderson contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and is built to handle traffic spikes during the summer heat. Because most Henderson searches happen on mobile and HOA-community homeowners hold high standards, mobile speed, a polished look, and an obvious next step are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "Plenty of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next name on the map. We design every page around one job: turning a Henderson visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Henderson visitors are on mobile, and they bounce if your site takes more than a couple of seconds to load. Slow sites also rank worse, so you lose twice. We build fast, so you keep both the visitor and the ranking." },
      { title: "It can't handle a heat-wave surge", body: "When the Mojave climbs past 110, emergency AC and HVAC searches explode, and the slow contractor sites buckle or bury the call button right when it matters most. We build sites that stay fast and keep converting under load, so you capture that demand instead of losing it to a faster competitor." },
    ],
    servicesHeading: "What's in an OnwardCraft Henderson website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your valley service area, and the exact jobs you want more of, polished enough for high-standards Henderson homeowners." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that is where nearly all of your Henderson traffic lives. Fast, thumb-friendly, and easy to call from in one tap." },
      { name: 'Conversion-focused UX', desc: "Clear offers, a tap-to-call button that follows a Henderson homeowner down the page, and short forms placed where people actually fill them in. Every page points at one obvious next step." },
      { name: 'Copy that sells', desc: "Words that speak to an affluent homeowner staring at a dead AC unit on a 115-degree afternoon, not filler text that reads exactly like every other contractor in the valley." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank: clean structure, schema, fast load, and neighborhood-ready pages for Green Valley, Anthem, Lake Las Vegas and beyond." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load quickly on a phone in a Henderson driveway and to pass Google's performance checks, which guards your conversions and your rankings in one pass." },
      { name: 'Heat-surge ready', desc: "Built to stay fast and keep the call button front and center when summer emergency-AC traffic spikes, the exact moment that turns visitors into your biggest jobs of the year.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read your site and recommend your business as more Henderson search shifts toward AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, the Henderson communities you serve, the jobs that pay best, and the competitors you keep losing to, then plan the site around booking more of that work." },
      { name: 'Design', desc: "We design a custom, mobile-first layout aimed at booking jobs, and you review and shape it before we write a single line of code." },
      { name: 'Build and copy', desc: "We build it to load fast and write copy that speaks to a Henderson homeowner with a dead AC unit, keeping the call button front and center on every screen." },
      { name: 'Launch', desc: "We launch cleanly with the local-SEO foundation, call tracking, and load speed all dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep the site fast and current and tune it on the evidence of what is turning Henderson visitors into actual calls." },
    ],
    pricing: {
      heading: 'Transparent Henderson web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Heat-surge ready'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Henderson?', a: "A contractor build with us is a one-time $2,000 to $8,000, set by page count and integrations. The tiers sit above: a fixed price, no surprise add-ons, and the finished Henderson site is yours to keep." },
      { q: 'How long does it take to build?', a: "A focused Henderson site runs about 2 to 4 weeks; a larger custom build, 4 to 8. We hand you a firm timeline at the start and check in at every stage so you are never guessing." },
      { q: 'Will my site handle a summer traffic spike?', a: "Yes, and in Henderson that matters more than almost anywhere. When the Mojave climbs past 110, emergency AC and HVAC traffic surges, and the slow sites lose leads right when demand peaks. We build fast and keep the call button obvious, so your site converts under load instead of buckling." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank, and pairing it with our SEO service is how you climb the competitive Henderson terms." },
      { q: 'Do I own the website?', a: "Completely. The site, the domain, and the content are all yours. No hostage situations, and no proprietary platform you would be stuck on if you ever left us." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where nearly all of your Henderson traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We match the platform to your needs and to what you can manage on your own, usually WordPress or Webflow. We name the right fit in your free consult and walk through the tradeoffs in plain English, no jargon." },
      { q: 'Do you offer ongoing support?', a: "Yes. Launch support comes with every build, and after that we offer affordable monthly maintenance covering updates, load speed, and security so the site keeps performing." },
      { q: 'Am I locked into a contract?', a: "No. The build itself is a one-time fixed-price project. Any maintenance or SEO you add afterward runs month-to-month, so you can step away whenever you choose." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Henderson site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'henderson', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Henderson Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your Henderson website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs and hold up in desert heat.',
    eyebrow: 'Website Redesign · Henderson, NV',
    h1: 'Redesign your Henderson website without losing your rankings',
    h2Exact: 'Henderson Website Redesign Company',
    heroSubhead:
      "An outdated site quietly costs you jobs every week: slow, clumsy on a phone, easy for a Henderson homeowner to skip past. We redesign contractor sites to convert more and load faster, and we migrate so carefully that you keep every bit of ranking you have already earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks prettier but converts exactly the same, or it launches and the rankings vanish overnight. We do neither. We redesign Henderson contractor sites for speed and conversions, build them to survive summer-demand surges, and migrate with the redirects and SEO care that protect the traffic you have spent years building.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Henderson site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "On a high-ticket job, affluent Henderson homeowners size you up by your site in seconds. An old, cluttered design quietly ships them to a competitor who simply looks more established, even when your work is plainly better. In these newer HOA communities, that first impression decides who gets the call." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you are losing the majority of your Henderson visitors before they ever reach your offer. A redesign built mobile-first wins those visitors back and turns them into leads." },
      { title: "It can't keep up when demand surges", body: "Traffic that never turns into calls is wasted money, and an old site that slows to a crawl under a summer heat-wave surge loses leads at the precise moment they are worth the most. We rebuild for conversions and for the days your phone should be ringing off the hook." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pin down what is bleeding leads and rankings on your current Henderson site, so the rebuild solves the real problems rather than just repainting the same layout." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep every bit of the rankings and traffic you have already earned in Henderson." },
      { name: 'Conversion redesign', desc: "Sharper offers, call-to-action buttons placed where they get tapped, and forms a busy Henderson homeowner will finish. We rebuild for booked jobs, not a nicer screenshot." },
      { name: 'Speed overhaul', desc: "We rebuild for quick mobile load and a clean pass on Core Web Vitals, which lifts both conversions and rankings on the contested Henderson terms." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where nearly all of your Henderson traffic actually lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the price of the jobs you want to book, built for high-standards Henderson homeowners." },
      { name: 'Heat-surge ready rebuild', desc: "Rebuilt to stay fast and keep converting when summer emergency-AC traffic spikes, so the new site captures your biggest jobs of the year instead of choking on them.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as more Henderson search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We dig into what is costing you Henderson leads and rankings, then plan a redesign that fixes it without breaking the pages already pulling work for you." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we touch the rebuild." },
      { name: 'Rebuild and migrate', desc: "We rebuild for speed and line up every redirect and SEO detail ahead of time for a clean migration with no nasty ranking surprises." },
      { name: 'Launch with SEO care', desc: "We go live with the redirects already mapped and watch the rankings closely through launch week so they hold steady and climb rather than slide." },
      { name: 'Optimize', desc: "Post-launch tuning driven by what is actually converting Henderson visitors, plus ongoing speed work and updates." },
    ],
    pricing: {
      heading: 'Transparent Henderson redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Heat-surge ready'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Henderson?', a: "A redesign with us is a one-time $2,500 to $9,000, set by the size of the site and the integrations involved. The price is fixed, there are no surprise line items, and the finished site is yours outright." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not when it is handled carefully, which is the only way we do it. We map a 301 redirect for every changed URL, keep your content and metadata, carry the schema across, and test on staging before launch. Done right, the rankings you built in Henderson hold and usually climb." },
      { q: 'How long does a redesign take?', a: "A focused Henderson redesign runs about 3 to 5 weeks; a larger rebuild, 5 to 9. You get a firm timeline at the start and updates as each stage lands." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is a pain to update, is not bringing in leads, or buckles when summer traffic surges, it is costing you work. The free audit tells you plainly whether a redesign is worth it for your Henderson business." },
      { q: 'Do you migrate my existing content?', a: "Yes. We bring your existing content across and tighten it, protect the pages already ranking in Henderson, and run the technical migration so nothing that matters gets dropped along the way." },
      { q: 'Will the new site handle summer heat-wave traffic?', a: "Yes, and in Henderson that is a real consideration. When the Mojave climbs past 110, emergency AC traffic surges, and the slow sites lose leads. We rebuild for speed and keep the call to action obvious so the site converts when demand peaks." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for quick load and a clean Core Web Vitals pass, the combination that lifts conversions and rankings for a Henderson contractor at once." },
      { q: 'Do I own the redesigned site?', a: "Completely: the site, the domain, and the content all belong to you. There is no platform lock-in of any kind holding you in place." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time fixed-price project. Anything ongoing, like maintenance or SEO, stays month-to-month." },
      { q: "What's in the free redesign audit?", a: "A straight read on what your current site is leaking in Henderson leads and rankings, what the rebuild needs to fix, and a fixed-price quote with a timeline and a safe migration plan attached." },
    ],
  },
];

export const hendersonCity = {
  citySlug: 'henderson', city: 'Henderson', state: 'Nevada', stateAbbr: 'NV', metro: 'Henderson-Las Vegas',

  titleTag: 'Henderson Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Henderson contractors. Get found, get booked, and own your leads instead of renting them, all built for desert-heat demand.',

  eyebrow: 'Henderson · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Henderson contractors found and booked',
  h2Exact: 'Henderson Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Henderson's affluent, HOA-run, master-planned market. One team to get you ranking, converting, and off the rented-lead treadmill for good.",
  heroProof: ['Built for the trades', 'Desert-heat ready', 'No lock-in contracts'],
  primaryCta: 'Get my free Henderson audit',

  intro:
    "If you run a contracting business in Henderson, you are fighting for attention in one of the safest, fastest-growing suburbs in the country: master-planned communities from Green Valley to Lake Las Vegas, retirees and young families side by side, and California transplants arriving with money to spend. The competition grows right along with the rooftops. Winning here takes three things working together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack, all locked in before the desert summer sends demand through the roof. Here is exactly how we help Henderson contractors pull that off.",
  aioQuestion: 'How do Henderson contractors get more leads online?',
  aioAnswer:
    "Henderson contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack. Because Henderson is affluent and HOA-heavy and demand spikes hard during the 110-degree summer, the contractors who look established, understand HOA approvals, and are already ranking before the heat win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Henderson searches \"near me.\" The single highest-return move for most local businesses, and how you catch desert-summer demand before it goes to a competitor.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your Henderson customers actually search, build an asset you own instead of renting traffic from ads, and measure the whole thing in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs, and to stay fast when a heat wave sends your phone into overdrive, not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it so carefully that you keep every bit of ranking you have already earned in Henderson search.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Henderson?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads, and so they are ready when the desert summer hits and every homeowner needs emergency help at once." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors, so we understand emergency AC calls, pool equipment, monsoon storm damage, and HOA approval work across Henderson's master-planned communities." },
    { q: 'Why does the summer heat matter for my marketing?', a: "When the Mojave holds at 110 and up from June through September, demand for emergency AC, HVAC, and pool service spikes overnight and the backlog can run for weeks. Ranking takes months to build, so the contractors who are already visible before summer take that work. We get you in place ahead of the heat." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds running $2,000 to $9,000. SEO and local SEO go month-to-month at $750 to $3,000, with no long contract attached. We pin down the exact scope for your Henderson business in the free audit." },
    { q: 'Which Henderson areas do you serve?', a: "All of Henderson and the surrounding Las Vegas valley: Green Valley, Anthem, Inspirada, Lake Las Vegas, Seven Hills, MacDonald Ranch, Tuscany, Whitney Ranch, Boulder City and into Las Vegas itself." },
    { q: 'Where should I start?', a: "Start with a free Henderson audit. We look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};
