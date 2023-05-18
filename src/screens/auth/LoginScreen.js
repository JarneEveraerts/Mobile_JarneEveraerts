import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Login from "../../components/auth/LoginComponent";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Login />
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
