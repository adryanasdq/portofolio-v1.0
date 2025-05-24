import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "glass-inset": "inset 0 17px 5px -9px rgba(254, 254, 91, 0.05)",
        "glass-sm": "5px 5px 20px 0px rgba(254, 254, 91, 0.3)",
      },
      colors: {
        background: "rgb(var(--background))",
        foreground: "rgb(var(--foreground))",
        muted: "rgb(var(--muted))",
        accent: "rgb(var(--accent))",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      keyframe: {
        'spin-reverse': {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        'spin-slow': 'spin 40s linear infinite',
        'spin-slow-reverse': 'spin 40s linear infinite reverse',
      }
    },
  },
  plugins: [],
} satisfies Config;
