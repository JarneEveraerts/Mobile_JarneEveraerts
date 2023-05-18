import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Login from "../../components/auth/LoginComponent";
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
} from "@react-navigation/native";

export default function LoginScreen({ route }) {
  const handleLogin = route.params?.handleLogin;
  console.log("LoginScreen handleLogin", handleLogin);

  return (
    <View style={styles.container}>
      <Login onLogin={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
