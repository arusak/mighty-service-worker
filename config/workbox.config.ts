import { VitePWAOptions } from "vite-plugin-pwa";
import { version } from "../package.json";

export const workbox: VitePWAOptions["workbox"] = {
  globPatterns: ["**/*.{js,css,html,woff,woff2}"],
  runtimeCaching: [],
  additionalManifestEntries: [
    { url: "android-chrome-192x192.png", revision: version },
    { url: "apple-touch-icon.png", revision: version },
    { url: "manifest.webmanifest", revision: version },
  ],
};
