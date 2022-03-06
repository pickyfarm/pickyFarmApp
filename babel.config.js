module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: [".ios.ts", ".android.ts", ".ts", ".ios.tsx", ".android.tsx", ".tsx", ".jsx", ".js", ".json"],
        alias: {
          "@assets": "./src/assets",
          "@components": "./src/components",
          "@constants": "./src/constants",
          "@hooks": "./src/hooks",
          "@lib": "./src/lib",
          "@navigations": "./src/navigations",
          "@pages": "./src/pages",
          "@screens": "./src/screens",
          "@styles": "./src/styles",
        },
      },
    ],
    [
      "@emotion",
      {
        // sourceMap is on by default but source maps are dead code eliminated in production
        sourceMap: true,
        autoLabel: "dev-only",
        labelFormat: "[local]",
        cssPropOptimization: true,
      },
    ],
  ],
};
