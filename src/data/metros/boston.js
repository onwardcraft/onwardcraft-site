// BOSTON — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Boston's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// BOSTON — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Boston before winter is everything',
  body:
    "The Boston metro is home to around 4.9 million people across a city built on centuries of old housing stock and shaped by some of the most punishing winters in any major US market. Boston averages 43 inches of snow per year, and after major storms the demand for roofing, ice dam removal, and HVAC emergency work spikes overnight. When a homeowner's boiler quits in January or a roof starts leaking under ice, they search for help immediately — and whoever ranks in those three Map Pack spots takes the call. Two things shape contractor demand here beyond season. First, Boston has the oldest housing stock of any major American city: a massive inventory of Victorian, Federal, and Colonial homes from 1800 to 1920 that need constant specialized upkeep — masonry repointing, old boiler replacement, knob-and-tube rewiring, slate roof repair. Old homes mean complex jobs and bigger budgets. Second, Boston homeowners are among the most educated and research-intensive buyers in the country. They read reviews, compare websites carefully, and pay a premium for contractors who look credible and professional online. The contractor who looks the part on the web and holds the Map Pack position before the blizzard hits captures the market.",
  pullQuote: 'In a city where January brings ice dams and February brings burst pipes, the contractor already ranking before the storm hits gets all the emergency calls.',
  donut: {
    title: 'When Boston contractor demand peaks',
    value: 43,
    centerLabel: 'inches of snow per year',
    legend: [
      { label: 'Winter emergency work (Dec–Feb)', pct: 43, kind: 'teal' },
      { label: 'Rest of year', pct: 57, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Winter emergencies (Dec–Feb), spring repair (Mar–May), AC demand (Jul–Aug)',
  seasonalDemand: [
    { m: 'J', v: 95, peak: true }, { m: 'F', v: 90, peak: true }, { m: 'M', v: 72, peak: true },
    { m: 'A', v: 68, peak: true }, { m: 'M', v: 62 }, { m: 'J', v: 55 }, { m: 'J', v: 80, peak: true },
    { m: 'A', v: 78, peak: true }, { m: 'S', v: 52 }, { m: 'O', v: 54 },
    { m: 'N', v: 70 }, { m: 'D', v: 92, peak: true },
  ],
  stats: [
    { value: '4.9M', label: 'people across the greater Boston metro' },
    { value: '43"', label: 'average snowfall per year — winter dominates contractor demand', accent: true },
    { value: '1800–1920', label: 'era of most Boston housing stock — old homes mean complex jobs' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks when emergencies hit' },
  ],
  neighborhoods: [
    'Back Bay', 'South End', 'Beacon Hill', 'Jamaica Plain', 'Dorchester',
    'South Boston', 'Brookline', 'Newton', 'Lexington', 'Concord',
    'Wellesley', 'Cambridge', 'Somerville', 'Medford', 'Quincy',
  ],
};

const AREAS = [
  'Back Bay', 'South End', 'Beacon Hill', 'Jamaica Plain', 'Dorchester',
  'South Boston', 'Brookline', 'Newton', 'Lexington', 'Concord',
  'Wellesley', 'Cambridge', 'Somerville', 'Medford', 'Quincy',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. In Boston, that means being in the Map Pack before the blizzard hits, not chasing rankings in January when everyone needs you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We understand winter boiler emergencies, ice dam removal calls, and the complexity of working on 100-year-old Boston homes — so everything we build is shaped around how your customers really search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners three competitors also bought.",
  },
  {
    title: 'We actually speak Boston',
    body: "Neighborhood-by-neighborhood targeting from Dorchester to Wellesley, plus the seasonal timing to rank you before the ice dams form — not after. The stuff a national shop can't do by swapping a city name into a template.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Boston contractor gets around 1,500 local \"near me\" impressions a month across a handful of neighborhoods. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a booked-out calendar — and in a market where emergencies spike overnight after a blizzard, ranking before the storm is everything. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Boston', state: 'Massachusetts', stateAbbr: 'MA', metro: 'Boston',
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const bostonLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'boston', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Boston Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Search your service in Boston and three businesses show up on the map. We get you into those three before the winter rush hits. Honest pricing, no lock-in, free audit.',
    eyebrow: 'Local SEO · Boston, MA',
    h1: 'When Boston searches for what you do, be the first name they find',
    h2Exact: 'Boston Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. When January brings ice dams and February brings burst pipes, the contractor already ranked in those three spots gets the emergency call. We get you there before the season hits.",
    primaryCta: 'Get my free Boston audit',
    intro:
      "Boston local SEO comes down to one thing: when a homeowner in Back Bay or Newton searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. This market is defined by brutal winters, the oldest housing stock in the country, and research-intensive buyers who trust whoever looks most credible online. Getting into those three Map Pack spots for the neighborhoods you serve — before the snow season, not during it — is the whole game.",
    aioQuestion: 'How do Boston businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Boston neighborhoods. The winners build these foundations in the fall so they're fully ranked when January ice dam calls start flooding in — local SEO rewards lead time over last-minute scrambling.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks — and in Boston, when a boiler quits in January or a roof caves under ice, homeowners tap one of those three immediately. If you're not one of them, it almost doesn't matter how good your work is. Getting into that top three for your neighborhoods is usually the single highest-return move a Boston contractor can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Boston homeowner to four contractors, then bill each of you to fight over them. It's a treadmill. Local SEO builds the opposite: a lead finds you, calls you, and nobody else got it. Over time you stop renting and start owning the pipeline." },
      { title: "You're not ranked before the winter rush", body: "Boston's biggest demand spikes — ice dam removal, boiler failures, burst pipes — happen fast and overwhelmingly in December through February. Ranking takes months to build. The contractors who start their local SEO in the fall are the ones whose phones ring when the storm hits. If you're trying to rank in January, you're already too late for that season." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Boston searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes anxious Boston homeowners pick up the phone." },
      { name: 'Neighborhood pages', desc: "Real pages for Back Bay, Newton, Brookline, Cambridge, Wellesley and the rest, so you rank for the neighborhood someone's actually searching, not just \"Boston.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Boston sources Google trusts — local press, trade associations, neighborhood groups. This is what separates page one from page two here." },
      { name: 'Seasonal and emergency SEO', desc: "We rank you for ice dam removal, emergency boiler repair, burst pipe response, and spring gutter work before the season hits — not after it's already over.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your neighborhoods and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting before winter, not during it." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across your key Boston markets, plus the seasonal content that ranks you for emergency searches." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Boston neighborhoods.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map from Cambridge to Wellesley.', features: ['Everything in Local Growth', 'Local link building', 'Seasonal and emergency SEO', 'Multi-neighborhood service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Boston?', a: "Most Boston engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. Competitive Boston keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days is selling you something. The implication is: start before fall if you want to be ranked by January." },
      { q: 'What makes Boston local SEO different?', a: "Two things. The winter demand cycle is extreme — ice dam removal, boiler failures, and burst pipe calls spike overnight in December and January, and only the contractors already ranked capture that work. And the housing stock is uniquely old: Victorian, Federal, and Colonial homes from 1800 to 1920 that need constant specialized maintenance, so the buyer is research-intensive and pays a premium for contractors who look credible online." },
      { q: 'How do I rank for emergency work like ice dam removal?', a: "The same way you rank for anything: we build out the service pages, optimize your Google Business Profile for those emergency categories, earn citations and reviews, and get the local content in place before the season. Emergency searches spike overnight, so you need to be ranked before the storm — not scrambling during it." },
      { q: 'Which areas do you cover?', a: "Back Bay, South End, Beacon Hill, Jamaica Plain, Dorchester, South Boston, Brookline, Newton, Lexington, Concord, Wellesley, Cambridge, Somerville, Medford, and Quincy. We build genuine neighborhood pages instead of one generic Boston page, because that's what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand Boston's old housing stock, winter emergency demand, and the insurance work that follows major storms." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because the work is coming to you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your neighborhoods, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'boston', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Boston SEO Company | Rank Higher, Get Leads | OnwardCraft',
    metaDescription:
      'Boston SEO that ranks contractors on Google before the winter rush and brings in leads you own. Revenue-tied reporting, no lock-in contracts. Free Boston SEO audit.',
    eyebrow: 'SEO Services · Boston, MA',
    h1: 'Get your Boston business to the top of Google and keep it there',
    h2Exact: 'Boston SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Boston customers search and the leads keep coming. We build that ranking and tie every report to actual calls and jobs — before the winter season, not after it.",
    primaryCta: 'Get my free Boston SEO audit',
    intro:
      "Boston SEO comes down to one question: when someone searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in a market shaped by brutal winters, 100-year-old homes, and buyers who research contractors more carefully than almost anywhere else in the country — and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Boston businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content tied to specific Boston neighborhoods, and earning links from trusted local sources. In Boston, seasonal timing is critical: ranking for ice dam removal, boiler repair, and burst pipe response before December is what separates the contractors who book the winter emergency work from the ones who watch it go to someone else.",
    problemHeading: "Three reasons your Boston site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. In a market with this many competitors, if you're not in the top handful of results for what you sell, your site is basically invisible — no matter how good it looks or how many decades you've been in business." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost. In Boston, where buyers research carefully and often trust organic results more than ads, this matters." },
      { title: "You're not ranked for the demand that matters", body: "Boston's biggest demand spikes — boiler failures, ice dam removal, burst pipes — hit fast and hard in December through February. The contractors who rank for those terms ahead of time capture the surge. If your SEO ignores seasonal and emergency searches, you're leaving your busiest weeks on the table." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your Boston customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real Boston and industry sources. In a market with educated buyers and established competitors, links are often what separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across your neighborhoods alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Seasonal and emergency SEO', desc: "We rank you for the winter heating, ice dam, and summer AC searches that drive Boston's busiest weeks, so you're visible before demand spikes, not after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Boston leads — with seasonal timing baked in." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the seasonal and emergency terms that dominate Boston demand." },
      { name: 'Build authority', desc: "Links and citations from trusted Boston and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Boston SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Boston search year-round.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal and emergency SEO', 'Multi-neighborhood pages', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Boston?', a: "Most Boston SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Boston?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter neighborhood terms and slower on the most competitive citywide keywords. In Boston, timing matters: start in summer or fall to be ranked before the winter emergency season." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Boston buyers research carefully and often trust organic results over ads, so SEO tends to convert especially well here." },
      { q: 'Should my Boston SEO target seasonal demand?', a: "Absolutely. When a blizzard hits, searches for ice dam removal, emergency boiler repair, and burst pipe work spike overnight — and only the contractors already ranked capture that work. Ranking takes months to build, so we optimize for those seasonal and emergency terms ahead of time." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal/emergency and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which areas around Boston do you cover?', a: "Back Bay, South End, Beacon Hill, Jamaica Plain, Dorchester, South Boston, Brookline, Newton, Lexington, Concord, Wellesley, Cambridge, Somerville, Medford, and Quincy — with genuine local pages rather than one generic Boston page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'boston', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Boston Web Design Company | Sites That Convert | OnwardCraft',
    metaDescription:
      'Boston web design that turns visitors into booked jobs — fast, mobile-first sites built for contractors serving a market of educated buyers and brutal winters. Free quote.',
    eyebrow: 'Web Design · Boston, MA',
    h1: 'Boston web design that turns visitors into booked jobs',
    h2Exact: 'Boston Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. Boston homeowners are among the most research-intensive buyers in the country — they compare websites carefully, read reviews, and pay a premium for contractors who look professional and credible online. We build sites that win that comparison.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Boston contractor websites lose leads quietly: slow on a phone, buried call button, no clear offer. Web design done right fixes all of that. Boston buyers are educated and deliberate — they read your site carefully before they call. We build sites that load fast, look like the professional you are, and turn Newton-to-Dorchester visitors into booked jobs, with the credibility signals that convince a research-intensive buyer to pick you.",
    aioQuestion: 'What makes a good contractor website in Boston?',
    aioAnswer:
      "A good Boston contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with real reviews and project photos, names the specific neighborhoods you serve, and signals expertise with old-home specializations like boiler work, masonry, or slate roofing. Because Boston buyers research carefully and pay a premium for credibility, the quality of the copy and the visual professionalism of the site are what close the deal.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It doesn't build enough trust", body: "Boston homeowners are educated and careful. They compare two or three contractor websites before they call. A cluttered, generic, or outdated site quietly signals that you're not the premium contractor they're looking for — even when your work is excellent. We design sites that build credibility fast." },
      { title: "It's too slow on a phone", body: "Most of your Boston visitors are on mobile, and they bounce if your site takes more than a few seconds to load. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking." },
      { title: "It doesn't speak to your neighborhood or specialty", body: "A homeowner in Beacon Hill with a 150-year-old brownstone wants to see that you understand old homes — not a generic page that could be anybody in any city. We build sites that name the neighborhoods you work and highlight the specialties those buyers care about." },
    ],
    servicesHeading: "What's in an OnwardCraft Boston website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your neighborhoods, and the jobs you actually want to win." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where most of your Boston traffic arrives. Fast, thumb-friendly, easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that speak to research-intensive Boston homeowners and book the job — not filler text that reads like everyone else's." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Trust and credibility design', desc: "Review showcases, old-home expertise signals, and professional photography layout that convince a careful Boston buyer you're the right choice.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your neighborhoods, your best jobs, and your competitors, then map the site around booking more of the work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells to Boston's research-intensive buyers, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting." },
    ],
    pricing: {
      heading: 'Transparent Boston web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Neighborhood-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Boston?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site win over Boston homeowners who research carefully?', a: "That's the whole design challenge here. Boston buyers are more research-intensive than almost any other market — they compare websites carefully, read reviews, and pay a premium for contractors who look credible. We build around that: fast load, strong trust signals, clear expertise, and copy that speaks to what a careful Boston homeowner actually wants to know before they call." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Boston terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where most of your Boston traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Boston site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'boston', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Boston Website Redesign | More Leads, No Traffic Loss | OnwardCraft',
    metaDescription:
      'Redesign your Boston website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs before the winter rush. Free audit.',
    eyebrow: 'Website Redesign · Boston, MA',
    h1: 'Redesign your Boston website without losing your rankings',
    h2Exact: 'Boston Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — and in Boston, where buyers research carefully and pay a premium for credibility, an old site is quietly losing you work to competitors who look sharper online. We redesign Boston contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Boston contractor sites for speed and conversions, build them to earn the trust of research-intensive buyers, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Boston site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "Boston homeowners — educated, research-intensive buyers who compare websites carefully — judge you by your site in seconds. An old, cluttered design quietly sends them to a competitor who looks more established and credible, even when your work is better." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your Boston visitors before they ever see your offer. A redesign built mobile-first wins them back." },
      { title: "It doesn't signal expertise for Boston's old homes", body: "A homeowner in Beacon Hill with a 130-year-old rowhouse or a buyer in Wellesley with a Victorian estate needs to see that you understand what their home requires. A generic site signals generic contractor. We rebuild to highlight the specialties and neighborhood knowledge that win Boston's most valuable jobs." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where most of your Boston traffic arrives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and signals expertise to Boston's careful buyers." },
      { name: 'Neighborhood and specialty rebuild', desc: "Rebuilt to highlight the specific neighborhoods you serve and the old-home specialties that win Boston's most valuable jobs.", featured: true },
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
      heading: 'Transparent Boston redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Neighborhood and specialty rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Boston?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is hard to update, isn't bringing in leads, or isn't building the kind of trust that Boston's research-intensive buyers expect, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the redesign help me win higher-value Boston jobs?', a: "Yes, and that's especially important here. Boston homeowners — particularly in Newton, Brookline, Lexington, Wellesley, and Concord — are willing to pay a premium for contractors who look professional and credible online. A polished redesign can lift not just your lead volume but the caliber of the jobs you attract." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const bostonCity = {
  citySlug: 'boston', city: 'Boston', state: 'Massachusetts', stateAbbr: 'MA', metro: 'Boston',

  titleTag: 'Boston Marketing for Contractors | Web, SEO & Leads | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Boston contractors. Get found before the winter rush, win educated buyers, and own your leads instead of renting them. Free Boston audit.',

  eyebrow: 'Boston · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Boston contractors found and booked',
  h2Exact: 'Boston Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for a market defined by brutal winters, 100-year-old homes, and buyers who research everything. One team to rank you before the storm hits, convert careful buyers, and get you off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Boston audit',

  intro:
    "If you run a contracting business in Boston, you're fighting for attention in a market shaped by some of the harshest winters in the country, the oldest housing stock of any major American city, and homeowners who research contractors more carefully than almost anywhere else. Winning here takes three things working together: a site that builds trust fast, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack for your neighborhoods before the season hits — not after. Here's how we help Boston contractors do exactly that.",
  aioQuestion: 'How do Boston contractors get more leads online?',
  aioAnswer:
    "Boston contractors get more leads by combining a fast, professional website that earns trust with educated buyers, SEO that ranks them for high-intent searches year-round, and local SEO that wins the Google Map Pack neighborhood by neighborhood — with seasonal timing built in so they're visible before winter emergency demand spikes, not chasing rankings after the blizzard hits.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Boston searches \"near me.\" The single highest-return move for most local businesses — done tight, neighborhood by neighborhood, before the winter rush.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search, build an asset you own instead of renting traffic from ads, and measure it in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to earn the trust of Boston's research-intensive buyers and turn visitors into booked jobs — not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed, credibility, and conversions, and migrate it carefully so you keep every bit of ranking you've already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Boston?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank before the winter emergency season, convert careful Boston buyers, and own their leads." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors — so we understand Boston's old housing stock, winter emergency demand, and the complexity of working on Victorian and Colonial homes." },
    { q: 'Why does the Boston market need a different approach?', a: "Boston is defined by brutal winters that spike contractor demand overnight, the oldest housing stock of any major US city, and buyers who research more carefully than almost anywhere else. Winning means being ranked before the storm hits, not chasing rankings in January, and building the kind of credibility that earns a premium from discerning homeowners." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Boston areas do you serve?', a: "Back Bay, South End, Beacon Hill, Jamaica Plain, Dorchester, South Boston, Brookline, Newton, Lexington, Concord, Wellesley, Cambridge, Somerville, Medford, and Quincy." },
    { q: 'Where should I start?', a: "Start with a free Boston audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};
