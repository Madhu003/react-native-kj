import * as React from "react";
import { Button, View, Vibration } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";

import WhatsApp from "./screens/WhatsApp";
import Gallery from "./screens/Gallery";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        onPress={() => navigation.navigate("Notifications")}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        onPress={() =>
          setInterval(() => {
            // Vibration.vibrate(1000);
          }, 1000)
        }
        title="Go back home1"
      />
    </View>
  );
}

const Drawer = createDrawerNavigator();
const store = createStore(reducers);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Gallery" component={Gallery} />
          <Drawer.Screen name="WhatsApp" component={WhatsApp} />
          <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
