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

export const cities = [miamiCity, tampaCity, orlandoCity, dallasCity, denverCity, phoenixCity];

export const cityPaths = cities.map((c) => ({ citySlug: c.citySlug }));
export function getCity(citySlug) {
  return cities.find((c) => c.citySlug === citySlug);
}
