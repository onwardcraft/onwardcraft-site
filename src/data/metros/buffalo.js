// BUFFALO, per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Buffalo's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// BUFFALO, shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Buffalo means winning in the snow belt',
  body:
    "Buffalo is the snowiest major city in the United States, averaging 95 inches of snow per year, and the 2022 blizzard shut down the entire region for days and killed 47 people. That single weather fact reshapes the entire home-services market here. Ice dams tear up gutters and rooflines every winter. Heating systems run at full tilt for five straight months. Pipes freeze and burst when temperatures drop hard and fast. Roof collapses are a real seasonal risk. Every contractor in the trades knows this, and the homeowners searching for help know it too. Whoever is ranking before the next lake-effect storm books the work everyone else is scrambling for. On top of the weather angle, Buffalo has extraordinary old housing stock, Victorian mansions on Delaware Avenue, craftsman bungalows in Elmwood Village, brick row houses in Black Rock, that requires specialists who understand older construction. And the city is genuinely reviving: a medical campus, the Bills stadium project, and young professionals renovating classic homes in Allentown and North Buffalo mean demand is rising alongside some of the most affordable housing prices in the Northeast.",
  pullQuote: "In the snowiest major city in America, the contractor who ranks before the next lake-effect storm books the work every competitor is scrambling for.",
  donut: {
    title: 'Lake-effect snow capital',
    value: 63,
    centerLabel: 'winter-driven',
    legend: [
      { label: 'Winter emergency demand', pct: 63, kind: 'teal' },
      { label: 'Rest of year', pct: 37, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Lake-effect winter (Nov–Mar) and spring thaw (Mar–May)',
  seasonalDemand: [
    { m: 'J', v: 95, peak: true }, { m: 'F', v: 92, peak: true }, { m: 'M', v: 85, peak: true },
    { m: 'A', v: 78, peak: true }, { m: 'M', v: 60 }, { m: 'J', v: 45 }, { m: 'J', v: 42 },
    { m: 'A', v: 44 }, { m: 'S', v: 52 }, { m: 'O', v: 64 },
    { m: 'N', v: 88, peak: true }, { m: 'D', v: 94, peak: true },
  ],
  stats: [
    { value: '95″', label: 'average annual snowfall, snowiest major US city' },
    { value: '19th-c.', label: 'housing stock requiring specialist contractors', accent: true },
    { value: 'Nov–Mar', label: 'lake-effect season when emergency calls spike overnight' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks in every neighborhood' },
  ],
  neighborhoods: [
    'Elmwood Village', 'Allentown', 'North Buffalo', 'Black Rock', 'Delaware District',
    'Kenmore', 'Amherst', 'Williamsville', 'Orchard Park', 'Cheektowaga',
    'Niagara Falls', 'Lockport', 'Tonawanda', 'Grand Island', 'East Aurora',
  ],
};

const AREAS = [
  'Elmwood Village', 'Allentown', 'North Buffalo', 'Black Rock', 'Delaware District',
  'Kenmore', 'Amherst', 'Williamsville', 'Orchard Park', 'Cheektowaga',
  'Niagara Falls', 'Lockport', 'Tonawanda', 'Grand Island', 'East Aurora',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. Buffalo has some of the most loyal, community-oriented homeowners in the country, and they want to hire local — but the contractor who shows up first on Google wins that call, not necessarily the best one. That's the whole point of what we do here: get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We grew up on lake-effect winters',
    body: "Ice dams chewing through gutters, a furnace that quits at 2am in February, pipes splitting behind a plaster wall, a roof groaning under two feet of fresh snow. We know the calendar your phone runs on, and every page we build is shaped around how a cold, worried Buffalo homeowner actually searches when something breaks.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline that belongs to you. Not one more monthly bill to a broker selling the same homeowner to three of your competitors, which stings even more when Buffalo's affordable housing keeps your margins thin to begin with.",
  },
  {
    title: 'We know Buffalo block by block',
    body: "A century-old foursquare in Elmwood Village gets searched differently than a new build off Maple Road in Amherst or a short-term rental near the Falls. We target tight, one neighborhood at a time, instead of dropping a city name into a template and calling it local.",
  },
  {
    title: 'No contracts, no mystery',
    body: "Prices are posted. Reporting is tied to leads, not vanity numbers. You go month-to-month after the first 90 days, so if we are not earning it, you leave. That keeps the pressure where it should sit, which is on us.",
  },
];

const PROOF = {
  heading: "We're new, so here's the honest math instead of a logo wall",
  body:
    "Plenty of agencies open with a grid of client logos. We are a young, founder-led shop, so we will not pretend to a track record we have not earned yet. What we can put in front of you is the reasoning behind why this works, pulled straight from Google's and the industry's own research on how people search for a local contractor.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here is a rough picture, labelled plainly as a projection and not a result we are claiming: a Buffalo contractor pulling around 1,200 local \"near me\" impressions a month across a few neighborhoods could be sitting off the first page and missing most of that winter demand without ever knowing it. When a single lake-effect band can hand the trades a full week of emergency calls, the gap between page two and the top three turns into real money fast. In your free audit we model the actual figures for your business: your rankings, your search volume, and a straight 90-to-180-day path to the top of the map.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Buffalo', state: 'New York', stateAbbr: 'NY', metro: 'Buffalo-Niagara Falls',
  heroProof: ['Built for the trades', 'Neighborhood-level targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const buffaloLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'buffalo', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Buffalo Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Buffalo Local SEO that lands you in the three businesses Google pins to the map, in place before the next lake-effect storm books the work.',
    eyebrow: 'Local SEO · Buffalo, NY',
    h1: 'Buffalo Local SEO that puts your trade in the Map Pack before the next lake-effect storm',
    h2Exact: 'Buffalo Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. When a lake-effect storm rolls in and homeowners are calling for emergency help, being one of those three is everything, and we get Buffalo contractors into that top three.",
    primaryCta: 'Get my free Buffalo audit',
    intro:
      "Buffalo local SEO comes down to one reality: when a homeowner in Elmwood Village or Amherst searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. This market has a built-in seasonal surge every winter, ice dams, heating failures, burst pipes, roof damage, and the contractors already ranking capture all of that emergency demand. Here's how you become one of them.",
    aioQuestion: 'How do Buffalo businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Buffalo neighborhoods and the seasonal demand that drives the market. In Buffalo, the winners rank tight by neighborhood, Elmwood Village, Kenmore, Amherst, Cheektowaga, and they're in place before the lake-effect season, not scrambling after the storm hits.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Three competitors own every map pin that matters', body: "Search your own service plus \"near me\" right now in Buffalo. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks, and during a winter storm when homeowners are calling frantically, those three spots are worth an enormous amount. If you're not one of them in Kenmore, Amherst, Williamsville, or wherever you work, the best contractors in the world still lose jobs to whoever ranked first." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Buffalo homeowner to four contractors, then bill each of you for the privilege. Local SEO builds the opposite: a homeowner finds you, calls you, and nobody else got that lead. Over time, you stop renting and start owning the pipeline, which matters a lot in a market where housing prices keep margins tight." },
      { title: "You're invisible in the neighborhoods that matter", body: "A homeowner in Orchard Park searches differently than one in Black Rock or near Niagara Falls managing a vacation rental. Buffalo isn't one market; it's a dozen neighborhoods and suburbs each with their own search behavior. Targeting tight, by neighborhood, is how you win the searches your competitors never show up for." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Buffalo searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing across the Buffalo metro." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes people pick up the phone when your name appears in the Map Pack." },
      { name: 'Neighborhood pages', desc: "Real pages for Elmwood Village, Kenmore, Amherst, Williamsville, Orchard Park, and the rest, so you rank for the neighborhood someone's actually in, not just \"Buffalo.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Buffalo and Western New York sources Google trusts, local press, trade associations, BIDs, partners. This is what separates page one from page two in a competitive market." },
      { name: 'Seasonal emergency SEO', desc: "We get you ranking for ice dam, burst pipe, heating failure, and storm damage searches before the lake-effect season, so the emergency volume lands on you, not your competitors.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across Buffalo neighborhoods and pin down which competitors are beating you in the Map Pack and exactly why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You often see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why the contractors who start before the lake-effect season end up owning winter demand." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages for the suburbs and communities you serve, plus the on-page work to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Buffalo neighborhoods and suburbs.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across the Buffalo metro.', features: ['Everything in Local Growth', 'Local link building', 'Seasonal & emergency SEO', 'Multi-neighborhood and suburb pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Buffalo?', a: "Most Buffalo engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after. Our tiers are right above this, no hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The competitive Buffalo keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days in a market with real seasonal competition is selling you something." },
      { q: 'What makes Buffalo local SEO different from other cities?', a: "The winter. Buffalo is the snowiest major US city, and lake-effect storms create sudden, intense demand for roofing, heating, plumbing, and restoration services. Being ranked before the storm means you book that emergency work; being ranked after means you missed it. We build your local SEO around that seasonal reality from day one." },
      { q: 'How do you help me rank for emergency calls?', a: "We optimize for the searches homeowners run during and after a storm, ice dam removal, burst pipe repair, emergency heating, roof damage assessment. Those terms spike hard in November through March, and because ranking takes months to build, we start that work well before the season so you're in place when the demand arrives." },
      { q: 'Which Buffalo neighborhoods and suburbs do you cover?', a: "We cover the whole metro: Elmwood Village, Allentown, North Buffalo, Black Rock, Kenmore, Amherst, Williamsville, Orchard Park, Cheektowaga, Niagara Falls, Lockport, Tonawanda, Grand Island, East Aurora, and more. We build genuine neighborhood pages instead of one generic Buffalo page." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, restoration, electrical, solar, and general contractors. We understand ice dam calls, old Victorian and craftsman homes, and the emergency service model that drives so much Buffalo business." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms sell shared leads at a price that eats margins, and in Buffalo's affordable housing market those margins are already tighter than in coastal cities. We build rankings, a Google profile, and a review base that send leads straight to you, so over time you lean on the brokers less because the calls are coming directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across Buffalo neighborhoods, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. It is the fastest way to see what Buffalo Local SEO can do for your phone before you spend a dollar. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'buffalo', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Buffalo SEO Company | Rank Higher, Get Leads | OnwardCraft',
    metaDescription:
      'Buffalo SEO that ranks contractors on Google and brings in leads you own. Built for a seasonal market with old housing stock and winter demand spikes.',
    eyebrow: 'SEO Services · Buffalo, NY',
    h1: 'Buffalo SEO that gets your trade to the top of Google and keeps it there through ice-dam season',
    h2Exact: 'Buffalo SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what Buffalo homeowners search and the leads keep coming, through ice-dam season, spring thaw, and everything in between. We build that ranking and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free Buffalo SEO audit',
    intro:
      "Buffalo SEO comes down to one question: when a homeowner searches your service in Amherst, Kenmore, or Williamsville, are you on page one or page two? Page two might as well be invisible. We get contractors ranking for the money keywords in a market where old housing stock, harsh winters, and a genuine city revival are all driving real, sustained renovation and repair demand, and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Buffalo businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search in Buffalo and its suburbs, publishing genuinely useful local content tied to specific neighborhoods and the seasonal demand that drives this market, and earning links from trusted Western New York sources. In a market shaped by lake-effect winters and a distinctive housing stock, ranking for seasonal emergency terms and old-home renovation searches ahead of time is one of the highest-return moves a Buffalo contractor can make.",
    problemHeading: "Three reasons your Buffalo site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Hardly anyone clicks past the first screen of Google results, and they rarely scroll deep into the page they land on. In Buffalo, where a homeowner is often searching mid-storm or in the teeth of a January cold snap, sitting off page one means the job goes to whoever ranked first, not whoever does the better work. Page two is where leads quietly die." },
      { title: "You're renting traffic from Google Ads", body: "Ads have their place, but the second your card stops, so do the leads. And on the competitive trade keywords here, the cost per click can swallow a Buffalo job's already thin margin. SEO builds something you own outright: rankings that keep producing calls for months and years after the work is done, at a fraction of the per-lead cost." },
      { title: "You're not ranking for the demand that actually matters", body: "Buffalo demand is intensely seasonal. Ice dam removal, emergency heating, burst pipe repair, and post-storm roofing searches spike hard from November through March. If you're not in place before the season, you miss the biggest weeks of the year. We get you ranking for those terms well before the lake-effect storms arrive." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms Buffalo homeowners search, from general service pages to neighborhood and suburb-specific content." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot, including the old-home and winter emergency content that drives this market." },
      { name: 'Link building', desc: "Authority from real Western New York and industry sources. In a competitive local market, links are often what separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across Buffalo neighborhoods and suburbs alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads, not just rankings and traffic, so you always know what your SEO is actually worth." },
      { name: 'Seasonal & emergency SEO', desc: "We get you ranking for ice dam, heating failure, burst pipe, and storm-damage searches before the lake-effect season hits, so the highest-demand weeks land on you.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Buffalo leads, including the seasonal and emergency terms that matter most here." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile, the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the seasonal emergency terms and old-home renovation content that drives Buffalo demand." },
      { name: 'Build authority', desc: "Links and citations from trusted Buffalo, Western New York, and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set or neighborhood." },
    ],
    pricing: {
      heading: 'Transparent Buffalo SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and Buffalo suburbs.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Buffalo search year-round.', features: ['Everything in SEO Growth', 'Seasonal & emergency SEO', 'Aggressive content + links', 'Multi-neighborhood pages', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Buffalo?', a: "Most Buffalo SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Buffalo?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter neighborhood terms and slower on more competitive metro keywords. SEO compounds, so the gains keep building the longer you run it, and starting before winter is especially important in this market." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. In a market like Buffalo where housing prices are affordable and margins can be tight, owning your lead flow beats renting it indefinitely." },
      { q: 'Should my Buffalo SEO target seasonal demand?', a: "Absolutely. When a lake-effect storm hits or temperatures drop to single digits, searches for ice dam removal, emergency heating, and burst pipe repair spike dramatically overnight. Ranking takes months to build, so you need to be in place before November, not scrambling to catch up in January. We optimize for those seasonal and emergency terms as a core part of every engagement." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal/emergency SEO and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic Google search." },
      { q: 'Which Buffalo neighborhoods and suburbs do you cover?', a: "The whole metro: Elmwood Village, Allentown, North Buffalo, Black Rock, Kenmore, Amherst, Williamsville, Orchard Park, Cheektowaga, Niagara Falls, Lockport, Tonawanda, Grand Island, East Aurora, and more, with genuine local pages rather than one generic Buffalo page." },
      { q: 'How do you help me get off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying lead brokers who sell the same homeowner to three of your competitors." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business, including the seasonal demand windows that matter most in Buffalo. It is the clearest picture of what Buffalo SEO can return for your business before you commit to anything. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'buffalo', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Buffalo Web Design Company | OnwardCraft',
    metaDescription:
      'Buffalo Web Design that turns visitors into booked jobs, fast, mobile-first contractor sites built for a seasonal market with old housing stock.',
    eyebrow: 'Web Design · Buffalo, NY',
    h1: 'Buffalo web design that turns Elmwood Village visitors into booked jobs before the storm hits',
    h2Exact: 'Buffalo Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Buffalo contractors fast, mobile-first sites engineered to turn visitors into booked work, and to stand out when a homeowner is searching urgently in the middle of a January storm.",
    primaryCta: 'Get my free quote',
    intro:
      "Buffalo web design is the difference between a site that books work and one that loses leads quietly: slow on a phone, buried call button, no clear offer, nothing that says you know this city or its old housing stock. Done right, it fixes all of that. We build sites that load fast, look like the professional you are, and turn Elmwood Village and Amherst visitors into booked jobs, designed for a market where the winter season can make or break your year.",
    aioQuestion: 'What makes a good contractor website in Buffalo?',
    aioAnswer:
      "A good Buffalo contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, names the specific neighborhoods and suburbs you serve, and signals that you understand the seasonal reality of this market. Because most Buffalo searches happen on mobile and winter emergency calls need to convert instantly, mobile speed and an obvious next step are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "Plenty of contractor sites just list a few services and stop there, with nothing that tells a homeowner why to call you instead of the next name down the page. In Buffalo, when someone's pipe lets go at 11pm in February, the site that makes calling effortless is the one that books the job. We build every page around a single outcome: turning a visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Almost all of your Buffalo traffic is on mobile, and in a real emergency it's a cold homeowner on a cold phone with no patience to spare. If your site takes more than a couple of seconds to load, they're gone, and slow sites rank worse on top of it. We build fast, so you keep the visitor and the ranking both." },
      { title: "It doesn't speak to Buffalo or its neighborhoods", body: "A homeowner restoring a Victorian in the Delaware District wants proof you've worked on old homes. A family in Amherst wants to see their suburb named. A generic site that could belong to a contractor in any city quietly costs you trust, and trust is exactly what turns a visitor into a phone call." },
    ],
    servicesHeading: "What's in an OnwardCraft Buffalo website",
    services: [
      { name: 'Custom design', desc: "No off-the-shelf templates. A site shaped around your trade, the Buffalo neighborhoods you work, and the kind of jobs you actually want more of." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that is where nearly all your Buffalo traffic lives and where an emergency call either converts or slips away." },
      { name: 'Conversion-focused UX', desc: "Plain offers, call buttons you can't miss, and lead forms placed where a thumb actually finds them. Every page gives a homeowner one easy next step." },
      { name: 'Copy that sells', desc: "Words written for Buffalo homeowners and their winters, their old houses, their block, instead of filler that reads like every other contractor site in town." },
      { name: 'Local SEO foundation', desc: "Built to rank from the first line of code: clean structure, schema, fast load, and neighborhood-ready pages across the Buffalo metro." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load quickly and clear Google's performance checks, which protects your conversions and your rankings together." },
      { name: 'Neighborhood-targeted pages', desc: "Pages built around Elmwood Village, Kenmore, Amherst, Williamsville, Orchard Park, Cheektowaga, and the rest, so you rank for the neighborhood someone's actually in, not just \"Buffalo.\"", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We get to know your trade, the Buffalo neighborhoods you cover, your best jobs, and what sets you apart, then map the whole site around booking more of the work you want." },
      { name: 'Design', desc: "We mock up a phone-first layout drawn around how Buffalo homeowners decide, and you see it and push back on it before we write a single line of code." },
      { name: 'Build and copy', desc: "We build quickly and write the words that book the job, with the call to action front and center on every page and real Buffalo detail running through the whole thing." },
      { name: 'Launch', desc: "We ship it clean with the local-SEO foundation, call tracking, and load speed all set from the first day live." },
      { name: 'Support and optimize', desc: "We keep the site fast and current and tune it around what's actually converting, including a tightening pass before the winter rush." },
    ],
    pricing: {
      heading: 'Transparent Buffalo web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Neighborhood-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Buffalo?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above, fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage, and we can plan around Buffalo's seasonal calendar if you want to launch before the winter rush." },
      { q: 'Will my site help me stand out in a market like Buffalo?', a: "That's the whole point. We build around the specific neighborhoods and suburbs you serve, keep the site fast for emergency mobile searches, and put the call button front and center, so when a homeowner's pipe bursts at midnight in February, yours is the site that books the job." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation, fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Buffalo terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your Buffalo traffic comes from, especially emergency calls in bad weather. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage, usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month, you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what high-converting Buffalo web design should include for a contractor, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'buffalo', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Buffalo Website Redesign | OnwardCraft',
    metaDescription:
      'Buffalo Website Redesign without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs. Free audit.',
    eyebrow: 'Website Redesign · Buffalo, NY',
    h1: 'Buffalo Website Redesign that converts more without losing the rankings you earned through winter',
    h2Exact: 'Buffalo Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week, and in a market where winter emergencies drive sudden demand spikes, it can cost you entire seasons. We redesign Buffalo contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "A Buffalo Website Redesign usually goes one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We rebuild Buffalo contractor sites for speed and conversions, signal local expertise and earn trust with homeowners dealing with old housing and harsh winters, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one, which matters especially in Buffalo where seasonal demand makes every ranking position worth real money.",
    problemHeading: "Signs your Buffalo site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "Buffalo homeowners are putting real money into restoring old Victorians and craftsman homes, and the first thing they judge is your digital storefront. A tired, dated site quietly suggests your work might be dated too, and sends them clicking to the next result that looks more established and more careful." },
      { title: "It's slow and hard to use on a phone", body: "A clunky or sluggish mobile site loses visitors before they ever reach your services, and those visitors are the most expensive ones to lose because so many of them are searching mid-emergency with the heat out or a pipe leaking. A mobile-first redesign wins them back and turns them into calls." },
      { title: "It doesn't convert the visitors you already have", body: "Traffic that never becomes a phone call is money left on the table, and in Buffalo the seasonal spikes pack so much demand into a few weeks that every missed conversion stings twice as hard. We rebuild around the jobs you want, the neighborhoods you serve, and the homeowners already out there searching for you." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pin down exactly what's bleeding leads and rankings on the current site, so the redesign solves real problems instead of just freshening the paint." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled the right way so you hold onto the rankings and traffic you've already built, including the seasonal positions that matter most." },
      { name: 'Conversion redesign', desc: "Sharper offers, smarter call-to-action placement, and lead forms homeowners actually fill out. We design for booked jobs, with mobile emergency searches front of mind." },
      { name: 'Speed overhaul', desc: "We rebuild for quick load times and passing Core Web Vitals, which lifts both conversions and rankings and matters enormously for urgent searches in bad weather." },
      { name: 'Mobile-first rebuild', desc: "Rebuilt around the phone, where almost all your Buffalo traffic lives and where emergency calls are won or lost in the first few seconds." },
      { name: 'Brand refresh', desc: "A clean, current, trustworthy look that matches the caliber of your work and the price of the jobs you're chasing." },
      { name: 'Neighborhood-targeted rebuild', desc: "Rebuilt around the Buffalo neighborhoods and suburbs you serve, Kenmore, Amherst, Williamsville, Elmwood Village, Cheektowaga, so the new site ranks and converts for the exact areas you want.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search increasingly shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We dig into what's losing you leads and rankings, then map a redesign that fixes it without breaking what already works, and plan around your seasonal calendar where it helps." },
      { name: 'Design', desc: "A current, phone-first layout built to convert that you sign off on and reshape before we touch the rebuild." },
      { name: 'Rebuild and migrate', desc: "We rebuild quickly and line up every redirect and SEO detail for a clean migration that protects the rankings you already hold." },
      { name: 'Launch with SEO care', desc: "We go live with redirects mapped and then keep a close eye on positions so they hold and climb instead of slipping, which counts double right before the winter season." },
      { name: 'Optimize', desc: "Post-launch tuning driven by what's actually converting, plus ongoing speed work and updates." },
    ],
    pricing: {
      heading: 'Transparent Buffalo redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Neighborhood-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Buffalo?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them, and in Buffalo, where seasonal positions are worth real money, we treat the migration as seriously as the design itself." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage, and we can time the launch around your business calendar." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, isn't bringing in leads, or doesn't reflect the quality of your work on Buffalo's distinctive old housing stock, it's costing you jobs. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the redesign help me compete better in Buffalo?', a: "Yes, and that's the point. We rebuild around the specific neighborhoods and suburbs you serve, keep the site fast for emergency mobile searches, and make the call button obvious, so the new site books more jobs than the old one from day one." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings, critical when Buffalo homeowners are searching urgently in bad weather." },
      { q: 'Do I own the redesigned site?', a: "Completely, the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what a Buffalo Website Redesign should fix, and a fixed-price quote with a timeline and a safe migration plan that protects your existing positions." },
    ],
  },
];

export const buffaloCity = {
  citySlug: 'buffalo', city: 'Buffalo', state: 'New York', stateAbbr: 'NY', metro: 'Buffalo-Niagara Falls',

  titleTag: 'Buffalo Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Buffalo marketing for contractors: web design, SEO, and local SEO that gets you found before the next lake-effect storm and lets you own your leads.',

  eyebrow: 'Buffalo · Web Design, SEO & Lead Generation',
  h1: 'Buffalo marketing for contractors that gets you found and booked before the next lake-effect storm',
  h2Exact: 'Buffalo Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for the snowiest major city in America. One team to get you ranking before the storm season, converting old-home renovation leads, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Neighborhood-level targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Buffalo audit',

  intro:
    "Buffalo marketing for contractors has to fit one of the most distinctive markets in the country. The winters are extreme and create genuine emergency demand. The housing stock is old and requires specialists. The city is genuinely reviving, Elmwood Village, Allentown, Black Rock, and young homeowners are renovating at a pace the rest of the Rust Belt hasn't matched. Winning here takes three things working together: a site that converts, SEO that ranks you for what people actually search, and local SEO that puts you in the Map Pack for the neighborhoods and suburbs you serve. Here's how we help Buffalo contractors do exactly that.",
  aioQuestion: 'How do Buffalo contractors get more leads online?',
  aioAnswer:
    "Buffalo contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches, including the emergency winter terms that drive enormous seasonal demand, and local SEO that wins the Google Map Pack neighborhood by neighborhood. In a market shaped by lake-effect winters, old housing stock, and a genuine urban revival, the contractors who rank before the season and target tight by neighborhood win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Buffalo searches \"near me.\" The single highest-return move for most local contractors, done tight, neighborhood by neighborhood, and timed for the lake-effect season.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search, including the seasonal emergency terms that drive Buffalo's busiest weeks, and build an asset you own instead of renting traffic from ads.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs, designed for a market where old homes, harsh winters, and urgent emergency calls all shape how homeowners search and decide.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it carefully so you keep every bit of ranking you've already earned, including the seasonal positions worth the most to your business.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Buffalo?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads in a market shaped by lake-effect winters and old housing stock." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades, roofing, HVAC, plumbing, restoration, electrical, solar, and general contractors. We understand ice dam emergencies, Victorian and craftsman renovations, and the seasonal rhythms that define this market." },
    { q: 'Why does the Buffalo market need a different approach?', a: "Because no other major US city gets 95 inches of snow per year, and because the housing stock is genuinely old and distinctive. The seasonal demand spikes here are sharper than almost anywhere else, and the contractors who are ranking before the lake-effect season starts capture work their competitors scramble for all winter." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Buffalo areas do you serve?', a: "The whole metro: Elmwood Village, Allentown, North Buffalo, Black Rock, Kenmore, Amherst, Williamsville, Orchard Park, Cheektowaga, Niagara Falls, Lockport, Tonawanda, Grand Island, East Aurora, and more, with genuine local pages rather than one generic Buffalo page." },
    { q: 'Where should I start?', a: "Start with a free Buffalo audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves in your Buffalo marketing for contractors that will bring in the most work before the next lake-effect season. No pitch deck, just a plan." },
  ],
};
