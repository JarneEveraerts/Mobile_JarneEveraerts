import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, StyleSheet, Image } from "react-native";
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
import ProfileStackNavigator from "./src/navigation/ProfileStackNavigator";

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
  const handleLogOut = () => {
    // Perform logout logic
    setIsLoggedIn(false);

    console.log("Logout : app.js");
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
            <RootStack.Screen name="Main">
              {(props) => (
                <MainNavigator
                  {...props}
                  handleLogOut={handleLogOut} // Pass handleLogOut to MainNavigator
                />
              )}
            </RootStack.Screen>
          )}
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

function MainNavigator({ handleLogOut }) {
  return (
    <Tab.Navigator
      initialRouteName="Products"
      screenOptions={{
        tabBarStyle: styles.tabBar, // Set background color here
        tabBarActiveTintColor: "#6B0F1A", // Bordeaux accent color
        tabBarInactiveTintColor: "#999", // Lighter text color
        tabBarLabelStyle: styles.label,
      }}
    >
      <Tab.Screen
        name="Products"
        component={ProductStackNavigator}
        options={{
          headerShown: false,
          backBehavior: "order",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("./assets/store_active.png")
                  : require("./assets/store_inactive.png")
              }
              style={styles.tabIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartStackNavigator}
        options={{
          headerShown: false,
          backBehavior: "order",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("./assets/cart_active.png")
                  : require("./assets/cart_inactive.png")
              }
              style={styles.tabIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackNavigator}
        options={{
          headerShown: false,
          backBehavior: "order",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("./assets/profile_active.png")
                  : require("./assets/profile_inactive.png")
              }
              style={styles.tabIcon}
            />
          ),
        }}
        initialParams={{ handleLogOut }} // Pass the handleLogOut function as initialParams
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#1E1E1E", // Dark background color
    borderTopColor: "#6B0F1A", // Bordeaux accent color
    borderTopWidth: 1,
    paddingTop: 4,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
  },
  tabIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
});
