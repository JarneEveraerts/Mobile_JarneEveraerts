import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import store from "./src/store/index";

import ProfileScreen from "./src/screens/profile/ProfileScreen";
import ProductStackNavigator from "./src/navigation/ProductStackNavigator";
import CartStackNavigator from "./src/navigation/CartStackNavigator";
import AuthStackNavigator from "./src/navigation/AuthStackNavigator";

const Tab = createBottomTabNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    console.log(store.getState().uid.data);
    if (store.getState().uid.data !== "") {
      setIsLoggedIn(true);
    }
  }, []);

  if (!isLoggedIn) {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <AuthStackNavigator />
        </NavigationContainer>
      </Provider>
    );
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Products" //needs to navigate to this screen after login
            component={ProductStackNavigator}
            options={{
              headerShown: false,
              backBehavior: "order",
            }}
          />
          <Tab.Screen
            name="Cart"
            component={CartStackNavigator}
            options={{
              headerShown: false,
              backBehavior: "order",
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              backBehavior: "order",
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
