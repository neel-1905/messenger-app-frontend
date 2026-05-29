import AppTextInput from "@/components/inputs/app-text-input";
import { AppButton } from "@/components/ui/app-button";
import { authClient } from "@/lib/auth-client";
import { useToast } from "@/providers/toast-provider";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { EyeIcon, EyeOffIcon } from "lucide-react-native";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { TouchableOpacity, View } from "react-native";
import { RegisterFormData, registerSchema } from "../lib/register.validation";

export default function RegisterForm() {
  const [passwordsVisible, setPasswordsVisible] = React.useState({
    password: false,
    confirmPassword: false,
  });
  const { showToast } = useToast();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
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

  const handleTogglePassword = (key: "password" | "confirmPassword") => {
    setPasswordsVisible((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleRegister = async (data: RegisterFormData) => {
    const { data: signUpData, error } = await authClient.signUp.email({
      name: data.name,
      email: data.email,
      password: data.password,
    });

    if (error) {
      showToast({
        type: "error",
        title: "Error",
        message: error.message,
      });
      return;
    }

    showToast({
      type: "success",
      title: "Success",
      message: "User registered successfully",
    });

    router.push("/login");
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
        name="password"
        render={({ field }) => (
          <AppTextInput
            label="Password"
            value={field.value}
            onChangeText={field.onChange}
            placeholder="****"
            keyboardType="default"
            secureTextEntry={!passwordsVisible.password}
            error={errors.password?.message}
            icon={
              <TouchableOpacity
                onPress={() => handleTogglePassword("password")}
              >
                {!passwordsVisible.password ? (
                  <EyeIcon size={20} color="gray" />
                ) : (
                  <EyeOffIcon size={20} color="gray" />
                )}
              </TouchableOpacity>
            }
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
            secureTextEntry={!passwordsVisible.confirmPassword}
            error={errors.confirmPassword?.message}
            icon={
              <TouchableOpacity
                onPress={() => handleTogglePassword("confirmPassword")}
              >
                {!passwordsVisible.confirmPassword ? (
                  <EyeIcon size={20} color="gray" />
                ) : (
                  <EyeOffIcon size={20} color="gray" />
                )}
              </TouchableOpacity>
            }
          />
        )}
      />

      <AppButton
        loading={isSubmitting}
        disabled={isSubmitting}
        onPress={handleSubmit((data) => handleRegister(data))}
      >
        Register
      </AppButton>
    </View>
  );
}
