import { styled } from "nativewind";
import { ViewProps } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const StyledSafeAreaView = styled(SafeAreaView);

export function AppScreen({
  children,
  className,
}: ViewProps & { className?: string }) {
  return (
    <StyledSafeAreaView
      className={`will-change-variable flex-1 bg-background p-8 ${className ?? ""}`}
    >
      {children}
    </StyledSafeAreaView>
  );
}
