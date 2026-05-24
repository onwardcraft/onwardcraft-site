const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  await page.goto('http://localhost:4323/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  
  // Hero
  await page.screenshot({ path: 'screenshot-hero.png', fullPage: false });
  
  // Scroll to TrustBar
  await page.evaluate(() => window.scrollTo(0, 700));
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'screenshot-trustbar.png', fullPage: false });
  
  // Scroll to Services
  await page.evaluate(() => window.scrollTo(0, 1400));
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'screenshot-services.png', fullPage: false });
  
  // Scroll to Results
  await page.evaluate(() => window.scrollTo(0, 2400));
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'screenshot-results.png', fullPage: false });
  
  // Scroll to CaseStudies
  await page.evaluate(() => window.scrollTo(0, 3400));
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'screenshot-cases.png', fullPage: false });
  
  // Scroll to Process
  await page.evaluate(() => window.scrollTo(0, 5000));
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'screenshot-process.png', fullPage: false });
  
  // Scroll to Showcase
  await page.evaluate(() => window.scrollTo(0, 6200));
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'screenshot-showcase.png', fullPage: false });
  
  // Scroll to Testimonials
  await page.evaluate(() => window.scrollTo(0, 7200));
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'screenshot-testimonials.png', fullPage: false });
  
  // Scroll to Industries
  await page.evaluate(() => window.scrollTo(0, 8300));
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'screenshot-industries.png', fullPage: false });
  
  // Scroll to Pricing
  await page.evaluate(() => window.scrollTo(0, 9500));
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'screenshot-pricing.png', fullPage: false });
  
  // Scroll to CTA
  await page.evaluate(() => window.scrollTo(0, 10800));
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'screenshot-cta.png', fullPage: false });
  
  await browser.close();
  console.log('Screenshots done');
})();
