// HUNTINGTON: per-metro, per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Huntington's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// HUNTINGTON: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Huntington is a moving target',
  body:
    "Huntington sits where West Virginia, Ohio, and Kentucky meet on the Ohio River, and the local economy leans hard on two anchors. Marshall University and its Joan C. Edwards School of Medicine put roughly 12,000 students plus a steady hospital and medical payroll into the valley. That \"We Are Marshall\" loyalty is not a slogan here; it shapes buying. People grew up with the story of the 1970 crash, and they reach for a local crew before an out-of-town name almost every time. The river is the second force. Huntington still carries the memory of the 1937 flood that put the floodwall there, and the older housing stock running through Southside and Old Central City takes a beating from spring rise, flash floods, and the freeze-thaw cycles that work the valley all winter. Add the slow grind of manufacturing leaving and small revitalization efforts trying to pull it back, and you get a market where reputation travels by word of mouth. Two facts decide who wins online. People search on a phone with \"near me\" and tap a top result. And demand jumps with the seasons, so the crew already ranking is the one booking work the week the water comes up or the pipes freeze.",
  pullQuote: 'In a town this tight-knit, the crew already on the map is the one a Huntington neighbor calls first when the river starts to rise.',
  donut: {
    title: 'How Huntington owns its homes',
    value: 63,
    centerLabel: 'homeowner rate',
    legend: [
      { label: 'Homeowners', pct: 63, kind: 'teal' },
      { label: 'Renters', pct: 37, kind: 'grey' },
    ],
  },
  seasonTitle: 'When the valley calls a contractor',
  seasonCaption: 'River rise & flash flooding (Mar to May), freeze-thaw & winter (Nov to Mar)',
  seasonalDemand: [
    { m: 'J', v: 78, peak: true }, { m: 'F', v: 74, peak: true }, { m: 'M', v: 80, peak: true }, { m: 'A', v: 92, peak: true },
    { m: 'M', v: 84, peak: true }, { m: 'J', v: 58 }, { m: 'J', v: 60 },
    { m: 'A', v: 56 }, { m: 'S', v: 44 }, { m: 'O', v: 50 },
    { m: 'N', v: 72, peak: true }, { m: 'D', v: 80, peak: true },
  ],
  stats: [
    { value: '12K+', label: 'Marshall University students anchoring the local economy' },
    { value: '"Near me"', label: 'how most local searches here happen, usually on a phone', accent: true },
    { value: 'Mar–May', label: 'Ohio River and flash-flood season, when restoration demand spikes' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks' },
  ],
  neighborhoods: [
    'Ritter Park', 'Old Central City', 'Southside', 'Westmoreland', 'Barboursville',
    'Milton', 'Ceredo', 'Kenova', 'Guyandotte', 'Enslow Park',
    'Walnut Hills', 'Pea Ridge', 'Ashland KY', 'Ironton OH', 'Russell KY',
  ],
};

const AREAS = [
  'Huntington', 'Barboursville', 'Milton', 'Ceredo', 'Kenova', 'Ona',
  'Culloden', 'Ashland KY', 'Ironton OH', 'Russell KY', 'Catlettsburg KY',
  'Proctorville OH', 'Chesapeake OH', 'Wayne', 'Hurricane',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We know what a flooded basement call sounds like at 5 a.m., how spring river rise reshuffles a whole month of jobs, and how insurance restoration work actually gets paid. Everything we build follows how your customers really search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The point is a pipeline that belongs to you. Not one more check every month to a broker for the same Westmoreland homeowner three other crews are dialing at the same minute.",
  },
  {
    title: 'We actually speak Huntington',
    body: "River-valley flood demand, the genuine \"We Are Marshall\" pull toward hiring local, and real targeting from Ritter Park out to Barboursville and across the river into Ashland and Ironton. That is ground knowledge a national shop can't fake by find-and-replacing a city name in a template.",
  },
  {
    title: 'No contracts, no mystery',
    body: "Prices are posted, reporting points at real leads, and you go month-to-month once the first 90 days are up. If the invoice isn't paying for itself, you walk. That puts the weight of it squarely on us.",
  },
];

const PROOF = {
  heading: "No logo wall yet, so here is the straight math instead",
  body:
    "A lot of agencies lead with a grid of client logos. We are a young, founder-run shop, and we are not going to invent a history we have not lived yet. What we can put in front of you is the reasoning behind the work, pulled from Google's and the industry's own numbers on how people hunt for a local crew.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here is a rough sketch, marked plainly as an illustration and not a result we are claiming: say a Huntington contractor pulls about 1,200 local \"near me\" impressions in a month. Climbing out of page-two invisibility into the top three is the gap between a few scattered calls and a calendar you can't keep up with, and after a spring flood or a hard freeze that gap stretches even wider. In your free audit we run the real figures for your shop: where you rank now, your true search volume, and an honest 90-to-180-day path to the top of the map.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Huntington', state: 'West Virginia', stateAbbr: 'WV', metro: 'Huntington-Ashland',
  heroProof: ['Built for the trades', 'Flood-season ready', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const huntingtonLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'huntington', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Huntington Local SEO Company | OnwardCraft',
    metaDescription:
      'Search your service in Huntington and three businesses sit on the map. We get you into those three, so the river-season call lands with you, not a competitor.',
    eyebrow: 'Local SEO · Huntington-Ashland',
    h1: 'When Huntington searches for what you do, be the first name they find',
    h2Exact: 'Huntington Local SEO Company',
    heroSubhead:
      "Google drops three businesses on the map when a homeowner searches \"near me,\" and everybody underneath them is good as gone. We get you into that top three so the call rings your phone instead of whoever ranked first, and so you are already there when the river comes up and the whole valley starts dialing at once.",
    primaryCta: 'Get my free Huntington audit',
    intro:
      "Huntington local SEO turns on one moment: a homeowner in Ritter Park or Barboursville types your service plus \"near me,\" and you are either one of the three businesses Google pinned to the map or you are nowhere. Most folks tap one of those three and never scroll. In a tight-knit, tri-state town that already leans toward hiring local, landing in that three is the whole ballgame. Here is how we get you there.",
    aioQuestion: 'How do Huntington businesses rank higher in local search?',
    aioAnswer:
      "Ranking comes down to four moves: a Google Business Profile tuned to the exact services and tri-state neighborhoods you want; name, address, and phone details that match everywhere online; a steady flow of real reviews; and local content built on genuine Huntington places. Since homeowners here favor local crews and demand jumps with river flooding and winter freeze, the winners look settled, answer fast, and already rank before the season turns.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'A handful of crews are sitting on the Huntington map', body: "Type your own service plus \"near me\" right now. The three names Google pins to the map are pulling most of the clicks in this valley. If you are not one of them, the quality of your work barely registers, because most Huntington homeowners never scroll far enough to see you. Breaking into that three is usually the single biggest-return move a shop in this town can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Huntington homeowner to four contractors at once, then charge each of you to scrap over them. It never ends. Local SEO builds the opposite kind of asset: a homeowner finds you, calls you, and nobody else got that lead. Stick with it and you stop renting and start owning the pipeline outright." },
      { title: "You're invisible when the water comes up", body: "When the Ohio River rises in spring or a flash flood rolls through the older neighborhoods, demand for water-damage restoration, plumbing, and HVAC goes vertical inside a day, and the crews already on the map take those calls. If you can't be found when the next one hits, that work flows to whoever Google already trusts. Ranking now is how you ride that surge instead of watching it pass your shop." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The heaviest lever in the Map Pack. We set your categories, services, service area, photos, and posts so Google knows precisely which Huntington and tri-state searches belong to you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to agree everywhere Google checks. We clean up the listings that contradict each other and build the ones you never had." },
      { name: 'Reviews that keep coming', desc: "A no-fuss system that turns each finished job into a fresh review. It pushes your ranking up and gives the next homeowner a reason to dial you first." },
      { name: 'Neighborhood pages', desc: "Honest pages for Ritter Park, Barboursville, Milton, Ashland and the rest, so you show up for the exact neighborhood being searched, not a flat \"Huntington.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The under-the-hood plumbing that lets every other piece actually rank." },
      { name: 'Local link building', desc: "Mentions and links from tri-state sources Google respects: local press, trade groups, community partners. Around here that is often the thing that splits page one from page two." },
      { name: 'River-season readiness', desc: "We get your profile, pages, and reviews ranking before the spring rise and flash-flood stretch, so you catch the restoration surge instead of hustling for it after the water has already dropped.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" digging now kicks off inside AI Overviews, ChatGPT, and Perplexity. We shape your content so those engines can read you and name you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We figure out where you truly rank today across every service area and pin down which competitors are out-ranking you in the Map Pack and what they are doing." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP go first, since they shift the fastest. Most Huntington shops notice early lift here inside a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine switch on. These stack week after week, which is exactly why it pays to start before river season rather than during it." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Cabell, Wayne, and the tri-state river towns, backed by the on-page work that makes them rank." },
      { name: 'Report and expand', desc: "Plain-English reporting pointed at calls and leads, never vanity rankings. Then we go after the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack base laid right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For shops scrapping across a few tri-state towns at once.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors out to own the map across the whole river valley.', features: ['Everything in Local Growth', 'Local link building', 'River-season demand targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Huntington?', a: "Most Huntington engagements sit between $750 and $2,500 a month, depending on how many neighborhoods and keywords you are chasing. The tiers above spell it out. No hidden fees, no long contract, and we lock the exact scope in your free audit before a dollar changes hands." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile fixes can move inside a few weeks. The contested Huntington keywords usually run 90 to 180 days of steady work, since reviews and citations build slowly over time. Anybody promising you page one in 30 days is selling a fairy tale." },
      { q: 'What makes Huntington local SEO different?', a: "Two things stand out. This is a tight-knit river town where the \"We Are Marshall\" pride is real, so a local address, local listings, and a wall of reviews carry serious weight with people who would rather hire a neighbor. And demand whips around with the seasons, spring river flooding and winter freeze-thaw both, so your ranking has to be set before the season turns, not after." },
      { q: 'How does local SEO help me during river season?', a: "When the Ohio River rises in spring or a flash flood swamps the older neighborhoods, searches for water-damage restoration, plumbing, and HVAC spike inside a day, and the shops already in the Map Pack grab those calls. We get you ranking and reviewed ahead of the season so you catch that demand instead of fighting for leftovers after everyone else is booked solid." },
      { q: 'Which areas do you cover?', a: "All of Huntington and the tri-state wrapped around it: Ritter Park, Old Central City, Southside, Westmoreland, Barboursville, Milton, Ceredo, Kenova, plus Ashland KY, Ironton OH, and the river towns in between. We build real neighborhood pages instead of one flat Huntington page, because that is what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It is just about all we do: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand emergency calls, flood-driven demand, and how insurance restoration jobs get paid, and we shape your local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "A bigger slice of \"near me\" research now starts inside AI tools rather than classic search. We structure your content and schema so those engines can read, trust, and name your business. In a market this word-of-mouth, that is fast becoming as valuable as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an opening 90 days because that is about how long local SEO needs to show genuine movement. After that you go month-to-month. If we are not delivering, you leave, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that route leads straight to you alone. Over time you lean on the brokers less because the work is already coming to you direct." },
      { q: "What's in the free audit?", a: "A straight read on where you rank today across your service areas, what your Map Pack competitors are doing to out-rank you, the fixes that move you fastest, and a realistic 90-to-180-day plan with the numbers run for your shop. No pitch deck, just a diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'huntington', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Huntington SEO Company | OnwardCraft',
    metaDescription:
      'Huntington SEO that ranks contractors on Google and delivers leads you own. Revenue-tied reporting, no lock-in, built for river flooding and freeze-thaw demand.',
    eyebrow: 'SEO Services · Huntington-Ashland',
    h1: 'Get your Huntington business to the top of Google and keep it there',
    h2Exact: 'Huntington SEO Company',
    heroSubhead:
      "Ads die the minute you stop paying. SEO runs the other way: rank once for what your Huntington customers search and the leads keep arriving for months. We build that ranking and tie every report to real calls and booked jobs, not pretty charts.",
    primaryCta: 'Get my free Huntington SEO audit',
    intro:
      "Huntington SEO comes down to one plain question: when someone searches what you do, are you on page one or page two? In this town page two might as well be page fifty. We get contractors ranking for the money keywords in a tri-state, flood-prone valley where homeowners already lean local, and we count the whole thing in leads, not traffic that never picks up the phone.",
    aioQuestion: 'How do Huntington businesses rank higher on Google?',
    aioAnswer:
      "They rank by repairing the site's technical base, tuning each page for the exact terms buyers search, publishing local content people actually use, and earning links from trusted tri-state sources. In a valley where homeowners favor local crews and demand swings with river flooding and winter freeze-thaw, keeping the site quick on mobile and ranking for seasonal, flood-driven terms are two of the fastest ways to get ahead.",
    problemHeading: "Three reasons your Huntington site isn't bringing in work",
    painPoints: [
      { title: "You're stranded on page two", body: "Hardly anyone clicks past Google's first page, and they rarely scroll far down it. If you are not in the top handful of results for what you sell, your site is effectively invisible no matter how clean it looks. In a town this tight, that invisibility is what hands your jobs to the crew across the river." },
      { title: "You're renting traffic from Google Ads", body: "Ads can pull their weight, but the second your card stops, the leads stop cold. SEO builds an asset you actually own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost you pay now." },
      { title: "You're not ranking for the demand that matters", body: "Huntington demand lurches with the season, river flooding in spring and frozen pipes through a freeze-thaw winter, and the contractors who rank for those terms early catch the spike. If your SEO skips flood-driven and seasonal searches, you are quietly giving away your busiest, most profitable months." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood repairs Google wants before it will rank your Huntington site at all." },
      { name: 'On-page optimization', desc: "Every page that counts tuned for the exact terms your Huntington customers search: titles, headings, body copy, and internal links." },
      { name: 'Content that ranks', desc: "Pages and articles people actually find useful, the kind that answer real buyer questions, pull links, and bring in leads long after we hit publish." },
      { name: 'Link building', desc: "Authority earned from real tri-state and industry sources. In a market this competitive, links are often the thing that decides page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack work so you take the \"near me\" searches right next to your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "Our reports track the calls, the form fills, and the booked jobs, not just rankings and traffic, so you can see in plain dollars what your SEO is returning." },
      { name: 'Flood & seasonal SEO', desc: "We rank you for the flood-driven and freeze-thaw searches that fuel Huntington's busiest stretches, so you are visible before the demand spikes rather than after.", featured: true },
      { name: 'AI search & GEO', desc: "We shape your content so AI Overviews, ChatGPT, and Perplexity surface and name you, where a growing share of valley search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then draw a roadmap around the keywords most likely to bring in real Huntington leads, not just impressions." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile. The groundwork everything else needs before it can climb." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus fresh local content, including the seasonal and flood-driven terms that decide who wins spring here." },
      { name: 'Build authority', desc: "Links and citations from trusted tri-state and industry sources to push your contested keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting pointed at leads, then we pour more into whatever is paying off and push out to the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Huntington SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a tight site chasing its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors fighting across services and tri-state towns.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For shops set on owning search across the river valley.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Flood & seasonal SEO', 'eCommerce / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Huntington?', a: "Most Huntington SEO engagements run $900 to $3,000 a month, set by how contested your keywords are and how much content and link work you need. The tiers sit above this, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Huntington?', a: "Look for early movement in 2 to 3 months and real results in 4 to 6, quicker on low-competition terms and slower on the most contested Huntington keywords. SEO compounds, so the longer you keep at it, the larger the gains grow." },
      { q: 'Is SEO better than Google Ads?', a: "They do different work. Ads buy instant traffic that stops the moment you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Huntington contractors do best running SEO as the steady engine and ads for short bursts." },
      { q: 'Should my Huntington SEO target river-flood season?', a: "Yes. When the Ohio River rises in spring or a flash flood hits the older neighborhoods, searches for water-damage restoration, plumbing, and HVAC spike inside a day, and ranking takes months to build, so you have to be set before the season rather than chasing it after. We optimize those flood-driven and seasonal terms ahead of time so your busiest months land on you." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. Higher tiers fold in flood-and-seasonal and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an opening 90 days because SEO needs that long to show genuine movement, then it shifts to month-to-month. If we are not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a growing piece of what we optimize for. We shape your content and schema so AI engines can read, trust, and name your business, not just classic search results." },
      { q: 'Which areas around Huntington do you cover?', a: "All of Huntington and the tri-state: Barboursville, Milton, Ceredo, Kenova, plus Ashland KY, Ironton OH, and the river towns around them, built with real local pages rather than one flat Huntington page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that route leads straight to you. The more you own your search visibility, the less you rely on paying brokers for leads three competitors also bought." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to out-rank you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your shop. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'huntington', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Huntington Web Design Company | OnwardCraft',
    metaDescription:
      'Huntington web design that turns visitors into booked jobs: fast, mobile-first sites built for contractors and ready for river flood-season demand.',
    eyebrow: 'Web Design · Huntington-Ashland',
    h1: 'Huntington web design that turns visitors into booked jobs',
    h2Exact: 'Huntington Web Design Company',
    heroSubhead:
      "A good-looking site that never rings the phone is just an expensive brochure. We build Huntington contractors fast, mobile-first sites engineered to turn visitors into booked work, and tough enough to hold up when river season swamps your phone.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Huntington contractor sites bleed leads quietly: slow on a phone, call button buried, no clear offer anywhere. Web design done right plugs those leaks. We build sites that load fast, look like the pro you actually are, and turn Ritter-Park-to-Barboursville visitors into booked jobs, and that don't fall over when the river rises and sends your traffic through the roof.",
    aioQuestion: 'What makes a good contractor website in Huntington?',
    aioAnswer:
      "A strong Huntington contractor site loads in under three seconds on a phone, puts the call button and a clear offer above the fold, builds trust with reviews and real project photos, and is made to hold up under traffic spikes during river-flood season. Since most searches here happen on mobile and homeowners favor local crews, mobile speed and an obvious next step are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "Plenty of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next name on the map. We design every page around one job: turning a Huntington visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Huntington visitors are on mobile, and they bounce if the site takes more than a couple seconds to load. Slow sites also rank worse, so you lose twice. We build fast, so you keep both the visitor and the ranking." },
      { title: "It can't handle a river-season surge", body: "When the Ohio River comes up, contractor sites get slammed with a wave of urgent traffic, and the slow ones buckle or hide the call button right when it matters most. We build sites that stay fast and keep converting under load, so you capture that demand instead of losing it to a quicker competitor." },
    ],
    servicesHeading: "What's in an OnwardCraft Huntington website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site built around your trade, your tri-state service area, and the exact jobs you want more of." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that is where nearly all of your Huntington traffic lives. Fast, thumb-friendly, one tap to call." },
      { name: 'Conversion-focused UX', desc: "Plain offers, call buttons you can't miss, and lead forms placed where a Huntington homeowner will actually use them. Every page points to one clear next step." },
      { name: 'Copy that sells', desc: "Words that meet an anxious homeowner staring at a flooded basement or a leaking roof, not filler that reads like every other crew in the valley." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank: clean structure, schema, fast load, and neighborhood-ready pages from Ritter Park to Barboursville." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which guards your conversions and your rankings at the same time." },
      { name: 'River-surge ready', desc: "Built to stay quick and keep the call button front and center when flood-season traffic spikes, the exact moment that turns visitors into your biggest jobs of the year.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read your site and recommend your business as more valley search shifts toward AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your service area, your most profitable jobs, and your competitors, then map the site around booking more of the work you really want." },
      { name: 'Design', desc: "We lay out a custom, mobile-first design built to book jobs, and you get to see it and shape it well before any code is written." },
      { name: 'Build and copy', desc: "We build it quick and write copy that closes, with the call to action sitting front and center on every single page." },
      { name: 'Launch', desc: "We push it live clean, with the SEO foundation, tracking, and load speed all dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it quick and current and adjust it based on whatever is actually turning valley visitors into phone calls." },
    ],
    pricing: {
      heading: 'Transparent Huntington web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A tight, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A larger site for settled contractors running several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'River-surge ready'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location shops.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Huntington?', a: "Most contractor sites with us land between $2,000 and $8,000 as a one-time build, depending on page count and any integrations. The tiers sit above this: one fixed price, no surprises, and the finished site is yours to keep." },
      { q: 'How long does it take to build?', a: "A tight site takes about 2 to 4 weeks; a larger custom build runs 4 to 8. We hand you a firm timeline up front and keep you posted through every stage." },
      { q: 'Will my site handle a river-season traffic spike?', a: "Yes, and in Huntington that counts for a lot. When the Ohio River rises, contractor sites take a wave of urgent traffic, and the slow ones lose leads right as demand peaks. We build fast and keep the call button obvious, so your site converts under load instead of buckling." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank, and pairing it with our SEO service is how you climb the contested Huntington terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platform you can't walk away from." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, since that is where nearly all of your Huntington traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We match the platform to what you need and what you can comfortably manage on your own, usually WordPress or Webflow. In your free consult we name the right fit and walk through the tradeoffs in plain English." },
      { q: 'Do you offer ongoing support?', a: "Yes. Launch support comes with every build, and after that we offer wallet-friendly monthly maintenance covering updates, load speed, and security." },
      { q: 'Am I locked into a contract?', a: "No. The build itself is a one-time, fixed-price project. Any maintenance or SEO afterward runs month-to-month, so you are free to leave whenever you want." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Huntington site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'huntington', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Huntington Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your Huntington website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs and hold up in river floods.',
    eyebrow: 'Website Redesign · Huntington-Ashland',
    h1: 'Redesign your Huntington website without losing your rankings',
    h2Exact: 'Huntington Website Redesign Company',
    heroSubhead:
      "An outdated site quietly costs you jobs every week: slow, clumsy on a phone, easy for a Huntington homeowner to skip right past. We redesign contractor sites to convert more and load faster, and we migrate so carefully that you keep every bit of ranking you have already earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks nicer but converts exactly the same, or it launches and the rankings drop off a cliff overnight. We do neither. We redesign Huntington contractor sites for speed and conversions, build them to ride out river-season traffic, and migrate with the redirects and SEO care that protect the traffic you have spent years earning.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO through a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), holding onto your existing content and metadata, carrying over your schema, and testing the whole thing on staging before launch. Done right, a redesign keeps your rankings and lifts them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Huntington site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "On a high-ticket job, homeowners size you up by your site in seconds. An old, cluttered design quietly ships them to a competitor who simply looks more settled, even when your work is plainly better. In a town that trades on reputation, that first impression decides who gets the call." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you are losing the bulk of your Huntington visitors before they ever reach your offer. A redesign built mobile-first wins those visitors back and turns them into leads." },
      { title: "It can't keep up when demand surges", body: "Traffic that never turns into calls is wasted money, and an old site that crawls under a river-season surge loses leads at the precise moment they are worth the most. We rebuild for conversions and for the days your phone should be ringing off the hook." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pin down exactly what is costing you leads and rankings today, so the redesign fixes the real problems instead of just swapping colors around." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep every bit of the rankings and traffic you have already earned in the valley." },
      { name: 'Conversion redesign', desc: "Clear offers, sharper call-to-action placement, and lead forms a homeowner will actually fill out. We build for booked jobs, not a nicer-looking screenshot." },
      { name: 'Speed overhaul', desc: "We rebuild for quick load and a clean pass on Core Web Vitals, which pulls up conversions and rankings together." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where nearly all of your Huntington traffic actually lives." },
      { name: 'Brand refresh', desc: "An updated, trustworthy look that lines up with the quality of your work and the price tag on the jobs you are after." },
      { name: 'River-surge ready rebuild', desc: "Rebuilt to stay quick and keep converting when flood-season traffic spikes, so the new site captures your biggest jobs instead of choking on them.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as more valley search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We dig into what is costing you leads and rankings, then chart a redesign that fixes it without snapping anything that already works for you." },
      { name: 'Design', desc: "An updated, mobile-first, conversion-minded design you get to review and shape before we build anything." },
      { name: 'Rebuild and migrate', desc: "We rebuild quick and line up every redirect and SEO detail for a clean handoff with no nasty surprises." },
      { name: 'Launch with SEO care', desc: "We go live with redirects already in place and keep a close watch so your rankings hold steady and climb rather than slip." },
      { name: 'Optimize', desc: "Post-launch tuning on whatever is converting, plus steady speed work and updates." },
    ],
    pricing: {
      heading: 'Transparent Huntington redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A tight redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for a settled contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'River-surge ready'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A ground-up rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Huntington?', a: "Most redesigns with us land between $2,500 and $9,000 as a one-time project, depending on the size of the site and any integrations. The price is fixed, there are no surprises, and the finished result is yours to keep." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it is done carefully, and that is exactly how we work. We map 301 redirects for every changed URL, hold onto content and metadata, carry over your schema, and test on staging first. Done right, a redesign keeps your rankings and usually nudges them higher." },
      { q: 'How long does a redesign take?', a: "A tight redesign usually wraps in 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline before we start and a check-in at every stage along the way." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is a pain to update, is not bringing in leads, or buckles when river-season traffic surges, it is costing you work. The free audit tells you plainly whether a redesign is worth it for your Huntington shop." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and sharpen your existing content, hold onto what is ranking, and handle the technical migration so nothing important slips through the cracks." },
      { q: 'Will the new site handle river-season traffic?', a: "Yes, and in Huntington that is a genuine consideration. When the Ohio River rises, contractor sites take a surge of urgent traffic, and the slow ones lose leads. We rebuild for speed and keep the call to action obvious so the site converts when demand peaks." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild it mobile-first and tune the load speed and Core Web Vitals, which pulls up both your conversions and your rankings." },
      { q: 'Do I own the redesigned site?', a: "Every bit of it: the site, the domain, and the content. There is no platform lock-in whatsoever." },
      { q: 'Am I locked into a contract?', a: "No. The redesign itself is a one-time project. Anything ongoing, maintenance or SEO, runs month-to-month." },
      { q: "What's in the free redesign audit?", a: "A straight read on what your current site is costing you in lost leads and rankings, what the redesign needs to fix, and a fixed-price quote with a timeline and a safe migration plan laid out." },
    ],
  },
];

export const huntingtonCity = {
  citySlug: 'huntington', city: 'Huntington', state: 'West Virginia', stateAbbr: 'WV', metro: 'Huntington-Ashland',

  titleTag: 'Huntington Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Huntington contractors. Get found, get booked, and own your leads instead of renting them, all built for river flood-season demand.',

  eyebrow: 'Huntington · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Huntington contractors found and booked',
  h2Exact: 'Huntington Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Huntington's tight-knit, tri-state, river-driven market where homeowners hire local. One team to get you ranking, converting, and off the rented-lead treadmill for good.",
  heroProof: ['Built for the trades', 'Flood-season ready', 'No lock-in contracts'],
  primaryCta: 'Get my free Huntington audit',

  intro:
    "If you run a contracting business in Huntington, you are scrapping for attention in a tight-knit, tri-state town where homeowners already lean toward hiring local, and the competition leans on that too. Winning here takes three things pulling together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack, all set before the next time the Ohio River rises or a hard freeze hits. Here is how we help Huntington contractors pull that off.",
  aioQuestion: 'How do Huntington contractors get more leads online?',
  aioAnswer:
    "Huntington contractors get more leads by pairing a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that takes the Google Map Pack. Since homeowners here favor local crews and demand jumps hard during river flooding and freeze-thaw winters, the contractors who look settled and already rank before the season turns win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Break into the top three businesses Google pins to the map when Huntington searches \"near me.\" The single biggest-return move for most local shops, and how you catch river-season demand before a competitor does.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your Huntington customers actually type, build an asset you own instead of renting traffic from ads, and count the whole thing in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs, and to stay quick when river season swamps your phone, not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it so carefully that you keep every bit of ranking you have already earned in valley search.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Huntington?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients pair a high-converting website with SEO and local SEO so they rank, convert, and own their leads, and so they are ready when river season hits and the whole valley needs help at once." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors, so we understand emergency calls, flood-driven demand, and how insurance restoration work gets paid." },
    { q: 'Why does river-flood season matter for my marketing?', a: "When the Ohio River rises in spring or a flash flood swamps the older neighborhoods, demand for water-damage restoration, plumbing, and HVAC spikes inside a day and the backlog can run for weeks. Ranking takes months to build, so the contractors already visible before the season take that work. We get you set ahead of it." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds running $2,000 to $9,000. SEO and local SEO go month-to-month at $750 to $3,000, no long contract attached. We nail down the exact scope in your free audit." },
    { q: 'Which Huntington areas do you serve?', a: "All of Huntington and the tri-state: Ritter Park, Old Central City, Southside, Westmoreland, Barboursville, Milton, Ceredo, Kenova, plus Ashland KY, Ironton OH, and the river towns around them." },
    { q: 'Where should I start?', a: "Start with a free Huntington audit. We look at your website, your rankings, and your Map Pack presence, then point you to the one or two moves that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};
