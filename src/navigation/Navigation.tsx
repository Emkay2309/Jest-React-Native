import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from '../utils/NavigationUtil';
import SplashScreen from '../screens/splash/SplashScreen';
import OnBoardingScreen from '../screens/onboard/OnboardingScreen';
import LoginScreen from '../screens/login/LoginScreen';
import HomeScreen from '../screens/home/HomeScreen';
import ProductScreen from '../screens/product/ProductScreen';
import RegisterScreen from '../screens/register/RegisterScreen';
import DetailScreen from '../screens/details/DetailScreen'

const Stack = createNativeStackNavigator();

const Navigation = () => {

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={() => ({
          headerShown: false,
        })}>
        <Stack.Screen component={SplashScreen} name="SplashScreen" />
        <Stack.Screen component={OnBoardingScreen} name="OnBoardingScreen" />
        <Stack.Screen component={LoginScreen} name="LoginScreen" />
        <Stack.Screen component={RegisterScreen} name="RegisterScreen" />
        <Stack.Screen component={HomeScreen} name="HomeScreen" />
        <Stack.Screen component={ProductScreen} name="ProductScreen" />
        <Stack.Screen component={DetailScreen} name="DetailScreen" />
        

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
