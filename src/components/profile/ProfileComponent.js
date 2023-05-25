import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";
import { clearCart } from "../../store/cart/slice";

import useGetById from "../../hooks/users/useGetById";
import useGetUid from "../../hooks/memory/useGetUid";

export default function ProfileScreen({ handleLogOut }) {
  const dispatch = useDispatch();
  const uId = useGetUid();
  const user = useGetById(uId);
  console.log(user + "ProfileScreen user");
  const logOut = () => {
    dispatch(clearCart());
    handleLogOut();
  };
  console.log(handleLogOut + "ProfileScreen handleLogout");
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

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => logOut()}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
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
    backgroundColor: "#1E1E1E", // Dark background color
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
    color: "#FFFFFF", // Light text color
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
    color: "#FFFFFF", // Light text color
  },
  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#292929", // Dark background color
  },
  button: {
    backgroundColor: "#6B0F1A", // Bordeaux accent color
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF", // Light text color
    fontSize: 16,
    fontWeight: "bold",
  },
});
