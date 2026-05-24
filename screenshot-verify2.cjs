const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  await page.goto('http://localhost:4323/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(3000);
  
  // Hero (already verified, skip)
  
  // Showcase section (dark)
  await page.evaluate(() => {
    const el = document.getElementById('showcase');
    if (el) el.scrollIntoView({ block: 'start' });
  });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'screenshot-showcase2.png', fullPage: false });
  
  // Process section (light)
  await page.evaluate(() => {
    const el = document.getElementById('process');
    if (el) el.scrollIntoView({ block: 'start' });
  });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'screenshot-process2.png', fullPage: false });
  
  // Pricing section (light)
  await page.evaluate(() => {
    const el = document.getElementById('pricing');
    if (el) el.scrollIntoView({ block: 'start' });
  });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'screenshot-pricing2.png', fullPage: false });
  
  // CTA section (dark)
  await page.evaluate(() => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ block: 'start' });
  });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'screenshot-cta2.png', fullPage: false });
  
  // Full page
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'screenshot-full.png', fullPage: true });
  
  await browser.close();
  console.log('Screenshots done');
})();
