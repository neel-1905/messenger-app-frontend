import { styled } from "nativewind";
import { Text, TextProps } from "react-native";

const StyledText = styled(Text);

export function AppText({ children, className }: TextProps) {
  return (
    <StyledText
      className={`will-change-variable font-medium text-foreground ${className ?? ""}`}
    >
      {children}
    </StyledText>
  );
}
