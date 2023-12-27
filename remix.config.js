/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  future: {
  },
  tailwind: true,
  ignoredRouteFiles: ["**/.*"],
  server:
    process.env.NETLIFY || process.env.NETLIFY_LOCAL
      ? "./server.js"
      : undefined,
  publicPath: "/build/",
  serverBuildPath: ".netlify/functions-internal/server.js",
  serverConditions: ["deno", "worker"],
  serverMainFields: ["main", "module"],
  serverModuleFormat: "cjs",
  serverPlatform: "node",
  serverMinify: false,
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
};
