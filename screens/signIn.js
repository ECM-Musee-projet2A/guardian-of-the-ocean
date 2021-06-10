import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';

export default function SignIn({ navigation }) {
    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ECECEC', alignItems: 'center', justifyContent: 'center'}}>
            <View style={{backgroundColor: '#ECECEC'}}>
                <Text style={{fontSize: 24 }}>Sign In Screen</Text>
            </View>
        </SafeAreaView>
    )
}