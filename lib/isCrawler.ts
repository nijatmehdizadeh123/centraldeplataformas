const CRAWLER_PATTERN =
  /bot|crawler|spider|crawling|adsbot|googlebot|bingbot|slurp|duckduckbot|baiduspider|yandex|facebookexternalhit|linkedinbot|twitterbot|applebot|semrush|ahrefs|mj12bot|dotbot|mediapartners-google|storebot-google|google-inspectiontool|lighthouse|pagespeed|pingdom|gtmetrix|headlesschrome/i;

export function isCrawlerUserAgent(userAgent?: string | null) {
  if (!userAgent) return false;
  return CRAWLER_PATTERN.test(userAgent);
}

export function isBrowserCrawler() {
  if (typeof navigator === "undefined") return false;
  return isCrawlerUserAgent(navigator.userAgent);
}
