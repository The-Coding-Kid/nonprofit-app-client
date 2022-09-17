import { View, Text, Button, StyleSheet } from "react-native";
import React, { useState } from "react";

const PlaceModal: React.FC = ({ route, navigation }) => {
  const [data, setData] = useState<any>(route.params.item);
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}>{data.name}</Text>
      <View style={styles.textContainer}>
        <Text>Hi</Text>
        <Button onPress={() => navigation.goBack()} title="Dismiss" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  textContainer: {
    alignItems: "center",
    marginTop: "30%",
  },
});

export default PlaceModal;
