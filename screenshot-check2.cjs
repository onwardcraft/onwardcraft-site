const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:4326/');
  await page.waitForTimeout(2000);
  
  // Services cards
  await page.evaluate(() => window.scrollTo(0, 1100));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/Users/ritik/Personal/onwardcraft/screenshot-services2.png' });
  
  // Results section
  await page.evaluate(() => window.scrollTo(0, 2800));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/Users/ritik/Personal/onwardcraft/screenshot-results2.png' });
  
  console.log('done');
  await browser.close();
})();
