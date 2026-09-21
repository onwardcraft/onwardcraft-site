// Minimal RSS 2.0 feed. A publication without a feed is just a website, and the
// feed is also how a few AI crawlers discover new articles fastest.
import { SITE, AUTHOR } from '../data/site.js';
import { posts, PUBLISHED_ISO } from '../data/posts.js';

const escape = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

export async function GET() {
  const pubDate = new Date(`${PUBLISHED_ISO}T09:00:00Z`).toUTCString();

  const items = posts
    .map((p) => {
      const url = `${SITE.url}/blog/${p.slug}/`;
      return `    <item>
      <title>${escape(p.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escape(p.excerpt)}</description>
      <category>${escape(p.category)}</category>
      <pubDate>${pubDate}</pubDate>
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escape(SITE.name)} — ${escape(SITE.tagline)}</title>
    <link>${SITE.url}/</link>
    <atom:link href="${SITE.url}/rss.xml" rel="self" type="application/rss+xml" />
    <description>${escape(SITE.description)}</description>
    <language>en-us</language>
    <managingEditor>${SITE.email} (${escape(AUTHOR.name)})</managingEditor>
    <lastBuildDate>${pubDate}</lastBuildDate>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
}
