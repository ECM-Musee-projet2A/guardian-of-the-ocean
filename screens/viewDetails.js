import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ViewDetails({ route, navigation }) {

    const { name, height, depth, artist, image, description } = route.params;

    useEffect(() => {
        navigation.setOptions({
            title: name
        });
    });
    
    return(
        <View style={globalStyles.container}>
            <View style={globalStyles.detailsContent}>
                <View style={{ alignItems: 'center', margin: 10}}>
                    <Image source={image} style={styles.image}/>
                </View>
                <View style={{ alignItems: 'center'}}>
                    <Text style={styles.artist}>de {artist}</Text>
                </View>
                <ScrollView 
                    showsVerticalScrollIndicator={false}
                    style={{ flex: 1, marginLeft: 10, marginTop: 20, marginRight: 10, marginBottom: 10 }}>
                    <Text style={{ textAlign: 'justify' }}>{ description }</Text>
                    <Text style={{ marginTop: 20, marginBottom: 20}}>{artist}</Text>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: '100%',
        borderRadius: 10
    },
    
    artist: {
        fontStyle: 'italic',
        fontSize: 16
    },
})