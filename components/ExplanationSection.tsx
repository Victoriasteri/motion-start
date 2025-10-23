import React from "react";
import { Typography, Box, Paper } from "@mui/material";
import { theme as customTheme } from "../styles/theme";

interface ExplanationSectionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  backgroundColor?: string;
  border?: string;
  boxShadow?: string;
  children?: React.ReactNode;
}

const ExplanationSection: React.FC<ExplanationSectionProps> = ({
  icon,
  title,
  description,
  backgroundColor = "transparent",
  border = "none",
  boxShadow = "none",
  children,
}) => {
  return (
    <Box sx={{ flex: 1 }}>
      <Paper
        sx={{
          p: 4,
          backgroundColor,
          border,
          boxShadow,
          borderRadius: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: customTheme.colors.primary.main,
            mb: 2,
            display: "flex",
            alignItems: "center",
          }}
        >
          {icon}
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: customTheme.colors.text.primary,
            lineHeight: 1.6,
            mb: children ? 2 : 0,
          }}
        >
          {description}
        </Typography>
        {children}
      </Paper>
    </Box>
  );
};

export default ExplanationSection;
