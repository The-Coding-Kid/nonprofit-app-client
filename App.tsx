import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/Home/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Create from "./src/Create/Create";
import { Entypo } from "@expo/vector-icons";
import PlaceModal from "./src/Home/PlaceModal";

const Tab = createBottomTabNavigator();
const RootStack = createNativeStackNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator
      activeTintColor="black"
      inactiveTintColor="white"
      tabBarLabelStyle={{ color: "white" }}
      barStyle={{ backgroundColor: "#30bfbf", margin: 10 }}
      initialRouteName="Near Me"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Near Me") {
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
      <Tab.Group>
        <Tab.Screen
          name="Near Me"
          component={Home}
          options={{ headerShown: false }}
        />
      </Tab.Group>
      {/* <Tab.Group screenOptions={{ presentation: "modal" }}>
          <RootStack.Screen name="MyModal" component={ModalScreen} />
        </Tab.Group> */}
      <Tab.Screen name="Create" component={Create} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <RootStack.Navigator>
        <RootStack.Screen
          name="Home"
          component={TabNav}
          options={{ headerShown: false }}
        />
        <RootStack.Group
          screenOptions={{ presentation: "modal", headerShown: false }}
        >
          <RootStack.Screen
            name="PlaceModal"
            component={PlaceModal}
          ></RootStack.Screen>
        </RootStack.Group>
      </RootStack.Navigator>
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
