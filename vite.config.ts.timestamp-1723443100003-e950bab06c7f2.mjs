// vite.config.ts
import { defineConfig } from "file:///D:/fanny3360/%E6%94%B6%E8%97%8F/testvue/v3test/node_modules/.pnpm/vite@5.3.4_@types+node@20.14.11_sass@1.77.8/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/fanny3360/%E6%94%B6%E8%97%8F/testvue/v3test/node_modules/.pnpm/@vitejs+plugin-vue@5.0.5_vite@5.3.4_@types+node@20.14.11_sass@1.77.8__vue@3.4.33_typescript@5.4.5_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///D:/fanny3360/%E6%94%B6%E8%97%8F/testvue/v3test/node_modules/.pnpm/@vitejs+plugin-vue-jsx@4.0.0_vite@5.3.4_@types+node@20.14.11_sass@1.77.8__vue@3.4.33_typescript@5.4.5_/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import vueDevTools from "file:///D:/fanny3360/%E6%94%B6%E8%97%8F/testvue/v3test/node_modules/.pnpm/vite-plugin-vue-devtools@7.3.6_rollup@4.19.0_vite@5.3.4_@types+node@20.14.11_sass@1.77.8__vue@3.4.33_typescript@5.4.5_/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import svgSfc from "file:///D:/fanny3360/%E6%94%B6%E8%97%8F/testvue/v3test/node_modules/.pnpm/vite-plugin-svg-sfc@2.0.1/node_modules/vite-plugin-svg-sfc/index.js";
import AutoImport from "file:///D:/fanny3360/%E6%94%B6%E8%97%8F/testvue/v3test/node_modules/.pnpm/unplugin-auto-import@0.18.2_@vueuse+core@10.11.0_vue@3.4.33_typescript@5.4.5___rollup@4.19.0/node_modules/unplugin-auto-import/dist/vite.js";
import UnoCSS from "file:///D:/fanny3360/%E6%94%B6%E8%97%8F/testvue/v3test/node_modules/.pnpm/unocss@0.61.5_postcss@8.4.39_rollup@4.19.0_vite@5.3.4_@types+node@20.14.11_sass@1.77.8_/node_modules/unocss/dist/vite.mjs";
import path from "path";
import dotenv from "file:///D:/fanny3360/%E6%94%B6%E8%97%8F/testvue/v3test/node_modules/.pnpm/dotenv@16.4.5/node_modules/dotenv/lib/main.js";
var __vite_injected_original_dirname = "D:\\fanny3360\\\u6536\u85CF\\testvue\\v3test";
var envDir = "envs";
function loadEnvConfig(mode, command) {
  const envPath = path.resolve(__vite_injected_original_dirname, `${envDir}/.env.${mode}`);
  const loadedEnv = dotenv.config({ path: envPath });
  const envVars = {};
  if (loadedEnv && loadedEnv.parsed) {
    for (const key of Object.keys(loadedEnv.parsed)) {
      envVars[key] = loadedEnv.parsed[key];
    }
  }
  return {
    envVars,
    isBuild: command === "build"
  };
}
var vite_config_default = defineConfig(({ command, mode }) => {
  const { envVars, isBuild } = loadEnvConfig(mode, command);
  return {
    plugins: [
      svgSfc(),
      vue(),
      vueJsx(),
      vueDevTools(),
      UnoCSS(),
      AutoImport({
        imports: ["vue", "vue-router", "pinia", "@vueuse/core"],
        dts: "./types/auto-imports.d.ts",
        eslintrc: {
          enabled: false,
          filepath: "./build/.eslintrc-auto-import.json",
          globalsPropValue: true
        }
      })
    ],
    resolve: {
      alias: {
        "@": path.resolve(__vite_injected_original_dirname, "src")
      }
    },
    base: envVars.VITE_BASE_URL,
    server: {
      https: false,
      port: "8080",
      host: "0.0.0.0",
      proxy: {
        "/api": {
          target: "http://jsonplaceholder.typicode.com",
          changeOrigin: true,
          rewrite: (path2) => path2.replace(/^\/api/, "")
        }
      }
    },
    css: {
      devSourcemap: !isBuild
    },
    define: {
      "process.env": envVars
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxmYW5ueTMzNjBcXFxcXHU2NTM2XHU4NUNGXFxcXHRlc3R2dWVcXFxcdjN0ZXN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxmYW5ueTMzNjBcXFxcXHU2NTM2XHU4NUNGXFxcXHRlc3R2dWVcXFxcdjN0ZXN0XFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9mYW5ueTMzNjAvJUU2JTk0JUI2JUU4JTk3JThGL3Rlc3R2dWUvdjN0ZXN0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBVc2VyQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHZ1ZUpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4J1xuaW1wb3J0IHZ1ZURldlRvb2xzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1kZXZ0b29scydcbmltcG9ydCBzdmdTZmMgZnJvbSAndml0ZS1wbHVnaW4tc3ZnLXNmYydcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXG5pbXBvcnQgVW5vQ1NTIGZyb20gJ3Vub2Nzcy92aXRlJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCBkb3RlbnYgZnJvbSAnZG90ZW52J1xuXG5jb25zdCBlbnZEaXIgPSAnZW52cydcblxuZnVuY3Rpb24gbG9hZEVudkNvbmZpZyhtb2RlOiBzdHJpbmcsIGNvbW1hbmQ6IHN0cmluZykge1xuICBjb25zdCBlbnZQYXRoID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgYCR7ZW52RGlyfS8uZW52LiR7bW9kZX1gKVxuICBjb25zdCBsb2FkZWRFbnYgPSBkb3RlbnYuY29uZmlnKHsgcGF0aDogZW52UGF0aCB9KVxuICBjb25zdCBlbnZWYXJzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge31cbiAgaWYgKGxvYWRlZEVudiAmJiBsb2FkZWRFbnYucGFyc2VkKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMobG9hZGVkRW52LnBhcnNlZCkpIHtcbiAgICAgIGVudlZhcnNba2V5XSA9IGxvYWRlZEVudi5wYXJzZWRba2V5XVxuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIGVudlZhcnMsXG4gICAgaXNCdWlsZDogY29tbWFuZCA9PT0gJ2J1aWxkJ1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBjb21tYW5kLCBtb2RlIH0pID0+IHtcbiAgY29uc3QgeyBlbnZWYXJzLCBpc0J1aWxkIH0gPSBsb2FkRW52Q29uZmlnKG1vZGUsIGNvbW1hbmQpXG5cbiAgcmV0dXJuIHtcbiAgICBwbHVnaW5zOiBbXG4gICAgICBzdmdTZmMoKSxcbiAgICAgIHZ1ZSgpLFxuICAgICAgdnVlSnN4KCksXG4gICAgICB2dWVEZXZUb29scygpLFxuICAgICAgVW5vQ1NTKCksXG4gICAgICBBdXRvSW1wb3J0KHtcbiAgICAgICAgaW1wb3J0czogWyd2dWUnLCAndnVlLXJvdXRlcicsICdwaW5pYScsICdAdnVldXNlL2NvcmUnXSxcbiAgICAgICAgZHRzOiAnLi90eXBlcy9hdXRvLWltcG9ydHMuZC50cycsXG4gICAgICAgIGVzbGludHJjOiB7XG4gICAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgZmlsZXBhdGg6ICcuL2J1aWxkLy5lc2xpbnRyYy1hdXRvLWltcG9ydC5qc29uJyxcbiAgICAgICAgICBnbG9iYWxzUHJvcFZhbHVlOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgXSxcbiAgICByZXNvbHZlOiB7XG4gICAgICBhbGlhczoge1xuICAgICAgICAnQCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMnKVxuICAgICAgfVxuICAgIH0sXG4gICAgYmFzZTogZW52VmFycy5WSVRFX0JBU0VfVVJMLFxuICAgIHNlcnZlcjoge1xuICAgICAgaHR0cHM6IGZhbHNlLFxuICAgICAgcG9ydDogJzgwODAnLFxuICAgICAgaG9zdDogJzAuMC4wLjAnLFxuICAgICAgcHJveHk6IHtcbiAgICAgICAgJy9hcGknOiB7XG4gICAgICAgICAgdGFyZ2V0OiAnaHR0cDovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20nLFxuICAgICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgICAgICByZXdyaXRlOiAocGF0aDogc3RyaW5nKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9hcGkvLCAnJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgY3NzOiB7XG4gICAgICBkZXZTb3VyY2VtYXA6ICFpc0J1aWxkXG4gICAgfSxcbiAgICBkZWZpbmU6IHtcbiAgICAgICdwcm9jZXNzLmVudic6IGVudlZhcnNcbiAgICB9XG4gIH0gYXMgdW5rbm93biBhcyBVc2VyQ29uZmlnXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFzUyxTQUFTLG9CQUFnQztBQUMvVSxPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBQ25CLE9BQU8saUJBQWlCO0FBQ3hCLE9BQU8sWUFBWTtBQUNuQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLFlBQVk7QUFDbkIsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sWUFBWTtBQVJuQixJQUFNLG1DQUFtQztBQVV6QyxJQUFNLFNBQVM7QUFFZixTQUFTLGNBQWMsTUFBYyxTQUFpQjtBQUNwRCxRQUFNLFVBQVUsS0FBSyxRQUFRLGtDQUFXLEdBQUcsTUFBTSxTQUFTLElBQUksRUFBRTtBQUNoRSxRQUFNLFlBQVksT0FBTyxPQUFPLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDakQsUUFBTSxVQUFrQyxDQUFDO0FBQ3pDLE1BQUksYUFBYSxVQUFVLFFBQVE7QUFDakMsZUFBVyxPQUFPLE9BQU8sS0FBSyxVQUFVLE1BQU0sR0FBRztBQUMvQyxjQUFRLEdBQUcsSUFBSSxVQUFVLE9BQU8sR0FBRztBQUFBLElBQ3JDO0FBQUEsRUFDRjtBQUNBLFNBQU87QUFBQSxJQUNMO0FBQUEsSUFDQSxTQUFTLFlBQVk7QUFBQSxFQUN2QjtBQUNGO0FBRUEsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxTQUFTLEtBQUssTUFBTTtBQUNqRCxRQUFNLEVBQUUsU0FBUyxRQUFRLElBQUksY0FBYyxNQUFNLE9BQU87QUFFeEQsU0FBTztBQUFBLElBQ0wsU0FBUztBQUFBLE1BQ1AsT0FBTztBQUFBLE1BQ1AsSUFBSTtBQUFBLE1BQ0osT0FBTztBQUFBLE1BQ1AsWUFBWTtBQUFBLE1BQ1osT0FBTztBQUFBLE1BQ1AsV0FBVztBQUFBLFFBQ1QsU0FBUyxDQUFDLE9BQU8sY0FBYyxTQUFTLGNBQWM7QUFBQSxRQUN0RCxLQUFLO0FBQUEsUUFDTCxVQUFVO0FBQUEsVUFDUixTQUFTO0FBQUEsVUFDVCxVQUFVO0FBQUEsVUFDVixrQkFBa0I7QUFBQSxRQUNwQjtBQUFBLE1BQ0YsQ0FBQztBQUFBLElBQ0g7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLE9BQU87QUFBQSxRQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLEtBQUs7QUFBQSxNQUNwQztBQUFBLElBQ0Y7QUFBQSxJQUNBLE1BQU0sUUFBUTtBQUFBLElBQ2QsUUFBUTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLFFBQ0wsUUFBUTtBQUFBLFVBQ04sUUFBUTtBQUFBLFVBQ1IsY0FBYztBQUFBLFVBQ2QsU0FBUyxDQUFDQSxVQUFpQkEsTUFBSyxRQUFRLFVBQVUsRUFBRTtBQUFBLFFBQ3REO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLEtBQUs7QUFBQSxNQUNILGNBQWMsQ0FBQztBQUFBLElBQ2pCO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixlQUFlO0FBQUEsSUFDakI7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsicGF0aCJdCn0K
