import React, { useEffect, useMemo } from "react";
import { TouchableOpacity, Image, View, Text, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/cart/slice";

export default function CartBox({ product, handleCart }) {
  console.log(handleCart + "CartBox handleCart");
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    console.log("handleRemove", id);
    dispatch(removeFromCart({ id }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.count}>{product.quantity} X</Text>
      <Text style={styles.name}>{product.name}</Text>
      <View style={styles.priceContainer}>
        <Image
          style={styles.coinIcon}
          source={require("../../../assets/coin.png")}
        />
        <Text style={styles.price}>
          {(product.price * product.quantity).toFixed(2)}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => handleRemove(product.id)}
        style={styles.removeButton}
      >
        <Image
          style={styles.removeIcon}
          source={require("../../../assets/remove.png")}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "95%",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#6B0F1A",
    padding: 12,
    marginBottom: 5,
    backgroundColor: "#1E1E1E", // Dark background color
  },
  name: {
    flex: 1,
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFFFFF", // Light text color
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFFFFF", // Light text color
    marginLeft: 8,
  },
  count: {
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 8,
    color: "#FFFFFF", // Light text color
  },
  removeButton: {
    padding: 8,
  },
  removeIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  coinIcon: {
    width: 25,
    height: 25,
  },
});
