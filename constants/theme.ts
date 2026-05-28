export const themes = {
  midnight: {
    light: {
      "--color-background": "#F4F7FB",
      "--color-card": "#FFFFFF",
      "--color-border": "#E5E7EB",

      "--color-foreground": "#111827",
      "--color-muted-foreground": "#6B7280",

      "--color-primary": "#4F46E5",
      "--color-primary-foreground": "#FFFFFF",

      "--color-secondary": "#06B6D4",
      "--color-secondary-foreground": "#FFFFFF",

      "--color-accent": "#8B5CF6",

      "--color-success": "#22C55E",
      "--color-danger": "#EF4444",
      "--color-warning": "#F59E0B",

      "--color-input": "#FFFFFF",
      "--color-ring": "#818CF8",

      // Chat specific
      "--color-chat-bubble-me": "#4F46E5",
      "--color-chat-bubble-other": "#E5E7EB",

      "--color-chat-bubble-me-text": "#FFFFFF",
      "--color-chat-bubble-other-text": "#111827",

      "--color-sidebar": "#FFFFFF",
      "--color-sidebar-active": "#EEF2FF",

      "--color-online": "#22C55E",
      "--color-away": "#F59E0B",

      "--color-message-hover": "#F3F4F6",
    },

    dark: {
      "--color-background": "#0B1120",
      "--color-card": "#111827",
      "--color-border": "#1F2937",

      "--color-foreground": "#F9FAFB",
      "--color-muted-foreground": "#9CA3AF",

      "--color-primary": "#6366F1",
      "--color-primary-foreground": "#FFFFFF",

      "--color-secondary": "#06B6D4",
      "--color-secondary-foreground": "#FFFFFF",

      "--color-accent": "#A78BFA",

      "--color-success": "#22C55E",
      "--color-danger": "#F87171",
      "--color-warning": "#FBBF24",

      "--color-input": "#1F2937",
      "--color-ring": "#818CF8",

      // Chat specific
      "--color-chat-bubble-me": "#6366F1",
      "--color-chat-bubble-other": "#1E293B",

      "--color-chat-bubble-me-text": "#FFFFFF",
      "--color-chat-bubble-other-text": "#E5E7EB",

      "--color-sidebar": "#0F172A",
      "--color-sidebar-active": "#1E293B",

      "--color-online": "#22C55E",
      "--color-away": "#FBBF24",

      "--color-message-hover": "#1E293B",
    },
  },
};

export type ThemeName = keyof typeof themes;
