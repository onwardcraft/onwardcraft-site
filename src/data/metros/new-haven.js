// NEW HAVEN — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across New Haven's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// NEW HAVEN — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in New Haven is about more than being the biggest contractor',
  body:
    "New Haven punches well above its size. Yale University's 14,000 students, world-class medical school, and Yale New Haven Hospital anchor an economy filled with highly educated, research-oriented homeowners — faculty, physicians, and professionals who live in East Rock, Westville, and Wooster Square, own older homes, and are willing to pay for quality work they can trust. The city is also one of the most diverse in Connecticut: roughly 40% Black and 32% Hispanic, with a meaningful Spanish-speaking population that searches in Spanish and largely gets ignored by local contractors. On top of that, New Haven's housing stock is extraordinary — Colonials, Federals, and Victorians from the 1700s through the 1920s, triple-deckers and row houses that need constant specialist care. And the weather is unforgiving. Connecticut takes direct nor'easter hits, Long Island Sound brings coastal flooding from every major storm, and the 2011 October snowstorm knocked out power for more than ten days. When the next storm rolls in, the contractors already ranking are the ones who get the emergency calls.",
  pullQuote: "Yale faculty, century-old Victorians, nor'easters, and a Spanish-speaking majority that most contractors never reach — New Haven is a city where being visible beats being the biggest.",
  donut: {
    title: "New Haven's diversity",
    value: 40,
    centerLabel: 'Black/AA',
    legend: [
      { label: 'Black/AA', pct: 40, kind: 'teal' },
      { label: 'Other', pct: 60, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Nor\'easter/winter (Nov–Mar) and summer HVAC (Jun–Sep)',
  seasonalDemand: [
    { m: 'J', v: 90, peak: true }, { m: 'F', v: 88, peak: true }, { m: 'M', v: 62 },
    { m: 'A', v: 50 }, { m: 'M', v: 52 }, { m: 'J', v: 72, peak: true }, { m: 'J', v: 80, peak: true },
    { m: 'A', v: 78, peak: true }, { m: 'S', v: 60 }, { m: 'O', v: 72, peak: true },
    { m: 'N', v: 84, peak: true }, { m: 'D', v: 88, peak: true },
  ],
  stats: [
    { value: 'Yale', label: '14,000 students + Yale New Haven Hospital anchor an educated, quality-focused homeowner base' },
    { value: '~40%', label: 'Black/African American residents, ~32% Hispanic — meaningful Spanish-language search demand', accent: true },
    { value: '1700–1920', label: 'era of New Haven\'s Colonial, Federal, and Victorian homes — old stock means constant specialist demand' },
    { value: 'Nov–Mar', label: 'nor\'easter season, when roof, heating, and emergency calls spike overnight' },
  ],
  neighborhoods: [
    'East Rock', 'Westville', 'Wooster Square', 'Edgewood', 'Fair Haven',
    'The Hill', 'Dixwell', 'Newhallville', 'Beaver Hills', 'Dwight',
    'Hamden', 'North Haven', 'Orange', 'Woodbridge', 'Milford',
  ],
};

const AREAS = [
  'East Rock', 'Westville', 'Wooster Square', 'Edgewood', 'Fair Haven',
  'The Hill', 'Dixwell', 'Newhallville', 'Beaver Hills', 'Dwight',
  'Hamden', 'North Haven', 'Orange', 'Woodbridge', 'Milford', 'Branford', 'Guilford', 'Madison',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We understand nor'easter emergencies, Long Island Sound flooding prep, and the specialist demands of century-old Victorian and Colonial homes, so everything we build is shaped around how your customers really search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners three competitors also bought.",
  },
  {
    title: 'We actually speak New Haven',
    body: "Neighborhood-by-neighborhood targeting from East Rock to Fair Haven, plus Spanish-language reach to win searches most agencies don't even see — including the Yale-affiliated and diverse communities that fill this city.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a New Haven contractor gets around 1,200 local \"near me\" impressions a month across a handful of neighborhoods. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a booked-out calendar — and in a market anchored by Yale and filled with older homes, that gap is significant. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'New Haven', state: 'Connecticut', stateAbbr: 'CT', metro: 'New Haven',
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const newHavenLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'new-haven', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'New Haven Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'New Haven Local SEO that puts contractors in the Map Pack. Search your service near East Rock and three businesses show on the map. Be one of them.',
    eyebrow: 'Local SEO · New Haven, CT',
    h1: 'New Haven Local SEO that makes you the first name East Rock finds on the map',
    h2Exact: 'New Haven Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. In a city anchored by Yale and filled with century-old homes, we get you into that top three for your neighborhoods, so the call lands with you instead of whoever ranked first.",
    primaryCta: 'Get my free New Haven audit',
    intro:
      "New Haven Local SEO comes down to one thing: when a homeowner in East Rock or Westville searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. Yale faculty, hospital staff, and historic-home owners in this city are educated buyers who search carefully and choose the contractor who looks most credible. And a large share of New Haven's population searches in Spanish. Becoming one of those top three in the neighborhoods you serve is the whole game. Here's how you do it.",
    aioQuestion: 'How do New Haven businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real New Haven neighborhoods. New Haven is diverse and multilingual, so the winners target tight service areas, show up in Spanish for the searches their competitors never see, and are ready before the next nor'easter or coastal storm drives emergency demand.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? In New Haven's competitive market they get the overwhelming majority of clicks. Yale-affiliated homeowners and historic-home owners do their research — if you're not in that top three for East Rock, Westville, or Wooster Square, most of them never see your name. Getting into those top three spots for your neighborhoods is usually the single highest-return move a New Haven contractor can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same New Haven homeowner to four contractors, then bill each of you to fight over them. It's a treadmill. Local SEO builds the opposite: a lead finds you, calls you, and nobody else got it. Over time you stop renting and start owning the pipeline." },
      { title: "You're invisible to a third of the market", body: "About 32% of New Haven residents identify as Hispanic, and many search in Spanish. Most contractors do nothing to show up for those searches, so that demand sits unclaimed in Fair Haven and The Hill. Targeting the right neighborhoods and the right language is how you reach buyers your competitors are ignoring entirely." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which New Haven searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes people pick up the phone." },
      { name: 'Neighborhood pages', desc: "Real pages for East Rock, Westville, Wooster Square, Hamden, Milford and the rest, so you rank for the neighborhood someone's actually searching, not just \"New Haven.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from New Haven sources Google trusts — local press, Yale-area associations, neighborhood groups, partners. This is what separates page one from page two." },
      { name: 'Spanish-language reach', desc: "About a third of New Haven residents are Hispanic; many search in Spanish. We help you show up for the demand most of your competitors never even see.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your New Haven neighborhoods and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now over starting later." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across New Haven and the surrounding suburbs, plus the on-page work to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several New Haven neighborhoods.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across New Haven and the suburbs.', features: ['Everything in Local Growth', 'Local link building', 'Spanish-language search targeting', 'Multi-neighborhood and suburb pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in New Haven?', a: "Most New Haven engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The competitive New Haven keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days in a market this active is selling you something." },
      { q: 'What makes New Haven local SEO different?', a: "A few things. It's a diverse, educated market anchored by Yale — homeowners here do their homework before calling. It's also deeply multilingual: about a third of residents are Hispanic and many search in Spanish. And the seasonal demand is intense: nor'easters and Long Island Sound storms create genuine emergency surges. You have to be visible before those events, not scrambling after." },
      { q: 'Can you help me reach Spanish-speaking customers?', a: "Yes, and in New Haven that's a real edge. About 32% of residents identify as Hispanic, and many search in Spanish — especially in neighborhoods like Fair Haven and The Hill. We can optimize your profile and content so you show up for those searches where most contractors are invisible." },
      { q: 'Which areas do you cover?', a: "New Haven's core neighborhoods — East Rock, Westville, Wooster Square, Edgewood, Fair Haven, The Hill, Dixwell — and the surrounding suburbs: Hamden, North Haven, Orange, Woodbridge, Milford, Branford, Guilford, and Madison. We build genuine neighborhood pages instead of one generic New Haven page." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand nor'easter emergencies, coastal flood prep, and the specialist demands of century-old Colonial and Victorian homes." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because the work is coming to you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your neighborhoods, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day New Haven Local SEO plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'new-haven', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'New Haven SEO Company | Rank Higher, Get Leads | OnwardCraft',
    metaDescription:
      'New Haven SEO that puts contractors on page one and holds it. Rank for the searches Yale-area homeowners make, with revenue-tied reporting and no lock-in.',
    eyebrow: 'SEO Services · New Haven, CT',
    h1: 'New Haven SEO that puts your business on page one and holds it through every storm season',
    h2Exact: 'New Haven SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your New Haven customers search and the leads keep coming. We build that ranking and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free New Haven SEO audit',
    intro:
      "New Haven SEO comes down to one question: when someone searches what you do, are you on page one or page two? Page two might as well be page fifty. Yale-affiliated faculty, hospital staff, and historic-home owners in this city search carefully before they call — and a large share of the population searches in Spanish. We get contractors ranking for the money keywords in a market that rewards expertise and trust, and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do New Haven businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content tied to specific neighborhoods and suburbs, and earning links from trusted Connecticut and local sources. In New Haven, ranking for seasonal nor'easter and HVAC terms ahead of the storms, and showing up in Spanish for Hispanic searchers, are two of the quickest ways to pull ahead of competitors who ignore both.",
    problemHeading: "Three reasons your New Haven site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. In a city where Yale faculty and educated homeowners research everything before calling, if you're not in the top handful of results for what you sell, your site is basically invisible — no matter how good your work is." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost — which matters when you're serving high-value historic homes in East Rock and Wooster Square." },
      { title: "You're not ranking for the demand that matters", body: "New Haven demand swings hard with the weather — roofing and heating emergencies during nor'easters, AC work in the summer heat, and coastal flood prep before every major storm. The contractors who rank for those terms ahead of time catch the spike. If your SEO ignores seasonal and emergency searches, you're leaving your busiest weeks on the table." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your New Haven customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real New Haven and Connecticut sources. In a market this competitive, links are often what separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across your neighborhoods and suburbs alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Seasonal & emergency SEO', desc: "We rank you for the nor'easter roofing and heating searches, summer AC terms, and coastal storm prep searches that drive New Haven's busiest weeks — before demand spikes, not after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real New Haven leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the seasonal, emergency, and Spanish-language terms that matter here." },
      { name: 'Build authority', desc: "Links and citations from trusted New Haven, Connecticut, and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent New Haven SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own New Haven search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal & emergency SEO', 'Spanish-language / multi-neighborhood', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in New Haven?', a: "Most New Haven SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in New Haven?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter neighborhood terms and slower on the most competitive area-wide keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most contractors do best running SEO as the long-term engine and ads for short-term spikes like post-nor'easter emergency demand." },
      { q: 'Should my New Haven SEO target seasonal demand?', a: "Absolutely. When a nor'easter hits, searches for roofing, heating, and pipe repair spike overnight. Long Island Sound storms create coastal flood prep demand every fall and spring. Ranking takes months to build, so you have to be in place before the season. We optimize for those seasonal and emergency terms ahead of time so your busiest weeks land on you." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal/emergency and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which areas around New Haven do you cover?', a: "New Haven's core neighborhoods — East Rock, Westville, Wooster Square, Edgewood, Fair Haven — and the surrounding suburbs: Hamden, North Haven, Orange, Woodbridge, Milford, Branford, Guilford, and Madison. We build genuine local pages rather than one generic New Haven page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic New Haven SEO timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'new-haven', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'New Haven Web Design Company | OnwardCraft',
    metaDescription:
      'New Haven Web Design that books jobs instead of just looking nice. Fast, mobile-first sites built for contractors serving Yale-area and historic homes.',
    eyebrow: 'Web Design · New Haven, CT',
    h1: 'New Haven web design that books Wooster Square jobs instead of just looking nice',
    h2Exact: 'New Haven Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build New Haven contractors fast, mobile-first sites engineered to turn visitors into booked work — and to earn the trust of Yale faculty, historic-home owners, and a diverse, research-oriented community.",
    primaryCta: 'Get my free quote',
    intro:
      "New Haven Web Design should book jobs, not just sit there: most contractor sites lose leads quietly, slow on a phone, buried call button, no clear offer. Yale-affiliated homeowners and professionals in East Rock and Wooster Square do their homework before they call, and a weak site sends them to your competitor. Done right, it fixes all of that. We build sites that load fast, look like the professional you are, and turn visitors from Hamden to Branford into booked jobs.",
    aioQuestion: 'What makes a good contractor website in New Haven?',
    aioAnswer:
      "A good New Haven contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos of historic Colonial and Victorian work, and names the specific neighborhoods and suburbs you serve. Because Yale-affiliated and educated homeowners research contractors carefully before calling, and a significant share of the population speaks Spanish, the site needs to build credibility fast and speak to the community.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next contractor — and in New Haven, educated homeowners spend time researching before they decide. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your New Haven visitors are on mobile, and they bounce if your site takes more than a few seconds to load. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking." },
      { title: "It doesn't speak to your neighborhood or your community", body: "A homeowner in East Rock wants to see you know East Rock — not a generic \"Connecticut\" page. A Spanish-speaking homeowner in Fair Haven wants to know you're accessible. We build sites that name the neighborhoods you work and signal to the community that you're the right contractor to call." },
    ],
    servicesHeading: "What's in an OnwardCraft New Haven website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your neighborhoods, and the jobs you actually want — including the historic-home work New Haven is known for." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your New Haven traffic is. Fast, thumb-friendly, easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that speak to anxious homeowners — including Yale faculty and historic-home owners — and book the job, not filler text that reads like everyone else." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Neighborhood-targeted pages', desc: "Pages built around the neighborhoods and suburbs you serve — East Rock, Westville, Hamden, Milford — so you stand out instead of blending into one generic city page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your neighborhoods, your best jobs, and your competitors, then map the site around booking more of the work you want — whether that's historic-home restoration, nor'easter emergency roofing, or summer AC replacement." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting." },
    ],
    pricing: {
      heading: 'Transparent New Haven web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Neighborhood-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in New Haven?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site earn trust with educated New Haven homeowners?', a: "That's the whole point. Yale faculty, physicians at Yale New Haven Hospital, and historic-home owners in East Rock and Westville do their research before calling. We build sites that load fast, show real project photos, highlight reviews, and name the specific neighborhoods you serve — so yours is the site that books the job." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive New Haven terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your New Haven traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what high-converting New Haven Web Design should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'new-haven', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'New Haven Website Redesign | OnwardCraft',
    metaDescription:
      'New Haven Website Redesign that rebuilds for leads, not just looks. Faster, mobile-first rebuilds that convert Yale-area homeowners without losing rankings.',
    eyebrow: 'Website Redesign · New Haven, CT',
    h1: 'New Haven Website Redesign that rebuilds Fair Haven leads, not just looks',
    h2Exact: 'New Haven Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, easy to ignore. We redesign New Haven contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "A New Haven Website Redesign usually goes one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We rebuild New Haven contractor sites for speed and conversions — built to earn the trust of educated, research-oriented homeowners and the diverse community this city is made of — and we migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your New Haven site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "For a high-ticket job — restoring a Victorian in Wooster Square or replacing an HVAC system in a Yale faculty home — homeowners judge you by your site in seconds. An old, cluttered design quietly sends them to a competitor who looks more established, even when your work is better." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your New Haven visitors before they ever see your offer. A redesign built mobile-first wins them back." },
      { title: "It blends into the crowd and doesn't speak to the community", body: "Traffic that doesn't turn into calls is wasted. A generic old site gives an East Rock homeowner no reason to pick you over the next five results — and a Spanish-speaking homeowner in Fair Haven no signal that you're accessible. We rebuild for conversions, for your neighborhoods, and for the community." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your New Haven traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the price of your jobs — especially important when serving Yale-affiliated and professional homeowners." },
      { name: 'Neighborhood-targeted rebuild', desc: "Rebuilt around the neighborhoods and suburbs you serve — East Rock, Westville, Hamden, Milford — so the new site stands out and earns trust locally.", featured: true },
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
      heading: 'Transparent New Haven redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Neighborhood-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in New Haven?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, isn't bringing in leads, or fails to earn the trust of the educated, research-oriented homeowners in New Haven's historic neighborhoods, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the redesign help me compete for Yale-affiliated and historic-home clients?', a: "Yes, and that's a meaningful edge in New Haven. Yale faculty, hospital staff, and homeowners in East Rock and Wooster Square invest heavily in their homes and choose contractors who look credible and professional. A well-designed site that names their neighborhood and shows relevant work is what earns that call." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what your New Haven Website Redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const newHavenCity = {
  citySlug: 'new-haven', city: 'New Haven', state: 'Connecticut', stateAbbr: 'CT', metro: 'New Haven',

  titleTag: 'New Haven Marketing for Contractors | OnwardCraft',
  metaDescription:
    'New Haven marketing for contractors who want to own their leads. Web design, SEO, and local SEO to get found by Yale-area and historic-home owners.',

  eyebrow: 'New Haven · Web Design, SEO & Lead Generation',
  h1: 'New Haven marketing for contractors who want to own their leads, from East Rock to the shoreline',
  h2Exact: 'New Haven Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for New Haven's educated, diverse, nor'easter-tested market. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free New Haven audit',

  intro:
    "New Haven marketing for contractors has to fit the market you actually work in: one shaped by Yale University, extraordinary old housing stock, punishing nor'easters, and a community that's roughly 40% Black and 32% Hispanic. Educated homeowners in East Rock research contractors carefully before calling. Spanish-speaking homeowners in Fair Haven and The Hill search in Spanish — and most contractors never show up. Old Colonials, Victorians, and triple-deckers need constant specialist care. And when a nor'easter hits or Long Island Sound floods the shoreline, emergency calls flood in overnight. Winning here takes three things working together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack for the neighborhoods you serve. Here's how we help New Haven contractors do exactly that.",
  aioQuestion: 'How do New Haven contractors get more leads online?',
  aioAnswer:
    "New Haven contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack neighborhood by neighborhood. Because the market is anchored by Yale-affiliated homeowners who research carefully, has significant Spanish-speaking demand that goes unserved by most contractors, and sees intense seasonal surges from nor'easters and Long Island Sound storms, the contractors who target the right neighborhoods, show up in Spanish, and rank before the storms win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when New Haven searches \"near me.\" The single highest-return move for most local contractors — done tight, neighborhood by neighborhood.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search, build an asset you own instead of renting traffic from ads, and measure it in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to earn trust with Yale-area and historic-home owners and turn visitors into booked jobs — not brochures that sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it carefully so you keep every bit of ranking you've already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in New Haven?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads in a market defined by Yale, old homes, nor'easters, and a diverse community." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors — so we understand nor'easter emergencies, historic-home specialist work, and the seasonal coastal storm prep demand that comes with being on Long Island Sound." },
    { q: 'Why does the New Haven market need a different approach?', a: "It's a uniquely layered market. Yale-affiliated homeowners are educated buyers who research carefully. A third of residents are Hispanic and many search in Spanish. The housing stock is old — Colonials, Federals, and Victorians from the 1700s through the 1920s — which means constant specialist demand. And nor'easters plus coastal storms create intense seasonal emergency surges. A national agency swapping a city name into a template misses all of that." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which New Haven areas do you serve?', a: "New Haven's core neighborhoods — East Rock, Westville, Wooster Square, Edgewood, Fair Haven, The Hill, Dixwell, Newhallville — and the surrounding suburbs: Hamden, North Haven, Orange, Woodbridge, Milford, Branford, Guilford, and Madison." },
    { q: 'Where should I start?', a: "Start with a free New Haven audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two New Haven marketing for contractors moves that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};
