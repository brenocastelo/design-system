import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
} from '@br-ignite-ui/tokens';
import { createStitches, defaultThemeMap } from '@stitches/react';

export const {
  styled,
  theme,
  createTheme,
  css,
  globalCss,
  keyframes,
  getCssText,
  config,
} = createStitches({
  themeMap: { ...defaultThemeMap, width: 'space', height: 'space' },
  theme: {
    colors,
    fonts,
    fontWeights,
    fontSizes,
    lineHeights,
    radii,
    space,
  },
});
