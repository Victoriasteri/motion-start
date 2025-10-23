// Color palette for Motion Start app
export const colors = {
  // Primary colors - Based on new palette
  primary: {
    main: "#BC6C29", // Warm orange-brown
    light: "#D8E1E3", // Light blue-gray
    dark: "#9A5A21", // Darker orange-brown
    contrast: "#ffffff",
  },

  // Secondary colors - Based on new palette
  secondary: {
    main: "#29505B", // Dark teal
    light: "#D8E1E3", // Light blue-gray
    dark: "#1F3A40", // Darker teal
    contrast: "#ffffff",
  },

  // Background colors - Based on new palette
  background: {
    dark: "#29505B", // Dark teal for dark background
    card: "#D8E1E3", // Light blue-gray for cards
    cardLight: "#F0F4F5", // Very light blue-gray
    light: "#D8E1E3", // Light blue-gray
    lightGradient: "#F0F4F5", // Very light blue-gray
  },

  // Text colors - Based on new palette
  text: {
    primary: "#1F3A40", // Dark teal for readability
    secondary: "#BC6C29", // Warm orange-brown
    light: "#ffffff",
    muted: "rgba(31, 58, 64, 0.7)",
  },

  // Accent colors - Based on new palette
  accent: {
    blue: "#BC6C29", // Warm orange-brown
    pink: "#29505B", // Dark teal
    teal: "#BC6C29", // Warm orange-brown
    coral: "#29505B", // Dark teal
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

// Solid color definitions (no gradients)
export const gradients = {
  // Background colors - Solid colors only
  background: {
    dark: "#29505B", // Dark teal
    light: "#D8E1E3", // Light blue-gray
    card: "#D8E1E3", // Light blue-gray
    cardReverse: "#F0F4F5", // Very light blue-gray
    lightCard: "#F0F4F5", // Very light blue-gray
  },

  // Text colors - Solid colors only
  text: {
    logo: "#BC6C29", // Warm orange-brown
    primary: "#BC6C29", // Warm orange-brown
    secondary: "#1F3A40", // Dark teal
  },

  // Button colors - Solid colors only
  button: {
    primary: "#BC6C29", // Warm orange-brown
    secondary: "#29505B", // Dark teal
    hover: "#9A5A21", // Darker orange-brown
  },

  // Card colors - Solid colors only
  card: {
    primary: "#D8E1E3", // Light blue-gray
    secondary: "#F0F4F5", // Very light blue-gray
    light: "#F0F4F5", // Very light blue-gray
  },
};

// Shadow definitions - No shadows for clean look
export const shadows = {
  // Box shadows - No shadows
  box: {
    small: "none",
    medium: "none",
    large: "none",
    xlarge: "none",
    pink: "none",
    pinkLarge: "none",
  },

  // Text shadows - No shadows
  text: {
    subtle: "none",
    medium: "none",
    strong: "none",
  },
};

// Border definitions - No borders for clean look
export const borders = {
  // Border colors - No borders
  color: {
    primary: "none",
    primaryLight: "none",
    secondary: "none",
    secondaryLight: "none",
    dashed: "none",
    subtle: "none",
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
    borderBottom: "none",
    boxShadow: "none",
  },

  // Card styles
  card: {
    primary: {
      background: gradients.card.primary,
      border: "none",
      borderRadius: borders.radius.large,
      boxShadow: "none",
    },
    secondary: {
      background: gradients.card.secondary,
      border: "none",
      borderRadius: borders.radius.large,
      boxShadow: "none",
    },
    light: {
      background: gradients.card.light,
      border: "none",
      borderRadius: borders.radius.large,
      boxShadow: "none",
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

  // Chip styles - Based on the new palette with high contrast, no borders
  chip: {
    primary: {
      backgroundColor: `rgba(188, 108, 41, 0.2)`,
      color: "#1F3A40", // Dark teal text for high contrast
      border: "none",
    },
    secondary: {
      backgroundColor: `rgba(41, 80, 91, 0.2)`,
      color: "#1F3A40", // Dark teal text for high contrast
      border: "none",
    },
    light: {
      backgroundColor: `rgba(216, 225, 227, 0.2)`,
      color: "#1F3A40", // Dark teal text for high contrast on light background
      border: "none",
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
