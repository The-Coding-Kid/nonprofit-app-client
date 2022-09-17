import * as React from "react";
import { useState, useEffect } from "react";
import MapView, { Callout } from "react-native-maps";
import { Marker } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import * as Location from "expo-location";
import axios from "axios";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

function Home({ navigation }) {
  const [location, setLocation] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState<any>(null);
  const [map, setMap] = useState<boolean>(false);
  const [data, setData] = useState<any | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  useEffect(() => {
    setMap(true);
  }, [location]);

  useEffect(() => {
    axios
      .get("https://nonprofit-ap.herokuapp.com/places/")
      .then(async (res) => {
        setData(res.data);
        console.log("lat: " + location.coords.latitude);
        console.log("lng: " + location.coords.longitude);
        // console.log(location.coords.latitude, location.coords.longitude);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [map, location]);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  return (
    <View style={styles.container}>
      {map && location && data ? (
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
          {data.map((item: any) => {
            return (
              <Marker
                key={item._id}
                coordinate={{
                  latitude: item.latitude,
                  longitude: item.longitude,
                }}
                onPress={() => {
                  console.log(item);
                  navigation.navigate("PlaceModal", { item: item });
                }}
              >
                <MaterialIcons name="night-shelter" size={30} color="#0096FF" />
              </Marker>
            );
          })}
        </MapView>
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
