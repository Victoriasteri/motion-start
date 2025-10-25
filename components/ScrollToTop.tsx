"use client";

import React, { useState, useEffect } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";
import { theme as customTheme } from "../styles/theme";

const ScrollToTop: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setShowScrollTop(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box
      onClick={scrollToTop}
      sx={{
        position: "fixed",
        bottom: { xs: 15, sm: 20, md: 30 },
        right: { xs: 15, sm: 20, md: 30 },
        width: { xs: 40, sm: 45, md: 60 },
        height: { xs: 40, sm: 45, md: 60 },
        borderRadius: "50%",
        backgroundColor: "rgba(188, 108, 41, 0.7)",
        backdropFilter: "blur(10px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        zIndex: 1000,
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        opacity: showScrollTop ? 0.8 : 0,
        visibility: showScrollTop ? "visible" : "hidden",
        transform: showScrollTop ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        animation: "none",
        "@keyframes pulse": {
          "0%, 100%": {
            transform: "translateY(0) scale(1)",
          },
          "50%": {
            transform: "translateY(0) scale(1.05)",
          },
        },
        "&:hover": {
          backgroundColor: "rgba(188, 108, 41, 0.9)",
          transform: "translateY(-2px) scale(1.05)",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
          opacity: 1,
        },
        "&:active": {
          transform: "translateY(-2px) scale(0.95)",
          transition: "all 0.1s ease",
        },
      }}
    >
      <KeyboardArrowUp
        sx={{
          color: "#ffffff",
          fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.8rem" },
          transition: "transform 0.3s ease",
          transform: "translateY(0)",
        }}
      />
    </Box>
  );
};

export default ScrollToTop;
