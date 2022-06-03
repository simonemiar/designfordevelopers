const { resolve } = require("path");

module.exports = {
  base: "./", //set base here or in the build command
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        projectone: resolve(__dirname, "fonts_ui.html"),
        projecttwo: resolve(__dirname, "responsive_design.html"),
        projecttree: resolve(__dirname, "colors_animations.html"),
      },
    },
  },
};
