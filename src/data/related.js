// Internal-linking helper: builds a cross-metro link mesh so the 900+ location
// pages don't all funnel discovery through a single /locations/ hub. Given a
// city, returns nearby cities (same state first, then same US region) so every
// service page links sideways to the same service in neighbouring metros and
// every hub links to neighbouring hubs. This shortens crawl depth and raises
// the inbound-link count per page, which is half the indexation fix.

import { cities } from './cities.js';

// US Census-style regions, keyed by state abbreviation. Used only to pick
// geographically plausible "nearby" cities when a state has few/no siblings.
const REGION = {
  CT: 'NE', ME: 'NE', MA: 'NE', NH: 'NE', RI: 'NE', VT: 'NE',
  NJ: 'NE', NY: 'NE', PA: 'NE',
  IL: 'MW', IN: 'MW', MI: 'MW', OH: 'MW', WI: 'MW',
  IA: 'MW', KS: 'MW', MN: 'MW', MO: 'MW', NE: 'MW', ND: 'MW', SD: 'MW',
  DE: 'SE', FL: 'SE', GA: 'SE', MD: 'SE', NC: 'SE', SC: 'SE', VA: 'SE',
  DC: 'SE', WV: 'SE', AL: 'SE', KY: 'SE', MS: 'SE', TN: 'SE',
  AR: 'SW', LA: 'SW', OK: 'SW', TX: 'SW', AZ: 'SW', NM: 'SW',
  AK: 'W', CA: 'W', CO: 'W', HI: 'W', ID: 'W', MT: 'W',
  NV: 'W', OR: 'W', UT: 'W', WA: 'W', WY: 'W',
};

const regionOf = (abbr) => REGION[abbr] || 'US';

// Up to `n` cities near `citySlug`: same state first (alphabetical), then same
// region (alphabetical). Falls back to fewer rather than linking across the
// country, so the "nearby" framing stays honest.
export function nearbyCities(citySlug, n = 6) {
  const self = cities.find((c) => c.citySlug === citySlug);
  if (!self) return [];
  const others = cities.filter((c) => c.citySlug !== citySlug);
  const byName = (a, b) => a.city.localeCompare(b.city);

  const sameState = others
    .filter((c) => c.stateAbbr === self.stateAbbr)
    .sort(byName);
  const sameRegion = others
    .filter((c) => c.stateAbbr !== self.stateAbbr && regionOf(c.stateAbbr) === regionOf(self.stateAbbr))
    .sort(byName);

  return [...sameState, ...sameRegion].slice(0, n);
}
