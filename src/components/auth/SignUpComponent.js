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
  const [validationErrors, setValidationErrors] = useState({});

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    const user = new User(null, name, email);

    try {
      await user.validate();
      await createUserWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          user.id = userCredential.user.uid;
          user.Save();
        }
      );
    } catch (error) {
      if (error.name === "ValidationError") {
        const errors = {};
        error.inner.forEach((err) => {
          errors[err.path] = err.message;
        });
        setValidationErrors(errors);
        if (errors.email) setEmail("");
        if (errors.password) setPassword("");
        if (errors.confirmPassword) setConfirmPassword("");
        if (errors.name) setName("");
      } else if (error.code === "auth/email-already-in-use") {
        validationErrors.email = "Email already in use";
        setEmail("");
      } else {
        console.log("Error validating user:", error.message);
        return;
      }
    }
  };

  return (
    <KeyboardAvoidingView behavior="margin" style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          style={[styles.input, validationErrors.name && styles.inputError]}
          placeholder={validationErrors.name || "Name"}
          value={name}
          onChangeText={(text) => setName(text)}
          placeholderTextColor="#999"
        />
        <TextInput
          style={[styles.input, validationErrors.email && styles.inputError]}
          placeholder={validationErrors.email || "Email"}
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholderTextColor="#999"
        />
        <TextInput
          style={[styles.input, validationErrors.password && styles.inputError]}
          placeholder={validationErrors.password || "Password"}
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholderTextColor="#999"
        />
        <TextInput
          style={[
            styles.input,
            validationErrors.confirmPassword && styles.inputError,
          ]}
          placeholder={validationErrors.confirmPassword || "Confirm Password"}
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          placeholderTextColor="#999"
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
    backgroundColor: "#292929", // Dark background color
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#6B0F1A", // Bordeaux accent color
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "#1E1E1E", // Dark background color
    color: "#FFFFFF", // Light text color
  },
  inputError: {
    borderColor: "red",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: "#6B0F1A", // Bordeaux accent color
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: "#FFFFFF", // Light text color
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  link: {
    marginTop: 10,
    alignSelf: "flex-start",
  },
  linkText: {
    color: "#6B0F1A", // Bordeaux accent color
    fontSize: 14,
  },
});
