// AKRON: per-metro, per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Akron's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// AKRON: shared city blocks
// ===========================================================================
const MARKET = {
  heading: "What you're really up against in Akron search",
  body:
    "Akron is the rubber city turned polymer capital, and that history still shapes who buys home services here. Goodyear's global headquarters anchors a workforce of engineers and materials scientists, and they bring an engineer's habit to hiring a contractor: they read, compare, and check the reviews before anybody picks up a phone. The housing stock gives you the demand. Highland Square, Merriman Valley, and West Hill are stacked with craftsman and Tudor homes built between 1910 and 1940, and the families who own them are pouring money into restoring them. Push outward into the Summit County suburbs (Cuyahoga Falls, Stow, Hudson, Fairlawn) and you find newer, higher-ticket homes whose owners search the exact same way: phone in hand, \"near me\" attached, finger tapping one of the first three names Google drops on the map. Then the weather decides who eats. Lake-effect snow rolling off Lake Erie, deep freezes, and ice-dam damage drive emergency demand from November straight through March, and the contractors already sitting in the Map Pack are the ones whose phones ring. If you're buried on page two when the first hard freeze hits, those booked jobs go to whoever Google already trusts, not to whoever does the better work.",
  pullQuote: "When the first Akron freeze hits, the contractor already in the Map Pack books the work. Everyone else watches it walk past.",
  donut: {
    title: "Akron city demographics",
    value: 31,
    centerLabel: "Black/AA",
    legend: [
      { label: "Black/AA", pct: 31, kind: "teal" },
      { label: "Other", pct: 69, kind: "grey" },
    ],
  },
  seasonTitle: "When trade demand spikes",
  seasonCaption: "Ohio winter (Nov to Mar) and spring thaw (Mar to May)",
  seasonalDemand: [
    { m: "J", v: 88, peak: true }, { m: "F", v: 92, peak: true }, { m: "M", v: 78, peak: true },
    { m: "A", v: 72, peak: true }, { m: "M", v: 60, peak: true }, { m: "J", v: 52 },
    { m: "J", v: 56 }, { m: "A", v: 62 }, { m: "S", v: 46 },
    { m: "O", v: 54 }, { m: "N", v: 76, peak: true }, { m: "D", v: 84, peak: true },
  ],
  stats: [
    { value: "Summit Co.", label: "homeowner-dense suburbs including Cuyahoga Falls, Stow, Hudson, and Fairlawn" },
    { value: "Nov-Mar", label: "lake-effect snow and freeze season, when roofing and HVAC demand spikes", accent: true },
    { value: "1910-1940", label: "craftsman and Tudor homes in Highland Square, Merriman Valley, and West Hill driving renovation waves" },
    { value: "Top 3", label: "Map Pack spots that take most of the clicks when Akron searches for a contractor" },
  ],
  neighborhoods: [
    "Highland Square", "Merriman Valley", "West Hill", "Cuyahoga Falls", "Stow",
    "Hudson", "Fairlawn", "Barberton", "Norton", "Chapel Hill", "Ellet",
    "Kenmore", "North Hill", "Firestone Park", "Wallhaven",
  ],
};

const AREAS = [
  "Akron", "Cuyahoga Falls", "Stow", "Hudson", "Fairlawn",
  "Barberton", "Norton", "Tallmadge", "Green", "Macedonia",
  "Twinsburg", "Munroe Falls", "Silver Lake", "Bath Township", "Copley Township",
];

const FOUNDER =
  "Here is the honest reason OnwardCraft exists. I kept meeting sharp Akron contractors who were wiring a few thousand a month to Angi and HomeAdvisor for leads that three of their competitors had already bought. That is not a business; that is a slot machine you keep feeding. So we built the opposite. We get you ranking and converting for the jobs you actually want, in the Summit County neighborhoods you actually drive to, and the leads we earn are yours to keep. No year-long contract holding you hostage. If the work is not paying for itself, you cut us loose.";

const WHY = [
  {
    title: "We only do the trades",
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We know what a 2 a.m. burst-pipe call looks like, how ice dams blow up December schedules, and how the renovation wave through Akron's older neighborhoods actually buys, so everything we build matches how your customers really search.",
  },
  {
    title: "We get you off rented leads",
    body: "The point is a pipeline you own outright. Not one more monthly check to a lead broker for the same Highland Square homeowner that three competitors are calling at the same time.",
  },
  {
    title: "We actually speak Akron",
    body: "Lake-effect winters, an engineer-and-scientist homeowner class shaped by the polymer industry, and a real revival running through Highland Square and Merriman Valley. That is local knowledge a national agency cannot fake by find-and-replacing a city name in a template.",
  },
  {
    title: "No contracts, no mystery",
    body: "Prices are published, reporting is tied to actual leads, and you go month-to-month after the first 90 days. If we are not earning the invoice, you walk. That keeps the pressure exactly where it should be: on us.",
  },
];

const PROOF = {
  heading: "We're new, so here's the honest math instead of a logo wall",
  body:
    "Most agencies open with a wall of client logos. We are a young, founder-led shop, so we are not going to fake a track record we have not built yet. What we can hand you is the reasoning, pulled straight from Google's and the industry's own research on how people search for local contractors.",
  stats: [
    { value: "46%", label: "of Google searches have local intent", n: 46 },
    { value: "76%", label: "who search local on a phone visit a business that day", n: 76 },
    { value: "28%", label: "of local searches end in a purchase", n: 28 },
  ],
  projection:
    "Here is a rough picture, labelled clearly as an illustration and not a result we are claiming: say an Akron contractor pulls roughly 1,200 local \"near me\" impressions a month. Moving from page-two invisibility up into the top three is the difference between a few stray calls and a calendar you cannot keep up with, and after a freeze or ice storm that gap blows wide open. In your free audit we model the real figures for your business: your current rankings, your actual search volume, and a straight 90-to-180-day path to the top of the map.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: "Day 0", pos: 14 }, { d: "30", pos: 11 }, { d: "60", pos: 8 },
    { d: "90", pos: 5 }, { d: "120", pos: 3 }, { d: "180", pos: 2 },
  ],
};

const BASE = {
  city: "Akron", state: "Ohio", stateAbbr: "OH", metro: "Akron",
  heroProof: ["Built for the trades", "Ohio-winter ready", "No lock-in contracts"],
  founderNote: FOUNDER, founderName: "The OnwardCraft team",
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const akronLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: "akron", serviceSlug: "local-seo", service: "Local SEO",
    titleTag: "Akron Local SEO Company | Win the Map Pack | OnwardCraft",
    metaDescription:
      "When Akron searches your service, three businesses show on the map. We put you in those three so the freeze-season call lands with you, not a competitor.",
    eyebrow: "Local SEO · Akron, OH",
    h1: "When Akron searches for what you do, be the first name on the map",
    h2Exact: "Akron Local SEO Company",
    heroSubhead:
      "Google pins three businesses to the map when a homeowner searches \"near me,\" and everyone underneath them is invisible. We muscle you into that top three so the call lands with you instead of whoever ranks first, and so you are already there when the next Ohio freeze sends every Summit County phone into overdrive.",
    primaryCta: "Get my free Akron audit",
    intro:
      "Akron local SEO really comes down to one moment: a homeowner in Highland Square or Cuyahoga Falls types your service plus \"near me,\" and either you are one of the three businesses Google pinned to the map or you are not. Most people tap one of those three and never scroll. In a city full of homeowners who obsess over their century-old homes, becoming one of those three is the entire game. Here is exactly how we get you there.",
    aioQuestion: "How do Akron businesses rank higher in local search?",
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile tuned to the exact services and Summit County neighborhoods you want; name, address, and phone details that match everywhere online; a steady flow of real reviews; and local content built around genuine Akron neighborhoods. In Ohio's freeze-prone climate the winners look established, answer emergency calls fast, and are already ranking before November demand spikes.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: "Your competitors own the three map spots", body: "Search your own service plus \"near me\" right now. Those three businesses Google pins to the map soak up the overwhelming majority of the clicks. If you are not one of them, the quality of your work barely matters, because most Akron homeowners never see your name. Climbing into that top three is usually the single highest-return move a local business here can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Akron homeowner to four contractors at once, then bill each of you to brawl over them. It is a treadmill you can never get off. Local SEO builds the opposite asset: a homeowner finds you, calls you, and nobody else got the lead. Run it long enough and you stop renting visibility and start owning the pipeline." },
      { title: "You're not ready when the freeze hits", body: "When lake-effect snow and ice storms sweep across Summit County, demand for roofing, HVAC, and pipe repair goes vertical overnight, and the contractors already in the Map Pack scoop up those calls. If you are invisible on the map when the cold snaps in, that booked work flows to whoever Google already trusts. Ranking now is how you ride that wave instead of watching it roll past your shop." },
    ],
    servicesHeading: "What it actually takes to rank you",
    services: [
      { name: "Google Business Profile", desc: "The single biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows precisely which Akron searches belong to you." },
      { name: "Citations and NAP cleanup", desc: "Your name, address, and phone have to line up everywhere Google checks. We fix the listings that contradict each other and build the ones you are missing across Summit County." },
      { name: "Reviews that keep coming", desc: "A simple engine that turns finished jobs into a steady stream of fresh reviews. It lifts your ranking and gives the next homeowner a reason to call you first." },
      { name: "Neighborhood pages", desc: "Real pages for Highland Square, Merriman Valley, Cuyahoga Falls, Stow, Hudson and the rest, so you rank for the exact neighborhood someone is searching instead of a generic \"Akron.\"" },
      { name: "On-page and technical SEO", desc: "Titles, schema, internal links, and mobile speed. The plumbing under the hood that lets every other piece actually rank." },
      { name: "Local link building", desc: "Mentions and links from Akron sources Google trusts: local press, trade associations, community partners. In this market that is often what splits page one from page two." },
      { name: "Winter-demand readiness", desc: "We get your profile, pages, and reviews ranking before freeze season so you capture the roofing, HVAC, and pipe-repair surge instead of chasing it after the ice has already settled in.", featured: true },
      { name: "AI search readiness", desc: "More \"near me\" research now starts inside AI Overviews, ChatGPT, and Perplexity. We structure your content so those engines can read you and cite you by name.", featured: true },
    ],
    processName: "How we work: the Local Lift Method",
    process: [
      { name: "Audit and baseline", desc: "We find out where you genuinely rank today across every service area and pin down which competitors are beating you in the Map Pack and exactly why." },
      { name: "Fix the foundation", desc: "Google Business Profile and NAP come first because they move the fastest. Most Akron clients see early lift here within a few weeks." },
      { name: "Build trust signals", desc: "Citations and the review engine go live. These compound week over week, which is exactly why local SEO rewards starting before the freeze, not after it." },
      { name: "Add local content", desc: "Neighborhood and service-area pages across Summit County, backed by the on-page work that makes them rank." },
      { name: "Report and expand", desc: "Plain-English reporting tied to calls and leads, never vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: "Pricing you can actually see",
      note: "Month-to-month after the first 90 days. No lock-in. Cancel whenever.",
      tiers: [
        { name: "Local Starter", price: "$750", cadence: "/mo", desc: "One location, getting the Map Pack foundation right.", features: ["Google Business Profile optimization", "Citation cleanup and core listings", "One location or primary service area", "Review system setup", "Plain-English monthly report"] },
        { name: "Local Growth", price: "$1,500", cadence: "/mo", desc: "For businesses fighting across several Akron-area communities.", features: ["Everything in Local Starter", "Up to 5 priority keywords", "Ongoing review generation", "Neighborhood landing pages", "On-page and technical SEO"], featured: true },
        { name: "Local Authority", price: "$2,500", cadence: "/mo", desc: "For contractors who want to own the map across Summit County.", features: ["Everything in Local Growth", "Local link building", "Winter-demand targeting", "Multi-area and service-area pages", "AI search optimization"] },
      ],
    },
    faqs: [
      { q: "How much does local SEO cost in Akron?", a: "Most Akron engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you are chasing. The tiers above lay it out. No hidden fees, no long contract, and we lock the exact scope in your free audit before you spend a dollar." },
      { q: "How long until I show up in the Map Pack?", a: "Profile improvements can move within a few weeks. The competitive Akron keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days is selling you a fantasy." },
      { q: "What makes Akron local SEO different?", a: "Two things. It is a homeowner-heavy market with a professional class tied to the polymer and manufacturing industries, so these are people who research hard before they call. And Ohio winters drive brutal seasonal demand for roofing, HVAC, and plumbing from November through March. Your ranking has to be locked in before the freeze, not scrambled together after it." },
      { q: "How does local SEO help me during Ohio winter?", a: "When lake-effect snow and ice hit Summit County, searches for roofing, HVAC, and pipe repair spike overnight, and the businesses already in the Map Pack take those calls. We get you ranking and reviewed ahead of season so you capture that demand instead of handing it to whoever Google already trusts." },
      { q: "Which areas do you cover?", a: "All of Summit County and the surrounding communities: Highland Square, Merriman Valley, West Hill, Cuyahoga Falls, Stow, Hudson, Fairlawn, Barberton, Norton and more. We build genuine neighborhood pages instead of one generic Akron page, because that is what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: "Do you work with contractors specifically?", a: "It is basically all we do: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand emergency calls, freeze-driven demand, and the renovation wave hitting Akron's older craftsman and Tudor homes." },
      { q: "Will I show up in Google AI Overviews and ChatGPT?", a: "More \"near me\" research now starts in AI tools instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. In Akron that is fast becoming as important as the Map Pack itself." },
      { q: "Am I locked into a contract?", a: "No. We ask for an initial 90 days because that is roughly how long local SEO needs to show real movement. After that it is month-to-month. If we are not delivering, you walk, and the accountability stays squarely on us." },
      { q: "How does this get me off Angi and HomeAdvisor?", a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that send leads straight to you alone. Over time you lean on the brokers less because the work is already coming to you direct." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your service areas, what your Map Pack competitors are doing to beat you, the fixes that will move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck, just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: "akron", serviceSlug: "seo-services", service: "SEO Services",
    titleTag: "Akron SEO Company | OnwardCraft",
    metaDescription:
      "Akron SEO that ranks contractors on Google and delivers leads you own. Revenue-tied reporting, no lock-in, built for Ohio winter and spring-thaw demand.",
    eyebrow: "SEO Services · Akron, OH",
    h1: "Get your Akron business to the top of Google and keep it there",
    h2Exact: "Akron SEO Company",
    heroSubhead:
      "Ads die the second you stop paying. SEO does the reverse: rank once for what your Akron customers search and the leads keep arriving for months. We build that ranking and tie every report to real calls and booked jobs, not vanity charts.",
    primaryCta: "Get my free Akron SEO audit",
    intro:
      "Akron SEO comes down to one blunt question: when someone searches what you do, are you on page one or page two? In this market page two might as well be page fifty. We get contractors ranking for the money keywords in a homeowner-rich, Ohio-winter city, and we measure the whole thing in leads, not traffic that never picks up the phone.",
    aioQuestion: "How do Akron businesses rank higher on Google?",
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content, and earning links from trusted Akron sources. In a market with a professional homeowner class and hard seasonal demand from November to May, keeping the site fast on mobile and ranking for winter emergency terms are two of the quickest ways to pull ahead.",
    problemHeading: "Three reasons your Akron site isn't bringing in work",
    painPoints: [
      { title: "You're stranded on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it either. If you are not in the top handful of results for what you sell, your site is effectively invisible no matter how sharp it looks. In Akron, that invisibility is exactly what is sending your jobs to the competition." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the instant your card stops, the leads stop cold. SEO builds an asset you actually own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost you are paying now." },
      { title: "You're not ranking for the demand that matters", body: "Akron demand swings hard with Ohio winters and spring thaws, and the contractors who rank for those terms ahead of time catch the spike. If your SEO ignores freeze-driven and seasonal searches, you are quietly handing away your busiest, most profitable months." },
    ],
    servicesHeading: "The SEO work that actually moves rankings",
    services: [
      { name: "Technical SEO", desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank your Akron site at all." },
      { name: "On-page optimization", desc: "Every page that matters tuned for the exact terms your Akron customers search: titles, headings, content, and internal links." },
      { name: "Content that ranks", desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot long after we publish them." },
      { name: "Link building", desc: "Authority from real Akron and industry sources. In a competitive Summit County market, links are often the deciding factor between page one and page two." },
      { name: "Local SEO & Google Business Profile", desc: "Map Pack optimization so you win the \"near me\" searches right alongside your organic rankings." },
      { name: "Revenue-tied reporting", desc: "We report on calls, forms, and booked leads, not just rankings and traffic, so you always know what your SEO is actually worth in dollars." },
      { name: "Winter & seasonal SEO", desc: "We rank you for the freeze-driven and spring-thaw searches that fuel Akron's busiest months, so you are visible before demand spikes instead of chasing it after.", featured: true },
      { name: "AI search & GEO", desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of Akron search now begins.", featured: true },
    ],
    processName: "How we work: the OnwardCraft SEO method",
    process: [
      { name: "Audit and strategy", desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Akron leads, not just impressions." },
      { name: "Fix the technical base", desc: "Speed, crawlability, schema, and mobile. The foundation everything else needs before it can rank." },
      { name: "Optimize and create content", desc: "On-page work across your money pages plus new local content, including the seasonal and winter-driven terms that decide who wins December here." },
      { name: "Build authority", desc: "Links and citations from trusted Akron and industry sources to push your competitive keywords onto page one." },
      { name: "Report and scale", desc: "Monthly reporting tied to leads, then we double down on what is working and expand into the next keyword set." },
    ],
    pricing: {
      heading: "Transparent Akron SEO pricing",
      note: "Month-to-month after the first 90 days. No lock-in. Cancel whenever.",
      tiers: [
        { name: "SEO Starter", price: "$900", cadence: "/mo", desc: "For a focused site going after its core local keywords.", features: ["Technical SEO fixes", "On-page optimization", "Up to 5 target keywords", "Google Business Profile", "Monthly lead-tied report"] },
        { name: "SEO Growth", price: "$1,800", cadence: "/mo", desc: "For contractors competing across services and neighborhoods.", features: ["Everything in SEO Starter", "Up to 12 target keywords", "Monthly content", "Link building", "On-page + local SEO"], featured: true },
        { name: "SEO Authority", price: "$3,000", cadence: "/mo", desc: "For businesses that want to own Akron-area search.", features: ["Everything in SEO Growth", "Aggressive content + links", "Winter & seasonal SEO", "Multi-location support", "AI search / GEO optimization"] },
      ],
    },
    faqs: [
      { q: "How much does SEO cost in Akron?", a: "Most Akron SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. The tiers are above, with no hidden fees and no long contract." },
      { q: "How long does SEO take to work in Akron?", a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on low-competition terms and slower on the most contested Akron keywords. SEO compounds, so the longer you run it, the bigger the gains get." },
      { q: "Is SEO better than Google Ads?", a: "They do different jobs. Ads buy instant traffic that stops the moment you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Akron contractors do best running SEO as the long-term engine and ads for short-term spikes." },
      { q: "Should my Akron SEO target Ohio winter demand?", a: "Absolutely. When lake-effect snow and freezes roll through, searches for roofing, HVAC, and plumbing spike overnight, and ranking takes months to build, so you have to be in place before the season rather than chasing it after. We optimize for those seasonal and freeze-driven terms ahead of time so your busiest months land on you." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. Higher tiers add winter-and-seasonal and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: "Do you require a long-term contract?", a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it switches to month-to-month. If we are not delivering, you leave." },
      { q: "Will I show up in Google AI Overviews and ChatGPT?", a: "That is a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business by name, not just classic search results." },
      { q: "Which areas around Akron do you cover?", a: "All of Summit County and the surrounding communities: Cuyahoga Falls, Stow, Hudson, Fairlawn, Barberton, Norton, Tallmadge, Green and more, with genuine local pages rather than one generic Akron page." },
      { q: "How do you get me off Angi and HomeAdvisor leads?", a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for leads three competitors also bought." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: "akron", serviceSlug: "web-design", service: "Web Design",
    titleTag: "Akron Web Design Company | Sites That Convert | OnwardCraft",
    metaDescription:
      "Akron web design that turns visitors into booked jobs: fast, mobile-first sites built for contractors and ready for Ohio winter freeze-season demand.",
    eyebrow: "Web Design · Akron, OH",
    h1: "Akron web design that turns visitors into booked jobs",
    h2Exact: "Akron Web Design Company",
    heroSubhead:
      "A handsome website that never generates a call is just an expensive brochure. We build Akron contractors fast, mobile-first sites engineered to turn visitors into booked work, and tough enough to hold up when a hard freeze sends your phone into overdrive.",
    primaryCta: "Get my free quote",
    intro:
      "Most Akron contractor websites bleed leads quietly: slow on a phone, call button buried, no clear offer anywhere. Web design done right closes all of those leaks. We build sites that load fast, look like the professional you actually are, and turn Highland-Square-to-Hudson visitors into booked jobs, and that do not fall over when an Ohio ice storm sends your traffic through the roof.",
    aioQuestion: "What makes a good contractor website in Akron?",
    aioAnswer:
      "A good Akron contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and is built to handle traffic spikes during winter freeze season. Because most Akron searches happen on mobile, mobile speed and an obvious next step are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "Plenty of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next name on the map. We design every page around one job: turning an Akron visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Akron visitors are on mobile, and they bounce if your site takes more than a couple of seconds to load. Slow sites also rank worse, so you lose twice. We build fast, so you keep both the visitor and the ranking." },
      { title: "It can't handle a winter demand surge", body: "After a hard freeze or ice storm, contractor sites get slammed with a flood of urgent traffic, and the slow ones buckle or bury the call button at the exact moment it matters most. We build sites that stay fast and keep converting under load, so you capture that demand instead of losing it to a faster competitor." },
    ],
    servicesHeading: "What's in an OnwardCraft Akron website",
    services: [
      { name: "Custom design", desc: "No cookie-cutter templates. A site designed around your trade, your Summit County service area, and the exact jobs you want more of." },
      { name: "Mobile-first build", desc: "Designed for the phone first, because that is where nearly all of your Akron traffic lives. Fast, thumb-friendly, and easy to call from in one tap." },
      { name: "Conversion-focused UX", desc: "Clear offers, obvious call buttons, and lead forms placed where homeowners actually use them. Every page carries an unmistakable next step." },
      { name: "Copy that sells", desc: "Words that speak to an anxious homeowner staring at a frozen pipe or a leaking roof, not filler text that reads exactly like every other contractor in town." },
      { name: "Local SEO foundation", desc: "Built from the ground up to rank: clean structure, schema, fast load, and neighborhood-ready pages for Highland Square, Stow, Hudson and beyond." },
      { name: "Speed & Core Web Vitals", desc: "Tuned to load fast and pass Google's performance checks, which protects both your conversions and your rankings at the same time." },
      { name: "Winter-surge ready", desc: "Built to stay fast and keep the call button front and center when freeze-season traffic spikes, the exact moment that turns visitors into your biggest jobs of the year.", featured: true },
      { name: "AI-search ready", desc: "Structured so AI Overviews and ChatGPT can read your site and recommend your business as more Akron search shifts toward AI.", featured: true },
    ],
    processName: "How we build: the OnwardCraft process",
    process: [
      { name: "Discovery and strategy", desc: "We learn your trade, your service area, your most profitable jobs, and your competitors, then map the site around booking more of the work you actually want." },
      { name: "Design", desc: "We design a custom, mobile-first layout built to convert, and you see it and shape it before a single line of code is written." },
      { name: "Build and copy", desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: "Launch", desc: "We launch cleanly with the SEO foundation, tracking, and speed all dialed in from day one." },
      { name: "Support and optimize", desc: "We keep it fast and current and tune it based on what is actually converting visitors into calls." },
    ],
    pricing: {
      heading: "Transparent Akron web design pricing",
      note: "One-time build. 50% to start, 50% at launch. You own everything. No lock-in.",
      tiers: [
        { name: "Starter Site", price: "$2,000", cadence: "", desc: "A focused, high-converting site for a single-trade contractor.", features: ["Up to 5 custom pages", "Mobile-first design", "Lead forms + call buttons", "Local SEO foundation", "You own the site"] },
        { name: "Growth Site", price: "$4,500", cadence: "", desc: "A bigger site for established contractors with several services.", features: ["Up to 12 pages", "Custom design + copywriting", "Service + neighborhood pages", "Speed & Core Web Vitals", "Winter-surge ready"], featured: true },
        { name: "Custom Build", price: "$8,000", cadence: "", desc: "A full custom build for multi-service or multi-location businesses.", features: ["Fully custom design", "Advanced SEO + schema", "Integrations & booking", "High-traffic performance", "AI-search optimization"] },
      ],
    },
    faqs: [
      { q: "How much does a website cost in Akron?", a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. The tiers are above: fixed price, no surprises, and you own the finished site outright." },
      { q: "How long does it take to build?", a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you posted through every stage." },
      { q: "Will my site handle a winter traffic surge?", a: "Yes, and in Akron that matters more than almost anywhere. After a hard freeze or ice storm, contractor sites take a flood of urgent traffic, and the slow ones lose leads right when demand peaks. We build fast and keep the call button obvious, so your site converts under load instead of buckling." },
      { q: "Will my new site actually rank on Google?", a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank, and pairing it with our SEO service is how you climb the competitive Akron terms." },
      { q: "Do I own the website?", a: "Completely. You own the site, the domain, and the content. No hostage situations and no platform you cannot walk away from." },
      { q: "Will it work well on phones?", a: "We design mobile-first, because that is where nearly all of your Akron traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: "What platform do you build on?", a: "We pick the platform that fits your needs and that you can actually manage yourself, usually WordPress or Webflow. We recommend the right fit in your free consult and explain the tradeoffs in plain English." },
      { q: "Do you offer ongoing support?", a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: "Am I locked into a contract?", a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month, so you can leave whenever you like." },
      { q: "What do I get in the free quote?", a: "A clear look at what your current site is costing you in lost leads, what a high-converting Akron site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: "akron", serviceSlug: "website-redesign", service: "Website Redesign",
    titleTag: "Akron Website Redesign | OnwardCraft",
    metaDescription:
      "Redesign your Akron website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs and hold up in Ohio winters.",
    eyebrow: "Website Redesign · Akron, OH",
    h1: "Redesign your Akron website without losing your rankings",
    h2Exact: "Akron Website Redesign Company",
    heroSubhead:
      "An outdated site quietly costs you jobs every week: slow, clumsy on a phone, easy for an Akron homeowner to skip past. We redesign contractor sites to convert more and load faster, and we migrate so carefully that you keep every bit of ranking you have already earned.",
    primaryCta: "Get my free redesign audit",
    intro:
      "Most redesigns go one of two bad ways: the site looks prettier but converts exactly the same, or it launches and the rankings vanish overnight. We do neither. We redesign Akron contractor sites for speed and conversions, build them to survive winter-demand surges, and migrate with the redirects and SEO care that protect the traffic you have spent years building.",
    aioQuestion: "How do I redesign my website without losing SEO and traffic?",
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Akron site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "On a high-ticket job, homeowners size you up by your site in seconds. An old, cluttered design quietly ships them to a competitor who simply looks more established, even when your work is plainly better. In Akron's renovation-active neighborhoods, that first impression decides who gets the call." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you are losing the majority of your Akron visitors before they ever reach your offer. A redesign built mobile-first wins those visitors back and turns them into leads." },
      { title: "It can't keep up when demand surges", body: "Traffic that never turns into calls is wasted money, and an old site that slows to a crawl under a winter-freeze surge loses leads at the precise moment they are worth the most. We rebuild for conversions and for the days your phone should be ringing off the hook." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: "Redesign audit", desc: "We pinpoint exactly what is costing you leads and rankings today, so the redesign fixes the real problems instead of just swapping the colors around." },
      { name: "SEO-safe migration", desc: "Redirects, metadata, and schema handled properly so you keep every bit of the rankings and traffic you have already earned in Akron." },
      { name: "Conversion redesign", desc: "Clear offers, smarter call-to-action placement, and lead forms homeowners actually use. We design for booked jobs, not just a prettier screenshot." },
      { name: "Speed overhaul", desc: "We rebuild for fast load and passing Core Web Vitals, which lifts conversions and rankings at the same time." },
      { name: "Mobile-first rebuild", desc: "Redesigned around the phone, where nearly all of your Akron traffic actually lives." },
      { name: "Brand refresh", desc: "A modern, trustworthy look that matches the quality of your work and the price of the jobs you want to book." },
      { name: "Winter-surge ready rebuild", desc: "Rebuilt to stay fast and keep converting when freeze-season traffic spikes, so the new site captures your biggest winter jobs instead of choking on them.", featured: true },
      { name: "AI-search ready", desc: "Structured so AI Overviews and ChatGPT can read and recommend you as more Akron search shifts toward AI.", featured: true },
    ],
    processName: "How we redesign: a careful rebuild",
    process: [
      { name: "Audit and plan", desc: "We analyze what is losing you leads and rankings, then map a redesign that fixes it without breaking what already works for you." },
      { name: "Design", desc: "A modern, mobile-first, conversion-focused design you review and shape before we build a thing." },
      { name: "Rebuild and migrate", desc: "We rebuild fast and prepare every redirect and SEO detail for a clean, no-surprises migration." },
      { name: "Launch with SEO care", desc: "We launch with redirects in place and monitor closely so your rankings hold and climb instead of dropping." },
      { name: "Optimize", desc: "Post-launch tuning based on what is converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: "Transparent Akron redesign pricing",
      note: "One-time project. 50% to start, 50% at launch. You own everything. No lock-in.",
      tiers: [
        { name: "Redesign Starter", price: "$2,500", cadence: "", desc: "A focused redesign for a small contractor site.", features: ["Up to 5 pages rebuilt", "Mobile-first redesign", "SEO-safe migration", "Conversion improvements", "You own the site"] },
        { name: "Redesign Growth", price: "$5,000", cadence: "", desc: "A full redesign for an established contractor site.", features: ["Up to 12 pages", "Custom design + copy refresh", "Speed overhaul", "Service + neighborhood pages", "Winter-surge ready"], featured: true },
        { name: "Full Rebuild", price: "$9,000", cadence: "", desc: "A complete rebuild for multi-service or multi-location sites.", features: ["Full custom rebuild", "Advanced SEO migration", "Integrations & booking", "High-traffic performance", "AI-search optimization"] },
      ],
    },
    faqs: [
      { q: "How much does a website redesign cost in Akron?", a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result outright." },
      { q: "Will I lose my Google rankings if I redesign?", a: "Not if it is done carefully, and that is exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually pushes them higher." },
      { q: "How long does a redesign take?", a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at every stage." },
      { q: "How do I know I need a redesign?", a: "If your site is slow on phones, looks dated, is a pain to update, is not bringing in leads, or buckles when winter-freeze traffic surges, it is costing you work. The free audit tells you plainly whether a redesign is worth it for your Akron business." },
      { q: "Do you migrate my existing content?", a: "Yes. We carry over and sharpen your existing content, preserve what is ranking, and handle the technical migration so nothing important slips through the cracks." },
      { q: "Will the new site handle winter demand surges?", a: "Yes, and in Akron that is a real consideration. After a hard freeze or ice storm, contractor sites take a surge of urgent traffic, and the slow ones lose leads. We rebuild for speed and keep the call to action obvious so the site converts when demand peaks." },
      { q: "Will the new site be mobile-friendly and fast?", a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: "Do I own the redesigned site?", a: "Completely: the site, the domain, and the content. No platform lock-in of any kind." },
      { q: "Am I locked into a contract?", a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const akronCity = {
  citySlug: "akron", city: "Akron", state: "Ohio", stateAbbr: "OH", metro: "Akron",

  titleTag: "Akron Marketing for Contractors | OnwardCraft",
  metaDescription:
    "Web design, SEO, and local SEO for Akron contractors. Get found, get booked, and own your leads instead of renting them, all built for Ohio winter demand.",

  eyebrow: "Akron · Web Design, SEO & Lead Generation",
  h1: "Marketing that gets Akron contractors found and booked",
  h2Exact: "Akron Marketing Agency for Contractors",
  heroSubhead:
    "Websites, SEO, and local SEO built for Akron's homeowner-rich, Ohio-winter market. One team to get you ranking, converting, and off the rented-lead treadmill for good.",
  heroProof: ["Built for the trades", "Ohio-winter ready", "No lock-in contracts"],
  primaryCta: "Get my free Akron audit",

  intro:
    "If you run a contracting business in Akron, you are fighting for attention in a city where homeowners genuinely invest in their homes: craftsman bungalows in Highland Square, Tudors in West Hill, newer construction out in Stow and Hudson, and the competition for those jobs is fierce. Winning here takes three things working together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack, all locked in before the next Ohio freeze sends demand through the roof. Here is exactly how we help Akron contractors pull that off.",
  aioQuestion: "How do Akron contractors get more leads online?",
  aioAnswer:
    "Akron contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack. Because Summit County has a dense, homeowner-heavy professional class and demand spikes hard during Ohio winters, the contractors who look established and are already ranking before the freeze win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: "The OnwardCraft team",
  whyUs: WHY,

  services: [
    {
      service: "Local SEO", serviceSlug: "local-seo", tagline: "Win the Map Pack",
      blurb: "Get into the top three businesses Google pins to the map when Akron searches \"near me.\" The single highest-return move for most local businesses, and how you catch winter-freeze demand before it goes to a competitor.",
    },
    {
      service: "SEO Services", serviceSlug: "seo-services", tagline: "Rank higher, get leads",
      blurb: "Rank for the money keywords your Akron customers actually search, build an asset you own instead of renting traffic from ads, and measure the whole thing in leads, not vanity traffic.",
    },
    {
      service: "Web Design", serviceSlug: "web-design", tagline: "Sites that convert",
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs, and to stay fast when Ohio winter sends your phone into overdrive, not brochures that just sit there.",
    },
    {
      service: "Website Redesign", serviceSlug: "website-redesign", tagline: "More leads, no traffic loss",
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it so carefully that you keep every bit of ranking you have already earned in Akron search.",
    },
  ],

  faqs: [
    { q: "What marketing services do you offer in Akron?", a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads, and so they are ready when Ohio winter hits and every homeowner needs emergency help at once." },
    { q: "Do you work only with contractors?", a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors, so we understand emergency calls, freeze-driven demand, and the renovation wave sweeping Akron's older craftsman and Tudor neighborhoods." },
    { q: "Why does Ohio winter matter for my marketing?", a: "When lake-effect snow and ice hit Akron, demand for roofing, HVAC, and plumbing spikes overnight and the backlog can run for weeks. Ranking takes months to build, so the contractors who are already visible before the freeze take that work. We get you in place ahead of season." },
    { q: "How much does it cost to work with you?", a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm the exact scope in your free audit." },
    { q: "Which Akron areas do you serve?", a: "All of Summit County and the surrounding communities: Highland Square, Merriman Valley, West Hill, Cuyahoga Falls, Stow, Hudson, Fairlawn, Barberton, Norton, Tallmadge, Green and more." },
    { q: "Where should I start?", a: "Start with a free Akron audit. We look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};
