"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
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
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  TrendingUp,
  VideoLibrary,
  Star,
  CheckCircle,
  Lightbulb,
  AttachMoney,
  Business,
  PlayArrow,
} from "@mui/icons-material";
import { theme as customTheme } from "../../styles/theme";

const StartHerePage: React.FC = () => {
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
      {/* After Effects Introduction Section */}
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
                color: customTheme.colors.primary.main,
                fontSize: { xs: "1.75rem", md: "2.5rem" },
                mb: 4,
              }}
            >
              Что такое After Effects?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", md: "1.2rem" },
                lineHeight: 1.8,
                color: customTheme.colors.text.primary,
                maxWidth: "900px",
                mx: "auto",
                mb: 4,
              }}
            >
              Adobe After Effects — это профессиональная программа для создания
              анимации, визуальных эффектов и композитинга. Это стандарт
              индустрии для моушн-дизайна, который используется в рекламе, кино,
              телевидении и веб-дизайне.
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
              Программа позволяет создавать сложные анимации, работать с
              3D-элементами, применять эффекты и создавать профессиональные
              видео-контент любой сложности.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Earning Potential Section */}
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
              Заработок с базовыми знаниями
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
              Хорошая новость: для начала заработка в моушн-дизайне не нужно
              изучать все 500+ инструментов After Effects. С базовыми знаниями
              основных элементов вы уже можете создавать коммерчески ценный
              контент и начать зарабатывать.
            </Typography>
          </Box>

          {/* Earning Benefits */}
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
                  backgroundColor: "#ffffff",
                  borderRadius: 3,
                  height: "100%",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <AttachMoney
                    sx={{
                      fontSize: "2.5rem",
                      color: customTheme.colors.primary.main,
                      mr: 2,
                    }}
                  />
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    Быстрый старт
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  С базовыми знаниями вы можете начать брать первые заказы уже
                  через 2-3 месяца обучения, а не через год изучения всех
                  возможностей программы.
                </Typography>
                <List>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <CheckCircle
                        sx={{ color: customTheme.colors.primary.main }}
                      />
                    </ListItemIcon>
                    <ListItemText primary="Первые заказы через 2-3 месяца" />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <CheckCircle
                        sx={{ color: customTheme.colors.primary.main }}
                      />
                    </ListItemIcon>
                    <ListItemText primary="Фокус на коммерчески ценных навыках" />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <CheckCircle
                        sx={{ color: customTheme.colors.primary.main }}
                      />
                    </ListItemIcon>
                    <ListItemText primary="Практическое применение знаний" />
                  </ListItem>
                </List>
              </Paper>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Paper
                sx={{
                  p: 4,
                  backgroundColor: "#ffffff",
                  borderRadius: 3,
                  height: "100%",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <TrendingUp
                    sx={{
                      fontSize: "2.5rem",
                      color: customTheme.colors.secondary.main,
                      mr: 2,
                    }}
                  />
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    Коммерческая ценность
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  Базовые техники моушн-дизайна имеют высокую коммерческую
                  ценность и востребованы на рынке. Клиенты готовы платить за
                  качественную анимацию.
                </Typography>
                <List>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <CheckCircle
                        sx={{ color: customTheme.colors.secondary.main }}
                      />
                    </ListItemIcon>
                    <ListItemText primary="Высокий спрос на анимацию" />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <CheckCircle
                        sx={{ color: customTheme.colors.secondary.main }}
                      />
                    </ListItemIcon>
                    <ListItemText primary="Хорошие расценки за простые проекты" />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <CheckCircle
                        sx={{ color: customTheme.colors.secondary.main }}
                      />
                    </ListItemIcon>
                    <ListItemText primary="Возможность роста и развития" />
                  </ListItem>
                </List>
              </Paper>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Project Types Section */}
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
              Что можно создавать с базовыми знаниями
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
              С основными инструментами After Effects вы можете создавать
              различные типы коммерческого контента, которые пользуются спросом
              на рынке.
            </Typography>
          </Box>

          {/* Project Types */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <Box>
              <Card
                sx={{
                  height: "100%",
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
                  <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    <VideoLibrary
                      sx={{
                        fontSize: "2.5rem",
                        color: customTheme.colors.primary.main,
                        mr: 2,
                      }}
                    />
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      Эксплейнер видео
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mb: 3 }}>
                    Короткие анимированные ролики, объясняющие продукт или
                    услугу. Очень популярны в маркетинге и образовании.
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    <Chip label="Простая анимация" size="small" />
                    <Chip label="Текстовые блоки" size="small" />
                    <Chip label="Иконки" size="small" />
                  </Box>
                </CardContent>
              </Card>
            </Box>

            <Box>
              <Card
                sx={{
                  height: "100%",
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
                  <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    <Typography
                      sx={{
                        fontSize: "2.5rem",
                        color: customTheme.colors.secondary.main,
                        mr: 2,
                        fontWeight: "bold",
                      }}
                    >
                      Aa
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      Текстовые анимации
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mb: 3 }}>
                    Анимированный текст для социальных сетей, презентаций и
                    рекламы. Один из самых востребованных типов контента.
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    <Chip label="Типографика" size="small" />
                    <Chip label="Кинетический текст" size="small" />
                    <Chip label="Социальные сети" size="small" />
                  </Box>
                </CardContent>
              </Card>
            </Box>

            <Box>
              <Card
                sx={{
                  height: "100%",
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
                  <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    <Business
                      sx={{
                        fontSize: "2.5rem",
                        color: customTheme.colors.primary.main,
                        mr: 2,
                      }}
                    />
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      Рекламные баннеры
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mb: 3 }}>
                    Анимированные баннеры для веб-сайтов, социальных сетей и
                    рекламных кампаний. Постоянно растущий рынок.
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    <Chip label="Веб-баннеры" size="small" />
                    <Chip label="Социальные сети" size="small" />
                    <Chip label="Реклама" size="small" />
                  </Box>
                </CardContent>
              </Card>
            </Box>

            <Box>
              <Card
                sx={{
                  height: "100%",
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
                  <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    <Star
                      sx={{
                        fontSize: "2.5rem",
                        color: customTheme.colors.secondary.main,
                        mr: 2,
                      }}
                    />
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      Логотип анимации
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mb: 3 }}>
                    Анимированные логотипы для брендинга, видео-контента и
                    презентаций. Всегда востребованы компаниями.
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    <Chip label="Брендинг" size="small" />
                    <Chip label="Презентации" size="small" />
                    <Chip label="Видео" size="small" />
                  </Box>
                </CardContent>
              </Card>
            </Box>

            <Box>
              <Card
                sx={{
                  height: "100%",
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
                  <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    <Lightbulb
                      sx={{
                        fontSize: "2.5rem",
                        color: customTheme.colors.primary.main,
                        mr: 2,
                      }}
                    />
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      Инфографика
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mb: 3 }}>
                    Анимированная инфографика для презентаций, образовательного
                    контента и отчетов. Высоко ценится в бизнесе.
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    <Chip label="Презентации" size="small" />
                    <Chip label="Образование" size="small" />
                    <Chip label="Отчеты" size="small" />
                  </Box>
                </CardContent>
              </Card>
            </Box>

            <Box>
              <Card
                sx={{
                  height: "100%",
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
                  <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    <PlayArrow
                      sx={{
                        fontSize: "2.5rem",
                        color: customTheme.colors.secondary.main,
                        mr: 2,
                      }}
                    />
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      Социальные сети
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mb: 3 }}>
                    Короткие анимированные ролики для Instagram, TikTok, YouTube
                    Shorts. Огромный и постоянно растущий рынок.
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    <Chip label="Instagram" size="small" />
                    <Chip label="TikTok" size="small" />
                    <Chip label="YouTube" size="small" />
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Call to Action Section */}
      <Box
        sx={{
          backgroundColor: "#D8E1E3",
          py: { xs: 6, md: 10 },
          px: { xs: 2, sm: 3 },
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                color: customTheme.colors.text.primary,
                fontSize: { xs: "1.75rem", md: "2.5rem" },
                mb: 4,
              }}
            >
              Готовы начать?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", md: "1.2rem" },
                lineHeight: 1.8,
                color: customTheme.colors.text.primary,
                maxWidth: "800px",
                mx: "auto",
                mb: 4,
              }}
            >
              Узнайте, какие инструменты и техники After Effects действительно
              важны для начала заработка в моушн-дизайне.
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                justifyContent: "center",
                mt: 4,
              }}
            >
              <Link
                href="/tools/fundamentals"
                style={{ textDecoration: "none" }}
              >
                <Chip
                  label="Начать изучение"
                  sx={{
                    ...customTheme.components.chip.primary,
                    fontSize: "1rem",
                    px: 3,
                    py: 1.5,
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: customTheme.colors.primary.dark,
                      color: customTheme.colors.primary.contrast,
                    },
                  }}
                />
              </Link>
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

export default StartHerePage;
