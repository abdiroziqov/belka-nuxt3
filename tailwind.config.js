module.exports = {
  purge: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        orange: '#FC631B',
        gray: {
          100: '#999999',
          200: '#222425'
        },
        blue: {
          100: '#E5E5E5',
        },
      },
      fontFamily: {
        sans: ['Manrope']
      },
      dropShadow: {
        'xs': '0px 4px 22px rgba(0, 0, 0, 0.25',
      },
      lineHeight: {
        33: '33px',
        130: '130%',
      }
    },
  },
  plugins: [],
  corePlugins: {
    container: false,
  }
}
