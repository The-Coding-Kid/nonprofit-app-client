import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/Home/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Create from "./src/Create/Create";
import { Entypo } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator
        activeTintColor="#black"
        inactiveTintColor="white"
        tabBarLabelStyle={{ color: "white" }}
        barStyle={{ backgroundColor: "#30bfbf", margin: 10 }}
        initialRouteName="Near You"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Near You") {
              iconName = "location-pin";
              color = focused ? "#0079fd" : "#7a7a7a";
            } else if (route.name === "Create") {
              iconName = "plus";
              color = focused ? "#0079fd" : "#7a7a7a";
            }
            //@ts-ignore
            return <Entypo name={iconName} size={22} color={color} />;
          },
        })}
      >
        <Tab.Screen
          name="Near You"
          component={Home}
          options={{ headerShown: false }}
        />
        <Tab.Screen name="Create" component={Create} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
