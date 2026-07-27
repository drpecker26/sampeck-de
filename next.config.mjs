/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // Cover-letter pages are unlisted: reachable by link, never indexed.
        source: "/cl/:slug*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

// The legacy `/?cl=<slug>` shape is handled in middleware.ts, which can drop the
// original query string on the way through — config redirects cannot.

export default nextConfig;
