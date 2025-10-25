"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
  Link,
} from "@mui/material";
import { PlayArrow, Telegram } from "@mui/icons-material";
import { theme as customTheme } from "../styles/theme";

const Footer: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Box
      sx={{
        backgroundColor: "#D8E1E3",
        py: { xs: 4, md: 6 },
        px: { xs: 2, sm: 3 },
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "center", md: "flex-start" },
            justifyContent: "space-between",
            gap: { xs: 3, md: 4 },
          }}
        >
          {/* Logo and Brand */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <PlayArrow
              sx={{
                color: customTheme.colors.secondary.dark,
                fontSize: { xs: "1.5rem", md: "1.8rem" },
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: customTheme.colors.secondary.dark,
                fontSize: { xs: "1.25rem", md: "1.5rem" },
              }}
            >
              Motion Start
            </Typography>
          </Box>

          {/* Telegram Links */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "center" },
              gap: 1,
            }}
          >
            <Link
              href="https://t.me/Vika_bz"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: customTheme.colors.text.primary,
                textDecoration: "none",
                fontSize: { xs: "0.8rem", md: "0.875rem" },
                "&:hover": {
                  color: customTheme.colors.primary.main,
                },
              }}
            >
              <Telegram sx={{ fontSize: "1rem" }} />
              Напиши мне
            </Link>
            <Link
              href="https://t.me/tori_in_motion"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: customTheme.colors.text.primary,
                textDecoration: "none",
                fontSize: { xs: "0.8rem", md: "0.875rem" },
                "&:hover": {
                  color: customTheme.colors.primary.main,
                },
              }}
            >
              <Telegram sx={{ fontSize: "1rem" }} />
              Канал - Tori in Motion
            </Link>
            <Link
              href="https://t.me/your_it_bestie"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: customTheme.colors.text.primary,
                textDecoration: "none",
                fontSize: { xs: "0.8rem", md: "0.875rem" },
                "&:hover": {
                  color: customTheme.colors.primary.main,
                },
              }}
            >
              <Telegram sx={{ fontSize: "1rem" }} />
              Канал - Твоя IT Подружка
            </Link>
          </Box>

          {/* Copyright */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-end" },
              gap: 1,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: customTheme.colors.text.secondary,
                fontSize: { xs: "0.8rem", md: "0.875rem" },
                textAlign: { xs: "center", md: "right" },
              }}
            >
              © 2024 Motion Start
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: customTheme.colors.text.secondary,
                fontSize: { xs: "0.75rem", md: "0.8rem" },
                textAlign: { xs: "center", md: "right" },
                opacity: 0.8,
              }}
            >
              Создано с ❤️ для моушн-дизайнеров
            </Typography>
          </Box>
        </Box>

        {/* Bottom Border */}
        <Box
          sx={{
            mt: { xs: 3, md: 4 },
            pt: { xs: 3, md: 4 },
            borderTop: `1px solid rgba(41, 80, 91, 0.1)`,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: customTheme.colors.text.secondary,
              fontSize: { xs: "0.75rem", md: "0.8rem" },
              textAlign: "center",
              opacity: 0.7,
              lineHeight: 1.6,
            }}
          >
            Изучайте After Effects, создавайте анимации и начинайте зарабатывать
            в моушн-дизайне
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
