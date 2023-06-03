import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../store/cart/slice";
import { useNavigation } from "@react-navigation/native";

export default function ProfileScreen({ handleLogOut }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const user = useSelector((state) => state.user.data);

  const logOut = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Logout",
          style: "destructive",
          onPress: () => {
            dispatch(clearCart());
            handleLogOut();
          },
        },
      ],
      { cancelable: false }
    );
  };

  const goToOrders = () => {
    navigation.navigate("Order", { orders: user?.orders });
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>{user?.name}</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{user?.email}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={goToOrders}>
          <Text style={styles.buttonText}>Orders</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={logOut}>
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
    backgroundColor: "#1E1E1E", // Dark background color
  },
  profileContainer: {
    alignItems: "center",
    marginBottom: 32,
  },
  nameContainer: {
    marginTop: 16,
  },
  nameText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF", // Light text color
  },
  infoContainer: {
    marginTop: 24,
    marginBottom: 32,
  },
  label: {
    fontSize: 16,
    color: "#888888", // Adjust the text color as needed
  },
  value: {
    fontSize: 16,
    color: "#FFFFFF", // Light text color
  },
  buttonContainer: {
    alignItems: "center",
  },
  button: {
    backgroundColor: "#6B0F1A", // Bordeaux accent color
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    alignItems: "center",
    marginBottom: 16,
    width: 200, // Adjust the width of the buttons as needed
  },
  buttonText: {
    color: "#FFFFFF", // Light text color
    fontSize: 16,
    fontWeight: "bold",
  },
});
