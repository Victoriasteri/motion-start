"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  PlayArrow,
  MenuBook,
  BuildCircle,
  AutoFixHigh,
  Menu as MenuIcon,
  ArrowDropDown,
} from "@mui/icons-material";
import { keyTools } from "../data/keyTools";
import { theme as customTheme } from "../styles/theme";

const Navbar: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);
  const [toolsMenuAnchorEl, setToolsMenuAnchorEl] =
    useState<null | HTMLElement>(null);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setMenuAnchorEl(null);
  };

  const handleOpenToolsMenu = (event: React.MouseEvent<HTMLElement>) => {
    setToolsMenuAnchorEl(event.currentTarget);
  };

  const handleCloseToolsMenu = () => {
    setToolsMenuAnchorEl(null);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <AppBar
      position="sticky"
      sx={{
        background: customTheme.components.navbar.background,
        backdropFilter: customTheme.components.navbar.backdropFilter,
        borderBottom: customTheme.components.navbar.borderBottom,
        boxShadow: customTheme.components.navbar.boxShadow,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar>
          <Link
            href="/"
            style={{ textDecoration: "none", flexGrow: 1, minWidth: 0 }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                },
              }}
            >
              <PlayArrow
                sx={{
                  mr: 1,
                  color: customTheme.colors.primary.main,
                  fontSize: { xs: "1.5rem", md: "1.8rem" },
                }}
              />
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: "bold",
                  background: customTheme.gradients.text.logo,
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: { xs: "1.25rem", md: "1.5rem" },
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                Motion Start
              </Typography>
            </Box>
          </Link>

          {/* Desktop Links */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            <Button
              color="inherit"
              startIcon={<MenuBook />}
              sx={{
                color: "#eaf6f6",
                fontWeight: "500",
                "&:hover": {
                  backgroundColor: "rgba(102, 191, 191, 0.15)",
                  transform: "translateY(-2px)",
                  transition: "all 0.3s ease",
                },
              }}
            >
              Гайд
            </Button>
            <Button
              color="inherit"
              startIcon={<BuildCircle />}
              endIcon={<ArrowDropDown />}
              onClick={handleOpenToolsMenu}
              sx={{
                color: "#eaf6f6",
                fontWeight: "500",
                "&:hover": {
                  backgroundColor: "rgba(102, 191, 191, 0.15)",
                  transform: "translateY(-2px)",
                  transition: "all 0.3s ease",
                },
              }}
            >
              Инструменты
            </Button>
            <Menu
              anchorEl={toolsMenuAnchorEl}
              open={Boolean(toolsMenuAnchorEl)}
              onClose={handleCloseToolsMenu}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              keepMounted
            >
              {keyTools.map((tool) => {
                const IconComponent = tool.icon;
                return (
                  <MenuItem
                    key={tool.id}
                    onClick={handleCloseToolsMenu}
                    component={Link}
                    href={tool.href}
                  >
                    <ListItemIcon>
                      <IconComponent sx={{ color: tool.color }} />
                    </ListItemIcon>
                    <ListItemText primary={tool.title} />
                  </MenuItem>
                );
              })}
            </Menu>
            <Button
              color="inherit"
              startIcon={<AutoFixHigh />}
              sx={{
                color: "#eaf6f6",
                fontWeight: "500",
                "&:hover": {
                  backgroundColor: "rgba(102, 191, 191, 0.15)",
                  transform: "translateY(-2px)",
                  transition: "all 0.3s ease",
                },
              }}
            >
              Техники
            </Button>
          </Box>

          {/* Mobile Menu Button */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              aria-label="open menu"
              onClick={handleOpenMenu}
              edge="end"
              sx={{
                ml: 1,
                color: "#eaf6f6",
                "&:hover": { backgroundColor: "rgba(102, 191, 191, 0.15)" },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={menuAnchorEl}
              open={Boolean(menuAnchorEl)}
              onClose={handleCloseMenu}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              keepMounted
            >
              <MenuItem onClick={handleCloseMenu}>
                <MenuBook sx={{ mr: 1 }} /> Гайд
              </MenuItem>
              <MenuItem onClick={handleCloseMenu}>
                <BuildCircle sx={{ mr: 1 }} /> Инструменты
              </MenuItem>
              {keyTools.map((tool) => {
                const IconComponent = tool.icon;
                return (
                  <MenuItem
                    key={tool.id}
                    onClick={handleCloseMenu}
                    component={Link}
                    href={tool.href}
                    sx={{ pl: 4 }}
                  >
                    <IconComponent
                      sx={{ mr: 1, color: tool.color, fontSize: "1.2rem" }}
                    />
                    {tool.title}
                  </MenuItem>
                );
              })}
              <MenuItem onClick={handleCloseMenu}>
                <AutoFixHigh sx={{ mr: 1 }} /> Техники
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
