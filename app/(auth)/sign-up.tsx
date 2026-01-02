import { View, Text, Alert } from "react-native";
import React, { useState } from "react";
import { Link, router } from "expo-router";
import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const submit = async () => {
    if (!form.name || !form.email || !form.password) {
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
        placeholder="Enter your full name"
        value={form.name}
        label="Full Name"
        onChangeText={(text) => setForm({ ...form, name: text })}
        keyboardType="email-address"
      />
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
      <CustomButton title="Sign Up" onPress={submit} isLoading={isSubmitting} />

      <View className="flex-row justify-center gap-2 flex">
        <Text className="base-regular text-gray-100">
          {"Already have an account?"}
        </Text>
        <Link href={"/sign-in"} className="base-bold text-primary">
          Sign In
        </Link>
      </View>
    </View>
  );
};

export default SignUp;
