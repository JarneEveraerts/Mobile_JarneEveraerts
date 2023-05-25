import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import CartConfirmation from "../../components/cart/CartConfirmationComponent";

export default function ConfirmationScreen() {
  const navigator = useNavigation();
  const handleConfirmation = (orderId) => {
    navigator.navigate("Confirm", { orderId: orderId });
  };

  return (
    <View style={styles.container}>
      <CartConfirmation handleConfirmation={handleConfirmation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
