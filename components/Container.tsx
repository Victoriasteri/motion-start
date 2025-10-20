"use client";

import React from "react";
import { Box, Typography, BoxProps } from "@mui/material";
import { theme as customTheme } from "../styles/theme";

interface ContainerProps extends BoxProps {
  title?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light";
  chips?: Array<{
    label: string;
    color?: "primary" | "secondary";
  }>;
  titleColor?: string;
}

const Container: React.FC<ContainerProps> = ({
  title,
  icon,
  children,
  variant = "primary",
  chips = [],
  sx,
  titleColor = customTheme.colors.text.primary,
  ...props
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return {
          background: customTheme.gradients.card.primary,
          border: customTheme.borders.color.primary,
          boxShadow: customTheme.shadows.box.large,
        };
      case "secondary":
        return {
          background: customTheme.gradients.card.secondary,
          border: customTheme.borders.color.secondary,
          boxShadow: customTheme.shadows.box.pink,
        };
      case "light":
        return {
          background: customTheme.gradients.card.light,
          border: customTheme.borders.color.primaryLight,
          boxShadow: customTheme.shadows.box.medium,
        };
      default:
        return {
          background: customTheme.gradients.card.primary,
          border: customTheme.borders.color.primary,
          boxShadow: customTheme.shadows.box.large,
        };
    }
  };

  const getChipStyles = (chipColor: "primary" | "secondary" = "primary") => {
    return chipColor === "primary"
      ? customTheme.components.chip.primary
      : customTheme.components.chip.secondary;
  };

  return (
    <Box
      sx={{
        p: { xs: 3, sm: 4, md: 5 },
        borderRadius: customTheme.borders.radius.large,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        ...getVariantStyles(),
        "&:hover": {
          transform: "translateY(-2px)",
          transition: "all 0.3s ease",
        },
        ...sx,
      }}
      {...props}
    >
      {title && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: { xs: 2, md: 3 },
          }}
        >
          {icon && (
            <Box
              sx={{
                mr: 2,
                color: customTheme.colors.primary.main,
                fontSize: { xs: "1.75rem", md: "2rem" },
                display: "flex",
                alignItems: "center",
              }}
            >
              {icon}
            </Box>
          )}
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: "bold",
              color: titleColor,
              fontSize: { xs: "1.5rem", md: "2rem" },
            }}
          >
            {title}
          </Typography>
        </Box>
      )}

      <Box
        sx={{
          flex: 1,
          mb: chips.length > 0 ? 3 : 0,
          textAlign: "center",
          "& > *": {
            mb: 2,
            "&:last-child": {
              mb: 0,
            },
          },
        }}
      >
        {children}
      </Box>

      {chips.length > 0 && (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            mt: "auto",
            justifyContent: "center",
          }}
        >
          {chips.map((chip, index) => (
            <Box
              key={index}
              sx={{
                ...getChipStyles(chip.color),
                fontSize: { xs: "0.75rem", md: "0.875rem" },
                px: { xs: 0.75, md: 1 },
                py: 0.5,
                borderRadius: customTheme.borders.radius.medium,
              }}
            >
              {chip.label}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Container;
