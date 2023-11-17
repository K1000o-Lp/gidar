import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

const generatedLightScheme = {
  "colors": {
    "primary": "rgb(71, 88, 169)",
    "onPrimary": "rgb(255, 255, 255)",
    "primaryContainer": "rgb(221, 225, 255)",
    "onPrimaryContainer": "rgb(0, 19, 86)",
    "secondary": "rgb(0, 95, 175)",
    "onSecondary": "rgb(255, 255, 255)",
    "secondaryContainer": "rgb(212, 227, 255)",
    "onSecondaryContainer": "rgb(0, 28, 58)",
    "tertiary": "rgb(0, 104, 116)",
    "onTertiary": "rgb(255, 255, 255)",
    "tertiaryContainer": "rgb(151, 240, 255)",
    "onTertiaryContainer": "rgb(0, 31, 36)",
    "error": "rgb(186, 26, 26)",
    "onError": "rgb(255, 255, 255)",
    "errorContainer": "rgb(255, 218, 214)",
    "onErrorContainer": "rgb(65, 0, 2)",
    "background": "rgb(254, 251, 255)",
    "onBackground": "rgb(27, 27, 31)",
    "surface": "rgb(254, 251, 255)",
    "onSurface": "rgb(27, 27, 31)",
    "surfaceVariant": "rgb(226, 225, 236)",
    "onSurfaceVariant": "rgb(69, 70, 79)",
    "outline": "rgb(118, 118, 128)",
    "outlineVariant": "rgb(198, 197, 208)",
    "shadow": "rgb(0, 0, 0)",
    "scrim": "rgb(0, 0, 0)",
    "inverseSurface": "rgb(48, 48, 52)",
    "inverseOnSurface": "rgb(243, 240, 244)",
    "inversePrimary": "rgb(185, 195, 255)",
    "elevation": {
      "level0": "transparent",
      "level1": "rgb(245, 243, 251)",
      "level2": "rgb(239, 238, 248)",
      "level3": "rgb(234, 233, 246)",
      "level4": "rgb(232, 231, 245)",
      "level5": "rgb(228, 228, 243)"
    },
    "surfaceDisabled": "rgba(27, 27, 31, 0.12)",
    "onSurfaceDisabled": "rgba(27, 27, 31, 0.38)",
    "backdrop": "rgba(47, 48, 56, 0.4)"
  }
}

export const theme = {
  ...DefaultTheme,
  colors: generatedLightScheme.colors,
}
