// ANAHEIM — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Anaheim's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// ANAHEIM — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Anaheim is a moving target',
  body:
    "Anaheim is the largest city in Orange County and the heart of one of the most affluent home markets in the country. It's home to Disneyland, the Convention Center, Angel Stadium, and the Honda Center, so tourism drives the headlines — but underneath it is a dense, high-standards residential market full of homeowners who protect serious property values. Two things shape demand here. First, almost everyone searches on a phone with \"near me\" attached, and OC homeowners expect a contractor who looks as polished as the work they're paying for. Second, Anaheim is roughly 54% Hispanic, with a large Vietnamese community next door in Little Saigon — so the agencies fighting for the top three Map Pack spots are almost all ignoring Spanish-language search entirely. That's an open lane. Add canyon and foothill wildfire risk in Anaheim Hills and Yorba Linda, Santa Ana winds, and aging mid-century housing, and the contractors who rank are the ones who book the work.",
  pullQuote: 'In a market this affluent and this bilingual, the contractor who ranks in both languages owns a lane nobody else is even running in.',
  donut: {
    title: 'Who Anaheim is',
    value: 54,
    centerLabel: 'Hispanic',
    legend: [
      { label: 'Hispanic', pct: 54, kind: 'teal' },
      { label: 'Other', pct: 46, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Wildfire/Santa Ana winds (Oct–Dec) and HVAC heat (Jun–Sep)',
  seasonalDemand: [
    { m: 'J', v: 36 }, { m: 'F', v: 34 }, { m: 'M', v: 40 }, { m: 'A', v: 48 },
    { m: 'M', v: 60, peak: true }, { m: 'J', v: 76, peak: true }, { m: 'J', v: 84, peak: true },
    { m: 'A', v: 82, peak: true }, { m: 'S', v: 88, peak: true }, { m: 'O', v: 96, peak: true },
    { m: 'N', v: 92, peak: true }, { m: 'D', v: 70, peak: true },
  ],
  stats: [
    { value: '#1', label: 'largest city in Orange County, anchoring a high-value home market' },
    { value: '~54%', label: 'of Anaheim is Hispanic — Spanish-language search is wide open', accent: true },
    { value: 'Oct–Dec', label: 'Santa Ana winds and wildfire season, when demand spikes' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks' },
  ],
  neighborhoods: [
    'Anaheim Hills', 'Anaheim Colony Historic District', 'Platinum Triangle', 'West Anaheim',
    'Yorba Linda', 'Orange', 'Fullerton', 'Garden Grove', 'Placentia', 'Brea',
    'Villa Park', 'Buena Park', 'Stanton', 'Cypress', 'La Palma',
  ],
};

const AREAS = [
  'Anaheim', 'Anaheim Hills', 'Yorba Linda', 'Orange', 'Fullerton', 'Garden Grove',
  'Placentia', 'Brea', 'Villa Park', 'Buena Park', 'Stanton', 'Cypress',
  'La Palma', 'Westminster', 'Santa Ana',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We understand fire season, emergency calls, and insurance work, so everything we build is shaped around how your customers really search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners three competitors also bought.",
  },
  {
    title: 'We actually speak Anaheim',
    body: "Orange County's affluent, high-standards homeowners, a market that's over half Hispanic, real neighborhood targeting from Anaheim Hills to West Anaheim. The stuff a national agency can't do by swapping a city name into a template.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say an Anaheim contractor gets around 1,500 local \"near me\" impressions a month. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a booked-out calendar — and in a market this affluent, those jobs are worth more per call than almost anywhere. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Anaheim', state: 'California', stateAbbr: 'CA', metro: 'Anaheim-Orange County',
  heroProof: ['Built for the trades', 'Bilingual-ready', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const anaheimLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'anaheim', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Anaheim Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Search your service in Anaheim and three businesses show up on the map. We get you into those three, so the call lands with you. Honest pricing, no lock-in, free audit.',
    eyebrow: 'Local SEO · Anaheim-Orange County',
    h1: 'When Anaheim searches for what you do, be the first name they find',
    h2Exact: 'Anaheim Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. We get you into that top three, so the call lands with you instead of whoever ranked first — in both English and Spanish, where most of your competitors aren't even trying.",
    primaryCta: 'Get my free Anaheim audit',
    intro:
      "Anaheim local SEO comes down to one thing: when a homeowner in Anaheim Hills or West Anaheim searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. This is the largest city in Orange County, with affluent homeowners and a market that's over half Hispanic — so becoming one of those three, in both languages, is the whole game. Here's how you do it.",
    aioQuestion: 'How do Anaheim businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Orange County neighborhoods. Anaheim is affluent and roughly 54% Hispanic, so the winners look polished, respond fast, and capture Spanish-language searches that most local competitors ignore.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks. If you're not one of them, it almost doesn't matter how good your work is — most people never see your name. Getting into that top three is usually the single highest-return move an Anaheim business can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Orange County homeowner to four contractors, then bill each of you to fight over them. It's a treadmill. Local SEO builds the opposite: a lead finds you, calls you, and nobody else got it. Over time you stop renting and start owning the pipeline." },
      { title: "You're invisible to half your market", body: "Anaheim is about 54% Hispanic, with a big Vietnamese community next door in Little Saigon, and almost none of your competitors are ranking in Spanish. That's a wide-open lane. We help you show up for the searches your competitors don't even know they're losing, so you reach homeowners nobody else is talking to." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Anaheim searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes people pick up the phone." },
      { name: 'Neighborhood pages', desc: "Real pages for Anaheim Hills, Yorba Linda, West Anaheim, Orange, Fullerton and the rest, so you rank for the neighborhood someone's actually searching, not just \"Anaheim.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Orange County sources Google trusts — local press, associations, partners. This is what separates page one from page two here." },
      { name: 'Bilingual local SEO', desc: "We help you rank for Spanish-language searches across Anaheim's majority-Hispanic market — a lane most of your competitors aren't even running in.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your service areas and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now over starting later." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Orange County, in both languages where it pays, plus the on-page work to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Orange County areas.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across Orange County.', features: ['Everything in Local Growth', 'Local link building', 'Bilingual search targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Anaheim?', a: "Most Anaheim engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The competitive Anaheim keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days in an Orange County market this competitive is selling you something." },
      { q: 'What makes Anaheim local SEO different?', a: "Two things. It's the largest city in Orange County, one of the most affluent home markets in the country, so homeowners have high standards and trust signals like reviews and a polished profile carry real weight. And it's roughly 54% Hispanic — Spanish-language search is wide open because most of your competitors ignore it entirely." },
      { q: 'Do you handle Spanish-language local SEO?', a: "Yes, and it's one of the biggest advantages in this market. Anaheim is about 54% Hispanic, with a large Vietnamese community nearby in Little Saigon, and almost nobody is ranking in Spanish. We help you show up for those searches, which puts you in front of homeowners your competitors aren't even reaching." },
      { q: 'Which areas do you cover?', a: "All of Anaheim and the surrounding Orange County areas — Anaheim Hills, Yorba Linda, West Anaheim, Orange, Fullerton, Placentia, Brea, Garden Grove and more. We build genuine neighborhood pages instead of one generic Anaheim page, because that's what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand emergency calls, wildfire-driven demand, and insurance jobs, and we build your local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because the work is coming to you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your service areas, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'anaheim', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Anaheim SEO Company | Rank Higher, Get More Leads | OnwardCraft',
    metaDescription:
      'Anaheim SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in contracts, built for Orange County demand. Free Anaheim SEO audit.',
    eyebrow: 'SEO Services · Anaheim-Orange County',
    h1: 'Get your Anaheim business to the top of Google and keep it there',
    h2Exact: 'Anaheim SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Anaheim customers search and the leads keep coming. We build that ranking and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free Anaheim SEO audit',
    intro:
      "Anaheim SEO comes down to one question: when someone searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in an affluent, competitive Orange County market — and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Anaheim businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content, and earning links from trusted Orange County sources. In an affluent, competitive market that's over half Hispanic, ranking in both English and Spanish and for wildfire- and heat-driven seasonal terms are two of the quickest ways to pull ahead.",
    problemHeading: "Three reasons your Anaheim site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. If you're not in the top handful of results for what you sell, your site is basically invisible — no matter how good it looks." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost." },
      { title: "You're not ranking for the demand that matters", body: "Orange County demand swings with the season — Santa Ana winds and wildfire risk in the fall, HVAC heat in the summer — and the contractors who rank for those terms ahead of time catch the spike. If your SEO ignores fire-driven, seasonal, and Spanish-language searches, you're leaving your busiest months on the table." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your Anaheim customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real Orange County and industry sources. In a competitive market, links are often what separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Bilingual & seasonal SEO', desc: "We rank you in Spanish across Anaheim's majority-Hispanic market and for the wildfire- and heat-driven searches that drive Orange County's busiest months, before demand spikes, not after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Anaheim leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the seasonal, fire-driven, and Spanish-language terms that matter here." },
      { name: 'Build authority', desc: "Links and citations from trusted Orange County and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Anaheim SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Orange County search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Bilingual & seasonal SEO', 'eCommerce / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Anaheim?', a: "Most Anaheim SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Anaheim?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on low-competition terms and slower on the most competitive Orange County keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most contractors do best running SEO as the long-term engine and ads for short-term spikes." },
      { q: 'Should my Anaheim SEO target Spanish-language search?', a: "Yes. Anaheim is roughly 54% Hispanic and almost none of your competitors rank in Spanish, so it's one of the cheapest ways to get in front of homeowners nobody else is reaching. We build bilingual content and structure so you capture searches your competitors don't even see." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add bilingual, seasonal, and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which areas around Anaheim do you cover?', a: "All of Anaheim and the surrounding Orange County areas — Anaheim Hills, Yorba Linda, Orange, Fullerton, Placentia, Brea, Garden Grove, Westminster and more — with genuine local pages rather than one generic Anaheim page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'anaheim', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Anaheim Web Design Company | Sites That Convert | OnwardCraft',
    metaDescription:
      'Anaheim web design that turns visitors into booked jobs — fast, mobile-first, bilingual-ready sites built for Orange County contractors. Transparent pricing, you own it all. Free quote.',
    eyebrow: 'Web Design · Anaheim-Orange County',
    h1: 'Anaheim web design that turns visitors into booked jobs',
    h2Exact: 'Anaheim Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Anaheim contractors fast, mobile-first sites engineered to turn visitors into booked work — polished enough for Orange County's high standards and ready to convert in English and Spanish.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Anaheim contractor websites lose leads quietly: slow on a phone, buried call button, no clear offer, English-only in a market that's over half Hispanic. Web design done right fixes all of that. We build sites that load fast, look as polished as the affluent Orange County homeowners expect, and turn Anaheim-Hills-to-West-Anaheim visitors into booked jobs.",
    aioQuestion: 'What makes a good contractor website in Anaheim?',
    aioAnswer:
      "A good Anaheim contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and looks polished enough for Orange County's affluent, high-standards homeowners. Because Anaheim is over half Hispanic and most searches happen on mobile, a bilingual-ready, fast, mobile-first build is what separates a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next guy. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Anaheim visitors are on mobile, and they bounce if your site takes more than a few seconds to load. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking." },
      { title: "It doesn't look the part — or speak the language", body: "In an affluent market like Orange County, homeowners protecting big investments judge you by your site in seconds, and a dated look quietly sends them elsewhere. Worse, an English-only site ignores the 54% of Anaheim that's Hispanic. We build polished, bilingual-ready sites that earn trust across the whole market." },
    ],
    servicesHeading: "What's in an OnwardCraft Anaheim website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your service area, and the jobs you actually want." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your Anaheim traffic is. Fast, thumb-friendly, easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that speak to homeowners protecting a big investment and book the job, not filler text that reads like everyone else." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Bilingual-ready build', desc: "Designed to serve Anaheim's majority-Hispanic market in English and Spanish, so you convert homeowners most of your competitors' sites can't even speak to.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your service area, your best jobs, and your competitors, then map the site around booking more of the work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting." },
    ],
    pricing: {
      heading: 'Transparent Anaheim web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Bilingual-ready build'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Anaheim?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Can you build my site in English and Spanish?', a: "Yes, and in Anaheim it's a real edge. The city is roughly 54% Hispanic, with a large Vietnamese community nearby, and most contractor sites are English-only. A bilingual-ready build lets you convert homeowners your competitors can't even speak to." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Orange County terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your Anaheim traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Anaheim site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'anaheim', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Anaheim Website Redesign | More Leads, No Traffic Loss | OnwardCraft',
    metaDescription:
      'Redesign your Anaheim website without losing rankings. Faster, mobile-first, bilingual-ready rebuilds that convert more Orange County visitors into booked jobs. Free audit.',
    eyebrow: 'Website Redesign · Anaheim-Orange County',
    h1: 'Redesign your Anaheim website without losing your rankings',
    h2Exact: 'Anaheim Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, easy to ignore, and invisible to half of Anaheim. We redesign Orange County contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Anaheim contractor sites for speed and conversions, make them polished and bilingual-ready for Orange County's market, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Anaheim site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "For a high-ticket job, Orange County homeowners protecting a big investment judge you by your site in seconds. An old, cluttered design quietly sends them to a competitor who looks more established — even when your work is better." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your Anaheim visitors before they ever see your offer. A redesign built mobile-first wins them back." },
      { title: "It only speaks to half your market", body: "Anaheim is roughly 54% Hispanic, and an English-only site silently ignores those homeowners. A redesign that's bilingual-ready and built for conversions wins back the leads your old site never even reached." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your Anaheim traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the affluent Orange County homeowners you're after." },
      { name: 'Bilingual-ready rebuild', desc: "Rebuilt to serve Anaheim's majority-Hispanic market in English and Spanish, so the new site converts homeowners your old one never reached.", featured: true },
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
      heading: 'Transparent Anaheim redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Bilingual-ready rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Anaheim?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is hard to update, isn't bringing in leads, or only speaks English in a market that's over half Hispanic, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Can the redesign serve Spanish-speaking customers?', a: "Yes, and in Anaheim that's a real consideration. The city is roughly 54% Hispanic and most contractor sites are English-only. We can rebuild bilingual-ready so the new site converts homeowners your old one never reached." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const anaheimCity = {
  citySlug: 'anaheim', city: 'Anaheim', state: 'California', stateAbbr: 'CA', metro: 'Anaheim-Orange County',

  titleTag: 'Anaheim Marketing for Contractors | Web, SEO & Leads | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Anaheim contractors. Get found, get booked, and own your leads instead of renting them — bilingual-ready for Orange County. Free Anaheim audit.',

  eyebrow: 'Anaheim · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Anaheim contractors found and booked',
  h2Exact: 'Anaheim Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Orange County's affluent, bilingual market. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Bilingual-ready', 'No lock-in contracts'],
  primaryCta: 'Get my free Anaheim audit',

  intro:
    "If you run a contracting business in Anaheim, you're fighting for attention in the largest city in Orange County — one of the most affluent home markets in the country, and a market that's over half Hispanic. Winning here takes three things working together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack — all polished enough for OC standards and built to reach homeowners in both languages. Here's how we help Anaheim contractors do exactly that.",
  aioQuestion: 'How do Anaheim contractors get more leads online?',
  aioAnswer:
    "Anaheim contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack. Because Anaheim is affluent and roughly 54% Hispanic, the contractors who look polished, rank in both English and Spanish, and are already visible before seasonal demand spikes win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Anaheim searches \"near me\" — in English and Spanish, where most of your competitors aren't even trying. The single highest-return move for most local businesses.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search, build an asset you own instead of renting traffic from ads, and measure it in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first, bilingual-ready websites engineered to turn visitors into booked jobs — polished enough for Orange County's high standards — not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it carefully so you keep every bit of ranking you've already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Anaheim?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads — polished for Orange County and ready to reach homeowners in both languages." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors — so we understand emergency calls, wildfire-driven demand, and insurance work." },
    { q: 'Why does bilingual marketing matter in Anaheim?', a: "Anaheim is roughly 54% Hispanic, with a large Vietnamese community nearby in Little Saigon, and almost none of your competitors market in Spanish. That makes Spanish-language search and bilingual websites one of the cheapest, biggest edges available — you reach homeowners nobody else is even talking to." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Anaheim areas do you serve?', a: "All of Anaheim and the surrounding Orange County areas — Anaheim Hills, Yorba Linda, West Anaheim, Orange, Fullerton, Placentia, Brea, Garden Grove, Westminster, Santa Ana and more." },
    { q: 'Where should I start?', a: "Start with a free Anaheim audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};
