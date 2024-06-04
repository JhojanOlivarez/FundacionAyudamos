import ssr from "vike/plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "node:path";
export default defineConfig({
  plugins: [react({}), ssr({})],
  resolve:{
    alias:{
      "@": path.resolve(__dirname, "./"),
    }
  }
});