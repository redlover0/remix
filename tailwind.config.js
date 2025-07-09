module.exports = {
  purge: [
    './**/*.html',
    './**/*.js',
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('tailwindcss-hero-patterns'),
  ],
}