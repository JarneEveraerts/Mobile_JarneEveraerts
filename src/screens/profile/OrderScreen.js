import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import OrderBoxComponent from "../../components/profile/OrderBoxComponent ";

const OrderScreen = ({ route }) => {
  const { orders } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {orders?.map((order, index) => (
        <OrderBoxComponent key={index} order={order} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    paddingTop: 16,
    paddingBottom: 32,
    backgroundColor: "#1E1E1E", // Dark background color
  },
});

export default OrderScreen;
