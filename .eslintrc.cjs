/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: "sweet",
  overrides: [{
    files: "test/esbuild.js",
    env: {
      node: true,
      browser: false
    }
  }]
};
