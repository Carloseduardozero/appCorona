import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const AppTab = createBottomTabNavigator();

import Home from "./pages/Home";
import Pesquisa from './pages/pesquisa'
import Search from './pages/Search'
function Routes() {
  return (
    <NavigationContainer>
      <AppTab.Navigator screenOptions={{ headerShown: false }}>
      <AppTab.Screen name="Pesquisa" component={Pesquisa} />
        <AppTab.Screen name="Home" component={Home} />
        <AppTab.Screen name="Search" component={Search} />
       
      </AppTab.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
