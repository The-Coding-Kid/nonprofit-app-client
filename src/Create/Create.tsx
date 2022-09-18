import {
  View,
  Text,
  TouchableWithoutFeedback,
  Dimensions,
  Button,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { Keyboard } from "react-native";
import axios from "axios";
import { TextInput, Title, Provider } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import DropDown from "react-native-paper-dropdown";

const Create = ({ navigation }) => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [latitude, setLatitude] = useState<any>(0);
  const [longitude, setLongitude] = useState<any>(0);
  const [website, setWebsite] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [showDropDown, setShowDropDown] = useState(false);

  const typeList = [
    { label: "Food Bank", value: "bank" },
    { label: "Homeless Shelter", value: "night-shelter" },
    { label: "Temple", value: "mosque" },
  ];

  const handleSubmit = () => {
    axios
      .post("https://nonprofit-ap.herokuapp.com/places/create", {
        name: name,
        description: description,
        latitude: latitude,
        longitude: longitude,
        website: website,
        phone: phone,
        email: email,
      })
      .then((res) => {})
      .catch((err) => {});
  };

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
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 20, marginTop: 50 }}>Add new Place</Text>
          <TextInput
            style={{
              marginTop: 20,
              width: 300,
              alignSelf: "center",
              height: 45,
            }}
            value={name}
            onChangeText={setName}
            keyboardType="email-address"
            label={"Name"}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TextInput
            value={description}
            onChangeText={(text) => {
              setDescription(text);
            }}
            placeholder="Description"
            style={{
              marginTop: 20,
              width: 300,
              alignSelf: "center",
              height: 45,
            }}
          />
          <TextInput
            value={email}
            onChangeText={(text) => {
              setEmail(text);
            }}
            placeholder="Email"
            style={{
              marginTop: 20,
              width: 300,
              alignSelf: "center",
              height: 45,
            }}
          />
          <TextInput
            value={website}
            onChangeText={(text) => {
              setWebsite(text);
            }}
            placeholder="Website"
            style={{
              marginTop: 20,
              width: 300,
              alignSelf: "center",
              height: 45,
            }}
          />
          <TextInput
            keyboardType="numeric"
            value={latitude}
            onChangeText={(text) => {
              setLatitude(text);
            }}
            placeholder="Latitude"
            style={{
              marginTop: 20,
              width: 300,
              alignSelf: "center",
              height: 45,
            }}
          />
          <TextInput
            keyboardType="numeric"
            value={longitude}
            onChangeText={(text) => {
              setLongitude(text);
            }}
            placeholder="Longitude"
            style={{
              marginTop: 20,
              width: 300,
              alignSelf: "center",
              height: 45,
            }}
          />
          <TextInput
            keyboardType="numeric"
            value={phone}
            onChangeText={(text) => {
              setPhone(text);
            }}
            placeholder="Phone"
            style={{
              marginTop: 20,
              width: 300,
              alignSelf: "center",
              height: 45,
            }}
          />
          <Button onPress={handleSubmit} title="Submit" color="blue" />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Create;
