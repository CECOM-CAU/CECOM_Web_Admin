import type { Config } from "tailwindcss";

const config: Config = {
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
        primary: {
          cecom_blue: '#0648A6FF',
          cecom_blue_light: '#0029BB2E',
          lightgray30: '#D9D9D955',
          lightgray50: '#D9D9D980',
          lightgray100: '#D9D9D9FF',
        }
      },
    },
  },
  plugins: [],
};
export default config;
