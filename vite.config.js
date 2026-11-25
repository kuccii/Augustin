import { fileURLToPath } from "node:url";

import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: { alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } },
  // Nitro builds the server. On Vercel (VERCEL=1) it picks the Vercel preset on its own and writes .vercel/output;
  // anywhere else it builds a plain Node server into .output.
  plugins: [tanstackStart({ srcDirectory: "src" }), nitro(), react()],
});
