import React, { useMemo, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import CartBox from "../../components/cart/CartBoxComponent";
import TotalBox from "../../components/cart/TotalBoxComponent";

export default function CartScreen() {
  const navigator = useNavigation();
  const cart = useSelector((state) => state.cart.cartItems);

  const handleCart = () => {
    cart = useSelector((state) => state.cart.cartItems);
  };
  const handleConfirm = () => {
    navigator.navigate("Confirmation");
  };

  const total = useMemo(() => {
    //if cart changes calculate total
    let total = 0;
    //acc is 0, product is first item in cart
    //reduce array to single value
    return cart.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
  }, [cart]);

  if (cart.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.text}>Your cart is empty</Text>
      </View>
    );
  }
  return (
    <>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {cart.map((product) => (
            <CartBox
              key={product.id}
              product={product}
              handleCart={handleCart}
            />
          ))}
        </ScrollView>
      </View>
      <View style={styles.totalContainer}>
        <TotalBox total={total} />
      </View>
      <View style={styles.confirmationContainer}>
        <TouchableOpacity
          style={styles.confirmationButton}
          onPress={() => handleConfirm()}
        >
          <Text style={styles.text}>Order</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "60%",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 20,
    backgroundColor: "#1E1E1E", // Dark background color
  },
  emptyContainer: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1E1E1E", // Dark background color
  },
  confirmationContainer: {
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#292929", // Dark background color
  },
  totalContainer: {
    height: "30%",
    alignItems: "center",
    paddingTop: 20,
    width: "100%",
    backgroundColor: "#292929", // Dark background color
  },
  scrollContainer: {
    width: "100%",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 40,
    backgroundColor: "#1E1E1E", // Dark background color
  },
  confirmationButton: {
    width: "95%",
    height: 50,
    backgroundColor: "#6B0F1A",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF", // Light text color
  },
});
