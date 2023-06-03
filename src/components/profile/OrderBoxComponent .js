import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function OrderBoxComponent({ order }) {
  const navigation = useNavigation();
  const handleOrderPress = () => {
    console.log("OrderBoxComponent handleOrderPress");
    navigation.navigate("OrderDetail", { order: order });
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.orderBox}
        onPress={() => handleOrderPress()}
      >
        <View style={styles.orderBoxHeader}>
          <Text style={styles.orderBoxHeaderText}>Order: {order}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "#1E1E1E", // Dark background color
    width: "100%",
    alignItems: "flex-start", // Align boxes at the top
  },
  orderBox: {
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#6B0F1A", // Bordeaux accent color
    padding: 12,
    marginBottom: 10,
    backgroundColor: "#292929", // Dark background color
    alignItems: "flex-start", // Align boxes at the top
  },
  orderBoxHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  orderBoxHeaderText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#6B0F1A", // Bordeaux accent color
  },
});
