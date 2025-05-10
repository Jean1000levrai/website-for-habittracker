import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

exoprt default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH ||  "/website-for-habittracker",
}];
