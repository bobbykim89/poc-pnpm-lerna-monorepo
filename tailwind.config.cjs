/** @type {import('tailwindcss').Config} */

const {
  mclTheme,
} = require('./src/components/manguito-theme/lib/theme/themeVariables.cjs')

module.exports = {
  content: ['./src/**/*.{vue,ts,js,cjs}'],
  plugins: [mclTheme()],
}
