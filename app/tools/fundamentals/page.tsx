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
  Key,
  PlayCircleOutline,
  Timeline,
  Speed,
  GpsFixed,
  FlashOn,
  Lightbulb,
  TipsAndUpdates,
  SettingsSuggest,
} from "@mui/icons-material";
import { theme as customTheme } from "../../../styles/theme";
import BulletList from "../../../components/BulletList";
import ExplanationSection from "../../../components/ExplanationSection";

const FundamentalsPage: React.FC = () => {
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
              Animation Fundamentals
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: customTheme.colors.text.primary,
                fontSize: { xs: "1.5rem", md: "2rem" },
                mb: 2,
              }}
            >
              Основы анимации в After Effects
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
              Изучите ключевые кадры, интерполяцию и профессиональные техники
              анимации
            </Typography>
          </Box>
        </MuiContainer>
      </Box>

      {/* Fundamentals Section - D8E1E3 background */}
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
              top: "15%",
              left: "8%",
              width: "40px",
              height: "40px",
              backgroundColor: "rgba(188, 108, 41, 0.1)",
              borderRadius: "50%",
              animation: "float 8s ease-in-out infinite",
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
              top: "25%",
              right: "12%",
              width: "30px",
              height: "30px",
              backgroundColor: "rgba(41, 80, 91, 0.12)",
              borderRadius: "6px",
              animation: "float 10s ease-in-out infinite reverse",
              "@keyframes float": {
                "0%, 100%": {
                  transform: "translateY(0px) rotate(0deg)",
                },
                "50%": {
                  transform: "translateY(-12px) rotate(180deg)",
                },
              },
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: "20%",
              left: "15%",
              width: "35px",
              height: "35px",
              backgroundColor: "rgba(188, 108, 41, 0.08)",
              borderRadius: "8px",
              animation: "float 12s ease-in-out infinite",
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
          <Box
            sx={{
              position: "absolute",
              bottom: "30%",
              right: "8%",
              width: "25px",
              height: "25px",
              backgroundColor: "rgba(41, 80, 91, 0.1)",
              borderRadius: "50%",
              animation: "float 9s ease-in-out infinite reverse",
              "@keyframes float": {
                "0%, 100%": {
                  transform: "translateY(0px) rotate(0deg)",
                },
                "50%": {
                  transform: "translateY(-10px) rotate(180deg)",
                },
              },
            }}
          />

          {/* Pulsing Dots */}
          <Box
            sx={{
              position: "absolute",
              top: "60%",
              left: "5%",
              width: "10px",
              height: "10px",
              backgroundColor: "rgba(188, 108, 41, 0.5)",
              borderRadius: "50%",
              animation: "pulse 4s ease-in-out infinite",
              "@keyframes pulse": {
                "0%, 100%": {
                  transform: "scale(1)",
                  opacity: 0.5,
                },
                "50%": {
                  transform: "scale(1.4)",
                  opacity: 1,
                },
              },
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "70%",
              right: "6%",
              width: "8px",
              height: "8px",
              backgroundColor: "rgba(41, 80, 91, 0.6)",
              borderRadius: "50%",
              animation: "pulse 5s ease-in-out infinite reverse",
              "@keyframes pulse": {
                "0%, 100%": {
                  transform: "scale(1)",
                  opacity: 0.6,
                },
                "50%": {
                  transform: "scale(1.6)",
                  opacity: 1,
                },
              },
            }}
          />

          {/* Rotating Elements */}
          <Box
            sx={{
              position: "absolute",
              top: "40%",
              left: "3%",
              width: "20px",
              height: "20px",
              backgroundColor: "rgba(188, 108, 41, 0.06)",
              animation: "rotate 15s linear infinite",
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
              top: "50%",
              right: "4%",
              width: "18px",
              height: "18px",
              backgroundColor: "rgba(41, 80, 91, 0.08)",
              animation: "rotate 20s linear infinite reverse",
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
              Что такое ключевые кадры?
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
              Ключевые кадры — это основа любой анимации в After Effects. Это
              точки во времени, где вы определяете конкретные значения свойств
              (позиция, масштаб, поворот, прозрачность). Интерполяция — это
              процесс автоматического создания промежуточных значений между
              ключевыми кадрами для создания плавного движения.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 6,
              alignItems: "center",
            }}
          >
            {/* Video Section */}
            <Box sx={{ flex: 1, maxWidth: "500px" }}>
              <Paper
                sx={{
                  p: 3,
                  backgroundColor: "#ffffff",
                  borderRadius: 2,
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: customTheme.colors.primary.main,
                    mb: 3,
                    fontWeight: "bold",
                  }}
                >
                  Ключевые кадры в действии
                </Typography>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    width: "100%",
                    maxWidth: "1344px",
                    height: "auto",
                    borderRadius: "8px",
                    backgroundColor: "#f5f5f5",
                  }}
                >
                  <source src="/keyframes.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Paper>
            </Box>

            {/* Explanation Section */}
            <Box sx={{ flex: 1 }}>
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: customTheme.colors.text.primary,
                    mb: 3,
                    fontSize: { xs: "1.1rem", md: "1.25rem" },
                  }}
                >
                  <TipsAndUpdates sx={{ mr: 1, verticalAlign: "middle" }} />
                  Основы работы с ключевыми кадрами
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: customTheme.colors.text.primary,
                    lineHeight: 1.6,
                    mb: 3,
                  }}
                >
                  Ключевые кадры определяют начальное и конечное состояние
                  анимации. Between Effects автоматически создает промежуточные
                  кадры, обеспечивая плавный переход между ключевыми точками.
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: customTheme.colors.text.primary,
                    lineHeight: 1.6,
                  }}
                >
                  Это фундаментальный принцип, который нужно освоить в первую
                  очередь. Без понимания ключевых кадров невозможно создавать
                  профессиональную анимацию.
                </Typography>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: customTheme.colors.text.primary,
                    mb: 3,
                    fontSize: { xs: "1.1rem", md: "1.25rem" },
                  }}
                >
                  <SettingsSuggest sx={{ mr: 1, verticalAlign: "middle" }} />
                  Практические навыки
                </Typography>
                <BulletList
                  items={[
                    "Создание и редактирование ключевых кадров",
                    "Понимание интерполяции между кадрами",
                    "Работа с различными свойствами анимации",
                    "Основа для изучения более сложных техник",
                  ]}
                />
              </Box>
            </Box>
          </Box>
        </MuiContainer>
      </Box>

      {/* Key Concepts Section - White background */}
      <Box
        sx={{
          backgroundColor: "#ffffff",
          py: { xs: 6, md: 10 },
          px: { xs: 2, sm: 3 },
        }}
      >
        <MuiContainer maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                color: customTheme.colors.text.primary,
                fontSize: { xs: "1.75rem", md: "2.5rem" },
                mb: 4,
              }}
            >
              Основные концепции
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
                label="Linear Interpolation"
                sx={{
                  ...customTheme.components.chip.primary,
                  fontSize: "0.9rem",
                  px: 2,
                  py: 1,
                }}
              />
              <Chip
                label="Bezier Curves"
                sx={{
                  ...customTheme.components.chip.primary,
                  fontSize: "0.9rem",
                  px: 2,
                  py: 1,
                }}
              />
              <Chip
                label="Easy Ease"
                sx={{
                  ...customTheme.components.chip.primary,
                  fontSize: "0.9rem",
                  px: 2,
                  py: 1,
                }}
              />
              <Chip
                label="Hold Keyframes"
                sx={{
                  ...customTheme.components.chip.primary,
                  fontSize: "0.9rem",
                  px: 2,
                  py: 1,
                }}
              />
              <Chip
                label="Graph Editor"
                sx={{
                  ...customTheme.components.chip.primary,
                  fontSize: "0.9rem",
                  px: 2,
                  py: 1,
                }}
              />
              <Chip
                label="Value Graphs"
                sx={{
                  ...customTheme.components.chip.primary,
                  fontSize: "0.9rem",
                  px: 2,
                  py: 1,
                }}
              />
            </Box>
          </Box>

          {/* Vertex Tool Video Section */}
          <Box sx={{ mt: 8 }}>
            <Box sx={{ textAlign: "center", mb: 4 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  color: customTheme.colors.primary.main,
                  fontSize: { xs: "1.5rem", md: "2rem" },
                  mb: 3,
                }}
              >
                Работа с Vertex Tool
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: customTheme.colors.text.primary,
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  lineHeight: 1.8,
                  maxWidth: "600px",
                  mx: "auto",
                  mb: 4,
                }}
              >
                Научитесь точно настраивать пути анимации с помощью инструмента
                вершин
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Paper
                sx={{
                  p: 3,
                  backgroundColor: "#D8E1E3",
                  borderRadius: 2,
                  textAlign: "center",
                  maxWidth: "1200px",
                  width: "100%",
                }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    width: "100%",
                    maxWidth: "2330px",
                    height: "auto",
                    borderRadius: "8px",
                    backgroundColor: "#f5f5f5",
                  }}
                >
                  <source src="/key_concept.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <Typography
                  variant="body2"
                  sx={{
                    color: customTheme.colors.text.primary,
                    opacity: 0.8,
                    mt: 2,
                  }}
                >
                  Точная настройка путей анимации
                </Typography>
              </Paper>
            </Box>
          </Box>

          {/* Value Graph Video Section */}
          <Box sx={{ mt: 8 }}>
            <Box sx={{ textAlign: "center", mb: 4 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  color: customTheme.colors.primary.main,
                  fontSize: { xs: "1.5rem", md: "2rem" },
                  mb: 3,
                }}
              >
                Редактирование Value Graph
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: customTheme.colors.text.primary,
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  lineHeight: 1.8,
                  maxWidth: "600px",
                  mx: "auto",
                  mb: 4,
                }}
              >
                Научитесь работать с Value Graph для точного контроля значений
                анимации
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Paper
                sx={{
                  p: 3,
                  backgroundColor: "#D8E1E3",
                  borderRadius: 2,
                  textAlign: "center",
                  maxWidth: "1400px",
                  width: "100%",
                }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    width: "100%",
                    maxWidth: "1400px",
                    height: "auto",
                    borderRadius: "8px",
                    backgroundColor: "#f5f5f5",
                  }}
                >
                  <source src="/value_graph.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <Typography
                  variant="body2"
                  sx={{
                    color: customTheme.colors.text.primary,
                    opacity: 0.8,
                    mt: 2,
                  }}
                >
                  Точный контроль значений анимации
                </Typography>
              </Paper>
            </Box>
          </Box>
        </MuiContainer>
      </Box>

      {/* Linear vs Easy Ease Comparison Section - D8E1E3 background */}
      <Box
        sx={{
          backgroundColor: "#D8E1E3",
          py: { xs: 6, md: 10 },
          px: { xs: 2, sm: 3 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Animated Stars */}
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
          {/* Floating Stars */}
          <Box
            sx={{
              position: "absolute",
              top: "10%",
              left: "10%",
              width: "20px",
              height: "20px",
              color: customTheme.colors.primary.main,
              animation: "starFloat 6s ease-in-out infinite",
              "@keyframes starFloat": {
                "0%, 100%": {
                  transform: "translateY(0px) rotate(0deg) scale(1)",
                  opacity: 0.6,
                },
                "50%": {
                  transform: "translateY(-20px) rotate(180deg) scale(1.2)",
                  opacity: 1,
                },
              },
            }}
          >
            ⭐
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "20%",
              right: "15%",
              width: "16px",
              height: "16px",
              color: customTheme.colors.secondary.main,
              animation: "starFloat 8s ease-in-out infinite reverse",
              "@keyframes starFloat": {
                "0%, 100%": {
                  transform: "translateY(0px) rotate(0deg) scale(1)",
                  opacity: 0.5,
                },
                "50%": {
                  transform: "translateY(-15px) rotate(180deg) scale(1.3)",
                  opacity: 1,
                },
              },
            }}
          >
            ✨
          </Box>
          <Box
            sx={{
              position: "absolute",
              bottom: "25%",
              left: "20%",
              width: "18px",
              height: "18px",
              color: customTheme.colors.primary.main,
              animation: "starFloat 7s ease-in-out infinite",
              "@keyframes starFloat": {
                "0%, 100%": {
                  transform: "translateY(0px) rotate(0deg) scale(1)",
                  opacity: 0.4,
                },
                "50%": {
                  transform: "translateY(-18px) rotate(180deg) scale(1.1)",
                  opacity: 0.9,
                },
              },
            }}
          >
            ⭐
          </Box>
          <Box
            sx={{
              position: "absolute",
              bottom: "15%",
              right: "25%",
              width: "14px",
              height: "14px",
              color: customTheme.colors.secondary.main,
              animation: "starFloat 9s ease-in-out infinite reverse",
              "@keyframes starFloat": {
                "0%, 100%": {
                  transform: "translateY(0px) rotate(0deg) scale(1)",
                  opacity: 0.7,
                },
                "50%": {
                  transform: "translateY(-12px) rotate(180deg) scale(1.4)",
                  opacity: 1,
                },
              },
            }}
          >
            ✨
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "60%",
              left: "5%",
              width: "12px",
              height: "12px",
              color: customTheme.colors.primary.main,
              animation: "starFloat 5s ease-in-out infinite",
              "@keyframes starFloat": {
                "0%, 100%": {
                  transform: "translateY(0px) rotate(0deg) scale(1)",
                  opacity: 0.3,
                },
                "50%": {
                  transform: "translateY(-10px) rotate(180deg) scale(1.5)",
                  opacity: 0.8,
                },
              },
            }}
          >
            ⭐
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "70%",
              right: "8%",
              width: "22px",
              height: "22px",
              color: customTheme.colors.secondary.main,
              animation: "starFloat 11s ease-in-out infinite reverse",
              "@keyframes starFloat": {
                "0%, 100%": {
                  transform: "translateY(0px) rotate(0deg) scale(1)",
                  opacity: 0.5,
                },
                "50%": {
                  transform: "translateY(-25px) rotate(180deg) scale(1.2)",
                  opacity: 1,
                },
              },
            }}
          >
            ✨
          </Box>
        </Box>
        <MuiContainer maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
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
              Linear vs Easy Ease
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
              Посмотрите разницу между линейной анимацией и Easy Ease. Easy Ease
              делает движение более естественным и профессиональным.{" "}
              <strong>
                Всегда используйте Easy Ease по умолчанию, если только вам не
                нужен именно линейный характер движения.
              </strong>
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
              justifyContent: "center",
              alignItems: { xs: "center", md: "stretch" },
            }}
          >
            {/* Linear Animation */}
            <Box
              sx={{
                flex: 1,
                maxWidth: "400px",
                width: { xs: "100%", sm: "400px" },
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Paper
                sx={{
                  p: 3,
                  backgroundColor: "#ffffff",
                  borderRadius: 2,
                  textAlign: "center",
                  width: "100%",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: customTheme.colors.text.primary,
                    mb: 2,
                    fontWeight: "bold",
                  }}
                >
                  Linear Animation
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: customTheme.colors.text.primary,
                    mb: 3,
                    opacity: 0.8,
                  }}
                >
                  Постоянная скорость движения
                </Typography>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    width: "100%",
                    height: "200px",
                    borderRadius: "8px",
                    backgroundColor: "#f5f5f5",
                  }}
                >
                  <source src="/LINEAR.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Paper>
            </Box>

            {/* Easy Ease Animation */}
            <Box
              sx={{
                flex: 1,
                maxWidth: "400px",
                width: { xs: "100%", sm: "400px" },
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Paper
                sx={{
                  p: 3,
                  backgroundColor: "#ffffff",
                  borderRadius: 2,
                  textAlign: "center",
                  width: "100%",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: customTheme.colors.primary.main,
                    mb: 2,
                    fontWeight: "bold",
                  }}
                >
                  Easy Ease Animation
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: customTheme.colors.text.primary,
                    mb: 3,
                    opacity: 0.8,
                  }}
                >
                  Естественное ускорение и замедление
                </Typography>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    width: "100%",
                    height: "200px",
                    borderRadius: "8px",
                    backgroundColor: "#f5f5f5",
                  }}
                >
                  <source src="/EASY_EASE.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Paper>
            </Box>
          </Box>

          {/* Easy Ease Set Video */}
          <Box sx={{ mt: 8, mb: 6 }}>
            <Box sx={{ textAlign: "center", mb: 4 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  color: customTheme.colors.primary.main,
                  fontSize: { xs: "1.5rem", md: "2rem" },
                  mb: 3,
                }}
              >
                Как применить Easy Ease
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: customTheme.colors.text.primary,
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  lineHeight: 1.8,
                  maxWidth: "600px",
                  mx: "auto",
                  mb: 4,
                }}
              >
                Практический пример применения Easy Ease к ключевым кадрам
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Paper
                sx={{
                  p: 3,
                  backgroundColor: "#ffffff",
                  borderRadius: 2,
                  textAlign: "center",
                  maxWidth: "800px",
                  width: "100%",
                }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    width: "100%",
                    maxWidth: "800px",
                    height: "auto",
                    borderRadius: "8px",
                    backgroundColor: "#f5f5f5",
                  }}
                >
                  <source src="/easy_ease_set.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <Typography
                  variant="body2"
                  sx={{
                    color: customTheme.colors.text.primary,
                    opacity: 0.8,
                    mt: 2,
                  }}
                >
                  Пошаговое применение Easy Ease
                </Typography>
              </Paper>
            </Box>
          </Box>
        </MuiContainer>
      </Box>

      {/* Easy Ease Explanation Section - White background */}
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
              Почему Easy Ease лучше?
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
              Easy Ease создает более естественное движение, которое лучше
              воспринимается зрителем. Это основа профессиональной анимации.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
            }}
          >
            <ExplanationSection
              icon={<TipsAndUpdates sx={{ mr: 1, verticalAlign: "middle" }} />}
              title="Естественное движение"
              description="Easy Ease имитирует реальную физику — объекты начинают медленно, ускоряются в середине и замедляются в конце. Это выглядит естественно и профессионально. Linear анимация выглядит роботизированно и неестественно, что сразу выдает любительский уровень работы."
            />

            <ExplanationSection
              icon={<SettingsSuggest sx={{ mr: 1, verticalAlign: "middle" }} />}
              title="Профессиональный вид"
              description="Клиенты и зрители сразу замечают разницу. Easy Ease делает анимацию более дорогой и качественной на вид, что повышает ценность ваших услуг. Это один из самых простых способов сделать анимацию профессиональной без дополнительных усилий."
            />
          </Box>
        </MuiContainer>
      </Box>

      {/* Speed Graph Section - D8E1E3 background */}
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
              Speed Graph — ключ к профессиональной анимации
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
              Speed Graph — это ваш главный инструмент для создания
              профессиональной анимации. Изучив его, вы сможете контролировать
              каждый аспект движения.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 6,
              alignItems: "center",
            }}
          >
            {/* Video Section */}
            <Box sx={{ flex: 1, maxWidth: "700px" }}>
              <Paper
                sx={{
                  p: 3,
                  backgroundColor: "#ffffff",
                  borderRadius: 2,
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: customTheme.colors.primary.main,
                    mb: 3,
                    fontWeight: "bold",
                  }}
                >
                  Speed Graph в действии
                </Typography>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "8px",
                    backgroundColor: "#f5f5f5",
                  }}
                >
                  <source src="/speed_graph.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Paper>
            </Box>

            {/* Explanation Section */}
            <Box sx={{ flex: 1 }}>
              <ExplanationSection
                icon={
                  <TipsAndUpdates sx={{ mr: 1, verticalAlign: "middle" }} />
                }
                title="Почему Speed Graph важен?"
                description="Speed Graph показывает реальную скорость анимации в каждый момент времени. Это позволяет создавать естественные переходы и контролировать каждый аспект движения. Без понимания Speed Graph вы ограничены стандартными easing функциями. С ним вы можете создавать уникальные, профессиональные анимации."
                backgroundColor="#D8E1E3"
              />

              <ExplanationSection
                icon={
                  <SettingsSuggest sx={{ mr: 1, verticalAlign: "middle" }} />
                }
                title="Практические преимущества"
                description=""
                backgroundColor="#D8E1E3"
              >
                <BulletList
                  items={[
                    "Точный контроль скорости анимации",
                    "Создание уникальных easing кривых",
                    "Профессиональный уровень анимации",
                  ]}
                />
              </ExplanationSection>
            </Box>
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
            <Key
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
            <ExplanationSection
              icon={<TipsAndUpdates sx={{ mr: 1, verticalAlign: "middle" }} />}
              title="Начните с простого"
              description="Начните с анимации одного свойства (например, позиции). Изучите как работают Linear и Auto Bezier интерполяции. Помните: лучше сделать простую анимацию качественно."
              backgroundColor="#D8E1E3"
            />

            <ExplanationSection
              icon={<SettingsSuggest sx={{ mr: 1, verticalAlign: "middle" }} />}
              title="Изучите Graph Editor"
              description="Graph Editor — ваш лучший друг для создания профессиональной анимации. Изучите разницу между Speed и Value графиками. Экспериментируйте с кривыми Безье."
              backgroundColor="#D8E1E3"
            />
          </Box>
        </MuiContainer>
      </Box>
    </Box>
  );
};

export default FundamentalsPage;
