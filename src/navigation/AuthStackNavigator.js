import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/auth/LoginScreen";
import SignUpScreen from "../screens/auth/SignUpScreen";

const AuthStack = createStackNavigator();

export default function AuthStackNavigator({ handleLogin }) {
  console.log("AuthStackNavigator handleLogin", handleLogin);
  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
          gestureEnabled: false,
          animationEnabled: false,
          swipeEnabled: false,
        }}
        initialParams={{ handleLogin }} // Pass handleLogin as a parameter
      />
      <AuthStack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          headerShown: false,
          backBehavior: "order",
        }}
      />
    </AuthStack.Navigator>
  );
}
