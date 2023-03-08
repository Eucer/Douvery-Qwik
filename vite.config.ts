import { defineConfig, loadEnv } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { vanillaExtractPlugin } from "styled-vanilla-extract/vite";
import { partytownVite } from "@builder.io/partytown/utils";
import { join } from "path";

export default defineConfig(() => {
  const env = loadEnv( process.cwd(), '');

  return {
    plugins: [
      qwikCity(),
      qwikVite(),
      tsconfigPaths(),
      vanillaExtractPlugin(),
      partytownVite({ dest: join(__dirname, "public", "~partytown") }),
    ],
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    },
  };
});
