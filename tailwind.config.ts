import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',  // Default padding for all screens
          sm: '2rem',       // Padding for small screens and above
          md: '3rem',       // Padding for medium screens and above
          lg: '4rem',       // Padding for large screens and above
          xl: '5rem',       // Padding for extra large screens and above
          '2xl': '6rem',    // Padding for 2xl screens and above
        },
      },
      maxWidth: {
        DEFAULT: '100%',  // Default max width for all screens
        sm: '640px',      // Max width for small screens and above
        md: '768px',      // Max width for medium screens and above
        lg: '1024px',     // Max width for large screens and above
        xl: '1280px',     // Max width for extra large screens and above
        '2xl': '1536px',  // Max width for 2xl screens and above
      },
    },
  },
  plugins: [],
};
export default config;
