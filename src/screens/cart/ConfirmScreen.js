import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { BackHandler } from "react-native";
import ConfirmComponent from "../../components/cart/ConfirmComponent";

export default function ConfirmScreen({ route }) {
  useEffect(() => {
    const backAction = () => {
      // Prevent navigation when back button is pressed
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove(); // Clean up the event listener
  }, []);
  const { orderId } = route.params;

  return (
    <View style={styles.container}>
      <ConfirmComponent orderId={orderId} />
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
