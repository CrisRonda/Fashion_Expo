import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import {
  OnBoarding,
  Welcome,
  Login,
  SignUp,
  ForgotPassword,
  PasswordChanged,
} from "../screens";
const Stack = createStackNavigator();

export default (props) => {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        animationEnabled: true,
        ...TransitionPresets.ModalSlideFromBottomIOS,
        gestureEnabled: true,
        gestureEnabled: true,
        cardShadowEnabled: false,
      }}
      initialRouteName="OnBoarding"
    >
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="PasswordChanged" component={PasswordChanged} />
    </Stack.Navigator>
  );
};
