"use client";

import React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import { theme as customTheme } from "../styles/theme";

interface ResourceCardProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonColor?: "primary" | "secondary";
  onClick: () => void;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  description,
  buttonText = "Перейти",
  buttonColor = "primary",
  onClick,
}) => {
  return (
    <Card
      sx={{
        p: 3,
        backgroundColor: "#D8E1E3",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 8px 25px rgba(188, 108, 41, 0.15)",
        },
        transition: "all 0.3s ease",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flex: 1,
          p: 0,
        }}
      >
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            {description}
          </Typography>
        </Box>
        <Box>
          <Button
            variant="contained"
            size="small"
            sx={{
              backgroundColor:
                buttonColor === "primary"
                  ? customTheme.colors.primary.main
                  : customTheme.colors.secondary.main,
              color: "#ffffff",
              alignSelf: "flex-start",
              "&:hover": {
                backgroundColor:
                  buttonColor === "primary"
                    ? customTheme.colors.primary.dark
                    : customTheme.colors.secondary.dark,
              },
            }}
            onClick={onClick}
          >
            {buttonText}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ResourceCard;
