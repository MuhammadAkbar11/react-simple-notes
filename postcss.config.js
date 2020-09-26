const tailwindcss = require("tailwindcss");
module.exports = {
  syntax: "postcss-scss",
  plugins: [
    // require("postcss-ignore-plugin/dist/remove"),
    require("postcss-import"),
    tailwindcss("./tailwind.config.js"),
    require("autoprefixer"),
    // require("postcss-ignore-plugin/dist/add"),
  ],
};
