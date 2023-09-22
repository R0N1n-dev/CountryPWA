import { cleanupOutdatedCaches, precacheAndRoute } from "workbox-precaching";
import { CacheableResponsePlugin } from "workbox-cacheable-response";
import { StaleWhileRevalidate } from "workbox-strategies";
import { ExpirationPlugin } from "workbox-expiration";
import { registerRoute } from "workbox-routing";
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") self.skipWaiting();
});
cleanupOutdatedCaches();

precacheAndRoute(self.__WB_MANIFEST);
registerRoute(
  ({ sameOrigin, url }) =>
    sameOrigin && url.pathname.startsWith("https://www.themealdb.com/api/"),
  new StaleWhileRevalidate({
    cacheName: "mealdb",
    plugins: [
      new CacheableResponsePlugin({ statuses: [200] }),
      // 365 days max
      new ExpirationPlugin({
        purgeOnQuotaError: true,
        maxAgeSeconds: 60 * 60 * 24 * 365,
      }),
    ],
  })
);
