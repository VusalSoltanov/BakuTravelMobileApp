import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavoritesMain from '../../../screens/save';
import SaveMain from '../../../screens/save';

const Saves = createNativeStackNavigator();


const SaveStack = () => {
  return (
    <Saves.Navigator>
      <Saves.Screen name="SavesMain" component={SaveMain} options={{headerShown:false}}/>
    </Saves.Navigator>
  )
}

export default SaveStack