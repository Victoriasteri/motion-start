"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Typography,
  Box,
  Paper,
  Chip,
  useMediaQuery,
  useTheme,
  Container,
} from "@mui/material";
import { Person, VideoLibrary, Palette, Code, Star } from "@mui/icons-material";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import { keyTools } from "../data/keyTools";
import { theme as customTheme } from "../styles/theme";

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
            background: "#D8E1E3",
            zIndex: -1,
          }}
        />
      </Box>

      {/* About Me Section - White background */}
      <Box
        sx={{
          backgroundColor: "#ffffff",
          py: { xs: 6, md: 10 },
          px: { xs: 2, sm: 3 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                color: customTheme.colors.text.primary,
                fontSize: { xs: "1.75rem", md: "2.5rem" },
                mb: 4,
              }}
            >
              Обо мне
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.8,
                color: customTheme.colors.text.primary,
                maxWidth: "800px",
                mx: "auto",
                mb: 4,
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
                color: customTheme.colors.text.primary,
                maxWidth: "800px",
                mx: "auto",
              }}
            >
              Здесь я делюсь гайдом — что нужно изучить в первую очередь, какие
              инструменты After Effects действительно важны, и какие техники
              помогут вам начать зарабатывать быстрее.
            </Typography>
          </Box>

          {/* Decorative Motion Design Element */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 6,
              mb: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 3,
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {/* Animated Circles with Stars */}
              <Box
                sx={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  backgroundColor: customTheme.colors.primary.main,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  animation: "bounce 2s ease-in-out infinite",
                  "@keyframes bounce": {
                    "0%, 100%": {
                      transform: "translateY(0px)",
                    },
                    "50%": {
                      transform: "translateY(-8px)",
                    },
                  },
                }}
              >
                <Star sx={{ color: "#ffffff", fontSize: "24px" }} />
              </Box>

              <Box
                sx={{
                  width: "80px",
                  height: "4px",
                  backgroundColor: customTheme.colors.primary.main,
                  borderRadius: "2px",
                  position: "relative",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: "-100%",
                    width: "100%",
                    height: "100%",
                    backgroundColor: customTheme.colors.secondary.main,
                    animation: "slide 3s ease-in-out infinite",
                    "@keyframes slide": {
                      "0%": {
                        left: "-100%",
                      },
                      "50%": {
                        left: "0%",
                      },
                      "100%": {
                        left: "100%",
                      },
                    },
                  },
                }}
              />

              <Box
                sx={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  backgroundColor: customTheme.colors.secondary.main,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  animation: "bounce 2s ease-in-out infinite 0.5s",
                  "@keyframes bounce": {
                    "0%, 100%": {
                      transform: "translateY(0px)",
                    },
                    "50%": {
                      transform: "translateY(-8px)",
                    },
                  },
                }}
              >
                <Star sx={{ color: "#ffffff", fontSize: "24px" }} />
              </Box>

              <Box
                sx={{
                  width: "80px",
                  height: "4px",
                  backgroundColor: customTheme.colors.secondary.main,
                  borderRadius: "2px",
                  position: "relative",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: "-100%",
                    width: "100%",
                    height: "100%",
                    backgroundColor: customTheme.colors.primary.main,
                    animation: "slide 3s ease-in-out infinite 1.5s",
                    "@keyframes slide": {
                      "0%": {
                        left: "-100%",
                      },
                      "50%": {
                        left: "0%",
                      },
                      "100%": {
                        left: "100%",
                      },
                    },
                  },
                }}
              />

              <Box
                sx={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  backgroundColor: customTheme.colors.primary.main,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  animation: "bounce 2s ease-in-out infinite 1s",
                  "@keyframes bounce": {
                    "0%, 100%": {
                      transform: "translateY(0px)",
                    },
                    "50%": {
                      transform: "translateY(-8px)",
                    },
                  },
                }}
              >
                <Star sx={{ color: "#ffffff", fontSize: "24px" }} />
              </Box>
            </Box>
          </Box>

          {/* Subtle Text */}
          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              color: customTheme.colors.text.secondary,
              fontSize: "0.9rem",
              opacity: 0.7,
              fontStyle: "italic",
            }}
          >
            Движение — это жизнь
          </Typography>
        </Container>
      </Box>

      {/* Motion Design Info Section - D8E1E3 background */}
      <Box
        sx={{
          backgroundColor: "#D8E1E3",
          py: { xs: 6, md: 10 },
          px: { xs: 2, sm: 3 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Animated Background Elements */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          {/* Floating Geometric Shapes */}
          <Box
            sx={{
              position: "absolute",
              top: "10%",
              left: "5%",
              width: "60px",
              height: "60px",
              backgroundColor: "rgba(188, 108, 41, 0.1)",
              borderRadius: "50%",
              animation: "float 6s ease-in-out infinite",
              "@keyframes float": {
                "0%, 100%": {
                  transform: "translateY(0px) rotate(0deg)",
                },
                "50%": {
                  transform: "translateY(-20px) rotate(180deg)",
                },
              },
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "20%",
              right: "10%",
              width: "40px",
              height: "40px",
              backgroundColor: "rgba(41, 80, 91, 0.1)",
              borderRadius: "8px",
              animation: "float 8s ease-in-out infinite reverse",
              "@keyframes float": {
                "0%, 100%": {
                  transform: "translateY(0px) rotate(0deg)",
                },
                "50%": {
                  transform: "translateY(-15px) rotate(180deg)",
                },
              },
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: "15%",
              left: "15%",
              width: "50px",
              height: "50px",
              backgroundColor: "rgba(188, 108, 41, 0.08)",
              borderRadius: "12px",
              animation: "float 7s ease-in-out infinite",
              "@keyframes float": {
                "0%, 100%": {
                  transform: "translateY(0px) rotate(0deg)",
                },
                "50%": {
                  transform: "translateY(-25px) rotate(180deg)",
                },
              },
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: "25%",
              right: "5%",
              width: "35px",
              height: "35px",
              backgroundColor: "rgba(41, 80, 91, 0.12)",
              borderRadius: "50%",
              animation: "float 9s ease-in-out infinite reverse",
              "@keyframes float": {
                "0%, 100%": {
                  transform: "translateY(0px) rotate(0deg)",
                },
                "50%": {
                  transform: "translateY(-18px) rotate(180deg)",
                },
              },
            }}
          />

          {/* Pulsing Dots */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "8%",
              width: "8px",
              height: "8px",
              backgroundColor: "rgba(188, 108, 41, 0.6)",
              borderRadius: "50%",
              animation: "pulse 3s ease-in-out infinite",
              "@keyframes pulse": {
                "0%, 100%": {
                  transform: "scale(1)",
                  opacity: 0.6,
                },
                "50%": {
                  transform: "scale(1.5)",
                  opacity: 1,
                },
              },
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "70%",
              right: "12%",
              width: "6px",
              height: "6px",
              backgroundColor: "rgba(41, 80, 91, 0.7)",
              borderRadius: "50%",
              animation: "pulse 4s ease-in-out infinite reverse",
              "@keyframes pulse": {
                "0%, 100%": {
                  transform: "scale(1)",
                  opacity: 0.7,
                },
                "50%": {
                  transform: "scale(1.8)",
                  opacity: 1,
                },
              },
            }}
          />

          {/* Rotating Squares */}
          <Box
            sx={{
              position: "absolute",
              top: "60%",
              left: "3%",
              width: "20px",
              height: "20px",
              backgroundColor: "rgba(188, 108, 41, 0.1)",
              animation: "rotate 10s linear infinite",
              "@keyframes rotate": {
                "0%": {
                  transform: "rotate(0deg)",
                },
                "100%": {
                  transform: "rotate(360deg)",
                },
              },
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "40%",
              right: "3%",
              width: "15px",
              height: "15px",
              backgroundColor: "rgba(41, 80, 91, 0.15)",
              animation: "rotate 8s linear infinite reverse",
              "@keyframes rotate": {
                "0%": {
                  transform: "rotate(0deg)",
                },
                "100%": {
                  transform: "rotate(360deg)",
                },
              },
            }}
          />
        </Box>
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Box sx={{ textAlign: "center", mb: 4 }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    color: customTheme.colors.text.primary,
                    fontSize: { xs: "1.5rem", md: "2rem" },
                    mb: 3,
                  }}
                >
                  Зачем нужен гайд?
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1,
                    justifyContent: "center",
                    mb: 3,
                  }}
                >
                  <Chip
                    label="Приоритетные инструменты"
                    sx={{
                      ...customTheme.components.chip.primary,
                      fontSize: "0.9rem",
                      px: 2,
                      py: 1,
                    }}
                  />
                  <Chip
                    label="Практические техники"
                    sx={{
                      ...customTheme.components.chip.primary,
                      fontSize: "0.9rem",
                      px: 2,
                      py: 1,
                    }}
                  />
                  <Chip
                    label="Готовые решения"
                    sx={{
                      ...customTheme.components.chip.primary,
                      fontSize: "0.9rem",
                      px: 2,
                      py: 1,
                    }}
                  />
                  <Chip
                    label="Быстрый старт"
                    sx={{
                      ...customTheme.components.chip.primary,
                      fontSize: "0.9rem",
                      px: 2,
                      py: 1,
                    }}
                  />
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "1rem", md: "1.1rem" },
                    lineHeight: 1.8,
                    color: customTheme.colors.text.primary,
                  }}
                >
                  After Effects — огромная программа с сотнями инструментов. Но
                  для начала заработка нужно знать только 20% из них. Этот гайд
                  покажет, какие инструменты действительно важны для первых
                  заказов.
                </Typography>
              </Box>
            </Box>

            <Box sx={{ flex: 1 }}>
              <Box sx={{ textAlign: "center", mb: 4 }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    color: customTheme.colors.text.primary,
                    fontSize: { xs: "1.5rem", md: "2rem" },
                    mb: 3,
                  }}
                >
                  Что вы найдете здесь
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1,
                    justifyContent: "center",
                    mb: 3,
                  }}
                >
                  <Chip
                    label="Shape Animation"
                    sx={{
                      ...customTheme.components.chip.secondary,
                      fontSize: "0.9rem",
                      px: 2,
                      py: 1,
                    }}
                  />
                  <Chip
                    label="Text Animation"
                    sx={{
                      ...customTheme.components.chip.secondary,
                      fontSize: "0.9rem",
                      px: 2,
                      py: 1,
                    }}
                  />
                  <Chip
                    label="Masking"
                    sx={{
                      ...customTheme.components.chip.secondary,
                      fontSize: "0.9rem",
                      px: 2,
                      py: 1,
                    }}
                  />
                  <Chip
                    label="Expressions"
                    sx={{
                      ...customTheme.components.chip.secondary,
                      fontSize: "0.9rem",
                      px: 2,
                      py: 1,
                    }}
                  />
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "1rem", md: "1.1rem" },
                    lineHeight: 1.8,
                    color: customTheme.colors.text.primary,
                  }}
                >
                  Обзоры ключевых инструментов After Effects, практические
                  техники и готовые решения для быстрого старта. Узнайте, что
                  действительно нужно для первых заказов в моушн-дизайне.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Skills Section - White background */}
      <Box
        sx={{
          backgroundColor: "#ffffff",
          py: { xs: 6, md: 10 },
          px: { xs: 2, sm: 3 },
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                color: customTheme.colors.text.primary,
                fontSize: { xs: "1.75rem", md: "2.5rem" },
                mb: 4,
              }}
            >
              Ключевые инструменты для старта
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: 4,
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
                        p: 3,
                        borderRadius: 2,
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        backgroundColor: "#D8E1E3",
                        "&:hover": {
                          backgroundColor: "rgba(188, 108, 41, 0.1)",
                          transform: "translateY(-4px)",
                          boxShadow: "0 8px 25px rgba(188, 108, 41, 0.15)",
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
                          color: customTheme.colors.text.primary,
                          fontSize: { xs: "1rem", md: "1.125rem" },
                        }}
                      >
                        {tool.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: customTheme.colors.text.primary,
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
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
