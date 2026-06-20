// Generates public/og-image.png (1200x630) — branded social share card.
// Run: node scripts/make-og-image.mjs
import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const out = path.resolve(__dirname, '../public/og-image.png');

const html = `<!doctype html><html><head><meta charset="utf-8">
<link href="https://api.fontshare.com/v2/css?f[]=satoshi@500,700,900&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body { width:1200px; height:630px; font-family:'Inter',sans-serif;
    background:
      radial-gradient(900px 500px at 80% -10%, rgba(6,214,160,0.18), transparent 60%),
      radial-gradient(700px 500px at 0% 120%, rgba(255,184,77,0.10), transparent 55%),
      #080C14;
    color:#F8FAFC; padding:80px; position:relative; overflow:hidden; }
  .grid { position:absolute; inset:0;
    background-image:linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px);
    background-size:48px 48px; }
  .inner { position:relative; height:100%; display:flex; flex-direction:column; justify-content:space-between; }
  .brand { display:flex; align-items:center; gap:14px; font-family:'Satoshi',sans-serif; font-weight:900; font-size:30px; letter-spacing:-0.02em; }
  .dot { width:16px; height:16px; border-radius:50%; background:linear-gradient(135deg,#06D6A0,#14B8A6); box-shadow:0 0 24px rgba(6,214,160,0.7); }
  .eyebrow { font-family:'Satoshi',sans-serif; font-weight:700; font-size:18px; letter-spacing:0.18em; text-transform:uppercase; color:#06D6A0; margin-bottom:24px; }
  h1 { font-family:'Satoshi',sans-serif; font-weight:900; font-size:74px; line-height:1.03; letter-spacing:-0.03em; max-width:980px; }
  h1 .g { background:linear-gradient(135deg,#06D6A0 0%,#14B8A6 100%); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; }
  .foot { display:flex; align-items:center; gap:20px; font-size:22px; color:rgba(248,250,252,0.75); font-weight:500; }
  .pill { padding:8px 18px; border:1px solid rgba(6,214,160,0.3); border-radius:100px; font-size:18px; color:#F8FAFC; }
</style></head>
<body><div class="grid"></div><div class="inner">
  <div class="brand"><span class="dot"></span>OnwardCraft</div>
  <div>
    <div class="eyebrow">Web Design · SEO · Lead Generation</div>
    <h1>We turn contractor websites into <span class="g">revenue machines.</span></h1>
  </div>
  <div class="foot"><span class="pill">Roofing</span><span class="pill">HVAC</span><span class="pill">Plumbing</span><span class="pill">Solar</span><span>· built to rank, convert &amp; compound</span></div>
</div></body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 2 });
await page.setContent(html, { waitUntil: 'networkidle' });
await page.waitForTimeout(600);
await page.screenshot({ path: out });
await browser.close();
console.log('Wrote', out);
