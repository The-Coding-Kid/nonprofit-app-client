import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

interface Props {
  uri: string;
  width: number;
  height: number;
  padding: number;
}

// URI is in base64 format
const CustomImageComponent = (props: Props) => {
  return (
    <View style={{ paddingBottom: props.padding }}>
      <Image
        source={{ uri: props.uri }}
        style={{ width: props.width, height: props.height }}
      />
    </View>
  );
};

export default CustomImageComponent;
