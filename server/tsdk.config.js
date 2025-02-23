/** @type {import('tsdk').TSDKConfig} */
module.exports = {
  packageDir: "../",
  packageName: "fe-sdk",
  baseDir: "./src",
  entityLibName: ["typeorm"],
  entityExt: "entity",
  apiconfExt: "apiconf",
  shareExt: "shared",
  sharedDirs: ["./src/shared"],
  removeFields: [],
  monorepoRoot: "../",
  dataHookLib: "SWR",
  httpLib: 'xior',
  dependencies: {
    xior: "^0.6.3",
    swr: "^2.3.2",
    "@tanstack/react-query": "^5.66.9",
  },
  scripts: {
    "tsc:build": "rm -rf node_modules && tsc --project tsconfig.json",
  }
};
