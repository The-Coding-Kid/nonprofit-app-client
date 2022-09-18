import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Subheading, Title } from "react-native-paper";
import { TextInput } from "react-native-paper";
import { auth } from "../../firebase_init";

const AdminLogin = ({ navigation }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("CreateScreen");
      }
    });

    return unsubscribe;
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        style={{
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
        }}
      >
        <View
          style={{
            alignItems: "center",
            height: Dimensions.get("window").height,
          }}
        >
          <Title style={{ fontSize: 32, marginTop: 50, fontWeight: "bold" }}>
            Log In
          </Title>
          <TextInput
            style={{
              marginTop: 50,
              width: 300,
              alignSelf: "center",
              height: 45,
            }}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            label={"Email"}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            style={{
              marginTop: 50,
              width: 300,
              alignSelf: "center",
              height: 45,
            }}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            textContentType="password"
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("CreateScreen")}
          >
            <Subheading
              style={{ color: "white", fontWeight: "bold", fontSize: 20 }}
            >
              OK
            </Subheading>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: "20%",
  },
  button: {
    backgroundColor: "#3c65a0",
    height: 50,
    width: 300,
    borderRadius: 15,
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AdminLogin;
