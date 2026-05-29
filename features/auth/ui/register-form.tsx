import AppTextInput from "@/components/inputs/app-text-input";
import { AppButton } from "@/components/ui/app-button";
import { authClient } from "@/lib/auth-client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { View } from "react-native";
import { RegisterFormData, registerSchema } from "../lib/register.validation";

export default function RegisterForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    mode: "onChange",
  });

  const handleRegister = async (data: RegisterFormData) => {
    const { data: signUpData, error } = await authClient.signUp.email({
      name: data.name,
      email: data.email,
      password: data.password,
    });

    if (error) {
      console.log(error);
      return;
    }

    console.log(signUpData);
  };

  return (
    <View className="gap-5">
      <Controller
        control={control}
        name="name"
        render={({ field }) => (
          <AppTextInput
            label="Name"
            value={field.value}
            onChangeText={field.onChange}
            placeholder="eg. John Doe"
            error={errors.name?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="email"
        render={({ field }) => (
          <AppTextInput
            label="Email"
            value={field.value}
            onChangeText={field.onChange}
            placeholder="eg. john.doe@example.com"
            keyboardType="email-address"
            error={errors.email?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="confirmPassword"
        render={({ field }) => (
          <AppTextInput
            label="Confirm Password"
            value={field.value}
            onChangeText={field.onChange}
            placeholder="****"
            keyboardType="default"
            secureTextEntry
            error={errors.confirmPassword?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field }) => (
          <AppTextInput
            label="Password"
            value={field.value}
            onChangeText={field.onChange}
            placeholder="****"
            keyboardType="default"
            secureTextEntry
            error={errors.password?.message}
          />
        )}
      />

      <AppButton onPress={handleSubmit((data) => handleRegister(data))}>
        Register
      </AppButton>
    </View>
  );
}
