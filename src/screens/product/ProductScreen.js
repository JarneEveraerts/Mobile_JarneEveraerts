import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ProductBox from "../../components/product/ProductBoxComponent";
import useGetAllProducts from "../../hooks/products/useGetAllProducts";
import useSeedProducts from "../../hooks/products/useSeedProducts";

export default function ProductListScreen() {
  const products = useGetAllProducts();
  const navigation = useNavigation();

  const handleProductPress = (product) => {
    navigation.navigate("ProductDetail", { product });
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {products.map((product, index) => (
        <ProductBox
          key={index}
          name={product.name}
          price={product.price}
          image={product.image}
          onPress={() => handleProductPress(product)}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    paddingTop: 16,
    paddingBottom: 32,
    backgroundColor: "#1E1E1E", // Dark background color
  },
});
