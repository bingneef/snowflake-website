const withCSS = require("@zeit/next-css");
const withTypescript = require("@zeit/next-typescript");
const withSass = require("@zeit/next-sass");

const payload = {
  cssModules: true
};

if (process.env.NOW) {
  payload.target = "serverless";
}

console.log({ payload, env: process.env });

module.exports = withTypescript(withSass(withCSS(payload)));
