import daisyui from 'daisyui';  // Use import instead of require

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xsm: '425px', // Custom breakpoint for 425px
        xmd: '525px', // Custom breakpoint for 525px
        sm: '640px',  // Default Tailwind breakpoint
        md: '768px',  // Default Tailwind breakpoint
        lg: '1024px', // Default Tailwind breakpoint
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [
    daisyui,  // No need to use `require`, just add the imported `daisyui`
  ],
  daisyui: {
    themes: false,  // Disable DaisyUI themes
  },
  darkMode: 'class', // Make sure darkMode is set to 'class' or 'media'
};
