import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import useGetById from "../../hooks/users/GetById";
import useGetUid from "../../hooks/memory/useGetUid";

export default function ProfileScreen() {
  const uId = useGetUid();
  const user = useGetById(uId);
  console.log(user);
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        {/* <Image
          source={{ uri: user.profilePicture }}
          style={styles.profilePicture}
        /> */}
        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>{user?.name}</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{user?.email}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF", // Adjust the background color as needed
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  nameContainer: {
    marginLeft: 8,
    flex: 1,
  },
  nameText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333333", // Adjust the text color as needed
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    marginRight: 8,
    color: "#888888", // Adjust the text color as needed
  },
  value: {
    fontSize: 16,
    color: "#333333", // Adjust the text color as needed
  },
  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});
