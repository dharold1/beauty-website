import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'hero-pattern': "conic-gradient(at center top, rgb(124, 45, 18), rgba(254, 243, 199, 0.3), rgba(124, 45, 18, 0.3)), url('/images/topImages.jpg')",
      },
      colors: {
        primary: "#ceaa85",
        bigText: "rgba(244, 218, 199, 0.3)"
      },
    },
  },
  plugins: [],
}
export default config
