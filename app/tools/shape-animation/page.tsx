"use client";

import React from "react";
import {
  Container as MuiContainer,
  Typography,
  Box,
  Paper,
  Chip,
} from "@mui/material";
import {
  Timeline,
  PlayCircleOutline,
  Code,
  Palette,
} from "@mui/icons-material";
import { theme as customTheme } from "../../../styles/theme";

const ShapeAnimationPage: React.FC = () => {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      {/* Header Section - White background */}
      <Box
        sx={{
          backgroundColor: "#ffffff",
          py: { xs: 6, md: 10 },
          px: { xs: 2, sm: 3 },
        }}
      >
        <MuiContainer maxWidth="lg">
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: "bold",
                color: customTheme.colors.primary.main,
                fontSize: { xs: "2rem", md: "3rem" },
                mb: 3,
              }}
            >
              Shape Animation
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: customTheme.colors.text.primary,
                fontSize: { xs: "1.5rem", md: "2rem" },
                mb: 2,
              }}
            >
              Анимация фигур в After Effects
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: customTheme.colors.text.primary,
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.8,
                maxWidth: "600px",
                mx: "auto",
              }}
            >
              Освойте фундаментальные техники анимации геометрических форм
            </Typography>
          </Box>
        </MuiContainer>
      </Box>

      {/* Introduction Section - D8E1E3 background */}
      <Box
        sx={{
          backgroundColor: "#D8E1E3",
          py: { xs: 6, md: 10 },
          px: { xs: 2, sm: 3 },
        }}
      >
        <MuiContainer maxWidth="lg">
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
              Что такое Shape Animation?
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
              Анимация фигур — это фундамент моушн-дизайна. Это навык оживления
              простых геометрических форм, превращения статичных элементов в
              динамичные, выразительные анимации. Научившись создавать плавные и
              профессиональные анимации фигур, вы сможете создавать сложные
              композиции и востребованные коммерческие проекты.
            </Typography>

            {/* Video without frame */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: 6,
              }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: "8px",
                }}
              >
                <source src="/animated_scene_designer.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ textAlign: "center", flex: 1 }}>
              <Palette
                sx={{
                  fontSize: "3rem",
                  color: customTheme.colors.primary.main,
                  mb: 2,
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: customTheme.colors.text.primary,
                  mb: 2,
                }}
              >
                Визуальная основа
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: customTheme.colors.text.primary,
                  lineHeight: 1.6,
                }}
              >
                Фигуры — это строительные блоки любого моушн-дизайна. Они
                создают структуру и направляют взгляд зрителя.
              </Typography>
            </Box>
            <Box sx={{ textAlign: "center", flex: 1 }}>
              <Code
                sx={{
                  fontSize: "3rem",
                  color: customTheme.colors.primary.main,
                  mb: 2,
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: customTheme.colors.text.primary,
                  mb: 2,
                }}
              >
                Техническая точность
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: customTheme.colors.text.primary,
                  lineHeight: 1.6,
                }}
              >
                Анимация фигур требует понимания принципов движения, timing и
                easing для создания естественных переходов.
              </Typography>
            </Box>
            <Box sx={{ textAlign: "center", flex: 1 }}>
              <Timeline
                sx={{
                  fontSize: "3rem",
                  color: customTheme.colors.primary.main,
                  mb: 2,
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: customTheme.colors.text.primary,
                  mb: 2,
                }}
              >
                Коммерческая ценность
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: customTheme.colors.text.primary,
                  lineHeight: 1.6,
                }}
              >
                90% коммерческих проектов используют анимацию фигур. Это самый
                востребованный навык в моушн-дизайне.
              </Typography>
            </Box>
          </Box>
        </MuiContainer>
      </Box>

      {/* Key Tools Section - White background */}
      <Box
        sx={{
          backgroundColor: "#ffffff",
          py: { xs: 6, md: 10 },
          px: { xs: 2, sm: 3 },
        }}
      >
        <MuiContainer maxWidth="lg">
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
              Ключевые инструменты After Effects
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                justifyContent: "center",
              }}
            >
              <Chip
                label="Shape Layers"
                sx={{
                  ...customTheme.components.chip.primary,
                  fontSize: "0.9rem",
                  px: 2,
                  py: 1,
                }}
              />
              <Chip
                label="Path Animation"
                sx={{
                  ...customTheme.components.chip.primary,
                  fontSize: "0.9rem",
                  px: 2,
                  py: 1,
                }}
              />
              <Chip
                label="Trim Paths"
                sx={{
                  ...customTheme.components.chip.primary,
                  fontSize: "0.9rem",
                  px: 2,
                  py: 1,
                }}
              />
              <Chip
                label="Repeater"
                sx={{
                  ...customTheme.components.chip.primary,
                  fontSize: "0.9rem",
                  px: 2,
                  py: 1,
                }}
              />
              <Chip
                label="Wiggle"
                sx={{
                  ...customTheme.components.chip.primary,
                  fontSize: "0.9rem",
                  px: 2,
                  py: 1,
                }}
              />
              <Chip
                label="Shape Morphing"
                sx={{
                  ...customTheme.components.chip.primary,
                  fontSize: "0.9rem",
                  px: 2,
                  py: 1,
                }}
              />
            </Box>
          </Box>
        </MuiContainer>
      </Box>

      {/* Video Examples Section - D8E1E3 background */}
      <Box
        sx={{
          backgroundColor: "#D8E1E3",
          py: { xs: 6, md: 10 },
          px: { xs: 2, sm: 3 },
        }}
      >
        <MuiContainer maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <PlayCircleOutline
              sx={{
                fontSize: "3rem",
                color: customTheme.colors.primary.main,
                mb: 3,
              }}
            />
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                color: customTheme.colors.text.primary,
                fontSize: { xs: "1.75rem", md: "2.5rem" },
                mb: 4,
              }}
            >
              Примеры анимации фигур
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.8,
                color: customTheme.colors.text.primary,
                maxWidth: "600px",
                mx: "auto",
              }}
            >
              Изучите различные техники анимации фигур на практических примерах
            </Typography>
          </Box>

          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: customTheme.colors.primary.main,
                fontSize: { xs: "1.5rem", md: "2rem" },
                mb: 4,
              }}
            >
              Посмотрите, что можно создать только с помощью фигур!
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.8,
                color: customTheme.colors.text.primary,
                maxWidth: "800px",
                mx: "auto",
                mb: 6,
              }}
            >
              Все эти рекламные элементы созданы исключительно с помощью базовых
              инструментов After Effects — без плагинов, без сложных эффектов,
              только фигуры (и текст)!
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, 1fr)",
                sm: "repeat(3, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gap: 3,
              justifyContent: "center",
              alignItems: "center",
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
              <source src="/badge_1.mp4" type="video/mp4" />
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
              <source src="/badge_2.mp4" type="video/mp4" />
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
              <source src="/badge_3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Box>
        </MuiContainer>
      </Box>

      {/* Background Examples Section - White background */}
      <Box
        sx={{
          backgroundColor: "#ffffff",
          py: { xs: 6, md: 10 },
          px: { xs: 2, sm: 3 },
        }}
      >
        <MuiContainer maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: customTheme.colors.primary.main,
                fontSize: { xs: "1.5rem", md: "2rem" },
                mb: 4,
              }}
            >
              Цветные фоны для анимированных видео
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.8,
                color: customTheme.colors.text.primary,
                maxWidth: "800px",
                mx: "auto",
                mb: 6,
              }}
            >
              Посмотрите, как можно создавать яркие и привлекательные фоны для
              анимированных видео, используя только фигуры и базовые инструменты
              After Effects
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, 1fr)",
                sm: "repeat(3, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gap: 3,
              justifyContent: "center",
              alignItems: "center",
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
              <source src="/bg_1.mp4" type="video/mp4" />
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
              <source src="/bg_2.mp4" type="video/mp4" />
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
              <source src="/bg_3.mp4" type="video/mp4" />
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
              <source src="/bg_4.mp4" type="video/mp4" />
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
              <source src="/bg_5.mp4" type="video/mp4" />
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
              <source src="/bg_6.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Box>
        </MuiContainer>
      </Box>

      {/* Tips Section - White background */}
      <Box
        sx={{
          backgroundColor: "#ffffff",
          py: { xs: 6, md: 10 },
          px: { xs: 2, sm: 3 },
        }}
      >
        <MuiContainer maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Timeline
              sx={{
                fontSize: "3rem",
                color: customTheme.colors.primary.main,
                mb: 3,
              }}
            />
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                color: customTheme.colors.text.primary,
                fontSize: { xs: "1.75rem", md: "2.5rem" },
                mb: 4,
              }}
            >
              Советы для начинающих
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Paper
                sx={{
                  p: 4,
                  backgroundColor: "#D8E1E3",
                  border: "none",
                  borderRadius: 2,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: customTheme.colors.primary.main,
                    mb: 2,
                  }}
                >
                  💡 Начните с простого
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: customTheme.colors.text.primary,
                    lineHeight: 1.6,
                  }}
                >
                  Начните с анимации простых форм — кругов, квадратов, линий.
                  Изучите принципы easing и timing. Помните: лучше сделать
                  простую анимацию качественно, чем сложную — плохо.
                </Typography>
              </Paper>
            </Box>

            <Box sx={{ flex: 1 }}>
              <Paper
                sx={{
                  p: 4,
                  backgroundColor: "#D8E1E3",
                  border: "none",
                  borderRadius: 2,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: customTheme.colors.primary.main,
                    mb: 2,
                  }}
                >
                  ⚡ Изучите ключевые кадры
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: customTheme.colors.text.primary,
                    lineHeight: 1.6,
                  }}
                >
                  Освойте работу с ключевыми кадрами и интерполяцией.
                  Используйте Easy Ease для естественных переходов.
                  Экспериментируйте с разными типами easing.
                </Typography>
              </Paper>
            </Box>
          </Box>
        </MuiContainer>
      </Box>
    </Box>
  );
};

export default ShapeAnimationPage;
