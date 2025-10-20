# Color Theme Examples

This file shows how to easily change the entire app's color scheme by modifying the `styles/theme.ts` file.

## Quick Color Changes

### 1. Change Primary Color (Teal to Blue)

```typescript
// In styles/theme.ts, change:
primary: {
  main: "#66bfbf",  // Change this to "#3b82f6" for blue
  light: "#8dd3d3", // Change this to "#60a5fa" for light blue
  dark: "#4a9a9a",  // Change this to "#1d4ed8" for dark blue
  contrast: "#ffffff",
},
```

### 2. Change Secondary Color (Pink to Purple)

```typescript
// In styles/theme.ts, change:
secondary: {
  main: "#f76b8a",  // Change this to "#8b5cf6" for purple
  light: "#fa8ba5", // Change this to "#a78bfa" for light purple
  dark: "#e55a7a",  // Change this to "#7c3aed" for dark purple
  contrast: "#ffffff",
},
```

### 3. Change Background Colors

```typescript
// In styles/theme.ts, change:
background: {
  dark: "#1a1a2e",     // Change to "#0f172a" for darker slate
  card: "#2c3e50",     // Change to "#1e293b" for slate card
  cardLight: "#34495e", // Change to "#334155" for lighter slate
  light: "#eaf6f6",    // Change to "#f8fafc" for lighter background
  lightGradient: "#fcfefe", // Change to "#ffffff" for pure white
},
```

### 4. Create a Dark Theme

```typescript
// In styles/theme.ts, change:
background: {
  dark: "#000000",     // Pure black
  card: "#111111",     // Very dark gray
  cardLight: "#222222", // Dark gray
  light: "#1a1a1a",    // Dark background
  lightGradient: "#2a2a2a", // Dark gradient
},
```

### 5. Create a Warm Theme

```typescript
// In styles/theme.ts, change:
primary: {
  main: "#f59e0b",  // Amber
  light: "#fbbf24", // Light amber
  dark: "#d97706",  // Dark amber
  contrast: "#ffffff",
},
secondary: {
  main: "#ef4444",  // Red
  light: "#f87171", // Light red
  dark: "#dc2626",  // Dark red
  contrast: "#ffffff",
},
```

## How It Works

1. **Centralized Colors**: All colors are defined in `styles/theme.ts`
2. **Automatic Updates**: When you change a color in the theme file, it updates everywhere in the app
3. **Consistent Design**: All components use the same color palette
4. **Easy Maintenance**: No need to hunt through multiple files to change colors

## Files That Use the Theme

- `components/HomePage.tsx` - Main homepage
- `components/Navbar.tsx` - Navigation bar
- `app/tools/shape-animation/page.tsx` - Shape animation page
- `data/keyTools.ts` - Key tools data
- All other tool pages (when updated)

## Best Practices

1. **Test Changes**: Always test color changes on both light and dark sections
2. **Accessibility**: Ensure sufficient contrast between text and background
3. **Consistency**: Use the predefined color variants (light, dark, main) rather than custom colors
4. **Gradients**: Update both the base color and gradient definitions when changing colors
