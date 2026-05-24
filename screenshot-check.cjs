const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:4326/');
  await page.waitForTimeout(3000);
  await page.screenshot({ path: '/Users/ritik/Personal/onwardcraft/screenshot-services-results.png', fullPage: false });
  console.log('done');
  await browser.close();
})();
