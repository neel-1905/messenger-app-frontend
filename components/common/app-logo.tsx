import { useThemeColor } from "@/hooks/useThemeColors.hook";
import { MessagesSquare } from "lucide-react-native";
import React from "react";
import { View } from "react-native";

export default function AppLogo({
  iconSize = 40,
  containerSize = 60,
}: {
  iconSize?: number;
  containerSize?: number;
}) {
  const colors = useThemeColor();

  return (
    <View
      className="p-2 rounded-xl justify-center items-center bg-primary"
      style={{ width: containerSize, height: containerSize }}
    >
      <MessagesSquare size={iconSize} color={`#fff`} />
    </View>
  );
}
