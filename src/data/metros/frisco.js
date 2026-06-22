// FRISCO - per-metro x per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Frisco's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// FRISCO - shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'What ranking in Frisco actually demands',
  body:
    "Few cities in America have grown the way Frisco has. It went from a quiet stop north of Plano to a master-planned city of more than 200,000 in a single generation, and the building has not stopped. That creates a peculiar market for a contractor. Half your future customers moved in last year and have no idea who to call; the other half bought new construction five to ten years ago and are now hitting their first roof, HVAC, and foundation repairs. Money is part of the story too. The Dallas Cowboys run their world headquarters out of The Star, the PGA of America planted its campus here, FC Dallas plays at Toyota Stadium, and a steady run of corporate relocations has filled Collin County with high-earning families who vet a contractor the way they vet a school district. They read every review and compare three quotes before anyone answers the phone. Two patterns decide who wins. Almost every search starts on a phone with \"near me\" attached, and the homeowner taps one of the first names that appears. And this is the spine of Texas hail alley, where one April supercell can drop billions in roof damage on Frisco and Prosper overnight. Whoever is already ranked when that storm clears books the season.",
  pullQuote: 'In a city this new, the contractor a Frisco family has never heard of is the one Google shows first. That name books the work.',
  donut: {
    title: 'How Frisco searches',
    value: 25,
    centerLabel: 'Asian',
    legend: [
      { label: 'Asian', pct: 25, kind: 'teal' },
      { label: 'Other', pct: 75, kind: 'grey' },
    ],
  },
  seasonTitle: 'Where Frisco trade demand peaks',
  seasonCaption: 'Spring hail roofing (Mar to Jun), summer HVAC load (Jun to Sep)',
  seasonalDemand: [
    { m: 'J', v: 38 }, { m: 'F', v: 40 }, { m: 'M', v: 70, peak: true }, { m: 'A', v: 88, peak: true },
    { m: 'M', v: 96, peak: true }, { m: 'J', v: 90, peak: true }, { m: 'J', v: 82, peak: true },
    { m: 'A', v: 80, peak: true }, { m: 'S', v: 66, peak: true }, { m: 'O', v: 44 },
    { m: 'N', v: 36 }, { m: 'D', v: 42 },
  ],
  stats: [
    { value: '200K+', label: 'residents in one of America\'s fastest-growing cities' },
    { value: '~25%', label: 'of Frisco is Asian, a huge Indian and East Asian tech-professional base', accent: true },
    { value: 'Mar–Jun', label: 'hail and tornado season, when roofing demand explodes' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks' },
  ],
  neighborhoods: [
    'Starwood', 'Stonebriar', 'The Trails', 'Phillips Creek Ranch', 'Newman Village',
    'Little Elm', 'Prosper', 'McKinney', 'The Colony', 'Celina',
    'Frisco Lakes', 'Panther Creek', 'Richwoods', 'Hollyhock', 'Lone Star Ranch',
  ],
};

const AREAS = [
  'Frisco', 'Plano', 'McKinney', 'Prosper', 'Celina', 'Little Elm',
  'The Colony', 'Allen', 'Lewisville', 'Aubrey', 'Anna',
  'Princeton', 'Melissa', 'Carrollton', 'Denton',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'Trades are the only thing we touch',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We know how a hail claim moves, what a heat-wave HVAC backlog feels like, and how a new-construction warranty repair gets searched, so what we build matches how Frisco homeowners actually look for help.",
  },
  {
    title: 'We pull you off the rented-lead treadmill',
    body: "What we are after is a pipeline with your name on it. Not one more recurring charge to a lead broker for a Phillips Creek Ranch homeowner that three other crews are dialing at the same second.",
  },
  {
    title: 'We genuinely know Frisco',
    body: "Collin County hail claims, a city that has roughly doubled in a decade, an affluent transplant base that compares everything, and street-level targeting from Starwood to Newman Village. A national shop cannot fake that by find-replacing a city name in a template.",
  },
  {
    title: 'Plain pricing, no riddles',
    body: "The prices sit on the page, the reporting points at real leads, and you go month-to-month once the first 90 days are up. If the invoice is not paying for itself, you cut us. The risk stays on our side of the table.",
  },
];

const PROOF = {
  heading: 'No logo wall yet, so here is the honest math',
  body:
    "A lot of agencies lead with a grid of client logos. We are a new, founder-run shop, and we are not going to invent a track record we have not earned. What we can put in front of you is the reasoning, taken directly from Google's and the industry's own data on how people hunt for a local contractor.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here is a rough sketch, marked plainly as a projection and not a result we are claiming: say a Frisco contractor pulls around 1,500 local \"near me\" impressions in a month. Climbing from page-two invisibility into the top three is the gap between a handful of stray calls and a calendar you have to turn work away from, and a hailstorm widens that gap fast. In your free audit we run the real figures for your shop: your live rankings, your true search volume, and a level 90-to-180-day plan to the top of the map.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Frisco', state: 'Texas', stateAbbr: 'TX', metro: 'Frisco-Collin County',
  heroProof: ['Built for the trades', 'Hail-season ready', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const friscoLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'frisco', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Frisco Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Search a trade in Frisco and Google pins three businesses to the map. We get you into those three, so the next hail-season call rings your phone.',
    eyebrow: 'Local SEO · Frisco-Collin County',
    h1: 'When Frisco searches for what you do, be the first name they find',
    h2Exact: 'Frisco Local SEO Company',
    heroSubhead:
      "When a Frisco homeowner searches \"near me,\" Google pins exactly three businesses to the map and the rest of the list might as well not be there. We push you into that top three, so the call rings your phone instead of whoever happens to rank first, and so you are already in place when the next hail line lights up every phone in Collin County.",
    primaryCta: 'Get my free Frisco audit',
    intro:
      "Frisco local SEO turns on a single moment: a family in Starwood or Phillips Creek Ranch types your trade plus \"near me,\" and you are either one of the three businesses Google dropped on the map or you are nowhere. Most of them tap one of those three and never scroll past it. In a city adding new homeowners by the thousand every year, owning one of those slots is the whole contest. Here is how we get you there.",
    aioQuestion: 'How do Frisco businesses rank higher in local search?',
    aioAnswer:
      "You rank by nailing four things: a Google Business Profile tuned to the exact trades and Collin County neighborhoods you want; matching name, address, and phone details everywhere online; a steady run of real reviews; and local pages built around genuine Frisco neighborhoods. In a fast-growing, hail-prone market, the winners look established, answer the storm call fast, and were already ranking before spring demand hit.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Three names own the map and yours is not one', body: "Pull up your own trade plus \"near me\" right now. The three businesses Google pinned to the map are swallowing most of the clicks in your category. If your name is not among them, the quality of your roofs or your repairs barely registers, because most Frisco homeowners never scroll far enough to find you. Breaking into that trio is usually the highest-return move a contractor in this city can make." },
      { title: "You're buying leads that were never yours", body: "Angi, Thumbtack, and HomeAdvisor sell the same Frisco homeowner to four crews at once, then charge each of you to elbow for the same job. There is no end to that loop. Local SEO builds the reverse: a homeowner finds you, dials you, and no rival got a copy of the lead. Run it long enough and you stop paying rent on visibility and start owning the pipe." },
      { title: 'The hail lands and you are invisible', body: "When a supercell shreds shingles across Collin County, searches for roofing, restoration, and HVAC spike within the hour, and the crews already ranked grab those calls. If you are off the map when the next one drops, the insurance work flows straight to whoever Google already trusts. Ranking before the season is how you ride that surge instead of watching it roll past the shop." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The heaviest lever in the Map Pack. We sharpen your categories, services, service area, photos, and posts so Google knows exactly which Frisco searches should land on you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to agree on every directory Google reads. We correct the listings that contradict each other and create the ones missing across Collin County." },
      { name: 'Reviews that keep coming', desc: "A straightforward engine that converts finished jobs into a regular stream of fresh reviews. It nudges your ranking up and gives the next family a reason to call you before anyone else." },
      { name: 'Neighborhood pages', desc: "Genuine pages for Starwood, Stonebriar, Phillips Creek Ranch, Newman Village and the rest, so you surface for the exact neighborhood a homeowner is searching rather than a flat \"Frisco.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The wiring behind the wall that lets every other piece actually climb." },
      { name: 'Local link building', desc: "Mentions and links from Frisco and Collin County sources Google respects: local press, trade groups, community partners. In a market this competitive that is often the line between page one and page two." },
      { name: 'Hail-season readiness', desc: "We get your profile, pages, and reviews ranked before spring storm season so you bank the demand spike instead of chasing it once the radar finally clears.", featured: true },
      { name: 'AI search readiness', desc: "A growing slice of \"near me\" research now starts inside AI Overviews, ChatGPT, and Perplexity. We structure your content so those engines can read you and name you in their answer.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We map where you truly rank today across every service area and identify which competitors are beating you in the Map Pack and the precise reason why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP go first, because they move quickest. Most Frisco clients notice early lift here inside the first few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine switch on. These stack up week after week, which is the whole reason local SEO pays off for the crews that start before the storm rather than after." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Frisco, Prosper, McKinney and the rest of Collin County, paired with the on-page work that makes them rank." },
      { name: 'Report and expand', desc: "Reporting in plain English, tied to calls and booked work, never vanity rankings. Then we go claim the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, laying the Map Pack groundwork right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For crews battling across several Frisco-area communities.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors set on owning the map across Collin County.', features: ['Everything in Local Growth', 'Local link building', 'Hail-season demand targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Frisco?', a: "Most Frisco engagements run somewhere between $750 and $2,500 a month, set by how many neighborhoods and keywords you want to win. The tiers right above this break it down. No hidden fees, no long contract, and we pin the exact scope in your free audit before you commit a cent." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile fixes can move inside a few weeks. The contested Frisco keywords usually need 90 to 180 days of steady work, because reviews and citations build up over time. In a city growing this fast, anyone guaranteeing page one in 30 days is selling you a story." },
      { q: 'What makes Frisco local SEO different?', a: "Two forces. First, this is one of the fastest-growing cities in the country, so fresh competitors appear every month and affluent, research-heavy transplants weigh reviews and consistent listings hard. Second, it sits in Texas hail alley, so trade demand swings violently with spring storms. Your ranking has to be locked in before the hail, not improvised after it." },
      { q: 'How does local SEO help me during hail season?', a: "When a major storm strikes Collin County, searches for roofing, restoration, and HVAC jump within the hour, and the businesses already in the Map Pack take those calls. We get you ranked and reviewed ahead of the season so you bank that work instead of fighting for leftovers once every other crew is already booked solid." },
      { q: 'Which areas do you cover?', a: "All of Frisco and the surrounding Collin and Denton County communities: Starwood, Stonebriar, Phillips Creek Ranch, Newman Village, plus Prosper, McKinney, Celina, Little Elm, The Colony and beyond. We build real neighborhood pages instead of one generic Frisco page, because that is what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It is nearly all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand storm calls, hail-driven demand, insurance jobs, and the new-construction warranty repairs that come due across Frisco, and we build your local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research now begins in AI tools rather than classic search. We structure your content and schema so those engines can read, trust, and cite your business by name. In a market this connected it is fast becoming as decisive as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an opening 90 days because that is about how long local SEO needs to show genuine movement. After that you are month-to-month. If we are not delivering, you leave, and the accountability sits squarely with us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never get to keep. We build rankings, a Google profile, and a review base that route leads straight to you alone. Over time you lean on the brokers less, because the work is already arriving direct." },
      { q: "What's in the free audit?", a: "A straight read on where you rank today across your service areas, what your Map Pack competitors are doing to stay ahead, the fixes that will move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'frisco', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Frisco SEO Company | OnwardCraft',
    metaDescription:
      'Frisco SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in, built for hail-season and summer demand.',
    eyebrow: 'SEO Services · Frisco-Collin County',
    h1: 'Get your Frisco business to the top of Google and keep it there',
    h2Exact: 'Frisco SEO Company',
    heroSubhead:
      "The instant you stop funding ads, the leads stop with them. SEO flips that: rank once for what Frisco homeowners search and the work keeps arriving month after month. We build that ranking and tie every report to real calls and booked jobs, not climbing charts that never ring.",
    primaryCta: 'Get my free Frisco SEO audit',
    intro:
      "Frisco SEO comes down to a blunt question: when a homeowner searches your trade, do you land on page one or page two? Out here page two is a rounding error. We get contractors ranking for the money keywords in one of the country's fastest-growing, hail-battered markets, and we score the whole thing in leads, not traffic that never lifts the phone.",
    aioQuestion: 'How do Frisco businesses rank higher on Google?',
    aioAnswer:
      "They rank by repairing the technical base of the site, tuning each page for the exact terms buyers type, publishing local content people actually need, and earning links from trusted Frisco and Collin County sources. In an affluent, fast-growing, crowded market, keeping the site quick on a phone and ranking for hail-driven seasonal terms are two of the fastest ways to pull in front.",
    problemHeading: "Three reasons your Frisco site isn't bringing in work",
    painPoints: [
      { title: 'Page two is where leads go to die', body: "Hardly anyone clicks past Google's first page, and they seldom travel far down it. If your trade does not put you near the top, your site is functionally invisible, however polished it looks. In a city where new homeowners are choosing a contractor from scratch, that invisibility hands the job to whoever does show up." },
      { title: 'Your leads stop the moment the card does', body: "Ads have their place, but the second your billing pauses, the calls go silent. SEO builds something you actually hold: rankings that keep producing leads for months and years after the work is done, at a slice of the per-lead cost you are paying the brokers now." },
      { title: 'You miss the demand that pays the bills', body: "Frisco demand lurches with spring storms and the summer heat load, and the contractors ranked for those terms in advance catch the spike. If your SEO skips hail-driven and seasonal searches, you are quietly surrendering your richest, busiest months to crews that planned ahead." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the behind-the-scenes fixes Google needs before it will rank your Frisco site at all." },
      { name: 'On-page optimization', desc: "Every page that earns its keep tuned for the exact terms your Frisco customers type: titles, headings, body copy, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and guides that answer what buyers ask, attract links, and pull in leads on their own long after we hit publish." },
      { name: 'Link building', desc: "Authority from real Frisco and trade sources. In a Collin County market this contested, links are frequently the tiebreaker between page one and page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack work so you take the \"near me\" searches in step with your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and booked leads, not just rankings and traffic, so you always know what your SEO is worth in real dollars." },
      { name: 'Hail & seasonal SEO', desc: "We rank you for the hail-driven and summer searches that fuel Frisco's busiest stretch, so you are visible before demand spikes rather than scrambling once it has.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of Frisco search now starts.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and rivals, then draw a roadmap around the keywords most likely to bring in real Frisco leads, not just impressions." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile. The groundwork everything else has to stand on before it can rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus fresh local content, including the seasonal and hail-driven terms that decide who wins April in Collin County." },
      { name: 'Build authority', desc: "Links and citations from trusted Frisco and industry sources to push your competitive keywords up onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we lean harder into what is working and push out into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Frisco SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site chasing its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across trades and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses out to own Frisco and Collin County search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Hail & seasonal SEO', 'eCommerce / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Frisco?', a: "Most Frisco SEO engagements run $900 to $3,000 a month, set by how competitive your keywords are and how much content and link work you need. The tiers sit above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Frisco?', a: "Look for early movement in 2 to 3 months and meaningful results in 4 to 6, quicker on low-competition terms and slower on the most fought-over Frisco keywords. SEO compounds, so the longer it runs, the larger the gains get." },
      { q: 'Is SEO better than Google Ads?', a: "They do separate jobs. Ads buy instant traffic that vanishes the moment you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Frisco contractors do best running SEO as the long-term engine and ads for short bursts of demand." },
      { q: 'Should my Frisco SEO target hail season?', a: "Definitely. When major hailstorms hit Collin County, searches for roofing, restoration, and HVAC jump overnight, and ranking takes months to build, so you have to be in place before the season instead of chasing it after. We optimize for those seasonal and hail-driven terms ahead of time so your busiest months come to you." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. Higher tiers add hail-and-seasonal and AI-search optimization. We settle the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an opening 90 days because SEO needs that window to show real movement, then it switches to month-to-month. If we are not delivering, you go." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a growing part of what we work on. We structure your content and schema so AI engines can read, trust, and cite your business by name, not just classic search results." },
      { q: 'Which areas around Frisco do you cover?', a: "All of Frisco and the surrounding Collin and Denton County areas: Prosper, McKinney, Celina, Little Elm, The Colony, Plano, Allen and more, each with genuine local pages rather than one generic Frisco page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that route leads straight to you. The more of your search visibility you own, the less you depend on paying brokers for the same lead three rivals also bought." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the fixes that will move you fastest, and a realistic timeline with the numbers modeled for your Frisco business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'frisco', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Frisco Web Design Company | Sites That Convert | OnwardCraft',
    metaDescription:
      'Frisco web design that turns visitors into booked jobs: fast, mobile-first sites built for contractors and ready for hail-season demand spikes.',
    eyebrow: 'Web Design · Frisco-Collin County',
    h1: 'Frisco web design that turns visitors into booked jobs',
    h2Exact: 'Frisco Web Design Company',
    heroSubhead:
      "A good-looking site that never produces a call is just an expensive flyer. We build Frisco contractors fast, mobile-first sites engineered to turn visitors into booked work, and sturdy enough to keep converting when a hailstorm floods your phone in a single afternoon.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Frisco contractor sites leak leads without anyone noticing: slow on a phone, call button hidden, no clear offer in sight. Web design done properly plugs every one of those holes. We build sites that load fast, look like the established pro you are, and turn Starwood-to-Phillips-Creek-Ranch visitors into booked jobs, and that hold their footing when a Collin County storm sends traffic vertical. Frisco buyers are affluent and do their homework, so the site has to earn their trust on sight.",
    aioQuestion: 'What makes a good contractor website in Frisco?',
    aioAnswer:
      "A strong Frisco contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and is built to absorb traffic spikes during hail season. Because most Frisco searches happen on mobile and homeowners here research carefully, mobile speed, polished trust signals, and an obvious next step separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It reads like a flyer, not a sales tool", body: "Plenty of contractor sites just rattle off services and stop there. No clear offer, no obvious next step, no reason to pick you over the next name on the map. We design every page around a single job: turning a Frisco visitor into a booked lead." },
      { title: 'A phone load that loses the visitor', body: "Most of your Frisco traffic is on a phone, and they leave if your site needs more than a couple of seconds to appear. Slow sites also rank lower, so you lose twice over. We build for speed, so you keep both the visitor and the ranking." },
      { title: 'It buckles under a hail-season rush', body: "After a big Collin County storm, contractor sites get hammered with urgent traffic, and the slow ones stall or bury the call button at the precise minute it matters most. We build sites that stay quick and keep converting under load, so you capture that demand instead of feeding it to a faster competitor." },
    ],
    servicesHeading: "What's in an OnwardCraft Frisco website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site shaped around your trade, your Collin County service area, and the exact jobs you want more of." },
      { name: 'Mobile-first build', desc: "Built for the phone first, because that is where nearly all your Frisco traffic lives. Fast, thumb-friendly, and a tap away from calling you." },
      { name: 'Conversion-focused UX', desc: "Clear offers, unmissable call buttons, and lead forms placed where homeowners actually use them. Every page carries a plain next step." },
      { name: 'Copy that sells', desc: "Words written for a research-heavy Frisco homeowner weighing three quotes, not filler text that reads exactly like every other contractor in the metro." },
      { name: 'Local SEO foundation', desc: "Built from the studs up to rank: clean structure, schema, fast load, and neighborhood-ready pages for Starwood, Stonebriar, Phillips Creek Ranch and beyond." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and clear Google's performance checks, which protects your conversions and your rankings together." },
      { name: 'Hail-surge ready', desc: "Built to stay fast and keep the call button front and center when hail-season traffic spikes, the exact window that turns visitors into your biggest jobs of the year.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read your site and recommend your business as more Frisco search shifts toward AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We dig into your trade, the Collin County neighborhoods you serve, the jobs that pay best, and the crews already ranking ahead of you. Then we plan the site around booking more of that work." },
      { name: 'Design', desc: "We mock up a custom, phone-first layout aimed at the research-heavy Frisco homeowner. You see it and push back on it before anyone writes a line of code." },
      { name: 'Build and copy', desc: "We build it quick and write copy pitched at a family comparing three quotes, with the call button sitting front and center on every Frisco page." },
      { name: 'Launch', desc: "We ship it clean, with the local SEO base, call tracking, and speed all set from the first day so a hail-season visitor never waits on a slow page." },
      { name: 'Support and optimize', desc: "We keep the site fast and current, then tune it on what Frisco visitors are actually doing: which page turns a Starwood homeowner into a phone call." },
    ],
    pricing: {
      heading: 'Transparent Frisco web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors running several trades.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Hail-surge ready'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Frisco?', a: "Most Frisco contractor websites with us run $2,000 to $8,000 as a one-time build, set by how many pages and integrations you need. The tiers sit right above. The price is fixed, there is no surprise invoice, and the finished site is yours to keep." },
      { q: 'How long does it take to build?', a: "A focused site runs about 2 to 4 weeks; a larger custom build runs 4 to 8. We hand you a firm timeline up front and keep you posted through every stage." },
      { q: 'Will my site handle a hail-season traffic spike?', a: "Yes, and in Frisco that matters more than in most places. After a big Collin County storm, contractor sites take a flood of urgent traffic, and the slow ones drop leads right as demand peaks. We build fast and keep the call button obvious, so your site converts under load instead of stalling." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank, and pairing it with our SEO service is how you climb the competitive Frisco terms." },
      { q: 'Do I own the website?', a: "Completely. The site, the domain, and the words on it belong to your Frisco business. We never hold your assets hostage, and we never lock you onto a platform you cannot pack up and take elsewhere." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where nearly all of your Frisco traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We choose the platform that fits your needs and that you can actually run yourself, usually WordPress or Webflow. We recommend the right fit in your free consult and lay out the tradeoffs in plain English." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every Frisco build ships with launch support baked in. After that you can add affordable monthly maintenance that covers updates, speed checks, and security, so the site holds up when hail season drives a rush of traffic at it." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project at a fixed price. Any ongoing maintenance or SEO is month-to-month, so you can leave whenever you want." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Frisco site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'frisco', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Frisco Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your Frisco website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs and hold up in hail season.',
    eyebrow: 'Website Redesign · Frisco-Collin County',
    h1: 'Redesign your Frisco website without losing your rankings',
    h2Exact: 'Frisco Website Redesign Company',
    heroSubhead:
      "An outdated site bleeds jobs quietly every week: slow, clumsy on a phone, easy for a Frisco family to scroll right past. We redesign contractor sites to convert more and load faster, and we migrate so carefully that you hold onto every bit of ranking you have already earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns fall into one of two traps: the site looks sharper but converts exactly the same, or it launches and the rankings drop off a cliff overnight. We do neither. We redesign Frisco contractor sites for speed and conversions, build them to take a hail-season traffic rush, and migrate with the redirects and SEO care that protect the traffic you have spent years building.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign holds your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Frisco site is overdue for a redesign",
    painPoints: [
      { title: 'A dated look quietly drains your trust', body: "On a high-ticket job, affluent Frisco homeowners size you up by your site in seconds. An old, cluttered design quietly ships them to a competitor who simply looks more established, even when your work is clearly the better choice. In a city full of new-construction owners spending real money, that first impression decides who gets the call." },
      { title: 'Slow and awkward on a phone', body: "If your site is clunky or sluggish on mobile, you are losing most of your Frisco visitors before they ever reach your offer. A redesign built mobile-first wins those visitors back and turns them into leads." },
      { title: 'It stalls right when demand peaks', body: "Traffic that never becomes a call is wasted money, and an old site that slows to a crawl under a hail-season surge loses leads at the moment they are worth the most. We rebuild for conversions and for the days your phone should be ringing nonstop." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what is costing you leads and rankings today, so the redesign fixes the real problems instead of just shuffling the colors around." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep every bit of the rankings and traffic you have already earned in Frisco." },
      { name: 'Conversion redesign', desc: "Plain offers, call buttons placed where a Frisco homeowner reaches for them, and lead forms people actually finish. We redesign for booked jobs, not a better-looking screenshot." },
      { name: 'Speed overhaul', desc: "We rebuild the site to load fast and clear Core Web Vitals, which protects both your conversions and your hard-won Collin County rankings at once." },
      { name: 'Mobile-first rebuild', desc: "Rebuilt around the phone first, because that is where almost every Frisco homeowner finds a contractor and taps to call." },
      { name: 'Brand refresh', desc: "A current, credible look that reads as established to an affluent Frisco buyer and matches the price of the jobs you are chasing." },
      { name: 'Hail-surge ready rebuild', desc: "Rebuilt to stay quick and keep the call button working when a Collin County storm sends traffic vertical in an afternoon, so the new site lands your biggest jobs of the year rather than stalling on them.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as more Frisco search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We pin down what is costing you Frisco leads and rankings today, then plan a redesign that repairs it without breaking the pages already pulling work in for you." },
      { name: 'Design', desc: "A current, phone-first, conversion-minded design aimed at a research-heavy Frisco homeowner. You review it and shape it before we build anything." },
      { name: 'Rebuild and migrate', desc: "We rebuild quick and line up every 301 redirect and SEO detail so the migration is clean and your Collin County rankings carry over intact." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and watch closely so your rankings hold and climb instead of slipping." },
      { name: 'Optimize', desc: "Once it is live we tune the site on what is actually turning Frisco visitors into calls, and keep it fast and updated through every storm season." },
    ],
    pricing: {
      heading: 'Transparent Frisco redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Hail-surge ready'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Frisco?', a: "Most Frisco redesigns with us run $2,500 to $9,000 as a one-time project, set by the size of the site and any integrations. The price is fixed up front, there is no surprise bill at launch, and the rebuilt site is yours to keep." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not when the migration is handled with care, and that is how we run every Frisco rebuild. We map a 301 redirect for every URL that changes, keep your content and metadata, carry the schema over, and test on staging before launch. Handled this way, a redesign holds your Collin County rankings and usually nudges them up." },
      { q: 'How long does a redesign take?', a: "A focused Frisco redesign runs about 3 to 5 weeks. A larger rebuild runs 5 to 9. We give you a firm timeline before we start and keep you posted at every stage so it is wrapped well ahead of spring hail season." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is a pain to update, is not bringing in leads, or stalls when hail-season traffic surges, it is costing you work. The free audit tells you plainly whether a redesign is worth it for your Frisco business." },
      { q: 'Do you migrate my existing content?', a: "Yes. We move your existing content across, sharpen the parts that are weak, hold onto the pages already ranking in Frisco search, and run the technical migration ourselves so nothing important gets dropped along the way." },
      { q: 'Will the new site handle hail-season traffic?', a: "Yes, and in Frisco that is a real consideration. After a big Collin County storm, contractor sites take a surge of urgent traffic, and the slow ones lose leads. We rebuild for speed and keep the call to action obvious so the site converts when demand peaks." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild phone-first, since that is how nearly every Frisco homeowner reaches a contractor, and we tune for quick load and Core Web Vitals, which raises conversions and rankings together." },
      { q: 'Do I own the redesigned site?', a: "Completely. The site, the domain, and the content stay with your Frisco business, and there is no platform you get locked onto." },
      { q: 'Am I locked into a contract?', a: "No. The Frisco redesign is a one-time project at a fixed price. Any maintenance or SEO you add afterward runs month-to-month, so you can stop whenever it stops earning its keep." },
      { q: "What's in the free redesign audit?", a: "A straight read on what your current site is costing you in Frisco leads and lost rankings, the things the redesign needs to fix, and a fixed-price quote that comes with a timeline and a safe migration plan." },
    ],
  },
];

export const friscoCity = {
  citySlug: 'frisco', city: 'Frisco', state: 'Texas', stateAbbr: 'TX', metro: 'Frisco-Collin County',

  titleTag: 'Frisco Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Frisco contractors. Get found, get booked, and own your leads instead of renting them, all built for hail-season demand.',

  eyebrow: 'Frisco · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Frisco contractors found and booked',
  h2Exact: 'Frisco Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Frisco's fast-growing, affluent, hail-driven market. One team to get you ranking, converting, and off the rented-lead treadmill for good.",
  heroProof: ['Built for the trades', 'Hail-season ready', 'No lock-in contracts'],
  primaryCta: 'Get my free Frisco audit',

  intro:
    "If you run a contracting business in Frisco, you are fighting for attention in a city that has roughly doubled in a decade and keeps drawing in affluent families who research every choice: new builds in Phillips Creek Ranch, estate homes in Starwood, golf-course lots out by Frisco Lakes, and the competition for that work grows right alongside the rooftops. Winning here takes three things in concert: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack, all locked in before the next hailstorm sends demand through the roof. Here is exactly how we help Frisco contractors pull that off.",
  aioQuestion: 'How do Frisco contractors get more leads online?',
  aioAnswer:
    "Frisco contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack. Because Collin County keeps drawing affluent, research-heavy families and demand spikes hard during spring hail season, the contractors who look established and are already ranking before the storm win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Land in the top three businesses Google pins to the map when Frisco searches \"near me.\" The single highest-return move for most local businesses, and how you catch hail-season demand before a rival does.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your Frisco customers actually type, build an asset you own instead of renting traffic from ads, and measure the whole thing in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs, and to stay quick when hail season floods your phone, not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it so carefully that you keep every bit of ranking you have already earned in Frisco search.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Frisco?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients pair a high-converting website with SEO and local SEO so they rank, convert, and own their leads, and so they are ready when hail season hits and every homeowner needs a roof crew at once." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors, so we understand storm calls, hail-driven demand, insurance work, and the warranty repairs that come due across Frisco's new neighborhoods." },
    { q: 'Why does hail season matter for my marketing?', a: "When a major hailstorm hits Frisco, demand for roofing, restoration, and HVAC jumps overnight and the backlog can run for months. Ranking takes months to build, so the contractors already visible before the storm take that work. We get you in place ahead of spring season." },
    { q: 'How much does it cost to work with you?', a: "Frisco websites are one-time builds from $2,000 to $9,000. SEO and local SEO run month-to-month from $750 to $3,000, with no long contract holding you in. We nail down the exact scope for your shop in the free audit before you spend anything." },
    { q: 'Which Frisco areas do you serve?', a: "All of Frisco and the surrounding Collin and Denton County communities: Starwood, Stonebriar, Phillips Creek Ranch, Newman Village, plus Prosper, McKinney, Celina, Little Elm, The Colony and more." },
    { q: 'Where should I start?', a: "Start with a free Frisco audit. We look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};
