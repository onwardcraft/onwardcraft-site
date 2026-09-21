// Central registry for every article on the site — the single source of truth
// for the homepage, the archive, the topic pages, related-post linking, the RSS
// feed, and each article's own byline. Each slug maps 1:1 to a file at
// src/pages/blog/<slug>.astro.
//
// SCOPE: OnwardCraft publishes on search only. Every article here is an SEO
// article, filed under one of three desks — SEO, Local SEO, or Technical SEO.
// Anything that is not about search does not belong in this file.

// The whole library was reviewed and republished on this date, so one constant
// drives every byline and every Article schema block rather than 28 loose
// strings drifting out of sync.
export const PUBLISHED_ISO = '2026-09-21';
export const PUBLISHED_LABEL = 'September 21, 2026';

export const posts = [
  {
    slug: "local-seo-guide",
    title: "The Complete Local SEO Guide for Home Service Businesses (2026)",
    excerpt: "This 15,000-word definitive guide is the most comprehensive resource on local SEO specifically built for home service businesses — contractors, HVAC...",
    category: "Local SEO",
    date: PUBLISHED_LABEL,
    isoDate: PUBLISHED_ISO,
    readTime: "55 min read",
    featured: true,
  },
  {
    slug: "seo-services-complete-guide-for-business-owners",
    title: "SEO Services: The Complete Guide for Business Owners in 2026",
    excerpt: "A no-fluff guide to SEO services in 2026. Learn what SEO companies actually do, what services you need, and how to choose the right provider for your business.",
    category: "SEO",
    date: PUBLISHED_LABEL,
    isoDate: PUBLISHED_ISO,
    readTime: "14 min read",
    featured: false,
  },
  {
    slug: "google-business-profile-guide",
    title: "Google Business Profile Optimization: The Complete 2025 Guide for Service-Area Businesses",
    excerpt: "Complete guide to optimizing your Google Business Profile for service-area businesses. Includes category strategy by trade, photo tips, review generation...",
    category: "Local SEO",
    date: PUBLISHED_LABEL,
    isoDate: PUBLISHED_ISO,
    readTime: "40 min read",
    featured: false,
  },
  {
    slug: "technical-seo-checklist-home-service",
    title: "The Complete Technical SEO Checklist for Home Service Websites",
    excerpt: "Complete technical SEO checklist for home service websites. Includes crawlability, speed, schema, security, and mobile optimization.",
    category: "Technical SEO",
    date: PUBLISHED_LABEL,
    isoDate: PUBLISHED_ISO,
    readTime: "20 min read",
    featured: false,
  },
  {
    slug: "local-seo-checklist",
    title: "The Complete Local SEO Checklist for Home Service Businesses [50-Point Guide]",
    excerpt: "Complete 50-point local SEO checklist for home service businesses. Includes GBP optimization, reviews, citations, website, and technical SEO. Download the...",
    category: "Local SEO",
    date: PUBLISHED_LABEL,
    isoDate: PUBLISHED_ISO,
    readTime: "32 min read",
    featured: false,
  },
  {
    slug: "gbp-optimization-checklist",
    title: "The GBP Optimization Checklist: 30 Steps to Rank Higher on Google Maps",
    excerpt: "Complete 30-step Google Business Profile optimization checklist. Includes categories, photos, posts, reviews, and advanced tactics for contractors.",
    category: "Local SEO",
    date: PUBLISHED_LABEL,
    isoDate: PUBLISHED_ISO,
    readTime: "41 min read",
    featured: false,
  },
  {
    slug: "schema-markup-checklist",
    title: "The Schema Markup Checklist for Local Businesses: 25 Structured Data Types You Need",
    excerpt: "Complete schema markup checklist for local businesses. Includes 25 structured data types with code examples for contractors.",
    category: "Technical SEO",
    date: PUBLISHED_LABEL,
    isoDate: PUBLISHED_ISO,
    readTime: "41 min read",
    featured: false,
  },
  {
    slug: "website-migration-seo-checklist",
    title: "The Website Migration Checklist: How to Redesign Without Losing SEO Rankings",
    excerpt: "Complete website migration checklist for contractors. 35 steps to redesign without losing SEO rankings. Includes pre, during, and post-launch.",
    category: "Technical SEO",
    date: PUBLISHED_LABEL,
    isoDate: PUBLISHED_ISO,
    readTime: "16 min read",
    featured: false,
  },
  {
    slug: "citation-building-guide-contractors",
    title: "The Complete Citation Building Guide for Home Service Businesses",
    excerpt: "Complete citation building guide for home service businesses. Includes directory lists, submission process, NAP consistency, and monitoring system.",
    category: "Local SEO",
    date: PUBLISHED_LABEL,
    isoDate: PUBLISHED_ISO,
    readTime: "26 min read",
    featured: false,
  },
  {
    slug: "local-authority-hub-framework",
    title: "The Local Authority Hub Framework: How to Dominate Local Search in 90 Days",
    excerpt: "The Local Authority Hub Framework is a 90-day system for dominating local search. Includes foundation, authority, and domination phases.",
    category: "Local SEO",
    date: PUBLISHED_LABEL,
    isoDate: PUBLISHED_ISO,
    readTime: "18 min read",
    featured: false,
  },
  {
    slug: "local-seo-tips-contractors",
    title: "27 Local SEO Tips for Contractors (2025): Rank #1 on Google Maps",
    excerpt: "27 actionable local SEO tips for contractors, ranked by impact and effort. Includes GBP optimization, review generation, citations, schema markup, and quick...",
    category: "Local SEO",
    date: PUBLISHED_LABEL,
    isoDate: PUBLISHED_ISO,
    readTime: "25 min read",
    featured: false,
  },
  {
    slug: "local-seo-mistakes-contractors",
    title: "Local SEO Mistakes That Cost Contractors Map Rankings",
    excerpt: "Common local SEO mistakes that cost contractors map rankings. Includes fixes, trade-specific notes, and prevention strategies.",
    category: "Local SEO",
    date: PUBLISHED_LABEL,
    isoDate: PUBLISHED_ISO,
    readTime: "20 min read",
    featured: false,
  },
  {
    slug: "local-seo-experts-service-area-tips",
    title: "30 Local SEO Experts Share Their Best Tip for Service-Area Businesses",
    excerpt: "30 local SEO experts share their best tip for service-area businesses. Includes GBP, reviews, citations, and more.",
    category: "Local SEO",
    date: PUBLISHED_LABEL,
    isoDate: PUBLISHED_ISO,
    readTime: "18 min read",
    featured: false,
  },
  {
    slug: "citation-sources-for-contractors",
    title: "20 Citation Sources Every Home Service Business Needs",
    excerpt: "20 citation sources every home service business needs for local SEO. Includes tier rankings, NAP consistency tips, and submission guides.",
    category: "Local SEO",
    date: PUBLISHED_LABEL,
    isoDate: PUBLISHED_ISO,
    readTime: "29 min read",
    featured: false,
  },
  {
    slug: "review-generation-strategies-contractors",
    title: "Review Generation Strategies for Home Service Businesses",
    excerpt: "Proven strategies to generate more Google reviews for your home service business. Includes scripts, timing, automation, and templates.",
    category: "Local SEO",
    date: PUBLISHED_LABEL,
    isoDate: PUBLISHED_ISO,
    readTime: "22 min read",
    featured: false,
  },
  {
    slug: "top-local-seo-experts",
    title: "Top 20 Local SEO Experts to Follow in 2025",
    excerpt: "The top 20 local SEO experts to follow in 2025. Includes thought leaders, consultants, and professionals in local search.",
    category: "Local SEO",
    date: PUBLISHED_LABEL,
    isoDate: PUBLISHED_ISO,
    readTime: "22 min read",
    featured: false,
  },
  {
    slug: "local-seo-statistics",
    title: "73 Local SEO Statistics Every Contractor Should Know [2025 Data]",
    excerpt: "73 local SEO statistics covering Google Business Profile, reviews, local pack, mobile search, voice search, and ROI. All verified with sources. Updated for...",
    category: "Local SEO",
    date: PUBLISHED_LABEL,
    isoDate: PUBLISHED_ISO,
    readTime: "20 min read",
    featured: false,
  },
  {
    slug: "home-service-seo-statistics",
    title: "Home Service SEO Statistics: What the Numbers Say About Local Search",
    excerpt: "Home service SEO statistics covering local SEO, organic search, technical SEO, and ROI. Cited sources. Updated for 2025.",
    category: "SEO",
    date: PUBLISHED_LABEL,
    isoDate: PUBLISHED_ISO,
    readTime: "14 min read",
    featured: false,
  },
  {
    slug: "review-velocity-local-seo-study",
    title: "The Review Velocity Effect: How Review Frequency Impacts Local Rankings [Study]",
    excerpt: "We analyzed 300+ contractor Google Business Profiles to find how review frequency impacts local rankings. See the data and recommendations.",
    category: "Local SEO",
    date: PUBLISHED_LABEL,
    isoDate: PUBLISHED_ISO,
    readTime: "29 min read",
    featured: false,
  },
  {
    slug: "contractor-gbp-study",
    title: "We Analyzed 500 Contractor Google Business Profiles: 11 Findings That Actually Impact Rankings [Data]",
    excerpt: "We analyzed 500 contractor Google Business Profiles across 6 trades and 50 US cities to find what actually impacts local rankings. See the data, 7 charts,...",
    category: "Local SEO",
    date: PUBLISHED_LABEL,
    isoDate: PUBLISHED_ISO,
    readTime: "35 min read",
    featured: false,
  },
  {
    slug: "google-business-profile-categories-study",
    title: "Google Business Profile Categories Study: What Actually Impacts Rankings",
    excerpt: "Analyzed Google Business Profiles to find which categories and attributes impact rankings. Includes trade-specific recommendations.",
    category: "Local SEO",
    date: PUBLISHED_LABEL,
    isoDate: PUBLISHED_ISO,
    readTime: "20 min read",
    featured: false,
  },
  {
    slug: "website-speed-lead-generation-study",
    title: "How Website Speed Affects Contractor Lead Generation [Data Study]",
    excerpt: "We analyzed 100 contractor websites to find how speed affects lead generation. Includes Core Web Vitals data, mobile performance, and actionable fixes.",
    category: "Technical SEO",
    date: PUBLISHED_LABEL,
    isoDate: PUBLISHED_ISO,
    readTime: "18 min read",
    featured: false,
  },
  {
    slug: "how-much-does-seo-cost",
    title: "How Much Does SEO Cost in 2026?",
    excerpt: "SEO costs range from $500 to $50,000+ per month in 2026. Here is exactly what you get at each price tier, what drives the cost, and how to budget without wasting money.",
    category: "SEO",
    date: PUBLISHED_LABEL,
    isoDate: PUBLISHED_ISO,
    readTime: "10 min read",
    featured: false,
  },
  {
    slug: "seo-vs-google-ads-which-has-better-roi",
    title: "SEO vs Google Ads: Which Has Better ROI?",
    excerpt: "SEO vs Google Ads: a data-driven comparison of ROI, cost per lead, time to results, and which channel wins for small businesses in 2026.",
    category: "SEO",
    date: PUBLISHED_LABEL,
    isoDate: PUBLISHED_ISO,
    readTime: "12 min read",
    featured: false,
  },
  {
    slug: "seo-vs-ppc-contractors-comparison",
    title: "SEO vs PPC for Contractors: Which Channel Actually Generates Better Leads?",
    excerpt: "Unbiased comparison of SEO vs PPC for contractors. Includes cost per lead, timeline, ROI, and a decision framework for home service businesses.",
    category: "SEO",
    date: PUBLISHED_LABEL,
    isoDate: PUBLISHED_ISO,
    readTime: "32 min read",
    featured: false,
  },
  {
    slug: "diy-seo-vs-hiring-an-agency-pros-and-cons",
    title: "DIY SEO vs Hiring an Agency: Pros and Cons for Business Owners",
    excerpt: "Should you do your own SEO or hire an agency? This guide breaks down the real costs, time investment, risks, and ROI of each approach so you can make the right decision for your business.",
    category: "SEO",
    date: PUBLISHED_LABEL,
    isoDate: PUBLISHED_ISO,
    readTime: "14 min read",
    featured: false,
  },
  {
    slug: "how-to-choose-the-right-seo-agency",
    title: "How to Choose the Right SEO Agency in 2026",
    excerpt: "Choosing the wrong SEO agency can cost you months and thousands of dollars. Here is the exact framework we recommend for evaluating, comparing, and hiring an SEO agency that delivers real business results.",
    category: "SEO",
    date: PUBLISHED_LABEL,
    isoDate: PUBLISHED_ISO,
    readTime: "11 min read",
    featured: false,
  },
  {
    slug: "what-does-an-seo-agency-actually-do",
    title: "What Does an SEO Agency Actually Do?",
    excerpt: "Most business owners have no idea what an SEO agency actually does. Here is the complete breakdown of every service, deliverable, and result you should expect.",
    category: "SEO",
    date: PUBLISHED_LABEL,
    isoDate: PUBLISHED_ISO,
    readTime: "10 min read",
    featured: false,
  },
];

// Turn a category label into a URL-safe slug, e.g. "Local SEO" -> "local-seo".
export function categorySlug(category) {
  return category
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function getPost(slug) {
  return posts.find((p) => p.slug === slug);
}

export function getFeatured() {
  return posts.find((p) => p.featured) || posts[0];
}

// Unique categories derived from the posts themselves, each with its post count.
// Sorted by count (desc) so the busiest desk surfaces first.
export function getCategories() {
  const counts = new Map();
  for (const p of posts) counts.set(p.category, (counts.get(p.category) || 0) + 1);
  return [...counts.entries()]
    .map(([name, count]) => ({ name, count, slug: categorySlug(name) }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

export function getPostsByCategory(category) {
  return posts.filter((p) => p.category === category);
}

// Related reading for internal linking: same desk first, then fill from the
// rest of the library so every article links out to a full set.
export function getRelatedPosts(slug, limit = 3) {
  const current = posts.find((p) => p.slug === slug);
  if (!current) return posts.filter((p) => p.slug !== slug).slice(0, limit);
  const sameCategory = posts.filter((p) => p.slug !== slug && p.category === current.category);
  if (sameCategory.length >= limit) return sameCategory.slice(0, limit);
  const others = posts.filter((p) => p.slug !== slug && p.category !== current.category);
  return [...sameCategory, ...others].slice(0, limit);
}
