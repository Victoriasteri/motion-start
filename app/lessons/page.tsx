"use client";

import React, { useState, useEffect } from "react";
import {
  Typography,
  Box,
  Container,
  useMediaQuery,
  useTheme,
  Paper,
} from "@mui/material";
import { School, PlayCircle, CheckCircle } from "@mui/icons-material";
import { theme as customTheme } from "../../styles/theme";

const LessonsPage: React.FC = () => {
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
    <Box sx={{ minHeight: "100vh", backgroundColor: "#ffffff" }}>
      {/* Header Section - White background */}
      <Box
        sx={{
          backgroundColor: "#ffffff",
          py: { xs: 6, md: 10 },
          px: { xs: 2, sm: 3 },
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 4,
              }}
            >
              <School
                sx={{
                  fontSize: { xs: "3rem", md: "4rem" },
                  color: customTheme.colors.primary.main,
                  mr: 2,
                }}
              />
              <Typography
                variant="h2"
                sx={{
                  fontWeight: "bold",
                  color: customTheme.colors.text.primary,
                  fontSize: { xs: "2rem", md: "3rem" },
                }}
              >
                Уроки
              </Typography>
            </Box>
            <Typography
              variant="h5"
              sx={{
                color: customTheme.colors.text.primary,
                fontSize: { xs: "1.1rem", md: "1.3rem" },
                fontWeight: 400,
                maxWidth: "800px",
                mx: "auto",
              }}
            >
              Практические уроки по созданию анимаций в After Effects. От
              простых техник до профессиональных проектов.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Free Lesson Section - Gray background */}
      <Box
        sx={{
          backgroundColor: "#D8E1E3",
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
              Бесплатный урок: Первая анимация
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", md: "1.2rem" },
                lineHeight: 1.8,
                color: customTheme.colors.text.primary,
                maxWidth: "900px",
                mx: "auto",
                mb: 6,
              }}
            >
              Изучите основы создания анимации в After Effects с нуля. В этом
              бесплатном уроке я покажу, как создать вашу первую анимацию,
              используя простые техники, Shape Layers и Text Layers.
            </Typography>
          </Box>

          {/* Video and Description Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
              alignItems: { xs: "center", md: "flex-start" },
              justifyContent: "center",
            }}
          >
            {/* Video Placeholder */}
            <Box
              sx={{
                flex: { xs: 1, md: "0 0 auto" },
                width: { xs: "100%", sm: "400px", md: "300px" },
                maxWidth: { xs: "400px", md: "300px" },
              }}
            >
              <Paper
                sx={{
                  p: 2,
                  backgroundColor: "#ffffff",
                  borderRadius: 2,
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    aspectRatio: "6/19",
                    backgroundColor: "#f5f5f5",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2,
                    border: "2px dashed #D8E1E3",
                  }}
                >
                  <PlayCircle
                    sx={{
                      fontSize: "4rem",
                      color: customTheme.colors.primary.main,
                      opacity: 0.5,
                    }}
                  />
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: customTheme.colors.text.primary,
                    opacity: 0.7,
                    fontSize: "0.875rem",
                  }}
                >
                  Видео урок (скоро)
                </Typography>
              </Paper>
            </Box>

            {/* Lesson Description */}
            <Box
              sx={{
                flex: 1,
                maxWidth: { xs: "100%", md: "600px" },
              }}
            >
              <Paper
                sx={{
                  p: 4,
                  backgroundColor: "#ffffff",
                  borderRadius: 2,
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    color: customTheme.colors.text.primary,
                    fontSize: { xs: "1.5rem", md: "2rem" },
                    mb: 3,
                  }}
                >
                  Что вы узнаете:
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Box
                    sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}
                  >
                    <CheckCircle
                      sx={{
                        color: customTheme.colors.primary.main,
                        fontSize: "1.5rem",
                        mt: 0.5,
                        flexShrink: 0,
                      }}
                    />
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: "bold",
                          color: customTheme.colors.text.primary,
                          mb: 1,
                        }}
                      >
                        Базовые техники анимации
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: customTheme.colors.text.primary,
                          lineHeight: 1.6,
                        }}
                      >
                        Изучите основы работы с ключевыми кадрами, таймингом и
                        простыми анимациями в After Effects.
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}
                  >
                    <CheckCircle
                      sx={{
                        color: customTheme.colors.primary.main,
                        fontSize: "1.5rem",
                        mt: 0.5,
                        flexShrink: 0,
                      }}
                    />
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: "bold",
                          color: customTheme.colors.text.primary,
                          mb: 1,
                        }}
                      >
                        Работа с Shape Layers
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: customTheme.colors.text.primary,
                          lineHeight: 1.6,
                        }}
                      >
                        Научитесь создавать и анимировать фигуры, используя
                        Shape Layers для создания визуальных элементов.
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}
                  >
                    <CheckCircle
                      sx={{
                        color: customTheme.colors.primary.main,
                        fontSize: "1.5rem",
                        mt: 0.5,
                        flexShrink: 0,
                      }}
                    />
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: "bold",
                          color: customTheme.colors.text.primary,
                          mb: 1,
                        }}
                      >
                        Анимация текста
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: customTheme.colors.text.primary,
                          lineHeight: 1.6,
                        }}
                      >
                        Освойте работу с Text Layers и создайте свою первую
                        текстовую анимацию с использованием простых техник.
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box
                  sx={{
                    mt: 4,
                    p: 3,
                    backgroundColor: customTheme.colors.primary.main,
                    borderRadius: 2,
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      color: "#ffffff",
                      mb: 1,
                    }}
                  >
                    БЕСПЛАТНО
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#ffffff",
                      opacity: 0.9,
                    }}
                  >
                    Этот урок полностью бесплатный и доступен всем, кто хочет
                    начать свой путь в моушн-дизайне.
                  </Typography>
                </Box>
              </Paper>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* White Spacer to separate from footer */}
      <Box
        sx={{
          backgroundColor: "#ffffff",
          py: { xs: 4, md: 6 },
        }}
      />
    </Box>
  );
};

export default LessonsPage;
