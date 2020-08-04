import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { OnBoarding, Welcome } from "../screens";
const Stack = createStackNavigator();

export default (props) => {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        animationEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
        gestureEnabled: true,
        gestureEnabled: true,
        cardShadowEnabled: false,
      }}
    >
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="Welcome" component={Welcome} />
    </Stack.Navigator>
  );
};
