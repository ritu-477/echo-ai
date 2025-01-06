/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1180px",
        },
      },

      colors: {
        'rich-black': "#01000B",
        'light-purple': "#BF97FF3D",
        'blue': "#3A3EF5",
        'sky-blue': "#32C8F1",  
      },

      fontSize: {
        'custom-xl': "28px",
      },

      lineHeight: {
        'custom-2xl': "25.2px",
        'custom-3xl': "30px",
        'custom-5xl': "57.6px",
        'custom-6xl': "86.4px",
      },

      backgroundImage: {
        'hero': "url('/public/assets/images/webp/hero-bg.webp')",
        "custom-gradient": "linear-gradient(180deg, rgba(59, 40, 246, 0.22) 0%, rgba(59, 40, 246, 0) 100%)",
      },

    },
  },
  plugins: [],
}

