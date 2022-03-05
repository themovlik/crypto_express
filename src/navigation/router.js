import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import all the screens from the screens folder
import LoadWalletScreen from '../screens/InitialScreen';
import HomeScreen from '../screens/HomeScreen';

// Navigators
const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator
      initialRouteName="LoadWalletScreen"
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      <Stack.Screen name="LoadWalletScreen" component={LoadWalletScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default Router;
