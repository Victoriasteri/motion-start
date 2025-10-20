"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Typography,
  Box,
  Card,
  CardContent,
  Paper,
  Chip,
  useMediaQuery,
  useTheme,
  Divider,
} from "@mui/material";
import { Person, VideoLibrary, Palette, Code } from "@mui/icons-material";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import { keyTools } from "../data/keyTools";
import { theme as customTheme } from "../styles/theme";
import Container from "./Container";

const HomePage: React.FC = () => {
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
    <Box sx={{ minHeight: { xs: "auto", md: "100vh" } }}>
      {/* Hero Section with Video Background */}
      <Box
        sx={{
          minHeight: { xs: "auto", md: "100vh" },
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{
            position: isMobile ? "relative" : "absolute",
            top: isMobile ? undefined : 0,
            left: isMobile ? undefined : 0,
            width: "100%",
            height: isMobile ? "auto" : "100%",
            display: "block",
            objectFit: isMobile ? "contain" : "cover",
            objectPosition: "center",
            zIndex: 0,
          }}
        >
          <source src="/bg_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Light Background - Clean light background */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: customTheme.gradients.background.light,
            zIndex: -1,
          }}
        />
      </Box>

      {/* Dark Content Sections */}
      <Box sx={{ backgroundColor: customTheme.colors.background.dark }}>
        <Box
          sx={{
            pt: { xs: 2, md: 8 },
            pb: { xs: 4, md: 8 },
            px: { xs: 2, sm: 3 },
            margin: "0 auto",
            width: "100%",
            maxWidth: "1200px",
            backgroundColor: "transparent",
          }}
        >
          {/* About Me Section */}
          <Container
            titleColor="white"
            title="Обо мне"
            variant="primary"
            sx={{
              mb: { xs: 4, md: 6 },
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.8,
                mb: { xs: 2, md: 3 },
                color: "white",
              }}
            >
              Привет! Меня зовут Виктория, и я занимаюсь 2D моушн-дизайном уже
              более 3 лет. За это время я поняла, какие инструменты и техники
              действительно важны для начала заработка в этой сфере.
            </Typography>
            <Divider color={customTheme.colors.text.primary} sx={{ mb: 3 }} />
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.8,
                color: "white",
              }}
            >
              Здесь я делюсь гайдом — что нужно изучить в первую очередь, какие
              инструменты After Effects действительно важны, и какие техники
              помогут вам начать зарабатывать быстрее.
            </Typography>
          </Container>

          {/* Motion Design Info Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 2, sm: 3, md: 4 },
              mb: { xs: 4, md: 6 },
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Container
                title="Зачем нужен гайд?"
                icon={<HelpCenterIcon sx={{ color: "white", fontSize: 30 }} />}
                titleColor="white"
                variant="primary"
                chips={[
                  { label: "Приоритетные инструменты", color: "primary" },
                  { label: "Практические техники", color: "primary" },
                  { label: "Готовые решения", color: "primary" },
                  { label: "Быстрый старт", color: "primary" },
                ]}
                sx={{ height: "100%" }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "1rem", md: "1.1rem" },
                    lineHeight: 1.8,
                    color: "white",
                  }}
                >
                  After Effects — огромная программа с сотнями инструментов. Но
                  для начала заработка нужно знать только 20% из них. Этот гайд
                  покажет, какие инструменты действительно важны для первых
                  заказов.
                </Typography>
              </Container>
            </Box>

            <Box sx={{ flex: 1 }}>
              <Container
                title="Что вы найдете здесь"
                titleColor="white"
                icon={<HistoryEduIcon sx={{ color: "white", fontSize: 30 }} />}
                variant="secondary"
                chips={[
                  { label: "Shape Animation", color: "secondary" },
                  { label: "Text Animation", color: "secondary" },
                  { label: "Masking", color: "secondary" },
                  { label: "Expressions", color: "secondary" },
                ]}
                sx={{ height: "100%" }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "1rem", md: "1.1rem" },
                    lineHeight: 1.8,
                    color: "white",
                  }}
                >
                  Обзоры ключевых инструментов After Effects, практические
                  техники и готовые решения для быстрого старта. Узнайте, что
                  действительно нужно для первых заказов в моушн-дизайне.
                </Typography>
              </Container>
            </Box>
          </Box>

          {/* Skills Section */}
          <Container
            title="Ключевые инструменты для старта"
            variant="light"
            titleColor={customTheme.colors.text.secondary}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: { xs: 2, sm: 3, md: 4 },
              }}
            >
              {keyTools.map((tool) => {
                const IconComponent = tool.icon;
                return (
                  <Link
                    key={tool.id}
                    href={tool.href}
                    style={{ textDecoration: "none", flex: 1 }}
                  >
                    <Box
                      sx={{
                        textAlign: "center",
                        p: 2,
                        borderRadius: 2,
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          backgroundColor: "rgba(228, 90, 146, 0.1)",
                          transform: "translateY(-4px)",
                          boxShadow: "0 8px 25px rgba(228, 90, 146, 0.15)",
                        },
                      }}
                    >
                      <IconComponent
                        sx={{
                          fontSize: { xs: "2.25rem", md: "3rem" },
                          color: tool.color,
                          mb: 2,
                        }}
                      />
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: "bold",
                          mb: 1,
                          color: customTheme.colors.text.secondary,
                          fontSize: { xs: "1rem", md: "1.125rem" },
                        }}
                      >
                        {tool.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: customTheme.colors.text.secondary,
                          fontSize: { xs: "0.875rem", md: "0.95rem" },
                        }}
                      >
                        {tool.description}
                      </Typography>
                    </Box>
                  </Link>
                );
              })}
            </Box>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
