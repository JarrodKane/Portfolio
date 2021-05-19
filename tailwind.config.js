const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: [
    // This is not present inside the default configuration
    // but it's good to build your production application
    // Read more about this here: https://tailwindcss.com/docs/installation#building-your-css
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: ["html", "body"],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "profile-image": "url('/images/profile.jpg')",
        "404-image": "url('/images/nic404.jpg')",
      }),
      fontFamily: {
        MyFont: ["Poppins", "sans-serif"],
      },
    },
  },
  variants: {
    extend: { transform: ["hover", "focus"] },
  },
  plugins: [
    plugin(function ({ addVariant, e, postcss }) {
      addVariant("firefox", ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: "-moz-document",
          params: "url-prefix()",
        });
        isFirefoxRule.append(container.nodes);
        container.append(isFirefoxRule);
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(
            `firefox${separator}${rule.selector.slice(1)}`
          )}`;
        });
      });
    }),
  ],
};
