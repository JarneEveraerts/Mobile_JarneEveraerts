import React, { useState } from "react";
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
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { useNavigation } from "@react-navigation/native";

import User from "../../../models/User";

export default function SignUpComponent() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = new User(userCredential.user.uid, name, email);
        user.Save();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error signing up", errorCode, errorMessage);
      });
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
          placeholderTextColor="#999" // Placeholder text color
        />
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
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          placeholderTextColor="#999" // Placeholder text color
        />
        <TouchableOpacity
          style={styles.link}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.linkText}>Already have an account?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
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
