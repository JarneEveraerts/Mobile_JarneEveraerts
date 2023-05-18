import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProductScreen from "../screens/product/ProductScreen";
import ProductDetailScreen from "../screens/product/ProductDetailScreen";

const ProductStack = createStackNavigator();

export default function ProductStackNavigator() {
  return (
    <ProductStack.Navigator>
      <ProductStack.Screen
        name="Product"
        component={ProductScreen}
        options={{
          backBehavior: "order",
        }}
      />
      <ProductStack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={{
          headerShown: false,
          backBehavior: "order",
        }}
      />
    </ProductStack.Navigator>
  );
}
