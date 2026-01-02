import { Redirect } from "expo-router";

export default function Index() {
  const isLoggedIn = false; // replace later
  return isLoggedIn ? (
    <Redirect href="/(tabs)" />
  ) : (
    <Redirect href="/(auth)/sign-in" />
  );
}
