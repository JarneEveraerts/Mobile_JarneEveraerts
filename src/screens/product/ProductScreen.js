import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ProductBox from "../../components/product/ProductBoxComponent";

export default function ProductListScreen() {
  const navigation = useNavigation();
  const products = [
    {
      name: "Product 1",
      price: "$9.99",
      image: "test",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aspernatur placeat corporis, eligendi qui fuga laborum, quis sapiente incidunt soluta, ratione et aliquid obcaecati nobis dolor quisquam autem asperiores iure.",
    },
    {
      name: "Product 2",
      price: "$19.99",
      image: "test",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aspernatur placeat corporis, eligendi qui fuga laborum, quis sapiente incidunt soluta, ratione et aliquid obcaecati nobis dolor quisquam autem asperiores iure.",
    },
    {
      name: "Product 3",
      price: "$29.99",
      image: "test",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aspernatur placeat corporis, eligendi qui fuga laborum, quis sapiente incidunt soluta, ratione et aliquid obcaecati nobis dolor quisquam autem asperiores iure.",
    },
    {
      name: "Product 4",
      price: "$39.99",
      image: "test",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aspernatur placeat corporis, eligendi qui fuga laborum, quis sapiente incidunt soluta, ratione et aliquid obcaecati nobis dolor quisquam autem asperiores iure.",
    },
    {
      name: "Product 5",
      price: "$49.99",
      image: "test",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aspernatur placeat corporis, eligendi qui fuga laborum, quis sapiente incidunt soluta, ratione et aliquid obcaecati nobis dolor quisquam autem asperiores iure.",
    },
    {
      name: "Product 6",
      price: "$59.99",
      image: "test",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aspernatur placeat corporis, eligendi qui fuga laborum, quis sapiente incidunt soluta, ratione et aliquid obcaecati nobis dolor quisquam autem asperiores iure.",
    },
    {
      name: "Product 7",
      price: "$69.99",
      image: "test",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aspernatur placeat corporis, eligendi qui fuga laborum, quis sapiente incidunt soluta, ratione et aliquid obcaecati nobis dolor quisquam autem asperiores iure.",
    },
  ];

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
  },
});
