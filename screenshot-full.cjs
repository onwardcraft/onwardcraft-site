const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:4326/');
  await page.waitForTimeout(2000);
  
  // Services cards visible
  await page.evaluate(() => window.scrollTo(0, 1300));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/Users/ritik/Personal/onwardcraft/screenshot-svc-cards.png' });
  
  // Results full
  await page.evaluate(() => window.scrollTo(0, 3200));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/Users/ritik/Personal/onwardcraft/screenshot-results-full.png' });
  
  // Process + Showcase
  await page.evaluate(() => window.scrollTo(0, 5200));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/Users/ritik/Personal/onwardcraft/screenshot-process-showcase.png' });
  
  // Testimonials + Industries
  await page.evaluate(() => window.scrollTo(0, 7200));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/Users/ritik/Personal/onwardcraft/screenshot-tm-ind.png' });
  
  // Pricing + CTA + Footer
  await page.evaluate(() => window.scrollTo(0, 9000));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/Users/ritik/Personal/onwardcraft/screenshot-bottom.png' });
  
  console.log('done');
  await browser.close();
})();
