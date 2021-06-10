import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ViewDataDetails({ route, navigation }) {

    const { variable, description } = route.params;

    useEffect(() => {
        navigation.setOptions({
            title: variable,
            headerTitleStyle: {
                color: '#0070FF',
                fontFamily: 'sansation-bold',
                textTransform: variable !== "pH" ? 'capitalize' : 'none' 
            }
        });
    });
    
    return(
        <View style={globalStyles.container}>
            <View style={globalStyles.detailsContent}>
                <ScrollView 
                    showsVerticalScrollIndicator={false}
                    style={{ flex: 1, marginLeft: 10, marginTop: 20, marginRight: 10, marginBottom: 10 }}>
                    <Text style={{ textAlign: 'justify', fontSize: 15 }}>{ description }</Text>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

})