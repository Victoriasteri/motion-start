// Color palette and gradients for Motion Start app
export const colors = {
  // Primary colors - Deep purple to vibrant pink
  primary: {
    main: "#E45A92",
    light: "#FFACAC",
    dark: "#5D2F77",
    contrast: "#ffffff",
  },

  // Secondary colors - Deep purple
  secondary: {
    main: "#3E1E68",
    light: "#5D2F77",
    dark: "#2A1345",
    contrast: "#ffffff",
  },

  // Background colors - Based on the new palette
  background: {
    dark: "#3E1E68",
    card: "#5D2F77",
    cardLight: "#7A4A8A",
    light: "#FFACAC",
    lightGradient: "#FFE5E5",
  },

  // Text colors - Based on the new palette
  text: {
    primary: "#FFACAC",
    secondary: "#3E1E68",
    light: "#ffffff",
    muted: "rgba(255, 172, 172, 0.8)",
  },

  // Accent colors - Based on the new palette
  accent: {
    blue: "#E45A92",
    pink: "#FFACAC",
    teal: "#E45A92",
    coral: "#FFACAC",
  },

  // Utility colors
  utility: {
    white: "#ffffff",
    black: "#000000",
    transparent: "transparent",
  },

  // Opacity variants
  opacity: {
    light: "0.1",
    medium: "0.2",
    strong: "0.3",
    heavy: "0.5",
  },
};

// Gradient definitions
export const gradients = {
  // Background gradients - Based on the new palette
  background: {
    dark: "linear-gradient(135deg, #3E1E68 0%, #5D2F77 50%, #7A4A8A 100%)",
    light: "linear-gradient(135deg, #FFACAC 0%, #FFE5E5 50%, #FFF0F0 100%)",
    card: "linear-gradient(135deg, #5D2F77 0%, #7A4A8A 100%)",
    cardReverse: "linear-gradient(135deg, #7A4A8A 0%, #5D2F77 100%)",
    lightCard: "linear-gradient(135deg, #FFACAC 0%, #FFE5E5 100%)",
  },

  // Text gradients - Based on the new palette
  text: {
    logo: "linear-gradient(45deg, #E45A92, #FFACAC)",
    primary: "linear-gradient(45deg, #E45A92, #FFACAC)",
    secondary: "linear-gradient(45deg, #3E1E68, #5D2F77)",
  },

  // Button gradients - Based on the new palette
  button: {
    primary: "linear-gradient(135deg, #E45A92 0%, #5D2F77 100%)",
    secondary: "linear-gradient(135deg, #3E1E68 0%, #2A1345 100%)",
    hover: "linear-gradient(135deg, #FFACAC 0%, #E45A92 100%)",
  },

  // Card gradients - Based on the new palette
  card: {
    primary: "linear-gradient(135deg, #5D2F77 0%, #7A4A8A 100%)",
    secondary: "linear-gradient(135deg, #7A4A8A 0%, #5D2F77 100%)",
    light: "linear-gradient(135deg, #FFACAC 0%, #FFE5E5 100%)",
  },
};

// Shadow definitions
export const shadows = {
  // Box shadows - Based on the new palette
  box: {
    small: "0 2px 8px rgba(0, 0, 0, 0.1)",
    medium: "0 4px 16px rgba(0, 0, 0, 0.15)",
    large: "0 8px 32px rgba(228, 90, 146, 0.2)",
    xlarge: "0 12px 40px rgba(228, 90, 146, 0.15)",
    pink: "0 8px 32px rgba(255, 172, 172, 0.2)",
    pinkLarge: "0 12px 40px rgba(255, 172, 172, 0.15)",
  },

  // Text shadows
  text: {
    subtle: "0 1px 2px rgba(0, 0, 0, 0.1)",
    medium: "0 2px 4px rgba(0, 0, 0, 0.2)",
    strong: "0 4px 8px rgba(0, 0, 0, 0.3)",
  },
};

// Border definitions
export const borders = {
  // Border colors - Based on the new palette
  color: {
    primary: `1px solid rgba(228, 90, 146, 0.3)`,
    primaryLight: `1px solid rgba(228, 90, 146, 0.2)`,
    secondary: `1px solid rgba(62, 30, 104, 0.3)`,
    secondaryLight: `1px solid rgba(62, 30, 104, 0.2)`,
    dashed: `2px dashed rgba(228, 90, 146, 0.3)`,
    subtle: `1px solid rgba(255, 255, 255, 0.1)`,
  },

  // Border radius
  radius: {
    small: "4px",
    medium: "8px",
    large: "12px",
    xlarge: "16px",
    round: "50%",
  },
};

// Spacing scale
export const spacing = {
  xs: "0.5rem",
  sm: "1rem",
  md: "1.5rem",
  lg: "2rem",
  xl: "3rem",
  xxl: "4rem",
};

// Typography scale
export const typography = {
  // Font sizes
  sizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
  },

  // Font weights
  weights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },

  // Line heights
  lineHeights: {
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
};

// Animation durations
export const animations = {
  duration: {
    fast: "0.15s",
    normal: "0.3s",
    slow: "0.5s",
    slower: "0.75s",
  },

  easing: {
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    custom: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
};

// Component-specific styles
export const components = {
  // Navbar styles
  navbar: {
    background: gradients.background.dark,
    backdropFilter: "blur(10px)",
    borderBottom: borders.color.primaryLight,
    boxShadow: shadows.box.large,
  },

  // Card styles
  card: {
    primary: {
      background: gradients.card.primary,
      border: borders.color.primary,
      borderRadius: borders.radius.large,
      boxShadow: shadows.box.large,
    },
    secondary: {
      background: gradients.card.secondary,
      border: borders.color.secondary,
      borderRadius: borders.radius.large,
      boxShadow: shadows.box.pink,
    },
    light: {
      background: gradients.card.light,
      border: borders.color.primaryLight,
      borderRadius: borders.radius.large,
      boxShadow: shadows.box.medium,
    },
  },

  // Button styles
  button: {
    primary: {
      background: gradients.button.primary,
      color: colors.text.light,
      borderRadius: borders.radius.medium,
      transition: `all ${animations.duration.normal} ${animations.easing.ease}`,
      "&:hover": {
        background: gradients.button.hover,
        transform: "translateY(-2px)",
      },
    },
  },

  // Chip styles - Based on the new palette with high contrast
  chip: {
    primary: {
      backgroundColor: `rgba(228, 90, 146, 0.2)`,
      color: "#FFFFFF", // White text for high contrast
      border: borders.color.primaryLight,
    },
    secondary: {
      backgroundColor: `rgba(62, 30, 104, 0.2)`,
      color: "#FFFFFF", // White text for high contrast
      border: borders.color.secondaryLight,
    },
    light: {
      backgroundColor: `rgba(255, 172, 172, 0.2)`,
      color: "#3E1E68", // Dark text for high contrast on light background
      border: borders.color.primaryLight,
    },
  },
};

// Export a complete theme object
export const theme = {
  colors,
  gradients,
  shadows,
  borders,
  spacing,
  typography,
  animations,
  components,
};

export default theme;
