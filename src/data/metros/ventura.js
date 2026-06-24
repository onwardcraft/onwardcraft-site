// VENTURA COUNTY — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Ventura's 4 service pages and the hub, because they
// describe the same metro. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// VENTURA COUNTY — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Ventura County is won or lost in fire season',
  body:
    "Ventura County sits where coastal California prosperity meets the most fire-prone landscape in the country. The 2017 Thomas Fire burned more than 280,000 acres — the largest in California history at the time. Then the 2018 Woolsey Fire roared through Malibu, Thousand Oaks, and Westlake Village, destroying over 1,600 structures in some of the county's most affluent neighborhoods. Ever since, fire-hardening, defensible space clearing, ember-resistant upgrades, and post-fire rebuilds have become the dominant categories for Ventura County contractors. Every October through December, Santa Ana winds push homeowners in canyon and hillside neighborhoods to research fire-resistant roofing, vent upgrades, and vegetation management — and the contractors already ranking capture that surge before anyone else gets called. The county is also home to high-income households in Thousand Oaks, Westlake Village, Camarillo, and Ojai, plus more affordable coastal communities in Oxnard and Port Hueneme where roughly 42% of residents are Hispanic. That means the contractor who shows up in both the English and Spanish searches — and earns the trust of an affluent homeowner doing careful research — wins most of this market.",
  pullQuote: 'After Woolsey and Thomas, fire-hardening is not a niche — it is the most searched contractor category in Ventura County.',
  donut: {
    title: 'Oxnard demographics',
    value: 42,
    centerLabel: 'Hispanic (Oxnard)',
    legend: [
      { label: 'Hispanic', pct: 42, kind: 'teal' },
      { label: 'Other', pct: 58, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Fire season / Santa Anas (Oct–Dec) and summer HVAC demand (Jun–Sep)',
  seasonalDemand: [
    { m: 'J', v: 45 }, { m: 'F', v: 48 }, { m: 'M', v: 52 },
    { m: 'A', v: 55 }, { m: 'M', v: 70, peak: true }, { m: 'J', v: 85, peak: true },
    { m: 'J', v: 90, peak: true }, { m: 'A', v: 88, peak: true },
    { m: 'S', v: 82, peak: true }, { m: 'O', v: 92, peak: true },
    { m: 'N', v: 88, peak: true }, { m: 'D', v: 78, peak: true },
  ],
  stats: [
    { value: '850K+', label: 'people across Ventura County' },
    { value: '~42%', label: 'of Oxnard residents are Hispanic — a meaningful Spanish-language market', accent: true },
    { value: 'Oct–Dec', label: 'Santa Ana wind season, when fire-hardening searches spike' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks' },
  ],
  neighborhoods: [
    'Thousand Oaks', 'Westlake Village', 'Camarillo', 'Oxnard', 'Port Hueneme',
    'Simi Valley', 'Moorpark', 'Ojai', 'Santa Paula', 'Fillmore',
    'Newbury Park', 'Oak Park', 'Ventura', 'Channel Islands', 'El Rio',
  ],
};

const AREAS = [
  'Thousand Oaks', 'Westlake Village', 'Camarillo', 'Oxnard', 'Port Hueneme',
  'Simi Valley', 'Moorpark', 'Ojai', 'Santa Paula', 'Fillmore',
  'Newbury Park', 'Oak Park', 'Ventura', 'Channel Islands', 'El Rio',
];

const FOUNDER =
  "I'll be honest with you: I started OnwardCraft because I watched good contractors hand Angi and HomeAdvisor money every month for leads that three of their competitors bought too. That's not a pipeline — it's a treadmill. Ventura County is a market where the Woolsey and Thomas fires completely changed what homeowners research and spend on, where a Santa Ana wind event spikes fire-hardening searches overnight, and where the Spanish-speaking communities in Oxnard represent demand most agencies never even try to reach. Our job is to get you ranking for those searches and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We understand the fire angle',
    body: "Woolsey, Thomas, and the annual Santa Ana wind season are not background context here — they are the dominant driver of contractor demand in Ventura County. We build your entire local presence around what post-fire and fire-hardening homeowners actually search.",
  },
  {
    title: 'We reach the full county',
    body: "Affluent hillside homeowners in Thousand Oaks and Westlake Village research contractors carefully. Working families in Oxnard and Port Hueneme — many searching in Spanish — want reliability and value. We build a presence that wins both audiences.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners three competitors also bought.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Ventura County contractor gets around 1,800 local \"near me\" impressions a month across communities like Thousand Oaks, Camarillo, and Oxnard. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a booked-out calendar — and when October Santa Ana winds arrive, the contractors already ranking get every fire-hardening call. In your free audit, we model the real numbers for your business.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Ventura', state: 'California', stateAbbr: 'CA', metro: 'Ventura-Oxnard',
  heroProof: ['Built for the trades', 'Fire-season targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const venturaLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'ventura', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Ventura County Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Ventura County Local SEO that wins your trade the top three Map Pack spots, from Thousand Oaks to Oxnard, before fire season makes the phones ring.',
    eyebrow: 'Local SEO · Ventura County',
    h1: 'Ventura County Local SEO that wins your trade the top three on the map when Thousand Oaks searches for help',
    h2Exact: 'Ventura County Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. When Santa Ana winds arrive and homeowners in Thousand Oaks rush to find a fire-hardening contractor, the three already on that map take every call. We get you into that top three for your communities.",
    primaryCta: 'Get my free Ventura County audit',
    intro:
      "Ventura County Local SEO comes down to one thing: when a homeowner in Camarillo or Thousand Oaks searches your service plus \"near me,\" are you one of the three businesses Google pins to the Map Pack? In a county shaped by fire risk, coastal moisture, and two distinct economic communities, from the affluent hillside neighborhoods of Westlake Village to the working-class coastal communities of Oxnard, showing up in those local searches at the right moment is everything. Here's how you win those top three spots.",
    aioQuestion: 'How do Ventura County businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and communities you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Ventura County neighborhoods and the fire-risk concerns that drive most contractor searches here. The contractors who win also show up for Spanish-language searches in Oxnard and Port Hueneme — demand most competitors never target.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? In fire season, when a homeowner in Simi Valley or Oak Park panics about ember-resistant vents, those three get every call. If you're not one of them, your work doesn't matter — most people never see your name. Getting into that top three for your communities is usually the single highest-return move a Ventura County contractor can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Ventura County homeowner to four contractors, then bill each of you. It's a treadmill. Local SEO builds the opposite: a lead finds you, calls you, and nobody else got it. Over time you stop renting and start owning the pipeline." },
      { title: "You're invisible to a big slice of the market", body: "Roughly 42% of Oxnard residents are Hispanic, and many search in Spanish. Military homeowners near Naval Base Ventura County rotate in and out and need trusted local contractors fast. Most of your competitors do nothing for either audience, so the demand sits there unclaimed." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Ventura County searches you should win — including fire-hardening and post-fire rebuild terms." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes homeowners — who research carefully in this market — pick up the phone." },
      { name: 'Community pages', desc: "Real pages for Thousand Oaks, Camarillo, Oxnard, Simi Valley, Moorpark, Ojai, and more, so you rank for the community someone is actually searching, not just \"Ventura County.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Ventura County sources Google trusts — local press, chambers, associations, partners. This is what separates page one from page two here." },
      { name: 'Spanish-language reach', desc: "With roughly 42% of Oxnard residents Hispanic, the contractor who shows up for Spanish searches wins demand most competitors never see.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you, trust you, and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your communities and pin down which competitors are beating you in the Map Pack — and why they show up during fire-season search spikes." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now over starting later — especially before October." },
      { name: 'Add local content', desc: "Community and service-area pages across Thousand Oaks, Camarillo, Oxnard, Simi Valley, and every neighborhood you serve, plus the on-page work to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next community." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Ventura County communities.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Community landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across Ventura County.', features: ['Everything in Local Growth', 'Local link building', 'Spanish-language search targeting', 'Multi-community service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Ventura County?', a: "Most Ventura County engagements land between $750 and $2,500 a month, depending on how many communities and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The competitive Ventura County keywords — especially fire-hardening and post-fire rebuild terms — usually take 90 to 180 days of steady work because reviews and citations compound over time. Anyone promising you page one in 30 days is selling you something." },
      { q: 'What makes Ventura County local SEO different?', a: "Fire risk is the dominant angle. The Woolsey Fire (2018) destroyed over 1,600 structures in affluent Thousand Oaks and Westlake Village neighborhoods, and every October through December, Santa Ana winds spike fire-hardening searches. The contractor already ranking when that happens gets every call. The county also splits between high-income hillside communities and working-class coastal areas — including a large Spanish-speaking population in Oxnard — so targeting the full market requires different content for different audiences." },
      { q: 'Can you help me reach Spanish-speaking customers?', a: "Yes, and in Oxnard that's a real edge. Roughly 42% of Oxnard residents are Hispanic, and many search in Spanish for local contractors. We can optimize your profile and content so you show up for those searches in communities your competitors ignore entirely." },
      { q: 'Which areas do you cover?', a: "All of Ventura County — Thousand Oaks, Westlake Village, Camarillo, Oxnard, Port Hueneme, Simi Valley, Moorpark, Ojai, Santa Paula, Fillmore, and more. We build genuine community pages instead of one generic Ventura County page, because that's what actually ranks for \"[service] [city]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, fire-hardening, fencing, restoration, plumbing, solar, electrical, and general contractors. We understand fire season urgency, coastal salt-air maintenance cycles, and post-fire rebuild timelines." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on lead brokers less because the work is coming to you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your communities, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day Ventura County Local SEO plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'ventura', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Ventura County SEO Company | Rankings You Own | OnwardCraft',
    metaDescription:
      'Ventura County SEO that builds contractors rankings they actually own, from fire-hardening terms in Ojai to summer HVAC demand and coastal maintenance. No lock-in.',
    eyebrow: 'SEO Services · Ventura County',
    h1: 'Ventura County SEO that builds your contracting business rankings you actually own, from Ojai fire-hardening to coastal Oxnard',
    h2Exact: 'Ventura County SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Ventura County customers search and the leads keep coming. We build that ranking — including for the fire-hardening and post-fire rebuild terms that drive this market — and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free Ventura County SEO audit',
    intro:
      "Ventura County SEO comes down to one question: when a homeowner in Thousand Oaks or Ojai searches what you do, are you on page one or page two? Page two might as well be invisible. This is a county where the 2017 Thomas Fire and 2018 Woolsey Fire permanently changed what homeowners research, where Santa Ana winds trigger annual fire-hardening search spikes, and where affluent hillside households research contractors carefully before calling. We rank contractors for the money keywords that actually book jobs and we measure the work in leads, not vanity traffic.",
    aioQuestion: 'How do Ventura County businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search — including fire-hardening, defensible space, and ember-resistant terms that have dominated contractor searches since Woolsey — publishing local content tied to specific Ventura County communities, and earning links from trusted local sources. The contractors who win also rank for seasonal HVAC demand in summer and fire-risk terms in October through December, so they capture both peaks.",
    problemHeading: "Three reasons your Ventura County site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google. When an Ojai homeowner searches \"fire-resistant roofing near me\" after a Santa Ana wind warning, the first page takes every call. If you're not there, your work doesn't matter to them — they never see your name. Getting onto page one for your key terms is the single biggest lever you have." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your budget runs out, so do the leads. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost — and in a market where fire-season searches spike predictably every fall, the contractor already ranking doesn't have to scramble." },
      { title: "You're not ranking for the demand that matters", body: "Ventura County demand swings with fire season (Oct–Dec) and summer heat (Jun–Sep). The contractors who rank for fire-hardening, post-fire rebuild, and HVAC replacement terms ahead of time catch the surge. If your SEO ignores seasonal and fire-related searches, you're leaving your busiest weeks to competitors." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your Ventura County customers search — fire-hardening, coastal maintenance, HVAC replacement, and more." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real Ventura County and industry sources. In a market this competitive, links are often what separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across your communities alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Fire season & emergency SEO', desc: "We rank you for the fire-hardening, defensible space, and post-fire rebuild searches that spike every October through December — so you're visible before the Santa Anas arrive, not after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Ventura County leads — including the fire and seasonal terms your busiest months depend on." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including fire-hardening, post-fire rebuild, HVAC, and coastal maintenance terms." },
      { name: 'Build authority', desc: "Links and citations from trusted Ventura County and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Ventura County SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and Ventura County communities.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Ventura County search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Fire season & emergency SEO', 'Multi-community pages', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Ventura County?', a: "Most Ventura County SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Ventura County?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter community-level terms and slower on the most competitive county-wide keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Ventura County contractors do best running SEO as the long-term engine and ads for short-term spikes — especially before fire season." },
      { q: 'Should my Ventura County SEO target fire season demand?', a: "Absolutely. Every October through December, Santa Ana winds push homeowners in canyon and hillside areas to search fire-hardening contractors urgently. Ranking takes months to build, so you have to be in place before the season, not chasing it after. We optimize for fire-resistant roofing, defensible space, and ember-resistant vent terms well ahead of time." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add fire season and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which areas around Ventura County do you cover?', a: "All of Ventura County — Thousand Oaks, Westlake Village, Camarillo, Oxnard, Port Hueneme, Simi Valley, Moorpark, Ojai, Santa Paula, Fillmore, and more — with genuine community pages rather than one generic county page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic Ventura County SEO timeline with the numbers modeled for your business so you keep the organic traffic and page-one rankings you build. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'ventura', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Ventura County Web Design Company | Sites That Book Work | OnwardCraft',
    metaDescription:
      'Ventura County web design engineered to bring in real work: fast, mobile-first sites for contractors from coastal Oxnard to fire-country Thousand Oaks.',
    eyebrow: 'Web Design · Ventura County',
    h1: 'Ventura County web design engineered to bring in real work, from coastal Oxnard to fire-country Thousand Oaks',
    h2Exact: 'Ventura County Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Ventura County contractors fast, mobile-first sites engineered to convert visitors into booked work — and to earn the trust of homeowners who research carefully before calling anyone after a fire or a Santa Ana wind event.",
    primaryCta: 'Get my free quote',
    intro:
      "Ventura County web design is the difference between a site that books work and one that loses leads quietly: slow on a phone, buried call button, nothing that speaks to fire risk or coastal maintenance. We build contractor websites that load fast, look like the professional you are, and turn Thousand Oaks and Oxnard visitors into booked jobs, built for a county where the Woolsey Fire changed what homeowners look for in a contractor forever.",
    aioQuestion: 'What makes a good contractor website in Ventura County?',
    aioAnswer:
      "A good Ventura County contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, speaks directly to fire-hardening and coastal maintenance concerns that drive the market, and names the specific communities you serve. Because affluent hillside homeowners in Thousand Oaks and Westlake Village research contractors carefully before calling, trust signals — reviews, project photos, specific service descriptions — are especially important here.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next result. In a county where homeowners in Thousand Oaks and Westlake Village research carefully before every major job — especially post-fire rebuilds and fire-hardening projects — your site needs to earn that call. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Ventura County visitors are on mobile, and they bounce if your site takes more than a few seconds to load. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking." },
      { title: "It doesn't speak to local concerns", body: "A homeowner in Simi Valley or Oak Park worried about fire risk wants to see you understand fire-hardening and defensible space — not a generic contractor page that could be from anywhere. Coastal homeowners in Oxnard and Port Hueneme want to know you understand salt air, moisture, and shorter maintenance cycles. We build sites that speak to what Ventura County homeowners actually care about." },
    ],
    servicesHeading: "What's in an OnwardCraft Ventura County website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your communities, and the fire-country and coastal angles that matter in this market." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your traffic is. Fast, thumb-friendly, easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that speak to anxious homeowners — whether they just lived through a fire or are hardening their home before the next Santa Ana — and book the job." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and community-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Fire-season ready content', desc: "Pages built around fire-hardening, defensible space, ember-resistant vents, and post-fire rebuild — the searches that define this market every October through December.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your communities, your best jobs, and your competitors — including what fire-hardening and coastal homeowners care about — then map the site around booking more of the work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting." },
    ],
    pricing: {
      heading: 'Transparent Ventura County web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + community pages', 'Speed & Core Web Vitals', 'Fire-season ready content'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Ventura County?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site help me stand out in this market?', a: "That's the whole point in Ventura County. We build around the specific communities you serve and the concerns that matter here — fire risk, coastal maintenance, post-fire rebuilds — so when a homeowner is researching carefully after a Woolsey-scale event, your site earns the call." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and community-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Ventura County terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what high-converting Ventura County web design should include for a contractor in this market, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'ventura', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Ventura County Website Redesign | Modernize, Keep Traffic | OnwardCraft',
    metaDescription:
      'Ventura County Website Redesign that modernizes your contractor site without tanking your traffic: faster, mobile-first rebuilds for fire country and the coast.',
    eyebrow: 'Website Redesign · Ventura County',
    h1: 'Ventura County Website Redesign that modernizes your contractor site without tanking the traffic Simi Valley already sends you',
    h2Exact: 'Ventura County Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, generic, nothing that earns trust from a homeowner who just survived the Woolsey Fire and is spending carefully. We redesign Ventura County contractor sites to convert more and load faster, and we migrate carefully so you keep every ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "A Ventura County Website Redesign usually goes one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish. We do neither. We redesign contractor sites for speed and conversions, build them to speak to fire risk, coastal maintenance, and the high-research habits of county homeowners, and run an SEO-safe migration with the redirects that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them — because the new site is faster, mobile-first, and speaks more directly to what Ventura County homeowners search for.",
    problemHeading: "Signs your Ventura County site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "Thousand Oaks and Westlake Village homeowners research contractors carefully — especially for post-fire rebuilds and fire-hardening projects where they're spending serious money. An old, cluttered design quietly sends them to a competitor who looks more established. Even when your work is better." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your visitors before they ever see your offer. A redesign built mobile-first wins them back — and keeps you ranking." },
      { title: "It doesn't speak to Ventura County concerns", body: "A generic contractor page that doesn't mention fire risk, coastal maintenance, or the communities you serve gives a homeowner no reason to trust you're right for their situation. We rebuild around the angles that actually matter in this market — fire season, ocean proximity, the specific neighborhoods where you work." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your Ventura County traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the price of your jobs." },
      { name: 'Fire-season and community rebuild', desc: "Rebuilt around fire risk, coastal concerns, and the specific Ventura County communities you serve — so the new site earns trust from the homeowners doing the most research.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you leads and rankings, then map a redesign that fixes it without breaking what already works — including any fire-season or seasonal content that's driving traffic." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and improve, not drop." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Ventura County redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + community pages', 'Fire-season and community rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Ventura County?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, isn't earning trust from high-research Ventura County homeowners, or doesn't speak to fire risk and coastal maintenance concerns, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost — including any fire-season or service-area pages that are driving traffic." },
      { q: 'Will the redesign help me compete in Ventura County?', a: "Yes, and that's the point. We rebuild around the specific communities you serve and the concerns that drive this market — fire risk, post-Woolsey rebuilds, coastal salt-air maintenance — so the new site speaks directly to what Ventura County homeowners care about." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what your Ventura County Website Redesign should fix, and a fixed-price quote with a timeline and an SEO-safe migration plan that rebuilds for leads without losing rankings." },
    ],
  },
];

export const venturaCity = {
  citySlug: 'ventura', city: 'Ventura', state: 'California', stateAbbr: 'CA', metro: 'Ventura-Oxnard',

  titleTag: 'Ventura County Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Ventura County marketing for contractors built around the trades: web design, SEO, and local SEO that get you found during fire season and booked year-round.',

  eyebrow: 'Ventura County · Web Design, SEO & Lead Generation',
  h1: 'Ventura County marketing for contractors built around the trades, from fire-season demand to the coast',
  h2Exact: 'Ventura County Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Ventura County — fire season, coastal communities, and the full spectrum from Thousand Oaks to Oxnard. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Fire-season targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Ventura County audit',

  intro:
    "Ventura County marketing for contractors has to fit one of the most fire-affected and demographically diverse markets in California. The Woolsey Fire (2018) and Thomas Fire (2017) permanently changed what homeowners research and spend on — fire-hardening, defensible space, and post-fire rebuilds are now among the most searched contractor categories in the county. Every October through December, Santa Ana winds spike those searches again. At the same time, affluent communities in Thousand Oaks, Westlake Village, and Camarillo want quality and research carefully, while working-class coastal communities in Oxnard and Port Hueneme — where roughly 42% of residents are Hispanic — want reliability and value. Winning this market takes three things working together: a site that converts, SEO that ranks you year-round and spikes during fire season, and local SEO that puts you on the map in the specific communities you serve.",
  aioQuestion: 'How do Ventura County contractors get more leads online?',
  aioAnswer:
    "Ventura County contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for fire-hardening, coastal maintenance, and HVAC searches, and local SEO that wins the Google Map Pack community by community. Because the county splits between high-income hillside neighborhoods and working-class coastal communities — including a large Spanish-speaking population in Oxnard — the contractors who target the full market and show up where their customers actually search win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Ventura County searches \"near me.\" The single highest-return move for most local contractors — especially when fire season arrives and the phones need to ring.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search — fire-hardening, coastal maintenance, HVAC replacement — and build an asset you own instead of renting traffic from ads.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to earn trust from Ventura County homeowners who research carefully — and to turn visitors into booked jobs, not just traffic.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed, conversions, and fire-country relevance — and migrate it carefully so you keep every ranking you've already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Ventura County?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads — with a specific focus on fire-season demand and the communities they serve across the county." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, fire-hardening, fencing, restoration, plumbing, solar, electrical, and general contractors — so we understand fire-season urgency, post-fire rebuild timelines, and coastal salt-air maintenance cycles." },
    { q: 'Why does Ventura County need a different approach?', a: "The Woolsey and Thomas fires permanently changed what homeowners here research and spend on. Fire-hardening, defensible space, and post-fire rebuilds are now dominant contractor categories, and Santa Ana winds spike those searches every fall. At the same time, the county splits between high-income hillside communities and working-class coastal areas with a large Spanish-speaking population — winning requires targeting both." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Ventura County areas do you serve?', a: "All of Ventura County — Thousand Oaks, Westlake Village, Camarillo, Oxnard, Port Hueneme, Simi Valley, Moorpark, Ojai, Santa Paula, Fillmore, and more — with genuine community pages rather than one generic county page." },
    { q: 'Where should I start?', a: "Start with a free Ventura County audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves in your Ventura County marketing for contractors that will bring in the most work fastest, including whether you're positioned for fire-season demand. No pitch deck, just a plan." },
  ],
};
