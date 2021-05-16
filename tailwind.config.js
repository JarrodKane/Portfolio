module.exports = {
  purge: [
    // This is not present inside the default configuration
    // but it's good to build your production application
    // Read more about this here: https://tailwindcss.com/docs/installation#building-your-css
    "./pages/**/*.js",
  ],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "profile-image": "url('/images/profile.jpg')",
      }),
      fontFamily: {
        MyFont: ["Poppins", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
