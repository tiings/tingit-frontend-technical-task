import { defineConfig, AliasOptions } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import { TanStackRouterVite } from "@tanstack/router-plugin/vite"
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill"
import polyfillNode from "rollup-plugin-polyfill-node"
import path from "node:path"

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    } as AliasOptions
  },
  plugins: [
    TanStackRouterVite({
      target: "react",
      autoCodeSplitting: true,
      routeFileIgnorePattern: "components|interfaces|config",
      generatedRouteTree: "./src/types/routeTree.gen.ts"
    }),
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler", { target: "19" }]]
      }
    }),
    tailwindcss()
  ],
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis"
      },
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true
        })
      ]
    }
  },
  build: {
    rollupOptions: {
      plugins: [polyfillNode()]
    }
  }
})
