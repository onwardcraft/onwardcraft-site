const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  await page.goto('http://localhost:4323/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(3000);
  
  // Showcase
  await page.evaluate(() => {
    const el = document.getElementById('showcase');
    if (el) el.scrollIntoView({ block: 'start' });
  });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'screenshot-showcase3.png', fullPage: false });
  
  // Testimonials
  await page.evaluate(() => {
    const els = document.querySelectorAll('.testimonials-section');
    if (els.length) els[0].scrollIntoView({ block: 'start' });
  });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'screenshot-testimonials3.png', fullPage: false });
  
  // Full page
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'screenshot-full2.png', fullPage: true });
  
  await browser.close();
  console.log('Done');
})();
