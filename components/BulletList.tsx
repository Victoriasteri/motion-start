import React from "react";
import { Typography, Box } from "@mui/material";
import { theme as customTheme } from "../styles/theme";

interface BulletListProps {
  items: string[];
  color?: string;
  lineHeight?: number;
  mb?: number;
}

const BulletList: React.FC<BulletListProps> = ({
  items,
  color = customTheme.colors.text.primary,
  lineHeight = 1.6,
  mb = 2,
}) => {
  return (
    <Box>
      {items.map((item, index) => (
        <Typography
          key={index}
          variant="body2"
          sx={{
            color,
            lineHeight,
            mb: index === items.length - 1 ? 0 : mb,
          }}
        >
          • {item}
        </Typography>
      ))}
    </Box>
  );
};

export default BulletList;
