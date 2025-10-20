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
import { AutoAwesome } from "@mui/icons-material";

const MaskingEffectsPage: React.FC = () => {
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
          <AutoAwesome
            sx={{
              mr: 2,
              color: "#66bfbf",
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
            Masking & Effects
          </Typography>
        </Box>

        {/* Main Content */}
        <Card
          sx={{
            boxShadow: "0 8px 32px rgba(102, 191, 191, 0.2)",
            borderRadius: 3,
            background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
            border: "1px solid rgba(102, 191, 191, 0.3)",
          }}
        >
          <CardContent sx={{ p: { xs: 3, sm: 4, md: 5 } }}>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                fontWeight: "bold",
                color: "#66bfbf",
                mb: 3,
                fontSize: { xs: "1.25rem", md: "1.5rem" },
              }}
            >
              Маски и эффекты для профессионального вида
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
              Маски и эффекты — это то, что отличает любительские работы от
              профессиональных. Правильное использование масок и эффектов
              позволяет создавать сложные композиции и визуальные эффекты.
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
                Основные инструменты:
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
                <Chip
                  label="Pen Tool"
                  sx={{
                    backgroundColor: "rgba(102, 191, 191, 0.2)",
                    color: "#66bfbf",
                    border: "1px solid rgba(102, 191, 191, 0.3)",
                  }}
                />
                <Chip
                  label="Mask Feather"
                  sx={{
                    backgroundColor: "rgba(102, 191, 191, 0.2)",
                    color: "#66bfbf",
                    border: "1px solid rgba(102, 191, 191, 0.3)",
                  }}
                />
                <Chip
                  label="Track Matte"
                  sx={{
                    backgroundColor: "rgba(102, 191, 191, 0.2)",
                    color: "#66bfbf",
                    border: "1px solid rgba(102, 191, 191, 0.3)",
                  }}
                />
                <Chip
                  label="Effects Panel"
                  sx={{
                    backgroundColor: "rgba(102, 191, 191, 0.2)",
                    color: "#66bfbf",
                    border: "1px solid rgba(102, 191, 191, 0.3)",
                  }}
                />
              </Box>
            </Box>

            <Paper
              sx={{
                p: 3,
                backgroundColor: "rgba(102, 191, 191, 0.1)",
                border: "1px solid rgba(102, 191, 191, 0.2)",
                borderRadius: 2,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "#66bfbf",
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
                Начните с изучения Pen Tool для создания масок. Изучите основные
                эффекты: Blur, Glow, Color Correction. Помните: эффекты должны
                служить цели, а не быть самоцелью.
              </Typography>
            </Paper>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default MaskingEffectsPage;
