// KNOXVILLE — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Knoxville's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// KNOXVILLE — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Knoxville is tougher than it looks',
  body:
    "Knoxville sits at the doorstep of the Great Smoky Mountains — the most visited national park in the United States — and that geography shapes its home-services market in ways that catch outside agencies flat-footed. The metro spans urban Knoxville, rapidly growing suburbs like Farragut, Hardin Valley, and Lenoir City, and a surrounding ring of vacation cabin communities that have their own maintenance and renovation demand. Two forces drive that demand. First, East Tennessee weather is unforgiving in ways people underestimate: winter ice storms regularly down trees and damage roofs across Knox and surrounding counties, and the spring tornado season sends homeowners scrambling for roofers and restoration contractors. Second, Knoxville has drawn a wave of retirees and remote workers who want mountains plus affordable housing, swelling the homeowner base and pushing construction and renovation demand across the suburbs. Knoxville homeowners are also famously loyal to local businesses — the University of Tennessee runs deep here — and deeply skeptical of national chains and out-of-state agencies. The contractor who looks and sounds like a Knoxville company wins the trust, and the trust wins the job.",
  pullQuote: 'In Knoxville, when the ice comes down or a storm rolls through, the contractors already ranking get the calls. Everyone else gets voicemail.',
  donut: {
    title: 'How Knoxville homeowners break down',
    value: 58,
    centerLabel: 'homeowner rate',
    legend: [
      { label: 'Homeowners', pct: 58, kind: 'teal' },
      { label: 'Renters', pct: 42, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes in Knoxville',
  seasonCaption: 'Ice storms (Jan–Feb), spring tornado season (Mar–May), summer HVAC (Jun–Sep)',
  seasonalDemand: [
    { m: 'J', v: 91, peak: true }, { m: 'F', v: 88, peak: true }, { m: 'M', v: 82, peak: true },
    { m: 'A', v: 85, peak: true }, { m: 'M', v: 78, peak: true }, { m: 'J', v: 70 },
    { m: 'J', v: 88, peak: true }, { m: 'A', v: 90, peak: true }, { m: 'S', v: 84, peak: true },
    { m: 'O', v: 52 }, { m: 'N', v: 48 }, { m: 'D', v: 58 },
  ],
  stats: [
    { value: '500K+', label: 'people across the greater Knoxville metro' },
    { value: '~58%', label: 'homeowner rate — a solid base of property owners who need local trades', accent: true },
    { value: 'Jan–Feb', label: 'ice storm season, when roofing and tree calls spike overnight' },
    { value: 'Top 3', label: 'Map Pack spots that capture most of the clicks for any trade search' },
  ],
  neighborhoods: [
    'Fort Sanders', 'Market Square', '4th & Gill', 'Sequoyah Hills', 'Farragut',
    'Powell', 'Hardin Valley', 'Lenoir City', 'Oak Ridge', 'Maryville',
    'Bearden', 'West Hills', 'Halls', 'Karns', 'Fountain City',
  ],
};

const AREAS = [
  'Fort Sanders', 'Market Square', '4th & Gill', 'Sequoyah Hills', 'Farragut',
  'Powell', 'Hardin Valley', 'Lenoir City', 'Oak Ridge', 'Maryville',
  'Bearden', 'West Hills', 'Halls', 'Karns', 'Fountain City',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors — people doing real work in real communities — hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. Knoxville homeowners already prefer local. They'd rather hire someone they found through Google than a name a national lead broker handed them. The problem is most local contractors aren't set up to be found. That's exactly what we fix. Get you ranking for the searches your customers are already running, own those leads, and stop writing checks to middlemen. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We understand ice storm call surges, tornado-season restoration jobs, and the summer AC rush that hits East Tennessee hard — so everything we build reflects how your customers actually search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker selling the same Knoxville homeowner to four contractors at once.",
  },
  {
    title: 'We actually understand Knoxville',
    body: "Farragut to Fort Sanders, Lenoir City to Oak Ridge — plus the vacation cabin and Smoky Mountain tourism market that adds a whole second layer of demand. The stuff a national shop can't do by swapping a city name into a template.",
  },
  {
    title: 'No contracts, no mystery',
    body: "Published prices, reporting tied to leads, month-to-month after 90 days. Knoxville homeowners are loyal but only to people who earn it. That standard applies to us too.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Knoxville contractor gets around 1,200 local \"near me\" impressions a month across a handful of neighborhoods. Moving from page-two invisibility into the top three is the difference between a quiet week and a booked-out calendar — especially when ice or a storm hits and homeowners are searching in a panic. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Knoxville', state: 'Tennessee', stateAbbr: 'TN', metro: 'Knoxville',
  heroProof: ['Built for the trades', 'Knoxville-specific targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const knoxvilleLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'knoxville', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Knoxville Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Search your trade in Knoxville and three businesses show up on the map. We get you into those three, so the call lands with you.',
    eyebrow: 'Local SEO · Knoxville, TN',
    h1: 'When Knoxville searches for what you do, be the first name they find',
    h2Exact: 'Knoxville Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone in Farragut or Fort Sanders searches your trade plus \"near me.\" Everyone below them basically doesn't exist. We get you into that top three across the Knoxville neighborhoods you serve, so the call lands with you — before the ice storm hits and every contractor in town is buried.",
    primaryCta: 'Get my free Knoxville audit',
    intro:
      "Knoxville local SEO comes down to one thing: when a homeowner in Sequoyah Hills or Hardin Valley searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. And in Knoxville, where homeowners already prefer local and loyal, the contractor who shows up first gets the job. Two seasonal windows make this especially high-stakes: January and February ice storms that send roof and tree calls spiking overnight, and the spring tornado season that does the same for restoration and roofing. Here's how you rank before those windows open.",
    aioQuestion: 'How do Knoxville businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and Knoxville neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews from local homeowners; and local content tied to real Knoxville communities — from Farragut to Powell, from Oak Ridge to Maryville. Knoxville homeowners are loyal to local businesses and skeptical of out-of-state chains, so an authentic local presence and strong reviews are especially powerful here.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own trade plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks. In Knoxville, where most homeowners make their decision before they even pick up the phone, if you're not one of those three, it almost doesn't matter how good your work is. And when an ice storm rolls through in January and every homeowner in Knox County is searching at once, the contractors already in the top three book their calendars — everyone else gets voicemail." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Knoxville homeowner to four contractors and bill each of you to fight over them. Knoxville homeowners are already inclined to hire local — but they find local through Google, not through a lead broker. Local SEO builds the opposite of that treadmill: a homeowner finds you, calls you directly, and nobody else got the same lead." },
      { title: "You're invisible outside your one core neighborhood", body: "Farragut homeowners search differently than people in Powell or Oak Ridge, and the suburb boom means there are more homeowners in Hardin Valley and Lenoir City every year. If your Google presence only covers one corner of the metro, you're leaving the rest of a fast-growing market to competitors who had the foresight to target it." },
    ],
    servicesHeading: 'What it actually takes to rank you in Knoxville',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Knoxville searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing across Knoxville and the surrounding counties." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished Knoxville jobs into a steady flow of reviews. Loyal local customers leave great reviews — we just make it easy for them." },
      { name: 'Neighborhood pages', desc: "Real pages for Farragut, Sequoyah Hills, Oak Ridge, Lenoir City, and the rest, so you rank for the neighborhood someone's actually searching, not just \"Knoxville TN.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Knoxville-area sources Google trusts — local press, chambers, community organizations, industry partners." },
      { name: 'Seasonal storm and ice SEO', desc: "We rank you for the ice storm, tornado, and storm-damage searches that drive Knoxville's busiest demand windows — before the season hits, not after.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across the Knoxville metro — Farragut, Powell, Oak Ridge, Maryville and beyond — and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift within a few weeks, especially if competitors have let their profiles go stale." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. Knoxville homeowners are loyal reviewers once they're happy — we make it easy to capture that loyalty." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across the Knoxville metro, plus the seasonal storm and ice storm content that puts you in position before demand spikes." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right in Knoxville.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses competing across Knoxville neighborhoods and suburbs.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across the full Knoxville metro.', features: ['Everything in Local Growth', 'Local link building', 'Seasonal storm and ice SEO', 'Multi-area and suburb pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Knoxville?', a: "Most Knoxville engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after. Our tiers are right above. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. Competitive Knoxville keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising page one in 30 days is selling you something." },
      { q: 'What makes Knoxville local SEO different from other markets?', a: "A few things. Knoxville homeowners are unusually loyal to local businesses — they want to hire someone who feels like a neighbor, not a national chain. The market also has dramatic seasonal demand spikes from ice storms and the spring tornado season, so the contractors who are already ranking when those hit book out; late arrivals scramble. And the metro is spread across fast-growing suburbs where many contractors haven't yet established a presence." },
      { q: 'Do you cover the Knoxville suburbs too?', a: "Yes. Farragut, Hardin Valley, Lenoir City, Powell, Oak Ridge, Maryville — the suburb boom is real, and those homeowners are searching just like city residents. We build genuine neighborhood pages for the areas you serve instead of one generic Knoxville page." },
      { q: 'Can you help me rank before ice storm and tornado season?', a: "That's one of the highest-value things we do in Knoxville. Ice storm and storm-damage searches spike overnight in January and February, and again during spring tornado season. Ranking takes months to build, so you have to be in position before the season opens. We optimize for those terms as part of every engagement." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand East Tennessee ice storm call surges, vacation cabin maintenance markets, and the summer AC demand that hits Knoxville hard, and we build your local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business — it's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads — the same homeowner sold to four competitors. Knoxville homeowners prefer local, but they find local through Google, not a lead broker. We build rankings and a Google profile that send leads straight to you so you stop paying for shared leads." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across the Knoxville metro, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck — just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'knoxville', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Knoxville SEO Company | Rank Higher, Get Leads | OnwardCraft',
    metaDescription:
      'Knoxville SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in contracts, built for East Tennessee.',
    eyebrow: 'SEO Services · Knoxville, TN',
    h1: 'Get your Knoxville business to the top of Google and keep it there',
    h2Exact: 'Knoxville SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what Knoxville homeowners search and the leads keep coming — including when ice storms and tornado season send searches spiking overnight. We build that ranking and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free Knoxville SEO audit',
    intro:
      "Knoxville SEO comes down to one question: when a homeowner in Farragut or Oak Ridge searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in a market that's growing fast, loyal to local, and hit by weather-driven demand spikes that reward whoever ranks first. We measure everything in leads, not vanity traffic.",
    aioQuestion: 'How do Knoxville businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms Knoxville customers search, publishing genuinely useful local content tied to specific neighborhoods and suburbs, and earning links from trusted East Tennessee sources. In Knoxville, ranking for seasonal storm-damage and ice-related searches ahead of the January and February demand spikes is one of the highest-return SEO moves a local contractor can make.",
    problemHeading: "Three reasons your Knoxville site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. Knoxville homeowners are inclined to pick local — but they find local through Google, and if you're not in the top results for what you sell, you're invisible no matter how good your reputation is around the neighborhood." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost — and they stay working when demand spikes after a Knoxville ice storm." },
      { title: "You're not positioned for the seasonal demand that matters", body: "Knoxville's biggest demand windows are predictable: ice storms in January and February, spring tornado season in March through May, and the summer HVAC push through September. Ranking for those searches takes months to build. If you're not in position before the season, the contractors who are take all the work." },
    ],
    servicesHeading: 'The SEO work that actually moves Knoxville rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms Knoxville homeowners search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot — including neighborhood and suburb pages across the Knoxville metro." },
      { name: 'Link building', desc: "Authority from real Knoxville and East Tennessee sources. Local chambers, media, industry associations — the signals that move competitive local keywords." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across the neighborhoods and suburbs you serve." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your Knoxville SEO is actually worth." },
      { name: 'Seasonal storm and ice SEO', desc: "We rank you for ice storm, tornado-damage, and storm-repair searches before the season hits, so you capture Knoxville's highest-demand windows instead of scrambling after them.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of local search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors across the Knoxville metro, then build a roadmap around the keywords most likely to drive real leads — including the seasonal terms that matter most here." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank in a competitive local market." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content covering neighborhoods, suburbs, and the seasonal searches that drive Knoxville's biggest demand spikes." },
      { name: 'Build authority', desc: "Links and citations from trusted Knoxville and East Tennessee sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set or suburb." },
    ],
    pricing: {
      heading: 'Transparent Knoxville SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core Knoxville keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across Knoxville neighborhoods and suburbs.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to dominate Knoxville search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal storm and ice SEO', 'Multi-suburb and service-area pages', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Knoxville?', a: "Most Knoxville SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Knoxville?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6. Tighter neighborhood terms move faster; competitive metro-wide keywords take longer. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads for Knoxville contractors?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Knoxville contractors do best running SEO as the long-term engine — especially for seasonal demand windows — with ads for short-term spikes." },
      { q: 'Should my Knoxville SEO target seasonal demand like ice storms?', a: "Absolutely — it's one of the highest-return things you can do here. Ice storm searches spike overnight in January and February; spring tornado searches spike March through May; summer HVAC runs June through September. Ranking takes months to build, so you have to be in place before the season, not chasing it after. We optimize for those terms as part of every engagement." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal/storm SEO and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which Knoxville areas do you cover?', a: "The full metro — Fort Sanders, Farragut, Hardin Valley, Lenoir City, Powell, Oak Ridge, Maryville, Sequoyah Hills, and all the neighborhoods and suburbs in between. We build genuine local pages rather than one generic Knoxville page, because that's what actually ranks for neighborhood-level searches." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. Knoxville homeowners already want to hire local — we just make sure they find you instead of a competitor or a lead broker." },
      { q: "What's in the free SEO audit?", a: "Where you rank today across the Knoxville metro, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck — just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'knoxville', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Knoxville Web Design Company | OnwardCraft',
    metaDescription:
      'Knoxville web design that turns visitors into booked jobs — fast, mobile-first sites built for contractors in East Tennessee. Transparent pricing, you own it.',
    eyebrow: 'Web Design · Knoxville, TN',
    h1: 'Knoxville web design that turns visitors into booked jobs',
    h2Exact: 'Knoxville Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is just a brochure. We build Knoxville contractors fast, mobile-first sites engineered to turn visitors into booked work — sites that feel local, load fast, and earn the trust of homeowners who already prefer to hire someone from their community.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Knoxville contractor websites lose leads quietly: slow on a phone, buried call button, no clear offer, nothing that signals you're a real local company. Web design done right fixes all of that. We build sites that load fast, look like the professional you are, and turn Farragut-to-Fort-Sanders visitors into booked jobs — while earning the loyalty that Knoxville homeowners give to businesses that feel like neighbors.",
    aioQuestion: 'What makes a good contractor website in Knoxville?',
    aioAnswer:
      "A good Knoxville contractor website loads fast on a phone, puts the call button and a clear offer above the fold, proves local trust with real reviews and project photos from the Knoxville area, and names the specific neighborhoods and suburbs you serve. Because Knoxville homeowners are loyal to local and skeptical of national chains, a site that looks and sounds like a genuine Knoxville company converts at a much higher rate than a generic template with a city name swapped in.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next result. Knoxville homeowners want to hire local — but only when the site gives them a reason to trust you. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Knoxville visitors are on mobile, and they bounce if your site takes more than a few seconds to load. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking." },
      { title: "It doesn't feel like a Knoxville company", body: "A homeowner in Powell or Sequoyah Hills wants to see you serve their neighborhood, not a generic page that could be anyone in Tennessee. We build sites that name the specific suburbs and communities you work, so visitors trust you're local and Google ranks you for the right searches." },
    ],
    servicesHeading: "What's in an OnwardCraft Knoxville website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your Knoxville service area, and the jobs you actually want to book." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your Knoxville traffic is coming from. Fast, thumb-friendly, easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step, because a visitor who has to hunt for your number leaves." },
      { name: 'Copy that sells', desc: "Words that speak to East Tennessee homeowners and book the job — not filler text that reads like everyone else's national template." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages across the Knoxville metro." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Neighborhood-targeted pages', desc: "Pages built around Farragut, Lenoir City, Oak Ridge, Powell, and the other communities you serve — so you stand out as a true local instead of blending into a generic city page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your Knoxville service area, your best jobs, and your competitors, then map the site around booking more of the work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page and a local voice that resonates with East Tennessee homeowners." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting — especially heading into peak seasons like ice storm and tornado months." },
    ],
    pricing: {
      heading: 'Transparent Knoxville web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade Knoxville contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services or suburbs.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Neighborhood-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location Knoxville businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Knoxville?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site help me win Knoxville homeowners who prefer local?', a: "That's exactly what we design for. Knoxville homeowners are loyal to local businesses — they just have to find you first and trust what they see. We build sites that feel genuinely local, load fast, and give visitors a clear reason to call you instead of a competitor." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Knoxville terms and position yourself for seasonal demand spikes." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where the vast majority of your Knoxville traffic is. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that — helpful when you want to add a new suburb page or seasonal content ahead of storm season." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Knoxville contractor site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'knoxville', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Knoxville Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your Knoxville website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs across East Tennessee.',
    eyebrow: 'Website Redesign · Knoxville, TN',
    h1: 'Redesign your Knoxville website without losing your rankings',
    h2Exact: 'Knoxville Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow on a phone, easy to ignore, nothing that says you're a real local company. We redesign Knoxville contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've built.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and rankings vanish overnight. We do neither. We redesign Knoxville contractor sites for speed, conversions, and local trust — and we migrate with the redirects and SEO care that protect the traffic you already have. If you've been earning rankings through Knoxville ice storm and storm-damage searches, we make sure that equity carries forward.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured for both users and Google — including the seasonal and neighborhood content that drives Knoxville-specific demand.",
    problemHeading: "Signs your Knoxville site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "For a high-ticket job, Knoxville homeowners judge you by your site in seconds. An old, cluttered design quietly signals you're not the professional you are — and sends them to a competitor who looks more established, even if your work is better." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing most of your Knoxville visitors before they ever see your offer. When a January ice storm hits and homeowners are searching urgently on their phones, you can't afford a slow site." },
      { title: "It doesn't feel like a Knoxville company or convert visitors", body: "Generic sites with no neighborhood identity get ignored in a market where homeowners are actively trying to hire local. And traffic that doesn't turn into calls is wasted budget. We rebuild for conversions and for the communities you actually serve." },
    ],
    servicesHeading: "What's in an OnwardCraft Knoxville redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors and fonts." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've earned — including the seasonal search equity that matters most in Knoxville." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We redesign for booked jobs, not just a fresh look." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for conversions and rankings, and critical when storm-season visitors need answers fast." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where the majority of your Knoxville traffic is — especially during emergency searches after ice storms." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and earns the confidence of East Tennessee homeowners." },
      { name: 'Neighborhood-targeted rebuild', desc: "Rebuilt around the Knoxville suburbs and communities you serve — Farragut, Oak Ridge, Lenoir City, and the rest — so the new site stands out as a local company, not a national template.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as local search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful Knoxville rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you leads and rankings, document the seasonal and neighborhood content that's working, and map a redesign that fixes problems without breaking what already performs." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build — built to feel like a Knoxville company, not a generic contractor template." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration that protects your existing ranking equity." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely for the first weeks so rankings hold and improve, not drop." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting, plus ongoing speed and content updates — including seasonal pages ahead of ice storm and tornado season." },
    ],
    pricing: {
      heading: 'Transparent Knoxville redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a smaller Knoxville contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established Knoxville contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Neighborhood-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location Knoxville businesses.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Knoxville?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. This matters especially in Knoxville, where contractors who've built up seasonal search equity for ice storm or storm-damage terms can't afford to lose it." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, doesn't feel like a local Knoxville company, or isn't converting visitors into calls, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important — including seasonal and neighborhood content — gets lost." },
      { q: 'Will the redesign help me compete in Knoxville?', a: "Yes, and that's the point in a market where homeowners are actively looking for local companies to trust. We rebuild around the specific suburbs and communities you serve, keep the site fast, and make the offer and call button obvious — so the new site wins the jobs the old one was losing." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals — critical when Knoxville homeowners are searching urgently on their phones during ice storm or storm emergencies." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in, no hostage situations." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan that protects the search equity you've built." },
    ],
  },
];

export const knoxvilleCity = {
  citySlug: 'knoxville', city: 'Knoxville', state: 'Tennessee', stateAbbr: 'TN', metro: 'Knoxville',

  titleTag: 'Knoxville Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Knoxville contractors. Get found, get booked, and own your leads — built for East Tennessee homeowners who already prefer.',

  eyebrow: 'Knoxville · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Knoxville contractors found and booked',
  h2Exact: 'Knoxville Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for East Tennessee — a market that rewards local trust, swings hard with ice storms and tornado season, and is growing fast from Farragut to Lenoir City. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Knoxville-specific targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Knoxville audit',

  intro:
    "If you run a contracting business in Knoxville, you're competing in a market with some distinct advantages and some real challenges. The advantages: Knoxville homeowners are unusually loyal to local businesses, the Great Smoky Mountains draw tourism that adds a vacation rental and cabin maintenance market on top of urban residential, and the metro is growing fast with retirees and remote workers settling in suburbs like Farragut, Hardin Valley, and Lenoir City. The challenge: ice storms in January and February, tornado season in the spring, and the summer HVAC rush all create intense demand spikes that only reward the contractors already ranking. Winning means being found first, looking trustworthy, and getting the call before a competitor does. Here's how we help Knoxville contractors do exactly that.",
  aioQuestion: 'How do Knoxville contractors get more leads online?',
  aioAnswer:
    "Knoxville contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack across the neighborhoods and suburbs they serve. Because Knoxville homeowners are loyal to local and the market has sharp seasonal demand spikes from ice storms and tornado season, the contractors who rank before those windows open — and who look genuinely local when homeowners find them — capture the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Knoxville homeowners search \"near me.\" Be there before the ice storm hits and every contractor in town is competing for the same calls.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your East Tennessee customers search — including seasonal storm and ice search terms — and build an asset you own instead of renting traffic from ads.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites that feel like a genuine Knoxville company — not a national template — and turn visitors into booked jobs by earning the local trust your homeowners are already looking to give.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed, local trust, and conversions — and migrate it carefully so you keep every bit of ranking you've already earned, including the seasonal equity that matters in East Tennessee.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Knoxville?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads — positioned ahead of Knoxville's seasonal demand spikes from ice storms and tornado season." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors — so we understand East Tennessee ice storm call surges, vacation cabin maintenance markets, and the summer AC push that runs through September." },
    { q: 'Why does the Knoxville market need a different approach?', a: "Knoxville homeowners are loyal to local and skeptical of out-of-state companies — which means a site and SEO presence that looks and sounds genuinely local converts at a higher rate than a generic national template. The market also has sharp seasonal demand from ice storms and tornado season, so the contractors who are already ranking when those hit take all the work." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Knoxville areas do you serve?', a: "The full metro — Fort Sanders, Farragut, Hardin Valley, Lenoir City, Powell, Oak Ridge, Maryville, Sequoyah Hills, 4th & Gill, Market Square, Bearden, and all the neighborhoods and suburbs in between. We build genuine local pages rather than one generic Knoxville page." },
    { q: 'Where should I start?', a: "Start with a free Knoxville audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest — and whether you're positioned for the next ice storm or tornado season demand window. No pitch deck, just a plan." },
  ],
};
