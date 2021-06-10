import  React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import ViewDetails from '../screens/viewDetails';

const Stack = createStackNavigator();

export const HomeNavigator = ({ navigation }) => {

  return(
    <Stack.Navigator 
        initialRouteName="Home"
    >
      <Stack.Screen 
        name="Home" 
        component={Home}
        options={{
            headerShown: false
        }}/>
      <Stack.Screen 
        name="View details" 
        component={ViewDetails}
        options={{
            headerTitleAlign: 'center',
            headerTitleStyle: {
                color: '#0070FF',
                fontFamily: 'sansation-bold'
            },
            headerTransparent: false
        }}/>
    </Stack.Navigator>
  );
}