import React, { useEffect, useMemo, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ConfirmComponent({ orderId }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Order Confirmation</Text>
      <Text style={styles.orderIdText}>Order ID: {orderId}</Text>
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
