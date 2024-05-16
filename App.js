import React from 'react';

import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import Home from './assets/src/pages/Home';
import About from './assets/src/pages/About';
import Experience from './assets/src/pages/Experience';
import Education from './assets/src/pages/Education';
import Contact from './assets/src/pages/Contact';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
   
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
      }}>
        <Tab.Screen 
          name="Home"
          component={Home}
          options={{
            // headerShown: false,
            tabBarIcon: ({ color, size}) => {
              return <Feather name="home" color={color} size={size} />
            } 
          }}
        />

        <Tab.Screen 
          name="About"
          component={About}
          options={{
            tabBarIcon:({color, size}) => {
              return <Feather name="file-text" color={color} size={size} />
            }
          }}
        />

        <Tab.Screen 
          name="Education"
          component={Education}
          options={{
            tabBarIcon:({color, size}) => {
              return <Feather name="book" color={color} size={size} />
            }
          }}
        />

        <Tab.Screen 
          name="Experience"
          component={Experience}
          options={{
            tabBarIcon:({ color, size }) => {
              return <Feather name="star" color={color} size={size} />
            }
          }}
        />

        <Tab.Screen 
          name="Contact"
          component={Contact}
          options={{
            tabBarIcon:({ color, size }) => {
              return <Feather name="link" color={color} size={size} />
            } 
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}




