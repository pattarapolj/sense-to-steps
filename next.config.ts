import type { NextConfig } from "next";
import os from "os";

/**
 * Allow phone/tablet on the same Wi‑Fi to load Turbopack/HMR `/_next` assets in
 * development. Next.js 16 blocks those from non-localhost origins by default,
 * which leaves HTML visible but client JS (hydration, Reveal scroll) broken.
 *
 * Wildcard patterns use Next's CSRF matcher (segment `*` / `**`), so
 * `192.168.*.*` covers typical home LAN IPs without listing each one.
 */
function getLanDevOrigins(): string[] {
  const hosts = new Set<string>([
    "*.trycloudflare.com",
    "*.loca.lt",
    "192.168.*.*",
    "10.*.*.*",
    "172.16.*.*",
    "172.17.*.*",
    "172.18.*.*",
    "172.19.*.*",
    "172.20.*.*",
    "172.21.*.*",
    "172.22.*.*",
    "172.23.*.*",
    "172.24.*.*",
    "172.25.*.*",
    "172.26.*.*",
    "172.27.*.*",
    "172.28.*.*",
    "172.29.*.*",
    "172.30.*.*",
    "172.31.*.*",
  ]);

  for (const nets of Object.values(os.networkInterfaces())) {
    for (const net of nets ?? []) {
      if (net.family !== "IPv4" || net.internal) continue;
      hosts.add(net.address);
      hosts.add(`${net.address}:3000`);
    }
  }

  return [...hosts];
}

const nextConfig: NextConfig = {
  allowedDevOrigins: getLanDevOrigins(),
  async headers() {
    return [
      {
        source:
          "/:path*\\.(jpg|jpeg|png|gif|webp|svg|ico|mp4|webm|woff2|woff)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
