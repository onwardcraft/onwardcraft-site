// BELLEVUE — per-metro × per-service local landing pages + city hub.
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
// BELLEVUE — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking on the Eastside is a different game',
  body:
    "Bellevue is the heart of the Seattle \"Eastside,\" and it's one of the wealthiest, most educated cities in the country. Microsoft is next door in Redmond, Amazon is building a massive campus right downtown, T-Mobile is headquartered here, and the streets are full of high-income tech professionals — a huge share of them Indian, Chinese, and Korean immigrants who research everything before they buy. These are not homeowners who tap the first cheap result. They read your site, your reviews, and your credentials, then they hire the contractor who looks like a real professional. That cuts both ways. If you look polished and you rank, you win very large jobs — lakefront estates in Medina, Clyde Hill, and Mercer Island don't go to the contractor with a Facebook page and no website. And the demand never really stops: relentless Pacific Northwest rain drives roof, gutter, moss, and moisture work nine months a year, while the 2021 heat dome kicked off a wave of heat-pump and mini-split installs that's still running.",
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
    { value: '~37%', label: 'of Bellevue is Asian — an affluent, global, multilingual market', accent: true },
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
    "Plenty of agencies will show you a grid of client logos. We're a young, founder-led shop, so we won't pretend to a track record we don't have yet. What we can show you is why this works — straight from Google's and the industry's own research on how people search locally.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Bellevue contractor gets around 1,500 local \"near me\" impressions a month. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a booked-out calendar — and on the Eastside, where jobs run large and clients hire the contractor who looks established, that gap is worth even more. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
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
      'Search your service in Bellevue and three businesses show up on the map. We get you into those three, so the call lands with you.',
    eyebrow: 'Local SEO · Bellevue-Eastside',
    h1: 'When the Eastside searches for what you do, be the first name they find',
    h2Exact: 'Bellevue Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. We get you into that top three, so the call lands with you instead of whoever ranked first — and so Bellevue's research-heavy homeowners find a business that looks like the professional they want to hire.",
    primaryCta: 'Get my free Bellevue audit',
    intro:
      "Bellevue local SEO comes down to one thing: when a homeowner in Medina or Somerset searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. This is one of the wealthiest, most educated markets in the country, and the jobs are large — so becoming one of those three, and looking established once you're there, is the whole game. Here's how you do it.",
    aioQuestion: 'How do Bellevue businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Eastside neighborhoods. Bellevue homeowners are affluent and research-heavy, so the winners look established and credentialed, respond fast, and rank for the year-round rain, moss, and heat-pump demand that drives the market.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks. If you're not one of them, it almost doesn't matter how good your work is — most people never see your name. Getting into that top three is usually the single highest-return move a Bellevue business can make." },
      { title: "You don't look established enough for Eastside money", body: "Bellevue homeowners are some of the most affluent and educated in the country, and they research every contractor before they call. If a competitor has more reviews, a sharper profile, and a more professional presence, the half-million-dollar remodel goes to them — even if your work is better. Looking the part on the map is how you get a shot at the big jobs." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Eastside homeowner to four contractors, then bill each of you to fight over them. It's a treadmill. Local SEO builds the opposite: a lead finds you, calls you, and nobody else got it. Over time you stop renting and start owning the pipeline." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Eastside searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. On the Eastside, where homeowners research hard before they buy, this is often the deciding factor." },
      { name: 'Neighborhood pages', desc: "Real pages for Medina, Clyde Hill, Mercer Island, Kirkland, Redmond and the rest, so you rank for the neighborhood someone's actually searching, not just \"Bellevue.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Eastside sources Google trusts — local press, associations, partners. This is what separates page one from page two in a market this competitive." },
      { name: 'Rain & heat-pump season readiness', desc: "We get your profile, pages, and reviews ranking for the year-round moss and moisture work and the post-2021 heat-pump demand, so you catch the searches that actually drive Eastside revenue.", featured: true },
      { name: 'AI search readiness', desc: "Bellevue's tech-savvy homeowners increasingly start \"near me\" research in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your service areas and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now over starting later." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across the Eastside, plus the on-page work to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
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
      { q: 'What makes Bellevue local SEO different?', a: "Two things. It's one of the wealthiest, most educated, most globally diverse markets in the country, so homeowners research every contractor and trust signals like reviews and a polished profile carry huge weight. And demand here is year-round — relentless rain, moss, and moisture work from fall through spring, plus the heat-pump and mini-split wave that's run since the 2021 heat dome." },
      { q: 'How does local SEO help with rain and moisture season?', a: "From October through April the Eastside gets near-constant rain, which drives roof, gutter, drainage, moss, and moisture-intrusion work. The businesses already ranking take those calls. We get you ranking and reviewed for that demand so it lands on you instead of the contractor who showed up first on the map." },
      { q: 'Which areas do you cover?', a: "All of Bellevue and the Eastside — Downtown Bellevue, Somerset, Bridle Trails, Medina, Clyde Hill, Hunts Point, Mercer Island, plus Kirkland, Redmond, Sammamish, Issaquah, Newcastle and more. We build genuine neighborhood pages instead of one generic Bellevue page, because that's what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand moisture-driven repairs, heat-pump retrofits, seismic retrofitting, and high-end remodels, and we build your local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "Bellevue's tech-heavy homeowners are early adopters, so a growing share of \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because the work is coming to you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your service areas, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
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
    h1: 'Get your Bellevue business to the top of Google and keep it there',
    h2Exact: 'Bellevue SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Eastside customers search and the leads keep coming. We build that ranking and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free Bellevue SEO audit',
    intro:
      "Bellevue SEO comes down to one question: when someone searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in one of the most affluent, research-driven markets in the country — and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Bellevue businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content, and earning links from trusted Eastside sources. In an affluent, highly educated, competitive market, keeping the site fast on mobile and ranking for year-round rain, moss, and heat-pump demand are two of the quickest ways to pull ahead.",
    problemHeading: "Three reasons your Bellevue site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. If you're not in the top handful of results for what you sell, your site is basically invisible — no matter how good it looks." },
      { title: "Your site doesn't earn an Eastside buyer's trust", body: "Bellevue homeowners are educated, affluent, and skeptical. They land on your site, scan it for credibility, and leave if it looks thin. SEO done right pairs ranking with content that proves you're the established professional they're looking for, so the high-ticket jobs convert instead of bouncing." },
      { title: "You're not ranking for the demand that matters", body: "Eastside demand is year-round — rain, moss, and moisture work from fall through spring, plus the heat-pump and mini-split wave that's run since the 2021 heat dome. The contractors who rank for those terms catch the demand. If your SEO ignores them, you're leaving your steadiest work on the table." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your Eastside customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real Eastside and industry sources. In a competitive, affluent market, links are often what separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Rain & heat-pump SEO', desc: "We rank you for the year-round moss, moisture, and roof searches and the heat-pump and mini-split demand that drive the Eastside's busiest seasons, so you're visible before homeowners start looking.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you — where Bellevue's tech-savvy homeowners increasingly start their research.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Eastside leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the seasonal rain and heat-pump terms that matter here." },
      { name: 'Build authority', desc: "Links and citations from trusted Eastside and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
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
      { q: 'How much does SEO cost in Bellevue?', a: "Most Bellevue SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Bellevue?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on low-competition terms and slower on the most competitive Eastside keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most contractors do best running SEO as the long-term engine and ads for short-term spikes." },
      { q: 'Should my Bellevue SEO target rain and heat-pump season?', a: "Yes. Eastside demand is year-round — rain, moss, and moisture work from fall through spring, and heat-pump and mini-split installs that have run steadily since the 2021 heat dome. Ranking takes months to build, so you have to be in place before homeowners start searching. We optimize for those seasonal terms ahead of time so the steady demand lands on you." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add rain-and-heat-pump and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for, and on the Eastside it matters more than most places — these are early-adopter, tech-savvy homeowners. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which areas around Bellevue do you cover?', a: "All of Bellevue and the Eastside — Kirkland, Redmond, Sammamish, Issaquah, Mercer Island, Newcastle, Medina, Clyde Hill and more — with genuine local pages rather than one generic Bellevue page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'bellevue', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Bellevue Web Design Company | OnwardCraft',
    metaDescription:
      'Bellevue web design that turns visitors into booked jobs — fast, mobile-first sites built for contractors and the Eastside\'s research-heavy homeowners.',
    eyebrow: 'Web Design · Bellevue-Eastside',
    h1: 'Bellevue web design that turns visitors into booked jobs',
    h2Exact: 'Bellevue Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Eastside contractors fast, mobile-first sites engineered to turn visitors into booked work — and to look like the established professional Bellevue's research-heavy homeowners want to hire.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Bellevue contractor websites lose leads quietly: slow on a phone, buried call button, no clear offer, and nothing that signals real credibility to an affluent, skeptical buyer. Web design done right fixes all of that. We build sites that load fast, look like the high-end professional you are, and turn Medina-to-Mercer-Island visitors into booked jobs.",
    aioQuestion: 'What makes a good contractor website in Bellevue?',
    aioAnswer:
      "A good Bellevue contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, and proves trust with reviews, credentials, and real project photos. Because Eastside homeowners are affluent and research every contractor before they call, the site has to look polished and established — that's what separates one that books high-ticket jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next guy. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It doesn't look the part for Eastside money", body: "Bellevue homeowners are affluent and research-heavy, and the jobs here run large. A dated, generic site quietly tells a high-ticket buyer you're not the established pro they want. We build a site that looks like the quality and price of the work you do, so the big jobs take you seriously." },
      { title: "It's too slow on a phone", body: "Most of your Eastside visitors are on mobile, and they bounce if your site takes more than a few seconds to load. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking." },
    ],
    servicesHeading: "What's in an OnwardCraft Bellevue website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your service area, and the high-end jobs you actually want." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your Eastside traffic is. Fast, thumb-friendly, easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that speak to discerning, research-heavy homeowners and book the job, not filler text that reads like everyone else." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Credibility-first design', desc: "Reviews, credentials, certifications, and real project photos placed where they build trust fast, so Bellevue's skeptical, affluent buyers feel confident hiring you for the big jobs.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more of the Eastside's tech-savvy search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your service area, your best jobs, and your competitors, then map the site around booking more of the high-end work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting." },
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
      { q: 'How much does a website cost in Bellevue?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Why does a polished site matter so much in Bellevue?', a: "Eastside homeowners are among the most affluent and educated in the country, and they research every contractor before they call. For a high-ticket remodel or install, they hire the business that looks established and credible. A sharp, fast, trustworthy site is often what gets you the shot at those large jobs." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Eastside terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your Eastside traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Bellevue site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'bellevue', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Bellevue Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your Bellevue website without losing rankings. Faster, mobile-first rebuilds that convert more of the Eastside\'s affluent homeowners into booked.',
    eyebrow: 'Website Redesign · Bellevue-Eastside',
    h1: 'Redesign your Bellevue website without losing your rankings',
    h2Exact: 'Bellevue Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, and too generic to earn an affluent Eastside buyer's trust. We redesign Bellevue contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Bellevue contractor sites for speed, conversions, and the credibility the Eastside's research-heavy homeowners demand, and we migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Bellevue site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "For a high-ticket job on the Eastside, affluent homeowners judge you by your site in seconds. An old, cluttered design quietly sends them to a competitor who looks more established — even when your work is better." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your Eastside visitors before they ever see your offer. A redesign built mobile-first wins them back." },
      { title: "It doesn't convert the high-end jobs you want", body: "Traffic that doesn't turn into calls is wasted — and a generic old site that doesn't signal credibility loses the large remodels and installs that make the Eastside worth it. We rebuild for conversions and for the polished, trustworthy look those jobs require." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your Eastside traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the price of the high-end jobs you want." },
      { name: 'Credibility-first rebuild', desc: "Reviews, credentials, and real project photos placed to build trust fast, so the redesigned site earns the confidence of Bellevue's affluent, research-heavy buyers and lands the big jobs.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as the Eastside's tech-savvy search shifts toward AI.", featured: true },
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
      heading: 'Transparent Bellevue redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Credibility-first rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Bellevue?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is hard to update, isn't bringing in leads, or doesn't look credible enough to win the Eastside's high-ticket jobs, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the new site help me win bigger Eastside jobs?', a: "That's the goal. Bellevue homeowners research every contractor and hire the one who looks established. We rebuild for credibility — reviews, credentials, and real project photos up front — alongside speed and conversions, so the large remodels and installs take you seriously." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const bellevueCity = {
  citySlug: 'bellevue', city: 'Bellevue', state: 'Washington', stateAbbr: 'WA', metro: 'Bellevue-Eastside',

  titleTag: 'Bellevue Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Bellevue and Eastside contractors. Get found, get booked, and own your leads instead of renting them. Free Bellevue audit.',

  eyebrow: 'Bellevue · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Bellevue contractors found and booked',
  h2Exact: 'Bellevue Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for the Eastside's affluent, research-heavy, year-round market. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Built for the Eastside', 'No lock-in contracts'],
  primaryCta: 'Get my free Bellevue audit',

  intro:
    "If you run a contracting business in Bellevue, you're competing for some of the highest-value jobs in the country — and the homeowners here research every contractor before they call. Winning takes three things working together: a site that converts and looks established, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack — all tuned for the Eastside's year-round rain, moss, and heat-pump demand. Here's how we help Bellevue contractors do exactly that.",
  aioQuestion: 'How do Bellevue contractors get more leads online?',
  aioAnswer:
    "Bellevue contractors get more leads by combining a fast, credible, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack. Because the Eastside is affluent, research-heavy, and competitive, the contractors who look established and are already ranking win the most — and the highest-value — work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when the Eastside searches \"near me.\" The single highest-return move for most local businesses — and how you catch year-round rain and heat-pump demand.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search, build an asset you own instead of renting traffic from ads, and measure it in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs — and to look like the established professional Bellevue's affluent homeowners want to hire — not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it carefully so you keep every bit of ranking you've already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Bellevue?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads in one of the country's most competitive, affluent markets." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors — so we understand moisture-driven repairs, heat-pump retrofits, seismic work, and high-end remodels." },
    { q: 'Why does the Eastside market need a different approach?', a: "Bellevue is one of the wealthiest, most educated, most globally diverse cities in the country, and homeowners research every contractor before they hire. The jobs run large and go to the business that looks established and ranks well. We build for credibility and ranking together, tuned to the year-round rain, moss, and heat-pump demand that drives the market." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Bellevue areas do you serve?', a: "All of Bellevue and the Eastside — Downtown Bellevue, Somerset, Medina, Clyde Hill, Hunts Point, Mercer Island, plus Kirkland, Redmond, Sammamish, Issaquah, Newcastle and more." },
    { q: 'Where should I start?', a: "Start with a free Bellevue audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};
