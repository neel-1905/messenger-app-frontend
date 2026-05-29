import { themes } from "@/constants/theme";
import { VariableContextProvider } from "nativewind";
import { useColorScheme } from "react-native";

export function ThemeProvider({
  name,
  children,
}: {
  name: keyof typeof themes;
  children: React.ReactNode;
}) {
  const colorScheme = useColorScheme() ?? "light";

  return (
    <VariableContextProvider value={themes[name][colorScheme]}>
      {children}
    </VariableContextProvider>
  );
}
