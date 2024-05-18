import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'Quisand': ['Quicksand', 'sans-serif'],
      'Sche': ['Scheherazade New', 'serif'],
      'Arabicf': ['Noto Sans Arabic', 'sans-serif'],
    },
    
    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      'extra-bold': '800',
      black: '900',
    },
    extend: {

      backgroundImage: {
        'bg-custom': "url('./src/assets/bg2.jpg')",
      },

      colors: {
        'primary': '#222831',
        'secondary': '#393E46',
        'greend':'#183D3D',
        'greenl': '#00ADB5',
        'light' : '#EEEEEE',
        'dark' : '#202124',
        'ldark' : '#202124',
        'lwhite': '#ffffff',

        // Light Theme
        'lprimary' : '#FFFFFF',
        'lsecondary' : "#eeeeee",
        'greenlight' : '#EBF9FA',
        'greendark' : '#23a5ad',
      },
      fontSize: {
        'xs': '0.75rem',  
        'sm': '0.875rem', 
        'base': '1rem',   
        'lg': '1.125rem', 
        'xl': '1.25rem',  
      },

      screens: {
        'sm': '640px',    
        'md': '768px',    
        'lg': '1024px',   
        'xl': '1280px',   
      },

      padding: {
        '2': '0.5rem',    
        '3': '0.75rem',   
        '4': '1rem',      
      },

      margin: {
        '2': '0.5rem',    
        '3': '0.75rem',   
        '4': '1rem',      
      },
    },
  },
  plugins: [],
  "import/no-anonymous-default-export": ["error", {
    "allowArray": false,
    "allowArrowFunction": false,
    "allowAnonymousClass": false,
    "allowAnonymousFunction": false,
    "allowCallExpression": true, // The true value here is for backward compatibility
    "allowNew": false,
    "allowLiteral": false,
    "allowObject": false
  }]
};
export default config;
