import { themes } from "@/constants/theme";
import { useColorScheme } from "react-native";
import { VariableContextProvider } from "nativewind";

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