import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

export default function OrderDetailComponent({ order }) {
  console.log("OrderDetailComponent", order);

  const calculatePriceWithoutVAT = (price, vatRate) => {
    const vatAmount = price * vatRate;
    const priceWithoutVAT = price - vatAmount;
    return priceWithoutVAT.toFixed(2);
  };

  const calculateVATAmount = (price, vatRate) => {
    const vatAmount = price * vatRate;
    return vatAmount.toFixed(2);
  };

  return (
    <View style={styles.container}>
      <View style={styles.sectionContainer}>
        <View style={styles.rowContainer}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.text}>{order?.name}</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.text}>{order?.email}</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.label}>Phone Number:</Text>
          <Text style={styles.text}>{order?.phoneNumber}</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.label}>Shipping Address:</Text>
          <Text style={[styles.text, styles.addressText]}>
            {order?.street}, {order?.postalCode}, {order?.city}
          </Text>
        </View>
      </View>

      <View style={styles.productContainer}>
        <Text style={styles.title}>Products:</Text>
        <ScrollView>
          {order?.products?.map((product) => (
            <View key={product?.id} style={styles.productItem}>
              <Image
                source={{ uri: product?.image }}
                style={styles.productImage}
              />
              <View style={styles.productInfo}>
                <Text style={styles.productName}>{product?.name}</Text>
                <Text style={styles.productDescription} numberOfLines={3}>
                  {product?.description}
                </Text>
                <Text style={styles.productPrice}>Price: {product?.price}</Text>
                <Text style={styles.productQuantity}>
                  Quantity: {product?.quantity}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.title}>Order Summary</Text>
        <View style={styles.rowContainer}>
          <Text style={styles.label}>Subtotal:</Text>
          <View style={styles.priceContainer}>
            <Image
              style={styles.coinIcon}
              source={require("../../../assets/coin.png")}
            />
            <Text style={styles.price}>
              {calculatePriceWithoutVAT(order?.total, 0.21)}
            </Text>
          </View>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.label}>VAT (21%):</Text>
          <View style={styles.priceContainer}>
            <Image
              style={styles.coinIcon}
              source={require("../../../assets/coin.png")}
            />
            <Text style={styles.price}>
              {calculateVATAmount(order?.total, 0.21)}
            </Text>
          </View>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.label}>Total:</Text>
          <View style={styles.priceContainer}>
            <Image
              style={styles.coinIcon}
              source={require("../../../assets/coin.png")}
            />
            <Text style={styles.price}>{order?.total?.toFixed(2)}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "95%",
    flex: 1,
    alignSelf: "center",
    backgroundColor: "#1E1E1E", // Dark background color
  },
  sectionContainer: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#6B0F1A",
    padding: 12,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#FFFFFF", // Light text color
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
    color: "#FFFFFF", // Light text color
  },
  text: {
    fontSize: 16,
    color: "#FFFFFF", // Light text color
  },
  addressText: {
    flex: 1,
    flexWrap: "wrap",
  },
  productContainer: {
    height: "40%",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#6B0F1A",
    padding: 12,
    marginBottom: 20,
  },
  productItem: {
    flexDirection: "row",
    marginVertical: 10,
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
    resizeMode: "contain",
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
  coinIcon: {
    width: 25,
    height: 25,
  },
});
