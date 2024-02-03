// tailwind.config.js
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'custompink': '#E554DD', // Add your custom color here
      },
    },
  },
  daisyui: {
    themes: [
      {
        abhi: {
          primary: "#f0df20",
          secondary: "#D63484",
          accent: "#864AF9",
          neutral: "#1f2937",
          "base-100": "#ffffff",
          info: "#bfdbfe",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
