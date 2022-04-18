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
      },
      animation : {
        'up' : 'up 2s ease-in-out',
        'down' : 'up 2s ease-in-out',
        'right' : 'right 2s ease-in-out',
        'left' : 'left 2s ease-in-out',
        'light' : 'light 2s ease-in-out',
      },

      keyframes : {
        up : {
          'from' : {transform : 'translateY(100px)' , opacity:'0'},
          'to':{transform : 'translateY(0)' , opacity : '1'}
        },
        down : {
          'from' : {transform : 'translateY(-100px)' , opacity:'0'},
          'to':{transform : 'translateY(0)' , opacity : '1'}
        },
        left : {
          'from' : {transform : 'translateX(-100px)' , opacity:'0'},
          'to':{transform : 'translateY(0)' , opacity : '1'}
        },
        right : {
          'from' : {transform : 'translateX(100px)' , opacity:'0'},
          'to':{transform : 'translateY(0)' , opacity : '1'}
        },
        light : {
          'from' : { opacity: '0' },
          'to' : { opacity : '1'}
        }
      }
      
    },
  },
  plugins: [],
}
