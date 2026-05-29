import { styled } from "nativewind";
import React from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";

const StyledTextInput = styled(TextInput);

interface AppTextInputProps extends TextInputProps {
  containerClassName?: string;
  inputClassName?: string;
  label?: string;
  icon?: React.ReactNode;
  error?: string;
}

export default function AppTextInput(props: AppTextInputProps) {
  const { containerClassName, label, inputClassName, error, icon, ...rest } =
    props;
  return (
    <View>
      {label && (
        <Text className="text-foreground mb-2 text-sm font-medium">
          {label}
        </Text>
      )}
      <View
        className={`flex-row gap-2 justify-between border ${error ? "border-danger" : "border-border"} rounded-lg p-4 ${containerClassName} will-change-variable`}
      >
        <StyledTextInput
          {...rest}
          className={`flex-1 text-sm text-foreground p-0 placeholder:text-muted-foreground ${inputClassName} will-change-variable`}
        />
        {icon}
      </View>
      {error && <Text className="text-danger text-xs mt-1">{error}</Text>}
    </View>
  );
}
