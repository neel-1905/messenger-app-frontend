import AppLogo from "@/components/common/app-logo";
import { AppScreen } from "@/components/ui/app-screen";
import { AppText } from "@/components/ui/app-text";
import LoginForm from "@/features/auth/ui/login-form";
import { Link } from "expo-router";
import React from "react";
import { View } from "react-native";

export default function LoginScreen() {
  return (
    <AppScreen className="gap-10">
      <View className="gap-5 items-center justify-center">
        <AppLogo />
        <AppText className="text-center text-2xl font-bold">Login</AppText>
      </View>

      <LoginForm />

      <Link href="/register" className="-mt-4 text-center will-change-variable">
        <AppText className="text-muted-foreground text-sm">
          Don't have an account?{" "}
          <AppText className="text-primary font-semibold">Register</AppText>
        </AppText>
      </Link>
    </AppScreen>
  );
}
