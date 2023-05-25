import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Profile from "../../components/profile/ProfileComponent";

export default function ProfileScreen({ route }) {
  const handleLogOut = route.params?.handleLogOut;
  console.log("ProfileScreen handleLogOut", handleLogOut);
  return (
    <View style={styles.container}>
      <Profile handleLogOut={handleLogOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
