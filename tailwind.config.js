module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        discord: '#5865F2',
        twitter: '#1DA1F2',
        github: '#bd2c00',
        pink: {
          '1': '#FF5ADB',
          '2': '#FF86E4'
        },
        blue: {
          '1': '#1768FC',
          '2': '#4385FF',
          '3': '#6A9FFF'
        },
        green: {
          '1': '#90FF5A',
          '2': '#72FF2F',
          '3': '#D4FFBF'
        },
        yellow: '#FFF62B',
        orange: '#FF7F2B',
        red: '#FF5A7A',
        gray: {
          0: '#000000',
          1: '#333333',
          2: '#4F4F4F',
          3: '#828282',
          4: '#BDBDBD',
          5: '#E0E0E0',
          6: '#F0F0F0'
        }
      },
      fontFamily: {
        'sans': 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
      },
      boxShadow: {
          light: '0 0 10px 2px #333333B2'
      },
      width: {
        'half-screen': '50vw'
      },
      height: {
        'half-screen': '50vh'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
