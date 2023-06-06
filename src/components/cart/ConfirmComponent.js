import React, { useEffect, useMemo, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import useUserAddOrder from "../../hooks/memory/useUserAddOrder";
import { useNavigation } from "@react-navigation/native";

export default function ConfirmComponent({ orderId }) {
  const navigator = useNavigation();
  const userAddOrder = useUserAddOrder();
  useEffect(() => {
    userAddOrder(orderId);
  }, [orderId, userAddOrder]);

  const navigate = async (orderId) => {
    navigator.navigate("Profile", {
      screen: "OrderDetail",
      params: { order: orderId },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Order Confirmation</Text>
      <TouchableOpacity
        style={styles.orderIdText}
        onPress={() => navigate(orderId)}
      >
        <Text>Order ID: {orderId}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1E1E1E", // Dark background color
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF", // Light text color
    marginBottom: 20,
  },
  orderIdText: {
    fontSize: 16,
    marginTop: 10,
    color: "#FFFFFF", // Light text color
  },
});
