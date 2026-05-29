// components/ui/toast-provider.tsx

import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import { Text, View } from "react-native";

import Animated, { FadeInUp, FadeOutUp } from "react-native-reanimated";

import {
  CircleAlert,
  CircleCheck,
  CircleHelp,
  TriangleAlert,
} from "lucide-react-native";

import { useThemeColor } from "@/hooks/useThemeColors.hook";

type ToastType = "success" | "error" | "warning" | "info";

type Toast = {
  id: string;
  title: string;
  message?: string;
  type: ToastType;
};

type ToastContextType = {
  showToast: (toast: Omit<Toast, "id">) => void;
};

const ToastContext = createContext<ToastContextType | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const colors = useThemeColor();

  const toastStyles = {
    success: {
      borderColor: colors.border,
      iconColor: colors.success,
      titleColor: colors.success,
      messageColor: colors.success,
      backgroundColor: colors.card,
    },

    error: {
      borderColor: colors.border,
      iconColor: colors.danger,
      titleColor: colors.danger,
      messageColor: colors.danger,
      backgroundColor: colors.card,
    },

    warning: {
      borderColor: colors.border,
      iconColor: colors.warning,
      titleColor: colors.warning,
      messageColor: colors.warning,
      backgroundColor: colors.card,
    },

    info: {
      borderColor: colors.border,
      iconColor: colors.primary,
      titleColor: colors.primary,
      messageColor: colors.primary,
      backgroundColor: colors.card,
    },
  };

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback(
    ({ title, message, type }: Omit<Toast, "id">) => {
      const id = Math.random().toString();

      setToasts((prev) => [
        ...prev,
        {
          id,
          title,
          message,
          type,
        },
      ]);

      setTimeout(() => {
        removeToast(id);
      }, 3000);
    },
    [removeToast],
  );

  const value = useMemo(
    () => ({
      showToast,
    }),
    [showToast],
  );

  const renderIcon = (type: ToastType, color: string) => {
    switch (type) {
      case "success":
        return <CircleCheck size={22} color={color} />;

      case "error":
        return <CircleAlert size={22} color={color} />;

      case "warning":
        return <TriangleAlert size={22} color={color} />;

      case "info":
        return <CircleHelp size={22} color={color} />;

      default:
        return null;
    }
  };

  return (
    <ToastContext.Provider value={value}>
      {children}

      <View className="pointer-events-none absolute left-0 right-0 top-16 z-50 items-center gap-3 px-4">
        {toasts.map((toast) => {
          const style = toastStyles[toast.type];

          return (
            <Animated.View
              key={toast.id}
              entering={FadeInUp.springify()}
              exiting={FadeOutUp}
              className="w-full rounded-3xl border px-5 py-4 shadow-lg"
              style={{
                borderColor: style.borderColor,
                backgroundColor: style.backgroundColor,
              }}
            >
              <View className="flex-row items-start gap-3">
                <View className="mt-0.5">
                  {renderIcon(toast.type, style.iconColor)}
                </View>

                <View className="flex-1">
                  <Text
                    className="font-semibold text-base"
                    style={{
                      color: style.titleColor,
                    }}
                  >
                    {toast.title}
                  </Text>

                  {toast.message && (
                    <Text
                      className="mt-1 text-sm"
                      style={{
                        color: style.messageColor,
                      }}
                    >
                      {toast.message}
                    </Text>
                  )}
                </View>
              </View>
            </Animated.View>
          );
        })}
      </View>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used inside ToastProvider");
  }

  return context;
}
