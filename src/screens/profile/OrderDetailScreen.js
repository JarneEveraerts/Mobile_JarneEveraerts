import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import useGetOrder from "../../hooks/orders/useGetOrder";
import OrderDetailComponent from "../../components/profile/OrderDetailComponent";

const OrderDetailScreen = ({ route }) => {
  const { order } = route.params;
  console.log("help", route.params);
  console.log("help", order);
  const orderDetail = useGetOrder(order);
  console.log("help", orderDetail);
  return (
    <View style={styles.container}>
      <OrderDetailComponent order={orderDetail} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 16,
    paddingBottom: 32,
    backgroundColor: "#1E1E1E", // Dark background color
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF", // Light text color
    marginBottom: 20,
  },
});

export default OrderDetailScreen;
