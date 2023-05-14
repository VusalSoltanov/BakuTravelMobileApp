import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchMain from '../../../screens/search';

const Saves = createNativeStackNavigator();


const SearchStack = () => {
  return (
    <Saves.Navigator>
      <Saves.Screen name="SearhMain" component={SearchMain} options={{headerShown:false}}/>
    </Saves.Navigator>
  )
}

export default SearchStack