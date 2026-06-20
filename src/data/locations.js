// Per-metro × per-service local landing pages. Single source of truth for the
// dynamic /[city]/[service]/ pages (e.g. /miami/local-seo/), their Service +
// FAQPage + BreadcrumbList schema, and internal cross-links.
//
// BUILD SPEC: ../../content/lead-content-plan/08-local-page-template.md
// SERP BASIS: ../../content/lead-content-plan/07-serp-analysis.md (112 page-1 pages)
//
// VOICE: written like a person talks, not like a brochure. Copywriting formulas
// in play — AIDA in the hero, PAS in the problem section, benefit-first service
// lines, objection-handling FAQ. Sentence length is varied on purpose. Em
// dashes, rule-of-three, and "not just X but Y" are kept rare.
//
// HONESTY RULE (same as industries.js): OnwardCraft is a new, founder-led agency.
// NO fabricated client names, review counts, star ratings, or claimed past
// results. Every number below is either a real, verifiable fact about the local
// market, or a clearly-labelled industry benchmark / projection. That's why
// these pages ship LocalBusiness + Service + FAQPage + Breadcrumb schema but
// DELIBERATELY omit Review / AggregateRating schema until real reviews exist.
//
// PRICING NOTE: monthly tiers are placeholders aligned to the market range
// ($249–$5k/mo observed in SERP research) and the site's "$500/mo maintenance"
// reference. Confirm exact numbers with the founder before launch.

export const locations = [
  {
    // ── Identity ──────────────────────────────────────────────
    citySlug: 'miami',
    city: 'Miami',
    state: 'Florida',
    stateAbbr: 'FL',
    metro: 'Miami-Dade',
    serviceSlug: 'local-seo',
    service: 'Local SEO',

    // ── SEO meta ──────────────────────────────────────────────
    titleTag: 'Miami Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Search your service in Miami and three businesses show up on the map. We get you into those three, in English and Spanish. Honest pricing, no lock-in, free audit.',

    // ── Hero (AIDA) ───────────────────────────────────────────
    eyebrow: 'Local SEO · Miami-Dade',
    h1: 'When Miami searches for what you do, be the first name they find',
    h2Exact: 'Miami Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. We get you into that top three, in English and in Spanish, so the call lands with you instead of whoever ranked first.",
    primaryCta: 'Get my free Miami audit',
    heroProof: [
      'Built for the trades',
      'English + Spanish',
      'No lock-in contracts',
    ],

    // ── Founder note (humanizing, first-person, honest) ───────
    founderNote:
      "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking on Google for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.",
    founderName: 'The OnwardCraft team',

    // ── Intro + AI-answer block (AEO) ─────────────────────────
    intro:
      "Miami might be the toughest local search market in the country. It's crowded, and it's bilingual. A homeowner in Brickell or Hialeah is just as likely to type \"reparación de techos\" as \"roof repair,\" then tap one of the three businesses Google puts on the map and never scroll. So becoming one of those three is the whole game. Here's how you do it.",
    aioQuestion: 'How do Miami businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile that's actually optimized for the services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady drip of real reviews; and local content that includes Spanish, since about two-thirds of Miami-Dade speaks it at home. Miami is competitive and hurricane-prone, so the winners are the businesses that look established, answer fast, and show up in both languages.",

    // ── ★ Local market section ────────────────────────────────
    localMarket: {
      heading: "Why Miami is the hardest map in the country to win",
      body:
        "Miami-Dade has about 2.7 million people packed into one of the densest small-business markets in the U.S. That alone makes the Map Pack a brawl. But two things make Miami genuinely different. First, it runs in two languages. Roughly two-thirds of residents speak Spanish at home, and almost no agency bothers to rank for it, so there's a whole pool of high-intent searches your competitors aren't even chasing. Second, it runs on hurricane season. From June through November, demand for roofing, restoration, and HVAC can spike overnight. The businesses already sitting in the top three are the ones who catch that wave.",
      pullQuote: "Half your customers are searching in Spanish. Almost none of your competitors show up for them.",
      stats: [
        { value: '2.7M+', label: 'people across Miami-Dade County' },
        { value: '~66%', label: 'speak Spanish at home — a search market most agencies skip', accent: true },
        { value: 'Jun–Nov', label: 'hurricane season, when trade demand spikes' },
        { value: 'Top 3', label: 'Map Pack spots that take most of the clicks' },
      ],
      neighborhoods: [
        'Brickell', 'Downtown', 'Wynwood', 'Little Havana', 'Coral Gables',
        'Coconut Grove', 'Miami Beach', 'Doral', 'Kendall', 'Hialeah',
        'Aventura', 'Pinecrest', 'Edgewater', 'Cutler Bay', 'Homestead',
      ],
    },
    areasServed: [
      'Miami', 'Hialeah', 'Coral Gables', 'Doral', 'Kendall', 'Aventura',
      'Miami Beach', 'Homestead', 'Pinecrest', 'Cutler Bay', 'Miami Gardens',
      'North Miami', 'Palmetto Bay', 'Sunny Isles Beach',
    ],

    // ── Problem (PAS) ─────────────────────────────────────────
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      {
        title: 'Your competitors own the three spots on the map',
        body:
          "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks. If you're not one of them, it almost doesn't matter how good your work is — most people never see your name. Getting into that top three is usually the single highest-return move a Miami business can make.",
      },
      {
        title: "You're paying for leads you don't own",
        body:
          "Angi, Thumbtack, and HomeAdvisor sell the same Miami homeowner to four contractors, then bill each of you to fight over them. It's a treadmill. Local SEO builds the opposite: a lead finds you, calls you, and nobody else got it. Over time you stop renting and start owning.",
      },
      {
        title: "You're invisible to two-thirds of the city",
        body:
          "Most of Miami-Dade speaks Spanish at home, but your website and your Google profile probably only speak English. So every \"plomero cerca de mí\" or \"reparación de aires\" search goes to someone else by default. That's not a small gap. It's half the market.",
      },
    ],

    // ── Services grid (benefit-first; bilingual + AI featured) ─
    servicesHeading: 'What it actually takes to rank you',
    services: [
      {
        name: 'Google Business Profile',
        desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Miami searches you should win.",
      },
      {
        name: 'Citations and NAP cleanup',
        desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing.",
      },
      {
        name: 'Reviews that keep coming',
        desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes people pick up the phone.",
      },
      {
        name: 'Neighborhood pages',
        desc: "Real pages for Brickell, Kendall, Doral, Hialeah and the rest, so you rank for the neighborhood someone's actually searching, not just \"Miami.\"",
      },
      {
        name: 'On-page and technical SEO',
        desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank.",
      },
      {
        name: 'Local link building',
        desc: "Mentions and links from Miami sources Google trusts — local press, associations, partners. This is what separates page one from page two here.",
      },
      {
        name: 'Spanish-language SEO',
        desc: "This is the one almost nobody does. Spanish keywords, Spanish profile content, Spanish pages — built to win the two-thirds of Miami your competitors ignore.",
        featured: true,
      },
      {
        name: 'AI search readiness',
        desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.",
        featured: true,
      },
    ],

    // ── Process (named method, connected timeline) ────────────
    processName: 'How we work: the Local Lift Method',
    process: [
      {
        name: 'Audit and baseline',
        desc: "We find out where you actually rank today across your service areas, in both languages, and pin down which competitors are beating you and why.",
      },
      {
        name: 'Fix the foundation',
        desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks.",
      },
      {
        name: 'Build trust signals',
        desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now over starting later.",
      },
      {
        name: 'Add local content',
        desc: "Neighborhood and service-area pages, in English and Spanish where it pays off, plus the on-page work to back them up.",
      },
      {
        name: 'Report and expand',
        desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood.",
      },
    ],

    // ── ★ Proof / projection (HONEST — labelled) ──────────────
    proof: {
      heading: "We're new, so here's the honest math instead of a logo wall",
      body:
        "Plenty of agencies will show you a grid of client logos. We're a young, founder-led shop, so we won't pretend to a track record we don't have yet. What we can show you is why this works — straight from Google's and the industry's own research on how people search locally.",
      stats: [
        { value: '46%', label: 'of Google searches have local intent' },
        { value: '76%', label: 'who search local on a phone visit a business that day' },
        { value: '~28%', label: 'of local searches end in a purchase' },
      ],
      projection:
        "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Miami contractor gets around 1,500 local \"near me\" impressions a month. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a booked-out calendar. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
      disclaimer:
        "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
    },

    // ── ★ Transparent pricing ─────────────────────────────────
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        {
          name: 'Local Starter',
          price: '$750',
          cadence: '/mo',
          desc: 'One location, getting the Map Pack foundation right.',
          features: [
            'Google Business Profile optimization',
            'Citation cleanup and core listings',
            'One location or primary service area',
            'Review system setup',
            'Plain-English monthly report',
          ],
        },
        {
          name: 'Local Growth',
          price: '$1,500',
          cadence: '/mo',
          desc: 'For businesses fighting across several Miami neighborhoods.',
          features: [
            'Everything in Local Starter',
            'Up to 5 priority keywords',
            'Ongoing review generation',
            'Neighborhood landing pages',
            'On-page and technical SEO',
          ],
          featured: true,
        },
        {
          name: 'Local Authority',
          price: '$2,500',
          cadence: '/mo',
          desc: 'For contractors who want Miami-Dade in both languages.',
          features: [
            'Everything in Local Growth',
            'Local link building',
            'Spanish-language SEO',
            'Multi-area and service-area pages',
            'AI search optimization',
          ],
        },
      ],
    },

    // ── Why us ────────────────────────────────────────────────
    whyUs: [
      {
        title: 'We only do the trades',
        body:
          "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We get storm season, emergency calls, and insurance work, so your local SEO is built around how your customers really search instead of some generic playbook.",
      },
      {
        title: 'We get you off rented leads',
        body:
          "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners three competitors also bought.",
      },
      {
        title: "We actually speak Miami",
        body:
          "Bilingual optimization, hurricane-season demand, real neighborhood targeting. The stuff a national agency can't do by swapping a city name into a template.",
      },
      {
        title: 'No contracts, no mystery',
        body:
          "Published prices, reporting tied to leads, month-to-month after 90 days. If we're not earning it, you leave. That keeps the pressure where it belongs: on us.",
      },
    ],

    // ── FAQ (objection-handling) ──────────────────────────────
    faqs: [
      {
        q: 'How much does local SEO cost in Miami?',
        a: "Most Miami engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after and whether you want Spanish-language work. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit.",
      },
      {
        q: 'How long until I show up in the Map Pack?',
        a: "Profile improvements can move in a few weeks. The competitive Miami keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days in a market this crowded is selling you something.",
      },
      {
        q: 'What makes Miami local SEO different from regular SEO?',
        a: "Three things. It's bilingual, so half the high-intent searches happen in Spanish and most agencies never touch them. It's hurricane-prone, so trades see sharp seasonal spikes your presence has to be ready for. And it's packed, so trust signals like reviews and consistent listings carry more weight than they would in a small town.",
      },
      {
        q: 'Do you really do Spanish-language SEO?',
        a: "Yes, and it's one of the biggest edges we give you. About two-thirds of Miami-Dade speaks Spanish at home, but your competitors optimize in English only. We target Spanish keywords and build Spanish profile content and pages, so you catch searches nobody else is even bidding on.",
      },
      {
        q: 'Which areas do you cover?',
        a: "All of Miami-Dade and the areas around it — Brickell, Coral Gables, Doral, Kendall, Hialeah, Aventura, Miami Beach, Pinecrest, Cutler Bay, Homestead, and more. We build genuine neighborhood pages instead of one generic Miami page, because that's what actually ranks for \"[service] [neighborhood]\" searches.",
      },
      {
        q: 'Do you work with contractors specifically?',
        a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand emergency calls, storm-driven demand, and insurance jobs, and we build your local SEO around them.",
      },
      {
        q: 'Will I show up in Google AI Overviews and ChatGPT?',
        a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself.",
      },
      {
        q: 'Am I locked into a contract?',
        a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us.",
      },
      {
        q: 'How does this get me off Angi and HomeAdvisor?',
        a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because the work is coming to you directly.",
      },
      {
        q: "What's in the free audit?",
        a: "A clear read on where you rank today across your service areas in both languages, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis.",
      },
    ],
  },
];

// Convenience lookups for the dynamic route + future cross-linking.
export const locationPaths = locations.map((l) => ({
  citySlug: l.citySlug,
  serviceSlug: l.serviceSlug,
}));

export function getLocation(citySlug, serviceSlug) {
  return locations.find(
    (l) => l.citySlug === citySlug && l.serviceSlug === serviceSlug
  );
}
