"use client";

import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Paper,
  Chip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Person,
  VideoLibrary,
  Palette,
  Code,
  Timeline,
  AutoAwesome,
} from "@mui/icons-material";

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
          <source src="/bg_video.mp4" type="video/webm" />
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
            background:
              "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%)",
            zIndex: -1,
          }}
        />
      </Box>

      {/* Dark Content Sections */}
      <Box sx={{ backgroundColor: "#1a1a2e" }}>
        <Container
          maxWidth="lg"
          sx={{
            pt: { xs: 2, md: 8 },
            pb: { xs: 4, md: 8 },
            px: { xs: 2, sm: 3 },
          }}
        >
          {/* About Me Section */}
          <Card
            sx={{
              mb: { xs: 4, md: 6 },
              boxShadow: "0 8px 32px rgba(102, 191, 191, 0.2)",
              borderRadius: 3,
              background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
              border: "1px solid rgba(102, 191, 191, 0.3)",
            }}
          >
            <CardContent sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: { xs: 2, md: 3 },
                }}
              >
                <Person
                  sx={{
                    mr: 2,
                    color: "#66bfbf",
                    fontSize: { xs: "1.75rem", md: "2rem" },
                  }}
                />
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{
                    fontWeight: "bold",
                    color: "#eaf6f6",
                    fontSize: { xs: "1.5rem", md: "2rem" },
                  }}
                >
                  Обо мне
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  lineHeight: 1.8,
                  mb: { xs: 2, md: 3 },
                  color: "#eaf6f6",
                }}
              >
                Привет! Меня зовут Виктория, и я занимаюсь 2D моушн-дизайном уже
                более 3 лет. За это время я поняла, какие инструменты и техники
                действительно важны для начала заработка в этой сфере.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  lineHeight: 1.8,
                  color: "#2c3e50",
                }}
              >
                Здесь я делюсь гайдом — что нужно изучить в первую очередь,
                какие инструменты After Effects действительно важны, и какие
                техники помогут вам начать зарабатывать быстрее.
              </Typography>
            </CardContent>
          </Card>

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
              <Paper
                sx={{
                  p: { xs: 2, sm: 3, md: 4 },
                  height: "100%",
                  boxShadow: "0 8px 32px rgba(102, 191, 191, 0.1)",
                  borderRadius: 3,
                  background:
                    "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
                  border: "1px solid rgba(102, 191, 191, 0.2)",
                  "&:hover": {
                    transform: { xs: "none", md: "translateY(-4px)" },
                    transition: "all 0.3s ease",
                    boxShadow: "0 12px 40px rgba(102, 191, 191, 0.15)",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: { xs: 2, md: 3 },
                  }}
                >
                  <VideoLibrary
                    sx={{
                      mr: 2,
                      color: "#66bfbf",
                      fontSize: { xs: "1.5rem", md: "2rem" },
                    }}
                  />
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      fontWeight: "bold",
                      color: "#2c3e50",
                      fontSize: { xs: "1.25rem", md: "1.5rem" },
                    }}
                  >
                    Зачем нужен гайд?
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "1rem", md: "1.1rem" },
                    lineHeight: 1.8,
                    mb: { xs: 2, md: 3 },
                    color: "#eaf6f6",
                  }}
                >
                  After Effects — огромная программа с сотнями инструментов. Но
                  для начала заработка нужно знать только 20% из них. Этот гайд
                  покажет, какие инструменты действительно важны для первых
                  заказов.
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  <Chip
                    label="Приоритетные инструменты"
                    sx={{
                      backgroundColor: "rgba(102, 191, 191, 0.2)",
                      color: "#66bfbf",
                      border: "1px solid rgba(102, 191, 191, 0.3)",
                      fontSize: { xs: "0.75rem", md: "0.875rem" },
                      px: { xs: 0.75, md: 1 },
                    }}
                  />
                  <Chip
                    label="Практические техники"
                    sx={{
                      backgroundColor: "rgba(102, 191, 191, 0.2)",
                      color: "#66bfbf",
                      border: "1px solid rgba(102, 191, 191, 0.3)",
                      fontSize: { xs: "0.75rem", md: "0.875rem" },
                      px: { xs: 0.75, md: 1 },
                    }}
                  />
                  <Chip
                    label="Готовые решения"
                    sx={{
                      backgroundColor: "rgba(102, 191, 191, 0.2)",
                      color: "#66bfbf",
                      border: "1px solid rgba(102, 191, 191, 0.3)",
                      fontSize: { xs: "0.75rem", md: "0.875rem" },
                      px: { xs: 0.75, md: 1 },
                    }}
                  />
                  <Chip
                    label="Быстрый старт"
                    sx={{
                      backgroundColor: "rgba(102, 191, 191, 0.2)",
                      color: "#66bfbf",
                      border: "1px solid rgba(102, 191, 191, 0.3)",
                      fontSize: { xs: "0.75rem", md: "0.875rem" },
                      px: { xs: 0.75, md: 1 },
                    }}
                  />
                </Box>
              </Paper>
            </Box>

            <Box sx={{ flex: 1 }}>
              <Paper
                sx={{
                  p: { xs: 2, sm: 3, md: 4 },
                  height: "100%",
                  boxShadow: "0 8px 32px rgba(247, 107, 138, 0.1)",
                  borderRadius: 3,
                  background:
                    "linear-gradient(135deg, #34495e 0%, #2c3e50 100%)",
                  border: "1px solid rgba(247, 107, 138, 0.2)",
                  "&:hover": {
                    transform: { xs: "none", md: "translateY(-4px)" },
                    transition: "all 0.3s ease",
                    boxShadow: "0 12px 40px rgba(247, 107, 138, 0.15)",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: { xs: 2, md: 3 },
                  }}
                >
                  <Palette
                    sx={{
                      mr: 2,
                      color: "#f76b8a",
                      fontSize: { xs: "1.5rem", md: "2rem" },
                    }}
                  />
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      fontWeight: "bold",
                      color: "#2c3e50",
                      fontSize: { xs: "1.25rem", md: "1.5rem" },
                    }}
                  >
                    Что вы найдете здесь
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "1rem", md: "1.1rem" },
                    lineHeight: 1.8,
                    mb: { xs: 2, md: 3 },
                    color: "#eaf6f6",
                  }}
                >
                  Обзоры ключевых инструментов After Effects, практические
                  техники и готовые решения для быстрого старта. Узнайте, что
                  действительно нужно для первых заказов в моушн-дизайне.
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  <Chip
                    label="Shape Animation"
                    sx={{
                      backgroundColor: "rgba(247, 107, 138, 0.2)",
                      color: "#f76b8a",
                      border: "1px solid rgba(247, 107, 138, 0.3)",
                      fontSize: { xs: "0.75rem", md: "0.875rem" },
                      px: { xs: 0.75, md: 1 },
                    }}
                  />
                  <Chip
                    label="Text Animation"
                    sx={{
                      backgroundColor: "rgba(247, 107, 138, 0.2)",
                      color: "#f76b8a",
                      border: "1px solid rgba(247, 107, 138, 0.3)",
                      fontSize: { xs: "0.75rem", md: "0.875rem" },
                      px: { xs: 0.75, md: 1 },
                    }}
                  />
                  <Chip
                    label="Masking"
                    sx={{
                      backgroundColor: "rgba(247, 107, 138, 0.2)",
                      color: "#f76b8a",
                      border: "1px solid rgba(247, 107, 138, 0.3)",
                      fontSize: { xs: "0.75rem", md: "0.875rem" },
                      px: { xs: 0.75, md: 1 },
                    }}
                  />
                  <Chip
                    label="Expressions"
                    sx={{
                      backgroundColor: "rgba(247, 107, 138, 0.2)",
                      color: "#f76b8a",
                      border: "1px solid rgba(247, 107, 138, 0.3)",
                      fontSize: { xs: "0.75rem", md: "0.875rem" },
                      px: { xs: 0.75, md: 1 },
                    }}
                  />
                </Box>
              </Paper>
            </Box>
          </Box>

          {/* Skills Section */}
          <Card
            sx={{
              boxShadow: "0 8px 32px rgba(102, 191, 191, 0.1)",
              borderRadius: 3,
              background: "linear-gradient(135deg, #eaf6f6 0%, #fcfefe 100%)",
              border: "1px solid rgba(102, 191, 191, 0.2)",
            }}
          >
            <CardContent sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: { xs: 2, md: 3 },
                }}
              >
                <Code
                  sx={{
                    mr: 2,
                    color: "#66bfbf",
                    fontSize: { xs: "1.75rem", md: "2rem" },
                  }}
                />
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{
                    fontWeight: "bold",
                    color: "#2c3e50",
                    fontSize: { xs: "1.5rem", md: "2rem" },
                  }}
                >
                  Ключевые инструменты для старта
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  gap: { xs: 2, sm: 3, md: 4 },
                }}
              >
                <Box sx={{ flex: 1, textAlign: "center" }}>
                  <Timeline
                    sx={{
                      fontSize: { xs: "2.25rem", md: "3rem" },
                      color: "#66bfbf",
                      mb: 2,
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      mb: 1,
                      color: "#2c3e50",
                      fontSize: { xs: "1rem", md: "1.125rem" },
                    }}
                  >
                    Shape Animation
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#2c3e50",
                      fontSize: { xs: "0.875rem", md: "0.95rem" },
                    }}
                  >
                    Анимация фигур и иконок — основа моушн-дизайна
                  </Typography>
                </Box>
                <Box sx={{ flex: 1, textAlign: "center" }}>
                  <VideoLibrary
                    sx={{
                      fontSize: { xs: "2.25rem", md: "3rem" },
                      color: "#f76b8a",
                      mb: 2,
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      mb: 1,
                      color: "#2c3e50",
                      fontSize: { xs: "1rem", md: "1.125rem" },
                    }}
                  >
                    Text Animation
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#2c3e50",
                      fontSize: { xs: "0.875rem", md: "0.95rem" },
                    }}
                  >
                    Анимация текста — самый востребованный навык
                  </Typography>
                </Box>
                <Box sx={{ flex: 1, textAlign: "center" }}>
                  <AutoAwesome
                    sx={{
                      fontSize: { xs: "2.25rem", md: "3rem" },
                      color: "#66bfbf",
                      mb: 2,
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      mb: 1,
                      color: "#2c3e50",
                      fontSize: { xs: "1rem", md: "1.125rem" },
                    }}
                  >
                    Masking & Effects
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#2c3e50",
                      fontSize: { xs: "0.875rem", md: "0.95rem" },
                    }}
                  >
                    Маски и эффекты для профессионального вида
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
