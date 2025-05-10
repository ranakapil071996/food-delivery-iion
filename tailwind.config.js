module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        primaryHover: 'var(--primary-hover)',
        primaryLight: 'var(--primary-light)',
        nGrey: 'var(--grey)',
        nGreyLight: 'var(--grey-light)',
        nGreyDark: 'var(--grey-dark)',
        nGreyLightNew: 'var(--grey-light-new)',
      },
    },
  },
  important: true,
  corePlugins: {
    preflight: false,
  },
  plugins: [],
}
