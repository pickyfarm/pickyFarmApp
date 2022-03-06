import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "@navigations/TabNavigator";

const RootStackNav = createNativeStackNavigator();

const RootNavigator = () => (
  <NavigationContainer>
    <RootStackNav.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <RootStackNav.Screen name="TabNavigator" component={TabNavigator} />
    </RootStackNav.Navigator>
  </NavigationContainer>
);
export default RootNavigator;
