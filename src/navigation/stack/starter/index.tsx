import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoardingScreen1 from '../../../screens/start/OnBoardingScreen2';
import CategoryListScreen from '../../../screens/start/CategoryListScreen';
import OnboardingScreen2 from '../../../screens/start/OnBoardingScreen2';

const Starter = createNativeStackNavigator();

const StarterStack = () => {
  return (
    <Starter.Navigator screenOptions={{
      headerShown: false
    }}>
      <Starter.Screen name="Onboarding2" component={OnboardingScreen2} />
      <Starter.Screen name="CategoryList" options={{
        gestureEnabled: false
      }} component={CategoryListScreen} />

    </Starter.Navigator>
  )
}

export default StarterStack