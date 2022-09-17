import { View, Button, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Title, Subheading, Text } from "react-native-paper";
import { A } from "@expo/html-elements";

const PlaceModal: React.FC = ({ route, navigation }) => {
  const [data, setData] = useState<any>(route.params.item);
  return (
    <View style={styles.container}>
      <Title style={{ fontSize: 32, marginTop: 50, fontWeight: "bold" }}>
        {data.name}
      </Title>
      <Subheading style={{ fontSize: 14, marginTop: 5 }}>
        {data.description}
      </Subheading>
      <Text style={{ marginHorizontal: 40, marginTop: 25, color: "#595959" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ridiculus mus mauris
        vitae ultricies leo integer. Id leo in vitae turpis massa.
      </Text>
      <Text style={{ fontSize: 14, marginTop: 25 }}>
        Contact us at <Text style={{ color: "#0096FF" }}>{data.email}</Text>
      </Text>
      <Text style={{}}>
        Our Website:
        <A style={{ color: "#0096FF" }} href={data.website}>
          {" "}
          {data.website}
        </A>
      </Text>
      <Text style={{ fontSize: 14 }}>
        Call us at <Text style={{ color: "#0096FF" }}>{data.phone}</Text>
      </Text>

      <View style={styles.textContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Subheading
            style={{ color: "white", fontWeight: "bold", fontSize: 20 }}
          >
            OK
          </Subheading>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  textContainer: {
    // alignItems: "center",
    marginTop: 50,
  },
  button: {
    backgroundColor: "#0096FF",
    height: 50,
    width: 350,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PlaceModal;
