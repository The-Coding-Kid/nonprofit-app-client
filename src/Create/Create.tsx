import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Dimensions,
  Button,
} from "react-native";
import React, { useState } from "react";
import { Keyboard } from "react-native";
import axios from "axios";

const Create = () => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [latitude, setLatitude] = useState<any>(0);
  const [longitude, setLongitude] = useState<any>(0);
  const [website, setWebsite] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");

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
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
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
          value={name}
          onChangeText={(text) => {
            setName(text);
          }}
          placeholder="Name"
          style={{
            borderWidth: 1,
            width: 200,
            padding: 5,
            borderRadius: 5,
            marginTop: 20,
          }}
        />
        <TextInput
          value={description}
          onChangeText={(text) => {
            setDescription(text);
          }}
          placeholder="Description"
          style={{
            borderWidth: 1,
            width: 200,
            padding: 5,
            borderRadius: 5,
            marginTop: 20,
          }}
        />
        <TextInput
          value={email}
          onChangeText={(text) => {
            setEmail(text);
          }}
          placeholder="Email"
          style={{
            borderWidth: 1,
            width: 200,
            padding: 5,
            borderRadius: 5,
            marginTop: 20,
          }}
        />
        <TextInput
          value={website}
          onChangeText={(text) => {
            setWebsite(text);
          }}
          placeholder="Website"
          style={{
            borderWidth: 1,
            width: 200,
            padding: 5,
            borderRadius: 5,
            marginTop: 20,
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
            borderWidth: 1,
            width: 200,
            padding: 5,
            borderRadius: 5,
            marginTop: 20,
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
            borderWidth: 1,
            width: 200,
            padding: 5,
            borderRadius: 5,
            marginTop: 20,
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
            borderWidth: 1,
            width: 200,
            padding: 5,
            borderRadius: 5,
            marginTop: 20,
          }}
        />
        <Button onPress={handleSubmit} title="Submit" color="blue" />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Create;
