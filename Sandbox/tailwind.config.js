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
        '250':'repeat(auto-fill,minmax(250px,1fr))',
        '400':'repeat(auto-fill,minmax(400px,1fr))'
      },
      colors :{
        'lightdrak':'#343f52',
        'lightgray':'#60697b',
      },
      animation : {
        'up' : 'up 2s ease-in-out forwards',
        'down' : 'up 2s ease-in-out forwards',
        'right' : 'right 2s ease-in-out forwards',
        'left' : 'left 2s ease-in-out forwards',
        'light' : 'light 2s ease-in-out forwards',
      },

      keyframes : {
        up : {
          'to':{transform : 'translateY(0)' , opacity : '1'}
        },
        down : {
          'to':{transform : 'translateY(0)' , opacity : '1'}
        },
        left : {
          'to':{transform : 'translateY(0)' , opacity : '1'}
        },
        right : {
          'to':{transform : 'translateY(0)' , opacity : '1'}
        },
        light : {
          'to' : { opacity : '1'}
        }
      }
      
    },
  },
  plugins: [],
}
