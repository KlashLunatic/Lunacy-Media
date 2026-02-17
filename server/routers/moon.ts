import { publicProcedure, router } from "../_core/trpc";
import { TRPCError } from "@trpc/server";

// NASA's CGI Moon Kit - 4K texture
const NASA_MOON_TEXTURE_URL = "https://svs.gsfc.nasa.gov/vis/a000000/a004700/a004720/lroc_color_poles_1k.jpg";

export const moonRouter = router({
  /**
   * Fetch NASA moon texture server-side to bypass CORS restrictions
   * Returns the image as a base64 data URL that can be used directly in the browser
   */
  getTexture: publicProcedure.query(async () => {
    try {
      const response = await fetch(NASA_MOON_TEXTURE_URL, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; LunacyMedia/1.0)',
        },
      });

      if (!response.ok) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: `Failed to fetch NASA moon texture: ${response.statusText}`,
        });
      }

      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const base64 = buffer.toString('base64');
      const dataUrl = `data:image/jpeg;base64,${base64}`;

      return {
        dataUrl,
        source: 'NASA Scientific Visualization Studio',
        attribution: 'NASA/GSFC/Arizona State University',
      };
    } catch (error) {
      console.error('Error fetching NASA moon texture:', error);
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Failed to load NASA moon texture',
      });
    }
  }),
});
