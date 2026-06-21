// City hub pages — rendered at /[city]/ (e.g. /miami/). One overview page per
// metro that frames the local market and links out to that city's 4 service
// pages in locations.js. Reuses the per-city shared blocks so the hub and the
// service pages stay in sync. Build hubs with the `onward-local-page` skill.
//
// HONESTY RULE applies: no fabricated clients/reviews/results; no Review schema.

import { MIAMI_MARKET, MIAMI_AREAS, MIAMI_FOUNDER, MIAMI_WHY } from './locations.js';
import { tampaCity } from './metros/tampa.js';
import { orlandoCity } from './metros/orlando.js';
import { dallasCity } from './metros/dallas.js';
import { denverCity } from './metros/denver.js';
import { phoenixCity } from './metros/phoenix.js';
import { newYorkCity } from './metros/new-york.js';
import { losAngelesCity } from './metros/los-angeles.js';
import { chicagoCity } from './metros/chicago.js';
import { houstonCity } from './metros/houston.js';
import { philadelphiaCity } from './metros/philadelphia.js';
import { sanAntonioCity } from './metros/san-antonio.js';
import { sanDiegoCity } from './metros/san-diego.js';
import { austinCity } from './metros/austin.js';
import { jacksonvilleCity } from './metros/jacksonville.js';
import { fortWorthCity } from './metros/fort-worth.js';
import { atlantaCity } from './metros/atlanta.js';
import { seattleCity } from './metros/seattle.js';
import { lasVegasCity } from './metros/las-vegas.js';
import { nashvilleCity } from './metros/nashville.js';
import { charlotteCity } from './metros/charlotte.js';
import { columbusCity } from './metros/columbus.js';
import { indianapolisCity } from './metros/indianapolis.js';
import { memphisCity } from './metros/memphis.js';
import { louisvilleCity } from './metros/louisville.js';
import { kansasCityCity } from './metros/kansas-city.js';
import { portlandCity } from './metros/portland.js';
import { bostonCity } from './metros/boston.js';
import { detroitCity } from './metros/detroit.js';
import { oklahomaCityCity } from './metros/oklahoma-city.js';
import { raleighCity } from './metros/raleigh.js';
import { virginiaBeachCity } from './metros/virginia-beach.js';
import { elPasoCity } from './metros/el-paso.js';
import { sacramentoCity } from './metros/sacramento.js';
import { baltimoreCity } from './metros/baltimore.js';
import { milwaukeeCity } from './metros/milwaukee.js';
import { scottsdaleCity } from './metros/scottsdale.js';
import { renoCity } from './metros/reno.js';
import { daytonCity } from './metros/dayton.js';
import { syracuseCity } from './metros/syracuse.js';
import { albanyCity } from './metros/albany.js';
import { stamfordCity } from './metros/stamford.js';
import { anchorageCity } from './metros/anchorage.js';
import { honoluluCity } from './metros/honolulu.js';
import { venturaCity } from './metros/ventura.js';
import { peoriaCity } from './metros/peoria.js';
import { fargoCity } from './metros/fargo.js';
import { wacoCity } from './metros/waco.js';
import { midlandCity } from './metros/midland.js';
import { brownsvilleCity } from './metros/brownsville.js';
import { provoCity } from './metros/provo.js';
import { eugeneCity } from './metros/eugene.js';
import { lansingCity } from './metros/lansing.js';
import { siouxFallsCity } from './metros/sioux-falls.js';
import { newHavenCity } from './metros/new-haven.js';
import { worcesterCity } from './metros/worcester.js';
import { minneapolisCity } from './metros/minneapolis.js';
import { stLouisCity } from './metros/st-louis.js';
import { pittsburghCity } from './metros/pittsburgh.js';
import { cincinnatiCity } from './metros/cincinnati.js';
import { clevelandCity } from './metros/cleveland.js';
import { newOrleansCity } from './metros/new-orleans.js';
import { saltLakeCityCity } from './metros/salt-lake-city.js';
import { sanJoseCity } from './metros/san-jose.js';
import { sanFranciscoCity } from './metros/san-francisco.js';
import { tucsonCity } from './metros/tucson.js';
import { albuquerqueCity } from './metros/albuquerque.js';
import { fresnoCity } from './metros/fresno.js';
import { coloradoSpringsCity } from './metros/colorado-springs.js';
import { omahaCity } from './metros/omaha.js';
import { corpusChristiCity } from './metros/corpus-christi.js';
import { lexingtonCity } from './metros/lexington.js';
import { greensboroCity } from './metros/greensboro.js';
import { madisonCity } from './metros/madison.js';
import { lubbockCity } from './metros/lubbock.js';
import { spokaneCity } from './metros/spokane.js';
import { batonRougeCity } from './metros/baton-rouge.js';
import { tacomaCity } from './metros/tacoma.js';
import { desMoinesCity } from './metros/des-moines.js';
import { buffaloCity } from './metros/buffalo.js';
import { amarilloCity } from './metros/amarillo.js';
import { birminghamCity } from './metros/birmingham.js';
import { boiseCity } from './metros/boise.js';
import { capeCoralCity } from './metros/cape-coral.js';
import { fortLauderdaleCity } from './metros/fort-lauderdale.js';
import { grandRapidsCity } from './metros/grand-rapids.js';
import { greenvilleCity } from './metros/greenville.js';
import { huntsvilleCity } from './metros/huntsville.js';
import { knoxvilleCity } from './metros/knoxville.js';
import { littleRockCity } from './metros/little-rock.js';
import { mcallenCity } from './metros/mcallen.js';
import { mobileCity } from './metros/mobile.js';
import { richmondCity } from './metros/richmond.js';
import { savannahCity } from './metros/savannah.js';
import { shreveportCity } from './metros/shreveport.js';
import { tallahasseeCity } from './metros/tallahassee.js';
import { tulsaCity } from './metros/tulsa.js';
import { westPalmBeachCity } from './metros/west-palm-beach.js';
import { wichitaCity } from './metros/wichita.js';
import { fayettevilleCity } from './metros/fayetteville.js';
import { bakersfieldCity } from './metros/bakersfield.js';
import { modestoCity } from './metros/modesto.js';
import { stocktonCity } from './metros/stockton.js';
import { riversideCity } from './metros/riverside.js';
import { chattanoogaCity } from './metros/chattanooga.js';
import { winstonSalemCity } from './metros/winston-salem.js';
import { columbiaCity } from './metros/columbia.js';
import { augustaCity } from './metros/augusta.js';
import { pensacolaCity } from './metros/pensacola.js';
import { killeenCity } from './metros/killeen.js';
import { durhamCity } from './metros/durham.js';
import { akronCity } from './metros/akron.js';
import { toledoCity } from './metros/toledo.js';
import { rochesterCity } from './metros/rochester.js';
import { hartfordCity } from './metros/hartford.js';
import { providenceCity } from './metros/providence.js';
import { allentownCity } from './metros/allentown.js';
import { springfieldCity } from './metros/springfield.js';
import { fortCollinsCity } from './metros/fort-collins.js';
import { laredoCity } from './metros/laredo.js';

const miamiCity = {
    citySlug: 'miami', city: 'Miami', state: 'Florida', stateAbbr: 'FL', metro: 'Miami-Dade',

    titleTag: 'Miami Marketing for Contractors | Web, SEO & Leads | OnwardCraft',
    metaDescription:
      'Web design, SEO, and local SEO for Miami contractors — in English and Spanish. Get found, get booked, and own your leads instead of renting them. Free Miami audit.',

    eyebrow: 'Miami · Web Design, SEO & Lead Generation',
    h1: 'Marketing that gets Miami contractors found and booked',
    h2Exact: 'Miami Marketing Agency for Contractors',
    heroSubhead:
      "Websites, SEO, and local SEO built for Miami's bilingual, hurricane-driven market. One team to get you ranking, converting, and off the rented-lead treadmill — in English and Spanish.",
    heroProof: ['Built for the trades', 'English + Spanish', 'No lock-in contracts'],
    primaryCta: 'Get my free Miami audit',

    intro:
      "If you run a contracting business in Miami, you're fighting for attention in one of the most competitive and most bilingual markets in the country. Winning here takes three things working together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack — all in English and Spanish. Here's how we help Miami contractors do exactly that.",
    aioQuestion: 'How do Miami contractors get more leads online?',
    aioAnswer:
      "Miami contractors get more leads by combining a fast, mobile-first, bilingual website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack. Because two-thirds of Miami-Dade speaks Spanish and demand spikes during hurricane season, the contractors who show up in both languages and look established win the most work.",

    localMarket: MIAMI_MARKET,
    areasServed: MIAMI_AREAS,
    founderNote: MIAMI_FOUNDER,
    founderName: 'The OnwardCraft team',
    whyUs: MIAMI_WHY,

    // The 4 services this city offers — cards link to /[citySlug]/[serviceSlug]/
    services: [
      {
        service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
        blurb: "Get into the top three businesses Google pins to the map when Miami searches \"near me\" — in English and Spanish. The single highest-return move for most local businesses.",
      },
      {
        service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
        blurb: "Rank for the money keywords your customers actually search, build an asset you own instead of renting traffic from ads, and measure it in leads, not vanity traffic.",
      },
      {
        service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
        blurb: "Fast, mobile-first, bilingual websites engineered to turn visitors into booked jobs — not brochures that just sit there and look nice.",
      },
      {
        service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
        blurb: "Rebuild an outdated site for speed and conversions, and migrate it carefully so you keep every bit of ranking you've already earned.",
      },
    ],

    faqs: [
      { q: 'What marketing services do you offer in Miami?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads. Everything is available in English and Spanish." },
      { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors — so we understand emergency calls, storm-driven demand, and insurance work." },
      { q: 'Do you offer services in Spanish?', a: "Yes, and in Miami it's a major advantage. About two-thirds of Miami-Dade speaks Spanish at home, but most agencies optimize in English only. We build and rank you in both languages." },
      { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
      { q: 'Which Miami areas do you serve?', a: "All of Miami-Dade and the surrounding areas — Brickell, Coral Gables, Doral, Kendall, Hialeah, Aventura, Miami Beach, Homestead and more." },
      { q: 'Where should I start?', a: "Start with a free Miami audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a plan." },
    ],
};

export const cities = [
  miamiCity, tampaCity, orlandoCity, dallasCity, denverCity, phoenixCity,
  newYorkCity, losAngelesCity, chicagoCity, houstonCity, philadelphiaCity,
  sanAntonioCity, sanDiegoCity, austinCity, jacksonvilleCity, fortWorthCity,
  atlantaCity, seattleCity, lasVegasCity, nashvilleCity, charlotteCity,
  columbusCity, indianapolisCity, memphisCity, louisvilleCity, kansasCityCity,
  portlandCity, bostonCity, detroitCity, oklahomaCityCity, raleighCity,
  virginiaBeachCity, elPasoCity, sacramentoCity, baltimoreCity, milwaukeeCity,
  scottsdaleCity, renoCity, daytonCity, syracuseCity, albanyCity,
  stamfordCity, anchorageCity, honoluluCity, venturaCity, peoriaCity,
  fargoCity, wacoCity, midlandCity, brownsvilleCity, provoCity,
  eugeneCity, lansingCity, siouxFallsCity, newHavenCity, worcesterCity,
  minneapolisCity, stLouisCity, pittsburghCity, cincinnatiCity, clevelandCity,
  newOrleansCity, saltLakeCityCity, sanJoseCity, sanFranciscoCity, tucsonCity,
  albuquerqueCity, fresnoCity, coloradoSpringsCity, omahaCity, corpusChristiCity,
  lexingtonCity, greensboroCity, madisonCity, lubbockCity, spokaneCity,
  batonRougeCity, tacomaCity, desMoinesCity, buffaloCity,
  amarilloCity, birminghamCity, boiseCity, capeCoralCity, fortLauderdaleCity,
  grandRapidsCity, greenvilleCity, huntsvilleCity, knoxvilleCity, littleRockCity,
  mcallenCity, mobileCity, richmondCity, savannahCity, shreveportCity,
  tallahasseeCity, tulsaCity, westPalmBeachCity, wichitaCity,
  fayettevilleCity, bakersfieldCity, modestoCity, stocktonCity, riversideCity,
  chattanoogaCity, winstonSalemCity, columbiaCity, augustaCity, pensacolaCity,
  killeenCity, durhamCity, akronCity, toledoCity, rochesterCity,
  hartfordCity, providenceCity, allentownCity, springfieldCity, fortCollinsCity,
  laredoCity,
];

export const cityPaths = cities.map((c) => ({ citySlug: c.citySlug }));
export function getCity(citySlug) {
  return cities.find((c) => c.citySlug === citySlug);
}
