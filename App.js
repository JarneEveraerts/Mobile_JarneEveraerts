import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import store from "./src/store/index";
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
} from "@react-navigation/native";

import ProfileScreen from "./src/screens/profile/ProfileScreen";
import ProductStackNavigator from "./src/navigation/ProductStackNavigator";
import CartStackNavigator from "./src/navigation/CartStackNavigator";
import AuthStackNavigator from "./src/navigation/AuthStackNavigator";

const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    console.log(store.getState().uid.data);
    if (store.getState().uid.data !== "") {
      setIsLoggedIn(true);
    }
  }, []);
  const handleLogin = () => {
    // Perform login logic
    setIsLoggedIn(true);
    console.log("Login : app.js");
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack.Navigator headerMode="none">
          {!isLoggedIn ? (
            <RootStack.Screen name="Auth" options={{ handleLogin }}>
              {(props) => (
                <AuthStackNavigator {...props} handleLogin={handleLogin} />
              )}
            </RootStack.Screen>
          ) : (
            <RootStack.Screen name="Main" component={MainNavigator} />
          )}
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

function MainNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Products"
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
  );
}
