const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:4326/');
  await page.waitForTimeout(2000);
  
  await page.evaluate(() => window.scrollTo(0, 1400));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/Users/ritik/Personal/onwardcraft/ss-services.png' });
  
  await page.evaluate(() => window.scrollTo(0, 5800));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/Users/ritik/Personal/onwardcraft/ss-showcase.png' });
  
  console.log('done');
  await browser.close();
})();
