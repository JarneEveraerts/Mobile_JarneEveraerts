import React, { useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, BackHandler } from "react-native";
import useGetOrder from "../../hooks/orders/useGetOrder";
import OrderDetailComponent from "../../components/profile/OrderDetailComponent";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const OrderDetailScreen = ({ route }) => {
  const user = useSelector((state) => state.user.data);
  const { order } = route.params;
  console.log("help", route.params);
  console.log("help", order);
  const orderDetail = useGetOrder(order);
  console.log("help", orderDetail);

  const navigator = useNavigation();

  useEffect(() => {
    const backAction = () => {
      navigator.navigate("Order", { orders: user?.orders });
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove(); // Clean up the event listener
  }, [navigator]);

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
