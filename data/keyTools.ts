import { Timeline, TextFields, AutoAwesome } from "@mui/icons-material";
import { theme as customTheme } from "../styles/theme";

export interface KeyTool {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  color: string;
  href: string;
}

export const keyTools: KeyTool[] = [
  {
    id: "shape-animation",
    icon: Timeline,
    title: "Shape Animation",
    description: "Анимация фигур и иконок — основа моушн-дизайна",
    color: customTheme.colors.primary.main,
    href: "/tools/shape-animation",
  },
  {
    id: "text-animation",
    icon: TextFields,
    title: "Text Animation",
    description: "Анимация текста — самый востребованный навык",
    color: customTheme.colors.secondary.main,
    href: "/tools/text-animation",
  },
  {
    id: "masking-effects",
    icon: AutoAwesome,
    title: "Masking & Effects",
    description: "Маски и эффекты для профессионального вида",
    color: customTheme.colors.primary.main,
    href: "/tools/masking-effects",
  },
];
