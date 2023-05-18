import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SignUp from "../../components/auth/SignUpComponent";

export default function SignUpScreen() {
  return (
    <View style={styles.container}>
      <SignUp />
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
