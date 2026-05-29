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
import { LoginFormData, loginSchema } from "../lib/login.validations";

export default function LoginForm() {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const { showToast } = useToast();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },

    mode: "onChange",
  });

  const handleRegister = async (data: LoginFormData) => {
    const { data: signUpData, error } = await authClient.signIn.email({
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

    router.push("/");
  };

  return (
    <View className="gap-5">
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
            secureTextEntry={!isPasswordVisible}
            error={errors.password?.message}
            icon={
              <TouchableOpacity
                onPress={() => setIsPasswordVisible(!isPasswordVisible)}
              >
                {!isPasswordVisible ? (
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
        Login
      </AppButton>
    </View>
  );
}
