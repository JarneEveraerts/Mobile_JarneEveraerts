import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cart/slice";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/Ionicons";

export default function ProductDetailComponent({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ product }));
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: product.image }} style={styles.image} />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>{product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
          <Text style={styles.buttonText}>Add to Basket</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E", // Dark background color
  },
  scrollContainer: {
    flex: 1,
  },
  imageContainer: {
    width: "95%",
    aspectRatio: 1,
    alignSelf: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#6B0F1A", // Light text color
  },
  image: {
    alignSelf: "center",
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  detailsContainer: {
    padding: 16,
    paddingBottom: 70,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#FFFFFF", // Light text color
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#FFFFFF", // Light text color
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "justify",
    color: "#FFFFFF", // Light text color
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    width: "90%",
  },
  button: {
    backgroundColor: "#6B0F1A", // Bordeaux accent color
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginBottom: 12,
  },
  buttonText: {
    color: "#FFFFFF", // Light text color
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: "white",
  },
});
