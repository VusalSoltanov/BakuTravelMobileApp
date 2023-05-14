import { View, Text } from 'react-native'
import React,{useState} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoardingScreen1 from '../../../screens/start/OnBoardingScreen1';
import CategoryListScreen from '../../../screens/start/CategoryListScreen';

const Start = createNativeStackNavigator();

const StartStack = () => {

  return (
    
    <Start.Navigator screenOptions={{
      headerShown: false
    }}>
      <Start.Screen name="Onboarding1" component={OnBoardingScreen1} />
      <Start.Screen name="CategoryList" options={{gestureEnabled: false}} component={CategoryListScreen} />


    </Start.Navigator>
  )
}

export default StartStack