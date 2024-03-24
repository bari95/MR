// tailwind.config.js

module.exports = {
  content: ["./src/**/*.{html,js}",
  "./js/**/*.{html,js}"
], // Specify the paths to your HTML and JavaScript files
  theme: {
    extend: {
      colors: {
        // Define your custom colors here
        'milk': '#FFF000', // Example: Milk color
        'deep-gray': '#333333', // Example: Deep gray color
        'dark-green': '#395D3C', // Example: Dark green color
        'gold': '#FFD700', // Example: Gold color
      },
      fontFamily: {
        // Define your custom fonts here
        'sans': ['Arial', 'sans-serif'], // Example: Sans-serif font
      },
      // You can extend or override other aspects of the default theme here
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  
    // Include any additional plugins you want to use.
    // For example, you can add Tailwind Typography or other custom plugins here.
  ],
};
