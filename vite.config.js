const { resolve } = require("path");

module.exports = {
  base: "./", //set base here or in the build command
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        // projects: resolve(__dirname, "projects.html"),
        contact: resolve(__dirname, "colors_animations.html"),
        contact: resolve(__dirname, "fonts_ui.html"),
        contact: resolve(__dirname, "responsive_design.html"),
      },
    },
  },
};
