import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OrderScreen from "../screens/profile/OrderScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";

const ProfileStack = createStackNavigator();

export default function ProfileStackNavigator() {
  return (
    <ProfileStack.Navigator
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
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Profiles",
          backBehavior: "order",
        }}
      />
      <ProfileStack.Screen
        name="Order"
        component={OrderScreen}
        options={{
          backBehavior: "order",
        }}
      />
      {/* <ProfileStack.Screen
        name="OrderDetail"
        component={OrderDetailScreen}
        options={{
          backBehavior: "order",
        }}
      /> */}
    </ProfileStack.Navigator>
  );
}
