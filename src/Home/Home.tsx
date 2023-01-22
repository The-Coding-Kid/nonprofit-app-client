import * as React from "react";
import { useState, useEffect } from "react";
import MapView, { Callout } from "react-native-maps";
import { Marker } from "react-native-maps";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import * as Location from "expo-location";
import axios from "axios";
import { FontAwesome5 } from "@expo/vector-icons";
import { Searchbar } from "react-native-paper";
import { Keyboard } from "react-native";
import { FloatingAction } from "react-native-floating-action";
import { AnimatedFAB } from 'react-native-paper';


//@ts-ignore
function Home({ navigation }) {
  const [location, setLocation] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState<any>(null);
  const [map, setMap] = useState<boolean>(false);
  const [data, setData] = useState<any | null>(null);
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query: any) => setSearchQuery(query);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      await axios
        .get("https://0612-98-37-209-152.ngrok.io/places/")
        .then(async (res) => {
          setData(await res.data);
        })
        .catch((err) => {
          console.error(err);
        });
      let location1 = await Location.getCurrentPositionAsync({});
      setTimeout(() => {
        setLocation(location1);
      }, 3000);
    })();
  }, []);

  useEffect(() => {
    setMap(true);
  }, [location]);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  return (
    <View style={styles.container}>
      {location ? (
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <MapView
            style={styles.map}
            showsUserLocation={true}
            initialRegion={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            {/* <Searchbar
              placeholder="Search"
              onChangeText={onChangeSearch}
              value={searchQuery}
              style={{
                zIndex: 1,
                marginTop: "25%",
                width: "90%",
                borderRadius: 15,
                alignSelf: "center",
              }}
            /> */}
            {data.map((item: any) => {
              return (
                <Marker
                  key={item._id}
                  coordinate={{
                    latitude: item.latitude,
                    longitude: item.longitude,
                  }}
                  onPress={() => {
                    navigation.navigate("PlaceModal", { item: item });
                  }}
                >
                  <FontAwesome5 name={item.type} size={25} color="#0096FF" />
                </Marker>
              );
            })}
          </MapView>
        </TouchableWithoutFeedback>
      ) : (
        <Text>Loading map</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default Home;
