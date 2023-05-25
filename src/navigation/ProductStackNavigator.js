import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProductScreen from "../screens/product/ProductScreen";
import ProductDetailScreen from "../screens/product/ProductDetailScreen";

const ProductStack = createStackNavigator();

export default function ProductStackNavigator() {
  return (
    <ProductStack.Navigator
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
      <ProductStack.Screen
        name="Product"
        component={ProductScreen}
        options={{
          title: "Products",
          backBehavior: "order",
        }}
      />
      <ProductStack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={{
          backBehavior: "order",
        }}
      />
    </ProductStack.Navigator>
  );
}
