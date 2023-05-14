import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ExploreStack from '../stack/tab/ExploreStack';
import SaveMain from '../../screens/save';
import SaveStack from '../stack/tab/SaveStack';
import SearchStack from '../stack/tab/SearchStack';
import SvgHome from '../../assets/image/HomeIcon';

const Tab = createBottomTabNavigator();

const TabMain = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#1c1c1c',
            borderColor: '#1c1c1c',
            borderTopWidth: 1,
            borderTopColor: '#1c1c1c',
          },
        }}>
        <Tab.Screen
          name="Explore"
          component={ExploreStack}
          options={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({focused}: any) => (
              <SvgHome />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchStack}
          options={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({focused}: any) => (
              <SvgHome />
            ),
          }}
        />
        <Tab.Screen
          name="Save"
          component={SaveStack}
          options={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({focused}: any) => (
              <SvgHome />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default TabMain;
