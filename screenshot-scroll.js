const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:4321/');
  await page.waitForTimeout(2000);
  
  // Scroll to services
  await page.evaluate(() => window.scrollTo(0, 900));
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'screenshot-services.png' });
  
  // Scroll to results
  await page.evaluate(() => window.scrollTo(0, 1800));
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'screenshot-results.png' });
  
  // Scroll to case studies
  await page.evaluate(() => window.scrollTo(0, 2800));
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'screenshot-cases.png' });
  
  // Scroll to industries
  await page.evaluate(() => window.scrollTo(0, 5000));
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'screenshot-industries.png' });
  
  await browser.close();
})();
