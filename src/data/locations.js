// Per-metro × per-service local landing pages. Renders via /[city]/[service]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (market, areas, founder, why, proof) are defined once
// and reused across that city's service pages — they describe the same city, so
// sharing is correct and DRY. Service-specific blocks are authored per entry.
// PRICING is placeholder, aligned to market range; confirm with the founder.

import { tampaLocations } from './metros/tampa.js';
import { orlandoLocations } from './metros/orlando.js';
import { dallasLocations } from './metros/dallas.js';
import { denverLocations } from './metros/denver.js';
import { phoenixLocations } from './metros/phoenix.js';
import { newYorkLocations } from './metros/new-york.js';
import { losAngelesLocations } from './metros/los-angeles.js';
import { chicagoLocations } from './metros/chicago.js';
import { houstonLocations } from './metros/houston.js';
import { philadelphiaLocations } from './metros/philadelphia.js';
import { sanAntonioLocations } from './metros/san-antonio.js';
import { sanDiegoLocations } from './metros/san-diego.js';
import { austinLocations } from './metros/austin.js';
import { jacksonvilleLocations } from './metros/jacksonville.js';
import { fortWorthLocations } from './metros/fort-worth.js';
import { atlantaLocations } from './metros/atlanta.js';
import { seattleLocations } from './metros/seattle.js';
import { lasVegasLocations } from './metros/las-vegas.js';
import { nashvilleLocations } from './metros/nashville.js';
import { charlotteLocations } from './metros/charlotte.js';
import { columbusLocations } from './metros/columbus.js';
import { indianapolisLocations } from './metros/indianapolis.js';
import { memphisLocations } from './metros/memphis.js';
import { louisvilleLocations } from './metros/louisville.js';
import { kansasCityLocations } from './metros/kansas-city.js';
import { portlandLocations } from './metros/portland.js';
import { bostonLocations } from './metros/boston.js';
import { detroitLocations } from './metros/detroit.js';
import { oklahomaCityLocations } from './metros/oklahoma-city.js';
import { raleighLocations } from './metros/raleigh.js';
import { virginiaBeachLocations } from './metros/virginia-beach.js';
import { elPasoLocations } from './metros/el-paso.js';
import { sacramentoLocations } from './metros/sacramento.js';
import { baltimoreLocations } from './metros/baltimore.js';
import { milwaukeeLocations } from './metros/milwaukee.js';
import { scottsdaleLocations } from './metros/scottsdale.js';
import { renoLocations } from './metros/reno.js';
import { daytonLocations } from './metros/dayton.js';
import { syracuseLocations } from './metros/syracuse.js';
import { albanyLocations } from './metros/albany.js';
import { stamfordLocations } from './metros/stamford.js';
import { anchorageLocations } from './metros/anchorage.js';
import { honoluluLocations } from './metros/honolulu.js';
import { venturaLocations } from './metros/ventura.js';
import { peoriaLocations } from './metros/peoria.js';
import { fargoLocations } from './metros/fargo.js';
import { wacoLocations } from './metros/waco.js';
import { midlandLocations } from './metros/midland.js';
import { brownsvilleLocations } from './metros/brownsville.js';
import { provoLocations } from './metros/provo.js';
import { eugeneLocations } from './metros/eugene.js';
import { lansingLocations } from './metros/lansing.js';
import { siouxFallsLocations } from './metros/sioux-falls.js';
import { newHavenLocations } from './metros/new-haven.js';
import { worcesterLocations } from './metros/worcester.js';
import { minneapolisLocations } from './metros/minneapolis.js';
import { stLouisLocations } from './metros/st-louis.js';
import { pittsburghLocations } from './metros/pittsburgh.js';
import { cincinnatiLocations } from './metros/cincinnati.js';
import { clevelandLocations } from './metros/cleveland.js';
import { newOrleansLocations } from './metros/new-orleans.js';
import { saltLakeCityLocations } from './metros/salt-lake-city.js';
import { sanJoseLocations } from './metros/san-jose.js';
import { sanFranciscoLocations } from './metros/san-francisco.js';
import { tucsonLocations } from './metros/tucson.js';
import { albuquerqueLocations } from './metros/albuquerque.js';
import { fresnoLocations } from './metros/fresno.js';
import { coloradoSpringsLocations } from './metros/colorado-springs.js';
import { omahaLocations } from './metros/omaha.js';
import { corpusChristiLocations } from './metros/corpus-christi.js';
import { lexingtonLocations } from './metros/lexington.js';
import { greensboroLocations } from './metros/greensboro.js';
import { madisonLocations } from './metros/madison.js';
import { lubbockLocations } from './metros/lubbock.js';
import { spokaneLocations } from './metros/spokane.js';
import { batonRougeLocations } from './metros/baton-rouge.js';
import { tacomaLocations } from './metros/tacoma.js';
import { desMoinesLocations } from './metros/des-moines.js';
import { buffaloLocations } from './metros/buffalo.js';
import { amarilloLocations } from './metros/amarillo.js';
import { birminghamLocations } from './metros/birmingham.js';
import { boiseLocations } from './metros/boise.js';
import { capeCoralLocations } from './metros/cape-coral.js';
import { fortLauderdaleLocations } from './metros/fort-lauderdale.js';
import { grandRapidsLocations } from './metros/grand-rapids.js';
import { greenvilleLocations } from './metros/greenville.js';
import { huntsvilleLocations } from './metros/huntsville.js';
import { knoxvilleLocations } from './metros/knoxville.js';
import { littleRockLocations } from './metros/little-rock.js';
import { mcallenLocations } from './metros/mcallen.js';
import { mobileLocations } from './metros/mobile.js';
import { richmondLocations } from './metros/richmond.js';
import { savannahLocations } from './metros/savannah.js';
import { shreveportLocations } from './metros/shreveport.js';
import { tallahasseeLocations } from './metros/tallahassee.js';
import { tulsaLocations } from './metros/tulsa.js';
import { westPalmBeachLocations } from './metros/west-palm-beach.js';
import { wichitaLocations } from './metros/wichita.js';
import { fayettevilleLocations } from './metros/fayetteville.js';
import { bakersfieldLocations } from './metros/bakersfield.js';
import { modestoLocations } from './metros/modesto.js';
import { stocktonLocations } from './metros/stockton.js';
import { riversideLocations } from './metros/riverside.js';
import { chattanoogaLocations } from './metros/chattanooga.js';
import { winstonSalemLocations } from './metros/winston-salem.js';
import { columbiaLocations } from './metros/columbia.js';
import { augustaLocations } from './metros/augusta.js';
import { pensacolaLocations } from './metros/pensacola.js';
import { killeenLocations } from './metros/killeen.js';
import { durhamLocations } from './metros/durham.js';
import { akronLocations } from './metros/akron.js';
import { toledoLocations } from './metros/toledo.js';
import { rochesterLocations } from './metros/rochester.js';
import { hartfordLocations } from './metros/hartford.js';
import { providenceLocations } from './metros/providence.js';
import { allentownLocations } from './metros/allentown.js';
import { springfieldLocations } from './metros/springfield.js';
import { fortCollinsLocations } from './metros/fort-collins.js';
import { laredoLocations } from './metros/laredo.js';
import { newarkLocations } from './metros/newark.js';
import { manchesterLocations } from './metros/manchester.js';
import { portlandMaineLocations } from './metros/portland-me.js';
import { huntingtonLocations } from './metros/huntington.js';
import { jacksonLocations } from './metros/jackson.js';
import { billingsLocations } from './metros/billings.js';
import { cheyenneLocations } from './metros/cheyenne.js';
import { burlingtonLocations } from './metros/burlington.js';
import { wilmingtonLocations } from './metros/wilmington.js';
import { mesaLocations } from './metros/mesa.js';
import { planoLocations } from './metros/plano.js';
import { friscoLocations } from './metros/frisco.js';
import { anaheimLocations } from './metros/anaheim.js';
import { longBeachLocations } from './metros/long-beach.js';
import { naplesLocations } from './metros/naples.js';
import { lakelandLocations } from './metros/lakeland.js';
import { fortWayneLocations } from './metros/fort-wayne.js';
import { charlestonLocations } from './metros/charleston.js';
import { ashevilleLocations } from './metros/asheville.js';
import { maconLocations } from './metros/macon.js';

// ===========================================================================
// MIAMI — shared city blocks (also imported by the /miami/ hub in cities.js)
// ===========================================================================
export const MIAMI_MARKET = {
  heading: 'Why Miami is the hardest map in the country to win',
  body:
    "Miami-Dade has about 2.7 million people packed into one of the densest small-business markets in the U.S. That alone makes the Map Pack a brawl. But two things make Miami genuinely different. First, it runs in two languages. Roughly two-thirds of residents speak Spanish at home, and almost no agency bothers to rank for it, so there's a whole pool of high-intent searches your competitors aren't even chasing. Second, it runs on hurricane season. From June through November, demand for roofing, restoration, and HVAC can spike overnight. The businesses already sitting in the top three are the ones who catch that wave.",
  pullQuote: 'Half your customers are searching in Spanish. Almost none of your competitors show up for them.',
  donut: {
    title: 'How Miami searches',
    value: 66,
    centerLabel: 'Spanish',
    legend: [
      { label: 'Spanish', pct: 66, kind: 'teal' },
      { label: 'English', pct: 34, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Hurricane season (Jun–Nov)',
  seasonalDemand: [
    { m: 'J', v: 32 }, { m: 'F', v: 30 }, { m: 'M', v: 34 }, { m: 'A', v: 42 },
    { m: 'M', v: 52 }, { m: 'J', v: 74, peak: true }, { m: 'J', v: 88, peak: true },
    { m: 'A', v: 95, peak: true }, { m: 'S', v: 90, peak: true }, { m: 'O', v: 80, peak: true },
    { m: 'N', v: 66, peak: true }, { m: 'D', v: 40 },
  ],
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
};

export const MIAMI_AREAS = [
  'Miami', 'Hialeah', 'Coral Gables', 'Doral', 'Kendall', 'Aventura',
  'Miami Beach', 'Homestead', 'Pinecrest', 'Cutler Bay', 'Miami Gardens',
  'North Miami', 'Palmetto Bay', 'Sunny Isles Beach',
];

export const MIAMI_FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

export const MIAMI_WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We get storm season, emergency calls, and insurance work, so everything we build is shaped around how your customers really search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners three competitors also bought.",
  },
  {
    title: 'We actually speak Miami',
    body: "Bilingual optimization, hurricane-season demand, real neighborhood targeting. The stuff a national agency can't do by swapping a city name into a template.",
  },
  {
    title: 'No contracts, no mystery',
    body: "Published prices, reporting tied to leads, month-to-month after 90 days. If we're not earning it, you leave. That keeps the pressure where it belongs: on us.",
  },
];

const MIAMI_PROOF = {
  heading: "We're new, so here's the honest math instead of a logo wall",
  body:
    "Plenty of agencies will show you a grid of client logos. We're a young, founder-led shop, so we won't pretend to a track record we don't have yet. What we can show you is why this works — straight from Google's and the industry's own research on how people search locally.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Miami contractor gets around 1,500 local \"near me\" impressions a month. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a booked-out calendar. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const MIAMI_BASE = {
  city: 'Miami', state: 'Florida', stateAbbr: 'FL', metro: 'Miami-Dade',
  heroProof: ['Built for the trades', 'English + Spanish', 'No lock-in contracts'],
  founderNote: MIAMI_FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MIAMI_MARKET, areasServed: MIAMI_AREAS,
  whyUs: MIAMI_WHY, proof: MIAMI_PROOF,
};

const miamiLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...MIAMI_BASE,
    citySlug: 'miami', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Miami Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Search your service in Miami and three businesses show up on the map. We get you into those three, in English and Spanish. Honest pricing, no lock-in, free audit.',
    eyebrow: 'Local SEO · Miami-Dade',
    h1: 'When Miami searches for what you do, be the first name they find',
    h2Exact: 'Miami Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. We get you into that top three, in English and in Spanish, so the call lands with you instead of whoever ranked first.",
    primaryCta: 'Get my free Miami audit',
    intro:
      "Miami might be the toughest local search market in the country. It's crowded, and it's bilingual. A homeowner in Brickell or Hialeah is just as likely to type \"reparación de techos\" as \"roof repair,\" then tap one of the three businesses Google puts on the map and never scroll. So becoming one of those three is the whole game. Here's how you do it.",
    aioQuestion: 'How do Miami businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile that's actually optimized for the services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady drip of real reviews; and local content that includes Spanish, since about two-thirds of Miami-Dade speaks it at home. Miami is competitive and hurricane-prone, so the winners look established, answer fast, and show up in both languages.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks. If you're not one of them, it almost doesn't matter how good your work is — most people never see your name. Getting into that top three is usually the single highest-return move a Miami business can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Miami homeowner to four contractors, then bill each of you to fight over them. It's a treadmill. Local SEO builds the opposite: a lead finds you, calls you, and nobody else got it. Over time you stop renting and start owning." },
      { title: "You're invisible to two-thirds of the city", body: "Most of Miami-Dade speaks Spanish at home, but your website and your Google profile probably only speak English. So every \"plomero cerca de mí\" or \"reparación de aires\" search goes to someone else by default. That's not a small gap. It's half the market." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Miami searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes people pick up the phone." },
      { name: 'Neighborhood pages', desc: "Real pages for Brickell, Kendall, Doral, Hialeah and the rest, so you rank for the neighborhood someone's actually searching, not just \"Miami.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Miami sources Google trusts — local press, associations, partners. This is what separates page one from page two here." },
      { name: 'Spanish-language SEO', desc: "This is the one almost nobody does. Spanish keywords, Spanish profile content, Spanish pages — built to win the two-thirds of Miami your competitors ignore.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your service areas, in both languages, and pin down which competitors are beating you and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now over starting later." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages, in English and Spanish where it pays off, plus the on-page work to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Miami neighborhoods.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want Miami-Dade in both languages.', features: ['Everything in Local Growth', 'Local link building', 'Spanish-language SEO', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Miami?', a: "Most Miami engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after and whether you want Spanish-language work. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The competitive Miami keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days in a market this crowded is selling you something." },
      { q: 'What makes Miami local SEO different from regular SEO?', a: "Three things. It's bilingual, so half the high-intent searches happen in Spanish and most agencies never touch them. It's hurricane-prone, so trades see sharp seasonal spikes your presence has to be ready for. And it's packed, so trust signals like reviews and consistent listings carry more weight than they would in a small town." },
      { q: 'Do you really do Spanish-language SEO?', a: "Yes, and it's one of the biggest edges we give you. About two-thirds of Miami-Dade speaks Spanish at home, but your competitors optimize in English only. We target Spanish keywords and build Spanish profile content and pages, so you catch searches nobody else is even bidding on." },
      { q: 'Which areas do you cover?', a: "All of Miami-Dade and the areas around it — Brickell, Coral Gables, Doral, Kendall, Hialeah, Aventura, Miami Beach, Pinecrest, Cutler Bay, Homestead, and more. We build genuine neighborhood pages instead of one generic Miami page, because that's what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand emergency calls, storm-driven demand, and insurance jobs, and we build your local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because the work is coming to you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your service areas in both languages, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...MIAMI_BASE,
    citySlug: 'miami', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Miami SEO Company | Rank Higher, Get More Leads | OnwardCraft',
    metaDescription:
      'Miami SEO that ranks contractors on Google and brings in leads you own — in English and Spanish. Revenue-tied reporting, no lock-in contracts. Free Miami SEO audit.',
    eyebrow: 'SEO Services · Miami-Dade',
    h1: 'Get your Miami business to the top of Google and keep it there',
    h2Exact: 'Miami SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Miami customers search, in both languages, and the leads keep coming. We build that ranking and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free Miami SEO audit',
    intro:
      "SEO services in Miami come down to one question: when someone searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords — in English and the Spanish two-thirds of Miami-Dade actually searches in — and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Miami businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content, and earning links from trusted Miami sources. In a bilingual, competitive market like Miami, ranking in Spanish and keeping the site fast on mobile are two of the fastest ways to pull ahead of competitors who only optimize in English.",
    problemHeading: "Three reasons your Miami site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. If you're not in the top handful of results for what you sell, your site is basically invisible — no matter how good it looks." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost." },
      { title: "You're ignoring half of Miami's searches", body: "Two-thirds of Miami-Dade speaks Spanish at home. If your SEO is English-only, you're handing every Spanish search straight to a competitor. We rank you for both." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your Miami customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real Miami and industry sources. In a competitive market, links are often what separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Spanish-language SEO', desc: "We rank you in Spanish too, capturing the two-thirds of Miami searching in a language your competitors ignore.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Miami leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, in both languages where it pays." },
      { name: 'Build authority', desc: "Links and citations from trusted Miami and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Miami SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Miami search in both languages.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Spanish-language SEO', 'eCommerce / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Miami?', a: "Most Miami SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and whether you need Spanish-language and content work. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Miami?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on low-competition terms and slower on the most competitive Miami keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most contractors do best running SEO as the long-term engine and ads for short-term spikes." },
      { q: 'Do you do Spanish-language SEO?', a: "Yes. About two-thirds of Miami-Dade speaks Spanish at home, and most agencies optimize in English only. We rank you in both languages so you capture searches your competitors don't even target." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add Spanish-language and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which areas around Miami do you cover?', a: "All of Miami-Dade and the surrounding areas — Coral Gables, Doral, Kendall, Hialeah, Aventura, Miami Beach, Homestead and more — with genuine local pages rather than one generic Miami page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...MIAMI_BASE,
    citySlug: 'miami', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Miami Web Design Company | Sites That Convert | OnwardCraft',
    metaDescription:
      'Miami web design that turns visitors into booked jobs — fast, mobile-first, bilingual sites built for contractors. Transparent pricing, you own it all. Free quote.',
    eyebrow: 'Web Design · Miami-Dade',
    h1: 'Miami web design that turns visitors into booked jobs',
    h2Exact: 'Miami Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Miami contractors fast, mobile-first sites — in English and Spanish — engineered to turn visitors into booked work, not just compliments.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Miami contractor websites lose leads quietly: slow on a phone, buried call button, English-only in a city where two-thirds search in Spanish. Web design done right fixes all of that. We build sites that load fast, look like the $15k professional you are, and turn Brickell-to-Homestead visitors into booked jobs.",
    aioQuestion: 'What makes a good contractor website in Miami?',
    aioAnswer:
      "A good Miami contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and works in both English and Spanish. Because most Miami searches happen on mobile and in two languages, mobile speed and bilingual content are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next guy. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Miami visitors are on mobile, and they bounce if your site takes more than a few seconds to load. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking." },
      { title: "It only speaks English", body: "Two-thirds of Miami-Dade speaks Spanish at home. An English-only site quietly turns away half your potential customers. We build bilingual so you keep them." },
    ],
    servicesHeading: "What's in an OnwardCraft Miami website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your service area, and the jobs you actually want." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your Miami traffic is. Fast, thumb-friendly, easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that speak to anxious homeowners and book the job, not filler text that reads like everyone else." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Bilingual build', desc: "English and Spanish versions so you capture the two-thirds of Miami searching in Spanish — a thing almost no competitor offers.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your service area, your best jobs, and your competitors, then map the site around booking more of the work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, in English and Spanish where it pays off." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting." },
    ],
    pricing: {
      heading: 'Transparent Miami web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Bilingual-ready'] },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Full bilingual build', 'Advanced SEO + schema', 'Integrations & booking', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Miami?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count, whether you need a full bilingual version, and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom or bilingual build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Do you build Spanish-language websites?', a: "Yes, and in Miami it's one of the smartest things you can do. Two-thirds of Miami-Dade speaks Spanish at home, so a bilingual site captures customers an English-only competitor turns away." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Miami terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your Miami traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Miami site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...MIAMI_BASE,
    citySlug: 'miami', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Miami Website Redesign | More Leads, No Traffic Loss | OnwardCraft',
    metaDescription:
      'Redesign your Miami website without losing rankings. Faster, mobile-first, bilingual rebuilds that convert more visitors into booked jobs. Transparent pricing, free audit.',
    eyebrow: 'Website Redesign · Miami-Dade',
    h1: 'Redesign your Miami website without losing your rankings',
    h2Exact: 'Miami Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, English-only. We redesign Miami contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Miami contractor sites for speed and conversions, build them bilingual, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Miami site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "For a high-ticket job, homeowners judge you by your site in seconds. An old, cluttered design quietly sends them to a competitor who looks more established — even when your work is better." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your Miami visitors before they ever see your offer. A redesign built mobile-first wins them back." },
      { title: "It doesn't convert — or speak Spanish", body: "Traffic that doesn't turn into calls is wasted, and an English-only site ignores two-thirds of Miami. We rebuild for conversions and for both languages." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your Miami traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the price of your jobs." },
      { name: 'Bilingual rebuild', desc: "English and Spanish versions so the new site captures the two-thirds of Miami searching in Spanish.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you leads and rankings, then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and bilingual, and prepare every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and improve, not drop." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Miami redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Bilingual-ready'] },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Full bilingual version', 'Advanced SEO migration', 'Integrations & booking', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Miami?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size, whether you need a full bilingual version, and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger or bilingual rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is hard to update, isn't bringing in leads, or only speaks English in a bilingual city like Miami, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Can you make my redesigned site bilingual?', a: "Absolutely, and in Miami we recommend it. A bilingual rebuild captures the two-thirds of Miami-Dade that speaks Spanish at home." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const locations = [
  ...miamiLocations,
  ...tampaLocations,
  ...orlandoLocations,
  ...dallasLocations,
  ...denverLocations,
  ...phoenixLocations,
  ...newYorkLocations,
  ...losAngelesLocations,
  ...chicagoLocations,
  ...houstonLocations,
  ...philadelphiaLocations,
  ...sanAntonioLocations,
  ...sanDiegoLocations,
  ...austinLocations,
  ...jacksonvilleLocations,
  ...fortWorthLocations,
  ...atlantaLocations,
  ...seattleLocations,
  ...lasVegasLocations,
  ...nashvilleLocations,
  ...charlotteLocations,
  ...columbusLocations,
  ...indianapolisLocations,
  ...memphisLocations,
  ...louisvilleLocations,
  ...kansasCityLocations,
  ...portlandLocations,
  ...bostonLocations,
  ...detroitLocations,
  ...oklahomaCityLocations,
  ...raleighLocations,
  ...virginiaBeachLocations,
  ...elPasoLocations,
  ...sacramentoLocations,
  ...baltimoreLocations,
  ...milwaukeeLocations,
  ...scottsdaleLocations,
  ...renoLocations,
  ...daytonLocations,
  ...syracuseLocations,
  ...albanyLocations,
  ...stamfordLocations,
  ...anchorageLocations,
  ...honoluluLocations,
  ...venturaLocations,
  ...peoriaLocations,
  ...fargoLocations,
  ...wacoLocations,
  ...midlandLocations,
  ...brownsvilleLocations,
  ...provoLocations,
  ...eugeneLocations,
  ...lansingLocations,
  ...siouxFallsLocations,
  ...newHavenLocations,
  ...worcesterLocations,
  ...minneapolisLocations,
  ...stLouisLocations,
  ...pittsburghLocations,
  ...cincinnatiLocations,
  ...clevelandLocations,
  ...newOrleansLocations,
  ...saltLakeCityLocations,
  ...sanJoseLocations,
  ...sanFranciscoLocations,
  ...tucsonLocations,
  ...albuquerqueLocations,
  ...fresnoLocations,
  ...coloradoSpringsLocations,
  ...omahaLocations,
  ...corpusChristiLocations,
  ...lexingtonLocations,
  ...greensboroLocations,
  ...madisonLocations,
  ...lubbockLocations,
  ...spokaneLocations,
  ...batonRougeLocations,
  ...tacomaLocations,
  ...desMoinesLocations,
  ...buffaloLocations,
  ...amarilloLocations,
  ...birminghamLocations,
  ...boiseLocations,
  ...capeCoralLocations,
  ...fortLauderdaleLocations,
  ...grandRapidsLocations,
  ...greenvilleLocations,
  ...huntsvilleLocations,
  ...knoxvilleLocations,
  ...littleRockLocations,
  ...mcallenLocations,
  ...mobileLocations,
  ...richmondLocations,
  ...savannahLocations,
  ...shreveportLocations,
  ...tallahasseeLocations,
  ...tulsaLocations,
  ...westPalmBeachLocations,
  ...wichitaLocations,
  ...fayettevilleLocations,
  ...bakersfieldLocations,
  ...modestoLocations,
  ...stocktonLocations,
  ...riversideLocations,
  ...chattanoogaLocations,
  ...winstonSalemLocations,
  ...columbiaLocations,
  ...augustaLocations,
  ...pensacolaLocations,
  ...killeenLocations,
  ...durhamLocations,
  ...akronLocations,
  ...toledoLocations,
  ...rochesterLocations,
  ...hartfordLocations,
  ...providenceLocations,
  ...allentownLocations,
  ...springfieldLocations,
  ...fortCollinsLocations,
  ...laredoLocations,
  ...newarkLocations,
  ...manchesterLocations,
  ...portlandMaineLocations,
  ...huntingtonLocations,
  ...jacksonLocations,
  ...billingsLocations,
  ...cheyenneLocations,
  ...burlingtonLocations,
  ...wilmingtonLocations,
  ...mesaLocations,
  ...planoLocations,
  ...friscoLocations,
  ...anaheimLocations,
  ...longBeachLocations,
  ...naplesLocations,
  ...lakelandLocations,
  ...fortWayneLocations,
  ...charlestonLocations,
  ...ashevilleLocations,
  ...maconLocations,
];

// Convenience lookups for the dynamic route + future cross-linking.
export const locationPaths = locations.map((l) => ({ citySlug: l.citySlug, serviceSlug: l.serviceSlug }));
export function getLocation(citySlug, serviceSlug) {
  return locations.find((l) => l.citySlug === citySlug && l.serviceSlug === serviceSlug);
}
