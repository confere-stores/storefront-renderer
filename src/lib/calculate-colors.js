const { yiq } = require('yiq')

const LightenDarkenColor = (col, amt) => {
  let usePound = false
  if (col[0] == '#') {
    col = col.slice(1)
    usePound = true
  }

  const num = parseInt(col, 16)

  let r = (num >> 16) + amt
  if (r > 255) r = 255
  else if (r < 0) r = 0

  let b = ((num >> 8) & 0x00FF) + amt
  if (b > 255) b = 255
  else if (b < 0) b = 0

  let g = (num & 0x0000FF) + amt
  if (g > 255) g = 255
  else if (g < 0) g = 0

  const hex = (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16)
  if (hex === '#0') return '#000000'
  return hex
}

const hexToRgb = (hex) => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b
  })

  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : null
}

const calculateColors = (primary, secondary) => {
  const colors = {
    '--primary': primary,
    '--primary-yiq': yiq(primary),
    '--primary-rgb': hexToRgb(primary),
    '--primary-whiter': LightenDarkenColor(primary, 191),
    '--primary-white': LightenDarkenColor(primary, 128),
    '--primary-lightest': LightenDarkenColor(primary, 84),
    '--primary-lightest-rgb': hexToRgb(LightenDarkenColor(primary, 84)),
    '--primary-lightest-yiq': yiq(LightenDarkenColor(primary, 84)),
    '--primary-lighter': LightenDarkenColor(primary, 54),
    '--primary-lighter-rgb': hexToRgb(LightenDarkenColor(primary, 54)),
    '--primary-lighter-yiq': yiq(LightenDarkenColor(primary, 54)),
    '--primary-light': LightenDarkenColor(primary, 26),
    '--primary-light-rgb': hexToRgb(LightenDarkenColor(primary, 26)),
    '--primary-light-yiq': yiq(LightenDarkenColor(primary, 26)),
    '--primary-lighten': LightenDarkenColor(primary, 18),
    '--primary-lighten-rgb': hexToRgb(LightenDarkenColor(primary, 18)),
    '--primary-lighten-yiq': yiq(LightenDarkenColor(primary, 18)),
    '--primary-darken': LightenDarkenColor(primary, -6),
    '--primary-darken-rgb': hexToRgb(LightenDarkenColor(primary, -6)),
    '--primary-darken-yiq': yiq(LightenDarkenColor(primary, -6)),
    '--primary-dark': LightenDarkenColor(primary, -12),
    '--primary-dark-rgb': hexToRgb(LightenDarkenColor(primary, -12)),
    '--primary-dark-yiq': yiq(LightenDarkenColor(primary, -12)),
    '--primary-darker': LightenDarkenColor(primary, -18),
    '--primary-darker-rgb': hexToRgb(LightenDarkenColor(primary, -18)),
    '--primary-darker-yiq': yiq(LightenDarkenColor(primary, -18)),
    '--primary-darkest': LightenDarkenColor(primary, -54),
    '--primary-darkest-rgb': hexToRgb(LightenDarkenColor(primary, -56)),
    '--primary-darkest-yiq': yiq(LightenDarkenColor(primary, -56)),
    '--primary-black': 'black',
    '--secondary': secondary,
    '--secondary-yiq': yiq(secondary),
    '--secondary-rgb': hexToRgb(secondary),
    '--secondary-whiter': LightenDarkenColor(secondary, 191),
    '--secondary-white': LightenDarkenColor(secondary, 128),
    '--secondary-lightest': LightenDarkenColor(secondary, 84),
    '--secondary-lightest-rgb': hexToRgb(LightenDarkenColor(secondary, 84)),
    '--secondary-lightest-yiq': yiq(LightenDarkenColor(secondary, 84)),
    '--secondary-lighter': LightenDarkenColor(secondary, 54),
    '--secondary-lighter-rgb': hexToRgb(LightenDarkenColor(secondary, 54)),
    '--secondary-lighter-yiq': yiq(LightenDarkenColor(secondary, 54)),
    '--secondary-light': LightenDarkenColor(secondary, 26),
    '--secondary-light-rgb': hexToRgb(LightenDarkenColor(secondary, 26)),
    '--secondary-light-yiq': yiq(LightenDarkenColor(secondary, 26)),
    '--secondary-lighten': LightenDarkenColor(secondary, 18),
    '--secondary-lighten-rgb': hexToRgb(LightenDarkenColor(secondary, 18)),
    '--secondary-lighten-yiq': yiq(LightenDarkenColor(secondary, 18)),
    '--secondary-darken': LightenDarkenColor(secondary, -6),
    '--secondary-darken-rgb': hexToRgb(LightenDarkenColor(secondary, -6)),
    '--secondary-darken-yiq': yiq(LightenDarkenColor(secondary, -6)),
    '--secondary-dark': LightenDarkenColor(secondary, -12),
    '--secondary-dark-rgb': hexToRgb(LightenDarkenColor(secondary, -12)),
    '--secondary-dark-yiq': yiq(LightenDarkenColor(secondary, -12)),
    '--secondary-darker': LightenDarkenColor(secondary, -18),
    '--secondary-darker-rgb': hexToRgb(LightenDarkenColor(secondary, -18)),
    '--secondary-darker-yiq': yiq(LightenDarkenColor(secondary, -18)),
    '--secondary-darkest': LightenDarkenColor(secondary, -54),
    '--secondary-darkest-rgb': hexToRgb(LightenDarkenColor(secondary, -56)),
    '--secondary-darkest-yiq': yiq(LightenDarkenColor(secondary, -56)),
  }

  let css = ''
  Object.keys(colors).map((key) => {
    css += `${key}: ${colors[key]};\n`
  })

  return {
    colors,
    css
  }
}

module.exports = calculateColors
