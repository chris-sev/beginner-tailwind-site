const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["src/**/*.html"],
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        orange: colors.orange
      }
    },
  },
  variants: {},
  plugins: [],
};
