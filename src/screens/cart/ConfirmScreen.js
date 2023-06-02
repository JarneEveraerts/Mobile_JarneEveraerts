import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BackHandler } from "react-native";
import ConfirmComponent from "../../components/cart/ConfirmComponent";

export default function ConfirmScreen({ route }) {
  const navigator = useNavigation();
  useEffect(() => {
    const backAction = () => {
      navigator.navigate("Cart");
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove(); // Clean up the event listener
  }, [navigator]);
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
