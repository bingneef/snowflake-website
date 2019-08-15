const withCSS = require("@zeit/next-css");
const withTypescript = require("@zeit/next-typescript");
const withSass = require("@zeit/next-sass");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});

const payload = {
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]"
  }
};

if (process.env.__NEXT_BUILDER_EXPERIMENTAL_TARGET) {
  payload.target = process.env.__NEXT_BUILDER_EXPERIMENTAL_TARGET;
}

module.exports = withBundleAnalyzer(withTypescript(withSass(withCSS(payload))));
