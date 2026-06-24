// LANSING: per-metro, per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Lansing's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// LANSING: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Lansing takes more than a great reputation',
  body:
    "Lansing runs on three engines at once, and that mix decides who books work here. The state government keeps thousands of paychecks steady through every downturn, so the homeowner base near the Capitol does not flinch when the economy wobbles. A few minutes east in East Lansing, Michigan State pours more than 50,000 students into a rental market that never stops needing repairs and updates. And the General Motors plants at Delta Township and Grand River built generations of working homeowners who know the difference between a real tradesperson and a slick ad. Then the weather sets the calendar. Michigan winters are long and hard, and snow, frozen pipes, and ice damage push heating and emergency calls through the roof from November into March. The thaw brings the Red Cedar and Grand Rivers up over their banks, and water-damage work follows. By summer the aging furnaces and AC units in Old Town, REO Town, and the Eastside take their turn. The shops that win are the ones already sitting in the top three when each wave arrives, not the ones racing to catch up after it.",
  pullQuote: 'Students, state workers, and auto families keep Lansing phones ringing in every season, and the three map pins at the top swallow nearly all of those calls.',
  donut: {
    title: 'Lansing community snapshot',
    value: 24,
    centerLabel: 'Black/AA',
    legend: [
      { label: 'Black/AA', pct: 24, kind: 'teal' },
      { label: 'Other', pct: 76, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Winter heating and snow damage (Nov to Mar), spring flooding and thaw (Mar to May)',
  seasonalDemand: [
    { m: 'J', v: 90, peak: true }, { m: 'F', v: 88, peak: true }, { m: 'M', v: 82, peak: true },
    { m: 'A', v: 75, peak: true }, { m: 'M', v: 55 }, { m: 'J', v: 68 }, { m: 'J', v: 72, peak: true },
    { m: 'A', v: 70, peak: true }, { m: 'S', v: 52 }, { m: 'O', v: 54 },
    { m: 'N', v: 78, peak: true }, { m: 'D', v: 86, peak: true },
  ],
  stats: [
    { value: '50K+', label: 'Michigan State University students creating year-round rental and renovation demand' },
    { value: '~24%', label: 'of Lansing residents identify as Black or African American', accent: true },
    { value: 'Nov-Mar', label: 'peak winter season for heating, frozen pipes, and snow damage calls' },
    { value: 'Top 3', label: 'Map Pack spots that capture most of the local contractor clicks' },
  ],
  neighborhoods: [
    'Old Town', 'REO Town', 'Eastside', 'East Lansing', 'Haslett',
    'Okemos', 'Dewitt', 'Delta Township', 'Mason', 'Grand Ledge',
    'Waverly', 'Moores Park', 'Washington Square', 'Lansing Heights', 'South Lansing',
  ],
};

const AREAS = [
  'Old Town', 'REO Town', 'Eastside', 'East Lansing', 'Haslett',
  'Okemos', 'Dewitt', 'Delta Township', 'Mason', 'Grand Ledge',
  'Waverly', 'Moores Park', 'Washington Square', 'Lansing Heights', 'South Lansing',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We know what a January heating failure does to a phone line, how spring flooding off the Red Cedar River fills a restoration crew's week, and how the renovation push through Old Town and REO Town actually buys. Everything we build is shaped around the way real Lansing customers search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own outright. Not one more monthly invoice to a lead broker for a homeowner three other shops already bought, which stings even more in a metro this compact, where those competitors might run their trucks out of the next neighborhood over.",
  },
  {
    title: 'We actually speak Lansing',
    body: "Neighborhood-by-neighborhood targeting from Eastside to Okemos to Grand Ledge, plus the reach to win searches across the student rental market near MSU and the state-employee homeowner belt near the Capitol. The stuff a national shop can't do by swapping a city name into a template.",
  },
  {
    title: 'No contracts, no mystery',
    body: "Our prices sit right on the page, the reports tie back to real Lansing leads, and you go month-to-month once the first 90 days are done. Stop earning your invoice and we expect to lose the account. That is how it should work.",
  },
];

const PROOF = {
  heading: "We're new, so here's the honest math instead of a logo wall",
  body:
    "Plenty of agencies open with a wall of client logos. We are a young, founder-led shop in Lansing, so we are not going to invent a track record we have not earned yet. What we can put in front of you is the reasoning, pulled straight from Google's and the industry's own research on how people search for a local contractor.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here is a rough picture, clearly labelled as a projection and not a result we are claiming: say a Lansing contractor pulls around 800 local \"near me\" impressions a month across a handful of neighborhoods. Moving from page-two invisibility into the top three is the gap between a trickle of calls and a calendar you cannot keep up with, and when a Michigan cold snap hits overnight that gap turns brutal. In your free audit we model the real numbers for your business: your current rankings, your actual search volume, and an honest 90-to-180-day path to the top of the map.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Lansing', state: 'Michigan', stateAbbr: 'MI', metro: 'Lansing-East Lansing',
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const lansingLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'lansing', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Lansing Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Lansing Local SEO that turns "near me" searches into a ringing phone. We get you into the three businesses Google pins to the map.',
    eyebrow: 'Local SEO · Lansing-East Lansing',
    h1: 'Lansing Local SEO that turns "near me" searches into a ringing phone in Old Town and beyond',
    h2Exact: 'Lansing Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. Whether it's an MSU landlord needing a plumber or a state employee homeowner after a heating emergency, we get you into that top three for your neighborhoods so the call lands with you.",
    primaryCta: 'Get my free Lansing audit',
    intro:
      "Lansing Local SEO comes down to one moment: a homeowner in Old Town or a student-rental landlord in East Lansing types your service plus \"near me,\" and either you are one of the three businesses Google pins to the map or you are not. Most people tap one of those three and never scroll. Between 50,000-plus MSU students renting homes that always need work, thousands of state employees owning near the Capitol, and auto families spread across Delta Township, the calls come all year. Being one of those three pins is the whole game. Here is how you get there.",
    aioQuestion: 'How do Lansing businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile tuned to the exact services and neighborhoods you want; name, address, and phone details that match everywhere online; a steady flow of real reviews; and local content built around genuine Lansing neighborhoods. The winners here target tight service areas, since Old Town, Okemos, and Delta Township each search a little differently. They show up for the seasonal spikes that come with Michigan winters and spring flooding, and they answer fast when a heating emergency lands between November and March.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Three Lansing rivals are holding the only map pins that matter', body: "Pull up your phone and search your trade with \"near me\" the way a homeowner off Michigan Avenue would. Google hands back three businesses on the map, and that trio collects nearly every tap. Land outside it and your craftsmanship is beside the point, because the household in Okemos or Old Town never scrolls down far enough to read your name. For a Lansing contractor, climbing into those three pins is almost always the move that returns the most." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Lansing homeowner to four contractors, then bill each of you to fight over them. It's a treadmill, and it means you're competing against neighbors for work that should come to you directly. Local SEO builds the opposite: a lead finds you, calls you, and nobody else got it. Over time you stop renting and start owning the pipeline." },
      { title: "You're invisible when the season hits hardest", body: "Michigan winters do not let up: snow, frozen pipes, and heating failures stack up from November through March, and then the Red Cedar and Grand Rivers crest in the spring and flooding calls start. The contractors who rank when those calls spike are the ones who were already in the top three. Get ranked after the cold arrives and you are chasing a wave your competitors caught a month ago." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Lansing searches belong to you, from East Lansing student rentals to Okemos family homes." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing across Lansing-area directories." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes homeowners pick up the phone when they see your name next to a competitor's." },
      { name: 'Neighborhood pages', desc: "Real pages for Old Town, REO Town, East Lansing, Okemos, Dewitt, Mason, and the rest, so you rank for the exact neighborhood someone is searching instead of a generic \"Lansing.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank, especially on the older sites common among established Lansing tradespeople." },
      { name: 'Local link building', desc: "Mentions and links from Lansing-area sources Google trusts: local press, trade associations, business groups, community partners. In a mid-sized market like this, that is often what splits page one from page two." },
      { name: 'Seasonal demand targeting', desc: "We rank you for the winter heating, frozen-pipe, and ice-damage searches that spike November through March, and for the spring flooding terms that hit along the Red Cedar and Grand Rivers every thaw season.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you when Lansing homeowners search there.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you genuinely rank today across your Lansing neighborhoods and pin down which competitors are beating you in the Map Pack and exactly why, whether that rival sits near MSU, near the Capitol, or out in Delta Township." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks, especially if your current profile is incomplete or listing your address inconsistently." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting before the busy season, not after." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Old Town, REO Town, East Lansing, Okemos, Dewitt, Mason, Grand Ledge, and Delta Township, plus the on-page work to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood or seasonal keyword set." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right across your core Lansing service area.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Lansing neighborhoods and seasonal demand spikes.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across the full Lansing-East Lansing metro.', features: ['Everything in Local Growth', 'Local link building', 'Seasonal demand targeting', 'Multi-neighborhood and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Lansing?', a: "Most Lansing engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're targeting. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. Competitive Lansing keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days in a market with real competition is selling you something." },
      { q: 'What makes Lansing local SEO different from a big-city strategy?', a: "Lansing has demand drivers you have to actually understand: the student-rental and renovation market near MSU in East Lansing, the stable state-employee homeowner base near the Capitol, and the auto-worker neighborhoods around Delta Township. Winning across all three calls for tight neighborhood targeting and seasonal content shaped by Michigan winters and spring flooding. A one-size-fits-all playbook does not cut it here." },
      { q: 'How should I handle the seasonal demand spikes?', a: "By ranking before they hit. Michigan lake-effect winters drive heating, frozen-pipe, and ice-damage calls hard from November through March. Spring thaw along the Red Cedar and Grand Rivers brings flooding and water-damage work. We optimize for those seasonal terms ahead of time so your busiest weeks land on you, not a competitor who started earlier." },
      { q: 'Which areas do you cover?', a: "The full Lansing-East Lansing metro: Old Town, REO Town, Eastside, East Lansing, Haslett, Okemos, Dewitt, Delta Township, Mason, Grand Ledge, and the neighborhoods in between. We build genuine local pages instead of one generic Lansing page, because that's what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It is basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand Michigan heating emergencies, spring flooding events, and the renovation demand that flows out of the older homes in Old Town, REO Town, and the Eastside, and we build your local SEO around exactly that." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "There is no long contract. We ask for a first 90 days only because that window is what local SEO needs to show genuine movement in the Lansing map results. From there you run month to month. If the leads are not showing up, you cut us loose, and the burden of proof sits with us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and a visibility you never keep a claim to. We build rankings, a tuned Google profile, and a review base that route Lansing homeowners to your line and nobody else's. As that pipeline fills, the broker fees become optional rather than your lifeline." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your Lansing neighborhoods, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. It is the honest starting point for Lansing Local SEO that actually earns its keep. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'lansing', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Lansing SEO Company | Rank Higher, Get Leads | OnwardCraft',
    metaDescription:
      'Lansing SEO that ranks you for the searches that book jobs and brings in leads you own. Revenue-tied reporting, no lock-in contracts, built year-round.',
    eyebrow: 'SEO Services · Lansing-East Lansing',
    h1: 'Lansing SEO that ranks you for the searches that book jobs near the Capitol and MSU',
    h2Exact: 'Lansing SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO does the reverse: rank once for what your Lansing customers search and the leads keep arriving, through Michigan winters, through spring flooding season, and through the steady year-round demand that MSU and state government create. We build that ranking and tie every report to real calls and booked jobs.",
    primaryCta: 'Get my free Lansing SEO audit',
    intro:
      "Lansing SEO comes down to one blunt question: when a homeowner in Okemos or a landlord near MSU searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords across the Lansing-East Lansing metro, and we measure the whole thing in leads, not traffic that never picks up the phone.",
    aioQuestion: 'How do Lansing businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content tied to specific Lansing neighborhoods, and earning links from trusted Michigan sources. In Lansing, tight neighborhood targeting and ranking for seasonal heating, flooding, and renovation terms are two of the quickest ways to pull ahead of generalist competitors.",
    problemHeading: "Three reasons your Lansing site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it either. With real competition from contractors working the MSU rental belt, the state-employee homeowner base, and the auto-worker neighborhoods, being outside the top handful of results means your site is effectively invisible. The quality of your work does not enter into it if nobody sees you." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost. For a market like Lansing where winters bring predictable spikes, owning seasonal rankings is especially valuable." },
      { title: "You're not ranking for the demand that matters", body: "Lansing demand swings hard with the seasons. Heating and frozen-pipe emergencies fill the Michigan winters, spring flooding off the Red Cedar and Grand Rivers fills the thaw, and renovation work in Old Town and REO Town fills the summer. The contractors who rank for those terms ahead of time catch the spike. Ignore seasonal and emergency searches and you are quietly handing away your busiest, most profitable weeks." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all, right down to the older WordPress sites that established Lansing tradespeople tend to be running." },
      { name: 'On-page optimization', desc: "Every page that matters tuned for the exact terms your Lansing customers search: titles, headings, content, and internal links that signal the neighborhoods and services you actually cover." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot long after we publish, including the seasonal and emergency content that decides who wins here." },
      { name: 'Link building', desc: "Authority from real Lansing and Michigan industry sources. In a mid-sized metro like this, local links from regional press and trade associations often determine who owns page one." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across your Lansing neighborhoods alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and booked leads, not just rankings and traffic, so you always know what your Lansing SEO is actually worth in dollars." },
      { name: 'Seasonal & emergency SEO', desc: "We rank you for the winter heating, frozen-pipe, and ice-damage searches that spike November through March, and the spring flooding terms that hit every thaw season along the Red Cedar and Grand Rivers.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, since a growing share of search now begins there, particularly among the younger MSU-area renters and first-time homebuyers.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Lansing leads, organized by neighborhood, service, and season." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile. This is the foundation everything else needs before it can rank, whether your visitors are on phones near campus or desktops out in Okemos." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the seasonal and emergency terms that fire hardest in Michigan winters and spring thaw." },
      { name: 'Build authority', desc: "Links and citations from trusted Lansing and Michigan sources to push competitive keywords onto page one ahead of the busy season." },
      { name: 'Report and scale', desc: "Each month we report against booked leads, then pour more into the terms already paying off and push outward to the next Lansing neighborhood or seasonal keyword group." },
    ],
    pricing: {
      heading: 'Transparent Lansing SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core Lansing local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and Lansing neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Lansing-East Lansing search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal & emergency SEO', 'Multi-neighborhood coverage', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Lansing?', a: "Most Lansing SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Lansing?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter neighborhood terms and slower on the broader Lansing-wide keywords. SEO compounds, so the gains keep building the longer you run it, which is exactly why starting before Michigan's busy winter season pays off." },
      { q: 'Is SEO better than Google Ads for Lansing contractors?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Lansing contractors do best running SEO as the long-term engine and ads for short-term spikes, like the start of heating season in November." },
      { q: 'Should my Lansing SEO target seasonal demand?', a: "Yes, and this matters more in Lansing than many markets. Michigan lake-effect winters drive heating, frozen-pipe, and ice-damage calls hard from November through March. Spring thaw along the Red Cedar and Grand Rivers brings flooding and water-damage work. Ranking takes months to build, so you have to be in place before the season, not chasing it after." },
      { q: "What's included in your SEO service?", a: "You get technical SEO, on-page work, content, link building, Map Pack and local SEO, plus reporting tied to revenue. The upper tiers fold in seasonal and emergency targeting along with AI-search optimization. Your free Lansing audit nails down the precise scope before anything starts." },
      { q: 'Do you require a long-term contract?', a: "No long-term contract here. The opening 90 days are simply what SEO needs to register real movement in Lansing search, and after that you are month to month. The day we stop delivering is the day you are free to go." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business by name, not just classic search results. It matters most for reaching the younger homebuyers and renters circling the MSU-area market." },
      { q: 'Which areas around Lansing do you cover?', a: "The full Lansing-East Lansing metro: Old Town, REO Town, Eastside, East Lansing, Haslett, Okemos, Dewitt, Delta Township, Mason, Grand Ledge, and the neighborhoods in between, with genuine local pages rather than one generic Lansing page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads that three of your competitors also bought." },
      { q: "What's in the free SEO audit?", a: "Where you rank today in Lansing, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. It is the clearest first step into Lansing SEO that pays for itself in booked work. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'lansing', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Lansing Web Design Company | Built to Convert | OnwardCraft',
    metaDescription:
      'Lansing Web Design built to convert clicks into calls: fast, mobile-first sites for contractors serving the MSU rental belt, the Capitol, and Delta Township.',
    eyebrow: 'Web Design · Lansing-East Lansing',
    h1: 'Lansing Web Design built to convert clicks into calls from East Lansing to Delta Township',
    h2Exact: 'Lansing Web Design Company',
    heroSubhead:
      "A handsome website that never generates a call is just an expensive brochure. We build Lansing contractors fast, mobile-first sites engineered to turn visitors into booked work, from an MSU landlord calling for a quick repair to an Okemos homeowner scheduling a full renovation.",
    primaryCta: 'Get my free quote',
    intro:
      "Lansing Web Design done right starts where most contractor sites fail: slow on a phone, call button buried, no clear offer anywhere. We close all of those leaks. We build sites that load fast, look like the professional you actually are, and turn visitors from Old Town to East Lansing into booked jobs. They are built to win in a market shaped by university demand, state-government stability, and the renovation needs of an affordable Midwest housing stock.",
    aioQuestion: 'What makes a good contractor website in Lansing?',
    aioAnswer:
      "A good Lansing contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific neighborhoods you serve, since East Lansing, Okemos, Delta Township, and Old Town all search a little differently. Because most Lansing searches happen on mobile and the metro has distinct demand drivers, naming your service areas and showing you grasp the local seasons are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "Plenty of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next name on the map. In a metro where real competitors cover every corner, that next name is one tap away. We design every page around a single job: turning a Lansing visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Lansing visitors are on mobile, and they bounce if your site takes more than a couple of seconds to load. Slow sites also rank worse, so you lose twice. We build fast, which keeps both the visitor and the ranking, and that speed matters most when someone is searching mid heating emergency and needs help right now." },
      { title: "It doesn't speak to your neighborhood", body: "A homeowner in Haslett wants proof you serve Haslett, not a generic \"Lansing\" page that could belong to anybody. A landlord near MSU wants to know you understand student-rental timelines. We build sites that name the neighborhoods you work, so visitors trust that you are local and Google ranks you for the right searches." },
    ],
    servicesHeading: "What's in an OnwardCraft Lansing website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your Lansing neighborhoods, and the jobs you actually want more of, from heating and HVAC work to renovation projects in Old Town." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that is where nearly all of your Lansing traffic lives. Fast, thumb-friendly, and easy to call from in one tap, which is exactly what a homeowner needs in the middle of a Michigan winter emergency." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where homeowners actually use them. Every page carries an unmistakable next step, whether the visitor is an MSU landlord or an Okemos homeowner." },
      { name: 'Copy that sells', desc: "Words that speak to an anxious homeowner staring at a frozen pipe or a flooded basement, not filler text that reads like every other contractor in town. We write for the specific worries Lansing customers carry: burst pipes, river flooding, and aging HVAC in older homes." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank: clean structure, schema, fast load, and neighborhood-ready pages running from Old Town out to Grand Ledge." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both your conversions and your rankings, even on the photo-heavy older-home renovation pages." },
      { name: 'Neighborhood-targeted pages', desc: "Pages built around the Lansing neighborhoods and suburbs you serve, from East Lansing and Okemos to Dewitt, Delta Township, and Mason, so you stand out instead of blending into one generic Lansing page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read your site and recommend your business as more search shifts to AI, especially among the younger MSU-area renters and homebuyers.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your Lansing neighborhoods, your most profitable jobs, and your competitors, whether you chase the student-rental market, state-employee homeowners, or the renovation wave in Old Town, then map the site around booking more of the work you actually want." },
      { name: 'Design', desc: "We lay out a custom, phone-first design built to convert, and you get to review it and steer it long before any code gets written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, keeping the call to action front and center on every page and the language pinned to what worries a Lansing homeowner most." },
      { name: 'Launch', desc: "We push it live cleanly, with the SEO groundwork, the tracking, and the page speed all sorted from the first day." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting, including before Michigan's busy winter and spring seasons." },
    ],
    pricing: {
      heading: 'Transparent Lansing web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade Lansing contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established Lansing contractors with several services or neighborhoods.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Neighborhood-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location Lansing businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Lansing?', a: "Contractor websites with us usually fall between $2,000 and $8,000 as a one-time build, set by your page count and any integrations. The tiers above hold: a fixed number, nothing sprung on you later, and the finished Lansing site is yours outright." },
      { q: 'How long does it take to build?', a: "A tight single-trade site runs roughly 2 to 4 weeks; a larger custom build runs 4 to 8. We hand you a firm timeline at the start and keep you posted as each stage clears." },
      { q: 'Will my site help me stand out in the Lansing market?', a: "That is the whole point. Lansing breaks into distinct segments: the MSU rental belt, the state-employee homeowner base near the Capitol, the auto-worker neighborhoods, and the older-home renovation market in Old Town and REO Town. We build around the specific segments and neighborhoods you serve so your site connects instead of blending in." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank, and pairing it with our SEO service is how you climb the competitive Lansing terms and own the seasonal searches." },
      { q: 'Do I own the website?', a: "Yes, all of it. The site, the domain, and the content belong to you. We do not hold your business hostage on a platform you cannot pack up and take elsewhere." },
      { q: 'Will it work well on phones?', a: "We build phone-first, since that is where nearly every Lansing visitor lands. You get quick loads, call buttons sized for a thumb, and forms that work one-handed, which matters when a homeowner is hunting for help in the middle of a January heating failure." },
      { q: 'What platform do you build on?', a: "We match the platform to what you need and what you can run yourself once we hand it over, most often WordPress or Webflow. During your free Lansing consult we name the right fit and walk through the tradeoffs in plain terms." },
      { q: 'Do you offer ongoing support?', a: "We do. Launch support comes with every build, and after that you can pick up affordable monthly maintenance covering updates, page speed, and security." },
      { q: 'Am I locked into a contract?', a: "Not at all. The build itself is a single fixed-price project. Anything ongoing, whether maintenance or SEO, runs month to month, so walking away is always your call." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what high-converting Lansing Web Design should include for your market segment, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'lansing', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Lansing Website Redesign | Keep Your Rankings | OnwardCraft',
    metaDescription:
      'Lansing Website Redesign that keeps every ranking you have earned. Faster, mobile-first rebuilds that convert more visitors into booked jobs through Michigan winters.',
    eyebrow: 'Website Redesign · Lansing-East Lansing',
    h1: 'Lansing Website Redesign that keeps every ranking you have earned heading into winter',
    h2Exact: 'Lansing Website Redesign Company',
    heroSubhead:
      "An outdated site quietly costs you jobs every week: slow, clumsy on a phone, easy for a Lansing homeowner to skip past. We redesign contractor sites to convert more and load faster, and we migrate so carefully that you keep every bit of ranking you have already earned heading into Michigan's busy seasons.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Lansing Website Redesign usually goes one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Lansing contractor sites for speed and conversions, build them to speak to the specific market segments that drive work here, and migrate with the redirects and SEO-safe care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured for the seasonal and neighborhood-specific searches that drive Lansing contractor demand.",
    problemHeading: "Signs your Lansing site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "On a high-ticket job, a furnace replacement, a flood-damage restoration, a full kitchen renovation in an Old Town home, Lansing homeowners size you up by your site in seconds. An old, cluttered design quietly ships them to a competitor who simply looks more established, even when your work is plainly the better choice." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you are losing most of your Lansing visitors before they ever reach your offer. That bites hardest in January, when a homeowner with no heat is searching for a contractor right that minute and will not sit and wait for a slow page to load." },
      { title: "It doesn't speak to today's Lansing market", body: "Traffic that doesn't turn into calls is wasted. A generic old site gives a visitor no reason to pick you over competitors who've already updated their presence for the MSU-area landlord, the Okemos homeowner, or the Delta Township renovation project. We rebuild for conversions and for the specific market segments you serve." },
    ],
    servicesHeading: "What's in an OnwardCraft Lansing redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what is costing you leads and rankings today, so the redesign fixes the real problems: slow load times, a buried phone number, or pages that say nothing to the Lansing market segments you serve." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep every bit of the rankings and traffic you have already earned, which is critical right before Michigan's busy winter season." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks, with the urgency messaging that works for heating emergencies and flooding events." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals, which lifts conversions and rankings at the same time, and it shows most on photo-heavy sites showcasing older-home renovation work." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where nearly all of your Lansing traffic actually lives, including the homeowner hunting for emergency help during a January cold snap." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the price of your jobs, whether you're serving the MSU rental market or Okemos luxury renovations." },
      { name: 'Neighborhood-targeted rebuild', desc: "Rebuilt around the Lansing neighborhoods and suburbs you serve, from Old Town and East Lansing to Dewitt, Delta Township, and Mason, so the new site stands out instead of reading like every other contractor's generic page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI, a move led by the younger Lansing homebuyers and renters.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what is losing you leads and rankings, then map a redesign that fixes it without breaking what already works for you, keeping an eye on the seasonal demand patterns and market segments that drive Lansing contractor work." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build a thing, tuned to the Lansing homeowner's expectations and the trust signals they look for." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration, so your rankings don't slip heading into the busy winter season." },
      { name: 'Launch with SEO care', desc: "We go live with every redirect already mapped and watch the Lansing rankings daily so they climb or hold steady instead of slipping." },
      { name: 'Optimize', desc: "Post-launch tuning based on what is actually converting, plus ongoing speed work and updates, including the seasonal adjustments we make ahead of Michigan's winter and spring demand spikes." },
    ],
    pricing: {
      heading: 'Transparent Lansing redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small Lansing contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established Lansing contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Neighborhood-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location Lansing sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Lansing?', a: "A redesign with us generally runs $2,500 to $9,000 as a one-time project, set by the site's size and any integrations you need. The price is fixed, nothing gets sprung on you, and the rebuilt Lansing site is yours to keep." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it is done carefully, and careful is how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your Lansing rankings and usually pushes them higher, because the new site is faster and better structured for neighborhood searches." },
      { q: 'How long does a Lansing redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at every stage, and we will plan around your seasonal calendar if you need to launch before Michigan's winter busy season." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is a pain to update, is not bringing in leads, or says nothing to the Lansing segments you serve, whether that is MSU landlords, state-employee homeowners, or auto-worker families in Delta Township, it is costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and sharpen your existing content, preserve what is ranking, and handle the technical migration so nothing important slips through the cracks, right down to the seasonal and neighborhood pages already pulling traffic." },
      { q: 'Will the redesign help me compete in Lansing?', a: "Yes, and that is exactly the point. We rebuild around the specific neighborhoods and market segments you serve, keep the site fast, and make the offer and call button impossible to miss, so the new site stands out to Lansing homeowners instead of blending into the generic contractor crowd." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings, and that speed counts most when someone is searching on a phone during a Michigan winter heating emergency." },
      { q: 'Do I own the redesigned site?', a: "Yes, every piece of it: the site, the domain, and the content. There is no platform that locks you in or holds your Lansing business in place." },
      { q: 'Am I locked into a contract?', a: "No. The redesign stands on its own as a one-time project. Should you add maintenance or SEO afterward, that part runs month to month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what a Lansing Website Redesign should fix for your specific market position, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const lansingCity = {
  citySlug: 'lansing', city: 'Lansing', state: 'Michigan', stateAbbr: 'MI', metro: 'Lansing-East Lansing',

  titleTag: 'Lansing Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Lansing marketing for contractors: web design, SEO, and local SEO that get you ranked and booked and let you own your leads, built for the MSU market and Michigan winters.',

  eyebrow: 'Lansing · Web Design, SEO & Lead Generation',
  h1: 'Lansing marketing for contractors: get ranked, get booked across the MSU and Capitol metro',
  h2Exact: 'Lansing Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Lansing's mix of university demand, state-government stability, and GM auto-worker neighborhoods. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Lansing audit',

  intro:
    "Lansing marketing for contractors starts with one fact: if you run a contracting business here, you are working a market with more depth than most people credit it for, 50,000-plus MSU students and landlords driving constant rental and renovation demand in East Lansing, thousands of state-government employees forming a recession-resistant homeowner base near the Capitol, and a GM auto-worker heritage that built the working neighborhoods across Delta Township and beyond. Add Michigan's long, hard winters, one of the most demanding heating seasons in the Midwest, plus spring flooding along the Red Cedar and Grand Rivers, and you have a market that pays year-round for the contractors who rank when demand spikes. That takes three things working together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack for the neighborhoods you serve. Here is exactly how we help Lansing contractors pull that off.",
  aioQuestion: 'How do Lansing contractors get more leads online?',
  aioAnswer:
    "Lansing contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack neighborhood by neighborhood. The shops that dominate here target distinct segments, the MSU rental belt, the state-employee homeowner base near the Capitol, and the auto-worker neighborhoods, then rank for the seasonal terms that spike hardest during Michigan winters and spring flooding season.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Lansing searches \"near me.\" For most local contractors it is the single highest-return move, done tight, neighborhood by neighborhood, and timed to Michigan's demanding seasons.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your Lansing customers actually search, seasonal heating, flooding, and renovation terms included, build an asset you own instead of renting traffic from ads, and measure the whole thing in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs, from an MSU landlord needing a quick repair to an Okemos homeowner scheduling a renovation, not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it carefully so you keep every bit of ranking you've already earned heading into Lansing's busy seasons.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Lansing?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads across the Lansing-East Lansing metro." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. That focus is why we understand Michigan heating emergencies, spring flooding events, and the renovation demand running through Lansing's older neighborhoods." },
    { q: 'Why does the Lansing market need a specific approach?', a: "Lansing has demand drivers you have to understand to rank well: the MSU student-rental and young-homebuyer market in East Lansing, the stable state-employee homeowner base near the Capitol, and the auto-worker neighborhoods across Delta Township. Layer in Michigan's brutal winters and spring flooding off the Red Cedar and Grand Rivers, and you need the seasonal targeting and neighborhood specificity that generic national playbooks miss entirely." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds running $2,000 to $9,000. SEO and local SEO run month to month, $750 to $3,000, with no long contract attached. The exact scope gets pinned down in your free Lansing audit." },
    { q: 'Which Lansing areas do you serve?', a: "The full Lansing-East Lansing metro: Old Town, REO Town, Eastside, East Lansing, Haslett, Okemos, Dewitt, Delta Township, Mason, Grand Ledge, and the neighborhoods in between." },
    { q: 'Where should I start?', a: "Start with a free Lansing audit. We look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest, whether that means getting into the Map Pack before Michigan's winter heating season or rebuilding a site that is losing you leads every week. That is what Lansing marketing for contractors should look like: a clear plan, no pitch deck." },
  ],
};
