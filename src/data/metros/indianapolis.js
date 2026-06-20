// INDIANAPOLIS — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Indianapolis's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// INDIANAPOLIS — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Indianapolis is a year-round race',
  body:
    "The Indianapolis metro is home to more than 2.1 million people, spread across a flat, sprawling landscape that stretches from the working-class core to some of the highest-income suburbs in the Midwest. Two forces drive contractor demand here more than anything else. First, hail alley: Indianapolis sits squarely in severe weather country, and every major storm cell that rolls through sends a wave of insurance calls and emergency roof repairs across dozens of zip codes at once. Roofing contractors who are already ranking when the hail hits capture the surge; everyone else chases it after the fact. Second, a Midwest winter is no joke — freeze-thaw cycles crack foundations, stress pipes, and put real strain on heating systems. When a cold snap drops into the single digits in January, heating calls spike overnight. The market also has real range: Carmel and Fishers are among the wealthiest communities in the country, driving high-end remodel and home improvement spending, while working-class neighborhoods closer to downtown demand value-focused service work. The contractors who own the map across both ends of that spectrum build the most durable businesses.",
  pullQuote: 'In hail alley, the contractor who already ranks when the storm cell hits gets the call. Everyone else gets the voicemail.',
  donut: {
    title: 'How Indianapolis searches',
    value: 9,
    centerLabel: 'Spanish-speaking at home',
    legend: [
      { label: 'Spanish or other language at home', pct: 9, kind: 'teal' },
      { label: 'English only', pct: 91, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Hail/storm roofing (Mar–Jun, Aug–Oct), heating emergencies (Nov–Feb), AC (Jul–Aug)',
  seasonalDemand: [
    { m: 'J', v: 85, peak: true }, { m: 'F', v: 80, peak: true }, { m: 'M', v: 88, peak: true },
    { m: 'A', v: 92, peak: true }, { m: 'M', v: 90, peak: true }, { m: 'J', v: 60 },
    { m: 'J', v: 82, peak: true }, { m: 'A', v: 88, peak: true }, { m: 'S', v: 86, peak: true },
    { m: 'O', v: 84, peak: true }, { m: 'N', v: 78, peak: true }, { m: 'D', v: 82, peak: true },
  ],
  stats: [
    { value: '2.1M', label: 'people across the Indianapolis metro' },
    { value: 'Hail alley', label: 'Indianapolis is one of the most storm-battered markets in the country — roofing demand spikes after every major cell', accent: true },
    { value: 'Nov–Feb', label: 'heating emergency season, when freeze-thaw and cold snaps drive overnight call spikes' },
    { value: 'Top 3', label: 'Map Pack spots that capture most of the clicks when a homeowner searches' },
  ],
  neighborhoods: [
    'Broad Ripple', 'Fountain Square', 'Mass Ave', 'Butler-Tarkington', 'Meridian-Kessler',
    'Carmel', 'Fishers', 'Zionsville', 'Noblesville', 'Greenwood',
    'Avon', 'Plainfield', 'Westfield', 'Brownsburg',
  ],
};

const AREAS = [
  'Broad Ripple', 'Fountain Square', 'Mass Ave', 'Butler-Tarkington', 'Meridian-Kessler',
  'Carmel', 'Fishers', 'Zionsville', 'Noblesville', 'Greenwood',
  'Avon', 'Plainfield', 'Westfield', 'Brownsburg',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We understand hail-season surges, January heating emergencies, and the difference between a Carmel remodel and a Greenwood repair job — so everything we build is shaped around how your customers really search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners two competitors also bought.",
  },
  {
    title: 'We actually speak Indianapolis',
    body: "Suburb-by-suburb targeting from Fishers to Brownsburg, plus the storm-season and freeze-thaw content that turns seasonal spikes into booked work — not a national agency swapping a city name into a template.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say an Indianapolis contractor gets around 1,800 local \"near me\" impressions a month across a handful of suburbs. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a booked-out calendar — and in a storm-season market, being there before the hail hits is worth everything. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Indianapolis', state: 'Indiana', stateAbbr: 'IN', metro: 'Indianapolis',
  heroProof: ['Built for the trades', 'Suburb-by-suburb targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const indianapolisLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'indianapolis', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Indianapolis Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Search your service in Indianapolis and three businesses show up on the map. We get you into those three — before storm season, before the next cold snap. Free audit.',
    eyebrow: 'Local SEO · Indianapolis',
    h1: 'When Indianapolis searches for what you do, be the first name they find',
    h2Exact: 'Indianapolis Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. In hail alley, we get you into that top three before the storm cell rolls through — so the call lands with you, not whoever scrambled to rank after the fact.",
    primaryCta: 'Get my free Indianapolis audit',
    intro:
      "Indianapolis local SEO comes down to one thing: when a homeowner in Carmel or Greenwood searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. This is a market driven by hail season and hard winters, and the contractors who own the Map Pack before demand spikes capture the surge. The ones who wait scramble for whatever's left.",
    aioQuestion: 'How do Indianapolis businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and suburbs you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Indianapolis neighborhoods and communities. In a storm-season market, the extra edge is being fully optimized before hail season and winter hit — so Google already trusts you when demand spikes, and homeowners find you at the top when they need help most.",
    problemHeading: "If your phone is quiet after a storm, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of clicks. If you're not one of them before hail season or a January cold snap hits, you're scrambling for leftovers while the ranked contractors book up. Getting into that top three for your suburbs is the single highest-return move an Indianapolis contractor can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Indianapolis homeowner to multiple contractors, then bill each of you to fight over them. It's a treadmill that gets expensive fast when storm-season lead prices spike. Local SEO builds the opposite: a homeowner finds you, calls you, and nobody else got it. Over time you stop renting and start owning the pipeline." },
      { title: "You're invisible in the high-income suburbs where the big jobs are", body: "Carmel and Fishers are among the wealthiest suburbs in the Midwest. Homeowners there are spending real money on roofing, HVAC, remodels, and upgrades — and they search online before they call. If you're not showing up for \"[service] Carmel\" or \"[service] Fishers,\" you're leaving the most valuable jobs in the metro to competitors who are." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Indianapolis searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes homeowners pick up the phone." },
      { name: 'Neighborhood and suburb pages', desc: "Real pages for Carmel, Fishers, Zionsville, Greenwood, Broad Ripple, and the rest — so you rank for the area someone's actually searching, not just \"Indianapolis.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Indianapolis sources Google trusts — local press, trade associations, partners. This is what separates page one from page two here." },
      { name: 'Storm-season and winter content', desc: "We rank you for hail repair, storm damage, and heating emergency searches before they spike — so you capture demand the moment a storm cell rolls through.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your suburbs and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting before storm season, not chasing it." },
      { name: 'Add local content', desc: "Suburb, neighborhood, and service-area pages across the Indianapolis metro, plus the storm-season and heating content to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next suburb." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Indianapolis suburbs.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Suburb and neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map from Carmel to Greenwood.', features: ['Everything in Local Growth', 'Local link building', 'Storm-season and winter SEO', 'Multi-suburb and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Indianapolis?', a: "Most Indianapolis engagements land between $750 and $2,500 a month, depending on how many suburbs and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The competitive Indianapolis keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days is selling you something." },
      { q: 'What makes Indianapolis local SEO different?', a: "Two things make this market unusual. It's a hail-alley market, so roofing and exterior contractors see enormous demand spikes after storm cells — and only the contractors already ranking capture that surge. And the metro has huge income range: high-spending suburbs like Carmel and Fishers alongside working-class neighborhoods, so you need to rank across different search intents and job types." },
      { q: 'How do I capture storm-season demand?', a: "You have to be ranking before the storm hits, not after. We optimize your profile and content for hail repair, storm damage, and emergency roofing searches so that when a cell rolls through the Indianapolis metro, you're already in the Map Pack. Homeowners in Carmel and Fishers search fast and call the first ranked contractor they trust." },
      { q: 'Which areas do you cover?', a: "All across the Indianapolis metro — Broad Ripple, Fountain Square, Mass Ave, Butler-Tarkington, Meridian-Kessler, Carmel, Fishers, Zionsville, Noblesville, Greenwood, Avon, Plainfield, Westfield, Brownsburg, and more. We build genuine suburb pages instead of one generic Indianapolis page, because that's what ranks for \"[service] [suburb]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand hail-season surges, January heating emergencies, and the difference between a high-ticket Carmel remodel and a repair call in Greenwood." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads — and during storm season when every Indianapolis homeowner needs a roofer at once, lead prices spike and the same lead goes to multiple contractors. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because the work is coming to you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your suburbs, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'indianapolis', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Indianapolis SEO Company | Rank Higher, Get Leads | OnwardCraft',
    metaDescription:
      'Indianapolis SEO that ranks contractors on Google before hail season and hard winters hit. Revenue-tied reporting, no lock-in, built for a storm-season market. Free audit.',
    eyebrow: 'SEO Services · Indianapolis',
    h1: 'Get your Indianapolis business to the top of Google and keep it there',
    h2Exact: 'Indianapolis SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Indianapolis customers search and the leads keep coming — including when hail hits and every homeowner in the metro is searching at once.",
    primaryCta: 'Get my free Indianapolis SEO audit',
    intro:
      "Indianapolis SEO comes down to one question: when a homeowner in Fishers or Greenwood searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords across a market shaped by violent hail seasons, hard winters, and wide income range — and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Indianapolis businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content tied to specific suburbs and neighborhoods, and earning links from trusted Indianapolis sources. In a storm-season market, one of the fastest ways to pull ahead is ranking for hail damage, storm repair, and heating emergency searches before the season spikes — so you capture the surge when it comes instead of chasing it after the fact.",
    problemHeading: "Three reasons your Indianapolis site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. In a market where demand spikes hard after a storm cell or a cold snap, if you're not in the top results when homeowners search, someone else gets the call. It doesn't matter how good your work is if nobody sees your name." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. During peak storm season, Indianapolis click costs spike as multiple roofing contractors bid on the same emergency terms. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost over time." },
      { title: "You're not ranking for the demand that matters", body: "Indianapolis demand is intensely seasonal — hail and storm roofing from March through June and again in August through October, heating emergencies through the winter, and AC calls in July. The contractors who rank for those searches ahead of the season capture the spike. If your SEO ignores storm-season and emergency searches, you're leaving your busiest weeks on the table." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your Indianapolis customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real Indianapolis and industry sources. In a competitive market with strong seasonality, links are often what separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across your suburbs alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Storm-season and heating emergency SEO', desc: "We rank you for hail damage, storm repair, and January heating searches before the season hits — so you're already visible when demand spikes across the Indianapolis metro.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Indianapolis leads — including storm-season and emergency terms." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the storm-season, heating, and suburban content that matters here." },
      { name: 'Build authority', desc: "Links and citations from trusted Indianapolis and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Indianapolis SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and suburbs.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Indianapolis search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Storm-season & emergency SEO', 'Multi-suburb / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Indianapolis?', a: "Most Indianapolis SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Indianapolis?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter suburb-level terms and slower on the most competitive metro-wide keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying — and during Indianapolis storm season, click costs spike as contractors compete for emergency terms. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most contractors do best running SEO as the long-term engine and ads for short-term fills." },
      { q: 'Should my Indianapolis SEO target storm-season demand?', a: "Yes, and this is the single biggest missed opportunity for Indianapolis contractors. When a major hail cell rolls through the metro, thousands of homeowners search for roofers and restoration contractors at once. Ranking takes months to build, so you have to be in place before storm season, not chasing it after. We optimize for those storm and emergency terms ahead of time so your busiest weeks land on you." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add storm-season and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which Indianapolis suburbs do you cover?', a: "All across the metro — Broad Ripple, Fountain Square, Mass Ave, Butler-Tarkington, Meridian-Kessler, Carmel, Fishers, Zionsville, Noblesville, Greenwood, Avon, Plainfield, Westfield, Brownsburg, and more. We build genuine suburb pages rather than one generic Indianapolis page, because that's what ranks for \"[service] [suburb]\" searches." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads — especially during storm season when everyone is competing for the same homeowners." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'indianapolis', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Indianapolis Web Design Company | Sites That Convert | OnwardCraft',
    metaDescription:
      'Indianapolis web design that turns visitors into booked jobs — fast, mobile-first sites built for contractors in a storm-season market. Transparent pricing, you own it. Free quote.',
    eyebrow: 'Web Design · Indianapolis',
    h1: 'Indianapolis web design that turns visitors into booked jobs',
    h2Exact: 'Indianapolis Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Indianapolis contractors fast, mobile-first sites engineered to turn visitors into booked work — and to convert when storm season hits and homeowners are searching urgently.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Indianapolis contractor websites lose leads quietly: slow on a phone, buried call button, no clear offer. Web design done right fixes all of that. We build sites that load fast, look like the professional you are, and turn visitors from Carmel to Greenwood into booked jobs — ready to convert when hail season brings a surge and when a January cold snap sends heating calls overnight.",
    aioQuestion: 'What makes a good contractor website in Indianapolis?',
    aioAnswer:
      "A good Indianapolis contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific suburbs and neighborhoods you serve. Because Indianapolis homeowners search urgently during storms and heating emergencies, the site has to make it effortless to call — and because the market spans high-income suburbs like Carmel all the way to working-class neighborhoods, the messaging has to speak to both.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next guy — and in a storm-surge moment, the homeowner who hits a slow or confusing site will just tap the next result. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Indianapolis visitors are on mobile, and they bounce fast if your site takes more than a few seconds to load. During storm season when homeowners are searching from their driveways, a slow site is a lost lead. We build fast, so you keep the visitor and the ranking." },
      { title: "It doesn't speak to your suburbs", body: "A homeowner in Fishers wants to see you serve Fishers — not a generic \"Indianapolis\" page that could be anybody. We build sites that name the suburbs and neighborhoods you work, so visitors trust you're local and Google ranks you for the right searches." },
    ],
    servicesHeading: "What's in an OnwardCraft Indianapolis website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your suburbs, and the jobs you actually want." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your Indianapolis traffic is — especially during urgent storm-season searches." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that speak to stressed homeowners after a hail storm or a January pipe freeze, and book the job before they tap back to the results." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and suburb-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Suburb-targeted pages', desc: "Pages built around the Indianapolis suburbs you serve — Carmel, Fishers, Zionsville, Greenwood, Avon, Noblesville — so you stand out instead of blending into a generic metro page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your suburbs, your best jobs, and your competitors, then map the site around booking more of the work you want — from storm repairs to high-end Carmel remodels." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting." },
    ],
    pricing: {
      heading: 'Transparent Indianapolis web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + suburb pages', 'Speed & Core Web Vitals', 'Suburb-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Indianapolis?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site be ready for storm season?', a: "That's built into how we design it. Fast load for urgent mobile searches, a clear call button above the fold, and suburb-specific pages so homeowners in Carmel or Fishers know immediately that you serve them. We can also prioritize storm-damage and emergency messaging if that's a core part of your business." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and suburb-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Indianapolis terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your Indianapolis traffic comes from — especially during hail season when homeowners are searching urgently." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Indianapolis contractor site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'indianapolis', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Indianapolis Website Redesign | More Leads, No Loss | OnwardCraft',
    metaDescription:
      'Redesign your Indianapolis website without losing rankings. Faster, mobile-first rebuilds that convert more visitors before hail season and hard winters hit. Free audit.',
    eyebrow: 'Website Redesign · Indianapolis',
    h1: 'Redesign your Indianapolis website without losing your rankings',
    h2Exact: 'Indianapolis Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, easy to ignore during a storm-season surge. We redesign Indianapolis contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Indianapolis contractor sites for speed and conversions, build them around the storm-season and winter demand that drives this market, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one — which matters especially in Indianapolis where being visible before storm season or a winter cold snap is the difference between a booked calendar and scrambling for leftovers.",
    problemHeading: "Signs your Indianapolis site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "For a high-ticket roofing job or a big remodel in Carmel, Indianapolis homeowners judge you by your site in seconds. An old, cluttered design quietly sends them to a competitor who looks more established — even when your work is better. In a market where Carmel and Fishers homeowners are spending real money, looking the part matters." },
      { title: "It's slow and hard to use on a phone during a surge", body: "Storm season brings a wave of urgent mobile searches. If your site is clunky or slow on mobile, you're losing those searches to competitors who load in two seconds and have a call button above the fold. A redesign built mobile-first wins those moments." },
      { title: "It blends into the market instead of converting", body: "Traffic that doesn't turn into calls is wasted. A generic old site gives a homeowner no reason to pick you over the contractor ranked below you, especially when they're stressed after a hail storm and just want someone to answer. We rebuild for conversions and for the suburbs you actually serve, so the right buyers choose you." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned — nothing gets lost in the launch." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — critical for urgent storm-season mobile searches and better for rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your Indianapolis traffic lives — especially during weather-driven surges." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the price of your jobs, from a quick repair to a full Carmel remodel." },
      { name: 'Suburb-targeted rebuild', desc: "Rebuilt around the Indianapolis suburbs you serve — Carmel, Fishers, Noblesville, Greenwood, Avon — so the new site ranks and converts for the right local searches.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you leads and rankings, then map a redesign that fixes it without breaking what already works — including your storm-season and seasonal content." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and improve, not drop." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Indianapolis redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + suburb pages', 'Suburb-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Indianapolis?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, isn't converting during storm season or heating calls, or blends into the Indianapolis market without standing out, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking — including any storm-season or service pages that are already indexed — and handle the technical migration so nothing important gets lost." },
      { q: 'Will the redesign help me compete across Indianapolis suburbs?', a: "Yes, and that's the point in a market with this much income range. We rebuild around the specific suburbs you serve — from high-income Carmel and Fishers to growing communities like Avon and Brownsburg — and make the offer and call button obvious, so the right homeowners pick you." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings. This matters most during storm season when homeowners are searching urgently on their phones." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const indianapolisCity = {
  citySlug: 'indianapolis', city: 'Indianapolis', state: 'Indiana', stateAbbr: 'IN', metro: 'Indianapolis',

  titleTag: 'Indianapolis Marketing for Contractors | Web, SEO & Leads | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Indianapolis contractors. Get found before hail season hits, own your leads, and stop paying for shared Angi leads. Free Indianapolis audit.',

  eyebrow: 'Indianapolis · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Indianapolis contractors found and booked',
  h2Exact: 'Indianapolis Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for a storm-season market. One team to get you ranking before hail season hits, converting across Carmel to Greenwood, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Suburb-by-suburb targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Indianapolis audit',

  intro:
    "If you run a contracting business in Indianapolis, you're fighting for work in a market shaped by hail alley, hard Midwest winters, and a wide range of buyers — from high-income homeowners in Carmel and Fishers to working-class neighborhoods closer to downtown. Winning here takes three things working together: a site that converts when homeowners search urgently after a storm, SEO that ranks you for what people search before the season spikes, and local SEO that puts you in the Map Pack for the suburbs you serve. Here's how we help Indianapolis contractors do exactly that.",
  aioQuestion: 'How do Indianapolis contractors get more leads online?',
  aioAnswer:
    "Indianapolis contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches — especially storm-damage, hail repair, and heating emergency terms — and local SEO that wins the Google Map Pack suburb by suburb. The contractors who rank before hail season and winter hit capture the surge; everyone else chases it after the fact.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Indianapolis searches \"near me\" — before the next hail cell rolls through and every homeowner is calling at once.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the storm-season, winter emergency, and suburban money keywords your customers actually search. Build an asset you own instead of renting traffic from ads that stop the moment you stop paying.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn urgent post-storm visitors into booked jobs — from Carmel remodels to Greenwood repair calls — not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions — ready for storm season and hard winters — and migrate it carefully so you keep every bit of ranking you've already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Indianapolis?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads — especially during storm season and the winter heating rush." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors — so we understand hail-season surges, January heating emergencies, and the difference between a high-ticket Carmel remodel and a Greenwood repair call." },
    { q: 'Why does the Indianapolis market need a different approach?', a: "Indianapolis is hail alley. Major storm cells bring an enormous surge in roofing and restoration demand, and the contractors already ranking capture that wave. The market also spans a huge income range — Carmel and Fishers are among the wealthiest suburbs in the Midwest, while working-class neighborhoods demand value-focused service work. A generic national-agency approach misses all of that." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Indianapolis suburbs and neighborhoods do you serve?', a: "All across the metro — Broad Ripple, Fountain Square, Mass Ave, Butler-Tarkington, Meridian-Kessler, Carmel, Fishers, Zionsville, Noblesville, Greenwood, Avon, Plainfield, Westfield, Brownsburg, and more." },
    { q: 'Where should I start?', a: "Start with a free Indianapolis audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest — including whether you're set up to capture the next storm surge. No pitch deck, just a plan." },
  ],
};
