import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeNavigator } from './homeNavigator';
import { DataNavigator } from './dataNavigator';
import Live from '../screens/live';
import Welcome from '../screens/welcome';
import CustomTabBar from '../components/customTabBar';

const Tab = createBottomTabNavigator()

export default function AppBottomTabNavigator() {

    const [welcome, setWelcome] = useState(true)

    if (welcome) {
        return(
        <Welcome onClick={setWelcome} />
        )
    }

    return(
        <Tab.Navigator
            initialRouteName='Home'
            backBehavior='initialRoute'
            tabBar={ props => <CustomTabBar {...props}/>}>
            <Tab.Screen 
                name='Home' 
                component={HomeNavigator}
            />
            <Tab.Screen 
                name='Live' 
                component={Live}
            />
            <Tab.Screen 
                name='Data' 
                component={DataNavigator}
            />
        </Tab.Navigator>
)

}