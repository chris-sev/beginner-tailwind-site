const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["src/**/*.html"],
  theme: {
    extend: {
      teal: colors.teal,
      orange: colors.orange,
    },
  },
  variants: {},
  plugins: [],
};
