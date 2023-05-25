import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
} from "@react-navigation/native";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import useSaveUid from "../../hooks/memory/useSaveUid";
import useGetUid from "../../hooks/memory/useGetUid";

export default function LoginComponent({ onLogin }) {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const saveUid = useSaveUid();
  useEffect(() => {
    if (loggedIn) {
      onLogin();
    }
  }, [loggedIn, onLogin]);
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("User logged in", user.uid);

        saveUid(user.uid);
        setLoggedIn(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error logging in", errorCode, errorMessage);
      });
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholderTextColor="#999" // Placeholder text color
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholderTextColor="#999" // Placeholder text color
        />
        <TouchableOpacity
          style={styles.link}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.linkText}>Don't have an account yet?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
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
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#6B0F1A", // Bordeaux accent color
    borderRadius: 4,
    paddingHorizontal: 12,
    marginBottom: 12,
    backgroundColor: "#292929", // Dark background color
    color: "#FFFFFF", // Light text color
  },
  link: {
    alignSelf: "flex-end",
    marginTop: -10,
  },
  linkText: {
    color: "#6B0F1A", // Bordeaux accent color
    fontSize: 14,
    fontWeight: "bold",
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#6B0F1A", // Bordeaux accent color
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    alignItems: "center",
    marginBottom: 12,
  },
  buttonText: {
    color: "#FFFFFF", // Light text color
    fontSize: 16,
    fontWeight: "bold",
  },
});
