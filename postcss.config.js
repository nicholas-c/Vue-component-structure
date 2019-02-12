const join = require('path').join
const tailwindJS = join(__dirname, 'tailwind.js')

module.exports = {
  plugins: [
    require('postcss-nested'),
    require('tailwindcss')(tailwindJS),
    require('autoprefixer')
  ]
}
