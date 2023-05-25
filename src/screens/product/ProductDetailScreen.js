import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import ProductDetailComponent from "../../components/product/ProductDetailComponent";

export default function ProductDetailScreen({ route }) {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <ProductDetailComponent product={product} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E", // Dark background color
  },
});
