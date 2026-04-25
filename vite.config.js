import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";

function readApiKey() {
  try {
    const envFile = fs.readFileSync(path.resolve(__dirname, ".env"), "utf-8");
    const match = envFile.match(/ANTHROPIC_API_KEY=(.+)/);
    return match ? match[1].trim() : "";
  } catch {
    return "";
  }
}

const apiKey = readApiKey();

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
    proxy: {
      "/anthropic": {
        target: "https://api.anthropic.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/anthropic/, ""),
        configure: (proxy) => {
          proxy.on("proxyReq", (proxyReq) => {
            proxyReq.setHeader("x-api-key", apiKey);
            proxyReq.setHeader("anthropic-version", "2023-06-01");
            proxyReq.removeHeader("origin");
            proxyReq.removeHeader("referer");
          });
        },
      },
    },
  },
});
