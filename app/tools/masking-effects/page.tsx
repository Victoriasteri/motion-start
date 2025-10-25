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
import {
  AutoAwesome,
  Visibility,
  VisibilityOff,
  BlurOn,
  ColorLens,
  Transform,
} from "@mui/icons-material";
import { theme as customTheme } from "../../../styles/theme";

const MaskingEffectsPage: React.FC = () => {
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
              <AutoAwesome
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
                Masking & Effects
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
              Маскирование и эффекты — мощные инструменты для создания
              профессиональных визуальных композиций. Узнайте, когда и как их
              использовать.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Masking Section - Gray background */}
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
              Что такое маскирование
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
              Маскирование позволяет скрывать или показывать части слоя,
              создавая сложные композиции. Это основа профессионального
              композитинга в After Effects.
            </Typography>
          </Box>

          {/* Masking Techniques */}
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
                  <Visibility
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
                    Когда использовать маски
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: customTheme.colors.text.primary,
                    lineHeight: 1.6,
                  }}
                >
                  Маски нужны для изоляции объектов, создания переходов,
                  удаления фона, анимации появления/исчезновения элементов.
                  Используйте их для точного контроля видимости частей слоя.
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
                  <VisibilityOff
                    sx={{
                      color: customTheme.colors.secondary.main,
                      fontSize: "1.5rem",
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      color: customTheme.colors.secondary.main,
                    }}
                  >
                    Типы масок
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: customTheme.colors.text.primary,
                    lineHeight: 1.6,
                  }}
                >
                  Rectangle Mask — для прямоугольных областей, Ellipse Mask —
                  для круглых, Pen Tool — для сложных форм. Каждый тип подходит
                  для разных задач и уровней сложности.
                </Typography>
              </Paper>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Effects Section - White background */}
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
                mb: 4,
              }}
            >
              Необходимые эффекты для изучения
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
              Эти эффекты используются в 80% коммерческих проектов. Изучите их в
              первую очередь.
            </Typography>
          </Box>

          {/* Effects Grid */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: 3,
              }}
            >
              <Card
                sx={{
                  flex: 1,
                  p: 3,
                  backgroundColor: "#D8E1E3",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 8px 25px rgba(188, 108, 41, 0.15)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 2,
                    }}
                  >
                    <BlurOn
                      sx={{
                        color: customTheme.colors.primary.main,
                        fontSize: "1.5rem",
                      }}
                    />
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      Blur & Sharpen
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    Gaussian Blur для размытия фона, Fast Blur для
                    производительности, Unsharp Mask для резкости. Основа для
                    создания глубины.
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    <Chip label="Gaussian Blur" size="small" />
                    <Chip label="Fast Blur" size="small" />
                    <Chip label="Unsharp Mask" size="small" />
                  </Box>
                </CardContent>
              </Card>

              <Card
                sx={{
                  flex: 1,
                  p: 3,
                  backgroundColor: "#D8E1E3",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 8px 25px rgba(188, 108, 41, 0.15)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 2,
                    }}
                  >
                    <ColorLens
                      sx={{
                        color: customTheme.colors.secondary.main,
                        fontSize: "1.5rem",
                      }}
                    />
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      Color Correction
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    Color Balance, Hue/Saturation, Levels, Curves для коррекции
                    цвета. Essential для профессионального вида.
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    <Chip label="Color Balance" size="small" />
                    <Chip label="Hue/Saturation" size="small" />
                    <Chip label="Levels" size="small" />
                  </Box>
                </CardContent>
              </Card>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: 3,
              }}
            >
              <Card
                sx={{
                  flex: 1,
                  p: 3,
                  backgroundColor: "#D8E1E3",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 8px 25px rgba(188, 108, 41, 0.15)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 2,
                    }}
                  >
                    <Transform
                      sx={{
                        color: customTheme.colors.primary.main,
                        fontSize: "1.5rem",
                      }}
                    />
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      Distort Effects
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    CC Lens, Bulge, Wave Warp для искажений. Liquify для
                    органичных деформаций. Создают динамичные эффекты.
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    <Chip label="CC Lens" size="small" />
                    <Chip label="Bulge" size="small" />
                    <Chip label="Wave Warp" size="small" />
                  </Box>
                </CardContent>
              </Card>

              <Card
                sx={{
                  flex: 1,
                  p: 3,
                  backgroundColor: "#D8E1E3",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 8px 25px rgba(188, 108, 41, 0.15)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 2,
                    }}
                  >
                    <AutoAwesome
                      sx={{
                        color: customTheme.colors.secondary.main,
                        fontSize: "1.5rem",
                      }}
                    />
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      Glow & Light
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    Glow, CC Light Rays, Lens Flare для световых эффектов.
                    Добавляют магию и атмосферу в композиции.
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    <Chip label="Glow" size="small" />
                    <Chip label="CC Light Rays" size="small" />
                    <Chip label="Lens Flare" size="small" />
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Applications Section - Gray background */}
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
              Где применяются маски и эффекты
            </Typography>
          </Box>

          {/* Applications Grid */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: 3,
              }}
            >
              <Card
                sx={{
                  flex: 1,
                  p: 3,
                  backgroundColor: "#ffffff",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 8px 25px rgba(188, 108, 41, 0.15)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                    Удаление фона
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    Маски для изоляции объектов, Rotoscoping для сложных форм.
                    Основа для композитинга и замены фона.
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    <Chip label="Roto" size="small" />
                    <Chip label="Keying" size="small" />
                    <Chip label="Compositing" size="small" />
                  </Box>
                </CardContent>
              </Card>

              <Card
                sx={{
                  flex: 1,
                  p: 3,
                  backgroundColor: "#ffffff",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 8px 25px rgba(188, 108, 41, 0.15)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                    Световые эффекты
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    Glow, Lens Flare, Light Rays для создания атмосферы.
                    Добавляют профессиональный вид проектам.
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    <Chip label="Atmosphere" size="small" />
                    <Chip label="Lighting" size="small" />
                    <Chip label="Mood" size="small" />
                  </Box>
                </CardContent>
              </Card>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: 3,
              }}
            >
              <Card
                sx={{
                  flex: 1,
                  p: 3,
                  backgroundColor: "#ffffff",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 8px 25px rgba(188, 108, 41, 0.15)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                    Цветокоррекция
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    Color Balance, Levels, Curves для профессиональной
                    обработки. Обязательно для коммерческих проектов.
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    <Chip label="Professional" size="small" />
                    <Chip label="Branding" size="small" />
                    <Chip label="Quality" size="small" />
                  </Box>
                </CardContent>
              </Card>

              <Card
                sx={{
                  flex: 1,
                  p: 3,
                  backgroundColor: "#ffffff",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 8px 25px rgba(188, 108, 41, 0.15)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                    Искажения и деформации
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    Bulge, Wave Warp, Liquify для динамичных эффектов. Создают
                    интересные визуальные решения.
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    <Chip label="Dynamic" size="small" />
                    <Chip label="Creative" size="small" />
                    <Chip label="Unique" size="small" />
                  </Box>
                </CardContent>
              </Card>
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

export default MaskingEffectsPage;
