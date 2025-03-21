import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0267C1",
        secondary: "#5DB7DE",
        yellow: "#E8DE00",
        beige: "#FFFCBF",
        grey: "#A39B8B",
        "grey-title": "#514D55",
        "light-yellow": "#FFFCBF",
        "grey-form": "#716A5C",
      },
    },
  },
  
  plugins: [],
};
export default config;
