import { View, Text, Alert } from "react-native";
import React, { useState } from "react";
import { Link, router } from "expo-router";
import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";

const SignIn = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submit = async () => {
    if (!form.email || !form.password) {
      Alert.alert("Error", "Please enter valid email and password");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      Alert.alert("Success", "You have signed in successfully!");
      router.replace("/(tabs)");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View className="gap-10 bg-white rounded-lg p-5 mt-5">
      <CustomInput
        placeholder="Enter your email"
        value={form.email}
        label="Email"
        onChangeText={(text) => setForm({ ...form, email: text })}
        keyboardType="email-address"
      />
      <CustomInput
        placeholder="Enter your password"
        value={form.password}
        label="Password"
        onChangeText={(text) => setForm({ ...form, password: text })}
        keyboardType="email-address"
        secureTextEntry={true}
      />
      <CustomButton title="Sign In" onPress={submit} isLoading={isSubmitting} />

      <View className="flex-row justify-center mt-5 gap-2 flex">
        <Text className="base-regular text-gray-100">
          {"Don't have an account? "}
        </Text>
        <Link href={"/sign-up"} className="base-bold text-primary">
          Sign Up
        </Link>
      </View>
    </View>
  );
};

export default SignIn;
