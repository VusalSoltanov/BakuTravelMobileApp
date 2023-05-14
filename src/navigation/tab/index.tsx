import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExploreStack from '../stack/tab/ExploreStack';


const Tab = createBottomTabNavigator();

const TabMain = () => {
  return (<>



    <Tab.Navigator screenOptions={{ headerShown: false }}>


    <Tab.Screen
      name="Explore"
      component={ExploreStack}
     
    />

    


    </Tab.Navigator>
  </>
  )
}

export default TabMain