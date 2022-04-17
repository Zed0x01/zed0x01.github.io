module.exports = {
  content: ['./public/index.html'],
  theme: {
    extend: {
      width:{
        '1200' : '1170px',
        '992' : '970px',
        '768' : '750px'
      },
      gridTemplateColumns:{
        '350':'repeat(auto-fill,minmax(350px,1fr))',
        '300':'repeat(auto-fill,minmax(300px,1fr))',
        '400':'repeat(auto-fill,minmax(400px,1fr))'
      },
      colors :{
        'lightdrak':'#343f52',
        'lightgray':'#60697b',
      }
    },
  },
  plugins: [],
}
