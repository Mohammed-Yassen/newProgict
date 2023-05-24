// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
   extend: {
      colors: {
        primary: "#03314b",
        secondary: "#6b75df",

        clrAction1: "#94a3b8",
        clrAction2: "#1cbf8e",
        clrAction3:'#ffcd33',

        clrWhite:'#ffffff',
        
        textClr:"#111",
        subTextClr:"#777",
        
        bgClr1:'#f0f1f5',
        bgClr2:'#f9fbfc',
        bgClr3:'#eee',
        bgClr4:'#eef1f5',

        success:'#28c165',
        danger:'#f4574d',

        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      // colors: {
      //   primary: "#03314b",
      //   secondary: "#1cbfbe",
      //   variant1: "#ebf3d0",
      //   variant2: "#fee2c0",
      //   variant3: "#d6e7fc",
      //   clrText:"#111",
      //   clrSubText:"#777",
      //   bgClr1:'#94a3bb',
      //   success:'#28c165',
      //   danger:'#f4574d',
      //   dimWhite: "rgba(255, 255, 255, 0.7)",
      //   dimBlue: "rgba(9, 151, 124, 0.1)",
      //   clrAction:'#ffcd33'
      // },
      fontFamily:{
       Lemonada:[ 'Lemonada', 'cursive'],
       cairo:['Cairo']
      },
      backgroundImage:{
         hero:'url("/src/images/bg-11.jpg")',
         hero1:'url("/src/images/bg-hero3.jpg")',
         hero2:'url("/src/images/bg-hero2.jpg")',
         heroLogin:'url("/src/images/amico1.png")',

      },
    },
    screens: {
      xs: "480px",
      sm: "620px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },
    container:{
      center:true,
      padding:{
        DEFAULT:'1rem',
      }
    }
  },
  plugins: [],
}
