const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:4326/');
  await page.waitForTimeout(2000);
  
  await page.evaluate(() => window.scrollTo(0, 1300));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/Users/ritik/Personal/onwardcraft/ss-svc-final.png' });
  
  await page.evaluate(() => window.scrollTo(0, 6400));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/Users/ritik/Personal/onwardcraft/ss-feat-final.png' });
  
  console.log('done');
  await browser.close();
})();
