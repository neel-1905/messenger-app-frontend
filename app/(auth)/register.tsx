import AppLogo from "@/components/common/app-logo";
import { AppScreen } from "@/components/ui/app-screen";
import { AppText } from "@/components/ui/app-text";
import RegisterForm from "@/features/auth/ui/register-form";
import React from "react";
import { View } from "react-native";

export default function RegisterScreen() {
  return (
    <AppScreen className="gap-10">
      <View className="gap-5 items-center justify-center">
        <AppLogo />
        <AppText className="text-center text-2xl font-bold">
          Create Account
        </AppText>
      </View>

      <RegisterForm />
    </AppScreen>
  );
}
