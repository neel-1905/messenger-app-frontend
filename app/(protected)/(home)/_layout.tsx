import { authClient } from "@/lib/auth-client";
import { Redirect } from "expo-router";
import React from "react";
import { ActivityIndicator, Text, View } from "react-native";

export default function HomeLayout() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator />
      </View>
    );
  }

  if (!session) {
    return <Redirect href="/login" />;
  }

  return (
    <View>
      <Text>HomeLayout</Text>
    </View>
  );
}
