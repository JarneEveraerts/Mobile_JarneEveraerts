import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function ProductBox({ name, price, image, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>{price}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#292929", // Dark background color
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#6B0F1A", // Bordeaux accent color
    padding: 12,
    marginBottom: 5,
    minWidth: "80%",
    height: 200,
  },
  image: {
    width: 250,
    height: 120,
    resizeMode: "contain",
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#FFFFFF", // Light text color
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFFFFF", // Light text color
  },
});
