// HARTFORD: per-metro, per-service local landing pages plus city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Hartford's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// HARTFORD: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'What the Hartford market quietly demands of you',
  body:
    "Hartford is Connecticut's capital and the place the trade once called the Insurance Capital of the World. The Hartford, Aetna, and Travelers still anchor a downtown office core, and that history shaped who buys home services across the region: actuaries, underwriters, claims adjusters, and analysts who treat hiring a contractor like underwriting a policy. They read the fine print, weigh the reviews, and compare three or four firms before a single phone rings. The housing gives you the demand. West Hartford, Glastonbury, and Farmington are full of Colonials, capes, and turn-of-the-century New England homes that need steady specialist attention, and the families restoring them spend real money doing it right. Push past the established suburbs into the working-class core and the older Wethersfield and Newington streets, and the search habit holds: phone in hand, \"near me\" attached, a finger landing on one of the first three names on the map. Then winter settles the rest. Cold snowy stretches, ice dams crawling up the eaves, and freeze-thaw splitting pipes and shingles drive emergency calls from December through March, and the firm already sitting in the Map Pack is the one whose line stays busy. If you are stuck on page two when the first ice dam forms, that booked work goes to whoever Google already trusts, not to the better craftsman.",
  pullQuote: 'Hartford homeowners vet a contractor like an underwriter reads a claim. Be the name that survives the scrutiny.',
  donut: {
    title: 'Hartford city demographics',
    value: 44,
    centerLabel: 'Black/AA (city)',
    legend: [
      { label: 'Black/AA', pct: 44, kind: 'teal' },
      { label: 'Other', pct: 56, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Snow and ice dams (Nov to Apr), freeze-thaw and spring thaw flooding (Mar to May), summer HVAC (Jun to Aug)',
  seasonalDemand: [
    { m: 'J', v: 88, peak: true }, { m: 'F', v: 92, peak: true }, { m: 'M', v: 80, peak: true },
    { m: 'A', v: 72, peak: true }, { m: 'M', v: 48 }, { m: 'J', v: 54 },
    { m: 'J', v: 62 }, { m: 'A', v: 58 }, { m: 'S', v: 40 },
    { m: 'O', v: 78, peak: true }, { m: 'N', v: 90, peak: true }, { m: 'D', v: 86, peak: true },
  ],
  stats: [
    { value: '1.2M+', label: 'people across the Hartford metro' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks', accent: true },
    { value: 'Nov to Apr', label: 'snow and ice-dam season, when trade demand spikes hardest' },
    { value: '1700 to 1920', label: 'era of most Hartford-area housing stock, driving constant specialist demand' },
  ],
  neighborhoods: [
    'West Hartford', 'Glastonbury', 'Simsbury', 'Farmington', 'Avon',
    'Canton', 'Wethersfield', 'South Windsor', 'Newington', 'Rocky Hill',
    'Bloomfield', 'Windsor', 'East Hartford', 'Enfield', 'Manchester',
  ],
};

const AREAS = [
  'Hartford', 'West Hartford', 'Glastonbury', 'Simsbury', 'Farmington', 'Avon',
  'Canton', 'Wethersfield', 'South Windsor', 'Newington', 'Rocky Hill',
  'Bloomfield', 'Windsor', 'East Hartford', 'Enfield', 'Manchester',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We know what an ice-dam roof leak in February looks like, how a frozen pipe ruins a weekend, and how the restoration wave through Hartford's older homes really buys, so every page we build matches how your customers actually search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole point is a pipeline you own. Not one more monthly check to a lead broker for the same Glastonbury homeowner that three competitors are calling at the same hour.",
  },
  {
    title: 'We actually speak Hartford',
    body: "Insurance-capital professionals who vet everything, historic New England homes that need true specialists, and freeze-thaw winters that pack the backlog. That is local knowledge a national agency cannot fake by find-and-replacing a city name in a template.",
  },
  {
    title: 'No contracts, no mystery',
    body: "Prices are posted, reporting ties to real leads, and you go month-to-month after the first 90 days. If we are not earning the invoice, you leave. That keeps the pressure exactly where it belongs: on us.",
  },
];

const PROOF = {
  heading: "We're new, so here's the honest math instead of a logo wall",
  body:
    "Plenty of agencies open with a grid of client logos. We are a young, founder-led shop, so we will not invent a track record we have not earned yet. What we can put in front of you is the reasoning, drawn straight from Google's and the industry's own research on how people search for a local contractor.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here is a rough sketch, marked plainly as an illustration and not a result we are claiming: say a Hartford contractor draws around 1,000 local \"near me\" impressions a month. Moving from page-two invisibility up into the top three is the gap between a handful of stray calls and a calendar you cannot keep up with, and once an ice storm rolls through that gap stretches even wider. In your free audit we run the real figures for your business: your current rankings, your actual search volume, and a straight 90-to-180-day path to the top of the map.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Hartford', state: 'Connecticut', stateAbbr: 'CT', metro: 'Hartford',
  heroProof: ['Built for the trades', "Ice-dam ready", 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const hartfordLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'hartford', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Hartford Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      "Hartford Local SEO that puts you in the top three on the map, so the winter call lands with you, not a competitor down the road.",
    eyebrow: 'Local SEO · Hartford, CT',
    h1: 'Hartford Local SEO that puts your shop in the Map Pack before the first ice dam',
    h2Exact: 'Hartford Local SEO Company',
    heroSubhead:
      "Google pins three businesses to the map when a homeowner searches \"near me,\" and everyone below them might as well not exist. We get you into that top three so the call lands with you instead of whoever ranked first, and so you are already there when the next ice storm sends West Hartford and Glastonbury reaching for their phones.",
    primaryCta: 'Get my free Hartford audit',
    intro:
      "Hartford Local SEO comes down to a single moment: a homeowner in West Hartford or Glastonbury types your service plus \"near me,\" and either you are one of the three businesses Google pinned to the map or you are not. Most people tap one of those three and never scroll. This is a careful, skeptical market of insurance and aerospace professionals, so landing in that local 3-pack is the whole contest. A tuned Google Business Profile, clean citations, and steady reviews are how a Hartford local SEO company gets you there. Here is exactly how we do it.",
    aioQuestion: 'How do Hartford businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile tuned to the exact services and towns you want; name, address, and phone details that match everywhere online; a steady flow of real reviews; and local content built around genuine Hartford-area neighborhoods. Because so many homeowners here are actuaries and engineers who vet hard, the winners look established, carry strong reviews, and already rank before winter demand spikes.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Three Hartford-area firms already hold the map spots', body: "Search your own service plus \"near me\" right now. Those three businesses Google pins to the map soak up the overwhelming majority of the clicks. If you are not one of them, the quality of your work barely registers, because most Hartford homeowners never see your name. Climbing into that top three is usually the single highest-return move a local business here can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Hartford homeowner to four contractors at once, then bill each of you to fight over them. It is a treadmill you never step off. Local SEO builds the opposite asset: a homeowner finds you, calls you, and nobody else got the lead. Run it long enough and you stop renting visibility and start owning the pipeline." },
      { title: "You're not ready when winter hits", body: "When a cold snap drives ice dams up the eaves and freeze-thaw splits pipes across the region, demand for roofing, restoration, and HVAC goes vertical overnight, and the firms already in the Map Pack take those calls. If you are invisible on the map when the freeze sets in, that booked work flows to whoever Google already trusts. Ranking now is how you ride that surge instead of watching it pass." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The single biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows precisely which Hartford searches belong to you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to line up everywhere Google checks. We fix the listings that contradict each other and build the ones you are missing across the Hartford area." },
      { name: 'Reviews that keep coming', desc: "A simple engine that turns finished jobs into a steady stream of fresh reviews. It lifts your ranking and gives a skeptical Hartford homeowner a reason to call you first." },
      { name: 'Neighborhood pages', desc: "Real pages for West Hartford, Glastonbury, Simsbury, Farmington, Avon and the rest, so you rank for the exact town someone is searching instead of a generic \"Hartford.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, and fast mobile load. The behind-the-scenes work that gives everything else a chance to rank in the first place." },
      { name: 'Local link building', desc: "Mentions and links from Hartford sources Google trusts: local press, trade associations, community partners. In this market that is often what splits page one from page two." },
      { name: "Winter-demand readiness", desc: "We get your profile, pages, and reviews ranking before the cold sets in so you capture the roofing, ice-dam, and HVAC surge instead of chasing it after the damage is already done.", featured: true },
      { name: 'AI search readiness', desc: "A growing share of \"near me\" research now opens in AI Overviews, ChatGPT, and Perplexity. We shape your content and schema so those tools can read your business and name it in their answers.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We map where you actually stand today across every town you serve and figure out which competitors hold the Map Pack and what is keeping them there." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP come first because they move the fastest. Most Hartford clients see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine switch on. They build on each other week after week, which is the reason it pays to start before the first cold snap rather than during it." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across the Hartford area, backed by the on-page work that makes them rank." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, never vanity rankings. Then we go take the next town." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Hartford-area towns.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across Greater Hartford.', features: ['Everything in Local Growth', 'Local link building', "Winter-demand targeting", 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Hartford?', a: "Most Hartford engagements land between $750 and $2,500 a month, depending on how many towns and keywords you are chasing. The tiers above lay it out. No hidden fees, no long contract, and we lock the exact scope in your free audit before you spend a dollar." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move within a few weeks. The competitive Hartford keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days is selling you a fantasy." },
      { q: 'What makes Hartford local SEO different?', a: "Two things. This is the insurance capital, so a large share of homeowners are actuaries, underwriters, and analysts who research a contractor harder than almost anyone, and strong reviews and a consistent presence carry extra weight. And the winters here bite: ice dams, freeze-thaw, and snow load drive hard seasonal demand, so your ranking has to be locked in before the cold, not scrambled together after it." },
      { q: "How does local SEO help me during a cold Hartford winter?", a: "When ice dams form and pipes freeze across the region, searches for roofing, restoration, and HVAC spike overnight, and the businesses already in the Map Pack take those calls. We get you ranking and reviewed ahead of season so you capture that demand instead of handing it to whoever Google already trusts." },
      { q: 'Which areas do you cover?', a: "All of Greater Hartford and the towns around it: West Hartford, Glastonbury, Simsbury, Farmington, Avon, Canton, Wethersfield, South Windsor, Newington, East Hartford, Manchester and more. We build genuine neighborhood pages instead of one generic Hartford page, because that is what actually ranks for \"[service] [town]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It is basically all we do: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand emergency calls, freeze-driven demand, and the restoration work that comes with Hartford's older Colonial and Victorian homes." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More \"near me\" research now starts in AI tools instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. In Hartford that is fast becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. The first 90 days are a starting commitment because that is about how long local SEO needs to show genuine movement. From there you run month-to-month. If we are not producing, you leave, and the burden of proof stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and a presence you never actually keep. We build rankings, a Google profile, and a review base that route leads to you and nobody else. Month by month you depend on the brokers less, because the calls are already arriving on their own." },
      { q: "What's in the free audit?", a: "A straight read on where you sit today across your towns, the moves your Map Pack competitors are using to stay ahead, the fixes likely to lift you fastest, and a grounded 90-to-180-day plan with the numbers worked out for your shop. No slide deck, just an honest diagnosis of exactly what your Hartford Local SEO needs to rank on the map and win the \"near me\" search before winter." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'hartford', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Hartford SEO Company | OnwardCraft',
    metaDescription:
      "Hartford SEO that ranks contractors on Google and delivers leads you own. Revenue-tied reporting, no lock-in, built for winter and freeze-thaw demand.",
    eyebrow: 'SEO Services · Hartford, CT',
    h1: 'Hartford SEO that gets your shop to the top of Google and keeps it there through winter',
    h2Exact: 'Hartford SEO Company',
    heroSubhead:
      "Ads die the second you stop paying. SEO does the reverse: rank once for what your Hartford customers search and the leads keep arriving for months. We build that ranking and tie every report to real calls and booked jobs, not vanity charts.",
    primaryCta: 'Get my free Hartford SEO audit',
    intro:
      "Hartford SEO comes down to one blunt question: when someone searches what you do, are you on page one or page two? In this market page two might as well be page fifty. We get contractors ranking for the money keywords in a region of research-minded professionals and old New England homes that constantly need specialist work, and we measure the whole thing in leads, not traffic that never picks up the phone.",
    aioQuestion: 'How do Hartford businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content, and earning links from trusted Hartford sources. In a market where homeowners are unusually diligent and the winters drive hard seasonal demand, keeping the site fast on mobile and ranking for snow and ice-dam repair terms before winter are two of the quickest ways to pull ahead.",
    problemHeading: "Three reasons your Hartford site isn't bringing in work",
    painPoints: [
      { title: "You're stranded on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it either. If you are not in the top handful of results for what you sell, your site is effectively invisible no matter how sharp it looks. In Hartford, that invisibility is exactly what is sending your jobs to the competition." },
      { title: "You're renting traffic from Google Ads", body: "Ads have their place, but the day your card stops, so do the leads. SEO leaves you something you keep: rankings that go on bringing in work for months and years after we finish, at a small slice of the per-lead price you pay today." },
      { title: "You're not ranking for the demand that matters", body: "Hartford demand swings hard with the winter, and the contractors who rank for ice-dam, storm-repair, and emergency terms ahead of time catch the spike. If your SEO ignores freeze-driven and seasonal searches, you are quietly handing away your busiest, most profitable months." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank your Hartford site at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned for the exact terms your Hartford customers search: titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Pages and articles that genuinely answer what buyers type, pull in links, and keep generating leads for years after they go live." },
      { name: 'Link building', desc: "Authority from real Hartford and industry sources. In a competitive market, links are often the deciding factor between page one and page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack work so you take the \"near me\" searches at the same time you climb the organic results." },
      { name: 'Revenue-tied reporting', desc: "We count the calls and booked jobs your Hartford pages bring in, not impression graphs, so the invoice always lines up against work you can put a dollar figure on." },
      { name: "Winter & seasonal SEO", desc: "We rank you for the ice-dam, freeze, and storm-repair searches that fuel Hartford's busiest months, so you are visible before demand spikes instead of chasing it after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of Hartford search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Hartford leads, not just impressions." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and a clean mobile experience. Hartford homeowners poke at a slow site and bounce, so this groundwork comes before anything else can climb." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the seasonal and winter-driven terms that decide who wins February here." },
      { name: 'Build authority', desc: "Links and citations from trusted Hartford and industry sources to push your competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to real Hartford leads. We pour more into the terms that are paying and reach for the next town or service from there." },
    ],
    pricing: {
      heading: 'Transparent Hartford SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and towns.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Hartford-area search.', features: ['Everything in SEO Growth', 'Aggressive content + links', "Winter & seasonal SEO", 'Multi-location support', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Hartford?', a: "Most Hartford SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. The tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Hartford?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on low-competition terms and slower on the most contested Hartford keywords. SEO compounds, so the longer you run it, the bigger the gains get." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops the moment you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Hartford contractors do best running SEO as the long-term engine and ads for short-term spikes." },
      { q: "Should my Hartford SEO target winter demand?", a: "Absolutely. When ice dams and frozen pipes hit, searches for roofing, restoration, and HVAC spike overnight, and ranking takes months to build, so you have to be in place before the season rather than chasing it after. We optimize for those seasonal and freeze-driven terms ahead of time so your busiest months land on you." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. Higher tiers add winter-and-seasonal and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because Hartford's contested keywords need about that long to budge, then you run month-to-month. If the leads are not showing up, you walk." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "It is a growing slice of the work. We shape your content and schema so AI tools can read your business and name it when a Hartford homeowner asks them who to call, not only when someone runs a classic search." },
      { q: 'Which areas around Hartford do you cover?', a: "All of Greater Hartford and the surrounding towns: West Hartford, Glastonbury, Simsbury, Farmington, Avon, Canton, Wethersfield, South Windsor, East Hartford, Manchester and more, with genuine local pages rather than one generic Hartford page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "We build rankings and a Google presence that route the Hartford homeowner straight to you. The more of that visibility you own, the less you hand a broker for a lead that Glastonbury contractor down the road also bought." },
      { q: "What's in the free SEO audit?", a: "Where you sit in Hartford search today, the moves the firms above you are making, the fixes that will move you fastest, and a grounded timeline with the numbers run for your shop. No pitch deck, just a diagnosis of what your Hartford SEO needs to reach page one and turn organic traffic into booked jobs." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'hartford', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Hartford Web Design Company | OnwardCraft',
    metaDescription:
      "Hartford web design that turns visitors into booked jobs: fast, mobile-first sites built for contractors and ready for winter ice-dam-season demand.",
    eyebrow: 'Web Design · Hartford, CT',
    h1: 'Hartford Web Design that turns West Hartford visitors into booked jobs',
    h2Exact: 'Hartford Web Design Company',
    heroSubhead:
      "A handsome website that never generates a call is just an expensive brochure. We build Hartford contractors fast, mobile-first sites engineered to turn visitors into booked work, and tough enough to hold up when a winter storm sends West Hartford homeowners scrambling for help.",
    primaryCta: 'Get my free quote',
    intro:
      "Hartford Web Design is the difference between a site that books jobs and one that quietly bleeds leads: slow on a phone, call button buried, no clear offer anywhere. We close all of those leaks. As a Hartford web design company built for contractors, we ship fast, mobile-first websites that look like the established professional you actually are and turn West-Hartford-to-Glastonbury visitors into booked work, and that do not fall over when a winter storm sends a flood of damage-repair searches your way.",
    aioQuestion: 'What makes a good contractor website in Hartford?',
    aioAnswer:
      "A good Hartford contractor website loads fast on a phone, puts the call button and a clear offer above the fold, and proves trust with real reviews and project photos, because Hartford homeowners, many of them insurance and financial professionals, vet a contractor thoroughly before calling. The site also has to handle traffic spikes during winter storm season without slowing down, because that is when the highest-value jobs come in.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "Plenty of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next name on the map. We design every page around one job: turning a Hartford visitor into a booked lead." },
      { title: "It doesn't earn trust with research-minded homeowners", body: "Hartford's insurance and aerospace professionals approach hiring a contractor the way they approach a business decision: carefully and with homework done. A site that looks dated or thin on detail loses them in seconds. We build sites that look established and hand a skeptical homeowner the evidence they need to call." },
      { title: "It can't handle a winter-season surge", body: "After a snowstorm or a cold snap that pops ice dams everywhere, contractor sites get slammed with a flood of urgent traffic, and the slow ones buckle or bury the call button at the exact moment it matters most. We build sites that stay fast and keep converting under load, so you capture that demand instead of losing it to a faster competitor." },
    ],
    servicesHeading: "What's in an OnwardCraft Hartford website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your Hartford-area service area, and the exact jobs you want more of." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that is where most of your Hartford traffic lives. Fast, thumb-friendly, and easy to call from in one tap." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms set where a busy Hartford homeowner actually taps them. Every page points to one unmistakable next step." },
      { name: 'Copy that sells', desc: "Words that speak to a detail-oriented Hartford homeowner weighing a roof repair or a frozen-pipe emergency, not filler text that reads exactly like every other contractor in town." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank: clean structure, schema, fast load, and neighborhood-ready pages for West Hartford, Glastonbury, Farmington and beyond." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load quickly and clear Google's performance checks, which guards your conversions and your Hartford rankings in one pass." },
      { name: "Winter-surge ready", desc: "Built to stay fast and keep the call button front and center when storm-season traffic spikes, the exact moment that turns visitors into your biggest jobs of the year.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read your site and recommend your business as more Hartford search shifts toward AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, the Hartford-area towns you cover, the jobs that pay best, and the firms you are up against, then plan the site around booking more of that work." },
      { name: 'Design', desc: "We lay out a custom, mobile-first design built to convert. You see it and push back on it before we write a line of code." },
      { name: 'Build and copy', desc: "We build quickly and write copy aimed at a careful Hartford homeowner, with the call to action sitting front and center on every page." },
      { name: 'Launch', desc: "We ship cleanly, with the local-SEO foundation, tracking, and load speed all set from the first day live." },
      { name: 'Support and optimize', desc: "We keep the site fast and current and adjust it around whatever is actually turning Hartford visitors into phone calls." },
    ],
    pricing: {
      heading: 'Transparent Hartford web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', "Winter-surge ready"], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Hartford?', a: "Most Hartford contractor sites with us run $2,000 to $8,000 as a one-time build, set by page count and integrations. The tiers sit above: fixed price, no surprises, and the finished site is yours outright." },
      { q: 'How long does it take to build?', a: "A focused site runs about 2 to 4 weeks; a larger custom build runs 4 to 8. You get a firm timeline at the start and an update at every stage." },
      { q: "Will my site handle a winter traffic spike?", a: "Yes, and in Hartford that matters. After a snowstorm or a hard freeze, contractor sites take a flood of urgent traffic, and the slow ones lose leads right when demand peaks. We build fast and keep the call button obvious, so your site converts under load instead of buckling." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank, and pairing it with our SEO service is how you climb the competitive Hartford-area terms." },
      { q: 'Do I own the website?', a: "Completely. The site, the domain, and the content are yours from the start. Nobody holds your Hartford business hostage, and there is no platform you cannot walk away from." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where most of your Hartford traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We choose the platform that suits your business and that you can run yourself, usually WordPress or Webflow. In your free consult we name the right fit for your Hartford shop and lay out the tradeoffs in plain English." },
      { q: 'Do you offer ongoing support?', a: "Yes. Launch support comes with every build, and after that we keep affordable monthly maintenance available for updates, speed, and security." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time, fixed-price project. Any maintenance or SEO that follows runs month-to-month, so you can step away whenever you like." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Hartford-area site should include, and a fixed-price quote with a timeline. No pressure, just a plan for the Hartford Web Design that converts visitors into booked jobs." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'hartford', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Hartford Website Redesign | OnwardCraft',
    metaDescription:
      "Hartford Website Redesign that converts more without losing rankings. Faster, mobile-first rebuilds with an SEO-safe migration that hold up through winter.",
    eyebrow: 'Website Redesign · Hartford, CT',
    h1: 'Hartford Website Redesign that converts more and keeps your rankings before the first ice dam',
    h2Exact: 'Hartford Website Redesign Company',
    heroSubhead:
      "An outdated site quietly costs you jobs every week: slow, clumsy on a phone, easy for a research-minded Hartford homeowner to skip past. We redesign contractor sites to convert more and load faster, and we migrate so carefully that you keep every bit of ranking you have already earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Hartford Website Redesign usually goes one of two bad ways: the site looks prettier but converts exactly the same, or it launches and the rankings vanish overnight. We do neither. We rebuild Hartford contractor sites for speed and conversions, build them to survive winter-demand surges, and run an SEO-safe migration with the redirects and care that protect the traffic you have spent years building, so you redesign your Hartford website without losing rankings.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Hartford site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "On a high-ticket job, Hartford homeowners, many of them insurance and financial professionals, size you up by your site in seconds. An old, cluttered design quietly ships them to a competitor who simply looks more established, even when your work is plainly better. In the established West Hartford and Glastonbury market, that first impression decides who gets the call." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you are losing the majority of your Hartford visitors before they ever reach your offer. A redesign built mobile-first wins those visitors back and turns them into leads." },
      { title: "It can't keep up when winter demand surges", body: "Traffic that never turns into calls is wasted money, and an old site that slows to a crawl under a storm-season surge loses leads at the precise moment they are worth the most. We rebuild for conversions and for the days your phone should be ringing off the hook." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pin down exactly what is bleeding leads and rankings from your current Hartford site, so the rebuild fixes the real faults instead of repainting the same problems." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep every bit of the rankings and traffic you have already earned in Hartford." },
      { name: 'Conversion redesign', desc: "Clear offers, smarter call-to-action placement, and lead forms a Hartford homeowner will actually fill out. We design toward booked jobs, not a prettier screenshot." },
      { name: 'Speed overhaul', desc: "We rebuild for quick load and a passing Core Web Vitals score, which raises conversions and Hartford rankings together." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where most of your Hartford traffic actually lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the expectations of an educated Hartford clientele." },
      { name: "Winter-surge ready rebuild", desc: "Rebuilt to stay fast and keep converting when storm-season traffic spikes, so the new site captures your biggest winter jobs instead of choking on them.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as more Hartford search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We trace what is costing you Hartford leads and rankings, then plan a redesign that fixes it without breaking the parts already pulling their weight." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design that you review and reshape before we build a thing." },
      { name: 'Rebuild and migrate', desc: "We rebuild quickly and line up every redirect and SEO detail for a clean migration that holds onto your Hartford traffic." },
      { name: 'Launch with SEO care', desc: "We go live with the redirects already in place and watch the rankings closely so they hold and climb rather than slide." },
      { name: 'Optimize', desc: "After launch we tune around what is converting Hartford visitors into calls, and keep speed and updates current." },
    ],
    pricing: {
      heading: 'Transparent Hartford redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', "Winter-surge ready"], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Hartford?', a: "Most Hartford redesigns with us run $2,500 to $9,000 as a one-time project, set by size and integrations. Fixed price, no surprises, and the result is yours outright." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not when it is handled with care, which is the only way we do it. We map 301 redirects for every changed URL, keep your content and metadata, carry your schema across, and test on staging first. Done that way, a Hartford redesign holds your rankings and usually nudges them up." },
      { q: 'How long does a redesign take?', a: "A focused redesign runs about 3 to 5 weeks; a larger rebuild runs 5 to 9. You get a firm timeline at the start and an update at every stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is a pain to update, is not bringing in leads, or buckles when winter traffic surges, it is costing you work. The free audit tells you plainly whether a redesign is worth it for your Hartford business." },
      { q: 'Do you migrate my existing content?', a: "Yes. We bring your content across and sharpen it, protect the pages that already rank in Hartford search, and run the technical migration so nothing important slips through." },
      { q: "Will the new site handle winter-season traffic?", a: "Yes, and in Hartford that is a real consideration. After a snowstorm or a hard freeze knocks ice dams loose across the region, contractor sites take a surge of urgent traffic. We rebuild for speed and keep the call to action obvious so the site converts when demand peaks." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for quick load and Core Web Vitals, which raises conversions and Hartford rankings alike." },
      { q: 'Do I own the redesigned site?', a: "Completely: the site, the domain, and the content all stay with your Hartford business. No platform lock-in of any kind." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any maintenance or SEO that follows runs month-to-month." },
      { q: "What's in the free redesign audit?", a: "A plain read on what your current site costs you in lost Hartford leads and rankings, what the rebuild needs to fix, and a fixed-price quote with a timeline and a safe migration plan, so your Hartford Website Redesign rebuilds for leads while keeping every ranking you have earned." },
    ],
  },
];

export const hartfordCity = {
  citySlug: 'hartford', city: 'Hartford', state: 'Connecticut', stateAbbr: 'CT', metro: 'Hartford',

  titleTag: 'Hartford Marketing for Contractors | OnwardCraft',
  metaDescription:
    "Hartford marketing for contractors: web design, SEO, and local SEO that get you found, get you booked, and let you own your leads, all built for winter demand.",

  eyebrow: 'Hartford · Web Design, SEO & Lead Generation',
  h1: 'Hartford marketing for contractors that gets you found and booked before winter',
  h2Exact: 'Hartford Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Hartford's insurance-capital, freeze-thaw-winter market. One team to get you ranking, converting, and off the rented-lead treadmill for good.",
  heroProof: ['Built for the trades', "Ice-dam ready", 'No lock-in contracts'],
  primaryCta: 'Get my free Hartford audit',

  intro:
    "Hartford marketing for contractors starts with one hard truth: you are selling to some of the most research-minded homeowners in the country, actuaries, underwriters, and aerospace engineers who compare contractors the way they compare investment options. The region's 1700-to-1920 housing stock keeps demand for specialist work constant, and the winters here pile on ice dams and freeze-thaw damage that reward the contractors already ranking. Winning takes three things working together: a site that earns trust and converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack, all locked in before the next storm hits. Here is exactly how we help Hartford contractors pull that off.",
  aioQuestion: 'How do Hartford contractors get more leads online?',
  aioAnswer:
    "Hartford contractors get more leads by combining a fast, professional website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack. Because Hartford homeowners are unusually research-driven and the region faces hard, icy winters, the contractors who look established online and already rank before the storm win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Hartford searches \"near me.\" The single highest-return move for most local businesses, and how you catch winter-storm demand before it goes to a competitor.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your Hartford customers actually search, build an asset you own instead of renting traffic from ads, and measure the whole thing in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, professional websites that earn the trust of research-minded Hartford homeowners and turn visitors into booked jobs, not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it so carefully that you keep every bit of ranking you have already earned in Hartford search.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Hartford?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads, and so they are ready when winter hits and every homeowner needs help at once." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors, so we understand emergency calls, freeze-driven demand, and the restoration work that comes with Hartford's older homes." },
    { q: "Why does winter matter for my marketing?", a: "When a cold snap drives ice dams up the eaves and freeze-thaw splits pipes across Hartford County, demand for roofing, restoration, and HVAC spikes overnight and the backlog can run for weeks. Ranking takes months to build, so the contractors already visible before the storm take that work. We get you in place ahead of season." },
    { q: 'How much does it cost to work with you?', a: "Websites for Hartford contractors are one-time builds from $2,000 to $9,000. SEO and local SEO run month-to-month from $750 to $3,000, with no long contract. We pin down the exact scope in your free audit." },
    { q: 'Which Hartford areas do you serve?', a: "All of Greater Hartford and the surrounding towns: West Hartford, Glastonbury, Simsbury, Farmington, Avon, Canton, Wethersfield, South Windsor, East Hartford, Manchester, Newington, Rocky Hill, Windsor, Enfield, and more." },
    { q: 'Where should I start?', a: "Start with a free Hartford audit. We look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a plan for the Hartford marketing for contractors that actually gets you found and booked." },
  ],
};
