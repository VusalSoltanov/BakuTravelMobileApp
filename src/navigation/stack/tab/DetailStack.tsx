import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExploreMain from '../../../screens/explore';
import DetailScreen from '../../../screens/DetailScreen';

const Detail = createNativeStackNavigator();

const DetailStack = () => {
  return (
    <Detail.Navigator>
      <Detail.Screen name="DetailScreen" component={DetailScreen} options={{headerShown:false}} />
    </Detail.Navigator>
  )
}

export default DetailStack