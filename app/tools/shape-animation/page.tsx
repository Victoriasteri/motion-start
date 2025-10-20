"use client";

import React from "react";
import {
  Container as MuiContainer,
  Typography,
  Box,
  Card,
  CardContent,
  Paper,
  Chip,
  Divider,
} from "@mui/material";
import Container from "../../../components/Container";
import {
  Timeline,
  PlayCircleOutline,
  Code,
  Palette,
} from "@mui/icons-material";
import { theme as customTheme } from "../../../styles/theme";

const ShapeAnimationPage: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: customTheme.colors.background.dark,
      }}
    >
      <MuiContainer
        maxWidth="lg"
        sx={{
          pt: { xs: 4, md: 8 },
          pb: { xs: 4, md: 8 },
          px: { xs: 2, sm: 3 },
        }}
      >
        {/* Header */}
        <Container
          title="Shape Animation"
          titleColor="white"
          variant="primary"
          sx={{
            mb: { xs: 4, md: 6 },
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontWeight: "bold",
              background: customTheme.gradients.text.primary,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: { xs: "1.75rem", md: "2.5rem" },
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
            }}
          >
            Освойте фундаментальные техники анимации геометрических форм
          </Typography>
        </Container>

        {/* Introduction Section */}
        <Container
          title="Что такое Shape Animation?"
          titleColor="white"
          variant="primary"
          sx={{ mb: 4 }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", md: "1.1rem" },
              lineHeight: 1.8,
              mb: 4,
              color: customTheme.colors.text.primary,
              textAlign: "center",
            }}
          >
            Анимация фигур — это фундамент моушн-дизайна. Это искусство
            оживления простых геометрических форм, превращения статичных
            элементов в динамичные, выразительные анимации. Научившись создавать
            плавные и профессиональные анимации фигур, вы сможете создавать
            сложные композиции и востребованные коммерческие проекты.
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 3,
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
                  mb: 1,
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
                  mb: 1,
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
                  mb: 1,
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
        </Container>

        {/* Key Tools Section */}
        <Container
          title="Ключевые инструменты After Effects"
          titleColor="white"
          variant="secondary"
          sx={{ mb: 4 }}
        >
          <Box sx={{ mb: 4 }}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1,
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
        </Container>

        {/* Video Examples Section */}
        <Container
          title="Примеры анимации фигур"
          titleColor={customTheme.colors.text.secondary}
          icon={
            <PlayCircleOutline
              sx={{ color: customTheme.colors.primary.main, fontSize: 30 }}
            />
          }
          variant="light"
          sx={{ mb: 4 }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", md: "1.1rem" },
              lineHeight: 1.8,
              mb: 4,
              color: customTheme.colors.text.secondary,
              textAlign: "center",
            }}
          >
            Изучите различные техники анимации фигур на практических примерах
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 3,
              flexWrap: "wrap",
            }}
          >
            <Box sx={{ flex: { xs: "1 1 100%", md: "1 1 45%" } }}>
              <Paper
                sx={{
                  p: 3,
                  backgroundColor: customTheme.colors.background.cardLight,
                  border: `2px dashed ${customTheme.colors.primary.main}`,
                  borderRadius: 2,
                  textAlign: "center",
                  minHeight: "200px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <PlayCircleOutline
                  sx={{
                    fontSize: "4rem",
                    color: customTheme.colors.primary.main,
                    mb: 2,
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    color: customTheme.colors.primary.main,
                    mb: 1,
                    fontWeight: "bold",
                  }}
                >
                  Базовая анимация форм
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: customTheme.colors.text.primary,
                    opacity: 0.8,
                  }}
                >
                  [Видео: Анимация круга, квадрата, треугольника]
                </Typography>
              </Paper>
            </Box>

            <Box sx={{ flex: { xs: "1 1 100%", md: "1 1 45%" } }}>
              <Paper
                sx={{
                  p: 3,
                  backgroundColor: customTheme.colors.background.cardLight,
                  border: `2px dashed ${customTheme.colors.primary.main}`,
                  borderRadius: 2,
                  textAlign: "center",
                  minHeight: "200px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <PlayCircleOutline
                  sx={{
                    fontSize: "4rem",
                    color: customTheme.colors.primary.main,
                    mb: 2,
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    color: customTheme.colors.primary.main,
                    mb: 1,
                    fontWeight: "bold",
                  }}
                >
                  Trim Paths эффект
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: customTheme.colors.text.primary,
                    opacity: 0.8,
                  }}
                >
                  [Видео: Анимация появления линий и контуров]
                </Typography>
              </Paper>
            </Box>

            <Box sx={{ flex: { xs: "1 1 100%", md: "1 1 45%" } }}>
              <Paper
                sx={{
                  p: 3,
                  backgroundColor: customTheme.colors.background.cardLight,
                  border: `2px dashed ${customTheme.colors.primary.main}`,
                  borderRadius: 2,
                  textAlign: "center",
                  minHeight: "200px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <PlayCircleOutline
                  sx={{
                    fontSize: "4rem",
                    color: customTheme.colors.primary.main,
                    mb: 2,
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    color: customTheme.colors.primary.main,
                    mb: 1,
                    fontWeight: "bold",
                  }}
                >
                  Repeater анимация
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: customTheme.colors.text.primary,
                    opacity: 0.8,
                  }}
                >
                  [Видео: Создание повторяющихся паттернов]
                </Typography>
              </Paper>
            </Box>

            <Box sx={{ flex: { xs: "1 1 100%", md: "1 1 45%" } }}>
              <Paper
                sx={{
                  p: 3,
                  backgroundColor: customTheme.colors.background.cardLight,
                  border: `2px dashed ${customTheme.colors.primary.main}`,
                  borderRadius: 2,
                  textAlign: "center",
                  minHeight: "200px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <PlayCircleOutline
                  sx={{
                    fontSize: "4rem",
                    color: customTheme.colors.primary.main,
                    mb: 2,
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    color: customTheme.colors.primary.main,
                    mb: 1,
                    fontWeight: "bold",
                  }}
                >
                  Комплексная композиция
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: customTheme.colors.text.primary,
                    opacity: 0.8,
                  }}
                >
                  [Видео: Полный проект с несколькими фигурами]
                </Typography>
              </Paper>
            </Box>
          </Box>
        </Container>

        {/* Tips Section */}
        <Container
          title="Советы для начинающих"
          icon={
            <Timeline
              sx={{ color: customTheme.colors.primary.main, fontSize: 30 }}
            />
          }
          variant="primary"
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 3,
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Paper
                sx={{
                  p: 3,
                  backgroundColor: customTheme.colors.background.cardLight,
                  border: `1px solid ${customTheme.colors.primary.main}`,
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

            <Box sx={{ flex: { xs: "1 1 100%", md: "1 1 45%" } }}>
              <Paper
                sx={{
                  p: 3,
                  backgroundColor: customTheme.colors.background.cardLight,
                  border: `1px solid ${customTheme.colors.primary.main}`,
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
        </Container>
      </MuiContainer>
    </Box>
  );
};

export default ShapeAnimationPage;
