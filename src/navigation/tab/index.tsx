import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ExploreStack from '../stack/tab/ExploreStack';
import SaveMain from '../../screens/save';
import SaveStack from '../stack/tab/SaveStack';

const Tab = createBottomTabNavigator();

const TabMain = () => {
  return (
    <>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Explore" component={ExploreStack} />
        <Tab.Screen name="Save" component={SaveStack} />
      </Tab.Navigator>
    </>
  );
};

export default TabMain;
