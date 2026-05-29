import { authClient } from "@/lib/auth-client";
import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function RegisterScreen() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegister = async () => {
    const { data, error } = await authClient.signUp.email({
      email: form.email,
      password: form.password,
      name: form.name,
      // callbackURL: "/",
    });

    if (error) {
      console.log(error);
    }

    if (data) {
      console.log(data);
    }
  };

  return (
    <View>
      <Text>RegisterScreen</Text>

      <TextInput
        placeholder="Name"
        value={form.name}
        onChangeText={(text) => setForm({ ...form, name: text })}
      />
      <TextInput
        placeholder="Email"
        value={form.email}
        onChangeText={(text) => setForm({ ...form, email: text })}
      />
      <TextInput
        placeholder="Password"
        value={form.password}
        onChangeText={(text) => setForm({ ...form, password: text })}
      />

      <Button title="Register" onPress={handleRegister} />
    </View>
  );
}
