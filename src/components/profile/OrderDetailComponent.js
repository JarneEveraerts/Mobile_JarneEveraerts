import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

export default function OrderDetailComponent({ order }) {
  console.log("OrderDetailComponent", order);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <Text style={styles.text}>{order?.name}</Text>
      <Text style={styles.label}>Email:</Text>
      <Text style={styles.text}>{order?.email}</Text>
      <Text style={styles.label}>Phone Number:</Text>
      <Text style={styles.text}>{order?.phoneNumber}</Text>
      <Text style={styles.label}>Shipping Address:</Text>
      <Text style={styles.text}>
        {order?.street}, {order?.postalCode}, {order?.city}
      </Text>
      <Text style={styles.label}>Products:</Text>
      <ScrollView>
        {order?.products?.map((product) => (
          <View key={product?.id} style={styles.productContainer}>
            <Image
              source={{ uri: product?.image }}
              style={styles.productImage}
            />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{product?.name}</Text>
              <Text style={styles.productDescription} numberOfLines={3}>
                {product?.description}
              </Text>
              <Text style={styles.productPrice}>
                Price: {product?.price?.toFixed(2)}
              </Text>
              <Text style={styles.productQuantity}>
                Quantity: {product?.quantity}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <Text style={styles.label}>Total:</Text>
      <Text style={styles.text}>${order?.total?.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: "#1E1E1E", // Dark background color
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#FFFFFF", // Light text color
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    color: "#FFFFFF", // Light text color
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    color: "#FFFFFF", // Light text color
  },
  productContainer: {
    flexDirection: "row",
    marginBottom: 10,
    width: "95%",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#6B0F1A",
    padding: 12,
    backgroundColor: "#1E1E1E", // Dark background color
  },
  productImage: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 5,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#FFFFFF", // Light text color
  },
  productDescription: {
    fontSize: 14,
    marginBottom: 5,
    color: "#FFFFFF", // Light text color
  },
  productPrice: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#FFFFFF", // Light text color
  },
  productQuantity: {
    fontSize: 14,
    color: "#FFFFFF", // Light text color
  },
});
