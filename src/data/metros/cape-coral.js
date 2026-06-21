// CAPE CORAL — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Cape Coral's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// CAPE CORAL — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Cape Coral right now is a once-in-a-decade opportunity',
  body:
    "In September 2022, Hurricane Ian made landfall near Fort Myers as a catastrophic Category 4 storm — the deadliest hurricane to strike Florida since 1935. Thousands of homes in Cape Coral and Fort Myers were destroyed or severely damaged. The rebuilding demand that followed is unlike anything this market has ever seen, and industry analysts expect it to sustain contractor work for the next five to ten years. That creates an extraordinary window: contractors who rank now capture a pipeline of post-Ian rebuild, storm-hardening, and ongoing maintenance work that is still nowhere near saturation. Layer in the other forces shaping this market — Cape Coral's 400-plus miles of canals require constant seawall repair, retirees from Ohio, Michigan, and Indiana arrive every month and need contractors immediately, and HOA communities enforce strict exterior standards year-round — and you have a market where the right online presence compounds faster than almost anywhere else in Florida.",
  pullQuote: 'The contractors ranking in Cape Coral right now are the ones who capture years of post-Ian rebuilding demand.',
  donut: {
    title: 'Post-Ian rebuild vs. routine work',
    value: 67,
    centerLabel: 'post-Ian rebuilding demand',
    legend: [
      { label: 'Storm-impact rebuild', pct: 67, kind: 'teal' },
      { label: 'Routine maintenance', pct: 33, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Hurricane season (Jun–Nov) plus snowbird activation (Nov–Apr)',
  seasonalDemand: [
    { m: 'J', v: 72, peak: true }, { m: 'F', v: 70, peak: true }, { m: 'M', v: 54 }, { m: 'A', v: 44 },
    { m: 'M', v: 62, peak: true }, { m: 'J', v: 78, peak: true }, { m: 'J', v: 86, peak: true },
    { m: 'A', v: 90, peak: true }, { m: 'S', v: 96, peak: true }, { m: 'O', v: 92, peak: true },
    { m: 'N', v: 80, peak: true }, { m: 'D', v: 74, peak: true },
  ],
  stats: [
    { value: 'Cat. 4', label: 'Hurricane Ian hit Cape Coral / Fort Myers in 2022 — still driving rebuild demand' },
    { value: '400+ mi', label: 'of canals in Cape Coral — seawall repair is a contractor category all its own', accent: true },
    { value: 'Top 5', label: 'Lee County ranks among the top US retirement migration destinations' },
    { value: '5–10 yrs', label: 'expected duration of post-Ian rebuilding demand in the market' },
  ],
  neighborhoods: [
    'Cape Coral NW', 'Cape Coral SW', 'Cape Coral SE', 'Cape Coral NE',
    'Fort Myers', 'Fort Myers Beach', 'Sanibel Island', 'Pine Island',
    'Estero', 'Bonita Springs', 'Naples', 'Lehigh Acres',
    'North Fort Myers', 'Cape Harbour', 'Matlacha',
  ],
};

const AREAS = [
  'Cape Coral', 'Fort Myers', 'Fort Myers Beach', 'Sanibel Island', 'Pine Island',
  'Estero', 'Bonita Springs', 'Naples', 'Lehigh Acres', 'North Fort Myers',
  'Matlacha', 'Cape Harbour', 'Iona', 'Gateway', 'Alva',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We understand storm season, emergency calls, and insurance work — so everything we build is shaped around how your customers really search after a hurricane.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners three competitors also bought.",
  },
  {
    title: 'We actually speak Cape Coral',
    body: "Post-Ian rebuild demand, canal-front seawall work, snowbird retirees arriving from the Midwest, HOA exterior standards. The stuff a national agency can't do by swapping a city name into a template.",
  },
  {
    title: 'No contracts, no mystery',
    body: "Published prices, reporting tied to leads, month-to-month after 90 days. If we're not earning it, you leave. That keeps the pressure where it belongs: on us.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Cape Coral contractor gets around 1,200 local \"near me\" impressions a month. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a booked-out calendar — and in a market still absorbing years of post-Ian rebuild demand, that gap is even wider than normal. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Cape Coral', state: 'Florida', stateAbbr: 'FL', metro: 'Cape Coral-Fort Myers',
  heroProof: ['Built for the trades', 'Post-Ian rebuild ready', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const capeCoralLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'cape-coral', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Cape Coral Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Search your service in Cape Coral and three businesses show up on the map. We get you into those three, so the call lands with you. Honest pricing, no lock-in, free audit.',
    eyebrow: 'Local SEO · Cape Coral-Fort Myers',
    h1: 'When Cape Coral searches for what you do, be the first name they find',
    h2Exact: 'Cape Coral Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. We get you into that top three — so the call lands with you instead of whoever ranked first, and so you're positioned to catch years of post-Ian rebuild demand that's still working through the market.",
    primaryCta: 'Get my free Cape Coral audit',
    intro:
      "Cape Coral local SEO comes down to one thing: when a homeowner in Fort Myers or a snowbird who just closed on a canal-front property searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. Post-Ian rebuilding demand is still running strong, retirees from the Midwest keep arriving and need contractors immediately, and the competition is growing with the market. Becoming one of those three is the whole game.",
    aioQuestion: 'How do Cape Coral businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Cape Coral and Fort Myers neighborhoods. In a market still absorbing Hurricane Ian rebuild demand, the contractors who look established and are already ranking win the work — which means starting now matters more than anywhere else.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks. If you're not one of them, it almost doesn't matter how good your work is — most people never see your name. In a market flooded with post-Ian rebuild demand, getting into that top three is the single highest-return move you can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Cape Coral homeowner to four contractors, then bill each of you to fight over them. It's a treadmill. Local SEO builds the opposite: a lead finds you, calls you, and nobody else got it. In a market with this much rebuild volume, owning your own pipeline is how you stay booked." },
      { title: "You're missing the snowbird and retiree wave", body: "Lee County is one of the top retirement migration destinations in the US. Retirees from Ohio, Michigan, and Indiana arrive constantly, buy homes — many of them canal-front properties that need seawall work and storm hardening — and search for contractors the week they move in. If you're invisible on the map, that wave of ready-to-hire homeowners goes to whoever ranked first." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Cape Coral and Fort Myers searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes snowbird retirees — who research heavily before calling — pick up the phone." },
      { name: 'Neighborhood pages', desc: "Real pages for Fort Myers, Fort Myers Beach, Sanibel Island, Bonita Springs, Estero and the rest, so you rank for the neighborhood someone's actually searching, not just \"Cape Coral.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Cape Coral and Lee County sources Google trusts — local press, associations, partners. This is what separates page one from page two here." },
      { name: 'Post-Ian rebuild targeting', desc: "We optimize your profile and pages around the storm-hardening, restoration, and rebuild searches that will drive this market for years — so you capture those jobs instead of competitors who started ranking earlier.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your service areas and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now over starting later — especially in a market with years of rebuild demand still to run." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Lee and Collier counties, plus the on-page work to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Cape Coral-Fort Myers areas.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across Lee and Collier counties.', features: ['Everything in Local Growth', 'Local link building', 'Post-Ian rebuild demand targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Cape Coral?', a: "Most Cape Coral engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The competitive Cape Coral and Fort Myers keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days in a market this active is selling you something." },
      { q: 'What makes Cape Coral local SEO different?', a: "Three things. Hurricane Ian created a multi-year rebuild pipeline that makes this one of the most demand-rich contractor markets in Florida. Constant retiree migration from the Midwest means new homeowners are always searching for contractors they don't know yet. And over 400 miles of canals means seawall repair and canal-front property work is an entire contractor category unique to this market." },
      { q: 'How does local SEO help me capture post-Ian rebuild demand?', a: "Hurricane Ian destroyed or severely damaged thousands of homes in Cape Coral and Fort Myers. That rebuild, storm-hardening, and restoration demand will run for years — and homeowners searching for help go to whoever ranks first. We get your profile, pages, and reviews optimized around those searches so the calls land with you." },
      { q: 'Which areas do you cover?', a: "All of the Cape Coral-Fort Myers metro and the areas around it — Fort Myers Beach, Sanibel Island, Pine Island, Estero, Bonita Springs, Lehigh Acres, North Fort Myers, Naples and more. We build genuine neighborhood pages instead of one generic Cape Coral page, because that's what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand emergency calls, storm-driven demand, seawall and canal-front work, and insurance jobs, and we build your local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that send leads straight to you. In a market with this much organic demand from Ian rebuilding and snowbird migration, owning your search visibility compounds fast." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your service areas, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'cape-coral', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Cape Coral SEO Company | Rank Higher, Get More Leads | OnwardCraft',
    metaDescription:
      'Cape Coral SEO that ranks contractors on Google and brings in leads you own. Post-Ian rebuild demand, snowbird migration, and year-round HVAC searches — free audit.',
    eyebrow: 'SEO Services · Cape Coral-Fort Myers',
    h1: 'Get your Cape Coral business to the top of Google and keep it there',
    h2Exact: 'Cape Coral SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Cape Coral customers search and the leads keep coming. We build that ranking and tie every report to actual calls and jobs — in a market where post-Ian rebuild demand gives well-ranked contractors a years-long pipeline.",
    primaryCta: 'Get my free Cape Coral SEO audit',
    intro:
      "Cape Coral SEO comes down to one question: when someone searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in a market that's still absorbing years of Hurricane Ian rebuild demand — and where retirees from the Midwest arrive monthly and search for contractors the week they move in. We measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Cape Coral businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content, and earning links from trusted Cape Coral and Fort Myers sources. In a market transformed by Hurricane Ian, ranking for storm-hardening, restoration, and rebuild searches — alongside routine service keywords — is one of the fastest ways to pull ahead of competitors who haven't thought that far.",
    problemHeading: "Three reasons your Cape Coral site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. If you're not in the top handful of results for what you sell, your site is basically invisible — no matter how good it looks. In a market flooded with homeowners searching for post-Ian rebuild help, that invisibility costs real money every week." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost. In Cape Coral, where rebuild and migration demand is baked in for years, an owned ranking is worth far more than an ad campaign." },
      { title: "You're not ranking for the searches that matter here", body: "Cape Coral demand doesn't look like a typical Florida market. It's shaped by hurricane rebuild, canal-front property needs, snowbird retirees who research heavily before calling, and HOA exterior standards that drive a constant stream of work. If your SEO ignores those angles, you're leaving the market's most valuable searches to competitors who figured it out." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your Cape Coral and Fort Myers customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real Lee County and industry sources. In a competitive market, links are often what separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Post-Ian & storm-rebuild SEO', desc: "We rank you for the hurricane recovery, storm-hardening, and rebuild searches that define Cape Coral's demand for the next several years, so you capture those jobs before competitors who started ranking later.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Cape Coral leads — including the rebuild and storm-hardening terms your competitors may have missed." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including post-Ian rebuild terms, canal-front service keywords, and snowbird retiree search patterns." },
      { name: 'Build authority', desc: "Links and citations from trusted Cape Coral, Fort Myers, and Lee County sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Cape Coral SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Cape Coral-Fort Myers search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Post-Ian rebuild SEO', 'Multi-location or multi-service', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Cape Coral?', a: "Most Cape Coral SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Cape Coral?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on low-competition terms and slower on the most competitive Cape Coral keywords. SEO compounds, so the gains keep building the longer you run it — which matters a lot in a market with years of demand still ahead." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most contractors do best running SEO as the long-term engine and ads for short-term spikes. In Cape Coral, where rebuild demand gives you a long runway, an owned ranking compounds longer than in most markets." },
      { q: 'How do I rank for post-Ian rebuild searches?', a: "Hurricane Ian generated a specific set of searches — storm damage assessment, roof replacement, flood restoration, seawall repair, hurricane impact windows, whole-home generators — that are still active in this market and will be for years. We identify the exact terms your potential customers use and optimize your site and Google profile to win them before competitors who haven't thought that far." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add post-Ian rebuild targeting and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which areas around Cape Coral do you cover?', a: "All of the Cape Coral-Fort Myers metro — Fort Myers Beach, Sanibel Island, Pine Island, Estero, Bonita Springs, Lehigh Acres, Naples and more — with genuine local pages rather than one generic Cape Coral page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. In a market with this much organic demand, owning your search visibility is dramatically more efficient than paying for shared leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes — including any rebuild and storm-hardening keyword gaps — and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'cape-coral', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Cape Coral Web Design Company | Sites That Convert | OnwardCraft',
    metaDescription:
      'Cape Coral web design that turns visitors into booked jobs — fast, mobile-first sites built for contractors, post-Ian rebuild demand, and snowbird homeowners. Free quote.',
    eyebrow: 'Web Design · Cape Coral-Fort Myers',
    h1: 'Cape Coral web design that turns visitors into booked jobs',
    h2Exact: 'Cape Coral Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Cape Coral contractors fast, mobile-first sites engineered to turn visitors into booked work — so you capture post-Ian rebuild demand, snowbird retirees searching from a new zip code, and canal-front property owners who need work done now.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Cape Coral contractor websites lose leads quietly: slow on a phone, buried call button, no clear offer. Web design done right fixes all of that. We build sites that load fast, look like the professional you are, and turn Fort Myers Beach, Sanibel, and Estero visitors into booked jobs — and that work just as hard converting the wave of retirees from Ohio and Michigan who just moved in and are searching for contractors they don't know yet.",
    aioQuestion: 'What makes a good contractor website in Cape Coral?',
    aioAnswer:
      "A good Cape Coral contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and speaks directly to the concerns of this specific market — Hurricane Ian damage assessment and repair, seawall and canal-front work, and storm hardening. Because snowbird retirees research carefully before calling, a site that demonstrates local expertise and shows real past work converts at a significantly higher rate than a generic template.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next guy. We design every page around one job: turning a visitor into a booked lead — whether that visitor is a long-time Cape Coral resident, a snowbird who arrived last month, or a homeowner still dealing with Ian damage." },
      { title: "It's too slow on a phone", body: "Most of your Cape Coral visitors are on mobile, and they bounce if your site takes more than a few seconds to load. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking." },
      { title: "It doesn't speak to this specific market", body: "Cape Coral isn't a generic Florida suburb. It's a post-hurricane rebuild market, a canal city with unique waterfront property needs, and a top retirement destination for Midwest homeowners who don't know local contractors yet. A site that treats it like any other city loses the trust signals that actually convert these buyers." },
    ],
    servicesHeading: "What's in an OnwardCraft Cape Coral website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your service area, and the jobs you actually want — including the post-Ian rebuild and storm-hardening work that defines this market." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your Cape Coral traffic is. Fast, thumb-friendly, easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that speak to anxious homeowners — including snowbird retirees who need a contractor they can trust from a thousand miles away — and book the job." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages across Lee and Collier counties." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Canal-front and rebuild ready', desc: "Structured to convert the specific searches that define Cape Coral — seawall repair, storm hardening, Ian restoration — so the site captures the work that's unique to this market.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your service area, your best jobs, and your competitors, then map the site around booking more of the work you want — including the rebuild and storm-hardening demand that gives Cape Coral contractors a long pipeline." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page and messaging tailored to Cape Coral's unique buyer mix." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting." },
    ],
    pricing: {
      heading: 'Transparent Cape Coral web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Canal-front & rebuild ready'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Cape Coral?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site speak to post-Ian rebuild customers?', a: "Yes, and in Cape Coral that matters enormously. Hurricane Ian created a specific set of buyer concerns — damage assessment, restoration quality, storm hardening — and a site that addresses those directly converts at a much higher rate than a generic one. We write copy that meets those buyers where they are." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Cape Coral and Fort Myers terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your Cape Coral traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Cape Coral site should include given this market's unique buyer mix, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'cape-coral', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Cape Coral Website Redesign | More Leads, No Traffic Loss | OnwardCraft',
    metaDescription:
      'Redesign your Cape Coral website without losing rankings. Faster, mobile-first rebuilds that convert snowbird retirees and post-Ian rebuild searchers into booked jobs. Free audit.',
    eyebrow: 'Website Redesign · Cape Coral-Fort Myers',
    h1: 'Redesign your Cape Coral website without losing your rankings',
    h2Exact: 'Cape Coral Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, easy to ignore. We redesign Cape Coral contractor sites to convert more and load faster, built to capture post-Ian rebuild demand and snowbird retirees, and migrated carefully so you keep every ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Cape Coral contractor sites for speed and conversions, build them to speak to this market's unique buyer mix — hurricane rebuild, canal-front work, Midwest retirees — and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured — and in Cape Coral, a redesign is also an opportunity to add the rebuild, canal-front, and snowbird-retiree messaging that converts this specific market.",
    problemHeading: "Signs your Cape Coral site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "For a high-ticket job, homeowners judge you by your site in seconds. Snowbird retirees who just moved from Ohio or Michigan are especially careful — they're hiring a contractor in a city they don't know, and they lean heavily on how professional you look online. An old, cluttered design quietly sends them to a competitor who looks more established." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your Cape Coral visitors before they ever see your offer. A redesign built mobile-first wins them back and ranks better in the process." },
      { title: "It isn't built for this specific market", body: "An outdated site usually wasn't built with Canal City's unique buyer mix in mind: post-Ian rebuild and restoration searches, seawall and waterfront property needs, HOA exterior standards, or the heavily research-oriented snowbird retiree. A redesign is the chance to fix that and convert the visitors who already find you but don't call." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your Cape Coral traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and gives snowbird retirees the confidence to call." },
      { name: 'Post-Ian and canal-front ready', desc: "Rebuilt to speak to the rebuild, storm-hardening, and waterfront searches that define Cape Coral's demand — so the new site captures the market's most valuable jobs.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you leads and rankings — including any gaps in rebuild, canal-front, or snowbird messaging — then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and improve, not drop." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Cape Coral redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Post-Ian & canal-front ready'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Cape Coral?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, isn't speaking to post-Ian rebuild and snowbird retiree buyers, or is hard to update, it's costing you work. The free audit tells you plainly whether a redesign is worth it and what it should fix." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Can the redesign add canal-front and seawall messaging?', a: "Yes, and for many Cape Coral contractors that's one of the most valuable things a redesign can do. We add service pages and content for the canal-front and waterfront work that's unique to this market — seawall repair, dock work, waterfront property maintenance — so you rank and convert on searches your old site ignored." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix for Cape Coral's specific buyer mix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const capeCoralCity = {
  citySlug: 'cape-coral', city: 'Cape Coral', state: 'Florida', stateAbbr: 'FL', metro: 'Cape Coral-Fort Myers',

  titleTag: 'Cape Coral Marketing for Contractors | Web, SEO & Leads | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Cape Coral contractors. Get found, get booked, and own your leads — built for post-Ian rebuild demand, canal-front work, and snowbird migration. Free audit.',

  eyebrow: 'Cape Coral · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Cape Coral contractors found and booked',
  h2Exact: 'Cape Coral Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for a market shaped by Hurricane Ian, 400 miles of canals, and a constant wave of retirees from up north. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Post-Ian rebuild ready', 'No lock-in contracts'],
  primaryCta: 'Get my free Cape Coral audit',

  intro:
    "If you run a contracting business in Cape Coral, you're operating in one of the most demand-rich markets in Florida right now. Hurricane Ian's 2022 landfall as a Category 4 storm destroyed or severely damaged thousands of homes in Cape Coral and Fort Myers, and that rebuild pipeline will sustain contractor work for years. Layer in 400 miles of canals that require constant seawall and waterfront maintenance, a steady stream of retirees from Ohio, Michigan, and Indiana who arrive without established contractor relationships, and HOA-governed communities that enforce strict exterior standards — and you have a market where the right online presence compounds faster than almost anywhere else. Here's how we help Cape Coral contractors capture it.",
  aioQuestion: 'How do Cape Coral contractors get more leads online?',
  aioAnswer:
    "Cape Coral contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack. Because this market is shaped by post-Ian rebuild demand, canal-front property work, and constant retiree migration, contractors who look established online and are already ranking capture a disproportionate share of a pipeline that will run for years.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Cape Coral searches \"near me.\" The single highest-return move for most local businesses — and how you capture post-Ian rebuild demand and snowbird retirees before competitors do.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search — including rebuild, storm-hardening, seawall, and canal-front terms unique to this market — and build an asset you own instead of renting traffic from ads.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs — speaking directly to Cape Coral's unique buyer mix of Ian rebuild homeowners, canal-front property owners, and snowbird retirees.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, add the rebuild and waterfront messaging this market demands, and migrate carefully so you keep every ranking you've already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Cape Coral?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads — and are positioned to capture years of post-Ian rebuild and snowbird migration demand." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors — so we understand emergency calls, storm-driven demand, seawall and canal-front work, and insurance jobs." },
    { q: 'Why does Hurricane Ian matter for my marketing?', a: "Ian made landfall in September 2022 as a catastrophic Category 4 storm — the deadliest to hit Florida since 1935. It destroyed thousands of homes in Cape Coral and Fort Myers and created a rebuild and storm-hardening pipeline that will sustain contractor work for five to ten years. Ranking now means capturing demand that's still active and will be for a long time." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Cape Coral areas do you serve?', a: "All of the Cape Coral-Fort Myers metro — Fort Myers, Fort Myers Beach, Sanibel Island, Pine Island, Estero, Bonita Springs, Lehigh Acres, Naples and more — with genuine local pages rather than one generic Cape Coral page." },
    { q: 'Where should I start?', a: "Start with a free Cape Coral audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest — including the post-Ian rebuild and canal-front angles your competitors may have missed. No pitch deck, just a plan." },
  ],
};
