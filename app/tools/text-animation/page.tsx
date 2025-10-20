"use client";

import React from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Paper,
  Chip,
} from "@mui/material";
import { TextFields } from "@mui/icons-material";

const TextAnimationPage: React.FC = () => {
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#1a1a2e" }}>
      <Container
        maxWidth="lg"
        sx={{
          pt: { xs: 4, md: 8 },
          pb: { xs: 4, md: 8 },
          px: { xs: 2, sm: 3 },
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: { xs: 4, md: 6 },
          }}
        >
          <TextFields
            sx={{
              mr: 2,
              color: "#f76b8a",
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          />
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: "bold",
              color: "#eaf6f6",
              fontSize: { xs: "1.75rem", md: "2.5rem" },
              textAlign: "center",
            }}
          >
            Text Animation
          </Typography>
        </Box>

        {/* Main Content */}
        <Card
          sx={{
            boxShadow: "0 8px 32px rgba(247, 107, 138, 0.2)",
            borderRadius: 3,
            background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
            border: "1px solid rgba(247, 107, 138, 0.3)",
          }}
        >
          <CardContent sx={{ p: { xs: 3, sm: 4, md: 5 } }}>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                fontWeight: "bold",
                color: "#f76b8a",
                mb: 3,
                fontSize: { xs: "1.25rem", md: "1.5rem" },
              }}
            >
              Анимация текста — самый востребованный навык
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.8,
                mb: 3,
                color: "#eaf6f6",
              }}
            >
              Текстовая анимация используется в 90% коммерческих проектов.
              Научившись создавать эффектные анимации текста, вы сразу станете
              востребованным специалистом в области моушн-дизайна.
            </Typography>

            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "#eaf6f6",
                  mb: 2,
                  fontSize: { xs: "1.1rem", md: "1.25rem" },
                }}
              >
                Ключевые техники:
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
                <Chip
                  label="Type on Effect"
                  sx={{
                    backgroundColor: "rgba(247, 107, 138, 0.2)",
                    color: "#f76b8a",
                    border: "1px solid rgba(247, 107, 138, 0.3)",
                  }}
                />
                <Chip
                  label="Character Animation"
                  sx={{
                    backgroundColor: "rgba(247, 107, 138, 0.2)",
                    color: "#f76b8a",
                    border: "1px solid rgba(247, 107, 138, 0.3)",
                  }}
                />
                <Chip
                  label="Text Presets"
                  sx={{
                    backgroundColor: "rgba(247, 107, 138, 0.2)",
                    color: "#f76b8a",
                    border: "1px solid rgba(247, 107, 138, 0.3)",
                  }}
                />
                <Chip
                  label="Text Animators"
                  sx={{
                    backgroundColor: "rgba(247, 107, 138, 0.2)",
                    color: "#f76b8a",
                    border: "1px solid rgba(247, 107, 138, 0.3)",
                  }}
                />
              </Box>
            </Box>

            <Paper
              sx={{
                p: 3,
                backgroundColor: "rgba(247, 107, 138, 0.1)",
                border: "1px solid rgba(247, 107, 138, 0.2)",
                borderRadius: 2,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "#f76b8a",
                  mb: 2,
                }}
              >
                💡 Совет для начинающих
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#eaf6f6",
                  lineHeight: 1.6,
                }}
              >
                Изучите Text Animators — это основа всех текстовых анимаций.
                Начните с простых эффектов появления и исчезновения, затем
                переходите к более сложным анимациям движения.
              </Typography>
            </Paper>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default TextAnimationPage;
