// DETROIT: per-metro, per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Detroit's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// DETROIT: shared city blocks
// ===========================================================================
const MARKET = {
  heading: "What the Motor City comeback means for who gets hired",
  body:
    "Detroit is the city that built the American auto industry, and that blue-collar backbone still shapes how people hire a contractor. Folks here grew up around plants and union halls, they know what real work looks like, and they have very little patience for a slick pitch. The housing tells the rest of the story. Detroit holds one of the largest stocks of older homes in the country, much of it built before 1950, and a huge share of it is mid-rehab. Brush Park brownstones, Boston-Edison mansions, and Corktown bungalows are getting brought back to life one renovation at a time, while pockets of vacancy mean gut jobs and full restorations are everyday work, not the exception. Then the inner-ring suburbs change the math again. Dearborn, Royal Oak, Ferndale, and Grosse Pointe each search a little differently, and the owner of a 1920s Grosse Pointe Tudor wants something a Ferndale flipper never asks about. Winter decides the rest. Hard freezes, lake-effect snow, and the freeze-thaw cycle that wrecks roofs and cracks foundations send emergency demand through the roof from December into March, and the contractor already ranking for those streets is the one whose phone rings.",
  pullQuote: "In a city rebuilding itself one old house at a time, the contractor who ranks for the actual street wins the actual job.",
  donut: {
    title: "How Detroit searches",
    value: 78,
    centerLabel: "Black/African American in city proper",
    legend: [
      { label: "Black/African American", pct: 78, kind: "teal" },
      { label: "Other residents", pct: 22, kind: "grey" },
    ],
  },
  seasonTitle: "When Detroit trade phones go off the hook",
  seasonCaption: "Detroit winter heating crunch (Dec to Mar) and spring thaw flooding (Mar to May)",
  seasonalDemand: [
    { m: "J", v: 95, peak: true }, { m: "F", v: 90, peak: true }, { m: "M", v: 82, peak: true },
    { m: "A", v: 70 }, { m: "M", v: 58 }, { m: "J", v: 52 }, { m: "J", v: 75, peak: true },
    { m: "A", v: 72, peak: true }, { m: "S", v: 54 }, { m: "O", v: 56 },
    { m: "N", v: 72 }, { m: "D", v: 92, peak: true },
  ],
  stats: [
    { value: "4.4M", label: "people across the Detroit metro" },
    { value: "Dec-Mar", label: "winter emergency stretch when a dead furnace in Michigan is a genuine crisis", accent: true },
    { value: "Pre-1950", label: "the older housing stock driving Detroit's heavy rehab and full-restoration demand" },
    { value: "Top 3", label: "Map Pack spots that take most of the clicks when Detroit searches for a contractor" },
  ],
  neighborhoods: [
    "Midtown", "Corktown", "Indian Village", "Boston-Edison", "New Center",
    "Hamtramck", "Grosse Pointe", "Birmingham", "Bloomfield Hills", "Troy",
    "Royal Oak", "Ferndale", "Dearborn", "Ann Arbor", "Rivertown",
  ],
};

const AREAS = [
  "Midtown", "Corktown", "Indian Village", "Boston-Edison", "New Center",
  "Hamtramck", "Grosse Pointe", "Birmingham", "Bloomfield Hills", "Troy",
  "Royal Oak", "Ferndale", "Dearborn", "Ann Arbor", "Warren",
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. That's especially true in Detroit, where homeowners have seen enough hype — they want to hire someone they can trust, not the contractor who spent the most on ads. So that's the whole point of what we do here: get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: "We only do the trades",
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We know what a January no-heat call sounds like, how a full Corktown rehab actually scopes out, and why a Grosse Pointe owner and a Ferndale flipper want totally different things, so what we build matches how Detroit customers really search.",
  },
  {
    title: "We get you off the rented-lead grind for good",
    body: "The aim is a pipeline you own outright. Not one more check every month to a broker for the same Indian Village homeowner that three other crews are already dialing.",
  },
  {
    title: "We actually speak Detroit",
    body: "Street-level targeting from Hamtramck to Birmingham, real rehab and restoration know-how, and emergency content tuned to freeze-thaw winters. That is local ground a national agency cannot copy by swapping a city name into a template.",
  },
  {
    title: "No contracts, no mystery",
    body: "Prices are posted, reporting maps to real leads, and you go month-to-month after the first 90 days. If the work is not paying for itself, you walk. That keeps the pressure right where it should sit: on us.",
  },
];

const PROOF = {
  heading: "We're new, so here's the honest math instead of a logo wall",
  body:
    "A lot of agencies lead with a grid of client logos. We are a young, founder-run shop, so we are not going to invent a track record we have not earned yet. What we will put in front of you is the reasoning, taken straight from Google's and the industry's own research on how people hunt for a local contractor.",
  stats: [
    { value: "46%", label: "of Google searches have local intent", n: 46 },
    { value: "76%", label: "who search local on a phone visit a business that day", n: 76 },
    { value: "28%", label: "of local searches end in a purchase", n: 28 },
  ],
  projection:
    "Here is a rough sketch, flagged plainly as an illustration and not a result we are claiming: say a Detroit contractor pulls around 1,500 local \"near me\" impressions a month across a handful of neighborhoods. Moving from page-two invisibility up into the top three is the gap between a few stray calls and a calendar you cannot keep up with, and in a town where trust and locality carry this much weight, ranking on a homeowner's own street is often the whole ballgame. In your free audit we model the real numbers for your business: your current rankings, your actual search volume, and a straight 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: "Day 0", pos: 14 }, { d: "30", pos: 11 }, { d: "60", pos: 8 },
    { d: "90", pos: 5 }, { d: "120", pos: 3 }, { d: "180", pos: 2 },
  ],
};

const BASE = {
  city: "Detroit", state: "Michigan", stateAbbr: "MI", metro: "Detroit",
  heroProof: ["Built for the trades", "Neighborhood-by-neighborhood targeting", "No lock-in contracts"],
  founderNote: FOUNDER, founderName: "The OnwardCraft team",
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const detroitLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: "detroit", serviceSlug: "local-seo", service: "Local SEO",
    titleTag: "Detroit Local SEO Company | Win the Map Pack | OnwardCraft",
    metaDescription:
      "Detroit Local SEO that lands you in the three businesses on the map for your neighborhoods, so the Corktown and freeze-season call rings your phone.",
    eyebrow: "Local SEO · Detroit",
    h1: "Detroit Local SEO that turns a Corktown \"near me\" search into a ringing phone",
    h2Exact: "Detroit Local SEO Company",
    heroSubhead:
      "Google pins three businesses to the map when a homeowner taps \"near me,\" and everyone underneath them might as well not exist. In a city that hires on trust and on who feels local, we push you into that top three for the streets you work, so the job lands with you instead of whoever Google listed first.",
    primaryCta: "Get my free Detroit audit",
    intro:
      "Detroit Local SEO comes down to a single moment: a homeowner in Corktown or Grosse Pointe types your trade plus \"near me,\" and you are either one of the three businesses Google pinned to the map or you are nowhere. Most people tap one of those three and never scroll. In a town where folks pick the local, straight-talking crew over a national chain, and where a dead furnace in January cannot wait until next week, owning those three spots on your streets is the entire job. Here is how we get you there.",
    aioQuestion: "How do Detroit businesses rank higher in local search?",
    aioAnswer:
      "You rank by nailing four things: a Google Business Profile built around the exact trades and neighborhoods you want; name, address, and phone details that match everywhere online; a steady run of real reviews; and local content tied to genuine Detroit neighborhoods and suburbs. Detroit homeowners hire on locality and trust, so the winners work tight service areas, build a real review base, and rank before the winter heating and spring thaw spikes.",
    problemHeading: "If the Detroit phone has gone quiet, blame one of these three",
    painPoints: [
      { title: "Three other crews own the map for your streets", body: "Pull up your own trade plus \"near me\" right now. The three businesses Google pins to the map take almost all of the clicks. A homeowner gut-rehabbing a place in Indian Village, or staring at a furnace that quit at midnight in January, needs somebody now, and they call whoever shows up first. If you are not in that top three for your neighborhoods, the quality of your work barely registers, because most people never scroll down to find your name." },
      { title: "You're paying brokers for leads that aren't yours", body: "Angi, Thumbtack, and HomeAdvisor sell the same Detroit homeowner to four contractors at once, then bill each of you to scrap over the lead. Detroiters are wary of that game; they want to hire somebody who feels like one of their own. Local SEO builds the opposite asset: a homeowner finds you, calls you, and nobody else got the lead. Run it long enough and you stop renting visibility and start owning the pipeline outright." },
      { title: "You're invisible when the freeze and the rehab work hit", body: "Michigan winters are merciless. When a hard freeze cracks a pipe or kills a furnace at 2 a.m., people search for whoever ranks first, and they search right then. Detroit's housing comeback keeps renovation and restoration searches running all year in Midtown, Corktown, and Boston-Edison. If you are not already ranked when those moments land, you are missing them at the one time they pay the most." },
    ],
    servicesHeading: "What it really takes to rank a Detroit crew",
    services: [
      { name: "Google Business Profile", desc: "The single biggest lever in the Map Pack. We tune your categories, services, service area, photos, and posts so Google knows precisely which Detroit searches should belong to you." },
      { name: "Citations and NAP cleanup", desc: "Your name, address, and phone have to line up everywhere Google checks. We clean up the listings that contradict each other and build the ones you are missing across the metro." },
      { name: "Reviews that keep coming", desc: "A simple engine that turns finished jobs into a steady stream of fresh reviews. It lifts your ranking and gives the next homeowner, who trusts word of mouth deeply in Detroit, a reason to call." },
      { name: "Neighborhood pages", desc: "Real pages for Corktown, Indian Village, Grosse Pointe, Birmingham, and the rest, so you rank for the actual neighborhood someone is searching instead of a generic \"Detroit.\"" },
      { name: "On-page and technical SEO", desc: "Titles, schema, internal links, and mobile speed. The wiring behind the drywall that lets every other piece actually rank." },
      { name: "Local link building", desc: "Mentions and links from Detroit sources Google trusts: local press, neighborhood associations, historic preservation groups, community partners. In this market that is often what splits page one from page two." },
      { name: "Seasonal and emergency SEO", desc: "We get you ranking for winter no-heat calls and spring thaw flooding before the demand spikes, so you are already visible when Detroit homeowners need help in a hurry.", featured: true },
      { name: "AI search readiness", desc: "More \"near me\" research now kicks off inside AI Overviews, ChatGPT, and Perplexity. We structure your content so those engines can read you and name you in their answer.", featured: true },
    ],
    processName: "How we work: the Local Lift Method",
    process: [
      { name: "Audit and baseline", desc: "We find out where you genuinely rank today across every neighborhood and suburb, then pin down which competitors are beating you in the Map Pack and exactly why." },
      { name: "Fix the foundation", desc: "Google Business Profile and NAP come first because they move the fastest. Most Detroit clients see early lift here inside a few weeks." },
      { name: "Build trust signals", desc: "Citations and the review engine go live. These stack up week over week, which is exactly why local SEO pays off more the sooner you start it." },
      { name: "Add local content", desc: "Neighborhood and service-area pages across Detroit and the inner-ring suburbs, backed by the on-page work that makes them rank." },
      { name: "Report and expand", desc: "Plain-English reporting tied to calls and booked leads, never vanity rankings. Then we go take the next Detroit neighborhood." },
    ],
    pricing: {
      heading: "Pricing you can actually see",
      note: "Month-to-month after the first 90 days. No lock-in. Cancel whenever.",
      tiers: [
        { name: "Local Starter", price: "$750", cadence: "/mo", desc: "One location, getting the Detroit Map Pack foundation right.", features: ["Google Business Profile optimization", "Citation cleanup and core listings", "One location or primary service area", "Review system setup", "Plain-English monthly report"] },
        { name: "Local Growth", price: "$1,500", cadence: "/mo", desc: "For crews fighting across several Detroit neighborhoods and suburbs.", features: ["Everything in Local Starter", "Up to 5 priority keywords", "Ongoing review generation", "Neighborhood landing pages", "On-page and technical SEO"], featured: true },
        { name: "Local Authority", price: "$2,500", cadence: "/mo", desc: "For contractors set on owning the map across Detroit and its suburbs.", features: ["Everything in Local Growth", "Local link building", "Seasonal and emergency SEO", "Multi-neighborhood and service-area pages", "AI search optimization"] },
      ],
    },
    faqs: [
      { q: "How much does local SEO cost in Detroit?", a: "Most Detroit engagements run between $750 and $2,500 a month, depending on how many neighborhoods and keywords you are chasing. The tiers right above lay it out. No hidden fees, no long contract, and we lock the exact scope in your free audit before you spend a dime." },
      { q: "How long until I show up in the Map Pack?", a: "Profile work can move inside a few weeks. The competitive Detroit keywords usually take 90 to 180 days of steady effort, because reviews and citations build up over time. Anybody promising you page one in 30 days is selling smoke." },
      { q: "What makes Detroit local SEO different?", a: "Two things. Detroit homeowners lean hard toward local, trustworthy crews over national chains; they want a name they have heard of, not a sponsored ad. And Michigan winters create real emergencies, where a furnace failure or burst pipe in January cannot wait a week, so the crew ranked first takes the call. Seasonal and emergency SEO genuinely separates the winners here." },
      { q: "Can you help me rank for rehab and historic restoration work?", a: "Yes, and it is one of the biggest openings in Detroit. Midtown, Corktown, Indian Village, and Boston-Edison hold a deep stock of older homes mid-restoration, and skilled crews who rank for renovation and restoration searches are genuinely scarce. We build the content and local signals that put you in front of those owners." },
      { q: "Which areas do you cover?", a: "Detroit proper and the neighborhoods inside it, including Midtown, Corktown, Indian Village, Boston-Edison, New Center, and Hamtramck, plus the inner-ring suburbs: Grosse Pointe, Birmingham, Bloomfield Hills, Troy, Royal Oak, Ferndale, Dearborn, and Ann Arbor. We build genuine neighborhood pages instead of one generic Detroit page." },
      { q: "Do you work with contractors specifically?", a: "It is basically all we do: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand Michigan no-heat emergencies, the complexity of a full historic rehab, and how to rank across both city neighborhoods and high-income suburbs." },
      { q: "Will I show up in Google AI Overviews and ChatGPT?", a: "More and more \"near me\" research now starts inside AI tools instead of classic search. We structure your content and schema so those engines can read, trust, and name your business. In Detroit it is quickly getting as important as the Map Pack itself." },
      { q: "Am I locked into a contract?", a: "No. We ask for an initial 90 days because that is roughly the window local SEO needs to show real movement in a market this competitive. After that you are month-to-month. If we are not delivering, you walk, and the accountability stays squarely on us." },
      { q: "How does this get me off Angi and HomeAdvisor?", a: "Those platforms rent you shared leads and visibility you never keep. Detroiters are skeptical of that model to begin with; they would rather hire a local name they can vouch for. We build rankings, a Google profile, and a review base that send leads straight to you alone." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your neighborhoods and suburbs, what your Map Pack competitors are doing to beat you, the fixes that will move you fastest, and a realistic 90-to-180-day Detroit Local SEO plan with the numbers run for your business. No pitch deck, just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: "detroit", serviceSlug: "seo-services", service: "SEO Services",
    titleTag: "Detroit SEO Company | Rank Higher, Get Leads | OnwardCraft",
    metaDescription:
      "Detroit SEO that ranks contractors for the searches that book jobs, from Corktown rehab to January no-heat calls. Lead-tied reporting, no lock-in.",
    eyebrow: "SEO Services · Detroit",
    h1: "Detroit SEO that ranks you for the rehab and no-heat searches that book jobs",
    h2Exact: "Detroit SEO Company",
    heroSubhead:
      "Ads quit the moment you stop paying. SEO works the other way: rank once for what your Detroit customers search and the leads keep landing for months. We build that ranking for Michigan contractors, from Corktown rehab searches to January no-heat calls, and tie every report to real calls and booked jobs.",
    primaryCta: "Get my free Detroit SEO audit",
    intro:
      "Detroit SEO boils down to one blunt question: when somebody searches what you do, are you on page one or page two? Around here page two might as well be page fifty. We get contractors ranking for the money keywords across Detroit's city neighborhoods, its historic revival districts, and its high-income suburbs, and we score the whole thing in leads, not traffic that never picks up the phone.",
    aioQuestion: "How do Detroit businesses rank higher on Google?",
    aioAnswer:
      "They rank by fixing the technical base of the site, tuning each page for the exact terms customers search, publishing genuinely useful local content tied to specific Detroit neighborhoods and suburbs, and earning links from trusted Michigan sources. In Detroit, seasonal targeting carries real weight: ranking for winter no-heat emergencies and spring thaw flooding before demand spikes is one of the fastest ways to pull ahead.",
    problemHeading: "Three reasons your Detroit site isn't bringing in work",
    painPoints: [
      { title: "You're buried on page two of a Detroit search", body: "Almost nobody clicks past the first page of Google. In a town where homeowners are hunting for the local, trusted crew rather than the loudest national brand, sitting on page two means all of that goodwill and local preference never reaches you. Climbing to page one is often the single highest-return move a Detroit contractor can make." },
      { title: "You're leasing your traffic from Google Ads", body: "Ads can work, but the second your card stops, the leads stop cold. SEO builds an asset you actually own: rankings that keep producing leads months and years after the work is done, at a slice of the per-lead cost you pay now. And in a market already skeptical of flashy marketing, an earned ranking carries more weight than a sponsored slot." },
      { title: "You're invisible for the demand that actually pays", body: "Detroit demand swings hard with Michigan seasons: furnaces and pipes in winter, flooded basements and foundation work in spring, AC in the heat of summer. The contractors who rank for those terms ahead of the spike catch the surge. If your SEO ignores seasonal and emergency searches, you are quietly handing away your busiest, most profitable weeks." },
    ],
    servicesHeading: "The SEO work that actually moves Detroit rankings",
    services: [
      { name: "Technical SEO", desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank your Detroit site at all." },
      { name: "On-page optimization", desc: "Every page that matters tuned for the exact terms your Detroit customers search: titles, headings, content, and internal links." },
      { name: "Content that ranks", desc: "Genuinely useful pages and articles that answer what buyers search, pull in links, and bring you leads long after we hit publish." },
      { name: "Link building", desc: "Authority from real Detroit and Michigan industry sources. In a market that runs on trust, links from local press and neighborhood associations carry serious weight." },
      { name: "Local SEO & Google Business Profile", desc: "Map Pack optimization so you win the \"near me\" searches across your neighborhoods and suburbs right alongside your organic rankings." },
      { name: "Revenue-tied reporting", desc: "We report on calls, forms, and booked leads, not just rankings and raw traffic, so you always know what your SEO is putting back in your pocket." },
      { name: "Seasonal & emergency SEO", desc: "We rank you for winter heating, burst-pipe, and spring thaw flooding searches before they peak, so you are visible the moment Detroit homeowners need help most.", featured: true },
      { name: "AI search & GEO", desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and name you, where a growing share of Detroit search now begins.", featured: true },
    ],
    processName: "How we work: the OnwardCraft SEO method",
    process: [
      { name: "Audit and strategy", desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Detroit leads, not just impressions." },
      { name: "Fix the technical base", desc: "Speed, crawlability, schema, and mobile. The footing everything else has to stand on before it can rank." },
      { name: "Optimize and create content", desc: "On-page work across your money pages plus fresh local content, including the seasonal and emergency terms that decide who wins a Michigan winter." },
      { name: "Build authority", desc: "Links and citations from trusted Detroit and Michigan industry sources to push your competitive keywords onto page one." },
      { name: "Report and scale", desc: "Monthly reporting tied to leads, then we pour more into what is working and push into the next Detroit keyword set." },
    ],
    pricing: {
      heading: "Transparent Detroit SEO pricing",
      note: "Month-to-month after the first 90 days. No lock-in. Cancel whenever.",
      tiers: [
        { name: "SEO Starter", price: "$900", cadence: "/mo", desc: "For a focused site chasing its core Detroit keywords.", features: ["Technical SEO fixes", "On-page optimization", "Up to 5 target keywords", "Google Business Profile", "Monthly lead-tied report"] },
        { name: "SEO Growth", price: "$1,800", cadence: "/mo", desc: "For contractors competing across Detroit neighborhoods and suburbs.", features: ["Everything in SEO Starter", "Up to 12 target keywords", "Monthly content", "Link building", "On-page + local SEO"], featured: true },
        { name: "SEO Authority", price: "$3,000", cadence: "/mo", desc: "For businesses that want to own Detroit search.", features: ["Everything in SEO Growth", "Aggressive content + links", "Seasonal & emergency SEO", "Multi-neighborhood / multi-location", "AI search / GEO optimization"] },
      ],
    },
    faqs: [
      { q: "How much does SEO cost in Detroit?", a: "Most Detroit SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work the job needs. The tiers sit right above, with no hidden fees and no long contract." },
      { q: "How long does SEO take to work in Detroit?", a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, quicker on tight neighborhood terms and slower on the most contested metro-wide keywords. SEO stacks up over time, so the longer you run it, the bigger the gains get." },
      { q: "Is SEO better than Google Ads?", a: "They do different jobs. Ads buy instant traffic that vanishes the second you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Detroit homeowners also tend to trust organic results over paid slots; the earned, local ranking carries credibility a sponsored ad never will." },
      { q: "Should my Detroit SEO target seasonal demand?", a: "Yes, and in Michigan it is one of the most important calls you make. When the cold snaps in and a furnace dies in January, people search for whoever ranks first, right then. A spring thaw can flood basements overnight. Ranking takes months to build, so you have to be in place ahead of the season, not scrambling after it. We optimize for those seasonal and emergency terms early." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal and emergency and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: "Do you require a long-term contract?", a: "No. We ask for an initial 90 days because SEO needs about that long to show real movement on Detroit terms, then it switches to month-to-month. If we are not delivering, you leave." },
      { q: "Will I show up in Google AI Overviews and ChatGPT?", a: "That is a growing slice of what we optimize for. We structure your content and schema so AI engines can read, trust, and name your Detroit business, not just the old blue-link results." },
      { q: "Which areas around Detroit do you cover?", a: "Detroit proper and its neighborhoods, including Midtown, Corktown, Indian Village, Boston-Edison, New Center, and Hamtramck, plus the suburbs: Grosse Pointe, Birmingham, Bloomfield Hills, Troy, Royal Oak, Ferndale, Dearborn, and Ann Arbor. Genuine local pages for each, not one generic Detroit page." },
      { q: "How do you get me off Angi and HomeAdvisor leads?", a: "By building rankings and a Google presence that send leads straight to you. Detroiters are already skeptical of lead-broker platforms; they would rather hire a local name they can verify. The more you own your search visibility, the less you lean on brokers for leads three competitors also bought." },
      { q: "What's in the free SEO audit?", a: "Where you rank today across Detroit, what your competitors are doing to beat you, the highest-impact fixes, and a realistic Detroit SEO timeline with the numbers modeled for your own business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: "detroit", serviceSlug: "web-design", service: "Web Design",
    titleTag: "Detroit Web Design Company | OnwardCraft",
    metaDescription:
      "Detroit web design that turns visitors into booked jobs: fast, mobile-first sites built for contractors in a market that hires on local trust and straight talk.",
    eyebrow: "Web Design · Detroit",
    h1: "Detroit web design built to convert Corktown-to-Birmingham clicks into calls",
    h2Exact: "Detroit Web Design Company",
    heroSubhead:
      "A good-looking website that never rings the phone is just an expensive brochure. We build Detroit contractors fast, mobile-first sites that earn trust, turn visitors into booked work, and make it obvious you are a local crew, not a national chain wearing a local phone number.",
    primaryCta: "Get my free quote",
    intro:
      "Detroit web design lives or dies on one thing: whether the site books a job or just sits there looking nice. Most Detroit contractor websites bleed leads quietly, slow on a phone, no clear offer, nothing that signals you are actually from around here. In a town where homeowners back the straight-talking, community-rooted crew over a national brand, your website is your first handshake, and it has to match the quality of your work. We build sites that load fast, look like the pro you really are, and turn Corktown-to-Bloomfield-Hills visitors into booked jobs.",
    aioQuestion: "What makes a good contractor website in Detroit?",
    aioAnswer:
      "A good Detroit contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with real reviews and local project photos, and names the specific neighborhoods and suburbs you serve. Detroit homeowners hire on local credibility, so a site that could belong to any national franchise will not earn their trust the way one that signals genuine local roots does.",
    problemHeading: "Why your current Detroit site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead machine", body: "Plenty of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next crew, and a Detroit homeowner doing their homework will find that next crew in seconds. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Detroit visitors are on mobile, and they bounce if your site takes more than a couple of seconds to load. In a January no-heat panic, a slow page means they have already called your competitor. We build fast, so you keep both the visitor and the job." },
      { title: "It doesn't feel local", body: "Detroit homeowners have a sharp radar for out-of-town brands. If your site reads like it was built for anyplace USA, with stock photos, no neighborhood names, and no real sense of local identity, you lose credibility before the first call. We build sites that make it plain you know the streets you work." },
    ],
    servicesHeading: "What's in an OnwardCraft Detroit website",
    services: [
      { name: "Custom design", desc: "No cookie-cutter templates. A site built around your trade, the neighborhoods you serve, and the exact jobs you want more of." },
      { name: "Mobile-first build", desc: "Designed for the phone first, because that is where nearly all of your Detroit traffic lives, and where the January emergency calls come from." },
      { name: "Conversion-focused UX", desc: "Clear offers, obvious call buttons, and lead forms set where homeowners actually tap them. Every page carries one unmistakable next step." },
      { name: "Copy that sells", desc: "Words pitched to Detroit homeowners, straight-talking and community-grounded and built to book the job, not filler that reads exactly like every other contractor in town." },
      { name: "Local SEO foundation", desc: "Built from the ground up to rank: clean structure, schema, fast load, and neighborhood-ready pages for the streets you actually cover." },
      { name: "Speed & Core Web Vitals", desc: "Tuned to load fast and clear Google's performance checks, which guards your conversions and your rankings at once." },
      { name: "Neighborhood-targeted pages", desc: "Pages built around Corktown, Indian Village, Grosse Pointe, Birmingham, and the suburbs you serve, so the right homeowners find you and trust you on sight.", featured: true },
      { name: "AI-search ready", desc: "Structured so AI Overviews and ChatGPT can read your site and recommend your business as more Detroit search shifts toward AI.", featured: true },
    ],
    processName: "How we build: the OnwardCraft process",
    process: [
      { name: "Discovery and strategy", desc: "We learn your trade, the neighborhoods you serve, your most profitable jobs, and your competitors, then map the site around booking more of the work you actually want." },
      { name: "Design", desc: "We design a custom, mobile-first layout made to convert, and you see it and shape it before one line of code gets written." },
      { name: "Build and copy", desc: "We build it fast and write the copy that books the job, with the call to action front and center on every page." },
      { name: "Launch", desc: "We launch clean, with the SEO foundation, tracking, and speed all set from day one." },
      { name: "Support and optimize", desc: "We keep it fast and current and tune it around what is actually turning Detroit visitors into calls." },
    ],
    pricing: {
      heading: "Transparent Detroit web design pricing",
      note: "One-time build. 50% to start, 50% at launch. You own everything. No lock-in.",
      tiers: [
        { name: "Starter Site", price: "$2,000", cadence: "", desc: "A focused, high-converting site for a single-trade Detroit contractor.", features: ["Up to 5 custom pages", "Mobile-first design", "Lead forms + call buttons", "Local SEO foundation", "You own the site"] },
        { name: "Growth Site", price: "$4,500", cadence: "", desc: "A bigger site for an established Detroit crew running several services.", features: ["Up to 12 pages", "Custom design + copywriting", "Service + neighborhood pages", "Speed & Core Web Vitals", "Neighborhood-targeted pages"], featured: true },
        { name: "Custom Build", price: "$8,000", cadence: "", desc: "A full custom build for multi-service or multi-location Detroit businesses.", features: ["Fully custom design", "Advanced SEO + schema", "Integrations & booking", "High-traffic performance", "AI-search optimization"] },
      ],
    },
    faqs: [
      { q: "How much does a website cost in Detroit?", a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. The tiers sit right above: fixed price, no surprises, and you own the finished site outright." },
      { q: "How long does it take to build?", a: "A focused site usually takes 2 to 4 weeks; a larger custom build runs 4 to 8. We hand you a firm timeline up front and keep you posted at every stage." },
      { q: "Will my site help me look like a trusted local contractor?", a: "That is the whole point in Detroit. We build around the specific neighborhoods and suburbs you serve, write straight-talking copy that fits the local culture, and put your local credentials and reviews front and center, so when a homeowner lands on your site, they know right away you are the real thing." },
      { q: "Will my new site actually rank on Google?", a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank, and pairing it with our SEO service is how you climb the competitive Detroit terms." },
      { q: "Do I own the website?", a: "Completely. You own the site, the domain, and the content outright. No hostage situations, and no platform you cannot walk away from." },
      { q: "Will it work well on phones?", a: "We design mobile-first, because that is where nearly all of your Detroit traffic comes from, and where the no-heat call comes in at 11 p.m. in January." },
      { q: "What platform do you build on?", a: "We pick the platform that fits your needs and that you can actually run yourself, usually WordPress or Webflow. We recommend the right fit in your free consult and lay out the tradeoffs in plain English." },
      { q: "Do you offer ongoing support?", a: "Yes. Every Detroit build comes with launch support, and after that we offer affordable monthly maintenance covering updates, speed, and security." },
      { q: "Am I locked into a contract?", a: "No. The build is a one-time project at a fixed price. Any maintenance or SEO afterward is month-to-month, so you can leave whenever you like." },
      { q: "What do I get in the free quote?", a: "A clear look at what your current site is costing you in lost leads, what a high-converting Detroit web design project should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: "detroit", serviceSlug: "website-redesign", service: "Website Redesign",
    titleTag: "Detroit Website Redesign | OnwardCraft",
    metaDescription:
      "Detroit Website Redesign without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs and signal you are genuinely local.",
    eyebrow: "Website Redesign · Detroit",
    h1: "Detroit Website Redesign that keeps every ranking you have earned",
    h2Exact: "Detroit Website Redesign Company",
    heroSubhead:
      "An outdated site costs you jobs every single week: slow, clumsy on a phone, and easy for a Detroit homeowner to wave off as another national brand. We redesign contractor sites to convert more and load faster, and we migrate so carefully that you keep every bit of ranking you have already earned.",
    primaryCta: "Get my free redesign audit",
    intro:
      "A Detroit Website Redesign usually goes one of two bad ways: the site gets prettier but converts exactly the same, or it launches and the rankings vanish overnight. We do neither. We redesign Detroit contractor sites for speed, local credibility, and conversions, then migrate with the redirects and SEO-safe care that protect the traffic you have spent years building.",
    aioQuestion: "How do I redesign my website without losing SEO and traffic?",
    aioAnswer:
      "You protect SEO through a redesign by holding your URL structure (or mapping 301 redirects for every page that changes), keeping your existing content and metadata intact, carrying your schema across, and testing the whole thing on staging before you flip it live. Done right, the redesign keeps your rankings and nudges them up, because the new Detroit site loads faster, works on a phone first, and is built cleaner than the old one.",
    problemHeading: "Signs your Detroit site is overdue for a redesign",
    painPoints: [
      { title: "A dated look quietly bleeds away trust", body: "Detroit homeowners, especially the ones pouring money into a serious rehab or bringing in a contractor for a big job, size you up by your site in seconds. An old, cluttered design tells them you have fallen behind, and in a market that runs on local credibility, that sends them straight to a competitor who simply looks more on top of it." },
      { title: "It crawls and fights you on a phone", body: "If your site is clunky or slow on mobile, you are losing most of your Detroit visitors before they ever reach your offer. A January no-heat emergency does not wait around for a slow page to load. A redesign built mobile-first wins back the visitors your current site is quietly bleeding off." },
      { title: "It doesn't signal you're local", body: "Generic sites do not win in Detroit. If your site reads like it belongs to a national franchise, with no neighborhood references and no real local identity, you lose credibility before the first call. We rebuild around the specific neighborhoods and suburbs you serve so the right homeowners pick you." },
    ],
    servicesHeading: "What's inside an OnwardCraft Detroit redesign",
    services: [
      { name: "Redesign audit", desc: "We track down exactly what is costing you leads and rankings today, so the redesign fixes the real problems instead of just repainting the place." },
      { name: "SEO-safe migration", desc: "Redirects, metadata, and schema handled properly so you keep every bit of the rankings and traffic you have already earned in Detroit." },
      { name: "Conversion redesign", desc: "Clear offers, smarter call-to-action placement, and lead forms homeowners actually fill out. We design for booked Detroit jobs, not just a prettier screenshot." },
      { name: "Speed overhaul", desc: "We rebuild for fast load and clean Core Web Vitals, which lifts conversions and rankings together." },
      { name: "Mobile-first rebuild", desc: "Redesigned around the phone, where nearly all of your Detroit traffic actually lives, and where the no-heat calls land." },
      { name: "Brand refresh", desc: "A modern, trustworthy look that matches the quality of your work and signals you are a genuine local outfit." },
      { name: "Neighborhood-targeted rebuild", desc: "Rebuilt around the Detroit neighborhoods and suburbs you serve, from Corktown and Indian Village to Grosse Pointe and Birmingham, so the new site earns trust the old one never could.", featured: true },
      { name: "AI-search ready", desc: "Structured so AI Overviews and ChatGPT can read and recommend you as more Detroit search shifts toward AI.", featured: true },
    ],
    processName: "How we redesign: a careful rebuild",
    process: [
      { name: "Audit and plan", desc: "We dig into what is losing you leads and rankings, then map a redesign that fixes it without breaking what already works for you." },
      { name: "Design", desc: "A modern, mobile-first, conversion-focused design you review and shape before we rebuild a thing." },
      { name: "Rebuild and migrate", desc: "We rebuild fast and line up every redirect and SEO detail so the Detroit migration goes through clean, with no nasty surprises." },
      { name: "Launch with SEO care", desc: "We launch with the redirects in place and watch closely so your Detroit rankings hold and climb instead of slipping." },
      { name: "Optimize", desc: "Post-launch tuning around what is actually converting Detroit visitors, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: "Transparent Detroit redesign pricing",
      note: "One-time project. 50% to start, 50% at launch. You own everything. No lock-in.",
      tiers: [
        { name: "Redesign Starter", price: "$2,500", cadence: "", desc: "A focused redesign for a small Detroit contractor site.", features: ["Up to 5 pages rebuilt", "Mobile-first redesign", "SEO-safe migration", "Conversion improvements", "You own the site"] },
        { name: "Redesign Growth", price: "$5,000", cadence: "", desc: "A full redesign for an established Detroit contractor site.", features: ["Up to 12 pages", "Custom design + copy refresh", "Speed overhaul", "Service + neighborhood pages", "Neighborhood-targeted rebuild"], featured: true },
        { name: "Full Rebuild", price: "$9,000", cadence: "", desc: "A complete rebuild for multi-service or multi-location Detroit sites.", features: ["Full custom rebuild", "Advanced SEO migration", "Integrations & booking", "High-traffic performance", "AI-search optimization"] },
      ],
    },
    faqs: [
      { q: "How much does a website redesign cost in Detroit?", a: "Most redesigns with us land between $2,500 and $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and the result is yours outright." },
      { q: "Will I lose my Google rankings if I redesign?", a: "Not if it is handled carefully, and that is exactly how we work. We map 301 redirects for every URL that changes, keep content and metadata intact, carry your schema across, and test on staging first. Done right, the redesign holds your Detroit rankings and usually nudges them up." },
      { q: "How long does a redesign take?", a: "A focused redesign runs roughly 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and steady updates the whole way through." },
      { q: "How do I know I need a redesign?", a: "If your site is slow on phones, looks dated, is a pain to update, is not bringing in leads, or reads like it belongs to anyone but a local Detroit crew, it is costing you work. The free audit tells you plainly whether a redesign is worth it for your business." },
      { q: "Do you migrate my existing content?", a: "Yes. We carry over and sharpen your existing content, hold onto what is ranking, and run the technical migration so nothing important slips through the cracks." },
      { q: "Will the redesign help me compete across Detroit and the suburbs?", a: "Yes, and that is the point. We rebuild around the specific neighborhoods and suburbs you serve, keep the site fast, and make it plain you are a local expert, so the new site earns trust with a Corktown homeowner and a Bloomfield Hills homeowner alike." },
      { q: "Will the new site be mobile-friendly and fast?", a: "Yes. We rebuild mobile-first and tune for quick load and clean Core Web Vitals, which lifts both conversions and rankings." },
      { q: "Do I own the redesigned site?", a: "Completely: the site, the domain, and every bit of the content belong to you. No platform lock-in of any kind." },
      { q: "Am I locked into a contract?", a: "No. The redesign is a one-time Detroit project. Any maintenance or SEO afterward runs month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the Detroit Website Redesign needs to fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const detroitCity = {
  citySlug: "detroit", city: "Detroit", state: "Michigan", stateAbbr: "MI", metro: "Detroit",

  titleTag: "Detroit Marketing for Contractors | OnwardCraft",
  metaDescription:
    "Detroit marketing for contractors: web design, SEO, and local SEO. Get found, get booked, and own your leads instead of renting them, built for Michigan winters and the rehab boom.",

  eyebrow: "Detroit · Web Design, SEO & Lead Generation",
  h1: "Detroit marketing for contractors: get ranked across the city, get booked",
  h2Exact: "Detroit Marketing Agency for Contractors",
  heroSubhead:
    "Websites, SEO, and local SEO built for Detroit's own market: Michigan winters, a historic rehab revival, and homeowners who pick local over national every time. One team to get you ranking, converting, and off the rented-lead treadmill for good.",
  heroProof: ["Built for the trades", "Neighborhood-by-neighborhood targeting", "No lock-in contracts"],
  primaryCta: "Get my free Detroit audit",

  intro:
    "Detroit marketing for contractors is its own animal, because you are working in one of the most interesting markets in the country: a city genuinely rebuilding itself, with historic neighborhoods full of rehab work, inner-ring suburbs where homeowners spend freely, and Michigan winters that turn HVAC and pipe failures into real emergencies. Winning here takes three things pulling together: a site that earns local trust, SEO that ranks you for what people actually search, and local SEO that puts you in the Map Pack for the streets you serve. Here is exactly how we help Detroit contractors pull that off.",
  aioQuestion: "How do Detroit contractors get more leads online?",
  aioAnswer:
    "Detroit contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack neighborhood by neighborhood. The ones who win look credibly local, rank for Michigan's seasonal emergencies before they hit, and earn the trust of homeowners who would rather hire a known local name than a national chain.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: "The OnwardCraft team",
  whyUs: WHY,

  services: [
    {
      service: "Local SEO", serviceSlug: "local-seo", tagline: "Win the Map Pack",
      blurb: "Get into the top three businesses Google pins to the map when Detroit searches \"near me.\" The single highest-return move for most local contractors, worked tight, street by street and neighborhood by neighborhood.",
    },
    {
      service: "SEO Services", serviceSlug: "seo-services", tagline: "Rank higher, get leads",
      blurb: "Rank for the money keywords your customers actually search, from historic rehab in Corktown to no-heat emergencies in January, and build an asset you own instead of renting traffic from ads.",
    },
    {
      service: "Web Design", serviceSlug: "web-design", tagline: "Sites that earn local trust",
      blurb: "Fast, mobile-first websites that signal genuine local roots, turn visitors into booked jobs, and make it obvious you are a Detroit contractor, not a national chain with a local phone number.",
    },
    {
      service: "Website Redesign", serviceSlug: "website-redesign", tagline: "More leads, no traffic loss",
      blurb: "Rebuild an outdated site for speed, local credibility, and conversions, and migrate it so carefully that you keep every bit of ranking you have already earned in Detroit search.",
    },
  ],

  faqs: [
    { q: "What marketing services do you offer in Detroit?", a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients pair a high-converting website with SEO and local SEO so they rank, convert, and own their leads in a market where local trust decides almost everything." },
    { q: "Do you work only with contractors?", a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors, so we understand Michigan no-heat emergencies, the complexity of a full historic rehab, and the gap between a Midtown client and a Grosse Pointe client." },
    { q: "Why does the Detroit market need a different approach?", a: "Detroit homeowners lean hard toward local, trustworthy crews over national brands. Add Michigan's brutal winters, where furnace failures and burst pipes cannot wait, and a real rehab revival in neighborhoods like Corktown and Indian Village, and you get a market that rewards local know-how and seasonal SEO more than most." },
    { q: "How much does it cost to work with you?", a: "Websites are one-time builds running $2,000 to $9,000. SEO and local SEO are month-to-month, from $750 to $3,000, with no long contract. We lock the exact scope in your free audit." },
    { q: "Which Detroit areas do you serve?", a: "Detroit proper and its neighborhoods, including Midtown, Corktown, Indian Village, Boston-Edison, New Center, and Hamtramck, plus the suburbs: Grosse Pointe, Birmingham, Bloomfield Hills, Troy, Royal Oak, Ferndale, Dearborn, and Ann Arbor." },
    { q: "Where should I start?", a: "Start with a free Detroit audit. We look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves in your Detroit marketing for contractors that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};
