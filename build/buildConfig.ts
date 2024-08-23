import { OUTPUT_DIR, OUTPUT_DIR_APP } from "./constant";
import { BuildOptions } from "vite";

export function buildConfig(VITE_ESBUILD: boolean, isAppMode: boolean): BuildOptions {
  return VITE_ESBUILD
    ? {
        target: "chrome63",
        cssTarget: "chrome63",
        outDir: isAppMode ? OUTPUT_DIR_APP : OUTPUT_DIR,
        chunkSizeWarningLimit: 2000,
        commonjsOptions: {
          transformMixedEsModules: true,
        },
        assetsInlineLimit: 0,
        rollupOptions: {
          output: {
            chunkFileNames: "assets/[name]-[hash].js",
            entryFileNames: "assets/[name]-[hash].js",
            assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
            // manualChunks: id => {
            //   for(const item of PACKAGES){
            //     if (id.includes(item)) {
            //       return item;
            //     }
            //   }
            // },
          },
        },
      }
    : {
        target: "chrome63",
        cssTarget: "chrome63",
        outDir: isAppMode ? OUTPUT_DIR_APP : OUTPUT_DIR,
        minify: "terser",
        terserOptions: {
          compress: {
            keep_infinity: true,
            drop_console: true,
          },
          module: false,
          ecma: 5,
          ie8: true,
          safari10: true,
        },
        commonjsOptions: {
          transformMixedEsModules: true,
        },
        assetsInlineLimit: 0,
        rollupOptions: {
          output: {
            chunkFileNames: "assets/[name].js",
            entryFileNames: "assets/[name].js",
            assetFileNames: "assets/[ext]/[name].[ext]",
          },
        },
      };
}

// const listArr = [
//   ["/api", "http://saas.test1.h5b.adre45.com/api"],
//   ["/oss", "http://saas.test1.h5b.adre45.com/oss"],
// ];
// 获取环境配置文件并换成vite 需要的格式
export const proxyFun = list => {
  const listArr = JSON.parse(list);

  const pArr = {};
  for (const [prefix, target] of listArr) {
    pArr[prefix] = {
      target: target,
      changeOrigin: true,
      rewrite: path => path.replace(new RegExp(`^${prefix}`), ""),
    };
  }
  return pArr;
};
