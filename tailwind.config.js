/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'spotifygreen':'#1DB954',
        'spotifyblack':'#191414',
        'gray1':'#121212',
        'gray2': '#0E0E10',
        'gray3':'#222222',
        'gray4': '#353535',
        'gray5':'#282828',
        'gray6':'#838383',
        'spotifywhite' : '#FFFFFF',
        'purplee': 'rgb(141,103,171)',
        'violete': 'rgb(175, 40, 150)',
        'skybluee':'rgb(80, 155, 245)',
        'orangee':'rgb(186,93,7)',
        'greene':'rgb(39,133,106)',
        'bluee':'rgb(141,103,171)',
        'sharppink': 'rgb(232,17,91)',
        'lesssharppink': 'rgb(220,20,140)',
        'lightpurple': 'rgb(180,155,200)',
        'lightpink': 'rgb(240,55,165)',
        'lightblue':'rgb(71,125,149)',
        'lightgreen':'rgb(20,138,8)',
        'grayy':'rgb(119,119,119)',
        'darkpurple': 'rgb(80,55,80)',
        'yelloww': 'rgb(215,242,125)',
        'nudee': 'rgb(165,103,82)'
      }
      
      
    },
  },
  plugins: [],
}
