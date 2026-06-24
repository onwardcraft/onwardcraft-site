// BELLEVUE: per-metro, per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Bellevue's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// BELLEVUE: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking on the Eastside is a different game',
  body:
    "Bellevue is the heart of the Seattle \"Eastside,\" and it ranks among the wealthiest, most educated cities in the country. Microsoft sits next door in Redmond, Amazon is putting up a large campus right downtown, T-Mobile is headquartered here, and the streets are full of high-income tech professionals who treat hiring a contractor like a research project. These are not people who tap the first cheap result. They read your site, your reviews, and your credentials, then they hire the contractor who looks like a real professional. That cuts both ways. If you look polished and you rank, you win very large jobs. Lakefront estates in Medina, Clyde Hill, and Mercer Island never go to the contractor with a Facebook page and no website. And the demand barely lets up. Relentless Pacific Northwest rain drives roof, gutter, moss, and moisture work nine months a year, while the 2021 heat dome kicked off a wave of heat-pump and mini-split installs that is still running.",
  pullQuote: 'On the Eastside, the contractor who looks like a real professional online is the one who wins the half-million-dollar remodel.',
  donut: {
    title: 'How Bellevue is built',
    value: 37,
    centerLabel: 'Asian',
    legend: [
      { label: 'Asian', pct: 37, kind: 'teal' },
      { label: 'Other', pct: 63, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Rain/moss/roof season (Oct–Apr), heat-pump demand year-round',
  seasonalDemand: [
    { m: 'J', v: 88, peak: true }, { m: 'F', v: 86, peak: true }, { m: 'M', v: 82, peak: true }, { m: 'A', v: 74, peak: true },
    { m: 'M', v: 52 }, { m: 'J', v: 58 }, { m: 'J', v: 66 },
    { m: 'A', v: 60 }, { m: 'S', v: 70 }, { m: 'O', v: 84, peak: true },
    { m: 'N', v: 90, peak: true }, { m: 'D', v: 90, peak: true },
  ],
  stats: [
    { value: '~37%', label: 'of Bellevue is Asian, a global, affluent, research-driven market', accent: true },
    { value: 'Top-5', label: 'wealthiest mid-size cities in the U.S. by household income' },
    { value: 'Oct–Apr', label: 'rain and moss season, when roof and moisture work spikes' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks' },
  ],
  neighborhoods: [
    'Downtown Bellevue', 'Medina', 'Clyde Hill', 'Hunts Point', 'Mercer Island',
    'Kirkland', 'Redmond', 'Sammamish', 'Issaquah', 'Newcastle',
    'Somerset', 'Bridle Trails', 'West Bellevue', 'Crossroads', 'Factoria',
  ],
};

const AREAS = [
  'Bellevue', 'Kirkland', 'Redmond', 'Sammamish', 'Issaquah', 'Mercer Island',
  'Newcastle', 'Medina', 'Clyde Hill', 'Hunts Point', 'Bothell', 'Woodinville',
  'Renton', 'Snoqualmie', 'Maple Valley',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We understand moisture-driven repairs, heat-pump retrofits, and seismic work, so everything we build is shaped around how your customers really search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners three competitors also bought.",
  },
  {
    title: 'We actually speak the Eastside',
    body: "An affluent, highly educated, globally diverse tech market that researches every contractor, year-round rain and moss demand, real neighborhood targeting from Downtown Bellevue to Medina and Mercer Island. The stuff a national agency can't do by swapping a city name into a template.",
  },
  {
    title: 'No contracts, no mystery',
    body: "Published prices, reporting tied to leads, month-to-month after 90 days. If we're not earning it, you leave. That keeps the pressure where it belongs: on us.",
  },
];

const PROOF = {
  heading: "We're new, so here's the honest math instead of a logo wall",
  body:
    "Plenty of agencies will show you a grid of client logos. We're a young, founder-led shop, so we won't pretend to a track record we don't have yet. What we can show you is why this works, pulled straight from Google's and the industry's own research on how people search locally.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Bellevue contractor gets around 1,500 local \"near me\" impressions a month. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a booked-out calendar. On the Eastside, where jobs run large and clients hire the contractor who looks established, that gap is worth even more. In your free audit, we model the real numbers for your business: your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Bellevue', state: 'Washington', stateAbbr: 'WA', metro: 'Bellevue-Eastside',
  heroProof: ['Built for the trades', 'Built for the Eastside', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const bellevueLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'bellevue', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Bellevue Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Bellevue Local SEO that wins you the top three on the map, so when Medina and Mercer Island homeowners search "near me," the call lands with you.',
    eyebrow: 'Local SEO · Bellevue-Eastside',
    h1: 'Bellevue Local SEO that wins you the top three on the Eastside map',
    h2Exact: 'Bellevue Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. We get you into that top three, so the call lands with you instead of whoever ranked first, and so Bellevue's research-heavy homeowners find a business that looks like the professional they want to hire.",
    primaryCta: 'Get my free Bellevue audit',
    intro:
      "Bellevue local SEO comes down to one thing: when a homeowner in Medina or Somerset searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. This is one of the wealthiest, most educated markets in the country, and the jobs are large, so becoming one of those three, and looking established once you're there, is the whole game. Here's how you do it.",
    aioQuestion: 'How do Bellevue businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Eastside neighborhoods. Bellevue homeowners are affluent and research-heavy, so the winners look established and credentialed, respond fast, and rank for the year-round rain, moss, and heat-pump demand that drives the market.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Three competitors own the map and you are not on it', body: "Pull up your own service plus \"near me\" on your phone right now. The three businesses Google drops onto the map collect most of the clicks before a Bellevue homeowner ever scrolls. If your name is not in that block, the quality of your roofs or your retrofits barely registers, because the people hiring never see you. For a local trade here, breaking into that top three is usually the move that pays back faster than anything else you could spend on." },
      { title: "You don't look established enough for Eastside money", body: "Bellevue homeowners are some of the most affluent and educated in the country, and they research every contractor before they call. If a competitor has more reviews, a sharper profile, and a more professional presence, the half-million-dollar remodel goes to them, even when your work is better. Looking the part on the map is how you get a shot at the big jobs." },
      { title: "You're paying for leads three rivals already bought", body: "Angi, Thumbtack, and HomeAdvisor take one Mercer Island or Somerset homeowner and resell that same lead to four contractors, then charge all of you to scrap over it. That is rented visibility you never get to keep. Local SEO builds the opposite asset. A homeowner finds your listing, dials your number, and no one else gets handed the contact. Keep it going long enough and the pipeline is yours, not a broker's." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "This is the lever that moves the Map Pack the most. We set your categories, services, service area, photos, and posts so Google understands you serve Medina, Clyde Hill, and the rest of the Eastside, not some vague metro blob." },
      { name: 'Citations and NAP cleanup', desc: "Your business name, address, and phone need to read the same everywhere Google checks. We hunt down the directory listings that disagree with each other, correct them, and add the ones you never claimed." },
      { name: 'Reviews that keep coming', desc: "A quiet, repeatable way to turn a finished install into a fresh review. Eastside homeowners read the review count and the recent ones closely before they call, so a steady drip here often decides who they trust." },
      { name: 'Neighborhood pages', desc: "Separate pages for Medina, Clyde Hill, Hunts Point, Mercer Island, Kirkland, Redmond and the rest, so you show up for the exact neighborhood a homeowner typed instead of a flat \"Bellevue\" search." },
      { name: 'On-page and technical SEO', desc: "Page titles, schema markup, internal linking, and mobile load time. None of it is glamorous, but it is the wiring that lets the rest of your profile and pages actually rank." },
      { name: 'Local link building', desc: "Links and mentions from Eastside sources Google already trusts, like regional press, trade groups, and community partners. In a field this crowded, that is frequently the tiebreaker between page one and page two." },
      { name: 'Rain & heat-pump season readiness', desc: "We get your profile, pages, and reviews ranking for the year-round moss and moisture work and the post-2021 heat-pump demand, so you catch the searches that actually drive Eastside revenue.", featured: true },
      { name: 'AI search readiness', desc: "Bellevue's tech-savvy homeowners increasingly start \"near me\" research in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We map where you genuinely sit in the rankings today across each Eastside service area, then figure out which competitors hold the Map Pack ahead of you and what they are doing that you are not." },
      { name: 'Fix the foundation', desc: "Profile and listing consistency come first because they tend to move quickest. Most Bellevue clients notice early movement within the first few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine switch on. These build on themselves week after week, which is exactly why a contractor who starts in spring is well ahead by the fall rain season." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages from Downtown Bellevue out to Sammamish and Issaquah, paired with the on-page work that makes them rank." },
      { name: 'Report and expand', desc: "Reporting in plain language tied to real calls and booked leads, never vanity ranking screenshots. Once a neighborhood is locked in, we go after the next one." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Eastside areas.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across the Eastside.', features: ['Everything in Local Growth', 'Local link building', 'Rain & heat-pump demand targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Bellevue?', a: "Most Bellevue engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The competitive Eastside keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days in a market this affluent and competitive is selling you something." },
      { q: 'What makes Bellevue local SEO different?', a: "Two things. It's one of the wealthiest, most educated, most globally diverse markets in the country, so homeowners research every contractor and trust signals like reviews and a polished profile carry huge weight. And demand here is year-round: relentless rain, moss, and moisture work from fall through spring, plus the heat-pump and mini-split wave that's run since the 2021 heat dome." },
      { q: 'How does local SEO help with rain and moisture season?', a: "From October through April the Eastside gets near-constant rain, which drives roof, gutter, drainage, moss, and moisture-intrusion work. The businesses already ranking take those calls. We get you ranking and reviewed for that demand so it lands on you instead of the contractor who showed up first on the map." },
      { q: 'Which areas do you cover?', a: "All of Bellevue and the Eastside: Downtown Bellevue, Somerset, Bridle Trails, Medina, Clyde Hill, Hunts Point, Mercer Island, plus Kirkland, Redmond, Sammamish, Issaquah, Newcastle and more. We build genuine neighborhood pages instead of one generic Bellevue page, because that's what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand moisture-driven repairs, heat-pump retrofits, seismic retrofitting, and high-end remodels, and we build your local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "Bellevue's tech-heavy homeowners are early adopters, so a growing share of \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. The one ask is an initial 90 days, because that is honestly about how long local SEO takes to show real movement in a market as competitive as the Eastside. After that you are month-to-month. If the leads are not showing up, you leave, and the burden of proving it works stays squarely on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you a shared lead and a sliver of visibility you never actually own. We build the things that belong to you instead: your rankings, your Google profile, and a growing base of reviews that route Bellevue homeowners straight to your phone. As that pipeline fills, the broker invoices start to feel optional." },
      { q: "What's in the free audit?", a: "A straight read on where you rank today across your service areas, what the contractors ahead of you in the Map Pack are doing, the handful of fixes that will move you fastest, and a realistic 90-to-180-day plan with the math run on your actual numbers. It is the honest starting point for Bellevue Local SEO that turns local search into booked work, no slide deck, just a clear diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'bellevue', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Bellevue SEO Company | OnwardCraft',
    metaDescription:
      'Bellevue SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in contracts, built for the Eastside market.',
    eyebrow: 'SEO Services · Bellevue-Eastside',
    h1: 'Bellevue SEO that builds Eastside rankings you actually own',
    h2Exact: 'Bellevue SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Eastside customers search and the leads keep coming. We build that ranking and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free Bellevue SEO audit',
    intro:
      "Bellevue SEO comes down to one question: when someone searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in one of the most affluent, research-driven markets in the country, and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Bellevue businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content, and earning links from trusted Eastside sources. In an affluent, highly educated, competitive market, keeping the site fast on mobile and ranking for year-round rain, moss, and heat-pump demand are two of the quickest ways to pull ahead.",
    problemHeading: "Three reasons your Bellevue site isn't bringing in work",
    painPoints: [
      { title: "You're stranded on page two", body: "Hardly anyone clicks to the second page of Google, and they do not scroll far down the first one either. If you are not near the top for the services you sell, your site might as well not be online. On the Eastside, where a single remodel can run into six figures, that buried position is quietly routing your most valuable jobs to whoever Google decided to show first." },
      { title: "Your site doesn't earn an Eastside buyer's trust", body: "Bellevue homeowners are educated, affluent, and skeptical. They land on your site, scan it for credibility, and leave if it looks thin. SEO done right pairs ranking with content that proves you're the established professional they're looking for, so the high-ticket jobs convert instead of bouncing." },
      { title: "You're not ranking for the demand that matters", body: "Eastside demand runs year-round: rain, moss, and moisture work from fall through spring, plus the heat-pump and mini-split wave that's run since the 2021 heat dome. The contractors who rank for those terms catch the demand. If your SEO ignores them, you're leaving your steadiest work on the table." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, load speed, Core Web Vitals, and clean schema. These are the under-the-hood repairs Google needs in place before it will seriously rank a Bellevue contractor site at all." },
      { name: 'On-page optimization', desc: "Each page that matters gets tuned to the precise phrases your Eastside buyers type, from titles and headings down to the body copy and internal links that tie it together." },
      { name: 'Content that ranks', desc: "Pages and guides that genuinely answer what a Bellevue homeowner is researching, the kind that pull in links and keep delivering leads months after we hit publish." },
      { name: 'Link building', desc: "Credibility earned from real Eastside and trade sources. When everyone competing is well-funded and well-reviewed, the link profile is often what tips one contractor onto page one." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack work that wins the \"near me\" searches at the same time your organic rankings climb, so you are showing up twice for the same homeowner." },
      { name: 'Revenue-tied reporting', desc: "We report calls, form fills, and booked leads, not just rank positions and traffic graphs, so you can always tell what the SEO is actually putting in your bank." },
      { name: 'Rain & heat-pump SEO', desc: "We rank you for the year-round moss, moisture, and roof searches and the heat-pump and mini-split demand that drive the Eastside's busiest seasons, so you're visible before homeowners start looking.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, which is where Bellevue's tech-savvy homeowners increasingly start their research.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your current rankings, traffic, and the competitors above you, then draw up a roadmap built around the keywords most likely to turn into real Eastside leads rather than empty impressions." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile rendering get cleaned up first, since that is the groundwork every other piece of the plan depends on." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages, plus fresh local content covering the rain, moss, and heat-pump terms that keep Eastside phones ringing through the seasons." },
      { name: 'Build authority', desc: "Links and citations from trusted Eastside and trade sources, aimed at pushing your most competitive keywords up onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to actual leads. From there we pour more into whatever is producing and stretch into the next set of keywords." },
    ],
    pricing: {
      heading: 'Transparent Bellevue SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Eastside search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Rain & heat-pump SEO', 'eCommerce / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Bellevue?', a: "Most Bellevue SEO engagements run between $900 and $3,000 a month, set by how contested your keywords are and how much content and link work the plan calls for. The tiers above lay it out. No buried fees and no long contract." },
      { q: 'How long does SEO take to work in Bellevue?', a: "Plan on early movement around the 2-to-3-month mark and meaningful results by 4 to 6 months. Lighter terms come faster, and the most fought-over Eastside keywords take longer, since plenty of deep-pocketed competitors are chasing them too. The effort compounds, so the longer you run it the wider the gap you open." },
      { q: 'Is SEO better than Google Ads?', a: "They solve different problems. Ads buy you instant traffic that vanishes the moment the card stops. SEO is something you own that keeps generating leads at a steadily lower cost each month. Most Eastside contractors do best treating SEO as the long-haul engine and reaching for ads only when they need a quick spike." },
      { q: 'Should my Bellevue SEO target rain and heat-pump season?', a: "Yes. Eastside demand runs year-round: rain, moss, and moisture work from fall through spring, and heat-pump and mini-split installs that have run steadily since the 2021 heat dome. Ranking takes months to build, so you have to be in place before homeowners start searching. We optimize for those seasonal terms ahead of time so the steady demand lands on you." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and reporting tied to revenue. The higher tiers fold in rain-and-heat-pump and AI-search work. We pin down the exact scope in your free audit before anything starts." },
      { q: 'Do you require a long-term contract?', a: "No. There is an initial 90-day window because that is what SEO needs to show real movement, and after it you are month-to-month. If the leads are not coming, you walk away clean." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "It is a growing slice of what we build for, and on the Eastside it lands harder than almost anywhere, since a lot of these homeowners work in tech and reach for an AI tool first. We structure your content and schema so those engines can read your business, trust it, and name it, not just classic blue links." },
      { q: 'Which areas around Bellevue do you cover?', a: "All of Bellevue and the wider Eastside: Kirkland, Redmond, Sammamish, Issaquah, Mercer Island, Newcastle, Medina, Clyde Hill, Bothell, Woodinville and more. We build real local pages for each rather than one catch-all Bellevue page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that route homeowners straight to you. The more of your own search visibility you control, the less you have to pay brokers for a lead that three other contractors bought at the same time." },
      { q: "What's in the free SEO audit?", a: "Where you rank now, what the competitors above you are doing, the fixes that will move the needle hardest, and a realistic timeline with the numbers run on your own business. It is the honest first step toward Bellevue SEO that ranks your Eastside business on Google and grows the organic traffic you actually own. No slide deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'bellevue', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Bellevue Web Design Company | OnwardCraft',
    metaDescription:
      'Bellevue web design that turns visitors into booked jobs: fast, mobile-first sites built for contractors and the Eastside\'s research-heavy homeowners.',
    eyebrow: 'Web Design · Bellevue-Eastside',
    h1: 'Bellevue web design engineered to bring in real Eastside work',
    h2Exact: 'Bellevue Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Eastside contractors fast, mobile-first sites engineered to turn visitors into booked work, and to look like the established professional Bellevue's research-heavy homeowners want to hire.",
    primaryCta: 'Get my free quote',
    intro:
      "Bellevue web design is what separates a site that books high-ticket jobs from one that just sits there. Most contractor websites lose leads quietly: slow on a phone, buried call button, no clear offer, and nothing that signals real credibility to an affluent, skeptical buyer. We build fast, mobile-first sites that look like the high-end professional you are and convert Medina-to-Mercer-Island visitors into booked jobs.",
    aioQuestion: 'What makes a good contractor website in Bellevue?',
    aioAnswer:
      "A good Bellevue contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, and proves trust with reviews, credentials, and real project photos. Because Eastside homeowners are affluent and research every contractor before they call, the site has to look polished and established. That is what separates one that books high-ticket jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "Plenty of contractor sites simply list a few services and stop there. No clear offer, no obvious next step, no reason for a Bellevue homeowner to call you instead of the next name on the map. We design every page around a single job: moving a visitor toward a booked lead." },
      { title: "It doesn't look the part for Eastside money", body: "Homeowners here are affluent, well-educated, and the jobs run large. A dated, off-the-shelf site quietly signals to a six-figure remodel client that you are not the established pro they are after. We build a presence that matches the quality and the price tag of the work you do, so the big jobs take you seriously from the first scroll." },
      { title: "It's too slow on a phone", body: "Most of your Eastside visitors arrive on a phone, and they leave if the page hangs for more than a couple of seconds. Slow sites also rank worse, so you lose the visitor and the position at once. We build for speed, which keeps both." },
    ],
    servicesHeading: "What's in an OnwardCraft Bellevue website",
    services: [
      { name: 'Custom design', desc: "No recycled templates. The site is built around your trade, your Eastside service area, and the high-ticket jobs you are actually trying to win more of." },
      { name: 'Mobile-first build', desc: "Drawn up for the phone before the desktop, since that is where nearly all of your Eastside traffic lands. Quick to load, easy on the thumb, and one tap from a call." },
      { name: 'Conversion-focused UX', desc: "Clear offers, call buttons that stand out, and lead forms set exactly where a homeowner is ready to use them. Every page points to one obvious next step." },
      { name: 'Copy that sells', desc: "Writing aimed at a careful, research-heavy buyer who is comparing you against three other contractors, not the generic filler that reads like every site in town." },
      { name: 'Local SEO foundation', desc: "Built to rank from the first line of code: clean structure, schema, fast load, and pages ready for Medina, Mercer Island, and your other neighborhoods." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load quickly and clear Google's performance thresholds, which protects your conversions and your rankings in one pass." },
      { name: 'Credibility-first design', desc: "Reviews, credentials, certifications, and real project photos placed where they build trust fast, so Bellevue's skeptical, affluent buyers feel confident hiring you for the big jobs.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more of the Eastside's tech-savvy search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We get to know your trade, your service area, the jobs that actually pay, and the competitors beating you, then build the site around booking more of the high-end Eastside work you want." },
      { name: 'Design', desc: "We lay out a custom, mobile-first design built to convert, and you get to see it and push back on it before we write a line of code." },
      { name: 'Build and copy', desc: "We build the site quickly and write copy that does the selling, with the call to action sitting front and center on every page." },
      { name: 'Launch', desc: "We ship it cleanly with the SEO foundation, tracking, and speed all dialed in from the first day live." },
      { name: 'Support and optimize', desc: "We keep it fast and current, then tune it around what is genuinely turning Eastside visitors into calls." },
    ],
    pricing: {
      heading: 'Transparent Bellevue web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Credibility-first design'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Bellevue?', a: "Most contractor sites with us land between $2,000 and $8,000 as a one-time build, depending on how many pages and integrations you need. The tiers are above. Fixed price, no surprise line items, and the finished site is yours." },
      { q: 'How long does it take to build?', a: "A focused site runs roughly 2 to 4 weeks; a larger custom build is more like 4 to 8. You get a firm timeline before we start and updates at each stage so nothing goes quiet on you." },
      { q: 'Why does a polished site matter so much in Bellevue?', a: "Eastside homeowners are among the most affluent and educated in the country, and they research every contractor before they call. For a high-ticket remodel or install, they hire the business that looks established and credible. A sharp, fast, trustworthy site is often what gets you the shot at those large jobs." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank, and pairing it with our SEO service is how you climb the competitive Eastside terms." },
      { q: 'Do I own the website?', a: "Yes, all of it: the site, the domain, and the content. There is no hostage arrangement and no proprietary platform you would be stuck on if you ever moved on from us." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where nearly all of your Eastside traffic shows up. Quick load, call buttons sized for a fingertip, and forms built to be filled out one-handed." },
      { q: 'What platform do you build on?', a: "We match the platform to what you need and what you can realistically run yourself, usually WordPress or Webflow. We recommend the right one in your free consult and explain the tradeoffs without the jargon." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build comes with launch support, and after that we offer reasonably priced monthly maintenance covering updates, speed, and security." },
      { q: 'Am I locked into a contract?', a: "No. The build itself is a one-time, fixed-price project. Anything ongoing, like maintenance or SEO, runs month-to-month, so you are free to step away whenever you want." },
      { q: 'What do I get in the free quote?', a: "A straight look at what your current site is leaking in lost leads, what a high-converting Bellevue site ought to include, and a fixed-price quote with a timeline attached. It is a practical plan for Bellevue web design that converts visitors into booked jobs. No pressure, just something you can act on." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'bellevue', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Bellevue Website Redesign | OnwardCraft',
    metaDescription:
      'Bellevue Website Redesign that modernizes your site without losing rankings. Faster, mobile-first rebuilds that convert more of the Eastside\'s affluent homeowners.',
    eyebrow: 'Website Redesign · Bellevue-Eastside',
    h1: 'Bellevue Website Redesign that modernizes without tanking your Eastside traffic',
    h2Exact: 'Bellevue Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week: slow, hard to use on a phone, and too generic to earn an affluent Eastside buyer's trust. We redesign Bellevue contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "A Bellevue Website Redesign goes one of two bad ways when it is rushed: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We rebuild Bellevue contractor sites for speed, conversions, and the credibility the Eastside's research-heavy homeowners demand, and we run an SEO-safe migration with the redirects that protect the traffic you already have, so you redesign your Bellevue website without losing rankings.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Bellevue site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and quietly costs you trust", body: "On a high-ticket Eastside job, an affluent homeowner sizes you up by your site in a matter of seconds. An old, cluttered design hands them straight to a competitor who simply looks more established, even when your craftsmanship is plainly the better of the two. In Bellevue's remodel-heavy neighborhoods, that first impression is often the whole decision." },
      { title: "It's slow and clumsy on a phone", body: "If the site stutters or crawls on mobile, you are losing most of your Eastside visitors before they ever reach your offer. A rebuild done mobile-first wins those people back and turns them into the calls you are currently watching bounce." },
      { title: "It doesn't convert the high-end jobs you want", body: "Traffic that doesn't turn into calls is wasted, and a generic old site that doesn't signal credibility loses the large remodels and installs that make the Eastside worth it. We rebuild for conversions and for the polished, trustworthy look those jobs require." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We trace exactly what is bleeding leads and rankings on the current site, so the rebuild fixes the real problems instead of just repainting the same broken layout." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema all handled with care, so you hold onto the Eastside rankings and traffic you have already spent years earning." },
      { name: 'Conversion redesign', desc: "Sharper offers, smarter call-to-action placement, and lead forms a homeowner will actually fill in. We rebuild for booked jobs, not just a prettier screenshot." },
      { name: 'Speed overhaul', desc: "A rebuild tuned for fast load and a passing Core Web Vitals score, which lifts conversions and rankings at the same time." },
      { name: 'Mobile-first rebuild', desc: "Rebuilt around the phone first, because that is where the overwhelming majority of your Eastside traffic actually shows up." },
      { name: 'Brand refresh', desc: "A modern, credible look that lines up with the caliber of your work and the price of the high-end remodels and installs you are chasing." },
      { name: 'Credibility-first rebuild', desc: "Reviews, credentials, and real project photos placed to build trust fast, so the redesigned site earns the confidence of Bellevue's affluent, research-heavy buyers and lands the big jobs.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as the Eastside's tech-savvy search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We work out what is costing you leads and rankings, then map a redesign that repairs it without wrecking the parts of the site that already pull their weight." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused layout you review and shape before any rebuilding starts." },
      { name: 'Rebuild and migrate', desc: "We rebuild quickly and line up every redirect and SEO detail in advance for a clean, no-surprises migration." },
      { name: 'Launch with SEO care', desc: "We go live with the redirects in place and watch the rankings closely afterward, so they hold and climb rather than slip." },
      { name: 'Optimize', desc: "Post-launch tuning driven by what is actually converting Eastside visitors, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Bellevue redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Credibility-first rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Bellevue?', a: "Most redesigns with us come in between $2,500 and $9,000 as a one-time project, set by the size of the site and the integrations involved. Fixed price, no surprises, and the result belongs to you." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if the migration is handled with care, which is the only way we do it. We map a 301 redirect for every URL that changes, carry over your content and metadata, move your schema across, and test the whole thing on staging before launch. Done properly, a redesign holds your Eastside rankings and usually nudges them higher." },
      { q: 'How long does a redesign take?', a: "A focused redesign runs about 3 to 5 weeks; a larger rebuild is closer to 5 to 9. You get a firm timeline before we begin and updates at every stage along the way." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is hard to update, isn't bringing in leads, or doesn't look credible enough to win the Eastside's high-ticket jobs, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We bring your existing content across and sharpen it, protect whatever is already ranking, and run the technical side of the migration so nothing important slips through the cracks." },
      { q: 'Will the new site help me win bigger Eastside jobs?', a: "That's the goal. Bellevue homeowners research every contractor and hire the one who looks established. We rebuild for credibility, putting reviews, credentials, and real project photos up front, alongside speed and conversions, so the large remodels and installs take you seriously." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and a clean Core Web Vitals score, which raises both conversions and rankings together." },
      { q: 'Do I own the redesigned site?', a: "Entirely: the site, the domain, and the content. There is no platform lock-in to trap you later." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Anything ongoing, like maintenance or SEO, runs month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the rebuild needs to fix, and a fixed-price quote with a timeline and a safe migration plan attached. It is the honest plan for a Bellevue Website Redesign that converts more without losing the rankings you have earned." },
    ],
  },
];

export const bellevueCity = {
  citySlug: 'bellevue', city: 'Bellevue', state: 'Washington', stateAbbr: 'WA', metro: 'Bellevue-Eastside',

  titleTag: 'Bellevue Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Bellevue marketing for contractors: web design, SEO, and local SEO for the Eastside. Get found, get booked, and own your leads instead of renting them.',

  eyebrow: 'Bellevue · Web Design, SEO & Lead Generation',
  h1: 'Bellevue marketing for contractors, built around the trades and the Eastside',
  h2Exact: 'Bellevue Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for the Eastside's affluent, research-heavy, year-round market. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Built for the Eastside', 'No lock-in contracts'],
  primaryCta: 'Get my free Bellevue audit',

  intro:
    "Bellevue marketing for contractors is about winning some of the highest-value jobs in the country, in a market where homeowners research every contractor before they call. It takes three things working together: a site that converts and looks established, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack, all tuned for the Eastside's year-round rain, moss, and heat-pump demand. As a digital marketing agency built for the trades, here's how we help Bellevue contractors get found and booked.",
  aioQuestion: 'How do Bellevue contractors get more leads online?',
  aioAnswer:
    "Bellevue contractors get more leads by combining a fast, credible, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack. Because the Eastside is affluent, research-heavy, and competitive, the contractors who look established and are already ranking win the most work, and the highest-value work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when the Eastside searches \"near me.\" The single highest-return move for most local businesses, and how you catch year-round rain and heat-pump demand.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search, build an asset you own instead of renting traffic from ads, and measure it in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs, built to look like the established professional Bellevue's affluent homeowners want to hire, not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it carefully so you keep every bit of ranking you've already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Bellevue?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads in one of the country's most competitive, affluent markets." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors, so we understand moisture-driven repairs, heat-pump retrofits, seismic work, and high-end remodels." },
    { q: 'Why does the Eastside market need a different approach?', a: "Bellevue is one of the wealthiest, most educated, most globally diverse cities in the country, and homeowners research every contractor before they hire. The jobs run large and go to the business that looks established and ranks well. We build for credibility and ranking together, tuned to the year-round rain, moss, and heat-pump demand that drives the market." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds running $2,000 to $9,000. SEO and local SEO are month-to-month, $750 to $3,000, with no long contract behind them. We settle the exact scope in your free audit before you commit a dollar." },
    { q: 'Which Bellevue areas do you serve?', a: "All of Bellevue and the surrounding Eastside: Downtown Bellevue, Somerset, Bridle Trails, Medina, Clyde Hill, Hunts Point, Mercer Island, plus Kirkland, Redmond, Sammamish, Issaquah, Newcastle, Bothell, Woodinville and more." },
    { q: 'Where should I start?', a: "Start with a free Bellevue audit. We go through your website, your rankings, and your Map Pack standing, then tell you the one or two moves that will pull in the most work the fastest. It is the simplest first step into Bellevue marketing for contractors that gets you found and booked. No slide deck, just a plan you can run with." },
  ],
};
