import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CartScreen from "../screens/cart/CartScreen";
import ConfirmScreen from "../screens/cart/ConfirmScreen";
import ConfirmationScreen from "../screens/cart/ConfirmationScreen";

const CartStack = createStackNavigator();

export default function CartStackNavigator() {
  return (
    <CartStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#1E1E1E",
          borderBottomColor: "#6B0F1A",
          borderBottomWidth: 1,
          shadowColor: "#6B0F1A",
        },
        headerTintColor: "#6B0F1A", // Light text color
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitleAlign: "center",
      }}
    >
      <CartStack.Screen name="Cart" component={CartScreen} />
      <CartStack.Screen
        name="Confirm"
        component={ConfirmScreen}
        options={{
          headerShown: false,
        }}
      />
      <CartStack.Screen
        name="Confirmation"
        component={ConfirmationScreen}
        screenOptions={{
          headerStyle: {
            backgroundColor: "#1E1E1E",
            borderBottomColor: "#6B0F1A",
            borderBottomWidth: 1,
            shadowColor: "#6B0F1A",
          },
          headerTintColor: "#6B0F1A", // Light text color
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
        }}
      />
    </CartStack.Navigator>
  );
}
