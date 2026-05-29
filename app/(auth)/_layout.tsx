import { authClient } from "@/lib/auth-client";
import { Redirect, Slot } from "expo-router";
import React from "react";

export default function AuthLayout() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) return null;

  // Already logged in
  if (session) {
    return <Redirect href="/" />;
  }

  return <Slot screenOptions={{ headerShown: false }} />;
}
