import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CartScreen from "../screens/cart/CartScreen";
import ConfirmScreen from "../screens/cart/ConfirmScreen";
import ConfirmationScreen from "../screens/cart/ConfirmationScreen";

const CartStack = createStackNavigator();

export default function CartStackNavigator() {
  return (
    <CartStack.Navigator>
      <CartStack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          backBehavior: "order",
        }}
      />
      <CartStack.Screen
        name="Confirm"
        component={ConfirmScreen}
        options={{
          backBehavior: "order",
        }}
      />
      <CartStack.Screen
        name="Confirmation"
        component={ConfirmationScreen}
        options={{
          backBehavior: "order",
        }}
      />
    </CartStack.Navigator>
  );
}
