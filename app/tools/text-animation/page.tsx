"use client";

import React, { useState, useEffect } from "react";
import {
  Typography,
  Box,
  Paper,
  Container,
  useMediaQuery,
  useTheme,
  Card,
  CardContent,
  Chip,
} from "@mui/material";
import { TextFields, Animation, Speed, Timeline } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import { theme as customTheme } from "../../../styles/theme";

const TextAnimationPage: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const applicationData = [
    {
      title: "Социальные сети",
      description: "Instagram Stories, TikTok, YouTube Shorts",
      color: customTheme.colors.primary.main,
    },
    {
      title: "Реклама и маркетинг",
      description: "Реклама, презентации, корпоративы",
      color: customTheme.colors.secondary.main,
    },
    {
      title: "Образовательный контент",
      description: "Обучение, инфографика, объяснения",
      color: customTheme.colors.primary.main,
    },
    {
      title: "Брендинг и логотипы",
      description: "Логотипы, брендинг, фирменный стиль",
      color: customTheme.colors.secondary.main,
    },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % applicationData.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
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
              <TextFields
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
                Text Animation
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
                mb: 4,
              }}
            >
              Анимация текста — один из самых востребованных навыков в
              моушн-дизайне. Узнайте ключевые техники для создания
              профессиональных текстовых анимаций.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Key Techniques Section - Gray background */}
      <Box
        sx={{
          backgroundColor: "#D8E1E3",
          py: { xs: 6, md: 10 },
          px: { xs: 2, sm: 3 },
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                color: customTheme.colors.text.primary,
                fontSize: { xs: "1.75rem", md: "2.5rem" },
                mb: 4,
              }}
            >
              Ключевые техники анимации текста
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", md: "1.2rem" },
                lineHeight: 1.8,
                color: customTheme.colors.text.primary,
                maxWidth: "900px",
                mx: "auto",
              }}
            >
              Текстовые анимации используются везде: в рекламе, социальных
              сетях, презентациях. Эти техники помогут вам создавать
              профессиональный контент.
            </Typography>
          </Box>

          {/* Techniques Grid */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <Box>
              <Paper
                sx={{
                  p: 4,
                  backgroundColor: "#ffffff",
                  border: "none",
                  borderRadius: 2,
                }}
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}
                >
                  <Animation
                    sx={{
                      color: customTheme.colors.primary.main,
                      fontSize: "1.5rem",
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      color: customTheme.colors.primary.main,
                    }}
                  >
                    Кинетическая типографика
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: customTheme.colors.text.primary,
                    lineHeight: 1.6,
                  }}
                >
                  Анимация появления букв по одной — основа кинетической
                  типографики. Используйте Text Animator для создания эффектов
                  появления, исчезновения и трансформации текста. Настройте
                  Range Selector для контроля анимации.
                </Typography>
              </Paper>
            </Box>

            <Box>
              <Paper
                sx={{
                  p: 4,
                  backgroundColor: "#ffffff",
                  border: "none",
                  borderRadius: 2,
                }}
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}
                >
                  <Speed
                    sx={{
                      color: customTheme.colors.primary.main,
                      fontSize: "1.5rem",
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      color: customTheme.colors.primary.main,
                    }}
                  >
                    Анимация появления
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: customTheme.colors.text.primary,
                    lineHeight: 1.6,
                  }}
                >
                  Создавайте плавные эффекты появления текста. Используйте
                  Opacity, Scale и Position для анимации входа. Комбинируйте
                  несколько свойств для создания сложных и интересных эффектов
                  появления.
                </Typography>
              </Paper>
            </Box>

            <Box>
              <Paper
                sx={{
                  p: 4,
                  backgroundColor: "#ffffff",
                  border: "none",
                  borderRadius: 2,
                }}
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}
                >
                  <Timeline
                    sx={{
                      color: customTheme.colors.primary.main,
                      fontSize: "1.5rem",
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      color: customTheme.colors.primary.main,
                    }}
                  >
                    Тайминг и ритм
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: customTheme.colors.text.primary,
                    lineHeight: 1.6,
                  }}
                >
                  Правильный тайминг — ключ к качественной анимации. Используйте
                  Easy Ease для естественного движения. Настраивайте задержки
                  между анимацией букв для создания ритма и читаемости.
                </Typography>
              </Paper>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Text Animation Videos Section - White background */}
      <Box
        sx={{
          backgroundColor: "#ffffff",
          py: { xs: 4, md: 6 },
          px: { xs: 2, sm: 3 },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gap: 3,
              justifyContent: "center",
              alignItems: "center",
              mb: 4,
            }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: "100%",
                aspectRatio: "1/1",
                borderRadius: "12px",
                objectFit: "cover",
              }}
            >
              <source src="/text_1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: "100%",
                aspectRatio: "1/1",
                borderRadius: "12px",
                objectFit: "cover",
              }}
            >
              <source src="/text_2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: "100%",
                aspectRatio: "1/1",
                borderRadius: "12px",
                objectFit: "cover",
              }}
            >
              <source src="/text_3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Box>
        </Container>
      </Box>

      {/* Tips and Tricks Section - White background */}
      <Box
        sx={{
          backgroundColor: "#ffffff",
          py: { xs: 4, md: 6 },
          px: { xs: 2, sm: 3 },
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: customTheme.colors.text.primary,
                fontSize: { xs: "1.5rem", md: "2rem" },
                mb: 3,
              }}
            >
              Ускоряйте работу с текстом
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.8,
                color: customTheme.colors.text.primary,
                maxWidth: "700px",
                mx: "auto",
                mb: 4,
              }}
            >
              Для быстрой и лёгкой анимации текста есть хитрости, которые
              значительно упрощают жизнь. Узнайте, как создавать текстовые
              анимации быстро и просто.
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 3,
              }}
            >
              <Chip
                label="Советы и хитрости"
                sx={{
                  ...customTheme.components.chip.primary,
                  fontSize: "1rem",
                  px: 3,
                  py: 1.5,
                  cursor: "pointer",

                  "&:hover": {
                    backgroundColor: customTheme.colors.primary.dark,
                    transform: "translateY(-2px)",
                    color: customTheme.colors.primary.contrast,
                  },
                  transition: "all 0.3s ease",
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Applications Section - White background */}
      <Box
        sx={{
          backgroundColor: "#ffffff",
          py: { xs: 6, md: 10 },
          px: { xs: 2, sm: 3 },
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                color: customTheme.colors.text.primary,
                fontSize: { xs: "1.75rem", md: "2.5rem" },
              }}
            >
              Где применяется анимация текста
            </Typography>
          </Box>

          {/* Bubble Slider */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "300px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTextIndex}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  x: 100,
                  rotateY: 90,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                  rotateY: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                  x: -100,
                  rotateY: -90,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: applicationData[currentTextIndex].color,
                  color: "#ffffff",
                  borderRadius: "50%",
                  width: isMobile ? "200px" : "250px",
                  height: isMobile ? "200px" : "250px",
                  boxShadow: `0 12px 40px ${applicationData[currentTextIndex].color}40`,
                }}
              >
                <Box sx={{ textAlign: "center", px: 2 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      fontSize: { xs: "1rem", md: "1.2rem" },
                      mb: 1,
                    }}
                  >
                    {applicationData[currentTextIndex].title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: { xs: "0.8rem", md: "0.9rem" },
                      opacity: 0.9,
                    }}
                  >
                    {applicationData[currentTextIndex].description}
                  </Typography>
                </Box>
              </motion.div>
            </AnimatePresence>
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

export default TextAnimationPage;
