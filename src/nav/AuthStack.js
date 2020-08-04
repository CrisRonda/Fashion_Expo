import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { OnBoarding, Welcome } from "../screens";
const Stack = createStackNavigator();

export default (props) => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="Welcome" component={Welcome} />
    </Stack.Navigator>
  );
};
