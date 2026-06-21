// BATON ROUGE — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Baton Rouge's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// BATON ROUGE — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Baton Rouge is a different kind of fight',
  body:
    "Baton Rouge sits in the heart of Louisiana's petrochemical corridor, a city shaped by refineries, Gulf humidity, hurricane seasons, and the constant roar of LSU football. The metro holds roughly 870,000 people spread across a patchwork of suburbs — Prairieville, Zachary, Denham Springs, Central — and the neighborhoods inside the city itself, from the Garden District to Mid City to Perkins Road. Baton Rouge took a direct hit from Hurricane Gustav in 2008, and in August 2016 it became the center of catastrophic flooding that had nothing to do with a hurricane — just relentless rain that put tens of thousands of homes underwater. Roofing, restoration, and general contractors have been in demand ever since, and every new storm season opens the same question: who shows up first on the map when a homeowner is standing in six inches of water looking for help? Beyond storm work, the Gulf humidity runs year-round. HVAC systems never really rest here, mold is a genuine concern, and building materials degrade faster than they do inland. Refinery engineers and chemical workers in Prairieville and Zachary have solid incomes and active homes. And with a community that's about 55 percent Black — a proportion larger than nearly any other metro we serve — framing that resonates with the actual people who live here matters more than a generic template with the city name swapped in.",
  pullQuote: 'In a city built on storm season, flood recovery, and Gulf humidity, the contractor who owns the map owns the call — every single time the weather turns.',
  donut: {
    title: 'Who lives in Baton Rouge',
    value: 55,
    centerLabel: 'Black/AA',
    legend: [
      { label: 'Black/AA', pct: 55, kind: 'teal' },
      { label: 'Other', pct: 45, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Hurricane season (Jun–Nov) drives peak demand; HVAC runs year-round',
  seasonalDemand: [
    { m: 'J', v: 45 }, { m: 'F', v: 42 }, { m: 'M', v: 55 },
    { m: 'A', v: 60 }, { m: 'M', v: 70 }, { m: 'J', v: 88, peak: true },
    { m: 'J', v: 95, peak: true }, { m: 'A', v: 98, peak: true }, { m: 'S', v: 92, peak: true },
    { m: 'O', v: 85, peak: true }, { m: 'N', v: 78, peak: true }, { m: 'D', v: 50 },
  ],
  stats: [
    { value: '870K', label: 'people across the Baton Rouge metro' },
    { value: '~55%', label: 'of residents are Black or African American — authentic community framing is essential', accent: true },
    { value: 'Jun–Nov', label: 'hurricane season, when roofing and restoration calls explode' },
    { value: 'Year-round', label: 'Gulf humidity keeps HVAC and mold work constant across every season' },
  ],
  neighborhoods: [
    'Garden District', 'Mid City', 'Perkins Road', 'Prairieville', 'Gonzales',
    'Zachary', 'Baker', 'Central', 'Denham Springs', 'Walker',
    'Shenandoah', 'Sherwood Forest', 'Old Jefferson', 'Port Allen', 'Addis',
  ],
};

const AREAS = [
  'Baton Rouge', 'Prairieville', 'Zachary', 'Denham Springs', 'Central',
  'Baker', 'Gonzales', 'Walker', 'Port Allen', 'Addis',
  'Garden District', 'Mid City', 'Perkins Road', 'Sherwood Forest', 'Shenandoah',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching solid trade contractors hand their marketing budget to lead brokers who sold the same job to four competitors. In a city like Baton Rouge — where every storm season floods the phones and refinery families in Prairieville need real professionals, not a race to the bottom — you deserve leads that belong to you. Not a shared pool. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We understand storm-season demand',
    body: "Hurricane Gustav, the 2016 floods, and every named storm since have shaped what Baton Rouge homeowners search and when. We build your SEO around the real search patterns that spike every June through November, so you're in the Map Pack before the storm hits, not scrambling after.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker selling the same flooded-basement job to you and three competitors at the same time.",
  },
  {
    title: 'We actually know this community',
    body: "Baton Rouge is majority Black, deeply rooted in local identity, and proud of it. The contractors who win long-term here earn trust with the community instead of pasting a generic template over a city name. We write and build with that in mind.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Baton Rouge contractor gets around 1,500 local \"near me\" impressions a month across their service area. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a booked-out calendar — and when a storm rolls through and every homeowner in Denham Springs needs a roofer, being on page two means missing the entire season. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Baton Rouge', state: 'Louisiana', stateAbbr: 'LA', metro: 'Baton Rouge',
  heroProof: ['Built for the trades', 'Storm-season ready targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const batonRougeLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'baton-rouge', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Baton Rouge Local SEO Company | OnwardCraft',
    metaDescription:
      'Search your service in Baton Rouge and three businesses show up on the map. We get you into those three before storm season hits.',
    eyebrow: 'Local SEO · Baton Rouge, LA',
    h1: 'When Baton Rouge searches for what you do, be the first name they find',
    h2Exact: 'Baton Rouge Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. In a market shaped by storm seasons and Gulf-coast humidity, we get you into that top three before the next weather event hits — so the call lands with you, not whoever ranked first.",
    primaryCta: 'Get my free Baton Rouge audit',
    intro:
      "Baton Rouge local SEO comes down to one thing: when a homeowner in Zachary or Denham Springs searches your service plus \"near me\" after a tropical storm knocks out their roof, are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. This market is driven by storm cycles, constant humidity, and a community that knows and trusts local names — being one of those three in the neighborhoods and suburbs you serve is the whole game. Here's how you do it.",
    aioQuestion: 'How do Baton Rouge businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and communities you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Baton Rouge neighborhoods and suburbs. Baton Rouge is storm-driven and community-rooted, so the winners stay visible year-round, optimize for hurricane-season search spikes, and build genuine trust with a majority-Black community that values authentic local businesses.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? When a storm rolls through and every homeowner in Central or Prairieville needs emergency restoration, those three contractors get the overwhelming majority of the calls. If you're not one of them, it almost doesn't matter how fast you can mobilize — most people never see your name. Getting into that top three before storm season opens is the single highest-return move a Baton Rouge contractor can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Baton Rouge homeowner to four contractors, then bill each of you to fight over them. After a weather event, per-lead prices spike and the competition gets brutal. Local SEO builds the opposite: a lead finds you, calls you, and nobody else got it. Over time you stop renting and start owning the pipeline." },
      { title: "You're invisible when it matters most", body: "Storm demand in Baton Rouge doesn't build slowly — it explodes overnight when a system makes landfall or the rain won't stop. Contractors who aren't already in the Map Pack before the weather event miss the entire surge. We build your visibility ahead of season so you're the name that shows up when homeowners are standing in water looking for help." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Baton Rouge searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing across the metro." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes the community pick up the phone." },
      { name: 'Neighborhood and suburb pages', desc: "Real pages for Prairieville, Zachary, Denham Springs, Central, and the city neighborhoods, so you rank for the community someone's actually searching, not just \"Baton Rouge.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Baton Rouge sources Google trusts — local press, community organizations, trade associations, partners. This is what separates page one from page two here." },
      { name: 'Storm-season and emergency SEO', desc: "We optimize for the search patterns that spike during hurricane season and major flooding events — so you're visible when demand explodes, not just when it's slow.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you when homeowners turn there first.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your Baton Rouge service area and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now — especially before storm season — over starting later." },
      { name: 'Add local content', desc: "Neighborhood and suburb pages across your service area, plus the on-page work to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next suburb or service." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses competing across Baton Rouge and the surrounding suburbs.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood and suburb landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across the entire metro.', features: ['Everything in Local Growth', 'Local link building', 'Storm-season and emergency SEO', 'Multi-suburb and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Baton Rouge?', a: "Most Baton Rouge engagements land between $750 and $2,500 a month, depending on how many suburbs and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The competitive Baton Rouge keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days is selling you something — and more importantly, you need to be in place before storm season, not building up to it during." },
      { q: 'What makes Baton Rouge local SEO different?', a: "Two things. The market is heavily driven by seasonal demand — hurricane season (June through November) can triple search volume for roofing and restoration overnight, and contractors who aren't already in the Map Pack miss the surge entirely. And Baton Rouge is a majority-Black community that values authentic local presence, so framing that actually speaks to residents matters more than a copied template." },
      { q: 'Do you optimize for storm and emergency searches?', a: "Yes, and in Baton Rouge that's one of the highest-return optimizations you can make. After Gustav and especially the 2016 floods, homeowners search fast and trust the first name they see. We optimize for the emergency and storm-damage search terms that spike during events so you capture that demand." },
      { q: 'Which areas do you cover?', a: "The full Baton Rouge metro — Prairieville, Zachary, Denham Springs, Central, Baker, Gonzales, Walker, Port Allen, and the city neighborhoods including Garden District, Mid City, and Perkins Road. We build genuine community pages instead of one generic Baton Rouge page, because that's what actually ranks for \"[service] [community]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, restoration, plumbing, electrical, and general contractors. We understand storm-damage work, humidity-driven mold and HVAC calls, and the insurance jobs that follow major weather events in Louisiana." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. In a storm market where homeowners are searching fast and stressed, showing up in every channel matters." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. In a storm market, per-lead prices spike after every weather event and you're still competing with three other contractors for the same job. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because the work is coming to you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your service area, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest before storm season, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'baton-rouge', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Baton Rouge SEO Company | OnwardCraft',
    metaDescription:
      'Baton Rouge SEO that ranks contractors on Google and brings in leads you own. Storm-season ready, revenue-tied reporting, no lock-in contracts.',
    eyebrow: 'SEO Services · Baton Rouge, LA',
    h1: 'Get your Baton Rouge business to the top of Google and keep it there',
    h2Exact: 'Baton Rouge SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Baton Rouge customers search — storm damage, HVAC repair, restoration work — and the leads keep coming. We build that ranking and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free Baton Rouge SEO audit',
    intro:
      "Baton Rouge SEO comes down to one question: when a homeowner in Prairieville searches your service, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords across a market shaped by storm seasons, Chemical Corridor incomes, and Gulf-coast humidity — and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Baton Rouge businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content tied to specific communities and suburbs, and earning links from trusted Baton Rouge and Louisiana sources. In this market, ranking ahead of storm season and for the HVAC and humidity-related searches that run year-round are two of the quickest ways to pull ahead of competitors who treat every month the same.",
    problemHeading: "Three reasons your Baton Rouge site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. When storm season hits and a homeowner in Denham Springs needs emergency roofing or restoration, they tap the first few results. If you're not there, it doesn't matter how fast you can mobilize — you're invisible to the surge." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. And in a storm-driven market, competitors pile into paid ads right after a weather event, driving click costs up exactly when you're busiest. SEO builds an asset you own: rankings that keep producing leads year-round and don't spike in cost after every named storm." },
      { title: "You're not ranking for the demand that matters", body: "Baton Rouge demand spikes hard during hurricane season and whenever the Gulf humidity drives mold and HVAC calls. The contractors who rank for those terms ahead of time catch the surge. If your SEO ignores storm-damage and emergency searches, you're leaving your busiest weeks on the table — and those are the most lucrative jobs in the market." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your Baton Rouge customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot across every season." },
      { name: 'Link building', desc: "Authority from real Baton Rouge and Louisiana industry sources. In a market shaped by major weather events and a tight-knit community, local credibility matters." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across your suburbs and neighborhoods alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Storm-season & emergency SEO', desc: "We rank you for the hurricane, flood, roof damage, and water intrusion searches that drive Baton Rouge's busiest and most profitable weeks — before the season, not after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of stressed, time-pressed homeowners now begin their search.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Baton Rouge leads — including storm-season and HVAC searches." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the storm-season and emergency terms that matter most in this market." },
      { name: 'Build authority', desc: "Links and citations from trusted Baton Rouge, Louisiana, and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set or service area." },
    ],
    pricing: {
      heading: 'Transparent Baton Rouge SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and suburbs.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Baton Rouge search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Storm-season & emergency SEO', 'Multi-suburb / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Baton Rouge?', a: "Most Baton Rouge SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Baton Rouge?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter suburb terms and slower on the most competitive citywide keywords. Because storm-season demand spikes fast, it's especially important to start building now rather than waiting until June." },
      { q: 'Is SEO better than Google Ads for storm-season work?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying — and in Baton Rouge, competitors flood ad auctions right after a storm hits, driving costs up exactly when you need leads most. SEO is an asset you own that keeps producing leads year-round at a lower cost per lead. Most contractors do best running SEO as the long-term engine and ads for targeted bursts." },
      { q: 'Should my Baton Rouge SEO target storm-season demand?', a: "Absolutely. When a tropical system threatens Louisiana, searches for roofing, water damage, flood restoration, and generators spike overnight. Ranking takes months to build, so you have to be in place before the season, not chasing it after. We optimize for those emergency terms ahead of time so your busiest and most profitable weeks land on you." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add storm-season/emergency and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. When a homeowner is stressed after a flood event and searching on their phone, they may be using an AI search tool. We structure your content and schema so those engines can read, trust, and cite your business." },
      { q: 'Which areas around Baton Rouge do you cover?', a: "The full metro — Prairieville, Zachary, Denham Springs, Central, Baker, Gonzales, Walker, Port Allen, and the city neighborhoods including Garden District and Mid City. We build genuine local pages, not one generic Baton Rouge page, because that's what actually ranks for \"[service] [community]\" searches." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. After storm events, when shared-lead prices spike, contractors who own their search visibility don't have to pay a broker for demand that's already looking for them." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business — including where storm-season keywords could move fastest. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'baton-rouge', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Baton Rouge Web Design Company | OnwardCraft',
    metaDescription:
      'Baton Rouge web design that turns visitors into booked jobs — fast, mobile-first sites built for contractors in a storm-driven, community-rooted market.',
    eyebrow: 'Web Design · Baton Rouge, LA',
    h1: 'Baton Rouge web design that turns visitors into booked jobs',
    h2Exact: 'Baton Rouge Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Baton Rouge contractors fast, mobile-first sites engineered to turn visitors into booked work — and to earn trust in a community where authenticity and local identity actually matter.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Baton Rouge contractor websites lose leads quietly: slow on a phone, no clear offer, nothing that tells a homeowner in Zachary or Garden District that you're the real deal. Web design done right fixes all of that. We build sites that load fast, look like the professional you are, and turn storm-season visitors into booked jobs — designed for a community that values genuine local businesses over generic corporate templates.",
    aioQuestion: 'What makes a good contractor website in Baton Rouge?',
    aioAnswer:
      "A good Baton Rouge contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific suburbs and neighborhoods you serve. Because storm events send homeowners to their phones in a hurry and the community values authentic local presence, mobile speed, a clear next step, and copy that speaks to real Baton Rouge life are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, nothing that tells a homeowner in Prairieville why they should call you over someone else. After a storm or a flood, homeowners make decisions fast. We design every page around one job: turning a visitor into a booked lead before they tap back and call someone else." },
      { title: "It's too slow on a phone", body: "Most of your Baton Rouge visitors are on mobile — especially in the middle of a weather event when they're looking for emergency help. A site that takes more than a few seconds to load loses them. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking." },
      { title: "It doesn't speak to your community", body: "A homeowner in Denham Springs or the Garden District wants to see you actually serve their community — not a generic \"Louisiana contractor\" page that could be anybody. We build sites that name the suburbs and neighborhoods you work, speak to real Baton Rouge life, and earn trust with a community that can smell an out-of-town template a mile away." },
    ],
    servicesHeading: "What's in an OnwardCraft Baton Rouge website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your communities, and the jobs you actually want in the Baton Rouge market." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your Baton Rouge traffic is — and where homeowners search during emergencies." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step, especially for storm-damage and emergency calls." },
      { name: 'Copy that sells', desc: "Words that speak to Baton Rouge homeowners — their real concerns about storm damage, humidity, mold, and HVAC — not filler text that reads like everyone else." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and suburb-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Community-targeted pages', desc: "Pages built around Prairieville, Zachary, Denham Springs, Central, and the city neighborhoods you serve — so you build trust and rank locally instead of blending into a generic statewide page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more stressed, time-pressed homeowners turn to AI first after a storm.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your communities, your best jobs, and your competitors, then map the site around booking more of the work you want in the Baton Rouge market." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells — including the storm-season and emergency language that resonates with Baton Rouge homeowners." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting across your service area." },
    ],
    pricing: {
      heading: 'Transparent Baton Rouge web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + suburb pages', 'Speed & Core Web Vitals', 'Community-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Baton Rouge?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site earn trust with the Baton Rouge community?', a: "That's a real priority here. Baton Rouge is a majority-Black community that knows and values authentic local businesses. We write copy and build pages that speak to real Baton Rouge life — the neighborhoods, the storm concerns, the community identity — not a generic template with the city name swapped in." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and suburb-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Baton Rouge terms before storm season." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your Baton Rouge traffic comes from — and where homeowners are searching during storms and emergencies. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Baton Rouge site should include for your specific trade and communities, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'baton-rouge', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Baton Rouge Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your Baton Rouge website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs before storm season.',
    eyebrow: 'Website Redesign · Baton Rouge, LA',
    h1: 'Redesign your Baton Rouge website without losing your rankings',
    h2Exact: 'Baton Rouge Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, easy to ignore when a homeowner is stressed after a storm. We redesign Baton Rouge contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Baton Rouge contractor sites for speed and conversions, build them to earn community trust and stand out across the metro, and migrate with the redirects and SEO care that protect the traffic you already have — especially before storm season when your rankings matter most.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one. In a storm-driven market like Baton Rouge, losing rankings right before June can cost you the most profitable season of the year.",
    problemHeading: "Signs your Baton Rouge site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "For a storm-damage repair or a major HVAC replacement, Baton Rouge homeowners judge you by your site in seconds. A homeowner standing in water after the 2016 floods was looking for someone who looked like they could handle it. An old, cluttered design quietly sends them to a competitor who looks more professional — even when your work is better." },
      { title: "It's slow and hard to use on a phone", body: "Most of your Baton Rouge visitors are on a phone, often under stress. If your site is clunky or slow, you're losing them before they ever see your offer. A redesign built mobile-first wins them back — and improves your rankings at the same time." },
      { title: "It doesn't reflect who you are to this community", body: "Baton Rouge has a strong sense of local identity. An outdated, generic contractor site doesn't speak to the Garden District homeowner or the refinery worker in Prairieville the way a site built around real Baton Rouge life does. We rebuild for conversions and for the communities you actually serve — so the right buyers choose you." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing the color scheme." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned — especially critical before storm season." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs — including the emergency calls that follow Baton Rouge weather events." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your Baton Rouge traffic lives and where homeowners search during emergencies." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work, the price of your jobs, and the character of the communities you serve." },
      { name: 'Community-targeted rebuild', desc: "Rebuilt around the suburbs and neighborhoods you serve — Prairieville, Zachary, Denham Springs, Central, and the city — so the new site earns trust locally instead of reading like a statewide template.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI, especially among homeowners searching fast after a storm.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you leads and rankings, then map a redesign that fixes it without breaking what already works — with storm-season timing in mind." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build — one that speaks authentically to Baton Rouge." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and improve, not drop — especially important before or during peak storm season." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting across your service area, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Baton Rouge redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + suburb pages', 'Community-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Baton Rouge?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. In a storm market, losing your rankings right before June can cost you your best season — so we take migration seriously." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, doesn't speak to the Baton Rouge community, isn't bringing in storm-season leads, or looks generic against local competitors, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the redesign help me earn trust with this community?', a: "Yes, and that's a real priority. Baton Rouge has strong local identity and a majority-Black community that values authentic businesses over generic out-of-town templates. We rebuild with that in mind — naming real communities, writing copy that speaks to real local concerns like storm damage and Gulf humidity, and presenting you as the genuine local professional you are." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals — which lifts both conversions and rankings, and matters especially when homeowners are searching from their phones in the middle of a weather event." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix for the Baton Rouge market specifically, and a fixed-price quote with a timeline and a safe migration plan. No pressure, just a diagnosis." },
    ],
  },
];

export const batonRougeCity = {
  citySlug: 'baton-rouge', city: 'Baton Rouge', state: 'Louisiana', stateAbbr: 'LA', metro: 'Baton Rouge',

  titleTag: 'Baton Rouge Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Baton Rouge contractors. Get found before storm season, get booked, and own your leads — built for a community-rooted.',

  eyebrow: 'Baton Rouge · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Baton Rouge contractors found and booked',
  h2Exact: 'Baton Rouge Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Baton Rouge's storm-driven, community-rooted market. One team to get you ranking before hurricane season, converting year-round, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Storm-season ready targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Baton Rouge audit',

  intro:
    "If you run a contracting business in Baton Rouge, your market doesn't move like other cities. Hurricane Gustav, the catastrophic 2016 floods, and every storm season since have shaped what homeowners here search for and when they search for it. Gulf humidity runs year-round, Chemical Corridor families in Prairieville and Zachary have real budgets, and this is a majority-Black community with strong local identity — which means generic marketing templates from out-of-town agencies don't land the same way. Winning here takes three things working together: a site that converts, SEO that ranks you before storm season opens, and local SEO that puts you in the Map Pack across the suburbs and neighborhoods you serve. Here's how we help Baton Rouge contractors do exactly that.",
  aioQuestion: 'How do Baton Rouge contractors get more leads online?',
  aioAnswer:
    "Baton Rouge contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack across the metro's suburbs and neighborhoods. The contractors who win here get into the Map Pack before storm season, optimize for the emergency and humidity-driven searches that spike year-round, and earn trust with a community that values authentic local businesses over out-of-town templates.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Baton Rouge searches \"near me.\" The single highest-return move for most local contractors — done right across your suburbs and neighborhoods before storm season hits.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search — storm damage, restoration, HVAC, roofing — build an asset you own instead of renting traffic from ads, and measure it in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs and to earn trust in a community where authenticity matters — not brochures that look the same as every other contractor in the market.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions before storm season — and migrate it carefully so you keep every bit of ranking you've already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Baton Rouge?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank before storm season, convert year-round, and own their leads instead of renting them from brokers." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, restoration, plumbing, electrical, and general contractors — so we understand storm-damage work, humidity-driven mold and HVAC calls, and the insurance jobs that follow major weather events in Louisiana." },
    { q: 'Why does the Baton Rouge market need a different approach?', a: "A few reasons. The market is storm-driven — Hurricane Gustav in 2008 and the catastrophic 2016 floods put roofing and restoration contractors in constant demand, and every June through November that cycle repeats. Gulf humidity keeps HVAC and mold work year-round. And Baton Rouge is a majority-Black community with strong local identity, so authentic framing matters here in a way a generic out-of-town template can't match." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Baton Rouge areas do you serve?', a: "The full metro — Prairieville, Zachary, Denham Springs, Central, Baker, Gonzales, Walker, Port Allen, and the city neighborhoods including Garden District, Mid City, and Perkins Road. We build genuine community pages instead of one generic Baton Rouge page." },
    { q: 'Where should I start?', a: "Start with a free Baton Rouge audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work before the next storm season. No pitch deck, just a plan." },
  ],
};
