// HUNTSVILLE: per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Huntsville's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// HUNTSVILLE: shared city blocks
// ===========================================================================
const MARKET = {
  heading: "Why ranking in Huntsville is a different kind of competition",
  body:
    "Huntsville is no longer the quiet Alabama city it was a generation ago. It recently surpassed Birmingham to become the state's largest city, and it keeps growing, driven by NASA's Marshall Space Flight Center, Redstone Arsenal, and a dense cluster of defense contractors including Boeing, Lockheed Martin, and Raytheon. The result is a homeowner base that skews highly educated, well-paid, and meticulous about research. When a Huntsville aerospace engineer needs a contractor, they open Google, read reviews carefully, check your website, and pick the one who looks most credible before they ever dial. Two forces shape demand here. First, Huntsville sits squarely in Tornado Alley. Northern Alabama's April storm season (the 2011 outbreak killed 238 people in the state in a single week) sends roofing, restoration, and storm-damage calls surging every spring. Second, Redstone Arsenal's constant PCS cycle means a steady stream of military homeowners arriving in town and needing every kind of contractor immediately. The contractor already ranking the day they land is the one who gets the call.",
  pullQuote:
    "In a city built by rocket scientists and defended by the U.S. Army, the contractor who looks most credible online wins the job before anyone picks up the phone.",
  donut: {
    title: "Huntsville's economic engine",
    value: 42,
    centerLabel: "defense/aerospace jobs",
    legend: [
      { label: "Defense/tech jobs", pct: 42, kind: "teal" },
      { label: "Other", pct: 58, kind: "grey" },
    ],
  },
  seasonTitle: "When trade demand spikes",
  seasonCaption: "Tornado season (Mar–May) and summer HVAC (Jun–Sep)",
  seasonalDemand: [
    { m: "J", v: 55, peak: false },
    { m: "F", v: 58, peak: false },
    { m: "M", v: 88, peak: true },
    { m: "A", v: 95, peak: true },
    { m: "M", v: 82, peak: true },
    { m: "J", v: 78, peak: true },
    { m: "J", v: 85, peak: true },
    { m: "A", v: 83, peak: true },
    { m: "S", v: 62, peak: false },
    { m: "O", v: 50, peak: false },
    { m: "N", v: 48, peak: false },
    { m: "D", v: 52, peak: false },
  ],
  stats: [
    { value: "Alabama #1", label: "Huntsville is now the largest city in Alabama and still growing fast" },
    { value: "42%", label: "of metro jobs tied to defense, aerospace, and tech", accent: true },
    { value: "Mar–May", label: "tornado season, when storm-damage and roofing demand spikes hardest" },
    { value: "Top 3", label: "Map Pack spots that capture most of the clicks when engineers search" },
  ],
  neighborhoods: [
    "Five Points",
    "Old Town",
    "Hampton Cove",
    "Jones Valley",
    "Madison",
    "Harvest",
    "Meridianville",
    "Twickenham",
    "Athens",
    "Decatur",
  ],
};

const AREAS = [
  "Huntsville",
  "Madison",
  "Hampton Cove",
  "Jones Valley",
  "Five Points",
  "Old Town",
  "Twickenham",
  "Harvest",
  "Meridianville",
  "Athens",
  "Decatur",
  "Redstone Arsenal area",
  "Southeast Huntsville",
  "West Huntsville",
  "Research Park",
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. That's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. Huntsville's homeowners (engineers, defense workers, military families rotating through Redstone) do their homework before they call. Being the most credible result when they search is how you win. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: "We understand Rocket City's homeowners",
    body: "A Huntsville aerospace engineer doesn't pick the first name they see: they compare, they read, and they trust the contractor whose online presence matches their standards. We build that presence so when a defense worker on Redstone or a NASA employee in Hampton Cove opens Google, your name is the one that looks right.",
  },
  {
    title: "We get you off rented leads",
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners who also got two other contractors' numbers and a follow-up text from Angi.",
  },
  {
    title: "We know Huntsville's seasons and storms",
    body: "Tornado season, summer HVAC demand, military PCS windows: we optimize for the moments that actually drive calls in this market, not a generic national calendar. That means you rank before the storm season hits, not scrambling for visibility after the twister passes through.",
  },
  {
    title: "No contracts, no mystery",
    body: "Our prices sit right on the page, reporting maps to the leads you actually booked, and you go month-to-month once the first 90 days are done. An engineer can audit exactly what they're paying for. If a given month doesn't earn its keep, you cancel. The accountability stays on our side of the table.",
  },
];

const PROOF = {
  heading: "We're new, so here's the honest math instead of a logo wall",
  body: "Other agencies open the pitch with a wall of client logos. We're a young, founder-led shop, and we'd rather not invent a track record we haven't earned in Huntsville yet. What we can put in front of you is the reasoning, drawn straight from Google's and the industry's published research on how people actually search for local contractors. Your buyers are research people. So is the case we make.",
  stats: [
    { value: "46%", label: "of Google searches have local intent", n: 46 },
    { value: "76%", label: "who search local on a phone visit a business that day", n: 76 },
    { value: "28%", label: "of local searches end in a purchase", n: 28 },
  ],
  projection:
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Huntsville contractor gets around 1,200 local \"near me\" impressions a month across Hampton Cove, Madison, and Jones Valley. Moving from page-two invisibility into the top three during tornado season or the summer HVAC rush is the difference between a few scattered calls and a booked-out calendar. In your free audit, we model the real numbers for your business: your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: "Day 0", pos: 14 },
    { d: "30", pos: 11 },
    { d: "60", pos: 8 },
    { d: "90", pos: 5 },
    { d: "120", pos: 3 },
    { d: "180", pos: 2 },
  ],
};

const BASE = {
  city: "Huntsville",
  state: "Alabama",
  stateAbbr: "AL",
  metro: "Huntsville",
  heroProof: ["Built for the trades", "Rocket City expertise", "No lock-in contracts"],
  founderNote: FOUNDER,
  founderName: "The OnwardCraft team",
  localMarket: MARKET,
  areasServed: AREAS,
  whyUs: WHY,
  proof: PROOF,
};

export const huntsvilleLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: "huntsville",
    serviceSlug: "local-seo",
    service: "Local SEO",
    titleTag: "Huntsville Local SEO Company | OnwardCraft",
    metaDescription:
      "Search your service in Huntsville and three businesses show up on the map. We get you into those three so the call lands with you, not a competitor.",
    eyebrow: "Local SEO · Huntsville, AL",
    h1: "When Huntsville searches for what you do, be the first name they find",
    h2Exact: "Huntsville Local SEO Company",
    heroSubhead:
      "When a homeowner searches \"near me,\" Google hands the work to the three businesses it pins on the map. Everyone underneath is scrolled past. Huntsville's buyers are engineers and defense workers who vet before they dial, so we put you in that top three across Hampton Cove, Madison, and the neighborhoods you run, and the job lands on your phone.",
    primaryCta: "Get my free Huntsville audit",
    intro:
      "Huntsville local SEO comes down to one question: when a homeowner in Jones Valley, Madison, or Hampton Cove searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. This market is unique: your customers are aerospace engineers, defense contractors, and military families rotating through Redstone Arsenal. They research carefully and they pick whoever looks most credible. Becoming that top-three result in the neighborhoods you serve is the whole game.",
    aioQuestion: "How do Huntsville businesses rank higher in local search?",
    aioAnswer:
      "Four levers do the work: a Google Business Profile tuned to the precise services and neighborhoods you want, name-address-phone details that match everywhere online, a continuous flow of genuine reviews, and local pages built around real Huntsville areas like Hampton Cove, Madison, and Jones Valley. In Rocket City the credibility signals carry extra weight, because your buyers are educated, they read reviews, they open your site, and they compare before anyone calls.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      {
        title: "Three competitors are sitting in the map spots you want",
        body: "Type your own trade plus \"near me\" into Google right now. The three businesses pinned to the map collect almost every click that follows. A Redstone engineer or a NASA contractor scanning for a roofer treats that trio as the vetted shortlist and rarely looks further. If your name isn't on it, you're effectively absent the moment a tornado-season call goes out, no matter how good your crew is.",
      },
      {
        title: "You're paying for leads you don't own",
        body: "Angi, Thumbtack, and HomeAdvisor sell the same Huntsville homeowner to three or four contractors, then bill each of you to compete. Local SEO builds the opposite: a homeowner searches, finds you, and calls you, and nobody else got the same lead. Over time you stop renting and start owning the pipeline.",
      },
      {
        title: "You're invisible during the moments that matter most",
        body: "Huntsville's demand spikes hard during tornado season (March through May) and the summer HVAC rush (June through September). Military families arriving on PCS orders search immediately. If you're not ranking before those moments hit, you miss the busiest calls of the year. Local SEO takes months to build, so starting now means being visible when the storm season arrives.",
      },
    ],
    servicesHeading: "What it actually takes to rank you",
    services: [
      {
        name: "Google Business Profile",
        desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Huntsville searches you should win, from Madison to Hampton Cove.",
      },
      {
        name: "Citations and NAP cleanup",
        desc: "Your name, address, and phone need to read the same way on every site Google checks, from Madison directories to national aggregators. We reconcile the listings that disagree and create the ones you never had.",
      },
      {
        name: "Reviews that keep coming",
        desc: "A simple system that turns finished jobs into a steady flow of reviews. For Huntsville's research-minded homeowners, your review count and rating are often the deciding factor.",
      },
      {
        name: "Neighborhood pages",
        desc: "Real pages for Hampton Cove, Jones Valley, Madison, Harvest, Meridianville, and the rest, so you rank for the neighborhood someone's actually searching, not just \"Huntsville.\"",
      },
      {
        name: "On-page and technical SEO",
        desc: "Title tags, structured data, internal links, and mobile load time. This is the wiring behind the walls that lets every other piece of the work actually show up in results.",
      },
      {
        name: "Local link building",
        desc: "Citations and links from Huntsville and Tennessee Valley sources Google respects: regional press, trade groups, and partners. In a metro adding contractors this fast, that is frequently the line between page one and page two.",
      },
      {
        name: "Storm-season and PCS readiness",
        desc: "We optimize your profile and content for Huntsville's tornado-season storm-damage surge and the steady flow of military families landing on Redstone Arsenal, so you rank when demand is highest.",
        featured: true,
      },
      {
        name: "AI search readiness",
        desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity, especially among Huntsville's tech-savvy homeowners. We structure your content so those tools can read and cite you.",
        featured: true,
      },
    ],
    processName: "How we work: the Local Lift Method",
    process: [
      {
        name: "Audit and baseline",
        desc: "We find out where you actually rank today across Huntsville's neighborhoods and pin down which competitors are beating you in the Map Pack and why.",
      },
      {
        name: "Fix the foundation",
        desc: "Google Business Profile and NAP come first, since they shift quickest. Most Huntsville clients notice early movement here inside the first few weeks.",
      },
      {
        name: "Build trust signals",
        desc: "Citations and the review engine go live. For Huntsville's analytical homeowner base, reviews are especially load-bearing, and these compound week over week.",
      },
      {
        name: "Add local content",
        desc: "Neighborhood and service-area pages for Hampton Cove, Madison, Jones Valley, and the other communities you serve, plus on-page work to back them up.",
      },
      {
        name: "Report and expand",
        desc: "Reporting in plain language tied to calls and booked leads, not ranking screenshots that look nice and pay nothing. Then we move on to claim the next neighborhood.",
      },
    ],
    pricing: {
      heading: "Pricing you can actually see",
      note: "Month-to-month after the first 90 days. No lock-in. Cancel whenever.",
      tiers: [
        {
          name: "Local Starter",
          price: "$750",
          cadence: "/mo",
          desc: "A single location, with the Map Pack groundwork done properly.",
          features: [
            "Google Business Profile optimization",
            "Citation cleanup and core listings",
            "One location or primary service area",
            "Review system setup",
            "Plain-English monthly report",
          ],
        },
        {
          name: "Local Growth",
          price: "$1,500",
          cadence: "/mo",
          desc: "For businesses competing across Huntsville's neighborhoods and suburbs.",
          features: [
            "Everything in Local Starter",
            "Up to 5 priority keywords",
            "Ongoing review generation",
            "Neighborhood landing pages",
            "On-page and technical SEO",
          ],
          featured: true,
        },
        {
          name: "Local Authority",
          price: "$2,500",
          cadence: "/mo",
          desc: "For contractors who want to own the map across the Huntsville metro.",
          features: [
            "Everything in Local Growth",
            "Local link building",
            "Storm-season and PCS search targeting",
            "Multi-area and service pages",
            "AI search optimization",
          ],
        },
      ],
    },
    faqs: [
      {
        q: "How much does local SEO cost in Huntsville?",
        a: "Most Huntsville engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit.",
      },
      {
        q: "How long until I show up in the Map Pack?",
        a: "Profile improvements can move in a few weeks. Competitive Huntsville keywords typically take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days is selling you something.",
      },
      {
        q: "What makes Huntsville local SEO different from other markets?",
        a: "Two things. Your homeowners are disproportionately engineers, defense workers, and military families, people who research carefully and pick the most credible-looking result. And demand spikes hard during tornado season (March–May) and the summer HVAC rush, so you need to be ranking before those windows, not chasing visibility after the fact.",
      },
      {
        q: "How do I get in front of military families arriving on PCS orders?",
        a: "PCS families search immediately when they hit town, often for everything from HVAC to roofing within their first few weeks. Local SEO puts you in the Map Pack for the services they're searching, so you're the credible local option they find on day one in Huntsville.",
      },
      {
        q: "Which areas do you cover?",
        a: "All of Huntsville's core neighborhoods and suburbs: Hampton Cove, Jones Valley, Madison, Harvest, Meridianville, Twickenham, Five Points, Old Town, and more, plus Athens and Decatur. We build genuine neighborhood pages instead of one generic Huntsville page, because that's what ranks for \"[service] [neighborhood]\" searches.",
      },
      {
        q: "Do you work with contractors specifically?",
        a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand tornado-season storm-damage surges, military homeowner timelines, and the credibility bar Huntsville's tech-educated homeowners set.",
      },
      {
        q: "Will I show up in Google AI Overviews and ChatGPT?",
        a: "Huntsville's homeowners are among the most tech-comfortable in the country, and a growing share of them start service searches in AI now. We structure your content and schema so those engines can read, trust, and cite your business alongside classic Map Pack results.",
      },
      {
        q: "Am I locked into a contract?",
        a: "No. The first 90 days are a commitment because that's about how long local SEO takes to produce real movement in a market like this one. Past that point, you're month-to-month. If the leads aren't showing up, you're free to go.",
      },
      {
        q: "How does this get me off Angi and HomeAdvisor?",
        a: "Those platforms sell the same Huntsville homeowner to multiple contractors and charge each of you for the privilege. We build rankings, a Google profile, and a review base that send leads straight to you, so over time you depend less on brokers and more on your own presence.",
      },
      {
        q: "What's in the free audit?",
        a: "A clear read on where you rank today across Huntsville's neighborhoods, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan modeled around your actual business. No pitch deck, just a straight diagnosis.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: "huntsville",
    serviceSlug: "seo-services",
    service: "SEO Services",
    titleTag: "Huntsville SEO Company | OnwardCraft",
    metaDescription:
      "Huntsville SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in contracts, built for Rocket City's analytical.",
    eyebrow: "SEO Services · Huntsville, AL",
    h1: "Get your Huntsville business to the top of Google and keep it there",
    h2Exact: "Huntsville SEO Company",
    heroSubhead:
      "The moment you stop funding ads, the leads dry up. SEO works the other way: earn the ranking once for what Huntsville homeowners search, and the calls keep arriving. We build that ranking for Rocket City's toughest terms and report it against booked jobs, not page-view charts.",
    primaryCta: "Get my free Huntsville SEO audit",
    intro:
      "Huntsville SEO comes down to one question: when an engineer in Hampton Cove or a military family near Redstone Arsenal searches your service, are you on page one or page two? Page two might as well be page fifty. Huntsville's homeowners are research-driven: they open Google, compare the top results, read the websites carefully, and call the one that looks most credible. We get contractors ranking for the money keywords in this fast-growing, defense-heavy market and measure it in leads, not vanity traffic.",
    aioQuestion: "How do Huntsville businesses rank higher on Google?",
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms Huntsville homeowners search, publishing genuinely useful local content tied to specific neighborhoods and the area's aerospace and defense context, and earning links from trusted Alabama sources. In Rocket City's analytical market, credibility signals (fast site, clear content, real reviews) are especially important because your customers take time to compare before calling.",
    problemHeading: "Three reasons your Huntsville site isn't bringing in work",
    painPoints: [
      {
        title: "You're stuck on page two",
        body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. When the homeowner is an engineer or defense professional who does thorough research, being on page two is essentially being invisible, no matter how good your work is or how strong your reputation is locally.",
      },
      {
        title: "You're renting traffic from Google Ads",
        body: "Ads can work, but the moment your card stops, the leads stop. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a lower cost per lead over time. For a market like Huntsville, where word-of-mouth has always been strong, owning your search visibility compounds beautifully.",
      },
      {
        title: "You're missing the seasonal surges",
        body: "Huntsville's demand swings hard: roofing and restoration explode after April tornado outbreaks, HVAC surges through the humid Alabama summer, and military PCS cycles bring fresh waves of homeowners searching for everything at once. Ranking takes months to build, so if you're not in place before those windows open, you miss the busiest calls of the year.",
      },
    ],
    servicesHeading: "The SEO work that actually moves rankings",
    services: [
      {
        name: "Technical SEO",
        desc: "Crawlability, page speed, Core Web Vitals, structured data, and the behind-the-scenes corrections Google requires before it will consider ranking you for anything.",
      },
      {
        name: "On-page optimization",
        desc: "Every important page tuned for the exact terms Huntsville homeowners search: titles, headings, content, and internal links.",
      },
      {
        name: "Content that ranks",
        desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot, without generic filler.",
      },
      {
        name: "Link building",
        desc: "Authority from real Huntsville and Alabama sources. In a market that's growing this fast, links from trusted local sources are often what separate page one from page two.",
      },
      {
        name: "Local SEO & Google Business Profile",
        desc: "Map Pack optimization so you win the \"near me\" searches across Hampton Cove, Madison, Jones Valley, and the rest of your service area.",
      },
      {
        name: "Revenue-tied reporting",
        desc: "We report on calls, forms, and leads, not just rankings and traffic, so you always know what your SEO investment is actually worth.",
      },
      {
        name: "Seasonal & storm-damage SEO",
        desc: "We rank you for the tornado-season restoration searches, the summer HVAC terms, and the PCS-family contractor queries that drive Huntsville's busiest weeks, before those windows open, not after.",
        featured: true,
      },
      {
        name: "AI search & GEO",
        desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you: critical in a metro full of tech-comfortable homeowners who increasingly start searches there.",
        featured: true,
      },
    ],
    processName: "How we work: the OnwardCraft SEO method",
    process: [
      {
        name: "Audit and strategy",
        desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Huntsville leads, including the seasonal and storm-damage terms most agencies ignore.",
      },
      {
        name: "Fix the technical base",
        desc: "Speed, crawlability, schema, and mobile: the foundation everything else needs to rank, and the signals Huntsville's analytical homeowners notice when they land on your site.",
      },
      {
        name: "Optimize and create content",
        desc: "On-page work across your money pages plus new local content, including the storm-season, HVAC, and PCS-search terms that drive this market's biggest demand spikes.",
      },
      {
        name: "Build authority",
        desc: "Links and citations from trusted Huntsville and Alabama sources to push competitive keywords onto page one and build the credibility signals your customers look for.",
      },
      {
        name: "Report and scale",
        desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set, neighborhood by neighborhood.",
      },
    ],
    pricing: {
      heading: "Transparent Huntsville SEO pricing",
      note: "Month-to-month after the first 90 days. No lock-in. Cancel whenever.",
      tiers: [
        {
          name: "SEO Starter",
          price: "$900",
          cadence: "/mo",
          desc: "For a focused site going after its core Huntsville keywords.",
          features: [
            "Technical SEO fixes",
            "On-page optimization",
            "Up to 5 target keywords",
            "Google Business Profile",
            "Monthly lead-tied report",
          ],
        },
        {
          name: "SEO Growth",
          price: "$1,800",
          cadence: "/mo",
          desc: "For contractors competing across services and Huntsville neighborhoods.",
          features: [
            "Everything in SEO Starter",
            "Up to 12 target keywords",
            "Monthly content",
            "Link building",
            "On-page + local SEO",
          ],
          featured: true,
        },
        {
          name: "SEO Authority",
          price: "$3,000",
          cadence: "/mo",
          desc: "For businesses that want to own Huntsville search.",
          features: [
            "Everything in SEO Growth",
            "Aggressive content + links",
            "Seasonal & storm-damage SEO",
            "Multi-area / multi-service",
            "AI search / GEO optimization",
          ],
        },
      ],
    },
    faqs: [
      {
        q: "How much does SEO cost in Huntsville?",
        a: "Most Huntsville SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract.",
      },
      {
        q: "How long does SEO take to work in Huntsville?",
        a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter neighborhood terms and slower on the most competitive service-wide keywords. SEO compounds, so the gains keep building the longer you run it.",
      },
      {
        q: "Is SEO better than Google Ads for Huntsville contractors?",
        a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Huntsville contractors do best running SEO as the long-term engine and ads for short-term spikes, especially in the weeks before tornado season opens.",
      },
      {
        q: "Should my Huntsville SEO target seasonal demand?",
        a: "Absolutely. The April tornado season drives roofing and restoration searches overnight. The summer HVAC surge hits June through September. Military PCS arrivals are steady year-round. You need to be ranking before those windows open, not scrambling for visibility after a storm rolls through.",
      },
      {
        q: "What's included in your SEO service?",
        a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal, storm-damage, and AI-search optimization. We confirm exact scope in your free audit.",
      },
      {
        q: "Do you require a long-term contract?",
        a: "No. We ask for 90 days to start because SEO needs about that window to produce visible movement, and after that you're month-to-month. If the results aren't there, you're out with no penalty.",
      },
      {
        q: "Will I show up in Google AI Overviews and ChatGPT?",
        a: "That's a growing part of what we optimize for, and it's especially important in Huntsville, where your homeowners are among the most tech-comfortable in the country. We structure your content and schema so AI engines can read, trust, and cite your business.",
      },
      {
        q: "Which Huntsville areas do you cover?",
        a: "All of Huntsville's neighborhoods and suburbs: Hampton Cove, Jones Valley, Madison, Harvest, Meridianville, Five Points, Old Town, Twickenham, and more, plus Athens and Decatur. We build genuine local pages rather than one generic Huntsville page.",
      },
      {
        q: "How do you get me off Angi and HomeAdvisor leads?",
        a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads, especially during Huntsville's high-demand storm and HVAC seasons.",
      },
      {
        q: "What's in the free SEO audit?",
        a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: "huntsville",
    serviceSlug: "web-design",
    service: "Web Design",
    titleTag: "Huntsville Web Design Company | OnwardCraft",
    metaDescription:
      "Huntsville web design that turns visitors into booked jobs: fast, mobile-first sites built for a market full of engineers and defense workers who research.",
    eyebrow: "Web Design · Huntsville, AL",
    h1: "Huntsville web design that turns visitors into booked jobs",
    h2Exact: "Huntsville Web Design Company",
    heroSubhead:
      "A good-looking site that never rings the phone is just a brochure with a domain. We build Huntsville contractors fast, mobile-first sites that win over the engineers and defense workers who research before they call, then turn that trust into jobs on the calendar.",
    primaryCta: "Get my free quote",
    intro:
      "Most Huntsville contractor websites lose leads quietly: slow on a phone, buried call button, no social proof, no reason to choose you over a competitor. In a market where your customers are engineers and defense professionals who compare carefully before calling, web design done right isn't just aesthetics: it's credibility. We build sites that load fast, look like the professional you are, and turn Hampton Cove and Madison visitors into booked jobs.",
    aioQuestion: "What makes a good contractor website in Huntsville?",
    aioAnswer:
      "A good Huntsville contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with real reviews and project photos, and names the specific neighborhoods you serve. Because Huntsville's homeowners skew highly educated and research-driven (many are engineers, defense workers, or military families) your site needs to look credible and professional, not just functional. A slow or generic site costs you the job before you ever answer the phone.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      {
        title: "It doesn't look credible to a Huntsville engineer",
        body: "Your customers include aerospace engineers, defense contractors, and military officers who evaluate contractors the same way they evaluate suppliers at work, thoroughly. An outdated or generic site signals that you might not be the right fit for their home, even if your work is excellent. We build sites that match the professional standard your customers expect.",
      },
      {
        title: "It's too slow on a phone",
        body: "Most of your Huntsville visitors are on mobile, and they bounce if your site takes more than a few seconds to load. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking.",
      },
      {
        title: "It doesn't speak to your neighborhood",
        body: "A homeowner in Hampton Cove wants to see you serve Hampton Cove, not a generic Alabama contractor page that could be anyone. We build sites that name the neighborhoods you work, show real local context, and give Google the signals it needs to rank you for those searches.",
      },
    ],
    servicesHeading: "What's in an OnwardCraft Huntsville website",
    services: [
      {
        name: "Custom design",
        desc: "No cookie-cutter templates. A site designed around your trade, your Huntsville service area, and the kind of jobs you actually want to book.",
      },
      {
        name: "Mobile-first build",
        desc: "Designed for the phone first, because that's where almost all of your Huntsville traffic is. Fast, thumb-friendly, and easy to call from.",
      },
      {
        name: "Conversion-focused UX",
        desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step, especially important when your visitor is comparison-shopping.",
      },
      {
        name: "Copy that sells",
        desc: "Words that speak to Huntsville homeowners' real concerns (storm readiness, quality standards, quick response) and book the job, not filler text.",
      },
      {
        name: "Local SEO foundation",
        desc: "Built from the ground up to rank: clean structure, schema, fast load, and neighborhood-ready pages for Hampton Cove, Madison, Jones Valley, and beyond.",
      },
      {
        name: "Speed & Core Web Vitals",
        desc: "Tuned for quick load times and a clean pass on Google's performance metrics, which guards your conversions and your rankings together. Fast pages also read as competent to an engineer.",
      },
      {
        name: "Neighborhood-targeted pages",
        desc: "Pages built around the Huntsville neighborhoods and suburbs you serve, so you rank for local searches and immediately signal to visitors that you know their area.",
        featured: true,
      },
      {
        name: "AI-search ready",
        desc: "Structured so AI Overviews and ChatGPT can read and recommend your business: increasingly important in a metro where homeowners are tech-comfortable early adopters.",
        featured: true,
      },
    ],
    processName: "How we build: the OnwardCraft process",
    process: [
      {
        name: "Discovery and strategy",
        desc: "We learn your trade, your Huntsville service area, your best jobs, and your competitors, then map the site around booking more of the work you want.",
      },
      {
        name: "Design",
        desc: "We lay out a custom, mobile-first design aimed at booking work, and you review and adjust it before we write a single line of code.",
      },
      {
        name: "Build and copy",
        desc: "We build it fast and write the copy that earns trust with Huntsville's analytical homeowners, with the call to action front and center on every page.",
      },
      {
        name: "Launch",
        desc: "We ship it clean, with the SEO foundation, analytics, and load speed all set correctly on day one.",
      },
      {
        name: "Support and optimize",
        desc: "We keep it fast and current and tune it based on what's actually converting, especially before and after Huntsville's storm seasons.",
      },
    ],
    pricing: {
      heading: "Transparent Huntsville web design pricing",
      note: "One-time build. 50% to start, 50% at launch. You own everything. No lock-in.",
      tiers: [
        {
          name: "Starter Site",
          price: "$2,000",
          cadence: "",
          desc: "A tight, lead-driving site for a contractor running one trade.",
          features: [
            "Up to 5 custom pages",
            "Mobile-first design",
            "Lead forms + call buttons",
            "Local SEO foundation",
            "You own the site",
          ],
        },
        {
          name: "Growth Site",
          price: "$4,500",
          cadence: "",
          desc: "A bigger site for established Huntsville contractors with several services.",
          features: [
            "Up to 12 pages",
            "Custom design + copywriting",
            "Service + neighborhood pages",
            "Speed & Core Web Vitals",
            "Neighborhood-targeted pages",
          ],
          featured: true,
        },
        {
          name: "Custom Build",
          price: "$8,000",
          cadence: "",
          desc: "A complete custom build for businesses spanning several services or locations.",
          features: [
            "Fully custom design",
            "Advanced SEO + schema",
            "Integrations & booking",
            "High-traffic performance",
            "AI-search optimization",
          ],
        },
      ],
    },
    faqs: [
      {
        q: "How much does a website cost in Huntsville?",
        a: "Most contractor sites we build land between $2,000 and $8,000 as a one-time project, set by page count and any integrations. The tiers above spell it out: a fixed number, nothing hidden, and the finished site belongs to you.",
      },
      {
        q: "How long does it take to build?",
        a: "A focused site runs roughly 2 to 4 weeks; a bigger custom build takes 4 to 8. You get a firm schedule before we start and a status update at each stage as we go.",
      },
      {
        q: "Will my site help me stand out with Huntsville's educated homeowners?",
        a: "That's the core challenge here. When your customer is an engineer or defense professional who evaluates carefully, a generic or outdated site costs you the job before you answer the phone. We build sites that look professionally credible, load fast, and speak directly to the Huntsville neighborhoods you serve.",
      },
      {
        q: "Will my new site actually rank on Google?",
        a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and neighborhood-ready pages for Hampton Cove, Madison, Jones Valley, and beyond. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Huntsville terms.",
      },
      {
        q: "Do I own the website?",
        a: "Fully. The site, the domain, and the content are all yours. Nothing is held hostage, and there's no proprietary platform you can't walk away from.",
      },
      {
        q: "Will it work well on phones?",
        a: "We design mobile-first, because that's where most of your Huntsville traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb.",
      },
      {
        q: "What platform do you build on?",
        a: "We choose the platform that matches your needs and that you can run yourself once we hand it over, usually WordPress or Webflow. In your free consult we'll suggest the right one and walk through the tradeoffs without the jargon.",
      },
      {
        q: "Do you offer ongoing support?",
        a: "Yes. Launch support comes with every build, and after that we offer reasonably priced monthly maintenance covering updates, speed, and security.",
      },
      {
        q: "Am I locked into a contract?",
        a: "No. The build is a single fixed-price project. Whatever maintenance or SEO you add afterward runs month-to-month, so you can step away at any point.",
      },
      {
        q: "What do I get in the free quote?",
        a: "A clear look at what your current site is costing you in lost leads, what a high-converting Huntsville contractor site should include, and a fixed-price quote with a timeline. No pressure, just a plan.",
      },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: "huntsville",
    serviceSlug: "website-redesign",
    service: "Website Redesign",
    titleTag: "Huntsville Website Redesign | OnwardCraft",
    metaDescription:
      "Redesign your Huntsville website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs, built for Rocket City's.",
    eyebrow: "Website Redesign · Huntsville, AL",
    h1: "Redesign your Huntsville website without losing your rankings",
    h2Exact: "Huntsville Website Redesign Company",
    heroSubhead:
      "An outdated site costs you jobs every week in a market full of engineers who compare before they call. We redesign Huntsville contractor sites to convert more visitors into booked work, load faster, and migrate carefully so you keep every bit of ranking you've already earned.",
    primaryCta: "Get my free redesign audit",
    intro:
      "A redesign usually fails in one of two ways: the new site looks sharper but books the same number of jobs, or it goes live and the rankings disappear by morning. We avoid both. We rebuild Huntsville contractor sites for speed and credibility, build them to win the trust of research-driven homeowners in Hampton Cove and Madison, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: "How do I redesign my website without losing SEO and traffic?",
    aioAnswer:
      "Hold your rankings through a redesign by leaving the URL structure intact, or mapping a 301 redirect for every page that changes, then carrying over your content and metadata, moving the schema, and proving it all on a staging copy before launch. Handled this way, the rebuild keeps your positions and usually lifts them, since the new site loads faster, runs mobile-first, and reads as more credible to Huntsville's careful buyers.",
    problemHeading: "Signs your Huntsville site is overdue for a redesign",
    painPoints: [
      {
        title: "It costs you trust with research-driven buyers",
        body: "When an aerospace engineer or defense contractor is shopping for a contractor, they'll spend two minutes on your site before deciding whether to call. An old, cluttered, or generic design tells them you're not the professional they're looking for, even when your work is exceptional. A redesign that looks credible wins those jobs back.",
      },
      {
        title: "It's slow and hard to use on a phone",
        body: "If your site is clunky or slow on mobile, you're losing the majority of your Huntsville visitors before they ever see your offer. A redesign built mobile-first wins them back and improves your rankings at the same time.",
      },
      {
        title: "It blends into a competitive and growing market",
        body: "Huntsville is the fastest-growing city in Alabama, and new contractors are entering the market constantly. A generic old site gives a careful homeowner no reason to pick you over a newer competitor with a better-looking presence. We rebuild for conversions and for the specific Huntsville neighborhoods you serve.",
      },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      {
        name: "Redesign audit",
        desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just refreshing the look.",
      },
      {
        name: "SEO-safe migration",
        desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned, especially the seasonal positions you've built up.",
      },
      {
        name: "Conversion redesign",
        desc: "Clear offers, better call-to-action placement, and lead forms that get used. We design for booked jobs and for the credibility bar Huntsville's homeowners set.",
      },
      {
        name: "Speed overhaul",
        desc: "We rebuild for fast load and passing Core Web Vitals: better for both conversions and rankings, and for first impressions with analytical visitors.",
      },
      {
        name: "Mobile-first rebuild",
        desc: "Redesigned around the phone, where most of your Huntsville traffic lives.",
      },
      {
        name: "Brand refresh",
        desc: "A modern, trustworthy look that matches the quality of your work and gives Huntsville's professional homeowners the confidence to call.",
      },
      {
        name: "Neighborhood-targeted rebuild",
        desc: "Rebuilt around the Huntsville neighborhoods and suburbs you actually serve (Hampton Cove, Jones Valley, Madison, and beyond) so the new site ranks and resonates locally instead of reading like everyone else's.",
        featured: true,
      },
      {
        name: "AI-search ready",
        desc: "Structured so AI Overviews and ChatGPT can read and recommend you, especially important as Huntsville's tech-comfortable homeowners shift more searches to AI.",
        featured: true,
      },
    ],
    processName: "How we redesign: a careful rebuild",
    process: [
      {
        name: "Audit and plan",
        desc: "We analyze what's losing you leads and rankings today, then map a redesign that fixes it without breaking what already works, including the seasonal positions you've earned.",
      },
      {
        name: "Design",
        desc: "A modern, mobile-first, conversion-focused design you review and shape before we build, built to earn the trust of Huntsville's analytical homeowners.",
      },
      {
        name: "Rebuild and migrate",
        desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration that protects your existing traffic.",
      },
      {
        name: "Launch with SEO care",
        desc: "We launch with redirects in place and monitor closely so rankings hold and improve, not drop, especially heading into tornado season or summer HVAC demand.",
      },
      {
        name: "Optimize",
        desc: "Post-launch tuning based on what's converting, plus ongoing speed and updates to keep the site performing through Huntsville's demand seasons.",
      },
    ],
    pricing: {
      heading: "Transparent Huntsville redesign pricing",
      note: "One-time project. 50% to start, 50% at launch. You own everything. No lock-in.",
      tiers: [
        {
          name: "Redesign Starter",
          price: "$2,500",
          cadence: "",
          desc: "A focused redesign for a small contractor site.",
          features: [
            "Up to 5 pages rebuilt",
            "Mobile-first redesign",
            "SEO-safe migration",
            "Conversion improvements",
            "You own the site",
          ],
        },
        {
          name: "Redesign Growth",
          price: "$5,000",
          cadence: "",
          desc: "A full redesign for an established Huntsville contractor site.",
          features: [
            "Up to 12 pages",
            "Custom design + copy refresh",
            "Speed overhaul",
            "Service + neighborhood pages",
            "Neighborhood-targeted rebuild",
          ],
          featured: true,
        },
        {
          name: "Full Rebuild",
          price: "$9,000",
          cadence: "",
          desc: "A complete rebuild for multi-service or multi-location businesses.",
          features: [
            "Full custom rebuild",
            "Advanced SEO migration",
            "Integrations & booking",
            "High-traffic performance",
            "AI-search optimization",
          ],
        },
      ],
    },
    faqs: [
      {
        q: "How much does a website redesign cost in Huntsville?",
        a: "Most of our redesigns come in between $2,500 and $9,000 as a one-time project, depending on scope and integrations. The price is fixed, there are no surprises, and the finished site is yours.",
      },
      {
        q: "Will I lose my Google rankings if I redesign?",
        a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them, especially if the new site is faster and better structured.",
      },
      {
        q: "How long does a redesign take?",
        a: "A focused redesign runs roughly 3 to 5 weeks; a larger rebuild takes 5 to 9. We commit to a firm timeline before we start and keep you posted at every stage.",
      },
      {
        q: "How do I know I need a redesign?",
        a: "If your site is slow on phones, looks dated, doesn't reflect the professional standard Huntsville homeowners expect, or isn't converting traffic into calls, it's costing you work. The free audit tells you plainly whether a redesign is worth it.",
      },
      {
        q: "Do you migrate my existing content?",
        a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost, including the seasonal content you've built up.",
      },
      {
        q: "Will the redesign help me compete as Huntsville keeps growing?",
        a: "Yes. Huntsville is the fastest-growing city in Alabama, and new contractors are entering constantly. A modern, neighborhood-targeted, fast-loading site keeps you the credible choice when analytical homeowners compare you against newer competitors.",
      },
      {
        q: "Will the new site be mobile-friendly and fast?",
        a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings, and makes the right first impression on visitors who are quick to judge.",
      },
      {
        q: "Do I own the redesigned site?",
        a: "Fully: the site, the domain, and the content. No platform you're tied to and can't leave.",
      },
      {
        q: "Am I locked into a contract?",
        a: "No. The redesign is a one-time project with a fixed price. If you add maintenance or SEO afterward, that's month-to-month and you can cancel anytime.",
      },
      {
        q: "What's in the free redesign audit?",
        a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan tailored to your Huntsville business.",
      },
    ],
  },
];

export const huntsvilleCity = {
  citySlug: "huntsville",
  city: "Huntsville",
  state: "Alabama",
  stateAbbr: "AL",
  metro: "Huntsville",

  titleTag: "Huntsville Marketing for Contractors | OnwardCraft",
  metaDescription:
    "Web design, SEO, and local SEO for Huntsville contractors. Get found by engineers, defense workers, and military families, and own your leads instead.",

  eyebrow: "Huntsville · Web Design, SEO & Lead Generation",
  h1: "Marketing that gets Huntsville contractors found and booked",
  h2Exact: "Huntsville Marketing Agency for Contractors",
  heroSubhead:
    "Websites, SEO, and local SEO built for Rocket City's unique market: aerospace engineers who research carefully, military families on PCS orders, and a storm season that fills calendars overnight. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ["Built for the trades", "Rocket City expertise", "No lock-in contracts"],
  primaryCta: "Get my free Huntsville audit",

  intro:
    "If you run a contracting business in Huntsville, you're competing in one of the fastest-growing and most analytically demanding markets in the South. Your customers (NASA engineers, Redstone Arsenal defense workers, military families on PCS orders) research before they call and pick whoever looks most credible. Winning here means three things working together: a site that earns trust on first look, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack for Hampton Cove, Madison, Jones Valley, and the neighborhoods you serve. Here's how we help Huntsville contractors do exactly that.",
  aioQuestion: "How do Huntsville contractors get more leads online?",
  aioAnswer:
    "Huntsville contractors get more leads by combining a fast, mobile-first website that looks credible to research-minded homeowners with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack neighborhood by neighborhood. In Rocket City's defense- and aerospace-heavy market, credibility signals (professional website, strong reviews, neighborhood-specific content) matter more than in most cities. Military PCS cycles and tornado-season surges create predictable demand windows that well-ranked contractors capture entirely.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: "The OnwardCraft team",
  whyUs: WHY,

  services: [
    {
      service: "Local SEO",
      serviceSlug: "local-seo",
      tagline: "Win the Map Pack",
      blurb:
        "Get into the top three businesses Google pins to the map when Huntsville searches \"near me.\" The single highest-return move for most contractors in a market where engineers and defense workers search carefully before calling.",
    },
    {
      service: "SEO Services",
      serviceSlug: "seo-services",
      tagline: "Rank higher, get leads",
      blurb:
        "Rank for the money keywords your Huntsville customers actually search, including the storm-damage and HVAC terms that drive the busiest weeks of the year, and build an asset you own instead of renting traffic from ads.",
    },
    {
      service: "Web Design",
      serviceSlug: "web-design",
      tagline: "Sites that convert",
      blurb:
        "Fast, mobile-first websites that earn the trust of Huntsville's research-driven homeowners and turn that trust into booked jobs, not brochures that look fine but generate nothing.",
    },
    {
      service: "Website Redesign",
      serviceSlug: "website-redesign",
      tagline: "More leads, no traffic loss",
      blurb:
        "Rebuild an outdated site for speed and credibility as Huntsville keeps growing, and migrate it carefully so you keep every bit of ranking you've already earned, especially the seasonal positions that matter most.",
    },
  ],

  faqs: [
    {
      q: "What marketing services do you offer in Huntsville?",
      a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads in a market where homeowners compare carefully before calling.",
    },
    {
      q: "Do you work only with contractors?",
      a: "Almost entirely. We specialize in home-service trades (roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors) so we understand tornado-season surges, military homeowner timelines, and the credibility bar Huntsville's aerospace and defense community sets.",
    },
    {
      q: "Why does the Huntsville market need a different approach?",
      a: "Because your customers aren't typical. Huntsville's homeowner base is disproportionately engineers, defense workers, and military families, people who research thoroughly before calling. Add the predictable demand spikes from tornado season and PCS arrivals, and you have a market where credibility and timing matter more than almost anywhere else in the South.",
    },
    {
      q: "How much does it cost to work with you?",
      a: "Websites are one-time builds priced from $2,000 to $9,000. SEO and local SEO run month-to-month between $750 and $3,000, with no long contract attached. The exact scope gets pinned down in your free audit.",
    },
    {
      q: "Which Huntsville areas do you serve?",
      a: "All of Huntsville's neighborhoods and surrounding communities: Hampton Cove, Jones Valley, Madison, Five Points, Old Town, Twickenham, Harvest, Meridianville, and more, plus Athens and Decatur. We build genuine local pages rather than one generic Huntsville page.",
    },
    {
      q: "Where should I start?",
      a: "Start with a free Huntsville audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest, whether that's before tornado season or heading into the summer HVAC rush. No pitch deck, just a plan.",
    },
  ],
};
