import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      padding: {
        'navPXS': "11px",
        'navPXL': "16px",
        'navPYS': "6px",
        'navPYL': "10px",
      },
      fontSize: {
        'xsmall': "12px", // Extra small font size
        'small': "15px", // Small font size
        'base': "16px", // Base font size
        'mediom': "18px", // Large font size
        'larg': "20px", // Extra large font size
        "xlarg": "24px", // 2x large font size
        "2xlarg": "30px", // 3x large font size
        "3xlarge": "36px", // 4x large font size
        "4xlarg": "48px", // 5x large font size
        "5xlarg": "64px", // 6x large font size
      },
      fontWeight: {
        'extraLight': "200", 
        'mamad': "700", 
        'normal': "400", 
        'medium': "500", 
        'bold': "700",
        'xBold': "900"
      },
      colors: {
        'redButtons': '#FF5851',
        'ProRedButtons': '#EF5350',
        'grayText' : "#7890A5",
      },
    },
  },
  plugins: [],
};
export default config;
