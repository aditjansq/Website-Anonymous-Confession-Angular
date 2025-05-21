/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        "background-utama": "url('/images/backgroundutama.svg')",
        "background-handphone": "url('/images/bghandphone.svg')",
        "background-komentar": "url('/images/bgkomentar.svg')",
      },
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255,255,255,0.7)",
        dimBlue: "rgba(9,151,124,0.1)",
      },
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        ios: [
          '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto',
          '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif'
        ],
      },
      keyframes: {
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'gradient-x': 'gradientX 15s linear infinite',
      },
      backgroundSize: {
        'size-400': '400% 400%',
      },
      boxShadow: {
        ios: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      borderRadius: {
        'ios': '1.5rem',
      }
    },
    screens: {
      xs: "300px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
      xxl: "2300px",
    },
  },
  plugins: [],
};
