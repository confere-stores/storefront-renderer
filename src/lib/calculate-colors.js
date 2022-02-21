// Dependencies
const sass = require('sass')

/**
 *  Combile color range
 * @param {string} primaryColor : Base primary color;
 * @param {string} secondaryColor : Base secondary color;
 * @returns {object} : Containing { css: sring, loadedUrls: Array }
 */
 const generateColorRangeSass = (primaryColor, secondaryColor) => {

  // Compile color variables
  const compiledSass = sass.compileString(`
    $primaryColor: ${primaryColor};
    $secondaryColor: ${secondaryColor};

    @function yiq($color) {
      $red : red($color);
      $green: green($color);
      $blue: blue($color);
      $yiqValue: (($red*.299)+($green*.587)+($blue*.114));
      
      @if $yiqValue >= 128 {
        @return var(--gray-dark)
      } @else {
        @return var(--white)
      }
    }

    @function rgba-color($color) {
      @return #{red($color)}, #{green($color)}, #{blue($color)};
    }
    
    $primaryWhiter: lighten($primaryColor, 75%);
    $primaryWhite: lighten($primaryColor, 50%);
    $primaryLightest: lighten($primaryColor, 33%);
    $primaryLighter: lighten($primaryColor, 21%);
    $primaryLight: lighten($primaryColor, 10%);
    $primaryLighten: lighten($primaryColor, 7%);
    $primaryDarken: darken($primaryColor, 8%);
    $primaryDark: darken($primaryColor, 10%);
    $primaryDarker: darken($primaryColor, 13%);
    $primaryDarkest: darken($primaryColor, 16%);
    $primaryBlack: darken($primaryColor, 75%);

    $secondaryWhiter: lighten($secondaryColor, 75%);
    $secondaryWhite: lighten($secondaryColor, 50%);
    $secondaryLightest: lighten($secondaryColor, 33%);
    $secondaryLighter: lighten($secondaryColor, 21%);
    $secondaryLight: lighten($secondaryColor, 10%);
    $secondaryLighten: lighten($secondaryColor, 7%);
    $secondaryDarken: darken($secondaryColor, 8%);
    $secondaryDark: darken($secondaryColor, 10%);
    $secondaryDarker: darken($secondaryColor, 13%);
    $secondaryDarkest: darken($secondaryColor, 16%);
    $secondaryBlack: darken($secondaryColor, 75%);

    $primaryWhiterYiq: yiq($primaryWhiter);
    $primaryWhiteYiq: yiq($primaryWhite);
    $primaryLightestYiq: yiq($primaryLightest);
    $primaryLighterYiq: yiq($primaryLighter);
    $primaryLightYiq: yiq($primaryLight);
    $primaryLightenYiq: yiq($primaryLighten);
    $primaryDarkenYiq: yiq($primaryDarken);
    $primaryDarkYiq: yiq($primaryDark);
    $primaryDarkerYiq: yiq($primaryDarker);
    $primaryDarkestYiq: yiq($primaryDarkest);
    $primaryBlackYiq: yiq($primaryBlack);
    $primaryYiq: yiq($primaryColor);
    
    $secondaryWhiterYiq: yiq($secondaryWhiter);
    $secondaryWhiteYiq: yiq($secondaryWhite);
    $secondaryLightestYiq: yiq($secondaryLightest);
    $secondaryLighterYiq: yiq($secondaryLighter);
    $secondaryLightYiq: yiq($secondaryLight);
    $secondaryLightenYiq: yiq($secondaryLighten);
    $secondaryDarkenYiq: yiq($secondaryDarken);
    $secondaryDarkYiq: yiq($secondaryDark);
    $secondaryDarkerYiq: yiq($secondaryDarker);
    $secondaryDarkestYiq: yiq($secondaryDarkest);
    $secondaryBlackYiq: yiq($secondaryBlack);
    $secondaryYiq: yiq($secondaryColor);

    $primaryWhiterRgba: rgba-color($primaryWhiter);
    $primaryWhiteRgba: rgba-color($primaryWhite);
    $primaryLightestRgba: rgba-color($primaryLightest);
    $primaryLighterRgba: rgba-color($primaryLighter);
    $primaryLightRgba: rgba-color($primaryLight);
    $primaryLightenRgba: rgba-color($primaryLighten);
    $primaryDarkenRgba: rgba-color($primaryDarken);
    $primaryDarkRgba: rgba-color($primaryDark);
    $primaryDarkerRgba: rgba-color($primaryDarker);
    $primaryDarkestRgba: rgba-color($primaryDarkest);
    $primaryBlackRgba: rgba-color($primaryBlack);
    $primaryRgba: rgba-color($primaryColor);

    $secondaryWhiterRgba: rgba-color($secondaryWhiter);
    $secondaryWhiteRgba: rgba-color($secondaryWhite);
    $secondaryLightestRgba: rgba-color($secondaryLightest);
    $secondaryLighterRgba: rgba-color($secondaryLighter);
    $secondaryLightRgba: rgba-color($secondaryLight);
    $secondaryLightenRgba: rgba-color($secondaryLighten);
    $secondaryDarkenRgba: rgba-color($secondaryDarken);
    $secondaryDarkRgba: rgba-color($secondaryDark);
    $secondaryDarkerRgba: rgba-color($secondaryDarker);
    $secondaryDarkestRgba: rgba-color($secondaryDarkest);
    $secondaryBlackRgba: rgba-color($secondaryBlack);
    $secondaryRgba: rgba-color($secondaryColor);

    :root {
      --primary: #{$primaryColor};
      --primary-whiter: #{$primaryWhiter};
      --primary-white: #{$primaryWhite};
      --primary-black: #{$primaryBlack};
      --primary-lightest: #{$primaryLightest};
      --primary-light: #{$primaryLight};
      --primary-lighter: #{$primaryLighter};
      --primary-lighten: #{$primaryLighten};
      --primary-dark: #{$primaryDark};
      --primary-darker: #{$primaryDarker};
      --primary-darkest: #{$primaryDarkest};
      --primary-darken: #{$primaryDarken};
      --secondary: #{$secondaryColor};
      --secondary-whiter: #{$secondaryWhiter};
      --secondary-white: #{$secondaryWhite};
      --secondary-black: #{$secondaryBlack};
      --secondary-light: #{$secondaryLight};
      --secondary-lightest: #{$secondaryLightest};
      --secondary-lighter: #{$secondaryLighter};
      --secondary-lighten: #{secondaryLighten};
      --secondary-dark: #{$secondaryDark};
      --secondary-darker: #{$secondaryDarker};
      --secondary-darkest: #{$secondaryDarkest};
      --secondary-darken: #{$secondaryDarken};

      --primary-yiq: #{$primaryYiq};
      --primary-whiter-yiq: #{$primaryWhiterYiq};
      --primary-white-yiq: #{$primaryWhiteYiq};
      --primary-black-yiq: #{$primaryBlackYiq};
      --primary-lightest-yiq: #{$primaryLightestYiq};
      --primary-light-yiq: #{$primaryLightYiq};
      --primary-lighter-yiq: #{$primaryLighterYiq};
      --primary-lighten-yiq: #{$primaryLightenYiq};
      --primary-dark-yiq: #{$primaryDarkYiq};
      --primary-darker-yiq: #{$primaryDarkerYiq};
      --primary-darkest-yiq: #{$primaryDarkestYiq};
      --primary-darken-yiq: #{$primaryDarkenYiq};
      --secondary-yiq: #{$secondaryYiq};
      --secondary-whiter-yiq: #{$secondaryWhiterYiq};
      --secondary-white-yiq: #{$secondaryWhiteYiq};
      --secondary-black-yiq: #{$secondaryBlackYiq};
      --secondary-lightest-yiq: #{$secondaryLightestYiq};
      --secondary-light-yiq: #{$secondaryLightYiq};
      --secondary-lighter-yiq: #{$secondaryLighterYiq};
      --secondary-lighten-yiq: #{$secondaryLightenYiq};
      --secondary-dark-yiq: #{$secondaryDarkYiq};
      --secondary-darker-yiq: #{$secondaryDarkerYiq};
      --secondary-darkest-yiq: #{$secondaryDarkestYiq};
      --secondary-darken-yiq: #{$secondaryDarkenYiq};

      --primary-rgb: #{$primaryRgba};
      --primary-whiter-rgb: #{$primaryWhiterRgba};
      --primary-white-rgb: #{$primaryWhiteRgba};
      --primary-black-rgb: #{$primaryBlackRgba};
      --primary-lightest-rgb: #{$primaryLightestRgba};
      --primary-light-rgb: #{$primaryLightRgba};
      --primary-lighter-rgb: #{$primaryLighterRgba};
      --primary-lighten-rgb: #{$primaryLightenRgba};
      --primary-dark-rgb: #{$primaryDarkRgba};
      --primary-darker-rgb: #{$primaryDarkerRgba};
      --primary-darkest-rgb: #{$primaryDarkestRgba};
      --primary-darken-rgb: #{$primaryDarkenRgba};
      --secondary-rgb: #{$secondaryRgba};
      --secondary-whiter-rgb: #{$secondaryWhiterRgba};
      --secondary-white-rgb: #{$secondaryWhiteRgba};
      --secondary-black-rgb: #{$secondaryBlackRgba};
      --secondary-lightest-rgb: #{$secondaryLightestRgba};
      --secondary-light-rgb: #{$secondaryLightRgba};
      --secondary-lighter-rgb: #{$secondaryLighterRgba};
      --secondary-lighten-rgb: #{$secondaryLightenRgba};
      --secondary-dark-rgb: #{$secondaryDarkRgba};
      --secondary-darker-rgb: #{$secondaryDarkerRgba};
      --secondary-darkest-rgb: #{$secondaryDarkestRgba};
      --secondary-darken-rgb: #{$secondaryDarkenRgba};
    }
  `);

  return compiledSass;
}

const bootswatchColors = {
  cerulean: {
    primary: '#2fa4e7',
    secondary: '#e9ecef'
  },
  cosmo: {
    primary: '#2780e3',
    secondary: '#373a3c'
  },
  cyborg: {
    primary: '#2a9fd6',
    secondary: '#555'
  },
  darkly: {
    primary: '#375a7f',
    secondary: '#444'
  },
  flatly: {
    primary: '#2c3e50',
    secondary: '#95a5a6'
  },
  journal: {
    primary: '#eb6864',
    secondary: '#aaa'
  },
  litera: {
    primary: '#4582ec',
    secondary: '#adb5bd'
  },
  lumen: {
    primary: '#158cba',
    secondary: '#f0f0f0'
  },
  lux: {
    primary: '#1a1a1a',
    secondary: '#919aa1'
  },
  materia: {
    primary: '#2196f3',
    secondary: '#666'
  },
  minty: {
    primary: '#78c2ad',
    secondary: '#f3969a'
  },
  pulse: {
    primary: '#593196',
    secondary: '#a991d4'
  },
  sandstone: {
    primary: '#325d88',
    secondary: '#8e8c84'
  },
  simplex: {
    primary: '#d9230f',
    secondary: '#777'
  },
  sketchy: {
    primary: '#333',
    secondary: '#555'
  },
  slate: {
    primary: '#3a3f44',
    secondary: '#7a8288'
  },
  solar: {
    primary: '#b58900',
    secondary: '#839496'
  },
  spacelab: {
    primary: '#446e9b',
    secondary: '#999'
  },
  united: {
    primary: '#e95420',
    secondary: '#aea79f'
  },
  yeti: {
    primary: '#008cba',
    secondary: '#adb5bd'
  }
}

const customThemesColors = {
  'clean-dark': {
    secondary: '#fff'
  },
  'clean-gray': {
    secondary: '#343a40'
  },
  'clean-white': {
    secondary: '#383d44'
  }
}

const genColorCssVars = (primary, secondary) => {
  const rootVars = generateColorRangeSass(primary, secondary)
  return rootVars.css || ''
}

const getThemeColors = (bootswatchTheme, customTheme, brandColors = {}) => {
  if (bootswatchTheme) {
    const bootswatchThemeColors = bootswatchColors[bootswatchTheme]
    if (bootswatchThemeColors) {
      brandColors = Object.assign(bootswatchThemeColors, brandColors)
    }
  }
  if (customTheme) {
    const customThemeColors = customThemesColors[customTheme]
    if (customThemeColors) {
      Object.assign(brandColors, customThemeColors)
    }
  }
  return brandColors
}

module.exports = { genColorCssVars, getThemeColors }
