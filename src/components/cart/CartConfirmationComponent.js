import React, { useEffect, useMemo, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import useGetUid from "../../hooks/memory/useGetUid";
import useGetById from "../../hooks/users/useGetById";
import useSaveOrder from "../../hooks/orders/useSaveOrder";
import { clearCart } from "../../store/cart/slice";
import Order from "../../../models/Order";

export default function CartConfirmationComponent({ handleConfirmation }) {
  const dispatch = useDispatch();
  const saveOrder = useSaveOrder();
  const uid = useGetUid();
  const user = useGetById(uid);
  const cart = useSelector((state) => state.cart.cartItems);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    setName(user?.name);
    setEmail(user?.email);
  }, [user]);
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleOrder = async () => {
    const order = new Order(
      uid,
      user.name,
      user.email,
      street,
      city,
      postalCode,
      phoneNumber,
      cart,
      new Date()
    );
    dispatch(clearCart());
    handleConfirmation(await saveOrder(order));
  };
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={name}
          onChangeText={(text) => setName(text)}
          placeholderTextColor="#999"
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholderTextColor="#999"
        />

        <TextInput
          style={styles.input}
          placeholder="Street"
          value={street}
          onChangeText={(text) => setStreet(text)}
          placeholderTextColor="#999"
        />
        <View style={styles.addressContainer}>
          <TextInput
            style={styles.cityInput}
            placeholder="City"
            value={city}
            onChangeText={(text) => setCity(text)}
            placeholderTextColor="#999"
          />
          <TextInput
            style={styles.postalInput}
            placeholder="Postal Code"
            value={postalCode}
            onChangeText={(text) => setPostalCode(text)}
            placeholderTextColor="#999"
          />
        </View>

        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
          placeholderTextColor="#999"
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handleOrder()}>
          <Text style={styles.buttonText}>Confirm Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E1E1E", // Dark background color
    paddingHorizontal: 16,
    width: "100%",
  },
  formContainer: {
    width: "100%",
    marginBottom: 16,
    backgroundColor: "#292929", // Dark background color
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#6B0F1A", // Bordeaux accent color
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "#1E1E1E", // Dark background color
    color: "#FFFFFF", // Light text color
  },

  addressContainer: {
    flexDirection: "row",
    marginBottom: 10,
    alignContent: "space-between",
  },

  cityInput: {
    flexGrow: 5,
    height: 50,
    borderWidth: 1,
    borderColor: "#6B0F1A", // Bordeaux accent color
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: "#1E1E1E", // Dark background color
    color: "#FFFFFF", // Light text color
  },
  postalInput: {
    flexGrow: 1,
    height: 50,
    borderWidth: 1,
    borderColor: "#6B0F1A", // Bordeaux accent color
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "#1E1E1E", // Dark background color
    color: "#FFFFFF", // Light text color
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: "#6B0F1A", // Bordeaux accent color
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: "#FFFFFF", // Light text color
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});