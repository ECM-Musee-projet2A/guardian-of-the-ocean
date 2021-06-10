import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../screens/signIn';
import LogIn from '../screens/logIn';

const Stack = createStackNavigator();

export default function AuthenticationNavigator({ route, navigation }) {

    const { onClick } = route.params

    return(
        <Stack.Navigator 
            initialRouteName="Log In"
            headerMode='none'
        >
        <Stack.Screen 
            name="Sign In" 
            component={SignIn}
            />
        <Stack.Screen 
            name="Log In" 
            component={LogIn}
            initialParams={{onClick: onClick}}
            />
        </Stack.Navigator>
    )
}