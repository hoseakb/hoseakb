import type { APIRoute } from "astro";

import { SITE } from "../config";
import { renderOgImage } from "../utils/og-image";

/** The preview used by every page that is not an article. */
export const GET: APIRoute = async () => {
  const png = await renderOgImage({
    category: "AN ARCHIVE OF POETRY & WRITINGS",
    title: SITE.title,
    subtitle: "Hosea Khawbung — Poetry & Writings from Parbung, Manipur",
    stamp: "Parbung, Manipur",
    tags: ["Hmar", "English"],
  });

  return new Response(new Uint8Array(png), {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};
