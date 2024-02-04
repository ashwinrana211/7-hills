/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        btnFont: "'Cormorant Garamond', serif",
        logoFont: "'Fredericka the Great', cursive"
      },
      colors: {
        primaryClr: 'hsl(34, 40%, 53%)',
        primaryDarker: 'hsl(34, 40%, 45%)',
        darkLighter: 'hsl(213, 6%, 35%)',
        formClr : 'rgb(240, 240, 240)',
        fontClrGrey: '#999999',
        blackClr: '#101010',
        navbarClr:'rgba(26, 10, 56, 0.53)',
        navbarClr2:'rgba(247, 226, 201, 0.8)',
        mediumBlackClr : '#151515',
        lightBlackClr: '#202020'
      },
      backgroundImage: {
        'hero': "url('/src/assets/home-hero.jpg')",
        'contact':"url('/src/assets/contact-hero.jpg')",
        'blog':"url('/src/assets/blog-hero.jpg')",
        'restaurant':"url('/src/assets/restaurant-hero.jpg')"
      },
      keyframes: {
        zoom: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'background-zoom': 'zoom 20s linear infinite',
      },
    },
  },
  plugins: [],
};
