import { chromium } from 'playwright';
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:4321/');
  await page.waitForTimeout(3000);
  await page.evaluate(() => {
    document.querySelectorAll('.reveal, .stagger-item').forEach(el => el.classList.add('revealed'));
  });
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'screenshot-final.png', fullPage: true });
  await browser.close();
})();
