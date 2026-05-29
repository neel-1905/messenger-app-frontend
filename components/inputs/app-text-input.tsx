import { styled } from "nativewind";
import React from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";

const StyledTextInput = styled(TextInput);

interface AppTextInputProps extends TextInputProps {
  containerClassName?: string;
  inputClassName?: string;
  label?: string;
  children?: React.ReactNode;
  error?: string;
}

export default function AppTextInput(props: AppTextInputProps) {
  const {
    containerClassName,
    label,
    children,
    inputClassName,
    error,
    ...rest
  } = props;
  return (
    <View>
      {label && (
        <Text className="text-foreground mb-2 text-sm font-medium">
          {label}
        </Text>
      )}
      <View
        className={`border ${error ? "border-danger" : "border-border"} rounded-lg p-4 ${containerClassName} will-change-variable`}
      >
        <StyledTextInput
          {...rest}
          className={`text-sm text-foreground p-0 placeholder:text-muted-foreground ${inputClassName} will-change-variable`}
        />
        {children}
      </View>
      {error && <Text className="text-danger text-xs mt-1">{error}</Text>}
    </View>
  );
}
