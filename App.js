// In App.js in a new project

import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider, connect } from "react-redux";
import { store } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
import Home from "./pages/Home";
import Cart from "./pages/Cart";


const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      {/* <PersistGate persistor={persistor}> */}
      <View>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Cart" component={Cart} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
      {/* </PersistGate> */}
    </Provider>
  );
}

export default App;
