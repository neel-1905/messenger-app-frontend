import { ThemeName, themes } from "@/constants/theme";
import { useColorScheme } from "react-native";

export function useThemeColor(themeName: ThemeName = "midnight") {
  const colorScheme = useColorScheme() ?? "light";
  const theme = themes[themeName][colorScheme];

  return {
    // Base
    background: theme["--color-background"],
    card: theme["--color-card"],
    border: theme["--color-border"],

    // Text
    foreground: theme["--color-foreground"],
    mutedForeground: theme["--color-muted-foreground"],

    // Brand
    primary: theme["--color-primary"],
    primaryForeground: theme["--color-primary-foreground"],

    secondary: theme["--color-secondary"],
    secondaryForeground: theme["--color-secondary-foreground"],

    accent: theme["--color-accent"],

    // States
    success: theme["--color-success"],
    danger: theme["--color-danger"],
    warning: theme["--color-warning"],

    // Inputs
    input: theme["--color-input"],
    ring: theme["--color-ring"],

    // Chat specific
    chatBubbleMe: theme["--color-chat-bubble-me"],
    chatBubbleOther: theme["--color-chat-bubble-other"],

    chatBubbleMeText: theme["--color-chat-bubble-me-text"],
    chatBubbleOtherText: theme["--color-chat-bubble-other-text"],

    sidebar: theme["--color-sidebar"],
    sidebarActive: theme["--color-sidebar-active"],

    online: theme["--color-online"],
    away: theme["--color-away"],

    messageHover: theme["--color-message-hover"],

    // Extra
    // unread: theme["--color-unread"],
    // typing: theme["--color-typing"],
    // overlay: theme["--color-overlay"],
    // skeleton: theme["--color-skeleton"],
  };
}
