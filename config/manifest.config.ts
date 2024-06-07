import { ManifestOptions } from "vite-plugin-pwa";

export const manifest: Partial<ManifestOptions> = {
  icons: [
    {
      src: "android-chrome-192x192.png",
      sizes: "192x192",
      type: "image/png",
      purpose: "any",
    },
    {
      src: "android-chrome-512x512.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "any",
    },
  ],
  name: "Mighty Service Worker App",
  short_name: "Mighty Worker",
  orientation: "portrait",
  display: "standalone",
  start_url: "/",
  scope: "/",
  theme_color: "#c8c8c8",
  background_color: "#c8c8c8",
};
