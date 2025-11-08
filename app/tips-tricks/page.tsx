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
  Link,
  Button,
} from "@mui/material";
import {
  Lightbulb,
  Code,
  Extension,
  Palette,
  Layers,
  Speed,
  Download,
  Visibility,
  AutoAwesome,
  Brush,
  Texture,
} from "@mui/icons-material";
import { theme as customTheme } from "../../styles/theme";

const TipsTricksPage: React.FC = () => {
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
              <Lightbulb
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
                Фишки и хитрости
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
              Профессиональные секреты, которые ускорят вашу работу и улучшат
              качество проектов. Бесплатные скрипты, плагины и техники от
              опытных моушн-дизайнеров.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Free Scripts & Plugins Section - Gray background */}
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
              Бесплатные скрипты и плагины
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
              Эти инструменты сэкономят часы работы и поднимут качество ваших
              проектов на новый уровень.
            </Typography>
          </Box>

          {/* Scripts & Plugins Grid */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
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
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 2,
                    }}
                  >
                    <Code
                      sx={{
                        color: customTheme.colors.primary.main,
                        fontSize: "1.5rem",
                      }}
                    />
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      Motion Tools
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    Набор скриптов для быстрого создания анимаций: Keyframe
                    Wingman, Anchor Point Mover, Layer Sequencing, Shape Layer
                    Magic.
                    <strong>Бесплатный и ОБЯЗАТЕЛЬНЫЙ</strong> - я использую его
                    постоянно!
                  </Typography>
                  <Box
                    sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}
                  >
                    <Chip label="Keyframe Wingman" size="small" />
                    <Chip label="Anchor Point Mover" size="small" />
                    <Chip label="Layer Sequencing" size="small" />
                    <Chip label="FREE" size="small" />
                  </Box>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      backgroundColor: customTheme.colors.primary.main,
                      "&:hover": {
                        backgroundColor: customTheme.colors.primary.dark,
                      },
                    }}
                    onClick={() =>
                      window.open(
                        "https://motiondesign.school/products/motion-tools-classic/",
                        "_blank"
                      )
                    }
                  >
                    Скачать
                  </Button>
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
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 2,
                    }}
                  >
                    <Speed
                      sx={{
                        color: customTheme.colors.primary.main,
                        fontSize: "1.5rem",
                      }}
                    />
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      Animation Composer
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    Бесплатный плагин с 900,000+ пользователей. Анимационные
                    пресеты, переходы, титры и инструменты для быстрого создания
                    контента. <strong>Бесплатный</strong> - я тоже использую его
                    постоянно!
                  </Typography>
                  <Box
                    sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}
                  >
                    <Chip label="Animation Presets" size="small" />
                    <Chip label="Transitions" size="small" />
                    <Chip label="FREE" size="small" />
                    <Chip label="MUST USE" size="small" />
                  </Box>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      backgroundColor: customTheme.colors.primary.main,
                      "&:hover": {
                        backgroundColor: customTheme.colors.primary.dark,
                      },
                    }}
                    onClick={() =>
                      window.open(
                        "https://misterhorse.com/animation-composer",
                        "_blank"
                      )
                    }
                  >
                    Скачать
                  </Button>
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
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 2,
                    }}
                  >
                    <Layers
                      sx={{
                        color: customTheme.colors.secondary.main,
                        fontSize: "1.5rem",
                      }}
                    />
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      Overlord
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    Связывает Illustrator с After Effects. Импорт векторной
                    графики с сохранением слоев и стилей.{" "}
                    <strong>Платный плагин</strong> - стоит своих денег для
                    профессиональной работы.
                  </Typography>
                  <Box
                    sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}
                  >
                    <Chip label="AI to AE" size="small" />
                    <Chip label="Vector Import" size="small" />
                    <Chip label="Layer Sync" size="small" />
                  </Box>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      backgroundColor: customTheme.colors.secondary.main,
                      "&:hover": {
                        backgroundColor: customTheme.colors.secondary.dark,
                      },
                    }}
                    onClick={() =>
                      window.open("https://battleaxe.co/overlord", "_blank")
                    }
                  >
                    Купить
                  </Button>
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
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 2,
                    }}
                  >
                    <Layers
                      sx={{
                        color: customTheme.colors.primary.main,
                        fontSize: "1.5rem",
                      }}
                    />
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      True Comp Duplicator
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    Создает полную копию иерархии композиций включая
                    подкомпозиции. Сохраняет структуру папок и обновляет
                    выражения. <strong>Платный скрипт</strong> - незаменим для
                    больших проектов.
                  </Typography>
                  <Box
                    sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}
                  >
                    <Chip label="Comp Duplication" size="small" />
                    <Chip label="Hierarchy" size="small" />
                    <Chip label="Expressions" size="small" />
                  </Box>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      backgroundColor: customTheme.colors.primary.main,
                      "&:hover": {
                        backgroundColor: customTheme.colors.primary.dark,
                      },
                    }}
                    onClick={() =>
                      window.open(
                        "https://aescripts.com/true-comp-duplicator/",
                        "_blank"
                      )
                    }
                  >
                    Купить
                  </Button>
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
                      Flow
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    Визуальный редактор easing кривых. Создавайте плавные
                    анимации без изучения математики.{" "}
                    <strong>Платный плагин</strong> - профессиональный
                    инструмент для точной настройки анимаций.
                  </Typography>
                  <Box
                    sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}
                  >
                    <Chip label="Easing Curves" size="small" />
                    <Chip label="Visual Editor" size="small" />
                    <Chip label="Professional" size="small" />
                  </Box>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      backgroundColor: customTheme.colors.secondary.main,
                      "&:hover": {
                        backgroundColor: customTheme.colors.secondary.dark,
                      },
                    }}
                    onClick={() =>
                      window.open("https://aescripts.com/flow/", "_blank")
                    }
                  >
                    Купить
                  </Button>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Visual Enhancement Tips - White background */}
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
              Визуальные улучшения
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
              Простые техники, которые кардинально улучшат внешний вид ваших
              проектов.
            </Typography>
          </Box>

          {/* Visual Tips Grid */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
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
                    <Palette
                      sx={{
                        color: customTheme.colors.primary.main,
                        fontSize: "1.5rem",
                      }}
                    />
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      Inner Shadow на Shape Layer
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    Добавьте Inner Shadow к Shape Layer и поиграйте с
                    настройками. Изменяйте Distance, Size, Opacity для создания
                    глубины и объема.
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    <Chip label="Depth" size="small" />
                    <Chip label="Volume" size="small" />
                    <Chip label="Realism" size="small" />
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
                    <Brush
                      sx={{
                        color: customTheme.colors.secondary.main,
                        fontSize: "1.5rem",
                      }}
                    />
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      Overlay текстуры
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    Используйте текстуры как Overlay: grit, grunge, paper, film
                    grain. Установите Blend Mode на Overlay или Soft Light для
                    органичного вида.
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    <Chip label="Grit" size="small" />
                    <Chip label="Grunge" size="small" />
                    <Chip label="Paper" size="small" />
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
                    <Visibility
                      sx={{
                        color: customTheme.colors.primary.main,
                        fontSize: "1.5rem",
                      }}
                    />
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      Depth of Field
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    Добавьте Camera Blur на разные слои с разной силой. Создайте
                    иллюзию глубины и фокуса как в реальной камере.
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    <Chip label="Camera Blur" size="small" />
                    <Chip label="Focus" size="small" />
                    <Chip label="Depth" size="small" />
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
                      Light Leaks
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    Добавьте световые блики и утечки света. Используйте Blend
                    Mode Screen или Add для реалистичного эффекта.
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    <Chip label="Light Leaks" size="small" />
                    <Chip label="Screen Mode" size="small" />
                    <Chip label="Realism" size="small" />
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Stock Resources Section - Gray background */}
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
              Готовые ресурсы для ускорения работы
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
              Используйте готовые шаблоны и эффекты для быстрого создания
              профессиональных проектов.
            </Typography>
          </Box>

          {/* Stock Resources Grid */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
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
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 2,
                    }}
                  >
                    <Download
                      sx={{
                        color: customTheme.colors.primary.main,
                        fontSize: "1.5rem",
                      }}
                    />
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      Envato Elements
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    Огромная библиотека After Effects шаблонов, переходов,
                    эффектов и анимаций. Подписка дает доступ ко всему контенту.
                  </Typography>
                  <Box
                    sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}
                  >
                    <Chip label="Templates" size="small" />
                    <Chip label="Transitions" size="small" />
                    <Chip label="Effects" size="small" />
                  </Box>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      backgroundColor: customTheme.colors.primary.main,
                      "&:hover": {
                        backgroundColor: customTheme.colors.primary.dark,
                      },
                    }}
                    onClick={() =>
                      window.open("https://elements.envato.com/", "_blank")
                    }
                  >
                    Перейти
                  </Button>
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
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 2,
                    }}
                  >
                    <Texture
                      sx={{
                        color: customTheme.colors.secondary.main,
                        fontSize: "1.5rem",
                      }}
                    />
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      Motion Array
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    Качественные шаблоны и эффекты для After Effects. Регулярные
                    обновления и новые проекты каждый месяц.
                  </Typography>
                  <Box
                    sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}
                  >
                    <Chip
                      label="High Quality"
                      size="small"
                      sx={{ color: "#ffffff" }}
                    />
                    <Chip
                      label="Regular Updates"
                      size="small"
                      sx={{ color: "#ffffff" }}
                    />
                    <Chip
                      label="New Projects"
                      size="small"
                      sx={{ color: "#ffffff" }}
                    />
                  </Box>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      backgroundColor: customTheme.colors.secondary.main,
                      "&:hover": {
                        backgroundColor: customTheme.colors.secondary.dark,
                      },
                    }}
                    onClick={() =>
                      window.open("https://motionarray.com/", "_blank")
                    }
                  >
                    Перейти
                  </Button>
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
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 2,
                    }}
                  >
                    <Layers
                      sx={{
                        color: customTheme.colors.primary.main,
                        fontSize: "1.5rem",
                      }}
                    />
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      VideoHive
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    Отдельные покупки шаблонов и эффектов. Идеально для разовых
                    проектов или конкретных нужд.
                  </Typography>
                  <Box
                    sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}
                  >
                    <Chip label="Individual" size="small" />
                    <Chip label="Specific Needs" size="small" />
                    <Chip label="One-time" size="small" />
                  </Box>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      backgroundColor: customTheme.colors.primary.main,
                      "&:hover": {
                        backgroundColor: customTheme.colors.primary.dark,
                      },
                    }}
                    onClick={() =>
                      window.open("https://videohive.net/", "_blank")
                    }
                  >
                    Перейти
                  </Button>
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
                      Mixkit
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    Бесплатные видео, анимации и эффекты. Отличный ресурс для
                    начинающих и тестирования идей.
                  </Typography>
                  <Box
                    sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}
                  >
                    <Chip label="Free" size="small" />
                    <Chip label="Testing" size="small" />
                    <Chip label="Beginners" size="small" />
                  </Box>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      backgroundColor: customTheme.colors.secondary.main,
                      "&:hover": {
                        backgroundColor: customTheme.colors.secondary.dark,
                      },
                    }}
                    onClick={() => window.open("https://mixkit.co/", "_blank")}
                  >
                    Перейти
                  </Button>
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

export default TipsTricksPage;
